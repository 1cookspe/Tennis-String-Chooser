// variables
var racquet = 0;
var spin = 0;
var power = 0;
var control = 0;
var feel = 0;
var touch = 0;

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
		case 0: // agressive, offensive player
		break;
		case 1: // consistent player with long rallies
		break;
		case 2: // all around player
		break;
		case 3: // not sure about TYPE OF PLAYER
		break;
		case 4: // hits ball too long
		break;
		case 5: // not deep enough
		break;
		case 6: // can't hit targets
		break;
		case 7: // not sure about downfall
		break;
		case 8: // arm uncomfortable
		break;
		case 9: // arm comfortable
		break;
		case 10: // unsure about arm
		break;
		case 11: // breaks strings a lot
		break;
		case 12: // does not break strings
		break;
		case 13: // unsure about strings
		break;
		case 14: // volleys a lot
		// needs touch
		touch = touch + 100;
		break;
		case 15: // does not volley a lot
		break;
		case 16: // unsure about volleying
		break;
		default:
		break;
	}
}