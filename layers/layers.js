var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Departements_3 = new ol.format.GeoJSON();
var features_Departements_3 = format_Departements_3.readFeatures(json_Departements_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departements_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departements_3.addFeatures(features_Departements_3);
var lyr_Departements_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departements_3, 
                style: style_Departements_3,
                popuplayertitle: 'Departements',
                interactive: false,
                title: '<img src="styles/legend/Departements_3.png" /> Departements'
            });
var format_Point_4 = new ol.format.GeoJSON();
var features_Point_4 = format_Point_4.readFeatures(json_Point_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_4.addFeatures(features_Point_4);
var lyr_Point_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_4,
maxResolution:140.0223307613098,
 
                style: style_Point_4,
                popuplayertitle: 'Point',
                interactive: true,
                title: '<img src="styles/legend/Point_4.png" /> Point'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_GoogleMaps_2.setVisible(false);lyr_Departements_3.setVisible(true);lyr_Point_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleMaps_2,lyr_Departements_3,lyr_Point_4];
lyr_Departements_3.set('fieldAliases', {'year': 'year', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'dep_code': 'dep_code', 'dep_curren': 'dep_curren', 'dep_name': 'dep_name', 'dep_name_u': 'dep_name_u', 'dep_name_l': 'dep_name_l', 'dep_area_c': 'dep_area_c', 'dep_type': 'dep_type', 'dep_status': 'dep_status', 'dep_siren_': 'dep_siren_', 'dep_is_ctu': 'dep_is_ctu', });
lyr_Point_4.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'MAP_NAME': 'MAP_NAME', 'KML_STYLE': 'KML_STYLE', 'id': 'id', 'Copyright': 'Copyright', 'POINT_SYMB': 'POINT_SYMB', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', });
lyr_Departements_3.set('fieldImages', {'year': 'TextEdit', 'reg_code': 'TextEdit', 'reg_name': 'TextEdit', 'dep_code': 'TextEdit', 'dep_curren': 'TextEdit', 'dep_name': 'TextEdit', 'dep_name_u': 'TextEdit', 'dep_name_l': 'TextEdit', 'dep_area_c': 'TextEdit', 'dep_type': 'TextEdit', 'dep_status': 'TextEdit', 'dep_siren_': 'TextEdit', 'dep_is_ctu': 'TextEdit', });
lyr_Point_4.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'MAP_NAME': 'TextEdit', 'KML_STYLE': 'TextEdit', 'id': 'Range', 'Copyright': 'TextEdit', 'POINT_SYMB': 'TextEdit', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', });
lyr_Departements_3.set('fieldLabels', {'year': 'no label', 'reg_code': 'no label', 'reg_name': 'no label', 'dep_code': 'no label', 'dep_curren': 'no label', 'dep_name': 'no label', 'dep_name_u': 'no label', 'dep_name_l': 'no label', 'dep_area_c': 'no label', 'dep_type': 'no label', 'dep_status': 'no label', 'dep_siren_': 'no label', 'dep_is_ctu': 'no label', });
lyr_Point_4.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LAYER': 'hidden field', 'GM_TYPE': 'hidden field', 'MAP_NAME': 'hidden field', 'KML_STYLE': 'hidden field', 'id': 'hidden field', 'Copyright': 'inline label - always visible', 'POINT_SYMB': 'hidden field', 'FONT_SIZE': 'hidden field', 'FONT_COLOR': 'hidden field', 'FONT_CHARS': 'hidden field', });
lyr_Point_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});