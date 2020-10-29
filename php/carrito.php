<?php
  $id_producto = $_POST['id_producto'];
  include 'conexion.php';
  $sql = "INSERT INTO `carrito` (`id_carrito`, `id_producto`, `id_user`) VALUES (NULL, $id_producto, 'invitado')";
  $query = mysqli_query($link, $sql);
  $sqlc = "SELECT COUNT(*) FROM `carrito`";
  $query = mysqli_query($link, $sqlc);
  $array = mysqli_fetch_array($query);
  echo $array[0];
?>
