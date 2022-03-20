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
		{src:"images/img1.png", id:"img1"}
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
p.nominalBounds = new cjs.Rectangle(0,0,303,60);


(lib.t4_4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEUBYIgzhmIgXBmIgsAAIAmisIAuAAIAwBgIAWhgIAtAAIgmCsgABSBYIAmisIAtAAIgmCsgAg7BYIAahyIhGByIgTAAIgThyIgZByIgtAAIAmisIA9AAIAPBeIA6heIA9AAIgkCsgAlkBYIAmisIAtAAIgnCsgAkCgTQAVgKAHgNIgEABQgHAAgGgFQgFgFAAgKQAAgKAIgIQAIgIALAAQAJAAAHAHQAHAGAAAMQAAAQgMAQQgMAQgSAIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.8,-8.8,71.6,17.6);


(lib.t4_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqYBfIAGgXQgegFgRgUIAaggQAIAKAOAHQAOAFAPAAQAMAAAAgFQAAgDgjgNQgkgOABgYQAAgUAPgOQARgSAcAAIAFgUIAcAAIgFAXQAZAHAOAOIgbAfQgIgIgOgFQgMgFgKABQgKAAABAFQgBADAkANQAiAOABAXQgBAYgQAPQgRAOgcAAIgFAUgAMIA5QgWgTAAgeQAAghAZgZQAZgZAmABQAhAAAWASQAVATAAAdQAAAigZAZQgZAZgmgBQghAAgVgSgAMrgXQgLANAAAPQAAANAJAJQAJAKAPgBQARABAMgNQALgNgBgPQABgNgJgJQgKgJgPAAQgQAAgMAMgAifA8QgRgQAAgdQAAglAXgaQAVgaAhAAQAaAAAPAPQAQARAAAdQAAAkgVAaQgWAaghAAQgaAAgPgPgAh9gRQgHAQAAASQAAATASAAQANAAAIgSQAHgQAAgRQAAgUgSAAQgMAAgJASgAkpA8QgRgQAAgdQAAglAWgaQAWgaAhAAQAZAAAQAPQARARAAAdQAAAkgXAaQgWAaggAAQgaAAgPgPgAkGgRQgIAQABASQAAATARAAQANAAAHgSQAIgQAAgRQgBgUgRAAQgNAAgHASgAm0A8QgQgQAAgdQAAglAWgaQAWgaAhAAQAaAAAPAPQAQARAAAdQAAAkgWAaQgWAaghAAQgZAAgQgPgAmRgRQgGAQAAASQAAATARAAQANAAAIgSQAGgQABgRQAAgUgRAAQgNAAgJASgAwaA5QgVgTAAgeQAAghAZgZQAYgZAnABQAhAAAVASQAWATAAAdQAAAigZAZQgZAZgmgBQghAAgWgSgAv3gXQgLANAAAPQAAANAJAJQAKAKAOgBQARABAMgNQALgNAAgPQAAgNgJgJQgJgJgPAAQgSAAgLAMgAQpBJIAgiRIBwAAIgJAnIhCAAIgDAPIBBAAIgJAkIhBAAIgEAQIBDAAIgIAngAPnBJIgKguIgSAAIgKAuIgtAAIAgiRIBIAAQAUAAAOAMQAPANAAAUQAAASgLANQgKAOgPAGIAOAxgAPUgKIAbAAQAQAAAAgNQAAgKgNAAIgaAAgAKoBJIAThXIg0BXIgUAAIgOhXIgTBXIgtAAIAhiRIA8AAIAKBHIAphHIA/AAIggCRgAFMBJIAgiRIBBAAQAaAAATARQAVATAAAcQAAAegVAXQgaAcgzAAgAGBAiIAUAAQAUAAANgMQALgMAAgPQAAgMgIgIQgIgIgMAAIgVAAgAEJBJIglhKIgRBKIgsAAIAgiRIAtAAIAkBIIAQhIIAsAAIggCRgABuBJIgBgSIg1AAIgJASIgzAAIBViRIA4AAIAWCRgABqARIgFgtIgYAtIAdAAgAoPBJIAVhZIgfAYIgTgZIBEg3IAnAAIghCRgAs7BJIgKguIgSAAIgKAuIgsAAIAgiRIBHAAQAVAAAOAMQAPAMAAAVQgBASgKANQgKAOgPAGIAOAxgAtOgKIAbAAQARAAAAgNQAAgKgNAAIgaAAgAy4BJIAgiRIBwAAIgJAnIhDAAIgDAPIBBAAIgIAkIhBAAIgMA3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.9,-9.5,241.9,19.1);


