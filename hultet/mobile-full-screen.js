var view = new ol.View({
    center: ol.proj.fromLonLat([14.383625634911786, 58.72856827203982]),
    // center: ol.proj.fromLonLat([20, 60]),
    zoom: 13
});

// 'Road',
// 'Aerial',
// 'AerialWithLabels',
// 'collinsBart',
// 'ordnanceSurvey'

var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.BingMaps({
                // key: 'As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5',
                key: 'AvJwy4e5jZF6Q3oKqRkbFw0UO3g412BWg4uAID7m3ixFy4ClR7RHWk29Own1P96_',
                imagerySet: 'AerialWithLabels'
                // imagerySet: 'Aerial'
                // imagerySet: 'Road'
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://mapwarper.net/maps/tile/21286/{z}/{x}/{y}.png'
            }),
            opacity: 0.7
        }),
    ],
    target: 'map',
    view: view
});

// var geolocation = new ol.Geolocation({
//     projection: view.getProjection(),
//     tracking: true
// });
// geolocation.once('change:position', function() {
//     view.setCenter(geolocation.getPosition());
//     view.setResolution(2.388657133911758);
// });
