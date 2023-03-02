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
p.nominalBounds = new cjs.Rectangle(0,0,184,130);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,130);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,130);


(lib.box4 = function() {
	this.initialize(img.box4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,208);// helper functions:

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


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A0YC0MAoxAAAIAAlnMgoxAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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gGAAQgGAAgDgCIgHgGIAAAegArFgHQgEACgCAEQgBADAAAEQAAAGABADQACAEAEACQACACAFAAQAFAAADgCQAEgDABgDQACgDAAgGQAAgFgCgCQgBgDgEgDQgDgCgFAAQgFAAgCACgAhjAqIAAgMIgmAAIAAAMIgJAAIAAgUIAGAAQACgDABgEIABgMIABgTIAlAAIAAAmIAIAAIAAAUgAiAAPIgCAHIAXAAIAAgeIgTAAgAQ8AfIABgIIACAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIACgEIACghIAmAAIAAAuIgKAAIAAgmIgTAAIgBAPIgCAOQAAAGgEACQgEACgFAAgAQOAcQgFgEgDgFQgDgFAAgIQAAgGADgFQADgGAFgDQAGgDAFAAQAGAAAEACIAHAGIAAgHIAJAAIAAAuIgJAAIAAgHIgHAGQgEACgGAAQgFAAgGgDgAQUgHQgEACgCAEQgCAEAAADQAAAEACAFQACAEAEACQACACAFAAQAFAAADgCQAEgDABgDQACgDAAgGQAAgFgCgCQgBgDgEgDQgDgCgFAAQgFAAgCACgAMLAeIgCgCIgBgDIABgDIACgDIAEAAIADAAIACADIABADIgBADIgCACIgDABgALaAcQgGgDgDgHQgDgGAAgKQAAgOADgIQADgKAHgDQADgDADAAIAZgFIABAIIgRADIgJADQgFACgCAEQgCAFgBAIQACgEAFgCQAFgDAFAAQAGAAAGAEQAEACAEAGQADAFAAAHQAAAHgDAFQgDAFgGAEQgFADgIAAQgHAAgFgDgALfgGQgEACgCADQgCADAAAFQAAAFACADQACADADADIAIACQAFAAADgCQAEgDABgDQACgDAAgFQAAgFgCgDQgBgDgEgCQgDgCgFAAQgFAAgCACgAKWAcQgFgDgEgGQgDgHAAgGQAAgGADgFQAEgGAFgDQAFgDAIAAQAHAAAEACQAGADADAEIgGAGIgGgFQgEgCgEAAIgIACQgDACgDAEQgCADAAAEQAAAEACAFQADAEADACIAIACQAEAAAEgCQAEgCACgDIAGAGQgEAFgFACQgGACgFAAQgIAAgFgDgAJbAcQgFgDgDgGQgEgFAAgHQAAgHAEgFQACgFAGgEQAGgDAHAAQAHAAAGADQAFAEADAFQAEAGAAAGQAAAFgEAHQgDAGgFADQgGADgHAAQgHAAgGgDgAJggHQgDACgCAEQgCAEAAAEQAAAEACAEQACAEADACIAIACIAIgCQADgDACgDQACgEAAgEQAAgEgCgEQgCgDgDgDIgIgCIgIACgAFAAfIABgIIADAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBIABgEIACghIAmAAIAAAuIgJAAIAAgmIgUAAIgBAPQAAAJgBAFQgCAGgDACQgDACgGAAgAETAcQgGgDgDgGQgDgGAAgGQAAgHADgFQADgFAGgEQAGgDAHAAQAHAAAFADQAFADAEAGQADAFAAAHQAAAGgDAGQgEAGgFADQgFADgHAAQgIAAgFgDgAEYgHQgEADgCADQgCAEAAAEQAAAEACAEQACADAEADIAIACQADAAAEgCQADgCADgEQACgDAAgFQAAgFgCgDQgDgEgDgCQgEgCgDAAIgIACgABtAcQgFgDgDgGQgEgFAAgHQAAgHAEgFQACgFAGgEQAGgDAHAAQAHAAAGADQAFAEADAFQAEAGAAAGQAAAFgEAHQgDAGgFADQgGADgHAAQgHAAgGgDgABygHQgDACgCAEQgCAEAAAEQAAAEACAEQACAEADACIAIACIAIgCQADgDACgDQACgEAAgEQAAgEgCgEQgCgDgDgDIgIgCIgIACgAhXAfIABgIIACAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIABghIAnAAIAAAuIgKAAIAAgmIgUAAIAAAPQAAAJgCAFQgBAGgDACQgEACgFAAgAmBAcQgGgEgDgFQgDgGAAgGQAAgHADgFQADgGAGgDQAFgDAHAAQAHAAAFADQAGADACAFQADAGAAAFIAAAEIglAAQAAAEACADQACAEAEABQAEACAEAAQAEAAAEgCQAEgBACgDIAFAHQgDADgFACQgGACgGAAQgHAAgGgDgAl/gGQgEAEAAAEIAcAAQgBgEgEgEQgDgDgGAAQgGAAgEADgAntAcQgFgEgDgFQgDgFAAgIQAAgGADgFQADgGAFgDQAGgDAGAAQAFAAAEACIAHAGIAAgHIAJAAIAAAuIgJAAIAAgHIgHAGQgEACgFAAQgGAAgGgDgAnngHQgEACgCAEQgBADAAAEQAAAGABADQACAEAEACQACACAFAAQAFAAA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ARIAYAAIAAgRIAJAAIAAAugAvEAeIAAgVIgXAAIAAAVIgKAAIAAguIAKAAIAAARIAXAAIAAgRIAJAAIAAAugAwvAeIgNgTIgBgBIgJAAIAAAUIgKAAIAAguIAKAAIAAARIAJAAIAOgRIAKAAIgQAVIARAZgAxpAeIAAghIgZAhIgIAAIAAguIAJAAIAAAhIAYghIAJAAIAAAugAy7AeIAAguIAVAAQAJAAAEADQAFADAAAGQAAAEgCACIgFAEQAFABACADQACADAAAEQAAADgCAEQgCADgEABQgFACgEAAgAyyAXIANAAQAFAAACgCQADgBAAgEQAAgHgKAAIgNAAgAyyADIALAAQAEAAADgCQADgBAAgDQAAgGgKAAIgLAAgAjNgaQgEgCgCgDQgCgEAAgEIAHAAQABAEACACQACACAEAAQAEAAACgCQACgCABgEIAHAAQAAAFgDADQgCADgDACQgEACgEAAQgFAAgDgCgATogcIgCgCIgBgDIABgDIACgCIADgBIADABIACACIABADIgBADIgCACIgDABgAK/gcIgCgCIgBgDIABgDIACgCIADgBIADABIACACIABADIgBADIgCACIgDABgAH+gcIgCgCIgBgDIABgDIACgCIADgBIAEABIACACIABADIgBADIgCACIgEABgAGBgcIgCgCIgBgDIABgDIACgCIADgBIADABIACACIABADIgBADIgCACIgDABgAqYguIACgIIAGABIAEgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBIAFgMIgUgvIAKAAIAPAlIAOglIAKAAIgVA0QgDAIgDAEQgDAEgDACQgEACgFAAgAtAguIAAhGIAJAAIAAAHQADgEAEgCQADgCAGAAQAGAAAFADQAFADADAGQADAFAAAHQAAAIgDAFQgCAFgGAEQgFADgGAAQgGAAgDgCQgEgCgDgEIAAAegAswhrQgEACgCAEQgCAFAAADQAAAEACAFQACAEAEACQACACAFAAQAEAAAEgCQAEgDABgDQACgDAAgGQAAgFgCgDQgBgDgEgDQgEgCgEAAQgFAAgCACgAwQg2IAAgPIg1AAIAAhFIAJAAIAAA8IAjAAIAAg8IAJAAIAAA8IAKAAIAAAYgAj5g5IAAgMIgpAAIAAgvIAJAAIAAAnIAYAAIAAgnIAJAAIAAAnIAHAAIAAAUgAqhg5IAAgMIgmAAIAAAMIgJAAIAAgUIAGAAQACgDABgEIABgMIABgUIAlAAIAAAnIAIAAIAAAUgAq+hUIgCAHIAXAAIAAgfIgTAAgAQthHQgFgDgEgGQgDgGAAgHQAAgGADgGQADgFAGgEQAFgDAIAAQAHAAAFACQAFADADADIgGAGQgCgDgEgCQgDgCgFAAQgDAAgEACQgDABgDAEIgDAHIAYAAIAAAHIgYAAQABAFAEAFQAEADAHAAQAFAAADgBQAEgCACgDIAGAGQgEAEgEACQgFACgHAAQgHAAgGgDgAPyhHQgHgEgBgFQgDgFAAgIQAAgHADgFQACgGAGgDQAFgDAGAAQAFAAAEACQAFACACAEIAAgHIAJAAIAAAvIgJAAIAAgHQgCAEgFACQgEACgFAAQgGAAgFgDgAP3hrQgDACgCAEQgCAFAAADQAAAEACAFQACAEADACQADACAFAAQAEAAADgCQAEgDABgDQACgDAAgGQAAgFgCgDQgBgDgEgDQgDgCgEAAQgFAAgDACgAM/hEIABgIIADAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBIABgEIACgiIAmAAIAAAvIgJAAIAAgnIgUAAIgBAQQAAAJgBAFQgCAGgDACQgDACgFAAgAJjhHQgFgEgDgFQgDgFAAgIQAAgHADgFQADgGAFgDQAGgDAGAAQAFAAAEACQADACAEAEIAAgHIAJAAIAAAvIgJAAIAAgHQgEAEgDACQgEACgFAAQgGAAgGgDgAJphrQgEACgCAEQgBAEAAAEQAAAGABADQACAEAEACQACACAFAAQAFAAADgCQADgCACgEQACgDAAgGQAAgEgCgEQgCgEgDgCQgDgCgFAAQgFAAgCACgAEGhHQgGgDgDgGQgDgGAAgGQAAgIADgFQADgGAGgDQAFgDAHAAQAHAAAFADQAGADACAFQADAGAAAGIAAAEIglAAQABAFABACQADAEADABIAIACQAEAAAEgCQAEgBADgDIAEAHQgDADgFACQgFACgHAAQgHAAgGgDgAEJhqQgFAEAAAFIAcAAQgBgGgEgDQgDgDgGAAQgFAAgEADgACWhGQgFgCgDgEIAFgFQADADADABQAEACAFAAQAEAAAEgCQADgCAAgEQAAgHgKAAIgJAAIAAgGIAHAAQAFAAADgCQADgCAAgDQAAgDgDgCQgCgCgFAAQgIAAgGAGIgFgGQACgCAGgDQAFgCAGAAQAJAAAFADQAFAEAAAGQAAAEgCACQgCADgDACQAEABACADQADADAAAEQAAAEgDADQgCAEgFABQgEACgHAAQgIAAgEgCgABrhHQgGgDgDgGQgDgGAAgGQAAgIADgFQADgGAFgDQAGgDAGAAQAHAAAFADQAGADADAFQADAGAAAGIgBAEIglAAQAAAEADADQADAEACABIAIACQAFAAADgCQAFgBACgDIAFAHQgDADgGACQgEACgHAAQgIAAgFgDgABthqQgEAEgBAFIAcAAQAAgFgEgEQgEgDgGAAQgFAAgEADgAAwhHQgFgEgDgGQgDgGAAgKQAAgOADgJQADgJAHgEQADgDADAAIAZgFIABAIIgRADIgKADQgEACgCAEQgCAEgBAJQADgEAEgCQAFgDAFAAQAGAAAGAEQAEACAEAGQADAGAAAHQAAAHgDAFQgDAFgGAEQgFADgIAAQgHAAgGgDgAA2hqQgFACgBADQgCAEAAAFQAAAFACADQACADADADIAIACQAFAAADgCQADgCACgEQACgDAAgFQAAgFgCgEQgCgDgDgCQgDgCgFAAQgFAAgCACgAhhhHQgFgDgDgGQgEgFAAgHQAAgIAEgFQACgFAGgEQAGgDAHAAQAHAAAGADQAFAEADAFQADAGAAAHQAAAGgDAGQgDAGgFADQgGADgHAAQgHAAgGgDgAhchrQgDACgCAEQgCAEAAAFQAAAFACADQACAEADACQAEACAEAAIAIgCQADgDACgDQACgEAAgEQAAgEgCgFQgCgDgDgDIgIgCQgEAAgEACgAjZhEIABgIIACAAQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgiIAnAAIAAAvIgKAAIAAgnIgUAAIAAAQQAAAJgCAFQgBAGgDACQgEACgFAAgAlchHQgGgDgDgGQgDgGAAgHQAAgGADgGQADgFAGgEQAGgDAHAAQAHAAAFACQAFACADAEIgFAGQgDgDgEgCQgDgCgFAAIgHACQgEACgCADIgDAHIAYAAIAAAHIgYAAQABAGAFAEQADADAHAAQAFAAADgBQAEgCADgDIAFAGQgEAEgEACQgFACgHAAQgHAAgGgDgAmphHQgG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");
	this.shape_1.setTransform(-0.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-131.5,-19,263,38), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-102.2,-29.4,204.4,58.8), null);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.486,1],0,58.1,0,-58.1).s().p("A3+JiIAAzDMAv9AAAIAATDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-153.5,-61,307.1,122.1), null);


(lib.box4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box4();
	this.instance.parent = this;
	this.instance.setTransform(-112,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box4_1, new cjs.Rectangle(-112,-104,224,208), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-92,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-92,-65,184,130), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-92,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-92,-65,184,130), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-92,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-92,-65,184,130), null);


