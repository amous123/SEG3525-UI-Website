/* ---- storing cookies on which language is selected ---- */
var language = sessionStorage.getItem('language');
if ((language == 'EN') || (language == null)){
  switchEnglish();
}
else{
  switchFrench();
}

$('#english').click(function(){
  switchEnglish();
    sessionStorage.setItem('language', 'EN');
});
function switchEnglish() {
  if ($('.EN').hasClass('active')){
    $('.EN').toggleClass('active');
    $('.FR').toggleClass('active');
    $('#english').addClass('active');
    $('#french').removeClass('active');
  }
else{
  $('.EN').toggleClass('');
  $('.FR').toggleClass('');
} }

$('#french').click(function(){
  switchFrench();
    sessionStorage.setItem('language', 'FR');
});
function switchFrench() {
  if ($('.EN').hasClass('active')){
    $('.EN').toggleClass('');
    $('.FR').toggleClass('');
  }
else{
  $('.EN').toggleClass('active');
  $('.FR').toggleClass('active');
  $('#english').removeClass('active');
  $('#french').addClass('active');
} }
