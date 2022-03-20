(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bottle.jpg", id:"bottle"},
		{src:"images/cloud.jpg", id:"cloud"},
		{src:"images/motroskin.jpg", id:"motroskin"},
		{src:"images/murka.jpg", id:"murka"}
	]
};



// symbols:



(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,399);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,162);


(lib.motroskin = function() {
	this.initialize(img.motroskin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,268);


(lib.murka = function() {
	this.initialize(img.murka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,333);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21639B").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.7,-35.4,221.4,70.9);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21639B").s().p("AiSEKIAAhnQAAhhBYAAQAoAAAUAWQAWAWAAAnIAAAOIg0AAIAAgHQAAgagHgLQgHgKgRAAQgRAAgIAKQgIAMAAAZIAABwQAAAbAIALQAHAKARAAQARABAHgLQAIgMAAgaIAAgQIA0AAIAAAMQAABfhTABQhXAAAAhegAH2FgIAAgxIAxAAIAAAxgAEYFgIAAkZICXAAIAAArIhhAAIAABCIBYAAIAAArIhYAAIAABXIBhAAIAAAqgAB8FgIAAjuIhCAAIAAgrIC6AAIAAArIhCAAIAADugAjzFgIAAhqQAAhEAHgdIgBAAIhODLIg5AAIAAkZIAyAAIAABqQAABFgHAeIAAAAIBOjNIA6AAIAAEZgAneFgIAAh7QgUAEgZAAQgiAAgVgVQgUgWAAgjIAAhUIA1AAIAABNQAAAqAoAAQASAAAJgCIAAh1IA2AAIAAEZgAH2EVQAAglAMgYQAHgOAQgPQAbgaAAgbQAAgagaAAQgYAAAAAgIAAAJIguAAIAAgJQAAgkAUgUQAUgSAhAAQAeAAAVAPQAWAQAAAcQAAAagEANQgGAUgWAWQgPAOgHAMQgJAOAAAQIAAAPgAMMiBQgSgXAAg1QAAhfBCAAQBBAAAABfQAAA1gSAYQgPATggABQggAAgQgVgAMekFQgJASAAApQAAAiAIARQAKAVAVgBQAVABAJgVQAIgQAAgjQAAgpgJgSQgJgRgUAAQgVAAgJARgAEhiBQgSgXAAg1QAAhfBCAAQBBAAAABfQAAA1gSAYQgPATggABQggAAgQgVgAEzkFQgJASAAApQAAAiAIARQAKAVAVgBQAVABAJgVQAIgQAAgjQAAgpgJgSQgJgRgUAAQgVAAgJARgAg3iBQgSgXAAg1QAAhfBBAAQA/AAAABfQAAA1gRAYQgQATgeABQgfAAgQgVgAglkFQgJASAAApQAAAjAIAQQAJAVAVgBQAUABAJgVQAHgQAAgjQAAgpgJgSQgIgRgTAAQgUAAgJARgAoIiBQgQgXAAg1QAAhfA6AAQAjAAANAhQAJAXAAAuIhYAAQAAAkAFANQAHATAUgBQAeAAAAgrIAaAAQAAAdgNASQgPASgbABQgeAAgOgVgAnAjcQAAg6geAAQgfAAAAA6IA9AAIAAAAgABVhyIAAgUIALAAQALABAEgNQAEgOAAgrIAAhcIBrAAIAAC1IgaAAIAAigIg4AAIAABJQAAAsgIAVQgJAZgXgBQgIAAgHgCgAK+hyIgthaIgUAaIAABAIgaAAIAAi1IAaAAIAABUIA/hUIAeAAIg4BHIA6BugAIRhyIAAhUQgRAEgXgBQgWABgMgOQgLgNAAgVIAAg1IAaAAIAAA0QAAAOAGAGQAGAGAQABIAfgCIAAhNIAaAAIAAC1gAiThyIAAigIguCgIgSAAIgtigIgBAAIAACgIgZAAIAAi1IApAAIAhB3IAGAlIABAAIAGglIAhh3IAoAAIAAC1gApVhyIgthaIgUAaIAABAIgaAAIAAi1IAaAAIAABUIA/hUIAfAAIg4BHIA6BugAsFhyIAAhnIgjAAIg2BnIgeAAIA3hrQgWgHgMgOQgNgRAAgeQAAhFBKgBIBAAAIAAD1gAtKlEQgOAKAAAZQAAAcAQAKQANAJAfAAIAXAAIAAhcIgfAAQgaAAgMAKg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.3,-36,178.6,72);


(lib.round = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#26639A").ss(3,0,0,10,true).p("AK8AAQAACljOB1QjNB0khAAQkhAAjNh0QjNh1AAilQAAikDNh0QDNh1EhAAQEhAADNB1QDOB0AACkg");
	this.shape.setTransform(0,0,0.336,0.335);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-18.1,55.4,33);


(lib.murka_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.murka();
	this.instance.setTransform(-150,-166.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-166.5,300,333);


(lib.motroskin_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.motroskin();
	this.instance.setTransform(-118,-134);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118,-134,237,268);


(lib.logo = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAeQgIgBgCgKQgBgGADgOQADgSADgEQAGgIAGACQAHABACAJQACAHgEAOQgDARgDAFQgEAHgFAAIgCgBgAABgVQgBACgCATQgEATABABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgDAEgTQADgQgBgEQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(93,11.2,3.504,3.504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAeIADgaIgGgCIgEAbIgJgBIAJg7IAHACIgCAZIAGABIAEgZIAJABIgJA7g");
	this.shape_1.setTransform(79.8,8.9,3.504,3.504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAdIAIg7IATACIgCAIIgLgBIgBARIAIABIgBAGIgHgBIgCAUIAKABIgBAIg");
	this.shape_2.setTransform(68.2,7.4,3.504,3.504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAgQgFAAgBgFQgCgEABgKIAAgIQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgBAAIgDAcIgGgBIACgcIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgCAIQAAAJgDAFQgCAFgFgBIgCgBIAAgIIACAAIACgJIACgLQABgBAFgBIAAAAIgDgDIgBgFIAAgKQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgBAAIABgHIADAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACACAAADIABAGIgBAJQAAADAEABIABAAIACgYIAHAAIgCAZIABAAQAEAAAAgDIACgJIABgGIADgFIAFgBIACABIAAAHIgBAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgCAKQgBAEgBABIgEACQAEAAABAEIAAALIABAIIABABIgBAIg");
	this.shape_3.setTransform(54.1,5.8,3.504,3.504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAdIAEg7IATACIgBAHIgLAAIAAARIAHABIAAAFIgHAAIgBAUIAKABIAAAIg");
	this.shape_4.setTransform(41,4.7,3.504,3.504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAeIACg7IAKAAQAGAAADAEQAFAFgBAKQAAAKgFADQgEAEgEgBIgCAAIgBAYgAgCgBIACAAQAAAAAAABQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAgHIAAgJQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_5.setTransform(29.8,4,3.504,3.504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAdIACg7IATABIgBAHIgKAAIAAASIAHAAIAAAGIgHgBIAAAVIAKAAIAAAIg");
	this.shape_6.setTransform(18.5,3.8,3.504,3.504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAeIAAg7IAVAAIAAAIIgMAAIAAAQIACAAQAGAAADAFQADAEAAAHQAAALgEAEQgDAEgFAAgAgCAXIACAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQABgBAAgIQAAgHgBgBQgBgBAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIgCAAg");
	this.shape_7.setTransform(7.1,3.5,3.504,3.504);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAaQgDgGAAgFIAJgBQgBADACAEQAAAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAAAgBQABAAAAgJIgBgHQgCgCgBgBIgDAAIAAgGIADAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAABAAQABgCAAgGIgBgIQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIgBAHIgJgBQAAgHAEgFQAEgEAEAAQAEAAAEAEQADADAAAIQAAAHgCADQgCAEgDAAQADABADABQADAEAAAHQAAAKgEAFQgDAEgGAAQgGAAgDgFg");
	this.shape_8.setTransform(-5.3,3.4,3.504,3.504);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAfIAAgIIADAAIAEgCIABgGIAAgBIgMgrIAKAAIAEAdIAAAAIAAgDIADgaIAJgBIgIAtQgBAKgCACQgDAEgDAAg");
	this.shape_9.setTransform(-25.4,3.9,3.504,3.504);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDgUIgHABIgBgJIAXgCIAAAJIgIABIADAyIgHABg");
	this.shape_10.setTransform(-36.4,4.3,3.504,3.504);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAXQgDgFgBgRQgCgQACgFQADgKAIAAQAGgBAFAJQADAGAAAQQACAQgCAFQgDAKgIAAIgCAAQgFAAgDgIgAgDgUQgBADABARQACARABAFIABABQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABgDgBgSQgCgQgBgFQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABg");
	this.shape_11.setTransform(-47,5.1,3.504,3.504);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDgTIgHAAIgBgJIAWgCIABAJIgIABIAFAyIgJABg");
	this.shape_12.setTransform(-59.1,6,3.504,3.504);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAcQgFgHgCgUQgDgTAEgGQADgFAGgBQADAAADADQAFAEABAHIgIACIgCgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQgCAAgBAEIABASQACARABAEIACACQABAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgFIAJAAQAAAIgDADQgDAFgFAAIgCAAQgCAAgEgDg");
	this.shape_13.setTransform(-68.5,7,3.504,3.504);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQgbIAIgBIAEAbIAAAJIAFgiIAAgEIAHgBIAJA7IgHABIgFgdIAAgJIgFAjIAAAEIgHACg");
	this.shape_14.setTransform(-81.7,8.8,3.504,3.504);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAEAFIgEABQgGACgEgGIgDgIIgEgTIAJgCIAEAVQAAADACABQAAABABABQAAAAAAAAQABAAAAAAQAAAAAAAAIACgCIgDgaIAHgBIAMA6IgJACg");
	this.shape_15.setTransform(-95.1,10.6,3.504,3.504);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C3B8D").s().p("AAAAMIADgMIgDgLIAFAAIAFALIgFAMgAgJAMIAEgMIgEgLIAFAAIAEALIgEAMg");
	this.shape_16.setTransform(24.6,47.7,3.504,3.504);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C3B8D").s().p("AgDAdIAAgwIgHAAIAAgJIAVAAIAAAJIgHAAIAAAwg");
	this.shape_17.setTransform(14.5,45.5,3.504,3.504);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C3B8D").s().p("AgHAZQgEgGAAgTQAAgUAFgFQACgDAEAAQAFAAADADQADADABAIIgIABIgBgGQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAABAAABQgBAEAAANQAAARABACQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBIABgEIAIABQgBAGgCAEQgDADgGAAQgDABgEgFg");
	this.shape_18.setTransform(4.6,45.5,3.504,3.504);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C3B8D").s().p("AgJAdIAAg5IASAAIAAAIIgJAAIAAAQIAGAAIAAAGIgGAAIAAATIAKAAIAAAIg");
	this.shape_19.setTransform(-5.5,45.5,3.504,3.504);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C3B8D").s().p("AgDAdIAAgwIgHAAIAAgJIAVAAIAAAJIgHAAIAAAwg");
	this.shape_20.setTransform(-15.7,45.5,3.504,3.504);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C3B8D").s().p("AAFAMIgFgMIAEgLIAGAAIgEALIAEAMgAgEAMIgFgMIAFgLIAEAAIgCALIACAMg");
	this.shape_21.setTransform(-25.7,47.7,3.504,3.504);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C3B8D").s().p("AADAJIACgEIADABIACgBIAAgCIgEgCIgEgBQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIAAACIgCgCIAAgBIAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIgDgCIgCABIABACIADACIgDACQgEgCAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQACgBAEACIADADIAAAEIAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQACAAAEABQAFACABACQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgCADgDAAIgGgBg");
	this.shape_22.setTransform(73.8,38,3.504,3.504);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C3B8D").s().p("AgPgBIABgDIAMAFIADADIgBgCIgJgKIgCgBIADgEIAZAPIgDADIgPgJIABADIAJAKIACABIgCAEg");
	this.shape_23.setTransform(70.6,43.6,3.504,3.504);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C3B8D").s().p("AgIgCIgCACIgEgBIAHgKIAFADIgDADIAUANIgDAEg");
	this.shape_24.setTransform(66.9,48,3.504,3.504);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C3B8D").s().p("AgMgFIADgEQADgDACAAQADAAADADQAEAEAAADQAAACgCABIAAABIAJAIIgDADgAgFgHIgBABIAGAGIABAAIAAgCIgBgDIgDgDIgBAAIgBABg");
	this.shape_25.setTransform(63.3,53.2,3.504,3.504);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C3B8D").s().p("AgOgGIAHgHIADACIgDAFIAGAGIABgDIADACIgDACIAIAHIAEgFIADADIgIAIg");
	this.shape_26.setTransform(60.3,57.1,3.504,3.504);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C3B8D").s().p("AgOgFIAKgJIATAVIgDADIgRgSIgCADIAQARIgEADg");
	this.shape_27.setTransform(55.6,61.4,3.504,3.504);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C3B8D").s().p("AAEANQgEgBgEgIQgHgHAAgEQAAgCADgCQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAAAQACAAACADIgCADIgCgCIgCAAIAAACIAGAHIAFAIQAAAAAAAAQABABAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQgBgBAAAAIgBgCIAEgDQACADAAADQAAADgDABIgEABIgBAAg");
	this.shape_28.setTransform(51.3,65.2,3.504,3.504);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C3B8D").s().p("AgNgIIAEgCIAHAKIABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIgDgGIAAgDQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIABgBIACAEQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIABAEIABADIgBACQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIAEACQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIABAAIACADIgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgHgIIgCAAIAAABIAGAMIgDADg");
	this.shape_29.setTransform(46.3,68.8,3.504,3.504);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C3B8D").s().p("AgLgJIAJgGIACAEIgFADIAEAIIADgDIACADIgEABIAFAJIAFgDIACAEIgJAFg");
	this.shape_30.setTransform(41.2,71.8,3.504,3.504);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C3B8D").s().p("AgNgKIAGgCIAKAUIAAAAIgBgCIgDgUIADgDIALAcIgDACIgIgVIAAAEIAEASIgDABIgJgSIAHATIgCABg");
	this.shape_31.setTransform(30.8,76.8,3.504,3.504);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C3B8D").s().p("AgBAMQgCgCgCgIQgDgIABgCQAAgFAEgBQADgBACAEQACACACAJQADAFAAAEQgBAFgEABIgCAAQgCAAgBgDgAgDgJQgBABAEAIIABALIACAAIABgBIgCgKQgCgIAAgCIgCAAg");
	this.shape_32.setTransform(23.8,79.2,3.504,3.504);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C3B8D").s().p("AgGgNIAFgBQACgBACABQACACACAGIgBAGQgCACgCAAIgCAAIADAMIgDABgAgBgKIABAKIAAAAIACgBIAAgFIgCgEIAAgBg");
	this.shape_33.setTransform(17.3,80.9,3.504,3.504);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C3B8D").s().p("AAAgJIgEABIgBgFIAKgBIABAEIgEAAIAEAZIgFAAg");
	this.shape_34.setTransform(11.7,81.6,3.504,3.504);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C3B8D").s().p("AgEAPIgCgdIAEAAIABANIADAAIgBgNIAEAAIACAcIgEABIgBgOIgDABIABANg");
	this.shape_35.setTransform(6.5,82.3,3.504,3.504);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C3B8D").s().p("AgEAPIAAgdIAJAAIAAAEIgFAAIAAAJIAEAAIgBACIgDAAIAAAKIAFAAIAAAEg");
	this.shape_36.setTransform(0.5,82.5,3.504,3.504);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C3B8D").s().p("AACATIABgHIgJgBIACgdIAEAAIgBAZIABABIADgZIAEAAIgCAZIACAAIgBALg");
	this.shape_37.setTransform(-5.7,83.4,3.504,3.504);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C3B8D").s().p("AgCAPQgEgBgBgEQAAgDACgHQABgIACgDQACgEADABQAEABABAFIgBAJQgCAJgCACQgDADAAAAIgCAAgAABgKIgBAKIgCAKIABABIABAAIACgLIABgJIgBgBIAAAAIgBAAg");
	this.shape_38.setTransform(-16.6,80.6,3.504,3.504);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C3B8D").s().p("AgBAPIACgNIgCgCIgEAOIgFgBIAKgdIACACIgCANIACABIAEgNIAFACIgKAbg");
	this.shape_39.setTransform(-23,78.9,3.504,3.504);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C3B8D").s().p("AgJAMIAJgbIAKAEIgBAEIgGgCIgDAIIAEABIgCACIgCgCIgDAKIADACIAAAEg");
	this.shape_40.setTransform(-28.6,77,3.504,3.504);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C3B8D").s().p("AABASQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgCABgEIACgEQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIAAAAIgEANIgFgCIAHgNIgBAAIgCAAIgGAJQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBgBIAAAAIACgEIABAAIAFgGQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIgBgCIAAgDIACgFQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgDIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAABIgBAHQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIAAABIAFgMIADACIgFAMIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIAEgGIACgCIADAAIABABIgBADIgBAAIgBABIgEAEIgCABIgBAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIgCAFIgBAEIAAABIgBADg");
	this.shape_41.setTransform(-35.2,74.1,3.504,3.504);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C3B8D").s().p("AgDARIADgGIgIgFIgEAGIgDgCIAGgKIABABIAIgJIAHgKIAJAFIgOAWIACABIgEAJgAAAgCQAAACgEADIAEADIAKgRIgCgCg");
	this.shape_42.setTransform(-43,71.8,3.504,3.504);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2C3B8D").s().p("AgMALIARgYIAEADQADACABADQAAAEgDACQgDADgDABQgEABAAgCIgBgBIgHAKgAAAAAIABABIACAAIAFgFQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBgBg");
	this.shape_43.setTransform(-47.1,66.5,3.504,3.504);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2C3B8D").s().p("AgMAIIASgWIAIAHIgDADIgEgEIgGAHIADABIgDADIgBgDIgHAIIAGAEIgDADg");
	this.shape_44.setTransform(-51.3,63.8,3.504,3.504);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2C3B8D").s().p("AgJALIgDgDIATgVIAEADQACADAAACQABACgDADIgFACIgDAAIABADQgBADgCACQgBAEgEAAQgCAAgDgDgAgGAIIAAABQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAIADgDIAAgEIAAgCIAAAAgAACAAIAAAAIADAAIACgBIACgEQAAAAABAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgBgBg");
	this.shape_45.setTransform(-56.1,59.4,3.504,3.504);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2C3B8D").s().p("AgNAKIARgQIgCgDIADgDIAJAJIgDADIgDgDIgSAQg");
	this.shape_46.setTransform(-59,55.4,3.504,3.504);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2C3B8D").s().p("AgKANIAGgEIgHgIIgFAFIgDgDIAJgFIABABIAHgDIAPgLIAHAIIgUAPIAAACIgHAGgAABgCIgHACIADAEIAQgMIgBgCg");
	this.shape_47.setTransform(-64.5,52.9,3.504,3.504);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2C3B8D").s().p("AgNAHIAYgQIADADIgYAQg");
	this.shape_48.setTransform(-66.3,47.5,3.504,3.504);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2C3B8D").s().p("AgLAJIAVgMIgCgDIgVAMIgCgEIAYgOIAHALIgZAOg");
	this.shape_49.setTransform(-69.1,43.1,3.504,3.504);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2C3B8D").s().p("AgBAGIABgFIgEADIgBgDIAEgBIgEAAIACgDIADADIAAgFIACAAIgCAFIAFgDIABADIgEAAIAEABIgCADIgEgDIABAFg");
	this.shape_50.setTransform(-69.3,36.3,3.504,3.504);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EB212E").s().p("APDEQIBfgzIBIlxIEOA2IihC/IAfD6gAzXBTIigi/IEMg4IBKFzIBdAzIkyBJgAOuCzIghgGQgzgJhDgIQhVgLhfgIIgYgCQjtgTklgCQlcgDkgAYIgYACQhNAHhIAJQhVAKg/AKIggAFQgwAIghAJIhUmyQAlgMBKgMIAhgFIAogGIASgDICMgRIBhgLIAWgCQCvgRC5gKIA9gDIAkgCIArgCICLgEQB5gDB6AEIAyACQBCACBCAFIA6AEQBNAGBOAJIAXADQA+AHA+AJIByARIATADIAoAHIAjAGQA+AMAxANIhbGyQgegIgsgIg");
	this.shape_51.setTransform(0,16.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AqoKqQiaibhGi9QBAgKBVgLQBIgIBNgHQAwBfBRBRQDGDHEXgBQEYABDGjHQBRhRAwhfQBfAIBWALQBCAIAzAJQhGC9iaCbQkaEamPAAQmMAAkckagAnNHPQhMhMguhXQEhgYFcADQEkACDuATQgvBYhLBLQi/C/kPAAQkOAAi/i/gAqoqnQEckcGMAAQGPAAEaEcQDzDzAiFLIgogHQgjk1jmjmQkQkQl9AAQj9AAjNB5QgLgGgGgGQgFAPAFAHIggAVIgmgIIgCAKQABAKALAHQg9Atg4A4QjmDngiE3IgpAGQAhlMD0j0gAp+p/QA6g6A/guIAXAIIgGAHQgrBKgwAxQgJAIACAQQAEAZAOABIAVAEQAZgBAGgGQAFgGAGAAQAmAHAUgFIAGACQAdAJARgCIAHAEIAEADQgqAfgnAnQiSCSgmC+IhiALIiLARQAjkuDhjhgAMQiFQg+gIg+gIQgoi5iOiOIgagZIgFgHIgDgGIgDhDQAEgwgFgkQgJg4gwgNIgogIIgqgEQgLAAgoAIQgqAEgQAGQgqAOgggHQgdgHgpAAIhlADIhPgKQg2gHgjAIQgpALgWgHQgSgFglAEQgpAFgngeQgEgEACgCQACgMgLgIIgMgJQDGhyD0AAQF3AAEIEKQDgDgAkEsIhzgSgAnNnMQAogoArgfIA0BVQAdAtAeAQQAFAFABAEIANA+QANAogGAtQgEAfgQANQgEACgOANQi5AKivASQAnizCLiLgAHiimQAEgKgDgMIgFgLIAFgJIAFADIACAAIAGgBIgCgJQgIgFgHgXIgKg1QgKgtADgZQAHgdgQgQIgRgOQgOgQgJgcQgEgNgBgbIAWASIgBABQgFAXARAaIAGADIAIgaIABgCIAGAGQCICHAoCuQhOgJhOgGgAElixIADgHQgBgPAOgGQAOgDgIgKIgGgHQAEgJAHAJIAshvQAHgVgHgLIgNgtIAEAAQADAAAUAeIAZAeQAYAjAJA2QAHAtgFASQgGAWgIAJQhBgFhCgCgAjZiyQgBgOALACIAFgJIgChBQABgcADgOQAFgagBgXIAAgOIAHgCQAFgBABAGQAGALAIAxQAIAwAAALQAAAkgJATQgDAHgKALIgkACgAiHi1QADgIAGACQAFAAAAgVIAAhLIAFgeIgEhNQABgHAGgCQAkgLAqALIBEAOQBCAJBYgmIAHAKQANANARAIIAAAOQgCAOAFACQAKADACgaIANADQgFAeAOgEQACgBAHgWIAHABIAAAOQABAOAJgCQAIgBAEgWQAJA3gMAxQgPA1gkAcIgDACQh5gEh5ADIiMAEIAFgFgAGZoZIAAgSIAJhRIgCg0IACAFQAOAZAAA4IgBAmQgCAXADAXIgXgTgAndr9IgGgBIATgMIADADIgHAGQgDAFgDAAIgDgBg");
	this.shape_52.setTransform(0.4,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2C3B8D").s().p("Aq+K/QiiihhIjHIAfgFQBGC9CaCbQEcEaGNAAQGOAAEakaQCaibBGi9IAhAFQhIDHiiChQklEkmaABQmcgBkikkgAneHeQhRhRgwhfIAXgCQAuBXBMBMQC/C/EPAAQEOAAC/i/QBLhLAvhYIAXACQgwBfhRBRQjGDHkXgBQkYABjGjHgAq+q+QEikkGcgBQGcABEjEkQEAEAAgFbIgigGQgilLjzjzQkakcmOAAQmNAAkcEcQj0D0ghFMIggAFQAglcEAkAgAqNqLQA4g4A9gtQgLgHgBgKIACgKIAmAIIAggVQgFgHAFgPQAGAGALAGQDNh5D+AAQF8AAEQEQQDmDmAjE1IgTgDQgkksjgjgQkIkKl2AAQj1AAjGByIAMAJQALAIgCAMQgCACAEAEQAnAeApgFQAlgEASAFQAWAHApgLQAjgIA2AHIBPAKIBlgDQApAAAdAHQAgAHAqgOQAQgGAqgEQAogIALAAIAqAEIAoAIQAwANAJA4QAFAkgEAwIADBDIADAGIAFAHIAaAZQCOCOAoC5IgWgCQgoiuiIiHIgGgGIgBACIgIAaIgGgDQgRgaAFgXIABgBIgWgSQABAbAEANQAJAcAOAQIARAOQAQAQgHAdQgDAZAKAtIAKA1QAHAXAIAFIACAJIgGABIgCAAIgFgDIgFAJIAFALQADAMgEAKIg6gEQAIgJAGgWQAFgSgHgtQgJg2gYgjIgZgeQgUgegDAAIgEAAIANAtQAHALgHAVIgsBvQgHgJgEAJIAGAHQAIAKgOADQgOAGABAPIgDAHIgzgCIADgCQAkgcAPg1QAMgxgJg3QgEAWgIABQgJACgBgOIAAgOIgHgBQgHAWgCABQgOAEAFgeIgNgDQgCAagKgDQgFgCACgOIAAgOQgRgIgNgNIgHgKQhYAmhCgJIhEgOQgqgLgkALQgGACgBAHIAEBNIgFAeIAABLQAAAVgFAAQgGgCgDAIIgFAFIgrACQAKgLADgHQAJgTAAgkQAAgLgIgwQgIgxgGgLQgBgGgFABIgHACIAAAOQABAXgFAaQgDAOgBAcIACBBIgFAJQgLgCABAOIgCAGIg8ACQAOgNAEgCQAQgNAEgfQAGgtgNgoIgNg+QgBgEgFgFQgegQgdgtIg0hVQgrAfgoAoQiLCLgnCzIgWACQAmi+CSiSQAngnAqgfIgEgDIgHgEQgRACgdgJIgGgCQgUAFgmgHQgGAAgFAGQgGAGgZABIgVgEQgOgBgEgZQgCgQAJgIQAwgxArhKIAGgHIgXgIQg/Aug6A6QjhDhgjEuIgSADQAik3DmjngAGhp8IgJBRIAAASIAXATQgDgXACgXIABgmQAAg4gOgZIgCgFIACA0gAnkr+IAGABQAGACADgGIAHgGIgDgDIgTAMg");
	this.shape_53.setTransform(0.5,0);

	this.addChild(this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140,-99.6,280,199.2);


(lib.cloud_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cloud();
	this.instance.setTransform(-144,-81);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-144,-81,289,162);


(lib.btn = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApvBuIAAgoIhGAAIAAAoIgZAAIAAhEIALAAQAHgPAGgmQAHgqAAgwIAAgCIBPAAIAACRIALAAIAABEgAqdgNQgHArgFAMIAwAAIAAh2IgeAAQAAAUgGArgAKEA2QgJgSAAgaQAAgdAIgRQAKgYAYAAQAXAAALAZQAIASAAAXIAAAHIg8AAIAAAIQAAALAEAJQAGAJAJAAQAFAAAFgFQAFgFACgHIAXAAQgDASgLAMQgLAMgQAAQgWAAgLgVgAK3gFQAAgLgEgIQgEgLgKAAQgJAAgGAKQgDAJAAALIAkAAIAAAAgACegCQAAgpACgKQAEgVAMgOQAMgNATAAQAOAAAAgIIAVAAQABAigmAAQgLAAgHAKQgHAKgBANIABAAQAKgPASAAQAUAAALAVQAJASAAAYQAAAdgKASQgMAWgXAAQgsAAgBhNgAC+gXQgIAMAAARQAAAVAIAKQAGAJAHAAQAJAAAFgIQAIgLgBgVQABgRgIgMQgGgJgIAAQgHAAgGAJgAhCA1QgIgTgBgaQABgdAJgRQALgWAYAAQATAAAKASQAHAOgBASIgUAAQgDgYgOAAQgLAAgFARQgCAKAAAOQAAArASAAQANAAAEgaIAUAAQgFAzgjAAQgUAAgLgWgAlfBAQgHgJABgRQgBgTAIgJQAFgIANgCIAYgKQAHgDAAgKQAAgQgPAAQgPAAgCAYIgVAAQAAgtAlAAQAlAAAAApIAABFQABAIAFAHIAAAFIgZAAQgDgFABgHIAAgBQgOASgPAAQgOAAgHgLgAlEAPQgEACgDAFQgDAFAAAFQAAASALAAQAWAAAAggIAAgMQgIAFgPAEgAoWA/QgMgMgCgTIAYAAQADASAPAAQAGAAAEgGQAFgFAAgIQAAgIgFgEQgDgFgHAAIgJAAIAAgWIAIAAQANAAAAgOQAAgOgOAAQgMAAgDAQIgWAAQAAgTALgLQALgKAQAAQARAAAJAIQALAJgBASQABAJgEAGQgFAKgHAAQAIAAAFAKQAFAIAAAKQAAAvgnAAQgQAAgLgMgAEtBGIAAgYIAGABQAKAAAAgUIAAhVIBKAAIAACAIgYAAIAAhmIgbAAIAAA9QAAAQgGANQgIANgOAAQgHAAgEgBgAH0BGIAAiAIAYAAIAABmIAZAAIAAhmIAXAAIAABmIAaAAIAAhmIAXAAIAACAgAGaBGIAAiAIAYAAIAAAxIARAAQAQAAAJAJQAKAJAAATQAAAVgNALQgKAKgTAAgAGyAvIAMAAQARAAAAgRQAAgSgSAAIgLAAgAEIBGIAAiAIAXAAIAACAgABMBGIAAgxIgQAAIgVAxIgaAAIAag3QgVgJgBgZQAAghAggFQAEgBAQAAIAfAAIAACAgAApgSQABALAFAFQAFACAJAAIAPAAIAAgiIgPAAQgUAAAAAQgAhwBGIAAhQIgiBQIgYAAIAAiAIAYAAIAABQIAihQIAXAAIAACAgAjsBGIAAhnIgdAAIAAgZIBSAAIAAAZIgdAAIAABngAmKBGIAAg6IgiAAIAAA6IgYAAIAAiAIAYAAIAAAxIAiAAIAAgxIAXAAIAACAgApKBGIAAiAIAXAAIAACAgAEIhJIAAgeIAXAAIAAAegApKhJIAAgeIAXAAIAAAeg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#273891").s().p("AtWDqQhhABhFhGQhEhEAAhhQAAhgBEhFQBFhEBhAAIatAAQBhAABEBEQBGBFgBBgQABBhhGBEQhEBGhhgBg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109,-23.5,218,47);


(lib.bottle_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-68,-159.6,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-159.6,136,319.2);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.btn();
	this.instance.setTransform(1.5,260.4,0.01,0.01);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(10).to({scaleX:1.1,scaleY:1.1},5).wait(10).to({scaleX:1,scaleY:1},5).wait(10).to({alpha:0},10).wait(1));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(0,-190.4,0.01,0.01);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(40).to({alpha:0},10).wait(1));

	// bottle
	this.instance_2 = new lib.bottle_1();
	this.instance_2.setTransform(-240,75);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({_off:false},0).to({x:6},10,cjs.Ease.get(1)).wait(50).to({alpha:0},10).wait(1));

	// txt
	this.instance_3 = new lib.t1();
	this.instance_3.setTransform(0,-214.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.t2();
	this.instance_4.setTransform(-3,-224.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({y:-194.5,alpha:1},10).wait(24).to({alpha:0},10).to({_off:true},1).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).to({y:-204.5,alpha:1},10).wait(25).to({alpha:0},10).to({_off:true},1).wait(70));

	// cloud
	this.instance_5 = new lib.cloud_1();
	this.instance_5.setTransform(-1,-191);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({alpha:1},5).wait(34).to({alpha:0},10).to({_off:true},1).wait(19).to({_off:false},0).to({alpha:1},5).wait(35).to({alpha:0},10).to({_off:true},1).wait(70));

	// round
	this.instance_6 = new lib.round();
	this.instance_6.setTransform(4.8,-72.4,2.064,2.064,0,0,0,2.7,-1.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).to({_off:true},1).wait(58).to({_off:false,x:-5.2},0).to({alpha:1},5).to({alpha:0},5).to({_off:true},1).wait(115));

	// round
	this.instance_7 = new lib.round();
	this.instance_7.setTransform(2,-1.9,1,1,0,0,0,2.7,-1.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).to({_off:true},1).wait(58).to({_off:false,x:-41.8,y:-6.9},0).to({alpha:1},5).to({alpha:0},5).to({_off:true},1).wait(120));

	// murka
	this.instance_8 = new lib.murka_1();
	this.instance_8.setTransform(0,133.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({_off:false},0).to({alpha:1},10).wait(50).to({alpha:0},10).to({_off:true},1).wait(70));

	// motroskin
	this.instance_9 = new lib.motroskin_1();
	this.instance_9.setTransform(-272,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-4},10,cjs.Ease.get(1)).wait(49).to({alpha:0},10).to({_off:true},1).wait(140));

	// bg
	this.instance_10 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-300,540,600);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#004D9F").ss(4,2,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,298,542,604);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;