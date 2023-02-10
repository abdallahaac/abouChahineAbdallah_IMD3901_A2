AFRAME.registerComponent("animate-ducks", {
	init: function () {
		let duck = this.el;
		duck.addEventListener("animationcomplete__2", function () {
			console.log(
				`Final position: x:${duck.object3D.position.x} y:${duck.object3D.position.y} z:${duck.object3D.position.z}`
			);

			if (duck.object3D.position.x == -6.107) {
				duck.remove();
				let entity = document.createElement("a-entity");

				// let the new generated ducks be spawn within the pool
				// not all spawining in the same space
				// generate random values for x and z
				// return Math.random() * (max - min) + min;
				let x = Math.random() * (1.467 - 0.754) + 0.754;
				let z = Math.random() * (-2 - -0.5) + 0.5;

				console.log("x: " + x + " y: " + z);

				// set component values
				entity.setAttribute("position", { x: x - 0.8, y: 0.116, z: z - 1.3 });
				entity.setAttribute("rotation", { x: -180.0, y: 31.355, z: -180.0 });
				entity.setAttribute("scale", { x: 0.2, y: 0.2, z: 0.2 });

				// add GLB model to the entity
				entity.setAttribute("gltf-model", "#duck");
				entity.setAttribute("id", "new_rubber_duck");
				console.log(entity);
				document.querySelector("a-scene").appendChild(entity);
			}
		});
		duck.setAttribute("sound", "src:#quacking; on:click");

		duck.setAttribute(
			"animation__1",
			"property:position;dur:2000; from: 0.932 -5.108 2.525; to: 0.932 -0.03 11.458;easing:easeInOutCubic; startEvents:click;"
		);
		duck.setAttribute(
			"animation__2",
			"property:position;dur:2000; from: 0.932 -0.03 11.458;; to: -6.107 -4.786 21.280; easing:easeInOutCubic; startEvents:animationcomplete__1;"
		);
	},
});
