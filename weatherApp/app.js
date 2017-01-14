const request = require('request');
const yargs = require('yargs');

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

console.log(argv);

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=609%20oak%20street%20oakland',
  json: true
}, (error, response, body) => {
  console.log('body: ', JSON.stringify(body, undefined, 2));
});