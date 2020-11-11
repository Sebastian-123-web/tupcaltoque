function sesionIniciada(){
  $.ajax({
    url: 'php/script-general.php',
    type: 'POST',
    data: { num : 1 },
    success: function(response){
      if(response==1){
        $.ajax({
          url: ,
          type: 'POST',
          data: { num : 4 },
          success: function(res){
            
          }
        });
      }
    }
  })
}
