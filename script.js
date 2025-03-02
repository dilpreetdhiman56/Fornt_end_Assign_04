// Helper functions for validation
function isNotEmpty(value) {
    return value.trim() !== '';
  }
  
  function isValidEmail(value) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  }
  
  function hasCheckedOption(options) {
    return options.some(option => option.checked);
  }
  
  function isSelected(value) {
    return value !== '';
  }
  
  // Function to show error messages
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId + 'Error');
    errorElement.textContent = message;
  }
  
  function clearError(elementId) {
    const errorElement = document.getElementById(elementId + 'Error');
    errorElement.textContent = '';
  }
  
  // Validation function for the form
  function validateForm(event) {
    let isValid = true;
  
    // Validate Name (Text Field)
    const name = document.getElementById('name').value;
    if (!isNotEmpty(name)) {
      showError('name', 'Name cannot be empty.');
      isValid = false;
    } else {
      clearError('name');
    }
  
    // Validate Email (Email Field)
    const email = document.getElementById('email').value;
    if (!isNotEmpty(email)) {
      showError('email', 'Email cannot be empty.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError('email', 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError('email');
    }
  
    // Validate Birthdate (Date Field)
    const birthdate = document.getElementById('birthdate').value;
    if (!isNotEmpty(birthdate)) {
      showError('birthdate', 'Birthdate cannot be empty.');
      isValid = false;
    } else {
      clearError('birthdate');
    }
  
    // Validate Favorite Player (Radio Buttons)
    const playerOptions = document.getElementsByName('favoritePlayer');
    if (!hasCheckedOption(playerOptions)) {
      showError('favoritePlayer', 'Please select your favorite player.');
      isValid = false;
    } else {
      clearError('favoritePlayer');
    }
  
    // Validate Teammates (Checkboxes)
    const teammatesOptions = document.getElementsByName('teammates');
    if (!teammatesOptions.some(option => option.checked)) {
      showError('teammates', 'Please select at least one teammate.');
      isValid = false;
    } else {
      clearError('teammates');
    }
  
    // Validate Who is Better (Dropdown)
    const choice = document.getElementById('choice').value;
    if (!isSelected(choice)) {
      showError('choice', 'Please select who is better.');
      isValid = false;
    } else {
      clearError('choice');
    }
  
    // Validate Additional Comments (Textarea)
    const comments = document.getElementById('comments').value;
    if (!isNotEmpty(comments)) {
      showError('comments', 'Please provide your additional comments.');
      isValid = false;
    } else {
      clearError('comments');
    }
  
    // If form is not valid, prevent submission
    if (!isValid) {
      event.preventDefault();
    }
  }
  
  // Clear all error messages before submitting
  function clearErrors() {
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(error => error.textContent = '');
  }
  
  document.getElementById('footballSurvey').addEventListener('submit', function (event) {
    clearErrors();
    validateForm(event);
  });
  