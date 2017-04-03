import express from 'express';
import {isUndefined, isString} from 'lodash';

import {table, orm} from 'app/orm';
import {Validator} from 'app/reducer';

const app = express();


const validator = new Validator({
  ['name'](name) {
  	return !isUndefined(name) && isString(name) && name.length > 0 ? 
  		null : 'Event name is not valid';
  },
  ['content'](content) {
  	return !isUndefined(content) && isString(content) && content.length > 0 ?
  		null : 'content is not valid';
  },
  ['venue'](venue) {
  	return !isUndefined(venue) && isString(venue) && venue.length > 0 ?
  		null : 'venue is not valid';
  },
  ['dateTime'](dateTime) {
  	return !isUndefined(dateTime) && isString(dateTime) && dateTime.length > 0 ?
  		null : 'dateTime is not valid';
  },
  ['eventOrganizerName'](eventOrganizerName) {
  	return !isUndefined(eventOrganizerName) && isString(eventOrganizerName) && 
  		eventOrganizerName.length > 0 ? null : 'eventOrganizerName is not valid';
  },
  ['images'](images) {
  	return !isUndefined(images) && isString(images) && images.length > 0 ?
  		null : 'image is not valid';
  },
  ['videos'](videos) {
  	return !isUndefined(videos) && isString(videos) && videos.length > 0 ?
  		null : 'video is not valid';
  }
});

//post request for events
app.post('/', async(req, res) => {
 	const errors = await validator.errors(req.body);
 	if(errors) {
 		return res.status(400).send({errors});
 	}
 	const event = await table('events').insert({
 		name: req.body.name,
 		content: req.body.content,
 		date_time: req.body.dateTime,
 		images: req.body.images,
 		videos: req.body.videos,
 		venue: req.body.venue,
 		event_organizer_name: req.body.eventOrganizerName
 	});

 	return res.status(200).send({msg: 'Event inserted', event});
});

//get request for events where events are ordered by created date
app.get('/event/', async (req, res) => {
    const eventDetails = (await table('events')
    .orderBy(orm.knex.raw('created_at::timestamp::date'), 'asec')
    .all());
    return res.status(200).send({msg: 'Events', eventDetails});
});

async function eventExists(req, res, next) {
	const event = await table('events').find({id: req.params.eventId});
	if(event) {
		req.event = event;
		return next();
	}
	return res.status(409).send({msg: 'Event does not exists'});
}

//update data in events table
app.put('/:eventId', eventExists, async(req, res) => {
	const event = await table('events')
	.where({id: req.event.id})
	.update({name: req.body.name,
		content: req.body.content,
		date_time: req.body.dateTime,
		images: req.body.images,
		videos: req.body.videos,
		venue: req.body.venue,
		event_organizer_name: req.body.eventOrganizerName
	});
	if(event) {
		return res.status(200).send({msg: 'Event updated', event});
	} 
	return res.status(409).send({msg: 'Cannot update right now. Try again later'});
});


app.delete('/:eventId', eventExists, async(req, res) => {
	const event = await table('events')
		.where({id: req.event.id})
		.delete();

	if(event) {
		return res.status(200).send({msg:'event deleted'});
	}
	return res.status(409).send({msg: 'Cannot update right now. Try again later'});
});


export default app;