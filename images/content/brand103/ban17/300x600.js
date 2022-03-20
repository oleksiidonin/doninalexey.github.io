(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,362);


(lib.chip1 = function() {
	this.initialize(img.chip1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,74);


(lib.chip2 = function() {
	this.initialize(img.chip2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,78);


(lib.chip3 = function() {
	this.initialize(img.chip3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,68);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,70);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,278);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,286);// helper functions:

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
	this.shape.graphics.f("#ED1C24").s().p("ANHBBIgEgBIABgLIADABIAEABQAFgBACgDQADgCACgGIAEgLIgbhAIAOAAIAUAzIAAAAIASgzIAOAAIgdBIIgEAKIgFAIQgCAEgEABQgEACgGAAIgFAAgACRBBIAAhhIAMAAIAAAKIABAAQADgFAHgEQAGgCAHAAQAHAAAGACQAHADAEAEQAEAFACAGQADAHAAAGQAAAHgDAGQgCAGgEAFQgFAEgGADQgFADgIAAQgHAAgGgDQgGgDgEgGIAAArgACqgWQgEADgDADQgDADgCAEQgCAFAAAEQAAAFACADQACAFADADQADADAEACQAEACAFAAQAFAAAEgCQAFgCACgDIAFgIIABgIIgBgJIgFgHQgDgDgEgCQgEgCgFAAIgJABgAreBBIgFgBIABgLIAEABIADABQAFgBADgDQADgCABgGIAFgLIgchAIAOAAIAUAzIABAAIASgzIANAAIgcBIIgEAKIgFAIQgDAEgEABQgDACgGAAIgFAAgAFpAzIAAgTIg4AAIAAhAIANAAIAAA2IAfAAIAAg2IAMAAIAAA2IALAAIAAAdgApgAzIAAgTIg3AAIAAATIgLAAIAAgdIAKAAIAXg2IANAAIAVA2IAKAAIAAAdgApsAWIgPgnIgEAIIgMAfIAfAAgAK/AgIgIgCIgFgHQgCgEAAgFQAAgHAEgFQADgDAHgDIAOgCIAQgBIAAgCQAAgIgEgDQgEgEgHAAQgGAAgFACQgFACgDAEIgHgIQAFgEAHgDQAHgDAIAAQAGAAAEACQAFABAEADQADADACAFQACAFAAAFIABAqIgLAAIgBgEIAAgFQgEAFgGADQgFADgIAAIgHgCgALPABIgJACQgEABgDACQgDADAAAFIABAFIADADIAFABIAFABQAEAAAEgBIAGgEIADgGIACgIIAAgEgAIhAfQgHgCgEgFQgFgEgCgGQgDgHAAgHQAAgHADgGQACgHAFgEQAEgEAHgDQAGgDAIAAQAHAAAGADQAHADAEAFIgJAIQgCgEgEgCQgEgCgFAAQgFAAgEACQgEACgDADQgDACgBAFQgCAFAAAEIACAJQABAEADADQADADAEACQAEACAFAAQAGAAADgCQAEgCADgEIAIAIQgEAFgGADQgGADgIAAQgIAAgGgDgADyAgIgHgCQgDgDgCgEQgDgEAAgFQAAgHAEgFQAEgDAGgDIAPgCIAQgBIAAgCQAAgIgEgDQgEgEgIAAQgFAAgFACQgFACgDAEIgHgIQAEgEAHgDQAHgDAIAAQAGAAAFACQAFABADADQAEADACAFQACAFAAAFIAAAjIABAHIgMAAIAAgEIAAgFIgBAAQgDAFgGADQgFADgIAAIgIgCgAEDABIgJACQgFABgCACQgDADAAAFIABAFIADADIAFABIAEABQAFAAADgBIAGgEIAEgGIABgIIAAgEIgCAAIgLAAgAAhAfQgGgCgFgFQgEgEgDgGQgDgGAAgIQAAgHADgGQADgHAEgEQAEgEAHgDQAGgDAIAAQAHAAAHADQAGADAEAFIgIAIIgHgGQgEgCgFAAQgFAAgEACQgEACgDADQgDADgBAEQgCAFAAAEIACAJQABAEADADQADADAEACQAEACAFAAQAGAAAEgCQAEgCACgEIAJAIQgEAFgHADQgGADgIAAQgHAAgHgDgAgxAfQgGgCgFgEQgEgEgDgGQgDgGAAgGIgMAAIAAAdIgNAAIAAhAIANAAIAAAaIAMAAQABgHADgFQADgFAFgEQAEgCAGgDQAGgCAGAAQAIAAAGADQAHADAEAEQAFAFADAGQACAGAAAHQAAAHgCAHQgDAGgFAEQgEAFgHACQgGADgIAAQgHAAgGgDgAgtgVQgEACgDADQgDADgBAEQgCAFAAAEQAAAFACADQABAFADADQADADAEACQAEACAFAAQAFAAAFgCIAHgFIAEgIIABgIQAAgEgBgFQgCgEgDgDQgDgDgDgCQgFgCgFAAQgFAAgEACgAo4AfQgHgCgEgFQgFgEgDgGQgDgHAAgHQAAgHADgGQADgGAFgFQAEgEAHgDQAGgDAHAAQAIAAAGADQAHADAEAEQAFAFADAGQACAGAAAHQAAAHgCAHQgDAFgFAFQgFAFgGACQgGADgIAAQgHAAgGgDgAo0gVQgEACgDADQgDADgBAEQgCAFAAAEIACAIQABAFADADQADADAEACQAEACAFAAQAFAAAFgCIAHgFQADgDABgFQABgDAAgFQAAgEgBgFQgCgEgCgDQgDgDgEgCQgFgCgFAAQgFAAgEACgAOPAfQgDgDAAgEQAAgEADgDQACgCAEAAQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAQgEAAgCgCgAMqAgQgBgIgDgFQgDgGgEgDQgEgEgFgBIgMgCIAAAdIgMAAIAAhAIAMAAIAAAaIAJABIAVgbIAOAAIgYAeQAGACAEADQAEADADAEIAFAKIAFAMgAKSAgIAAguIgXAcIgEAAIgWgbIAAAtIgNAAIAAhAIALAAIAaAfIAagfIALAAIAABAgAHMAgIAAgaIgJAAQgJAAgGAHQgFAGgBANIgOAAQABgMAFgHQAFgJAIgCIAAAAQgHgBgEgDQgFgEAAgHQAAgFACgEIAGgGQADgCAFgBIALgBIAbAAIAABAgAG0gUIgDADIgBAFIABAFIAEADIAFAAIAGABIAMAAIAAgSIgMAAIgGAAIgGABgAGCAgIAAhAIAMAAIAABAgABhAgIAAg2IgWAAIAAgKIA5AAIAAAKIgXAAIAAA2gAh5AgIgUgxIgUAxIgNAAIAbhAIANAAIAaBAgAjJAgIAAhAIANAAIAABAgAkNAgIAAgaIgJAAQgJAAgGAHQgFAGgBANIgOAAQABgMAFgHQAFgJAIgCIAAAAQgHgBgEgDQgFgEAAgHQAAgFACgEQACgDAEgDQADgCAFgBIALgBIAbAAIAABAgAklgUIgDADQgBACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAEADIAFAAIAGABIAMAAIAAgSIgMAAIgHAAIgFABgAlXAgIAAgdIggAAIAAAdIgNAAIAAhAIANAAIAAAaIAgAAIAAgaIANAAIAABAgAmjAgQgCgIgDgFQgCgGgEgDQgEgEgFgBIgLgCIAAAdIgMAAIAAgdIgLACQgFABgEAEQgDADgDAGQgDAFgCAIIgOAAQAEgOAGgIQAFgJALgDIgXgeIAOAAIAUAbIAIgBIAAgaIAMAAIAAAaIAJABIATgbIAOAAIgWAeQAKADAGAJQAGAIADAOgAr5AgIgcgoIgbAoIgQAAIAjgyIggguIARAAIAYAlIAYglIAQAAIggAuIAjAygAuDgeIgLAQIgJgHIALgPIgRgFIADgLIASAGIAAgSIALAAIAAASIARgGIADALIgRAFIALAPIgIAHgAGCgyQgCgCAAgEQAAgEACgBQADgDADAAQADAAADACQACACAAAEQAAADgCADQgDACgDAAQgDAAgDgCgAjIgyQgDgCAAgEQAAgDADgCQACgDAEAAQADAAACACQADACAAAEQAAADgDADQgCACgDAAQgEAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-92.6,-6.5,185.3,13), null);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1A24").s().p("AJ1B7QgKgCgHgDIgKgIIgHgHIAjgpIALALQAHAEAJAAQAHABAFgDQAFgDAFgFIhUi6IBAAAIAyB3IAvh3IA+AAIhRC7QgFALgHAMQgHAKgKAJQgJAHgNAEQgOAFgRAAQgRAAgJgDgApIB1QgYgLgRgPQgRgRgKgXQgJgYAAgbQAAgdAJgXQALgYAQgPQAQgPAZgKQAYgJAcAAQAcAAAXAJQAaAKAQAPQAQAPALAYQAJAXAAAdQAAAbgJAYQgKAXgRARQgRAQgZAKQgXAJgcAAQgcAAgYgJgAowhDQgNAGgIAJQgJAKgFANQgFAOAAAPQAAAQAFANQAFANAJAKQAIAKANAGQANAFAPABQAPgBAMgFQANgFAJgLQAJgKAFgNQAFgNAAgQQAAgQgFgNQgEgMgKgLQgIgJgOgGQgMgGgPAAQgOAAgOAGgANdB5QgFgCgFgFQgEgEgDgHQgDgFAAgHQAAgGADgGQACgGAFgFQADgDAHgEQAGgCAHAAQAGAAAGACQAHAEAEADQAEAEADAGQADAHAAAGQAAAGgDAGQgDAIgEACQgEAEgHAEQgGACgGAAQgGAAgHgCgAIVB4QgGgegHgRQgHgUgLgNQgLgMgQgHQgPgGgVABIAABoIg5AAIAAjvIA5AAIAABYIAJAAIAJAAIBJhYIA+AAIhPBlQAPAIANALQAMALALARQAKASAIAVQAGASAHAigAEUB4IAAhkIhcAAIAABkIg6AAIAAjvIA6AAIAABbIBcAAIAAhbIA6AAIAADvgAAVB4IAAidIgBAAIhiCdIhBAAIAAjvIA5AAIAACfIABAAIBiifIBBAAIAADvgAltB4IAAjvIBeAAQAOAAAPAEQAOADAMAGQALAIAIALQAHAMAAASQAAAUgLANQgLANgRAGIAAABQAKABAJAEQAIAEAIAHQAGAIAEAJQAEAIAAANQAAATgIAOQgHANgNAIQgOAJgPADQgQADgSABgAk2BJIAgAAIAOgCQAHAAAGgDQAGgDAEgGQAEgHAAgIQAAgOgMgGQgJgGgUABIggAAgAk2gXIAfAAQARgBAIgGQAJgGAAgNQAAgMgJgGQgKgGgSAAIgcAAgAr0B4IAAhkIhdAAIAABkIg5AAIAAjvIA5AAIAABbIBdAAIAAhbIA5AAIAADvgANOAoIAAifIA4AAIAACfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-90.7,-12.6,181.4,25.2), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1A24").s().p("AFLCDQgJgDgEgDQgHgDgCgDIgGgGIAegiIAJAJQAGAEAHAAQAGAAAEgCQAEgCAEgFIhFiaIA1AAIApBiIAohiIAzAAIhDCbQgFAKgGAJQgFAIgIAIQgJAGgKAEQgKAEgQgBQgOAAgIgBgAgsB8QgUgHgOgOQgOgOgIgTQgIgUAAgYQAAgXAIgSQAIgUAOgOQAPgNATgHQAVgHAWAAQAXAAATAHQATAGAQAOQAOAOAIAUQAIATAAAWQAAAWgIAWQgIATgOAOQgPAPgUAGQgTAJgXgBQgXABgUgJgAgYgdQgIAFgJAIQgHAHgFAMQgEAMAAALQAAAOAEALQAEALAIAJQAHAIAKAFQALAFAMgBQAMABAKgFQAMgGAGgHQAIgJAEgLQAEgLAAgOQAAgMgEgLQgEgKgIgJQgIgIgKgFQgKgEgMAAQgMAAgLAEgApxB8QgUgHgOgOQgOgOgIgTQgIgVAAgWQAAgXAIgTQAJgTAOgOQAPgPATgGQATgHAXAAQAVAAAUAHQAVAIAMAOIggAhQgHgJgLgGQgLgEgLAAQgNAAgKAFQgLAEgHAJQgIAIgEAKQgEAKAAAOQAAAOAEALQAEALAIAIQAHAIAKAFQALAEAMAAQAPAAAKgFQALgGAGgJIAhAgQgOAPgSAIQgUAKgZgBQgXABgTgJgAKDB/IAAiBIgBAAIhQCBIg4AAIAAjGIAwAAIgBCBIABAAIBQiBIA4AAIAADGgACJB/IAAjGICOAAIAAAoIheAAIAAAgIAbAAQAOAAAQADQAPAEAKAHQAKAHAGAMQAGAMAAARQAAARgGANQgHAMgKAIQgLAHgOADQgOAEgQAAgAC5BWIAWAAQAHABAGgCQAFgBAGgDQAFgCADgFQACgFAAgFQAAgGgCgGQgDgDgFgDIgKgEIgkgBgAkWB/IAAjGIBJAAQAQAAAOADQAQAEAJAGQALAJAFAKQAGAMAAARQAAARgGAMQgGALgLAIQgOAIgLADQgOADgQAAIgYAAIAABLgAjmAOIAUAAIANgBQAFgBAGgEQAGgDACgEQADgDAAgIQAAgGgDgFQgDgFgFgCQgEgCgGgBIgigBgAluB/IAAieIhIAAIAACeIgwAAIAAjGICoAAIAADGgAJEhZQgIgCgIgEQgIgFgFgGQgEgEgEgIIAYgNQAFAIAIAFQAJAGAJAAQAKAAAIgGQAJgFAEgIIAYANQgCAHgFAFQgHAHgGAEQgKAEgGACQgIACgLABQgLgBgHgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-69,-13.2,138.1,26.5), null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1B24").s().p("AAAALIgJAOIgLgIIAKgNIgQgFIAFgMIAPAFIAAgQIANAAIAAAQIAQgEIAEAMIgQAEIAKANIgMAIg");
	this.shape.setTransform(74.3,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC1B24").s().p("AIEBiIgIgCIADgbIALABQAHABAEgEQADgDACgGIAEgJIgqhhIAkAAIAXA/IAAAAIAUg/IAiAAIgsByIgHANQgEAIgEADQgFAEgHACQgGACgKAAIgKAAgABNBOIAAgcIhKAAIAAAcIgaAAIAAg1IAQAAIAbhJIAoAAIAaBJIARAAIAAA1gAA1AZIgLglIgEAAIgMAlIAbAAgAENAyQgJgEgIgGQgIgIgEgJQgFgKAAgMQAAgLAFgLQAEgJAIgHQAIgHAJgEQAJgDAMAAQAMAAAKADQAKAEAHAHQAIAHAEAJQAEALAAALQAAAMgEAKQgEAJgIAIQgHAGgKAEQgLAEgLAAQgKAAgLgEgAEYgWQgFADgCADQgDADgBAFQgCAEAAAFQAAAFACAEQACAGACACQAEAEADACQAFACAGAAQAFAAAFgCQADgCAEgEQADgCABgGQACgEAAgFQAAgFgCgEIgEgIQgDgDgFgDQgEgCgGAAQgFAAgFACgAkDAyQgKgDgHgHQgIgIgEgJQgEgKAAgMQAAgLAEgKQAEgKAIgHQAHgHAKgEQAKgDAMAAIALABIAKACIAJAFIAHAFIgTAXQgCgEgGgDQgEgBgFAAQgGAAgEABQgEADgDADIgFAIQgBAEAAAFQAAAFABAFQACAFADADIAHAFIAKACQAEAAAGgCQAFgCADgDIASAWQgHAGgJADQgJAEgMAAQgJAAgNgEgAnBAyQgKgEgHgGQgIgIgEgJQgEgLAAgLQAAgLAEgLQAEgJAIgHQAHgHAKgEQAJgDAMAAQANAAAJADQAKAEAHAHQAIAHAEAJQAEAJAAANQAAANgEAJQgEAJgIAIQgHAGgKAEQgLAEgLAAQgKAAgLgEgAm2gWQgFADgCADIgEAIQgCAEAAAFQAAAFACAEQACAGACACQADAEAFACQAEACAGAAQAFAAAFgCQAEgCADgEQADgCACgGQABgEAAgFQAAgFgBgEIgFgIQgDgDgEgDQgFgCgGAAQgFAAgFACgAC2AzIAAgmIghAAIAAAmIggAAIAAhjIAgAAIAAAlIAhAAIAAglIAhAAIAABjgAHHAyIAAg1IgZAjIgGAAIgagiIAAA0IggAAIAAhiIAcAAIAhApIAggpIAdAAIAABigAhFAyIAAhiIAgAAIAABigAh4AyIgVgeIgWAeIgmAAIAogzIgkgvIAmAAIASAaIATgaIAlAAIgkAvIAnAzgAoXAyIAAhIIggAAIAABIIghAAIAAhiIBhAAIAABigAlmAMIAAgZIAzAAIAAAZgAKWgkIAPg2IAcAAIgSA2gAJtgkIAOg2IAdAAIgSA2gAqXgkIASg2IAZAAIgOA2gArAgkIASg2IAZAAIgPA2gAhDhDQgFgFAAgHQAAgFACgCIADgHIAGgDIAIgBIAHABIAGADQACACACAFQABACAAAFIgBAGIgEAGIgGAEIgHACQgHAAgHgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-70.5,-9.8,147.5,19.7), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1C24").s().p("AEpBiIAAiSIAfAAIAAAMIAAAAQAEgFAJgFQAJgFAKABQALAAAJADQAJAGAFAGQAGAHADAJQAEAKAAAKQAAAKgDAKQgEAKgGAHQgEAGgKAFQgJAFgLgBQgKAAgHgDQgJgEgEgGIgBAAIAAA6gAFWgWIgHAGQgDADgCAGIgCAIQABAFABAEQACAGADADIAHAFQAFACAFAAQAGAAAFgCIAHgFQACgEACgFQACgEgBgFQABgFgCgEIgEgIIgHgGQgFgCgGAAQgFAAgFACgAB7BOIAAgcIhKAAIAAAcIgaAAIAAg1IAQAAIAchJIAnAAIAaBJIARAAIAAA1gABkAZIgMglIgDAAIgMAlIAbAAgAi4AzQgEgBgHgDQgFgFgDgFQgEgGAAgJQAAgKAGgIQAHgGAIgCQAIgEAMgCIAWgBIAAgCQAAgHgEgDQgFgEgJAAQgHABgGADQgHACgDAFIgRgSQAIgIAMgFQANgEALAAQANAAAIADQAIADAGAGQAGAIACAJQACALABAMIAAAxIgeAAIAAgKIgBAAQgDAHgJACQgGAEgKAAIgNgCgAidAIIgKACQgFABgCADQgDADAAAEQAAABAAAAQAAABAAABQABAAAAABQAAAAABAAIACAEIAFACIAFAAQALAAAEgGQAFgFABgJIAAgEgAGsAzIAAhjIAgAAIAABjgADvAzIAAg5IgsA5IggAAIAAhjIAgAAIAAA4IAsg4IAhAAIAABjgAkVAzIAAhJIgcAAIAAgaIBXAAIAAAaIgbAAIAABJgAnOAzIAAhjIA3AAQATAAAKAIQALAGAAANQAAAGgCADIgFAHIgHADIgJACIALACQAEABAEADQAEADADAFQABADAAAHQABAMgLAHQgMAIgTAAgAmsAdIATAAIAIgBQACgBACgCQACgCAAgDQAAgEgCgCQgCgCgCAAIgIgCIgTAAgAmsgIIATgBIAEgBIAEgCIABgEQABgHgGgBIgLgBIgMAAgAgXAyIAAglIghAAIAAAlIggAAIAAhiIAgAAIAAAlIAhAAIAAglIAgAAIAABigAGuhDQgEgFAAgHIABgHIADgHIAGgDIAIgBQAEAAADABQADAAADADIAEAGIACAIIgCAGIgEAGIgGAEQgDACgEAAQgIAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-46.2,-9.8,92.5,19.7), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1B24").s().p("AnxBFQgNgFgLgKQgKgKgGgOQgFgOAAgQQAAgQAFgOQAGgOALgJQAKgKAOgGQANgEARgBQAQABANAEQAOAFAKALIgXAXQgGgHgHgDQgIgCgIAAQgJAAgHACQgJAFgEAFQgFAFgDAJQgDAHAAAJQAAAJADAJQADAIAFAFQAFAFAHAEQAIADAJAAQALAAAGgEQAHgEAFgGIAYAWQgJALgOAGQgOAHgSgBQgRAAgNgFgAHTBGQgJgDgIgIQgHgGgFgLQgFgJAAgNQAAgMAFgIQAEgKAIgHQAIgHAJgDQAJgEAMAAQAMAAAJAEQAKADAIAHQAHAHAFAKQAEAIAAAMQAAANgEAJQgFALgHAGQgIAIgKADQgKAEgLAAQgKAAgLgEgAHegCQgFACgCADIgFAIQgBAFAAAEQAAAFABAFQACAFADADQADAEAEACQAFACAFABQAGgBAFgCIAHgGQADgDABgFQACgFAAgFQAAgEgCgFIgEgIQgDgDgFgCQgFgCgFAAQgGAAgEACgAFvBHQgJgEgIgHQgHgHgFgKQgFgKAAgMQAAgMAFgJQAEgKAIgGQAHgIAKgDQAJgEANAAIAKABIALADIAJAEIAHAGIgTAUQgDgDgFgCQgEgCgGAAQgFAAgEACQgFACgCADIgFAIQgBAFAAAFIABAKIAFAIQADAEAEACIAKACIAKgCQAGgEACgCIASAWQgIAHgIADQgJADgMAAQgNAAgJgDgAjrBIQgFgCgGgEQgGgEgDgFQgDgGAAgJQAAgKAGgIQAGgGAJgEQAIgDAMgBIAWgBIAAgDQAAgGgFgDQgFgDgIAAQgHAAgGACQgHADgEAEIgQgSQAHgHANgFQANgEALAAQANAAAIADQAIACAGAIQAFAFADALQACAKAAAMIAAAzIgeAAIAAgLIAAAAQgEAGgIADQgHAEgJAAIgNgBgAjRAcIgJACQgFABgCADQgDACAAAFQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQABABAAAAQABABAAAAIAFABIAFABQAKAAAFgFQAFgGAAgKIAAgCIgEAAIgLAAgAEeBHIAAgeIgGAAIgIABQgEABgDADQgCACgDAHQgDAHAAAJIgkAAQABgKAEgIQADgJAFgFQAEgFAEgCIAIgDIAAgBIgJgCQgDgCgEgEIgFgJQgCgEAAgIQAAgJAEgFQADgEAGgEIANgEIBCgBIAABjgAEKAAQgDAAgCABIgCACIgBAFQAAAFAEABQAEABAJAAIALAAIAAgPIgLAAIgJAAgAB0BHIAAg2IgaAjIgFAAIgagjIAAA2IghAAIAAhjIAdAAIAhAnIAggnIAdAAIAABjgAhMBHQgCgMgDgFQgCgHgFgFQgDgEgFgCQgGgDgFgBIAAAnIghAAIAAhjIAhAAIAAAkIAIABIAXglIAkAAIgfAwQAMAHAIAOQAHAOAEAQgAk2BHIAAg2IgaAjIgFAAIgagjIAAA2IghAAIAAhjIAdAAIAhAnIAggnIAdAAIAABjgACpgPIAPg3IAcAAIgSA3g");
	this.shape.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-54.3,-7.7,108.7,15), null);


