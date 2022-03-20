(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_atlas_P_", frames: [[552,722,300,304],[0,0,710,720],[712,0,300,304],[0,722,550,558],[552,1028,324,238],[854,306,142,65],[712,306,140,26]]},
		{name:"300x600_atlas_NP_", frames: [[0,0,300,600],[0,602,61,61],[63,602,27,85]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img1 = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img2 = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.img3 = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img4 = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.intel_logo = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.laptop2 = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shadow = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.win_logo = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.win_logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.win_logo();
	this.instance.parent = this;
	this.instance.setTransform(-56,-10,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.win_logo_1, new cjs.Rectangle(-56,-10,112,20.8), null);


(lib.t5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADYA1IAAgRIg2AAIgBARIgIAAIAAgZIAHAAQAIgPAAgeIAAgLIAvAAIAAA4IAKAAIgBAZgACygLQAAAZgIAOIAkAAIAAgwIgcAAgADvAgQgIgFAAgKQAAgKAIgGQAHgEANAAQAJAAAMACIAAgCQAAgIgGgFQgEgEgKAAQgKAAgKAEIgDgIQANgFALAAQAOAAAHAHQAHAHAAAMIAAAnIgJAAIAAgJQgJALgPAAQgKAAgHgGgAD2AHQgFADAAAHQAAAGAFADQAFAEAHAAQAKAAAFgFQAHgFAAgIIAAgGQgKgDgKAAQgIAAgGAEgAhbAcQgJgKAAgOQAAgOAJgKQALgKAOAAQAOAAAKAKQAKALAAANQAAAOgKAKQgJAKgPAAQgPAAgKgKgAhUgOQgGAHAAALQAAALAHAHQAHAHAKAAQALAAAGgHQAHgIAAgKQAAgKgHgIQgHgHgKAAQgLAAgHAHgAjHAcQgKgJAAgPQAAgOAJgKQAJgKAOAAQAOAAAIAKQAIAKAAAOIAAAEIg0AAQABAKAHAFQAGAGAJAAQANAAAIgJIAGAGQgLAMgQAAQgOAAgJgKgAidAAQAAgIgGgHQgFgGgKAAQgIAAgGAGQgGAGgBAJIAqAAIAAAAgAm9AcQgKgKAAgOQAAgNAKgLQAKgKAOAAQAPAAAKAKQAKALAAANQAAAOgKAKQgKAKgPAAQgPAAgJgKgAm2gOQgHAIAAAKQAAAKAHAIQAHAHAKAAQALAAAHgHQAGgHAAgLQAAgLgHgHQgGgHgLAAQgKAAgHAHgAIVAkIAAgNIAMAAIAAANgAH5AkIAAgYIgSAAIgTAYIgMAAIAUgZQgHgCgFgFQgFgEAAgIQAAgJAHgGQAGgFAMAAIAfAAIAABAgAHZgQQgEADAAAGQAAAGAEACQAEADAHAAIAVAAIAAgYIgVAAQgHAAgEAEgAGxAkIAAgzIgnAzIgKAAIAAhAIAKAAIAAAzIAngzIAKAAIAABAgAFjAkIAAgcIgmAAIAAAcIgKAAIAAhAIAKAAIAAAcIAmAAIAAgcIAKAAIAABAgACFAkIAAgzIgnAzIgKAAIAAhAIAKAAIAAAzIAngzIAKAAIAABAgAA+AkIgWgeIgNAOIAAAQIgKAAIAAgQIgNgOIgVAeIgMAAIAbgkIgZgcIALAAIAhAlIAAglIAKAAIAAAlIAhglIAMAAIgaAcIAbAkgAjqAkIAAhAIAKAAIAABAgAkrAkIAAhAIAKAAIAAAYIARAAQAMAAAHAEQAHAFAAAKQAAAKgHAGQgHAFgLAAgAkhAcIARAAQAIAAAEgDQAEgEAAgGQAAgFgEgDQgEgDgIAAIgRAAgAlzAkIAAhAIAgAAQAJAAAGAEQAGAFAAAHQAAALgLADQAPAEAAAMQAAAIgHAGQgGAEgLAAgAlqAcIAWAAQAHAAAEgDQAFgDAAgFQAAgFgFgDQgFgCgHAAIgVAAgAlqAAIAVAAQAGAAADgDQAEgDAAgFQAAgEgDgCQgDgDgHAAIgVAAgAniAkIAAgnIg0AAIAAAnIgKAAIAAhYIAKAAIAAAoIA0AAIAAgoIAKAAIAABYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5_2, new cjs.Rectangle(-54.4,-5.3,109,10.6), null);


(lib.t5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AElAjQgKgKABgOQgBgNAKgKQALgLAOAAQAOAAALAKQAJAKAAAOQAAAOgKAKQgKAKgOAAQgPAAgKgKgAEtgGQgIAGAAALQAAAKAIAIQAHAHAKAAQALAAAGgHQAHgHAAgLQAAgKgHgHQgGgIgLAAQgLAAgGAIgACLAjQgKgKABgOQgBgNAKgKQALgLAOAAQAPAAAJAKQALALAAANQAAAOgLAKQgJAKgPAAQgOAAgLgKgACTgGQgHAGAAALQAAALAHAHQAHAHAKAAQALAAAHgHQAGgIAAgKQAAgKgGgHQgIgIgKAAQgLAAgGAIgAhNAjQgKgJAAgPQAAgNAJgLQAJgKANAAQAPAAAIAKQAIAKAAAOIAAAEIg0AAQABAKAHAGQAGAGAJAAQAMAAAJgKIAGAGQgMAMgPAAQgPAAgIgKgAgiAHQgCgJgFgGQgFgGgKAAQgIAAgGAGQgGAHgBAIIArAAIAAAAgAj1AjQgJgJAAgPQAAgNAJgLQAJgKAOAAQAOAAAIAKQAIAKAAAOIAAAEIg0AAQABAKAGAGQAHAGAJAAQAMAAAIgKIAHAGQgMAMgPAAQgOAAgKgKgAjKAHQgBgIgFgHQgFgGgKAAQgJAAgFAGQgHAHAAAIIAqAAIAAAAgAnqAjQgLgKABgOQgBgNALgKQAKgLAOAAQAPAAAJAKQAKALAAANQAAAOgKAKQgKAKgOAAQgOAAgKgKgAnjgGQgIAGABALQgBAKAIAIQAHAHAKAAQALAAAHgHQAGgHAAgLQAAgLgHgGQgHgIgKAAQgLAAgGAIgADJArIACgIIAEABIAEgBQACAAACgDIAEgJIABgPIABgYIAAgFIAvAAIAABAIgKAAIAAg4IgbAAIAAACQAAAOgCALQAAAJgCAHQgCAHgDACQgCADgEACIgHABIgIgCgAJCArIAAgNIAMAAIAAANgAImArIAAgyIgnAyIgKAAIAAhAIAKAAIAAAzIAogzIAJAAIAABAgAHZArIAAgyIgoAyIgJAAIAAhAIAKAAIAAAzIAngzIAJAAIAABAgAFvArIAAhAIAtAAIAAAIIgjAAIAAA4gABoArIAAgcIglAAIAAAcIgKAAIAAhAIAKAAIAAAbIAlAAIAAgbIAKAAIAABAgAAgArIgUgaIgTAaIgMAAIAZghIgYgfIAMAAIASAYIATgYIALAAIgZAfIAaAhgAh+ArIAAg4IgXAAIAAgIIA5AAIAAAIIgXAAIAAA4gAkYArIAAhAIAKAAIAABAgAlZArIAAhAIAKAAIAAAXIASAAQALAAAHAFQAIAGAAAJQAAAKgHAGQgGAFgMAAgAlPAjIASAAQAHAAAFgDQAEgDAAgHQAAgFgFgDQgDgDgIAAIgSAAgAmhArIAAhAIAhAAQAJAAAGAEQAGAFAAAHQAAAKgLAEQAOAEAAANQABAHgHAGQgGAEgLAAgAmXAjIAWAAQAIAAADgDQAFgDgBgFQABgFgFgCQgEgDgIAAIgVAAgAmXAGIAUAAQAHAAADgDQAEgDAAgEQAAgEgDgCQgFgDgGAAIgUAAgAoPArIAAgoIg0AAIAAAoIgKAAIAAhXIAKAAIAAAnIA0AAIAAgnIAKAAIAABXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5_1, new cjs.Rectangle(-59,-4.5,118,9.1), null);


(lib.t4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(7.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4_3, new cjs.Rectangle(-60.1,-29,134.3,58.1), null);


(lib.t4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(8.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4_2, new cjs.Rectangle(-38.9,-16.9,93.9,33.8), null);


(lib.t4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(7.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4_1, new cjs.Rectangle(-64.5,-18.1,144.3,36.2), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmtDoIAAiYIAbAAIAAAUQAQgWAYAAQAWAAAPAQQARARAAAcQAAAbgRASQgPAQgWAAQgYgBgQgUIAAA1gAmIBwQgLALAAAQQAAARALAKQAJAKAOAAQAPABAJgLQAKgLAAgQQAAgRgKgKQgKgLgOAAQgOAAgJALgAkUC/QgMgLAAgRQAAgTANgKQANgJAVAAQAQAAAQAFIAAgCQAAgZgcAAQgPgBgTAIIgHgWQAVgJAXgBQA0ABAAAxIAABFIgbAAIAAgOQgOARgYAAQgRgBgMgIgAj/CUQgHAFAAAJQAAAJAHAEQAGAFAKgBQANAAAJgGQAJgHAAgLIAAgHQgNgFgOAAQgNABgHAEgAL3DFIAAhOIg4BOIgZAAIAAh1IAaAAIAABOIA4hOIAZAAIAAB1gAJqDFIAAh1IAaAAIAAB1gAH2DFIAAh1IAbAAIAAApIAYAAQAVAAAMAJQAOAJAAATQAAASgMAKQgMALgVAAgAIRCvIAXAAQAVAAAAgRQAAgQgWAAIgWAAgAG6DFIAAgvIg0AAIAAAvIgbAAIAAh1IAbAAIAAAwIA0AAIAAgwIAaAAIAAB1gAEvDFIAAgrQgRAIgSABQgSAAgLgKQgLgKAAgSIAAgtIAbAAIAAAnQAAAJAFAFQAGAHAIgBQAPAAAOgHIAAg0IAaAAIAAB1gACsDFIAAhOIg4BOIgZAAIAAh1IAaAAIAABOIA4hOIAZAAIAAB1gAAFDFIAAheIglAAIAAgXIBmAAIAAAXIgmAAIAABegAhFDFIgkgwIgTAUIAAAcIgaAAIAAh1IAaAAIAAA5IAzg5IAgAAIguAyIAxBDgAnpDFIAAheIgzAAIAABeIgbAAIAAh1IBoAAIAAB1gAq1DFIAAhOIg4BOIgZAAIAAh1IAaAAIAABOIA4hOIAZAAIAAB1gALEA6QgJgIgCgOIAQgDQAFAPAOAAQANAAAFgPIAQADQgCAOgJAIQgJAJgOAAQgOAAgKgJgAjrhKQgNgLAAgRQAAgSAOgKQAMgKAWAAQARAAAPAFIAAgCQAAgZgdAAQgRAAgQAHIgHgVQAVgKAXAAQAzAAAAAxIAABGIgaAAIAAgPQgPARgXAAQgSAAgLgJgAjdhnQAAAJAGAEQAHAFAKAAQANAAAJgHQAJgHAAgLIAAgHQgNgEgOAAQgbAAAAASgAnOhSQgSgRAAgbQAAgaAQgRQARgSAZAAQAaAAAQATQAOASAAAaIgBAHIhWAAQACAOAKAJQAJAHANABQARgBAPgOIAPAPQgSAVgeAAQgaAAgQgRgAmJiGQgBgOgIgIQgIgJgNAAQgMAAgIAJQgIAIgCAOIA8AAIAAAAgAsQhcIASgSQAWAVAXAAQAUAAAOgNQAOgMADgUIhGAAIAAgXIBGAAQgEgTgOgMQgOgNgTAAQgXAAgVATIgPgTQAZgYAiAAQAjAAAWAXQAXAXAAAiQAAAigXAXQgWAXgiAAQgnAAgZgbgAp0hDIACgXIAIACQAMAAAEgPQAHgVAAg8IBYAAIAAB1IgbAAIAAhfIgkAAQAAA7gLAVQgJAQgWAAgAIXhDIAAhPIg3BPIgaAAIAAh1IAbAAIAABOIA3hOIAZAAIAAB1gAGKhDIAAh1IAbAAIAAB1gAEWhDIAAh1IAbAAIAAAoIAZAAQAUABANAIQANAKAAATQAAARgMALQgMALgUAAgAExhZIAXAAQAVAAAAgRQAAgRgVABIgXAAgADahDIAAgvIg0AAIAAAvIgbAAIAAh1IAbAAIAAAvIA0AAIAAgvIAbAAIAAB1gAA1hDIAAhfIglAAIAAgWIBmAAIAAAWIgmAAIAABfgAgfhDIAAgvIg0AAIAAAvIgbAAIAAh1IAbAAIAAAvIA0AAIAAgvIAbAAIAAB1gAlThDIAAh1IBSAAIAAAWIg4AAIAABfgAHljPQgJgHgDgPIARgCQAEAOAOAAQANAAAFgOIARACQgDAPgJAHQgJAJgOAAQgOAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-78.4,-23.2,157,46.5), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJABPIAcghQAZAXAZAAQAQAAAJgIQAKgHAAgOIAAAAQAAgOgKgHQgKgIgRAAQgSAAgRAIIgbgSIAGhmICBAAIAAApIhZAAIgDAkQAPgEANAAQAgAAATAQQAWARAAAhIAAABQAAAhgWATQgVAUgkAAQgtAAgigggAmmBXQgYgWAAglIAAAAQAAgiAWgYQAXgZAiAAQAmAAAVAbQATAYAAAjIgBAMIhvAAQAHAfAgAAQAWAAARgQIAaAXQgYAdgpABQglAAgXgYgAlNAOQgCgOgJgJQgJgKgOAAQgcABgGAgIBEAAIAAAAgAE0BZQgWgXAAgmIAAgBQAAgmAWgWQAVgWAeAAQAdABAVAXIAAhPIAtAAIAADZIgtAAIAAgXQgTAagfAAQgeAAgVgVgAFXgEQgMAMAAATIAAABQAAATAMAMQALAMAQAAQARAAALgMQALgMAAgTIAAgBQAAgTgLgMQgLgMgRAAQgQAAgLAMgAB7BhQgQgNAAgXIAAgBQAAgZASgNQARgMAdAAQASgBAWAHIAAgCQAAgcgjAAQgVAAgXAIIgLgiQAcgOAiAAQAkAAASASQARASAAAgIAABdIgsAAIAAgSQgSAVgeAAQgYAAgPgNgACfAqQgIAGAAAKIAAABQAAAJAHAGQAHAEALAAQAQABAJgJQAKgHAAgNIAAgIQgNgFgQAAQgOAAgJAFgAj5BhQgQgNAAgXIAAgBQAAgZASgNQARgMAeAAQARgBAWAHIAAgCQAAgcgjAAQgVAAgXAIIgLgiQAdgOAhAAQAlAAARASQARASAAAgIAABdIgsAAIAAgSQgSAVgeAAQgYAAgPgNgAjdA6IAAABQAAAJAHAGQAHAEALAAQAQABAJgJQAKgHAAgNIAAgIQgNgFgQAAQgfgBAAAWgApwBZQgXgXAAgmIAAgBQAAgmAXgWQAUgWAeAAQAeABAUAXIAAhPIAtAAIAADZIgtAAIAAgXQgTAagfAAQgeAAgUgVgApOgEQgLAMAAATIAAABQAAATALAMQAMAMAQAAQAQAAALgMQAMgMAAgTIAAgBQAAgTgMgMQgLgMgQAAQgRAAgLAMgAhKBrIAAjQIBUAAQAlABAWATQAVAUAAAgIAAABQAAAigYAUQgXASglAAIgiAAIAAA/gAgcAEIAjAAQARAAAKgIQAKgJAAgOIAAgBQAAgOgKgJQgKgIgRAAIgjAAgArdBrIAAjQIAuAAIAADQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-73.3,-11,146.8,22.1), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj/DfIAJgUQAIAFAIAAQAKAAAGgOIgxhzIAdAAIAgBWIAehWIAcAAIguB3QgGARgJAIQgJAHgOAAQgOAAgNgHgAp6DfIAJgUQAJAFAHAAQAKAAAGgOIgwhzIAcAAIAhBWIAehWIAbAAIguB3QgGARgJAIQgJAHgOAAQgOAAgNgHgAl6CzQgPgRAAggQgBghAIgSQAKgYAdgGIA/gNIAEAWIg/ANQgcAGgCAbQAFgJAKgGQAMgHARAAQAXAAAPAQQARARAAAYQAAAYgRARQgSARgZAAQgcAAgQgSgAlmBxQgJALAAAPQAAAPAKAKQAJALAOAAQAPAAAJgLQAKgKgBgPQAAgPgJgLQgKgKgOAAQgOAAgKAKgAr3CzQgRgRAAgZQAAgZARgSQASgRAaAAQAbAAASARQARARAAAaQAAAZgRARQgSASgbAAQgaAAgSgSgArkBvQgKAKAAAQQAAAPAKAMQALAKAOABQAQgBAKgKQAKgLAAgQQAAgPgKgLQgLgLgPAAQgPAAgKALgAgpDCIgjgvIgSAUIAAAbIgbAAIAAhzIAbAAIAAA3IAxg3IAgAAIgtAxIAwBCgAnbDCIAAhcIgmAAIAAgXIBmAAIAAAXIglAAIAABcgAs+DCIAAguIgyAAIAAAuIgbAAIAAhzIAbAAIAAAvIAyAAIAAgvIAbAAIAABzgAE+hRQgRgRAAgaQgBgZARgSQAQgRAYAAQAaAAAPASQAOARAAAbIgBAHIhUAAQACAOAJAIQAJAHANABQAQgBAPgOIAQAPQgSAVgeAAQgZAAgQgRgAGCiEQgCgOgHgIQgIgJgNAAQgMAAgHAIQgJAJgBAOIA7AAIAAAAgAsIhSQgSgRAAgZQAAgZASgRQASgSAaAAQAbAAARARQASASAAAZQAAAYgSASQgRASgbAAQgaAAgSgSgAr2iWQgJAKAAAQQAAAPAKALQALALAOAAQAQAAAKgLQAJgLAAgPQABgQgKgKQgLgMgPAAQgQAAgKAMgACahDIACgVIAIABQAMAAAEgPQAGgUAAg8IBYAAIAABzIgbAAIAAhcIgkAAQAAA6gLAUQgIAPgXAAgAN6hDIAAhNIg3BNIgZAAIAAhzIAaAAIAABNIA3hNIAYAAIAABzgALwhDIAAhNIg3BNIgaAAIAAhzIAbAAIAABNIA2hNIAZAAIAABzgAJuhDIgjgvIgTAUIAAAbIgaAAIAAhzIAaAAIAAA3IAyg3IAgAAIgtAxIAwBCgAG3hDIAAhzIBRAAIAAAXIg3AAIAABcgAAuhDIAAhNIg2BNIgZAAIAAhzIAaAAIAABNIA2hNIAYAAIAABzgAidhDIAAhNIg3BNIgaAAIAAhzIAbAAIAABNIA2hNIAZAAIAABzgAkphDIAAhNIg2BNIgZAAIAAhzIAZAAIAABNIA4hNIAYAAIAABzgAmqhDIgjgvIgTAUIAAAbIgaAAIAAhzIAaAAIAAA3IAzg3IAeAAIgsAxIAxBCgAo1hDIAAguIgzAAIAAAuIgbAAIAAhzIAbAAIAAAuIAzAAIAAguIAaAAIAABzgAtihDIAAiAIgwAAIAAgZIB8AAIAAAZIgxAAIAACAgANIjMQgJgIgCgOIAQgDQAFAPANAAQAOAAAEgPIAQADQgCAOgIAIQgKAJgOAAQgOAAgJgJgAjQjMQgIgIgDgOIARgDQADAPAPAAQAOAAAEgPIAQADQgCAOgKAIQgIAJgOAAQgOAAgKgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-91.5,-23,183.1,46), null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-71,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(-71,-32.5,142,65), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-11,-34,0.802,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-11,-34,21.7,68), null);


(lib.laptop2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.laptop2();
	this.instance.parent = this;
	this.instance.setTransform(-118,-87,0.728,0.728);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop2_1, new cjs.Rectangle(-118,-87,236,173.4), null);


(lib.intel_logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.intel_logo();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.intel_logo_1, new cjs.Rectangle(-25,-25,50,50), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-152,0.545,0.545);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-150,-152,300,304.4), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-150,-152,300,304), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-355,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-355,-360,710,720), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-150,-152,300,304), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC6B0QgKgKAAgPQAAgQAKgJQAJgLAOAAQAOAAAIALQAJAJAAAQIAAAEIg2AAQACAKAGAGQAHAGAJAAQAMAAAJgJIAHAGQgMAMgQAAQgPAAgJgKgADmBXQgBgKgGgGQgFgHgKAAQgIAAgGAHQgGAFgCALIAsAAIAAAAgAijB0QgKgLAAgOQAAgOAKgLQALgLAOAAQAQAAAJALQAKAKAAAPQAAAOgKALQgKAKgPAAQgPAAgKgKgAicBIQgGAHAAAMQAAALAHAHQAHAIAKAAQALAAAHgIQAHgHAAgLQAAgKgHgJQgHgHgLgBQgKABgIAHgAj2B0QgJgKAAgSIABgVQABgHACgCIAEgIIAHgGIAKgEIAlgJIACAIIgkAJQgKADgFAGQgEAGgBAKQAJgPATAAQAOAAAJAJQAJAKAAAOQAAAPgKAKQgJAKgPAAQgQAAgJgKgAjuBJQgHAIAAAKQAAAMAHAGQAHAIAKAAQALAAAGgIQAHgGAAgMQAAgKgHgIQgHgHgKAAQgKAAgHAHgAhhB9IABgJIAFABIAEgBIAEgEIAEgJIACgPIABgfIAvAAIAABEIgKAAIAAg7IgcAAIAAABQAAAQgBAKQgBAMgCAFQgCAHgDADQgCADgEACIgHABgAA+B9IAAhEIAKAAIAAA7IAhAAIAAg7IAKAAIAAA7IAhAAIAAg7IAKAAIAABEgAgGB9IAAhEIAJAAIAAAZIARAAQANAAAHAGQAHAEAAAKQAAALgHAFQgGAHgMAAgAADB0IASAAQAIgBAEgDQAEgDAAgHQAAgFgEgDQgFgDgIAAIgRAAgADOgnQgJgKAAgPQAAgPAJgKQAJgKAOAAQAPAAAIAKQAIAKAAAQIAAADIg1AAQABAKAGAGQAHAGAJAAQAMAAAKgJIAGAFQgMANgQAAQgOAAgKgKgAD6hFQgBgIgFgIQgHgGgJAAQgIAAgGAGQgGAHgBAJIArAAIAAAAgAisgnIAFgHQALAIALAAQAHAAAFgDQAFgDAAgGQAAgGgEgCQgFgDgIAAIgJAAIAAgIIAJAAQAHAAAEgDQAEgEAAgEQAAgFgEgDQgFgDgFABQgNAAgIAGIgFgHQAMgIAOAAQALAAAHAEQAHAGAAAIQAAALgLAEQAMAEAAAMQAAAJgHAGQgHAGgMAAQgPAAgNgKgAj9ghIAEgIQAFADAHAAQALAAAHgOIgohGIAMAAIAhA8IAdg8IALAAIgkBIQgKAVgSAAQgIAAgHgEgAgQgjQgHgFAAgLQAAgKAIgGQAHgFANAAQAKAAAKACIAAgBQAAgKgFgEQgFgFgKAAQgIAAgLAFIgDgIQANgGAKAAQAPAAAHAIQAHAGAAANIAAApIgKAAIAAgKQgJAMgPAAQgKAAgHgGgAgIg9QgFAEAAAGQAAAHAFADQAFAEAGAAQAJgBAHgFQAGgFAAgHIAAgHQgJgCgKAAQgJgBgFAEgACbgfIAAg6IgZAAIAAgJIA7AAIAAAJIgYAAIAAA6gABqgfIAAg1IgoA1IgKAAIAAhDIAKAAIAAA2IAog2IAKAAIAABDgAgygfIAAgdIgnAAIAAAdIgKAAIAAhDIAKAAIAAAdIAnAAIAAgdIAKAAIAABDgABKhwQgFgEgCgIIAHgBQADAJAJAAQAIAAADgJIAHABQgBAIgFAEQgFAEgHABQgIgBgEgEg");
	this.shape.setTransform(-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1272D6").ss(1,2,0,3).p("AlQjaIKhAAIAAG1IqhAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#064884").s().p("AlQDbIAAm1IKhAAIAAG1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-34.7,-22.9,69.4,45.8), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-120,-240,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-120,-240,240,480), null);


(lib.t5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.intel_logo_1();
	this.instance.parent = this;
	this.instance.setTransform(-24,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(55,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5_3, new cjs.Rectangle(-49,-36,148.2,50), null);


(lib.laptop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img4
	this.instance = new lib.img4_1();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(33));

	// img3
	this.instance_1 = new lib.img3_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},15).wait(33));

	// img2
	this.instance_2 = new lib.img2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0,0.423,0.422,0,0,0,0.1,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({alpha:1},15).to({alpha:0},15).wait(3));

	// img1
	this.instance_3 = new lib.img1_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},30).wait(1).to({_off:false},0).wait(17));

	// shadow
	this.instance_4 = new lib.shadow_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.3,100,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-152,300,304.4);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_322 = function() {
		if(num >= 2){
			this.stop();
		}else{
			num++;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(322).call(this.frame_322).wait(63));

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(109,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(385));

	// win_logo
	this.instance_1 = new lib.win_logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-52,-210.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(305).to({_off:false},0).to({alpha:1},15).wait(49).to({alpha:0},15).wait(1));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(76.6,203,0.02,0.02,0,0,0,2.5,2.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(305).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(19).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(3).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(19).to({alpha:0},15).wait(1));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-32.8,-188.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({alpha:1},15).wait(260).to({y:-118.8},15,cjs.Ease.get(1)).wait(64).to({alpha:0},15).wait(1));

	// t5_3
	this.instance_4 = new lib.t5_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-61.9,212.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(385));

	// t5_2
	this.instance_5 = new lib.t5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-53.2,-167.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(305).to({_off:false},0).to({alpha:1},15).wait(49).to({alpha:0},15).wait(1));

	// t5_1
	this.instance_6 = new lib.t5_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-48.6,-183.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(305).to({_off:false},0).to({alpha:1},15).wait(49).to({alpha:0},15).wait(1));

	// t4_3
	this.instance_7 = new lib.t4_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-49,-111.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(125).to({_off:false},0).to({alpha:1},15).wait(25).to({alpha:0},15).to({_off:true},1).wait(204));

	// t4_2
	this.instance_8 = new lib.t4_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-68.2,-99.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(235).to({_off:false},0).to({alpha:1},15).wait(25).to({alpha:0},15).to({_off:true},1).wait(94));

	// t4_1
	this.instance_9 = new lib.t4_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-43.4,-100.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(180).to({_off:false},0).to({alpha:1},15).wait(25).to({alpha:0},15).to({_off:true},1).wait(149));

	// t3
	this.instance_10 = new lib.t3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-27.7,-95.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70).to({_off:false},0).to({alpha:1},15).wait(25).to({alpha:0},15).to({_off:true},1).wait(180).to({_off:false,regX:-0.3,regY:-0.3,scaleX:0.86,scaleY:0.86,x:-37.7,y:-76.7},0).to({alpha:1},15).wait(48).to({alpha:0},15).wait(1));

	// t1
	this.instance_11 = new lib.t1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-14.6,-76.3);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).to({alpha:1},15).wait(25).to({alpha:0},15).to({_off:true},1).wait(314));

	// laptop2
	this.instance_12 = new lib.laptop2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,54);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(290).to({_off:false},0).to({alpha:1},15).wait(64).to({alpha:0},15).wait(1));

	// laptop
	this.instance_13 = new lib.laptop("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-0.1,63,0.567,0.567,0,0,0,-0.1,0);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},15).wait(44).to({mode:"synched",loop:false},0).wait(15).to({mode:"single",startPosition:15},0).wait(45).to({startPosition:15},0).to({scaleX:0.8,scaleY:0.8,y:43},15,cjs.Ease.quadInOut).wait(40).to({startPosition:15},0).to({regY:0.1,scaleX:1.83,scaleY:1.83,x:-46.2,y:217.2},15,cjs.Ease.quadInOut).wait(40).to({mode:"synched",loop:false},0).to({scaleX:2.37,scaleY:2.37,x:-145.2,y:-35.9,mode:"single",startPosition:30},15,cjs.Ease.quadInOut).wait(31).to({startPosition:30},0).to({alpha:0},15).to({_off:true},1).wait(94));

	// bg
	this.instance_14 = new lib.bg_1();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(385));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-240,240,480);


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
	this.instance.setTransform(150,300,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '6C8BF234883E46B3A3B88F3B2B09E900',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_atlas_P_.png", id:"300x600_atlas_P_"},
		{src:"images/300x600_atlas_NP_.jpg", id:"300x600_atlas_NP_"}
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
an.compositions['6C8BF234883E46B3A3B88F3B2B09E900'] = {
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