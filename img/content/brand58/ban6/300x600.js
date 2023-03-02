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
		{src:"images/logoSmall.png", id:"logoSmall"},
		{src:"images/number.png", id:"number"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logoSmall = function() {
	this.initialize(img.logoSmall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.number = function() {
	this.initialize(img.number);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,31);


(lib.vodafone = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAbQgGgIAAgLIAAgoIAKAAIAAAoQAAAIAEAFQAEADAHAAQAEAAADgCQAHgDABgCIAAgxIAKAAIAAA/IgJAAIAAgFIgJAFQgEABgEAAQgMAAgGgFg");
	this.shape.setTransform(39.7,9.6,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAeQgEgCgFgFQgDgEgCgHIgCgMIACgLQABgGAEgFQADgEAGgDQAGgDAFAAQAHAAAFADQAGADADAEQAEAFABAGIACALIgCAMQgBAGgEAFQgDAEgGADQgFADgHAAQgFAAgGgDgAgHgWIgGAGIgDAIIgBAIIABAJIADAIIAGAGQAEACADAAQAEAAAEgCQAEgCACgEIADgIIABgJIgBgIIgDgIQgCgDgEgDQgEgCgEAAQgDAAgEACg");
	this.shape_1.setTransform(31,9.5,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAkIANgCIAFgDIAFgFIADgFIgZhBIAMAAIARA2QAGgKAEgOIAJgeIAKAAIgRAxIgLAXIgFAJQgDAEgHABQgGADgJAAg");
	this.shape_2.setTransform(22.7,11.2,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAeQgGgDgDgEQgEgGgBgFIgCgMIACgLQABgFAEgGQAEgEAFgDQAGgDAFAAQAHAAAFADQAGADADAEQACADADAIIACALIgCAMQgCAHgDAEQgDAEgGADQgFADgHAAQgFAAgGgDgAgHgWIgGAGIgDAIIgBAIIABAJIADAIQADAEADACQAEACADAAQAEAAAEgCIAGgGIADgIIABgJIgBgIIgDgIIgGgGQgEgCgEAAQgDAAgEACg");
	this.shape_3.setTransform(11.3,9.5,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAmQgEgEAAgIIAAgoIgKAAIAAgIIAKAAIAAgSIAIAAIAAASIAQAAIAAAIIgQAAIAAAnQAAAFABABIAFACQAFAAAEgEIADAIIgGADIgIABQgFAAgDgDg");
	this.shape_4.setTransform(4.5,8.4,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAhIAAg/IAJAAIABAGIAFgFQAEgDAFAAIAFABIgBAKIgFgBQgDAAgFADIgFAFIAAAvg");
	this.shape_5.setTransform(-3.2,9.4,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAZQgIgJAAgQQAAgHACgGQADgHADgDQADgFAFgCQAGgCAEAAQAFAAAGACQAGADADAEQADAEACAHQACAIAAAEIgrAAQAAALAFAHQAFAHAJAAQAGAAAEgCIAIgFIADAIIgEADIgFACIgGACIgHAAQgLAAgJgIgAgJgUQgEADgCAKIAeAAQAAgFgBgDIgEgFIgFgDIgFgBQgFAAgEAEg");
	this.shape_6.setTransform(-10.5,9.5,1.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOAgIgOgtIgNAtIgJAAIgTg/IALAAIANAwIAQgwIAEAAIAPAwIANgwIALAAIgTA/g");
	this.shape_7.setTransform(-20.1,9.5,1.3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAeQgFgDgEgEQgDgEgDgHQgBgGAAgGQAAgFABgGQADgHADgEQAFgFAEgCQAGgDAFAAQAHAAAFADQAGADADAEQADAGACAFQACAGAAAFQAAAGgCAGQgBAFgEAGQgDAEgGADQgFADgHAAQgFAAgGgDgAgHgWQgDADgCADQgDAEgBAEIgCAIQABAEABAFQABAEADAEQACADADADQADACAEAAQAFAAACgCQAFgCACgEIADgIIABgJIgBgIIgDgIQgCgDgFgDQgCgCgFAAQgEAAgDACg");
	this.shape_8.setTransform(-29.8,9.5,1.3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAtIAAhYIAbAAQANAAAHAGQAIAIgBANQABANgIAFQgIAGgMABIgQAAIAAAkgAgQAAIAQAAQAGAAAGgDQAEgEAAgJQAAgKgEgEQgFgEgHAAIgQAAg");
	this.shape_9.setTransform(-38,7.8,1.3,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAgQgGgCgFgEQgEgEgCgHQgDgHAAgIQAAgGADgHQACgHAEgEQAEgEAHgDQAGgCAEAAQAOAAAIAKQAJAJAAASIgnAAQABAHADADQAEADAEAAQAHAAADgCIAHgGIAHAQIgEADIgFADIgIACIgKABQgDAAgIgCgAgFgPQgCADAAAGIAQAAQAAgFgCgEQgDgDgEAAQgCAAgDADg");
	this.shape_10.setTransform(25.3,-9.5,1.3,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJAiIAAgmQAAgEgCgEQgDgDgEAAIgDABIgEADIAAAtIgXAAIAAhBIAUAAIABAGIAHgFQAEgCAGAAQAJAAAIAGQAGAGAAAOIAAAog");
	this.shape_11.setTransform(15.8,-9.6,1.3,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAgQgHgDgDgFQgFgEgCgHQgDgHABgGQgBgFADgIQACgGAFgEQADgFAHgDQAGgCAGAAQAHAAAGACQAGADAFAFQAFAFACAFQABAGAAAHQAAAHgBAGQgCAGgFAFQgFAFgGADQgGACgHAAQgGAAgGgCgAgGgLQgDAFAAAGQAAAIADAEQADAFADAAQAGAAABgFQAEgFAAgHQAAgHgEgEQgBgFgGAAQgDAAgDAFg");
	this.shape_12.setTransform(6,-9.5,1.3,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAtIAAgwIgJAAIAAgQIAJAAIAAgCQAAgLAGgGQAHgGAIAAIALABIAIACIgDAPIgEgBIgFgBQgIAAAAAIIAAABIANAAIAAAQIgNAAIAAAwg");
	this.shape_13.setTransform(-1.3,-11.1,1.3,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAhIgFgEQgDgDgCgDQgBgEgBgFQAAgFACgEQACgDADgCIAHgCIAJgDIALgCIAAgCQAAgHgGAAIgIABIgHAEIgGgPIADgCIAHgCIANgDQALAAAJAGQAGAHABANIAAAoIgUAAIgBgFIgHAFQgCABgGAAgAAAAFIgFACQgCADAAADQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQABACADAAIADgBIADgCIAAgLIgDAAg");
	this.shape_14.setTransform(-9.3,-9.5,1.3,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOArQgFgDgEgFQgCgDgDgIIgCgOIACgLQACgGAEgFQAEgFAFgCQAFgDAHAAIAEAAIAGACIAAgYIAWAAIAABYIgTAAIgBgFIgGAEQgFACgDAAQgGAAgFgCgAgBgDIgEADIgCAEIgBAGQAAAKADADQADAFADAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAgBIAAgbIgDgBIgEgBQgCAAgBACg");
	this.shape_15.setTransform(-18.4,-10.9,1.3,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAgQgGgDgEgFQgEgEgCgHQgDgHAAgGQAAgFADgIQACgGAEgEQAEgFAGgDQAIgCAFAAQAHAAAHACQAGADAEAFQAEAEACAGQADAGAAAHQAAAHgDAGQgCAHgEAEQgEAFgGADQgHACgHAAQgFAAgIgCgAgHgLQgCAFAAAGQAAAGACAGQAEAFADAAQAFAAADgFQADgGgBgGQAAgHgCgEQgDgFgFAAQgDAAgEAFg");
	this.shape_16.setTransform(-27.8,-9.5,1.3,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAtIgihYIAaAAIAQA3IATg3IAYAAIghBYg");
	this.shape_17.setTransform(-37.4,-11,1.3,1.3);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-17,86.1,34.1);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAhQgFgBgFgFQgFgGgCgFQgDgHAAgJQAAgIADgHQACgGAFgFQADgEAHgDQAEgCAEAAQAGAAAEACIAHADIAFAFIADAFIgHAFIgHgIQgEgDgGAAQgDAAgDACIgGAFIgEAJQgCAFAAAFQAAAGACAFQABAFADAEIAHAFQACACAEAAQAFAAAGgCIAIgGIADAJQgDADgHADIgNACQgDAAgGgDg");
	this.shape.setTransform(44.6,0.9,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAvIAAhDIAJAAIAABDgAgDgiQgDgCAAgDQAAgDADgDQABgBACAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQADADAAADQAAADgDACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgBgCg");
	this.shape_1.setTransform(38.5,-0.8,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAiIgDgwIgTAwIgEAAIgSgxIgDAxIgJAAIAEhDIALAAIARAyIASgyIALAAIAEBDg");
	this.shape_2.setTransform(31.2,0.9,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAzIA3hqIAIAFIg3Bqg");
	this.shape_3.setTransform(22.7,-1.6,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAiIAAgfIgfAAIAAAfIgKAAIAAhDIAKAAIAAAdIAfAAIAAgdIAKAAIAABDg");
	this.shape_4.setTransform(13.6,0.9,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAxIAAhfIAKAAIABAFIAJgFQAEgBAEgBQAHAAAFADQAEACAFAGQADAFABAHIACANQAAAIgDAFQgCAHgFAFQgFAFgFADQgHACgEAAQgHAAgGgCIAAAcgAgJglIgHAGIAAAqIAEACIAHABQAFAAADgCQAEgBADgFQAEgDABgDQACgHAAgFIgBgKIgDgIQgCgEgEgCQgDgCgEgBQgFAAgEACg");
	this.shape_5.setTransform(4.5,2.5,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAiIAAhDIApAAIAAAJIgeAAIAAA6g");
	this.shape_6.setTransform(-3.3,0.9,1.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAwIgIgDIgHgDIgEgDIAEgKIAKAHQAGACAIAAIAFgBQAEgBADgDQACgBADgFQABgEAAgGQAAgKgHgGQgFgEgLAAIgJAAIgGABIAAgtIAuAAIAAAKIgjAAIAAAZIADgBIADAAQAPAAAIAIQAJAHAAAPQAAAHgCAHQgCAEgFAGQgFAEgFABQgFACgFAAIgJAAg");
	this.shape_7.setTransform(-15.5,-0.8,1.3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAuQgGgCgFgFIAEgKQAFAFAGACQAEACAJAAIAFgBQADgBADgCIAFgGQABgFABgFQgBgGgBgEQgCgDgDgDQgEgCgDAAIgHAAIgKAAIAAgIIANgPIAMgOIgmAAIAAgKIAzAAIAAALIgIAGIgRAVIAAAAIALACQAFABAEAEQAFACABAFQADAGAAAGQAAAHgDAGQgBAFgGAFQgDAEgGACQgGACgEAAQgLAAgGgCg");
	this.shape_8.setTransform(-24.6,-0.8,1.3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAiIgHgEIgFgHQgCgDABgGQgBgIAEgEQAEgDAFgDQAHgDAFgBIANgBIAAgBQAAgJgDgDQgEgEgGAAQgEAAgEACIgJAFIgEgIIAJgFQAHgDAGAAQAKAAAHAGQAFAGAAAOIAAArIgJAAIgBgGQgCADgGADQgDACgFAAIgIgCgAgDABIgIAFQgCADAAAFIABAGIADAEIAFACIAEABIAHgCIAHgFIAAgUg");
	this.shape_9.setTransform(-36.8,0.9,1.3,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAjIgHgDIgGgDIgDgEIAFgIIAIAHIAGACIAFABQAHAAAEgDQAEgDAAgGQAAgGgDgCQgCgDgHgBIgIAAIAAgHIAHAAQAHgBACgDQACgDAAgFQAAgGgDgCQgFgCgFAAQgFAAgEADQgEADgDAGIgIgFIAFgGIAFgFIAHgEIAIgBQALAAAGAFQAFAFAAAIQAAAHgDAEQgDAEgGACQAHAAADADQAEAEAAAHQAAAKgHAGQgHAGgLAAg");
	this.shape_10.setTransform(-44.8,0.9,1.3,1.3);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.1,-8.9,96.3,17.8);


(lib.t1_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3A4IAKgBIALgCQAFgBAGgDQAGgDACgEIAEgGIgyh3IAhAAIAgBbIAHgSIAUhJIAfAAQgKAmgKAdQgKAcgLAVIgJASQgGAKgGAGQgHAHgOAFQgLAEgVABg");
	this.shape.setTransform(57.6,3,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA8BJIAAgbIiUAAIAAh2IAeAAIAABdIAnAAIAAhdIAcAAIAABdIAmAAIAAhdIAfAAIAABcIALAAIAAA1g");
	this.shape_1.setTransform(37.7,1.6,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1A8IAAh3IAfAAIAAAfIAbAAQAYAAAMAMQANAMAAASQAAANgEAIQgEAIgHAGQgHAFgJADQgKADgKAAgAgWAkIAWAAQALAAAFgGQAFgGAAgKQAAgJgFgFQgEgEgMAAIgWAAg");
	this.shape_2.setTransform(16.6,-0.1,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbA8IAAhdIgdAAIAAAoQgBANgCAIQgEAPgJAIQgJAJgSAAIgMAAIAAgbIAHAAQAEAAAFgCQAFgCABgIQADgKAAgjIAAgjIBaAAIAAB3g");
	this.shape_3.setTransform(-1.3,-0.1,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA5QgLgGgHgIQgGgJgEgMQgEgMAAgKQAAgKAEgMQAEgLAGgJQAHgJALgFQAMgGAMAAQAOAAALAGQALAFAHAJQAHAIAEAMQADALAAALQAAAMgDAKQgEAMgHAJQgGAIgMAGQgMAGgNAAQgMAAgMgGgAgKghQgGAEgDAEQgDAGgCAGQgCAJAAAEIACANQABAGAEAGQAEAFAFADQAFADAFAAQAHAAAEgDQAGgDADgFQAEgFABgHQACgGAAgHQAAgGgCgHQgBgHgEgFQgDgEgGgEQgDgCgIAAQgGAAgEACg");
	this.shape_4.setTransform(-16.6,-0.1,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBTIAAiHIg7AAIAACHIgfAAIAAilIB5AAIAAClg");
	this.shape_5.setTransform(-34.7,-3.1,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4A4IALgBIALgCIALgEQAFgDADgEIACgCIABgEIgxh3IAhAAIAgBbIAHgSIAUhJIAfAAQgHAcgNAnQgNAigIAPIgKASQgGALgFAFQgIAHgNAFQgMAEgUABg");
	this.shape_6.setTransform(-57.6,3,1.3,1.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.7,-13.9,131.4,27.9);


(lib.t1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWA8IAAg/IgsAsIAAATIgeAAIAAh3IAeAAIAABAIAsgsIAAgUIAgAAIAAB3g");
	this.shape.setTransform(45,1.3,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASA8IgbgvIgPAAIAAAvIgfAAIAAh3IAfAAIAAAuIAHAAQADAAADgDIAFgHIAEgIIACgHQAEgMAGgEQAHgFALAAIATAAIAAAaIgKAAQgGAAgCADQgDACgDAGQgHAPgDAEIArA/g");
	this.shape_1.setTransform(29.4,1.3,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWA8IAAgxIgrAAIAAAxIgfAAIAAh3IAfAAIAAAuIArAAIAAguIAfAAIAAB3g");
	this.shape_2.setTransform(11.9,1.3,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBTIAAh3IAdAAIAAB3gAgMg0QgFgGAAgHQAAgFAFgGQAEgGAIAAQAJAAAFAGQAEAFAAAGQAAAHgEAGQgFAFgJAAQgIAAgEgFg");
	this.shape_3.setTransform(-0.2,-1.7,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0A8IAAh3IA8AAQASAAALAJQAKAIAAAPQAAARgMAIQAJACAEAGQAFAGAAALQAAAMgEAGQgFAHgGAEQgHAEgGACIgPACgAgWAkIAeAAQAFAAAFgEQADgDAAgGQAAgMgNAAIgeAAgAgWgLIAZAAQAJAAACgEQACgEABgFQgBgFgCgCQgCgDgJAAIgZAAg");
	this.shape_4.setTransform(-11.5,1.3,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSA9IgOgFIgKgGIgHgFIAPgXQAGAGAIAEQAIAFAMAAQAIAAAFgDQAGgDAAgHQAAgFgFgEQgEgEgKAAIgLAAIAAgVIALAAQAJAAAEgEQADgEAAgGQAAgHgFgDQgGgDgFAAQgIAAgHAFQgFADgGALIgWgOQAIgQAMgHQANgHAPAAQAWAAANAJQAMAJAAAQQAAAJgEAHQgEAIgJADQALACAEAHQAFAHAAAKQAAALgFAHQgEAHgHAEQgHAEgKADIgRACQgHAAgLgCg");
	this.shape_5.setTransform(-27.2,1.3,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkBJIAAgbIhGAAIAAAbIggAAIAAg1IANAAQALgPAHgSQAEgUAAgZIAAgOIBWAAIAABcIALAAIAAA1gAgHgHQgGARgHALIAtAAIAAhDIgbAAQAAAXgFAQg");
	this.shape_6.setTransform(-43.4,3,1.3,1.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-12.6,104.1,25.2);


(lib.t1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBTIAAh2IAdAAIAAB2gAgMg0QgFgGAAgHQAAgFAFgHQAEgFAIAAQAJAAAFAFQAEAGAAAGQAAAHgEAGQgFAGgJgBQgIABgEgGg");
	this.shape.setTransform(63.9,-0.2,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWA8IAAgxIgrAAIAAAxIgfAAIAAh3IAfAAIAAAuIArAAIAAguIAfAAIAAB3g");
	this.shape_1.setTransform(51.7,2.8,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOA8IAAhcIglAAIAAgbIBnAAIAAAbIglAAIAABcg");
	this.shape_2.setTransform(36.6,2.8,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBTIAAh2IAdAAIAAB2gAgNg0QgEgGAAgHQAAgGAEgGQAFgFAIAAQAJAAAEAFQAFAGAAAGQAAAHgFAGQgEAGgJgBQgIABgFgGg");
	this.shape_3.setTransform(26.4,-0.2,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjA8IgChEIgZBEIgNAAIgbhEIgDBEIgcAAIAFh3IAfAAIAbBNIAchNIAfAAIAFB3g");
	this.shape_4.setTransform(13,2.8,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBTIAAh2IAdAAIAAB2gAgMg0QgFgGAAgHQAAgFAFgHQAEgFAIAAQAJAAAFAFQAEAGAAAGQAAAHgEAGQgFAGgJgBQgIABgEgGg");
	this.shape_5.setTransform(-0.4,-0.2,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbA8IAAhdIgdAAIgBAoQAAANgDAIQgCANgKAKQgKAJgRAAIgNAAIAAgbIAIAAQAEAAAFgCQAEgCADgIQABgIAAglIAAgjIBbAAIAAB3g");
	this.shape_6.setTransform(-13.3,2.8,1.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSA9IgOgFIgKgGIgHgFIAPgXQAGAGAIAEQAIAFAMAAQAIAAAFgDQAGgDAAgHQAAgFgFgEQgEgEgKAAIgLAAIAAgVIALAAQAJAAAEgEQADgEAAgGQAAgHgFgDQgGgDgFAAQgIAAgHAFQgFADgGALIgWgOQAIgQAMgHQANgHAPAAQAWAAANAJQAMAJAAAQQAAAJgEAHQgEAIgJADQALACAEAHQAFAHAAAKQAAALgFAHQgEAHgHAEQgHAEgKADIgRACQgHAAgLgCg");
	this.shape_7.setTransform(-28.2,2.8,1.3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRA7QgKgEgJgIQgIgJgEgKQgFgOAAgOQAAgOAEgLQAFgMAHgIQAIgIAKgEQAKgFAKAAQAKAAALAEQALAFAGAHQAGAGAFAOQAEANAAAPIAAAFIhMAAQABAPAJAHQAIAHAMAAQAGAAAFgBIAKgDIAHgDIAFgEIAIAaIgFADIgKAEQgEACgKABQgHACgKAAQgJAAgLgEgAgNgfQgHAHgBALIAsAAIgDgLQgCgEgDgDQgDgDgEgCIgHgBQgGAAgIAGg");
	this.shape_8.setTransform(-42.7,2.8,1.3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag5BTIAAilIBjAAIAAAeIhCAAIAAAfIAYAAQAbAAAQAOQAPAMAAAZQAAAZgPAOQgQAOgbAAgAgYA2IAWAAQALAAAIgFQAHgFAAgOQAAgNgHgGQgHgFgMAAIgWAAg");
	this.shape_9.setTransform(-58.7,-0.2,1.3,1.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.3,-11,132.6,22.1);


(lib.number_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.number();
	this.instance.setTransform(-90,-15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-15,180,31);


(lib.more = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BOIBJhOIhDhPIAZgUIBaBkIhjBig");
	this.shape.setTransform(61.1,0.2,0.49,0.49,0,0,0,0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBCQgMgDgKgJQgJgKgFgNQgFgOgBgRQAAgOAGgPQAFgOAIgJQAJgIAMgGQALgEALAAQAMAAAMAEQAKAEAJAKQAIAIAFAOQAEAPABARIAAAHIhXAAQABARAKAHQAKAIANAAQAHAAAGgCIALgDIAJgDIAEgFIAKAdIgGAEIgMAEQgIADgHACIgTABQgLAAgMgFgAgPgjQgHAHgCANIAyAAQAAgGgDgGIgGgIQgEgEgEgCQgEgBgEAAQgHAAgJAHg");
	this.shape_1.setTransform(50.7,0.5,0.504,0.504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheBEIAAiHIAjAAIAABpIAsAAIAAhpIAfAAIAABpIAsAAIAAhpIAjAAIAACHg");
	this.shape_2.setTransform(41.3,0.5,0.504,0.504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BEIAAiHIAjAAIAAAjIAfAAQAaAAAOAOQAPANAAAVQAAANgFAKQgEAKgIAGQgIAGgKADQgMAEgKAAgAgZApIAZAAQAMAAAGgHQAFgHAAgLQAAgLgFgFQgFgFgNAAIgZAAg");
	this.shape_3.setTransform(32,0.5,0.504,0.504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBEIAAhqIghAAIgBAuQgBALgDAMQgDAPgLALQgLALgUAAIgNAAIAAgfIAIAAQAGAAAFgCQAEgDACgIQADgJAAgrIAAgnIBnAAIAACHg");
	this.shape_4.setTransform(23.8,0.5,0.504,0.504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBeIAAiGIAhAAIAACGgAgOg7QgFgHgBgHQABgIAFgGQAEgGAKAAQAKAAAFAGQAFAHAAAHQAAAHgFAHQgFAGgKAAQgJAAgFgGg");
	this.shape_5.setTransform(18.5,-0.9,0.504,0.504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBdQgMgHgIgKQgJgMgDgOQgEgQAAgRQAAgRADgPQADgRAIgPQAJgQALgIQAOgKAQgBIAKgBQAHAAAEgDQAEgEAAgIIAdAFQgBAKgDAIQgDAHgFAEQgGAFgFABIgPADIgOACQgLABgIAJQgHAHgEATQAEgGAKgFQALgEAKAAQAQAAALAGQALAGAHAKQAGAIAEALQADALAAAKQAAAOgFAOQgGANgIAIQgIAJgMAGQgOAFgMAAQgQAAgMgGgAgVAGQgIAKAAAQQAAAQAIAKQAHAKAOAAQAPAAAIgKQAIgLAAgPQAAgPgIgLQgIgIgPAAQgOAAgHAIg");
	this.shape_6.setTransform(12.9,-0.9,0.504,0.504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBEIAAguIgYAAQgDARgFAJQgEAJgFAEQgHAFgFABIgcABIAAgdIAIAAIAFgBIAFgDIACgGIAEgMQgPgIgFgJQgFgJAAgMQAAgWANgMQAOgMAZAAIBBAAIAACHgAgSgjQgFAGABAIQgBASAVAAIAaAAIAAglIgaAAQgMAAgEAFg");
	this.shape_7.setTransform(2.5,0.5,0.504,0.504);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBCQgLgDgJgJQgIgIgGgPQgGgNABgSQAAgOAEgQQAGgNAJgJQAIgJALgFQAMgEAKAAQAMAAAJADQAJADAHAFQAGAFAEAFIAHALIgaARQgDgEgIgJQgHgHgJAAQgKABgIAJQgJAJABAWQgBATAJALQAJALANgBQAIAAAHgBQAGgBAEgCIAIgFIAEgDIAKAcIgGAEQgEACgHADIgPAEQgHACgMAAQgLAAgLgFg");
	this.shape_8.setTransform(-4.3,0.5,0.504,0.504);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBEIAAhIIgyAyIAAAWIgjAAIAAiHIAjAAIAABIIAygyIAAgWIAjAAIAACHg");
	this.shape_9.setTransform(-11.7,0.5,0.504,0.504);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQBEIAAhpIgpAAIAAgeIB0AAIAAAeIgqAAIAABpg");
	this.shape_10.setTransform(-18.8,0.5,0.504,0.504);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBEQgHgCgHgGQgFgFgFgJQgEgHAAgLQAAgLAEgHQAEgJAHgCQAGgFAJgEIATgFIAagEIAAgCQAAgMgGgEQgGgFgIAAIgLABIgKAEIgMAIIgMgYIAHgFIALgFIAPgGIAQgBQAMAAAJADQAKADAGAGQAHAHAEAJQAEALAAANIAABWIghAAIgBgLQgGAHgJADQgHAEgKAAQgIAAgJgDgAgBAHQgLACgEAGQgFAFAAAHQAAAGAFAEQAFAEAJABQAGAAAGgDQAFgDAFgEIAAgcg");
	this.shape_11.setTransform(-25.6,0.5,0.504,0.504);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZBEIAAg3IgxAAIAAA3IgjAAIAAiHIAjAAIAAA0IAxAAIAAg0IAjAAIAACHg");
	this.shape_12.setTransform(-32.8,0.5,0.504,0.504);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVBFIgPgGQgIgDgEgDIgHgGIARgaQAEAFALAGQAJAFAOABQAJgBAGgDQAGgDAAgHQAAgHgFgEQgEgEgNAAIgMAAIAAgZIANAAQAKABAEgFQAEgGAAgFQAAgJgGgDQgGgDgGAAQgJAAgIAFQgGAEgHAMIgYgQQAIgSAOgHQAOgIASAAQAaAAANAKQAOAJAAATQAAAJgEAJQgFAIgLAFQANABAFAJQAFAGAAANQAAAOgFAGQgFAJgIAFQgIAEgLADIgTACQgJAAgMgCg");
	this.shape_13.setTransform(-40.1,0.5,0.504,0.504);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQBeIAAiGIAhAAIAACGgAgOg7QgFgHgBgHQABgIAFgGQAEgGAKAAQAKAAAFAGQAGAGAAAIQAAAHgGAHQgFAGgKAAQgJAAgFgGg");
	this.shape_14.setTransform(-45.1,-0.9,0.504,0.504);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxBxIAAgmIhhAAIAAAmIgkAAIAAhIIAPAAQAPgZAHgZQAIgbACgdIACgvIBpAAIAACZIAPAAIAABIgAgEgrQgBAOgFAUQgEAMgFAOQgFANgFALIA/AAIAAh4IgjAAQAAARgDATg");
	this.shape_15.setTransform(-51.6,0.1,0.504,0.504);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.8,-5.9,119.9,11.8);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logoSmall();
	this.instance.setTransform(-20,-20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_152 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(152).call(this.frame_152).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_129 = new cjs.Graphics().p("AjeDZIAAmxIEFAAIgpGxg");
	var mask_graphics_132 = new cjs.Graphics().p("AjyDZIAAmxIHMAAIAZGxg");
	var mask_graphics_135 = new cjs.Graphics().p("AlqDZIAAmxILBAAIAVGxg");
	var mask_graphics_138 = new cjs.Graphics().p("AnkDZIAAmxIO1AAIAUGxg");
	var mask_graphics_141 = new cjs.Graphics().p("Ao6DZIAAmxIRhAAIAUGxg");
	var mask_graphics_144 = new cjs.Graphics().p("ArBDZIAAmxIWDAAIhNGxg");
	var mask_graphics_147 = new cjs.Graphics().p("AtXDZIAAmxIavAAIhOGxg");
	var mask_graphics_150 = new cjs.Graphics().p("AvCDZIAAmxIeGAAIhOGxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(129).to({graphics:mask_graphics_129,x:-22.4,y:1.6}).wait(3).to({graphics:mask_graphics_132,x:-20.3,y:1.6}).wait(3).to({graphics:mask_graphics_135,x:-8.3,y:1.6}).wait(3).to({graphics:mask_graphics_138,x:3.8,y:1.6}).wait(3).to({graphics:mask_graphics_141,x:12.4,y:1.6}).wait(3).to({graphics:mask_graphics_144,x:25.9,y:1.6}).wait(3).to({graphics:mask_graphics_147,x:40.9,y:1.6}).wait(3).to({graphics:mask_graphics_150,x:51.7,y:1.6}).wait(3));

	// number
	this.instance = new lib.number_1();
	this.instance.setTransform(54,1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).wait(24));

	// more
	this.instance_1 = new lib.more();
	this.instance_1.setTransform(-236.9,-112.2,1.096,1.096);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({x:-58,alpha:1},10,cjs.Ease.get(1)).wait(34));

	// vodafone
	this.instance_2 = new lib.vodafone();
	this.instance_2.setTransform(-253.9,-63.8,1.096,1.096);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({x:-72,alpha:1},10,cjs.Ease.get(1)).wait(54));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.setTransform(-247.8,-149.2,1.096,1.096);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({x:-66.4,alpha:1},10,cjs.Ease.get(1)).wait(74));

	// t1_3
	this.instance_4 = new lib.t1_3();
	this.instance_4.setTransform(-229.1,-182.3,1.096,1.096);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({x:-47.2,alpha:1},10,cjs.Ease.get(1)).wait(99));

	// t1_2
	this.instance_5 = new lib.t1_2();
	this.instance_5.setTransform(-243.7,-219.4,1.096,1.096);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({x:-62.1,alpha:1},10,cjs.Ease.get(1)).wait(104));

	// t1_1
	this.instance_6 = new lib.t1_1();
	this.instance_6.setTransform(-225.9,-255.3,1.096,1.096);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({x:-46.5,alpha:1},10,cjs.Ease.get(1)).wait(109));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.setTransform(105,-182.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({alpha:1},10).wait(134));

	// redLine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E11021").s().p("Aw+opIAAqOMAh9Ah7IAAD0g");
	this.shape.setTransform(11.3,-291.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E11021").s().p("A2LnQIKarnMAh9Ah7IAAD0g");
	this.shape_1.setTransform(-22,-291.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E11021").s().p("A2zBUILq0LMAh9Ah7IAAD0g");
	this.shape_2.setTransform(-26,-291.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E11021").s().p("A12JQIAAt4IJxuPMAh8Ah7IAAD0g");
	this.shape_3.setTransform(-19.9,-291.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E11021").s().p("A4bQMIDqrEILQ3/MAh9Ah7IAAD0g");
	this.shape_4.setTransform(-36.4,-291.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E11021").s().p("A2CCBILK3eMAh9Ah7IAAD0MguJAFMg");
	this.shape_5.setTransform(-27.7,-274.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E11021").s().p("A35hdIN23gMAh9Ah8IAAD0MgsIAMKg");
	this.shape_6.setTransform(-33,-252.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E11021").s().p("A3bnHIM61nMAh9Ah7IAAD0MgsFATug");
	this.shape_7.setTransform(-30,-228.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E11021").s().p("A4DnwIOK6UMAh9Ah9IAADyMgtNAeag");
	this.shape_8.setTransform(-34,-194.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E11021").s().p("EgY9AkMMABgg3hIOe1oMAh9Ah+IAADzMgsrAsKg");
	this.shape_9.setTransform(-39.8,-150.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(124));

	// bg
	this.instance_8 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(153));

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