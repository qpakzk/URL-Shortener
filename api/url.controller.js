var base = require('./base');
var Url = require('../models/url');

function registerURL(req, res) {
  var long_url = req.body.long_url;
  var short_url = '';

  console.log('long_url: ' + long_url);
  Url.findOne({ long_url: long_url }, function(err, url) {
    console.log('url: ' + url);

    if (url) {
      short_url = 'http://localhost:3000/' + base.encode(url._id);
      res.send({ 'short_url': short_url });
    }
    else {
      var new_url = Url({
        long_url: long_url
      });

      new_url.save(function(err) {
        if (err){
          console.log(err);
        }
        short_url = 'http://localhost:3000/' + base.encode(new_url._id);

        res.send({'short_url': short_url});
      });
    }
  });
}

function searchURL(req, res) {
  var baseId = req.params.encoded_id;
  var id = base.decode(baseId);

  Url.findOne({_id: id}, function (err, url) {
    if (url) {
      console.log('url.long_url: ' + url.long_url);
      res.send({ long_url:  url.long_url});
      //res.redirect(url.long_url);
    } else {
      res.redirect('http://localhost:3000/');
    }
  });
}

module.exports = {
  registerURL,
  searchURL
}
