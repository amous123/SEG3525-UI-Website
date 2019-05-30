$(document).ready(function() {

  /* ---- storing cookies on which language is selected ---- */
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

// function switchEnglish() {
//   if ($('.EN').hasClass('active')){
//     $('.EN').toggleClass('active');
//     $('.FR').toggleClass('active');
//     $('#english').addClass('active');
//     $('#french').removeClass('active');
//   }
// else{
//   $('.EN').toggleClass('');
//   $('.FR').toggleClass('');
// } }
//
// $('#french').click(function(){
//   switchFrench();
//     sessionStorage.setItem('language', 'FR');
// });
// function switchFrench() {
//   if ($('.EN').hasClass('active')){
//     $('.EN').toggleClass('');
//     $('.FR').toggleClass('');
//   }
// else{
//   $('.EN').toggleClass('active');
//   $('.FR').toggleClass('active');
//   $('#english').removeClass('active');
//   $('#french').addClass('active');
// } }
});
