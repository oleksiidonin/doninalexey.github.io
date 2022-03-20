(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,380);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,400);


(lib.boxes1 = function() {
	this.initialize(img.boxes1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,206);


(lib.boxes3 = function() {
	this.initialize(img.boxes3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,262);


(lib.bubbles1 = function() {
	this.initialize(img.bubbles1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib.bubbles2 = function() {
	this.initialize(img.bubbles2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,600);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,224);


(lib.o1 = function() {
	this.initialize(img.o1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,134);


(lib.o2 = function() {
	this.initialize(img.o2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,142);


(lib.o3 = function() {
	this.initialize(img.o3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,108);


(lib.o4 = function() {
	this.initialize(img.o4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,130);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,237);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,398,158);// helper functions:

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


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGEuIAhggQASAWATAAIAPgDIALgNIhZjEIA2AAIA9CNIAwiNIAyAAIhEC1QgSAtgUARQgSAQgaAAQglAAghglgAmREtQgmgmAAg5QAAgkARgfQATgdAegSQAdgTAlAAQA1AAAoAoQAlApABA0QgBA5glAmQglAmg4AAQg5AAglgmgAlvCRQgYAYAAAlQAAAsAdAYQAbATAcAAQAhAAAagZQAXgXAAgnQAAgkgXgXQgYgaglAAQgjAAgXAYgAJZFNIAAj9IAvAAIAAD9gAHcFNIAAjOIguAAIAAgvICNAAIAAAvIguAAIAADOgAECFNIAAj9IA0AAQAoAAASAHQASAHAMATQALAPAAAaQAAAagOASQgLAQgbAHQgNAFglAAIAABrgAEzCyIAOAAQAVAAAEgCIAMgIQADgEAAgKQAAgRgKgGQgJgEgWAAIgNAAgAiCFNIAAj9IB9AAIAAAvIhPAAIAADOgAoWFNIAAieIheCeIgqAAIAAj9IAwAAIAACkIBgikIApAAIAAD9gApkA1QgNgDgKgMQgLgNgBgOIAmAAQADAHAKAFIATACQAMAAAJgDQAIgDAEgIIAmAAQgFAYgPAMQgUANgfgBQgXABgMgHgAMZhtIAeggQAVAWARAAIAOgDIANgNIhbjDIA2AAIA9CMIAwiMIAyAAIhEC1QgRAugVAPQgSAQgZAAQgmAAgeglgADkhuQgngpAAg1QAAglARgfQAUgdAegSQAcgTAlAAQA4AAAlAnQAoAoAAA3QAAA3gmAnQgmAmg3AAQg7AAgkgmgAEHkKQgZAZAAAlQAAAsAeAXQAbAUAcgBQAgAAAagYQAZgZAAglQAAgjgZgaQgYgZgkAAQgjABgXAXgALchNIgcihIg2ChIgqAAIg2ihIgcChIgvAAIAsj9IAvAAIA7CwIA7iwIAvAAIArD9gABfhNIAAhvIhUAAIAABvIgwAAIAAj9IAwAAIAABfIBUAAIAAhfIAyAAIAAD9gAiBhNIhHh4IgHAHIAABxIgxAAIAAhxIgGgHIhIB4Ig5AAIBeiUIhVhpIA5AAIBFBbIAAhbIAxAAIAABZIBFhZIA7AAIhWBrIBdCSgAnVhNIAAj9IAvAAIAAD9gAo8hNIAAhvIhWAAIAABvIgwAAIAAj9IAwAAIAABfIBWAAIAAhfIAwAAIAAD9gAvxhNIAAj9IAoAAQAjgBAOAFQAYAHANAPQAOAQAAAWQAAAQgGALQgGANgOAIQAXALAKARQALAPAAAYQAAAWgLAQQgKAQgSALQgSAIgfABgAvCh7IANAAQAcgBAMgGQALgKAAgNQAAgRgNgJQgNgJgbAAIgLAAgAvCjoIALAAQATAAAHgHQAJgHAAgMQgBgNgGgGQgLgIgPAAIgNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-101,-33.9,202,67.8), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AL4ILIAegfQAUAVARAAIANgDIANgNIhXi+IA0AAIA6CJIAviJIAwAAIhBCwQgSAugSAOQgUAQgXAAQglAAgegkgABGILQgkgkAAg5QAAglAQgdQAQgcAggRQAigTAiAAQAgAAAaANQAaALAYAaIgiAgQgigkgpAAQgiAAgbAYQgXAXABAlQAAAYAKATQALAUASAKQAVAMAYAAQASAAATgIQASgIATgUIAgAhQgaAZgaAMQgVAKgiAAQg7AAgkgkgAKnIpIAAhrIhSAAIAABrIgvAAIAAj2IAvAAIAABdIBSAAIAAhdIAwAAIAAD2gAG+IpIAAiaIhbCaIgqAAIAAj2IAwAAIAACfIBdifIAnAAIAAD2gAiUIpIAAj2IAvAAIAABdIAKAAQAhAAAQAHQAUAHAPATQANATgBAbQAAAYgLATQgPASgOAGQgRAHgbAAgAhlH9IALAAQAeAAAKgHQAKgJAAgQQAAgjgzAAIgKAAgAjjIpIhEi2IhFC2IgyAAIBgj2IAvAAIBfD2gAo0IpIAAj2ICGAAIAAAuIhYAAIAAAsIBYAAIAAAuIhYAAIAABAIBYAAIAAAugAqdIpIAAjLIhSAAIAADLIgwAAIAAj2ICxAAIAAD2gAt0IpIgUgyIhjAAIgVAyIgxAAIBfj2IAwAAIBfD2gAvaHJIBBAAIghhWgAPvBcQgjglgBg2QABgjARgeQAPgdAegRQAdgSAkAAQA2AAAkAmQAnAnAAA0QAAA2glAlQglAmg1AAQg6AAgkgmgAQSg6QgXAXAAAkQAAArAdAXQAaASAbAAQAiAAAWgYQAYgYAAgkQAAgigYgYQgXgYgjAAQgjAAgWAXgAIxBcQglglAAg2QAAgjARgeQASgdAdgRQAcgSAlAAQAzAAAnAmQAlAoAAAzQAAA2glAlQgkAmg2AAQg4AAgkgmgAJSg6QgXAXAAAkQAAApAcAZQAbASAbAAQAhAAAXgYQAYgXAAglQAAgjgYgXQgWgYgkAAQgiAAgXAXgAhzBeQgkgkAAg5QAAgkAQgdQAPgdAigRQAhgSAgAAQAeAAAeAMQAaAMAWAaIggAfQgigkgqAAQggAAgcAZQgYAYAAAjQAAAXALAUQAMAUASAKQAVALAYAAQATAAARgHQARgIAVgVIAfAhQgaAagaAMQgYAKgfAAQg6AAgkgkgAxQBeQglglAAg4QAAgkARgdQAQgbAggTQAhgSAhAAQAgAAAbAMQAdAMAUAaIghAfQgggkgrAAQgjAAgYAZQgZAYAAAjQAAAXALAUQAMAUASAKQAVALAWAAQAVAAAQgHQAWgKAQgTIAhAhQgaAagaAMQgYAKggAAQg6AAgkgkgAM4B8IAAj1IB6AAIAAAuIhMAAIAADHgAG+B8IhLhtIAABtIgwAAIAAj1IAwAAIAABUIBDhUIA3AAIhVBuIBeCHgACAB8IAAj1IAvAAIAABdIAJAAQAhAAAQAHQAUAHAOASQAPAPAAAeQAAAZgNASQgMASgRAHQgRAHgbAAgACvBQIALAAQAcAAAMgIQAJgIAAgQQAAgkgzAAIgJAAgAjzB8IAAhrIhTAAIAABrIgvAAIAAj1IAvAAIAABdIBTAAIAAhdIAwAAIAAD1gAnLB8IgSgyIhlAAIgUAyIgyAAIBgj1IAvAAIBgD1gAowAcIBBAAIgghVgArbB8IAAjKIhTAAIAADKIguAAIAAj1ICxAAIAAD1gAzLB8IAAj1IAuAAIAAD1gAOylQQgmgoAAg0QABgjARgeQASgdAdgRQAcgTAlAAQA2AAAkAnQAlAlAAA2QAAA4glAkQgkAlg2AAQg4AAgkglgAPUnoQgYAZAAAjQAAArAeAXQAXATAdAAQAgAAAYgYQAZgZAAgkQAAgigZgYQgWgZgiAAQglAAgVAXgAHylQQgkglAAg3QAAgjASgeQASgeAbgQQAdgTAlAAQA1AAAjAnQAnAnAAA0QAAA3glAlQglAlg1AAQg6AAgjglgAIVnoQgYAXAAAlQABArAcAXQAaATAbAAQAhAAAYgYQAXgaAAgjQAAgigYgYQgXgZgiAAQgjAAgWAXgAlxlQQgkgogBg0QAAgjARgeQATgdAdgRQAcgTAlAAQAzAAAnAnQAkAlABA2QgBA4gkAkQgkAlg2AAQg4AAglglgAlQnoQgXAaABAiQAAArAeAXQAXATAdAAQAgAAAYgYQAYgXAAgmQAAgjgYgXQgXgZghAAQgkAAgYAXgAtmlQQgkglAAg3QgBgjASgeQASgdAdgRQAcgTAkAAQA0AAAmAnQAmAogBAzQABA3gmAlQgjAlg3AAQg4AAgkglgAtFnoQgWAXAAAlQAAAqAcAYQAaATAbAAQAiAAAXgYQAYgXAAgmQAAgjgYgXQgWgZgkAAQgiAAgYAXgAxylOQgkgkAAg6QAAgoAQgZQAQgdAggRQAhgTAhAAQAeAAAeANQAaAMAXAZIghAgQghgkgrAAQghAAgbAYQgZAZAAAjQAAAXAMAUQALAUAUAKQATAMAZAAQASAAATgHQARgJAUgUIAfAhQgZAagaALQgZAKgfAAQg6AAgkgjgAL6kwIAAj3IB7AAIAAAuIhNAAIAADJgAFdkwIAAjJIgtAAIAAguICKAAIAAAuIgtAAIAADJgADikwIAAibIhcCbIgpAAIAAj3IAvAAIAACfIBdifIApAAIAAD3gAhpkwIAAj3IAmAAQAlAAAOAFQAUAHANAOQAOAOAAAXQAAAPgHALQgEAMgPAKQAYALAKAQQAKAOAAAXQAAAVgKAQQgLARgSAJQgQAJgdAAgAg6ldIALAAQAdAAAMgHQAJgJAAgMQAAgSgKgIQgNgJgcAAIgKAAgAg6nHIAKAAQATAAAHgHQAJgGAAgMQAAgMgJgHQgHgHgQAAIgNAAgAnjkwIhMhtIAABtIgvAAIAAj3IAvAAIAABVIBEhVIA3AAIhWBvIBfCIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-122.8,-55.8,245.6,111.8), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtYCZQgVgKgSgaIAkgbQASAaAaAAQARAAAKgJQAKgJAAgRQAAgQgKgJQgKgKggAAIgKAAIAAgrIAKAAQATAAAKgIQAKgKAAgNQAAgNgIgHQgJgJgNAAQgOAAgTAQIgcgeQAWgVAQgEIAbgEQAfAAAVARQAVAUAAAdQAAANgFANQgGAOgUALQAsAVAAAuQAAAjgYAVQgXAWgkAAQgVAAgVgJgAm2B8QglgkAAg6QAAgkARgdQAOgdAigRQAhgTAjAAQAfAAAcANQAaALAXAaIghAgQgjgkgqAAQgjAAgYAZQgZAXAAAkQAAAZAKATQAMAUATAKQAXAMAWAAQASAAATgIQAWgKAQgTIAgAiQgaAagbALQgVAKgjAAQg6AAgkgkgArGB8IAfggQAUAWARAAIANgDIANgNIhYi/IA2AAIA5CKIAwiKIAxAAIhCCxQgSAugSAPQgVAPgXAAQglAAgfgkgANQCbIAAibIhdCbIgqAAIAAj4IAwAAIAACfIBeifIApAAIAAD4gAJ0CbIgUgzIhlAAIgVAzIgxAAIBgj4IAxAAIBfD4gAIMA6IBDAAIgihWgAFgCbIAAhtIgQAAQghAAgSgEQgRgEgNgLQgQgNgGgOQgFgNAAgfIAAgxIAvAAIAAAwQAAAaAKAKQAJAJAeAAIAcAAIAAhdIAwAAIAAD4gACOCbIAAj4IAwAAIAAD4gAgwCbIAAj4IAyAAQAmAAAVAHQATAHAJASQALATAAAVQAAAbgOAQQgMAQgYAHQgPAEgjAAIAABqgAAAADIAPAAQATAAAGgDQAEAAAGgGQAEgGAAgJQAAgOgLgHQgJgFgWAAIgMAAgAitCbIAAjKIgsAAIAAguICKAAIAAAuIgvAAIAADKgAMCh3QgMgEgKgMQgKgMgBgOIAlAAQADAHAKAFIATACQAMAAAIgEQAHgDAFgHIAlAAQgEAWgRANQgSANgeAAQgXAAgNgGg");
	this.shape.setTransform(0,-3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABsCPIAAgmIkcAAIAAj3IAvAAIAADNIBDAAIAAjNIAwAAIAADNIBDAAIAAjNIAvAAIAADNIAzAAIAABQgAC1BpIAAj3ICIAAIAAAuIhYAAIAAAtIBYAAIAAAuIhYAAIAABAIBYAAIAAAugAlkBpIgUgyIhlAAIgUAyIgxAAIBfj3IAxAAIBgD3gAnMAJIBDAAIghhWgAHMAkIAAgqIBXAAIAAAqg");
	this.shape_1.setTransform(0,-41.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AneBfQgmgmAAg4QAAglASgcQAPgdAigSQAhgTAhAAQAgAAAcANQAcAMAVAaIggAgQghglgsABQgkgBgYAZQgZAYAAAkQAAAXAMAUQALAUATALQAUALAXAAQAUAAATgHQAVgLARgSIAgAhQgaAagaAMQgZAKggAAQg7AAgkgkgAHNB9IhNhuIAABuIgwAAIAAj3IAwAAIAABVIBEhVIA4AAIhWBvIBfCIgAD6B9IgTgyIhnAAIgUAyIgxAAIBhj3IAvAAIBgD3gACRAcIBEAAIghhVgAgEB9IgaicIg1CcIgqAAIg0icIgcCcIguAAIArj3IAuAAIA6CsIA6isIAuAAIApD3g");
	this.shape_2.setTransform(0,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-89.5,-56.1,179.1,112.2), null);


(lib.t1_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An1FFIAAg3IiMAAIAAA3IguAAIAAhgIARAAQAkgwAAhiIAAghICbAAIAACzIAZAAIAABggApMBdQABBQgdA4IBaAAIAAiMIg+AAgAiuD9QgZgUgBglIAxAAQAAApAvAAQAQAAAMgJQAKgLgBgPQAAgfgpAAIgRAAIAAghIANABQAoAAAAgeQAAgaggAAQgnAAgDAhIgtAAQABgjAZgTQAXgQAmAAQAhAAAWAQQAXARAAAbQAAARgKAMQgIALgQAFQATACAKAOQANAOAAAVQAAAggYATQgZAVglAAQgtAAgZgVgALIEOIAAjcIAwAAIAADcgAJmEOIAAhfIhaAAIAABfIgwAAIAAjcIAwAAIAABSIBaAAIAAhSIAwAAIAADcgAF5EOIAAiZIgBAAIhSCZIg2AAIAAjcIAxAAIAACYIABAAIBSiYIA2AAIAADcgACkEOIgRgyIhSAAIgSAyIgxAAIBSjcIAzAAIBTDcgABNC5IA6AAIgehSgAkbEOIAAiZIgBAAIhSCZIg3AAIAAjcIAwAAIAACYIABAAIBSiYIA3AAIAADcgAEbgJIASAAQACAUAfAAQAdAAADgUIASAAQAAAsgyAAQgzAAAAgsgACxh+QgdggAAgzQAAg1AdgeQAeggAxAAQAwAAAfAgQAeAfAAA0QAAAzgeAgQgfAggwAAQgxAAgegggADUkJQgPAVAAAiQAAAkAQATQAPAVAcAAQAbAAARgVQAPgUAAgjQAAgjgPgUQgRgUgbAAQgbAAgRAUgAklh+QgeggAAgzQAAg1AegeQAdggAyAAQAwAAAeAgQAeAfAAA0QAAAzgeAgQgeAggwAAQgyAAgdgggAkBkJQgRAVAAAiQAAAkARATQAPAVAcAAQAbAAAQgVQAPgUAAgjQAAgjgPgUQgQgUgbAAQgcAAgPAUgAK9hkIAAgpQAQAFAIAAQAVAAAAgTQAAgKgKgSIhAiIIA2AAIAyB0IAvh0IA0AAIhKChQgQAjgOAOQgQAOgbAAIgbgFgAtNhkIAAgpQAPAFAHAAQAXAAAAgTQAAgFgLgXIg/iIIA0AAIAzB0IAwh0IA0AAIhKChQgQAjgQAOQgPAOgbAAQgFAAgVgFgAJVhjIAAicIg3CcIglAAIg2ibIAACbIgvAAIAAjcIBFAAIA0CXIAxiXIBEAAIAADcgAhDhjIAAjcIBoAAQAeAAATANQAUAPAAAbQAAAfgdAPQAnALAAAqQAAAfgVASQgUARghAAgAgUiKIAwAAQATAAAJgFQAMgHAAgSQAAgegrAAIgtAAgAgUjnIArAAQAkAAAAgYQAAgbgkAAIgrAAgAmbhjIAAhfIhaAAIAABfIgxAAIAAjcIAxAAIAABSIBaAAIAAhSIAvAAIAADcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2_2, new cjs.Rectangle(-87.5,-32.5,175,65.1), null);


(lib.t1_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmsEMQgegfgBg0QABg1AegfQAeggAyAAQAvAAAeAgQAeAgAAA0QAAA0geAfQgeAggvAAQgyAAgegggAmJCBQgRAVABAiQgBAkARAUQAQAUAdAAQAbAAAPgUQAQgUAAgkQAAgjgQgUQgPgVgcAAQgcAAgQAVgAJ+EmIAAiYIgBAAIhTCYIg2AAIAAjcIAwAAIAACZIABAAIBTiZIA3AAIAADcgAGQEmIAAheIhZAAIAABeIgxAAIAAjcIAxAAIAABUIBZAAIAAhUIAwAAIAADcgACkEmIAAiYIgBAAIhUCYIg2AAIAAjcIAwAAIAACZIABAAIBUiZIA2AAIAADcgAjJEmIAAjcIBpAAQAgAAASANQAVAPAAAbQAAAhgfANQApALAAAsQgBAegVASQgVAQggAAgAiZEBIAwAAQApAAAAgfQAAgegqAAIgvAAgAiZCkIAsAAQAkAAAAgbQAAgZgkAAIgsAAgAojEmIAAheIhaAAIAABeIgxAAIAAjcIAxAAIAABUIBaAAIAAhUIAwAAIAADcgAgJgQIAAg5IiLAAIAAA5IgwAAIAAhiIAQAAQAkgvAAhjIAAghICdAAIAACzIAYAAIAABigAhfj6QAABRgeA3IBbAAIAAiMIg9AAgABchjQgeggAAg0QAAg0AeggQAeggAwAAQAyAAAdAgQAeAgABA0QgBA0geAgQgdAfgyAAQgwAAgegfgAB/juQgRAUAAAiQAAAkAQAUQAQAVAcAAQAdAAAPgVQARgVgBgjQABgjgRgUQgPgUgdAAQgbAAgQAVgAlxhKIAAgoQAJAEAOAAQAWAAAAgSQABgHgLgWIhBiIIA2AAIAyBzIAxhzIA0AAIhLCiQgQAigPAOQgQAOgaAAQgSAAgJgFgAIhhJIAAjcIAyAAIAADcgAFAhJIAAjcIBoAAQAfAAATANQAUAPAAAbQAAAggeAOQApAKAAAsQAAAfgWARQgUARgiAAgAFuhvIAyAAQAoAAAAgfQAAgdgrAAIgvAAgAFujMIAtAAQAkAAAAgaQAAgagkAAIgtAAgAndhJIAAhbQglAHgKAAQhPAAAAhOIAAg6IAwAAIAAA6QAAAVAIAIQAIAIATAAIArgFIAAhaIAyAAIAADcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2_1, new cjs.Rectangle(-68.6,-29.9,137.3,60), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D00418").s().p("AmwF/QgKgDgBgLQgBgKANgEQArgNArg2QAlgvAchBQhVAagnglQgdgcAAgzQAAgcAQhMQAQhLgBgZQgCgdgFgMQgGgPgRgIQgLgFABgIQAAgIAJgEQAdgLAogCQAZgBAVAQQATAOAJAVQALAcgOBIIgYCBQgJBSBLgTQAagzAlhUQAthsAPggQAKgXAXgQQAZgSAegEQAWgCAwAAQAJgBAFAJQAFAJgHAIQgjAlgSAoQgjBHhECVQg7B6gkArQhBBNhJAaQgiANgaAAQgOAAgLgEgAKDDHQhZgBgsg7Qgsg6AUhaIABAAQAVhkBLg+QBMg+BiABQBAABAyAuQBCA6gWBnQgWBlhLA9QhNA9hfAAIgDAAgAKXiCQgfAqgQBFQgOBFAOAsQAPAsAmAAQAlAAAggqQAggrAOhCQAQhFgPguQgPgrgmAAIgCAAQgkAAgfApgACfDEQhAgEgrgvQg1g7AUhdQAKgqAXgpQAeg2AugiQAhgYAsgMQAZgHAYAFQAhAEAPAWQAIAMgFAKQgFAKgQgCQgmgEgjAbQguAkgWBTIAAABQgMArAIAxQAHA7AjACQAQACAWgNQAVgOAQgWQAug/AWhyQAXh1gWhCQgJgbgLgOQgMgPgTgHQgbgJglAGIgtAKQgVAFgFgKQgEgLAUgNQAegSAugIQBbgQA8AtQBFA1AGBzQAEBOgWBKQgcBdg6A9QhHBMhnAAIgUgBgAqVC8QgWgEgNgVQgQgZAJgmQAFgaALglIAKgeQgrAchBAHQhTAIghgwQgegpAShBQAjhnAPgzQAEgQgMgKQgIgGgNgBQgHAAgDgFQgEgFAEgHQAFgLAvgKQAqgKATABQAbACANAPQANARgHAYQgMAtgaBHIgJAdQgRA9AQAfQAYAtBng6IBPjoQAJgbAVgLQAfgRBFAFQAMABAFAIQAFAJgHAIQgaAYgKAjIhuFaQgMApAWASQAGAGAAAIQAAALgLADQgfALgZAAQgNAAgLgDg");
	this.shape.setTransform(2.6,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7B7C7F").s().p("ADPAqIAAgJIAGABQAKgBAAgYIACgxIA0AAIAABSIgLAAIAAhIIgeAAIgCAtQgBAcgSAAgAAUAgQgLgLgBgTIgOAAIAAAoIgLAAIAAhSIALAAIAAAiIAOAAQACgQAKgLQAKgJARAAQASAAAKANQAJAKAAATQAAATgJAMQgKAMgSAAQgSAAgJgLgAAagVQgGAIAAANQAAAQAGAKQAIAJANAAQAMAAAIgKQAGgKABgPQgBgOgGgKQgIgIgMgBQgNAAgIAMgAh9AqIAAgJIAGABQAKgBABgYIABgxIA0AAIAABSIgLAAIAAhIIgeAAIgCAtQAAAcgTAAgAjOAqIAAgJQADACAGAAQAIAAAFgMIABgDIgeg8IAMAAIAYAxIAXgxIANAAIghBBQgJASgMAAgAlMAgQgKgMAAgUQAAgSAKgLQALgNATAAQALAAAKAGQALAHABAMIgLAAQgEgQgSAAQgYAAgEAcIAnAAIAAAHIgnAAQABAhAaAAQATAAAFgWIAKAAQgEAegeAAQgSAAgLgLgAm4AeQgJgMAAgSQAAgTALgLQAKgMATAAQASAAAKANQALAKAAATQAAATgKAMQgLAMgSAAQgTAAgMgNgAm2AAQAAAQAHAKQAIAJAOAAQANAAAHgKQAIgJAAgQQAAghgcAAQgdAAAAAhgAH8AqIAAhSIA5AAIAAAKIguAAIAAAZIAsAAIAAAIIgsAAIAAAdIAvAAIAAAKgAHMAqIAAgoIgsAAIAAAoIgLAAIAAhSIALAAIAAAiIAsAAIAAgiIALAAIAABSgAE7AqIAAhSIA5AAIAAAKIguAAIAAAZIArAAIAAAIIgrAAIAAAdIAvAAIAAAKgAB1AqIAAhSIA5AAIAAAKIguAAIAAAXIAcAAQAaAAAAAYQAAAZgaAAgACAAgIAYAAQASAAAAgPQAAgPgSAAIgYAAgAntAqIAAhEIgZBEIgKAAIgahEIAABEIgLAAIAAhSIAPAAIAaBFIAahFIAQAAIAABSg");
	this.shape_1.setTransform(1.3,-50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0B9B5").s().p("AKaAOQgHgGAAgHQAAgIAHgFQAFgGAIAAQAIAAAGAGQAFAFAAAIQAAAHgFAGQgGAFgIAAQgIAAgFgFgAqzAOQgGgGAAgHQAAgIAGgFQAGgGAHAAQAIAAAHAGQAEAFAAAIQAAAHgEAGQgHAFgIAAQgHAAgGgFg");
	this.shape_2.setTransform(1.1,-50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D00418").s().p("AAANBQg0ACgxgQQjkhJjsiCQk/iwi9jYQhhhtg1h9Qg0h7gEh1QgFjBB3iZQB3iXDEg2QCUgoCcALQB2AJCPApQCPAqAkAIQBaAPAWAAQAUAAAzgIQAsgJClgwQCPgpB2gJQCdgLCUAoQDDA2B3CXQB4CZgGDBQgEB1g0B7Qg1B9hhBtQi9DYk/CwQjsCCjkBJQgrAOgvAAIgMAAgAomrdQlYAMiaDEQhyCRASCxQAPCTAvBcQBYCxDuC3QC/CTEKB3QBgAqBoAjQAyAPAxABQAzgBAxgPQBjggBlgtQEKh3C/iTQDvi3BYixQAvhcAOiTQASixhyiRQiajElYgMQhAgDhGAKQgrAGhTARIioAlQhOARgpAAQghAAg8gMQgdgFg7gNIhxgYQhTgRgrgGQg3gIg0AAIgbABg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Слой_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah+MeQltiOkOi+QmjkngvlFQgYinA+iOQAvhuBahPQCSiDDngZQDxgbEPBfQCjA5Cng7QE/hyEAA0QC9AnCIB8QBYBPAqBnQA3CIgaCrQgwFGmkEmQkQC+ltCNQg+AXg8AAQg+AAg/gYg");
	this.shape_4.setTransform(-0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-128,-83.3,256,166.6), null);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-300,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(-300,-118.5,600,237), null);


(lib.o4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.o4();
	this.instance.parent = this;
	this.instance.setTransform(-89,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.o4_1, new cjs.Rectangle(-89,-65,178,130), null);


(lib.o3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.o3();
	this.instance.parent = this;
	this.instance.setTransform(-89,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.o3_1, new cjs.Rectangle(-89,-54,178,108), null);


(lib.o2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.o2();
	this.instance.parent = this;
	this.instance.setTransform(-52,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.o2_1, new cjs.Rectangle(-52,-71,104,142), null);


(lib.o1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.o1();
	this.instance.parent = this;
	this.instance.setTransform(-60,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.o1_1, new cjs.Rectangle(-60,-67,120,134), null);


(lib.bubbles2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bubbles2();
	this.instance.parent = this;
	this.instance.setTransform(-161,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubbles2_1, new cjs.Rectangle(-161,-300,322,600), null);


(lib.bubbles1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bubbles1();
	this.instance.parent = this;
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubbles1_1, new cjs.Rectangle(-200,-300,400,600), null);


(lib.boxes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.boxes3();
	this.instance.parent = this;
	this.instance.setTransform(-95,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes2, new cjs.Rectangle(-95,-126,186,262), null);


(lib.boxes1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-107,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes1_1, new cjs.Rectangle(-107,-103,214,206), null);


(lib.bottle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bottle();
	this.instance.parent = this;
	this.instance.setTransform(-58,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottle_1, new cjs.Rectangle(-58,-200,116,400), null);


(lib.billet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-86.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.billet, new cjs.Rectangle(-86.5,-112,173,224), null);


(lib.bgImg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2, new cjs.Rectangle(-150,-190,300,380), null);


(lib.yogurt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("EAAUAs7QtFgou0lOMAAAhUEMA3LAAAMAAABVyQrZENsbAAQhuAAhwgFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:-1.4,y:-205}).wait(127).to({graphics:null,x:0,y:0}).wait(4));

	// o2
	this.instance = new lib.o2_1();
	this.instance.parent = this;
	this.instance.setTransform(53.7,-530.9,0.9,0.9,-54,0,0,-0.1,-0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:82.1},10,cjs.Ease.get(-1)).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-54.4,x:52.7},0).wait(1).to({rotation:-54.9,x:51.7},0).wait(1).to({rotation:-55.2,x:50.7},0).wait(1).to({rotation:-55.6,x:49.6},0).wait(1).to({rotation:-55.9,x:48.6},0).wait(1).to({rotation:-56.4,x:47.5},0).wait(1).to({rotation:-56.7,x:46.5},0).wait(1).to({rotation:-57.2,x:45.4},0).wait(1).to({rotation:-57.4,x:44.5},0).wait(1).to({rotation:-57.9,x:43.4,y:82},0).wait(1).to({rotation:-58.2,x:42.4},0).wait(1).to({rotation:-58.7,x:41.4},0).wait(1).to({rotation:-59.1,x:40.3},0).wait(1).to({rotation:-59.4,x:39.4},0).wait(1).to({rotation:-59.9,x:38.3},0).wait(1).to({rotation:-60.2,x:37.3},0).wait(1).to({rotation:-60.7,x:36.3},0).wait(1).to({rotation:-60.9,x:35.3,y:81.9},0).wait(1).to({rotation:-61.4,x:34.2},0).wait(1).to({rotation:-61.7,x:33.2,y:82},0).wait(1).to({rotation:-62.2,x:32.2,y:81.9},0).wait(1).to({rotation:-62.4,x:31.1},0).wait(1).to({rotation:-62.9,x:30.1},0).wait(1).to({rotation:-63.2,x:29.1,y:81.8},0).wait(1).to({rotation:-63.7,x:28.1},0).wait(1).to({rotation:-64.2,x:27.1},0).wait(1).to({rotation:-64.4,x:26,y:81.9},0).wait(1).to({rotation:-64.9,x:25,y:81.8},0).wait(1).to({rotation:-65.2,x:24},0).wait(1).to({rotation:-65.7,x:23},0).wait(1).to({rotation:-65.9,x:21.9},0).wait(1).to({rotation:-66.4,x:21,y:81.7},0).wait(1).to({rotation:-66.7,x:19.9},0).wait(1).to({rotation:-67.2,x:18.9},0).wait(1).to({rotation:-67.5,x:17.9},0).wait(1).to({rotation:-67.9,x:16.9},0).wait(1).to({rotation:-68.2,x:15.8},0).wait(1).to({rotation:-68.7,x:14.8},0).wait(1).to({rotation:-69,x:13.8,y:81.6},0).wait(1).to({rotation:-69.4,x:12.7},0).wait(1).to({rotation:-69.9,x:11.7},0).wait(1).to({rotation:-70.2,x:10.7},0).wait(1).to({rotation:-70.7,x:9.7},0).wait(1).to({rotation:-71,x:8.7},0).wait(1).to({rotation:-71.4,x:7.6,y:81.5},0).wait(1).to({rotation:-71.7,x:6.6},0).wait(1).to({rotation:-72.2,x:5.6},0).wait(1).to({rotation:-72.5,x:4.6},0).wait(1).to({rotation:-72.9,x:3.6},0).wait(1).to({rotation:-73.2,x:2.5,y:81.4},0).wait(1).to({rotation:-73.7,x:1.5,y:81.5},0).wait(1).to({rotation:-74,x:0.5},0).wait(1).to({regY:-0.2,rotation:-74.5,x:-0.5},0).wait(1).to({rotation:-74.9,x:-1.5,y:81.4},0).wait(1).to({regY:-0.1,rotation:-75.2,x:-2.5,y:81.5},0).wait(1).to({regY:-0.2,rotation:-75.7,x:-3.5,y:81.4},0).wait(1).to({regY:-0.1,rotation:-76,x:-4.6},0).wait(1).to({regY:-0.2,rotation:-76.4,x:-5.6},0).wait(1).to({regY:-0.1,rotation:-76.7,x:-6.6},0).wait(1).to({rotation:-77.2,x:-7.6},0).wait(1).to({rotation:-77.5,x:-8.7},0).wait(1).to({rotation:-78,x:-9.7},0).wait(1).to({rotation:-78.2,x:-10.7,y:81.3},0).wait(1).to({rotation:-78.7,x:-11.7,y:81.4},0).wait(1).to({rotation:-79,x:-12.7,y:81.3},0).wait(1).to({rotation:-79.5,x:-13.7},0).wait(1).to({rotation:-79.9,x:-14.8},0).wait(1).to({rotation:-80.2,x:-15.8},0).wait(1).to({rotation:-80.7,x:-16.8},0).wait(1).to({regX:-0.2,rotation:-81,x:-17.9},0).wait(1).to({regX:-0.1,scaleX:0.9,scaleY:0.9,rotation:-81.4,x:-18.9,y:81.2},0).wait(1).to({rotation:-81.7,x:-19.9},0).wait(1).to({rotation:-82.2,x:-20.9},0).wait(1).to({rotation:-82.5,x:-21.9},0).wait(1).to({rotation:-83,x:-23,y:81.1},0).wait(1).to({rotation:-83.2,x:-23.9},0).wait(1).to({rotation:-83.7,x:-25},0).wait(1).to({regX:-0.2,rotation:-84,x:-26,y:81.2},0).wait(1).to({regX:-0.1,rotation:-84.5,x:-27,y:81.1},0).wait(1).to({rotation:-84.9,x:-28},0).wait(1).to({rotation:-85.2,x:-29.1},0).wait(1).to({rotation:-85.7,x:-30.1},0).wait(1).to({rotation:-86,x:-31.2,y:81},0).wait(1).to({rotation:-86.5,x:-32.1,y:81.1},0).wait(1).to({rotation:-86.7,x:-33.2,y:81},0).wait(1).to({rotation:-87.2,x:-34.2},0).wait(1).to({rotation:-87.5,x:-35.2},0).wait(1).to({rotation:-88,x:-36.2},0).wait(1).to({rotation:-88.2,x:-37.2},0).wait(1).to({rotation:-88.7,x:-38.3,y:80.9},0).wait(1).to({rotation:-89,x:-39.3},0).wait(1).to({rotation:-89.5,x:-40.3},0).wait(1).to({rotation:-89.9,x:-41.4},0).wait(1).to({rotation:-90,x:-42.4},0).wait(1).to({rotation:-90.5,x:-43.4},0).wait(1).to({rotation:-90.8,x:-44.4},0).wait(1).to({rotation:-91.3,x:-45.4,y:80.8},0).wait(1).to({rotation:-91.5,x:-46.4},0).wait(1).to({rotation:-92,x:-47.5},0).wait(1).to({rotation:-92.3,x:-48.5},0).wait(1).to({rotation:-92.8,x:-49.6},0).wait(1).to({regY:-0.2,rotation:-93.1,x:-50.7,y:80.7},0).wait(1).to({regY:-0.1,rotation:-93.5,x:-51.6,y:80.8},0).wait(1).to({rotation:-93.8,x:-52.6},0).wait(1).to({regY:-0.2,rotation:-94.3,x:-53.7,y:80.7},0).wait(1).to({regY:-0.1,rotation:-94.8,x:-54.6},0).wait(1).to({regY:-0.2,rotation:-95,x:-55.7},0).wait(1).to({rotation:-95.5,x:-56.8},0).wait(1).to({regY:-0.1,rotation:-95.8,x:-57.7,y:80.6},0).wait(1).to({rotation:-96.3,x:-58.8,y:80.7},0).wait(1).to({regY:-0.2,rotation:-96.5,x:-59.8,y:80.6},0).wait(1).to({rotation:-97,x:-60.9},0).wait(1).to({regY:-0.1,rotation:-97.3,x:-61.8},0).to({_off:true},1).wait(4));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_14 = new cjs.Graphics().p("EgCdAqdQnVgcmeiYQmhiak+kIMAAAhLpMA3fAAAMAAABOTQnUDyn4BtQl/BTl6AAQhkAAhkgGg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_1_graphics_14,x:-0.4,y:-220.7}).wait(127).to({graphics:null,x:0,y:0}).wait(4));

	// o1
	this.instance_1 = new lib.o1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73,-549);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({y:31},10,cjs.Ease.get(-1)).wait(1).to({rotation:0.3,x:71.6},0).wait(1).to({rotation:0.8,x:70.1},0).wait(1).to({rotation:1.1,x:68.7},0).wait(1).to({rotation:1.5,x:67.3},0).wait(1).to({rotation:2,x:65.8},0).wait(1).to({rotation:2.3,x:64.4},0).wait(1).to({rotation:2.8,x:62.9},0).wait(1).to({rotation:3.1,x:61.5},0).wait(1).to({rotation:3.5,x:60.1},0).wait(1).to({rotation:4,x:58.6},0).wait(1).to({rotation:4.3,x:57.2},0).wait(1).to({rotation:4.8,x:55.7},0).wait(1).to({rotation:5.3,x:54.3},0).wait(1).to({rotation:5.5,x:52.8},0).wait(1).to({rotation:6,x:51.4},0).wait(1).to({rotation:6.3,x:50},0).wait(1).to({rotation:6.8,x:48.5},0).wait(1).to({rotation:7.3,x:47.1},0).wait(1).to({rotation:7.6,x:45.6},0).wait(1).to({rotation:8,x:44.2},0).wait(1).to({rotation:8.5,x:42.8},0).wait(1).to({rotation:8.8,x:41.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.3,x:39.9},0).wait(1).to({rotation:9.6,x:38.4},0).wait(1).to({rotation:10,x:37},0).wait(1).to({rotation:10.5,x:35.5},0).wait(1).to({rotation:10.8,x:34.1},0).wait(1).to({rotation:11.3,x:32.7,y:31.1},0).wait(1).to({rotation:11.8,x:31.3},0).wait(1).to({rotation:12,x:29.8},0).wait(1).to({rotation:12.5,x:28.3},0).wait(1).to({rotation:12.8,x:26.9},0).wait(1).to({rotation:13.3,x:25.5},0).wait(1).to({rotation:13.8,x:24.1},0).wait(1).to({rotation:14.1,x:22.6},0).wait(1).to({rotation:14.5,x:21.2},0).wait(1).to({rotation:14.8,x:19.7,y:31.2},0).wait(1).to({rotation:15.3,x:18.3,y:31.1},0).wait(1).to({rotation:15.8,x:16.9},0).wait(1).to({rotation:16.1,x:15.4},0).wait(1).to({rotation:16.5,x:13.9,y:31.2},0).wait(1).to({rotation:17,x:12.5,y:31.1},0).wait(1).to({rotation:17.3,x:11.1},0).wait(1).to({rotation:17.8,x:9.7},0).wait(1).to({rotation:18.1,x:8.2},0).wait(1).to({rotation:18.6,x:6.8},0).wait(1).to({rotation:19,x:5.3,y:31.2},0).wait(1).to({rotation:19.3,x:3.9},0).wait(1).to({rotation:19.8,x:2.4,y:31.1},0).wait(1).to({rotation:20.3,x:1},0).wait(1).to({rotation:20.6,x:-0.4,y:31.2},0).wait(1).to({rotation:21,x:-1.9,y:31.1},0).wait(1).to({rotation:21.3,x:-3.3},0).wait(1).to({rotation:21.8,x:-4.8},0).wait(1).to({rotation:22.3,x:-6.2,y:31.2},0).wait(1).to({rotation:22.6,x:-7.6,y:31.1},0).wait(1).to({rotation:23.1,x:-9},0).wait(1).to({rotation:23.5,x:-10.5},0).wait(1).to({rotation:23.8,x:-12},0).wait(1).to({rotation:24.3,x:-13.4},0).wait(1).to({rotation:24.6,x:-14.8},0).wait(1).to({rotation:25.1,x:-16.2},0).wait(1).to({rotation:25.5,x:-17.7},0).wait(1).to({rotation:25.8,x:-19.2},0).wait(1).to({rotation:26.3,x:-20.6},0).wait(1).to({rotation:26.8,x:-22.1},0).wait(1).to({rotation:27.1,x:-23.5,y:31.2},0).wait(1).to({rotation:27.6,x:-24.9,y:31.1},0).wait(1).to({rotation:27.8,x:-26.4},0).wait(1).to({rotation:28.3,x:-27.8},0).wait(1).to({rotation:28.8,x:-29.2},0).wait(1).to({rotation:29.1,x:-30.7},0).wait(1).to({rotation:29.6,x:-32.1},0).wait(1).to({rotation:30,x:-33.6},0).wait(1).to({rotation:30.3,x:-35},0).wait(1).to({rotation:30.8,x:-36.5},0).wait(1).to({rotation:31.1,x:-37.9,y:31.2},0).wait(1).to({rotation:31.6,x:-39.4,y:31.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:32.1,x:-40.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:32.3,x:-42.2,y:31.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:32.8,x:-43.7,y:31.1},0).wait(1).to({rotation:33.1,x:-45.1},0).wait(1).to({rotation:33.6,x:-46.6,y:31.2},0).wait(1).to({rotation:34.1,x:-48,y:31.1},0).wait(1).to({rotation:34.4,x:-49.4},0).wait(1).to({rotation:34.8,x:-50.9,y:31.2},0).wait(1).to({rotation:35.3,x:-52.3},0).wait(1).to({rotation:35.6,x:-53.8},0).wait(1).to({rotation:36.1,x:-55.2},0).wait(1).to({rotation:36.4,x:-56.7},0).wait(1).to({rotation:36.9,x:-58},0).wait(1).to({rotation:37.3,x:-59.5},0).wait(1).to({rotation:37.6,x:-61},0).wait(1).to({rotation:38.1,x:-62.4},0).wait(1).to({rotation:38.6,x:-63.9},0).wait(1).to({rotation:38.9,x:-65.3},0).wait(1).to({rotation:39.3,x:-66.7},0).wait(1).to({rotation:39.6,x:-68.2},0).wait(1).to({rotation:40.1,x:-69.6},0).wait(1).to({rotation:40.6,x:-71.1},0).wait(1).to({rotation:40.9,x:-72.5},0).wait(1).to({rotation:41.4,x:-74},0).wait(1).to({rotation:41.8,x:-75.4},0).wait(1).to({rotation:42.1,x:-76.8},0).wait(1).to({rotation:42.6,x:-78.3},0).wait(1).to({rotation:42.9,x:-79.7},0).wait(1).to({rotation:43.4,x:-81.2},0).to({_off:true},1).wait(4));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_14 = new cjs.Graphics().p("EgPdAjoMAAAhMGIe7AAMAAABPOQmABvl2AAQpwAApVk3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_2_graphics_14,x:-26.9,y:-245.9}).wait(127).to({graphics:null,x:0,y:0}).wait(4));

	// o2
	this.instance_2 = new lib.o2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-52,-543.9,1,1,-30);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({y:-23.9},10,cjs.Ease.get(-1)).wait(1).to({scaleX:1,scaleY:1,rotation:-29.6,x:-51.6},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-29.4,x:-51.3,y:-24},0).wait(1).to({regX:0,regY:0,rotation:-29.1,x:-50.9,y:-23.9},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-28.9,x:-50.5,y:-24},0).wait(1).to({regX:0,regY:0,rotation:-28.6,x:-50.3,y:-23.9},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-28.4,x:-49.9,y:-24},0).wait(1).to({regX:0,regY:0,rotation:-28.1,x:-49.6,y:-23.9},0).wait(1).to({regY:-0.1,rotation:-27.9,x:-49.3,y:-24},0).wait(1).to({regY:0,rotation:-27.6,x:-48.9,y:-23.9},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-27.4,x:-48.6,y:-24.1},0).wait(1).to({rotation:-27.1,x:-48.3},0).wait(1).to({regX:0,rotation:-26.9,x:-48,y:-24},0).wait(1).to({rotation:-26.6,x:-47.7},0).wait(1).to({regY:0,rotation:-26.3,x:-47.3,y:-23.9},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-26.1,x:-46.9,y:-24},0).wait(1).to({regX:0,regY:0,rotation:-25.8,x:-46.7,y:-23.9},0).wait(1).to({regY:-0.1,rotation:-25.6,x:-46.3,y:-24},0).wait(1).to({regY:0,rotation:-25.3,x:-46,y:-23.9},0).wait(1).to({regY:-0.1,rotation:-25.1,x:-45.7,y:-24},0).wait(1).to({regY:0,rotation:-24.8,x:-45.3,y:-23.9},0).wait(1).to({rotation:-24.6,x:-45},0).wait(1).to({rotation:-24.3,x:-44.7},0).wait(1).to({regY:-0.1,rotation:-24.1,x:-44.3,y:-24},0).wait(1).to({regY:0,rotation:-23.8,x:-44,y:-23.9},0).wait(1).to({rotation:-23.6,x:-43.6},0).wait(1).to({rotation:-23.3,x:-43.3},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-23.1,x:-42.9,y:-24},0).wait(1).to({regX:0,regY:0,rotation:-22.8,x:-42.7,y:-23.9},0).wait(1).to({rotation:-22.6,x:-42.3},0).wait(1).to({rotation:-22.3,x:-41.9},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-22.1,x:-41.6,y:-24},0).wait(1).to({regX:0,regY:0,rotation:-21.8,x:-41.3,y:-23.9},0).wait(1).to({rotation:-21.6,x:-41},0).wait(1).to({rotation:-21.3,x:-40.6},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-21.1,x:-40.3,y:-24.1},0).wait(1).to({regX:0,regY:0,rotation:-20.8,x:-40,y:-23.9},0).wait(1).to({regY:-0.1,rotation:-20.6,x:-39.7,y:-24},0).wait(1).to({regY:0,rotation:-20.3,x:-39.3,y:-23.9},0).wait(1).to({rotation:-20.1,x:-39},0).wait(1).to({rotation:-19.8,x:-38.7},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-19.6,x:-38.3,y:-24.1},0).wait(1).to({regX:0,regY:0,rotation:-19.3,x:-38,y:-23.9},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-19.1,x:-37.6,y:-24.1},0).wait(1).to({regX:0,regY:0,rotation:-18.8,x:-37.3,y:-23.9},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-18.6,x:-37,y:-24.1},0).wait(1).to({rotation:-18.3,x:-36.6},0).wait(1).to({regX:0,rotation:-18.1,x:-36.4,y:-24},0).wait(1).to({rotation:-17.8,x:-36.1},0).wait(1).to({regY:0,rotation:-17.6,x:-35.7,y:-23.9},0).wait(1).to({regY:-0.1,rotation:-17.3,x:-35.4,y:-24},0).wait(1).to({regY:0,rotation:-17.1,x:-35,y:-23.9},0).wait(1).to({regY:-0.1,rotation:-16.8,x:-34.7,y:-24},0).wait(1).to({regY:0,rotation:-16.6,x:-34.4,y:-23.9},0).wait(1).to({regY:-0.1,rotation:-16.3,x:-34.1,y:-24},0).wait(1).to({regY:0,rotation:-16.1,x:-33.7,y:-23.9},0).wait(1).to({rotation:-15.8,x:-33.4},0).wait(1).to({rotation:-15.6,x:-33},0).wait(1).to({rotation:-15.3,x:-32.6},0).wait(1).to({rotation:-15.1,x:-32.4},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-14.8,x:-32,y:-24},0).wait(1).to({regX:0,regY:0,rotation:-14.6,x:-31.7,y:-23.9},0).wait(1).to({regY:-0.1,rotation:-14.3,x:-31.4,y:-24},0).wait(1).to({regY:0,rotation:-14.1,x:-31.1},0).wait(1).to({rotation:-13.8,x:-30.7},0).wait(1).to({regY:-0.1,rotation:-13.6,x:-30.4,y:-24.1},0).wait(1).to({regY:0,rotation:-13.3,x:-30.1,y:-24},0).wait(1).to({regY:-0.1,rotation:-13.1,x:-29.7,y:-24.1},0).wait(1).to({regY:0,rotation:-12.8,x:-29.4,y:-24},0).wait(1).to({regY:-0.1,rotation:-12.6,x:-29.1,y:-24.1},0).wait(1).to({rotation:-12.3,x:-28.8},0).wait(1).to({regY:0,rotation:-12.1,x:-28.4,y:-24},0).wait(1).to({rotation:-11.8,x:-28.1},0).wait(1).to({regY:-0.1,rotation:-11.6,x:-27.8,y:-24.1},0).wait(1).to({regY:0,rotation:-11.3,x:-27.4,y:-24},0).wait(1).to({regY:-0.1,rotation:-11.1,x:-27.1,y:-24.1},0).wait(1).to({regY:0,rotation:-10.8,x:-26.8,y:-24},0).wait(1).to({rotation:-10.6,x:-26.4},0).wait(1).to({regY:-0.1,rotation:-10.3,x:-26.1,y:-24.1},0).wait(1).to({regY:0,rotation:-10.1,x:-25.8,y:-24},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:-9.8,x:-25.5,y:-24.1},0).wait(1).to({rotation:-9.6,x:-25.2},0).wait(1).to({regX:0,rotation:-9.3,x:-24.8},0).wait(1).to({regY:0,rotation:-9.1,x:-24.4,y:-24},0).wait(1).to({regY:-0.1,rotation:-8.8,x:-24.1,y:-24.1},0).wait(1).to({regX:-0.1,rotation:-8.6,x:-23.9},0).wait(1).to({regX:0,scaleX:1,scaleY:1,rotation:-8.5,x:-23.5},0).wait(1).to({regY:0,scaleX:1,scaleY:1,rotation:-8.1,x:-23.1,y:-24},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.8,x:-22.8},0).wait(1).to({rotation:-7.6,x:-22.4},0).wait(1).to({regY:-0.1,rotation:-7.3,x:-22.1,y:-24.1},0).wait(1).to({regY:0,rotation:-7.1,x:-21.8,y:-24},0).wait(1).to({rotation:-6.8,x:-21.5},0).wait(1).to({x:-21.1},0).wait(1).to({rotation:-6.3,x:-20.8},0).wait(1).to({regY:-0.1,rotation:-6.1,x:-20.4,y:-24.1},0).wait(1).to({regX:0.1,rotation:-5.8,x:-20},0).wait(1).to({regX:-0.1,rotation:-5.6,x:-19.9},0).wait(1).to({regX:0,regY:0,rotation:-5.3,x:-19.4,y:-24},0).wait(1).to({rotation:-5.1,x:-19.1},0).wait(1).to({rotation:-5,x:-18.8},0).wait(1).to({rotation:-4.8,x:-18.5},0).wait(1).to({rotation:-4.3,x:-18.1},0).wait(1).to({regY:-0.1,rotation:-4.1,x:-17.8,y:-24.1},0).wait(1).to({rotation:-3.8,x:-17.4},0).wait(1).to({rotation:-3.6,x:-17.1},0).wait(1).to({rotation:-3.3,x:-16.8},0).wait(1).to({regX:-0.1,x:-16.5},0).wait(1).to({regX:0.1,rotation:-3,x:-16.1},0).wait(1).to({regX:0,regY:0,rotation:-2.6,x:-15.8,y:-24},0).wait(1).to({rotation:-2.3,x:-15.4},0).wait(1).to({rotation:-2.1,x:-15.1},0).wait(1).to({rotation:-1.8,x:-14.8},0).wait(1).to({rotation:-1.6,x:-14.5},0).wait(1).to({rotation:-1.5,x:-14.1},0).wait(1).to({rotation:-1.3,x:-13.8},0).wait(1).to({rotation:-1,x:-13.5},0).to({_off:true},1).wait(4));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_14 = new cjs.Graphics().p("EgCWAi0QjCgsjwhCQhagUkZgHQlDgJgkgEQhWgIhwAoQg4ATgpATUgCrhFZgAKgAJQgEgEcCAOQb2APAIgFQgBAHgBKdQgDNhgKJ6UgAgAiGgB1AANQg7AHiQAiIkiBHQmfBhjzAGIgoABQj0AAlVhMgEAb+gjqIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_3_graphics_14,x:1.1,y:-262.7}).wait(127).to({graphics:null,x:0,y:0}).wait(4));

	// o1
	this.instance_3 = new lib.o1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-98.5,-530.3,0.659,0.659,0,-14.8,165.2,0.4,-0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({y:-60.3},10,cjs.Ease.get(-1)).wait(1).to({regX:0.3,regY:-0.6,skewX:-15.1,skewY:164.9,x:-96.8,y:-60.4},0).wait(1).to({regX:0.4,regY:-0.5,skewX:-15.5,skewY:164.5,x:-95.1,y:-60.3},0).wait(1).to({regY:-0.6,skewX:-16,skewY:164,x:-93.3,y:-60.4},0).wait(1).to({regY:-0.5,skewX:-16.3,skewY:163.7,x:-91.6,y:-60.3},0).wait(1).to({skewX:-16.8,skewY:163.2,x:-89.8},0).wait(1).to({skewX:-17.1,skewY:162.9,x:-88.1},0).wait(1).to({skewX:-17.5,skewY:162.5,x:-86.3},0).wait(1).to({regX:0.3,skewX:-17.8,skewY:162.2,x:-84.5},0).wait(1).to({regY:-0.6,skewX:-18.3,skewY:161.7,x:-82.7,y:-60.4},0).wait(1).to({regY:-0.5,skewX:-18.8,skewY:161.2,x:-81,y:-60.3},0).wait(1).to({regX:0.4,regY:-0.6,skewX:-19.1,skewY:160.9,x:-79.3},0).wait(1).to({skewX:-19.5,skewY:160.5,x:-77.5},0).wait(1).to({regY:-0.5,skewX:-19.8,skewY:160.2,x:-75.7},0).wait(1).to({skewX:-20.3,skewY:159.7,x:-74},0).wait(1).to({regY:-0.6,skewX:-20.6,skewY:159.4,x:-72.3},0).wait(1).to({skewX:-21.1,skewY:158.9,x:-70.6},0).wait(1).to({regY:-0.5,skewX:-21.5,skewY:158.5,x:-68.8},0).wait(1).to({regY:-0.6,skewX:-21.8,skewY:158.2,x:-67},0).wait(1).to({regY:-0.5,skewX:-22.3,skewY:157.7,x:-65.2},0).wait(1).to({regY:-0.6,skewX:-22.6,skewY:157.4,x:-63.5},0).wait(1).to({regY:-0.5,skewX:-23.1,skewY:156.9,x:-61.8},0).wait(1).to({regY:-0.6,skewX:-23.5,skewY:156.5,x:-60},0).wait(1).to({regX:0.3,regY:-0.5,skewX:-23.8,skewY:156.2,x:-58.2},0).wait(1).to({regX:0.4,skewX:-24.3,skewY:155.7,x:-56.5},0).wait(1).to({regY:-0.6,skewX:-24.6,skewY:155.4,x:-54.7},0).wait(1).to({regY:-0.5,skewX:-25.1,skewY:154.9,x:-53},0).wait(1).to({skewX:-25.3,skewY:154.7,x:-51.2},0).wait(1).to({skewX:-25.8,skewY:154.2,x:-49.5},0).wait(1).to({skewX:-26.3,skewY:153.7,x:-47.7},0).wait(1).to({skewX:-26.6,skewY:153.4,x:-45.9},0).wait(1).to({regY:-0.6,skewX:-27.1,skewY:152.9,x:-44.2,y:-60.4},0).wait(1).to({skewX:-27.3,skewY:152.7,x:-42.5,y:-60.3},0).wait(1).to({skewX:-27.8,skewY:152.2,x:-40.7,y:-60.4},0).wait(1).to({skewX:-28.1,skewY:151.9,x:-39},0).wait(1).to({regX:0.3,regY:-0.5,scaleX:0.66,scaleY:0.66,skewX:-28.6,skewY:151.4,x:-37.1,y:-60.3},0).wait(1).to({regX:0.4,skewX:-29.1,skewY:150.9,x:-35.4},0).wait(1).to({regX:0.3,regY:-0.6,skewX:-29.3,skewY:150.7,x:-33.6,y:-60.4},0).wait(1).to({regX:0.4,regY:-0.5,skewX:-29.8,skewY:150.2,x:-31.9,y:-60.3},0).wait(1).to({regY:-0.6,skewX:-30.1,skewY:149.9,x:-30.2},0).wait(1).to({regX:0.3,skewX:-30.6,skewY:149.4,x:-28.4,y:-60.4},0).wait(1).to({regX:0.4,regY:-0.5,skewX:-31.1,skewY:148.9,x:-26.6,y:-60.3},0).wait(1).to({regX:0.3,regY:-0.6,skewX:-31.3,skewY:148.7,x:-24.8,y:-60.4},0).wait(1).to({regX:0.4,skewX:-31.8,skewY:148.2,x:-23.1,y:-60.3},0).wait(1).to({skewX:-32.1,skewY:147.9,x:-21.4},0).wait(1).to({regY:-0.5,skewX:-32.6,skewY:147.4,x:-19.6},0).wait(1).to({regY:-0.6,skewX:-32.9,skewY:147.1,x:-17.8},0).wait(1).to({regX:0.3,regY:-0.5,skewX:-33.3,skewY:146.7,x:-16.1,y:-60.4},0).wait(1).to({regX:0.4,regY:-0.6,skewX:-33.8,skewY:146.2,x:-14.4,y:-60.3},0).wait(1).to({regY:-0.7,skewX:-34.1,skewY:145.9,x:-12.6,y:-60.4},0).wait(1).to({regY:-0.6,skewX:-34.6,skewY:145.4,x:-10.9,y:-60.3},0).wait(1).to({skewX:-34.9,skewY:145.1,x:-9.2},0).wait(1).to({regX:0.3,skewX:-35.3,skewY:144.7,x:-7.3},0).wait(1).to({regX:0.4,skewX:-35.6,skewY:144.4,x:-5.6},0).wait(1).to({skewX:-36.1,skewY:143.9,x:-3.9},0).wait(1).to({skewX:-36.6,skewY:143.4,x:-2.1},0).wait(1).to({regX:0.3,regY:-0.5,skewX:-36.9,skewY:143.1,x:-0.3},0).wait(1).to({skewX:-37.3,skewY:142.7,x:1.4},0).wait(1).to({skewX:-37.6,skewY:142.4,x:3.2},0).wait(1).to({skewX:-38.1,skewY:141.9,x:4.9},0).wait(1).to({regX:0.2,skewX:-38.6,skewY:141.4,x:6.7},0).wait(1).to({skewX:-38.9,skewY:141.1,x:8.5},0).wait(1).to({regX:0.3,skewX:-39.3,skewY:140.7,x:10.2},0).wait(1).to({regX:0.2,skewX:-39.6,skewY:140.4,x:12.1},0).wait(1).to({skewX:-40.1,skewY:139.9,x:13.8},0).wait(1).to({regX:0.3,skewX:-40.4,skewY:139.6,x:15.5},0).wait(1).to({regX:0.2,skewX:-40.9,skewY:139.1,x:17.3},0).wait(1).to({regX:0.3,skewX:-41.3,skewY:138.7,x:19},0).wait(1).to({skewX:-41.6,skewY:138.4,x:20.8},0).wait(1).to({skewX:-42.1,skewY:137.9,x:22.5},0).wait(1).to({skewX:-42.4,skewY:137.6,x:24.3},0).wait(1).to({regX:0.2,regY:-0.6,skewX:-42.9,skewY:137.1,x:26,y:-60.4},0).wait(1).to({regX:0.3,regY:-0.5,skewX:-43.1,skewY:136.9,x:27.7,y:-60.3},0).wait(1).to({regX:0.4,regY:-0.4,skewX:-43.6,skewY:136.4,x:29.5,y:-60.2},0).wait(1).to({skewX:-44.1,skewY:135.9,x:31.3},0).wait(1).to({regX:0.2,regY:-0.5,skewX:-44.4,skewY:135.6,x:33,y:-60.4},0).wait(1).to({regX:0.3,regY:-0.6,skewX:-44.9,skewY:135.1,x:34.7},0).wait(1).to({skewX:-45.1,skewY:134.9,x:36.5,y:-60.3},0).wait(1).to({regX:0.2,regY:-0.5,skewX:-45.6,skewY:134.4,x:38.3},0).wait(1).to({skewX:-46.1,skewY:133.9,x:40},0).wait(1).to({skewX:-46.4,skewY:133.6,x:41.8},0).wait(1).to({skewX:-46.9,skewY:133.1,x:43.5},0).wait(1).to({regX:0.4,skewX:-47.1,skewY:132.9,x:45.2,y:-60.2},0).wait(1).to({regX:0.2,skewX:-47.6,skewY:132.4,x:47.1,y:-60.3},0).wait(1).to({regX:0.3,skewX:-47.9,skewY:132.1,x:48.7,y:-60.2},0).wait(1).to({regX:0.4,skewX:-48.4,skewY:131.6,x:50.5},0).wait(1).to({skewX:-48.9,skewY:131.1,x:52.3},0).wait(1).to({regX:0.3,skewX:-49.1,skewY:130.9,x:54},0).wait(1).to({regX:0.2,skewX:-49.6,skewY:130.4,x:55.8,y:-60.3},0).wait(1).to({regX:0.4,regY:-0.4,skewX:-49.9,skewY:130.1,x:57.6,y:-60.2},0).wait(1).to({regX:0.3,regY:-0.5,skewX:-50.4,skewY:129.6,x:59.3},0).wait(1).to({skewX:-50.7,skewY:129.3,x:61.1},0).wait(1).to({skewX:-51.1,skewY:128.9,x:62.9},0).wait(1).to({regX:0.2,skewX:-51.6,skewY:128.4,x:64.6,y:-60.3},0).wait(1).to({regX:0.4,regY:-0.4,skewX:-51.9,skewY:128.1,x:66.3,y:-60.2},0).wait(1).to({regX:0.3,skewX:-52.4,skewY:127.6,x:68.1},0).wait(1).to({regX:0.2,regY:-0.5,skewX:-52.7,skewY:127.3,x:69.8,y:-60.3},0).wait(1).to({regX:0.3,regY:-0.6,skewX:-53.1,skewY:126.9,x:71.6},0).wait(1).to({regX:0.2,regY:-0.5,skewX:-53.6,skewY:126.4,x:73.4},0).wait(1).to({regX:0.3,regY:-0.6,skewX:-53.9,skewY:126.1,x:75.1},0).wait(1).to({regY:-0.5,skewX:-54.4,skewY:125.6,x:76.9},0).wait(1).to({regX:0.4,skewX:-54.7,skewY:125.3,x:78.6,y:-60.2},0).wait(1).to({skewX:-55.1,skewY:124.9,x:80.4},0).wait(1).to({regX:0.2,skewX:-55.4,skewY:124.6,x:82.2,y:-60.3},0).wait(1).to({regY:-0.4,skewX:-55.9,skewY:124.1,x:84},0).wait(1).to({regX:0.4,regY:-0.5,skewX:-56.4,skewY:123.6,x:85.6,y:-60.2},0).wait(1).to({regX:0.2,skewX:-56.7,skewY:123.3,x:87.4,y:-60.3},0).wait(1).to({regX:0.3,skewX:-57.1,skewY:122.9,x:89.1},0).wait(1).to({skewX:-57.4,skewY:122.6,x:90.8},0).wait(1).to({regX:0.4,skewX:-57.9,skewY:122.1,x:92.6,y:-60.2},0).wait(1).to({regX:0.3,skewX:-58.2,skewY:121.8,x:94.4},0).to({_off:true},1).wait(4));

	// Слой_2
	this.instance_4 = new lib.p4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-196,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},141).wait(4));

	// Слой_1
	this.instance_5 = new lib.p3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:-147.9},0).wait(1).to({x:-145.8},0).wait(1).to({x:-143.7},0).wait(1).to({x:-141.6},0).wait(1).to({x:-139.6},0).wait(1).to({x:-137.5},0).wait(1).to({x:-135.4},0).wait(1).to({x:-133.3},0).wait(1).to({x:-131.2},0).wait(1).to({x:-129.1},0).wait(1).to({x:-127.1},0).wait(1).to({x:-125},0).wait(1).to({x:-122.9},0).wait(1).to({x:-120.8},0).wait(1).to({x:-118.7},0).wait(1).to({x:-116.6},0).wait(1).to({x:-114.6},0).wait(1).to({x:-112.5},0).wait(1).to({x:-110.4},0).wait(1).to({x:-108.3},0).wait(1).to({x:-106.2},0).wait(1).to({x:-104.1},0).wait(1).to({x:-102.1},0).wait(1).to({x:-100},0).wait(1).to({x:-97.9},0).wait(1).to({x:-95.8},0).wait(1).to({x:-93.7},0).wait(1).to({x:-91.6},0).wait(1).to({x:-89.6},0).wait(1).to({x:-87.5},0).wait(1).to({x:-85.4},0).wait(1).to({x:-83.3},0).wait(1).to({x:-81.2},0).wait(1).to({x:-79.1},0).wait(1).to({x:-77.1},0).wait(1).to({x:-75},0).wait(1).to({x:-72.9},0).wait(1).to({x:-70.8},0).wait(1).to({x:-68.7},0).wait(1).to({x:-66.6},0).wait(1).to({x:-64.6},0).wait(1).to({x:-62.5},0).wait(1).to({x:-60.4},0).wait(1).to({x:-58.3},0).wait(1).to({x:-56.2},0).wait(1).to({x:-54.1},0).wait(1).to({x:-52.1},0).wait(1).to({x:-50},0).wait(1).to({x:-47.9},0).wait(1).to({x:-45.8},0).wait(1).to({x:-43.7},0).wait(1).to({x:-41.6},0).wait(1).to({x:-39.6},0).wait(1).to({x:-37.5},0).wait(1).to({x:-35.4},0).wait(1).to({x:-33.3},0).wait(1).to({x:-31.2},0).wait(1).to({x:-29.1},0).wait(1).to({x:-27.1},0).wait(1).to({x:-25},0).wait(1).to({x:-22.9},0).wait(1).to({x:-20.8},0).wait(1).to({x:-18.7},0).wait(1).to({x:-16.6},0).wait(1).to({x:-14.6},0).wait(1).to({x:-12.5},0).wait(1).to({x:-10.4},0).wait(1).to({x:-8.3},0).wait(1).to({x:-6.2},0).wait(1).to({x:-4.1},0).wait(1).to({x:-2.1},0).wait(1).to({x:0},0).wait(1).to({x:2.1},0).wait(1).to({x:4.2},0).wait(1).to({x:6.3},0).wait(1).to({x:8.4},0).wait(1).to({x:10.4},0).wait(1).to({x:12.5},0).wait(1).to({x:14.6},0).wait(1).to({x:16.7},0).wait(1).to({x:18.8},0).wait(1).to({x:20.9},0).wait(1).to({x:22.9},0).wait(1).to({x:25},0).wait(1).to({x:27.1},0).wait(1).to({x:29.2},0).wait(1).to({x:31.3},0).wait(1).to({x:33.4},0).wait(1).to({x:35.4},0).wait(1).to({x:37.5},0).wait(1).to({x:39.6},0).wait(1).to({x:41.7},0).wait(1).to({x:43.8},0).wait(1).to({x:45.9},0).wait(1).to({x:47.9},0).wait(1).to({x:50},0).wait(1).to({x:52.1},0).wait(1).to({x:54.2},0).wait(1).to({x:56.3},0).wait(1).to({x:58.4},0).wait(1).to({x:60.4},0).wait(1).to({x:62.5},0).wait(1).to({x:64.6},0).wait(1).to({x:66.7},0).wait(1).to({x:68.8},0).wait(1).to({x:70.9},0).wait(1).to({x:72.9},0).wait(1).to({x:75},0).wait(1).to({x:77.1},0).wait(1).to({x:79.2},0).wait(1).to({x:81.3},0).wait(1).to({x:83.4},0).wait(1).to({x:85.4},0).wait(1).to({x:87.5},0).wait(1).to({x:89.6},0).wait(1).to({x:91.7},0).wait(1).to({x:93.8},0).wait(1).to({x:95.9},0).wait(1).to({x:97.9},0).wait(1).to({x:100},0).wait(1).to({x:102.1},0).wait(1).to({x:104.2},0).wait(1).to({x:106.3},0).wait(1).to({x:108.4},0).wait(1).to({x:110.4},0).wait(1).to({x:112.5},0).wait(1).to({x:114.6},0).wait(1).to({x:116.7},0).wait(1).to({x:118.8},0).wait(1).to({x:120.9},0).wait(1).to({x:122.9},0).wait(1).to({x:125},0).wait(1).to({x:127.1},0).wait(1).to({x:129.2},0).wait(1).to({x:131.3},0).wait(1).to({x:133.4},0).wait(1).to({x:135.4},0).wait(1).to({x:137.5},0).wait(1).to({x:139.6},0).wait(1).to({x:141.7},0).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-118.5,652,237);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnLD0QgagcAAgrQAAgtAagaQAZgbAqAAQApAAAZAbQAZAbAAAsQAAArgZAbQgaAbgpAAQgpAAgZgagAmtB9QgOASAAAdQAAAdAOASQANARAYABQAXAAAOgSQANgSAAgdQAAgegNgRQgOgRgYAAQgWAAgOARgAISEJIAAgjQAMAFAHAAQAUAAAAgRQAAgDgJgVIg3hzIAtAAIAqBiIAqhiIAsAAIg/CJQgNAegNALQgOALgWAAQgOAAgJgDgAG/EJIg5hUIgXAYIAAA8IgpAAIAAi6IApAAIAABNIBJhNIA0AAIhKBKIBRBwgADyEJIAAhRIhNAAIAABRIgoAAIAAi6IAoAAIAABGIBNAAIAAhGIApAAIAAC6gAApEJIAAiBIgBAAIhFCBIguAAIAAi6IApAAIAACCIABAAIBFiCIAuAAIAAC6gAkLEJIAAi6IBZAAQAaAAAQALQARAMAAAXQAAAcgZAMQAiAJAAAkQAAAagSAPQgRAOgcAAgAjiDpIApAAQAjAAAAgZQAAgaglAAIgnAAgAjiCaIAkAAQAgAAAAgWQAAgWggABIgkAAgAowEJIAAhRIhNAAIAABRIgoAAIAAi6IAoAAIAABGIBNAAIAAhGIAoAAIAAC6gAhGg1QgZgcAAgrQAAgtAZgaQAagbApAAQApAAAYAbQAZAbAAAsQAAArgZAbQgZAbgoAAQgpAAgagagAgoisQgOASAAAdQAAAeAOASQANARAYAAQAWAAAOgRQANgSAAgeQAAgdgNgSQgOgRgWAAQgXAAgOARgAqNg1QgYgcAAgsQAAgqAYgbQAagcAqAAQAhAAAXATQAWATACAcIgoAAQgHgggiAAQgZAAgOAUQgLASAAAaQAAAdANASQANAQAXAAQAmAAAFgqIApAAQgDAjgVAUQgWAVgmAAQgpAAgZgagAFCggIAAgjQANAFAGAAQATAAAAgQQAAgEgIgUIg3h0IAtAAIArBiIAphiIAsAAIg/CKQgNAegNALQgOALgWAAQgOAAgJgEgAJkggIAAiBIhHCBIgvAAIAAi6IApAAIAACCIABAAIBGiCIAvAAIAAC6gAB6ggIAAi6ICMAAIAAAiIhiAAIAAAiIAxAAQAcgBASAOQATARAAAdQAAA7hEAAgACkhBIArAAQAgAAAAgbQAAgbghAAIgqAAgAkMggIAAi6IBQAAQBEAAAAA8QAAAegTAQQgRAOgdAAIgqAAIAABCgAjjiCIAkAAQAgAAAAgbQAAgcggABIgkAAgAlgggIAAiXIhNAAIAACXIgpAAIAAi6ICfAAIAAC6gAITkMIAPAAQADARAZAAQAYAAAEgRIAPAAQAAAlgrAAQgrAAAAglg");
	this.shape.setTransform(0,52.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.billet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-86.5,-112,173,224), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t1_2_2();
	this.instance.parent = this;
	this.instance.setTransform(0,47,0.9,0.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},7).wait(2));

	// Слой_2
	this.instance_1 = new lib.t1_2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.3,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},7).wait(9));

	// img1.png
	this.instance_2 = new lib.billet();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-112,173,224);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6
	this.instance = new lib.bubbles1_1();
	this.instance.parent = this;
	this.instance.setTransform(50,0);
	this.instance.alpha = 0.398;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-50},239,cjs.Ease.quadInOut).to({x:50},240,cjs.Ease.quadInOut).wait(1));

	// Слой_3
	this.instance_1 = new lib.bubbles2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10,0);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:11},239,cjs.Ease.quadInOut).to({x:-10},240,cjs.Ease.quadInOut).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93080F").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(480));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171,-300,421,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(0,-413);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(294).to({_off:false},0).to({y:-308},10,cjs.Ease.quadInOut).wait(45).to({y:-413},10,cjs.Ease.get(-1)).wait(1));

	// o3
	this.instance_1 = new lib.o3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,224);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(284).to({_off:false},0).to({x:-50},10,cjs.Ease.get(1)).wait(55).to({x:-239},10,cjs.Ease.get(-1)).wait(1));

	// bottle
	this.instance_2 = new lib.bottle_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-211,19);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(284).to({_off:false},0).to({x:1},10,cjs.Ease.get(1)).wait(55).to({x:211},10,cjs.Ease.get(-1)).wait(1));

	// o4
	this.instance_3 = new lib.o4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240,170);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(284).to({_off:false},0).to({x:61},10,cjs.Ease.get(1)).wait(55).to({x:-239},10,cjs.Ease.get(-1)).wait(1));

	// t4
	this.instance_4 = new lib.t4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-50,0.02,0.02,0,0,0,0,-2.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(229).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(30).to({alpha:0},15).to({_off:true},1).wait(75));

	// t3
	this.instance_5 = new lib.t3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-53,0.02,0.02);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(176).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(33).to({alpha:0},10).to({_off:true},1).wait(130));

	// t2
	this.instance_6 = new lib.t2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-43.9,0.02,0.02);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({_off:false},0).to({regY:0.1,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(30).to({y:-363.9},15,cjs.Ease.quadInOut).to({_off:true},1).wait(200));

	// boxes2
	this.instance_7 = new lib.boxes2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-243,103);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52).to({_off:false},0).to({x:-63},10,cjs.Ease.get(1)).wait(27).to({y:503},15,cjs.Ease.quadInOut).to({_off:true},1).wait(255));

	// boxes1
	this.instance_8 = new lib.boxes1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(259,147);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(52).to({_off:false},0).to({x:79},10,cjs.Ease.get(1)).wait(27).to({y:547},15,cjs.Ease.quadInOut).to({_off:true},1).wait(255));

	// t1_1
	this.instance_9 = new lib.t1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.2,-48.8,0.02,0.02,0,0,0,0,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:0,scaleX:1,scaleY:1,y:-48.7},10,cjs.Ease.get(1)).wait(29).to({regX:-0.1,regY:-0.1,scaleX:0.82,scaleY:0.82,x:-1.9,y:-200.8},15,cjs.Ease.quadInOut).wait(40).to({x:-261.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(255));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("Av2OMIAA8XIftAAIAAcXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:5.1,y:66.3}).wait(10).to({graphics:null,x:0,y:0}).wait(340));

	// t1_2
	this.instance_10 = new lib.t1_2("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(2.5,-121);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({y:34},10,cjs.Ease.get(1)).wait(19).to({mode:"synched",loop:false},0).to({regX:-0.1,regY:-0.1,scaleX:0.82,scaleY:0.82,x:0.1,y:-132.9,startPosition:14},15,cjs.Ease.quadInOut).wait(40).to({startPosition:14},0).to({x:-259.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(255));

	// Слой_2
	this.instance_11 = new lib.bgImg2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,110);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(39).to({_off:false},0).to({alpha:1},13).wait(37).to({y:480},15,cjs.Ease.quadInOut).to({_off:true},1).wait(164).to({_off:false,y:110,alpha:0},0).to({alpha:1},15).wait(65).to({alpha:0},10).wait(1));

	// yogurt
	this.instance_12 = new lib.yogurt("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,464);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(144).to({_off:false},0).to({y:182,startPosition:15},15,cjs.Ease.quadInOut).to({_off:true},126).wait(75));

	// bg
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171,-300,421,600);


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
p.nominalBounds = new cjs.Rectangle(129,299,421,602);
// library properties:
lib.properties = {
	id: 'CFBFDB965E364B609A2418A2C75F395C',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.png", id:"bgImg"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/boxes1.png", id:"boxes1"},
		{src:"images/boxes3.png", id:"boxes3"},
		{src:"images/bubbles1.png", id:"bubbles1"},
		{src:"images/bubbles2.png", id:"bubbles2"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/o1.png", id:"o1"},
		{src:"images/o2.png", id:"o2"},
		{src:"images/o3.png", id:"o3"},
		{src:"images/o4.png", id:"o4"},
		{src:"images/p3.png", id:"p3"},
		{src:"images/p4.png", id:"p4"}
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
an.compositions['CFBFDB965E364B609A2418A2C75F395C'] = {
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