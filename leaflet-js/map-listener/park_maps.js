// This file is used with park_map.html file

// An array of [latitude (north-south), longitude (east-west)] 
// Tweak the coordinates to center the map properly. 
let theodoreWirthParkCoordinates = [44.988406, -93.324333]

// set up the zoom level --> 1 = whole world, 10 = large city, 20 = city blocks
let zoomLevel = 13

// Create the map: this will tell leaflet where to draw the map
// NOTE: for the div id 'park-mapid', no # is required
let mymap = L.map('park-mapid').setView(theodoreWirthParkCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// add a marker and a popup to the marker on the map
let wirthMarker = L.marker(theodoreWirthParkCoordinates)
    .bindPopup('Theodore Wirth Park, Minneapolis')
    .addTo(mymap)


// Event Listener 1: Add a 'click' event listener to the marker.
// METHOD 1: with .on()
// Needs a callback function, similar to adding listeners to HTML elements
wirthMarker.on('click', function() {
    alert("That's the marker for Theodore Wirth Park")
})

// METHOD 2: with .addEventListener()
// wirthMarker.addEventListener('click', function() {
//     alert("That's the marker for Theodore Wirth Park")
// })


// Event Listener 2: Add a 'dblclick' event listener to the whole map.
// Various other listeners can be added to other leaflet components,
// for example a double-click listener for the whole map. 
// Leaflet API reference --> Map --> Options --> Interaction Options --> doubleClickZoom

// optional, but by default, double-clicking on a map will zoom in. 
// And, the code in the dblclick event listener function will run,
// and you may not want both to happen.
mymap.doubleClickZoom.disable()  

mymap.on('dblclick', function() {
    alert("Here's a map of Minneapolis")
})


// Leaflet reference on DOM events https://leafletjs.com/reference-1.7.1.html#domevent
