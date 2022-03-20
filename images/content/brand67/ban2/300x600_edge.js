
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',o='opacity',x19='98px',g='image',x7='rgba(192,192,192,0.00)',x13='98',x17='rev-1-BOTTLE_01_DOOH_HOR_master_banner_crop_limit',x11='autoplay',e10='${bottle1}',x20='394px',x14='394',x18='video',x16='media/rev-1-BOTTLE_01_DOOH_HOR_master_banner_crop_limit.mp4',x9='rgba(255,255,255,1)',x8='solid',m='rect',x12='0px',x15='auto',x4='rgba(0,0,0,0)',i='none';var g5='bg.png',g6='bottle1.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'vid',symbolName:'vid',t:m,r:['101','51','98','394','auto','auto']},{id:'bg',t:g,r:['0','0','300px','600px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'bottle1',t:g,r:['102px','33px','93px','412px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','298px','598px','auto','auto'],cu:'pointer',f:[x7],s:[1,"rgba(99,99,99,1.00)",x8]}],style:{'${Stage}':{isStage:true,r:['null','null','300px','600px','auto','auto'],overflow:'hidden',f:[x9]}}},tt:{d:15015.015,a:y,l:{"first":0},data:[["eid3",o,0,1000,"linear",e10,'0','1']]}},"vid":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{ap:x11,r:[x12,x12,x13,x14,x15,x15],sr:[x16],id:x17,pr:x15,t:x18,tag:x18}],style:{'${symbolSelector}':{r:[_,_,x19,x20]}}},tt:{d:15015.015,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-735318105");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getSymbol("vid").$("rev-1-BOTTLE_01_DOOH_HOR_master_banner_crop_limit")[0].volume=0;sym.stop();sym.getSymbol("vid").$("rev-1-BOTTLE_01_DOOH_HOR_master_banner_crop_limit")[0].addEventListener("timeupdate",function(){var vidTime=parseInt(sym.getSymbol("vid").$("rev-1-BOTTLE_01_DOOH_HOR_master_banner_crop_limit")[0].currentTime);var milliTime=vidTime*1000;if(milliTime>=9000&&milliTime<9500){sym.play();}});sym.getSymbol("vid").$("rev-1-BOTTLE_01_DOOH_HOR_master_banner_crop_limit")[0].addEventListener("ended",function(){sym.getSymbol("vid").$("rev-1-BOTTLE_01_DOOH_HOR_master_banner_crop_limit")[0].currentTime=0;sym.stop("first");sym.getSymbol("vid").$("rev-1-BOTTLE_01_DOOH_HOR_master_banner_crop_limit")[0].play();});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Rectangle}","click",function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'vid'
(function(symbolName){})("vid");
//Edge symbol end:'vid'
})})(AdobeEdge.$,AdobeEdge,"EDGE-735318105");