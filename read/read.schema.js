const dynamoose = require('dynamoose');

const CreateSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

module.exports = dynamoose.model('create', CreateSchema);
