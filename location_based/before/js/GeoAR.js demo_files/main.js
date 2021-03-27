var lan="en";

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
}
function hideOverlay(){
	$("#overlay").css("display", "none");
}


$("#en").click(function(){
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