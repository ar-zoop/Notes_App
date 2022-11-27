// var dl = document.getElementById('note1');
var id = 0;
function createNote() {
	//This creates a div 	
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "col-sm-3 col-md-4 col-lg-4 ");

	//This creates a sec
	const newSec = document.createElement("section");
	newSec.setAttribute("data-id", ++id);
	newSec.setAttribute("id", id);
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
	let x = document.getElementById('writeNote').value;
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

function updateNote() {
	let x = document.getElementById('modalText').value;
	// dl.innerHTML = x;
}


$('#exampleModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var id = button.data('id'); // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this)
	// console.log(modal);
	// // modal.find('.modal-title').text('New message to ' + recipient)
	var textToShow=document.getElementById(id).innerHTML;
	// modal.find('.modal-body input').val(textToShow);
	$("#modalText").html(textToShow);
	// console.log(textToShow);
})
