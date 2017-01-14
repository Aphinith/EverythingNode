const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=609%20oak%20street%20oakland',
  json: true
}, (error, response, body) => {
  console.log('body: ', JSON.stringify(body, undefined, 2));
})