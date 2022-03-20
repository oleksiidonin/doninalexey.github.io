(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.dev1 = function() {
	this.initialize(img.dev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,240);


(lib.dev2 = function() {
	this.initialize(img.dev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,242);


(lib.dev3 = function() {
	this.initialize(img.dev3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,242);


(lib.holder1 = function() {
	this.initialize(img.holder1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,238);


(lib.holder2 = function() {
	this.initialize(img.holder2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,240);


(lib.holder3 = function() {
	this.initialize(img.holder3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,238);// helper functions:

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
	this.shape.graphics.f("#1D1D1D").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-113.8,-17.8,227.6,35.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B72018").s().p("AxnFUQghgfgBg0QABgpAVglQAVglAmgYQAmgXAuAAQBEAAAgAwIgXASQgNgSgTgKQgSgLgfAAQgkAAgdAUQgeATgRAfQgRAfAAAhQAAApAZAXQAYAXAoAAQAmAAAegSIAWhLIhRAAIAIgbIBtAAIgiB4QgtAcgxAAQg0AAghgfgADyFwIgpkNIAfAAIAhDmICcjmIAiAAIi6ENgANzFuIg0hnIhJAAIgcBnIgeAAIBHkLIBhAAQAyAAAYAYQASATAAAcQAAAhgXAYQgZAZgyAHIA3BrgAL+DrIBIAAQAzAAAYgYQAQgQAAgXQAAgSgKgLQgSgQgjAAIhHAAgAG6FuIBIkLIC/AAIgIAcIihAAIgZBbICQAAIgIAbIiOAAIgZBdICiAAIgHAcgAhhFuIBHkLIC+AAIgIAcIigAAIgYBbICOAAIgHAbIiOAAIgZBdIChAAIgHAcgAmVFuIBAjvIhaAAIAHgcIDTAAIgIAcIhZAAIhBDvgArjFuIBIkLIDAAAIgHAcIiiAAIgaBfICRAAIgIAcIiQAAIgfB0gAtcFuIBIkLIAdAAIhHELgAtkh/QgighAAgyQAAgoAVglQATgkAlgYQAkgXAqAAQAzAAAiAhQAgAiAAAwQAAAqgUAlQgUAlgkAWQgkAXgrAAQgzAAggghgAsrlDQgbASgQAfQgQAeAAAiQAAAnAYAZQAYAYAnAAQAiAAAcgTQAdgTAPgeQAQgeAAghQAAgmgYgaQgXgZgoAAQgiAAgdATgAKOiRIAXgSQAiApA1AAQAeAAATgOQATgOAAgWQAAgPgMgLQgMgKgegNQgngPgSgQQgQgPAAgZQgBghAcgWQAbgWArAAQA8AAAiAoIgVAUQgfghgsAAQgdAAgSAOQgSAOAAATQABAQANAKQANAKAhANQAkAOAQAPQAQARAAAYQAAAkgdAWQgcAXgsAAQhHAAglgygAogh2QgZgXAAgnQAAgWAGgTIAmiQIAeAAIgoCYQgEAMAAASQAAAcASAQQASARAhAAQAkAAAYgYQAXgZALgpIApiZIAfAAIgrCfQgNAxgdAeQghAggyAAQgvAAgZgXgAPKhjIBAjuIhaAAIAHgcIDTAAIgIAcIhaAAIhADugAGShjIBIkKIC+AAIgHAbIigAAIgZBcICQAAIgIAbIiPAAIgZBdICiAAIgHAbgAB4hjIBIkKIBkAAQAnAAAVARQAWAQgBAdQAAAcgSASQgSASgeAGQAwAPAAAoQAAAjgeAWQgfAWg0AAgACdh+IBZAAQAlAAAUgOQAVgOABgZQgBgUgRgKQgQgKgcAAIhQAAgAC9j2IBMAAQAjAAAWgPQAVgPABgXQAAgSgPgLQgNgKgbAAIhLAAgAhnhjIg1hnIhIAAIgcBnIgeAAIBIkKIBfAAQAzAAAZAYQARATAAAbQAAAhgXAZQgaAZgwAHIA3BqgAjdjlIBJAAQAyAAAZgYQAQgSAAgVQAAgTgLgKQgPgQglAAIhIAAgAxXhjIAchrIhBifIAiAAIA1CGIB9iGIAnAAIicCkIgcBmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-116.1,-37,232.3,74.2), null);


(lib.p3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AgQBQQgggEgohLQgohKBUBJQBSBJAYhaQAZhbAKAiQAKAjgLAxQgKAzgYALQgYAMgMAAQgMAAgegEg");
	this.shape.setTransform(0.2,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("AgfCBQgxgYgag6QgZg6AOgyQAPgzAtgSQAugTAxAUQAzATAVA5QAVA3gMAzQgMAzgtAYQgXAMgYAAQgWAAgYgLg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_mc, new cjs.Rectangle(-12.3,-14.1,24.6,28.1), null);


(lib.p2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AiGBoQgOgxAPhFQAOhGAhgQQAhgQARAAQARgBArAHQArAFA5BoQA3Boh0hmQh0hmghB+QgZBcgOAAQgFAAgEgNg");
	this.shape.setTransform(-0.3,-5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("Ag0C1QhHgbgchPQgehNARhHQAQhGA/giQA/giBDAhQBEAhAjBRQAjBRgTBGQgVBGg/AZQgfANggAAQghAAgkgOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_mc, new cjs.Rectangle(-17.1,-19.5,34.2,39.1), null);


(lib.p1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AgvBzQgWgHgogSQgngTgQhFQgPhEAGgsQAHgsA+CZQA9CYCFhnQCFhnhKBWQhKBYgyACIgUAAQgiAAgSgGg");
	this.shape.setTransform(1.4,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("AhTCyQhUgggVhLQgVhLAWhFQAWhFBAgiQA/ghBiAZQBjAZAdBTQAdBSgtBMQgtBMg/AaQgdAMghAAQgnAAgugSg");
	this.shape_1.setTransform(1.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_mc, new cjs.Rectangle(-18.2,-19.7,39.9,39.2), null);


(lib.logo_duo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#31302F").s().p("AqYCDIgpgqIiIAAQghAAgVgFQgcgGgQgQQgVgVAAgpIAAh2QAAgIAFgEQAFgFAJAAICWAAQAhAAAVAFQAbAGAQAPQAXAWAAApIAAB0IAiAjQAEAFAAAHQAAAHgGAFQgGAHgHAAIgBAAQgGAAgFgFgAuaAAQAAAdAPAOIACABQAOAMAeAAICXAAIAAhmQAAgdgOgOIgCgCQgPgLgegBIiXAAgAL5BaQgNAAgJgDQgLgFgHgIQgJgJgFgMQgEgMAAgRIAAiXQAAgDACgDQADgCADAAQADAAADACQACADAAADIAACXQAAAMAEAKQADAJAGAGQAGAGAHADQAIAEAIAAIAnAAQASAAALgOQAJgOABgWIAAiWQAAgEACgDQADgCAEAAQADAAACACQADADAAADIAACXQAAAPgFAMQgEANgGAIQgIAKgKAEQgLAEgNAAgAPKBZQgRAAgOgGQgPgFgJgKQgKgKgEgOQgGgNAAgSIAAhHQAAgVAGgPQAFgOAJgKQALgJAOgEQANgEARAAIAPAAQATAAAMAEQAOAEAKAJQAKAKAFAOQAFAPAAAVIAABHQAAASgFANQgFAOgKAKQgJAKgOAFQgNAGgTAAgAOhhoQgQAOAAAgIAABHQAAANAEAKQAEAMAHAHQAIAIAKAEQAKAFAOAAIAPAAQANAAAMgFQAKgEAIgIQAIgIADgLQADgKAAgNIAAhHQAAgggOgOQgRgOgaAAIgPAAQgbAAgOAOgAIOBZQgGAAgEgEQgFgEAAgHIAAjDQAAgGAFgEQAEgEAGAAIA+AAQARAAANAEQAPAEAKAJQAJAKAGAOQAEAPAAAVIAABHQAAARgEAOQgFAOgKAKQgKAKgNAFQgOAGgSAAgAIQBIIA8AAQANAAAMgFQAKgEAIgIQAHgIADgLQAEgKAAgNIAAhHQAAgggPgOQgQgOgaAAIg8AAgACmBZQgSAAABgQQABgQAQAAIBSABQAsAAANgHQALgHAAgUIAAgCQAAgNgEgGQgGgIgRgCQgJgBgMAAIhOAAQgRAAABgQQgBgQASAAIBKAAQAZAAAJgGQAHgGAAgPIAAgIQAAgSgLgFQgLgGgmAAIhQAAQgRAAAAgPQAAgQARAAIBPAAQA9AAAVAOQARALAAAfIAAAMQAAAbgLAOQAVAOAAAkIAAACQgBApgiAOQgUAIgsAAgAjBBZIAAAAQgrgCgTgMQgPgJgDgSIAAgEQAAgHAGgEQADgEAJAAQAGAAAFADQAFAEACAFIACADQAEAHAKADQAJACARABIBRAAQAuAAAMgGQALgHAAgUIAAgCQAAgQgHgGQgKgIgfAAIhtAAQglAAgQgOQgQgNAAggIAAgMQAAgdAUgMQAYgPA9AAIA8AAQAwAAAUAMQARAKADATIAAADQAAAIgEAEQgFAEgIAAQgIAAgFgEQgEgCgCgGIgBgCQgFgKgPgCQgKgDgaAAIg+AAQglAAgMAGQgMAFAAASIAAAIQAAAPAIAGQAJAGAZAAIBfAAQAtAAATAKQAaAOAAAoIAAABQAAApgjAPQgUAIgsAAgAweBUQgFgFAAgJIAAi6QAAgJAFgFQAFgFAJAAQAIAAAFAFQAFAFAAAJIAAC6QAAAJgFAFQgFAFgIAAQgJAAgFgFgAnxBZQg2AAgcgQQglgUAAg1IAAguQAAg1AlgVQAcgPA2AAIAzAAQA2AAAcAPQAlAVAAA1IAAAuQAAA1glAUQgcAQg2AAgAovhcQgTANAAAiIAAAsQAAAhATAOQAQALAjAAIBJAAQAjAAAQgLQAUgOAAghIAAgsQAAgigUgNQgQgMgjAAIhJAAQgjAAgQAMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_duo, new cjs.Rectangle(-106,-13.6,212,27.2), null);


(lib.holder3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder3_mc, new cjs.Rectangle(-150,-119,300,238), null);


(lib.holder2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder2_mc, new cjs.Rectangle(-150,-120,300,240), null);


(lib.holder1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder1_mc, new cjs.Rectangle(-150,-119,300,238), null);


(lib.dev3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev3();
	this.instance.parent = this;
	this.instance.setTransform(-96,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev3_mc, new cjs.Rectangle(-96,-121,192,242), null);


(lib.dev2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev2();
	this.instance.parent = this;
	this.instance.setTransform(-95,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev2_mc, new cjs.Rectangle(-95,-121,190,242), null);


(lib.dev1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev1();
	this.instance.parent = this;
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev1_mc, new cjs.Rectangle(-95,-120,190,240), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B72018").ss(1,2,0,3).p("AgQgaIAbAXAALAEIgbAXAALgDIAFADIgFAE");
	this.shape.setTransform(8.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B72018").s().p("ABgAEIjAAAIAAgHIDAAAIABAAIAAAAIAAAHIAAAAg");
	this.shape_1.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-9.9,-4,21.2,8.1), null);


(lib.particleMcMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.ceil(Math.random()*3));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Слой 2
	this.instance = new lib.p1_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.5,0.4,0.4,0,0,0,0,-0.1);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-20,-22,44,43);

	this.instance_1 = new lib.p2_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5,0.4,0.4,0,0,0,0,-0.1);
	this.instance_1.alpha = 0.25;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-19,-21,38,43);

	this.instance_2 = new lib.p3_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.5,0.4,0.4,0,0,0,0,-0.1);
	this.instance_2.alpha = 0.25;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_2.cache(-14,-16,29,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-11.3,25,25);


(lib.particle2mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.particleMcMc();
	this.instance.parent = this;
	this.instance.setTransform(-34,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},25,cjs.Ease.get(-1)).to({x:34},25,cjs.Ease.get(1)).to({x:0},25,cjs.Ease.get(-1)).to({x:-34},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-19.9,61.8,39.8);


(lib.particle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.particle2mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},75).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-11.5,26,25);


(lib.holder3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder3_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8},25,cjs.Ease.quadInOut).to({y:0},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-119,300,238);


(lib.holder2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder2_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8},25,cjs.Ease.quadInOut).to({y:0},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-120,300,240);


(lib.holder1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder1_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8},25,cjs.Ease.quadInOut).to({y:0},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-119,300,238);


(lib.dev3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev3_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:8},25,cjs.Ease.quadInOut).to({y:0},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-121,192,242);


(lib.dev2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev2_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:8},25,cjs.Ease.quadInOut).to({y:0},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-121,190,242);


(lib.dev1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev1_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:8},25,cjs.Ease.quadInOut).to({y:0},25,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-120,190,240);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(29.4,0,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:31.8},3,cjs.Ease.get(1)).to({x:29.4},2).wait(3).to({x:31.8},3,cjs.Ease.get(1)).to({x:29.4},2).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F2E2D").ss(1,2,0,3).p("ApsiKITZAAIAAEVIzZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#31302F").s().p("AjAAqIAGgMQAFADAGAAQAIAAAHgKIgnhFIATAAIAcA1IAZg1IARAAIgkBHQgKAWgSAAQgKAAgIgFgAEWAtIAAhCIgvBCIgPAAIAAhbIAPAAIAABCIAwhCIAOAAIAABbgACTAtIAAhMIgdAAIAAgPIBKAAIAAAPIgdAAIAABMgABOAtIAAhCIguBCIgPAAIAAhbIAPAAIAABCIAvhCIAPAAIAABbgAgdAtIAAhMIgqAAIAABMIgRAAIAAhbIBLAAIAABbgAjmAtIgfgpIgPAOIAAAbIgQAAIAAhbIAQAAIAAAuIAsguIATAAIglAoIAnAzg");
	this.shape_1.setTransform(-17.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,-14.9,126.2,29.8);


(lib.particle2Movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_114 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(1));

	// Слой 1
	this.instance = new lib.particle2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:412.5,y:362.9},104).to({x:452.1,y:397.8,alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-11.5,26,25);


(lib.snowFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var animbool = 0;
		
		//this.addEventListener("tick", addParticles.bind(this));
		
		//function addParticles() {
		//	if(animbool == 0){
		//		animbool = 1;
		//		var cloneParticle = new lib.particle2Movie();
		//		cloneParticle.x = Math.random()*500;
		//		cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.7 +.3;
		//		this.addChild(cloneParticle);
		//	}else {
		//		animbool = 0;
		//		var cloneParticle1 = new lib.particle2Movie();
		//		cloneParticle1.x = -Math.random()*500;
		//		cloneParticle1.scaleX = cloneParticle1.scaleY = Math.random()*.7 +.3;
		//		this.addChild(cloneParticle1);
		//	}
		//}
		for(var i=0; i<3; i++){
			var cloneParticle = new lib.particle2Movie();
			cloneParticle.y = Math.random()*800;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.4 +.6;
			this.addChild(cloneParticle);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// particles
	this.particle = new lib.particle2Movie();
	this.particle.name = "particle";
	this.particle.parent = this;
	this.particle.cache(-46,-13,30,29);

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-11.5,26,25);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:32});

	// timeline functions:
	this.frame_185 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(185).call(this.frame_185).wait(1));

	// logo_duo
	this.instance = new lib.logo_duo();
	this.instance.parent = this;
	this.instance.setTransform(-39.6,-255.5,0.721,0.72,0,0,0,-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(186));

	// btn
	this.instance_1 = new lib.btn("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36.1,184.3,1.297,1.297,0,0,0,-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({mode:"synched",loop:false},0).wait(51).to({startPosition:0},0).wait(52).to({startPosition:0},0).wait(47));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.2,253.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(186));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.2,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(186));

	// holder1
	this.instance_4 = new lib.holder1_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-150.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(170).to({_off:false},0).to({alpha:1,startPosition:10},10).wait(6));

	// holder3
	this.instance_5 = new lib.holder3_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-150.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({alpha:1,startPosition:10},10).wait(51).to({startPosition:10},0).to({alpha:0,startPosition:15},5).wait(1));

	// holder2
	this.instance_6 = new lib.holder2_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-150.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off:false},0).to({alpha:1,startPosition:10},10).wait(52).to({startPosition:11},0).to({alpha:0,startPosition:16},5).to({_off:true},1).wait(51));

	// holder1
	this.instance_7 = new lib.holder1_1("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-420.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-150.3},15,cjs.Ease.cubicOut).wait(1).to({mode:"synched"},0).to({_off:true},62).wait(108));

	// snow
	this.instance_8 = new lib.snowFront();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-169.1,-562.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(186));

	// dev1
	this.instance_9 = new lib.dev1_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(55.1,-44.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(170).to({_off:false},0).to({alpha:1,startPosition:10},10).wait(6));

	// dev3
	this.instance_10 = new lib.dev3_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(54.1,-44.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(119).to({_off:false},0).to({alpha:1,startPosition:10},10).wait(51).to({startPosition:10},0).to({alpha:0,startPosition:15},5).wait(1));

	// dev2
	this.instance_11 = new lib.dev2_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(55.1,-44.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(67).to({_off:false},0).to({alpha:1,startPosition:10},10).wait(52).to({startPosition:11},0).to({alpha:0,startPosition:16},5).to({_off:true},1).wait(51));

	// dev1
	this.instance_12 = new lib.dev1_1("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(55.1,425.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:-44.7},15,cjs.Ease.cubicOut).wait(1).to({mode:"synched"},0).wait(61).to({startPosition:10},0).to({alpha:0,startPosition:15},5).to({_off:true},1).wait(103));

	// bg
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.4,-574.2,363.5,1119.7);


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
	this.instance.setTransform(150.1,300,1.003,1.003,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.1,24.3,365,1122.6);
// library properties:
lib.properties = {
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/dev1.png", id:"dev1"},
		{src:"images/dev2.png", id:"dev2"},
		{src:"images/dev3.png", id:"dev3"},
		{src:"images/holder1.png", id:"holder1"},
		{src:"images/holder2.png", id:"holder2"},
		{src:"images/holder3.png", id:"holder3"}
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