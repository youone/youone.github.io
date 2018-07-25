/**
 * Created by johan on 2017-05-20.
 */


$('document').ready(function(){

    let m1642Source = new ol.source.XYZ({
            url: 'https://mapwarper.net/maps/tile/27742/{z}/{x}/{y}.png'
        });
    let m1733Source= new ol.source.XYZ({
            url: 'https://mapwarper.net/maps/tile/22727/{z}/{x}/{y}.png'
        });

    let overlayLayer = new ol.layer.Tile({
        source: m1733Source,
        opacity: 0.5
    });
    overlayLayer.set("id", "overlay");

    $('.map').css({
        height: $(window).height() + 'px'
    });

    let map = new ol.Map({
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
            // center: ol.proj.fromLonLat([17.858546, 59.363938]),
            center: ol.proj.fromLonLat([18.070833, 59.325]),
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

    $("#select-custom-6").on("change", function(event) {
        console.log(event, $(this).find(":selected").text());


        if($(this).find(":selected").text() === "1642") {
            console.log(map.getLayers().forEach(layer => {
                console.log(layer.get("id"));
                if(layer.get("id") === "overlay") layer.setSource(m1642Source);
            }));
        }
        if($(this).find(":selected").text() === "1733") {
            console.log(map.getLayers().forEach(layer => {
                console.log(layer.get("id"));
                if(layer.get("id") === "overlay") layer.setSource(m1733Source);
            }));
        }

        console.log('closing panel');
        $("#mypanel").panel("close");


    })


});

