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
var bestStrings = [0, 0, 0, 0, 0];
var bestIndexes = [0, 0, 0, 0, 0];

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
// constants for attribute index
const POWER_INDEX = 0;
const CONTROL_INDEX = 1;
const TOUCH_INDEX = 2;
const SPIN_INDEX = 3;
const LONGEVITY_INDEX = 4;
const COMFORT_INDEX = 5;

function start() {
	alert('lets start');

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
		alert('lets start');
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
  	//calculatePreferences();
	mostSimilarString();
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
 				if (!(stringArray[j][0] - stringArray[j][1] >= -2 && stringArray[j][0] - stringArray[j][1] <= 0)) { // remove
 					stringArray.splice(j, 1);
 					j--; // indexes of array change, so shift it down so that it does not miss the next element on the array
 				}
 			} else {
 				if (!(stringArray[j][0] - stringArray[j][1] <= 2 && stringArray[j][0] - stringArray[j][1] >= 0)) { // remove
 					stringArray.splice(j, 1);
 					j--; // indexes of array change, so shift it down so that it does not miss the next element on the array
 				}
 			}
 		}

 		// now look at touch
 		if (touch >= feel && touch >= longevity) { // touch is heavy priority
 			// so, filter out touch less than 8
 			var k;
 			for (k = 0; k < stringArray.length; k++) {
 				if (stringArray[k][2] < 8) { // remove
 					stringArray.splice(k, 1);
 					k--;
 				}
 			}

 			// find next highest score
 			if (feel >= longevity) { // feel is more important than longevity
 				// sort remaining by feel
 				sortArray(5); // feel (comfort) is 5
 			} else { // longevity is more important than feel
 				sortArray(4); // longevity is 4
 			}
 		} else if (longevity >= touch && longevity >= feel) { // longevity is heavy priority
 			cropOutOptions(4, 7); // longevity is 4, take out under 7 score

 			// find next most significant quality
 			if (touch >= feel) { // touch is more important
 				sortArray(2); // touch is 2
 			} else { // feel is more important
 				sortArray(5); // feel is 5
 			}
 		} else if (feel >= touch && feel >= longevity) { // feel is heavy priority
 			cropOutOptions(5, 7);

 			// next significance
 			if (touch >= longevity) { // touch is more important
 				sortArray(2); // touch is 2
 			} else { // longevity is more important
 				sortArray(4); // longevity is 4
 			}
 		}

 		// adjust according to feel and longevity
 		/*if (feel >= 70) {
 			// filter by feel
 			for (var h = 0; h < stringArray.length; h++) {
 				if (stringArray[h][5] < 7) { // remove
 					stringArray.splice(h, 1);
 					h--;
 				}
 			}
 		}

 		if (longevity >= 60) {
 			// filter by longev
 		}*/

 		// maybe use comfort and longevity to point out best options

	} else if (control >= power) { // control is greatest priority
		// filter strings with control at 7 or greater
		cropOutOptions(1, 7);
		if (spin >= power) { // spin is the second priority
			// crop out spin
			cropOutOptions(3, 8);
			// power at bottom

			// compare touch, feel, longevity
			if (touch >= feel && touch >= longevity) { // touch is high priority
				cropOutOptions(TOUCH_INDEX, 8);

				// find next significance

			}
		} else { // spin is not a priority
			// spin at bottom
			var differencePC = Math.round((control - power) / 10);
			// filter difference between control and power by having range of differencePC
			cropRange(CONTROL_INDEX, POWER_INDEX, differencePC);
		}
	} else if (power > control) { // power is greatest priority
		// filter strings with power at 7 or greater
		if (spin >= control) { // spin is the second priority

		} else { // spin is not a priority

		}
	}




}