(lib.rounds_blue_mc_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDE02").s().p("AkiKwIAAAAQiGg4hnhoQhnhng5iGQg7iMAAiXQAAiWA7iMIAAAAQA5iGBnhnQBnhnCGg5IAAAAQCMg7CWAAQCXAACMA7QCGA5BnBnQBoBnA4CGIAAAAQA7CMAACWQAACXg7CMQg4CGhoBnQhnBoiGA4QiMA7iXAAQiWAAiMg7gAnknkQhgBfg0B7IAAAAQg2CAAACKQAACLA2CAQA0B7BgBgQBfBfB7A0IAAAAQCAA2CKAAQCLAACAg2QB7g0BghfQBfhgA0h7QA2iAAAiLQAAiKg2iAIAAAAQg0h7hfhfQhghgh7g0QiAg2iLAAQiKAAiAA2IAAAAQh7A0hfBgg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD107").s().p("Ak5LnQiRg9hwhvQhvhwg9iRIAAAAQhAiWAAikQAAijBAiWQA9iRBvhwQBwhvCRg9QCWhACjAAQCkAACWBAIAAAAQCRA9BwBvQBvBwA9CRQBACWAACjQAACkhACWIAAAAQg9CRhvBwQhwBviRA9IAAAAQiWBAikAAQijAAiWhAgAoPoPQhnBng5CGIAAAAQg7CMAACWQAACXA7CMQA5CGBnBnQBnBoCGA4IAAAAQCMA7CWAAQCXAACMg7QCGg4BnhoQBohnA4iGQA7iMAAiXQAAiWg7iMIAAAAQg4iGhohnQhnhniGg5QiMg7iXAAQiWAAiMA7IAAAAQiGA5hnBngAiyGoQhSgjhAhAQhAhAgjhTQgjhUgBheQABhdAjhVQAjhSBAhAQBAhABSgjQBVgjBdgBQBeABBUAjQBTAjBABAQBABAAjBSQAjBVABBdQgBBegjBUQgjBThABAQhABAhTAjQhUAjheABQhdgBhVgjgAgdlPQhCAGg6AeQg7AegrAyQgtAzgUBCQgVBBAGBDQAGBCAeA6QAeA7AyArQAzAsBCAVQBBAVBDgGQBBgGA7geQA7geArgyQAsgzAVhCQAVhBgGhDQgGhCgeg6Qgeg7gygrQgzgshCgVQgzgQg0AAIgdABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_38
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBD107").s().p("Am5G6Qi3i4AAkCQAAkCC3i3QC3i3ECAAQEDAAC3C3QC3C3AAECQAAECi3C4Qi3C3kDAAQkCAAi3i3gAmDmGQiiCjAADiQAADlCiCgQCjCiDhAAQDiAACgiiQCjifAAjjQAAjlijijQigifjiAAQjhAAijCfg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rounds_blue_mc_2, new cjs.Rectangle(-80.7,-80.7,161.4,161.4), null);


