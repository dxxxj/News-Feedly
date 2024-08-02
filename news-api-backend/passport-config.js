// passport-config.js
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Assuming you have a User model
const User = require('./models/User');

function initialize(passport) {
    const authenticateUser = async (email, password, done) => {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: 'No user with that email' });
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect' });
            }
        } catch (e) {
            return done(e);
        }
    };

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
}

module.exports = initialize;
