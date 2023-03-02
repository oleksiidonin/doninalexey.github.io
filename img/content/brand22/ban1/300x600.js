(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.btn_bg = function() {
	this.initialize(img.btn_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,64);


(lib.hotdog = function() {
	this.initialize(img.hotdog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,78);// helper functions:

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


(lib.hotdog_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hotdog();
	this.instance.parent = this;
	this.instance.setTransform(-26,-26,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hotdog_mc, new cjs.Rectangle(-26,-26,52,52), null);


(lib.btn_txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D953AB").s().p("AAABAIAAhjIARAAIAAAHQAHgIALAAQAKAAAIAGQAEAFACAIQABAJAAAJQAAAWgHAIQgHAHgLAAQgKgBgIgGIAAAhgAATgMQgCAEAAAKQAAATANABQAGAAADgGQADgEAAgMQAAgKgDgFQgDgEgGgBQgIAAgDAIgAi+BAIAAhjIARAAIAAAHQAIgIAKAAQAMAAAGAGQAFAFABAIQACAJAAAJQAAAWgIAIQgGAHgMAAQgKgBgHgGIAAAhgAirgMQgBAEAAAKQAAATAMABQANAAAAgWQAAgUgNAAQgIAAgDAIgAGwAAQAAgQAIgKQAJgKAOAAQAOAAAJAJQAJAKAAAQIAAAHIguAAQABAQAQABIAIgCQAEgCAEgEIALALQgGAGgHADQgGADgJAAQghAAAAgmgAHdgFQgBgQgNAAQgNAAgBAQIAcAAIAAAAgACeAcQgJgKAAgSQAAgQAJgKQAJgKAPAAQAHAAAHADQAGADAEAEIgMAMQgGgFgGgBQgOAAAAAVQAAAUAOABQAGAAAGgHIAMANQgFAFgFACQgFADgJAAQgQAAgIgKgABSAdQgIgJAAgTQAAgTAIgJQAJgJAOAAQAOAAAJAJQAIAJAAASQAAAVgIAIQgJAIgOABQgOgBgJgIgABcACQAAATANABQAIAAADgIQACgEAAgJQAAgVgNAAQgNAAAAAWgAkOAAQAAgQAIgKQAJgKAOAAQAPAAAJAJQAIAKAAAQIAAAHIgtAAQABAQAPABIAJgCIAHgGIALALQgGAGgHADQgGADgIAAQgiAAAAgmgAjhgFQgBgQgNAAQgMAAgBAQIAbAAIAAAAgAmrAAQAAgQAJgKQAJgKAOAAQAOAAAJAJQAJAKAAAQIAAAHIguAAQABAQAQABIAIgCIAIgGIALALQgGAGgHADQgHADgIAAQgiAAAAgmgAl9gFQgBgQgNAAQgNAAgBAQIAcAAIAAAAgAFAAlIAAhIIATAAIAAA4IAUAAIAAg4IASAAIAAA4IAUAAIAAg4IASAAIAABIgAEaAlIAAhIIASAAIAABIgADnAlIAAg4IgVAAIAAgQIA8AAIAAAQIgUAAIAAA4gAgmAlIAAg4IgYAAIAAA4IgSAAIAAhIIA8AAIAABIgAkxAlIAAg4IgXAAIAAA4IgTAAIAAhIIA8AAIAABIgAnYAlIAAg4IgWAAIAAgQIA9AAIAAAQIgVAAIAAA4gAEagwIAAgPIASAAIAAAPg");

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
	this.instance.setTransform(-112,-25,0.781,0.781);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg_1, new cjs.Rectangle(-112,-25,223.5,50), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61D9BE").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.hotdog_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hotdog_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1},0).wait(1).to({rotation:1},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:2},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:3},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:2},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:1},0).wait(1).to({rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26,52,52);


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
p.nominalBounds = new cjs.Rectangle(-112,-25,223.5,66.6);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(218).to({_off:false},0).to({alpha:1},10).wait(1));

	// hotdog
	this.instance_1 = new lib.hotdog_1("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(92,-16.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).wait(37).to({mode:"synched",loop:false},0).wait(48).to({startPosition:0},0).wait(48).to({startPosition:0},0).wait(79));

	// btn
	this.instance_2 = new lib.btn("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,331.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({y:85.5},10,cjs.Ease.quartOut).wait(11).to({mode:"synched",loop:false},0).wait(48).to({startPosition:0},0).wait(48).to({startPosition:0},0).wait(79));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5CzIAAiGQgeAFgXACQgYADgOAAQglAAgdgYQgbgWAAgpIAAiSIBHAAIAACAQAAArAtAAQAgAAAkgHIAAikIBHAAIAAFlg");
	this.shape.setTransform(-101.2,-70.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADsCzIAAjlIiNDlIg+AAIAAllIBGAAIAADkICMjkIA/AAIAAFlgAh5CzIAAiGQgeAFgXACQgZADgOAAQglAAgcgYQgbgWAAgpIAAiSIBGAAIAACAQAAArAuAAQAgAAAkgHIAAikIBHAAIAAFlg");
	this.shape_1.setTransform(-83.4,-70.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEUCzIAAllIDvAAIAAA/IioAAIAABIIBKAAQA2gBAfAgQAgAeAAAxQAAAzggAeQgfAfg2AAgAFbB1IBGAAQAYAAANgOQAOgNAAgXQAAgWgOgOQgNgNgYAAIhGAAgAAECzIAAjlIiMDlIg+AAIAAllIBGAAIAADkICLjkIA/AAIAAFlgAlhCzIAAiGQgeAFgXACQgZADgOAAQglAAgcgYQgbgWAAgpIAAiSIBGAAIAACAQAAArAuAAQAgAAAkgHIAAikIBHAAIAAFlg");
	this.shape_2.setTransform(-60.2,-70.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AG/CzIAAg+IAdAAQAbgBAKgWIAKgZIhzj3IBJAAIBMCtIBEitIBKAAIiBEpQgZA8g3AAgAB0CzIAAllIDvAAIAAA/IioAAIAABIIBKAAQA2gBAfAgQAgAeAAAxQAAAzggAeQgfAfg2AAgAC7B1IBGAAQAYAAANgOQANgNAAgXQAAgWgNgOQgNgNgYAAIhGAAgAibCzIAAjlIiNDlIg/AAIAAllIBHAAIAADkICMjkIA/AAIAAFlgAoBCzIAAiGQgeAFgXACQgZADgOAAQglAAgdgYQgbgWAAgpIAAiSIBHAAIAACAQAAArAtAAQAhAAAkgHIAAikIBHAAIAAFlg");
	this.shape_3.setTransform(-44.1,-70.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AJNCzIAAllICSAAQAzAAAfAbQAdAaAAAuQAAA0gsAXQARAJAKAKQAWAYABAlQgBAZgHASQgIASgPAOQgPAOgUAHQgTAHgaAAgAKUB1IBKAAQAWAAAMgNQANgMAAgTQAAgUgNgNQgMgMgWABIhKAAgAKUggIBFAAQAWAAANgMQAMgMAAgSQAAgTgMgLQgNgLgWAAIhFAAgAEmCzIAAg+IAdAAQAbgBAKgWIAKgZIhzj3IBJAAIBMCtIBEitIBKAAIiBEpQgZA8g3AAgAgkCzIAAllIDuAAIAAA/IioAAIAABIIBKAAQA2gBAfAgQAgAeAAAxQAAAzggAeQgfAfg2AAgAAiB1IBGAAQAYAAANgOQANgNAAgXQAAgWgNgOQgNgNgYAAIhGAAgAk0CzIAAjlIiNDlIg/AAIAAllIBHAAIAADkICMjkIA/AAIAAFlgAqaCzIAAiGQgeAFgXACQgZADgOAAQglAAgdgYQgbgWAAgpIAAiSIBHAAIAACAQAAArAtAAQAhAAAkgHIAAikIBHAAIAAFlg");
	this.shape_4.setTransform(-28.8,-70.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AswGvQgRgSgIgYQgIgYgCgSIgBhJQAAg1AHgcQAJgaAUgVQAngoA7AAQA7AAAmAoQAkAlAABQIAAAmQAAAfgBARIgDATQgDANgEAJIgKAWQgHALgIAIQgmAng7AAQg7AAgngngAr8C8QgLAMgDAWQgDAWAAAnIAAA3IAFAcQAFAPAHAIQATATAbAAQAcAAARgTQALgNADgUQAEgRAAg5QAAgvgEgRQgEgUgKgKQgRgTgcAAQgdAAgRATgAJPhvIAAlmICRAAQAzAAAfAaQAeAbAAAtQAAA0gtAYQARAJAKALQAXAXAAAmQAAAZgIASQgHASgPAOQgQAOgTAGQgUAIgaAAgAKViuIBKAAQAWAAANgMQAMgMAAgUQAAgTgMgNQgNgMgWAAIhKAAgAKVlEIBFAAQAWAAANgLQAMgMAAgSQAAgTgMgMQgNgLgWAAIhFAAgAEnhvIAAg/IAdAAQAbAAAKgWIALgZIh0j4IBKAAIBLCsIBFisIBJAAIiAEpQgaA9g3AAgAgjhvIAAlmIDuAAIAAA+IioAAIAABIIBKAAQA2AAAfAgQAgAfAAAxQAAAyggAfQgfAfg2AAgAAjiuIBGAAQAYAAANgNQAOgNAAgXQAAgWgOgOQgNgNgYAAIhGAAgAkzhvIAAjmIiNDmIg+AAIAAlmIBGAAIAADlICMjlIA/AAIAAFmgAqZhvIAAiHQgeAGgXACQgZACgOAAQglAAgcgXQgbgWAAgqIAAiSIBGAAIAACAQAAArAuAAQAgAAAkgIIAAijIBHAAIAAFmg");
	this.shape_5.setTransform(-29,-41);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AswGvQgRgSgIgYQgIgYgCgSIgBhJQAAg1AHgcQAJgaAUgVQAngoA7AAQA7AAAmAoQAkAlAABQIAAAmQAAAfgBARIgDATQgDANgEAJIgKAWQgHALgIAIQgmAng7AAQg7AAgngngAr8C8QgLAMgDAWQgDAWAAAnIAAA3IAFAcQAFAPAHAIQATATAbAAQAcAAARgTQALgNADgUQAEgRAAg5QAAgvgEgRQgEgUgKgKQgRgTgcAAQgdAAgRATgAk7HTIh/i7IAAC7IhGAAIAAlmIBGAAIAACqIB1iqIBUAAIh5CoICFC+gAJPhvIAAlmICRAAQAzAAAfAaQAeAbAAAtQAAA0gtAYQARAJAKALQAXAXAAAmQAAAZgIASQgHASgPAOQgQAOgTAGQgUAIgaAAgAKViuIBKAAQAWAAANgMQAMgMAAgUQAAgTgMgNQgNgMgWAAIhKAAgAKVlEIBFAAQAWAAANgLQAMgMAAgSQAAgTgMgMQgNgLgWAAIhFAAgAEnhvIAAg/IAdAAQAbAAAKgWIALgZIh0j4IBKAAIBLCsIBFisIBJAAIiAEpQgaA9g3AAgAgjhvIAAlmIDuAAIAAA+IioAAIAABIIBKAAQA2AAAfAgQAgAfAAAxQAAAyggAfQgfAfg2AAgAAjiuIBGAAQAYAAANgNQAOgNAAgXQAAgWgOgOQgNgNgYAAIhGAAgAkzhvIAAjmIiNDmIg+AAIAAlmIBGAAIAADlICMjlIA/AAIAAFmgAqZhvIAAiHQgeAGgXACQgZACgOAAQglAAgcgXQgbgWAAgqIAAiSIBGAAIAACAQAAArAuAAQAgAAAkgIIAAijIBHAAIAAFmg");
	this.shape_6.setTransform(-29,-41);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AswGvQgRgSgIgYQgIgYgCgSIgBhJQAAg1AHgcQAJgaAUgVQAngoA7AAQA7AAAmAoQAkAlAABQIAAAmQAAAfgBARIgDATQgDANgEAJIgKAWQgHALgIAIQgmAng7AAQg7AAgngngAr8C8QgLAMgDAWQgDAWAAAnIAAA3IAFAcQAFAPAHAIQATATAbAAQAcAAARgTQALgNADgUQAEgRAAg5QAAgvgEgRQgEgUgKgKQgRgTgcAAQgdAAgRATgAgDHTIAAknIhfAAIAAg/IEDAAIAAA/IhfAAIAAEngAk7HTIh/i7IAAC7IhGAAIAAlmIBGAAIAACqIB1iqIBUAAIh5CoICFC+gAJPhvIAAlmICRAAQAzAAAfAaQAeAbAAAtQAAA0gtAYQARAJAKALQAXAXAAAmQAAAZgIASQgHASgPAOQgQAOgTAGQgUAIgaAAgAKViuIBKAAQAWAAANgMQAMgMAAgUQAAgTgMgNQgNgMgWAAIhKAAgAKVlEIBFAAQAWAAANgLQAMgMAAgSQAAgTgMgMQgNgLgWAAIhFAAgAEnhvIAAg/IAdAAQAbAAAKgWIALgZIh0j4IBKAAIBLCsIBFisIBJAAIiAEpQgaA9g3AAgAgjhvIAAlmIDuAAIAAA+IioAAIAABIIBKAAQA2AAAfAgQAgAfAAAxQAAAyggAfQgfAfg2AAgAAjiuIBGAAQAYAAANgNQAOgNAAgXQAAgWgOgOQgNgNgYAAIhGAAgAkzhvIAAjmIiNDmIg+AAIAAlmIBGAAIAADlICMjlIA/AAIAAFmgAqZhvIAAiHQgeAGgXACQgZACgOAAQglAAgcgXQgbgWAAgqIAAiSIBGAAIAACAQAAArAuAAQAgAAAkgIIAAijIBHAAIAAFmg");
	this.shape_7.setTransform(-29,-41);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADnGvQgRgRgIgZQgIgWgBgUIgBhJQAAg1AHgcQAHgaAVgVQAmgoA8AAQA6AAAoAoQAkAlAABQIAAAmQAAAfgCARIgDATQgCANgEAJQgFANgGAJQgEAHgKAMQgmAng8AAQg7AAgngngAEbC8QgLALgDAXQgDAWAAAnIABA3QAAALAFARQADAPAIAIQAUATAaAAQAdAAAQgTQALgMADgVQAEgUAAg2QAAgtgEgTQgDgTgLgLQgQgTgdAAQgcAAgSATgAswGvQgRgSgIgYQgIgYgCgSIgBhJQAAg1AHgcQAJgaAUgVQAngoA7AAQA7AAAmAoQAkAlAABQIAAAmQAAAfgBARIgDATQgDANgEAJIgKAWQgHALgIAIQgmAng7AAQg7AAgngngAr8C8QgLAMgDAWQgDAWAAAnIAAA3IAFAcQAFAPAHAIQATATAbAAQAcAAARgTQALgNADgUQAEgRAAg5QAAgvgEgRQgEgUgKgKQgRgTgcAAQgdAAgRATgAgDHTIAAknIhfAAIAAg/IEDAAIAAA/IhfAAIAAEngAk7HTIh/i7IAAC7IhGAAIAAlmIBGAAIAACqIB1iqIBUAAIh5CoICFC+gAJPhvIAAlmICRAAQAzAAAfAaQAeAbAAAtQAAA0gtAYQARAJAKALQAXAXAAAmQAAAZgIASQgHASgPAOQgQAOgTAGQgUAIgaAAgAKViuIBKAAQAWAAANgMQAMgMAAgUQAAgTgMgNQgNgMgWAAIhKAAgAKVlEIBFAAQAWAAANgLQAMgMAAgSQAAgTgMgMQgNgLgWAAIhFAAgAEnhvIAAg/IAdAAQAbAAAKgWIALgZIh0j4IBKAAIBLCsIBFisIBJAAIiAEpQgaA9g3AAgAgjhvIAAlmIDuAAIAAA+IioAAIAABIIBKAAQA2AAAfAgQAgAfAAAxQAAAyggAfQgfAfg2AAgAAjiuIBGAAQAYAAANgNQAOgNAAgXQAAgWgOgOQgNgNgYAAIhGAAgAkzhvIAAjmIiNDmIg+AAIAAlmIBGAAIAADlICMjlIA/AAIAAFmgAqZhvIAAiHQgeAGgXACQgZACgOAAQglAAgcgXQgbgWAAgqIAAiSIBGAAIAACAQAAArAuAAQAgAAAkgIIAAijIBHAAIAAFmg");
	this.shape_8.setTransform(-29,-41);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ADnGvQgRgRgIgZQgIgWgBgUIgBhJQAAg1AHgcQAHgaAVgVQAmgoA8AAQA6AAAoAoQAkAlAABQIAAAmQAAAfgCARIgDATQgCANgEAJQgFANgGAJQgEAHgKAMQgmAng8AAQg7AAgngngAEbC8QgLALgDAXQgDAWAAAnIABA3QAAALAFARQADAPAIAIQAUATAaAAQAdAAAQgTQALgMADgVQAEgUAAg2QAAgtgEgTQgDgTgLgLQgQgTgdAAQgcAAgSATgAswGvQgRgSgIgYQgIgYgCgSIgBhJQAAg1AHgcQAJgaAUgVQAngoA7AAQA7AAAmAoQAkAlAABQIAAAmQAAAfgBARIgDATQgDANgEAJIgKAWQgHALgIAIQgmAng7AAQg7AAgngngAr8C8QgLAMgDAWQgDAWAAAnIAAA3IAFAcQAFAPAHAIQATATAbAAQAcAAARgTQALgNADgUQAEgRAAg5QAAgvgEgRQgEgUgKgKQgRgTgcAAQgdAAgRATgALiHTIAAjlIiMDlIg/AAIAAlmIBGAAIAADmICNjmIA/AAIAAFmgAgDHTIAAknIhfAAIAAg/IEDAAIAAA/IhfAAIAAEngAk7HTIh/i7IAAC7IhGAAIAAlmIBGAAIAACqIB1iqIBUAAIh5CoICFC+gAKBBWQgOgEgMgJQgMgJgGgNQgHgOAAgTIAyAAQACAgAeAAQAeAAADggIAxAAQAAATgHAOQgGANgMAJQgLAJgOAEQgPAEgRAAQgRAAgOgEgAJPhvIAAlmICRAAQAzAAAfAaQAeAbAAAtQAAA0gtAYQARAJAKALQAXAXAAAmQAAAZgIASQgHASgPAOQgQAOgTAGQgUAIgaAAgAKViuIBKAAQAWAAANgMQAMgMAAgUQAAgTgMgNQgNgMgWAAIhKAAgAKVlEIBFAAQAWAAANgLQAMgMAAgSQAAgTgMgMQgNgLgWAAIhFAAgAEnhvIAAg/IAdAAQAbAAAKgWIALgZIh0j4IBKAAIBLCsIBFisIBJAAIiAEpQgaA9g3AAgAgjhvIAAlmIDuAAIAAA+IioAAIAABIIBKAAQA2AAAfAgQAgAfAAAxQAAAyggAfQgfAfg2AAgAAjiuIBGAAQAYAAANgNQAOgNAAgXQAAgWgOgOQgNgNgYAAIhGAAgAkzhvIAAjmIiNDmIg+AAIAAlmIBGAAIAADlICMjlIA/AAIAAFmgAqZhvIAAiHQgeAGgXACQgZACgOAAQglAAgcgXQgbgWAAgqIAAiSIBGAAIAACAQAAArAuAAQAgAAAkgIIAAijIBHAAIAAFmg");
	this.shape_9.setTransform(-29,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(214));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(229));

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
		{src:"images/btn_bg.png", id:"btn_bg"},
		{src:"images/hotdog.png", id:"hotdog"}
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