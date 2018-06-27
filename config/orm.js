

var connection = require("../config/connection.js");


function questionsMarks(num) {
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }  
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            callBack(result);
        });
    },
    insertOne: function(table, cols, vals, callBack) {
        var queryString = "INSERT INTO " + table; 

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionsMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if(err) {
                throw err;
            }
            callBack(result);
        });
    },
    updateOne: function(table, objColVals, condition, callBack) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            callBack(result);
        });
    }
};

module.exports = orm;










module.exports = orm;