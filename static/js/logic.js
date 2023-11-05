//Set URL
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

d3.json(url).then(function(data){
    console.log (data)
});

//Set map at default view around KCK
let myMap = L.map("map").setView([39.106667, -94.676392], 5);

//Set tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
     {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);


//Set circle around KCK 
let circle = L.circle(
    
    [39.106667,-94.676392],
    
    {radius: 10000,
    color: "black",
    fillColor: "white",
    weight:0.5,
    fillOpacity: .75

}).addTo(myMap)
    