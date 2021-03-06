// variables
var racquet = 0;
var spin = 0;
var power = 0;
var control = 0;
var feel = 0;
var touch = 0;
var longevity = 0;
var stringArray = [[]];
var bestStrings = [0, 0, 0, 0, 0];
var bestIndexes = [0, 0, 0, 0, 0];
// hold past commands in array (like stack in back button on web browser)
var pastCommands = [0,0,0,0,0,0]; // one entry for each question
// for slides
var slideIndex = 1;
var formSubmitted = false;
var resultsCalculated = false;

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

// load first question once everything has loaded
document.addEventListener("DOMContentLoaded", function(e){
	showSlides(slideIndex);

	// start at top of screen
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // show cookies popup if user has not visited yet
    var visited = localStorage.getItem('visited');
    if (!visited) { // first time on site for user
    	// show popup
    	document.getElementById("popupp").style.visibility = "visible";
    	// localStorage.setItem('visited', true);
    }
});

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
	stringArray[18] = REFLEX;
	stringArray[19] = ORIGIN;
	stringArray[20] = X_ONE;
	stringArray[21] = POLY_TOUR_PRO;
	stringArray[22] = POLY_TOUR_SPIN;

	// show next question
	slideIndex++;
	showSlides(slideIndex);

	// Set dots and arrows to visible
	// keep first dot hidden
	var dots = document.getElementsByClassName("dot");
	for (var i = 1; i < dots.length - 1; i++) {
		dots[i].style.visibility = "visible";
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
			changeButton(11,8,11);
			break;
		case 12: // arm uncomfortable
			// needs comfort
			if (pastCommands[3] != 0) {
				reverseAction(3, pastCommands[3]);
			}
			feel = feel + 70;
			pastCommands[3] = 1;
			changeButton(12,12,14);
		break;
		case 13: // arm comfortable
			if (pastCommands[3] != 0) {
				reverseAction(3, pastCommands[3]);
			}
			feel = feel + 10;
			pastCommands[3] = 2;
			changeButton(13,12,14);
		break;
		case 14: // unsure about arm
			if (pastCommands[3] != 0) {
				reverseAction(3, pastCommands[3]);
			}
			feel = feel + 20;
			pastCommands[3] = 3;
			changeButton(14,12,14);
			break;
		case 15: // breaks strings a lot
			//alert('yes strings!');
			if (pastCommands[4] != 0) {
				reverseAction(4, pastCommands[4]);
			}
			longevity = longevity + 60;
			pastCommands[4] = 1;
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
			changeButton(16,15,17);
			break;
		case 17: // unsure about strings
			if (pastCommands[4] != 0) {
				reverseAction(4, pastCommands[4]);
			}
			longevity = longevity + 30;
			pastCommands[4] = 3;
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
			changeButton(18,18,20);
			break;
		case 19: // does not volley a lot
			if (pastCommands[5] != 0) {
				reverseAction(5, pastCommands[5]);
			}
			touch = touch + 5;
			pastCommands[5] = 2;
			changeButton(19,18,20);
			break;
		case 20: // unsure about volleying
			if (pastCommands[5] != 0) {
				reverseAction(5, pastCommands[5]);
			}
			touch = touch + 10;
			feel = feel + 5;
			pastCommands[5] = 3;
			changeButton(20,18,20);
			break;
		default:
		break;
	}
	// go to next question / slide
	plusSlides(1);

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
		if (i == number) { // change to white background with black text
			document.getElementById(idName).style.backgroundColor = "#228B22";
		} else { // keep at black background
			document.getElementById(idName).style.backgroundColor = "#000000";
		}
	}
}

