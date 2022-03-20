(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,250);


(lib.woman = function() {
	this.initialize(img.woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,640);// helper functions:

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


(lib.woman_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.woman();
	this.instance.parent = this;
	this.instance.setTransform(-150,-320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.woman_1, new cjs.Rectangle(-150,-320,300,640), null);


(lib.txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(-101,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_1, new cjs.Rectangle(-101,-125,202,250), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALRBOIAAgZIhAAAIAAAZIgTAAIAAgoIALAAQAKgLABglIAAgWIBBAAIAABGIAPAAIAAAogAKlgHQAAAfgJAOIAnAAIAAg2IgeAAgAI4A4QgTABgOgPQgNgOAAgSQAAgSANgOQAPgNASABQAUgBANANQAOAPAAARQAAASgOAOQgNAOgRAAIgDAAgAIlgKQgIAJAAALQAAAMAIAJQAIAHALABQAMAAAIgJQAHgIABgMQgBgLgHgJQgIgHgLgBQgMABgIAHgAiHA4QgTABgNgPQgOgOAAgSQAAgSAOgOQAOgNASABQATgBAOANQAOAPAAARQAAASgOAOQgNAOgRAAIgDAAgAiagKQgIAJAAALQAAAMAIAJQAIAHALABQAMAAAIgJQAHgJAAgLQAAgLgHgJQgIgHgMgBQgLABgIAHgAOIAzQgEgEAAgFQAAgGAEgEQAEgEAGAAQAGAAADAEQAEAEABAGQgBAFgEAEQgDAFgGAAQgGAAgEgFgAMJA4IAAhYIATAAIAAA1IAzg3IAGAAIAABXIgTAAIAAg1IgyA4gAE4A4IAAhYIATAAIAAA1IA0g3IAGAAIAABXIgTAAIAAg1IgzA4gAgpAqQgOgNAAgTQAAgSAOgOQAOgMASAAQAXgBAOAVIgOAKQgJgOgOAAQgJAAgHAGQgIAHgCAHIAgAAIAAAOIghAAQADALAHAFQAHAHAKAAQAOAAAJgOIAOAKQgOAVgXAAQgSAAgOgOgAsjAxQgJgIAAgKQABgMAIgHQAJgGAPgBIAZAAIAAgFQgBgIgFgFQgEgFgJAAQgNAAgLANIgLgLQAMgSAZAAQAQgBAKAKQAJAKABAQIAAA0IgSAAIAAgJQgKAMgSAAQgPgBgHgGgAsZAeQAAAFAFADQAEADAHAAQAKAAAGgGQAHgGAAgIIAAgCIgXAAQgQAAAAALgAGyA1IAAhVIA+AAIAAAQIgrAAIAABFgADFA1IAAhVIAnAAQAMAAAIAGQAJAHAAAKQAAAJgIAGQAPAHAAAOQAAAMgJAIQgIAGgPAAgADXAnIAYAAQAGAAAFgEQAEgEAAgEQAAgFgEgDQgDgEgIAAIgYAAgADXABIAUAAQANAAAAgJQAAgKgNAAIgUAAgABCA1IAAhVIATAAIAABVgAkjA1IAAhVIAmAAQAOAAAIAGQAIAGAAALQAAAKgIAFQAPAHAAAOQAAAMgJAIQgJAGgNAAgAkRAnIAYAAQAIAAADgEQAEgDAAgFQAAgGgEgCQgDgEgIAAIgYAAgAkRABIAUAAQANAAAAgJQAAgKgNAAIgUAAgAl0A1IAAhFIgcAAIAAgQIBKAAIAAAQIgcAAIAABFgAoCA1IgmguIAjgnIAWAAIgiAmIAmAvgAo7A1IAAhVIASAAIAABVgAp7A1IAAglIgmAAIAAAlIgSAAIAAhVIASAAIAAAgIAmAAIAAggIATAAIAABVgAufA1IAAh0IBLAAIAAARIg4AAIAAAeIAZAAQASAAALAKQALAJAAAQQAAAOgLALQgLAKgSgBgAuMAlIAYAAQALAAAFgFQAGgFAAgIQAAgJgGgGQgFgEgLAAIgYAAgAOKAOIgDhNIAWAAIgDBNgABPg5QgDgDABgFQgBgGADgDQAEgEAEABQAFgBACAEQADADAAAGQAAAFgDADQgCAEgFAAQgEAAgEgEgAA4g5QgDgDAAgFQAAgGADgDQADgEAFABQAEgBADAEQADADAAAGQAAAFgDADQgDAEgEAAQgFAAgDgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-92.7,-7.8,185.5,15.7), null);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBYIAAisIAgAAIAAAQQAOgTAbAAQAbAAASATQARATAAAcQAAAcgRATQgSATgbAAQgXAAgPgPIAAA6gABEgvQgJAKAAAQQAAARAJAIQAJAJAOAAQAOAAAKgJQAJgJAAgQQAAgPgJgKQgKgKgOAAQgOAAgJAJgAEdBOIAAgkIhXAAIAAAkIghAAIAAhBIANAAQAIgIAEgOQADgQABgcIABgfIBmAAIAABhIAVAAIAABBgADigwQgBApgLAUIAxAAIAAhEIglAAgAnMAjQgMgLAAgRQAAgQANgKQAOgKAWAAIAfAAIAAgGQAAgLgGgFQgGgGgLAAQgKAAgIAEQgHAEgJAJIgSgVQAWgaAiAAQAZAAAPAOQAOAOAAAaIAABLIggAAIAAgMQgPAPgYAAQgUAAgMgKgAm1AGQAAAGAFAEQAFAEAJAAQALAAAIgHQAHgIAAgKIAAgBIgbAAQgSAAAAAMgApQAVIAUgUQAMAOAVAAQAKAAAFgDQAFgEAAgGQAAgFgEgDQgFgDgJAAIgQAAIAAgaIAPAAQAOAAAAgLQAAgLgQAAQgSAAgMAMIgUgUQATgWAhAAQAXAAAMAKQANAJAAASQAAARgNAKQASAJAAATQAAATgNALQgOAKgZAAQglAAgSgYgAsTAjQgMgLAAgRQAAgQANgKQANgKAXAAIAfAAIAAgGQAAgLgGgFQgGgGgLAAQgKAAgHAEQgIAEgJAJIgSgVQAWgaAiAAQAZAAAPAOQAOAOAAAaIAABLIggAAIAAgMQgPAPgYAAQgUAAgMgKgAr8AGQAAAGAFAEQAFAEAJAAQALAAAIgHQAHgIAAgKIAAgBIgbAAQgSAAAAAMgAKwAtQgcAAgUgUQgUgUAAgaQAAgbAUgUQAUgUAcABQAcgBAVAUQAUAUAAAbQAAAagUAUQgUAUgbAAIgCAAgAKZguQgKAKAAAPQAAAPAKAJQAJAKAOAAQAPAAAJgKQAJgJAAgPQAAgOgJgLQgJgKgPAAQgOAAgJAKgAGKAtQgcAAgUgUQgUgUAAgaQAAgbAUgUQAUgUAcABQAdgBAUAUQAUAUAAAbQAAAagUAUQgUAUgbAAIgCAAgAFzguQgJAKAAAPQAAAPAJAJQAJAKAOAAQAPAAAJgKQAJgJAAgPQAAgPgJgKQgJgKgPAAQgOAAgJAKgAg/AtQgcAAgUgUQgUgUAAgaQAAgbAUgUQAUgUAcABQAdgBAUAUQATAUAAAbQAAAagTAUQgUAUgbAAIgCAAgAhWguQgJAKAAAPQAAAPAJAJQAJAKAOAAQAPAAAJgKQAJgJAAgPQAAgPgJgKQgJgKgPAAQgOAAgJAKgAN0AqIAAg8IgfAiIgLAAIgfgiIAAA8IgiAAIAAiBIALAAIA8BCIA8hCIALAAIAACBgAI1AqIAAgyIgvAAIAAAyIgjAAIAAh+IAjAAIAAAuIAvAAIAAguIAjAAIAAB+gAirAqIgyhCIAABCIgjAAIAAh+IAjAAIAAA7IAwg7IAoAAIgxA6IA1BEgAtvAqIAAhhIgnAAIAAgdIBxAAIAAAdIgoAAIAABhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-91.9,-8.8,183.9,17.7), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghDWIAAkzIA4AAIAAAcQAXggAxAAQAvgBAfAiQAfAhAAAyQAAAygfAiQgfAjgvAAQgqgBgZgbIAABogAArgZQgQAQAAAcQAAAdAQARQAQARAZAAQAZgBAQgRQARgRAAgbQAAgbgQgRQgRgSgZAAQgZAAgQARgAD5B3QgVgTAAgeQAAgeAXgSQAXgSAnAAIA5AAIAAgIQAAgUgLgKQgLgLgUAAQgRAAgNAIQgOAHgQARIgggmQAoguA7AAQAtgBAZAZQAbAaAAAuIAACFIg5AAIAAgWQgaAbgrABQgjgBgWgSgAEiBEQAAALAJAHQAJAGAPAAQAUAAAOgNQANgMAAgTIAAgDIgwAAQggAAAAAXgAoQCEIAAg1QALACANAAQAcAAAPgUIhwjlIBFAAIBMCkIBHikIBBAAIhmDhQgWAsgTASQgUARgnABQgQAAgSgFgANcCEIAAjhIA9AAIAADhgALoCEIAAhbIhUAAIAABbIg9AAIAAjhIA9AAIAABTIBUAAIAAhTIA9AAIAADhgAHjCEIAAjhIA9AAIAADhgAiECEIhZh3IAAB3Ig9AAIAAjhIA9AAIAABpIBVhpIBGAAIhVBnIBcB6gAuhCEIAAjhIBpAAQAjABAWAQQAWASAAAcQAAAagSAPQAjAQAAAkQAAAegXAUQgXATgjAAgAtmBWIA2AAQAPABAIgIQAJgGAAgMQAAgLgJgHQgIgGgPAAIg2AAgAtmgEIArAAQAbgBAAgUQAAgWgbAAIgrAAgANfiUQgMgLAAgQQAAgQAMgLQALgLARAAQAQAAALALQAMALAAAQQAAAQgMALQgLALgQAAQgRAAgLgLgAINiTQgIgKAAgSQAAgRAIgKQAIgLAOAAQANAAAIALQAIAKAAARQAAASgIAKQgIAKgNAAQgOAAgIgKgAHNiTQgIgLAAgRQAAgRAIgKQAIgLANAAQAOAAAIALQAHAKAAARQAAASgHAKQgIAKgOAAQgNAAgIgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-92.9,-21.4,186,42.8), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEdCsIAAjdIA7AAIAAB1IB5h6IATAAIAADdIg7AAIAAh2Ih4B7gAA0CaQgUgSAAgdQAAgdAWgRQAWgRAmAAIA2AAIAAgKQAAgSgKgKQgLgJgTAAQgRAAgNAGQgNAHgPAQIgegjQAlgtA5AAQArAAAZAYQAZAZAAArIAACBIg2AAIAAgVQgaAagoAAQgjAAgUgSgABbBpQAAALAJAGQAIAGAOAAQAUAAANgMQANgMAAgTIAAgCIgvAAQgeAAAAAWgApzCrQgwABgigiQgigiABguQgBguAighQAjgiAwABQAvgBAjAiQAjAhgBAuQABAugjAiQgiAhguAAIgDAAgAqbAQQgPAQAAAaQAAAaAPAQQAQARAZAAQAYAAAQgRQAQgQAAgaQAAgZgQgRQgQgQgYAAQgZAAgQAQgAjlCnIAAgxIAJABQASAAAHgbQAIgbABhAIAAgyICsAAIAADYIg6AAIAAinIg7AAIAAAQQgCBVgRAiQgQAjgoABQgNAAgKgEgAKtCnIAAhYIhQAAIAABYIg7AAIAAjYIA7AAIAABOIBQAAIAAhOIA6AAIAADYgAlECnIAAhYIhQAAIAABYIg7AAIAAjYIA7AAIAABOIBQAAIAAhOIA7AAIAADYgAFPhoQgVgVAAgiIAAgMIAvAAIAAAMQAAARAIAIQAHAJAOAAQANAAAIgJQAHgIAAgRIAAgMIAvAAIAAAMQAAAigVAVQgVAVghAAQgiAAgVgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-74.3,-17.2,148.6,34.3), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrCUIAAgyIAZACQARAAAKgGQALgHAHgQIAHgPIhTjLIA/AAIA0CPIA4iPIA+AAIhoDrQgOAigVAPQgUAQgeAAQgSAAgUgFgAKVBKIAAjdIA6AAIAAB2IB6h7IATAAIAADdIg7AAIAAh0Ih5B5gAn1BKQgvABgjgiQgigjABgtQgCguAkgiQAighAwAAQAvAAAjAhQAjAigBAuQABAtgjAjQgiAhguAAIgDAAgAodhRQgPARAAAaQAAAZAPAQQAQARAZAAQAYAAAPgRQAQgQAAgZQAAgZgQgSQgPgRgYAAQgZAAgQARgAIsBFIhVhyIAAByIg7AAIAAjYIA7AAIAABlIBShlIBCAAIhSBjIBZB1gAEkBFIAAimIhOAAIAACmIg6AAIAAjYIDCAAIAADYgAjABFIhWhyIAAByIg7AAIAAjYIA7AAIAABlIBShlIBDAAIhSBjIBZB1gArTBFIAAimIhOAAIAACmIg6AAIAAjYIDDAAIAADYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-86,-15.3,172,30.6), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEpCIQgigiABgvQAAgvAhggQAighAxAAQBAAAAeA1IgpAfQgWgegeAAQgZAAgQAQQgQARAAAZQAAAaAQARQAQARAZAAQAeAAAWgfIApAfQgPAZgYAPQgYAOgfAAIgDAAQguAAgighgAlACXQgUgSAAgdQAAgdAWgRQAWgRAmAAIA2AAIAAgKQAAgSgKgKQgKgJgUAAQgQAAgOAGQgNAHgPAQIgegjQAlgtA5AAQArAAAZAYQAZAZAAArIAACBIg2AAIAAgVQgZAagpAAQgiAAgVgSgAkYBmQAAALAIAGQAIAHAPAAQATAAANgMQANgNAAgSIAAgDIguAAQgeAAAAAWgAIGCkIAAjYIA7AAIAADYgAAjCkIAAjYIBlAAQAhAAAWAQQAVARAAAbQAAAXgRARQAhAPAAAjQAAAcgWATQgWATgiAAgABbB4IA1AAQAOAAAIgHQAIgGAAgLQAAgLgIgGQgIgGgOAAIg1AAgABbAfIApAAQAbAAAAgUQAAgTgbAAIgpAAgAm9CjIAAhXIhQAAIAABXIg7AAIAAjYIA7AAIAABPIBQAAIAAhPIA6AAIAADYgAIIhpQgLgLAAgPQAAgQALgKQALgLAQAAQAQAAALALQALAKAAAQQAAAPgLALQgLAKgQAAQgQAAgLgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-58.5,-16.9,117.1,33.8), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-83,-17.4,166.1,34.8), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJTDcIAAhgIjmAAIAABgIhXAAIAAiuIAkAAQAUgTAKgoQAIgpADhKIADhTIENAAIAAEBIA3AAIAACugAG2hyQgCBqgcA2IB/AAIAAi0IhgAAgARLDAIAChzIA7AAIgVBzgAL4BoQgggcAAgsQAAgtAjgaQAigaA7AAIBUAAIAAgPQgBgdgQgPQgPgPgfAAQgZAAgUALQgVALgXAYIgvg4QA6hGBYAAQBDAAAnAmQAnAmgBBEIAADHIhUAAIAAghQgnAphAAAQg0AAgggcgAM1AcQAAARANAKQAOAKAVAAQAfAAAUgTQATgTABgcIAAgEIhIAAQgvAAAAAhgAsQCEIAAlXIBbAAIAAC3IC8i/IAeAAIAAFXIhcAAIAAi1Ii6C9gABMCDQhLACg0g1Qg1g0ABhIQgBhHA2g1QA0g0BKABQBKgBA2A0QA2A1gBBHQABBHg2A1Qg1AzhHAAIgEAAgAAOhtQgYAaAAAoQAAAoAYAYQAYAaAmAAQAlAAAagaQAYgYAAgoQAAgngYgbQgagaglAAQgmAAgYAagAl8B8IAAlPID4AAIAABNIidAAIAAECgAyHB8IAAlPICcAAQA0AAAhAaQAhAZAAArQAAAlgbAZQA0AXABA1QgBAtgiAdQgiAdg1AAgAwwA4IBRAAQAWAAAMgKQANgLAAgQQAAgRgNgJQgMgJgWAAIhRAAgAwwhQIA/AAQApAAABgfQgBgggpAAIg/AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-116,-22,232,44), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApxEQQg6gXgpgrQgkgngTg2QgUg1AAg8QAAg7AUg1QATg1AkgnQApgsA6gXQA5gWBGAAQBHAAA6AWQA6AXAoAsQAkAnAUA1IABACIBfAAQArABAXAPQAXAQAAAhQAAAqglAMQAWAGAMAPQANARAAAZQAAAnghATQgbANgrAAIhpAAQgRAkgaAbQgoArg6AXQg6AWhHAAQhGAAg5gWgApskCQg4AVgmApQgjAmgSAyQgTA0AAA4QAAA6ATAzQASAzAjAlQAmApA4AVQA3AWBDAAQBFAAA3gWQA3gUAmgqQAeghASgpIAAjpIAFAAQgTgxgiglQgmgpg3gVQg3gWhFAAQhDAAg3AWgAimBbIAtAAQAiAAAAgaQAAgbgiAAIgtAAgAimgKIAqAAQANABAHgHQAHgGAAgLQAAgLgHgGQgHgHgNAAIgqAAgApgB2QgpgsgBhKQABhJApgrQAogrBGAAQBHAAApArQApArAABJQAABKgpAsQgpAqhHAAQhGAAgogqgApXhqQglAnAABDQAABEAlAnQAlAoBAAAQBBAAAlgoQAmgnAAhEQAAhDgmgnQglgohBAAQhAAAglAogAlQCNQgLgKAAgSQAAgSALgJQAJgJARAAQAPAAALAJQALAJgBASQABASgLAKQgLAIgPAAQgRAAgJgIgALVCPIg9hhIgfAAIAABhIhEAAIAAj9IBEAAIAABhIAfAAIA6hhIBLAAIhQB7IBTCCgAHDCPIhkiQQACAPAAAaIAABnIhEAAIAAj9IBAAAIBjCRQgBgPgBgZIAAhpIBEAAIAAD9gAC8CPIgOgoIhpAAIgPAoIhDAAIBij9IBJAAIBjD9gABygXIgaBIIBCAAIgahIQgEgLgDgPQgCAPgFALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-80,-29.4,160,58.8), null);


