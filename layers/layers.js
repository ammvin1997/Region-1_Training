ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([117.428299, 15.486846, 124.356378, 18.829880]);
var wms_layers = [];

var format_r1_0 = new ol.format.GeoJSON();
var features_r1_0 = format_r1_0.readFeatures(json_r1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_r1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_r1_0.addFeatures(features_r1_0);
var lyr_r1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_r1_0, 
                style: style_r1_0,
                interactive: true,
    title: 'r1<br />\
    <img src="styles/legend/r1_0_0.png" /> Adams<br />\
    <img src="styles/legend/r1_0_1.png" /> Agno<br />\
    <img src="styles/legend/r1_0_2.png" /> Agoo<br />\
    <img src="styles/legend/r1_0_3.png" /> Aguilar<br />\
    <img src="styles/legend/r1_0_4.png" /> Alaminos City<br />\
    <img src="styles/legend/r1_0_5.png" /> Alcala<br />\
    <img src="styles/legend/r1_0_6.png" /> Alilem<br />\
    <img src="styles/legend/r1_0_7.png" /> Anda<br />\
    <img src="styles/legend/r1_0_8.png" /> Aringay<br />\
    <img src="styles/legend/r1_0_9.png" /> Asingan<br />\
    <img src="styles/legend/r1_0_10.png" /> Bacarra<br />\
    <img src="styles/legend/r1_0_11.png" /> Bacnotan<br />\
    <img src="styles/legend/r1_0_12.png" /> Badoc<br />\
    <img src="styles/legend/r1_0_13.png" /> Bagulin<br />\
    <img src="styles/legend/r1_0_14.png" /> Balaoan<br />\
    <img src="styles/legend/r1_0_15.png" /> Balungao<br />\
    <img src="styles/legend/r1_0_16.png" /> Banayoyo<br />\
    <img src="styles/legend/r1_0_17.png" /> Bangar<br />\
    <img src="styles/legend/r1_0_18.png" /> Bangui<br />\
    <img src="styles/legend/r1_0_19.png" /> Bani<br />\
    <img src="styles/legend/r1_0_20.png" /> Banna<br />\
    <img src="styles/legend/r1_0_21.png" /> Bantay<br />\
    <img src="styles/legend/r1_0_22.png" /> Basista<br />\
    <img src="styles/legend/r1_0_23.png" /> Batac City<br />\
    <img src="styles/legend/r1_0_24.png" /> Bauang<br />\
    <img src="styles/legend/r1_0_25.png" /> Bautista<br />\
    <img src="styles/legend/r1_0_26.png" /> Bayambang<br />\
    <img src="styles/legend/r1_0_27.png" /> Binalonan<br />\
    <img src="styles/legend/r1_0_28.png" /> Binmaley<br />\
    <img src="styles/legend/r1_0_29.png" /> Bolinao<br />\
    <img src="styles/legend/r1_0_30.png" /> Bugallon<br />\
    <img src="styles/legend/r1_0_31.png" /> Burgos<br />\
    <img src="styles/legend/r1_0_32.png" /> Caba<br />\
    <img src="styles/legend/r1_0_33.png" /> Cabugao<br />\
    <img src="styles/legend/r1_0_34.png" /> Calasiao<br />\
    <img src="styles/legend/r1_0_35.png" /> Candon City<br />\
    <img src="styles/legend/r1_0_36.png" /> Caoayan<br />\
    <img src="styles/legend/r1_0_37.png" /> Carasi<br />\
    <img src="styles/legend/r1_0_38.png" /> Cervantes<br />\
    <img src="styles/legend/r1_0_39.png" /> Currimao<br />\
    <img src="styles/legend/r1_0_40.png" /> Dagupan City<br />\
    <img src="styles/legend/r1_0_41.png" /> Dasol<br />\
    <img src="styles/legend/r1_0_42.png" /> Dingras<br />\
    <img src="styles/legend/r1_0_43.png" /> Dumalneg<br />\
    <img src="styles/legend/r1_0_44.png" /> Galimuyod<br />\
    <img src="styles/legend/r1_0_45.png" /> Gregorio Del Pilar<br />\
    <img src="styles/legend/r1_0_46.png" /> Infanta<br />\
    <img src="styles/legend/r1_0_47.png" /> Labrador<br />\
    <img src="styles/legend/r1_0_48.png" /> Laoac<br />\
    <img src="styles/legend/r1_0_49.png" /> Laoag City<br />\
    <img src="styles/legend/r1_0_50.png" /> Lidlidda<br />\
    <img src="styles/legend/r1_0_51.png" /> Lingayen<br />\
    <img src="styles/legend/r1_0_52.png" /> Luna<br />\
    <img src="styles/legend/r1_0_53.png" /> Mabini<br />\
    <img src="styles/legend/r1_0_54.png" /> Magsingal<br />\
    <img src="styles/legend/r1_0_55.png" /> Malasiqui<br />\
    <img src="styles/legend/r1_0_56.png" /> Manaoag<br />\
    <img src="styles/legend/r1_0_57.png" /> Mangaldan<br />\
    <img src="styles/legend/r1_0_58.png" /> Mangatarem<br />\
    <img src="styles/legend/r1_0_59.png" /> Mapandan<br />\
    <img src="styles/legend/r1_0_60.png" /> Marcos<br />\
    <img src="styles/legend/r1_0_61.png" /> Nagbukel<br />\
    <img src="styles/legend/r1_0_62.png" /> Naguilian<br />\
    <img src="styles/legend/r1_0_63.png" /> Narvacan<br />\
    <img src="styles/legend/r1_0_64.png" /> Natividad<br />\
    <img src="styles/legend/r1_0_65.png" /> Nueva Era<br />\
    <img src="styles/legend/r1_0_66.png" /> Pagudpud<br />\
    <img src="styles/legend/r1_0_67.png" /> Paoay<br />\
    <img src="styles/legend/r1_0_68.png" /> Paoay Lake<br />\
    <img src="styles/legend/r1_0_69.png" /> Pasuquin<br />\
    <img src="styles/legend/r1_0_70.png" /> Piddig<br />\
    <img src="styles/legend/r1_0_71.png" /> Pinili<br />\
    <img src="styles/legend/r1_0_72.png" /> Pozzorubio<br />\
    <img src="styles/legend/r1_0_73.png" /> Pugo<br />\
    <img src="styles/legend/r1_0_74.png" /> Quirino<br />\
    <img src="styles/legend/r1_0_75.png" /> Rosales<br />\
    <img src="styles/legend/r1_0_76.png" /> Rosario<br />\
    <img src="styles/legend/r1_0_77.png" /> Salcedo<br />\
    <img src="styles/legend/r1_0_78.png" /> San Carlos City<br />\
    <img src="styles/legend/r1_0_79.png" /> San Emilio<br />\
    <img src="styles/legend/r1_0_80.png" /> San Esteban<br />\
    <img src="styles/legend/r1_0_81.png" /> San Fabian<br />\
    <img src="styles/legend/r1_0_82.png" /> San Fernando City<br />\
    <img src="styles/legend/r1_0_83.png" /> San Gabriel<br />\
    <img src="styles/legend/r1_0_84.png" /> San Ildefonso<br />\
    <img src="styles/legend/r1_0_85.png" /> San Jacinto<br />\
    <img src="styles/legend/r1_0_86.png" /> San Juan<br />\
    <img src="styles/legend/r1_0_87.png" /> San Manuel<br />\
    <img src="styles/legend/r1_0_88.png" /> San Nicolas<br />\
    <img src="styles/legend/r1_0_89.png" /> San Quintin<br />\
    <img src="styles/legend/r1_0_90.png" /> San Vicente<br />\
    <img src="styles/legend/r1_0_91.png" /> Santa<br />\
    <img src="styles/legend/r1_0_92.png" /> Santa Barbara<br />\
    <img src="styles/legend/r1_0_93.png" /> Santa Catalina<br />\
    <img src="styles/legend/r1_0_94.png" /> Santa Cruz<br />\
    <img src="styles/legend/r1_0_95.png" /> Santa Lucia<br />\
    <img src="styles/legend/r1_0_96.png" /> Santa Maria<br />\
    <img src="styles/legend/r1_0_97.png" /> Santiago<br />\
    <img src="styles/legend/r1_0_98.png" /> Santo Domingo<br />\
    <img src="styles/legend/r1_0_99.png" /> Santo Tomas<br />\
    <img src="styles/legend/r1_0_100.png" /> Santol<br />\
    <img src="styles/legend/r1_0_101.png" /> Sarrat<br />\
    <img src="styles/legend/r1_0_102.png" /> Sigay<br />\
    <img src="styles/legend/r1_0_103.png" /> Sinait<br />\
    <img src="styles/legend/r1_0_104.png" /> Sison<br />\
    <img src="styles/legend/r1_0_105.png" /> Solsona<br />\
    <img src="styles/legend/r1_0_106.png" /> Sual<br />\
    <img src="styles/legend/r1_0_107.png" /> Sudipen<br />\
    <img src="styles/legend/r1_0_108.png" /> Sugpon<br />\
    <img src="styles/legend/r1_0_109.png" /> Suyo<br />\
    <img src="styles/legend/r1_0_110.png" /> Tagudin<br />\
    <img src="styles/legend/r1_0_111.png" /> Tayug<br />\
    <img src="styles/legend/r1_0_112.png" /> Tubao<br />\
    <img src="styles/legend/r1_0_113.png" /> Umingan<br />\
    <img src="styles/legend/r1_0_114.png" /> Urbiztondo<br />\
    <img src="styles/legend/r1_0_115.png" /> Urdaneta City<br />\
    <img src="styles/legend/r1_0_116.png" /> Vigan City<br />\
    <img src="styles/legend/r1_0_117.png" /> Vintar<br />\
    <img src="styles/legend/r1_0_118.png" /> <br />'
        });

