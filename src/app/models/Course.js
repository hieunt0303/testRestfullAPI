
const mongoose = require('mongoose')
// const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
// var slug = require('mongoose-slug-generator');
// mongoose.plugin(slug);

const Course = new Schema({
  name: { type: String },
  image: { type: String },
  description: { type: String },
  videoID: { type: String},
  slug: { type: String},
},{
  timestamps: true
});

// Course.plugin(mongooseDelete,{ overrideMethods: 'all' });
module.exports = mongoose.model('Course', Course);
