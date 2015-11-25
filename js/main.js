/* jshint browser: true */

document.addEventListener("DOMContentLoaded", function () {
	window.setInterval(function () {
		var now = new Date(),
			hours = now.getHours(),
			minutes = now.getMinutes(),
			seconds = now.getSeconds(),
			background = {
				r: Math.floor(256 / 24 * hours),
				g: Math.floor(256 / 60 * minutes),
				b: Math.floor(256 / 60 * seconds)
			},
			hBackground = colorToHex(background),
			hForeground = getLuminance(background) > 125 ? "#000000" : "#FFFFFF",
			nClock = document.getElementById("clock"),
			nHex = document.getElementById("hex"),
			nBody = document.body;

		nBody.style.background = hBackground;
		nClock.innerHTML = numberFormat(hours) + " : " + numberFormat(minutes) + " : " + numberFormat(seconds);
		nClock.style.color = hForeground;
		nHex.innerHTML = hBackground;
		nHex.style.color = hForeground;
	}, 1000);

	function colorToHex(color) {
		return "#" + numToHex(color.r) + numToHex(color.g) + numToHex(color.b);
	}

	function numToHex(num) {
		return ("0" + num.toString(16)).slice(-2);
	}

	function getLuminance(color) {
		return 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
	}

	function numberFormat(num) {
		return ("0" + num).slice(-2);
	}
});
