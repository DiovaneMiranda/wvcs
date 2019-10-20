const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { Client } = require('pg')
const mysql = require('mysql');

async function saveRegister(data) {
    const connection = mysql.createConnection({
        host     : '',
        user     : 'chapolin',
        password : 'chapolin',
        database : ''
    });

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });

    connection.end();
}

async function register(req) {
    const data = req.data
    const client = await saveRegister(data)
    await client.db('vcs').insertOne(data).then(
      console.log('Register saved')
    ).catch(e) (
      console.log(e)
    )
}

module.exports = { register }