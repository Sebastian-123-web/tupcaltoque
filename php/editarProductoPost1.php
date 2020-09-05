<?php
  include 'conexion.php';
  $id = $_POST['id'];
  $sql = "SELECT * FROM `producto` WHERE `id_producto`=".$id;
  $query = mysqli_query($link, $sql);
  $result = mysqli_fetch_array($query);
  $send = json_encode($result);
  echo $send;
?>
