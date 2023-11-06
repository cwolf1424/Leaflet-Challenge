# Leaflet-Challenge
Challenge assignment for Leaflet

Data for this project was from the following source:

    https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

Specifically using this subset of data:

    https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

Layout for assignment html came from starter file.

Specific sections directly using sources listed below:

--------------------------------------------------
Setup 
--------------------------------------------------

The Following HTML was provided in starter files:

    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Leaflet Step-1</title>

    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin="" />

    <!-- Our CSS -->
    <link rel="stylesheet" type="text/css" href="static/css/style.css">
    </head>

    <body>

    <!-- The div that holds our map -->
    <div id="map"></div>

    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""></script>
    <!-- D3 JavaScript -->
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <!-- Our JavaScript -->
    <script type="text/javascript" src="static/js/logic.js"></script>
    </body>

    </html>

The following CSS code was also provided:

    body {
    padding: 0;
    margin: 0;
    }

    #map,
    body,
    html {
    height: 100%;
    }

The following CSS code:

    h1 {
    text-align: center;
    }

Was from WK15 Day 1 In-Class Activity 7

The leaflet plugin used for legends was from:

    https://github.com/ptma/Leaflet.Legend

--------------------------------------------------
logic.js file
--------------------------------------------------

Coordinates for KCC from:

    https://www.latlong.net/place/kansas-city-ks-usa-27933.html#:~:text=Satellite%20Map%20of%20Kansas%20City%2C%20KS%2C%20USA&text=The%20latitude%20of%20Kansas%20City,%C2%B0%2040'%2035.0112''%20W.

The following section:

    pointToLayer: function (feature,latlng) {...}
        ...

used the method from here:

    https://leafletjs.com/examples/geojson/

    L.geoJSON(someGeojsonFeature, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    })

