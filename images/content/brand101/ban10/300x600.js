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
p.nominalBounds = new cjs.Rectangle(0,0,84,126);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,107);


(lib.corner = function() {
	this.initialize(img.corner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,168);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,376);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJNBtQgGgDgFgFQgJgJAAgNQAAgPAMgLQALgLAPAAIADAAQALABAIAIIADADQAFAIABAJIAAACQAAAQgLAKQgLALgQAAQgGAAgFgBgAEsBjQgLgEgIgFQgQgJgKgMIAmgvQAMAPAUAJQAVAJAVAAIAAAAQAIAAAFgDQAEgDAAgDQAAgGgQgFIgjgMQgSgHgMgJQgNgJgFgNQgDgIAAgKIAAgEQABgcAWgUQAagYAqAAQA6AAAkAjIgHAIIggAlQgNgMgTgHQgRgHgQAAQgNAAAAAJQAAAFAQAGIAYAIIALAEQAqAQAIAaQABAGAAAHQAAAjgYAVQgZAWgpAAQgiAAgcgLgAp3BjQgMgEgJgGQgQgKgJgNIApgoQALANAVAIIAGACQAPAEAOAAQAcAAAAgOQAAgMgiAAIgSAAIgaAAIAMg1IABgCIArAAQATAAAHgCQAJgDAAgHQAAgNgmAAQgdAAgTALIgFADIgWgrQAPgNAVgHQAWgHAYAAQAsAAAbAPQAVAMAFAUIABAKQAAASgSAPQgRAPgWADQAZAFAKASQADAFABAGIABANQAAAcgcATQgaARglAAQgiAAgcgLgAHpBqIgaAAIAEgRQAEgLABgMIAmisIBBAAIgGAbIgpC5gABFBqIgaAAIAvjUIBwAAQAbAAASASQAKAKAFAMQADALAAAMQAAAegTAWQgaAegxAAIgxAAIgPBDgACGgQIAaAAIAOAAQAJAAAIgFIABgBQAGgGAAgIQAAgOgRAAIgnAAgAh/BqIgaAAIAvjUICgAAIgGAbIgGAdIhgAAIgFAVIBeAAIgBAHIgFAVIgGAcIheAAIgFAXIBgAAIgBAEIgGAYIgGAcgAlaBqIgaAAIAvjUIBxAAQAbAAASASQAJAKAFAMQAEALAAAMQAAAegUAWQgZAegyAAIgwAAIgPBDgAkYgQIAaAAIANAAQAKAAAHgFIACgBQAGgGAAgIQAAgOgSAAIgnAAgAJlAbIgZAAIAViFIBFAAIgIAbIgeBqg");
	this.shape.setTransform(-1,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AJCBkQgIgJgBgLQAFABAGAAQAQAAALgLQALgKAAgQIAAgCQAGADAFAFQAJAJAAANQAAAPgLALQgLALgQAAQgNAAgJgJgAEsBhQgdgLgQgTIAGgGQAIAFALAEQAcALAiAAQApAAAZgWQAYgVAAgjQAAgGgBgGQAVAQAAAYIAAAGQgBAMgEALQgGAPgNAMQgZAWgpAAQgiAAgcgMgAp3BiQgfgMgPgWIAFgEQAJAGAMAEQAcALAiAAQAlAAAagRQAcgTAAgcIgBgNQAVANAAAbQAAAcgcATQgaASglAAQgiAAgcgLgAHPBpIAGgcIAnAAIApi5IAaAAIgvDVgAArBpIAGgcIAmAAIAPhDIAxAAQAxAAAagdQATgXAAgeQAAgMgDgLIAFAGQAKAKAFANIAAAEQAAAKADAIQAAAegTAWQgaAegxAAIgxAAIgPBDgAiZBpIAGgcICHAAIAGgcIAaAAIgNA4gAl0BpIAGgcIAnAAIAPhDIAwAAQAyAAAZgdQAUgXAAgeQAAgMgEgLIAGAGQASASAAAaQAAAfgUAWQgZAegyAAIgwAAIgPBDgAFbAaIgOgFQgqgQgIgaQAMAJASAHIAjALQAQAFAAAGQAAADgEADQgFADgIAAgAJkAZIgDgDQgIgIgLgBIADgOIAbAAIAehrIAcAAIgmCFgAAAAZIAAgEIhgAAIAFgWIBeAAIAGgdIAaAAIgMA3gApqAUIAFgVIASAAQAiAAAAALQAAAOgcAAQgOAAgPgEgAoageQAWgDARgPQASgPAAgSIgBgKQAVAOAAAYQAAASgSAPQgLAJgNAFQgKgSgZgGgAGMgyQgNgFgNgBIgYgIQgQgGAAgFQAAgJANAAQAQAAARAHQATAHANAMIAgglQAPAIAMAMIgnAtQgNgNgTgHgABygtIAIgiIAnAAQARAAAAAOQAAAIgGAGIgeAAIgCAGgAksgtIAHgiIAnAAQASAAAAAOQAAAIgGAGIgfAAIgBAGgAAOgzIABgHIheAAIAFgVIBgAAIAGgdIAaAAIgMA5gAp6hHQATgLAdAAQAmAAAAANQAAAHgJADQgHACgTAAIgrAAIgBACg");
	this.shape_1.setTransform(1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-68.8,-12.4,137.6,24.8), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQ0BsQgOgDgKgHIgGgFIALgOIAagjQAMAKANAAQAOAAAJgLIgqiVIBIAAIAHAbIAOA8IAKgPIAwhIIBJAAIgUAbIhnCOQghAvg4AAQgOABgLgDgAIxBTIgEgDQgcgbgBgpIABgJQABgTAHgRQAJgWATgSQAkgkA3AAQAwAAAfAbQAQANAIARQAJASAAAWQgBAzgjAjQglAlg4gBQgvAAgfgbgAJjgiQgQASAAAYQAAAUANAMIAIAGQALAIAQAAQAZAAARgTQAQgSAAgYIgBgLQgDgMgJgKQgOgNgVAAQgZAAgRATgABPBTIgDgDQgcgbAAgpQAAgyAkgjQAlgkA3AAQAvAAAgAbQAQANAIARQAIASAAAWQAAAzgkAjQglAlg3gBQgwAAgggbgACDgiQgQASgBAYQABAUANAMIAIAHQALAHAPAAQAZAAARgTQAQgSAAgYIgBgLQgDgMgKgKQgNgNgVAAQgZAAgQATgAqgBkQgMgFgKgGQgKgGgIgJIgHgIIAMgLIAdgdQAMANAVAIIAGACQAOAEAOABQAcAAAAgPQAAgMgiABIgRAAIgaAAIAMg3IAAgBIArAAQATAAAHgCQAKgCAAgIQAAgNgmAAQgeAAgTALIgEAEIgWgsQAOgMAVgHQAWgIAYAAQAsAAAbAPQAWANAEATIABAKQABASgTAQQgRAOgWAEQAaAFAJARQADAFABAHIACAMQAAAcgdATQgaARglAAQghABgcgLgAwBBTIgDgDQgdgbABgpQAAgyAkgjQAlgkA3AAQAvAAAgAbQAQANAIARQAIASAAAWQAAAzgkAjQglAlg3gBQgwAAgggbgAvOgiQgQASAAAYQAAAUAOAMIAIAHQALAHAQAAQAZAAAQgTQAQgSAAgYIgBgLQgDgMgJgKQgOgNgVAAQgZAAgRATgAPaBrIgbAAIAHgfIAWhgIhMB/IgNAAIgQAAIgJg7IgLhEIgcB/IgmAAIgaAAIAvjVIBXAAIAEAbIALBLIANgWIAvhQIBbAAIgFAbIgqC6gAE8BrIgaAAIANg9IABgCIAAgCIABgDIAgiRIB2AAQAfAAARARQAJAJAEAMQACAHAAAIQAAAUgPARQgOAQgTAAQAPAFAHANIAFAJIACAFIABALQAAAZgRARQgVAWgmAAgAFuA1IA1AAQAHAAAEgEQAGgEAAgHQAAgGgEgDQgDgEgGABIgyAAgAGAgbIAxAAQAPAAAAgPQAAgKgLAAIguAAgAgoBrIgaAAIAHggIAVhfIhMB/IgNAAIgQAAIgJg7IgKhEIgdB/IgmAAIgaAAIAvjVIBXAAIAEAbIALBLIANgVIAvhRIBaAAIgFAbIgpC6gAlPBrIgaAAIALgvIAOg/IhoBuIgkAAIgZAAIAvjVIBAAAIgGAbIgRBNIAjglIA+hDIBDAAIgGAbIgpC6gAx5BrIgaAAIAciBIAGgcIhMAAIgiCdIgnAAIgaAAIAvjVIDOAAIgGAbIgqC6gAsQA1IgTAAIgHAAIAKgwIADAAIBKAAIgGAcIgEAUg");
	this.shape.setTransform(-1,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AQWBbIAKgMQALACAOAAQA4AAAhgvIBniOIAoAAIh7CqQghAvg4AAQglAAgSgSgAIxBSQgQgOgIgRIAEADQAfAbAvAAQA4AAAlgkQAjgkABgyQAAgWgJgSQAdAbAAAoQAAAzgkAkQgmAkg2AAQgwAAgfgbgABPBSQgPgOgIgRIADADQAgAbAwAAQA3AAAlgkQAkgkAAgyQAAgWgIgSQAcAbAAAoQAAANgCALIgBACIAAADIgBACQgHAfgZAZQglAkg3AAQgwAAgggbgAqgBiQgggMgOgWIAEgEQAKAGAMAEQAcALAhAAQAlAAAagRQAdgTAAgcIgCgNQAWANAAAbQAAAdgcASQgbASgkAAQgiAAgcgLgAwABSQgQgOgIgRIADADQAgAbAwAAQA3AAAlgkQAkgkAAgyQAAgWgIgSQAZAYADAiIgDAAIgKAvIAHAAQgIAbgWAWQglAkg3AAQgwAAgfgbgAO/BpIAHgcIAmAAIAqi5IAaAAIgjCdIgLAPIAGAFIgIAkgANzBpIgEgcIANAAIBMh/IgWBhIgiA6gAMDBpIAGgcIAmAAIAch/IALBFIgTBWgAEiBpIAGgcIBsAAQAmAAAVgVQARgRAAgZIgBgLQAIAEAFAJQAIALAAAOQAAAZgRASQgVAVgmAAgAhCBpIAGgcIAmAAIApi5IAaAAIgvDVgAiOBpIgFgcIANAAIBMh/IgVBgIgjA7gAj/BpIAGgcIAmAAIAdh/IAKBFIgTBWgAlpBpIAGgcIAnAAIApi5IAaAAIgvDVgAn1BpIAFgcIAkAAIBohtIgOA/IhFBKgAyTBpIAGgcIAmAAIAqi5IAaAAIgvDVgA0gBpIAGgcIAnAAIAiicIBMAAIgGAcIgyAAIgiCcgAsqAzIAGgbIAzAAIAEgVIAaAAIgEAXIgMALIAHAIIgBAGgAqTAUIAFgVIARAAQAiAAAAALQAAAOgcAAQgOAAgOgEgAFaAYIAHgbIAyAAQAGAAADADQAEADAAAGQAAAGgGAFQgEAEgHAAgABsALQgNgLgBgUQABgZAQgSQAQgTAZAAQAVAAANANQAKAJADANQgMgHgPAAQgZAAgRASQgQASAAAYIACAMIgIgHgAvkALQgOgLAAgUQAAgZAQgSQARgTAZAAQAVAAAOANQAJAJADANQgMgHgPAAQgZAAgRASQgPASAAAYIABAMIgIgHgAJMALQgNgLAAgUQAAgZAQgSQARgTAZAAQAVAAAOANQAJAJADANQgMgHgPAAQgZAAgQASQgRASAAAYIABALIgIgGgAHYgLQgHgMgPgFQATgBAOgQQAPgRAAgUQAAgIgCgHIAHAGQAMANACAQQgHARgBATIgGAIQgLANgPAEIgFgKgApEgeQAWgDARgPQATgPgBgSIgBgKQAWAOAAAYQAAASgSAPQgMAJgNAFQgJgSgagGgAmghsIAaAAIgIAoIgjAlgAN5hsIAQAAIAIA1IgNAWgAiJhsIAQAAIAIA2IgNAVgAR8hsIAOAAIAKAtIgKAPgAqkhHQATgLAeAAQAmAAAAANQAAAHgKADQgHACgTAAIgrAAIAAABgAFsg4IAHgZIAuAAQALAAAAAKQAAAPgPAAg");
	this.shape_1.setTransform(1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-132.3,-12.4,264.6,24.9), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADmB3IAkgxQAMAJAOABQAOAAAJgLIgpiUIhmBhIA7BzIhLAAIghhOIgRASIgNA8IhBAAIAvjVIBBAAIgRBLIBFhLICZAAIAVBWIA6hWIBJAAIh7CqQgiAug3AAQglAAgSgRgAqvBuQgggcAAgsQAAg1AlgjQAkghA3AAQArAAAcAWQAXATAIAdIg+ATQgDgOgMgJQgMgKgQABQgZAAgRASQgRARAAAZQAAATANANQAOAOAVAAQANAAANgIQAMgHAGgLIAyAiQgSAageANQgXAKgagBQgvABgggbgAJhCFIAYhwIhnBwIg+AAIAvjVIBBAAIgXBmIBhhmIBCAAIgvDVgAg7CFIgCgZIhNAAIgNAZIhNAAIB+jVIBRAAIAfDVgAhCAzIgGhEIgkBEIAqAAgAk2CFIAciBIhMCBIgdAAIgTiBIgcCBIhBAAIAvjVIBXAAIAPBlIA8hlIBbAAIgvDVgAI5h0IAbgTQAJARATAAQAUAAAQgRIAVATQgbAdgjgBQgjABgPgdg");
	this.shape.setTransform(-16.5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADmB3IAkgxQAMAKAOAAQAOAAAJgLIgqiUIhlBhIA7BzIhLAAIghhOIgRASIgNA8IhBAAIAvjVIBBAAIgRBLIBFhLICZAAIAVBWIA6hWIBJAAIh7CpQgiAvg3AAQglAAgSgRgAqvBuQgggbAAgtQAAg1AlgjQAkghA3AAQArAAAcAWQAXATAIAdIg+ATQgDgOgMgKQgMgJgQAAQgZABgRASQgRASAAAYQAAATANANQAOAOAVAAQANAAANgIQAMgHAGgLIAyAiQgSAageAMQgXALgagBQgvABgggbgAJhCFIAYhwIhnBwIg+AAIAvjVIBBAAIgXBnIBhhnIBCAAIgvDVgAg7CFIgCgaIhNAAIgNAaIhNAAIB+jVIBRAAIAfDVgAhCAzIgGhEIgkBEIAqAAgAk2CFIAciBIhMCBIgdAAIgTiBIgcCBIhBAAIAvjVIBXAAIAPBlIA8hlIBbAAIgvDVgAI5h0IAbgTQAJAQATABQAUgBAQgQIAVATQgbAdgjgBQgjABgPgdg");
	this.shape_1.setTransform(-13.8,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-88.5,-15,146.8,29.7), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E50319").s().p("AjeA5QAAhyBRhRQBThSByAAQBcAABLA3QgpCMhpBmQhnBniNApQg3hIAAhcg");
	this.shape.setTransform(-5.6,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003F91").s().p("AiXC7Qg3gagnguQAngMC0gqQBrgZAwgkQBRg6AAhiQABgYgJgiQAsBJAABPQAABxhSBSQhRBRhzABQg+gBg5gbg");
	this.shape_1.setTransform(3.2,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDUQhYhYAAh7QAAh7BYhYQBYhYB7AAQB9AABXBYQBYBYAAB7QAAB7hYBYQhXBXh9AAQh7AAhYhXgADyhcQAABghRA7QgwAkhsAZQizArgnAMQAnAuA3AaQA5AbA+AAQBzAABRhRQBShSAAhyQAAhPgshIQAJAigBAYgAjFjCQhSBRAAByQAABcA4BIQCNgpBnhnQBphmAoiMQhKg3hcAAQhzAAhSBSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-30,-29.9,60,59.8), null);


(lib.lightItem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.259,1],0,0,0,0,0,6.6).s().p("AgjAiQgOgOAAgUQAAgTAOgQQAQgOATAAQAUAAAOAOQAQAQAAATQAAAUgQAOQgOAQgUAAQgTAAgQgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightItem, new cjs.Rectangle(-5,-5,10,10), null);


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-218,-188);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_1, new cjs.Rectangle(-218,-188,436,376), null);


(lib.corner_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.corner();
	this.instance.parent = this;
	this.instance.setTransform(-99,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.corner_1, new cjs.Rectangle(-99,-84,198,168), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-36,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-36,-53.5,72,107), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-42,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-42,-63,84,126), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.lightMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lightItem();
	this.instance.parent = this;
	this.instance.setTransform(-107.8,235.5,1.4,1.4,0,0,0,-0.1,0.1);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.lightItem();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-114.7,278.8,1.7,1.7);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.lightItem();
	this.instance_2.parent = this;
	this.instance_2.setTransform(102.2,90.9,1.5,1.5);
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.lightItem();
	this.instance_3.parent = this;
	this.instance_3.setTransform(52.7,83.4,1.5,1.5);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.lightItem();
	this.instance_4.parent = this;
	this.instance_4.setTransform(14.2,92.9,1.5,1.5);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.lightItem();
	this.instance_5.parent = this;
	this.instance_5.setTransform(15.7,58.4,1.5,1.5);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.lightItem();
	this.instance_6.parent = this;
	this.instance_6.setTransform(16.2,25.9,1.5,1.5);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.lightItem();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-25.8,-77.6,0.7,0.7);
	this.instance_7.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightMc2, new cjs.Rectangle(-123.2,-81.1,232.9,368.5), null);


