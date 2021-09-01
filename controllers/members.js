const User = require('../models/User');

/**
 * GET /members.json
 * Home page.
 */
exports.getMembersJSON = (_req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).send({ error: err });
    }

    res.send({
      members: users
    });
  });
};

/**
 * GET /members
 * Members route
 */
exports.getMembers = (_req, res) => {
  res.render('members', {
    title: 'Members'
  });
};
