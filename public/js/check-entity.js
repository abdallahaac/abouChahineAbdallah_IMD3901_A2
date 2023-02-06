AFRAME.registerComponent("check-entity", {
	init: function () {
		var entity = this.el;

		if (
			entity.getAttribute("position") === "-6.107 -4.786 21.280" &&
			entity.getAttribute("id") === "rubber_duck"
		) {
			console.log("working");

			entity.parentNode.removeChild(entity);
			var newEntity = document.createElement("a-entity");
			newEntity.setAttribute("position", "-6.107 -4.786 21.280");
			newEntity.setAttribute("id", "new_duck");
			newEntity.setAttribute("gltf-model", "#duck");
			document.querySelector("a-scene").appendChild(newEntity);
			console.log(newEntity);
		}
	},
});
