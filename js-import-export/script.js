// data is imported from data.js file
import { data } from './data.js'

// find the div id example-data from the index.html file
let exampleDataElement = document.querySelector('#example-data')

data.forEach(function(entry) {
    // create a new para element
    let p = document.createElement('p')

    // 'example' property is from data.js
    p.innerHTML = entry.example

    // append the para element to the div element
    exampleDataElement.appendChild(p)
})