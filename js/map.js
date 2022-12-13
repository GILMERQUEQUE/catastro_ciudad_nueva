var map = L.map('map', {
center: [-17.986870297144712, -70.23597441200496],
zoom: 17,
minZoom: 10,
maxZoom: 18,
maxBounds: [[-17.993345,-70.244546], [-17.981253,-70.230897]]
});
var satelital = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 19,
    subdomains:['mt0','mt1','mt2','mt3']
});
satelital.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 19,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleTerrain.addTo(map);

var googleTraffic = L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        minZoom: 2,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    });
googleTraffic.addTo(map);

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var MZ_133 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_133", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_133.addTo(map);

var MZ_134 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_134", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_134.addTo(map);

var MZ_135 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_135", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_135.addTo(map);

var MZ_136 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_136", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_136.addTo(map);

var MZ_137 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_137", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_137.addTo(map);

var MZ_138 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_138", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_138.addTo(map);

var MZ_139 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_139", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_139.addTo(map);

var MZ_140 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_140", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_140.addTo(map);

var MZ_141 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_141", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_141.addTo(map);

var MZ_142 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_142", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_142.addTo(map);

var MZ_143 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_143", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_143.addTo(map);

var MZ_144 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_144", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_144.addTo(map);

var MZ_145 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_145", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_145.addTo(map);

var MZ_146 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_146", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_146.addTo(map);

var MZ_147 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_147", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_147.addTo(map);

var MZ_148 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_148", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_148.addTo(map);

var MZ_149 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_149", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_149.addTo(map);

var MZ_150 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_150", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_150.addTo(map);

var MZ_151 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_151", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_151.addTo(map);

var MZ_152 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_152", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_152.addTo(map);

var MZ_153 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_153", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_153.addTo(map);

var MZ_154 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_154", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_154.addTo(map);

var MZ_155 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_155", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_155.addTo(map);

var MZ_156 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_156", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_156.addTo(map);

var MZ_157 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_157", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_157.addTo(map);

var MZ_158 = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:MZ_158", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_158.addTo(map);

var MZ_154b = L.tileLayer.wms("http://localhost:8080/geoserver/catastro_ciudad_nueva/wms", {
layers: "catastro_ciudad_nueva:area_154", //gisweb:catastro_ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_154b.addTo(map);

var baseMaps = {
"GOOGLESATELITAL": satelital,
"GOOGLETERRAIN":googleTerrain,
"GOOGLETRAFFIC":googleTraffic,
"OSM": basemapOSM

};
var overlayMaps = {
"MZ_133": MZ_133,
"MZ_134": MZ_134,
"MZ_135": MZ_135,
"MZ_136": MZ_136,
"MZ_137": MZ_137,
"MZ_138": MZ_138,
"MZ_139": MZ_139,
"MZ_140": MZ_140,
"MZ_141": MZ_141,
"MZ_142": MZ_142,
"MZ_143": MZ_143,
"MZ_144": MZ_144,
"MZ_145": MZ_145,
"MZ_146": MZ_146,
"MZ_147": MZ_147,
"MZ_148": MZ_148,
"MZ_149": MZ_149,
"MZ_150": MZ_150,
"MZ_151": MZ_151,
"MZ_152": MZ_152,
"MZ_153": MZ_153,
"MZ_154": MZ_154,
"MZ_155": MZ_155,
"MZ_156": MZ_156,
"MZ_157": MZ_157,
"MZ_158": MZ_158,
"MZ_154b": MZ_154b
};
L.control.layers(baseMaps, overlayMaps,{
position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
collapsed: false // true
}).addTo(map);

L.control.scale({
imperial: false
}).addTo(map);

