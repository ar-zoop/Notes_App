export default class NotesApi{
    static getAllNotes(){
        const notes= JSON.parse(localStorage.getItem("notesapp-notes")|| []);
        return notes;
    }
    static saveNotes(noteToSave){
        const notes=NotesApi.getAllNotes();
        notes.push(noteToSave);
        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }
    static deleteNote(id){

    }
}