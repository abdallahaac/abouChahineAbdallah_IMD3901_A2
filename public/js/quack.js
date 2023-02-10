AFRAME.registerComponent("quack", {
	init: function () {
		let duck = this.el;
		let audio = document.querySelector("#button1");
		duck.setAttribute("sound", "src:#quack; on:click");
	},
});
