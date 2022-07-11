const mongoose = require('mongoose');
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);

async function createConnectionToMongoAtlas() {
  await mongoose.connect(`mongodb+srv://luan:${password}@apis.khyd4bo.mongodb.net/?retryWrites=true&w=majority`);
}

module.exports = createConnectionToMongoAtlas;
