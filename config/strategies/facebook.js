const passport = require('passport');
const url = require('url');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../config');
const users = require('../../app/controllers/users.server.controller');

module.exports = function(){
    passport.use(new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: config.facebook.callbackURL,
        profileFields:['id','name','displayName','emails'],
        passReqToCallback: true
    },(req, accessToken, refreshToken, profile, done)=>{
        const providerData = profile._json;
        providerData.accessToken = accessToken;
        providerData.refreshToken = refreshToken;
        const providerUserProfile = {
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            fullName: profile.displayName,
            email: profile.emails ? profile.emails[0].value : profile.name.givenName+'@gmail.com',
            username: profile.name.givenName + profile.name.familyName,
            provider: 'facebook',
            providerId: profile.id,
            providerData: providerData
        };

        users.saveOAuthUserProfile(req, providerUserProfile, done);
    }))
}