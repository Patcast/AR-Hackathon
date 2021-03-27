var lan="en";

const texts = {
	'language' :{
		'en':'Language',
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
	$("#languageS").css('display', 'block');
}

function showOverlay(){
	$("#overlay").css("display", "inline-block");
	$(".tempOverlay").css("display", "inline-block");
}
function hideOverlay(){
	$("#overlay").css("display", "none");
	$(".tempOverlay").css("display", "none");
}


$("#nxt").click(()=>{
	var infoIndex = $("#nxt").data("infoId");
	var monument = monuments[$("#nxt").data("monIndex")];
	if(typeof(monument)=="undefined") return;
	var info = monument.info;
	var l = lan;
	if (! (lan in info))
		l = 'en';
	if(infoIndex < monument.info[l].length){
		$("#speech").html(monument.info[l][infoIndex]);
		infoIndex ++;
		$("#nxt").data("infoId", infoIndex);
	}
	else{
		$("#speechHolder").css("display", "none");
	}
});
$("#closeBtn").click(()=>{
	var monument = monuments[$("#nxt").data("monIndex")];
	var info = monument.info;
	var l = lan;
	if (! (lan in info))
		l = 'en';
	$("#nxt").data("infoId", monument.info[l].length);
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