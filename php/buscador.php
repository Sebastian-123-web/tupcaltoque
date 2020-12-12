<?php
  include 'conexion.php';

  $search = $_POST['search'];

  if(!empty($search)){
    $sql = "SELECT * FROM producto WHERE cpu LIKE '$search%'";
    $result = mysqli_query($link, $sql);
    if(!$result){
      die('Query  Error'.mysqli_error($link));
    }
    $json = array();
    while ($row = mysqli_fetch_array($result)){
      $json[] = array(
        'id_producto' => $row['id_producto'],
        'cpu' => $row['cpu']
      );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
  }
?>
