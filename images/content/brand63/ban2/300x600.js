(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.snow2 = function() {
	this.initialize(img.snow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,623,725);


(lib.snowBg = function() {
	this.initialize(img.snowBg);
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


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUBSIAABuIgQAAIAAiVIBwB1IAAhvIAQAAIAACWgAJKC4QgKgKgEgQIAQgEQABALAIAHQAHAIANAAQAOAAAIgJQAHgIAAgMQAAgJgHgIQgFgEgMgFIgNgGQgPgHgEgFQgLgJABgOQgBgQAMgLQAMgKARAAQAOAAAJAGQAJAGAFAKIgNAJQgDgHgFgEQgHgFgKAAQgJAAgIAGQgGAGAAAKQAAAIAFAEQAFAGAKADIAOAHQAPAGAHAHQAKALAAAPQABATgNANQgNAMgUAAQgUAAgLgLgAD7CuQgUgWgBgfQAAggAWgVQAWgVAfAAQAYAAATAOIAAAUQgIgJgLgEQgMgGgNAAQgYAAgQARQgRASAAAYQAAAbATARQARAPAWAAQANAAANgGQALgHAGgGIAAAUQgUAOgXAAQggAAgWgVgAK5DAIAAiPIBKAAIAAAPIg6AAIAAAqIA4AAIAAAQIg4AAIAAA3IA6AAIAAAPgAIKDAIAAiPIAPAAIAACPgAHfDAIgRgoIg9AAIgSAoIgRAAIBCiWIBBCWgAGXCJIAwAAIgYg5gAAZDAIgRgoIg7AAIgSAoIgSAAIBCiWIA/CWgAguCJIAwAAIgYg5gAh4DAIgsg+IgDAAIAAA+IgRAAIAAiPIAYAAQAYAAAKAJQARAKgBAVQABAQgLALQgKALgQABIAtBAgAinBzIAKAAQAOAAAJgGQAJgHgBgNQABgNgMgIQgIgEgMAAIgKAAgAkaDAIAAiPIBBAAIAAAPIgxAAIAAAqIAvAAIAAAPIgvAAIAABHgAl9DAIgRgoIg9AAIgRAoIgRAAIBCiWIA/CWgAnFCJIAyAAIgZg5gAowDAIAAiPIAQAAIAACAIAoAAIAAAPgAqSDAIgRgoIg8AAIgSAoIgRAAIBBiWIBBCWgAraCJIAxAAIgYg5gAGSi+IAQAAIAABvIBkh0IAACUIgQAAIAAhtIhkB0gAhziSIgPBjIgQAAIAYiXIA3B6IA3h6IAWCXIgPAAIgOhjIgwBqgAnjiSIgPBjIgQAAIAYiXIA3B6IA4h6IAXCXIgRAAIgNhjIgxBqgAkvhBQgXgVAAggQAAggAXgVQAVgVAgAAQAfAAAVAVQAWAVAAAgQAAAggWAVQgVAVgfABQgggBgVgVgAkkifQgRAQAAAZQAAAZARARQARARAZAAQAXAAARgRQASgRAAgZQAAgZgSgQQgRgSgXAAQgZAAgRASgAFFgvIAAiAIgjAAIAAgPIBVAAIAAAPIgiAAIAACAgAD4gvIAAhGIhKAAIAABGIgQAAIAAiPIAQAAIAAA7IBKAAIAAg7IAQAAIAACPgAAxgvIAAiPIBKAAIAAAPIg6AAIAAArIA4AAIAAAPIg4AAIAAA4IA6AAIAAAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-77.1,-19.9,154.3,39.8), null);


(lib.snowMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.snow2();
	this.instance.parent = this;
	this.instance.setTransform(-312,-363);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.snowMc, new cjs.Rectangle(-312,-363,623,725), null);


(lib.snowBg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowBg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.snowBg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.particle2mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxAPQgGAAgEgEQgFgFAAgGQAAgFAFgFQAEgEAGAAIBjAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAg");
	this.shape.setTransform(8.2,0,0.386,0.385);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAPQgGAAgEgEQgFgFAAgGQAAgFAFgFQAEgEAGAAIBjAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAg");
	this.shape_1.setTransform(-8.2,0,0.386,0.385);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA+QgFgEgCgGQgBgGADgFIA+hhQADgFAGgCQAGgBAFADQAGAEABAGQABAGgDAFIg+BhQgEAHgIAAQgEAAgEgCg");
	this.shape_2.setTransform(-4.6,7,0.386,0.385);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATA5Ig+hhQgDgFABgGQABgGAFgEQAGgDAGABQAGACAEAFIA9BhQADAFgBAGQgCAGgFAEQgDACgFAAQgIAAgEgHg");
	this.shape_3.setTransform(4.5,7,0.386,0.385);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASA5Ig9hhQgEgFACgGQACgGAFgEQAFgDAGABQAGACAEAFIA9BhQAEAFgCAGQgCAGgFAEQgEACgEAAQgIAAgFgHg");
	this.shape_4.setTransform(-4.4,-7.2,0.386,0.385);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA+QgFgEgBgGQgBgFADgGIA+hhQADgFAGgCQAGgBAFADQAFAEACAGQABAGgDAFIg9BhQgFAHgJAAQgDAAgFgCg");
	this.shape_5.setTransform(4,-7.2,0.386,0.385);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAyBuIh1hFIgEiIQAAgGAEgFQAFgEAGAAQAGgBAFAFQAEAEAAAGIADB3IBnA9QAFADACAGQABAGgDAGQgEAHgJAAQgEAAgDgCg");
	this.shape_6.setTransform(14.7,-9,0.386,0.385);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhABtQgEgFABgGQACgGAFgEIBihEIgFh3QgBgGAFgEQAEgFAGAAQAGgBAFAFQAEAEABAGIAFCIIhvBNQgEADgFAAQgHAAgFgHg");
	this.shape_7.setTransform(-14.5,-8.1,0.386,0.385);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4BwQgHAAgEgFQgEgEAAgHIAEiHIB0hGQAGgDAGACQAGABADAGQADAFgBAGQgCAGgFADIhnA9IgDB3QAAAGgEAFQgFAEgGAAg");
	this.shape_8.setTransform(14.6,8.2,0.386,0.385);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAvB0QgGgBgEgEQgFgFABgGIAFh3IhihEQgFgDgCgGQgBgGAEgGQADgFAGgBQAGgBAGADIBvBOIgGCHQAAAGgEAFQgFAEgFAAg");
	this.shape_9.setTransform(-14.4,8.2,0.386,0.385);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah8AnQgDgFABgGQACgGAFgDIB3hBIB4BBQAFADACAGQABAGgDAFQgDAGgGACQgGABgFgDIhpg5IhoA5QgDACgEAAQgJAAgEgIg");
	this.shape_10.setTransform(0.1,16.4,0.386,0.385);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah3gSQgFgDgCgGQgBgGADgGQADgFAGgCQAGgBAFADIBoA5IBpg5QAFgDAGABQAGACADAFQADAGgBAGQgCAGgGADIh3BBg");
	this.shape_11.setTransform(-0.1,-15.5,0.386,0.385);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACFBbIkXibQgGgDgBgGQgCgGADgFQADgFAGgCQAGgCAFADIEXCaQAGADABAGQACAHgDAFQgFAIgIAAQgDAAgEgCg");
	this.shape_12.setTransform(11.5,6.3,0.386,0.385);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACFBbIkXibQgGgDgBgGQgCgGADgFQADgFAGgCQAGgCAFADIEXCaQAGADABAGQACAHgDAFQgFAIgIAAQgDAAgEgCg");
	this.shape_13.setTransform(-11.5,-6.6,0.386,0.385);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiVBZQgEgFACgGQABgGAGgDIESijQAFgDAGABQAGACADAFQAEAFgCAHQgBAGgGADIkSCiQgEADgDAAQgJAAgEgIg");
	this.shape_14.setTransform(11,-6.8,0.386,0.385);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiWBZQgDgFACgGQACgGAFgDIESijQAFgDAGABQAGACADAFQAEAFgCAHQgBAGgGADIkSCiQgEADgEAAQgIAAgFgIg");
	this.shape_15.setTransform(-11.4,6.8,0.386,0.385);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AipBnIgEjFICqhoICtBgIAEDGIiqBmgAiPhOIAECjICPBPICMhVIgEijIiPhPg");
	this.shape_16.setTransform(-0.1,0,0.386,0.385);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKCrQgEgEAAgHIAAk/QAAgGAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAGIAAE/QAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_17.setTransform(-0.1,-13.2,0.386,0.385);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJCqQgFgEAAgGIAAk/QAAgGAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAGIAAE/QAAAGgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_18.setTransform(0.1,13.2,0.386,0.385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.particle2mc, new cjs.Rectangle(-18,-20,35.5,40), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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BAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAFgDAIgBQAJABAHAEQAFAEgCAIIgDARQAOgLANgBIAEgOQABgEACgBQAGgDAHAAQABAAABAAQAAAAAAABQABAAAAABQAAABgBAAIgFAUIAAABIgIAgQgCAHAIgCQAIgCAHgLQACgCAAAEQACAFgDACQgKAMgQAAQgSAAAFgWIAGgTQgLACgQAOIgFASQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgHAEgHAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBgAmNAtIAGgTQAHgcABgHQgCgHgGAAQgEAAgFACQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQAGgDAHgBQALABAEAEQAGAEgCAIIgDARQAOgLANgBIAEgOQABgDACgCQAHgDAGAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAAAIgGAUIAAABIgIAgQgCAHAJgCQAHgCAIgLQAAAAABgBQAAAAAAABQAAAAABAAQAAABAAABQAAAFgBACQgKAMgQAAQgTAAAGgWIAFgTQgLACgQAOIgEASQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgIAEgFAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBgACPAwQgSgBAJgVIAMgYQAGgPgGgBIgDAAQgMACgKAJQgBAAAAAAQAAABAAgBQgBAAAAgBQAAAAABgBQAAgDABgDIAFgDQAKgHASAAQAKAAADAHQACAGgDAIQgQAegBAEQgDAIAMgCQAMgCAIgLQACgCABAEQgBAEgDACQgEAGgLADQgJAEgHAAIgDAAgAnVAoQgHgHABgMQAAgTANgLQAMgMARAAQANABAGAGQAIAHgBAMQAAAQgMANQgMAOgTAAQgMAAgHgIgAnCgHQgHAJgCARQgBAKAEAGQACAGAGAAQAIACAIgMQAHgKABgOQABgKgDgGQgCgGgGAAIAAgBQgIAAgIAJgAkrAoQgGgGgBgLQgBgSAOgNQANgOAVAAQAQAAACANQABALgOAJQgOAKgTADQAAAQAMAAQAIAAAKgIQAHgEADgGIADgFQABAAAAAAQAAAAABABQAAAAAAABQAAABABABQABADgEAEQgOATgYAAQgKAAgHgHgAkUgEQgHAJgCALIgBADQAVgFAIgQQAIgPgJgBQgJAAgJAOgAiAAlQgIgIAAgNIABgHIAAAAQADgMAEgPQAKgeAQgMQAJgIAJgBIASABQAHAAAHgDIAFgDQABACgCAFQgCAEgBACQgIAIgSgBQgQgBgHAHIgFALIgFAQQAIgDAKAAQANgBAGAHQAIAHgBAMQAAAQgMANQgNANgSAAQgNAAgGgGgAhtgLQgIALgBAOQgBALAEAGQACAGAFABQAJAAAHgKQAIgLABgOQABgJgDgHQgDgFgFgBIgCAAQgHAAgHAIgAJEAhIA0g3IgBADIgCAGIgpAsIgGACgAKOAZIAhhxIADgCIggBzgAL7ANQDdACAAACQAAACjdACgAvXARQAAgCDdgCIAAAIQjdgCAAgCgAF1hTQARgRAUgNIAPgHIABABQgdASgWAVQgLALgHALIgHACQALgPAMgMgAH6hSQASgRAZgRIAIgEIACABQgdASgVAVQgKAKgJAMIgFABQAKgNALgMgAEChDIAGgDIACAAIgBACIgIACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-98.3,-12.6,196.7,25.2), null);


(lib.lightItem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.259,1],0,0,0,0,0,13.2).s().p("AhHBEQgcgcAAgoQAAgnAcggQAggcAnAAQAoAAAcAcQAgAgAAAnQAAAoggAcQgcAggoAAQgnAAggggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightItem, new cjs.Rectangle(-10,-10,20,20), null);


(lib.HW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJyXJIAAiLIiWAAIAACLQAAATgIAAQgJAAABgTIAAixIAWAAQAahPAHj/IAEmzIBgAAIAAMBIAbAAIAACxQAAATgIAAQgIAAAAgTgAIUPdQgHDlgYBWIBgAAIAArcIg9AAIgEGhgAz7XJIAAiLIiXAAIAACLQAAATgIAAQgIAAAAgTIAAixIAXAAQAZhPAHj/IAFmzIBeAAIAAMBIAcAAIAACxQAAATgHAAQgIAAAAgTgA1bPdQgFDlgZBWIBgAAIAArcIg9AAIgFGhgAPBSpIACh+IACh4IgCh4IgCh+QAAhPAQgtQAQgrAdAAQAdAAAQArQAQAtABBPIgCB+IgCB4IACB4IACB+QgBCog9AAQg9AAAAiogAPcJkQgLAkAAA1IACCGIABBwQAABMgDCqQAAA7AKAiQAMAnAXAAQAXAAAMgnQAKgiAAg7QgEiqABhMQADiMAAhqQAAg1gLgkQgMgqgWAAQgVAAgNAqgAKMSpIABh+IACh4IgCh4IgBh+QAAhPAQgtQAQgrAdAAQAdAAAQArQAQAtABBPIgCB+IgCB4IACB4IACB+QAACog+AAQg9AAAAiogAKnJkQgLAkAAA1QAAA6ACBMIABBwIgBBwIgCCGQAAA7ALAiQAMAnAWAAQAXAAAMgnQAJgiABg7QgEiqAAhMQAEiMAAhqQAAg1gLgkQgMgqgWAAQgVAAgNAqgAAhSpIACh+IACh4IgCh4IgCh+QAAhPAQgtQAQgrAdAAQAdAAARArQAQAtAABPIgBB+IgDB4IADB4IABB+QAACog+AAQg9AAAAiogAA8JkQgKAkAAA1IABCGIACBwQAABMgDCqQAAA7AKAiQAMAnAWAAQAYAAAMgnQAKghgBg8QgCiqAAhMQACiMAAhqQABg1gLgkQgMgqgXAAQgWAAgMAqgAjsSpIACh+IACh4IgCh4IgCh+QAAhPARgtQAQgrAdAAQAcAAARArQAQAtAABPIgBB+IgDB4IADB4IABB+QAACog9AAQg+AAAAiogAjRJkQgKAkAAA1IABCGIACBwQAABMgDCqQAAA8AKAhQAMAnAXAAQAWAAANgnQAKgigBg7QgCiqAAhMQACiMAAhqQAAg1gKgkQgNgqgVAAQgXAAgMAqgAn9U3IgRjCIhUAAIgPDCQgBAIgDAFQgDAEgDgBQgFgBgCgHQgCgHABgIIBCsHQABgSAIAAQAHAAACASIBDMHQAAAIgCAHQgCAHgDABIgCAAQgGAAgCgQgAoQRRIgimZIgFhTIgBgbIgBAAIAAAbQgBAkgEAvIghGZIBPAAgAFBS7IAAg6QABgJACgGQACgGAEAAQAEAAACAGQADAHgBAIIAAA8QAAA1AJAYQAKAZAVAAQAXAAAKghQAJgdAAg9IAAiQQAAh/gmgEIgPAAQgJAAAAgTQAAgSAIAAIAQAAQAmgDAAh4IAAhMQAAg9gJgdQgKghgXAAQgVAAgKAZQgJAYAAA1IAAA9QABAIgDAGQgCAFgEABQgEgBgCgFQgCgGgBgIIAAg7QABiMA4AAQA7AAAACdIAABLQAABugbAjQAbAoAABwIAACPQAACdg7AAQg4AAgBiMgAzmUwQAAgTALAAQASAAAKgyQAJgvADhqQACgqAAicIAClxIBgAAIAAMPQAAAWgJAAQgIAAAAgWIAArnIg9AAIgCFOIgCDHQgEBqgJA4QgGAigMAVQgLAUgNAAQgOAAAAgVgAWGU7QgDgFAAgJIAAmVIgpAAIgzGYQgDARgHABQgIgBAAgRIACgSIAymIQgZgIgIgoQgGgdAAhOIAAhGQAAhSALgiQANgpAiAAIA4AAIAAMVQAAAVgJAAQgDAAgCgHgAU5JgQgFAXgBA+IAABGQAABCAFAUQAHAiAaAAIAqAAIAAk1IgnAAQgaAAgJAigARnVAIAAspIAxAAQAgAAARAqQAQAoAABMIAABGQAABDgMAlQgJAdgOAFQAOAHAJAfQAMAmAAA8IAACAQABBbgTAtQgRAsggABgAR5UcIAcAAQAZAAANglQAOgmAAhEIAAiLQAAgsgPggQgNgggTAAIghAAgAR5NzIAgAAQASAAAMgVQARgbAAg3IAAhXQAAg2gNggQgNgigWgBIgfAAgAM1U7QgDgFAAgJIAAsWIA1AAQAnAAAMAvQAIAgAABbIAAAtQAABXgKAjQgNAvgkAAIgkAAIAAGWQAAAVgJAAQgDAAgCgHgANDNzIAkAAQAdAAAHgpQAGgYAAhDIAAguQgBhGgEgWQgIgngdAAIgkAAgAhGUtIAAsWIBaAAQAHAAABASQgBATgHAAIhJAAIAALxQAAAVgIAAQgJAAAAgVgAsVVAIAAspIAyAAQAgAAARAqQAPAoAABMIAABGQABBDgMAlQgJAdgOAFQANAHAKAfQAMAmAAA8IAACAQAABbgSAtQgRAsghABgAsDUcIAdAAQAZAAANglQANgmAAhEIAAiLQAAgsgOggQgNgggTAAIgiAAgAsDNzIAhAAQARAAANgVQAQgbABg3IAAhXQAAg2gNggQgNgigWgBIggAAgAvGU7QgDgFABgJIAAmVIgpAAIgzGYQgEARgGABQgIgBAAgRIACgSIAxmIQgYgIgIgoQgHgdAAhOIAAhGQAAhSALgiQANgpAjAAIA4AAIAAMVQAAAVgJAAQgDAAgDgHgAwSJgQgGAXAAA+IAABGQAABCAEAUQAIAiAaAAIAqAAIAAk1IgnAAQgaAAgJAigAnPVAIAAsTQgBgJADgGQADgFADgBQAJAAAAAVIAALvIBGAAIAArvQAAgJACgGQADgFAEgBQAIAAAAAVIAALvIBGAAIAArvQAAgJADgGQADgFADgBQAIAAAAAVIAAMTgAT3KIIAAiBQAAgTAIAAQAIAAAAATIAACBQAAASgIABQgIgBAAgSgAMBHTIAAiLIiWAAIAACLQAAATgJAAQgHAAgBgTIAAiwIAXAAQAahPAHj+IAEm0IBfAAIAAMBIAcAAIAACwQAAATgIAAQgIAAAAgTgAKigXQgGDigZBYIBhAAIAArbIg+AAIgEGhgApMCzIACh+IACh3IgCh4IgCh9QAAhQARgtQARgrAcAAQAdAAAQArQAQAtABBQIgCB9IgCB4IACB3IACB+QAACog+AAQg9AAgBiogAoxmQQgKAkAAA1IABCGIACBvQAABKgDCrQAAA7AKAiQAMAnAXAAQAXAAAMgnQAKgiAAg7QgDirAAhKQADiMAAhpQAAg1gLgkQgMgrgWAAQgWAAgNArgAt4CzIACh+IABh3IgBh4IgCh9QAAhQARgtQAQgrAdAAQAdAAAQArQAQAtAABQIgCB9IgCB4IACB3IACB+QAACog9AAQg+AAAAiogAtcmQQgLAkAAA1IABCGIACBvQAABKgDCrQgBA7ALAiQALAnAYAAQAWAAAMgnQALgiAAg7QgEirAAhKQADiMABhpQAAg1gMgkQgMgrgVAAQgWAAgMArgA0gFBIgQjCIhWAAIgODCQgBAIgEAFQgDAEgDgBQgDgBgCgIQgDgHABgHIBCsFQACgTAHAAQAHAAACATIBCMFQABAJgCAFQgCAIgDABIgCAAQgGAAgCgQgA00BbIghmYIgFhTIgBgbIgBAAIAAAbQgBAlgEAuIghGYIBOAAgAMmE6QAAgTALAAQASAAAKgxQAJgxADhpQABgqABiaIABlxIBhAAIAAMNQgBAWgIAAQgJAAAAgWIAArmIg9AAIgBFOIgDDGQgEBqgJA4QgFAigMAUQgMAWgMAAQgOgBAAgVgAi8CnIACh9IACh3IAAgRIgpAAIAAGVQAAAUgJAAQgDAAgCgFQgDgHAAgIIAAr+QAAgJADgHQACgFADAAQAJAAAAAVIAAFFIAoAAIgDjAQAAhQAQgtQARgrAcAAQAdAAARArQAQAtAABQIgBB8IgCB5IACB3IABB9QABCpg/AAQg9AAAAipgAigmcQgLAkAAA2IACCFIABBwQAABLgDCpQAAA8AKAjQAMAlAWABQAYgBALglQAKgjAAg8QgDipAAhLQADiNAAhoQAAg2gKgkQgMgqgXAAQgWAAgLAqgAm+E6QAAgTALAAQASAAAKgxQAJgxADhpQACgrABiZIABlxIBfAAIAAMNQAAAWgIAAQgJAAAAgWIAArmIg8AAIgCFOIgDDGQgDBqgJA4QgGAigMAUQgMAWgNAAQgNgBAAgVgAz1E6QAAgTAMAAQATAAAJgxQAJgxAChpQACgqABiaIAClxIBfAAIAAMNQAAAWgJAAQgIAAgBgWIAArmIg7AAIgDFOIgCDGQgEBqgIA4QgGAigLAUQgMAWgOAAQgOgBAAgVgARWE6IAAnTQAAg9AChbIABhUIgBAAIhNK/QgDAUgIABQgKgBAAgXIAAr+QABgVAHAAQAJAAAAAVIAAHSQAACXgEBWIADAAQAEhAAIhMIA/oyQADgWAHAAQAEAAADAHQADAHAAAJIAAL/QAAAUgIABQgHgBAAgUgAFzFHQgDgGAAgJIAAr/QAAgJADgHQACgFADAAQAJAAAAAVIAAFIIAWAAIBClTQADgKAFAAQADAAADAIQACAJgDAOIhCFKIAAAEIBSGVQACAJAAAIQAAARgIAAQgHAAgEgQIhOmTIgWAAIAAGTQAAAUgJAAQgDAAgCgFgAwmFHQgCgGgBgJIAAr/QABgJACgHQACgFAEAAQAJAAAAAVIAAFIIAVAAIBDlTQACgKAFAAQAEAAACAIQACAJgDAOIhBFKIAAAEIBRGVQACAJAAAIQABARgJAAQgGAAgEgQIhPmTIgVAAIAAGTQAAAUgJAAQgEAAgCgFgASgFKIAAsoIAxAAQAgAAARAqQAQAoAABNIAABGQAABCgMAkQgJAegOAFQANAGAKAgQANAmAAA7IAAB/QAABbgTAuQgRAsghAAgASxEmIAdAAQAZAAANglQANgmAAhFIAAiKQAAgrgOghQgMgfgUAAIgiAAgASxiCIAiAAQAQAAANgVQARgbAAg3IAAhWQgBg2gMghQgMgigXAAIggAAgAIjFGQgCgHAAgIIAAr+QAAgJACgHQACgFAEAAQAJAAAAAVIAAL+QAAAUgJAAQgEAAgCgFgArCE3IAAsVIBaAAQAHABABASQgBATgHAAIhKAAIAALvQAAAUgIAAQgJAAABgUgAVIFKIAAsoIBaAAQAIABAAASQAAATgIAAIhIAAIAAE2IA+AAQAHAAAAASQAAASgHAAIg+AAIAAGCIBIAAQAIAAAAATQAAATgIAAgAB9FKIAAsRQAAgJADgHQACgFADAAQAEAAACAFQADAHAAAJIAALtIBGAAIAArtQABgJACgHQACgFAEAAQAIAAAAAVIAALtIBHAAIAArtQgBgJADgHQADgFADAAQAFAAACAFQACAHABAJIAAMRgAvJohIAAiMIiXAAIAACMQAAATgIAAQgIAAAAgTIAAixIAXAAQAahQAGj+IAFmzIBeAAIAAMBIAdAAIAACxQAAATgIAAQgIAAAAgTgAwowOQgGDlgYBXIBfAAIAArcIg9AAIgEGggACdtBQgBgpADhVIABh5IgBh4QgDhUABgqQAAhPARgtQAQgsAdAAQAdAAAQAsQAQAtAABPIgCB+IgCB4IACB5IACB+QAACng9AAQg/AAABingAC42HQgKAlAAA0IABCHIACBvQAABMgDCrQAAA7AKAhQAMAnAXAAQAWAAAMgnQAKghAAg7QgDirAAhMQADiLAAhrQAAg0gKglQgNgqgVAAQgWAAgNAqgAh/rLQgPgrAAhRIACh+IABh4IgBh5IgCh9QAAhRAPgrQAPgsAcAAQAqAAAMBSQAGAugDB9QAAAIgCAHQgDAGgDAAQgIAAAAgVQADhrgDgmQgHhIgiAAQgqAAAACEIACCGIACBwIgCBvIgCCHQAACDAqABQAhgBAIhHQADgmgDhrQAAgVAIAAQADAAADAGQACAHAAAIQADB8gGAvQgMBSgqAAQgcAAgPgsgAPRqzIgQjDIhUAAIgQDDQAAAHgDAFQgDAFgEgCQgDgBgDgHQgCgHABgHIBCsHQABgTAIAAQAIAAABATIBCMHQABAIgCAGQgCAHgEABIgCABQgGAAgCgQgAO+uaIghmZQgGhKABglIgBAAQAAAlgGBKIgiGZIBPAAgAyRqzIgPjDIhWAAIgPDDQgBAHgDAFQgDAFgDgCQgDgBgCgHQgDgHABgHIBCsHQACgTAHAAQAHAAACATIBCMHQABAIgCAGQgCAHgDABIgDABQgGAAgCgQgAykuaIghmZQgGhKAAglIgBAAQABAlgGBKIghGZIBOAAgAJ/q6IAAnUQAAhlAEiJIgCAAIgPCVIg+ItQgDAUgHAAQgJAAAAgYIAAsAQgBgUAJAAQAHAAAAAUIAAHUQAAChgEBMIADAAQAEhAAIhLIBAo1QADgVAGAAQAFAAAEAHQACAHAAAJIAAMBQAAAUgJAAQgHAAAAgUgAsiq6IAAnUQAAhpADiIIAAAAQgDAwgFA5IgiFYQgDAggLAAQgEAAgFgJQgEgIAAgMIgilbQgGg5gCgwIgBAAQAEB7AAB2IAAHUQAAAUgHAAQgJAAABgUIAAsBQAAgXAJAAQAIAAACAOQApHFAHBAIABAAQAHhAApnFQACgOAIAAQAKAAAAAXIAAMBQAAAUgJAAQgHAAAAgUgAGXquQgDgGAAgIIAAmUIgTAAIg4GUQgEAQgGAAQgIAAgBgSQAAgHACgJIA7mQIg6lWQgCgNACgJQACgIAFAAQAFAAADAKIA4FUIAUAAIAAlKQAAgIADgHQACgFADAAQAJAAAAAUIAAFKIAUAAIA4lUQADgKAFAAQAEAAACAIQADAJgDANIg5FWIA6GQQACAJAAAHQAAASgIAAQgGAAgEgQIg4mUIgTAAIAAGUQAAAUgJAAQgDAAgCgGgAWZqvQgDgGAAgJIAAmVIgoAAIgzGZQgDARgHAAQgIAAAAgSIACgRIAymJQgZgHgIgoQgGgeAAhNIAAhHQAAhSALgiQANgoAhAAIA4AAIAAMUQAAAVgJAAQgDAAgCgGgAVN2LQgGAYAAA9IAABHQAABBAEAVQAIAhAaAAIApAAIAAk1IgnAAQgaABgIAhgAUBqvQgDgGAAgJIAAmWIhRAAIAAGWQAAAVgIAAQgEAAgCgGQgDgGAAgJIAAsAQAAgIADgHQACgFAEAAQAIAAAAAUIAAFGIBRAAIAAlGQAAgIADgHQACgFADAAQAJAAAAAUIAAMAQAAAVgJAAQgDAAgCgGgARnqvQgDgGAAgJIAAmWIhRAAIAAGWQAAAVgJAAQgJAAAAgVIAAsAQAAgUAJAAQAJAAAAAUIAAFGIBRAAIAAlGQAAgIADgHQACgFADAAQAEAAACAFQADAHAAAIIAAMAQAAAJgDAGQgCAGgEAAQgDAAgCgGgAK6qqIAAspIAyAAQAfAAARApQARAoAABMIAABHQAABDgMAkQgKAdgNAFQANAGAKAhQAMAlAAA8IAACAQAABbgSAuQgRAsghAAgALLrOIAdAAQAZAAANgmQANglABhFIAAiLQAAgsgOggQgNgfgTgBIgjAAgALLx4IAiAAQARAAAMgVQARgbAAg2IAAhYQAAg1gMghQgNgigWAAIghAAgABqqvQgCgGAAgJIAArxIhLAAIAALxQAAAVgJAAQgDAAgDgGQgDgGABgJIAAsVIBtAAIAAMVQABAVgJAAQgEAAgDgGgAm8qvQgCgGAAgJIAAmWIhRAAIAAGWQgBAJgCAGQgCAGgEAAQgDAAgDgGQgDgGABgJIAAsAQgBgIADgHQADgFADAAQAEAAACAFQACAHABAIIAAFGIBRAAIAAlGQAAgIACgHQADgFAEAAQAIAAAAAUIAAMAQAAAVgIAAQgEAAgDgGgAqtqvQgCgGgBgJIAAsVIA2AAQAngBAMAwQAHAfAABbIAAAtQAABWgKAlQgMAugkAAIgkAAIAAGWQAAAVgJAAQgEAAgCgGgAqex4IAkAAQAcAAAIgoQAFgYABhEIAAguQAAhGgFgWQgIgngdAAIgkAAgArlqvQgCgGAAgJIAAsAQAAgIACgHQADgFAEAAQADAAACAFQADAHAAAIIAAMAQAAAJgDAGQgCAGgDAAQgEAAgDgGgA1DqvQgDgGAAgJIAAmWIhSAAIAAGWQAAAJgDAGQgCAGgEAAQgDAAgCgGQgDgGAAgJIAAsAQAAgIADgHQACgFADAAQAEAAACAFQADAHAAAIIAAFGIBSAAIAAlGQAAgIADgHQACgFADAAQAJAAAAAUIAAMAQAAAVgJAAQgDAAgCgGgAmHqqIAAspIBaAAQAJAAAAASQAAATgJAAIhIAAIAAE2IA+AAQAIAAAAASQAAASgIAAIg+AAIAAGDIBIAAQAJAAAAATQAAAUgJAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.HW, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgYPAv8IAAAAIAAAAIAAAAgA3rHEQACAADKzMIDKzNIAYhPQAhheAxhHIBpiUQAxhEAMgWQASghANgmQARgsAAgfQACg7gCgLQgHgngfgPQglgTgOgKQgPgNgCgOQgIgyAegQIBMgmIAOgIQAMgPAAglIgChaIXfAKQABAAABAcIACAnQADApANAKQAEAEA+AYQAxATABAPQAEAbAAANQgBAXgRALQgfASgPALQgbATgBAUIABBOQAAA2ABAAQAAAIAEAOQAIAbAYAbQAYAbBTBxIBpCQQBDBaAfCSQAOBBC3SCIC1RwIAXU/QAXVAACABI4QAQI4PAQUAADgADAAhgo1g");
	mask.setTransform(0.5,3.6);

	// bgImg2.jpg
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#062260").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowMc();
	this.instance.parent = this;
	this.instance.setTransform(0,-626.1);

	this.instance_1 = new lib.snowMc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(-312,-989.1,623,1339.2), null);


(lib.particle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.particle2mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-19.9,35,39.8);


(lib.lightMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lightItem();
	this.instance.parent = this;
	this.instance.setTransform(10.2,234.1);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.lightItem();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.4,284.7);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.lightItem();
	this.instance_2.parent = this;
	this.instance_2.setTransform(99.7,289.2);
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.lightItem();
	this.instance_3.parent = this;
	this.instance_3.setTransform(156.8,314.2);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.lightItem();
	this.instance_4.parent = this;
	this.instance_4.setTransform(228.8,320.3);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.lightItem();
	this.instance_5.parent = this;
	this.instance_5.setTransform(214.4,206.9);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.lightItem();
	this.instance_6.parent = this;
	this.instance_6.setTransform(287.7,55.1);
	this.instance_6.alpha = 0.699;
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.lightItem();
	this.instance_7.parent = this;
	this.instance_7.setTransform(201.4,71);
	this.instance_7.alpha = 0.699;
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.lightItem();
	this.instance_8.parent = this;
	this.instance_8.setTransform(181.9,124.6);
	this.instance_8.alpha = 0.699;
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.lightItem();
	this.instance_9.parent = this;
	this.instance_9.setTransform(263.8,226.3);
	this.instance_9.compositeOperation = "lighter";

	this.instance_10 = new lib.lightItem();
	this.instance_10.parent = this;
	this.instance_10.setTransform(282.2,189);
	this.instance_10.compositeOperation = "lighter";

	this.instance_11 = new lib.lightItem();
	this.instance_11.parent = this;
	this.instance_11.setTransform(83.2,134.6);
	this.instance_11.compositeOperation = "lighter";

	this.instance_12 = new lib.lightItem();
	this.instance_12.parent = this;
	this.instance_12.setTransform(257,118.2);
	this.instance_12.compositeOperation = "lighter";

	this.instance_13 = new lib.lightItem();
	this.instance_13.parent = this;
	this.instance_13.setTransform(341.9,50.6);
	this.instance_13.compositeOperation = "lighter";

	this.instance_14 = new lib.lightItem();
	this.instance_14.parent = this;
	this.instance_14.setTransform(259.1,40.1);
	this.instance_14.compositeOperation = "lighter";

	this.instance_15 = new lib.lightItem();
	this.instance_15.parent = this;
	this.instance_15.setTransform(324.8,226.3);
	this.instance_15.compositeOperation = "lighter";

	this.instance_16 = new lib.lightItem();
	this.instance_16.parent = this;
	this.instance_16.setTransform(140.6,219.5);
	this.instance_16.compositeOperation = "lighter";

	this.instance_17 = new lib.lightItem();
	this.instance_17.parent = this;
	this.instance_17.setTransform(211.4,234.1);
	this.instance_17.compositeOperation = "lighter";

	this.instance_18 = new lib.lightItem();
	this.instance_18.parent = this;
	this.instance_18.setTransform(122,131.4);
	this.instance_18.compositeOperation = "lighter";

	this.instance_19 = new lib.lightItem();
	this.instance_19.parent = this;
	this.instance_19.setTransform(161,168.2);
	this.instance_19.compositeOperation = "lighter";

	this.instance_20 = new lib.lightItem();
	this.instance_20.parent = this;
	this.instance_20.setTransform(269.5,262.2);
	this.instance_20.compositeOperation = "lighter";

	this.instance_21 = new lib.lightItem();
	this.instance_21.parent = this;
	this.instance_21.setTransform(104.3,188.6);
	this.instance_21.compositeOperation = "lighter";

	this.instance_22 = new lib.lightItem();
	this.instance_22.parent = this;
	this.instance_22.setTransform(120,-43.4);
	this.instance_22.compositeOperation = "lighter";

	this.instance_23 = new lib.lightItem();
	this.instance_23.parent = this;
	this.instance_23.setTransform(219.4,201.9);
	this.instance_23.compositeOperation = "lighter";

	this.instance_24 = new lib.lightItem();
	this.instance_24.parent = this;
	this.instance_24.setTransform(79.8,31.9);
	this.instance_24.compositeOperation = "lighter";

	this.instance_25 = new lib.lightItem();
	this.instance_25.parent = this;
	this.instance_25.setTransform(87.5,21.5);
	this.instance_25.compositeOperation = "lighter";

	this.instance_26 = new lib.lightItem();
	this.instance_26.parent = this;
	this.instance_26.setTransform(126.5,61);
	this.instance_26.compositeOperation = "lighter";

	this.instance_27 = new lib.lightItem();
	this.instance_27.parent = this;
	this.instance_27.setTransform(146.8,26.5);
	this.instance_27.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightMc2, new cjs.Rectangle(0.2,-53.4,351.7,383.7), null);


(lib.lightMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lightItem();
	this.instance.parent = this;
	this.instance.setTransform(20,246.7);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.lightItem();
	this.instance_1.parent = this;
	this.instance_1.setTransform(286.3,209.1);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.lightItem();
	this.instance_2.parent = this;
	this.instance_2.setTransform(165.4,232.6);
	this.instance_2.alpha = 0.699;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.lightItem();
	this.instance_3.parent = this;
	this.instance_3.setTransform(92.3,41.4);
	this.instance_3.alpha = 0.699;
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.lightItem();
	this.instance_4.parent = this;
	this.instance_4.setTransform(174.4,282.2);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.lightItem();
	this.instance_5.parent = this;
	this.instance_5.setTransform(107.9,-28.2);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.lightItem();
	this.instance_6.parent = this;
	this.instance_6.setTransform(184.6,163.8);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.lightItem();
	this.instance_7.parent = this;
	this.instance_7.setTransform(124.7,87.5);
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.lightItem();
	this.instance_8.parent = this;
	this.instance_8.setTransform(296.3,55.6);
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.lightItem();
	this.instance_9.parent = this;
	this.instance_9.setTransform(269.8,75.6);
	this.instance_9.compositeOperation = "lighter";

	this.instance_10 = new lib.lightItem();
	this.instance_10.parent = this;
	this.instance_10.setTransform(220.3,192.7);
	this.instance_10.compositeOperation = "lighter";

	this.instance_11 = new lib.lightItem();
	this.instance_11.parent = this;
	this.instance_11.setTransform(94.9,201.2);
	this.instance_11.compositeOperation = "lighter";

	this.instance_12 = new lib.lightItem();
	this.instance_12.parent = this;
	this.instance_12.setTransform(120,148);
	this.instance_12.compositeOperation = "lighter";

	this.instance_13 = new lib.lightItem();
	this.instance_13.parent = this;
	this.instance_13.setTransform(293.2,250.8);
	this.instance_13.compositeOperation = "lighter";

	this.instance_14 = new lib.lightItem();
	this.instance_14.parent = this;
	this.instance_14.setTransform(67.9,153.6);
	this.instance_14.compositeOperation = "lighter";

	this.instance_15 = new lib.lightItem();
	this.instance_15.parent = this;
	this.instance_15.setTransform(116.9,277.5);
	this.instance_15.compositeOperation = "lighter";

	this.instance_16 = new lib.lightItem();
	this.instance_16.parent = this;
	this.instance_16.setTransform(241.8,281.2);
	this.instance_16.compositeOperation = "lighter";

	this.instance_17 = new lib.lightItem();
	this.instance_17.parent = this;
	this.instance_17.setTransform(71.5,107.1);
	this.instance_17.compositeOperation = "lighter";

	this.instance_18 = new lib.lightItem();
	this.instance_18.parent = this;
	this.instance_18.setTransform(63.6,53.1);
	this.instance_18.compositeOperation = "lighter";

	this.instance_19 = new lib.lightItem();
	this.instance_19.parent = this;
	this.instance_19.setTransform(209.1,98.3);
	this.instance_19.compositeOperation = "lighter";

	this.instance_20 = new lib.lightItem();
	this.instance_20.parent = this;
	this.instance_20.setTransform(345,28.2);
	this.instance_20.compositeOperation = "lighter";

	this.instance_21 = new lib.lightItem();
	this.instance_21.parent = this;
	this.instance_21.setTransform(179,11.1);
	this.instance_21.compositeOperation = "lighter";

	this.instance_22 = new lib.lightItem();
	this.instance_22.parent = this;
	this.instance_22.setTransform(229.3,29.7);
	this.instance_22.compositeOperation = "lighter";

	this.instance_23 = new lib.lightItem();
	this.instance_23.parent = this;
	this.instance_23.setTransform(241.8,174.6);
	this.instance_23.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightMc1, new cjs.Rectangle(10,-38.2,345,330.4), null);


(lib.snowMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.parent = this;
	this.instance.setTransform(0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:627.2},531).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-312,-977.1,623,1339.2);


