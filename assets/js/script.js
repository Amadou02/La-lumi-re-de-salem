//cacher les produits
$(function(){
$(".product1").hide();
$(".product2").hide();
$(".product3").hide();
$(".product4").hide();
});
//afficher les produits
$(function(){
$("#decoc").click(function(){
  $(".product1").show();
});
$("#herbe").click(function(){
  $(".product2").show();
});
$("#library").click(function(){
  $(".product3").show();
});
$("#arct").click(function(){
  $(".product4").show();
});
});
