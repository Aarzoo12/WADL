window.addEventListener("DOMContentLoaded", function() {
    // Fetch user data from server using AJAX GET method
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "users.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var userList = JSON.parse(xhr.responseText);
        displayUserList(userList);
      }
    };
    xhr.send();
  });
  
  function displayUserList(userList) {
    var ul = document.getElementById("userList");
    userList.forEach(function(user) {
      var li = document.createElement("li");
      li.textContent = "Name: " + user.name + ", Email: " + user.email + ", Username: " + user.username;
      ul.appendChild(li);
    });
  }
  