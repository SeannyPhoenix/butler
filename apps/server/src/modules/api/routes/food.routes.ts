import * as express from 'express';
import {FoodController} from '../controllers/index.js';

export const FoodRouter = express.Router();

FoodRouter.post('/', FoodController.createFood);
