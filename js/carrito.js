$(document).ready(function(){
  actualizariconoCarrito()
});

function sesionIniciada(id_carrito){
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 1 },
    success: function(response){
      if(response==1){
        window.location.href = "iniciarsesion.html";
      }else{
        actualizaryagregarCarrito(id_carrito);
        actualizariconoCarrito();
      }
    }
  })
}

function actualizaryagregarCarrito(id_carrito){
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 2 , idproducto : id_carrito },
    success: function(response){
      alert(response);
    }
  })
}

function actualizariconoCarrito(){
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 1 },
    success: function(response){
      if(response==1){
        var num_carrito = document.getElementById('car-num');
        num_carrito.innerHTML = 0;
      }else {
        $.ajax({
          url: 'php/script-general.php',
          type: 'POST',
          data: { num : 3 },
          success: function(response){
            var num_carrito = document.getElementById('car-num');
            num_carrito.innerHTML = response;
          }
        })
      }
    }
  })
}

function desplegarcarrito(){
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 5 },
    success: function(response){
      
    }
  })
}
