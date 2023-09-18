// This file is used with college_map.html file

// An array of [latitude (north-south), longitude (east-west)]
// Tweak the coordinates to center the map properly.
let metroAreaCenterCoordinates = [44.96, -93.2];

// set up the zoom level --> 1 = whole world, 10 = large city, 20 = city blocks
let zoomLevel = 9;

// Create the map: this will tell leaflet where to draw the map
// NOTE: for the div id 'college-mapid', no # is required
let mymap = L.map("college-mapid").setView(
  metroAreaCenterCoordinates,
  zoomLevel
);

// Add the tile layer - roads, streets, etc., to the maps. Without this, nothing to see
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

// create custom marker icons that will be used to replace default Leaflet markers
let purpleIcon = L.icon({
  iconUrl: "marker-icon-images/purple-marker.png",
  iconAnchor: [30, 30], // move the icon so the bottom of the pin is on top of the coordiates
  iconSize: [35, 35], // define size
  popupAnchor: [-15, -25], // where is the popup, relative to icon
});

let yellowIcon = L.icon({
  iconUrl: "marker-icon-images/yellow-marker.png",
  iconAnchor: [30, 30], // move the icon so the bottom of the pin is on top of the coordiates
  iconSize: [35, 35], // define size
  popupAnchor: [-15, -25], // where is the popup, relative to icon
});

// Add some markers & popup to markers to both colleges
let mctcCoordinates = [44.9729, -93.2833]; // Minneapolis college coordinates
let mctcPopupText = `<b>Minnepolis College</b><br><a href="https://minneapolis.edu" target="_blank">Website</a>`;
let mctcMarker = L.marker(mctcCoordinates, {
  icon: purpleIcon, // Set the marker's icon, replace the default
}).bindPopup(mctcPopupText)
  .addTo(mymap);

let spcCoordinates = [44.9491, -93.1113]; // Saint Paul college coordinates
let spcPopupText = `<b>Saint Paul College</b><br><a href="https://www.saintpaul.edu/" target="_blank">Website</a>`;
let spcMarker = L.marker(spcCoordinates, {
  icon: yellowIcon, // Set the marker's icon, replace the default
}).bindPopup(spcPopupText)
  .addTo(mymap);
