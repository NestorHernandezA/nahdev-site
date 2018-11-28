const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const helmet = require('helmet');


const app = express();
app.use(helmet());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;

app.listen(port, () => {
    /*eslint no-console: */
    console.log(`Listening on http://localhost:${port}`);
  });