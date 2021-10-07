// STEP 2
(function (window) {

	var speakWord = "Hello";

	// STEP 3
	var helloSpeaker = {};

	// STEP 4
	helloSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

	// STEP 5:
	window.helloSpeaker = helloSpeaker;

})(window);