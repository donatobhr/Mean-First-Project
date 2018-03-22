module.exports = {
    db: 'mongodb://127.0.0.1:27017/mean-test',
    sessionSecret:'testSessionSecret',
    facebook:{
        clientID:'1741784169214266',
        clientSecret:'2992b848fe0b0d76e0f782f1c2e7f2b2',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter:{
        clientID:'HAE2pfvjRBm3CYGRzzGC4IRs8',
        clientSecret:'i5IhLqJyc0GpQhU3eqFdnu3RurlnyKn9s0l0GkaEXlaFmI2udv',
        callbackURL:'http://localhost:3000/oauth/twitter/callback'
    },
    google:{
        clientID:'180423817215-6vavnhtgmt0567b525nt2qjk7i9i00uq.apps.googleusercontent.com',
        clientSecret: 'dJnon44NG9XagHqw6Gt9Chln',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
}