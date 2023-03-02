(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,320);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,164);


(lib.x2 = function() {
	this.initialize(img.x2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,148);// helper functions:

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


(lib.x2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.x2();
	this.instance.parent = this;
	this.instance.setTransform(-118,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.x2_1, new cjs.Rectangle(-118,-74,236,148), null);


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2).p("A02i4MAptAAAIAAFxMgptAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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AJAJQAIAJANAAQALAAAIgGIgOgMIAEgEIANAMQAIgJAAgMQAAgNgJgKQgIgJgNAAQgNAAgIAJgAIvgmQgIgIAAgLQAAgLAIgHQAHgJALAAQAMAAAJAKIgEADQgIgIgJAAQgIAAgGAGQgGAHAAAJQAAAKAGAGQAGAHAJgBQAJAAAHgJIAEAEQgKAKgLAAQgLAAgHgIgAGZgmQgIgIAAgLQAAgLAIgHQAHgJALAAQAMAAAIAKIgDADQgIgIgJAAQgIAAgGAFQgFAHgBAIIAaAAIAAAEIgaAAQAAAIAGAHQAGAFAJAAQAJAAAHgJIAEAEQgIAKgNAAQgKAAgIgIgAFbgiQgGgEAAgJQAAgHAGgEQAGgFAKAAQAIAAAJADIAAgDQAAgPgRAAQgIAAgIADIgCgDQAJgFAJAAQALAAAFAGQAGAFAAAJIAAAgIgFAAIAAgJQgHAKgNAAQgIAAgFgEgAFagvQAAAMAPAAQAHABAGgFQAGgFAAgGIAAgGQgHgDgKABQgRgBAAAMgADlglQgGgHgBgLIgMAAIAAAYIgFAAIAAg0IAFAAIAAAYIAMAAQABgLAHgGQAHgIAKAAQALAAAHAJQAHAHAAALQAAALgHAIQgHAIgLAAQgLAAgHgHgADphJQgFAHAAAJQAAAKAFAGQAFAHAJgBQAJABAFgHQAFgGAAgKQAAgJgFgHQgFgGgJAAQgJAAgFAGgAh4gmQgIgHAAgMQAAgLAHgHQAHgJAKAAQALABAGAHQAHAIAAALIAAACIgrAAQABAJAGAGQAFAGAIgBQALAAAHgHIADADQgIAJgNAAQgKAAgHgIgAh1hKQgFAHgBAIIAmAAQgCgUgRAAQgHAAgGAFgAlbgpQgJgLAAgOQAAgPAJgLQALgLAPABQAQgBAKALQAJALAAAPQAAAOgJALQgLALgPAAQgQAAgKgLgAlWhZQgJAKAAANQAAANAJAJQAIAJANAAQANAAAIgJQAJgJAAgNQAAgNgJgKQgIgJgNAAQgNAAgIAJgArcgiQgGgEAAgJQAAgHAGgEQAGgFAKAAQAIAAAJADIAAgDQAAgPgRAAQgIAAgIADIgCgDQAJgFAJAAQALAAAFAGQAGAFAAAJIAAAgIgFAAIAAgJQgHAKgNAAQgIAAgFgEgArdgvQAAAMAPAAQAHABAGgFQAGgFAAgGIAAgGQgHgDgKABQgRgB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");
	this.shape_1.setTransform(-0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-134.5,-19.5,269,39), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-94.9,-60.3,189.8,120.7), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An8BfQgkgnAAg4QAAg3AkgnQAmgpA7AAQA5AAAmApQAkAnAAA3QAAA3glAoQgmApg5AAQg7AAglgpgAnshTQgfAigBAxQABAxAfAiQAhAjAwAAQAwAAAggiQAfgiAAgyQAAgwgggiQgggjgwAAQgwAAggAigAsEBgQgmgnAAg5QAAg3AmgoQAlgoA5AAQAgAAAZANQAUAJAXAVIgMANQgUgSgSgJQgXgLgcAAQguAAghAiQgfAiAAAxQAAAyAgAiQAgAiAvAAQAbAAAWgKQAUgKAVgVIAOANQgXAWgXALQgaANghAAQg4AAglgogAMSCDIAAggIAZAAIAAAggALICDIhUhtIhWAAIAABtIgTAAIAAkFIBuAAQAwAAAaAaQATATAAAeQABAggWAUQgUASgjAEIBWBwgAIeAFIBZAAQAhAAAWgPQAVgRAAgcQAAgbgTgPQgVgPgjAAIhaAAgAETCDIAAkFIC7AAIAAASIioAAIAABnICXAAIAAARIiXAAIAABpICqAAIAAASgAAdCDIAAkFIBeAAQAsAAAbAVQAbAWAAAmQAAAngeAWQgdAVgrAAIhHAAIAABigAAwAPIBIAAQAkAAAXgQQAXgSAAgeQAAgfgXgQQgVgQgkAAIhKAAgAjaCDIAAkFIBgAAQAsAAAbAVQAbAWAAAmQAAAngfAWQgcAVgsAAIhHAAIAABigAjGAPIBIAAQAlAAAWgQQAXgSAAgeQAAgegWgRQgVgQgkAAIhLAAgAMZA/IgFjBIAVAAIgFDBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-81,-13.6,162.1,27.2), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJgCQQAVgLAAgQIAAgEIgKAAIAAgfIAYAAIAAAcQABARgIAKQgGAKgRAHgAFgBNQgkgnAAg3QgBg3AlgoQAmgpA6AAQA6AAAmApQAkAnAAA4QAAA3glAnQgmApg6AAQg6AAglgpgAFvhlQggAiABAyQAAAwAfAjQAhAiAwABQAwAAAfgjQAggiAAgxQAAgxgggiQgggjgwAAQgwAAggAigABxBxIAAkFIAUAAIAADzICaAAIAAASgAhxBxIAAkFIATAAIAADzICZAAIAAASgAlpBxIAAkFIC6AAIAAASIinAAIAABnICWAAIAAASIiWAAIAABoICpAAIAAASgAnHBxIAAh6IioAAIAAB6IgUAAIAAkFIAUAAIAAB5ICoAAIAAh5IATAAIAAEFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-64.3,-15.3,128.7,30.7), null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-178,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(-178,-82,356,164), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqYCCIgqgpIiHAAQghAAgVgFQgcgHgQgPQgWgVABgpIAAh1QAAgIAEgEQAGgFAJAAICWAAQAhAAAVAFQAbAGAQAPQAXAWAAAoIAAB0IAiAiQAEAFAAAHQAAAHgGAGQgGAGgHAAIgBAAQgGAAgFgFgAuaAAQAAAdAOANIADACQAOAMAeAAICXAAIAAhmQAAgcgOgOIgCgCQgPgLgegBIiXAAgAL5BaQgMAAgKgEQgLgEgHgJQgJgIgFgMQgEgNAAgQIAAiWQAAgDACgDQADgCADAAQADAAADACQACADAAADIAACWQAAAMAEAJQADAJAGAHQAGAGAHADQAIADAIAAIAnAAQASAAALgNQAKgOAAgWIAAiVQAAgEADgDQABgCAFAAQADAAACACQADADAAADIAACWQgBAPgEAMQgEANgGAIQgIAJgKAEQgLAFgNAAgAPKBYQgRAAgOgFQgPgGgJgKQgKgJgEgOQgGgOAAgRIAAhGQAAgVAGgPQAFgOAJgKQALgJAOgEQANgEARAAIAPAAQASAAANAEQAOAEAKAJQAKAKAFAOQAFAPAAAVIAABGQAAARgFAOQgFAOgKAJQgJALgOAFQgNAFgTAAgAOhhnQgQAOAAAgIAABGQAAANAEAKQAEALAHAIQAIAIAKAEQAKAFAOAAIAPAAQAOAAALgFQAKgEAIgIQAIgIADgLQAEgKgBgNIAAhGQAAgggOgOQgRgOgaAAIgPAAQgaAAgPAOgAIOBYQgGAAgEgEQgFgEAAgGIAAjCQAAgGAFgEQAEgEAGAAIA+AAQARAAAOAEQAOAEAKAJQAJAKAGAOQAEAPAAAVIAABGQAAARgEAOQgFAOgKAJQgKALgNAFQgOAFgSAAgAIQBIIA8AAQANAAAMgFQAKgEAIgIQAHgIAEgLQADgKAAgNIAAhGQAAgggPgOQgQgOgaAAIg8AAgACmBYQgRAAAAgQQABgPAQAAIBSAAQAsAAANgHQAMgGAAgUIAAgCQAAgNgFgGQgGgIgRgCQgIgBgMAAIhPAAQgRAAABgQQAAgPARAAIBKAAQAZAAAJgHQAIgGAAgOIAAgIQAAgSgMgFQgLgGgmAAIhQAAQgQAAgBgPQABgQAQAAIBPAAQA9AAAVAOQARALAAAeIAAANQAAAagLAOQAVAOAAAkIAAABQAAAqgjANQgTAIgtAAgAjBBYIAAAAQgrgBgUgMQgOgKgDgSIAAgDQAAgHAFgEQAEgEAIAAQAIAAAEADQAFADACAFIABADQAFAIAKADQAIACASABIBRAAQAuAAAMgHQALgGAAgUIAAgCQAAgQgHgGQgKgIgfAAIhtAAQglAAgQgOQgQgNAAgfIAAgNQAAgcAUgMQAYgPA9AAIA8AAQAwAAAUAMQARAKADATIAAADQAAAIgFAEQgEAEgJAAQgHAAgFgEQgEgDgCgFIgCgDQgEgJgPgDQgKgCgaAAIg+AAQgmAAgLAGQgMAFAAASIAAAIQAAAOAIAGQAJAHAZAAIBeAAQAuAAATAJQAaAOAAAoIAAABQAAApgjAOQgUAIgsAAgAweBTQgFgFAAgIIAAi6QAAgIAFgFQAFgFAJAAQAIAAAFAFQAFAFAAAIIAAC6QAAAIgFAFQgFAFgIAAQgJAAgFgFgAnxBYQg2AAgcgPQglgVAAg0IAAguQAAg1AlgUQAcgPA2AAIAzAAQA2AAAcAPQAlAUAAA1IAAAuQAAA0glAVQgcAPg2AAgAovhcQgTAOAAAiIAAArQAAAhATAOQAQALAjAAIBJAAQAjAAAQgLQAUgOAAghIAAgrQAAgigUgOQgQgLgjAAIhJAAQgjAAgQALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-106,-13.5,212,27), null);


