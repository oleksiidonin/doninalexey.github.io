(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,324);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,134);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,292);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,152);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,230);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,124);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,106);// helper functions:

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

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOCPIAAgEIADABIAEAAQAFAAADgDQADgDADgHIAFgNIgahCIAFAAIAXA9IAXg9IAFAAIgfBQQgCAIgFAEQgEAEgHABIgHgCgAtGCPIAAgEIAEABIADAAQAFAAADgDQAEgEACgGIAFgNIgZhCIAFAAIAXA9IAWg9IA1AAIAAAEIgWAAIAAA+IgFAAIAAg+IgXAAIgcBMQgDAIgEAEQgEAEgHABIgIgCgAopCPIAAhfIAEAAIABAOIAEgHQADgDAFgDQAFgCAHAAQAMAAAIAJQAHAJAAAQQAAARgIAIQgHAJgNAAQgLAAgEgDQgGgEgCgHIAAAqgAoeA7QgGAHAAAPIAAABQAAAPAGAHQAGAHAKABQALAAAGgJQAHgHAAgPQAAgdgXgBQgLAAgGAIgAlvCJIAAgXIg0AAIAAAXIgFAAIAAgbIAEAAQAJgMAEgPQAFgPAAgUIAfAAIAAA+IAJAAIAAAbgAmeBuIAmAAIAAg6IgWAAQgBAkgPAWgASnByIgBgDIABgEQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIABAEIgBADIgDABIgDgBgAQpBwQgGgFgCgHQgDgIAAgKIgXAAIAAAgIgFAAIAAhCIAFAAIAAAdIAXAAQAAgHADgIQADgGAFgFQAHgEAIAAQAJAAAGAEQAGAFADAIQACAJAAAJQAAAJgDAIQgCAIgGAEQgGAFgJgBQgKAAgFgDgAQsA4QgFADgCAHQgDAIAAAIQAAAHADAHQABAHAFAEQAGAFAHAAQAHAAAFgFQAFgEACgGQACgHAAgIQAAgKgCgGQgCgGgFgEQgEgFgIAAQgIAAgEAFgAOWBwQgFgFgDgHQgDgIAAgKIgXAAIAAAgIgFAAIAAhCIAFAAIAAAdIAXAAQABgJACgGQAEgHAFgEQAFgEAJAAQAKAAAFAEQAHAGACAHQADAJAAAJQAAAJgDAIQgDAHgGAFQgGAFgJgBQgJAAgGgDgAOZA4QgFAEgCAGQgCAGAAAKQAAAIACAGQACAIAFADQAFAFAHAAQAHAAAFgFQAFgEACgGQADgJAAgGQAAgIgDgIQgCgHgFgDQgEgFgIAAQgIAAgEAFgAJnBvQgFgEAAgJQAAgKAIgFQAIgFAQgBIAMAAIAAgGQAAgKgEgFQgEgEgIgBIgKABIgKAFIgCgFIALgDIALgCQAKAAAGAFQAFAGAAAMIAAAsIgEAAIgBgMIAAAAQgEAHgEADQgGAEgKgBQgJABgGgFgAKCBRQgNABgHAEQgHADAAAJQAAAGAEAEQAEADAIABQALgBAGgGQAGgGAAgMIAAgHgAFUBwQgHgFgDgIQgDgHAAgKQAAgRAIgJQAHgJAOAAQAKAAAGAEQAHAFADAIQADAIAAAKQAAAKgEAHQgDAIgGAFQgHADgJAAQgKAAgGgDgAFSA7QgGAHAAAQQAAANAGAIQAGAJAMAAQAIAAAFgFQAFgDADgHQADgIAAgHQAAgIgDgIQgCgGgFgEQgFgFgJAAQgMABgGAHgADTBwQgHgFgDgHQgDgIAAgKQAAgLAEgHQADgIAIgFQAHgEAKAAIAJABIAHACIgBAFIgIgDIgHgBQgJAAgGAFQgGAEgDAGQgDAHAAAJQAAAHACAIQADAGAGAEQAFAFAJAAIAJgBIAIgDIAAAFIgHABIgKABQgLAAgGgDgAgKBvQgGgEAAgJQAAgJAJgGQAHgFAPgBIAMAAIAAgGQAAgKgEgFQgEgEgIgBIgKABIgJAFIgBgFIAJgDIALgCQAKAAAGAFQAFAHAAALIAAAsIgEAAIgBgMQgDAGgFAEQgFAEgLgBQgJABgEgFgAAPBRQgMABgHAEQgHAEAAAIQAAAGAEAEQAEADAHABQAMgBAFgGQAGgGAAgMIAAgHgAlRBwQgHgFgDgIQgDgJAAgIQAAgQAIgKQAHgJAOAAQAKAAAGAEQAHAFADAIQADAIAAAKQAAAJgDAIQgDAIgHAFQgHADgJAAQgKAAgGgDgAlTA7QgGAJAAAOQAAANAGAIQAGAJAMAAQAIAAAFgFQAGgDACgHQADgGAAgJQAAgKgCgGQgDgGgFgEQgEgFgKAAQgMABgGAHgAnbBwQgGgEgEgJQgDgIAAgJQAAgQAIgKQAIgJAOAAQAJAAAHAEQAFAFAEAIQADAIAAAKQAAAIgDAJQgDAIgHAFQgHADgJAAQgKAAgGgDgAndA7QgGAIAAAPQAAANAGAIQAGAJAMAAQAIAAAGgFQAFgDADgHQACgIAAgHQAAgIgCgIQgCgGgGgEQgEgFgJAAQgMABgHAHgAu7BwQgGgEgEgJQgDgIAAgJQAAgQAIgKQAIgJAOAAQAJAAAHAEQAGAGADAHQADAIAAA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gAUdgjQAGgVABgKIAFAAIABACIgJAdgARFg3QgFgEAAgJQAAgKAIgFQAJgFAPAAIAMgCIAAgEQAAgLgEgFQgEgEgIAAIgKABIgKAEIgCgEIALgEIALgCQAKABAGAFQAFAFAAANIAAAsIgEAAIgBgNIAAAAQgDAHgFADQgGAEgKAAQgJAAgGgFgARghVQgMABgIAEQgHAEAAAIQAAAIAEACQAEAEAIAAQALAAAGgHQAGgGAAgLIAAgHgAMyg3QgGgDgEgJQgDgHAAgLQAAgQAIgJQAHgIAOgBQAKABAGAEQAHAFADAHQADAHAAAKQAAALgDAHQgEAJgGADQgGAFgKAAQgJAAgHgFgAMwhqQgGAHAAAOQAAAPAGAHQAGAIAMAAQAIABAFgEQAFgEADgGQADgIAAgJQAAgHgDgIQgCgHgFgEQgGgDgIAAQgLAAgHAIgAKxg2QgHgEgDgIQgDgIAAgKQAAgJAEgKQADgHAIgEQAGgFALAAIAJABIAHADIgBAEIgIgCIgHgBQgJAAgGADQgGAEgDAHQgDAHAAAJQAAAIACAHQADAGAGAFQAFAEAJgBIAJgBIAIgCIAAAEQgDADgEAAIgKABQgKAAgHgEgAEhg3QgFgCgFgKQgDgHAAgLQAAgQAIgJQAIgIAOgBQAKABAGAEQAGAFADAHQADAHAAAKQAAALgDAHQgDAIgHAEQgGAFgKAAQgJAAgHgFgAEghqQgHAHAAAOQAAAPAGAHQAFAIANAAQAJABAFgEQAFgEADgGQACgIAAgJQAAgHgCgIQgDgHgFgEQgFgDgIAAQgMAAgGAIgABSg3QgGgDgDgJQgEgIAAgKQAAgPAIgKQAIgIAOgBQAKABAGAEQAGAFADAHQADAHAAAKQAAALgDAHQgDAIgHAEQgGAFgKAAQgJAAgHgFgABRhqQgHAIAAANQAAAPAGAHQAGAIAMAAQAJABAFgEQAFgEADgGQACgGAAgLQAAgJgCgGQgDgHgEgEQgGgDgIAAQgMAAgGAIgAoNg2QgGgEgEgIQgDgHAAgLQAAgJADgJQADgHAGgFQAHgEAJgBQAKAAAEAFQAGAEACAHQADAGAAAJIAAAEIgwAAQgBANAHAJQAHAIAMgBIAKgBQAGAAAEgDIAAAFIgJADIgLABQgKAAgHgEgAnqhYQAAgLgFgIQgFgIgKABQgKAAgGAGQgGAIg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AAg9IgpA9IgGAAIAAhDIAFAAIAAA9IAog9IAGAAIAABDgAlegzIAAg9IgpA9IgGAAIAAhDIAFAAIAAA9IApg9IAFAAIAABDgAmhgzIAAghIgsAAIAAAhIgFAAIAAhDIAFAAIAAAeIAsAAIAAgeIAEAAIAABDgAovgzIAAgfIgLAGQgHACgGAAQgKAAgGgFQgFgGAAgKIAAgXIAEAAIAAAXQAAAJAFADQAFAFAIAAQAHAAAFgDIALgFIAAggIAFAAIAABDgAqsgzIAAghIgsAAIAAAhIgEAAIAAhDIAEAAIAAAeIAsAAIAAgeIAFAAIAABDgAsmgzIAAg9IgpA9IgFAAIAAhDIAEAAIAAA9IApg9IAGAAIAABDgAuvgzIAAg+IgqAAIAAA+IgFAAIAAhDIA0AAIAABDgA0pgzIAAgEIAJgBIAAhQIgJgBIAAgDIAXAAIAAADIgJABIAABQIAJABIAAAEgAk8iDQgEgDgBgKIAEAAQABAHADADQADADAHAAQAHAAAEgDQAEgCAAgIIAFAAQgBAJgFAEQgFAEgJAAQgIAAgFgEgATGiGIgBgDIABgDQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABIABADIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAgAIyiGIgBgDIABgDQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABIABADIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAgAGhiGIAAgDIAAgDQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABIABADIgBADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-132.1,-14.4,264.9,29.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBlIAAjGIANAAIABAmIABAAQAGgRAPgMQAPgMAXAAQAIAAAHABIAOADIgDANQgNgDgOAAQgcgBgQAVQgPAWAAAjIAABug");
	this.shape.setTransform(101.3,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBaQgUgMgLgXQgJgXAAgeQAAgdAJgXQAKgXATgPQATgOAcAAQAZAAARAMQAQANAIAUQAIAVAAAaIAAALIiQAAQgBAqAUAYQAUAXAjAAQARAAAPgCQAOgDAQgIIAAAOQgNAGgQADQgPADgSAAQgeAAgTgNgABBgLQAAgigOgXQgQgVgdAAQgdAAgTAUQgSAUgEAmICBAAIAAAAg");
	this.shape_1.setTransform(83.4,25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBjIhNjGIAQAAIBDC1IAAAAIBEi1IAQAAIhNDGg");
	this.shape_2.setTransform(65.3,25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBaQgTgMgMgXQgJgYgBgdQABgbAJgZQAKgXAUgPQASgOAcAAQAZAAARAMQAQANAIAUQAJAVgBAaIAAALIiQAAQAAAqATAYQAUAXAjAAQASAAAOgCQAOgDAQgIIAAAOQgNAGgQADQgOADgTAAQgeAAgTgNgABCgLQAAgigPgXQgPgVgeAAQgdAAgSAUQgTAUgEAmICCAAIAAAAg");
	this.shape_3.setTransform(47.6,25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBlIAAjGIAMAAIABAmIACAAQAGgRAPgMQAPgMAXAAQAIAAAIABIANADIgDANQgNgDgOAAQgdgBgPAVQgPAWAAAjIAABug");
	this.shape_4.setTransform(24.1,25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBaQgUgMgLgXQgJgXAAgeQAAgdAJgXQAKgXATgPQATgOAcAAQAZAAARAMQAQANAIAUQAIAVAAAaIAAALIiQAAQgBAqAUAYQAUAXAjAAQASAAAOgCQAOgDAQgIIAAAOQgNAGgQADQgPADgSAAQgeAAgTgNgABBgLQAAgigOgXQgQgVgdAAQgdAAgTAUQgSAUgEAmICBAAIAAAAg");
	this.shape_5.setTransform(6.2,25.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB1BlIAAiFQAAgcgNgOQgOgNgVAAQgcAAgRARQgRARAAAkIAAB2IgNAAIAAiFQAAgcgOgOQgNgNgVAAQgbAAgRARQgSARAAAlIAAB1IgOAAIAAjGIALAAIADAjIABAAQAGgOAQgMQAPgMAaAAQAUAAAPAKQAPAKAFATIABAAQAHgRARgMQARgKAZAAQAcAAAQAQQARARAAAjIAACFg");
	this.shape_6.setTransform(-19.9,25.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AB1BlIAAiFQAAgcgOgOQgMgNgWAAQgcAAgRARQgRAQAAAlIAAB2IgNAAIAAiFQAAgcgOgOQgMgNgWAAQgaAAgSARQgSARAAAlIAAB1IgOAAIAAjGIALAAIADAjIABAAQAGgOAPgMQAPgMAbAAQAVAAAOAKQAPAKAFATIABAAQAHgRARgMQARgKAaAAQAbAAAQAQQARARAAAjIAACFg");
	this.shape_7.setTransform(-52.2,25.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMAdIAAiBIAPAAIAACAQAAAfAOAPQAOAOAbAAQAfAAATgTQATgTAAgnIAAhvIAOAAIAADGIgMAAIgCgnIgBAAQgHARgRANQgRAMgcAAQhFAAAAhIg");
	this.shape_8.setTransform(-79.5,25.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBjQgRgDgKgGIAAgPQAQAIAPAEQARADARAAQAfABAOgLQAPgMAAgTQAAgNgIgJQgHgHgNgGIgdgMQgRgEgQgGQgPgGgHgKQgIgKAAgSQAAgYATgNQATgNAfAAQASAAAPADQAPADAMAGIgFAMQgKgEgQgEQgOgDgQAAQgZAAgOAJQgPAJAAATQAAANAHAIQAHAIANAFIAcAJIAfALQAPAHAKAKQAJAKAAATQAAAbgTAOQgSAOgmAAQgVAAgQgEg");
	this.shape_9.setTransform(-98,25.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBvQgLgOAAgdIAAiDIgeAAIAAgKIAegDIAEgwIAKAAIAAAwIA+AAIAAANIg+AAIAACCQAAAWAIALQAHAMATAAQAJAAAHgBQAHgBAGgCIAAAMIgNAEQgHABgKAAQgZAAgLgOg");
	this.shape_10.setTransform(37.2,-19.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqBkQgRgEgKgFIAAgPQAQAIAOACQASAFARAAQAeAAAPgMQAPgLAAgTQAAgNgIgIQgHgIgNgHIg+gVQgOgGgIgKQgIgJAAgTQAAgYASgNQAUgNAeAAQATAAAOAEQAPADANAFIgFANQgJgFgRgEQgPgDgPAAQgZAAgOAJQgPAKAAASQAAANAHAIQAJAIALAEIAbALIAgALQAPAFAKALQAJAKAAATQAAAagTAOQgTAPglAAQgVAAgQgDg");
	this.shape_11.setTransform(23.6,-17.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnBbQgUgNgKgXQgKgWAAgfQAAgdAJgXQAKgXATgPQATgOAcAAQAaAAAQAMQAQAMAIAVQAIAUAAAbIAAALIiQAAQgBArAUAXQAUAXAkAAQASAAANgDQAOgCARgJIAAAPQgQAGgOADQgPADgSAAQgdAAgUgMgABBgLQAAgjgOgWQgPgVgeAAQgdAAgTAUQgTAVgDAlICBAAIAAAAg");
	this.shape_12.setTransform(5.7,-17.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsCFQgQgLgHgSIgCAAIgCAlIgLAAIAAkcIAOAAIgBCAIABAAQAGgTATgOQATgNAbAAQAmAAAVAaQAVAbAAAxQAAAcgJAZQgJAXgTAOQgTANgcAAQgbAAgQgLgAgzgYQgRAYAAApIAAAEQAAArAQAVQAQAWAiAAQAiAAASgXQASgYAAgrQAAhZhDAAQgjAAgRAYg");
	this.shape_13.setTransform(-14.5,-21.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgzBlIAAjGIANAAIABAmIABAAQAGgRAQgMQAOgMAXAAQAJAAAHACIANACIgCAOQgOgFgOAAQgcAAgQAWQgPAUAAAlIAABtg");
	this.shape_14.setTransform(-39.5,-17.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhMAdIAAiBIAOAAIAACAQAAAfAPAOQAOAPAbAAQAfAAATgTQASgTAAgnIAAhvIAPAAIAADGIgMAAIgCgnIgBAAQgIARgQANQgRAMgdAAQhEAAAAhIg");
	this.shape_15.setTransform(-58.9,-17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvBaQgTgNgKgXQgKgZAAgdQAAguAXgdQAXgbApAAQAeAAATAOQATAOAJAWQAJAXAAAdQAAAdgKAZQgJAWgUAOQgUANgcAAQgdAAgSgNgAg0hBQgTAYAAApQAAApASAYQARAZAkAAQAZAAAQgMQAQgLAHgUQAIgTAAgcQAAgYgHgVQgHgVgQgLQgPgMgaAAQgiAAgTAYg");
	this.shape_16.setTransform(-79.4,-17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGCGIAAhlIhaimIAQAAIBQCVIBRiVIAQAAIhaCkIAABng");
	this.shape_17.setTransform(-96.8,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-106.5,-36,213.1,72), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhxBxIgkgjIh3AAQgdAAgSgFQgZgFgNgNQgTgTgBgkIAAhmQABgGAEgFQAEgEAIAAICEAAQAcAAAUAFQAXAEAOAOQATASAAAlIAABkIAeAeQAFAFgBAFQAAAHgGAEQgFAGgGAAQgFAAgFgFgAlTAAQAAAZAMAMIACACQANAJAaACICFAAIAAhZQAAgZgNgNIgCgBQgMgKgbgBIiEAAgAEqBNQgmgBgRgLQgNgIgCgQIAAgCQAAgHAEgDQAFgEAHAAQAGAAAFADQADADABAFIABACQAFAGAIAEQAIACAPAAIBHAAQAoAAALgGQAGgDACgGQABgEABgKIAAgBQgBgPgFgFQgJgHgbAAIhfAAQggAAgPgLQgOgMAAgcIAAgLQAAgYARgLQAVgNA1AAIA1AAQApAAAUALQAOAJACAQIAAADQAAAGgFAEQgDADgHAAQgGAAgEgDQgEgDgDgEIgBgCQgDgIgNgDIgggBIg2AAQghAAgKAEQgKAFAAAPIAAAHQAAANAGAFQAIAGAXAAIBRAAQApAAAPAJQAXAMAAAiIAAABQAAAlgeALQgRAIgnAAgAnHBJQgEgEAAgIIAAiiQAAgHAEgEQAFgFAHAAQAHAAAFAFQAEAEAAAHIAACiQAAAIgEAEQgFAFgHAAQgHAAgFgFgAAgBNQgvAAgYgNQgggRAAgvIAAgoQAAguAggSQAYgNAvAAIAtAAQAvAAAYANQAhASABAuIAAAoQgBAvghARQgYANgvAAgAgVhQQgRAMAAAeIAAAmQAAAcARAMQAOAKAdAAIBAAAQAfAAAOgKQARgMAAgcIAAgmQAAgegRgMQgOgJgfAAIhAAAQgdAAgOAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-46,-11.7,92,23.6), null);


(lib.img6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img6();
	this.instance.parent = this;
	this.instance.setTransform(-77,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img6_1, new cjs.Rectangle(-77,-53,154,106), null);


(lib.img5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img5();
	this.instance.parent = this;
	this.instance.setTransform(-25,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img5_1, new cjs.Rectangle(-25,-62,50,124), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-36,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-36,-115,72,230), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-57,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-57,-76,114,152), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-26,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-26,-146,52,292), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-92,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-92,-67,184,134), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-106,-162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-106,-162,212,324), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA2IAAhrIA7AAIAAAMIgtAAIAAAiIArAAIAAAKIgrAAIAAAnIAtAAIAAAMg");
	this.shape.setTransform(50.4,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/A2IAAhrIAOAAIAABfIArAAIAAhfIANAAIAABfIArAAIAAhfIANAAIAABrg");
	this.shape_1.setTransform(36.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSA2IAAgIIAMgDIAAhVIgMgDIAAgIIAlAAIAAAIIgMADIAABVIAMADIAAAIg");
	this.shape_2.setTransform(25,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbA2IAAgyIg2AAIAAAyIgNAAIAAhrIANAAIAAAuIA2AAIAAguIAOAAIAABrg");
	this.shape_3.setTransform(16,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA2IAAhrIANAAIAAAuIAVAAQATAAAKAHQAKAHAAAPQAAAPgKAJQgKAIgSAAgAgXAqIAVAAQAZAAAAgUQAAgKgGgEQgHgFgOAAIgTAAg");
	this.shape_4.setTransform(4.9,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtA1IAAgMQADACAFABQAGAAAEgIQADgJAEgYIAIg4IA6AAIAABqIgOAAIAAhfIghAAIgCASQgGApgCAKQgDAQgGAFQgFAHgKAAQgGgBgEgBg");
	this.shape_5.setTransform(-7.7,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgpAAIgNAhIgOAAIAqhrIALAAIAqBrgAARAJIgRgwIgQAwIAhAAg");
	this.shape_6.setTransform(-18.2,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA2IAAhfIghAAIAAgMIBPAAIAAAMIghAAIAABfg");
	this.shape_7.setTransform(-28,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdA2IAAhrIA7AAIAAAMIguAAIAAAiIArAAIAAAKIgrAAIAAAnIAuAAIAAAMg");
	this.shape_8.setTransform(-37.6,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlBEIAAgdIhJAAIAAAdIgNAAIAAgoIAIAAQAKgRAJgbQAIgdACgWIAwAAIAABfIAOAAIAAAogAgJgMQgJAZgIAPIAxAAIAAhTIgYAAQAAARgIAag");
	this.shape_9.setTransform(-48.3,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AqUipIUpAAIAAFTI0pAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-67.1,-18,134.2,36), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F4350").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAB8B6").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dev
	this.instance = new lib.dev_1();
	this.instance.parent = this;
	this.instance.setTransform(-317,20);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({_off:false},0).to({x:-17},10,cjs.Ease.get(1)).wait(1));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-300,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-67,-575.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({y:-252.5},10,cjs.Ease.get(1)).wait(101));

	// btn
	this.instance_3 = new lib.btn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-46.9,-422.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({y:-99.6},10,cjs.Ease.get(1)).wait(10).to({scaleX:1.1,scaleY:1.1,x:-46.8},5).wait(10).to({scaleX:1,scaleY:1,x:-46.9},5).wait(30).to({scaleX:1.1,scaleY:1.1,x:-46.8},5).wait(10).to({scaleX:1,scaleY:1,x:-46.9},5).wait(21));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7.4,-506.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({y:-183.3},10,cjs.Ease.get(1)).wait(101));

	// dev
	this.instance_5 = new lib.dev_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-17,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({y:110},10,cjs.Ease.get(1)).wait(40).to({x:283},10,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// bg2
	this.instance_6 = new lib.bg2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-601);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({y:-278},10,cjs.Ease.get(1)).wait(40).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// img
	this.instance_7 = new lib.img6_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(21,355);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({y:247},10,cjs.Ease.get(1)).wait(14).to({y:337},10,cjs.Ease.get(1)).wait(40).to({x:321},10,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// img
	this.instance_8 = new lib.img5_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-175,-1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({x:-125},10,cjs.Ease.get(1)).wait(14).to({y:89},10,cjs.Ease.get(1)).wait(40).to({x:175},10,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// img
	this.instance_9 = new lib.img4_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(184,-178);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({x:114},10,cjs.Ease.get(1)).wait(24).to({y:-88},10,cjs.Ease.get(1)).wait(40).to({x:414},10,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// img
	this.instance_10 = new lib.img3_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-207,224);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({x:-93},10,cjs.Ease.get(1)).wait(24).to({y:314},10,cjs.Ease.get(1)).wait(40).to({x:207},10,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// img
	this.instance_11 = new lib.img2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(176,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:124},10,cjs.Ease.get(1)).wait(34).to({y:218},10,cjs.Ease.get(1)).wait(40).to({x:424},10,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// img
	this.instance_12 = new lib.img1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-242,-232);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-58},10,cjs.Ease.get(1)).wait(34).to({y:-142},10,cjs.Ease.get(1)).wait(40).to({x:242},10,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// bg
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(94).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(50));

	// urText
	this.instance_14 = new lib.urText();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,282.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(94).to({_off:false},0).wait(61));

	// bgImg
	this.instance_15 = new lib.bgImg_1();
	this.instance_15.parent = this;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(94).to({_off:false},0).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334,-300,536,600);


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
p.nominalBounds = new cjs.Rectangle(-34,299,536,602);
// library properties:
lib.properties = {
	id: '9A001EA4034D4E1FB792FCB923C5FC22',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/dev.png", id:"dev"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/img4.jpg", id:"img4"},
		{src:"images/img5.jpg", id:"img5"},
		{src:"images/img6.jpg", id:"img6"}
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
an.compositions['9A001EA4034D4E1FB792FCB923C5FC22'] = {
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