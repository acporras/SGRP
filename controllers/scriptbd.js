function getDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
}

var category = new Object();
var subcategoria = new Array();

subcategoria[0] = new Object();
subcategoria[0].no_subcategoria = "CLÁSICAS"
subcategoria[0].co_tipo = "2"

subcategoria[1] = new Object();
subcategoria[1].no_subcategoria = "FAVORITAS"
subcategoria[1].co_tipo = "2"

subcategoria[2] = new Object();
subcategoria[2].no_subcategoria = "ESPECIALIDAD"
subcategoria[2].co_tipo = "2"

subcategoria[3] = new Object();
subcategoria[3].no_subcategoria = "PREMIUM"
subcategoria[3].co_tipo = "2"

category.no_categoria = "PIZZAS",
category.co_tipo = "1",
category.subcategoria = subcategoria,
category.fe_crea = getDateTime(),
category.co_usuario_crea = "acaicedo",
category.fl_inactivo = "0"

db.categories.insert(category);

category = new Object();

category.no_categoria = "ADICIONALES",
category.co_tipo = "1",
category.fe_crea = getDateTime(),
category.co_usuario_crea = "acaicedo",
category.fl_inactivo = "0"

db.categories.insert(category);

category = new Object();

category.no_categoria = "POSTRES",
category.co_tipo = "1",
category.fe_crea = getDateTime(),
category.co_usuario_crea = "acaicedo",
category.fl_inactivo = "0"

db.categories.insert(category);

category = new Object();

category.no_categoria = "BEBIDAS",
category.co_tipo = "1",
category.fe_crea = getDateTime(),
category.co_usuario_crea = "acaicedo",
category.fl_inactivo = "0"

db.categories.insert(category);

category = new Object();

category.no_categoria = "EXTRAS",
category.co_tipo = "1",
category.fe_crea = getDateTime(),
category.co_usuario_crea = "acaicedo",
category.fl_inactivo = "0"

db.categories.insert(category);