<?php
  $op = $_POST['num'];
  include 'sesion.php';
  include 'carrito.php';
  $sesion = new SesionUsuario();
  $carrito = new CarritodeCompra();
  switch ($op) {
    case 1:
      $sesion->sesionEstado();
    break;
    case 2:
      $idproducto = $_POST['idproducto'];
      session_start();
      if (isset($_SESSION["usuario"]["id_user"])) {
        $carrito->agregarCarrito($idproducto, $_SESSION["usuario"]["id_user"]);
      }
    break;
    case 3:
      session_start();
      $carrito->cantidadCarrito($_SESSION["usuario"]["id_user"]);
    break;
    case 4:
      $usuario = $_POST['user'];
      $contraseña = $_POST['password'];
      $sesion->sesionAutentificacion($usuario, $contraseña);
    break;
    case 5:
      session_start();
      if(isset($_SESSION["usuario"]["id_user"])){
        $carrito->mostrarCarrito($_SESSION["usuario"]["id_user"]);
      }
    break;

    default:
      // code...
      break;
  }
?>
