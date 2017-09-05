const express = require('express');
const morgan = require('morgan');

// Create server app
const app = express();
// Configure port
app.set('port', process.env.PORT || 3001);
// Setup logging using morgan package
app.use(morgan('dev'));

// Endpoints go here!
app.get('/servant', (req, res) => {
  res.json({
    hello: 'world',
    servantName: req.query.name,
  });
});

// Run server
app.listen(app.get('port'), () => {
  console.log(`API server started at http://localhost:${app.get('port')}/`);  // eslint-disable-line no-console
});
