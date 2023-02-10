AFRAME.registerComponent("move-on-click", {
	init: function () {
		let background = document.getElementById("background");

		let audio = document.querySelector("#button1");
		let playing = false;

		document.addEventListener("click", () => {
			background.remove();
			if (!playing) {
				audio.play();
			} else {
				audio.pause();
				audio.currentTime = 0;
			}
			playing = true;
		});
	},
});