(lib.ind2_w_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAkQgigCgJgIQgGgEgCgEQgCgDgCgKIgBgMQAAgFADgEIAGgHQAIgHAKgCQAlgHAVAFQAOAEAMANQAJALABAHQABAHgHAMQgIAMgJADQgJACgPAAIgSgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ind2_w_mc, new cjs.Rectangle(-6.1,-3.7,12.2,7.4), null);


(lib.ind2_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AgEAkQgigCgJgIQgGgEgCgEQgCgDgCgKIgBgMQAAgFADgEIAGgHQAIgHAKgCQAlgHAVAFQAOAEAMANQAJALABAHQABAHgHAMQgIAMgJADQgJACgPAAIgSgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ind2_b, new cjs.Rectangle(-6.1,-3.7,12.2,7.4), null);


(lib.ind1_w_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAcQgKgCgEgFQgHgGgBgOQABAAABgHQADgKAKgFQANgHASgCQASgCANAFQAPAFADARQACARgPAKQgOAJgUAAQgLAAgPgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ind1_w_mc, new cjs.Rectangle(-4.8,-3.1,9.6,6.3), null);


(lib.ind1_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AgZAcQgKgCgEgFQgHgGgBgOQABAAABgHQADgKAKgFQANgHASgCQASgCANAFQAPAFADARQACARgPAKQgOAJgUAAQgLAAgPgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ind1_b, new cjs.Rectangle(-4.8,-3.1,9.6,6.3), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmwA/IAAgXIhTAAIgCAXIgKAAIAAghIALAAQAPgZAAgwIAAgSIBDAAIAABbIANAAIgBAhgAnqglQAAAVgDARQgEATgGAKIA6AAIAAhQIgtAAgAhrAnIACgJQADABAGAAIAGgBQADgCACgDQAEgGABgGQACgGACgPQACgNAAgVIAAgTIBCAAIAABlIgMAAIAAhaIgrAAIAAALQAAAWgCAOQgCANgCAJQgDAIgEAGQgFAFgDACQgFABgFAAQgIAAgFgCgAHFAoIAAhlIBKAAIAAALIg+AAIAAAiIA4AAIAAALIg4AAIAAAjIA/AAIAAAKgAEgAoIAAhlIAMAAIAABbIAwAAIAAhbIAMAAIAABbIAxAAIAAhbIALAAIAABlgADyAoIAAhlIAMAAIAABlgADFAoIAAgtIg7AAIAAAtIgMAAIAAhlIAMAAIAAAtIA7AAIAAgtIALAAIAABlgAAYAoIAAhlIALAAIAAAoIAaAAQASAAALAHQALAIAAAOQAAAPgKAIQgLAJgRAAgAAjAeIAcAAQAMAAAHgGQAHgGAAgKQAAgIgHgGQgIgFgMAAIgbAAgAiBAoIgMgbIg3AAIgMAbIgMAAIAuhmIALAAIAvBmgAiRADIgXgzIgYAzIAvAAgAkOAoIAAhaIgiAAIAAgLIBQAAIAAALIgjAAIAABagAmPAoIAAhlIBKAAIAAALIg/AAIAAAiIA4AAIAAALIg4AAIAAAjIA/AAIAAAKg");
	this.shape.setTransform(-1.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("Aq2C5IAAlxIVtAAIAAFxg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-69.5,-18.5,139,37), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#892901","#F06200"],[0,1],0,299,0,-298.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.ind2_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ind2_w_mc();
	this.instance.parent = this;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-8,-6,16,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ind2_w, new cjs.Rectangle(-8.1,-5.7,20,14), null);


(lib.ind1_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ind1_w_mc();
	this.instance.parent = this;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-7,-5,14,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ind1_w, new cjs.Rectangle(-6.8,-5.1,16,14), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.ind2_w();
	this.instance.parent = this;
	this.instance.setTransform(147.6,-49.9,0.45,0.45,0,0,0,0,-0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({alpha:1},4).to({alpha:0},4).to({_off:true},1).wait(1));

	// Слой_3
	this.instance_1 = new lib.ind2_b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(147.6,-49.9,0.45,0.45,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({alpha:0},4).wait(6));

	// Слой_4
	this.instance_2 = new lib.ind1_w();
	this.instance_2.parent = this;
	this.instance_2.setTransform(141.2,-49.1,0.45,0.45);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({alpha:1},4).to({alpha:0},4).wait(16));

	// Слой_5
	this.instance_3 = new lib.ind1_b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(141.2,-49.1,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({alpha:0},4).to({_off:true},1).wait(19));

	// Слой_1
	this.instance_4 = new lib.dev();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23,-221);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23,-221,170,320);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,192.6,0.02,0.02,0,0,0,0,2.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:192.7},10,cjs.Ease.cubicOut).wait(15).to({y:192.6},0).to({scaleX:0.95,scaleY:0.95},2).to({scaleX:1,scaleY:1,y:192.7},2).wait(7).to({y:192.6},0).to({scaleX:0.95,scaleY:0.95},2).to({scaleX:1,scaleY:1,y:192.7},2).wait(20).to({x:272},10,cjs.Ease.cubicIn).wait(1));

	// 2x
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.4,-512.6,0.71,0.71,0,0,0,0.2,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({y:-242.6},10,cjs.Ease.cubicOut).wait(65).to({x:271.6},10,cjs.Ease.cubicIn).wait(1));

	// 2x
	this.instance_3 = new lib.x2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3,-372);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({y:-102},10,cjs.Ease.cubicOut).wait(25).to({scaleX:1.1,scaleY:1.1,x:-2.9,y:-101.9},5).wait(15).to({scaleX:1,scaleY:1,x:-3,y:-102},5).wait(15).to({x:269},10,cjs.Ease.cubicIn).wait(1));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,363);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({y:77},10,cjs.Ease.cubicOut).wait(65).to({x:272},10,cjs.Ease.cubicIn).wait(1));

	// t1_2
	this.instance_5 = new lib.t1_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(234,-187.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({x:10},10,cjs.Ease.cubicOut).to({x:-10},24).to({x:-233},10,cjs.Ease.cubicIn).to({_off:true},1).wait(85));

	// t1_1
	this.instance_6 = new lib.t1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-220,-235.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({x:-10},10,cjs.Ease.cubicOut).to({x:10},24).to({x:240},10,cjs.Ease.cubicIn).to({_off:true},1).wait(85));

	// dev
	this.instance_7 = new lib.dev_1("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-344,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-118,mode:"synched",loop:false},10,cjs.Ease.cubicOut).to({x:-78,mode:"single",startPosition:27},34).to({x:132},10,cjs.Ease.cubicIn).to({_off:true},1).wait(85));

	// shadow
	this.instance_8 = new lib.shadow_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-357,241);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-136},10,cjs.Ease.cubicOut).to({x:-96},34).to({x:115,alpha:0},10,cjs.Ease.cubicIn).to({_off:true},1).wait(85));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-535,-300,685,623);


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
p.nominalBounds = new cjs.Rectangle(-235,299,686,624);
// library properties:
lib.properties = {
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dev.png", id:"dev"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/x2.png", id:"x2"}
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
an.compositions['E5F08688052A497EA765790B818200C2'] = {
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