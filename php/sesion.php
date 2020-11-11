<?php
  class SesionUsuario{

    function __construct(){
    }

    public function sesionAutentificacion($usuario,$contraseña){
      include 'conexion.php';
      $sql = 'SELECT * FROM `usuario` WHERE `id_user`="'.$usuario.'" AND `contraseña`="'.$contraseña.'"';
      $query = mysqli_query($link, $sql);
      $row = mysqli_fetch_array($query);
      if(!isset($row[0])){
        echo 'Error al iniciar sesion';
      }else{
        session_start();
        $_SESSION["usuario"]["id_user"] = $row["id_user"];
        $_SESSION["usuario"]["contraseña"] = $row["contraseña"];
        $_SESSION["usuario"]["nombre"] = $row["nombre"];
        $_SESSION["usuario"]["apellido"] = $row["apellido"];
        $_SESSION["usuario"]["correo"] = $row["correo"];
        $_SESSION["usuario"]["tipo_user"] = $row["tipo_user"];
        //return $_SESSION["usuario"];
        echo 'sesion iniciada '.$_SESSION["usuario"]["id_user"];
      }
    }
    function sesionEstado(){
      session_start();
      if(!isset($_SESSION["usuario"]["id_user"])){
        echo 1;
      }else{
        echo 2;
      }
    }
    function sesionCerrada(){
      session_start();
      session_unset();
      session_destroy();
      echo "Sesion Cerrada";
    }
  }

  //$sesion = new SesionUsuario();
  //$sesion->sesionAutentificacion('rbanagasta', 'RB2020');
  //$sesion->sesionEstado();
  //$sesion->sesionCerrada();
  //sesion->sesionInvitado();

  //var_dump($row);
  //var_dump($query);exit;
?>
