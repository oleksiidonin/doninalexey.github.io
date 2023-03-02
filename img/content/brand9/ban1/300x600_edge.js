
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x6='rgba(0,0,0,0)',x4='rgba(0,0,0,1.00)',x9='rgba(255,255,255,0.00)',m='rect',g='image',i='none';var g8='img132.png',g7='txt.png',g5='testVideo.mp4';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Rectangle',t:m,r:['0px','0px','300px','600px','auto','auto'],f:[x4],s:[0,"rgba(0,0,0,0.00)",i]},{id:'testVideo',t:'video',tag:'video',r:['0px','243px','300px','169px','auto','auto'],ap:'autoplay',lp:'loop',sr:[vid+g5],pr:'metadata'},{id:'txt',t:g,r:['8px','451px','286px','190px','auto','auto'],f:[x6,im+g7,'0px','0px']},{id:'img132',t:g,r:['30px','0','240px','238px','auto','auto'],f:[x6,im+g8,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','300px','600px','auto','auto'],overflow:'hidden',f:[x9]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-150170282");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("playBtn").hide();sym.$("soundOff").show();sym.$("soundOn").hide();sym.$("testVideo")[0].volume=0;});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-150170282");