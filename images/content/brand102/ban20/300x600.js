(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,272);


(lib._img = function() {
	this.initialize(img._img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.k1 = function() {
	this.initialize(img.k1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,58);


(lib.k2 = function() {
	this.initialize(img.k2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,76);


(lib.k3 = function() {
	this.initialize(img.k3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,112);


(lib.k4 = function() {
	this.initialize(img.k4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,176);


(lib.k5 = function() {
	this.initialize(img.k5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,90);


(lib.k6 = function() {
	this.initialize(img.k6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,152);// helper functions:

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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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PQABARgHAHQgGAJgNAAQgMAAgIgJIAAAAIAAAkgAESiRQgFAFAAALIAAACQAAAOAFAFQAEAFAJAAQAIABAFgHQAEgGAAgMQAAgLgEgGQgFgGgIAAQgJAAgEAFgAydhDIAAhaIAIAAIACAIIAAAAQAEgFAFgDQAEgBAHAAQANAAAGAIQAHAIgBAPQAAAQgGAIQgHAJgNAAQgLAAgIgJIgBAAIABACIAAAigAyOiRQgFAFAAALIAAACQAAANAFAGQAEAFAJAAQAIABAFgHQAEgGAAgMQAAgLgEgGQgFgGgIAAQgJAAgEAFgAoohJIAAgWIgrAAIAAAWIgKAAIAAgeIAFAAQAHgJAFgQQAFgOAAgPIAgAAIAAA2IAJAAIAAAegApEh8QgCAKgHALIAcAAIAAguIgNAAQgCANgEAMgArchJIAAgWIg0AAIAAg+IALAAIAAA2IAgAAIAAg2IAKAAIAAA2IAJAAIAAAegAToheIgBgBIgCgCIgBgFIABgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIABgBIAGAAIACABIACADIAAADIAAAFIgCACIgCABgANLheIgBgBIgCgCIgBgFIABgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIABgBIAGAAIACABIACADIAAADIAAAFIgCACIgCABgAKqheIgDgBIgBgCIAAgFIAAgDIABgDIADgBIAGAAIACABIABADIABADIgBAFIgBACIgCABgAFOheIgCgBIgCgCIgBgFIABgDIACgDIACgBIAFAAIADABIACADIAAADIAAAFIgCACIgDABgAg2heIgCgBIgBgCIgBgFIABgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBIACgBIAGAAIACABQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIABADIgBAFIgCACIgCABgAjXheIgCgBIgCgCIgBgFIABgDIACgDIACgBIAFAAIADABIACADIAAADIAAAFIgCACIgDABgARMheIgGgBIAAgIIAFAAIAFAAQAJAAAEgCQAEgCADgFQAEgGABgFQABgGAAgHIgBAAIgCAEIgEADIgFACIgGABQgGAAgEgCQgFgBgDgDIgEgIIgCgLQAAgFACgHQABgFAEgEQADgDAFgCQAEgCAGgBQAGAAAFADQAFACAEAEQADAEACAIQACAGAAALIAAAMIgCAKIgEAKQgDAFgEAEQgFAEgEABQgFACgJAAgARUipIgFADIgDAGIgBAJIABAHIACAFIAFADQACACAEAAIAHgCIAGgDIADgFIABgFIgBgIIgDgHIgFgFQgDgCgFAAIgFACgAPNhgQgGgEgDgFQgCgEgDgKQgCgHABgLQgBgKACgIQABgIAEgFQACgFAGgDQAEgDAIgBQAHABAFADQAFADADAFQAEAFABAIQABAIABAKQgBALgBAHQgCAIgDAGQgCAFgGAEQgFACgHAAQgGAAgFgCgAPRioQgDACgDAEQgBAEgBAHIgBAOIABAPIACALQAEAFACABQADACAEAAQAEAAAEgBQADgCABgFIAEgKIAAgeIgEgLQgBgEgDgCQgDgCgFgBQgFABgCACgAIqhfQgGgBgEgDIAAgJIAKAEIALABIAJAAIAGgEIAEgFIACgHQAAgEgCgDQgBgCgDgCQgCgCgFgBIgJAAIgIAAIAAgJIAIAAIAIgCIAGgDIADgEQACgDAAgEIgBgGIgDgDIgFgDIgFgBQgHABgEACIgJAEIgFgHIAKgGIAPgDQAGAAAFACIAIAEQADADABAEQABAEAAAFIgBAHIgDAGIgGAEIgIACIAAAAQALACAFAFQAFAFAAAIQAAAGgBAEQgDAFgDADIgKAGQgFABgJAAIgLgBgAHVhiQgGgEgEgHQgDgJgBgJQABgOAHgJQAIgIANAAQAOAAAIAIQAHAJABAOQgBARgHAHQgIAJgOAAQgJAAgGgEgAHSh/QAAANAFAFQAFAHAIgBQAKABAEgHQAFgGAAgMQAAgKgFgHQgEgGgKAAQgSAAAAAXgACxheIgFgBIAAgIIAEAAIAGAAQAIAAAEgCQAEgCAEgFIAEgLQACgGAAgHIgBAAIgDAEIgDADIgGACIgFABQgGAAgFgCQgEgBgDgDIgFgIIgBgLQAAgFABgHQABgFAFgEQABgCAHgDQAEgCAGgBQAGAAAFADQAFACAEAEQADAGACAGQACAGAAALIAAAMIgDAKIgEAKQgCAFgFAEQgEADgFACQgGACgHAAgAC5ipIgFADIgDAGIgBAJIAAAHIADAFIAFADQADACAEAAIAHgCIAFgDIADgFIACgFIgCgIIgDgHIgEgFQgDgCgFAAIgGACgAAyhgQgGgEgDgFQgDgHgBgHQgCgHAAgLQAAgKACgIQABgIADgFQADgFAFgDQAFgDAHgBQAIABAEADQAGADADAFQADAHABAGQACAIAAAKQAAALgCAHQgBAIgDAGQgDAFgFAEQgGACgHAAQgGAAgFgCgAA2ioQgDACgCAEQgCAEAAAHIgBAOIABAPIACALQADAFACABQADACAEAAQAEAAAEgBQADgCACgFIADgKIAAgeIgDgLQgCgEgDgCQgDgCgFgBQgFABgCACgAhuhfQgEgCgFgDQgDgDgBgEQgCgEAAgFIABgIIADgGIAGgFIAGgEIgFgDIgFgFIgCgGIgBgGQAAgGABgDQACgEAEgDIAHgDIAJgCIAJACIAHADIAGAHIABAJQAAADgBADQgBAEgCACIgFAFIgGADIAHAEIAGAFIADAGQACADAAAEQAAAGgCAEQgCAEgDADQgDADgFACQgFABgGAAgAhwh/QgDAEAAAHIABAFIADAFQACACADABIAGAAIAHAAIAGgDIADgFIABgGIgBgFIgDgFIgMgHIgCgBQgGADgFAFgAhtioQgDADAAAGIAAAFIADAFIAFADIAFADIAJgGIADgFIABgFQAAgGgEgDQgDgDgGAAQgGAAgEADgAiwhgQgEgDgEgGQgEgFgBgJQgBgHgBgLIABgSQACgIAEgFQACgFAGgDQAFgDAGgBQAIABAEADQAFACAEAGQADAFACAIQABAHAAALQABALgCAHQgBAIgEAGQgEAGgEADQgGACgHAAQgFAAgGgCgAisioQgDADgBADQgCAEgCAHIAAAdQABAGADAFQABAEADACQAEACADAAQAEAAAEgBQAEgDABgEQACgFABgFIABgQIgBgOQgBgHgCgEQgBgDgEgDQgDgCgFgBQgEABgDACgAmuhiIAAgJQALAFAKAAQAJAAADgDQAEgCABgGQgBgFgEgDQgFgCgIAAIgIAAIAAgIIAGAAQARgBABgJQAAgJgPAAIgIABIgJADIgDgJQAKgDALAAQALgBAGAFQAGAEABAIQAAALgMACIAAABQAHADADADQADAEABAGQAAAIgIAFQgHAFgMAAQgPAAgGgEgAn3hmQgIgJAAgPQAAgPAIgJQAHgIAPAAIAJABIAJABIgDAJQgIgDgHAAQgJAAgFAFQgFAFAAAJIAeAAIAAAIIgeAAQABALAEAEQAEAGAKgBIAJAAIAIgDIAAAJQgHADgKAAQgOAAgIgIgAuRhiIAAgJQAMAFAJAAQAIAAAFgDQAEgCAAgGQAAgFgEgDQgFgCgJAAIgJAAIAAgIIAHAAQASgBAAgJQAAgJgOAAIgJABIgJADIgDgJQALgDAKAAQAMgBAFAFQAHADAAAJQAAALgMACIAAABQAIADADADQADAEAAAGQAAAIgHAFQgIAFgMAAQgOAAgHgEgAvChiQgGgEgEgHQgDgHgBgLQABgOAHgJQAHgIAOAAQAOAAAIAIQAHAJAAAOQAAAPgHAJQgIAJgOAAQgJAAgGgEgAvFh/QAAANAFAFQAFAHAIgBQAKABAEgHQAFgFgBgNQABgLgFgGQgEgGgKAAQgSAAAAAXgAxLhiQgHgEgDgHQgEgHABgLQAAgOAHgJQAIgIANAAQAOAAAHAIQAJAJgBAOQABAPgJAJQgGAJgPAAQgJAAgGgEgAxOh/QAAANAFAFQAEAHAJgBQAKABAEgHQAEgFAAgNQAAgLgEgGQgEgGgKAAQgSAAAAAXgAQYhfIAAhIIgBABIgEADIgCACIgJAHIgFgHIAWgRIAJAAIAABTgAN9hfIAAgJIAbgeIAFgHIAEgHQABgEABgFIgBgGQgBgDgDgBIgDgCIgGgCQgGABgEACIgIAFIgGgGIAFgFIAGgCIAGgCIAHgCQAGAAAEACQAEABADADQAEAEABAEQACADAAAGIgBAJQgCAFgDAEQgDAEgDAEIgYAaIAAABIAnAAIAAAJgAMDhfIAAgJIAiglIADgHQABgEAAgFIgBgGIgDgEIgDgCIgGgCQgGABgEACIgIAFIgGgGIAFgFIAFgCIAHgCIAHgCQAFAAAFACQAFABADADQADAEABAEQACAEAAAFIgCAJQgCAGgCADIgGAIIgYAaIAAABIAnAAIAAAJgALbhfIABhIIgCABIgEADIgCACIgIAHIgGgHIAXgRIAIAAIAABTgAJ7hfIAAhIIgBABIgCABIgEAEIgJAHIgFgHIAWgRIAIAAIAABTgAGuhfIAAg1IggAAIAAA1IgLAAIAAg+IA1AAIAAA+gAB9hfIAAhIIgCABIgBABIgDAEIgJAHIgGgHIAXgRIAIAAIAABTgAgdhfIAAgJIAbgeIAFgHIADgHQACgEAAgFIgBgGQAAgDgDgBIgEgCIgEgCQgHABgDACIgIAFIgHgGIAGgFIAFgCIAGgCIAIgCQAEAAAEACQAFABADADQADAEABAEQACADABAGIgCAJQgBAFgDAEQgDAEgEAEIgWAaIAAABIAmAAIAAAJgAkghfIAAgJIAiglIAEgHIABgJIgBgGIgDgEIgEgCIgGgCQgGABgEACIgIAFIgFgGIAEgFIAGgCIAGgCIAHgCIAKACIAIAEQADAEACAEQABAEAAAFIgBAJQgCAGgDADQgCADgEAFIgXAaIAAABIAmAAIAAAJgAlIhfIABhIIgCABIgBABIgEAEIgJAHIgFgHIAWgRIAIAAIAABTgAoUhfIAAg+IAKAAIAAA+gAqMhfIAAgZIgPAAIgQAZIgMAAIASgaQgHgCgEgFQgDgDAAgIQgBgJAGgFQAFgEALAAIAcAAIAAA+gAqniTQgDAEAAAEQAAAKAPAAIAPAAIAAgUIgRAAQgFAAgFACgArIhfIAAg+IAKAAIAAA+gAsqhfIAAg0IggA0IgNAAIAAg+IAJAAIAAAwIgBAEIAig0IAMAAIAAA+gAvqhfIAAg1IgfAAIAAA1IgLAAIAAg+IA1AAIAAA+gAy8hfIAAhKIgqAAIAABKIgKAAIAAhTIA+AAIAABTgAoTipQgCgDAAgDQAAgCACgDQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgArHipQgCgDAAgDQAAgCACgDQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAQACACAAADQAAAEgCACQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-139.5,-18.2,279,36.4), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AphFaIAAiTIAnAAIAAAQQAPgSATAAQAWAAANAQQAQAQAAAbQAAAbgQAQQgNAQgWABQgUgBgOgQIAAAvgAo0DtQgHAIAAALQAAALAHAIQAHAIAKgBQAKAAAGgGQAHgIgBgMQABgLgHgIQgGgGgKAAQgKAAgHAGgAmPE5IAAgpIggAAIAAApIgoAAIAAhyIAoAAIAAApIAgAAIAAgpIApAAIAABygArDE5IAAhyIBWAAIAAAhIguAAIAABRgAFyA4IA5hSQAsAiAyAAQAkAAAWgYQAUgXAEgrQglAjg4ABQhAgBgogkQgqgnAAhAQAAhIAygsQAwgrBMgBQAtAAAhAOQAeAMAaAaQA0AzAABwQAABtg0BAQg1BChgABQhXgBhCg0gAHxjqQgQARAAAaQAAAZARAQQARAQAcAAQAdAAAQgQQARgQAAgZQAAgagRgRQgSgRgcAAQgcAAgRARgAgpA4IA4hSQAtAiAxAAQAlAAAUgYQAVgXAEgrQglAjg3ABQhBgBgogkQgpgnAAhAQAAhIAxgsQAwgrBNgBQAtAAAhAOQAdAMAbAaQA0AzAABwQAABtg0BAQg2BChgABQhWgBhCg0gABWjqQgQARgBAaQAAAZARAQQASAQAcAAQAcAAARgQQAQgQAAgZQAAgagRgRQgSgRgcAAQgcAAgQARgAm9BkIAAhbICkh9QAegWANgTQANgSAAgTQAAgVgOgLQgMgNgXAAQgVAAgUAOQgSAMgbAfIhShFQAlgwAmgVQAqgYA9AAQBIAAAsAnQAtAnAAA+QAAAygaAkQgWAeg1AlIhLA0IC0AAIAABjgApzBkIAAlGIhJAQIgYheICAgkIBYAAIAAG4g");
	this.shape.setTransform(-8.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-80.8,-34.7,144.9,69.3), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADBBjQgTgGgUgPIAcgsQAKAJAUAFQARAGAMAAQAdAAAAgQQAAgRgcAAIgZAAIAAgrIAZAAQAXAAAAgRQAAgGgGgDQgHgFgLAAQgNAAgQAGQgQAGgJAIIgcgnQAjggA4AAQAoAAAXAPQAVAPABAYQgBAgggAOQAmAMAAAiQAAAcgXARQgZASgyAAQgeAAgTgGgAlGBMQgegdAAgvQAAgsAcgeQAegeArAAQAyAAAbAhQAYAdAAAvIAAAOIiGAAQAJAhAiAAQAYAAAVgUIAnAgQggApg3AAQgwAAgegdgAjcgQQgCgRgIgJQgKgKgOAAQgOAAgJAKQgKAJgCARIBFAAIAAAAgAoQBKQgegeAAgsQAAgrAegeQAfgfAuAAQA6AAAcAtIgvAiQgOgTgWAAQgTAAgMANQgLAMAAATQAAATALAOQAMANARAAQAMAAAKgGQAHgFAKgLIAvAjQgfAug6AAQgtAAgegfgAF/BZQgUgRAAgeQAAgfAVgPQAWgQAkAAQAcAAAUAIIAAgEQAAgggoAAQgbAAgdALIgOgyQAngQArAAQAzAAAYAZQAWAVAAArIAAByIhFAAIAAgVQgYAagkAAQgdAAgSgQgAG3AUQgIAHAAAMQAAAKAHAGQAGAFALAAQAQAAAKgJQAKgJgBgPIAAgJQgMgFgPAAQgPAAgJAHgAhSBkIAAiPIg6AAIAAg5IC7AAIAAA5Ig6AAIAACPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-55.9,-10.5,111.8,21.1), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlXBvQgegeAAgsQAAgrAegeQAfgfAvAAQA5ABAcAsIgvAhQgNgSgXAAQgTAAgLALQgLANAAAUQAAATALANQALAOASAAQALgBAKgFQAHgFAKgLIAvAjQgfAug6AAQgtAAgegfgAExCJIAAhkIhCBkIhBAAIAAjIIBEAAIAABkIBDhkIBBAAIAADIgABDCJIAAjIIBHAAIAADIgAicCJIAAjIIB3AAQAkAAASASQANANAAAUQAAAegeAOQASAGAJALQAKAMAAAVQAAAZgUAPQgTAPgkAAgAhXBcIAdAAQAaAAAAgTQAAgJgHgFQgHgFgNAAIgcAAgAhXAQIAYAAQAZAAAAgRQAAgHgGgFQgHgFgLAAIgZAAgADqheQgQgOgEgaIAlgHQAHAWARgBQARABAIgWIAlAHQgEAagQAOQgRAPgZAAQgZAAgQgPgABChRIAAg0IBJAAIAAA0g");
	this.shape.setTransform(-61,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-98.4,-14.2,74.8,28.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmDCgIAAgpIhpAAIgEApIg/AAIAAhiIATAAQAJgbAEgaQAFgfAAgxIAAgKICyAAIAACPIAYAAIgHBigAnHgVQgCAtgLAmIA1AAIAAhXIgoAAgAgrB2QgSgGgVgPIAcgsQALAJATAFQASAGALAAQAdAAAAgQQAAgRgcAAIgYAAIAAgrIAXAAQAYAAAAgRQAAgGgGgDQgHgFgLAAQgNAAgPAGQgQAGgJAIIgdgmQAkghA3AAQAoAAAXAPQAVAPAAAYQAAAfggAOQAmANAAAiQAAAdgYAQQgZATgxAAQgdAAgUgHgAvJBwQgYgKgYgVIAlgwQAfAfAqAAQAUAAAKgIQAKgHAAgLQAAgXgpAAIgcAAIAAg1IAbAAQAlAAAAgXQAAgKgJgHQgJgGgPAAQgRAAgTAHQgTAIgMALIgjgrQAsgsBAAAQArAAAcAUQAaAUAAAeQAAApgnASQAuAQAAAsQAAAjgbAWQgdAXgvAAQgpAAgegMgACSBsQgTgRAAgeQAAgfAVgQQAVgPAkAAQAZAAAXAHIAAgEQAAgfgoAAQgbAAgcALIgOgyQAngQAqAAQA0AAAYAZQAWAVAAAqIAABzIhGAAIAAgUQgXAZgkAAQgeAAgSgQgADLAnQgJAHAAAMQAAAKAHAGQAHAGALAAQAQAAAJgJQAKgKAAgPIAAgJQgNgFgOAAQgPAAgJAHgAr1BsQgTgRAAgeQAAgfAVgQQAVgPAkAAQAaAAAXAHIAAgEQAAgfgoAAQgbAAgdALIgOgyQAngQAqAAQA1AAAXAZQAWAVAAAqIAABzIhGAAIAAgUQgWAZglAAQgdAAgTgQgAq8AnQgIAHAAAMQAAAKAHAGQAHAGALAAQAPAAAKgJQAJgKAAgPIAAgJQgNgFgOAAQgPAAgJAHgAM/B3IAAjIIBGAAIAAA/IAiAAQAlAAAXARQAXASAAAhQAAAggWATQgVASglAAgAOFBGIAWAAQAbAAAAgWQAAgKgHgGQgHgFgNAAIgWAAgALUB3IAAhJIg6AAIAABJIhHAAIAAjIIBHAAIAABIIA6AAIAAhIIBFAAIAADIgAHrB3IAAhkIhDBkIhBAAIAAjIIBEAAIAABkIBDhkIBBAAIAADIgAipB3IAAhkIhDBkIhBAAIAAjIIBEAAIAABkIBDhkIBBAAIAADIgAGkhwQgQgOgEgaIAkgHQAIAVARAAQARAAAHgVIAlAHQgEAagQAOQgQAPgZAAQgZAAgQgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-101.8,-16,203.6,32.1), null);


(lib.k6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.k6();
	this.instance.parent = this;
	this.instance.setTransform(-74,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.k6_1, new cjs.Rectangle(-74,-76,148,152), null);


(lib.k5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.k5();
	this.instance.parent = this;
	this.instance.setTransform(-77,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.k5_1, new cjs.Rectangle(-77,-45,154,90), null);


(lib.k4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.k4();
	this.instance.parent = this;
	this.instance.setTransform(-79,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.k4_1, new cjs.Rectangle(-79,-88,158,176), null);


(lib.k3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.k3();
	this.instance.parent = this;
	this.instance.setTransform(-38,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.k3_1, new cjs.Rectangle(-38,-56,76,112), null);


(lib.k2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.k2();
	this.instance.parent = this;
	this.instance.setTransform(-49,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.k2_1, new cjs.Rectangle(-49,-38,98,76), null);


(lib.k1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.k1();
	this.instance.parent = this;
	this.instance.setTransform(-42,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.k1_1, new cjs.Rectangle(-42,-29,84,58), null);


(lib._img_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._img();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._img_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-63,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-63,-143,126,272), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("AnkiyIPJAAIAAFlIvJAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+A4QgQgRAAgYQAAgWAQgRQARgQAYAAQAYAAASARIgMAOQgOgOgQAAQgQAAgKAMQgKALAAAPQAAARAKALQAKALAQAAQAQAAAOgOIANANQgTATgZAAQgYAAgQgQgAEyBGIAAhaIgjAAIAAgSIBZAAIAAASIgjAAIAABagADoBGIAAhPIg3BPIgTAAIAAhsIATAAIAABPIA4hPIASAAIAABsgAB6BGIgLgaIg0AAIgLAaIgUAAIAxhtIARAAIAxBtgABCAbIAmAAIgTgrgAiaBGIgLgaIg0AAIgMAaIgTAAIAwhtIASAAIAwBtgAjSAbIAmAAIgTgrgAkgBGIAAguIg0AAIAAAuIgTAAIAAhsIATAAIAAAsIA0AAIAAgsIATAAIAABsgAC1hFIALgCQAEALAKAAQAJAAADgLIAMACQgBAKgHAGQgHAGgJAAQgWAAgDgWg");
	this.shape_1.setTransform(-0.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-49.4,-18.8,98.9,37.8), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4CCBD").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(-0.9,274.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvgEgWzgsXMAAABQ7QAAB4B4AAMAp3AAAQB4AAAAh4MAAAhQ7QAAh4h4AAMgp3AAAQh4AAAAB4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

	// dev
	this.instance_1 = new lib.dev_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(211,63);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({x:55},10,cjs.Ease.get(1)).wait(71).to({x:208},9,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-68.9,13.6,0.02,0.02,0,0,0,-2.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(10).to({scaleX:1.1,scaleY:1.1,x:-68.8},5).wait(10).to({scaleX:1,scaleY:1,x:-68.9},5).wait(11).to({x:-308.9},9,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// t4
	this.instance_3 = new lib.t4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-38.4,-60.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).to({alpha:1},10).wait(46).to({x:-278.4},9,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// t3
	this.instance_4 = new lib.t3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-62.2,-119.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({alpha:1},10).wait(51).to({x:-302.2},9,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// t2
	this.instance_5 = new lib.t2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-19.7,-161.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).to({alpha:1},10).wait(56).to({x:-259.7},9,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// t1
	this.instance_6 = new lib.t1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16.9,-200.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).to({alpha:1},10).wait(61).to({x:-256.9},9,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({alpha:1},10).wait(90).to({alpha:0},10).wait(1));

	// k
	this.instance_8 = new lib.k5_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1.6,-60,0.7,0.7,-106,0,0,0.6,-0.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-15,x:-105,y:-9.9},10,cjs.Ease.cubicOut).to({rotation:0,x:-125,y:0},40).to({rotation:15,x:-235},10,cjs.Ease.cubicIn).to({_off:true},1).wait(100));

	// k
	this.instance_9 = new lib.k4_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(3.5,-61,0.57,0.57,-140,0,0,0.4,0.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-15,x:-103,y:-164},10,cjs.Ease.cubicOut).to({rotation:0,x:-123,y:-174},40).to({rotation:30,x:-203,y:-254},10,cjs.Ease.cubicIn).to({_off:true},1).wait(100));

	// k
	this.instance_10 = new lib.k6_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(4.5,-57.9,0.64,0.64,44,0,0,0.3,-0.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:9.2,x:131,y:203},10,cjs.Ease.cubicOut).to({rotation:0,x:141,y:223},40).to({x:220,y:302.1},10,cjs.Ease.cubicIn).to({_off:true},1).wait(100));

	// k
	this.instance_11 = new lib.k3_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(2.4,-59.4,0.9,0.9,-23,0,0,0.2,-0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({regX:0.1,scaleX:1,scaleY:1,rotation:-5,x:81,y:-242},10,cjs.Ease.cubicOut).to({regX:0,regY:0,rotation:0,x:91,y:-262},40).to({rotation:15,x:134,y:-351},10,cjs.Ease.cubicIn).to({_off:true},1).wait(100));

	// k
	this.instance_12 = new lib.k2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(2.5,-60.5,0.98,0.98,61,0,0,0,-0.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,rotation:15,x:103,y:-71},10,cjs.Ease.cubicOut).to({rotation:0,x:123},40).to({rotation:-15,x:199,y:-55},10,cjs.Ease.cubicIn).to({_off:true},1).wait(100));

	// k
	this.instance_13 = new lib.k1_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(4,-60.4,1,1,116,0,0,-0.1,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).to({regX:0,regY:0,rotation:15,x:-55,y:-184},10,cjs.Ease.cubicOut).to({rotation:0,y:-204},40).to({rotation:-45,x:-160,y:-326},10,cjs.Ease.cubicIn).to({_off:true},1).wait(100));

	// img
	this.instance_14 = new lib._img_1();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(180));

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
	id: '58ACCCE361054608BBC772FB255D6CA9',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dev.png", id:"dev"},
		{src:"images/_img.jpg", id:"_img"},
		{src:"images/k1.png", id:"k1"},
		{src:"images/k2.png", id:"k2"},
		{src:"images/k3.png", id:"k3"},
		{src:"images/k4.png", id:"k4"},
		{src:"images/k5.png", id:"k5"},
		{src:"images/k6.png", id:"k6"}
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
an.compositions['58ACCCE361054608BBC772FB255D6CA9'] = {
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