AFRAME.registerComponent("add-model", {
	init: function () {
		let sceneEl = this.el;

		sceneEl.addEventListener("click", function () {
			let numOfDucksBeforeEvent = document.querySelectorAll("#rubber_duck");

			// only add a new duck if there is less than 2 ducks in the scene
			// 2 because there is the big rubber duck in pool with the same id
			if (numOfDucksBeforeEvent.length < 2) {
				// create a new entity
				let entity = document.createElement("a-entity");

				// set component values
				entity.setAttribute("position", { x: 0.932, y: -5.108, z: 2.525 });
				entity.setAttribute("rotation", { x: -180.0, y: 31.355, z: -180.0 });
				entity.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });

				// add GLB model to the entity
				entity.setAttribute("gltf-model", "#duck");
				entity.setAttribute("id", "rubber_duck");
				entity.setAttribute("grab-ducks", "");
				entity.setAttribute("check-entity", "");

				// add the entity to the scene
				sceneEl.appendChild(entity);
				let numOfDucksAfterEvent = document.createElement("a-entity");
				// dynamic-body="grabbable: true"

				console.log(entity);
				numOfDucksBeforeEvent = numOfDucksAfterEvent;
			}
		});
	},
});
