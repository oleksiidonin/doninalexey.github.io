(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,250);// helper functions:

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


(lib.wog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AG5DDQgngRgegcQgdgcgRgmQgQgoAAgsQAAgrAQgoQASgnAegbQAdgeAogQQAqgPAtAAQBFAAA0AfQAwAeAcA3IhmAqQgOgagXgPQgZgQghAAQgwAAgfAgQgfAgAAAtQAAAyAcAeQAfAgA1ABQAmAAAcgTQAagRAFgZIiBAAIAAhTIDsAAQAJAxgLAtQgLArgcAhQgdAigqATQgrATgzAAQguAAgrgQgAgaDDQgogRgegdQgegbgRgmQgQgpAAgrQAAgrAQgoQARgmAegcQAegeAogPQAogQAuAAQAtAAAqAQQAoAPAeAeQAeAcARAmQAQAoAAArQAAArgQApQgRAmgeAbQgeAdgoARQgqAQgtAAQguAAgogQgAgQhNQgfAgAAAtQAAAtAfAgQAeAgAuAAQAtAAAgggQAfggAAgtQAAgtgfggQgggggtAAQguAAgeAggAl7DCQgRgQgIggIgQhHQgQhFgGglIgDAAQgFAkgRBGIgRBHQgGAggTAQQgSARgbAAQgdAAgSgQQgRgRgLggIhulcIB7AAIAqCZIAKAtQAHAmADAaIAEAAQACgbAIglQACgPAHghIAiiWIBqAAIAiCWIALAwQAGAlADAbIAEAAQADgaAHgmQAGgdAEgQIApiZIB7AAIhuFcQgJAggTARQgRAQgcAAQgcAAgTgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-21.1,148,42.2);


(lib.t3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AA7BPQgUgUABgiQgBghAUgTQAUgUAjAAQAjAAAUAUQATATAAAhQAAAigTAUQgTATgkAAQgkAAgTgTgABVgHQgJAJAAAXQAAAXAJALQAJALAUAAQAUAAAJgLQAKgMAAgWQAAgXgKgJQgJgMgUAAQgUAAgJAMgAkHBPQgTgUAAgiQAAghATgTQAUgUAjAAQAfABASAPQATAPACAaIgjAAQgGgdgdAAQgTAAgKAMQgKAJAAAXQAAAWAKAMQAJALAUAAQAeAAAFgdIAjAAQgCAcgTAPQgSAOgfAAQgjAAgUgTgADbBfIAAiKIAjAAIAACKgAhuBfIAAiKIBSAAQAXAAAKAKQANAJAAASQAAAWgVAIQAKADAHAKQAHAIAAAMQgBASgNAKQgMAKgXAAgAhLBGIAoAAQANAAADgDQAFgEAAgKQAAgIgFgEQgFgEgLAAIgoAAgAhLANIAmAAQAMgBAEgDQAFgDAAgJQAAgJgFgCQgFgFgLAAIgmAAgAD1hBIAAggIAmAAIAAAggAC+hBIAAggIAmAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_7, new cjs.Rectangle(-28.3,-9.8,56.6,19.6), null);


(lib.t3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AqVB7IAAgdIAmAAQADAAACgDIAFgQIhCiPIAmAAIAuBqIAnhqIAkAAIhECoQgEANgIAFQgIAFgMAAgAMVBGIAAhiIhABiIglAAIAAiKIAiAAIAABfIA/hfIAnAAIAACKgAHEBGIAAiKIAkAAIAABuIAuAAIAAhuIAkAAIAABuIAuAAIAAhuIAkAAIAACKgAF+BGIAAhiIhABiIgmAAIAAiKIAiAAIAABfIA/hfIAnAAIAACKgADOBGIAAibIheAAIAACbIgkAAIAAi7ICmAAIAAC7gAkEBGIAAiKIAjAAIAACKgAlCBGIgphAIgSAQIAAAwIgkAAIAAgwIgSgQIgpBAIgpAAIA5hXIg2gzIArAAIA2A3IAAg3IAkAAIAAA3IA3g3IAqAAIg2AzIA5BXgArdBGIAAg2IgpAAQgYAAgMgLQgNgKAAgUIAAgrIAjAAIAAApQAAAJAEAEQAEADAKAAIAlAAIAAg5IAjAAIAACKgAh7ABIAAgcICgAAIAAAcgAkGhaIAAggIAnAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_6, new cjs.Rectangle(-82.4,-12.3,164.8,24.7), null);


