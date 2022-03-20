(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,300);


(lib.dev1 = function() {
	this.initialize(img.dev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,286);


(lib.dev2 = function() {
	this.initialize(img.dev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,286);


(lib.dev3 = function() {
	this.initialize(img.dev3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,228);


(lib.shadow1 = function() {
	this.initialize(img.shadow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,212);


(lib.shadow2 = function() {
	this.initialize(img.shadow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,226);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AE+CSIgCgDIgBgDIABgDIACgDIAEgBIADABIACADIABADIgBADIgCADIgDABgAgcCTIABgJIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgCABgEIABgiIAnAAIAAAxIgKAAIAAgpIgTAAIgBARIgCAPQgBAFgDACQgDACgGABgAhHCPQgGgEgDgFQgDgFAAgIQAAgHADgGQADgGAGgDQAGgDAHgBQAIABAFADQAGADADAGQAEAFAAAIQAAAIgEAFQgDAFgGAEQgFAEgIAAQgHAAgGgEgAhCBqQgDADgCAEQgCADAAAFQAAAFACAEQACAEADACQAEACAEAAQAEAAAEgCQAEgCACgEQACgEAAgFQAAgFgCgDQgCgEgEgDIgIgCIgIACgAjwCPQgGgEgDgFQgDgGAAgHQAAgGADgHQADgGAGgDQAGgDAHgBQAIABAFADQAGADADAGQAEAHAAAGQAAAHgEAGQgDAFgGAEQgGAEgHAAQgHAAgGgEgAjrBqQgDACgCAFQgCADAAAFQAAAFACAEQACAEADACQAEACAEAAQAEAAAEgCQADgCADgEQACgEAAgFQAAgFgCgDQgDgFgDgCIgIgCIgIACgAEmCSIAAgkIgZAkIgJAAIAAgxIAJAAIAAAjIAagjIAIAAIAAAxgADtCSIAAgjIgQAVIgGAAIgQgVIAAAjIgJAAIAAgxIAJAAIATAZIATgZIAJAAIAAAxgACmCSIAAgxIAJAAIAAAxgACOCSIAAgWIgYAAIAAAWIgKAAIAAgxIAKAAIAAATIAYAAIAAgTIAKAAIAAAxgABICSIAAgpIgRAAIAAgIIAsAAIAAAIIgRAAIAAApgAAkCSIAAgxIAJAAIAAAxgAhoCSIAAgWIgYAAIAAAWIgJAAIAAgxIAJAAIAAATIAYAAIAAgTIAKAAIAAAxgAi+CSIAAgxIAVAAQAKAAAEAEQAEACAAAHQAAAEgBACQgDADgDACQAFAAACADQADAEAAAEQAAADgCAEQgCADgEABQgEADgGAAgAi1CLIANAAQAGAAACgCQACgCAAgEQAAgHgKAAIgNAAgAi1B2IALAAQAFAAACgCQADgCAAgDQAAgHgKAAIgLAAgAkRCSIAAgpIgYAAIAAApIgJAAIAAgxIArAAIAAAxgACnBVIgCgCIgBgEIABgCIACgCIAEgBIADABIACACIABACQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAABIgCACIgDABgAAlBVIgCgCIgBgEIABgCIACgCIADgBIAEABIACACIABACIgBAEIgCACIgEABgAL4A7IAAhHIAKAAIAAAHQADgEAEgCQAEgDAGABQAGAAAFADQAFADADAGQAEAFAAAHQAAAIgEAFQgDAGgFADQgFADgGABQgGgBgEgCQgFgCgCgDIAAAegAMJgDQgEADgBADQgCADAAAFQAAAGACADQABADAEADQADACAFAAQAEAAAEgCQADgDACgDQACgDAAgGQAAgFgCgDQgCgDgDgDQgEgBgEAAQgFAAgDABgAGBAwIAAgNIgpAAIAAANIgIAAIAAgUIAGAAQACgEABgDIACghIAmAAIAAAoIAIAAIAAAUgAFkAIIgCAMIgCAIIAYAAIAAggIgUAAgAxqAwIAAgNIhDAAIAAgvIAJAAIAAAoIAUAAIAAgoIAJAAIAAAoIAUAAIAAgoIAKAAIAAAoIAHAAIAAAUgAPcAhQgGgDgDgGQgDgFAAgIQAAgHADgFQADgGAGgDQAFgDAGAAQAGgBAEADQADABAEAFIAAgHIAJAAIAAAvIgJAAIAAgGQgEADgDACQgEACgGABQgGgBgFgDgAPhgDQgDACgCAEQgCAEAAAEQAAAEACAFQACAEADACQADACAFAAQAFAAADgCQADgCACgEQACgDAAgGQAAgFgCgDQgCgEgDgCQgDgBgFAAQgFAAgDABgAN3AhQgGgEgDgFQgDgFAAgIQAAgHADgFQADgFAGgEQAGgDAIAAQAGgBAGADQAGADACAEIgGAFIgGgEQgEgCgEABQgGAAgCABIgGAGQgCAEAAAEQAAAEACAFQACAEADABQAEADAFAAQAEAAAEgCQADgBADgEIAGAHQgDAEgFACQgFADgHAAQgIgBgGgDgALHAhQgGgEgDgFQgDgFAAgHQAAgJADgEQADgGAGgDQAFgDAIAAQAIAAAFADQAGADADAGQADAFAAAIQAAAHgDAFQgDAFgGAEQgGADgHABQgHgBgGgDgALMgDQgEADgBADQgCADAAAGQAAAEACAEQABAEAEABQAEADAEAAQAEAAAEgDQADgBADgEQACgEAAgEQAAgGgCgDQgCgDgEgDIgIgBIgIABgAGQAlIABgJIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgEIACgiIAnAAIAAAvIgJAAIAAgnIgVAAIAAAQIgCAOQgBAGgEACQgCADgHAAgABbAlIACgJIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBAAgDIABgiIAoAAIAAAvIgKAAIAAgnIgUAAIgBAQIgBAOQgCAGgDACQgDADgGAAgAggAkIgDgDIAAgDIAAgDIADgDIADgBIADABIADADIABADIgBADIgDADIgDABgAixAhQgGgEgDgFQgDgFAAgIQAAgHADgFQADgFAGgEQAFgDAIAAQAGgBAGADQAGADADAEIgGAFIgHgEQgDgCgFABQgFAAgDABQgEADgCADQgCAEAAAEQAAAEACAFQADAFADAAQAEADAEAAQAFAAADgCQAEgBADgEIAGAHQgEAEgFACQgEADgIAAQgHgBgGgDgAmCAhQgGgEgDgFQgDgFAAgIQAAgHADgFQAEgGAFgDQAFgDAHAAQAHAAAGACQAGAFACAEQADAFAAAHIAAAEIgmAAQAAAEACAEIAGAEQAEACAEAAIAJgCIAGgDIAFAGQgDADgFACQgGACgGABQgIgBgGgDgAlnAHQgBgGgEgDQgFgEgFABQgFgBgEAEQgFACAAAHIAdAAIAAAAgAnMAlIACgJIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBAAgDIABgiIAoAAIAAAvIgKAAIAAgnIgUAAIgBAQIgBAOQgCAGgDACQgDADgGAAgAn7AhQgFgDgDgGQgDgFAAgIQAAgHADgFQADgGAFgDQAFgDAHAAQAFgBAEADQAFACACAEIAAgHIAKAAIAAAvIgKAAIAAgGQgCADgFACQgDACgGABQgGgBgGgDgAn1gDQgEADgBADQgCADAAAFQAAAGACADQABADAEADQADACAFAAQAEAAAEgCQADgDACgDQACgDAAgGQAAgFgCgDQgCgDgDgDQgEgBgEAAQgFAAgDABgAovAiQgGgCgDgDIAGgGQACACAEADQAEABAFAAQAFAAAEgCQADgCAAgEQAAgHgLAAIgKAAIAAgHIAIAAQAGAAACgCQADAAAAgEQAAgDgDgCQgCgBgFAAQgIgBgGAGIgFgFQADgEAFgDIALgBQAJAAAFADQAFAEAAAGQAAADgCADQgBADgEACQ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QAAAAABAAQABAAAAAAQADgBACADQACACAAAFQAAAGgDAFQgDAEgHAGgAEChLQgFgCgDgEIAFgFQADADADABIAJACQAFAAAEgCQADgCAAgEQAAgGgKAAIgKAAIAAgIIAIAAQAFAAADgBQACgCAAgEQAAgDgCgBQgCgCgGAAQgIAAgGAFIgFgFQADgEAFgCQAHgCAFAAQAJAAAFADQAFAEAAAGQAAAFgCACQgCADgEABQAFACACADQADADAAAEQAAAEgDAEQgCACgFADQgHACgFAAQgGAAgGgDgAkIhLQgFgBgEgFIAGgFQADADADABQAEACAFAAQAFAAAEgCQADgCAAgEQAAgGgKAAIgKAAIAAgIIAIAAQAFAAACgBQADgCAAgEQAAgDgCgBQgCgCgGAAQgIAAgGAFIgFgFQADgEAFgCQAHgCAFAAQAIAAAGADQAEAEAAAGQAAAEgBADQgDAEgDAAQAFACACADQACACAAAFQAAAFgCADQgCACgGADQgGACgFAAQgGAAgGgDgAqQhMQgGgDgDgGQgDgFAAgIQAAgHADgGQADgFAGgEQAFgEAIABQAGAAAGACQAGADADAEIgGAFQgDgDgDgBQgEgCgEAAQgFAAgDACQgDABgDADIgDAHIAYAAIAAAIIgYAAQABAFAEAFQAEADAIAAQAEAAAEgBQADgBADgDIAGAFQgDAEgGACQgGADgGAAQgGAAgHgEgAPyhMQgGgDgDgGQgDgFAAgHQAAgIADgGQAEgGAFgDQAFgEAIABQAIgBAFAEQAGADADAGQADAGAAAIQAAAHgDAFQgDAGgGADQgGADgHAAQgHAAgGgDgAP3hwIgGAGQgCAEAAAFQAAADACAFQADAEADABQAEADAEAAQAEAAAEgDQADgBADgEQACgFAAgDQAAgFgCgEQgCgEgEgCQgEgCgEAAQgEAAgEACgAJThMQgGgDgCgGQgEgFAAgIQAAgHADgGIAJgJQAGgEAIABQAGAAAGACQAGADACAEIgGAGQgCgDgEgCQgEgBgEAAQgFAAgDACQgEACgCAEQgCADAAAFQAAAFACAEQACAEAEABQADADAFAAQAFAAADgCQAEgCACgDIAGAGQgEAFgEACQgFACgHAAQgIAAgGgDgAFihJIABgIIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgBABgDIABgjIAoAAIAAAwIgKAAIAAgoIgUAAIgBARIgCAOQgBAGgDACQgDACgGAAgAE3hMQgFgDgEgGQgDgFAAgHQAAgIADgGQAEgGAFgDQAGgEAHABQAIgBAFAEQAGADADAGQAEAFAAAJQAAAHgEAFQgDAGgGADQgFADgIAAQgHAAgGgDgAE8hwQgDACgCAEQgCADAAAGQAAAFACADQACAEADABQAEADAEAAQAEAAAEgDQAEgBACgEQACgDAAgFQAAgGgCgDQgCgEgEgCIgIgCIgIACgADOhMQgGgDgDgGQgEgFAAgHQAAgJAEgFQADgGAGgDQAFgEAIABQAHgBAGAEQAFADAEAGQADAGAAAIQAAAHgDAFQgEAGgFADQgGADgHAAQgIAAgFgDgADThwQgEACgCAEQgCADAAAGQAAAEACAEQACAEAEABQAEADAEAAQAEAAAEgDQADgBACgEQACgDAAgFQAAgGgCgDQgCgEgDgCIgIgCIgIACgABYhMQgFgDgEgGQgDgFAAgIQAAgHADgGQADgGAGgDQAFgEAIABQAHAAAFACQAFAEAEAFQADAGAAAGIgBAFIgmAAQAAADADAFQABACAEACIAIACQAFAAAEgCIAHgDIAFAFQgDAFgGABQgFACgHAAQgIAAgGgDgABzhmQgBgGgEgEQgEgDgFAAQgGAAgEADQgEAEgBAGIAdAAIAAAAgAgehJIgDgDIgBgDIABgDIADgDIADAAIADAAIADADIAAADIAAADIgDADIgDAAgAoShMQgGgDgDgGQgDgFAAgIQAAgHADgGQADgFAGgEQAFgEAIABQAGAAAGACQAGAEADADIgGAGIgHgFQgDgBgFAAQgFAAgDACQgEACgCAEQgCADAAAFQAAAFACAEQADAEADABQAEADAEAAQAFAAADgCQAEgCADgDIAGAGQgEAFgFACQgEACgIAAQgHAAgGgDgArNhMQgGgEgDgFQgDgFAAgIQAAgHADgGQADgGAGgDQAFgEAGABQAGAAAEACQAEACADAEIAAgHIAKAAIAAAwIgKAAIAAgHQgCAEgFACQgEACgGAAQgGAAgFgDgArIhwQgDACgCAEQgCAEAAAEQAAAFACAEQACADADADQAEACAEAAQAFAAADgCQAEgDABgDQACgEAAgFQAAgFgCgDQgBgEgEgCQgDgCgFAAQgEAAgEACgAs5hMQgFgCgEgFQgDgFgBgHIgIAAIAAAVIgJAAIAAgwIAJAAIAAATIAJAAQAAgGAEgEQAEgFAEgDQAGgCAGAAQAHgBAFAEQAGADADAGQADAGAAAHQAAAIgDAFQgDAGgGADQgFADgHAAQgHAAgFgDgAs1hwQgEACgBAEQgCAFAAADQAAAEACAFQABAEAEABQADACAFAAQAFAAACgCQAEgDABgCQACgEAAgFQAAgFgCgDQgBgEgEgCQgCgCgFAAQgFAAgDACgAuYhJIACgIIACAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQACgBAAgDIACgjIAnAAIAAAwIgKAAIAAgoIgUAAIgBARQAAAKgBAEQgCAGgDACQgDACgGAAgAx9hMQgGgDgEgGQgDgFAAgIQAAgHADgGQAEgHAFgCQAFgEAIABQAHAAAFACQAGAFADAEQADAGAAAGIgBAFIgmAAQAAADADAFIAFAEQAEACAFAAIAIgCIAHgDIAFAFQgDAEgGACQgFACgHAAQgIAAgFgDgAxjhmQAAgFgFgFQgEgDgFAAQgFAAgFADQgEAEgBAGIAdAAIAAAAgASthKIAAgVIgYAAIAAAVIgJAAIAAgwIAJAAIAAATIAYAAIAAgTIAKAAIAAAwgAR0hKIAAgjIgZAjIgJAAIAAgwIAJAAIAAAkIAagkIAJAAIAAAwgAQuhKIAAgoIgRAAIAAgIIAsAAIAAAIIgRAAIAAAogAPXhKIgOgUIgKAAIAAAUIgJAAIAAgwIAJAAIAAATIAJAAIABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIANgRIALAAIgRAXIASAZgAOehKIAAgwIAKAAIAAAwgAOGhKIAAgVIgYAAIAAAVIgJAAIAAgwIAJAAIAAATIAYAAIAAgTIAKAAIAAAwgAMbhKIAAgwIAKAAIAAASIAKAAQAKgBAFAEQAFADAAAJQAAAIgFAEQgFADgKAAgAMlhRIAKAAQALAAAAgIQAAgEgDgCQgEgCgEAAIgKAAgAL3hKIAAgoIgRAAIAAgIIArAAIAAAIIgQAAIAAAogALThKIAAgjIgZAjIgJAAIAAgwIAJAAIAAAkIAagkIAIAAIAAAwgAKNhKIAAgoIgRAAIAAgIIArAAIAAAIIgRAAIAAAogAIzhKIAAgwIAJAAIAAAwgAIbhKIAAgjIgQAWIgGAAIgQgWIAAAjIgJAAIAAgwIAJAAIATAZIATgZIAJAAIAAAwgAGjhKIAAgwIAJAAIAAASIALAAQAKgBAFAEQAFADAAAJQAAAIgFAEQgGADgJAAgAGshRIAKAAQALAAAAgIQAAgEgCgCQgEgCgFAAIgKAAgAA9hKIgFgNIghAAIgFANIgKAAIAbhHIAJAAIAbBHgAA0hgIgNgiIgMAiIAZAAgAhUhKIAAgwIAVAAQAKAAAEADQAEADAAAGQAAAFgBACQgCADgDABQAEABACAEQADACAAAFQAAAFgCACQgCADgEABQgEACgGAAgAhLhRIANAAQAGAAACgCQACgBAAgEQAAgHgKAAIgNAAgAhLhmIALAAQAFABADgCQACgCAAgEQAAgGgKAAIgLAAgAhshKIAAgwIAKAAIAAAwgAiBhKIgOgUIgKAAIAAAUIgJAAIAAgwIAJAAIAAATIAJAAIABAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIANgRIALAAIgRAXIASAZgAi5hKIAAgjIgaAjIgIAAIAAgwIAJAAIAAAkIAZgkIAJAAIAAAwgAkkhKIAAgjIgZAjIgJAAIAAgwIAJAAIAAAkIAagkIAJAAIAAAwgAmuhKIgNgSIgNASIgLAAIASgYIgSgYIALAAIANASIAOgSIALAAIgTAYIATAYgAnmhKIAAgwIAJAAIAAAwgArthKIAAgUQgHADgHAAQgGAAgEgCQgEgCgCgEQgCgDAAgGIAAgOIAJAAIAAANQAAAFADACQACACAGAAQAHAAAFgCIAAgUIAJAAIAAAwgAunhKIgNgTIgCgBIgJAAIAAAUIgKAAIAAgwIAKAAIAAATIAIAAIACAAIAOgTIALAAIgRAXIARAZgAvghKIAAgjIgZAjIgJAAIAAgwIAJAAIAAAkIAZgkIAJAAIAAAwgAw3hKIAAgwIAWAAQAJAAAEADQAFAEAAAFQAAAEgCADQgCADgDABQADABAEAEQACACAAAFQAAAFgCACQgDADgDABQgEACgGAAgAwuhRIANAAQAGAAACgCQACgBAAgEQAAgHgKAAIgNAAgAwuhmIALAAQAFABADgCQACgCAAgEQAAgGgKAAIgLAAgAyhhKIAAggIgkAAIAAAgIgKAAIAAhHIAKAAIAAAeIAkAAIAAgeIAKAAIAABHgAOgiGIgCgDQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgDIACgDIADgBIADABIACADIABADIgBACIgCADIgDABgAI0iGIgCgDQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgDIACgDIADgBIAEABIACADIABADIgBACIgCADIgEABgAhqiGIgDgDIgBgCIABgDIADgDIADgBIADABIACADIABADIgBACIgCADIgDABgAnliGIgCgDIgBgCIABgDIACgDIADgBIADABIADADIABADIgBACIgDADIgDABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-123.2,-14.6,246.5,29.3), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-126,-31.1,252,62.2), null);


(lib.shadow2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shadow2();
	this.instance.parent = this;
	this.instance.setTransform(-96,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow2_1, new cjs.Rectangle(-96,-113,192,226), null);


(lib.shadow1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shadow1();
	this.instance.parent = this;
	this.instance.setTransform(-104,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow1_1, new cjs.Rectangle(-104,-106,208,212), null);


(lib.logo_veev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyaECIhEhDQgEgEgEgCIgJgBIk2AAQhgAAg3gvQgZgUgOgeQgOgeAAghIAAkFQABgMAIgIQAJgIALAAIFiAAQBfAAA4AuQAaAVAOAeQAOAdgBAhIAAB6QAAAMgIAJQgJAHgLABIgKAAQgMAAgIgIQgIgJAAgMIAAh6QAAgRgIgRQgIgRgNgLQgVgRgZgGQgggIgfAAIkzAAQgDAAgDADQgDADAAADIAADWQAAASAHAQQAHAQAPAMQAUARAaAGQAeAIAgAAIFJAAQAJAAAHAEQAJACAGAHIBSBRQAIAJAAALQAAANgIAHIgHAHIAAAAQgJAJgLgBQgMABgIgJgASQC4QgFAAgEgFQgEgEABgGIAAmlQAAgGADgEQAFgDAFAAIE1AAIAAAcIknAAIAAGIIEnAAIAAAdgAL4C4QgGAAgDgFQgEgDgBgHIAAmlQABgGAEgEQAEgDAFAAIE0AAIAAAcIklAAIAAGIIElAAIAAAdgAkCC4QhBAAgxguIgPgOQgHgIgCgMQABgLAHgJIAHgHQAIgIALgBQAMAAAJAIIAPAOQAcAcAoAAIDeAAQAbAAAagGQAUgEARgNQAJgGAEgJQAEgLgBgOQABgOgEgLQgEgKgJgGQgQgMgVgEQgWgFgfAAIi7AAQhXAAgtgjQgVgQgLgXQgKgXAAgZIAAgOQAAgZAKgXQALgWAVgQQAugkBWAAIDLAAQA/AAAuArIAUARQAIAHABANQAAALgHAIIgHAIQgIAIgLABQgMAAgIgIIgUgRQgcgaglABIjMAAQgaAAgdAGQgTAEgSAMQgHAGgFAJQgEAOABAMQgBANAEAMQAFAKAHAGQASANATADQAbAGAcAAIC7AAQBWAAAtAjQAUAQALAWQALAXAAAZIAAAOQABAZgLAXQgLAXgVAPQgsAkhXAAgAtrC4QhgAAg3gvQgZgUgOgeQgOgeABghIAAiCQgBghAOgdQAOgeAZgVQA3guBgAAICzAAQBgAAA3AuQAaAVANAeQAOAdAAAhIAACCQAAAhgOAeQgNAegZAUQg4AvhgAAgAuqi/QgaAHgUAQQgNAMgIAQQgHARAAARIAACCQAAASAHARQAIAQANALQAWARAYAHQAeAHAhABICzAAQAhgBAegHQAZgIAVgQQANgLAIgQQAIgQgBgTIAAiCQABgSgIgQQgGgQgPgMQgVgRgZgGQghgIgeAAIizAAIgDAAQgdAAgfAIgA+RC4QgLAAgJgJQgIgIAAgMIAAmIQAAgLAIgJQAJgIALAAIAKAAQAMAAAJAIQAHAJAAALIAAGJQABALgJAIQgJAJgLAAgAHNC3QgJABgEgJIjCm4IAfAAIADAJICtGFICsmGIACgIIAgAAIjCG4QgDAIgHAAIgCAAgAbcC2QgHgBgCgGIjCm4IAgAAIACAJICsGFICsmGIADgIIAgAAIjBG4QgCAFgEACIgHABIgEgBgATOgaIAAgdIDXAAIAAAdgAM2gaIAAgdIDXAAIAAAdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_veev, new cjs.Rectangle(-196.5,-26.6,393.1,53.3), null);


(lib.dev3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev3();
	this.instance.parent = this;
	this.instance.setTransform(-34,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev3_1, new cjs.Rectangle(-34,-114,68,228), null);


(lib.dev2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev2();
	this.instance.parent = this;
	this.instance.setTransform(-88,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev2_1, new cjs.Rectangle(-88,-143,176,286), null);


(lib.dev1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev1();
	this.instance.parent = this;
	this.instance.setTransform(-121,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev1_1, new cjs.Rectangle(-121,-143,242,286), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-125,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-125,-150,250,300), null);


(lib.bg_g1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00D1D2").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_g1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0081D8").s().p("A30izIAZgIMAu3gOgIAtgOIAAUTIgtAOMgu3AOkIgtAOg");
	this.shape.setTransform(0,135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A9E7").s().p("EgXbAu4IAAoXMAu3gOjIAAW6gEgXbgu3MAu3AAAMAAAAyhMgu3AOgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_b1, new cjs.Rectangle(-154.5,-300,309,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:15});

	// timeline functions:
	this.frame_170 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(170).call(this.frame_170).wait(1));

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171));

	// dev1
	this.instance_1 = new lib.dev1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-266,417.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({x:7,y:96},15,cjs.Ease.cubicOut).wait(55).to({x:275.5,y:-214},15,cjs.Ease.cubicIn).to({_off:true},1).wait(15));

	// dev2
	this.instance_2 = new lib.dev2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.9,96,1,1,14,0,0,-0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({regX:0,regY:0,rotation:0,x:-32,y:37},15,cjs.Ease.cubicOut).wait(40).to({x:206,y:-443},15,cjs.Ease.cubicIn).to({_off:true},1).wait(15));

	// dev3
	this.instance_3 = new lib.dev3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(7.1,96,1,1,30);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85).to({_off:false},0).to({rotation:0,x:-80,y:8},15,cjs.Ease.cubicOut).wait(40).to({x:-23,y:-414},15,cjs.Ease.cubicIn).to({_off:true},1).wait(15));

	// logo
	this.instance_4 = new lib.logo_veev();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.2,-256,0.481,0.481,0,0,0,-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(171));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-177);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},15).wait(156));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_70 = new cjs.Graphics().p("A30izMAv9gO2IAAUTMgwRAPAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(70).to({graphics:mask_graphics_70,x:0,y:135}).wait(86).to({graphics:null,x:0,y:0}).wait(15));

	// shadow2
	this.instance_6 = new lib.shadow2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-261,442.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70).to({_off:false},0).to({x:12,y:121},15,cjs.Ease.cubicOut).wait(55).to({x:280.5,y:-189},15,cjs.Ease.cubicIn).to({_off:true},1).wait(15));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgXbgquMAu3AAAMAAABGwMgu3AOtg");
	var mask_1_graphics_155 = new cjs.Graphics().p("EgXbgquMAu3AAAMAAABGwMgu3AOtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:0,y:-26.5}).wait(71).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_1_graphics_155,x:0,y:-26.5}).wait(16));

	// dev
	this.instance_7 = new lib.dev_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(182.1,317.1);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:0,y:42},15,cjs.Ease.cubicOut).wait(40).to({x:182.1,y:317.1},15,cjs.Ease.cubicIn).to({_off:true},1).wait(84).to({_off:false},0).to({x:0,y:42},15,cjs.Ease.cubicOut).wait(1));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A4IAtMAVagsXIWpAAMgfFA+zMAjTgKyIAAUUMgwRAPAg");
	var mask_2_graphics_155 = new cjs.Graphics().p("A4IAtMAVagsXIWpAAMgfFA+zMAjTgKyIAAUUMgwRAPAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:0,y:-31.5}).wait(71).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_2_graphics_155,x:0,y:-31.5}).wait(16));

	// shadow1
	this.instance_8 = new lib.shadow1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(152.1,369.1);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-30,y:94},15,cjs.Ease.cubicOut).wait(40).to({x:152.1,y:369.1},15,cjs.Ease.cubicIn).to({_off:true},1).wait(84).to({_off:false},0).to({x:-30,y:94},15,cjs.Ease.cubicOut).wait(1));

	// bg_b1
	this.instance_9 = new lib.bg_b1();
	this.instance_9.parent = this;
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(55).to({_off:false},0).to({alpha:1},15).wait(70).to({alpha:0},15).wait(16));

	// bg_g2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B6B8").s().p("A4IAtMAVagsXIWpAAMgfFA+zMAjTgKyIAAUUMgwRAPAg");
	this.shape.setTransform(0,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(171));

	// bg_g1
	this.instance_10 = new lib.bg_g1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.7,0.5,1,1,0,0,0,-0.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.5,-311,309,611);


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
p.nominalBounds = new cjs.Rectangle(145.5,289,461.6,786.1);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dev.png", id:"dev"},
		{src:"images/dev1.png", id:"dev1"},
		{src:"images/dev2.png", id:"dev2"},
		{src:"images/dev3.png", id:"dev3"},
		{src:"images/shadow1.png", id:"shadow1"},
		{src:"images/shadow2.png", id:"shadow2"}
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