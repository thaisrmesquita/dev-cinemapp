import { Schema, model, SchemaTypes } from 'mongoose';

const MovieSchema = new Schema({
  title: String,
  year: String,
  type: String,
  poster: String,
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
  },
  isFavorite: Boolean
});

export default model('Movie', MovieSchema);