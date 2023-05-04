const express = require('express');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 4200;

app.use(compression());

let apiCallCount = 0;

// Set correct MIME types; for static files
app.use(express.static('dist/influencer-xchange', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.get('/*', (req, res) => {
  apiCallCount++;
  console.log(`API has been called ${apiCallCount} times.`);
  res.sendFile('index.html', {root: './dist/influencer-xchange'});
});

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`);
});