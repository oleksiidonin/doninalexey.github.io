(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/bgImg4.jpg", id:"bgImg4"},
		{src:"images/bgImg5.jpg", id:"bgImg5"},
		{src:"images/car.png", id:"car"}
	]
};



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


(lib.bgImg5 = function() {
	this.initialize(img.bgImg5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,183);


(lib.t6_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmuhjIAcAAIAADCICyjMIAAEIIgdAAIAAjBIixDMgALJBwIAhgfQAIASAQAJQAOAHAPAAQARAAALgJQAMgKAAgQQAAgNgKgKQgJgIgfgLQgdgKgNgMQgUgQAAgdQAAgfATgVQAXgXAoAAQArAAAdAdIgaAjQgRgWgZAAQgSAAgKAKQgHAIAAAMQAAAJAIAIQAGAGAZAIQAlALAOANQAWAUAAAiQAAAlgYAXQgZAXgoAAQg3AAghgwgAITCXQgXgKgNgRQgUgZAAgrIAAibIAyAAIAACfQAAAYAMAOQAQARAZAAQAZAAAQgRQAMgOAAgYIAAifIAyAAIAACbQAAArgTAZQgOARgXAKQgWAJgZAAQgZAAgWgJgAGECbIg3heIg7BeIg8AAIBaiHIhMh3IA8AAIAtBQIAvhQIA7AAIhOB3IBXCHgAA8CbIAAj+ICNAAIAAArIhcAAIAAA4IBYAAIAAAqIhYAAIAABGIBcAAIAAArgAhcCbIAAj+IAyAAIAADTIBNAAIAAArgAoDCbIAAj+IAdAAIAAD+gArECbIAAj+IAuAAQAnAAATAQQAXATAAAiQAAAggZAQQAZAGANAVQALARAAAVQAAARgIAQQgHANgLAJQgWARgoAAgAqoCAIAhAAQAfAAANgLQARgMAAgXQAAgZgVgNQgPgHgdAAIgdAAgAqoALIAWAAQAyAAAAgoQAAgbgWgKQgMgGgQAAIgWAAgAs7CbIAAjjIg+AAIAAgbICYAAIAAAbIg+AAIAADjgAl0iIQgKgJgFgMIAbgIQAEANAOAFQAHADAIAAQAaAAAGgVIAbAIQgEAMgKAJQgRARgcAAQgcAAgRgRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.1,-16.6,178.1,33.3);


(lib.t6_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIFhSIAYAAIAAChICViqIAADcIgYAAIAAihIiVCrgAEqhSIAYAAIAAChICUiqIAADcIgXAAIAAihIiVCrgAhogRIgVCSIgYAAIAjjfIBSCyIBSiyIAhDfIgYAAIgUiSIhHCbgAqRBmQggggAAgvQAAgtAgggQAgggAwAAQAjAAAcAVIAAAeQgMgMgQgIQgSgIgTAAQglAAgYAaQgZAZAAAkQAAAoAdAZQAZAWAgAAQATAAAVgKQANgHAMgLIAAAdQgdAVgkAAQgvAAgfgfgADyCBIhYhiIgGAGIAABcIgYAAIAAjTIAYAAIAABZIBbhZIAgAAIhkBhIBnBygAjUCBIAAjTIAXAAIAADTgAleCBIAAjTIAmAAQAlAAARAPQAUARAAAdQAAAXgQAQQgSASgiAAIgVAAIAABdgAlHAOIAUAAQAVAAAMgKQAMgIAAgTQAAglgvAAIgSAAgAnCCBIAAi9Ig0AAIAAgWICAAAIAAAWIg0AAIAAC9gAI2hxQgJgIgDgKIAWgHQAFASAWAAQAXAAAFgSIAWAHQgDAKgJAIQgOANgYAAQgXAAgOgNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69,-13.9,138.1,27.9);


(lib.t6_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsfCcIAAgsIiXAAIAAAsIgWAAIAAhDQAVABANgeQAHgTAAglIAAhoICCAAIAAC9IAYAAIAABDgAuMAEQAAAogHAUQgGAOgLALIBrAAIAAimIhTAAgAMhhkIAYAAIAACiICUirIAADdIgXAAIAAihIiVCqgAJHhkIAXAAIAACiICVirIAADdIgYAAIAAihIiUCqgArxhkIAYAAIAACiICUirIAADdIgYAAIAAihIiUCqgAhlgjIgVCTIgYAAIAjjgIBSCzIBSizIAhDgIgYAAIgViTIhGCcgAIABwIAAhpIhuAAIAABpIgYAAIAAjUIAYAAIAABXIBuAAIAAhXIAYAAIAADUgAE0BwIAAhcQgaACgTAAQglAAgPgLQgTgNgBgjIAAg/IAYAAIAAA8QAAAaANAJQAJAFAcAAQARAAAaAAIAAhkIAYAAIAADUgAB/BwIAAjUIAYAAIAADUgAi8BwIgZg8IhbAAIgZA8IgaAAIBijeIBgDegAjeAdIgkhTIgkBTIBIAAgAmRBwIAAhpIhuAAIAABpIgXAAIAAjUIAXAAIAABXIBuAAIAAhXIAYAAIAADUgANSiDQgJgHgDgKIAXgHQAEASAXAAQAVAAAGgSIAWAHQgDAJgIAIQgPAOgXAAQgYAAgOgOg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.4,-15.7,194.8,31.4);


(lib.t5_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiTBVQgTgTAAgdQAAgdAZggIA9hRIAcAVIgwA8QAKgEANAAQAagBARASQAUAQAAAeQAAAdgSATQgVAXglAAQgkAAgVgVgAh1ALQgKALAAAPQAAAQAKALQALAKAQAAQAQAAAKgKQALgLAAgQQAAgPgLgLQgKgKgQAAQgQAAgLAKgAnkBQQgYgeAAgxQAAgvAYgdQAVgaAgAAQAgAAAWAaQAYAeAAAuQAAAygYAdQgWAaggAAQggAAgVgagAnIg0QgNAUAAAhQAAAkANATQAKAQAPAAQAPAAALgQQANgTAAgkQAAghgNgUQgLgQgPAAQgPAAgKAQgADiBRQgYgXAAglQAAgiAYgYQAXgYAmAAQAmAAAYAYQAYAYAAAiQAAAlgYAXQgYAYgmAAQglAAgYgYgAD5gRQgPAQAAAWQAAAYAPAQQAPAPAXABQAYgBAPgPQAPgQAAgYQAAgWgPgQQgPgPgYAAQgXAAgPAPgAI+BlIAWgtIg8hxIAlAAIAoBPIAjhPIAiAAIhKCegAHtBlIg5hIIgDAEIAABEIgfAAIAAieIAfAAIAABCIA7hCIAnAAIhEBIIBIBWgABRBlIAAieIAvAAQAOAAAJADQALACAIAIQARAOAAAYQAAAUgOAOQgPAOgZAAIgUAAIAAA7gABxAPIAMAAQAOAAAHgFQAIgHAAgKQAAgMgJgGQgHgFgPAAIgKAAgAkVBlIAAikIgdAAIAAgiIBEAAIAADGgAqpBlIA7hCIAQgTIASgWQAMgSAAgNQAAgOgJgIQgIgJgNAAQgOABgJAJQgIAKgBANIgoAAQABgeAUgSQATgSAeAAQAhgBAUAVQASARAAAbQAAAUgMARQgIANgRARIgiAmIBIAAIAAAhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.2,-10.6,136.5,21.3);


(lib.t5_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkkBgQgPgWgBgdIA/AAQAAANAFAJQAJANASAAQAfAAAAgjQAAgSgNgGQgHgEgPAAIgIAAIAAgpIAIAAQAdAAAAgcQAAgPgJgHQgHgFgJAAQgMAAgIAIQgIAIABALIg/AAQAGgyAjgTQAVgLAdAAQAjAAAXAQQAbATAAAiQAAAUgJAOQgKANgSAFIAAABQATAFAMAMQAOARAAAcQAAAlgaAWQgaAWgsAAQg1AAgYglgAHLBnQgWgZAAglQAAgkAWgXQAYgbAsAAQArAAAZAbQAWAXAAAkQAAAlgWAZQgZAbgrAAQgsAAgYgbgAHyAFQgNANAAAXQAAAXANAOQALAMASAAQARAAAMgMQANgOAAgXQAAgXgNgNQgMgKgRAAQgSAAgLAKgAoiBqQgYgYAAgkQAAglAYgWQAYgXAmAAQAmAAAXAXQAYAWAAAlQAAAkgYAYQgYAXglAAQgmAAgYgXgAoKAGQgPAPAAAZQAAAYAPAPQAPAQAXAAQAXAAAPgQQAPgPAAgYQAAgZgPgPQgPgOgXAAQgXAAgPAOgAzQBjIAVgUQAFAMAMAHQALAFAMAAQAQAAAIgHQAHgHAAgKQAAgYgjAAIgOAAIAAgbIAOAAQAMAAAIgFQAHgGAAgJQAAgRgXAAQgUAAgMALIgRgTQAWgTAcAAQAYAAAOALQAOAMAAARQAAAXgTAKQAOAEAIAMQAHALAAAPQAAAWgSAOQgRAOgcAAQgqAAgTgegASiB+IAAg6IgFAAIgiA6IgyAAIAthAQgRgCgLgNQgLgNAAgVQAAghAbgNQAPgIATAAIBFAAIAACngAR9APQAAAUAYAAIANAAIAAgnIgNAAQgYAAAAATgAQHB+IAAhEIg5AAIAABEIgvAAIAAinIAvAAIAAA7IA5AAIAAg7IAvAAIAACngAM6B+IAAh+IglAAIAAgpIB5AAIAAApIglAAIAAB+gAKAB+IAAinIBRAAQAeAAAMARQAIALAAANQAAANgIAJQgHAJgLAEIAAABQANADAJAIQAOALAAAVQAAATgNANQgPAPgbAAgAKvBcIAVAAQAaAAAAgSQAAgRgaAAIgVAAgAKvAYIAUAAQAVAAAAgQQAAgPgVAAIgUAAgAF1B+IguhKIAABKIgvAAIAAhKIgtBKIg6AAIA9hWIg4hRIA2AAIAsBHIAAhHIAvAAIAABHIAthHIA2AAIg5BRIA+BWgAgPB+IAAjBIgmAAIAAg5IBlAAIAAD6gAp2B+IAAiEIhAAAIAACEIgfAAIAAifIB/AAIAACfgAuqB+IAAjBIgnAAIAAg5IBnAAIAAD6g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123.3,-13.3,246.7,26.7);


(lib.t4_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALqCNIAAgvIinAAIAAjhIAZAAIAADJIBzAAIAAjJIAZAAIAADJIAaAAIAABHgAFRiDIAaAAIAACsICdi1IAADqIgZAAIAAirIieC1gACeBRQgTgOgKgXIAZgLQAHATAPALQAQALAUAAQAVAAAOgJQASgNAAgYQAAgqg8AAIgVAAIAAgYIAVAAQAWAAANgMQALgKAAgQQAAgPgJgJQgKgLgVAAQgdAAgQAZIgUgQQAXghAqAAQAfAAARAQQASAQAAAaQAAAhgfAPQAWAFAMARQALANAAAWQAAAjgcAUQgWAPgeAAQgfAAgWgRgAhoBBQgjgiAAgwQAAgyAjgiQAigiAxAAQAwAAAiAiQAiAiAAAyQAAAwgiAiQgiAhgwAAQgxAAgighgAhWhTQgbAbAAAnQAAAlAbAbQAbAbAmAAQAlAAAbgbQAbgbAAglQAAgngbgbQgbgcglAAQgmAAgbAcgApXBBQgjgiAAgwQAAgyAjgiQAigiAxAAQAyAAAiAiQAiAiAAAyQAAAwgiAiQgiAhgyAAQgxAAgighgApFhTQgbAbAAAnQAAAlAbAbQAbAbAmAAQAnAAAagbQAbgbAAglQAAgngbgbQgagcgnAAQgmAAgbAcgAPRBeIAAhhIgNAAIhBBhIgeAAIBChjQgXgCgPgMQgUgQAAgeQAAgcAQgRQASgVAmAAIA1AAIAADhgAOShfQgLALAAASQAAAUANALQAMAJAXAAIAaAAIAAhRIgYAAQgbAAgMAMgAMkBeIAAjhIAZAAIAADhgAjSBeIAAjJIh0AAIAADJIgZAAIAAjhICmAAIAADhgAsIBeIAAjhIApAAQAnAAASAQQAVASAAAfQAAAagRASQgTATgkAAIgWAAIAABhgArvgaIAUAAQAXAAANgLQAMgLAAgUQAAgngyAAIgSAAgAtcBeIAAjJIh0AAIAADJIgZAAIAAjhICmAAIAADhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.3,-14.2,200.6,28.4);


(lib.t4_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AENCAIAAgpIiiAAIAAjRIA6AAIAACeIBGAAIAAieIA7AAIAACeIAZAAIAABcgAncCAIAAgpIh5AAIAAApIgyAAIAAhcQAQAAALgLQANgOACgUIAAhxICbAAIAACeIAZAAIAABcgAongVQAAAVgEALQgFARgOAIIBAAAIAAhrIgpAAgAKqA6QgcgfAAgsQAAgtAcgfQAfgjA2ABQA2gBAfAjQAbAfABAtQgBAsgbAfQgfAjg2gBQg2ABgfgjgALag+QgQARAAAcQAAAbAQARQAPAQAWAAQAVAAAPgQQAQgRAAgbQAAgcgQgRQgPgPgVAAQgWAAgPAPgAThBXIgNgkIhGAAIgNAkIg/AAIBMjRIBGAAIBMDRgATJAEIgYhLIgYBLIAwAAgAOMBXIAAjRIBmAAQAlAAAPAWQALAMgBAUQABAQgLAMQgIALgOAFIAAAAQAQAFAMAKQARAMAAAZQgBAYgQARQgTASghAAgAPHAtIAbAAQAfgBAAgVQAAgWgfAAIgbAAgAPHgmIAYAAQAbAAAAgVQAAgUgbgBIgYAAgAI3BXIAAhVIhIAAIAABVIg6AAIAAjRIA6AAIAABNIBIAAIAAhNIA7AAIAADRgAFUBXIAAjRIA7AAIAADRgAgpBXIgMgkIhHAAIgLAkIg/AAIBKjRIBHAAIBJDRgAhAAEIgYhLIgYBLIAwAAgAkSBXIAAhVIhIAAIAABVIg6AAIAAjRIA6AAIAABNIBIAAIAAhNIA7AAIAADRgArVBXIAAjRIA7AAIAADRgAtqBXIAAjRIB+AAIAAAzIhEAAIAACegAvIBXIAAh8IhSB8Ig5AAIAAjRIA4AAIAAB8IBSh8IA6AAIAADRgA0fBXIAAjRIBmAAQAlAAAQAWQAKAMAAAUQAAAQgKAMQgJALgOAFIAAAAQARAFALAKQAQAMABAZQgBAYgQARQgSASgiAAgAzjAtIAbAAQAfgBAAgVQAAgWgfAAIgbAAgAzjgmIAYAAQAbAAAAgVQAAgUgbgBIgYAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-131.2,-12.9,262.4,25.8);


(lib.t3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABlCKIAAgyIiIAAIAAAyIgfAAIAAhQQAXgBALgeQAIgTAAgkIAAhkICEAAIAAC6IAXAAIAABQgAAHgbQAAAmgHAVQgFAQgKAKIBaAAIAAibIhEAAgAFHiAIAhAAIAACRICQiaIAADhIghAAIAAiQIiQCagAlbA8QgfggAAguQAAgxAgggQAfghAwABQAwgBAgAhQAgAggBAxQABAuggAgQggAhgwAAQgwAAggghgAlChNQgVAWgBAlQABAiAVAXQAVAWAiAAQAiAAAVgWQAWgYAAghQAAglgWgWQgUgYgjAAQgiAAgVAYgAPjBYIAAhjIhbAAIAABjIggAAIAAjYIAgAAIAABWIBbAAIAAhWIAhAAIAADYgALKBYIAdhBIhNiXIAoAAIA3ByIAyhyIAiAAIhgDYgAIpBYIAAjYIBrAAIAAAfIhKAAIAAC5gAChBYIAAjYIAgAAQASABAIABQAPACALAIQAZAQAAAiQAAAZgTAOQATAGAKAQQAIAMAAAQQAAAggWASQgSAPgnAAgADBA6IAUAAQAqAAAAgiQAAgegpgBIgVAAgADBgiIAKAAQAjABAAghQAAgfghAAIgMAAgAoXBYIAAjYIBrAAIAAAfIhKAAIAAA6IAVAAQAjAAASARQAVASAAAbQAAAkgbASQgRAMgegBgAn2A6IAUAAQAqgBAAghQAAgMgHgJQgKgMgZAAIgUAAgAqvBYIAAjYIAvAAQAdAAASAMQAbASAAAjQAAAegWASQgTAPggAAIgPAAIAABYgAqOgdIAPAAQAoAAgBgiQAAgigoAAIgOAAgAtMBYIAdhBIhMiXIAnAAIA3ByIAyhyIAiAAIhgDYgAvSBYIAAi5IgxAAIAAgfICDAAIAAAfIgxAAIAAC5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.8,-13.8,205.7,27.6);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIyEpIAAjaIAvAAQAdAAASAMQAaARAAAjQAAAegUASQgUARggAAIgPAAIAABZgAJTCxIAPAAQAoAAAAgiQAAghgpAAIgOAAgAGUEpIAAjaIB2AAIAAAfIhVAAIAAA0IBSAAIAAAfIhSAAIAABIIBVAAIAAAggAEnEpIAAi7IgxAAIAAgfICCAAIAAAfIgwAAIAAC7gADEEpIhShpIAABpIghAAIAAjaIAhAAIAABXIBShXIArAAIhgBiIBhB4gAAUEpIgVg1IhaAAIgYA1IgjAAIBqjnIBjDngAgODUIgfhJIghBJIBAAAgAkOEpIAAjaIAvAAQAdAAASAMQAaARAAAjQAAAegVASQgTARghAAIgOAAIAABZgAjtCxIAOAAQAoAAAAgiQAAghgoAAIgOAAgAlLEpIgXg1IhaAAIgYA1IgjAAIBqjnIBlDngAlvDUIgfhJIghBJIBAAAgAogEpIgvhUIgxBUIgkAAIBDhyIg7hoIAlAAIApBJIArhJIAlAAIg+BoIBABygAMgjnIAhAAIAACTICQicIAADjIghAAIAAiTIiQCdgAI+jnIAhAAIAACTICQicIAADjIghAAIAAiTIiQCdgAgXjnIAfAAIAACTICQicIAADjIghAAIAAiTIiOCdgAoegpQgfggAAgwQAAgxAgggQAfghAwAAQAwAAAgAhQAfAgAAAxQAAAwgfAgQggAhgwAAQgwAAggghgAoFi1QgWAXAAAlQAAAkAWAWQAVAXAiAAQAiAAAVgXQAWgXAAgjQAAglgWgXQgVgXgiAAQgiAAgVAXgAutgnQgjghAAgxQAAg0AjghQAdgdAvAAQAiAAAXAQIAAAnQgYgYghAAQgiAAgVAYQgVAXAAAkQAAAjAVAXQAVAXAiAAQAgAAAZgZIAAAoQgbARgfAAQgsAAgfgfgAHsgNIAAhlIhbAAIAABlIghAAIAAjaIAhAAIAABWIBbAAIAAhWIAhAAIAADagADJgNIAAjaIAhAAQASAAAIACQAPACALAIQAZARAAAgQAAAZgTAPQASAGAKAQQAJANAAARQAAAggWASQgSAPgnAAgADqgsIAUAAQAqAAAAghQAAghgqAAIgUAAgADqiJIAKAAQAjAAAAggQAAgfgiAAIgLAAgAiEgNIAAi7IgxAAIAAgfICDAAIAAAfIgxAAIAAC7gAk4gNIAAjaIAvAAQAdAAASAMQAbASAAAjQAAAegVASQgUARggAAIgPAAIAABYgAkXiEIAPAAQAoAAAAgiQAAgigpAAIgOAAgAqFgNIAAi7IhbAAIAAC7IghAAIAAjaICdAAIAADagANakDQgQgJgGgQIAZgMQAGASAVAAQAKAAAHgEQAIgFACgJIAaAMQgGAQgQAJQgOAIgRAAQgRAAgNgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.7,-29.7,195.5,59.5);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtKClIAAgxIiKAAIAAAxIgeAAIAAhPQAWgBAMgeQAHgTAAgkIAAhjICFAAIAAC5IAYAAIAABPgAuoAAQAAAkgHAYQgGAPgLALIBbAAIAAibIhDAAgAhbgNIgXCBIghAAIAtjoIBKCnIBJinIAoDoIghAAIgWiBIg8CLgANChjIAhAAIAACQICQiZIAADgIghAAIAAiQIiQCagAJghjIAhAAIAACQICQiZIAADgIghAAIAAiQIiQCagAsPhjIAhAAIAACQICQiZIAADgIghAAIAAiQIiQCagAIOB0IAAhlIhbAAIAABlIghAAIAAjXIAhAAIAABVIBbAAIAAhVIAhAAIAADXgAFAB0IAAhZIgpACQglAAgRgNQgVgQAAgjIAAhAIAhAAIAAA7QAAALABAGQACALAIAFQAIAHAbAAQAVAAAQgCIAAhhIAhAAIAADXgACAB0IAAjXIAhAAIAADXgAjKB0IgXg1IhaAAIgYA1IgjAAIBqjkIBlDkgAjuAhIgfhIIghBIIBAAAgAmxB0IAAhlIhbAAIAABlIghAAIAAjXIAhAAIAABVIBbAAIAAhVIAhAAIAADXgAN8iAQgQgIgGgRIAZgLQADAIAIAFQAHAFAKAAQAJAAAIgFQAHgFADgIIAZALQgGARgPAIQgOAIgRAAQgRAAgOgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.1,-16.6,202.4,33.2);


