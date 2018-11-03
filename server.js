//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//'/dist/<project-name>'
app.use(express.static(__dirname + '/dist/ng6-test'));

app.get('/*', function(req,res) {

//'/dist/<project-name>/index.html'
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
