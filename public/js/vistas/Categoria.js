 $('.selectpicker').selectpicker({
  style: 'btn-default',
  size: 4
});
function progress(id,display){
  $("#"+id).css("display",display);
  }
listarGlobal();
function __(id) {
    return document.getElementById(id);
}
var counter = 1;
//esta variable será bastante usada por eso es global
function listarGlobal() {
    tableGlobal = $('#myTable2').DataTable({
        "destroy": true,
        "oLanguage": idioma_es,
        "aLengthMenu": [[5, 10, 25, 50, 100, 250, 500, -1], [5, 10, 25, 50, 100, 250, 500, "Todo"]],
        "sPaginationType": "full_numbers",
        "ordering": true,
        "searching": true,
        "processing": false,
        "ajax": {url: "../CategoriaServlet?accion=ListarCategoria", data: {"idSucursal": __("idSucursal").value}},
        "columns": [
            {"data": null},
            {"data": "no_categoria"},
            {"data": "co_tipo"},
            {"data": "subcategoria"},
            {"data": "fe_crea"},
            {"data": "fl_inactivo"},
            {"defaultContent": "<span data-toggle='modal' data-target='#myModalEditarCategoria' title='Editar'  ><i class='icon-pencil5 btn btn-warning btn-editar-categoria' data-toggle='tooltip' data-placement='top' title='' data-original-title='Editar'></i> </span> " +
                        "<i data-id='idcategoria' class='icon-trash-alt btn btn-danger btn-delete-categoria' data-toggle='tooltip' data-placement='top' title='Editar' data-original-title='Eliminar'></i><span></span>"
            }
        ],
        "columnDefs": [
            {"render": function (data, type, row) {
                    return counter++
                }, className: "cls_proveedor", "width": "80px", "text-align": "center", "targets": 0},
            {className: "cls_proveedor", "width": "80px", "text-align": "center", "orderable": true, "targets": 1},
            {className: "cls_comprobante", "width": "250px", "text-align": "center", "orderable": true, "targets": 2},
            {className: "cls_fecha", "width": "80px", "text-align": "center", "orderable": true, "targets": 3},
            {className: "cls_impuesto", "width": "80px", "text-align": "center", "targets": 4},
            {"render": function (data, type, row) {
                    if (data == "1") {
                        var m = "<small style='font-size:0.9em' class='label bg-green'>Activo</small>";
                    } else if (data == "0") {
                        var m = "<small style='font-size:0.9em' class='label bg-red'>Inactivo</small>";
                    }
                    return m;
                },
                "targets": 5
            }, {className: "cls_opcion", "text-align": "center", "targets": 6}
        ]
    });
}
$('#subcategoria').change(function (e) {
    console.log($(this).val());
})
var c1=0,cc2=0;
$(document).on('click','.btn-editar-categoria',function (e) {
    
        console.log("clickedcate");
        var row = $(this).parents('tr');
        var data = tableGlobal.row($(this).parents('tr')).data();
        console.log(data);
        $('#nomcategoria').val(data.no_categoria);
        $('#tipocategoria').val(data.co_tipo);
        $('#subcategoria').val(data.fl_inactivo.split(","));
        $('#UrlImagen').val(data.no_categoria);
        console.log(data.fl_inactivo);
        progress("progress-editar-categoria", "block");
        //swal("Genial!", "Categoria Actualizada con Exito!", "success");    
        e.preventDefault();
});

