(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,260);// helper functions:

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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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AAQAFAAAEgCQAEgDAAgEQAAgEgEgCQgDgCgGAAIgHAAIAAgHIAHAAQAFAAADgCQADgDAAgDQAAgEgDgCQgEgCgEAAQgJAAgHAFIgDgFQAIgHAMAAQAJAAAEAEQAFAEAAAGQAAAJgIADQAKAEAAAJQAAAGgGAFQgFAEgKAAQgMAAgJgIgAIFgmIAEgFQAHAGAKAAQAFAAAEgCQAEgDAAgEQAAgEgEgCQgDgCgGAAIgHAAIAAgHIAHAAQAFAAADgCQADgDAAgDQAAgEgDgCQgEgCgEAAQgJAAgHAFIgDgFQAIgHAMAAQAJAAAEAEQAFAEAAAGQAAAJgIADQAKAEAAAJQAAAGgGAFQgFAEgKAAQgMAAgJgIgAEjgmQgIgJAAgKQAAgLAIgIQAIgIALAAQAMAAAJAJIgFAGQgIgIgIAAQgIAAgFAGQgGAGAAAIQAAAJAGAFQAFAGAIAAQAJAAAHgHIAFAEQgJAKgMAAQgLAAgIgIgACWgmQgIgHAAgMQAAgKAIgJQAHgIALAAQANAAAIAKIgEAFQgHgIgJAAQgGAAgGAFQgFAFgCAHIAYAAIAAAGIgYAAQABAIAGAFQAGAFAGAAQAJAAAHgJIAFAFQgEAGgFACQgFACgHAAQgLAAgIgIgABagiQgFgFAAgHQAAgIAGgFQAGgEAKAAQAHAAAJACIAAgCQAAgHgEgDQgEgEgIAAQgGAAgJAEIgDgGQAKgFAJAAQAMAAAFAGQAFAGAAAJIAAAgIgHAAIAAgIQgHAJgMAAQgIAAgGgEgABhg2QgEACAAAGQAAAEADADQAEADAGAAQAHAAAFgEQAFgEAAgGIAAgFQgJgCgGAAQgHAAgEADgAgRglQgHgGgBgLIgMAAIAAAXIgHAAIAAg0IAHAAIAAAXIAMAAQABgLAHgGQAHgHAKAAQALAAAHAIQAHAIAAALQAAALgHAIQgIAIgKAAQgKAAgHgHgAgNhHQgEAGAAAIQAAAJAFAGQAEAFAIAAQAHAAAFgFQAFgGAAgJQAAgJgFgFQgFgGgHAAQgHAAgGAGgAlgglQgIgIAAgMQAAgLAIgIQAGgIALAAQAMAAAGAIQAGAIAAAMIAAACIgpAAQABAIAFAFQAGAEAGAAQAKAAAHgHIAFAEQgJAKgNAAQgLAAgHgHgAk+g8QgBgHgEgFQgFgFgHAAQgHAAgEAFQgFAEgBAIIAi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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-138.8,-10.4,277.8,20.8), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACjAnQgPgQAAgXQAAgVAPgQQAQgQAYAAQAXAAAQAQQAPAPAAAWQAAAXgPAPQgQAQgYAAQgXAAgQgPgACxgZQgKALAAAOQAAAQAKALQAKALAQAAQAPAAAKgLQAKgLAAgQQAAgOgKgLQgKgLgQAAQgPAAgKALgAqRAnQgPgPAAgYQAAgVAPgQQAQgQAXAAQAXAAASAOIgMAOQgNgLgQAAQgPAAgKALQgKALAAAOQAAARAKAKQAKALAQAAQAPAAALgIIAAgUIgbAAIAAgPIAsAAIAAArQgSAQgZAAQgZAAgPgPgAsPAnQgQgQAAgXQAAgVAQgQQAQgQAYAAQAXAAAQAQQAPAPAAAWQAAAXgPAPQgQAQgYAAQgYAAgPgPgAsBgZQgKALAAAOQAAAQAKALQAKALAQAAQAPAAAKgLQAKgLAAgQQAAgOgKgLQgKgLgQAAQgPAAgKALgAHgA1IgahKIgaBKIgQAAIglhoIAUAAIAZBNIAahOIAQAAIAaBOIAZhNIATAAIglBogANsA1IAAgVIAUAAIAAAVgAMBA1IAAhoIAnAAQAZAAAQAPQAPAPAAAVQAAAXgPAPQgQAPgZAAgAMUAkIAUAAQARAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgRAAIgUAAgALWA1IgaglIgXAAIAAAlIgSAAIAAhoIAvAAQASAAAKAJQALAJAAAPQAAAYgZAHIAcAogAKlAAIAbAAQAWAAAAgRQAAgRgWAAIgbAAgAJrA1IgLgaIgyAAIgKAaIgTAAIAuhpIARAAIAuBpgAJZALIgSgpIgSApIAkAAgAFaA1IgaglIgXAAIAAAlIgSAAIAAhoIAvAAQASAAAKAJQALAJAAAPQAAAYgZAHIAcAogAEpAAIAbAAQAWAAAAgRQAAgRgWAAIgbAAgAA1A1IAAhoIBOAAIAAARIg7AAIAAAcIA1AAIAAAQIg1AAIAAArgAggA1IAAgVIAUAAIAAAVgAhHA1IgaglIgXAAIAAAlIgTAAIAAhoIAvAAQATAAAKAJQAKAJAAAPQAAAYgZAHIAdAogAh4AAIAbAAQAKAAAGgEQAFgFAAgIQAAgRgVAAIgbAAgAjuA1IAAhoIBOAAIAAAQIg7AAIAAAcIA0AAIAAAPIg0AAIAAAcIA8AAIAAARgAkdA1IAAgtIgyAAIAAAtIgSAAIAAhoIASAAIAAArIAyAAIAAgrIATAAIAABogAmrA1IAAhXIghAAIAAgRIBVAAIAAARIghAAIAABXgAooA1IAAhoIBOAAIAAAQIg7AAIAAAcIA1AAIAAAPIg1AAIAAAcIA8AAIAAARgAteA1IAAhXIghAAIAAgRIBVAAIAAARIghAAIAABXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-89.5,-5.4,179.1,10.9), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJZEJQgZgXAAgoQAAgiAQgeQASgeAcgTQAegSAhAAQAdAAATANQAVAMALAUIgVANQgKgSgOgJQgOgJgXAAQgoAAgdAhQgeAgAAArQAAAfATAQQASASAdAAQAkABAdgdIAQAQQgjAigvABQgnAAgZgYgAFgEHQgagbAAgnQAAggAQgdQAQgcAdgTQAcgSAiAAQApAAAZAaQAaAaAAAnQAAAigQAbQgQAfgcARQgcARgiABQgpAAgagagAGOBsQgWAPgMAYQgNAYAAAaQAAAeATAUQATAUAfAAQAbAAAWgPQAWgPANgYQAMgZAAgZQAAgegTgUQgTgUgfAAQgaAAgXAPgAxfEXIAOgTQAMAHANAAQAZAAAZgfIgxihIAaAAIApCJIBniJIAcAAIh+CmQgkAvgmABQgaAAgMgKgAQMEdIAIgfIAcAAIgIAfgAO3EdIA5jSIAXAAIg4DSgAMzEdIAyi9IhHAAIAGgVICmAAIgGAVIhHAAIgzC9gADeEdIAaheIh4AAIgZBeIgYAAIA4jSIAYAAIgZBdIB4AAIAZhdIAYAAIg5DSgAiMEdIA4jSIBPAAQAdAAASANQARANAAAXQAAAVgOAOQgPAQgXAEQAlAMAAAfQAAAcgYARQgXASgoAAgAhvEIIBGAAQAdgBAPgKQARgLAAgVQAAgPgNgJQgMgHgXAAIg/AAgAhVCoIA7AAQAbAAARgLQARgLAAgTQAAgPgLgIQgMgIgTAAIg7AAgAjaEdIAWhQIg5AAIhQBQIgeAAIBUhTQgqgMAAgqQAAgiAbgUQAbgTAuAAIBTAAIg4DSgAkWBuQgTANAAAZQAAASANAJQAMAKAYAAIA5AAIAYhZIg2AAQgkAAgVAOgAmbEdIgKg4IhyAAIgoA4IgaAAICYjTIAXAAIAnDTgAmpDQIgThrIhMBrIBfAAgAqbEdIAaheIh4AAIgZBeIgYAAIA4jSIAYAAIgZBdIB4AAIAZhdIAYAAIg5DSgAQjDiIAdiGIAFgRIAbAAIgwCXgAhXhgQgagbAAgnQAAggAQgdQAQgcAdgTQAcgSAhAAQApAAAZAaQAaAaAAAnQAAAigQAbQgQAfgcARQgdASggAAQgoAAgbgagAgpj7QgWAPgMAYQgNAYAAAaQAAAeATAUQATAUAfAAQAaAAAWgPQAWgPANgYQAMgZAAgZQAAgegTgUQgTgUgfAAQgZAAgXAPgAFKhQIAOgTQAMAHANAAQAZAAAZgfIgxihIAaAAIApCJIBniJIAcAAIh+CmQgkAvgmABQgaAAgMgKgAoGhRQgUgKgLgSIASgNQAVAfAogBQAYABAPgMQAPgNAAgRQAAgTgOgIQgOgKgVAAIgTAAIAFgUIAVAAQAdAAAQgMQASgKAAgUQAAgPgMgKQgMgJgUAAQgcAAgbAUIgNgQQAfgaAnAAQAdAAATAPQATAPAAAXQAAAWgQAPQgRAPgcAEQASAGALALQALALAAATQAAAagXASQgXARgiABQgcAAgTgLgAB3hKIA4jSIBPAAQAeAAASANQARANAAAXQAAAVgOAOQgPAQgXAEQAlAMAAAfQAAAcgYARQgYASgoAAgACUhfIBGAAQAdgBAQgKQARgLAAgVQAAgPgNgJQgNgHgXAAIg/AAgACui/IA7AAQAcAAARgLQARgLAAgTQAAgPgLgIQgMgIgUAAIg7AAgAjZhKIAaheIh4AAIgZBeIgYAAIA4jSIAYAAIgZBdIB4AAIAZhdIAYAAIg5DSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-111.9,-28.8,224,57.7), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AO4EfIAZhfIh3AAIgZBfIgYAAIA4jSIAYAAIgZBdIB4AAIAZhdIAXAAIg4DSgALWEfIAuitIirCtIgWAAIA4jSIAYAAIguCsICrisIAWAAIg4DSgAF7EfIA4jSIBCAAQAoAAAUATQAPAPAAAYQAAAkgdAUQgaAVgwAAIgzAAIgUBLgAGsC/IAtAAQAmAAAUgOQAVgPAAgZQgBgPgJgKQgNgOgdAAIgvAAgAE+EfIgKg4IhyAAIgoA4IgaAAICYjUIAXAAIAnDUgAEwDSIgThsIhMBsIBfAAgABCEfIAuirIhrBxIgBAAIgthwIguCqIgYAAIA5jSIAXAAIAsByIBrhyIAaAAIg5DSgAisEfIgJg4IhyAAIgoA4IgbAAICZjUIAXAAIAnDUgAi5DSIgThsIhNBsIBgAAgAoxEfIA5jSIBOAAQAfAAARANQASANAAAXQAAAVgOAPQgQAOgWAFQAkALABAgQgBAcgXARQgYASgoAAgAoTEJIBGAAQAdAAAQgLQAQgLAAgUQABgPgNgJQgNgIgXAAIg/AAgAn6CqIA8AAQAcAAARgLQARgLAAgTQAAgPgMgIQgLgIgUAAIg8AAgAp1EfIg0hoIg9AyIgPA2IgXAAIA4jSIAYAAIghB8ICWh8IAiAAIhxBcIA7B2gAtJEfIgKg4IhzAAIgnA4IgaAAICYjUIAXAAIAnDUgAtXDSIgThsIhMBsIBfAAgAqHhYQgfAUghAAQgoAAgagbQgagaAAgnQAAggAQgdQAQgcAdgTQAcgSAiAAQAoAAAZAaQAaAaAAAnQABAbgLAYQgMAZgTASIAVAYIgSANgArbj5QgXAPgMAYQgMAXAAAbQAAAeATAUQATAUAfAAQAbAAAVgQIghgmIATgOIAfAnQAfggAAgrQAAgegTgUQgTgUgfAAQgbAAgWAPgALchfQgagaAAgnQAAggAQgdQAQgcAdgTQAcgSAiAAQApAAAZAaQAaAaAAAnQgBAigQAbQgPAegdASQgcASgiAAQgoAAgagbgAMKj5QgWAPgNAYQgMAXAAAbQAAAeATAUQATAUAeAAQAcAAAWgPQAWgPANgYQAMgZAAgZQAAgegTgUQgTgUgfAAQgaAAgXAPgAoPhfQgagaAAgnQAAggAQgdQAQgcAdgTQAcgSAiAAQApAAAZAaQAaAaAAAnQAAAhgQAcQgRAegcASQgcASgiAAQgoAAgagbgAnhj5QgWAPgNAYQgMAXAAAbQAAAeATAUQATAUAfAAQAbAAAWgPQAWgPANgYQAMgZAAgZQAAgegTgUQgTgUgfAAQgaAAgXAPgAgUhQQgTgKgKgUIATgMQASAgAlAAQAZAAARgOQAQgMAAgVQAAgSgOgJQgPgJgZAAIgJAAIgEgNIBVhLIhnAAIAGgVICIAAIgEARIhWBLQAaACAQANQAQAOAAAWQAAAegYAUQgZAUgjAAQgaAAgSgLgAHyhYQgVgSABgeQgBgRAFgQIAehxIAYAAIggB3QgDALAAANQAAAWAOANQAOANAbAAQAbAAAUgTQASgTAIggIAhh5IAYAAIgiB9QgLAogWAWQgZAagoAAQglAAgTgTgAlGhtIASgOQAbAgArAAQAXAAAOgLQAPgLABgRQgBgMgIgJQgKgIgZgJQgfgOgNgLQgNgMAAgUQAAgZAVgSQAWgRAiAAQAwAAAbAfIgRAQQgZgagjAAQgVAAgPALQgOALAAAPQAAAMAKAIQALAJAaAJQAdAMALAMQAOAMAAAUQgBAcgWASQgXASgiAAQg5AAgdgogADlhIIA4jSIAzAAQA2AAAcAbQAWAYAAAlQAAAwggAiQgpAohDAAgAECheIAtAAQA1AAAighQAagbAAgnQAAgdgRgRQgXgWgpAAIggAAgAuMhIIA4jSIAYAAIg5DSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-103.2,-28.7,206.5,57.4), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwByIglgkIh3AAQgcAAgTgFQgYgGgOgNQgTgTAAgjIAAhlQgBgHAGgFQAEgEAIAAICDAAQAdAAASAGQAZAEAOAOQASARABAlIAABkIAdAeQAEAEABAGQgBAGgFAFQgFAFgGAAQgGAAgEgDgAlTAAQABAZANAMIABABQANAKAaACICEAAIAAhZQgBgZgLgMIgDgCQgMgKgbgBIiEAAgAEoBNQglgBgRgLQgMgIgDgPIAAgEQABgGAEgEQAFgDAFAAQAHAAAFADQADADACAEIABADQAFAGAHADQAIADAPAAIBHAAQAnAAAMgGQAFgCACgHQACgFABgJIAAgCQgBgOgFgFQgKgHgZAAIhgAAQghABgOgMQgNgNAAgaIAAgMQAAgXARgMQAVgMA1gBIA0AAQAqAAASALQAPAJACAQIAAADQAAAGgDADQgGAFgGAAQgGAAgFgEQgEgCgBgEIgBgDQgFgIgMgCQgJgCgYgBIg1AAQghAAgKAGQgKAEAAAQIAAAHQAAAMAGAGQAIAFAWAAIBSAAQAoAAARAJQAWAMAAAiQAAAlgeAMQgRAHgmAAgAAgBNQguAAgYgOQghgRAAguIAAgnQAAgvAhgSQAYgNAuAAIAtAAQAvAAAYANQAgASAAAvIAAAnQAAAuggARQgYAOgvAAgAgVhQQgRANAAAdIAAAmQAAAcARAMQAOAKAdAAIBAAAQAeAAAPgKQARgMAAgcIAAgmQAAgdgRgNQgPgKgeAAIhAAAQgdAAgOAKgAnFBJQgFgFAAgHIAAihQAAgIAFgDQAEgGAHAAQAIAAAEAGQAEADABAIIAAChQgBAHgEAFQgEAEgIAAQgHAAgEgEg");
	this.shape.setTransform(2.6,0.5,1,1,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-43.9,-11.2,91.8,23.5), null);