(lib.t3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("ALsBXQgNgKgBgTQABgVAPgKQAMgJAjgEIAWgDQAIgCAEgDQADgEAAgEQAAgJgHgEQgGgFgQAAQgQAAgIAFQgGAFgCALIghAAQADgWARgNQARgNAcAAQAdAAAQANQAQANAAAXIAAA8QAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAMAAIAAAdIgVAAQgLAAgGgGQgGgGAAgMQgHAMgOAIQgOAHgSAAQgYAAgNgLgAMiAkQgLAAgJADQgHADgDAEQgDAEAAAFQAAARAYAAQASAAAMgLQAMgLAAgUIAAgDQgNAHgUACgAnhBXQgMgKAAgTQAAgVAOgKQAOgJAhgEIAXgDQAIgCADgDQAFgEAAgEQAAgJgIgEQgGgFgQAAQgQAAgHAFQgIAFgBALIghAAQADgWAQgNQASgNAcAAQAdAAAQANQAQANAAAXIAAA8QAAABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAABAAIALAAIAAAdIgUAAQgMAAgGgGQgFgGgBgMQgIAMgNAIQgOAHgTAAQgXAAgOgLgAmqAkQgLAAgJADQgHADgCAEQgDAEgBAFQABARAWAAQATAAALgLQANgLAAgUIAAgDQgOAHgTACgAp7BPQgUgTAAgjQAAgiAUgSQATgUAkAAQAeAAASAPQATAPADAaIgkAAQgEgcgeAAQgVAAgIALQgKAJAAAYQAAAXAKALQAIALAVAAQAeAAAEgdIAkAAQgDAbgTAPQgSAPgeAAQgkAAgTgTgAtkBXQgNgKAAgTQAAgVAOgKQAOgJAigEIAXgDQAHgCAEgDQAEgEAAgEQAAgJgHgEQgHgFgQAAQgPAAgIAFQgIAGAAAKIgiAAQADgWARgNQARgNAcAAQAdAAAQANQARANgBAXIAAA8QAAABABAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAMAAIAAAdIgVAAQgMAAgFgGQgGgGgBgMQgHAMgOAIQgOAHgSAAQgYAAgNgLgAsuAkQgLAAgIADQgIADgCAEQgDAEAAAFQAAARAXAAQASAAAMgLQANgLAAgUIAAgDQgOAHgUACgAPvBfIAAhiIhABiIgmAAIAAiKIAjAAIAABfIA+hfIAnAAIAACKgAKEBfIAAhuIgxAAIAAgcICHAAIAAAcIgyAAIAABugAIbBfIAAhiIhABiIgmAAIAAiKIAjAAIAABfIA/hfIAmAAIAACKgAFrBfIAAhLIg7AAQgcAAgPgPQgQgOAAgaIAAg5IAlAAIAAA2QAAAQAGAGQAGAGAQAAIA1AAIAAhSIAlAAIAAC7gAhzBfIAAhuIgzAAIAAgcICHAAIAAAcIgyAAIAABugAjdBfIAAhiIhABiIgmAAIAAiKIAiAAIAABfIA/hfIAoAAIAACKgAutBfIAAg5IhAAAIAAA5IgjAAIAAiKIAjAAIAAA0IBAAAIAAg0IAjAAIAACKgAA2AaIAAgcICgAAIAAAcgAOqhFQgNgJgCgTIAeAAQABAIAFADQAFADAJAAQAJAAAFgDQAEgDACgIIAeAAQgBATgNAJQgNAKgXAAQgXAAgMgKgAkihFQgNgJgDgTIAfAAQABAIAFADQAFADAJAAQAJAAAFgDQAEgDACgIIAfAAQgDATgNAJQgMAKgXAAQgWAAgNgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_5, new cjs.Rectangle(-104.1,-9.8,208.3,19.7), null);


(lib.t3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AkgB5IAAjAIAiAAIAAATQAHgLAMgFQANgHAPAAQAfAAARAUQARATAAAiQAAAigRATQgRATgfAAQgdAAgRgUIAABHgAj0gkQgKAKAAAYQAAAWAKALQAJAMATgBQAUABAJgMQAKgLAAgWQAAgYgKgKQgJgLgUAAQgTAAgJALgAHcBjIAAggIheAAIAAAgIgjAAIAAg8IAQAAQACgMAAgUQACgRAAgiIAAgbIB+AAIAABuIARAAIAAA8gAGMAoIA9AAIAAhTIg4AAQAAAzgFAggADMAzQgTgUAAghQAAgiATgTQAVgUAiAAQAkAAATAUQAUATAAAiQAAAhgUAUQgTATgkAAQgiAAgVgTgADmgkQgJAKAAAYQAAAWAJALQAKAMATgBQAUABAKgMQAKgLAAgWQAAgWgKgMQgKgLgUAAQgSAAgLALgAhlAzQgTgUAAghQAAgWAJgQQAJgRAQgJQARgJAVAAQAiABASASQAUAUAAAhIgBALIhuAAQADAjAlAAQAMAAAIgDQAHgDAFgJIAjAAQgGAUgRALQgSALgZAAQgjAAgUgTgAgLgPQgCgQgJgJQgJgHgRAAQgRAAgKAHQgKAKgBAPIBLAAIAAAAgAm6AzQgUgUAAghQAAgWAJgQQAKgRAQgJQAQgJAWAAQAhABAUASQATAUAAAhIAAALIhvAAQAEAjAkAAQAMAAAHgDQAIgDAEgJIAkAAQgFAUgSALQgSALgaAAQgiAAgUgTgAlggPQgCgQgKgJQgJgHgRAAQgQAAgKAHQgKAKgCAPIBMAAIAAAAgAIUBDIAAiKIAjAAIAAA1IArAAQAWAAAOAMQANAKABAUQgBAUgNAMQgMALgYAAgAI3ApIAmAAQAJAAAFgDQAFgFAAgKQAAgKgFgDQgEgEgKAAIgmAAgACMBDIgkgxIglAxIgmAAIA3hFIg1hFIAoAAIAhAvIAjgvIAmAAIg0BEIA2BGgAoQBDIAAibIheAAIAACbIglAAIAAi7ICnAAIAAC7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_4, new cjs.Rectangle(-65.9,-12,131.9,24.1), null);


(lib.t3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AgOBiIAAjAIAhAAIAAATQAHgLANgFQAMgGAPAAQAfAAARAUQARATAAAiQAAAhgRAUQgRATgfAAQgeAAgQgUIAABGgAAdg6QgKAKAAAYQAAAXAKAKQAJALATAAQAUAAAJgLQAJgKAAgXQAAgYgJgKQgJgLgUAAQgTAAgJALgAjuBNIAAghIheAAIAAAhIgjAAIAAg9IAPAAQADgMAAgSQACgSAAgjIAAgbIB+AAIAABuIARAAIAAA9gAk+ARIA9AAIAAhTIg4AAQAAA1gFAegAHGAlQgNgLAAgSQAAgUAPgKQANgJAigFIAXgDQAIgBADgDQAEgEAAgFQAAgJgHgFQgHgEgPAAQgQAAgIAFQgHAFgBAMIghAAQACgYASgMQARgNAcAAQAdAAAQANQAQAMAAAYIAAA8QAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAMAAIAAAcIgVAAQgLAAgGgFQgGgHAAgLQgIAMgNAHQgOAIgTAAQgXAAgOgLgAH9gNQgLAAgJADQgHADgDADQgDAEAAAFQAAARAXAAQATgBALgKQANgLAAgUIAAgCQgOAHgTACgACsAdQgTgUAAghQAAgiATgTQAVgUAiAAQAkAAATAUQAUATAAAiQAAAhgUAUQgTATgkAAQgiAAgVgTgADGg6QgJAKAAAYQAAAXAJAKQAJALAUAAQAUAAAKgLQAJgLAAgWQAAgXgJgLQgKgLgUAAQgUAAgJALgAisAdQgUgUAAghQAAgiAUgTQATgUAjAAQAkAAATAUQAUASAAAjQAAAhgUAUQgTATgkAAQgjAAgTgTgAiTg6QgJALAAAXQAAAWAJALQAKALATAAQAUAAAKgLQAJgKAAgXQAAgYgJgKQgKgLgUAAQgTAAgKALgAo8AlQgNgKAAgTQAAgUAPgKQANgJAigFIAXgDQAIgBADgDQAEgEAAgFQAAgJgHgFQgHgEgPAAQgQAAgIAFQgIAFAAAMIghAAQACgXARgNQASgNAcAAQAdAAAQANQAQAMAAAYIAAA8QAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAMAAIAAAcIgVAAQgLAAgGgFQgGgHAAgLQgHALgPAIQgNAIgTAAQgXAAgOgLgAoFgNQgMAAgIADQgHADgDADQgDAEAAAFQAAARAXAAQATgBALgKQANgLAAgUIAAgCQgOAHgTACgALDAsIglgwIglAwIgmAAIA3hEIg1hGIAoAAIAiAvIAjgvIAmAAIg1BFIA2BFgAFLAsIAAiKIBtAAIAAAdIhKAAIAABtgAqFAsIAAg4IhAAAIAAA4IgjAAIAAiKIAjAAIAAA2IBAAAIAAg2IAjAAIAACKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_3, new cjs.Rectangle(-74.5,-9.8,149.1,19.6), null);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AGAB7IAAi/IAhAAIAAATQAJgMALgFQAMgGAQAAQAfAAARAUQARASAAAiQAAAjgRATQgRATgfAAQgeAAgQgUIAABGgAGrghQgJALAAAWQAAAXAJALQAKALATAAQAUAAAJgLQAJgMAAgWQAAgWgJgLQgJgLgUAAQgTAAgKALgAoRB7IAAi/IAiAAIAAATQAHgMANgFQAMgGAPAAQAfAAARAUQARATAAAhQAAAigRAUQgRATgfAAQgeAAgQgUIAABGgAnlghQgKAKAAAXQAAAXAKALQAJALATAAQAUAAAJgLQAJgLAAgXQAAgXgJgKQgJgLgUAAQgTAAgJALgAgHBmIAAggIheAAIAAAgIgjAAIAAg9IAPAAQADgMAAgTIAChOIB8AAIAABtIASAAIAAA9gAhYAqIA+AAIAAhTIg4AAQAAA2gGAdgAI7A2QgTgUAAgiQAAghATgTQAUgUAjAAQAjAAAUAUQAUATAAAhQAAAigUAUQgUATgjAAQgjAAgUgTgAJVghQgKALAAAWQAAAWAKAMQAJALAUAAQAUAAAJgLQAKgLAAgXQAAgXgKgKQgJgLgUAAQgTAAgKALgADRgOQAAgeAHgTQAGgTAOgKQANgKAWgEIAlgGIACgCIABgDIAAgFIAjAAIAAAFQAAAMgDAGQgDAHgGADQgGAEgKABIg5ALQgMADgGAIQgFAIAAAPIAAAIQAIgLANgGQAOgHAOAAQAgAAAUARQASARAAAdQAAAfgUARQgUARghAAQhLAAAAhXgAD/gTQgKAKAAARQAAARAKALQAKAKASAAQAUAAAJgKQAJgJAAgTQAAgTgJgJQgJgKgUAAQgSAAgKALgAA6A2QgUgTAAgjQAAgiAUgSQATgUAjAAQAkAAATAUQAUASAAAiQAAAjgUATQgTATgkAAQgjAAgTgTgABTghQgJAKAAAXQAAAXAJALQAKALATAAQAUAAAKgLQAJgLAAgXQAAgXgJgKQgKgLgUAAQgTAAgKALgAlWA2QgTgUAAgiQAAghATgTQAVgUAiAAQAkAAATAUQAUATAAAhQAAAigUAUQgTATgkAAQgiAAgVgTgAk8ghQgJAKAAAXQAAAXAJALQAKALATAAQAUAAAKgLQAJgMAAgWQAAgWgJgLQgKgLgUAAQgTAAgKALgApZBGIAAhuIg/AAIAABuIgkAAIAAiKICHAAIAACKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-70.1,-12.3,140.1,24.7), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AIjB7IAAi/IAiAAIAAATQAIgMAMgFQAMgGAPAAQAfAAASAUQARASAAAiQAAAjgRATQgSATgfAAQgdAAgRgUIAABGgAJPghQgJALAAAWQAAAXAJALQAJALATAAQAVAAAJgLQAIgLABgXQgBgWgIgLQgJgLgVAAQgSAAgKALgAkxB7IAAi/IAiAAIAAATQAHgMANgFQAMgGAQAAQAeAAARAUQASATAAAhQAAAigSAUQgRATgeAAQgeAAgRgUIAABGgAkFghQgKAKAAAXQAAAXAKALQAJALAUAAQATAAAJgLQAKgLAAgXQAAgXgKgKQgJgLgTAAQgUAAgJALgAq6BuIAAgoIiCAAIAAAoIgiAAIAAhIIASAAQAHgjAAhUIAAgkICYAAIAACbIAXAAIAABIgAsjhRQABAjgDAlQgCAjgEANIBZAAIAAh9IhRAAgAGFA2QgTgUAAgiQAAghATgTQAVgUAiAAQAkAAATAUQAUATgBAhQABAigUAUQgTATgkAAQgiAAgVgTgAGfghQgKAKABAXQgBAXAKALQAKALATAAQAUAAAJgLQAKgMAAgWQAAgWgKgLQgKgLgTAAQgTAAgKALgABeA2QgUgUAAgiQAAghAUgTQATgUAjAAQAfAAASAPQATAPADAbIgkAAQgFgdgeAAQgTAAgKALQgJALAAAWQAAAXAJALQAKALATAAQAeAAAFgdIAkAAQgDAbgTAPQgSAPgfAAQgjAAgTgTgAnggOQAAgeAHgTQAIgUANgJQANgKAVgEIAlgGIACgCIABgDIAAgFIAjAAIAAAFQAAAMgDAGQgDAHgGADQgGAEgKABIg4ALQgNADgFAIQgGAIAAAPIAAAIQAJgLANgGQAOgHAOAAQAhAAASARQASARABAdQgBAfgTARQgVARghAAQhLAAAAhXgAmygTQgKAKAAARQAAASAKAKQAKAKASAAQAUAAAJgKQAKgJAAgTQAAgTgKgJQgJgKgUAAQgRAAgLALgAp3A2QgUgUAAgiQAAghAUgTQATgUAkAAQAjAAAUAUQATATABAhQgBAigTAUQgUATgjAAQgkAAgTgTgApdghQgKAKAAAXQAAAXAKALQAJALAUAAQAUAAAJgLQAKgLAAgXQAAgXgKgKQgJgLgUAAQgUAAgJALgAMfBGIAAiKIAkAAIAACKgALUBGIAAiKIAjAAIAACKgAEUBGIAAhuIgyAAIAAgcICIAAIAAAcIgzAAIAABugAAIBGIAAiKIAjAAIAACKgAiBBGIAAiKIAkAAIAACKgAM6haIAAggIAlAAIAAAggAMFhaIAAggIAmAAIAAAggALThaIAAggIAkAAIAAAggAAGhaIAAggIAmAAIAAAggAiChaIAAggIAmAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-86.3,-12.3,172.7,24.7), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("ApIDHQgNgLgDgUIAlAAQACAMAQAAQAMAAAFgEQAFgEAAgMIAAgMQgMAMgTAAQgXAAgNgOQgMgQAAgaQAAgaAMgQQANgPAXABQAUgBANAPIAAgMIAiAAIAABrQAAA0g7ABQgagBgMgKgAowBVQgFAGAAAOQAAAOAFAGQAFAHALAAQAMAAAEgHQAGgGAAgOQAAgNgGgHQgFgHgLAAQgKAAgGAHgAkMCeQgKgKAAgPQAAgMAEgIQAGgIALgDQAJgFAVgBIAOgCIAHgCQABgCAAgEQAAgFgDgDQgFgCgIAAQgJAAgDADQgEADgCAGIgiAAQACgTANgLQAOgKAWAAQAZgBAMALQANALAAAVIAAAnIABACIABABIAJAAIAAAgIgVAAQgJAAgEgEQgFgEAAgIQgMASgbAAQgSAAgLgIgAjfBzQgLACgEADQgEACAAAGQAAAKAMAAQALAAAIgHQAHgIAAgKIAAgBQgLADgIAAgAmDCgQgKgGgFgLQgGgMABgNIAAhEIAlAAIAAA+QAAANAEAFQAFAFAKABQAKgBAFgFQAFgHAAgLIAAg+IAkAAIAAByIgjAAIAAgPQgGAJgIADQgJAFgMAAQgNAAgJgGgArOCWQgQgPAAgdQAAgcAQgPQAPgPAcAAQAcAAAPAPQAPAPAAAcQAAAdgPAPQgPAQgcAAQgcAAgPgQgAq0BVQgFAIAAANQAAAOAFAJQAGAGALABQALgBAGgGQAFgJAAgOQAAgNgFgIQgGgHgLAAQgLAAgGAHgAnSCkIAAgsIAnAAIAAAsgAsrCkIgQhHIgRBHIgoAAIgdhyIAkAAIAQBIIAQhIIAkAAIAQBIIAQhIIAjAAIgdBygAFHgMIAAidIAZAAIAAAPQAGgIAJgFQAJgFALAAQAXAAAMAQQAMAQAAAcQAAAcgMAQQgMAPgXAAQgWAAgMgQIAAA5gAFoiMQgHAIAAAUQAAATAHAIQAGAKAOgBQAPABAHgKQAGgIAAgTQAAgUgGgIQgHgJgPAAQgOAAgGAJgApXgMIAAidIAZAAIAAAPQAGgIAJgFQAJgFALAAQAXAAAMAQQAMAQAAAcQAAAcgMAQQgMAPgXAAQgWAAgMgQIAAA5gAo2iMQgHAIAAAUQAAATAHAIQAGAKAOgBQAPABAHgKQAGgIAAgTQAAgUgGgIQgHgJgPAAQgOAAgGAJgAK3hEQgOgQAAgcQAAgcAOgQQAOgQAaAAQAaAAAOAQQAPAQAAAcQAAAcgPAQQgOAPgaAAQgaAAgOgPgALKiMQgHAKAAASQAAASAHAJQAHAKAOgBQAPABAHgKQAHgJAAgSQAAgSgHgKQgHgJgPAAQgOAAgHAJgAHJg9QgKgKAAgOQAAgRALgJQAKgHAZgDIAPgDQAGgBADgDQADgCAAgFQAAgIgGgDQgEgEgMABQgMAAgFADQgEAFgBAJIgZAAQADgTAMgKQANgLATAAQAWAAAMALQALALAAATIAAAxIABADIACABIAJAAIAAAWIgPAAQgIAAgFgEQgDgFgCgKQgFALgKAFQgJAGgOAAQgSAAgJgIgAHwhnQgKAAgEACQgFACgCAEQgCAEgBADQABANAQAAQAOAAAJgIQAIgJABgRIAAgCQgJAFgQADgABZg9QgKgKAAgOQAAgRALgJQAKgHAZgDIAQgDQAFgBADgDQADgCAAgFQAAgIgGgDQgEgEgMABQgLAAgGADQgEAFgBAJIgZAAQADgTAMgKQANgLATAAQAVAAAMALQAMALAAATIAAAxIABADIACABIAJAAIAAAWIgPAAQgJAAgEgEQgDgFgCgKQgFALgKAFQgKAGgNAAQgRAAgKgIgACAhnQgKAAgEACQgFACgCAEQgCAEAAADQAAANAQAAQAOAAAJgIQAJgJAAgRIAAgCQgJAFgQADgAgPhAQgNgKgCgWIAZAAQACAKAEAGQAHAFALAAQALAAAGgDQAGgEAAgIQAAgGgEgEQgFgDgIAAIgOAAIAAgTIAOAAQAOgBAAgNQAAgHgFgEQgGgDgKAAQgLAAgGAFQgEAEgCALIgZAAQADgTANgMQAOgLATAAQAVAAAMAJQAMAJAAAPQAAATgPAHQASAGAAAUQAAAQgNAJQgMAJgYAAQgUAAgNgLgAi2g9QgKgKAAgOQAAgRALgJQAKgHAZgDIAPgDQAGgBADgDQADgCAAgFQAAgIgGgDQgDgEgNABQgLAAgGADQgFAFAAAJIgZAAQADgTAMgKQANgLATAAQAWAAAMALQALALAAATIAAAxIABADIACABIAJAAIAAAWIgPAAQgIAAgFgEQgDgFgBgKQgGALgKAFQgJAGgOAAQgSAAgJgIgAiPhnQgKAAgEACQgFACgCAEQgDAEAAADQAAANARAAQAOAAAJgIQAIgJABgRIAAgCQgJAFgQADgAnNhEQgPgQAAgcQAAgTAHgNQAGgOAMgHQALgGARgBQAZAAANAQQAPAPAAAcIAAAKIhSAAQADAcAbAAQAJAAAEgDQAGgCADgHIAaAAQgEAQgNAJQgMAJgTAAQgaAAgNgPgAmMh7QgDgPgFgFQgHgGgMAAQgNAAgGAGQgIAGgBAOIA3AAIAAAAgArGhEQgPgQAAgcQAAgSAHgOQAGgNAMgIQALgGARgBQAZAAANAQQAPAPAAAcIgBAKIhRAAQAEAcAaAAQAIAAAGgDQAFgCAEgHIAaAAQgFAQgMAJQgNAJgTAAQgZAAgOgPgAqFh7QgBgOgIgGQgGgGgNAAQgMAAgHAGQgGAGgDAOIA4AAIAAAAgANzg4Ighg0IgOAPIAAAlIgZAAIAAhxIAZAAIAAAuIArguIAfAAIgpAqIAtBHgAI7g4IAAhxIA8AAQARAAAIAIQAJAJAAANQAAATgQAHQAJADAFAHQAEAGAAALQAAAPgKAHQgIAJgSgBgAJUhMIAeAAQAJAAADgDQADgDAAgIQAAgGgDgEQgDgDgJAAIgeAAgAJUh6IAcAAQAJAAADgEQADgDAAgHQAAgHgDgDQgEgDgIABIgcAAgAEUg4IAAhaIgvAAIAABaIgZAAIAAhxIBhAAIAABxgAjig4Igeg0IgNAOIAAAmIgaAAIAAgmIgNgOIgeA0IgeAAIAqhHIgngqIAfAAIAnAtIAAgtIAaAAIAAAuIAoguIAfAAIgoAqIAqBHgAsFg4IAAh1IgoB1IgZAAIgoh1IAAB1IgaAAIAAiZIAmAAIApB3IAph3IAkAAIAACZg");
	this.shape.setTransform(-8.1,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-99.5,-23.2,182.8,41.9), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-42.7,-12.9,85.5,25.8), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CC53F").s().p("Ah3gYQgOgcAAgfQAAg4AognQAngnA3AAQA3AAAnAnQAnAnAAA4QAAAggNAbIh4Dyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-21.8,26.8,43.7);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AjPjQQgYgyARg0QATg0AygZQAwgZA1ATQAzARAZAyICqFYQAUAmAAArQAAAsgUAmIhsDdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-40.2,44.3,80.4);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AjPjQQgZgyATg0QARg0AygZQAygZA1ATQAzARAZAyICqFYQATAmAAArQAAAsgTAmIhuDdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-40.2,44.5,80.4);


