(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bottles_2 = function() {
	this.initialize(img.bottles_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,366);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,400);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,400);// helper functions:

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

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AD0BcQgDgCgEgDQgDgDgBgEQgBgDgBgEIAAgJIABgGIACgFIAEgEIAAAAIgDgDIgDgEIAAgEIAAgIIABgIIAFgHQACgDAEgBQADgCAGAAQAFAAAEACQADABADADQAEADABAEQABADAAAFIgBAMIgCAEIgDADIAAAAIADADIACAFIABAEIAAALQAAAFgBAFIgFAGIgGAEQgEABgFABQgFgBgEgBgAD7A6IgBABIAAAPIABABIACABIACgBIABgBIAAgPIgBgBIgCgBIgCABgAD7AcIgBACIAAAKIABABIACABIACgBIABgBIAAgKIgBgCIgCgCIgCACgAAcBYQgHgGABgKIAAgpQgBgKAHgGQAFgGALAAQAGAAAEACQAEABACADIAFAIIABAIIAAACIgTACQAAgDAAgCQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBABIAAACIAAAoIAAAEIADABQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABgDAAgEIATABIgBAKQgBAEgDAEQgCADgEADQgFACgGAAQgLgBgFgFgAiBBcQgFgCgCgEQgDgDAAgEQgCgFAAgFIAUgBIAAADIAAADIABABIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIABgGIgCgGQgBgBgDgCIgKgGIgHgFQgCgFAAgDIgBgHQAAgGACgEQAAgEADgDQAEgDADgCQAEgCAHAAQAGAAAEACIAHAFIAEAIIABAIIgUACQABgDgCgCQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAIAAADIAAADIABACIACACIAFACIAJAGIAFAFIADAHIABAJIgBAKQgCAFgDADQgCAEgFACQgFACgGAAQgGAAgEgCgAFjBdIAAgQIAUglIABgEIABgFIgBgCQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABQgBABAAAFIgRgCQgBgGACgFQACgEACgDQADgDAEgBQAEgCAEAAQALAAAFAFQAGAHgBAJIAAAFIgBAFIgBAEIgCAFIgPAbIATAAIAAARgAEpBdIAShDIgFAAIAAAIIgQAAIAAgYIApAAIAAAPIgUBEgAC7BdIAAg+IgLAJIAAgUIAMgKIARAAIAABTgABQBdIAAhTIApAAIAAASIgUAAIAAANIASAAIAAASIgSAAIAAAQIAUAAIAAASgAgLBdIgMgjIAAAAIAAAjIgUAAIAAhTIASAAIAMAhIAAAAIAAghIASAAIAABTgAhQBdIAAhTIAUAAIAABTgAC+gNQgHgGABgLIAAgoQgBgLAHgFQAFgHALAAQAFABAFABIAHAFQADADABAEIABAHIAAACIAAACIgSACIgBgHQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAIAAADIAAAoIAAACQABABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBQABgBAAgFIATABQgBAFgBAFQgBAEgDAEQgCADgEABQgFADgGAAQgLAAgFgFgAh7gNQgFgGgBgLIAAgoQABgLAFgFQAGgHALAAQAGABAEABIAGAFQADADABAEIABAHIAAACIAAACIgSACIAAgHQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAABgBAAIgBADIAAAoIABACQABABAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIABgGIATABIgBAKIgDAIQgEADgDABQgFADgGAAQgLAAgGgFgAlLgOQgHgFABgMIAAgnQgBgGACgEIAFgHQADgDAEgBQADgBAGgBQAXAAAAAXIAAAnQAAAMgHAFQgFAGgLAAQgLAAgFgGgAk9hKIgBAEIAAAoQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACAAIACAAIABgDIAAgoIgBgEIgCAAgAF9gJIgJggIgBAAIAAAgIgUAAIAAhTIAYAAQAFAAAEABQAEACADADQADADABAFQACAEAAAHQAAAHgCAFQgCAFgEADIALAmgAFzg7IABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgFIgBgGQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAIgBAAgAEogJIAAhTIApAAIAAASIgVAAIAAAOIASAAIAAASIgSAAIAAAPIAVAAIAAASgAD7gJIAAhBIgMAAIAAgSIAtAAIAAASIgNAAIAABBgACXgJIgCgOIgMAAIgCAOIgUAAIAQhTIAZAAIAQBTgACLgpIAIAAIgDgaIgBAAgABVgJIgIggIgBAAIAAAgIgUAAIAAhTIAXAAQAGAAAEABQAEACADADQADADACAFQABAEAAAHQAAAHgCAFQgCAFgEADIALAmgABMg7IABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgFIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgBAAgAAYgJIgCgOIgMAAIgDAOIgTAAIAQhTIAYAAIAPBTgAAMgpIAIAAIgEgaIgBAAgAgrgJIAAghIgHAAIAAAhIgUAAIAAhTIAUAAIAAAgIAHAAIAAggIAUAAIAABTgAjfgJIAAhTIAZAAQAHAAAFADQAFADABAFIACANIAAAkIgCALIgDAGIgEADIgGACIgGABgAjMgaIABAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQABgBAAgEIAAgjIgBgFQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAIgBAAgAkUgJIAAhTIAUAAIAABBIAUAAIAAASgAmPgJIAAhTIAZAAQAUAAAAAXIAAAFIgBAFIgDADIgEAEIAAAAIAEADIADADIABAGIABAGQAAANgFAGQgGAGgLAAgAl7gaIABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAgBIABgHIgBgGQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAgAl7g8IAAAAQABAAABgBQABAAAAAAQABAAAAgBQAAAAABgBIABgFIgBgFQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBgBgBAAIAAAAg");

	// Слой_2
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-40,-63,0.315,0.315);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-40,-9.3,80,18.7), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmPEpIAIgMIAAiWIgIgKIAAgMIAqgHIAtBYIAAhJIgIgKIAAgMIAngHIAAANIgIANIAACVIAIAKIAAAMIgnAHIAAgNIAIgMIAAgaIg3hoIAACMIAJAKIAAAMIgpAHgADKEWQAAgEAEgDIAEgDQAAgBABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgEgEAAgDQAAgNAQAAQATAAAAANQAAADgEAEQAAAAgBAAQAAAAAAABQAAAAABAAQAAAAABAAIADADQAFAEAAAEQAAANgXABQgVAAAAgOgADTEVQAAAHAMAAQANAAAAgHQAAgHgNAAQgMAAAAAHgADXECQAAAGAIAAQAJAAAAgFQAAgGgJAAQgIAAAAAFgAFrEjQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgBgCQAAgHAKgHIAJgFIAEgCQAIgCAAgDQAAgGgKAAQgDAAgEACIgCACQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQABAAAAAAIAFgEQAGgEAGAAQASAAABANQAAAHgQAGIgDABIgKAHQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAaAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAEnEiQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAVgeQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgUAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAgEQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIAfAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAAAEIgBADIgWAfQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgACVEiQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAggQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgFAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAOAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAAAmQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAgAkCD/IAFgJIAAhuIgFgHIAAgKIBGgMIAAAZIgKABIgHgEIgdAFIAAAmIANgCIARgGIAAAZIgQAAIgOACIAAAzIAbgEIAIgIIALgCIAAAZIhGANgAimDvIAGgJIAAhvIgGgGIAAgKIAjgGIAaBaIAbhkIAjgGIAAALIgGAJIAABuIAGAHIAAAKIggAFIAAgKIAHgKIAAhcIgbBkIADAQIgaAEIAEgRIgbhbIAABeIAGAHIAAAKIgfAGgAgWDVIAHgIIAAhvIgHgHIAAgJIAegGIAAAKIgFAKIAABuIAFAHIAAAKIgeAFgAAfDMIAGgJIAAhuIgGgHIAAgKIBHgMQAEAAADADQADADAAAFIAAA3QAAAFgDAEQgEAEgFABIgFABIARAtIAGAHIAAAKIgfAGIAAgLIAGgJIgRgtIgUAEIAAAwIAFAHIAAAKIgeAGgAA4BSIAAArIAkgHQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIAAgnIgBgBgACPC+QgDgDAAgFIAAh5QAAgFADgEQAEgEAFgBIAzgKIADAAQAFAAADAEQADADAAAFIAAB4QAAAGgEAEQgEAEgFABIg1AJQgFAAgDgDgACgBAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIAABqIABABIAlgGQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAhqIgBgBIAAAAgADvCoIAGgKIAAhuIgGgHIAAgKIBHgMIAAAZIgKACIgIgFIgcAFIAAAnIANgDIARgGIAAAaIgQgBIgOACIAAA1IAGAHIAAAJIgfAGgAFJCXIAHgJIAAhuIgHgHIAAgKIBHgMIAAAZIgKACIgIgFIgbAFIAAAnIAMgDIASgGIAAAaIgRgBIgNACIAAA0IAGAIIAAAJIggAGgAmDA5IgEgBIgEgBIgBAAIgBABIgBABIgBgGIAAgGIACABQACADAEADQADADAEAAQADAAABgCQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBgBIgKgDQgEgBgDgDQgCgCAAgDQAAgFADgCQADgCAFAAIAHABIABAAIAAAAIABABIABgBIABAAIABgBIABAFIAAAEIgBAAIgBAAQgCgDgDgCQgCgCgEAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIABACIAKADQAFACADACQACADAAADQAAAFgDACQgEADgFAAgAkFA5IgEgCQgFgBgDgEQgBgEAAgFQgBgEACgCIAEgFIAFgDIAHgBIAFABIACAAIADABIABgBIAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABAGIAAAFIgCgBQgBgDgCgCQgEgDgDAAQgDAAgDAEQgCADgBAGIABAHQABABAAABQAAAAABABQAAAAAAAAQABABAAAAIADACIADAAQAEAAACgBIAEgFIABgBQABAAAAABQABAAAAAAQAAAAAAABQAAAAgBAAQAAADgEADQgEACgFAAgAkpA4IgVgXIAAASQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAAAIAFACQAAABgGAAIgCAAQgFAAgBgBIAFgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAIAAgTIgBgDIgFgBIAHgCIAEAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIASATIAAgPIgBgDIgEgBQAAgCAGAAIABAAQAGAAAAACIgEABIgBADIAAAWQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgDgBgAjfA4IgHgBIADgCIABgCIAAgTIgBgDIgDgBIAHgCIAaAAQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABIAAAHQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgGgHQgDgBgGAAIgFAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIAAAIIADAAIAEgCIADgEQACAAAAAHQAAAHgCAAIgDgFIgEgBIgDAAIAAAJQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAABIAFAAQAHAAADgCQACgBADgGQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIgBAIIgBABgAlfA4IgGgBIADgCIABgCIAAgTIgBgDIgDgBIAGgCIAFAAIAHACIgEABIgBADIAAATQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIAEACIgHABgAhTANQghgOgXgbQAFgBAEgFIAHAGQAVAWAcALQAdAMAgAAQAgAAAcgMQAdgMAUgVIAFgEIANABQgXAdghAOQgiARglAAQglAAghgQgAAXABQgHgBgEgBIgBgCQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAGADAFgDQAFgDAAgGQABgHgJgJIgSgRQgPgNgPgGIgEAAIgCABQgDAAAAgGIAAgUQAAgGgCgCQgCgCgEAAIgHABQgOABgLgGQgLgGgIgIIgIgKQgEgHADgDQACgCAGAHQADAEAJADQAKAEAKgBQAPgCAHgJQAGgIAAgKIAAhWQADgBAEACQAGABADADQAHAFANAQQAMANALAGQAPAHASABQAPABAGgEQAGgDACgCIABgEIACAAQAEABABADQABADAAAHQgCAHgHADIgIACQgBABAAAAQAAAAAAAAQAAABAAAAQABAAAAABQADADAOAGQATAIAPgBQAMAAAFgJQACgGgBgGQgCgHgFgCQgEgCgEACQgEABgCADQgDAGADAHQACAEgFgCQgCgCgBgFQgCgHAEgGQAEgIALAAQAIAAAHAEQAHAFADAJQAEAJgCAJQgCAHgGAHQgHAHgJADQgWAFgjgOQgTgHgWgNIgVgMQgEgDgCACQAAABADADIAaASIAfARQALAFARAFQASAGANAAQATABAMgGQABAAABgBQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBABQgCAEgIAGQgKAHgNAAQgbAAgngSIgogYIgVgNQgBgBAAAAQgBgBgBAAQAAAAAAAAQgBAAAAABQgBAAAAABQAAAAAAAAQABABAAABQABAAAAABIAQAMQASAOAbAPQAhASAYADIARACQAOAAAHgCQAJgCgGAHQgHAIgYAAQgaAAgtgXQgYgMgWgOQgPgLgDgEQgFgEgBACQgCACAEADQAIAJAUAOQAXAQAYAMQAaAOAbAEQASACAMgBQAFgBgBADQgCADgGACQgIADgMAAQgQAAgbgKQgagLgcgQQgMgHgSgOIgTgOQAAAAgBgBQgBAAAAAAQgBgBAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAQAQAQAPAMQAcAUAeANQAbANAYAEQALACAIAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABQgDAEgHACIgKAAQgKAAgLgCQgTgFgdgOQgYgNghgZQgYgSgGgGQAAAAgBgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAABABAAIAZAWQAVASAUANQAcATAgAMQAFACgBACQAAABgEgBQgJgBgRgGQgVgIgRgLQgQgKgSgRIgSgPIgCgBQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAABIAKALQAKALAKAIIAkAeQAGAGACAIQAEALgHAIQgGAFgIAAIgCAAgAg5gFQgJAAgJACIAAAAQAGgEABgIIAAhOQAMAEAKgCIAABNQAAAHAHAEIgBAAQgHgCgKAAgAikgjQAAgCAFgCQAHgCADgGQABgEAAgKIAAiNQAAgJgHgJQgHgIgEAAIgBAAIAOgKQAHgFAGgHIAAABQgCADADAHIAEAGIBCBVIABAAIgBgqQAAgaACgPQADgSAHgLQAKgPALgGQAKgFAOAAQAMgBAJAIQAIAGAAAJQAAAJgGAGQgHAHgJABQgIAAgGgEQgFgEAAgIQAAgEACgEQAEgEAIAAQAFAAACADIABAEQgBAEgGgBQgEgBAAgEQgHAAAAAHQAAAEADACQAEAEAHAAQAGAAAFgEQAFgFABgHQABgHgHgFQgFgGgNAAQgWAAgHAYQgEAKAAAVIAABJQAAAHgEAGQgHAHgKAAQgSAAgLgLIgcgkIAABYQAAARgCAIQgGAcgUAFIgHACQgEAAgBgDgAi1iMQAAglAPgiQAGAEADAHQgMAcAAAgQAAAhAMAdIAAABIAAALQAAAHgBAFQgXgnAAgvgACDjJQgMgcgXgXQgUgVgdgNQgcgMggAAQggAAgdAMQgcANgVAVIgDADIAAgBQgDgEgBgEIABgFQAXgWAegMQAegMAhAAQA0AAAsAfQAqAeASAwQgGgBgGACgAhtjYQgHgKAEgOQAFgNAOgHQAPgHANAGIgEAKIgEAMIgDgCQgIgEgHADQgFADgCAFQgCAGABAEQADAFADAAQAJABAAgHIAAgBQADADAAAFQAAADgDADQgCAEgHAAQgKAAgGgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-40,-31,80,62.1), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-127,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-127,-200,254,400), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-65,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-65,-200,130,400), null);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,127.3).s().p("At6N7QlxlxAAoKQAAoJFxlxQFxlxIJAAQIKAAFxFxQFxFxAAIJQAAIKlxFxQlxFxoKAAQoJAAlxlxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-126,-126,252,252), null);


(lib.bottles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.bottles_2();
	this.instance.parent = this;
	this.instance.setTransform(-88,-149,0.88,0.88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottles, new cjs.Rectangle(-88,-149,169.9,322.1), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxLWQgjggAAhBIAAjoQAAghAKgYQAKgZASgPQATgRAZgIQAZgJAfAAQCLAAAACDIAADoQAABBgkAgQgmAihBAAQhCAAglgigAApF7QgFADgBAMIAADvQABAMAFAEQAHADAFAAQAFAAAHgDQAFgEAAgMIAAjvQAAgMgFgDQgGgEgGAAQgFAAgHAEgAR7L0IgNhYIhMAAIgLBYIh8AAIBinlICXAAIBiHlgAQxI5IAvAAIgVicIgFAAgAMPL0IhAigIgPAcIAACEIh7AAIAAnlIB7AAIAAB+IAFAAIBDh+ICAAAIhxDHIB6EegAD6L0IAAnlICdAAQArAAAfAPQAdAQAKAjQAGAWABAvIABBqIgBBpQAAAsgJAYQgGASgMANQgLAOgQAJQgQAIgTAFQgSAEgUAAgAFxKOIAEAAQATAAAHgKQAHgKAAgUIAAjMQAAgUgGgJQgFgJgWAAIgEAAgAlvL0IhgnlICBAAIAqFJIADAAIAqlJICAAAIhhHlgAsAKeQgWgJgOgRQgOgRgGgTQgGgVgBgXIBlgJQgBANABAFQABAHADADIAFAGIAGAAQAJAAADgIQAEgHAAgRQgBgRgGgLQgHgKgTgJQgfgNgUgOQgTgNgLgPQgKgQgFgRQgDgRAAgVQAAgaAHgVQAIgWANgPQAOgQAXgJQAWgJAfAAQAhAAAWALQAWAJANARQANARAFAUQAFAUABAUIhmAKQAAgSgCgHQgCgJgKAAQgJABgCAHQgEAIAAAKIABALQACAFAEAFQAEAHAIAEQAHAFAOAGQAdALATANQASANALAQQALAQAEASQADATAAAXQAAAdgGAXQgHAWgOARQgOAQgYAJQgXAKghgBQgfABgVgKgAvSKkIAAmWIBnAAIAAGWgAxsKkIAAiiIgiAAIAACiIhnAAIAAmWIBnAAIAACcIAiAAIAAicIBmAAIAAGWgAAQDvIAAoPIERAAIAABzIiMAAIAABYIB6AAIAABxIh6AAIAABgICMAAIAABzgAigDvIhFitIgRAcIAACRIiGAAIAAoPICGAAIAACJIAFAAIBIiJICMAAIh6DaICEE1gAomDvIgNhgIhSAAIgOBgIiGAAIBqoPICkAAIBrIPgAp2AjIA0AAIgXioIgFAAgAu+DvIAAjmIgDAAIgjB/IhlAAIgjiBIgEAAIAADoIiBAAIAAoPICLAAIBNDqIAEAAIBOjqICLAAIAAIPgAngk/IAAm4IDiAAIAABgIhzAAIAABJIBlAAIAABfIhlAAIAABQIBzAAIAABggAqyk/IggjKIgCAAIgiDKIhxAAIhBm4IBzAAIASDhIAEAAIAejhIBcAAIAfDdIADAAIAQjdIB0AAIhCG4g");

	// Слой_5
	this.instance = new lib.img2_1();
	this.instance.parent = this;
	this.instance.setTransform(0,80);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-80},95).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-76,254,152);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AICRWIhWjhIgEAAIAADhIiGAAIAAogIB5AAIBWDdIADAAIAAjdICEAAIAAIggABzRWIgOhiIhVAAIgNBiIiKAAIBuogICoAAIBuIggAAgOEIA1AAIgYivIgEAAgAkyRWIAAjsIgDAAIgjCBIhoAAIgliEIgDAAIAADvIiGAAIAAogICQAAIBQDxIAEAAIBQjxICQAAIAAIggAGiIMIAAmjIDYAAIAABbIhuAAIAABFIBgAAIAABbIhgAAIAABOIBuAAIAABagAEIIMIAAioIgiAAIAACoIhrAAIAAmjIBrAAIAACgIAiAAIAAigIBqAAIAAGjgAhMIMIAAlIIhAAAIAAhbIDqAAIAABbIhBAAIAAFIgAHfA/QgSgIgNgOQgLgOgGgSQgGgRAAgUIBXgIQAAAMABAEQABAGACADIAEAFIAFAAQAIAAADgHQADgHAAgNQAAgQgGgJQgGgJgQgHQgbgLgRgMQgRgMgJgNQgJgMgEgQQgDgRAAgQQAAgWAGgSQAGgTAMgOQANgOATgHQATgIAbAAQAdAAATAJQASAJAMAOQALAOAFASQAEARAAARIhYAJQABgPgCgHQgDgHgIAAQgHAAgDAGQgCAHAAAJIABAKQAAAEAEAFQADAEAHAFQAJAFAKAEQAZAKAQALQAQAMAJANQAJANAEAQQADARAAAUQAAAYgGATQgFAVgMANQgNAPgUAIQgUAHgdAAQgbABgSgJgADYBEIAAleIC1AAIAABNIhcAAIAAA6IBQAAIAABMIhQAAIAABBIBcAAIAABKgABhBEIguhzIgLAUIAABfIhYAAIAAleIBYAAIAABbIAEAAIAwhbIBdAAIhSCQIBZDOgAigBEIgKhAIg3AAIgIBAIhaAAIBHleIBtAAIBHFegAjWhDIAiAAIgPhwIgDAAgAmxBEIAAiYIgCAAIgXBUIhDAAIgYhVIgCAAIAACZIhWAAIAAleIBcAAIA0CbIADAAIAzibIBdAAIAAFegAINlBIhLi+IgEAAIAAC+Ih1AAIAAnMIBqAAIBLC6IADAAIAAi6IB0AAIAAHMgACwlBIgMhUIhLAAIgLBUIh4AAIBenMICUAAIBgHMgABonzIAuAAIgViTIgEAAgAjAlBIAAjJIgDAAIgfBvIhbAAIgfhxIgEAAIAADLIh1AAIAAnMIB+AAIBGDLIAEAAIBGjLIB+AAIAAHMgAHss5IAAkcICSAAIAAA9IhKAAIAAAwIBBAAIAAA9IhBAAIAAA0IBKAAIAAA+gAGEs5IAAhyIgXAAIAAByIhIAAIAAkcIBIAAIAABsIAXAAIAAhsIBIAAIAAEcgACes5IAAjfIgsAAIAAg9ICfAAIAAA9IgsAAIAADfg");

	// Слой_5
	this.instance = new lib.img1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,80);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-80},95).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.8,-111,127.7,222);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.grad();
	this.instance.parent = this;
	this.instance.setTransform(-240.1,-112.1,1.802,1.802,0,0,0,-0.1,-0.1);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},15).to({alpha:0},15).wait(1));

	// Слой_1
	this.instance_1 = new lib.bgImg1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-466.9,-338.9,616.9,639);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(96.7,-206.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.7,-260.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(220));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-13.6,-215.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).to({alpha:1},20).wait(60).to({alpha:0},15).wait(1));

	// bgImg2
	this.instance_3 = new lib.bgImg2_1();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({alpha:1},15).wait(80).to({alpha:0},15).wait(1));

	// bottles
	this.instance_4 = new lib.bottles();
	this.instance_4.parent = this;
	this.instance_4.setTransform(63,150);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},15).wait(79).to({alpha:0},15).to({_off:true},1).wait(110));

	// t2
	this.instance_5 = new lib.t2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-81.2,177.3,0.973,0.973,0,0,0,-0.2,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({alpha:1},15).wait(64).to({alpha:0},15).to({_off:true},1).wait(110));

	// bgImg1
	this.instance_6 = new lib.bgImg1_1();
	this.instance_6.parent = this;
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},15).wait(79).to({alpha:0},15).to({_off:true},1).wait(110));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-466.9,-338.9,616.9,662);


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
p.nominalBounds = new cjs.Rectangle(-166.9,261.1,617.9,662);
// library properties:
lib.properties = {
	id: '6FBB1808566D4518A74DF099D11891D8',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bottles_2.png", id:"bottles_2"},
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
an.compositions['6FBB1808566D4518A74DF099D11891D8'] = {
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