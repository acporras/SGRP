
 function progress(id,display){
  $("#"+id).css("display",display);
  }
 function changeSucursal(){
    listarGlobal();
}

$(document).on('click','#myModalCrearOferta .btn-crear-oferta',function(e){
    console.log("clicked");
    progress("progress-crear-oferta","block");
    swal("Genial!", "Oferta Creada con Exito!", "success");

});



