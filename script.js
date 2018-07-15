// variables
var racquet = 0;
var spin = 0;
var power = 0;
var control = 0;
var feel = 0;
var touch = 0;
var longevity = 0;
var feelPriority = false;
var longevityPriority = false;
var stringArray = [[]];

// strings
// const STRING = [power, control, touch, spin, longevity, comfort]
const RPM_BLAST = [4, 9, 9, 10, 6, 4]; // control and spin
const PRO_HURRICANE = [4, 10, 8, 8, 6, 4]; // control and spin
const VS_TOUCH = [10, 6, 9, 5, 8, 10]; // gut, all power and comfort
const XCEL = [8, 7, 8, 6, 6, 9]; // power and control (not a lot of spin)
const ADDICTION = [7, 8, 8, 6, 7, 8]; // less power, more control, long
const ALU_POWER = [6, 9, 10, 9, 8, 6]; // power and control
const FOUR_G = [6, 8, 9, 9, 7, 7]; // 
const BIG_BANGER = [3, 7, 8, 7, 9, 5];
const NXT_POWER = [9, 7, 8, 7, 7, 10]; // lots of power and comfort
const SENSATION = [8, 6, 7, 9, 7, 9]; // power spin and comfort
const REVOLVE = [4, 9, 8, 9, 9, 6]; // control, spin, and longevity
const NXT_CONTROL = [6, 9, 8, 7, 5, 8];
const CHAMPIONS_CHOICE = [9, 8, 8, 8, 8, 9]; // power and control
const HAWK = [3, 9, 8, 9, 9, 5]; // control
const LYNX = [7, 7, 7, 9, 7, 8];
const SONIC_PRO = [6, 8, 7, 8, 7, 5]; 
const FXP_TOUR = [8, 8, 7, 8, 6, 8];
const RIP_CONTROL = [6, 8, 8, 7, 7, 9]; // control with very good comfort

function start() {
	// initialize the string rankings array
	stringArray[0] = RPM_BLAST;
	stringArray[1] = PRO_HURRICANE;
	stringArray[2] = VS_TOUCH;
	stringArray[3] = XCEL;
	stringArray[4] = ADDICTION;
	stringArray[5] = ALU_POWER;
	stringArray[6] = FOUR_G;
	stringArray[7] = BIG_BANGER;
	stringArray[8] = NXT_POWER;
	stringArray[9] = SENSATION;
	stringArray[10] = REVOLVE;
	stringArray[11] = NXT_CONTROL;
	stringArray[12] = CHAMPIONS_CHOICE;
	stringArray[13] = HAWK;
	stringArray[14] = LYNX;
	stringArray[15] = SONIC_PRO;
	stringArray[16] = FXP_TOUR;
	stringArray[17] = RIP_CONTROL;
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

	removeOrAdd("playingStyle");

	switch (racquet) {
		case 0: // no racquet
		break;
		case 1: // Babolat Aero
			
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
		// current playing
		case 0: // agressive, offensive player
			power = power + 30;
			control = control + 5;
			longevity = longevity + 10;
			touch = touch + 5;
			spin = spin + 10;
			feel = feel + 5;
			removeOrAdd("downfall");
			break;
		case 1: // consistent player with long rallies
			power = power + 5;
			spin = spin + 30;
			control = control + 20;
			feel = feel + 5;
			touch = touch + 5;
			longevity = longevity + 15;
			removeOrAdd("downfall");
			break;
		case 2: // all around player
			power = power + 10;
			spin = spin + 20;
			control = control + 10;
			touch = touch + 10;
			longevity = longevity + 10;
			feel = feel + 10;
			removeOrAdd("downfall");
			break;
		case 3: // not sure about TYPE OF PLAYER
			power = power + 10;
			spin = spin + 10;
			control = control + 10;
			touch = touch + 10;
			longevity = longevity + 5;
			feel = feel + 5;
			removeOrAdd("downfall");
			break;
		case 4: // hits ball too long
			// needs control
			control = control + 30;
			// spin as well
			spin = spin + 15;
			power = power + 5;
			touch = touch + 10;
			longevity = longevity + 10;
			removeOrAdd("choice");
			break;
		case 5: // not deep enough
			// needs spin
			spin = spin + 25;
			power = power + 20;
			control = control + 5;
			touch = touch + 5;
			longevity = longevity + 5;
			feel = feel + 5;
			removeOrAdd("choice");
			break;
		case 6: // can't hit targets
			// needs control
			control = control + 25;
			spin = spin + 20;
			power = power + 10;
			touch = touch + 10;
			removeOrAdd("choice");
			break;
		case 7: // not sure about downfall
			power = power + 10;
			control = control + 10;
			touch = touch + 5;
			longevity = longevity + 5;
			spin = spin + 10;
			feel = feel + 5;
			removeOrAdd("choice");
			break;
		case 8: // hit ball as hard as possible
			power = power + 20;
			control = control + 10;
			spin = spin + 5;
			removeOrAdd("comfort");
			break;
		case 9: // hit ball with topspin to ensure that it stays in
			power = power + 10;
			control = control + 20;
			touch = touch + 5;
			spin = spin + 15;
			removeOrAdd("comfort");
			break;
		case 10: // slice approach
			power = power + 5;
			control = control + 15;
			touch = touch + 30;
			spin = spin + 10;
			removeOrAdd("comfort");
			break;
		case 11: // not sure about approach
			power = power + 10;
			control = control + 10;
			touch = touch + 10;
			spin = spin + 5;
			removeOrAdd("comfort");
			break;
		case 12: // arm uncomfortable
			// needs comfort
			feel = feel + 70;
			feelPriority = true;
			removeOrAdd("durability");
		break;
		case 13: // arm comfortable
			feel = feel + 10;
			feelPriority = false;
			removeOrAdd("durability");
		break;
		case 14: // unsure about arm
			feel = feel + 20;
			feelPriority = false;
			removeOrAdd("durability");
			break;
		case 15: // breaks strings a lot
			longevity = longevity + 60;
			longevityPriority = true;
			removeOrAdd("touch");
			break;
		case 16: // does not break strings
			longevity = longevity + 10;
			// maybe can have more spin and power?
			//spin = spin + 20;
			//power = power + 20;
			longevityPriority = false;
			removeOrAdd("touch");
			break;
		case 17: // unsure about strings
			longevity = longevity + 30;
			longevityPriority = false;
			removeOrAdd("touch");
			break;
		case 18: // volleys a lot
			// needs touch
			touch = touch + 50;
			feel = feel + 20;
			control = control + 10;
			spin = spin + 10;
			removeOrAdd("improve");
			break;
		case 19: // does not volley a lot
			touch = touch + 5;
			removeOrAdd("improve");
			break;
		case 20: // unsure about volleying
			touch = touch + 10;
			feel = feel + 5;
			removeOrAdd("improve");
			break;
		default:
		break;
	}
}

