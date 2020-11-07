<?php
  class SesionUsuario{
    var $usuario;
    var $contraseña;
    function __construct($usuario, $contraseña){
      $this->usuario = $usuario;
      $this->contraseña = $contraseña;
    }

    function sesionAutentificacion(){
      include 'conexion.php';
      $sql = 'SELECT * FROM `usuario` WHERE `id_user`="rbanagasta" AND `contraseña`="RB2020"';
      $query = mysqli_query($link, $sql);
      var_dump($query);exit;
      $row = mysqli_fetch_array($query);
    }
    function sesionIniciada(){

    }
    function sesionCerrada(){

    }
  }
  // $car = new CarritodeCompra(0,0,'rbanagasta');
  // $car->cantidadCarrito();
  $sesion = new SesionUsuario('rbanagasta', 'RB2020');
  $sesion->sesionAutentificacion();
?>
