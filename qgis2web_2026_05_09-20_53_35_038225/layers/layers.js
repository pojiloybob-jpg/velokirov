var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Карта',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'спуск (Собака)',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> спуск (Собака)'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'подъём (Собака)',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> подъём (Собака)'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'отсутствует (Собака)',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> отсутствует (Собака)'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'спуск (Верблюд)',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> спуск (Верблюд)'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'подъём (Верблюд)',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> подъём (Верблюд)'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'отсутствует (Верблюд)',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> отсутствует (Верблюд)'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'Веломаршрут "Собака"',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> Веломаршрут "Собака"'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: 'Достопримечательности на маршруте "Собака"',
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> Достопримечательности на маршруте "Собака"'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__9, 
                style: style__9,
                popuplayertitle: 'Веломаршрут "Верблюд"',
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> Веломаршрут "Верблюд"'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__10, 
                style: style__10,
                popuplayertitle: 'Достопримечательности на маршруте "Верблюд"',
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> Достопримечательности на маршруте "Верблюд"'
            });
var group_ = new ol.layer.Group({
                                layers: [lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,],
                                fold: 'open',
                                title: 'Уклон тротуаров для велопрогулок'});

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);
var layersList = [lyr__0,group_,lyr__7,lyr__8,lyr__9,lyr__10];
lyr__1.set('fieldAliases', {'id': 'id', });
lyr__2.set('fieldAliases', {'id': 'id', });
lyr__3.set('fieldAliases', {'id': 'id', });
lyr__4.set('fieldAliases', {'id': 'id', });
lyr__5.set('fieldAliases', {'id': 'id', });
lyr__6.set('fieldAliases', {'id': 'id', });
lyr__7.set('fieldAliases', {'id': 'id', });
lyr__8.set('fieldAliases', {'id': 'id', 'name': 'Достопримечательности на маршруте', });
lyr__9.set('fieldAliases', {'id': 'id', });
lyr__10.set('fieldAliases', {'id': 'id', 'name': 'Достопримечательности на муршруте', });
lyr__1.set('fieldImages', {'id': 'Hidden', });
lyr__2.set('fieldImages', {'id': 'Hidden', });
lyr__3.set('fieldImages', {'id': 'Hidden', });
lyr__4.set('fieldImages', {'id': 'Hidden', });
lyr__5.set('fieldImages', {'id': 'Hidden', });
lyr__6.set('fieldImages', {'id': 'Hidden', });
lyr__7.set('fieldImages', {'id': 'Hidden', });
lyr__8.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', });
lyr__9.set('fieldImages', {'id': 'Hidden', });
lyr__10.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', });
lyr__1.set('fieldLabels', {});
lyr__2.set('fieldLabels', {});
lyr__3.set('fieldLabels', {});
lyr__4.set('fieldLabels', {});
lyr__5.set('fieldLabels', {});
lyr__6.set('fieldLabels', {});
lyr__7.set('fieldLabels', {});
lyr__8.set('fieldLabels', {'name': 'header label - always visible', });
lyr__9.set('fieldLabels', {});
lyr__10.set('fieldLabels', {'name': 'header label - always visible', });
lyr__10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});