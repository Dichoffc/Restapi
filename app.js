const express = require('express');
const path = require('path');
const app = express();
const exampleRoutes = require('./routes/exampleRoutes');
const logger = require('./middlewares/logger');

app.use(logger);
app.use('/api', exampleRoutes);

app.use(express.static(path.join(__dirname, 'frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

module.exports = app;
