'use strict';

const parallel = (functions, cb) => {
  const values = [];
  let remainingItems = functions.length;
  functions.forEach((func, i) => {
    func((value) => {
      values[i] = value;
      remainingItems--;
      if (remainingItems === 0) cb(values);
    });
  });
};


parallel([
 function(callback) {
   setTimeout(function() {
     callback('one');
   }, 2000);
 },
 function(callback) {
   setTimeout(function() {
     callback('two');
   }, 100);
 },
 function(callback) {
   setTimeout(function() {
     callback('three');
   }, 50);
 }
],
 (results) => {
   console.log(results); // ['one', 'two']
});
