const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, function(){
    console.log('listening on 80');
});

app.use(express.static(path.join(__dirname, 'petman-view/build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'petman-view/build/index.html'));
});