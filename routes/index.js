const title = "Calendari"

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title });
});

router.get('/calendar', function(req, res, next) {
  res.render(
      'calendar/calendar'
      , {
          lang: req.headers["accept-language"],
          ...req.query
      }
  );
});

module.exports = router;
