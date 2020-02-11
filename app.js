const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/route");
const app = express();
const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;
const tenUsers = require("./tenUsers");
const fiftyUsers = require("./fiftyUsers");
const repository = require("./repositories/userRepository");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const user = "bradyliechty";
const pass = "bliechty1234";
// repository.insertMany(tenUsers);
// repository.insertMany(fiftyUsers);

passport.use(new LocalStrategy({
        passReqToCallback: true
    }, (req, username, password, done) => {
        if (username !== user || password !== pass) {
            return done(null, false);
        } else {
            return done(null, true);
        }
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).catch(e => {
    console.log(`Error occurred: ${e}`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use((req, res, next) => {
    console.log(`${req.method} for ${req.url}`);
    next();
});

app.post("/",
    passport.authenticate("local",
        {
            successRedirect: "/functionality",
            failureRedirect: "/",
            failureFlash: false
        }
    )
);

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});