(lib.logo_gor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019345").s().p("AmrhfQgLgXAIgYQAJgYAXgMQAWgLAZAIQAYAIALAXIBPCfQAJARAAAUQAAAUgJASIgyBmgApQhfQgMgXAJgYQAIgYAXgMQAXgLAYAIQAYAIAMAXIBOCfQAJARAAAUQAAAUgJASIgyBmgAHOByQgSgHgOgNQgNgOgIgRQgHgSAAgVQAAgUAHgRQAIgSAOgNQAOgOASgHQATgHAVAAQAgAAAYAOQAWAOANAZIgvATQgGgLgLgHQgMgHgPAAQgWAAgOAOQgPAOAAAVQAAAXANAOQAPAPAYAAQASAAANgIQAMgIACgMIg8AAIAAgmIBtAAQAEAWgFAVQgFAUgNAQQgNAPgTAJQgUAJgYAAQgVAAgUgIgAD2ByQgSgHgOgOQgOgNgIgRQgHgTAAgUQAAgUAHgRQAIgSAOgNQAOgOASgHQATgHAVAAQAVAAATAHQATAHAOAOQAOANAHASQAIARAAAUQAAAUgIATQgHARgOANQgOAOgTAHQgTAIgVAAQgVAAgTgIgAD7gLQgPAOAAAVQAAAVAPAPQAOAOAVAAQAVAAAPgOQAOgPAAgVQAAgVgOgOQgPgOgVAAQgVAAgOAOgABTByQgIgIgDgOIgIghQgHgggDgRIgBAAQgDAQgHAhIgIAhQgDAOgJAIQgIAIgNAAQgMAAgIgIQgIgHgFgPIgzigIA5AAIATBFIAFAVQACASABAMIACAAQABgNAEgRIAEgWIAQhEIAxAAIAPBEIAFAWIAFAeIABAAIAFgeIAFgVIAThFIA4AAIgyCgQgFAPgIAHQgIAIgNAAQgNAAgJgIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CC53F").s().p("Ag2gLQgHgNAAgOQAAgaATgSQASgSAYAAQAaAAASASQASASAAAaQAAAPgGAMIg4Bwg");
	this.shape_1.setTransform(-20.7,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_gor, new cjs.Rectangle(-60,-18.5,120,37.1), null);


(lib.flag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF4F").s().p("Ahrh+IDgB8QAAACjpCAg");
	this.shape.setTransform(9.4,-119.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF4F").s().p("Ahnh+QATASDFB0QAAABjhB3g");
	this.shape_1.setTransform(9,-119.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDF4F").s().p("Ahih+QAkAjCqBuQABABjYBsg");
	this.shape_2.setTransform(8.5,-119.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDF4F").s().p("Aheh+QA3A2CPBlQABABjQBig");
	this.shape_3.setTransform(8.1,-119.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDF4F").s().p("Ahah+QBKBHB0BeQAAABjHBYg");
	this.shape_4.setTransform(7.7,-119.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDF4F").s().p("AhVh+IC0CwQABABi+BNg");
	this.shape_5.setTransform(7.2,-119.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDF4F").s().p("Ahsh+QAvANCzBjQAAABjrCNg");
	this.shape_6.setTransform(9.5,-119.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFDF4F").s().p("Ahsh+QBcAZCGBLQABABjsCZg");
	this.shape_7.setTransform(9.5,-119.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFDF4F").s().p("Ahth+QCKAlBaAyQAAACjtClg");
	this.shape_8.setTransform(9.6,-119.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFDF4F").s().p("Ahuh+QC5AxAsAaQABACjvCxg");
	this.shape_9.setTransform(9.7,-119.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDF4F").s().p("Ahuh+QDmA+AAABQABABjwC+g");
	this.shape_10.setTransform(9.7,-119.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-132.7,23.4,25.5);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2ECCD").s().p("Egz0Az1Q1f1eAA+XQAA+WVf1eQVe1feWAAQeXAAVeVfQVfVeAAeWQAAeX1fVeQ1eVf+XAAQ+WAA1e1fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-469.1,-469.1,938.3,938.3), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egz0Az1Q1f1eAA+XQAA+WVf1eQVe1feWAAQeXAAVeVfQVfVeAAeWQAAeX1fVeQ1eVf+XAAQ+WAA1e1fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-469.1,-469.1,938.3,938.3), null);


(lib.logo_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApGiBIgBgCIABgCIACgBIACABIABACIgBACIgCABIgCgBg");
	var mask_graphics_1 = new cjs.Graphics().p("ApKhWQgKgLAAgPQAAgOAKgLQALgKAPAAQAPAAAKAKQAKALAAAOQAAAPgKALQgKAKgPAAQgPAAgLgKg");
	var mask_graphics_2 = new cjs.Graphics().p("ApNgrQgVgUAAgdQAAgdAVgUQAUgUAcAAQAdAAAUAUQAUAUAAAdQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	var mask_graphics_3 = new cjs.Graphics().p("ApRAAQgegeAAgqQAAgrAegdQAegeAqAAQAqAAAeAeQAeAdAAArQAAAqgeAeQgeAdgqAAQgqAAgegdg");
	var mask_graphics_4 = new cjs.Graphics().p("ApiAdQgngmAAg4QAAg4AngoQAognA4AAQA4AAAoAnQAnAoAAA4QAAA4gnAmQgoAog4AAQg4AAgogog");
	var mask_graphics_5 = new cjs.Graphics().p("ApiBQQgxgxAAhEQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABEgxAxQgxAxhFAAQhEAAgxgxg");
	var mask_graphics_6 = new cjs.Graphics().p("ApjCDQg6g6AAhRQAAhSA6g5QA6g6BSAAQBSAAA6A6QA5A5AABSQAABRg5A6Qg6A6hSAAQhSAAg6g6g");
	var mask_graphics_7 = new cjs.Graphics().p("ApjCiQhDhDAAhfQAAheBDhDQBDhDBeAAQBfAABDBDQBDBDAABeQAABfhDBDQhDBDhfAAQheAAhDhDg");
	var mask_graphics_8 = new cjs.Graphics().p("ApkC4QhMhMAAhsQAAhrBMhMQBMhMBsAAQBsAABMBMQBMBMAABrQAABshMBMQhMBMhsAAQhsAAhMhMg");
	var mask_graphics_9 = new cjs.Graphics().p("AplDOQhVhVAAh5QAAh4BVhVQBWhVB4AAQB5AABVBVQBVBVAAB4QAAB5hVBVQhVBVh5AAQh4AAhWhVg");
	var mask_graphics_10 = new cjs.Graphics().p("AplDkQhfheAAiGQAAiFBfheQBeheCGAAQCFAABfBeQBeBeAACFQAACGheBeQhfBeiFAAQiGAAheheg");
	var mask_graphics_11 = new cjs.Graphics().p("ApmD6QhnhnAAiTQAAiSBnhnQBohoCSAAQCTAABnBoQBoBnAACSQAACThoBnQhnBoiTgBQiSABhohog");
	var mask_graphics_12 = new cjs.Graphics().p("ApmEQQhxhwAAigQAAifBxhwQBwhxCgAAQCfAABxBxQBvBwAACfQAACghvBwQhxBxifAAQigAAhwhxg");
	var mask_graphics_13 = new cjs.Graphics().p("ApnEmQh6h5AAitQAAisB6h5QB6h6CsAAQCtAAB5B6QB5B5AACsQAACth5B5Qh5B6itAAQisAAh6h6g");
	var mask_graphics_14 = new cjs.Graphics().p("AplE8QiDiDAAi5QAAi4CDiDQCDiDC5AAQC6AACBCDQCDCDAAC4QAAC5iDCDQiBCDi6AAQi5AAiDiDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-58.4,y:-13.5}).wait(1).to({graphics:mask_graphics_1,x:-59.7,y:-14.8}).wait(1).to({graphics:mask_graphics_2,x:-61.1,y:-16.2}).wait(1).to({graphics:mask_graphics_3,x:-62.4,y:-17.5}).wait(1).to({graphics:mask_graphics_4,x:-65,y:-20.1}).wait(1).to({graphics:mask_graphics_5,x:-66,y:-20.4}).wait(1).to({graphics:mask_graphics_6,x:-67,y:-20.6}).wait(1).to({graphics:mask_graphics_7,x:-67.9,y:-18.9}).wait(1).to({graphics:mask_graphics_8,x:-68.9,y:-16.3}).wait(1).to({graphics:mask_graphics_9,x:-69.9,y:-13.6}).wait(1).to({graphics:mask_graphics_10,x:-70.9,y:-11}).wait(1).to({graphics:mask_graphics_11,x:-71.8,y:-8.4}).wait(1).to({graphics:mask_graphics_12,x:-72.8,y:-5.8}).wait(1).to({graphics:mask_graphics_13,x:-73.8,y:-3.1}).wait(1).to({graphics:mask_graphics_14,x:-74.5,y:-0.3}).wait(15));

	// p1
	this.instance = new lib.p1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-107.7,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29));

	// Слой_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_3 = new cjs.Graphics().p("AmTiCIgBgCIABgCIACgBIACABIABACIgBACIgCAAIgCAAg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AmXhXQgKgLAAgPQAAgPAKgKQALgLAOAAQAPAAALALQAKAKAAAPQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AmbgsQgUgVAAgcQAAgdAUgUQAUgUAdAAQAdAAAUAUQAUAUAAAdQAAAcgUAVQgUAUgdAAQgdAAgUgUg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AmegBQgegeAAgrQAAgqAegeQAdgeArAAQAqAAAeAeQAeAeAAAqQAAArgeAeQgeAcgqAAQgrAAgdgcg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AmvAcQgngnAAg4QAAg3AngoQAogoA4AAQA4AAAnAoQAoAoAAA3QAAA4goAnQgnAng4AAQg4AAgogng");
	var mask_1_graphics_8 = new cjs.Graphics().p("AmvBPQgxgxAAhEQAAhFAxgwQAwgxBFAAQBFAAAxAxQAwAwAABFQAABEgwAxQgxAwhFAAQhFAAgwgwg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AmwCCQg6g6AAhRQAAhSA6g6QA6g5BSAAQBSAAA5A5QA6A6AABSQAABRg6A6Qg5A5hSAAQhSAAg6g5g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AmxCiQhDhDAAhfQAAheBDhDQBDhDBfAAQBfAABDBDQBDBDAABeQAABfhDBDQhDBDhfAAQhfAAhDhDg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AmxC4QhMhMAAhsQAAhrBMhMQBMhMBsAAQBrAABMBMQBLBMAABrQAABshLBMQhMBMhrAAQhsAAhMhMg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AmyDOQhVhVAAh5QAAh4BVhVQBVhVB5AAQB5AABVBVQBUBVAAB4QAAB5hUBVQhVBVh5AAQh5AAhVhVg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AmyDkQhfheAAiGQAAiFBfheQBeheCGAAQCFAABdBeQBfBeAACFQAACGhfBeQhdBeiFAAQiGAAheheg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AmzD6QhohnAAiTQAAiSBohnQBnhoCTAAQCTAABmBoQBnBnAACSQAACThnBnQhmBoiTAAQiTAAhnhog");
	var mask_1_graphics_15 = new cjs.Graphics().p("Am0EQQhwhwAAigQAAifBwhwQBxhxCfAAQCgAABwBxQBwBwAACfQAACghwBwQhwBxigAAQifAAhxhxg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Am0EmQh6h5AAitQAAisB6h5QB5h6CtAAQCrAAB6B6QB6B5AACsQAACth6B5Qh6B6irAAQitAAh5h6g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AmyE8QiDiDAAi5QAAi4CDiDQCCiDC6AAQC4AACDCDQCDCDAAC4QAAC5iDCDQiDCDi4AAQi6AAiCiDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_1_graphics_3,x:-40.5,y:-13.6}).wait(1).to({graphics:mask_1_graphics_4,x:-41.8,y:-15}).wait(1).to({graphics:mask_1_graphics_5,x:-43.2,y:-16.3}).wait(1).to({graphics:mask_1_graphics_6,x:-44.5,y:-17.7}).wait(1).to({graphics:mask_1_graphics_7,x:-47.1,y:-20.2}).wait(1).to({graphics:mask_1_graphics_8,x:-48.1,y:-20.5}).wait(1).to({graphics:mask_1_graphics_9,x:-49.1,y:-20.7}).wait(1).to({graphics:mask_1_graphics_10,x:-50.1,y:-19.1}).wait(1).to({graphics:mask_1_graphics_11,x:-51,y:-16.5}).wait(1).to({graphics:mask_1_graphics_12,x:-52,y:-13.9}).wait(1).to({graphics:mask_1_graphics_13,x:-53,y:-11.3}).wait(1).to({graphics:mask_1_graphics_14,x:-54,y:-8.6}).wait(1).to({graphics:mask_1_graphics_15,x:-54.9,y:-6}).wait(1).to({graphics:mask_1_graphics_16,x:-55.9,y:-3.4}).wait(1).to({graphics:mask_1_graphics_17,x:-56.6,y:-0.6}).wait(12));

	// p2
	this.instance_1 = new lib.p2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.8,0);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(26));

	// p3
	this.instance_2 = new lib.p3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-44.7,3.5,0.02,0.02,0,0,0,-2.5,20);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({regX:0,regY:21.8,scaleX:1,scaleY:1},6).wait(10));

	// Слой_7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_17 = new cjs.Graphics().p("ArFJvQkBkCAAltQAAlsEBkCQECkBFtAAQFsAAEBEBQECECAAFsQAAFtkCECQkBEBlsAAQltAAkCkBg");
	var mask_2_graphics_18 = new cjs.Graphics().p("Ap2JvQkCkCAAltQAAlsECkCQEBkBFtAAQFtAAEBEBQECECgBFsQABFtkCECQkBEBltAAQltAAkBkBg");
	var mask_2_graphics_19 = new cjs.Graphics().p("ApuJvQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_2_graphics_20 = new cjs.Graphics().p("ApuJvQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ApuJvQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_2_graphics_22 = new cjs.Graphics().p("ApuJvQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_2_graphics_23 = new cjs.Graphics().p("ApuJvQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_2_graphics_24 = new cjs.Graphics().p("ApuJvQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_2_graphics_25 = new cjs.Graphics().p("ApuJvQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_2_graphics_26 = new cjs.Graphics().p("ApuJvQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_2_graphics_27 = new cjs.Graphics().p("ApuJvQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_2_graphics_17,x:-96.7,y:4.1}).wait(1).to({graphics:mask_2_graphics_18,x:-88.9,y:4.1}).wait(1).to({graphics:mask_2_graphics_19,x:-73.9,y:4.1}).wait(1).to({graphics:mask_2_graphics_20,x:-58.2,y:4.1}).wait(1).to({graphics:mask_2_graphics_21,x:-42.4,y:4.1}).wait(1).to({graphics:mask_2_graphics_22,x:-26.7,y:4.1}).wait(1).to({graphics:mask_2_graphics_23,x:-10.9,y:4.1}).wait(1).to({graphics:mask_2_graphics_24,x:4.8,y:4.1}).wait(1).to({graphics:mask_2_graphics_25,x:20.6,y:4.1}).wait(1).to({graphics:mask_2_graphics_26,x:36.3,y:4.1}).wait(1).to({graphics:mask_2_graphics_27,x:52.1,y:4.1}).wait(2));

	// wog
	this.instance_3 = new lib.wog("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(56,5.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,-26.9,0.5,0.5);


(lib.hand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.flag();
	this.instance.parent = this;
	this.instance.setTransform(38.7,-84.6,3.06,3.06,0,0,0,9.4,-119.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.hand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_mc, new cjs.Rectangle(-33,-125,107.5,250), null);


(lib.hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hand_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,125,1,1,0,0,0,0,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10,x:0.1},5,cjs.Ease.get(1)).to({rotation:0,x:0},5,cjs.Ease.get(-1)).to({rotation:10},5,cjs.Ease.get(1)).wait(1).to({regX:21.8,regY:0,rotation:9.6,x:42.3,y:5.4},0).wait(1).to({rotation:8.4,x:39.8,y:4.5},0).wait(1).to({rotation:6.4,x:35.5,y:3.2},0).wait(1).to({regX:0.1,regY:125,rotation:3.5,x:0.1,y:125},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-125,107.5,250);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcXtInHhQIwV5hIK8w4IQ8h5IQ9h4IK8PVI6cd+Il5CHIAAAAg");
	mask.setTransform(-94.5,-32.3);

	// Слой_3
	this.instance = new lib.hand_1();
	this.instance.parent = this;
	this.instance.setTransform(-118,11);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bgImg.jpg
	this.instance_1 = new lib.bgImg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-151,-300,301,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-30,263.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).wait(1));

	// logo_anim
	this.instance_1 = new lib.logo_anim("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).wait(55).to({startPosition:28},0).to({alpha:0},10).wait(1));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(452.9,-656.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({x:70,y:-104},15,cjs.Ease.cubicInOut).wait(55).to({alpha:0},10).wait(1));

	// logo_gor
	this.instance_3 = new lib.logo_gor();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47.3,-257.4,1.392,1.392,0,0,0,-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(235));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-53.6,-190.2,1.6,1.6,0,0,0,-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(235));

	// t3_7
	this.instance_5 = new lib.t3_7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-90.8,140);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({alpha:1},10).to({_off:true},50).wait(66));

	// t3_6
	this.instance_6 = new lib.t3_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-37,114.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({_off:false},0).to({alpha:1},10).to({_off:true},55).wait(66));

	// t3_5
	this.instance_7 = new lib.t3_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-14.2,84);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({alpha:1},10).to({_off:true},60).wait(66));

	// t3_4
	this.instance_8 = new lib.t3_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-52.3,58.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(94).to({_off:false},0).to({alpha:1},10).to({_off:true},65).wait(66));

	// t3_3
	this.instance_9 = new lib.t3_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-43.8,5.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).to({alpha:1},10).to({_off:true},85).wait(66));

	// t3_2
	this.instance_10 = new lib.t3_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-48.3,-25.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({_off:false},0).to({alpha:1},10).to({_off:true},90).wait(66));

	// t3_1
	this.instance_11 = new lib.t3_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-33.5,-53.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(64).to({_off:false},0).to({alpha:1},10).to({_off:true},95).wait(66));

	// bg
	this.instance_12 = new lib.bg2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(452.9,-656.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},0).to({x:70,y:-104},15,cjs.Ease.cubicInOut).to({_off:true},105).wait(66));

	// bgImg
	this.instance_13 = new lib.bgImg_1();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(235));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.9,-300,423,600);


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
p.nominalBounds = new cjs.Rectangle(27.1,299,424,602);
// library properties:
lib.properties = {
	id: 'C6CFCF143BE44602932F386B1A77FDC2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/hand.png", id:"hand"}
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
an.compositions['C6CFCF143BE44602932F386B1A77FDC2'] = {
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