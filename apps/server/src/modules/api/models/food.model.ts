import mongoose, {Document, Model} from 'mongoose';
import MUUID from 'uuid-mongodb';
import {binaryUUID} from '../../../util/uuid.js';

const {Schema, model} = mongoose;
const {v4: uuid}= MUUID;

export type BaseFood = { 
  name: string;
}

export interface FoodDocument extends BaseFood, Document {};
export type FoodModel = Model<FoodDocument, {}, {}>;

const FoodSchema = new Schema<FoodDocument, FoodModel>({
  _id: {
    ...binaryUUID,
    default: uuid,
  },
  name: {
    type: String,
    required: true,
  },
});

export const Food = model<FoodDocument, FoodModel>('Food', FoodSchema);
