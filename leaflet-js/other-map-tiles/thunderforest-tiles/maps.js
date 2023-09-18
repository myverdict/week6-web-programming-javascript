/* File used with mn_zoo.html */
// This file uses Thunderforest map tiles - atlas clear map style

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
  "https://tile.thunderforest.com/atlas/{z}/{x}/{y}{r}.png?apikey=e42d0912b78042d4ac5a38d0d40ed3a9";

// add the tile layer to the map
L.tileLayer(tileURL, {
  maxZoom: 18,
}).addTo(mymap);

// Add a circle approximately around the Twin Cities metro
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
  color: "salmon",
  fillOpacity: 0.2, // 1 will show an opaque circle
  radius: 25000, // in meters
}).bindPopup("Twin Cities Metro")
  .addTo(mymap);

// Adding markers & popup to markers on maps
let mnZooCoordinates = [44.7674, -93.1958]; // Minnesota Zoo coordinates
let mcZooPopupText = `<a href="https://mnzoo.org/" target="_blank"><b>Minnesota Zoo<b></a>`;
let mnZooMarker = L.marker(mnZooCoordinates)
  .bindPopup(mcZooPopupText)
  .addTo(mymap);
