$(document).ready(function () {
    iniciarSesion();
   $('.selectpicker').selectpicker({
  style: 'btn-default',
  size: 4
});
});

function iniciarSesion() {

    // iniciar checkbox
    $('.styled').uniform();

    // validar inputs
    $('#formIniciarSesion').validate({
        errorClass: 'validation-error-label',
        successClass: 'validation-valid-label',
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        // Different components require proper error label placement
        errorPlacement: function (error, element) {
            if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
                error.appendTo(element.parent());
            }
        },
        submitHandler: function () {
            var usuario = $('#txtUsuario').val();
            var contrasena = $('#txtContrasena').val();

            $.ajax({

                type: 'POST',
                url: "../UsuarioServlet?accion=iniciarSesion",
                data: {
                    usuario: usuario,
                    contrasena: contrasena
                },
                beforeSend: function () {
                    before();
                },
                success: function (data) {
                    $('.blockUI').css('display', 'none');
                    $('.blockUI').remove();
                    if (data == 1) {
                        $(location).attr('href', 'main.jsp');
                        $('#txtUsuario').val(null);
                        $('#txtContrasena').val(null);
                        $('#txtUsuario').focus();
                    } else {
                        error('Error Autenticación', 'Las credenciales son incorrectas');
                        $('#txtUsuario').val(null);
                        $('#txtContrasena').val(null);
                        $('#txtUsuario').focus();
                    }
                },
                error: function () {
                    error('Error Interno', 'Error metodo -> iniciarSesion');
                }

            });
        },
        rules: {
            txtUsuario: {
                required: true
            },
            txtContrasena: {
                required: true
            }
        },
        messages: {
            txtUsuario: {
                required: "Ingrese su usuario"
            },
            txtContrasena: {
                required: "Ingrese su contraseña"
            }
        }
    });

}

function before() {
    $.blockUI({
        message: '<span class="text-semibold"><i class="icon-spinner4 spinner position-left"></i>&nbsp; Espere por favor...</span>',
        timeout: 2000,
        overlayCSS: {
            backgroundColor: '#1b2024',
            opacity: 0.8,
            zIndex: 1200,
            cursor: 'wait'
        },
        css: {
            border: 0,
            color: '#fff',
            padding: 0,
            zIndex: 1201,
            backgroundColor: 'transparent'
        }
    });
}

function error(titutlo, contenido) {
    $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
    $.jGrowl(contenido, {
        position: 'top-center',
        theme: 'bg-danger',
        header: titutlo
    });
}