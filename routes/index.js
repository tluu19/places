const express = require('express');
const router = express.Router();
const pg = require('pg');
const connect = 'postgres://thao:password@localhost/favplaces';

/* GET home page. */
router.get('/', function(req, res) {
  pg.connect(connect, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM places', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      res.render ('index', { title: " Favorite Places", places: result.rows });
      done();
    });
  });
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
