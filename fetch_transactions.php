<?php
require 'config.php';

$result = $conn->query("SELECT * FROM transactions ORDER BY date DESC");
$rows = [];

while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}
echo json_encode($rows);
?>