function removeOrAdd(idString) {
	document.getElementById(idString).classList.remove('hidden');
	document.getElementById(idString).classList.toggle('show');
}

function submitAnswers() {
	var choice = document.forms[0];
	var checked = false;

	alert('submit!');

	for(var i = 0; i < choice.length; i++ ) {
     if(choice[i].checked) {
       checked = true;
       if (i == 0) { // wants more power
       		power = power + 30;
       } else if (i == 1) {
       		spin = spin + 30;
       } else if (i == 2) {
       		control = control + 30;
       }
     }
  } 
  // if user click submit button without selecting any option, alert box should be say "please select choice answer".
  if(!checked) {
    alert("please select choice answer");
    return;
  }
  // calculate distribution of user's preferences
  calculatePreferences();
}

function calculatePreferences() {
	var totalScore = spin + power + control + touch + feel + longevity;

	// determine type of string person wants
	

	document.getElementById('resultsText').innerHTML = "Spin: " + spin + "\nPower: " + power + "\nControl: " + control + "\nFeel: " + feel + "\nTouch: " + touch +  "\nLong: " + longevity;

	// first go to highest number (most priority) 
	/*if (control - power > 20) { // control is greater priority
		// loop through each string ratings and narrow out the strings with control 7 or greater
		if (spin > control) { // spin is very high prioritied
			// filter out strings with spins less than 8
		} else  if (spin > power) { // moderate

		} else { // control and power are very close

		}
	} else if (power - control > 20) { // power is greater priority
		// loop through each string ratings and narrow out the strings with power 7 or greater
	} else { // mixture of them all
		// find combos that have power and control differences less than or equal to 2
	}*/

	if (spin > control && spin > power) { // spin is greater priority
 		// filter all strings with spin at 8 or greater
 		var i;
 		for (i = 0; i < stringArray.length; i++) {
 			if (stringArray[i][3] < 7) { // remove from contention
 				stringArray.splice(i, 1); // removes string
 				i--;
 			}
 		}
 		// control and power are close enough to be one in one
 		// so, find strings that have power and control within 2 of each other
 		var j;
 		for (j = 0; j < stringArray.length; j++) {
 			/*if (stringArray[i][0] - stringArray[i][1] <= 2 && stringArray[i][0] - stringArray[i][1] >= -2) { // within 2

 			}*/

 			if (control > power) { // should be 2 or less 
 				if (stringArray[i][0] - stringArray[i][1] >= -2 && stringArray[i][0] - stringArray[i][1] <= 0) { // keep

 				}
 			} else {
 				if (stringArray[i][0] - stringArray[i][1] <= 2 && stringArray[i][0] - stringArray[i][1] >= 0) { // keep

 				}
 			}
 		}
	} else if (control >= power) { // control is greatest priority
		// filter strings with control at 7 or greater
		if (spin >= power) { // spin is the second priority

		} else { // spin is not a priority

		}
	} else if (power > control) { // power is greatest priority
		// filter strings with power at 7 or greater
		if (spin >= control) { // spin is the second priority

		} else { // spin is not a priority

		}
	}


}