const os = require('os');
const fs = require('fs');
const note = require('./note');
const yargs = require('yargs');

let args = yargs.argv
let comm = process.argv[2];

if(comm === 'list'){
    console.log('List ',comm);
    var all = note.getAll();
console.log("No. of Items = ", all.length);
all.forEach((notes) => note.logNode(notes));
}
else if(comm === 'add'){
    console.log('Adding');
    var notes = note.addNote(args.title, args.body);
    if (notes){
        note.logNode(notes);

    }
    else{
        console.log("already");

    }
}
else if(comm === 'remove'){
    console.log('removing....');
   var noteR= note.removeAll(args.title);
   var msg = noteR ? "NOT REMOVED" : "REMOVED"
   console.log(msg);
}

else if(comm === 'read'){
    console.log('Reading...');
   var noteRead = note.readAll(args.title);
   if (noteRead === 0){console.log("Undefine");
}
else{
    note.logNode(noteRead);
}
}
else{
    console.log('err');
}