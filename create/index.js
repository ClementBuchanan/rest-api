'use strict';

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const PeopleModel = require('./create.schema.js');

exports.handler = async (event) => {
  try {
    const { name, phone } = JSON.parse(event.body);
    const id = uuid;
    const record = new peopleModel({ id, name, phone });
    const data = await record.save();
    // const savedRecord = JSON.stringify(data);

    return {
      satusCode: 201,
      // response: savedRecord
      body: JSON.stringify(data),
    };
  } catch (e) {

    return {
      statusCode: 500,
      response: e.message
    };
  }
};