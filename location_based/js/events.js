AFRAME.registerComponent('clicker', {

	init: function(){
		const clicker = document.querySelector("#clicker");

		clicker.addEventlistener('click', (ev, target)=>{
			console.log(ev);
			
		});
	}


});