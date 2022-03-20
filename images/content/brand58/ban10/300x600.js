(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
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


(lib.t3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACnBTQgLgEgIgIQgIgIgEgMQgFgMAAgQQAAgOAEgMQAEgKAIgJQAIgIAKgEQALgFALAAQALAAAKAEQAKADAHAJQAHAHAEANQAEALAAARIAAAGIhOAAQABAQAJAGQAIAHAOAAIALgBQAGgBAEgCIAHgEIAFgDIAIAaIgFADIgKAEIgOADQgIACgJgBQgLAAgLgDgACrgIQgHAGgBALIAuAAQgBgGgCgEIgFgIQgDgDgEgBIgHgBQgIAAgIAGgAhkBRQgLgFgHgJQgHgKgEgLQgEgMAAgLQAAgMAEgLQAEgLAHgIQAHgJALgFQALgGAOAAQAPAAAKAGQALAFAHAJQAHAIAEALQAEALAAAMQAAAMgEALQgDALgHAKQgIAJgKAFQgLAFgPAAQgOAAgLgFgAhXgKQgEACgEAGQgEAEgBAGQgCAIAAAHQAAAGACAJQACAGADAFQADAFAFADQAGADAGgBQAHABAFgDQAFgDADgFQAEgFACgGQABgHAAgIQAAgIgBgHQgCgGgEgEQgDgFgFgDQgFgDgHAAQgGAAgGADgAkuBUQgHgDgGgEQgGgFgDgHQgDgIAAgJQAAgIADgIQAEgGAGgFQAGgFAHgDQAIgDAJgCIANgCIAMgBIAAgBQAAgJgFgFQgGgEgJAAIgKABIgIADIgLAHIgLgVIAHgFIAKgEQAFgCAIgCQAHgCAJAAQAJAAAJADQAIACAGAGQAGAGAEAJQADAHAAAMIAABOIgdAAIgBgJQgEAFgJAEQgHACgKAAQgIABgGgDgAkNAdIgKABQgLACgDAFQgEAFAAAGQAAAFAEAEQAFAEAIgBQAGABAFgDQAGgCAEgEIAAgYgAmrBRQgKgFgGgJQgGgIgEgMQgDgMAAgMQAAgLADgMQAEgLAHgIQAHgJALgFQAKgGAPAAQAJAAALADIAAguIAfAAIAACmIgcAAIgBgJQgEAEgIAEQgHADgJAAQgMAAgKgFgAmZgKQgGAEgEAEQgDAEgCAHQgCAHAAAGQAAAHACAIQABAGAEAGQADAEAFAEQAFADAHAAQAGAAAGgDQAGgEACgEIAAg6QgJgDgHgBQgIAAgGADgAopBRQgLgFgHgJQgHgKgEgLQgEgMAAgLQAAgMAEgLQAEgLAHgIQAHgJALgFQAKgGAPAAQAPAAAKAGQALAFAHAJQAHAIAEALQAEALAAAMQAAAMgEALQgEALgHAKQgHAJgLAFQgKAFgPAAQgPAAgKgFgAocgKQgEACgEAGQgEAEgCAGIgBAPIABAPQACAGAEAFQADAFAFADQAGADAGgBQAHABAFgDQAFgDADgFQAEgFABgGQACgHAAgIQAAgIgCgHQgBgGgEgEQgEgFgEgDQgFgDgHAAQgHAAgFADgAJWBUIAAimIAvAAIAUABQAMACAJAEQAKAFAIAJQAIAIAFAJQAFAKACAMQADAKAAAMQAAALgDAMQgCAKgFALQgFAKgIAIQgIAJgKAEQgRAJgWAAgAJ2A1IANAAQASAAALgFQAMgHAFgMQAFgNAAgPQAAgOgFgMQgEgMgLgIQgFgDgJgCQgIgCgIAAIgOAAgAHLBUIAAimIBtAAIAAAeIhNAAIAAAmIBAAAIAAAdIhAAAIAAAmIBSAAIAAAfgAGTBUIgQg0QgBgDgDgDQgCgCgDgBQgEgCgFAAIgYAAIAAA/IggAAIAAimIA6AAQAKAAAKACQAKACAIAGQAIAFAFAKQAFAJAAAQQAAANgFAKQgGAJgMAIQAHADAEAGQAFAIAEANIAMAugAFZgGIAWAAQAdAAAAgYQAAgMgHgFQgHgGgPAAIgWAAgABQBUIAAhFQAAgOgGgGQgGgIgKAAQgHAAgGAEQgHAEgEAEIAABVIgfAAIAAh4IAcAAIACAJQAHgFAJgEQAKgDAIAAQAKAAAIADQAHACAHAHQAGAGADAKQADALAAANIAABHgAjFBUIAAhfIgQAAIAAgZIAQAAIAAgGQAAgMADgIQADgIAFgGQAGgEAHgDQAHgDAJABQALgBAHADIAJACIgEAaIgFgCQgFgBgHAAQgHAAgEAEQgEADAAAKIAAAFIAaAAIAAAZIgaAAIAABfgAqYBUIg+imIAiAAIArB9IAph9IAgAAIg7Cmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_3, new cjs.Rectangle(-72.7,-8.6,145.4,17.3), null);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACsBrIAAgwQgMAAgMgDQgKgEgJgIQgIgIgFgLQgEgMAAgNQAAgNAEgMQAFgLAIgHQAIgIALgEQAMgEAMAAIAAgvIAeAAIAAAvQAPAAALAFQALAFAIAJQAHAHAEALQAEAKAAAMQAAAOgFALQgFALgIAIQgJAIgKAEQgLADgMAAIAAAwgADKAhQAMAAAIgKQAJgHgBgQQABgQgJgHQgHgJgNgBgACWgXQgHAHgBAQQABAQAHAHQAJAKANAAIAAhCQgNABgJAJgAiVBrIAAinIAcAAIABAJQAFgEAGgEQAHgEAKAAQANAAAJAFQAKAFAFAKQAHAIADAMQADALAAAMQAAALgEAMQgDALgIAIQgHAKgMAFQgLAGgQgBQgJAAgHgDIAAAwgAhvghQgEADgEAFIAAA5QAHADAIAAQAIAAAGgDQAGgCAEgGQAEgFACgGQACgGAAgHQAAgGgCgHQgBgGgDgGQgEgFgEgDQgGgEgGAAQgGAAgHAEgAj+A8QgGgDgGgFQgGgEgDgIQgEgHAAgJQAAgIAEgIQAEgHAGgEQAGgEAHgDQAIgDAIgBIAOgCIALgCIAAgCQABgKgGgDQgFgFgJAAIgKABIgIAEIgLAGIgLgVIAGgEIAKgFQAGgDAIgBQAHgCAIAAQAKAAAIADQAJACAGAGQAGAGADAIQADAJAAAMIAABMIgcAAIgBgJQgFAGgIADQgHADgKAAQgIAAgHgCgAjcAEIgKACQgLACgEAFQgDAFAAAFQgBAGAFAEQAFAEAIAAQAGAAAFgDQAGgCADgEIAAgYgAFqA7IAAg/IguAsIAAATIggAAIAAh3IAgAAIAABAIAugsIAAgUIAeAAIAAB3gAA6A7IAAg/IguAsIAAATIgfAAIAAh3IAfAAIAABAIAugsIAAgUIAeAAIAAB3gAljA7IAAhcIgkAAIAAgbIBoAAIAAAbIglAAIAABcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-39.2,-10.7,78.5,21.4), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnKBPQgOgIgJgMQgJgMgFgPQgEgQAAgQQAAgPAEgQQAFgPAJgNQAKgMANgHQANgIATAAQATAAAOAIQANAHAJAMQAKANAEAPQAFAQgBAPQABAQgFAQQgEAPgKAMQgIAMgOAIQgOAIgTAAQgTAAgNgIgAm8g0QgHAFgFAIQgFAIgDALQgCAKAAAKQAAAKACALQADALAFAIQAFAIAHAEQAIAFAKAAQAKAAAHgFQAJgEAEgIQAGgIACgLQADgKAAgLQAAgLgDgJQgCgKgGgJQgEgIgJgFQgIgEgJAAQgJAAgJAEgADpBSQgLgDgIgIQgIgIgEgMQgFgMgBgQQAAgPAFgLQAFgLAHgJQAHgHALgFQAKgEAMAAQALAAAKAEQAJADAIAIQAHAIAEANQAEALAAARIAAAGIhOAAQABAPAJAHQAIAHANAAIAMgBQAGgBAEgCIAHgEIAFgDIAIAZIgGAEIgKAEIgNADQgIABgJAAQgMAAgKgEgADtgIQgHAGgBALIAtAAQAAgHgCgDIgGgIQgDgDgDgBIgHgBQgIAAgIAGgAirBRQgKgFgIgKQgGgJgFgLQgDgMAAgLQAAgMADgLQAFgLAGgIQAIgJAKgGQALgFAOAAQAPAAALAFQALAGAHAJQAHAIAEALQAEAKAAANQAAAMgEALQgEALgHAJQgIAKgKAFQgLAFgPAAQgOAAgLgFgAidgKQgFACgEAGQgDAEgCAGIgCAPIACAOQACAHADAFQADAFAGADQAGACAFAAQAHAAAGgCQAFgDADgFQADgFACgHQACgGAAgIQAAgIgCgHQgCgGgDgEQgEgFgEgDQgGgDgHAAQgGAAgFADgAHSBTIAAh3IAfAAIAAB3gAGUBTIAAgwIgsAAIAAAwIgfAAIAAh3IAfAAIAAAtIAsAAIAAgtIAgAAIAAB3gACNBTIAAhdIgeAAIAAALIgBAeQgBAMgCAIQgDAOgKAJQgJAJgRAAIgNAAIAAgaIAHAAQAGAAADgDQAFgCACgHQACgJAAgmIAAgiIBdAAIAAB3gAhBBTIAAh3IA/AAQASAAAJAIQALAIAAAQQAAAQgNAIQAJAEAFAGQAEAGAAALQAAALgEAGQgEAIgHAEQgGAEgHACIgNABgAgjA7IAfAAQAHAAADgDQAEgDAAgGQAAgNgOAAIgfAAgAgjALIAcAAQAHAAADgFQACgEAAgDQAAgEgCgEQgDgDgHAAIgcAAgAkBBTIAAgwIgtAAIAAAwIgfAAIAAh3IAfAAIAAAtIAtAAIAAgtIAeAAIAAB3gAHTg1QgEgFAAgHQAAgGAEgGQAFgGAJAAQAJAAAGAGQAEAGAAAGQAAAHgEAFQgFAGgKAAQgJAAgFgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-50,-8.7,100,17.4), null);


