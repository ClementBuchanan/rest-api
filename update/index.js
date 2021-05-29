// You can require any external dependencies here
const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const createModel = require('./update.schema.js');


// All Serverless functions (AWS and Azure) are "async" ...
exports.handler = async (event) => {

  try {
    // event.body should contain our data
    const { name, phone } = JSON.parse(event.body);

    // create an id
    const id = uuid();

    // Save it
    const record = new createModel({ id, name, phone });
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (e) {

    return {
      statusCode: 500,
      response: e.message,
    };

  }

};