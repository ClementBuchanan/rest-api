'use strict';

const dynamoose = require('dynamoose');

const createSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

module.exports = dynamoose.model('create', createSchema);