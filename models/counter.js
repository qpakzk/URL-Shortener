var timestamp = require('mongoose-timestamp');
var paginate = require('mongoose-paginate');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var counterJson = require('./json/counter.json');
var counterSchema = Schema(counterJson);

counterSchema.plugin(timestamp);
counterSchema.plugin(paginate);

var counter = mongoose.model('counter', counterSchema);

module.exports = counter;
