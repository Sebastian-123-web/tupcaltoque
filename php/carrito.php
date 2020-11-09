<?php
  class CarritodeCompra{

    var $id_carrito;
    var $id_producto;
    var $id_user;

    function __construct($id_carrito, $id_producto, $id_user){
      $this->id_carrito = $id_carrito;
      $this->id_producto = $id_producto;
      $this->id_user = $id_user;
    }

    function agregarCarrito(){
      include 'conexion.php';
      $sql = "INSERT INTO `carrito` (`id_carrito`, `id_producto`, `id_user`) VALUES (NULL, '$this->id_producto', '$this->id_user')";
      mysqli_query($link, $sql);
    }
    function eliminarCarrito(){
      include 'conexion.php';
      $sql = "DELETE FROM `carrito` WHERE `carrito`.`id_carrito` = $this->id_carrito";
      mysqli_query($link, $sql);
    }
    function mostrarCarrito(){
      include 'conexion.php';
      $sql = "SELECT * FROM `carrito` WHERE `id_user`='$this->id_user'";
      $array = mysqli_fetch_array(mysqli_query($link, $sql));
      $send = json_encode($array);
      return $send;
    }
    function cantidadCarrito(){
      include 'conexion.php';
      $sql = "SELECT COUNT(*) FROM `carrito` WHERE `id_user`='$this->id_user'";
      $array = mysqli_fetch_array(mysqli_query($link, $sql));
      return $array[0];
    }
  }

  //$car = new CarritodeCompra(0,0,'rbanagasta');
  //$car->agregarCarrito();
  //$car->eliminarCarrito();
  //$car->mostrarCarrito();
  //$car->cantidadCarrito();
?>
