/* jshint browser: true */

document.addEventListener("DOMContentLoaded", function () {
	var target = new Date(),
		hash = window.location.hash.substr(1),
		now = new Date();

	if (hash) {
		dateFromHash(target, hash);
	} else {
		target.setHours(17);
		target.setMinutes(0);
		target.setSeconds(0);
	}

	if (now - target > 3600000) {
		target.setDate(target.getDate() + 1);
	}

	window.setInterval(tick, 1000);
	window.setTimeout(tick, 0);

	function tick() {
		var now = new Date(),
			diff = timeDiff(now, target),
			background = {
				r: Math.floor(256 / 24 * diff.hours),
				g: Math.floor(256 / 60 * diff.minutes),
				b: Math.floor(256 / 60 * diff.seconds)
			},
			hBackground = colorToHex(background),
			hForeground = getLuminance(background) > 200 ? "#000000" : "#FFFFFF",
			nClock = document.getElementById("clock"),
			nHex = document.getElementById("hex"),
			nBody = document.body;

		nBody.style.background = hBackground;
		nClock.innerHTML = numberFormat(diff.hours) + " : " + numberFormat(diff.minutes) + " : " + numberFormat(diff.seconds);
		nClock.style.color = hForeground;
		nHex.innerHTML = hBackground;
		nHex.style.color = hForeground;

		if (now - target > 3600000) {
			target.setDate(target.getDate() + 1);
		}
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

	function timeDiff(t1, t2) {
		var seconds = Math.floor((t2 - t1) / 1000),
			minutes,
			hours;

		if (seconds <= 0) {
			seconds = 0;
			minutes = 0;
			hours = 0;
		} else {
			hours = Math.floor(seconds / 3600);
			seconds -= hours * 3600;

			minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60;
		}

		return { hours: hours, minutes: minutes, seconds: seconds };
	}

	function dateFromHash(date, hash) {
		var hours = hash.substr(0, hash.indexOf(":")),
			minutes = hash.substr(hash.indexOf(":") + 1);

		date.setHours(hours);
		date.setMinutes(minutes);
		date.setSeconds(0);
	}
});
