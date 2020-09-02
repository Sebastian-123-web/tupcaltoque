$(document).ready(function(){
  mostrarProductos();
});

function mostrarProductos(){
  $.ajax({
    url : 'php/mostrar_productos.php',
    type : 'GET',
    success : function(response){
      let productos = JSON.parse(response);
      // IMAGEN ICONO
      var imgi = document.createElement('img');
      imgi.src = 'img/icono1.png';
      // P
      var pcpu = document.createElement('p');var textcpu = document.createTextNode('-i7 8va generacion');pcpu.appendChild(textcpu);

      var pram = document.createElement('p');var textram = document.createTextNode('-16gb ram');pram.appendChild(textram);

      var pdisco = document.createElement('p');var textdisco = document.createTextNode('-1 terabyte');pdisco.appendChild(textdisco);

      var pmoni = document.createElement('p');var textmoni = document.createTextNode('-monitor 24" LG');pmoni.appendChild(textmoni);

      var pprecio = document.createElement('p');var textprecio = document.createTextNode('S/. 4000');pprecio.appendChild(textprecio);

      var br = document.createElement('br');

      var divi = document.createElement('div');divi.className = 'hover-galeria';
      divi.appendChild(imgi);divi.appendChild(pcpu);divi.appendChild(pram);divi.appendChild(pdisco);divi.appendChild(pmoni);divi.appendChild(br);divi.appendChild(br);divi.appendChild(pprecio);

      var img = document.createElement('img');img.src ='img/pcgamer/pc20.jpg';var div = document.createElement('div');

      div.className = 'imagen-port';div.style.width = '287px';div.style.height = '263px';
      div.appendChild(img);div.appendChild(divi);

      var galeriaP = document.getElementById('productos');
      galeriaP.appendChild(div);
    }
  });
}
