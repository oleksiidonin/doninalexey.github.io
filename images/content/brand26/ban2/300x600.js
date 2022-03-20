(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,600);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,80);


(lib.box_fire = function() {
	this.initialize(img.box_fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,142);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,320);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,78);// helper functions:

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


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-104.5,-15.7,209.1,31.6), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqyCQIAAg6IiQAAIAAA6IgdAAIAAhzIAdAAIAAAcIBzAAIAAirIhWAAIAAgdIBzAAIAADIIAdAAIAABXgAxnCQIAAg6IiQAAIAAA6IgcAAIAAhzIAcAAIAAiPIAdAAIAACPIgdAAIAAAcIB0AAIAAirIhXAAIAAgdIBzAAIAADIIAdAAIAABXgAS+BWIAAgdIgcAAIAAhVIgdAAIAAByIgdAAIAAjlIAdAAIAABWIAdAAIAAg5IAcAAIAACrIA6AAIAAAdgAQeBWIAAhyIhzAAIAAByIgdAAIAAjlIAdAAIAABWIBzAAIAAhWIAdAAIAADlgAK0BWIAAjlICsAAIAAAdIiPAAIAADIgAITBWIAAgdIA6AAIAAAdgAEABWIAAjlIBzAAIAAAdIhXAAIAAA5IBXAAIAAg5IAdAAIAABWIh0AAIAABVIB0AAIAAAdgAgkBWIAAisIgdAAIAAg5IA6AAIAADlgAi0BWIAAjlIAdAAIAACsIAdAAIAAA5gAlUBWIAAjIIhXAAIAAgdIDKAAIAAAdIhWAAIAADIgAnYBWIAAhWIAdAAIAABWgApoBWIAAhWIAcAAIAABWgAviBWIAAgdIgdAAIAAgcIgdAAIAAhzIAdAAIAABzIAdAAIAAAcIA5AAIAAAdgAT4A5IAAirIAcAAIAACrgAJNA5IAAgcIAcAAIAAAcgAH2A5IAAgcIgdAAIAAhzIAdAAIAAgcIAdAAIAAgdIA6AAIAAAdIAcAAIAAAcIAdAAIAABzIgdAAIAAhzIgcAAIAAgcIg6AAIAAAcIgdAAIAABzIAdAAIAAAcgAGQA5IAAhVIAcAAIAABVgAupA5IAAgcIAdAAIAAAcgAh6AdIAAg5IAcAAIAAA5gAh6AdgAtCAdIAAiPIAdAAIAACPgAtCAdgAuMAdIAAhzIAdAAIAABzgAuMAdgApMAAIAAhWIAdAAIAAA6IA7AAIAAg6IAcAAIAABWgAhegcIAAg6IAdAAIAAA6gAhBhWgAovhWIAAg5IA7AAIAAA5gAuphWIAAgcIg5AAIAAgdIA5AAIAAAdIAdAAIAAAcgAv/hWIAAgcIAdAAIAAAcgAv/hWgAS+hyIAAgdIA6AAIAAAdgAS+hygAvihyg");
	this.shape.setTransform(0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-130,-15.2,260,28.8), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKtBvIAhijIAoAAIgDALQAQgNATAAQAWAAAOAOQAQAQAAAYQAAAegTAUQgUAUgbAAQgaAAgLgQIgMA5gALzgKQgIAIAAAPQAAAKAGAHQAGAGALAAQANAAAIgJQAIgJAAgQQAAgKgGgGQgGgGgLAAQgNAAgIAKgAwqBEIAJgiIAGAAQAIAAAGgJQAFgJAEgRIANgzIBtAAIgYB4IgrAAIAShWIgfAAIgFASQgJAngMAQQgMAQgVAAQgJAAgMgDgAI4A3QgRgPAAgZQAAgdAUgUQAVgUAgAAQAbAAARAOQAPAPAAAYQAAAJgCAKIhZAAQADAUAYgBQATAAALgJIASAaQgVAQgfAAQgeAAgRgPgAKEgDQABgJgHgGQgFgFgLgBQgUAAgHAVIAxAAIAAAAgAGsA3QgSgPAAgZQABgdAUgUQAWgUAgAAQAVAAAPAJQAPAIAHAQIgkARQgHgQgRAAQgNAAgIAKQgIAIAAAOQgBAYAYAAQARAAAJgQIAfATQgSAfgqAAQgdAAgRgPgADGA3QgQgPAAgZQAAgdAUgUQATgUAbAAQAbAAAKARIACgPIArAAIgYB4IgoAAIACgMQgOAOgVAAQgUAAgPgPgADpgKQgIAIAAAPQAAAKAGAHQAGAGALAAQANAAAIgJQAIgJAAgQQAAgKgGgGQgGgGgLAAQgNAAgIAKgAh5A3QgQgPgBgZQAAgdAUgUQATgUAbAAQAaAAAMARIACgPIAqAAIgXB4IgpAAIADgMQgOAOgVAAQgVAAgOgPgAhWgKQgJAIABAPQgBAKAHAHQAGAGAKAAQANAAAJgJQAHgJABgQQgBgKgGgGQgFgGgMAAQgNAAgHAKgAmhA3QgRgPAAgZQAAgdAVgUQAVgUAgAAQAeAAARAPQARAPAAAYQAAAegVAUQgVAUghAAQgdAAgRgPgAl+gKQgJAIAAAPQAAAKAHAHQAFAGALAAQANAAAIgJQAIgJAAgQQAAgKgGgGQgGgGgLAAQgNAAgHAKgAPtBEIAGghIgSAAIgbAhIgvAAIAkgoQgUgKAAgTQABgYASgNQASgOAgAAIA/AAIgZB4gAPTgCQAAAKAPAAIAXAAIAFgaIgWAAQgVAAAAAQgANVBEIAZh4IAqAAIgYB4gABnBEIAJgqIgsAAIgIAqIgqAAIAYh4IArAAIgKAtIAsAAIAJgtIAqAAIgYB4gAkcBEIAXh4IBAAAQAWAAALAIQAMAHAAAOQAAAVgXAIQAQAHAAARQAAASgPAKQgOAKgbAAgAjxAoIAbAAQARAAAAgMQAAgJgNgBIgbAAgAjogDIAWAAQAIAAAFgEQAEgDAAgGQAAgJgMAAIgXAAgAoWBEIARhWIgmAAIAGgiIB5AAIgHAiIgnAAIgRBWgAp7BEIAXh4IArAAIgYB4gArCBEIAMg+IgoAzIgSAAIgUg2IgNBBIgmAAIAYh4IAsAAIAVA+IAyg+IApAAIgZB4gAuCBEIAYh4IAqAAIgYB4gAN3hHQgHgGAAgJQAAgLAIgGQAHgHAMAAQAMAAAGAFQAHAHAAAIQAAALgIAHQgHAHgNAAQgKAAgHgGgApahHQgGgGAAgJQAAgLAHgGQAIgHAMAAQAKAAAIAFQAGAHAAAIQAAALgHAHQgIAHgNAAQgKAAgHgGgAthhHQgGgGAAgJQAAgLAHgGQAIgHAMAAQALAAAHAFQAHAHgBAIQABALgIAHQgIAHgMAAQgKAAgIgGg");
	this.shape.setTransform(-22.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6000").s().p("A1SCZIBZkxMApMAAAIhaExg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-136.2,-15.2,272.5,30.6), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-135.2,-52.5,0.98,0.98);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGBuQgcgYAAgqQAAgJADgTIAeiRIA8AAIgdCQQgCALAAALQAAAvAyAAQAcAAAQgQQAQgRAHgkIAdiQIA7AAIgdCUQgYB0hsAAQgxAAgdgZgAmoBnQgjgeAAgzQAAhDAtgsQAugtBJAAQBKAAAjAuIgrAjQgYgdgsAAQguAAgbAdQgcAdAAAqQAAAeAUASQAUASAkAAQAXAAAUgKIAPhNIA4AAIgWBqQgpAgg7AAQg7AAgjgggAFfCCIAfiZIhkB+IgbAAIg2iAIgfCbIg4AAIA0kDIAxAAIBBChICAihIA0AAIg0EDg");
	this.shape.setTransform(0,0,1,1,0,0,0,-72.5,-39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-135.2,-52.5,270.5,105.2), null);


