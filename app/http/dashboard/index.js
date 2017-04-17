import express from 'express';
import {table} from 'app/orm';

import {isUuid} from 'app/util';

const app = express();
// get request for news where news are ordered by created date
app.get('/news', async (req, res) => {
  const newsDetails = await table('news')
    .select('id', 'heading', 'date_time', 'images', 'author')
    .orderBy('created_at', 'desc')
    .all()
  ;
  return res.status(200).send({msg: 'News', newsDetails});
});

app.get('/news/:newsId', newsExits, async (req, res) => {
  return res.status(200).send({msg: 'News', news: req.news});
});

async function newsExits(req, res, next) {
  if(isUuid(req.params.newsId)) {
    const newz = await table('news').find(req.params.newsId);
    req.news = newz;
    return next();
  } else {
    return res.status(409).send({msg: 'News id is not valid'});
  }
}



// get request for events where events are ordered by created date
app.get('/events', async (req, res) => {
  const eventDetails = await table('events')
    .select('id', 'name', 'date_time', 'images', 'venue', 'event_organizer_name')
    .orderBy('created_at', 'desc')
    .all()
  ;
  return res.status(200).send({msg: 'Events', eventDetails});
});

async function eventExits(req, res, next) {
  if(isUuid(req.params.eventId)) {
    const event = await table('events').find(req.params.eventId);
    req.event = event;
    return next();
  } else {
    return res.status(409).send({msg: 'Event id is not valid'});
  }
}

app.get('/events/:eventId', eventExits, async (req, res) => {
  return res.status(200).send({msg: 'Events', event: req.event});
});

// get request for news on the basis of a particular author
// app.get('/:author', async (req, res) => {
//     const newsDetails = (await table('news')
//    .where({author: req.params.author})
//    .all()
//    );
//     return res.status(200).send({msg: 'News', newsDetails});
// });
// get request for events on the basis of eventOrganizerName
// app.get('/event/:eventOrganizerName', async (req, res) => {
//     const eventDetails = (await table('events')
//    .where({event_organizer_name: req.params.eventOrganizerName})
//    .all());
//     return res.status(200).send({msg: 'Events', eventDetails});
// });

// get request for locations 
app.get('/locations', async (req, res) => {
  const locationDetails = await table('locations')
    .select('id', 'name', 'description', 'address','images')
    .all()
  ;
  console.log("inside locations");
  return res.status(200).send({msg: 'Locations', locationDetails});
});

async function locationExits(req, res, next) {
  if(isUuid(req.params.locationId)) {
    const location = await table('locations').find(req.params.locationId);
    req.location = location;
    return next();
  } else {
    return res.status(409).send({msg: 'Location id is not valid'});
  }
}

app.get('/locations/:locationId', locationExits, async (req, res) => {
  return res.status(200).send({msg: 'Locations', location: req.location});
});

export default app;
