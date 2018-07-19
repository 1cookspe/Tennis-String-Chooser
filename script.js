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
// hold past commands in array (like stack in back button on web browser)
var pastCommands = [0,0,0,0,0,0]; // one entry for each question

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
const REFLEX = [8, 6, 7, 7, 7, 9]; // high power and comfort
const ORIGIN = [8, 7, 7, 5, 7, 8]; // power and touch, comfort
const X_ONE = [9, 6, 7, 5, 7, 8]; // power
const POLY_TOUR_PRO = [4, 8, 7, 7, 8, 7]; // control
const POLY_TOUR_SPIN = [3, 8, 7, 9, 8, 7]; // spin 
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
	stringArray[18] = REFLEX;
	stringArray[19] = ORIGIN;
	stringArray[20] = X_ONE;
	stringArray[21] = POLY_TOUR_PRO;
	stringArray[22] = POLY_TOUR_SPIN;
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
			if (pastCommands[0] != 0) { // past command has been played
				reverseAction(0, pastCommands[0]);
			}
			power = power + 30;
			control = control + 5;
			longevity = longevity + 10;
			touch = touch + 5;
			spin = spin + 10;
			feel = feel + 5;
			pastCommands[0] = 1;
			removeOrAdd("downfall");
			changeButton(0, 0, 3);
			break;
		case 1: // consistent player with long rallies
			if (pastCommands[0] != 0) { // been pressed
				reverseAction(0, pastCommands[0]);
			}
			power = power + 5;
			spin = spin + 30;
			control = control + 20;
			feel = feel + 5;
			touch = touch + 5;
			longevity = longevity + 15;
			pastCommands[0] = 2;
			removeOrAdd("downfall");
			changeButton(1,0,3);
			break;
		case 2: // all around player
			if (pastCommands[0] != 0) {
				reverseAction(0, pastCommands[0]);
			}
			styleAnswered = true;
			power = power + 10;
			spin = spin + 20;
			control = control + 10;
			touch = touch + 10;
			longevity = longevity + 10;
			feel = feel + 10;
			pastCommands[0] = 3;
			removeOrAdd("downfall");
			changeButton(2,0,3);
			break;
		case 3: // not sure about TYPE OF PLAYER
			if (pastCommands[0] != 0) {
				reverseAction(0, pastCommands[0]);
			}
			power = power + 10;
			spin = spin + 10;
			control = control + 10;
			touch = touch + 10;
			longevity = longevity + 5;
			feel = feel + 5;
			pastCommands[0] = 4;
			removeOrAdd("downfall");
			changeButton(3,0,3);
			break;
		case 4: // hits ball too long
			// needs control
			if (pastCommands[1] != 0) {
				reverseAction(1, pastCommands[1]);
			}
			control = control + 30;
			// spin as well
			spin = spin + 15;
			power = power + 5;
			touch = touch + 10;
			longevity = longevity + 10;
			pastCommands[1] = 1;
			removeOrAdd("choice");
			changeButton(4,4,7);
			break;
		case 5: // not deep enough
			// needs spin
			if (pastCommands[1] != 0) {
				reverseAction(1, pastCommands[1]);
			}
			spin = spin + 25;
			power = power + 20;
			control = control + 5;
			touch = touch + 5;
			longevity = longevity + 5;
			feel = feel + 5;
			pastCommands[1] = 2;
			removeOrAdd("choice");
			changeButton(5,4,7);
			break;
		case 6: // can't hit targets
			// needs control
			if (pastCommands[1] != 0) {
				reverseAction(1, pastCommands[1]);
			}
			control = control + 25;
			spin = spin + 20;
			power = power + 10;
			touch = touch + 10;
			pastCommands[1] = 3;
			removeOrAdd("choice");
			changeButton(6,4,7);
			break;
		case 7: // not sure about downfall
			if (pastCommands[1] != 0) {
				reverseAction(1, pastCommands[1]);
			}
			power = power + 10;
			control = control + 10;
			touch = touch + 5;
			longevity = longevity + 5;
			spin = spin + 10;
			feel = feel + 5;
			pastCommands[1] = 4;
			removeOrAdd("choice");
			changeButton(7,4,7);
			break;
		case 8: // hit ball as hard as possible
			if (pastCommands[2] != 0) {
				reverseAction(2, pastCommands[2]);
			}
			power = power + 20;
			control = control + 10;
			spin = spin + 5;
			pastCommands[2] = 1;
			removeOrAdd("comfort");
			changeButton(8,8,11);
			break;
		case 9: // hit ball with topspin to ensure that it stays in
			if (pastCommands[2] != 0) {
				reverseAction(2, pastCommands[2]);
			}
			power = power + 10;
			control = control + 20;
			touch = touch + 5;
			spin = spin + 15;
			pastCommands[2] = 2;
			removeOrAdd("comfort");
			changeButton(9,8,11);
			break;
		case 10: // slice approach
			if (pastCommands[2] != 0) {
				reverseAction(2, pastCommands[2]);
			}
			power = power + 5;
			control = control + 15;
			touch = touch + 30;
			spin = spin + 10;
			pastCommands[2] = 3;
			removeOrAdd("comfort");
			changeButton(10,8,11);
			break;
		case 11: // not sure about approach
			if (pastCommands[2] != 0) {
				reverseAction(2, pastCommands[2]);
			}
			power = power + 10;
			control = control + 10;
			touch = touch + 10;
			spin = spin + 5;
			pastCommands[2] = 4;
			removeOrAdd("comfort");
			changeButton(11,8,11);
			break;
		case 12: // arm uncomfortable
			// needs comfort
			if (pastCommands[3] != 0) {
				reverseAction(3, pastCommands[3]);
			}
			feel = feel + 70;
			pastCommands[3] = 1;
			removeOrAdd("durability");
			changeButton(12,12,14);
		break;
		case 13: // arm comfortable
			if (pastCommands[3] != 0) {
				reverseAction(3, pastCommands[3]);
			}
			feel = feel + 10;
			pastCommands[3] = 2;
			removeOrAdd("durability");
			changeButton(13,12,14);
		break;
		case 14: // unsure about arm
			if (pastCommands[3] != 0) {
				reverseAction(3, pastCommands[3]);
			}
			feel = feel + 20;
			pastCommands[3] = 3;
			removeOrAdd("durability");
			changeButton(14,12,14);
			break;
		case 15: // breaks strings a lot
			//alert('yes strings!');
			if (pastCommands[4] != 0) {
				reverseAction(4, pastCommands[4]);
			}
			longevity = longevity + 60;
			pastCommands[4] = 1;
			removeOrAdd("touch");
			changeButton(15,15,17);
			break;
		case 16: // does not break strings
			if (pastCommands[4] != 0) {
				reverseAction(4, pastCommands[4]);
			}
			longevity = longevity + 10;
			// maybe can have more spin and power?
			//spin = spin + 20;
			//power = power + 20;
			pastCommands[4] = 2;
			removeOrAdd("touch");
			changeButton(16,15,17);
			break;
		case 17: // unsure about strings
			if (pastCommands[4] != 0) {
				reverseAction(4, pastCommands[4]);
			}
			longevity = longevity + 30;
			pastCommands[4] = 3;
			removeOrAdd("touch");
			changeButton(17,15,17);
			break;
		case 18: // volleys a lot
			// needs touch
			if (pastCommands[5] != 0) {
				reverseAction(5, pastCommands[5]);
			}
			touch = touch + 50;
			feel = feel + 20;
			control = control + 10;
			spin = spin + 10;
			pastCommands[5] = 1;
			removeOrAdd("improve");
			changeButton(18,18,20);
			break;
		case 19: // does not volley a lot
			if (pastCommands[5] != 0) {
				reverseAction(5, pastCommands[5]);
			}
			touch = touch + 5;
			pastCommands[5] = 2;
			removeOrAdd("improve");
			changeButton(19,18,20);
			break;
		case 20: // unsure about volleying
			if (pastCommands[5] != 0) {
				reverseAction(5, pastCommands[5]);
			}
			touch = touch + 10;
			feel = feel + 5;
			pastCommands[5] = 3;
			removeOrAdd("improve");
			changeButton(20,18,20);
			break;
		default:
		break;
	}


}

