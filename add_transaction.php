<?php
require 'config.php';

$title = $_POST['title'];
$amount = $_POST['amount'];
$date = $_POST['date'];
$category = $_POST['category'];

$sql = "INSERT INTO transactions (title, amount, date, category) VALUES ('$title', '$amount', '$date', '$category')";
if ($conn->query($sql) === TRUE) {
    echo "Transaction added.";
} else {
    echo "Error: " . $conn->error;
}
?>
