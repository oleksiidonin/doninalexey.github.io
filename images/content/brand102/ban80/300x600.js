(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.devs = function() {
	this.initialize(img.devs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,248);// helper functions:

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
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A0nClMApPAAAIAAlJMgpPAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqvBoIAAhEIAIAAIAAAKQAHgLANAAQAJAAAIAHQAHAHAAANQAAAMgHAHQgIAIgJAAQgMAAgIgLIAAAagAqiAvQgGAGAAAJQAAAIAGAGQAGAGAHAAQAIAAAFgGQAFgFAAgJQAAgKgFgFQgFgFgIAAQgHAAgGAFgAwrBoIAAhEIAIAAIAAAKQAHgLANAAQAJAAAIAHQAHAHAAANQAAAMgHAHQgIAIgJAAQgMAAgIgLIAAAagAweAvQgGAGAAAJQAAAIAGAGQAGAGAHAAQAIAAAFgGQAFgFAAgJQAAgKgFgFQgFgFgIAAQgHAAgGAFgAEXBkIAAgMIgqAAIgBAMIgHAAIAAgTIAGAAQAHgNAAgXIAAgJIAlAAIAAAtIAIAAIADABIAEgBIADgDIADgGIABgNIABgXIAkAAIAAA0IgHAAIAAgtIgWAAIgBAVQAAAHgCAGQgBADgDAEIgEAEIgGAAIgGAAIgBAMgAD5AyQAAAUgGALIAcAAIAAgmIgWAAgAx0BkIAAgMIgqAAIgBAMIgHAAIAAgTIAGAAQAHgNAAgXIAAgJIAlAAIAAAtIAIAAIgCATgAySAyQAAAUgGALIAcAAIAAgmIgWAAgASXBRQgHgIAAgNIAAgJIABgHIACgIIADgFQACgEADgBQADgCAFgBIAdgHIABAGIgcAHQgIADgDAEQgDADgBAJQAHgMAPAAQAKAAAHAIQAHAIAAAKQAAALgHAIQgIAIgLAAQgMAAgHgIgASdAwQgFAGAAAIQAAAJAFAFQAFAGAIAAQAIAAAFgGQAFgFAAgJQAAgIgFgFQgFgGgIAAQgIAAgFAFgARBBRQgIgIAAgLQAAgMAIgHQAIgIALAAQAMAAAJAJIgFAFQgIgHgIAAQgIAAgFAFQgGAHAAAIQAAAIAGAGQAFAGAIAAQAIAAAIgIIAFAFQgJAKgMAAQgLAAgIgIgAQHBRQgHgIAAgLQAAgMAIgHQAHgIAMAAQALAAAIAIQAIAHAAAMQAAALgIAIQgIAIgLAAQgMAAgIgIgAQNAvQgFAGAAAJQAAAIAFAGQAGAGAIAAQAIAAAFgGQAGgFAAgJQAAgIgGgHQgFgFgIAAQgJAAgFAFgAKfBRQgHgIAAgLQAAgMAIgHQAHgIAMAAQALAAAIAIQAIAHAAAMQAAALgIAIQgIAIgLAAQgMAAgIgIgAKlAvQgFAGAAAJQAAAIAFAGQAGAGAIAAQAIAAAFgGQAGgFAAgJQAAgIgGgHQgFgFgIAAQgJAAgFAFgAHzBRQgIgIAAgLQAAgMAIgHQAIgIALAAQAMAAAIAIQAHAHAAAMQAAALgIAIQgHAIgMAAQgLAAgIgIgAH5AvQgGAGAAAJQAAAIAGAGQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgIgFgHQgFgFgJAAQgIAAgFAFgAlSBRQgHgHAAgMQAAgLAHgIQAHgIALAAQALAAAGAIQAHAHAAAMIAAADIgpAAQAAAIAGAEQAGAFAGAAQAJAAAHgHIAFAEQgJAKgMAAQgLAAgIgIgAlMAuQgEAFgBAIIAhAAQgBgJgEgEQgEgFgIAAQgGAAgFAFgAnHBUQgGgEAAgIQAAgIAGgEQAGgFAKAAQAHAAAJADIAAgCQAAgGgEgEQgEgEgHAAQgJAAgHAEIgCgHQAIgEALAAQALAAAFAGQAGAFAAAKIAAAgIgIAAIAAgIQgHAJgMAAQgHAAgGgFgAnBBAQgEADAAAFQAAAFAEADQAEACAFAAQAHAAAFgDQAFgFAAgFIAAgFQgGgCgJAAQgHAAgEACgAo3BRIAEgGQAIAHAJAAQAFAAAEgCQAEgDAAgEQAAgEgDgCQgEgDgGAAIgHAAIAAgGIAHAAQAFAAADgCQAEgDAAgEQAAgEgEgBQgDgDgFAAQgIAAgHAGIgEgGQAIgGAMAAQAIAAAGAEQAFAEAAAGQAAAIgJADQAKAEAAAJQAAAHgGAEQgFAFgKAAQgMAAgJgIgAvjBRQgIgIAAgLQAAgMAIgHQAIgIALAAQAMAAAIAIQAHAHAAAMQAAALgIAIQgHAIgMAAQgLAAgIgIgAvdAvQgGAGAAAJQAAAIAGAGQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgIgFgHQgFgFgJAAQgIAAgFAFgAxgBRQgIgIAAgLQAAgMAIgHQAIgIALAAQAMAAAIAIQAHAHAAAMQAAALgIAIQgHAIgMAAQgLAAgIgIgAxaAvQgGAGAAAJQAAAIAGAGQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgIgFgHQgFgFgJAAQgIAAgFAFgAzSBRIADgGQAJAHAJAAQAFAAAEgCQAEgDAAgEQAAgEgEgCQgEgDgFAAIgHAAIAAgGIAHAAQAEAAAEgCQADgDAAgEQAAgEgDgBQgEgDgEA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");
	this.shape_1.setTransform(-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-133,-17.5,266,35), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-87.8,-46,175.7,92.1), null);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AClAnQgQgQAAgXQAAgWAQgQQAPgQAYAAQAYAAARAQQAPAQAAAWQAAAXgQAQQgQAQgYAAQgYAAgPgQgACygZQgJAKgBAPQABAPAJALQALAMAPAAQAQAAAKgMQALgKgBgQQABgPgLgKQgLgMgPAAQgPAAgLAMgAqWAnQgPgPgBgYQABgWAPgQQAPgQAYAAQAYAAARAPIgMAOQgNgMgQAAQgPAAgKAMQgKAKAAAPQAAAQAKALQAKALAQAAQAPAAALgJIAAgTIgbAAIAAgQIAsAAIAAAsQgSARgZAAQgZAAgPgQgAsWAnQgPgQAAgXQAAgWAPgQQAQgQAYAAQAYAAARAQQAPAQgBAWQAAAXgPAQQgRAQgXAAQgYAAgQgQgAsIgZQgKAKAAAPQAAAPAKALQAKAMAQAAQAQAAAKgMQAJgKAAgQQAAgPgJgKQgKgMgQAAQgQAAgKAMgAHkA2IgahMIgbBMIgPAAIglhqIAUAAIAaBNIAahNIAPAAIAaBNIAahNIATAAIglBqgAN0A1IAAgVIAUAAIAAAVgAMJA1IAAhpIAmAAQAaAAAPAPQAPAPAAAWQAAAXgPAPQgPAPgaAAgAMbAkIAUAAQARAAAKgKQALgKgBgQQABgPgLgKQgKgKgRAAIgUAAgALdA1IgaglIgYAAIAAAlIgSAAIAAhpIAvAAQATAAAKAKQAKAIABAPQgBAYgZAIIAdAogAKrAAIAbAAQAXAAAAgRQAAgSgXAAIgbAAgAJwA1IgKgaIgzAAIgKAaIgTAAIAuhqIASAAIAuBqgAJfALIgSgqIgSAqIAkAAgAFdA1IgaglIgXAAIAAAlIgSAAIAAhpIAvAAQASAAAKAKQALAIAAAPQAAAYgZAIIAdAogAEsAAIAcAAQAVAAAAgRQAAgSgVAAIgcAAgAA2A1IAAhpIBPAAIAAARIg8AAIAAAcIA1AAIAAARIg1AAIAAArgAggA1IAAgVIAUAAIAAAVgAhIA1IgaglIgXAAIAAAlIgSAAIAAhpIAvAAQASAAAKAKQALAIAAAPQAAAYgZAIIAdAogAh5AAIAbAAQAWAAAAgRQAAgSgWAAIgbAAgAjvA1IAAhpIBOAAIAAAQIg8AAIAAAcIA1AAIAAAQIg1AAIAAAcIA9AAIAAARgAkfA1IAAgtIgyAAIAAAtIgTAAIAAhpIATAAIAAAsIAyAAIAAgsIATAAIAABpgAmuA1IAAhYIghAAIAAgRIBVAAIAAARIghAAIAABYgAosA1IAAhpIBOAAIAAAQIg8AAIAAAcIA2AAIAAAQIg2AAIAAAcIA9AAIAAARgAtlA1IAAhYIgiAAIAAgRIBXAAIAAARIgiAAIAABYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t, new cjs.Rectangle(-90.4,-5.5,180.8,11), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhwByIglgkIh3AAQgcAAgTgFQgYgGgOgNQgTgTAAgjIAAhlQgBgHAGgFQAEgEAIAAICDAAQAdAAASAGQAZAEAOAOQASARABAlIAABkIAdAeQAEAEABAGQgBAGgFAFQgFAFgGAAQgGAAgEgDgAlTAAQABAZANAMIABABQANAKAaACICEAAIAAhZQgBgZgLgMIgDgCQgMgKgbgBIiEAAgAEoBNQglgBgRgLQgMgIgDgPIAAgEQABgGAEgEQAFgDAFAAQAHAAAFADQADADACAEIABADQAFAGAHADQAIADAPAAIBHAAQAnAAAMgGQAFgCACgHQACgFABgJIAAgCQgBgOgFgFQgKgHgZAAIhgAAQghABgOgMQgNgNAAgaIAAgMQAAgXARgMQAVgMA1gBIA0AAQAqAAASALQAPAJACAQIAAADQAAAGgDADQgGAFgGAAQgGAAgFgEQgEgCgBgEIgBgDQgFgIgMgCQgJgCgYgBIg1AAQghAAgKAGQgKAEAAAQIAAAHQAAAMAGAGQAIAFAWAAIBSAAQAoAAARAJQAWAMAAAiQAAAlgeAMQgRAHgmAAgAAgBNQguAAgYgOQghgRAAguIAAgnQAAgvAhgSQAYgNAuAAIAtAAQAvAAAYANQAgASAAAvIAAAnQAAAuggARQgYAOgvAAgAgVhQQgRANAAAdIAAAmQAAAcARAMQAOAKAdAAIBAAAQAeAAAPgKQARgMAAgcIAAgmQAAgdgRgNQgPgKgeAAIhAAAQgdAAgOAKgAnFBJQgFgFAAgHIAAihQAAgIAFgDQAEgGAHAAQAIAAAEAGQAEADABAIIAAChQgBAHgEAFQgEAEgIAAQgHAAgEgEg");
	this.shape.setTransform(2.6,0.5,1,1,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-43.9,-11.2,91.8,23.5), null);