(lib.lightMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lightItem();
	this.instance.parent = this;
	this.instance.setTransform(-75.1,246.7,1.2,1.2,0,0,0,-0.1,-0.1);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.lightItem();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-150.1,270.5);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.lightItem();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-178.6,60,1.7,1.7,0,0,0,-0.1,-0.2);
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.lightItem();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-131.6,5);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.lightItem();
	this.instance_4.parent = this;
	this.instance_4.setTransform(86.9,37.6,1.7,1.7,0,0,0,-0.1,-0.2);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.lightItem();
	this.instance_5.parent = this;
	this.instance_5.setTransform(64.4,92.6,1.7,1.7,0,0,0,-0.1,-0.2);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.lightItem();
	this.instance_6.parent = this;
	this.instance_6.setTransform(16.9,57.7,1.2,1.2,0,0,0,-0.1,-0.1);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.lightItem();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-26.6,48.1,1.7,1.7,0,0,0,-0.1,-0.2);
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.lightItem();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.1,-6.4,1.7,1.7,0,0,0,-0.1,-0.2);
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.lightItem();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-26.1,-126.3);
	this.instance_9.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightMc1, new cjs.Rectangle(-186.9,-131.3,282.5,406.9), null);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.lightMc2();
	this.instance.parent = this;
	this.instance.setTransform(18.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).wait(5).to({alpha:1},5).wait(6));

	// Слой_3
	this.instance_1 = new lib.lightMc1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,14.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},5).wait(5).to({alpha:0},5).wait(6));

	// Слой_1
	this.instance_2 = new lib.light();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.6,-300,308.7,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_714 = function() {
		this.stop();
		this.light.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(714).call(this.frame_714).wait(6));

	// t1_3
	this.instance = new lib.t1_3();
	this.instance.parent = this;
	this.instance.setTransform(-349.8,-130.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({x:-68.8},10,cjs.Ease.cubicOut).wait(685));

	// t1_2
	this.instance_1 = new lib.t1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-285.6,-160.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({x:-4.6},10,cjs.Ease.cubicOut).wait(690));

	// t1_1
	this.instance_2 = new lib.t1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-328.1,-192.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({x:-47.1},10,cjs.Ease.cubicOut).wait(695));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-107.6,-245.8,0.01,0.01,0,0,0,-5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0,scaleX:1,scaleY:1,y:-245.7},15,cjs.Ease.backOut).wait(705));

	// box1
	this.instance_4 = new lib.box1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(215,227,1,1,30);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).to({rotation:0,x:91},10,cjs.Ease.cubicOut).wait(670));

	// box2
	this.instance_5 = new lib.box2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(101,200,0.399,0.399,44.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:41,y:168},10,cjs.Ease.cubicOut).wait(665));

	// corner
	this.instance_6 = new lib.corner_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(170,335);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({x:51,y:216},10,cjs.Ease.cubicOut).wait(680));

	// light
	this.light = new lib.light_1();
	this.light.name = "light";
	this.light.parent = this;
	this.light.alpha = 0;
	this.light._off = true;

	this.timeline.addTween(cjs.Tween.get(this.light).wait(30).to({_off:false},0).to({alpha:1},10).wait(680));

	// girl
	this.instance_7 = new lib.girl_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(217.1,90.1,0.3,0.3,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0,regY:0,scaleX:1,scaleY:1,x:77,y:45},15,cjs.Ease.cubicOut).wait(705));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(720));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,432.4,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,433.4,602);
// library properties:
lib.properties = {
	id: '391CEAE05404470988FA32E9FC90C000',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/corner.png", id:"corner"},
		{src:"images/girl.png", id:"girl"},
		{src:"images/light.png", id:"light"}
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
an.compositions['391CEAE05404470988FA32E9FC90C000'] = {
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