(lib.bgImg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F4F0").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#010101").ss(1,2,0,3).p("ABdgBIgyg2QgCgBgCABQgBABAAACQAAABABABIAtAwIivAAQgBAAAAABQgBABAAAAQAAABABABQAAABABAAICvAAIgtAxQgBAAAAABQAAACABABQACABACgBIAyg2QACgCgCgBg");
	this.shape.setTransform(-0.9,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010101").s().p("AAnA4IgBgDIABgBIAtgxIivAAIgBgBIgBgCIABgBIABgBICvAAIgtgwIgBgCIABgDQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAIAyA2QAAABABAAQAAAAAAAAQAAAAAAABQgBAAAAABIgyA2IgCABIgCgBg");
	this.shape_1.setTransform(-0.9,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-11.5,-7.9,21.4,14.1), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(50.8,0.1,0.932,0.932,0,0,0,0.7,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,x:52.8},3,cjs.Ease.get(1)).to({regX:0.7,x:50.8},2).wait(3).to({regX:0.3,x:52.8},3,cjs.Ease.get(1)).to({regX:0.7,x:50.8},2).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("AF5BJIgGgCIACgNIAJACQAFAAADgCQADgBACgDQADgFACgGIADgIIgfhJIAQAAIAXA5IAWg5IAQAAIgiBRQgFALgEAGQgEAIgGACQgFADgIAAgAlhA5IAAgXIhRAAIAAAXIgOAAIAAgkIAMAAIAFgJQACgHAAgGIACgWIABgxIBJAAIAABdIAOAAIAAAkgAmfAEQgBAIgEAJIA0AAIAAhQIgsAAgADsAfQgJgFgFgIQgFgJAAgKQAAgKAFgKQAFgJAJgFQAJgFALAAQAKAAAJAFQAJAFAFAJQAFAJAAALQAAALgFAIQgFAIgJAFQgJAFgKABQgLgBgJgFgAD0gXQgGADgDAGQgDAFAAAIQAAAHADAFQADAFAGAEQAFADAHAAQAHAAAFgDQAGgEACgFQADgFAAgHQAAgIgDgFQgDgGgFgDQgFgDgHAAQgHAAgFADgAB6AkIACgNIAEAAQAEAAACgCQACgDABgEIABgOIABgmIA8AAIAABIIgPAAIAAg7IgfAAIgBAZQAAAMgCAJQgCAHgFAEQgFAFgJAAgAAyAfQgIgFgFgIQgEgJAAgKQAAgMAEgIQAEgIAJgGQAHgFALAAQAIAAAGADQAGADAFAHIAAgLIAOAAIAABIIgOAAIAAgLQgEAHgHADQgGAEgIAAQgLgBgHgFgAA7gXQgGACgDAHQgDAFAAAIQAAAHADAFQADAGAGADQAEAEAHgBQAHABAFgEQAFgDADgGQADgFAAgHQAAgIgDgFQgDgHgFgCQgFgDgHAAQgHAAgEADgAhtAfQgIgEgEgJQgFgJAAgKQAAgMAFgIQAEgJAIgFQAIgFAKAAQAJAAAFADQAGADAFAHIAAgLIAPAAIAABIIgPAAIAAgLQgEAHgHADQgFAEgJAAQgKgBgIgFgAhkgXQgFACgDAHQgDAFAAAIQAAAHADAFQADAGAFADQAFAEAHgBQAHABAEgEQAGgDADgGQADgFAAgHQAAgIgDgFQgDgHgGgCQgEgDgHAAQgHAAgFADgAk1AfQgJgFgFgIQgFgIAAgLQAAgLAFgJQAFgJAJgFQAKgFAJAAQAKAAAKAFQAJAGAFAIQAFAKAAAKQAAAKgFAJQgFAIgJAFQgKAFgKABQgJgBgKgFgAkugXQgFADgDAGQgDAFAAAIQAAAHADAFQACAFAGAEQAGADAGAAQAHAAAFgDQAGgEADgFQADgFAAgHQAAgIgDgFQgDgGgGgDQgFgDgHAAQgHAAgFADgAE6AiIAAhIIA0AAIAAANIglAAIAAA7gAgKAiIAAg7IgaAAIAAgNIBBAAIAAANIgaAAIAAA7gAiTAiIgTgdIgCgCIgDAAIgMAAIAAAfIgOAAIAAhIIAOAAIAAAdIAMAAIADgBIAWgcIAQAAIgaAiIAaAmg");
	this.shape.setTransform(-11.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqrCdIAAk5IVXAAIAAE5g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-15.7,136.8,31.4);