(lib.t4_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC600").s().p("AAOCZQgqgRgYgeIA5hHQARAWAgAOQAgAOAhAAQANAAAHgFQAGgEAAgFQAAgJgYgIIg3gTQhNgeAAg3QAAgvAigiQAngmBDAAQApAAAmAOQAmAPAbAaIg8BGQgTgUgegLQgagKgaAAQgJAAgFAEQgGAEAAAGQAAAIAZAJIA3ATQBPAfAAA2QAAA1gmAhQgnAig/AAQg0AAgtgRgAstCAQgygrAAhCQAAhOA4g3QA5g3BWAAQBKAAAwAqQAyAqAABCQAABOg4A3Qg5A4hVAAQhKAAgxgqgAreg1QgZAcAAAlQAAAfAUATQAVAUAhAAQAmAAAagcQAZgcAAglQAAgegUgUQgVgUghAAQgnAAgZAcgAPFCkIhUipIglCpIhkAAIBIlIIBnAAIBQChIAjihIBkAAIhJFIgAJOCkIBJlIIBkAAIhJFIgAHICkIgzh3IgbAcIgUBbIhkAAIBJlIIBkAAIgaB1IBrh1ICAAAIifCaIBbCugAnxCkIBIlIICvAAQApAAAcAdQAcAcAAApQAAAugeAiQgoAuhMAAIhMAAIgWBogAljgZIA9AAQAOAAALgIQAMgIAAgOQAAgWgbAAIg8AAgAxKCkIA2jxIhZAAIAThXIEVAAIgTBXIhYAAIg2Dxg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.4,-17,227,34.2);


(lib.t4_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC600").s().p("AJOB1QgigbAAgvIACgSIAlimIBYAAIglCkIgBAKQABAPALALQANAMAXAAQAZAAAPgOQAOgNAFgVIAkikIBXAAIglClQgaB6h3AAQhDAAgkgdgAEGBuQgrglAAg5QAAhDAxgvQAxgvBJAAQA/AAAqAkQAqAkAAA5QAABDgwAvQgxAwhJAAQg/AAgqgkgAFKgtQgWAYAAAfQAAAbASARQARAQAdABQAhgBAWgYQAVgXAAggQAAgbgRgRQgSgQgcgBQghABgWAYgAxGCDQgmgOgVgaIAzg9QAOATAcAMQAbAMAcAAQALAAAHgEQAFgDAAgFQAAgIgVgHQgegKgRgGQhEgaAAgvQAAgpAfgdQAigfA5AAQAjgBAgAMQAhAMAXAXIgzA8QgQgQgagKQgWgIgWAAQgIgBgFAEQgFADAAAFQAAAHAWAIIAuAPQBEAcAAAuQAAAtggAdQghAdg3AAQgsAAgmgPgAP6CNIgThZIgjAAIgTBZIhWAAIA+kaICKAAQAoABAbAXQAcAYAAAnQAAAjgVAbQgTAbgeAKIAcBggAPVgVIA0AAQAPAAAIgGQAJgGAAgMQAAgJgHgGQgGgFgKAAIgzAAgAAFCNIAZhxIhCipIBaAAIAfBhIBJhhIBlAAIiPCpIgZBxgAmUCNIA+kaIBWAAIguDPIBsAAIgRBLgAp4CNIA+kaIBWAAIguDPIBsAAIgRBLgAt1CNIA+kaIDXAAIgQBMIiCAAIgGAcIB/AAIgRBIIh+AAIgHAfICBAAIgQBLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.4,-14.6,231,29.3);


(lib.t3_4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC600").s().p("AlZBoQgogjAAg1QAAhAAugrQAuguBFABQA7AAAnAhQAoAjAAA1QAAA/gtAsQguAuhFgBQg8AAgnghgAkZgqQgUAWAAAdQAAAZAQARQARAPAbAAQAfABAVgXQAUgXAAgdQAAgZgRgQQgQgQgbAAQgfAAgVAXgAIGCFIAXhqIhAifIBXAAIAdBaIBFhaIBfAAIiHCfIgXBqgADQCFIA7kJIDLAAIgQBGIh6AAIgFAbIB3AAIgQBFIh3AAIgGAcIB5AAIgPBHgABYCFIhEiJIgdCJIhRAAIA7kJIBRAAIBACCIAdiCIBRAAIg7EJgAoICFIAjifIhfCfIgkAAIgYifIgjCfIhRAAIA7kJIBtAAIASCAIBLiAIBzAAIg7EJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.7,-13.8,151.5,27.6);


(lib.t3_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai7BoQgogjAAg1QAAhAAugrQAuguBFABQA7AAAlAhQAoAjAAA1QAAA/gtAsQgsAuhFgBQg8AAgnghgAh7gqQgUAWAAAdQAAAZAQARQARAPAbAAQAfABAVgXQAUgXAAgdQAAgZgRgQQgQgQgbAAQgfAAgVAXgAFSCFIA6kJIDLAAIgQBGIh5AAIgGAbIB3AAIgQBFIh3AAIgGAcIB6AAIgQBHgADYCFIgShUIggAAIgTBUIhRAAIA7kJICCAAQAlAAAaAWQAaAXAAAkQAAAigTAZQgTAZgbAKIAaBagAC1gTIAxAAQAfAAAAgYQAAgHgHgGQgGgFgKgBIgwAAgAlqCFIAjifIhfCfIgkAAIgYifIgjCfIhRAAIA7kJIBtAAIASCAIBLiAIBzAAIg7EJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-13.8,119.9,27.6);


