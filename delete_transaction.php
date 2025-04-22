<?php
require 'config.php';

$id = $_GET['id'];
$sql = "DELETE FROM transactions WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "Transaction deleted.";
} else {
    echo "Error: " . $conn->error;
}
?>
