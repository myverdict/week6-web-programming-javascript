// This file is used with expenses.html file

/* Find the input elements & the button on the document page */
let expenseNameInput = document.querySelector("#expense-name");
let expenseAmountInput = document.querySelector("#expense-amount");
let addExpenseButton = document.querySelector("#add-expense-btnID");

/* Find the chart canvas element */
let chartCanvas = document.querySelector("#expenses-doughnut-chart");

// create a drawing context that does the drawing on the canvas
let context = chartCanvas.getContext("2d");

// TODO create chart object
let expenseChart = new Chart(context, {
  type: "doughnut", // type of chart
  data: {
    // what does each item in the chart represent
    labels: [],
    datasets: [
      {
        // label name for the chart
        label: "Expense chart",
        data: [],
        backgroundColor: [],
      },
    ],
  },
  options: {},
});

// TODO (optional) replace with colors of your choice.
// The array can have as many or as few colors as you like
let chartColors = [
  "tomato",
  "orange",
  "dodgerblue",
  "mediumseagreen",
  "slateblue",
  "violet",
];

/**
  Adds the expense type, amount, & color to 'labels', 'data', & 'backgroundColor' arrays in the chart object.
  @param {string} name Expense type, for e.g., coffee, rent, food, etc.
  @param {number} amount Money spent for each expense item
*/
function addExpenseToChart(name, amount) {
  // TODO add expense to chart
  expenseChart.data.labels.push(name);
  expenseChart.data.datasets[0].data.push(amount);

  // initial colorCount will begin at 0
  let colorCount = expenseChart.data.datasets[0].backgroundColor.length;

  // this will always return a valid color from the chartColors array
  let bgColor = chartColors[colorCount % chartColors.length];

  // push the colors onto the chart backgroundColor array
  expenseChart.data.datasets[0].backgroundColor.push(bgColor);

  expenseChart.update();
}

addExpenseButton.addEventListener("click", function () {
  // array of errors for validation
  let errors = [];

  // get the input values for the expense name and the amount
  let expenseName = expenseNameInput.value.trim();
  let expenseAmount = expenseAmountInput.value;

  // Validate both fields are filled in
  if (expenseName.length == 0) {
    errors.push("Enter a type of expense");
    expenseNameInput.value = "";
  }

  // Validate that the amount is a positive number
  if (expenseAmount.length == 0 || expenseAmountInput < 0) {
    errors.push("Enter a positive amount for the expense");
  }

  // If any errors exist, alert and return - do not procede to add to chart
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return; // stop processing
  }

  // TODO call function to update chart
  addExpenseToChart(expenseName, expenseAmount);

  // Clear inputs, ready for next expense name and amount.
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
});

// TODO add event listener to click the Add Expense button when the enter key is pressed
window.addEventListener("keyup", function (event) {
  // Check if enter key is pressed, which has keyCode 13
  if (event.key === "Enter") {
    // And if the focus is on one of the inputs, then click the addExpenseButton
    let inputElements = [
      expenseNameInput,
      expenseAmountInput,
      addExpenseButton,
    ];

    if (inputElements.includes(document.activeElement)) {
      addExpenseButton.click(); // click button
      expenseNameInput.focus(); // move focus to expense name input, for convenience of entering new expense
    }
  }
});
