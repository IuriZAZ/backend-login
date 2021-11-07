import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo()
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb+srv://admin:admin123@cluster0.ofjky.mongodb.net/test', {
      useNewUrlParser: true
    });
  }
}

export default new Database();