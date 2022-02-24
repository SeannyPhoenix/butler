import {dbConnect, startApi} from './modules/index.js';

export async function server(): Promise<void> {
  dbConnect();
  startApi();
} 

server();
