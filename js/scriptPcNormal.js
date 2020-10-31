$(document).ready(function(){
  mostrarProductosIndex();
});

function mostrarProductosIndex(){
  $.ajax({
    url : 'php/mostrarProductosAdmin.php',
    type : 'GET',
    success : function(response){
      var data = JSON.parse(response);
      var insetar = '';
      data.forEach( datos => {
        if (datos.categoria == 'N') {
          if(datos.disco_duro==1){var disk = datos.disco_duro + "T";}else {var disk = datos.disco_duro + "GB";}
          insetar += `
          <div class="imagen-port">
              <img src="img/computadoras/${datos.img}" style="width: 288px; height: 263px;" alt="">
              <div class="hover-galeria">
                  <img src="img/icono1.png" alt="" onclick="carrito(${datos.id_producto})">
                  <p>-${datos.cpu}<br>-${datos.ram}GB RAM<br>-${disk}<br>-${datos.monitor}<br><br><br>
                    <div class="d-flex justify-content-between" style="width: 130px;">
                      <i class="fas fa-shopping-cart text-light" style="font-size: 20px;" id="carrito"></i>
                      <p>S/. ${datos.precio}</p>
                    </div>
                  </p>
              </div>
          </div>
          `
        }
      });
      $('#galeriaproductos').html(insetar);
    }
  });
}
