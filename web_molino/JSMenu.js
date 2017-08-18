
$(document).ready(main);

var estado = 1;

// this function is used to control control the mobile version menu. (shows or not the menu items depending on the 'estado' var activation.)
// 'estado' changes every time the nav menu icon is clicked or everytime a menu item is clicked
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


// this function is used to avoid overlap between the fixed menu and the #links. It offsets the anchor link 175 pixels. (menu width)
//***********Warning!!!!!!!!!! menu width changes for index3.html, if deployed change the 175 value.
function scrolling_function(){
  window.scrollTo(window.scrollX, window.scrollY - 175);
}


// call the scrolling_function everytime the hash changes (everytime a # link is clicked)
window.onhashchange = scrolling_function;

