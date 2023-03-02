(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,360);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,360);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A0xixMApjAAAIAAFjMgpjAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-134,-18.7,268,37.5), null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGqAyQgQgRgCgcIghAAIAAA9IgNAAIAAiEIANAAIAAA9IAhAAQACgbARgRQASgUAbABQAdgBASAVQARAUAAAcQAAAdgRAUQgSAUgdAAQgcABgSgUgAGzgoQgOAQAAAYQAAAYAOARQAOARAXAAQAXgBAOgRQANgPAAgZQAAgYgOgQQgOgQgWgBQgXABgOAQgADRAxQgTgUAAgdQAAgcATgUQAUgVAdABQAdgBAUAVQATAUAAAcQAAAcgTAVQgUAUgdAAQgdABgUgVgADcgoQgQARAAAXQAAAYAQARQAPARAXAAQAWgBARgRQAQgQAAgYQAAgXgQgRQgRgQgWgBQgWABgQAQgAnFBCIACgLIAKACQAQAAAGgSQAIgYABhJIAAgIIBaAAIAACEIgNAAIAAh4IhBAAIAAAEQAABKgLAaQgIASgWAAQgFABgJgDgAJBBCIAAgWIARAAIAAAWgACbBCIg0hAIggAgIAAAgIgNAAIAAiEIANAAIAABVIBShVIARAAIg6A8IA8BIgAgDBCIAAg+IhYAAIAAA+IgNAAIAAiEIANAAIAAA8IBYAAIAAg8IAMAAIAACEgAikBCIAAhzIhaBzIgNAAIAAiEIANAAIAABzIBahzIAMAAIAACEgAnuBCIAAgzIgsAAIgnAzIgQAAIAqg0QgRgDgKgLQgLgKAAgQQAAgSANgLQANgKAWgBIA8AAIAACEgAo2guQgJAHAAAOQAAANAKAJQAKAHARAAIAsAAIAAg6IgtAAQgRAAgKAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-59.4,-6.9,118.8,13.9), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifBsIAEgMQAKAGANAAQAKAAAIgIQAHgGAHgSIhAiCIAQAAIA2B1IAwh1IAPAAIg6CIQgJAUgKAJQgLAIgOAAQgOAAgMgFgAk4BxIAAitIAMAAIAAAdQAWghAhAAQAaABASASQAVATgBAfQABAfgVAUQgSATgaAAQghAAgWghIAABHgAkcgkQgRASAAAXQAAAYARASQAQAPAVAAQAXAAAOgPQAPgPABgbQAAgYgQgRQgPgPgWAAQgVAAgQAPgAOtBtIAAgmIh4AAIgDAmIgLAAIAAgxIARAAQAUggAAg8IAAgcIBZAAIAAB4IAWAAIgEAxgANZgZQAAA2gSAfIBSAAIAAhtIhAAAgAoCBtIAAgmIh5AAIgCAmIgLAAIAAgxIARAAQAUghAAg7IAAgcIBZAAIAAB4IAVAAIgDAxgApXgZQAAA3gRAeIBRAAIAAhtIhAAAgAnMBAQgPgMAAgUQAAgUAQgMQAPgKAaAAQAXAAAWAGIAAgGQAAgUgMgKQgMgKgUAAQgUAAgWAKIgEgLQAXgMAXAAQAcAAAPAPQANANAAAYIAABSIgMAAIAAgWQgSAZghABQgWAAgOgLgAnDAJQgKAIgBAPQAAAOALAJQAKAHARAAQAVABAPgMQAPgMAAgRIAAgQQgXgFgWAAQgVgBgMAJgAsMA2QgUgVABgcQAAgcATgUQAUgUAdgBQAdABAUAUQATAUAAAcQAAAdgTATQgVAWgdAAQgdAAgTgVgAsCgiQgQAQAAAXQAAAYAQARQAQAQAXAAQAWAAAQgQQAQgSAAgXQAAgXgQgQQgQgSgXABQgWgBgQASgAL8BHIAAiDIANAAIAACDgAK5BHIAAh4IhUAAIAAB4IgOAAIAAiDIBvAAIAACDgAF0BHIAAiDIA8AAQATAAAMAJQAMAIAAAPQAAAWgWAIQAdAIAAAZQABARgNAJQgOAKgVAAgAGAA8IAxAAQARAAAKgIQAJgGAAgNQAAgMgKgGQgKgHgTAAIguAAgAGAgBIAuAAQAPAAAIgGQAJgIAAgMQAAgKgIgGQgIgGgPAAIgvAAgAE0BHIAAiDIAMAAIAACDgAEHBHIg1hBIghAhIAAAgIgMAAIAAiDIAMAAIAABTIBShTIARAAIg5A6IA7BJgABnBHIAAg+IhZAAIAAA+IgMAAIAAiDIAMAAIAAA6IBZAAIAAg6IAMAAIAACDgAtYBHIAAh4IhVAAIAAB4IgNAAIAAiDIBvAAIAACDgAL7hfIAAgRIAPAAIAAARgAEzhfIAAgRIAPAAIAAARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-95.4,-11.3,190.9,22.7), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AR/BdIAIgKQAYATAeAAQAXAAAOgNQAPgOAAgZIAAgTQgWAfgiAAQgZAAgTgRQgUgTAAgaQAAgcAUgSQATgRAZAAQAjAAAVAdIAAgaIAMAAIAABvQAAAdgRAQQgSASgeAAQghAAgcgVgASWgmQgPAPAAAXQAAAVAQAOQAOAOAVAAQAWAAAQgOQARgOAAgWQAAgWgRgOQgQgOgWAAQgVAAgPANgAwKBxIAAgqIjyAAIAAi1IANAAIAACpIBgAAIAAipIANAAIAACpIBgAAIAAipIAOAAIAACpIAYAAIgCA2gAJ+BAQgRgMAAgUQAAgUARgMQAPgKAaAAQAXAAAVAGIAAgGQAAgTgLgLQgLgKgVAAQgVAAgVAKIgFgLQAYgLAXAAQAcAAAOAOQAOAOAAAYIAABRIgNAAIAAgWQgRAaghAAQgVAAgOgLgAKGAJQgLAJAAAOQAAAOAMAJQALAIAPAAQAVAAAPgMQAPgMAAgRIAAgPQgXgGgWAAQgVAAgMAIgADsBAQgRgMAAgUQAAgUARgMQAPgKAaAAQAXAAAVAGIAAgGQAAgTgLgLQgMgKgUAAQgVAAgVAKIgFgLQAYgLAXAAQAcAAAOAOQAOAOAAAYIAABRIgNAAIAAgWQgRAaghAAQgVAAgOgLgAD0AJQgLAJAAAOQAAAOAMAJQALAIAPAAQAVAAAPgMQAPgMAAgRIAAgPQgXgGgWAAQgVAAgMAIgAAMA4QgSgVAAgeQAAgcARgUQASgUAbAAQAbAAARAUQARATAAAdIgBAFIhtAAQABAYAQAPQAOAOAVAAQAaAAATgVIAJAIQgYAZgfAAQgbAAgTgTgABnAAQgBgWgMgOQgNgQgWAAQgTAAgOAPQgOAPgBAWIBgAAIAAAAgArpA3QgTgVAAggQAAgpAHgTQAKgcAfgIIBLgTIAEAMIhJATQgVAGgJAMQgJALgCAYQASggAnAAQAaAAATAVQATAUAAAaQAAAcgTAUQgTAVgdAAQgdAAgTgUgArfggQgPAQAAAWQAAAYAQAQQAPARAWAAQAXAAAPgRQAPgQAAgYQAAgWgPgQQgQgRgWAAQgXAAgPARgAvPA4QgUgUAAgfQAAgcASgUQASgUAbAAQAbAAARAUQARATAAAdIAAAFIhuAAQABAYAQAPQAOAOAVAAQAaAAATgVIAJAIQgYAZgfAAQgbAAgSgTgAt1AAQgBgWgMgOQgNgQgWAAQgTAAgOAPQgOAPgBAWIBgAAIAAAAgAopBHIADgLIAKACQAQAAAGgSQAIgYABhJIAAgHIBaAAIAACDIgNAAIAAh4IhBAAIAAAEQAABKgLAaQgJATgVAAQgFAAgKgDgAREBHIAAhNQAAgVgLgMQgLgNgUAAQgUAAgNAOQgNANAAAVIAABLIgNAAIAAiDIANAAIAAAZQAQgcAgAAQAYAAAPAPQAOAPAAAYIAABQgAOgBHIAAiDIAMAAIAACDgAMHBHIAAgHIBghxIhcAAIAAgLIBvAAIAAAHIhgBxIBgAAIAAALgAI6BHIAAhNQAAgWgKgMQgLgMgSAAQgRAAgMANQgNANAAAVIAABMIgNAAIAAhOQAAgVgKgMQgLgMgRAAQgSAAgMAOQgNAOAAAUIAABLIgNAAIAAiDIANAAIAAAYQARgbAbAAQAfAAAOAcQAQgcAgAAQAXAAAOAPQAOAPAAAZIAABPgAjhBHIAAiDIANAAIAAB4IBJAAIAAh4IANAAIAAB4IBJAAIAAh4IANAAIAACDgAluBHIAAiDIAMAAIAAAzIAoAAQAWAAAOAJQAPAKAAATQAAATgOAMQgNALgWAAgAliA8IAoAAQARAAAKgIQAKgIAAgPQAAgNgKgHQgKgIgSAAIgnAAgApRBHIAAiDIANAAIAACDgAOehfIAAgRIAQAAIAAARgApShfIAAgRIAQAAIAAARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-127.7,-11.4,255.5,22.8), null);


