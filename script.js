function getAllNotes() {
	let notes = JSON.parse(localStorage.getItem("notesapp-notes"));
	if (notes==null) notes=[];
	return notes;
}
 
function saveNotes(noteToSave) {
	const notes = getAllNotes();
	const existing= notes.find(note=> note.id == noteToSave.id);
	if(existing){
		existing.body=noteToSave.body;
	}
	else{
		notes.push(noteToSave);
	}
	localStorage.setItem("notesapp-notes", JSON.stringify(notes));
}

function deleteANote(id) {
	const notes= getAllNotes();
	const newNotes=notes.filter(note=> note.id!=id);
}


// console.log(getAllNotes());

function display(note){
	//This creates a div 	
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "col-sm-3 col-md-4 col-lg-4 ");
	newDiv.setAttribute("id", "div" + note.id);

	//This creates a sec
	const newSec = document.createElement("section");
	newSec.setAttribute("data-id", note.id);
	newSec.setAttribute("id", note.id);
	newSec.setAttribute("type", "button");
	newSec.setAttribute("data-bs-toggle", "modal");
	newSec.setAttribute("data-bs-target", "#exampleModal");
	newSec.setAttribute("class", "btn btn-primary card text-bg-light box chooseNote");
	newSec.setAttribute("style", "margin-right:9%");

	//append the new note 
	newDiv.appendChild(newSec);
	const parent = document.getElementById("notesResidence");
	parent.appendChild(newDiv);

	//This updates the content
	var textToUpdate = note.body;
	newSec.innerHTML = textToUpdate;
	document.getElementById('modalText').innerHTML = textToUpdate;

}

function loadNotes(){
	const notes= getAllNotes();
	console.log(notes);
	if(notes!=[]){
		notes.forEach(display);
	}
}

function createNote() {
	if (document.getElementById('writeNote').value == "" || document.getElementById('writeNote').value == " "){
		return;
	}
	//Generate a random idCounter
	let idCounter=Math.floor(Math.random()*1000000);

	//This creates a div 	
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "col-sm-3 col-md-4 col-lg-4 ");
	newDiv.setAttribute("id", "div"+idCounter);

	//This creates a sec
	const newSec = document.createElement("section");
	newSec.setAttribute("data-id", idCounter);
	newSec.setAttribute("id", idCounter);
	newSec.setAttribute("type", "button");
	newSec.setAttribute("data-bs-toggle", "modal");
	newSec.setAttribute("data-bs-target", "#exampleModal");
	newSec.setAttribute("class", "btn btn-primary card text-bg-light box chooseNote");
	newSec.setAttribute("style", "margin-right:9%");

	//append the new note 
	newDiv.appendChild(newSec);
	const parent = document.getElementById("notesResidence");
	parent.appendChild(newDiv);

	//This updates the content
	var textToUpdate = document.getElementById('writeNote').value;
	newSec.innerHTML = textToUpdate;
	document.getElementById('modalText').innerHTML = textToUpdate;

	//Save the note in local storage
	saveNotes({
		id:idCounter,
		body:textToUpdate
	});

}


//For updating data on "Save changes" button click in the modal
$('#exampleModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget);
	var dataId = button.data('id'); 
	var textToShow=document.getElementById(dataId).innerHTML;
	document.getElementById('modalText').value=textToShow;	
	const saveChanges = document.getElementById('updateNote');
	saveChanges.addEventListener('click', function handleClick() {

		var textToUpdate = document.getElementById('modalText').value;
		if(textToUpdate=="" || textToUpdate==" "){
			document.getElementById(dataId).remove();
			document.getElementById("div" + dataId).remove();
			deleteANote(dataId);
		}
		else{
			document.getElementById(dataId).innerHTML = textToUpdate;

			//update in local storage
			saveNotes({
				id: dataId,
				body: textToUpdate
			});
		}
		dataId=null;
	
	});
	const deleteNote = document.getElementById('deleteNote');
	deleteNote.addEventListener('click', function handleClick() {

		document.getElementById(dataId).remove();
		document.getElementById("div"+dataId).remove();
		deleteANote(dataId);
	});
});
 

//alerts for updating
$(document).ready(function () {
	$('#updateNote').click(function () {
		$('.alert-success').show()
	})
});

//alert for deletion
$(document).ready(function () {
	$('#deleteNote').click(function () {
		$('.alert-danger').show()
	})
});
