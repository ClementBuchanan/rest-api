
const dynamoose = require('dynamoose');

const UpdateSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

module.export = ynamoose.model('update', UpdateSchema);
