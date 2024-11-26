<?php
include 'db.php';

$category = $_POST['category'];
$amount = $_POST['amount'];
$date = $_POST['date'];

$sql = "INSERT INTO expenses (category, amount, date) VALUES ('$category', '$amount', '$date')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
