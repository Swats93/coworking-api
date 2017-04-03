import express from 'express';
import {isUndefined, isString} from 'lodash';
import {table, orm} from 'app/orm';
import {Validator} from 'app/reducer';


const app = express();



//get request for news on the basis of a particular author
app.get('/:author', async (req, res) => {
    const newsDetails = (await table('news')
		.where({author: req.params.author})
		.all()
		);
		
    return res.status(200).send({msg: 'News', newsDetails});
});

//get request for news where news are ordered by created date
app.get('/', async (req, res) => {
    const newsDetails = (await table('news')
		.orderBy(orm.knex.raw('created_at::timestamp::date'), 'asec')
		.all()
		);
		
    return res.status(200).send({msg: 'News', newsDetails});
});


//get request for events on the basis of eventOrganizerName
app.get('/event/:eventOrganizerName', async (req, res) => {
    const eventDetails = (await table('events')
		.where({event_organizer_name: req.params.eventOrganizerName})
		.all());
    return res.status(200).send({msg: 'Events', eventDetails});
});

//get request for events where events are ordered by created date
app.get('/event/', async (req, res) => {
    const eventDetails = (await table('events')
		.orderBy(orm.knex.raw('created_at::timestamp::date'), 'asec')
		.all());
    return res.status(200).send({msg: 'Events', eventDetails});
});
export default app;
