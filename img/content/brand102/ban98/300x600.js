(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,262);


(lib.devs = function() {
	this.initialize(img.devs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,234);


(lib.holder = function() {
	this.initialize(img.holder);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,254);// helper functions:

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
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A02ikMAptAAAIAAFJMgptAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AquBgIAAhDIAFAAIAAALQAJgNAMAAQAKAAAHAHQAIAIAAAMQAAAMgIAIQgHAHgKAAQgNAAgIgMIAAAbgAqjAmQgGAHAAAJQAAAKAGAGQAHAGAIAAQAIAAAGgGQAGgGAAgKQAAgKgGgGQgGgGgIAAQgJAAgGAGgAw2BgIAAhDIAFAAIAAALQAJgNAMAAQAKAAAHAHQAIAIAAAMQAAAMgIAIQgHAHgKAAQgNAAgIgMIAAAbgAwrAmQgGAHAAAJQAAAKAGAGQAHAGAIAAQAIAAAGgGQAGgGAAgKQAAgKgGgGQgGgGgIAAQgJAAgGAGgAErBeIAAgOIgvAAIgBAOIgEAAIAAgTIAHAAQAIgMAAgYIAAgKIAiAAIAAAuIAIAAIgBATgAEKAqQAAAVgHAMIAgAAIAAgqIgZAAgAyABeIAAgOIgvAAIgBAOIgEAAIAAgTIAHAAQAIgMAAgYIAAgKIAiAAIAAAuIAIAAIgBATgAyhAqQAAAVgHAMIAgAAIAAgqIgZAAgASnBJQgHgIAAgMQAAgQACgHQAEgLAMgDIAdgIIACAFIgcAHQgPAEgBAQQAHgMAPAAQAKAAAHAIQAHAIAAAKQAAALgHAIQgHAIgLAAQgMAAgHgIgASrAnQgGAHAAAJQAAAJAGAGQAGAGAJAAQAJAAAGgGQAFgGAAgJQAAgJgGgHQgGgGgIAAQgJAAgGAGgARYBJQgHgIAAgLQAAgLAHgIQAIgIALAAQAMAAAIAKIgDADQgIgIgJAAQgJAAgGAHQgGAGAAAJQAAAJAGAHQAGAGAJAAQAKAAAHgJIAEAEQgJAKgMAAQgLAAgIgIgAQdBJQgHgIAAgLQAAgLAHgIQAIgIALAAQALAAAIAIQAHAIAAALQAAALgHAIQgIAIgLAAQgLAAgIgIgAQhAnQgGAGAAAJQAAAJAGAHQAGAGAJAAQAJAAAGgGQAGgHAAgJQAAgJgGgGQgHgHgIAAQgJAAgGAHgAK9BJQgHgIAAgLQAAgLAHgIQAIgIALAAQALAAAIAIQAHAIAAALQAAALgHAIQgIAIgLAAQgLAAgIgIgALBAnQgGAGAAAJQAAAJAGAHQAGAGAJAAQAJAAAGgGQAGgHAAgJQAAgJgGgGQgHgHgIAAQgJAAgGAHgAIMBJQgHgIAAgLQAAgLAHgIQAIgIALAAQALAAAIAIQAHAIAAALQAAALgHAIQgIAIgLAAQgLAAgIgIgAIQAnQgGAGAAAJQAAAJAGAHQAGAGAJAAQAJAAAGgGQAGgHAAgJQAAgJgGgGQgHgHgIAAQgJAAgGAHgAlIBJQgHgHAAgMQAAgLAHgIQAHgIAKAAQAKAAAHAIQAGAHAAAMIAAACIgqAAQAAAJAGAGQAGAFAIAAQAKAAAHgIIAEADQgJAKgMAAQgLAAgHgIgAlEAlQgFAGgBAJIAlAAQgCgUgQAAQgIAAgFAFgAnABNQgGgFAAgHQAAgRAWAAQAJAAAIACIAAgCQAAgQgRAAQgGAAgKAEIgBgEQAKgEAIAAQAKAAAGAFQAFAGAAAJIAAAgIgFAAIAAgJQgHAKgMAAQgJAAgFgEgAnBBAQAAAMAPAAQAIAAAGgEQAFgFAAgHIAAgFQgKgDgHAAQgRAAAAAMgAozBJIADgEQAIAHAKAAQAGAAAEgDQAEgDAAgFQAAgJgOAAIgHAAIAAgFIAHAAQANAAAAgKQAAgJgNAAQgJAAgHAFIgDgDQAJgGAKAAQASAAAAANQAAAJgIADQAJAEAAAJQAAAGgFAEQgFAFgJAAQgKAAgLgIgAvtBJQgHgIAAgLQAAgLAHgIQAIgIALAAQALAAAIAIQAHAIAAALQAAALgHAIQgIAIgLAAQgLAAgIgIgAvpAnQgGAGAAAJQAAAJAGAHQAGAGAJAAQAJAAAGgGQAGgHAAgJQAAgJgGgGQgHgHgIAAQgJAAgGAHgAxtBJQgHgIAAgLQAAgLAHgIQAIgIALAAQALAAAIAIQAHAIAAALQAAALgHAIQgIAIgLAAQgLAAgIgIgAxpAnQgGAGAAAJQAAAJAGAHQAGAGAJAAQAJAAAGgGQAGgHAAgJQAAgJgGgGQgHgHgIAAQgJAAgGAHgAziBJIADgEQAIAHAKAAQAGAAAEgDQAEgDAAgFQAAgJgOAAIgHAAIAAgFIAHAAQANAAAAgKQAAgJgNAAQgJAAgHAFIgDgDQAJgGAKAAQASAAAAANQAAAJgIADQAJAEAAAJQAAAGgFAEQgFAFgJAAQgKAAgLgIgALrBQIABgFIAEABQAGAAACgHQAEgJAAgdIAAgCIAjAAIAAAzIgFAAIAAgvIgZAAIAAABQAAAdgFAKQgDAHgIAAgAExBQIABgFIAEABQAGAAACgHQAEgJAAgdIAAgCIAjAAIAAAzIgFAAIAAgvIgZAAI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");
	this.shape_1.setTransform(-0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-134.4,-17.5,269,35), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B72018").s().p("Ao9EMQgZgZAAglQAAgfAQgdQAOgcAcgTQAdgRAeAAQAnAAAZAZQAZAaAAAlQAAAfgQAdQgQAdgbARQgaARghAAQgnAAgYgZgAoUBvQgXAQgOAZQgNAaAAAcQAAAfAUAWQAVAVAfAAQAbAAAZgQQAYgRANgYQANgZAAgcQAAgggUgVQgUgVghAAQgbAAgYAPgAJPD9IANgIQALAQATAKQAQAIAYAAQAaAAAQgNQARgNAAgTQABgNgKgJQgKgIgagLQgggNgNgLQgMgLAAgTQAAgYAUgQQATgQAiAAQAXAAARAIQATAJAMAOIgMAJQgYgbglAAQgaAAgOANQgQAMAAARQAAANALAJQAMAKAaAJQAdAMAMAMQANAMAAASQAAAZgWARQgWASggAAQg2AAgcgogAMXEiIAHgZIATAAIgGAZgAG9EiIAVhTIg1h6IARAAIAuBuIBrhuIAVAAIh7B+IgVBPgAFPEiIgLg6Ih5AAIgpA6IgQAAICVjOIAPAAIAoDOgAFBDbIgVh2IhXB2IBsAAgAhCEiIA3jNIAtAAQAzAAAcAcQAXAWAAAkQAAAvggAgQgTATgbAKQgbALgfAAgAgvEUIAyAAQA2AAAkgjQAbgcAAgpQAAgggTgRQgWgYguAAIghAAgAigEiIA3jNIAPAAIg3DNgAldEiIA3jNIAPAAIgzC/IB3AAIgDAOgArLEiIAahgIiBAAIgaBgIgPAAIA3jNIAPAAIgZBfICBAAIAZhfIAQAAIg3DNgAMrDsIAkiXIARAAIgtCXgAHWhmQgeAVgjAAQgnAAgZgZQgYgZAAglQAAggAPgcQAQgdAbgSQAcgRAgAAQAmAAAZAZQAZAaAAAlQAAAZgMAaQgLAZgUARIAVAYIgLAKgAF/kHQgYAQgNAZQgOAaAAAcQAAAeAVAXQAUAVAgAAQAeAAAagTIgjgmIALgJIAiAnQAQgPAKgXQAKgWAAgXQgBgggTgVQgVgVgfAAQgdAAgXAPgAJghqQgZgZAAglQAAggAPgcQAQgdAcgSQAbgRAfAAQAnAAAYAZQAZAZAAAmQAAAggPAcQgQAdgbARQgaARghAAQgnAAgYgZgAKJkHQgXAPgOAaQgOAaAAAcQAAAfAVAWQATAVAhAAQAcAAAYgQQAXgQAOgZQANgZAAgcQAAgggVgVQgTgVghAAQgcAAgXAPgAM7h5IAMgIQANARARAJQAQAIAZAAQAZAAARgNQAQgMAAgUQAAgNgJgJQgKgJgZgKQghgNgNgLQgMgMAAgSQAAgYAUgQQAVgQAgAAQAYAAAQAIQATAIAMAPIgMAJQgXgbglAAQgaAAgQANQgPAMAAARQAAANAMAJQAKAKAbAJQAeAMALAMQANAMAAASQAAAZgWARQgVASghAAQg2AAgbgogADMhUIA3jNIAPAAIg2DNgAg4hUIAWhTIg1h6IARAAIAuBuIBqhuIAUAAIh6B+IgVBPgAk4hUIA3jNIA/AAQAlAAATATQAPAOAAAWQAAAjgbATQgbATgwAAIgzAAIgVBNgAkRiuIAxAAQAoAAAYgQQAVgQAAgbQAAgRgKgKQgOgPgfAAIg0AAgAoKhUIA3jNIBAAAQAkAAAUATQAOAPAAAVQAAAjgcATQgbATguAAIg0AAIgVBNgAniiuIAwAAQApAAAWgQQAXgPAAgcQAAgRgLgKQgOgPgeAAIg0AAgApVhUIgKg6Ih4AAIgqA6IgRAAICXjOIAOAAIAoDOgApiibIgWh2IhVB2IBrAAgAthhUIAahgIiBAAIgaBgIgPAAIA3jNIAPAAIgaBfICCAAIAZhfIAPAAIg3DNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-101,-29.3,202,58.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B72018").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-118.4,-65.3,236.9,130.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AoRBmIghghIhsAAQgbAAgRgEQgWgEgMgMQgRgRAAggIAAhcQAAgGAEgEQAEgDAHAAIB4AAQAbAAAPADQAXAFAMAMQASASAAAfIAABbIAbAbQAEAEgBAFQAAAGgEAEQgFAFgGAAQgFAAgEgEgArfAAQAAAWALALIACACQAMAJAYAAIB4AAIAAhQQAAgWgLgLIgCgCQgMgIgXgBIh5AAgAJfBGQgLAAgHgDQgIgDgHgGQgGgHgEgJQgEgKAAgNIAAh2QAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgBADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABIAAB2QAAAJAEAIQACAHAEAFQAGAFAEACQAHADAHAAIAfAAQAPAAAIgLQAIgLAAgRIAAh2QAAgDABgCQACgBAEAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAB2QAAAMgDAJQgDAKgGAGQgFAIgJADQgIADgLAAgAMFBFQgOAAgLgEQgMgEgGgIQgJgHgDgMQgEgKAAgOIAAg3QAAgQAEgMQAFgLAHgIQAIgHALgEQAKgCAOAAIANAAQAOAAAKACQAMAEAHAHQAIAIAEALQAEAMAAAQIAAA3QAAAOgEAKQgEAMgHAHQgIAIgLAEQgKAEgPAAgALkhRQgMALAAAZIAAA3QAAALADAHQACAJAHAGQAFAHAJADQAIADALAAIANAAQALAAAIgDQAIgDAHgHQAGgGACgJQADgHAAgLIAAg3QAAgZgMgLQgNgLgUAAIgNAAQgVAAgMALgAGjBFQgFAAgDgDQgEgDABgFIAAiZQgBgEAEgEQADgCAFAAIAyAAQANAAALACQAMAEAIAHQAIAIADALQAEAMAAAQIAAA3QAAANgDALQgFAMgGAHQgIAIgMAEQgLAEgOAAgAGlA4IAwAAQAKAAAJgDQAJgDAGgHQAGgGACgJQAEgHAAgLIAAg3QAAgZgNgLQgNgLgUAAIgwAAgACEBFQgOAAABgMQAAgMANAAIBBAAQAlAAAJgFQAJgFAAgQIAAgBQAAgLgEgFQgEgGgOgBIgQgBIg/AAQgMAAAAgNQAAgMANAAIA7AAQAUAAAIgFQAFgFAAgLIAAgGQAAgOgIgEQgJgFggAAIg/AAQgNAAAAgMQAAgMANAAIA+AAQAyAAAQAKQAOAJAAAYIAAAKQAAAVgJALQARALAAAcIAAABQAAAhgcAKQgPAGgkAAgAiaBFIAAAAQgigBgPgJQgNgHgCgPIAAgDQAAgFAFgDQAEgEAGAAQAGAAAEADQADADABAEIACACQADAGAIACQAHACANABIBBAAQAlAAAKgFQAIgFAAgQIAAgBQAAgNgFgFQgIgGgZAAIhWAAQgeAAgNgLQgNgKAAgZIAAgKQAAgWAQgKQAUgLAwAAIAvAAQAnAAAQAJQAOAIACAPIAAADQAAAGgEADQgEADgGAAQgGAAgEgDQgDgCgBgEIgBgCQgFgIgLgCQgIgCgVAAIgyAAQgeAAgIAFQgKAEABAOIAAAGQAAALAFAFQAIAFATAAIBLAAQAlAAAOAIQAVALAAAfIAAABQAAAggbALQgQAGgkAAgAtIBBQgEgDAAgHIAAiSQAAgHAEgEQAEgDAHAAQAGAAAEADQAFAEAAAHIAACSQAAAHgFADQgEAEgGAAQgHAAgEgEgAmMBFQgrAAgWgMQgdgQAAgpIAAgkQAAgpAdgRQAWgLArAAIApAAQArAAAVALQAeARAAApIAAAkQAAApgeAQQgVAMgrAAgAm9hIQgPALAAAaIAAAiQAAAaAPALQAMAJAcAAIA7AAQAbAAANgJQAPgLAAgaIAAgiQAAgagPgLQgNgJgbAAIg7AAQgcAAgMAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-84.5,-10.6,169,21.3), null);


(lib.light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,3.5).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_mc, new cjs.Rectangle(-2.7,-2.7,5.4,5.4), null);


(lib.devs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AovgJIMapEIFFQPIh4CMg");
	var mask_graphics_2 = new cjs.Graphics().p("AuGg4IMcpEIPxCbIoJO6IkdBGg");
	var mask_graphics_4 = new cjs.Graphics().p("AjoIfIvopXIMcpEIPxCbIKTKnIySGug");
	var mask_graphics_6 = new cjs.Graphics().p("AAwGGI0Ar8IMcpEIPxCbIKTKoIh9Qyg");
	var mask_graphics_8 = new cjs.Graphics().p("AgvgCIyhq3IMcpDIPxCaIKTKpIh9QxIsgKGg");
	var mask_graphics_10 = new cjs.Graphics().p("AsITLILZzNIyhq3IMcpDIPxCaIKTKpIh9QxIsgKGg");
	var mask_graphics_12 = new cjs.Graphics().p("Aq7TLIpit6IU7lTIygq3IMbpDIPxCaIKUKpIh9QxIsgKGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-62.5,y:-68.4}).wait(2).to({graphics:mask_graphics_2,x:-28.2,y:-63.7}).wait(2).to({graphics:mask_graphics_4,x:4.8,y:-63.7}).wait(2).to({graphics:mask_graphics_6,x:4.8,y:-31.9}).wait(2).to({graphics:mask_graphics_8,x:4.8,y:0.3}).wait(2).to({graphics:mask_graphics_10,x:4.8,y:0.3}).wait(2).to({graphics:mask_graphics_12,x:-3,y:0.3}).wait(2).to({graphics:null,x:0,y:0}).wait(1));

	// Слой_1
	this.instance = new lib.devs();
	this.instance.parent = this;
	this.instance.setTransform(-117,-117);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-117,110.5,107.6);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-52,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-52,-131,104,262), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-150,-300,300,600), null);


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


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.light_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-2.7,-2.7,5.4,5.4), null);


