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
        var categoria = '';
        if (datos.categoria == 'G') {
          if(datos.disco_duro==1){var disk = datos.disco_duro + "T";}else {var disk = datos.disco_duro + "GB";}
          insetar += `
            <div class="imagen-port">
                <img src="img/pcgamer/pc20.jpg" style="width: 288px; height: 263px;" alt="">
                <div class="hover-galeria">
                    <img src="img/icono1.png" alt="">
                    <p>-${datos.cpu}<br>-${datos.ram}GB RAM<br>-${disk}<br>-${datos.monitor}<br><br><br>S/. ${datos.precio}</p>
                </div>
            </div>
          `
        }
      });
      $('#galeriaproductos').html(insetar);
    }
  });
}
