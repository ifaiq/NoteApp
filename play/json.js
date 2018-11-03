// var ob = {
// 'name':'faiq',
// 'age':23
// };
// console.log(ob);

const fs = require('fs');

var note = {
'title': ' faiq',
'body': 'shariff'
};

var notefile = JSON.stringify(note);
fs.writeFileSync('file.json',notefile);
var noteString = fs.readFileSync('file.json');
console.log(noteString);