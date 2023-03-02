(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,188);


(lib.clock = function() {
	this.initialize(img.clock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,214);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,578);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,376);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,94);


(lib.termenal = function() {
	this.initialize(img.termenal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,264);// helper functions:

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


(lib.xiaomi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnAjIgBgBIAAhEIABAAIAOAAIACAAIAABEIgCABgAAIAjIgBgBIAAgrQAAgLgLAAIggAAIgBACIAAA0IgBABIgPAAIgBgBIAAhEIABAAIA4AAQAKAAAGAGQAFAGAAAIIAAAwIgBABgAgWAjIgBgBIAAgpIABgBIAPAAIACABIAAApIgCABg");
	this.shape.setTransform(-22,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgLAAQABgiAiAAQAkAAgBAiQABAjgkAAQghAAgCgjgAAFAAQAAAYATAAQAUAAAAgYQAAgXgUAAQgTAAAAAXgAhVAMQAAgVAxAAIAAAAQAAgOgSAAQgNABgNAEIAAgMQALgEAOAAQATAAAHAGQAHAFAAAPIAAAmQgMAFgOAAQglAAAAgXgAhGAOQAAAGALADQAJACAOgEIAAgUIgJAAQgZAAAAANgAC2AiIAAhDIAPAAIAABDgACZAiIAAgsQAAgLgNAAQgIgBgFAFIAAAzIgPAAIAAgrQAAgOgNAAQgHABgGADIAAA1IgOAAIAAg+QALgGAQAAQAOAAAHAHQAJgHAPAAQAYAAAAATIAAAxgAhxAiIAAhDIAPAAIAABDgAiOAiIgSgZIgSAZIgSAAIAbgiIgZghIASAAIARAXIARgXIARAAIgaAhIAbAig");
	this.shape_1.setTransform(11.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF722E").s().p("AhXBeQgGAAgBgGIAAivQABgGAGgBICvAAQAGABAAAGIAACvQAAAGgGAAg");
	this.shape_2.setTransform(-22,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.xiaomi, new cjs.Rectangle(-31.5,-9.4,63,18.9), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232322").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-96.9,-117,193.9,234.1), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6E707A").ss(2,1,1).p("AAGiCQA3ADAlAoQAkAogCA2QgDA2gpAkQgnAlg2gDQg3gCglgpQgkgoACg1QADg3AogkQApgkA1ACg");
	this.shape.setTransform(1.9,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E707A").s().p("AAdBNIAEhjIAPABIAAAHQAIgJAMABQANAAAJAKQAJAKgBAOQAAAQgLAJQgKAJgMgBQgMAAgHgKIgCArgAA0gEQgGAEAAAKQgBAKAGAGQAFAFAIABQAIAAAFgGQAFgFABgJQAAgJgFgFQgFgGgIgBIgBAAQgHAAgFAFgAEoA4QgPAAgKgLQgJgKAAgPQABgPAKgIQALgJAPAAQAOABAKAKQAKAJgBAPQAAAPgLAJQgKAJgOAAIgBAAgAEcAFQgGAFAAALQgBAJAFAGQAFAGAJAAQATABABgUQABgLgGgGQgFgFgIAAIgBgBQgIAAgFAFgAifA0IABgTIgugCIgBATIgOgBIACggQAHAAAFgIQADgGAAgKIACgaIAxACIgDAzIAKAAIgBAggAi7gBQgBANgIAGIAbABIACgkIgTgBgADmAzIABgbIgbgBIgBAbIgQgBIADhAIAQABIgCAXIAbABIACgXIAPABIgDBAgACNAxQgOAAgIgJQgJgKABgQQAAgPALgKQAJgIANAAQANABAIAJQAJAJgBASIAAABIgvgCQABAJAEAFQAEAEAHAAQAGABAFgDQAEgDACgEIANAHQgEAHgIAFQgGAEgJAAIgEAAgACFgCQgDACgCAFIAeABQgBgFgDgDQgEgEgGAAIgCAAQgGAAgDAEgAgUAqQgOgBgJgJQgLgMABgVQACgfAKgNQAIgLAMgCIALgCQAKgCACgGIAQAAQgEARgRAEIgKADQgNADgEAGQgGAGgBALQAIgIAPAAQAOAAAHAKQAJAKAAAOQgBAQgKAJQgJAJgOAAIgCAAgAgfgIQgGAFgBAJQAAAKAFAGQAFAFAJABQAJABAFgGQAFgFAAgKQABgJgFgGQgFgFgIgBIgCAAQgHAAgFAFgAhmAmQgPgBgJgKQgKgKABgPQABgOAKgJQAKgJAPAAQAPABAKAKQAJAKAAAOQgBAPgLAJQgJAJgNAAIgDAAgAhxgMQgGAFgBAKQAAAJAFAGQAFAGAJAAQAJABAFgGQAFgFABgKQAAgJgFgGQgFgFgIAAIgCgBQgHAAgFAFgAkYAeQgXgBgPgQQgOgPABgXQABgXAQgPQAQgOAXABQAXABAPAQQAOAQgBAXQgBAWgQAOQgPAOgVAAIgDAAgAkwg0QgLALgBARQAAARAKAKQAKAMARAAQAQABALgKQAMgKABgRQABgRgLgMQgKgLgRgBIgBAAQgQAAgLAKg");
	this.shape_1.setTransform(0,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-33.2,-25.1,66.5,49.3), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232322").s().p("ABoCKIA2huIhOiYIAhAAIA8B5IA3h5IAhAAIh8EGgAG6h8IAeAAIAABwIBzh9IAAC1IgdAAIAAhwIh0B8gAl8AYQgagYAAgnQAAgmAagaQAZgZAnAAQAoAAAYAZQAaAaAAAmQAAAngaAYQgZAZgnAAQgnAAgZgZgAlmhVQgRARAAAdQAAAeASAPQAQARAZAAQAZAAARgRQASgPAAgeQAAgdgSgRQgQgRgaAAQgZAAgRARgAFJAsIAAiNIg1AAIAAgbICHAAIAAAbIg1AAIAACNgAAUAsIAAiNIhNAAIAACNIgdAAIAAioICHAAIAACogAngAsIAAiNIhNAAIAACNIgdAAIAAioICIAAIAACog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-58.7,-13.8,117.4,27.6), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232322").s().p("AFIgmIAeAAIAABvIBzh8IAAC1IgcAAIAAhxIh1B9gAgNBwQgYgYAAgqQAAgqAYgXQAWgXAjAAQAmAAAUAcIAAgYIAdAAIAACoIgdAAIAAgYQgVAdglAAQgiAAgXgXgAAIAAQgPAQAAAeQAAAcAOARQAPASAaAAQAZAAAPgSQAPgTAAgaQAAgfgRgPQgRgQgVAAQgYAAgQAQgAjrCCIAAgbIAHABQAOAAAHgLQAGgJAAgUIAAhmIB3AAIAACoIgeAAIAAiNIg8AAIAABLQAAAhgMAQQgPASgbAAgADXCCIAAiNIg0AAIAAgbICHAAIAAAbIg1AAIAACNgAkvCCIAAjyIiMAAIAADyIgdAAIAAkPIDHAAIAAEPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-47.3,-14.2,94.7,28.4), null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-20,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(-20,-47,40,94), null);


(lib.round2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE671B").s().p("Ao9VTQkJhwjMjMQjMjNhwkKQh0kTAAktQAAksB0kTQBwkKDMjMQDMjNEJhwQESh1ErAAQEsAAESB1QEJBwDMDNQDMDMBwEKQB0ETAAEsQAAEth0ETQhwEKjMDNQjMDMkJBwQkSB1ksAAQkrAAkSh1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round2, new cjs.Rectangle(-147.4,-147.9,295,295.9), null);


(lib.round1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1,3,true).p("AAA7uQFqAAFLCLQE/CHD3D2QD2D1CHE/QCMFKAAFoQAAFpiMFKQiHE/j2D1Qj3D2k/CHQlLCLlqAAQlpAAlLiLQlAiHj2j2Qj2j1iHk/QiMlKAAlpQAAloCMlKQCHk/D2j1QD2j2FAiHQFLiLFpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round1, new cjs.Rectangle(-179,-178.5,358.1,357), null);


(lib.mastercard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA437").s().p("Ag0BgQgQgFgOgLQASgOALgVQAKgVAAgYQAAgXgKgWQgLgUgSgOQAOgLAQgFQARgGAQAAQAUAAATAIQASAIAPAOQAOAOAHASQAIATAAAUQAAAUgIAUQgHASgOAOQgPAOgSAIQgTAIgUAAQgQAAgRgGg");
	this.shape.setTransform(8.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC372E").s().p("AgTBeQgSgIgPgOQgOgOgHgSQgIgUAAgUQAAgUAIgTQAHgSAOgOQAPgOASgIQASgIAUAAQARAAARAGQAQAFAOALQgKAHgHAIQgHAKgFAJQgKAWAAAXQAAAYAKAVQAFALAHAJQAHAIAKAHQgOALgQAFQgRAGgRAAQgUAAgSgIg");
	this.shape_1.setTransform(-8.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6D2E").s().p("AgrBQIAAifIBXAAIAACfg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9B33").s().p("AAEACIAAgCIgBABIgBAAIgBgBIAAACIgBAAIAAgDIABAAIABACIABgCIABAAIAAADgAgCACIAAgCIgBAAIAAgBIADAAIAAABIgBAAIAAACg");
	this.shape_3.setTransform(15.7,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.mastercard, new cjs.Rectangle(-16.5,-10.2,33,20.4), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgECBIAAkBIAJAAIAAEBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-0.5,-12.8,1,25.8), null);


(lib.img1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAsQgDgDgBgFQAAgEACgEQAFgGABgHQADgIAAgHQAAgGgDgIQgBgGgFgHQgCgEAAgEQABgFADgDQAEgDAFABQAEABADAEQAGAIAEALQADAKAAALQAAAMgDAKQgDAKgHAKQgDAEgEAAIgDAAQgDAAgDgCg");
	this.shape.setTransform(-7.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGBBQgEgCgBgEQgBgFACgEQAOgXAAgbQAAgZgOgYQgCgEABgEQABgFAEgCQAFgDAEABQAFABACAEQASAbAAAiQAAAigSAcQgCAEgFABIgCAAQgEAAgDgCgAgjAsQgDgDgBgFQAAgFACgEQAFgFABgHQADgIAAgHQAAgHgDgHQgBgHgFgGQgCgEAAgFQABgEADgDQAEgDAFABQAFAAADAEQAGAJAEALQADAKAAALQAAALgDALQgDAKgHAKQgDAEgFAAIgCAAQgEAAgDgCg");
	this.shape_1.setTransform(-4.8,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBYQgFgDgBgEQgBgFACgEQAUghAAgnQAAglgUgiQgCgEABgFQABgEAFgDQAJgGAGAKQAXAmAAAtQAAAugXAmQgCAEgEABIgEABQgDAAgCgCgAgRBCQgEgDgBgEQgBgFACgEQAOgXAAgbQAAgZgOgYQgCgEABgEQABgFAEgCQAFgDAEABQAFACACAEQARAbAAAhQAAAigRAcQgCAEgFABIgCABQgEAAgDgCgAg7AsQgDgDgBgFQAAgEACgEQAFgGABgHQADgIAAgHQAAgGgDgIQgBgGgFgHQgCgEAAgEQABgFADgDQAEgDAFABQAFABADAEQAGAIAEALQADAKAAALQAAAMgDAKQgDAKgHAKQgDAEgFAAIgCABQgEAAgDgDg");
	this.shape_2.setTransform(-2.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAsBvQgFgDgBgEQgBgGACgEQAZgrAAgzQAAgygZgrQgCgEABgFQABgFAFgDQAFgCAEABQAFACACAEQAcAyAAA3QAAA6gcAwQgDAGgGAAIgHgBgAABBYQgDgDgCgEQgBgFADgEQASghAAgnQAAglgSgiQgDgEABgFQACgEADgDQAKgGAGAKQAWAmAAAtQAAAugWAmQgDAEgEABIgDABQgDAAgDgCgAgpBCQgEgDgCgEQgBgFADgEQAOgXAAgbQAAgZgOgYQgDgEABgEQACgFAEgCQAEgDAFABQAFACACAEQARAbAAAhQAAAigRAcQgDAEgEABIgDAAQgDAAgDgBgAhTAsQgEgDAAgFQgBgEADgEQAEgGACgHQADgIAAgHQAAgGgDgIQgCgGgEgHQgDgEABgEQAAgFAEgDQAEgDAEABQAFABADAEQAHAIADALQAEAKAAALQAAAMgEAKQgDAKgHAKQgDAEgFAAIgCAAQgDAAgDgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-101,-151,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_1, new cjs.Rectangle(-101,-151,202.2,301.6), null);


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-103,-231,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_1, new cjs.Rectangle(-103,-231,205.4,463.6), null);


(lib.clock_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.clock();
	this.instance.parent = this;
	this.instance.setTransform(-73,-86,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clock_1, new cjs.Rectangle(-73,-86,146,171.7), null);


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(-92,-75,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_1, new cjs.Rectangle(-92,-75,184.5,150.8), null);


(lib.bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2DFD6").s().p("EgSvAloMAAAhLPMAlfAAAMAAABLPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_mc, new cjs.Rectangle(-120,-240.8,240,481.6), null);


(lib.termenal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-10.1,-21.7,0.8,0.8,-2.7,0,0,-0.2,-0.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},10).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6E707A").ss(2,1,1).p("AgHgHIAPAP");
	this.shape.setTransform(-12.4,-29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6E707A").ss(2,1,1).p("AgPgPIAfAf");
	this.shape_1.setTransform(-11.6,-28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6E707A").ss(2,1,1).p("AgVgPIAfAfIAMgQ");
	this.shape_2.setTransform(-11,-28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6E707A").ss(2,1,1).p("AgegKIAfAfIAegp");
	this.shape_3.setTransform(-10.1,-29.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6E707A").ss(2,1,1).p("AgpADIAhAgIAxhF");
	this.shape_4.setTransform(-9.1,-30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Слой_1
	this.instance_1 = new lib.termenal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56,-106,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-106,112.3,211.8);


(lib.logos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.line();
	this.instance.parent = this;
	this.instance.setTransform(-15.3,0,1,0.019);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1},5,cjs.Ease.quadInOut).wait(40));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AjTCAIAAj/IGnAAIAAD/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:-36.6,y:0}).wait(40));

	// mastercard
	this.instance_1 = new lib.mastercard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.4,-0.7);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:-40.6},10,cjs.Ease.get(1)).wait(30));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_5 = new cjs.Graphics().p("AltCAIAAj/ILbAAIAAD/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:21.2,y:0}).wait(40));

	// xiaomi
	this.instance_2 = new lib.xiaomi();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-46.7,-1.3);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:25.6},10,cjs.Ease.get(1)).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-0.2,1,0.5);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round1
	this.instance = new lib.round1();
	this.instance.parent = this;
	this.instance.setTransform(-69.9,-71.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.77,scaleY:1.77,x:-67.2,y:-2.6},10,cjs.Ease.quadInOut).to({x:-51.4,y:19.6},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-69.9,y:-71.4},10,cjs.Ease.get(1)).wait(11));

	// round2
	this.instance_1 = new lib.round2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.5,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:2.13,scaleY:2.13,x:23.7,y:-37.1},10,cjs.Ease.quadInOut).to({x:276.1,y:-516.8},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:97.5,y:30.1},10,cjs.Ease.get(1)).wait(11));

	// bg_mc
	this.instance_2 = new lib.bg_mc();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249,-249.9,494,490.7);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t3
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(-2.5,-15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160).to({_off:false},0).to({alpha:1},10).wait(39).to({alpha:0},10).wait(1));

	// logos
	this.instance_1 = new lib.logos("single",44);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-42.1,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({mode:"synched",loop:false},0).to({alpha:0},10).to({_off:true},1).wait(44).to({_off:false,alpha:1,startPosition:0},0).wait(60));

	// girl
	this.instance_2 = new lib.girl_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(223,8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).to({x:1},10,cjs.Ease.get(1)).wait(25).to({x:-224},10,cjs.Ease.get(-1)).to({_off:true},1).wait(59));

	// img1
	this.instance_3 = new lib.img1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-19,30.4,1.57,1.57,0,0,0,-0.3,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).wait(29).to({mode:"single",startPosition:13},0).wait(6).to({startPosition:13},0).to({x:-114,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(104));

	// hand
	this.instance_4 = new lib.hand_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-155.1,-66.9,1,1,-45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({rotation:0,x:-19,y:-38},10,cjs.Ease.get(1)).wait(35).to({rotation:-45,x:-155.1,y:-66.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(104));

	// termenal
	this.instance_5 = new lib.termenal_1("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(178,39);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({_off:false},0).to({x:58},10,cjs.Ease.get(1)).wait(9).to({mode:"synched",loop:false},0).wait(26).to({startPosition:11},0).to({x:178},10,cjs.Ease.get(-1)).to({_off:true},1).wait(104));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqpKTQgSgagXglQguhJgNgsQgNgvhel2QhdlwABACQAtiqBAiyQB/ljBigbQBkgbLggIQLKgJAHAHQABABAiQ0QAiQ0ABABIAAAAQgHAA53mkg");
	var mask_graphics_50 = new cjs.Graphics().p("AqpKTQgSgagXglQguhJgNgsQgNgvhel2QhdlwABACQAtiqBAiyQB/ljBigbQBkgbLggIQLKgJAHAHQABABAiQ0QAiQ0ABABIAAAAQgHAA53mkg");
	var mask_graphics_51 = new cjs.Graphics().p("AqpKTQgSgagXglQguhJgNgsQgNgvhel2QhdlwABACQAtiqBAiyQB/ljBigbQBkgbLggIQLKgJAHAHQABABAiQ0QAiQ0ABABIAAAAQgHAA53mkg");
	var mask_graphics_52 = new cjs.Graphics().p("AqpKTQgSgagXglQguhJgNgsQgNgvhel2QhdlwABACQAtiqBAiyQB/ljBigbQBkgbLggIQLKgJAHAHQABABAiQ0QAiQ0ABABIAAAAQgHAA53mkg");
	var mask_graphics_53 = new cjs.Graphics().p("AqpKTQgSgagXglQguhJgNgsQgNgvhel2QhdlwABACQAtiqBAiyQB/ljBigbQBkgbLggIQLKgJAHAHQABABAiQ0QAiQ0ABABIAAAAQgHAA53mkg");
	var mask_graphics_54 = new cjs.Graphics().p("AqpKTQgSgagXglQguhJgNgsQgNgvhel2QhdlwABACQAtiqBAiyQB/ljBigbQBkgbLggIQLKgJAHAHQABABAiQ0QAiQ0ABABIAAAAQgIAA52mkg");
	var mask_graphics_55 = new cjs.Graphics().p("AqjKTQgSgagYglQguhJgMgsQgOgvhel2QhclwABACQAtiqA/iyQCAljBigbQBjgbLhgIQLKgJAGAHQACABAhQ0QAiQ0ABABIAAAAQgHAA52mkg");
	var mask_graphics_56 = new cjs.Graphics().p("AomKTQgTgagXglQguhJgMgsQgOgvhel2QhdlwACACQAtiqA/iyQCAljBigbQBjgbLhgIQLKgJAGAHQACABAhQ0QAiQ0ABABIAAAAQgHAA52mkg");
	var mask_graphics_57 = new cjs.Graphics().p("AmTKTQgSgagXglQguhJgNgsQgNgvhel2QhdlwABACQAtiqBAiyQB/ljBigbQBkgbLggIQLKgJAHAHQABABAiQ0QAiQ0ABABIAAAAQgHAA53mkg");
	var mask_graphics_58 = new cjs.Graphics().p("AjoKTQgTgagXglQguhJgMgsQgOgvhel2QhdlwACACQAtiqA/iyQCAljBigbQBjgbLhgIQLKgJAGAHQACABAhQ0QAiQ0ABABIAAAAQgHAA52mkg");
	var mask_graphics_59 = new cjs.Graphics().p("AgnKTQgTgagXglQguhJgMgsQgOgvhel2QhdlwACACQAtiqA/iyQCAljBigbQBigbLigIQLKgJAGAHQACABAhQ0QAiQ0ABABIAAAAQgHAA52mkg");
	var mask_graphics_60 = new cjs.Graphics().p("ACvKTQgSgagXglQguhJgNgsQgNgvhdl2QhdlwABACQAtiqBAiyQB+ljBigbQBkgbLhgIQLKgJAHAHQABABAiQ0QAiQ0ABABIAAAAQgIAA53mkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:42.5,y:-7.4}).wait(50).to({graphics:mask_graphics_50,x:42.5,y:-7.4}).wait(1).to({graphics:mask_graphics_51,x:44.7,y:-7.4}).wait(1).to({graphics:mask_graphics_52,x:51.6,y:-7.4}).wait(1).to({graphics:mask_graphics_53,x:62.9,y:-7.4}).wait(1).to({graphics:mask_graphics_54,x:78.8,y:-7.4}).wait(1).to({graphics:mask_graphics_55,x:98.7,y:-7.4}).wait(1).to({graphics:mask_graphics_56,x:111.1,y:-7.4}).wait(1).to({graphics:mask_graphics_57,x:125.9,y:-7.4}).wait(1).to({graphics:mask_graphics_58,x:142.9,y:-7.4}).wait(1).to({graphics:mask_graphics_59,x:162.2,y:-7.4}).wait(1).to({graphics:mask_graphics_60,x:183.8,y:-7.4}).wait(1).to({graphics:null,x:0,y:0}).wait(159));

	// shadow
	this.instance_6 = new lib.shadow_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-53.5,10);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({x:-42.5},5).wait(32).to({x:184.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// card
	this.instance_7 = new lib.card_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(202,-25.4,1,1,30);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({rotation:0,x:13,y:24},15,cjs.Ease.get(1)).wait(30).to({x:240},10,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// clock
	this.instance_8 = new lib.clock_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-191,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-32,y:20},15,cjs.Ease.get(1)).wait(35).to({x:195},10,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// t1_2
	this.instance_9 = new lib.t1_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-20.5,-112.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({x:-40.5,alpha:1},10,cjs.Ease.get(1)).wait(35).to({x:-180.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// t1_1
	this.instance_10 = new lib.t1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-31.2,-156);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-51.2,alpha:1},10,cjs.Ease.get(1)).wait(40).to({x:-191.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// bg
	this.instance_11 = new lib.bg("single",0);
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(105).to({mode:"synched",loop:false},0).wait(10).to({mode:"single",startPosition:10},0).wait(35).to({mode:"synched",loop:false},0).wait(10).to({mode:"single",startPosition:20},0).wait(49).to({mode:"synched",loop:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264,-249.9,509.1,490.7);


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
	this.instance.setTransform(150,300,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,287.7,636.3,613.4);
// library properties:
lib.properties = {
	id: 'ADEBE315FD714D31826C675BB7FB2DCD',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/card.png", id:"card"},
		{src:"images/clock.png", id:"clock"},
		{src:"images/girl.png", id:"girl"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/termenal.png", id:"termenal"}
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
an.compositions['ADEBE315FD714D31826C675BB7FB2DCD'] = {
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