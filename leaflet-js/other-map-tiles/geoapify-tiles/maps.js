/* File used with mall_of_america.html */
// This file uses Geoapify map tiles

// An array of [latitude (north-south), longitude (east-west)]
// Tweak the coordinates to center the map properly.
let metroAreaCenterCoordinates = [44.96, -93.2];

// set up the zoom level --> 1 = whole world, 10 = large city, 20 = city blocks
let zoomLevel = 10;

// create the map: this will tell leaflet where to draw the map
// initialize the map on the "mapid" div with a given center and zoom
// NOTE: for the div id 'mapid', no # is required
let mymap = L.map("mapid").setView(metroAreaCenterCoordinates, zoomLevel);

// Create a new tile layer - roads, streets, etc. Without this, nothing to see
// tile is the actual map background showing roads, buildings, rivers, etc.
// get a thunderforest access token to create tiles for the 'atlas' map style
let tileURL =
  "https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?&apiKey=05a81b1343794121b5900158c1f53d86";

// add the tile layer to the map
L.tileLayer(tileURL, {
  attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
  maxZoom: 20,
  id: "carto",
}).addTo(mymap);

// Add a circle approximately around the Twin Cities metro
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
  color: "salmon",
  fillOpacity: 0.2, // 1 will show an opaque circle
  radius: 25000, // in meters
}).bindPopup("Twin Cities Metro")
  .addTo(mymap);

// Adding markers & popup to markers on maps
let mallCoordinates = [44.8551, -93.242]; // Mall of America, MN coordinates
let mallMarker = L.marker(mallCoordinates)
  .bindPopup(`Mall of America`)
  .addTo(mymap);
