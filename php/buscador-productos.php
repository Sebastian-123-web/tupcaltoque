<?php
  $id = $_POST['id'];
  include 'conexion.php';
  $sql = "SELECT * FROM `producto` WHERE `id_producto`=$id";
  $query = mysqli_query($link, $sql);
  $row = mysqli_fetch_array($query);
  $send = json_encode($row);
  echo $send;
?>
