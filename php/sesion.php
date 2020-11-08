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
      //var_dump($query);exit;
      $row = mysqli_fetch_array($query);
      session_start();
      //var_dump($row);
      $_SESSION["usuario"]["id_user"] = $row["id_user"];
      $_SESSION["usuario"]["contraseña"] = $row["contraseña"];
      $_SESSION["usuario"]["nombre"] = $row["nombre"];
      $_SESSION["usuario"]["apellido"] = $row["apellido"];
      $_SESSION["usuario"]["correo"] = $row["correo"];
      $_SESSION["usuario"]["tipo_user"] = $row["tipo_user"];

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
