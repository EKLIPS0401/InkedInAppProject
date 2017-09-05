import * as express from 'express';
import User from '../models/user';

let router = express.Router();

router.get('/', (req, res) => {
  User.find().then((users) => {
    res.json(users);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/:id', (req, res) => {
  let userId = req.params.id;

  User.findOne({ _id: userId }).then((foundUser) => {
    res.json(foundUser);
  }).catch((err) => {
    res.json(err);
  });
});

router.post('/', (req, res) => {
  let newUser = new User();

  newUser.dateCreated = new Date();
  switch (req.body.userType) {
    case 'user':
      newUser.userType = req.body.userType;
      break;
    case 'artist':
      newUser.userType = req.body.userType;
      break;
    default:
      newUser.userType = 'user';
      break;
  }
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.email = req.body.email;
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.profilePicture = req.body.profilePicture;
  newUser.bio = req.body.bio;

  newUser.save().then((createdUser) => {
    res.json(createdUser);
  }).catch((err) => {
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  let userId = req.params.id;

  User.findOne({ _id: userId }).then((foundUser) => {
    User.remove(foundUser).then((deletedUser) => {
      res.json(deletedUser);
    }).catch((err) => {
      res.json(err);
    });
  }).catch((err) => {
    res.json(err);
  });
});

export default router;
