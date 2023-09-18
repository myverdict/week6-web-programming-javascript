/* File used with longest_bridge.html */

// An array of [latitude (north-south), longitude (east-west)]
// Tweak the coordinates to center the map properly: [37.0902, -95.7129]
let usCenterCoordinates = [37.0902, -98.7129];

// set up the zoom level --> 1 = whole world, 10 = large city, 20 = city blocks
let zoomLevel = 3;

// create the map: this will tell leaflet where to draw the map
// NOTE: for the div id 'bridge-mapid', no # is required
let mymap = L.map("bridge-mapid").setView(usCenterCoordinates, zoomLevel);

// Add the tile layer - roads, streets, etc. Without this, nothing to see
// tile is the actual map background showing roads, buildings, rivers, etc.
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

// Add a circle approximately around US center
let usaCircle = L.circle(usCenterCoordinates, {
  color: "salmon",
  fillColor: "green", // optional
  fillOpacity: 0.2, // 1 will show an opaque circle
  radius: 2600000, // in meters
}).bindPopup("United States of America")
  .addTo(mymap);

// An array of objects bridges
let bridges = [
  {
    name: "Verrazano-Narrows Bridge",
    cityState: "New York, NY",
    span: "1298.4 m",
    coordinates: [40.6066, -74.0447],
  },
  {
    name: "Golden Gate Bridge",
    cityState: "San Francisco & Marin, CA",
    span: "1280.2 m",
    coordinates: [37.8199, -122.4783],
  },
  {
    name: "Mackinac Bridge",
    cityState: "Mackinaw and St Ignace, MI",
    span: "1158.0 m",
    coordinates: [45.8174, -84.7278],
  },
  {
    name: "George Washington Bridge",
    cityState: "New York, NY & New Jersey, NJ",
    span: "1067.0 m",
    coordinates: [40.8517, -73.9527],
  },
  {
    name: "Tacoma Narrows Bridge",
    cityState: "Tacoma and Kitsap, WA",
    span: "853.44 m",
    coordinates: [47.269, -122.5517],
  },
];

// Create a bridge icon: https://leafletjs.com/examples/custom-icons/
let bridgeIcon = L.icon({
  iconUrl: "bridge-icon.png",

  iconSize: [40, 40], // size of the icon
  iconAnchor: [22, 22], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -20], // point from which the popup should open relative to the iconAnchor
});

// using a loop to display markers & popups for markers for all colleges in array
bridges.forEach(function (bridge) {
  let popupText = `<b>${bridge.name}</b>: ${bridge.span}`;

  // add the bridge icon marker to the map
  let marker = L.marker(bridge.coordinates, {
    icon: bridgeIcon,
  }).bindPopup(popupText)
    .addTo(mymap);
});
