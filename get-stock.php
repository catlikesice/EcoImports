<?php
$conn = new mysqli("localhost", "username", "password", "database");
$result = $conn->query("SELECT id, name, stock FROM products");

$products = array();
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

echo json_encode($products);
?>
