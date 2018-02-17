const connection = require('./connection.js')

let orm = {
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM " + table;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
            console.log(queryString);
        })
    },

    insertOne: function(table, name, drank, cb){
        let queryString = 'INSERT INTO ' + table + ' (wine_name, drank) VALUES ("' + name + '", "' + drank +'")';
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
            console.log(queryString);
        })
    },

    updateOne: function(table, col, state, id, cb){
        let queryString = 'UPDATE ' + table + ' SET ' + col + '=' + state + ' WHERE id = ' + id;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);     
            console.log(queryString);   
        })
    }
}

module.exports = orm;