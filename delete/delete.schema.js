'use strict';

const dynamoose = require('dynamoose');

const CreateSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': string,
});

module.exports = dynamoose.model('create', CreateSchema);