(lib.t3_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGIB7QgkgOgUgYIAwg5QAOASAZALQAaAMAbAAQAKAAAHgEQAEgEAAgEQABgHgVgHIgrgPQhAgZAAgsQAAgmAcgbQAhgeA1AAQAiAAAeALQAfAMAWAVIgxA4QgPgPgZgJQgVgIgUAAQgIAAgEADQgFADABAFQgBAGAVAHIAsAQQA/AZABArQgBArgeAbQgfAbgzAAQgrAAgjgOgAogB7QgjgOgVgYIAxg5QAOASAZALQAZAMAcAAQAKAAAGgEQAFgEAAgEQAAgHgUgHIgsgPQhAgZAAgsQAAglAdgcQAggeA2AAQAhAAAeALQAgAMAVAVIgxA4QgPgPgYgJQgVgIgVAAQgHAAgEADQgFADAAAFQAAAGAUAHIAsAQQBAAZAAArQAAArgfAbQgfAbgzAAQgqAAgkgOgADfCFIhFiJIgeCJIhQAAIA6kJIBUAAIBACBIAciBIBRAAIg7EJgAhPCFIA7kJIBPAAIg7EJgAi8CFIgphhIgVAXIgQBKIhRAAIA7kJIBRAAIgVBeIBWheIBoAAIiBB8IBKCNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.1,-13.7,120.2,27.6);


(lib.t3_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC600").s().p("Ai7BoQgogjAAg1QAAhAAugrQAuguBFABQA7AAAlAhQAoAjAAA1QAAA/gtAsQgsAuhFgBQg8AAgnghgAh7gqQgUAWAAAdQAAAZAQARQARAPAbAAQAfABAVgXQAUgXAAgdQAAgZgRgQQgQgQgbAAQgfAAgVAXgAFSCFIA6kJIDLAAIgQBGIh5AAIgGAbIB3AAIgQBFIh3AAIgGAcIB6AAIgQBHgADYCFIgShUIggAAIgTBUIhRAAIA7kJICCAAQAlAAAaAWQAaAXAAAkQAAAigTAZQgTAZgbAKIAaBagAC1gTIAxAAQAfAAAAgYQAAgHgHgGQgGgFgKgBIgwAAgAlqCFIAjifIhfCfIgkAAIgYifIgjCfIhRAAIA7kJIBtAAIASCAIBLiAIBzAAIg7EJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-13.8,119.9,27.6);


(lib.t2_4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC600").s().p("AGqA3QgNgFgGgKIAKgLQAOATAaAAQANAAAHgHQAGgGAAgJQAAgKgegNQgegKAAgTQABgNALgLQAMgLATAAQAeABAOASIgLALQgMgQgWAAQgLAAgHAFQgHAHAAAIQAAAIAdANQAeAKAAAUQAAAPgLALQgNALgTABQgRAAgNgHgACNAwQgQgPAAgYQAAgcATgVQAVgUAbgBQAZAAAPAOQAQAOAAAZQAAAcgUAVQgTAUgdABQgYAAgPgOgACbgfQgOARAAAWQAAATAMALQALAKARAAQAVAAAPgQQAPgRAAgXQAAgSgMgLQgLgLgSABQgVAAgPAQgAlRAvQgPgPAAgXQgBgdAVgVQATgTAdgBQAhAAAPAaIgOAHQgKgTgaAAQgVAAgPAPQgPASAAAWQAAASALALQALALATAAQARAAAOgNIAGgYIgqAAIAEgLIA3AAIgJAqQgTATgbABQgYAAgQgPgALuA8IgxhgIgVBgIgPAAIAbh3IAPAAIAwBeIAVheIAPAAIgaB3gAJuA8IAah3IAQAAIgbB3gAJLA8Igig3IgPAOIgJApIgQAAIAbh3IAPAAIgOA7IBDg7IATAAIg+A6IAoA9gAEAA8IAah3IAtAAQAPABAJAIQAKAKgBANQABAPgLAMQgMALgXAAIgiAAIgKAxgAEdAAIAfAAQAOAAAIgIQAHgHAAgLQAAgJgFgFQgHgGgIABIgeAAgAAwA8IAYhpIgmAAIADgOIBbAAIgDAOIgmAAIgYBpgAhiA8IAXhpIgmAAIADgOIBbAAIgDAOIgmAAIgXBpgAjnA8IAah3IBQAAIgDAOIhAAAIgJAmIA+AAIgDAMIg+AAIgJApIBAAAIgDAOgAoTA8IAah3IAoAAQAUAAAPAPQAPAPAAAVQAAAagSATQgVAWglABgAoCAuIAaAAQAaAAAQgQQAPgPAAgWQAAgQgKgMQgLgLgQABIgZAAgAo+A8IgwhgIgWBgIgPAAIAbh3IAPAAIAwBeIAVheIAPAAIgaB3gAqzA8IgEgbIg8AAIgRAbIgSAAIBLh3IASAAIAXB3gAq5ATIgMg+IgnA+IAzAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.1,-6.2,158.3,12.4);


