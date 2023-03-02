(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,290);


(lib.dney = function() {
	this.initialize(img.dney);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,37);


(lib.light1 = function() {
	this.initialize(img.light1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.ostalos = function() {
	this.initialize(img.ostalos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,25);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,274,124);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,59);// helper functions:

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


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-109,-24,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-109,-24,218.4,47.2), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-110,-50,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-110,-50,219.2,99.2), null);


(lib.ostalos_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ostalos();
	this.instance.parent = this;
	this.instance.setTransform(-78,-10,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ostalos_1, new cjs.Rectangle(-78,-10,155.2,20), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC928").s().p("EBj0B0dUAAAgsAgDRgoMUgDKgmygFwgd8Qlx98ndwaQnvxBodABQoeAAnuPrQnePKlwbpUgFxAbogDKAj0UgDRAlGAAAAonMghQAAAUAAAgongDRglGUgDKgj0gFxgboQlw7pnevKQnvvrodAAQoegBnuRBQneQalwd8UgFwAd8gDLAmyUgDRAoMAAAAsAMghSAAAUAAAgvZAF5grRUAFsgpzAKXggOUAKXggPANcgRrQG0o+HPknQHckvHqAAQIsAAIZFrQILFgHiKoQHaKbGdO6QGbOyFKScQFKycGbuyQGdu5HZqcQHjqoIKlgQIZlrItAAQHqAAHbEvQHQEnGzI+UANcARqAKXAgQUAKXAgOAFsApzUAF5ArRAAAAvZg");
	this.shape.setTransform(-8.1,0,0.096,0.096);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Al3F9QigicAAjjQAAjgCgibQCdiYDcAAQDdAACbCYQCeCbgBDgQABDjieCcQibCZjdAAQjdAAiciZgAk2lFQh/CDABDAQgBDDB/CEQB+CEC6gBQC5ABB+iEQB/iEgBjDQABjAh/iDQh+iCi5AAQi6AAh+CCgACiE3IiokMIhlAAIAAEMIhhAAIAApvIDuAAQBwAAA2AsQA1AtAABaQAABQgwArQgpAmhMAHICzEUgAhrgiIBkAAQBPAAAhgOQAxgXAAhCQAAg5grgXQghgRg7AAIh+AAg");
	this.shape_1.setTransform(84.8,66.5,0.096,0.096);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-90,-71.7,180,143.4), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light1();
	this.instance.parent = this;
	this.instance.setTransform(-18,-18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-18,-18,36,36), null);


(lib.dney_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dney();
	this.instance.parent = this;
	this.instance.setTransform(-42,-15,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dney_1, new cjs.Rectangle(-42,-15,84,29.6), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-84,-106,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-84,-106,175,203), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-240,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-120,-240,240,480), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#194926").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-120,-200,240,400), null);


