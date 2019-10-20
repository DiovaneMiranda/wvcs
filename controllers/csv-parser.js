const fs = require('fs');
const csv = require('fast-csv');
const csvjson = require('csvjson');
const readFile = require('fs').readFile;

let jsonObj = ''

const loadCountries =  () => {
    readFile('../public/countries.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err);
        throw new Error(err);
    }
    jsonObj = csvjson.toObject(fileContent);
   })
    return jsonObj
};

module.exports = { loadCountries }

