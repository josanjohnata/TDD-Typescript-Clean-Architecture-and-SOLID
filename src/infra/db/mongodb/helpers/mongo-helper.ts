import { MongoClient } from "mongodb";

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect(): Promise<void> {
    await this.client.close()
  }
}

/*
const mongoSetup = require('@shelf/jest-mongodb/setup'); 

module.exports = async function globalSetup() {
  await mongoSetup();
  // process.env.MONGO_URL is now set by
  // https://github.com/shelfio/jest-mongodb/blob/fcda766bfa433644a7383993467ccaa06dfea28b/setup.js#L26
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

*/