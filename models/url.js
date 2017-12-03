var timestamp = require('mongoose-timestamp');
var paginate = require('mongoose-paginate');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var counterJson = require('./json/counter.json');
var counterSchema = Schema(counterJson);

counterSchema.plugin(timestamp);
counterSchema.plugin(paginate);

var counter = mongoose.model('counter', counterSchema);

var urlJson = require('./json/url.json');
var urlSchema = Schema(urlJson);

urlSchema.pre('save', function(next) {
  var doc = this;
  counter.findByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1} }, function(error, counter) {
      if (error)
          return next(error);
      doc.created_at = new Date();
      doc._id = counter.seq;
      next();
  });
});

urlSchema.plugin(timestamp);
urlSchema.plugin(paginate);

var url = mongoose.model('url', urlSchema);

module.exports = url;
