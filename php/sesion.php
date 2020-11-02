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
      $sql = "SELECT * FROM `usuario` WHERE `id_user`=\'$this->usuario\' AND `contraseña`=\'$this->contraseña\'";
      //$sql = 'SELECT `tipo_user` FROM `usuario` WHERE `id_user`="'.$this->usuario.'" AND `contraseña`="'.$this->contraseña.'"';
      $query = mysqli_query($link, $sql);
      $row = mysqli_fetch_array($query);
      if(!isset($row[0])) {
        return 'Error';
      }else{
        return $cuenta = true;
      }
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
