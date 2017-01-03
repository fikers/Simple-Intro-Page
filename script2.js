var friendName = document.getElementById("name");

var imran = document.getElementsByTagName("li")[0];
var hammad = document.getElementsByTagName("li")[1];
var khurrum= document.getElementsByTagName("li")[2];
var shahzeb = document.getElementsByTagName("li")[3];
var saad = document.getElementsByTagName("li")[4];
var arslan = document.getElementsByTagName("li")[5];

// comment 


var imageArray = ["images/imran.png"]

imran.onmouseover = function(){
	friendName.innerHTML = "Imran";
	var mainImage = document.createElement('img');
	mainImage.src = imageArray[0];
	mainImage.appendTo("imageDiv");
}
imran.onmouseleave = function(){
	friendName.innerHTML = "";
	mainImage.dislay = none;
}

hammad.onmouseover = function(){
	friendName.innerHTML = "Hammad";
}
hammad.onmouseleave = function(){
	friendName.innerHTML = "";
}
khurrum.onmouseover = function(){
	friendName.innerHTML = "Khurrum";
}
khurrum.onmouseleave = function(){
	friendName.innerHTML = "";
}
shahzeb.onmouseover = function(){
	friendName.innerHTML = "Shahzeb";
}
shahzeb.onmouseleave = function(){
	friendName.innerHTML = "";
}

saad.onmouseover = function(){
	friendName.innerHTML = "Saad";
}
saad.onmouseleave = function(){
	friendName.innerHTML = "";
}

arslan.onmouseover = function(){
	friendName.innerHTML = "Arslan";
}
arslan.onmouseleave = function(){
	friendName.innerHTML = "";
}

function alertFunction(){
	console.log("The window has loaded and alertFunction has been called.");
};


window.onload = function() {
	alertFunction();
};