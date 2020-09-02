$('#agregarp').click(function(){
  var cpu = document.getElementById('cpu').value;
  var ram = document.getElementById('ram').value;
  var disk = document.getElementById('disk').value;
  var monitor = document.getElementById('monitor').value;
  var image = document.getElementById('image').value;
  var category = document.getElementById('category').value;
  var price = document.getElementById('price').value;
  $.post('php/addproduct.php',{cpu , ram , disk , monitor , image , category , price}, function(response){
    alert(response);
  });
  document.getElementById('formAdd').reset();
});
