$(document).ready(function(){
  $(".imagenPlato").hover(mostrartexto,ocultartexto);
  $(".cajas").hover(handleInCajas,handleOutCajas);
  $(".btn").hover(handleInBotones,handleOutBotones);
  $("#celdaNav>a").hover(handleInEnlaces,handleOutEnlaces);
  $("#celdaFooterPaginas>a").hover(handleInEnlaces,handleOutEnlaces);
  });

  function handleInCajas(){
    $(this).css({
        "background-color":"a7c1c0"
    });
}
function handleOutCajas(){
    $(this).css({
        "background-color":"burlywood"
        
    });
}
function handleInBotones(){
    $(this).css({
        "background-color":"rgba(216,125,7,0.829)",
        "cursor":"pointer"
    });
}
function handleOutBotones(){
    $(this).css({
        "background-color":"#000"
    });
}
function handleInEnlaces(){
    $(this).css({
       "color":"red"
    });
}
function handleOutEnlaces(){
    $(this).css({
       "color":"rgba(255,255,255,0.76)"
    });
}

function mostrartexto(){
    $(this).css({
      opcaity:"0",
  });
  $(this).next().css({opacity:"1",});
  }
  function ocultartexto(){
    $(this).css({
      opcaity:"1",
  });
  var d=$(this).next().val();
  $(this).next().css("opacity","0");
  }
