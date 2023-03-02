(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.dev1 = function() {
	this.initialize(img.dev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,160);


(lib.dev2 = function() {
	this.initialize(img.dev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,184);


(lib.dev3 = function() {
	this.initialize(img.dev3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,194);


(lib.dev4 = function() {
	this.initialize(img.dev4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,198);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,350);// helper functions:

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
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("A13ikMArvAAAIAAFJMgrvAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArtBdIAAhGIAFAAIAAAMQAIgNAOAAQAKAAAIAHQAIAIAAANQAAAMgIAIQgIAIgKAAQgOAAgIgNIAAAcgAriAhQgGAHAAAKQAAAKAGAHQAHAGAIAAQAJAAAGgGQAGgHAAgKQAAgKgGgHQgGgGgJAAQgIAAgHAGgAyHBdIAAhGIAFAAIAAAMQAIgNAOAAQAKAAAIAHQAIAIAAANQAAAMgIAIQgIAIgKAAQgOAAgIgNIAAAcgAx8AhQgGAHAAAKQAAAKAGAHQAHAGAIAAQAJAAAGgGQAGgHAAgKQAAgKgGgHQgGgGgJAAQgIAAgHAGgAE7BbIAAgPIgwAAIgBAPIgEAAIAAgTIAHAAQAHgNAAgYIAAgMIAkAAIAAAxIAJAAIAAADIAAgDIAEABQAHAAACgHQAEgKAAgeIAAgDIAkAAIAAA1IgFAAIAAgwIgaAAIAAABQAAAfgFAKQgDAHgJAAIgFgBIgCAPgAEZAmQAAAWgHAMIAhAAIAAgsIgaAAgAzcBbIAAgPIgwAAIgBAPIgEAAIAAgTIAHAAQAHgNAAgYIAAgMIAkAAIAAAxIAJAAIgCATgAz+AmQAAAWgHAMIAhAAIAAgsIgaAAgAT7BGQgIgIAAgNQAAgRADgIQAEgLAMgDIAfgIIABAFIgdAIQgJACgDAFQgEAEgBAKQAIgNAPAAQALAAAHAIQAIAIAAALQAAAMgIAIQgHAIgMAAQgMAAgHgIgAT/AjQgGAGAAAJQAAAKAGAGQAGAHAJAAQAJAAAGgHQAGgGAAgKQAAgJgGgHQgGgGgJAAQgJAAgGAHgASgBGQgIgJAAgLQAAgMAIgIQAIgIALAAQANAAAIAKIgDAEQgIgJgKAAQgJAAgGAHQgGAGAAAKQAAAKAGAGQAGAHAKAAQAJAAAIgJIAEADQgKALgMAAQgLAAgIgIgARaBGQgIgJAAgLQAAgLAIgIQAIgJAMAAQALAAAIAIQAIAIAAAMQAAALgIAIQgIAJgMAAQgLAAgIgIgAReAiQgGAGAAAKQAAAKAGAGQAGAHAKAAQAJAAAGgHQAGgHAAgJQAAgKgGgGQgHgHgJAAQgJAAgGAHgALeBGQgIgJAAgLQAAgLAIgIQAIgJAMAAQALAAAIAIQAIAIAAAMQAAALgIAIQgIAJgMAAQgLAAgIgIgALiAiQgGAGAAAKQAAAKAGAGQAGAHAKAAQAJAAAGgHQAGgHAAgJQAAgKgGgGQgHgHgJAAQgJAAgGAHgAIgBGQgIgJAAgLQAAgLAIgIQAIgJAMAAQALAAAIAIQAIAIAAAMQAAALgIAIQgIAJgMAAQgLAAgIgIgAIkAiQgGAGAAAKQAAAKAGAGQAGAHAKAAQAJAAAGgHQAGgHAAgJQAAgKgGgGQgHgHgJAAQgJAAgGAHgAl3BGQgIgIAAgMQAAgMAHgIQAHgIALAAQALAAAHAIQAHAIAAAMIAAACIgsAAQAAAJAGAGQAGAGAIAAQALAAAIgIIADADQgJAKgNAAQgLAAgHgIgAlzAhQgGAGAAAIIAmAAQgBgIgEgGQgFgGgJAAQgIAAgFAGgAnyBKQgGgFAAgIQAAgRAYAAQALAAAGACIAAgCQAAgRgRAAQgJAAgIAFIgCgFQAJgEAKAAQALAAAGAFQAFAGAAAJIAAAhIgFAAIAAgIQgHAKgNAAQgJAAgGgEgAnyA9QAAAMAPAAQAJAAAFgFQAGgEAAgHIAAgGQgHgDgLAAQgRAAAAANgApmBGIADgFQAJAIAJAAQAGAAAEgDQAFgDAAgFQAAgKgPAAIgHAAIAAgFIAHAAQANAAAAgKQAAgKgNAAQgJAAgHAGIgDgEQAIgHAMAAQAIAAAFAEQAFAEAAAHQAAAIgJAEQAKADAAAKQAAAGgFAFQgGAFgJAAQgLAAgKgIgAw9BGQgIgJAAgLQAAgLAIgIQAIgJAMAAQALAAAIAIQAIAIAAAMQAAALgIAIQgIAJgMAAQgLAAgIgIgAw5AiQgGAGAAAKQAAAKAGAGQAGAHAKAAQAJAAAGgHQAGgHAAgJQAAgKgGgGQgHgHgJAAQgJAAgGAHgAzJBGQgIgJAAgLQAAgLAIgIQAIgJAMAAQALAAAIAIQAIAIAAAMQAAALgIAIQgIAJgMAAQgLAAgIgIgAzFAiQgGAGAAAKQAAAKAGAGQAGAHAKAAQAJAAAGgHQAGgHAAgJQAAgKgGgGQgHgHgJAAQgJAAgGAHgA1ABGIADgFQAJAIAJAAQAGAAAEgDQAFgDAAgFQAAgKgPAAIgHAAIAAgFIAHAAQANAAAAgKQAAgKgNAAQgJAAgHAGIgDgEQAIgHAMAAQAIAAAFAEQAFAEAAAHQAAAIgJAEQAKADAAAKQAAAGgFAFQgGAFgJAAQgLAAgKgIgAMMBMIABgEIAEABQAHAAACgH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");
	this.shape_1.setTransform(-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-141,-17.5,282,35), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-22.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-133.7,-32.1,222.6,63.2), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyByIgkgkIh5AAQgcABgTgFQgYgGgNgNQgUgTAAgjIAAhoQAAgGAEgEQAFgFAHAAICFAAQAdAAASAFQAZAFAOAOQATASAAAkIAABlIAeAfQAFAFgBAFQAAAGgFAFQgGAGgFAAQgHAAgEgFgAlWABQABAYAMANIACABQANAKAaAAICFAAIAAhZQAAgZgMgMIgCgCQgNgKgbgBIiFAAgAErBNIAAABQgmgBgQgLQgNgIgDgQIAAgDQAAgHAEgDQAFgEAHAAQAGAAAEAEQAFACAAAEIACAEQADAGAKADQAHACAPAAIBIAAQAoAAALgGQAJgFAAgSIAAgBQABgPgHgFQgIgHgcAAIhfAAQghAAgOgMQgOgLgBgcIAAgLQABgZASgKQAVgOA1AAIA0AAQAqAAATALQAPAJADAQIAAAEQgBAGgEAEQgEADgHAAQgHAAgDgDQgEgDgDgFIgBgCQgEgIgNgCQgIgCgXAAIg2AAQgiAAgKAFQgKAEAAAQIAAAHQAAANAGAFQAIAGAXAAIBSAAQAoAAAQAIQAYAMAAAkIAAAAQgBAkgeANQgRAHgoAAgAnKBKQgEgFAAgIIAAijQAAgHAEgEQAFgFAIAAQAHAAAEAFQAFAEAAAHIAACjQAAAIgFAFQgEAEgHAAQgIAAgFgEgAAgBNQgvAAgYgNQghgSAAguIAAgoQAAgvAhgRQAYgOAvAAIAtAAQAvAAAZAOQAgARABAvIAAAoQgBAuggASQgZANgvAAgAgWhRQgRAMAAAeIAAAmQAAAdARAMQAOAKAeAAIBBAAQAeAAAOgKQASgMAAgdIAAgmQAAgegSgMQgOgJgeAAIhBAAQgeAAgOAJg");
	this.shape.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-46.3,-11.9,92.5,23.8), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-150,-175,300,350), null);


(lib.dev4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev4();
	this.instance.parent = this;
	this.instance.setTransform(-43,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev4_1, new cjs.Rectangle(-43,-99,86,198), null);


(lib.dev3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev3();
	this.instance.parent = this;
	this.instance.setTransform(-29,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev3_1, new cjs.Rectangle(-29,-97,58,194), null);


(lib.dev2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev2();
	this.instance.parent = this;
	this.instance.setTransform(-48,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev2_1, new cjs.Rectangle(-48,-92,96,184), null);


(lib.dev1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev1();
	this.instance.parent = this;
	this.instance.setTransform(-65,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev1_1, new cjs.Rectangle(-65,-80,130,160), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBCIAAhsIhNBsIgPAAIAAiDIAPAAIAABsIBOhsIAOAAIAACDg");
	this.shape.setTransform(33.7,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBCIAAh1IgsAAIAAgOIBnAAIAAAOIgsAAIAAB1g");
	this.shape_1.setTransform(20.1,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAzBCIgQgjIhGAAIgQAjIgPAAIA8iDIANAAIA8CDgAAeASIgehCIgdBCIA7AAg");
	this.shape_2.setTransform(7.9,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBCIAAiDIAwAAQAWAAAOAMQANALAAATQAAAVgPAKQgPALgVAAIgfAAIAAAvgAghAGIAgAAQAQAAAJgHQAKgJAAgNQAAgNgJgIQgKgHgPAAIghAAg");
	this.shape_3.setTransform(-4.2,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBCIAAiDIBdAAIAAAOIhOAAIAAAoIAmAAQAWAAAOAKQAOAJAAASQAAATgNAKQgOALgWAAgAgkA0IAmAAQAjAAAAgaQAAgNgKgGQgJgGgRAAIglAAg");
	this.shape_4.setTransform(-17.4,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgTQATgUAcAAQAeAAASAUQATAUAAAbQAAAcgTAUQgTAUgdAAQgdAAgSgUgAgkgmQgPAQAAAWQAAAXAPAPQAPAQAVAAQAWAAAPgQQAPgQAAgWQAAgWgPgQQgOgPgXAAQgVAAgPAPg");
	this.shape_5.setTransform(-32.9,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("Ap1DmIAAnLITrAAIAAHLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-63,-23,126,46), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1B62AD","#0DB6EB"],[0,1],0,299,0,-298.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dev
	this.instance = new lib.dev1_1();
	this.instance.parent = this;
	this.instance.setTransform(177,-25,1,1,34,0,0,-0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({x:-3},10,cjs.Ease.cubicOut).wait(5).to({regX:0,regY:0,rotation:0,x:-45},15,cjs.Ease.cubicInOut).wait(30).to({x:245},10,cjs.Ease.cubicIn).to({_off:true},1).wait(5));

	// dev
	this.instance_1 = new lib.dev2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-23.4,0.899,0.899,17,0,0,-0.2,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-25,y:-86},15,cjs.Ease.cubicInOut).wait(30).to({x:265},10,cjs.Ease.cubicIn).to({_off:true},1).wait(5));

	// dev
	this.instance_2 = new lib.dev3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.2,-26.4,0.9,0.9,3,0,0,-0.2,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:14,y:-140},15,cjs.Ease.cubicInOut).wait(30).to({x:304},10,cjs.Ease.cubicIn).to({_off:true},1).wait(5));

	// dev
	this.instance_3 = new lib.dev4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.5,-25.6,0.899,0.899,-12.8,0,0,0.2,-0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:63,y:-169},15,cjs.Ease.cubicInOut).wait(30).to({x:353},10,cjs.Ease.cubicIn).to({_off:true},1).wait(5));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-283.5,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-0.5},10,cjs.Ease.cubicOut).wait(94).to({x:289.5},10,cjs.Ease.cubicIn).to({_off:true},1).wait(5));

	// urText
	this.instance_5 = new lib.urText();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// logo
	this.instance_6 = new lib.logo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(72.1,199.2,0.97,0.97,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// btn
	this.instance_7 = new lib.btn();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-70.1,198);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(84).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-70.2},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-70.1},2).wait(2).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-70.2},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-70.1},2).wait(26));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,300,1,0.419,0,0,0,0,300.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({regY:300,scaleY:1},15,cjs.Ease.cubicInOut).wait(60).to({regY:300.2,scaleY:0.42},15,cjs.Ease.cubicInOut).wait(1));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,300.1,1,0.448,0,0,0,0,300.1);
	this.instance_9.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({scaleY:1,alpha:0},15,cjs.Ease.cubicInOut).wait(60).to({scaleY:0.45,alpha:0.449},15,cjs.Ease.cubicInOut).wait(1));

	// img1
	this.instance_10 = new lib.img1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,300,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-417.3,-300,567.3,600);


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
p.nominalBounds = new cjs.Rectangle(-117.3,299,568.3,602);
// library properties:
lib.properties = {
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dev1.png", id:"dev1"},
		{src:"images/dev2.png", id:"dev2"},
		{src:"images/dev3.png", id:"dev3"},
		{src:"images/dev4.png", id:"dev4"},
		{src:"images/img1.jpg", id:"img1"}
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