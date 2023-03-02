(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,264);


(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,304);


(lib.holder = function() {
	this.initialize(img.holder);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,60);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-144,-11.1,288.1,22.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKtF0IAAg5IjaAAIgEA5IgQAAIAAhLIAbAAQAUgbALgwQAKgwAAg7IAAg1ICbAAIAADrIAjAAIgEBLgAIWCBQAAAzgKAtQgKAvgRAZICbAAIAAjaIh2AAgAqAF0IAAg5IjaAAIgDA5IgQAAIAAhLIAbAAQAUgbAKgwQALgwgBg7IAAg1ICcAAIAADrIAiAAIgEBLgAsXCBQAAAzgKAtQgJAvgSAZICbAAIAAjaIh2AAgApMEWIAMgOQAVAUAWAJQAVAJAcAAQAcAAASgPQATgPAAgYQAAgZgTgOQgUgOgkAAIgaAAIAAgQIAbAAQAdAAATgOQATgPAAgZQAAgWgSgOQgRgOgcAAQgoAAgkAcIgLgOQAngfAxAAQAlAAAWATQAXATgBAdQAAAsgvAQQAZAIANAOQAQARAAAYQAAAegYAUQgXAVgmAAQg6AAgtgpgAS4E7IAAjiIikDiIgTAAIAAj9IATAAIAADiICljiIASAAIAAD9gAOyE7IhoiAIg/A/IAABBIgTAAIAAj9IATAAIAACmIChimIAaAAIhvBvIBzCOgAFyE7IAAhmIhWAAIhOBmIgXAAIBRhpQgigEgTgTQgTgUAAggQAAggAZgUQAYgVAqAAIBqAAIAAD9gADmBfQgTAQAAAaQAAAbAVAQQAUAQAgAAIBWAAIAAh1IhWAAQgjAAgTAQgAgwE7IAAj9IBbAAQAqAAAaAUQAaAVAAAlQAAAmgeAWQgbAUgqAAIhDAAIAABfgAgdDLIBFAAQAjAAAVgRQAWgRAAgdQAAgdgVgQQgVgQgjAAIhGAAgAiBE7IgfhHIiWAAIggBHIgUAAIB2j/IASAAIB2D/gAioDjIhDiTIhDCTICGAAgAuxE7IAAj9IASAAIAAD9gAwZE7IAAjsIifAAIAADsIgSAAIAAj9IDEAAIAAD9gAChiXIANgOQAUAUAVAJQAXAJAbAAQAcAAASgPQATgPAAgYQAAgZgUgOQgUgOgiAAIgcAAIAAgQIAcAAQAdAAATgOQATgPAAgZQABgWgTgOQgRgOgcAAQgpAAgjAcIgLgOQAmgfAyAAQAkAAAXATQAXATAAAdQAAAsgxAQQA3AQAAAvQAAAegXAUQgYAVgmAAQg6AAgtgpgAhDhyIAAj9IC0AAIAAARIihAAIAABjICQAAIAAASIiQAAIAABlICiAAIAAASgAlMhyIAAj9ICwAAIAAARIidAAIAABaIBVAAQAqAAAXAQQAaASAAAkQABAlgYATQgXAUgqAAgAk5iEIBUAAQBJAAAAg6QAAgagTgOQgUgNgjAAIhTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-122.7,-37.2,245.4,74.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj2E0QgkglAAg4QAAg2AkgmQAlgnA2AAQAfAAAYAMQAUAJAWAVIgMANQgmgmgwAAQgtAAgeAhQgfAhAAAwQAAAwAfAhQAeAhAuAAQAaAAAVgKQAUgJAUgUIAMAMQgVAVgWALQgZAMggAAQg1AAglgmgAo1EzQgjgmAAg2QAAg1AjgmQAlgoA4AAQA3AAAkAoQAjAlAAA2QAAA2gjAlQglAog3AAQg4AAgkgngAomCGQgeAhAAAwQAAAwAeAgQAfAiAvAAQAuAAAeghQAfghAAgwQgBgvgeghQgfgiguAAQgvAAgeAhgAFhFSIAFgQQAIAFARAAQAXAAAMgcQAVgtgBh1IAAgwICbAAIAAD9IgSAAIAAjsIh3AAIAAAgQAAB8gWAwQgRAigiAAQgNAAgRgGgAKqFWIAAj9IATAAIAABlIBLAAQAoAAAYARQAcATAAAlQAAAkgZAWQgZAVgoAAgAK9FEIBKAAQAiAAAUgPQATgPABgeQAAgcgVgOQgTgOglAAIhHAAgAEhFWIAAj9IASAAIAAD9gAC4FWIAAjsIieAAIAADsIgTAAIAAj9IDEAAIAAD9gAqyFWIAAjsIifAAIAADsIgSAAIAAj9IDEAAIAAD9gAloh5QgjglgBg4QABg2AjgmQAlgnA2AAQAfAAAZAMQATAJAWAVIgMANQgmgmgvAAQgtAAggAhQgeAhAAAwQAAAwAfAhQAfAhAtAAQAaAAAWgKQATgJAUgUIANAMQgWAWgVAKQgaAMggAAQg2AAgkgmgAKthXIAAjiIilDiIgTAAIAAj9IATAAIAADiICljiIATAAIAAD9gAGmhXIhoiAIg+A/IAABBIgTAAIAAj9IATAAIAACmIChimIAZAAIhvBvIB0COgACGhXIAAj9IAUAAIAAD9gAgkhXIAAjsIhXAAIAAgRIDBAAIAAARIhWAAIAADsgArrhXIAAgOIBfhWQAfgcAMgTQAMgTAAgUQAAgYgRgQQgQgOgXAAQgYAAgSAMQgQALgQAYIgPgKQASgbATgMQAWgPAfAAQAhAAAVAUQAVAUAAAeQAAAZgOAWQgOATgjAgIhNBHICPAAIAAASg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-86.8,-34.5,173.6,69.2), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqYCCIgqgpIiHAAQghAAgVgFQgcgHgQgPQgWgVABgpIAAh1QAAgIAEgEQAGgFAJAAICWAAQAhAAAVAFQAbAGAQAPQAXAWAAAoIAAB0IAiAiQAEAFAAAHQAAAHgGAGQgGAGgHAAIgBAAQgGAAgFgFgAuaAAQAAAdAOANIADACQAOAMAeAAICXAAIAAhmQAAgcgOgOIgCgCQgPgLgegBIiXAAgAL5BaQgMAAgKgEQgLgEgHgJQgJgIgFgMQgEgNAAgQIAAiWQAAgDACgDQADgCADAAQADAAADACQACADAAADIAACWQAAAMAEAJQADAJAGAHQAGAGAHADQAIADAIAAIAnAAQASAAALgNQAKgOAAgWIAAiVQAAgEADgDQABgCAFAAQADAAACACQADADAAADIAACWQgBAPgEAMQgEANgGAIQgIAJgKAEQgLAFgNAAgAPKBYQgRAAgOgFQgPgGgJgKQgKgJgEgOQgGgOAAgRIAAhGQAAgVAGgPQAFgOAJgKQALgJAOgEQANgEARAAIAPAAQASAAANAEQAOAEAKAJQAKAKAFAOQAFAPAAAVIAABGQAAARgFAOQgFAOgKAJQgJALgOAFQgNAFgTAAgAOhhnQgQAOAAAgIAABGQAAANAEAKQAEALAHAIQAIAIAKAEQAKAFAOAAIAPAAQAOAAALgFQAKgEAIgIQAIgIADgLQAEgKgBgNIAAhGQAAgggOgOQgRgOgaAAIgPAAQgaAAgPAOgAIOBYQgGAAgEgEQgFgEAAgGIAAjCQAAgGAFgEQAEgEAGAAIA+AAQARAAAOAEQAOAEAKAJQAJAKAGAOQAEAPAAAVIAABGQAAARgEAOQgFAOgKAJQgKALgNAFQgOAFgSAAgAIQBIIA8AAQANAAAMgFQAKgEAIgIQAHgIAEgLQADgKAAgNIAAhGQAAgggPgOQgQgOgaAAIg8AAgACmBYQgRAAAAgQQABgPAQAAIBSAAQAsAAANgHQAMgGAAgUIAAgCQAAgNgFgGQgGgIgRgCQgIgBgMAAIhPAAQgRAAABgQQAAgPARAAIBKAAQAZAAAJgHQAIgGAAgOIAAgIQAAgSgMgFQgLgGgmAAIhQAAQgQAAgBgPQABgQAQAAIBPAAQA9AAAVAOQARALAAAeIAAANQAAAagLAOQAVAOAAAkIAAABQAAAqgjANQgTAIgtAAgAjBBYIAAAAQgrgBgUgMQgOgKgDgSIAAgDQAAgHAFgEQAEgEAIAAQAIAAAEADQAFADACAFIABADQAFAIAKADQAIACASABIBRAAQAuAAAMgHQALgGAAgUIAAgCQAAgQgHgGQgKgIgfAAIhtAAQglAAgQgOQgQgNAAgfIAAgNQAAgcAUgMQAYgPA9AAIA8AAQAwAAAUAMQARAKADATIAAADQAAAIgFAEQgEAEgJAAQgHAAgFgEQgEgDgCgFIgCgDQgEgJgPgDQgKgCgaAAIg+AAQgmAAgLAGQgMAFAAASIAAAIQAAAOAIAGQAJAHAZAAIBeAAQAuAAATAJQAaAOAAAoIAAABQAAApgjAOQgUAIgsAAgAweBTQgFgFAAgIIAAi6QAAgIAFgFQAFgFAJAAQAIAAAFAFQAFAFAAAIIAAC6QAAAIgFAFQgFAFgIAAQgJAAgFgFgAnxBYQg2AAgcgPQglgVAAg0IAAguQAAg1AlgUQAcgPA2AAIAzAAQA2AAAcAPQAlAUAAA1IAAAuQAAA0glAVQgcAPg2AAgAovhcQgTAOAAAiIAAArQAAAhATAOQAQALAjAAIBJAAQAjAAAQgLQAUgOAAghIAAgrQAAgigUgOQgQgLgjAAIhJAAQgjAAgQALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-106,-13.5,212,27), null);


