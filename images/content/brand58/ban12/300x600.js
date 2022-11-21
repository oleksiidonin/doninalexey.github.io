(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.tel2 = function() {
	this.initialize(img.tel2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,300);


(lib.telShadow = function() {
	this.initialize(img.telShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,20);// helper functions:

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


(lib.telShadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.telShadow();
	this.instance.parent = this;
	this.instance.setTransform(-95,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.telShadow_1, new cjs.Rectangle(-95,-10,190,20), null);


(lib.t3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHyBiQgMgEgKgJQgJgJgGgPQgGgOAAgTQAAgSAFgNQAGgPAJgJQAHgIANgGQAMgFAOAAQAPAAALAFQAMAEAHAJQAJAIAFAQQAEANAAAWIAAAGIhcAAQABASALAIQAKAIAQgBIANgBIAMgDIAJgEIAFgEIAKAeIgHAEQgEACgIACQgGAEgJABQgKACgKAAQgMgBgPgEgAIjALQgBgKgCgCQgBgDgFgHIgIgEIgJgCQgKAAgIAHQgIAIgCANIA2AAIAAAAgACuBgQgNgHgIgLQgJgMgEgLQgFgQAAgMQAAgLAFgQQAEgLAJgMQAIgKANgHQANgGARAAQASAAAMAGQANAHAIAKQAKAMADALQAEANAAAOQAAAPgEANQgDALgJAMQgJALgNAHQgOAGgQABQgPgBgPgGgAC+gMQgFADgFAGQgEAEgCAJQgCAIAAAJQAAAJACAIQACAIADAGQAGAGAFAEQAGACAIAAQAHAAAHgCQAFgEAFgGQAEgGACgIQACgIAAgJQAAgJgCgIQgCgHgEgGQgGgGgEgDQgFgDgJAAQgJAAgFADgAhEBjQgIgDgHgGQgHgFgEgJQgEgIAAgLQAAgLAEgIQAEgHAHgHQAJgGAHgDQAMgEAIgBIAegEIAAgCQAAgLgHgFQgGgFgLAAQgFAAgGACIgKADIgOAJIgLgaIAHgEIAMgHIAPgEQAJgCAKAAQANAAAIADQALAEAFAGQAHAFAEALQAEAMAAAMIAABcIggAAIgCgLQgFAGgKAEQgIAFgMAAQgIgBgJgDgAgpAjQgLADgFAFQgFAGAAAIQAAAHAFAEQAFAEAKAAQAHAAAGgEQAGgCAGgFIAAgdgAjcBgQgKgGgJgLQgIgKgDgNQgEgOAAgPQAAgOAEgNQAEgNAJgKQAJgLALgGQAOgGAQAAQALAAAOAEIAAg3IAkAAIAADEIghAAIgCgLQgEAGgJAEQgKAEgJABQgQgBgLgGgAjGgMQgGADgGAHQgEAFgCAIQgDAGAAAJQAAAJACAIQACAHAEAIQADAFAIAFQAFACAJAAQAIAAAGgCQAHgEADgGIAAhFQgKgEgKAAQgLAAgFADgAl0BgQgMgGgJgMQgIgKgFgNQgEgOAAgOQAAgOAEgNQAFgNAIgKQAKgLALgGQANgGARAAQARAAANAGQAMAHAJAKQAIAKAFANQAEANAAAOQAAAOgEAOQgFANgIAKQgIALgNAHQgPAGgPABQgQgBgOgGgAlkgMQgGADgEAGQgDAEgEAJQgCAIAAAJQAAAJACAIQAEAJADAFQAEAFAGAFQAGACAIAAQAHAAAHgCQAHgFADgFQAEgGACgIQACgLAAgGQAAgGgCgLQgCgHgEgGQgEgFgGgEQgFgDgJAAQgJAAgFADgAGHBjIAAhSQAAgQgHgHQgHgJgMAAQgJgBgGAFQgHAEgGAGIAABkIglAAIAAiOIAiAAIABAMQAIgHAMgEQALgEALAAQANAAAHADQAKADAHAJQAHAGADAMQAEAKAAARIAABVgAA7BjIAAhwIgTAAIAAgeIATAAIAAgHQAAgOAEgKQADgIAHgIQAIgGAHgDQAIgDALAAQAOAAAIADIAKAEIgEAeIgIgCQgDgCgKAAQgIAAgFAFQgFADAAAMIAAAGIAfAAIAAAeIgfAAIAABwgAn+BjIhJjEIAoAAIAyCUIAxiUIAmAAIhFDEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_3, new cjs.Rectangle(-58.4,-10.2,116.9,20.5), null);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIIBHQgKgDgFgFQgIgHgDgHQgEgJAAgKQAAgMAEgHQADgIAIgFIAQgKIAUgFIAdgDIAAgDQAAgLgGgFQgFgFgMAAQgHAAgEABIgLAEIgNAJIgMgaIAHgGIANgFIAPgFQAJgCAKAAQAKAAALADQALAEAGAGQAIAIADAJQAEAKAAAPIAABaIgiAAIgBgKQgGAGgJAEQgLAEgJAAQgLAAgGgEgAIjAIQgNADgEAFQgFAHAAAFQAAAHAGAFQAFAEAKAAQAHAAAGgDQAHgCAFgFIAAgdgAA+BJIgQgGIgNgHIgHgGIARgcQAJAJAHAEQAJAFAPAAQALAAAHgDQAHgEAAgIQAAgGgGgFQgEgEgPAAIgNAAIAAgbIANAAQANAAAEgEQAFgFAAgHQAAgJgHgDQgEgDgLAAQgKAAgHAFQgHAFgHALIgZgQQAIgSAPgJQAOgIAVAAQAaAAAPAKQAPAMAAASQAAAIgEALQgGAJgLAEQANAEAGAIQAFAIAAAMQAAANgFAIQgGAJgIAFQgIAGgMACIgWACQgLAAgKgCgAhVBHQgKgDgFgFQgGgFgFgJQgEgJAAgKQAAgMAEgHQAEgIAHgFIARgKIATgFIAQgCIANgBIAAgDQAAgLgFgFQgGgFgLAAQgIAAgEABIgKAEIgIAFIgFAEIgNgaIAHgGIANgFIAPgFQAJgCAKAAQALAAALADQAKAEAHAGQAHAIAEAJQADAKAAAPIAABaIghAAIgCgKQgGAGgJAEQgLAEgJAAQgLAAgGgEgAg6AIQgMADgFAFQgEAHAAAFQAAAHAFAFQAGAEAJAAQAIAAAFgDQAIgCAEgFIAAgdgAleBHQgJgDgGgFQgHgHgDgHQgEgJAAgKQAAgLAEgIQAFgKAHgDQAIgGAIgEIATgFIAegDIAAgDQAAgLgGgFQgHgFgKAAQgJAAgDABIgKAEIgIAFIgFAEIgNgaIAIgGIALgFIAQgFQAIgCALAAQALAAALADQAJADAIAHQAHAIAEAJQAEAKAAAPIAABaIgiAAIgBgKQgIAHgIADQgKAEgKAAQgLAAgHgEgAlCAIQgMACgFAGQgEAHAAAFQAAAHAFAFQAFAEAKAAQAIAAAGgDQAHgDAEgEIAAgdgALXBHIgfgtIggAtIgnAAIA0hGIg0hHIApAAIAfAsIAggsIAmAAIgyBGIAzBHgAGpBHIAAg5Ig0AAIAAA5IglAAIAAiNIAlAAIAAA2IA0AAIAAg2IAlAAIAACNgAEHBHIAAhMIg3A2IAAAWIgkAAIAAiNIAkAAIAABMIA3g1IAAgXIAkAAIAACNgAjiBHIAAiNIBkAAIAAAfIg/AAIAABugAm3BHIgDhRIgdBRIgTAAIgfhRIgDBRIgiAAIAGiNIAkAAIAkBcIAhhcIAkAAIAGCNgAr/BHIAAiNIBKAAQAVAAANAKQAMAJAAASQAAAVgPAJQALAEAFAHQAGAHAAANQAAAMgGAJQgFAJgHAEQgIAFgIACQgJACgIAAgArcArIAmAAQAIAAADgEQAFgEAAgHQAAgPgQAAIgmAAgArcgNIAhAAQAJAAAEgGQACgEAAgGQAAgFgCgEQgEgDgJAAIghAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-76.8,-7.5,153.6,15), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AL5BeQgOgGgIgLQgHgLgGgOQgDgNAAgOQAAgOADgNQAGgOAHgJQAJgLANgGQANgGARAAQARAAANAGQAMAGAJALQAJAMAEALQAEANAAAOQAAAOgEANQgEAMgJANQgIALgNAGQgPAHgPAAQgQAAgOgHgAMJgNQgGACgEAHQgFAFgCAHQgCAIAAAJQAAAJACAIQACAGAFAIQAEAFAGAEQAGADAIAAQAHAAAGgDQAGgDAFgGQAEgHACgHQACgIAAgJQAAgJgCgIQgCgIgEgEQgGgHgFgCQgEgEgJAAQgJAAgFAEgACMBhQgIgBgJgDIgMgHIgIgHIASgcQAEAHAMAHQAKAFAOAAQALAAAHgEQAGgCAAgJQAAgIgFgDQgGgFgOAAIgNAAIAAgbIAOAAQAMAAAFgGQAEgEAAgGQAAgJgGgCQgIgEgHAAQgKAAgIAGQgHAEgGALIgagPQAKgUANgHQAPgIAVAAQAbAAAOAKQAOAKAAAUQAAAJgEAJQgEAIgMAFQANAEAGAHQAFAKAAAMQAAAMgFAJQgGAJgIAFQgKAFgKABQgKAEgMAAQgNAAgIgEgAgGBfQgLgFgIgIQgJgJgEgLQgFgJgCgOIgZAAIAAA6IgkAAIAAiOIAkAAIAAA1IAaAAQABgIAFgNQAGgKAHgIQAIgIAMgEQAJgFAQAAQARAAAMAGQAMAGAIALQAJAMAEALQADAOAAANQAAAQgDALQgEANgIAMQgIAKgNAHQgNAHgQAAQgOAAgMgGgAAGgNQgGACgCAHQgEAFgBAHQgCAIAAAJQAAAJACAIQABAHAEAHQACAFAGAEQAHADAHAAQAIAAAFgDQAGgEADgFQAFgHAAgHQACgIAAgJQAAgJgCgIQAAgHgFgFQgDgHgGgCQgEgEgJAAQgJAAgFAEgAoKBgQgMgGgJgIQgJgJgGgPQgFgMAAgUQAAgVAFgLQAFgNAKgLQAKgKALgDQALgFANAAQAPAAAHADQAKADAHAFQAEADAHAIIAGALIgbARQgDgFgIgIQgGgHgLAAQgMAAgJALQgIAJAAAXQAAAVAIAMQAJALARgBIAOgBIALgDIANgJIALAeIgSAJIgPAEQgKADgKAAQgMAAgOgFgAKSBhIAAg6Ig1AAIAAA6IgkAAIAAiOIAkAAIAAA1IA1AAIAAg1IAkAAIAACOgAGeBhIAAiOIBJAAQAWAAANAKQALALAAARQAAAUgPAJQAKADAHAIQAFAHAAANQAAAOgFAIQgEAGgJAHQgFAEgLACQgIADgIAAgAHBBEIAlAAQAIAAAEgEQAEgEAAgHQAAgPgQABIglAAgAHBALIAgAAQAKgBADgFQADgFAAgEQAAgEgDgFQgDgDgKAAIggAAgAFUBhIAAhNIg2A3IAAAWIglAAIAAiOIAlAAIAABMIA2g1IAAgXIAlAAIAACOgAi0BhIAAhvIglAAIgBAwIgDAYQgFASgKAKQgLALgVAAIgPAAIAAggIAJAAQAGAAAFgDQAFgDACgIQADgKAAgtIAAgpIBuAAIAACOgAlMBhIgig4IgSAAIAAA4IgkAAIAAiOIAkAAIAAA1IAIAAQAFAAADgDQAEgEABgEIAJgSQAFgNAIgFQAIgGANAAIAWAAIAAAfIgLAAQgFgBgFAEQgDADgDAGQgIARgEAGIAyBMgAphBhIgig4IgSAAIAAA4IgkAAIAAiOIAkAAIAAA1IAIAAQAFAAADgDIAGgIIAHgSQAHgNAHgFQAIgGANAAIAWAAIAAAfIgKAAQgGgBgFAEQgDADgDAGQgIARgFAGIAzBMgAtaBhIAAjFICBAAIAAAkIhbAAIAAAtIBLAAIAAAjIhLAAIAAAtIBhAAIAAAkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-85.9,-10,171.9,20.1), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbEfQgrgegYgtQgagtgLg4QgLg6AAg1QAAg0ALg6QALg4AaguQAYgsArgeQAqgdA9AAQA9AAAqAdQAqAdAaAtQAaAuAKA4QALA4AAA2QAAA3gLA4QgKA4gaAtQgaAugqAdQgpAdg+AAQg9AAgqgdgAAfjBQgTARgMAcQgLAZgHApQgFAkAAAuQAAArAGAmQAFAlAMAeQAMAdATARQASAQAbABQAZgBAUgQQASgQANgeQAMgdAGgmQAFgkAAgtQAAgugFgkQgGgngMgbQgNgcgSgRQgUgRgZAAQgbAAgSARgAo5EvIAAhJQAAgTADgSQACgSAIgUQAHgUAPgTQAPgUAVgPIB/hhQATgOANgOQANgOAHgLQAHgMADgOQADgNAAgRQAAgmgXgWQgXgVgqgBQgaAAgVAJQgVAIgRAMQgPAKgOANIgRARIg4hYQAGgHAQgOQAOgNAbgRQAagPAkgLQAkgMAsAAQAqAAAkANQAkANAZAYQAaAXAOAiQANAgAAArQAAA9gWAoQgWAngxAkIiABfQgRANgHAIQgJAJgFAJQgEAJAAAKIEPAAIAABrgAHyg3QgLgFgHgIQgIgIgDgKQgEgLAAgLQAAgKAEgKQADgKAIgJQAHgJALgEQALgFAPAAQAPAAAKAFQALAFAHAIQAIAIADAKQAEALAAAKQAAALgEALQgDAKgIAIQgGAIgMAFQgLAFgOAAQgPAAgLgFgAH7h+QgEAJAAAJQAAAKAEAIQAGAIAKAAQAMAAAEgIQAFgIAAgKQAAgKgFgIQgFgIgLAAQgKAAgGAIgAFJhNIDljgIAYAaIjlDhgAFoi/QgLgFgIgIQgGgHgEgLQgEgKAAgLQAAgLAEgKQAEgLAGgIQAIgIALgFQALgEAOgBQAPABALAEQALAFAHAIQAHAIAEALQAEAKAAAKQAAAMgEAKQgEALgHAHQgHAIgLAFQgLAFgPAAQgOAAgLgFgAF4kLQgFACgCADIgEAJQgBAEAAAFQAAAJAFAJQAGAIAKAAQAKAAAGgIQAFgJAAgJQAAgGgCgDQgBgFgCgEQgDgDgEgCQgEgDgFAAQgGAAgDADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-58.2,-31.6,116.4,63.2), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-126,-12,252,24.2), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-140.3,-15.8,280.6,31.6), null);


