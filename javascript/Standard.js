$(document).ready(function() {
  /* ---- storing cookies on search bar items selected ---- */
  var searchCuisine = sessionStorage.getItem('searchCuisine');
  var searchCity = sessionStorage.getItem('searchCity');
  var searchAddress = sessionStorage.getItem('searchAddress');

  $('#searchCuisineId').val(searchCuisine);
  $('#searchCityId').val(searchCity);
  $('#searchAddressId').val(searchAddress);

$('#searchButtonId').click(function(){
    sessionStorage.setItem('searchCuisine', $('#searchCuisineId').val());
    sessionStorage.setItem('searchCity', $('#searchCityId').val());
    sessionStorage.setItem('searchAddress', $('#searchAddressId').val());
});


// Global variable to store current value
var oldValue = '';
// Blank value when click to activate all options
$('input').on('click', function() {
  oldValue = $(this).val();
  $(this).val('');
});
// Restore current value after click
$('input').on('mouseleave', function() {
  if ($(this).val() == '') {
    $(this).val(oldValue);
  }
});


/* ---- storing cookies on selected restaurant ---- */
var restaurant = sessionStorage.getItem('restaurant');

$('#restaurantMenuId').html(restaurant);
if(restaurant == "El locos tacos"){
  $("#divTacosId").show();
  $("#divGreekId").hide();
  $("#divSconesId").hide();
}
if(restaurant == "Snow Scones Bros"){
  $("#divTacosId").hide();
  $("#divGreekId").hide();
  $("#divSconesId").show();
}
if(restaurant == "Greek'n eggs"){
  $("#divTacosId").hide();
  $("#divGreekId").show();
  $("#divSconesId").hide();
}

$('#restaurantTacosId').click(function(){
    sessionStorage.setItem('restaurant', $('#restaurantTacos').html());
});
$('#restaurantSconesId').click(function(){
    sessionStorage.setItem('restaurant', $('#restaurantScones').html());
});
$('#restaurantGreekId').click(function(){
    sessionStorage.setItem('restaurant', $('#restaurantGreek').html());
});


/* ---- storing cookies on selected menu items ---- */
var basketItemsNum = sessionStorage.getItem('basketItemsNum');
console.log(basketItemsNum);
if(basketItemsNum == null){
  basketItemsNum = 0;
}
$('#basketNum').html(basketItemsNum);

var obj = {}
var price = {}

for(var i=1; i<7; i++){
  obj["menuItemNum"+i] = sessionStorage.getItem('menuItemNum'+i);
  obj["menuItem"+i] = sessionStorage.getItem('menuItem'+i);
  price["priceItem"+i] = sessionStorage.getItem('priceItem'+i);
  if(obj["menuItemNum"+i] == null){
    obj["menuItemNum"+i] = 0;
  }
  console.log(obj);
}

$('#menuItemButt1').click(function(){
    sessionStorage.setItem('menuItem1', $('#menuItem1').html());
    sessionStorage.setItem('priceItem1', $('#priceItem1').html());
    sessionStorage.setItem('menuItemNum1', ++obj["menuItemNum1"]);
    sessionStorage.setItem('basketItemsNum', ++basketItemsNum);
    $('#basketNum').html(basketItemsNum);
});
$('#menuItemButt2').click(function(){
    sessionStorage.setItem('menuItem2', $('#menuItem2').html());
    sessionStorage.setItem('priceItem2', $('#priceItem2').html());
    sessionStorage.setItem('menuItemNum2', ++obj["menuItemNum2"]);
    sessionStorage.setItem('basketItemsNum', ++basketItemsNum);
    $('#basketNum').html(basketItemsNum);
});
$('#menuItemButt3').click(function(){
    sessionStorage.setItem('menuItem3', $('#menuItem3').html());
    sessionStorage.setItem('priceItem3', $('#priceItem3').html());
    sessionStorage.setItem('menuItemNum3', ++obj["menuItemNum3"]);
    sessionStorage.setItem('basketItemsNum', ++basketItemsNum);
    $('#basketNum').html(basketItemsNum);
});
$('#menuItemButt4').click(function(){
    sessionStorage.setItem('menuItem4', $('#menuItem4').html());
    sessionStorage.setItem('priceItem4', $('#priceItem4').html());
    sessionStorage.setItem('menuItemNum4', ++obj["menuItemNum4"]);
    sessionStorage.setItem('basketItemsNum', ++basketItemsNum);
    $('#basketNum').html(basketItemsNum);
});
$('#menuItemButt5').click(function(){
    sessionStorage.setItem('menuItem5', $('#menuItem5').html());
    sessionStorage.setItem('priceItem5', $('#priceItem5').html());
    sessionStorage.setItem('menuItemNum5', ++obj["menuItemNum5"]);
    sessionStorage.setItem('basketItemsNum', ++basketItemsNum);
    $('#basketNum').html(basketItemsNum);
});
$('#menuItemButt6').click(function(){
    sessionStorage.setItem('menuItem6', $('#menuItem6').html());
    sessionStorage.setItem('priceItem6', $('#priceItem6').html());
    sessionStorage.setItem('menuItemNum6', ++obj["menuItemNum6"]);
    sessionStorage.setItem('basketItemsNum', ++basketItemsNum);
    $('#basketNum').html(basketItemsNum);
});

/* ---- html code of selected menu items injected in order page ---- */
var priceTotal=0;
for(var i=1; i<7; i++){
  if(obj["menuItemNum"+i] > 0){
    $( "#orderRemove" ).append( "<span class='orderRemove' id='menuItemRemove"+i+"'><i class='fas fa-minus-circle' id='menuItem"+i+"'></i></span>" );
    $( "#orderMenu" ).append( "<span class='orderItem' id='menuItemRemove"+i+"'>"+obj["menuItem"+i]+"("+obj["menuItemNum"+i]+")</span>" );
    $( "#orderPrice" ).append( "<span class='orderItem' id='menuItemRemove"+i+"'>$"+price["priceItem"+i]+"</span>" );
    priceTotal = priceTotal + (parseFloat(price["priceItem"+i]) * parseFloat(obj["menuItemNum"+i]));
  }
}
$( "#orderRemove" ).append( "<span class='orderRemove'><i class='fas fa-receipt'></i></span>" );
$( "#orderMenu" ).append( "<span class='orderItem'>Total: </span>" );
$( "#orderPrice" ).append( "<span class='orderItem'>$"+priceTotal.toFixed(2)+"</span>" );

/* ---- Adding price to payment page ---- */
$( "#cost").append("<span class='pDt'>Your total is: $"+priceTotal.toFixed(2)+"</span>" );

$("#debitCard").click(function(){
    $("#security").hide();
});

$("#creditCard").click(function(){
    $("#security").show();
});
/* ---- Adding price to payment page ---- */

/* ---- removing menu items ---- */
$( "#menuItem1" ).click(function(){
  if(obj["menuItemNum1"] < 1){
  }
    sessionStorage.setItem('menuItemNum1', --obj["menuItemNum1"]);
    priceTotal = priceTotal - (parseFloat(price["priceItem1"]) * parseFloat(obj["menuItemNum1"]));
    sessionStorage.setItem('basketItemsNum', --basketItemsNum);
    $('#basketNum').html(basketItemsNum);
    if(obj["menuItemNum1"] == 1){
      $("span").remove("#menuItemRemove1");
    }
      location.reload();
});

$( "#menuItem2" ).click(function(){
  if(obj["menuItemNum2"] < 1){
  }
    sessionStorage.setItem('menuItemNum2', --obj["menuItemNum2"]);
    priceTotal = priceTotal - (parseFloat(price["priceItem2"]) * parseFloat(obj["menuItemNum2"]));
    sessionStorage.setItem('basketItemsNum', --basketItemsNum);
    $('#basketNum').html(basketItemsNum);
    if(obj["menuItemNum2"] == 1){
      $("span").remove("#menuItemRemove2");
    }
      location.reload();
});

$( "#menuItem3" ).click(function(){
  if(obj["menuItemNum3"] < 1){
  }
    sessionStorage.setItem('menuItemNum3', --obj["menuItemNum3"]);
    priceTotal = priceTotal - (parseFloat(price["priceItem3"]) * parseFloat(obj["menuItemNum3"]));
    sessionStorage.setItem('basketItemsNum', --basketItemsNum);
    $('#basketNum').html(basketItemsNum);
    if(obj["menuItemNum3"] == 1){
      $("span").remove("#menuItemRemove3");
    }
      location.reload();
});

$( "#menuItem4" ).click(function(){
  if(obj["menuItemNum4"] < 1){
  }
    sessionStorage.setItem('menuItemNum4', --obj["menuItemNum4"]);
    priceTotal = priceTotal - (parseFloat(price["priceItem4"]) * parseFloat(obj["menuItemNum4"]));
    sessionStorage.setItem('basketItemsNum', --basketItemsNum);
    $('#basketNum').html(basketItemsNum);
    if(obj["menuItemNum4"] == 1){
      $("span").remove("#menuItemRemove4");
    }
      location.reload();
});

$( "#menuItem5" ).click(function(){
  if(obj["menuItemNum5"] < 1){
  }
    sessionStorage.setItem('menuItemNum5', --obj["menuItemNum5"]);
    priceTotal = priceTotal - (parseFloat(price["priceItem5"]) * parseFloat(obj["menuItemNum5"]));
    sessionStorage.setItem('basketItemsNum', --basketItemsNum);
    $('#basketNum').html(basketItemsNum);
    if(obj["menuItemNum5"] == 1){
      $("span").remove("#menuItemRemove5");
    }
      location.reload();
});

$( "#menuItem6" ).click(function(){
  if(obj["menuItemNum6"] < 1){
  }
    sessionStorage.setItem('menuItemNum6', --obj["menuItemNum6"]);
    priceTotal = priceTotal - (parseFloat(price["priceItem6"]) * parseFloat(obj["menuItemNum6"]));
    sessionStorage.setItem('basketItemsNum', --basketItemsNum);
    $('#basketNum').html(basketItemsNum);
    if(obj["menuItemNum6"] == 1){
      $("span").remove("#menuItemRemove6");
    }
      location.reload();
});

});