(lib.dev_3duo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(126,114,104,0.6)").s().p("AggAaQgFgBgCgDIgCgEIgBAAIABgIIABgDIADgEIAFgDIAFgBIAGgBIAFABIAFABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIACABIABACIACAEQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABIgBACIgDADQgBACgEACIgIADIgFACIgCAAIgDAAgAAJAFIgDgDIgCgFQgBgCABgDIAAgDIABgEIADgDIAFgDIADgBIACAAIAGgCIAGgBIADAAIAFADIADADIABABIABAHIgCAGIgEAFIgEACIgCABIgQADg");
	this.shape.setTransform(-32.1,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(126,114,104,0.6)").s().p("AgNAPIgDgDIgCgFQgBgDABgDIAAgCIABgEIADgCIAFgEIADgBIACAAIAFgCIAGgBIADAAIAFADIADADIABACIABAHIgCAEIgEAFIgEADIgCABIgPADg");
	this.shape_1.setTransform(-29.8,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},10).wait(1));

	// Слой_1
	this.instance = new lib.devs();
	this.instance.parent = this;
	this.instance.setTransform(-59,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-124,118,248);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


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
	this.shape.graphics.f().s("#9B9B9B").ss(2,2,0,3).p("Agbg2IA3A2Ig3A3");
	this.shape.setTransform(7.5,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B9B9B").s().p("AhmAJIAAgRIDNAAIAAARg");
	this.shape_1.setTransform(-1.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-11.9,-6.1,23.6,13.8), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(42.1,-0.7,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:44.5},3,cjs.Ease.get(1)).to({x:42.1},2).wait(3).to({x:44.5},3,cjs.Ease.get(1)).to({x:42.1},2).wait(1));

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwAuQgOgNAAgUQAAgTANgNQAOgOAUAAQAVAAAOAOIgKAMQgMgMgNAAQgNAAgIAKQgJAJAAANQAAANAJAKQAIAJANAAQANAAAMgMIAKALQgQAQgTAAQgUAAgNgOgAERA6IAAhLIgdAAIAAgPIBKAAIAAAPIgdAAIAABLgADNA6IAAhBIguBBIgPAAIAAhaIAQAAIAABCIAuhCIAPAAIAABagABsA6IgJgWIgrAAIgKAWIgQAAIAohaIAPAAIAoBagABdAWIgQgjIgPAjIAfAAgAiNA6IgJgWIgrAAIgJAWIgQAAIAohaIAOAAIAoBagAicAWIgPgjIgQAjIAfAAgAkCA6IAAgmIgrAAIAAAmIgQAAIAAhaIAQAAIAAAlIArAAIAAglIAQAAIAABagACjg5IAJgCQADAJAIAAQAIAAADgJIAKACQgDASgSAAQgSAAgCgSg");
	this.shape.setTransform(-16.8,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ArjDNIAAmZIXHAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-20.5,148,41);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-249.5,1.16,1.16,0,0,0,1.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,269);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(151));

	// btn
	this.instance_2 = new lib.btn("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,183.5,1,1,0,0,0,-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({mode:"synched",loop:false},0).wait(31));

	// t
	this.instance_3 = new lib.t();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,116.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85).to({_off:false},0).to({alpha:1},10).wait(45).to({x:-240},10,cjs.Ease.get(-1)).wait(1));

	// dev_3duo
	this.instance_4 = new lib.dev_3duo("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(207,-45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85).to({_off:false},0).to({x:4},10,cjs.Ease.get(1)).wait(10).to({mode:"synched",loop:false},0).wait(35).to({startPosition:11},0).to({x:-236,startPosition:0},10,cjs.Ease.get(-1)).wait(1));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-35);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},15).wait(55).to({alpha:0},15).to({_off:true},1).wait(65));

	// bgImg
	this.instance_6 = new lib.bgImg_1();
	this.instance_6.parent = this;
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({alpha:1},15).wait(30).to({alpha:0},15).to({_off:true},1).wait(65));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(151));

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
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/devs.png", id:"devs"}
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