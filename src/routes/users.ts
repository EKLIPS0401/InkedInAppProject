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
    case 'client':
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
  newUser.artistSince = req.body.artistSince;
  newUser.portfolioPics = req.body.portfolioPics;
  newUser.style = req.body.style;
  newUser.pricing = req.body.pricing;
  newUser.businessType = req.body.businessType;
  newUser.businessName = req.body.businessName;
  newUser.address = req.body.address;
  newUser.city = req.body.city;
  newUser.state = req.body.state;
  newUser.zip = req.body.zip;
  newUser.phone = req.body.phone;


  newUser.save().then((createdUser) => {
    res.json(createdUser);
  }).catch((err) => {
    res.json(err);
  });
});

router.put("/:id", (req, res) => {
  let userId = req.params.id;

  User.findOne({ _id: userId }).then((updatedUser) => {
    updatedUser.firstName = req.body.firstName;
    updatedUser.lastName = req.body.lastName;
    updatedUser.email = req.body.email;
    updatedUser.username = req.body.username;
    updatedUser.password = req.body.password;
    updatedUser.profilePicture = req.body.profilePicture;
    updatedUser.bio = req.body.bio;
    updatedUser.artistSince = req.body.artistSince;
    updatedUser.portfolioPics = req.body.portfolioPics;
    updatedUser.style = req.body.style;
    updatedUser.pricing = req.body.pricing;
    updatedUser.businessType = req.body.businessType;
    updatedUser.businessName = req.body.businessName;
    updatedUser.address = req.body.address;
    updatedUser.city = req.body.city;
    updatedUser.state = req.body.state;
    updatedUser.zip = req.body.zip;
    updatedUser.phone = req.body.phone;

    updatedUser.save()
    .then((updatedUser) => {
      res.json(updatedUser);
    }).catch((err) => {
      res.json(err);
    });
  })
  .catch((err) => {
    res.json(err);
  });
});

// router.delete('/:id', (req, res) => {
//   let userId = req.params.id;
//
//   User.findOne({ _id: userId }).then((foundUser) => {
//     User.remove(foundUser).then((deletedUser) => {
//       res.json(deletedUser);
//     }).catch((err) => {
//       res.json(err);
//     });
//   }).catch((err) => {
//     res.json(err);
//   });
// });

router.delete("/:id", (req, res) => {
  User.remove({ _id: req.params.id })
  .then((deletedUser) => {
    res.json(deletedUser);
  })
  .catch((err) => {
    res.json(err);
  });
});

export default router;