function reverseAction(question, option) {
	// called if user selects new option (subtract contribution from other option(s) selected)
	switch (question) {
		case 0: // style of play
			if (option == 1) { // aggressive baseliner
				power = power - 30;
				control = control - 5;
				longevity = longevity - 10;
				touch = touch - 5;
				spin = spin - 10;
				feel = feel - 5;
			} else if (option == 2) { // consistent baseliner
				power = power - 5;
				spin = spin - 30;
				control = control - 20;
				feel = feel - 5;
				touch = touch - 5;
				longevity = longevity - 15;
			} else if (option == 3) { // all around player
				power = power - 10;
				spin = spin - 20;
				control = control - 10;
				touch = touch - 10;
				longevity = longevity - 10;
				feel = feel - 10;
			} else if (option == 4) { // not sure
				power = power - 10;
				spin = spin - 10;
				control = control - 10;
				touch = touch - 10;
				longevity = longevity - 5;
				feel = feel - 5;
			}
			break;
		case 1: // downfall
			if (option == 1) { // Too long / into net
				control = control - 30;
				// spin as well
				spin = spin - 15;
				power = power - 5;
				touch = touch - 10;
				longevity = longevity - 10;
			} else if (option == 2) { // Not deep enough
				spin = spin - 25;
				power = power - 20;
				control = control - 5;
				touch = touch - 5;
				longevity = longevity - 5;
				feel = feel - 5;
			} else if (option == 3) { // no targets
				control = control - 25;
				spin = spin - 20;
				power = power - 10;
				touch = touch - 10;
			} else if (option == 4) { // not sure
				power = power - 10;
				control = control - 10;
				touch = touch - 5;
				longevity = longevity - 5;
				spin = spin - 10;
				feel = feel - 5;
			}
			break;
		case 2: // short ball
			if (option == 1) { // hit ball as hard as possible
				power = power - 20;
				control = control - 10;
				spin = spin - 5;
			} else if (option == 2) { // hit with topspin to keep ball in
				power = power - 10;
				control = control - 20;
				touch = touch - 5;
				spin = spin - 15;
			} else if (option == 3) { // slice ball
				power = power - 5;
				control = control - 15;
				touch = touch - 30;
				spin = spin - 10;
			} else if (option == 4) { // not sure
				power = power - 10;
				control = control - 10;
				touch = touch - 10;
				spin = spin - 5;
			}
			break;
		case 3: // comfortable
			if (option == 1) { // yes arm is uncomfortable
				feel = feel - 70;
			} else if (option == 2) { // no arm is not uncomfortable
				feel = feel - 10;
			} else if (option == 3) { // not sure
				feel = feel - 20;
			}
		break;
		case 4: // break strings
			if (option == 1) { // yes break strings
				longevity = longevity - 60;
			} else if (option == 2) { // no does not break strings
				longevity = longevity - 10;
			} else if (option == 3) { // not sure about strings
				longevity = longevity - 30;
			}
		break;
		case 5: // volleys
			if (option == 1) { // yes volleys
				touch = touch - 50;
				feel = feel - 20;
				control = control - 10;
				spin = spin - 10;
			} else if (option == 2) { // no volleys
				touch = touch - 5;
			} else if (option == 3) { // not sure
				touch = touch - 10;
				feel = feel - 5;
			}
		break;
		default:
		break;
	}
}

