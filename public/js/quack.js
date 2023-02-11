AFRAME.registerComponent("quack", {
	init: function () {
		let duck = this.el;
		duck.setAttribute("sound", "src:#quack; on:click");
	},
});
