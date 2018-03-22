require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive')
    bodyParser = require('body-parser')
    cors = require('cors');

const {
    SESSION_SECRET,
    SERVER_PORT,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
    CALLBACK_URL,
} = process.env


const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile',
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
    db.find_user([profile.id]).then(users => {
        if (!users[0]) {
            db.create_user([profile.displayName, profile.picture, profile.id, profile.email])
                .then(res => {
                    done(null, userCreated[0].id);
                })
        } else {
            done(null, users[0].id)
        }
    })
}))


passport.serializeUser((id, done) => {
    done(null, id)
})
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]);
    })
})



app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/'
}))
app.get('/auth/me', (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    } 
})
app.get('/products', (req, res) => {
    app.get('db').find_product_preview().then(response => {
        res.status(200).send(response)
    })
})
app.get('/bestsellers', (req, res) => {
    app.get('db').best_sellers().then(response => {
        res.status(200).send(response)
    })
})
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect('http://localhost:3000/')
})
// app.post('/addtocart', (req, res) => {
//     app.post('db').create_user_cart().then(response => {
//         res.status(200).send(response)
//     })
// })


app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT} `));