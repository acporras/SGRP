
function despliegue() {
    $(document).on('click', '.dropdown-content', function (e) {
        e.stopPropagation();
    });

    // Disabled links
    $('.navbar-nav .disabled a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Show tabs inside dropdowns
    $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
        $(this).tab('show');
    });

    // Add 'active' class to parent list item in all levels
    $('.navigation').find('li.active').parents('li').addClass('active');

    // Hide all nested lists
    $('.navigation').find('li').not('.active, .category-title').has('ul').children('ul').addClass('hidden-ul');

    // Highlight children links
    $('.navigation').find('li').has('ul').children('a').addClass('has-ul');

    // Add active state to all dropdown parent levels
    $('.dropdown-menu:not(.dropdown-content), .dropdown-menu:not(.dropdown-content) .dropdown-submenu').has('li.active').addClass('active').parents('.navbar-nav .dropdown:not(.language-switch), .navbar-nav .dropup:not(.language-switch)').addClass('active');

    // Collapsible functionality
    // -------------------------

    // Main navigation
    $('.navigation-main').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        // Collapsible
        $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

        // Accordion
        if ($('.navigation-main').hasClass('navigation-accordion')) {
            $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
        }
    });


    // Alternate navigation
    $('.navigation-alt').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        // Collapsible
        $(this).parent('li').not('.disabled').toggleClass('active').children('ul').slideToggle(200);

        // Accordion
        if ($('.navigation-alt').hasClass('navigation-accordion')) {
            $(this).parent('li').not('.disabled').siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(200);
        }
    });

}


function listarMenu() {
    
    var codTituloParam = $('#codTituloParam').val();
    var codModuloParam = $('#codModuloParam').val();
    var codCategoriaParam = $('#codCategoriaParam').val();

    $.ajax({

        type: 'POST',
        url: "../MenuServlet?accion=listarMenu",
        data: {
            codTituloParam: codTituloParam,
            codModuloParam: codModuloParam,
            codCategoriaParam: codCategoriaParam
        },
        beforeSend: function () {
            console.log("cargando...");
        },
        success: function (data) {
            console.log(data);
            $('#listarMenu').html(data);
        },
        error: function () {
            alert("Error interno metodo listarMenu");
        },
        complete: function () {
            despliegue();
        }

    });

}
function menuSession(codTituloParam, codModuloParam, codCategoriaParam, pagina) {
console.log(pagina);
    $.ajax({
        type: 'POST',
        url: "../MenuServlet?accion=menuSession",
        data: {
            codTituloParam: codTituloParam,
            codModuloParam: codModuloParam,
            codCategoriaParam: codCategoriaParam,
            pagina:pagina
        },
        success: function (data) {
            //$(location).attr('href', pagina);
            $('.content').html(data);
            $('#codTituloParam').val(codTituloParam);
            $('#codModuloParam').val(codModuloParam);
            $('#codCategoriaParam').val(codCategoriaParam);
        }
    });

}