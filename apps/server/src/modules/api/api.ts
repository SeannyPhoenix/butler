import express from 'express';
import {API_PORT} from '../../util/env.js';
import {addServerToSignalHandling} from '../../util/signal.js';
import {RouterV1} from './routes/index.js';

export async function startApi(): Promise<void> {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.use(RouterV1);

  const server = app.listen(API_PORT, () => {
    console.info(`API listening on port ${API_PORT}`);
  });

  addServerToSignalHandling(server);
}
