var express = require('express');
var router = express.Router();

const craigslist = require('node-craigslist');

let client = new craigslist.Client({
  baseHost : 'craigslist.org',
  city : 'newyork'
});

/* GET Homepage. */
router.get('/', function(req, res, next) {
    client
        .list()
        .then((listings) => {

            res.render('index', { title: 'Joes List', items: listings });

        })
        .catch((err) => {
            res.json(err);
        });

});


router.post('/', function(req, res, next) {

    client
        .search(req.body.search)
        .then((listings) => {
            res.render('index', { title: 'Joes List', items: listings });
        })
        .catch((err) => {
            res.json(err);
        });

});

/* GET API List Page. */
router.get('/api/list', function(req, res, next) {


  client
      .list()
      .then((listings) => {

        res.json(listings);
      })
      .catch((err) => {
        res.json(err);
      });


});


/* GET API Search Page. */
router.get('/api/search/:term', function(req, res, next) {


  client
      .search(req.params.term)
      .then((listings) => {
        res.json(listings);
      })
      .catch((err) => {
        res.json(err);
      });

});

module.exports = router;
