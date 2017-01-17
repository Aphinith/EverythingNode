const yargs = require('yargs');
const axios = require('axios');
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


var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find address');
    }
    
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`

    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherURL);
  }).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature
    console.log(`It is currently ${temperature} degrees, but feels like ${apparentTemperature} degrees.`);
  })
  .catch((e) => {
    // console.log(e);
    if (e.code === 'ECONNREFUSED') {
      console.log('Could not connect to GoogleMapsAPI');
    } else {
      console.log(e.message);
    }
  });