function changeButton(number, start, end) {
	for (var i = start; i <= end; i++) {
		var idName = i + "Button";
		if (i == number) {
			document.getElementById(idName).style.backgroundColor = "#FF0000";
		} else {
			document.getElementById(idName).style.backgroundColor = "#4CAF50";
		}
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

	var calcPower = 0;
	var calcControl = 0;
	var calcSpin = 0;
	//var calcTouch = 0;

	// find most dominant characteristic
	// generate fraction of other characteristics to the main characteristic!
	if (control >= spin && control >= power) { // control is dominant
		calcPower = (power / control) * 10; 
		calcSpin = (spin / control) * 10;
		calcControl = 10;
	} else if (power >= spin && power >= control) { // power is dominant
		calcSpin = (spin / power) * 10;
		calcControl = (control / power) * 10;
		calcPower = 10;
	} else if (spin >= power && spin >= control) { // spin is dominant
		calcControl = (control / spin) * 10;
		calcPower = (power / spin) * 10;
		calcSpin = 10;
	}

	// loop through strings and calculate difference 
	var bestStringIndex = 0;
	var bestDifference = 0;
	for (var i = 0; i < stringArray.length; i++) {
		var powerDiff = calcPower - stringArray[i][POWER_INDEX];
		var controlDiff = calcControl - stringArray[i][CONTROL_INDEX];
		var spinDiff = calcSpin - stringArray[i][SPIN_INDEX];
		//var touchDiff = calcTouch - stringArray[i][TOUCH_INDEX];
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

	// maybe ensure that correct high values are reflected (after)
	// sort around the 5
	for (var i = 0; i < 4; i++) { // sort 5
		if (power > control) {
			// make sure that power is greater than control rating
			if (stringArray[bestIndexes[i]][POWER_INDEX] < stringArray[bestIndexes[i]][CONTROL_INDEX]) { // switch with next option because power should be greater
				/*sortedCorrectly = false;
				var tempString = bestStrings[i];
				var tempIndex = bestIndexes[i];
				bestStrings[i] = bestStrings[i+1];
				bestIndexes[i] = bestIndexes[i+1];
				bestStrings[i+1] = tempString;
				bestIndexes[i+1] = tempIndex;*/

				// loop until string is found that has higher power than control
				var j = i + 1;
				while (j < 5) { // loop until end
					if (stringArray[bestIndexes[j]][POWER_INDEX] > stringArray[bestIndexes[j]][CONTROL_INDEX]) {
						// now switch!
						var holdString = bestStrings[i];
						var holdIndex = bestIndexes[i];
						bestStrings[i] = bestStrings[j];
						bestIndexes[i] = bestIndexes[j];
						bestStrings[j] = holdString;
						bestIndexes[j] = holdIndex;
						j = 5;
					}
					j++;
				}
			}

		} else if (control >= power) {
			// make sure control is greater than power
			if (stringArray[bestIndexes[i]][POWER_INDEX] > stringArray[bestIndexes[i]][CONTROL_INDEX]) { // switch with next option because power should be greater
				/*sortedCorrectly = false;
				var tempString = bestStrings[i];
				var tempIndex = bestIndexes[i];
				bestStrings[i] = bestStrings[i+1];
				bestIndexes[i] = bestIndexes[i+1];
				bestStrings[i+1] = tempString;
				bestIndexes[i+1] = tempIndex;*/

				// loop until string
				var j = i + 1;
				while (j < 5) { // loop until end
					if (stringArray[bestIndexes[j]][POWER_INDEX] < stringArray[bestIndexes[j]][CONTROL_INDEX]) {
						// now switch!
						var holdString = bestStrings[i];
						var holdIndex = bestIndexes[i];
						bestStrings[i] = bestStrings[j];
						bestIndexes[i] = bestIndexes[j];
						bestStrings[j] = holdString;
						bestIndexes[j] = holdIndex;
						j = 5;
					}
					j++;
				}
			} 
		}
	}

	// can we sort by comfort, touch, and longevity?
	var calcTouch = 0;
	var calcLong = 0;
	var calcFeel = 0;
	if (touch >= longevity && touch >= feel) { // touch is greatest priority
		calcTouch = 10;
		calcLong = (longevity / touch) * 10;
		calcFeel = (feel / touch) * 10;
	} else if (feel >= touch && feel >= longevity && feel >= 70) { // feel is priority
		calcFeel = 10;
		calcTouch = (touch / feel) * 10;
		calcLong = (longevity / feel) * 10;
	} else if (longevity >= feel && longevity >= touch && longevity >= 60) { // longevity is priority
		calcLong = 10;
		calcFeel = (feel / longevity) * 10;
		calcTouch = (touch / longevity) * 10;
	}

	// loop through final 5 candidates and sort by comfort, touch, and longevity
	var finalSortings = [0, 0, 0, 0, 0];
	for (var i = 0; i < 5; i++) {
		// create characteristics for each string
		var touchDiff = calcTouch - stringArray[bestIndexes[i]][TOUCH_INDEX];
		var feelDiff = calcFeel - stringArray[bestIndexes[i]][COMFORT_INDEX];
		var longDiff = calcLong - stringArray[bestIndexes[i]][LONGEVITY_INDEX];
		var statistics = Math.pow(touchDiff, 2) + Math.pow(feelDiff, 2) + Math.pow(longDiff, 2);

		// save results of each and then sort results accordingly
		finalSortings[i] = statistics + bestStrings[i];
	}

	// now see if the new scores can make a difference
	/*for (var i = 0; i < 4; i++) {
		if (finalSortings[i] > finalSortings[i+1]) {
			// swap them, keep going until it reaches the next highest number
			var j = i + 1;
			while (j < 5) {
				if (finalSortings[j] > finalSortings[i]) { // switch when it hits a score greater
					// now swap them!
					var tempFinal = finalSortings[i];
					finalSortings[i] = finalSortings[j];
					finalSortings[j] = tempFinal;
					j = 5;
				} else if (j == 4) {
					// just swap with last one
				}
				j++;
			}
		}
	}*/

	// sort new results
	// sort by selection sort
	for (var i = 0; i < 5; i++) {
		var leastIndex = i;
		for (var j = i + 1; j < 5; j++) {
			if (finalSortings[j] < finalSortings[leastIndex]) {
				leastIndex = j;
			}
		}
		// swap, place least number at beginning
		var tempSmall = finalSortings[leastIndex];
		finalSortings[leastIndex] = finalSortings[i];
		finalSortings[i] = tempSmall;

		// swap indexes
		var holdSmall = bestIndexes[leastIndex];
		bestIndexes[leastIndex] = bestIndexes[i];
		bestIndexes[i] = holdSmall;

		// swap original
		var holdOrig = bestStrings[leastIndex];
		bestStrings[leastIndex] = bestStrings[i];
		bestStrings[i] = holdOrig;
	}
	alert(finalSortings.join(","));

	// show results
	document.getElementById('racquetResults').innerHTML = "Winning Racquets = " + bestStrings[0] + " " + bestStrings[1] + " " + bestStrings[2] + " " + bestStrings[3] + " " + bestStrings[4];
	//document.getElementById('racquetResults').innerHTML = bestStrings[4];
	document.getElementById('rankings').innerHTML = "Rankings = " + bestIndexes[0] + " " + bestIndexes[1] + " " + bestIndexes[2] + " " + bestIndexes[3] + " " + bestIndexes[4];
	//var racutee = indexToName(0);

	// show string results
	//document.getElementById('topImage').src = "https://i.imgur.com/F2i9IDQ.png";
	//document.getElementById('topCaption').innerHTML = "Babolat rocks!";

	// show winners with images and captions
	var topString = indexToName(bestIndexes[0]);
	document.getElementById('topImage').src = topString.image;
	document.getElementById('topCaption').innerHTML = topString.caption;
	document.getElementById('topName').innerHTML = topString.name;
	var secondString = indexToName(bestIndexes[1]);
	document.getElementById('secondImage').src = secondString.image;
	document.getElementById('secondCaption').innerHTML = secondString.caption;
	document.getElementById('secondName').innerHTML = secondString.name;
	var thirdString = indexToName(bestIndexes[2]);
	document.getElementById('thirdImage').src = thirdString.image;
	document.getElementById('thirdCaption').innerHTML = thirdString.caption;
	document.getElementById('thirdName').innerHTML = thirdString.name;
	var fourthString = indexToName(bestIndexes[3]);
	document.getElementById('fourthImage').src = fourthString.image;
	document.getElementById('fourthCaption').innerHTML = fourthString.caption;
	document.getElementById('fourthName').innerHTML = fourthString.name;
	var fifthString = indexToName(bestIndexes[4]);
	document.getElementById('fifthImage').src = fifthString.image;
	document.getElementById('fifthCaption').innerHTML = fifthString.caption;
	document.getElementById('fifthName').innerHTML = fifthString.name;
}

function indexToName(index) {
	var racquetObject;
	switch (index) {
		case 0:
			racquetObject = {name: "Babolat RPM Blast", link: "", image: "https://i.imgur.com/6179VZq.png", caption: "The Babolat RPM Blast allows players to hit shots oozing with topspin and high amounts of control. Used by top pros including Rafael Nadal."};
		break;
		case 1:
			racquetObject = {name: "Babolat Pro Hurricane", link: "", image: "https://i.imgur.com/hig3xAC.png", caption: "Tons of control for big hitters, while also offering exceptional spin. The choice of Andy Roddick."};
		break;
		case 2:
			racquetObject = {name: "Babolat VS Touch", link: "", image: "https://i.imgur.com/M7tyEdi.png", caption: "A natural gut string, the VS Touch offers insane amounts of power, while offering a soft touch."};
		break;
		case 3:
			racquetObject = {name: "Babolat Xcel", link: "", image: "https://i.imgur.com/CJQiIDm.png", caption: "A good blend of control and spin, with an emphasis on amazing feel and comfort in each swing."};
		break;
		case 4:
			racquetObject = {name: "Babolat Addiction", link: "", image: "https://i.imgur.com/F2i9IDQ.png", caption: "A combination of comfort, power, and durability."};
		break;
		case 5:
			racquetObject = {name: "Luxilon ALU Power", link: "", image: "https://i.imgur.com/5PgWDd6.png", caption: "Exceptional feel and control, with amazing spin. Has been one of the most popular strings on tour for years."};
		break;
		case 6:
			racquetObject = {name: "Luxilon 4G", link: "", image: "https://i.imgur.com/w1RKGTY.png", caption: "Puts great bite on the ball to give it spin. Holds up tension well and offers great comfort."};
		break;
		case 7:
			racquetObject = {name: "Luxilon Big Banger", link: "", image: "https://i.imgur.com/N7WWcnY.png", caption: "This string packs a ton of control for players who love to crush the ball. Amazing durability as well ensure that string breaks will be far and few between."};
		break;
		case 8:
			racquetObject = {name: "Wilson NXT Power", link: "", image: "https://i.imgur.com/5xUXlyO.png", caption: "NXT Power allows you to add pop to your ball for extra power, while maintaining excellent comfort and feel."};
		break;
		case 9:
			racquetObject = {name: "Wilson Sensation", link: "", image: "https://i.imgur.com/oD71lS4.png", caption: "For absolute comfort and feel, the Sensation is a great all-around string."};
		break;
		case 10:
			racquetObject = {name: "Wilson Revolve", link: "", image: "https://i.imgur.com/9elUywg.png", caption: "The Revolve combines spin and control to be a forgiving and comfortable string."};
		break;
		case 11:
			racquetObject = {name: "Wilson NXT Control", link: "", image: "https://i.imgur.com/OncQUWA.png", caption: "A great control based string combined with touch and feel."};
		break;
		case 12:
			racquetObject = {name: "Wilson Champion's Choice", link: "", image: "https://i.imgur.com/e0If0zk.png", caption: "More of a power string than control string, Champion's Choice is a hybrid of Wilson Natural Gut with Luxilon ALU Power Rough. With great spin and touch, this is Roger Federer's string of choice."};
		break;
		case 13:
			racquetObject = {name: "Head Hawk", link: "", image: "https://i.imgur.com/K5xUrrc.png", caption: "Perfect for control and spin, the Hawk allows you to swing freely."};
		break;
		case 14:
			racquetObject = {name: "Head Lynx", link: "", image: "https://i.imgur.com/QM8XySI.png", caption: "Lynx offers delicate touch and comfort with excellent control through spin."};
		break;
		case 15:
			racquetObject = {name: "Head Sonic Pro", link: "", image: "https://i.imgur.com/16cok2f.png", caption: "The Sonic Pro is perfect for players looking for control in their strings, while being durable and comfortable."};
		break;
		case 16:
			racquetObject = {name: "Head FXP Tour", link: "", image: "https://i.imgur.com/DhGQ0yZ.png", caption: "A perfect balance between power and control, this string gives you a little bit of everything."};
		break;
		case 17:
			racquetObject = {name: "Head RIP Control", link: "", image: "https://i.imgur.com/FUHF8St.png", caption: "This string perfectly combines control with comfort, allowing players to direct the ball where they want it while maintaining a comfortable arm over time."};
		break;
		case 18:
			racquetObject = {name: "Head Reflex", link: "", image: "https://i.imgur.com/9REo8qb.png", caption: "A very comfortable string capable of generating high amounts of spin."};
		break;
		case 19:
			racquetObject = {name: "Babolat Origin", link: "", image: "https://i.imgur.com/rQ9iac1.png", caption: "A soft string packed with tons of power. Very easy on the arm while hitting."};
		break;
		case 20:
			racquetObject = {name: "Technifibre X-One Biphase", link: "", image: "https://i.imgur.com/yXfKgL2.png", caption: "Packed with power and comfort to allow you to dictate points."};
		break;
		case 21:
			racquetObject = {name: "Yonex Poly Tour Pro", link: "", image: "https://i.imgur.com/LuKxa17.png", caption: "Spin and control are the two most excellent attributes of this string, perfect for big hitters such as Nick Kyrgios."};
		break;
		case 22:
			racquetObject = {name: "Yonex Poly Tour Spin", link: "", image: "https://i.imgur.com/K0tNaGV.png", caption: "Extra bite can be added to the ball for excellent spin."};
		break;
		default:
		break;
	}
	return racquetObject;
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