(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,250);


(lib.boxes = function() {
	this.initialize(img.boxes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,394);


(lib._img = function() {
	this.initialize(img._img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,232);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("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gKAAIAAgnIgVAAIAAAQQAAAKgCAEQgBAGgDACQgDADgGAAgApNAiQgFgCgEgDIAGgGIAGAFQAEABAFAAQAFAAAEgCQADgCAAgEQAAgGgKgBIgKAAIAAgHIAIAAQAFAAACgCQADgBAAgDQAAgCgCgDQgCgCgGABQgIAAgFAFIgGgFQADgEAFgDQAIgBAEAAQAJAAAFADQAFAEgBAGQAAADgBADQgCAEgDABQAEABACACQADADAAAFQAAAFgDADQgCADgFACQgHACgFAAQgGAAgGgDgAqNAhQgFgEgEgFQgDgFAAgIQAAgHADgFQADgFAGgEQAGgDAIAAQAFgBAHADQAFACADAFIgGAEQgCgBgEgDQgDgBgFAAQgEAAgEABQgDACgCACQgDAEAAADIAXAAIAAAHIgXAAQAAAGAFAFQAEAEAHAAQAFAAADgCQAEgCACgDIAGAGQgDAEgFACQgGADgGAAQgHAAgHgEgAt/AlIABgJIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgBABgDIABgiIAoAAIAAAvIgKAAIAAgnIgVAAIAAAQQAAAKgCAEQgBAGgDACQgEADgFAAgAN6AhQgGgDgDgGQgDgFAAgIQAAgHADgFQADgGAGgDQAFgDAHAAQAEAAAFABQAFACACAFIAAgHIAKAAIAAAvIgKAAIAAgGQgCADgFACQgEACgFABQgHgBgFgDgAN/gDQgDADgCADQgCADAAAFQAAAGACADQACADADADQAEACAFAAQAEAAAEgCQADgDABgDQACgDABgGQgBgFgCgDQgBgDgDgDQgEgBgEAAQgFAAgEABgAMXAhQgFgEgEgFQgDgFAAgIQAAgHADgFQAEgFAFgEQAGgDAIAAQAGgBAGADQAGADACAEIgFAFIgHgEQgDgCgFABQgFAAgDABQgEADgCADQgCAEAAAEQAAAEACAFQADAEADACQAEACAEAAQAFAAADgCQAEgBADgDIAFAGQgDAEgFACQgFADgHAAQgHgBgHgDgAJlAhQgFgEgEgFQgDgFAAgHQAAgIADgFQAEgGAFgDQAGgDAHAAQAIAAAGADQAFADAEAGQADAFAAAIQAAAHgDAFQgEAFgFAEQgHADgHABQgHgBgGgDgAJqgDIgFAGQgDAEAAAFQAAADADAFQACAEADABQADACAFABQAFgBADgCQAEgBACgEQACgFAAgDQAAgFgCgEQgCgDgEgDQgDgBgFAAQgFAAgDABgAhNAkIgCgDIgCgDIACgDIACgDIADgBIAEABIACADIABADIgBADIgCADIgEABgAjaAhQgGgEgDgFQgCgFAAgIQAAgHACgFQADgFAGgEQAGgDAIAAQAGgBAGADQAGADACAEIgGAFIgGgEQgDgCgFABQgFAAgDABQgEADgCADQgCAEAAAEQAAAEACAFQADAEADACQAEACAEAAQAFAAADgCQADgBADgDIAGAGQgDAEgFACQgFADgHAAQgHgBgHgDgAoXAhQgGgDgDgGQgCgFAAgIQAAgHACgFQADgGAGgDQAFgDAGAAQAFAAAFABQAEACADAFIAAgHIAKAAIAAAvIgKAAIAAgGQgCADgFACQgDACgHABQgFgBgGgDgAoRgDQgEADgCADQgBADAAAFQAAAGABADQACADAEADQADACAEAAQAFAAADgCQAEgDACgDQABgDAAgGQAAgFgBgDQgCgDgEgDQgDgBgFAAQgEAAgDABgArJAhQgGgDgDgGQgCgFAAgIQAAgHACgFQADgGAGgDQAFgDAGAAQAFAAAFABQAEACADAFIAAgHIAKAAIAAAvIgKAAIAAgGQgCADgFACQgDACgHABQgGgBgFgDgArDgDQgEADgCADQgCADAAAFQAAAGACADQACADAEADQADACAFAAQAEAAAEgCQADgDABgDQACgDAAgGQAAgFgCgDQgBgDgDgDQgEgBgEAAQgFAAgDABgAxfAhQgFgEgEgFQgCgFAAgHQAAgIACgFQAEgGAFgDQAGgDAIAAQAHAAAGADQAFADAEAGQADAFAAAIQAAAHgDAFQgEAFgFAEQgGADgHABQgHgBgHgDgAxZgDIgGAGQgCAEAAAFQAAADACAFQADAEADABQACACAGABQAFgBACgCQAEgBACgEQACgFAAgDQAAgFgCgEQgBgDgFgDQgCgBgFAAQgGAAgCABgARCAjIAAgTIgLAAIgMATIgKAAIAMgTQgFgCgDgDQgDgDAAgGQAAgGAFgEQAEgEAKAAIAXAAIAAAvgAQugDQgCADgBACQABADACADQAEACAEAAIAMAAIAAgPIgMAAQgEAAgEACgAQKAjIAAgVIgYAAIAAAVIgJAAIAAgvIAJAAIAAASIAYAAIAAgSIAKAAIAAAvgA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KAAIAAgIIAIAAQAGAAABgBQAEgCAAgEQgBgDgCgCQgCgBgFAAQgJAAgGAFIgFgFQADgEAFgCQAIgCAEAAQAIAAAGADQAEAEABAGQgBAEgBADQgDAEgDAAQAFACADADQABACAAAFQAAAFgCADQgCACgFADQgGACgGAAQgGAAgGgDgABEhMQgGgDgEgGQgCgFAAgHQAAgIACgGQAFgHAFgCQAEgEAIABQAHAAAFACQAHAFACAEQADAGAAAGIgBAFIgmAAIADAIIAGAEQAFACADAAIAJgCIAGgDIAFAGQgDADgFACQgHADgGAAQgHAAgGgEgABehmQAAgFgFgFQgDgDgGAAQgGAAgEADQgEAEAAAGIAcAAIAAAAgAkRhLQgEgBgEgFIAGgFIAGAEQAEACAEAAQAGAAADgCQAEgCAAgEQgBgGgJAAIgKAAIAAgIIAHAAQAGAAACgBQADgCAAgEQAAgDgDgCQgCgBgFAAQgJAAgFAFIgGgFQAEgEAFgCQAHgCAFAAQAIAAAFADQAFAEAAAGQAAAEgCADQgCAEgDAAQAFACACADQACACAAAFQAAAFgCADQgDACgFADQgGACgGAAQgFAAgHgDgAqDhMQgFgDgEgGQgDgFAAgIQAAgHADgGQADgFAGgEQAFgEAJABQAFAAAHACQAFACADAFIgGAFQgCgCgEgCQgEgCgEAAQgFAAgDACQgDABgDADQgCAEAAADIAXAAIAAAIIgXAAQAAAFAFAFQAEADAHAAQAEAAAEgBQAEgCACgDIAGAGQgDAEgFACQgGADgGAAQgHAAgHgEgAxohMQgGgDgEgGQgCgFAAgHQAAgIACgGQAFgHAEgCQAFgEAIABQAHAAAFACQAHAFACAEQADAGAAAGIgBAFIgmAAIADAIIAGAEQAFACADAAIAJgCIAGgDIAFAGQgDADgFACQgHADgGAAQgHAAgGgEgAxOhmQAAgFgFgFQgDgDgGAAQgGAAgEADQgEAEAAAGIAcAAIAAAAgAPShMQgGgDgDgGQgDgFAAgHQAAgIADgGQAEgGAFgDQAGgEAHABQAIgBAFAEQAGADADAGQADAGAAAIQAAAHgDAFQgDAGgGADQgFADgIAAQgHAAgGgDgAPYhwIgHAGQgBAEAAAFQAAADABAFQADAEAEABQACACAFAAQAGAAACgCQADgBADgEQACgFAAgDQAAgFgCgEQgCgEgEgCQgCgCgGAAQgFAAgCACgAI8hMQgFgDgEgGQgCgFAAgIQAAgHACgGQAEgFAFgEQAFgEAJABQAGAAAGACQAGAEADADIgHAGIgGgFQgEgBgEAAQgFAAgDACQgEACgCAEQgCAFAAADQAAAEACAFQACAEAEACQAFACADAAQAEAAAEgCQADgBADgDIAHAFQgEAFgFACQgEACgIAAQgHAAgHgDgAFVhJIACgIIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBAAgDIACgjIAmAAIAAAwIgJAAIAAgoIgUAAIgBARQAAAKgCAEQgBAGgDACQgDACgGAAgAEnhMQgFgDgEgGQgDgFABgHQgBgIADgGQAFgGAEgDQAGgEAIABQAHgBAGAEQAGADADAGQADAGAAAIQAAAHgDAFQgDAGgGADQgGADgHAAQgIAAgGgDgAEthwIgGAGQgCAEAAAFQAAADACAFQACAEAEABQADACAFAAQAFAAADgCQADgBACgEQACgFABgDQgBgFgCgEQgCgEgDgCQgDgCgFAAQgFAAgDACgAC6hMQgFgDgEgGQgCgFAAgHQAAgIACgGQAFgGAEgDQAGgEAIABQAHgBAGAEQAFADAEAGQADAGAAAIQAAAHgDAFQgEAGgFADQgGADgHAAQgHAAgHgDgADAhwIgGAGQgCAEAAAFQAAADACAFQADAEADABQADACAFAAQAFAAADgCQADgBACgEQACgFAAgDQAAgFgCgEQgBgEgEgCQgDgCgFAAQgFAAgDACgAgxhJIgBgDIgBgDIABgDIABgDIAEAAIAEAAIABADIABADIgBADIgBADIgEAAgAoNhMQgFgDgEgGQgCgFAAgIQAAgHACgGQAEgFAFgEQAFgEAJABQAGAAAGACQAGAEADADIgHAGIgGgFQgEgBgEAAQgFAAgDACQgEACgCAEQgCAFAAADQAAAEACAFQACAEAEACQAFACADAAQAEAAAEgCQADgBADgDIAHAFQgEAFgFACQgEACgIAAQgHAAgHgDgAq/hMQgFgEgEgFQgDgFAAgIQAAgHADgGQAEgGAFgDQAFgEAHABQAEAAAFACQAEACADAEIAAgHIAKAAIAAAwIgKAAIAAgHQgCAEgFACQgDACgGAAQgHAAgFgDgAq5hwQgEACgCAEQgCADAAAFQAAAFA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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-120.8,-14.6,241.6,29.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDCF2D").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-83.3,-30.1,166.7,60.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDCF2D").s().p("AHYBhQgPgKgJgRQgIgRAAgUQAAgUAIgQQAJgRAPgJQAPgKASAAQANAAAKAFQAKAFAHAJIAAgPIAoAAIAACJIgoAAIAAgPQgHAJgKAFQgLAFgMAAQgRAAgQgJgAHwAAQgHAFgFAJQgEAJAAAKQAAAKAEAJQAEAKAIAEQAIAEAKAAQAJAAAIgEQAJgFADgJQAEgJAAgKQAAgKgEgJQgDgIgJgGQgIgDgJAAQgKAAgIADgACKBgQgRgJgJgRQgJgRAAgUQAAgTAJgRQAJgRARgJQAQgKAXAAQAVAAAPAHQAQAHAJALIgXAaQgHgHgJgEQgJgDgMAAQgKAAgJADQgIAFgDAIQgFAJAAALQAAALAFAIQAEAHAHAFQAJAFAKAAQALAAAKgFQAIgDAIgIIAXAbQgIAKgRAIQgRAHgTAAQgVAAgSgKgAoOBgQgQgJgLgRQgJgQAAgUQAAgVAJgPQALgSAQgJQAQgKAWAAQAWAAAQAKQARAJAJASQAJAPAAAVQAAATgJARQgJARgRAJQgQAKgWAAQgWAAgQgKgAn6ABQgHAFgEAIQgFAJAAALQAAAKAFAIQADAIAIAFQAIAEAKAAQAKAAAHgEQAJgFADgIQAFgIAAgKQAAgLgFgJQgDgIgJgFQgHgDgKAAQgKAAgIADgALHBmIgcgwQgCgFgCAAQgCgCgFAAIgRAAIAAA3IgnAAIAAiJIAnAAIAAAwIARAAQAFAAACgBIAggvIAsAAIgsA/IAtBKgAGABmIAAhSIggAuIgbAAIggguIAABSIgmAAIAAiJIAmAAIAtA8IAug8IAmAAIAACJgAgHBmIAAhUIg4BUIgkAAIAAiJIAmAAIAABTIA3hTIAjAAIAACJgAikBmIAAhUIg3BUIgkAAIAAiJIAmAAIAABTIA3hTIAkAAIAACJgAmOBmIAAiJIBDAAQAZAAAOAKQANAKAAAQQAAALgFAHQgEAIgKAEQAYAIAAAXQAAANgFAIQgGAIgMAGQgLAFgQAAgAloBLIAaAAQAWAAAAgPQAAgIgGgDQgEgEgMAAIgaAAgAloAUIAWAAQALAAAFgEQAGgDgBgHQABgGgGgEQgFgDgLAAIgWAAgAp2BmIAAhTIhVAAIAABTIgoAAIAAjGIAoAAIAABOIBVAAIAAhOIApAAIAADGgAg7g/QgMgGgHgLQgGgLgBgOIAdAAQACAKAFAFQAHAFAJAAQAJAAAGgFQAGgFABgKIAcAAQAAAOgHALQgHALgKAGQgLAGgPAAQgOAAgMgGg");
	this.shape.setTransform(0,-16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGRBlQgDgCgDgFQgDgFAAgEQAAgEADgFQADgFADgCQADgCAGAAQAGAAAEACQADACADAFQADAEAAAFQAAAIgFAFQgGAFgIAAQgFAAgEgCgAEDBgQgTgHgLgMIAOgUQALAKAOAFQAPAGARAAQAOAAAJgDQAKgEAFgIQAGgHAAgLQAAgLgGgHQgGgHgLgFQgNgFgNgEQgVgGgLgFQgNgFgIgMQgJgKAAgRQAAgSAJgLQAJgMAPgGQAPgGAVAAQATAAATAFQARAGAMAMIgNAUQgKgJgOgFQgNgFgQAAQgTAAgMAHQgLAIAAANQAAAJAFAGQAGAGAJAEIAZAJQATAFAPAHQANAFAJAMQAKANAAATQAAASgJAOQgJANgQAGQgPAHgWAAQgYAAgSgHgACHBkIAAiuIg+AAIAAgZICZAAIAAAZIg/AAIAACugAhCBkIAAjHIB7AAIAAAZIhgAAIAAA8IBYAAIAAAYIhYAAIAABBIBjAAIAAAZgAjeBkIAAjHIB8AAIAAAZIhhAAIAAA8IBZAAIAAAYIhZAAIAABBIBkAAIAAAZgAkpBkIAAhbIhoAAIAABbIgbAAIAAjHIAbAAIAABUIBoAAIAAhUIAbAAIAADHgAGOApIgBiMIAbAAIgBCMg");
	this.shape_1.setTransform(-32.4,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-75.6,-27.4,151.2,54.8), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.logo_iqos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirCpIgsgtIgFgDQgCgCgEAAIjJAAQg/AAgkgeQgigdAAgsIAAiqQAAgHAGgGQAGgGAHABIDnAAQA9AAAkAdQAjAdAAAtIAABPQAAAJgGAFQgGAFgGgBIgHAAQgIABgGgFQgEgFAAgJIAAhPQAAgLgFgKQgFgLgJgHQgLgLgUgGQgQgEgXAAIjJAAIgEABIgBAFIAACLQAAAMAEAKQAFALAJAHQALAKATAGQASAEAXABIDVAAQAGAAAGABIAJAHIA1A1QAFAFAAAIQAAAIgFAEIgFAGQgFAFgHgBQgJABgFgFgAGrB3QgVABgTgIQgUgJgPgNIgJgJQgFgGgBgHQAAgIAFgGIAFgEQAFgFAHgBQAIAAAGAGIAKAJQAJAIALAFQALAEANABICQAAQAVAAAPgEQAPgEAJgHQAFgFACgEQADgIAAgKQAAgKgDgGQgCgFgFgFQgJgHgPgCQgPgEgVgBIh6AAQg3ABgfgXQgagWAAgiIAAgKQAAgjAagVQAfgYA3ABICFAAQAUAAASAHQASAHAPANIAMALQAGAFABAHQAAAIgEAGIgFAEQgFAHgIgBQgHABgGgFIgMgLQgIgIgMgEQgMgEgLAAIiFAAQgTAAgQAEQgPADgKAHQgEAEgDAGQgDAGAAAKQAAALADAGQADAHAEADQAJAIAQADQAQAEATAAIB6AAQA5AAAdAWQAaAWAAAhIAAALQAAAigaAVQgdAXg5AAgAAaB3Qg+AAgkgeQghgdAAgsIAAhVQAAgtAhgdQAkgdA+AAIB1AAQA9AAAkAdQAiAdAAAtIAABVQAAAsgiAdQgkAeg9AAgAgOh9QgSAGgNALQgIAHgEALQgGAKAAALIAABVQAAAMAGAKQAEALAIAHQANAKASAGQARAEAXABIB1AAQAWgBASgEQASgGAMgKQAJgHAFgLQAFgKAAgMIAAhVQAAgMgFgJQgFgLgJgHQgMgLgSgGQgSgEgWAAIh1AAQgXAAgRAEgAqXB3QgIABgGgGQgFgFAAgIIAAj+QAAgJAFgFQAGgGAIABIAFAAQAIgBAFAGQAGAGAAAIIAAD+QAAAIgGAFQgFAGgIgBg");
	this.shape.setTransform(46.5,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AikFoQg9AAgygfQgwgdgcgxQgcgwgBg4QgCg7Afg1IClkeQAeg0A0gcQAxgcA3AAQA5AAAwAcQA0AcAeA0IClEeQAfA1gBA7QgBA4gdAwQgcAxgvAdQgzAfg9AAgAhujUQgyAWgnAnQgmAngWAzQgXA0ABA5QgBA6AXA0QAWAyAmApQAnAnAyAUQA2AXA4AAQA6AAA1gXQAxgUApgnQAmgpAVgyQAXg0AAg6QAAg5gXg0QgVgzgmgnQgpgngxgWQg1gVg6gBQg4ABg2AVg");
	this.shape_1.setTransform(-79.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_iqos, new cjs.Rectangle(-118,-36,232.9,72), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib._img_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._img();
	this.instance.parent = this;
	this.instance.setTransform(-115,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._img_1, new cjs.Rectangle(-115,-116,230,232), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35303E").s().p("AHLA8QgDgBgBgDQgCgCAAgEIACgFIAEgEQACgBADAAQAEAAACABIAEAEIABAFQAAAFgDAEQgDACgFAAIgFgBgAC5A4QgJgGgFgJQgFgKAAgMQAAgMAFgJQAFgKAJgGQAJgFAKAAQAIAAAIAEQAGADAFAHIAAgMIAQAAIAABRIgQAAIAAgNQgFAIgGADQgGADgKAAQgKAAgJgFgADCgFQgFAEgEAFQgDAGAAAJQAAAIADAGQADAHAGAEQAGADAHAAQAHAAAGgDQAGgEADgHQADgHAAgHQAAgIgDgHQgDgFgGgEQgGgDgHAAQgHAAgGADgAA+A9IABgOIAFAAQAFAAABgDQACgBACgGIACg6IBAAAIAABRIgPAAIAAhDIgiAAIgBAcQAAAPgDAIQgBAJgGAEQgFAEgKAAIgHAAgAhrA4QgJgFgGgKQgFgKAAgMQAAgMAFgJQAGgLAJgFQAJgFAMAAQAMAAAKAFQAJAGAGAKQAFAJAAAMQAAAMgFAKQgGAJgJAGQgKAFgMAAQgMAAgJgFgAhjgFQgGAFgDAEQgDAGAAAJQAAAIADAGQADAGAGAEQAHAEAGAAQAHAAAGgEQAGgDADgHQAEgGAAgIQAAgIgEgHQgDgFgGgEQgFgDgIAAQgHAAgGADgAjvA4QgJgGgGgJQgFgJAAgNQAAgOAFgHQAGgLAJgFQAJgFALAAQAMAAAIAFQAJAFAGAKQAFAIAAALIgBAHIg/AAQABAIADAFQAEAGAGACQAFADAIAAQAJAAAFgCQAHgDAFgEIAIAKQgGAHgJADQgJADgLAAQgMAAgKgFgAjDAMQgBgKgHgGQgHgFgJAAQgJAAgHAFQgHAGgBAKIAwAAIAAAAgAGjA8IAAgkIgoAAIAAAkIgQAAIAAhRIAQAAIAAAfIAoAAIAAgfIAQAAIAABRgAFIA8IAAg8IgqA8IgOAAIAAhRIAPAAIAAA7IAqg7IAPAAIAABRgAAhA8IAAgkIgmAAIAAAkIgQAAIAAhRIAQAAIAAAfIAmAAIAAgfIARAAIAABRgAkVA8IgVghIgBgCIgEgBIgGAAIAAAkIgQAAIAAgkIgFAAIgEABIgCACIgUAhIgSAAIAbgsIgaglIARAAIAUAcIACACIADABIAGAAIAAgfIAQAAIAAAfIAHAAIADgBIACgCIAUgcIARAAIgaAlIAbAsgAnaA8IAAh3IAtAAQALAAAIAEQAHADAFAIQADAGAAAKQAAAKgDAGQgEAGgHAEQAJADAGAHQAFAJAAAKQAAAKgEAHQgEAHgIAEQgIAFgLAAgAnKAtIAfAAQAKAAAGgFQAFgFAAgJQAAgKgFgFQgGgFgKAAIgfAAgAnKgHIAaAAQALAAAFgFQAFgFAAgJQAAgKgFgEQgFgFgLAAIgaAAgAHJAZIgBhUIAQAAIgBBUgAEngmQgGgDgEgGQgDgGgCgHIANAAQABAHAEACQAFAEAGAAQAFAAAFgEQAEgEAAgFIANAAQgBAHgEAGQgDAGgHADQgFADgHAAQgIAAgGgDg");
	this.shape.setTransform(-1.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-48.7,-7,95.1,12.3), null);


(lib.btn_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_round, new cjs.Rectangle(-20,-20,40,40), null);


(lib.btn_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoADIQhSAAg6g6Qg6g5AAhTIAAgCQAAhSA6g6QA6g7BSAAIQBAAQBSAAA7A7QA5A6AABSIAAACQAABSg5A6Qg7A6hSAAg");
	this.shape.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-70.7,-20,142.3,40), null);


(lib.boxes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.boxes();
	this.instance.parent = this;
	this.instance.setTransform(-139,-197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes_1, new cjs.Rectangle(-139,-197,278,394), null);


(lib.box_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-184,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(-184,-125,368,250), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35303E").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.instance = new lib.btn_txt();
	this.instance.parent = this;
	this.instance.setTransform(0,8.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({y:0.7,alpha:1},8).wait(1));

	// r_part
	this.instance_1 = new lib.r_part();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:61.6},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-61},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой_5
	this.instance_3 = new lib.btn_bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.01,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1},8,cjs.Ease.get(1)).wait(4));

	// Слой_1
	this.instance_4 = new lib.btn_round();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.012,0.012);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.2,scaleY:1.2},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.quadInOut).to({_off:true},9).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,0.5,0.5);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:75});

	// timeline functions:
	this.frame_195 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(195).call(this.frame_195).wait(1));

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(196));

	// logo
	this.instance_1 = new lib.logo_iqos();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-65,-259.5,0.481,0.481,0,0,0,-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(196));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-59.6,136.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({x:-39.6,alpha:1},10,cjs.Ease.cubicOut).wait(40).to({x:-19.6,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(60));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-67.4,133.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({x:-47.4,alpha:1},10,cjs.Ease.cubicOut).wait(40).to({x:-27.4,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(59).to({_off:false,x:-67.4},0).to({x:-47.4,alpha:1},10,cjs.Ease.cubicOut).wait(40).to({x:-27.4,alpha:0},10,cjs.Ease.cubicIn).wait(1));

	// btn
	this.instance_4 = new lib.btn("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-46.2,205,1.1,1.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(171));

	// box
	this.instance_5 = new lib.box_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(338.1,-68.1,1,1,0,0,0,0.1,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({x:78.1},10,cjs.Ease.cubicOut).wait(171));

	// boxes
	this.instance_6 = new lib.boxes_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(289,-380);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:11,y:-103},15,cjs.Ease.quartOut).wait(181));

	// img
	this.instance_7 = new lib._img_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-35,-184);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},15).wait(181));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(196));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-577,578,877.1);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,22.9,579,878.1);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box.png", id:"box"},
		{src:"images/boxes.png", id:"boxes"},
		{src:"images/_img.png", id:"_img"}
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
an.compositions['0A6E3F5DF6B342F4AF907DBE848CDF8D'] = {
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