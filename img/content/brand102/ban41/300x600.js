(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bag = function() {
	this.initialize(img.bag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,262);


(lib.dev1 = function() {
	this.initialize(img.dev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,232);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,350);


(lib.img2 = function() {
	this.initialize(img.img2);
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


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB5EbIAAi1IANAAIAAAeQAWghAjgBQAbAAAUAUQAUAVAAAgQAAAggUAVQgVATgaAAQgjAAgWghIAABJgACXCAQgSARAAAaQAAAaASARQAQAQAXAAQAYAAAPgPQAPgQAAgcQAAgbgQgQQgPgRgXAAQgXAAgQARgAqSEbIAAi1IAOAAIAAAeQAVghAjgBQAbAAATAUQAWAVAAAgQAAAggWAVQgTATgbAAQgkAAgUghIAABJgAp0CAQgRARAAAaQAAAaARARQARAQAWAAQAXAAAPgPQAQgQAAgcQAAgbgQgQQgPgRgXAAQgWAAgRARgAgmDdQgTgUgBgeQABgeATgVQAWgVAdgBQAeABAVAVQATAVABAeQgBAegTAUQgWAWgdAAQgeAAgVgWgAgbCBQgQARAAAZQAAAZAQARQARARAXAAQAXAAAQgRQARgSAAgYQAAgZgRgRQgQgSgXAAQgXAAgRASgAnUDdQgTgUgBgeQABgeATgVQAVgVAfgBQAeABAVAVQATAVAAAeQAAAegTAUQgWAWgeAAQgeAAgVgWgAnICBQgRARAAAZQAAAZARARQAQARAYAAQAXAAARgRQAQgSAAgYQAAgZgQgRQgRgSgYAAQgXAAgQASgAlBDeIAIgLQAXATAZAAQAPAAALgIQALgIAAgMQABgNgLgGQgKgIgSAAIgTAAIAAgLIAUAAQAOAAAKgIQAKgHAAgNQAAgLgKgGQgKgHgOAAQgZAAgSAOIgIgLQAWgPAdAAQAWAAAOAKQAMAKAAAQQAAAYgWAIQAaAJAAAZQAAARgOALQgPAMgXAAQgfAAgZgUgAKBDwIAAgXIASAAIAAAXgAJCDwIAAh4IheB4IgNAAIAAiKIANAAIAAB4IBeh4IANAAIAACKgAGWDwIAAhBIhcAAIAABBIgNAAIAAiKIANAAIAAA+IBcAAIAAg+IANAAIAACKgAioDwIAAiKIBcAAIAAALIhPAAIAAB/gAKGC/IgEiNIAQAAIgECNgAnKgxIAAi1IANAAIAAAeQAWgiAjAAQAbAAATATQAWAVAAAgQAAAhgWAUQgTAUgbAAQgjAAgWghIAABJgAmsjMQgRARAAAaQAAAaARARQARAQAWAAQAXAAAPgQQAQgQAAgcQAAgagQgRQgQgQgWAAQgWAAgRARgACshvQgVgUAAgfQAAgdAVgVQAVgWAeAAQAeAAAVAWQATAUAAAeQAAAegTAVQgWAWgeAAQgeAAgUgWgAC3jMQgRASAAAYQAAAZARASQAQARAYAAQAXAAARgRQAQgSAAgZQAAgYgQgSQgRgRgYAAQgXAAgQARgAhhhuQgUgVgBgfQABgeAUgUQAUgWAeAAQAgAAAWAaIgIAJQgWgWgZAAQgXAAgPARQgRASAAAYQAAAZARASQAQARAYAAQAZABAUgYIAJAIQgXAcggAAQgeAAgUgVgAkLhvQgVgUAAgfQAAgdAVgVQAUgWAfAAQAeAAAUAWQAUAUAAAeQAAAegUAVQgUAWgfAAQgeAAgUgWgAkAjMQgRASAAAYQAAAZARASQAQARAYAAQAXAAARgRQAQgSAAgZQAAgYgQgSQgRgRgYAAQgXAAgQARgABMhdIAAh+Ig0AAIAAgLIB0AAIAAALIgzAAIAAB+gAoLhdIAAiwIh2AAIAACwIgOAAIAAi9ICTAAIAAC9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-65.9,-28.3,131.8,56.6), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-132.6,-28.5,265.2,57), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyByIgkgkIh5AAQgcABgTgFQgYgGgNgNQgUgTAAgjIAAhoQAAgGAEgEQAFgFAHAAICFAAQAdAAASAFQAZAFAOAOQATASAAAkIAABlIAeAfQAFAFgBAFQAAAGgFAFQgGAGgFAAQgHAAgEgFgAlWABQABAYAMANIACABQANAKAaAAICFAAIAAhZQAAgZgMgMIgCgCQgNgKgbgBIiFAAgAErBNIAAABQgmgBgQgLQgNgIgDgQIAAgDQAAgHAEgDQAFgEAHAAQAGAAAEAEQAFACAAAEIACAEQADAGAKADQAHACAPAAIBIAAQAoAAALgGQAJgFAAgSIAAgBQABgPgHgFQgIgHgcAAIhfAAQghAAgOgMQgOgLgBgcIAAgLQABgZASgKQAVgOA1AAIA0AAQAqAAATALQAPAJADAQIAAAEQgBAGgEAEQgEADgHAAQgHAAgDgDQgEgDgDgFIgBgCQgEgIgNgCQgIgCgXAAIg2AAQgiAAgKAFQgKAEAAAQIAAAHQAAANAGAFQAIAGAXAAIBSAAQAoAAAQAIQAYAMAAAkIAAAAQgBAkgeANQgRAHgoAAgAnKBKQgEgFAAgIIAAijQAAgHAEgEQAFgFAIAAQAHAAAEAFQAFAEAAAHIAACjQAAAIgFAFQgEAEgHAAQgIAAgFgEgAAgBNQgvAAgYgNQghgSAAguIAAgoQAAgvAhgRQAYgOAvAAIAtAAQAvAAAZAOQAgARABAvIAAAoQgBAuggASQgZANgvAAgAgWhRQgRAMAAAeIAAAmQAAAdARAMQAOAKAeAAIBBAAQAeAAAOgKQASgMAAgdIAAgmQAAgegSgMQgOgJgeAAIhBAAQgeAAgOAJg");
	this.shape.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-46.4,-11.9,92.6,23.8), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-150,-175,300,350), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-150,-175,300,350), null);


