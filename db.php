<?php
$servername = "localhost";
$username = "root";  // Update this if your MySQL username is different
$password = "";      // Update this if your MySQL password is different
$dbname = "expense_tracker_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
