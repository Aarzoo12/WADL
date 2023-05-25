document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Create user object
    var user = {
      name: name,
      email: email,
      username: username,
      password: password
    };
  
    // Send user registration data to server using AJAX POST method
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "registration.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Redirect to data list page
          window.location.href = "data-list.html";
        } else {
          alert("Registration failed. Please try again.");
        }
      }
    };
    xhr.send(JSON.stringify(user));
  });
  