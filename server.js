const path = require ('path');
const express = require ('express');
const app = express();

app.use(express.static(__dirname + '/dist/examen'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/examen/index.html'));
});

app.listen(process.env.PORT ||5000,()=>{  console.log("iniciado")});