$('.confirm-edit-categoria').click(function (e) {
    e.preventDefault();
    console.log(":v");
//    var row = $(this).parents('tr');
//    var id = tableGlobal.row($(this).parents('tr')).data();
//    var url = "../CategoriaServlet?accion=UpdateCategoria";
//    console.log(id);
    //
//    $.ajax({
//     url: url,
//     method:'post',
//     processData:false,
//     contentType:false,
//     cache:false,
//     data: "idCategoria="+id.fl_inactivo,
//     success:function(data){
//         console.log(data);
//    /* progress("none");
//     if(data.success){
//     $('#form-update .modal-body .row').find(".form-group").children().removeClass('has-error');
//     $('#form-update .modal-body .row').find(".form-group").children().find("label").html("");
//     
//     __('Categoria').value = data.articulo.idcategoria;
//     __('Persona').value = data.articulo.idpersona;
//     __('Marca').value = data.articulo.idmarca;
//     __('Articulo').value = data.articulo.nombre;
//     __('Codigo').value = data.articulo.codigo;
//     __('Stock').value = data.articulo.stock;
//     __('Stock_min').value = data.articulo.stock_minimo;
//     __('Descripcion').value = data.articulo.descripcion;
//     __('Venta').value = data.articulo.precio_venta;
//     __('Compra').value = data.articulo.precio_compra;
//     
//     if ( __("_i").value != data.articulo.idarticulo) {
//     filechange = true;
//     $(".kv-fileinput-error").html("");
//     $(".kv-fileinput-error").attr("style","display:none");
//     $(".kv-file-content").html("<img class='kv-preview-data file-preview-image' style='width:auto;height:160px;'>");
//     $(".file-upload-indicator").attr("title","No subido todavia").html("<i class='glyphicon glyphicon-hand-down text-warning'></i>");
//     
//     }
//     
//     $(".kv-preview-data").attr('src',('../images/'+data.articulo.imagen));
//     $(".kv-preview-data").attr('alt',('../images/'+data.articulo.imagen));
//     $(".kv-preview-data").attr('title',('../images/'+data.articulo.imagen));
//     $(".file-thumbnail-footer .file-footer-caption").attr('title',(data.articulo.imagen));
//     $(".file-thumbnail-footer .file-footer-caption").html(data.articulo.imagen);
//     
//     $("#imagen").attr('value',data.articulo.imagen);
//     //valida algun evento del file si selecciono imagen o no
//     
//     $('#file').change(function() {
//     //seleccionó una imagen
//     if ($(this).val()) {
//     __("_i").value = (data.articulo.idarticulo);
//     
//     }else {
//     
//     }
//     });
//     
//     $('.btn-update-articulo').attr('data-id',data.articulo.idarticulo);
//     }else{
//     $('.modal-footer #cancelModal').click();
//     swal("Información!", "El Articulo ya fué Eliminado!", "warning");
//     
//     row.fadeOut();
//     $('#form-update section ul').hide().find('li').empty();
//     $('#form-update section ul').find('li').remove();
//     }
//     */
//     },beforeSend:function(data){
//     //progress("block");
//     
//     },error:function(data){
//     //$('.modal-footer #cancelModal').click();
//     swal("Información!", "Hubo un problema, Intente mas Tarde", "warning");
//     
//     }
//     });
//    //



});
/*$(document).on('click', 'table .btn-delete-articulo',function(e){
 // e.preventDefault();
 
 var row = $(this).parents('tr');
 var datos = table.row($(this).parents('tr')).data();
 
 var url2 = 'articulo/edit/'+datos.idarticulo;
 $.get(url2,function(data){
 if(data.success){
 var id = data.articulo.idarticulo;
 var name =data.articulo.nombre;
 
 // ------ alert ------- //
 swal({
 title: "¿Realmente quiere eliminar el articulo "+"''"+ name +"''"+ "?",
 text: "No podras recuperar el Articulo",
 type: "warning",
 showCancelButton: true,
 confirmButtonColor: "#DD6B55",
 confirmButtonText: "Si, quiero eliminarlo!",
 closeOnConfirm: false,
 html: false
 }, function(data){
 if (data) {
 var url = $('#form-delete').attr('action').replace(':ARTICLE_ID',id);
 var data =$('#form-delete').serialize();
 
 $.post(url,data,function(result){
 swal("Eliminado!",
 result.message,
 "success");
 row.fadeOut();
 listar();
 }).fail(function(result){
 swal("Información!", "El Articulo no pudo ser eliminado, intente mas tarde", "warning");
 
 row.fadeIn();
 });
 
 }else {
 swal("Información!", "Hubo un problema, intente mas Tarde", "warning");
 
 }
 
 
 });
 
 // ------ alert ------- //
 
 }else{
 $('.modal-footer #cancelModal').click();
 swal("Información!", "El Articulo ya fue Eliminado", "warning");
 
 
 row.fadeOut();
 $('#form-update section ul').hide().find('li').empty();
 $('#form-update section ul').find('li').remove();
 }
 }).fail(function(){
 $('.modal-footer #cancelModal').click();
 swal("Información!", "Hubo un problema", "warning");
 
 
 });
 
 });*/

