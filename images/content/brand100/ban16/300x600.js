(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,74);


(lib.butterfly = function() {
	this.initialize(img.butterfly);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,52);


(lib.pupil = function() {
	this.initialize(img.pupil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);// helper functions:

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


(lib.wheel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("ABNByQgDgBgCgCQgCgCAAgEQAAgDADgCIALgKQAkgjAAgyQAAgxgkgjQgMgMgOgIQgDgBgBgDQgBgDACgDQACgDACAAQAEgBACABQAQAJAOAOQAnAnAAA3QAAA4gnAnIgNAMQgCACgDAAIAAAAgAiCAWQgDgCAAgDIAAgMQAAgPADgOQAAgDADgCQADgCADABQADABABACQACADgBADQgDANAAANIABAKQAAAEgCACQgCACgDABIAAAAQgDAAgCgCg");
	this.shape.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323546").s().p("Ah/B/Qg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhKAAg1g1g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheel_mc, new cjs.Rectangle(-18,-18,36,36), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A5BA7").s().p("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");
	this.shape.setTransform(0.2,-12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF0E4").s().p("AMjExI+fAAQg+AAgtgxQgsgyAAhHIAAosQAAhHAsgxQAtgyA+AAMAj4AAAQA/AAAtAyQAsAxAABHIAAIsQAABHgsAyQgtAxg/AAIhIAAIl0Efg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-130,-59.2,260,118.5), null);


(lib.pupil_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pupil();
	this.instance.parent = this;
	this.instance.setTransform(-8,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pupil_1, new cjs.Rectangle(-8,-8,16,16), null);


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


(lib.mouth_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF5F3D").s().p("AAHAuQgOgJgLgOQgOgTgDgZQgCgYAJgFQAJgFAQANQAOANAKARQALAQADAUQADAVgIAFQgCACgEAAQgHAAgKgGg");
	this.shape.setTransform(4.6,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333445").s().p("AhShcQAKgGALgEQArgPAoAUQApAUAOArQAPAqgUApQgUAogrAPQgLAEgLABgAAShcQgKAFADAZQACAZAPATQAKAPAPAIQAQAJAIgFQAIgGgEgTQgDgUgKgSQgKgRgPgMQgNgKgHAAIgFABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth_2, new cjs.Rectangle(-8.3,-10.9,16.7,21.9), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333445").s().p("AgSAhQgMgGgFgNQgEgLACgKQACgKAFgHIACgDIADgCQAIgHAMAAQAMgBAMAGQALAGAFAKQAGAKgDALQgDALgJAJQgJAIgLADIgHAAQgKAAgHgEgAgOgOQgFAFABAJQAAAHAFAGQAFAHAJgCIAEgBIABAAIAHgFQAGgHAAgGQAAgIgHgEQgHgEgGAAIgCAAQgHAAgEADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(-3.8,-3.7,7.7,7.5), null);


(lib.logo_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC4BLQgfgfAAgsQAAgrAggfQAggeAuAAQAiAAAaAQQAYAPAOAbIgzAUQgHgNgMgHQgMgHgQAAQgYAAgPAPQgQAQAAAWQAAAZAOAPQAPAQAbAAQASAAAOgJQANgJADgMIhAAAIAAgoIB1AAQAJAxgeAiQgeAkgzAAQgvAAgggegAgvBLQgggfAAgsQAAgrAggfQAfgeAuAAQAuAAAfAeQAgAfAAArQAAAsggAfQgfAeguAAQguAAgfgegAgIgmQgPAQAAAWQAAAWAPARQAPAPAXAAQAWAAAQgPQAQgRAAgWQAAgWgQgQQgQgPgWAAQgXAAgPAPgAjIBIIgIgjQgIgjgDgQIgBAAQgDARgIAiIgIAjQgEAQgJAIQgJAJgOAAQgOAAgJgJQgIgHgFgRIg3isIA9AAIAVBNIAFAVIAFAhIACAAQABgPADgSIAFgYIARhKIA1AAIARBKIAFAYQADASABAPIACAAIAFghIAFgVIAVhNIA9AAIg3CsQgFARgJAHQgJAJgNAAQgcAAgIghg");
	this.shape.setTransform(27.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8BC53F").s().p("Ag7gLQgGgOAAgQQAAgbATgUQATgTAbAAQAbAAAUATQATAUAAAbQAAAQgHAOIg7B3g");
	this.shape_1.setTransform(-22.1,-9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNhmQgMgZAJgaQAJgaAXgMQAZgNAaAJQAaAJAMAZIBVCqQAJATAAAVQAAAWgJATIg2BtgAi/hmQgMgZAJgaQAJgaAYgMQAZgMAaAIQAaAJAMAZIBUCqQAJATAAAVQAAAWgJATIg1Btg");
	this.shape_2.setTransform(-44.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_static, new cjs.Rectangle(-64.4,-19.9,129,39.9), null);


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


(lib.line_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AkXAAIIvAA");
	this.shape.setTransform(28,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_mc, new cjs.Rectangle(-1,-1,58,2), null);


(lib.butterfly_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.butterfly();
	this.instance.parent = this;
	this.instance.setTransform(-6,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.butterfly_1, new cjs.Rectangle(-6,-26,12,52), null);


(lib.body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.body();
	this.instance.parent = this;
	this.instance.setTransform(-127,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_mc, new cjs.Rectangle(-127,-37,254,74), null);


(lib.bg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1E92CB","#2A5BA7"],[0,1],0,298.1,0,-149.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B5BA6").s().p("Egz0Az1Q1f1eAA+XQAA+WVf1eQVe1feWAAQeXAAVeVfQVfVeAAeWQAAeX1fVeQ1eVf+XAAQ+WAA1e1fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-469.1,-469.1,938.3,938.3), null);


(lib.wheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.wheel_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-18,36,36);


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


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.line_mc();
	this.instance.parent = this;
	this.instance.setTransform(-25,0,0.02,1,0,0,0,-2.5,0);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1},5).to({regX:50.1,scaleX:0.01,x:31},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-1,1.1,2);


(lib.butterfly_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.butterfly_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.butterfly_2, new cjs.Rectangle(-6,-26,12,52), null);


(lib.body_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.body_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_top, new cjs.Rectangle(-127,-37,254,74), null);


(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_8
	this.instance = new lib.line("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-291.5,-169.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({_off:true},12).wait(154));

	// Слой_9
	this.instance_1 = new lib.line("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-194.7,-162.4,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).to({_off:true},12).wait(162));

	// Слой_10
	this.instance_2 = new lib.line("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-321.9,-170.4,1,1,0,0,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({_off:true},12).wait(169));

	// Слой_11
	this.instance_3 = new lib.line("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-229.1,-163.2,1,1,0,0,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({_off:true},12).wait(176));

	// Слой_12
	this.instance_4 = new lib.line("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-259.5,-169.6,1,1,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({_off:true},11).wait(185));

	// Слой_13
	this.instance_5 = new lib.line("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-285.1,-163.2,1,1,0,0,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({_off:true},11).wait(195));

	// Слой_6
	this.instance_6 = new lib.line("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-19.5,-0.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({_off:true},12).wait(164));

	// Слой_5
	this.instance_7 = new lib.line("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-122.7,0.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({_off:true},12).wait(172));

	// Слой_4
	this.instance_8 = new lib.line("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-95.5,-7.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},0).to({_off:true},12).wait(179));

	// Слой_3
	this.instance_9 = new lib.line("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-88.3,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({_off:true},12).wait(186));

	// Слой_2
	this.instance_10 = new lib.line("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-57.1,-6.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({_off:true},11).wait(195));

	// Слой_1
	this.instance_11 = new lib.line("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-30.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},11).wait(205));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-1,3.1,2);


(lib.hotdog_top_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// butterfly
	this.instance = new lib.butterfly_1();
	this.instance.parent = this;
	this.instance.setTransform(16.2,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({rotation:3,x:16.1},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:6,x:16.2,y:-1.2},0).wait(1).to({rotation:-6,x:16.1,y:-1.1},0).wait(1).to({rotation:6,x:16.2,y:-1.2},0).wait(1).to({rotation:-6,x:16.1,y:-1.1},0).wait(1).to({rotation:6,x:16.2,y:-1.2},0).wait(1).to({rotation:-6,x:16.1,y:-1.1},0).wait(1).to({regX:0.1,rotation:3,x:16.2},0).wait(1).to({regY:-0.1,rotation:-3,x:16.1,y:-1.2},0).wait(1).to({regX:0,regY:0,rotation:0,x:16.2,y:-1.1},0).to({_off:true},57).wait(73));

	// eye_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("AhlB5QgpgyAAhHQAAhGApgzQAqgyA7AAQA7AAArAyQApAzAABGQAABHgpAyQgrAzg7AAQg7AAgqgzg");
	var mask_graphics_60 = new cjs.Graphics().p("AhDB5QgcgyAAhHQAAhGAcgzQAcgyAnAAQAoAAAcAyQAcAzAABGQAABHgcAyQgcAzgoAAQgnAAgcgzg");
	var mask_graphics_61 = new cjs.Graphics().p("AgiB5QgOgyAAhHQAAhGAOgzQAOgyAUAAQAVAAAOAyQAOAzAABGQAABHgOAyQgOAzgVAAQgUAAgOgzg");
	var mask_graphics_62 = new cjs.Graphics().p("AgBB5IgBh5IABh5QABgyAAAAQABAAABAyIABB5IgBB5QgBAzgBAAQAAAAgBgzg");
	var mask_graphics_65 = new cjs.Graphics().p("AgBB5IgBh5IABh5QABgyAAAAQABAAABAyIABB5IgBB5QgBAzgBAAQAAAAgBgzg");
	var mask_graphics_66 = new cjs.Graphics().p("AgiB5QgOgyAAhHQAAhGAOgzQAOgyAUAAQAVAAAOAyQAOAzAABGQAABHgOAyQgOAzgVAAQgUAAgOgzg");
	var mask_graphics_67 = new cjs.Graphics().p("AhDB5QgcgyAAhHQAAhGAcgzQAcgyAnAAQAoAAAcAyQAcAzAABGQAABHgcAyQgcAzgoAAQgnAAgcgzg");
	var mask_graphics_68 = new cjs.Graphics().p("ABlB5QgpgyAAhHQAAhGApgzQAqgyA8AAQA7AAArAyQApAzAABGQAABHgpAyQgrAzg7AAQg8AAgqgzg");
	var mask_graphics_72 = new cjs.Graphics().p("ABlB5QgpgyAAhHQAAhGApgzQAqgyA8AAQA7AAArAyQApAzAABGQAABHgpAyQgrAzg7AAQg8AAgqgzg");
	var mask_graphics_73 = new cjs.Graphics().p("AhDB5QgcgyAAhHQAAhGAcgzQAcgyAnAAQAoAAAcAyQAcAzAABGQAABHgcAyQgcAzgoAAQgnAAgcgzg");
	var mask_graphics_74 = new cjs.Graphics().p("AgiB5QgOgyAAhHQAAhGAOgzQAOgyAUAAQAVAAAOAyQAOAzAABGQAABHgOAyQgOAzgVAAQgUAAgOgzg");
	var mask_graphics_75 = new cjs.Graphics().p("AgBB5IgBh5IABh5QABgyAAAAQABAAABAyIABB5IgBB5QgBAzgBAAQAAAAgBgzg");
	var mask_graphics_78 = new cjs.Graphics().p("AgBB5IgBh5IABh5QABgyAAAAQABAAABAyIABB5IgBB5QgBAzgBAAQAAAAgBgzg");
	var mask_graphics_79 = new cjs.Graphics().p("AgiB5QgOgyAAhHQAAhGAOgzQAOgyAUAAQAVAAAOAyQAOAzAABGQAABHgOAyQgOAzgVAAQgUAAgOgzg");
	var mask_graphics_80 = new cjs.Graphics().p("AhDB5QgcgyAAhHQAAhGAcgzQAcgyAnAAQAoAAAcAyQAcAzAABGQAABHgcAyQgcAzgoAAQgnAAgcgzg");
	var mask_graphics_81 = new cjs.Graphics().p("ABlB5QgpgyAAhHQAAhGApgzQAqgyA8AAQA7AAArAyQApAzAABGQAABHgpAyQgrAzg7AAQg8AAgqgzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_60,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_61,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_62,x:54.9,y:17.2}).wait(3).to({graphics:mask_graphics_65,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_66,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_67,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_68,x:34.6,y:17.2}).wait(4).to({graphics:mask_graphics_72,x:34.6,y:17.2}).wait(1).to({graphics:mask_graphics_73,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_74,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_75,x:54.9,y:17.2}).wait(3).to({graphics:mask_graphics_78,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_79,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_80,x:54.9,y:17.2}).wait(1).to({graphics:mask_graphics_81,x:34.6,y:17.2}).wait(29).to({graphics:null,x:0,y:0}).wait(73));

	// pupil
	this.instance_1 = new lib.pupil_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,14.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({x:52.1,y:20},3).wait(17).to({x:54.1,y:13.6},3).wait(5).to({x:50.9,y:18.4},4).to({_off:true},21).wait(3).to({_off:false},0).to({_off:true},10).wait(3).to({_off:false},0).to({_off:true},32).wait(73));

	// Слой_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF0E4").s().p("AgrBqQgsgTgSgsIAAgBIgCgGQgPgoASgpQASgrAsgSQArgSAsATQArASARArIABABIAAABIABABQARArgSAsQgTArgsASQgVAIgWAAQgVAAgWgJg");
	this.shape.setTransform(55,17);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},110).wait(73));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_59 = new cjs.Graphics().p("AhlB5QgpgyAAhHQAAhGApgzQAqgyA7AAQA7AAArAyQApAzAABGQAABHgpAyQgrAzg7AAQg7AAgqgzg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AhDB5QgcgyAAhHQAAhGAcgzQAcgyAnAAQAoAAAcAyQAcAzAABGQAABHgcAyQgcAzgoAAQgnAAgcgzg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AgiB5QgOgyAAhHQAAhGAOgzQAOgyAUAAQAVAAAOAyQAOAzAABGQAABHgOAyQgOAzgVAAQgUAAgOgzg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AgBB5IgBh5IABh5QABgyAAAAQABAAABAyIABB5IgBB5QgBAzgBAAQAAAAgBgzg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AgBB5IgBh5IABh5QABgyAAAAQABAAABAyIABB5IgBB5QgBAzgBAAQAAAAgBgzg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AgiB5QgOgyAAhHQAAhGAOgzQAOgyAUAAQAVAAAOAyQAOAzAABGQAABHgOAyQgOAzgVAAQgUAAgOgzg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AhDB5QgcgyAAhHQAAhGAcgzQAcgyAnAAQAoAAAcAyQAcAzAABGQAABHgcAyQgcAzgoAAQgnAAgcgzg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AhlB5QgpgyAAhHQAAhGApgzQAqgyA7AAQA7AAArAyQApAzAABGQAABHgpAyQgrAzg7AAQg7AAgqgzg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AhlB5QgpgyAAhHQAAhGApgzQAqgyA7AAQA7AAArAyQApAzAABGQAABHgpAyQgrAzg7AAQg7AAgqgzg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AhDB5QgcgyAAhHQAAhGAcgzQAcgyAnAAQAoAAAcAyQAcAzAABGQAABHgcAyQgcAzgoAAQgnAAgcgzg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AgiB5QgOgyAAhHQAAhGAOgzQAOgyAUAAQAVAAAOAyQAOAzAABGQAABHgOAyQgOAzgVAAQgUAAgOgzg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AgBB5IgBh5IABh5QABgyAAAAQABAAABAyIABB5IgBB5QgBAzgBAAQAAAAgBgzg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AgBB5IgBh5IABh5QABgyAAAAQABAAABAyIABB5IgBB5QgBAzgBAAQAAAAgBgzg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AgiB5QgOgyAAhHQAAhGAOgzQAOgyAUAAQAVAAAOAyQAOAzAABGQAABHgOAyQgOAzgVAAQgUAAgOgzg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AhDB5QgcgyAAhHQAAhGAcgzQAcgyAnAAQAoAAAcAyQAcAzAABGQAABHgcAyQgcAzgoAAQgnAAgcgzg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AhlB5QgpgyAAhHQAAhGApgzQAqgyA7AAQA7AAArAyQApAzAABGQAABHgpAyQgrAzg7AAQg7AAgqgzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_1_graphics_59,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_60,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_61,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_62,x:54.9,y:-16.8}).wait(3).to({graphics:mask_1_graphics_65,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_66,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_67,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_68,x:54.9,y:-16.8}).wait(4).to({graphics:mask_1_graphics_72,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_73,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_74,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_75,x:54.9,y:-16.8}).wait(3).to({graphics:mask_1_graphics_78,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_79,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_80,x:54.9,y:-16.8}).wait(1).to({graphics:mask_1_graphics_81,x:54.9,y:-16.8}).wait(29).to({graphics:null,x:0,y:0}).wait(73));

	// pupil
	this.instance_2 = new lib.pupil_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.5,-20);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({x:52.1,y:-13.9},3).wait(17).to({x:52.6,y:-21.1},3).wait(5).to({x:50.5,y:-13.9},4).to({_off:true},21).wait(3).to({_off:false},0).to({_off:true},10).wait(3).to({_off:false},0).to({_off:true},32).wait(73));

	// Слой_10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF0E4").s().p("AgrBqQgsgTgSgsIAAgBIgCgGQgPgoASgpQASgrAsgSQArgSAsATQArASARArIABABIAAABIABABQARArgSAsQgTArgsASQgVAIgWAAQgVAAgWgJg");
	this.shape_1.setTransform(54.5,-17.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},110).wait(73));

	// mouth
	this.instance_3 = new lib.mouth();
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.4,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({y:-0.2},4).to({_off:true},69).wait(73));

	// body_mc
	this.instance_4 = new lib.body_top();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},110).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-37,254,74);


(lib.hotdog_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hotdog_top_mc("synched",0,false);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5,startPosition:10},10,cjs.Ease.quadInOut).to({y:0,startPosition:20},10,cjs.Ease.quadInOut).to({y:5,startPosition:30},10,cjs.Ease.quadInOut).to({y:0,startPosition:40},10,cjs.Ease.quadInOut).to({y:5,startPosition:50},10,cjs.Ease.quadInOut).to({y:0,startPosition:60},10,cjs.Ease.quadInOut).to({y:4,startPosition:70},10,cjs.Ease.quadInOut).to({y:0,startPosition:80},10,cjs.Ease.quadInOut).to({y:3,startPosition:90},10,cjs.Ease.quadInOut).to({y:0,startPosition:100},10,cjs.Ease.quadInOut).to({y:2,startPosition:110},10,cjs.Ease.quadInOut).to({y:0,startPosition:120},10,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-37,254,74);


(lib.hotdog_bottom_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjkB6QgQgzAAhHQAAhGAQgyQAQgzAXAAQAXAAAQAzQAQAyAABGQAABHgQAzQgQAygXAAQgXAAgQgyg");
	var mask_graphics_24 = new cjs.Graphics().p("AjkB6QgQgzAAhHQAAhGAQgyQAQgzAXAAQAXAAAQAzQAQAyAABGQAABHgQAzQgQAygXAAQgXAAgQgyg");
	var mask_graphics_25 = new cjs.Graphics().p("AjVB8QgWgxgGhGQgFhGAOg0QAPg0AagCQAagBAWAxQAWAxAFBGQAFBGgOA0QgOA0gaACIgCAAQgZAAgVgwg");
	var mask_graphics_26 = new cjs.Graphics().p("AjGCAQgcgvgKhHQgLhFANg1QAMg1AdgEQAdgEAcAuQAcAvAKBHQALBFgNA1QgMA1gdAEIgFAAQgbAAgZgqg");
	var mask_graphics_27 = new cjs.Graphics().p("Ai2CDQghgsgQhGQgQhEALg2QALg2AggIQAfgHAhAsQAiAsAQBGQAPBEgKA2QgLA2ggAIIgJABQgbAAgdgmg");
	var mask_graphics_28 = new cjs.Graphics().p("AilCGQgngpgVhEQgVhDAJg3QAJg4AigKQAigLAnApQAmApAVBEQAVBDgJA3QgIA4gjAKQgGACgIAAQgbAAgfggg");
	var mask_graphics_29 = new cjs.Graphics().p("AiUCJQgrglgahCQgahBAGg5QAHg5AkgOQAkgOAsAlQArAlAaBCQAaBBgGA5QgHA5gkAOQgKAEgLAAQgbAAgggbg");
	var mask_graphics_94 = new cjs.Graphics().p("AiUCJQgrglgahCQgahBAGg5QAHg5AkgOQAkgOAsAlQArAlAaBCQAaBBgGA5QgHA5gkAOQgKAEgLAAQgbAAgggbg");
	var mask_graphics_95 = new cjs.Graphics().p("AibCIQgqgngXhDQgYhCAHg4QAIg5AjgMQAjgNAqAnQApAnAYBDQAYBCgIA4QgIA5gjAMQgIADgJAAQgcAAgfgdg");
	var mask_graphics_96 = new cjs.Graphics().p("AijCGQgngogWhEQgVhDAJg3QAIg4AigLQAjgLAnApQAnAoAVBEQAWBDgJA3QgJA4giALQgHACgHAAQgcAAgfggg");
	var mask_graphics_97 = new cjs.Graphics().p("AirCFQgkgqgThFQgUhDAKg3QAJg3AigKQAhgJAkAqQAlAqATBFQATBDgJA3QgKA3ghAKQgGABgGAAQgcAAgegig");
	var mask_graphics_98 = new cjs.Graphics().p("AiyCDQgigrgRhFQgRhEAKg3QALg2AggIQAggIAiAsQAiArARBFQARBEgKA3QgLA2ggAIIgKABQgbAAgdglg");
	var mask_graphics_99 = new cjs.Graphics().p("Ai6CCQgfgtgPhGQgOhEALg2QALg2AfgGQAfgHAgAtQAgAtAOBGQAPBEgMA2QgLA2gfAGIgIABQgbAAgcgng");
	var mask_graphics_100 = new cjs.Graphics().p("AjBCAQgdgugMhGQgMhFAMg1QAMg1AegGQAdgFAeAvQAdAuAMBGQAMBFgMA1QgMA1geAGIgGAAQgbAAgagqg");
	var mask_graphics_101 = new cjs.Graphics().p("AjIB/QgbgvgKhHQgJhFANg1QANg1AcgDQAdgEAaAvQAbAvAJBHQAKBFgNA1QgNA1gcADIgFABQgaAAgYgsg");
	var mask_graphics_102 = new cjs.Graphics().p("AjQB+QgYgxgHhGQgHhGAOg0QANg0AcgDQAbgDAYAwQAYAxAHBGQAHBGgNA0QgOA0gbADIgDAAQgaAAgXgtg");
	var mask_graphics_103 = new cjs.Graphics().p("AjXB8QgVgxgFhHQgFhGAPgzQAOg0AagCQAagBAVAxQAWAxAFBHQAFBGgPAzQgOA0gaACIgCAAQgZAAgVgwg");
	var mask_graphics_104 = new cjs.Graphics().p("AjdB7QgTgygChHQgDhGAPgzQAQgzAYgBQAZgBASAyQATAyACBHQADBGgPAzQgQAzgYABIgBAAQgYAAgSgxg");
	var mask_graphics_105 = new cjs.Graphics().p("AjkB6QgQgzAAhHQAAhGAQgyQAQgzAXAAQAXAAAQAzQAQAyAABGQAABHgQAzQgQAygXAAQgXAAgQgyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-24.5,y:-2}).wait(24).to({graphics:mask_graphics_24,x:-24.5,y:-2}).wait(1).to({graphics:mask_graphics_25,x:-24.3,y:-4.4}).wait(1).to({graphics:mask_graphics_26,x:-24.2,y:-6.8}).wait(1).to({graphics:mask_graphics_27,x:-24.1,y:-9.2}).wait(1).to({graphics:mask_graphics_28,x:-24,y:-11.6}).wait(1).to({graphics:mask_graphics_29,x:-23.9,y:-13.9}).wait(65).to({graphics:mask_graphics_94,x:-23.9,y:-13.9}).wait(1).to({graphics:mask_graphics_95,x:-23.9,y:-12.8}).wait(1).to({graphics:mask_graphics_96,x:-24,y:-11.7}).wait(1).to({graphics:mask_graphics_97,x:-24,y:-10.6}).wait(1).to({graphics:mask_graphics_98,x:-24.1,y:-9.5}).wait(1).to({graphics:mask_graphics_99,x:-24.1,y:-8.4}).wait(1).to({graphics:mask_graphics_100,x:-24.1,y:-7.3}).wait(1).to({graphics:mask_graphics_101,x:-24.2,y:-6.3}).wait(1).to({graphics:mask_graphics_102,x:-24.2,y:-5.2}).wait(1).to({graphics:mask_graphics_103,x:-24.3,y:-4.1}).wait(1).to({graphics:mask_graphics_104,x:-24.4,y:-3}).wait(1).to({graphics:mask_graphics_105,x:-24.5,y:-2}).wait(16).to({graphics:null,x:0,y:0}).wait(66));

	// Слой_2
	this.instance = new lib.mouth_2();
	this.instance.parent = this;
	this.instance.setTransform(-35.1,-1.1,1,1,20,0,0,0.4,-0.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({regX:0.7,rotation:0,y:-13.8},5).wait(65).to({regX:0.4,rotation:20,y:-1.1},11).to({_off:true},16).wait(66));

	// Слой_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#313546").ss(2,1,1).p("AAAApIAAhR");
	this.shape.setTransform(-57.6,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#313546").ss(2,1,1).p("AAGgsQgFAIgDAMQgDAMAAAMQAAANADAMQADAMAFAI");
	this.shape_1.setTransform(-57.9,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#313546").ss(2,1,1).p("AAMgwQgJAHgGANQgIANAAAPQAAAQAIAOQAGANAJAG");
	this.shape_2.setTransform(-58.2,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#313546").ss(2,1,1).p("AASgzQgPAEgKAPQgKAOAAASQAAATAKAPQAKAOAPAE");
	this.shape_3.setTransform(-58.4,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#313546").ss(2,1,1).p("AAYg3QgTACgOARQgOAQAAAUQAAAWAOAQQAOAQATAC");
	this.shape_4.setTransform(-58.7,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#313546").ss(2,1,1).p("AAeA8QgZAAgQgSQgSgRAAgZQAAgYASgRQAQgSAZAA");
	this.shape_5.setTransform(-59,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#313546").ss(2,1,1).p("AAbg5QgWABgPARQgQARAAAWQAAAYAQARQAPAQAWAB");
	this.shape_6.setTransform(-58.9,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#313546").ss(2,1,1).p("AAYg4QgUACgNARQgPAQAAAVQAAAXAPAQQANAPAUAC");
	this.shape_7.setTransform(-58.8,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#313546").ss(2,1,1).p("AAWg2QgSADgMAQQgNAPAAAUQAAAVANAQQAMAPASAD");
	this.shape_8.setTransform(-58.6,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#313546").ss(2,1,1).p("AATg0QgPADgLAQQgLAPAAASQAAATALAPQALAPAPAE");
	this.shape_9.setTransform(-58.5,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#313546").ss(2,1,1).p("AAQgyQgNAEgIAPQgKAOAAARQAAASAKAPQAIAOANAE");
	this.shape_10.setTransform(-58.4,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#313546").ss(2,1,1).p("AAOgxQgLAGgHAOQgJAOAAAPQAAARAJAOQAHANALAG");
	this.shape_11.setTransform(-58.2,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#313546").ss(2,1,1).p("AALgvQgJAHgFANQgHANAAAOQAAAQAHANQAFANAJAG");
	this.shape_12.setTransform(-58.1,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#313546").ss(2,1,1).p("AAIgtQgHAIgDAMQgFAMAAANQAAAPAFAMQADAMAHAH");
	this.shape_13.setTransform(-58,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#313546").ss(2,1,1).p("AAFgsQgEAJgDAMQgDALAAAMQAAANADAMQADALAEAI");
	this.shape_14.setTransform(-57.8,11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#313546").ss(2,1,1).p("AADgqQgDAKAAALQgCALAAAKQAAAMACALQAAALADAJ");
	this.shape_15.setTransform(-57.7,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},65).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape}]},1).to({state:[]},16).wait(66));

	// Слой_7
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#313546").ss(2,1,1).p("AAAAzIAAhl");
	this.shape_16.setTransform(-58.5,-17.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#313546").ss(2,1,1).p("AAGg0QgFAKgDAOQgDANAAAPQAAAOADAOQADAOAFAL");
	this.shape_17.setTransform(-58.4,-17.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#313546").ss(2,1,1).p("AAMg2QgKAIgGAPQgHAOAAARQAAARAHAPQAGAOAKAI");
	this.shape_18.setTransform(-58.3,-17.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#313546").ss(2,1,1).p("AASg3QgPAFgKAPQgKAQAAATQAAAUAKAPQAKAQAPAF");
	this.shape_19.setTransform(-58.2,-17.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#313546").ss(2,1,1).p("AAYg5QgTACgNARQgPARAAAVQAAAWAPARQANARATAC");
	this.shape_20.setTransform(-58.2,-18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#313546").ss(2,1,1).p("AAeA8QgYAAgRgRQgSgSAAgZQAAgXASgSQARgSAYAA");
	this.shape_21.setTransform(-58.1,-18.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#313546").ss(2,1,1).p("AAbg6QgWABgPASQgQARAAAWQAAAYAQARQAPARAWAB");
	this.shape_22.setTransform(-58.1,-18.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#313546").ss(2,1,1).p("AAZg5QgUACgOARQgPAQAAAWQAAAXAPAQQAOARAUAC");
	this.shape_23.setTransform(-58.2,-18);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#313546").ss(2,1,1).p("AAWg5QgSAEgMAQQgNAQAAAVQAAAVANARQAMAQASAE");
	this.shape_24.setTransform(-58.2,-17.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#313546").ss(2,1,1).p("AATg4QgPAFgLAQQgLAQAAATQAAAUALAQQALAQAPAF");
	this.shape_25.setTransform(-58.2,-17.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#313546").ss(2,1,1).p("AAQg3QgNAGgJAPQgJAQAAASQAAATAJAPQAJAQANAG");
	this.shape_26.setTransform(-58.3,-17.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#313546").ss(2,1,1).p("AAOg2QgLAHgHAPQgJAOAAASQAAASAJAPQAHAPALAH");
	this.shape_27.setTransform(-58.3,-17.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#313546").ss(2,1,1).p("AALg1QgJAIgFAOQgHAOAAARQAAARAHAOQAFAPAJAI");
	this.shape_28.setTransform(-58.3,-17.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#313546").ss(2,1,1).p("AAIg0QgHAJgDAOQgFAOAAAPQAAAPAFAPQADAOAHAJ");
	this.shape_29.setTransform(-58.4,-17.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#313546").ss(2,1,1).p("AAFg0QgEALgCANQgDAOAAAOQAAAOADAOQACAOAEAL");
	this.shape_30.setTransform(-58.4,-17.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#313546").ss(2,1,1).p("AADgyQgCALgBAMQgCAOAAANQAAANACAOQABANACAM");
	this.shape_31.setTransform(-58.5,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_16}]},24).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},65).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},16).wait(66));

	// butterfly
	this.instance_1 = new lib.butterfly_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({rotation:-3},0).wait(1).to({rotation:3},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:6},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:6},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:6},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:3},0).wait(1).to({rotation:0},0).to({_off:true},77).wait(66));

	// body_mc
	this.instance_2 = new lib.body_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},121).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-37,254,74);


(lib.hotdog_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hotdog_bottom_mc("synched",0,false);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5,startPosition:10},10,cjs.Ease.quadInOut).to({y:0,startPosition:20},10,cjs.Ease.quadInOut).to({y:-5,startPosition:30},10,cjs.Ease.quadInOut).to({y:0,startPosition:40},10,cjs.Ease.quadInOut).to({y:-5,startPosition:50},10,cjs.Ease.quadInOut).to({y:0,startPosition:60},10,cjs.Ease.quadInOut).to({y:-4,startPosition:70},10,cjs.Ease.quadInOut).to({y:0,startPosition:80},10,cjs.Ease.quadInOut).to({y:-3,startPosition:90},10,cjs.Ease.quadInOut).to({y:0,startPosition:100},10,cjs.Ease.quadInOut).to({y:-2,startPosition:110},10,cjs.Ease.quadInOut).to({y:0,startPosition:120},10,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-37,254,74);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo_anim
	this.instance = new lib.logo_anim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(58.4,-77.6,0.72,0.72);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(59).to({startPosition:20},0).to({alpha:0},10).wait(1));

	// logo_globino
	this.instance_1 = new lib.logo_globino();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.9,111.2,0.02,0.02);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(133).to({_off:false},0).to({scaleX:2,scaleY:2},10,cjs.Ease.get(1)).wait(35).to({alpha:0},10).wait(1));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(452.9,-656.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({x:70,y:-104},15,cjs.Ease.cubicInOut).wait(59).to({alpha:0},10).wait(1));

	// logo_globino
	this.instance_3 = new lib.logo_globino();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-105.1,-254.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189));

	// logo
	this.instance_4 = new lib.logo_static();
	this.instance_4.parent = this;
	this.instance_4.setTransform(76.2,-255.5,0.822,0.821);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189));

	// hotdog_top
	this.instance_5 = new lib.hotdog_top("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-279.4,21);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(1).to({regY:2.5,x:-238.3,y:23.5,startPosition:1},0).wait(1).to({x:-220.6,startPosition:2},0).wait(1).to({x:-207.3,startPosition:3},0).wait(1).to({x:-196.2,startPosition:4},0).wait(1).to({x:-186.6,startPosition:5},0).wait(1).to({x:-178,startPosition:6},0).wait(1).to({x:-170.2,startPosition:7},0).wait(1).to({x:-163,startPosition:8},0).wait(1).to({x:-156.3,startPosition:9},0).wait(1).to({x:-150.1,startPosition:10},0).wait(1).to({x:-144.2,startPosition:11},0).wait(1).to({x:-138.7,startPosition:12},0).wait(1).to({x:-133.4,startPosition:13},0).wait(1).to({x:-128.4,startPosition:14},0).wait(1).to({x:-123.7,startPosition:15},0).wait(1).to({x:-119.1,startPosition:16},0).wait(1).to({x:-114.7,startPosition:17},0).wait(1).to({x:-110.5,startPosition:18},0).wait(1).to({x:-106.5,startPosition:19},0).wait(1).to({x:-102.6,startPosition:20},0).wait(1).to({x:-98.8,startPosition:21},0).wait(1).to({x:-95.2,startPosition:22},0).wait(1).to({x:-91.7,startPosition:23},0).wait(1).to({x:-88.3,startPosition:24},0).wait(1).to({x:-85,startPosition:25},0).wait(1).to({x:-81.8,startPosition:26},0).wait(1).to({x:-78.7,startPosition:27},0).wait(1).to({x:-75.7,startPosition:28},0).wait(1).to({x:-72.8,startPosition:29},0).wait(1).to({x:-69.9,startPosition:30},0).wait(1).to({x:-67.2,startPosition:31},0).wait(1).to({x:-64.5,startPosition:32},0).wait(1).to({x:-61.9,startPosition:33},0).wait(1).to({x:-59.4,startPosition:34},0).wait(1).to({x:-56.9,startPosition:35},0).wait(1).to({x:-54.5,startPosition:36},0).wait(1).to({x:-52.2,startPosition:37},0).wait(1).to({x:-49.9,startPosition:38},0).wait(1).to({x:-47.7,startPosition:39},0).wait(1).to({x:-45.5,startPosition:40},0).wait(1).to({x:-43.4,startPosition:41},0).wait(1).to({x:-41.3,startPosition:42},0).wait(1).to({x:-39.3,startPosition:43},0).wait(1).to({x:-37.4,startPosition:44},0).wait(1).to({x:-35.5,startPosition:45},0).wait(1).to({x:-33.6,startPosition:46},0).wait(1).to({x:-31.8,startPosition:47},0).wait(1).to({x:-30,startPosition:48},0).wait(1).to({x:-28.3,startPosition:49},0).wait(1).to({x:-26.6,startPosition:50},0).wait(1).to({x:-25,startPosition:51},0).wait(1).to({x:-23.4,startPosition:52},0).wait(1).to({x:-21.8,startPosition:53},0).wait(1).to({x:-20.3,startPosition:54},0).wait(1).to({x:-18.8,startPosition:55},0).wait(1).to({x:-17.4,startPosition:56},0).wait(1).to({x:-16,startPosition:57},0).wait(1).to({x:-14.6,startPosition:58},0).wait(1).to({x:-13.3,startPosition:59},0).wait(1).to({x:-12,startPosition:60},0).wait(1).to({x:-10.7,startPosition:61},0).wait(1).to({x:-9.5,startPosition:62},0).wait(1).to({x:-8.3,startPosition:63},0).wait(1).to({x:-7.1,startPosition:64},0).wait(1).to({x:-6,startPosition:65},0).wait(1).to({x:-4.9,startPosition:66},0).wait(1).to({x:-3.8,startPosition:67},0).wait(1).to({x:-2.8,startPosition:68},0).wait(1).to({x:-1.8,startPosition:69},0).wait(1).to({x:-0.8,startPosition:70},0).wait(1).to({x:0.1,startPosition:71},0).wait(1).to({x:1,startPosition:72},0).wait(1).to({x:1.9,startPosition:73},0).wait(1).to({x:2.8,startPosition:74},0).wait(1).to({x:3.6,startPosition:75},0).wait(1).to({x:4.4,startPosition:76},0).wait(1).to({x:5.2,startPosition:77},0).wait(1).to({x:6,startPosition:78},0).wait(1).to({x:6.7,startPosition:79},0).wait(1).to({x:7.4,startPosition:80},0).wait(1).to({x:8.1,startPosition:81},0).wait(1).to({x:8.7,startPosition:82},0).wait(1).to({x:9.3,startPosition:83},0).wait(1).to({x:9.9,startPosition:84},0).wait(1).to({x:10.5,startPosition:85},0).wait(1).to({x:11.1,startPosition:86},0).wait(1).to({x:11.6,startPosition:87},0).wait(1).to({x:12.1,startPosition:88},0).wait(1).to({x:12.6,startPosition:89},0).wait(1).to({x:13,startPosition:90},0).wait(1).to({x:13.5,startPosition:91},0).wait(1).to({x:13.9,startPosition:92},0).wait(1).to({x:14.2,startPosition:93},0).wait(1).to({x:14.6,startPosition:94},0).wait(1).to({x:14.9,startPosition:95},0).wait(1).to({x:15.3,startPosition:96},0).wait(1).to({x:15.5,startPosition:97},0).wait(1).to({x:15.8,startPosition:98},0).wait(1).to({x:16.1,startPosition:99},0).wait(1).to({x:16.3,startPosition:100},0).wait(1).to({x:16.5,startPosition:101},0).wait(1).to({x:16.7,startPosition:102},0).wait(1).to({x:16.8,startPosition:103},0).wait(1).to({x:17,startPosition:104},0).wait(1).to({x:17.1,startPosition:105},0).wait(1).to({x:17.2,startPosition:106},0).wait(1).to({x:17.3,startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({regY:0,x:17.4,y:21},0).to({_off:true},1).wait(69));

	// wheel_top
	this.instance_6 = new lib.wheel();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-248.7,71.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).wait(1).to({rotation:-110.9,x:-207.7},0).wait(1).to({rotation:-3.6,x:-190},0).wait(1).to({rotation:77.3,x:-176.6},0).wait(1).to({rotation:144.5,x:-165.6},0).wait(1).to({rotation:202.9,x:-155.9},0).wait(1).to({rotation:255.1,x:-147.3},0).wait(1).to({rotation:302.4,x:-139.5},0).wait(1).to({rotation:346,x:-132.3},0).wait(1).to({rotation:386.4,x:-125.7},0).wait(1).to({rotation:424.3,x:-119.4},0).wait(1).to({rotation:459.8,x:-113.6},0).wait(1).to({rotation:493.4,x:-108},0).wait(1).to({rotation:525.3,x:-102.8},0).wait(1).to({rotation:555.6,x:-97.8},0).wait(1).to({rotation:584.6,x:-93},0).wait(1).to({rotation:612.3,x:-88.4},0).wait(1).to({rotation:638.8,x:-84.1},0).wait(1).to({rotation:664.3,x:-79.8},0).wait(1).to({rotation:688.9,x:-75.8},0).wait(1).to({rotation:712.5,x:-71.9},0).wait(1).to({rotation:735.3,x:-68.1},0).wait(1).to({rotation:757.3,x:-64.5},0).wait(1).to({rotation:778.6,x:-61},0).wait(1).to({rotation:799.2,x:-57.6},0).wait(1).to({rotation:819.2,x:-54.3},0).wait(1).to({rotation:838.5,x:-51.1},0).wait(1).to({rotation:857.3,x:-48},0).wait(1).to({rotation:875.5,x:-45},0).wait(1).to({rotation:893.2,x:-42.1},0).wait(1).to({rotation:910.4,x:-39.3},0).wait(1).to({rotation:927.1,x:-36.5},0).wait(1).to({rotation:943.3,x:-33.9},0).wait(1).to({rotation:959.1,x:-31.2},0).wait(1).to({rotation:974.5,x:-28.7},0).wait(1).to({rotation:989.4,x:-26.2},0).wait(1).to({rotation:1004,x:-23.8},0).wait(1).to({rotation:1018.2,x:-21.5},0).wait(1).to({rotation:1032,x:-19.2},0).wait(1).to({rotation:1045.5,x:-17},0).wait(1).to({rotation:1058.6,x:-14.8},0).wait(1).to({rotation:1071.4,x:-12.7},0).wait(1).to({rotation:1083.9,x:-10.7},0).wait(1).to({rotation:1096,x:-8.7},0).wait(1).to({rotation:1107.9,x:-6.7},0).wait(1).to({rotation:1119.4,x:-4.8},0).wait(1).to({rotation:1130.7,x:-3},0).wait(1).to({rotation:1141.7,x:-1.1},0).wait(1).to({rotation:1152.4,x:0.6},0).wait(1).to({rotation:1162.8,x:2.3},0).wait(1).to({rotation:1173,x:4},0).wait(1).to({rotation:1183,x:5.7},0).wait(1).to({rotation:1192.6,x:7.3},0).wait(1).to({rotation:1202.1,x:8.8},0).wait(1).to({rotation:1211.3,x:10.3},0).wait(1).to({rotation:1220.3,x:11.8},0).wait(1).to({rotation:1229,x:13.3},0).wait(1).to({rotation:1237.5,x:14.7},0).wait(1).to({rotation:1245.8,x:16},0).wait(1).to({rotation:1253.9,x:17.4},0).wait(1).to({rotation:1261.8,x:18.7},0).wait(1).to({rotation:1269.4,x:19.9},0).wait(1).to({rotation:1276.9,x:21.2},0).wait(1).to({rotation:1284.2,x:22.4},0).wait(1).to({rotation:1291.2,x:23.5},0).wait(1).to({rotation:1298.1,x:24.6},0).wait(1).to({rotation:1304.8,x:25.8},0).wait(1).to({rotation:1311.3,x:26.8},0).wait(1).to({rotation:1317.6,x:27.9},0).wait(1).to({rotation:1323.7,x:28.9},0).wait(1).to({rotation:1329.6,x:29.8},0).wait(1).to({rotation:1335.4,x:30.8},0).wait(1).to({rotation:1341,x:31.7},0).wait(1).to({rotation:1346.4,x:32.6},0).wait(1).to({rotation:1351.6,x:33.5},0).wait(1).to({rotation:1356.7,x:34.3},0).wait(1).to({rotation:1361.6,x:35.1},0).wait(1).to({rotation:1366.3,x:35.9},0).wait(1).to({rotation:1370.9,x:36.7},0).wait(1).to({rotation:1375.3,x:37.4},0).wait(1).to({rotation:1379.6,x:38.1},0).wait(1).to({rotation:1383.7,x:38.8},0).wait(1).to({rotation:1387.6,x:39.4},0).wait(1).to({rotation:1391.4,x:40},0).wait(1).to({rotation:1395.1,x:40.6},0).wait(1).to({rotation:1398.6,x:41.2},0).wait(1).to({rotation:1401.9,x:41.8},0).wait(1).to({rotation:1405.1,x:42.3},0).wait(1).to({rotation:1408.1,x:42.8},0).wait(1).to({rotation:1411,x:43.3},0).wait(1).to({rotation:1413.8,x:43.7},0).wait(1).to({rotation:1416.4,x:44.2},0).wait(1).to({rotation:1418.8,x:44.6},0).wait(1).to({rotation:1421.2,x:44.9},0).wait(1).to({rotation:1423.3,x:45.3},0).wait(1).to({rotation:1425.4,x:45.6},0).wait(1).to({rotation:1427.3,x:46},0).wait(1).to({rotation:1429.1,x:46.2},0).wait(1).to({rotation:1430.7,x:46.5},0).wait(1).to({rotation:1432.2,x:46.8},0).wait(1).to({rotation:1433.6,x:47},0).wait(1).to({rotation:1434.8,x:47.2},0).wait(1).to({rotation:1435.9,x:47.4},0).wait(1).to({rotation:1436.9,x:47.5},0).wait(1).to({rotation:1437.7,x:47.7},0).wait(1).to({rotation:1438.4,x:47.8},0).wait(1).to({rotation:1439,x:47.9},0).wait(1).to({rotation:1439.4,x:48},0).wait(1).to({rotation:1439.7},0).wait(1).to({rotation:1439.9},0).wait(1).to({rotation:1440,x:48.1},0).to({_off:true},1).wait(69));

	// wheel_top
	this.instance_7 = new lib.wheel();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-357.3,64.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).wait(1).to({rotation:-110.9,x:-316.2},0).wait(1).to({rotation:-3.6,x:-298.5},0).wait(1).to({rotation:77.3,x:-285.2},0).wait(1).to({rotation:144.5,x:-274.1},0).wait(1).to({rotation:202.9,x:-264.5},0).wait(1).to({rotation:255.1,x:-255.9},0).wait(1).to({rotation:302.4,x:-248.1},0).wait(1).to({rotation:346,x:-240.9},0).wait(1).to({rotation:386.4,x:-234.2},0).wait(1).to({rotation:424.3,x:-228},0).wait(1).to({rotation:459.8,x:-222.1},0).wait(1).to({rotation:493.4,x:-216.6},0).wait(1).to({rotation:525.3,x:-211.3},0).wait(1).to({rotation:555.6,x:-206.3},0).wait(1).to({rotation:584.6,x:-201.6},0).wait(1).to({rotation:612.3,x:-197},0).wait(1).to({rotation:638.8,x:-192.6},0).wait(1).to({rotation:664.3,x:-188.4},0).wait(1).to({rotation:688.9,x:-184.4},0).wait(1).to({rotation:712.5,x:-180.5},0).wait(1).to({rotation:735.3,x:-176.7},0).wait(1).to({rotation:757.3,x:-173.1},0).wait(1).to({rotation:778.6,x:-169.6},0).wait(1).to({rotation:799.2,x:-166.2},0).wait(1).to({rotation:819.2,x:-162.9},0).wait(1).to({rotation:838.5,x:-159.7},0).wait(1).to({rotation:857.3,x:-156.6},0).wait(1).to({rotation:875.5,x:-153.6},0).wait(1).to({rotation:893.2,x:-150.7},0).wait(1).to({rotation:910.4,x:-147.8},0).wait(1).to({rotation:927.1,x:-145.1},0).wait(1).to({rotation:943.3,x:-142.4},0).wait(1).to({rotation:959.1,x:-139.8},0).wait(1).to({rotation:974.5,x:-137.3},0).wait(1).to({rotation:989.4,x:-134.8},0).wait(1).to({rotation:1004,x:-132.4},0).wait(1).to({rotation:1018.2,x:-130.1},0).wait(1).to({rotation:1032,x:-127.8},0).wait(1).to({rotation:1045.5,x:-125.6},0).wait(1).to({rotation:1058.6,x:-123.4},0).wait(1).to({rotation:1071.4,x:-121.3},0).wait(1).to({rotation:1083.9,x:-119.2},0).wait(1).to({rotation:1096,x:-117.2},0).wait(1).to({rotation:1107.9,x:-115.3},0).wait(1).to({rotation:1119.4,x:-113.4},0).wait(1).to({rotation:1130.7,x:-111.5},0).wait(1).to({rotation:1141.7,x:-109.7},0).wait(1).to({rotation:1152.4,x:-107.9},0).wait(1).to({rotation:1162.8,x:-106.2},0).wait(1).to({rotation:1173,x:-104.5},0).wait(1).to({rotation:1183,x:-102.9},0).wait(1).to({rotation:1192.6,x:-101.3},0).wait(1).to({rotation:1202.1,x:-99.7},0).wait(1).to({rotation:1211.3,x:-98.2},0).wait(1).to({rotation:1220.3,x:-96.7},0).wait(1).to({rotation:1229,x:-95.3},0).wait(1).to({rotation:1237.5,x:-93.9},0).wait(1).to({rotation:1245.8,x:-92.5},0).wait(1).to({rotation:1253.9,x:-91.2},0).wait(1).to({rotation:1261.8,x:-89.9},0).wait(1).to({rotation:1269.4,x:-88.6},0).wait(1).to({rotation:1276.9,x:-87.4},0).wait(1).to({rotation:1284.2,x:-86.2},0).wait(1).to({rotation:1291.2,x:-85},0).wait(1).to({rotation:1298.1,x:-83.9},0).wait(1).to({rotation:1304.8,x:-82.8},0).wait(1).to({rotation:1311.3,x:-81.7},0).wait(1).to({rotation:1317.6,x:-80.7},0).wait(1).to({rotation:1323.7,x:-79.7},0).wait(1).to({rotation:1329.6,x:-78.7},0).wait(1).to({rotation:1335.4,x:-77.8},0).wait(1).to({rotation:1341,x:-76.8},0).wait(1).to({rotation:1346.4,x:-75.9},0).wait(1).to({rotation:1351.6,x:-75.1},0).wait(1).to({rotation:1356.7,x:-74.2},0).wait(1).to({rotation:1361.6,x:-73.4},0).wait(1).to({rotation:1366.3,x:-72.6},0).wait(1).to({rotation:1370.9,x:-71.9},0).wait(1).to({rotation:1375.3,x:-71.2},0).wait(1).to({rotation:1379.6,x:-70.5},0).wait(1).to({rotation:1383.7,x:-69.8},0).wait(1).to({rotation:1387.6,x:-69.1},0).wait(1).to({rotation:1391.4,x:-68.5},0).wait(1).to({rotation:1395.1,x:-67.9},0).wait(1).to({rotation:1398.6,x:-67.3},0).wait(1).to({rotation:1401.9,x:-66.8},0).wait(1).to({rotation:1405.1,x:-66.3},0).wait(1).to({rotation:1408.1,x:-65.8},0).wait(1).to({rotation:1411,x:-65.3},0).wait(1).to({rotation:1413.8,x:-64.8},0).wait(1).to({rotation:1416.4,x:-64.4},0).wait(1).to({rotation:1418.8,x:-64},0).wait(1).to({rotation:1421.2,x:-63.6},0).wait(1).to({rotation:1423.3,x:-63.2},0).wait(1).to({rotation:1425.4,x:-62.9},0).wait(1).to({rotation:1427.3,x:-62.6},0).wait(1).to({rotation:1429.1,x:-62.3},0).wait(1).to({rotation:1430.7,x:-62},0).wait(1).to({rotation:1432.2,x:-61.8},0).wait(1).to({rotation:1433.6,x:-61.6},0).wait(1).to({rotation:1434.8,x:-61.4},0).wait(1).to({rotation:1435.9,x:-61.2},0).wait(1).to({rotation:1436.9,x:-61},0).wait(1).to({rotation:1437.7,x:-60.9},0).wait(1).to({rotation:1438.4,x:-60.8},0).wait(1).to({rotation:1439,x:-60.7},0).wait(1).to({rotation:1439.4,x:-60.6},0).wait(1).to({rotation:1439.7,x:-60.5},0).wait(1).to({rotation:1439.9},0).wait(1).to({rotation:1440},0).to({_off:true},1).wait(69));

	// hotdog_bottom
	this.instance_8 = new lib.hotdog_bottom("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(282.2,195.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:-2.5,x:242.8,y:192.7,startPosition:1},0).wait(1).to({x:225.8,startPosition:2},0).wait(1).to({x:213,startPosition:3},0).wait(1).to({x:202.3,startPosition:4},0).wait(1).to({x:193.1,startPosition:5},0).wait(1).to({x:184.8,startPosition:6},0).wait(1).to({x:177.3,startPosition:7},0).wait(1).to({x:170.3,startPosition:8},0).wait(1).to({x:163.9,startPosition:9},0).wait(1).to({x:157.8,startPosition:10},0).wait(1).to({x:152.2,startPosition:11},0).wait(1).to({x:146.8,startPosition:12},0).wait(1).to({x:141.7,startPosition:13},0).wait(1).to({x:136.9,startPosition:14},0).wait(1).to({x:132.2,startPosition:15},0).wait(1).to({x:127.8,startPosition:16},0).wait(1).to({x:123.5,startPosition:17},0).wait(1).to({x:119.5,startPosition:18},0).wait(1).to({x:115.5,startPosition:19},0).wait(1).to({x:111.7,startPosition:20},0).wait(1).to({x:108.1,startPosition:21},0).wait(1).to({x:104.5,startPosition:22},0).wait(1).to({x:101.1,startPosition:23},0).wait(1).to({x:97.8,startPosition:24},0).wait(1).to({x:94.5,startPosition:25},0).wait(1).to({x:91.4,startPosition:26},0).wait(1).to({x:88.4,startPosition:27},0).wait(1).to({x:85.4,startPosition:28},0).wait(1).to({x:82.6,startPosition:29},0).wait(1).to({x:79.8,startPosition:30},0).wait(1).to({x:77.1,startPosition:31},0).wait(1).to({x:74.4,startPosition:32},0).wait(1).to({x:71.9,startPosition:33},0).wait(1).to({x:69.3,startPosition:34},0).wait(1).to({x:66.9,startPosition:35},0).wait(1).to({x:64.5,startPosition:36},0).wait(1).to({x:62.2,startPosition:37},0).wait(1).to({x:59.9,startPosition:38},0).wait(1).to({x:57.7,startPosition:39},0).wait(1).to({x:55.6,startPosition:40},0).wait(1).to({x:53.5,startPosition:41},0).wait(1).to({x:51.4,startPosition:42},0).wait(1).to({x:49.4,startPosition:43},0).wait(1).to({x:47.5,startPosition:44},0).wait(1).to({x:45.5,startPosition:45},0).wait(1).to({x:43.7,startPosition:46},0).wait(1).to({x:41.8,startPosition:47},0).wait(1).to({x:40.1,startPosition:48},0).wait(1).to({x:38.3,startPosition:49},0).wait(1).to({x:36.6,startPosition:50},0).wait(1).to({x:35,startPosition:51},0).wait(1).to({x:33.3,startPosition:52},0).wait(1).to({x:31.7,startPosition:53},0).wait(1).to({x:30.2,startPosition:54},0).wait(1).to({x:28.7,startPosition:55},0).wait(1).to({x:27.2,startPosition:56},0).wait(1).to({x:25.8,startPosition:57},0).wait(1).to({x:24.3,startPosition:58},0).wait(1).to({x:23,startPosition:59},0).wait(1).to({x:21.6,startPosition:60},0).wait(1).to({x:20.3,startPosition:61},0).wait(1).to({x:19,startPosition:62},0).wait(1).to({x:17.8,startPosition:63},0).wait(1).to({x:16.5,startPosition:64},0).wait(1).to({x:15.4,startPosition:65},0).wait(1).to({x:14.2,startPosition:66},0).wait(1).to({x:13.1,startPosition:67},0).wait(1).to({x:11.9,startPosition:68},0).wait(1).to({x:10.9,startPosition:69},0).wait(1).to({x:9.8,startPosition:70},0).wait(1).to({x:8.8,startPosition:71},0).wait(1).to({x:7.8,startPosition:72},0).wait(1).to({x:6.8,startPosition:73},0).wait(1).to({x:5.9,startPosition:74},0).wait(1).to({x:5,startPosition:75},0).wait(1).to({x:4.1,startPosition:76},0).wait(1).to({x:3.2,startPosition:77},0).wait(1).to({x:2.3,startPosition:78},0).wait(1).to({x:1.5,startPosition:79},0).wait(1).to({x:0.7,startPosition:80},0).wait(1).to({x:0,startPosition:81},0).wait(1).to({x:-0.7,startPosition:82},0).wait(1).to({x:-1.5,startPosition:83},0).wait(1).to({x:-2.2,startPosition:84},0).wait(1).to({x:-2.9,startPosition:85},0).wait(1).to({x:-3.5,startPosition:86},0).wait(1).to({x:-4.2,startPosition:87},0).wait(1).to({x:-4.8,startPosition:88},0).wait(1).to({x:-5.4,startPosition:89},0).wait(1).to({x:-5.9,startPosition:90},0).wait(1).to({x:-6.5,startPosition:91},0).wait(1).to({x:-7,startPosition:92},0).wait(1).to({x:-7.5,startPosition:93},0).wait(1).to({x:-8,startPosition:94},0).wait(1).to({x:-8.5,startPosition:95},0).wait(1).to({x:-8.9,startPosition:96},0).wait(1).to({x:-9.3,startPosition:97},0).wait(1).to({x:-9.7,startPosition:98},0).wait(1).to({x:-10.1,startPosition:99},0).wait(1).to({x:-10.5,startPosition:100},0).wait(1).to({x:-10.8,startPosition:101},0).wait(1).to({x:-11.2,startPosition:102},0).wait(1).to({x:-11.5,startPosition:103},0).wait(1).to({x:-11.8,startPosition:104},0).wait(1).to({x:-12,startPosition:105},0).wait(1).to({x:-12.3,startPosition:106},0).wait(1).to({x:-12.5,startPosition:107},0).wait(1).to({x:-12.7,startPosition:108},0).wait(1).to({x:-12.9,startPosition:109},0).wait(1).to({x:-13.1,startPosition:110},0).wait(1).to({x:-13.2,startPosition:111},0).wait(1).to({x:-13.4,startPosition:112},0).wait(1).to({x:-13.5,startPosition:113},0).wait(1).to({x:-13.6,startPosition:114},0).wait(1).to({x:-13.7,startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({x:-13.8,startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({regY:0,y:195.2,mode:"independent"},0).to({_off:true},1).wait(69));

	// wheel_top
	this.instance_9 = new lib.wheel();
	this.instance_9.parent = this;
	this.instance_9.setTransform(374.1,233.1,1.05,1.05,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({skewX:121,skewY:301,x:334.8,y:233.2},0).wait(1).to({skewX:17.6,skewY:197.6,x:317.8,y:233.1},0).wait(1).to({skewX:-60.4,skewY:119.6,x:304.9,y:233},0).wait(1).to({skewX:-125.3,skewY:54.7,x:294.2,y:233.1},0).wait(1).to({skewX:-181.7,skewY:-1.7,x:284.9,y:233.2},0).wait(1).to({skewX:-232.1,skewY:-52.1,x:276.7},0).wait(1).to({skewX:-277.9,skewY:-97.9,x:269.2,y:233.1},0).wait(1).to({skewX:-320.1,skewY:-140.1,x:262.3},0).wait(1).to({skewX:-359.2,skewY:-179.2,x:255.8},0).wait(1).to({skewX:-395.9,skewY:-215.9,x:249.8,y:233},0).wait(1).to({skewX:-430.4,skewY:-250.4,x:244},0).wait(1).to({skewX:-463,skewY:-283,x:238.6,y:233.1},0).wait(1).to({skewX:-494,skewY:-314,x:233.5},0).wait(1).to({skewX:-523.5,skewY:-343.5,x:228.7},0).wait(1).to({skewX:-551.6,skewY:-371.6,x:224.1,y:233.2},0).wait(1).to({skewX:-578.6,skewY:-398.6,x:219.7},0).wait(1).to({skewX:-604.5,skewY:-424.5,x:215.5},0).wait(1).to({skewX:-629.4,skewY:-449.4,x:211.4},0).wait(1).to({skewX:-653.3,skewY:-473.3,x:207.5,y:233.1},0).wait(1).to({skewX:-676.4,skewY:-496.4,x:203.7},0).wait(1).to({skewX:-698.7,skewY:-518.7,x:200},0).wait(1).to({skewX:-720.3,skewY:-540.3,x:196.5,y:233},0).wait(1).to({skewX:-741.1,skewY:-561.1,x:193},0).wait(1).to({skewX:-761.3,skewY:-581.3,x:189.7},0).wait(1).to({skewX:-780.9,skewY:-600.9,x:186.4},0).wait(1).to({skewX:-799.9,skewY:-619.9,x:183.3},0).wait(1).to({skewX:-818.4,skewY:-638.4,x:180.2,y:233.1},0).wait(1).to({skewX:-836.3,skewY:-656.3,x:177.3},0).wait(1).to({skewX:-853.7,skewY:-673.7,x:174.4},0).wait(1).to({skewX:-870.7,skewY:-690.7,x:171.6},0).wait(1).to({skewX:-887.2,skewY:-707.2,x:168.9},0).wait(1).to({skewX:-903.2,skewY:-723.2,x:166.3,y:233.2},0).wait(1).to({skewX:-918.8,skewY:-738.8,x:163.7},0).wait(1).to({skewX:-934.1,skewY:-754.1,x:161.2},0).wait(1).to({skewX:-948.9,skewY:-768.9,x:158.8},0).wait(1).to({skewX:-963.4,skewY:-783.4,x:156.4},0).wait(1).to({skewX:-977.5,skewY:-797.5,x:154.1},0).wait(1).to({skewX:-991.3,skewY:-811.3,x:151.9},0).wait(1).to({skewX:-1004.7,skewY:-824.7,x:149.7,y:233.1},0).wait(1).to({skewX:-1017.8,skewY:-837.8,x:147.5},0).wait(1).to({skewX:-1030.6,skewY:-850.6,x:145.4},0).wait(1).to({skewX:-1043.1,skewY:-863.1,x:143.4},0).wait(1).to({skewX:-1055.3,skewY:-875.3,x:141.4},0).wait(1).to({skewX:-1067.2,skewY:-887.2,x:139.4},0).wait(1).to({skewX:-1078.9,skewY:-898.9,x:137.5},0).wait(1).to({skewX:-1090.2,skewY:-910.2,x:135.6,y:233},0).wait(1).to({skewX:-1101.3,skewY:-921.3,x:133.8},0).wait(1).to({skewX:-1112.2,skewY:-932.2,x:132},0).wait(1).to({skewX:-1122.8,skewY:-942.8,x:130.2},0).wait(1).to({skewX:-1133.1,skewY:-953.1,x:128.5},0).wait(1).to({skewX:-1143.2,skewY:-963.2,x:126.8},0).wait(1).to({skewX:-1153.1,skewY:-973.1,x:125.2},0).wait(1).to({skewX:-1162.7,skewY:-982.7,x:123.6},0).wait(1).to({skewX:-1172.2,skewY:-992.2,x:122,y:233.1},0).wait(1).to({skewX:-1181.4,skewY:-1001.4,x:120.5},0).wait(1).to({skewX:-1190.4,skewY:-1010.4,x:119},0).wait(1).to({skewX:-1199.2,skewY:-1019.2,x:117.6},0).wait(1).to({skewX:-1207.8,skewY:-1027.8,x:116.2},0).wait(1).to({skewX:-1216.1,skewY:-1036.1,x:114.8},0).wait(1).to({skewX:-1224.3,skewY:-1044.3,x:113.4},0).wait(1).to({skewX:-1232.3,skewY:-1052.3,x:112.1},0).wait(1).to({skewX:-1240.1,skewY:-1060.1,x:110.8},0).wait(1).to({skewX:-1247.7,skewY:-1067.7,x:109.6},0).wait(1).to({skewX:-1255.2,skewY:-1075.2,x:108.4,y:233.2},0).wait(1).to({skewX:-1262.4,skewY:-1082.4,x:107.2},0).wait(1).to({skewX:-1269.5,skewY:-1089.5,x:106},0).wait(1).to({skewX:-1276.4,skewY:-1096.4,x:104.9},0).wait(1).to({skewX:-1283.1,skewY:-1103.1,x:103.8},0).wait(1).to({skewX:-1289.7,skewY:-1109.7,x:102.7},0).wait(1).to({skewX:-1296.1,skewY:-1116.1,x:101.7},0).wait(1).to({skewX:-1302.3,skewY:-1122.3,x:100.7},0).wait(1).to({skewX:-1308.4,skewY:-1128.4,x:99.7},0).wait(1).to({skewX:-1314.3,skewY:-1134.3,x:98.7},0).wait(1).to({skewX:-1320,skewY:-1140,x:97.8},0).wait(1).to({skewX:-1325.6,skewY:-1145.6,x:96.9},0).wait(1).to({skewX:-1331.1,skewY:-1151.1,x:96},0).wait(1).to({skewX:-1336.4,skewY:-1156.4,x:95.1},0).wait(1).to({skewX:-1341.5,skewY:-1161.5,x:94.3},0).wait(1).to({skewX:-1346.5,skewY:-1166.5,x:93.5},0).wait(1).to({skewX:-1351.4,skewY:-1171.4,x:92.7},0).wait(1).to({skewX:-1356.1,skewY:-1176.1,x:91.9,y:233.1},0).wait(1).to({skewX:-1360.6,skewY:-1180.6,x:91.2},0).wait(1).to({skewX:-1365,skewY:-1185,x:90.4},0).wait(1).to({skewX:-1369.3,skewY:-1189.3,x:89.7},0).wait(1).to({skewX:-1373.5,skewY:-1193.5,x:89.1},0).wait(1).to({skewX:-1377.5,skewY:-1197.5,x:88.4},0).wait(1).to({skewX:-1381.3,skewY:-1201.3,x:87.8},0).wait(1).to({skewX:-1385.1,skewY:-1205.1,x:87.2},0).wait(1).to({skewX:-1388.7,skewY:-1208.7,x:86.6},0).wait(1).to({skewX:-1392.1,skewY:-1212.1,x:86},0).wait(1).to({skewX:-1395.5,skewY:-1215.5,x:85.4},0).wait(1).to({skewX:-1398.7,skewY:-1218.7,x:84.9},0).wait(1).to({skewX:-1401.8,skewY:-1221.8,x:84.4},0).wait(1).to({skewX:-1404.7,skewY:-1224.7,x:83.9},0).wait(1).to({skewX:-1407.6,skewY:-1227.6,x:83.5},0).wait(1).to({skewX:-1410.3,skewY:-1230.3,x:83},0).wait(1).to({skewX:-1412.9,skewY:-1232.9,x:82.6},0).wait(1).to({skewX:-1415.3,skewY:-1235.3,x:82.2},0).wait(1).to({skewX:-1417.7,skewY:-1237.7,x:81.8},0).wait(1).to({skewX:-1419.9,skewY:-1239.9,x:81.4},0).wait(1).to({skewX:-1422,skewY:-1242,x:81.1},0).wait(1).to({skewX:-1423.9,skewY:-1243.9,x:80.8},0).wait(1).to({skewX:-1425.8,skewY:-1245.8,x:80.4},0).wait(1).to({skewX:-1427.5,skewY:-1247.5,x:80.2},0).wait(1).to({skewX:-1429.2,skewY:-1249.2,x:79.9},0).wait(1).to({skewX:-1430.7,skewY:-1250.7,x:79.6},0).wait(1).to({skewX:-1432.1,skewY:-1252.1,x:79.4},0).wait(1).to({skewX:-1433.3,skewY:-1253.3,x:79.2},0).wait(1).to({skewX:-1434.5,skewY:-1254.5,x:79},0).wait(1).to({skewX:-1435.6,skewY:-1255.6,x:78.8},0).wait(1).to({skewX:-1436.5,skewY:-1256.5,x:78.7},0).wait(1).to({skewX:-1437.3,skewY:-1257.3,x:78.5},0).wait(1).to({skewX:-1438,skewY:-1258,x:78.4},0).wait(1).to({skewX:-1438.6,skewY:-1258.6,x:78.3},0).wait(1).to({skewX:-1439.1,skewY:-1259.1,x:78.2},0).wait(1).to({skewX:-1439.5,skewY:-1259.5},0).wait(1).to({skewX:-1439.8,skewY:-1259.8,x:78.1},0).wait(1).to({skewX:-1439.9,skewY:-1259.9},0).wait(1).to({skewX:-1440,skewY:-1260},0).to({_off:true},1).wait(69));

	// wheel_top
	this.instance_10 = new lib.wheel();
	this.instance_10.parent = this;
	this.instance_10.setTransform(261.9,233.5,1.05,1.05,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({skewX:301,skewY:121,x:222.6},0).wait(1).to({skewX:197.6,skewY:17.6,x:205.6},0).wait(1).to({skewX:119.6,skewY:-60.4,x:192.8},0).wait(1).to({skewX:54.7,skewY:-125.3,x:182.1},0).wait(1).to({skewX:-1.7,skewY:-181.7,x:172.8},0).wait(1).to({skewX:-52.1,skewY:-232.1,x:164.5},0).wait(1).to({skewX:-97.9,skewY:-277.9,x:157},0).wait(1).to({skewX:-140.1,skewY:-320.1,x:150.1},0).wait(1).to({skewX:-179.2,skewY:-359.2,x:143.6},0).wait(1).to({skewX:-215.9,skewY:-395.9,x:137.6},0).wait(1).to({skewX:-250.4,skewY:-430.4,x:131.9},0).wait(1).to({skewX:-283,skewY:-463,x:126.6},0).wait(1).to({skewX:-314,skewY:-494,x:121.5},0).wait(1).to({skewX:-343.5,skewY:-523.5,x:116.6},0).wait(1).to({skewX:-371.6,skewY:-551.6,x:112},0).wait(1).to({skewX:-398.6,skewY:-578.6,x:107.6},0).wait(1).to({skewX:-424.5,skewY:-604.5,x:103.3},0).wait(1).to({skewX:-449.4,skewY:-629.4,x:99.2},0).wait(1).to({skewX:-473.3,skewY:-653.3,x:95.3},0).wait(1).to({skewX:-496.4,skewY:-676.4,x:91.5},0).wait(1).to({skewX:-518.7,skewY:-698.7,x:87.8},0).wait(1).to({skewX:-540.3,skewY:-720.3,x:84.3},0).wait(1).to({skewX:-561.1,skewY:-741.1,x:80.8},0).wait(1).to({skewX:-581.3,skewY:-761.3,x:77.5},0).wait(1).to({skewX:-600.9,skewY:-780.9,x:74.3},0).wait(1).to({skewX:-619.9,skewY:-799.9,x:71.2},0).wait(1).to({skewX:-638.4,skewY:-818.4,x:68.1},0).wait(1).to({skewX:-656.3,skewY:-836.3,x:65.2},0).wait(1).to({skewX:-673.7,skewY:-853.7,x:62.3},0).wait(1).to({skewX:-690.7,skewY:-870.7,x:59.5},0).wait(1).to({skewX:-707.2,skewY:-887.2,x:56.8},0).wait(1).to({skewX:-723.2,skewY:-903.2,x:54.2},0).wait(1).to({skewX:-738.8,skewY:-918.8,x:51.6},0).wait(1).to({skewX:-754.1,skewY:-934.1,x:49.1},0).wait(1).to({skewX:-768.9,skewY:-948.9,x:46.7},0).wait(1).to({skewX:-783.4,skewY:-963.4,x:44.3},0).wait(1).to({skewX:-797.5,skewY:-977.5,x:42},0).wait(1).to({skewX:-811.3,skewY:-991.3,x:39.7},0).wait(1).to({skewX:-824.7,skewY:-1004.7,x:37.5},0).wait(1).to({skewX:-837.8,skewY:-1017.8,x:35.3},0).wait(1).to({skewX:-850.6,skewY:-1030.6,x:33.2},0).wait(1).to({skewX:-863.1,skewY:-1043.1,x:31.2},0).wait(1).to({skewX:-875.3,skewY:-1055.3,x:29.2},0).wait(1).to({skewX:-887.2,skewY:-1067.2,x:27.2},0).wait(1).to({skewX:-898.9,skewY:-1078.9,x:25.3},0).wait(1).to({skewX:-910.2,skewY:-1090.2,x:23.4},0).wait(1).to({skewX:-921.3,skewY:-1101.3,x:21.6},0).wait(1).to({skewX:-932.2,skewY:-1112.2,x:19.8},0).wait(1).to({skewX:-942.8,skewY:-1122.8,x:18.1},0).wait(1).to({skewX:-953.1,skewY:-1133.1,x:16.4},0).wait(1).to({skewX:-963.2,skewY:-1143.2,x:14.7},0).wait(1).to({skewX:-973.1,skewY:-1153.1,x:13.1},0).wait(1).to({skewX:-982.7,skewY:-1162.7,x:11.5},0).wait(1).to({skewX:-992.2,skewY:-1172.2,x:9.9},0).wait(1).to({skewX:-1001.4,skewY:-1181.4,x:8.4},0).wait(1).to({skewX:-1010.4,skewY:-1190.4,x:6.9},0).wait(1).to({skewX:-1019.2,skewY:-1199.2,x:5.5},0).wait(1).to({skewX:-1027.8,skewY:-1207.8,x:4.1},0).wait(1).to({skewX:-1036.1,skewY:-1216.1,x:2.7},0).wait(1).to({skewX:-1044.3,skewY:-1224.3,x:1.4},0).wait(1).to({skewX:-1052.3,skewY:-1232.3,x:0.1},0).wait(1).to({skewX:-1060.1,skewY:-1240.1,x:-1.2},0).wait(1).to({skewX:-1067.7,skewY:-1247.7,x:-2.5},0).wait(1).to({skewX:-1075.2,skewY:-1255.2,x:-3.7},0).wait(1).to({skewX:-1082.4,skewY:-1262.4,x:-4.9},0).wait(1).to({skewX:-1089.5,skewY:-1269.5,x:-6.1},0).wait(1).to({skewX:-1096.4,skewY:-1276.4,x:-7.2},0).wait(1).to({skewX:-1103.1,skewY:-1283.1,x:-8.3},0).wait(1).to({skewX:-1109.7,skewY:-1289.7,x:-9.4},0).wait(1).to({skewX:-1116.1,skewY:-1296.1,x:-10.4},0).wait(1).to({skewX:-1122.3,skewY:-1302.3,x:-11.5},0).wait(1).to({skewX:-1128.4,skewY:-1308.4,x:-12.5},0).wait(1).to({skewX:-1134.3,skewY:-1314.3,x:-13.4},0).wait(1).to({skewX:-1140,skewY:-1320,x:-14.4},0).wait(1).to({skewX:-1145.6,skewY:-1325.6,x:-15.3},0).wait(1).to({skewX:-1151.1,skewY:-1331.1,x:-16.2},0).wait(1).to({skewX:-1156.4,skewY:-1336.4,x:-17.1},0).wait(1).to({skewX:-1161.5,skewY:-1341.5,x:-17.9},0).wait(1).to({skewX:-1166.5,skewY:-1346.5,x:-18.7},0).wait(1).to({skewX:-1171.4,skewY:-1351.4,x:-19.5},0).wait(1).to({skewX:-1176.1,skewY:-1356.1,x:-20.3},0).wait(1).to({skewX:-1180.6,skewY:-1360.6,x:-21},0).wait(1).to({skewX:-1185,skewY:-1365,x:-21.8},0).wait(1).to({skewX:-1189.3,skewY:-1369.3,x:-22.5},0).wait(1).to({skewX:-1193.5,skewY:-1373.5,x:-23.2},0).wait(1).to({skewX:-1197.5,skewY:-1377.5,x:-23.8},0).wait(1).to({skewX:-1201.3,skewY:-1381.3,x:-24.5},0).wait(1).to({skewX:-1205.1,skewY:-1385.1,x:-25.1},0).wait(1).to({skewX:-1208.7,skewY:-1388.7,x:-25.7},0).wait(1).to({skewX:-1212.1,skewY:-1392.1,x:-26.2},0).wait(1).to({skewX:-1215.5,skewY:-1395.5,x:-26.8},0).wait(1).to({skewX:-1218.7,skewY:-1398.7,x:-27.3},0).wait(1).to({skewX:-1221.8,skewY:-1401.8,x:-27.8},0).wait(1).to({skewX:-1224.7,skewY:-1404.7,x:-28.3},0).wait(1).to({skewX:-1227.6,skewY:-1407.6,x:-28.8},0).wait(1).to({skewX:-1230.3,skewY:-1410.3,x:-29.2},0).wait(1).to({skewX:-1232.9,skewY:-1412.9,x:-29.6},0).wait(1).to({skewX:-1235.3,skewY:-1415.3,x:-30},0).wait(1).to({skewX:-1237.7,skewY:-1417.7,x:-30.4},0).wait(1).to({skewX:-1239.9,skewY:-1419.9,x:-30.8},0).wait(1).to({skewX:-1242,skewY:-1422,x:-31.1},0).wait(1).to({skewX:-1243.9,skewY:-1423.9,x:-31.5},0).wait(1).to({skewX:-1245.8,skewY:-1425.8,x:-31.8},0).wait(1).to({skewX:-1247.5,skewY:-1427.5,x:-32.1},0).wait(1).to({skewX:-1249.2,skewY:-1429.2,x:-32.3},0).wait(1).to({skewX:-1250.7,skewY:-1430.7,x:-32.6},0).wait(1).to({skewX:-1252.1,skewY:-1432.1,x:-32.8},0).wait(1).to({skewX:-1253.3,skewY:-1433.3,x:-33},0).wait(1).to({skewX:-1254.5,skewY:-1434.5,x:-33.2},0).wait(1).to({skewX:-1255.6,skewY:-1435.6,x:-33.4},0).wait(1).to({skewX:-1256.5,skewY:-1436.5,x:-33.5},0).wait(1).to({skewX:-1257.3,skewY:-1437.3,x:-33.7},0).wait(1).to({skewX:-1258,skewY:-1438,x:-33.8},0).wait(1).to({skewX:-1258.6,skewY:-1438.6,x:-33.9},0).wait(1).to({skewX:-1259.1,skewY:-1439.1,x:-34},0).wait(1).to({skewX:-1259.5,skewY:-1439.5},0).wait(1).to({skewX:-1259.8,skewY:-1439.8,x:-34.1},0).wait(1).to({skewX:-1259.9,skewY:-1439.9},0).wait(1).to({skewX:-1260,skewY:-1440},0).to({_off:true},1).wait(69));

	// lines
	this.instance_11 = new lib.lines("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(155.7,251,1,1,0,0,0,-15.2,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).wait(174));

	// t1
	this.instance_12 = new lib.t1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(195,192.6,0.5,0.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:-117.8},10,cjs.Ease.cubicIn).to({_off:true},95).wait(69));

	// bg
	this.instance_13 = new lib.bg3();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(189));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,559.2,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,560.2,602);
// library properties:
lib.properties = {
	id: 'C6CFCF143BE44602932F386B1A77FDC2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/body.png", id:"body"},
		{src:"images/butterfly.png", id:"butterfly"},
		{src:"images/pupil.png", id:"pupil"}
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