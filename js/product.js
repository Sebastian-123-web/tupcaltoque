$(document).ready(function(){
  mostrarProductosAdmin();
})
var editar = false;
$('#agregarp').click(function(){
  var cpu = document.getElementById('cpu').value;
  var ram = document.getElementById('ram').value;
  var disk = document.getElementById('disk').value;
  var monitor = document.getElementById('monitor').value;
  var image = document.getElementById('image').value;
  var category = document.getElementById('category').value;
  var price = document.getElementById('price').value;
  var id = document.getElementById('id-producto').value;
  var url = '';
  if(editar == false){
    url = 'php/addproduct.php';
  }else {
    url = 'php/editarProductoPost2.php';
  }
  $.post(url, {cpu , ram , disk , monitor , image , category , price, id}, function(response){
    mostrarProductosAdmin();
  });
  document.getElementById('formAdd').reset();
});

function mostrarProductosAdmin(){
  $.ajax({
    url : 'php/mostrarProductosAdmin.php',
    type : 'GET',
    success : function(response){
      var data = JSON.parse(response);
      var insetar = '';
      data.forEach( datos => {
        var categoria = '';
        if(datos.categoria == 'G'){categoria = 'Gamer';}else{categoria = 'Normal';}
        insetar += `
        <tr elementoid="${datos.id_producto}">
          <th scope="row">${datos.id_producto}</th>
          <th class="font-weight-normal">${datos.cpu}</th>
          <th class="font-weight-normal">${datos.ram}</th>
          <th class="font-weight-normal">${datos.disco_duro}</th>
          <th class="font-weight-normal">${datos.monitor}</th>
          <th class="font-weight-normal">${categoria}</th>
          <th class="font-weight-normal">${datos.precio}</th>
          <th><p class="text-success" onclick="editarProducto(${datos.id_producto});" style="font-size: 20px;"><i class="fas fa-pen-square"></i></p></th>
          <th><p class="text-danger" onclick="eliminarProducto(${datos.id_producto});" style="font-size: 20px; cursor: pointer;"><i class="fas fa-trash-alt"></i></p></th>
        </tr>
        `
      });
      $('#body').html(insetar);
    }
  });
}

function eliminarProducto(id){
  $.post('php/eliminarProducto.php',{ id },function(){
    mostrarProductosAdmin();
  });
}

$(document).on('click', '.text-success', function(){
  var elemento = $(this)[0].parentElement.parentElement;
  var id = $(elemento).attr('elementoid');
  $.post('php/editarProductoPost1.php', { id } , function(response){
    var data = JSON.parse(response);
    $('#cpu').val(data.cpu);
    $('#ram').val(data.ram);
    $('#disk').val(data.disco_duro);
    $('#monitor').val(data.monitor);
    $('#price').val(data.precio);
    $('#id-producto').val(data.id_producto);
    editar = true;
  });
});
