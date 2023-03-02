(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,552);


(lib.flower = function() {
	this.initialize(img.flower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,70);// helper functions:

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


(lib.wog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG5DDQgngRgegcQgdgcgRgmQgQgoAAgsQAAgrAQgoQASgnAegbQAdgeAogQQAqgPAtAAQBFAAA0AfQAwAeAcA3IhmAqQgOgagXgPQgZgQghAAQgwAAgfAgQgfAgAAAtQAAAyAcAeQAfAgA1ABQAmAAAcgTQAagRAFgZIiBAAIAAhTIDsAAQAJAxgLAtQgLArgcAhQgdAigqATQgrATgzAAQguAAgrgQgAgaDDQgogRgegdQgegbgRgmQgQgpAAgrQAAgrAQgoQARgmAegcQAegeAogPQAogQAuAAQAtAAAqAQQAoAPAeAeQAeAcARAmQAQAoAAArQAAArgQApQgRAmgeAbQgeAdgoARQgqAQgtAAQguAAgogQgAgQhNQgfAgAAAtQAAAtAfAgQAeAgAuAAQAtAAAgggQAfggAAgtQAAgtgfggQgggggtAAQguAAgeAggAl7DCQgRgQgIggIgQhHQgQhFgGglIgDAAQgFAkgRBGIgRBHQgGAggTAQQgSARgbAAQgdAAgSgQQgRgRgLggIhulcIB7AAIAqCZIAKAtQAHAmADAaIAEAAQACgbAIglQACgPAHghIAiiWIBqAAIAiCWIALAwQAGAlADAbIAEAAQADgaAHgmQAGgdAEgQIApiZIB7AAIhuFcQgJAggTARQgRAQgcAAQgcAAgTgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-21.1,148,42.2);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E78B54").s().p("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BgPQgDhrgBhwQAAgNAOgBIAlAAQAOgBAAAOIABBIQAAAEACABQADABADgDQArgqAkgpQAIgIAKABIArADQAJABACAFQACAFgHAHQgiAjgsAqQgFAFADAEQAvBDAtA4QAFAGgCAFQgCAFgHACIguAKIgFABQgIAAgFgHgAP7lxIgigCQgOgBABgOIAFhIQAAgFgDgBQgCgBgEAEQgnAygRAYQgGAIgKABIglACQgOABAAgOQgEhBgChZQAAgHADgEQAEgDAHgBIAhgBQAPgBAAAOIACBMQAAAEADABQADABADgEQAXghAkgvQAGgIALABIAmADQANABAAAOQgBBQgEBKQgBAOgNAAIgBAAgAH3l7QgigzgHgNQgEgGgGAEIgOALQgFADABAHIACAgQAAANgOAAIghAAQgOAAABgOQAChZgCg9QgBgOAOgBIAegBQAPAAAAAOIAAApQgBAEADABQACABAEgDQAYgWAfgfQAIgHAKABIAjAEQAJABABAFQACAFgGAHIgyAwQgEAEADAFQAZAnAlAtQAFAGgBAFQgCAFgIACIgpAHIgEABQgIAAgFgIgALkl3QgEgEgBgGQgDgkADgrQABgEgDgBQgCgBgEADQgbAhggAxQgGALgLgDIgkgIQgMgCAAgMQgBhWADg+QABgOANABIAhACQAOABgBAOQgDAjAAAmQAAAFACABQADAAADgEQAWggAog1QAGgJAMACIAkAEQANACgBAUIgDBOQAAAgADAhQABANgOACIgjADIgCAAQgFAAgDgCgADgl1IgygBQgOAAAAgOIADiYQAAgOAOAAIAjABQAPABgCAOIgCAoQgBAIAIgBIApAAQAgAAAUAPQATAQAAAbQAAAcgSAPQgRAPggABIggABIgTAAgADknCQgGAAgBAGIAAAVQAAAGAHAAIAfAAQAJAAAFgDQAEgEAAgKQAAgKgEgEQgEgDgKAAIgfABgAiXl1QgegDgBgbQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAIgDADQgZAegjAAQgkAAgUgPQgUgPAAgYQAAgcAWgMQATgKAxgFQAYgCAIgEQAJgDAAgIQAAgPgjAAQgSAAgFAIQgEAGgDACQgDADgGAAIgjAAQgGAAgEgDQgEgEABgHQAEgaAbgNQAYgMAnAAQApAAAWAUQAVASAAAhQAAAuABAOQAAAGAFAAIAFAAQAOgBAAAOIgBAYQAAANgNABIgbAAgAjGnJIgaAEQgTACgHAEQgIAFAAAJQAAAPAYAAQAUAAAMgLQAMgLAAgRIgCAAIgGAAgAn3mEQgbgOgEgbQgBgHAEgEQAEgEAHAAIAjAAQAGAAADADQADADADAGQADAHAHADQAHADAMAAQAhAAAAgPQAAgOgWAAIgIAAQgOABgBgOIAAgLQgBgOAMAAIAMAAQALAAAGgDQAFgEAAgHQAAgPgdAAQgaAAgIANQgDAGgDACQgDADgGAAIgigDQgHgBgDgEQgEgEACgHQAOgzBOAAQArAAAaAOQAbAPAAAaQAAAYgXAMQgGADAGAEQAXAMAAAYQAAAagaAOQgYAOgqAAQgqAAgZgPgArhmNQgcgXAAgsQAAgsAegcQAegbAxAAQAvAAAcAaQAaAaAAAsQAAAqgcAZQgcAZgxAAQgyAAgbgWgAqyn1QgLALAAAXQAAAtAoAAQATAAALgMQAMgNAAgWQAAgWgLgLQgLgKgTAAQgTAAgLALgAOHpEQgQgIgGgUQgCgGAEgFQADgEAHAAIAUgCQAGAAADADIAGAIQADAGALAAQARAAAEgGIAGgJQAEgDAFAAIAaAAQAIAAADADQAEAEgBAGQgNAqg6AAQgcAAgQgJg");
	this.shape.setTransform(2.4,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF1E4").s().p("Ar0LSIlEAAQgggBgbgNQgNgGgOgKQgZgSgTgZQgfgqgOg9QgIgjgBgjIAAzOQAAhlA2hIQA3hIBLAAMAhxAAAQBLAAA2BIQA3BIgBBlIAATOQABBlg3BIQg2BIhLABI4CAAIBsEWg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-126.4,-100,252.9,200), null);


(lib.palm_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("ABVCvQgTgPgCgYQgIhQg4g7Qg3g7hPgRQgYgGgKgTQgJgSAGgWQAGgVARgNQATgNAZAFQBxAYBOBbQBNBZAKB2QADAZgQAOQgPANgWAAQgXAAgQgNg");
	this.shape.setTransform(6.3,0,0.678,0.678);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("ACXBKQiYg1ijARQgZACgPgPQgNgPAAgVQAAgXANgQQAPgTAZgDQCxgSCnA6QAXAIAKAWQAJASgGAWQgGAVgRALQgLAHgNAAQgJAAgJgDg");
	this.shape_1.setTransform(-3.4,6.8,0.678,0.678);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.palm_right, new cjs.Rectangle(-18.1,-12.8,36.3,25.6), null);


(lib.palm_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("AhLClQgKgJAAgPQgHgCgGgFQgMgLgBgRQgChJAXhEQAXhDAvg6QAKgOAOABQAMAAALALQALALACAOQACARgLANQghArgRA2QAegiAsgTQAPgHAPAHQAOAFAIAOQAHAMgDANQgDAOgQAGQgrATgbAjQgcAlgEAuQgBARgNAKQgLAJgPAAQgQAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.palm_left, new cjs.Rectangle(-11.2,-17.4,22.4,34.8), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BC53F").s().p("Ah3gYQgOgcAAgfQAAg4AognQAngnA3AAQA3AAAnAnQAnAnAAA4QAAAggNAbIh4Dyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-21.8,26.8,43.7);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjPjQQgYgyARg0QATg0AygZQAwgZA1ATQAzARAZAyICqFYQAUAmAAArQAAAsgUAmIhsDdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-40.2,44.3,80.4);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjPjQQgZgyATg0QARg0AygZQAygZA1ATQAzARAZAyICqFYQATAmAAArQAAAsgTAmIhuDdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-40.2,44.5,80.4);


(lib.mustache = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AHTFKQgegPgagcQgvgzghhkIgahTQgQgxgQgfQgshag4gWQgogPguABQg1AAggAXIgBACIgBgBIAAABIgBgCQgggXg1AAQgugBgoAPQg3AWgtBaQgQAfgQAxIgaBTQghBkgvAzQgaAcgeAPQgjASgjgCQgmgCgbgaQgcgbAIggQAWAcAsgFQArgEAagdQAWgYAKgnQAFgVAHgxQAPiDAoiEQANgqANgbQAQgkAYgaQAugyBRgNQBTgOA9AjQAhATARAVQATgVAggTQA9gjBTAOQBRANAvAyQAXAaARAkQAMAbANAqQAoCEAQCDQAGAxAFAVQALAnAVAYQAaAdArAEQAsAFAWgcQAIAggcAbQgbAagmACIgGAAQgfAAghgQg");
	this.shape.setTransform(-0.4,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1CFA8").s().p("AHUFLQgfgQgagcQgwg0glheIgdhQQgSgvgRgfIgihGQgZgogfgMQgmgPgvABQg1ABggAWIgBADIgBgBIAAABIgBgDQgggWg1gBQgvgBgnAPQg4AWgsBaQgQAfgQAxQgJAbgRA4QghBkgvAzQgaAcgfAQQgiARgjgCQglgBgcgbQgcgbAIggQAWAcAsgEQArgFAagcQAWgZAKgmQAFgVAHgxQAQiHAoiBQAMgqANgaQAQglAXgZQAvgyBRgOQBTgOA9AkQAgASASAVQATgVAggSQA9gkBTAOQBRAOAvAyQATAWAGApQAIA/ACAIQAsCSAQCDQAEAeAUAfQAMASAhAlQAZAcAsAFQAsAEAWgcQAIAggcAbQgcAbglABIgGAAQggAAgfgPg");
	this.shape_1.setTransform(0.4,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mustache, new cjs.Rectangle(-62.8,-35.5,125.6,71.1), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("Ag3BFQgogTgXgpQgNgVAXgNQAXgMANAWQAQAbAZAKQAYAKAXgIQAZgHAPgUQAQgXgBgfQgBgaAaABQAbABABAZQACAvgZAlQgbAngsALQgQAFgPAAQgbAAgbgOg");
	this.shape.setTransform(-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1CFA8").s().p("Ag4BFQgngTgYgpQgMgVAXgNQAXgMANAWQAPAaAaALQAYAKAXgIQAZgHAPgUQAQgXgBgfQgBgaAaABQAbABABAaQACAugaAlQgaAngsALQgQAFgPAAQgbAAgcgOg");
	this.shape_1.setTransform(0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(-12.5,-8.6,25,17.3), null);


(lib.logo_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNhmQgMgZAJgaQAJgaAXgMQAZgNAaAJQAaAJAMAZIBVCqQAJATAAAVQAAAWgJATIg2BtgAi/hmQgMgZAJgaQAJgaAYgMQAZgMAaAIQAaAJAMAZIBUCqQAJATAAAVQAAAWgJATIg1Btg");
	this.shape.setTransform(-4.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8BC53F").s().p("Ag7gLQgGgOAAgQQAAgbATgUQATgTAbAAQAbAAAUATQATAUAAAbQAAAQgHAOIg7B3g");
	this.shape_1.setTransform(17.8,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_static, new cjs.Rectangle(-24.5,-19.9,49,39.9), null);


(lib.logo_globino = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMA2IAAhbIgzAAIAAgQIB/AAIAAAQIgzAAIAABbg");
	this.shape.setTransform(17.4,-7.4,0.054,0.054);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2A2IAAhaIgpBaIgXAAIgqhbIAABbIgZAAIAAhrIAnAAIAnBVIAmhVIAmAAIAABrg");
	this.shape_1.setTransform(18.3,-7.4,0.054,0.054);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmGBKQABj2Aij1ID7gzQgZC1gHC3IERg4QgGirgYiwID7gzQAiDpgBD2QAAD2gjD8Ij8AzQAbi7AGi8IkRA4QAGC1AZCxIj8AyQghjuAAj3g");
	this.shape_2.setTransform(9.7,-2.6,0.054,0.054);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AldGXQhWkMBlkUQBVjpDVh9QCFhPCZgVQBQgNA1gKIAHgBIAAPRIj6AyIAArAQhPANhBAxQhwBTgKCXQgLCeAxCTQAYBKAaArIjNDHQg/hPgriHg");
	this.shape_3.setTransform(-10.9,1.8,0.054,0.054);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkyF0QiAivAAkEQAAikBkhuQBvh4DfgtQDhgtBuBMQBkBFAAClQAAEEiADhQiCDnixAjQgcAGgcAAQiNAAhtiUgAAAj4QhiAUgrAvQgiAmAAA6QAACPA6BpQA4BkA9gNQA+gMA4h6QA6iAAAiQQAAg6gigYQgagSguAAQgeAAgoAIg");
	this.shape_4.setTransform(14.7,-3.7,0.054,0.054);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmXDKQAAhyA0jPQAwjBArhXIECg0QiOHQAAB5QAABWAiAeQAoAkBlgVICDgaIAArTID6gyIAAPRIl9BNQhMAPg/AAQknAAAAlNg");
	this.shape_5.setTransform(4.4,-1.8,0.054,0.054);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkyI4QiAjHAAlVQAAlMBkidQBjiaDrgwIFRhDIAAD+IlRBEQhwAWgjAlQg1A4AGCXQBuhdCCgaQDBgnBlBOQBfBJAAChQAAD2iADWQiCDaixAjQgcAGgbAAQiSAAhpijgAAAABQhiAUgrAvQgiAmAAA6QAACBA6BcQA4BZA9gNQA9gMA4hvQA7h0AAiBQAAg6gigYQgagRguAAQgeAAgoAHg");
	this.shape_6.setTransform(-0.7,-1.8,0.054,0.054);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AioHsQhNglg9hTQiAivAAkDQAAilBkhtQBvh5DfgtQDggtBvBMQBkBGAACkQAAEEiADiQiCDmixAjQgaAGgaAAQg8AAg4gcgAAAj4QhiAUgrAvQgiAmAAA6QAACPA6BpQA4BkA9gNQA9gMA4h6QA7iAAAiQQAAg6gigXQgagSguAAQgfAAgnAHg");
	this.shape_7.setTransform(-5.8,0.4,0.054,0.054);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlmpGILNiQIgaEiImlBVIAAQAIkOA2g");
	this.shape_8.setTransform(-14.2,1.2,0.054,0.054);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgUoBG2QqZkpoqocQqqqZnKvWQnJvVjIzJQimv/Cys6QCzs5IIpkQI7qfOolmQOolmSeAAQSfAAOoFmQOoFmI7KfQIIJkCzM5QCzM6inP/QjITJnJPVQnKPWqqKZQoqIcqZEpQqZEoqQAAQqQAAqYkogEgaQhDcQtID3o4HsQpyIdj8MhQkUNuC8SDQDNToHZPLQGmNkJmJXQIiIUKIESQJGD2I0AAQI1AAJGj2QKHkSIjoUQJmpXGmtkQHZvLDNzoQC8yDkUtuQj8shpxodQo5nstIj3QsAjjuRAAQuQAAsADjg");
	this.shape_9.setTransform(0,0,0.054,0.054);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D02C1E").s().p("EgR6BDKQqIkSoioUQpmpXmmtkQnZvMjNznQi8yDEUtvQD8sgJyodQI4nsNIj3QMAjjOQAAQORAAMADjQNID3I5HsQJxIdD8MgQEUNvi8SDQjNTnnZPMQmmNkpmJXQojIUqHESQpGD2o1AAQo0AApGj2g");
	this.shape_10.setTransform(0,0,0.054,0.054);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_globino, new cjs.Rectangle(-23.7,-26,47.6,52), null);


(lib.flower_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.flower();
	this.instance.parent = this;
	this.instance.setTransform(-36,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower_1, new cjs.Rectangle(-36,-35,72,70), null);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("AhrBsQgsgtAAg+QAAg/AsgsQAtgtA+AAQA/AAAsAtQAtAsAAA/QAAA+gtAtQgsAsg/AAQg+AAgtgsg");
	this.shape.setTransform(-0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7F2").s().p("AgGDmQhfgDhChFQgvgygLhAIgBAAQgEgZAAgYQADhgBFhBQBGhCBeADQBfADBCBFQAwAzALA/IAAAAQAFAZgBAZQgCBfhGBBQhCA/haAAIgIAAgAhvhqQgsAsAAA+QAAA/AsAtQAtAsA/AAQA+AAAsgsQAtgtAAg/QAAg+gtgsQgsgtg+AAQg/AAgtAtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(-23,-23,46.1,46), null);


(lib.body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.body();
	this.instance.parent = this;
	this.instance.setTransform(-72,-276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_1, new cjs.Rectangle(-72,-276,144,552), null);


(lib.bg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3, new cjs.Rectangle(-150,-300,300,600), null);


(lib.logo_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApGiBIgBgCIABgCIACgBIACABIABACIgBACIgCABIgCgBg");
	var mask_graphics_1 = new cjs.Graphics().p("ApLhIQgOgOAAgTQAAgTAOgOQAOgOATAAQAUAAANAOQAOAOAAATQAAATgOAOQgNAOgUAAQgTAAgOgOg");
	var mask_graphics_2 = new cjs.Graphics().p("ApQgPQgbgaAAgmQAAgmAbgaQAbgbAlAAQAmAAAbAbQAaAaAAAmQAAAmgaAaQgbAagmAAQglAAgbgag");
	var mask_graphics_3 = new cjs.Graphics().p("ApiAdQgngmAAg4QAAg4AngoQAognA4AAQA4AAAoAnQAnAoAAA4QAAA4gnAmQgoAog4AAQg4AAgogog");
	var mask_graphics_4 = new cjs.Graphics().p("ApiBmQg1g1AAhJQAAhLA1g0QA0g1BLAAQBKAAA1A1QA0A0AABLQAABJg0A1Qg1A0hKAAQhLAAg0g0g");
	var mask_graphics_5 = new cjs.Graphics().p("ApjCfQhChCAAhdQAAhcBChCQBBhBBdAAQBdAABCBBQBBBCAABcQAABdhBBCQhCBBhdAAQhdAAhBhBg");
	var mask_graphics_6 = new cjs.Graphics().p("ApkC+QhPhPAAhvQAAhuBPhPQBOhPBwAAQBvAABPBPQBPBPAABuQAABvhPBPQhPBPhvAAQhwAAhOhPg");
	var mask_graphics_7 = new cjs.Graphics().p("AplDeQhchcAAiCQAAiBBchcQBchbCCAAQCCAABbBbQBcBcAACBQAACChcBcQhbBbiCAAQiCAAhchbg");
	var mask_graphics_8 = new cjs.Graphics().p("ApmD9QhphpAAiUQAAiTBphpQBphpCUAAQCVAABpBpQBoBpAACTQAACUhoBpQhpBpiVAAQiUAAhphpg");
	var mask_graphics_9 = new cjs.Graphics().p("ApnEdQh2h2AAinQAAimB2h2QB2h2CnAAQCnAAB2B2QB0B2AACmQAACnh0B2Qh2B2inAAQinAAh2h2g");
	var mask_graphics_10 = new cjs.Graphics().p("AplE8QiDiDAAi5QAAi4CDiDQCDiDC5AAQC6AACBCDQCDCDAAC4QAAC5iDCDQiBCDi6AAQi5AAiDiDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-58.4,y:-13.5}).wait(1).to({graphics:mask_graphics_1,x:-60.2,y:-15.3}).wait(1).to({graphics:mask_graphics_2,x:-62,y:-17.1}).wait(1).to({graphics:mask_graphics_3,x:-65,y:-20.1}).wait(1).to({graphics:mask_graphics_4,x:-66.4,y:-20.5}).wait(1).to({graphics:mask_graphics_5,x:-67.8,y:-19.3}).wait(1).to({graphics:mask_graphics_6,x:-69.2,y:-15.5}).wait(1).to({graphics:mask_graphics_7,x:-70.6,y:-11.8}).wait(1).to({graphics:mask_graphics_8,x:-72,y:-8}).wait(1).to({graphics:mask_graphics_9,x:-73.4,y:-4.3}).wait(1).to({graphics:mask_graphics_10,x:-74.5,y:-0.3}).wait(11));

	// p1
	this.instance = new lib.p1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-107.7,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// Слой_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_2 = new cjs.Graphics().p("AmTiCIgBgCIABgCIACgBIACABIABACIgBACIgCAAIgCAAg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AmYhJQgOgOAAgTQAAgUAOgNQAOgOATAAQATAAAOAOQAOANAAAUQAAATgOAOQgOAOgTAAQgTAAgOgOg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AmdgQQgbgaAAgmQAAgmAbgaQAagbAmAAQAmAAAaAbQAbAaAAAmQAAAmgbAaQgaAagmAAQgmAAgagag");
	var mask_1_graphics_5 = new cjs.Graphics().p("AmvAcQgngnAAg4QAAg3AngoQAogoA4AAQA4AAAnAoQAoAoAAA3QAAA4goAnQgnAng4AAQg4AAgogng");
	var mask_1_graphics_6 = new cjs.Graphics().p("AmwBlQg0g1AAhJQAAhLA0g1QA1g0BKAAQBLAAA0A0QA1A1AABLQAABJg1A1Qg0A0hLAAQhKAAg1g0g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AmxCfQhBhCAAhdQAAhcBBhCQBChBBdAAQBdAABCBBQBBBCAABcQAABdhBBCQhCBBhdAAQhdAAhChBg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AmxC+QhPhPAAhvQAAhuBPhPQBOhPBwAAQBvAABPBPQBNBPAABuQAABvhNBPQhPBPhvAAQhwAAhOhPg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AmyDeQhchcAAiCQAAiBBchcQBbhbCCAAQCCAABbBbQBcBcAACBQAACChcBcQhbBbiCAAQiCAAhbhbg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AmzD9QhphpAAiUQAAiTBphpQBphpCUAAQCVAABnBpQBpBpAACTQAACUhpBpQhnBpiVAAQiUAAhphpg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Am0EdQh2h2AAinQAAimB2h2QB2h2CnAAQCmAAB1B2QB2B2AACmQAACnh2B2Qh1B2imAAQinAAh2h2g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AmyE8QiDiDAAi5QAAi4CDiDQCCiDC6AAQC4AACDCDQCDCDAAC4QAAC5iDCDQiDCDi4AAQi6AAiCiDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_2,x:-40.5,y:-13.6}).wait(1).to({graphics:mask_1_graphics_3,x:-42.3,y:-15.4}).wait(1).to({graphics:mask_1_graphics_4,x:-44.1,y:-17.2}).wait(1).to({graphics:mask_1_graphics_5,x:-47.1,y:-20.2}).wait(1).to({graphics:mask_1_graphics_6,x:-48.5,y:-20.6}).wait(1).to({graphics:mask_1_graphics_7,x:-49.9,y:-19.5}).wait(1).to({graphics:mask_1_graphics_8,x:-51.3,y:-15.8}).wait(1).to({graphics:mask_1_graphics_9,x:-52.7,y:-12}).wait(1).to({graphics:mask_1_graphics_10,x:-54.1,y:-8.3}).wait(1).to({graphics:mask_1_graphics_11,x:-55.5,y:-4.5}).wait(1).to({graphics:mask_1_graphics_12,x:-56.6,y:-0.6}).wait(9));

	// p2
	this.instance_1 = new lib.p2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.8,0);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(19));

	// p3
	this.instance_2 = new lib.p3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-44.7,3.5,0.02,0.02,0,0,0,-2.5,20);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regX:0,regY:21.8,scaleX:1,scaleY:1},4).wait(7));

	// Слой_7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_13 = new cjs.Graphics().p("AxeFKIAAqTMAi9AAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_2_graphics_13,x:-75.1,y:97}).wait(8));

	// wog
	this.instance_3 = new lib.wog("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-80.1,39.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({y:85.4},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,-26.9,0.5,0.5);


(lib.hot_dog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower
	this.instance = new lib.flower_1();
	this.instance.parent = this;
	this.instance.setTransform(-56,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.8,y:-256.5},10).wait(10).to({x:-56,y:13},10).wait(11));

	// hand_right
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AGDnpQDGB6AVCcQAUCViQCSQiRCUkTBqQkkBwl5Ao");
	this.shape.setTransform(34.4,-14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(7,1,1).p("Ao3FlQFtgDEThJQEEhECChuQCBhwgdh4Qgeh/jHhk");
	this.shape_1.setTransform(39.6,-27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(7,1,1).p("AoQDWQFiAjECgjQD2gbByhKQByhPgnhZQgmhijHhO");
	this.shape_2.setTransform(44.9,-40.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(7,1,1).p("AnpAyQFWBJDxAEQDoALBigkQBigugwg8QgvhDjHg5");
	this.shape_3.setTransform(50.2,-50.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(7,1,1).p("AnDhlQFJBtDhAqQDZAzBTABQBTgMg6gfQg3gnjHgi");
	this.shape_4.setTransform(55.7,-62.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(7,1,1).p("Amei8QE9CUDRBQQDKBaBDAmQBEAWhDgCQhAgJjIgN");
	this.shape_5.setTransform(61.2,-80.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(7,1,1).p("Al7k2QEyC5DAB5QC8B/AzBLQA0A4hMAcQhJAUjIAJ");
	this.shape_6.setTransform(66.9,-94.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(7,1,1).p("AlYm7QEmDeCvCfQCtCnAkBwQAlBahWA5QhRAxjIAf");
	this.shape_7.setTransform(72.6,-108);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(7,1,1).p("Ak3pBQEaEECeDHQCfDOAUCUQAVB8heBXQhbBPjHA0");
	this.shape_8.setTransform(78.6,-121.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(7,1,1).p("AkYrGQEOEpCODtQCQD2AFC5QAGCehpB0QhiBsjIBK");
	this.shape_9.setTransform(84.7,-134.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(7,1,1).p("AizNMQOCmtvKzr");
	this.shape_10.setTransform(91,-148.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},10).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(11));

	// hand_left
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(7,1,1).p("AC2NNQuFmuPLzr");
	this.shape_11.setTransform(-90.7,-137);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(7,1,1).p("AB2LHQgBAAgCgBQjBhHhihmQhmhsgBiRQgFi5CMj3QCOj4Eak7");
	this.shape_12.setTransform(-84.3,-123.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(7,1,1).p("AA4JCQgBgBgCAAQjBgyhahKQhdhPAPhwQAMiUCbjQQCejQEmkT");
	this.shape_13.setTransform(-78.1,-110.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(7,1,1).p("AgCG9QgCgBgBAAQjDgchRgtQhUgzAfhQQAdhwCpinQCvioEwjs");
	this.shape_14.setTransform(-72.1,-97);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(7,1,1).p("Ag8E3QgBAAgCgBQjDgGhJgRQhKgVAvgwQAthKC5iCQC/h/E7jF");
	this.shape_15.setTransform(-66.4,-83.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(7,1,1).p("Ah0CjQgCAAgBgBQjEAPhAANQhCAHBAgQQA+glDHhbQDQhXFGid");
	this.shape_16.setTransform(-60.7,-68.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(7,1,1).p("AirgTQgCgBgBAAQjFAjg3ApQg5AjBQASQBOgBDXgzQDhgwFQh1");
	this.shape_17.setTransform(-55.2,-50.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(7,1,1).p("AjhiEQgCgBgBAAQjGA6guBGQgwA/BgAxQBfAlDmgMQDygIFahO");
	this.shape_18.setTransform(-49.8,-39.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(7,1,1).p("AkWjoQgCgBgBAAQjGBQgmBiQgmBcBvBRQBwBKD1AbQECAhFlgn");
	this.shape_19.setTransform(-44.5,-29.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(7,1,1).p("AlLljQgBgBgBAAQjHBlgeB/QgdB5CABxQCBBwEEBCQETBJFvAA");
	this.shape_20.setTransform(-39.3,-16.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(7,1,1).p("Al+noQgBgBgCgBQjHB8gVCcQgUCVCQCSQCRCTETBqQEkBxF5Ao");
	this.shape_21.setTransform(-34.1,-3.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(7,1,1).p("AlKlkQgBgBgBAAQjHBlgeB/QgdB5CABxQCBBvEEBDQESBJFuAC");
	this.shape_22.setTransform(-39.4,-16.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(7,1,1).p("AkUjpQgCgBgBAAQjGBQgmBiQgmBcBvBRQBwBKD1AbQECAjFhgk");
	this.shape_23.setTransform(-44.7,-29.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(7,1,1).p("AjeiEQgCgBgBAAQjGA6guBGQgwA/BgAxQBfAlDmgMQDwgFFWhK");
	this.shape_24.setTransform(-50.1,-39.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(7,1,1).p("AiogYQgBgBgBAAQjGAjg3AqQg4AjBPARQBPgBDXgzQDfgsFKhv");
	this.shape_25.setTransform(-55.6,-50);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(7,1,1).p("AhwCdQgBAAgBgBQjFAPhAANQhBAHA/gQQA+glDIhbQDOhSE+iW");
	this.shape_26.setTransform(-61.2,-68.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(7,1,1).p("Ag3EwQgBgBgCAAQjDgHhJgQQhKgWAvgwQAthKC5iCQC9h5Eyi8");
	this.shape_27.setTransform(-66.9,-82.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(7,1,1).p("AADG0QgCAAgBgBQjCgchRgtQhUgyAfhQQAdhwCpioQCsihEnji");
	this.shape_28.setTransform(-72.7,-96.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(7,1,1).p("ABAI5QgCgBgBAAQjCgyhZhKQhdhPAPhwQAMiUCajQQCbjIEbkJ");
	this.shape_29.setTransform(-78.8,-109.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(7,1,1).p("AB+K9QgBgBgCAAQjBhIhihmQhmhrgBiRQgFi6CMj2QCJjwEPku");
	this.shape_30.setTransform(-85.1,-122.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},10).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_11}]},1).wait(11));

	// palm_right
	this.instance_1 = new lib.palm_right();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-38.5,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:50.7,y:-245.3},10).wait(10).to({x:-38.5,y:25.8},10).wait(11));

	// palm_left
	this.instance_2 = new lib.palm_left();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-58.6,-234.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:75,x:43.1,y:48.7},10).wait(10).to({rotation:0,x:-58.6,y:-234.3},10).wait(11));

	// mustache
	this.instance_3 = new lib.mustache();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.2,-64.2,1,1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:5},10).wait(10).to({rotation:-5},10).wait(11));

	// mouth
	this.instance_4 = new lib.mouth();
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.3,-76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-10.7},10).wait(10).to({x:15.3},10).wait(11));

	// eyebrow_left
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(7,1,1).p("Ai8A+QBDhyB4gIQB5gIBFBz");
	this.shape_31.setTransform(-37.1,-149.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(7,1,1).p("Ai8AvQBChbB2gEQB3gDBKBk");
	this.shape_32.setTransform(-37.1,-148.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(7,1,1).p("Ai8AaQBBhFB0ABQB0AABQBV");
	this.shape_33.setTransform(-37.1,-147.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(7,1,1).p("Ai9AEQBBguByAFQBxAFBWBG");
	this.shape_34.setTransform(-37.1,-145.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(7,1,1).p("Ai9gPQBBgZBvAJQBuAKBcA3");
	this.shape_35.setTransform(-37.1,-144.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(7,1,1).p("Ai9ggQBAgDBtAOQBsANBiAp");
	this.shape_36.setTransform(-37.1,-143.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(7,1,1).p("Ai9goQA/ASBrATQBpARBoAb");
	this.shape_37.setTransform(-37.1,-143.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(7,1,1).p("Ai9gwQA/ApBoAWQBmAWBuAM");
	this.shape_38.setTransform(-37.1,-143.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(7,1,1).p("Ai9g4QA+A+BnAbQBjAaB0gC");
	this.shape_39.setTransform(-37.1,-143);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(7,1,1).p("Ai+hDQA+BUBkAgQBhAeB6gR");
	this.shape_40.setTransform(-37.1,-142.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(7,1,1).p("AC/BCQkEBAh5jS");
	this.shape_41.setTransform(-37.1,-141.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},10).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).wait(11));

	// eyebrow_right
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(7,1,1).p("Ai+BCQEEBAB5jS");
	this.shape_42.setTransform(34.7,-135.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(7,1,1).p("Ai+BAQB2AQBfgeQBoggBAhX");
	this.shape_43.setTransform(34.8,-136.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(7,1,1).p("Ai9A8QBwACBhgbQBqgeBBhA");
	this.shape_44.setTransform(34.8,-137.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(7,1,1).p("Ai9A2QBqgNBkgZQBsgaBBgr");
	this.shape_45.setTransform(34.9,-138.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(7,1,1).p("Ai9AvQBlgcBmgVQBvgYBBgU");
	this.shape_46.setTransform(34.9,-139.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(7,1,1).p("Ai9ApQBfgpBpgUQBxgWBCAD");
	this.shape_47.setTransform(35,-140);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(7,1,1).p("Ai8ApQBZg3BsgSQBygTBDAZ");
	this.shape_48.setTransform(35.1,-141.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(7,1,1).p("Ai8AtQBUhGBugPQB1gQBDAw");
	this.shape_49.setTransform(35.1,-143.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(7,1,1).p("Ai8AyQBOhUBxgNQB3gOBDBG");
	this.shape_50.setTransform(35.2,-145.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(7,1,1).p("Ai8A4QBIhjB0gKQB5gLBEBc");
	this.shape_51.setTransform(35.2,-147.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(7,1,1).p("Ai8A+QBDhyB4gIQB5gIBFBz");
	this.shape_52.setTransform(35.3,-149.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},10).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).wait(11));

	// eyebrow_left
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai8A+QBDhyB4gIQB5gIBFBz");
	this.shape_53.setTransform(-36.3,-148.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai8AvQBChbB2gEQB3gDBKBk");
	this.shape_54.setTransform(-36.3,-147.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai8AaQBBhFB0ABQB0AABQBV");
	this.shape_55.setTransform(-36.3,-146.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9AEQBBguByAFQBxAFBWBG");
	this.shape_56.setTransform(-36.3,-144.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9gPQBBgZBvAJQBuAKBcA3");
	this.shape_57.setTransform(-36.3,-143.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9ggQBAgDBtAOQBsANBiAp");
	this.shape_58.setTransform(-36.3,-142.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9goQA/ASBrATQBpAQBoAc");
	this.shape_59.setTransform(-36.4,-141.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9gwQA/ApBoAWQBmAWBuAM");
	this.shape_60.setTransform(-36.4,-141.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9g4QA+A+BnAbQBjAaB0gC");
	this.shape_61.setTransform(-36.4,-141.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai+hDQA+BUBkAgQBhAeB6gR");
	this.shape_62.setTransform(-36.4,-141.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#F1CFA8").ss(7,1,1).p("AC/BCQkEBAh5jS");
	this.shape_63.setTransform(-36.4,-140.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53}]}).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},10).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).wait(11));

	// eyebrow_right
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai+BCQEEBAB5jS");
	this.shape_64.setTransform(35.5,-134.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai+BAQB2AQBfgeQBoggBAhX");
	this.shape_65.setTransform(35.5,-135.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9A8QBwACBhgbQBqgeBBhA");
	this.shape_66.setTransform(35.6,-136.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9A2QBqgNBkgZQBsgaBBgr");
	this.shape_67.setTransform(35.6,-137.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9AvQBlgcBmgVQBvgYBBgU");
	this.shape_68.setTransform(35.7,-137.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai9ApQBfgpBpgUQBxgWBCAD");
	this.shape_69.setTransform(35.8,-138.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai8ApQBZg3BsgSQBygTBDAZ");
	this.shape_70.setTransform(35.8,-140.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai8AtQBUhGBugPQB1gQBDAw");
	this.shape_71.setTransform(35.9,-142);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai8AyQBOhUBxgNQB3gOBDBG");
	this.shape_72.setTransform(35.9,-143.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai8A4QBIhjB0gKQB5gLBEBc");
	this.shape_73.setTransform(36,-145.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F1CFA8").ss(7,1,1).p("Ai8A+QBDhyB4gIQB5gIBFBz");
	this.shape_74.setTransform(36,-147.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64}]}).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},10).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).wait(11));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkohJIBCofIIqBEIhCIfg");
	var mask_graphics_1 = new cjs.Graphics().p("AkohTIBCofIIqBEIhCIfg");
	var mask_graphics_2 = new cjs.Graphics().p("AkohdIBCofIIqBEIhCIfg");
	var mask_graphics_3 = new cjs.Graphics().p("AkohmIBCogIIqBFIhCIeg");
	var mask_graphics_4 = new cjs.Graphics().p("AkohwIBCofIIqBEIhCIfg");
	var mask_graphics_5 = new cjs.Graphics().p("Akoh6IBCofIIqBEIhCIfg");
	var mask_graphics_6 = new cjs.Graphics().p("AkoiEIBCofIIqBEIhCIfg");
	var mask_graphics_7 = new cjs.Graphics().p("AkoiOIBCoeIIqBDIhCIgg");
	var mask_graphics_8 = new cjs.Graphics().p("AkoiXIBCofIIqBEIhCIfg");
	var mask_graphics_9 = new cjs.Graphics().p("AkoihIBCofIIqBEIhCIfg");
	var mask_graphics_10 = new cjs.Graphics().p("AkoirIBCofIIqBEIhCIfg");
	var mask_graphics_20 = new cjs.Graphics().p("AkoirIBCofIIqBEIhCIfg");
	var mask_graphics_21 = new cjs.Graphics().p("AkoihIBCofIIqBEIhCIfg");
	var mask_graphics_22 = new cjs.Graphics().p("AkoiXIBCofIIqBEIhCIfg");
	var mask_graphics_23 = new cjs.Graphics().p("AkoiOIBCoeIIqBDIhCIgg");
	var mask_graphics_24 = new cjs.Graphics().p("AkoiEIBCofIIqBEIhCIfg");
	var mask_graphics_25 = new cjs.Graphics().p("Akoh6IBCofIIqBEIhCIfg");
	var mask_graphics_26 = new cjs.Graphics().p("AkohwIBCofIIqBEIhCIfg");
	var mask_graphics_27 = new cjs.Graphics().p("AkohmIBCogIIqBFIhCIeg");
	var mask_graphics_28 = new cjs.Graphics().p("AkohdIBCofIIqBEIhCIfg");
	var mask_graphics_29 = new cjs.Graphics().p("AkohTIBCofIIqBEIhCIfg");
	var mask_graphics_30 = new cjs.Graphics().p("AkohJIBCofIIqBEIhCIfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:32.4,y:-61.7}).wait(1).to({graphics:mask_graphics_1,x:32.4,y:-62.7}).wait(1).to({graphics:mask_graphics_2,x:32.4,y:-63.7}).wait(1).to({graphics:mask_graphics_3,x:32.4,y:-64.6}).wait(1).to({graphics:mask_graphics_4,x:32.4,y:-65.6}).wait(1).to({graphics:mask_graphics_5,x:32.4,y:-66.6}).wait(1).to({graphics:mask_graphics_6,x:32.4,y:-67.6}).wait(1).to({graphics:mask_graphics_7,x:32.4,y:-68.5}).wait(1).to({graphics:mask_graphics_8,x:32.4,y:-69.5}).wait(1).to({graphics:mask_graphics_9,x:32.4,y:-70.5}).wait(1).to({graphics:mask_graphics_10,x:32.4,y:-71.5}).wait(10).to({graphics:mask_graphics_20,x:32.4,y:-71.5}).wait(1).to({graphics:mask_graphics_21,x:32.4,y:-70.5}).wait(1).to({graphics:mask_graphics_22,x:32.4,y:-69.5}).wait(1).to({graphics:mask_graphics_23,x:32.4,y:-68.5}).wait(1).to({graphics:mask_graphics_24,x:32.4,y:-67.6}).wait(1).to({graphics:mask_graphics_25,x:32.4,y:-66.6}).wait(1).to({graphics:mask_graphics_26,x:32.4,y:-65.6}).wait(1).to({graphics:mask_graphics_27,x:32.4,y:-64.6}).wait(1).to({graphics:mask_graphics_28,x:32.4,y:-63.7}).wait(1).to({graphics:mask_graphics_29,x:32.4,y:-62.7}).wait(1).to({graphics:mask_graphics_30,x:32.4,y:-61.7}).wait(11));

	// eye
	this.instance_5 = new lib.eye();
	this.instance_5.parent = this;
	this.instance_5.setTransform(34.8,-115.6);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AldphIIgh8IB5IWIogB7g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AlbpZIIhh8IB5IWIogB7g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AlYpRIIgh8IB6IWIohB7g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AlVpJIIgh8IB5IWIogB7g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AlSpBIIgh8IB5IWIogB7g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AlQo5IIhh8IB5IWIogB7g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AlNoxIIgh8IB6IWIohB7g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AlMopIIgh8IB5IWIogB7g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AlMohIIgh8IB5IWIogB7g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AlMoZIIgh8IB5IWIogB7g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AlMoRIIgh8IB5IWIogB6g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AlMoRIIgh8IB5IWIogB6g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AlMoZIIgh8IB5IWIogB7g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AlMohIIgh8IB5IWIogB7g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AlMopIIgh8IB5IWIogB7g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AlNoxIIgh8IB6IWIohB7g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AlQo5IIhh8IB5IWIogB7g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AlSpBIIgh8IB5IWIogB7g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AlVpJIIgh8IB5IWIogB7g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AlYpRIIgh8IB6IWIohB7g");
	var mask_1_graphics_29 = new cjs.Graphics().p("AlbpZIIhh8IB5IWIogB7g");
	var mask_1_graphics_30 = new cjs.Graphics().p("AldphIIgh8IB5IWIogB7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-35,y:-73.4}).wait(1).to({graphics:mask_1_graphics_1,x:-34.8,y:-72.6}).wait(1).to({graphics:mask_1_graphics_2,x:-34.5,y:-71.8}).wait(1).to({graphics:mask_1_graphics_3,x:-34.2,y:-71}).wait(1).to({graphics:mask_1_graphics_4,x:-33.9,y:-70.2}).wait(1).to({graphics:mask_1_graphics_5,x:-33.7,y:-69.4}).wait(1).to({graphics:mask_1_graphics_6,x:-33.4,y:-68.6}).wait(1).to({graphics:mask_1_graphics_7,x:-32.9,y:-67.8}).wait(1).to({graphics:mask_1_graphics_8,x:-32.3,y:-67}).wait(1).to({graphics:mask_1_graphics_9,x:-31.8,y:-66.2}).wait(1).to({graphics:mask_1_graphics_10,x:-31.2,y:-65.4}).wait(10).to({graphics:mask_1_graphics_20,x:-31.2,y:-65.4}).wait(1).to({graphics:mask_1_graphics_21,x:-31.8,y:-66.2}).wait(1).to({graphics:mask_1_graphics_22,x:-32.3,y:-67}).wait(1).to({graphics:mask_1_graphics_23,x:-32.9,y:-67.8}).wait(1).to({graphics:mask_1_graphics_24,x:-33.4,y:-68.6}).wait(1).to({graphics:mask_1_graphics_25,x:-33.7,y:-69.4}).wait(1).to({graphics:mask_1_graphics_26,x:-33.9,y:-70.2}).wait(1).to({graphics:mask_1_graphics_27,x:-34.2,y:-71}).wait(1).to({graphics:mask_1_graphics_28,x:-34.5,y:-71.8}).wait(1).to({graphics:mask_1_graphics_29,x:-34.8,y:-72.6}).wait(1).to({graphics:mask_1_graphics_30,x:-35,y:-73.4}).wait(11));

	// eye
	this.instance_6 = new lib.eye();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-34.1,-117.7);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41));

	// body
	this.instance_7 = new lib.body_1();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.3,-276,218.1,552);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_anim
	this.instance = new lib.logo_anim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(58.4,-77.6,0.72,0.72);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).wait(59).to({startPosition:20},0).to({alpha:0},10).wait(1));

	// logo_globino
	this.instance_1 = new lib.logo_globino();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.9,111.2,0.02,0.02);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(116).to({_off:false},0).to({scaleX:2,scaleY:2},10,cjs.Ease.get(1)).wait(35).to({alpha:0},10).wait(1));

	// logo_globino
	this.instance_2 = new lib.logo_globino();
	this.instance_2.parent = this;
	this.instance_2.setTransform(105.9,-254.1,1.03,1.03,0,0,0,0.1,-0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},10).wait(81).to({alpha:0},10).wait(71));

	// logo
	this.instance_3 = new lib.logo_static();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-109.3,-262.5,0.822,0.821);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},10).wait(81).to({alpha:0},10).wait(71));

	// hot_dog
	this.instance_4 = new lib.hot_dog("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(254,231,1,1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0,x:2},10,cjs.Ease.cubicOut).wait(10).to({mode:"synched"},0).wait(71).to({mode:"single"},0).to({x:-273},10,cjs.Ease.cubicIn).to({_off:true},1).wait(70));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(61,108,0.01,0.01,-40.5,0,0,-3.8,-3.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-3,y:-111},10,cjs.Ease.cubicOut).wait(79).to({x:-278},10,cjs.Ease.cubicIn).to({_off:true},1).wait(70));

	// bg
	this.instance_6 = new lib.bg3();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(172));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,564.9,815.1);


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
p.nominalBounds = new cjs.Rectangle(149,299,566,816.1);
// library properties:
lib.properties = {
	id: 'C6CFCF143BE44602932F386B1A77FDC2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/body.png", id:"body"},
		{src:"images/flower.png", id:"flower"}
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
an.compositions['C6CFCF143BE44602932F386B1A77FDC2'] = {
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