(lib.bliki = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmwLaQiMhNAAACIAAmuQAAADDlB/IDoCCQACADhfCdQheCeACACIAAAAIiIhLgAkBAmQk7i0AAADIAAmuQAAACGUDpIGWDrQACAChfCbQheCbACACIAAAAIk2ixgAGElsQgEgDlzjbQlzjagDAAILZAAQgFAADSCCQgDgBhaCcQhYCbgEAAIAAAAgAI9qiIAAAAIAAAAg");
	mask.setTransform(-105.3,-77.3);

	// Слой_10
	this.instance = new lib.grad();
	this.instance.parent = this;
	this.instance.setTransform(-189.5,-208.8);
	this.instance.alpha = 0.699;
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-114.5,y:65.3},20).wait(31));

	// Слой_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AC8YdIsYnOQsWnMgDgDQgCgCExoDQExoDgDgCIMYHNQMNHHAHADQgFACknIGQkoIIgEAAIAAAAgAMUINIAAAAIAAAAIAAAAgAOlDrIsMnBQsJm/gDgDQgCgCBfieQBfidgDgDIMSHJQMGHBAKAEQgEABheCZQhdCbgEAAIAAAAgARohKIAAAAIAAAAIAAAAgAH4snIsMnEQADABBZiYQBbiaACAAIAtAAQAEAAKpGOQKrGPAAADQAAAFAkCAQAlCBADADQACADgnAqQgnAsAAABQAAACgVAXQgVAXADACIAAAAQgCAAsJnAgAkUzrIAAAAIAAAAg");
	mask_1.setTransform(15.8,-1.3);

	// Слой_3
	this.instance_1 = new lib.grad();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,-218.8);
	this.instance_1.alpha = 0.699;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({x:4,y:218.3},20).wait(16));

	// Слой_5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AlYEvQADABBZinQBbimACACIC0BrQCyBpAAACIAAGzIAAABQgHAAoYlAgAlYEuIAAABIAAgBgADfinQgYgXAAADQAAAFjHh3QADABBiiiQBiihAAABQAAADBHAvIBLAyQACADg0C5Qg0C5ACACIgWgUgAAAkuIAAABIAAgBg");
	mask_2.setTransform(128.1,95.5);

	// Слой_7
	this.instance_2 = new lib.grad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(161.9,-27.8);
	this.instance_2.alpha = 0.699;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({x:236.9,y:243.4},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.5,-157.8,114.6,10.1);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:41});

	// timeline functions:
	this.frame_163 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(163).call(this.frame_163).wait(1));

	// btn
	this.instance = new lib.btn("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-52.7,207.6,1,1,0,0,0,-0.2,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},10).wait(30).to({mode:"synched",loop:false},0).wait(114));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},10).wait(154));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,270.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18.7,125.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(164));

	// blik
	this.instance_4 = new lib.bliki("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(2.6,-154.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).wait(90));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4QdhMAAAg7BMAwgAAAMAAAA1WQgYBbhZBbQi1C1lJAAg");
	mask.setTransform(-4.7,-123.1);

	// box2
	this.instance_5 = new lib.box2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(246,-35.7);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({x:213.6,y:-55.7},10,cjs.Ease.quartOut).wait(123));

	// box1
	this.instance_6 = new lib.box1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(242,39.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({x:179.6,y:3.3},10,cjs.Ease.quartOut).wait(126));

	// box3
	this.instance_7 = new lib.box3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(247.5,-147.9);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).to({x:74.6,y:-249.9},10,cjs.Ease.quartOut).wait(129));

	// box1
	this.instance_8 = new lib.box1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(244.5,-70.9);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).to({x:39.6,y:-189.9},10,cjs.Ease.quartOut).wait(132));

	// box4
	this.instance_9 = new lib.box4_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(263.5,66.1);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({x:-11.4,y:-91.9},10,cjs.Ease.quartOut).wait(135));

	// box3
	this.instance_10 = new lib.box3_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(241.8,-109.7);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).to({x:-135.4,y:-325.9},10,cjs.Ease.quartOut).wait(138));

	// box2
	this.instance_11 = new lib.box2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(243.8,-28.9);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({x:-170.4,y:-267.9},10,cjs.Ease.quartOut).wait(141));

	// box1
	this.instance_12 = new lib.box1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(233.8,41.1);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).to({x:-204.4,y:-208.9},10,cjs.Ease.quartOut).wait(144));

	// bgImg1
	this.instance_13 = new lib.bgImg1();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(164));

	// bg
	this.instance_14 = new lib.bg();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


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
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140,288,311,613);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
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
		{src:"images/box4.png", id:"box4"}
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
an.compositions['0A6E3F5DF6B342F4AF907DBE848CDF8D'] = {
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