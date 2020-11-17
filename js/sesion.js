$("#sesion").on("click", function(){
  var usuario = document.getElementById('usuario').value;
  var contraseña = document.getElementById('contraseña').value;
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 4 , user : usuario , password : contraseña },
    success: function(response){
      console.log('hola');
      history.back(1);
    }
  })
})
