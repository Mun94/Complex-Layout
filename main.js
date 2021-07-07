let http = require('http');
let fs = require('fs');

let app = http.createServer(function(req,res){
    let url = req.url;
    if(url == '/'){
      url = '/index.html';
    }
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
});

app.listen(3000);