(lib.t2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE7BKIAAgTIg1AAIAAATIgWAAIAAgnIAIAAQAJgLAEgOQAEgNAAgTIAAgKIBAAAIAABDIAIAAIAAAngAEaAOQgEAMgFAKIAiAAIAAgxIgVAAQAAAPgEAMgAHKA0QgIgEgFgGQgFgGgDgJQgDgJAAgHQAAgJADgHQADgJAFgGQAFgHAIgEQAIgDAKAAQALAAAIADQAHAEAGAHQAFAGADAJQACAGAAAKQAAAIgCAIQgDAJgFAGQgFAGgIAEQgIAFgLAAQgKAAgIgFgAHUgNQgEACgCAEQgDADgBAEIgBALIABAKQABAEADAEQACAEAEACQAEACAEAAQAFAAAEgCQAEgCACgEQADgEABgEQABgFAAgFQAAgGgBgFQgBgEgDgDQgCgEgEgCQgEgCgFAAQgEAAgEACgAF0A1QgIgCgGgFQgGgHgDgIQgEgIAAgMQAAgLADgIQAEgJAFgFQAGgGAHgDQAIgDAIAAQAIAAAHADQAHACAGAGQAFAGADAIQADAJAAANIAAADIg5AAQABAMAGAEQAGAFAKAAIAJAAIAHgDIAFgCIADgCIAGASIgEACIgHADIgKADIgMABQgJAAgHgEgAF3gMQgGAEAAAIIAhAAQAAgEgCgDIgEgGIgFgCIgFgBQgGgBgFAFgAjUA3QgFgCgEgEQgEgEgDgFQgCgEAAgHQAAgHACgFQADgFAEgEIAKgFIAMgDIAKgBIAIgBIAAgBQAAgHgDgDQgEgDgHAAIgHABIgGACIgFADIgDACIgIgPIAFgEIAHgDIAKgDQAFgBAGAAQAHAAAGACQAGABAFAEQAEAFADAGQACAGAAAJIAAA4IgVAAIgBgHQgDAEgGADQgFACgHAAQgGAAgFgCgAjDAPQgHACgDAEQgDADAAAEQAAAEADADQADADAGAAQAFAAAEgCIAHgFIAAgRgAnuA0QgIgEgFgGQgFgGgDgJQgCgIAAgIQAAgKACgGQADgJAFgGQAFgHAIgEQAIgDALAAQAKAAAIADQAIAEAFAHQAGAGACAJQADAHAAAJQAAAHgDAJQgDAJgFAGQgFAGgIAEQgIAFgKAAQgLAAgIgFgAnkgNQgEACgCAEQgDADgBAEQgBAFAAAGQAAAFABAFQABAEADAEQADAEADACQAEACAFAAQAFAAADgCQAEgCADgEQACgEABgEQACgFAAgFQAAgGgCgFQgBgEgCgDIgHgGQgDgCgFAAQgFAAgEACgADPA3IAAhXIAXAAIAABXgAByA3IAAhXIAuAAQANAAAIAGQAHAGAAALQAAALgJAGQAGADAEAEQADAFAAAIQAAAIgDAEQgDAGgFADQgEADgFABIgLACgACIAlIAXAAQAFAAADgDQACgCAAgEQAAgJgKAAIgXAAgACIACIAUAAQAGAAACgDQACgDAAgCQAAgEgCgCQgCgDgGABIgUAAgAAOA3IAAgkIggAAIAAAkIgWAAIAAhXIAWAAIAAAgIAgAAIAAggIAWAAIAABXgAhSA3IAAgwIgiAhIAAAPIgWAAIAAhXIAWAAIAAAuIAiggIAAgOIAWAAIAABXgAkLA3IAAhEIgWAAIAAAJIgBAUIgCAPQgDALgGAGQgHAHgNAAIgJAAIAAgUIAFAAQAEAAADgCQADgBACgGQABgGAAgbIAAgZIBEAAIAABXgAlsA3IAAgkIggAAIAAAkIgXAAIAAhXIAXAAIAAAgIAgAAIAAggIAXAAIAABXgAA2ASIAAgVIArAAIAAAVgADQgtQgDgDAAgGQAAgEADgEQADgEAHAAQAHAAADAEQAEAEAAAEQAAAGgEADQgDAFgHAAQgHAAgDgFgAhxgtIgLgGQgEgEgDgFQgCgGAAgHIAVAAQABAHAEACQAEAEAEAAQAEAAAEgEQAEgCACgHIAVAAQAAAIgDAFQgDAFgFAFQgFADgGACQgHACgGAAQgHAAgHgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_4, new cjs.Rectangle(-51.8,-7.3,103.7,14.7), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkEA+IgKgDIgHgEIgFgEIALgRQAEAFAGADQAGADAIAAQAHAAAEgCQAEgCAAgFQAAgEgDgDQgDgDgJAAIgIAAIAAgQIAIAAQAIAAADgDQADgEAAgDQAAgFgEgCQgEgCgGAAQgGAAgEADQgFADgEAGIgPgJQAFgLAJgFQAJgFANAAQAQAAAJAGQAJAHAAAMQAAAFgDAFQgDAFgHADQAIADAEAFQADAFAAAIQAAAHgDAGQgEAFgFADQgGADgGABQgHACgHAAQgHAAgGgCgAlWA9QgIgDgFgFQgGgGgEgJQgDgIAAgMQAAgLADgIQAEgJAFgFQAGgGAHgDQAHgDAJAAQAIAAAHADQAHACAFAGQAFAGADAJQADAIAAANIAAAEIg4AAQAAALAHAFQAGAEAKAAIAIAAIAHgCIAGgDIADgCIAGASIgEADIgHACIgKADIgMABQgJAAgIgDgAlTgFQgFAFgBAHIAiAAIgCgHIgEgFIgFgDIgFgBQgGAAgGAEgAm3A8QgIgEgGgHQgFgHgCgKQgDgKAAgLQAAgLACgKQACgLAFgJQAFgJAIgGQAJgHALgBIAHAAQAFAAACgCQACgCABgGIASAEIgCALQgCAEgDADQgDADgFABIgJACIgJABQgIABgFAFQgGAGgCALQADgEAHgDQAHgDAHAAQAKAAAHAEQAIAFAEAGQAFAGACAGQACAHAAAHQAAAJgEAIQgDAIgFAGQgGAGgIAEQgIADgJAAQgLAAgHgEgAmzAEQgFAHAAAKQAAAKAFAGQAFAHAJAAQAKAAAFgHQAFgGAAgKQAAgKgFgHQgFgFgKAAQgJAAgFAFgAG7A+IgCgzIgSAzIgLAAIgUgzIgBAzIgVAAIADhXIAXAAIAVA4IAVg4IAWAAIAEBXgAFIA+IAAgwIghAiIAAAOIgXAAIAAhXIAXAAIAAAvIAhghIAAgOIAXAAIAABXgADmA+IAAgkIggAAIAAAkIgXAAIAAhXIAXAAIAAAgIAgAAIAAggIAWAAIAABXgAB0A+IAAhEIgaAAIAAgTIBLAAIAAATIgaAAIAABEgAA5A+IAAhXIAXAAIAABXgAASA+IgCgzIgRAzIgLAAIgUgzIgCAzIgUAAIADhXIAXAAIAVA4IAUg4IAWAAIAEBXgAhgA+IAAhXIAXAAIAABXgAiKA+IAAhEIgXAAIAAAIIAAAVIgCAPQgDALgHAGQgGAHgNAAIgJAAIAAgTIAFAAQAEAAADgCQADgCABgFQACgHAAgbIAAgZIBDAAIAABXgAA6glQgDgEAAgFQAAgFADgEQAEgEAHAAQAGAAAEAEQADAEAAAFQAAAFgDAEQgEAEgGAAQgHAAgEgEgAhfglQgDgEAAgFQAAgFADgEQAEgEAHAAQAGAAAEAEQADAEAAAFQAAAFgDAEQgEAEgGAAQgHAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-46.4,-6.4,92.8,12.8), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGeAsIgKgDQgFgBgDgCIgFgFIALgRQAEAEAGAEQAGAEAJAAQAHAAAEgDQAEgCAAgFQAAgEgDgCQgEgDgJgBIgIAAIAAgPIAJAAQAHAAADgDQADgDAAgFQAAgFgEgBQgEgCgFgBQgHABgEADQgFACgDAIIgQgKQAFgMAJgFQAJgFANAAQAQAAAJAGQAJAHAAAMQAAAFgDAGQgDAFgGADQAIACADAFQADAEAAAJQAAAIgDAFQgDAFgGADQgFAEgHAAQgGACgHAAQgIAAgFgCgABmArQgHgDgGgFQgGgGgEgIQgDgKAAgLQAAgKADgJQADgIAGgGQAGgGAHgCQAHgEAJAAQAIAAAHADQAHACAFAHQAGAFADAJQACAJAAAMIAAAEIg4AAQAAALAHAFQAGAFAKAAIAIgBIAHgCIAGgCIADgDIAGATIgEACIgHACIgKADIgMABQgJAAgIgDgABpgWQgFAEgBAIIAiAAIgCgIIgEgFIgFgDIgFgBQgGAAgGAFgAi7AqQgIgEgFgHQgFgFgDgKQgDgIAAgIQAAgHADgJQADgJAFgGQAFgGAIgEQAIgEALAAQAKAAAIAEQAHAEAGAGQAFAHADAIQADAIAAAIQAAAJgDAHQgDAJgFAGQgFAHgIAEQgIAEgKAAQgLAAgIgEgAixgXQgEACgCADQgDADgBAFIgBAKIABAKQABAGADADQACADAEACQAEACAFAAQAEAAAEgCQAEgCACgDQADgDABgGIABgKIgBgKQgBgFgDgDQgCgDgEgCQgEgCgEAAQgFAAgEACgAlrAsQgFgCgEgDQgEgEgCgFQgDgGAAgGQAAgGADgGQACgEAFgDQAEgDAGgCIAMgEIAJgBIAJgBIAAgBQAAgHgEgDQgEgDgGgBIgIACIgGACIgIAEIgHgPIAEgDIAHgDIAKgDQAGgCAGAAQAHAAAGACQAGACAEAEQAFAEACAGQADAHAAAIIAAA4IgVAAIgBgGQgEAEgFACQgGACgHAAQgFAAgGgCgAlaAFQgHACgDADQgDADAAAEQAAAFAEACQADADAFABQAFgBAEgCQAFgBACgDIAAgSgAm5AsIgKgDIgHgDIgFgFIALgRQADAEAGAEQAGAEAJAAQAHAAAEgDQAEgCAAgFQAAgEgDgCQgDgDgJgBIgIAAIAAgPIAIAAQAIAAADgDQACgDAAgFQAAgFgDgBQgFgCgFgBQgGABgFADQgEACgEAIIgQgKQAGgMAJgFQAJgFANAAQAPAAAKAGQAJAHAAAMQAAAFgDAGQgDAFgHADQAIACAEAFQADAFAAAIQAAAIgDAFQgEAFgFADQgFAEgHAAQgHACgHAAQgHAAgGgCgAEMAsIAAhWIAWAAIAAAVIAVAAQARAAAJAJQAKAKAAANQAAAJgDAFQgDAHgFAEQgGAEgGACQgHACgHAAgAEiAbIARAAQAIAAAEgEQADgFAAgHQAAgGgDgEQgEgEgIAAIgRAAgADhAsIAAgkIggAAIAAAkIgXAAIAAhWIAXAAIAAAgIAgAAIAAggIAXAAIAABWgAAmAsIAAhEIgWAAIAAAKIgBATIgCAQQgDAKgGAHQgGAGgNAAIgJAAIAAgTIAFAAQAEAAADgCQADgCACgFQABgGAAgcIAAgYIBDAAIAABWgAg6AsIAAhEIgfAAIAABEIgXAAIAAhWIBNAAIAABWgAjtAsIgTgcIgTAcIgYAAIAfgrIgfgrIAZAAIATAbIATgbIAXAAIgeAqIAgAsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-46.4,-4.6,92.9,9.2), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACKA6QgIgEgFgHQgFgGgDgJQgDgIAAgIQAAgJADgHQADgJAFgGQAFgGAIgEQAIgEAKAAQALAAAIAEQAIAEAFAGQAFAGADAJQACAHAAAJQAAAIgCAIQgDAJgFAGQgFAHgIAEQgIAEgLAAQgKAAgIgEgACUgIQgEACgDAEQgCACgBAFQgCAFAAAGQAAAFACAFQABAFACAEQADADAEACQADACAFAAQAFAAAEgCQAEgCACgDQADgEABgFQABgFAAgFQAAgGgBgFQgBgFgDgCQgCgEgEgCQgEgCgFAAQgFAAgDACgAkWA8IgKgDIgHgEIgFgEIALgRQAEAFAGADQAGADAIAAQAHAAAEgCQAFgCAAgFQAAgEgEgDQgDgDgJAAIgIAAIAAgQIAIAAQAIAAADgDQADgDAAgEQAAgFgEgCQgEgCgFAAQgHAAgEADQgFADgDAGIgQgJQAFgLAJgFQAJgFANAAQAQAAAJAGQAJAHAAAMQAAAFgDAFQgDAFgHADQAIADAEAFQADAFAAAIQAAAHgDAGQgEAFgFADQgFADgHABQgGACgIAAQgHAAgGgCgAloA7QgHgDgGgFQgGgGgDgJQgEgIAAgMQAAgLADgIQADgIAGgGQAGgGAHgDQAIgDAIAAQAIAAAHADQAHACAFAGQAFAGAEAJQADAIAAANIAAAEIg5AAQABALAGAFQAGAFAKAAIAIgBIAHgCIAGgDIADgCIAGASIgEADIgHACIgKADIgMABQgJAAgIgDgAlkgHQgGAEgBAIIAiAAIgCgHQgCgDgCgCIgFgDIgFgBQgGAAgFAEgAHIA8IgTgcIgTAcIgYAAIAfgrIgfgsIAZAAIATAbIATgbIAYAAIgfAqIAgAtgAFqA8IAAgwIgiAiIAAAOIgWAAIAAhXIAWAAIAAAvIAighIAAgOIAWAAIAABXgADVA8IAAhXIAtAAQAOAAAHAGQAIAGAAALQAAAMgKAFQAHADADAFQAEAEAAAIQAAAIgDAFQgEAFgEADQgEADgGACIgKABgADrAqIAWAAQAGAAACgCQACgDAAgEQAAgJgKAAIgWAAgADrAHIAUAAQAFAAACgDQACgDAAgCQAAgEgCgCQgCgCgFAAIgUAAgABNA8IAAgkIghAAIAAAkIgWAAIAAhXIAWAAIAAAgIAhAAIAAggIAWAAIAABXgAgVA8IAAgaQgLADgNAAQgNAAgIgHQgIgGgCgLIgBgGIAAgiIAWAAIAAAbIABAHIACAFQACACADABIAIABIAKAAQAFgBADgBIAAgpIAWAAIAABXgAhyA8IAAhXIAXAAIAABXgAicA8IAAhEIgWAAIAAAIIgBAVIgCAQQgDAKgHAGQgGAHgNAAIgJAAIAAgTIAFAAQAEAAADgCQADgCABgFQACgHAAgbIAAgZIBEAAIAABXgAnhA8IAAh4IBJAAIAAAWIgxAAIAAAWIASAAQAVAAALAKQALAJAAASQAAASgLALQgLAKgVAAgAnJAnIAQAAQAKAAAFgEQAGgEAAgKQAAgJgFgEQgGgEgKAAIgQAAgAhxgnQgDgEAAgFQAAgFADgEQAEgEAHAAQAHAAADAEQADAEAAAFQAAAFgDAEQgDAEgHAAQgHAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-48.2,-6.2,96.4,12.4), null);


