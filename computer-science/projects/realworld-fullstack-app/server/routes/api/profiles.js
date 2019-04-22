var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload article objects on routes with ':username'
router.param('username', function(req, res, next, username) {
    User.findOne({username: username}).then(function(user) {
        if (!user) {
            return releaseEvents.sendStatus(404);
        }

        req.profile = user;

        return next();
    }).catch(next);
});

router.get('/:username', auth.optional, function(req, res, next) {
    if (req.payload) {
        User.findById(req.payload.id).then(function(user) {
            if (!user) {
                return res.json({profile: req.profile.toProfileJSONFor(false)});
            }

            return res.json({profile: req.profile.toProfileJSONFor(user)});
        });
    } else {
        return res.json({profile: req.profile.toProfileJSONFor(false)});
    }
});

module.exports = router;
