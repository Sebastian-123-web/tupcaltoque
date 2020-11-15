<?php
  class CarritodeCompra{

    function __construct(){
    }

    function agregarCarrito($id_producto, $id_user){
      include 'conexion.php';
      $sql = "INSERT INTO `carrito` (`id_carrito`, `id_producto`, `id_user`) VALUES (NULL, '$id_producto', '$id_user')";
      mysqli_query($link, $sql);
      echo "Se agrego correctamente";
    }
    function eliminarCarrito($id_carrito){
      include 'conexion.php';
      $sql = "DELETE FROM `carrito` WHERE `carrito`.`id_carrito` = $id_carrito";
      mysqli_query($link, $sql);
    }
    function mostrarCarrito($id_user){
      include 'conexion.php';
      $sql = "SELECT * FROM `carrito` WHERE `id_user`='$id_user'";
      $array = mysqli_fetch_array(mysqli_query($link, $sql));
      $send = json_encode($array);
      return $send;
    }
    function cantidadCarrito($id_user){
      include 'conexion.php';
      $sql = "SELECT COUNT(*) FROM `carrito` WHERE `id_user`='$id_user'";
      $array = mysqli_fetch_array(mysqli_query($link, $sql));
      echo $array[0];
    }
  }

  //$car = new CarritodeCompra();
  //$car->agregarCarrito();
  //$car->eliminarCarrito();
  //$car->mostrarCarrito();
  //$car->cantidadCarrito();
?>
