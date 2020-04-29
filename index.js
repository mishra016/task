

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}



$(".button1").click(function(){
  $(".button1").css("background-color", "green");
  $(".button1").css("color", "white");
});

$(".button2").click(function(){
  $(".button2").css("background-color", "green");
  $(".button2").css("color", "white");
});
