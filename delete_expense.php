<?php
include 'db.php';

$id = $_GET['id'];

$sql = "DELETE FROM expenses WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
