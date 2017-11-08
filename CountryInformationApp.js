//Country Information Exercise 
//Part 1
//Create a Node.js application that does the following:
//- Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
//- Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonVoorbeeld van documentIn een nieuw venster weergeven
//- Outputs information about that specific country. Must be in the following format:
//Country: <country name>
//Top Level Domain: <tld>

const fs = require("fs")

// let theCountry = process.argv[2]



// function findCountry(country) {
//     fs.readFile("countries.json", function(err, data) {
//         if (err) {
//             console.log("error" + err)
//         }
//         let array = JSON.parse(data)
//         for (var i = 0; i < array.length; i++) {
//             if (array[i].name === country) {
//                 console.log(array[i].name)
//                 console.log(array[i].topLevelDomain)
//             }
//         }
//     })
// }


// findCountry(theCountry)

// Part 2
// - For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// - One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

// - The output of the application should have the following format: 

// Country: <country name>
// Top Level Domain: <tld>


// Hints:
// - Use JSON.parse (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse (Links to an external site.)Koppelingen naar een externe site.) to parse JSON data from files into a JavaScript object.
// - Try first completing the assignment without creating a separate module - Extracting the second module out is significantly more difficult.//

var jsfr = require('./json-file-reader.js')

jsfr.fileReader("countries.json", function(parseJson) {
            var countryName = process.argv[2]
            for (var i = 0; i < parseJson.length; i++) {
                if (parseJson[i].name === countryName) {
                    console.log("Country: " + parseJson[i].name)
                    console.log("Top Level Domain: " +parseJson[i].topLevelDomain)
        }
    }
})