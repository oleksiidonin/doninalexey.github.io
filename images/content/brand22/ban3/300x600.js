(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.banana = function() {
	this.initialize(img.banana);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,50);


(lib.btn_bg = function() {
	this.initialize(img.btn_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,49);// helper functions:

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


(lib.btn_txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD200").s().p("AAABAIAAhjIARAAIAAAHQAHgIALAAQAKAAAIAGQAEAFACAIQABAJAAAJQAAAWgHAIQgHAHgLAAQgKgBgIgGIAAAhgAATgMQgCAEAAAKQAAATANABQAGAAADgGQADgEAAgMQAAgKgDgFQgDgEgGgBQgIAAgDAIgAi+BAIAAhjIARAAIAAAHQAIgIAKAAQAMAAAGAGQAFAFABAIQACAJAAAJQAAAWgIAIQgGAHgMAAQgKgBgHgGIAAAhgAirgMQgBAEAAAKQAAATAMABQANAAAAgWQAAgUgNAAQgIAAgDAIgAGwAAQAAgQAIgKQAJgKAOAAQAOAAAJAJQAJAKAAAQIAAAHIguAAQABAQAQABIAIgCQAEgCAEgEIALALQgGAGgHADQgGADgJAAQghAAAAgmgAHdgFQgBgQgNAAQgNAAgBAQIAcAAIAAAAgACeAcQgJgKAAgSQAAgQAJgKQAJgKAPAAQAHAAAHADQAGADAEAEIgMAMQgGgFgGgBQgOAAAAAVQAAAUAOABQAGAAAGgHIAMANQgFAFgFACQgFADgJAAQgQAAgIgKgABSAdQgIgJAAgTQAAgTAIgJQAJgJAOAAQAOAAAJAJQAIAJAAASQAAAVgIAIQgJAIgOABQgOgBgJgIgABcACQAAATANABQAIAAADgIQACgEAAgJQAAgVgNAAQgNAAAAAWgAkOAAQAAgQAIgKQAJgKAOAAQAPAAAJAJQAIAKAAAQIAAAHIgtAAQABAQAPABIAJgCIAHgGIALALQgGAGgHADQgGADgIAAQgiAAAAgmgAjhgFQgBgQgNAAQgMAAgBAQIAbAAIAAAAgAmrAAQAAgQAJgKQAJgKAOAAQAOAAAJAJQAJAKAAAQIAAAHIguAAQABAQAQABIAIgCIAIgGIALALQgGAGgHADQgHADgIAAQgiAAAAgmgAl9gFQgBgQgNAAQgNAAgBAQIAcAAIAAAAgAFAAlIAAhIIATAAIAAA4IAUAAIAAg4IASAAIAAA4IAUAAIAAg4IASAAIAABIgAEaAlIAAhIIASAAIAABIgADnAlIAAg4IgVAAIAAgQIA8AAIAAAQIgUAAIAAA4gAgmAlIAAg4IgYAAIAAA4IgSAAIAAhIIA8AAIAABIgAkxAlIAAg4IgXAAIAAA4IgTAAIAAhIIA8AAIAABIgAnYAlIAAg4IgWAAIAAgQIA9AAIAAAQIgVAAIAAA4gAEagwIAAgPIASAAIAAAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt2, new cjs.Rectangle(-49.4,-6.3,99,12.7), null);


(lib.btn_txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKlBWIAAhtIhDBtIgdAAIAAirIAhAAIAABtIBChtIAeAAIAACrgAHcBWIAAiNIgtAAIAAgeIB7AAIAAAeIgtAAIAACNgAFzBWIAAhtIhCBtIgeAAIAAirIAhAAIAABtIBDhtIAdAAIAACrgAB8BWIAAirIBDAAQAYABAQAPQAQAPAAAXQAAAYgQANQgQAPgYAAIghAAIAABBgACegIIAfAAQALAAAHgGQAHgGAAgLQAAgLgHgGQgHgHgLAAIgfAAgAAzBWIAAirIAiAAIAACrgAhpBWIAAirIBEAAQAYAAAOANQAOANAAAVQAAAZgUAMQAHADAFAFQAKALAAATQAAAWgOAOQgNANgYAAgAhIA4IAjAAQAKAAAGgGQAGgGAAgKQAAgJgGgGQgGgFgKAAIgjAAgAhIgPIAhAAQAKgBAGgFQAGgFAAgJQAAgTgWgBIghAAgAj6BWIAAirIBwAAIAAAeIhPAAIAAApIBEAAIAAAcIhEAAIAAAqIBPAAIAAAegAmQBWIAAirIBCAAQAYABAQAPQAQAPAAAXQAAAYgQANQgQAPgYAAIghAAIAABBgAlvgIIAfAAQALAAAHgGQAHgGAAgLQAAgLgHgGQgHgHgLAAIgfAAgAohBWIAAirIBwAAIAAAeIhPAAIAAApIBDAAIAAAcIhDAAIAAAqIBPAAIAAAegApqBWIAAiNIg6AAIAACNIghAAIAAirIB8AAIAACrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt1, new cjs.Rectangle(-71,-8.5,142.1,17.1), null);


(lib.btn_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtTCqQhHAAgygyQgygxABhHQgBhFAygzQAygxBHAAIanAAQBHAAAyAxQAxAzAABFQAABHgxAxQgyAyhHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_light, new cjs.Rectangle(-102.2,-17,204.5,34), null);


(lib.btn_bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.btn_bg();
	this.instance.parent = this;
	this.instance.setTransform(-111.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg_1, new cjs.Rectangle(-111.5,-24.5,223,49), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB6AC7").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banana_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.banana();
	this.instance.parent = this;
	this.instance.setTransform(-23,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.banana_mc, new cjs.Rectangle(-23,-25,46,50), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn_txt2
	this.instance = new lib.btn_txt2();
	this.instance.parent = this;
	this.instance.setTransform(0,35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// btn_txt1
	this.instance_1 = new lib.btn_txt1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(2).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(1));

	// btn_light
	this.instance_2 = new lib.btn_light();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_2.cache(-104,-19,209,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:0.96,scaleY:0.96,alpha:0.23},2).to({scaleX:1,scaleY:1,alpha:0},2).wait(2).to({scaleX:0.96,scaleY:0.96,alpha:0.23},2).to({scaleX:1,scaleY:1,alpha:0},2).wait(1));

	// btn_bg.png
	this.instance_3 = new lib.btn_bg_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(2).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-24.5,223,66.1);


(lib.banana_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.banana_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1},0).wait(1).to({rotation:1},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:2},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:3},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:2},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:1},0).wait(1).to({rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-25,46,50);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({alpha:1},10).wait(1));

	// banana
	this.instance_1 = new lib.banana_1("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,-5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(32).to({mode:"synched",loop:false},0).wait(48).to({startPosition:0},0).wait(48).to({startPosition:0},0).wait(79));

	// t3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBiQgRgRgFgZQgEgQAAgfIAAgRQAAgkAGgTQAFgTAPgPQAagcAqAAQArAAAbAcQAZAaAAAyIAAAfQAAAfgEAQQgFAYgQARQgbAcgrAAQgqAAgagcgAgXg8QgJALAAAoIAAAQQAAArAJALQAIALAPAAQAQAAAIgLQAKgMAAgqIAAgQQAAgngKgMQgIgLgQAAQgPAAgIALg");
	this.shape.setTransform(-107.6,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBiQgRgRgEgcQgEgPAAgmQAAglAEgPQAEgcARgRQAcgcAqAAQAkAAAZAUQAaAVAHAoIg+AAQgIgbgYAAQgQAAgIALQgFAGgCAKQgCAOgBAeQABAfACAOQACAKAFAGQAIALAQAAQAYAAAIgbIA+AAQgHAogaAVQgZAUgkAAQgpAAgdgcgAi0BiQgQgRgFgZQgEgQAAgfIAAgRQAAgkAFgTQAGgTAOgPQAbgcArAAQArAAAbAcQAZAagBAyIAAAfQAAAfgDAQQgGAYgPARQgbAcgrAAQgrAAgbgcgAiHg8QgIALgBAoIAAAQQABArAIALQAJALAQAAQAQAAAIgLQAKgMAAgqIAAgQQAAgngKgMQgIgLgQAAQgQAAgJALg");
	this.shape_1.setTransform(-96.5,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BiQgRgRgFgcQgDgPAAgmQAAglADgPQAFgcARgRQAcgcAoAAQAlAAAYAUQAbAVAHAoIg+AAQgIgbgZAAQgPAAgHALQgGAGgBAKQgDAOAAAeQAAAfADAOQABAKAGAGQAHALAPAAQAZAAAIgbIA+AAQgHAogbAVQgYAUglAAQgoAAgcgcgAkWBiQgRgRgFgZQgDgQAAgfIAAgRQAAgkAFgTQAFgTAPgPQAagcArAAQArAAAbAcQAZAaAAAyIAAAfQAAAfgDAQQgGAYgQARQgaAcgsAAQgrAAgagcgAjpg8QgJALAAAoIAAAQQAAArAJALQAJALAPAAQAQAAAIgLQAKgMAAgqIAAgQQAAgngKgMQgHgLgRAAQgPAAgJALgAC2B8IAAjBIg9AAIAAg2IC4AAIAAA2Ig9AAIAADBg");
	this.shape_2.setTransform(-86.6,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AikBiQgRgRgFgcQgDgPAAgmQAAglADgPQAFgcARgRQAcgcApAAQAlAAAZAUQAaAVAHAoIg+AAQgIgbgYAAQgQAAgIALQgFAGgCAKQgDAOAAAeQAAAfADAOQACAKAFAGQAIALAQAAQAYAAAIgbIA+AAQgHAogaAVQgZAUglAAQgpAAgcgcgAmDBiQgQgRgGgZQgDgQAAgfIAAgRQAAgkAFgTQAGgTAOgPQAagcArAAQArAAAbAcQAZAaAAAyIAAAfQAAAfgDAQQgGAYgQARQgaAcgrAAQgrAAgbgcgAlWg8QgJALAAAoIAAAQQAAArAJALQAJALAQAAQAPAAAJgLQAJgMAAgqIAAgQQAAgngJgMQgIgLgQAAQgQAAgJALgAFdB8IgLglIhNAAIgMAlIhAAAIBbj3IAvAAIBaD3gAFCAkIgVhBIgXBBIAsAAgABKB8IAAjBIg+AAIAAg2IC4AAIAAA2Ig9AAIAADBg");
	this.shape_3.setTransform(-75.8,-4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkOBiQgRgRgFgcQgDgPAAgmQAAglADgPQAFgcARgRQAcgcApAAQAlAAAZAUQAaAVAHAoIg+AAQgIgbgYAAQgQAAgIALQgFAGgCAKQgDAOAAAeQAAAfADAOQACAKAFAGQAIALAQAAQAYAAAIgbIA+AAQgHAogaAVQgZAUglAAQgpAAgcgcgAntBiQgQgRgGgZQgDgQAAgfIAAgRQAAgkAFgTQAGgTAOgPQAagcArAAQArAAAbAcQAZAaAAAyIAAAfQAAAfgDAQQgGAYgQARQgaAcgrAAQgrAAgbgcgAnAg8QgJALAAAoIAAAQQAAArAJALQAJALAQAAQAPAAAJgLQAJgMAAgqIAAgQQAAgngJgMQgIgLgQAAQgQAAgJALgAHKB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gADzB8IgLglIhNAAIgMAlIhAAAIBbj3IAvAAIBaD3gADYAkIgVhBIgXBBIAsAAgAgfB8IAAjBIg+AAIAAg2IC3AAIAAA2Ig9AAIAADBg");
	this.shape_4.setTransform(-65.2,-4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmEBiQgSgRgEgcQgDgPAAgmQAAglADgPQAEgcASgRQAbgcAqAAQAlAAAYAUQAbAVAGAoIg+AAQgHgbgZAAQgQAAgIALQgFAGgCAKQgCAOAAAeQAAAfACAOQACAKAFAGQAIALAQAAQAZAAAHgbIA+AAQgGAogbAVQgYAUglAAQgpAAgcgcgApjBiQgRgRgFgZQgEgQAAgfIAAgRQAAgkAGgTQAFgTAPgPQAagcArAAQArAAAbAcQAZAaAAAyIAAAfQAAAfgEAQQgFAYgQARQgbAcgrAAQgrAAgagcgAo2g8QgJALAAAoIAAAQQAAArAJALQAIALAQAAQAQAAAIgLQAKgMAAgqIAAgQQAAgngKgMQgIgLgQAAQgQAAgIALgAJBB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAFUB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAB9B8IgMglIhMAAIgMAlIg/AAIBZj3IAvAAIBbD3gABhAkIgVhBIgWBBIArAAgAiWB8IAAjBIg9AAIAAg2IC3AAIAAA2Ig9AAIAADBg");
	this.shape_5.setTransform(-53.3,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Am8BiQgRgRgFgcQgDgPAAgmQAAglADgPQAFgcARgRQAcgcApAAQAlAAAYAUQAbAVAHAoIg+AAQgIgbgZAAQgQAAgHALQgGAGgBAKQgDAOAAAeQAAAfADAOQABAKAGAGQAHALAQAAQAZAAAIgbIA+AAQgHAogbAVQgYAUglAAQgpAAgcgcgAqbBiQgRgRgFgZQgDgQAAgfIAAgRQAAgkAFgTQAFgTAPgPQAagcArAAQArAAAbAcQAZAaAAAyIAAAfQAAAfgDAQQgGAYgQARQgaAcgsAAQgrAAgagcgApug8QgJALAAAoIAAAQQAAArAJALQAJALAPAAQAQAAAIgLQAKgMAAgqIAAgQQAAgngKgMQgHgLgRAAQgPAAgJALgAJ4B8IAAj3IA+AAIAAD3gAIJB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAEcB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gABFB8IgMglIhLAAIgMAlIhAAAIBaj3IAvAAIBaD3gAAqAkIgWhBIgVBBIArAAgAjOB8IAAjBIg9AAIAAg2IC4AAIAAA2Ig9AAIAADBg");
	this.shape_6.setTransform(-47.7,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ao2CCQgRgSgFgbQgDgPAAgnQAAglADgPQAFgbARgSQAcgcApAAQAlAAAYAUQAbAVAHAoIg+AAQgIgagZAAQgQAAgHAKQgGAGgBALQgDAMAAAfQAAAfADAOQABALAGAGQAHAKAQAAQAZAAAIgaIA+AAQgHAogbAVQgYAUglAAQgpAAgcgcgAsVCCQgRgRgFgaQgDgQAAgeIAAgSQAAgkAFgTQAFgTAPgPQAagcArAAQArAAAbAcQAZAbAAAwIAAAhQAAAegDAQQgGAZgQARQgaAcgsAAQgrAAgagcgArogdQgJAMAAAmIAAARQAAArAJALQAJALAPAAQAQAAAIgLQAKgLAAgrIAAgRQAAgmgKgMQgHgKgRAAQgPAAgJAKgALyCcIAAiIIhPCIIg1AAIAAj4IA8AAIAACHIBQiHIA1AAIAAD4gAH+CcIAAj4IA+AAIAAD4gAGPCcIAAhjIhBAAIAABjIg9AAIAAj4IA9AAIAABfIBBAAIAAhfIA9AAIAAD4gACiCcIAAhjIhBAAIAABjIg9AAIAAj4IA9AAIAABfIBBAAIAAhfIA9AAIAAD4gAg0CcIgMglIhMAAIgMAlIhAAAIBaj4IAwAAIBZD4gAhPBEIgWhDIgWBDIAsAAgAlICcIAAjBIg9AAIAAg3IC4AAIAAA3Ig9AAIAADBgAKnhzQgTgNgBgdIAqAAQABATARAAQASAAABgTIApAAQAAAdgUANQgQALgYAAQgXAAgRgLg");
	this.shape_7.setTransform(-35.5,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(209));

	// t2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhB8IAAhiIhAAAIAABiIg+AAIAAj3IA+AAIAABgIBAAAIAAhgIA9AAIAAD3g");
	this.shape_8.setTransform(-106.9,-44.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiB8IAAj3ICpAAIAAA2IhsAAIAAAqIBcAAIAAA1IhcAAIAAAsIBsAAIAAA2gAhMB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABgIBBAAIAAhgIA9AAIAAD3g");
	this.shape_9.setTransform(-96,-44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AE2B8IhFiBIAACBIg9AAIAAiBIhECBIhGAAIBMiEIhEhzIBFAAIA9B1IAAh1IA9AAIAAB1IA+h1IBFAAIhFBzIBMCEIAAAAgAiMB8IAAj3ICnAAIAAA2IhrAAIAAAqIBcAAIAAA1IhcAAIAAAsIBrAAIAAA2gAj8B8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABgIBBAAIAAhgIA9AAIAAD3g");
	this.shape_10.setTransform(-78.4,-44.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AG3CVIAAgyIh4AAIAAAyIg7AAIAAgyIhFAAIhFiBIAACBIg9AAIAAiBIhDCBIhGAAIBMiEIhEhzIBEAAIA9B1IAAh1IA9AAIAAB1IA+h1IBFAAIhEBzIBLCDIAAg2IAZAAQANgjAGgoQAGgrAAhAIAAgKICgAAIAADAIAcAAIAABpgAFxhXQAABFgWA+IA9AAIAAiKIgnAAgAkDBjIAAj3ICpAAIAAA2IhsAAIAAApIBcAAIAAA2IhcAAIAAArIBsAAIAAA3gAlyBjIAAhiIhBAAIAABiIg+AAIAAj3IA+AAIAABfIBBAAIAAhfIA9AAIAAD3g");
	this.shape_11.setTransform(-66.5,-42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AFCCVIAAgyIh4AAIAAAyIg7AAIAAgyIhFAAIhFiBIAACBIg8AAIAAiBIhECBIhGAAIBMiEIhEhzIBFAAIA9B1IAAh1IA8AAIAAB1IA+h1IBFAAIhFBzIBMCDIAAg2IAYAAQAOgjAGgoQAGgrAAhAIAAgKICgAAIAADAIAcAAIAABpgAD8hXQAABFgWA+IA9AAIAAiKIgnAAgAInBjIgLglIhNAAIgMAlIhAAAIBbj3IAvAAIBaD3gAIMALIgWhBIgWBBIAsAAgAl4BjIAAj3ICoAAIAAA2IhsAAIAAApIBdAAIAAA2IhdAAIAAArIBsAAIAAA3gAnoBjIAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3g");
	this.shape_12.setTransform(-54.8,-42);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ADYCVIAAgyIh4AAIAAAyIg7AAIAAgyIhEAAIhFiBIAACBIg9AAIAAiBIhECBIhGAAIBMiEIhEhzIBFAAIA9B1IAAh1IA9AAIAAB1IA+h1IBEAAIhEBzIBLCDIAAg2IAYAAQAOgjAGgoQAGgrAAhAIAAgKICgAAIAADAIAcAAIAABpgACShXQAABFgWA+IA9AAIAAiKIgnAAgAKUBjIAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAG9BjIgLglIhNAAIgMAlIhAAAIBbj3IAvAAIBaD3gAGiALIgWhBIgWBBIAsAAgAniBjIAAj3ICoAAIAAA2IhsAAIAAApIBdAAIAAA2IhdAAIAAArIBsAAIAAA3gApSBjIAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3g");
	this.shape_13.setTransform(-44.2,-42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABnCVIAAgyIh3AAIAAAyIg8AAIAAgyIhFAAIhEiBIAACBIg9AAIAAiBIhFCBIhFAAIBLiEIhEhzIBFAAIA+B1IAAh1IA9AAIAAB1IA+h1IBEAAIhEBzIBLCDIAAg2IAZAAQANgjAHgoQAFgrABhAIAAgKICeAAIAADAIAcAAIAABpgAAghXQAABFgVA+IA8AAIAAiKIgnAAgAMFBjIAAhYQgmAFgUAAQgZAAgSgQQgUgQAAgbIAAhpIA+AAIAABYQAAAKAFAGQAHAGAKAAQAVAAAQgDIAAhrIA9AAIAAD3gAIiBjIAAhiIhAAAIAABiIg+AAIAAj3IA+AAIAABfIBAAAIAAhfIA9AAIAAD3gAFLBjIgLglIhMAAIgNAlIhAAAIBbj3IAvAAIBaD3gAEwALIgVhBIgXBBIAsAAgApUBjIAAj3ICpAAIAAA2IhsAAIAAApIBcAAIAAA2IhcAAIAAArIBsAAIAAA3gArDBjIAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3g");
	this.shape_14.setTransform(-32.8,-42);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTCVIAAgyIh4AAIAAAyIg7AAIAAgyIhFAAIhFiBIAACBIg9AAIAAiBIhECBIhGAAIBMiEIhEhzIBFAAIA9B1IAAh1IA9AAIAAB1IA+h1IBFAAIhEBzIBLCDIAAg2IAZAAQANgjAGgoQAGgrAAhAIAAgKICfAAIAADAIAcAAIAABpgAhZhXQAABFgWA+IA9AAIAAiKIgnAAgAOABjIAAiGIhQCGIg2AAIAAj3IA+AAIAACHIBPiHIA2AAIAAD3gAKLBjIAAhYQgmAFgVAAQgYAAgSgQQgUgQAAgbIAAhpIA9AAIAABYQAAAKAGAGQAGAGALAAQAVAAAQgDIAAhrIA9AAIAAD3gAGoBjIAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gADRBjIgLglIhNAAIgMAlIhAAAIBbj3IAvAAIBaD3gAC2ALIgVhBIgXBBIAsAAgArOBjIAAj3ICpAAIAAA2IhsAAIAAApIBcAAIAAA2IhcAAIAAArIBsAAIAAA3gAs9BjIAAhiIhBAAIAABiIg+AAIAAj3IA+AAIAABfIBBAAIAAhfIA9AAIAAD3g");
	this.shape_15.setTransform(-20.6,-42);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiTCVIAAgyIh4AAIAAAyIg7AAIAAgyIhFAAIhFiBIAACBIg9AAIAAiBIhECBIhGAAIBMiEIhEhzIBFAAIA9B1IAAh1IA9AAIAAB1IA+h1IBFAAIhFBzIBMCDIAAg2IAYAAQAOgjAGgoQAGgrAAhAIAAgKICgAAIAADAIAcAAIAABpgAjZhXQAABFgWA+IA9AAIAAiKIgnAAgAP1BjIhKiBIAACBIg9AAIAAj3IA9AAIAAB1IBEh1IBFAAIhJBzIBSCEgAL/BjIAAiGIhQCGIg1AAIAAj3IA9AAIAACHIBQiHIA2AAIAAD3gAILBjIAAhYQgmAFgVAAQgZAAgRgQQgUgQAAgbIAAhpIA9AAIAABYQAAAKAGAGQAGAGALAAQAUAAARgDIAAhrIA9AAIAAD3gAEoBjIAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gABRBjIgLglIhMAAIgMAlIhAAAIBaj3IAvAAIBaD3gAA2ALIgWhBIgWBBIAsAAgAtOBjIAAj3ICoAAIAAA2IhsAAIAAApIBdAAIAAA2IhdAAIAAArIBsAAIAAA3gAu+BjIAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3g");
	this.shape_16.setTransform(-7.8,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},14).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(218));

	// t1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAeB8IAAhYIgXADQgRACgSAAQgZAAgRgPQgUgRAAgbIAAhpIA9AAIAABYQAAAKAGAGQAGAGAKAAQAXAAAOgDIAAhrIA9AAIAAD3g");
	this.shape_17.setTransform(-107.7,-84.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACYB8IAAiGIhQCGIg1AAIAAj3IA9AAIAACGIBQiGIA1AAIAAD3gAhbB8IAAhYIgXADQgSACgSAAQgZAAgSgPQgTgRAAgbIAAhpIA9AAIAABYQAAAKAGAGQAGAGAKAAQAYAAAOgDIAAhrIA9AAIAAD3g");
	this.shape_18.setTransform(-95.5,-84.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AE2B8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAgEB8IAAiGIhQCGIg1AAIAAj3IA9AAIAACGIBPiGIA1AAIAAD3gAj4B8IAAhYIgYADQgSACgSAAQgYAAgSgPQgUgRAAgbIAAhpIA9AAIAABYQAAAKAHAGQAFAGALAAQAYAAAOgDIAAhrIA8AAIAAD3g");
	this.shape_19.setTransform(-79.7,-84.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AE3B8IAAj3ICpAAIAAA2IhsAAIAAAqIBdAAIAAA1IhdAAIAAAsIBsAAIAAA2gADIB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAhyB8IAAiGIhQCGIg0AAIAAj3IA8AAIAACGIBQiGIA1AAIAAD3gAlmB8IAAhYIgXADQgSACgSAAQgZAAgRgPQgUgRAAgbIAAhpIA9AAIAABYQAAAKAGAGQAGAGAKAAQAYAAAOgDIAAhrIA9AAIAAD3g");
	this.shape_20.setTransform(-68.8,-84.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AI9B8IAAjBIhBAAIAADBIg9AAIAAj3IC7AAIAAD3gACdB8IAAj3ICpAAIAAA2IhsAAIAAAqIBdAAIAAA1IhdAAIAAAsIBsAAIAAA2gAAuB8IAAhiIhAAAIAABiIg9AAIAAj3IA9AAIAABfIBAAAIAAhfIA9AAIAAD3gAkMB8IAAiGIhQCGIg0AAIAAj3IA8AAIAACGIBQiGIA1AAIAAD3gAoAB8IAAhYIgXADQgSACgSAAQgZAAgRgPQgUgRAAgbIAAhpIA9AAIAABYQAAAKAGAGQAGAGAKAAQAYAAAOgDIAAhrIA9AAIAAD3g");
	this.shape_21.setTransform(-53.4,-84.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AI4B8IAAj3IBiAAQAlAAAXAWQAYAXAAAjQABAjgYAVQgYAXglAAIgmAAIAABYgAJ0gSIAjAAQALAAAIgHQAHgIAAgKQAAgLgHgHQgIgHgLAAIgjAAgAHIB8IAAjBIhBAAIAADBIg9AAIAAj3IC7AAIAAD3gAAoB8IAAj3ICqAAIAAA2IhsAAIAAAqIBcAAIAAA1IhcAAIAAAsIBsAAIAAA2gAhFB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAmAB8IAAiGIhQCGIg1AAIAAj3IA9AAIAACGIBQiGIA1AAIAAD3gAp0B8IAAhYIgYADQgSACgSAAQgYAAgSgPQgUgRAAgbIAAhpIA9AAIAABYQAAAKAHAGQAFAGALAAQAYAAAOgDIAAhrIA8AAIAAD3g");
	this.shape_22.setTransform(-41.7,-84.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AMkB8IAAiGIhPCGIg2AAIAAj3IA9AAIAACGIBQiGIA1AAIAAD3gAHFB8IAAj3IBiAAQAlAAAYAWQAYAXAAAjQAAAjgYAVQgYAXglAAIglAAIAABYgAICgSIAiAAQAMAAAHgHQAIgIAAgKQAAgLgIgHQgHgHgMAAIgiAAgAFVB8IAAjBIhBAAIAADBIg9AAIAAj3IC8AAIAAD3gAhJB8IAAj3ICoAAIAAA2IhrAAIAAAqIBbAAIAAA1IhbAAIAAAsIBrAAIAAA2gAi4B8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAnzB8IAAiGIhQCGIg1AAIAAj3IA9AAIAACGIBQiGIA1AAIAAD3gArnB8IAAhYIgXADQgSACgSAAQgZAAgSgPQgTgRAAgbIAAhpIA9AAIAABYQAAAKAGAGQAGAGAKAAQAYAAAOgDIAAhrIA9AAIAAD3g");
	this.shape_23.setTransform(-30.3,-84.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AObB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAKtB8IAAiGIhPCGIg2AAIAAj3IA9AAIAACGIBQiGIA2AAIAAD3gAFOB8IAAj3IBiAAQAmAAAXAWQAYAXAAAjQAAAjgXAVQgYAXgmAAIglAAIAABYgAGLgSIAjAAQALAAAIgHQAHgIAAgKQAAgLgHgHQgIgHgLAAIgjAAgADfB8IAAjBIhBAAIAADBIg9AAIAAj3IC7AAIAAD3gAjAB8IAAj3ICpAAIAAA2IhsAAIAAAqIBdAAIAAA1IhdAAIAAAsIBsAAIAAA2gAkvB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gApqB8IAAiGIhQCGIg0AAIAAj3IA8AAIAACGIBQiGIA1AAIAAD3gAteB8IAAhYIgXADQgSACgSAAQgZAAgRgPQgUgRAAgbIAAhpIA9AAIAABYQAAAKAGAGQAGAGAKAAQAYAAAOgDIAAhrIA9AAIAAD3g");
	this.shape_24.setTransform(-18.4,-84.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("APSB8IAAj3IA9AAIAAD3gANjB8IAAhiIhAAAIAABiIg+AAIAAj3IA+AAIAABfIBAAAIAAhfIA+AAIAAD3gAJ2B8IAAiGIhPCGIg2AAIAAj3IA9AAIAACGIBQiGIA1AAIAAD3gAEXB8IAAj3IBiAAQAlAAAXAWQAYAXAAAjQABAjgYAVQgYAXglAAIgmAAIAABYgAFTgSIAjAAQALAAAIgHQAHgIAAgKQAAgLgHgHQgIgHgLAAIgjAAgACnB8IAAjBIhBAAIAADBIg9AAIAAj3IC7AAIAAD3gAj4B8IAAj3ICqAAIAAA2IhsAAIAAAqIBcAAIAAA1IhcAAIAAAsIBsAAIAAA2gAlmB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAqhB8IAAiGIhQCGIg1AAIAAj3IA9AAIAACGIBQiGIA1AAIAAD3gAuVB8IAAhYIgYADQgSACgSAAQgYAAgSgPQgUgRAAgbIAAhpIA9AAIAABYQAAAKAHAGQAFAGALAAQAYAAAOgDIAAhrIA8AAIAAD3g");
	this.shape_25.setTransform(-12.8,-84.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("APgBiQgSgRgFgcQgDgPAAgmQAAglADgPQAFgcASgRQAbgcAqAAQAkAAAZAUQAaAVAHAoIg+AAQgIgbgYAAQgPAAgJALQgFAGgCAKQgCAOAAAeQAAAfACAOQACAKAFAGQAJALAPAAQAYAAAIgbIA+AAQgHAogaAVQgZAUgkAAQgpAAgcgcgANfB8IAAj3IA9AAIAAD3gALwB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAIDB8IAAiGIhQCGIg1AAIAAj3IA9AAIAACGIBQiGIA1AAIAAD3gACjB8IAAj3IBjAAQAlAAAXAWQAYAXAAAjQAAAjgXAVQgYAXglAAIgmAAIAABYgADggSIAjAAQALAAAIgHQAHgIAAgKQAAgLgHgHQgIgHgLAAIgjAAgAA0B8IAAjBIhAAAIAADBIg9AAIAAj3IC6AAIAAD3gAlrB8IAAj3ICpAAIAAA2IhsAAIAAAqIBdAAIAAA1IhdAAIAAAsIBsAAIAAA2gAnaB8IAAhiIhBAAIAABiIg9AAIAAj3IA9AAIAABfIBBAAIAAhfIA9AAIAAD3gAsUB8IAAiGIhQCGIg1AAIAAj3IA9AAIAACGIBPiGIA2AAIAAD3gAwJB8IAAhYIgXADQgSACgSAAQgYAAgSgPQgUgRAAgbIAAhpIA9AAIAABYQAAAKAGAGQAGAGALAAQAXAAAOgDIAAhrIA9AAIAAD3g");
	this.shape_26.setTransform(-1.3,-84.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(228));

	// btn
	this.instance_2 = new lib.btn("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,327.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({y:105.5},10,cjs.Ease.quartOut).wait(11).to({mode:"synched",loop:false},0).wait(48).to({startPosition:0},0).wait(48).to({startPosition:0},0).wait(79));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240));

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
	id: 'A5B0E578675B46D2B874D0B363E0747B',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banana.png", id:"banana"},
		{src:"images/btn_bg.png", id:"btn_bg"}
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
an.compositions['A5B0E578675B46D2B874D0B363E0747B'] = {
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