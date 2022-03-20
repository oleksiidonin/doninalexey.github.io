(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bubble = function() {
	this.initialize(img.bubble);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,178);


(lib.iqos = function() {
	this.initialize(img.iqos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,300);


(lib.multi = function() {
	this.initialize(img.multi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,304);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,78);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,54);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,38);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,20);


(lib.p5 = function() {
	this.initialize(img.p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,48);


(lib.p6 = function() {
	this.initialize(img.p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,12);// helper functions:

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
	this.shape.graphics.f("#000000").s().p("AJaDHIgBgEIABgEQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABIABAEIgBAEQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAG/DEQgGgGgEgIQgCgIgBgNIgaAAIAAAmIgGAAIAAhNIAGAAIAAAiIAaAAQAAgJAEgJQADgIAHgFQAGgFALAAQALAAAHAGQAGAFADAJQADAJAAALQAAAMgDAJQgDAJgHAFQgHAFgLAAQgKAAgHgEgAHCCCQgGAFgCAIQgCAGAAALQAAALACAHQADAIAFAFQAGAEAJAAQAJAAAFgEQAFgEADgJQADgIAAgKQAAgJgDgIQgDgIgFgFQgGgFgIAAQgJAAgGAFgAEVDEQgGgGgEgIQgCgIgBgNIgaAAIAAAmIgGAAIAAhNIAGAAIAAAiIAaAAQAAgJAEgJQADgIAHgFQAGgFALAAQALAAAHAGQAGAFADAJQADAJAAALQAAAMgDAJQgDAJgHAFQgHAFgLAAQgKAAgHgEgAEYCCQgGAFgCAIQgCAGAAALQAAALACAHQADAIAFAFQAGAEAJAAQAJAAAFgEQAFgEADgJQADgIAAgKQAAgJgDgIQgDgIgFgFQgGgFgIAAQgJAAgGAFgAhhDDQgGgFAAgKQAAgMAKgGQAJgFASgCIAOAAIAAgGQAAgMgEgGQgFgFgKAAIgLABIgMAEIgBgFIALgEQAGgCAHAAQAMAAAHAHQAGAGAAAPIAAAzIgEAAIgBgOIgBAAQgCAGgHAFQgHAEgLAAQgMAAgGgFgAhCCgQgOABgJAEQgIAFAAAKQAAAHAFAEQAFAFAIAAQAOAAAHgIQAGgHAAgOIAAgIgAmqDDQgHgFgFgJQgDgIAAgNQAAgSAJgLQAJgLAQAAQALAAAIAGQAHAFAEAJQADAIAAAMQAAANgEAIQgDAJgIAFQgHAFgMAAQgLAAgHgFgAmsCHQgIAJAAAQQAAAQAHAKQAHAJAOAAQAKAAAGgEQAGgFADgHQADgIAAgLQAAgLgCgGQgDgIgGgFQgGgFgKAAQgOAAgHAKgApKDEQgIgGgDgIQgEgIAAgNQAAgMAEgKQAEgIAJgGQAIgFAMAAIAKABIAJADIgCAFIgIgDIgJAAQgKAAgHAEQgHAEgEAIQgEAJAAAKQAAAIAEAKQADAHAGAFQAHAEAKAAIALgBQAFAAAEgDIAAAGIgJACIgLABQgLAAgJgEgAI4DHIAAgmIgyAAIAAAmIgGAAIAAhNIAGAAIAAAiIAyAAIAAgiIAGAAIAABNgAFmDHIAAhIIgaAAIAAgFIA6AAIAAAFIgaAAIAABIgAC8DHIAAhIIgaAAIAAgFIA6AAIAAAFIgaAAIAABIgABgDHIABhHIgwBHIgHAAIAAhNIAGAAIAABAIgBAGIAwhGIAHAAIAABNgAgBDHIAAhIIgaAAIAAgFIA5AAIAAAFIgaAAIAABIgAixDHIAAhNIAgAAQANAAAGAFQAGAFAAAIQAAAIgEAEQgDAEgHACIAAAAQAIABAFAFQAEAFAAAIQAAAKgGAGQgHAGgOAAgAirDCIAaAAQAWAAAAgRQAAgIgGgEQgFgEgMAAIgZAAgAirCcIAZAAQAKAAAFgEQAFgEAAgHQAAgGgEgEQgFgEgLAAIgZAAgAjVDHIABhHIgwBHIgHAAIAAhNIAGAAIAABAIgBAGIAwhGIAHAAIAABNgAkdDHIgkgnIAAAnIgFAAIAAgnIgkAnIgHAAIAlgnIgigmIAGAAIAiAlIAAglIAFAAIAAAlIAiglIAHAAIgiAmIAkAngAnYDHIAAhIIgxAAIAABIIgGAAIAAhNIA9AAIAABNgANqBXIAAgFIAIACQAFAAAEgEQAFgEACgJIAGgOIgehMIAGAAIAbBFIAahFIAGAAIgkBcQgCAJgGAGQgFAEgIAAIgIgBgAAsBXIAAgFIAIACQAFAAAEgEQAFgEACgJIAGgOIgehMIAGAAIAbBFIAahFIA+AAIAAAFIgaAAIAABHIgGAAIAAhHIgaAAIgiBXQgCAJgGAGQgFAEgIAAIgIgBgAGDBXIAAhuIAFAAIABARQABgEAEgFQAFgFAEgCQAGgDAIAAQAPAAAIALQAIAJAAATQAAAUgJAKQgIALgQAAQgKAAgHgFQgGgFgDgHIAAAxgAGQgKQgHAIAAAQIAAABQAAARAHAJQAHAJAMAAQANAAAHgKQAHgJAAgRQAAghgaAAQgNAAgHAJgAJlBPIAAgaIg8AAIAAAaIgGAAIAAgfIAFAAQAKgOAFgSQAEgQABgXIAlAAIAABHIAKAAIAAAfgAIuAwIAtAAIAAhCIgaAAQgBAogSAagAnLBIQAFgSADgSIAGAAIAAACIgKAigAQDAxQgGgGAAgJQAAgMAKgGQAJgFASgBIAOgBIAAgGQAAgLgEgGQgFgFgKAAIgLABIgMAFIgBgFQAFgDAGgCIANgBQANAAAGAGQAGAGAAAOIAAAzIgEAAIgBgOIgBAAQgDAGgGAFQgHAFgLAAQgLAAgHgGgAQiAOQgPABgIAFQgIAEAAAKQAAAHAFAFQAFAEAIAAQAOAAAHgIQAGgHAAgOIAAgHgAKIAyQgHgFgFgKQgDgIAAgMQAAgSAJgLQAJgLAQAAQALAAAIAGQAHAFAEAJQADAIAAAMQAAAMgEAIQgEAKgHAEQgIAGgLAAQgKAAgIgFgAKGgKQgIAJAAAQQAAAPAHAKQAHAKAOAAQAKAAAGgFQAGgEADgIQADgIAAgKQAAgMgCgFQgDgIgGgFQgGgEgKAAQgOAAgHAJgAHoAyQgHgFgFgKQgDgIAAgMQAAgSAJgLQAJgLAQAAQALAAAIAGQAHAFAEAJQADAIAAAMQAAAMgEAIQgEAKgHAEQgIAGgLAAQgKAAgIgFgAHmgKQgIAJAAAQQAAAPAHAKQAHAKAOAAQAKAAAGgFQAGgEADgIQADgIAAgKQAAgMgCgFQgDgIgGgFQgGgEgKAAQgOAAgHAJgAhbAyQgHgFgFgKQgDgIAAgMQAAgSAJgLQAJgLAQAAQALAAAIAGQAHAFAEAJQADAIAAAMQAAAMgEAIQgEAKgHAEQgIAGgLAAQgKAAgIgFgAhdgKQgIAJAAAQQAAAPAHAKQAHAKAOAAQAKAAAGgFQAGgEADgIQADgIAAgKQAAgMgCgFQgDgIgGgFQgGgEgKAAQgOAAgHAJgArSAxQgGgGAAgJQAAgMAKgGQAJgFASgBIAPgBIAAgGQAAgLgFgGQgFgFgKAAIgLABIgMAFIgBgFQAFgDAGgCIANgBQANAAAGAGQAGAGAAAOIAAAzIgEAAIgBgOIgBAAQgDAGgGAFQgHAFgLAAQgLAAgHgGgAqyAOQgQABgIAFQgIAEAAAKQAAAHAFAFQAFAEAIAAQAOAAAHgIQAGgHABgOIAAgHgAwbAyQgHgFgFgKQgDgIAAgMQAAgSAJgLQAJgLAQAAQALAAAIAGQAHAFAEAJQADAIAAAMQAAAMgEAIQgEAKgHAEQgIAGgLAAQgKAAgIgFgAwdgKQgIAJAAAQQAAAPAHA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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-122.6,-20,245.4,40.1), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-72.8,-53.1,145.7,106.2), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-72.3,-53.6,144.6,107.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bubble();
	this.instance.parent = this;
	this.instance.setTransform(-67.3,-159.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AO9NGQgPgPAAgVQAAgWAPgPQAOgPAWAAQAWAAAPAPQAOAPAAAWQAAAVgOAPQgPAOgWAAQgWAAgOgOgAJ5NMIAAjIIiXjtIBlAAIBeCYIBeiYIBlAAIiaDtIAADIgAEANMIAAlsIhiAAIAAhJIEaAAIAABJIhiAAIAAFsgAAANMIh0iwIgKAAIAACwIhWAAIAAm1IB/AAQBIgBAnAiQArAkAAA+QAABFgzAiQgTANgcAGICIC4gAh+JgIAYAAQAcAAAUgJQAkgQAAgpQAAgqgjgPQgUgJgcAAIgZAAgAmKNMIgnhcIixAAIgmBcIhdAAIC+m+IBAAAIC5G+gAnKKrIg+ieIg/CeIB9AAgAwTNMIAAm1IB/AAQApAAAYAGQAcAHAXAUQAtAoAABCQAAA9glAkQgmAnhJAAIg3AAIAACigAu+JgIAjAAQASAAAJgBQARgDAMgJQAYgTAAggQAAghgZgRQgTgOgpAAIgeAAgAO4LHIAAkwIBSAAIAAEwgAJoDbIAAjIIiWjsIBlAAIBeCYIBeiYIBlAAIiaDsIAADIgAGaDbIgnhbIiwAAIgnBbIhdAAIC+m9IBAAAIC5G9gAFaA6Ig9icIhACcIB9AAgAlvDbIAAm0IBzAAQAzAAAjAIQArAKAiAYQAoAeAWAvQAWAtAAA2QAAA3gXAtQgWAugrAeQgkAagpAIQggAIg0AAgAkZCSIAaAAQBDgBAogcQAagSAOggQAPgfAAgjQAAgigOgfQgOgfgagUQgogdhEAAIgaAAgAwTDbIAAm0IBsAAQAeAAAUAEQAiAFAXATQATAOALAYQALAYAAAcQAAA6gxAbQAiAHAXAUQAfAeAAA0QAAA4glAgQgoAkhHAAgAu+CVIAlAAQAmAAAUgLQAbgQAAgjQAAgjgggOQgSgJgoAAIggAAgAu+gjIAZAAQAWAAAQgIQAcgOAAgkQAAgcgUgOQgRgNgdAAIgZAAgAqNBpIAAhKICrAAIAABKgAnhmqQgcARgfAHQgdAIglAAQhngBhBg/QhChAAAhlQAAhkBChAQBBhBBnAAQBnAABCBBQBBBAAABkQAABbg6BBIBHBHIhWAJgArHrcQgpArAABCQAABCApAqQAqArBBAAQAlAAAcgOIhZhXIBZgHIAyA0QAdgmAAg5QAAhCgpgrQgpgqhAAAQhAAAgpAqgAFRmnQgfgUgXgiIA3g1QAPAdAcAQQAXANAaAAQAeAAATgRQATgQAAgbQAAgYgRgQQgLgKgUgIIglgNQgxgSgYgVQgigcAAg1QAAg1AhgkQAngoBEAAQBLAAAxA0IgsA6QgdgmgrAAQgfAAgQASQgNANAAAVQAAASANALQAIAHAMAFQAKAFAXAIQAhAMAQAHQAZALAPAOQAlAjAAA5QAABAgqAnQgqAohEABQg2gBgrgcgAjRnKQhChAAAhlQAAhkBChAQBBhBBnAAQBmAABCBBQBBBAAABkQAABlhBBAQhCA/hmABQhngBhBg/gAiSrcQgpArAABCQAABDApAqQApAqBAAAQA/AAApgqQApgqAAhDQAAhCgpgrQgpgqg/AAQhAAAgpAqgAwTmUIAAm2IBVAAIAAG2g");
	this.shape.setTransform(0,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-104.4,-159.2,208.9,318.5), null);


(lib.p6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p6();
	this.instance.parent = this;
	this.instance.setTransform(-12,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p6_1, new cjs.Rectangle(-12,-6,24,12), null);


(lib.p5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p5();
	this.instance.parent = this;
	this.instance.setTransform(-47,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5_1, new cjs.Rectangle(-47,-24,94,48), null);


(lib.p4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-19,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4_1, new cjs.Rectangle(-19,-10,38,20), null);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-21,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(-21,-19,42,38), null);


(lib.p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-14,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_1, new cjs.Rectangle(-14,-27,28,54), null);


(lib.p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-51,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(-51,-39,102,78), null);


(lib.multi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.multi();
	this.instance.parent = this;
	this.instance.setTransform(-90,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.multi_1, new cjs.Rectangle(-90,-152,180,304), null);


(lib.iqos_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.iqos();
	this.instance.parent = this;
	this.instance.setTransform(-81,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.iqos_1, new cjs.Rectangle(-81,-150,162,300), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBDIAAhyIgfAAIAAgTIBRAAIAAATIgfAAIAAByg");
	this.shape.setTransform(36.8,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3gxIAVAAIAABZIBaheIAACKIgVAAIAAhZIhaBfgAgghSIAQgHQADALANAAQAOAAADgLIAQAHQgIAVgZAAQgYAAgIgVg");
	this.shape_1.setTransform(24.3,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBHIgOghIg4AAIgPAhIgWAAIBBiNIBACNgAAUATIgTgsIgUAsIAnAAg");
	this.shape_2.setTransform(9.5,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAzQgWgUAAgfQAAgeAWgVQASgRAdAAQATAAARAJIAAAYQgRgOgUAAQgUAAgOAOQgNAOAAAVQAAAWANAOQAOAOAUAAQAWAAAPgPIAAAYQgRAKgUAAQgbAAgTgSg");
	this.shape_3.setTransform(-3.9,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArBHIgOghIg4AAIgPAhIgWAAIBBiNIBACNgAAVATIgUgsIgUAsIAoAAg");
	this.shape_4.setTransform(-21.2,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdBDIAAg+Ig5AAIAAA+IgUAAIAAiFIAUAAIAAA1IA5AAIAAg1IAUAAIAACFg");
	this.shape_5.setTransform(-35.3,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("ApIjvISRAAIAAHfIyRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-59.5,-25,119,50), null);


(lib.bg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AECAE0").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDC4B3").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5DAC9").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgWVAqWQgMAAgJgJQgJgJAAgMMAAAhTvQAAgMAJgJQAJgJAMAAMAsrAAAQANAAAIAJQAJAJAAAMMAAABTvQAAAMgJAJQgJAJgMAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-25}).wait(55).to({graphics:null,x:0,y:0}).wait(135));

	// t1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-8,405);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-37},15).to({y:-77},29).to({y:-457},10,cjs.Ease.cubicIn).to({_off:true},1).wait(135));

	// p
	this.instance_1 = new lib.p6_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35,-47);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({x:64,y:-144},7,cjs.Ease.cubicOut).to({x:93.3,y:-168.7},25).to({x:163,y:-235.7},10,cjs.Ease.cubicIn).wait(1).to({x:0,y:0,alpha:0},0).to({x:-40,y:10.1,alpha:1},9,cjs.Ease.cubicOut).to({x:-79.1,y:20},115).to({x:-167.5,y:42.9},10,cjs.Ease.cubicIn).wait(1));

	// p
	this.instance_2 = new lib.p5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35,-47);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:40,y:-257},7,cjs.Ease.cubicOut).to({x:53,y:-285},25).to({x:68.3,y:-333},10,cjs.Ease.cubicIn).wait(1).to({x:0,y:0,alpha:0},0).to({x:79.1,y:-238.9,alpha:1},9,cjs.Ease.cubicOut).to({x:99,y:-295.9},115).to({x:107.8,y:-324},10,cjs.Ease.cubicIn).wait(1));

	// p
	this.instance_3 = new lib.p4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-35,-47);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({x:-87.5,y:-219},7,cjs.Ease.cubicOut).to({x:-96.9,y:-242},25).to({x:-118,y:-319},10,cjs.Ease.cubicIn).wait(1).to({x:0,y:0,alpha:0},0).to({x:-94.5,y:-46,alpha:1},9,cjs.Ease.cubicOut).to({x:-126.9,y:-63},115).to({x:-169,y:-81.7},10,cjs.Ease.cubicIn).wait(1));

	// p
	this.instance_4 = new lib.p3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-35,-47);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({x:-96,y:227},7,cjs.Ease.cubicOut).to({x:-103,y:258},25).to({x:-116,y:320},10,cjs.Ease.cubicIn).wait(1).to({x:0,y:0,alpha:0},0).to({x:-96.5,y:178.5,alpha:1},9,cjs.Ease.cubicOut).to({x:-134.5,y:257},115).to({x:-167,y:319},10,cjs.Ease.cubicIn).wait(1));

	// p
	this.instance_5 = new lib.p2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-35,-47);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({x:7,y:152},7,cjs.Ease.cubicOut).to({x:19,y:201},25).to({x:45,y:328},10,cjs.Ease.cubicIn).wait(1).to({x:0,y:0,alpha:0},0).to({x:14,y:126.8,alpha:1},9,cjs.Ease.cubicOut).to({x:24,y:196},115).to({x:38.1,y:327},10,cjs.Ease.cubicIn).wait(1));

	// p
	this.instance_6 = new lib.p1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-35,-47);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({x:83,y:136},7,cjs.Ease.cubicOut).to({x:104,y:170},25).to({x:197,y:316},10,cjs.Ease.cubicIn).wait(1).to({x:0,y:0,alpha:0},0).to({x:95,y:110.8,alpha:1},9,cjs.Ease.cubicOut).to({x:146,y:174},115).to({x:201,y:237},10,cjs.Ease.cubicIn).wait(1));

	// urText
	this.instance_7 = new lib.urText();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,271.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(190));

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvgEgWqguGQgIAJgBAMMAAABTvQABANAIAIQAJAJANAAMAsqAAAQAMAAAKgJQAIgIAAgNMAAAhTvQAAgMgIgJQgJgIgNAAMgsqAAAQgNAAgJAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(190));

	// btn
	this.instance_8 = new lib.btn();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-70,190,0.02,0.02,0,0,0,-2.5,2.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(114).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},10,cjs.Ease.cubicOut).wait(15).to({scaleX:1.1,scaleY:1.1,x:-69.9,y:189.9},5).wait(15).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,x:-70,y:190},5).wait(15).to({x:210},10,cjs.Ease.cubicIn).wait(1));

	// multi
	this.instance_9 = new lib.multi_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-240,-135);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(84).to({_off:false},0).to({x:-60},10,cjs.Ease.cubicOut).wait(85).to({x:-340},10,cjs.Ease.cubicIn).wait(1));

	// t3
	this.instance_10 = new lib.t3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(219.7,-143.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({_off:false},0).to({x:49.7},10,cjs.Ease.cubicOut).wait(80).to({x:-230.3},10,cjs.Ease.cubicIn).wait(1));

	// iqos
	this.instance_11 = new lib.iqos_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(229,97);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).to({x:69},10,cjs.Ease.cubicOut).wait(115).to({x:349},10,cjs.Ease.cubicIn).wait(1));

	// t2
	this.instance_12 = new lib.t2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-220.2,91.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).to({x:-57.2},10,cjs.Ease.cubicOut).wait(110).to({x:222.8},10,cjs.Ease.cubicIn).wait(1));

	// bg3
	this.instance_13 = new lib.bg3();
	this.instance_13.parent = this;
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(84).to({_off:false},0).to({alpha:1},5).wait(95).to({alpha:0},5).wait(1));

	// bg2
	this.instance_14 = new lib.bg2();
	this.instance_14.parent = this;
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48).to({_off:false},0).to({alpha:1},6).to({_off:true},35).wait(101));

	// bg1
	this.instance_15 = new lib.bg1();
	this.instance_15.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(190));

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
p.nominalBounds = new cjs.Rectangle(149,299,302,865.3);
// library properties:
lib.properties = {
	id: '83F43A26FED64253A2BE35F5AC1C47B4',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bubble.png", id:"bubble"},
		{src:"images/iqos.png", id:"iqos"},
		{src:"images/multi.png", id:"multi"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2.png", id:"p2"},
		{src:"images/p3.png", id:"p3"},
		{src:"images/p4.png", id:"p4"},
		{src:"images/p5.png", id:"p5"},
		{src:"images/p6.png", id:"p6"}
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
an.compositions['83F43A26FED64253A2BE35F5AC1C47B4'] = {
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