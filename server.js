'use strict';
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const helmet = require('helmet');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

require('dotenv').config();
if(process.env.NEW_RELIC_ENABLE && process.env.NEW_RELIC_ENABLE === "true"){
  console.log('New Relic Enabled');
  require('newrelic');
}


const app = express();
const port = process.env.PORT || 3000;
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
}));
app.use(helmet());
if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}

if (process.env.AUTH_ENABLED === 'true') {
  const oidc = new ExpressOIDC({
    issuer: process.env.OKTA_ISSUER,
    client_id: process.env.OKTA_CLIENT_ID,
    client_secret: process.env.OKTA_CLIENT_SECRET,
    redirect_uri: process.env.OKTA_REDIRECT_URI,
    scope: 'openid profile',
  });
  app.use(oidc.router);
  // app.use(serveStatic(path.join(__dirname, 'dist')));
  oidc.on('ready', () => {
    app.listen(port, () => console.log(`Listening on authenticated http://localhost:${port}`));
  });
  oidc.on('error', (err) => {
    console.log(err);
  });
  app.use(oidc.ensureAuthenticated(), serveStatic(path.join(__dirname, 'dist')));
} else {
  app.use(serveStatic(path.join(__dirname, 'dist')));
  app.listen(port, () => console.log(`Listening on non-authenticated http://localhost:${port}`));
}

// app.get('/', (req, res) => {
//   if (req.userContext) {
//     res.send(`Hello ${req.userContext.userinfo.name}! <a href="logout">Logout</a>`);
//   } else {
//     res.send('Please <a href="/login">login</a>');
//   }
// });
// app.get('/protected', oidc.ensureAuthenticated(), (req, res) => {
//   res.send('Top Secret');
// });
// app.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });
