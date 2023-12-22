ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([621518.066638, 9138682.725000, 709136.558362, 9193714.275000]);
var wms_layers = [];

var lyr_SKL_BENCANA_ALAM_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL_BENCANA_ALAM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKL_BENCANA_ALAM_0.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [646862.266100, 9139753.843500, 683672.266100, 9192523.843500]
                            })
                        });
var lyr_SKL_MORFOLOGI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL_MORFOLOGI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKL_MORFOLOGI_1.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [646862.266100, 9139753.843500, 683672.266100, 9192523.843500]
                            })
                        });
var lyr_SKL_DRAINASE_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL_DRAINASE",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKL_DRAINASE_2.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [646862.266100, 9139753.843500, 683672.266100, 9192523.843500]
                            })
                        });
var lyr_SKL_KETERSEDIAANAIR_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL_KETERSEDIAANAIR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKL_KETERSEDIAANAIR_3.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [646862.266140, 9139753.843533, 683672.266140, 9192523.843533]
                            })
                        });
var lyr_SKL_EROSI_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL_EROSI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKL_EROSI_4.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [646862.266100, 9139753.843500, 683672.266100, 9192523.843500]
                            })
                        });
var lyr_SKL_PEMBUANGAN_LIMBAH_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL_PEMBUANGAN_LIMBAH",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKL_PEMBUANGAN_LIMBAH_5.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [646862.266100, 9139753.843500, 683672.266100, 9192523.843500]
                            })
                        });
var lyr_SKL_KEMUDAHANDIKERJAKAN_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL_KEMUDAHANDIKERJAKAN",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKL_KEMUDAHANDIKERJAKAN_6.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [646862.266100, 9139753.843500, 683672.266100, 9192523.843500]
                            })
                        });
var lyr_SKL_KESTABILAN_PONDASI_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL_KESTABILAN_PONDASI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKL_KESTABILAN_PONDASI_7.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [646862.266140, 9139753.843533, 683672.266140, 9192523.843533]
                            })
                        });
var lyr_SKL_KESTABILAN_LERENG_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL_KESTABILAN_LERENG",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKL_KESTABILAN_LERENG_8.png",
    attributions: ' ',
                                projection: 'EPSG:32749',
                                alwaysInRange: true,
                                imageExtent: [646862.266100, 9139753.843500, 683672.266100, 9192523.843500]
                            })
                        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_9 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AKLAnalisisKemampuanLahan_10 = new ol.format.GeoJSON();
var features_AKLAnalisisKemampuanLahan_10 = format_AKLAnalisisKemampuanLahan_10.readFeatures(json_AKLAnalisisKemampuanLahan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AKLAnalisisKemampuanLahan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AKLAnalisisKemampuanLahan_10.addFeatures(features_AKLAnalisisKemampuanLahan_10);
var lyr_AKLAnalisisKemampuanLahan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AKLAnalisisKemampuanLahan_10, 
                style: style_AKLAnalisisKemampuanLahan_10,
                interactive: true,
    title: 'AKL (Analisis Kemampuan Lahan)<br />\
    <img src="styles/legend/AKLAnalisisKemampuanLahan_10_0.png" /> Kemampuan Pengembangan Agak Tinggi<br />\
    <img src="styles/legend/AKLAnalisisKemampuanLahan_10_1.png" /> Kemampuan Pengembangan Sedang<br />\
    <img src="styles/legend/AKLAnalisisKemampuanLahan_10_2.png" /> Kemampuan Pengembangan Rendah<br />'
        });
var format_KesesuainDenganPeruntukanPermukiman_11 = new ol.format.GeoJSON();
var features_KesesuainDenganPeruntukanPermukiman_11 = format_KesesuainDenganPeruntukanPermukiman_11.readFeatures(json_KesesuainDenganPeruntukanPermukiman_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KesesuainDenganPeruntukanPermukiman_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuainDenganPeruntukanPermukiman_11.addFeatures(features_KesesuainDenganPeruntukanPermukiman_11);
var lyr_KesesuainDenganPeruntukanPermukiman_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KesesuainDenganPeruntukanPermukiman_11, 
                style: style_KesesuainDenganPeruntukanPermukiman_11,
                interactive: true,
    title: 'Kesesuain Dengan Peruntukan Permukiman<br />\
    <img src="styles/legend/KesesuainDenganPeruntukanPermukiman_11_0.png" /> Sesuai<br />\
    <img src="styles/legend/KesesuainDenganPeruntukanPermukiman_11_1.png" /> Tidak Sesuai<br />'
        });
var group_SKL = new ol.layer.Group({
                                layers: [lyr_SKL_BENCANA_ALAM_0,lyr_SKL_MORFOLOGI_1,lyr_SKL_DRAINASE_2,lyr_SKL_KETERSEDIAANAIR_3,lyr_SKL_EROSI_4,lyr_SKL_PEMBUANGAN_LIMBAH_5,lyr_SKL_KEMUDAHANDIKERJAKAN_6,lyr_SKL_KESTABILAN_PONDASI_7,lyr_SKL_KESTABILAN_LERENG_8,],
                                title: "SKL"});

lyr_SKL_BENCANA_ALAM_0.setVisible(true);lyr_SKL_MORFOLOGI_1.setVisible(true);lyr_SKL_DRAINASE_2.setVisible(true);lyr_SKL_KETERSEDIAANAIR_3.setVisible(true);lyr_SKL_EROSI_4.setVisible(true);lyr_SKL_PEMBUANGAN_LIMBAH_5.setVisible(true);lyr_SKL_KEMUDAHANDIKERJAKAN_6.setVisible(true);lyr_SKL_KESTABILAN_PONDASI_7.setVisible(true);lyr_SKL_KESTABILAN_LERENG_8.setVisible(true);lyr_ESRISatelliteArcGISWorld_Imagery_9.setVisible(true);lyr_AKLAnalisisKemampuanLahan_10.setVisible(true);lyr_KesesuainDenganPeruntukanPermukiman_11.setVisible(true);
var layersList = [group_SKL,lyr_ESRISatelliteArcGISWorld_Imagery_9,lyr_AKLAnalisisKemampuanLahan_10,lyr_KesesuainDenganPeruntukanPermukiman_11];
lyr_AKLAnalisisKemampuanLahan_10.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Klasifikasi': 'Klasifikasi', 'Kesesuaian Untuk Kawasan Permukiman': 'Kesesuaian Untuk Kawasan Permukiman', });
lyr_KesesuainDenganPeruntukanPermukiman_11.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Klasifikasi': 'Klasifikasi', 'Kesesuaian Untuk Kawasan Permukiman': 'Kesesuaian Untuk Kawasan Permukiman', });
lyr_AKLAnalisisKemampuanLahan_10.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Klasifikasi': 'TextEdit', 'Kesesuaian Untuk Kawasan Permukiman': 'TextEdit', });
lyr_KesesuainDenganPeruntukanPermukiman_11.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Klasifikasi': 'TextEdit', 'Kesesuaian Untuk Kawasan Permukiman': 'TextEdit', });
lyr_AKLAnalisisKemampuanLahan_10.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Klasifikasi': 'no label', 'Kesesuaian Untuk Kawasan Permukiman': 'no label', });
lyr_KesesuainDenganPeruntukanPermukiman_11.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Klasifikasi': 'no label', 'Kesesuaian Untuk Kawasan Permukiman': 'no label', });
lyr_KesesuainDenganPeruntukanPermukiman_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});