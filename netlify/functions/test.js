const netlifyIdentity = require('netlify-identity-widget');


netlifyIdentity.init({
  container: '#netlify-modal', // defaults to document.body
  locale: 'en' // defaults to 'en'
});

export