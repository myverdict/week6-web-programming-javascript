// This file is used with planets.html

// https://www.openplanetary.org/opm/basemaps

// this will tell leaflet where to draw the map
// NOTE: for the div id 'college-mapid', no # is required

// Create the map for the div element with ID mars-mapid
let marsMap = L.map('mars-mapid')

// The valid zoom levels are a smaller range than for Earth
marsMap.setView([0, 0], 3)   

// Add the tile layer - rocks, craters, labels etc. Without this, nothing to see
L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png')
    .addTo(marsMap)
    .setZIndex(0)


// Create the map for the div element with ID moon-mapid
let moonMap = L.map('moon-mapid')

// The valid zoom levels are a smaller range than for Earth
moonMap.setView([0, 0], 3)

// Add the tile layer - rocks, craters, labels etc. Without this, nothing to see
let baselayer = new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png')
    .addTo(moonMap)
    .setZIndex(0);
