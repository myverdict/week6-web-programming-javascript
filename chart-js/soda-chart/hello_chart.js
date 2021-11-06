// Used with hello_chart.html file

// find the canvas element in the document
let canvas = document.querySelector('#soda-chartID');

// create a drawing context that does the drawing on the canvas
let context = canvas.getContext('2d');

// create a vertical bar chart object
let sodaChart = new Chart(context, {
    type: 'bar',        // type of chart
    data: {
        // what does each bar in the chart represent
        labels: [ 'Coke', 'Pepsi', 'Sprite', 'Either', 'Neither' ],
        datasets: [{
            // label name for the chart
            label: 'Number of votes',
            // this is the chart data
            data: [18, 14, 10, 7, 10],
            // color for each bar in the chart
            backgroundColor: ['lightgreen', 'salmon', 'gray', 'yellow', 'lightblue'],
            borderColor: ['darkgreen', 'red', 'black', 'yellowgreen', 'darkblue'],
            borderWidth: 2,
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    },
})