const contentful = require('contentful/contentful.node');

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ client:context.clientContext}),
  };
};