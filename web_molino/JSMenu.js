
$(document).ready(main);

var estado = 1;


function main () {
  $('.menu_bar').click(function(){
    if (estado == 1) {
      $('nav').animate({
        left: '0'
      });
      estado = !estado;
    } else {
      estado = !estado;
      $('nav').animate({
        left: '-100%'
      });
    }
  });
  $('.menu_items').click(function(){
    if (estado == 1) {
      $('nav').animate({
        left: '0'
      });
      estado = !estado;
    } else {
      estado = !estado;
      $('nav').animate({
        left: '-100%'
      });
    }
  });
  // Mostramos y ocultamos submenus
  $('.submenu').click(function(){
    $(this).children('.children').slideToggle();
  });

}

function scrolling_function(){
  window.scrollTo(window.scrollX, window.scrollY - 175);
}

window.onhashchange = scrolling_function;