(lib.spitchmark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AyeLRQA8C7BwCjQByCkCZB5QCeB9C4BCQDBBGDNAAQDxAADbhcQDUhZClihQCkihBajRQBejXABjsQABjehFjCQhEi8iDiWQiBiTi0hhQi1hjjbgmQgDgsAHhGQAOiMA0h+QBJizCKh/QCsigEIhIQkOgylyBjQh0AfhwAqIhXAkQguARhKAmQiUBJiMBlQnCFAjMHM");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.spitchmark, new cjs.Rectangle(-120.3,-163.7,240.7,327.4), null);


(lib.price = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D22E26").s().p("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");
	this.shape.setTransform(-0.6,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkTKNQh/g2hihiQhihjg2h+Qg3iEAAiQQAAiPA3iEQA2h+BihjQBihhB/g2QCEg4CPAAQCQAACEA4QB/A2BiBhQBiBjA2B+QA3CEAACPQAACQg3CEQg2B+hiBjQhiBih/A2QiEA3iQAAQiPAAiEg3g");
	this.shape_1.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.price, new cjs.Rectangle(-70.8,-70.7,141.6,141.6), null);


(lib.nokia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADiEfIg2hjIlhAAIg2BjIjJAAIFEo9IDiAAIFDI9gAh1A/IDhAAIhwjPg");
	this.shape.setTransform(41.8,0,0.303,0.303);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbEfIAAo9IC3AAIAAI9g");
	this.shape_1.setTransform(24.7,0,0.303,0.303);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACBEfIlNkqIE0kTIDxAAIlFEMIFvExgAmCEfIAAo9IC2AAIAAETIAAEqg");
	this.shape_2.setTransform(9.2,0,0.303,0.303);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiUEoQhQAAgrgLQgtgLgcgdQgUgXgIgZQgKgfAAg3IAAjdQAAg4AKgfQAIgYAUgXQAcgcAtgMQArgLBQAAIEpAAQBQAAArALQAuAMAbAcQAUAXAIAYQAKAgAAA3IAADdQAAA3gKAfQgIAZgUAXQgbAdguALQgrALhQAAgAi4iTQgOACgGAHQgIAGgCAKQgEAKAAAZIAACuQAAAZAEALQACAKAIAHQAGAFAOADQANACAeAAIEbAAQAeAAANgCQAOgDAGgFQAIgHACgKQAEgLAAgZIAAiuQAAgZgEgKQgCgKgIgGQgGgHgOgCQgNgCgeAAIkbAAQgfAAgMACg");
	this.shape_3.setTransform(-16.3,0,0.303,0.303);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB0EfIlgmzIAAGzIivAAIAAo9IEuAAIFaGsIAAmsICvAAIAAI9g");
	this.shape_4.setTransform(-42.5,0,0.303,0.303);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nokia, new cjs.Rectangle(-55,-9,110,18), null);


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

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-192,-320,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B51F20").s().p("Egd/A8AMAAAh3/MA7/AAAMAAAB3/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-192,-384,384,768), null);


