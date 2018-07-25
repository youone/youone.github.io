/**
 * Created by johan on 2017-05-20.
 */


$('document').ready(function(){

    var overlayLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'http://mapwarper.net/maps/tile/21286/{z}/{x}/{y}.png'
        }),
        opacity: 0.5
    });

    $('.map').css({
        height: $(window).height() + 'px'
    });

    var map = new ol.Map({
        controls: [
            // new OpenLayers.Control.Navigation(),
            // new OpenLayers.Control.ArgParser(),
            // new OpenLayers.Control.Attribution()
        ],
        target: 'map',
        layers: [

            // new ol.layer.Tile({
            //     source: new ol.source.OSM(),
            //     opacity: 0.5
            // }),

            // new ol.layer.Tile({
            //     source: new ol.source.BingMaps({
            //         // key: 'As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5',
            //         key: 'AvJwy4e5jZF6Q3oKqRkbFw0UO3g412BWg4uAID7m3ixFy4ClR7RHWk29Own1P96_',
            //         imagerySet: 'Aerial'
            //         // imagerySet: 'AerialWithLabels'
            //         // imagerySet: 'Road'
            //     })
            // }),

            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW91MSIsImEiOiJjajQ0MGloM2ExNWpzMndzOTljZ295bjduIn0.mt8HCH48qQxCbMUM1Ld46g'
                }),
                opacity: 1.0
            }),

            overlayLayer

            // new ol.layer.Tile({
            //     source: new ol.source.XYZ({
            //         url: 'http://mapwarper.net/maps/tile/21312/{z}/{x}/{y}.png'
            //     }),
            //     opacity: 0.5
            // })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([17.858546, 59.363938]),
            zoom: 13
        })
    });

    overlayLayer.setOpacity(0.5);

    $("#goFS").click(function() {
        document.documentElement.webkitRequestFullscreen();
        $('.map').css({
            height: screen.height + 'px'
        });
    });


    $("#opacitySlider").on('input', function () {
        $(this).trigger('change');
    });
    $("#opacitySlider").change(function(){
        overlayLayer.setOpacity($(this).val()/100);

    });


});

