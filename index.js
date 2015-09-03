'use strict';
var util = require('util');

module.exports = function(date){
  var isStringOrTimestamp = typeof date === 'string' || typeof date === 'number';
  date = isStringOrTimestamp ? new Date(date) : date;
  var isDate = util.isDate(date) && date.getTime();

  if(isDate) {
    date = formatedDate(date);
    return date;
  } else{
    throw new Error('Invalid Date');
  }
};

function formatedDate(date){
  var date = date;
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  day = day.toString().length == 1 ? '0'+day : day;
  month = month.toString().length == 1 ? '0'+month : month;
  date = util.format('%s/%s/%s', day, month, year);
  return date;
}
