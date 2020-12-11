const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

// load env variables
require("dotenv").config();

// connect to MongoDB with mongoose
require("./config/database");

// load passport
require("./config/passport");

// require routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const alcoholsRouter = require('./routes/alcohols');
const cocktailsRouter = require('./routes/cocktails');
const messagesRouter = require('./routes/messages');
const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// misc middleware
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// passport middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// router middleware
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use('/alcohols', alcoholsRouter);
app.use('/cocktails', cocktailsRouter);
app.use('/messages', messagesRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