(lib.t2_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBOIAFgSQgZgFgMgQIAQgSQAJANAOADIAHgcQgNgFgHgEQgKgJAAgMQAAgQANgLQAKgMAWAAIABAAIADgRIASAAIgFATQAUAFALAMIgQASQgIgIgMgEIgGAZQAPAGAIAEQAJAIABANQAAARgNAMQgNAMgVAAIgCAAIgDAQgAASAnQAIAAAEgEQAFgEAAgFQgBgGgKgFgAAIgiQgFADAAAFQAAAFALAFIAFgWQgHAAgEAEgAFMAnIASgQQALAQAVAAQAKAAAHgGQAGgFAAgIQAAgRgXAAQgLAAgLAIIgQgHIAOg+IBTAAIgGAWIg4AAIgHAcQALgHANAAQAQAAAKAJQAKAHAAAQQAAATgOAMQgPAOgVAAQgiAAgQgXgAC0A6QgEgEAAgGQAAgGAFgFQAEgFAHAAQAFAAAEAEQAFAEAAAGQAAAGgGAFQgEAFgGAAQgGAAgEgEgABYA3QgPgHgHgLIASgQQAFAJALAFQAJAEAKAAQAKAAAGgFQAGgEAAgHQAAgNgXAAIgOAAIAFgVIARAAQAXAAAAgNQAAgOgXAAQgRAAgMAKIgKgRQAQgPAZAAQAVAAANAIQANAIAAAPQAAAMgKAIQgJAIgNABQAWAEAAAVQAAAQgNAKQgOALgTAAQgRAAgOgHgAk6AvQgRgPAAgYQAAgcAUgUQAUgUAeAAQAZAAAQAOQASAPgBAYQAAAcgUAUQgTAVgeAAQgZAAgRgPgAklgYQgMANABARQAAAPAJAJQAKAJAPAAQARAAAMgNQAMgOAAgRQAAgPgKgJQgJgJgPAAQgRAAgNAOgADbA8IAGgYQArgYAOgLQAUgNAAgMQAAgGgGgEQgGgEgKAAQgRAAgMALIgLgSQAQgPAaAAQATAAAOAJQANAJAAARQABAcg/AiIAxAAIgFAXgAiCA8IgOgrIgUAAIgKArIgZAAIAbh2IAyAAQAQAAAKAJQALAJAAAPQAAARgJAJQgJAMgPACIAQAtgAifgEIAaAAQAKAAAHgFQAFgFAAgIQAAgGgEgEQgFgEgGAAIgaAAgAm3A8IAah2IBVAAIgFAWIg8AAIgFAZIA6AAIgFAVIg6AAIgLAyg");
	this.shape.setTransform(73.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC600").s().p("AIHA4QgNgHgGgJIAKgKQANASAbAAQANAAAHgHQAGgGAAgJQAAgLgegMQgegKAAgSQAAgOAMgLQANgKASAAQAegBANAUIgKAKQgMgRgXAAQgKAAgHAHQgIAGAAAHQAAAJAeANQAeALAAASQAAAQgLAKQgMAMgVAAQgQAAgNgFgAGNAyQgNgKAAgSIABgJIARhHIAPAAIgQBHIgBAHQAAAMAIAIQAIAIAPAAQAeAAAHgjIARhHIAPAAIgQBHQgGAYgLALQgNANgXAAQgWAAgMgLgAEZAvIAJgLQAHAMAQAAQAVAAAGgZIAThRIAPAAIgTBRQgIAnghgBQgXAAgKgOgAA1A4QgNgHgGgJIAKgKQANASAbAAQANAAAHgHQAGgGAAgJQAAgLgdgMQgegKAAgSQAAgOAMgLQAMgKASAAQAfgBAMAUIgKAKQgMgRgXAAQgKAAgHAHQgHAGAAAHQAAAJAeANQAdALAAASQAAAQgLAKQgMAMgVAAQgQAAgNgFgAixAwQgQgPAAgYQAAgdAVgVQAUgTAbAAQAjAAAOAcIgOAFQgLgVgZAAQgUABgPAQQgQAQAAAXQAAASALALQALALATAAQASAAAOgOIALAJQgRASgbAAQgZAAgPgNgAq4AwQgQgPAAgYQAAgcATgVQAUgVAcABQAYAAAPANQARAPAAAXQAAAdgUAUQgUAWgcgBQgYAAgPgNgAqqgfQgPARAAAWQAAATAMALQALAKASAAQAVAAAPgQQAPgRAAgWQAAgTgMgLQgLgLgSAAQgVAAgPARgAJ5A7IAYhpIgmAAIADgMIBbAAIgDAMIgmAAIgYBpgACNA7IAah1IBPAAIgDAMIhAAAIgIAoIA+AAIgDAKIg+AAIgKAqIBAAAIgDANgAAGA7IgEgbIg6AAIgRAbIgSAAIBLh1IARAAIAWB1gAgxAUIAxAAIgJg/gAkgA7IgxhgIgVBgIgPAAIAah1IAQAAIAwBeIAVheIAPAAIgbB1gAncA7IAbh1IBPAAIgDAMIhAAAIgJAoIA/AAIgDAKIg/AAIgJAqIBAAAIgDANgApFA7IAah1IAtAAQAPgBAJAKQAJAJAAAMQAAARgKALQgMAMgYAAIghAAIgKAvgAopAAIAgAAQANAAAIgHQAIgIAAgMQAAgHgGgGQgGgGgIAAIgfAAg");
	this.shape_1.setTransform(-46,0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.3,-7.8,234.7,15.7);


(lib.t2_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANCCEQgMgMAAgRQAAgUAPgOQAOgPAUAAQARAAAMANQAMAMAAARQAAAUgPAOQgOAPgUAAQgRAAgMgNgAErCBQglgOgVgZIAzg9QAOATAbAMQAbAMAcAAQALAAAGgEQAFgEAAgEQAAgHgVgIIgugQQhDgZAAgvQAAgoAfgcQAhggA5AAQAjAAAfAMQAhAMAXAWIgzA7QgRgQgYgJQgXgJgVAAQgIAAgFAEQgFADAAAEQAAAHAVAIIAvAQQBDAaAAAuQAAAtggAcQghAdg2AAQgsAAgmgPgAnkBvQgsgkAAg7QAAhEAwgtQAygvBOAAQAvAAAiAZQAcAWAMAfIhOAgQgDgOgQgKQgQgLgUAAQggAAgWAYQgXAXAAAgQAAAYARARQARASAdAAQAWAAARgMIACgLIg0AAIAQhIICJAAIgaBxQgUAbgfAPQgfAPgmAAQg9AAgpghgAKzCLIAYhrIhkAAIgYBrIhVAAIA+kWIBVAAIgWBjIBkAAIAWhjIBVAAIg+EWgAB2CLIA+kWIBVAAIg+EWgAiACLIA+kWIDSAAIgQBKIiAAAIgEAcIB7AAIgQBIIh7AAIgXBogAqeCLIA9kWIBVAAIg+EWgAvDCLIA+kWICbAAQAoAAAWAWQAUAUAAAcQAAAagTAWQgTAVgZAAQATAGALAQQAJAPAAATQAAAggWAXQgbAcgyAAgAtfBFIBDAAQALAAAHgGQAGgFAAgJQAAgHgEgFQgFgEgHAAIhDAAgAtHgkIBAAAQAUAAAAgTQAAgNgPAAIg9AAgANPAjIAbiuIBaAAIgxCug");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.4,-14.5,193,29.1);


(lib.t2_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMhB0QghgbAAgvQAAgJACgIIAlikIBVAAIgkChIgBALQABAPALALQAOALAVABQAZgBAQgOQAOgMAEgWIAlihIBVAAIgkCjQgbB4h2AAQhCABgjgdgAHdBtQgqgkAAg5QAAhCAwgvQAwguBIAAQA/AAApAjQAqAkAAA4QAABCgwAvQgwAwhIgBQg/AAgpgjgAIfgsQgUAXgBAfQAAAaASARQASAQAbABQAhAAAWgZQAVgXABgfQgBgagRgRQgRgQgcgBQgiAAgWAZgAn+BuQgrgkAAg6QAAhFAxguQAwgsBHAAQA5gBAkAeQAfAYALAnIhSAaQgDgUgQgLQgQgMgVgBQgiABgWAYQgWAXAAAfQABAZAQARQASASAcAAQARgBARgIQARgKAGgOIBDArQgYAjgmAQQgfANgjAAQg9AAgqgigA0jBuQgrgkAAg6QAAhFAxguQAwgsBHAAQA5gBAkAeQAfAYALAnIhSAaQgEgUgPgLQgPgMgXgBQghABgWAYQgVAXAAAfQgBAZASARQASASAcAAQAQgBAQgIQARgKAHgOIBCArQgXAjgnAQQgfANgiAAQg+AAgpgigATICMIgThZIgiAAIgTBZIhVAAIA9kXICJAAQAnAAAbAXQAcAZAAAlQAAAjgVAbQgTAagdALIAbBfgASjgVIA0AAQAOAAAJgGQAJgGAAgLQAAgKgHgFQgHgGgJAAIgzAAgADfCMIAZhwIhEinIBbAAIAfBfIBJhfIBjAAIiOCnIgYBwgAhXCMIAYhrIhkAAIgYBrIhVAAIA9kXIBWAAIgXBjIBlAAIAWhjIBTAAIg8EXgArxCMIAujNIhLAAIAQhKIDrAAIgRBKIhKAAIgtDNgAt6CMIgDghIhlAAIgSAhIhkAAICmkXIBqAAIApEXgAuDAhIgJhYIgvBYIA4AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-135.9,-14.5,271.9,29);


(lib.t1_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmeB8QgwgqAAhAQAAhLA3g1QA3g2BTAAQBHAAAvAoQAwAqAABAQAABMg2A1Qg3A2hTAAQhIAAgvgpgAlSgzQgYAbAAAjQAAAfAUATQAUASAgABQAmgBAZgbQAYgbAAgjQAAgfgUgTQgUgSgggBQgmABgZAbgAJuCgIAciAIhOi/IBpAAIAjBsIBThsIBxAAIihC/IgcCAgAD6CgIBHk/IDzAAIgTBVIiSAAIgHAfICPAAIgTBTIiOAAIgIAjICSAAIgTBVgABpCgIhRilIgjClIhhAAIBHk/IBiAAIBMCbIAjibIBhAAIhHE/gApwCgIAqi/IhyC/IgrAAIgdi/IgqC/IhhAAIBGk/ICDAAIAWCaIBaiaICJAAIhGE/g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.8,-16.5,181.8,33.1);


(lib.t1_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1887A7").s().p("AA7CUQgrgRgWgdIA4hFQARAWAeAOQAfANAgAAQANAAAHgEQAGgEAAgGQAAgIgYgIQgigLgTgHQhMgeAAg1QAAguAiggQAnglBAAAQAoAAAkAOQAmAOAaAZIg6BEQgTgTgdgLQgZgJgZAAQgJAAgFAEQgFADAAAGQAAAIAYAIIA1ASQBMAfAAA0QAAAzglAhQglAhg9AAQgzAAgrgRgAkFCfIgwk+IBpAAIAWDVIB0jVIBxAAIi6E+g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31,-16.5,62.1,33.1);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHWCUQgqgRgYgdIA5hFQARAWAeAOQAfANAhAAQAMAAAHgEQAGgEAAgGQAAgIgYgIQghgLgTgHQhNgeAAg1QAAguAiggQAnglBAAAQApAAAkAOQAlAOAaAZIg6BEQgTgTgcgLQgagJgZAAQgJAAgFAEQgFADAAAGQAAAIAYAIIA1ASQBMAfAAA0QAAAzglAhQglAhg9AAQgzAAgrgRgAqNCUQgrgRgYgdIA6hFQARAWAeAOQAfANAgAAQANAAAHgEQAGgEAAgGQAAgIgYgIQgigLgTgHQhMgeAAg1QAAguAiggQAnglBAAAQAoAAAkAOQAmAOAaAZIg6BEQgTgTgdgLQgZgJgZAAQgJAAgFAEQgFADAAAGQAAAIAYAIIA1ASQBMAfAAA0QAAAzglAhQglAhg9AAQgzAAgrgRgAELCfIhRikIglCkIhhAAIBHk+IBkAAIBMCbIAjibIBhAAIhHE+gAhfCfIBHk+IBfAAIhHE+gAjhCfIgyh0IgZAbIgUBZIhhAAIBHk+IBhAAIgZBxIBohxIB7AAIiZCVIBYCpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.1,-16.5,144.3,33.1);


(lib.logoMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#476A95").s().p("AExDDQgIAAgJgDQgJgCgGgEQgGgEgEgGQgDgHAAgHIAAhaQAAgGADgHQAEgGAGgEQAGgEAJgCQAHgCAKAAIBxAAQAVAAANAHQANAJAAAPIAABbQAAAIgEAHQgFAGgFADQgHAEgIABQgLADgHAAgAE3CiIBnAAIAAhaIhnAAgABSDDQgIAAgJgDQgJgCgFgEQgGgEgEgGQgEgGAAgIIAAhaQAAgIAEgEQADgGAHgEQAHgFAHgCQAJgCAJAAIBwAAQAWAAAMAHQANAIAAAQIiaAAIAABaIBnAAIAAgcIgkAAQgTAAgNgIQgNgIgCgLIAAgGICGAAIAAA9QAAAIgEAHQgDAEgHAGQgHADgIACQgLADgHAAgAjADDQgKAAgHgDQgJgBgHgEQgHgFgEgFQgEgHAAgIICbAAIAAgcIhtAAIgRgCQgJgDgGgEQgGgEgEgFQgEgHAAgIIAAgZQAAgJAEgHQAEgHAGgEQAGgEAJgCQAHgCALAAIBuAAQAXgBAMAIQAOAHAAARIiaAAIAAAdIBpAAIASACQAIACAIADQAHAFADAFQAFAGAAAIIAAAeQAAARgOAIQgNAIgWAAgAmiDDQgJAAgIgDQgJgCgGgEQgFgEgFgGQgEgHAAgHIAAhaQAAgHAEgFQAEgGAGgEQAHgFAIgCQAIgCAJAAIBxAAQAWgBAMAJQANAJAAAOQAAAKgFAEIgKAHQgGAEgJACQgJADgIAAIgFAAIAAgeIhnAAIAABaIBoAAIAAgeIAyAAIAAAeQAAAIgEAGQgDAGgGAFQgHADgIACQgLADgHAAgAgQC6IAAgvIAjAAIAAAvgAgQB1IAAguIAjAAIAAAugABHgaQgKAAgKgCQgKgEgFgDQgGgEgFgHQgEgHAAgIIAAhiQAAgHAEgGQAEgHAHgFQAHgEAIgCQAJgEAKAAIB7AAQAXABAOAIQAOAJAAASIioAAIAAAfIBqAAIAAAkIhqAAIAAAfICoAAQAAAJgEAHQgFAHgGADQgGAEgKADQgMABgIAAgAjcgaIAAioICsAAQAXABAOAIQAMAJAAASIAAAfQAAARgPAKQgRAIgcABIhTAAQAAgHACgGQABgFAEgGQAEgGAGgDQAHgDAIAAIA5AAIAAgfIhvAAIAABdQAAAYgPAIQgIAFgIABIgTABgAmdgaQgKAAgJgCQgLgEgFgDQgHgFgEgGQgEgHAAgHIAAhjQAAgHAEgHQAEgGAHgFQAHgFAJgCQAJgDAKAAIB6AAQAXABAOAIQAOAKAAAQIAABjQAAAJgEAHQgDAGgIAEQgGAFgKACQgMABgIAAgAmXg8IBwAAIAAhiIhwAAgAG7gbIgOgCIgPgGQgIgDgFgGIhShNIAABfIg3AAIAAioIAWABIAOADQAGABAIAEQAGADAIAGIBRBNIAAg9QAAgRAOgJQAPgHAWgBIAEAAIAACog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-19.5,93.1,39);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-140,-27,0.924,0.924);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140,-27,280,55.5);


(lib.btnBg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C89C06","#FED33C"],[0,1],0,18,0,-18).s().p("AoaC0QgVAAgPgPQgPgOAAgWIAzkBQAAgVAOgPQAPgPAUAAIQFAAQAUAAAPAPQAOAPAAAVIgxEBQAAAWgPAOQgOAPgVAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,-18,118,36);


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


(lib.logo = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6DA1E4").s().p("AExDDQgIAAgJgDQgJgCgGgEQgGgEgEgGQgDgHAAgHIAAhaQAAgGADgHQAEgGAGgEQAGgEAJgCQAHgCAKAAIBxAAQAVAAANAHQANAJAAAPIAABbQAAAIgEAHQgFAGgFADQgHAEgIABQgLADgHAAgAE3CiIBnAAIAAhaIhnAAgABSDDQgIAAgJgDQgJgCgFgEQgGgEgEgGQgEgGAAgIIAAhaQAAgIAEgEQADgGAHgEQAHgFAHgCQAJgCAJAAIBwAAQAWAAAMAHQANAIAAAQIiaAAIAABaIBnAAIAAgcIgkAAQgTAAgNgIQgNgIgCgLIAAgGICGAAIAAA9QAAAIgEAHQgDAEgHAGQgHADgIACQgLADgHAAgAjADDQgKAAgHgDQgJgBgHgEQgHgFgEgFQgEgHAAgIICbAAIAAgcIhtAAIgRgCQgJgDgGgEQgGgEgEgFQgEgHAAgIIAAgZQAAgJAEgHQAEgHAGgEQAGgEAJgCQAHgCALAAIBuAAQAXgBAMAIQAOAHAAARIiaAAIAAAdIBpAAIASACQAIACAIADQAHAFADAFQAFAGAAAIIAAAeQAAARgOAIQgNAIgWAAgAmiDDQgJAAgIgDQgJgCgGgEQgFgEgFgGQgEgHAAgHIAAhaQAAgHAEgFQAEgGAGgEQAHgFAIgCQAIgCAJAAIBxAAQAWgBAMAJQANAJAAAOQAAAKgFAEIgKAHQgGAEgJACQgJADgIAAIgFAAIAAgeIhnAAIAABaIBoAAIAAgeIAyAAIAAAeQAAAIgEAGQgDAGgGAFQgHADgIACQgLADgHAAgAgQC6IAAgvIAjAAIAAAvgAgQB1IAAguIAjAAIAAAugABHgaQgKAAgKgCQgKgEgFgDQgGgEgFgHQgEgHAAgIIAAhiQAAgHAEgGQAEgHAHgFQAHgEAIgCQAJgEAKAAIB7AAQAXABAOAIQAOAJAAASIioAAIAAAfIBqAAIAAAkIhqAAIAAAfICoAAQAAAJgEAHQgFAHgGADQgGAEgKADQgMABgIAAgAjcgaIAAioICsAAQAXABAOAIQAMAJAAASIAAAfQAAARgPAKQgRAIgcABIhTAAQAAgHACgGQABgFAEgGQAEgGAGgDQAHgDAIAAIA5AAIAAgfIhvAAIAABdQAAAYgPAIQgIAFgIABIgTABgAmdgaQgKAAgJgCQgLgEgFgDQgHgFgEgGQgEgHAAgHIAAhjQAAgHAEgHQAEgGAHgFQAHgFAJgCQAJgDAKAAIB6AAQAXABAOAIQAOAKAAAQIAABjQAAAJgEAHQgDAGgIAEQgGAFgKACQgMABgIAAgAmXg8IBwAAIAAhiIhwAAgAG7gbIgOgCIgPgGQgIgDgFgGIhShNIAABfIg3AAIAAioIAWABIAOADQAGABAIAEQAGADAIAGIBRBNIAAg9QAAgRAOgJQAPgHAWgBIAEAAIAACog");

	// Слой 1
	this.instance = new lib.logoMc();
	this.instance.setTransform(1.5,1);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-19.5,94.6,40);


(lib.btn = function() {
	this.initialize();

	// t4_4
	this.instance = new lib.t4_4();
	this.instance.setTransform(0.1,0);

	// btnBg
	this.instance_1 = new lib.btnBg();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,-18,118,36);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.btn();
	this.instance.setTransform(-4.5,189.5,0.01,0.014);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(10).to({scaleX:1.1,scaleY:1.1},5).wait(15).to({scaleX:1,scaleY:1},5).wait(10).to({scaleX:1.1,scaleY:1.1},5).to({scaleX:0.01,scaleY:0.01},10,cjs.Ease.get(-1)).wait(1));

	// t4_3
	this.instance_1 = new lib.t4_3();
	this.instance_1.setTransform(0,49.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:false},0).to({alpha:1},10).wait(65).to({alpha:0},10).wait(1));

	// t4_2
	this.instance_2 = new lib.t4_2();
	this.instance_2.setTransform(283,9.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(219).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(75).to({x:-284},10,cjs.Ease.get(-1)).wait(1));

	// t4_1
	this.instance_3 = new lib.t4_1();
	this.instance_3.setTransform(-285,-27.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(219).to({_off:false},0).to({x:0.1},10,cjs.Ease.get(1)).wait(75).to({x:286},10,cjs.Ease.get(-1)).wait(1));

	// t3_4
	this.instance_4 = new lib.t3_4();
	this.instance_4.setTransform(245,43.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(164).to({_off:false},0).to({x:63.9},11,cjs.Ease.get(1)).wait(34).to({x:-245.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(95));

	// t3_3
	this.instance_5 = new lib.t3_3();
	this.instance_5.setTransform(-229,23.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).to({x:-63.6},10,cjs.Ease.get(1)).wait(11).to({x:-65,y:25.4},0).wait(1).to({x:-69,y:30.2},0).wait(1).to({x:-74.2,y:36.5},0).wait(1).to({x:-78.2,y:41.5},0).wait(1).to({x:-79.6,y:43.2},0).wait(40).to({x:-389},10,cjs.Ease.get(-1)).to({_off:true},1).wait(95));

	// t3_2
	this.instance_6 = new lib.t3_2();
	this.instance_6.setTransform(230,23.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).to({x:63.6},10,cjs.Ease.get(1)).wait(11).to({y:21.9},0).wait(1).to({y:16.9},0).wait(1).to({y:10.2},0).wait(1).to({y:5},0).wait(1).to({y:3.2},0).wait(40).to({x:355.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(95));

	// t3_1
	this.instance_7 = new lib.t3_1();
	this.instance_7.setTransform(-230,3.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(164).to({_off:false},0).to({x:-63.6},11,cjs.Ease.get(1)).wait(34).to({x:228},10,cjs.Ease.get(-1)).to({_off:true},1).wait(95));

	// logo
	this.instance_8 = new lib.logo();
	this.instance_8.setTransform(-0.7,-230.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(134).to({_off:false},0).to({alpha:1},10).wait(160).to({alpha:0},10).wait(1));

	// t2_4
	this.instance_9 = new lib.t2_4();
	this.instance_9.setTransform(0,113.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).to({alpha:1},10).wait(40).to({alpha:0},10).to({_off:true},1).wait(180));

	// t2_3
	this.instance_10 = new lib.t2_3();
	this.instance_10.setTransform(0,95.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({_off:false},0).to({alpha:1},10).wait(45).to({alpha:0},10).to({_off:true},1).wait(180));

	// t2_2
	this.instance_11 = new lib.t2_2();
	this.instance_11.setTransform(-300.5,-99.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(55).to({_off:false},0).to({x:5.6},10,cjs.Ease.get(1)).wait(59).to({x:309.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(180));

	// t2_1
	this.instance_12 = new lib.t2_1();
	this.instance_12.setTransform(-306,-135.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(64).to({x:304},10,cjs.Ease.get(-1)).to({_off:true},1).wait(180));

	// img1
	this.instance_13 = new lib.img1_1();
	this.instance_13.setTransform(260.1,27,0.6,0.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:12},15,cjs.Ease.get(1)).wait(59).to({scaleX:1.2,scaleY:1.2,x:-350.4,y:-11},10,cjs.Ease.get(-1)).to({_off:true},1).wait(180));

	// t1_3
	this.instance_14 = new lib.t1_3();
	this.instance_14.setTransform(260,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:0},10,cjs.Ease.get(1)).wait(30).to({x:-260},10,cjs.Ease.get(-1)).to({_off:true},1).wait(264));

	// t1_2
	this.instance_15 = new lib.t1_2();
	this.instance_15.setTransform(-0.2,0.5,0.01,0.015);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:0.8,scaleY:0.8},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},30).to({scaleX:0.01,scaleY:0.02},10,cjs.Ease.get(-1)).to({_off:true},1).wait(264));

	// t1_1
	this.instance_16 = new lib.t1_1();
	this.instance_16.setTransform(-245,-48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:0.4},10,cjs.Ease.get(1)).wait(30).to({x:245},10,cjs.Ease.get(-1)).to({_off:true},1).wait(264));

	// bgImg
	this.instance_17 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(315));

	// bg
	this.instance_18 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(315));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-317.1,-300,668,600);


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
p.nominalBounds = new cjs.Rectangle(-17.1,299,668,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;