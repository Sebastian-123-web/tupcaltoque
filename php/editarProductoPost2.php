<?php
include 'conexion.php';
$cpu = $_POST['cpu'];
$ram = $_POST['ram'];
$disk = $_POST['disk'];
$monitor = $_POST['monitor'];
$image = $_POST['image'];
$category = $_POST['category'];
$price = $_POST['price'];
$id = $_POST['id'];
$sql = "UPDATE producto SET categoria = '$category', cpu = '$cpu', ram = '$ram', disco_duro = '$disk', monitor = '$monitor', img = '$image', precio = '$price' WHERE id_producto = '$id'";
  $query = mysqli_query($link, $sql);
?>
