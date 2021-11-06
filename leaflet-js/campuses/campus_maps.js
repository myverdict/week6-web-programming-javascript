/* File used with campuses.html */

// https://www.mngeo.state.mn.us/chouse/coordinates.html
// coordinates for the twin cities metropolitan area --> [44.945, -93.37]
// An array of [latitude (north-south), longitude (east-west)] 
// Tweak the coordinates to center the map properly.
let metroAreaCenterCoordinates = [44.96, -93.2]

// set up the zoom level --> 1 = whole world, 10 = large city, 20 = city blocks
let zoomLevel = 9

// create the map: this will tell leaflet where to draw the map
// NOTE: for the div id 'college-mapid', no # is required
let mymap = L.map('college-mapid').setView(metroAreaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets, etc. Without this, nothing to see
// get a mapbox access token to create tiles
// tile is the actual map background showing roads, buildings, rivers, etc.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibXl2ZXJkaWN0IiwiYSI6ImNrdjl5ZW8wc2E4MnkycW1hbGF5NDN3cWkifQ.mxbTPccScYKW8AfiQERtwg'
}).addTo(mymap);


// Add a circle approximately around the Twin Cities metro 
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'salmon',
    fillColor: 'green',         // optional
    fillOpacity: 0.2,           // 1 will show an opaque circle
    radius: 30000               // in meters
}).bindPopup('Twin Cities Metro').addTo(mymap)


// google search for coordinates
// An array of objects for MN Community colleges: keys not in quotes
let campuses = [
    { name: "Minneapolis College", website: "https://minneapolis.edu/", coordinates: [44.9729, -93.2833] },
    { name: "Saint Paul College", website: "https://www.saintpaul.edu/", coordinates: [44.9491, -93.1113] },
    { name: "Normandale Community College", website: "https://www.normandale.edu/", coordinates: [44.8297, -93.3313] },
    { name: "North Hennepin Community College", website: "https://www.nhcc.edu/", coordinates: [45.1054, -93.3746] },
    { name: "Century College", website: "https://www.century.edu/", coordinates: [45.0416, -92.9821] },
]

// using a loop to display markers & popups for markers for all colleges in array
campuses.forEach(function(campus) {
    let popupText = `<b>${campus.name}</b><br><a href="${campus.website}" target="_blank">Website</a>`
    
    let marker = L.marker(campus.coordinates)
        .bindPopup(popupText)
        .addTo(mymap)
})

