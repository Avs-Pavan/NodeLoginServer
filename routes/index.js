var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ 'status': true, 'message ': 'Wriiten by kevin Occoner',"name":"Nodejs Android login and signup with Mvp,Dagger,Rxjava,Retrofit", 'contact': '7382129781' });
});

module.exports = router;
