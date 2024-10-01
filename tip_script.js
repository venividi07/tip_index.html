// Targeting elements
const billAmountInput = document.querySelector('.input-amount'); // Selecting bill input field
const percentButtons = document.querySelectorAll('.percentInput'); // Selecting all tip percentage buttons
const peopleInput = document.querySelector('#people'); // Selecting people input field
const resetButton = document.querySelector('#reset-btn'); // Selecting reset button
const tipAmountDisplay = document.querySelectorAll('.tip')[0]; // Displaying tip amount per person
const totalDisplay = document.querySelectorAll('.total')[0]; // Displaying total amount per person


// Add event listeners to each tip percentage button
percentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tipPercentage = parseFloat(button.textContent.replace('%', '')); // Remove % symbol before parsing
        calculateTip(tipPercentage); // Call function to calculate the tip
      });
});

// Function to calculate and display the tip amount and total per person
function calculateTip(tipPercentage) {
    
    const billAmount = parseFloat(billAmountInput.value);
      const numberOfPeople = parseInt(peopleInput.value);

      console.log(billAmount, numberOfPeople, tipPercentage); // Debugging log
      if (isNaN(billAmount) || isNaN(numberOfPeople) || isNaN(tipPercentage)) {
        tipAmountDisplay.textContent = "Please enter valid numbers.";
        totalDisplay.textContent = "";
      } else if (billAmount > 0 && numberOfPeople > 0 && tipPercentage >= 0) {
        const tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
        const totalAmount = (billAmount / numberOfPeople) + tipAmount;

        // Display results
        tipAmountDisplay.textContent = tipAmount.toFixed(2);
        totalDisplay.textContent = totalAmount.toFixed(2);
      } else {
        tipAmountDisplay.textContent = "Please enter positive values for bill amount and number of people.";
        totalDisplay.textContent = "";
      }
}

// Event listener to validate the bill amount input on 'Enter' key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if 'Enter' is pressed
        event.preventDefault(); // Prevent any default action (e.g., form submission)
        inputValueCheck(billAmountInput); // Call the function to check input
        console.log('Enter key pressed, validation function called.');
    }
});


// Reset button functionality
resetButton.addEventListener('click', () => {
    // Clear input fields
    billAmountInput.value = '';
    peopleInput.value = '';
    // Reset displayed values
    tipAmountDisplay.textContent = '0';
    totalDisplay.textContent = '0';
    // Clear error messages and reset styles
    span.textContent = '';
    billAmountInput.style.border = 'solid 2px transparent';
});