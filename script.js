// variables
var racquet = 0;
var spin = 0;
var power = 0;
var control = 0;
var feel = 0;

function start() {
	document.getElementById("intro").style.visibility = "hidden";  
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function getRacquet(num) {
	racquet = num;

	document.getElementById("playingStyle").classList.remove('hidden');
	//document.getElementById("downfall").classList.remove('hidden');
	document.getElementById("playingStyle").classList.toggle('show');
	//document.getElementById("downfall").classList.toggle('show');

	switch (racquet) {
		case 0:
		break;
		case 1:
		break;
		case 2:
		break;
		case 3:
		break;
		case 4:
		break;
		case 5:
		break;
		default:
		break;
	}

}

function styleOfPlay(style) {
	switch (style) {
		case 0:
		break;
		default:
		break;
	}
}