$(document).ready(function(){
  mostrarProductosIndex();

  $('#search').keyup(function(){
    if($('#search').val()){
      var search = $('#search').val();
      $.ajax({
        url: 'php/buscador.php',
        type: 'POST',
        data: { search },
        success: function(response){
          var data = JSON.parse(response);
          var plantilla = '';
          data.forEach(data => {
            plantilla += `
              <li><a href="#" idfiltro="${data.id_producto}" class="filtrodeproducto"><i class="fas fa-search"></i> ${data.cpu}</a></li>
              `
          });
          $('#filtro').html(plantilla);
        }
      })
    }else{
      $('#filtro').html(' ');
    }
  });

});

function mostrarProductosIndex(){
  $.ajax({
    url : 'php/mostrarProductosAdmin.php',
    type : 'GET',
    success : function(response){
      var data = JSON.parse(response);
      var insetar = '';
      data.forEach( datos => {
        if (datos.categoria == 'G') {
          if(datos.disco_duro==1){var disk = datos.disco_duro + "T";}else {var disk = datos.disco_duro + "GB";}
          insetar += `
          <div class="imagen-port" id="producto" idproducto="${datos.id_producto}">
              <img src="img/computadoras/${datos.img}" style="width: 288px; height: 263px;" alt="">
              <div class="hover-galeria">
                  <img src="img/icono1.png" alt="">
                  <p>-${datos.cpu}<br>-${datos.ram}GB RAM<br>-${disk}<br>-${datos.monitor}<br><br><br>
                    <div class="d-flex justify-content-between" style="width: 130px;">
                      <div onclick="sesionIniciada(${datos.id_producto})" type="button"><i class="fas fa-shopping-cart text-light" style="font-size: 20px;"></i></div>
                      <p>S/. ${datos.precio}</p>
                    </div>
                  </p>
              </div>
          </div>
          `
          //${datos.id_producto}
        }
      });
      $('#galeriaproductos').html(insetar);
    }
  });
}


$(document).on('click', '.filtrodeproducto', function(){
  var elemento = $(this)[0];
  var id = $(elemento).attr('idfiltro');
  $.ajax({
    url : 'php/buscador-productos.php',
    type : 'POST',
    data : { id },
    success : function(response){
      console.log(response);
      var data = JSON.parse(response);
      insetar = `
            <div class="card card-group" style="padding: 20px;">
              <div class="" style="width: 300px;">
                 <img src="img/computadoras/${data.img}" alt="" style="width: 300px;">
              </div>
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">Procesador: ${data.cpu}</li>
                    <li class="list-group-item">Memoria RAM: ${data.ram}GB</li>
                    <li class="list-group-item">Disco Duro: ${data.disco_duro}</li>
                    <li class="list-group-item">Monitor: ${data.monitor}</li>
                    <li class="list-group-item d-flex justify-content-between"><p>Precio: S/.${data.precio}</p><button type="button" name="button" class="btn btn-warning"><b>Pagar</b> <i class="fas fa-money-bill-wave"></i></button></li>
                  </ul>
                </div>
              </div>
            </div>
           `;
      $('#galeriaproductos').html(insetar);
      $('#filtro').html(' ');
    }
  })
  // $.ajax({
  //   url: 'php/buscador-productos.php',
  //   type: 'POST',
  //   data: { id },
  //   success: function(response){
  //     var data = JSON.parse(response);
  //     insertar = `
  //       <div class="card card-group" style="padding: 20px; margin: 10px 100px;">
  //         <div class="" style="width: 300px;">
  //           <img src="img/pcgamer/${data.img}" alt="" style="width: 300px;">
  //         </div>
  //         <div class="card" style="margin: 10px;">
  //           <div class="card-body">
  //             <ul class="list-group">
  //               <li class="list-group-item">${data.cpu}</li>
  //               <li class="list-group-item">Memoria RAM: 16GB</li>
  //               <li class="list-group-item">Disco Duro: 1T</li>
  //               <li class="list-group-item">Monitor: LG 24"</li>
  //               <li class="list-group-item d-flex justify-content-between"><p>Precio: 3000GB</p><button type="button" name="button" class="btn btn-warning"><b>Pagar</b> <i class="fas fa-money-bill-wave"></i></button></li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     `
  //   }
  // })
});