(lib.p3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AgQBQQgggEgohLQgohKBUBJQBSBJAYhaQAZhbAKAiQAKAjgLAxQgKAzgYALQgYAMgMAAQgMAAgegEg");
	this.shape.setTransform(0.2,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("AgfCBQgxgYgag6QgZg6AOgyQAPgzAtgSQAugTAxAUQAzATAVA5QAVA3gMAzQgMAzgtAYQgXAMgYAAQgWAAgYgLg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_mc, new cjs.Rectangle(-12.3,-14.1,24.6,28.1), null);


(lib.p2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AiGBoQgOgxAPhFQAOhGAhgQQAhgQARAAQARgBArAHQArAFA5BoQA3Boh0hmQh0hmghB+QgZBcgOAAQgFAAgEgNg");
	this.shape.setTransform(-0.3,-5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("Ag0C1QhHgbgchPQgehNARhHQAQhGA/giQA/giBDAhQBEAhAjBRQAjBRgTBGQgVBGg/AZQgfANggAAQghAAgkgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_mc, new cjs.Rectangle(-17.1,-19.5,34.2,39.1), null);


(lib.p1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AgvBzQgWgHgogSQgngTgQhFQgPhEAGgsQAHgsA+CZQA9CYCFhnQCFhnhKBWQhKBYgyACIgUAAQgiAAgSgGg");
	this.shape.setTransform(1.4,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("AhTCyQhUgggVhLQgVhLAWhFQAWhFBAgiQA/ghBiAZQBjAZAdBTQAdBSgtBMQgtBMg/AaQgdAMghAAQgnAAgugSg");
	this.shape_1.setTransform(1.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_mc, new cjs.Rectangle(-18.2,-19.7,39.9,39.2), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoUBnIghghIhuAAQgZAAgRgEQgXgFgMgMQgRgRAAggIAAhdQAAgGADgDQAFgEAHAAIB4AAQAbAAAQAEQAWAFANAMQASARAAAgIAABbIAbAbQADAEAAAGQABAFgGAFQgFAFgFAAQgFAAgEgEgArkAAQABAWALALIACACQAMAKAYAAIB4AAIAAhSQABgWgLgKIgCgCQgMgJgXgBIh7AAgAJiBHQgKAAgIgDQgIgEgGgGQgGgGgEgKQgFgKAAgNIAAh3QAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCAEAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAAB3QAAAJADAIQADAHAEAGQAFAEAFACQAGADAHAAIAgAAQAPAAAIgKQAHgLAAgSIAAh2QAAgDACgCQADgCACAAQABAAABAAQAAAAABABQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIAAB3QAAAMgEAKQgDAKgFAGQgGAHgHADQgJAEgKAAgAMKBGQgPAAgLgFQgLgEgHgIQgIgHgDgMQgFgKAAgOIAAg4QAAgQAFgLQAEgMAHgHQAJgIAKgDQAKgDAPAAIAMAAQAPAAAKADQALADAIAIQAIAHAEAMQAEALAAAQIAAA4QAAAOgEAKQgEAMgIAHQgHAJgMADQgKAFgPAAgALohRQgMALABAYIAAA4QAAALACAHQADAKAGAGQAGAGAJADQAIAEALAAIAMAAQALAAAJgEQAIgDAGgGQAGgHADgJQADgHAAgLIAAg4QAAgYgMgLQgNgMgVAAIgMAAQgVAAgNAMgAGmBGQgGAAgDgEQgDgCAAgGIAAiZQAAgFADgDQADgDAGAAIAyAAQANAAALADQAMADAIAIQAHAHAEAMQAEALAAAQIAAA4QAAANgEALQgEAMgGAHQgJAJgLADQgLAFgOAAgAGoA5IAwAAQAKAAAJgEQAJgDAGgGQAGgHADgJQADgHAAgLIAAg4QAAgYgMgLQgOgMgUAAIgwAAgACFBGQgOAAABgNQAAgMANAAIBBABQAlAAAKgGQAIgFABgQIAAgBQAAgLgEgFQgFgGgNgBIgQgBIhAAAQgMAAgBgNQAAgMAOAAIA6AAQAWAAAHgGQAFgEABgMIAAgGQAAgOgJgEQgJgEggAAIg/AAQgOAAABgMQgBgNAOAAIA+AAQAzAAAQALQANAJAAAYIAAAJQAAAWgIALQARALAAAcIAAABQAAAhgcALQgQAGgkAAgAibBFIAAABQgigCgPgJQgNgHgCgOIAAgEQAAgFAEgDQAEgEAHAAQAFAAAFADQADADABAEIACACQADAHAIACQAHACANAAIBBAAQAmAAAJgFQAJgFAAgQIAAgBQAAgNgFgFQgIgGgaAAIhXAAQgdAAgNgLQgOgKAAgaIAAgJQABgWAQgKQAUgMAwAAIAwAAQAmAAARAKQAOAHACAQIAAACQAAAGgEADQgEADgGAAQgGAAgEgDQgDgBgCgFIgBgCQgEgHgLgCQgIgCgWAAIgyAAQgeAAgIAEQgJAEAAAOIAAAGQAAAMAFAEQAIAGATAAIBMAAQAlAAAOAIQAVALAAAfIAAABQAAAhgbALQgRAGgjAAgAtNBCQgEgEAAgHIAAiSQAAgHAEgEQAEgEAHAAQAHAAAEAEQADAEAAAHIAACSQAAAHgDAEQgEAEgHAAQgHAAgEgEgAmPBFQgrAAgVgLQgegQAAgqIAAglQAAgpAegQQAVgMArAAIAqAAQArAAAWAMQAeAQAAApIAAAlQAAAqgeAQQgWALgrAAgAnAhIQgPAKAAAbIAAAiQAAAaAPAMQANAIAcAAIA7AAQAcAAAMgIQAQgMAAgaIAAgiQAAgbgQgKQgMgJgcAAIg7AAQgcAAgNAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-85,-10.6,170,21.4), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-150,-180,300,360), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-150,-180,300,360), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlbArQgRgRAAgaQAAgZARgRQASgTAbABQAbgBASATQARARAAAZQAAAagRARQgTATgagBQgbABgSgTgAlLgdQgMAMAAARQAAARAMANQAMAMARAAQASAAALgMQALgMAAgSQAAgQgMgNQgLgMgRAAQgSAAgLAMgAFZA7IAAhVIg8BVIgUAAIAAh1IAVAAIAABWIA8hWIATAAIAAB1gACyA7IAAhiIgmAAIAAgTIBhAAIAAATIglAAIAABigAB1A7IgMgcIg4AAIgMAcIgWAAIA1h2IATAAIA0B2gABhANIgUgvIgUAvIAoAAgAhTA7IAAh1IAvAAQAVgBAMALQALAMAAARQAAATgMALQgNALgVAAIgXAAIAAAlgAg9ADIAYAAQAMAAAGgGQAIgFgBgKQABgWgaAAIgYAAgAjOA7IAAh1IBYAAIAAASIhDAAIAAAcIAhAAQAUAAALAJQAMAJAAARQAAARgMAKQgLAJgVAAgAi5ApIAbAAQAcAAAAgTQAAgSgYAAIgfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AoqC0IAAlnIRVAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-63,-18,122.3,36), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#400202").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.particleMcMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.ceil(Math.random()*3));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Слой 2
	this.instance = new lib.p1_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.5,0.4,0.4,0,0,0,0,-0.1);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-20,-22,44,43);

	this.instance_1 = new lib.p2_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5,0.4,0.4,0,0,0,0,-0.1);
	this.instance_1.alpha = 0.25;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-19,-21,38,43);

	this.instance_2 = new lib.p3_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.5,0.4,0.4,0,0,0,0,-0.1);
	this.instance_2.alpha = 0.25;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_2.cache(-14,-16,29,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-11.3,25,25);


