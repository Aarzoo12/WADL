// Function to validate user login
function validateLogin() {
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if username and password are not empty
    if (username.trim() === "" || password === "") {
      alert("Please enter both username and password.");
      return false;
    }
  
    // Perform additional validation if needed
    // For example, checking the length of the password or any other specific requirements
  
    // If all validations pass, return true to submit the form
    return true;
  }
  