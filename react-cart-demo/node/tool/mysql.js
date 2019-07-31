const MongoClient = require('mongodb').MongoClient;
const connect_url = 'mongodb://localhost:27017/Jack';

const mysql = {
    insert (collectionName, insertObj, callback) {
        console.log('333333333333333333333333333333333333333333')
        MongoClient.connect(connect_url, (err, db) => {
            if(err) throw err;
            console.log('db is connecting')

            const collection = db.collection(collectionName);
            collection.insert(insertObj, (err) => {
                if(err) throw err;
                // console.log('insert success');
                callback();
                db.close();
            })
        })
    },
    find (collectionName, whereObj, showObj, callback) {
        MongoClient.connect(connect_url, (err, db) => {
            // console.log
            if(err) throw err;
            console.log('db is connecting')

            const collection = db.collection(collectionName);
            collection.find(whereObj, showObj).toArray((err, data) => {
                if(err) throw err;
                callback(data);
                db.close();
            })
        })
    },
    update (collectionName, whereObj, updateObj, type, callback) {
        // type 为true, 表示更新所有的，为false，表示更新一个
        let updateType = 'updateOne';
        type == true ? updateType = 'updateMany' : updateType = 'updateOne';
        MongoClient.connect(connect_url, (err, db) => {
            if(err) throw err;
            console.log('db is connecting')

            const collection = db.collection(collectionName);
            collection[updateType](whereObj, {$set: updateObj}, (err) => {
                if(err) throw err;
                callback();
                db.close();
            })
        })
    },
    delete (collectionName, whereObj, type, callback) {
        let deleteType = 'deleteOne';
        type == true ? deleteType = 'deleteMany' : deleteType = 'deleteOne';
        MongoClient.connect(connect_url, (err, db) => {
            if(err) throw err;
            console.log('db is connecting')

            const collection = db.collection(collectionName);
            collection[deleteType](whereObj, (err) => {
                if(err) throw err;
                callback();
                db.close();
            })
        })
    },
    distinct (collectionName, type, callback) {
        MongoClient.connect(connect_url, (err, db) => {
            if(err) throw err;
            console.log('db is connecting')

            const collection = db.collection(collectionName);
            collection.distinct(type, (err, data) => {
                if(err) throw err;
                callback(data);
                db.close();
            })
        })
    }
}

module.exports = mysql;