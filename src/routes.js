const routes = require('express').Router();
const multer = require('multer');
const multeConfig = require('./config/multer');

routes.post('/posts', multer(multeConfig).single('file'), (req, res)=>{
    console.log(req.file);
    return res.json({ hello: "Rocket"});
})


module.exports = routes;