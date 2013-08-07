/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/nls/lt/jsapi",({io:{proxyNotSet:"Nenustatytas esri.config.defaults.io.proxyUrl."},map:{deprecateReorderLayerString:"Map.reorderLayer(/*String*/ id, /*Number*/ index) nebenaudotinas. Naudokite Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",deprecateShiftDblClickZoom:"Map.(enable/disable)ShiftDoubleClickZoom nebenaudotinas. Didinimas naudojant Shift ir dvikartį spustelėjimą nebebus palaikomas."},geometry:{deprecateToScreenPoint:"esri.geometry.toScreenPoint nebenaudotinas. Naudokite esri.geometry.toScreenGeometry.",deprecateToMapPoint:"esri.geometry.toMapPoint nebenaudotinas. Naudokite esri.geometry.toMapGeometry."},layers:{tiled:{tileError:"Nepavyko įkelti išklotinės"},dynamic:{imageError:"Vaizdo įkelti nepavyko"},graphics:{drawingError:"Nepavyko atvaizduoti grafinių elementų "},agstiled:{deprecateRoundrobin:"Konstruktoriaus parametras 'roundrobin' nebenaudotinas. Naudokite parametrą 'tileServers'."},imageParameters:{deprecateBBox:"Savybė 'bbox' nebenaudotina. Naudokite parametrą 'extent'."},FeatureLayer:{noOIDField:"objectIdField nenustatytas [url: ${url}]",fieldNotFound:"laukas '${field}' nerastas sluoksnio 'fields' sąraše [url: ${url}]",noGeometryField:"nerastas 'esriFieldTypeGeometry' tipo laukas sluoksnio 'fields' sąraše. Jei naudojamas žemėlapio paslaugos  sluoksnis, elementai neturės geometrijos [url: ${url}]",invalidParams:"užklausoje yra vienas ar daugiau nepalaikomi parametrai",updateError:"atnaujinant sluoksnį įvyko klaida",createUserSeconds:"Sukūrė ${userId} prieš keletą sekundžių",createUserMinute:"Sukūrė ${userId} prieš minutę",editUserSeconds:"Redagavo ${userId} prieš keletą sekundžių",editUserMinute:"Redagavo ${userId} prieš minutę",createSeconds:"Sukurta prieš keletą sekundžių",createMinute:"Sukurta prieš minutę",editSeconds:"Redaguota prieš keletą sekundžių",editMinute:"Redaguota prieš minutę",createUserMinutes:"Sukūrė ${userId} prieš ${minutes} min.",createUserHour:"Sukūrė ${userId} prieš valandą",createUserHours:"Sukūrė ${userId} prieš ${hours} val.",createUserWeekDay:"Sukūrė ${userId}. Sukūrimo data ir laikas: ${weekDay}, ${formattedTime}",createUserFull:"Sukūrė ${userId}. Sukūrimo data ir laikas: ${formattedDate} ${formattedTime}",editUserMinutes:"Redagavo ${userId} prieš ${minutes} min.",editUserHour:"Redagavo ${userId} prieš valandą",editUserHours:"Redagavo ${userId} prieš ${hours} val.",editUserWeekDay:"Redagavo ${userId}. Keitimo data ir laikas ${weekDay} ${formattedTime}",editUserFull:"Redagavo ${userId}. Keitimo data ir laikas ${formattedDate} ${formattedTime}",createUser:"Sukūrė ${userId}",editUser:"Redagavo ${userId}",createMinutes:"Sukurta prieš ${minutes} min.",createHour:"Sukurta prieš valandą",createHours:"Sukurta prieš ${hours} val.",createWeekDay:"Sukurta ${weekDay} ${formattedTime}",createFull:"Sukurta ${formattedDate} ${formattedTime}",editMinutes:"Redaguota prieš ${minutes} min.",editHour:"Redaguota prieš valandą",editHours:"Redaguota prieš ${hours} val.",editWeekDay:"Redaguota ${weekDay} ${formattedTime}",editFull:"Redaguota ${formattedDate} ${formattedTime}"}},tasks:{gp:{gpDataTypeNotHandled:"Nepalaikomas GP duomenų tipas."},na:{route:{routeNameNotSpecified:"Bent 1 sustojimui elementų saraše nenurodytas 'Maršruto pavadinimas'."}},query:{invalid:"Užklausos atlikti nepavyko. Patikrinkite parametrus."}},toolbars:{draw:{convertAntiClockwisePolygon:"Poligonams, kurių taškų seka suformuota prieš laikrodžio rodyklę, ji bus apsukta pagal laikrodžio rodyklę.",addPoint:"Spustelkite taškui pridėti",addShape:"Paspauskite figūrai pridėti, arba paspaudę pradėkite ir pabaikite atleidę",addMultipoint:"Spustelkite vedinėti taškams",freehand:"Paspauskite pradėti ir atleiskite pabaigti",start:"Spustelkite pradėti piešimą",resume:"Spustelkite piešimui tęsti",complete:"Dvikarčiu spustelėjimu baikite",finish:"Dvikarčiu spustelėjimu pabaikite",invalidType:"Nepalaikomas geometrijos tipas"},edit:{invalidType:"Įrankio aktyvuoti nepavyko. Patikrinkite, ar šis įėankis tinkamas šiam geometrijos tipui.",deleteLabel:"Šalinti"}},virtualearth:{vetiledlayer:{bingMapsKeyNotSpecified:"Turi būti nustatytas BingMapsKey raktas."},vegeocode:{bingMapsKeyNotSpecified:"Turi būti nustatytas BingMapsKey raktas.",requestQueued:"Nepavyko nuskaityti serverio prieigos rakto. Užklausa stovinti eilėje bus apdorota gavus serverio prieigos raktą."}},widgets:{attributeInspector:{NLS_first:"Pirmas",NLS_previous:"Ankstesnis",NLS_next:"Kitas",NLS_last:"Paskutinis",NLS_deleteFeature:"Šalinti",NLS_title:"Redaguoti atributus",NLS_errorInvalid:"Neteisingas",NLS_validationInt:"Reikšmė turi būti sveikas skaičius.",NLS_validationFlt:"Reikšmė turi būti slankiojo kablelio skaičius.",NLS_of:"iš",NLS_noFeaturesSelected:"Pažymėtų objektų nėra"},overviewMap:{NLS_drag:"Tempdami pakeiskite žemėlapio aprėptį",NLS_show:"Rodyti apžvalgos žemėlapį",NLS_hide:"Slėpti apžvalgos žemėlapį",NLS_maximize:"Išskleisti langą",NLS_restore:"Atkurti",NLS_noMap:"Tarp įvesties parametrų nėra 'map'",NLS_noLayer:"pagrindinis žemėlapis neturi pagrindo sluoksnio",NLS_invalidSR:"sluoksnio koordinačių sistema nesuderinama su pagrindinio žemėlapio koordinačių sistema",NLS_invalidType:"nepalaikomas sluoksnio tipas. Palaikomi tipai yra 'TiledMapServiceLayer' ir 'DynamicMapServiceLayer'"},timeSlider:{NLS_first:"Pirmas",NLS_previous:"Ankstesnis",NLS_next:"Kitas",NLS_play:"Paleisti/Pristabdyti",NLS_invalidTimeExtent:"TimeExtent intervalas nenustatytas arba netinkamo formato."},attachmentEditor:{NLS_attachments:"Priedai:",NLS_add:"Pridėti",NLS_none:"Nė vienas",NLS_error:"Įvyko klaida.",NLS_fileNotSupported:"Šis failo tipas nepalaikomas."},directions:{error:{notEnoughStops:"Nurodykite pradžią ir pabaigą.",unknownStop:"Vietos '<name>' surasti nepavyko.",routeTask:"Į šiuos adresus maršruto nustatyti nepavyko.",locator:"Vietos surasti nepavyko.",invalidStopType:"Neteisingas sustojimo tipas",locatorUndefined:"Atvirkštinis geokodavimas neveikia. Nenurodytas lokatoriaus URL.",noAddresses:"Adresai nerasti.",noStops:"Sustojimų pridėjimui nepateikta.",maximumStops:"Pasiektas maksimalus sustojimų skaičius"},time:{minute:"minutė",minutes:"minutės",hour:"valanda",hours:"valandos"},units:{KILOMETERS:{name:"kilometrai",abbr:"km."},METERS:{name:"metrai",abbr:"m,"},MILES:{name:"mylios",abbr:"mi."},NAUTICAL_MILES:{name:"jūrmylės",abbr:"jm."}},showOptions:"Rodyti parinktis",hideOptions:"Slėpti parinktis",findOptimalOrder:"Rasti optimaliausią tvarką",returnToStart:"Grįžti į pradžią",addDestination:"Pridėti pabaigos vietą",viewFullRoute:"Rodyti visą maršrutą",getDirections:"Gauti kryptis",reverseDirections:"Apsukti maršrutus",print:"Spausdinti",printNotes:"Pastabas įrašykite čia",printDisclaimer:"Kryptys yra skirtos tik planavimo tikslams ir jos taikomos  <a href='http://www.esri.com/legal/software-license' target='_blank'>Esri nustatytos naudojimosi sąlygos</a>. Kintančios eismo sąlygos gali įtakoti, dėl ko turimos kryptis gali skirtis ar jų neatitikti, turi būti atsižvelgiama į kelio ženklus ir eismui taikomus apribojimus. Jūs prisiimate visą naudojimo riziką."},editor:{tools:{NLS_attributesLbl:"Atributai",NLS_cutLbl:"Kirpti",NLS_deleteLbl:"Šalinti",NLS_extentLbl:"Aprėptis",NLS_freehandPolygonLbl:"Laisvai piešiamas poligonas",NLS_freehandPolylineLbl:"Laisvai piešiama linija",NLS_pointLbl:"Taškas",NLS_polygonLbl:"Poligonas",NLS_polylineLbl:"Linija",NLS_reshapeLbl:"Performuoti",NLS_selectionNewLbl:"Nauja atranka",NLS_selectionAddLbl:"Pridėti prie atrankos",NLS_selectionClearLbl:"Naikinti atranką",NLS_selectionRemoveLbl:"Atimti iš atrankos",NLS_selectionUnionLbl:"Sąjunga",NLS_autoCompleteLbl:"Užbaigti automatiškai",NLS_unionLbl:"Sąjunga",NLS_rectangleLbl:"Stačiakampis",NLS_circleLbl:"Apskritimas",NLS_ellipseLbl:"Elipsė",NLS_triangleLbl:"Trikampis",NLS_arrowLbl:"Rodyklė",NLS_arrowLeftLbl:"Rodyklė kairėn",NLS_arrowUpLbl:"Rodyklė į viršun",NLS_arrowDownLbl:"Rodyklė žemyn",NLS_arrowRightLbl:"Rodyklė dešinėn",NLS_undoLbl:"Atšaukti",NLS_redoLbl:"Grąžinti"}},Geocoder:{main:{clearButtonTitle:"Išvalyti paiešką",searchButtonTitle:"Ieškoti",geocoderMenuButtonTitle:"Pakeisti geokoderį",geocoderMenuHeader:"Parinkti geokoderį",geocoderMenuCloseTitle:"Uždaryti meniu",untitledGeocoder:"Bevardis geokoderis"},esriGeocoderName:"Esri pasaulio geokoderis"},HistogramTimeSlider:{NLS_range:"Intervalas",NLS_cumulative:"Suvestinis",NLS_play:"Paleisti/Pristabdyti",NLS_invalidTimeExtent:"TimeExtent intervalas nenustatytas arba netinkamo formato.",NLS_overview:"APŽVALGA",NLS_range:"visas intervalas"},legend:{NLS_points:"Taškai",NLS_lines:"Linijos",NLS_polygons:"Poligonai",NLS_creatingLegend:"Kuriama legenda",NLS_noLegend:"Legendos nėra"},popup:{NLS_moreInfo:"Daugiau",NLS_searching:"Ieškoma",NLS_prevFeature:"Ankstesnis elementas",NLS_nextFeature:"Kitas elementas",NLS_close:"Užverti",NLS_prevMedia:"Ankstesnė laikmena",NLS_nextMedia:"Kita laikmena",NLS_noInfo:"Nėra duomenų",NLS_noAttach:"Priedų nėra",NLS_maximize:"Išskleisti langą",NLS_restore:"Atkurti",NLS_zoomTo:"Didinti į",NLS_pagingInfo:"(${index} iš ${total})",NLS_attach:"Priedai"},measurement:{NLS_distance:"Atstumas",NLS_area:"Plotas",NLS_location:"Vieta",NLS_resultLabel:"Matavimo rezultatas",NLS_length_miles:"Mylios",NLS_length_kilometers:"Kilometrai",NLS_length_feet:"Pėdos",NLS_length_meters:"Metrai",NLS_length_yards:"Jardai",NLS_area_acres:"Akrai",NLS_area_sq_miles:"Kv. mylios",NLS_area_sq_kilometers:"Kv. kilometrai",NLS_area_hectares:"Hektarai",NLS_area_sq_yards:"Kv. jardai",NLS_area_sq_feet:"Kv. pėdos",NLS_area_sq_meters:"Kv. metrai",NLS_deg_min_sec:"Laipsniai, Minutės, Sekundės",NLS_decimal_degrees:"Laipsniai",NLS_map_coordinate:"Žemėlapio koordinatė",NLS_longitude:"Ilguma",NLS_latitude:"Platuma"},bookmarks:{NLS_add_bookmark:"Pridėti adresyno žymę",NLS_new_bookmark:"Bevardė",NLS_bookmark_edit:"Redaguoti",NLS_bookmark_remove:"Pašalinti"},print:{NLS_print:"Spausdinti",NLS_printing:"Spausdinama",NLS_printout:"Spaudinys"},templatePicker:{creationDisabled:"Elementus kūrimo galimybė išjungta visiems sluoksniams.",loading:"Įkeliama.."}},arcgis:{utils:{baseLayerError:"Pagrindo sluoksnio įkelti nepavyko",geometryServiceError:"Norėdami atverti interneto žemėlapį, nurodykite geometrijos paslaugą."}},identity:{lblItem:"elementas",title:"Prisijungti",info:"Prisijunkite, kad gauti prieeigą prie šio elemento serveryje ${server} ${resource}",lblUser:"Paskyros vardas:",lblPwd:"Slaptažodis:",lblOk:"Gerai",lblSigning:"Jungiamasi...",lblCancel:"Atsisakyti",errorMsg:"Netinkamas paskyros vardas arba slaptažodis. Pabandykite iš naujo.",invalidUser:"Įvestas neteisingas paskyros vardas arba slaptažodis.",forbidden:"Paskyros vardas ir slaptažodis yra teisingi, tačiau Jūs neturite teisių naudotis šiuo resursu.",noAuthService:"Autentifikacijos paslauga nepasiekiama."},common:{cancel:"Atsisakyti",ok:"Gerai",create:"Sukurti",close:"Užverti",done:"Gerai",apply:"Vykdyti",remove:"Pašalinti",open:"Atverti",edit:"Redaguoti",share:"Bendrinti",save:"Įrašyti",help:"Pagalba",warning:"Įspėjimas",deleteLabel:"Šalinti",titleLabel:"Antraštė:",newLabel:"Naujas",arcgis:"ArcGIS",previous:"Ankstesnis",submit:"Išsiųsti",next:"Kitas",yesLabel:"Taip",noLabel:"Ne",errorTitle:"Klaida",upload:"Išsiųsti",sum:"Suma",minimum:"Minimumas",maximum:"Maksimumas",average:"Vidurkis",standardDev:"Standartinis nuokrypis",statistic:"Statistinis",attribute:"Atributas",selectAttribute:"Parinkti atributą",runAnalysis:"Vykdyti analizę",oneLabel:"1.",twoLabel:"2.",threeLabel:"3.",fourLabel:"4.",outputnameMissingMsg:"Reikalingas išvesties pavadinimas",miles:"Mylia(-os)",kilometers:"Kilometras(-ai)",meters:"Metras(-ai)",feet:"Pėda(-os)",degree:"Dešimtainis laipsnis(-ai)",inches:"Colis(-ai)",nautMiles:"Jūrmylė(-ės)",pointsUnit:"Taškas(-ai)",yards:"Jardas(-ai)",comingSoonLabel:"Jau greitai!"},analysisTools:{performAnalysis:"Atlikti analizę",summarizeData:"Sumuoti duomenis",findLocations:"Rasti vietas",aggregateTool:"Agreguoti taškus",bufferTool:"Duomenims kurti buferius",dataEnrichment:"Data Enrichment",analyzePatterns:"Analizuoti požymius",useProximity:"Naudoti gretimybes",manageData:"Valdyti duomenis",aggregateToolName:"Agreguoti taškus",bufferToolName:"Kurti buferius",summarizeWithin:"Sumuoti viduje",sumnearby:"Sumuoti šalia",createBuffers:"Kurti buferius",driveTimes:"Sukurti Važiavimo Laiko poligonus",findExistingLocations:"Rasti esamas vietas",findNewLocations:"Nustatyti naujas vietas",geoenrichLayer:"Pagerinti elementus",findRoute:"Rasti maršrutą",findClosestFacility:"Rasti artimiausią",generateFleetPlan:"Sudaryti autoparko maršrutų planą",findHotSpots:"Rasti aktyvius židinius",createDensitySurface:"Sukurti tankio paviršių",correlationReporter:"Peržiūrėti koreliacijas",createInterpolatedSurface:"Sukurti paviršių",attributeCalculator:"Atributų skaičiuotuvas",overlayLayers:"Perdengti sluoksnius",mergeLayers:"Sulieti sluoksnius",dissolveBoundaries:"Tirpdyti ribas",extractData:"Ištraukti duomenis",orgUsrMsg:"Norėdami vykdyti šią paslaugą turite būti organizacijos nariu.",pubRoleMsg:"Jūsų paskyra nepriskirta Publikuotojo rolei.",servNameExists:"Tokiu vardu rezultatas jau yra. Pervadinkite rezultatą ir iš naujo išsiųskite analizę",outputLayerLabel:"Rezultatų sluoksnio vardas",outputFileName:"Išvesties failo vardas",emptyResultInfoMsg:"The result of your analysis did not return any features. No layer will be created."},aggregatePointsTool:{aggregateDefine:"Suskaičiuoti <b>${layername}</b> viduje",outputLayerName:"Agregavimas iš ${pointlayername} į ${polygonlayername}",groupByLabel:"Pasirinkite atributą pagal kurį bus grupuojama (nebūtinas)",itemDescription:"Elementų paslauga sukurta kaip Agreguoti taškus rezultatas. Taškai iš csv failo ${pointlayername} buvo agreguoti į${polygonlayername}",itemTags:"Analizė, Agreguoti taškus, ${pointlayername}, ${polygonlayername}",itemSnippet:"Analizės elementų paslauga sukurta naudojant  Agreguoti taškus",removeAttrStats:"Pašalinti atributo statistiką",keepPolygonLabel:"Palikti poligonus neturinčius taškų",addStatsLabel:"Pridėti statistiką(nebūtinas)",chooseAreaLabel:"Pasirinkite plotą"},findHotSpotsTool:{hotspotsPolyDefine:"Analizuoti <b>${layername}</b> statistiškai reikšmingų aktyvių ir pasyvių židinių išskyrimui ",hotspotsPointDefine:"Analizuoti <b>${layername}</b>  statistiškai reikšmingų aktyvių ir pasyvių židinių išskyrimui ",fieldLabel:"naudojant arba nenaudojant analizės lauko",noAnalysisField:"Nenurodytas analizės laukas",hotspots:"Aktyvios židiniai",outputLayerName:"Aktyvųs židiniai ${layername}",Options:"Parinktys",defineBoundingLabel:"Nurodykite galimas įvykių vietas",provideAggLabel:"Nurodykite plotus pagal kuriuos bus sumuojami įvykiai",defaultBoundingOption:"Pasirinkite ribojančius plotus",defaultAggregationOption:"Nurodykite plotus pagal kuriuos bus sumuojama",itemDescription:"Elementų paslauga sukurta įvykdžius Rasti aktyvius židinius.",itemTags:"Analizė, Aktyvūs židiniai, ${layername}, ${fieldname}",itemSnippet:"Analizės elementų paslauga sukurta įvykdžius Rasti aktyvius židinius",chooseAttributeLabel:"Pasirinkite analizės lauką",blayerName:"Nupieštos ribos"},overlayLayersTool:{overlayDefine:"Perdanga <b>${layername}</b> su",chooseOverlayLayer:"Pasirinkite perdangos sluoksnį",chooseOverlayMethod:"Pasirinkite perdangos būdą",itemDescription:"Elementų paslauga sukurta įvykdžius Perdengti sluoksnius sprendinį.",itemTags:"Analizė, Perdengti sluoksnius, ${layername}",itemSnippet:"Analizės elementų paslauga sukurta įvykdžius Perdengti sluoksnius",unionOutputLyrName:"sąjunga tarp ${layername} ir ${overlayname}",intersectOutputLyrName:"sankirta tarp ${layername} ir ${overlayname}",eraseOutputLyrName:"ištrynimas ${layername} su ${overlayname}",overlayLayerPolyMsg:"Sąjungos perdangai Perdangos sluoksnis turi būti poligonai",notSupportedEraseOverlayMsg:"Šis perdangos sluoksnis nepalaikomas Ištrynimo perdangai. Persijungiama į Sukirtimų perdangą.",intersect:"Sukirtimas",union:"Sąjunga",erase:"Ištrinti"},bufferTool:{bufferDefine:"Kurti buferius iš <b>${layername}</b>",outputLayerName:"Buferis iš ${layername}",sizeLabel:"Nurodykite buferio dydį",sizeHelp:"Norint sukurti kartotinius buferį, atstumus atskirkite kableliu (2, 3, 5.5).",typeLabel:"Buferio tipas",resultLabel:"Rezultatų sluoksnio vardas",optionsLabel:"Parinktys",itemDescription:"Elementų paslauga sukurta įvykdžius Kurti Buferius elementams sprendinį. Įvesčiai ${layername} buvo sukurtas buferis pagal ${distance_field} ${units}",itemTags:"Kurti Buferius, ${layername}",itemSnippet:"Analizės elementų paslauga sukurta panaudojus Kurti Buferius",overlap:"Persidengimai",dissolve:"Tirpdyti",include:"Įtraukti",exclude:"Pašalinti",around:"Aplink",sideType:"Kraštinės tipas",endType:"Pabaigos tipas",left:"Kairė",right:"Dešinė",round:"Apskritas",flat:"Plokščias",multipleDistance:"Kartotiniai buferių atstumai turi būti",rings:"Žiedai",disks:"Plokštės",areaofInputPoly:"Įvesties poligonų plotas sukurtuose buferių poligonuose",distanceMsg:"Galimos tik skaitinės reikšmės",distance:"Atstumas",field:"Laukas"},driveTimes:{toolDefine:"Sukurti plotus aplink <b>${layername}</b>",outputLayerName:"Važiuoti iš ${layername}: ---",measureLabel:"Matuoti:",measureHelp:"Kiekvieno taško kartotiniams plotams gauti, įveskite dydžius atskirtus tarpu (2 3.5 5)",areaLabel:"Plotai iš skirtingų taškų:",trafficLabel:"Naudoti eismo sąlygas (neprivaloma)",resultLabel:"Rezultatų sluoksnio vardas",itemDescription:"Elementų paslauga sukurta įvykdžius sprendinį Sukurti Važiavimo Laikus.",itemTags:"Važiavimo laikai, ${layername}",itemSnippet:"Analizės elementų paslauga sukurta panaudojus Sukurti Važiavimo Laikus."},extractDataTool:{layersToExtract:"Išrenkami sluoksniai",studyArea:"Pasirinkta teritorija",outputDataFormat:"Išvesties duomenų formatas",filegdb:"Failinė geoduomenų bazė",shpFile:"Shape failas",lyrpkg:"Sluoksnių paketas",selectFtrs:"Išrinkti elementus",clipFtrs:"Apkirpti elementus",sameAsDisplay:"Taip pat, kaip rodoma",sameAsLayer:"Taip pat kaip ${layername}",outputfileName:"IšvestiesVardas.zip",itemDescription:"Failas sukurtas įvykdžius sprendinį Išrinkti Duomenis.",itemTags:"Analizė, Išrinkti Duomenis",itemSnippet:"Analizės failas sukurtas panaudojus Išrinkti Duomenis"}}));