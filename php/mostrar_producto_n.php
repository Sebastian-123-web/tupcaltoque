<?php
  include 'conexion.php';
  $sql = "SELECT * FROM `producto` WHERE `categoria`='N'";
  $query = mysqli_query($link, $sql);
  $array = mysqli_fetch_array($query);
  $send = json_encode($array);
  echo $send;
?>
