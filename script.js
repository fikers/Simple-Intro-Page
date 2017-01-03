// Image array for images used in functions 
imageArray = ['images/imran.png', 'images/hammad.png', 'images/khurrum.png', 'images/shahzeb.png', 'images/saad.png', 'images/arslan.png']

// These two functions change the innerHTML for the li elements to the name of the friend and change the background of the li element to red. 
function changeHTML(id) {
	var imageLocation = document.getElementById(id) 
	imageLocation.style.backgroundColor = "red";
	document.getElementById("nameLine2").innerHTML = id[0].toUpperCase() + id.slice(1);
}

function UndoChangeHTML(id) {
	var imageLocation = document.getElementById(id) 
	imageLocation.style.backgroundColor = "grey";
	document.getElementById("nameLine2").innerHTML = "";
}

// These two functions change the display property of the main image and change the source to a picture from the Image array.

function changeImg(ArrayNumber) {
	var image = document.getElementById("image");
	image.style.display = "block";
	image.src = imageArray[ArrayNumber];
}

function UndoChangeImg(ArrayNumber) {
	var image = document.getElementById("image");
	image.style.display = "none";
}

// This variable gets all the li elements, which are the different friends. 

var friends = document.getElementsByTagName("li");

// Onmouseover and onmouseleave function for 'Imran'
friends[0].onmouseover = function() {
	changeHTML("imran");
	changeImg(0);
}

friends[0].onmouseleave = function() {
	UndoChangeHTML("imran");
	UndoChangeImg(0);
}

// Onmouseover and onmouseleave function for 'Hammad'

friends[1].onmouseover = function() {
	changeHTML("hammad");
	changeImg(1);
}

friends[1].onmouseleave = function() {
	UndoChangeHTML("hammad");
	UndoChangeImg(1);
}

// Onmouseover and onmouseleave function for 'Khurrum'

friends[2].onmouseover = function() {
	changeHTML("khurrum");
	changeImg(2);
}

friends[2].onmouseleave = function() {
	UndoChangeHTML("khurrum");
	UndoChangeImg(2);
}

// Onmouseover and onmouseleave function for 'Shahzeb'

friends[3].onmouseover = function() {
	changeHTML("shahzeb");
	changeImg(3);
}

friends[3].onmouseleave = function() {
	UndoChangeHTML("shahzeb");
	UndoChangeImg(3);
}

// Onmouseover and onmouseleave function for 'Saad'

friends[4].onmouseover = function() {
	changeHTML("saad");
	changeImg(4);
}

friends[4].onmouseleave = function() {
	UndoChangeHTML("saad");
	UndoChangeImg(4);
}

// Onmouseover and onmouseleave function for 'Arslan'

friends[5].onmouseover = function() {
	changeHTML("arslan");
	changeImg(5);
}

friends[5].onmouseleave = function() {
	UndoChangeHTML("arslan");
	UndoChangeImg(5);
}












