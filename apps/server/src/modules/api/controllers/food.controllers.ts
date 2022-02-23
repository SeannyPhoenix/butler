import {Request, Response} from 'express';
import * as core from 'express-serve-static-core';
import { BaseFood, FoodDocument } from '../models/food.model';
import { Food } from '../models/index.js';

// Types
type CreateFoodRequest = Request<undefined, undefined, BaseFood>
type FoodDocumentResponse = Response<FoodDocument>;


// Controllers
async function createFood(req: CreateFoodRequest, res: FoodDocumentResponse): Promise<void> {
  try {
    const {body} = req;
    if (!body.name){
      throw new Error('no name!');
    }

    const newFood = await Food.create(body);
    res
        .status(200)
        .json(newFood);
  } catch (error) {
    res.sendStatus(500);
  }
}

export const FoodController = {
  createFood,
};
