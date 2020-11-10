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
      $sql = 'SELECT * FROM `usuario` WHERE `id_user`="'.$this->usuario.'" AND `contraseña`="'.$this->contraseña.'"';
      $query = mysqli_query($link, $sql);
      $row = mysqli_fetch_array($query);
      if(!isset($row[0])){
        return 'Error al iniciar sesion';
      }else{
        session_start();
        $_SESSION["usuario"]["id_user"] = $row["id_user"];
        $_SESSION["usuario"]["contraseña"] = $row["contraseña"];
        $_SESSION["usuario"]["nombre"] = $row["nombre"];
        $_SESSION["usuario"]["apellido"] = $row["apellido"];
        $_SESSION["usuario"]["correo"] = $row["correo"];
        $_SESSION["usuario"]["tipo_user"] = $row["tipo_user"];
        return $_SESSION["usuario"];
      }
    }
    function sesionEstado(){
      return session_status();
    }
    function sesionCerrada(){
      session_start();
      session_unset();
      session_destroy();
      return "Sesion Cerrada";
    }
  }

  $sesion = new SesionUsuario('rbanagasta', 'RB2020');
  //$sesion->sesionAutentificacion();
  //$sesion->sesionEstado();
  //$sesion->sesionCerrada();

  //var_dump($row);
  //var_dump($query);exit;
?>