(lib.particle2mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.particleMcMc();
	this.instance.parent = this;
	this.instance.setTransform(-34,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},25,cjs.Ease.get(-1)).to({x:34},25,cjs.Ease.get(1)).to({x:0},25,cjs.Ease.get(-1)).to({x:-34},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-19.9,61.8,39.8);


(lib.particle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.particle2mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},75).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-11.5,26,25);


(lib.particle2Movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_114 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(1));

	// Слой 1
	this.instance = new lib.particle2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:412.5,y:362.9},104).to({x:452.1,y:397.8,alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-11.5,26,25);


(lib.snowFront = function(mode,startPosition,loop) {
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
		for(var i=0; i<2; i++){
			var cloneParticle = new lib.particle2Movie();
			cloneParticle.y = Math.random()*500;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.4 +.6;
			this.addChild(cloneParticle);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// particles
	this.particle = new lib.particle2Movie();
	this.particle.name = "particle";
	this.particle.parent = this;
	this.particle.cache(-46,-13,30,29);

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-11.5,26,25);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,218,0.02,0.02);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(25).to({scaleX:0.98,scaleY:0.98},2).to({scaleX:1,scaleY:1},2).wait(2).to({scaleX:0.98,scaleY:0.98},2).to({scaleX:1,scaleY:1},2).wait(35).to({alpha:0},10).wait(1));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,268.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(145));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50.5,221.2,0.97,0.97,0,0,0,0,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},15).wait(24).to({alpha:0},15).wait(91));

	// t1_3
	this.instance_3 = new lib.t1_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-138.6,167);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({x:-73.6,alpha:1},10,cjs.Ease.cubicOut).wait(114).to({x:-43.6,alpha:0},10,cjs.Ease.cubicIn).wait(1));

	// t1_2
	this.instance_4 = new lib.t1_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-101.5,136.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({x:-36.5,alpha:1},10,cjs.Ease.cubicOut).wait(114).to({x:-6.5,alpha:0},10,cjs.Ease.cubicIn).wait(6));

	// t1_1
	this.instance_5 = new lib.t1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-68.9,106.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-3.9,alpha:1},10,cjs.Ease.cubicOut).wait(114).to({x:26.1,alpha:0},10,cjs.Ease.cubicIn).wait(11));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,180,1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,171.5,1,0.428);
	this.instance_7.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(145));

	// img1
	this.instance_8 = new lib.img1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({alpha:0},15).wait(75).to({alpha:1},15).wait(1));

	// snow
	this.instance_9 = new lib.snowFront();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-169.1,-562.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(145));

	// img1
	this.instance_10 = new lib.img2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.4,-574.2,363.5,874.3);


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
p.nominalBounds = new cjs.Rectangle(86.6,25.8,364.5,875.3);
// library properties:
lib.properties = {
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"}
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
an.compositions['E5F08688052A497EA765790B818200C2'] = {
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