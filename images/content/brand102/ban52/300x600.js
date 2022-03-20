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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg4 = function() {
	this.initialize(img.bgImg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box_1 = function() {
	this.initialize(img.box_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,156);


(lib.box_2 = function() {
	this.initialize(img.box_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,130);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,24);// helper functions:

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
	this.shape.graphics.f("#000000").s().p("AowCyIAAgQIg0AAIgCAQIgIAAIAAgYIAHAAQAJgQAAgdIAAgLIAuAAIAAA4IAJAAIgBAYgApVBzQAAAZgIAOIAjAAIAAgwIgbAAgAI/CaQgJgJAAgSIABgTIADgKIAEgHQADgEADgCQADgCAHgCIAkgIIACAIIgjAJQgJACgFAFQgEAGgBAJQAIgOATAAQAMAAAKAKQAJAJAAAOQAAANgJAKQgKAKgPAAQgOAAgJgKgAJGByQgGAGAAALQAAAKAGAHQAIAHAJAAQAJAAAIgHQAGgIAAgJQAAgKgHgHQgGgHgLAAQgKAAgGAHgAHaCaQgJgLAAgNQAAgNAJgLQAKgKAOAAQAPAAALAMIgGAGQgKgJgKAAQgJAAgIAHQgGAHAAALQAAALAHAHQAHAHAKAAQAKAAAJgKIAHAGQgMANgPAAQgOAAgKgKgAGNCaQgKgKAAgOQAAgOAKgKQAJgKAOAAQAOAAALAKQAJAKAAAOQAAAOgJAKQgKAKgPAAQgOAAgJgKgAGTBwQgGAIAAAKQAAALAGAHQAHAHAKAAQALAAAGgHQAIgHAAgLQAAgKgIgIQgGgHgLAAQgLAAgGAHgAg3CaQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAJAKAAAOQAAAOgJAKQgKAKgOAAQgQAAgIgKgAgxBwQgGAIAAAKQAAALAHAHQAHAHAKAAQALAAAGgHQAHgHAAgLQAAgLgHgHQgHgHgKAAQgKAAgIAHgAkYCaQgJgKgBgOQABgOAJgKQALgKANAAQAOAAALAKQAJAKAAAOQAAAOgJAKQgKAKgPAAQgPAAgJgKgAkRBwQgHAIAAAKQABALAGAHQAIAHAJAAQALAAAHgHQAGgHAAgLQAAgLgGgHQgIgHgKAAQgKAAgHAHgAAFCiIABgIIAGABIAEgBQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAIADgJIACgPIAAgdIAuAAIAABAIgKAAIAAg4IgbAAIAAACIgBAZQAAAJgCAHQgDAHgCACIgFAEIgHABIgJgBgAonCiIABgIIAFABIAEgBQACAAADgDQABgDABgGIACgPIABgdIAuAAIAABAIgKAAIAAg4IgbAAIgBAbIgDAQQgBAGgDADQgDAEgDAAQgCABgFAAIgIgBgAKFCiIAAgNIAMAAIAAANgAIbCiIAAhAIAJAAIAABAgAFLCiIgUgaIgTAaIgLAAIAZggIgYggIALAAIATAZIATgZIAKAAIgYAfIAaAhgAEBCiIAAhAIAJAAIAABAgADkCiIAAgcIglAAIAAAcIgKAAIAAhAIAKAAIAAAcIAlAAIAAgcIAJAAIAABAgACJCiIAAg4IgYAAIAAgIIA4AAIAAAIIgXAAIAAA4gABbCiIAAhAIAKAAIAABAgAhaCiIAAgcIglAAIAAAcIgKAAIAAhAIAKAAIAAAcIAlAAIAAgcIAKAAIAABAgAjPCiIAAhAIAfAAQAJAAAHAEQAFAFAAAHQABAKgMAFQAPAEAAAMQAAAHgGAGQgHAEgLAAgAjGCaIAWAAQAHAAAEgDQAEgDAAgFQAAgEgEgDQgFgDgHAAIgVAAgAjGB9IAVAAQAGAAADgCQADgCAAgGQAAgEgDgDQgEgCgFAAIgVAAgAk6CiIAAg4IglAAIAAA4IgKAAIAAhAIA5AAIAABAgAmoCiIAAgXIgSAAIgSAXIgMAAIAUgZQgHgBgFgGQgFgEAAgIQAAgJAGgGQAIgFAKAAIAeAAIAABAgAnHBtQgFAEAAAFQAAAGAFADQAEAEAHAAIAUAAIAAgZIgUAAQgHAAgEADgAIaBUIAAgLIALAAIAAALgAEABUIAAgLIALAAIAAALgABbBUIAAgLIALAAIAAALgAGKA5IAAhTIAKAAIAAANQAKgPAPAAQANAAAJAKQAIAJABAOQgBAPgIAKQgJAJgNAAQgPAAgKgOIAAAggAGagMQgGAHgBAKQABAKAGAIQAJAHAIAAQAJAAAIgHQAGgHAAgLQAAgJgHgIQgGgHgKAAQgJAAgIAHgANBAdQgJgJAAgPQAAgNAJgKQAJgKANAAQAOAAAIAKQAIALAAANIAAADIg0AAQABAKAHAGQAGAFAKAAQAMAAAIgJIAGAGQgLAMgQAAQgOAAgJgKgANrABQgBgIgFgGQgFgGgKAAQgIAAgFAGQgHAGgBAIIAqAAIAAAAgAKyAhQgGgFgBgKQAAgKAIgFQAIgFAMAAQAJAAALACIAAgBQAAgIgFgFQgFgFgJAAQgIAAgMAFIgDgIQAMgFAMAAQANAAAHAHQAIAHAAAMIAAAmIgKAAIAAgJQgJALgPAAQgJAAgIgGgAK6AIQgFAEAAAGQAAAGAFADQAEAEAHAAQAKAAAFgFQAHgFAAgHIAAgGQgJgDgKAAQgIAAgGADgAIhAdIAFgHQAKAIALAAQAHAAAFgDQAEgDABgFQAAgFgFgDQgEgDgIAAIgIAAIAAgIIAIAAQAGAAAFgCQAEgDAAgFQAAgEgEgDQgEgCgGAAQgMAAgIAGIgFgGQALgJAOAAQAMAAAGAFQAGAFAAAIQAAAKgKADQALAFABALQAAAIgIAGQgHAGgLAAQgQAAgLgKgAgwAhQgHgFAAgKQAAgKAHgFQAIgFAMAAQAJAAALACIAAgBQAAgJgFgEQgEgFgKAAQgJAAgLAFIgCgIQAMgFALAAQANAAAIAHQAGAGAAANIAAAmIgJAAIAAgJQgIALgPAAQgKAAgHgGgAgoAIQgFAEgBAGQABAGAFADQADAEAIAAQAJAAAGgFQAHgFAAgHIAAgGQgKgDgKAAQgIAAgFADgAlOAdIAGgHQAJAIAMAAQAGAAAGgDQAEgDAAgFQAAgFgEgDQgEgDgJAAIgIAAIAAgIIAJAAQAGAAAEgCQAEgCAAgGQAAgEgEgDQgFgCgFAAQgLAAgJAGIgEgGQALgJAOAAQAKAAAHAFQAGAFAAAIQAAAKgKADQAMAFAAALQAAAIgHAGQgIAGgLAAQgPAAgMgKgAmqAdQgKgLAAgNQAAgMAKgLQAJgKAPAAQAPAAALAMIgGAGQgJgJgLAAQgIAAgIAGQgGAGgBAIIAdAAIAAAIIgeAAQACAKAGAFQAIAHAJAAQAKAAAJgLIAHAGQgGAGgGAEQgGADgJAAQgOAAgKgKgAnzAhQgHgFAAgKQAAgKAHgFQAJgFALAAQAKAAAKACIAAgBQAAgJgEgEQgFgFgKAAQgIAAgMAFIgCgIQANgFAKAAQAOAAAHAHQAHAHAAAMIAAAmIgKAAIAAgJQgIALgPAAQgJAAgIgGgAnrAIQgFAEAAAGQAAAGAFADQADAEAIAAQAJAAAHgFQAFgFAAgHIAAgGQgIgDgLAAQgHAAgGADgAwOAhQgHgFAAgKQAAgKAHgFQAIgFAMAAQAKAAALACIAAgBQgBgJgFgEQgEgFgKAAQgIAAgMAFIgCgIQAMgFAMAAQANAAAHAHQAHAHAAAMIAAAmIgJAAIAAgJQgJALgPAAQgJAAgIgGgAwGAIQgFAEAAAGQAAAGAFADQADAEAIAAQAJAAAHgFQAFgFABgHIAAgGQgKgDgKAAQgHAAgGADgArbAlIABgIIA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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-110.8,-17.8,221.7,35.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-130.9,-30.5,261.8,61.1), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-81,-21);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHbAZQgKgKAAgPQAAgOAKgKQALgKAQAAQAPgBALAKQAKAMAAANQAAAOgLALQgJALgRAAQgPAAgLgLgAHmgPQgFAIAAAHQAAAJAGAHQAGAFAJAAQAIAAAGgFQAGgHAAgJQAAgHgGgIQgGgFgJgBQgJABgGAFgAD3AZQgKgKAAgPQAAgOAKgLQAKgKAQABQAJAAAGACQAHAEAEAEIgJALIgIgGQgEgCgFAAQgJABgGAFQgFAIAAAHQAAAIAFAIQAGAFAJAAQAGAAADgBQAEgCAFgFIAJALQgFAGgHACQgGAEgKAAQgPAAgKgLgAhhAZIAJgMQAKAJAKAAQAFAAACgCQADgBAAgDQAAgEgDgCIgUgHIgHgDQgEgBgBgEQgCgEAAgFQAAgJAHgFQAHgHAKABQAPgBALAKIgIAKQgJgGgJAAQgEAAgCACQgDACAAACQAAAEADABQACABAKADQAMADAFAEQAFAEAAAJQAAALgHAEQgHAHgLAAQgRgBgMgKgAp3AZIAJgMQAKAJAKAAQAFAAACgCQADgCAAgCQAAgEgDgCIgUgHIgHgDIgFgFQgCgEAAgFQAAgJAHgFQAHgHALABQAOgBALAKIgIAKQgJgGgJAAQgEAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAEACABQACABAKADQAMADAFAEQAFAFAAAIQAAAKgHAFQgGAHgMAAQgRgBgMgKgAmFAjIgchFIARAAIASAwIASgwIAQAAIgcBFgAJrAjIghgrIAAArIgPAAIAAhFIAOAAIAgAqIAAgqIAPAAIAABFgAGgAjIAAhFIAPAAIAABFgAFcAjIAAg2IgVAAIAAgPIA5AAIAAAPIgVAAIAAA2gACbAjIAAhFIAzAAIAAAOIgkAAIAAAOIAgAAIAAANIggAAIAAAOIAlAAIAAAOgABKAjIAAhFIAPAAIAAA2IAjAAIAAAPgAgKAjIAAhFIAzAAIAAAOIglAAIAAAOIAgAAIAAANIggAAIAAAOIAlAAIAAAOgAi/AjIgPgXIgLAAIAAAXIgPAAIAAhFIAfAAQAMAAAIAIQAGAGAAAKQAAAOgPAGIARAZgAjZAAIAPAAQAFAAAEgDQADgDAAgEQAAgEgEgDQgDgDgFAAIgPAAgAk+AjIAAhFIA0AAIAAAOIglAAIAAAOIAhAAIAAANIghAAIAAAOIAmAAIAAAOgAnrAjIAAhFIAPAAIAAA2IAiAAIAAAPgAofAjIAAhFIAPAAIAABFg");
	this.shape.setTransform(1.3,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-81,-21,162,42), null);


(lib.box_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_2();
	this.instance.parent = this;
	this.instance.setTransform(-90,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_2_1, new cjs.Rectangle(-90,-65,180,130), null);


(lib.box_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_1();
	this.instance.parent = this;
	this.instance.setTransform(-93,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1_1, new cjs.Rectangle(-93,-78,186,156), null);


(lib.bgImg4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg4_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg3_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3B47D").ss(2,2,0,3).p("AgcgtIArAkAAUgFIAHAFIgHAHAAJAPIglAg");
	this.shape.setTransform(12,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3B47D").s().p("ACDAKIkQAAIAAgTIEWAAIAFAAIAAAEIAAAHIAAAEIAAAEg");
	this.shape_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-14.3,-6,30.5,12.1), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(46.6,0,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:49},3,cjs.Ease.get(1)).to({x:46.6},2).wait(3).to({x:49},3,cjs.Ease.get(1)).to({x:46.6},2).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiA/IAAgWIhPAAIAAhlIASAAIAABUIAwAAIAAhUIASAAIAABUIANAAIgDAngAmXAaIAKgMQAOANAUAAQAIAAAGgEQAGgEAAgHQAAgOgXAAIgMAAIAAgPIAMAAQAVAAAAgPQAAgHgGgDQgFgEgJAAQgQAAgMALIgKgMQAQgPAXAAQAQAAAKAIQAKAIAAALQAAARgRAHQAUAHAAARQAAAMgKAJQgLAIgRAAQgaAAgSgQgAGGApIAAhJIg0BJIgQAAIAAhlIARAAIAABKIA0hKIARAAIAABlgAD7ApIAAhVIghAAIAAgQIBTAAIAAAQIggAAIAABVgACyApIAAhJIgzBJIgRAAIAAhlIASAAIAABKIAzhKIARAAIAABlgAA9ApIAAgqIgxAAIAAAqIgRAAIAAhlIARAAIAAAqIAxAAIAAgqIASAAIAABlgAg8ApIAAhlIASAAIAABlgAjgApIgKgZIgwAAIgLAZIgSAAIAthmIAQAAIAtBmgAjxAAIgRgnIgSAnIAjAAg");
	this.shape.setTransform(-23.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AsyDDIAAmFIZlAAIAAGFg");
	this.shape_1.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-19.5,163.8,39);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4,268.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140));

	// btn
	this.instance_3 = new lib.btn("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.7,194.5,1,1,0,0,0,-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({mode:"synched",loop:false},0).wait(31));

	// box_2
	this.instance_4 = new lib.box_2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(241,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:38},10,cjs.Ease.get(1)).to({x:8},119).to({x:-242},10,cjs.Ease.get(-1)).wait(1));

	// box_1
	this.instance_5 = new lib.box_1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-246,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-42},10,cjs.Ease.get(1)).to({x:-12},119).to({x:244},10,cjs.Ease.get(-1)).wait(1));

	// bgImg1
	this.instance_6 = new lib.bgImg1_1();
	this.instance_6.parent = this;
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129).to({_off:false},0).to({alpha:1},10).wait(1));

	// bgImg4
	this.instance_7 = new lib.bgImg4_1();
	this.instance_7.parent = this;
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(94).to({_off:false},0).to({alpha:1},10).to({_off:true},35).wait(1));

	// bgImg3
	this.instance_8 = new lib.bgImg3_1();
	this.instance_8.parent = this;
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).to({alpha:1},10).to({_off:true},35).wait(36));

	// bgImg2
	this.instance_9 = new lib.bgImg2_1();
	this.instance_9.parent = this;
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({alpha:1},10).to({_off:true},35).wait(71));

	// bgImg1
	this.instance_10 = new lib.bgImg1_1();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},34).wait(106));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339,-300,670,600);


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
p.nominalBounds = new cjs.Rectangle(-39,299,670,602);
// library properties:
lib.properties = {
	id: 'B12536D93F55493D883A9CFDBC1C5E1B',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/bgImg4.jpg", id:"bgImg4"},
		{src:"images/box_1.png", id:"box_1"},
		{src:"images/box_2.png", id:"box_2"},
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
an.compositions['B12536D93F55493D883A9CFDBC1C5E1B'] = {
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