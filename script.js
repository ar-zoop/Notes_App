var dl = document.getElementById('note1');
function createNote(){
	//This creates a div
	// const btn = document.createElement()

	//This updates the content
	let x = document.getElementById('writeNote').value;
	dl.innerHTML = x;
	document.getElementById('modalText').innerHTML=x;
}

function updateNote(){
	let x = document.getElementById('modalText').value;
	console.log(x);
	dl.innerHTML = x;
}