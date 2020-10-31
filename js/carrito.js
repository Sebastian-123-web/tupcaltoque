function agregarCarrito(id_producto){
  $.ajax({
    url : 'php/script-general.php',
    type : 'POST',
    data : { id_producto },
    success : function(responce){
      alert(responce);
    }
  });
}
