var querystring = require("querystring");

var str = "name=jack&password=123456";

console.log(typeof querystring.parse(str))
