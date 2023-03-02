(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.intel_logo = function() {
	this.initialize(img.intel_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,61);


(lib.laptop = function() {
	this.initialize(img.laptop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,273);


(lib.laptop2 = function() {
	this.initialize(img.laptop2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,236);


(lib.laptop3 = function() {
	this.initialize(img.laptop3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,259);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,87);


(lib.win_logo = function() {
	this.initialize(img.win_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,26);// helper functions:

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


(lib.win_logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.win_logo();
	this.instance.parent = this;
	this.instance.setTransform(-56,-10,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.win_logo_1, new cjs.Rectangle(-56,-10,112,20.8), null);


(lib.t5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADYA1IAAgRIg2AAIgBARIgIAAIAAgZIAHAAQAIgPAAgeIAAgLIAvAAIAAA4IAKAAIgBAZgACygLQAAAZgIAOIAkAAIAAgwIgcAAgADvAgQgIgFAAgKQAAgKAIgGQAHgEANAAQAJAAAMACIAAgCQAAgIgGgFQgEgEgKAAQgKAAgKAEIgDgIQANgFALAAQAOAAAHAHQAHAHAAAMIAAAnIgJAAIAAgJQgJALgPAAQgKAAgHgGgAD2AHQgFADAAAHQAAAGAFADQAFAEAHAAQAKAAAFgFQAHgFAAgIIAAgGQgKgDgKAAQgIAAgGAEgAhbAcQgJgKAAgOQAAgOAJgKQALgKAOAAQAOAAAKAKQAKALAAANQAAAOgKAKQgJAKgPAAQgPAAgKgKgAhUgOQgGAHAAALQAAALAHAHQAHAHAKAAQALAAAGgHQAHgIAAgKQAAgKgHgIQgHgHgKAAQgLAAgHAHgAjHAcQgKgJAAgPQAAgOAJgKQAJgKAOAAQAOAAAIAKQAIAKAAAOIAAAEIg0AAQABAKAHAFQAGAGAJAAQANAAAIgJIAGAGQgLAMgQAAQgOAAgJgKgAidAAQAAgIgGgHQgFgGgKAAQgIAAgGAGQgGAGgBAJIAqAAIAAAAgAm9AcQgKgKAAgOQAAgNAKgLQAKgKAOAAQAPAAAKAKQAKALAAANQAAAOgKAKQgKAKgPAAQgPAAgJgKgAm2gOQgHAIAAAKQAAAKAHAIQAHAHAKAAQALAAAHgHQAGgHAAgLQAAgLgHgHQgGgHgLAAQgKAAgHAHgAIVAkIAAgNIAMAAIAAANgAH5AkIAAgYIgSAAIgTAYIgMAAIAUgZQgHgCgFgFQgFgEAAgIQAAgJAHgGQAGgFAMAAIAfAAIAABAgAHZgQQgEADAAAGQAAAGAEACQAEADAHAAIAVAAIAAgYIgVAAQgHAAgEAEgAGxAkIAAgzIgnAzIgKAAIAAhAIAKAAIAAAzIAngzIAKAAIAABAgAFjAkIAAgcIgmAAIAAAcIgKAAIAAhAIAKAAIAAAcIAmAAIAAgcIAKAAIAABAgACFAkIAAgzIgnAzIgKAAIAAhAIAKAAIAAAzIAngzIAKAAIAABAgAA+AkIgWgeIgNAOIAAAQIgKAAIAAgQIgNgOIgVAeIgMAAIAbgkIgZgcIALAAIAhAlIAAglIAKAAIAAAlIAhglIAMAAIgaAcIAbAkgAjqAkIAAhAIAKAAIAABAgAkrAkIAAhAIAKAAIAAAYIARAAQAMAAAHAEQAHAFAAAKQAAAKgHAGQgHAFgLAAgAkhAcIARAAQAIAAAEgDQAEgEAAgGQAAgFgEgDQgEgDgIAAIgRAAgAlzAkIAAhAIAgAAQAJAAAGAEQAGAFAAAHQAAALgLADQAPAEAAAMQAAAIgHAGQgGAEgLAAgAlqAcIAWAAQAHAAAEgDQAFgDAAgFQAAgFgFgDQgFgCgHAAIgVAAgAlqAAIAVAAQAGAAADgDQAEgDAAgFQAAgEgDgCQgDgDgHAAIgVAAgAniAkIAAgnIg0AAIAAAnIgKAAIAAhYIAKAAIAAAoIA0AAIAAgoIAKAAIAABYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5_2, new cjs.Rectangle(-54.4,-5.3,109,10.6), null);


(lib.t5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AElAjQgKgKABgOQgBgNAKgKQALgLAOAAQAOAAALAKQAJAKAAAOQAAAOgKAKQgKAKgOAAQgPAAgKgKgAEtgGQgIAGAAALQAAAKAIAIQAHAHAKAAQALAAAGgHQAHgHAAgLQAAgKgHgHQgGgIgLAAQgLAAgGAIgACLAjQgKgKABgOQgBgNAKgKQALgLAOAAQAPAAAJAKQALALAAANQAAAOgLAKQgJAKgPAAQgOAAgLgKgACTgGQgHAGAAALQAAALAHAHQAHAHAKAAQALAAAHgHQAGgIAAgKQAAgKgGgHQgIgIgKAAQgLAAgGAIgAhNAjQgKgJAAgPQAAgNAJgLQAJgKANAAQAPAAAIAKQAIAKAAAOIAAAEIg0AAQABAKAHAGQAGAGAJAAQAMAAAJgKIAGAGQgMAMgPAAQgPAAgIgKgAgiAHQgCgJgFgGQgFgGgKAAQgIAAgGAGQgGAHgBAIIArAAIAAAAgAj1AjQgJgJAAgPQAAgNAJgLQAJgKAOAAQAOAAAIAKQAIAKAAAOIAAAEIg0AAQABAKAGAGQAHAGAJAAQAMAAAIgKIAHAGQgMAMgPAAQgOAAgKgKgAjKAHQgBgIgFgHQgFgGgKAAQgJAAgFAGQgHAHAAAIIAqAAIAAAAgAnqAjQgLgKABgOQgBgNALgKQAKgLAOAAQAPAAAJAKQAKALAAANQAAAOgKAKQgKAKgOAAQgOAAgKgKgAnjgGQgIAGABALQgBAKAIAIQAHAHAKAAQALAAAHgHQAGgHAAgLQAAgLgHgGQgHgIgKAAQgLAAgGAIgADJArIACgIIAEABIAEgBQACAAACgDIAEgJIABgPIABgYIAAgFIAvAAIAABAIgKAAIAAg4IgbAAIAAACQAAAOgCALQAAAJgCAHQgCAHgDACQgCADgEACIgHABIgIgCgAJCArIAAgNIAMAAIAAANgAImArIAAgyIgnAyIgKAAIAAhAIAKAAIAAAzIAogzIAJAAIAABAgAHZArIAAgyIgoAyIgJAAIAAhAIAKAAIAAAzIAngzIAJAAIAABAgAFvArIAAhAIAtAAIAAAIIgjAAIAAA4gABoArIAAgcIglAAIAAAcIgKAAIAAhAIAKAAIAAAbIAlAAIAAgbIAKAAIAABAgAAgArIgUgaIgTAaIgMAAIAZghIgYgfIAMAAIASAYIATgYIALAAIgZAfIAaAhgAh+ArIAAg4IgXAAIAAgIIA5AAIAAAIIgXAAIAAA4gAkYArIAAhAIAKAAIAABAgAlZArIAAhAIAKAAIAAAXIASAAQALAAAHAFQAIAGAAAJQAAAKgHAGQgGAFgMAAgAlPAjIASAAQAHAAAFgDQAEgDAAgHQAAgFgFgDQgDgDgIAAIgSAAgAmhArIAAhAIAhAAQAJAAAGAEQAGAFAAAHQAAAKgLAEQAOAEAAANQABAHgHAGQgGAEgLAAgAmXAjIAWAAQAIAAADgDQAFgDgBgFQABgFgFgCQgEgDgIAAIgVAAgAmXAGIAUAAQAHAAADgDQAEgDAAgEQAAgEgDgCQgFgDgGAAIgUAAgAoPArIAAgoIg0AAIAAAoIgKAAIAAhXIAKAAIAAAnIA0AAIAAgnIAKAAIAABXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5_1, new cjs.Rectangle(-59,-4.5,118,9.1), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-81.2,-22.5,162.6,45.1), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(5.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-72,-18,155,36.2), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(5.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-70.5,-18.2,152.3,36.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMsBNQgZgdABgtIAAAAQgBgsAagdQAZgfAoAAQAnAAAZAeQAZAdAAAsIAAABQAAAsgZAeQgZAegoAAQgoAAgZgegANNgrQgMASAAAbIAAABQAAAcAMARQANATAUAAQATAAAMgSQAMgSAAgcIAAAAQAAgbgMgSQgNgTgTAAQgUAAgMASgAGjBIIAegdQAXAYAbAAQAMAAAIgGQAIgHAAgLIAAgBQAAgMgKgHQgLgHgSAAIgTAAIgHgbIAwgwIhPAAIAAgmICJAAIAAAhIgzAxQA2AJAAAuIAAABQAAAdgUASQgUATghAAQgxAAgegjgAqnBVQgYgXAAgjIAAgBQABggAVgXQAWgYAhAAQAkAAAVAaQASAXAAAiIgBALIhrAAQAHAfAfAAQAUAAASgQIAYAWQgXAdgoAAQgjAAgWgWgApSAOQgBgOgJgJQgIgJgOAAQgbAAgHAgIBCAAIAAAAgADxBKIAagfQAeAYAfAAQANAAAIgFQAIgFAAgJIAAAAQAAgJgIgFQgIgGgZgGQgjgJgOgLQgSgNAAgcIAAAAQAAgcAUgRQATgQAgAAQAqAAAhAZIgXAiQgdgUgXAAQgNAAgHAFQgGAFgBAIIAAAAQAAAKAJAFQAIAFAbAHQAhAIAOAMQARAOAAAZIAAABQAAAdgUARQgVAQghAAQgyAAgkgggAgBBWQgVgXAAglIAAAAQgBgkAWgWQATgVAdAAQAcAAAUAXIAAhMIAsAAIAADRIgsAAIAAgWQgSAZgeAAQgdAAgTgUgAAfgEQgLALABATIAAAAQgBATALANQAMALAPAAQAQAAALgLQALgNgBgTIAAAAQABgTgLgLQgLgMgQAAQgQAAgLAMgAitBeQgPgNgBgWIAAgBQABgYARgNQARgMAcAAQATAAATAHIAAgDQgBgbggAAQgWAAgVAIIgLghQAdgNAfAAQAjAAARASQARARAAAfIAABZIgqAAIAAgQQgTATgdAAQgWAAgPgMgAiSA5IAAAAQAAAJAHAFQAHAFAKAAQAPAAAKgHQAKgIAAgMIAAgIQgNgGgPAAQgfAAAAAWgAoHBeQgQgNAAgWIAAgBQAAgYASgNQAQgMAdAAQATAAASAHIAAgDQABgbgiAAQgVAAgVAIIgMghQAdgNAfAAQAkAAARASQARAQAAAgIAABZIgrAAIAAgQQgRATgdAAQgXAAgPgMgAnsA5IAAAAQAAAJAGAFQAHAFAKAAQAQAAAJgHQAKgIAAgMIAAgIQgNgGgPAAQgfAAABAWgAtkBWQgWgXABglIAAAAQAAgkAVgWQAUgVAdAAQAdAAATAXIAAhMIAsAAIAADRIgsAAIAAgWQgSAZgeAAQgdAAgUgUgAtCgEQgMALAAATIAAAAQAAATAMANQAKALAQAAQAQAAALgLQAKgNABgTIAAAAQgBgTgKgLQgMgMgPAAQgQAAgKAMgAK3BnIAAgrIhiAAIgIggIBvh/IAlAAIAAB7IAbAAIAAAkIgbAAIAAArgAKCAYIA1AAIAAg+gAllBnIAAjIIBTAAQAjAAAVATQAUATAAAfIAAABQAAAhgXATQgWASgkAAIgiAAIAAA8gAk5ADIAkAAQAQAAAJgHQAJgJAAgNIAAgBQAAgegkAAIgiAAgAvGBnIAAjIIAsAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-96.7,-10.6,193.4,21.4), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-12,-35,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-12,-35,24.2,70), null);


(lib.laptop3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.laptop3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-97,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop3_1, new cjs.Rectangle(-120,-97,240,194.3), null);


(lib.laptop2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.laptop2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-111,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop2_1, new cjs.Rectangle(-120,-111,240,221.3), null);


(lib.laptop_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6
	this.instance = new lib.laptop();
	this.instance.parent = this;
	this.instance.setTransform(-213,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_1, new cjs.Rectangle(-213,-137,426,273), null);


(lib.intel_logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.intel_logo();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.intel_logo_1, new cjs.Rectangle(-25,-25,50,50), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC6B0QgKgKAAgPQAAgQAKgJQAJgLAOAAQAOAAAIALQAJAJAAAQIAAAEIg2AAQACAKAGAGQAHAGAJAAQAMAAAJgJIAHAGQgMAMgQAAQgPAAgJgKgADmBXQgBgKgGgGQgFgHgKAAQgIAAgGAHQgGAFgCALIAsAAIAAAAgAijB0QgKgLAAgOQAAgOAKgLQALgLAOAAQAQAAAJALQAKAKAAAPQAAAOgKALQgKAKgPAAQgPAAgKgKgAicBIQgGAHAAAMQAAALAHAHQAHAIAKAAQALAAAHgIQAHgHAAgLQAAgKgHgJQgHgHgLgBQgKABgIAHgAj2B0QgJgKAAgSIABgVQABgHACgCIAEgIIAHgGIAKgEIAlgJIACAIIgkAJQgKADgFAGQgEAGgBAKQAJgPATAAQAOAAAJAJQAJAKAAAOQAAAPgKAKQgJAKgPAAQgQAAgJgKgAjuBJQgHAIAAAKQAAAMAHAGQAHAIAKAAQALAAAGgIQAHgGAAgMQAAgKgHgIQgHgHgKAAQgKAAgHAHgAhhB9IABgJIAFABIAEgBIAEgEIAEgJIACgPIABgfIAvAAIAABEIgKAAIAAg7IgcAAIAAABQAAAQgBAKQgBAMgCAFQgCAHgDADQgCADgEACIgHABgAA+B9IAAhEIAKAAIAAA7IAhAAIAAg7IAKAAIAAA7IAhAAIAAg7IAKAAIAABEgAgGB9IAAhEIAJAAIAAAZIARAAQANAAAHAGQAHAEAAAKQAAALgHAFQgGAHgMAAgAADB0IASAAQAIgBAEgDQAEgDAAgHQAAgFgEgDQgFgDgIAAIgRAAgADOgnQgJgKAAgPQAAgPAJgKQAJgKAOAAQAPAAAIAKQAIAKAAAQIAAADIg1AAQABAKAGAGQAHAGAJAAQAMAAAKgJIAGAFQgMANgQAAQgOAAgKgKgAD6hFQgBgIgFgIQgHgGgJAAQgIAAgGAGQgGAHgBAJIArAAIAAAAgAisgnIAFgHQALAIALAAQAHAAAFgDQAFgDAAgGQAAgGgEgCQgFgDgIAAIgJAAIAAgIIAJAAQAHAAAEgDQAEgEAAgEQAAgFgEgDQgFgDgFABQgNAAgIAGIgFgHQAMgIAOAAQALAAAHAEQAHAGAAAIQAAALgLAEQAMAEAAAMQAAAJgHAGQgHAGgMAAQgPAAgNgKgAj9ghIAEgIQAFADAHAAQALAAAHgOIgohGIAMAAIAhA8IAdg8IALAAIgkBIQgKAVgSAAQgIAAgHgEgAgQgjQgHgFAAgLQAAgKAIgGQAHgFANAAQAKAAAKACIAAgBQAAgKgFgEQgFgFgKAAQgIAAgLAFIgDgIQANgGAKAAQAPAAAHAIQAHAGAAANIAAApIgKAAIAAgKQgJAMgPAAQgKAAgHgGgAgIg9QgFAEAAAGQAAAHAFADQAFAEAGAAQAJgBAHgFQAGgFAAgHIAAgHQgJgCgKAAQgJgBgFAEgACbgfIAAg6IgZAAIAAgJIA7AAIAAAJIgYAAIAAA6gABqgfIAAg1IgoA1IgKAAIAAhDIAKAAIAAA2IAog2IAKAAIAABDgAgygfIAAgdIgnAAIAAAdIgKAAIAAhDIAKAAIAAAdIAnAAIAAgdIAKAAIAABDgABKhwQgFgEgCgIIAHgBQADAJAJAAQAIAAADgJIAHABQgBAIgFAEQgFAEgHABQgIgBgEgEg");
	this.shape.setTransform(-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1272D6").ss(1,2,0,3).p("AlQjaIKhAAIAAG1IqhAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#064884").s().p("AlQDbIAAm1IKhAAIAAG1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-34.7,-22.9,69.4,45.8), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-120,-240,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-120,-240,240,480), null);


(lib.t5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.intel_logo_1();
	this.instance.parent = this;
	this.instance.setTransform(-24,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACoBwQgJgJAAgQQAAgOAJgKQAJgKAOAAQANAAAIAKQAJAKAAAPIAAAEIg0AAQABAJAGAGQAHAGAJAAQAMAAAIgJIAHAGQgLAMgQgBQgOAAgKgJgADTBUQAAgJgGgHQgGgGgJgBQgIABgGAGQgGAGgBAKIAqAAIAAAAgAAtBwQgKgKAAgPQAAgOAKgKQAJgKAPAAQAOAAAKAKQAKAKAAAOQAAAPgKAKQgKAKgOgBQgPABgJgKgAAzBFQgGAHAAALQAAAMAHAGQAHAIAKAAQALAAAGgIQAHgGAAgMQAAgLgHgHQgGgIgLAAQgKAAgIAIgAgnBtQgMgPAAgSQgBgTANgOQANgNAUAAQAIgBAKAEQAJAEAGAHIgHAHQgNgMgNAAQgPAAgKAKQgKALAAAQQAAAQAKAKQAKAKAPABQAHgBAGgCQAJgFAFgFIAHAGQgJAJgHADQgHADgMAAQgTABgNgNgAixBsQgOgNAAgTQAAgUAOgNQAOgNATAAQATAAANANQAOANAAAUQAAASgOAOQgNANgUAAQgTAAgNgNgAiuAuQgMAMAAASQAAASAMALQANANAQAAQASAAANgNQAMgMgBgRQABgRgMgNQgNgMgRgBQgSAAgMANgAkbBwQgJgJAAgQQAAgOAJgKQAJgKAOAAQANAAAIAKQAJAKAAAPIAAAEIg1AAQACAKAGAFQAHAGAJAAQALAAAJgJIAHAGQgLAMgQgBQgOAAgKgJgAjwBUQAAgJgHgHQgEgGgKgBQgJABgFAGQgGAFgCALIArAAIAAAAgAlGB1QgFgFAAgJIAAgoIgJAAIAAgIIAJAAIAAgVIAKAAIAAAVIAUAAIAAAIIgUAAIAAAnQAAALALAAQAFgBAEgCIAAAJQgFACgGAAQgJAAgFgEgAGGB4IAohQIgwAAIAAgJIA8AAIAAAIIgoBRgAFjB4IAAhBIAJAAIAABBgAB2B4IAAhBIAKAAIAAAQQAEgHAGgGQAIgFAIAAIAAALIAAAAQgMAAgHAHQgHAJAAAOIAAAagAjXB4IAAhcIAKAAIAABcgAlqB4IAAgmQAAgKgEgFQgFgFgJAAQgHAAgHAGQgFAGgBAJIAAAlIgJAAIAAhBIAJAAIAAALQAIgNAPAAQALAAAIAHQAGAHAAAMIAAApgAm4B4IAAhZIAKAAIAABZgAiCBiIgNgSIgNAAIAAASIgHAAIAAgwIAWAAQAIAAAFAGQAFAEAAAFQgBAGgDADQgDADgGACIAPATgAicBKIAOAAQAFAAADgDQADgBAAgFQAAgDgCgDQgEgCgEAAIgPAAgAEsBGIAAgeIgOAVIAAAAIgOgVIAAAeIgGAAIAAgnIAHAAIANAVIAOgVIAGAAIAAAngADwBGIAAghIgMAAIAAgGIAeAAIAAAGIgMAAIAAAhgAFiAoIAAgLIALAAIAAALgACtgLIAAhWIAKAAIAAANQAKgPAPAAQALAAALAJQAJALAAAOQAAAPgJAKQgLAKgLAAQgPAAgKgOIAAAhgAC+hTQgIAHABALQgBALAIAIQAHAHAJAAQALAAAFgHQAIgHgBgMQABgKgIgIQgGgHgKAAQgJAAgHAHgAlfgLIAAhWIAKAAIAAANQAKgPAPAAQAMAAAKAJQAJAKAAAPQAAAQgJAJQgKAKgMAAQgPAAgKgOIAAAhgAlPhTQgGAHAAALQAAALAGAIQAIAHAJAAQAJAAAHgHQAHgHAAgMQAAgLgHgHQgHgHgJAAQgJAAgIAHgAiGgPIAAgQIg6AAIAAhCIAKAAIAAA5IAlAAIAAg5IAKAAIAAA5IAKAAIgCAZgABkgoQgJgKAAgPQAAgOAJgJQAKgLAOAAQAQAAAJALQAJAJAAAOQAAAPgJAKQgLAKgOAAQgOAAgKgKgABrhTQgGAHAAALQgBAMAIAGQAHAIAJAAQALAAAHgHQAGgHAAgMQABgLgIgHQgGgHgLAAQgKAAgHAHgAAfgoQgKgLAAgOQAAgOAKgJQAKgLAOAAQAPAAALAMIgGAGQgKgJgKAAQgKAAgHAHQgHAIAAAKQAAAMAHAGQAHAIALAAQALAAAIgKIAHAGQgMANgPAAQgOAAgKgKgAgmgoQgJgKAAgPQAAgOAJgJQALgLANAAQAPAAALAMIgHAGQgHgJgMAAQgJAAgHAHQgHAHAAALQAAAMAHAGQAHAIAKAAQAKAAAJgKIAHAGQgNANgOAAQgNAAgLgKgAhugoQgJgJAAgQQAAgNAJgLQAJgKAOAAQANAAAJAKQAIAKAAAPIAAAEIg0AAQABAJAGAGQAIAHAIgBQANAAAHgJIAHAGQgLAMgQAAQgOAAgKgKgAhDhEQgBgKgFgGQgFgHgJAAQgJABgGAFQgHAIAAAJIAqAAIAAAAgAkJgoQgJgKAAgPQAAgOAKgJQAKgLAOAAQAPAAAKALQAJAJABAOQgBAOgJALQgLAKgOAAQgOAAgLgKgAkBhTQgHAHAAALQAAAMAHAGQAHAIAKAAQAKAAAIgHQAGgIABgLQAAgKgIgIQgGgHgLAAQgKAAgHAHgAl+gfIAAhRIgxAAIAABRIgKAAIAAhaIBFAAIAABag");
	this.shape.setTransform(55,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5_3, new cjs.Rectangle(-49,-36,148.2,50), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_198 = function() {
		if(num >= 3){
			this.stop();
		}else{
			num++;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(198).call(this.frame_198).wait(47));

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(109,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245));

	// win_logo
	this.instance_1 = new lib.win_logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-52,-204);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140).to({_off:false},0).to({alpha:1},15).wait(74).to({alpha:0},15).wait(1));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(79.6,208.2,0.02,0.02,0,0,0,2.5,2.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(31).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(3).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(32).to({alpha:0},15).wait(1));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-11,-199.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({alpha:1},15).wait(94).to({y:-129.6},16,cjs.Ease.quadInOut).wait(89).to({alpha:0},15).wait(1));

	// t5_3
	this.instance_4 = new lib.t5_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-60.9,213.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(245));

	// t5_2
	this.instance_5 = new lib.t5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-53.2,-161.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).to({alpha:1},15).wait(74).to({alpha:0},15).wait(1));

	// t5_1
	this.instance_6 = new lib.t5_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-48.6,-177.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(140).to({_off:false},0).to({alpha:1},15).wait(74).to({alpha:0},15).wait(1));

	// t2_2
	this.instance_7 = new lib.t2_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-35.7,-99.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({alpha:1},15).wait(25).to({alpha:0},15).to({_off:true},1).wait(119));

	// t2_1
	this.instance_8 = new lib.t2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-37,-99.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).to({alpha:1},15).wait(25).to({alpha:0},15).to({_off:true},1).wait(174));

	// t3
	this.instance_9 = new lib.t3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-26.7,-85,1,1,0,0,0,-0.3,-0.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140).to({_off:false},0).to({alpha:1},15).wait(74).to({alpha:0},15).wait(1));

	// laptop3
	this.instance_10 = new lib.laptop3_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,50,0.8,0.8,0,0,0,0,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(125).to({_off:false},0).to({alpha:1},15).wait(89).to({alpha:0},15).wait(1));

	// laptop2
	this.instance_11 = new lib.laptop2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,30.5,0.958,0.959,0,0,0,0,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70).to({_off:false},0).to({alpha:1},15).wait(25).to({alpha:0},15).to({_off:true},1).wait(119));

	// laptop
	this.instance_12 = new lib.laptop_1("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-0.1,43.9,0.554,0.554,0,0,0,-0.2,0.2);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},15).wait(40).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(174));

	// bg
	this.instance_13 = new lib.bg_1();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(245));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-240,241.2,480);


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
p.nominalBounds = new cjs.Rectangle(149,299,302.5,602);
// library properties:
lib.properties = {
	id: '6C8BF234883E46B3A3B88F3B2B09E900',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/intel_logo.jpg", id:"intel_logo"},
		{src:"images/laptop.png", id:"laptop"},
		{src:"images/laptop2.png", id:"laptop2"},
		{src:"images/laptop3.png", id:"laptop3"},
		{src:"images/logo.jpg", id:"logo"},
		{src:"images/win_logo.png", id:"win_logo"}
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
an.compositions['6C8BF234883E46B3A3B88F3B2B09E900'] = {
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