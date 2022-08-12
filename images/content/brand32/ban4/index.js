(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._300x600 = function() {
	this.initialize(img._300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._300x600vivid = function() {
	this.initialize(img._300x600vivid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.a001 = function() {
	this.initialize(img.a001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,102);


(lib.cup200 = function() {
	this.initialize(img.cup200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,216);


(lib.frame300x600 = function() {
	this.initialize(img.frame300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo200 = function() {
	this.initialize(img.logo200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,105);


(lib.r01 = function() {
	this.initialize(img.r01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,35);


(lib.r02 = function() {
	this.initialize(img.r02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,34);


(lib.r03 = function() {
	this.initialize(img.r03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,31);


(lib.sunUnderTheAO = function() {
	this.initialize(img.sunUnderTheAO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,99);


(lib.txt1glow = function() {
	this.initialize(img.txt1glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,30);


(lib.txt3glow = function() {
	this.initialize(img.txt3glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,64);


(lib.zzz01 = function() {
	this.initialize(img.zzz01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,185);


(lib.zzz02 = function() {
	this.initialize(img.zzz02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,158);


(lib.zzz03 = function() {
	this.initialize(img.zzz03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,138);


(lib.Symzzzbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a001();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-51,105,102);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006B17").s().p("AgyBAIAAh+IAcAAIAAArIAaAAQAWgBANAMQAMAKAAATQAAATgNAMQgNAMgXAAgAgWAmIAYAAQAVAAAAgSQAAgQgVgBIgYAAg");
	this.shape.setTransform(88.8,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006B17").s().p("AgNBAIAAhlIgmAAIAAgZIBnAAIAAAZIgmAAIAABlg");
	this.shape_1.setTransform(76.4,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006B17").s().p("AgnAvQgTgTAAgcQAAgbATgSQATgUAcAAQAcAAAVAVIgRATQgQgOgRAAQgOAAgLAMQgKALAAAQQAAARAKALQAKAMAPAAQARAAARgPIASAUQgUAVggAAQgbAAgTgTg");
	this.shape_2.setTransform(63.9,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006B17").s().p("AgNBAIAAh+IAbAAIAAB+g");
	this.shape_3.setTransform(54.1,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006B17").s().p("AAaBAIAAg0IgzAAIAAA0IgcAAIAAh+IAcAAIAAAxIAzAAIAAgxIAcAAIAAB+g");
	this.shape_4.setTransform(44.1,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006B17").s().p("AgxBAIAAh+IAzAAQAWAAANAMQANAMAAAUQAAAUgPAMQgOAMgVAAIgVAAIAAAmgAgVABIAVAAQAKgBAGgEQAGgGAAgIQAAgTgWAAIgVAAg");
	this.shape_5.setTransform(31.7,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006B17").s().p("AgNBAIAAh+IAbAAIAAB+g");
	this.shape_6.setTransform(22.1,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006B17").s().p("Ag1BAIAAh+IA6AAQAVgBAMAMQAJAIAAANQAAATgRAJQAYAJAAAWQAAARgNAJQgMAJgXAAgAgaAnIAgAAQAUAAAAgOQAAgOgUAAIggAAgAgagLIAaAAQATAAAAgOQAAgNgSAAIgbAAg");
	this.shape_7.setTransform(12.9,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006B17").s().p("AgwAvQgTgTAAgcQAAgbATgSQAVgUAcAAQAdAAASAUQAUASgBAbQABAcgUATQgTATgdAAQgcAAgUgTgAgagbQgLALAAAQQAAARALALQALAMAQAAQAQAAALgMQAKgLAAgRQABgQgLgLQgLgMgRAAQgPAAgLAMg");
	this.shape_8.setTransform(-1.7,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006B17").s().p("AAjBAIAAhSIgjA1IAAAAIgjg1IAABSIgcAAIAAh+IAeAAIAhA1IAig1IAdAAIAAB+g");
	this.shape_9.setTransform(-17.3,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006B17").s().p("AAbBUIAAhUIg2BUIgbAAIAAh+IAcAAIAABSIA2hSIAaAAIAAB+gAgdhQIAQgDQAEANAJAAQALAAAEgNIAQADQgCANgIAIQgIAHgNAAQgZAAgEgcg");
	this.shape_10.setTransform(-32.1,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006B17").s().p("AARA3QgJgJAAgOQAAgNAJgJQAJgKANAAQAOAAAIAKQAJAJAAANQAAAOgJAJQgJAKgNAAQgOAAgIgKgAAeAVQgDAFAAAGQAAAHADAFQAEAEAFAAQAMABAAgRQAAgGgDgFQgEgEgFAAQgGAAgDAEgAg4BAIBch+IAVAAIhcB+gAg8gIQgJgKAAgOQAAgNAJgJQAJgKANAAQAOAAAIAKQAJAIAAAOQAAAOgJAKQgJAIgNAAQgOAAgIgIgAgyggQAAAHADAEQAEAGAFAAQAMgBAAgQQAAgGgDgFQgEgEgFgBQgMAAAAAQg");
	this.shape_11.setTransform(-52.4,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006B17").s().p("AgoAvQgPgTAAgcQAAgbAPgTQAQgTAYAAQAZAAAQATQAPASAAAcQAAAcgPATQgQATgZAAQgYAAgQgTgAgTgcQgIALAAARQAAASAIALQAIALALAAQANAAAHgLQAIgLAAgSQAAgQgIgMQgIgMgMAAQgMAAgHAMg");
	this.shape_12.setTransform(-66.8,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006B17").s().p("AgoAvQgPgTAAgcQAAgbAPgTQAQgTAYAAQAZAAAQATQAPASAAAcQAAAcgPATQgQATgZAAQgYAAgQgTgAgTgcQgIALAAARQAAASAIALQAIALALAAQANAAAHgLQAIgLAAgSQAAgQgIgMQgIgMgMAAQgMAAgHAMg");
	this.shape_13.setTransform(-80,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006B17").s().p("AAABAIAAhjIgVAGIgGgXIAkgLIATAAIAAB/g");
	this.shape_14.setTransform(-91.1,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.8,-8.5,187.8,17);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006B17").s().p("AgNBRIAAh+IAbAAIAAB+gAAGg3IAAgZIAaAAIAAAZgAggg3IAAgZIAbAAIAAAZg");
	this.shape.setTransform(98.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006B17").s().p("AgvAvQgUgTABgcQgBgaAUgUQATgTAcAAQAdAAAUATQASAUABAaQgBAbgSAUQgUATgdAAQgcAAgTgTgAgbgbQgKALAAAQQAAARAKAMQAMALAPAAQARAAAKgLQAMgMAAgRQAAgPgMgMQgKgMgRAAQgPAAgMAMg");
	this.shape_1.setTransform(87.6,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006B17").s().p("Ag1BAIAAh/IA6AAQAVAAAMAMQAJAIAAANQAAATgRAJQAYAJAAAWQAAARgNAJQgMAJgXAAgAgaAnIAgAAQAUAAAAgOQAAgOgUAAIggAAgAgagLIAaAAQATAAAAgOQAAgNgSAAIgbAAg");
	this.shape_2.setTransform(73.7,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006B17").s().p("AgwAvQgSgUgBgbQABgaASgUQAVgTAcAAQAdAAASATQATAUAAAaQAAAbgTAUQgTATgdAAQgcAAgUgTgAgagbQgLALAAAQQAAARALAMQALALAQAAQAQAAALgLQALgMAAgRQgBgPgKgMQgMgMgQAAQgQAAgKAMg");
	this.shape_3.setTransform(59.1,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006B17").s().p("AgNBAIAAhlIgnAAIAAgaIBpAAIAAAaIgnAAIAABlg");
	this.shape_4.setTransform(46,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006B17").s().p("AAbBAIAAhTIg2BTIgbAAIAAh/IAcAAIAABTIA3hTIAaAAIAAB/g");
	this.shape_5.setTransform(33.2,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006B17").s().p("AAkBAIAAhTIgkA2IAAAAIgjg1IAABSIgbAAIAAh/IAeAAIAgA2IAhg2IAeAAIAAB/g");
	this.shape_6.setTransform(18.3,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006B17").s().p("AAmBAIgLgcIg1AAIgMAcIgcAAIA2h/IAZAAIA2B/gAARALIgRgoIgQAoIAhAAg");
	this.shape_7.setTransform(3.3,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006B17").s().p("AgnAvQgTgTAAgcQAAgaATgUQATgTAcAAQAcAAAVAVIgRATQgQgOgRAAQgOAAgLAMQgKALAAAQQAAARAKAMQALALAOAAQASAAAQgPIASATQgUAWghAAQgaAAgTgTg");
	this.shape_8.setTransform(-9.9,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006B17").s().p("AAYBAIgmg2IgPAPIAAAnIgcAAIAAh/IAcAAIAAA4IAzg4IAhAAIgzA2IA2BJg");
	this.shape_9.setTransform(-21.7,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006B17").s().p("AgvAvQgTgUAAgbQAAgaATgUQATgTAcAAQAdAAATATQATAUAAAaQAAAbgTAUQgTATgdAAQgcAAgTgTgAgbgbQgKALAAAQQAAARALAMQALALAPAAQARAAALgLQAKgMAAgRQAAgPgLgMQgLgMgQAAQgQAAgLAMg");
	this.shape_10.setTransform(-36.7,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006B17").s().p("AAkBAIAAhTIgkA2IAAAAIgjg1IAABSIgcAAIAAh/IAfAAIAgA2IAhg2IAeAAIAAB/g");
	this.shape_11.setTransform(-52.3,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006B17").s().p("AgwAvQgSgUgBgbQABgaASgUQAUgTAcAAQAdAAAUATQASAUAAAaQAAAbgSAUQgUATgdAAQgdAAgTgTgAgbgbQgLALAAAQQAAARAMAMQAKALAQAAQAQAAAMgLQAKgMAAgRQAAgPgLgMQgLgMgQAAQgQAAgLAMg");
	this.shape_12.setTransform(-67.8,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006B17").s().p("AgxBAIAAh/IAzAAQAWAAANANQANAMAAATQAAAVgPAMQgOALgVAAIgVAAIAAAngAgVABIAVAAQAKAAAGgFQAGgFAAgJQAAgUgWAAIgVAAg");
	this.shape_13.setTransform(-81.1,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006B17").s().p("AAmBAIgMgcIg0AAIgMAcIgcAAIA2h/IAZAAIA2B/gAAQALIgQgoIgQAoIAgAAg");
	this.shape_14.setTransform(-94.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-8.2,203.1,16.5);


(lib.Symbol22zzz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt3glow();
	this.instance.parent = this;
	this.instance.setTransform(27,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27,-3,229,64);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.r03();
	this.instance.parent = this;
	this.instance.setTransform(108,51);

	this.instance_1 = new lib.r02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36,25);

	this.instance_2 = new lib.r01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36,0,221,82);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt1glow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205,30);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006B17").s().p("AgPBIIAAiPIAfAAIAACPg");
	this.shape.setTransform(104.1,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006B17").s().p("AgPBIIAAhyIgrAAIAAgdIB1AAIAAAdIgrAAIAAByg");
	this.shape_1.setTransform(94.1,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006B17").s().p("AgrA1QgWgVAAggQAAgeAVgVQAVgWAgAAQAfAAAYAXIgTAWQgSgQgSAAQgSAAgLANQgMANAAASQAAATALAMQAMAOASAAQATAAASgRIATAVQgLANgNAGQgOAGgTAAQgfAAgUgVg");
	this.shape_2.setTransform(80.2,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006B17").s().p("Ag2A1QgVgWABgfQgBgeAWgVQAVgWAgAAQAhAAAVAVQAWAWAAAeQgBAfgVAVQgWAWggAAQggAAgWgVgAgegfQgMANAAASQAAATAMAMQAMAOASAAQATAAAMgNQAMgNAAgTQAAgSgMgNQgNgNgSAAQgSAAgMANg");
	this.shape_3.setTransform(63.9,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006B17").s().p("Ag7BIIAAiPIBBAAQAYAAAMANQALALgBAOQAAAUgSALQAbAJgBAZQAAATgOALQgOAJgZABgAgdAsIAkAAQAWAAABgQQgBgQgXAAIgjAAgAgdgNIAdAAQAVAAABgPQAAgPgVAAIgeAAg");
	this.shape_4.setTransform(48.4,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006B17").s().p("AAeBIIAAhdIg9BdIgdAAIAAiPIAfAAIAABdIA9hdIAdAAIAACPg");
	this.shape_5.setTransform(32.8,15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006B17").s().p("AhDBHIACgaIAGAAQAOAAAFgPQAHgTAAg1IAAgdIBkAAIAACOIgfAAIAAhyIgoAAIAAALQAAA8gLAXQgJAVgaAAQgKAAgHgBg");
	this.shape_6.setTransform(16.5,15.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006B17").s().p("ABLBIIgpg7IgSAVIAAAmIgeAAIAAgmIgTgVIgoA7IgmAAIA5hRIg3g+IAlAAIA6BDIAAhDIAeAAIAABDIA5hDIAlAAIg2A+IA4BRg");
	this.shape_7.setTransform(-1.9,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006B17").s().p("Ag1A1QgWgWAAgfQAAgeAWgVQAWgWAfAAQAhAAAWAVQAUAWABAeQAAAfgWAVQgWAWggAAQgfAAgWgVgAgegfQgMANAAASQAAATAMAMQAMAOASAAQATAAAMgNQAMgNAAgTQAAgSgMgNQgNgNgSAAQgSAAgMANg");
	this.shape_8.setTransform(-20.8,15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006B17").s().p("AAoBIIAAhdIgoA8IAAAAIgog7IAABcIgeAAIAAiPIAiAAIAkA9IAmg9IAhAAIAACPg");
	this.shape_9.setTransform(-38.3,15.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006B17").s().p("AgOBIIAAiPIAdAAIAACPg");
	this.shape_10.setTransform(-56.6,15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006B17").s().p("Ag7BIIAAiPIBBAAQAZAAAMANQAKALAAAOQAAAUgTALQAaAJAAAZQAAATgOALQgOAJgZABgAgdAsIAkAAQAWAAAAgQQAAgQgXAAIgjAAgAgdgNIAdAAQAVAAAAgPQAAgPgUAAIgeAAg");
	this.shape_11.setTransform(-66.9,15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006B17").s().p("Ag1A1QgVgWgBgfQAAgeAWgVQAWgWAfAAQAhAAAWAVQAUAWABAeQAAAfgWAVQgWAWggAAQgfAAgWgVgAgegfQgMANAAASQAAATAMAMQANAOARAAQATAAAMgNQAMgNAAgTQAAgSgMgNQgMgNgTAAQgSAAgMANg");
	this.shape_12.setTransform(-83.3,15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006B17").s().p("AAdBIIAAg6Ig5AAIAAA6IgfAAIAAiPIAfAAIAAA5IA5AAIAAg5IAfAAIAACPg");
	this.shape_13.setTransform(-99.6,15.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006B17").s().p("AhQAOIAAgbIChAAIAAAbg");
	this.shape_14.setTransform(83.4,-10.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006B17").s().p("AAbBHIgrg9IgQASIAAArIggAAIAAiOIAgAAIAAA/IA4g/IAmAAIg6A9IA9BRg");
	this.shape_15.setTransform(61.5,-11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006B17").s().p("Ag1A0QgWgVAAgfQAAgeAWgVQAWgWAfAAQAhAAAWAWQAVAVAAAeQAAAfgWAVQgWAWggAAQggAAgVgWgAgegfQgMANAAASQAAATAMAMQAMAOASAAQATAAAMgNQAMgNAAgTQAAgSgMgNQgNgNgSAAQgSAAgMANg");
	this.shape_16.setTransform(44.7,-11.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006B17").s().p("AAdBHIAAg5Ig5AAIAAA5IgfAAIAAiOIAfAAIAAA5IA5AAIAAg5IAfAAIAACOg");
	this.shape_17.setTransform(28.3,-11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006B17").s().p("AArBIIgNggIg7AAIgNAgIggAAIA9iPIAcAAIA8CPgAATAMIgTgtIgSAtIAlAAg");
	this.shape_18.setTransform(12.6,-11.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006B17").s().p("Ag3BHIAAiOIA5AAQAZABAPAOQAOANAAAXQAAAWgRAOQgPAMgYAAIgYAAIAAArgAgYAAIAYAAQALABAHgGQAGgGAAgJQAAgWgYAAIgYAAg");
	this.shape_19.setTransform(-0.2,-11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006B17").s().p("AAeBeIAAheIg9BeIgdAAIAAiOIAeAAIAABdIA+hdIAdAAIAACOgAgWhDQgIgIgDgPIASgDQAEAOALAAQAMAAAEgOIASADQgCAPgJAIQgJAIgOAAQgNAAgJgIg");
	this.shape_20.setTransform(-21.5,-13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006B17").s().p("AAeBHIAAhcIg9BcIgdAAIAAiOIAeAAIAABdIA+hdIAdAAIAACOg");
	this.shape_21.setTransform(-37.1,-11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006B17").s().p("Ag7BHIAAiOIBAAAQAZAAANANQAJAKAAAPQAAAUgSALQAbAJgBAaQAAATgOAKQgOAKgZgBgAgdAsIAkAAQAXAAAAgQQAAgQgYAAIgjAAgAgdgNIAdAAQAWAAAAgPQAAgPgVAAIgeAAg");
	this.shape_22.setTransform(-51.9,-11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006B17").s().p("Ag1A0QgWgVAAgfQABgeAVgVQAWgWAfAAQAhAAAWAWQAUAVAAAeQABAfgWAVQgWAWggAAQggAAgVgWgAgegfQgMANAAASQAAASAMANQANAOARAAQATAAALgNQANgNAAgTQAAgSgNgNQgMgNgSAAQgSAAgMANg");
	this.shape_23.setTransform(-68.2,-11.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006B17").s().p("AAcBHIAAg5Ig4AAIAAA5IgfAAIAAiOIAfAAIAAA5IA4AAIAAg5IAgAAIAACOg");
	this.shape_24.setTransform(-84.6,-11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.6,-22.9,211.3,46);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006B17").s().p("AgKAjIAAgVIAUAAIAAAVgAgKgNIAAgVIAUAAIAAAVg");
	this.shape.setTransform(92.3,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006B17").s().p("AglAgIALgOQAMALAQAAQAPAAAAgKQABgLgSAAIgKAAIAAgQIAKAAQAPAAAAgKQAAgKgPAAQgNAAgKAKIgLgNQAQgPAUAAQAOAAAKAHQAJAHAAAKQAAAPgOAGQAQAFAAAQQABAMgKAHQgKAIgPAAQgYAAgQgPg");
	this.shape_1.setTransform(86,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006B17").s().p("AgiAhQgNgNAAgUQAAgTANgNQAOgOAUAAQAVAAAOAOQANANAAATQAAAUgNANQgPAOgUAAQgUAAgOgOgAgSgTQgJAIAAALQAAAMAJAIQAHAJALAAQAMAAAIgJQAHgIAAgMQAAgLgHgIQgIgJgMAAQgLAAgHAJg");
	this.shape_2.setTransform(76.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006B17").s().p("AASAtIAAgkIgjAAIAAAkIgUAAIAAhaIAUAAIAAAkIAjAAIAAgkIAUAAIAABag");
	this.shape_3.setTransform(66.3,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006B17").s().p("AgfAtIAAhaIA/AAIAAATIgrAAIAABHg");
	this.shape_4.setTransform(57.9,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006B17").s().p("AgiAhQgNgNAAgUQAAgTAOgNQAOgOATAAQAVAAAOAOQANANAAATQAAAUgNANQgOAOgVAAQgUAAgOgOgAgTgTQgHAIAAALQAAAMAHAIQAIAJALAAQAMAAAIgJQAHgIAAgMQAAgLgHgIQgIgJgMAAQgLAAgIAJg");
	this.shape_5.setTransform(48.2,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006B17").s().p("AgjAtIAAhaIAkAAQAQAAAJAJQAKAJAAAPQAAAOgLAIQgKAJgPgBIgPAAIAAAbgAgPAAIAPAAQAHAAAFgCQAEgFgBgFQAAgOgPAAIgPAAg");
	this.shape_6.setTransform(38.7,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006B17").s().p("AASAtIAAhHIgjAAIAABHIgUAAIAAhaIBLAAIAABag");
	this.shape_7.setTransform(29.2,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006B17").s().p("AAUA8IAAg8IgnA8IgTAAIAAhaIATAAIAAA7IAog7IASAAIAABagAgVg5IAMgCQADAJAGAAQAIAAADgJIALACQgCAUgUAAQgSAAgDgUg");
	this.shape_8.setTransform(15.4,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006B17").s().p("AATAtIAAg6IgmA6IgTAAIAAhaIAUAAIAAA8IAng8IASAAIAABag");
	this.shape_9.setTransform(5.4,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006B17").s().p("AgmAtIAAhaIAqAAQAPABAIAIQAGAGAAAKQAAANgLAGQARAGAAAQQgBAZghgBgAgTAcIAYAAQANAAAAgKQAAgKgOAAIgXAAgAgTgIIATAAQAOABAAgLQgBgJgNABIgTAAg");
	this.shape_10.setTransform(-3.9,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006B17").s().p("AgiAhQgNgNAAgUQAAgTAOgNQAOgOATAAQAVAAAOAOQANANAAATQAAAUgNANQgOAOgVAAQgUAAgOgOgAgTgTQgHAIAAALQAAAMAIAIQAHAJALAAQAMAAAIgJQAHgIAAgMQAAgLgHgIQgIgJgMAAQgLAAgIAJg");
	this.shape_11.setTransform(-14.4,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006B17").s().p("AARAtIgbgmIgKALIAAAbIgUAAIAAhaIAUAAIAAAoIAkgoIAYAAIglAnIAmAzg");
	this.shape_12.setTransform(-23.5,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006B17").s().p("AASAtIAAgkIgkAAIAAAkIgTAAIAAhaIATAAIAAAkIAkAAIAAgkIAUAAIAABag");
	this.shape_13.setTransform(-33.6,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006B17").s().p("AAbAuIgJgUIglAAIgIAUIgUAAIAmhbIASAAIAnBbgAAMAIIgMgdIgLAdIAXAAg");
	this.shape_14.setTransform(-43.6,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006B17").s().p("AgjAtIAAhaIAkAAQAQAAAKAJQAJAJAAAPQAAAOgLAIQgKAJgPgBIgPAAIAAAbgAgPAAIAPAAQAQABAAgNQgBgOgPAAIgPAAg");
	this.shape_15.setTransform(-51.8,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006B17").s().p("Ag9AtIAAhaIAUAAIAABIIAgAAIAAhIIATAAIAABIIAgAAIAAhIIAUAAIAABag");
	this.shape_16.setTransform(-67.7,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006B17").s().p("AAcAuIgJgUIglAAIgIAUIgVAAIAnhbIASAAIAmBbgAAMAIIgMgdIgLAdIAXAAg");
	this.shape_17.setTransform(-80.1,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006B17").s().p("AglAtIAAhaIAoAAQARABAHAIQAHAGAAAKQAAANgNAGQASAGgBAQQABAZgjgBgAgSAcIAWAAQAOAAABgKQgBgKgOAAIgWAAgAgSgIIASAAQANABAAgLQAAgJgNABIgSAAg");
	this.shape_18.setTransform(-89.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.2,-6,186.6,12.1);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006B17").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape.setTransform(27.1,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006B17").s().p("AAbBAIAAhTIg2BTIgbAAIAAh/IAcAAIAABTIA3hTIAZAAIAAB/g");
	this.shape_1.setTransform(17.6,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006B17").s().p("Ag1BAIAAh/IA6AAQAWAAALAMQAJAIAAANQAAASgRAKQAYAJAAAWQAAARgNAJQgNAJgVAAgAgaAnIAhAAQATAAAAgOQAAgOgUAAIggAAgAgagLIAaAAQATAAAAgOQAAgNgSAAIgbAAg");
	this.shape_2.setTransform(4.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006B17").s().p("AAmBAIgMgcIg0AAIgMAcIgcAAIA2h/IAZAAIA2B/gAAQALIgQgoIgQAoIAgAAg");
	this.shape_3.setTransform(-9.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006B17").s().p("AAYBAIgmg2IgPAPIAAAnIgcAAIAAh/IAcAAIAAA4IAzg4IAhAAIgzA2IA2BJg");
	this.shape_4.setTransform(-22.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-6.4,57.2,12.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sunUnderTheAO();
	this.instance.parent = this;
	this.instance.setTransform(-47,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-49.5,94,99);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zzz03();
	this.instance.parent = this;
	this.instance.setTransform(-99,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-69,198,138);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zzz02();
	this.instance.parent = this;
	this.instance.setTransform(-74.5,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-79,149,158);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zzz01();
	this.instance.parent = this;
	this.instance.setTransform(-86,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-92.5,172,185);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cup200();
	this.instance.parent = this;
	this.instance.setTransform(-118,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-108,236,216);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300x600vivid();
	this.instance.parent = this;
	this.instance.setTransform(0,-335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-335,300,600);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(0,-160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-460,300,600);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo200();
	this.instance.parent = this;
	this.instance.setTransform(16,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,0,156,105);


(lib.Syzzzzmbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symzzzbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-52,0,1,1,180,0,0,0,-51);

	this.instance_1 = new lib.Symzzzbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-52,51,1,1,0,0,180);

	this.instance_2 = new lib.Symzzzbol2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.8,0,1,1,0,180,0,0,-51);

	this.instance_3 = new lib.Symzzzbol2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(52.8,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-102,209.9,204);


(lib.Symzzzbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Syzzzzmbol4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-52.7,-51.1,0.998,1.03,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-155.9,209.3,210);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(105.5,23,0.999,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211,46);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 24
	this.instance = new lib.Symbol24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(136.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 23
	this.instance_1 = new lib.Symbol23("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(136.6,32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 10
	this.instance_2 = new lib.Symbol10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(136.4,57.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267,64);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90.8,6.1,1,1,0,0,0,-2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.6,12.2);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.002,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,12.2);


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glow03
	this.instance = new lib.Symbol8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-23,-7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},63).wait(5).to({startPosition:0},0).to({alpha:0},25).wait(1));

	// glow02
	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47.5,3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},49).wait(19).to({startPosition:0},0).to({alpha:0},25).wait(1));

	// glow01
	this.instance_2 = new lib.Symbol6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36,16.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},23).wait(45).to({startPosition:0},0).to({alpha:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-76,198,185);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Symbol9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-64,-7.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({alpha:1},6).wait(5).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(72));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkoEeQhRhZgMgUQgrg4gShUQgkinB7iNQBoh3B8geQB+geCYA+QCBA0BqCEQA1BBAcA4QgYgRgjgbQgZgTgygZQgwgYgkgMQgegJg+gFQhQgHhFALQg1AJguAZQgvAaggAoQhHBcAHBxQAFBRAvBhQAeA+AAA3QABAcgGAPIgQAEQgig4hRhYg");
	mask.setTransform(-53.7,-1.4);

	// Layer 8
	this.instance_1 = new lib.Symzzzbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.2,107.5,0.661,0.661,0,0,0,-0.1,0);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-9.8,y:47.5},33).to({regX:-0.3,regY:0.2,scaleX:0.96,scaleY:0.96,x:-3.5,y:50.2,alpha:0},58,cjs.Ease.get(1)).to({_off:true},1).wait(31));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AimE6Qgng8gahTQgzioBCh0QARgkAkgrQBHhVBfgiQBWgfBRAZQApANAXATIAUARQgvAJg4AVQhxApgtA9Qg1BHgXA+QgVA2gNBcQgKBJgCBAQgCAgABARg");
	mask_1.setTransform(-47.7,11.6);

	// Layer 9
	this.instance_2 = new lib.Symzzzbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.2,134.5,0.661,0.661,0,0,0,-0.1,0);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({x:9.2,y:56.5},39).to({regX:0,scaleX:0.87,scaleY:0.87,x:120,y:-6.5},56,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AkJBRQgdgWgSgaIgOgWIChAIQBlgCBpgZQBsgaBjg7QAygdAdgYQgVBIg1BJQhrCQilAEIgPAAQiQAAhXhCg");
	mask_2.setTransform(-6.3,-9.3);

	// Layer 7
	this.instance_3 = new lib.Symzzzbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-66,-72.3,0.661,0.661,0,0,180,-52.4,-51.3);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({x:-22,y:-47.3},37).to({x:61.3,y:-78.3},44,cjs.Ease.get(1)).to({_off:true},1).wait(14));

	// Layer 15 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ai6BMQg0gTgfgoIgUgjIARADQAXACAZgCQAigDATgEQAfgIBggeQBWgbBIADQAlACATAHQBLAXAeAcQAOAOABAJIAAAAQgIgDhagGQhBgEg6AfIgsAgQgfAOgqALQgtALgkAAQggAAgZgJg");
	mask_3.setTransform(12.1,-24.3);

	// Layer 10
	this.instance_4 = new lib.Symzzzbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(61.2,36.5,0.661,0.661,0,0,0,-52.4,-51.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({x:46.8,y:8.3},16).to({x:86.8,alpha:0},23,cjs.Ease.get(1)).to({_off:true},1).wait(35));

	// Layer 14
	this.instance_5 = new lib.Symzzzbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-29.6,-88.1,0.661,0.661,0,0,180,-52.3,-51.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({_off:false},0).to({x:-24.6,y:-61.1},21).to({x:13.4,y:-99.1,alpha:0},20,cjs.Ease.get(-1)).to({_off:true},1).wait(45));

	// Layer 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AEnC4QjFg8hzgFQiOgGixAUIiVAWQAAgEACgHQAFgOANgOQAyg3AygyQAcgaA7goQAugeAkgUIABAAIAAAAQASgLARgHIA0gXQC3hSDggLQBwgGBLALIgRHcQhLgdhjgdg");
	mask_4.setTransform(60.7,-13.8);

	// Layer 6
	this.instance_6 = new lib.Symzzzbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(22.1,69.4,0.661,0.661,0,0,0,-52.4,-51.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({_off:false},0).to({regX:-52.2,regY:-51,scaleX:0.75,scaleY:0.75,rotation:20.7,x:62.9,y:39.4},30).to({regX:-52.3,regY:-51.1,scaleX:0.9,scaleY:0.9,rotation:0,y:91.3,alpha:0},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.3,-334.7,685.7,685.7);


(lib.LOGO300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(104,-7,0.5,0.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},44).wait(304));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1.001);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211,46);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15,cjs.Ease.get(-1)).wait(53));

	// Layer 4
	this.instance_1 = new lib.Symbol22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(133.5,20.5,1,1,0,0,0,142.5,29.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},26,cjs.Ease.get(-1)).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27,-9,221,82);


(lib.Symbol17zzz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(132.5,20,1,1,0,0,0,105.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27,-3,211,46);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(93.3,6,1,1,0,0,0,93.3,6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},17,cjs.Ease.get(-1)).wait(54));

	// Layer 2
	this.instance_1 = new lib.Symbol21("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(93.5,6,1,1,0,0,0,102.5,15);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},31,cjs.Ease.get(-1)).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.4,-93.9,465.5,175);


(lib.txt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2
	this.instance = new lib.Symbol18("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(150.5,85.8,1,1,0,0,0,133.5,20.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135).to({_off:false},0).wait(87).to({startPosition:67},0).to({alpha:0.469},9,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.txt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt1
	this.instance = new lib.Symbol16("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(154.5,52.5,1,1,0,0,0,93.5,6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).wait(164).to({startPosition:70},0).to({alpha:0.469},9,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol18zzz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17zzz("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},17,cjs.Ease.get(-1)).wait(53));

	// Layer 4
	this.instance_1 = new lib.Symbol22zzz("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(133.5,20.5,1,1,0,0,0,142.5,29.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},28,cjs.Ease.get(-1)).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,-12,229,64);


(lib.txt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt3
	this.instance = new lib.Symbol18zzz("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(150.5,85.8,1,1,0,0,0,133.5,20.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235).to({_off:false},0).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// msk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask.setTransform(150,-35);

	// flash
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,125);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},11,cjs.Ease.get(1)).wait(324).to({startPosition:0},0).to({alpha:1},12).wait(9));

	// vivid
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},6).to({alpha:0},43).to({_off:true},1).wait(306));

	// TXT3
	this.instance_2 = new lib.txt13("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(140.5,-91.7,1.2,1.2,0,0,0,140.5,85.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(356));

	// TXT2
	this.instance_3 = new lib.txt12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.5,-94.7,1.25,1.25,0,0,0,150.5,85.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(356));

	// TXT1
	this.instance_4 = new lib.txt11("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(154.5,-136.3,1.25,1.25,0,0,0,154.5,52.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(356));

	// aromoksamitShape1
	this.instance_5 = new lib.Symbol5("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(235.9,47.8,1.15,1.15);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({_off:true},160).wait(181));

	// aromoksamitShape2
	this.instance_6 = new lib.Symbol5("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(235.9,47.8,1.15,1.15);
	this.instance_6.alpha = 0.5;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({_off:true},136).wait(181));

	// LOGO
	this.instance_7 = new lib.LOGO300x600("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,-329,2,2,0,0,0,150,-7);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(356));

	// cup
	this.instance_8 = new lib.Symbol4("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(151.5,200.1,0.665,0.665,0,0,0,-26.9,104.2);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(356));

	// aromoksamitGlow
	this.instance_9 = new lib.Symbol5copy("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(235.9,47.8,1.15,1.15);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(35).to({_off:false},0).wait(321));

	// BG
	this.instance_10 = new lib._300x600();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-335);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(356));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-335,300,600);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_689 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(689).call(this.frame_689).wait(1));

	// fr
	this.instance = new lib.frame300x600();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(690));

	// Layer 2
	this.instance_1 = new lib.all("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(180.9,496.7,1,1,0,0,0,180.9,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(690));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"300x600.jpg", id:"_300x600"},
		{src:"300x600vivid.jpg", id:"_300x600vivid"},
		{src:"a001.png", id:"a001"},
		{src:"cup200.png", id:"cup200"},
		{src:"frame300x600.png", id:"frame300x600"},
		{src:"logo200.png", id:"logo200"},
		{src:"r01.png", id:"r01"},
		{src:"r02.png", id:"r02"},
		{src:"r03.png", id:"r03"},
		{src:"sunUnderTheAO.png", id:"sunUnderTheAO"},
		{src:"txt1glow.png", id:"txt1glow"},
		{src:"txt3glow.png", id:"txt3glow"},
		{src:"zzz01.png", id:"zzz01"},
		{src:"zzz02.png", id:"zzz02"},
		{src:"zzz03.png", id:"zzz03"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;