$(document).ready(function(){
  actualizariconoCarrito();
  desplegarcarrito();
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
        desplegarcarrito();
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
    data: { num : 1 },
    success: function(response){
      if(response==1){
        var tabla = document.getElementById('tbody');
        tabla.style.display = 'none';
      }else{
        insertarDespliegeCarrito();
      }
    }
  })
}
function insertarDespliegeCarrito(){
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 5 },
    success: function(response){
      var data = JSON.parse(response);
      var insertar = '';
      data.forEach(datos => {
        insertar += `
          <tr>
            <th scope="row"><img src="img/computadoras/${datos.img}" alt="" style="width: 40px; height: 40px;"></th>
            <td>${datos.cpu}</td>
            <td>S/.${datos.precio}</td>
          </tr>
        `
      });
      $('#tbody').html(insertar);
    }
  });
}