(lib.dev_3duo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC2ClIAgghQArAwA5gBQA4ABAtguQAagYARgkQASglADgkQgSAbgfASQgfASgpABQg9gBgkgiQgkgjAAg0QABhAAvgsQAvgtBFAAQBAgBAmAmQAqArAABMQAABAgXA5QgWA4gnAnQg+A9hMAAQhMAAg1g6gAEziKQghAgAAAtQAAAkAYAYQAZAYAtAAQAxAAAhgfQAhgfAAgrQAAglgYgYQgbgbgsAAQgxABggAfgAjFClIAgghQArAwA5gBQA4ABAsguQAagYARgkQASglADgkQgSAbgfASQgfASgoABQg9gBgkgiQgkgjAAg0QABhAAvgsQAvgtBEAAQBAgBAmAmQAqArAABMQAABAgXA5QgWA4gnAnQg+A9hLAAQhMAAg1g6gAhIiKQghAgAAAtQAAAkAYAYQAZAYAtAAQAwAAAhgfQAhgfAAgrQAAglgYgYQgbgbgsAAQgwABggAfgApBClIAgghQArAwA5gBQA4ABAtguQAagYARgkQASglADgkQgSAbgfASQgfASgpABQg9gBgkgiQgkgjAAg0QABhAAvgsQAvgtBFAAQBAgBAmAmQAqArAABMQAABAgXA5QgWA3gnAoQg+A9hMAAQhMAAg1g6gAnEiKQghAgAAAtQAAAkAYAYQAZAYAtAAQAxAAAhgfQAhgfAAgrQAAglgYgYQgbgbgsAAQgxABggAfgAr1DXIBjlxIhVAZIgBgqIBwgkIAkAAIhyGmgAKSgoQgNgEgJgJQgJgKAAgNQAAgRARgOIgVAAIADgTIB/AAIgDATIhHAAQgWALAAAPQAAASAjAAQAZAAATgJIgEAaQgVAJgYAAQgQAAgNgDgAJ0iLIADgTIBNAAQAPgKAAgMQAAgRghAAQgYAAgSAIIAEgaQARgHAaAAQAZAAAQAKQARAJAAATQAAAOgNAMIASAAIgDATg");
	this.shape.setTransform(13,192.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(12));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(138,161,159,0.6)").s().p("AgpAXIgBgHQACgJAHgEIAIgCQAIgBADAAQAIACABAIQABAIgGAEQgDACgIACQgHADgEAAQgGgBgDgFgAANAFQgEgBgEgEQgDgDAAgFQAAgFACgCQACgCAHgEIAMgGQAIgDAFAEQAEAEAAAGQABAFgDAEQgCAEgGADQgKAFgGAAIgDAAg");
	this.shape_1.setTransform(-33.5,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(138,161,159,0.6)").s().p("AgIARQgFgBgDgEQgDgEAAgFQAAgEACgCQABgCAHgEIAMgGQAHgDAGAEQAEAEAAAGQABAEgDAEQgDAEgFADQgKAGgGAAIgCAAg");
	this.shape_2.setTransform(-31.2,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[]},10).wait(1));

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-60,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-138,151.6,352.8);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-150,300,300), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-150,-150,300,300), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#ECD087","#A27B3A","#000000","#000000"],[0,1,1,1],0,-299,0,299).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3B47D").ss(2,2,0,3).p("Agbg2IA3A2Ig3A3");
	this.shape.setTransform(7.5,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3B47D").s().p("AhmAJIAAgRIDNAAIAAARg");
	this.shape_1.setTransform(-1.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-11.9,-6.1,23.6,13.8), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(59.6,-0.7,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:62},3,cjs.Ease.get(1)).to({x:59.6},2).wait(3).to({x:62},3,cjs.Ease.get(1)).to({x:59.6},2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBAIAAgXIhKAAIgCAXIgQAAIAAgmIAKAAQAOgbAAgvIAAgOIBJAAIAABYIAMAAIgCAmgAhDgiQAAAlgLAXIAwAAIAAhHIglAAgADqAqIgLgZIgxAAIgLAZIgTAAIAuhpIARAAIAuBpgADZAAIgTgpIgSApIAlAAgAHFApIAAhLIg1BLIgRAAIAAhnIASAAIAABLIA1hLIASAAIAABngAEmApIAAhWIgiAAIAAgRIBWAAIAAARIgiAAIAABWgAAcApIAAhnIBOAAIAAARIg8AAIAAAXIAeAAQARAAAKAJQALAIAAAPQAAAPgLAJQgKAHgSAAgAAuAaIAZAAQAYAAAAgRQAAgPgVAAIgcAAgAihApIAAhLIg1BLIgRAAIAAhnIASAAIAABLIA1hLIASAAIAABngAlaApIAAhnIApAAQATAAAKAJQALAKAAAQQAAARgMAKQgMAIgSAAIgVAAIAAAhgAlIgHIAWAAQAKgBAHgFQAGgFAAgIQAAgUgXABIgWAAgAmUApIAAhWIgxAAIAABWIgSAAIAAhnIBWAAIAABng");
	this.shape.setTransform(-18.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuDDSIAAmjIcHAAIAAGjg");
	this.shape_1.setTransform(-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.2,-21,180,42);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,279.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(169));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,-254.4,1.16,1.16,0,0,0,1.8,0.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10).wait(109).to({alpha:0},10).to({_off:true},1).wait(39));

	// t3
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).to({alpha:1},10).wait(19).to({alpha:0},10,cjs.Ease.quadInOut).wait(1));

	// dev_3duo_text
	this.instance_3 = new lib.dev_3duo("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(270,-50);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).to({x:-2},10).wait(5).to({mode:"synched",loop:false},0).wait(30).to({startPosition:11},0).to({x:-273},10,cjs.Ease.get(-1)).to({_off:true},1).wait(39));

	// btn
	this.instance_4 = new lib.btn("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.5,214.5,0.02,0.02,0,0,0,0,2.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({regX:-0.5,regY:0.5,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(20).to({mode:"synched",loop:false},0).wait(54).to({startPosition:14},0).to({alpha:0},10).wait(1));

	// t1_2
	this.instance_5 = new lib.t1_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,36.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({alpha:1},10).wait(25).to({x:-263},10,cjs.Ease.get(-1)).to({_off:true},1).wait(84));

	// t1_1
	this.instance_6 = new lib.t1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-35.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({alpha:1},10).wait(25).to({x:-263},10,cjs.Ease.get(-1)).to({_off:true},1).wait(84));

	// bgImg1
	this.instance_7 = new lib.bgImg1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-150);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},10,cjs.Ease.get(1)).wait(19).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(129));

	// bgImg2
	this.instance_8 = new lib.bgImg2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,150);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},10,cjs.Ease.get(1)).wait(19).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(129));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(169));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: 'D78E0080C82B4A91A29A8C60B712AE41',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/dev.png", id:"dev"}
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