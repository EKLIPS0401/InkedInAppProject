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
  artistSince: number;
  portfolioPics: [string];
  style: [string];
  pricing: [string];
  businessType: [string];
  businessName: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
}

let userSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    required: true
  },
  userType: {
    type: String,
    enum: ['client', 'artist'],
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
  },
  artistSince: {
    type: Number,
    maxlength: 4,
    required: false
  },
  portfolioPics: {
    type: [String],
    required: false
  },
  style: {
    type: [String],
    required: false
  },
  pricing: {
    type: [String],
    required: false
  },
  businessType: {
    type: [String],
    required: false
  },
  businessName: {
    type: String,
    maxlength: 40,
    required: false
  },
  address: {
    type: String,
    maxlength: 100,
    required: false
  },
  city: {
    type: String,
    maxlength: 50,
    required: false
  },
  state: {
    type: String,
    maxlength: 2,
    required: false
  },
  zip: {
    type: Number,
    maxlength: 10,
    required: false
  },
  phone: {
    type: String,
    maxlength: 25,
    required: false
  },
});

export default mongoose.model<User>('User', userSchema);
