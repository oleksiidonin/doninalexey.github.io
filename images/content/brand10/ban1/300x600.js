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
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/imgShadow.png", id:"imgShadow"},
		{src:"images/logoCapTM.png", id:"logoCapTM"},
		{src:"images/logoGap.png", id:"logoGap"}
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
p.nominalBounds = new cjs.Rectangle(0,0,193,275);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,213);


(lib.imgShadow = function() {
	this.initialize(img.imgShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,213);


(lib.logoCapTM = function() {
	this.initialize(img.logoCapTM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,25);


(lib.logoGap = function() {
	this.initialize(img.logoGap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,21);


(lib.t5 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.logoCapTM();
	this.instance.setTransform(15,-7);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#224670").s().p("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");
	this.shape.setTransform(0,0,1,1,0,0,0,2.5,0);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-138,-18.4,290,36.8);


(lib.t4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F3358").s().p("AhLBvQgPAAgBgPIAAgaIhpAAIAAApIgNAAQgPAAAAgPIAAgwIARAAQAIgOAGgcQAFgfAAgnIAAgrIBrAAIAACbIASAAIAAA/gAighBQABBIgTApIBFAAIAAiEIgzAAgAHjBKQgSAAgagFIAAgKQAAgMAPABQALACATAAQASAAAJgFQAKgIAAgRQAAgRgIgGQgHgGgQAAIgfAAQgKAAAAgJIAAgNIApAAQAPAAAGgIQAFgGABgSQgBgYgaAAQgUgBgdAFIAAgVQAagGAXAAQA3AAAAAwQAAAcgVANQAZAKAAAdQAAA4g+AAIgEAAgAEVAAIAAgkQAAhKBGAAQBGAAAABKIAAAkQAABKhGAAQhGAAAAhKgAE7hIQgKAOAAAWIAAAkQAAAyAqgBQAqAAAAgxIAAgkQAAgXgLgNQgLgOgUAAQgVAAgLAOgAgoAAIAAgkQAAhKBEAAQBFAAAABKIAAAkQAABKhFAAQhEAAAAhKgAgBhIQgLAOAAAWIAAAkQAAAyAogBQApAAAAgxIAAgkQABgXgKgNQgLgOgVAAQgVAAgIAOgAJSBGQgJAAgDgDQgDgEAAgHIAAijIAcAAIAACxgACSBGQgJAAgEgDQgDgEAAgHIAAijIBCAAQA1AAAAAuIAAAWQAAArg1AAIgmAAIAABCgACegQIAmAAQAZgBAAgWIAAgWQAAgXgZAAIgmAAgAlNBGIgTg7QgIAIgMAAIgoAAIgPAzIgeAAIA8ixIAWAAQAKAAAEAKIA5CngAllgDIgXhIIgYBIIAvAAgAnrBGQgJAAgEgDQgDgEAAgHIAAhKQgFAHgNgBIg1AAIAABSIgNAAQgIAAgEgDQgDgEAAgHIAAijIAcAAIAABJIBHAAIAAhJIAcAAIAACxg");
	this.shape.setTransform(9.3,0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.4,-11.1,121.5,22.3);


(lib.t3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F3358").s().p("AFZARIAAgiQAAhKBGAAQBGAAAABKIAAAjQAABKhGAAQhGAAAAhLgAF/g1QgKANAAAXIAAAjQAAAyAqAAQApAAAAgzIAAgiQAAgXgKgNQgLgPgUAAQgUAAgMAPgAM4BZQgPAAAAgOIAAhuIgnBGQgHANgOAAQgNAAgHgNIgnhGIAAB8IgNAAQgPAAAAgNIAAikIAcAAIA5BpQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIA4hpIAcAAIAACxgAI2BZQgVAAgOgNQgOgNAAgVIAAhUQAAgVAPgMQAOgNAaAAIA7AAIAAAJQAAAOgSAAIgoAAQgcAAAAAaIAAAcIBKAAIAAAJQAAAMgPAAIg7AAIAAAeQAAALAGAHQAGAIAKAAIBDAAIAAAJQAAAOgSAAgADVBZQgIAAgEgDQgDgEAAgIIAAiiIBCAAQA1AAAAAtIAAAXQAAArg1AAIgmAAIAABCgADiAAIAmAAQAZAAAAgUIAAgXQAAgWgZAAIgmAAgAA1BZIAAixIByAAIAAAIQAAAIgDADQgEAEgJAAIhFAAIAAAyIBNAAIAAAJQAAAMgPAAIg+AAIAAA8IBYAAIAAAJQAAAOgPAAgAhEBZQgIAAgEgDQgDgEAAgIIAAiiIByAAIAAAIQAAAPgQAAIhGAAIAACagAjaBZQgJAAgDgDQgEgEAAgIIAAiiIBCAAQA1AAAAAtIAAAXQAAArg1AAIgmAAIAABCgAjOAAIAmAAQAZAAAAgUIAAgXQAAgWgZAAIgmAAgAl6BZIAAixIBxAAIAAAIQAAAIgDADQgDAEgJAAIhGAAIAAAyIBOAAIAAAJQAAAMgPAAIg/AAIAAA8IBYAAIAAAJQAAAOgPAAgAmsBZQgPAAAAgPIAAiLIhHAAIAACaIgNAAQgIAAgDgDQgEgEAAgIIAAiiIB/AAIAACxgAq0BZIAAgKQAAgOARAAIA3AAQAOAAAAgNIAAgTQgZADgWAAQgtAAAAgqIAAhSIAcAAIAABSQAAATASAAQAcAAASgDIAAhiIAcAAIAACNQAAAkgqAAgAsTBZQgVAAgOgNQgOgNAAgVIAAhUQAAgVAOgNQAPgMAaAAIA7AAIAAAJQAAAOgSAAIgpAAQgbAAAAAaIAABPQAAALAFAHQAHAIAKAAIBCAAIAAAJQAAAOgSAAg");
	this.shape.setTransform(12.6,-4.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.2,-13.9,167.6,18.5);


(lib.t2 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F3358").s().p("AIhBZQgQAAAAgOIAAhsIg2BuQgGAMgOAAIgJAAQgPAAAAgNIAAikIAcAAIAACNIBGiNIAdAAIAACxgAFWBZQgIAAgEgDQgDgDAAgJIAAiLIg3AAIAAgXICJAAIAAAIQAAAJgDACQgDAEgKAAIgmAAIAACagADsBZIgTg8QgJAJgMAAIgnAAIgQAzIgdAAIA8ixIAVAAQALAAADAKIA5CngADTAPIgXhHIgYBHIAvAAgAAlBZQgIAAgEgDQgDgDAAgJIAAiLIg1AAIAAgXICHAAIAAAIQAAAJgDACQgDAEgKAAIgmAAIAACagAhvBZQgVAAgOgNQgOgNAAgVIAAhUQAAgVAOgMQAPgNAaAAIA7AAIAAAJQAAAOgSAAIgpAAQgbAAAAAbIAABPQAAAKAFAIQAHAHAKABIBCAAIAAAJQAAANgSAAgAkdBZIhFhbQANgKAGgMQAGgIAGgVQALgjAnAAIAPAAIAAAIQAAAIgDADQgEAEgJAAQgSAAgIAZQgIAcgNALIBFBagAl3BZQgOAAAAgPIAAiiIAcAAIAACxgAm3BZQgIAAgEgDQgDgDAAgJIAAg8IgmAAIgiBLIgfAAIAlhPQgdgGAAggIAAgTQAAgSANgMQAOgLAYAAIBHAAIAACxgAoJgrIAAANQAAAXAXgBIAsAAIAAg4IgsAAQgXgBAAAWg");
	this.shape.setTransform(7.3,-2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.5,-11.5,111.7,17.9);


(lib.t1 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F3358").s().p("AmdCGQgPgBAAgPIAAgaIhpAAIAAAqIgNAAQgPgBAAgPIAAgwIAQAAQAIgOAGgcQAGgeAAgnIAAgsIBrAAIAACbIASAAIAABAgAnxgqQAABHgSApIBFAAIAAiEIgzAAgAkQBgQgTAAgagEIAAgKQAAgNAPACQAMACASAAQATAAAIgGQAKgHAAgSQAAgRgHgHQgIgHgQAAIgfAAQgJABAAgJIAAgMIAoAAQAPAAAGgHQAGgHAAgRQAAgZgbAAQgUAAgcAEIAAgVQAZgFAXgBQA3ABAAAvQAAAdgUALQAZAKAAAfQAAA3g+AAIgEAAgAImBcQgIAAgEgCQgDgEAAgIIAAg9IgmAAIgiBLIgfAAIAlhOQgdgHAAggIAAgTQAAgSANgLQAOgMAYAAIBHAAIAACxgAHUgoIAAAOQAAAWAXAAIAsAAIAAg5IgsAAQgXAAAAAVgAFgBcQgWAAgOgMQgOgNAAgWIAAhTQAAgVAPgNQAOgNAaAAIA7AAIAAAJQAAAHgDAEQgEADgKAAIgpAAQgcAAAAAbIAABPQAAALAGAHQAGAIALAAIBCAAIAAAJQAAANgSAAgAEABcQgPAAAAgNIAAhsIg2BtQgHAMgOAAIgIAAQgQAAAAgMIAAilIAcAAIAACNIBHiNIAcAAIAACxgABcBcIgTg7QgIAJgMAAIgnAAIgPAyIgdAAIA6ixIAWAAQAFABAEADQAEACABAFIA5CmgABEASIgYhHIgXBHIAvAAgAhBBcQgIAAgEgCQgDgEAAgIIAAhLQgGAGgMAAIg1AAIAABTIgNAAQgIAAgEgCQgDgEAAgIIAAijIAcAAIAABKIBHAAIAAhKIAcAAIAACxgAllBcQgIAAgDgCQgEgEAAgIIAAijIAcAAIAACxgAC1hrQgKgKgBgQIAWAAQACAPAOAAQAPAAAAgPIAWAAQAAAQgKAKQgKAJgSAAQgQAAgKgJg");
	this.shape.setTransform(5.3,-2.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.9,-15.6,112.6,26.8);


(lib.logos = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logoGap();
	this.instance.setTransform(-45,-2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C366A").s().p("AkLCJQhwg5AAhQQAAhPBwg5QBug5CdAAQCdAABwA5QBvA5AABPQAABQhvA5QhwA5idAAQidAAhug5gAASAaQgfAHg4AVQhSAfgpAjIgDADQgDADAAADQgBAEAIADIACABQBVAaBoAAIADAAQAOAAAMgGQAQgIAMgUIAOgeQAZg5gegOQgKgFgOAAQgLAAgNADgAEHhgIgCAGQg/CRhHBUIgDAEQgCAEACACQACADANgCQBegUA5goQA7gpAAgxQAAg2hHgsQgFgCgDAAQgEAAgDAEgAiKiVQheATg6ApQg6ApAAAwQAAA3BHAsQAFACADAAQADAAADgEIAEgHQBAiSBFhSIADgEQADgEgDgCQgCgCgEAAIgJABgAgaidQgRAIgMAVQgFAIgJAWQgYA4AdAPQARAIAfgGQAfgHA5gWQBRgfApgiIAEgDQACgDAAgEQAAgEgHgCIgCgBQhZgbhlAAIgDAAQgPABgJAFg");
	this.shape.setTransform(-32.8,-11.8,0.321,0.321);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C366A").s().p("AggCLIAAkVIBBAAIAAEVg");
	this.shape_1.setTransform(44.9,-11.8,0.321,0.321);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C366A").s().p("AA8CLIAAhWIh3AAIAABWIhDAAIAAjcQAAgbAQgPQAPgPAaAAIDDAAIAAEVgAg3hJQgEAEAAAFIAAA6IB3AAIAAhIIhpAAQgGAAgEAFg");
	this.shape_2.setTransform(37.7,-11.8,0.321,0.321);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C366A").s().p("Ah+CLIAAkVIDDAAQAbAAAQAPQAPAQAAAaIAACjQAAAbgPAPQgQAPgbAAgAg7BPIBpAAQAGAAAEgFQAEgEAAgGIAAh/QAAgPgOAAIhpAAg");
	this.shape_3.setTransform(27.7,-11.8,0.321,0.321);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C366A").s().p("AA8CLIAAjLQAAgGgEgEQgEgEgGAAIhpAAIAADZIhCAAIAAkVIDDAAQAbAAAOAPQAPAPAAAbIAADcg");
	this.shape_4.setTransform(17.5,-11.8,0.321,0.321);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C366A").s().p("Ah9CLIAAkVIBCAAIAADZIBpAAQAGAAAEgEQAEgEAAgGIAAjLIBDAAIAADcQgBAbgPAPQgPAPgaAAg");
	this.shape_5.setTransform(7.4,-11.8,0.321,0.321);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C366A").s().p("AggCLIAAhhIhzi0IBPAAIBEBuIBFhuIBPAAIhzC0IAABhg");
	this.shape_6.setTransform(-2.3,-11.8,0.321,0.321);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C366A").s().p("AA8CLIAAhwIh3AAIAABwIhDAAIAAkVIBDAAIAABqIB3AAIAAhqIBCAAIAAEVg");
	this.shape_7.setTransform(-12,-11.8,0.321,0.321);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-18,91,37);


(lib.ligal = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24486F").s().p("AgkA+QgOgRAAgZQAAglAZgbQAWgYAggKIAFAJQgdAPgLAPQgUAXAAAkQAAAUAHANQAHAOAMAAQAOAAAHgOQAGgLAAgRQAAgRgFgIQgGgIgJAAQgHAAgJAEIgDgIQAMgIALAAQAQAAAMANQAMALAAAVQAAAWgOAPQgOARgXAAQgVAAgPgRg");
	this.shape.setTransform(91.9,-0.6,0.336,0.336);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24486F").s().p("AgjBMIgCgJIAcgFIAAh2IgcAAIgBgKIAngJIAMAAIAACJIAaAFIgBAJg");
	this.shape_1.setTransform(88.2,-0.6,0.336,0.336);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24486F").s().p("AgsA2QgOgVAAghQAAggAOgVQAQgZAcAAQAeAAAPAaQANAVAAAfQABAhgMAUQgPAaggAAQgdAAgPgZgAgXgvQgIASAAAdQAAAcAIATQAJAWAOAAQARAAAIgWQAHgTAAgcQAAhEggAAQgPAAgIAVg");
	this.shape_2.setTransform(83.9,-0.6,0.336,0.336);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24486F").s().p("AgsBOIAAgJQAAgZAhgeQAfgcAAgWQAAgNgGgIQgHgIgHAAQgJAAgMAFIgHAWIgJgDIAAgbQASgIATgBQAVAAANANQALALAAARQAAAcgjAaQgkAegDAMIA5AAIAFgRIAJABIAAAig");
	this.shape_3.setTransform(79.3,-0.6,0.336,0.336);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24486F").s().p("AgQAbQAIgGAFgMQAEgJAAgJIgEAAQgDgEAAgFQAAgFADgEQADgEAEAAQAGAAAEAEQADAEAAAFQAAAPgKAOQgIAPgKAGg");
	this.shape_4.setTransform(74.2,2.4,0.336,0.336);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24486F").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAFAEAAAEQAAAFgFAEQgDADgFAAQgEAAgEgDg");
	this.shape_5.setTransform(72.4,1.7,0.336,0.336);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24486F").s().p("AgkBSQgHgGAAgLIAAiMIgOAAIAAgIQAOgCAJgBQANAAABAPIAAANQAEgMAMgIQAIgHAKgBQAtAAAAAzQgBAbgRAQQgTATgYAAIgLAAIAAgJIAKAAQAMAAAMgQQAMgPAAgYQAAgWgHgIQgFgIgMAAQgJAAgJANQgLAOAAAYIAABYQgBALAOAAIAAAIQgFADgKAAQgJAAgFgEg");
	this.shape_6.setTransform(69.4,1.1,0.336,0.336);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24486F").s().p("AgcA5IAAhmIgOAAIAAgIQAOgCAJgBQANAAAAAPIAAANQAFgMAIgIQAJgHAKgBQARABAAAOQAAAFgEAEQgEADgGAAIgGgQQgLAAgJANQgJAOAAAWIAAA1g");
	this.shape_7.setTransform(65.8,0.1,0.336,0.336);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#24486F").s().p("AgpAqQgNgPAAgbQAAgZAOgQQAPgQAZAAQAaAAAOAQQAQAPgBAaQAAA6g3AAQgbAAgOgQgAgXgjQgIANgBAWQABAWAIANQAKAOANAAQAOAAAKgOQAIgNABgWQgBgWgIgNQgKgNgOAAQgNAAgKANg");
	this.shape_8.setTransform(61.9,0.1,0.336,0.336);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24486F").s().p("AgwA8QgTgYAAgkQAAgjAUgYQAYgbAnAAQATAAAOAFQATAGAAAQQAAAIgGAGQgGAFgJAAIgHgfQgRgDgHAAQg3gBAABLQAABJA3AAQAbAAARgKIAIAKQgUAOggAAQgqAAgWgbg");
	this.shape_9.setTransform(57.2,-0.8,0.336,0.336);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#24486F").s().p("AAfA1QgHgFAAgMIAAg4QAAgMgFgHQgFgHgJAAQgJAAgJAMQgKAOAAAWIAAA1IgXAAIAAhlIgOAAIAAgIQAOgDAKAAQANAAAAALIAAARQAEgMALgIQAIgIAJAAQAlAAAAArIAAAyQAAALAPAAIAAAIQgFADgLAAQgIAAgGgFg");
	this.shape_10.setTransform(50.3,0.1,0.336,0.336);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24486F").s().p("AgoAqQgOgPgBgbQAAgZAPgQQAPgQAZAAQAaAAAPAQQAOAPAAAaQAAA6g3AAQgaAAgOgQgAgWgjQgJANAAAWQAAAWAJANQAIAOAOAAQAOAAAKgOQAJgNAAgWQAAgWgJgNQgKgNgOAAQgOAAgIANg");
	this.shape_11.setTransform(45.8,0.1,0.336,0.336);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#24486F").s().p("AgDBTIAAhmIgOAAIAAgIQAOgCAIgBQANABgBAKIAABmgAgCg7QgDgFAAgFQAAgGADgDQACgEAGAAQAFAAADAEQAEAEAAAFQAAAFgEAFQgDADgFAAQgGAAgCgDg");
	this.shape_12.setTransform(42.3,-0.8,0.336,0.336);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#24486F").s().p("AgVApIAAhJIgOAAIgBgIIARgGIAKgYIAJACIAAAcIAfAAIgCAIIgdAAIAABLQAAAIAEAFQADAFAGgBQALAAAIgJIAFAHQgNAOgPAAQgeAAAAgfg");
	this.shape_13.setTransform(40.1,-0.4,0.336,0.336);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#24486F").s().p("AAUAoQgIASgTAAQgUAAgMgMQgPgOAAgbQAAgeAQgRQAOgPAYAAQAMAAAHAEIAPgEIAIADIAABaQAAALANAAIAAAIQgFADgIAAQgRAAgFgSgAgVgkQgKAOAAAaQAAArAaAAQAJAAAHgJQAIgKAAgTIAAgzQgJgGgKAAQgMAAgJAMg");
	this.shape_14.setTransform(36.7,0.1,0.336,0.336);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24486F").s().p("Agwg/IAAB+IAVAIIgCAKIgwAAIgBgKIAUgIIAAiBIgUgIIABgKIAuAAIBQCAIAAhuIgVgIIACgKIAwAAIACAKIgVAIIAACTIgOAEg");
	this.shape_15.setTransform(31.7,-0.8,0.336,0.336);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#24486F").s().p("AgUApIAAhJIgPAAIgBgIIAQgGIALgYIAJACIAAAcIAfAAIgBAIIgeAAIAABLQAAAIAEAFQADAFAGgBQAKAAAIgJIAGAHQgNAOgPAAQgdAAAAgfg");
	this.shape_16.setTransform(25.6,-0.4,0.336,0.336);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#24486F").s().p("AgcA5IAAhmIgOAAIAAgIQAOgCAJgBQANAAAAAPIAAANQAEgMAJgIQAJgHAKgBQARABAAAOQAAAFgEAEQgEADgGAAIgHgQQgKAAgJANQgJAOAAAWIAAA1g");
	this.shape_17.setTransform(22.7,0.1,0.336,0.336);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#24486F").s().p("AASBVIgCgKIAVgIIgOgmIg8AAIgOAmIAZAIIgCAKIg2AAIgCgKIAVgIIA3iTIASgEIA2CXIAVAIIgCAKgAghATIA1AAIgWhFIAAgLg");
	this.shape_18.setTransform(18,-0.9,0.336,0.336);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#24486F").s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAZAaABAiQgBAkgZAZQgZAZgkAAQgiAAgagZgAgygzQgUAVAAAeQAAAgAUAVQAUAUAeAAQAfAAAUgUQAUgVAAggQAAgegUgVQgUgVgfAAQgeAAgUAVgAgiAkQgMgOAAgWQgBgTANgPQAPgQAXAAQAQAAAOAIIAAAUIgGABIgGgPQgJgDgJAAQggAAAAAnQAAApAgAAQAIAAAKgCIAGgRIAGABIAAAVQgLAIgTAAQgYAAgOgQg");
	this.shape_19.setTransform(9.6,-0.8,0.336,0.336);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#24486F").s().p("AgkA+QgOgRAAgZQAAglAZgbQAWgYAggKIAFAJQgdAPgLAPQgUAXAAAkQAAAUAHANQAHAOAMAAQAOAAAHgOQAGgLAAgRQAAgRgFgIQgGgIgJAAQgHAAgJAEIgDgIQAMgIALAAQAQAAAMANQAMALAAAVQAAAWgOAPQgOARgXAAQgVAAgPgRg");
	this.shape_20.setTransform(4.1,-0.6,0.336,0.336);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#24486F").s().p("AgjBMIgCgJIAcgFIAAh2IgcAAIgBgKIAngJIAMAAIAACJIAaAFIgBAJg");
	this.shape_21.setTransform(0.4,-0.6,0.336,0.336);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#24486F").s().p("AgtA2QgMgVAAghQAAggANgVQAQgZAcAAQAfAAAOAaQANAVABAfQAAAhgMAUQgPAaggAAQgdAAgQgZgAgXgvQgHASAAAdQAAAcAHATQAJAWAOAAQARAAAIgWQAHgTAAgcQAAhEggAAQgOAAgJAVg");
	this.shape_22.setTransform(-3.8,-0.6,0.336,0.336);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#24486F").s().p("AgsBOIAAgJQAAgZAhgeQAfgcAAgWQAAgNgGgIQgHgIgHAAQgJAAgMAFIgHAWIgJgDIAAgbQASgIATgBQAVAAANANQALALAAARQAAAcgjAaQgkAegDAMIA5AAIAFgRIAJABIAAAig");
	this.shape_23.setTransform(-8.4,-0.6,0.336,0.336);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#24486F").s().p("AgjAGIACgLIBFAAIgCALg");
	this.shape_24.setTransform(-12.2,-0.2,0.336,0.336);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#24486F").s().p("AgtBOIAAgJQABgZAhgeQAggcAAgWQAAgNgHgIQgGgIgIAAQgJAAgLAFIgIAWIgJgDIAAgbQASgIATgBQAWAAAMANQALALAAARQAAAcgkAaQgjAegDAMIA4AAIAGgRIAJABIAAAig");
	this.shape_25.setTransform(-15.9,-0.6,0.336,0.336);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#24486F").s().p("AgtA2QgNgVAAghQAAggAOgVQAQgZAcAAQAeAAAPAaQANAVAAAfQABAhgMAUQgPAaggAAQgdAAgQgZgAgXgvQgIASAAAdQAAAcAIATQAJAWAOAAQARAAAIgWQAHgTAAgcQAAhEggAAQgPAAgIAVg");
	this.shape_26.setTransform(-20.6,-0.6,0.336,0.336);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#24486F").s().p("AgtA2QgNgVAAghQAAggAOgVQAPgZAdAAQAeAAAQAaQAMAVAAAfQAAAhgMAUQgOAaggAAQgeAAgPgZgAgXgvQgIASAAAdQAAAbAIAUQAJAWAOAAQARAAAIgWQAHgTAAgcQAAhEggAAQgPAAgIAVg");
	this.shape_27.setTransform(-25.6,-0.6,0.336,0.336);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#24486F").s().p("AgtBOIAAgJQAAgZAigeQAfgcABgWQgBgNgGgIQgHgIgHAAQgIAAgMAFIgIAWIgJgDIAAgbQASgIATgBQAWAAAMANQAMALAAARQgBAcgjAaQgkAegDAMIA5AAIAFgRIAJABIAAAig");
	this.shape_28.setTransform(-30.2,-0.6,0.336,0.336);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#24486F").s().p("AgQAbQAIgHAFgLQADgJAAgJIgDAAQgEgFAAgEQAAgFAEgEQADgEAEAAQAGAAADAEQAEAEAAAFQAAAPgKAOQgIAPgKAGg");
	this.shape_29.setTransform(-35.4,2.4,0.336,0.336);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#24486F").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAFAEAAAEQAAAFgFAEQgDADgFAAQgEAAgEgDg");
	this.shape_30.setTransform(-37.1,1.7,0.336,0.336);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#24486F").s().p("Ag6BTIgBgKIAVgIIAAiBIgWgIIACgKIByAAIAAAkIgKACIgKgcIgyAAIAABAIAcAAIAHgUIAKABIAAAtIgKABIgHgTIgcAAIAABJIAzAAIAOgkIAKACIAAAsg");
	this.shape_31.setTransform(-40.2,-0.8,0.336,0.336);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#24486F").s().p("AAVAoQgJASgTAAQgTAAgNgMQgPgOAAgbQAAgeARgRQAOgPAXAAQANAAAGAEIAPgEIAIADIAABaQAAALANAAIAAAIQgFADgIAAQgRAAgEgSgAgUgkQgLAOABAaQAAArAaAAQAJAAAGgJQAIgKAAgTIAAgzQgJgGgKAAQgLAAgJAMg");
	this.shape_32.setTransform(-46.5,0.1,0.336,0.336);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#24486F").s().p("AASBPIgdgtIAAgJQAkgMAAgPQAAgOgOAAQgKAAgHAMQgMAMAAAYIAAA3IgXAAIAAilIgOAAIAAgIQAOgDAKAAQANAAAAALIAABAIgFASQAFgMALgIQAKgJALAAQAcAAAAAWQAAAOgWAKIgVAHIAPAFIAcApQAEAFAKAAIAAAIQgHADgIAAQgPAAgIgLg");
	this.shape_33.setTransform(-50.6,-1,0.336,0.336);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#24486F").s().p("AgnAmQAAgEAEgEQADgDAFAAIAGARQAHAFAKAAQAKAAAHgFQAIgFAAgIQAAgIgKgGIgSgKQgPgHgGgEQgKgIAAgNQAAgOAMgJQAMgJARAAQAPAAAJAFQALAFAAAKQAAAFgDADQgEAEgFAAIgIgUQgGgDgKAAQgIAAgHAFQgGAEAAAGQAAANAYAKQAQAHAIAEQALAKAAAOQAAAPgMAJQgLAJgTAAQglAAAAgUg");
	this.shape_34.setTransform(-54.3,0.1,0.336,0.336);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#24486F").s().p("AAfA1QgHgFAAgMIAAg4QAAgMgFgHQgFgHgJAAQgJAAgJAMQgKAOAAAWIAAA1IgXAAIAAhlIgOAAIAAgIQAOgDAKAAQANAAAAALIAAARQAEgMALgIQAIgIAKAAQAlAAAAArIAAAyQAAALAOAAIAAAIQgFADgLAAQgIAAgGgFg");
	this.shape_35.setTransform(-58.3,0.1,0.336,0.336);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#24486F").s().p("AgDBTIAAhmIgOAAIAAgIQAOgCAHgBQAOABgBAKIAABmgAgCg7QgEgFAAgFQAAgFAEgEQACgEAFAAQAGAAADAEQAEAEAAAFQAAAFgEAFQgDADgGAAQgFAAgCgDg");
	this.shape_36.setTransform(-61.9,-0.8,0.336,0.336);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#24486F").s().p("AAeBVQgGgFAAgMIAAg+QgBgUgUAAQgIAAgIAIQgJAJgBAXIAAA9IgWAAIAAilIgOAAIAAgIQAOgDAKAAQANAAgBALIAAA7IgDAVQADgMAKgIQAJgHAJAAQApAAAAAlIAAA4QAAALAOAAIAAAIQgEADgMAAQgIAAgGgFg");
	this.shape_37.setTransform(-65.2,-1,0.336,0.336);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#24486F").s().p("AgwAAQAAgaAQgPQARgQAaAAQAPAAAKAFQAKAFAAAKQAAAFgDADQgEAEgFAAIgHgUQgIgDgHAAQgQAAgKAMQgJAMAAAVQAAAyAjAAQAPAAARgLIAFAIQgPAOgXAAQg7AAAAg6g");
	this.shape_38.setTransform(-69.1,0.1,0.336,0.336);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#24486F").s().p("AgkBSQgHgGAAgLIAAiMIgOAAIAAgIQAOgCAKgBQANAAgBAPIAAANQAFgMAMgIQAIgHAKgBQAtAAAAAzQgBAbgSAQQgRATgaAAIgKAAIAAgJIAKAAQANAAALgQQAMgPAAgYQAAgWgHgIQgFgIgMAAQgJAAgJANQgMAOAAAYIAABYQABALAOAAIAAAIQgGADgKAAQgJAAgFgEg");
	this.shape_39.setTransform(-73.3,1.1,0.336,0.336);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#24486F").s().p("AAVAoQgJASgTAAQgTAAgNgMQgPgOAAgbQAAgeAQgRQAPgPAXAAQAMAAAHAEIAOgEIAIADIAABaQAAALAOAAIAAAIQgFADgJAAQgQAAgEgSgAgUgkQgLAOAAAaQAAArAbAAQAIAAAHgJQAIgKAAgTIAAgzQgJgGgKAAQgMAAgIAMg");
	this.shape_40.setTransform(-77.3,0.1,0.336,0.336);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#24486F").s().p("Ag6A8QgVgYAAgkQAAgkAYgZQAYgZAlAAQAVAAAOAFQAUAGAAAQQAAAIgGAGQgGAFgJAAIgHgfQgQgDgLAAQgcgBgQAXQgNAUAAAgQAABJA5AAQAPAAAMgDIAAgvIgUgIIACgKIA/AAIACAKIgVAIIAAAyQgUAOghAAQgpAAgXgbg");
	this.shape_41.setTransform(-82.3,-0.8,0.336,0.336);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#24486F").s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgjAAgZgZgAgygzQgUAVAAAeQAAAgAUAVQAUAUAeAAQAfAAAUgUQAUgVAAggQAAgegUgVQgUgVgfAAQgeAAgUAVgAgiAkQgMgOAAgWQAAgTANgPQAOgQAWAAQASAAAOAIIAAAUIgGABIgHgPQgJgDgKAAQgPAAgHAKQgIAJAAAUQAAApAeAAQAKAAAJgCIAHgRIAGABIAAAVQgLAIgVAAQgXAAgOgQg");
	this.shape_42.setTransform(-90.7,-0.8,0.336,0.336);

	this.addChild(this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.6,-4,187.2,8);


(lib.imgShadow_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imgShadow();
	this.instance.setTransform(-75,-106.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-106.5,150,213);


(lib.Path_23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#1F365E"],[0.02,0.894],0,59.7,0,-59.7).s().p("AqJJTIKPw2QAngBEPgxQDTgmB6gZIqzSpg");
	this.shape.setTransform(65,59.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130,119.5);


(lib.Path_21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(53,64,137,0)","#1F365E"],[0.02,0.894],177.1,104.5,-57.1,-30.6).s().p("AqthdQEighFSguQKihbDwg+QAjB8AsDNQklBPqKBmQlFAzkMAjIlPA3g");
	this.shape.setTransform(93.7,32.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,187.4,65.4);


(lib.Path_20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(53,64,137,0)","#1F365E"],[0.02,0.894],0,32,0,-57).s().p("An8BhQBRiFAqgwQBkhxCjhAQCcg9CkAEQCqAEB3BKQCCBRAjCVQgghdhWhJQhRhEhVgTQhYgTgoAwQguA2AlB9QhlgUhNCTQgnBLgQBOIlEA0QjYAhhtAKQAxhDBeicg");
	this.shape.setTransform(65.3,32);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130.6,64);


(lib.Path_19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1F365E","rgba(255,255,255,0)"],[0.027,1],43.5,0.1,-153.9,0.1).s().p("AlcJHQiMj/Bbj0QBJjADYixQCYh/DThqQBpg1BKgbIjqF6QjMAOh4BwQgxAugSAwQgSAvASAiQghgggpgEQhSgJgqCKQgcBeAzDRQAMAwAQA8QADAOgCAAQgCAAgJgQg");
	this.shape.setTransform(43.4,60);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86.9,120);


(lib.CompoundPath = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1F365E","rgba(255,255,255,0)"],[0.027,1],-21.7,1.6,21.7,-1.7).s().p("AiCDkQgygHgPgaQgIgIgBgPQgEgeAdgjQAzhAAPgYQAdgvgQgcQARgdAfgkQA+hJBLgjQgsAlgjAoQhCBRAwAWQABgEBog3QB3g+gHAGQhLAwAcA8QAPAfAdAZQgBALguAXIgvAUQgBgBgRALQgRAKgBgBQgSgSgkgEQgggDgaAMQgnASgIAwQgIAtAYAkQACACARAHQgWAOgfAAQgMAAgNgCg");
	this.shape.setTransform(20.7,23);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,41.2,46);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bgGradient = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#86A7AC").p("EBxjA7NMjjFAAAMAAAh2ZMDjFAAAg");
	this.shape.setTransform(727.2,379.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F8F1DA","#CDCCBA","#C8CAB9","#86A7AC"],[0,0,0.475,1],0,0,0,0,0,890).s().p("EhxhA7NMAAAh2YMDjDAAAMAAAB2Yg");
	this.shape_1.setTransform(727.2,379.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,1455.4,759.8);


(lib.img2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img2();
	this.instance.setTransform(-76,-106);

	// Слой 2
	this.instance_1 = new lib.imgShadow_1();
	this.instance_1.setTransform(4,3);
	this.instance_1.alpha = 0.352;
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-77,-108,154,217);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,-108.5,164,226);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-96,-137);

	// Слой 2
	this.instance_1 = new lib.imgShadow_1();
	this.instance_1.setTransform(4,3,1.291,1.291);
	this.instance_1.alpha = 0.352;
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-77,-108,154,217);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.9,-139.5,206,288);


(lib.HRoad = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F3358").s().p("AgVBFQgSgEgNgMIgMgOQgIgNAAgNQgDgNAFgLIADgLIAOgXQARgQASgFQAJgDAOgBIASACQASAEANAMIAMAOQAEAGACATQADASgDAHQgEAOgIAKQgIAMgNAHIgJAFQgQAKgSABg");
	this.shape.setTransform(-205.2,-35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F3358").s().p("AgWBFQgSgEgNgMIgLgOQgIgMAAgOQgDgNAEgLQADgMAKgMQAHgMANgHIAJgFQAbgQAYAHIABAAIABAAIABAAQARAFAMALIALAOQAIAMAAAOQADAMgEAMIgBABQgEATgRAOIgLAJIgJAFQgQAKgSABg");
	this.shape_1.setTransform(-233.6,-17.7);

	this.instance = new lib.CompoundPath();
	this.instance.setTransform(-234,-31.7,1,1,0,0,0,20.7,23);
	this.instance.alpha = 0.621;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F3358").s().p("Aj+D2QgygHgQgaQgHgIgCgPQgDgdAcgkQA0g/AOgZQAegvgRgcQARgdAggkQBAhJBKgjIARgKQAVgLAYgGQBRgVBWAfIAvgBQAyADANAXIAUAhQAQAagMAlQgLAjgYAKQgTAIgLACIgHABQgJgPgLgMQgTgXgWgJQgxgMgiAaQgjAeADAuQABAWAIAXQAAAMgjAXQgSALgSAJIgqAaQgKAGgBgCQgQgggrgHQgmgGgeAOQgmASgJAvQgIAtAZAlQABACASAHQgWANggAAQgLAAgNgCg");
	this.shape_2.setTransform(-221.6,-33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F3358").s().p("EgpsAA/IAAh9MBTYAAAIAAB9g");
	this.shape_3.setTransform(0,126.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArh0IBMgWQgXAkgzBkQgvBegZAmIhbAJQB1i7AshEg");
	this.shape_4.setTransform(-53.1,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhoBqIB4jHIAegyIBagNQgUAihFB+QhBB9gLASIhqAKg");
	this.shape_5.setTransform(-83.9,70.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah4gUIApgHQAYgEBagJQBbgJAZgFQgEANgIAUIgMAfIkVAtQAMghASgqg");
	this.shape_6.setTransform(-48.3,-33.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhmgNQApgICzggIgCA2Qi7AsguAJgAB0ABIAAgBIAAABIAAAAg");
	this.shape_7.setTransform(10.7,-43.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAEAOQg5gLgdARIAAgnQBkgZBBA5IAAABIgBAAIgZAOQgYgJgdgFg");
	this.shape_8.setTransform(51.5,-103.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag7AdQAfgqA8hCIBEgEQgaAdgfAwIgyBQIhcAJIAog2g");
	this.shape_9.setTransform(-2,-74.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhqA5QBhgaAphEQAWgkACgeIAaAZQAQAQAJALQgeA6gVAUQgvArhxAiQADgBgFgug");
	this.shape_10.setTransform(63,-64.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhtAQQAVgcAFgJQAkgJBHgKIBugOQgEAKgPAaQgOAVgFAOQgmAEhiASIheAQQAFgJAUgeg");
	this.shape_11.setTransform(-111.2,-24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhlBpQAMgUAyhPQAwhLAVglIBIADQgVAjgzBKQg0BPgNAWg");
	this.shape_12.setTransform(-186,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgegiIgDgLIALgmQADAVATAeIAiAuQgLAfgBAoQgmg1gOhCg");
	this.shape_13.setTransform(-254.5,50);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgogDQBCgVAPgHQgYA2gFACIg0AHIAAgjg");
	this.shape_14.setTransform(-196.6,-17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVADIAngQIAEAMIgjAPg");
	this.shape_15.setTransform(-212.9,-12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAFIAkgUIAJAKIglAVg");
	this.shape_16.setTransform(-225.5,-5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAQQAXgSAYgVIAKAJIgtAmg");
	this.shape_17.setTransform(-239.7,4.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAHgdIATADQgRAagJAbIgZACQAPgdARgdg");
	this.shape_18.setTransform(-253.1,20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiUA/IAEgpQAgAEAwgIQAsgJAUgJQAcgPAbgYIAfgfIA/ALQgkBBhYAuQgtATg2AAQgjAAgngIg");
	this.shape_19.setTransform(-222.2,61);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2ABQBRh4AcgtIBvgEQgdAuhTB5QhUB6gcAsIhrAEQAdguBSh6g");
	this.shape_20.setTransform(-153.3,-33.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AifCsQAwhCBQiTQBLiQADgEIBxgBQgSAijXFbg");
	this.shape_21.setTransform(-119.2,-91.7);

	this.instance_1 = new lib.Path_19();
	this.instance_1.setTransform(-221.1,20.9,1,1,0,0,0,43.5,60);
	this.instance_1.alpha = 0.621;

	this.instance_2 = new lib.Path_20();
	this.instance_2.setTransform(20.5,-83.4,1,1,0,0,0,65.2,32);
	this.instance_2.alpha = 0.621;

	this.instance_3 = new lib.Path_21();
	this.instance_3.setTransform(-49.8,-32,1,1,0,0,0,93.7,32.6);
	this.instance_3.alpha = 0.621;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1F3358").s().p("AuYC8QFygsGKg5IBMgLIhfAKQAyhDBdiaQBPiGArgwQDAjaDig3QDFgvDmBMQBrAjBCBqQA/BlABB/QABCFhFBsQhMB6iRA9QjGBTr8CDQl/BClXAwIluAxgALDkhQhpARhLCGQgYAqgRAxQgIAVgEAPQDZgpA7gcQA1gZAWgoQATgkgLglQgLgkghgVQgbgQggAAQgLAAgMACg");
	this.shape_22.setTransform(-26.5,-60.2);

	this.instance_4 = new lib.Path_23();
	this.instance_4.setTransform(-63.9,37.7,1,1,0,0,0,65,59.7);
	this.instance_4.alpha = 0.621;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1F3358").s().p("AqIJTIKOw2QAagBEag3QEag3A1gCIqzSpg");
	this.shape_23.setTransform(-63.6,37.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1F3358").s().p("AkYGbIAAs1IEnAAQCEAABGBCQBAA8AABoIAAFsQAABmhBA8QhHBBiCAAgAjDFVIDSAAQBUAAAxgqQAxgqAAhJIAAlsQAAhPgwgpQgvgphXAAIjSAAg");
	this.shape_24.setTransform(238.8,54.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1F3358").s().p("AD4GbIhfkjQgNAUgTALQgUANgWAAIj2AAIhOD3IhaAAIEUs1IBVAAQAMAAAOALQANAKAEAMIELMUgAiQBcIEgAAIiQm8g");
	this.shape_25.setTransform(167,54.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1F3358").s().p("AjrFPQhNhYABipIAAibQgBipBNhYQBPhbCcAAQCcAABQBbQBMBYABCpIAACcQgBCohMBYQhQBbicAAQicAAhPhbgAizkQQgzBFAFB+IAACcQAACOA5BCQA2BAByAAQByAAA4hAQA5hCAAiPIAAicQADh9gxhFQg5hOh8AAQh6AAg5BOg");
	this.shape_26.setTransform(96.5,54.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1F3358").s().p("AC/GbIioluIjbAAIAAFuIgmAAQgaAAgLgMQgLgMAAgbIAAsCIE9AAQBxAAA5AyQA0AuAABRIAABaQAABBghAvQgnA0hLAQICtF2gAjEgYIDnAAQBDAAAiggQAjghAAhAIAAg/QAAg8gfgeQghghhIAAIjnAAg");
	this.shape_27.setTransform(28.1,54.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1F3358").s().p("AsxRMQhMgtgnhHQiMkABgj1QBMjDDei0QCfh+DYhrQBmgzBJgcIH1tIQAagBEZgxQEbgxA1gCIxDchIgBgBQkPG5kVAYIgfACQhXAAhLgugAlmCrQjPAOh6B1QgyAwgQAyQgQAyAXAgQAxBFBhg3QBGgoAjgzQAKgQDdlvg");
	this.shape_28.setTransform(-165.3,-18.4);

	this.addChild(this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.instance_4,this.shape_22,this.instance_3,this.instance_2,this.instance_1,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-266.9,-133,533.8,266.1);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t5
	this.instance = new lib.t5();
	this.instance.setTransform(-300,246);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).to({x:1},10,cjs.Ease.get(1)).to({x:-7},5).wait(95).to({x:289},10,cjs.Ease.get(-1)).wait(1));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.setTransform(-274.6,-31.8,1.311,1.311);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({x:-58.8},10,cjs.Ease.get(1)).to({x:-69.8},5).wait(110).to({x:-280.6},10,cjs.Ease.get(-1)).wait(1));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.setTransform(-249.4,-66.3,1.311,1.311,0,0,0,0,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({x:-33.7},10,cjs.Ease.get(1)).to({x:-44.7},5).wait(120).to({x:-255.4},10,cjs.Ease.get(-1)).wait(1));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.setTransform(-280.4,-106.9,1.311,1.311,0,0,0,0,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({x:-64.7},10,cjs.Ease.get(1)).to({x:-75.7},5).wait(130).to({x:-286.4},10,cjs.Ease.get(-1)).wait(1));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.setTransform(-277.4,-145.5,1.311,1.311,0,0,0,-0.1,-0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({x:-61.6},10,cjs.Ease.get(1)).to({x:-72.6},5).wait(140).to({x:-283.4},10,cjs.Ease.get(-1)).wait(1));

	// HRoad
	this.instance_5 = new lib.HRoad();
	this.instance_5.setTransform(-69.2,-218.1,0.01,0.01);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).wait(1).to({scaleX:0.02,scaleY:0.02},0).wait(1).to({scaleX:0.03,scaleY:0.03},0).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(1).to({scaleX:0.09,scaleY:0.09},0).wait(1).to({scaleX:0.13,scaleY:0.13},0).wait(1).to({scaleX:0.18,scaleY:0.18},0).wait(1).to({scaleX:0.21,scaleY:0.21},0).wait(1).to({scaleX:0.24,scaleY:0.24},0).wait(1).to({scaleX:0.26,scaleY:0.26},0).wait(1).to({scaleX:0.26,scaleY:0.26},0).wait(160).to({x:-280},10,cjs.Ease.get(-1)).wait(1));

	// img
	this.instance_6 = new lib.img2_1();
	this.instance_6.setTransform(-227,107,0.892,0.892);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({x:-71},10,cjs.Ease.get(1)).wait(179).to({x:224},10,cjs.Ease.get(-1)).wait(1));

	// img
	this.instance_7 = new lib.img1_1();
	this.instance_7.setTransform(-254,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-2},10,cjs.Ease.get(1)).wait(21).to({regX:4,regY:3,scaleX:0.99,scaleY:0.99,x:4,y:90.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:9.7,y:92},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:18.4,y:94.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:29.4,y:97.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:41.1,y:100.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:52.4,y:103},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:62.2,y:105.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:69.6,y:107.5},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:74.2,y:108.7},0).wait(1).to({regX:0,regY:0,scaleX:0.69,scaleY:0.69,x:73,y:107},0).wait(189).to({x:368},10,cjs.Ease.get(-1)).wait(1));

	// bgGradient
	this.instance_8 = new lib.bgGradient();
	this.instance_8.setTransform(0,108,0.036,0.05,0,0,0,727.9,380.1);
	this.instance_8.alpha = 0.5;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({_off:false},0).wait(1).to({regX:727.2,regY:379.4,scaleX:0.04,scaleY:0.06,y:107.9},0).wait(1).to({scaleX:0.05,scaleY:0.07},0).wait(1).to({scaleX:0.07,scaleY:0.1},0).wait(1).to({scaleX:0.1,scaleY:0.13},0).wait(1).to({scaleX:0.12,scaleY:0.17},0).wait(1).to({scaleX:0.15,scaleY:0.21,y:107.8},0).wait(1).to({scaleX:0.17,scaleY:0.24,x:-0.1},0).wait(1).to({scaleX:0.19,scaleY:0.26},0).wait(1).to({scaleX:0.2,scaleY:0.27},0).wait(1).to({scaleX:0.2,scaleY:0.28,x:0,y:108},0).wait(189).to({x:295},10,cjs.Ease.get(-1)).wait(1));

	// logos
	this.instance_9 = new lib.logos();
	this.instance_9.setTransform(97,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(240));

	// ligal
	this.instance_10 = new lib.ligal();
	this.instance_10.setTransform(43.6,290.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(240));

	// bgImg
	this.instance_11 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.9,-300,501.9,600);


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
p.nominalBounds = new cjs.Rectangle(-51.9,299,502.9,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;