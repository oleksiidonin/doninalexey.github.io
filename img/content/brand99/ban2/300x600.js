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


(lib.bgImg4 = function() {
	this.initialize(img.bgImg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,158);


(lib.fari = function() {
	this.initialize(img.fari);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,52);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,40);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);// helper functions:

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


(lib.wheelMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wheel();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheelMc, new cjs.Rectangle(-20,-20,40,40), null);


(lib.urText1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghA5QgLgIAAgTQAAgaAcgFQgZgFAAgZQAAgSAKgHQAKgIAVAAQAWAAAKAIQAKAHAAASQAAANgGAHQgGAIgNACQAPACAHAIQAGAHAAAOQAAATgKAIQgLAIgYAAQgXAAgKgIgAgWAMQgHAGAAAMQAAANAHAFQAHAFAPAAQAQAAAIgFQAHgGAAgMQAAgMgHgGQgHgFgRgCQgQACgGAFgAgUgvQgHAFAAAMQAAALAHAFQAGAGAOABQAPgBAHgGQAGgFAAgLQAAgMgHgFQgGgFgPAAQgOAAgGAFg");
	this.shape.setTransform(146,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKA/IAAhvIgiAPIAAgNIAkgQIANAAIAAB9g");
	this.shape_1.setTransform(135,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAyQgLgQAAgiQAAghALgQQAKgPAYAAQAYAAALAPQALAQAAAhQAAAigLAQQgLAPgYAAQgYAAgKgPgAgXgnQgIAMAAAbQAAAcAIAMQAHANAQAAQARAAAHgNQAHgMAAgcQAAgbgHgMQgHgNgRAAQgQAAgHANg");
	this.shape_2.setTransform(125.4,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBAIAAgLIAxgwQAQgQAAgPQAAgNgHgGQgHgFgOAAQgQgBgRAGIAAgMQAQgGATAAQAVAAAKAIQAKAJAAATQAAAUgTARIgpAqIA9AAIAAAMg");
	this.shape_3.setTransform(114.8,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAAQAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_4.setTransform(108,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmA9IAAgMQAOAEANAAQAVAAALgMQAIgMABgcQgGAQgbAAQgWAAgJgJQgKgJAAgVQAAgWALgKQAKgKAXAAQAYAAAKAOQALAOAAAfQAAAkgNARQgNARgdAAQgOAAgOgEgAgWgtQgIAHAAAQQABAPAGAHQAHAGAPAAQAeAAAAgaQAAgggdAAQgPAAgHAHg");
	this.shape_5.setTransform(100.8,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAyQgLgQAAgiQAAghALgQQALgPAXAAQAZAAAKAPQALAQAAAhQAAAigLAQQgKAPgZAAQgXAAgLgPgAgXgnQgHAMAAAbQAAAcAHAMQAHANAQAAQARAAAHgNQAIgMAAgcQAAgbgIgMQgHgNgRAAQgQAAgHANg");
	this.shape_6.setTransform(90.6,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJAAQAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_7.setTransform(83.5,4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAzQgKgOAAgfQAAglANgQQANgRAcAAQAPAAANAEIAAAMQgOgEgMAAQgWAAgJAMQgJAMgBAcQAGgQAbAAQAWAAAJAJQAKAJAAAVQAAAWgKAKQgLAKgYAAQgXAAgLgOgAgcAVQAAAgAcAAQAQAAAIgHQAGgHAAgQQABgPgHgHQgGgGgQAAQgeAAAAAag");
	this.shape_8.setTransform(76.6,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAKA/IAAhvIgiAPIAAgNIAkgQIANAAIAAB9g");
	this.shape_9.setTransform(65.4,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghAlQgLgMAAgZQAAgYALgMQALgLAWAAQAYAAAKALQALAMAAAYQAAAZgLAMQgKALgYAAQgWAAgLgLgAgVgbQgHAJAAASQAAATAHAIQAHAJAOAAQAQAAAHgJQAHgIAAgTQAAgSgHgJQgHgIgQAAQgPAAgGAIg");
	this.shape_10.setTransform(52.2,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAdAtIAAhOIgxAAIAABOIgQAAIAAhNQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgFgBIABgIIBUAAIAABZg");
	this.shape_11.setTransform(41.8,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiA5QgKgIAAgTQAAgOAGgHQAHgIAPgCQgNgCgGgIQgGgHAAgNQAAgSAKgHQAKgIAVAAQAWAAAKAIQAKAHAAASQAAAZgZAFQAcAFAAAaQAAATgKAIQgLAIgYAAQgXAAgLgIgAgXAMQgHAGAAAMQAAAMAHAGQAIAFAPAAQAQAAAHgFQAHgFAAgNQAAgMgGgGQgHgFgRgCQgQACgHAFgAgUgvQgHAFAAAMQAAALAHAFQAGAGAOABQAPgBAGgGQAHgFAAgLQAAgMgHgFQgGgFgPAAQgOAAgGAFg");
	this.shape_12.setTransform(28.1,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKA/IAAhvIgiAPIAAgNIAkgQIANAAIAAB9g");
	this.shape_13.setTransform(17.1,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiAyQgLgQAAgiQAAghALgQQALgPAXAAQAZAAAKAPQALAQAAAhQAAAigLAQQgKAPgZAAQgXAAgLgPgAgXgnQgIAMAAAbQAAAcAIAMQAHANAQAAQARAAAHgNQAIgMAAgcQAAgbgIgMQgHgNgRAAQgQAAgHANg");
	this.shape_14.setTransform(7.4,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgoBAIAAgLIAwgwQARgQAAgPQAAgNgHgGQgHgFgOAAQgQgBgRAGIAAgMQAPgGAUAAQAVAAAKAIQAKAJAAATQAAAUgTARIgpAqIA9AAIAAAMg");
	this.shape_15.setTransform(-3.1,-1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJAAQAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_16.setTransform(-10,4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYA/IAyhxIhDAAIAAgMIBTAAIAAALIgzByg");
	this.shape_17.setTransform(-17.1,-1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgiAyQgLgQAAgiQAAghALgQQALgPAXAAQAZAAAKAPQALAQAAAhQAAAigLAQQgKAPgZAAQgXAAgLgPgAgXgnQgIAMAAAbQAAAcAIAMQAHANAQAAQARAAAHgNQAIgMAAgcQAAgbgIgMQgHgNgRAAQgQAAgHANg");
	this.shape_18.setTransform(-27.4,-1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAAQAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_19.setTransform(-34.4,4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghAzQgLgOAAgfQAAglANgQQANgRAdAAQANAAAPAEIAAAMQgPgEgMAAQgWAAgKAMQgJAMAAAcQAGgQAbAAQAWAAAJAJQAKAJAAAVQAAAWgLAKQgKAKgYAAQgXAAgKgOgAgcAVQAAAgAcAAQAQAAAHgHQAHgHAAgQQAAgPgHgHQgGgGgPAAQgeAAAAAag");
	this.shape_20.setTransform(-41.4,-1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAJA/IAAhvIghAPIAAgNIAkgQIANAAIAAB9g");
	this.shape_21.setTransform(-52.5,-1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgjArIAAgMQAPAFAQAAQAZAAAAgQQAAgJgGgDQgGgEgNAAIgRAAIAAgJIARAAQAWAAAAgPQAAgQgWAAQgMAAgQAFIgCgLQAQgFAPAAQASAAAJAGQAJAGAAANQAAASgPADQASADAAAUQAAAagnAAQgRAAgPgFg");
	this.shape_22.setTransform(-64.9,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZAkQgKgMAAgYQAAgXAKgMQALgMAXAAQARAAAKAEIgCAMQgJgEgOAAQgPAAgHAHQgIAHgBAQIAuAAIAAAJIguAAQABARAIAIQAHAHAPAAQAMAAAMgEIAAAMQgLAEgPAAQgXAAgLgMg");
	this.shape_23.setTransform(-76.7,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEBAIAAhNQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgCIACgIIASAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAABYgAgHg2QAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_24.setTransform(-82.9,-1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAnA7IAAgbIhNAAIAAAbIgOAAIAAgnIAJAAQAIgEADgLQADgKABgVIAAgTIgCgDIgGgCIACgIIBIAAIAABOIAPAAIAAAngAgPgZQAAAjgKAKIAxAAIAAhCIgnAAg");
	this.shape_25.setTransform(-90.3,1.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAYAtIAAgjIgYAAIgVAjIgQAAIAXgkQgVgDAAgWQAAgPAIgHQAHgGARAAIApAAIAABZgAgVgQQAAAQAUAAIAZAAIAAghIgZAAQgUAAAAARg");
	this.shape_26.setTransform(-104.4,0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEBAIAAhNQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgGgCIABgIIASAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAABYgAgGg2QgBgJAJAAQAKAAAAAJQAAAKgKAAQgJAAABgKg");
	this.shape_27.setTransform(-110.8,-1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAlA7IAAgbIhQAAIAAhNIgBgDIgGgCIABgIIAUAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAABMIAxAAIAAhOIAPAAIAABOIAPAAIAAAng");
	this.shape_28.setTransform(-117.9,1.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAXAtIgggnIgJAJIAAAeIgPAAIAAhNIgBgDIgGgBIACgIIASAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAABAAIAAAqIAogrIASAAIgoAqIApAvg");
	this.shape_29.setTransform(-127.6,0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AApA/IgKgiIg9AAIgKAiIgQAAQAIgfAOgjQAPgnALgUIARAAQALAUAPAnQAOAjAIAfgAAbASQgOgqgNgYQgLAYgPAqIA1AAIAAAAg");
	this.shape_30.setTransform(-138,-1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAAALIgRAYIgIgGIARgZIgcgIIAEgKIAcAJIAAgdIAJAAIAAAdIAcgJIAEAKIgdAIIASAZIgJAGg");
	this.shape_31.setTransform(-146.8,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText1, new cjs.Rectangle(-150.5,-7.7,301.1,15.5), null);


(lib.t4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBuQgEgEAAgJQAAgKAEgEQAFgEAIAAQASAAAAASQAAARgSAAQgIAAgFgEgAgMArIgBicIAbAAIgCCcg");
	this.shape.setTransform(157.2,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhQBZQgagbAAg+QAAg9AagbQAYgbA4gBQA4ABAaAbQAZAbAAA9QAAA+gZAbQgaAcg4gBQg4ABgYgcgAg7hHQgSAWAAAxQAAAyASAWQATAWAoAAQAqAAASgWQATgWAAgyQAAgxgTgWQgSgWgqAAQgoAAgTAWg");
	this.shape_1.setTransform(141.6,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNBxIAAjLIhOAAIAAgVIC3AAIAAAVIhOAAIAADLg");
	this.shape_2.setTransform(120.7,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQAqAAATAUQATAUAAAsQAAAtgTAUQgTAUgqAAQgpAAgTgUgAgngwQgNAPAAAhQAAAiANAPQAMAPAbAAQAcAAAMgPQANgPAAgiQAAghgNgPQgMgPgcAAQgbAAgMAPg");
	this.shape_3.setTransform(95.5,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBRIAAiLQAAgDgCgBIgKgFIACgNIB1AAIAAAVIhQAAIAACMg");
	this.shape_4.setTransform(81.3,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQArAAASAUQATAUAAAsQAAAtgTAUQgSAUgrAAQgpAAgTgUgAgngwQgMAPgBAhQABAiAMAPQAMAPAbAAQAcAAANgPQALgPABgiQgBghgLgPQgNgPgcAAQgbAAgMAPg");
	this.shape_5.setTransform(65.5,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAzBRIAAhIIhZAAIAABIIgaAAIAAiLQAAgDgCgBIgKgFIACgNIAiAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAABCIBZAAIAAhFIAbAAIAAChg");
	this.shape_6.setTransform(46.8,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABGBpIAAgwIiLAAIAAAwIgYAAIAAhFIAPAAQAOgIAHgTQAFgSAAgnIAAgiQAAgDgDgBIgJgFIACgNICCAAIAACMIAbAAIAABFgAgbguQAAAkgDARQgFATgKAKIBYAAIAAh3IhGAAg");
	this.shape_7.setTransform(28.2,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQArAAASAUQATAUAAAsQAAAtgTAUQgSAUgrAAQgpAAgTgUgAgogwQgMAPABAhQgBAiAMAPQANAPAbAAQAcAAAMgPQAMgPAAgiQAAghgMgPQgMgPgcAAQgbAAgNAPg");
	this.shape_8.setTransform(10.2,19.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBzIAAiLQAAgEgCgBIgKgEIACgOIAhAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAACfgAgMhgQAAgSAQAAQARAAAAASQAAAQgRAAQgQAAAAgQg");
	this.shape_9.setTransform(-9.3,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAzBRIAAhIIhYAAIAABIIgbAAIAAiLQAAgDgDgBIgKgFIADgNIAhAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIAABCIBYAAIAAhFIAaAAIAAChg");
	this.shape_10.setTransform(-22,19.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAZAAAVAHIAAgXQAAgUgLgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAlAAAQAOQARAPAAAgIAABRQAAAEADABIAKAEIgDAOIgcAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgPQgOAVgoAAQggAAgPgLgAgmAPQgKAHAAAPQAAAdAoAAQAXAAALgJQALgIAAgTIAAgOQgSgIgYAAQgXAAgKAHg");
	this.shape_11.setTransform(-38.9,19.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMBRIAAiMIg4AAIAAgVICJAAIAAAVIg3AAIAACMg");
	this.shape_12.setTransform(-53.5,19.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgtBBQgTgUAAgtQAAgsATgUQATgUAqAAQAfAAASAHIgFAUQgRgGgYAAQgdAAgNAPQgNAPAAAhQAAAiANAPQANAPAdAAQAWAAAWgHIAAAWQgVAGgaAAQgqAAgTgUg");
	this.shape_13.setTransform(-67.9,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABFBpIAAgwIiKAAIAAAwIgYAAIAAhFIAPAAQAPgIAFgTQAGgSAAgnIAAgiQAAgDgDgBIgKgFIADgNICCAAIAACMIAbAAIAABFgAgbguQAAAjgDASQgFATgKAKIBYAAIAAh3IhGAAg");
	this.shape_14.setTransform(-84.6,21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBzIAAiLQAAgEgCgBIgKgEIACgOIAhAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAACfgAgMhgQAAgSAQAAQASAAAAASQgBAQgRAAQgQAAAAgQg");
	this.shape_15.setTransform(-98.1,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag8BRIAAiLQAAgDgDgBIgKgFIACgNIBaAAQAaAAAMAKQAMALAAAXQgBAagUAIQAaAHAAAfQAAAYgNALQgMAKgbAAgAgjA+IAzAAQARAAAHgGQAIgGAAgPQAAgOgIgHQgHgGgRAAIgzAAgAgjgKIAxAAQAPAAAHgGQAGgGAAgOQAAgOgGgFQgHgGgPAAIgxAAg");
	this.shape_16.setTransform(-109.7,19.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAZAAAVAHIAAgXQAAgUgLgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAlAAAQAOQARAPAAAgIAABRQAAAEADABIAKAEIgDAOIgcAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgPQgOAVgoAAQggAAgPgLgAgmAPQgKAHAAAPQAAAdAoAAQAXAAALgJQALgIAAgTIAAgOQgSgIgYAAQgXAAgKAHg");
	this.shape_17.setTransform(-132.9,19.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAzBRIAAhIIhYAAIAABIIgbAAIAAiLQAAgDgDgBIgKgFIADgNIAiAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAABCIBYAAIAAhFIAbAAIAAChg");
	this.shape_18.setTransform(-151.2,19.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AArBRIAAg/IgsAAIgmA/IgdAAIAqhCQglgGAAgoQAAgaAOgLQANgMAfAAIBKAAIAAChgAgdg1QgIAHAAAPQAAAQAIAHQAIAHASAAIAuAAIAAg7IguAAQgSAAgIAHg");
	this.shape_19.setTransform(68.5,-16.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIBzIAAiLQAAgDgCgCIgKgEIACgOIAhAAQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAIAACfgAgMhgQAAgSAQAAQARAAAAASQAAAQgRAAQgQAAAAgQg");
	this.shape_20.setTransform(57,-19.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABCBpIAAgwIiPAAIAAiLQAAgDgDgBIgKgFIADgNIAhAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABIAACJIBZAAIAAiMIAbAAIAACMIAaAAIAABFg");
	this.shape_21.setTransform(44.2,-13.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAzBRIAAhIIhYAAIAABIIgbAAIAAiLQAAgDgCgBIgLgFIADgNIAiAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAABCIBYAAIAAhFIAbAAIAAChg");
	this.shape_22.setTransform(24.8,-16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAZAAAVAHIAAgXQAAgUgLgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAkAAARAOQARAPAAAgIAABRQAAAEADABIAKAFIgDANIgcAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgPQgPAVgnAAQggAAgPgLgAgmAPQgKAHAAAPQAAAdAoAAQAXAAALgJQALgIAAgTIAAgOQgSgIgYAAQgXAAgKAHg");
	this.shape_23.setTransform(8,-16.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhEB2IAAjRQAAgDgDgBIgKgFIADgNIAhAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAOQAPgVAmAAQAkAAASAUQAQAUAAAtQAAAtgQATQgSAVgkgBQghAAgUgRIAABTgAgehVQgLALAAAZIAABAQATAQAbAAQAaAAAMgPQALgPAAghQAAgigLgPQgMgPgaAAQgYAAgLALg");
	this.shape_24.setTransform(-9.8,-13);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMCBIAAgiQg2gBgZgYQgagYAAgvQAAgwAagYQAZgXA2gDIAAgdIAZAAIAAAdQA1ADAaAXQAaAYAAAwQAAAvgaAYQgaAYg1ABIAAAigAANBKQAogCATgSQATgSAAglQAAgmgTgSQgTgSgogBgAhHg5QgTASAAAmQAAAlATASQATASAoACIAAiWQgoABgTASg");
	this.shape_25.setTransform(-31.5,-19.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAZAAAVAHIAAgXQAAgUgLgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAlAAAQAOQARAPAAAgIAABRQAAAEADABIAKAFIgDANIgcAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgPQgOAVgoAAQggAAgPgLgAgmAPQgKAHAAAPQAAAdAoAAQAXAAALgJQALgIAAgTIAAgOQgSgIgYAAQgXAAgKAHg");
	this.shape_26.setTransform(-59.2,-16.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAzBRIAAhIIhZAAIAABIIgaAAIAAiLQAAgDgDgBIgKgFIADgNIAhAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABIAABCIBZAAIAAhFIAbAAIAAChg");
	this.shape_27.setTransform(-77.5,-16.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAxBRIAAhEQgaAHgVAAQghAAgPgOQgQgNAAgeIAAgVQAAgDgDgBIgKgFIADgNIAiAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAAAmQAAAUAKAJQALAJAXAAQASAAAXgGIAAhJIAbAAIAAChg");
	this.shape_28.setTransform(-95.5,-16.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAYAAAXAHIAAgXQAAgUgMgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAlAAARAOQAQAPAAAgIAABRQAAAEADABIAKAFIgDANIgbAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgPQgOAVgoAAQggAAgPgLgAgmAPQgLAHAAAPQAAAdApAAQAXAAAMgJQAKgIABgTIAAgOQgUgIgXAAQgXAAgKAHg");
	this.shape_29.setTransform(-111.3,-16.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AA/BRIAAh7IgxBKIgFAAIgJgBQgDgBgDgGIgshCIAAB7IgZAAIAAiLQAAgDgCgBIgKgFIACgNIAeAAIAGABIAGAHIAxBOIA4hWIAaAAIAAChg");
	this.shape_30.setTransform(-130.7,-16.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag8BZQgZgbAAg+QAAg9AZgbQAZgbA4AAQApAAAYAJIgEAVQgbgIgfAAQgqAAgTAWQgUAWAAAxQAAAyAUAWQATAWAqAAQAeAAAegJIAAAXQgbAJgkgBQg4AAgZgbg");
	this.shape_31.setTransform(-149.9,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4_1, new cjs.Rectangle(-158.9,-32.3,318,64.6), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJByIAAiLQAAgDgDgBIgKgFIADgNIAgAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIAACegAARhhQgBgQASAAQAQAAAAAQQAAAQgQAAQgSAAABgQgAgxhhQAAgQAQAAQARAAABAQQgBAQgRAAQgQAAAAgQg");
	this.shape.setTransform(164.4,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBzIAAiLQAAgEgDgBIgKgEIADgOIAhAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAACfgAgNhgQAAgSARAAQARAAAAASQAAAQgRAAQgRAAAAgQg");
	this.shape_1.setTransform(154.8,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABCBpIAAgwIiPAAIAAiLQAAgDgDgBIgKgFIADgNIAiAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAACJIBYAAIAAiMIAbAAIAACMIAbAAIAABFg");
	this.shape_2.setTransform(142,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAzBRIAAhIIhYAAIAABIIgbAAIAAiLQAAgDgDgBIgKgFIADgNIAhAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIAABCIBYAAIAAhFIAaAAIAAChg");
	this.shape_3.setTransform(122.6,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAZAAAVAHIAAgXQAAgUgLgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAlAAAQAOQARAPAAAgIAABRQAAAEADABIAKAFIgDANIgbAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgPQgOAVgoAAQggAAgPgLgAgmAPQgKAHAAAPQAAAdAoAAQAXAAALgJQALgIAAgTIAAgOQgSgIgYAAQgXAAgKAHg");
	this.shape_4.setTransform(105.7,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhEB2IAAjRQAAgCgDgCIgKgFIADgNIAiAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABIAAAOQAPgVAlAAQAlAAARAUQARAUAAAtQAAAtgRATQgRAVglgBQggAAgUgRIAABTgAgehVQgLALAAAZIAABAQATAQAbAAQAbAAALgPQAMgPAAghQAAgigMgPQgLgPgbAAQgYAAgLALg");
	this.shape_5.setTransform(87.9,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMCBIAAgiQg2gBgZgYQgZgYgBgvQABgwAZgYQAZgXA2gDIAAgdIAZAAIAAAdQA2ADAZAXQAZAYAAAwQAAAvgZAYQgZAYg2ABIAAAigAANBKQAogCATgSQAUgSgBglQABgmgUgSQgTgSgogBgAhIg5QgSASgBAmQABAlASASQAUASAoACIAAiWQgoABgUASg");
	this.shape_6.setTransform(66.3,-2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJByIAAiLQAAgDgDgBIgKgFIADgNIAhAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAABIAACegAARhhQAAgQARAAQAQAAAAAQQAAAQgQAAQgRAAAAgQgAgxhhQAAgQARAAQARAAAAAQQAAAQgRAAQgRAAAAgQg");
	this.shape_7.setTransform(43.2,-2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUAqAAQAqAAASAUQATAUAAAsQAAAtgTAUQgSAUgqAAQgqAAgTgUgAgngwQgMAPAAAhQAAAiAMAPQANAPAbAAQAbAAAMgPQANgPAAgiQAAghgNgPQgMgPgbAAQgbAAgNAPg");
	this.shape_8.setTransform(31,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAzBRIAAhIIhYAAIAABIIgbAAIAAiLQAAgDgDgBIgKgFIADgNIAiAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAABCIBYAAIAAhFIAbAAIAAChg");
	this.shape_9.setTransform(12.3,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAyBRIAAhEQgcAHgTAAQgiAAgQgOQgPgNAAgeIAAgVQAAgDgDgBIgKgFIADgNIAiAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAAAmQABAUAJAJQALAJAWAAQAUAAAXgGIAAhJIAaAAIAAChg");
	this.shape_10.setTransform(-5.7,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBzIAAiLQAAgEgEgBIgKgEIAEgOIAgAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAACfgAgNhgQAAgSARAAQARAAAAASQAAAQgRAAQgRAAAAgQg");
	this.shape_11.setTransform(-17,-2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA/BRIAAh7IgxBKIgFAAQgIAAgBgBQgDgBgDgGIgshCIAAB7IgZAAIAAiLQAAgDgCgBIgKgFIACgNIAeAAQAFAAABABIAGAHIAxBOIA4hWIAaAAIAAChg");
	this.shape_12.setTransform(-30.9,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQArAAASAUQATAUAAAsQAAAtgTAUQgSAUgrAAQgpAAgTgUgAgngwQgNAPAAAhQAAAiANAPQAMAPAbAAQAcAAAMgPQAMgPAAgiQAAghgMgPQgMgPgcAAQgbAAgMAPg");
	this.shape_13.setTransform(-49.5,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAzBRIAAhIIhYAAIAABIIgbAAIAAiLQAAgDgCgBIgKgFIACgNIAiAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAABIAABCIBYAAIAAhFIAaAAIAAChg");
	this.shape_14.setTransform(-68.2,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQAqAAAUAUQASAUAAAsQAAAtgSAUQgUAUgqAAQgpAAgTgUgAgngwQgNAPAAAhQAAAiANAPQANAPAaAAQAdAAALgPQANgPAAgiQAAghgNgPQgLgPgdAAQgaAAgNAPg");
	this.shape_15.setTransform(-85.7,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhEB2IAAjRQAAgCgDgCIgKgFIACgNIAiAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAOQAPgVAlAAQAmAAAQAUQARAUAAAtQAAAsgRAUQgQAVgmgBQggAAgUgRIAABTgAgehVQgLALAAAZIAABAQASAQAcAAQAaAAAMgPQALgPAAghQAAgigLgPQgMgPgaAAQgZAAgKALg");
	this.shape_16.setTransform(-103.8,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMBRIAAiMIg4AAIAAgVICJAAIAAAVIg3AAIAACMg");
	this.shape_17.setTransform(-120,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgtBBQgTgUAAgtQAAgsATgUQATgUApAAQAfAAATAHIgFAUQgRgGgYAAQgdAAgNAPQgOAPAAAhQAAAiAOAPQANAPAdAAQAWAAAWgHIAAAWQgUAGgcAAQgpAAgTgUg");
	this.shape_18.setTransform(-134.5,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAZAAAVAHIAAgXQAAgUgLgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAlAAAQAOQARAPAAAgIAABRQAAAEADABIAKAFIgDANIgcAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgPQgOAVgoAAQggAAgPgLgAgmAPQgKAHAAAPQAAAdAoAAQAXAAALgJQALgIAAgTIAAgOQgSgIgYAAQgXAAgKAHg");
	this.shape_19.setTransform(-150.2,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgvBRIAAiLQAAgDgDgBIgKgFIADgNIB1AAIAAAVIhQAAIAACMg");
	this.shape_20.setTransform(-163.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-169.3,-15.5,338.8,31.1), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQArAAASAUQATAUAAAsQAAAtgTAUQgSAUgrAAQgpAAgTgUgAgngwQgNAPAAAhQAAAiANAPQAMAPAbAAQAcAAANgPQAMgPAAgiQAAghgMgPQgNgPgcAAQgbAAgMAPg");
	this.shape.setTransform(140.1,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABFBpIAAgwIiKAAIAAAwIgYAAIAAhFIAPAAQAPgIAFgTQAGgSAAgnIAAgiQAAgDgDgBIgKgFIADgNICCAAIAACMIAbAAIAABFgAgbguQAAAjgDASQgFATgKAKIBXAAIAAh3IhFAAg");
	this.shape_1.setTransform(121.8,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABWBRIg7hHIgPAPIAAA4IgXAAIAAg4IgPgPIg7BHIgfAAIBJhWIhHhLIAfAAIBIBMIAAhMIAXAAIAABMIBIhMIAfAAIhHBLIBJBWg");
	this.shape_2.setTransform(93.4,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQArAAASAUQATAUAAAsQAAAtgTAUQgSAUgrAAQgpAAgTgUgAgngwQgMAPgBAhQABAiAMAPQAMAPAbAAQAcAAANgPQALgPABgiQgBghgLgPQgNgPgcAAQgbAAgMAPg");
	this.shape_3.setTransform(73.4,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhEB2IAAjQQAAgDgCgCIgLgFIADgNIAiAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAANQAPgUAmAAQAmAAAQAUQARAUAAAtQAAAsgRAVQgQATgmAAQggAAgVgSIAABUgAgfhVQgKALgBAZIAABBQAVAPAaAAQAaAAAMgPQAMgPAAghQAAgigMgPQgMgPgaAAQgYAAgMALg");
	this.shape_4.setTransform(55.2,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQAqAAATAUQATAUAAAsQAAAtgTAUQgTAUgqAAQgpAAgTgUgAgngwQgNAPAAAhQAAAiANAPQAMAPAbAAQAcAAAMgPQAMgPAAgiQAAghgMgPQgMgPgcAAQgbAAgMAPg");
	this.shape_5.setTransform(37.2,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABGBpIAAgwIiLAAIAAAwIgYAAIAAhFIAPAAQAOgIAHgTQAFgSAAgnIAAgiQAAgDgCgBIgKgFIACgNICDAAIAACMIAaAAIAABFgAgbguQABAkgEARQgFATgKAKIBYAAIAAh3IhGAAg");
	this.shape_6.setTransform(18.9,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUAqAAQAqAAASAUQATAUAAAsQAAAtgTAUQgSAUgqAAQgqAAgTgUgAgngwQgMAPAAAhQAAAiAMAPQAMAPAcAAQAcAAALgPQANgPAAgiQAAghgNgPQgLgPgcAAQgcAAgMAPg");
	this.shape_7.setTransform(0.9,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAzBRIAAiMIhYAAIAACMIgbAAIAAiLQAAgDgDgBIgKgFIADgNICYAAIAAChg");
	this.shape_8.setTransform(-17.8,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA0BRIAAh9IhaB9IgaAAIAAiLQAAgDgCgBIgKgFIACgNIAfAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABIAAB6IBbh9IAaAAIAAChg");
	this.shape_9.setTransform(-42.7,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBRIAAiMIg4AAIAAgVICJAAIAAAVIg3AAIAACMg");
	this.shape_10.setTransform(-58.4,18);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAZAAAVAHIAAgXQAAgUgLgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAlAAAQAOQARAPAAAgIAABRQAAAEADABIAKAEIgDAOIgbAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgCgPQgOAVgoAAQggAAgPgLgAgmAPQgKAHAAAPQAAAdAoAAQAXAAALgJQALgIAAgTIAAgOQgSgIgYAAQgXAAgKAHg");
	this.shape_11.setTransform(-73.5,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhFB2IAAjQQAAgDgCgCIgKgFIACgNIAiAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAANQAQgUAlAAQAmAAAQAUQARAUAAAtQAAAsgRAVQgQATgmAAQghAAgUgSIAABUgAgehVQgMALAAAZIAABBQAUAPAbAAQAbAAALgPQALgPAAghQAAgigLgPQgLgPgbAAQgZAAgKALg");
	this.shape_12.setTransform(-91.2,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvBRIAAiLQAAgDgCgBIgKgFIACgNIB1AAIAAAVIhQAAIAACMg");
	this.shape_13.setTransform(-106.6,18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AA1BRIAAh9IhbB9IgaAAIAAiLQAAgDgDgBIgKgFIADgNIAgAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAABIAAB6IBah9IAbAAIAAChg");
	this.shape_14.setTransform(-123.1,18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag8BRIAAiLQAAgDgDgBIgKgFIADgNIBZAAQAaAAAMAKQAMALgBAXQABAagWAIQAbAHAAAfQAAAYgMALQgMAKgcAAgAgjA+IAzAAQARAAAHgGQAIgGAAgPQAAgOgIgHQgHgGgRAAIgzAAgAgjgKIAwAAQAQAAAHgGQAHgGAAgOQAAgOgHgFQgGgGgRAAIgwAAg");
	this.shape_15.setTransform(-140.1,18);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgtBBQgTgUAAgtQAAgsATgUQATgUAqAAQAfAAASAHIgFAUQgQgGgZAAQgdAAgNAPQgNAPAAAhQAAAiANAPQANAPAdAAQAWAAAWgHIAAAWQgUAGgbAAQgqAAgTgUg");
	this.shape_16.setTransform(91.3,-17.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAzBRIAAhIIhYAAIAABIIgbAAIAAiLQAAgDgDgBIgKgFIADgNIAhAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIAABCIBYAAIAAhFIAbAAIAAChg");
	this.shape_17.setTransform(74.2,-17.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAZAAAVAHIAAgXQAAgUgLgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAlAAAQAOQARAPAAAgIAABRQAAAEADABIAKAFIgDANIgcAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgPQgPAVgnAAQggAAgPgLgAgmAPQgKAHAAAPQAAAdAoAAQAXAAALgJQALgIAAgTIAAgOQgSgIgYAAQgXAAgKAHg");
	this.shape_18.setTransform(57.3,-17.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhtBRIAAiLQAAgDgDgBIgKgFIACgNIAiAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAACJIBNAAIAAiMIAaAAIAACMIBNAAIAAiMIAaAAIAAChg");
	this.shape_19.setTransform(34.5,-17.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA1B2IAAh+IhbB+IgaAAIAAiLQAAgEgDgBIgKgEIADgOIAgAAQAAAAABAAQABABAAAAQAAAAABABQAAABAAAAIAAB7IBah+IAbAAIAACigAgghPQgMgMAAgaIAUAAQAAARAHAHQAHAIAQAAQARAAAHgIQAIgHAAgRIATAAQAAAagMAMQgMAMgbAAQgZAAgNgMg");
	this.shape_20.setTransform(5,-21.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAYAAAWAHIAAgXQAAgUgLgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAkAAARAOQARAPAAAgIAABRQAAAEADABIAKAFIgDANIgcAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgPQgPAVgnAAQggAAgPgLgAgmAPQgKAHAAAPQAAAPAJAHQAKAHAVAAQAXAAALgJQALgIAAgTIAAgOQgTgIgXAAQgXAAgKAHg");
	this.shape_21.setTransform(-11.8,-17.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABABRIAAh7IgyBKIgFAAQgIAAgBgBQgCgBgEgGIgshCIAAB7IgZAAIAAiLQAAgDgCgBIgKgFIACgNIAeAAIAGABIAGAHIAxBOIA4hWIAaAAIAAChg");
	this.shape_22.setTransform(-31.2,-17.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AA0BRIAAh9IhaB9IgaAAIAAiLQAAgDgDgBIgJgFIACgNIAgAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAAB6IBah9IAaAAIAAChg");
	this.shape_23.setTransform(-50.4,-17.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhFB2IAAjRQABgDgDgBIgKgFIACgNIAjAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAOQAPgVAmAAQAmAAAQAUQARAUAAAtQAAAtgRATQgQAVgmgBQggAAgVgRIAABTgAgfhVQgKALgBAZIAABAQAUAQAbAAQAaAAAMgPQAMgPAAghQAAgigMgPQgMgPgaAAQgZAAgLALg");
	this.shape_24.setTransform(-68.1,-14.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMBRIAAiMIg4AAIAAgVICJAAIAAAVIg3AAIAACMg");
	this.shape_25.setTransform(-84.3,-17.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQAqAAATAUQATAUAAAsQAAAtgTAUQgTAUgqAAQgpAAgTgUgAgngwQgNAPAAAhQAAAiANAPQAMAPAbAAQAcAAAMgPQANgPAAgiQAAghgNgPQgMgPgcAAQgbAAgMAPg");
	this.shape_26.setTransform(-100,-17.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag8BKQgPgMAAgZQAAgYAQgMQAQgKAiAAQAZAAAWAHIAAgXQAAgUgMgJQgLgJgZAAQgaAAgYAIIAAgWQAZgHAcAAQAlAAARAOQAQAPAAAgIAABRQAAAEADABIAKAFIgDANIgbAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgCgPQgOAVgoAAQggAAgPgLgAgmAPQgKAHAAAPQAAAdAoAAQAuAAAAgkIAAgOQgUgIgXAAQgXAAgKAHg");
	this.shape_27.setTransform(-123.9,-17.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgNBxIAAjLIhOAAIAAgVIC3AAIAAAVIhOAAIAADLg");
	this.shape_28.setTransform(-138.8,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-148,-33.1,296.1,66.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBDQgTgSgCgoIgoAAIAABIIgZAAIAAiLQAAgDgDgBIgKgFIADgNIAgAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAABCIAoAAQADgmASgSQASgRAlAAQApAAASAUQASAUAAAsQAAAtgSAUQgSAUgpAAQgmAAgRgSgAAAgwQgLAPAAAhQAAAiALAPQAMAPAbAAQAbAAAMgPQAMgPAAgiQAAghgMgPQgMgPgbAAQgbAAgMAPg");
	this.shape.setTransform(132.4,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQAqAAATAUQATAUAAAsQAAAtgTAUQgTAUgqAAQgpAAgTgUgAgogwQgMAPAAAhQAAAiAMAPQANAPAbAAQAcAAAMgPQAMgPAAgiQAAghgMgPQgMgPgcAAQgbAAgNAPg");
	this.shape_1.setTransform(111,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqBRIg8hGIgQAPIAAA3IgZAAIAAiLQAAgDgDgBIgKgFIACgNIAhAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAABJIBKhMIAeAAIhHBLIBKBWg");
	this.shape_2.setTransform(95.5,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABWBRIg7hHIgPAPIAAA4IgXAAIAAg4IgPgPIg7BHIgfAAIBJhWIhHhLIAfAAIBIBMIAAhMIAXAAIAABMIBIhMIAfAAIhHBLIBJBWg");
	this.shape_3.setTransform(75.4,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA1BRIAAh9IhbB9IgaAAIAAiLQAAgDgDgBIgKgFIADgNIAgAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIAAB6IBah9IAbAAIAAChg");
	this.shape_4.setTransform(53.8,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAzBRIAAhIIhZAAIAABIIgaAAIAAiLQAAgDgDgBIgKgFIADgNIAhAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAABCIBZAAIAAhFIAbAAIAAChg");
	this.shape_5.setTransform(35.6,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/BNIAAgVQAbAJAbAAQAYAAALgHQALgGAAgQQAAgQgLgGQgKgGgYAAIgfAAIAAgRIAfAAQAUAAAKgHQAKgGAAgPQAAgPgKgGQgKgGgVAAQgWAAgbAIIgEgUQAbgIAdAAQAhAAAQAKQAQALAAAYQAAAQgGAIQgGAKgPADQARADAHAKQAIAKAAASQAAAYgRALQgRALgkAAQggAAgZgIg");
	this.shape_6.setTransform(19.6,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIBzIAAiLQAAgEgCgBIgKgEIACgOIAhAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAACfgAgMhgQAAgSAQAAQARAAAAASQAAAQgRAAQgQAAAAgQg");
	this.shape_7.setTransform(1.9,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag/BNIAAgVQAbAJAbAAQAXAAAMgHQALgGgBgQQAAgQgKgGQgKgGgZAAIgeAAIAAgRIAeAAQAVAAAJgHQALgGAAgPQAAgPgKgGQgKgGgVAAQgXAAgZAIIgFgUQAbgIAdAAQAhAAAQAKQAPALABAYQgBAQgFAIQgHAKgOADQAgAHAAAiQAAAYgRALQgRALgkAAQggAAgZgIg");
	this.shape_8.setTransform(-8.6,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhQBZQgagbAAg+QAAg8AagcQAZgcA3ABQA5gBAZAcQAZAcAAA8QAAA+gZAbQgZAbg5ABQg3gBgZgbgAg7hHQgTAWAAAxQAAAyATAWQASAWApAAQAqAAATgWQASgWAAgyQAAgxgSgWQgTgWgqAAQgpAAgSAWg");
	this.shape_9.setTransform(-34.5,18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNBwIAAjJIhOAAIAAgXIC3AAIAAAXIhOAAIAADJg");
	this.shape_10.setTransform(-55.3,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgtBAQgTgUAAgsQAAgqATgVQAUgVApAAQAfAAASAHIgFAUQgRgGgYAAQgbAAgNAMQgNANgCAcIBTAAIAAASIhTAAQABAeAOANQANAOAbAAQAWAAAWgHIAAAVQgUAGgbAAQgpAAgUgVg");
	this.shape_11.setTransform(-78.7,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAzBRIAAhIIhYAAIAABIIgbAAIAAiLQAAgDgCgBIgLgFIADgNIAiAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAABIAABCIBYAAIAAhFIAbAAIAAChg");
	this.shape_12.setTransform(-95.8,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNBRIAAiMIg3AAIAAgVICJAAIAAAVIg4AAIAACMg");
	this.shape_13.setTransform(-111.5,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIBzIAAiLQAAgEgCgBIgKgEIACgOIAhAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAACfgAgMhgQAAgSAQAAQARAAAAASQAAAQgRAAQgQAAAAgQg");
	this.shape_14.setTransform(-122.5,18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhRBSIAAgVIAFAAQATAAAJgUQAJgVAAgtIAAgiQAAgDgDgBIgKgFIADgNICDAAIAAChIgaAAIAAiNIhGAAIAAAmQAAA4gOAZQgOAZghgBg");
	this.shape_15.setTransform(-135.8,21.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA1BRIAAh9IhbB9IgaAAIAAiLQAAgDgDgBIgJgFIACgNIAfAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAAB6IBah9IAaAAIAAChg");
	this.shape_16.setTransform(-37.7,-14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABGBpIAAgwIiLAAIAAAwIgYAAIAAhFIAPAAQAPgIAFgTQAGgSAAgnIAAgiQAAgDgDgBIgKgFIADgNICCAAIAACMIAbAAIAABFgAgbguQAAAjgDASQgFATgKAKIBXAAIAAh3IhFAAg");
	this.shape_17.setTransform(-56.2,-12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AA1B2IAAh+IhbB+IgaAAIAAiLQAAgEgDgBIgKgEIADgOIAgAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAB7IBah+IAbAAIAACigAgghPQgMgMAAgaIAUAAQAAARAHAHQAHAIAQAAQARAAAHgIQAIgHAAgRIATAAQAAAagMAMQgMAMgbAAQgZAAgNgMg");
	this.shape_18.setTransform(-75.7,-18);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag8BBQgTgUAAgtQAAgsATgUQATgUApAAQAqAAATAUQATAUAAAsQAAAtgTAUQgTAUgqAAQgpAAgTgUgAgngwQgNAPAAAhQAAAiANAPQAMAPAbAAQAcAAAMgPQANgPAAgiQAAghgNgPQgMgPgcAAQgbAAgMAPg");
	this.shape_19.setTransform(-93.2,-14.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhEB2IAAjRQAAgDgDgBIgKgFIADgNIAhAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAANQAPgUAmAAQAkAAASAUQAQAUAAAtQAAAsgQAVQgSATgkAAQgiAAgTgRIAABTgAgehVQgLALAAAZIAABBQASAPAcAAQAaAAAMgPQAMgPgBghQABgigMgPQgMgPgaAAQgYAAgLALg");
	this.shape_20.setTransform(-111.4,-11.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABKBxIAAjLIiGAAIAADLIgcAAIAAjMQAAgCgDgBIgKgFIADgMIDIAAIAADgg");
	this.shape_21.setTransform(-132.9,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-144,-29.8,288,59.7), null);


(lib.logoZnak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-14,-17,0.826,0.825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoZnak, new cjs.Rectangle(-14,-17,27.3,33), null);


(lib.logoTextBlack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhdB0QglgkAAhQQAAhPAggkQAhgkBHAAQBCAAAeAjQAdAjAABNIgBASIjVAAQACA2AZAXQAaAXA6AAQAuAAAugOIAAAmQgpAOg3AAQhRAAgkgkgAg9hdQgVAXgBA0ICoAAQAAg0gTgXQgSgXgqAAQgtAAgWAXg");
	this.shape.setTransform(13.3,6.1,0.118,0.118);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5DVIAAj0IAAgGQgBgBgFgBIgigKIAEgbIAkAAIAAglQAAg0AYgYQAYgXA1AAQAhAAAVAIIgIAlQgTgHgWAAQgfAAgOAOQgNAOAAAfIAAAnIBWAAIAAAmIhWAAIAAD7g");
	this.shape_1.setTransform(10.5,5.3,0.118,0.118);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPDMIAAj4QABgHgFgBIgSgIIAEgZIA8AAQAFAAAAAGIAAEbgAgQiWQgGgHAAgQQAAgQAGgHQAIgHAPAAQARAAAHAHQAHAHAAAQQAAAQgHAHQgIAHgQAAQgPAAgIgHg");
	this.shape_2.setTransform(8.1,5.4,0.118,0.118);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRDSQgGgBAAgFIAAl0QAAgGgEgCIgSgIIAEgZIA8AAQAFAAAAAHIAAFzQAAAGAEACIASAIIgFAZg");
	this.shape_3.setTransform(6.4,5.4,0.118,0.118);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhJCUIAAj4QAAgGgEgCIgSgIIAEgYIA9AAQAFAAAAAGIAAAdQAggqA9AAQAMAAAQACIgIAqQgSgEgJAAQgdAAgWAKQgRAHgSAPIAADfg");
	this.shape_4.setTransform(3,6.1,0.118,0.118);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhsB0QghgkAAhQQAAhPAhgkQAigkBKAAQBLAAAiAkQAiAkgBBPQABBQgiAkQgiAkhLAAQhKAAgigkgAhHhWQgWAbAAA7QAAA9AWAaQAWAbAxAAQAyAAAVgbQAXgaAAg9QAAg8gXgaQgVgbgyAAQgxAAgWAbg");
	this.shape_5.setTransform(-0.4,6.1,0.118,0.118);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag5DVIAAj0IgBgGQgBgBgEgBIgigKIAEgbIAkAAIAAglQAAg0AYgYQAYgXA1AAQAhAAAVAIIgIAlQgTgHgWAAQgfAAgOAOQgNAOAAAfIAAAnIBVAAIAAAmIhVAAIAAD7g");
	this.shape_6.setTransform(-3.3,5.3,0.118,0.118);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABUCUQgFAAAAgGIAAitQAAgqgQgRQgRgSgnAAQgZAAgaAIQgXAGgLAIIAADqIgwAAIAAj4QAAgGgFgCIgSgIIAGgYIA8AAQAFAAAAAGIAAAUQAjghA6AAQA8AAAZAbQAaAbAAA9IAACMQAAAGAGACIASAIIgGAYg");
	this.shape_7.setTransform(-8.4,6.1,0.118,0.118);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhsB0QgigkAAhQQAAhPAigkQAigkBKAAQBLAAAiAkQAhAkABBPQgBBQghAkQgiAkhLAAQhKAAgigkgAhHhWQgWAbAAA7QAAA9AWAaQAWAbAxAAQAxAAAWgbQAXgagBg9QABg7gXgbQgWgbgxAAQgxAAgWAbg");
	this.shape_8.setTransform(-12.3,6.1,0.118,0.118);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgODMIAAj4QAAgGgFgCIgSgIIAFgZIA7AAQAFAAAAAGIAAEbgAgPiWQgIgHAAgQQAAgQAIgHQAHgHAPAAQARAAAHAHQAHAHAAAQQAAAQgHAHQgIAHgQAAQgPAAgHgHg");
	this.shape_9.setTransform(-15.2,5.4,0.118,0.118);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhrCKIAAgnQAvAQAzAAQBJAAAAgyQAAgagbgMQgLgFgwgKQgpgJgTgMQgbgUAAgmQAAgqAegVQAdgVA3AAQAuAAAvANIgIAlQgngNgsAAQhGAAAAAuQgBAXAcALQAIAEAzAMQBXATAAA/QAAArgfAXQgdAWg3AAQg4AAgugOg");
	this.shape_10.setTransform(-17.6,6.1,0.118,0.118);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhqCKIAAgnQAuAQA0AAQBIAAAAgyQAAgagbgMQgMgFgvgKQgpgJgTgMQgbgUAAgmQAAgqAegVQAdgVA2AAQAvAAAvANIgIAlQgngNgsAAQhGAAAAAuQgBAXAcALQAIAEAzAMQBXATAAA/QAAArgeAXQgeAWg3AAQg5AAgsgOg");
	this.shape_11.setTransform(-20.8,6.1,0.118,0.118);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhrCDQgbgUAAgsQAAgsAcgUQAdgUA8AAQAwAAAkANIAAgoQAAglgUgQQgVgQgtAAQgsAAgtAOIAAgmQAugOAxAAQBBAAAeAaQAeAaAAA6IAACRQAAAHAFACIASAHIgFAZIgxAAIgEgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBIgCgZQgaAlhGAAQg5AAgbgVgAhEAbQgTAMAAAbQAAAbASAMQARAMAlAAQAqAAAUgPQAUgPAAghIAAgaQgjgNgqAAQgoAAgSAMg");
	this.shape_12.setTransform(-24.3,6.1,0.118,0.118);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiIDIIAAlpQAAgGgGgCIgRgIIADgWICwAAQBKAAAiAdQAgAdAABBQAABBggAcQgiAdhKAAIhsAAIAACagAhYAHIBoAAQAzAAAXgSQAXgVAAgsQAAgsgXgUQgXgUgzAAIhoAAg");
	this.shape_13.setTransform(-28.1,5.5,0.118,0.118);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ADRE6IgphtIlOAAIgpBtIikAAQBEizBSi5QA/iSA5h1IDLAAQCQEnB+FMgAB5BXQg6iPg/iPQg6CGg+CYIDxAAIAAAAg");
	this.shape_14.setTransform(1.8,-4.1,0.118,0.118);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAOE/QigAAhSg/QhTg+AAh7IAAkpQAAgLgLgSIgOgZIAHgmIC1AAIAAF/QAAAhAHAUQAHAVAPAOQAnAlBfAAQBeAAAoglQAPgOAHgVQAHgUAAghIAAl/ICgAAIAAGFQgBB9hPA9QhPA9ihABg");
	this.shape_15.setTransform(11,-4.1,0.118,0.118);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ADJE6Ij/kYQhHhNgtg6IAAGeIiSABIAAoWQgBgNgKgRIgOgZIAHgmICdAAIDkD4QBgBpAxA+IAAmfICSAAIAAJzg");
	this.shape_16.setTransform(-8,-4.1,0.118,0.118);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AChE6IhujJIjJAAIAADJIikAAIAAoNIgBgRQgCgJgHgNIgPgZIAHgmIF1AAQBRAAAzANQAzANAiAdQA8AwgBBlQAAA7gdAyQggA0g0AdICIDpgAiWgCIDeAAQAgAAASgSQAdgdAAg1QAAgwgcgWQgNgMgXgEQgXgFgoAAIiuAAg");
	this.shape_17.setTransform(-26,-4.1,0.118,0.118);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AkQE6IAApzIIWAAIAAB0IlyAAIAACKIFSAAIAABwIlSAAIAACQIF8AAIAAB1g");
	this.shape_18.setTransform(-17,-4.1,0.118,0.118);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AkCE6IAApzICjAAIAAH+IFiAAIAAB1g");
	this.shape_19.setTransform(20.2,-4.1,0.118,0.118);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhRE6IAAn/IjyAAIAAh0IKHAAIAAB0IjyAAIAAH/g");
	this.shape_20.setTransform(26.2,-4.1,0.118,0.118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoTextBlack, new cjs.Rectangle(-30,-7.8,60,15.8), null);


(lib.logoLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCB55").s().p("AiiWKMAAAgsTIFFAAMAAAAsTg");
	this.shape.setTransform(0,0,0.118,0.118);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoLine, new cjs.Rectangle(-1.9,-16.6,3.8,33.3), null);


(lib.fari_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.fari();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fari_1, new cjs.Rectangle(-63.5,-26,127,52), null);


(lib.carMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(-93,-63,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.carMc, new cjs.Rectangle(-93,-63,186.7,125), null);


(lib.btnTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAwIAAhRQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgFgCIACgJIBKAAIAAAPIgyAAIAAAZIAnAAIAAANIgnAAIAAAbIAzAAIAAAPg");
	this.shape.setTransform(50,0.2,0.692,0.693);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9AwIAAhRQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgFgCIABgJIAZAAIAABQIAlAAIAAhQIASAAIAABQIAlAAIAAhQIATAAIAABfg");
	this.shape_1.setTransform(41.4,0.2,0.692,0.693);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAwIAAhRQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgFgCIABgJIAYAAIAAAiIAWAAQATAAAJAIQAIAGAAAQQAAAQgIAIQgJAHgTAAgAgQAhIAVAAQATAAAAgQQAAgJgFgDQgEgEgKAAIgVAAg");
	this.shape_2.setTransform(33,0.2,0.692,0.693);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvAwIAAgPIACAAQALAAAFgLQAEgMAAgZIAAgTQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFgCIACgIIBOAAIAABeIgTAAIAAhQIgjAAIAAAUQAAAggJAPQgIAPgUAAg");
	this.shape_3.setTransform(25.7,0.3,0.692,0.693);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAwIAAhRQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgFgCIACgJIAWAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAABdg");
	this.shape_4.setTransform(20.5,0.2,0.692,0.693);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiAwIAAhRQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIgFgCIACgJIBMAAIAAAPIg0AAIAAAYIAaAAQARAAAIAHQAIAGAAAPQAAAPgIAGQgIAHgRAAgAgQAiIAYAAQAQAAAAgOQAAgPgQAAIgYAAg");
	this.shape_5.setTransform(15.8,0.2,0.692,0.693);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVAwIAAgkIgTAAIgUAkIgVAAIAXgmQgUgEAAgXQAAgQAIgHQAIgHATAAIApAAIAABfgAgOgdQgDAEAAAIQAAAQARAAIAVAAIAAgfIgVAAQgJAAgFADg");
	this.shape_6.setTransform(6.8,0.2,0.692,0.693);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAmQgLgMAAgaQAAgZALgMQAMgMAYAAQARAAANAFIgDANQgKgCgOAAQgQgBgHAJQgIAHAAASQAAASAIAJQAHAHAQAAQALAAAPgDIAAAPQgQADgNAAQgYAAgMgLg");
	this.shape_7.setTransform(0.7,0.2,0.692,0.693);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfAwIAAhRQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgFgCIACgJIBKAAIAAAPIgyAAIAAAZIAnAAIAAANIgnAAIAAAbIAzAAIAAAPg");
	this.shape_8.setTransform(-5.3,0.2,0.692,0.693);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIAwIAAhQIggAAIAAgPIBQAAIAAAPIgeAAIAABQg");
	this.shape_9.setTransform(-11.4,0.2,0.692,0.693);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAeA/IAAhFIgyBFIgTAAIAAhRQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBIgFgCIABgIIAYAAIAABFIAyhFIASAAIAABfgAgOgsQgFgFAAgNIAMAAQAAALALAAQALAAAAgLIANAAQAAAXgYAAQgLAAgHgFg");
	this.shape_10.setTransform(-18.4,-0.8,0.692,0.693);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcAwIgHgWIgpAAIgHAWIgTAAQAGgVALgcQALgfAIgPIAUAAQAJAPALAfQALAcAGAVgAAQAMQgHgVgJgVQgJAVgHAVIAgAAIAAAAg");
	this.shape_11.setTransform(-25.3,0.2,0.692,0.693);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAcAwIAAgpIgwAAIAAApIgTAAIAAhRQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgFgCIABgJIAXAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAmIAwAAIAAgoIATAAIAABfg");
	this.shape_12.setTransform(-32.5,0.2,0.692,0.693);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkAtIAAgPQARAFAOAAQAMAAAFgEQAGgDAAgHQAAgPgXAAIgRAAIAAgNIARAAQAUAAAAgOQAAgNgUAAQgNAAgPADIgCgNQAQgEAQgBQATAAAJAHQAJAGAAAOQAAARgOAEQARADAAAUQAAAOgJAHQgKAGgVAAQgSAAgPgEg");
	this.shape_13.setTransform(-39.1,0.2,0.692,0.693);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFAwIAAhRQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgFgCIABgJIAXAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAABdg");
	this.shape_14.setTransform(-43.7,0.2,0.692,0.693);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAkA7IAAgXIhHAAIAAAXIgSAAIAAglIAIAAQAPgKAAglIAAgUQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgCIABgIIBOAAIAABQIAMAAIAAAlgAgMgYQAAAhgKANIAuAAIAAhCIgkAAg");
	this.shape_15.setTransform(-49,1,0.692,0.693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnTxt, new cjs.Rectangle(-52.7,-5.1,105.4,10.3), null);


(lib.btnBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AqzCMIAAkXIVnAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnBg, new cjs.Rectangle(-69.2,-14,138.5,28.1), null);


(lib.bgImg4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape.setTransform(-0.4,237.5,1.016,1.016);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSBLQAXggAAgrQAAgqgXggIAOAAQAXAfAAArQAAArgXAgg");
	this.shape_1.setTransform(-5.5,233,1.016,1.016);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghAwQgLgPAAghQAAggALgPQALgOAWAAQAYAAAKAOQALAPgBAgQABAhgLAPQgKAOgYAAQgWAAgLgOgAgXgmQgGAMAAAaQAAAbAGAMQAIALAPAAQAQAAAIgLQAGgMAAgbQAAgagGgMQgIgMgQABQgPgBgIAMg");
	this.shape_2.setTransform(-13.2,232.1,1.016,1.016);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKA8IAAhrIghAQIAAgNIAigPIANAAIAAB3g");
	this.shape_3.setTransform(-24.4,232.1,1.016,1.016);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggBLIA0iVIANAAIg0CVg");
	this.shape_4.setTransform(-32.5,233,1.016,1.016);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggA3QgKgIAAgRQAAgOAGgIQAGgGAPgDQgYgEAAgZQAAgRAJgHQAKgIAUABQAWgBAJAIQAKAHAAARQAAAZgZAEQAPADAGAGQAGAIAAAOQAAARgKAIQgKAIgXgBQgWABgKgIgAgWAMQgGAGAAALQAAAMAHAGQAHAEAOAAQAQAAAGgEQAHgGAAgMQAAgLgGgGQgHgFgQgDQgPADgHAFgAgUguQgGAGAAALQAAAKAGAGQAHAFANACQAOgCAHgFQAGgGAAgKQAAgLgGgGQgGgEgPAAQgNAAgHAEg");
	this.shape_5.setTransform(-41.3,232.1,1.016,1.016);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmA5IAAgLQAOAEAPAAQASAAAIgGQAHgGABgOQAAgMgJgHQgIgFgSAAIgZABIAAg9IBFAAIAAALIg4AAIAAAnIAQAAQAYAAAKAIQALAIAAATQAAATgLAJQgMAJgYgBQgQABgOgFg");
	this.shape_6.setTransform(-51.8,232.2,1.016,1.016);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_7.setTransform(-66,233.8,1.016,1.016);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIACgIIASAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAJgLATABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAHgHQAFgIABgRQgBgTgFgIQgHgIgOAAQgNAAgGAGg");
	this.shape_8.setTransform(-76.1,235.6,1.016,1.016);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_9.setTransform(-86,233.8,1.016,1.016);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAmA5IAAgaIhKAAIAAAaIgOAAIAAglIAJAAQAHgFAEgKQADgKAAgUIAAgSQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgFgCIABgIIBGAAIAABMIAOAAIAAAlgAgOgYQAAAhgKALIAvAAIAAhAIglAAg");
	this.shape_10.setTransform(-96.5,235.2,1.016,1.016);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAdA/IAAhDIgxBDIgOAAIAAhKQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgGgDIACgHIARAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAABBIAwhDIAOAAIAABWgAgXg+IALAAQAAAQAQAAQAJAAAEgDQADgEAAgJIALAAQAAAOgHAGQgGAGgOAAQgbAAAAgag");
	this.shape_11.setTransform(-107.6,231.9,1.016,1.016);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIAFACIgBAIIgPAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgMAAgGADg");
	this.shape_12.setTransform(-117.2,233.8,1.016,1.016);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggA8IAAhsQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAIgFgDIABgGIBOAAIAAALIg5AAIAABsg");
	this.shape_13.setTransform(-124.4,232.1,1.016,1.016);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_14.setTransform(125.5,215.5,1.016,1.016);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrAtIAAgMIACAAQALAAAEgLQAFgLAAgYIAAgSIgBgDIgGgCIACgIIBGAAIAABXIgOAAIAAhLIglAAIAAAUQAAAegIANQgIAOgRAAg");
	this.shape_15.setTransform(117.7,212,1.016,1.016);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghA/IAAgLIAEABQAJAAAEgFQAFgEAEgKIADgJIglhYIAPAAIAcBGIAZhGIAPAAIglBjQgFAQgHAFQgHAHgNgBg");
	this.shape_16.setTransform(109.2,213.9,1.016,1.016);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIAwAAQAbAAAAAYQAAAOgMAEQAPADAAARQAAANgHAGQgHAGgOAAgAgTAiIAbAAQASAAAAgPQAAgPgSAAIgbAAgAgTgFIAaAAQAQAAAAgOQAAgNgQAAIgaAAg");
	this.shape_17.setTransform(100,211.9,1.016,1.016);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLAUIAJgnIAPAAIgNAng");
	this.shape_18.setTransform(89.4,216.9,1.016,1.016);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIAvAAQAbAAAAAYQAAAPgMADQAPADAAARQAAANgHAGQgHAGgOAAgAgTAiIAcAAQARAAAAgPQAAgPgRAAIgcAAgAgTgFIAaAAQAQAAAAgOQAAgNgQAAIgaAAg");
	this.shape_19.setTransform(82.7,211.9,1.016,1.016);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEA9IAAhJQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgFgDIACgHIARAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAABUgAAJgzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIgAgagzQAAgJAJAAQAKAAAAAJQAAAIgKAAQgJAAAAgIg");
	this.shape_20.setTransform(75.8,210.1,1.016,1.016);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_21.setTransform(68.3,211.9,1.016,1.016);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAfA8Igtg3IgMAMIAAArIgOAAIAAhsQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGgDIACgGIATAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAA6IA4g7IARAAIg0A3IA2BAg");
	this.shape_22.setTransform(58,210.2,1.016,1.016);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_23.setTransform(46.6,215.5,1.016,1.016);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAiAsIAAhCIgaAnIgDAAIgFAAIgDgEIgYgjIAABCIgNAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIAQAAQAEAAADAFIAaApIAdguIAPAAIAABXg");
	this.shape_24.setTransform(38.4,211.9,1.016,1.016);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAFBLQgXggAAgrQAAgrAXgfIAOAAQgXAgAAAqQAAArAXAgg");
	this.shape_25.setTransform(30.8,211.1,1.016,1.016);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAAAjIAYgjIgYgiIAOAAIAZAiIgZAjgAgmAjIAYgjIgYgiIAOAAIAYAiIgYAjg");
	this.shape_26.setTransform(18.9,211.9,1.016,1.016);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIAFACIgBAIIgPAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgMAAgGADg");
	this.shape_27.setTransform(9.6,211.9,1.016,1.016);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAcAsIAAgnIgvAAIAAAnIgPAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAAkIAvAAIAAgmIAOAAIAABXg");
	this.shape_28.setTransform(-0.9,211.9,1.016,1.016);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFA9IAAhJQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgGgDIACgHIASAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAABUgAAJgzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIgAgagzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIg");
	this.shape_29.setTransform(-7.9,210.1,1.016,1.016);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAPAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAPAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgVAAQghAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgJgDgNAAQgNAAgFADg");
	this.shape_30.setTransform(-14.7,211.9,1.016,1.016);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBIgFgCIABgIIASAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAIgLAUABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQALAHANABQAPgBAGgHQAGgIAAgRQAAgTgGgIQgHgIgOAAQgMAAgGAGg");
	this.shape_31.setTransform(-24.9,213.7,1.016,1.016);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAWAsIgfgmIgIAIIAAAeIgOAAIAAhKQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAnIAmgpIARAAIgmApIAnAug");
	this.shape_32.setTransform(-34.4,211.9,1.016,1.016);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgtA8IAAgMIAMABQASAAAJgTIACgEIgvhWIARAAIAlBJIAhhJIAQAAIgsBcQgIAQgIAHQgJAHgPgBIgNgBg");
	this.shape_33.setTransform(-43.6,210.3,1.016,1.016);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgfAjQgLgLAAgYQAAgXALgLQAKgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAHgHAAgTQAAgRgHgIQgHgIgPAAQgOAAgHAIg");
	this.shape_34.setTransform(-58.7,211.9,1.016,1.016);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKIgBgDIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_35.setTransform(-69.3,211.9,1.016,1.016);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgcAjQgLgLABgYQgBgXALgLQAJgLAVAAQAUAAAJALQAIAKABAYIAAAEIhBAAQABAQAIAIQAIAHAQAAQAOAAAOgFIAAAMQgMAEgQAAQgYAAgMgLgAAagFQgBgPgFgHQgGgHgMAAQgNAAgHAHQgGAHgBAPIAzAAIAAAAg");
	this.shape_36.setTransform(-79,211.9,1.016,1.016);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgoA8IAAhsQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAIgGgDIACgGIA0AAQAWgBALAKQAKAIAAAUQAAATgKAIQgLAJgWAAIggAAIAAAugAgaACIAfAAQAQAAAGgFQAHgFAAgOQAAgOgHgFQgGgHgQAAIgfAAg");
	this.shape_37.setTransform(-89.2,210.2,1.016,1.016);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAZAjIgZgjIAZgiIAOAAIgYAiIAYAjgAgNAjIgZgjIAZgiIANAAIgXAiIAXAjg");
	this.shape_38.setTransform(-99.5,211.9,1.016,1.016);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGA8IAAhsIgqAAIAAgLIBiAAIAAALIgrAAIAABsg");
	this.shape_39.setTransform(-113.6,210.2,1.016,1.016);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAoA8IgKgfIg7AAIgJAfIgQAAQAIgdANgjQAOgkAMgTIAQAAQALATAOAkQANAjAIAdgAAaARQgPgrgLgUQgLAVgOAqIAzAAIAAAAg");
	this.shape_40.setTransform(-123.4,210.2,1.016,1.016);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfAsIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAfIAZAAQAQAAAIAHQAHAFAAAOQAAAPgHAGQgIAHgQAAgAgRAhIAXAAQAKAAAEgEQAFgEAAgJQAAgQgTAAIgXAAg");
	this.shape_41.setTransform(-44.1,189.9,1.016,1.016);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_42.setTransform(-52.9,189.9,1.016,1.016);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_43.setTransform(-62.6,189.9,1.016,1.016);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAmA5IAAgaIhLAAIAAAaIgNAAIAAglIAJAAQAHgFADgKQADgJAAgVIAAgSIgBgDIgFgCIABgIIBGAAIAABMIAOAAIAAAlgAgOgYQAAAhgKALIAvAAIAAhAIglAAg");
	this.shape_44.setTransform(-73.2,191.3,1.016,1.016);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHABgTQgBgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_45.setTransform(-83.5,189.9,1.016,1.016);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIAvAAQAbAAAAAYQAAAOgLAEQAOADAAARQAAANgHAGQgGAGgPAAgAgSAiIAbAAQARAAAAgPQAAgIgEgDQgEgEgJAAIgbAAgAgSgFIAZAAQAQAAAAgOQAAgNgQAAIgZAAg");
	this.shape_46.setTransform(-93.6,189.9,1.016,1.016);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgfAjQgLgLAAgYQAAgXALgLQAJgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgJgLgAgVgZQgGAIgBARQABATAGAHQAHAIAOAAQAPAAAHgIQAHgHAAgTQAAgRgHgIQgHgIgPAAQgOAAgHAIg");
	this.shape_47.setTransform(-103.4,189.9,1.016,1.016);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBIgFgCIABgIIATAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAAIQAJgMATABQAUgBAJAMQAJAKAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAGgHQAGgIAAgRQAAgTgGgIQgGgIgOAAQgNAAgGAGg");
	this.shape_48.setTransform(-113.8,191.7,1.016,1.016);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAbAsIAAhLIgvAAIAABLIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIBRAAIAABXg");
	this.shape_49.setTransform(-124.5,189.9,1.016,1.016);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgiA/IAAgLIAGABQAIAAAEgFQAFgDAEgLIADgJIgmhXIAQAAIAcBFIAZhFIAQAAIgmBiQgFAQgHAFQgHAHgNgBg");
	this.shape_50.setTransform(85.6,170,1.016,1.016);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgiApIAAgLQAOAFAQAAQAYAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgVAAQgLAAgPAFIgDgLQAOgFARAAQAhAAABAYQAAARgPAEQARACAAATQABANgKAGQgJAGgSAAQgRAAgPgFg");
	this.shape_51.setTransform(77,168,1.016,1.016);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAxhDIAOAAIAABXg");
	this.shape_52.setTransform(67.2,168,1.016,1.016);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgkBAIAAhwIgBgDIgGgCIABgHIASAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAJgLATABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQALAHANABQAPgBAGgHQAGgIAAgRQAAgTgGgIQgGgIgPAAQgMAAgGAGg");
	this.shape_53.setTransform(57.1,169.8,1.016,1.016);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAbAsIAAhLIgvAAIAABLIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIACgIIBRAAIAABXg");
	this.shape_54.setTransform(46.5,168,1.016,1.016);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAWAAALALQAKALAAAXQAAAYgKALQgLALgWAAQgVAAgLgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAGgIQAHgHAAgTQAAgRgHgIQgGgIgPAAQgOAAgHAIg");
	this.shape_55.setTransform(32.3,168,1.016,1.016);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZAsIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgFgCIABgIIA+AAIAAAMIgqAAIAABLg");
	this.shape_56.setTransform(24,168,1.016,1.016);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_57.setTransform(14.9,168,1.016,1.016);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_58.setTransform(4.3,168,1.016,1.016);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIAvAAQAbAAAAAYQAAAOgLAEQAOADAAARQAAANgHAGQgGAGgPAAgAgSAiIAbAAQARAAAAgPQAAgIgEgDQgEgEgJAAIgbAAgAgSgFIAZAAQAQAAAAgOQAAgNgQAAIgZAAg");
	this.shape_59.setTransform(-5.5,168,1.016,1.016);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHABgTQgBgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_60.setTransform(-15.4,168,1.016,1.016);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgsAtIAAgMIAEAAQAKAAAEgLQAFgLAAgYIAAgSIgBgDIgGgCIACgHIBGAAIAABWIgOAAIAAhLIglAAIAAAUQAAAegHANQgIAOgSAAg");
	this.shape_61.setTransform(-26.3,168.1,1.016,1.016);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAGgIQAHgHAAgTQAAgRgHgIQgGgIgPAAQgOAAgHAIg");
	this.shape_62.setTransform(-35.9,168,1.016,1.016);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZAsIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgFgCIABgIIA+AAIAAAMIgqAAIAABLg");
	this.shape_63.setTransform(-44.2,168,1.016,1.016);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag6AsIAAhKQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAABKIApAAIAAhMIAOAAIAABMIApAAIAAhMIAOAAIAABXg");
	this.shape_64.setTransform(-60.3,168,1.016,1.016);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_65.setTransform(-72.4,168,1.016,1.016);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIABgHIATAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAIgLAUABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAOABQAPgBAGgHQAHgIgBgRQABgTgHgIQgGgIgPAAQgMAAgGAGg");
	this.shape_66.setTransform(-82.6,169.8,1.016,1.016);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgZAsIAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIA/AAIAAAMIgrAAIAABLg");
	this.shape_67.setTransform(-91.4,168,1.016,1.016);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAKAAAAAKQAAAJgKAAQgIAAAAgJg");
	this.shape_68.setTransform(-97.7,166.1,1.016,1.016);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgiApIAAgLQAOAFAPAAQAZAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgWAAQgKAAgQAFIgCgLQANgFASAAQAhAAAAAYQAAARgNAEQAQACABATQgBANgIAGQgKAGgSAAQgRAAgPgFg");
	this.shape_69.setTransform(-103.9,168,1.016,1.016);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_70.setTransform(-113,168,1.016,1.016);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgpA8IAAhsQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgFgDIABgGIA0AAQAWgBAKAKQAKAIAAAUQAAATgKAIQgKAJgWAAIggAAIAAAugAgaACIAfAAQAQAAAGgFQAHgFAAgOQAAgOgHgFQgGgHgQAAIgfAAg");
	this.shape_71.setTransform(-123.6,166.3,1.016,1.016);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_72.setTransform(-46.5,149.7,1.016,1.016);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIAFACIgBAIIgPAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgZAUQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgXAAAAAPg");
	this.shape_73.setTransform(-53.4,146,1.016,1.016);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgZAkQgJgIAAgTIAAgpQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgGgDIABgIIATAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAyQAAAOAGAGQAFAFAMAAQANAAAGgFQAFgGAAgOIAAg0IAPAAIAAA1QAAATgJAIQgJAJgVAAQgTAAgJgJg");
	this.shape_74.setTransform(-63.7,146.1,1.016,1.016);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_75.setTransform(-70.4,149.7,1.016,1.016);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgPAdIAAguQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgKgDIABgIIALAAIAAgaIAOAAIAAAaIAdAAIAAAMIgdAAIAAAwQAAARAQAAQAHAAAGgBIAAALQgGACgJAAQgcAAAAgdg");
	this.shape_76.setTransform(-76,144.8,1.016,1.016);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgFA/QAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhvQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgGgCIABgHIARAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAABwQAAABABAAQAAABAAAAQAAAAAAAAQAAABABAAIAFACIgCAHg");
	this.shape_77.setTransform(-81.3,144,1.016,1.016);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZAkQgJgIAAgTIAAgpQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgGgDIABgIIATAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAyQAAAOAGAGQAFAFAMAAQANAAAGgFQAFgGAAgOIAAg0IAPAAIAAA1QAAATgJAIQgJAJgVAAQgTAAgJgJg");
	this.shape_78.setTransform(-88.8,146.1,1.016,1.016);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAPAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAOAAQATAAAKAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgVAAQghAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgJgDgNAAQgNAAgFADg");
	this.shape_79.setTransform(-98.4,146,1.016,1.016);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAZAtQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAg0QAAgMgFgGQgFgFgMAAQgQAAgJAHIAABGIgPAAIAAhKIgBgDIgFgCIACgIIASAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAGQAKgKASAAQARAAAJAIQAHAIABATIAAAqQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAIAFACIgBAIg");
	this.shape_80.setTransform(-108.5,145.9,1.016,1.016);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgbAjQgLgLAAgYQAAgXAKgLQAJgLAVAAQAUAAAIALQAJAKAAAYIAAAEIhAAAQABAQAIAIQAIAHARAAQAOAAANgFIAAAMQgMAEgQAAQgYAAgLgLgAAagFQgBgPgFgHQgGgHgMAAQgNAAgGAHQgHAHgBAPIAzAAIAAAAg");
	this.shape_81.setTransform(-118.5,146,1.016,1.016);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgVAtIAAhKQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgCIABgIIATAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAJQAJgNASAAIAJABIgDAMIgIgBQgOAAgLAKIAABDg");
	this.shape_82.setTransform(-125.7,145.9,1.016,1.016);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgEgCIABgIIARAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIAABVgAgHgzQAAgKAJAAQAJAAAAAKQAAAJgJAAQgJAAAAgJg");
	this.shape_83.setTransform(129.8,122.2,1.016,1.016);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_84.setTransform(123.7,124.1,1.016,1.016);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAcA/IAAhDIgwBDIgOAAIAAhKQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgGgDIACgHIARAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABBIAxhDIAOAAIAABWgAgXg+IALAAQAAAJAEAEQADADAIAAQARAAAAgQIALAAQAAAagcAAQgaAAAAgag");
	this.shape_85.setTransform(114.1,122.1,1.016,1.016);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_86.setTransform(104.4,124.1,1.016,1.016);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgXAjQgLgLAAgYQAAgXALgLQAKgLAVAAQAPAAAMAEIgDALQgIgDgOAAQgPAAgHAIQgHAIAAARQAAATAHAHQAHAIAPAAQAOAAAKgDIAAAMQgLADgPAAQgVAAgKgLg");
	this.shape_87.setTransform(95.3,124.1,1.016,1.016);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsIABACIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_88.setTransform(82.1,124.1,1.016,1.016);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_89.setTransform(71.7,124.1,1.016,1.016);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgfAsIAAhKQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIASAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAfIAZAAQARAAAHAHQAIAFAAAOQAAAPgIAGQgHAHgRAAgAgSAhIAXAAQALAAAEgEQAFgEgBgJQABgQgUAAIgXAAg");
	this.shape_90.setTransform(58.1,124.1,1.016,1.016);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgXAjQgLgLAAgYQAAgXALgLQAKgLAVAAQAQAAALAEIgCALQgJgDgOAAQgPAAgHAIQgHAIAAARQAAATAHAHQAHAIAPAAQAOAAAKgDIAAAMQgMADgOAAQgVAAgKgLg");
	this.shape_91.setTransform(49.3,124.1,1.016,1.016);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgcAjQgLgLAAgYQAAgXAKgLQAKgLAVAAQAUAAAJALQAJAKAAAYIgBAEIhAAAQABAQAIAIQAIAHAQAAQAOAAAOgFIAAAMQgMAEgRAAQgXAAgMgLgAAagFQgBgPgFgHQgGgHgMAAQgNAAgHAHQgGAHgBAPIAzAAIAAAAg");
	this.shape_92.setTransform(40.2,124.1,1.016,1.016);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_93.setTransform(31.6,124.1,1.016,1.016);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAcA/IAAhDIgwBDIgOAAIAAhKIgBgCIgGgDIACgHIARAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABBIAwhDIAPAAIAABWgAgXg+IAKAAQAAAQAQAAQARAAAAgQIALAAQAAAagcAAQgaAAAAgag");
	this.shape_94.setTransform(22,122.1,1.016,1.016);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAPAAAKADIAAgMQAAgVgZAAQgOAAgNAFIAAgMQAOgEAPAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_95.setTransform(12.3,124.1,1.016,1.016);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIAwAAQAbAAAAAYQAAAOgMAEQAPADAAARQAAANgHAGQgHAGgPAAgAgTAiIAbAAQARAAAAgPQAAgIgEgDQgDgEgKAAIgbAAgAgTgFIAaAAQAQAAAAgOQAAgNgQAAIgaAAg");
	this.shape_96.setTransform(2.5,124.1,1.016,1.016);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAPAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAOAAQATAAAKAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgVAAQghAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgJgDgNAAQgNAAgFADg");
	this.shape_97.setTransform(-7,124.1,1.016,1.016);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_98.setTransform(-17.4,124.1,1.016,1.016);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AghApIAAgLQANAFAQAAQAYAAAAgPQAAgJgGgDQgGgEgMAAIgRAAIAAgJIARAAQAVAAAAgOQAAgPgVAAQgMAAgOAFIgCgLQANgFAQAAQAjAAAAAYQgBARgOAEQASACgBATQABANgKAGQgIAGgUAAQgQAAgOgFg");
	this.shape_99.setTransform(-26.6,124.1,1.016,1.016);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgDA+IAAhKQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIARAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAJAAQAIAAABAKQgBAJgIAAQgJAAAAgJg");
	this.shape_100.setTransform(-33.2,122.2,1.016,1.016);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAmA5IAAgaIhLAAIAAAaIgNAAIAAglIAJAAQAHgFADgKQADgJAAgVIAAgSIgBgDIgFgCIABgIIBGAAIAABMIAOAAIAAAlgAgOgYQAAAhgKALIAvAAIAAhAIglAAg");
	this.shape_101.setTransform(-40.7,125.4,1.016,1.016);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAAAjIAYgjIgYgiIAOAAIAZAiIgZAjgAgmAjIAYgjIgYgiIAOAAIAYAiIgYAjg");
	this.shape_102.setTransform(-59,124.1,1.016,1.016);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgEA9IAAhJQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgDIABgHIARAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAABUgAAJgzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIgAgagzQAAgJAJAAQAKAAAAAJQAAAIgKAAQgJAAAAgIg");
	this.shape_103.setTransform(-65.8,122.3,1.016,1.016);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIASAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAKAAgBAKQABAJgKAAQgIAAAAgJg");
	this.shape_104.setTransform(-71.5,122.2,1.016,1.016);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAkA5IAAgaIhNAAIAAhKQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABKIAvAAIAAhMIAPAAIAABMIAOAAIAAAlg");
	this.shape_105.setTransform(-78.9,125.4,1.016,1.016);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKIgBgDIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_106.setTransform(-90,124.1,1.016,1.016);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAPAAAKADIAAgMQAAgVgZAAQgOAAgNAFIAAgMQAOgEAPAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_107.setTransform(-99.7,124.1,1.016,1.016);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBIgFgCIABgIIASAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAJgLATABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQALAHANABQAPgBAGgHQAGgIAAgRQAAgTgGgIQgGgIgPAAQgMAAgGAGg");
	this.shape_108.setTransform(-109.8,125.9,1.016,1.016);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgGBFIAAgSQgdAAgNgNQgOgNAAgZQAAgzA4gBIAAgQIANAAIAAAQQA4ABAAAzQAAAZgOANQgNANgdAAIAAASgAAHAoQAqgCAAgmQAAgngqgBgAgwAAQAAAmAqACIAAhQQgqABAAAng");
	this.shape_109.setTransform(-122.2,122.4,1.016,1.016);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgFA9IAAhJQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgGgDIACgHIASAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAABUgAAJgzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIgAgagzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIg");
	this.shape_110.setTransform(111.3,100.3,1.016,1.016);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgIAAgSQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_111.setTransform(104.2,102.1,1.016,1.016);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_112.setTransform(93.5,102.1,1.016,1.016);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAbAsIAAglQgNAEgNAAQgRAAgJgIQgIgGAAgQIAAgLQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgFgCIACgIIASAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIAAAUQgBAMAGAEQAFAFAMAAQALAAAMgDIAAgoIAOAAIAABXg");
	this.shape_113.setTransform(83.2,102.1,1.016,1.016);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgDA+IAAhKQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIARAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAJAAAAAKQAAAJgJAAQgIAAAAgJg");
	this.shape_114.setTransform(76.5,100.3,1.016,1.016);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAiAsIAAhCIgaAnIgDAAIgFAAIgDgEIgXgjIAABCIgNAAIAAhKQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIAQAAQAEAAADAFIAaApIAdguIAPAAIAABXg");
	this.shape_115.setTransform(68.5,102.1,1.016,1.016);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgfAjQgLgLAAgYQAAgXALgLQAJgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgJgLgAgUgZQgHAIAAARQAAATAHAHQAGAIAOAAQAPAAAHgIQAHgHgBgTQABgRgHgIQgHgIgPAAQgOAAgGAIg");
	this.shape_116.setTransform(57.9,102.1,1.016,1.016);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKIgBgDIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_117.setTransform(47.2,102.1,1.016,1.016);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_118.setTransform(37.2,102.1,1.016,1.016);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AglBAIAAhwIgBgDIgFgCIACgIIASAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAJgLATABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAGgHQAHgIAAgRQAAgTgHgIQgGgIgOAAQgNAAgGAGg");
	this.shape_119.setTransform(26.8,103.9,1.016,1.016);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_120.setTransform(17.5,102.1,1.016,1.016);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgXAjQgLgLAAgYQAAgXALgLQAKgLAVAAQAPAAAMAEIgDALQgIgDgOAAQgPAAgHAIQgHAIAAARQAAATAHAHQAHAIAPAAQAOAAAKgDIAAAMQgLADgPAAQgVAAgKgLg");
	this.shape_121.setTransform(9.1,102.1,1.016,1.016);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAPAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAPAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgVAAQghAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgJgDgNAAQgNAAgFADg");
	this.shape_122.setTransform(0.1,102.1,1.016,1.016);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgZAsIAAhKIgBgDIgFgCIABgIIA/AAIAAAMIgsAAIAABLg");
	this.shape_123.setTransform(-7.5,102.1,1.016,1.016);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAZAjIgZgjIAZgiIAOAAIgYAiIAYAjgAgNAjIgZgjIAZgiIANAAIgXAiIAXAjg");
	this.shape_124.setTransform(-16.1,102.1,1.016,1.016);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAWAAALALQAKALAAAXQAAAYgKALQgLALgWAAQgWAAgKgLgAgUgZQgIAIABARQgBATAIAHQAGAIAOAAQAPAAAGgIQAHgHAAgTQAAgRgHgIQgGgIgPAAQgOAAgGAIg");
	this.shape_125.setTransform(-29.8,102.1,1.016,1.016);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAlA5IAAgaIhKAAIAAAaIgNAAIAAglIAJAAQAHgFADgKQADgJAAgVIAAgSQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgFgCIABgIIBFAAIAABMIAPAAIAAAlgAgOgYQAAAhgKALIAvAAIAAhAIglAAg");
	this.shape_126.setTransform(-40.2,103.4,1.016,1.016);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIASAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAKAAgBAKQABAJgKAAQgIAAAAgJg");
	this.shape_127.setTransform(-52.2,100.3,1.016,1.016);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAuAsIgggnIgIAJIAAAeIgMAAIAAgeIgHgJIggAnIgRAAIAnguIgmgpIAQAAIAnAqIAAgqIAMAAIAAAqIAngqIARAAIgmApIAnAug");
	this.shape_128.setTransform(-60.9,102.1,1.016,1.016);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_129.setTransform(-72.3,102.1,1.016,1.016);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AglBAIAAhwQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAgBIgFgCIACgIIASAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAIgLAUABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAGgHQAGgIAAgRQAAgTgGgIQgHgIgNAAQgNAAgGAGg");
	this.shape_130.setTransform(-82.7,103.9,1.016,1.016);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_131.setTransform(-93,102.1,1.016,1.016);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAlA5IAAgaIhJAAIAAAaIgOAAIAAglIAIAAQAJgFACgKQAEgJAAgVIAAgSQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIBFAAIAABMIAPAAIAAAlgAgOgYQAAAhgKALIAuAAIAAhAIgkAAg");
	this.shape_132.setTransform(-103.4,103.4,1.016,1.016);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgUgZQgHAIAAARQAAATAHAHQAGAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgGAIg");
	this.shape_133.setTransform(-113.8,102.1,1.016,1.016);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAbAsIAAhLIgvAAIAABLIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIBRAAIAABXg");
	this.shape_134.setTransform(-124.5,102.1,1.016,1.016);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AghA/IAAgLIAFABQAIAAAEgFQAFgEAEgKIAEgJIgnhYIAQAAIAcBGIAZhGIAQAAIgmBjQgFAQgHAFQgHAHgOgBg");
	this.shape_135.setTransform(93.9,82.2,1.016,1.016);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AghApIAAgLQANAFAQAAQAYAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgVAAQgLAAgPAFIgDgLQAOgFAQAAQAiAAAAAYQAAARgOAEQARACAAATQAAANgJAGQgJAGgTAAQgQAAgOgFg");
	this.shape_136.setTransform(85.3,80.2,1.016,1.016);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_137.setTransform(75.6,80.2,1.016,1.016);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBIgFgCIABgIIASAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAIgLAUABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAGgHQAGgIAAgRQAAgTgGgIQgGgIgOAAQgNAAgGAGg");
	this.shape_138.setTransform(65.5,82,1.016,1.016);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAbAsIAAhLIgvAAIAABLIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIBRAAIAABXg");
	this.shape_139.setTransform(54.8,80.2,1.016,1.016);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgUgZQgHAIAAARQAAATAHAHQAGAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgGAIg");
	this.shape_140.setTransform(40.6,80.2,1.016,1.016);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgZAsIAAhKQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIA/AAIAAAMIgrAAIAABLg");
	this.shape_141.setTransform(32.4,80.2,1.016,1.016);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIgBARQABATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_142.setTransform(23.3,80.2,1.016,1.016);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_143.setTransform(12.6,80.2,1.016,1.016);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AggAsIAAhKIgBgDIgGgCIACgIIAvAAQAbAAAAAYQAAAOgMAEQAPADAAARQAAANgHAGQgHAGgOAAgAgTAiIAcAAQARAAAAgPQAAgPgRAAIgcAAgAgTgFIAaAAQAQAAAAgOQAAgNgQAAIgaAAg");
	this.shape_144.setTransform(2.9,80.2,1.016,1.016);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_145.setTransform(-7,80.2,1.016,1.016);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgrAtIAAgMIACAAQALAAAFgLQAEgLAAgYIAAgSQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAgBIgGgCIACgIIBGAAIAABXIgOAAIAAhLIglAAIAAAUQAAAegHANQgIAOgSAAg");
	this.shape_146.setTransform(-17.9,80.2,1.016,1.016);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_147.setTransform(-27.6,80.2,1.016,1.016);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgZAsIAAhKQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIA+AAIAAAMIgqAAIAABLg");
	this.shape_148.setTransform(-35.8,80.2,1.016,1.016);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgiA/IAAgLIAGABQAIAAAEgFQAFgEAEgKIADgJIgmhYIAQAAIAcBGIAZhGIAQAAIgmBjQgFAQgHAFQgHAHgNgBg");
	this.shape_149.setTransform(-48.6,82.2,1.016,1.016);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("Ag6AsIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABKIApAAIAAhMIAOAAIAABMIApAAIAAhMIAOAAIAABXg");
	this.shape_150.setTransform(-61.1,80.2,1.016,1.016);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAPAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAOAAQATAAAKAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgVAAQghAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgJgDgOAAQgMAAgFADg");
	this.shape_151.setTransform(-73.2,80.2,1.016,1.016);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBIgFgCIABgIIATAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAAHQAJgLATABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAGgHQAGgIAAgRQAAgTgGgIQgGgIgOAAQgNAAgGAGg");
	this.shape_152.setTransform(-83.4,82,1.016,1.016);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgYAsIAAhKQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIA+AAIAAAMIgrAAIAABLg");
	this.shape_153.setTransform(-92.2,80.2,1.016,1.016);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgDA+IAAhKQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIARAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAKAAAAAKQAAAJgKAAQgIAAAAgJg");
	this.shape_154.setTransform(-98.5,78.3,1.016,1.016);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AghApIAAgLQANAFAQAAQAYAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgVAAQgLAAgPAFIgDgLQAOgFAQAAQAjAAAAAYQAAARgPAEQARACAAATQAAANgJAGQgJAGgTAAQgQAAgOgFg");
	this.shape_155.setTransform(-104.7,80.2,1.016,1.016);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIgBARQABATAGAHQAHAIAOAAQAPAAAHgIQAGgHABgTQgBgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_156.setTransform(-113.8,80.2,1.016,1.016);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIABgIIASAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAAHQAJgLATABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgPgtQgHAGAAANIAAAjQAKAHAPABQAPgBAFgHQAHgIAAgRQAAgTgHgIQgGgIgOAAQgNAAgFAGg");
	this.shape_157.setTransform(-124.2,82,1.016,1.016);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_158.setTransform(40.1,58.2,1.016,1.016);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIAvAAQAbAAAAAYQAAAPgLADQAOADAAARQAAANgHAGQgGAGgPAAgAgSAiIAbAAQARAAAAgPQAAgPgRAAIgbAAgAgSgFIAZAAQAQAAAAgOQAAgNgQAAIgZAAg");
	this.shape_159.setTransform(30.2,58.2,1.016,1.016);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_160.setTransform(20.4,58.2,1.016,1.016);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAiAsIAAhCIgaAnIgDAAIgFAAIgDgEIgXgjIAABCIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIAQAAQAEAAADAFIAaApIAdguIAPAAIAABXg");
	this.shape_161.setTransform(9.1,58.2,1.016,1.016);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgiA/IAAgLIAGABQAIAAAEgFQAFgDAEgLIADgJIgmhYIAQAAIAcBGIAZhGIAQAAIgmBjQgFAQgHAFQgHAHgNgBg");
	this.shape_162.setTransform(-1,60.2,1.016,1.016);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAcA/IAAhDIgwBDIgOAAIAAhKIgBgCIgGgDIACgHIARAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABBIAwhDIAPAAIAABWgAgXg+IAKAAQAAAQAQAAQARAAAAgQIALAAQAAAagcAAQgaAAAAgag");
	this.shape_163.setTransform(-15.1,56.2,1.016,1.016);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AghA/IAAgLIAEABQAJAAAFgFQAEgDAEgLIADgJIglhYIAPAAIAcBGIAZhGIAPAAIglBjQgFAQgHAFQgHAHgOgBg");
	this.shape_164.setTransform(-28.7,60.2,1.016,1.016);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_165.setTransform(-37.6,58.2,1.016,1.016);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAPAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAOAAQATAAAKAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgVAAQghAAAAgagAgaAUQAAAPAWAAQAYAAAAgTIAAgIQgJgDgOAAQgXAAAAAPg");
	this.shape_166.setTransform(-46.3,58.2,1.016,1.016);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAlA5IAAgaIhKAAIAAAaIgNAAIAAglIAJAAQAHgFADgKQADgJAAgVIAAgSQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgFgCIABgIIBGAAIAABMIAOAAIAAAlgAgOgYQAAAhgKALIAvAAIAAhAIglAAg");
	this.shape_167.setTransform(-56.8,59.5,1.016,1.016);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAuAsIgggnIgIAJIAAAeIgMAAIAAgeIgHgJIghAnIgQAAIAnguIgmgpIAQAAIAnAqIAAgqIAMAAIAAAqIAngqIARAAIgnApIAoAug");
	this.shape_168.setTransform(-73.2,58.2,1.016,1.016);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgfAjQgLgLAAgYQAAgXALgLQAJgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgJgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAHgHAAgTQAAgRgHgIQgHgIgPAAQgOAAgHAIg");
	this.shape_169.setTransform(-84.6,58.2,1.016,1.016);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAWAsIgfgmIgJAIIAAAeIgNAAIAAhKQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAnIAngpIARAAIgmApIAnAug");
	this.shape_170.setTransform(-93.6,58.2,1.016,1.016);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_171.setTransform(-103,58.2,1.016,1.016);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_172.setTransform(-111.4,58.2,1.016,1.016);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_173.setTransform(-124.4,58.2,1.016,1.016);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgMAUIALgnIAOAAIgNAng");
	this.shape_174.setTransform(120.8,41.3,1.016,1.016);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgEA9IAAhJQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgDIABgHIARAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAABUgAAJgzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIgAgagzQAAgJAJAAQAKAAAAAJQAAAIgKAAQgJAAAAgIg");
	this.shape_175.setTransform(116.7,34.4,1.016,1.016);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIASAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAKAAgBAKQABAJgKAAQgIAAAAgJg");
	this.shape_176.setTransform(111,34.4,1.016,1.016);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAkA5IAAgaIhNAAIAAhKQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABKIAvAAIAAhMIAPAAIAABMIAOAAIAAAlg");
	this.shape_177.setTransform(103.6,37.6,1.016,1.016);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAXAsIgggmIgJAIIAAAeIgNAAIAAhKQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIASAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAnIAngpIARAAIgmApIAoAug");
	this.shape_178.setTransform(93.6,36.2,1.016,1.016);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAnA8IgJgfIg7AAIgKAfIgOAAQAGgcAOgjQAOglAMgTIAQAAQALATAOAlQANAiAIAdgAAaARQgNglgNgaQgLAVgOAqIAzAAIAAAAg");
	this.shape_179.setTransform(83.1,34.5,1.016,1.016);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAXAsIAAgiIgXAAIgVAiIgPAAIAXgkQgVgDABgVQgBgOAIgGQAHgHAQAAIAoAAIAABXgAgUgQQAAAQATAAIAYAAIAAggIgYAAQgTAAAAAQg");
	this.shape_180.setTransform(68,36.2,1.016,1.016);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_181.setTransform(58,36.2,1.016,1.016);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_182.setTransform(47.6,36.2,1.016,1.016);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgcAjQgKgLgBgYQAAgXAKgLQAKgLAVAAQAUAAAJALQAJAKAAAYIAAAEIhAAAQAAAQAIAIQAIAHAQAAQAOAAAOgFIAAAMQgLAEgSAAQgXAAgMgLgAAagFQAAgPgGgHQgFgHgNAAQgNAAgHAHQgGAHAAAPIAyAAIAAAAg");
	this.shape_183.setTransform(37.9,36.2,1.016,1.016);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAvAsIghgnIgHAJIAAAeIgMAAIAAgeIgIgJIggAnIgRAAIAoguIgngpIARAAIAnAqIAAgqIAMAAIAAAqIAngqIAQAAIgmApIAnAug");
	this.shape_184.setTransform(26.9,36.2,1.016,1.016);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgcAjQgLgLAAgYQAAgXAKgLQAKgLAVAAQAUAAAJALQAJAKAAAYIgBAEIhAAAQABAQAIAIQAIAHAQAAQAOAAAOgFIAAAMQgMAEgRAAQgXAAgMgLgAAagFQgBgQgFgGQgGgHgMAAQgNAAgHAHQgGAHgBAPIAzAAIAAAAg");
	this.shape_185.setTransform(15.7,36.2,1.016,1.016);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAiAsIAAhCIgaAnIgEAAIgEAAIgDgEIgXgjIAABCIgOAAIAAhKQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgFgCIACgIIAQAAQADAAADAFIAaApIAeguIAOAAIAABXg");
	this.shape_186.setTransform(4.8,36.2,1.016,1.016);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgfA2QgLgMAAgbQAAgmAMgSQALgSAZgCIAdgEIgCANIgaADQgQACgHAJQgHAIgDASQANgLASAAQAlAAABAsQAAAXgKAMQgKAKgXAAQgVAAgKgMgAgagCIgBASQAAAVAGAJQAHAIAOABQAPAAAGgIQAGgIAAgSQAAgSgGgHQgGgIgOAAQgPAAgMAKg");
	this.shape_187.setTransform(-5.8,34.2,1.016,1.016);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAWAAALALQAKALAAAXQAAAYgKALQgLALgWAAQgWAAgKgLgAgUgZQgIAIAAARQAAATAIAHQAGAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgGAIg");
	this.shape_188.setTransform(-16.2,36.2,1.016,1.016);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAcA/IAAhDIgwBDIgOAAIAAhKQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAIgFgDIACgHIARAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABBIAwhDIAPAAIAABWgAgXg+IAKAAQAAAQAQAAQARAAAAgQIALAAQAAAagcAAQgaAAAAgag");
	this.shape_189.setTransform(-31,34.3,1.016,1.016);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_190.setTransform(-45.5,36.2,1.016,1.016);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIAvAAQAbAAAAAYQAAAOgLAEQAOADAAARQAAANgHAGQgGAGgPAAgAgSAiIAbAAQARAAAAgPQAAgIgEgDQgEgEgJAAIgbAAgAgSgFIAZAAQAQAAAAgOQAAgNgQAAIgZAAg");
	this.shape_191.setTransform(-55.3,36.2,1.016,1.016);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgfAjQgLgLAAgYQAAgXALgLQAJgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgJgLgAgUgZQgIAIAAARQAAATAIAHQAGAIAOAAQAPAAAHgIQAHgHgBgTQABgRgHgIQgHgIgPAAQgOAAgGAIg");
	this.shape_192.setTransform(-65.2,36.2,1.016,1.016);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAiAsIAAhCIgbAnIgCAAIgFAAIgDgEIgYgjIAABCIgNAAIAAhKQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgCIACgIIAQAAQADAAADAFIAaApIAeguIAPAAIAABXg");
	this.shape_193.setTransform(-76.4,36.2,1.016,1.016);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AghA/IAAgLIAEABQAJAAAFgFQAEgEAEgKIAEgJIgmhXIAPAAIAdBFIAYhFIAPAAIglBiQgFAQgHAFQgHAHgOgBg");
	this.shape_194.setTransform(-86.6,38.3,1.016,1.016);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgfAjQgLgLAAgYQAAgXALgLQAKgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgKgLgAgUgZQgIAIAAARQAAATAIAHQAGAIAOAAQAPAAAHgIQAHgHAAgTQAAgRgHgIQgHgIgPAAQgOAAgGAIg");
	this.shape_195.setTransform(-100.3,36.2,1.016,1.016);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIACgIIASAAQAAABAAAAQABAAAAAAQAAAAAAABQABAAgBAAIAAAHQAJgLATABQAVgBAIALQAJALAAAZQAAAXgJALQgIAKgVAAQgRAAgLgJIAAAtgAgPgtQgHAGAAANIAAAjQALAHAOABQAPgBAFgHQAHgIAAgRQAAgTgHgIQgGgIgOAAQgNAAgFAGg");
	this.shape_196.setTransform(-110.7,38.1,1.016,1.016);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAoA8IAAhsIhIAAIAABsIgPAAIAAhsQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgGgDIABgGIBsAAIAAB3g");
	this.shape_197.setTransform(-122.9,34.5,1.016,1.016);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_198.setTransform(86.7,17.9,1.016,1.016);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAxhDIAOAAIAABXg");
	this.shape_199.setTransform(79.1,14.3,1.016,1.016);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_200.setTransform(68.7,14.3,1.016,1.016);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIARAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIAABVgAgGgzQAAgKAIAAQAKAAAAAKQAAAJgKAAQgIAAAAgJg");
	this.shape_201.setTransform(61.5,12.5,1.016,1.016);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAiAsIAAhCIgaAnIgEAAIgEAAQgBgBgCgDIgXgjIAABCIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgFgCIABgIIAQAAQAEAAACAFIAaApIAfguIANAAIAABXg");
	this.shape_202.setTransform(53.4,14.3,1.016,1.016);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_203.setTransform(43.2,14.3,1.016,1.016);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AghApIAAgLQANAFAQAAQAYAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgVAAQgLAAgPAFIgDgLQAOgFAQAAQAjAAAAAYQAAARgPAEQARACAAATQAAANgJAGQgJAGgTAAQgQAAgOgFg");
	this.shape_204.setTransform(34,14.3,1.016,1.016);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAYAsIgYgkIgYAkIgPAAIAfgsIgegrIAPAAIAXAiIAYgiIAPAAIgeArIAfAsg");
	this.shape_205.setTransform(21.1,14.3,1.016,1.016);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgEA9IAAhJQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgFgDIABgHIASAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAABUgAAIgzQAAgJAKAAQAJAAAAAJQAAAIgJAAQgKAAAAgIgAgagzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIg");
	this.shape_206.setTransform(14.3,12.5,1.016,1.016);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AghApIAAgLQANAFAQAAQAYAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgVAAQgMAAgPAFIgCgLQAOgFAQAAQAiAAAAAYQAAARgOAEQARACAAATQAAANgJAGQgJAGgTAAQgRAAgNgFg");
	this.shape_207.setTransform(3.9,14.3,1.016,1.016);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_208.setTransform(-9.9,14.3,1.016,1.016);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_209.setTransform(-19,14.3,1.016,1.016);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAWAAALALQAKALAAAXQAAAYgKALQgLALgWAAQgWAAgKgLgAgUgZQgIAIABARQgBATAIAHQAGAIAOAAQAPAAAGgIQAHgHAAgTQAAgRgHgIQgGgIgPAAQgOAAgGAIg");
	this.shape_210.setTransform(-28,14.3,1.016,1.016);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgfA2QgLgMAAgbQAAgmALgSQAMgSAZgCIAegEIgDANIgZADQgQACgIAJQgHAIgCASQAMgLASAAQAmAAgBAsQAAAXgKAMQgJAKgWAAQgWAAgKgMgAgagCIAAASQAAAVAFAJQAHAIAPABQAPAAAFgIQAHgIAAgSQAAgSgHgHQgFgIgOAAQgPAAgNAKg");
	this.shape_211.setTransform(-38.2,12.2,1.016,1.016);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_212.setTransform(-48.6,14.3,1.016,1.016);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AglBAIAAhwQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAgBIgFgCIACgIIASAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAIQAIgMAUABQAUgBAJAMQAJAKAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQALAHAOABQAOgBAGgHQAGgIABgRQgBgTgGgIQgGgIgOAAQgNAAgGAGg");
	this.shape_213.setTransform(-59,16.1,1.016,1.016);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsIABACIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_214.setTransform(-73,14.3,1.016,1.016);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_215.setTransform(-83.5,14.3,1.016,1.016);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AASA3QgHgHAAgRQAAgSAHgIQAHgGAPAAQAQAAAHAGQAHAJAAARQAAARgHAHQgHAIgQgBQgPABgHgIgAAaANQgEAFAAANQAAAMAEAFQAFAFAJAAQASAAAAgWQAAgXgSAAQgJAAgFAFgAgfA8IA1h3IAKAAIg2B3gAg+gEQgHgIAAgRQAAgSAHgHQAHgIAQABQAPgBAHAIQAHAIAAARQAAARgHAIQgHAGgPAAQgQAAgHgGgAg1guQgEAFAAAMQAAAMAEAFQAEAFAKABQASgBAAgWQAAgWgSAAQgKgBgEAGg");
	this.shape_216.setTransform(-100.4,12.6,1.016,1.016);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AghAwQgLgPAAghQAAggALgPQAKgOAXAAQAYAAAKAOQAKAPAAAgQAAAhgKAPQgKAOgYAAQgXAAgKgOgAgWgmQgIAMAAAaQAAAbAIAMQAHALAPAAQAQAAAHgLQAIgMAAgbQAAgagIgMQgHgMgQABQgPgBgHAMg");
	this.shape_217.setTransform(-113.6,12.6,1.016,1.016);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAKA8IAAhrIghAQIAAgNIAjgPIAMAAIAAB3g");
	this.shape_218.setTransform(-124.8,12.6,1.016,1.016);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_219.setTransform(126.5,-7.7,1.016,1.016);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_220.setTransform(118,-7.7,1.016,1.016);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AASA3QgHgHAAgRQAAgRAHgJQAHgGAPAAQAQAAAHAGQAHAJAAARQAAARgHAHQgHAIgQgBQgPABgHgIgAAWAfQAAAWASAAQAKAAAEgFQAEgFAAgMQAAgNgEgFQgEgFgKAAQgSAAAAAXgAgfA8IA1h3IAKAAIg2B3gAg+gEQgHgIAAgRQAAgSAHgHQAHgIAQABQAPgBAHAIQAHAIAAARQAAARgHAIQgHAGgPAAQgQAAgHgGgAg1guQgEAFAAAMQAAAMAEAFQAEAFAKABQASgBAAgWQAAgWgSAAQgKgBgEAGg");
	this.shape_221.setTransform(101.9,-9.4,1.016,1.016);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AghAwQgKgPAAghQAAggAKgPQALgOAWAAQAXAAALAOQAKAPAAAgQAAAhgKAPQgLAOgXAAQgWAAgLgOgAgWgmQgHAMAAAaQAAAbAHAMQAHALAPAAQAQAAAHgLQAHgMAAgbQAAgagHgMQgHgMgQABQgPgBgHAMg");
	this.shape_222.setTransform(88.7,-9.4,1.016,1.016);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgnA5IAAgLQAPAEAPAAQASAAAIgFQAIgHAAgNQAAgNgIgGQgJgFgUAAIgEAAIAAgIIAigqIg3AAIAAgLIBHAAIAAAKIgiAqQAoACAAAfQAAATgMAJQgLAJgZgBQgQABgPgFg");
	this.shape_223.setTransform(77.9,-9.3,1.016,1.016);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_224.setTransform(63.6,-7.7,1.016,1.016);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAlA5IAAgaIhKAAIAAAaIgNAAIAAglIAIAAQAIgFAEgKQACgJAAgVIAAgSQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIBFAAIAABMIAPAAIAAAlgAgOgYQAAAhgKALIAvAAIAAhAIglAAg");
	this.shape_225.setTransform(53.2,-6.3,1.016,1.016);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAJAAQAJAAAAAKQAAAJgJAAQgJAAAAgJg");
	this.shape_226.setTransform(41.3,-9.5,1.016,1.016);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIACgHIASAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAHQAHgLAUABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgKgJIAAAtgAgQgtQgFAGAAANIAAAjQAKAHAOABQAOgBAHgHQAFgIABgRQgBgTgFgIQgHgIgOAAQgNAAgGAGg");
	this.shape_227.setTransform(34.1,-5.9,1.016,1.016);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgDA+IAAhKQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgFgCIABgIIARAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAKAAgBAKQABAJgKAAQgIAAAAgJg");
	this.shape_228.setTransform(26.7,-9.5,1.016,1.016);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAiAsIAAhCIgaAnIgDAAIgFAAIgDgEIgYgjIAABCIgMAAIAAhKQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIAQAAQAEAAADAFIAaApIAdguIAPAAIAABXg");
	this.shape_229.setTransform(18.6,-7.7,1.016,1.016);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AghApIAAgLQANAFAQAAQAYAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgVAAQgLAAgPAFIgDgLQAOgFAQAAQAjAAAAAYQAAARgPAEQARACAAATQAAANgJAGQgJAGgTAAQgQAAgOgFg");
	this.shape_230.setTransform(8.9,-7.7,1.016,1.016);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHABgTQgBgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_231.setTransform(-0.3,-7.7,1.016,1.016);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIgGgCIABgHIASAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAHQAJgLAUABQAUgBAIALQAJALAAAZQAAAXgJALQgIAKgUAAQgSAAgLgJIAAAtgAgQgtQgFAGgBANIAAAjQALAHAOABQAPgBAFgHQAHgIgBgRQABgTgHgIQgGgIgOAAQgNAAgGAGg");
	this.shape_232.setTransform(-10.7,-5.9,1.016,1.016);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgiA/IAAgLIAGABQAIAAAEgFQAGgEADgKIAEgJIgnhXIAQAAIAcBFIAZhFIAQAAIgmBiQgFAQgHAFQgHAHgNgBg");
	this.shape_233.setTransform(-24.6,-5.7,1.016,1.016);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_234.setTransform(-38.7,-7.7,1.016,1.016);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKIgBgDIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_235.setTransform(-49.1,-7.7,1.016,1.016);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_236.setTransform(-59.5,-7.7,1.016,1.016);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_237.setTransform(-68.6,-7.7,1.016,1.016);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgXAjQgLgLAAgYQAAgXALgLQAKgLAVAAQAPAAAMAEIgDALQgIgDgOAAQgPAAgHAIQgHAIAAARQAAATAHAHQAHAIAPAAQANAAALgDIAAAMQgLADgPAAQgVAAgKgLg");
	this.shape_238.setTransform(-76.9,-7.7,1.016,1.016);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAPAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAOAAQATAAAKAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgVAAQghAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgJgDgNAAQgNAAgFADg");
	this.shape_239.setTransform(-86,-7.7,1.016,1.016);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAaAsIAAglQgNAEgMAAQgRAAgJgIQgIgGAAgQIAAgLQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgFgCIACgIIASAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAUQABAMAFAEQAGAFALAAQAKAAAMgDIAAgoIAPAAIAABXg");
	this.shape_240.setTransform(-96.4,-7.7,1.016,1.016);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAbAsIAAhLIgvAAIAABLIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIBRAAIAABXg");
	this.shape_241.setTransform(-106.3,-7.7,1.016,1.016);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIAFACIgBAIIgPAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_242.setTransform(-115.9,-7.7,1.016,1.016);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AghApIAAgLQANAFAPAAQAZAAAAgPQAAgJgGgDQgGgEgMAAIgRAAIAAgJIARAAQAVAAAAgOQAAgPgWAAQgLAAgPAFIgCgLQAOgFAQAAQAiAAAAAYQABARgOAEQARACAAATQgBANgIAGQgKAGgTAAQgQAAgOgFg");
	this.shape_243.setTransform(-125.1,-7.7,1.016,1.016);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAOAAALADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAOAAQATAAAKAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgVAAQghAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgJgDgOAAQgMAAgFADg");
	this.shape_244.setTransform(90,-29.6,1.016,1.016);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_245.setTransform(79.5,-29.6,1.016,1.016);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_246.setTransform(65.8,-29.6,1.016,1.016);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAWAsIgfgmIgJAIIAAAeIgNAAIAAhKQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIASAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAnIAngpIARAAIgmApIAoAug");
	this.shape_247.setTransform(57.1,-29.6,1.016,1.016);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AAuAsIgggnIgIAJIAAAeIgMAAIAAgeIgIgJIggAnIgQAAIAnguIgmgpIAQAAIAnAqIAAgqIAMAAIAAAqIAngqIARAAIgnApIAoAug");
	this.shape_248.setTransform(45.6,-29.6,1.016,1.016);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAxhDIAOAAIAABXg");
	this.shape_249.setTransform(33.3,-29.6,1.016,1.016);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_250.setTransform(22.9,-29.6,1.016,1.016);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AghApIAAgLQANAFAQAAQAYAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgVAAQgMAAgPAFIgCgLQAOgFAQAAQAiAAAAAYQAAARgOAEQARACAAATQAAANgJAGQgJAGgTAAQgRAAgNgFg");
	this.shape_251.setTransform(13.7,-29.6,1.016,1.016);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgFgCIABgIIARAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAJAAAAAKQAAAJgJAAQgIAAAAgJg");
	this.shape_252.setTransform(3.1,-31.4,1.016,1.016);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AghApIAAgLQANAFAQAAQAYAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgVAAQgLAAgPAFIgDgLQAOgFAQAAQAjAAAAAYQAAARgPAEQARACAAATQAAANgJAGQgJAGgTAAQgQAAgOgFg");
	this.shape_253.setTransform(-3.1,-29.6,1.016,1.016);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAPAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_254.setTransform(-12,-29.6,1.016,1.016);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIAwAAQAbAAAAAYQAAAOgMAEQAPADAAARQAAANgHAGQgHAGgPAAgAgTAiIAbAAQASAAAAgPQAAgPgSAAIgbAAgAgTgFIAaAAQAQAAAAgOQAAgNgQAAIgaAAg");
	this.shape_255.setTransform(-21.8,-29.6,1.016,1.016);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AghA/IAAgLIAEABQAJAAAFgFQAFgEADgKIAEgJIgmhYIAPAAIAdBGIAYhGIAPAAIglBjQgFAQgHAFQgHAHgOgBg");
	this.shape_256.setTransform(-31.2,-27.6,1.016,1.016);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_257.setTransform(-44.6,-29.6,1.016,1.016);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_258.setTransform(-55,-29.6,1.016,1.016);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAXAsIAAgiIgXAAIgVAiIgPAAIAXgkQgUgDAAgVQAAgOAHgGQAHgHARAAIAnAAIAABXgAgUgQQAAAQATAAIAYAAIAAggIgYAAQgTAAAAAQg");
	this.shape_259.setTransform(-69.1,-29.6,1.016,1.016);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgXAjQgLgLAAgYQAAgXALgLQAKgLAWAAQAPAAALAEIgDALQgIgDgNAAQgQAAgHAIQgHAIAAARQAAATAHAHQAHAIAQAAQANAAAKgDIAAAMQgLADgOAAQgWAAgKgLg");
	this.shape_260.setTransform(-77.7,-29.6,1.016,1.016);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgfAsIAAhKQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgCIACgIIARAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIAAAfIAZAAQAQAAAIAHQAHAFAAAOQAAAPgHAGQgIAHgQAAgAgRAhIAXAAQAKAAAEgEQAFgEAAgJQAAgQgTAAIgXAAg");
	this.shape_261.setTransform(-86.6,-29.6,1.016,1.016);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_262.setTransform(-95.4,-29.6,1.016,1.016);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgXAjQgLgLAAgYQAAgWALgLQAKgMAWAAQAQAAAKAEIgCALQgJgEgNAAQgOAAgHAHQgIAHgBAPIAsAAIAAAJIgsAAQABARAHAHQAHAHAPAAQANAAAKgEIAAAMQgLADgOAAQgWAAgKgLg");
	this.shape_263.setTransform(-103.8,-29.6,1.016,1.016);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsIABACIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_264.setTransform(-112.8,-29.6,1.016,1.016);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AAiAsIAAhCIgaAnIgDAAIgFAAIgDgEIgXgjIAABCIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIAQAAQAEAAADAFIAaApIAdguIAPAAIAABXg");
	this.shape_265.setTransform(-123.9,-29.6,1.016,1.016);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgIAkQgLgKAAgVIgWAAIAAAnIgNAAIAAhKQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgFgCIABgIIARAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAkIAWAAQAAgVALgJQAIgKAVAAQAWAAAKALQAKALAAAXQAAAYgKALQgKALgWAAQgVAAgIgKgAAAgZQgFAIgBARQABATAFAHQAHAIAOAAQAPAAAGgIQAHgHgBgTQABgRgHgIQgGgIgPAAQgOAAgHAIg");
	this.shape_266.setTransform(66.7,-51.6,1.016,1.016);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgUgZQgIAIAAARQAAATAIAHQAGAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgGAIg");
	this.shape_267.setTransform(54.6,-51.6,1.016,1.016);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AAXAsIgggmIgJAIIAAAeIgNAAIAAhKQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIASAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAnIAngpIARAAIgmApIAoAug");
	this.shape_268.setTransform(45.6,-51.6,1.016,1.016);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAuAsIgggnIgIAJIAAAeIgMAAIAAgeIgHgJIggAnIgRAAIAnguIgmgpIAQAAIAnAqIAAgqIAMAAIAAAqIAngqIARAAIgmApIAnAug");
	this.shape_269.setTransform(34.2,-51.6,1.016,1.016);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAxhDIAOAAIAABXg");
	this.shape_270.setTransform(21.9,-51.6,1.016,1.016);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_271.setTransform(11.5,-51.6,1.016,1.016);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AghApIAAgLQANAFAQAAQAYAAAAgPQAAgJgGgDQgFgEgNAAIgQAAIAAgJIAQAAQAVAAAAgOQAAgPgVAAQgMAAgPAFIgCgLQAOgFAQAAQAiAAAAAYQAAARgOAEQARACAAATQAAANgJAGQgJAGgTAAQgRAAgNgFg");
	this.shape_272.setTransform(2.3,-51.6,1.016,1.016);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAmA5IAAgaIhKAAIAAAaIgOAAIAAglIAJAAQAIgFACgKQADgJABgVIAAgSQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIBGAAIAABMIAOAAIAAAlgAgOgYQAAAhgKALIAuAAIAAhAIgkAAg");
	this.shape_273.setTransform(-11.7,-50.2,1.016,1.016);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgEA+IAAhKIgBgDIgFgCIABgIIARAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAABVgAgHgzQAAgKAJAAQAKAAgBAKQABAJgKAAQgJAAAAgJg");
	this.shape_274.setTransform(-19.5,-53.4,1.016,1.016);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AAoA8IAAhsIhIAAIAABsIgPAAIAAhsQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgFgDIABgGIBsAAIAAB3g");
	this.shape_275.setTransform(-28.6,-53.3,1.016,1.016);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_276.setTransform(-40.6,-47.9,1.016,1.016);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgSBLQAYggAAgrQAAgqgYggIAOAAQAXAeAAAsQAAAsgXAfg");
	this.shape_277.setTransform(-45.7,-52.4,1.016,1.016);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAdA/IAAhDIgxBDIgOAAIAAhKQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgGgDIACgHIARAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABIAABBIAwhDIAOAAIAABWgAgQgqQgHgGAAgOIALAAQAAAJAEAEQADADAJAAQAJAAAEgDQADgEAAgJIALAAQAAAagbAAQgOAAgGgGg");
	this.shape_278.setTransform(-53.4,-53.6,1.016,1.016);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIASAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAKAAgBAKQABAJgKAAQgIAAAAgJg");
	this.shape_279.setTransform(-60.5,-53.4,1.016,1.016);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIACgIIASAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAAHQAJgLATABQAVgBAIALQAJALAAAZQAAAXgJALQgIAKgVAAQgRAAgLgJIAAAtgAgPgtQgHAGAAANIAAAjQALAHAOABQAPgBAFgHQAHgIAAgRQAAgTgHgIQgGgIgOAAQgNAAgFAGg");
	this.shape_280.setTransform(-67.7,-49.8,1.016,1.016);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgfAjQgLgLAAgYQAAgXALgLQAJgLAWAAQAWAAALALQAKALAAAXQAAAYgKALQgLALgWAAQgWAAgJgLgAgUgZQgIAIAAARQAAATAIAHQAGAIAOAAQAPAAAHgIQAHgHgBgTQABgRgHgIQgHgIgPAAQgOAAgGAIg");
	this.shape_281.setTransform(-78,-51.6,1.016,1.016);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_282.setTransform(-86.9,-51.6,1.016,1.016);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_283.setTransform(-96.6,-51.6,1.016,1.016);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBIgFgCIABgIIASAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAIgLAUABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAGgHQAGgIAAgRQAAgTgGgIQgGgIgOAAQgNAAgGAGg");
	this.shape_284.setTransform(-106.7,-49.8,1.016,1.016);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgcAjQgLgLAAgYQAAgXAKgLQAKgLAVAAQAUAAAJALQAJAKAAAYIgBAEIg/AAQAAAQAIAIQAIAHAQAAQAOAAAOgFIAAAMQgMAEgRAAQgXAAgMgLgAAagFQgBgQgFgGQgGgHgMAAQgNAAgGAHQgHAHAAAPIAyAAIAAAAg");
	this.shape_285.setTransform(-116.6,-51.6,1.016,1.016);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgdAAIAABLg");
	this.shape_286.setTransform(-125.2,-51.6,1.016,1.016);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AAYAsIgYgkIgXAkIgQAAIAfgsIgegrIAQAAIAWAiIAYgiIAPAAIgeArIAfAsg");
	this.shape_287.setTransform(56.6,-73.5,1.016,1.016);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAxhDIAOAAIAABXg");
	this.shape_288.setTransform(46.5,-73.5,1.016,1.016);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_289.setTransform(36.1,-73.5,1.016,1.016);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_290.setTransform(26.4,-73.5,1.016,1.016);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIACgIIAvAAQAbAAAAAYQAAAOgMAEQAPADAAARQAAANgHAGQgHAGgOAAgAgTAiIAbAAQASAAAAgPQAAgPgSAAIgbAAgAgTgFIAaAAQAQAAAAgOQAAgNgQAAIgaAAg");
	this.shape_291.setTransform(16.6,-73.5,1.016,1.016);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_292.setTransform(6.8,-73.5,1.016,1.016);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AAbAsIAAhLIgvAAIAABLIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIBRAAIAABXg");
	this.shape_293.setTransform(-3.9,-73.5,1.016,1.016);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgiA/IAAgLIAGABQAIAAAEgFQAFgEAEgKIADgJIgmhXIAQAAIAcBFIAZhFIAQAAIgmBiQgFAQgHAFQgHAHgNgBg");
	this.shape_294.setTransform(-13.4,-71.5,1.016,1.016);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AAWAsIgfgmIgJAIIAAAeIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgFgCIABgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAnIAngpIARAAIgmApIAnAug");
	this.shape_295.setTransform(-22.3,-73.5,1.016,1.016);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgIAAgSQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_296.setTransform(-32.1,-73.5,1.016,1.016);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgfAjQgLgLAAgYQAAgXALgLQAJgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgJgLgAgUgZQgIAIAAARQAAATAIAHQAGAIAOAAQAPAAAHgIQAHgHgBgTQABgRgHgIQgHgIgPAAQgOAAgGAIg");
	this.shape_297.setTransform(-46.5,-73.5,1.016,1.016);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIAvAAQAbAAAAAYQAAAOgLAEQAOADAAARQAAANgHAGQgGAGgPAAgAgSAiIAbAAQARAAAAgPQAAgIgEgDQgEgEgJAAIgbAAgAgSgFIAZAAQAQAAAAgOQAAgNgQAAIgZAAg");
	this.shape_298.setTransform(-56.6,-73.5,1.016,1.016);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgUgZQgIAIABARQgBATAIAHQAGAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgGAIg");
	this.shape_299.setTransform(-66.4,-73.5,1.016,1.016);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgYAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAPAAAMAEIgDALQgIgDgOAAQgPAAgHAIQgHAIAAARQAAATAHAHQAHAIAPAAQANAAALgDIAAAMQgLADgPAAQgWAAgKgLg");
	this.shape_300.setTransform(-75.2,-73.5,1.016,1.016);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgoAUQAAgYAjAAQAOAAALADIAAgMQAAgLgGgFQgGgFgNAAQgOAAgNAFIAAgMQAOgEAOAAQATAAAKAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgHQgIALgVAAQghAAAAgagAgUAIQgGAEAAAIQAAAPAWAAQAYAAAAgTIAAgIQgJgDgOAAQgMAAgFADg");
	this.shape_301.setTransform(-84.3,-73.5,1.016,1.016);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAbAsIAAglQgNAEgNAAQgSAAgIgIQgIgGAAgQIAAgLQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAAUQAAAMAFAEQAFAFAMAAQAKAAANgDIAAgoIAOAAIAABXg");
	this.shape_302.setTransform(-94.6,-73.5,1.016,1.016);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAiAsIAAhCIgbAnIgDAAIgEAAQgBgBgCgDIgXgjIAABCIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIAQAAQAEAAACAFIAbApIAdguIAPAAIAABXg");
	this.shape_303.setTransform(-105.1,-73.5,1.016,1.016);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_304.setTransform(-116.1,-73.5,1.016,1.016);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgdAAIAABLg");
	this.shape_305.setTransform(-125.2,-73.5,1.016,1.016);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAjAsIAAhCIgbAnIgDAAIgFAAIgDgEIgXgjIAABCIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIAQAAQADAAADAFIAaApIAeguIAOAAIAABXg");
	this.shape_306.setTransform(54.6,-95.5,1.016,1.016);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIASAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAJAAQAJAAgBAKQABAJgJAAQgJAAAAgJg");
	this.shape_307.setTransform(46.8,-97.3,1.016,1.016);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIACgHIASAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAHQAHgLAUABQAVgBAIALQAJALAAAZQAAAXgJALQgIAKgVAAQgRAAgKgJIAAAtgAgPgtQgHAGABANIAAAjQAKAHAOABQAPgBAGgHQAFgIABgRQgBgTgFgIQgHgIgOAAQgNAAgFAGg");
	this.shape_308.setTransform(39.7,-93.7,1.016,1.016);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAWAsIgfgmIgJAIIAAAeIgOAAIAAhKIgBgDIgFgCIABgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAnIAngpIARAAIgmApIAnAug");
	this.shape_309.setTransform(30.2,-95.5,1.016,1.016);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAFBLQgXgfAAgsQAAgsAXgeIAOAAQgYAfAAArQAAAsAYAfg");
	this.shape_310.setTransform(23.4,-96.3,1.016,1.016);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_311.setTransform(10.5,-95.5,1.016,1.016);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKIgBgDIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_312.setTransform(0.1,-95.5,1.016,1.016);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgFA9IAAhJIgBgDIgFgDIACgHIARAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAABUgAAJgzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIgAgagzQAAgJAJAAQAKAAAAAJQAAAIgKAAQgJAAAAgIg");
	this.shape_313.setTransform(-7,-97.3,1.016,1.016);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAGACIgCAIIgPAAIgBgCIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_314.setTransform(-13.8,-95.5,1.016,1.016);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIgGgCIABgHIASAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAIgLAUABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQALAHANABQAPgBAGgHQAHgIgBgRQABgTgHgIQgGgIgPAAQgMAAgGAGg");
	this.shape_315.setTransform(-24,-93.7,1.016,1.016);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAWAsIgfgmIgIAIIAAAeIgPAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIASAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIAAAnIAmgpIARAAIgmApIAnAug");
	this.shape_316.setTransform(-33.5,-95.5,1.016,1.016);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AguA8IAAgMIANABQASAAAJgSIACgFIgvhWIAQAAIAlBIIAihIIAQAAIgtBcQgHAQgIAHQgJAHgPgBIgOgBg");
	this.shape_317.setTransform(-42.7,-97.1,1.016,1.016);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgEA9IAAhJQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgDIABgHIARAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAABUgAAJgzQAAgJAJAAQAJAAAAAJQAAAIgJAAQgJAAAAgIgAgagzQAAgJAJAAQAKAAAAAJQAAAIgKAAQgJAAAAgIg");
	this.shape_318.setTransform(-54.8,-97.3,1.016,1.016);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIASAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAKAAgBAKQABAJgKAAQgIAAAAgJg");
	this.shape_319.setTransform(-60.5,-97.3,1.016,1.016);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIACgHIASAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAHQAJgLATABQAVgBAIALQAJALAAAZQAAAXgJALQgIAKgVAAQgRAAgLgJIAAAtgAgPgtQgHAGAAANIAAAjQALAHAOABQAPgBAFgHQAHgIAAgRQAAgTgHgIQgGgIgOAAQgNAAgFAGg");
	this.shape_320.setTransform(-67.7,-93.7,1.016,1.016);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgfAjQgLgLAAgYQAAgXALgLQAJgLAWAAQAWAAALALQAKALAAAXQAAAYgKALQgLALgWAAQgWAAgJgLgAgUgZQgIAIAAARQAAATAIAHQAGAIAOAAQAPAAAHgIQAHgHgBgTQABgRgHgIQgHgIgPAAQgOAAgGAIg");
	this.shape_321.setTransform(-78,-95.5,1.016,1.016);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgeAAIAABLg");
	this.shape_322.setTransform(-86.9,-95.5,1.016,1.016);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgFgCIABgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAwhDIAPAAIAABXg");
	this.shape_323.setTransform(-96.6,-95.5,1.016,1.016);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBIgFgCIABgHIASAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAIgLAUABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAGgHQAGgIAAgRQAAgTgGgIQgGgIgOAAQgNAAgGAGg");
	this.shape_324.setTransform(-106.7,-93.7,1.016,1.016);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgcAjQgLgLAAgYQAAgXAKgLQAKgLAVAAQAUAAAJALQAJAKAAAYIgBAEIg/AAQAAAQAIAIQAIAHAQAAQAOAAAOgFIAAAMQgMAEgRAAQgXAAgMgLgAAagFQgBgQgFgGQgGgHgMAAQgNAAgGAHQgHAHAAAPIAyAAIAAAAg");
	this.shape_325.setTransform(-116.6,-95.5,1.016,1.016);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgdAAIAABLg");
	this.shape_326.setTransform(-125.2,-95.5,1.016,1.016);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgoAUQAAgYAkAAQAOAAAKADIAAgMQAAgLgGgFQgGgFgNAAQgNAAgOAFIAAgMQAPgEAOAAQATAAAJAIQAJAIAAARIAAAsQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIAGACIgCAIIgOAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgHQgIALgUAAQgiAAAAgagAgUAIQgFAEAAAIQAAAPAVAAQAYAAAAgTIAAgIQgKgDgMAAQgNAAgFADg");
	this.shape_327.setTransform(92,-117.4,1.016,1.016);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_328.setTransform(81.6,-117.4,1.016,1.016);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_329.setTransform(67.4,-117.4,1.016,1.016);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAbAsIAAgnIgvAAIAAAnIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAkIAvAAIAAgmIAPAAIAABXg");
	this.shape_330.setTransform(56.8,-117.4,1.016,1.016);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgcAjQgLgLAAgYQAAgXAKgLQAKgLAVAAQAUAAAJALQAJAKAAAYIgBAEIhAAAQABAQAIAIQAIAHAQAAQAOAAAOgFIAAAMQgMAEgRAAQgXAAgMgLgAAagFQgBgPgFgHQgGgHgMAAQgNAAgHAHQgGAHgBAPIAzAAIAAAAg");
	this.shape_331.setTransform(47.1,-117.4,1.016,1.016);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgoA8IAAhsQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgGgDIACgGIA0AAQAXgBAKAKQAKAIAAAUQAAATgKAIQgKAJgXAAIggAAIAAAugAgaACIAfAAQAQAAAGgFQAHgFAAgOQAAgOgHgFQgGgHgQAAIgfAAg");
	this.shape_332.setTransform(36.9,-119.1,1.016,1.016);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgDA+IAAhKQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIARAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAIAAQAJAAAAAKQAAAJgJAAQgIAAAAgJg");
	this.shape_333.setTransform(24.7,-119.3,1.016,1.016);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAuAsIgggnIgIAJIAAAeIgMAAIAAgeIgHgJIggAnIgRAAIAnguIgmgpIAQAAIAnAqIAAgqIAMAAIAAAqIAngqIARAAIgmApIAnAug");
	this.shape_334.setTransform(16.1,-117.4,1.016,1.016);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgbAjQgMgLAAgYQAAgXAKgLQAKgLAVAAQAUAAAJALQAJAKAAAYIAAAEIhAAAQAAAQAIAIQAIAHARAAQAOAAANgFIAAAMQgLAEgSAAQgXAAgLgLgAAagFQAAgPgGgHQgFgHgNAAQgNAAgGAHQgHAHAAAPIAyAAIAAAAg");
	this.shape_335.setTransform(4.7,-117.4,1.016,1.016);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIABgIIATAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAIQAIgMAUABQAUgBAJAMQAJAKAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAOABQAPgBAGgHQAHgIAAgRQAAgTgHgIQgGgIgPAAQgMAAgGAGg");
	this.shape_336.setTransform(-5.3,-115.6,1.016,1.016);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgcAjQgLgLAAgYQAAgXAKgLQAKgLAVAAQAUAAAJALQAJAKAAAYIgBAEIhAAAQABAQAIAIQAIAHAQAAQAOAAAOgFIAAAMQgMAEgRAAQgXAAgMgLgAAagFQgBgPgFgHQgGgHgMAAQgNAAgHAHQgGAHgBAPIAzAAIAAAAg");
	this.shape_337.setTransform(-15.2,-117.4,1.016,1.016);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AAiAsIAAhCIgbAnIgDAAIgEAAIgDgEIgYgjIAABCIgNAAIAAhKQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgCIABgIIAQAAIAEABIADAEIAaApIAeguIAPAAIAABXg");
	this.shape_338.setTransform(-26.1,-117.4,1.016,1.016);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAcA/IAAhDIgwBDIgOAAIAAhKQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgGgDIACgHIARAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABBIAwhDIAPAAIAABWgAgXg+IAKAAQAAAQAQAAQARAAAAgQIALAAQAAAagcAAQgaAAAAgag");
	this.shape_339.setTransform(-41.2,-119.4,1.016,1.016);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgGgCIACgIIARAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIAABVgAgGgzQAAgKAIAAQAKAAAAAKQAAAJgKAAQgIAAAAgJg");
	this.shape_340.setTransform(-48.4,-119.3,1.016,1.016);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AAWAsIgfgmIgJAIIAAAeIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgFgCIABgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAnIAngpIARAAIgmApIAnAug");
	this.shape_341.setTransform(-54.7,-117.4,1.016,1.016);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIASAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIAAAfIAYAAQARAAAHAHQAIAFAAAOQAAAPgIAGQgHAHgRAAgAgRAhIAWAAQALAAAFgEQADgEAAgJQAAgIgDgEQgFgEgLAAIgWAAg");
	this.shape_342.setTransform(-63.9,-117.4,1.016,1.016);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgXAjQgLgLAAgYQAAgXALgLQAKgLAWAAQAPAAALAEIgCALQgJgDgOAAQgPAAgHAIQgHAIAAARQAAATAHAHQAHAIAPAAQAOAAAKgDIAAAMQgMADgNAAQgWAAgKgLg");
	this.shape_343.setTransform(-72.8,-117.4,1.016,1.016);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBIgFgCIABgIIASAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAIQAJgMATABQAUgBAJAMQAJAKAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQALAHANABQAPgBAGgHQAGgIAAgRQAAgTgGgIQgGgIgPAAQgMAAgGAGg");
	this.shape_344.setTransform(-82.3,-115.6,1.016,1.016);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgbAjQgMgLAAgYQAAgXAKgLQAKgLAVAAQAUAAAIALQAKAKgBAYIAAAEIg/AAQAAAQAIAIQAHAHASAAQAOAAANgFIAAAMQgMAEgRAAQgYAAgKgLgAAagFQAAgPgGgHQgGgHgMAAQgNAAgGAHQgHAHAAAPIAyAAIAAAAg");
	this.shape_345.setTransform(-92.2,-117.4,1.016,1.016);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgrAtIAAgMIADAAQAKAAAFgLQAEgLAAgYIAAgSQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAgBIgFgCIABgIIBGAAIAABXIgOAAIAAhLIglAAIAAAUQAAAegHANQgIAOgSAAg");
	this.shape_346.setTransform(-102.8,-117.4,1.016,1.016);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AAdAsIAAhDIgxBDIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAABBIAwhDIAOAAIAABXg");
	this.shape_347.setTransform(-113.2,-117.4,1.016,1.016);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AAlA5IAAgaIhKAAIAAAaIgNAAIAAglIAJAAQAHgFADgKQADgJAAgVIAAgSIgBgDIgFgCIABgIIBGAAIAABMIAOAAIAAAlgAgOgYQAAAhgKALIAvAAIAAhAIglAAg");
	this.shape_348.setTransform(-123.8,-116.1,1.016,1.016);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgGgCIACgIIAvAAQAbAAAAAYQAAAOgLAEQAOADAAARQAAANgHAGQgGAGgPAAgAgSAiIAbAAQARAAAAgPQAAgIgEgDQgEgEgJAAIgbAAgAgSgFIAZAAQAQAAAAgOQAAgNgQAAIgZAAg");
	this.shape_349.setTransform(121.7,-139.4,1.016,1.016);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_350.setTransform(111.4,-135.8,1.016,1.016);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBIgFgCIABgIIATAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAAIQAJgMATABQAUgBAJAMQAJAKAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAGgHQAGgIAAgRQAAgTgGgIQgGgIgOAAQgNAAgGAGg");
	this.shape_351.setTransform(104.3,-137.6,1.016,1.016);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AggA3QgLgIAAgRQAAgOAHgIQAGgGAPgDQgYgEAAgZQAAgRAJgHQAJgIAVABQAVgBAKAIQAKAHAAARQAAAZgZAEQAPADAGAGQAGAIAAAOQAAARgKAIQgKAIgXgBQgWABgKgIgAgWAMQgGAGAAALQgBAMAIAGQAHAEAOAAQAQAAAHgEQAGgGAAgMQABgLgHgGQgHgFgQgCQgPACgHAFgAgTguQgHAGAAALQAAAKAHAGQAFAFAOACQAOgCAGgFQAHgGgBgKQABgLgHgGQgFgEgPAAQgOAAgFAEg");
	this.shape_352.setTransform(93.9,-141.1,1.016,1.016);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AAJA8IAAhrIggAQIAAgNIAjgPIAMAAIAAB3g");
	this.shape_353.setTransform(82.7,-141.1,1.016,1.016);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AghAwQgKgPAAghQAAggAKgPQAKgOAXAAQAYAAAKAOQALAPAAAgQAAAhgLAPQgKAOgYAAQgXAAgKgOgAgWgmQgHAMAAAaQAAAbAHAMQAHALAPAAQARAAAGgLQAIgMgBgbQABgagIgMQgGgMgRABQgPgBgHAMg");
	this.shape_354.setTransform(72.8,-141.1,1.016,1.016);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgnA9IAAgLIAvgtQAQgPAAgOQAAgOgHgFQgGgFgOAAQgPAAgRAFIAAgNQAPgEATAAQAUgBAKAJQAJAIAAASQAAATgSAQIgnApIA7AAIAAALg");
	this.shape_355.setTransform(62.1,-141.2,1.016,1.016);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_356.setTransform(54.9,-135.8,1.016,1.016);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgkA7IAAgMQANAEAMAAQAVAAAJgMQAJgMABgaQgGAQgaAAQgUAAgKgKQgJgHAAgVQAAgVAKgKQAKgKAWABQAXAAAKANQAKANAAAfQAAAigMARQgNAPgbAAQgPAAgMgDgAgVgrQgHAHAAAOQAAAPAGAHQAGAFAPAAQAdABAAgZQAAgfgcAAQgPAAgGAHg");
	this.shape_357.setTransform(47.4,-141.1,1.016,1.016);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AghAwQgKgPAAghQAAggAKgPQALgOAWAAQAXAAALAOQAKAPAAAgQAAAhgKAPQgLAOgXAAQgWAAgLgOgAgWgmQgHAMAAAaQAAAbAHAMQAHALAPAAQAQAAAHgLQAHgMAAgbQAAgagHgMQgHgMgQABQgPgBgHAMg");
	this.shape_358.setTransform(37,-141.1,1.016,1.016);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_359.setTransform(29.6,-135.8,1.016,1.016);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AggAxQgKgNAAgeQAAgjAMgQQANgQAbAAQAQAAALADIAAAMQgOgEgMAAQgUAAgKAMQgJAMAAAaQAGgPAaAAQAUAAAKAJQAJAIAAAUQAAAVgKAKQgKAKgXgBQgWAAgKgNgAgbAUQAAAfAbAAQAQAAAGgHQAHgGAAgQQAAgOgGgHQgHgFgOAAQgdgBAAAZg");
	this.shape_360.setTransform(22.4,-141.1,1.016,1.016);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AAJA8IAAhrIggAQIAAgNIAjgPIAMAAIAAB3g");
	this.shape_361.setTransform(11,-141.1,1.016,1.016);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQALgLAVAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgVAAgLgLgAgUgZQgHAIAAARQAAATAHAHQAGAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgGAIg");
	this.shape_362.setTransform(-2.8,-139.4,1.016,1.016);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AAmA5IAAgaIhKAAIAAAaIgOAAIAAglIAJAAQAHgFAEgKQADgKAAgUIAAgSQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgFgCIABgIIBGAAIAABMIAOAAIAAAlgAgOgYQAAAhgKALIAvAAIAAhAIglAAg");
	this.shape_363.setTransform(-13.3,-138.1,1.016,1.016);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_364.setTransform(-24.4,-135.8,1.016,1.016);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AglBAIAAhwQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAgBIgFgCIABgIIATAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAIQAIgMAUABQAUgBAJAMQAJAKAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQAKAHAPABQAOgBAGgHQAGgIAAgRQAAgTgGgIQgHgIgNAAQgNAAgGAGg");
	this.shape_365.setTransform(-31.5,-137.6,1.016,1.016);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AggA3QgKgIAAgRQAAgOAGgIQAHgGAOgDQgYgEgBgZQAAgRAKgHQAJgIAVABQAWgBAJAIQAJAHAAARQABAZgZAEQAPADAGAGQAHAIAAAOQAAARgLAIQgKAIgXgBQgWABgKgIgAgWAMQgHAGAAALQABAMAGAGQAIAEAOAAQAQAAAGgEQAIgGAAgMQgBgLgGgGQgHgFgQgCQgPACgHAFgAgUguQgFAGAAALQAAAKAFAGQAHAFANACQAPgCAGgFQAFgGABgKQgBgLgFgGQgGgEgPAAQgNAAgHAEg");
	this.shape_366.setTransform(-41.9,-141.1,1.016,1.016);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAJA8IAAhrIggAQIAAgNIAjgPIAMAAIAAB3g");
	this.shape_367.setTransform(-53.1,-141.1,1.016,1.016);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AghAwQgKgPAAghQAAggAKgPQALgOAWAAQAXAAALAOQAKAPAAAgQAAAhgKAPQgLAOgXAAQgWAAgLgOgAgWgmQgHAMAAAaQAAAbAHAMQAHALAPAAQAQAAAHgLQAHgMAAgbQAAgagHgMQgHgMgQABQgPgBgHAMg");
	this.shape_368.setTransform(-63,-141.1,1.016,1.016);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgnA9IAAgLIAvgtQAQgPAAgOQAAgOgHgFQgGgFgOAAQgPAAgRAFIAAgNQAQgEASAAQAUgBAKAJQAKAIAAASQAAATgTAQIgnApIA7AAIAAALg");
	this.shape_369.setTransform(-73.7,-141.2,1.016,1.016);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_370.setTransform(-80.9,-135.8,1.016,1.016);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgXA8IAwhsIhAAAIAAgLIBPAAIAAAKIgxBtg");
	this.shape_371.setTransform(-88.3,-141.1,1.016,1.016);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AghAwQgKgPAAghQAAggAKgPQALgOAWAAQAYAAAKAOQAKAPAAAgQAAAhgKAPQgKAOgYAAQgWAAgLgOgAgWgmQgHAMAAAaQAAAbAHAMQAHALAPAAQAQAAAHgLQAHgMAAgbQAAgagHgMQgHgMgQABQgPgBgHAMg");
	this.shape_372.setTransform(-98.8,-141.1,1.016,1.016);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgJAAQAAgIAJAAQAKAAAAAIQAAAKgKAAQgJAAAAgKg");
	this.shape_373.setTransform(-106.2,-135.8,1.016,1.016);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AggAxQgKgNAAgeQAAgjAMgQQANgQAbAAQAQAAALADIAAAMQgOgEgMAAQgUAAgKAMQgJAMAAAaQAGgPAaAAQAUAAAKAJQAJAIAAAUQAAAVgKAKQgKAKgXgBQgWAAgKgNgAgbAUQAAAfAbAAQAQAAAGgHQAHgGAAgQQAAgOgGgHQgHgFgOAAQgdgBAAAZg");
	this.shape_374.setTransform(-113.4,-141.1,1.016,1.016);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AAKA8IAAhrIghAQIAAgNIAjgPIAMAAIAAB3g");
	this.shape_375.setTransform(-124.8,-141.1,1.016,1.016);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgiApIAAgLQAOAFAPAAQAZAAAAgPQgBgJgFgDQgGgEgMAAIgRAAIAAgJIARAAQAVAAAAgOQAAgPgWAAQgLAAgPAFIgCgLQAOgFAQAAQAjAAgBAYQAAARgOAEQASACAAATQgBANgIAGQgKAGgTAAQgQAAgPgFg");
	this.shape_376.setTransform(49.2,-161.3,1.016,1.016);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AAXAsIAAgiIgXAAIgVAiIgPAAIAXgkQgVgDAAgVQAAgOAIgGQAHgHARAAIAnAAIAABXgAgUgQQAAAQATAAIAYAAIAAggIgYAAQgTAAAAAQg");
	this.shape_377.setTransform(35.9,-161.3,1.016,1.016);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgXAjQgLgLAAgYQAAgXALgLQAKgLAWAAQAPAAALAEIgCALQgJgDgNAAQgQAAgHAIQgHAIAAARQAAATAHAHQAHAIAQAAQANAAAKgDIAAAMQgLADgOAAQgWAAgKgLg");
	this.shape_378.setTransform(27.2,-161.3,1.016,1.016);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgfAsIAAhKQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFgCIACgIIARAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAfIAaAAQAQAAAIAHQAHAFAAAOQAAAPgHAGQgIAHgQAAgAgSAhIAYAAQAKAAAEgEQAFgEAAgJQAAgQgTAAIgYAAg");
	this.shape_379.setTransform(18.3,-161.3,1.016,1.016);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgGAsIAAhLIgeAAIAAgMIBJAAIAAAMIgdAAIAABLg");
	this.shape_380.setTransform(9.5,-161.3,1.016,1.016);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AAcAsIAAhDIgwBDIgOAAIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIARAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABBIAxhDIAOAAIAABXg");
	this.shape_381.setTransform(-0.1,-161.3,1.016,1.016);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AAlA5IAAgaIhKAAIAAAaIgNAAIAAglIAJAAQAIgFADgKQACgJAAgVIAAgSQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIBFAAIAABMIAPAAIAAAlgAgOgYQAAAhgJALIAuAAIAAhAIglAAg");
	this.shape_382.setTransform(-10.7,-160,1.016,1.016);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIgBARQABATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_383.setTransform(-21.1,-161.3,1.016,1.016);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AggAsIAAhKQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIACgIIAvAAQAbAAAAAYQAAAPgMADQAPADAAARQAAANgHAGQgHAGgOAAgAgTAiIAcAAQARAAAAgPQAAgPgRAAIgcAAgAgTgFIAaAAQAQAAAAgOQAAgNgQAAIgaAAg");
	this.shape_384.setTransform(-31.1,-161.3,1.016,1.016);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AggAjQgKgLAAgYQAAgXAKgLQAKgLAWAAQAXAAAKALQAKALAAAXQAAAYgKALQgKALgXAAQgWAAgKgLgAgVgZQgGAIAAARQAAATAGAHQAHAIAOAAQAPAAAHgIQAGgHAAgTQAAgRgGgIQgHgIgPAAQgOAAgHAIg");
	this.shape_385.setTransform(-41,-161.3,1.016,1.016);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgkBAIAAhwQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBIgFgCIACgIIASAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAHQAIgLAUABQAUgBAJALQAJALAAAZQAAAXgJALQgJAKgUAAQgRAAgLgJIAAAtgAgQgtQgGAGAAANIAAAjQALAHAOABQAOgBAGgHQAGgIABgRQgBgTgGgIQgGgIgOAAQgNAAgGAGg");
	this.shape_386.setTransform(-51.3,-159.5,1.016,1.016);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAbAsIAAhLIgvAAIAABLIgOAAIAAhKIgBgDIgGgCIACgIIBRAAIAABXg");
	this.shape_387.setTransform(-62,-161.3,1.016,1.016);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AAYAsIAAgiIgYAAIgUAiIgQAAIAXgkQgVgDABgVQAAgbAfAAIAnAAIAABXgAgUgQQAAAQATAAIAZAAIAAggIgZAAQgTAAAAAQg");
	this.shape_388.setTransform(-76,-161.3,1.016,1.016);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgEA+IAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgCIACgIIARAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABVgAgGgzQAAgKAJAAQAIAAABAKQgBAJgIAAQgJAAAAgJg");
	this.shape_389.setTransform(-82.8,-163.2,1.016,1.016);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AAkA5IAAgaIhNAAIAAhKIgBgDIgGgCIACgIIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABKIAvAAIAAhMIAPAAIAABMIAOAAIAAAlg");
	this.shape_390.setTransform(-90.2,-160,1.016,1.016);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AAXAsIgggmIgJAIIAAAeIgOAAIAAhKQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgFgCIABgIIASAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAnIAngpIARAAIgmApIAnAug");
	this.shape_391.setTransform(-100.1,-161.3,1.016,1.016);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AAoA8IgKgfIg7AAIgKAfIgPAAQAIgcAOgkQANgkAMgTIAPAAQAMATAOAkQANAkAIAcgAAaARQgNglgNgaQgLAVgOAqIAzAAIAAAAg");
	this.shape_392.setTransform(-110.7,-163,1.016,1.016);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AAAALIgQAXIgIgGIARgXIgbgIIACgKIAcAJIAAgdIAJAAIAAAdIAbgJIAEAKIgbAIIAQAXIgIAGg");
	this.shape_393.setTransform(-125,-165.8,1.016,1.016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.instance = new lib.bgImg4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg4_1, new cjs.Rectangle(-150,-300,300,600), null);


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


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgaAhIAjghIgiggIAIgJIAsApIgtAqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(-2.7,-4.1,5.5,8.4), null);


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wheelMc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1080},40,cjs.Ease.get(1)).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.logoSmallBlack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logoLine();
	this.instance.parent = this;
	this.instance.setTransform(53.1,0.3);

	this.instance_1 = new lib.logoZnak();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41.6,0.5);

	this.instance_2 = new lib.logoTextBlack();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.4,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoSmallBlack, new cjs.Rectangle(-55.6,-16.5,110.7,33.5), null);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wheel
	this.instance = new lib.wheel_1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(87.4,21,0.191,0.654,0,0,0,0.2,0.1);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},45).wait(1));

	// wheel
	this.instance_1 = new lib.wheel_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.2,35.6,0.385,0.81,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},45).wait(1));

	// car
	this.instance_2 = new lib.carMc();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-63,186.7,125);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// >
	this.instance = new lib.Symbol();
	this.instance.parent = this;
	this.instance.setTransform(57,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({x:61},3,cjs.Ease.get(1)).to({x:57},2).wait(3).to({x:61},3,cjs.Ease.get(1)).to({x:57},2).wait(3));

	// btnTxt
	this.instance_1 = new lib.btnTxt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// btnBg
	this.instance_2 = new lib.btnBg();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-14,138.5,28.1);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_313 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(313).call(this.frame_313).wait(12));

	// logoB
	this.instance = new lib.logoSmallBlack();
	this.instance.parent = this;
	this.instance.setTransform(64.5,-259.9,1.193,1.193,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(325));

	// bgImg4
	this.instance_1 = new lib.bgImg4_1();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({alpha:1},10).wait(80).to({alpha:0},10).wait(1));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41,262.9,0.02,0.02,0,0,0,2.5,2.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).to({regX:0.4,regY:0.6,scaleX:1.3,scaleY:1.3},10,cjs.Ease.get(1)).to({_off:true},65).wait(90));

	// t4_1
	this.instance_3 = new lib.t4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-284.9,-142,0.77,0.77);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).to({x:-7.4},10,cjs.Ease.get(1)).to({_off:true},75).wait(90));

	// bgImg3
	this.instance_4 = new lib.bgImg3_1();
	this.instance_4.parent = this;
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140).to({_off:false},0).to({alpha:1},10).to({_off:true},85).wait(90));

	// t3
	this.instance_5 = new lib.t3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-277.1,-154.9,0.77,0.77);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100).to({_off:false},0).to({x:0.6},10,cjs.Ease.get(1)).to({_off:true},41).wait(174));

	// bgImg2
	this.instance_6 = new lib.bgImg2_1();
	this.instance_6.parent = this;
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).to({alpha:1},10).to({_off:true},51).wait(174));

	// urText1
	this.instance_7 = new lib.urText1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-13.9,274.7,0.77,0.77);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({alpha:1},10).to({_off:true},41).wait(224));

	// t2
	this.instance_8 = new lib.t2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-293.6,-141.4,0.77,0.77,0,0,0,-0.1,-0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({x:-15.8},10,cjs.Ease.get(1)).to({_off:true},41).wait(224));

	// t1
	this.instance_9 = new lib.t1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-296.6,-143.9,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-18.9},10,cjs.Ease.get(1)).wait(30).to({alpha:0},10).to({_off:true},1).wait(274));

	// fari
	this.instance_10 = new lib.fari_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-58,124.5,1.037,1.037,0,0,0,-0.3,0.1);
	this.instance_10.alpha = 0.602;
	this.instance_10.compositeOperation = "lighter";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(63).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(237));

	// car
	this.instance_11 = new lib.car_1("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(228,81.1,0.783,0.783,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:0,regY:0,scaleX:1.35,scaleY:1.35,x:6.5,y:124.4,startPosition:39},40,cjs.Ease.get(1)).to({_off:true},61).wait(224));

	// bgImg1
	this.instance_12 = new lib.bgImg1_1();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},101).wait(213).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.5,-300,708.7,600);


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
p.nominalBounds = new cjs.Rectangle(-107.5,299,708.8,602);
// library properties:
lib.properties = {
	id: 'AF0A675663F94A4F8EC9376D56876A05',
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
		{src:"images/car.png", id:"car"},
		{src:"images/fari.png", id:"fari"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/wheel.png", id:"wheel"}
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
an.compositions['AF0A675663F94A4F8EC9376D56876A05'] = {
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