(lib.tel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFXBhIAAgYQATANAVAAQAVAAANgLQAMgMAAgUQAAgTgNgKQgNgLgYAAIgfABIAAhhIBfAAIAAAUIhJAAIAAA5IAQAAQAfAAASAQQARAOAAAcQAAAdgSARQgTARggAAQgbAAgNgIgAB9BeQgLgLgBgTQABgmAtgHIArgGQgBgigcAAQgaAAgTARIAAgXQAUgNAbAAQAxAAAAAzIAABbIgWAAIAAgWIgBAAQgOAZgdAAQgVAAgMgLgACoAjQgPADgIAFQgIAGAAAOQgBAKAIAGQAHAHANAAQAQAAALgLQAKgMABgSIAAgOgAjsBWQgTgUAAghQABgiASgTQAUgUAgAAQAgAAARATQASATAAAiQAAAhgTAUQgTAUgfAAQggAAgSgTgAjbgHQgMAOAAAaQAAAZAMAOQAMAOAWAAQAWAAAMgOQALgOAAgaQAAgagLgNQgMgOgWAAQgWgBgMAPgAA5BmIAAiLIAVAAIAACLgAACBmIg8hEIgBAAIAABEIgXAAIAAjOIAXAAIAACCIABAAIA6g/IAdAAIhBBDIBFBIgAlBBmIhlibQgEgGgCgGIgBAAQABAGAAAVIAACMIgXAAIAAjDIAeAAIBhCZIAIAMIABAAQgBgIgBgUIAAiJIAYAAIAADDgAA6hMQgEgFgBgGQABgGAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAGQAAAGgFAFQgEADgGAAQgGAAgEgDg");
	this.shape.setTransform(0,155.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.instance = new lib.telShadow_1();
	this.instance.parent = this;
	this.instance.setTransform(0,122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.instance_1 = new lib.tel2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-66,-148,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.tel, new cjs.Rectangle(-95,-148,190,314.1), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:24});

	// timeline functions:
	this.frame_239 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("ArACnIAAlNIWBAAIAAFNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:-46.6,y:333.6}).wait(226));

	// logoTxt
	this.instance = new lib.logoTxt();
	this.instance.parent = this;
	this.instance.setTransform(-173.3,334.2,1.939,1.939,0,0,0,-0.2,0.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:-0.1,x:-52},10,cjs.Ease.get(1)).wait(216));

	// logoZnak
	this.instance_1 = new lib.logoZnak();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-140.8,334.2,0.02,0.02,0,0,0,-2.5,2.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regX:-0.1,regY:0.4,scaleX:2.4,scaleY:2.4,x:-140.7,y:334.3},5).to({regY:0.3,scaleX:1.94,scaleY:1.94,y:334.2},5).wait(226));

	// nokia
	this.instance_2 = new lib.nokia();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-111.1,-346.9,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240));

	// t3_3
	this.instance_3 = new lib.t3_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-381.3,-103.7,1.435,1.435,0,0,0,-0.2,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).to({x:-83.7},15,cjs.Ease.cubicOut).wait(50).to({alpha:0},15).wait(1));

	// t3_2
	this.instance_4 = new lib.t3_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-354.9,-145.6,1.435,1.435,0,0,0,-0.2,-0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(154).to({_off:false},0).to({regX:-0.1,x:-57.1},15,cjs.Ease.cubicOut).wait(55).to({alpha:0},15).wait(1));

	// t3_1
	this.instance_5 = new lib.t3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-341.9,-194.8,1.435,1.435,0,0,0,-0.2,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149).to({_off:false},0).to({x:-44.2},15,cjs.Ease.cubicOut).wait(60).to({alpha:0},15).wait(1));

	// price
	this.instance_6 = new lib.price();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-64.4,52.7,0.024,0.024,0,0,0,2,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(134).to({_off:false},0).to({regX:-0.1,scaleX:1.21,scaleY:1.21},15,cjs.Ease.cubicOut).wait(75).to({alpha:0},15).wait(1));

	// t2
	this.instance_7 = new lib.t2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-389.9,-0.5,0.99,0.99,0,0,0,-0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({x:-109.8},15,cjs.Ease.cubicOut).wait(35).to({alpha:0},15).to({_off:true},1).wait(105));

	// t1_2
	this.instance_8 = new lib.t1_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-323.8,-53.4,0.99,0.99,0,0,0,-0.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({regX:0,x:-43.6},15,cjs.Ease.cubicOut).wait(40).to({alpha:0},15).to({_off:true},1).wait(105));

	// t1_1
	this.instance_9 = new lib.t1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-337.4,-87.8,0.99,0.99,0,0,0,-0.1,-0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({_off:false},0).to({x:-27.5},15,cjs.Ease.cubicOut).wait(55).to({alpha:0},15).to({_off:true},1).wait(105));

	// tel
	this.instance_10 = new lib.tel();
	this.instance_10.parent = this;
	this.instance_10.setTransform(281.5,205.6,0.936,0.936,0,0,0,0.1,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({_off:false},0).to({regX:0,regY:0,x:104.5,y:205.5},15,cjs.Ease.cubicOut).wait(160).to({regX:0.1,regY:0.1,x:282.4,y:205.6},15,cjs.Ease.cubicIn).wait(1));

	// spitchmark
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AANgbQgNAbgMAc");
	this.shape.setTransform(-59.9,-111.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("ABqiyQh+CmhVC/");
	this.shape_1.setTransform(-50.6,-126.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AEAlNQlVEdiqF+");
	this.shape_2.setTransform(-35.7,-141.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("AG1nIQh0A+huBPQm8E8jLHI");
	this.shape_3.setTransform(-17.5,-154.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,1).p("AKBodQhIAXhHAaIhXAjQguARhJAmQiSBIiLBkQm8E8jLHI");
	this.shape_4.setTransform(2.9,-162.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4,1,1).p("ANVpHQieAMi4AxQhzAehuAqIhXAkQguARhJAlQiSBJiLBkQm8E7jLHI");
	this.shape_5.setTransform(24.1,-166.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AN9oXQAzgSA3gPQkLgyluBiQh0AehuAqIhXAkQguARhIAlQiSBJiMBjQm8E8jLHI");
	this.shape_6.setTransform(38.7,-167.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(4,1,1).p("AIPkqQATgVAWgUQCrifEEhGQkLgyluBiQh0AehuAqIhXAkQguARhIAlQiSBJiMBjQm8E8jLHI");
	this.shape_7.setTransform(38.7,-167.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(4,1,1).p("AE4BzQARhOAehJQBJixCIh+QCrifEEhGQkLgyluBiQh0AehuAqIhXAkQguARhIAlQiSBJiMBjQm8E8jLHI");
	this.shape_8.setTransform(38.7,-167.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(4,1,1).p("AHqGGQhgghhogRQgEgsAIhGQANiKA0h8QBJixCIh+QCrifEEhGQkLgyluBiQh0AehuAqIhXAkQguARhIAlQiSBJiMBjQm8E8jLHI");
	this.shape_9.setTransform(38.7,-167.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(4,1,1).p("ANNJCQhKg5hVguQi0hijYglQgEgsAIhGQANiKA0h8QBJixCIh+QCrifEEhGQkLgyluBiQh0AehuAqIhXAkQguARhIAlQiSBJiMBjQm8E8jLHI");
	this.shape_10.setTransform(38.7,-167.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(4,1,1).p("AQrL1Qg6hyhVhhQiAiSiyhgQi0hijYglQgEgsAIhGQANiJA0h9QBJixCIh+QCrifEEhGQkLgyluBiQhzAehvAqIhWAkQguARhJAlQiSBJiLBjQm9E9jLHH");
	this.shape_11.setTransform(45.4,-150);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(4,1,1).p("ARmPOQgNijg0iUQhDi6iBiVQiAiSiyhgQi0hgjYgmQgEgsAIhFQANiKA0h+QBJiwCIh/QCrieEEhHQkLgyluBjQhzAehvAqIhWAjQguARhJAmQiSBIiLBkQm9E9jLHG");
	this.shape_12.setTransform(51.3,-128.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(4,1,1).p("AQ7SbQAriWABieQABjchFjAQhDi7iBiUQiAiRiyhgQi0hijYglQgEgsAIhGQANiKA0h9QBJixCIh+QCrifEEhGQkLgyluBiQhzAehvAqIhWAkQguARhJAlQiSBJiLBjQm9E9jLHI");
	this.shape_13.setTransform(51.5,-107.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(4,1,1).p("AOLVPQBLhnAzh2QBcjVACjqQABjbhFjBQhDi6iBiUQiAiSiyhgQi0hhjYgmQgEgsAIhFQANiKA0h+QBJiwCIh/QCrieEEhHQkLgyluBjQhzAehvAqIhWAjQguARhJAmQiSBIiLBkQm9E9jLHH");
	this.shape_14.setTransform(51.5,-89.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(4,1,1).p("AIyXsQAHgEAHgEQBvhFBfhdQChifBajPQBcjVACjqQABjbhFjBQhDi5iBiVQiAiSiyhgQi0hhjYgmQgEgsAIhFQANiKA0h+QBJiwCIh/QCrieEEhHQkLgyluBjQhzAehvAqIhWAjQguARhJAmQiSBIiLBkQm9E9jLHH");
	this.shape_15.setTransform(51.5,-74);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACTY5QCGgWCAg2QDRhYCkifQChifBajPQBcjVACjqQABjbhFjBQhDi5iBiVQiAiSiyhgQi0hhjYgmQgEgsAIhFQANiKA0h+QBJiwCIh/QCrieEEhHQkLgyluBjQhzAehvAqIhWAjQguARhJAmQiSBIiLBkQm9E9jLHH");
	this.shape_16.setTransform(51.5,-66.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(4,1,1).p("AkiYnQB3AZB8AAQDuAADahbQDRhYCkifQChifBajPQBcjVACjqQABjbhFjBQhDi5iBiVQiAiSiyhgQi0hhjYgmQgEgsAIhFQANiKA0h+QBJiwCIh/QCrieEEhHQkLgyluBjQhzAehvAqIhWAjQguARhJAmQiSBIiLBkQm9E9jLHH");
	this.shape_17.setTransform(51.5,-65.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(4,1,1).p("AqoWFQBxBJB+AuQC/BEDLAAQDuAADahbQDRhYCkifQChifBajPQBcjVACjqQABjbhFjBQhDi5iBiVQiAiSiyhgQi0hhjYgmQgEgsAIhFQANiKA0h+QBJiwCIh/QCrieEEhHQkLgyluBjQhzAehvAqIhWAjQguARhJAmQiSBIiLBkQm9E9jLHH");
	this.shape_18.setTransform(51.5,-65.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(4,1,1).p("Av2ROQBmCICFBpQCcB7C2BCQC/BEDLAAQDuAADahbQDRhYCkifQChifBajPQBcjVACjqQABjbhFjBQhDi5iBiVQiAiSiyhgQi0hhjYgmQgEgsAIhFQANiKA0h+QBJiwCIh/QCrieEEhHQkLgyluBjQhzAehvAqIhWAjQguARhJAmQiSBIiLBkQm9E9jLHH");
	this.shape_19.setTransform(51.5,-65.6);

	this.instance_11 = new lib.spitchmark();
	this.instance_11.parent = this;
	this.instance_11.setTransform(46.9,-65.6,0.99,0.99,0,0,0,0.1,-0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},75).to({state:[{t:this.instance_11}]},15).to({state:[]},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).wait(75).to({alpha:0},15).to({_off:true},1).wait(105));

	// bgImg
	this.instance_12 = new lib.bgImg_1();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192,-384,384,768);


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
	this.instance.setTransform(150.2,300.1,0.781,0.781,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '69E4571D91DD4D889AADBB2DE5D6C6F5',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/tel2.png", id:"tel2"},
		{src:"images/telShadow.png", id:"telShadow"}
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
an.compositions['69E4571D91DD4D889AADBB2DE5D6C6F5'] = {
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