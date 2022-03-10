$(document).ready(function () {
  $(".imagenPlato").hover(mostrartexto, ocultartexto);
  $(".cajas").hover(handleInCajas, handleOutCajas);
  $(".btn").hover(handleInBotones, handleOutBotones);
  $(".celdaNav>a").hover(handleInEnlaces, handleOutEnlaces);
  $(".celdaFooterPaginas>a").hover(handleInEnlaces, handleOutEnlaces);
});

function handleInCajas() {
  $(this).css({
    "background-color": "#a7c1c0",
  });
}
function handleOutCajas() {
  $(this).css({
    "background-color": "burlywood",
  });
}
function handleInBotones() {
  $(this).css({
    "background-color": "rgba(216,125,7,0.829)",
    cursor: "pointer",
  });
}
function handleOutBotones() {
  $(this).css({
    "background-color": "#000",
  });
}
function handleInEnlaces() {
  $(this).removeClass("text-white");
  $(this).css({
    color: "rgb(219, 107, 42)",
  });
}
function handleOutEnlaces() {
  $(this).addClass("text-white");
}
function mostrartexto() {
  $(this).css({
    opacity: "0",
  });

  $(this).next().css({
    opacity: "1",
  });
}

function ocultartexto() {
  $(this).css({
    opacity: "1",
  });

  $(this).next().css({
    opacity: "0",
  });
}

$( function() {
  $( "#fechaReserva" ).datepicker();
} );