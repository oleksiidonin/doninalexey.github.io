(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg_b = function() {
	this.initialize(img.bgImg_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,282);


(lib.dev_b = function() {
	this.initialize(img.dev_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,284);


(lib.holder = function() {
	this.initialize(img.holder);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,128);


(lib.holder_b = function() {
	this.initialize(img.holder_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,128);// helper functions:

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
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A1djBMAq7AAAIAAGDMgq7AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFaCNIAAhGIAIAAIAAALQAIgNAMAAQALABAHAHQAIAIAAANQAAANgIAHQgHAIgLAAQgMAAgIgMIAAAbgAFnBTQgFAGAAAJQAAAJAFAGQAHAFAHABQAHgBAHgFQAFgGAAgKQAAgJgGgFQgFgGgIAAQgIAAgGAGgAA4CNIAAhGIAIAAIAAALQAJgNAMAAQAKABAIAHQAIAIAAANQAAANgIAHQgIAIgKAAQgMAAgJgMIAAAbgABGBTQgGAGAAAJQAAAJAGAGQAGAFAHABQAIgBAGgFQAFgGAAgKQAAgJgFgFQgGgGgIAAQgHAAgGAGgAklCLIACgHQAEACAFABQAEgBACgCQACgBADgHIgZg1IAJAAIAUAsIARgsIAJAAIgXA4QgDAIgFADQgDAEgHgBQgHAAgEgCgAvICNIAAgRIg8AAIAAhIIAJAAIAABBIApAAIAAhBIAIAAIAABBIAKAAIgBAYgAIGCKIAAgOIguAAIAAg1IAIAAIAAAvIAeAAIAAgvIAIAAIAAAvIAIAAIgBAUgArgCKIAAgOIgrAAIgCAOIgGAAIAAgUIAFAAQAIgNAAgZIAAgJIAmAAIAAAvIAIAAIgBAUgAr/BVQAAAVgGAMIAdAAIAAgoIgXAAgAM7B5QgGgEAAgIQAAgIAGgFQAHgFAKAAQAHAAAJACIAAgBQAAgIgEgDQgEgDgIgBQgIABgIADIgCgGQAKgFAJAAQAMAAAGAGQAFAGAAAKIAAAgIgIAAIAAgHQgGAJgNAAQgIAAgGgFgANBBlQgEACAAAGQAAAEAEAEQAEADAGAAQAHAAAFgFQAGgEAAgGIAAgFQgJgDgHAAQgIABgEADgAMEB2QgIgJAAgLQAAgMAIgIQAIgJALAAQANABAJAJIgFAGQgIgIgJAAQgIAAgFAGQgGAGAAAJQAAAJAGAFQAFAHAJAAQAIgBAIgHIAFAEQgJALgNAAQgLAAgIgIgAKrB5QgGgEAAgIQAAgIAGgFQAIgFAJAAQAIAAAJACIAAgBQAAgHgFgEQgDgDgIgBQgJABgIADIgCgGQAKgFAKAAQALAAAGAGQAGAGAAAKIAAAgIgIAAIAAgHQgIAJgMAAQgIAAgGgFgAKxBlQgEACAAAGQAAAEAEAEQAEADAGAAQAHAAAGgFQAFgEAAgGIAAgFQgJgDgHAAQgHABgFADgAGgB5QgGgEAAgIQAAgIAGgFQAHgFAKAAQAHAAAJACIAAgBQAAgHgEgEQgEgDgIgBQgJABgHADIgDgGQALgFAJAAQALAAAGAGQAGAGAAAKIAAAgIgIAAIAAgHQgHAJgMAAQgIAAgGgFgAGmBlQgEACAAAGQAAAEAEAEQAEADAFAAQAIAAAFgFQAFgEAAgGIAAgFQgJgDgGAAQgIABgEADgAD1B2QgIgJAAgLQAAgMAIgIQAHgJAMAAQANABAJAJIgFAGQgIgIgJAAQgIAAgGAGQgFAGAAAJQAAAJAGAFQAFAHAJAAQAIgBAIgHIAFAEQgJALgNAAQgMAAgHgIgAC7B2QgIgJAAgLQAAgMAHgIQAJgJALAAQANABAJAJIgFAGQgIgJgJAAQgGABgHAFQgFAFgBAHIAZAAIAAAHIgZAAQABAJAFADQAHAGAHAAQAIAAAIgIIAFAEQgEAGgFACQgGADgHAAQgMAAgHgIgACBB2QgIgHAAgNQAAgMAHgIQAIgJALAAQALAAAHAJQAHAIAAAMIAAADIgrAAQAAAIAGAFQAFAFAIAAQAKAAAHgHIAFAEQgJAKgNAAQgMAAgHgIgACHBSQgFAFgBAHIAjAAQgBgHgFgFQgDgGgJAAQgHAAgEAGgAigB2QgIgJAAgLQAAgMAIgIQAJgJALAAQANAAAHAJQAIAIAAAMQAAALgIAJQgIAIgMAAQgLAAgJgIgAiaBTQgGAGAAAJQAAAJAGAFQAGAHAIAAQAJAAAGgHQAFgGAAgIQAAgJgGgGQgFgGgJAAQgIAAgGAGgAl2B5QgGgEAAgIQAAgIAGgFQAHgFAKAAQAHAAAJACIAAgBQAAgHgEgEQgEgDgIgBQgIABgIADIgCgGQAKgFAJAAQAMAAAGAGQAFAGAAAKIAAAgIgIAAIAAgHQgGAJgNAAQgIAAgGgFgAlwBlQgEACAAAGQAAAEAEAEQAEADAGAAQAHAAAFgFQAFgEAAgGIAAgFQgIgDgHAAQgIABgEADgAmtB2IAEgGQAIAHAKAAQAFAAAEgCQAEgEAAgDQAAgFgDgCQgEgDgGABIgIAAIAAgHIAIAAQAFAAADgCQAEgDAAgEQAAgEgEgCQgDgCgFgBQgJABgHAFIgEgGQAJgGAMgBQAIAAAGAFQAFAEAAAGQAAAJgJADQAKAEAAAKQAAAGgFAFQgGAFgKAAQgNAAgJgIgAn8B5QgGgEAA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gASBAWQgIgIAAgMQAAgLAIgIQAIgIAMAAQAMAAAJAKIgFAFQgHgIgJAAQgIAAgGAGQgGAHAAAHQAAAJAGAGQAGAGAIAAQAIAAAIgIIAGAFQgJAKgNAAQgMAAgIgIgAQ9AWQgIgIAAgMQAAgLAIgIQAIgIAMAAQANAAAHAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgMAAgIgIgARDgMQgFAGAAAIQAAAKAFAFQAGAGAIAAQAJAAAGgGQAFgGAAgJQAAgIgGgGQgFgGgJAAQgIAAgGAGgALIAWQgIgJAAgLQAAgLAIgIQAIgIAMAAQAMAAAIAIQAIAJAAAKQAAALgIAJQgIAIgMAAQgMAAgIgIgALOgMQgGAHAAAHQAAAJAGAGQAGAGAIAAQAJAAAFgGQAGgGAAgJQAAgHgGgHQgGgGgIAAQgJAAgFAGgAIQAWQgIgIAAgMQAAgLAIgIQAIgIAMAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgMAAgIgIgAIWgMQgGAHAAAHQAAAJAGAGQAGAGAIAAQAJAAAGgGQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGgAlkAWQgHgIAAgMQAAgLAHgIQAHgIALAAQAMAAAHAIQAHAJAAALIgBACIgqAAQABAIAFAGQAFAEAIAAQAJAAAIgIIAFAFQgJAKgOAAQgLAAgIgIgAlegOQgEAGgBAHIAiAAQgBgIgEgEQgEgGgIAAQgGABgGAEgAnaAZQgGgEAAgIQAAgJAGgEQAGgDALgBQAJAAAIACIAAgBQAAgHgFgEQgDgDgIAAQgJAAgIADIgCgHQAKgEAJAAQAMAAAGAGQAFAFAAALIAAAgIgHAAIAAgIQgIAJgMAAQgIAAgGgFgAnUAEQgEADAAAGQAAAFAEADQAEACAGAAQAHAAAFgDQAGgFAAgGIAAgFQgIgCgIAAQgHAAgFACgApLAWIAEgGQAIAHAKAAQAGAAAEgCQADgDAAgFQAAgEgDgCQgEgCgGgBIgHAAIAAgFIAHAAQAGAAADgDQADgCAAgEQAAgEgDgCQgDgCgGAAQgJAAgHAFIgEgGQAIgGANAAQAKAAAEAEQAFADAAAHQAAAJgIADQAKADAAAKQAAAGgGAFQgGAFgKAAQgMAAgKgIgAwiAWQgIgIAAgMQAAgLAIgIQAIgIAMAAQAMAAAIAIQA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AGQgGAHAAAIQAAAJAGAGQAGAGAIAAQAJAAAIgIIAFAFQgJAKgNAAQgLABgJgJgAGfhJQgIgJAAgLQAAgLAIgJQAIgIAMAAQANAAAIAKIgEAFQgIgIgJAAQgIAAgFAFQgFAFgBAIIAYAAIAAAHIgYAAQABAHAFAFQAGAGAIAAQAIAAAIgJIAFAFQgEAFgFACQgFADgIAAQgLABgJgJgADrhIQgHgHgBgKIgMAAIAAAXIgIAAIAAg2IAIAAIAAAYIAMAAQABgKAHgIQAIgHALAAQALAAAIAIQAHAJAAALQAAAMgHAIQgIAJgMgBQgLABgHgIgADwhsQgFAFAAAKQAAAJAFAGQAGAGAIAAQAIAAAFgGQAFgGAAgJQAAgKgFgFQgFgGgJAAQgIAAgFAGgAhzhJQgIgHAAgNQAAgLAIgJQAHgIALAAQAMAAAGAIQAHAIAAAMIAAAEIgrAAQABAIAGAEQAGAFAGABQAJgBAIgHIAFAEQgJAKgNAAQgKAAgJgIgAhthtQgFAFgBAIIAjAAQAAgIgFgFQgFgFgHAAQgHAAgFAFgAlhhMQgKgKAAgRQAAgOALgMQAKgLAQAAQARAAAKALQAKAKAAAQQAAAQgKALQgLALgQAAQgQAAgLgLgAlah8QgIAJAAAMQAAANAIAJQAIAJAMgBQANABAIgJQAIgJAAgNQAAgMgIgJQgJgIgMAAQgMAAgIAIgAtGhJQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAJAJIgFAGQgHgIgJAAQgIAAgGAGQgFAGAAAJQAAAJAFAGQAGAGAIAAQAJAAAIgIIAFAFQgJAKgNAAQgLABgJgJgAwRhJQgIgIAAgMQAAgLAIgJQAIgIAMAAQALAAAJAIQAIAIAAAMQAAAMgIAIQgJAJgMgBQgMABgHgJgAwMhsQgFAHAAAIQAAAJAGAGQAFAGAJAAQAJAAAFgGQAFgGAAgJQAAgJgFgGQgGgGgJAAQgIAAgGAGgAFjhFQgGgFAAgIQAAgIAGgFQAGgFALAAQAHAAAJADIAAgCQAAgGgEgFQgFgDgHAAQgHAAgJADIgCgGQAKgEAJgBQAMAAAGAHQAFAFAAAKIAAAhIgIAAIAAgIQgGAJgNAAQgIAAgGgEgAFphaQgEADAAAFQAAAFAEADQAEADAGAAQAIgBAEgEQAFgDAAgHIAAgFQgGgCgJAAQg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");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-138.3,-20.4,276.8,40.8), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiWCJIAzgvQAtA2A+AAQAfAAATgRQAVgSAAgdQAAgegagRQgZgQgrAAIghAAIgMgsIBuh3IixAAIAAg+IEPAAIAAA2IhzB1QA2AIAgAbQAkAdAAA0QAAA5goAlQgpAkg/AAQhiAAg7hIg");
	this.shape.setTransform(-35.6,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhvCzQgtghAAg1QAAhGBKgdQg8ggAAg+QAAgvApggQAogfA9AAQA+AAAoAfQApAgAAAwQAAA9g8AgQAkAPASAXQAUAZAAAkQAAA2gtAgQgrAhhFAAQhDgBgsgggAg8ArQgZASAAAcQAAAaAXASQAXASAnAAQAoAAAXgSQAXgSAAgbQAAgbgZgSQgYgRglAAQgkAAgYARgAg0iFQgVAQAAAZQAAAbAVASQAVAQAfABQAgAAAUgSQAVgRAAgbQAAgZgUgQQgVgRggAAQggAAgUARg");
	this.shape_1.setTransform(-69.7,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAlQgPgPAAgWIAAAAQAAgVAPgPQAPgQAWAAQAYAAAQARIgOAQQgNgNgOAAQgLAAgIAKQgJAJAAANQAAAOAJAJQAIAKANAAQAOAAAMgNIAOAOQgSATgYAAQgVAAgPgQg");
	this.shape_2.setTransform(50.7,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBFIAAhkIAVAAIAABkgAgLguIAAgWIAYAAIAAAWg");
	this.shape_3.setTransform(43.5,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfAyIAAhCIgfAtIgfgsIAABBIgXAAIAAhkIAXAAIAfAvIAggvIAXAAIAABkg");
	this.shape_4.setTransform(34.2,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BZIBVixIAUAAIhVCxg");
	this.shape_5.setTransform(22.7,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAyIAAgoIgsAAIAAAoIgWAAIAAhkIAWAAIAAAqIAsAAIAAgqIAYAAIAABkg");
	this.shape_6.setTransform(12.5,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzBDIAAiDIAXAAIAAARQANgTAUAAQATAAAOAOQAOAPAAAYQAAAXgOAPQgOANgTAAQgUAAgNgRIAAAugAgUglQgJAKAAAOQAAANAJAJQAJAJALAAQAMAAAIgIQAJgKAAgNQAAgPgJgJQgIgJgMAAQgLAAgJAJg");
	this.shape_7.setTransform(0.7,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAyIAAhkIBHAAIAAAUIgwAAIAABQg");
	this.shape_8.setTransform(-9.4,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-85.4,-22.1,140.8,45.3), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbDHQgdgMgcgYIAng3QAYAUAWAJQAWAKAaAAQAsAAAbgkQAagkABg6QgjAsg8AAQhCAAgogkQgogjAAg8QAAg9ArgoQArgpBEAAQAlAAAbALQAaAKAXAXQAYAYAMAjQAOAoAAA7QAABjgvA9QgwA/hRAAQgoAAgigOgAhAh/QgWAVAAAiQAAAgAXAVQAYATAmAAQAlAAAXgVQAWgVAAggQAAghgXgVQgYgWgmAAQglAAgXAXg");
	this.shape.setTransform(7,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbDHQgdgMgcgYIAng3QAYAUAVAJQAXAKAaAAQArAAAbgkQAagkACg6QgjAsg8AAQhCAAgogkQgogjAAg8QAAg9ArgoQArgpBEAAQAlAAAbALQAaAKAXAXQAYAYAMAjQAOAoAAA7QAABjgvA9QgwA/hRAAQgoAAgigOgAhAh/QgWAVAAAiQAAAgAXAVQAXATAmAAQAlAAAYgVQAWgVAAggQAAghgXgVQgYgWgmAAQglAAgXAXg");
	this.shape_1.setTransform(-31.1,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbDHQgdgMgdgYIAog3QAuAnAwAAQAsAAAbgkQAagkACg6QgkAsg8AAQhCAAgogkQgogjAAg8QABg9AqgoQArgpBEAAQAlAAAbALQAaAKAXAXQAYAYAMAjQANAoAAA7QAABjguA9QgwA/hQAAQgoAAgjgOgAhAh/QgWAVAAAiQAAAgAYAVQAXATAlAAQAlAAAYgVQAWgVAAggQAAghgXgVQgYgWgmAAQglAAgXAXg");
	this.shape_2.setTransform(-69.2,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAzIAAgpIgrAAIAAApIgYAAIAAhlIAYAAIAAAqIArAAIAAgqIAXAAIAABlg");
	this.shape_3.setTransform(54.1,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBDIAAiDIAXAAIAAARQANgTAUAAQATAAAOAOQAOAPAAAYQAAAXgOAPQgOANgTAAQgUAAgNgRIAAAugAgUglQgJAKAAAOQAAANAJAJQAJAJALAAQAMAAAIgIQAJgKAAgNQAAgPgJgJQgIgJgMAAQgLAAgJAJg");
	this.shape_4.setTransform(42.3,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAzIAAhlIBHAAIAAAVIgwAAIAABQg");
	this.shape_5.setTransform(32.3,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-85.1,-22.7,143.8,45.4), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwByIglgkIh3AAQgcAAgTgFQgYgGgOgNQgTgTAAgjIAAhlQgBgHAGgFQAEgEAIAAICDAAQAdAAASAGQAZAEAOAOQASARABAlIAABkIAdAeQAEAEABAGQgBAGgFAFQgFAFgGAAQgGAAgEgDgAlTAAQABAZANAMIABABQANAKAaACICEAAIAAhZQgBgZgLgMIgDgCQgMgKgbgBIiEAAgAEoBNQglgBgRgLQgMgIgDgPIAAgEQABgGAEgEQAFgDAFAAQAHAAAFADQADADACAEIABADQAFAGAHADQAIADAPAAIBHAAQAnAAAMgGQAFgCACgHQACgFABgJIAAgCQgBgOgFgFQgKgHgZAAIhgAAQghABgOgMQgNgNAAgaIAAgMQAAgXARgMQAVgMA1gBIA0AAQAqAAASALQAPAJACAQIAAADQAAAGgDADQgGAFgGAAQgGAAgFgEQgEgCgBgEIgBgDQgFgIgMgCQgJgCgYgBIg1AAQghAAgKAGQgKAEAAAQIAAAHQAAAMAGAGQAIAFAWAAIBSAAQAoAAARAJQAWAMAAAiQAAAlgeAMQgRAHgmAAgAAgBNQguAAgYgOQghgRAAguIAAgnQAAgvAhgSQAYgNAuAAIAtAAQAvAAAYANQAgASAAAvIAAAnQAAAuggARQgYAOgvAAgAgVhQQgRANAAAdIAAAmQAAAcARAMQAOAKAdAAIBAAAQAeAAAPgKQARgMAAgcIAAgmQAAgdgRgNQgPgKgeAAIhAAAQgdAAgOAKgAnFBJQgFgFAAgHIAAihQAAgIAFgDQAEgGAHAAQAIAAAEAGQAEADABAIIAAChQgBAHgEAFQgEAEgIAAQgHAAgEgEg");
	this.shape.setTransform(2.6,0.5,1,1,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-43.9,-11.2,91.8,23.5), null);


(lib.holder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder();
	this.instance.parent = this;
	this.instance.setTransform(-128,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder_mc, new cjs.Rectangle(-128,-64,256,128), null);


(lib.holder_b_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder_b();
	this.instance.parent = this;
	this.instance.setTransform(-126,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder_b_mc, new cjs.Rectangle(-126,-64,252,128), null);


(lib.dev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-122,-141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_mc, new cjs.Rectangle(-122,-141,244,282), null);


(lib.dev_b_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev_b();
	this.instance.parent = this;
	this.instance.setTransform(-122,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_b_mc, new cjs.Rectangle(-122,-142,244,284), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKAlQgPgPAAgWQAAgVAPgPQAQgQAWAAQAYAAAOAQQAPAPAAAVQAAAWgPAPQgOAQgYAAQgXAAgPgQgAg8gZQgKALAAAOQAAAPAKALQAJAKAPAAQAQAAAJgKQAKgLAAgPQAAgOgKgLQgJgKgQAAQgPAAgJAKgAm6AkIAKgMQAPANATAAQAIAAAGgEQAGgEAAgHQAAgPgXAAIgLAAIAAgOIALAAQAVAAAAgPQAAgGgFgEQgGgEgJAAQgQAAgMALIgJgLQAPgQAXAAQAQAAAKAIQALAIgBAMQAAAQgRAHQAUAFAAATQAAANgKAIQgLAJgRAAQgZAAgTgRgAGpAzIAAhJIg0BJIgRAAIAAhlIASAAIAABJIA0hJIARAAIAABlgAEhAzIAAhUIghAAIAAgRIBTAAIAAARIggAAIAABUgADbAzIAAhJIg0BJIgRAAIAAhlIASAAIAABJIA0hJIARAAIAABlgAAmAzIAAhlIAuAAQARAAAJAJQAHAIAAAJQAAAQgOAHQATAGAAASQAAAOgKAHQgKAHgRAAgAA4AjIAdAAQAUAAgBgOQAAgOgUAAIgcAAgAA4gHIAYAAQATAAAAgOQAAgNgSAAIgZAAgAiHAzIAAhIIggAvIAAAAIghgvIAABIIgRAAIAAhlIATAAIAfAwIAfgwIATAAIAABlgAkGAzIgKgZIgwAAIgKAZIgTAAIAthmIAQAAIAtBmgAkXALIgRgoIgRAoIAiAAg");
	this.shape.setTransform(-2.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqsCbIAAk1IVZAAIAAE1g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-68.4,-15.5,137,31), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg_b();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.logo_duo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBCQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgHQAAgDACgCQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQADAAACACQACACAAADIAAAHQAAADgCACQgCACgDAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAAZBAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgVIguAAQgGAAgFgEQgEgEAAgGIABgGIAihSQABgEADAAIAEABQADACAAADIgBACIgfBSIgBADIAAAAQAAABAAAAQABAAAAAAQABABAAAAQABAAABAAIAsAAIAAgcQAAgGAGAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAdIAPAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgPAAIAAAVQAAAGgHAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAioBCQgDAAgDgCQgCgCAAgDQAAgDADgDIAwgtQAJgIAEgGQAGgJAAgLIAAgGQAAgLgJgGQgIgGgMAAIghAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgEQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIAiAAQARAAALAJQAMAKAAAQIAAAGQAAANgGALQgFAHgLALIgpAnIA/AAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAB7A/QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgmIgmAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAlAAIAAglQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQAGAAAAAGIAAAlIAmAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgmAAIAAAmQAAAGgGAAIgEgCg");
	this.shape.setTransform(25.4,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-37.9,-0.9,0.69,0.69,0,0,0,-0.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_duo, new cjs.Rectangle(-67.8,-8,110.9,16.2), null);


(lib.holder_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder_mc();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},20).wait(11));

	// Слой_2
	this.instance_1 = new lib.holder_b_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-64,256,128);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.dev_b_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},20).wait(1));

	// Слой_1
	this.instance_1 = new lib.dev_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-142,244,284);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,269.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117));

	// logo_duo
	this.instance_1 = new lib.logo_duo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.2,114.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(117));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-75.4,-257.8,1.05,1.05,0,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(117));

	// btn
	this.instance_3 = new lib.btn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-54.2,211.2,1,1,0,0,0,-0.8,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85).to({scaleX:0.96,scaleY:0.96,x:-54.1},2).to({scaleX:1,scaleY:1,x:-54.2},2).wait(3).to({scaleX:0.96,scaleY:0.96,x:-54.1},2).to({scaleX:1,scaleY:1,x:-54.2},2).wait(21));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(238,158.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({x:-37},10,cjs.Ease.get(1)).wait(46).to({x:-235.4},10,cjs.Ease.get(-1)).wait(1));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(237.3,158.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-36.7},10,cjs.Ease.get(1)).wait(30).to({x:-235.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(66));

	// dev
	this.instance_6 = new lib.dev_1("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(274,-293);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:29,y:-157},10,cjs.Ease.get(1)).wait(30).to({mode:"synched",loop:false},0).wait(20).to({mode:"single",startPosition:20},0).wait(46).to({startPosition:20},0).to({x:274,y:-293},10,cjs.Ease.get(-1)).wait(1));

	// holder
	this.instance_7 = new lib.holder_1("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-278,-62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-21,y:24},10,cjs.Ease.get(1)).wait(30).to({mode:"synched",loop:false},0).wait(20).to({mode:"single",startPosition:20},0).wait(46).to({mode:"synched",startPosition:30,loop:false},0).to({x:-278,y:-62.9,mode:"single"},10,cjs.Ease.get(-1)).wait(1));

	// bg2
	this.instance_8 = new lib.bg2();
	this.instance_8.parent = this;
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({_off:false},0).to({alpha:1},20).wait(46).to({alpha:0},10).wait(1));

	// bg1
	this.instance_9 = new lib.bg1();
	this.instance_9.parent = this;

	this.instance_10 = new lib.bg1();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(117));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-406,-435,802,735);


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
p.nominalBounds = new cjs.Rectangle(-106,165,802,736);
// library properties:
lib.properties = {
	id: 'D78E0080C82B4A91A29A8C60B712AE41',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/bgImg_b.jpg", id:"bgImg_b"},
		{src:"images/dev.png", id:"dev"},
		{src:"images/dev_b.png", id:"dev_b"},
		{src:"images/holder.png", id:"holder"},
		{src:"images/holder_b.png", id:"holder_b"}
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
an.compositions['D78E0080C82B4A91A29A8C60B712AE41'] = {
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