function mostSimilarString() {
	alert('hey!');

	document.getElementById('resultsText').innerHTML = "Spin: " + spin + "\nPower: " + power + "\nControl: " + control + "\nFeel: " + feel + "\nTouch: " + touch +  "\nLong: " + longevity;

	var calcPower = power / 10;
	var calcControl = control / 10;
	var calcSpin = spin / 10;
	var calcTouch = touch / 10;

	// loop through strings and calculate difference 
	var bestStringIndex = 0;
	var bestDifference = 0;
	for (var i = 0; i < stringArray.length; i++) {
		var powerDiff = calcPower - stringArray[i][POWER_INDEX];
		var controlDiff = calcControl - stringArray[i][CONTROL_INDEX];
		var spinDiff = calcSpin - stringArray[i][SPIN_INDEX];
		var touchDiff = calcTouch - stringArray[i][TOUCH_INDEX];
		var currentMeanSquared = Math.pow(powerDiff, 2) + Math.pow(controlDiff, 2) + Math.pow(spinDiff, 2);

		/*if (i != 0) { // not first iteration
			if (currentMeanSquared < bestDifference) { // closer string with less difference
				bestDifference = currentMeanSquared;
				bestStringIndex = i;
			}
		} else { // first iteration
			bestDifference = currentMeanSquared; // by default the first difference becomes the best difference
		}*/

		//alert("Yo the difference: " + currentMeanSquared);

		if (i > 5) { // 
			if (currentMeanSquared < bestStrings[4]) { // should be added somewhere
				addOrderStrings(currentMeanSquared, false, i);
			}
		} else { // add to array by default
			addOrderStrings(currentMeanSquared, true, i);
		}

		// now compare with longevity and feel, touch
		// determine most significant
		/*if (touch >= 50) {
			// sway 3 options
			for (var i = 0; i < 3; i++) {
				if (stringArray[bestIndexes[i]][TOUCH_INDEX] - touchDiff > stringArray[bestIndexes[i+1]][TOUCH_INDEX] - touchDiff) { // switch them
					var tempVar = bestIndexes[i];
					bestIndexes[i] = bestIndexes[i+1];
					bestIndexes[i+1] = tempVar;
				}
			}
		}*/
	}
	//bestStrings[3] = 2;

	// show results
	document.getElementById('racquetResults').innerHTML = "Winning Racquets = " + bestStrings[0] + " " + bestStrings[1] + " " + bestStrings[2] + " " + bestStrings[3] + " " + bestStrings[4];
	//document.getElementById('racquetResults').innerHTML = bestStrings[4];
	document.getElementById('rankings').innerHTML = "Rankings = " + bestIndexes[0] + " " + bestIndexes[1] + " " + bestIndexes[2] + " " + bestIndexes[3] + " " + bestIndexes[4];

}

function indexToName(index) {
	switch (index) {
		case 0:
			//return "Babolat RPM Blast";
		break;
		case 1:
		//return "Babolat Pro Hurricane";
		break;
		case 2:
			//return "";
		break;
		case 3:
		break;
		case 4:
		break;
		case 5:
		break;
		case 6:
		break;
		case 7:
		break;
		case 8:
		break;
		case 9:
		break;
		case 10:
		break;
		case 11:
		break;
		case 12:
		break;
		case 13:
		break;
		case 14:
		break;
	}
}

function addOrderStrings(number, defaultValue, index) {
	for (var i = 0; i < 5; i++) {
		if (!defaultValue) {
			if (bestStrings[i] > number) { // add in
				for (var j = 4; j > i; j--) {
					bestStrings[j] = bestStrings[j - 1];
					bestIndexes[j] = bestIndexes[j - 1];
				}
				bestStrings[i] = number;
				bestIndexes[i] = index;
				i = 5;
			}
		} else { // automatically add in
			for (var i = 0; i < 5; i++) {
				if (bestStrings[i] >= number && bestStrings[i] != 0) {
					// add
					for (var j = 4; j > i; j--) {
						bestStrings[j] = bestStrings[j - 1];
						bestIndexes[j] = bestIndexes[j - 1];
					}
					bestStrings[i] = number;
					bestIndexes[i] = index;
					i = 5;
				} else if (bestStrings[i] == 0) {
					bestStrings[i] = number;
					bestIndexes[i] = index;
					i = 5;
				}
			}
		}
	}
}

function cropOutOptions(index, threshold) {
	for (var i = 0; i < stringArray.length; i++) {
		if (stringArray[i][index] < threshold) { // crop
			stringArray.splice(i, 1);
			i--;
		}
	}
}

function sortArray(index) {
	for (var b = 0; b < stringArray.length - 1; b++) {
		if (stringArray[b][index] < stringArray[b+1][index]) {
			// swap them
			var tempHolder = stringArray[b][index];
			stringArray[b][index] = stringArray[b+1][index];
			stringArray[b+1][index] = tempHolder;
		}
	}
}

function cropRange(index1, index2, range) {
	for (var i = 0; i < stringArray.length; i++) {
		if (stringArray[i][index1] - stringArray[i][index2] > range && stringArray[i][index1] - stringArray[i][index2] < 0) { // crop out
			stringArray.splice(i, 1);
			i--;
		}
	}
}