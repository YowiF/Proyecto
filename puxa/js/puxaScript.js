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
    "background-color": "rgba(116, 181, 31, 0.84)",
  });
}
function handleInBotones() {
  $(this).css({
    "background-color": "rgb(103, 167, 19)",
    cursor: "pointer",
  });
}
function handleOutBotones() {
  $(this).css({
    "background-color": "#000",
  });
}
function handleInEnlaces() {
  $(this).css({
    color: "red",
  });
}
function handleOutEnlaces() {
  $(this).css({
    color: "rgba(255,255,255,0.76)",
  });
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

var display = false;

$(".openNavegacion").click(function () {
  if (display == false) {
    $("nav").show(function () {
      $("nav").animate({ width: "250px" }, 100);
    });

    display = true;
  } else {
    $("nav").hide(function () {
      $("nav").animate({ width: "0px" }, 100);
    });

    display = false;
  }
});
