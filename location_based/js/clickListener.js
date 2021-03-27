class clickListener{
	constructor(){
		console.log("Constructed");
		this.i=0;
	}

	actionn(){
		alert("coucou");
	}

	action(ev, aEntity){
		if(typeof(ev.detail.intersectedEl) != "undefined" && ev.detail.intersectedEl == aEntity){
			alert("Test passed!");
			this.i++;
			if (this.i%2==0){
				alert("clicked !");
			}
		}
	}			
}