(lib.holder_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder();
	this.instance.parent = this;
	this.instance.setTransform(-128,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder_1, new cjs.Rectangle(-128,-30,256,60), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-71,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-71,-152,142,304), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2).p("Aq2i4IVtAAIAAFxI1tAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmwA/IAAgXIhTAAIgCAXIgKAAIAAghIALAAQAPgZAAgwIAAgSIBDAAIAABbIANAAIgBAhgAnqglQAAAVgDARQgEATgGAKIA6AAIAAhQIgtAAgAhrAnIACgJQADABAGAAIAGgBQADgCACgDQAEgGABgGQACgGACgPQACgNAAgVIAAgTIBCAAIAABlIgMAAIAAhaIgrAAIAAALQAAAWgCAOQgCANgCAJQgDAIgEAGQgFAFgDACQgFABgFAAQgIAAgFgCgAHFAoIAAhlIBKAAIAAALIg+AAIAAAiIA4AAIAAALIg4AAIAAAjIA/AAIAAAKgAEgAoIAAhlIAMAAIAABbIAwAAIAAhbIAMAAIAABbIAxAAIAAhbIALAAIAABlgADyAoIAAhlIAMAAIAABlgADFAoIAAgtIg7AAIAAAtIgMAAIAAhlIAMAAIAAAtIA7AAIAAgtIALAAIAABlgAAYAoIAAhlIALAAIAAAoIAaAAQASAAALAHQALAIAAAOQAAAPgKAIQgLAJgRAAgAAjAeIAcAAQAMAAAHgGQAHgGAAgKQAAgIgHgGQgIgFgMAAIgbAAgAiBAoIgMgbIg3AAIgMAbIgMAAIAuhmIALAAIAvBmgAjAADIAvAAIgXgzgAkOAoIAAhaIgiAAIAAgLIBQAAIAAALIgjAAIAABagAmPAoIAAhlIBKAAIAAALIg/AAIAAAiIA4AAIAAALIg4AAIAAAjIA/AAIAAAKg");
	this.shape_1.setTransform(-1.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-70.5,-19.5,141,39), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-150,-132,300,264), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C99A57","#FFE596"],[0,1],0,299,0,-298.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlxB6QgjglAAg2QAAg1AjgmQAlgnA4AAQA4AAAlAnQAiAmAAA1QAAA1gjAmQglAng4AAQg3AAglgngAlhgxQgfAhAAAvQAAAvAfAhQAeAhAvAAQAuAAAfghQAfgggBgwQABgvgfghQgfghgvAAQguAAgeAhgAKZCdIAAjhIijDhIgTAAIAAj8IATAAIAADhICkjhIASAAIAAD8gAF2CdIAAjhIilDhIgSAAIAAj8IASAAIAADhICljhIATAAIAAD8gAhJCdIAAj8IBnAAQAlAAAWARQAXARAAAdQAAApgrASQA5AOAAAvQAAAggZATQgZASgpAAgAg2CMIBaAAQAhAAATgOQATgOAAgZQAAgXgTgNQgVgNglAAIhUAAgAg2AVIBSAAQAeAAARgOQASgNAAgZQAAgVgQgMQgRgNgfAAIhTAAgAn4CdIAAh2IihAAIAAB2IgTAAIAAj8IATAAIAAB0IChAAIAAh0IATAAIAAD8gAInh/QgNgMgDgSIAPgDQAHAaAbAAQAbAAAHgaIAPADQgDASgNAMQgOAMgTAAQgTAAgOgMg");
	this.shape.setTransform(0.5,-32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,20.3,0.97,0.97,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-102.8,-48.5,205.6,81.8), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,284);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,329.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({y:219.9},10,cjs.Ease.cubicOut).wait(15).to({scaleX:0.95,scaleY:0.95},2).to({scaleX:1,scaleY:1},2).wait(7).to({scaleX:0.95,scaleY:0.95},2).to({scaleX:1,scaleY:1},2).wait(20).to({x:253},10,cjs.Ease.cubicIn).to({_off:true},1).wait(5));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-341.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({y:-211.2},10,cjs.Ease.cubicOut).wait(50).to({x:253},10,cjs.Ease.cubicIn).to({_off:true},1).wait(5));

	// dev
	this.instance_3 = new lib.dev_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-220,17);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({x:0},10,cjs.Ease.cubicOut).wait(60).to({x:253},10,cjs.Ease.cubicIn).to({_off:true},1).wait(5));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-274,132.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({x:0},10,cjs.Ease.cubicInOut).wait(25).to({x:275},10,cjs.Ease.cubicIn).to({_off:true},1).wait(90));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-274,132.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:0},10,cjs.Ease.cubicOut).wait(24).to({x:240},10,cjs.Ease.cubicInOut).to({_off:true},1).wait(125));

	// holder
	this.instance_6 = new lib.holder_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(279,230);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:22},10,cjs.Ease.cubicOut).wait(59).to({x:297},10,cjs.Ease.cubicIn).to({_off:true},1).wait(90));

	// bg
	this.instance_7 = new lib.bg_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,300,1,0.44,0,0,0,0,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({scaleY:1,alpha:1},15,cjs.Ease.cubicInOut).wait(70).to({scaleY:0.44,alpha:0},15,cjs.Ease.cubicInOut).wait(1));

	// bg1
	this.instance_8 = new lib.bg1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(170));

	// bgImg
	this.instance_9 = new lib.bgImg_1();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.8,-300,767.8,600);


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
p.nominalBounds = new cjs.Rectangle(-60.8,299,767.8,602);
// library properties:
lib.properties = {
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/dev.png", id:"dev"},
		{src:"images/holder.png", id:"holder"}
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