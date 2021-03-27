const monuments=[
{
	url: "./assets/medieval_man/scene.gltf",
	scale: ".1 .1 .1",
	rotation: "0 180 0",
	position: '0 0 0',
	lat: 50.568683,
	lon: 4.002001,
	info:["Super info !"],
	index: 0
},
{
	url: "./assets/queen/scene.gltf",
	scale: "5 5 5",
	rotation: "0 180 0",
	position: '0 0 0',
	lat: 50.567972,
	lon:  4.002360,
	info:["Good afternoon traveler! My name is Maria of Brabant",
	"I lived here in Leuven about 800 years ago. ",
	"I was the Queen of France but before that I was imprisoned. Would you like to hear how did I do that? "],
	index:1
}];
var listeners=[];

$(document).ready(()=>{

    renderPlaces(monuments);
});

function randomString() {
    //define a variable consisting alphabets in small and capital letter
	var characters = "abcdefghiklmnopqrstuvwxyz";
	//specify the length for the new string
	var lenString = 15;
	var randomstring = '';
    //loop to select a new character in each iteration
	for (var i=0; i<lenString; i++) {
		var rnum = Math.floor(Math.random() * characters.length);
		randomstring += characters.substring(rnum, rnum+1);
	}
	//return the generated string 
	return randomstring;
}


// this function creates the event handler and binds it to its associated monument
function newTapHandler(tapHandler, id, monument){
	// tapHandler is the id of the tapHandler and id is the auto generated id
	AFRAME.registerComponent(tapHandler, {
		init: function(){

			//Setting the target to the desired monument
			const aEntity = document.querySelector("#"+id);

			aEntity.addEventListener('click',function(ev, target){
				listeners[monument.index].action(ev, aEntity);
			});
	}});
}

function generateObject(monument){
	let str1 = randomString();
	let str2 = randomString();
	let scene = document.querySelector('a-scene');

	let model = document.createElement('a-entity');
	model.setAttribute("gps-entity-place", "latitude:"+monument.lat+"; longitude:"+monument.lon+";");

	// Setting the required attributes
	model.setAttribute('cursor', 'rayOrigin: mouse');
	model.setAttribute('emitevents', 'true');
	model.setAttribute('scale', monument.scale);
	model.setAttribute('rotation', monument.rotation);
	model.setAttribute('position', monument.position);
	model.setAttribute('id', str1);
	model.setAttribute('animation-mixer', '');
	model.setAttribute(str2, '');
	model.setAttribute("gltf-model", monument.url);
	// setting a monument-specific listenner
	listeners[monument.index] = new clickListener(monument);

	scene.appendChild(model);
	
	newTapHandler(str2, str1, monument);

}

function renderPlaces(places){
	places.forEach(place=>{generateObject(place)});
}