/* jshint browser: true */

window.addEventListener("load", function () {
	window.setInterval(function () {
		document.body.style.transition = "all 0.8s";
		document.body.style.webkitTransition = "all 0.8s";
		var d = new Date();
		var hours = d.getHours();
		var mins = d.getMinutes();
		var secs = d.getSeconds();
		var red = ("0" + Math.round(255 / 23 * hours).toString(16)).slice(-2);
		var green = ("0" + Math.round(255 / 59 * mins).toString(16)).slice(-2);
		var blue = ("0" + Math.round(255 / 59 * secs).toString(16)).slice(-2);

		hours = ("0" + hours).slice(-2);
		mins = ("0" + mins).slice(-2);
		secs = ("0" + secs).slice(-2);

		var hex = "#" + red + green + blue;

		document.getElementById("clock").innerHTML = hours + " : " + mins + " : " + secs;
		document.getElementById("hex").innerHTML = hex;

		document.body.style.background = hex;
	}, 1000);
});