(lib.particle2Movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_210 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(210).call(this.frame_210).wait(1));

	// Слой 1
	this.instance = new lib.particle2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.43,scaleY:0.43,y:1175.4},199).to({scaleX:0.4,scaleY:0.4,y:1240.3,alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-19.9,35,39.8);


(lib.rainProgram = function(mode,startPosition,loop) {
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
		
		var cloneParticle = new lib.particle2Movie();
		cloneParticle.x = Math.random()*1000;
		cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.7 +.3;
		this.addChild(cloneParticle);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// particles
	this.particle = new lib.particle2Movie();
	this.particle.name = "particle";
	this.particle.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-19.9,35,39.8);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lightMc2();
	this.instance.parent = this;
	this.instance.setTransform(-224,40.6,1.1,1.1,0,0,0,-0.6,0.4);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).wait(5).to({alpha:1},5).wait(6));

	// Слой 3
	this.instance_1 = new lib.lightMc1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-212.6,54.4,1.1,1.1,0,0,0,-0.3,0.2);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},5).wait(5).to({alpha:0},5).wait(6));

	// Слой 5
	this.instance_2 = new lib.lightItem();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-176.8,396.4,1.716,5.066,26.4);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.5},10).to({alpha:1},10).wait(1));

	// Слой 4
	this.instance_3 = new lib.lightItem();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-187,396.1,1.716,5.066,-30);
	this.instance_3.alpha = 0.5;
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},10).to({alpha:0.5},10).wait(1));

	// Слой 6
	this.rain = new lib.rainProgram();
	this.rain.name = "rain";
	this.rain.parent = this;
	this.rain.setTransform(-300,-693.8);

	this.timeline.addTween(cjs.Tween.get(this.rain).wait(21));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(-247.8,-148.2);

	// Слой 7
	this.s1 = new lib.snowMovie();
	this.s1.name = "s1";
	this.s1.parent = this;
	this.s1.setTransform(-0.6,-461.8,4.2,4.2,0,0,180);

	var maskedShapeInstanceList = [this.s1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(21));

	// Слой 8
	this.s1_1 = new lib.snowMovie();
	this.s1_1.name = "s1_1";
	this.s1_1.parent = this;
	this.s1_1.setTransform(-0.6,46.8,2.52,2.52,0,0,180);

	var maskedShapeInstanceList = [this.s1_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.s1_1).wait(21));

	// bg
	this.instance_4 = new lib.bgImg1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-300,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-901.8,-713.7,1308.1,1313.8);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HW
	this.instance = new lib.HW();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).to({alpha:1},5).wait(30).to({alpha:0},5).wait(1));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-184.1,1.423,1.423);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({alpha:1},15).to({_off:true},120).wait(36));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-240.5,1.423,1.423);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({alpha:1},15).to({_off:true},120).wait(36));

	// Слой 6
	this.instance_3 = new lib.snowBg_1();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({alpha:1},20).to({_off:true},135).wait(36));

	// bgImg2
	this.instance_4 = new lib.bgImg2_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({scaleX:0.62,scaleY:0.62,x:0.6,y:-11.2,alpha:0.5},30,cjs.Ease.get(-1)).to({regY:-0.2,scaleX:0.24,scaleY:0.24,x:1.2,y:-22.4,alpha:0},30,cjs.Ease.get(1)).to({_off:true},135).wait(30).to({_off:false,regY:0,scaleX:1,scaleY:1,x:0,y:0,alpha:1},0).wait(6));

	// bgImg1
	this.instance_5 = new lib.bgImg1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.2,229.2,2.08,2.08,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({scaleX:1.29,scaleY:1.29,x:-2.6,y:131},30,cjs.Ease.get(-1)).to({scaleX:0.5,scaleY:0.5,x:0,y:32.8},30,cjs.Ease.get(1)).to({_off:true},135).wait(30).to({_off:false,scaleX:2.08,scaleY:2.08,x:-5.2,y:230.2},0).wait(6));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2723.1,-9267.6,5442.7,11698.4);


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
	this.instance.setTransform(150,300.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2423.2,-8667.4,5442.6,11698.2);
// library properties:
lib.properties = {
	id: 'D51B55F5399649018C9561360BFF9699',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/snow2.png", id:"snow2"},
		{src:"images/snowBg.png", id:"snowBg"}
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
an.compositions['D51B55F5399649018C9561360BFF9699'] = {
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