(lib.spitchmark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkDO7QhzgqhihMQhfhMhFhlQgzhJghhQQgDgIADgHQADgIAIgDQAIgDAHADQAIADADAIQAfBMAwBGIAAgBQBDBgBaBIQBdBJBsAnQBFAZBJAKIAHApQhUgKhOgcgAC+OgQAhgKAigOQB8g0BhheQBghfA1h6QA2h+ABiLQABiCgphyQgohthMhYIAAABQgyg6g/gsIABgQIgCgMQgDgQgCgGIgBgDQBWA2BABKQBRBeArB0QArB4gBCJIAAABQAACSg7CGQg4CBhlBkQhmBkiEA3QguATgvANQAFgRAGgcgAqnjvQgHgEgDgHQgDgIADgIQB+kaETjEQBWg+BbgtIAAAAQAtgXAdgLIA0gVQBFgaBHgTQDkg9CnAfQAHABAEAGQAFAFAAAHQAAAHgEAGQgEAFgHACQiaAqhlBdQhPBKgrBnIgJAaQgGgCgKAAQABgEgCgDQgDgEgHAAIgKADIgDACIAMghQAuhvBWhQQBNhIBqgrQiAgEifArIAAAAQhFAShDAZIABAAIg0AVIgBABQgbAKgrAWQhYAshTA7IgBAAQkKC+h5ERQgEAHgHADIgHABQgEAAgFgBgABumEQgHgBgEgFQgFgFgBgHQgCgcAFgtQAEgtALgrIAHgBIAagEIALAAQgOAvgFAyQgDAdAAAWQBbARBRAjIAAABIACALIABAGIADAIIABAEIAFATQhgguhvgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.spitchmark, new cjs.Rectangle(-72.2,-99.2,144.5,198.5), null);


