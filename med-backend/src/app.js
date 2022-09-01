const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.use(routes)

app.get("/health", function(req, res){
    return res.json("up!")
})

app.listen(3333, ()=>console.log("Server running on port 3333"))