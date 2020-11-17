<?php
include 'conexion.php';
$sql = "SELECT * FROM `carrito`";
$array = mysqli_query($link, $sql);
$result = array();
while ($row = mysqli_fetch_array($array )){
  $result[] = array(
    'id_carrito' => $row['id_carrito'],
    'id_producto' => $row['id_producto'],
    'id_user' => $row['id_user']
  );
}
var_dump($result);
?>
