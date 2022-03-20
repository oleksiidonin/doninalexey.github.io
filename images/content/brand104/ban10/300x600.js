(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.btnBg = function() {
	this.initialize(img.btnBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,46);


(lib.vapor = function() {
	this.initialize(img.vapor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,265);// helper functions:

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


(lib.vaporMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.vapor();
	this.instance.parent = this;
	this.instance.setTransform(-47,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.vapor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.vaporMc, new cjs.Rectangle(-47,-148,117,265), null);


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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AEgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgEIgCgDQgCgDgIAAQgFAAgHACIAAgDQAFgCAHAAQAKAAAEAEQACADAAAFQAAAFgCACIgFACQAEABACACQACACAAAFQAAAHgDADQgEADgLAAQgHAAgFgCgAgjAVQgEgFAAgNQAAgNAEgEQAGgFAHAAQAJAAAEAFQAFADAAANIggAAIAAABQAAAMAEAEQAEADAIAAQAIAAAFgBIAAADIgNABQgKAAgFgEgAgIAAQgBgKgCgCQgDgEgIAAQgHAAgDAEQgEADAAAJIAcAAIAAAAgAibAVQgEgFAAgNQAAgNAEgEQAFgFAKAAQAJAAAFAFQAFAEAAANQAAANgFAFQgEAEgKAAQgKAAgFgEgAiYgMQgDADAAAMQAAAMADAEQAEADAIAAQAIAAAEgDQADgEAAgMQAAgMgDgDQgFgEgHAAQgIAAgEAEgAn7AVQgDgFAAgNQAAgNADgEQAGgFAJAAQAJAAAGAFQAEAEAAANQAAANgEAFQgFAEgKAAQgKAAgFgEgAn4gMQgDADAAAMQAAAMADAEQAEADAIAAQAJAAACgDQAEgEAAgMQAAgMgEgDQgCgEgJAAQgHAAgFAEgAqjAWQgDgDAAgGQAAgHADgDQAEgDAIAAQAJAAAIAFIAAgGQAAgJgDgDQgDgDgJAAQgJAAgFACIAAgDQAHgCAHAAQALAAAFAEQACAEAAAKIAAAZIgDAAIAAgEQgHAFgLAAQgHAAgEgDgAqfAFQgCACAAAGQAAAFACACQABACAHAAQAKAAAHgFIAAgJQgHgFgKAAQgHAAgBACgAspAVQgEgFgBgNQABgNAEgEQAEgFAKAAQAKAAAFAFQAFAEgBANQABANgFAFQgEAEgLAAQgKAAgEgEgAsmgMQgEADAAAMQAAAMAEAEQADADAIAAQAJAAADgDQAEgEAAgMQAAgMgEgDQgDgEgJAAQgIAAgDAEgAuFAWQgDgDAAgGQAAgHADgDQAFgDAHAAQAJAAAIAFIAAgGQAAgJgDgDQgCgDgKAAQgIAAgGACIAAgDQAHgCAIAAQAKAAAFAEQADADAAALIAAAZIgEAAIAAgEQgHAFgKAAQgIAAgEgDgAuBAFQgCACgBAGQABAFACACQACACAGAAQAKAAAHgFIAAgJQgIgFgJAAQgGAAgCACgAwnAWQgCgDgBgGQABgHACgDQAEgDAHAAQAKAAAHAFIAAgGQAAgJgCgDQgDgDgJAAQgJAAgFACIAAgDQAHgCAHAAQALAAAEAEQADADABALIAAAZIgFAAIAAgEQgGAFgLAAQgIAAgDgDgAwkAFQgCACAAAGQAAAFACACQACACAHAAQAJAAAHgFIAAgJQgHgFgJAAQgHAAgCACgAyDAVQgDgFAAgNQAAgNADgEQAFgFAJAAQAJAAAEAFQAEAEAAAMIgfAAIAAABQAAAMADAEQAEADAJAAQAHAAAFgBIAAADIgMABQgLAAgFgEgAxoAAQAAgKgCgCQgFgEgGAAQgHAAgEAEQgCACgBAKIAbAAIAAAAgAz6AWQgDgCgBgHQABgHADgDQADgDAHAAQAKAAAIAFIAAgGQAAgJgDgDQgDgDgKAAQgHAAgGACIAAgDQAHgCAHAAQALAAAEAEQADADAAALIAAAZIgDAAIAAgEQgHAFgLAAQgHAAgDgDgAz4AFQgCADAAAFQAAAFACACQACACAHAAQAKAAAHgFIAAgJQgIgFgJAAQgHAAgCACgA1cAVQgFgFAAgLIAAgCIABgOQABgPAFgFQAGgGAIgBIANgCIAAADIgMACQgOAEgDAQQAFgDAHgBIADAAQAJAAAFAFQAFAEAAANQAAANgFAFQgFAEgJAAQgLAAgEgEgA1ZgMQgDADAAAMQAAANADADQADADAJAAQAIAAAEgDQADgDAAgNQAAgMgDgDQgFgDgHAAQgIAAgEADgA2PAVQgEgEAAgOQAAgNAEgEQAFgFAKAAQAKAAAEAFQAFAEAAANQAAANgFAFQgEAEgKAAQgKAAgFgEgA2MgMQgDADgBAMQABAMADAEQADADAJAAQAJAAACgDQAEgEAAgMQAAgMgEgDQgDgEgIAAQgJAAgDAEgA3HAXIAAgEQAIADAIAAQALAAAEgDQADgCABgEIAAgGQAAgFgDgCQgFgDgKAAIgBAAIAAgDIABAAQAJAAAEgEQADgCABgEIAAgGQgBgDgCgBQgDgEgLAAQgJAAgHACIAAgCQAGgDAKAAQANAAAFAEQACAEAAAHQAAAHgCACQgDADgEABQAFABADADQADACAAAHQAAAJgEADQgGAFgNAAQgJAAgHgCgAVjAYIAAgSIgJAAIgPASIgEAAIAPgSQgIAAgEgDQgCgDAAgFQAAgGACgDQAEgEAIAAIAQAAIAAAqgAVNgMQgCACAAAFQAAAFACAAQADADAIAAIALAAIAAgSIgLAAQgIAAgDADgATyAYIAAgqIAeAAIAAADIgbAAIAAAngATfAYIAAgkIgaAkIgDAAIAAgqIAEAAIAAAlIAaglIADAAIAAAqgASVAYIAAgqIAQAAQAKAAADADQADADAAAFQAAAFgDACQgCACgEAAQAFABACACQACACAAAGQAAAFgDADQgDADgKAAgASYAVIANAAQAIAAADgCQABgCABgEQgBgFgBgCQgDgCgJAAIgMAAgASYABIAMAAQAJAAACgCQACgBAAgFQAAgDgCgCQgCgDgJAAIgMAAgAQmAYIAAgqIAeAAIAAADIgaAAIAAAngAPjAYIAAgUIgaAAIAAAUIgDAAIAAgqIADAAIAAATIAaAAIAAgTIADAAIAAAqgAOZAYIAAgqIADAAIAAATIALAAQAMAAADAEQADADAAAFQAAAFgDADQgEADgJAAgAOcAVIANAAQAHAAADgCQACgCAAgEQAAgFgCgCQgCgCgJAAIgMAAgAKyAYIAAgmIAHAAIAAAmgAKfAYIAAgmIAHAAIAAAmgAJGAYIAAgmIAIAAIAAAmgAIbAYIAAgqIAPAAQALAAADADQACADABAFQgBAFgCACQgCACgEAAQAFABACACQACACAAAGQAAAFgCADQgEADgLAAgAIfAVIALAAQAJAAACgCQACgDABgDQgBgFgCgCQgCgCgJAAIgLAAgAIfABIAKAAQAJAAACgCQADgBAAgFQAAgDgCgCQgDgDgIAAIgLAAgAHzAYIAAgSIgJAAIgOASIgEAAIAPgSQgJAAgEgDQgBgDAAgFQAAgHABgCQAEgEAKAAIAPAAIAAAqgAHegMQgDACAAAFQAAAEADABQACADAJAAIAKAAIAAgSIgKAAQgJAAgCADgAGdAYIAAgkIgbAkIgDAAIAAgqIAFAAIAAAlIAZglIAEAAIAAAqgAFiAYIAAgnIgQAAIAAgDIAkAAIAAADIgRAAIAAAngAFFAYIAAgSIgJAAIgPASIgFAAIAPgSQgHAAgEgDQgDgDAAgFQAAgGADgDQACgEAKAAIAQAAIAAAqgAEugMQgBACAAAFQAAAEABABQAEADAHAAIAMAAIAAgSIgMAAQgHAAgEADgAEZAYIAAgUIgaAAIAAAUIgEAAIAAgqIAEAAIAAATIAaAAIAAgTIADAAIAAAqgAC9AYIAAgmIAHAAIAAAmgABHAYIAAgmIAIAAIAAAmgAAcAYIAAgqIAPAAQALAAADADQADADAAAFQAAAGgDABQgBABgFABQAFABACACQADACgBAGQAAAFgCADQgEADgLAAgAAgAVIAMAAQAIAAADgCQACgCAAgEQAAgFgCgCQgDgCgJAAIgLAAgAAgABIALAAQAJAAACgCQACgBAAgFQAAgDgCgCQgCgDgJAAIgLAAgAg3AYIgXgXIAAAXIgEAAIAAgXIgYAXIgFAAIAagYIgagSIAFAAIAYASIAAgSIAEAAIAAASIAXgSIAGAAIgaASIAaAYgAivAYIAAgkIgTAVIgTgVIAAAkIgEAAIAAgqIAEAAIATAXIATgXIADAAIAAAqgAk5AYIAAgnIgQAAIAAgDIAkAAIAAADIgRAAIAAAngAlTAYIgYgXIAAAXIgDAAIAAgqIADAAIAAASIAYgSIAFAAIgZASIAZAYgApBAYIAAgnIgaAAIAAAnIgEAAIAAgqIAiAAIAAAqgAqyAYIgZgXIAAAXIgCAAIAAgqIACAAIAAASIAZgSIAEAAIgZASIAZAYgAr6AYIAAgqIAPAAQALAAACADQADADgBAFQABAFgDACQgBACgFAAQAFABACACQADACgBAGQAAAFgCADQgDADgLAAgAr4AVIANAAQAJAAACgCQACgDAAgDQAAgFgCgCQgCgCgKAAIgMAAgAr4ABIALAAQAKAAACgCQACgBAAgFQAAgEgCgBQgCgDgJAAIgMAAgAs6AYIgYgXIAAAXIgDAAIAAgqIADAAIAAASIAYgSIAEAAIgZASIAZAYgAuYAYIAAgnIgaAAIAAAnIgDAAIAAgqIAhAAIAAAqgAw7AYIAAgUIgZAAIAAAUIgDAAIAAgqIADAAIAAATIAZAAIAAgTIAEAAIAAAqgAyWAYIgYgXIAAAXIgDAAIAAgXIgZAXIgEAAIAYgYIgYgSIAEAAIAZASIAAgSIADAAIAAASIAYgSIAEAAIgYASIAYAYgAJFgaQABgEAEAAQAEAAAAAEQAAAFgEAAQgEAAgBgFgAC8gaQAAgEAFAAQAEAAAAAEQAAAFgEAAQgFAAAAgFgABGgaQABgEAFAAQADAAAAAEQABAFgFAAQgFAAAAgFgAK5gaQAAgEAEAAQAEAAAAAEQAAAFgEAAQgEAAAAgFgAKtgWIgDABQgEAAAAgFQAAgEAEAAIADABIACgBQADAAAAAEQAAAFgDAAIgCgBgAKXgaQAAgEAEAAQAEAAAAAEQAAAFgEAAQgEAAAAgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-148,-4.1,296,8.3), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-87.6,-44.9,175.2,89.9), null);


(lib.btnTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj5BfIAAgZQAFABAIAAQAIAAAFgDQAFgEAHgMQghg+gQgzIAgAAQALAiAVAuQANggAOgwIAeAAQgSBDgaAzQgNAYgIAHQgKAJgVAAQgHAAgHgCgAF0A0IAAhDIg6BDIgXAAIAAhxIAeAAIAABDIA6hDIAXAAIAABxgADGA0IAAhZIgpAAIAAgYIBwAAIAAAYIgpAAIAABZgABpA0IAAhDIg6BDIgXAAIAAhxIAeAAIAABDIA6hDIAXAAIAABxgAgmA0IAAhZIgzAAIAABZIgeAAIAAhxIBwAAIAABxgAk0A0Ig9g/IAAA/IggAAIAAiUIAgAAIAABBIA+hBIAnAAIhIBKIBHBKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnTxt, new cjs.Rectangle(-40.2,-9.7,80.5,19.5), null);


(lib.btnBg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.btnBg();
	this.instance.parent = this;
	this.instance.setTransform(-128,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnBg_1, new cjs.Rectangle(-128,-23,256,46), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.vapor_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vaporMc();
	this.instance.parent = this;
	this.instance.setTransform(14.8,32.8,1,1,0,0,180);
	this.instance.alpha = 0.98;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-15,alpha:0},49).wait(1).to({y:82.5},0).to({y:33.8,alpha:1},50).wait(1));

	// Слой 1
	this.instance_1 = new lib.vaporMc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.7,82.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:33.8,alpha:1},50).to({y:-15,alpha:0},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-148,140,347.5);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnTxt
	this.instance = new lib.btnTxt();
	this.instance.parent = this;
	this.instance.setTransform(-4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btnBg
	this.instance_1 = new lib.btnBg_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btnBg
	this.instance_2 = new lib.btnBg_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-128,-23,256,46), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.btn("single",0);
	this.instance.parent = this;
	this.instance.setTransform(4,249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:0.9,scaleY:0.9},5,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:1,scaleY:1},5,cjs.Ease.cubicInOut).wait(1));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,291.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95));

	// t1
	this.instance_2 = new lib.t1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,-229.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlpQtQg5AAhAgTQg2gQAAgEIm9qfIgF2VQe1AkAAgBIgtSHQhTCohXC2QiuFsgQBHQgRBOglAeQgZAUhHASQgzALlWADIjVABIi7gBg");
	mask.setTransform(68.8,-46);

	// vapor
	this.instance_3 = new lib.vapor_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(70.5,-13.5,0.8,0.8);
	this.instance_3.alpha = 0.602;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95));

	// bgImg
	this.instance_4 = new lib.bgImg_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95));

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
p.nominalBounds = new cjs.Rectangle(149,299,318.5,602);
// library properties:
lib.properties = {
	id: '5D903AC18369460AA1E259786A512C85',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/btnBg.png", id:"btnBg"},
		{src:"images/vapor.png", id:"vapor"}
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
an.compositions['5D903AC18369460AA1E259786A512C85'] = {
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