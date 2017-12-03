var base = require('../base');
var Url = require('../../models/url');

//long_url의 id로 short_url을 생성
function registerURL(req, res) {
  var long_url = req.body.long_url;

  //long_url 찾기
  Url.findOne({ long_url: long_url }, function(err, url) {
    //long_url이 존재하면
    if (url) {
      //url의 id 값을 인코딩한 값을 이용하여 short_url 생성
      var short_url = 'http://localhost:3000/' + base.encode(url._id);
      res.send({ 'short_url': short_url });
    }
    else {//long_url이 존재하지 않으면
      //long_url을 저장하고 id값을 인코딩하여 short_url 생성
      var new_url = Url({ long_url: long_url });
      new_url.save(function(err) {
        if (err) {
          console.log(err);
        }

        var short_url = 'http://localhost:3000/' + base.encode(new_url._id);
        res.send({ 'short_url': short_url });
      });
    }
  });
}

//short_url을 이용하여 long_url을 접속
function searchURL(req, res) {
  var baseId = req.params.encoded_id;
  var id = base.decode(baseId);

  //10진수 id 값으로 검색
  Url.findOne({ _id: id }, function (err, url) {
    //id 값이 존재하면
    if (url) {
      var http = 'http://';
      var https = 'https://';

      //http 프로토콜 체크
      if(url.long_url.indexOf(http) == -1 && url.long_url.indexOf(https) == -1) {
        res.redirect(http + url.long_url);
      }
      else {
        res.redirect(url.long_url);
      }
    } else {
      res.redirect('http://localhost:3000/');
    }
  });
}

module.exports = {
  registerURL,
  searchURL
}
