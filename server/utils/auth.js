'use strict';
var passport = require('passport');

exports.authenticate = function(req, res, next ) {
  if(req.body && req.body.username) {
    req.body.username = req.body.username.toLowerCase();
    passport.authenticate('local', function(err, user) {
      if(err) {
        return next(err);
      }
      if(!user) {
        res.send({success:false, user:null});
      }
      req.logIn(user, function(err) {
        if(err) {
          return next(err);
        }
        res.send({success:true, user:user})
      });
    })(req, res, next)
  } else {
    res.send({success:false, user:null});
  }

};

exports.logout = function(req, res) {
  req.logout();
  res.end();
};

exports.authAPIcall = function(req, res, next) {
  if(!req.isAuthenticated()){
    res.status(403);
    res.end();
  } else {
    next();
  }
};