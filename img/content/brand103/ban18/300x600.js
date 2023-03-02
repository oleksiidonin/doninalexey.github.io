(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,212);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,198);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,198);


(lib.el1 = function() {
	this.initialize(img.el1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,86);


(lib.el2 = function() {
	this.initialize(img.el2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,102);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,286);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,50);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,40);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,208);// helper functions:

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


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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AAQgMAAgEgHIgCgBIgBACQgDAJgJACQgKABgFgIQgEgGABgIQABgHAEgEQADgEAJgEQAOgGAWABIAmABQAcABAGADIAQAGIAQAEQAJADAHAFQAHAHgCAIQgDAIgIADQgEABgFAAIgHAAgALTjQQgKAJgJgFQgJgEABgPQAAgIAEgEQAFgFANAAIAQgBQAWAAAIAHQAHAFACAJQABAHgEAHQgFAFgJACIgLABQgOAAgIgKgADMjHIgTgCQgIAAgCgBQgIgCgCgNQgCgKAEgHQAFgHAKgDQAFgCAMAAQARABAJAFQAOAHgBAOQgBAKgMAHQgGAEgKAAIgFgBgAqajIIgLgCQgGgCgEABIgIADQgEABgEgCIgEgCIgHAAQgJgBgDgJQgDgHABgKQAAgHACgDQADgJAOgDIAVgBQAYAAAEABIAJADIAKACQAHACADACQAMAIgBAQIgCAGQgCAHgJADQgHADgNAAIgGABIgHgBgAusjIQgHgCgEgIQgCgHABgIIACgIIAFgGIAHgFIAIgCIAMgDQAHgBAKABIAMAAIARAEQAOAEADADQAFADACACQAGAKgHALQgGAIgMACQgKACgMgEIgIgBQgFAAgKADIgLACIgKAAgAhvjMQgIAGgJgFQgIgEAAgKQABgJAIgGQAFgEALgDIAVgEQALgBAHAEQAGAFABAJQADAMgGAHQgEAEgHABQgGACgHAAQgJAAgKgEgAG/jJIgMgDQgHgCgDgDQgFgFAAgIQAAgMAIgFQAGgEAOAAIAaACQALABAHAHQAJAKgEAKQgFAKgTACIgNABIgNgBgAm9jJIgPgBIgIABQgFAAgCgBQgFgBgEgHQgDgHABgHQABgHAEgFQAHgHAQgBQAOgCALADQAIABAGAFQAGAFABAHQABAMgMAHQgIAGgLAAIgDgBgAkJjKIgHgDIgHAAQgHAAgEgHQgDgFABgIQABgMAIgHQAFgCANgDQAPgCAHACQAKACAHAHQAHAHABAKQABAGgDAGQgCAFgGACQgDACgEAAIgIgBIgLACIgFAAIgGgBgAJJjMIgHgDIgLgCQgGgCgCgHQgCgGACgGQAEgLAQgEIAZAAIARABQAKADAFAGQAEAGgBAKQgBAHgEADQgDADgIABIgVADIgFAAQgHAAgFgCgAM7jPQgGgGACgKQABgHADgDQAEgFAIgBQAKgCAMgBQASgBAJAFQAGADADAHQADAGgCAGQgCAGgFADQgGADgFgBQgIgBgCgGIgTACQgDAHgIABIgCAAQgGAAgFgFgAALjPQgKAGgHgIQgEgFAAgKQAAgPAIgGQAEgDAKAAQANAAAHACQAEABAMAGQAMAIABAHQADALgMAHQgHAEgOAAQgMAAgIgFgAE7jPQgFADgHgDQgGgDgCgHQgEgLAJgIQAIgJAXACIARABQAMABAFADQAIAFABAIQABAJgGAGQgEAEgJACQgIACgHAAQgNAAgNgFgAptodQgGgFABgIQAAgHAEgHQAIgVAFgHQAIgMAJgFQAFgDAJgCIAPgEQATgLALgDQAKgDAbAAQAhAAAQABQAdAEARAOQAGAFAGAIQAHAIABAFQABAFgDAEQgDAFgEABQgFADgKgCQgOgCgFgDIgNgFIgMgGQgHgCgOAAIgyABIgTAFQgiAKgMAPQgJAOgFAGQgFAFgGABIgEAAQgEAAgDgCgAhLpHQgFgFABgHQABgIAOgLQAPgJAJgEQAJgCAMgBQAwgGBAgBQAVAAAKABQAKACAEAFQAFAEgCAIQAAAHgIAEIAAAAQgCAEgEADQgDACgLACIgPADQgHABgLgCIgSgCQgQgCgPAFIgPADQgFABgNgCQgMgBgHABIgIADIgJABQgEAAgDgCIgIAFQgGAEgFAAIgBAAQgGAAgEgEgAjOpPIgIgDQgIgCgQAAIgOgDIgRgBIg2gBIgHgBQgDACgFgBQgEgBgEgEQgDgDgBgFQgBgKAJgFQAGgCAEABIAFgDQAMgEASABQAVADAKAAIAfgCIAKABIAKAFIAQAHIAKAEQAEADACAFQABAFgBAEQgEALgLAAIgIgBgAF0pZIgQgFQgHgBgOACQgPACgUAAQgLAAgFgCQgNgFgHAAQgFgBgIADIgOADQgHABgNgCQgOgCgGABIgPACQgJABgGgEQgGgDAAgIQAAgIAFgEQAFgDAHgBQASgEAKABIAUADQAHAAANgDQAMgDAHAAIAOADIANADQALADAVgDQAXgCAIAAQAKABALADQAOADAEAGQAEAFgCAHQgBAIgGACQgEACgFAAIgIgBgAIDpaQgGgBgCgFQgEgFACgIQACgHAGgEQAJgHASAAQAJAAAMABQAMABAGAGQAHAHgEAKQgDAJgKABQgDABgFgCIgJgCIgMgBIgHABIgIAEQgCACgEAAIgEgBg");
	this.shape.setTransform(-0.6,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB1A24").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-126.8,-76.7,253.6,151.7), null);


(lib.round_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31D20").s().p("AwkQkQm3m2AApuQAAptG3m3QG3m3JtAAQJuAAG2G3QG4G3AAJtQAAJum4G2Qm2G4puAAQptAAm3m4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_red, new cjs.Rectangle(-150,-150,300,300), null);


(lib.particleMcMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.ceil(Math.random()*5));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-22,-20,0.8,0.8);

	this.instance_1 = new lib.p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,-16,0.8,0.8);

	this.instance_2 = new lib.p3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30,-29,0.283,0.283);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-20,43.2,40);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-106,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(-106,-104,212,208), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-150,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-150,-143,300,286), null);


