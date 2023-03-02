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



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABQCEIAAiHIifAAIAACHIgSAAIAAkHIASAAIAABwICfAAIAAhwIASAAIAAEHg");
	this.shape.setTransform(87.5,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgICEIAAkHIARAAIAAEHg");
	this.shape_1.setTransform(67.7,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABQCEIAAiHIifAAIAACHIgSAAIAAkHIASAAIAABwICfAAIAAhwIASAAIAAEHg");
	this.shape_2.setTransform(48,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhmiFIASAAIAADfIC7jiIAAEKIgRAAIAAjbIi8Dig");
	this.shape_3.setTransform(18.8,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/CEIAAkHIAzAAQAgAAAWARQAWATAAAhQAAAggVATQgVASgiAAIgiAAIAAB9gAgugIIAjAAQAZAAAQgOQAQgPAAgZQAAgZgQgOQgQgOgcAAIggAAg");
	this.shape_4.setTransform(-4.7,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNCEIAAkHIB/AAIAAAQIhtAAIAABiIAuAAQBbAAAABHQgBAhgTAVQgXAYgqAAgAg7B0IAsAAQASAAAJgCQATgEAMgLQAQgQAAgdQAAgigbgPQgQgGghAAIgqAAg");
	this.shape_5.setTransform(-26.6,-2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhhBhQgngoAAg5QAAg4AngnQAogoA5AAQA6AAAoAoQAnAnAAA4QAAA5gnAoQgoAng6AAQg5AAgogngAhUhUQgiAiAAAyQAAAzAiAjQAiAiAyAAQAzAAAigiQAigjAAgzQAAgygigiQgigjgzAAQgyAAgiAjg");
	this.shape_6.setTransform(-55.7,-2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABjCfIAAg1IjFAAIAAA1IgQAAIAAhFQANAAAMgKQAKgKAHgQQAJgYAAgsIAAiQICUAAIAAD4IAeAAIAABFgAgtgOQAAAugKAbQgHASgNANICPAAIAAjoIhxAAg");
	this.shape_7.setTransform(-85.7,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-97.2,-16,194.5,32.1), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABcCIIgkhXIhvAAIgkBXIgTAAIBvkPIBuEPgAAyAhIgyh8IgxB8IBjAAg");
	this.shape.setTransform(43.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgICEIAAj3IhEAAIAAgQICZAAIAAAQIhEAAIAAD3g");
	this.shape_1.setTransform(23.9,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgICEIAAkHIARAAIAAEHg");
	this.shape_2.setTransform(9.2,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA/CEIh8h+IgHAHIAAB3IgSAAIAAkHIASAAIAAB8IB8h8IAXAAIiAB+ICHCJg");
	this.shape_3.setTransform(-6.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHCEIAAkHIAQAAIAAEHg");
	this.shape_4.setTransform(-25,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABQCEIAAiHIifAAIAACHIgSAAIAAkHIASAAIAABwICfAAIAAhwIASAAIAAEHg");
	this.shape_5.setTransform(-44.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-54.5,-13.6,109.1,27.2), null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGCdIhEh4IhHB4Ig1AAIBiijIhXiWIA2AAIA8BqIA/hqIA2AAIhbCWIBeCjg");
	this.shape.setTransform(93.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhZg8IAADaIgwAAIAAlOIDjDtIAAjXIAwAAIAAFLg");
	this.shape_1.setTransform(60.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKCDQgXgagDgjIAwgKQAAAWANASQAPASAZAAQAWAAAPgOQAOgPAAgXQAAgWgOgOQgKgJgVgJIgdgMQhAgaABg1QAAgiAYgXQAZgaApAAQAlAAAaAWQAQANAIASIgnAXQgEgMgJgIQgOgLgVAAQgTAAgNALQgKAKgBAQQABAZAhANIAeANQApAQASAYQAQAWAAAdQAAAtgdAcQgcAcgsAAQguAAgcggg");
	this.shape_2.setTransform(15.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWB7QgdggAAgxIAAjJIAwAAIAAC8QAAAlAKARQAIAOAOAIQARAKASAAQAUAAAQgKQAOgIAIgOQAKgRAAglIAAi8IAwAAIAADJQAAAxgdAgQghAlg2AAQg0AAgiglg");
	this.shape_3.setTransform(-14.6,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABGCdIhFh4IhGB4Ig2AAIBjijIhWiWIA1AAIA8BqIA/hqIA1AAIhaCWIBfCjg");
	this.shape_4.setTransform(-45.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhVCdIAAk5ICrAAIAAAtIh8AAIAABQIB5AAIAAAsIh5AAIAABiIB8AAIAAAug");
	this.shape_5.setTransform(-73.3,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFCdIAAk5IAwAAIAAELIBbAAIAAAug");
	this.shape_6.setTransform(-98.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-105.6,-17.7,211.3,35.4), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKCdIAAk5ICVAAIAAATIiBAAIAAByIB+AAIAAASIh+AAIAACPICBAAIAAATg");
	this.shape.setTransform(98.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaCdIAAk5ICVAAIAAATIiBAAIAAB0IA3AAQBrAAAABVQAAAngYAZQgbAdgyAAgAhGCKIA1AAQATAAANgDQAVgEAOgOQAUgTAAgiQAAgpgggRQgNgGgRgBIgdgBIgxAAg");
	this.shape_1.setTransform(72.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKCdIAAk5ICVAAIAAATIiAAAIAAByIB9AAIAAASIh9AAIAACPICAAAIAAATg");
	this.shape_2.setTransform(46.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXByQgugwAAhCQAAhCAwgwQAvguBDgBQA9ABAsApIAAAbQgUgYgbgNQgcgNgfAAQg6AAgpArQgoApAAA7QAABBAvAoQApAlA0gBQAaAAAagKQAegNAXgYIAAAcQgtAng8gBQhEAAgwgvg");
	this.shape_3.setTransform(16.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhzBzQgvgvAAhEQAAhCAvgwQAvguBEgBQBFABAvAuQAvAwAABCQAABEgvAvQgvAvhFgBQhEABgvgvgAhkhkQgoApAAA7QAAA9AoAoQApApA7AAQA8AAApgpQAogoAAg9QAAg7gogpQgpgqg8AAQg7AAgpAqg");
	this.shape_4.setTransform(-33.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhLCdIAAk5IA8AAQAnAAAaAVQAaAWAAAnQAAAngZAWQgZAVgoAAIgoAAIAACVgAg2gKIApAAQAeAAASgRQATgRAAgeQAAgdgSgRQgTgRgiAAIglAAg");
	this.shape_5.setTransform(-64.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABfCdIAAkmIi9AAIAAEmIgVAAIAAk5IDnAAIAAE5g");
	this.shape_6.setTransform(-94.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-105.6,-16.1,211.4,32.3), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah5ieIAUAAIAAEJIDfkMIAAE8IgUAAIAAkFIjfENg");
	this.shape.setTransform(56,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbCdIAAk5IBFAAQAnAAAYAWQAXAVAAAkQAAAtgmAXQAfAFASAVQARAVAAAfQAAAogcAYQgbAYgpAAgAhGCKIA0AAQAWAAAMgDQAUgEAOgMQAUgSAAgeQAAgrghgPQgUgJgmAAIgxAAgAhGgOIAyAAQAOAAAHgCQALgDAKgIQAUgRAAgfQABgggWgRQgRgNgiAAIgoAAg");
	this.shape_1.setTransform(25.5,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA9CdIAAiNIgYAAIhdCNIgYAAIBeiNQgRAAgRgHQgRgGgMgMQgWgXAAglQAAgcAOgVQALgQAQgKQAUgMAmAAIA1AAIAAE5gAgOiCQgQAIgKAQQgJAQAAAVQAAAgAVATQASAQAjAAIAkAAIAAiHIghAAQgbAAgPAHg");
	this.shape_2.setTransform(-2.7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABsCiIgqhoIiEAAIgqBoIgWAAICDlDICCFDgAA7AnIg7iTIg7CTIB2AAg");
	this.shape_3.setTransform(-28.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCCNQgZgSgNgcIAUgJQAMAcAbAQQAXAMAYAAQAOABAPgFQAQgEAJgIQAbgUAAgnQAAghgWgTQgWgRgnAAIgbAAIAAgTIAbAAQAZAAARgRQAUgRgBgdQABgZgPgPQgPgRgfAAQgpAAgZAmIgQgNQAdgsA4AAQAjAAAWAUQAWAUAAAkQAAAvgpAWQAeAHARAWQAQAXAAAeQAAAagLAUQgKARgPALQgcAVgogBQgmAAgdgUg");
	this.shape_4.setTransform(-57.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-68.1,-16.5,136.3,33.1), null);


(lib.round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,102).s().p("ArMLMQkpkoABmkQgBmjEpkpQEpkpGjABQGkgBEoEpQEpEpAAGjQAAGkkpEoQkoEpmkAAQmjAAkpkpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round, new cjs.Rectangle(-101.3,-101.3,202.7,202.7), null);


(lib.ofDistr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaAtIgHAEQgCACgHABIgKAEIgKABQgJAAgHgCQgHgCgFgEQgGgEgDgGQgCgHAAgJQgBgKAEgFQAEgHAFgDQAHgFAHgBQAGgCAJAAIAdAAIAAgFQAAgOgFgFQgHgFgLgBQgIABgIABIgRAFIgEgPIARgFQAKgCAMgBQALABAKADQAJADAEAGQADAFADAIQABAIABAKIAAAsIAJAOIgPALgAgWAJQgHAEAAAJQAAAGACADQACAEADACIAHADIAIAAQAJAAAHgCIANgHIAAgbIgdAAQgKABgFAEg");
	this.shape.setTransform(61.5,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcAsQgMAFgGACQgKAEgKAAQgLAAgJgEQgIgDgEgGQgFgFgCgIIgBgPIAAhDIATAAIAABBQAAAPAHAFQAFAFAMABQAJAAAIgDIANgHIAAhRIATAAIAABTIAJAOIgNALg");
	this.shape_1.setTransform(49.7,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAKQgDgEAAgGQAAgGADgDQADgEAHAAQAIAAADAEQADADAAAGQAAAHgDADQgEAEgHABQgGAAgEgFg");
	this.shape_2.setTransform(40.5,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQA4IgWgFIgFgBIAFgRIAYAHIANAAQANABAFgGQAGgEAAgIQAAgDgBgEIgFgEIgJgDIgWgFIgMgEQgGgDgEgFQgDgFAAgKQAAgIACgFQACgFAGgFQAGgFAIgCQAJgCAKgBQALABAMACIAPAFIgGAPQgIgDgIgCQgGgCgMAAQgLAAgFAEQgGAFAAAGQAAAEADADIAGAFIAUAFIAMADQAHACAFADQAFACADAGQADAFAAAJQAAAPgMALQgLAIgXABg");
	this.shape_3.setTransform(32.6,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbAsQgJAFgIACQgKAEgKAAQgLAAgJgEQgHgDgFgGQgFgFgCgIIgCgPIAAhDIAUAAIAABBQAAAPAHAFQAFAFAMABQAJAAAHgDQAJgDAFgEIAAhRIATAAIAABTIAKAOIgOALg");
	this.shape_4.setTransform(21.8,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHAOIgEgEIgDgBIgCABIgEAEIgjAqIgOgLIAngtIgigsIAOgLIAiAtIACAAIADAAIAEgFIAegoIAOALIghAsIAmAtIgOALg");
	this.shape_5.setTransform(9.4,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTA0QgLgDgGgIQgHgHgDgLQgDgKAAgMQAAgMAEgJQADgKAGgJQAGgHAKgEQALgGALAAQAZABALAOQAMAOAAAZIgKAIIhEAAQAAAQAKAJQAIAJAQAAIAKAAIARgDIAKgEIAFAQIgSAFQgLACgNABQgPAAgKgFgAAdgJQAAgIgCgGQgBgFgFgEQgDgEgFgCIgLgBQgNAAgIAIQgHAIgCAOIA5AAIAAAAg");
	this.shape_6.setTransform(-2.3,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDBLIAAiGIgMAAIAAgPIAfAAIAACVg");
	this.shape_7.setTransform(-11.3,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAKQgDgFAAgFQAAgFADgEQAEgEAGAAQAHAAAEAEQADADAAAGQAAAHgDADQgEAEgHABQgGAAgEgFg");
	this.shape_8.setTransform(-16.2,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOA1IgOgGIgNAGQgHACgKAAQgJAAgHgCQgGgDgEgEQgFgEgCgFIgCgLIgJhNIAUgCIAIBMQABAGACACIAFAFIAGACIAGAAIAJgBQAEgBAEgDIAAhWIASAAIAABWQAFADAEABIAJABIAGAAIAGgCIAFgFQACgDABgFIAIhMIAUACIgJBNIgDALQgCAGgEADQgFAEgGADQgFACgKAAQgKAAgHgCg");
	this.shape_9.setTransform(-26.6,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPA1IgPgGIgOAGQgGACgKAAQgKAAgFgCQgHgDgEgEQgEgDgCgGIgDgLIgJhNIAUgCIAIBMIADAIIAFAFIAGACIAGAAIAJgBQAEgBAFgDIAAhWIARAAIAABWQAFADAEABIAJABIAGAAQAEgBACgBIAFgFQACgDABgFIAIhMIAUACIgJBNQAAAFgDAGQgDAGgEADQgDAEgHADQgGACgJAAQgKAAgGgCg");
	this.shape_10.setTransform(-43.4,12.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPA1IgPgGIgNAGQgHACgKAAQgKAAgFgCQgHgDgEgEQgEgDgCgGIgDgLIgJhNIAUgCIAIBMQABAFACADQACADADACQACABAEABIAGAAIAJgBQAFgBAEgDIAAhWIARAAIAABWQAFADAEABIAJABIAGAAIAGgCIAFgFIADgIIAIhMIAUACIgJBNIgDALQgCAFgEAEQgEAEgHADQgGACgJAAQgKAAgGgCg");
	this.shape_11.setTransform(-60.2,12.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAPIANgKIADgDIABgCIgBgBIgQgNIAEgGIAVAPQACACAAADQAAADgCADIgVAPgAgaAPIAOgKIADgDIACgCIgCgBIgRgNIAFgGIAVAPQABACAAADQAAADgBADIgVAPg");
	this.shape_12.setTransform(112.1,-13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAXIgHAEQgFACgGAAIgHgBQgDgBgDgCIgFgFQgBgDAAgFQAAgFABgDIAGgEQADgDADAAIAIgBIANAAIAAgEQAAgGgCgDQgDgDgFAAIgRADIgCgHIAIgCQAGgCAFAAQAGAAAEACQAEABADADQABACABAFIABAIIAAAYIAFAGIgHAGgAgKAFQgEACAAAFIABAEIADADIADABIAFABQADAAADgCIAGgDIAAgOIgMAAQgFAAgDADg");
	this.shape_13.setTransform(105.7,-12.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AANAbIAAgYIgaAAIAAAYIgJAAIAAg1IAJAAIAAAWIAaAAIAAgWIAKAAIAAA1g");
	this.shape_14.setTransform(99.7,-12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCAnIAAgtIgHAAIAAgIIAQAAIAAA1gAAHgaQgCgCAAgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQACgCADAAQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgCgAgQgaQgCgCAAgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQACgCADAAQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgCg");
	this.shape_15.setTransform(95.1,-14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANAXIgIAEQgDACgHAAIgHgBQgEgBgCgCIgFgFQgBgDAAgFQAAgFACgDQABgDAEgBQADgDADAAIAIgBIAOAAIAAgEQAAgGgEgDQgCgDgGAAIgQADIgDgHIAJgCQAFgCAGAAQAGAAAFACQADABACADQADACABAFIABAIIAAAYIAEAGIgHAGgAgLAFQgCACAAAFIAAAEIACADIAFABIADABQAFAAACgCIAHgDIAAgOIgOAAQgEAAgEADg");
	this.shape_16.setTransform(91,-12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAnIAAhBIgCgIIAIgEIADAFIAIgDQAFgCADAAQAMAAAGAHQAHAIAAANQgBAHgBAEQgBAEgEAFQgEAEgFACQgFACgGAAIgGAAIgHgBIAAAWgAgGgcIgHADIAAAhIAGABIAHABQADABADgCIAFgDQACgCACgEQACgEAAgFQAAgFgCgFQAAgDgDgDIgEgDIgHgBg");
	this.shape_17.setTransform(84.9,-11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEADIgIAAIAAAYIgJAAIAAg1IAJAAIAAAVIAGAAIACAAIACgCIAJgPIADgDQADgCADABIACAAIADAAIgBAIIgCAAIgDABIgCABIgJANIAAABIgBABIATAWIgHAHg");
	this.shape_18.setTransform(79.5,-12.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAmIABgJIAHABIAEAAIAEgBIADgDIABgEIABgCQgFAAgEgDQgEgCgCgGIgQgrIAJgEIAQAqQAAAEADACQACABAEAAIARgxIAKADIgVA4IgEAJIgEAFQgCACgEABIgHABg");
	this.shape_19.setTransform(73.3,-14);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAEIAAgIIAhAAIAAAIg");
	this.shape_20.setTransform(68,-13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANAXIgHAEQgFACgFAAIgIgBQgEgBgCgCIgEgFQgCgDAAgFQAAgFACgDIAEgEQADgDAEAAIAIgBIANAAIAAgEQAAgHgDgCQgDgDgEAAIgSADIgBgHQADgCAFAAQAGgCAFAAQAHAAADACQAEABACADQACACABAFIABAIIAAAYIAFAGIgHAGgAgKAFQgEACAAAFIABAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIADABIAFABQADAAAEgCIAFgDIAAgOIgNAAQgEAAgDADg");
	this.shape_21.setTransform(62.7,-12.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAbIAAgtIgTAAIAAgIIAvAAIAAAIIgTAAIAAAtg");
	this.shape_22.setTransform(57.4,-12.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAaQgFgCgDgEQgDgDgBgGQgCgFAAgGIACgKQABgFAEgEQAEgEAEgCQAGgDAFAAQAHAAAFADQAEACAEAEQADAEACAFQACAEAAAGQAAAGgCAFQgBAGgEADQgCAEgGACQgGADgGAAQgGAAgGgDgAgLgOQgFAFAAAJQAAAKAFAFQAEAGAHAAQAIAAAEgGQAEgFAAgKQAAgJgEgFQgEgGgIAAQgHAAgEAGg");
	this.shape_23.setTransform(52,-12.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AANAnIAAgjIgaAbIAAAIIgJAAIAAg1IAJAAIAAAiIAagaIAAgIIAKAAIAAA1gAgLgaQgFgDgDgHIAJgCQAAADAEADQACACAFAAQAFAAADgCQADgDABgDIAIACIgDAGQgBADgDABIgGADIgHABQgHAAgFgEg");
	this.shape_24.setTransform(45.8,-14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAaQgFgCgDgEQgDgDgBgGQgCgFAAgGIACgKQABgFAEgEQAEgEAEgCQAGgDAFAAQAHAAAFADQAEACAEAEQADAEACAFQACAEAAAGQAAAGgCAFQgBAGgEADQgCAEgGACQgGADgGAAQgGAAgGgDgAgLgOQgFAFAAAJQAAAKAFAFQAEAGAHAAQAIAAAEgGQAEgFAAgKQAAgJgEgFQgEgGgIAAQgHAAgEAGg");
	this.shape_25.setTransform(39.6,-12.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAmIAAhDIgYAAIAAgIIA7AAIAAAIIgZAAIAABDg");
	this.shape_26.setTransform(34.7,-14);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AABAGQgBgDgBgDQAAgBACgEIAVgPIAFAGIgPAKIgCADIgBABIABACIARANIgFAGgAgYAGQgCgCAAgEQAAgCACgDIAVgPIAEAGIgOAKIgCADIgBABIABACIAQANIgEAGg");
	this.shape_27.setTransform(29.4,-13.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_28.setTransform(22.5,-14);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_29.setTransform(19.8,-14);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AATAmIAAhCIglAAIAABCIgLAAIAAhLIA7AAIAABLg");
	this.shape_30.setTransform(14.7,-14);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAnIAAhBIgDgIIAJgEIADAFIAIgDQAEgCAFAAQALAAAGAHQAHAIAAANQAAAHgCAEQgCAFgDAEQgEAEgFACQgGACgFAAIgGAAIgHgBIAAAWgAgGgcIgHADIAAAhIAGABIAHABQADABADgCQACgBADgCIAEgGQABgEAAgFIgBgKIgDgGQgBgCgEgBIgGgBIgHABg");
	this.shape_31.setTransform(5.7,-11.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAaQgFgCgEgEQgDgDgBgGQgCgFAAgGIACgKQACgGADgDQADgEAFgCQAGgDAFAAQAGAAAGADQAGACACAEQAEADABAGIACAKQAAAGgCAFQgBAGgDADQgEAEgFACQgGADgGAAQgFAAgGgDgAgLgOQgEAEAAAKQAAALAEAEQAEAGAHAAQAIAAAEgGQAFgFAAgKQAAgJgFgFQgEgGgIAAQgHAAgEAGg");
	this.shape_32.setTransform(-0.6,-12.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAbIAAgtIgTAAIAAgIIAvAAIAAAIIgTAAIAAAtg");
	this.shape_33.setTransform(-6,-12.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAAbQgDgBgEgEIgFgIIgCgKIgLAAIAAAXIgKAAIAAg1IAKAAIAAAXIALAAIACgKQACgEADgEIAHgFQAEgCAHAAQAGAAAFADQAFACADAEQADAEACAFIABAKQAAAGgBAFQgBAFgDAEQgDAEgFACQgGADgGAAQgIAAgDgCgAAAgOQgEAFAAAJQAAAKAEAFQADAGAIAAQAHAAAEgGQAEgFAAgKQAAgJgEgFQgEgGgHAAQgIAAgDAGg");
	this.shape_34.setTransform(-12.6,-12.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgFAMIAEgMIgEgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgDABgCQACgCAEAAQADAAACACIABAFIAAACIgCAGIgFAMg");
	this.shape_35.setTransform(-18.3,-16.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMAmQgEgCgEgFQgDgEgBgGQgCgHAAgHQAAgHACgFQABgHACgEQACgFAFgDQAEgEAHgCIAKgCIAEgCIACgGIAJADIgBAFIgCACIgBACIgFAEIgNACIgGADIgFAEIgDAFIgBAGQADgCAFgDQAGgCAEAAQAFAAAGACQAFACACADQAEAEAAADIACAJQAAAHgCAEQgBAGgEADQgDAEgFACQgFACgHAAQgGAAgGgCgAgDgCIgFACIgEACIgDADIAAAMQABAFACADQABADAEADQAEABADAAQAIAAAEgEQAFgGAAgJQAAgQgQAAg");
	this.shape_36.setTransform(-22.8,-14.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AANAbIAAgiIgaAaIAAAIIgJAAIAAg1IAJAAIAAAiIAagaIAAgIIAKAAIAAA1g");
	this.shape_37.setTransform(-29,-12.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAnIAAhBIgEgIIAJgEIADAFIAIgDQAFgCAEAAQALAAAHAHQAGAIAAANQAAAHgCAEQgBAEgEAFQgDAEgGACQgFACgGAAIgGAAIgGgBIAAAWgAgFgcIgHADIAAAhIAFABIAHABQADABADgCIAFgDQACgCACgEQACgEAAgFQAAgFgCgFQAAgDgDgDIgFgDIgGgBg");
	this.shape_38.setTransform(-35.2,-11.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEAbIAAgtIgTAAIAAgIIAvAAIAAAIIgTAAIAAAtg");
	this.shape_39.setTransform(-40.8,-12.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIAbQgGgDgDgDQgDgFgCgEQgBgFAAgHIACgKQACgFADgEQAEgEAFgCQAGgDAFAAQAHAAAFACIAIACIgEAIIgIgDIgIAAQgEAAgCABQgDACgDADIgDAGIgCAHQAAAKAFAFQAFAFAHAAIAIAAIAJgDIADAIIgJADIgLABQgFAAgHgCg");
	this.shape_40.setTransform(-45.9,-12.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAOAbIAAgiIgaAaIAAAIIgKAAIAAg1IAKAAIAAAiIAagaIAAgIIAJAAIAAA1g");
	this.shape_41.setTransform(-51.9,-12.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAUAhIAAgMIgnAAIAAAMIgJAAIAAgUIAGAAIAEgIQACgDABgEIACgGIABgYIAiAAIAAAtIAHAAIAAAUgAgFAAIgDAHIgDAGIAXAAIAAglIgPAAQAAANgCALg");
	this.shape_42.setTransform(-57.9,-12.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AANAnIAAgjIgaAbIAAAIIgJAAIAAg1IAJAAIAAAiIAagaIAAgIIAKAAIAAA1gAgMgaQgFgEgCgGIAJgCQAAADAEADQACACAFAAQAFAAADgCQACgCACgEIAIACIgDAGQgBADgDABIgGADIgHABQgGAAgHgEg");
	this.shape_43.setTransform(-66.1,-14.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AANAbIAAgiIgZAaIAAAIIgKAAIAAg1IAKAAIAAAiIAZgaIAAgIIAKAAIAAA1g");
	this.shape_44.setTransform(-72.2,-12.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAOAbIAAgYIgaAAIAAAYIgKAAIAAg1IAKAAIAAAWIAaAAIAAgWIAJAAIAAA1g");
	this.shape_45.setTransform(-78.4,-12.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANAnIAAgjIgaAbIAAAIIgJAAIAAg1IAJAAIAAAiIAagaIAAgIIAKAAIAAA1gAgMgaQgFgEgCgGIAIgCQACAEADACQADACAEAAQAGAAACgCQACgCACgEIAIACIgCAGIgFAEIgGADIgHABQgGAAgHgEg");
	this.shape_46.setTransform(-84.5,-14.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAmIAAgtIgHAAIAAgIIAQAAIAAA1gAgCgZQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACIABAFQAAADgBACQgCACgDAAQgCAAgCgCg");
	this.shape_47.setTransform(-89,-14.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AASAhIAAgMIgsAAIAAg1IAKAAIAAAtIAaAAIAAgtIAKAAIAAAtIAHAAIAAAUg");
	this.shape_48.setTransform(-93.1,-12.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgBAmIAAgtIgHAAIAAgIIAPAAIAAA1gAgCgZQgCgCAAgDIACgFQACgCACAAQADAAACACIACAFQAAADgCACIgFACQgCAAgCgCg");
	this.shape_49.setTransform(-98,-14.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgDAxIAAgVQgIAAgHgDQgFgCgEgEIgFgIQgBgFAAgGQAAgFACgFQABgEAEgEQAEgEAFgCQAFgCAJgBIAAgVIAIAAIAAAVQAJABAEACIAJAGQAEAEACAEIABAKQABAGgCAEQgBAEgEAFQgEAEgGACQgEADgJAAIAAAVgAAFAUQALgBAEgFQAFgFAAgJQAAgRgUgCgAgTgNQgFAGAAAHQAAAIAFAGQAFAFALABIAAgnQgLABgFAFg");
	this.shape_50.setTransform(-103.1,-12.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgPAkQgHgDgFgFQgDgGgDgHQgCgHAAgIQAAgIACgGQADgHAEgFQADgGAIgDQAHgEAIAAQAKAAAGAEQAIAEAEAFQAFAGABAGQACAGAAAIQAAAIgCAHQgDAIgEAFQgFAFgGADQgGADgKAAQgJAAgGgDgAgKgcQgFADgDAEQgDAEgBAFQgCAHAAAFQAAAHACAFIAEAKQAEAFAEACQAFACAFAAQAGAAAFgCQAEgCAEgFIAEgKQACgFAAgHQAAgFgCgHQgBgFgDgEQgDgEgFgDQgEgCgHAAQgGAAgEACg");
	this.shape_51.setTransform(-111.2,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ofDistr, new cjs.Rectangle(-114.7,-18.1,229.5,36.3), null);


(lib.logoW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BGQgegcAAgqQAAgqAdgbQAbgbAnAAQAogBAdAaIgPATQgYgTgfAAQgbAAgUAUQgUAUAAAgQAAAcAUAVQAVAWAbAAQAVAAAPgLQAPgJAFgSIg5AAIAAgYIBXAAQAAAlgaAaQgZAYgjAAQgkAAgdgbg");
	this.shape.setTransform(57.6,11.6,0.253,0.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BeIhiiHIgDgGIABAHIAACGIgaAAIAAi8IAWAAIBgCGIAEAGIgBgHIAAiFIAaAAIAAC8g");
	this.shape_1.setTransform(51.9,11.6,0.253,0.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBeIAAi8IAZAAIAAC8g");
	this.shape_2.setTransform(47.4,11.6,0.253,0.253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJBeIBmiiIgGAAIhQAAIAAgaICDAAIhjCgIgDADIAGAAIBdAAIAAAZg");
	this.shape_3.setTransform(43.4,11.6,0.253,0.253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1BeIgYg9Ig6AAIgYA9IgbAAIBIi8IAQAAIBJC8gAgUAJIAoAAIgTgzIgBgGg");
	this.shape_4.setTransform(38.4,11.6,0.253,0.253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDBeIAAiJIAAgHIgCADIg8BPIgJAAIg8hMIgCgFIAAAIIAACHIgaAAIAAi8IAWAAIBGBdIBGhdIAXAAIAAC8g");
	this.shape_5.setTransform(32.5,11.6,0.253,0.253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0BeIgWg9Ig8AAIgXA9IgbAAIBIi8IAQAAIBJC8gAgVAJIApAAIgUgzIAAgGg");
	this.shape_6.setTransform(26.6,11.6,0.253,0.253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBMAAIAAAXIhMAAIAAA4IBTAAIAAAYg");
	this.shape_7.setTransform(19.3,11.6,0.253,0.253);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BIQgcgdAAgrQgBgpAbgbQAagdAoABQAtgBAZAeIgTARQgUgVgfAAQgbAAgTAUQgUAUAAAfQAAAhAWAVQAUASAXAAQAiAAAWgaIASAQQgLAQgTAJQgUAKgYAAQgkAAgbgZg");
	this.shape_8.setTransform(14.1,11.6,0.253,0.253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA2BeIhmiNIABAHIAACGIgaAAIAAi8IAWAAIBkCMIAAgHIAAiFIAZAAIAAC8g");
	this.shape_9.setTransform(8.4,11.6,0.253,0.253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_10.setTransform(3,11.6,0.253,0.253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBeIAAi8IAZAAIAAC8g");
	this.shape_11.setTransform(-1,11.6,0.253,0.253);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBeIhMhYIAABYIgZAAIAAi8IA8AAQAZAAARARQAQAQAAAXQAAAWgRAQQgPAPgVAAIBFBPgAgpgEIAeAAQARAAAKgKQAJgJAAgQQAAgLgJgJQgKgKgQAAIgfAAg");
	this.shape_12.setTransform(-4.9,11.6,0.253,0.253);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_13.setTransform(-10.1,11.6,0.253,0.253);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag6BeIAAi8IA4AAQAcABARAQQAQAQAAAaQAAAXgRAQQgRAQgXAAIgiAAIAABKgAgggDIAcAAQAQAAAKgJQAKgJAAgQQAAgPgKgIQgLgJgRAAIgaAAg");
	this.shape_14.setTransform(-14.7,11.6,0.253,0.253);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyBeIgyhNIgyBNIgeAAIBBhiIg5haIAfAAIAlA4IAFAKIArhCIAdAAIg5BZIBBBjg");
	this.shape_15.setTransform(-19.9,11.6,0.253,0.253);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_16.setTransform(-24.7,11.6,0.253,0.253);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AG5DVQhCgBg6gsQg7gtAAg3IAAjuIj7CeIE1DhIjtAAIjGiSIjnCSIxjAAQh3AAg8g7Qg5g3AAhlIAAjSIChAAIAAD1QAABfBdAAIFRAAQAfhSBAgqIhrAAQAKhbBRg+QBTg+B6gBII5AAIDGCRIDliRIEBAAIAAD8QAABYBlgBIEKAAIAAlTICgAAIAAFTIIVAAQAWABAOgOQAMgNAAgSQgBgtgxAAIniAAQAAhaA3hEQBKhcCXAAIGLAAIAABUIl0AAQg1AAggAXQgdAWgKAnIGFAAQBFAAAoAoQAlAkAAA0QABA0glAkQgoAphFAAgAucCAIIhAAIC5h0IkBi6IAAAuIllAAQg3AAgjAdQgbAXgHAgIHCAAIAABRIlSAAQhdAAgLBbg");
	this.shape_17.setTransform(16.8,-3,0.253,0.253);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AmxEoQiYh5AAivQABi2Cjh5QCmh7D/AAQB/AABHATQAhAIADASQABANgNAQQjrEig5BvQgVApANATQANASAwAAIHJAAQAbAAAPgoQAOglAAg3QAAhvg5hWQg/heh9gzIAagoQCMA4BUBpQBUBpAAB5QAABegqBLQgQAdgQANQgTAPgZAAIo9AAQhqAAgpg6Qgqg5AuhSQAqhGBRhyQBKhoA5hHQAYgfgDgKQgDgJgaAAQjLAAiRBzQiQBxAACYQAAClCHBoQCIBpDgAAQD3AACKh8IBjAAQhQBbiQAvQh5AniLAAQkOAAijiDg");
	this.shape_18.setTransform(-45.2,-3.3,0.253,0.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoW, new cjs.Rectangle(-60,-14.1,120,28.2), null);


(lib.logoB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag8BGQgegcAAgqQAAgqAdgbQAbgbAnAAQAogBAdAaIgPATQgYgTgfAAQgbAAgUAUQgUAUAAAgQAAAcAUAVQAVAWAbAAQAVAAAPgLQAPgJAFgSIg5AAIAAgYIBXAAQAAAlgaAaQgZAYgjAAQgkAAgdgbg");
	this.shape.setTransform(57.6,11.6,0.253,0.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA1BeIhiiHIgDgGIABAHIAACGIgaAAIAAi8IAWAAIBgCGIAEAGIgBgHIAAiFIAaAAIAAC8g");
	this.shape_1.setTransform(51.9,11.6,0.253,0.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBeIAAi8IAZAAIAAC8g");
	this.shape_2.setTransform(47.4,11.6,0.253,0.253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhJBeIBmiiIgGAAIhQAAIAAgaICDAAIhjCgIgDADIAGAAIBdAAIAAAZg");
	this.shape_3.setTransform(43.4,11.6,0.253,0.253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA1BeIgYg9Ig6AAIgYA9IgbAAIBIi8IAQAAIBJC8gAgUAJIAoAAIgTgzIgBgGg");
	this.shape_4.setTransform(38.4,11.6,0.253,0.253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABDBeIAAiJIAAgHIgCADIg8BPIgJAAIg8hMIgCgFIAAAIIAACHIgaAAIAAi8IAWAAIBGBdIBGhdIAXAAIAAC8g");
	this.shape_5.setTransform(32.5,11.6,0.253,0.253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA0BeIgWg9Ig8AAIgXA9IgbAAIBIi8IAQAAIBJC8gAgVAJIApAAIgUgzIAAgGg");
	this.shape_6.setTransform(26.6,11.6,0.253,0.253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBMAAIAAAXIhMAAIAAA4IBTAAIAAAYg");
	this.shape_7.setTransform(19.3,11.6,0.253,0.253);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag2BIQgcgdAAgrQgBgpAbgbQAagdAoABQAtgBAZAeIgTARQgUgVgfAAQgbAAgTAUQgUAUAAAfQAAAhAWAVQAUASAXAAQAiAAAWgaIASAQQgLAQgTAJQgUAKgYAAQgkAAgbgZg");
	this.shape_8.setTransform(14.1,11.6,0.253,0.253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA2BeIhmiNIABAHIAACGIgaAAIAAi8IAWAAIBkCMIAAgHIAAiFIAZAAIAAC8g");
	this.shape_9.setTransform(8.4,11.6,0.253,0.253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_10.setTransform(3,11.6,0.253,0.253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBeIAAi8IAZAAIAAC8g");
	this.shape_11.setTransform(-1,11.6,0.253,0.253);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAjBeIhMhYIAABYIgZAAIAAi8IA8AAQAZAAARARQAQAQAAAXQAAAWgRAQQgPAPgVAAIBFBPgAgpgEIAeAAQARAAAKgKQAJgJAAgQQAAgLgJgJQgKgKgQAAIgfAAg");
	this.shape_12.setTransform(-4.9,11.6,0.253,0.253);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_13.setTransform(-10.1,11.6,0.253,0.253);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag6BeIAAi8IA4AAQAcABARAQQAQAQAAAaQAAAXgRAQQgRAQgXAAIgiAAIAABKgAgggDIAcAAQAQAAAKgJQAKgJAAgQQAAgPgKgIQgLgJgRAAIgaAAg");
	this.shape_14.setTransform(-14.7,11.6,0.253,0.253);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAyBeIgyhNIgyBNIgeAAIBBhiIg5haIAfAAIAlA4IAFAKIArhCIAdAAIg5BZIBBBjg");
	this.shape_15.setTransform(-19.9,11.6,0.253,0.253);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_16.setTransform(-24.7,11.6,0.253,0.253);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AG5DVQhCgBg6gsQg7gtAAg3IAAjuIj7CeIE1DhIjtAAIjGiSIjnCSIxjAAQh3AAg8g7Qg5g3AAhlIAAjSIChAAIAAD1QAABfBdAAIFRAAQAfhSBAgqIhrAAQAKhbBRg+QBTg+B6gBII5AAIDGCRIDliRIEBAAIAAD8QAABYBlgBIEKAAIAAlTICgAAIAAFTIIVAAQAWABAOgOQAMgNAAgSQgBgtgxAAIniAAQAAhaA3hEQBKhcCXAAIGLAAIAABUIl0AAQg1AAggAXQgdAWgKAnIGFAAQBFAAAoAoQAlAkAAA0QABA0glAkQgoAphFAAgAucCAIIhAAIC5h0IkBi6IAAAuIllAAQg3AAgjAdQgbAXgHAgIHCAAIAABRIlSAAQhdAAgLBbg");
	this.shape_17.setTransform(16.8,-3,0.253,0.253);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AmxEoQiYh5AAivQABi2Cjh5QCmh7D/AAQB/AABHATQAhAIADASQABANgNAQQjrEig5BvQgVApANATQANASAwAAIHJAAQAbAAAPgoQAOglAAg3QAAhvg5hWQg/heh9gzIAagoQCMA4BUBpQBUBpAAB5QAABegqBLQgQAdgQANQgTAPgZAAIo9AAQhqAAgpg6Qgqg5AuhSQAqhGBRhyQBKhoA5hHQAYgfgDgKQgDgJgaAAQjLAAiRBzQiQBxAACYQAAClCHBoQCIBpDgAAQD3AACKh8IBjAAQhQBbiQAvQh5AniLAAQkOAAijiDg");
	this.shape_18.setTransform(-45.2,-3.3,0.253,0.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoB, new cjs.Rectangle(-60,-14.1,120,28.2), null);


(lib.bgImg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg3();
	this.instance.parent = this;
	this.instance.setTransform(-300,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg3_1, new cjs.Rectangle(-300,-600,600,1200), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_201 = function() {
		//this.stop();
		playVideo();
	}
	this.frame_335 = function() {
		hideVideo();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(201).call(this.frame_201).wait(134).call(this.frame_335).wait(51));

	// ofDistr
	this.instance = new lib.ofDistr();
	this.instance.parent = this;
	this.instance.setTransform(0,242.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(345).to({_off:false},0).to({alpha:1},5).wait(36));

	// logo
	this.instance_1 = new lib.logoB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17,247);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).to({_off:true},55).wait(11).to({_off:false},0).to({_off:true},45).wait(185));

	// logo
	this.instance_2 = new lib.logoW();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-17,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},90).wait(55).to({_off:false},0).to({_off:true},11).wait(45).to({_off:false},0).wait(134).to({scaleX:1.67,scaleY:1.67,x:0,y:0,alpha:0},0).to({alpha:1},5).wait(46));

	// t2_2
	this.instance_3 = new lib.t2_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-188.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(166).to({_off:false},0).to({alpha:1},5).wait(29).to({alpha:0.5},0).to({_off:true},1).wait(185));

	// t2_1
	this.instance_4 = new lib.t2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-39.6,-231.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(156).to({_off:false},0).to({alpha:1},5).wait(39).to({alpha:0.5},0).to({_off:true},1).wait(185));

	// t1_3
	this.instance_5 = new lib.t1_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.9,-199.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({alpha:1},5).wait(30).to({alpha:0.5},0).to({_off:true},1).wait(326));

	// t1_2
	this.instance_6 = new lib.t1_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.4,-105.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({_off:false},0).to({alpha:1},5).wait(30).to({alpha:0.5},0).to({_off:true},1).wait(241));

	// t1_1
	this.instance_7 = new lib.t1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-35.8,-162.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({alpha:1},5).wait(40).to({alpha:0.5},0).to({_off:true},1).wait(241));

	// round
	this.instance_8 = new lib.round();
	this.instance_8.parent = this;
	this.instance_8.setTransform(43.2,-10,1.983,1.246);
	this.instance_8.compositeOperation = "lighter";
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).to({alpha:0},8).to({_off:true},1).wait(51).to({_off:false,scaleX:2.78,scaleY:2.53,x:0,alpha:1},0).to({alpha:0},8).to({_off:true},1).wait(76).to({_off:false,y:-290,alpha:1},0).to({alpha:0},8).to({_off:true},1).wait(221));

	// bgImg1
	this.instance_9 = new lib.bgImg1_1();
	this.instance_9.parent = this;
	this.instance_9.alpha = 0.5;
	this.instance_9._off = true;

	this.instance_10 = new lib.bgImg2_1();
	this.instance_10.parent = this;
	this.instance_10.alpha = 0.5;
	this.instance_10._off = true;

	this.instance_11 = new lib.bgImg3_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,0.5,0.5);
	this.instance_11.alpha = 0.5;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(1).to({alpha:1},0).to({_off:true},2).wait(1).to({_off:false,alpha:0.5},0).to({_off:true},1).wait(2).to({_off:false,alpha:1},0).wait(48).to({alpha:0.5},0).to({_off:true},1).wait(326));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(63).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).to({_off:true},3).wait(2).to({_off:false,alpha:0.5},0).wait(1).to({alpha:1},0).wait(14).to({y:2.7},0).wait(1).to({y:11.1},0).wait(1).to({y:25.2},0).wait(1).to({y:45.1},0).wait(1).to({y:70.1},0).wait(1).to({y:99.5},0).wait(1).to({y:131.9},0).wait(1).to({y:165.3},0).wait(1).to({y:197.9},0).wait(1).to({y:227.8},0).wait(1).to({y:253.5},0).wait(1).to({y:273.9},0).wait(1).to({y:288.5},0).wait(1).to({y:297.2},0).wait(1).to({y:300},0).wait(45).to({alpha:0.5},0).to({_off:true},1).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(149).to({_off:false},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.5},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).to({scaleX:1,scaleY:1,x:-14,y:88},43).wait(1).to({alpha:0.5},0).to({_off:true},1).wait(185));

	// bg
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},201).wait(134).to({_off:false},0).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;