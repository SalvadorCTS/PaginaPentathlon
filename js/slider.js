//almacenar slider en una variable
var slider=$('#slider');

//almacenar botones
var siguiente=$('#btn-next');
var anterior= $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');

//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD(){
  slider.animate({marginLeft:'-'+200+'%'}, 700,
function(){
  $('#slider section:first').insertAfter('#slider section:last');
  slider.css('margin-left', '-'+100+'%');
});
}

function moverI(){
  slider.animate({marginLeft:0}, 700,
function(){
  $('#slider section:last').insertBefore('#slider section:first');
  slider.css('margin-left', '-'+100+'%');
});
}

siguiente.on('click', function() {
  moverD();
});

anterior.on('click', function() {
  moverI();
});

function autoplay() {
  interval= setInterval(function(){
    moverD();
  }, 5000);
}

autoplay();

$(function () {
    $("#c-slider").load("mdb-addons/mdb-lightbox-ui.html");
});



//creando el modal
$('.galeria__img').click(function(e){
  var img= e.target.src;
  var modal= '<div class="modal" id="modal"><img src="'+ img +'"class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
  $('body').append(modal);
  $('#modal__boton').click(function() {
    $('#modal').remove();
  })
});

$(document).keyup(function(e) {
  if (e.which==27){
    $('#modal').remove();
  }
})