(lib.dev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev1();
	this.instance.parent = this;
	this.instance.setTransform(-56,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev, new cjs.Rectangle(-56,-116,112,232), null);


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
	this.shape.graphics.lf(["#601200","#E34D00"],[0,1],0,299,0,-298.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bag_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bag();
	this.instance.parent = this;
	this.instance.setTransform(-63,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bag_1, new cjs.Rectangle(-63,-131,126,262), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-348.9,111.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({x:-65.9},10,cjs.Ease.cubicOut).wait(80).to({x:-218.9},10,cjs.Ease.cubicIn).to({_off:true},1).wait(15));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-283.5,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-0.5},10,cjs.Ease.cubicOut).wait(25).to({x:286.5},10,cjs.Ease.cubicIn).to({_off:true},1).wait(115));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(161));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(72.1,199.2,0.97,0.97,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161));

	// btn
	this.instance_4 = new lib.btn();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-70.1,198);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-70.2},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-70.1},2).wait(2).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-70.2},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-70.1},2).wait(36));

	// dev
	this.instance_5 = new lib.dev();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-208,-55);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).to({x:-48},10,cjs.Ease.cubicOut).wait(30).to({x:-208},10,cjs.Ease.cubicIn).to({_off:true},1).wait(15));

	// bag
	this.instance_6 = new lib.bag_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(217,-100);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({_off:false},0).to({x:48},10,cjs.Ease.cubicOut).wait(30).to({x:217},10,cjs.Ease.cubicIn).to({_off:true},1).wait(15));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,300,1,0.419,0,0,0,0,300.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80).to({regY:300,scaleY:1},15,cjs.Ease.cubicInOut).wait(50).to({regY:300.2,scaleY:0.42},15,cjs.Ease.cubicInOut).wait(1));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,300.1,1,0.448,0,0,0,0,300.1);
	this.instance_8.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80).to({scaleY:1,alpha:0},15,cjs.Ease.cubicInOut).wait(50).to({scaleY:0.45,alpha:0.449},15,cjs.Ease.cubicInOut).wait(1));

	// img1
	this.instance_9 = new lib.img2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-124);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(35).to({_off:false},0).to({alpha:1},10).to({_off:true},50).wait(66));

	// img1
	this.instance_10 = new lib.img1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(161));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,300,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416.1,-300,566.2,600);


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
p.nominalBounds = new cjs.Rectangle(-116.1,299,567.2,602);
// library properties:
lib.properties = {
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bag.png", id:"bag"},
		{src:"images/dev1.png", id:"dev1"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"}
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