const router = require('express').Router();
const models = require('../models');
const Users = models.User;

router.get('/', (req, res) => {
  res.render('signup')
});

router.post('/', (req, res) => {
  Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  }).then((user) => {
    req.login(user, () =>
      res.redirect('/')
    );
  }).catch(() => {
    res.render('signup');
  });
});

module.exports = router;