lyr_r1_0.setVisible(true);
var layersList = [lyr_r1_0];
lyr_r1_0.set('fieldAliases', {'fid': 'fid', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'Farmer_M': 'Farmer_M', 'Farmer_F': 'Farmer_F', 'LFT_M': 'LFT_M', 'LFT_F': 'LFT_F', 'AEW_M': 'AEW_M', 'AEW_F': 'AEW_F', 'FarmSchool_M': 'FarmSchool_M', 'FarmSchool_F': 'FarmSchool_F', 'LearningSite_M': 'LearningSite_M', 'LearningSite_F': 'LearningSite_F', 'SUC_M': 'SUC_M', 'SUC_F': 'SUC_F', 'TESDA_M': 'TESDA_M', 'TESDA_F': 'TESDA_F', 'ATI_M': 'ATI_M', 'ATI_F': 'ATI_F', 'OPAg_M': 'OPAg_M', 'OPAg_F': 'OPAg_F', 'Researcher_M': 'Researcher_M', 'Researcher_F': 'Researcher_F', 'Other_M': 'Other_M', 'Other_F': 'Other_F', 'HQS_18-30_M': 'HQS_18-30_M', 'HQS_18-30_F': 'HQS_18-30_F', 'HQS_31-45_M': 'HQS_31-45_M', 'HQS_31-45_F': 'HQS_31-45_F', 'HQS_46-59_M': 'HQS_46-59_M', 'HQS_46-59_F': 'HQS_46-59_F', 'HQS_60=>_M': 'HQS_60=>_M', 'HQS_60=>_F': 'HQS_60=>_F', 'PNM_18-30_M': 'PNM_18-30_M', 'PNM_18-30_F': 'PNM_18-30_F', 'PM_31-45_M': 'PM_31-45_M', 'PNM_31-45_F': 'PNM_31-45_F', 'PNM_46-59_M': 'PNM_46-59_M', 'PNM_46-59_F': 'PNM_46-59_F', 'PNM_60=>_M': 'PNM_60=>_M', 'PNM_60=>_F': 'PNM_60=>_F', 'SCPNM_18-30_M': 'SCPNM_18-30_M', 'SCPNM_18-30_F': 'SCPNM_18-30_F', 'SCPNM_31-45_M': 'SCPNM_31-45_M', 'SCPNM_31-45_F': 'SCPNM_31-45_F', 'SCPNM_46-59_M': 'SCPNM_46-59_M', 'SCPNM_46-59_F': 'SCPNM_46-59_F', 'SCPNM_60=>_M': 'SCPNM_60=>_M', 'SCPNM_60=>_F': 'SCPNM_60=>_F', });
lyr_r1_0.set('fieldImages', {'fid': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'Farmer_M': 'Range', 'Farmer_F': 'Range', 'LFT_M': 'Range', 'LFT_F': 'Range', 'AEW_M': 'Range', 'AEW_F': 'Range', 'FarmSchool_M': 'Range', 'FarmSchool_F': 'Range', 'LearningSite_M': 'Range', 'LearningSite_F': 'Range', 'SUC_M': 'Range', 'SUC_F': 'Range', 'TESDA_M': 'Range', 'TESDA_F': 'Range', 'ATI_M': 'Range', 'ATI_F': 'Range', 'OPAg_M': 'Range', 'OPAg_F': 'Range', 'Researcher_M': 'Range', 'Researcher_F': 'Range', 'Other_M': 'Range', 'Other_F': 'Range', 'HQS_18-30_M': 'Range', 'HQS_18-30_F': 'Range', 'HQS_31-45_M': 'Range', 'HQS_31-45_F': 'Range', 'HQS_46-59_M': 'Range', 'HQS_46-59_F': 'Range', 'HQS_60=>_M': 'Range', 'HQS_60=>_F': 'Range', 'PNM_18-30_M': 'Range', 'PNM_18-30_F': 'Range', 'PM_31-45_M': 'Range', 'PNM_31-45_F': 'Range', 'PNM_46-59_M': 'Range', 'PNM_46-59_F': 'Range', 'PNM_60=>_M': 'Range', 'PNM_60=>_F': 'Range', 'SCPNM_18-30_M': 'Range', 'SCPNM_18-30_F': 'Range', 'SCPNM_31-45_M': 'Range', 'SCPNM_31-45_F': 'Range', 'SCPNM_46-59_M': 'Range', 'SCPNM_46-59_F': 'Range', 'SCPNM_60=>_M': 'Range', 'SCPNM_60=>_F': 'Range', });
lyr_r1_0.set('fieldLabels', {'fid': 'hidden field', 'NAME_0': 'hidden field', 'NAME_1': 'hidden field', 'NAME_2': 'header label - visible with data', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'Farmer_M': 'inline label - visible with data', 'Farmer_F': 'inline label - visible with data', 'LFT_M': 'inline label - visible with data', 'LFT_F': 'inline label - visible with data', 'AEW_M': 'inline label - visible with data', 'AEW_F': 'inline label - visible with data', 'FarmSchool_M': 'inline label - visible with data', 'FarmSchool_F': 'inline label - visible with data', 'LearningSite_M': 'inline label - visible with data', 'LearningSite_F': 'inline label - visible with data', 'SUC_M': 'inline label - visible with data', 'SUC_F': 'inline label - visible with data', 'TESDA_M': 'inline label - visible with data', 'TESDA_F': 'inline label - visible with data', 'ATI_M': 'inline label - visible with data', 'ATI_F': 'inline label - visible with data', 'OPAg_M': 'inline label - visible with data', 'OPAg_F': 'inline label - visible with data', 'Researcher_M': 'inline label - visible with data', 'Researcher_F': 'inline label - visible with data', 'Other_M': 'inline label - visible with data', 'Other_F': 'inline label - visible with data', 'HQS_18-30_M': 'inline label - visible with data', 'HQS_18-30_F': 'inline label - visible with data', 'HQS_31-45_M': 'inline label - visible with data', 'HQS_31-45_F': 'inline label - visible with data', 'HQS_46-59_M': 'inline label - visible with data', 'HQS_46-59_F': 'inline label - visible with data', 'HQS_60=>_M': 'inline label - visible with data', 'HQS_60=>_F': 'inline label - visible with data', 'PNM_18-30_M': 'inline label - visible with data', 'PNM_18-30_F': 'inline label - visible with data', 'PM_31-45_M': 'inline label - visible with data', 'PNM_31-45_F': 'inline label - visible with data', 'PNM_46-59_M': 'inline label - visible with data', 'PNM_46-59_F': 'inline label - visible with data', 'PNM_60=>_M': 'inline label - visible with data', 'PNM_60=>_F': 'inline label - visible with data', 'SCPNM_18-30_M': 'inline label - visible with data', 'SCPNM_18-30_F': 'inline label - visible with data', 'SCPNM_31-45_M': 'inline label - visible with data', 'SCPNM_31-45_F': 'inline label - visible with data', 'SCPNM_46-59_M': 'inline label - visible with data', 'SCPNM_46-59_F': 'inline label - visible with data', 'SCPNM_60=>_M': 'inline label - visible with data', 'SCPNM_60=>_F': 'inline label - visible with data', });
lyr_r1_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});