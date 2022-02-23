import mongoose, { Mongoose } from 'mongoose';
import { MONGODB_URL } from '../../util/env.js';


export const dbConnect = async (): Promise<Mongoose | null> => {
  try {
    if(!MONGODB_URL){
      console.error('No DB URI');
      return null;
    }

    console.info('Connecting to database...');
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.info('DB connection successful');
  } catch (error) {
    console.error('Error connecting to database:');
    console.error(error);
  } finally {
    return mongoose;
  }
};

export const dbDisconnect = mongoose.disconnect;
