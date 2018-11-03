
const fs= require('fs');

var fetchNotes = ()=>{
    try{
        var noteread = fs.readFileSync('notes.json');
       return JSON.parse(noteread);

    }
    catch(e){
        return [];

    }
};
var saveNote = (notes)=>{
    fs.writeFileSync('notes.json', JSON.stringify(notes));


};

var addNote = (title, body)=>{

    var notes= fetchNotes();
    var note = {
        //ES6 tile : tile is = title 
        title,
        body
    };
    var dupNotes = notes.filter((note)=> note.title === title);
    if(dupNotes.length === 0){
    
        notes.push(note);
        saveNote(notes);
        return notes;
    }

};

var getAll =()=>{
return fetchNotes();
}

var removeAll =(title)=>{
    var notes= fetchNotes();
    var note = {title};
    var dupNotes = notes.filter((note)=> note.title !== title);
    saveNote(dupNotes);
    return notes.length === dupNotes.length;
}


var readAll =(title)=>{
    var notes= fetchNotes();
    var note = {title};
    var dupNotes = notes.filter((note)=> note.title === title);
    if(dupNotes.length !== 0){
        return dupNotes;
    }
}


var logNode = (notes)=>{
console.log('.........');    
console.log(`Title: ${notes.title}`);
console.log(`Body: ${notes.body}`);
}
module.exports={
addNote,
getAll,
removeAll,
readAll,
logNode
};