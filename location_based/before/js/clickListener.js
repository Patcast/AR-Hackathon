class clickListener{
	constructor(monument){
		console.log("Constructed");
		this.monument = monument;
		this.i=0;
	}

	action(ev, aEntity){
		// checks if the touch target corresponds to its supposed 3D model
		if(typeof(ev.detail.intersectedEl) != "undefined" && ev.detail.intersectedEl == aEntity){
			this.i++;
			// eliminates double calls (PROTOTYPING);
			if (this.i%2==0){
				$("#nxt").data("monIndex", this.monument.index).data("infoId", 0).click();
				$("speechHolder").css("display", "inline-block");
			}
		}
	}			
}