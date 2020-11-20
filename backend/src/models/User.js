import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  created: Date,
  updated: Date,
});

export default model('User', UserSchema);