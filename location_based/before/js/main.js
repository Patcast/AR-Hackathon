var lan="en";
var obj=0;

const texts = {
	'language' :{
		'en':'Laguage',
		'nl':'Taal',
		'fr':'Langue',
		'es':'Idioma'
	},
	'next':{
		'en':'Next',
		'nl':'Volgende',
		'fr':'Suivant',
		'es':'Siguiente'
	}
}

function setLanguage(){
	$("#lSelector").text(texts.language[lan]);
	$("#nxt").text(texts.next[lan]);
}

function hideLan(){
	setLanguage();
	$("#languageS").css('display', 'none');
}
function showLan(){
	$("#languageS").css('display', 'inline-block');
}

function showOverlay(){
	$("#overlay").css("display", "inline-block");
	$("#temp-overlay").css("display", "inline-block");
}
function hideOverlay(){
	$("#overlay").css("display", "none");
	$("#temp-overlay").css("display", "none");
}


$("#nxt").click(()=>{
	var infoIndex = $("#nxt").data("infoId");
	var monument = monuments[$("#nxt").data("monIndex")];
	if(infoIndex < monument.info.length){
		$("#speech").text(monument.info[infoIndex]);
		infoIndex ++;
		$("#nxt").data("infoId", infoIndex);
	}
	else{
		$("#speechHolder").css("display", "none");
	}
});
$("#closeBtn").click(()=>{
	var monument = monuments[$("#nxt").data("monIndex")];
	$("#nxt").data("infoId", monument.info.length);
	$("#nxt").click();
});

$("#en").click(()=>{
	lan="en";
	hideLan();
	showOverlay();
});
$("#fr").click(()=>{
	lan="fr";
	hideLan();
	showOverlay();
});
$("#es").click(()=>{
	lan="es";
	hideLan();
	showOverlay();
});
$("#nl").click(()=>{
	lan="nl";
	hideLan();
	showOverlay();
});
$("#lSelector").click(()=>{
	hideOverlay();
	showLan();
});
$("#temp-overlay").click(()=>{
	if($("#speechHolder").css("display") == "none") {
		$("#nxt").data("monIndex", obj).data("infoId", 0).click();
		$("#speechHolder").css("display", "inline-block");
		obj++;
		if (obj >= monuments.length)
			obj = 0;
	}
});
