/* jshint browser: true */

document.addEventListener("DOMContentLoaded", function () {
	window.setInterval(tick, 1000);
	window.setTimeout(tick, 0);

	function tick() {
		var now = new Date(),
			hours = now.getHours(),
			minutes = now.getMinutes(),
			seconds = now.getSeconds(),
			background = {
				r: Math.floor(255 / 23 * hours),
				g: Math.floor(255 / 59 * minutes),
				b: Math.floor(255 / 59 * seconds)
			},
			hBackground = colorToHex(background),
			hForeground = getLuminance(background) > 200 ? "#000000" : "#FFFFFF",
			nClock = document.getElementById("clock"),
			nHex = document.getElementById("hex"),
			nBody = document.body;

		nBody.style.background = hBackground;
		nClock.innerHTML = numberFormat(hours) + " : " + numberFormat(minutes) + " : " + numberFormat(seconds);
		nClock.style.color = hForeground;
		nHex.innerHTML = hBackground;
		nHex.style.color = hForeground;
	}

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
