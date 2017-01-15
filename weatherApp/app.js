const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const getTemp = require('./weather/weather');


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
    const coordinates = {
        lat: results.lat, 
        lng: results.lng
      };
    getTemp.getTemp(coordinates, (errorMesage, results) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log('Temperature is: ', results);
      }
    });
  };
});

