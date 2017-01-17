var request = require('request');

var geocode = (address) => {
  return new Promise((resolve, reject) => {
    let encodedAddress = encodeURI(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Could not connect to GoogleMapsAPI');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('zero results!!!!!');
      } else if (body.status === 'OK') {
        console.log('success');
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocode('93313eaadf')
  .then((location) => {
    console.log('location: ', location);
  }, (errorMessage) => {
    console.log(errorMessage);
  });

  // request({
  //   url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
  //   json: true
  // }, (error, response, body) => {
  //   if (error) {
  //     callback('Unable to connect to Google Servers.');
  //   } else if (body.status === 'ZERO_RESULTS') {
  //     console.log('Unable to find that address.');
  //   } else if (body.status === 'OK') {  
  //     callback(undefined, {
  //       address: body.results[0].formatted_address,
  //       lat: body.results[0].geometry.location.lat,
  //       lng: body.results[0].geometry.location.lng
  //     });
  //   }
  // });