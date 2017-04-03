import express from 'express';
import {isUndefined, isString} from 'lodash';
import events from './events.js';
import news from './news.js';
import {table} from 'app/orm';
import {Validator} from 'app/reducer';


const app = express();

app.use('/events',events);
app.use('/news',news);


export default app;