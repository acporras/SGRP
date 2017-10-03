'use strict';
/* global document */
// Load the fonts
Highcharts.createElement('link', {
   href: 'https://fonts.googleapis.com/css?family=Dosis:400,600',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: 'Dosis, sans-serif'
      }
   },
   title: {
      style: {
         fontSize: '16px',
         fontWeight: 'bold',
         textTransform: 'uppercase'
      }
   },
   tooltip: {
      borderWidth: 0,
      backgroundColor: 'rgba(219,219,216,0.8)',
      shadow: false
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      gridLineWidth: 1,
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   yAxis: {
      minorTickInterval: 'auto',
      title: {
         style: {
            textTransform: 'uppercase'
         }
      },
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   plotOptions: {
      candlestick: {
         lineColor: '#404048'
      }
   },


   // General
   background2: '#F0F0EA'

};

// Apply the theme
// Get the CSV and create the chart
var chart;
$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?', function (csv) {
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

    chart = new Highcharts.chart('Reservaciones', {

        data: {
            csv: "Day,Último Año,Este Año\n1/1/13,5691,4346\n1/2/13,5403,4112\n1/3/13,15574,11356\n1/4/13,16211,11876\n1/5/13,16427,11966\n1/6/13,16486,12086\n1/7/13,14737,10916\n1/8/13,5838,4507\n1/9/13,5542,4202\n1/10/13,3124,4202\n1/11/13,5232,1202\n1/12/13,2232,4444\n\n1/2/14,4432,2444\n"
        },

        title: {
            text: 'Registros de Reservas del ultimo año',
             style: {
                 cursor: 'pointer'
            }
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            tickInterval: 31 * 24 * 3600 * 1000, // one month
            tickWidth: 0,
            gridLineWidth: 1,
            labels: {
                align: 'left',
                x: 3,
                y: -3
            }
        },

        yAxis: [{ // left y axis
            title: {
                text: null
            },
            labels: {
                align: 'left',
                x: 3,
                y: 16,
                format: '{value:.,0f}'
            },
            showFirstLabel: false
        }, { // right y axis
            linkedTo: 0,
            gridLineWidth: 0,
            opposite: true,
            title: {
                text: null
            },
            labels: {
                align: 'right',
                x: -3,
                y: 16,
                format: '{value:.,0f}'
            },
            showFirstLabel: false
        }],

        legend: {
            align: 'left',
            verticalAlign: 'top',
            y: 20,
            floating: true,
            borderWidth: 0
        },

        tooltip: {
            shared: true,
            crosshairs: true
        },

        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {
                           /* hs.htmlExpand(null, {
                                pageOrigin: {
                                    x: e.pageX || e.clientX,
                                    y: e.pageY || e.clientY
                                },
                                headingText: this.series.name,
                                maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' + 'S/ ' +
                                    this.y + '',
                                width: 200
                            });*/
                        }
                    }
                },
                marker: {
                    lineWidth: 1
                }
            }
        },

        series: [{
            name: 'Todos los Ingresos',
            lineWidth: 4,
            marker: {
                radius: 4
            }
        }, {
            name: 'New visitors'
        }]
    });
});
Highcharts.setOptions({
  lang: {
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',  'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    weekdays: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    noData: "No existen datos para mostrar",
    shortMonths: [ "Ene" , "Feb" , "Mar" , "Abr" , "May" , "Jun" , "Jul" , "Ago" , "Set" , "Oct" , "Nov" , "Dic"]
  }
});