(lib.fire_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_42
	this.instance = new lib.fire();
	this.instance.parent = this;
	this.instance.setTransform(-180,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire_1, new cjs.Rectangle(-180,-19,480,320), null);


(lib.box_fire_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_7
	this.instance = new lib.box_fire();
	this.instance.parent = this;
	this.instance.setTransform(-133,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_fire_1, new cjs.Rectangle(-133,-71,266,142), null);


(lib.box_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-127,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(-127,-40,260,80), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-170,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-170,-300,340,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(340.4,-249.5,1.15,1.15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(164).to({_off:false},0).to({x:36.8},10,cjs.Ease.get(1)).wait(51));

	// logo
	this.instance_1 = new lib.logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-23);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(154).to({_off:false},0).to({alpha:1},10).wait(40).to({alpha:0},10).wait(11));

	// fire
	this.instance_2 = new lib.fire_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-40.4,1,1,0,0,0,0,-40.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).to({alpha:1},20).wait(40).to({alpha:0},20).wait(1));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-91.8,0.024,0.024,0,0,0,0,-4.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).to({regY:0,scaleX:1.2,scaleY:1.2},10,cjs.Ease.get(1)).wait(30).to({alpha:0},10).to({_off:true},1).wait(70));

	// box_fire
	this.instance_4 = new lib.box_fire_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7,3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).to({alpha:1},10).wait(40).to({alpha:0},10).to({_off:true},1).wait(70));

	// t2
	this.instance_5 = new lib.t2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-19);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({alpha:1},10).wait(25).to({alpha:0},10).to({_off:true},1).wait(130));

	// fire
	this.instance_6 = new lib.fire_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-40.4,1,1,0,0,0,0,-40.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({alpha:1},15).wait(30).to({alpha:0},20).to({_off:true},1).wait(120));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(36.8,-249.5,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({x:370.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(175));

	// box
	this.instance_8 = new lib.box_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3,27,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.9,scaleY:0.9,x:-2.9},5,cjs.Ease.get(-1)).wait(2).to({scaleX:1,scaleY:1,x:-3},0).wait(32).to({x:287},10,cjs.Ease.get(-1)).to({_off:true},1).wait(175));

	// bgImg
	this.instance_9 = new lib.bgImg_1();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({scaleX:0.9,scaleY:0.9},0).wait(2).to({scaleX:1,scaleY:1},0).wait(218));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-300,780,600);


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
p.nominalBounds = new cjs.Rectangle(-84,299,780,602);
// library properties:
lib.properties = {
	id: '6144DDAFBF1E4A4C98FB1C590189C0F0',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/box.png", id:"box"},
		{src:"images/box_fire.png", id:"box_fire"},
		{src:"images/fire.png", id:"fire"},
		{src:"images/logo.png", id:"logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6144DDAFBF1E4A4C98FB1C590189C0F0'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;