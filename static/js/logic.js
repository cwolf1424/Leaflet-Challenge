//Set URL
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

d3.json(url).then(function(data){
    createMarkers(data.features)
});

//Create Markers for earthquakes
function createMarkers (earthquakeData){
    let earthquakeMarkers = []
    buildMap(earthquakeMarkers)
};

//Create Map for earthquakes
function buildMap(earthquakeMarkers) {
    //Set tile layer variables
    let streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});

    let topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        });

    //Set basemaps
    let baseMaps = {
        "Street Map": streetMap,
        "Topographical Map": topoMap
    };

    //Set map at default view around KCK
    let myMap = L.map("map", {
        center: [39.106667,-94.676392],
        zoom: 5,
        layers: [streetMap]
    });

    //Set Control Layer
    L.control.layers(baseMaps).addTo(myMap);

    //Set circle around KCK 
    let circle = L.circle(

        [39.106667,-94.676392],
        {radius: 100000,
        color: "black",
        fillColor: "white",
        weight:0.5,
        fillOpacity: .75

    }).addTo(myMap)
}   