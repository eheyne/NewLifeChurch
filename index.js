var express = require('express'),
app = express(),
port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/dist'));
app.listen(port);

console.log('Your app is now hosted on port ', port);
