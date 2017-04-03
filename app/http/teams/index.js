import express from 'express';
import {isUndefined, isString} from 'lodash';

import {table} from 'app/orm';
import {Validator} from 'app/reducer';


const app = express();

async function teamAlreadyExists(req, res, next) {
	if(isUndefined(req.body.name) || !isString(req.body.name) || req.body.name === 0) {
		return next();
	}
	const teamIds = (await table('teams')
		.where({name: req.body.name})
		.all()).then((teams) => {
			return teams.map((team) => {
				return team.id
			});
		})
	const exists = await table('user_teams')
		.where({user_id: req.user.id})
		.whereIn('team_id', teamIds)
		.all()
	;
	if(exists) {
		return res.status(409).send({msg: 'Team name already exists'})
	}
	next();
}

const validator = new Validator({
  ['name'](name) {
  	return !isUndefined(name) && isString(name) && name.length > 0 ? null : 'Name is not valid';
  },
  ['role'](role) {
  	return !isUndefined(role) && isString(role) && role.length > 0 ? null : 'Role is not valid';
  }
});


app.post('/', teamAlreadyExists, async(req, res) => {
 	const errors = await validator(req.body);
 	if(errors) {
 		return res.status(400).send({errors});
 	}
 	const team = await table('teams').insert({
 		name: req.body.name
 	});
 	await table('user_teams').insert({
 		user_id: req.user.id,
 		team_id: team.id,
 		role: req.body.role
 	});

 	return res.status(200).send({msg: 'Team inserted', team});
});

app.get('/', async (req, res) => {
  const teams = await table('user_teams')
    .eagerLoad('team')
    .forUser(req.user)
    .all()
    .then((userTeams) => {
      return userTeams.map(({team}) => team);
    })
  ;
  return res.status(200).send({msg: 'Teams', teams});
});

async function teamExists(req, res, next) {
	const team = await table('teams').find({id: req.params.teamId});
	if(team) {
		req.team = team;
		return next();
	}
	return res.status(409).send({msg: 'Team does not exists'});
}

app.put('/:teamId', teamExists, async(req, res) => {
	await table('teams')
		.where({id: req.team.id})
		.update({name: req.body.name})
})

export default app;