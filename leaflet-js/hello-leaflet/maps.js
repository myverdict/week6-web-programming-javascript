/* File used with hello_leaflet_maps.html */

// https://www.mngeo.state.mn.us/chouse/coordinates.html
// coordinates for the twin cities metropolitan area --> [44.945, -93.37]
// An array of [latitude (north-south), longitude (east-west)]
// Tweak the coordinates to center the map properly.
let metroAreaCenterCoordinates = [44.96, -93.2];

// set up the zoom level --> 1 = whole world, 10 = large city, 20 = city blocks
let zoomLevel = 10;

// create the map: this will tell leaflet where to draw the map
// NOTE: for the div id 'college-mapid', no # is required
let mymap = L.map("college-mapid").setView(
  metroAreaCenterCoordinates,
  zoomLevel
);

// Add the tile layer - roads, streets, etc. Without this, nothing to see
// tile is the actual map background showing roads, buildings, rivers, etc.
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

// Add a circle approximately around the Twin Cities metro
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
  color: "salmon",
  fillOpacity: 0.2, // 1 will show an opaque circle
  radius: 25000, // in meters
}).bindPopup("Twin Cities Metro")
  .addTo(mymap);

// google search for coordinates

// METHOD I: Adding only markers
// let mctcCoordinates = [44.9729, -93.2833]; // Minneapolis College coordinates
// let mctcMarker = L.marker(mctcCoordinates).addTo(mymap);

// let spcCoordinates = [44.9491, -93.1113]; // Saint Paul College coordinates
// let spcMarker = L.marker(spcCoordinates).addTo(mymap);

// let nccCoordinates = [44.8297, -93.3313]; // Normandale Community College coordinates
// let nccMarker = L.marker(nccCoordinates).addTo(mymap);

// METHOD II: Adding popup to markers using .bindPopup - the popup will show when the marker is clicked
let mctcCoordinates = [44.9729, -93.2833]; // Minneapolis College coordinates
let mctcPopupText = '<b>Minneapolis College</b><br><a href="https://minneapolis.edu/" target="_blank">Website</a>';
let mctcMarker = L.marker(mctcCoordinates).bindPopup(mctcPopupText).addTo(mymap);

let spcCoordinates = [44.9491, -93.1113]; // Saint Paul College coordinates
let spcPopupText = '<b>Saint Paul College</b><br><a href="https://www.saintpaul.edu/" target="_blank">Website</a>';
let spcMarker = L.marker(spcCoordinates).bindPopup(spcPopupText).addTo(mymap);

let nccCoordinates = [44.8297, -93.3313]; // Normandale Community College coordinates
let nccPopupText = '<b>Normandale Community College</b><br><a href="https://www.normandale.edu/" target="_blank">Website</a>';
let nccMarker = L.marker(nccCoordinates).bindPopup(nccPopupText).addTo(mymap);