(lib.icons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,1).p("AA3gpIiPhSQgOgIgHAJIB7B6IAqgpIgBAAIAAgBIABABIAwAcQAKAGAAAHQAAAJgKAFIgwAcIgBAAIgpgpIAAgBIAAgBIh6h6IgBABQgEAEAAAJIAADbQAAAJAEAEQAHAJAOgIICQhSIgqgqIh7B7IABABIB6h7AAOgBIApgo");
	this.shape.setTransform(-47.6,-18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(0.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icons, new cjs.Rectangle(-60,-32.6,119,64.3), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVEWIAAgSIAQABQALAAAHgFQAIgEAFgMIAHgRIg4iDIAWAAIAtBsIAthsIAXAAIhDCaQgPAjgfAAQgLAAgJgDgAnhEWIAAi6IAVAAIAAAVQAHgLAPgHQANgGAQAAQAdAAATAUQATAUAAAfQAAAegTAUQgTAVgdAAQggAAgSgXIAABGgAm9B6QgOANAAAZQAAAYAOAOQANANAUAAQAVAAANgPQAOgOAAgWQAAgWgOgPQgNgPgVAAQgTAAgOAOgAMCDiQgFgFAAgIQAAgHAFgGQAFgEAHAAQAIAAAFAEQAFAFAAAIQAAAIgFAFQgFAFgIAAQgHAAgFgFgAJdDnIAAiLIAVAAIAABgIBThjIAIAAIAACLIgVAAIAAhgIhTBjgAFSDcQgNgKAAgRQAAgSANgKQAOgLAWAAIArAAIAAgLQAAgRgJgJQgIgJgQAAQgXAAgQAWIgPgLQATgeAkAAQAZAAAOAOQAOAPAAAaIAABUIgUAAIAAgSQgQAVgdAAQgWAAgNgLgAFbC/QAAAKAIAGQAIAGAMAAQASAAALgLQANgLAAgQIAAgDIgpAAQgdAAAAATgAsKDSQgVgUAAgfQAAgdAVgVQAVgVAdABQARAAAPAIQAOAHAKAOIgQANQgQgXgXAAQgWAAgOAPQgOAPAAAVQAAAWAOAPQAOAPAWAAQAXAAAQgWIAQAMQgUAegkAAQgeAAgUgVgAhIDmQgeAAgUgVQgTgVAAgiIAAgYQAAggAGgTQANgqBAgLQAjgGALgEIAAAUQgMAGgfAEQgdAEgOALQgOAKgFAOQgDAOAAAWQAIgNAPgHQANgHAQAAQAbgBAUAVQAVAVgBAbQABAcgVAUQgUAUgdAAIgCAAgAhpCAQgPAOAAAUQAAAUAPAOQAOAPAUAAQAUAAAOgOQAOgOABgVQgBgUgOgOQgNgOgVAAQgUAAgOAOgAjzDmQgdABgVgVQgVgWAAgcQAAgdAVgWQAWgVAcABQAdgBAVAVQAWAWgBAdQABAcgWAWQgVAUgcAAIgBAAgAkWB7QgOAPAAAWQAAAVAOAPQAOAPAVAAQAUAAAPgPQAOgPAAgVQAAgWgOgPQgOgPgVAAQgVAAgOAPgAH8DkIAAh1IgtAAIAAgTIBwAAIAAATIguAAIAAB1gAC5DkIAAiIIA4AAQAUAAAMAKQAMAJAAARQAAARgOAJQAZAJAAAYQAAASgNALQgOAMgVAAgADODRIApAAQAMAAAIgGQAHgGAAgKQABgKgIgFQgHgGgNAAIgpAAgADOCTIAjAAQAWAAABgSQgBgSgWAAIgjAAgAolDkIAAh1IhCAAIAAB1IgVAAIAAiIIBtAAIAACIgAMFCpIgEh9IAaAAIgEB9gAB/hbIAAgSIAPACQAMAAAHgFQAHgFAGgMIAHgQIg5iEIAYAAIAtBsIAthsIAWAAIhCCbQgQAigeAAQgNAAgIgDgAhyiKQgdAAgWgVQgUgVAAgdQgBgdAWgVQAVgVAdAAQAdAAAVAVQAWAVgBAdQAAAdgVAVQgVAVgcAAIgBAAgAiVj1QgOAOAAAWQAAAWAOAOQAOAPAVAAQAUAAAPgPQAOgOAAgWQAAgVgOgPQgOgPgVAAQgVAAgOAPgABIiNIAAg2QgMAHgWAAQgZAAgOgOQgOgOAAgZIAAgkIAUAAIAAAiQAAAjAlAAQARAAANgFIAAhAIAWAAIAACIgAjiiNIgmg4IgmA4IgaAAIAzhHIgvhBIAZAAIAjAyIAjgyIAZAAIgwBBIAzBHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-80,-28.1,160,56.2), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn_txt
	this.instance = new lib.btn_txt();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-20.7,alpha:1},10,cjs.Ease.quadInOut).to({y:-0.7},10,cjs.Ease.quadInOut).wait(10));

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLAHIgDgHIgBgGICYAAIACAEIAFAJg");
	this.shape.setTransform(27.5,58.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlAAJIgKgLIgDgDIJ6AAQALAAAKgCIAEACIAIAHQgPAHgSAAg");
	this.shape_1.setTransform(76.8,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiDFIIgJgIIgIgHIDPAAQAgABAWgXQAWgWAAgfIAAozIAOgCIAAAAIAAI1QAAAlgaAaQgbAbglAAg");
	this.shape_2.setTransform(101,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACMHOIgKgCIAAtAQAAgggWgWQgWgWggAAIjGAAIAOgKIAGgFICyAAQAlABAbAaQAbAbAAAlIAANDIgFgBg");
	this.shape_3.setTransform(101.4,-14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AGuETIAAnKQAAgggWgWQgWgWggAAIseAAIAGgOIABgBIMXAAQAlAAAbAbQAbAbAAAlIAAHKg");
	this.shape_4.setTransform(71.4,-33.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AJYANQAAgegWgWQgWgXggAAIxwAAIgCgFIAAgJIRyAAQAlAAAbAaQAbAbAAAkIAAA7IgPAFg");
	this.shape_5.setTransform(54.4,-53.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ApCAHIgHgHIgGgGISfAAIgGAEIgLAIIgBABg");
	this.shape_6.setTransform(12.9,-60.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ar8BBIgDgBIAAgqQAAgkAagbQAagaAmgBIWlAAQgHAIgEAHI2aAAQggAAgWAWQgXAXAAAeIAAAuIgKgDg");
	this.shape_7.setTransform(-40.5,-54.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AqNk0QAAglAagbQAagbAmAAITBAAIgEAIIgCAHIy7AAQggAAgWAWQgXAXAAAfIAALBIAAAAIgNADg");
	this.shape_8.setTransform(-52,-21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AnUJYQglAAgagbQgbgaAAglIAAv6QAAglAbgbQAagbAlAAIP/AAIACAJIACAFIwDAAQgfABgXAWQgWAWAAAgIAAP6QAAAfAWAWQAXAXAfgBIGSAAIgIAKIgCABQgEABgDADg");
	this.shape_9.setTransform(-61.5,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AmPJYQgmAAgagbQgagaAAglIAAv6QAAglAagbQAagbAmAAIMnAAIABAJIADAFIsrAAQggABgWAWQgXAWAAAgIAAP6QAAAfAXAWQAWAXAggBIN5AAIAAABIgCAOg");
	this.shape_10.setTransform(-68.4,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ao0JYQglAAgagbQgbgaAAglIAAv6QAAglAbgbQAagbAlAAIIFAAIACAFIAGAJIoNAAQgfABgXAWQgWAWAAAgIAAP6QAAAfAWAWQAXAXAfgBIS9AAIAFAPIABAAg");
	this.shape_11.setTransform(-51.9,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AsOJVQgmAAgagbQgagaAAgmIAAv6QAAglAagbQANgNAQgHIAFAGIAGAGQgRAFgNAOQgXAWAAAfIAAP6QAAAgAXAWQAWAWAgAAIZrAAIAFAGIAHAJg");
	this.shape_12.setTransform(-30.1,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AwzGLQgmAAgagaQgagbAAglIAAq7IANACIAAK5QAAAgAXAWQAWAWAgAAMAhnAAAQAgAAAWgWQAWgWAAggIAAjEIAHACIAIACIAADAQgBAlgaAbQgbAaglAAg");
	this.shape_13.setTransform(-0.7,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AwzHKQgmAAgagbQgagaAAgmIAAk4IANgEIAAE8QAAAgAXAWQAWAWAgAAMAhnAAAQAgAAAWgWQAWgWAAggIAAszQAHgBAIgDIAAM3QgBAlgaAbQgbAbglAAg");
	this.shape_14.setTransform(-0.7,13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AxOJYQgUAAgRgIQAHgEAHgGQALADAMAAMAhnAAAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgWgWgggBIn6AAIACgCIAIgLIABgBIHvAAQAlAAAbAbQAbAbAAAlIAAP6QAAAlgbAaQgbAbglAAg");
	this.shape_15.setTransform(1.9,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AteJYIABgBIAMgOIZWAAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgXgWgfgBIurAAIABgDIABgLIOpAAQAlAAAbAbQAaAbAAAlIAAP6QAAAlgaAaQgbAbglAAg");
	this.shape_16.setTransform(29.6,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ArLJYIADgJIACgGIU3AAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgWgWgggBIz0AAQgBgFgEgJIT5AAQAlAAAbAbQAbAbAAAlIAAP6QAAAlgbAaQgbAbglAAg");
	this.shape_17.setTransform(44.3,-1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkaJYIABgDIADgMIRkAAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgWgWgggBI7qAAQgDgGgIgIIb1AAQAlAAAbAbQAaAbABAlIAAP6QgBAlgaAaQgbAbglAAg");
	this.shape_18.setTransform(22.3,-1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ACJJYIAAgCIgEgNIOvAAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgWgWgggBMghnAAAQggABgWAWQgXAWAAAgIAAFIIAAAAIgBAAQgEgCgFABIgDAAIAAlHQAAglAagbQAagbAmAAMAhnAAAQAlAAAbAbQAaAbABAlIAAP6QgBAlgaAaQgbAbglAAg");
	this.shape_19.setTransform(-0.7,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AFpJYIgCgBIgIgMIgBgCILWAAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgWgWgggBMghnAAAQggABgWAWQgXAWAAAgIAAPQIgEACIgJAEIAAvWQAAglAagbQAagbAmAAMAhnAAAQAlAAAbAbQAaAbABAlIAAP6QgBAlgaAaQgbAbglAAg");
	this.shape_20.setTransform(-0.7,-1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ALBJYIgBgCIgKgLIgBgCIF/AAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgWgWgggBMghnAAAQggABgWAWQgXAWAAAgIAAP6QAAAfAXAWQAWAXAggBIKEAAIgCADQgIAGgDAGIp3AAQgmAAgagbQgagaAAglIAAv6QAAglAagbQAagbAmAAMAhnAAAQAlAAAbAbQAaAbABAlIAAP6QgBAlgaAaQgbAbglAAg");
	this.shape_21.setTransform(-0.7,-1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AwzJYQgmAAgagbQgagaAAglIAAv6QAAglAagbQAagbAmAAMAhnAAAQAlAAAbAbQAaAbABAlIAAPLIgPgFIAAvGQAAgggWgWQgWgWgggBMghnAAAQggABgWAWQgXAWAAAgIAAP6QAAAfAXAWQAWAXAggBIQCAAIgCAPg");
	this.shape_22.setTransform(-0.7,-1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AwzJYQgmAAgagbQgagaAAglIAAv6QAAglAagbQAagbAmAAMAhnAAAQAlAAAbAbQAaAbABAlIAAJAQgFgCgEACIgFACIgBAAIAApCQAAgggWgWQgWgWgggBMghnAAAQggABgWAWQgXAWAAAgIAAP6QAAAfAXAWQAWAXAggBIVIAAIACAHIAEAIg");
	this.shape_23.setTransform(-0.7,-1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AwzJYQgmAAgagbQgagaAAglIAAv6QAAglAagbQAagbAmAAMAhnAAAQAlAAAbAbQAaAbABAlIAADDIgIADIgHADIAAjJQAAgggWgWQgWgWgggBMghnAAAQggABgWAWQgXAWAAAgIAAP6QAAAfAXAWQAWAXAggBIefAAQAFAIAIAHg");
	this.shape_24.setTransform(-0.7,-1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AwzJYQgmAAgagbQgagaAAglIAAv6QAAglAagbQAagbAmAAIfBAAIgLAFQgIAEgCADIgDACI+pAAQggABgWAWQgXAWAAAgIAAP6QAAAfAXAWQAWAXAggBMAhnAAAQAgABAWgXQAWgWAAgfIAAnDIADAAIAMAAIAAHDQgBAlgaAaQgbAbglAAg");
	this.shape_25.setTransform(-0.7,-1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AwzJYQgmAAgagbQgagaAAglIAAv6QAAglAagbQAagbAmAAIYGAAIgHAJIgDAFI38AAQggABgWAWQgXAWAAAgIAAP6QAAAfAXAWQAWAXAggBMAhnAAAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgJgJgKgFIACgBQAGgEAFgFQAIAGAIAIQAaAbABAlIAAP6QgBAlgaAaQgbAbglAAg");
	this.shape_26.setTransform(-0.7,-1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AwzJYQgmAAgagbQgagaAAglIAAv6QAAglAagbQAagbAmAAIUIAAIgBACQgFAHgCAFI0AAAQggABgWAWQgXAWAAAgIAAP6QAAAfAXAWQAWAXAggBMAhnAAAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgWgWgggBIrOAAIAHgNIABgBILGAAQAlAAAbAbQAaAbABAlIAAP6QgBAlgaAaQgbAbglAAg");
	this.shape_27.setTransform(-0.7,-1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AwzJYQgmAAgagbQgagaAAglIAAv6QAAglAagbQAagbAmAAMAhnAAAQAlAAAbAbQAaAbABAlIAAP6QgBAlgaAaQgbAbglAAgAxpoyQgXAWAAAgIAAP6QAAAfAXAWQAWAXAggBMAhnAAAQAgABAWgXQAWgWAAgfIAAv6QAAgggWgWQgWgWgggBMghnAAAQggABgWAWg");
	this.shape_28.setTransform(-0.7,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-61,233.3,445);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icons
	this.instance = new lib.icons();
	this.instance.parent = this;
	this.instance.setTransform(4.8,235.2,1,1,0,0,0,-0.2,-0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249).to({_off:false},0).to({alpha:1},10).wait(45).to({alpha:0},10).wait(1));

	// btn
	this.instance_1 = new lib.btn("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,108.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(249).to({_off:false},0).wait(55).to({startPosition:29},0).to({alpha:0},10).wait(1));

	// t4
	this.instance_2 = new lib.t4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(69.5,-28.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(239).to({_off:false},0).to({x:39.5,alpha:1},10,cjs.Ease.get(1)).wait(55).to({alpha:0},10).wait(1));

	// t3_2
	this.instance_3 = new lib.t3_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-244,219.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(174).to({_off:false},0).to({x:10},10,cjs.Ease.get(1)).to({x:0},5).wait(30).to({x:10},5).to({x:-245},10,cjs.Ease.get(-1)).to({_off:true},1).wait(80));

	// t3_1
	this.instance_4 = new lib.t3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-244,178.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(169).to({_off:false},0).to({x:10},10,cjs.Ease.get(1)).to({x:0},5).wait(30).to({x:10},5).to({x:-245},10,cjs.Ease.get(-1)).to({_off:true},1).wait(85));

	// t2_3
	this.instance_5 = new lib.t2_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-239.1,226.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({x:10.9},10,cjs.Ease.get(1)).to({x:0.9},5).wait(30).to({x:10.9},5).to({x:-239.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// t2_2
	this.instance_6 = new lib.t2_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-238.5,190.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({_off:false},0).to({x:11.5},10,cjs.Ease.get(1)).to({x:1.5},5).wait(30).to({x:11.5},5).to({x:-238.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(150));

	// t2_1
	this.instance_7 = new lib.t2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-238,140.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({x:12},10,cjs.Ease.get(1)).to({x:2},5).wait(30).to({x:12},5).to({x:-238},10,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_39 = new cjs.Graphics().p("ApHNlQmNi1gQmrQgOmBBUitQArhXAtgJQAXgxApg9QBTh4Bag1QBTgwBqgaQBygbBxAEQAYABBMghQBFgfAdAJQB+AlCohQQAvgWBFgqQA8gkAPgGQAZgJBNBDQBMBCBUBpQDWEIAWC0QANBsgmC+QgrDUhWDBQhmDliLCNQikCmjHAZQiKARh9AAQk9AAjxhtg");
	var mask_graphics_79 = new cjs.Graphics().p("ApHNlQmNi1gQmrQgOmBBUitQArhXAtgJQAXgxApg9QBTh4Bag1QBTgwBqgaQBygbBxAEQAYABBMghQBFgfAdAJQB+AlCohQQAvgWBFgqQA8gkAPgGQAZgJBNBDQBMBCBUBpQDWEIAWC0QANBsgmC+QgrDUhWDBQhmDliLCNQikCmjHAZQiKARh9AAQk9AAjxhtg");
	var mask_graphics_80 = new cjs.Graphics().p("ApHNlQmNi1gQmrQgOmBBUitQArhXAtgJQAXgxApg9QBTh4Bag1QBTgwBqgaQBygbBxAEQAYABBMghQBFgfAdAJQB+AlCohQQAvgWBFgqQA8gkAPgGQAZgJBNBDQBMBCBUBpQDWEIAWC0QANBsgmC+QgrDUhWDBQhmDliLCNQikCmjHAZQiKARh9AAQk9AAjxhtg");
	var mask_graphics_81 = new cjs.Graphics().p("ApHNlQmNi1gQmrQgOmBBUitQArhXAtgJQAXgxApg9QBTh4Bag1QBTgwBqgaQBygbBxAEQAYABBMghQBFgfAdAJQB+AlCohQQAvgWBFgqQA8gkAPgGQAZgJBNBDQBMBCBUBpQDWEIAWC0QANBsgmC+QgrDUhWDBQhmDliLCNQikCmjHAZQiKARh9AAQk9AAjxhtg");
	var mask_graphics_82 = new cjs.Graphics().p("ApHNlQmNi1gQmrQgOmBBUitQArhXAtgJQAXgxApg9QBTh4Bag1QBTgwBqgaQBygbBxAEQAYABBMghQBFgfAdAJQB+AlCohQQAvgWBFgqQA8gkAPgGQAZgJBNBDQBMBCBUBpQDWEIAWC0QANBsgmC+QgrDUhWDBQhmDliLCNQikCmjHAZQiKARh9AAQk9AAjxhtg");
	var mask_graphics_83 = new cjs.Graphics().p("ApHNlQmNi1gQmrQgOmBBUitQArhXAtgJQAXgxApg9QBTh4Bag1QBTgwBqgaQBygbBxAEQAYABBMghQBFgfAdAJQB+AlCohQQAvgWBFgqQA8gkAPgGQAZgJBNBDQBMBCBUBpQDWEIAWC0QANBsgmC+QgrDUhWDBQhmDliLCNQikCmjHAZQiKARh9AAQk9AAjxhtg");
	var mask_graphics_84 = new cjs.Graphics().p("ApHNlQmNi1gQmrQgOmBBUitQArhXAtgJQAXgxApg9QBTh4Bag1QBTgwBqgaQBygbBxAEQAYABBMghQBFgfAdAJQB+AlCohQQAvgWBFgqQA8gkAPgGQAZgJBNBDQBMBCBUBpQDWEIAWC0QANBsgmC+QgrDUhWDBQhmDliLCNQikCmjHAZQiKARh9AAQk9AAjxhtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_graphics_39,x:25.2,y:-23.1}).wait(40).to({graphics:mask_graphics_79,x:25.2,y:-23.1}).wait(1).to({graphics:mask_graphics_80,x:25.2,y:-27.1}).wait(1).to({graphics:mask_graphics_81,x:25.2,y:-31.1}).wait(1).to({graphics:mask_graphics_82,x:25.2,y:-35.1}).wait(1).to({graphics:mask_graphics_83,x:25.2,y:-39.1}).wait(1).to({graphics:mask_graphics_84,x:25.2,y:-43.1}).wait(1).to({graphics:null,x:0,y:0}).wait(230));

	// txt
	this.instance_8 = new lib.txt_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(10.5,-18.5,0.02,0.02,0,0,0,2.5,0);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({regX:0.1,regY:-0.2,scaleX:0.66,scaleY:0.66},10,cjs.Ease.get(1)).to({regY:-0.1,scaleX:0.61,scaleY:0.61,y:-18.4},10,cjs.Ease.quadInOut).to({scaleX:0.66,scaleY:0.66},10,cjs.Ease.quadInOut).to({scaleX:0.61,scaleY:0.61},10,cjs.Ease.quadInOut).to({y:-38.4},5).to({scaleX:1,scaleY:1,x:0.1,y:-30.1},10,cjs.Ease.quadInOut).wait(120).to({alpha:0},20).to({_off:true},1).wait(80));

	// logo
	this.instance_9 = new lib.logo();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-104.1,0.1,0.1,0,0,0,0,-0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:-230.1},10,cjs.Ease.quadInOut).wait(135).to({scaleX:1.11,scaleY:1.11,x:-26,y:-63},15,cjs.Ease.quadInOut).wait(55).to({alpha:0},10).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_30 = new cjs.Graphics().p("A3bGGIAAsLMAu3AAAIAAMLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_1_graphics_30,x:0,y:-175}).wait(5).to({graphics:null,x:0,y:0}).wait(280));

	// t1_2
	this.instance_10 = new lib.t1_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.4,-231.8);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({y:-185.8},5,cjs.Ease.get(-1)).wait(44).to({alpha:0},10).to({_off:true},1).wait(225));

	// t1_1
	this.instance_11 = new lib.t1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(6.5,-322.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).to({y:-236.5},5,cjs.Ease.get(-1)).wait(54).to({alpha:0},10).to({_off:true},1).wait(225));

	// woman
	this.instance_12 = new lib.woman_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,550);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:0},15,cjs.Ease.get(1)).to({y:20},5).wait(59).to({y:0},5).to({y:550},10,cjs.Ease.get(-1)).to({_off:true},1).wait(220));

	// bg
	this.instance_13 = new lib.bg_1();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(315));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,1170);


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
p.nominalBounds = new cjs.Rectangle(149,299,302,1171);
// library properties:
lib.properties = {
	id: '2953F5FF7A264D05A8E29886F1B082DA',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/txt.png", id:"txt"},
		{src:"images/woman.png", id:"woman"}
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
an.compositions['2953F5FF7A264D05A8E29886F1B082DA'] = {
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