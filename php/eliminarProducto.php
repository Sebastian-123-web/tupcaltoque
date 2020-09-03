<?php
  include 'conexion.php';
  $id = $_POST['id'];
  $sql = "DELETE FROM `producto` WHERE `id_producto`=$id";
  $query = mysqli_query($link, $sql);
?>
