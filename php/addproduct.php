<?php
  $cpu = $_POST['cpu'];
  $ram = $_POST['ram'];
  $disk = $_POST['disk'];
  $monitor = $_POST['monitor'];
  $image = $_POST['image'];
  $category = $_POST['category'];
  $price = $_POST['price'];

  if(!empty($cpu) && !empty($ram) && !empty($disk) && !empty($monitor) && !empty($image) && !empty($category) && !empty($price)){
    include 'conexion.php';
    $sql = "INSERT INTO `producto` (`id_producto`, `categoria`, `cpu`, `ram`, `disco_duro`, `monitor`, `img`, `precio`) VALUES (NULL, '$category', '$cpu', '$ram', '$disk', '$monitor', '$image', '$price')";
    $query = mysqli_query($link, $sql);
    echo 'Se agrego satisfactoriamente';
  }else{
    echo 'Error al registar Producto, datos vacios o error con la base de datos';
  }
?>
