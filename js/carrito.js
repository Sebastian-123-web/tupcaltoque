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
        mostrarTodoCarrito();
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

function mostrarTodoCarrito(){
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 5 },
    success: function(response){
      var data = JSON.parse(response);
      var insertar = '';
      var total = 0;
      data.forEach(datos => {
        insertar += `
          <tr idcarrito="${datos.id_carrito}">
            <td><img src="img/computadoras/${datos.img}" alt="" style="width: 40px; height: 40px;"></td>
            <td>${datos.cpu}</td>
            <td>${datos.ram}</td>
            <td>${datos.disco_duro}</td>
            <td>${datos.monitor}</td>
            <td>S/.${datos.precio}</td>
            <td><button type="button" name="button" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
          </tr>
        `
        var precio = parseInt(datos.precio, 10);
        total = total+precio;
      });
      console.log(total);
      $('#tbodyCarrito').html(insertar);
      $('#precio').html("S/."+total);
    }
  });
}

$(document).on("click", "button" ,function(){
  var elemento = $(this)[0].parentElement.parentElement;
  var id_carrito = $(elemento).attr('idcarrito');
  console.log(id_carrito);
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 6 , idcarrito : id_carrito },
    success: function(response){
      console.log('eliminado');
      mostrarTodoCarrito();
      actualizariconoCarrito();
    }
  })
});
