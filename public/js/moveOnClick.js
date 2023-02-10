AFRAME.registerComponent("move-on-click", {
	init: function () {
		let scene = this.el;
		let player = document.getElementById("player");

		scene.addEventListener("click", () => {
			if (!player.getAttribute("wasd-controls")) {
				player.setAttribute("wasd-controls", "");
				console.log(player);
			}
		});
	},
});
