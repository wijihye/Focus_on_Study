const passport = require('passport');
const local = require('./localStrategy_fos');
const kakao = require('./kakaoStrategy_fos');
const User = require('../models/user_fos');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
    })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
  kakao();
};