(lib.mP14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("AqV3bIUrAAMAAAAu3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.3,-150,132.6,300);


(lib.mP13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("ArsCRIAA5sIXZAAMAAAAu3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-150,150,300);


(lib.mP12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("ArsP0MAAAgnPIXZAAMAAAAu3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-150,150,300);


(lib.mP11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("Ars4nIXZAAMAAAAu2I3ZCZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-157.6,150,315.3);


(lib.mP10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("Ars+JIXZAAMAAAAu2I3ZNdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-193.1,150,386.2);


(lib.mP9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgLsgngIXZAAMAAAAu2MgXZAgLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-253,150,506);


(lib.mP8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgLsAu3MAAAhdtIXZAAMAAAAu2MgJ+Au3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-300,150,600);


(lib.mP7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgQsAu3MAAAhdtIXbAAMAAAAu2MAJ+Au3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.9,-300,213.8,600);


(lib.mP6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgXbAu3MAAAhdtIXbAAMAAAAu2MAXcAgLIAAOsg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.mP5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgXbAu3MAAAhdtIXbAAMAAAAu2IXcNdMAAAAhag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.mP4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgXbAu3MAAAhdtIXbAAMAAAAu2IXcCYMAAAAsfg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.mP3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgXbAu3MAAAhdtIXbAAMAAAAu2IXcnmMAAAA2dg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.mP2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgXbAu3MAAAhdtIXbAAMAAAAu2IXc1JMAAABEAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.mP1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgXbAu3MAAAhdtIXbAAMAAAAu2MAUtgu2ICvAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.logoMc = function() {
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


(lib.gs_200t_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32383B").s().p("AHaCHQgqgxAAhWQAAhVAqgxQAdgjAsAAQAqAAAeAjQAqAxAABVQAABWgqAxQgeAjgqAAQgrAAgegjgAH3hhQgWAjAAA+QAAA/AWAjQARAbAbAAQAZAAASgbQAXgjgBg/QABg+gXgjQgSgbgZAAQgbAAgRAbgADLCHQgqgxAAhWQAAhVAqgxQAegjAqAAQAqAAAfAjQApAxAABVQAABWgpAxQgfAjgqAAQgpAAgfgjgADohhQgWAjgBA+QABA/AWAjQARAbAaAAQAaAAARgbQAXgjAAg/QAAg+gXgjQgRgbgaAAQgaAAgRAbgAm3CJQgXgcgFgkIAxgLQACAYAMASQAOATAcAAQAaAAAOgRQAOgPAAgWQgBgWgPgPQgKgKgVgKIgfgMQgdgMgQgQQgUgWAAggQAAgmAcgZQAagYAnAAQAoAAAZAXQAPANAKATIgnAYQgHgNgJgHQgNgMgUAAQgUAAgMAKQgOAKAAATQAAAaAiAOIAhANQBMAeAABBQAAAugdAeQgdAdgvAAQgvAAgcghgAsFB6QgxgyABhIQgBhGAvgxQAvgyBKAAQA3AAArAgQAUAOAPAVIgjAhQglg1g9AAQgzAAggAjQghAjAAA0QAAA2AiAjQAhAiAvAAQAmAAAbgYQAagXAGgkIhQAAIAAgtICEAAIAAAIQAAAdgFAWQgGAdgSAZQgrA+hOAAQhFAAgvgwgALkCXQgPgRAAgqIAAh6IgiAAIAAggIAiAAIAAg2IAogKIAABAIA5AAIAAAgIg5AAIAAB4QAAAsAeABQANgBALgCIABAeQgMAGgYAAQgcAAgQgRgAhyCjIBwiJQAYgcANgWQAQgXAAgXQAAgWgOgPQgPgRgWAAQgYAAgPAQQgRARgBAbIgwAAQACgqAZgeQAcghAxAAQAuAAAcAeQAaAcAAApQAAAjgXAjQgJAMglAsIgxA+IB3AAIAAAtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.3,-17,164.6,34.1);


(lib.gs_200t_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHaCHQgqgxAAhWQAAhVAqgxQAdgjAsAAQAqAAAeAjQAqAxAABVQAABWgqAxQgeAjgqAAQgrAAgegjgAH3hhQgWAjAAA+QAAA/AWAjQARAbAbAAQAZAAASgbQAXgjgBg/QABg+gXgjQgSgbgZAAQgbAAgRAbgADLCHQgqgxAAhWQAAhVAqgxQAegjAqAAQAqAAAfAjQApAxAABVQAABWgpAxQgfAjgqAAQgpAAgfgjgADohhQgWAjgBA+QABA/AWAjQARAbAaAAQAaAAARgbQAXgjAAg/QAAg+gXgjQgRgbgaAAQgaAAgRAbgAm3CJQgXgcgFgkIAxgLQACAYAMASQAOATAcAAQAaAAAOgRQAOgPAAgWQgBgWgPgPQgKgKgVgKIgfgMQgdgMgQgQQgUgWAAggQAAgmAcgZQAagYAnAAQAoAAAZAXQAPANAKATIgnAYQgHgNgJgHQgNgMgUAAQgUAAgMAKQgOAKAAATQAAAaAiAOIAhANQBMAeAABBQAAAugdAeQgdAdgvAAQgvAAgcghgAsFB6QgxgyABhIQgBhGAvgxQAvgyBKAAQA3AAArAgQAUAOAPAVIgjAhQglg1g9AAQgzAAggAjQghAjAAA0QAAA2AiAjQAhAiAvAAQAmAAAbgYQAagXAGgkIhQAAIAAgtICEAAIAAAIQAAAdgFAWQgGAdgSAZQgrA+hOAAQhFAAgvgwgALkCXQgPgRAAgqIAAh6IgiAAIAAggIAiAAIAAg2IAogKIAABAIA5AAIAAAgIg5AAIAAB4QAAAsAeABQANgBALgCIABAeQgMAGgYAAQgcAAgQgRgAhyCjIBwiJQAYgcANgWQAQgXAAgXQAAgWgOgPQgPgRgWAAQgYAAgPAQQgRARgBAbIgwAAQACgqAZgeQAcghAxAAQAuAAAcAeQAaAcAAApQAAAjgXAjQgJAMglAsIgxA+IB3AAIAAAtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.3,-17,164.6,34.1);


(lib.finalText = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,147.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.9,-77.8,233.3,255);


(lib.dillers = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-84.1,224.9,168.2);


(lib.car_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car();
	this.instance.setTransform(-136,-91);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-136,-91,273,183);


(lib.bgImg5_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg5();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bgImg4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg4();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bgImg3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg3();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bgImg2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg2();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bgImg1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg1();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A365E").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.logo = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.logoMc();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.4,-27.6,314,61);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finText
	this.instance = new lib.finalText();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(425).to({_off:false},0).to({alpha:1},10).wait(46).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(-62,272.7,0.482,0.482);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(415).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(66).to({scaleX:0.48,scaleY:0.48,x:-62,y:272.7},10).wait(1));

	// dillers
	this.instance_2 = new lib.dillers();
	this.instance_2.setTransform(-264,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(369).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:265},10,cjs.Ease.get(-1)).to({_off:true},1).wait(87));

	// bg
	this.instance_3 = new lib.bg();

	this.instance_4 = new lib.mP1();

	this.instance_5 = new lib.mP2();

	this.instance_6 = new lib.mP3();

	this.instance_7 = new lib.mP4();

	this.instance_8 = new lib.mP5();

	this.instance_9 = new lib.mP6();

	this.instance_10 = new lib.mP7();
	this.instance_10.setTransform(-43.1,0);

	this.instance_11 = new lib.mP8();
	this.instance_11.setTransform(-75,0);

	this.instance_12 = new lib.mP9();
	this.instance_12.setTransform(-75,-47);

	this.instance_13 = new lib.mP10();
	this.instance_13.setTransform(-75,-106.9);

	this.instance_14 = new lib.mP11();
	this.instance_14.setTransform(-75,-142.3);

	this.instance_15 = new lib.mP12();
	this.instance_15.setTransform(-75,-150);

	this.instance_16 = new lib.mP13();
	this.instance_16.setTransform(-75,-150);

	this.instance_17 = new lib.mP14();
	this.instance_17.setTransform(-66.2,-150);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#19365E").s().p("AqV3aIUrAAMgUrAu2g");
	this.shape.setTransform(66.3,-150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19365E").s().p("Art3aIXbAAIAAZrI3bVLg");
	this.shape_1.setTransform(75,-150);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#19365E").s().p("Art3aIXbAAMAAAAnOI3bHog");
	this.shape_2.setTransform(75,-150);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#19365E").s().p("ArtWPMAAAgu2IXbAAMAAAAxPg");
	this.shape_3.setTransform(75,-142.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19365E").s().p("ArtQtMAAAgu2IXbAAMAAAA8Tg");
	this.shape_4.setTransform(75,-106.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19365E").s().p("ArtHWMAAAgu2IXbAAMAAABPBg");
	this.shape_5.setTransform(75,-47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19365E").s().p("EgBuAu3MgJ/gu3MAAAgu2IXbAAMAAABdtg");
	this.shape_6.setTransform(75,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#19365E").s().p("EgQsAu3MAJ+gu3MAAAgu2IXbAAMAAABdtg");
	this.shape_7.setTransform(43.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19365E").s().p("EgXbAu3IAAusMAXbggLMAAAgu2IXcAAMAAABdtg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19365E").s().p("EgXbAu3MAAAghaIXbtdMAAAgu2IXcAAMAAABdtg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#19365E").s().p("EgXbAu3MAAAgseIXbiZMAAAgu2IXcAAMAAABdtg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#19365E").s().p("EgXbAu3MAAAg2dIXbHmMAAAgu2IXcAAMAAABdtg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#19365E").s().p("EgXbAu3MAAAhEAIXbVJMAAAgu2IXcAAMAAABdtg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#19365E").s().p("EgXbAu3MAAAhdtICvAAMAUsAu2MAAAgu2IXcAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).to({state:[{t:this.shape}]},339).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.instance_3}]},1).wait(134));

	// t6_3
	this.instance_18 = new lib.t6_3();
	this.instance_18.setTransform(-281.5,178);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(319).to({_off:false},0).to({x:-4.8},10,cjs.Ease.get(1)).to({_off:true},39).wait(134));

	// t6_2
	this.instance_19 = new lib.t6_2();
	this.instance_19.setTransform(300,-26.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(309).to({_off:false},0).to({x:32.6},10,cjs.Ease.get(1)).to({_off:true},49).wait(134));

	// t6_1
	this.instance_20 = new lib.t6_1();
	this.instance_20.setTransform(-302.6,-223);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(299).to({_off:false},0).to({x:-25.9},10,cjs.Ease.get(1)).to({_off:true},59).wait(134));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_284 = new cjs.Graphics().p("AqV3aIUrAAMgUrAu2g");
	var mask_graphics_285 = new cjs.Graphics().p("Art3aIXbAAIAAZrI3bVLg");
	var mask_graphics_286 = new cjs.Graphics().p("Art3aIXbAAMAAAAnOI3bHog");
	var mask_graphics_287 = new cjs.Graphics().p("ArtWPMAAAgu2IXbAAMAAAAxPg");
	var mask_graphics_288 = new cjs.Graphics().p("ArtQtMAAAgu2IXbAAMAAAA8Tg");
	var mask_graphics_289 = new cjs.Graphics().p("ArtHWMAAAgu2IXbAAMAAABPBg");
	var mask_graphics_290 = new cjs.Graphics().p("EgBuAu3MgJ/gu3MAAAgu2IXbAAMAAABdtg");
	var mask_graphics_291 = new cjs.Graphics().p("EgQsAu3MAJ+gu3MAAAgu2IXbAAMAAABdtg");
	var mask_graphics_292 = new cjs.Graphics().p("EgXbAu3IAAusMAXbggLMAAAgu2IXcAAMAAABdtg");
	var mask_graphics_293 = new cjs.Graphics().p("EgXbAu3MAAAghaIXbtdMAAAgu2IXcAAMAAABdtg");
	var mask_graphics_294 = new cjs.Graphics().p("EgXbAu3MAAAgseIXbiZMAAAgu2IXcAAMAAABdtg");
	var mask_graphics_295 = new cjs.Graphics().p("EgXbAu3MAAAg2dIXbHmMAAAgu2IXcAAMAAABdtg");
	var mask_graphics_296 = new cjs.Graphics().p("EgXbAu3MAAAhEAIXbVJMAAAgu2IXcAAMAAABdtg");
	var mask_graphics_297 = new cjs.Graphics().p("EgXbAu3MAAAhdtICvAAMAUsAu2MAAAgu2IXcAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(284).to({graphics:mask_graphics_284,x:66.3,y:-150}).wait(1).to({graphics:mask_graphics_285,x:75,y:-150}).wait(1).to({graphics:mask_graphics_286,x:75,y:-150}).wait(1).to({graphics:mask_graphics_287,x:75,y:-142.4}).wait(1).to({graphics:mask_graphics_288,x:75,y:-106.9}).wait(1).to({graphics:mask_graphics_289,x:75,y:-47}).wait(1).to({graphics:mask_graphics_290,x:75,y:0}).wait(1).to({graphics:mask_graphics_291,x:43.1,y:0}).wait(1).to({graphics:mask_graphics_292,x:0,y:0}).wait(1).to({graphics:mask_graphics_293,x:0,y:0}).wait(1).to({graphics:mask_graphics_294,x:0,y:0}).wait(1).to({graphics:mask_graphics_295,x:0,y:0}).wait(1).to({graphics:mask_graphics_296,x:0,y:0}).wait(1).to({graphics:mask_graphics_297,x:0,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(204));

	// bgImg
	this.instance_21 = new lib.bgImg5_1();
	this.instance_21._off = true;

	this.instance_21.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(284).to({_off:false},0).to({_off:true},84).wait(134));

	// t5_2
	this.instance_22 = new lib.t5_2();
	this.instance_22.setTransform(300,-139.6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(249).to({_off:false},0).to({x:4},10,cjs.Ease.get(1)).to({_off:true},39).wait(204));

	// t5_1
	this.instance_23 = new lib.t5_1();
	this.instance_23.setTransform(-300,-178);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(249).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).to({_off:true},39).wait(204));

	// t4_2
	this.instance_24 = new lib.t4_2();
	this.instance_24.setTransform(-300,-128.8);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(194).to({_off:false},0).to({x:-0.2},10,cjs.Ease.get(1)).wait(35).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(252));

	// t4_1
	this.instance_25 = new lib.t4_1();
	this.instance_25.setTransform(300,-168.9);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(194).to({_off:false},0).to({x:0.8},10,cjs.Ease.get(1)).wait(35).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(252));

	// gs_200t_1
	this.instance_26 = new lib.gs_200t_1();
	this.instance_26.setTransform(-255.3,36.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(204).to({_off:false},0).to({x:-0.5},10,cjs.Ease.get(1)).to({_off:true},84).wait(204));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_179 = new cjs.Graphics().p("AqV3aIUrAAMgUrAu2g");
	var mask_1_graphics_180 = new cjs.Graphics().p("Art3aIXbAAIAAZrI3bVLg");
	var mask_1_graphics_181 = new cjs.Graphics().p("Art3aIXbAAMAAAAnOI3bHog");
	var mask_1_graphics_182 = new cjs.Graphics().p("ArtWPMAAAgu2IXbAAMAAAAxPg");
	var mask_1_graphics_183 = new cjs.Graphics().p("ArtQtMAAAgu2IXbAAMAAAA8Tg");
	var mask_1_graphics_184 = new cjs.Graphics().p("ArtHWMAAAgu2IXbAAMAAABPBg");
	var mask_1_graphics_185 = new cjs.Graphics().p("EgBuAu3MgJ/gu3MAAAgu2IXbAAMAAABdtg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EgQsAu3MAJ+gu3MAAAgu2IXbAAMAAABdtg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EgXbAu3IAAusMAXbggLMAAAgu2IXcAAMAAABdtg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EgXbAu3MAAAghaIXbtdMAAAgu2IXcAAMAAABdtg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EgXbAu3MAAAgseIXbiZMAAAgu2IXcAAMAAABdtg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EgXbAu3MAAAg2dIXbHmMAAAgu2IXcAAMAAABdtg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EgXbAu3MAAAhEAIXbVJMAAAgu2IXcAAMAAABdtg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EgXbAu3MAAAhdtICvAAMAUsAu2MAAAgu2IXcAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_1_graphics_179,x:66.3,y:-150}).wait(1).to({graphics:mask_1_graphics_180,x:75,y:-150}).wait(1).to({graphics:mask_1_graphics_181,x:75,y:-150}).wait(1).to({graphics:mask_1_graphics_182,x:75,y:-142.4}).wait(1).to({graphics:mask_1_graphics_183,x:75,y:-106.9}).wait(1).to({graphics:mask_1_graphics_184,x:75,y:-47}).wait(1).to({graphics:mask_1_graphics_185,x:75,y:0}).wait(1).to({graphics:mask_1_graphics_186,x:43.1,y:0}).wait(1).to({graphics:mask_1_graphics_187,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_188,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_189,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_190,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_191,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_192,x:0,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(309));

	// bgImg
	this.instance_27 = new lib.bgImg4_1();
	this.instance_27._off = true;

	this.instance_27.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(179).to({_off:false},0).to({_off:true},119).wait(204));

	// car
	this.instance_28 = new lib.car_1();
	this.instance_28.setTransform(-2,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({_off:true},193).wait(309));

	// t3
	this.instance_29 = new lib.t3();
	this.instance_29.setTransform(-300,185);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(144).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).to({_off:true},39).wait(309));

	// gs_200t_1
	this.instance_30 = new lib.gs_200t_2();
	this.instance_30.setTransform(-253.3,-153.7);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(134).to({_off:false},0).to({x:1.5},10,cjs.Ease.get(1)).to({_off:true},49).wait(309));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_119 = new cjs.Graphics().p("AqV3aIUrAAMgUrAu2g");
	var mask_2_graphics_120 = new cjs.Graphics().p("Art3aIXbAAIAAZrI3bVLg");
	var mask_2_graphics_121 = new cjs.Graphics().p("Art3aIXbAAMAAAAnOI3bHog");
	var mask_2_graphics_122 = new cjs.Graphics().p("ArtWPMAAAgu2IXbAAMAAAAxPg");
	var mask_2_graphics_123 = new cjs.Graphics().p("ArtQtMAAAgu2IXbAAMAAAA8Tg");
	var mask_2_graphics_124 = new cjs.Graphics().p("ArtHWMAAAgu2IXbAAMAAABPBg");
	var mask_2_graphics_125 = new cjs.Graphics().p("EgBuAu3MgJ/gu3MAAAgu2IXbAAMAAABdtg");
	var mask_2_graphics_126 = new cjs.Graphics().p("EgQsAu3MAJ+gu3MAAAgu2IXbAAMAAABdtg");
	var mask_2_graphics_127 = new cjs.Graphics().p("EgXbAu3IAAusMAXbggLMAAAgu2IXcAAMAAABdtg");
	var mask_2_graphics_128 = new cjs.Graphics().p("EgXbAu3MAAAghaIXbtdMAAAgu2IXcAAMAAABdtg");
	var mask_2_graphics_129 = new cjs.Graphics().p("EgXbAu3MAAAgseIXbiZMAAAgu2IXcAAMAAABdtg");
	var mask_2_graphics_130 = new cjs.Graphics().p("EgXbAu3MAAAg2dIXbHmMAAAgu2IXcAAMAAABdtg");
	var mask_2_graphics_131 = new cjs.Graphics().p("EgXbAu3MAAAhEAIXbVJMAAAgu2IXcAAMAAABdtg");
	var mask_2_graphics_132 = new cjs.Graphics().p("EgXbAu3MAAAhdtICvAAMAUsAu2MAAAgu2IXcAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_2_graphics_119,x:66.3,y:-150}).wait(1).to({graphics:mask_2_graphics_120,x:75,y:-150}).wait(1).to({graphics:mask_2_graphics_121,x:75,y:-150}).wait(1).to({graphics:mask_2_graphics_122,x:75,y:-142.4}).wait(1).to({graphics:mask_2_graphics_123,x:75,y:-106.9}).wait(1).to({graphics:mask_2_graphics_124,x:75,y:-47}).wait(1).to({graphics:mask_2_graphics_125,x:75,y:0}).wait(1).to({graphics:mask_2_graphics_126,x:43.1,y:0}).wait(1).to({graphics:mask_2_graphics_127,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_128,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_129,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_130,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_131,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_132,x:0,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(369));

	// bgImg
	this.instance_31 = new lib.bgImg3_1();
	this.instance_31._off = true;

	this.instance_31.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(119).to({_off:false},0).to({_off:true},74).wait(309));

	// t2
	this.instance_32 = new lib.t2();
	this.instance_32.setTransform(-300,178.8);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(84).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).to({_off:true},39).wait(369));

	// gs_200t_1
	this.instance_33 = new lib.gs_200t_2();
	this.instance_33.setTransform(-253.3,-153.7);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(74).to({_off:false},0).to({x:1.5},10,cjs.Ease.get(1)).to({_off:true},49).wait(369));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_59 = new cjs.Graphics().p("AqV3aIUrAAMgUrAu2g");
	var mask_3_graphics_60 = new cjs.Graphics().p("Art3aIXbAAIAAZrI3bVLg");
	var mask_3_graphics_61 = new cjs.Graphics().p("Art3aIXbAAMAAAAnOI3bHog");
	var mask_3_graphics_62 = new cjs.Graphics().p("ArtWPMAAAgu2IXbAAMAAAAxPg");
	var mask_3_graphics_63 = new cjs.Graphics().p("ArtQtMAAAgu2IXbAAMAAAA8Tg");
	var mask_3_graphics_64 = new cjs.Graphics().p("ArtHWMAAAgu2IXbAAMAAABPBg");
	var mask_3_graphics_65 = new cjs.Graphics().p("EgBuAu3MgJ/gu3MAAAgu2IXbAAMAAABdtg");
	var mask_3_graphics_66 = new cjs.Graphics().p("EgQsAu3MAJ+gu3MAAAgu2IXbAAMAAABdtg");
	var mask_3_graphics_67 = new cjs.Graphics().p("EgXbAu3IAAusMAXbggLMAAAgu2IXcAAMAAABdtg");
	var mask_3_graphics_68 = new cjs.Graphics().p("EgXbAu3MAAAghaIXbtdMAAAgu2IXcAAMAAABdtg");
	var mask_3_graphics_69 = new cjs.Graphics().p("EgXbAu3MAAAgseIXbiZMAAAgu2IXcAAMAAABdtg");
	var mask_3_graphics_70 = new cjs.Graphics().p("EgXbAu3MAAAg2dIXbHmMAAAgu2IXcAAMAAABdtg");
	var mask_3_graphics_71 = new cjs.Graphics().p("EgXbAu3MAAAhEAIXbVJMAAAgu2IXcAAMAAABdtg");
	var mask_3_graphics_72 = new cjs.Graphics().p("EgXbAu3MAAAhdtICvAAMAUsAu2MAAAgu2IXcAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_3_graphics_59,x:66.3,y:-150}).wait(1).to({graphics:mask_3_graphics_60,x:75,y:-150}).wait(1).to({graphics:mask_3_graphics_61,x:75,y:-150}).wait(1).to({graphics:mask_3_graphics_62,x:75,y:-142.4}).wait(1).to({graphics:mask_3_graphics_63,x:75,y:-106.9}).wait(1).to({graphics:mask_3_graphics_64,x:75,y:-47}).wait(1).to({graphics:mask_3_graphics_65,x:75,y:0}).wait(1).to({graphics:mask_3_graphics_66,x:43.1,y:0}).wait(1).to({graphics:mask_3_graphics_67,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_68,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_69,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_70,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_71,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_72,x:0,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(429));

	// bgImg
	this.instance_34 = new lib.bgImg2_1();
	this.instance_34._off = true;

	this.instance_34.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(59).to({_off:false},0).to({_off:true},74).wait(369));

	// t1
	this.instance_35 = new lib.t1();
	this.instance_35.setTransform(-254.8,182.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(24).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).to({_off:true},39).wait(429));

	// gs_200t_1
	this.instance_36 = new lib.gs_200t_1();
	this.instance_36.setTransform(-253.3,-153.7);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(14).to({_off:false},0).to({x:1.5},10,cjs.Ease.get(1)).to({_off:true},49).wait(429));

	// bgImg
	this.instance_37 = new lib.bgImg1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_37).to({_off:true},73).wait(429));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,302,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;