(lib._8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlzKLQiVh2AAjYQgBiBBKhiQAvhBBGgsQg6gpgng5Qg+hcAAh2QAAjQCKh0QCHhwDYAAQDXAACHBwQCMB0AADQQAAB3g/BcQgoA4g5ApQBHAsAvBBQBKBkgBB/QAADYiUB2QiQBxjkAAQjkAAiQhxgAhsCyQgpArAABNQAABNAoAqQApApBFAAQBEAAAqgqQAogrAAhLQAAhMgpgsQgqgqhEAAQhDAAgpAqgAhVmmQgfAmgBBFQAABHAhAnQAeAjA3AAQA3AAAegjQAhgnAAhHQAAhDgigmQgfgkg2AAQg3gBgeAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._8, new cjs.Rectangle(-52.1,-76.4,104.3,152.9), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-81,71.7,0.3,0.3,0,0,0,-0.1,0.1);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190).to({_off:false},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:143.9,x:-80.8,y:65.2,alpha:0.25},0).wait(1).to({regX:-0.3,regY:0.2,scaleX:0.44,scaleY:0.44,rotation:287.8,x:-80.7,y:58.9,alpha:0.5},0).wait(1).to({regX:-0.2,scaleX:0.51,scaleY:0.51,rotation:432,x:-80.6,y:52.2,alpha:0.75},0).wait(1).to({regY:0.1,scaleX:0.58,scaleY:0.58,rotation:575.9,x:-80.1,y:45.8,alpha:1},0).wait(1).to({regY:-0.1,scaleX:0.65,scaleY:0.65,rotation:569.8,x:-79.9,y:39.4},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.72,scaleY:0.72,rotation:563.8,x:-79.3,y:32.9},0).wait(1).to({regX:-0.2,regY:0,scaleX:0.79,scaleY:0.79,rotation:557.8,x:-78.7,y:26.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:551.8,x:-78,y:20.1},0).wait(1).to({regX:-0.1,scaleX:0.93,scaleY:0.93,rotation:545.8,x:-77.2,y:13.6},0).wait(1).to({regY:0.1,scaleX:1,scaleY:1,rotation:540,x:-76.1,y:7.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:522,x:-75,y:0.9},0).wait(1).to({regX:-0.2,scaleX:0.86,scaleY:0.86,rotation:503.9,x:-73.7,y:-5.3},0).wait(1).to({regX:-0.1,scaleX:0.79,scaleY:0.79,rotation:485.9,x:-72.3,y:-11.6},0).wait(1).to({regY:0.2,scaleX:0.72,scaleY:0.72,rotation:467.8,x:-70.9,y:-17.9},0).wait(1).to({regY:0.1,scaleX:0.65,scaleY:0.65,rotation:450,x:-69,y:-24.1},0).wait(1).to({regX:-0.2,regY:0.2,scaleX:0.58,scaleY:0.58,rotation:432,x:-67.2,y:-30.4},0).wait(1).to({regX:-0.3,scaleX:0.51,scaleY:0.51,rotation:413.9,x:-65.2,y:-36.5,alpha:0.75},0).wait(1).to({regX:-0.5,regY:0.1,scaleX:0.44,scaleY:0.44,rotation:395.9,x:-62.9,y:-42.5,alpha:0.5},0).wait(1).to({regX:-0.4,regY:0.2,scaleX:0.37,scaleY:0.37,rotation:377.8,x:-60.2,y:-48.3,alpha:0.25},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.3,scaleY:0.3,rotation:360,x:-57.1,y:-54,alpha:0},0).to({_off:true},1).wait(25));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.5,-207.9,0.285,0.285);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(165).to({scaleX:0.29,scaleY:0.29,x:-60.9,y:-206.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-59.1,y:-200.6},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-55.8,y:-190.9},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-51.1,y:-177},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:-45,y:-159.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-37.7,y:-137.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-29.7,y:-114.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-21.5,y:-90},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-13.7,y:-66.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-6.7,y:-46.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-0.9,y:-29.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:3.6,y:-16},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:6.7,y:-7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:8.4,y:-1.7},0).wait(1).to({scaleX:1,scaleY:1,x:9,y:0},0).wait(41).to({scaleX:0.28,scaleY:0.28,x:-61.5,y:-207.9},15).wait(1));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-64,-207.9,0.292,0.16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(165).to({scaleX:0.3,scaleY:0.17,x:-63.5,y:-206.1},0).wait(1).to({scaleX:0.32,scaleY:0.2,x:-61.7,y:-200.5},0).wait(1).to({scaleX:0.35,scaleY:0.25,x:-58.8,y:-190.9},0).wait(1).to({scaleX:0.4,scaleY:0.32,x:-54.5,y:-177},0).wait(1).to({scaleX:0.46,scaleY:0.41,x:-49,y:-159.1},0).wait(1).to({scaleX:0.53,scaleY:0.51,x:-42.4,y:-137.7},0).wait(1).to({scaleX:0.61,scaleY:0.63,x:-35.1,y:-114.1},0).wait(1).to({scaleX:0.69,scaleY:0.75,x:-27.7,y:-89.9},0).wait(1).to({scaleX:0.77,scaleY:0.87,x:-20.6,y:-66.8},0).wait(1).to({scaleX:0.84,scaleY:0.97,x:-14.2,y:-46.2},0).wait(1).to({scaleX:0.9,scaleY:1.05,x:-9,y:-29.1},0).wait(1).to({scaleX:0.95,scaleY:1.12,x:-4.9,y:-16},0).wait(1).to({scaleX:0.98,scaleY:1.17,x:-2.1,y:-6.9},0).wait(1).to({scaleX:0.99,scaleY:1.19,x:-0.5,y:-1.7},0).wait(1).to({scaleX:1,scaleY:1.2,x:0,y:0},0).wait(41).to({scaleX:0.29,scaleY:0.16,x:-64,y:-207.9},15).wait(1));

	// t2
	this.instance_3 = new lib.t2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,2,0.02,0.02,0,0,0,0,2.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},15,cjs.Ease.get(1)).to({_off:true},45).wait(57));

	// mask
	this.instance_4 = new lib._8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,21,4,4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,alpha:0.898},14,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// bgImg
	this.instance_5 = new lib.bgImg1_1();
	this.instance_5.parent = this;
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(103).to({_off:false},0).to({alpha:1},15).to({_off:true},1).wait(117));

	// dney
	this.instance_6 = new lib.dney_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,120.5,0.9,0.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({alpha:1},15).to({_off:true},45).wait(117));

	// ostalos
	this.instance_7 = new lib.ostalos_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-78.4,0.9,0.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},0).to({alpha:1},15).to({_off:true},45).wait(117));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_74 = new cjs.Graphics().p("AlzKKQiVh1AAjYQgBiABKhjQAvhCBGgqQg6gqgng4Qg+hdAAh2QAAjQCKh0QCHhwDYAAQDXAACHBwQCMB0AADQQAAB3g/BcQgoA4g5AqQBHAqAvBCQBKBkgBB/QAADXiUB2QiQByjkABQjkgBiQhygAhsCyQgpArAABNQAABNAoAqQApAqBFAAQBEAAAqgrQAogrAAhLQAAhMgpgrQgqgrhEAAQhDAAgpAqgAhVmmQgfAmgBBGQAABGAhAnQAeAjA3AAQA3AAAegjQAhgnAAhGQAAhEgigmQgfglg2ABQg3AAgeAig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_graphics_74,x:0,y:22.3}).wait(45).to({graphics:null,x:0,y:0}).wait(117));

	// bgImg2
	this.instance_8 = new lib.bgImg2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.5,23.3);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(74).to({_off:false},0).to({_off:true},45).wait(117));

	// t1
	this.instance_9 = new lib.t1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2,-10);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},15).wait(29).to({alpha:0},15).to({_off:true},1).wait(176));

	// bgImg
	this.instance_10 = new lib.bgImg1_1();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-240,240,480);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: 'EF53D39326624B01802080CA2405F274',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/dney.png", id:"dney"},
		{src:"images/light1.png", id:"light1"},
		{src:"images/ostalos.png", id:"ostalos"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"}
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
an.compositions['EF53D39326624B01802080CA2405F274'] = {
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