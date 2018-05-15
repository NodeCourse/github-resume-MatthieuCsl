const express = require('express');
const app = express();

// Use Pug to render views
app.set('view engine', 'pug');
// Serve assets from the public folder
app.use(express.static('public'));

// Render the home page
app.get('/', (req, res) => {
    // Express will look for a page named homepage.pug
    // in the "views" folder so you should have a "views/homepage.pug" file
    res.render('homepage');
});

app.get('/resume', function(req, res) {
  if (username.includes(usernameReq)) {
    res.render('resume', {
      user: usernameReq
    });
  } else {
    res.render('homepage');
  }
});

app.listen(3000);
