const yargs = require('yargs');
const request = require('request');
const geocode = require('./geocode/geocode.js');

const KEY = '80ca3fb35e148d2290069ca1bbe08a1d';
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
    var lat = results.lat;
    var lng = results.lng;
    console.log('lat: ', lat);
    console.log('lng: ', lng);
    request({
      url: `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
      } else {
        console.log('error, could not connect to darksky.');
      }
    })
  };
});