function resetScores() {
	// resets state (as if page is reloaded)
	// all scores to 0
	power = 0;
	control = 0;
	spin = 0;
	longevity = 0;
	feel = 0;
	touch = 0;

	// set past commands array to all 0
	for (var i = 0; i < pastCommands.length; i++) {
		pastCommands[i] = 0;
	}

	// go to first question
	currentSlide(1);

	// make buttons all black again
	for (var i = 0; i <= 20; i++) {
		var newButton = document.getElementById(i + "Button");
		newButton.style.backgroundColor = "#000";
	}

	// initial state
	resultsCalculated = false;

	// string holder arrays back to just 0
	for (var i = 0; i < bestStrings.length; i++) {
		bestStrings[i] = 0;
		bestIndexes[i] = 0;
	}

	// reset radio buttons
	var choices = document.getElementsByName("choice");
	for (var i = 0; i < choices.length; i++) {
		choices[i].checked = false;
	}

	// go back to top of page
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function submitAnswers() {
	var choice = document.forms[0];
	var checked = false;
	var otherAnswered = true;

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
  	// also verify that all other questions have been answered
  	for (var i = 0; i < pastCommands.length; i++) {
  		if (pastCommands[i] == 0) { // not answered
  			otherAnswered = false;
  			i = pastCommands.length + 1;
  		}
  	}

  	if(!checked || !otherAnswered) {
    	alert("Ooops! Please ensure that you have answered all the questions before proceeding!");
  	} else {
  		// calculate distribution of user's preferences
  		resultsCalculated = true;
		mostSimilarString();
		//move to next slide (results)
		plusSlides(1);
  	}
  	
}

function mostSimilarString() {

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
		// hold differences between calculated properties and properties of each string
		var powerDiff = calcPower - stringArray[i][POWER_INDEX];
		var controlDiff = calcControl - stringArray[i][CONTROL_INDEX];
		var spinDiff = calcSpin - stringArray[i][SPIN_INDEX];

		// calculate total mean squared differences between each property of the string
		var currentMeanSquared = Math.pow(powerDiff, 2) + Math.pow(controlDiff, 2) + Math.pow(spinDiff, 2);

		// sort the scores 
		if (i > 5) { // more than 5 entries have been added, so entries must be sorted
			if (currentMeanSquared < bestStrings[4]) { // should be added somewhere
				addOrderStrings(currentMeanSquared, false, i);
			}
		} else { // add to array by default
			addOrderStrings(currentMeanSquared, true, i);
		}

	}

	// ensure that correct high values are reflected
	// sort the 5 top scoring strings
	for (var i = 0; i < 4; i++) { // sort 5
		if (power > control) {
			// make sure that power is greater than control rating
			if (stringArray[bestIndexes[i]][POWER_INDEX] < stringArray[bestIndexes[i]][CONTROL_INDEX]) { // switch with next option because power should be greater
				// loop until string is found that has higher power than control
				var j = i + 1;
				while (j < 5) { // loop until end
					if (stringArray[bestIndexes[j]][POWER_INDEX] > stringArray[bestIndexes[j]][CONTROL_INDEX]) {
						// now switch strings
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
				// loop until string
				var j = i + 1;
				while (j < 5) { // loop until end
					if (stringArray[bestIndexes[j]][POWER_INDEX] < stringArray[bestIndexes[j]][CONTROL_INDEX]) {
						// now switch strings
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

	// sort by comfort, touch, and longevity
	var calcTouch = 0;
	var calcLong = 0;
	var calcFeel = 0;
	// determine the highest score of the three --> highest priority
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

	// RESULTS
	var topString = indexToName(bestIndexes[0]);
	document.getElementById('firstStringImage').src = topString.image;
	document.getElementById('firstStringCaption').innerHTML = topString.caption;
	document.getElementsByClassName('stringName')[0].innerHTML = topString.name;
	// document.getElementById('firstStringLink').href = topString.link;
	// topLink = topString.link;
	document.getElementsByClassName('shopLink')[0].href = topString.link;
	
	var secondString = indexToName(bestIndexes[1]);
	document.getElementById('secondStringImage').src = secondString.image;
	document.getElementById('secondStringCaption').innerHTML = secondString.caption;
	document.getElementsByClassName('stringName')[1].innerHTML = secondString.name;
	// document.getElementById('secondStringLink').href = secondString.link;
	// secondLink = secondString.link;
	document.getElementsByClassName('shopLink')[1].href = secondString.link;
	
	var thirdString = indexToName(bestIndexes[2]);
	document.getElementById('thirdStringImage').src = thirdString.image;
	document.getElementById('thirdStringCaption').innerHTML = thirdString.caption;
	document.getElementsByClassName('stringName')[2].innerHTML = thirdString.name;
	// document.getElementById('thirdStringLink').href = thirdString.link;
	// thirdLink = thirdString.link;
	document.getElementsByClassName('shopLink')[2].href = thirdString.link;
}

function indexToName(index) { // returns racquet object for each string
	var racquetObject;
	switch (index) {
		case 0:
			racquetObject = {name: "Babolat RPM Blast", link: "https://www.tennis-warehouse.com/reviews/BRPMB16/BRPMB16review.html", image: "images/rpm_blast.png", caption: "The Babolat RPM Blast allows players to hit shots oozing with topspin and high amounts of control. Used by top pros including Rafael Nadal."};
		break;
		case 1:
			racquetObject = {name: "Babolat Pro Hurricane", link: "https://www.tennis-warehouse.com/reviews/BH17T/BH17Treview.html", image: "images/pro_hurricane.jpg", caption: "Tons of control for big hitters, while also offering exceptional spin. The choice of Andy Roddick."};
		break;
		case 2:
			racquetObject = {name: "Babolat VS Touch", link: "https://www.tennis-warehouse.com/Reviews/BNG16/BNG16Review.html", image: "images/vs_touch.png", caption: "A natural gut string, the VS Touch offers insane amounts of power, while offering a soft touch."};
		break;
		case 3:
			racquetObject = {name: "Babolat Xcel", link: "https://www.tennis-warehouse.com/Reviews/BXCL16/BXCL16Review.html", image: "images/xcel.png", caption: "A good blend of control and spin, with an emphasis on amazing feel and comfort in each swing."};
		break;
		case 4:
			racquetObject = {name: "Babolat Addiction", link: "https://www.tennis-warehouse.com/Babolat_Addiction_16_String/descpageACBAB-BADD16.html", image: "images/addiction.png", caption: "A combination of comfort, power, and durability."};
		break;
		case 5:
			racquetObject = {name: "Luxilon ALU Power", link: "https://www.tennis-warehouse.com/Reviews/ALUSTR/ALUSTRReview.html", image: "images/alu_power.png", caption: "Exceptional feel and control, with amazing spin. Has been one of the most popular strings on tour for years."};
		break;
		case 6:
			racquetObject = {name: "Luxilon 4G", link: "https://www.tennis-warehouse.com/reviews/LUX4G125/LUX4G125review.html", image: "images/four_g.png", caption: "Puts great bite on the ball to give it spin. Holds up tension well and offers great comfort."};
		break;
		case 7:
			racquetObject = {name: "Luxilon Big Banger", link: "https://www.tennis-warehouse.com/reviews/BB16/BB16review.html", image: "images/big_banger.png", caption: "This string packs a ton of control for players who love to crush the ball. Amazing durability ensures that string breaks will be far and few between."};
		break;
		case 8:
			racquetObject = {name: "Wilson NXT Power", link: "https://www.tennis-warehouse.com/Reviews/NXTTPWR18/NXTTPWR18Review.html", image: "images/nxt_power.png", caption: "NXT Power allows you to add pop to your ball for extra power, while maintaining excellent comfort and feel."};
		break;
		case 9:
			racquetObject = {name: "Wilson Sensation", link: "https://www.tennis-warehouse.com/Wilson_Sensation_16_String/descpageACWILSON-SEN16.html", image: "images/sensation.png", caption: "For absolute comfort and feel, the Sensation is a great all-around string."};
		break;
		case 10:
			racquetObject = {name: "Wilson Revolve", link: "https://www.tennis-warehouse.com/Reviews/WRV16/WRV16Review.html", image: "images/revolve.png", caption: "The Revolve combines spin and control to be a forgiving and comfortable string."};
		break;
		case 11:
			racquetObject = {name: "Wilson NXT Control", link: "https://www.tennis-warehouse.com/Reviews/NXTC16/NXTC16Review.html", image: "images/nxt_control.png", caption: "A great control based string combined with touch and feel."};
		break;
		case 12:
			racquetObject = {name: "Wilson Champion's Choice", link: "https://www.tennis-warehouse.com/reviews/WCC16/WCC16review.html", image: "images/champions_choice.png", caption: "More of a power string than control string, Champion's Choice is a hybrid of Wilson Natural Gut with Luxilon ALU Power Rough. With great spin and touch, this is Roger Federer's string of choice."};
		break;
		case 13:
			racquetObject = {name: "Head Hawk", link: "https://www.tennis-warehouse.com/reviews/HAWK16/HAWK16review.html", image: "images/hawk.png", caption: "Perfect for control and spin, the Hawk allows you to swing freely."};
		break;
		case 14:
			racquetObject = {name: "Head Lynx", link: "https://www.tennis-warehouse.com/Reviews/LYNX17/LYNX17Review.html", image: "images/lynx.png", caption: "Lynx offers delicate touch and comfort with excellent control through spin."};
		break;
		case 15:
			racquetObject = {name: "Head Sonic Pro", link: "https://www.tennis-warehouse.com/Reviews/SONIC16/SONIC16Review.html", image: "images/sonic_pro.png", caption: "The Sonic Pro is perfect for players looking for control in their strings, while being durable and comfortable."};
		break;
		case 16:
			racquetObject = {name: "Head FXP Tour", link: "https://www.tennis-warehouse.com/reviews/HFXPT16/HFXPT16review.html", image: "images/fxp_tour.png", caption: "A perfect balance between power and control, this string gives you a little bit of everything."};
		break;
		case 17:
			racquetObject = {name: "Head RIP Control", link: "https://www.tennis-warehouse.com/reviews/RCON16/RCON16review.html", image: "images/rip_control.png", caption: "This string perfectly combines control with comfort, allowing players to direct the ball where they want it while maintaining a comfortable arm over time."};
		break;
		case 18:
			racquetObject = {name: "Head Reflex", link: "https://www.tennis-warehouse.com/reviews/HRMLT16/HRMLT16review.html", image: "images/reflex.png", caption: "A very comfortable string capable of generating high amounts of spin."};
		break;
		case 19:
			racquetObject = {name: "Babolat Origin", link: "https://www.tennis-warehouse.com/reviews/BORIG16/BORIG16review.html", image: "images/origin.png", caption: "A soft string packed with tons of power. Very easy on the arm while hitting."};
		break;
		case 20:
			racquetObject = {name: "Technifibre X-One Biphase", link: "https://www.tennis-warehouse.com/Reviews/X117/X117Review.html", image: "images/x_one.png", caption: "Packed with power and comfort to allow you to dictate points."};
		break;
		case 21:
			racquetObject = {name: "Yonex Poly Tour Pro", link: "https://www.tennis-warehouse.com/Reviews/YPTP130/YPTP130Review.html", image: "images/poly_tour_pro.png", caption: "Spin and control are the two most excellent attributes of this string, perfect for big hitters such as Nick Kyrgios."};
		break;
		case 22:
			racquetObject = {name: "Yonex Poly Tour Spin", link: "https://www.tennis-warehouse.com/Yonex_Poly_Tour_Spin_125_16L_Blue_String/descpageACYONEX-YPTS125.html", image: "images/poly_tour_spin.png", caption: "Extra bite can be added to the ball for excellent spin."};
		break;
		default:
		break;
	}
	return racquetObject;
}

function addOrderStrings(number, defaultValue, index) {
	// number is a double representing the value to be added
	// defaultValue is a boolean representing if the number is to be added automatically or checked first if it fits into the array's range
	for (var i = 0; i < 5; i++) {
		if (!defaultValue) { // add number in if it fits into range
			if (bestStrings[i] > number) { // add in
				for (var j = 4; j > i; j--) { // shift other values over to insert number
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
				} else if (bestStrings[i] == 0) { // index in array has not been filled yet, so value is just added to position
					bestStrings[i] = number;
					bestIndexes[i] = index;
					i = 5;
				}
			}
		}
	}

}

// next and previous arrows
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {

	// present slide (only present slide 9 if results have been calculated)
	if (slideIndex != 9 || resultsCalculated) { // works on every slide except for the results slide before the results are calculated
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) {slideIndex = 1} // first slide
		if (n < 1) {slideIndex = slides.length} // last slide
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; // slide hidden by default
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", ""); // show navigation dots at bottom
		}
		slides[slideIndex-1].style.display = "block"; // show selected slide
		dots[slideIndex-1].className += " active"; // make selected dot active

		// show submit button if on the last question
	 	if (slideIndex == 9) {
			// show container for buttons
			document.getElementById("questionsContainer").style.visibility = "visible";
			// hide dots
			for (var i = 0; i < dots.length; i++) {
				document.getElementsByClassName("dot")[i].style.visibility = "hidden";
			}
			// hide arrows
			document.getElementsByClassName("prev")[0].style.visibility = "hidden";
			document.getElementsByClassName("next")[0].style.visibility = "hidden";
		} else if (slideIndex == 8) { 
			// hide forward button to results
			document.getElementsByClassName("next")[0].style.visibility = "hidden";
		} else { 
			// any other slide should hide the feedback buttons
			document.getElementById("questionsContainer").style.visibility = "hidden";
			// ensure that prev and next buttons are shown otherwise
			if (slideIndex != 1 && slideIndex != 2) {
				document.getElementsByClassName("next")[0].style.visibility = "visible";
				document.getElementsByClassName("prev")[0].setAttribute('style', 'visibility:visible !important;');
			} else if (slideIndex == 2) {
				document.getElementsByClassName("next")[0].style.visibility = "visible";
				// document.getElementsByClassName("prev")[0].style.visibility = "hidden";
				document.getElementsByClassName("prev")[0].setAttribute('style', 'visibility:hidden !important;');
			} else if (slideIndex == 1) {
				document.getElementsByClassName("next")[0].style.visibility = "hidden";
				document.getElementsByClassName("prev")[0].style.visibility = "hidden";
			}
			// also the dot for the results slide should be hidden
			//document.getElementsByClassName("dot")[8].style.visibility = "hidden";
		}
	}

	// Show footer only on last slide
	if (slideIndex == 9) {
		document.getElementsByClassName("footer")[0].style.display = "block";
	} else {
		document.getElementsByClassName("footer")[0].style.display = "none";
	}

}

// Mobile menu
function showMenu() {
	var x = document.getElementById("myLinks");
	if (x.style.display == "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function dismissWarning() {
	document.getElementById("popupp").style.visibility = "hidden";
	localStorage.setItem('visited', true);
}