(lib.round_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31D20").s().p("AwkQkQm3m2AApuQAAptG3m3QG3m3JtAAQJuAAG2G3QG4G3AAJtQAAJum4G2Qm2G4puAAQptAAm3m4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_red, new cjs.Rectangle(-150,-150,300,300), null);


(lib.round_bg_mg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDE02").s().p("AkNKAQh9g1hghgQhghgg0h9Qg3iBAAiNQAAiMA3iBIAAAAQA0h9BghgQBghgB9g0QCBg3CMAAQCNAACBA3QB9A0BgBgQBgBgA1B9IAAAAQA2CBAACMQAACNg2CBQg1B9hgBgQhgBgh9A1QiBA2iNAAQiMAAiBg2gAmamaQiqCqAADwQAADwCqCqQCqCrDwAAQDxAACqirQCqiqAAjwQAAjwiqiqQiqiqjxAAQjwAAiqCqg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD107").s().p("AkjKzQiGg5hohoQhohog5iGIAAAAQg7iLAAiZQAAiXA7iMQA5iHBohnQBohoCGg5QCLg7CYAAQCYAACMA7IABAAQCGA5BnBoQBoBnA5CHQA7CMAACXQAACZg7CLIAAAAQg5CGhoBoQhnBoiGA5IgBAAQiMA7iYAAQiYAAiLg7gAkNp/Qh9A1hgBgQhfBgg1B8IAAABQg3CBAACMQAACMA3CCQA1B9BfBgQBgBgB9A1QCCA2CLAAQCNAACCg2QB8g1BghgQBghgA1h9QA3iCAAiMQAAiMg3iBIAAgBQg1h8hghgQhghgh8g1QiCg3iNAAQiLAAiCA3gAmZGaQiriqAAjwQAAjwCriqQCpiqDwAAQDxAACqCqQCqCqAADwQAADwiqCqQiqCqjxAAQjwAAipiqg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_bg_mg, new cjs.Rectangle(-75,-75,150,150), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-150,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-150,-143,300,286), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-127,-139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-127,-139,254,278), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-30,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-30,-35,60,70), null);


