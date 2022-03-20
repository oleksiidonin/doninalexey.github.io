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
p.nominalBounds = new cjs.Rectangle(0,0,142,210);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,180);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,180);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,42);


(lib.messi = function() {
	this.initialize(img.messi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,272);


(lib.pogba = function() {
	this.initialize(img.pogba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,256);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,144);// helper functions:

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


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(-135,-65,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-135,-65,270,129.6), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0003").s().p("A0wjeMAo0gC3IAsJ0Mgo0AC3g");
	this.shape_1.setTransform(-2.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D40003").s().p("A0vjeMAo0gC3IAsJ0Mgo1AC3g");
	this.shape_2.setTransform(2.1,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-135.8,-40.6,270.7,86.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxzB7IAvgCIAFA+IBBgFIgFg/IAvgDIAMCoIgvADIgFhBIhAAEIAEBBIgvAFgAttBoIAvgDIBXCiIgyADIgPgfIhHAFIgLAiIgxADgAtkDMIAsgCIgag1gAqwD7QgWgKgOgSQgNgUgCgYQgCgZALgVQAMgWATgLQAWgOAYgBQAYgCASAGQATAJANAOIgcAcQgSgSgXACQgOACgJAFQgLAIgFAKQgEAKAAAQQAAAPAIAKQAHAKAKAFQAMAFANAAQAYgCAOgVIAgAZQgMARgQAJQgRAJgYACIgKABQgUAAgSgJgAn3BzIgzAEIgEglICWgMIACAnIgyADIAKCCIgwADgAlnDpIAJgkQAMADAFgBQAGAAAHgEIAJgKIhKh1IAxgDIAtBOIAjhUIAugDIg8CHQgKAWgOALQgOAMgUACIgDAAQgMAAgQgFgAi1A3ICegNIALCpIguACIgKiBIg/AEIAJCCIguADgAAVAoIAwgFIAFA/IBAgEIgFg/IAwgDIAMCnIgvAEIgFhCIhAAGIAEBAIgvADgADtC+IAJgkIARADQAHgCAFgDIAJgLIhKhzIAygEIAtBOIAjhUIAugDIg7CHQgLAVgPAMQgQAMgSABIgGAAQgMAAgMgEgAHyAFIB7gIIADAkIhNAGIAKCCIguADgAKMgFIBMgGQAXgCARAHQASAGAKANQALANAAASQACAUgJAOQgHAOgQAKQgPAIgZACIgdABIADAtIgvADgALXAaIgaACIAEAxIAbgCQAPgCAGgGQAHgIgBgKQgBgNgIgFQgGgFgMAAIgFAAgANKCTIAIgkQAMACAFgBQAHAAAGgDIAJgLIhLh0IAzgDIAtBNIAihTIAvgDIg8CGQgKAVgPAMQgPAMgUABIgCABQgLAAgQgEgAQtB/QgJgIAAgKQgBgKAHgIQAHgGAMgCQALgBAJAGQAJAHAAAKQACALgIAIQgGAHgOABIgDABQgJAAgHgGgAQrAyQACgEAMgOIAKgLQACgFAAgFQAAgGgHgEQgHgEgJABQgLACgFAEQgHAEgFAJIglgQQAJgRAQgLQAUgLAYgBQAbgDATALQASAKACAWQAAALgCAFIgHAOIgWAZQgEAHAAAFIgqADQgBgMAFgJgAnPhmQgUAIgQABQgjACgTgPQgUgPgCggIgEg0IAvgEIADAvQACAgAggCQAQgBAOgGIgGhJIAvgEIAMCnIgvAEgAl7jbICEgKIADAlIhVAGIACAdIBKgHIADAkIhLAGIADAeIBXgHIADAmIiGAJgAjOjoIAwgEIAEBBIAXgBIAkhEIAxgDIgvBUIA8BTIg1AEIgsg9IgVABIAEBBIgvACgAAxj6IAugEIBXCiIgxAEIgQggIhHAFIgLAiIgvAEgAA6iXIArgDIgagzgADshnQgWgJgMgUQgNgSgCgaQgBgbAJgTQAKgVATgMQAUgNAZgCQAZgBARAGQAUAHANAPIgcAdQgSgSgYACQgPABgKAJQgLAIgBAQIA7gFIAEAjIg9AEQAFAOALAHQALAIAQgCQAWgBAQgVIAgAZQgKAPgUALQgSAIgWADIgIAAQgWAAgQgIgAF0kSIAvgDIAJCCIAtgDIgKiDIAugCIAKCBIAsgDIgKiBIAugFIANCoIjjARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0003").s().p("A0wjeMAo0gC3IAsJ0Mgo0AC3g");
	this.shape_1.setTransform(-2.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D40003").s().p("A0vjeMAo0gC3IAsJ0Mgo1AC3g");
	this.shape_2.setTransform(2.1,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-135.8,-40.6,270.7,86.2), null);


(lib.p2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASjUICtB4Il9Exg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_mc, new cjs.Rectangle(-19,-21.3,38.1,42.6), null);


(lib.p1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0003").s().p("Ai+BdIF9kxIjQGpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_mc, new cjs.Rectangle(-19,-21.3,38.1,42.6), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai7AgIAAgKIgkAAIAAgqIAEAAIAAAlIAZAAIAAglIAFAAIAAAlIAGAAIAAAPgAkWAXIAAgFQgXAAAAgSQAAgQAXgBIAAgEIAEAAIAAAEQAWABAAAQQAAASgWAAIAAAFgAkSAPQASgBAAgOQAAgMgSgBgAkpAAQAAAOATABIAAgcQgTABAAAMgAlbAQQgGgHAAgJQAAgHAGgGQAGgHAKAAQAJAAAHAGQAGAGAAAIQAAAKgGAGQgHAGgJAAQgKAAgGgGgAlYgLQgFAFAAAGQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgIQAAgGgFgFQgFgFgIAAQgIAAgFAFgAFCAWIAAgqIAPAAQARAAAAAPQAAANgRAAIgLAAIAAAOgAFGAFIALAAQANAAAAgKQAAgLgNAAIgLAAgAEaAWIAAgqIAdAAIAAAEIgZAAIAAAPIAWAAIAAADIgWAAIAAAPIAaAAIAAAFgAEIAWIAAgUIgbAAIAAAUIgEAAIAAgqIAEAAIAAATIAbAAIAAgTIAEAAIAAAqgADNAWIAAgmIgPAAIAAgEIAiAAIAAAEIgPAAIAAAmgACZAWIAAgqIAPAAQASAAAAAPQAAANgSAAIgLAAIAAAOgACdAFIALAAQANAAAAgKQAAgLgNAAIgLAAgACLAWIgFgMIgXAAIgFAMIgFAAIATgqIAFAAIATAqgACEAGIgKgVIgKAVIAUAAgABYAWIAAgmIgbAAIAAAmIgEAAIAAgqIAjAAIAAAqgAAXAWIAAgiIgaAiIgEAAIAAgqIAEAAIAAAjIAagjIAEAAIAAAqgAgaAWIAAgiIgbAiIgEAAIAAgqIAFAAIAAAjIAbgjIAEAAIAAAqgAhLAWIAAgUIgaAAIAAAUIgFAAIAAgqIAFAAIAAATIAaAAIAAgTIAEAAIAAAqgAh8AWIAAgiIgbAiIgEAAIAAgqIAEAAIAAAjIAbgjIAEAAIAAAqgAitAWIAAgqIAEAAIAAAqgAjyAWIAAgqIAFAAIAAAqgAAAgeIADAAQAAAFAGAAQAGAAABgFIADAAQAAAHgKABQgJgBAAgHgAiTgeIADAAQAAAFAHAAQAFAAABgFIADAAQAAAHgJABQgKgBAAgHg");
	this.shape.setTransform(0,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-36,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-36,-31,72,52.4), null);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D4900A","rgba(212,144,10,0)"],[0,1],-49.1,-0.1,49.1,-0.1).s().p("AnqFIIAAqPIPVAAIAAKPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient, new cjs.Rectangle(-49.1,-32.8,98.3,65.6), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-61,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D4900A","rgba(212,144,10,0)"],[0,1],10.2,-14.8,10.2,14.9).s().p("AuXCYIF9kvISDAAIEvEvg");
	this.shape.setTransform(-2.1,102.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-94.1,-90,184.1,207.3), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-61,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D4900A","rgba(212,144,10,0)"],[0,1],10.2,-14.8,10.2,14.9).s().p("AuXCYIF9kvISDAAIEvEvg");
	this.shape.setTransform(-2.1,102.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-94.1,-90,184.1,207.3), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-71,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D4900A","rgba(212,144,10,0)"],[0,1],0,-14.6,0,14.6).s().p("AvuCWIF4krIU6AAIErErg");
	this.shape.setTransform(-2.3,115.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-103,-105,201.4,235.1), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.pogba_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pogba();
	this.instance.parent = this;
	this.instance.setTransform(-76,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsqK1IUnn4QgBAADtAMImMNcgAsqK1IAAAAIAAAAIAAAAg");
	mask.setTransform(-81.1,106.1);

	// Слой_3
	this.instance_1 = new lib.gradient();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-79.4,162.3,0.975,2.474,99.8,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.pogba_1, new cjs.Rectangle(-162.2,-128,238.2,340.1), null);


(lib.particleMcMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.ceil(Math.random()*2));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой 2
	this.instance = new lib.p1_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.5,0.4,0.4,0,0,0,0,-0.1);

	this.instance_1 = new lib.p2_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5,0.4,0.4,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-8.9,15.2,17);


(lib.particle2mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.particleMcMc();
	this.instance.parent = this;
	this.instance.setTransform(-10,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.particle2mc, new cjs.Rectangle(-17.6,-19.9,35.1,39.8), null);


(lib.particle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.particle2mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-8.5,15.2,17);


(lib.messi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.messi();
	this.instance.parent = this;
	this.instance.setTransform(-91,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsZEBIDqg6QVKHlgBABIvfF8IAAAAQgBAApTsogAsZEBIAAAAIAAAAg");
	mask.setTransform(-10.2,106.5);

	// Слой_3
	this.instance_1 = new lib.gradient();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.2,156.3,1.035,2.474,68.3,0,0,0.1,0.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.messi_1, new cjs.Rectangle(-91,-136,182,349), null);


(lib.particle2Movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_90 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(90).call(this.frame_90).wait(1));

	// Слой 1
	this.instance = new lib.particle2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:860},90).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-8.5,15.2,17);


(lib.snowFront = function(mode,startPosition,loop) {
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
		for(var i=0; i<2; i++){
			var cloneParticle = new lib.particle2Movie();
			cloneParticle.x = Math.random()*336;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.4 +.6;
			this.addChild(cloneParticle);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// particles
	this.particle = new lib.particle2Movie();
	this.particle.name = "particle";
	this.particle.parent = this;
	this.particle.cache(-20,-10,19,21);

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-8.5,15.2,17);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(96,260.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(174).to({_off:false},0).to({alpha:1},10).wait(1));

	// t3
	this.instance_2 = new lib.t3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.1,-348.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({y:-196.2},8,cjs.Ease.get(1)).to({y:-201.2},2).wait(76));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.1,-348.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({y:-199.2},8,cjs.Ease.get(1)).to({y:-204.2},2).wait(29).to({y:-199.2},2).to({y:-348.2},8,cjs.Ease.get(-1)).to({_off:true},1).wait(86));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.1,-348.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-199.2},8,cjs.Ease.get(1)).to({y:-204.2},2).wait(29).to({y:-199.2},2).to({y:-348.2},8,cjs.Ease.get(-1)).to({_off:true},1).wait(135));

	// messi
	this.instance_5 = new lib.messi_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-229,110);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({x:41},15,cjs.Ease.get(1)).to({x:71},100).wait(1));

	// pogba
	this.instance_6 = new lib.pogba_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(319,111);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({x:-31},15,cjs.Ease.get(1)).to({x:-61},110).wait(1));

	// snow
	this.instance_7 = new lib.snowFront();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-168,-318.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109).to({_off:false},0).wait(76));

	// box1
	this.instance_8 = new lib.box1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(2,10,0.02,0.02,0,0,0,2.5,2.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,y:-21},10,cjs.Ease.quadInOut).wait(156));

	// box3
	this.instance_9 = new lib.box3_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2.5,-20);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).to({x:-79},10,cjs.Ease.get(1)).wait(146));

	// box2
	this.instance_10 = new lib.box2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1,-20);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).to({x:82},10,cjs.Ease.get(1)).wait(146));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(185));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-388.8,300,688.9);


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
p.nominalBounds = new cjs.Rectangle(149,211.2,302,689.9);
// library properties:
lib.properties = {
	id: 'C44979EEC3F94264A8B8B2914610B592',
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
		{src:"images/logo.png", id:"logo"},
		{src:"images/messi.png", id:"messi"},
		{src:"images/pogba.png", id:"pogba"},
		{src:"images/t3.png", id:"t3"}
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
an.compositions['C44979EEC3F94264A8B8B2914610B592'] = {
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