// var dl = document.getElementById('note1');
function createNote() {
	//This creates a div
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "col-sm-3 col-md-4 col-lg-4 ");
	const newSec=document.createElement("section");
	newSec.setAttribute("type", "button" );
	newSec.setAttribute("data-bs-toggle", "modal");
	newSec.setAttribute("data-bs-target", "#exampleModal");
	newSec.setAttribute("class", "btn btn-primary card text-bg-light box chooseNote");
	// newSec.setAttribute("id", "note1");
	// newSec.setAttribute("data-bs-whatever", "Note 1");
	newSec.setAttribute("style", "margin-right:9%");
	//append the new note 
	newDiv.appendChild(newSec);
	const parent=document.getElementById("notesResidence");
	parent.appendChild(newDiv);

	//This updates the content
		let x = document.getElementById('writeNote').value;
		// dl.innerHTML = x;
		newSec.innerHTML=x;
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

