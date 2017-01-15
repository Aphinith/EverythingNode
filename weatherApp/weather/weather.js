const request = require('request');
const KEY = '80ca3fb35e148d2290069ca1bbe08a1d';

const getTemp = function(coordinates, callback) {
  const lat = coordinates.lat;
  const lng = coordinates.lng;

  request({
    url: `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, { temperature: body.currently.temperature, apparentTemperature: body.currently.apparentTemperature});
    } else {
      callback('error, could not connect to darksky.');
    }
  })
}

module.exports.getTemp = getTemp;