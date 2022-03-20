(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/light.png", id:"light"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,447);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,395,447);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,120);


(lib.дшпре = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.light();
	this.instance.setTransform(-231,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-231,-60,462,120);


(lib.t5 = function() {
	this.initialize();

	// Режим изоляции
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,141.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHBtIAAgfIhtAAIAAiTIAQAAIAACDIBMAAIAAiDIAQAAIAACDIARAAIAAAvgAHlhFIAQAAIAABwIBoh3IAACaIgRAAIAAhwIhnB3gAFGhFIARAAIAABwIBnh3IAACaIgQAAIAAhwIhoB3gAAUhFIARAAIAABwIBnh3IAACaIgQAAIAAhwIhoB3gApFA7QgXgXAAghQAAgfAXgWQAWgWAhAAQAgAAAXAWQAWAWAAAfQAAAhgWAXQgXAWggAAQghAAgWgWgAo5gmQgSASAAAXQAAAaASASQASASAZAAQAZAAASgSQARgSAAgaQAAgXgRgSQgSgSgZAAQgZAAgSASgAEPBOIAAhJIhMAAIAABJIgQAAIAAiTIAQAAIAAA8IBMAAIAAg8IARAAIAACTgAghBOIAAiTIARAAIAACTgAjrBOIAAiTIAQAAIAACTgAliBOIAAgVIgEAAQgmAAgRgUQgOgPAAgWQAAgWAOgQQARgUAmAAIAEAAIAAgRIAQAAIAAARIAEAAQAmAAARAUQANAPAAAXQAAAWgNAPQgRAUgmAAIgEAAIAAAVgAlSApIAFAAQAbAAANgOQALgLAAgQQAAgRgLgLQgNgOgbAAIgFAAgAmPgcQgLALAAARQAAAQALALQANAOAbAAIAFAAIAAhTIgFAAQgbAAgNAOgAH+hnIAQgFQADAMAQAAQAPAAAEgMIAPAFQgIAWgaAAQgbAAgIgWgAA2hbQgHgGgBgGIAPgFQAEAMAPAAQAQAAADgMIAQAFQgIAWgbAAQgQAAgKgKg");
	this.shape_1.setTransform(76.8,-66.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140,-77.8,280,232.5);


(lib.t3_7 = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADKBOQgggfgBgvQABgsAgggQAegfAtAAQAuAAAhAfQAeAeAAAuQAAAvgeAfQghAeguAAQgtAAgegegADbg7QgaAaAAAhQAAAiAaAaQAYAaAiAAQAjAAAagaQAYgYAAgkQAAghgYgaQgXgYgmAAQgiAAgYAYgAjLBUQgRgTAAgdQAAgXARgWIBIhiIAQANIgvBDIATgEQAdAAATAUQAUARAAAeQAAAfgUAVQgVAUgfAAQgiAAgWgYgAi3AEQgOANAAATQABAyAxAAQAWAAANgPQANgNgBgWQABgVgQgNQgNgLgVAAQgVAAgNANgAosBOQgWglAAgpQAAgqAWggQAVghAhAAQAeAAAWAhQAVAcABAuQgBAvgVAfQgWAegeAAQghAAgVgegAobg9QgPAYAAAlQAAAkAPAdQANAVAYAAQAVAAANgVQAQgdAAgkQAAglgQgYQgPgYgTAAQgWAAgPAYgAJ7BoIAcg7IhQiTIAcAAIBBB5IA2h5IAYAAIhdDOgAIgBoIhXhgIgEAHIAABZIgYAAIAAjOIAYAAIAABYIBZhYIAeAAIhiBhIBkBtgAAoBoIAAjOIAlAAQAkAAAPAPQAUARAAAaQAAA5hBAAIgWAAIAABbgAA9gHIATAAQAsAAAAglQAAglguAAIgRAAgAlLBoIAAi5IgiAAIALgVIAvAAIAADOgArxBoIBkhzQAKgQABgRQAAgpgqAAQgWAAgNAUQgGAKAAANIgYAAQADgXAPgUQAVgWAaAAQAdAAAQAUQAUARAAAaQAAAWgPAWIhJBSIBYAAIAAAWg");
	this.shape.setTransform(-0.6,37.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,26.7,150.9,21.7);


(lib.t3_6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArLgaIgPBjIgQAAIAZiYIA2B6IA4h6IAYCYIgRAAIgNhjIgyBqgAQIA2QgWgWAAgeQAAgfAWgWQAVgVAhAAQAYAAAUAPIAAAUQgLgMgJgCQgJgGgPAAQgaAAgQARQgQASgBAYQAAAcAUAPQARAPAWABQASgBAIgGQAPgGADgHIAAAWQgSANgaAAQghAAgVgWgANcA2QgWgWAAgeQAAgfAWgWQAYgVAeAAQAfAAAVAVQAWAWAAAfQAAAegWAWQgVAWgfAAQggAAgWgWgANpgoQgSASAAAYQAAAYASARQARASAYAAQAYAAARgSQASgRAAgYQAAgYgSgSQgRgRgYAAQgYAAgRARgAobA2QgVgWAAgeQAAgfAVgWQAWgVAfAAQAgAAAWAVQAVAWAAAfQAAAegVAWQgWAWggAAQgfAAgWgWgAoQgoQgSASAAAYQAAAYASARQARASAZAAQAXAAARgSQASgRAAgYQAAgYgSgSQgRgRgXAAQgZAAgRARgAuEA2QgVgWgBgeQABgfAVgWQAWgVAhAAQAeAAAWAVQAVAWAAAfQAAAegVAWQgWAWgeAAQghAAgWgWgAt3goQgSASAAAYQAAAYASARQARASAZAAQAYAAAQgSQASgRAAgYQAAgYgSgSQgQgRgYAAQgZAAgRARgATjBJIAAiPIASAAIAACPgASbBJIAAiAIglAAIAAgPIBYAAIAAAPIgjAAIAACAgAMYBJIAAhHIhJAAIAABHIgSAAIAAiPIASAAIAAA7IBJAAIAAg7IAQAAIAACPgAJJBJIAAiPIAbAAQAYAAALAIQAMAOAAARQAAARgOAMQAcAGAAAdQgBAXgPAHQgLAKgYAAgAJbA7IARAAQAUAAAHgHQAJgGAAgNQgBgQgKgHQgNgEgNAAIgQAAgAJbgHIALAAQAfAAAAgYQAAgYgdAAIgNAAgAIVBJIAAg/IgIAAIgpA/IgUAAIAphBQgNABgKgJQgNgJgBgTQAAgSALgLQALgNAaAAIAhAAIAACPgAHsguQgGAHgBALQAAAPAKAEQALAHAKAAIARAAIAAg1IgOAAQgUAAgHAJgAG2BJIgRgoIg9AAIgSAoIgTAAIBDiWIBBCWgAGeARIgYg5IgYA5IAwAAgAEgBJIAAhHIhMAAIAABHIgPAAIAAiPIAPAAIAAA7IBMAAIAAg7IAPAAIAACPgAAfBJIAAiPIAaAAQAWAAALAIQANAOAAARQAAARgPAMQAcAGAAAdQAAAXgQAHQgKAKgYAAgAAuA7IAUAAQARAAAHgHQAKgGAAgNQABgSgNgFQgJgEgQAAIgRAAgAAugHIAOAAQAcAAAAgYQAAgYgcAAIgOAAgAhHBJIAAiPIAPAAIAACPgAh9BJIAAiAIg5AAIAABMQAAAjgOAJQgGAIgRAAIgJAAIAAgOIAJAAQAJAAAEgFQAJgJAAgeIAAhVIBZAAIAACPgAkJBJIAAiPIAPAAIAACPgAl8BJIAAiPIBIAAIAAAPIg5AAIAAAuIATAAQAyAAAAAnQABArgwAAgAltA7IATAAQASgBAJgIQAGgHAAgNQABgRgLgFQgHgEgSAAIgRAAgAvUBJIAAiAIgjAAIAAgPIBXAAIAAAPIgjAAIAACAgAxbBJIAAiPIAaAAQAYAAALAIQANAOgBARQABARgQAMQAdAGAAAdQAAAXgPAHQgLAKgZAAgAxKA7IASAAQATAAAHgHQAIgGABgNQAAgQgMgHQgNgEgMAAIgQAAgAxKgHIALAAQAeAAAAgYQAAgYgcAAIgNAAgAyABJIgRgoIg+AAIgRAoIgUAAIBEiWIBBCWgAyYARIgYg5IgYA5IAwAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.9,-8,253.8,16.1);


(lib.t3_5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0UgxIAACbIgYAAIAAjRICfCjIAAidIAXAAIAADUgAMSBQQgfgfAAgtQAAgsAfgcQAggfAsAAQArAAAfAfQAeAcAAAsQAAAtgeAfQgfAegrAAQgsAAgggegAMjg1QgYAYAAAhQAAAiAYAbQAYAYAjAAQAjAAAYgYQAXgbAAgiQAAghgXgYQgYgYgjAAQgjAAgYAYgAGIBWQgRgTAAgaQAAgYARgWIBDhgIASANIguBBIASgCQAcAAATAUQASAPAAAcQAAAfgUAWQgTATgfAAQggAAgUgYgAGZAIQgNANAAAUQAAATANAPQANAOAWAAQAWAAANgOQANgPAAgTQAAgugwAAQgWAAgNANgAAuBQQgTgcAAgwQAAgqATgeQAWgfAeAAQAfAAAWAfQATAeAAAqQAAAwgTAcQgWAegfAAQgeAAgWgegABAg3QgQAYAAAjQAAAnAQAYQAPAWATAAQAUAAAPgWQAPgYAAgnQAAgjgPgYQgPgYgUAAQgTAAgPAYgAn/BQQgWghAAgrQAAgoAWggQAWgfAeAAQAdAAAYAfQATAeAAAqQAAAwgTAcQgYAegdAAQgeAAgWgegAntg3QgQATAAAoQAAArAQAUQANAWAVAAQAUAAAPgWQAPgYAAgnQAAgjgPgYQgPgYgUAAQgVAAgNAYgAqtBQQgTgcAAgwQAAgqATgeQAWgfAeAAQAfAAAWAfQATAeAAAqQAAAwgTAcQgWAegfAAQgeAAgWgegAqbg3QgQAYAAAjQAAAnAQAYQAPAWATAAQAUAAAPgWQAPgYAAgnQAAgjgPgYQgPgYgUAAQgTAAgPAYgAtkBJQgEgGAAgNIAWAAIAJATQAKAQAUAAQAPAAANgOQALgKAAgSQAAgYgTgLIgYgEIAAgSQARAAAHgEQARgGAAgYQAAgjgjAAQgRAAgJANQgEAEgFASIgVAAQAAgNAIgSQAQgYAgAAQA5AAAAA3QAAAggaAMQAeAKAAAlQAAAcgRASQgUARgaAAQgpAAgQglgAS6BqIAag5IhOiSIAcAAIA/B2IA0h2IAYAAIhbDLgARhBqIhTheIgHAHIAABXIgVAAIAAjLIAVAAIAABXIBXhXIAfAAIhgBgIBiBrgAJ1BqIAAjLIAjAAQAjAAARAQQAUARAAAaQAAA3hCAAIgTAAIAABZgAKLgDIARAAQAsAAAAglQAAgjgsAAIgRAAgAEKBqIAAi1IgjAAIANgWIAsAAIAADLgAiPBqIBihxQALgQAAgPQAAgpgqAAQgWAAgKATQgHAHAAARIgYAAQACgVANgWQAUgUAcAAQAcAAASASQARARAAAaQAAAUgPAWIhGBQIBVAAIAAAWgAkQBqIAAhOIgGgYQgJgHgNAAQgNAAgJAJQgIAJAAAXIAABEIgWAAIAAjcIAWAAIAABtQARgSAUAAQAYAAAKASQAJANAAAUIAABOgAviBqIgthVIgwBVIgYAAIA7hoIg3hjIAaAAIAqBPIArhPIAaAAIg4BjIA6Bog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.5,-11.5,265.2,23.1);


(lib.t3_4 = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjwBMQgVgcgBgwQABgvAVgcQATgfAhAAQAiAAAUAfQAWAgAAArQAAAsgWAgQgWAfggAAQgeAAgWgfgAjeg+QgQATABArQgBAsAQATQAMAWAWAAQAYAAANgWQAPgYAAgnQAAgngPgXQgQgYgVAAQgUAAgOAYgAmsBIQgEgJgBgNIAWAAQAHASACACQAJAPAXAAQAnAAAAgpQAAgagUgJQgGgEgRAAIAAgUQANACAKgGQASgHAAgXQAAglgjAAQgRAAgLANQgEAEgFARIgVAAQAAgNAJgRQARgYAgAAQA7AAAAA5QAAAggcANQAeAHAAApQAAAcgSARQgTASgaAAQgrAAgPgjgArXBMQggggAAgsQAAgtAggeQAggfAsAAQAuAAAgAfQAeAeAAAtQAAAugeAeQggAfguAAQguAAgegfgArGg8QgZAaAAAiQAAAjAZAaQAYAYAjAAQAkAAAZgYQAagaAAgjQAAgigagaQgZgYgkAAQgjAAgYAYgAOjBoIAAhdIgMAAIg7BdIgcAAIA9hdQgagGgJgFQgRgPAAgcQgBgcANgNQAUgUAgAAIAyAAIAADQgANphHQgLARAAALQAAAPANANQALAJAVAAIAYAAIAAhMIgVAAQgYAAgNALgAMDBoIAAhoIhqAAIAABoIgXAAIAAjQIAXAAIAABVIBqAAIAAhVIAYAAIAADQgAHdBoIAAjQIAlAAQAeAAASANQASAUAAAYQABAagWAPQApAGAAAsQAAAcgVARQgUAPgeAAgAH0BRIAaAAQAaAAALgJQAOgJAAgTQgBgWgRgJQgNgGgXAAIgXAAgAH0gKIASAAQAnAAAAgjQAAglgnAAIgSAAgAFOBoIAAjQIAlAAQAlAAARAQQAUARAAAcQAAAYgQAPQgUARggAAIgTAAIAABbgAFmgGIATAAQAsAAgBgnQAAglgtAAIgRAAgAC3BoIAAjQIBsAAIAAAWIhVAAIAAA/IBTAAIAAATIhTAAIAABRIBVAAIAAAXgABqBoIAAhbQgNADgdAAQgnAAgNgLQgSgNAAghIAAg/IAVAAIAAA7QABAaANAJQAGAGAfAAQAeAAAKgCIAAhiIAYAAIAADQgAs4BoIAAi6IhqAAIAAC6IgYAAIAAjQICZAAIAADQg");
	this.shape.setTransform(-0.1,-37.8,1,1,0,0,0,-0.1,-37.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.5,-10.7,191.1,21.5);


(lib.t3_3 = function() {
	this.initialize();

	// Режим изоляции
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiyANIAFgCQADAJAJAAQAFAAADgCQAEgDAAgFQAAgKgNABIgFAAIAAgEIAFAAQAKAAAAgIQAAgDgCgCQgCgCgFAAQgGAAgDAFIgFgDQAFgIAJABQAHAAADADQAEAEAAAFQAAAHgHADQAKABAAAKQAAAHgGAEQgEADgHAAQgMABgFgMgACuAXIAAgVIgDAAIgOAVIgGAAIAOgVQgFAAgDgCQgEgDAAgFQAAgHADgDQAEgEAIgBIALAAIAAAugAChgPQgDADAAAEQAAADADADQADACAEAAIAGAAIAAgRIgFAAQgGAAgCACgACJAXIAAgXIgYAAIAAAXIgGAAIAAguIAGAAIAAAUIAYAAIAAgUIAGAAIAAAugABTAXIAAgoIgMAAIAAgGIAdAAIAAAGIgMAAIAAAogAA7AXIAAguIAFAAIAAAugAAVAXIAAguIAIAAQAIAAADADQAFAEAAAGQAAAHgFADQAJAAAAAKQAAAHgFADQgEADgHAAgAAaATIAGAAQAGAAACgCQAEgDAAgEQAAgEgEgDQgDgCgGABIgFAAgAAagCIAEAAQAJAAAAgIQAAgHgJAAIgEAAgAAGAXIgSgVIgBABIAAAUIgFAAIAAguIAFAAIAAAVIASgVIAIAAIgVAXIAVAXgAg/AXIAAgoIgIAAIACgGIALAAIAAAugAhoAXIAAgoIgIAAIACgGIALAAIAAAug");
	this.shape.setTransform(0.5,0,4.33,4.33,0,0,0,0.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.8,-10.8,155.6,21.7);


(lib.t3_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALLCYIAAgsIiaAAIAAjPIAYAAIAAC5IBqAAIAAi5IAYAAIAAC5IAYAAIAABCgAFThjIAYAAIAACfICSinIAADXIgYAAIAAidIiSCogACUA+IAVgLQAQAoAnAAQAVAAALgJQAQgNAAgWQAAgpg3AAIgTAAIAAgUIATAAQApAAAAgjQAAgPgIgHQgJgKgTAAQgbAAgPAYIgRgQQAWgeAlAAQAcAAARAPQAPAPAAAYQAAAhgcALQApAGAAAuQAAAfgaAVQgTANgcAAQg1AAgVgygAhEBSQghgfAAgvQAAguAhgfQAfgeArAAQAuAAAgAeQAfAfAAAuQAAAvgfAfQggAeguAAQgrAAgfgegAg1g3QgYAYAAAjQAAAlAYAYQAaAaAhAAQAjAAAagaQAYgYAAglQAAgjgYgYQgagagjAAQghAAgaAagAoNBSQgggfAAgvQAAguAggfQAfgeAtAAQAuAAAhAeQAeAfAAAuQAAAvgeAfQghAeguAAQgtAAgfgegAn9g3QgYAYAAAjQAAAlAYAYQAaAaAiAAQAjAAAagaQAYgYAAglQAAgjgYgYQgagagjAAQgiAAgaAagANOBsIAAjPIAYAAIAADPgAMCBsIAAjPIAYAAIAADPgAimBsIAAi5IhtAAIAAC5IgVAAIAAjPICYAAIAADPgAqyBsIAAjPIAnAAQAlAAAPAPQAUASAAAaQAAA5hDAAIgUAAIAABbgAqagDIAUAAQArAAAAglQAAglguAAIgRAAgAr+BsIAAi5IhtAAIAAC5IgWAAIAAjPICZAAIAADPgANhiIQAAgPAQAAQARAAAAAPQAAAPgRAAQgQAAAAgPgAM0iIQAAgPAPAAQARAAAAAPQAAAPgRAAQgPAAAAgPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.8,-15.2,179.6,30.5);


(lib.t3_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEICCIAAgrIibAAIAAjQIAYAAIAAC5IBrAAIAAi5IAWAAIAAC5IAYAAIAABCgAksCCIAAgrIiUAAIAAArIgVAAIAAhCQATAAANgcQAJgWAAgeIAAhpIB+AAIAAC5IAYAAIAABCgAmWgQQAAAjgHAWQgJARgIAGIBoAAIAAiiIhQAAgAtqh5IAYAAIAACfICSinIAADYIgYAAIAAieIiSCmgAJxA9QghgfAAguQAAgwAhgeQAegeAugBQAuABAeAeQAhAgAAAuQAAAugfAfQggAeguAAQguAAgegegAKAhNQgYAYAAAlQAAAjAYAYQAaAaAjAAQAjAAAYgaQAagaAAghQAAgigagbQgYgagjAAQgjAAgaAagAP7BXIAAjQIAXAAIAADQgANTBXIAAjQIAnAAQAhAAAPAOQARALAAAgQAAAagTAPQAnAJAAAqQAAAegWAPQgPAOgjAAgANrBAIAaAAQAaAAALgIQAPgLAAgRQAAgWgTgJQgHgEgcAAIgYAAgANrgdIARAAQAqAAAAgjQAAgigqAAIgRAAgAINBXIAAhlIhrAAIAABlIgYAAIAAjQIAYAAIAABWIBrAAIAAhWIAYAAIAADQgAE+BXIAAjQIAWAAIAADQgAgnBXIAAjQIAYAAIAADQgAhzBXIAAhlIhtAAIAABlIgVAAIAAjQIAVAAIAABWIBtAAIAAhWIAWAAIAADQgAoMBXIAAjQIAWAAIAADQgAqMBXIAAjQIBgAAIAAAXIhIAAIAAC5gAwRBXIAAjQIAnAAQAgAAAQAOQARALAAAgQAAAagUAPQAoAJAAAqQAAAegWAPQgPAOgjAAgAv5BAIAaAAQAaAAALgIQAPgLAAgRQAAgWgUgJQgGgEgdAAIgXAAgAv5gdIARAAQApAAAAgjQAAgigpAAIgRAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.3,-13,208.6,26.1);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFCBKIARAAIAABtIBkhzIAACWIgRAAIAAhvIhkB1gAHTC5IARgGQAJAZAdAAQANAAAHgGQANgHAAgPQAAgdgoAAIgMAAIAAgPIAMAAQAfAAAAgYQgBgJgFgGQgIgHgMAAQgQAAgMAPIgNgJQAMgVAdAAQAUAAAKAKQAMAIAAASQAAAVgUAKQAdAGAAAgQAAAWgSAMQgPALgSAAQglAAgQgkgAisDGQgUgTgCgeIgVAAIAABFIgQAAIAAiQIAQAAIAAA8IAVAAQAFgbATgSQAWgSAcAAQAfAAAVAVQAWAVAAAhQAAAfgWAXQgVAVgfAAQggAAgUgXgAihBmQgQASAAAaQAAAYAQASQARAQAYAAQAYAAAQgQQARgSAAgYQAAgagRgSQgQgQgYAAQgYAAgRAQgAllDIQgVgXAAgfQAAghAVgVQAVgVAhAAQAYAAASANIAAAVQgKgKgIgDQgPgGgLAAQgYAAgQASQgQAQAAAaQAAAbATAQQARAPAUAAQARAAAKgGQAOgHADgFIAAAUQgSAPgaAAQgfAAgVgVgADfDaIAAiQIAbAAQAYAAAMAJQANAMAAATQAAApguAAIgNAAIAAA/gADwCMIANAAQAeAAAAgbQAAgYggAAIgLAAgACrDaIAAiBIhLAAIAACBIgQAAIAAiQIBqAAIAACQgAgRDaIAAiQIAYAAQAZAAANAJQALAKAAAVQABApguAAIgLAAIAAA/gAAACMIAKAAQAgAAAAgbQAAgYggAAIgKAAgAG/i5IAQAAIAABvIBlh1IAACXIgRAAIAAhvIhkB1gAEmi5IAOAAIAABvIBlh1IAACXIgPAAIAAhvIhkB1gAgJiMIgPBkIgRAAIAYiZIA2B6IA5h6IAWCZIgQAAIgNhkIgyBqgAlJi5IARAAIAABvIBkh1IAACXIgQAAIAAhvIhlB1gAijg7QgUgVAAggQAAghAUgVQATgVAhAAQAZAAAWAOIAAAVQgLgLgJgDQgKgGgTAAQgWAAgPAPQgNAOgCAVIBTAAIAAAPIhVAAQAAAYARAPQAPAPAWAAQATAAANgIIARgKIAAATQgUAOgdAAQgfAAgTgVgADwgoIAAhGIhKAAIAABGIgQAAIAAiRIAQAAIAAA6IBKAAIAAg6IAQAAIAACRgAmsgoIAAiRIAbAAQAYAAAMAKQAOAMAAAUQAAAQgKALQgOANgWAAIgOAAIAAA/gAmbh2IAOAAQAdAAAAgbQAAgZgfAAIgMAAgAnggoIAAiCIhLAAIAACCIgPAAIAAiRIBpAAIAACRgAHYjZIAPgGQADAMAPAAQAPAAADgMIAPAGQAAAFgIAHQgKAJgPAAQgWAAgLgVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.1,-22.4,114.3,44.8);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-130,-22.5,260,45.1);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkPDJQhwhOAAh7QAAh5BwhOQBthMCiAAQBGAAA+APQASAGgFAPQgBAFgMARQgWAYhDBcQhBBcgRAbQgPAVgBATQgCAXAcAAIFBAAQAWAAAIgcQAHgaAAgbQAAhNgtg5Qgsg3hNgcIATgcQBdAhA1A+QA4BCAABUQAABFgoA2QgIALgEAEQgIAFgOAAImSAAQhEgDgMgwQgLgqAhgzQAPgZA+hUQA+hVAaghQAFgIgFgEQgEgEgKAAQiNAAhaBAQhfBEAABwQAABmBfBHQBfBICIAAQBJAABBgWQA+gVAugnIA/AAQg2A1hQAdQhTAfhdAAQiiAAhthLg");
	this.shape.setTransform(-116,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEVCKQgkAAghgUQgygfAAg9IAAiRIikBvIDICSIiXAAIiBhfIiPBfIsAAAQgnABgegYQgpghAAhGIAAiWIBgAAIAACfQAAA+A+AAIDaAAQATguAtggIhNAAQAIg1AwgqQA2gwBOAAIF3AAICBBfICMhfICvAAIAACfQAAA+A+AAIC3AAIAAjdIBgAAIAADdIFGAAQAhgBALgDQAQgHAAgRQAAgcgkAAIk5AAQAAhCAlguQAqg1BPAAIEYAAIAAA3IkMAAQgaAAgQASQgPAPgCAYIDjAAQA4AAAfAOQAqATAAAzQAAAxg0AUQgfALgvAAgApIAtQgUAQgCAWIFpAAIByhKIiph8IAAAgIj0AAQgaAAgWASQgUARgCAWIEjAAIAAA1IjVAAQgagBgWATg");
	this.shape_1.setTransform(43.6,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-154.4,-27.6,308.9,55.3);


(lib.img2Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img2();
	this.instance.setTransform(-197.5,-223.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-223.5,395,447);


(lib.img1Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-305.5,-223.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-305.5,-223.5,611,447);


(lib.dillers = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-84.1,224.9,168.2);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.img2_2 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+1RaMAAAgizMA9rAAAMAAAAizg");
	mask.setTransform(0,-112);

	// img2Mc
	this.instance = new lib.img2Mc();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-223.5,395,223);


(lib.img2_1 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+1RaMAAAgizMA9rAAAMAAAAizg");
	mask.setTransform(0,112);

	// img2Mc
	this.instance = new lib.img2Mc();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,0.5,395,223);


(lib.img1_2 = function() {
	this.initialize();

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bz3IAApnMAu3AAAMAAAA69g");
	mask.setTransform(-45,-34.7);

	// img1Mc
	this.instance = new lib.img1Mc();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-195,-223.5,300,377.6);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bd/MAAAg79MAu3AxWIAAKng");
	mask.setTransform(-45,31.5);

	// img1Mc
	this.instance = new lib.img1Mc();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-195,-160.4,300,384);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t4
	this.instance = new lib.t5();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(70,271.9,0.421,0.42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(320).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(55).to({scaleX:0.42,scaleY:0.42,x:70,y:271.9},10).wait(1));

	// dillers
	this.instance_2 = new lib.dillers();
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(280).to({_off:false},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.669},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:1},0).wait(25).to({alpha:0},10).to({_off:true},1).wait(70));

	// light
	this.instance_3 = new lib.дшпре();
	this.instance_3.setTransform(17,150);
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({alpha:0},15).wait(226).to({alpha:1},10).wait(1));

	// t3_6
	this.instance_4 = new lib.t3_6();
	this.instance_4.setTransform(-1.9,218.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(229).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).to({_off:true},1).wait(116));

	// t3_5
	this.instance_5 = new lib.t3_5();
	this.instance_5.setTransform(0,189.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(224).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(116));

	// t3_4
	this.instance_6 = new lib.t3_7();
	this.instance_6.setTransform(-0.4,71.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(209).to({_off:false},0).to({alpha:1},10).wait(50).to({alpha:0},10).to({_off:true},1).wait(116));

	// t3_4
	this.instance_7 = new lib.t3_4();
	this.instance_7.setTransform(-0.4,71.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(204).to({_off:false},0).to({alpha:1},10).wait(55).to({alpha:0},10).to({_off:true},1).wait(116));

	// t3_3
	this.instance_8 = new lib.t3_3();
	this.instance_8.setTransform(-1.6,34);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(199).to({_off:false},0).to({alpha:1},10).wait(60).to({alpha:0},10).to({_off:true},1).wait(116));

	// t3_2
	this.instance_9 = new lib.t3_2();
	this.instance_9.setTransform(0.3,-4.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(194).to({_off:false},0).to({alpha:1},10).wait(65).to({alpha:0},10).to({_off:true},1).wait(116));

	// t3_1
	this.instance_10 = new lib.t3_1();
	this.instance_10.setTransform(-1,-39.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(189).to({_off:false},0).to({alpha:1},10).wait(70).to({alpha:0},10).to({_off:true},1).wait(116));

	// NX
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape.setTransform(0,-196.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.102)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_1.setTransform(0,-196.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_2.setTransform(0,-196.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.302)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_3.setTransform(0,-196.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.4)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_4.setTransform(0,-196.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.502)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_5.setTransform(0,-196.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.6)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_6.setTransform(0,-196.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.698)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_7.setTransform(0,-196.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.8)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_8.setTransform(0,-196.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.898)").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_9.setTransform(0,-196.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");
	this.shape_10.setTransform(0,-196.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},179).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},80).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(116));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(179).to({_off:false},0).to({alpha:0.57},10).wait(196).to({alpha:0},10).wait(1));

	// t2
	this.instance_12 = new lib.t2();
	this.instance_12.setTransform(74,225.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80).to({_off:false},0).to({alpha:1},9).wait(70).to({alpha:0},10).to({_off:true},1).wait(226));

	// t1
	this.instance_13 = new lib.t1();
	this.instance_13.setTransform(5,225.6);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},10).wait(59).to({alpha:0},10).to({_off:true},1).wait(316));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_153 = new cjs.Graphics().p("Eg2UgTTMAAAA2qInSAAMAAAhJoMA2sA5lMAAAg2qIHQAAMAAABJogEA0IAjXIwD9LIwCdLIoxAAMAUbgkbMgS9giSIJfAAIN2a/IPU6/IIwAAMgS9AiSMAUbAkbg");
	var mask_graphics_154 = new cjs.Graphics().p("Eg0EgSgMAAAA0aInAAAMAAAhGmMA0cA3NMAAAg0aIG+AAMAAABGmgEAx/Ah6IvY7+IvZb+IoZAAMATlgi8MgSLgg3IJFAAINTZ4IOr54IIZAAMgSLAg3MATlAi8g");
	var mask_graphics_155 = new cjs.Graphics().p("Egx1gRuMAAAAyLImtAAMAAAhDkMAyNA01MAAAgyKIGqAAMAAABDkgEAv2AgdIuu6xIuvaxIoCAAMASwghcIxa/dIItAAIMuYxIOD4xIICAAIxafdMASwAhcg");
	var mask_graphics_156 = new cjs.Graphics().p("EgvngQ7MAAAAv7ImZAAMAAAhAiMAv9AyeMAAAgv7IGXAAMAAABAigEAttAfAIuE5lIuEZlInrAAIR5/8Iwo+DIIUAAIMKXqINb3qIHrAAIwoeDIR6f8g");
	var mask_graphics_157 = new cjs.Graphics().p("EgtYgQIMAAAAtrImGAAMAAAg9hMAttAwHMAAAgtrIGEAAMAAAA9hgEArkAdjIta4YItaYYInUAAIRE+cIv28pIH7AAILlWjIMz2jIHUAAIv3cpIREecg");
	var mask_graphics_158 = new cjs.Graphics().p("EgrJgPVMAAAArbIlyAAMAAAg6fMArcAtvMAAAgrbIFxAAMAAAA6fgEApaAcGIsv3LIswXLIm9AAIQO88IvE7PIHjAAILAVcIMK1cIG9AAIvDbPIQNc8g");
	var mask_graphics_159 = new cjs.Graphics().p("Ego6gOiMAAAApLIlfAAMAAAg3dMApNArXMAAAgpLIFdAAMAAAA3dgEAnRAapIsF1/IsGV/ImlAAIPY7cIuS51IHJAAIKcUVILi0VIGmAAIuSZ1IPYbcg");
	var mask_graphics_160 = new cjs.Graphics().p("EgmrgNwMAAAAm7IlMAAMAAAg0bMAm9ApAMAAAgm7IFKAAMAAAA0bgEAlIAZLIrb0xIrbUxImPAAIOi57Itg4bIGwAAIJ4TPIK6zPIGPAAItgYbIOiZ7g");
	var mask_graphics_161 = new cjs.Graphics().p("EgkcgM8MAAAAkrIk5AAMAAAgxaMAktAmpMAAAgkrIE3AAMAAAAxZgEAi/AXvIqxzlIqxTlIl4AAINt4cIsu3AIGXAAIJTSGIKSyGIF4AAIsvXAINtYcg");
	var mask_graphics_162 = new cjs.Graphics().p("EgiNgMKMAAAAibIkmAAMAAAguXMAidAkQMAAAgibIElAAMAAAAuYgEAg2AWRIqHyXIqHSXIlgAAIM228Ir81mIF/AAIIuRAIJpxAIFiAAIr9VmIM3W8g");
	var mask_graphics_163 = new cjs.Graphics().p("A/+rXMAAAAgLIkTAAMAAAgrVMAgNAh5MAAAggLIERAAMAAAArVgAesU0IpcxLIpdRLIlKAAIMC1cIrK0LIFlAAIIKP5IJBv5IFKAAIrKULIMBVcg");
	var mask_graphics_164 = new cjs.Graphics().p("A9wqkIAAd7Ij/AAMAAAgoUId+fiIAA97ID9AAMAAAAoUgAckTXIozv+IoyP+IkzAAILLz8IqYyxIFMAAIHmOyIIZuyIEyAAIqYSxILMT8g");
	var mask_graphics_165 = new cjs.Graphics().p("A7gpxIAAbrIjtAAMAAAglSIbudKIAA7sIDqAAMAAAAlTgAaaR6IoIuxIoIOxIkcAAIKWycIpnxYIE0AAIHBNrIHxtrIEcAAIpnRYIKWScg");
	var mask_graphics_166 = new cjs.Graphics().p("A5Ro+IAAZbIjaAAMAAAgiQIZeayIAA5bIDXAAMAAAAiQgAYRQdInetlIneNlIkFAAIJhw8Io1v9IEaAAIGdMkIHIskIEFAAIo1P9IJhQ8g");
	var mask_graphics_167 = new cjs.Graphics().p("A3DoLIAAXLIjGAAIAA/PIXOYbIAA3MIDEAAIAAfQgAWIPAIm0sYIm0MYIjuAAIIrvcIoDukIECAAIF4LeIGgreIDuAAIoDOkIIrPcg");
	var mask_graphics_168 = new cjs.Graphics().p("A00nZIAAU8IizAAIAA8NIU+WEIAA08ICxAAIAAcNgAT/NjImJrLImLLLIjWAAIH1t8InStJIDpAAIFVKWIF3qWIDXAAInRNJIH0N8g");
	var mask_graphics_169 = new cjs.Graphics().p("AykmlIAASrIihAAIAA5LISuTsIAAysICfAAIAAZLgAR2MGIlgp+IlfJ+IjAAAIG/scImfrvIDPAAIEwJPIFPpPIDAAAImfLvIHAMcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_graphics_153,x:-232.5,y:-74.1}).wait(1).to({graphics:mask_graphics_154,x:-218,y:-81.8}).wait(1).to({graphics:mask_graphics_155,x:-203.5,y:-89.3}).wait(1).to({graphics:mask_graphics_156,x:-188.9,y:-97}).wait(1).to({graphics:mask_graphics_157,x:-174.4,y:-104.6}).wait(1).to({graphics:mask_graphics_158,x:-159.8,y:-112.2}).wait(1).to({graphics:mask_graphics_159,x:-145.3,y:-119.8}).wait(1).to({graphics:mask_graphics_160,x:-130.8,y:-127.5}).wait(1).to({graphics:mask_graphics_161,x:-116.3,y:-135.2}).wait(1).to({graphics:mask_graphics_162,x:-101.7,y:-142.7}).wait(1).to({graphics:mask_graphics_163,x:-87.2,y:-150.4}).wait(1).to({graphics:mask_graphics_164,x:-72.6,y:-158}).wait(1).to({graphics:mask_graphics_165,x:-58.2,y:-165.6}).wait(1).to({graphics:mask_graphics_166,x:-43.6,y:-173.2}).wait(1).to({graphics:mask_graphics_167,x:-29,y:-180.9}).wait(1).to({graphics:mask_graphics_168,x:-14.5,y:-188.5}).wait(1).to({graphics:mask_graphics_169,x:0,y:-196.1}).wait(20).to({graphics:null,x:0,y:0}).wait(207));

	// img2
	this.instance_14 = new lib.img2Mc();
	this.instance_14.setTransform(-27.2,-76.5);
	this.instance_14._off = true;

	this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(153).to({_off:false},0).to({x:-47.5},16).to({_off:true},20).wait(207));

	// bgImg
	this.instance_15 = new lib.bgImg_1();
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(153).to({_off:false},0).wait(243));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_94 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AiQxKIEhRKIkhRLg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AjDzAIGHTAImHTBg");
	var mask_1_graphics_146 = new cjs.Graphics().p("Aj103IHrU4InrU3g");
	var mask_1_graphics_147 = new cjs.Graphics().p("Akn2uIJPWvIpPWug");
	var mask_1_graphics_148 = new cjs.Graphics().p("AlZ4kIKzYlIqzYkg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AmM6aIMZacIsZaZg");
	var mask_1_graphics_150 = new cjs.Graphics().p("Am+8RIN9cUIt9cPg");
	var mask_1_graphics_151 = new cjs.Graphics().p("Anw+HIPheKIvheFg");
	var mask_1_graphics_152 = new cjs.Graphics().p("Aoj/+MARGAgCIxGf7g");
	var mask_1_graphics_153 = new cjs.Graphics().p("EgJVgh0MASrAh4MgSrAhxg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(94).to({graphics:mask_1_graphics_94,x:-165.4,y:-89.1}).wait(1).to({graphics:mask_1_graphics_95,x:-159.7,y:-89.1}).wait(1).to({graphics:mask_1_graphics_96,x:-154.6,y:-89.1}).wait(1).to({graphics:mask_1_graphics_97,x:-150.1,y:-89.1}).wait(1).to({graphics:mask_1_graphics_98,x:-146.2,y:-89.1}).wait(1).to({graphics:mask_1_graphics_99,x:-142.9,y:-89.1}).wait(1).to({graphics:mask_1_graphics_100,x:-140.2,y:-89.1}).wait(1).to({graphics:mask_1_graphics_101,x:-138.1,y:-89.1}).wait(1).to({graphics:mask_1_graphics_102,x:-136.6,y:-89.1}).wait(1).to({graphics:mask_1_graphics_103,x:-135.7,y:-89.1}).wait(1).to({graphics:mask_1_graphics_104,x:-135.4,y:-89.1}).wait(40).to({graphics:mask_1_graphics_144,x:-135.4,y:-89.1}).wait(1).to({graphics:mask_1_graphics_145,x:-130.4,y:-88.3}).wait(1).to({graphics:mask_1_graphics_146,x:-125.4,y:-87.5}).wait(1).to({graphics:mask_1_graphics_147,x:-120.3,y:-86.7}).wait(1).to({graphics:mask_1_graphics_148,x:-115.3,y:-85.9}).wait(1).to({graphics:mask_1_graphics_149,x:-110.3,y:-85.2}).wait(1).to({graphics:mask_1_graphics_150,x:-105.2,y:-84.4}).wait(1).to({graphics:mask_1_graphics_151,x:-100.2,y:-83.6}).wait(1).to({graphics:mask_1_graphics_152,x:-95.2,y:-82.8}).wait(1).to({graphics:mask_1_graphics_153,x:-90.2,y:-82}).wait(1).to({graphics:null,x:0,y:0}).wait(242));

	// bgImg
	this.instance_16 = new lib.bgImg_1();
	this.instance_16._off = true;

	this.instance_16.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(94).to({_off:false},0).to({_off:true},60).wait(242));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_94 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_95 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_104 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AiQAAIEhxKMAAAAiVg");
	var mask_2_graphics_145 = new cjs.Graphics().p("AjDAAIGHy9MAAAAl7g");
	var mask_2_graphics_146 = new cjs.Graphics().p("Aj1ABIHr0xMAAAAphg");
	var mask_2_graphics_147 = new cjs.Graphics().p("AknACIJP2lMAAAAtHg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AlZACIKz4XMAAAAwrg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AmMAEIMZ6MMAAAA0Rg");
	var mask_2_graphics_150 = new cjs.Graphics().p("Am+AEIN97/MAAAA33g");
	var mask_2_graphics_151 = new cjs.Graphics().p("AnwAFIPh9zMAAAA7dg");
	var mask_2_graphics_152 = new cjs.Graphics().p("AoiAGIRG/nMAAAA/Dg");
	var mask_2_graphics_153 = new cjs.Graphics().p("ApVAHMASrghbMAAABCpg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(94).to({graphics:mask_2_graphics_94,x:164.6,y:-89.1}).wait(1).to({graphics:mask_2_graphics_95,x:159,y:-89.1}).wait(1).to({graphics:mask_2_graphics_96,x:154.1,y:-89.1}).wait(1).to({graphics:mask_2_graphics_97,x:149.7,y:-89.1}).wait(1).to({graphics:mask_2_graphics_98,x:145.9,y:-89.1}).wait(1).to({graphics:mask_2_graphics_99,x:142.7,y:-89.1}).wait(1).to({graphics:mask_2_graphics_100,x:140.1,y:-89.1}).wait(1).to({graphics:mask_2_graphics_101,x:138,y:-89.1}).wait(1).to({graphics:mask_2_graphics_102,x:136.6,y:-89.1}).wait(1).to({graphics:mask_2_graphics_103,x:135.7,y:-89.1}).wait(1).to({graphics:mask_2_graphics_104,x:135.4,y:-89.1}).wait(40).to({graphics:mask_2_graphics_144,x:135.4,y:-89.1}).wait(1).to({graphics:mask_2_graphics_145,x:130.4,y:-88.3}).wait(1).to({graphics:mask_2_graphics_146,x:125.4,y:-87.6}).wait(1).to({graphics:mask_2_graphics_147,x:120.4,y:-86.8}).wait(1).to({graphics:mask_2_graphics_148,x:115.3,y:-86}).wait(1).to({graphics:mask_2_graphics_149,x:110.3,y:-85.3}).wait(1).to({graphics:mask_2_graphics_150,x:105.3,y:-84.5}).wait(1).to({graphics:mask_2_graphics_151,x:100.2,y:-83.8}).wait(1).to({graphics:mask_2_graphics_152,x:95.2,y:-83}).wait(1).to({graphics:mask_2_graphics_153,x:90.2,y:-82.3}).wait(1).to({graphics:null,x:0,y:0}).wait(242));

	// bgImg
	this.instance_17 = new lib.bgImg_1();
	this.instance_17._off = true;

	this.instance_17.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(94).to({_off:false},0).to({_off:true},60).wait(242));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_29 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AuTPEIAA+HIcneHg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AuTPFIAA+JIcneJg");
	var mask_3_graphics_45 = new cjs.Graphics().p("Au1QQMAAAgggMAdrAggg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AvXRcMAAAgi3MAevAi3g");
	var mask_3_graphics_47 = new cjs.Graphics().p("Av5SoMAAAglPMAfzAlPg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AwbT0MAAAgnnMAg3Anng");
	var mask_3_graphics_49 = new cjs.Graphics().p("Aw9VAMAAAgp/MAh7Ap/g");
	var mask_3_graphics_50 = new cjs.Graphics().p("AxfWMMAAAgsXMAi/AsXg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AyBXYMAAAguvMAkDAuvg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AyjYkMAAAgxHMAlHAxHg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AzFZwMAAAgzfMAmLAzfg");
	var mask_3_graphics_54 = new cjs.Graphics().p("Azna8MAAAg13MAnPA13g");
	var mask_3_graphics_69 = new cjs.Graphics().p("Azna8MAAAg13MAnPA13g");
	var mask_3_graphics_70 = new cjs.Graphics().p("AzlaSMAAAg0jMAnLA0jg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AzjZoMAAAgzPMAnHAzPg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AziY+MAAAgx8MAnFAx8g");
	var mask_3_graphics_73 = new cjs.Graphics().p("AzgYVMAAAgwpMAnBAwpg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AzfXrMAAAgvVMAm/AvVg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AzdXBMAAAguBMAm7AuBg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AzbWXMAAAgstMAm3Astg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AzaVtMAAAgrZMAm1ArZg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AzYVDMAAAgqFMAmxAqFg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AzWUaMAAAgozMAmtAozg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AjvIRIDvwhIDwQhg");
	var mask_3_graphics_145 = new cjs.Graphics().p("AlCI6IFCxzIFDRzg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AmUJjIGUzFIGVTFg");
	var mask_3_graphics_147 = new cjs.Graphics().p("AnmKLIHm0WIHnUWg");
	var mask_3_graphics_148 = new cjs.Graphics().p("Ao5K0II41nII7Vng");
	var mask_3_graphics_149 = new cjs.Graphics().p("AqMLdIKL25IKNW5g");
	var mask_3_graphics_150 = new cjs.Graphics().p("AreMFILb4KILiYKg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AsxMuIMu5bIM1Zbg");
	var mask_3_graphics_152 = new cjs.Graphics().p("AuDNXIN/6tIOIatg");
	var mask_3_graphics_153 = new cjs.Graphics().p("AvVOAIPQ7/IPbb/g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_3_graphics_29,x:41.6,y:312.7}).wait(1).to({graphics:mask_3_graphics_30,x:41.6,y:310.1}).wait(1).to({graphics:mask_3_graphics_31,x:41.6,y:302.2}).wait(1).to({graphics:mask_3_graphics_32,x:41.6,y:289.1}).wait(1).to({graphics:mask_3_graphics_33,x:41.6,y:270.8}).wait(1).to({graphics:mask_3_graphics_34,x:41.6,y:247.3}).wait(1).to({graphics:mask_3_graphics_35,x:41.6,y:218.5}).wait(1).to({graphics:mask_3_graphics_36,x:41.6,y:184.5}).wait(1).to({graphics:mask_3_graphics_37,x:41.6,y:145.3}).wait(1).to({graphics:mask_3_graphics_38,x:41.6,y:100.9}).wait(1).to({graphics:mask_3_graphics_39,x:41.6,y:51.1}).wait(5).to({graphics:mask_3_graphics_44,x:41.6,y:51.1}).wait(1).to({graphics:mask_3_graphics_45,x:38.6,y:43.5}).wait(1).to({graphics:mask_3_graphics_46,x:35.5,y:35.8}).wait(1).to({graphics:mask_3_graphics_47,x:32.4,y:28.1}).wait(1).to({graphics:mask_3_graphics_48,x:29.4,y:20.4}).wait(1).to({graphics:mask_3_graphics_49,x:26.3,y:12.7}).wait(1).to({graphics:mask_3_graphics_50,x:23.2,y:5}).wait(1).to({graphics:mask_3_graphics_51,x:20.2,y:-2.7}).wait(1).to({graphics:mask_3_graphics_52,x:17.1,y:-10.4}).wait(1).to({graphics:mask_3_graphics_53,x:14,y:-18}).wait(1).to({graphics:mask_3_graphics_54,x:11,y:-25.7}).wait(15).to({graphics:mask_3_graphics_69,x:11,y:-25.7}).wait(1).to({graphics:mask_3_graphics_70,x:-18,y:-21.5}).wait(1).to({graphics:mask_3_graphics_71,x:-47,y:-17.2}).wait(1).to({graphics:mask_3_graphics_72,x:-76,y:-12.9}).wait(1).to({graphics:mask_3_graphics_73,x:-105,y:-8.6}).wait(1).to({graphics:mask_3_graphics_74,x:-134,y:-4.3}).wait(1).to({graphics:mask_3_graphics_75,x:-163,y:-0.1}).wait(1).to({graphics:mask_3_graphics_76,x:-192,y:4.2}).wait(1).to({graphics:mask_3_graphics_77,x:-221,y:8.5}).wait(1).to({graphics:mask_3_graphics_78,x:-250,y:12.8}).wait(1).to({graphics:mask_3_graphics_79,x:-279,y:17.1}).wait(1).to({graphics:mask_3_graphics_80,x:0,y:198.8}).wait(1).to({graphics:mask_3_graphics_81,x:0,y:197.7}).wait(1).to({graphics:mask_3_graphics_82,x:0,y:194.5}).wait(1).to({graphics:mask_3_graphics_83,x:0,y:189.2}).wait(1).to({graphics:mask_3_graphics_84,x:0,y:181.8}).wait(1).to({graphics:mask_3_graphics_85,x:0,y:172.3}).wait(1).to({graphics:mask_3_graphics_86,x:0,y:160.6}).wait(1).to({graphics:mask_3_graphics_87,x:0,y:146.8}).wait(1).to({graphics:mask_3_graphics_88,x:0,y:130.9}).wait(1).to({graphics:mask_3_graphics_89,x:0,y:112.9}).wait(1).to({graphics:mask_3_graphics_90,x:0,y:92.8}).wait(54).to({graphics:mask_3_graphics_144,x:0,y:92.8}).wait(1).to({graphics:mask_3_graphics_145,x:-0.1,y:88.7}).wait(1).to({graphics:mask_3_graphics_146,x:-0.2,y:84.6}).wait(1).to({graphics:mask_3_graphics_147,x:-0.3,y:80.5}).wait(1).to({graphics:mask_3_graphics_148,x:-0.4,y:76.4}).wait(1).to({graphics:mask_3_graphics_149,x:-0.5,y:72.3}).wait(1).to({graphics:mask_3_graphics_150,x:-0.6,y:68.2}).wait(1).to({graphics:mask_3_graphics_151,x:-0.8,y:64}).wait(1).to({graphics:mask_3_graphics_152,x:-0.9,y:60}).wait(1).to({graphics:mask_3_graphics_153,x:-1,y:55.8}).wait(1).to({graphics:null,x:0,y:0}).wait(242));

	// bgImg
	this.instance_18 = new lib.bgImg_1();
	this.instance_18._off = true;

	this.instance_18.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(29).to({_off:false},0).to({_off:true},125).wait(242));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_29 = new cjs.Graphics().p("AujvVIdHAAIAAerg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AujvVIdHAAIAAerg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AujvVIdHAAIAAerg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AukvWIdJAAIAAetg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AukvWIdJAAIAAetg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AukvXIdJAAIAAeug");
	var mask_4_graphics_35 = new cjs.Graphics().p("AulvXIdLAAIAAevg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AumvYIdNAAIAAexg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AumvZIdOAAIAAezg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AunvaIdPAAIAAe0g");
	var mask_4_graphics_39 = new cjs.Graphics().p("AuovaIdRAAIAAe1g");
	var mask_4_graphics_44 = new cjs.Graphics().p("AuovaIdRAAIAAe1g");
	var mask_4_graphics_45 = new cjs.Graphics().p("AvIwkIeRAAMAAAAhJg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AvoxuIfRAAMAAAAjdg");
	var mask_4_graphics_47 = new cjs.Graphics().p("AwIy4MAgRAAAMAAAAlwg");
	var mask_4_graphics_48 = new cjs.Graphics().p("Awn0BMAhPAAAMAAAAoDg");
	var mask_4_graphics_49 = new cjs.Graphics().p("AxH1LMAiQAAAMAAAAqXg");
	var mask_4_graphics_50 = new cjs.Graphics().p("Axo2UMAjQAAAMAAAAspg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AyH3eMAkPAAAMAAAAu9g");
	var mask_4_graphics_52 = new cjs.Graphics().p("Ayn4oMAlPAAAMAAAAxRg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AzH5xMAmPAAAMAAAAzjg");
	var mask_4_graphics_54 = new cjs.Graphics().p("Azn67MAnPAAAMAAAA13g");
	var mask_4_graphics_69 = new cjs.Graphics().p("Azn67MAnPAAAMAAAA13g");
	var mask_4_graphics_70 = new cjs.Graphics().p("Azn6TMAnPAAAMAAAA0ng");
	var mask_4_graphics_71 = new cjs.Graphics().p("Azn5rMAnPAAAMAAAAzXg");
	var mask_4_graphics_72 = new cjs.Graphics().p("Azn5DMAnPAAAMAAAAyHg");
	var mask_4_graphics_73 = new cjs.Graphics().p("Azn4aMAnPAAAMAAAAw1g");
	var mask_4_graphics_74 = new cjs.Graphics().p("Azn3zMAnPAAAMAAAAvng");
	var mask_4_graphics_75 = new cjs.Graphics().p("Azn3KMAnPAAAMAAAAuWg");
	var mask_4_graphics_76 = new cjs.Graphics().p("Azn2jMAnPAAAMAAAAtGg");
	var mask_4_graphics_77 = new cjs.Graphics().p("Azn16MAnPAAAMAAAAr1g");
	var mask_4_graphics_78 = new cjs.Graphics().p("Azn1SMAnPAAAMAAAAqlg");
	var mask_4_graphics_79 = new cjs.Graphics().p("Azn0qMAnPAAAMAAAApVg");
	var mask_4_graphics_80 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_81 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_88 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_90 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AjvoQIHfAAIjwQhg");
	var mask_4_graphics_145 = new cjs.Graphics().p("Ak8o0IJ5AAIlBRpg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AmIpYIMRAAImUSxg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AnVp7IOrAAInnT3g");
	var mask_4_graphics_148 = new cjs.Graphics().p("AoiqfIRFAAIo7U/g");
	var mask_4_graphics_149 = new cjs.Graphics().p("ApurDITdAAIqOWHg");
	var mask_4_graphics_150 = new cjs.Graphics().p("Aq7rmIV3AAIriXNg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AsIsKIYRAAIs1YVg");
	var mask_4_graphics_152 = new cjs.Graphics().p("AtUsuIapAAIuIZdg");
	var mask_4_graphics_153 = new cjs.Graphics().p("AuhtRIdDAAIvcajg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_4_graphics_29,x:-43.3,y:-469.7}).wait(1).to({graphics:mask_4_graphics_30,x:-43.3,y:-467}).wait(1).to({graphics:mask_4_graphics_31,x:-43.2,y:-459}).wait(1).to({graphics:mask_4_graphics_32,x:-43.2,y:-445.6}).wait(1).to({graphics:mask_4_graphics_33,x:-43.2,y:-426.7}).wait(1).to({graphics:mask_4_graphics_34,x:-43.1,y:-402.6}).wait(1).to({graphics:mask_4_graphics_35,x:-43.1,y:-373}).wait(1).to({graphics:mask_4_graphics_36,x:-43,y:-338.1}).wait(1).to({graphics:mask_4_graphics_37,x:-42.9,y:-297.9}).wait(1).to({graphics:mask_4_graphics_38,x:-42.9,y:-252.2}).wait(1).to({graphics:mask_4_graphics_39,x:-42.8,y:-201.2}).wait(5).to({graphics:mask_4_graphics_44,x:-42.8,y:-201.2}).wait(1).to({graphics:mask_4_graphics_45,x:-39.6,y:-193.8}).wait(1).to({graphics:mask_4_graphics_46,x:-36.4,y:-186.4}).wait(1).to({graphics:mask_4_graphics_47,x:-33.2,y:-178.9}).wait(1).to({graphics:mask_4_graphics_48,x:-30,y:-171.5}).wait(1).to({graphics:mask_4_graphics_49,x:-26.8,y:-164.1}).wait(1).to({graphics:mask_4_graphics_50,x:-23.7,y:-156.7}).wait(1).to({graphics:mask_4_graphics_51,x:-20.5,y:-149.2}).wait(1).to({graphics:mask_4_graphics_52,x:-17.3,y:-141.8}).wait(1).to({graphics:mask_4_graphics_53,x:-14.1,y:-134.4}).wait(1).to({graphics:mask_4_graphics_54,x:-11,y:-127}).wait(15).to({graphics:mask_4_graphics_69,x:-11,y:-127}).wait(1).to({graphics:mask_4_graphics_70,x:17.7,y:-131.1}).wait(1).to({graphics:mask_4_graphics_71,x:46.3,y:-135.1}).wait(1).to({graphics:mask_4_graphics_72,x:75,y:-139.2}).wait(1).to({graphics:mask_4_graphics_73,x:103.7,y:-143.2}).wait(1).to({graphics:mask_4_graphics_74,x:132.3,y:-147.3}).wait(1).to({graphics:mask_4_graphics_75,x:161,y:-151.4}).wait(1).to({graphics:mask_4_graphics_76,x:189.6,y:-155.4}).wait(1).to({graphics:mask_4_graphics_77,x:218.3,y:-159.5}).wait(1).to({graphics:mask_4_graphics_78,x:247,y:-163.6}).wait(1).to({graphics:mask_4_graphics_79,x:275.6,y:-167.6}).wait(1).to({graphics:mask_4_graphics_80,x:0,y:-354}).wait(1).to({graphics:mask_4_graphics_81,x:0,y:-353}).wait(1).to({graphics:mask_4_graphics_82,x:0,y:-349.7}).wait(1).to({graphics:mask_4_graphics_83,x:0,y:-344.4}).wait(1).to({graphics:mask_4_graphics_84,x:0,y:-336.9}).wait(1).to({graphics:mask_4_graphics_85,x:0,y:-327.3}).wait(1).to({graphics:mask_4_graphics_86,x:0,y:-315.5}).wait(1).to({graphics:mask_4_graphics_87,x:0,y:-301.6}).wait(1).to({graphics:mask_4_graphics_88,x:0,y:-285.5}).wait(1).to({graphics:mask_4_graphics_89,x:0,y:-267.4}).wait(1).to({graphics:mask_4_graphics_90,x:0,y:-247}).wait(54).to({graphics:mask_4_graphics_144,x:0,y:-247}).wait(1).to({graphics:mask_4_graphics_145,x:0.4,y:-243.4}).wait(1).to({graphics:mask_4_graphics_146,x:0.8,y:-239.7}).wait(1).to({graphics:mask_4_graphics_147,x:1.3,y:-236.1}).wait(1).to({graphics:mask_4_graphics_148,x:1.7,y:-232.4}).wait(1).to({graphics:mask_4_graphics_149,x:2.1,y:-228.8}).wait(1).to({graphics:mask_4_graphics_150,x:2.5,y:-225.2}).wait(1).to({graphics:mask_4_graphics_151,x:2.9,y:-221.5}).wait(1).to({graphics:mask_4_graphics_152,x:3.3,y:-217.9}).wait(1).to({graphics:mask_4_graphics_153,x:3.8,y:-214.2}).wait(1).to({graphics:null,x:0,y:0}).wait(242));

	// bgImg
	this.instance_19 = new lib.bgImg_1();
	this.instance_19._off = true;

	this.instance_19.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(29).to({_off:false},0).to({_off:true},125).wait(242));

	// img2
	this.instance_20 = new lib.img2Mc();
	this.instance_20.setTransform(47.5,-76.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(94).to({_off:false},0).to({x:-27.2},59).to({_off:true},1).wait(242));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_80 = new cjs.Graphics().p("EgXbAi6MAAAhFzMAu3AAAMAAABFzg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_5_graphics_80,x:0,y:-76.5}).wait(15).to({graphics:null,x:0,y:0}).wait(301));

	// img2_2
	this.instance_21 = new lib.img2_2();
	this.instance_21.setTransform(47.5,-300);
	this.instance_21._off = true;

	this.instance_21.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(80).to({_off:false},0).to({y:-76.5},14,cjs.Ease.get(-1)).to({_off:true},1).wait(301));

	// img2_1
	this.instance_22 = new lib.img2_1();
	this.instance_22.setTransform(47.5,146.5);
	this.instance_22._off = true;

	this.instance_22.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(80).to({_off:false},0).to({y:-76.5},14,cjs.Ease.get(-1)).to({_off:true},1).wait(301));

	// img1
	this.instance_23 = new lib.img1Mc();
	this.instance_23.setTransform(45,-76.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(15).to({_off:false},0).to({x:-40},64).wait(317));

	// mask
	this.instance_24 = new lib.img1_2();
	this.instance_24.setTransform(45,-454);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({y:-76.5},15,cjs.Ease.get(-1)).to({_off:true},1).wait(380));

	// mask
	this.instance_25 = new lib.img1_1();
	this.instance_25.setTransform(45,462);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({y:-76.5},15,cjs.Ease.get(-1)).to({_off:true},1).wait(380));

	// bgImg
	this.instance_26 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(396));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.5,-677.5,611,1363);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(39.5,-77.5,611,1363);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;