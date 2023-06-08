import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';

var app = express();

// Middleware setup
app.use(logger('dev')); // Logs HTTP requests to the console
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parses URL-encoded request bodies
app.use(cookieParser()); // Parses cookies

app.use('/', indexRouter); // Mounts the index router on the root path ('/')

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // Forwards to the error handler middleware if no route handles the request
});

// Error handler middleware
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error'); // Renders an error page. Note: You need to define the rendering logic for the error page separately.
});

export default app;
