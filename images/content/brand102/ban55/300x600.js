(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.boxes = function() {
	this.initialize(img.boxes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,156);


(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,200);// helper functions:

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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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AEgGQAHAGAKAAQAFAAAEgCQAEgDAAgEQAAgEgEgCQgDgCgGAAIgHAAIAAgGIAHAAQAEAAAEgDQADgDAAgDQAAgEgDgCQgDgCgFAAQgJAAgHAFIgDgFQAIgHAMAAQAJAAAEAEQAFAEAAAGQAAAJgIADQAKAEAAAJQAAAGgGAFQgFAEgKAAQgLAAgKgHgAIFglIAEgGQAHAGAKAAQAFAAAEgCQAEgDAAgEQAAgEgEgCQgDgCgGAAIgHAAIAAgGIAHAAQAEAAAEgDQADgDAAgDQAAgEgDgCQgDgCgFAAQgJAAgHAFIgDgFQAIgHAMAAQAJAAAEAEQAFAEAAAGQAAAJgIADQAKAEAAAJQAAAGgGAFQgFAEgKAAQgLAAgKgHgAEjgmQgIgJAAgKQAAgLAIgIQAIgIALAAQAMAAAJAJIgFAGQgIgIgIAAQgIAAgFAGQgGAGAAAIQAAAJAGAFQAFAGAIAAQAJAAAHgIIAFAFQgJAKgMAAQgLAAgIgIgACWgmQgIgHAAgMQAAgKAIgJQAHgIALAAQANAAAIAKIgEAFQgHgIgJAAQgGAAgGAFQgFAFgCAHIAYAAIAAAGIgYAAQABAIAGAEQAFAFAHAAQAJAAAHgIIAFAFQgEAGgFACQgFACgHAAQgLAAgIgIgABagiQgFgFAAgHQAAgIAGgFQAGgEAKAAQAHAAAJACIAAgBQAAgHgEgEQgEgEgIAAQgGAAgJAEIgDgGQAKgFAJAAQAMAAAFAGQAFAGAAAJIAAAgIgHAAIAAgIQgHAJgMAAQgIAAgGgEgABhg2QgEACAAAGQAAAEADADQAEADAGAAQAHAAAFgEQAFgEAAgGIAAgFQgJgCgGAAQgHAAgEADgAgRglQgHgGgBgLIgMAAIAAAXIgHAAIAAg0IAHAAIAAAXIAMAAQABgLAHgGQAHgHAKAAQALAAAHAIQAHAIAAALQAAALgHAIQgIAIgKAAQgKAAgHgHgAgNhHQgEAGAAAIQAAAJAFAGQAEAFAIAAQAHAAAFgFQAFgGAAgJQAAgJgFgFQgFgGgHAAQgHAAgGAGgAlgglQgIgIAAgMQAAgLAIgIQAGgIALAAQAMAAAGAIQAGAIAAAMIAAACIgpAAQABAIAFAFQAGAEAGAAQAKAAAHgHIAFAEQgJAKgNAAQgLAAgHgHgAk+g8QgBgHgEgFQgFgFgHAAQgHAAgEAFQ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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-138.8,-10.4,277.8,20.8), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACjAnQgPgQAAgXQAAgVAPgQQAQgQAYAAQAXAAAQAQQAPAPAAAWQAAAXgPAPQgQAQgYAAQgXAAgQgPgACxgZQgKALAAAOQAAAQAKALQAKALAQAAQAPAAAKgLQAKgLAAgQQAAgOgKgLQgKgLgQAAQgPAAgKALgAqRAnQgPgPAAgYQAAgVAPgQQAQgQAXAAQAXAAASAOIgMAOQgNgLgQAAQgPAAgKALQgKALAAAOQAAARAKAKQAKALAQAAQAPAAALgIIAAgUIgbAAIAAgPIAsAAIAAArQgSAQgZAAQgZAAgPgPgAsPAnQgQgQAAgXQAAgVAQgQQAQgQAYAAQAXAAAQAQQAPAPAAAWQAAAXgPAPQgQAQgYAAQgYAAgPgPgAsBgZQgKALAAAOQAAAQAKALQAKALAQAAQAPAAAKgLQAKgLAAgQQAAgOgKgLQgKgLgQAAQgPAAgKALgAHgA1IgahKIgaBKIgQAAIglhoIAUAAIAZBNIAahOIAQAAIAaBOIAZhNIATAAIglBogANsA1IAAgVIAUAAIAAAVgAMBA1IAAhoIAnAAQAZAAAQAPQAPAPAAAVQAAAXgPAPQgQAPgZAAgAMUAkIAUAAQARAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgRAAIgUAAgALWA1IgaglIgXAAIAAAlIgSAAIAAhoIAvAAQASAAAKAJQALAJAAAPQAAAYgZAHIAcAogAKlAAIAbAAQAWAAAAgRQAAgRgWAAIgbAAgAJrA1IgLgaIgyAAIgKAaIgTAAIAuhpIARAAIAuBpgAJZALIgSgpIgSApIAkAAgAFaA1IgaglIgXAAIAAAlIgSAAIAAhoIAvAAQASAAAKAJQALAJAAAPQAAAYgZAHIAcAogAEpAAIAbAAQAWAAAAgRQAAgRgWAAIgbAAgAA1A1IAAhoIBOAAIAAARIg7AAIAAAcIA1AAIAAAQIg1AAIAAArgAggA1IAAgVIAUAAIAAAVgAhHA1IgaglIgXAAIAAAlIgTAAIAAhoIAvAAQATAAAKAJQAKAJAAAPQAAAYgZAHIAdAogAh4AAIAbAAQAKAAAGgEQAFgFAAgIQAAgRgVAAIgbAAgAjuA1IAAhoIBOAAIAAAQIg7AAIAAAcIA0AAIAAAPIg0AAIAAAcIA8AAIAAARgAkdA1IAAgtIgyAAIAAAtIgSAAIAAhoIASAAIAAArIAyAAIAAgrIATAAIAABogAmrA1IAAhXIghAAIAAgRIBVAAIAAARIghAAIAABXgAooA1IAAhoIBOAAIAAAQIg7AAIAAAcIA1AAIAAAPIg1AAIAAAcIA8AAIAAARgAteA1IAAhXIghAAIAAgRIBVAAIAAARIghAAIAABXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-89.5,-5.4,179.1,10.9), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-124.3,-20.7,248.6,41.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApMG7QgZgaAAgnQAAgiAPgcQARgdAcgSQAdgSAhAAQAoAAAaAaQAaAbAAAmQABAggRAeQgPAcgdATQgdASghAAQgpAAgagagAoeEgQgWAPgMAYQgNAZAAAZQABAeASAUQAUAUAfAAQAaAAAWgPQAXgPAMgYQAMgXAAgbQABgegUgUQgSgUgfAAQgbAAgXAPgAipHLIANgSQALAGAPAAQAZAAAYggIgxigIAaAAIApCJIBmiJIAcAAIh9CmQgkAvgmAAQgZAAgMgJgALoHRIAJggIAbAAIgIAggAJ8HRIAuitIisCtIgVAAIA4jSIAXAAIguCtICritIAWAAIg3DSgAGjHRIg0hoIg8AyIgPA2IgYAAIA5jSIAXAAIghB9ICXh9IAiAAIhyBcIA8B2gAC8HRIAzi9Ih1AAIgyC9IgXAAIA4jSICjAAIg4DSgAjlHRIg1hoIg9AyIgOA2IgYAAIA5jSIAXAAIghB9ICXh9IAiAAIhyBcIA9B2gArHHRIAzi9Ih1AAIgyC9IgXAAIA4jSICjAAIg4DSgAL+GVIAJgwIACgCQAhgCASgNQATgMABgVQAAgQgMgIQgKgJgTAAQgdAAgZAYIgNgQQAdgeApAAQAcAAARAPQARAPAAAXQAAAcgWARQgWASgiAEIgNAhgABqBTQgZgaAAgnQAAghAPgcQARgdAcgSQAcgSAiAAQApAAAZAaQAaAbAAAmQAAAfgPAeQgQAcgdATQgcASgiAAQgpAAgagagACYhHQgWAPgMAYQgNAZAAAYQABAeASAUQAUAUAfAAQAaAAAWgPQAXgPAMgYQANgXAAgaQAAgegUgUQgSgUgfAAQgbAAgXAPgAlOBVQgZgYAAgnQAAghAQgeQATgfAbgRQAegTAiAAQAcAAAUAMQAUAMALAVIgVANQgLgSgNgJQgOgJgWAAQgoAAgeAhQgdAgAAAqQAAAeASASQATASAdAAQAjAAAegdIAQAQQgjAjgwAAQglAAgbgYgAE8BpIA4jRIAXAAIg4DRgAicBpIA5jRIBOAAQAeAAARANQARANAAAXQAAAVgOAPQgPAOgWAFQAkALAAAfQAAAcgYARQgWASgpAAgAh/BUIBGAAQAdAAAQgMQAQgLAAgTQAAgQgMgIQgOgJgVAAIg/AAgAhlgLIA8AAQAdAAAPgLQAQgMAAgSQAAgPgLgIQgKgIgUAAIg8AAgAGPh7IAIgdIAbAAIgIAdgAFah7IAIgdIAbAAIgIAdgALIkUQgagaAAgnQAAgiAPgcQARgdAcgSQAcgSAiAAQApAAAaAaQAaAbAAAmQAAAggQAeQgQAcgdATQgcASgiAAQgpAAgZgagAL2mvQgXAPgMAYQgNAZAAAZQAAAeAUAUQATAUAeAAQAbAAAXgPQAWgPAMgYQANgXAAgbQgBgegSgUQgTgUggAAQgaAAgWAPgAkYkEIAPgSQAKAGAPAAQAZAAAYggIgwigIAZAAIApCJIBniJIAcAAIh9CmQglAvgmAAQgZAAgNgJgAtlkFQgUgLgLgRIASgNQAWAeAnAAQAYAAAQgMQAPgMAAgRQAAgSgOgKQgPgJgVAAIgSAAIAEgUIAWAAQAbAAASgLQARgMABgTQAAgQgNgJQgMgJgTAAQgdAAgaAUIgOgPQAfgaAoAAQAdAAASAOQAUAPgBAXQAAAWgPAPQgRAOgcAFQASAGALALQALANAAARQAAAagYASQgWARgjAAQgbAAgUgKgAHVj+IA4jSIBBAAQApAAAUATQAOAQAAAXQAAAkgcAVQgcAUgvAAIgyAAIgUBLgAIGleIAtAAQAlAAAUgOQAVgPAAgZQAAgPgJgKQgOgNgcAAIgvAAgAGFj+IAyi9Ih1AAIgyC9IgYAAIA5jSICkAAIg5DSgAg8j+IA4jSIBOAAQAeAAARANQASANAAAXQAAAVgPAPQgQAOgWAFQAlAMAAAfQAAAcgXARQgYASgpAAgAgfkTIBFAAQAbAAASgMQAQgLAAgTQAAgQgNgIQgOgJgVAAIg/AAgAgGlzIA6AAQAdAAAQgLQARgMAAgSQAAgPgLgIQgLgIgVAAIg7AAgAnhj+IA5jSICSAAIgFAVIh7AAIgSBBIA7AAQAgAAASANQASAPAAAYQAAAkgcASQgbASgwAAgAnDkUIA5AAQAjAAATgMQATgMAAgYQAAgQgMgJQgMgJgWAAIg+AAgAoej+IgKg4IhyAAIgoA4IgaAAICZjUIAXAAIAnDUgAorlLIgThsIhNBsIBgAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-90,-46.9,180.1,93.8), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwByIglgkIh3AAQgcAAgTgFQgYgGgOgNQgTgTAAgjIAAhlQgBgHAGgFQAEgEAIAAICDAAQAdAAASAGQAZAEAOAOQASARABAlIAABkIAdAeQAEAEABAGQgBAGgFAFQgFAFgGAAQgGAAgEgDgAlTAAQABAZANAMIABABQANAKAaACICEAAIAAhZQgBgZgLgMIgDgCQgMgKgbgBIiEAAgAEoBNQglgBgRgLQgMgIgDgPIAAgEQABgGAEgEQAFgDAFAAQAHAAAFADQADADACAEIABADQAFAGAHADQAIADAPAAIBHAAQAnAAAMgGQAFgCACgHQACgFABgJIAAgCQgBgOgFgFQgKgHgZAAIhgAAQghABgOgMQgNgNAAgaIAAgMQAAgXARgMQAVgMA1gBIA0AAQAqAAASALQAPAJACAQIAAADQAAAGgDADQgGAFgGAAQgGAAgFgEQgEgCgBgEIgBgDQgFgIgMgCQgJgCgYgBIg1AAQghAAgKAGQgKAEAAAQIAAAHQAAAMAGAGQAIAFAWAAIBSAAQAoAAARAJQAWAMAAAiQAAAlgeAMQgRAHgmAAgAAgBNQguAAgYgOQghgRAAguIAAgnQAAgvAhgSQAYgNAuAAIAtAAQAvAAAYANQAgASAAAvIAAAnQAAAuggARQgYAOgvAAgAgVhQQgRANAAAdIAAAmQAAAcARAMQAOAKAdAAIBAAAQAeAAAPgKQARgMAAgcIAAgmQAAgdgRgNQgPgKgeAAIhAAAQgdAAgOAKgAnFBJQgFgFAAgHIAAihQAAgIAFgDQAEgGAHAAQAIAAAEAGQAEADABAIIAAChQgBAHgEAFQgEAEgIAAQgHAAgEgEg");
	this.shape.setTransform(2.6,0.5,1,1,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-43.9,-11.2,91.8,23.5), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-41,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-41,-100,82,200), null);


