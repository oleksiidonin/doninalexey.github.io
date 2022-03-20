(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.dev_1 = function() {
	this.initialize(img.dev_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,227);


(lib.dev_2 = function() {
	this.initialize(img.dev_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,218);


(lib.holder_1 = function() {
	this.initialize(img.holder_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,238);


(lib.holder_2 = function() {
	this.initialize(img.holder_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,214);// helper functions:

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
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A2aiQMAs1AAAIAAEhMgs1AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsDBnIAAhKIAIAAIAAALQAJgNANAAQAKAAAJAIQAIAIAAAOQAAAOgIAIQgJAIgKAAQgNAAgJgMIAAAcgAr1ApQgGAHAAAJQAAAJAGAHQAGAGAJAAQAJAAAFgGQAGgGAAgKQAAgKgGgGQgGgGgIAAQgJAAgGAGgAygBnIAAhKIAJAAIAAALQAJgNANAAQAKAAAJAIQAIAIAAAOQAAAOgIAIQgJAIgKAAQgOAAgIgMIAAAcgAyRApQgGAGAAAKQAAAKAGAGQAGAGAIAAQAJAAAFgGQAGgGAAgKQAAgKgGgGQgGgGgIAAQgIAAgGAGgAE6BkIAAgPIguAAIgBAPIgHAAIAAgWIAGAAQAIgOAAgZIAAgKIAoAAIAAAxIAJAAIgCAWgAEaAsQAAAWgHAMIAfAAIAAgqIgYAAgAz5BkIAAgPIguAAIgCAPIgHAAIAAgWIAHAAQAHgOAAgZIAAgKIApAAIAAAxIAIAAIgBAWgA0aAsQAAAWgGAMIAeAAIAAgqIgYAAgAUgBOQgIgIAAgPIABgSIADgIIADgGQADgEADgCQAEgCAFgBIAfgHIACAHIgfAHQgIACgEAFQgEAGgBAIQAIgNAQAAQALAAAIAJQAIAIAAAMQAAAMgIAIQgJAJgMAAQgNAAgIgJgAUnArQgGAFAAAKQAAAJAGAGQAGAGAIAAQAJAAAGgGQAGgGAAgJQAAgJgGgGQgGgHgJAAQgIAAgGAHgATKBOQgJgJAAgMQAAgMAJgJQAIgJAMAAQAOAAAJALIgFAFQgIgIgKAAQgIAAgGAGQgGAGAAAKQAAAKAGAGQAFAGAKAAQAJAAAIgIIAGAFQgKALgOAAQgMAAgIgJgASGBOQgIgIAAgNQAAgNAIgIQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgASMApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgHQgHgGgIAAQgJAAgGAGgAL0BOQgJgIAAgNQAAgNAJgIQAIgJANAAQANAAAIAJQAIAIAAANQAAANgIAIQgJAJgMAAQgNAAgIgJgAL6ApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgHQgHgGgIAAQgJAAgGAGgAIyBOQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAI4ApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAKAAAFgGQAGgGAAgKQAAgJgGgHQgGgGgJAAQgIAAgHAGgAmGBPQgIgJAAgNQAAgMAIgJQAIgJALAAQAMAAAIAJQAHAIAAAOIAAADIgtAAQABAIAFAFQAGAFAIAAQAKAAAIgIIAFAFQgJALgPAAQgMAAgIgIgAl/AoQgGAGAAAIIAkAAQAAgIgFgGQgEgFgJAAQgHAAgFAFgAn8BSQgGgFAAgIQAAgJAGgFQAHgFALAAQAKAAAHADIAAgCQAAgHgEgFQgFgEgHAAQgJAAgJAFIgCgHQAKgFAKAAQANAAAGAGQAGAGAAALIAAAiIgJAAIAAgIQgIAKgMAAQgJAAgGgFgAn1A8QgFADAAAGQAAAFAEADQAFADAGAAQAHAAAGgEQAGgFAAgGIAAgGQgKgCgHAAQgIAAgEADgAqBBOIAEgGQAKAHAJAAQAHAAADgCQAEgDAAgFQAAgEgDgDQgEgCgHAAIgIAAIAAgHIAIAAQAGAAADgDQAEgCAAgFQAAgEgEgCQgDgCgGAAQgKAAgHAGIgEgGQAJgIANAAQAJAAAGAFQAGAEAAAHQAAAJgKAEQALADAAALQAAAGgGAGQgGAFgLAAQgMAAgLgJgAxXBOQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAxRApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAKAAAFgGQAGgGAAgKQAAgJgGgHQgGgGgJAAQgIAAgHAGgAzeBOQgJgIAAgNQAAgNAJgIQAIgJANAAQANAAAIAJQAIAIAAANQAAANgIAIQgJAJgMAAQgNAAgIgJgAzYApQgGAHAAAJQAAAKAGAGQAGAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgHQgHgGgIAAQgJAAgGAGgA1mBOIAEgGQAJAHAKAAQAHAAADgCQAEgDAAgFQAAgEgEgDQgEgCgGAAIgIAAIAAgHIAIAAQAGAAADgDQADgCAAgFQAAgEgDgCQgEgCgFAAQgKAAgHAGIgEgGQAJgIANAAQAJAAAGAFQAFAEAAAHQAAAJgJAEQALAEAAAKQAAAHgHAFQgFAFgLAAQgMAAgLgJgAMpBVIABgH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");
	this.shape_1.setTransform(0.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-144.4,-15.5,289,31), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(17.3,-18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-73.4,-62.2,181.4,88.5), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnvBhIgegfIhlAAQgYAAgRgDQgUgFgMgMQgQgQAAgdIAAhZQAAgGADgCQAEgEAGAAIBxAAQAYAAAQAEQAVAEALALQARARABAfIAABUIAZAcQADADAAAFQAAAFgFAFQgEADgGAAIgBABQgEAAgEgEgAqwABQABAVAKAJIACACQAMAJAVAAIByAAIAAhMQAAgUgLgMIgCgCQgLgIgXAAIhxAAgAI3BDQgJAAgGgDQgKgDgGgGQgEgHgEgJQgFgJABgMIAAhxIABgDIAEgCIAGACIAAADIAABxQABAJADAHQACAGAEAFQAEAFAGABQAGAEAFAAIAeAAQAOAAAIgLQAHgKAAgQIAAhwIABgEIAFgCQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIACADIAABxQAAAMgCAIQgEAJgFAHQgFAGgHAEQgJADgKAAgALUBCQgNAAgLgEQgKgEgJgHQgGgIgEgKQgEgKAAgOIAAgzQAAgQAEgMQAFgKAGgIQAJgHAJgCQALgDANAAIAKAAQAOAAAKADQAKACAHAHQAHAIAEAKQAEALAAARIAAAzQAAAOgEAKQgEAKgGAIQgIAHgKAEQgKAEgOAAgAK0hNQgMAKAAAZIAAAzQAAAKADAIQAEAJAEAEQAGAHAIADQAIAEALAAIAKAAQALAAAIgEQAHgDAGgHQAGgFACgIQADgIAAgKIAAgzQAAgZgLgKQgMgLgUAAIgKAAQgVAAgLALgAGIBCQgFAAgDgDQgDgDAAgFIAAiRQAAgFADgCQADgDAFAAIAuAAQANAAALADQAKACAHAHQAHAIAEAKQAEALgBARIAAAzQABAOgEAKQgEAKgGAIQgIAHgJAEQgLAEgOAAgAGKA2IAsAAQAKAAAIgEQAIgDAGgHQAGgFACgIQACgIABgKIAAgzQgBgZgKgKQgMgLgUAAIgsAAgAB8BCQgNAAAAgMQABgLAMAAIA8AAQAiAAAJgGQAJgEAAgQIAAgBQAAgJgDgFQgEgFgOgCIgPgBIg8AAQgLAAABgMQgBgLAMAAIA3AAQATAAAIgFQAGgFAAgKIAAgFQAAgPgJgEQgJgEgcAAIg7AAQgNAAAAgMQAAgLANAAIA6AAQAvAAAPAKQAMAIAAAXIAAAKQAAATgIALQAQAKAAAbIAAABQAAAfgZAKQgQAGghAAgAiQBBIAAABQgfgBgPgKQgLgHgCgMIAAgDQgBgGAFgDQAEgCAFAAQAGAAADABQAEADABAEIABADQADAEAIADIATADIA9AAQAiAAAIgGQAJgEAAgQIAAgBQAAgMgGgEQgHgGgXAAIhQAAQgcAAgNgKQgMgKAAgXIAAgKQAAgVAPgJQASgLAuAAIAsAAQAkAAAQAJQAMAHACAOIAAACQAAAHgDACQgEAFgGAAQgGAAgDgEQgDgCgBgEIgCgCQgFgIgJgBQgIgCgUAAIguAAQgcAAgIAEQgJAEAAAPIAAAFQAAAKAHAFQAGAFATAAIBEAAQAkAAANAHQAUAKAAAeQAAAggaAKQgPAGghAAgAsRA/QgEgFAAgHIAAiKQAAgGAEgDQAEgEAGAAQAGAAAEAEQAEADAAAGIAACKQAAAHgEAFQgEADgGAAQgGAAgEgDgAlyBBQgpAAgTgLQgdgPAAgnIAAgiQAAgoAdgPQATgLApAAIAmAAQApAAATALQAcAPAAAoIAAAiQAAAngcAPQgTALgpAAgAmhhFQgNAKAAAaIAAAgQAAAYANALQANAJAZAAIA3AAQAaAAANgJQAOgLgBgYIAAggQABgagOgKQgNgIgaAAIg3AAQgZAAgNAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-79,-10,158,20.1), null);


(lib.holder_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder_2();
	this.instance.parent = this;
	this.instance.setTransform(-64,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder_2_1, new cjs.Rectangle(-64,-107,128,214), null);


(lib.holder_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder_1();
	this.instance.parent = this;
	this.instance.setTransform(-32,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder_1_1, new cjs.Rectangle(-32,-119,64,238), null);


(lib.dev_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev_2();
	this.instance.parent = this;
	this.instance.setTransform(-66,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_2_1, new cjs.Rectangle(-66,-109,132,218), null);


(lib.dev_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev_1();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1_1, new cjs.Rectangle(-37.5,-113.5,75,227), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("AgbguIA3AuIg3Av");
	this.shape.setTransform(10,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7AFIAAgJID3AAIAAAJg");
	this.shape_1.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-12.7,-6,27,12.1), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(41.9,-1.5,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:44.3},3,cjs.Ease.get(1)).to({x:41.9},2).wait(3).to({x:44.3},3,cjs.Ease.get(1)).to({x:41.9},2).wait(1));

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjJBAIAAgWIhLAAIgBAWIgRAAIAAgnIALAAQANgZAAgwIAAgOIBJAAIAABXIAOAAIgDAngAj8giQAAAjgLAYIAwAAIAAhHIglAAgACRApIABgPIAGABQALAAAEgLQAGgQAAgqIAAgUIBIAAIAABoIgTAAIAAhYIgkAAIAAAKQAAAugIASQgIAPgQAAIgNgCgAEUAqIAAhoIATAAIAABogABvAqIgLgaIgxAAIgLAaIgTAAIAvhpIAQAAIAvBpgABdAAIgSgpIgSApIAkAAgAgeAqIAAhXIgiAAIAAgRIBUAAIAAARIggAAIAABXgAikAqIAAhoIBOAAIAAAQIg7AAIAAAbIA0AAIAAARIg0AAIAAAbIA7AAIAAARg");
	this.shape.setTransform(-17.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AqMCcIAAk3IUZAAIAAE3g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-15.5,130.6,31.2);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.btn("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-44.5,-87.1,0.02,0.02,0,0,0,-2.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:-0.5,regY:0.5,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(62).to({mode:"synched",loop:false},0).wait(78).to({startPosition:14},0).to({alpha:0},15).wait(6));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.1,-147.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},15).wait(159).to({alpha:0},15).to({_off:true},1).wait(5));

	// holder_2
	this.instance_2 = new lib.holder_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-263.2,117.7,1,1,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0,x:-83,y:113},15,cjs.Ease.quartOut).to({x:-64.7},159).to({x:-63,alpha:0},15).wait(6));

	// holder_1
	this.instance_3 = new lib.holder_1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(252.2,51.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:113,y:45},15,cjs.Ease.quartOut).to({x:94.7},159).to({x:93,alpha:0},15).wait(6));

	// dev_2
	this.instance_4 = new lib.dev_2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-227.4,91.6,1,1,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0,x:-44,y:92},15,cjs.Ease.quartOut).to({x:-25.7},159).to({x:-24,alpha:0},15).wait(6));

	// dev_1
	this.instance_5 = new lib.dev_1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(212,35.4,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:0,x:70,y:40},15,cjs.Ease.quartOut).to({x:51.7},159).to({x:50,alpha:0},15).wait(6));

	// urText
	this.instance_6 = new lib.urText();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,279.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(195));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-29,-251.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(195));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341,-300,654.9,600);


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
p.nominalBounds = new cjs.Rectangle(-41,299,654.9,602);
// library properties:
lib.properties = {
	id: 'B12536D93F55493D883A9CFDBC1C5E1B',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/dev_1.png", id:"dev_1"},
		{src:"images/dev_2.png", id:"dev_2"},
		{src:"images/holder_1.png", id:"holder_1"},
		{src:"images/holder_2.png", id:"holder_2"}
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