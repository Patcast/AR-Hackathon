window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                lat: 50.568683, 
                lng: 4.002001,
            },
        },
    ];
}

var models = [
    
    {
        url: './assets/medieval_man/scene.gltf',
        scale: '1 1 1',
        rotation: '0 180 0',
        id:'medieveal_man',
        info: 'medival man, Lv. 80, HP 100/100',
    },
    {
        url: './assets/queen/scene.gltf',
        scale: '1 1 1',
        id:'queen',
        info: 'queen, Lv. 5, HP 10/10',
        rotation: '0 180 0',
    }
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    // test using one place
    places = [places[0]]
    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        model.setAttribute('taphandler', '')
        model.setAttribute('cursor', 'rayOrigin: mouse')
        model.setAttribute('id', 'tappable-obj')  // TODO: create custom id per object
        model.setAttribute('emitevents', 'true')

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}