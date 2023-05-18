import netlifyIdentity from 'netlify-identity-widget';

exports.handler = async function (event, context) {
  console.log(netlifyIdentity.currentUser());
  return {
    statusCode: 200,
    body: JSON.stringify({ client:context, event}),
  };
};