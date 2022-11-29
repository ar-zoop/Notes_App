// var dl = document.getElementById('note1');
var idCounter = 0;
function createNote() {
	//This creates a div 	
	if (document.getElementById('writeNote').value == "" || document.getElementById('writeNote').value == " "){
		return;
	}
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "col-sm-3 col-md-4 col-lg-4 ");

	//This creates a sec
	const newSec = document.createElement("section");
	newSec.setAttribute("data-id", ++idCounter);
	newSec.setAttribute("id", idCounter);
	newSec.setAttribute("type", "button");
	newSec.setAttribute("data-bs-toggle", "modal");
	newSec.setAttribute("data-bs-target", "#exampleModal");
	newSec.setAttribute("class", "btn btn-primary card text-bg-light box chooseNote");
	// newSec.setAttribute("onclick", "display(this.id)");
	newSec.setAttribute("style", "margin-right:9%");

	//append the new note 
	newDiv.appendChild(newSec);
	const parent = document.getElementById("notesResidence");
	parent.appendChild(newDiv);

	//This updates the content
	var x = document.getElementById('writeNote').value;
	newSec.innerHTML = x;
	document.getElementById('modalText').innerHTML = x;

	/*
	//This updates the content
		try {
			let x = document.getElementById('writeNote').value;
	
			if (x == " ") {
				throw "in throw block";
			}
			else{
				dl.innerHTML = x;
				document.getElementById('modalText').innerHTML = x;
			}
		}
		catch(err){
			window.alert("in catch block"+err);
		}
		finally {
			window.alert("in finally block");
		}
	*/

}



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
		}
		else{
			document.getElementById(dataId).innerHTML = textToUpdate;
		}
		dataId=null;
	
	});
	const deleteNote = document.getElementById('deleteNote');
	deleteNote.addEventListener('click', function handleClick() {

		document.getElementById(dataId).remove();

	});
});
 




