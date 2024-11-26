<?php
include 'db.php';

$sql = "SELECT * FROM expenses ORDER BY date DESC";
$result = $conn->query($sql);

$expenses = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $expenses[] = $row;
    }
}
echo json_encode($expenses);

$conn->close();
?>
