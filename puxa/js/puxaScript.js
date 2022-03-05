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
    "background-color": "rgba(68, 112, 11, 0.753)",
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

$("#pop").on("click", function () {
  $("#imagepreview").attr("src", $("#map").attr("src")); // here asign the image to the modal when the user click the enlarge link
  $("#imagemodal").modal("show"); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
$(function () {
  $(".pop").on("click", function () {
    $(".imagepreview").attr("src", $(this).find("img").attr("src"));
    $("#imagemodal").modal("show");
  });
});
