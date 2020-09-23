<?php
  $cpu = $_POST['cpu'];
  $ram = $_POST['ram'];
  $disk = $_POST['disk'];
  $monitor = $_POST['monitor'];
  $category = $_POST['category'];
  $price = $_POST['price'];

  $tipo_img=$_FILES['image']['type']; //devuelve el tipo de archivo imagen/jpeg
  $tmp_nombre = $_FILES['image']['tmp_name']; //devuelve la direccion donde se encuentra temporalmente la imagen
  $inombre = $_FILES['image']['name']; //devuelve el nombre de la imagen con el formato
  $nuevo_path="../img/computadoras/".$inombre;
  move_uploaded_file($tmp_nombre, $nuevo_path); //agarra la direccion de la imagen temporal y la guarda en una carpeta


  if(!empty($cpu) && !empty($ram) && !empty($disk) && !empty($monitor) && !empty($category) && !empty($price) && !empty($inombre)){
    include 'conexion.php';
    $sql = "INSERT INTO `producto` (`id_producto`, `categoria`, `cpu`, `ram`, `disco_duro`, `monitor`, `img`, `precio`) VALUES (NULL, '$category', '$cpu', '$ram', '$disk', '$monitor', '$inombre', '$price')";
    $query = mysqli_query($link, $sql);
    echo 'Se agrego satisfactoriamente';
  }else{
    echo 'Error al registar Producto, datos vacios o error con la base de datos';
  }
?>
