const orm = require('../config/orm.js');

const wine = {
    selectAll: function(cb){
        orm.selectAll('wine', function(res){
            cb(res);
        })
    },

    insertOne: function(colVal, cond, cb){
        orm.insertOne('wine', colVal, cond, function(res){
            cb(res)
        })
    },

    updateOne: function(drankSt, idNum, cb){
        orm.updateOne('wine', 'drank', drankSt, idNum, function(res){
            cb(res);
        })
    }
}

module.exports = wine;