(lib.chip3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chip3();
	this.instance.parent = this;
	this.instance.setTransform(-47,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip3_1, new cjs.Rectangle(-47,-34,94,68), null);


(lib.chip2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chip2();
	this.instance.parent = this;
	this.instance.setTransform(-35,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip2_1, new cjs.Rectangle(-35,-39,70,78), null);


(lib.chip1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chip1();
	this.instance.parent = this;
	this.instance.setTransform(-31,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip1_1, new cjs.Rectangle(-31,-37,62,74), null);


(lib.box_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-122,-181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(-122,-181,244,362), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEC17").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.rounds_blue_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.instance = new lib.rounds_blue_mc_2();
	this.instance.parent = this;
	this.instance.setTransform(1.4,0,5.054,5.054);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,scaleX:10.1,scaleY:10.1,x:0.8},50).wait(1).to({regX:0,scaleX:0.01,scaleY:0.01,x:1.3,y:-0.1},0).to({scaleX:4.95,scaleY:4.95,x:1.6,y:0.1},49).wait(1));

	// Слой_4
	this.instance_1 = new lib.rounds_blue_mc_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,-0.1,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.2,scaleX:10.1,scaleY:10.1,x:0.8,y:0},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-406.5,-407.9,815.8,815.8);


(lib.round_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_bg_mg
	this.instance = new lib.round_bg_mg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.007,0.007);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1},10).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBD107").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FBD107").ss(1.9,1,1).p("Ag7AAQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FBD107").ss(2.8,1,1).p("AhsAAQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggQggggAAgtg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FBD107").ss(3.7,1,1).p("AidAAQAAhBAuguQAuguBBAAQBCAAAuAuQAuAuAABBQAABCguAuQguAuhCAAQhBAAguguQguguAAhCg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FBD107").ss(4.6,1,1).p("AjPAAQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVQAABWg9A9Qg9A9hWAAQhVAAg9g9Qg9g9AAhWg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FBD107").ss(5.5,1,1).p("AkAAAQAAhpBLhMQBMhLBpAAQBqAABLBLQBMBMAABpQAABqhMBLQhLBMhqAAQhpAAhMhMQhLhLAAhqg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FBD107").ss(6.4,1,1).p("AkxAAQAAh+BZhaQBahZB+AAQB/AABaBZQBZBaAAB+QAAB/hZBaQhaBZh/AAQh+AAhahZQhZhaAAh/g");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FBD107").ss(7.3,1,1).p("AljAAQAAiSBohpQBphoCSAAQCTAABpBoQBoBpAACSQAACThoBpQhpBoiTAAQiSAAhphoQhohpAAiTg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FBD107").ss(8.2,1,1).p("AmUAAQAAinB3h2QB2h3CnAAQCoAAB2B3QB3B2AACnQAACoh3B2Qh2B3ioAAQinAAh2h3Qh3h2AAiog");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FBD107").ss(9.1,1,1).p("AnFAAQAAi7CFiFQCFiFC7AAQC8AACFCFQCFCFAAC7QAAC8iFCFQiFCFi8AAQi7AAiFiFQiFiFAAi8g");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FBD107").ss(10,1,1).p("An3AAQAAjQCUiTQCTiUDQAAQDRAACTCUQCUCTAADQQAADRiUCTQiTCUjRAAQjQAAiTiUQiUiTAAjRg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FBD107").ss(8,1,1).p("AooAAQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FBD107").ss(6.1,1,1).p("ApZAAQAAj5CwiwQCwiwD5AAQD6AACwCwQCwCwAAD5QAAD6iwCwQiwCwj6AAQj5AAiwiwQiwiwAAj6g");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FBD107").ss(4.1,1,1).p("AqLAAQAAkNC/i/QC/i/ENAAQEOAAC/C/QC/C/AAENQAAEOi/C/Qi/C/kOAAQkNAAi/i/Qi/i/AAkOg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FBD107").ss(2.1,1,1).p("Aq8AAQAAkiDNjNQDNjNEiAAQEjAADNDNQDNDNAAEiQAAEjjNDNQjNDNkjAAQkiAAjNjNQjNjNAAkjg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FBD107").ss(0.1,1,1).p("ALuAAQAAE3jbDcQjcDbk3AAQk2AAjcjbQjbjcAAk3QAAk2DbjcQDcjbE2AAQE3AADcDbQDbDcAAE2g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,4);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t3_2
	this.instance = new lib.t3_2();
	this.instance.parent = this;
	this.instance.setTransform(-10,30.6,0.02,0.02,-90,0,0,45,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({regX:46.9,scaleX:1,scaleY:1,rotation:0,x:46.2,y:21.3},10,cjs.Ease.get(1)).wait(8));

	// t3_1
	this.instance_1 = new lib.t3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,20.2,0.02,0.02,-90,0,0,52.6,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regX:54.6,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:52.9,y:-14},10,cjs.Ease.get(1)).wait(10));

	// Слой_2
	this.instance_2 = new lib.round_anim("synched",0,false);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,4);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1_3
	this.instance = new lib.t1_3();
	this.instance.parent = this;
	this.instance.setTransform(22.8,-9.9,0.02,0.02,-90,0,0,35,2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:36.6,regY:0,scaleX:1,scaleY:1,rotation:0,x:35.6,y:19.5},10,cjs.Ease.get(1)).wait(6));

	// t1_2
	this.instance_1 = new lib.t1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.5,-3.3,0.02,0.02,-90,0,0,55.1,-2.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({regX:54.2,regY:0,scaleX:1,scaleY:1,rotation:0,x:55.4,y:-2},10,cjs.Ease.get(1)).wait(9));

	// t1_1
	this.instance_2 = new lib.t1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.7,4.3,0.02,0.02,-90,0,0,50.1,-2.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:55.9,regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:57.7,y:-23.7},10,cjs.Ease.get(1)).wait(12));

	// Слой_1
	this.instance_3 = new lib.round_anim("synched",0,false);
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-27.9,141.1,59);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.instance = new lib.box_1();
	this.instance.parent = this;
	this.instance.setTransform(323.7,108,1,1,19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).to({rotation:0,x:0,y:64},10,cjs.Ease.get(1)).wait(54).to({rotation:-19,x:-332,y:110},10,cjs.Ease.get(-1)).wait(1));

	// t3
	this.instance_1 = new lib.t3("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.9,-205.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).wait(64).to({startPosition:21},0).to({regY:-2.5,scaleX:0.02,scaleY:0.02,rotation:-89.8},10,cjs.Ease.get(-1)).wait(1));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,289);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({alpha:1},10).wait(55).to({alpha:0},10).to({_off:true},1).wait(74));

	// img2
	this.instance_3 = new lib.img2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(264,-188);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({x:16,y:22},10,cjs.Ease.get(1)).wait(55).to({x:264,y:-188},10,cjs.Ease.get(-1)).to({_off:true},1).wait(74));

	// img1
	this.instance_4 = new lib.img1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-191,260);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({x:-106,y:185},10,cjs.Ease.get(1)).wait(55).to({x:-191,y:260},10,cjs.Ease.get(-1)).to({_off:true},1).wait(74));

	// logo
	this.instance_5 = new lib.logo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(93,-246.2,0.01,0.01,0,0,0,5,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({regX:0,regY:-0.1,scaleX:0.31,scaleY:0.31},10,cjs.Ease.get(1)).wait(45).to({regX:6.5,regY:-7.5,scaleX:0.01,scaleY:0.01,rotation:50},10,cjs.Ease.get(-1)).to({_off:true},1).wait(74));

	// chip
	this.instance_6 = new lib.chip3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3,343);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(84).to({_off:false},0).to({x:0,y:237.2},10,cjs.Ease.get(1)).wait(35).to({x:3,y:343},10,cjs.Ease.get(-1)).to({_off:true},1).wait(74));

	// chip
	this.instance_7 = new lib.chip2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-186,-152);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(84).to({_off:false},0).to({x:-97,y:-94},10,cjs.Ease.get(1)).wait(35).to({x:-186,y:-152},10,cjs.Ease.get(-1)).to({_off:true},1).wait(74));

	// chip
	this.instance_8 = new lib.chip1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(187,230.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(84).to({_off:false},0).to({x:94,y:179},10,cjs.Ease.get(1)).wait(35).to({x:187,y:230.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(74));

	// t1
	this.instance_9 = new lib.t1("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-66.4,-219.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).wait(55).to({startPosition:26},0).to({regY:-2.5,scaleX:0.02,scaleY:0.02,rotation:-89.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(74));

	// logo
	this.instance_10 = new lib.logo_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1.1,0.5,0.008,0.008,0,0,0,0,6.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({regY:0,scaleX:0.79,scaleY:0.79,x:0,y:-0.1},14,cjs.Ease.get(1)).wait(32).to({regY:-0.1,scaleX:0.93,scaleY:0.93,y:-0.2},5).to({regY:0,scaleX:0.02,scaleY:0.02},10,cjs.Ease.get(-1)).to({_off:true},1).wait(149));

	// red_round
	this.instance_11 = new lib.round_red();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:-0.1,scaleX:0.67,scaleY:0.67,y:-4},14,cjs.Ease.get(1)).to({_off:true},1).wait(199));

	// rounds
	this.r = new lib.rounds_blue_2();
	this.r.name = "r";
	this.r.parent = this;
	this.r.setTransform(1.1,0.5,0.01,0.01,0,0,0,5,0);

	this.timeline.addTween(cjs.Tween.get(this.r).to({regX:0,scaleX:1,scaleY:1,x:-0.3},14,cjs.Ease.get(1)).wait(189).to({scaleX:0.02,scaleY:0.02},10,cjs.Ease.get(-1)).wait(1));

	// bg
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(214));

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
	id: '540D0CA1887D4E44991EDDBD232BF08A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box.png", id:"box"},
		{src:"images/chip1.png", id:"chip1"},
		{src:"images/chip2.png", id:"chip2"},
		{src:"images/chip3.png", id:"chip3"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/logo.png", id:"logo"}
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
an.compositions['540D0CA1887D4E44991EDDBD232BF08A'] = {
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