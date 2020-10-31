$(document).ready(function(){
  mostrarProductosIndex();
  mostrarProductosIndexN();
});

function mostrarProductosIndex(){
  $.ajax({
    url : 'php/mostrarProductosAdmin.php',
    type : 'GET',
    success : function(response){
      var data = JSON.parse(response);
      console.log(data);
      var insetar = '';
      data.forEach( datos => {
        if (datos.categoria == 'G') {
          if(datos.disco_duro==1){var disk = datos.disco_duro + "T";}else {var disk = datos.disco_duro + "GB";}
          insetar += `
          <div class="imagen-port">
              <img src="img/computadoras/${datos.img}" style="width: 288px; height: 263px;" alt="">
              <div class="hover-galeria">
                  <img src="img/icono1.png" alt="">
                  <p>-${datos.cpu}<br>-${datos.ram}GB RAM<br>-${disk}<br>-${datos.monitor}<br><br><br>
                    <div class="d-flex justify-content-between" style="width: 130px;">
                      <div onclick="agregarCarrito(${datos.id_producto})"><i class="fas fa-shopping-cart text-light" style="font-size: 20px;"></i></div>
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
