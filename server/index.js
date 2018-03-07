require('dotenv').config();
const express = require('express'),
      session = require('session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      massive = require('massive');

const {
    SESSION_SECRET,
    SERVER_PORT,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING
} = process.env

const app = express();
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
});


app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUnitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: 'http://localhost:3009/auth/callback',
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db')
    if(!user[0]){
        db.create_user([profile.displayname, profile.picture, profile.id, profile.email]).then( res => {
            done(null, userCreated[0].id);
        })
    } else {
        done(null, users[0].id);
    }
}));

passport.serializeUser((id, done) => {
    done(null, id);
})
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3009/#/home',
    failureRedirect: 'http://localhost/'
}))
app.get('auth/me', (req, res) => {
    if(req.user){
        res.status(200).send(req.user)
    }else{
        res.status(401).send('Please Login')
    }
})


app.listen(Server_PORT, () => {console.log(`Server is listening on port ${Server_PORT}`)});