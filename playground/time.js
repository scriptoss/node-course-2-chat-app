const moment = require('moment');

// jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

// var date = new moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY, h:m:ss a'));


var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createdAt = 1234;
var date = new moment(createdAt);
console.log(date.format('h:mm a'));
