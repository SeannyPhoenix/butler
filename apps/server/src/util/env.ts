import dotenv from 'dotenv';

dotenv.config();

const apiPort = process.env.API_PORT;
const devEnv = process.env.DEV_ENV;
const mongodbURL = process.env.MONGODB_URL;

export const API_PORT = apiPort ? parseInt(apiPort) : 3456;
export const DEV_ENV = (devEnv === 'true') ? true : false;
export const MONGODB_URL = mongodbURL; 
