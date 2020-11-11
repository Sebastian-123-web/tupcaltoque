function sesionIniciada(){
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 1 },
    success: function(response){
      if(response==1){
        window.location.href = "iniciarsesion.html";
      }else{
        console.log('hola men');
      }
    }
  })
}
