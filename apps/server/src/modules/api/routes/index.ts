import * as express from 'express';
import {FoodRouter} from './food.routes.js';

export const RouterV1 = express.Router();

RouterV1.use('/foods', FoodRouter);
