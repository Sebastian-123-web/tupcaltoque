<?php
  $op = $_POST['num'];
  include 'sesion.php';
  $sesion = new SesionUsuario();
  switch ($op) {
    case 1:
      $sesion->sesionEstado();
      break;

    default:
      // code...
      break;
  }
?>
