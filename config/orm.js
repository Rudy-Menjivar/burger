// Import MySQL connection
var connection = require("../config/connection.js");

// Turn an array of question marks into a string
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};