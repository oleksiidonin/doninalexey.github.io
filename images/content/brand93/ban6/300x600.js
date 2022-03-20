(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,66);


(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.glasses = function() {
	this.initialize(img.glasses);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,167);


(lib.i1 = function() {
	this.initialize(img.i1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,124);


(lib.i2 = function() {
	this.initialize(img.i2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,141);


(lib.i3 = function() {
	this.initialize(img.i3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,158);


(lib.i4 = function() {
	this.initialize(img.i4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,132);


(lib.i5 = function() {
	this.initialize(img.i5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,97);


(lib.i6 = function() {
	this.initialize(img.i6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,158);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,218);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,171);


(lib.light1 = function() {
	this.initialize(img.light1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.logoFIFA = function() {
	this.initialize(img.logoFIFA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,104);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-105,-33.8,210,67.6), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-105,-31.1,210,62.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-105,-18.4,210,36.9), null);


(lib.s26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08049").s().p("AikDRIgFAAIgEgBIgNgGIhGgxIgYgVIgGgHIAIAHIgJgIIgCgDIANAKIgNgLIAYAUQgNgMAFADQAEABASANIgIgGIAHAEIgIgHIAXAQQAEACgLgIQgMgIACAAIASAOQgFgFABAAQABgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgKgLQgBgDAPAKQAHADAUAPIgNgLIA3AfIAFACIAAAAIACgBIAAgBIADgIIAJhIQADgbAEgSIAEgNIALgbIACgEIALgOIAAgCIACAAIAJACIADAAIAOAEIALAEIANAIIArAiIAJAFIAJADQADABADgBIAHgCIAGgFQAGgEAGgIIAJgNIALgSQAKgRAYg0QAVgtASgbQAPgUAOgMIAIgHIAEgDIAOgJIAZgMIARgEIARgCIALAAIASACIALADIgCAAIABABIANAGQABABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgTgHIgOgDIgNAAQgQABgJAEIgJADIgLAHIgDADIgDAEIgDACIgIAFQgNAJgFAFQABgBAAAAQABAAAAABQAAAAgBABQAAABgBABIgJALQgMATADAAQgKAOgJAOIggBHQgOAfgIAPQgGAMgHALIgQAVIgLAJQgGAFgIADQgIACgHAAQgGABgJgDQgGgBgHgEIgMgHIgggZIgCgBIgEgDIgOgJIgJgEIAAABIAAAAIAAABIgBABIAAABIgBABIgEAKIgHAZQgEAOgDASIABABQgBAPgEAaIABACIABAAIgGAjIgCAJIgDAHIgCADIgDAEQgHAJgKACIgIABIgCAAg");
	this.shape.setTransform(-0.5,0.4,1.02,1.02,-96.1,0,0,-0.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s26, new cjs.Rectangle(-23.4,-27.7,46.9,55.5), null);


(lib.s25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50B6E0").s().p("AgIAIIgigDIAdgQIgHgjIAZAbIAegMIgRAcIAZAcIgfgKIgJAgg");
	this.shape.setTransform(-0.1,0.2,1.02,1.02,-96.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s25, new cjs.Rectangle(-4.7,-4.4,9.4,8.8), null);


(lib.s23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4CB61").s().p("AgHAQIgegDIATgQIgKgpIAaAfIAdgQIgNAdIAYAkIgegSIgSAbg");
	this.shape.setTransform(-0.1,0,1.02,1.02,-96.1,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s23, new cjs.Rectangle(-4.4,-4,8.9,8.1), null);


(lib.s22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2CE61").s().p("AgGAPIgUAEIAKgSIgJgRIATAEIANgQIACAUIASAIIgSAJIgDATg");
	this.shape.setTransform(-0.4,0.1,1.02,1.02,-96.1,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s22, new cjs.Rectangle(-2.9,-2.8,5.8,5.6), null);


(lib.s21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50B6E0").s().p("AgGALIgbACIAUgSIgLgcIAZASIATgQIgGAaIAUASIgYgBIgCAWg");
	this.shape.setTransform(-0.3,0.1,1.02,1.02,-96.1,0,0,0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s21, new cjs.Rectangle(-3.4,-3.4,6.9,6.8), null);


(lib.s20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4CB61").s().p("AgQANIgvgGIAtgUIgCgqIAbAhIAugSIgZAiIAkAXIg2gCIgRApg");
	this.shape.setTransform(-0.2,0.2,1.02,1.02,-96.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s20, new cjs.Rectangle(-5.6,-6.5,11.3,13.1), null);


(lib.s19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50B6E0").s().p("AgiAEIBAgmIAFBFg");
	this.shape.setTransform(-0.3,0.1,1.02,1.02,-96.1,0,0,0.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s19, new cjs.Rectangle(-3.5,-3.7,7,7.4), null);


(lib.s18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4CB61").s().p("AgMAhIg9AhIAghCIgxg5IBJAVIAlg5IAABJIBHAaIg9ARIARBHg");
	this.shape.setTransform(-0.2,-0.1,0.683,0.683,0,0,0,-0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s18, new cjs.Rectangle(-6.2,-6.4,12.5,12.9), null);


(lib.s17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4CB61").s().p("AgeAlQgNgNgBgVQgBgVANgOQANgOAUgBQAPgBAOAQQAOARABATQACAVgOAMQgLAKgUABIgEAAQgPAAgNgLg");
	this.shape.setTransform(0,0,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s17, new cjs.Rectangle(-3,-3.3,6.2,6.6), null);


(lib.s16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA6A9E").s().p("AgeAlQgNgNgBgVQgBgVANgOQANgOAUgBQAPgBAOAQQAOARABATQACAVgOAMQgLAKgUABIgEAAQgPAAgNgLg");
	this.shape.setTransform(0,0,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s16, new cjs.Rectangle(-3,-3.2,6.2,6.6), null);


(lib.s15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50B6E0").s().p("AgxA8QgWgWgBghQgCgjAVgXQAVgXAhgCQAZAAAWAaQAXAbACAfQAEAjgXATQgSAPghAEIgGAAQgaAAgUgTg");
	this.shape.setTransform(0,0,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s15, new cjs.Rectangle(-5,-5.3,10.1,10.8), null);


(lib.s14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4CB61").s().p("AkKD0IgLgHQgFgrgBguQAAgeAVgNQALgIATADIBVANQAOACADgEQABgCAAgGIgCgsQgBgQAJgKQALgMAWAAIAwAAIgDg2QgCgQAMgLQAMgKAQADIBZASQgLgpgHguIgDgTIASAGQApAMAxAJQgQgxgegmIgHgJIAOgHQAUgIAYgCQAOgCAdAAQAhABASgEIAMAKIABABIADADQgbAIgvAAQgsgBgTAGQAgAsAOA2IAEARIgSgCQgzgIgqgMQAHAsAMApIAGASIh/gaIgHgBIgCABIgBAJIAEBQIhLgBQgLABgCACQgCACAAAJIACArQABAMgGAJQgNAUgcgGIhVgMQgKgCgFADQgHAEAAARQAAAwAHA4IAAACg");
	this.shape.setTransform(-0.2,-0.1,0.683,0.683,0,0,0,-0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s14, new cjs.Rectangle(-19.3,-16.8,38.8,33.8), null);


(lib.s13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdDGQgBgCAAgFIgBgHQgBgRgIgbIgNgqIgFgPQgCgIAAgGQgDgHgEgUIgeiFQgIg+gBgcQACgEgDgGIAAACIAAgDIAAgFQACgCACAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIADAEIAHAKIAMA/IAAAIIAHAlIARBOIADALIAMAxIATA4IAEAQIAFASQACALAAAJIgCATIgDADQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgIADIgCAAQgDAAgCgCg");
	this.shape.setTransform(-0.2,-0.2,0.683,0.683,0,0,0,-0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s13, new cjs.Rectangle(-3.4,-13.6,6.9,27.4), null);


(lib.s12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4CB61").s().p("Ag/AkIAOg+IAEhEIA3BtIBMj1IgbDJIgPBBIgIBCIg9hFIgRBBIgaBBIgRBEg");
	this.shape.setTransform(-0.3,-0.2,0.683,0.683,0,0,0,-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s12, new cjs.Rectangle(-5.8,-15.7,11.8,31.5), null);


(lib.s11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiDCbQgDgDABgEIAEgGIAFgEQANgMAQgWIAaglIAIgNQAFgHAFgEQAFgKALgNIA2hEIAhgkQAwgxARgOQAFgCACgFIgBABQgBAAAAAAQAAAAAAAAQABgBAAAAQABAAABgBQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAEACQABABAAAAQAAABAAABQABAAAAABQAAAAAAABIgCAEIgDAMIgqAwIgHAFQgDAGgIAIIgNAOIg0A+IgFAJIgfAoIghAxIgKANIgMAPQgHAJgGAFIgJAFQgFAFgDAAIgEAAIgEABIgHgEg");
	this.shape.setTransform(-0.2,-0.1,0.683,0.683,0,0,0,-0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s11, new cjs.Rectangle(-9.2,-10.8,18.4,21.7), null);


(lib.s10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiWD9QgEgBgBABIgLgJQgGgFABgGQABgFAEgEIAHgHQARgSAUglIAfg7IAKgVQAGgMAGgFQAGgNAPgYIAhg2QATghAPgVQAZglASgWQA3hFAegcQAHgDACgHIgBACQgBgBAAAAQAAAAABgBQAAAAABgBQABAAABgBIAEgFQAFACACADQAEAEgBADIgBAIIgDAUIg2BMQgEAGgEADQgEAJgKANIgRAVIhBBkIgJAOQgKAQgbAwQgMAUgcA7QgFAFgIAQIgOAYQgIAOgKAIIgMAHQgIAIgDAAIgGgBg");
	this.shape.setTransform(-0.2,-0.2,0.683,0.683,0,0,0,-0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s10, new cjs.Rectangle(-11.7,-17.3,23.5,34.7), null);


(lib.s9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50B6E0").s().p("AgjhBIBeBeIh1Alg");
	this.shape.setTransform(0,0,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s9, new cjs.Rectangle(-4,-4.5,8.1,9), null);


(lib.s8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96CBD0").s().p("AgXhIIBwCPIixACg");
	this.shape.setTransform(0,0,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s8, new cjs.Rectangle(-6,-5,12.1,10), null);


(lib.s7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50B6E0").s().p("AgjhBIBeBeIh1Alg");
	this.shape.setTransform(0,0,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s7, new cjs.Rectangle(-4,-4.5,8.1,9.1), null);


(lib.s6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA6A9E").s().p("AgJAYIgrAXIAXgvIgjgpIA0AQIAagpIAAA0IAzASIgsAMIAMAzg");
	this.shape.setTransform(-0.2,-0.2,0.683,0.683,0,0,0,-0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s6, new cjs.Rectangle(-4.5,-4.6,9,9.2), null);


(lib.s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2CE61").s().p("Ag4B9QARhJABg0QACgygPhMIBfACQAOBLgBAyQgBAzgSBKg");
	this.shape.setTransform(-0.3,0.1,0.56,0.56,158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s5, new cjs.Rectangle(-4.9,-7.5,10,15.1), null);


(lib.s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4CB61").s().p("AhLAEQA9gyBZgcQgqBCAEBTg");
	this.shape.setTransform(-0.2,-1.2,0.56,0.56,158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s4, new cjs.Rectangle(-3.6,-4.3,7.3,8.6), null);


(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA6A9E").s().p("AhPACQANgoARgqQAoBnBZA6QhdgXhCg4g");
	this.shape.setTransform(0.8,-0.2,0.56,0.56,158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s3, new cjs.Rectangle(-5.1,-3,10.2,6), null);


(lib.s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08049").s().p("AguhGQBNAuBABXQhbgYhiAgg");
	this.shape.setTransform(1.1,1.4,0.56,0.56,158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s2, new cjs.Rectangle(-5.1,-4.2,10.2,8.4), null);


(lib.s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50B6E0").s().p("ABGAaQg8AEgmgFQgygGgmgmIgdglQAuAlAxABQAcAAA7gEQAqADAeASQAPAIAHAJIAPApQgcgegwgBg");
	this.shape.setTransform(0,-0.2,0.56,0.56,158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s1, new cjs.Rectangle(-8.7,-2.3,17.6,4.7), null);


(lib.logoFIFA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACEAyQAAgGAGgDIAFgCQgIgBABgIQAAgEADgCQADgEAGAAIABAAQAGAAADAEQAEADAAADQAAAIgIABIAGACQAFADABAGQgBALgRAAQgQAAAAgLgACOAeQABAIAFAAIAAADQgHAAAAAJQAAAEABABQACADAEAAQAFAAACgDQACgBAAgEQgBgHgGgCIAAgDQAFgBAAgHQAAgGgHAAQgFAAgBAGgAgKA8QgFgEAKgRQAFgLAHgHIAHAAQAFATAHAOIADAGIgIAAIgCgFIgGgNIgGgQIgGAMQgFAMACADQACABAEgBQAEgCAEgDIACAEQgNAJgGAAIgFgBgABLAlQADgRAPAAQAPAAADARQAFAXgXABQgWgBAEgXgABUAlQgDAUAMgBQALABgBgUQgBgNgJAAQgIAAgBANgAg7A8IgGgDIACgDIAFACIAKABQAEAAACgCQAEgCgDgFIgFgDIgBAAIgLgGQgHgFAEgIQACgFAKgBQAJAAAGAEIgDADQgFgDgHAAQgEAAgCACQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIABADIAEACIANAFQAKAFgCAIQgCAJgOAAIgMgBgAhfA8IgGgDIACgDIAGACIAJABQAEAAACgCQAFgDgDgEIgGgDIAAAAIgMgGQgDgDgBgDQAAgEABgDQADgFAJgBQAKAAAFAEIgCADQgGgDgHAAIgFACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAIABADIADACIAOAFQAJAFgCAIQgCAJgOAAIgMgBgAiHA4QgEgEAAgHIACgTIAAgFIAIAAIAAAEQgCANAAAJQAAAEACADQADADAFAAQAFAAADgDQACgDAAgEIgCgWIAAgEIAHAAIABAFIABAIIABALQAAAHgFAEQgEAFgJAAQgJAAgFgFgAgZA8IAAgnIAHAAIAAAngAB3A8IAAgeQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBAAgBAAIgBAAIAAgCIAHgBIACgDIAEAAIAAAngAAmA8IAAgDQATgNADgJQACgEgDgEQgDgDgGABQgEABgCAEQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIgDABIgBgCQgBgEACgDQADgGAJgBQAKAAAEAFQAIAIgIAKQgIAHgLAFIAXAAIAAAFgAiXA8IgKgMIgIAEIAAgHQARgJAAgFQAAgGgJAAIgKAAIAAAjIgIAAIAAgnIASAAQAIAAAEACQAGACAAAGQAAAGgMAHIANAQgACyAWIgBgJIgDAJIgBAAIgEgJIAAAJIgCAAIABgLIACAAIAEAJIADgJIACAAIABALgAChAWIAAgKIgDAAIAAgBIAIAAIAAABIgDAAIAAAKgABZAAIAAgOIAGAAIAAAOQAAAEAEAAQAEAAAAgEIAAgOIAHAAIAAAOQAAAJgLAAQgKAAAAgJgABGAGQgFgEABgEQAAgNANAAIAHACIAAAFQgDgCgEAAQgHAAAAAIQAAAGAIAAIAGgCIAAAGIgHABQgGAAgDgDgAghgCQAAgNALAAQAMAAAAANQAAALgMAAQgLAAAAgLgAgbgCQAAAGAFAAQAGAAAAgGQAAgIgGAAQgFAAAAAIgAhRAJIgBgEIgIAAIgBAEIgGAAIAIgXIAHAAIAJAXgAhYAAIAFAAIgCgIgAhwAJIAAgXIASAAIgBAFIgJAAIAAAEIAHAAIgCAFIgFAAIAAAJgAh8AJIAAgXIAHAAIAAAXgAiRAJIAAgXIASAAIgBAFIgJAAIAAAEIAHAAIgCAFIgFAAIAAAJgABxAIIAAgWIAHAAQAKAAABAHQAAAHgKAAIgCAAIAAAIgAB3gDIACAAQADgBAAgDQAAgDgDAAIgCAAgAAjAIIAAgWIAIAAQAOAAABAMQgBAKgOAAgAApADIACAAQAIAAAAgFQAAgIgIABIgCAAgAAPAIIAAgWIAHAAIAAARIAJAAIAAAFgAAGAIIgCgEQgCgEgCAAIgBAAIAAAIIgGAAIAAgWIALAAQAHAAAAAGQAAAFgFABIAEAEIACAGgAgBgFIACAAQABAAAAAAQABAAABAAQAAAAAAgBQAAAAAAgBQAAgDgDAAIgCAAgAgwAIIgDgRIgDARIgIAAIgFgWIAGAAIADAQIADgQIAIAAIAEAQIADgQIAGAAIgGAWgAAvgmIAAgIIACgBIAAAEIAJAAIAAABIgJAAIAAAEgAAvgwIAAgDIAKgDIgKgDIAAgDIALAAIAAABIgJABIAJAEIAAABIgJADIAJABIAAABg");
	this.shape.setTransform(0,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.logoFIFA();
	this.instance.parent = this;
	this.instance.setTransform(-18,-19,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoFIFA_1, new cjs.Rectangle(-18,-19,36,37.5), null);


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


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-112,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-112,-86,223,171), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-102,-87,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-102,-87,203.2,174.4), null);


(lib.i6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.i6();
	this.instance.parent = this;
	this.instance.setTransform(-68,-63,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.i6_1, new cjs.Rectangle(-68,-63,136,126.4), null);


(lib.i5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.i5();
	this.instance.parent = this;
	this.instance.setTransform(-68,-39,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.i5_1, new cjs.Rectangle(-68,-39,136,77.6), null);


(lib.i4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.i4();
	this.instance.parent = this;
	this.instance.setTransform(-70,-53,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.i4_1, new cjs.Rectangle(-70,-53,139.2,105.6), null);


(lib.i3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.i3();
	this.instance.parent = this;
	this.instance.setTransform(-67,-63,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.i3_1, new cjs.Rectangle(-67,-63,134.4,126.4), null);


(lib.i2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.i2();
	this.instance.parent = this;
	this.instance.setTransform(-76,-56,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.i2_1, new cjs.Rectangle(-76,-56,152.8,112.8), null);


(lib.i1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.i1();
	this.instance.parent = this;
	this.instance.setTransform(-68,-50,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.i1_1, new cjs.Rectangle(-68,-50,136,99.2), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF8F5").s().p("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");
	this.shape.setTransform(-9.3,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7B449").s().p("AHMDNIAFgWQABgQgNgSQgfgnhwg6Ig3gaQh6g3htgsQhCgbgSgMIgVgVQgMgNgRgIQgxgaiagbQgKAngXA8QgwB3hHBsICYlGQAcADAmAHQBMAMAuARQAbAKAZAYQAaAZAeAMIBrAsQBlArBPAlIAoAUQBRAoAcAWQA/AwgVAuIgBAFIAAgDg");
	this.shape_1.setTransform(-9.7,-9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6C44E").s().p("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");
	this.shape_2.setTransform(-9.8,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-56.3,-30.3,93.3,58.6), null);


(lib.glasses_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.glasses();
	this.instance.parent = this;
	this.instance.setTransform(-110,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glasses_1, new cjs.Rectangle(-110,-84,219,167), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-240,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-120,-240,240,480), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/rMUQMMkaNBk5QbAqKLKlKIAAYng");
	this.shape.setTransform(-30,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-232.8,-67.8,405.7,157.6), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#194926").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-120,-200,240,400), null);


(lib.ball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(-29,-26,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_1, new cjs.Rectangle(-29,-26,57.6,52.8), null);


(lib.s24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.s21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.s24, new cjs.Rectangle(-3.4,-3.4,6.9,6.8), null);


(lib.konfeti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s14
	this.instance = new lib.s14();
	this.instance.parent = this;
	this.instance.setTransform(5.3,123.2,0.02,0.02,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,x:147.2,y:-58.7},10,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// s13
	this.instance_1 = new lib.s13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.8,123.3,0.02,0.02,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:-65.3,y:-259.2},10,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// s12
	this.instance_2 = new lib.s12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.1,123,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:94.3,y:-261.6},10,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// s11
	this.instance_3 = new lib.s11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.7,123.1,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:135.2,y:-106.6},10,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// s10
	this.instance_4 = new lib.s10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.5,123,0.02,0.02,0,0,0,2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0,scaleX:1.2,scaleY:1.2,x:138.2,y:-135.7},10,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// s26
	this.instance_5 = new lib.s26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.3,123.1,0.02,0.02,0,0,0,0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:-155.7,y:-64.1},10,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// s18
	this.instance_6 = new lib.s18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.6,123.2,0.02,0.02,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-0.1,regY:0,scaleX:1.2,scaleY:1.2,rotation:-45,x:-11.2,y:-23.1},10,cjs.Ease.get(1)).to({regY:-0.1,rotation:-92.5,x:-23.1,y:58},19).to({regY:0,rotation:-105,x:-26.2,y:79.4,alpha:0},5).wait(1));

	// s17
	this.instance_7 = new lib.s17();
	this.instance_7.parent = this;
	this.instance_7.setTransform(5.7,123.6,0.02,0.02,0,0,0,2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.1,scaleX:1.2,scaleY:1.2,x:106.7,y:-7.4},10,cjs.Ease.get(1)).to({regX:0.2,x:106.9,y:68.3},19).to({regX:0.1,x:106.7,y:88.3,alpha:0},5).wait(1));

	// s16
	this.instance_8 = new lib.s16();
	this.instance_8.parent = this;
	this.instance_8.setTransform(5.7,123.4,0.02,0.02,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:106.7,y:-38.6},10,cjs.Ease.get(1)).to({regX:0.2,x:106.9,y:80.1},19).to({regX:0.1,x:106.7,y:111.4,alpha:0},5).wait(1));

	// s15
	this.instance_9 = new lib.s15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(5.5,123.4,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,x:70,y:-38.8},10,cjs.Ease.get(1)).to({regX:0.2,x:70.2,y:80},19).to({regX:0.1,x:70,y:111.2,alpha:0},5).wait(1));

	// s9
	this.instance_10 = new lib.s9();
	this.instance_10.parent = this;
	this.instance_10.setTransform(5.1,122.7,0.02,0.02,0,0,0,0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,rotation:-60,x:80.9,y:-60},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:35.1,x:80.8,y:58.9},19).to({scaleX:1.2,scaleY:1.2,rotation:60,y:90.2,alpha:0},5).wait(1));

	// s8
	this.instance_11 = new lib.s8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(5.1,122.1,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,rotation:-45,x:93,y:-76.9},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:-80.7,y:75.2},19).to({scaleX:1.2,scaleY:1.2,rotation:-90,x:92.9,y:115.3,alpha:0},5).wait(1));

	// s7
	this.instance_12 = new lib.s7();
	this.instance_12.parent = this;
	this.instance_12.setTransform(4.6,122.2,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:0.1,regY:-0.2,scaleX:1.2,scaleY:1.2,rotation:45,x:59.3,y:-74.3},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:44.9,x:47.8,y:61.7},19).to({regY:-0.1,scaleX:1.2,scaleY:1.2,rotation:45,x:44.8,y:97.6,alpha:0},5).wait(1));

	// s6
	this.instance_13 = new lib.s6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(3.6,122.6,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:-0.1,regY:0.1,scaleX:1.2,scaleY:1.2,rotation:-15,x:-13.1,y:-79.7},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:103.8,x:-7.7,y:52.4},19).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,rotation:135,x:-6.3,y:87,alpha:0},5).wait(1));

	// s25
	this.instance_14 = new lib.s25();
	this.instance_14.parent = this;
	this.instance_14.setTransform(2.2,122.7,0.02,0.02,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:-0.1,regY:0.1,scaleX:1.2,scaleY:1.2,rotation:-30,x:-93,y:-75.9},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:53.2,x:-107.6,y:73.2},19).to({scaleX:1.2,scaleY:1.2,rotation:75,x:-111.5,y:112.6,alpha:0},5).wait(1));

	// s24
	this.instance_15 = new lib.s24();
	this.instance_15.parent = this;
	this.instance_15.setTransform(2.7,122.7,0.02,0.02,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:-0.1,regY:0.1,scaleX:1.2,scaleY:1.2,rotation:75,x:-65.1,y:-84.6},10,cjs.Ease.get(1)).to({regX:-0.2,scaleX:1.2,scaleY:1.2,rotation:-67.7,x:-65.2,y:61.3},19).to({regX:-0.1,scaleX:1.2,scaleY:1.2,rotation:-105,y:99.6,alpha:0},5).wait(1));

	// s23
	this.instance_16 = new lib.s23();
	this.instance_16.parent = this;
	this.instance_16.setTransform(2.4,122.8,0.02,0.02,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:-0.1,regY:0.2,scaleX:1.2,scaleY:1.2,rotation:45,x:-93.4,y:-47.2},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:-26.3,x:-107.7,y:50.9},19).to({regY:0.1,scaleX:1.2,scaleY:1.2,rotation:-45,x:-111.4,y:76.6,alpha:0},5).wait(1));

	// s22
	this.instance_17 = new lib.s22();
	this.instance_17.parent = this;
	this.instance_17.setTransform(2.5,122.9,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:-0.1,regY:0.1,scaleX:1.2,scaleY:1.2,rotation:60,x:-84.5,y:-18.6},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:83.9,x:-75.1,y:61.5},19).to({scaleX:1.2,scaleY:1.2,rotation:90,x:-72.7,y:82.8,alpha:0},5).wait(1));

	// s20
	this.instance_18 = new lib.s20();
	this.instance_18.parent = this;
	this.instance_18.setTransform(2.9,122.9,0.02,0.02,0,0,0,2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:-0.1,regY:0.1,scaleX:1.2,scaleY:1.2,rotation:60,x:-62.4,y:-49.8},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:-46.9,y:87.2},19).to({regX:0,regY:0,scaleX:1.2,scaleY:1.2,rotation:-75,y:123,alpha:0},5).wait(1));

	// s19
	this.instance_19 = new lib.s19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(3,123.3,0.02,0.02,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:-0.1,regY:0.1,scaleX:1.2,scaleY:1.2,rotation:-60,x:-45.8,y:-15.6},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:70.7,x:-45.6,y:96.5},19).to({regX:0,scaleX:1.2,scaleY:1.2,rotation:105,y:126.1,alpha:0},5).wait(1));

	// s5
	this.instance_20 = new lib.s5();
	this.instance_20.parent = this;
	this.instance_20.setTransform(3.9,122.4,0.02,0.02,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,rotation:-75,x:7,y:-80},10,cjs.Ease.get(1)).to({rotation:-87,x:14,y:67.2},19).to({rotation:-90,x:16,y:106,alpha:0},5).wait(1));

	// s4
	this.instance_21 = new lib.s4();
	this.instance_21.parent = this;
	this.instance_21.setTransform(4.1,122.2,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:0.1,regY:-0.2,scaleX:1.2,scaleY:1.2,rotation:60,x:17.3,y:-40.3},10,cjs.Ease.get(1)).to({regY:-0.1,scaleX:1.2,scaleY:1.2,rotation:12.3,x:10.5,y:48.8},19).to({scaleX:1.2,scaleY:1.2,rotation:0,x:8.8,y:72.3,alpha:0},5).wait(1));

	// s3
	this.instance_22 = new lib.s3();
	this.instance_22.parent = this;
	this.instance_22.setTransform(3.8,122,0.02,0.02,0,0,0,0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regX:0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,rotation:-60,x:-31.2,y:-62.1},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:-95.5,x:-26,y:71.7},19).to({scaleX:1.2,scaleY:1.2,rotation:-105,x:-24.6,y:107,alpha:0},5).wait(1));

	// s2
	this.instance_23 = new lib.s2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(4.1,121.8,0.02,0.02,0,0,0,2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({regX:0.1,regY:-0.2,scaleX:1.2,scaleY:1.2,rotation:-45,x:32.1,y:-59.8},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:38.1,x:52.6,y:54.2},19).to({scaleX:1.2,scaleY:1.2,rotation:60,x:57.9,y:84.2,alpha:0},5).wait(1));

	// s1
	this.instance_24 = new lib.s1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(4.2,121.5,0.02,0.02,0,0,0,2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({regX:0.1,regY:-0.1,scaleX:1.2,scaleY:1.2,rotation:45,x:36.5,y:-91.7},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,rotation:-61.9,y:37.9},19).to({scaleX:1.2,scaleY:1.2,rotation:-90,x:36.7,y:72,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,121.5,3.9,2.1);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_263 = function() {
		if(num >= 2){
			this.stop();
		}else{
			num++;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(263).call(this.frame_263).wait(17));

	// light
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-81,71.7,0.3,0.3,0,0,0,-0.1,0.1);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({_off:false},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:143.9,x:-80.8,y:65.2,alpha:0.25},0).wait(1).to({regX:-0.3,regY:0.2,scaleX:0.44,scaleY:0.44,rotation:287.8,x:-80.7,y:58.9,alpha:0.5},0).wait(1).to({regX:-0.2,scaleX:0.51,scaleY:0.51,rotation:432,x:-80.6,y:52.2,alpha:0.75},0).wait(1).to({regY:0.1,scaleX:0.58,scaleY:0.58,rotation:575.9,x:-80.1,y:45.8,alpha:1},0).wait(1).to({regY:-0.1,scaleX:0.65,scaleY:0.65,rotation:569.8,x:-79.9,y:39.4},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.72,scaleY:0.72,rotation:563.8,x:-79.3,y:32.9},0).wait(1).to({regX:-0.2,regY:0,scaleX:0.79,scaleY:0.79,rotation:557.8,x:-78.7,y:26.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:551.8,x:-78,y:20.1},0).wait(1).to({regX:-0.1,scaleX:0.93,scaleY:0.93,rotation:545.8,x:-77.2,y:13.6},0).wait(1).to({regY:0.1,scaleX:1,scaleY:1,rotation:540,x:-76.1,y:7.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:522,x:-75,y:0.9},0).wait(1).to({regX:-0.2,scaleX:0.86,scaleY:0.86,rotation:503.9,x:-73.7,y:-5.3},0).wait(1).to({regX:-0.1,scaleX:0.79,scaleY:0.79,rotation:485.9,x:-72.3,y:-11.6},0).wait(1).to({regY:0.2,scaleX:0.72,scaleY:0.72,rotation:467.8,x:-70.9,y:-17.9},0).wait(1).to({regY:0.1,scaleX:0.65,scaleY:0.65,rotation:450,x:-69,y:-24.1},0).wait(1).to({regX:-0.2,regY:0.2,scaleX:0.58,scaleY:0.58,rotation:432,x:-67.2,y:-30.4},0).wait(1).to({regX:-0.3,scaleX:0.51,scaleY:0.51,rotation:413.9,x:-65.2,y:-36.5,alpha:0.75},0).wait(1).to({regX:-0.5,regY:0.1,scaleX:0.44,scaleY:0.44,rotation:395.9,x:-62.9,y:-42.5,alpha:0.5},0).wait(1).to({regX:-0.4,regY:0.2,scaleX:0.37,scaleY:0.37,rotation:377.8,x:-60.2,y:-48.3,alpha:0.25},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.3,scaleY:0.3,rotation:360,x:-57.1,y:-54,alpha:0},0).to({_off:true},1).wait(20));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-79.9,-216.2,0.212,0.212,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(214).to({regX:0,scaleX:0.22,scaleY:0.22,x:-79.4,y:-215},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-77.8,y:-211.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-75.3,y:-205},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-71.8,y:-196.5},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-67.3,y:-185.7},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-62,y:-172.9},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-56,y:-158.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-49.5,y:-142.4},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-42.5,y:-125.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-35.4,y:-108.2},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-28.2,y:-90.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-21.3,y:-74},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-14.7,y:-58.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-8.7,y:-43.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-3.4,y:-30.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1.1,y:-19.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:4.6,y:-11.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:7.2,y:-5.1},0).wait(1).to({scaleX:1,scaleY:1,x:8.7,y:-1.3},0).wait(1).to({scaleX:1,scaleY:1,x:9,y:0},0).wait(31).to({regX:-0.2,scaleX:0.21,scaleY:0.21,x:-79.9,y:-216.2},15).wait(1));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-81.7,-216.1,0.217,0.119,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(214).to({regX:0,scaleX:0.22,scaleY:0.13,x:-81.2,y:-214.9},0).wait(1).to({scaleX:0.24,scaleY:0.14,x:-79.8,y:-211.2},0).wait(1).to({scaleX:0.26,scaleY:0.18,x:-77.5,y:-205},0).wait(1).to({scaleX:0.29,scaleY:0.22,x:-74.2,y:-196.4},0).wait(1).to({scaleX:0.33,scaleY:0.27,x:-70.1,y:-185.6},0).wait(1).to({scaleX:0.37,scaleY:0.34,x:-65.3,y:-172.8},0).wait(1).to({scaleX:0.43,scaleY:0.41,x:-59.8,y:-158.3},0).wait(1).to({scaleX:0.48,scaleY:0.49,x:-53.7,y:-142.4},0).wait(1).to({scaleX:0.55,scaleY:0.57,x:-47.3,y:-125.5},0).wait(1).to({scaleX:0.61,scaleY:0.66,x:-40.8,y:-108.2},0).wait(1).to({scaleX:0.67,scaleY:0.75,x:-34.2,y:-90.8},0).wait(1).to({scaleX:0.73,scaleY:0.83,x:-27.8,y:-74},0).wait(1).to({scaleX:0.79,scaleY:0.91,x:-21.8,y:-58},0).wait(1).to({scaleX:0.84,scaleY:0.98,x:-16.2,y:-43.5},0).wait(1).to({scaleX:0.89,scaleY:1.05,x:-11.4,y:-30.6},0).wait(1).to({scaleX:0.93,scaleY:1.1,x:-7.3,y:-19.8},0).wait(1).to({scaleX:0.96,scaleY:1.14,x:-4,y:-11.2},0).wait(1).to({scaleX:0.98,scaleY:1.18,x:-1.6,y:-5},0).wait(1).to({scaleX:1,scaleY:1.19,x:-0.2,y:-1.3},0).wait(1).to({scaleX:1,scaleY:1.2,x:0,y:0},0).wait(31).to({regX:-0.2,scaleX:0.22,scaleY:0.12,x:-81.7,y:-216.1},15).wait(1));

	// logoFIFA
	this.instance_3 = new lib.logoFIFA_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-30.7,-215.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(280));

	// t3
	this.instance_4 = new lib.t3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-235);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(153).to({_off:false},0).to({y:-94},10,cjs.Ease.get(1)).to({_off:true},70).wait(47));

	// i
	this.instance_5 = new lib.i3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-215,128.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.i2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(5,134.5);

	this.instance_7 = new lib.i1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(5,134.5);

	this.instance_8 = new lib.i4_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(5,138.5);

	this.instance_9 = new lib.i5_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(5,152);

	this.instance_10 = new lib.i6_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(5,133);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},138).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_10}]},10).to({state:[]},30).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(138).to({_off:false},0).wait(1).to({regX:0.2,regY:0.2,x:-212.5,y:128.7},0).wait(1).to({x:-205.8},0).wait(1).to({x:-194.7},0).wait(1).to({x:-179.6},0).wait(1).to({x:-161},0).wait(1).to({x:-139.7},0).wait(1).to({x:-116.7},0).wait(1).to({x:-93.1},0).wait(1).to({x:-70},0).wait(1).to({x:-48.7},0).wait(1).to({x:-30.1},0).wait(1).to({x:-14.9},0).wait(1).to({x:-3.8},0).wait(1).to({x:2.9},0).wait(1).to({regX:0,regY:0,x:5,y:128.5},0).to({_off:true},10).wait(117));

	// img1
	this.instance_11 = new lib.img1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-220.5,71);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(138).to({_off:false},0).wait(1).to({regX:-0.4,regY:0.2,x:-218.6,y:71.2},0).wait(1).to({x:-211.9},0).wait(1).to({x:-200.8},0).wait(1).to({x:-185.7},0).wait(1).to({x:-167.1},0).wait(1).to({x:-145.8},0).wait(1).to({x:-122.8},0).wait(1).to({x:-99.2},0).wait(1).to({x:-76.1},0).wait(1).to({x:-54.8},0).wait(1).to({x:-36.2},0).wait(1).to({x:-21},0).wait(1).to({x:-9.9},0).wait(1).to({x:-3.1},0).wait(1).to({regX:0,regY:0,x:-0.5,y:71},0).to({_off:true},80).wait(47));

	// hand
	this.instance_12 = new lib.hand();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-168,-52.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(98).to({_off:false},0).to({x:-82,y:-19.5},10,cjs.Ease.get(1)).wait(20).to({x:-168,y:-52.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(141));

	// ball
	this.instance_13 = new lib.ball_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,194.5,1,1,0,45,-135);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(84).to({_off:false},0).to({skewX:-45,skewY:-225,x:110.5,y:184.5},10,cjs.Ease.get(1)).wait(34).to({skewX:45,skewY:-135,x:150,y:194.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(141));

	// t2
	this.instance_14 = new lib.t2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,-94,0.02,0.02,0,0,0,0,-2.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(84).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(45).to({x:2.5},0).wait(1).to({x:10},0).wait(1).to({x:22.3},0).wait(1).to({x:39},0).wait(1).to({x:59.6},0).wait(1).to({x:83.3},0).wait(1).to({x:108.8},0).wait(1).to({x:135},0).wait(1).to({x:160.5},0).wait(1).to({x:184.2},0).wait(1).to({x:204.8},0).wait(1).to({x:221.6},0).wait(1).to({x:234},0).wait(1).to({x:241.5},0).wait(1).to({x:244},0).to({_off:true},1).wait(126));

	// img2
	this.instance_15 = new lib.img2_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-240,105);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(69).to({_off:false},0).wait(1).to({regX:-0.5,regY:-0.5,x:-238.1,y:104.5},0).wait(1).to({x:-231},0).wait(1).to({x:-219.4},0).wait(1).to({x:-203.7},0).wait(1).to({x:-184.2},0).wait(1).to({x:-162},0).wait(1).to({x:-137.9},0).wait(1).to({x:-113.2},0).wait(1).to({x:-89.2},0).wait(1).to({x:-66.9},0).wait(1).to({x:-47.4},0).wait(1).to({x:-31.5},0).wait(1).to({x:-19.9},0).wait(1).to({x:-12.8},0).wait(1).to({regX:0,regY:0,x:-10,y:105},0).wait(55).to({regX:-0.5,regY:-0.5,x:-7.9,y:104.5},0).wait(1).to({x:-0.5},0).wait(1).to({x:11.8},0).wait(1).to({x:28.5},0).wait(1).to({x:49.1},0).wait(1).to({x:72.8},0).wait(1).to({x:98.3},0).wait(1).to({x:124.5},0).wait(1).to({x:150},0).wait(1).to({x:173.7},0).wait(1).to({x:194.3},0).wait(1).to({x:211.1},0).wait(1).to({x:223.5},0).wait(1).to({x:231},0).wait(1).to({regX:0,regY:0,x:234,y:105},0).to({_off:true},1).wait(126));

	// t1
	this.instance_16 = new lib.t1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,-94,0.02,0.02,0,0,0,0,-2.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},10).wait(45).to({x:4},0).wait(1).to({x:16},0).wait(1).to({x:35.7},0).wait(1).to({x:62.5},0).wait(1).to({x:95.5},0).wait(1).to({x:133.3},0).wait(1).to({x:174.2},0).wait(1).to({x:216.2},0).wait(1).to({x:257.1},0).wait(1).to({x:295},0).wait(1).to({x:328},0).wait(1).to({x:355},0).wait(1).to({x:374.7},0).wait(1).to({x:386.8},0).wait(1).to({x:390.8},0).to({_off:true},1).wait(195));

	// glassrs
	this.instance_17 = new lib.glasses_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0.5,179.6,0.01,0.01,0,0,0,0,5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,x:0,y:139.6},10,cjs.Ease.get(1)).wait(50).to({regX:-0.5,regY:-0.5,x:3.5,y:139.1},0).wait(1).to({x:15.5},0).wait(1).to({x:35.2},0).wait(1).to({x:62},0).wait(1).to({x:95},0).wait(1).to({x:132.8},0).wait(1).to({x:173.7},0).wait(1).to({x:215.7},0).wait(1).to({x:256.6},0).wait(1).to({x:294.5},0).wait(1).to({x:327.5},0).wait(1).to({x:354.5},0).wait(1).to({x:374.2},0).wait(1).to({x:386.3},0).wait(1).to({regX:0,regY:0,x:390.8,y:139.6},0).to({_off:true},1).wait(195));

	// konfeti
	this.instance_18 = new lib.konfeti("synched",0,false);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-55.9,25.6,1,1,0,0,0,-55.9,0);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(35).to({_off:false},0).to({_off:true},35).wait(210));

	// konfeti
	this.instance_19 = new lib.konfeti("synched",0,false);
	this.instance_19.parent = this;
	this.instance_19.setTransform(64.1,25.6,1.17,1.17,0,0,180,-55.8,0);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(30).to({_off:false},0).to({_off:true},40).wait(210));

	// konfeti
	this.instance_20 = new lib.konfeti("synched",0,false);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-55.9,25.6,1,1,0,0,0,-55.9,0);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(25).to({_off:false},0).to({_off:true},45).wait(210));

	// bg2
	this.instance_21 = new lib.bg2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-42.4,308.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:-52.4,y:157.4},10,cjs.Ease.get(1)).wait(60).to({regX:-30,regY:10.9,x:-78.4,y:168.3},0).wait(1).to({x:-66.4},0).wait(1).to({x:-46.7},0).wait(1).to({x:-19.9},0).wait(1).to({x:13.1},0).wait(1).to({x:50.9},0).wait(1).to({x:91.8},0).wait(1).to({x:133.7},0).wait(1).to({x:174.6},0).wait(1).to({x:212.5},0).wait(1).to({x:245.6},0).wait(1).to({x:272.5},0).wait(1).to({x:292.3},0).wait(1).to({x:304.3},0).wait(1).to({regX:0,regY:0,x:338.4,y:157.4},0).to({_off:true},1).wait(195));

	// bgImg1
	this.instance_22 = new lib.bgImg1_1();
	this.instance_22.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(280));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.2,-240,405.7,638.3);


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
p.nominalBounds = new cjs.Rectangle(-44.1,299,507.1,798.9);
// library properties:
lib.properties = {
	id: 'B667C42154D343B4BD8AA02988ADC3FB',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ball.png", id:"ball"},
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/glasses.png", id:"glasses"},
		{src:"images/i1.png", id:"i1"},
		{src:"images/i2.png", id:"i2"},
		{src:"images/i3.png", id:"i3"},
		{src:"images/i4.png", id:"i4"},
		{src:"images/i5.png", id:"i5"},
		{src:"images/i6.png", id:"i6"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/light1.png", id:"light1"},
		{src:"images/logoFIFA.png", id:"logoFIFA"}
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
an.compositions['B667C42154D343B4BD8AA02988ADC3FB'] = {
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