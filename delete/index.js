'use strict';

//require dependencies
const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const deleteModel = ('./delete.schema.js');
const router = express.Router();

//RESTful route declaration
Router.delete('/food', deleteLambda);

//lambda function
async function deleteItem(req, res) {
  let obj = req.body;
  let newFood = await food.delete(obj);
  res.status(200).json(newFood);
}

// ALL serverless functions are async(either AWS or Azure)
exports.handler = async (events) => {
  try {
    const { name, phone } = JSON.parse(event.body);

    //create id
    const id = uuid;

    //save id
    const record = new deleteModel({ id, name, phone });
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