(lib.logoZnak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF4329").s().p("AjPE/QhihjgBiXQgBhjAyhiQAuhbBLg/QBGg6BagiQBagjBXAAQAcAAAMAEQhNAQg0A/Qg2BBABBPIABAJQB9AeA+BMQA8BGAABtQABByhQBYQhXBfiGABIgCAAQh4AAhchbg");
	this.shape.setTransform(-0.1,-2.4,0.24,0.24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmJGKQikijAAjnQAAjmCkijQCjikDmAAQDnAACjCkQCkCjAADmQAADnikCjQijCkjnAAQjmAAijikg");
	this.shape_1.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoZnak, new cjs.Rectangle(-13.4,-13.4,26.8,26.8), null);


(lib.logoTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD4AzQgHgDgFgFQgFgEgDgIQgDgHAAgKQAAgJADgGQADgIAFgEQAEgFAGgDQAHgDAHABQAHgBAGADQAGACAEAFQAEAFADAHQADAHAAALIAAADIgwAAQAAAKAFADQAFAFAJAAIAHgBIAGgCIAFgCIACgCIAGAQIgEACIgGACIgIACIgLABQgHAAgGgCgAD6gEQgEADgBAGIAcAAIgBgGIgEgEIgEgCIgEgCQgFABgFAEgABVAxQgHgDgEgGQgFgFgCgHQgCgGAAgIQAAgHACgHQACgGAFgGQAEgFAHgDQAHgEAIABQAJgBAHAEQAGADAFAFQAEAGADAGQACAGAAAIQAAAIgCAGQgDAIgEAEQgEAGgHADQgHAEgJAAQgIAAgHgEgABdgGQgDACgCADIgDAGIgBAJIABAJIADAHIAFAFQADACAEAAQAEAAADgCQAEgCACgDIADgHIABgJIgBgJIgDgGQgCgDgEgCQgCgBgFAAQgEAAgDABgAgmAzIgIgEIgGgHQgCgEAAgGQAAgGADgEQACgEADgDIAJgFIAKgDIAIgBIAHAAIAAgCQAAgFgDgCQgDgDgGAAIgGABIgFACIgEACIgDACIgGgNIAEgDIAGgDIAIgCIAKgBIALABQAFACAEADQACAEACAFQACAFAAAHIAAAvIgQAAIgBgFQgDADgFACQgFACgFAAIgJgCgAgYASQgGACgDADQgCACAAAEQAAADADADQADACAEAAIAIgCQADgBACgDIAAgPgAhyAyQgGgEgEgFQgEgFgCgHQgCgHAAgIQAAgHACgHQADgGAEgGQAEgFAHgDQAHgEAIABQAGAAAHABIAAgcIATAAIAABlIgSAAIAAgFQgDACgEADQgFACgFAAQgIAAgGgDgAhngFQgDABgDADIgDAGIgBAJIABAJIADAHIAFAFQADACAEAAQAEAAAEgCQADgCACgCIAAgkQgGgCgEAAQgFAAgEACgAjAAxQgHgDgEgGQgFgEgCgIQgCgGAAgIQAAgHACgHQACgHAFgFQAEgFAHgDQAHgEAIABQAJgBAHAEQAGADAFAFQAEAFACAHQADAHAAAHQAAAIgDAGQgCAIgEAEQgFAGgGADQgHAEgJAAQgIAAgHgEgAi4gGIgFAFIgEAGIgBAJIABAJIAEAHIAFAFQADACAEAAQAEAAADgCIAGgFIADgHIABgJIgBgJIgDgGIgGgFQgDgBgEAAQgEAAgDABgADDAzIAAgqQAAgJgEgDQgDgFgGABQgFAAgEACIgGAFIAAAzIgTAAIAAhJIARAAIABAGQAFgDAFgDQAGgBAFAAQAGAAAFABQAFACAEAEQADADACAHQACAGAAAHIAAAsgAAaAzIAAg5IgKAAIAAgQIAKAAIAAgDQAAgIACgFQACgFADgDQADgDAFgBQAEgCAGAAIALABIAFACIgCAQIgDgBIgIgCQgEAAgCADQgDACAAAGIAAADIAQAAIAAAQIgQAAIAAA5gAkFAzIgfhJIAUAAIAUAwIATgwIATAAIgeBJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoTxt, new cjs.Rectangle(-29.3,-5.3,58.6,10.6), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-120,-240,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-120,-240,240,480), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:44});

	// timeline functions:
	this.frame_195 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(195).call(this.frame_195).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AmlRgIAAlBINLAAIAAFBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:-31.5,y:112}).wait(182));

	// logoTxt
	this.instance = new lib.logoTxt();
	this.instance.parent = this;
	this.instance.setTransform(-107.4,207.4,1.162,1.162,0,0,0,-0.1,0.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:-34.7},10,cjs.Ease.get(1)).wait(172));

	// logoZnak
	this.instance_1 = new lib.logoZnak();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,207.1,0.02,0.02,0,0,0,-2.5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regX:-0.1,regY:0.2,scaleX:1.4,scaleY:1.4,x:-88.1,y:207.4},5).to({scaleX:1.16,scaleY:1.16},5,cjs.Ease.get(-1)).wait(182));

	// t3_3
	this.instance_2 = new lib.t3_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-181.3,-153.7,0.8,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).to({x:-49.3},10,cjs.Ease.get(1)).wait(30).to({alpha:0},11).to({_off:true},1).wait(20));

	// t3_2
	this.instance_3 = new lib.t3_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-154.6,-171.8,0.8,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).to({x:-76},10,cjs.Ease.get(1)).wait(35).to({alpha:0},11).to({_off:true},1).wait(20));

	// t3_1
	this.instance_4 = new lib.t3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-163.2,-193.8,0.8,0.8,0,0,0,0,-0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).to({regX:-0.1,x:-66.7},10,cjs.Ease.get(1)).wait(40).to({alpha:0},11).to({_off:true},1).wait(20));

	// t2_4
	this.instance_5 = new lib.t2_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-175.7,7.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({x:-55.7},10,cjs.Ease.get(1)).wait(35).to({alpha:0},10).to({_off:true},1).wait(81));

	// t2_3
	this.instance_6 = new lib.t2_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-170.3,-11);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54).to({_off:false},0).to({x:-61.1},10,cjs.Ease.get(1)).wait(40).to({alpha:0},10).to({_off:true},1).wait(81));

	// t2_2
	this.instance_7 = new lib.t2_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-170.3,-27.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({x:-61.3},10,cjs.Ease.get(1)).wait(45).to({alpha:0},10).to({_off:true},1).wait(81));

	// t2_1
	this.instance_8 = new lib.t2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-172.1,-47.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({x:-58.7},10,cjs.Ease.get(1)).wait(50).to({alpha:0},10).to({_off:true},1).wait(81));

	// spitchmark
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSApQgJgEgDgIQgEgKAEgJIATgoQAFgJAIgCQAJgDAJAEQAJAEADAKQADAJgFAIQgKATgIATQgEAJgIAEIgIABQgFAAgFgCg");
	this.shape.setTransform(-65.9,-66.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVCVQgJgEgDgIQgEgKAEgJQA+iKBch5QAGgIAKgBQAJgCAIAHQAIAFABAKQABAJgGAIQhZB0g7CHQgEAJgJADIgHABQgGAAgFgCg");
	this.shape_1.setTransform(-59.2,-77.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai/EEQgJgEgEgIQgDgKAEgJQB7kVD4jPQAHgHAKABQAJABAHAIQAGAHgBAKQgBAJgHAHQjvDHh3EMQgEAJgJAEIgIABQgFAAgFgCg");
	this.shape_2.setTransform(-48.6,-88.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlBFcQgJgEgDgIQgEgKAEgJQCUlKFCjmQBRg7BUgsQAIgFAKADQAJADAFAIQAEAJgDAJQgDAJgIAGQhSAqhNA5IgBAAQk4DdiOFBQgEAJgJADIgIABQgFAAgFgCg");
	this.shape_3.setTransform(-35.6,-97);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnTGZQgJgEgDgJQgEgJAEgJQCUlMFDjlQBkhJBqg1IAAABQA2gcAigMIA+gZQAzgTA1gQQAJgDAJAEQAIAFADAJQADAJgEAJQgFAIgKADQgzAQgyATIABgBIg+AaIgBAAQgfAMg0AaQhnAzhhBGIgBAAQk4DeiOFAQgEAJgJAEIgIABQgFAAgFgCg");
	this.shape_4.setTransform(-21,-103.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AprG3QgJgEgDgIQgEgKAEgJQCUlLFDjlQBlhJBpg1IAAABQA2gcAigMIA+gaQBQgeBUgWQCGgkBzgJQAJgBAIAHQAHAGABAKQABAJgGAIQgHAHgKABQhvAJiBAiIAAAAQhRAVhPAeIABAAIg+AZIgBABQgfALg0AaQhmA0hhBGIgBAAQk5DdiOFBQgEAJgJADIgHABQgGAAgFgCg");
	this.shape_5.setTransform(-5.8,-106.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ArTG4QgJgEgDgIQgEgKAEgJQCUlLFDjlQBlhJBqg1IAAABQA2gcAhgMIA+gaQBQgeBUgWQELhIDFAlQAHABAFAHQAGAGAAAIQAAAIgEAHQgFAGgIADQgmAKgkANQgIADgJgDQgKgEgDgKQgDgJAEgIIABgCQibgIjEA0IAAAAQhRAVhPAeIABAAIg+AZIgBABQgfALgzAaQhnA0hhBGIgBAAQk5DdiOFBQgEAJgJADIgIACQgFAAgFgDg");
	this.shape_6.setTransform(4.6,-106.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ArTG4QgJgEgDgIQgEgKAEgJQCUlLFDjlQBlhJBqg1IAAABQA2gcAhgMIA+gaQBQgeBUgWQELhIDFAlQAHABAFAHQAGAGAAAIQAAAIgEAHQgFAGgIADQi0Awh3BuQgPANgNAPQgHAHgJAAQgKABgHgGQgHgHgBgKQAAgKAHgHQAOgQAQgOQBbhVB8gyQiWgFi7AyIAAAAQhRAVhPAeIABAAIg+AZIgBABQgfALgzAaQhnA0hhBGIgBAAQk5DdiOFBQgEAJgJADIgIACQgFAAgFgDg");
	this.shape_7.setTransform(4.6,-106.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ArTG4QgJgEgDgIQgEgKAEgJQCUlLFDjlQBlhJBqg1IAAABQA2gcAhgMIA+gaQBQgeBUgWQELhIDFAlQAHABAFAHQAGAGAAAIQAAAIgEAHQgFAGgIADQi0Awh3BuQhdBXgyB5IgLAdQgHgCgMAAQABgFgCgDQgEgEgIAAIgMADIgDACIAOgmQA2iCBlheQBbhVB8gyQiWgFi7AyIAAAAQhRAVhPAeIABAAIg+AZIgBABQgfALgzAaQhnA0hhBGIgBAAQk5DdiOFBQgEAJgJADIgIACQgFAAgFgDgADaBpQgKgCgEgIQgGgIACgJIAFgWIAHgBQAKgDAVgCIAMAAQgFASgEAUQgDAJgHAFQgGAEgGAAIgGgBg");
	this.shape_8.setTransform(4.6,-106.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ArTG4QgJgEgDgIQgEgKAEgJQCUlLFDjlQBlhJBqg1IAAABQA2gcAhgMIA+gaQBQgeBUgWQELhIDFAlQAHABAFAHQAGAGAAAIQAAAIgEAHQgFAGgIADQi0Awh3BuQhdBXgyB5IgLAdQgHgCgMAAQABgFgCgDQgEgEgIAAIgMADIgDACIAOgmQA2iCBlheQBbhVB8gyQiWgFi7AyIAAAAQhRAVhPAeIABAAIg+AZIgBABQgfALgzAaQhnA0hhBGIgBAAQk5DdiOFBQgEAJgJADIgIACQgFAAgFgDgAFXEtQhDgXhJgMQgIgCgFgGQgGgFAAgJQgDggAGg1QAFg1ANgyIAHgBQAKgDAVgCIAMAAQgQA3gFA7QgEAiAAAZQBCANA+AVQAJADAEAJQAFAIgDAKQgDAJgJAEQgFADgFAAIgIgCg");
	this.shape_9.setTransform(4.6,-106.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ArTG4QgJgEgDgIQgEgKAEgJQCUlLFDjlQBlhJBqg1IAAABQA2gcAhgMIA+gaQBQgeBUgWQELhIDFAlQAHABAFAHQAGAGAAAIQAAAIgEAHQgFAGgIADQi0Awh3BuQhdBXgyB5IgLAdQgHgCgMAAQABgFgCgDQgEgEgIAAIgMADIgDACIAOgmQA2iCBlheQBbhVB8gyQiWgFi7AyIAAAAQhRAVhPAeIABAAIg+AZIgBABQgfALgzAaQhnA0hhBGIgBAAQk5DdiOFBQgEAJgJADIgIACQgFAAgFgDgAJOGwQgPgMgQgLIABgSIgCgPQgDgSgEgIIgBgDQAkAWAhAaQAHAGACAKQABAJgGAIQgGAIgKABIgDAAQgIAAgGgFgADLEKQgIgCgFgGQgGgFAAgJQgDggAGg1QAFg1ANgyIAHgBQAKgDAVgCIAMAAQgQA3gFA7QgEAiAAAZQBrAVBgApIgBABIACAMIABAHIAEAKIABAFIAFAWQhvg2iDgWg");
	this.shape_10.setTransform(4.6,-106.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AL0I0QgJgDgEgIQgphPg7hEIAAABQg7hFhKgzIABgSIgBgPQgEgSgDgIIgCgDQBlA/BNBXQA+BIArBUQAEAJgCAJQgDAJgJAFQgGACgFAAIgHgBgAsDE+QgJgEgEgIQgDgKAEgJQCTlKFEjmQBkhJBrg1IAAABQA1gcAigMIA+gaQBQgeBTgWQEMhIDEAlQAIABAFAHQAFAGABAIQAAAIgFAHQgFAGgHADQi1Awh3BuQhdBXgyB5IgLAeQgGgCgMAAQAAgFgCgDQgDgFgIAAIgMAEIgEACIAPgnQA1iCBmheQBahVB9gyQiXgFi6AyIgBAAQhRAVhOAeIABAAIg+AZIAAABQggALgzAaQhnA0hiBGIAAAAQk5DeiOFAQgEAJgJADIgIABQgFAAgFgCgACaCQQgHgCgFgGQgGgFgBgJQgCggAFg1QAFg0ANgyIAHgBQAKgDAVgCIANAAQgQA3gGA6QgEAiAAAZQBsAVBfApIgBABIACAMIACAHIADAKIACAFIAFAWQhwg2iDgWg");
	this.shape_11.setTransform(9.4,-94);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AMWLLQgIgHAAgKQgIhxglhnQgviBhZhnIAAABQg7hFhKgzIABgSIgCgPQgDgSgEgIIgBgDQBlA/BMBXQBfBuAyCKQAmBsAKB4QAAAJgGAIQgGAIgKAAIgCABQgIAAgHgGgAsuCiQgJgEgDgIQgEgKAEgJQCUlKFDjmQBlhJBqg1IAAABQA2gcAigMIA9gaQBQgeBUgWQELhIDFAlQAHABAFAHQAGAGAAAIQAAAIgEAHQgFAGgIADQi0Awh3BuQhdBXgyB5IgLAeQgHgCgMAAQABgFgCgDQgEgFgIAAIgMAEIgDACIAOgnQA2iCBlheQBbhVB8gyQiWgFi7AyIAAAAQhRAVhPAeIABAAIg9AZIgBABQgfALg0AaQhnA0hhBGIgBAAQk5DeiOFAQgEAJgJADIgHACQgGAAgFgDgABwgLQgIgCgFgGQgGgFAAgJQgDggAGg1QAFg1ANgyIAHgBQAKgDAVgCIAMAAQgQA3gFA7QgEAiAAAZQBrAVBgAoIgBABIACAMIABAHIAEAKIABAFIAFAWQhvg2iDgVg");
	this.shape_12.setTransform(13.7,-78.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AMANiQgJgDgFgJQgEgIADgKQAehnAAhuQABiZgwiGQgviBhZhnIAAABQg7hFhKgyIABgSIgCgPQgDgSgEgIIgBgDQBlA/BMBWQBfBuAyCKQAzCNgBChQgBB1gfBtQgDAKgJAEQgGAEgGAAIgGgBgAsvAQQgJgEgDgIQgEgJAEgJQCUlLFDjmQBlhJBqg1IAAABQA2gcAigMIA9gaQBQgeBUgWQELhIDFAlQAHABAFAHQAGAGAAAIQAAAIgEAHQgFAGgIADQi0Awh3BuQhdBXgyB5IgLAeQgHgCgMAAQABgFgCgDQgEgFgIAAIgMAEIgDACIAOgnQA2iCBlheQBbhVB8gyQiWgFi7AyIAAAAQhRAVhPAeIABAAIg9AZIgBABQgfALg0AaQhnA0hhBGIgBAAQk5DeiOFAQgEAJgJADIgIABQgFAAgFgCgABvidQgIgCgFgGQgGgFAAgJQgDggAGg1QAFg1ANgyIAHgBQAKgDAVgCIAMAAQgQA3gFA7QgEAiAAAZQBrAVBgApIgBABIACAMIABAHIAEAKIABAFIAFAWQhvg2iDgWg");
	this.shape_13.setTransform(13.8,-63.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AJ8PfQgIgGgCgKQgBgJAFgIQA0hHAkhTQBAiUABiiQABiZgwiGQgviBhZhmIAAABQg7hFhKgzIABgSIgCgPQgDgSgEgIIgBgDQBlA/BMBXQBfBtAyCKQAzCNgBChIAAAAQgBCshECdQgmBXg2BMQgHAHgJACIgEABQgHAAgGgFgAsvhwQgJgEgDgIQgEgKAEgJQCUlLFDjmQBlhJBqg1IAAABQA2gcAigMIA9gaQBQgeBUgWQELhIDFAlQAHABAFAHQAGAGAAAIQAAAIgEAHQgFAGgIADQi0Awh3BuQhdBXgyB5IgLAeQgHgCgMAAQABgFgCgDQgEgFgIAAIgMAEIgDACIAOgnQA2iCBlheQBbhVB8gyQiWgFi7AyIAAAAQhRAVhPAeIABAAIg9AZIgBABQgfALg0AaQhnA0hhBGIgBAAQk5DeiOFBQgEAJgJADIgIABQgFAAgFgCgABvkeQgIgCgFgGQgGgFAAgJQgDggAGg1QAFg1ANgyIAHgBQAKgDAVgCIAMAAQgQA3gFA7QgEAiAAAZQBrAVBgApIgBABIACAMIABAHIAEAKIABAFIAFAWQhvg2iDgWg");
	this.shape_14.setTransform(13.8,-50.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AGMRTQgKgCgEgJQgFgJADgJQACgJAJgFIAJgFQBNgwBChAQBxhwA+iPQBAiUABijQABiYgwiGQgviBhZhnIAAABQg7hEhKg0IABgSIgCgOQgDgTgEgHIgBgDQBlA+BMBYQBfBuAyCIQAzCNgBChIAAABQgBCshECdQhDCXh2B2QhGBEhSAzIgKAGQgGADgGAAIgGgBgAsvjgQgJgEgDgJQgEgJAEgJQCUlMFDjmQBlhJBqg1IAAABQA2gcAigMIA9gZQBQgfBUgVQELhJDFAlQAHACAFAGQAGAHAAAIQAAAHgEAHQgFAHgIACQi0Axh3BuQhdBWgyB6IgLAdQgHgCgMAAQABgEgCgEQgEgEgIAAIgMADIgDACIAOgmQA2iDBlheQBbhUB8gyQiWgGi7AzIAAAAQhRAVhPAeIABgBIg9AaIgBAAQgfAMg0AaQhnAzhhBGIgBAAQk5DfiOFAQgEAJgJAEIgIABQgFAAgFgCgABvmOQgIgCgFgGQgGgGAAgIQgDghAGg0QAFg1ANgzIAHgBQAKgCAVgCIAMgBQgQA4gFA6QgEAjAAAZQBrAUBgApIgBACIACAMIABAHIAEAJIABAGIAFAWQhvg2iDgWg");
	this.shape_15.setTransform(13.8,-39.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ADMRNQAogMAogQQCRg+ByhuQBxhvA+iQQBAiUABiiQABiZgwiGQgviAhZhnIAAABQg7hFhKgzIABgSIgCgPQgDgSgEgIIgBgDQBlA/BMBXQBfBuAyCJQAzCNgBChIAAAAQgBCshECdQhDCYh2B2Qh4B0iaBBQg2AWg4AQQAGgUAGghgAsvkOQgJgEgDgIQgEgKAEgJQCUlLFDjmQBlhJBqg1IAAABQA2gcAigMIA9gaQBQgeBUgWQELhIDFAlQAHABAFAHQAGAGAAAIQAAAIgEAHQgFAGgIADQi0Awh3BuQhdBXgyB5IgLAeQgHgCgMAAQABgFgCgDQgEgFgIAAIgMAEIgDACIAOgnQA2iCBlheQBbhVB8gyQiWgFi7AyIAAAAQhRAVhPAeIABAAIg9AZIgBABQgfALg0AaQhnA0hhBGIgBAAQk5DeiOFBQgEAJgJADIgIABQgFAAgFgCgABvm8QgIgCgFgGQgGgFAAgJQgDggAGg1QAFg1ANgyIAHgBQAKgDAVgCIAMAAQgQA3gFA7QgEAiAAAZQBrAVBgApIgBABIACAMIABAHIAEAKIABAFIAFAWQhvg2iDgWg");
	this.shape_16.setTransform(13.8,-35.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjUSBQgKgCgFgIQgFgJACgJQACgKAIgFQAIgFAKACQAeAGAgAEQACARAFAfQgogEgngIgADMRCQAogNAogQQCRg9ByhuQBxhwA+iPQBAiUABijQABiYgwiGQgviBhZhnIAAABQg7hEhKg0IABgSIgCgOQgDgTgEgHIgBgDQBlA+BMBYQBfBuAyCIQAzCNgBChIAAABQgBCshECdQhDCXh2B2Qh4B1iaBAQg2AXg4APQAGgUAGgggAsvkZQgJgEgDgJQgEgJAEgJQCUlMFDjmQBlhJBqg1IAAABQA2gcAigMIA9gZQBQgfBUgVQELhJDFAlQAHACAFAGQAGAHAAAIQAAAHgEAHQgFAHgIACQi0Axh3BuQhdBWgyB6IgLAdQgHgCgMAAQABgEgCgEQgEgEgIAAIgMADIgDACIAOgmQA2iDBlheQBbhUB8gyQiWgGi7AzIAAAAQhRAVhPAeIABgBIg9AaIgBAAQgfAMg0AaQhnAzhhBGIgBAAQk5DfiOFAQgEAJgJAEIgIABQgFAAgFgCgABvnHQgIgCgFgGQgGgGAAgIQgDghAGg0QAFg1ANgzIAHgBQAKgCAVgCIAMgBQgQA4gFA6QgEAjAAAZQBrAUBgApIgBACIACAMIABAHIAEAJIABAGIAFAWQhvg2iDgWg");
	this.shape_17.setTransform(13.8,-34);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AlDRhQhdgihSg1QgJgFgCgKQgCgKAFgHQAFgIAKgDQAKgCAIAGQBOAyBYAgQBRAdBWALQACARAFAfQhhgLhdghgADMRCQAogNAogQQCRg9ByhuQBxhwA+iPQBAiUABijQABiYgwiGQgviBhZhnIAAABQg7hEhKg0IABgSIgCgOQgDgTgEgHIgBgDQBlA+BMBYQBfBuAyCIQAzCNgBChIAAABQgBCshECdQhDCXh2B2Qh4B1iaBAQg2AXg4APQAGgUAGgggAsvkZQgJgEgDgJQgEgJAEgJQCUlMFDjmQBlhJBqg1IAAABQA2gcAigMIA9gZQBQgfBUgVQELhJDFAlQAHACAFAGQAGAHAAAIQAAAHgEAHQgFAHgIACQi0Axh3BuQhdBWgyB6IgLAdQgHgCgMAAQABgEgCgEQgEgEgIAAIgMADIgDACIAOgmQA2iDBlheQBbhUB8gyQiWgGi7AzIAAAAQhRAVhPAeIABgBIg9AaIgBAAQgfAMg0AaQhnAzhhBGIgBAAQk5DfiOFAQgEAJgJAEIgIABQgFAAgFgCgABvnHQgIgCgFgGQgGgGAAgIQgDghAGg0QAFg1ANgzIAHgBQAKgCAVgCIAMgBQgQA4gFA6QgEAjAAAZQBrAUBgApIgBACIACAMIABAHIAEAJIABAGIAFAWQhvg2iDgWg");
	this.shape_18.setTransform(13.8,-34);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AlDRhQiGgxhzhaQhhhNhLhkQgGgIACgJQABgKAIgGQAHgGAKACQAKABAGAIQBHBfBcBJQBtBWB/AuQBRAdBWALQACARAFAfQhhgLhdghgADMRCQAogNAogQQCRg9ByhuQBxhwA+iPQBAiUABijQABiYgwiGQgviBhZhnIAAABQg7hEhKg0IABgSIgCgOQgDgTgEgHIgBgDQBlA+BMBYQBfBuAyCIQAzCNgBChIAAABQgBCshECdQhDCXh2B2Qh4B1iaBAQg2AXg4APQAGgUAGgggAsvkZQgJgEgDgJQgEgJAEgJQCUlMFDjmQBlhJBqg1IAAABQA2gcAigMIA9gZQBQgfBUgVQELhJDFAlQAHACAFAGQAGAHAAAIQAAAHgEAHQgFAHgIACQi0Axh3BuQhdBWgyB6IgLAdQgHgCgMAAQABgEgCgEQgEgEgIAAIgMADIgDACIAOgmQA2iDBlheQBbhUB8gyQiWgGi7AzIAAAAQhRAVhPAeIABgBIg9AaIgBAAQgfAMg0AaQhnAzhhBGIgBAAQk5DfiOFAQgEAJgJAEIgIABQgFAAgFgCgABvnHQgIgCgFgGQgGgGAAgIQgDghAGg0QAFg1ANgzIAHgBQAKgCAVgCIAMgBQgQA4gFA6QgEAjAAAZQBrAUBgApIgBACIACAMIABAHIAEAJIABAGIAFAWQhvg2iDgWg");
	this.shape_19.setTransform(13.8,-34);

	this.instance_9 = new lib.spitchmark();
	this.instance_9.parent = this;
	this.instance_9.setTransform(11.7,-33.7,1.174,1.174);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_9}]},10).to({state:[]},1).to({state:[{t:this.shape}]},60).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).wait(60).to({alpha:0},10).to({_off:true},1).wait(80).to({_off:false,alpha:1},0).wait(1));

	// bg
	this.instance_10 = new lib.bgImg_1();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(196));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-240,240,480);


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
	this.instance.setTransform(150,299.8,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: 'BAEF0664A2014602849240691387A0BB',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"}
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
an.compositions['BAEF0664A2014602849240691387A0BB'] = {
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