(lib.boxes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.boxes();
	this.instance.parent = this;
	this.instance.setTransform(-82,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes_1, new cjs.Rectangle(-82,-78,164,156), null);


(lib.bgImg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg3_1, new cjs.Rectangle(-150,-100,300,200), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-100,300,200), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-150,-100,300,200), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#ECD087","#A27B3A","#000000","#000000"],[0,1,1,1],0,-299,0,299).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3B47D").ss(2,2,0,3).p("Agbg2IA3A2Ig3A3");
	this.shape.setTransform(0.5,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3B47D").s().p("AhmAJIAAgRIDNAAIAAARg");
	this.shape_1.setTransform(-8.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-18.9,-5.1,23.5,13.8), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(59.6,-0.7,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:62},3,cjs.Ease.get(1)).to({x:59.6},2).wait(3).to({x:62},3,cjs.Ease.get(1)).to({x:59.6},2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuAnQgPgQAAgXQAAgVAPgQQAQgQAYAAQAXAAAQAQQAPAPAAAWQAAAXgPAPQgQAQgYAAQgXAAgQgPgAhggZQgKAKAAAPQAAAQAKALQAKALAQAAQAPAAAKgLQAKgLAAgQQAAgOgKgLQgKgLgQAAQgPAAgKALgAmiAxIAHgOQAGAEAHAAQAKAAAGgMIgrhOIAUAAIAhA8IAdg8IAUAAIgpBRQgMAYgWAAQgJAAgLgFgAGUA1IgkgwIgQARIAAAfIgTAAIAAhoIATAAIAAAzIAygzIAWAAIgrAtIAtA7gAENA1IAAhMIg1BMIgSAAIAAhoIASAAIAABLIA2hLIARAAIAABogAAXA1IAAhoIATAAIAABXIApAAIAAhXIASAAIAABXIAqAAIAAhXIASAAIAABogAilA1IgkgwIgQARIAAAfIgTAAIAAhoIATAAIAAAzIAygzIAWAAIgrAtIAtA7g");
	this.shape.setTransform(-19,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuDDSIAAmjIcHAAIAAGjg");
	this.shape_1.setTransform(-1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.2,-21,180,42);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,279.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,-254.4,1.16,1.16,0,0,0,1.8,0.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10).wait(114).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(40));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).to({alpha:1},10).wait(20).to({alpha:0},10,cjs.Ease.quadInOut).wait(1));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,116.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({alpha:1},10).wait(25).to({alpha:0},10).to({_off:true},1).wait(40));

	// btn
	this.instance_4 = new lib.btn("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.5,194.5,0.02,0.02,0,0,0,0,2.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({regX:-0.5,regY:0.5,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(55).to({mode:"synched",loop:false},0).wait(20).to({startPosition:14},0).to({alpha:0,startPosition:0},10,cjs.Ease.get(-1)).wait(1));

	// boxes
	this.instance_5 = new lib.boxes_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-232,-57);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).to({x:-42},10,cjs.Ease.get(1)).wait(35).to({x:-232},10,cjs.Ease.get(-1)).to({_off:true},1).wait(40));

	// dev
	this.instance_6 = new lib.dev_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(194,-93);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off:false},0).to({x:66},10,cjs.Ease.get(1)).wait(35).to({x:196},10,cjs.Ease.get(-1)).to({_off:true},1).wait(40));

	// bgImg1
	this.instance_7 = new lib.bgImg1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-200);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},10,cjs.Ease.get(1)).wait(19).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(135));

	// bgImg2
	this.instance_8 = new lib.bgImg2_1();
	this.instance_8.parent = this;
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},10,cjs.Ease.get(1)).wait(19).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(135));

	// bgImg3
	this.instance_9 = new lib.bgImg3_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,200);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},10,cjs.Ease.get(1)).wait(19).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(135));

	// t1
	this.instance_10 = new lib.t1();
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).wait(40).to({alpha:0},10).to({_off:true},1).wait(95));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(175));

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
	id: 'D78E0080C82B4A91A29A8C60B712AE41',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/boxes.png", id:"boxes"},
		{src:"images/dev.png", id:"dev"}
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
an.compositions['D78E0080C82B4A91A29A8C60B712AE41'] = {
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