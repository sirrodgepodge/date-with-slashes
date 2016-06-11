"use strict";

module.exports = function dateWithSlashes(input, fourDigitYear) {
  var tempDate = new Date(input);
  return tempDate.getMonth() + 1 + "/" + tempDate.getDate() + "/" + tempDate.getFullYear().toString().slice(fourDigitYear? 4 : 2);
}
