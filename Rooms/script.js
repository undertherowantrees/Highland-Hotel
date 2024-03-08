// Get the form element
const form = document.querySelector('#booking_form1');

// Add event listener to the submit button
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get all input fields
  const inputs = form.querySelectorAll('input');

  // Check if all fields are complete
  let isComplete = true;
  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      isComplete = false;
      return;
    }
  });

  // Display appropriate message
  if (isComplete) {
    showMessage('Success! Check your emails for confirmation.');
  } else {
    showMessage('Error! Please complete all fields.');
  }
  setTimeout(() => msg.remove(), 1000);
});

// Function to display message
function showMessage(message) {
  const messageElement = document.querySelector('.msg');
  messageElement.textContent = message;
}