console.log('starting app');

setTimeout( () => {
  console.log('inside of callback');
}, 2000);

setTimeout( () => {
  console.log('second setTimeout with 0 ms');
}, 0);

console.log('finishing app');