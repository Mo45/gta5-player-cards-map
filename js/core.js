var layer,mapExtent=[0,-8192,8192,0],mapMinZoom=1,mapMaxZoom=6,mapMaxResolution=.25,mapMinResolution=Math.pow(2,mapMaxZoom)*mapMaxResolution,tileExtent=[0,-8192,8192,0],crs=L.CRS.Simple;crs.transformation=new L.Transformation(1,-tileExtent[0],-1,tileExtent[3]),crs.scale=function(r){return Math.pow(2,r)/mapMinResolution},crs.zoom=function(r){return Math.log(r*mapMinResolution)/Math.LN2};var map=new L.Map("map",{maxZoom:mapMaxZoom,minZoom:mapMinZoom,crs:crs});layer=L.tileLayer("{z}/{x}/{y}.png",{minZoom:mapMinZoom,maxZoom:mapMaxZoom,tileSize:512,attribution:'Created by <a href="https://github.com/Mo45">Kirill Krasin</a>. &copy; <a href="https://rockstarnews.ru">RockstarNews.ru</a>',noWrap:!0,tms:!1}).addTo(map),map.fitBounds([crs.unproject(L.point(mapExtent[2],mapExtent[3])),crs.unproject(L.point(mapExtent[0],mapExtent[1]))]),L.control.mousePosition().addTo(map);var numMarker=L.Icon.extend({options:{iconSize:[32,37],iconAnchor:[16,37]}}),cardIcon1=new numMarker({iconUrl:"markers/marker_1.png"}),cardIcon2=new numMarker({iconUrl:"markers/marker_2.png"}),cardIcon3=new numMarker({iconUrl:"markers/marker_3.png"}),cardIcon4=new numMarker({iconUrl:"markers/marker_4.png"}),cardIcon5=new numMarker({iconUrl:"markers/marker_5.png"}),cardIcon6=new numMarker({iconUrl:"markers/marker_6.png"}),cardIcon7=new numMarker({iconUrl:"markers/marker_7.png"}),cardIcon8=new numMarker({iconUrl:"markers/marker_8.png"}),cardIcon9=new numMarker({iconUrl:"markers/marker_9.png"}),cardIcon10=new numMarker({iconUrl:"markers/marker_10.png"}),cardIcon11=new numMarker({iconUrl:"markers/marker_11.png"}),cardIcon12=new numMarker({iconUrl:"markers/marker_12.png"}),cardIcon13=new numMarker({iconUrl:"markers/marker_13.png"}),cardIcon14=new numMarker({iconUrl:"markers/marker_14.png"}),cardIcon15=new numMarker({iconUrl:"markers/marker_15.png"}),cardIcon16=new numMarker({iconUrl:"markers/marker_16.png"}),cardIcon17=new numMarker({iconUrl:"markers/marker_17.png"}),cardIcon18=new numMarker({iconUrl:"markers/marker_18.png"}),cardIcon19=new numMarker({iconUrl:"markers/marker_19.png"}),cardIcon20=new numMarker({iconUrl:"markers/marker_20.png"}),cardIcon21=new numMarker({iconUrl:"markers/marker_21.png"}),cardIcon22=new numMarker({iconUrl:"markers/marker_22.png"}),cardIcon23=new numMarker({iconUrl:"markers/marker_23.png"}),cardIcon24=new numMarker({iconUrl:"markers/marker_24.png"}),cardIcon25=new numMarker({iconUrl:"markers/marker_25.png"}),cardIcon26=new numMarker({iconUrl:"markers/marker_26.png"}),cardIcon27=new numMarker({iconUrl:"markers/marker_27.png"}),cardIcon28=new numMarker({iconUrl:"markers/marker_28.png"}),cardIcon29=new numMarker({iconUrl:"markers/marker_29.png"}),cardIcon30=new numMarker({iconUrl:"markers/marker_30.png"}),cardIcon31=new numMarker({iconUrl:"markers/marker_31.png"}),cardIcon32=new numMarker({iconUrl:"markers/marker_32.png"}),cardIcon33=new numMarker({iconUrl:"markers/marker_33.png"}),cardIcon34=new numMarker({iconUrl:"markers/marker_34.png"}),cardIcon35=new numMarker({iconUrl:"markers/marker_35.png"}),cardIcon36=new numMarker({iconUrl:"markers/marker_36.png"}),cardIcon37=new numMarker({iconUrl:"markers/marker_37.png"}),cardIcon38=new numMarker({iconUrl:"markers/marker_38.png"}),cardIcon39=new numMarker({iconUrl:"markers/marker_39.png"}),cardIcon40=new numMarker({iconUrl:"markers/marker_40.png"}),cardIcon41=new numMarker({iconUrl:"markers/marker_41.png"}),cardIcon42=new numMarker({iconUrl:"markers/marker_42.png"}),cardIcon43=new numMarker({iconUrl:"markers/marker_43.png"}),cardIcon44=new numMarker({iconUrl:"markers/marker_44.png"}),cardIcon45=new numMarker({iconUrl:"markers/marker_45.png"}),cardIcon46=new numMarker({iconUrl:"markers/marker_46.png"}),cardIcon47=new numMarker({iconUrl:"markers/marker_47.png"}),cardIcon48=new numMarker({iconUrl:"markers/marker_48.png"}),cardIcon49=new numMarker({iconUrl:"markers/marker_49.png"}),cardIcon50=new numMarker({iconUrl:"markers/marker_50.png"}),cardIcon51=new numMarker({iconUrl:"markers/marker_51.png"}),cardIcon52=new numMarker({iconUrl:"markers/marker_52.png"}),cardIcon53=new numMarker({iconUrl:"markers/marker_53.png"}),cardIcon54=new numMarker({iconUrl:"markers/marker_54.png"});var hash = new L.Hash(map);