// This file is to be used for longest_bridge_chart.html file

// Find the canvas id reference and store in a variable
let canvas = document.querySelector("#bridge-chartID");

// Get the canvas context
let context = canvas.getContext("2d");

// An array of bridges objects
let bridges = [
  {
    name: "Verrazano-Narrows Bridge",
    cityState: "New York, NY",
    span: 1298.4,
    coordinates: [40.6066, -74.0447],
  },
  {
    name: "Golden Gate Bridge",
    cityState: "San Francisco & Marin, CA",
    span: 1280.2,
    coordinates: [37.8199, -122.4783],
  },
  {
    name: "Mackinac Bridge",
    cityState: "Mackinaw and St Ignace, MI",
    span: 1158.0,
    coordinates: [45.8174, -84.7278],
  },
  {
    name: "George Washington Bridge",
    cityState: "New York, NY & New Jersey, NJ",
    span: 1067.0,
    coordinates: [40.8517, -73.9527],
  },
  {
    name: "Tacoma Narrows Bridge",
    cityState: "Tacoma and Kitsap, WA",
    span: 853.44,
    coordinates: [47.269, -122.5517],
  },
];

// colors for bar background colors
let chartColors = [
  "tomato",
  "orange",
  "dodgerblue",
  "mediumseagreen",
  "violet",
];

// empty arrays used in chart objects
let bridgeNames = [];
let bridgeSpans = [];

// add bridge names and spans to the empty arrays above
bridges.forEach(function (bridge) {
  bridgeNames.push(bridge.name);
  bridgeSpans.push(bridge.span);
});

// create a horizontal bar chart object
let bridgeChart = new Chart(context, {
  type: "bar", // type of chart
  // this is an object
  data: {
    // what does each bar represent in the chart
    labels: bridgeNames, // an array of bridge names
    // this is an array of 1 object
    datasets: [
      {
        label: "Longest US Bridges (meters)", // label name for the chart
        data: bridgeSpans, // an array of lengths of bridges (should be a number)
        backgroundColor: chartColors, // an array of colors
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});
