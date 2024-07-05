// Create web server and listen for requests
// 1. Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const comments = require('./comments.json');

// 2. Create a web server
const app = express();

// 3. Add middleware
app.use(cors());
app.use(bodyParser.json());

// 4. Add a route to the web server
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// 5. Start the web server
const port = 4000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// 6. Create a new file called comments.json
// 7. Add some comments to the file
// 8. Restart the web server
// 9. Test the API using curl or Postman
// 10. Add a new comment using curl or Postman
// 11. Test the API using curl or Postman
// 12. Add a new comment using curl or Postman
// 13. Test the API using curl or Postman