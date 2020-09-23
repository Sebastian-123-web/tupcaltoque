<?php
  $host="localhost";
  $user="root";
  $pass="1234";
  $db="tupcaltoque";

  $link = mysqli_connect($host, $user, $pass, $db) or die("Error para conectarse al servidor y la db");

  return $link;
?>
