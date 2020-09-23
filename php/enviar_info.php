<?php
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $cel = $_POST['telf'];
  $mensaje = $_POST['comentario'];
  echo $nombre;

  include 'conexion.php';
  $sql = "INSERT INTO `contactanos` (`id_mensaje`, `nombre`, `correo`, `telfcel`, `mensaje`) VALUES (NULL, '$nombre', '$correo', '$cel', '$mensaje')";
  mysqli_query($link, $sql);
?>
