<?php
  include 'conexion.php';
  $sql = "SELECT * FROM `producto`";
  $query = mysqli_query($link, $sql);
  $result = array();
  while ($row = mysqli_fetch_array($query)){
    $result[] = array(
      'id_producto' => $row['id_producto'],
      'categoria' => $row['categoria'],
      'cpu' => $row['cpu'],
      'ram' => $row['ram'],
      'disco_duro' => $row['disco_duro'],
      'monitor' => $row['monitor'],
      'img' => $row['img'],
      'oferta' => $row['oferta'],
      'precio' => $row['precio']
    );
  }
  $send = json_encode($result);
  echo $send;
?>
