(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,626,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,720);


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,600);


(lib.bgImg4 = function() {
	this.initialize(img.bgImg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,600);


(lib.bgImg5 = function() {
	this.initialize(img.bgImg5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,600);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-132.7,-59,265.4,118), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAyQgVgVAAgdQAAgXARgVQAVgYAgAAQASAAARAKIAAAXQgSgOgTAAQgTgBgOAPQgOAPAAAUQAAAWAOAOQAPAOASABQAMgBAHgDIAIgFIAKgHIAAAYQgRALgUgBQgcAAgTgTg");
	this.shape.setTransform(62.2,34.1,4.17,4.17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBDIglg3IgDAAIAAA3IgVAAIAAiFIAYAAQAZAAAMAKQAOALAAASQgBAOgHALQgJAJgNADIApA5gAgWgEIAGAAQAcAAAAgXQAAgUgbAAIgHAAg");
	this.shape_1.setTransform(17.8,34.1,4.17,4.17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAxQgFgHgCgHIAHgCIAGALQAIAKAOAAQALAAAJgIQAIgIAAgMQAAgLgMgHIgTgKQgQgHgFgIQgEgGAAgHQAAgMAHgIQAJgKANAAQAUAAAJARIgGAFQgIgPgPAAQgJAAgGAHQgGAGAAAJQAAAIAGAGQADADALAGQATAIAEAEQANAIAAAOQAAAPgLALQgKAJgPAAQgQAAgMgMg");
	this.shape_2.setTransform(69.2,-37.6,4.17,4.17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAsQgGgJAAgVIAAhJIAHAAIAABJQAAARAFAIQAJAOASAAQATAAAIgOQAFgIAAgRIAAhJIAIAAIAABJQAAAVgGAJQgLAQgXAAQgWAAgLgQg");
	this.shape_3.setTransform(26.6,-37.3,4.17,4.17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcA7Igcg1IgbA1IgJAAIAhg7Iggg6IAJAAIAaAyIAbgyIAIAAIgeA6IAgA7g");
	this.shape_4.setTransform(-14.6,-37.7,4.17,4.17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbA7IAAh1IA3AAIAAAHIgwAAIAAArIAvAAIAAAHIgvAAIAAA1IAwAAIAAAHg");
	this.shape_5.setTransform(-47.6,-37.7,4.17,4.17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA7IAAh1IAJAAIAABuIAgAAIAAAHg");
	this.shape_6.setTransform(-75.7,-37.7,4.17,4.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(68,68,68,0.647)").s().p("A3bNDIAA6FMAu3AAAIAAaFg");

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-150,-83.5,300,167), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfAuIgMgeIglAAIgMAeIgGAAIAkhbIAlBbgAARALIgRgpIgQApIAhAAg");
	this.shape.setTransform(120.7,36.2,4.17,4.17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAsIAAhSIgXAAIAAgGIAzAAIAAAGIgXAAIAABSg");
	this.shape_1.setTransform(96.2,36.7,4.17,4.17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAsIAAhYIAFAAIAABYg");
	this.shape_2.setTransform(78.4,36.7,4.17,4.17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAsIAAgFIAEABQAFAAAEgEQAFgFAAgTIAAg4IAxAAIAABYIgGAAIAAhSIglAAIAAAyQAAAVgGAHQgEAFgJAAg");
	this.shape_3.setTransform(53,36.8,4.17,4.17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgTQAAgSANgOQAOgNASAAQATAAANANQAOAOAAASQAAATgOANQgNAOgTAAQgSAAgOgOgAgbgcQgMAMAAAQQAAARAMAMQALALAQAAQARAAALgLQALgMAAgRQAAgQgLgMQgLgLgRAAQgQAAgLALg");
	this.shape_4.setTransform(2.8,36.8,4.17,4.17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAsIAAhYIAmAAIAAAGIggAAIAABSg");
	this.shape_5.setTransform(-25.5,36.7,4.17,4.17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAgQgNgNAAgTQAAgSANgOQAOgNASAAQAUAAANANQANAOAAASQAAATgNANQgNAOgUAAQgSAAgOgOgAgbgcQgMAMAAAQQAAARAMAMQALALAQAAQARAAAMgLQALgMAAgRQAAgQgLgMQgMgLgRAAQgQAAgLALg");
	this.shape_6.setTransform(-61,36.8,4.17,4.17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAsIAAhYIATAAQALAAAGAHQAHAGAAAKQAAAMgLAIQAJABAFAFQAFAGAAAIQAAAMgIAHQgHAGgMAAgAgTAnIAPAAQAMAAAGgFQAGgFgBgJQAAgNgJgDQgFgDgLAAIgNAAgAgTgDIAOAAQAHAAAEgEQAGgFAAgIQAAgJgGgGQgFgDgJAAIgLAAg");
	this.shape_7.setTransform(-96.8,36.7,4.17,4.17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAsIAAhSIgXAAIAAgGIAzAAIAAAGIgXAAIAABSg");
	this.shape_8.setTransform(-124.3,36.7,4.17,4.17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAsIAAhXIAUAAQAKAAAHAGQAGAGAAAKQAAANgLAGQAJACAFAFQAFAGAAAJQAAALgIAHQgHAGgMAAgAgTAnIAPAAQAMAAAGgFQAGgFAAgJQAAgMgKgEQgFgDgKAAIgOAAgAgTgDIAOAAQAHAAAEgEQAGgFAAgIQAAgJgGgFQgEgEgKAAIgLAAg");
	this.shape_9.setTransform(123.1,-34.5,4.17,4.17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghgiIAFAAIAABKIA+hLIAABYIgFAAIAAhIIg+BLgAgSg0IAFgDQAEAJAJAAQALAAADgJIAEADQgEALgOAAQgMAAgGgLg");
	this.shape_10.setTransform(87.9,-38.3,4.17,4.17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfAtIgMgcIglAAIgMAcIgGAAIAkhaIAlBagAARALIgRgoIgPAoIAgAAg");
	this.shape_11.setTransform(52.2,-35,4.17,4.17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAsIAAhXIASAAQAKAAAHAGQAIAGAAALQAAALgHAGQgHAFgLAAIgMAAIAAAqgAgPgCIAMAAQAIAAAFgFQAFgEAAgJQAAgIgFgFQgFgFgJAAIgLAAg");
	this.shape_12.setTransform(27.5,-34.5,4.17,4.17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhA1IAAgSIhBAAIAAASIgGAAIAAgXQAKAAAEgMQAEgIAAgOIAAgwIAxAAIAABSIAKAAIAAAXgAgPgEQAAAQgDAIQgCAFgFAFIAwAAIAAhNIgmAAg");
	this.shape_13.setTransform(-3.3,-30.7,4.17,4.17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(68,68,68,0.647)").s().p("A3bNDIAA6FMAu3AAAIAAaFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-150,-83.5,300,167), null);


(lib.logoZnakMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmxEoQiYh5AAivQABi2Cjh5QCmh7D/AAQB/AABHATQAhAIADASQABANgNAQQjrEig5BvQgVApANATQANASAwAAIHJAAQAbAAAPgoQAOglAAg3QAAhvg5hWQg/heh9gzIAagoQCMA4BUBpQBUBpAAB5QAABegqBLQgQAdgQANQgTAPgZAAIo9AAQhqAAgpg6Qgqg5AuhSQAqhGBRhyQBKhoA5hHQAYgfgDgKQgDgJgaAAQjLAAiRBzQiQBxAACYQAAClCHBoQCIBpDgAAQD3AACKh8IBjAAQhQBbiQAvQh5AniLAAQkOAAijiDg");
	this.shape.setTransform(0,0,0.933,0.906);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoZnakMc, new cjs.Rectangle(-54.6,-38.7,109.3,77.4), null);


(lib.logoW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BGQgegcAAgqQAAgqAdgbQAbgbAnAAQAogBAdAaIgPATQgYgTgfAAQgbAAgUAUQgUAUAAAgQAAAcAUAVQAVAWAbAAQAVAAAPgLQAPgJAFgSIg5AAIAAgYIBXAAQAAAlgaAaQgZAYgjAAQgkAAgdgbg");
	this.shape.setTransform(57.6,11.6,0.253,0.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BeIhiiHIgDgGIABAHIAACGIgaAAIAAi8IAWAAIBgCGIAEAGIgBgHIAAiFIAaAAIAAC8g");
	this.shape_1.setTransform(51.9,11.6,0.253,0.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBeIAAi8IAZAAIAAC8g");
	this.shape_2.setTransform(47.4,11.6,0.253,0.253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJBeIBmiiIgGAAIhQAAIAAgaICDAAIhjCgIgDADIAGAAIBdAAIAAAZg");
	this.shape_3.setTransform(43.4,11.6,0.253,0.253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1BeIgYg9Ig6AAIgYA9IgbAAIBIi8IAQAAIBJC8gAgUAJIAoAAIgTgzIgBgGg");
	this.shape_4.setTransform(38.4,11.6,0.253,0.253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDBeIAAiJIAAgHIgCADIg8BPIgJAAIg8hMIgCgFIAAAIIAACHIgaAAIAAi8IAWAAIBGBdIBGhdIAXAAIAAC8g");
	this.shape_5.setTransform(32.5,11.6,0.253,0.253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0BeIgWg9Ig8AAIgXA9IgbAAIBIi8IAQAAIBJC8gAgVAJIApAAIgUgzIAAgGg");
	this.shape_6.setTransform(26.6,11.6,0.253,0.253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBMAAIAAAXIhMAAIAAA4IBTAAIAAAYg");
	this.shape_7.setTransform(19.3,11.6,0.253,0.253);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BIQgcgdAAgrQgBgpAbgbQAagdAoABQAtgBAZAeIgTARQgUgVgfAAQgbAAgTAUQgUAUAAAfQAAAhAWAVQAUASAXAAQAiAAAWgaIASAQQgLAQgTAJQgUAKgYAAQgkAAgbgZg");
	this.shape_8.setTransform(14.1,11.6,0.253,0.253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA2BeIhmiNIABAHIAACGIgaAAIAAi8IAWAAIBkCMIAAgHIAAiFIAZAAIAAC8g");
	this.shape_9.setTransform(8.4,11.6,0.253,0.253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_10.setTransform(3,11.6,0.253,0.253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBeIAAi8IAZAAIAAC8g");
	this.shape_11.setTransform(-1,11.6,0.253,0.253);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBeIhMhYIAABYIgZAAIAAi8IA8AAQAZAAARARQAQAQAAAXQAAAWgRAQQgPAPgVAAIBFBPgAgpgEIAeAAQARAAAKgKQAJgJAAgQQAAgLgJgJQgKgKgQAAIgfAAg");
	this.shape_12.setTransform(-4.9,11.6,0.253,0.253);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_13.setTransform(-10.1,11.6,0.253,0.253);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag6BeIAAi8IA4AAQAcABARAQQAQAQAAAaQAAAXgRAQQgRAQgXAAIgiAAIAABKgAgggDIAcAAQAQAAAKgJQAKgJAAgQQAAgPgKgIQgLgJgRAAIgaAAg");
	this.shape_14.setTransform(-14.7,11.6,0.253,0.253);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyBeIgyhNIgyBNIgeAAIBBhiIg5haIAfAAIAlA4IAFAKIArhCIAdAAIg5BZIBBBjg");
	this.shape_15.setTransform(-19.9,11.6,0.253,0.253);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_16.setTransform(-24.7,11.6,0.253,0.253);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AG5DVQhCgBg6gsQg7gtAAg3IAAjuIj7CeIE1DhIjtAAIjGiSIjnCSIxjAAQh3AAg8g7Qg5g3AAhlIAAjSIChAAIAAD1QAABfBdAAIFRAAQAfhSBAgqIhrAAQAKhbBRg+QBTg+B6gBII5AAIDGCRIDliRIEBAAIAAD8QAABYBlgBIEKAAIAAlTICgAAIAAFTIIVAAQAWABAOgOQAMgNAAgSQgBgtgxAAIniAAQAAhaA3hEQBKhcCXAAIGLAAIAABUIl0AAQg1AAggAXQgdAWgKAnIGFAAQBFAAAoAoQAlAkAAA0QABA0glAkQgoAphFAAgAucCAIIhAAIC5h0IkBi6IAAAuIllAAQg3AAgjAdQgbAXgHAgIHCAAIAABRIlSAAQhdAAgLBbg");
	this.shape_17.setTransform(16.8,-3,0.253,0.253);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AmxEoQiYh5AAivQABi2Cjh5QCmh7D/AAQB/AABHATQAhAIADASQABANgNAQQjrEig5BvQgVApANATQANASAwAAIHJAAQAbAAAPgoQAOglAAg3QAAhvg5hWQg/heh9gzIAagoQCMA4BUBpQBUBpAAB5QAABegqBLQgQAdgQANQgTAPgZAAIo9AAQhqAAgpg6Qgqg5AuhSQAqhGBRhyQBKhoA5hHQAYgfgDgKQgDgJgaAAQjLAAiRBzQiQBxAACYQAAClCHBoQCIBpDgAAQD3AACKh8IBjAAQhQBbiQAvQh5AniLAAQkOAAijiDg");
	this.shape_18.setTransform(-45.2,-3.3,0.253,0.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoW, new cjs.Rectangle(-60,-14.1,120,28.2), null);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-41.5,0,41.5,0).s().p("AmePyIAA/jIM9AAIAAfjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-41.5,-101,83,202.1), null);


(lib.bgImg5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg5();
	this.instance.parent = this;
	this.instance.setTransform(-306,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg5_1, new cjs.Rectangle(-306,-300,612,600), null);


(lib.bgImg4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg4();
	this.instance.parent = this;
	this.instance.setTransform(-228,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg4_1, new cjs.Rectangle(-228,-300,456,600), null);


(lib.bgImg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg3();
	this.instance.parent = this;
	this.instance.setTransform(-228,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg3_1, new cjs.Rectangle(-228,-300,456,600), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-313,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-313,-300,626,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.logoZnak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logoZnakMc();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-57,-41,113,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoZnak, new cjs.Rectangle(-59.6,-43.7,122,90), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(55));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhCGAQj8gMiTicQiIiSBLisQAZg6Aug2QAfglAXgSQA+guA7gbIAvgSQA5gOBXgHQCsgOCVAjQCcAlBfCCQAiAvAUA0QARArAAAaQAABPgmBRQg7B/iFA3QilBFixAAIgwgCgAhVlJQh5AThDAoQhkA8gqBKQg5BlAlCLQASBABEA8QCJB4D9gVQCRgMBqg1QA1gaAXgXIASgMIA/gBIAMgPIgfgLQAAABpVAgIgqgLQgtgRgIgfQgQg+BJhmIB4ikIBah8QAAgXABABIAIgHIAHgIQguACg8AKgABhiYQgWAfguBGQgrBBgVAjQgRAcAOAMIAQAGQFvgEA2ABQAlAAAJgUQAFgKAHg+QAFgsgZg+QgTgtgZgkQgZgjhmhSIgZAHQAAgBgZgCQhYBogfAsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-7.6,y:-11}).wait(15).to({graphics:null,x:0,y:0}).wait(40));

	// Слой_4
	this.instance = new lib.grad();
	this.instance.parent = this;
	this.instance.setTransform(-138.3,-20,1.439,1.283,30);
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:108,y:19.6},14).to({_off:true},1).wait(40));

	// Слой_5
	this.instance_1 = new lib.logoZnak();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.3,-11.1);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:0.602},5).to({alpha:0},10).wait(26));

	// Слой_1
	this.instance_2 = new lib.bgImg2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-180,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-360,360,720);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.bg2.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(231));

	// logo
	this.instance = new lib.logoW();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.717,1.715);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).wait(1));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,223);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(259).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).wait(1));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(249).to({_off:false},0).to({alpha:1},10).wait(51));

	// logo
	this.instance_3 = new lib.logoW();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,259,1.4,1.399);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},260).wait(50));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-147);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(204).to({_off:false},0).to({alpha:1},10).to({_off:true},46).wait(50));

	// bgImg5
	this.instance_5 = new lib.bgImg5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-155,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(184).to({_off:false},0).to({x:-134.2,alpha:1},5).to({x:157},70).to({_off:true},1).wait(50));

	// bgImg4
	this.instance_6 = new lib.bgImg4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(149).to({_off:false},0).to({x:59.5,alpha:1},5).to({x:-77},35).to({_off:true},1).wait(120));

	// bgImg3
	this.instance_7 = new lib.bgImg3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(79,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(113).to({_off:false},0).to({x:56.2,alpha:1},6).to({x:-77},35).to({_off:true},1).wait(155));

	// bgImg2
	this.bg2 = new lib.bgImg2_1();
	this.bg2.name = "bg2";
	this.bg2.parent = this;
	this.bg2.setTransform(0,0,0.833,0.833);
	this.bg2.alpha = 0;
	this.bg2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(74).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,alpha:1},5).to({scaleX:1,scaleY:1},40).to({_off:true},1).wait(190));

	// t1
	this.instance_8 = new lib.t1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-147);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({alpha:1},10).to({_off:true},46).wait(230));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:0},10).to({_off:true},1).wait(299));

	// bgImg1
	this.instance_10 = new lib.bgImg1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-162,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:164},79).to({_off:true},1).wait(230));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-475,-300,626,600);


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
p.nominalBounds = new cjs.Rectangle(-175,299,626,602);
// library properties:
lib.properties = {
	id: 'DF9A1DBD69B8450689018C287D6DF797',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/bgImg4.jpg", id:"bgImg4"},
		{src:"images/bgImg5.jpg", id:"bgImg5"}
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
an.compositions['DF9A1DBD69B8450689018C287D6DF797'] = {
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