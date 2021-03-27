AFRAME.registerComponent('clicker', {

	init: function(){
		const clicker = document.querySelector("#clicker");

		clicker.addEventlistener('click', (ev, target)=>{
			console.log(ev);
			
		});
	}


});

// TODO: create handler per object (I think)
AFRAME.registerComponent('taphandler', {

    init: function() {
        const aEntity = document.querySelector("#tappable-obj");

        // every click, we make our model grow in size :)
        aEntity.addEventListener('click', function(ev, target){
			alert('click on entity');
			console.log(ev);
            alert(target);
            // const intersectedElement = ev?.detail?.intersectedEl;
			// console.log(intersectedElement);
            // if (intersectedElement === aEntity) {
            //     const scale = aEntity.getAttribute('scale');
            //     Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
            //     aEntity.setAttribute('scale', scale);
            // }
        });
}});