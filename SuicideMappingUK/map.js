var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    mbAT = 'pk.eyJ1IjoidG1hZGV2IiwiYSI6ImNrY3hjbjd0bTBtczczMHF1OGgyZDhxNmYifQ._CF-iwVk8A0wiLXDYn1qQw'

window.onload = function(){
    /*
    var map = L.map('idMap', {
        center: [54.75, -5],
        zoomSnap: 0.1,
        zoom: 6.7,
    });

    L.tileLayer(mbUrl, {
        attribution: mbAttr,
        tileSize: 512,
        zoomOffset: -1,
        accessToken: mbAT,
    }).addTo(map);
    
    L.geoJSON(la).addTo(map);
    */

var map = L.map('idMap', {
    center: [54.75, -5],
    zoomSnap: 0.1,
    zoom: 6.7,
});

var grayscale = L.tileLayer(mbUrl, {id: 'idMap', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
streets = L.tileLayer(mbUrl, {id: 'idMap', tileSize: 512, zoomOffset: -1, attribtuion: mapboxAttribution});

var baseMaps = {
"Streets": streets,
"Satellite": satellite
};

var overlayMaps = {
"Cities": cities
};

L.control.layers(baseMaps, overlayMaps).addTo(map);


 
};

    
