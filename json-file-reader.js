
const fs = require('fs')

function fileReader(fileName, callBack){
        fs.readFile(fileName, function (err, data){
            if (err){
                throw err;
            }
                parseJson = JSON.parse(data)
                    callBack(parseJson)
        })
    };


module.exports = {
    fileReader:fileReader
}


