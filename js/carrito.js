function carrito(id_producto){
  $.ajax({
    url : "php/carrito.php",
    type : "POST",
    data : {id_producto},
    success : function(response){
      console.log(response);
      var car = document.getElementById('can_carrito');
      console.log(car);
      car.innerHTML = response;
    }
  })
}