(lib.holder_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-0.8,10.5,0.037,0.037);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:-0.2,regY:0.1,scaleX:2,scaleY:2,x:-1,y:10.8,alpha:0},5).wait(1));

	// Слой_6
	this.instance_1 = new lib.light();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.2,8.4,0.056,0.056,0,0,0,0.9,0.9);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:0,regY:0,scaleX:2,scaleY:2,x:4.3,y:7.9,alpha:0},5).wait(11));

	// Слой_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(177,102,96,0.8)").s().p("Ag2AAIA9gdQAMgGAKgDQASgFAFAKQAMAUgYANIhRApQgSgUAFgVg");
	this.shape.setTransform(1.7,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(177,102,96,0.8)").s().p("AgcgMIAhgPQAWADACAgIgrAUQgSgTAEgVg");
	this.shape_1.setTransform(-0.9,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},10).wait(6));

	// Слой_2
	this.instance_2 = new lib.holder();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-127,54,254);


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
		for(var i=0; i<3; i++){
			var cloneParticle = new lib.particle2Movie();
			cloneParticle.y = Math.random()*800;
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

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,272.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,-254.8,0.97,0.97,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(147));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.9,167.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({alpha:1},10).wait(50).to({alpha:0},10).wait(1));

	// holder
	this.instance_3 = new lib.holder_1("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-180,-46);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).to({x:-36},10,cjs.Ease.cubicOut).wait(15).to({mode:"synched",loop:false},0).wait(45).to({startPosition:16},0).to({x:-176},10,cjs.Ease.get(-1)).wait(1));

	// dev
	this.instance_4 = new lib.dev_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(205,-46);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({x:10},10,cjs.Ease.get(1)).wait(60).to({x:210},10,cjs.Ease.get(-1)).wait(1));

	// devs
	this.instance_5 = new lib.devs_1("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-86,1,1,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:28.1,y:-85.9,startPosition:14},54).to({scaleX:1,scaleY:1,rotation:0,y:-86,alpha:0},10).to({_off:true},1).wait(80));

	// t1
	this.instance_6 = new lib.t1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,143.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({alpha:1},10,cjs.Ease.cubicOut).wait(30).to({alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(80));

	// snow
	this.instance_7 = new lib.snowFront();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-169.1,-562.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(147));

	// bg
	this.instance_8 = new lib.bg_1();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(147));

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
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/dev.png", id:"dev"},
		{src:"images/devs.png", id:"devs"},
		{src:"images/holder.png", id:"holder"}
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