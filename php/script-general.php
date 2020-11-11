<?php
  $op = $_POST['num'];
  switch ($op) {
    case 1:
      include 'sesion.php';
      $sesion = new SesionUsuario('0', '0');
      $sesion->sesionEstado();

    case 4:
      include 'sesion.php';
      $sesion = new SesionUsuario('0', '0');
      $sesion->sesionInvitado();

    default:
      // code...
      break;
  }
?>
