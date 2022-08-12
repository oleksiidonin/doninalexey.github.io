(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,250);


(lib._3_light = function() {
	this.initialize(img._3_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,500);


(lib.dev1_b = function() {
	this.initialize(img.dev1_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,342);


(lib.dev2_b = function() {
	this.initialize(img.dev2_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,304);// helper functions:

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
	this.shape.graphics.f("#565656").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-141.3,-13.5,282.8,27.1), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AhkEPQgUgDgQgEIAAgcQANAFAWADQASADAZAAQBYAAA2hCQA0hCAEiIIgDAAQgJAUgVATQgUATgdAMQgeANgoAAQhKAAgogsQgogqAAhKQAAhPAqgvQArgwBMAAQA9AAAmAgQAmAhASAzQASA2AAA9QAACeg9BOQg8BOhpAAQgTAAgXgCgAhnjPQgiAnAABGQAAA+AfAkQAhAkBAAAQAtAAAggSQAfgRASgaQASgaAAgZQAAgUgGgfQgHgcgQgcQgPgbgcgSQgbgSgpAAQg/AAgjAng");
	this.shape.setTransform(44.1,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AhkEPQgUgDgQgEIAAgcQANAFAWADQATADAYAAQBZAAA1hCQA0hCAEiIIgDAAQgJAUgVATQgUATgdAMQgeANgoAAQhKAAgogsQgogqAAhKQAAhPAqgvQArgwBMAAQA9AAAmAgQAmAhASAzQASA2AAA9QAACeg9BOQg8BOhpAAQgTAAgXgCgAhmjPQgkAmABBHQAAA+AfAkQAhAkBAAAQAtAAAggSQAfgRASgaQASgaAAgZQAAgXgGgcQgHgcgQgcQgQgcgbgRQgbgSgpAAQg/AAgiAng");
	this.shape_1.setTransform(3.1,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("Ah7DMQgshFAAiIQAAhOAQg+QARg9AlgjQAlgjA9AAQA/AAAkAiQAlAjAPA9QAQA8AABRQAACGgpBGQgpBGhWAAQhQAAgrhFgAhRjXQgfAfgMA3QgNA4AABIQAAB9AiA9QAiA+BFAAQBJAAAhg+QAhg9AAh9QAAhLgMg3QgNg3gegeQgdgeg2AAQg0AAgeAfg");
	this.shape_2.setTransform(-37.4,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414042").s().p("AijENIAAgZIChioQAhgjAcgjQAYgdAOgiQANghAAgnQAAg0gfgfQgegeg2AAQhFAAg7AxIgQgVQAggcAngNQAngNAiAAQBBAAAoAmQAoAmAAA+QAAAtgPAiQgNAigcAiQgcAjgkAkIiRCZIAAABIEhAAIAAAbg");
	this.shape_3.setTransform(-78.9,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414042").s().p("Ag0CMQgNgBgGgCIAAgPIASAEQAKACANAAQAuAAAcgiQAcgjAChFIgCAAQgDAJgMAKQgLAKgPAHQgQAGgVAAQgmAAgWgXQgVgVAAgmQAAgpAWgZQAXgZAoAAQAgAAAUARQATAQAKAcQAJAbAAAgQAABSgfAoQggApg3AAgAg2hrQgSAUAAAkQABAhAQASQARATAiAAQAWAAARgKQARgIAKgOQAJgNAAgNQAAgNgEgOQgCgOgJgPQgIgNgPgKQgOgJgVAAQghAAgTAUg");
	this.shape_4.setTransform(-22.8,-32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("Ag0CMQgNgBgGgCIAAgPIASAEQAKACAMAAQAvAAAbgiQAdgjABhFIgBAAQgFAKgLAJQgKAKgQAHQgPAGgVAAQgmAAgWgXQgVgVAAgmQAAgqAWgYQAWgZAoAAQAhAAATARQAVARAIAbQAKAaAAAhQAABSggAoQggApg3AAgAg1hrQgTAUAAAkQAAAhARASQAQATAjAAQAWAAASgKQARgJAIgNQAJgNAAgNQAAgMgDgPQgEgQgHgNQgIgNgPgKQgOgJgWAAQggAAgSAUg");
	this.shape_5.setTransform(-44.3,-32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414042").s().p("AhABqQgXgkAAhGQAAgoAIggQAKgiASgRQAVgRAfgBQAgABAUARQATATAIAfQAIAeAAArQAABGgVAjQgWAkgtAAQgqABgWgkgAgqhvQgRAQgGAcQgHAfAAAkQAABBASAfQASAgAkAAQAnAAARggQARgfAAhBQAAgngGgdQgHgcgQgQQgQgPgbAAQgbAAgQAQg");
	this.shape_6.setTransform(-65.6,-32.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414042").s().p("Ag0CJQgUgEgPgHIAAgPQAOAHAWAFQAVAFAVAAQAoAAAVgSQAUgRAAgfQAAgWgKgNQgMgNgTgGQgUgGgYAAIgfAAIAAgNIAfAAQATAAATgHQASgHAKgNQALgOAAgVQAAgbgSgOQgRgNgdAAQgVAAgTAHQgSAHgTAMIgIgLQATgNAUgHQAVgIAZAAQAkAAAWARQAVASABAgQgBAbgQASQgRASgaAEIAAABQAiAEARAQQARASAAAdQAAAjgZAWQgZAWgvAAQgVAAgWgEg");
	this.shape_7.setTransform(-87.6,-32.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#414042").s().p("AAmBFIAAg+IhLAAIAAA+IgXAAIAAiJIAXAAIAAA5IBLAAIAAg5IAXAAIAACJg");
	this.shape_8.setTransform(95.9,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#414042").s().p("Ag9BmIAAjIIATAAIADATIABAAQAIgMAKgFQANgFAMAAQAaAAAPATQAQASAAAjQAAAggQAUQgOATgcAAQgbAAgPgUIgBAAIAAAFIABBLgAgchGQgKALAAAZIAAAFQAAAcAKAMQAIAMAVAAQARAAAKgOQAKgNAAgZQAAgagKgNQgKgOgSAAQgTAAgJAMg");
	this.shape_9.setTransform(80.5,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#414042").s().p("AgqBFIAAiJIBVAAIAAATIg+AAIAAB2g");
	this.shape_10.setTransform(67.8,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#414042").s().p("AAgAzIAAgwIg/AAIAAAwIgLAAIAAhlIALAAIAAAsIA/AAIAAgsIALAAIAABlg");
	this.shape_11.setTransform(16.1,-40.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#414042").s().p("AgrBLIAAiTIAJAAIABATIAAAAQAEgIAJgHQAIgGAOAAQAUAAALANQAMANAAAbQgBAZgMANQgKAOgVAAQgNAAgJgGQgHgFgFgIIgBAAIABA/gAgYg2QgJALAAAUIAAACQAAAWAJAKQAIALAQAAQAPAAAJgMQAJgLAAgVQAAgUgIgLQgJgLgPAAQgRAAgIAKg");
	this.shape_12.setTransform(5,-38.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414042").s().p("AgeAzIAAhlIA9AAIAAAKIgyAAIAABbg");
	this.shape_13.setTransform(-4.3,-40.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414042").s().p("ApcBiIS3jPIACAMIy2DPg");
	this.shape_14.setTransform(-41.5,-34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-102,-47,204,94.1), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AhkEPQgUgDgQgEIAAgcQANAFAWADQASADAZAAQBYAAA2hCQA0hCAEiIIgDAAQgJAUgVATQgUATgdAMQgeANgoAAQhKAAgogsQgogqAAhKQAAhPAqgvQArgwBMAAQA9AAAmAgQAmAhASAzQASA2AAA9QAACeg9BOQg8BOhpAAQgTAAgXgCgAhnjPQgiAnAABGQAAA+AfAkQAhAkBAAAQAtAAAggSQAfgRASgaQASgaAAgZQAAgUgGgfQgHgcgQgcQgPgbgcgSQgbgSgpAAQg/AAgjAng");
	this.shape.setTransform(44.1,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AhkEPQgUgDgQgEIAAgcQANAFAWADQATADAYAAQBZAAA1hCQA0hCAEiIIgDAAQgJAUgVATQgUATgdAMQgeANgoAAQhKAAgogsQgogqAAhKQAAhPAqgvQArgwBMAAQA9AAAmAgQAmAhASAzQASA2AAA9QAACeg9BOQg8BOhpAAQgTAAgXgCgAhmjPQgkAmABBHQAAA+AfAkQAhAkBAAAQAtAAAggSQAfgRASgaQASgaAAgZQAAgXgGgcQgHgcgQgcQgQgcgbgRQgbgSgpAAQg/AAgiAng");
	this.shape_1.setTransform(3.1,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AhkEPQgUgDgQgEIAAgcQANAFAWADQATADAYAAQBZAAA1hCQA0hBAEiJIgDAAQgJAUgVATQgUATgdAMQgeANgoAAQhKAAgogsQgogqAAhKQAAhOAqgwQArgwBMAAQA9AAAmAgQAmAgASA0QASA2AAA9QAACeg9BOQg8BOhpAAQgSAAgYgCgAhmjPQgkAmABBHQAAA+AfAkQAhAkBAAAQAtAAAggSQAfgRASgaQASgaAAgZQAAgXgGgcQgHgcgQgcQgQgcgbgRQgbgSgpAAQg/AAgiAng");
	this.shape_2.setTransform(-37.8,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414042").s().p("AijENIAAgZIChioQAhgjAcgjQAYgdAOgiQANghAAgnQAAg0gfgfQgegeg2AAQhFAAg7AxIgQgVQAggcAngNQAngNAiAAQBBAAAoAmQAoAmAAA+QAAAtgPAiQgNAigcAiQgcAjgkAkIiRCZIAAABIEhAAIAAAbg");
	this.shape_3.setTransform(-78.9,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414042").s().p("Ag0CMQgNgBgGgCIAAgPIASAEQAKACANAAQAuAAAcgiQAcgjAChFIgCAAQgDAJgMAKQgLAKgPAHQgQAGgVAAQgmAAgWgXQgVgVAAgmQAAgpAWgZQAXgZAoAAQAgAAAUARQATAQAKAcQAJAbAAAgQAABSgfAoQggApg3AAgAg2hrQgSAUAAAkQABAhAQASQARATAiAAQAWAAARgKQARgIAKgOQAJgNAAgNQAAgNgEgOQgCgOgJgPQgIgNgPgKQgOgJgVAAQghAAgTAUg");
	this.shape_4.setTransform(-22.8,-32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("Ag0CMQgNgBgGgCIAAgPIASAEQAKACAMAAQAvAAAbgiQAdgjABhFIgBAAQgFAKgLAJQgKAKgQAHQgPAGgVAAQgmAAgWgXQgVgVAAgmQAAgqAWgYQAWgZAoAAQAhAAATARQAVARAIAbQAKAaAAAhQAABSggAoQggApg3AAgAg1hrQgTAUAAAkQAAAhARASQAQATAjAAQAWAAASgKQARgJAIgNQAJgNAAgNQAAgMgDgPQgEgQgHgNQgIgNgPgKQgOgJgWAAQggAAgSAUg");
	this.shape_5.setTransform(-44.3,-32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414042").s().p("AAoCKIAAhIIiQAAIAAgMICPi/IAPAAIAAC9IAzAAIAAAOIgzAAIAABIgAhVA0IB9AAIAAisIAAAAg");
	this.shape_6.setTransform(-65.4,-32.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414042").s().p("Ag0CJQgUgEgPgHIAAgPQAOAHAWAFQAVAFAVAAQAoAAAVgSQAUgRAAgfQAAgWgKgNQgMgNgTgGQgUgGgYAAIgfAAIAAgNIAfAAQATAAATgHQASgHAKgNQALgOAAgVQAAgbgSgOQgRgNgdAAQgVAAgTAHQgSAHgTAMIgIgLQATgNAUgHQAVgIAZAAQAkAAAWARQAVASABAgQgBAbgQASQgRASgaAEIAAABQAiAEARAQQARASAAAdQAAAjgZAWQgZAWgvAAQgVAAgWgEg");
	this.shape_7.setTransform(-87.6,-32.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#414042").s().p("AAmBGIAAg+IhLAAIAAA+IgXAAIAAiLIAXAAIAAA7IBLAAIAAg7IAXAAIAACLg");
	this.shape_8.setTransform(95.9,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#414042").s().p("Ag9BmIAAjIIATAAIADATIABAAQAIgMAKgFQANgFAMAAQAaAAAPATQAQASAAAjQAAAggQAUQgOATgcAAQgbAAgPgUIgBAAIAAAFIABBLgAgchGQgKALAAAZIAAAFQAAAcAKAMQAIAMAVAAQARAAAKgOQAKgNAAgZQAAgagKgNQgKgOgSAAQgTAAgJAMg");
	this.shape_9.setTransform(80.5,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#414042").s().p("AgqBGIAAiLIBVAAIAAATIg+AAIAAB4g");
	this.shape_10.setTransform(67.8,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#414042").s().p("AAgAzIAAgwIg/AAIAAAwIgLAAIAAhlIALAAIAAAsIA/AAIAAgsIALAAIAABlg");
	this.shape_11.setTransform(16.1,-40.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#414042").s().p("AgrBLIAAiTIAJAAIABATIAAAAQAEgIAJgHQAIgGAOAAQAUAAALANQAMANAAAbQgBAZgMANQgKAOgVAAQgNAAgJgGQgHgFgFgIIgBAAIABA/gAgYg2QgJALAAAUIAAACQAAAWAJAKQAIALAQAAQAPAAAJgMQAJgLAAgVQAAgUgIgLQgJgLgPAAQgRAAgIAKg");
	this.shape_12.setTransform(5,-38.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414042").s().p("AgeAzIAAhlIA9AAIAAAKIgyAAIAABbg");
	this.shape_13.setTransform(-4.3,-40.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414042").s().p("ApcBjIS3jQIACAMIy2DPg");
	this.shape_14.setTransform(-41.5,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-102,-47,204,94), null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("Ag5BwIAAjcIAPAAIAAAqIACAAQAHgTARgNQAQgNAaAAIAQABIAPADIgCAPQgNgEgRAAQggAAgRAXQgRAXAAAoIAAB6g");
	this.shape.setTransform(38.1,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AgsBkQgWgOgLgZQgLgaAAghQAAgeALgbQALgbAVgPQAVgQAfgBQAcAAASAOQASANAJAYQAJAXAAAdIAAAMIigAAQgBAvAWAaQAWAaAoAAQAVAAAOgDQAOgDAUgJIAAAQQgQAGgRAEQgQAEgVAAQghAAgWgPgABJgNQAAgmgRgYQgPgYgiAAQggAAgVAWQgVAWgEAqICQAAIAAAAg");
	this.shape_1.setTransform(18,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AgcCfIAAjNIgpAAIAAgLIApgDIAAgcQAAgiAPgSQAOgTAhABQAMAAAHACIARADIgDAOIgQgDIgRgCQgZAAgKANQgKANAAAeIAAAcIAxAAIAAAOIgxAAIAADNg");
	this.shape_2.setTransform(3.1,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414042").s().p("AgbCfIAAjNIgqAAIAAgLIAqgDIAAgcQAAgiAPgSQAOgTAgABQAMAAAIACIAQADIgDAOIgQgDIgRgCQgZAAgJANQgLANAAAeIAAAcIAyAAIAAAOIgyAAIAADNg");
	this.shape_3.setTransform(-8.1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414042").s().p("AhJCFQgdgTgPgjQgOgjAAgsQAAgtAPgiQAQgjAdgTQAfgTAqAAQA+AAAiApQAiAoAABHQAAAtgPAiQgOAjgdATQgeAUgsAAQgrAAgegUgAg/h3QgZARgOAfQgMAfAAAoQAAAnAMAgQAMAfAaATQAaARAmAAQApAAAYgRQAZgSANgfQAMgfgBgpQABhAgdglQgdgkg3AAQgmAAgbASg");
	this.shape_4.setTransform(-30.6,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-43.8,-16.1,87.7,32.3), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgHCeIAAk7IAPAAIAAE7g");
	this.shape.setTransform(58.5,-4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("Ag/BjQgSgRAAgbQABghAbgRQAcgQAxgCIApgDIAAgRQAAgjgNgPQgOgQgcAAQgOAAgRAEQgSAFgPAIIgFgOQAPgHASgGQATgEARAAQAlAAAQASQATATgBAoIAACSIgMAAIgEgpIAAAAQgKATgTANQgRANggAAQghAAgRgPgAAZAAQgoAAgZAOQgYANAAAcQAAAVAOAMQAOAMAZAAQAmAAASgWQAUgWAAglIAAgVg");
	this.shape_1.setTransform(43.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AgHCXIAAjcIAPAAIAADcgAgJh8QgDgEAAgHQAAgHADgEQACgEAHAAQAIAAACAEQADAEAAAHQAAAHgDAEQgCAEgIAAQgGAAgDgEg");
	this.shape_2.setTransform(29.4,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414042").s().p("AgiBkQgXgOgLgZQgLgZAAgjQAAghANgbQANgaAYgOQAXgPAhAAQAPABAOACQAOADAKAFIgEAOQgLgEgNgEQgMgBgNAAQgcAAgUAMQgUANgLAWQgLAXAAAdQAAAdAJAWQAJAXATAMQATANAcAAQAPAAAPgDQAKgCARgGIAAAOQgIAEgRAEQgOAEgSAAQghAAgWgPg");
	this.shape_3.setTransform(16.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414042").s().p("AgsBkQgWgOgLgZQgLgaAAghQAAgeALgbQALgbAVgPQAVgQAfgBQAcAAASAOQASANAJAYQAJAXAAAdIAAAMIigAAQgBAvAWAaQAWAaAoAAQAVAAAOgDQAOgDAUgJIAAAQQgQAGgRAEQgQAEgVAAQghAAgWgPgABJgNQAAgmgRgYQgPgYgiAAQggAAgVAWQgVAWgEAqICQAAIAAAAg");
	this.shape_4.setTransform(-4.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("AhbChIAAk9IANAAIACAwIABAAQAEgNALgMQALgNAPgHQAQgHAVAAQArAAAXAcQAXAdAAA4QAAA3gYAeQgZAegrAAQgfAAgSgOQgSgOgIgUIgBAAIABCNgAg4h4QgTAaAAAvIAAACQAAAyATAYQAUAYAkAAQAkAAAUgaQAUgbAAgvQAAhjhKAAQgmAAgUAag");
	this.shape_5.setTransform(-26.7,4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414042").s().p("Ag4CVQgTgDgPgGIAAgRQARAHAUAEQAVAEAYAAQAYAAASgHQASgHAMgOQALgOgBgXQAAgTgJgNQgKgMgRgIQgRgJgagIQgcgJgOgIQgTgJgLgPQgJgQgBgYQAAgZANgQQANgRAVgIQAUgJAbAAQAqAAAiAQIgFAOQgQgHgVgFQgRgDgSAAQgUAAgSAGQgRAHgLANQgKANAAAVQAAAVAKAMQAIAMASAJQARAIAVAHQAdAJARAIQASAJANAQQAKAPAAAYQAAAagNASQgNASgYAJQgXAJgbAAQgeAAgRgEg");
	this.shape_6.setTransform(-50.1,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-59.2,-20.7,118.5,41.4), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AhdCdIAAgPIAMAEIAMABQAQAAALgLQAKgLAKgZIAQgpIhVjbIARAAIBDCwIAIAYIABAAIBKjIIARAAIhkEIQgLAdgOAOQgNAOgXAAQgMAAgNgEg");
	this.shape.setTransform(62.5,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("Ag/BjQgSgRAAgbQABghAbgRQAcgQAxgCIApgDIAAgRQAAgjgNgPQgOgQgcAAQgOAAgRAEQgRAFgQAIIgFgOQAPgHASgGQATgEARAAQAkAAASASQARATAAAoIAACSIgMAAIgEgpIAAAAQgKAUgTAMQgRANggAAQghAAgRgPgAAZAAQgnAAgaAOQgYANAAAcQAAAVAOAMQANAMAaAAQAmAAASgWQAUgWAAglIAAgVg");
	this.shape_1.setTransform(42.5,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AhECEQgXgcAAg3QAAg5AZgdQAYgfAtAAQAeAAARAOQASANAIAVIACAAIgCgZIAAhyIAQAAIAAE7IgNAAIgCgsIgBAAQgIAUgSAOQgRAOghAAQgtAAgXgcgAg2gbQgVAbAAAyQAABgBNAAQAoAAARgaQARgZAAgvIAAgDQAAgvgRgaQgRgZgmAAQglAAgVAag");
	this.shape_2.setTransform(20.3,-4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414042").s().p("ABFCeIAAiQQAAghgPgQQgRgQgdAAQgjAAgVAVQgUAWAAAqIAAB8IgRAAIAAk7IARAAIgBCLIABAAQAGgUAVgNQASgOAgAAQAlAAAUATQATATAAApIAACQg");
	this.shape_3.setTransform(-2.5,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414042").s().p("AgOB7QgMgQAAgfIAAiSIgiAAIAAgLIAigEIAEg1IANAAIAAA1IBFAAIAAAPIhFAAIAACQQAAAZAIANQAIANAVAAIASgCIAPgDIAAAOIgPAEQgIABgLAAQgcAAgNgQg");
	this.shape_4.setTransform(-21.1,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("Ag5BwIAAjcIAOAAIACAqIABAAQAHgUARgMQAQgNAZAAIASABIAPADIgDAPQgNgEgRAAQggAAgRAXQgRAYAAAnIAAB6g");
	this.shape_5.setTransform(-33.2,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414042").s().p("AgHCXIAAjcIAPAAIAADcgAgJh8QgDgEAAgHQAAgHADgEQACgEAHAAQAIAAACAEQADADAAAIQAAAIgDADQgDAEgHAAQgGAAgDgEg");
	this.shape_6.setTransform(-46.4,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414042").s().p("AhgCVIAAkpIBRAAQA2AAAZASQAZARAAAlQgBAagPATQgOATgdAFIAAAAQAkAGAPARQAQATAAAdQAAAegOATQgNASgZAJQgYAJgdAAgAhQCGIBJAAQApAAAXgRQAWgRABgkQAAgjgZgPQgXgOgrAAIhFAAgAhQgOIBGAAQApAAAVgPQATgQABgdQgBgggUgNQgVgOguAAIhAAAg");
	this.shape_7.setTransform(-62.1,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-71.7,-20.8,143.6,41.8), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3A39").s().p("AgmBTQgggBgOgJQgMgHgCgNIAAgDQABgMANAAQAKAAADAKIABABQAEAGAHACQAGACANAAIA7AAQAiAAAJgEQAJgFAAgPIAAgBQAAgNgFgEQgIgGgWAAIhRAAQgcAAgLgKQgMgJAAgYIAAgJQAAgVAPgIQARgMAuAAIArAAQAjAAARAKQAMAGACAPIAAACQgBAMgMgBQgKABgEgJIgBgCQgEgHgKgCQgHgBgUgBIgtAAQgcAAgIAFQgJADAAANIAAAGQAAALAFAFQAHAEATAAIBFAAQAhAAAOAIQAUAJgBAfIAAAAQABAfgaAKQgOAGgiAAg");
	this.shape.setTransform(37.8,-2.3,1.293,1.294);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3A39").s().p("AgNBFIAAiJQAAgOANAAQAOAAAAAOIAACJQAAAOgOAAQgNAAAAgOg");
	this.shape_1.setTransform(-48.7,-2.3,1.293,1.294);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A39").s().p("ABjBgIgfgeIhkAAQg0AAgUgUQgRgQAAgeIAAhWQAAgGAEgEQAEgDAHAAIBvAAQA0AAAUATQAQARAAAeIAABVIAaAZQAHAJgJAKQgFAEgFAAQgFAAgDgEgAhcAAQAAAWALAJIACACQAKAJAWAAIBwAAIAAhMQgBgVgKgKIgCgBQgKgIgXgBIhvAAg");
	this.shape_2.setTransform(-25.2,0,1.293,1.294);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3A39").s().p("AgSBTQgpAAgTgLQgcgPAAgnIAAgiQAAgnAcgQQATgLApAAIAlAAQAoAAAUALQAcAQAAAnIAAAiQAAAngcAPQgTALgpAAgAhAgyQgOAKAAAZIAAAfQAAAZAOALQAMAIAZAAIA2AAQAaAAAMgIQAOgLAAgZIAAgfQAAgZgOgKQgMgIgaAAIg2AAQgZAAgMAIg");
	this.shape_3.setTransform(6,-2.3,1.293,1.294);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-50.4,-13,101,26), null);


(lib.dev2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.dev2_b();
	this.instance.parent = this;
	this.instance.setTransform(-89,-141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev2, new cjs.Rectangle(-129,-171,258,342), null);


(lib.dev1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.dev1_b();
	this.instance.parent = this;
	this.instance.setTransform(-112,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev1, new cjs.Rectangle(-150,-178,300,356), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgHA8IAAhpIgkAAIAAgOIBYAAIAAAOIglAAIAABpg");
	this.shape.setTransform(31.3,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AAiBNIABhiIgBAAIhABiIgRAAIAAh2IAOAAIgBBiIABAAIBAhiIARAAIAAB2gAgUg5QgHgFgBgOIAOAAQABAJADADQAEADAIAAQAJAAADgEQAFgDAAgIIAOAAQgBANgIAGQgHAGgPABQgPAAgHgHg");
	this.shape_1.setTransform(19.9,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AAmA8IgPglIguAAIgOAlIgPAAIAuh3IANAAIAuB3gAATAJIgTg0IgSA0IAlAAg");
	this.shape_2.setTransform(7.8,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414042").s().p("AgdAtQgPgQAAgdQAAgRAHgOQAHgOANgIQANgHAQAAQATAAAOAHIgGANQgNgHgOAAQgTAAgKANQgLAMAAAWQAAAXALANQAKAMATAAQANAAAPgFIAAANIgOAEIgQABQgaAAgNgQg");
	this.shape_3.setTransform(-2.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414042").s().p("AAlA8IgOglIguAAIgOAlIgPAAIAuh3IANAAIAuB3gAATAJIgTg0IgSA0IAlAAg");
	this.shape_4.setTransform(-18.7,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("AAfA8IAAg4Ig8AAIAAA4IgQAAIAAh3IAQAAIAAAzIA8AAIAAgzIAOAAIAAB3g");
	this.shape_5.setTransform(-30.5,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#414042").ss(2,1,1).p("AqYjgIUxAAIAAHBI0xAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AqYDhIAAnBIUxAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-67.5,-23.5,135,47), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1D3D4").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib._3_light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._3_light();
	this.instance.parent = this;
	this.instance.setTransform(-150,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._3_light_1, new cjs.Rectangle(-150,-250,300,500), null);


(lib._3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib._3_light_1();
	this.instance.parent = this;
	this.instance.setTransform(6.5,-0.5);
	this.instance.alpha = 0.191;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.121},6).to({alpha:0.172},8).to({alpha:0.102},5).to({alpha:0.191},6).wait(1));

	// Слой_1
	this.instance_1 = new lib._3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-87,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-250.5,300,500);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195));

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvgEgWqguGQgIAJgBAMMAAABWPQABAMAIAJQAJAJANAAMAsqAAAQAMAAAKgJQAIgJAAgMMAAAhWPQAAgMgIgJQgJgIgNAAMgsqAAAQgNAAgJAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(195));

	// dev2
	this.instance_1 = new lib.dev2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(279,166);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).to({x:21,y:-64},10,cjs.Ease.get(1)).wait(40).to({x:279,y:166},10,cjs.Ease.get(-1)).wait(1));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-288.4,197.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).to({x:-48.4},10,cjs.Ease.get(1)).wait(10).to({regX:-0.1,scaleX:1.1,scaleY:1.1,x:-48.5},5).wait(10).to({regX:0,scaleX:1,scaleY:1,x:-48.4},5).wait(10).to({x:-288.4},10,cjs.Ease.get(-1)).wait(1));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-258,93);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(134).to({_off:false},0).to({x:-18},10,cjs.Ease.get(1)).wait(40).to({x:-250},10,cjs.Ease.get(-1)).wait(1));

	// dev1
	this.instance_4 = new lib.dev1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,182);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({x:0,y:-68},10,cjs.Ease.get(1)).wait(40).to({x:300,y:182},10,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// btn
	this.instance_5 = new lib.btn();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-288.4,197.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({x:-48.4},10,cjs.Ease.get(1)).wait(10).to({regX:-0.1,scaleX:1.1,scaleY:1.1,x:-48.5},5).wait(10).to({regX:0,scaleX:1,scaleY:1,x:-48.4},5).wait(10).to({x:-288.4},10,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// t2
	this.instance_6 = new lib.t2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-259,93.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({x:-19},10,cjs.Ease.get(1)).wait(40).to({x:-259},10,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-230.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},10).wait(54).to({alpha:0},10).to({_off:true},1).wait(120));

	// 3
	this.instance_8 = new lib._3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-5,-42,0.02,0.02,0,0,0,-2.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0,regY:0,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(54).to({alpha:0},10).to({_off:true},1).wait(120));

	// t1_3
	this.instance_9 = new lib.t1_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(66.5,172.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({alpha:1},10).wait(24).to({alpha:0},10).to({_off:true},1).wait(120));

	// t1_2
	this.instance_10 = new lib.t1_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-52.1,177.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).to({alpha:1},10).wait(34).to({alpha:0},10).to({_off:true},1).wait(120));

	// t1_1
	this.instance_11 = new lib.t1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0.8,127.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({alpha:1},10).wait(44).to({alpha:0},10).to({_off:true},1).wait(120));

	// bg
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(195));

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
	id: '9D71BDC27129430FBC1C04C522661F31',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/3.png", id:"_3"},
		{src:"images/3_light.png", id:"_3_light"},
		{src:"images/dev1_b.png", id:"dev1_b"},
		{src:"images/dev2_b.png", id:"dev2_b"}
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
an.compositions['9D71BDC27129430FBC1C04C522661F31'] = {
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