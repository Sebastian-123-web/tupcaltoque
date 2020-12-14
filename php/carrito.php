<?php
  class CarritodeCompra{

    function __construct(){
    }

    function agregarCarrito($id_producto, $id_user){
      include 'conexion.php';
      $mes = date("m");
      $año = date("Y");
      $sql = "INSERT INTO `carrito` (`id_carrito`, `id_producto`, `id_user`, `mes`, `año`) VALUES (NULL, '$id_producto', '$id_user', '$mes', '$año')";
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
      $sql = "SELECT `carrito`.`id_carrito`,`producto`.`id_producto`,`carrito`.`id_user`,`producto`.`categoria`,`producto`.`cpu`,`producto`.`ram`,`producto`.`disco_duro`,`producto`.`monitor`,`producto`.`img`,`producto`.`precio` FROM `carrito` INNER JOIN `producto` ON `carrito`.`id_producto`=`producto`.`id_producto` WHERE `id_user`='$id_user'";
      $array = mysqli_query($link, $sql);
      $result = array();
      while ($row = mysqli_fetch_array($array)){
        $result[] = array(
          'id_carrito' => $row['id_carrito'],
          'id_producto' => $row['id_producto'],
          'id_user' => $row['id_user'],
          'categoria' => $row['categoria'],
          'cpu' => $row['cpu'],
          'ram' => $row['ram'],
          'disco_duro' => $row['disco_duro'],
          'monitor' => $row['monitor'],
          'img' => $row['img'],
          'precio' => $row['precio']
        );
      }
      $send = json_encode($result);
      echo $send;
      //var_dump($result);
    }
    function cantidadCarrito($id_user){
      include 'conexion.php';
      $sql = "SELECT COUNT(*) FROM `carrito` WHERE `id_user`='$id_user'";
      $array = mysqli_fetch_array(mysqli_query($link, $sql));
      echo $array[0];
    }
    public function estadisticas(){
      
    }
  }

  //$car = new CarritodeCompra();
  //$car->agregarCarrito();
  //$car->eliminarCarrito();
  //$car->mostrarCarrito('rbanagasta');
  //$car->cantidadCarrito();
?>