(lib.el2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.el2();
	this.instance.parent = this;
	this.instance.setTransform(-53,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.el2_mc, new cjs.Rectangle(-53,-51,106,102), null);


(lib.el1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.el1();
	this.instance.parent = this;
	this.instance.setTransform(-31,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.el1_mc, new cjs.Rectangle(-31,-43,62,86), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-79,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-79,-99,158,198), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-79,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-79,-99,158,198), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-72,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-72,-106,144,212), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.particle2mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.particleMcMc();
	this.instance.parent = this;
	this.instance.setTransform(-30,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},20,cjs.Ease.get(-1)).to({x:30},20,cjs.Ease.get(1)).to({x:0},20,cjs.Ease.get(-1)).to({x:-30},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-20.2,69.5,40.1);


(lib.particle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.particle2mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},180).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-20.2,43.2,40);


(lib.el3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p3_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-104,212,208);


(lib.el2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.el2_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-51,106,102);


(lib.el1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.el1_mc();
	this.instance.parent = this;
	this.instance.setTransform(21.5,-40.5,1,1,0,0,0,21.5,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-49.5},20,cjs.Ease.cubicInOut).to({rotation:0},20,cjs.Ease.cubicInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-43,62,86);


(lib.particle2Movie_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_100 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(1));

	// Слой 1
	this.instance = new lib.particle2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:747.8},89).to({regY:0.1,y:840.1,alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-20.2,43.2,40);


(lib.rainProgram_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var animbool = 0;
		
		//this.addEventListener("tick", addParticles.bind(this));
		
		//function addParticles() {
		//	if(animbool == 0){
		//		animbool = 1;
		//		var cloneParticle = new lib.particle2Movie();
		//		cloneParticle.x = Math.random()*500;
		//		cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.7 +.3;
		//		this.addChild(cloneParticle);
		//	}else {
		//		animbool = 0;
		//		var cloneParticle1 = new lib.particle2Movie();
		//		cloneParticle1.x = -Math.random()*500;
		//		cloneParticle1.scaleX = cloneParticle1.scaleY = Math.random()*.7 +.3;
		//		this.addChild(cloneParticle1);
		//	}
		//}
		var cloneParticle = new lib.particle2Movie_big();
		cloneParticle.x = Math.random()*350;
		cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.8 + 0.3;
		this.addChild(cloneParticle);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// particles
	this.particle = new lib.particle2Movie_big();
	this.particle.name = "particle";
	this.particle.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-20.2,43.2,40);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_718 = function() {
		this.stop();
		this.el1.stop();
		this.el2.stop();
		this.el3.stop();
		this.el4.stop();
		this.el5.stop();
		this.rain.stop();
		var n = this.rain.getNumChildren();
		for(var i=0; i<n;i++){
			this.rain.getChildAt(i).stop();
			this.rain.getChildAt(i).getChildAt(0).stop();
			this.rain.getChildAt(i).getChildAt(0).getChildAt(0).stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(718).call(this.frame_718).wait(2));

	// t1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(0,-124.5,0.01,0.01,0,0,0,0,-5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},11,cjs.Ease.backOut).wait(615));

	// box1
	this.instance_1 = new lib.box1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,124,0.01,0.01,0,0,0,0,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},11,cjs.Ease.backOut).wait(645));

	// box2
	this.instance_2 = new lib.box2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2,120.3,1,1,-10.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({rotation:0,x:78,y:133},11,cjs.Ease.cubicOut).wait(637));

	// box3
	this.instance_3 = new lib.box3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.3,134.1,1,1,15);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({_off:false},0).to({rotation:0,x:-82,y:133},11,cjs.Ease.cubicOut).wait(637));

	// logo
	this.instance_4 = new lib.logo_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.1,0.5,0.008,0.008,0,0,0,0,6.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({regY:0,scaleX:0.79,scaleY:0.79,x:0,y:-0.1},14,cjs.Ease.get(1)).to({regY:-0.1,scaleX:0.65,scaleY:0.65,y:-0.2},7).wait(25).to({regY:-0.2,scaleX:0.9,scaleY:0.9,y:-0.3},5).to({regY:0,scaleX:0.02,scaleY:0.02,y:-0.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(655));

	// red_round
	this.instance_5 = new lib.round_red();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-0.1,scaleX:0.67,scaleY:0.67,y:-4},14,cjs.Ease.get(1)).to({_off:true},1).wait(705));

	// rainProgram_big
	this.rain = new lib.rainProgram_big();
	this.rain.name = "rain";
	this.rain.parent = this;
	this.rain.setTransform(-189.5,-311.1,1,1,0,0,0,-20,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.rain).wait(720));

	// el3
	this.el5 = new lib.el3();
	this.el5.name = "el5";
	this.el5.parent = this;
	this.el5.setTransform(-124,-285.9,1,1,0,0,180);

	this.el4 = new lib.el3();
	this.el4.name = "el4";
	this.el4.parent = this;
	this.el4.setTransform(182,5);

	this.el3 = new lib.el3();
	this.el3.name = "el3";
	this.el3.parent = this;
	this.el3.setTransform(-143,257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.el3},{t:this.el4},{t:this.el5}]}).wait(720));

	// el2
	this.el2 = new lib.el2_1();
	this.el2.name = "el2";
	this.el2.parent = this;
	this.el2.setTransform(121,302);

	this.timeline.addTween(cjs.Tween.get(this.el2).wait(720));

	// el1
	this.el1 = new lib.el1_1();
	this.el1.name = "el1";
	this.el1.parent = this;
	this.el1.setTransform(105,-250);

	this.timeline.addTween(cjs.Tween.get(this.el1).wait(720));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(720));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249,-389.9,537,751);


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
p.nominalBounds = new cjs.Rectangle(51,210.1,537,751);
// library properties:
lib.properties = {
	id: '540D0CA1887D4E44991EDDBD232BF08A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/el1.png", id:"el1"},
		{src:"images/el2.png", id:"el2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2.png", id:"p2"},
		{src:"images/p3.png", id:"p3"}
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
an.compositions['540D0CA1887D4E44991EDDBD232BF08A'] = {
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