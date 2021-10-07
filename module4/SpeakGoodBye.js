// STEP 6
(function (window) {

	var speakWord = "Good Bye";

	// STEP 7 
	var byeSpeaker = {};

	// STEP 8
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

	// STEP 9
	window.byeSpeaker = byeSpeaker;

})(window);