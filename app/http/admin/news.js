import express from 'express';
import {isUndefined, isString} from 'lodash';
import {table, orm} from 'app/orm';
import {Validator} from 'app/reducer';


const app = express();

// To check if news Already exists or not
// async function newsAlreadyExists(req, res, next) {
// 	if(isUndefined(req.body.heading) || !isString(req.body.heading) || req.body.heading === 0) {
// 		return next();
// 	}
// 	const newsIds = (await table('news')
// 		.where({heading: req.body.heading})
// 		.all()).then((news) => {
// 			return news.map((neews) => {
// 				return neews.id
// 			});
// 		})
	
// 	if(newsIds) {
// 		return res.status(409).send({msg: 'News already exists'})
// 	}
// 	next();
// }

const validator = new Validator({
  ['heading'](heading) {
  	return !isUndefined(heading) && isString(heading) && heading.length > 0 ? null : 'News heading is not valid';
  },
  ['content'](content) {
  	return !isUndefined(content) && isString(content) && content.length > 0 ? null : 'content is not valid';
  },
  ['author'](author) {
  	return !isUndefined(author) && isString(author) && author.length > 0 ? null : 'author is not valid';
  },
  ['images'](images) {
  	return !isUndefined(images) && isString(images) && images.length > 0 ? null : 'image is not valid';
  },
  ['videos'](videos) {
  	return !isUndefined(videos) && isString(videos) && videos.length > 0 ? null : 'video is not valid';
  },

});

//post request for news
app.post('/', async(req, res) => {
 	const errors = await validator.errors(req.body);
 	if(errors) {
 		return res.status(400).send({errors});
 	}
 	const news = await table('news').insert({
 		heading: req.body.heading,
 		content: req.body.content,
 		date_time: req.body.dateTime,
 		images: req.body.images,
 		videos: req.body.videos,
 		author: req.body.author 		
 	});

 	return res.status(200).send({msg: 'News inserted', news});
});

//get request for news where news are ordered by created date
app.get('/', async (req, res) => {
    const newsDetails = (await table('news')
    .orderBy(orm.knex.raw('created_at::timestamp::date'), 'asec')
    .all()
    );
    
    return res.status(200).send({msg: 'News', newsDetails});
});

async function newsExists(req, res, next) {
	const newz = await table('news').find({id: req.params.newsId});
	if(newz) {
		req.newz = newz;
		return next();
	}
	return res.status(409).send({msg: 'News does not exist'});
}

//update data in news table
app.put('/:newsId', newsExists, async(req, res) => {
	await table('news')
		.where({id: req.news.id})
		.update({heading: req.body.heading,
				content: req.body.content,
 				date_time: req.body.dateTime,
 				images: req.body.images,
 				videos: req.body.videos,
 				author: req.body.author
		})
})

export default app;