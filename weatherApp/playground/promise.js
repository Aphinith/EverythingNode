var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('arguments must be numbers');
      }
    }, 1500)
  });
};

asyncAdd(5, 7).then((result) => {
  console.log('result: ', result);
  return asyncAdd(result, 'break');
})
.then((res) => {
  console.log('should be 45: ', 45);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     // resolve('hey it worked');
//     reject('unable to fulfill promise');
//   }, 2500);

// });

// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });