(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,130);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,156);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,24);// helper functions:

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
	this.shape.graphics.f("#000000").s().p("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IhAdIAFgHQAJAIAMAAQAHAAAEgDQAGgDAAgFQgBgFgEgDQgDgDgJAAIgIAAIAAgIIAIAAQAHAAADgCQAEgCABgGQgBgEgEgDQgEgCgGAAQgLAAgIAGIgFgGQALgJAOAAQALAAAHAFQAFAFABAIQAAAKgLAEQAMAEAAALQAAAJgHAFQgHAGgMAAQgPAAgLgKgAgxAhQgHgFAAgKQAAgKAIgFQAIgFAMAAQAJAAALACIAAgBQAAgJgFgEQgFgFgJAAQgIAAgMAFIgCgIQAMgFALAAQANAAAIAHQAFAHABAMIAAAmIgJAAIAAgJQgJALgOAAQgJAAgJgGgAgoAIQgFAEgBAGQAAAGAFADQAFAEAGAAQAJAAAHgFQAGgFAAgHIAAgGQgJgDgKAAQgIAAgFADgAlOAdIAFgHQAJAIAMAAQAIAAAEgDQAEgDAAgFQAAgFgDgDQgFgDgIAAIgIAAIAAgIIAIAAQAIAAADgCQAEgDAAgFQAAgEgEgDQgEgCgGAAQgLAAgJAGIgEgGQAKgJAOAAQAMAAAFAFQAHAFAAAIQAAAKgKAEQAMAEgBALQABAJgIAFQgGAGgMAAQgPAAgMgKgAmqAdQgKgKAAgOQAAgNAKgKQAJgKAOAAQAQAAALAMIgGAGQgKgJgKAAQgJAAgHAGQgGAGgCAIIAeAAIAAAIIgeAAQACAJAGAGQAHAGAJAAQALAAAJgKIAGAGQgFAHgHADQgGADgIAAQgPAAgJgKgAnzAhQgHgFAAgKQAAgKAHgFQAJgFALAAQAJAAALACIAAgBQAAgJgFgEQgFgFgJAAQgJAAgLAFIgCgIQAMgFALAAQANAAAIAHQAHAGgBANIAAAmIgJAAIAAgJQgIALgPAAQgKAAgHgGgAnrAIQgGAEAAAGQAAAGAGADQAEAEAHAAQAIAAAHgFQAHgFgBgHIAAgGQgJgDgKAAQgHAAgGADgAwOAhQgHgFAAgKQAAgKAHgFQAIgFAMAAQAKAAALACIAAgBQgBgIgFgFQgEgFgKAAQgIAAgMAFIgCgIQAMgFALAAQAOAAAHAHQAHAHAAAMIAAAmIgJAAIAAgJQgJALgPAAQgJAAgIgGgAwGAIQgFAEgBAGQABAGAFADQAEAEAHAAQAIAAAHgFQAHgFAAgHIAAgGQgKgDgKAAQgIAAgFADgArbAlIgLAAIgXgdIgNAOIAAAPIgK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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-110.8,-17.8,221.7,35.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEYEOIAXgcQAhAdAkAAQASAAAKgIQALgHAAgOQAAgLgKgIQgKgHgdgHQgngJgPgNQgTgPAAgdQAAgcAVgSQAUgRAiAAQAtAAAiAbIgVAeQgdgXgeAAQgRAAgJAHQgJAIAAALQgBAOALAGQALAIAeAHQAlAIAPAOQATAQgBAaQABAfgWARQgWASgiAAQg0AAgogjgAHtEtIAAgqIAqAAIAAAqgACXEtIAAi2IhFAAIAAgkICxAAIAAAkIhFAAIAAC2gAhvEtIAAjaIChAAIAAAjIh7AAIAAA4IBtAAIAAAjIhtAAIAAA6IB8AAIAAAigAlAEtIAAjaICiAAIAAAjIh8AAIAAA4IBtAAIAAAjIhtAAIAAA6IB9AAIAAAigAmfEtIAAhbIhoAAIAABbIgnAAIAAjaIAnAAIAABbIBoAAIAAhbIAnAAIAADagAH3DoIgMiKIAAgLIAtAAIAAALIgLCKgADHheQgYgZAAgjIAAgBQAAgjAYgaQAYgZAlAAQAnAAAbAdIgYAZQgTgUgYgBQgUAAgNAQQgOAPAAAWIAAAAQAAAXAOAPQAOAPAWAAQAWABAUgVIAXAWQgOAPgNAIQgRAJgYAAQgkAAgYgagAqnheQgZgYAAglQAAgjAZgaQAagZAlAAQAmAAAZAZQAZAZAAAkQAAAkgZAZQgZAZgmABQgmAAgZgagAqMjAQgOAPAAAWQAAAXAOAOQAPARAVgBQAXAAAOgPQAOgPAAgXQAAgVgPgQQgOgQgWAAQgXAAgNAQgAJQhSQgRgOAAgZQAAgaATgOQASgOAeAAQAXAAAWAIIAAgEQAAgjgpAAQgVAAgaAKIgKgeQAggOAfAAQAkAAATATQARASAAAhIAABhIglAAIAAgUQgUAYghAAQgZAAgRgNgAJuiNQgKAHAAANQAAAKAKAIQAIAFAOABQATAAANgKQAMgKAAgPIAAgJQgSgHgUAAQgSAAgKAHgAN0hJIgzhDIgaAcIAAAnIgmAAIAAilIAmAAIAABQIBHhQIAtAAIhABGIBGBfgAH0hJIAAhuIg0BKIgzhJIAABtIglAAIAAilIAmAAIAzBNIA0hNIAlAAIAAClgAAFhJIAAhuIhNBuIgjAAIAAilIAlAAIAABvIBMhvIAkAAIAAClgAi/hJIAAhuIhPBuIgjAAIAAilIAlAAIAABvIBNhvIAkAAIAAClgAnqhJIAAilIBVAAQAZAAAPALQAOAMAAATQAAAagaAMQAiAKAAAfQAAAVgRAMQgQALgcAAgAnFhnIAsAAQAbAAAAgUQAAgVgdAAIgqAAgAnFipIAnAAQAMAAAHgGQAGgFAAgKQAAgSgYgBIgoAAgAsRhJIAAhcIhoAAIAABcIgnAAIAAjaIAnAAIAABbIBoAAIAAhbIAmAAIAADagAhBkMQgMgMgEgUIAXgEQAHAVAUAAQASAAAIgVIAVAEQgDAUgNAMQgMALgTABQgUgBgOgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-92.8,-30.5,185.7,61), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACkAYIAJgLQAKAJALAAQAFAAACgCQACgBAAgEQAAgDgCgBIgVgHIgHgEQgDgBgCgEQgBgEAAgEQAAgKAHgGQAHgFAKAAQAPAAAKAJIgHALQgKgHgIAAQgEAAgDABQgCADAAACQAAADADACQACACAKACQALADAFAEQAFAEAAAJQAAAKgGAGQgIAFgLAAQgQAAgNgLgAiOAZQgKgKAAgPQAAgOAKgKQAKgKAQAAQAJAAAGADQAHADAEAFIgJAKIgIgGQgDgBgGgBQgJAAgGAHQgFAGAAAIQAAAJAFAGQAGAHAJAAQAGAAADgCQAEgCAFgFIAJALQgFAGgHACQgGADgKAAQgPABgKgLgAl/AZQgKgKAAgPQAAgOALgKQAKgLAQABQAPAAALAKQAKAKAAAOQAAAOgKALQgLALgPgBQgQABgLgLgAlzgOQgGAGAAAIQAAAJAGAGQAGAHAJAAQAJAAAGgHQAFgGAAgJQAAgIgGgGQgFgHgJAAQgJAAgGAHgAE6AjIgQgsIgPAsIgOAAIgXhEIAQAAIAOAtIAQgtIANAAIAPAtIAOgtIAQAAIgXBEgAIWAiIAAg2IgVAAIAAgNIA5AAIAAANIgVAAIAAA2gAGyAiIAAhDIA0AAIAAANIglAAIAAAPIAhAAIAAAMIghAAIAAAbgAF+AiIAAhDIAPAAIAABDgAAnAiIAAhDIAPAAIAAA2IAjAAIAAANgAgGAiIgGgPIgdAAIgGAPIgQAAIAehEIAOAAIAcBEgAgRAFIgKgUIgJAUIATAAgAjJAiIAAhDIAPAAIAABDgAkfAiIAAhDIAcAAQAMgBAIAHQAHAHAAAKQAAALgIAGQgIAHgMgBIgMAAIAAAVgAkQABIAMAAQAGgBADgCQADgCAAgGQAAgFgDgCQgDgDgGAAIgMAAgAm3AiIgPgVIgLAAIAAAVIgPAAIAAhDIAfAAQANAAAHAGQAGAGAAAKQAAAPgPAGIARAYgAnRAAIAPAAQAFAAADgDQAEgDAAgEQAAgEgEgEQgDgCgFAAIgPAAgAokAiIAAg2IgVAAIAAgNIA5AAIAAANIgVAAIAAA2g");
	this.shape.setTransform(0,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-81,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-81,-21,162,41.7), null);


(lib.box_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-90,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_2, new cjs.Rectangle(-90,-65,180,130), null);


(lib.box_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-94,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(-94,-78,188,156), null);


(lib.bgImg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg3_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3B47D").ss(2,2,0,3).p("AgcgtIArAkAAUgFIAHAFIgHAHAAJAPIglAg");
	this.shape.setTransform(12,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3B47D").s().p("ACDAKIkQAAIAAgTIEWAAIAFAAIAAAEIAAAHIAAAEIAAAEg");
	this.shape_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-14.3,-6,30.5,12.1), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(46.6,0,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:49},3,cjs.Ease.get(1)).to({x:46.6},2).wait(3).to({x:49},3,cjs.Ease.get(1)).to({x:46.6},2).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiA/IAAgWIhPAAIAAhlIASAAIAABUIAwAAIAAhUIASAAIAABUIANAAIgDAngAmXAaIAKgMQAOANAUAAQAIAAAGgEQAGgEAAgHQAAgOgXAAIgMAAIAAgPIAMAAQAVAAAAgPQAAgHgGgDQgFgEgJAAQgQAAgMALIgKgMQAQgPAXAAQAQAAAKAIQAKAIAAALQAAARgRAHQAUAHAAARQAAAMgKAJQgLAIgRAAQgaAAgSgQgAGGApIAAhJIg0BJIgQAAIAAhlIARAAIAABKIA0hKIARAAIAABlgAD7ApIAAhVIghAAIAAgQIBTAAIAAAQIggAAIAABVgACyApIAAhJIgzBJIgRAAIAAhlIASAAIAABKIAzhKIARAAIAABlgAA9ApIAAgqIgxAAIAAAqIgRAAIAAhlIARAAIAAAqIAxAAIAAgqIASAAIAABlgAg8ApIAAhlIASAAIAABlgAjgApIgKgZIgwAAIgLAZIgSAAIAthmIAQAAIAtBmgAjxAAIgRgnIgSAnIAjAAg");
	this.shape.setTransform(-23.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AsyDDIAAmFIZlAAIAAGFg");
	this.shape_1.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-19.5,163.8,39);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_93 = function() {
		/*
		if(num >= 5){
			this.stop();
		}else{
			num++;
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(93).call(this.frame_93).wait(12));

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4,268.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105));

	// btn
	this.instance_3 = new lib.btn("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.7,194.5,1,1,0,0,0,-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({mode:"synched",loop:false},0).wait(33));

	// box_2
	this.instance_4 = new lib.box_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(31,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(105));

	// box_1
	this.instance_5 = new lib.box_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-24,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(105));

	// bgImg1
	this.instance_6 = new lib.bgImg1_1();
	this.instance_6.parent = this;
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({alpha:1},10).wait(1));

	// bgImg3
	this.instance_7 = new lib.bgImg3_1();
	this.instance_7.parent = this;
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},0).to({alpha:1},10).to({_off:true},35).wait(1));

	// bgImg2
	this.instance_8 = new lib.bgImg2_1();
	this.instance_8.parent = this;
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({alpha:1},10).to({_off:true},35).wait(36));

	// bgImg1
	this.instance_9 = new lib.bgImg1_1();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},34).wait(71));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(105));

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
	id: 'B12536D93F55493D883A9CFDBC1C5E1B',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/logo.png", id:"logo"}
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
an.compositions['B12536D93F55493D883A9CFDBC1C5E1B'] = {
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