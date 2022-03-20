(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,158);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,158);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,184);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,252);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,84);// helper functions:

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

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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QgJAJAAAOQAAAOAJAJQAJAKANAAQAMAAAHgHIgNgMIADgEIAOAMQAIgJAAgNQAAgNgJgKQgIgKgOAAQgNAAgJAKgAM1ghIAEgEQAJAHAJAAQAGAAAEgDQAFgDgBgFQAAgKgOAAIgHAAIAAgFIAHAAQANAAAAgKQAAgKgMAAQgLAAgGAGIgDgEQAIgGAMAAQAIAAAFAEQAFADAAAHQAAAJgJADQAKAEAAAJQAAAGgGAFQgFAFgIAAQgMAAgLgIgAJDghQgIgIABgMQgBgLAIgJQAIgIAMAAQAMAAAJAKIgEAEQgJgJgIAAQgKAAgFAHQgHAGAAAKQAAAKAHAGQAFAHAKAAQAJAAAJgJIADADQgKALgLAAQgMAAgIgIgAGqghQgHgIAAgMQgBgLAIgIQAIgJAMAAQALAAAKAKIgDAEQgKgJgIAAQgJAAgGAGQgGAGgBAIIAcAAIAAAFIgcAAQABAJAGAGQAGAGAJAAQAKAAAIgJIADADQgJALgMAAQgLAAgJgIgAFpgdQgGgFAAgIQAAgIAGgFQAHgEAKAAQAHAAALACIAAgCQAAgRgSAAQgHAAgKAFIgCgFQAJgEAKAAQALAAAGAFQAGAGAAAJIAAAiIgFAAIAAgJQgIAKgMAAQgKAAgFgEgAFogqQAAAMAQAAQAIAAAGgEQAGgFAAgHIAAgGQgIgDgKAAQgSAAAAANgADyghQgIgHAAgLIgNAAIAAAZIgGAAIAAg2IAGAAIAAAZIANAAQABgLAHgHQAGgIAMAAQALAAAHAIQAHAIAAAMQAAAMgHAHQgHAJgLAAQgMAAgGgIgAD1hFQgGAGABAKQgBAKAGAGQAFAHAKAAQAJAAAFgHQAFgGAAgKQAAgKgFgGQgFgHgJAAQgKAAgFAHgAhvghQgIgIAAgMQAAgMAGgIQAIgIAKAAQAMAAAGAIQAHAIAAAMIAAACIgsAAQABAKAFAGQAGAFAJAAQAJAAAJgIIADADQgJAKgMAAQgMAAgGgIgAhLg3QgDgVgRAAQgHAAgGAGQgFAGgBAJIAnAAIAAAAgAkQglIADgEQALALAPAAQAJAAAFgEQAFgEAAgHQAAgGgEgDQgFgEgMgCQgNgDgGgFQgFgFgBgIQABgIAGgGQAHgFAKAAQANAAAMAIIgEAFQgKgJgLAAQgIAAgFAEQgFAEAAAGQAAAHAEADQAFAEAMACQA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");
	this.shape.setTransform(-0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A2BizMAsDAAAIAAFnMgsDAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-141.9,-19,284,38), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-110.9,-33.4,221.9,67), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoTBoIghghIhtAAQgaAAgRgEQgWgFgNgNQgRgQAAghIAAheQAAgGAEgDQAEgEAHAAIB4AAQAbAAARAEQAWAFANAMQARARAAAhIAABcIAcAbQADAEAAAGQAAAFgFAFQgFAFgGAAIAAAAQgFAAgEgEgAriAAQAAAXAMALIACABQALAKAZAAIB4AAIAAhSQAAgWgLgLIgCgCQgMgJgXgBIh6AAgAJhBIQgKAAgIgDQgJgEgFgGQgHgHgEgKQgEgKAAgNIAAh4QAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQACgCADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAIAAB4QABAKADAHQACAHAFAGQAFAEAFADQAHADAGAAIAfAAQAPAAAIgLQAIgLAAgSIAAh3QAAgDACgCQACgCADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABABAAAAQAAABAAAAQABABAAAAIAAB4QAAAMgEAKQgDAKgGAGQgFAIgIADQgKAEgJAAgAMJBHQgPAAgLgFQgLgEgIgIQgIgIgDgLQgFgLAAgOIAAg4QAAgQAFgMQAEgMAIgHQAIgIALgDQAKgDAPAAIALAAQAPAAAKADQAMADAHAIQAIAHAEAMQAEAMAAAQIAAA4QAAAOgEALQgEALgHAIQgIAIgLAEQgLAFgPAAgALnhSQgMALAAAZIAAA4QAAALACAIQAEAJAGAGQAFAGAJADQAIAEAMAAIALAAQALAAAJgEQAIgDAHgGQAFgHADgIQADgIAAgLIAAg4QAAgZgMgLQgNgMgVAAIgLAAQgWAAgMAMgAGlBHQgFAAgEgEQgDgDAAgFIAAibQAAgFADgDQAEgDAFAAIAyAAQANAAALADQALADAJAIQAHAHAEAMQAEAMAAAQIAAA4QAAAOgEALQgEALgHAIQgIAIgLAEQgLAFgOAAgAGnA5IAwAAQAKAAAJgEQAIgDAHgGQAGgHACgIQADgIAAgLIAAg4QAAgZgMgLQgNgMgUAAIgwAAgACFBHQgOAAABgNQAAgNANAAIBBABQAkAAAKgGQAJgFAAgQIAAgBQAAgLgEgFQgEgGgOgBIgQgBIhAAAQgMAAAAgNQAAgMANAAIA7AAQAUAAAIgGQAGgEAAgMIAAgGQAAgPgJgEQgJgEgfAAIg/AAQgNAAAAgMQAAgNANAAIA+AAQAyAAARALQANAJAAAYIAAAKQAAAVgJALQARAMAAAcIAAABQAAAhgcALQgQAHgjAAgAibBGIAAABQghgCgQgJQgMgIgCgOIAAgDQAAgGAEgDQADgDAHAAQAFAAAFADQADACABAEIACADQADAGAJACQAGACAOAAIBBAAQAkAAAKgFQAJgFAAgQIAAgBQAAgNgFgFQgJgGgYAAIhXAAQgeAAgNgLQgNgLAAgZIAAgKQAAgWAQgKQAUgMAxAAIAvAAQAmAAARAKQAOAHACAQIAAACQAAAGgEAEQgEADgGAAQgGAAgEgDQgEgCgBgFIgBgCQgEgHgLgCQgJgCgUAAIgyAAQgeAAgJAEQgJAEAAAPIAAAGQAAAMAFAEQAIAGAUAAIBLAAQAkAAAPAHQAVAMAAAfIAAABQAAAhgbALQgRAHgjAAgAtLBDQgEgEAAgHIAAiUQAAgHAEgEQAEgEAHAAQAHAAADAEQAEAEABAHIAACUQgBAHgEAEQgDAEgHAAQgHAAgEgEgAmOBGQgrAAgWgMQgdgQAAgqIAAglQAAgqAdgQQAWgMArAAIAqAAQArAAAVAMQAeAQAAAqIAAAlQAAAqgeAQQgVAMgrAAgAm/hJQgPALAAAbIAAAiQAAAbAPALQANAIAcAAIA6AAQAcAAANgIQAPgLAAgbIAAgiQAAgbgPgLQgNgJgcAAIg6AAQgcAAgNAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-84.8,-10.8,169.6,21.6), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-39,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-39,-42,78,84), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-54,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-54,-126,108,252), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-62,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-62,-92,124,184), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AqYDNIAAmZIUxAAIAAGZg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhA6Igsg4IgZAZIAAAfIgNAAIAAhzIANAAIAABEIBChEIARAAIgxAzIA0BAg");
	this.shape_1.setTransform(37.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjA6IAAhgIhFBgIgNAAIAAhzIANAAIAABfIBFhfIANAAIAABzg");
	this.shape_2.setTransform(23.8,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKA6IAAhzIAMAAIAABnIA4AAIAAhnIANAAIAABnIA3AAIAAhnIANAAIAABzg");
	this.shape_3.setTransform(8.1,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqArQgRgSABgZQgBgYARgSQARgRAZAAQAaAAAQARQASARgBAZQABAYgSASQgQASgaAAQgZAAgRgRgAggghQgNAOAAATQAAAUANAOQAOAOASAAQAUAAAMgOQAOgNAAgVQAAgUgOgNQgMgOgUAAQgUAAgMAOg");
	this.shape_4.setTransform(-8.5,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhA6Igsg4IgZAZIAAAfIgNAAIAAhzIANAAIAABEIBChEIARAAIgxAzIA0BAg");
	this.shape_5.setTransform(-20.5,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguA2IAFgKQAHADAIAAQAOAAAKgRIg0hYIAPAAIAqBLIAlhLIAPAAIguBbQgNAagWAAQgLAAgJgFg");
	this.shape_6.setTransform(-39.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-66.5,-20.5,133,41), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-88,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-88,-79,176,158), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-93,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-93,-79,186,158), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#92622C","#FADE91"],[0.008,1],0,299,0,-298.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-254.3,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,272.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(215));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.4,192.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-0.5,y:192.8},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-0.4,y:192.7},2).wait(2).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-0.5,y:192.8},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-0.4,y:192.7},2).wait(26));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,121.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(215));

	// img
	this.instance_4 = new lib.img4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-208.6,-158.4,1,1,-42,0,0,-0.2,-0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(154).to({_off:false},0).to({regX:0,regY:0,rotation:0,x:-84,y:-139},10,cjs.Ease.cubicOut).wait(40).to({x:194},10,cjs.Ease.cubicIn).wait(1));

	// img
	this.instance_5 = new lib.img4_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-207.5,-150.1,1,1,-43,0,0,-0.1,-0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149).to({_off:false},0).to({regY:-0.3,rotation:-13,x:-79.1,y:-107.3},10,cjs.Ease.cubicOut).wait(45).to({x:198.9},10,cjs.Ease.cubicIn).wait(1));

	// img
	this.instance_6 = new lib.img1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-184.6,-168,0.554,0.554,0,0,0,-0.1,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).to({regX:-0.2,x:-18.7},10,cjs.Ease.cubicOut).wait(50).to({regX:0,x:182.4},10,cjs.Ease.cubicIn).wait(1));

	// img
	this.instance_7 = new lib.img2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-222.8,-64,1,1,9,0,0,0.2,-0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(134).to({_off:false},0).to({x:61.2},10,cjs.Ease.cubicOut).wait(60).to({x:339.2},10,cjs.Ease.cubicIn).wait(1));

	// img
	this.instance_8 = new lib.box2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-228.5,-31.1,0.89,0.89,0,0,0,-0.2,-0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(139).to({_off:false},0).to({x:-47.2},10,cjs.Ease.cubicOut).wait(55).to({x:230.8},10,cjs.Ease.cubicIn).wait(1));

	// img
	this.instance_9 = new lib.img2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(207,-79);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({_off:false},0).to({x:20},10,cjs.Ease.cubicOut).to({x:-20},25).to({x:-206},10,cjs.Ease.cubicIn).to({_off:true},1).wait(80));

	// img
	this.instance_10 = new lib.img1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-213,-79);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({_off:false},0).to({x:-20},10,cjs.Ease.cubicOut).to({x:0},25).to({x:215},10,cjs.Ease.cubicIn).to({_off:true},1).wait(125));

	// box
	this.instance_11 = new lib.box1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(245,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:35},10,cjs.Ease.cubicOut).to({x:-5},24).to({x:-245},10,cjs.Ease.cubicIn).to({_off:true},1).wait(170));

	// box
	this.instance_12 = new lib.box2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-239,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-59},10,cjs.Ease.cubicOut).to({x:-19},24).to({x:241},10,cjs.Ease.cubicIn).to({_off:true},1).wait(170));

	// bg
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,300,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(215));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-327,-300,665,600);


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
p.nominalBounds = new cjs.Rectangle(-27,299,665,602);
// library properties:
lib.properties = {
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img4.png", id:"img4"}
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