import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  dateCreated: Date;
  userType: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  profilePicture: string;
  bio: string;
}

let userSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    required: true
  },
  userType: {
    type: String,
    enum: ['user', 'artist'],
    required: true
  },
  firstName: {
    type: String,
    maxlength: 30,
    required: true
  },
  lastName: {
    type: String,
    maxlength: 50,
    required: true
  },
  email: {
    type: String,
    maxlength: 100,
    required: true
  },
  username: {
    type: String,
    minlength: 6,
    maxlength: 15,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 50,
    required: true
  },
  profilePicture: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    maxlength: 300,
    required: false
  }
});

export default mongoose.model<User>('User', userSchema);
