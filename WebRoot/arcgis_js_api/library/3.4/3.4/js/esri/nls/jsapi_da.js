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
define("esri/nls/jsapi_da",{"dijit/form/nls/validate":{"rangeMessage":"Værdien er uden for intervallet.","invalidMessage":"Den angivne værdi er ugyldig.","missingMessage":"Værdien er påkrævet."},"esri/nls/jsapi":{"identity":{"noAuthService":"Kan ikke få adgang til godkendelsestjenesten.","lblCancel":"Annuller","lblUser":"Brugernavn:","title":"Log ind","forbidden":"Brugernavn og adgangskode er gyldigt, men du har ikke adgang til denne resource.","errorMsg":"Ugyldigt brugernavn/adgangskode. Prøv igen.","lblItem":"element","lblOk":"OK","info":"Log ind for at få adgang til elementet på  ${server} ${resource}","lblSigning":"Logger ind...","invalidUser":"Indtastet brugernavn eller adgangskode er ikke korrekt.","lblPwd":"Adgangskode:"},"map":{"deprecateShiftDblClickZoom":"Map.(enable/disable)ShiftDoubleClickZoom ikke tilgængelig. Shift-Double-Click zoom ikke understøttet.","deprecateReorderLayerString":"Map.reorderLayer(/*String*/ id, /*Number*/ index) ikke tilgængelig. Brug Map.reorderLayer(/*Layer*/ layer, /*Number*/ index)."},"virtualearth":{"vetiledlayer":{"bingMapsKeyNotSpecified":"BingMapsKey skal angives."},"vegeocode":{"bingMapsKeyNotSpecified":"BingMapsKey skal angives.","requestQueued":"Servertoken kunne ikke findes. Sætter forespørgsel i kø, indtil servertoken er fundet."}},"bufferTool":{"sizeHelp":"Du kan oprette flere buffere ved at angive afstande adskilt af mellemrum (2 3 5.5).","typeLabel":"Buffertype","disks":"Disks","round":"Rundt","right":"Højre","distanceMsg":"Kun numeriske værdier er tilladt","itemDescription":"Feature Service genereret fra kørsel af Buffer Features-løsning. Input fra ${layername} blev brugt som buffer af ${distance_field} ${units}","resultLabel":"Navn på resultatlag","around":"Omkring","sideType":"Sidetype","flat":"Flad","multipleDistance":"Flere afstandsbuffere skal være","outputLayerName":"Buffer af ${layername}","rings":"Ringe","sizeLabel":"Indtast bufferstørrelse","itemTags":"Buffer, ${layername}","areaofInputPoly":"Område for inputpolygoner i bufferpolygoner","left":"Venstre","bufferDefine":"Opret buffere fra <b>${layername}</b>","distance":"Afstand","itemSnippet":"Analysis Feature Service genereret fra Buffer","endType":"Afslutningstype","field":"Felt","optionsLabel":"Indstillinger","include":"Medtag","exclude":"Udeluk","dissolve":"Opløs","overlap":"Overlap"},"widgets":{"attributeInspector":{"NLS_title":"Rediger attributter","NLS_validationFlt":"Værdien skal være med flydende komma","NLS_noFeaturesSelected":"Ingen funktioner valgt","NLS_validationInt":"Værdien skal være et helt tal","NLS_next":"Næste","NLS_errorInvalid":"Ugyldig","NLS_previous":"Forrige","NLS_first":"Først","NLS_deleteFeature":"Slet","NLS_of":"af","NLS_last":"Sidst"},"legend":{"NLS_polygons":"Polygoner","NLS_lines":"Linjer","NLS_noLegend":"Ingen forklaring","NLS_points":"Punkter","NLS_creatingLegend":"Opretter forklaring"},"directions":{"getDirections":"Hent kørselsvejledning","findOptimalOrder":"Find optimal rækkefølge","showOptions":"Vis indstillinger","reverseDirections":"Modsat vejledning","addDestination":"Tilføj destination","returnToStart":"Tilbage til start","error":{"maximumStops":"Det maksimale antal stop er nået","notEnoughStops":"Angiv et udgangspunkt og en destination.","invalidStopType":"Ugyldig type stop","locator":"Sted kunne ikke findes.","noAddresses":"Ingen adresser blev returneret.","unknownStop":"Sted '<name>' kunne ikke findes.","noStops":"Der blev ikke angivet et antal stop, som skulle tilføjes.","routeTask":"Kan ikke vise vej til disse adresser.","locatorUndefined":"Kan ikke vende geokodning. Lokalisator-URL er ikke defineret."},"hideOptions":"Skjul indstillinger","units":{"KILOMETERS":{"name":"kilometer","abbr":"km"},"MILES":{"name":"miles","abbr":"mi"},"METERS":{"name":"meter","abbr":"m"},"NAUTICAL_MILES":{"name":"sømil","abbr":"nm."}},"time":{"minute":"minut","minutes":"minutter","hour":"time","hours":"timer"},"printNotes":"Indtast noter her","viewFullRoute":"Zoom til fuld rute","printDisclaimer":"Kørselsvejledninger stilles udelukkende til rådighed af planlægningshensyn og er underlagt <a href='http://www.esri.com/legal/software-license' target='_blank'>Esri's Vilkår for brug</a>. Der kan forekommme dynamiske vejforhold, som kan forårsage forskelle i nøjagtigheden i forhold til dine egne kørselsvejledninger, og der skal tages hensyn til dette sammen med hensynet til vejskilte og juridiske begrænsninger. Du påtager dig den fulde risiko ved brugen.","print":"Udskriv"},"timeSlider":{"NLS_previous":"Forrige","NLS_play":"Afspil/Pause","NLS_next":"Næste","NLS_invalidTimeExtent":"TimeExtent ikke angivet eller i ukorrekt format.","NLS_first":"Først"},"templatePicker":{"loading":"Indlæser..","creationDisabled":"Funktionsoprettelse er deaktiveret for alle lag"},"editor":{"tools":{"NLS_pointLbl":"Punkt","NLS_reshapeLbl":"Omform","NLS_arrowLeftLbl":"Pil til venstre","NLS_triangleLbl":"Triangel","NLS_autoCompleteLbl":"Auto-fuldfør","NLS_arrowDownLbl":"Pil nedad","NLS_selectionRemoveLbl":"Fjern fra markering","NLS_unionLbl":"Forening","NLS_freehandPolylineLbl":"Frihåndspolylinje","NLS_rectangleLbl":"Rektangel","NLS_ellipseLbl":"Ellipse","NLS_attributesLbl":"Atributter","NLS_arrowUpLbl":"Pil opad","NLS_arrowRightLbl":"Pil til højre","NLS_undoLbl":"Fortryd","NLS_arrowLbl":"Pil","NLS_cutLbl":"Klip","NLS_polylineLbl":"Polylinje","NLS_selectionClearLbl":"Ryd markering","NLS_polygonLbl":"Polygon","NLS_selectionUnionLbl":"Forening","NLS_freehandPolygonLbl":"Frihåndspolygon","NLS_deleteLbl":"Slet","NLS_extentLbl":"Område","NLS_selectionNewLbl":"Ny markering","NLS_circleLbl":"Cirkel","NLS_redoLbl":"Gentag","NLS_selectionAddLbl":"Føj til markering"}},"attachmentEditor":{"NLS_error":"Der opstod en fejl","NLS_attachments":"Vedhæftet:","NLS_none":"Ingen","NLS_add":"Tilføj","NLS_fileNotSupported":"Denne filtype understøttes ikke."},"overviewMap":{"NLS_invalidSR":"rum-reference på det givne lag er ikke kompatibel med hovedkortet","NLS_invalidType":"lag-type ikke understøttet. Gyldige typer er 'TiledMapServiceLayer' og 'DynamicMapServiceLayer'","NLS_noMap":"'map' ikke fundet i input-parametre","NLS_hide":"Skjul kortoverblik","NLS_drag":"Træk for at ændre kortområdet","NLS_maximize":"Maksimér","NLS_noLayer":"hovedkort har ikke noget basislag","NLS_restore":"Gendan","NLS_show":"Vis kortoverblik"},"measurement":{"NLS_length_kilometers":"Kilometer","NLS_area_sq_miles":"Kvadrat-miles","NLS_length_yards":"Yards","NLS_distance":"Afstand","NLS_area_acres":"Acres","NLS_resultLabel":"Måleresultat","NLS_length_miles":"Miles","NLS_area_hectares":"Hektar","NLS_deg_min_sec":"DMS","NLS_area":"Område","NLS_area_sq_meters":"Kvadratmeter","NLS_latitude":"Breddegrad","NLS_area_sq_kilometers":"Kvadratkilometer","NLS_area_sq_feet":"Kvadrat-fod","NLS_longitude":"Længdegrad","NLS_location":"Lokation","NLS_decimal_degrees":"Grader","NLS_length_feet":"Fod","NLS_area_sq_yards":"Kvadrat-yards","NLS_length_meters":"Meter","NLS_map_coordinate":"Kortkoordinater"},"bookmarks":{"NLS_add_bookmark":"Tilføj bogmærke","NLS_new_bookmark":"Uden titel","NLS_bookmark_edit":"Rediger","NLS_bookmark_remove":"Fjern"},"Geocoder":{"main":{"geocoderMenuButtonTitle":"Skift geokodning","untitledGeocoder":"Geokodning uden titel","clearButtonTitle":"Ryd søgning","searchButtonTitle":"Søg","geocoderMenuCloseTitle":"Luk menu","geocoderMenuHeader":"Vælg geokodning"},"esriGeocoderName":"Esri Verdensgeokodning"},"popup":{"NLS_attach":"Vedhæftede filer","NLS_nextFeature":"Næste objekt","NLS_moreInfo":"Flere oplysninger","NLS_searching":"Søger","NLS_maximize":"Maksimér","NLS_noAttach":"Ingen vedhæftede filer","NLS_noInfo":"Ingen oplysninger tilgængelige","NLS_pagingInfo":"(${index} af ${total})","NLS_restore":"Gendan","NLS_prevFeature":"Forrige objekt","NLS_nextMedia":"Næste medie","NLS_close":"Luk","NLS_zoomTo":"Zoom til","NLS_prevMedia":"Forrige medie"},"HistogramTimeSlider":{"NLS_play":"Afspil/Pause","NLS_range":"komplet område","NLS_invalidTimeExtent":"TimeExtent ikke angivet eller i ukorrekt format.","NLS_overview":"OVERSIGT","NLS_cumulative":"Kumulative"},"print":{"NLS_printing":"Udskriver","NLS_printout":"Udskrift","NLS_print":"Udskriv"}},"toolbars":{"draw":{"addShape":"Klik for at tilføje en form, eller tryk ned for at starte og slip for at afslutte","finish":"Dobbeltklik for at afslutte","invalidType":"Ikke-understøttet geometritype","resume":"Klik for at fortsætte med at tegne","addPoint":"Klik for at tilføje et punkt","freehand":"Tryk ned for at begynde, og slip for at afslutte","complete":"Dobbeltklik for at færdiggøre","start":"Klik for at begynde at tegne","addMultipoint":"Klik for at begynde at tilføje punkter","convertAntiClockwisePolygon":"Polygoner, der er tegnet mod uret bliver vendt, så de er tegnet med uret."},"edit":{"invalidType":"Kan ikke aktivere værktøjet. Kontrollér, om værktøjet kan bruges på den angivne geometritype.","deleteLabel":"Slet"}},"tasks":{"gp":{"gpDataTypeNotHandled":"GP-datatype kan ikke behandles."},"query":{"invalid":"Kan ikke udføre forespørgsel. Kontrollér parametre."},"na":{"route":{"routeNameNotSpecified":"'RouteName' ikke specificeret for mindst 1 af flere stop i FeatureSet."}}},"driveTimes":{"measureLabel":"Mål:","toolDefine":"Opret områder omkring <b>${layername}</b>","itemTags":"Kørselstider, ${layername}","itemSnippet":"Analysis Feature Service genereret fra Create Drive Times","measureHelp":"Indtast størrelser adskilt af mellemrum (2 3.5 5) for at sende flere områder for hvert punkt","itemDescription":"Feature Service genereret fra kørsel af løsningen Create Drive Times.","areaLabel":"Områder fra forskellige punkter:","trafficLabel":"Brug trafikforhold (valgfrit)","resultLabel":"Navn på resultatlag","outputLayerName":"Kør fra ${layername}: ---"},"analysisTools":{"aggregateTool":"Aggregér punkter","createDensitySurface":"Opret tæthedsflade","sumnearby":"Opsummér i nærheden","attributeCalculator":"Attributberegner","createBuffers":"Opret buffere","extractData":"Udtræk data","dataEnrichment":"Data Enrichment","dissolveBoundaries":"Opløs grænser","analyzePatterns":"Analysér mønstre","findClosestFacility":"Find nærmeste","mergeLayers":"Flet lag","summarizeWithin":"Opsummér inden for","pubRoleMsg":"Din onlinekonto er ikke blevet tildelt  en udgiverrolle.","findLocations":"Find steder","findExistingLocations":"Find eksisterende steder","bufferTool":"Bufferdata","emptyResultInfoMsg":"The result of your analysis did not return any features. No layer will be created.","summarizeData":"Opsummér data","generateFleetPlan":"Generér flåderuteplan","servNameExists":"Du har allerede et resultat med dette navn. Omdøb dit resultat, og send analysen igen.","findHotSpots":"Find hotspots","performAnalysis":"Udfør analyse","createInterpolatedSurface":"Opret flade","driveTimes":"Opret polygoner med køretid","overlayLayers":"Overlay af lag","outputLayerLabel":"Navn på resultatlag","bufferToolName":"Opret buffere","correlationReporter":"Udforsk korrelationer","geoenrichLayer":"Berig objekter","findRoute":"Find rute","findNewLocations":"Udled nye steder","useProximity":"Anvend nærhed","manageData":"Håndtér data","orgUsrMsg":"Du skal være medlem af en organisation for at køre denne tjeneste.","aggregateToolName":"Aggregér punkter","outputFileName":"Output-filnavn"},"common":{"feet":"Fod","nautMiles":"Sømil","apply":"Anvend","errorTitle":"Fejl","statistic":"Statistik","titleLabel":"Titel:","fourLabel":"4.","newLabel":"Ny","close":"Luk","kilometers":"Kilometer","previous":"Forrige","share":"Del","runAnalysis":"Kør analyse","yards":"Yard(s)","yesLabel":"Ja","oneLabel":"1.","ok":"OK","maximum":"Maksimum","miles":"Mil","attribute":"Attribut","help":"Hjælp","comingSoonLabel":"Kommer snart!","deleteLabel":"Slet","outputnameMissingMsg":"Output-navn er påkrævet","minimum":"Minimum","remove":"Fjern","inches":"Tomme(r)","upload":"Overfør","open":"Åbn","submit":"Send","save":"Gem","edit":"Rediger","average":"Gennemsnit","selectAttribute":"Vælg attribut","sum":"Sum","standardDev":"Standardafvigelse","threeLabel":"3.","done":"Udført","twoLabel":"2.","create":"Opret","warning":"Advarsel","cancel":"Annuller","noLabel":"Nej","meters":"Meter","arcgis":"ArcGIS","pointsUnit":"Punkt(er)","next":"Næste","degree":"Decimalgrad(er)"},"extractDataTool":{"selectFtrs":"Vælg objekter","outputfileName":"OutputName.zip","itemTags":"Analyse, Extract Data","itemSnippet":"Analysis File-element genereret fra Extract Data","clipFtrs":"Klip-features","sameAsLayer":"Samme som ${layername}","itemDescription":"Fil genereret fra kørsel af Extract Data-løsningen.","lyrpkg":"Lagpakke","outputDataFormat":"Outputdataformat","sameAsDisplay":"Samme som Vis","layersToExtract":"Lag, der skal hentes","studyArea":"Undersøgelsesområde","filegdb":"Filgeodatabase","shpFile":"Shape-fil"},"aggregatePointsTool":{"removeAttrStats":"Fjern attributstatistik","itemTags":"Analyse, Aggregér punkter, ${pointlayername}, ${polygonlayername}","groupByLabel":"Vælg en attribut at gruppere efter (valgfrit)","itemSnippet":"Analyse-featuretjeneste genereret på baggrund af Aggregér punkter","chooseAreaLabel":"Vælg område","aggregateDefine":"Tæl <b>${layername}</b> inden for","itemDescription":"Featuretjeneste, som er genereret ved at køre Aggregér punkter-løsninger. Punkter fra en csv-fil ${pointlayername} blev aggregeret til ${polygonlayername}","keepPolygonLabel":"Bevar polygoner uden punkter","outputLayerName":"Aggregering af ${pointlayername} til ${polygonlayername}","addStatsLabel":"Tilføj statistik (valgfrit)"},"io":{"proxyNotSet":"esri.config.defaults.io.proxyUrl er ikke angivet."},"layers":{"FeatureLayer":{"createUserHours":"Oprettet af ${userId} for ${hours} timer siden","editUserMinutes":"Redigeret af ${userId} for ${minutes} minutter siden","editHour":"Redigeret for en time siden","editMinute":"Redigeret for et minut siden","editUserMinute":"Redigeret af ${userId} for et minut siden","editSeconds":"Redigeret for få sekunder siden","createUserFull":"Oprettet af ${userId} d. ${formattedDate} kl. ${formattedTime}","editWeekDay":"Redigeret ${weekDay} kl. ${formattedTime}","createUserMinutes":"Oprettet af ${userId} for ${minutes} minutters siden","createUserHour":"Oprettet af ${userId} for en time siden","editUserSeconds":"Redigeret af ${userId} for få sekunder siden","editUserWeekDay":"Redigeret af ${userId} ${weekDay} kl.  ${formattedTime}","editUserFull":"Redigeret af ${userId} d. ${formattedDate} kl. ${formattedTime}","createFull":"Oprettet d. ${formattedDate} kl.  ${formattedTime}","editUser":"Redigeret af ${userId}","noOIDField":"objectIdField er ikke angivet [url: ${url}]","editUserHour":"Redigeret af ${userId} for en time siden","createHour":"Oprettet for en time siden","updateError":"der opstod en fejl under opdatering af lagene","createUserWeekDay":"Oprettet af ${userId} ${weekDay} kl. ${formattedTime}","invalidParams":"forespørgsel indeholder en eller flere ikke-understøttede parametre","editHours":"Redigeret for ${hours} timer siden","noGeometryField":"Kan ikke finde et felt af typen 'esriFieldTypeGeometry' i laget  'fields' information. Hvis du bruger et kortservicelag, har funktionerne ikke geometri[url: ${url}]","createUserMinute":"Oprettet af ${userId} for et minut siden","createUser":"Oprettet af ${userId}","createMinute":"Oprettet for et minut siden","createMinutes":"Oprettet for ${minutes} minutter siden","fieldNotFound":"Kan ikke finde feltet '${field}' i laget 'fields' information [url: ${url}]","createHours":"Oprettet for ${hours} timer siden","editUserHours":"Redigeret af ${userId} for ${hours} timer siden","editMinutes":"Redigeret for ${minutes} minutter siden","createSeconds":"Oprettet for få sekunder siden","createUserSeconds":"Oprettet af ${userId} for få sekunder siden","createWeekDay":"Oprettet ${weekDay} kl. ${formattedTime}","editFull":"Redigeret d. ${formattedDate} kl. ${formattedTime}"},"dynamic":{"imageError":"Kan ikke indlæse billede"},"tiled":{"tileError":"Kan ikke indlæse vindue"},"imageParameters":{"deprecateBBox":"Egenskab 'bbox'ikke tilgængelig. Brug property 'extent'."},"agstiled":{"deprecateRoundrobin":"Konstruktørvalg 'roundrobin' ikke tilgængelig. Brug 'tileServers'."},"graphics":{"drawingError":"Kan ikke tegne grafik "}},"findHotSpotsTool":{"hotspotsPointDefine":"Analysér <b>${layername}</b>  for at finde statistisk signifikante hotspots og coldspots ","itemTags":"Analyse, Hotspots, ${layername}, ${fieldname}","itemSnippet":"Analyse-featuretjeneste genereret på baggrund af Find hotspots","defineBoundingLabel":"Definér, hvor hændelser er mulige","blayerName":"Tegnede grænser","Options":"Indstillinger","hotspots":"Hotspots","defaultAggregationOption":"Vælg aggregeringsområder","itemDescription":"Featuretjeneste, som er genereret gennem kørsel af Find hotspots-løsning.","chooseAttributeLabel":"Vælg et analysefelt","provideAggLabel":"Angiv aggregeringsområder for samlede hændelser","hotspotsPolyDefine":"Analysér <b>${layername}</b>  for at finde statistisk signifikante hotspots og coldspots for ","defaultBoundingOption":"Vælg afgrænsningsområder","fieldLabel":"med eller uden et analysefelt","noAnalysisField":"Intet analysefelt","outputLayerName":"Hotspots ${layername}"},"geometry":{"deprecateToMapPoint":"esri.geometry.toMapPoint ikke tilgængelig. Brug esri.geometry.toMapGeometry.","deprecateToScreenPoint":"esri.geometry.toScreenPoint ikke tilgængelig. Brug Use esri.geometry.toScreenGeometry."},"overlayLayersTool":{"itemTags":"Analyse, Overlay-lag, ${layername}","unionOutputLyrName":"Forening af ${layername} og ${overlayname}","itemSnippet":"Analysis Feature Service genereret af Overlay-lag","eraseOutputLyrName":"slet ${layername} med ${overlayname}","chooseOverlayMethod":"Vælg overlay-metode","itemDescription":"Feature Service genereret ud fra kørsel af løsningen Overlay-lag.","union":"Forening","overlayDefine":"Overlay <b>${layername}</b> med","intersectOutputLyrName":"gennemskæring af ${layername} og ${overlayname}","overlayLayerPolyMsg":"Overlay-laget bør være et polygonlag for Union-overlay","notSupportedEraseOverlayMsg":"Dette overlay-lag understøttes ikke til Erase-overlay. Standard erIntersect-overlay.","intersect":"Gennemskær","erase":"Slet","chooseOverlayLayer":"Vælg overlay-lag"},"arcgis":{"utils":{"geometryServiceError":"Angiv en geometritjeneste for at åbne Web Map","baseLayerError":"Kan ikke inblæse basiskortlag"}}},"dojo/cldr/nls/gregorian":{"days-standAlone-short":["sø","ma","ti","on","to","fr","lø"],"months-format-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"ugedag","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"E d/M/y","dateFormatItem-MMMEd":"E d. MMM","eraNarrow":["f.Kr.","e.Kr."],"days-format-short":["sø","ma","ti","on","to","fr","lø"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d. MMM y","months-format-wide":["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"PM","dateFormat-full":"EEEE 'den' d. MMMM y","dateFormatItem-Md":"d/M","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateFormatItem-yMd":"d/M/y","dayPeriods-format-wide-noon":"middag","field-era":"æra","dateFormatItem-yM":"M/y","months-standAlone-wide":["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],"timeFormat-short":"HH.mm","quarters-format-wide":["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],"timeFormat-long":"HH.mm.ss z","field-year":"år","dateFormatItem-yMMM":"MMM y","dateFormatItem-yQ":"Q yyyy","dateTimeFormats-appendItem-Era":"{0} {1}","field-hour":"time","dateFormatItem-MMdd":"dd/MM","months-format-abbr":["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],"dateFormatItem-yyQ":"Q. 'kvartal' yy","timeFormat-full":"HH.mm.ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"i dag","field-day-relative+1":"i morgen","field-day-relative+2":"i overmorgen","dateFormatItem-H":"HH","months-standAlone-abbr":["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],"quarters-format-abbr":["K1","K2","K3","K4"],"quarters-standAlone-wide":["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],"dateFormatItem-M":"M","days-standAlone-wide":["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],"dateFormatItem-yyyyMMM":"MMM y","dayPeriods-format-abbr-noon":"middag","dateFormatItem-yyMMM":"MMM yy","timeFormat-medium":"HH.mm.ss","dateFormatItem-Hm":"HH.mm","quarters-standAlone-abbr":["K1","K2","K3","K4"],"eraAbbr":["f.Kr.","e.Kr."],"field-minute":"minut","field-dayperiod":"dagtid","days-standAlone-abbr":["søn","man","tir","ons","tor","fre","lør"],"dateFormatItem-d":"d.","dateFormatItem-ms":"mm.ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"i går","dateFormatItem-h":"h a","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"AM","field-day-relative+-2":"i forgårs","dateFormatItem-MMMd":"d. MMM","dateFormatItem-MEd":"E d/M","dateTimeFormat-full":"{1} {0}","field-day":"dag","days-format-wide":["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],"field-zone":"tidszone","dateFormatItem-yyyyMM":"MM/yyyy","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y","months-standAlone-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"field-year-relative+-1":"sidste år","field-month-relative+-1":"sidste måned","dateFormatItem-yyMM":"MM/yy","dateFormatItem-hm":"h.mm a","dateTimeFormats-appendItem-Year":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["søn.","man.","tir.","ons.","tor.","fre.","lør."],"dateFormatItem-yMMMd":"d. MMM y","eraNames":["f.Kr.","e.Kr."],"days-format-narrow":["S","M","T","O","T","F","L"],"days-standAlone-narrow":["S","M","T","O","T","F","L"],"dateFormatItem-MMM":"MMM","field-month":"måned","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"AM","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-MMMMEd":"E d. MMMM","dateFormat-short":"dd/MM/yy","dayPeriods-format-narrow-noon":"middag","field-second":"sekund","dateFormatItem-yMMMEd":"E d. MMM y","field-month-relative+0":"denne måned","field-month-relative+1":"næste måned","dateFormatItem-Ed":"E 'd'. d.","dateTimeFormats-appendItem-Timezone":"{0} {1}","field-week":"uge","dateFormat-medium":"dd/MM/yyyy","field-year-relative+0":"i år","field-week-relative+-1":"sidste uge","field-year-relative+1":"næste år","dayPeriods-format-narrow-pm":"PM","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH.mm.ss","dateFormatItem-hms":"h.mm.ss a","dateFormatItem-yyyy":"y","field-week-relative+0":"denne uge","field-week-relative+1":"næste uge"},"dijit/nls/loading":{"loadingState":"Indlæser...","errorState":"Der er opstået en fejl"},"dojo/cldr/nls/number":{"scientificFormat":"#E0","currencySpacing-afterCurrency-currencyMatch":"[:letter:]","infinity":"∞","list":",","percentSign":"%","minusSign":"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 bill","currencySpacing-afterCurrency-insertBetween":" ","nan":"NaN","plusSign":"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencyFormat":"#,##0.00 ¤","currencySpacing-beforeCurrency-currencyMatch":"[:letter:]","perMille":"‰","group":".","percentFormat":"#,##0 %","decimalFormat-long":"000 billioner","decimalFormat":"#,##0.###","decimal":",","currencySpacing-beforeCurrency-insertBetween":" ","exponential":"E"},"dijit/nls/common":{"buttonOk":"OK","buttonCancel":"Annullér","buttonSave":"Gem","itemClose":"Luk"}});