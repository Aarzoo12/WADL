<?php
// Simulating user data retrieval from a database
$userList = array(
  array("name" => "John Doe", "email" => "john@example.com", "username" => "johndoe"),
  array("name" => "Jane Smith", "email" => "jane@example.com", "username" => "janesmith"),
  array("name" => "David Johnson", "email" => "david@example.com", "username" => "davidjohnson")
);

// Return user data
echo json_encode($userList);
?>
