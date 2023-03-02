(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/img4.jpg", id:"img4"},
		{src:"images/img5.jpg", id:"img5"},
		{src:"images/l.png", id:"l"}
	]
};



// symbols:



(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,328);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,336);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,322);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,333);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,295);


(lib.l = function() {
	this.initialize(img.l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,55);


(lib.white = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgJvAsXQnkiQmIkJMAAAhUoMAu3AAAMAAABa1QoJChoyAAQobAAn1iVg");
	this.shape.setTransform(0,-124.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-423.3,300,597.6);


(lib.urText = function() {
	this.initialize();

	// <Слой>
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAaQgFgGAAgKQAAgKADgFQACgIAFgGQAEgFAIgDQAEgEAIAAIALABIAGADIgIAtIAEAJIgJAEIgFgIIgIAGQgCADgGAAQgIAAgEgGgAAAgVIgIAHQgCAEgCAHQgCAGAAAFIABAIIACAEIACADIAFAAIAEgBQABAAACgDIAEgEQACgEAAgDIAGgeIgHgBQgFAAgDACg");
	this.shape.setTransform(41.7,19.8,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAeIgFgEQgCgBgBgDIgBgGIABgDIAAgDIAHgoIAKAAIgIAqIAAACQABAIAIAAQAGAAADgEQAFgEACgJIAGgjIAKAAIgIAvIADAJIgIAEIgFgIIgEADIgDADIgEACIgFABg");
	this.shape_1.setTransform(34.1,19.9,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAGIgCgFQAAgCACgDQADgDABAAQAEAAABACQACACAAADQAAACgCADQgDADgCAAQgCAAgCgCg");
	this.shape_2.setTransform(27.8,22.7,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAaQgFgGAAgKQAAgJADgGQACgHAFgHQAFgFAHgDQAEgEAJAAIAKABIAGADIgIAtIAEAJIgJAEIgFgIIgIAGQgCADgFAAQgJAAgEgGgAAAgVIgHAHQgDAEgCAHQgCAGAAAFIABAIIACAEQAAABAAAAQABABAAAAQAAAAABAAQAAABABAAIAEAAIAEgBIADgDIAEgEIACgHIAGgeIgHgBQgEAAgEACg");
	this.shape_3.setTransform(22.8,19.8,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAkQgEgCAAgHIABgCIAAgEIAGghIgKAAIABgJIALAAIADgRIAIAAIgDARIAPAAIgCAJIgPAAIgEAfIAAAGQAAADACACQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAGgBIADgBIADAGIgGADIgGABQgGAAgEgEg");
	this.shape_4.setTransform(17.3,18.9,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAeQgGgDgBgDQgCgCgCgFIgBgJQAAgIADgIQACgGAFgHQAEgFAGgCQAFgDAEAAQAHAAADACQAFADACADQADACABAFIABAJQAAAKgDAGQgBAHgGAGQgEAFgGACQgGADgDAAQgHAAgDgCgAgDgUQgEADgDAFQgDAFAAAGQgBAEAAAGQAAAHACAEQADAEAHAAQADAAADgDQADgCAEgGQADgFAAgGQACgEgBgGQAAgHgCgEQgEgEgFAAQgEAAgDADg");
	this.shape_5.setTransform(10.5,19.8,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZArIgFgBIADgIIAIACIAGgBIADgCIADgEIAGgNIAAAAQgIAAgDgEQgCgEgBgIIgFgpIALgBIAFAuIABADIACABIABABIABAAIAVg0IAJACIgcBDQgDAJgEAFQgGAEgIAAg");
	this.shape_6.setTransform(3.1,21.3,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAeQgGgDgBgDQgCgCgCgFIgBgJQAAgKADgGQADgIAEgFQAEgFAGgCQAFgDAFAAQAGAAADACQAFADACADQADACABAFIABAJQAAAIgDAIQgCAIgFAFQgEAFgGACQgGADgDAAQgHAAgDgCgAgDgUQgEACgDAGQgDAFAAAGQgBAEAAAGQAAAHACAEQADAEAGAAQADAAAEgDQAEgDADgFQADgFAAgGQACgEgBgGQAAgHgCgEQgEgEgFAAQgEAAgDADg");
	this.shape_7.setTransform(-4.1,19.8,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAkQgEgCAAgHIAAgCIAHglIgKAAIABgJIALAAIADgRIAIAAIgDARIAPAAIgBAJIgQAAIgEAiIAAADQAAADABACQABAAAAABQABAAAAAAQAAAAAAAAQAAABABAAIAEgBIAEgBIACAGIgFADIgGABQgGAAgEgEg");
	this.shape_8.setTransform(-9.7,18.9,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAGQgCgCAAgDQAAgDACgCQADgDABAAQADAAACACQACACAAADQAAACgDADQgCADgCAAQgCAAgCgCg");
	this.shape_9.setTransform(-14.8,22.7,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AABAfQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCgDIAAgiIgMAdQgCAGgDADQgEACgEAAIgFAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgCgDIgBg2IALgBIAAA1IACAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBIAUgxIAHAAIACAxQAAABAAABQAAAAAAABQAAAAABAAQAAAAAAAAIACAAIABgDIAUgyIAJABIgUAxQgCAGgDADQgDACgFAAg");
	this.shape_10.setTransform(-20.1,19.9,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AABAfIgBgDQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgcIgLAdQgCAFgEAEQgDACgEAAIgFAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgGIgBgwIAKgBIABAyIABADIABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBIAUgxIAHAAIACAxQAAABAAABQAAAAAAABQABAAAAAAQAAAAABAAIABAAIAVg1IAJABIgTAxQgCAFgEAEQgDACgFAAg");
	this.shape_11.setTransform(-30.3,19.9,1.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AABAfQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIgCgDIAAgiIgMAdQgCAGgDADQgEACgEAAIgFAAIgDgDIgCgDIgBg2IALgBIAAA1IACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAgBIAUgxIAHAAIACAxQAAABAAABQAAAAAAABQABAAAAAAQAAAAAAAAIACAAIABgDIAUgyIAJABIgUAxQgCAGgDADQgDACgFAAg");
	this.shape_12.setTransform(-40.5,19.9,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAQIANgMIACgDIABgBQAAAAAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBIgKgMIAHgEIANAPQACACAAADQAAABgDAEIgFAFIgOALgAgYAQIAPgMIADgDIAAgBIgBgEIgLgMIAHgEIALAPQACACAAADQAAACgCADIgSAQg");
	this.shape_13.setTransform(64.9,-0.3,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATAPIgcAAIgOAeIgKgCIAihNQADgFADgCQADgDAFABIAFAAIADACIACAEIABAGIAIBKIgMACgAALghIgRAnIAYAAIgEgnIgBgBg");
	this.shape_14.setTransform(56.7,-1.4,1.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAKArIAHgpIghAAIgIApIgLAAIAPhVIAMAAIgHAlIAiAAIAGglIALAAIgQBVg");
	this.shape_15.setTransform(48.5,-1.4,1.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTA2IAPhVIAJAAIgNBVgAAIgnQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgFACgCQADgDADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAEgCADQgCACgEAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOgnQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgFACgCQACgDAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAAEgDADQgCACgEAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAg");
	this.shape_16.setTransform(43,-2.8,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATAPIgcAAIgOAeIgKgCIAihNQACgEAEgDQADgDAFABIAFAAIADACIACAEIAJBQIgLACgAALghIgQAnIAYAAIgFgnIgBgBg");
	this.shape_17.setTransform(35.1,-1.4,1.2,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeArIAPhVIAWAAQALAAAHAFQAGAFAAAKQAAAHgCAGQgCAFgEAEQgEACgHAEQgFACgHAAIgNAAIgHAjgAgMAAIAMAAIAIAAIAGgEIAEgGQACgEAAgGQAAgHgEgDQgEgDgIAAIgKAAg");
	this.shape_18.setTransform(28.5,-1.4,1.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCACIgMAAIgHApIgLAAIAPhVIALAAIgGAlIAGAAIAEgBQACgBABgDIATgdIADgCIAEgBIAEgBIACAIIgFACIgUAcIgBACIgCACIAUAqIgLADg");
	this.shape_19.setTransform(20.5,-1.4,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbArIgEgBIACgIIAIABIAEAAIADgCIACgDIAGgJIgHgBIgDgCIgEgEIgBgGIgHgwIALgDIAHAzIACADQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADABIAYg4IALACIgfBBIgEAJIgEAGIgHAEIgHABg");
	this.shape_20.setTransform(12.9,-1.4,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAFIACgJIAgAAIgCAJg");
	this.shape_21.setTransform(5.9,-0.8,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATAPIgcAAIgOAeIgKgCIAihNIAFgHQAEgDAFABIAEAAIAEACIACAEIAJBQIgMACgAALghIgRAnIAYAAIgDgkIgBgDIgBgBg");
	this.shape_22.setTransform(-2.2,-1.4,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTArIAOhMIgXAAIABgJIA4AAIgBAJIgYAAIgMBMg");
	this.shape_23.setTransform(-7.5,-1.4,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAqQgFgCgEgFIgFgKQgCgGAAgHQAAgMADgIQAFgNAEgGQAFgHAIgFQAJgFAHAAQAGAAAGADQAFACAEAFQAEAEABAGQACAGAAAHQAAALgDAKQgDALgGAHQgFAIgIAEQgIAFgIAAQgGAAgGgDgAgFgfQgGAFgDAGIgGAQQgCAJAAAIQAAAKAFAHQAEAGAIAAQAFAAAGgEQAGgFADgGQAEgHACgJQACgHAAgKQAAgLgEgGQgFgGgIAAQgGAAgFAEg");
	this.shape_24.setTransform(-15.9,-1.4,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AALA2IAKg5IgrAuIgCALIgMAAIAPhUIAMAAIgMA7IAsguIADgNIALAAIgPBUgAgCgpQgFgEgBgGIAHgDIACAGQADACAFABQADAAAFgCQACgCADgFIAHADQgDAIgGACQgFAEgHAAQgIgBgCgDg");
	this.shape_25.setTransform(-25.4,-2.8,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAqQgFgCgDgFQgEgEgBgGQgCgGAAgHQAAgMADgIQADgLAGgIQAFgIAIgEQAIgFAHAAQAHAAAGADQAFACAEAFQADAEACAGQACAFAAAIQAAALgDAKQgDAJgGAJQgGAIgHAEQgIAFgIAAQgHAAgGgDgAgFgfQgHAGgCAFQgEAHgCAJQgCAHAAAKQAAALAEAGQAFAGAIAAQAFAAAGgEQAFgFAEgGIAGgQIACgRQAAgKgFgHQgDgGgKAAQgFAAgFAEg");
	this.shape_26.setTransform(-35,-1.4,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTArIAOhMIgYAAIACgJIA4AAIgBAJIgYAAIgLBMg");
	this.shape_27.setTransform(-42.2,-1.4,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAAAGQgBgCAAgDQAAgCABgDIAFgGIAOgKIAGAFIgPAMIgCACIgBABIAAACIACADIAKAMIgHAEgAgWAGQgBgCgBgDQAAgDACgCIAUgQIAEAFIgMAMIgEACIAAABIAAACIACADIAKAMIgHAEg");
	this.shape_28.setTransform(-49,-0.3,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMArIAOhVIAKAAIgNBVg");
	this.shape_29.setTransform(-56.8,-1.4,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMArIAOhVIALAAIgOBVg");
	this.shape_30.setTransform(-60.4,-1.4,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAJArIAOhMIghAAIgNBMIgLAAIAPhVIA2AAIgPBVg");
	this.shape_31.setTransform(-66.9,-1.4,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeArIAPhVIAWAAQAMAAAGAFQAGAFAAAKQAAAIgCAFQgCAGgEADQgDACgHAEQgGACgHAAIgNAAIgGAjgAgLAAIALAAIAIAAIAGgEQADgDACgDQABgEAAgGQAAgHgEgDQgEgDgIAAIgJAAg");
	this.shape_32.setTransform(84.5,-18.7,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSAqQgFgCgFgFIgEgKQgCgFAAgIQAAgMAEgIQADgMAFgHQAFgHAIgFQAIgFAHAAQAHAAAGADQAFACAEAFQADAEACAGQACAIAAAFQAAALgDAKQgDAKgGAIQgFAIgIAEQgIAFgIAAQgHAAgFgDgAgFgfQgGAFgEAGIgFAQQgCAJAAAIQAAAKAEAHQAEAGAJAAQAFAAAGgEQAGgFADgGQAEgHACgJIACgRQAAgKgFgHQgDgGgJAAQgGAAgFAEg");
	this.shape_33.setTransform(75.6,-18.7,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSArIANhMIgXAAIABgJIA4AAIgCAJIgXAAIgMBMg");
	this.shape_34.setTransform(68.5,-18.7,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAqQgGgCgDgFIgEgKIgBgNIAAgKIgOAAIgHApIgMAAIAQhVIALAAIgGAlIAOAAQABgIAEgIQAEgHAFgFQACgEAHgEQAGgDAHAAQAHAAAGADQAFACADAFQAEAEABAGQACAGAAAHQAAALgDAKQgDALgFAHQgFAIgIAEQgIAFgKAAQgGAAgEgDgAAJgfQgFAFgEAGQgBAJgCAHQgBAHAAAKIAAAJQABAEACADQABAEACABQADACAEAAQAHAAAGgEQAFgFAEgGQADgGACgKQACgGAAgLIgBgJIgDgIIgFgEQgDgCgEAAQgHAAgGAEg");
	this.shape_35.setTransform(57.5,-18.7,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHANIAGgNIgDAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgDACAAQADAAACACQACACAAADIgCAGIgIAQg");
	this.shape_36.setTransform(50.2,-22.3,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdArIAPhVIAsAAIgBAJIgiAAIgFAbIAOAAIAKABQAFACACACQADABADADQACAGAAAEQAAAOgJAIQgJAIgNAAgAgRAiIAPAAQADAAADgBIAHgEQADgCACgEQABgDAAgFQAAgFgBgCIgEgFQgDgCgCAAIgGAAIgMAAg");
	this.shape_37.setTransform(44,-18.7,1.2,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAKArIALg6IgsAvIgCALIgLAAIAPhVIAMAAIgMA8IAsgvIADgNIALAAIgPBVg");
	this.shape_38.setTransform(35.3,-18.7,1.2,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeArIAPhVIAWAAQAMAAAGAFQAGAFAAAKQAAAIgCAFQgCAGgEADQgDACgHAEQgGACgHAAIgNAAIgGAjgAgLAAIALAAIAIAAIAGgEQADgDACgDQABgEAAgGQAAgHgEgDQgEgDgIAAIgJAAg");
	this.shape_39.setTransform(26.5,-18.7,1.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTArIAPhMIgZAAIACgJIA5AAIgCAJIgYAAIgMBMg");
	this.shape_40.setTransform(19.7,-18.7,1.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgPAqQgGgDgDgEQgDgFgBgGQgCgHAAgHQAAgMAEgJQAEgLAGgHQAGgHAHgEQAFgEAJAAQAGAAAFACQAFABADADIgEAIQgEgDgDgBIgIgBQgHAAgEAEQgGAEgDAGQgEAFgCAKQgCAGAAAKIABAKQAAAEACAEIAGAGQAFACADAAIAIgCIAKgEIADAIQgFADgGACQgGACgGAAQgHAAgGgDg");
	this.shape_41.setTransform(11.9,-18.7,1.2,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALArIAKg6IgsAvIgBALIgMAAIAPhVIAMAAIgLA8IAsgvIACgNIALAAIgPBVg");
	this.shape_42.setTransform(2.9,-18.7,1.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AARAzIADgRIgtAAIgDARIgLAAIAEgaIAGAAIAGgHIAEgIIAFgKIANgyIApAAIgNBLIAFAAIgEAagAgFACIgEAJIgDAIIgFAGIAgAAIANhCIgXAAg");
	this.shape_43.setTransform(-7.3,-17.7,1.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AALA2IAKg5IgsAuIgBALIgMAAIAPhUIALAAIgLA7IAsgvIACgMIAMAAIgPBUgAgCgpQgGgEAAgGIAHgDQAAADACADQACACAFABQAEAAAEgCQAEgDACgEIAHADQgDAHgGADQgFAEgHAAQgIgBgCgDg");
	this.shape_44.setTransform(-18.5,-20.1,1.2,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAKArIALg6IgsAvIgCALIgLAAIAPhVIAMAAIgMA8IAsgvIADgNIALAAIgPBVg");
	this.shape_45.setTransform(-28,-18.7,1.2,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAKArIAGgpIghAAIgHApIgLAAIAPhVIALAAIgGAlIAiAAIAGglIALAAIgPBVg");
	this.shape_46.setTransform(-37.4,-18.7,1.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAKA2IALg5IgsAuIgCALIgLAAIAPhUIAMAAIgMA7IAsgvIADgMIALAAIgPBUgAgCgpQgFgEgBgGIAHgDQABAEABACQACACAFABQAEAAAFgCQADgEACgDIAHADQgDAHgGADQgGAEgGAAQgHgBgDgDg");
	this.shape_47.setTransform(-46.8,-20.1,1.2,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMArIAOhVIALAAIgOBVg");
	this.shape_48.setTransform(-53.4,-18.7,1.2,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AANAzIADgRIgzAAIAPhUIALAAIgNBLIAhAAIAOhLIALAAIgNBLIAGAAIgFAag");
	this.shape_49.setTransform(-60.1,-17.7,1.2,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMArIAOhVIALAAIgOBVg");
	this.shape_50.setTransform(-66.6,-18.7,1.2,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAsIACgMQgHgBgDgCQgFgBgEgDQgEgEgCgFQgCgHAAgFQAAgQAKgJQAJgKASgBIACgLIALAAIgCAMQAMAAAIAIQAHAGAAANQAAAJgDAFQgCAHgGAFQgDAEgJADQgHADgIABIgBALgAAAAZQAIgCAEgCQADgBAGgFQADgDABgGQABgFAAgEIAAgHIgDgGQgCgEgEgBQgEgCgEAAgAgLgVQgGACgDAEQgCAEgCAFIgBAIQAAALAEAFQAEAFAIABIAJgwQgGABgFACg");
	this.shape_51.setTransform(-73.9,-18.7,1.2,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgSAqQgFgBgEgGQgEgGgBgEQgCgGAAgHQAAgMADgIQADgMAGgHQAFgHAIgFQAJgFAHAAQAGAAAGADQAGACADAFQAEAEABAGQACAGAAAHQAAALgDAKQgDALgGAHQgFAIgIAEQgIAFgIAAQgGAAgGgDgAgFgfQgGAFgDAGQgEAIgCAIQgCAJAAAIQAAAKAFAHQAEAGAIAAQAFAAAGgEQAGgFADgGQAEgHACgJQACgHAAgKQAAgLgEgGQgFgGgIAAQgGAAgFAEg");
	this.shape_52.setTransform(-84,-18.7,1.2,1.2);

	this.addChild(this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.2,-26.7,176.6,53.4);


(lib.t7_4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BA2ED").s().p("AgVBCQgEgEAAgGQAAgIAFgFQAEgGAIAAQAHAAABAFQAEAEAAAGQAAAIgEAFQgEAFgHAAQgHAAgDgEgAgSAYIAPhdIAdAAIgWBdg");
	this.shape.setTransform(88.1,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1BA2ED").s().p("Ag7BCIAyhxIAEgKQADgEADgDQADgDAFgBQAFgCAHAAQAMAAAGAFQAHAFABAOIANBxIgeAEIgDgnIgqAAIgQAngAANgpIgDAGIgRAuIAgAAIgEgtIgCgGQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_1.setTransform(77.8,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BA2ED").s().p("AgkBEIAUhwIgkAAIAFgXIBjAAIgEAXIgkAAIgSBwg");
	this.shape_2.setTransform(69.6,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BA2ED").s().p("AgfBDQgKgEgGgHQgGgIgDgJQgDgJAAgMQAAgSAFgPQAGgRAIgLQAIgLAOgJQANgHAOAAQAOAAAIAEQAKAEAGAHQAGAFAEAMQADAKAAAMQAAARgFAQQgEAPgKANQgJAMgNAHQgOAHgOAAQgMAAgKgEgAgGgpQgIAFgEAKQgEAKgDALQgDAMAAAMQAAANAFAIQAGAJAKgBQAHABAHgHQAHgEAFgKQAFgLADgMQACgHAAgQQAAgNgFgJQgGgHgKgBQgIAAgGAHg");
	this.shape_3.setTransform(57.2,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BA2ED").s().p("AgjBEIAKg1QgDAAgEgFIgEgKIgRhAIAdgDIANA2IACAGQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAIACgBIADgEIAdg5IAaADIglBBIgHAKIgJAFIgGA0g");
	this.shape_4.setTransform(46.4,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1BA2ED").s().p("AgfBDQgJgEgHgHQgGgIgDgJQgDgJAAgMQAAgRAFgQQAGgRAIgLQAIgLAOgJQANgHANAAQAOAAAJAEQAKAEAGAHQAHAHADAKQADAKAAAMQAAARgFAQQgEAPgKANQgJAMgNAHQgOAHgNAAQgNAAgKgEgAgGgpQgHAFgFAKQgFAKgCALQgCAJAAAPQgBAOAFAHQAFAJALgBQAHABAHgHQAHgEAFgKQAFgLACgMQADgHAAgQQAAgNgFgJQgFgHgLgBQgIAAgGAHg");
	this.shape_5.setTransform(33.8,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1BA2ED").s().p("AgkBEIAVhwIgkAAIAEgXIBjAAIgEAXIgkAAIgSBwg");
	this.shape_6.setTransform(23.6,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1BA2ED").s().p("AgkBYIAYiGIAcAAIgWCGgAANg9QgDgDAAgGQAAgIAEgFQAEgEAHgBQAGABADAEQADADAAAGQAAAJgEADQgFAGgGAAQgFAAgEgFgAgYg9QgDgDAAgGQAAgIAEgFQADgEAIgBQAGABADAEQADADAAAGQAAAIgFAEQgEAGgGAAQgGAAgDgFg");
	this.shape_7.setTransform(12.1,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1BA2ED").s().p("AgZBEIAYiHIAbAAIgXCHg");
	this.shape_8.setTransform(5.3,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BA2ED").s().p("AgyBEIAYiHIBNAAIgEAXIgwAAIgUBwg");
	this.shape_9.setTransform(-1.7,13.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1BA2ED").s().p("AgfBDQgIgDgIgIQgGgIgDgJQgDgJAAgMQAAgRAFgQQAFgRAJgLQAJgMANgIQANgHAOAAQANAAAJAEQAKAEAGAHQAHAHADAKQADAMAAAKQAAAQgFARQgFAQgJAMQgKANgMAGQgNAHgPAAQgMAAgKgEgAgGgpQgHAEgFALQgFAKgCALQgDAJAAAPQAAAOAFAHQAFAJALgBQAHABAHgHQAHgEAFgKQAFgMACgLQADgKAAgNQAAgNgFgJQgFgHgLgBQgIAAgGAHg");
	this.shape_10.setTransform(-13.8,13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1BA2ED").s().p("AhAA3IAKgJIAMgSIAFgMIAWhVIBQAAIgZCHIgdAAIAUhxIgaAAIgSBLIgJASQgIAMgQAMg");
	this.shape_11.setTransform(-27.1,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1BA2ED").s().p("AggBDQgIgEgHgHQgGgIgDgJQgDgJAAgMQAAgSAFgPQAGgRAIgLQAIgLAOgJQANgHAOAAQANAAAJAEQAKAEAGAHQAGAFAEAMQADAKAAAMQAAARgFAQQgEAPgKANQgJAMgNAHQgOAHgNAAQgNAAgLgEgAgHgpQgGAFgFAKQgFAKgDALQgBAJAAAPQgBAOAFAHQAFAJALgBQAHABAHgHQAHgEAFgKQAFgLADgMQACgHAAgQQAAgNgFgJQgFgHgLgBQgIAAgHAHg");
	this.shape_12.setTransform(-39.1,13.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1BA2ED").s().p("AAJBEIAKg8IgpAAIgKA8IgeAAIAYiHIAeAAIgKA3IApAAIAKg3IAeAAIgYCHg");
	this.shape_13.setTransform(-52.2,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1BA2ED").s().p("AABAVIgBgDIAAgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIgDADIgkAyIgbgGIAwhCIgYg+IAbgHIASAzIACACIACgCIADgDIAggwIAbAFIguBBIAZBCIgcAFg");
	this.shape_14.setTransform(-64.8,13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1BA2ED").s().p("Ag1BEIAYiHIBTAAIgEAXIg2AAIgFAgIAoAAIgEAUIgpAAIgGAlIA4AAIgEAXg");
	this.shape_15.setTransform(-75.6,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1BA2ED").s().p("AgjBEIAThwIgkAAIAFgXIBkAAIgFAXIgkAAIgSBwg");
	this.shape_16.setTransform(-85.5,13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1BA2ED").s().p("AgZBEIAYiHIAbAAIgYCHg");
	this.shape_17.setTransform(96.5,-9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1BA2ED").s().p("AAKBEIAKg7IgqAAIgKA7IgdAAIAXiHIAeAAIgJA2IAoAAIAKg2IAeAAIgYCHg");
	this.shape_18.setTransform(87.1,-9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1BA2ED").s().p("AATBSIAFgbIg5AAIgEAbIgeAAIAJgzIAMAAIAGgIIAGgMIAGgNIAVhOIBKAAIgUBvIAMAAIgIAzgAABgNQgDASgEAHQgDAKgHAJIAjAAIAQhZIgWAAg");
	this.shape_19.setTransform(73.7,-8.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1BA2ED").s().p("AAJBEIANhJIgzA3IgDASIgdAAIAYiHIAeAAIgPBMIAzg2IADgWIAeAAIgYCHg");
	this.shape_20.setTransform(62.4,-9.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1BA2ED").s().p("Ag3BEIAYiHIAsAAQAJAAAJACQAIADAFAEQAFAEAEAHQADAIAAAIQAAAMgEAIQgEAKgHAEQgHAHgLADQgMAFgLAAIgQAAIgJAygAgMgDIAMAAQAMAAAHgGQAHgHAAgNQAAgJgEgEQgFgDgJAAIgNAAg");
	this.shape_21.setTransform(50.1,-9.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1BA2ED").s().p("AgzBEIAYiHIBPAAIgDAXIg0AAIgGAeIAOAAQAHAAAKACQAIACAGAEQAHAFACAFQAEAGAAAKQAAAYgPALQgOANgYAAgAgUAvIAPAAQAKAAAHgHQAIgFAAgMQAAgGgCgDIgEgFIgGgCIgUgBg");
	this.shape_22.setTransform(38.4,-9.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1BA2ED").s().p("AgZBEIAYiHIAbAAIgYCHg");
	this.shape_23.setTransform(30.1,-9.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1BA2ED").s().p("AgyBEIAYiHIBNAAIgEAXIgwAAIgUBwg");
	this.shape_24.setTransform(23,-9.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1BA2ED").s().p("AAJBaIANhLIgzA5IgDASIgdAAIAYiHIAeAAIgPBMIAzg3IAEgVIAdAAIgYCHgAgGg/QgJgHgCgNIARgGQAAAFAEAEQADAEAHAAQAHAAAEgDQAEgDADgHIASAGQgGANgJAIQgKAGgMAAQgMAAgHgHg");
	this.shape_25.setTransform(7.8,-11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1BA2ED").s().p("Ag7BCIAxhxIAGgJQACgEADgEQADgDAFgBQAGgCAGAAQAMAAAHAFQAFAGACANIANBxIgdADIgEgmIgpAAIgRAngAANgoIgCAFIgSAuIAgAAIgEguIgBgFQgBgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_26.setTransform(-5.8,-9.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1BA2ED").s().p("Ag1BEIAWiHIAsAAQAGAAALACQAIADAFADQAFAEADAGQAEAHAAAIQgBALgGAIQgFAJgKAFQAIACAFAHQAEAIAAAJQAAALgEAIQgFAJgIAEQgIAHgJABQgJADgLAAgAgVAvIATAAIAHgBIAIgFQADgDACgDQACgFAAgFQAAgFgBgDQgCgEgDgBIgFgCIgHgBIgQAAgAgLgLIANAAQALAAAGgFQAFgGAAgJQAAgHgEgEQgDgDgJAAIgNAAg");
	this.shape_27.setTransform(-16.9,-9.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1BA2ED").s().p("AAJBEIANhJIgzA3IgDASIgdAAIAYiHIAeAAIgPBMIAzg2IAEgWIAdAAIgYCHg");
	this.shape_28.setTransform(-29.1,-9.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1BA2ED").s().p("Ag3BEIAYiHIAsAAQAIAAAKACQAHADAGAEQAFAEADAHQAEAHAAAJQAAAKgEAKQgEAKgHAEQgHAHgLADQgMAFgLAAIgQAAIgJAygAgMgDIAMAAQAMAAAGgGQAIgHAAgNQAAgJgEgEQgGgDgIAAIgNAAg");
	this.shape_29.setTransform(-41.3,-9.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1BA2ED").s().p("AgGAIIgNAAIgKA7IgdAAIAYiHIAdAAIgJA3IAGAAQADAAACgCIADgEIAWgkIAHgHIAHgEQACgBAFgCIALAAIAFASIgJACIgFAGIgYAjIgEAFIAdBCIgcAHg");
	this.shape_30.setTransform(-52.6,-9.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1BA2ED").s().p("AATBSIAFgbIg4AAIgFAbIgdAAIAJgzIALAAIAGgIIAHgMIAFgNIAWhOIBJAAIgUBvIAMAAIgJAzgAABgNQgCAOgFALQgEAMgFAHIAhAAIARhZIgWAAg");
	this.shape_31.setTransform(-65.8,-8.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1BA2ED").s().p("AgZBEIAYiHIAbAAIgYCHg");
	this.shape_32.setTransform(-73.6,-9.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1BA2ED").s().p("Ag1BEIAWiHIAsAAQAHAAAKACQAHACAGAEQAFAEAEAGQACAHABAIQgBALgGAIQgGAJgJAFQAIACAFAHQAEAIAAAJQAAALgEAIQgEAJgIAEQgJAHgJABQgIADgMAAgAgVAvIAUAAIAHgBIAHgFQADgCACgEQACgFAAgFQAAgFgCgDQgBgEgCgBIgGgCIgHgBIgRAAgAgLgLIANAAQALAAAFgFQAGgGABgJQAAgHgFgEQgEgDgHAAIgOAAg");
	this.shape_33.setTransform(-82.4,-9.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1BA2ED").s().p("AgdALIAEgVIA3AAIgEAVg");
	this.shape_34.setTransform(-96,-8.5);

	this.addChild(this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.1,-20.6,198.3,41.3);


(lib.t7_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#074095").s().p("AgUAZQgEgEAAgMQAAgJACgFQACgGAFgHQAFgGAHgDQAGgDAGAAQAHAAADACIAGABIgIAtIAEAIIgIAFIgFgIIgIAFQgCADgFAAQgIAAgFgGgAAAgUQgDACgEAFQgDAEgCAGQgCAEAAAHIABAHIACAFIADACIAEABIAEgBIADgDIAEgEIACgIIAGgcIgHgBQgEAAgEACg");
	this.shape.setTransform(98.5,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#074095").s().p("AgKAkQgEgEAAgFIABgDIAAgEIAHggIgKAAIABgIIAKAAIADgRIAIAAIgDARIAPAAIgBAIIgPAAIgFAhIAAADQAAADABACQABAAAAABQABAAAAAAQAAAAAAAAQAAAAABAAIAEAAIAFgCIABAIIgFABIgGABQgGAAgEgCg");
	this.shape_1.setTransform(94,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#074095").s().p("AgNAdIgHgFIgDgIIgBgJQAAgJACgGQADgHAEgFQAEgFAGgDQAFgCAEAAQAEAAAGACIAHAGQACACABAFIABAIQAAAKgCAGQgCAGgFAHQgEAEgGACQgGADgEAAQgGAAgDgCgAgDgTQgEADgCAEIgEALIgBAKQAAAHADADQADAFAFAAQAEAAADgDQAEgDACgFQACgEACgGIABgLQAAgGgDgFQgDgDgGAAQgDAAgDADg");
	this.shape_2.setTransform(88.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#074095").s().p("AgYAqIgFgBIACgIIAEABIAFABIAFgBIADgCIADgEIAGgMIgBAAQgGgBgDgEQgEgFAAgGIgFgnIALgDIAFAuIABADIACABIABAAIAAAAIAVgyIAJADIgbBAQgDAJgEAEQgGAFgIAAg");
	this.shape_3.setTransform(82.5,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#074095").s().p("AgNAdQgFgCgCgDIgDgIIgBgJQAAgHACgIQAEgIADgEQAFgFAFgDQAFgCAEAAQAFAAAFACQAFADACADQADAEAAADQABAEAAAEQAAAIgCAIQgCAGgFAHQgFAEgFACQgGADgDAAQgGAAgEgCgAgDgTIgHAHIgDALIgBAKQAAAGACAEQAEAFAGAAQACAAAEgDQAEgDACgFQADgGAAgEIACgLQAAgGgDgFQgDgDgFAAQgEAAgDADg");
	this.shape_4.setTransform(76.7,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#074095").s().p("AgSAqIANhKIgXAAIACgJIA3AAIgCAJIgXAAIgLBKg");
	this.shape_5.setTransform(72.7,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#074095").s().p("AgaAcIAVgcIgLgbIAJgDIAHAYIABABIAAABIACgCIAQgYIAIADIgTAbIAMAcIgKACIgJgXIAAgCIgBgBIAAABIgBACIgRAYg");
	this.shape_6.setTransform(64.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#074095").s().p("AgUAaQgEgFgBgLQABgIACgHQACgHAFgHQAGgGAGgCQAFgDAHAAIAKABIAGACIgIAtIAFAJIgJAEIgFgIQgEAEgEACQgCACgGAAQgHAAgFgFgAAAgVQgDACgEAFQgEAGgBAFQgCAGAAAFIABAIIACAEIADACIAEABIAEgBIADgDIAEgEIACgHIAGgeIgHgBQgFAAgDACg");
	this.shape_7.setTransform(58.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#074095").s().p("AgcArIAOhIIgEgJIAJgEIAEAIQACgCADgEQAFgCAHAAQAHAAAFAFQAFAGAAAJQAAANgDAGQgDAHgFAFQgEAFgHADQgFACgFAAIgKgBIgFAZgAADghIgDADIgEAFIgDAHIgEAcIADABIAFABQADAAADgCQAFgCADgEQACgEADgFQACgIAAgHIgBgHIgCgEIgDgCIgEgBg");
	this.shape_8.setTransform(52.3,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#074095").s().p("AAXAeIAHgqQAAgEgBgDQgCgCgEAAIgGABIgEADIgEAFIgCAGIgGAkIgIAAIAGgiIABgEIAAgFIgBgFQgBgDgFAAIgEABIgFADIgEAEQgCAEAAADIgHAkIgKAAIAJguIgEgJIAJgEIAEAIIAIgGIAEgCIAFAAQAFAAADACQACACACAEIAHgFIAFgDIAFAAIAHABIAFADIADAFIAAAFIgIAtg");
	this.shape_9.setTransform(44.6,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#074095").s().p("AAHAdIAFgbIgXAAIgFAbIgLAAIALg6IAKAAIgEAZIAXAAIAEgZIALAAIgLA6g");
	this.shape_10.setTransform(36.9,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#074095").s().p("AgKAdQgEgBgDgDQgDgEgBgEQgBgDAAgFQAAgIACgFQADgIADgGQAFgGAFgDQAEgDAHAAIAIABIAFADIADAEIAAAFQAAAGgCAEQgCAFgEACQgDABgGABIgJACIgJAAIAAADQAAAIADAEQAEAEAFAAQAEAAADgBIAFgCIADAHIgIADQgDABgEAAQgGAAgEgCgAAAgVIgEAFQgCADgCAEIgDAIIANgBIAGgDQADgBABgDQACgCAAgEQAAgDgCgDQgCgCgEAAQgEAAgCACg");
	this.shape_11.setTransform(31.1,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#074095").s().p("AAMAlIACgPIgEgCIgCgEIgHAGQgDADgHgBIgHgBIgEgCQgDgDgBgDIgBgFIABgDIAAgDIAHgoIAKAAIgGAkIAAADIgBADIAAACQAAAIAIAAQAGAAADgEQAEgDACgJIAHgkIAJAAIgJAwQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIAEABIACAAIgDAVg");
	this.shape_12.setTransform(25.2,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#074095").s().p("AgaAcIAVgcIgLgbIAJgDIAHAZIACABIABgCIAQgYIAIADIgTAbIAMAcIgJACIgJgXIgCgCIAAgBIAAABIgSAag");
	this.shape_13.setTransform(17.2,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#074095").s().p("AgPAdIgGgCQgCgDAAgDIgBgFIAAgDIAAgDIAIgoIAKAAIgHAjIAAAEIgBADIAAACQAAAIAIAAQAGAAADgEQAEgDACgKIAGgjIALAAIgJAvIAEAJIgJAEIgEgIIgEADIgDADIgEABIgFABg");
	this.shape_14.setTransform(11.6,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#074095").s().p("AgBADIgIAAIgFAbIgKAAIALg6IAKAAIgFAZIAGAAQABAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIALgQQACgEAEgCQADgBADAAIACAGIgFACIgDADIgIAOQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgBACIANAcIgJACg");
	this.shape_15.setTransform(5.9,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#074095").s().p("AgSAdIgEgBIAKg5IAKAAIgEAbIAGgCIAHgBIAGABIAFACIADADQACADAAAEIgBAIQgBAEgDADQgEADgFACQgFACgIAAgAAAABIgHACIgEATIAIABIAGgBIAGgDIACgFIABgFQABgFgDgCQgCgCgFAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#074095").s().p("AgRAZQgGgHAAgKIACgNQACgHAEgGQAFgFAGgEQAFgDAIAAIAIABIAHADIgEAGIgFgCIgHgBQgGAAgCADQgDACgEAFIgEALIgBAJQAAAJADAEQAEADAFAAIAGgBIAGgCIACAHIgHADQgFABgDAAQgLAAgFgGg");
	this.shape_17.setTransform(-5,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#074095").s().p("AgbArIAMhIIgDgJIAJgEIAEAIQADgDACgDQAFgCAGAAQAIAAAFAFQAFAGgBAJQAAAKgCAJQgDAHgFAFQgFAFgGADQgEACgGAAIgKgBIgFAZgAACghIgCADIgEAFIgDAHIgEAcIADABIAFABQADAAADgCQAEgCADgEQAEgEACgFQACgIAAgHIgBgHIgBgEIgEgCIgEgBg");
	this.shape_18.setTransform(-11.4,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#074095").s().p("AgKAdQgFgBgCgDQgCgCgCgGIgBgIQAAgJACgEQACgIAEgGQAEgGAGgDQAEgDAHAAIAIABIAFADIADAEIAAAFQAAAGgCAEQgCAFgEACQgDABgGABIgJACIgJAAIAAADQAAAIADAEQADAEAGAAQADAAADgBIAGgCIADAHIgIADQgDABgEAAQgHAAgDgCgAAAgVIgEAFIgEAHIgDAIIANgBIAGgDQACgBACgDQABgCAAgEQAAgEgCgCQgBgCgEAAQgEAAgCACg");
	this.shape_19.setTransform(-16.8,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#074095").s().p("AgbAZQAFgEACgEQACgDADgHIAKgkIAhAAIgKA6IgKAAIAJgyIgRAAIgGAdQgCAHgDAGQgCAEgHAFg");
	this.shape_20.setTransform(-23,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#074095").s().p("AgQAdIgFgCIgDgGIAAgIIAAgDIAAgDIAHglIAKAAIgHAqIAAACQAAAIAIAAQAGAAADgEQAEgDACgKIAGgjIAKAAIgIAvIAEAJIgJAEIgEgIIgEADIgEADIgDABIgGABg");
	this.shape_21.setTransform(-28.7,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#074095").s().p("AgOApQgDgBgEgEQgCgDgBgFIgBgJQAAgHABgFIAFgKQAEgFAFgCQAEgDAGAAQAGAAAEADQAEADADAEIAAgCIAAgCIgBgKQAAgFgDgEQgBgDgEgEQgEgBgEAAIgGAAIgGABIgCgGIAHgCIAHgBQANAAAGAIQAHAJAAASIAAAIIgCALIgEAMQgCAFgEAFQgDADgFADQgFADgEAAQgHAAgEgCgAgGgDQgEADgCACIgCAJIgBAJIABAGIACAFQAAABAAAAQABAAAAABQABAAAAAAQABABAAAAQADABADABQADAAADgDQAEgEACgDQADgEAAgFIABgJQAAgHgDgCQgEgFgGAAQgDAAgDADg");
	this.shape_22.setTransform(-35.2,-1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#074095").s().p("AgaAcIAVgcIgLgbIAJgDIAIAZIAAABIACgCIAQgYIAIADIgTAbIAMAcIgKACIgIgXIgBgCIgBgBIAAABIgSAag");
	this.shape_23.setTransform(-43.1,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#074095").s().p("AgQAdIgFgCIgCgGIgBgFIAAgDIABgGIAAgDIAGgiIALAAIgIAnIAAADIgBACQABAIAIAAQAGAAADgEQADgDADgKIAHgjIAKAAIgJAvIADAJIgIAEIgEgIIgEADIgEADIgDABIgFABg");
	this.shape_24.setTransform(-48.6,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#074095").s().p("AAHAdIAFgbIgXAAIgGAbIgJAAIAKg6IAKAAIgEAZIAXAAIAFgZIAJAAIgKA6g");
	this.shape_25.setTransform(-55.1,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#074095").s().p("AgQAqIgFgDIgDgFIgBgGIAAgDIABgGIAAgCIAHgiIAKAAIgHAmIAAADIgBACQAAAIAJAAQAGAAADgEQADgDADgKIAHgiIAKAAIgJAuIADAJIgIAEIgEgIIgEADIgEADIgCACIgGABgAgGgeQgEgEgBgGIAHgCQABADACACQABACAFAAQAFAAADgCIAFgFIAHACQgEAIgFACQgFAEgGAAQgFAAgGgEg");
	this.shape_26.setTransform(-61.4,-1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#074095").s().p("AgLAqIAJgyIgHAAIACgIIAOAAIgIA6gAAAgbQAAgCAAgDQAAgEAAgDQACgCAEAAQADAAACACIABAFQAAAEgCACQgDADgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_27.setTransform(-66,-1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#074095").s().p("AALAlIADgPIgEgCIgCgEIgHAGQgDADgHgBIgHgBIgFgCIgDgGIAAgLIAHgoIAKAAIgHAqIAAACQAAAIAIAAQAGAAADgEQAEgDACgJIAGgkIAKAAIgJAwQAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAEABIACAAIgEAVg");
	this.shape_28.setTransform(-70.8,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#074095").s().p("AgLAqIAJgyIgHAAIACgIIAPAAIgJA6gAAAgbQAAgCAAgDQAAgDAAgEQADgCADAAQADAAABACIACAFQAAAEgCACQgEADgCAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_29.setTransform(-75.3,-1.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#074095").s().p("AgNA2IAFgdIgGAEQgDACgGAAQgHAAgFgFQgEgGAAgKQAAgKACgGQADgJAEgEQAFgGAFgDQAHgCAGAAIAEAAIADABIAEgYIAKAAIgFAdQACgCAEgCQADgCAGAAQAHAAAFAFQAEAGAAAJQAAAKgCAGQgCAHgFAHQgDAFgHADQgGADgHAAIgFAAIgDgBIgEAYgAALgTQgEAEgBAHIgGAfIAIABQAFAAADgCQAFgDACgEQAEgFABgGQABgEAAgJIAAgGIgCgEIgDgCIgEgBQgEAAgFADgAgPgVQgDACgEAEQgDAFgCAGQgCAEAAAJQAAAHADAEQADADAEAAIAFgBIADgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIACgFIAGgiIgDgBIgEAAQgEAAgEACg");
	this.shape_30.setTransform(-81.7,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#074095").s().p("AgOAdQgDgCgCgDQgDgCgCgGIAAgJQAAgHACgJQADgIAEgEQAFgFAFgCQAFgCAEAAQAHAAADABQAEADACADQADADABAEQABAFABAFQAAAIgEAHQgBAGgFAHQgEAFgGACQgGACgEAAQgFAAgFgCgAgEgUQgDADgCAFIgEAKIgBALQAAAGACAEQAEAFAFAAQAEAAADgDQAEgDACgFQADgGAAgEQACgEAAgGQAAgIgDgEQgDgEgGAAQgDAAgEADg");
	this.shape_31.setTransform(-89.4,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#074095").s().p("AgdAqIAPhTIAWAAQAKAAAGAFQAGAFAAAIQAAAIgEAFQgDAGgHAEQAGAAACAEQADAFAAAFQAAAHgCAGQgCADgFAFQgDADgHACQgFACgFAAgAgRAhIAQAAIAGgBIAGgDIAEgFQABgEAAgFIgBgGIgEgDIgFgDIgFAAIgNAAgAgKgEIAMAAQAEAAADgBIAFgEIAEgFQABgDAAgEQAAgFgEgDQgDgDgHAAIgKAAg");
	this.shape_32.setTransform(-98,-1.2);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101,-5.5,202.1,11.1);


(lib.t7_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BA2ED").s().p("AgrBEIgLgDIAIgUIAHADIAHAAQAGAAADgBQAEgCACgFIADgHQgMgCgGgGQgGgIgBgMIgKhEIAdgGIAJBHIACAHQABADAEAAIAghQIAbAFIgvBpQgCAGgEAGQgDAGgEADQgDADgHACQgGACgJAAQgHAAgGgCg");
	this.shape.setTransform(89.9,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1BA2ED").s().p("AgGAIIgNAAIgKA7IgdAAIAYiHIAeAAIgKA4IAHAAQACAAACgCIADgFIAXgkIAGgHQADgDAEgBIAIgCIALgBIAEASQgGABgDACIgFAFIgXAjIgFAGIAeBBIgcAHg");
	this.shape_1.setTransform(78.2,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BA2ED").s().p("AgfBDQgLgEgFgHQgGgHgDgKQgDgJAAgMQAAgSAFgPQAEgPAKgOQAJgMANgHQANgHANAAQANAAAKAEQALAFAFAGQAGAGAEALQADAKAAALQAAASgFAQQgEAPgKANQgJAMgNAHQgOAHgOAAQgMAAgKgEgAgGgqQgIAHgEAJQgEAHgEAOQgCAMAAAMQAAANAFAIQAFAIAKAAQAIAAAHgFQAHgGAFgJQAFgKACgMQADgMAAgMQAAgNgFgIQgFgIgLAAQgIAAgGAFg");
	this.shape_2.setTransform(65.4,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BA2ED").s().p("Ag3BEIAYiHIAsAAQAJAAAIADQAHABAHAFQAGAFADAGQADAHAAAJQAAAMgEAIQgDAKgIAEQgHAHgLAEQgKADgNAAIgQAAIgJAzgAgMgDIAMAAQALAAAIgHQAHgHAAgMQAAgIgEgFQgFgDgJAAIgNAAg");
	this.shape_3.setTransform(53,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BA2ED").s().p("AgnA5QgKgMAAgWIABgWQADgKADgJQAEgMAGgIQAFgJAIgHQAHgGAKgEQAIgEALAAQAKAAAJADQAJAEAFAEIgLARIgMgGIgMgBQgKAAgGAIQgJAJgFASIAFgCIAFgCIALgBQAJAAAGADQAFACAGAFQAEAFACAFIACAOQAAALgEAKQgDAKgHAHQgHAGgJAEQgKAEgIAAQgUAAgLgMgAgJABIgJADIgDAWQAAAKADAHQADAGAIAAQAHAAAGgHQAFgIAAgQQAAgIgDgGQgEgEgEAAg");
	this.shape_4.setTransform(38.5,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1BA2ED").s().p("AgqBEIAEgXIAaAAIAOhOQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBAAAAAAIgBABIgUANIgLgSIAegUIAIgFQAFgCAGAAQAIAAADAEQAEAEgBAFIAAAGIgSBdIAdAAIgEAXg");
	this.shape_5.setTransform(26.4,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1BA2ED").s().p("AgdBBQgHgEgFgHQgEgHgCgJIgBgSQAAgRADgNQAEgQAHgNQAIgNALgIQAMgIAOAAQAKAAAIAEQAHAEAFAGQAEAHACAJQACAHAAALQAAATgDANQgEASgHALQgHAMgMAJQgLAHgOAAQgMAAgIgEgAgCgpQgFAGgEAKQgEAJgDANIgCAYIABALIACAIIAEAGQACACAFAAQAGAAADgFQAFgFAEgJQADgJADgNQACgMAAgPQAAgMgDgIQgCgHgIAAQgHAAgCAGg");
	this.shape_6.setTransform(15.5,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1BA2ED").s().p("AgeBEQgFAAgEgBQgEgBgDgDIgDgFIAAgGIABgJQADgGAFgEIAygsIAGgHIAEgIIABgIQAAgEgEgFQgDgDgGAAIgIACIgRAIIgGADIgMgQIAKgGIAMgGIANgEQAEgCAJAAQAJAAAHADQAIACAEAEQAFAFACAFQADAHgBAFQABAHgDAIIgHALQgCAFgHAFIgwArIgBABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIA6AAIgEAXg");
	this.shape_7.setTransform(3.8,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1BA2ED").s().p("Ag6A1QAKgGAHgHQAHgHAEgKIAHgPQgIgDgEgHQgFgIAAgMQAAgMAFgJQAEgJAHgFQAHgHAKgCQAHgDALAAIAvAAIgXCHIgeAAIAKgzIgNAAIgEAKQgEANgKAMQgHAKgSAKgAgEgpQgGAEAAANQAAAJAFAEQAFAFAGAAIANAAIAHgpIgOAAQgKgBgGAHg");
	this.shape_8.setTransform(-10.9,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BA2ED").s().p("AAJBEIAKg8IgpAAIgKA8IgdAAIAXiHIAeAAIgJA2IApAAIAJg2IAeAAIgYCHg");
	this.shape_9.setTransform(-22.8,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1BA2ED").s().p("AgkBEIAVhwIgkAAIAEgXIBjAAIgEAXIgkAAIgSBwg");
	this.shape_10.setTransform(-33.7,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1BA2ED").s().p("Ag1BEIAXiHIArAAQAKAAAHACQAIACAFAEQAFAEADAHQADAGAAAHQAAALgGAJQgFAIgKAGQAJACAEAHQAEAHAAAJQAAALgEAJQgEAIgIAGQgHAEgLADQgLADgJAAgAgVAuIATAAIAIgBIAHgDQAEgEABgEQACgDAAgHQAAgEgBgDIgEgEQgCgDgEgBIgXAAgAgLgLIANAAQAKAAAHgGQAFgFAAgJQAAgHgDgEQgEgDgJAAIgNAAg");
	this.shape_11.setTransform(-45.6,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1BA2ED").s().p("AggBDQgKgEgFgHQgGgHgDgKQgDgJAAgMQAAgSAFgPQAEgPAKgOQAJgNANgGQANgHAOAAQAMAAAKAEQAKAEAGAHQAGAHADAKQAEAJAAAMQAAARgFARQgFARgJALQgKANgNAGQgNAHgOAAQgMAAgLgEgAgGgqQgIAGgEAKQgGALgBAKQgDAMAAAMQAAAOAFAHQAEAIAMAAQAHAAAHgFQAHgGAFgJQAFgKADgMQACgMAAgMQAAgMgFgJQgFgIgLAAQgIAAgGAFg");
	this.shape_12.setTransform(-57.9,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1BA2ED").s().p("AAbAIIgLAAIgKA7IgaAAIALg7IgLAAIgrA+IgbgHIAxhDIgDgGIgIgfQgBgEgDgDQgDgCgGgBIAGgSIAMABQAEAAAEACQAEACADADQADADABAGIAJAiIADAEQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIAHAAIAHg4IAcAAIgKA4IAEAAQAFAAAEgGIAWglIAGgHQADgDAEgBIAIgCIAKgBIAFATQgGAAgDACQgDABgCAFIgWAiIgFAFIAeBCIgcAHg");
	this.shape_13.setTransform(-73.1,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1BA2ED").s().p("AgjBCQgJgEgEgEIALgQQAMAHALAAQAFAAAFgBQAEgCACgEQAEgFACgGIAGgQQgDACgHABQgEACgHAAQgJAAgGgDQgHgDgEgFQgEgEgCgFQgCgIAAgGQAAgJADgLQAFgLAFgGQAFgHALgGQAKgEAJAAQAVAAAKANQALANAAAYIgCASQAAAHgEAMQgCAIgFALQgHALgFAFQgIAHgIAEQgIAEgMAAQgMAAgLgDgAgBgtQgEADgCAFQgDAEgBAGIgBALQAAAJADAFQAEADAFAAIAJgBQAEAAAEgBQADgLAAgOQAAgKgDgGQgDgGgHAAQgGAAgCADg");
	this.shape_14.setTransform(-90.5,11.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1BA2ED").s().p("AggBDQgKgEgFgHQgGgHgDgKQgDgJAAgMQAAgSAFgPQAEgPAKgOQAJgMANgHQANgHAOAAQAMAAAKAEQAJAEAHAHQAHAHACAKQAEAJAAAMQAAASgFAQQgGARgIALQgJANgNAGQgOAHgOAAQgMAAgLgEgAgGgqQgIAGgFAKQgEALgCAKQgDAMAAAMQAAAOAFAHQAFAIALAAQAHAAAHgFQAHgGAFgJQAEgKAEgMQACgMAAgMQAAgMgFgJQgFgIgLAAQgIAAgGAFg");
	this.shape_15.setTransform(64.7,-11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1BA2ED").s().p("AATBSIAFgbIg4AAIgFAbIgdAAIAJgzIAKAAQAFgEACgFIAMgYIAGgUIAQg6IBJAAIgUBvIAMAAIgJAzgAABgNQgDAQgEAJQgEAMgFAHIAhAAIARhZIgWAAg");
	this.shape_16.setTransform(51,-10.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1BA2ED").s().p("Ag6A1QALgHAGgHQAIgHAEgJIAGgPQgHgDgFgHQgFgIAAgMQAAgMAEgJQAFgKAHgFQAIgGAJgCQAIgDALAAIAvAAIgYCHIgdAAIAJgzIgOAAIgCALQgHAOgIAKQgJALgPAJgAgEgqQgGAGAAAMQAAAIAFAGQAEAEAIAAIAMAAIAHgpIgOAAQgLAAgFAFg");
	this.shape_17.setTransform(36.6,-11.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1BA2ED").s().p("AAJBEIAKg7IgpAAIgKA7IgeAAIAYiHIAeAAIgKA2IApAAIAKg2IAeAAIgYCHg");
	this.shape_18.setTransform(24.6,-11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1BA2ED").s().p("AgeBDQgKgFgEgHQgFgHgDgKQgCgIAAgMQAAgSAGgSQAGgSAJgKQAKgMANgGQAMgGANAAQAKAAAMADQAKADAIAHIgNATIgNgGQgFgCgJAAQgIAAgHAEQgGAFgFAJQgFAIgDAMQgDAKAAANIABANQAAAEADAGQACAEAFADQAEACAHAAQAGAAAHgCQAHgCAJgFIAIAUQgMAHgKADQgKADgMAAQgOAAgJgEg");
	this.shape_19.setTransform(13.2,-11.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1BA2ED").s().p("Ag1BEIAYiHIBTAAIgFAXIg1AAIgGAfIApAAIgEAWIgpAAIgGAkIA4AAIgEAXg");
	this.shape_20.setTransform(2.9,-11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1BA2ED").s().p("Ag3BEIAYiHIAsAAQAJAAAIACQAHACAHAFQAGAFADAGQADAHAAAJQAAAMgEAIQgDAKgIAEQgHAHgLADQgKAEgNAAIgQAAIgJAzgAgMgDIAMAAQALAAAIgHQAHgHAAgMQAAgJgEgEQgFgDgJAAIgNAAg");
	this.shape_21.setTransform(-8.5,-11.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1BA2ED").s().p("Ag1BEIAYiHIBTAAIgFAXIg1AAIgGAfIApAAIgEAWIgpAAIgGAkIA4AAIgEAXg");
	this.shape_22.setTransform(-19.2,-11.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1BA2ED").s().p("Ag2BEIAXiHIAsAAQALAAAGACQAGACAHAEQAFAFADAFQAEAHAAAIQgBAKgGAJQgGAJgJAFQAIACAFAHQAEAHAAAJQAAALgEAJQgEAHgIAGQgIAGgKACQgMADgIAAgAgVAvIATAAIAHgBIAIgFIAGgGQACgHAAgEQgBgEgBgDIgFgFQgCgBgDgBIgXgBgAgLgLIAOAAQAJAAAHgFQAFgGAAgJQAAgHgDgEQgEgDgIAAIgOAAg");
	this.shape_23.setTransform(-30.8,-11.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1BA2ED").s().p("AgDBDIADgeIgdAAQgKAAgEgEQgFgGAAgHQAAgFACgFIAIgKIA8hCIAZAAIgPBSIARAAIgEAVIgRAAIgFAegAgVAKIgBACIABADIAEABIAVAAIAJgsg");
	this.shape_24.setTransform(-45.9,-11.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1BA2ED").s().p("AgeBEQgFAAgFgCQgDAAgCgDQgCgCgCgDIgBgFQAAgGADgEQABgFAGgGIAxgrIAHgHIADgIQACgDAAgFQAAgFgEgDQgCgEgHAAIgIACIgQAIIgIAEIgKgRIAJgGIAMgGIANgEQAFgCAHAAQAJAAAIACQAIADAEAEQAFAFACAFQADAGAAAHQAAAGgDAHIgGAMIgJAKIgxArIgBABQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIA7AAIgFAXg");
	this.shape_25.setTransform(-57.4,-11.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1BA2ED").s().p("AgUBGIgOgEIgKgFIgJgGIAPgTQAIAGAIADQAIADAJAAQAIAAAHgEQAGgFABgLQgBgLgFgEQgHgEgGAAIgXAAIAFgUIAUAAQAHAAAEgCQAFgBADgEQADgDABgDIACgIQgBgIgEgEQgEgEgHAAQgHAAgHADIgQAGIgJgSIAVgJQAMgEANAAQAKAAAHADQAHADAEAEQAFAFADAGQABAFAAAHQAAANgFAIQgGAJgLAHQAGACAFAHQAFAHAAALQAAAJgEAJQgDAIgHAGQgGAGgKADQgKADgLAAQgJAAgHgBg");
	this.shape_26.setTransform(-71.7,-11.4);

	this.addChild(this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.4,-18.6,190.9,37.2);


(lib.t7_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#074095").s().p("Ag1BEIAWiHIAsAAQAKAAAGACQAJADAEADQAFADAEAIQAEAFAAAIQgBAKgGAKQgFAIgKAGQAIABAFAIQAEAHAAAJQAAAMgEAHQgFAIgIAHQgGAFgMADQgKACgJAAgAgVAvIATAAIAHgBIAIgFQADgDACgEQACgEAAgGQAAgEgBgDIgFgEQgCgCgDgBIgXgBgAgLgLIANAAQAKAAAHgGQAFgEAAgKQAAgGgEgEQgDgFgJAAIgNAAg");
	this.shape.setTransform(92.5,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#074095").s().p("AAJBaIANhMIgzA5IgDATIgdAAIAYiHIAeAAIgPBMIAzg3IADgVIAeAAIgYCHgAgGhAQgKgHgCgMIASgGQABAGACADQAEAEAHAAQAGAAAFgDQAEgFADgFIARAGQgFAPgKAFQgJAHgMAAQgNAAgGgIg");
	this.shape_1.setTransform(80.4,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#074095").s().p("Ag7BCIAyhxIAFgKIAEgHQAEgDAFgBQAFgCAHAAQAMAAAGAFQAGAGACAOIANBwIgdAEIgEgnIgqAAIgQAngAAOgoIgDAFIgSAtIAgAAIgEgsIgBgGQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABg");
	this.shape_2.setTransform(66.7,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#074095").s().p("Ag3BEIAYiHIAsAAQAJAAAJACQAGACAHAFQAHAFACAGQADAHAAAJQAAALgEAJQgCAIgJAGQgHAHgLADQgKAEgNAAIgQAAIgJAzgAgMgDIAMAAQAMAAAGgHQAIgHAAgMQAAgJgEgDQgFgFgJAAIgMAAg");
	this.shape_3.setTransform(57.1,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#074095").s().p("AASBSIAGgbIg4AAIgFAbIgdAAIAJgzIAKAAQAFgEACgFIAGgLIAchcIBJAAIgUBwIAMAAIgJAzgAABgNQgDAQgEAKQgEALgGAHIAiAAIAQhYIgVAAg");
	this.shape_4.setTransform(44.2,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#074095").s().p("AgdALIAEgVIA3AAIgEAVg");
	this.shape_5.setTransform(35.2,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#074095").s().p("AgkBEIAVhwIgkAAIAEgXIBjAAIgDAXIglAAIgSBwg");
	this.shape_6.setTransform(28.4,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#074095").s().p("AgeBDQgKgFgEgHQgFgHgDgKQgCgIAAgMQAAgSAGgSQAFgQAKgMQAKgMAMgGQANgGANAAQAKAAALADQALADAIAHIgNATIgNgGQgFgCgJAAQgIAAgHAEQgGAFgFAJQgFAIgDAMQgEAMAAALQAAAHACAGQABAGACAEQACADAFAEQAEACAHAAQAGAAAGgCQAIgCAJgFIAIAUQgMAHgKADQgKADgMAAQgOAAgJgEg");
	this.shape_7.setTransform(17.3,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#074095").s().p("Ag1BEIAYiHIBTAAIgFAXIg1AAIgGAfIApAAIgEAVIgpAAIgGAlIA4AAIgEAXg");
	this.shape_8.setTransform(6.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#074095").s().p("AgkBEIAVhwIgkAAIAEgXIBjAAIgEAXIgkAAIgSBwg");
	this.shape_9.setTransform(-3,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#074095").s().p("AgyBEIAYiHIAbAAIgHA2IAOAAQAKAAAHABQAIACAGAFQAGAEADAFQADAGAAAKQAAAXgOANQgOAMgZAAgAgRAvIAPAAQAJgBAIgFQAHgHAAgLQAAgGgCgDIgEgFQgBgCgEgBIgVAAg");
	this.shape_10.setTransform(-18.8,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#074095").s().p("AATBSIAEgbIg3AAIgFAbIgeAAIAJgzIALAAIAHgJIAHgLQADgHACgGIAWhPIBJAAIgUBwIAMAAIgJAzgAABgNQgDATgDAHQgEAJgGAJIAiAAIAQhYIgWAAg");
	this.shape_11.setTransform(-31.2,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#074095").s().p("AggBDQgKgEgFgHQgGgHgDgKQgDgJAAgMQAAgSAFgPQAEgPAKgOQAJgMANgHQANgHAOAAQAMAAAKAEQAJAEAHAHQAGAHADAKQAEAJAAAMQAAASgFAQQgFARgJALQgKANgMAGQgNAHgOAAQgNAAgLgEgAgGgqQgIAHgEAJQgFAKgCALQgDAMAAAMQAAAOAFAHQAFAIALAAQAHAAAHgFQAIgHAEgIQAFgKADgMQACgMAAgMQAAgNgFgIQgFgIgLAAQgIAAgGAFg");
	this.shape_12.setTransform(-42.8,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#074095").s().p("AABAVIgBgDQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgCABIgmA1IgagGIAvhCIgYg/IAbgGIASAzIACABIACgBIAjgzIAbAFIgtBBIAZBCIgcAFg");
	this.shape_13.setTransform(-54.9,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#074095").s().p("AggBDQgJgEgGgHQgGgHgDgKQgDgJAAgMQAAgSAFgPQAFgRAJgMQAKgNAMgGQANgHANAAQAMAAALAEQAKAFAGAGQAHAIACAJQAEAJAAAMQAAARgFARQgGARgIALQgKANgNAGQgMAHgPAAQgMAAgLgEgAgHgqQgGAFgFALQgGALgCAKQgCAMAAAMQAAAOAFAHQAEAIALAAQAIAAAHgFQAHgGAFgJQAFgKACgMQADgMAAgMQAAgNgFgIQgFgIgLAAQgIAAgHAFg");
	this.shape_14.setTransform(-66.9,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#074095").s().p("Ag3BEIAYiHIAsAAQAIAAAKACQAHACAGAFQAGAFADAGQADAHAAAJQAAAKgEAKQgDAIgHAGQgIAHgLADQgKAEgNAAIgQAAIgJAzgAgMgDIAMAAQAMAAAGgHQAIgHAAgMQAAgJgEgDQgGgFgIAAIgNAAg");
	this.shape_15.setTransform(-79.3,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#074095").s().p("AAJBEIAUhwIgpAAIgUBwIgeAAIAYiHIBlAAIgYCHg");
	this.shape_16.setTransform(-91.7,0.9);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98,-10.3,196,20.8);


(lib.t6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANCDIAUhuIhMBTIgEAbIgrAAIAkjFIAqAAIgUBvIBKhRIAGgeIArAAIgjDFgAgKhdQgNgLgEgSIAbgIQABAHAFAFQAFAFAKABQAKgBAGgEQAGgGAEgHIAaAIQgIAVgPAJQgOAJgRAAQgSAAgLgKg");
	this.shape.setTransform(72.4,-2.3,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBjIAUhsIhMBRIgEAbIgqAAIAjjFIAqAAIgUBvIBLhRIAFgeIAqAAIgjDFg");
	this.shape_1.setTransform(49.8,1.5,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBjIAOhXIg8AAIgQBXIgrAAIAjjFIArAAIgNBPIA9AAIANhPIAsAAIgjDFg");
	this.shape_2.setTransform(27.2,1.5,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANCDIAUhuIhMBTIgEAbIgrAAIAkjFIAqAAIgUBvIBKhRIAGgeIArAAIgjDFgAgKhdQgNgLgEgSIAbgIQABAHAFAFQAFAFAKABQAKgBAGgEQAFgFAFgIIAaAIQgIAVgPAJQgOAJgRAAQgSAAgLgKg");
	this.shape_3.setTransform(4.5,-2.3,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBjIAjjFIApAAIgjDFg");
	this.shape_4.setTransform(-11.8,1.5,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcB3IAHgnIhTAAIgHAnIgqAAIAMhJIARAAIAJgNIAKgQIAIgVIAIgcIAXhWIBtAAIgeCkIARAAIgMBJgAACgUQgGAagFANQgHAPgHAMIAyAAIAXiDIgeAAg");
	this.shape_5.setTransform(-29.2,3.8,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXBhIBIinIAIgNQAFgIADgDQAEgEAJgCQAHgDAKAAQASAAAIAIQAKAHACAVIATClIgrAGIgFg5Ig+AAIgYA5gAAUg8IgEAIIgbBEIAwAAIgGhDIgCgIQgBgDgDAAQgEAAgBACg");
	this.shape_6.setTransform(-51.8,1.5,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOBjIAPhXIg9AAIgQBXIgrAAIAjjFIArAAIgOBPIA9AAIAPhPIArAAIgjDFg");
	this.shape_7.setTransform(-72.2,1.5,1.2,1.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.3,-18.2,166.6,36.4);


(lib.t5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANCDIAUhuIhMBTIgEAbIgrAAIAjjGIArAAIgUBwIBKhQIAGggIArAAIgjDGgAgLheQgNgKgDgSIAbgJQAAAIAFAFQAGAFAJAAQALAAAFgEQAGgEAFgKIAaAJQgJAVgOAJQgOAJgRAAQgTAAgLgLg");
	this.shape.setTransform(99.8,-0.3,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBjIAUhsIhMBRIgEAbIgrAAIAkjGIAqAAIgUBwIBKhQIAGggIArAAIgjDGg");
	this.shape_1.setTransform(77.2,3.5,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBjIAPhXIg9AAIgPBXIgsAAIAjjGIArAAIgOBQIA+AAIAOhQIArAAIgjDGg");
	this.shape_2.setTransform(54.6,3.5,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABjIALhIIgPAEIgTABQgQAAgKgDQgKgEgGgFQgGgGgCgJQgCgHgBgJIABgLIAOhNIAqAAIgNBHIgBAMQABAHADAGQAFADAMAAIAPgBQAIAAAGgCIARhgIAqAAIgjDGg");
	this.shape_3.setTransform(33.5,3.5,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBjIAjjGIAoAAIgiDGg");
	this.shape_4.setTransform(17.1,3.5,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKBjIAjjGIByAAIgGAiIhHAAIgdCkg");
	this.shape_5.setTransform(4.7,3.5,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvBiQgNgFgJgLQgJgKgFgOQgEgPAAgRQAAgaAIgWQAGgYAOgSQAOgSASgKQATgLAUAAQATAAAPAGQAPAGAIAKQAJAKAFAPQAFAOAAARQAAAagHAYQgHAWgOAUQgNASgTAJQgUAKgVAAQgTAAgPgGgAgKg+QgLAJgGAOQgIANgDASQgDASAAASQAAATAHANQAHALAPAAQAMAAALgJQALgIAGgNQAHgNAEgUQAEgOgBgVQABgTgIgMQgIgMgPAAQgMAAgKAIg");
	this.shape_6.setTransform(-16.4,3.5,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AheBRIAPgPIAJgLIAIgPIAHgRIAhh9IB1AAIgkDGIgqAAIAdilIgmAAIggB2IgKASQgKARgXASg");
	this.shape_7.setTransform(-39.7,3.9,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBiQgOgFgKgLQgJgLgDgNQgFgPAAgRQAAgaAIgWQAGgYAOgSQAOgSASgKQATgLAVAAQASAAAOAGQAQAGAIAKQAJAKAFAPQAFAOAAARQAAAagHAYQgHAWgOAUQgNASgUAJQgSAKgXAAQgSAAgOgGgAgKg+QgKAJgHAOQgHANgDASQgFASAAASQABATAHANQAHALAPAAQAMAAAKgJQAMgIAGgNQAHgNAEgUQAEgOAAgVQAAgTgIgMQgIgMgQAAQgLAAgKAIg");
	this.shape_8.setTransform(-60.9,3.5,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAMIgSAAIgPBXIgqAAIAjjGIAqAAIgOBQIAKAAQAFAAADgDQADgCABgEIAig1QAEgGAEgEQAFgEAFgCQAGgDAGAAIAQgBIAGAaQgJACgEACQgEADgEAFIgkA3IgEAEIArBhIgpAJg");
	this.shape_9.setTransform(-82,3.6,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhOBjIAjjGIB6AAIgHAiIhPAAIgIAuIA9AAIgHAfIg7AAIgJA2IBSAAIgGAhg");
	this.shape_10.setTransform(-101.2,3.5,1.2,1.2);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.7,-16.2,221.5,32.4);


(lib.t4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANCEIAUhvIhMBUIgEAbIgrAAIAkjGIAqAAIgUBvIBLhRIAFgeIArAAIgjDGgAgKhdQgNgLgEgSIAbgJQABAIAFAFQAFAGAKgBQAKABAGgFQAGgEAEgKIAaAJQgIAVgPAJQgOAJgRAAQgSAAgLgKg");
	this.shape.setTransform(73.3,-0.3,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBkIAThtIhKBSIgFAbIgrAAIAjjGIArAAIgUBvIBKhRIAGgeIArAAIgjDGg");
	this.shape_1.setTransform(50.8,3.5,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBkIAPhYIg9AAIgQBYIgrAAIAjjGIArAAIgOBOIA9AAIAPhOIArAAIgjDGg");
	this.shape_2.setTransform(28.1,3.5,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKBkIAjjGIApAAIgMBNIAWAAQAOAAALADQALADAJAGQAIAGAFAIQAFALAAAOQAAAhgVASQgVATgkAAgAgaBEIAWAAQAPAAALgJQALgKAAgQQAAgHgDgGQgCgEgEgDQgDgDgFAAIgKgBIgVAAg");
	this.shape_3.setTransform(6,3.5,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheBRIAPgPIAJgMIAIgNQAEgIADgJIAhh9IB1AAIgjDGIgrAAIAeimIgnAAIgcBuIgNAbQgKARgYARg");
	this.shape_4.setTransform(-15.2,3.9,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANBkIAUhtIhMBSIgEAbIgrAAIAkjGIAqAAIgUBvIBLhRIAFgeIArAAIgjDGg");
	this.shape_5.setTransform(-36.2,3.5,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0BkIAdilIg1AAIAHghICSAAIgHAhIg0AAIgcClg");
	this.shape_6.setTransform(-55,3.5,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBiQgNgHgIgKQgHgLgEgOQgDgOAAgQQAAgeAIgXQAJgZAOgQQAMgRAVgJQAQgJAVAAQARAAAPAFQAPAFALAIIgSAcQgIgEgLgFQgJgDgMAAQgMAAgKAHQgIAHgJAMQgHAMgFASQgEARAAATQAAAKACAIQABAJADAGQAEAGAGAEQAGADAKAAQAKAAAKgDQAJgDAPgHIAMAdQgOAJgSAFQgTAFgPAAQgSAAgPgGg");
	this.shape_7.setTransform(-74.6,3.5,1.2,1.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.2,-16.2,168.6,32.4);


(lib.t3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANCDIAUhuIhMBTIgEAbIgrAAIAjjFIArAAIgUBvIBKhRIAGgeIArAAIgjDFgAgKhdQgNgLgEgSIAbgIQABAHAFAFQAFAFAKABQAKgBAFgEQAGgEAFgJIAaAIQgJAVgOAJQgOAJgRAAQgSAAgLgKg");
	this.shape.setTransform(95.2,-0.3,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBjIAUhsIhMBRIgEAbIgrAAIAkjFIAqAAIgUBvIBKhRIAGgeIArAAIgjDFg");
	this.shape_1.setTransform(72.6,3.5,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBjIAPhXIg9AAIgPBXIgsAAIAjjFIArAAIgOBPIA+AAIAOhPIArAAIgjDFg");
	this.shape_2.setTransform(49.9,3.5,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABjIALhIIgPADIgTACQgPgBgLgDQgKgCgGgHQgGgFgCgJQgDgHAAgJIACgMIANhLIAqAAIgNBHIgBALQABAIAEAEQAEAEANAAIAOAAQAIgBAGgDIARheIArAAIgkDFg");
	this.shape_3.setTransform(28.9,3.5,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANBjIAUhsIhMBRIgEAbIgrAAIAjjFIArAAIgUBvIBKhRIAGgeIArAAIgjDFg");
	this.shape_4.setTransform(6.3,3.5,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BjIAdikIg1AAIAHghICSAAIgGAhIg1AAIgcCkg");
	this.shape_5.setTransform(-12.6,3.5,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAMIgSAAIgPBXIgqAAIAjjGIAqAAIgOBQIAKAAQAFAAADgDQADgCABgEIAhg1IAJgKQAFgEAFgCQAGgDAGAAIAQgBIAGAaQgKACgDACQgEADgEAFIgkA3IgEAEIArBhIgpAJg");
	this.shape_6.setTransform(-33.2,3.6,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhXBhIBJinIAHgNQADgGAFgFQAEgEAJgCQAIgDAJAAQASAAAJAIQAIAHADAVIATClIgrAGIgFg5Ig+AAIgYA5gAAUg8IgEAIIgbBEIAwAAIgGhDIgCgIQgBgDgDAAQgDAAgCACg");
	this.shape_7.setTransform(-56.5,3.5,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhRBjIAjjFIBBAAQAOAAAMACQALADAJAHQAJAHADAJQAFALAAANQAAARgGAMQgGAOgKAIQgKAJgQAFQgRAGgSAAIgXAAIgNBKgAgSgGIASAAQAQABALgLQALgJAAgTQAAgMgGgGQgHgFgNgBIgUAAg");
	this.shape_8.setTransform(-73.4,3.5,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOBjIAdikIg9AAIgeCkIgrAAIAijFICVAAIgjDFg");
	this.shape_9.setTransform(-95,3.5,1.2,1.2);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.1,-16.1,212.3,32.3);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANCDIAUhuIhMBTIgEAbIgrAAIAjjGIArAAIgUBwIBKhQIAGggIArAAIgjDGgAgKheQgNgKgEgSIAbgJQAAAIAGAFQAFAGAKAAQAKAAAGgEQAGgHAEgHIAaAIQgJAVgOAJQgOAJgRAAQgSAAgLgLg");
	this.shape.setTransform(110.8,-2.4,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBjIAUhsIhMBRIgEAbIgrAAIAkjGIAqAAIgUBwIBKhQIAGggIArAAIgjDGg");
	this.shape_1.setTransform(88.2,1.5,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBjIAPhWIg9AAIgPBWIgsAAIAjjGIArAAIgOBQIA+AAIAOhQIArAAIgjDGg");
	this.shape_2.setTransform(65.5,1.5,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANCDIAUhuIhMBTIgEAbIgqAAIAjjGIAqAAIgUBwIBLhQIAFggIAqAAIgjDGgAgKheQgNgKgDgSIAagJQAAAIAGAFQAFAGAJAAQAMAAAEgEQAHgGAEgIIAaAIQgJAVgOAJQgOAJgRAAQgTAAgKgLg");
	this.shape_3.setTransform(42.8,-2.4,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBjIAkjGIApAAIgjDGg");
	this.shape_4.setTransform(26.6,1.5,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASB3IAHgnIhxAAIAijGIArAAIgdClIA5AAIAeilIAqAAIgdClIASAAIgNBIg");
	this.shape_5.setTransform(10.2,3.8,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXBhIBIimIAIgOQAEgHAEgEQAEgEAJgCQAHgDAKAAQARAAAJAIQAKAIACAVIATCkIgrAGIgFg4Ig+AAIgYA4gAAUg8IgfBLIAwAAIgGhCIgCgIQAAgBgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAQgEAAgBACg");
	this.shape_6.setTransform(-13.5,1.5,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPBjIAijGIBAAAQAOAAALADQAKADAJAGQAIAFAFAKQAEAJAAALQAAAQgJAOQgIAMgOAIQALACAHAMQAHAJgBAOQABARgHAMQgFALgMAJQgMAIgOAEQgRADgOAAgAgfBEIAcAAQAGAAAFgCQAHgCAEgDQAGgEACgHQADgGAAgJQAAgFgDgFQgCgEgDgDIgJgEIgKgBIgZAAgAgRgRIAVAAQAPAAAIgIQAJgJAAgMQAAgKgFgGQgGgFgMAAIgVAAg");
	this.shape_7.setTransform(-33.1,1.5,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBiQgOgFgKgLQgJgLgDgNQgFgOAAgSQAAgaAIgWQAGgXAOgTQAOgSASgKQATgLAVAAQASAAAOAGQAPAGAJAKQAJAJAFAQQAFAPAAAQQAAAZgHAZQgIAYgNASQgMARgVAKQgRAKgYAAQgRAAgPgGgAgKg9QgKAIgHAOQgHAOgDASQgFARAAASQAAATAIANQAGALARAAQALAAAKgIQALgJAHgNQAHgNAEgUQADgOABgVQAAgTgIgMQgHgMgRAAQgLAAgKAJg");
	this.shape_8.setTransform(-54.8,1.5,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOBjIAPhWIg9AAIgPBWIgsAAIAjjGIArAAIgOBQIA9AAIAPhQIArAAIgjDGg");
	this.shape_9.setTransform(-77.7,1.5,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOBjIAPhWIg9AAIgPBWIgsAAIAjjGIArAAIgOBQIA+AAIAOhQIArAAIgjDGg");
	this.shape_10.setTransform(-100.6,1.5,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmBjIAkjGIApAAIgjDGg");
	this.shape_11.setTransform(-117,1.5,1.2,1.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.7,-18.2,243.5,36.4);


(lib.t1_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BA2ED").s().p("AgcBUQgEgFAAgHQAAgKAGgIQAGgHAJAAQAJABACAFQAFAGAAAHQAAALgFAGQgHAGgIABQgIgBgFgFgAgXAeIASh2IAmAAIgcB2g");
	this.shape.setTransform(67,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1BA2ED").s().p("AhHBXIAfitIA4AAQAPAAAJACQAJADAIAGQAIAHADAHQAEAJAAAMQAAAOgFAMQgFAMgJAGQgHAHgRAGQgNAFgQAAIgUAAIgNBBgAgQgFIAQAAQAPAAAJgIQAKgJAAgQQgBgLgFgFQgGgFgLAAIgSAAg");
	this.shape_1.setTransform(55.5,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BA2ED").s().p("AhEBXIAeitIBrAAIgFAdIhFAAIgHAoIA0AAIgGAcIg0AAIgIAuIBIAAIgFAeg");
	this.shape_2.setTransform(41.8,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BA2ED").s().p("AhFBXIAditIA5AAQAOAAAHACQAKADAHAFQAHAFAEAIQAEAJAAAJQAAAOgIALQgHALgMAHQAKADAFAJQAHAKgBALQAAAOgFALQgHALgIAGQgJAHgPAEQgMADgOAAgAgbA8IAYAAQAFAAAGgCQAGgCADgDQAEgDADgGQACgFAAgIQAAgGgCgDQgBgDgEgDQgDgDgFgBIgJgBIgVAAgAgPgPIASAAQAMAAAJgHQAIgHgBgLQAAgJgEgFQgFgFgLAAIgSAAg");
	this.shape_3.setTransform(26.9,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BA2ED").s().p("AgoBWQgNgFgIgJQgHgJgEgNQgEgNAAgOQAAgXAGgTQAGgWAMgPQALgPARgKQARgJASAAQAPAAAOAFQAMAFAJAJQAJAKADAMQAEALAAAQQAAAXgGAVQgGAUgMAQQgMAQgRAJQgSAIgRAAQgSAAgLgFgAgJg2QgJAIgGAMQgGAPgDANQgDAOAAARQAAARAHAKQAFAKAOAAQAKAAAJgHQAJgHAGgMQAHgNADgPQADgOAAgRQABgSgHgKQgHgKgOAAQgKAAgJAHg");
	this.shape_4.setTransform(11,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1BA2ED").s().p("AgmBVQgMgFgHgJQgGgJgDgOQgDgMAAgOQAAgYAHgWQAHgVANgPQAMgPAQgIQAPgHATgBQAPAAAMAFQANAEAKAHIgPAZQgIgEgJgEQgJgCgJAAQgLAAgJAGQgHAFgHAMQgHALgEAPQgEALAAAUIABAQQACAHADAGQADAFAGADQAFAEAIAAQAIAAAKgDQAKgEALgGIAKAbQgMAHgQAFQgOAEgPABQgSAAgLgHg");
	this.shape_5.setTransform(-2.9,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1BA2ED").s().p("AgmBVQgMgFgHgJQgGgJgDgOQgDgMAAgOQAAgYAHgWQAHgVANgPQAMgPAQgIQAPgHATgBQAPAAAMAFQANAEAKAHIgPAZQgIgEgJgEQgJgCgJAAQgLAAgJAGQgHAFgHAMQgHALgEAPQgEALAAAUIABAQQACAHADAGQADAFAGADQAFAEAIAAQAIAAAJgDQAKgDAMgHIAKAbQgMAHgQAFQgOAEgPABQgSAAgLgHg");
	this.shape_6.setTransform(-16.1,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1BA2ED").s().p("AgpBWQgNgGgHgIQgIgKgDgMQgEgNAAgOQAAgXAGgTQAGgWAMgPQAMgQAQgJQARgJASAAQAPAAAOAFQALAEAKAKQAIAJAEANQAEANAAAOQAAAWgGAWQgGAUgMAQQgMAQgRAJQgRAIgTAAQgRAAgMgFgAgJg2QgJAIgGAMQgGANgDAPQgDAMAAATQAAARAGAKQAGAKAOAAQAKAAAJgHQAJgHAHgMQAGgMADgQQADgPAAgQQAAgSgGgKQgHgKgOAAQgKAAgJAHg");
	this.shape_7.setTransform(-32.4,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1BA2ED").s().p("AhHBXIAfitIA4AAQAPAAAIACQAKADAIAGQAIAHADAHQAEAJAAAMQAAAOgFAMQgFAMgJAGQgIAHgPAGQgOAFgRAAIgUAAIgLBBgAgQgFIAQAAQAPAAAJgIQAJgJAAgQQAAgLgFgFQgFgFgMAAIgSAAg");
	this.shape_8.setTransform(-48.3,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BA2ED").s().p("AgIAKIgQAAIgOBNIglAAIAfiuIAlAAIgMBGIAIAAQAFABACgDIAEgGIAdguIAIgJQADgDAFgCIALgDIAOgBIAGAYIgMACQgDADgEAFIggAwIgDAEIAlBUIgkAJg");
	this.shape_9.setTransform(-62.8,17.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1BA2ED").s().p("AAMBzIARhgIhCBJIgEAXIgmAAIAfitIAmAAIgSBiIBBhHIAFgbIAmAAIgfCtgAgJhSQgLgKgDgPIAXgHQABAHAEAEQAFAFAIAAQAJAAAFgEQAGgFADgHIAXAHQgIATgMAHQgMAIgPAAQgQAAgKgJg");
	this.shape_10.setTransform(79.7,-14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1BA2ED").s().p("AAMBXIAQheIhBBHIgEAXIgmAAIAfitIAmAAIgSBiIBBhHIAFgbIAlAAIgeCtg");
	this.shape_11.setTransform(63.2,-12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1BA2ED").s().p("AAMBXIANhMIg1AAIgOBMIglAAIAeitIAmAAIgMBFIA1AAIANhFIAmAAIgfCtg");
	this.shape_12.setTransform(46.6,-12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1BA2ED").s().p("AgmBWQgMgGgHgJQgHgLgCgLQgDgNAAgNQAAgZAHgWQAHgVAMgPQANgPAQgIQAPgHATAAQAPAAAMAEQANADAKAJIgQAYQgLgGgFgBQgIgDgKAAQgLAAgJAGQgIAGgHALQgGAKgEAQQgEAOAAARQAAAIABAIQACAIADAFQADAFAGAEQAFADAIAAQAIAAAJgDQAGgCAPgHIALAaQgOAHgOAFQgPAEgOAAQgRAAgMgFg");
	this.shape_13.setTransform(32,-12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1BA2ED").s().p("AhMBVIA/iSIAHgMQAEgGADgEQAEgDAHgCQAHgCAIAAQAQAAAHAGQAIAHACASIARCRIgmAFIgEgyIg2AAIgVAygAARg0IgDAHIgXA6IApAAIgFg5IgCgIQAAgBAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABg");
	this.shape_14.setTransform(15,-12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1BA2ED").s().p("AAABXIAKg/QgGACgHABIgRABQgNAAgKgDQgJgDgFgFQgFgFgCgHIgCgOIAMhNIAlAAIgKA+IgBALQAAAHADADQAEADALAAIAMAAIANgDIAPhTIAlAAIgfCtg");
	this.shape_15.setTransform(1.3,-12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1BA2ED").s().p("Ag3BYQgHgBgIgEIAKgaIAKAEIAIACQAHAAAFgDQAFgDADgGIAEgJQgQgBgHgJQgIgJgCgRIgMhXIAkgIIAMBbIACAKQACADAEAAIAqhnIAkAHIg9CIQgEAJgEAFQgCAGgHAGQgFAEgIACQgJADgJAAQgLAAgGgCg");
	this.shape_16.setTransform(-12.9,-12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1BA2ED").s().p("AgmBWQgMgHgHgIQgGgJgDgNQgDgNAAgNQAAgaAHgVQAHgVANgPQAMgOAQgJQAQgHASAAQAQAAALAEQAOAEAJAIIgPAYQgLgGgGgBQgIgDgKAAQgLAAgJAGQgHAFgHAMQgHAKgEAQQgEALAAAUIABAQQACAIADAFQADAEAGAFQAGADAHAAQAIAAAKgDQAGgCAPgHIAKAaQgNAHgPAFQgOAEgPAAQgRAAgMgFg");
	this.shape_17.setTransform(-27.2,-12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1BA2ED").s().p("AgpBWQgMgFgIgJQgIgJgDgNQgEgLAAgQQAAgXAGgUQAHgVALgPQANgQAPgJQARgJASAAQARAAALAFQANAFAJAJQAHAJAFANQAEANAAAOQAAAXgGAUQgGAXgMAOQgMAPgRAKQgPAIgVAAQgRAAgMgFgAgIg1QgJAGgHANQgGAMgDAQQgDANAAARQAAASAGAKQAGAKAOAAQALAAAIgHQAKgIAGgLQAGgOADgOQADgRABgOQAAgRgIgLQgFgKgPAAQgKAAgIAIg");
	this.shape_18.setTransform(-47.9,-12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1BA2ED").s().p("AhHBXIAfitIA4AAQAMAAALACQAKADAIAGQAHAFAEAJQAEAIAAANQAAAOgFAMQgFAMgJAGQgJAJgOAEQgQAFgPAAIgUAAIgMBBgAgQgEIAQAAQAPAAAJgJQAJgIAAgRQAAgKgFgGQgFgFgMAAIgSAAg");
	this.shape_19.setTransform(-63.8,-12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1BA2ED").s().p("AAMBXIAaiQIg2AAIgZCQIgmAAIAeitICCAAIgfCtg");
	this.shape_20.setTransform(-79.6,-12);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.7,-26.4,175.4,52.9);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#074095").s().p("AhKBFQANgKAIgIQAKgLAFgLIAIgTQgJgEgHgJQgGgLAAgPQAAgPAGgMQAFgKAJgJQAKgHAMgDQAMgEANAAIA8AAIgfCuIglAAIANhCIgSAAIgEAOQgIASgLANQgLAOgUAMgAgFg2QgIAHAAAQQAAALAGAGQAGAGAKAAIAPAAIAKg1IgSAAQgPAAgGAHg");
	this.shape.setTransform(92.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#074095").s().p("AAMBXIANhMIg1AAIgNBMIgnAAIAfitIAmAAIgMBFIA1AAIAMhFIAmAAIgeCtg");
	this.shape_1.setTransform(77.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#074095").s().p("AAMBXIANhMIg1AAIgOBMIglAAIAeitIAmAAIgNBFIA2AAIANhFIAmAAIgfCtg");
	this.shape_2.setTransform(60.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#074095").s().p("AhEBXIAeitIBrAAIgFAdIhGAAIgHAoIA1AAIgGAcIg0AAIgIAvIBIAAIgFAdg");
	this.shape_3.setTransform(45.9,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#074095").s().p("AhSBHIANgMIAIgLIAHgMQAEgJACgGIAdhuIBmAAIgfCuIglAAIAaiRIgiAAIgZBfIgCAIIgFAIQgBAEgDAEQgJAQgVAPg");
	this.shape_4.setTransform(30.1,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#074095").s().p("AhFBXIAditIA5AAQAKAAAMACQAKADAGAFQAHAFAEAIQAEAIAAAKQAAAOgIALQgHALgNAHQALADAFAJQAHAJAAAMQAAAPgHAKQgFALgJAHQgKAGgOAEQgNADgNAAgAgcA8IAZAAIALgCQAFgBAEgEQAEgDACgGQADgEAAgJQAAgFgCgEIgFgGIgIgDIgIgCIgWAAgAgOgPIARAAQANAAAIgHQAHgGAAgMQAAgJgEgFQgFgFgLAAIgSAAg");
	this.shape_5.setTransform(15.3,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#074095").s().p("AhKBFQALgIAKgKQAJgKAGgMIAIgTQgJgEgHgJQgFgLgBgPQABgQAFgLQAGgMAJgHQAHgHAOgDQANgEAMAAIA9AAIggCuIglAAIANhCIgSAAIgEAOQgHAQgMAPQgLAOgVAMgAgFg2QgJAHABAQQAAALAFAGQAIAGAIAAIAQAAIAJg1IgRAAQgOAAgHAHg");
	this.shape_6.setTransform(0.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#074095").s().p("Ag3BYIgPgFIAKgZIAKADIAIACQAIgBAFgCQADgCAFgHIADgJQgQgBgHgJQgHgIgDgSIgMhXIAkgIIAMBbIADAKQABADAFAAIAqhnIAjAHIg9CIQgDAHgFAIQgDAHgGAEQgGAFgHACQgHACgLAAQgKAAgHgCg");
	this.shape_7.setTransform(-12.5,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#074095").s().p("AALBXIARheIhBBHIgEAXIglAAIAeitIAmAAIgSBiIBBhHIAFgbIAmAAIggCtg");
	this.shape_8.setTransform(-33.1,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#074095").s().p("AAMBXIANhMIg1AAIgNBMIgnAAIAfitIAmAAIgMBFIA2AAIALhFIAmAAIgeCtg");
	this.shape_9.setTransform(-49.7,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#074095").s().p("AghBXIAfitIAkAAIgfCtg");
	this.shape_10.setTransform(-61.7,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#074095").s().p("AApBXIAPh3IgjA9QgEAIgHAFQgIAFgGAAQgJAAgGgGQgFgGgCgKIgLg4IgZB2IgjAAIAmitIAsAAIAPBYQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQACAAADgFIAuhWIAsAAIgVCtg");
	this.shape_11.setTransform(-76,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#074095").s().p("AgbBaIgQgFIgOgHIgLgIIATgYQALAJAJADQAKAEAMAAQAMAAAIgGQAJgGAAgPQAAgNgIgFQgIgFgKAAIgbAAIAEgaIAbAAQAIAAAHgDQAGgCADgEQAEgEACgFIACgKQAAgKgHgFQgFgFgIAAQgLAAgIAEIgVAIIgLgYIAcgLQANgFASAAQAOAAAIADQAKAFAGAFQAFAEADAJQADAIAAAIQAAAQgHALQgIAMgPAJQAJACAGAJQAGAKAAANQAAANgFALQgDAKgJAIQgJAIgMADQgMAEgQAAg");
	this.shape_12.setTransform(-93.1,0);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100,-9.2,200.1,18.5);


(lib.round2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83C9FD").s().p("AA9BLQgwgVgogLQg1gMgTgHQgfgKgGgPQgFgPAQgSQAQgTAdgNQBJgiBHAbQA+AYAKA+QAEAagIAUQgIAVgRAEIgJACQgPAAgWgLg");
	this.shape.setTransform(0,0,1.25,1.25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-10.8,34.6,21.6);


(lib.round1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BA2ED").s().p("AjJBiQhLgigrguQgpgrgCgwQFFgDE2hKQBQA4AJBCQAIBBhFAyQhTA8iUADIgPABQiJAAh3g1g");
	this.shape.setTransform(0,5.8,1.25,1.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83C9FD").s().p("AjJCQQh9g3gdhSQgdhQBTg8QBUg8CUgDQCRgDB9A4QB9A3AdBSQAeBPhUA8QhTA8iTAEIgQAAQiJAAh3g1g");
	this.shape_1.setTransform(0,0,1.25,1.25);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.4,-24.6,90.9,49.3);


(lib.pr = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtvRNMAAAgiZIbfAAMAAAAiZg");
	this.shape.setTransform(88,110.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176,220.3);


(lib.logoText1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGDA3IAAgSIhZAAIAAhZIANAAIAABPIAcAAIAAhPIANAAIAABPIAcAAIAAhPIAMAAIAABPIAIAAIAAAcgAhAA3IAAgSIg2AAIAAASIgMAAIAAgbIAGAAIAFgHQACgEACgFIADgLIAGg1IAwAAIAABQIAHAAIAAAbgAhoANIgDAIIgDAHIAnAAIAAhGIgZAAgAENAIIgkAAIgKAfIgKgCIAZhNQABgFADgFQADgDAGAAIAGAAIAEACIADAEIACAHIAaBNIgNACgAELAAIgNgnIgBgDIgCgBIgCABIgBADIgMAnIAfAAgAlbAIIgkAAIgKAfIgKgCIAYhNQADgHACgDQADgDAGAAIAGAAIAEACIADAEIAbBUIgMACgAleAAIgMgnIgBgDIgCgBIgCABIgOAqIAfAAgAnNAlIgMgHIAFgIQAGAEAFACQAIACAGAAQAKAAAFgEQAFgGAAgIIgBgHQgBgDgCgCQgDgBgDgBQgEgBgGAAIgOAAIAAgKIANAAQAGABADgCIAGgEIADgFIABgGQAAgIgFgEQgEgDgIAAIgMABIgLAEIgEgHIALgFIASgDQAIAAAFACQAGACACACQAEADABAFQACADAAAGIgBAIIgEAHIgFAEIgFAEQAEAAADADQADABACADQADACABACQABAEAAAFQAAAGgCAFQgBAEgFAEQgEAFgGABQgFACgJAAQgKAAgJgCgABlgDIgMAAIAAAoIgMAAIAAhZIAMAAIAAAnIAIAAQADABACgCQACAAABgFIAPgaQABgDADgCQADgCAFAAIAEAAIADABIgBAIIgCAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgDADIgPAcIgBABIAeAuIgMACgAiugDIgJAAIAAAoIgNAAIAAgoIgKAAIgdApIgMgCIAfgtIgBgCIgOgcIgDgEIgDAAIgCAAIgCAAIgBgIIAEgBIAEAAQAFAAACABQADADABADIANAaQACAEACABQABACAEgBIAFAAIAAgnIANAAIAAAnIAFAAQADABACgCQACAAABgFIANgaIAEgFQADgCAFAAIAEAAIAEABIgCAIIgCAAIgBAAIgEABIgCADIgNAaIgBACIgCACIAfAtIgMACgAGgAlIAAhZIA4AAIAAAKIgsAAIAAAcIAhAAIAAAKIghAAIAAAgIAuAAIAAAJgACbAlIAAhZIAoABQAGABAEADQAFAEACAFQACAFAAAIQAAAFgCAFQgCAGgEADQgEAEgFACQgHAAgHABIgQAAIAAAkgACngHIAOAAQAKAAAFgEQAGgFAAgJQAAgFgCgEQgBgEgDgCQgCgBgFgBIgIgBIgOAAgAASAlIAAg9IgoAyIAAALIgNAAIAAhZIANAAIAAA/IAogyIAAgNIAMAAIAABZgAk+AlIAAhZIAdAAQAHAAAFACQAFAAAEADQAEAEADAEQACAFAAAGQAAAFgDAGQgFAGgEABQAIAEAEAFQAEAFAAAIQAAAFgCAFQgDAGgDACIgKAGQgGABgGAAgAkxAcIASAAQAKAAAFgFQAEgEAAgIQAAgFgBgEIgFgCQgCgCgFgBIgYAAgAkxgNIARAAQAEABADgCQADgBACgCQADgCAAgDIABgGQAAgIgFgEQgEgDgKAAIgOAAg");
	this.shape.setTransform(0,0,0.496,0.495);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.5,-2.7,47,5.5);


(lib.logoText = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGDA3IAAgSIhZAAIAAhZIANAAIAABPIAcAAIAAhPIANAAIAABPIAcAAIAAhPIAMAAIAABPIAIAAIAAAcgAhAA3IAAgSIg2AAIAAASIgMAAIAAgbIAGAAIAFgHQACgEACgFIADgLIAGg1IAwAAIAABQIAHAAIAAAbgAhoANIgDAIIgDAHIAnAAIAAhGIgZAAgAENAIIgkAAIgKAfIgKgCIAZhNQABgFADgFQADgDAGAAIAGAAIAEACIADAEIACAHIAaBNIgNACgAELAAIgNgnIgBgDIgCgBIgCABIgBADIgMAnIAfAAgAlbAIIgkAAIgKAfIgKgCIAYhNQADgHACgDQADgDAGAAIAGAAIAEACIADAEIAbBUIgMACgAleAAIgMgnIgBgDIgCgBIgCABIgOAqIAfAAgAnNAlIgMgHIAFgIQAGAEAFACQAIACAGAAQAKAAAFgEQAFgGAAgIIgBgHQgBgDgCgCQgDgBgDgBQgEgBgGAAIgOAAIAAgKIANAAQAGABADgCIAGgEIADgFIABgGQAAgIgFgEQgEgDgIAAIgMABIgLAEIgEgHIALgFIASgDQAIAAAFACQAGACACACQAEADABAFQACADAAAGIgBAIIgEAHIgFAEIgFAEQAEAAADADQADABACADQADACABACQABAEAAAFQAAAGgCAFQgBAEgFAEQgEAFgGABQgFACgJAAQgKAAgJgCgABlgDIgMAAIAAAoIgMAAIAAhZIAMAAIAAAnIAIAAQADABACgCQACAAABgFIAPgaQABgDADgCQADgCAFAAIAEAAIADABIgBAIIgCAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgDADIgPAcIgBABIAeAuIgMACgAiugDIgJAAIAAAoIgNAAIAAgoIgKAAIgdApIgMgCIAfgtIgBgCIgOgcIgDgEIgDAAIgCAAIgCAAIgBgIIAEgBIAEAAQAFAAACABQADADABADIANAaQACAEACABQABACAEgBIAFAAIAAgnIANAAIAAAnIAFAAQADABACgCQACAAABgFIANgaIAEgFQADgCAFAAIAEAAIAEABIgCAIIgCAAIgBAAIgEABIgCADIgNAaIgBACIgCACIAfAtIgMACgAGgAlIAAhZIA4AAIAAAKIgsAAIAAAcIAhAAIAAAKIghAAIAAAgIAuAAIAAAJgACbAlIAAhZIAoABQAGABAEADQAFAEACAFQACAFAAAIQAAAFgCAFQgCAGgEADQgEAEgFACQgHAAgHABIgQAAIAAAkgACngHIAOAAQAKAAAFgEQAGgFAAgJQAAgFgCgEQgBgEgDgCQgCgBgFgBIgIgBIgOAAgAASAlIAAg9IgoAyIAAALIgNAAIAAhZIANAAIAAA/IAogyIAAgNIAMAAIAABZgAk+AlIAAhZIAdAAQAHAAAFACQAFAAAEADQAEAEADAEQACAFAAAGQAAAFgDAGQgFAGgEABQAIAEAEAFQAEAFAAAIQAAAFgCAFQgDAGgDACIgKAGQgGABgGAAgAkxAcIASAAQAKAAAFgFQAEgEAAgIQAAgFgBgEIgFgCQgCgCgFgBIgYAAgAkxgNIARAAQAEABADgCQADgBACgCQADgCAAgDIABgGQAAgIgFgEQgEgDgKAAIgOAAg");
	this.shape.setTransform(0,0,0.496,0.495);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.5,-2.7,47,5.5);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E64B3").s().p("AAnAgQgwgLgrgrQASgLATAAQAbAAAUAUQAUASABAdg");
	this.shape.setTransform(-52.9,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83C9FD").s().p("AgwAxQgUgVAAgcQAAgcAUgUQAVgUAbAAQAdAAATAUQAVAUAAAcQAAAcgVAVQgTAUgdAAQgbAAgVgUg");
	this.shape_1.setTransform(-54.5,46.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhECSQgdgNgSgXQgSgXgIgdQgHgdAAgdQAAgeAIgbQAIgdASgXQATgXAcgNQAdgOAmAAQApAAAcAOQAcANATAXQARAWAIAeQAIAeAAAbQAAAdgIAdQgJAdgSAXQgTAXgcANQgcAOgnAAQgoAAgcgOgAgdhRQgLAHgJALQgJANgDAPQgEASAAARQAAASAEARQADAPAJANQAIALANAHQALAHARAAQARAAAMgHQANgHAIgLQAIgMAEgQQAEgOAAgVQAAgUgEgPQgEgQgIgMQgIgLgNgHQgNgGgQAAQgPAAgOAGg");
	this.shape_2.setTransform(-27,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5CUQgegNgTgWQgTgWgHgeQgIgcAAghQAAgiAKgcQAMgeAVgVQAVgWAfgMQAfgMAkAAQAfAAAaAGQAbAIASAIIAJAEIgZBCIgjgNIgTgFIgRgCIgQAAQgkAAgUAWQgWAXAAAqQAAAtATAWQASAVAhAAQARAAAOgDQALgDAGgCIAAgnIg8AAIAAhFICMAAIAACVIgFADQgMAIgNAHQgRAHgNAEQgQAFgSACQgSADgQAAQgoAAgegMg");
	this.shape_3.setTransform(-57.6,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83C9FD").s().p("AAJBPQARh5hIgZQAPhWgSg/QgUhEg6gcQAlgLAiADQgBARAFAPQALAoAnAaQAkAZArgEQAOgCAPgFQAuBxgyCYQg3CliHBkQBTiBAOhyg");
	this.shape_4.setTransform(-5.3,-11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1BA2ED").s().p("AgaAmQgngagLgmQgFgPABgRQAiACAjANQA+AXAfBIQgPAFgOACIgMAAQgkAAgfgVg");
	this.shape_5.setTransform(-2.9,-37.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#83C9FD").s().p("AirC/QhShtgdhxQgehyAdhYQAfhcBXgmQBtgwCLBLQAhASBPAzQBDArAkAQQgnAhgUAKQgfAPgagNQiEhFhUAxQhLAqgRB1QgQBtAsB0QAuB5BZA9Qh6hPhWhxg");
	this.shape_6.setTransform(-71.7,-14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1BA2ED").s().p("AhQB7Qg4gMgug1Qgwg4gihgQCNBSCJgRQCOgRBthQQhWCHhcBCQhIA0g/AAQgQAAgQgEg");
	this.shape_7.setTransform(-40.8,33.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#074095").s().p("AjKD5QgegLgcgRQg+iVAPiTQAQifBigZQAugMApAWQANAHA4AtQApAiAkAIQA0ALBAgdQBjgsA4ARQgRBagwBcQgxBdhFBFQh4B4h4AAQgtAAgtgPg");
	this.shape_8.setTransform(-41.2,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BA2ED").s().p("Ah1AkQA+g0AigRQA8geBBAZQAHACAHAEQg3AQg8AsQgZAVggABIgEAAQgaAAghgOg");
	this.shape_9.setTransform(-30,-39.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0E64B3").s().p("AlXCUQgth0ARhuQARh0BLgrQBVgxCFBFQAaAOAegPQASgKAngiQAjAPAcgBQAggBAbgVQA9guA2gQQA6AcAUBDQASA/gPBXQg4gShjAsQhAAdg0gLQgkgIgrgiQg2gsgNgHQgpgWguALQhiAZgQCdQgPCVA+CVQhfg9gvh8g");
	this.shape_10.setTransform(-47.1,-9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0E64B3").s().p("AkqDDIAYAKQCoA7ChikQBFhFAyhdQAwhcAQhaQBLAZgRB7QgRBwhSCBQhtBPiMASQgYADgXAAQhiAAhlgyg");
	this.shape_11.setTransform(-34,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#83C9FD").s().p("AgkgBQgjgNgigCQACgfAVgUQAVgVAigEQAogEAnAZQAmAaAMAoQAJAfgMAcQgNAbgdANQgfhKg+gVg");
	this.shape_12.setTransform(-0.4,-41.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#074095").s().p("AAhBJIgEgBIAAgCIADgMIACgEIicAAQgHAAgBgCQgBgCABgGIABgEQACgJADgDQACgEAJgGIADgCQBMgyA7ggQANgGALAAIBEAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABACAAADIgZBbIAfAAIACABIABADIgEAUQgBADgHAAIgdAAIgBACIgEAPQgBADgEAAgAA4gvQg1AYg9ArIgIAGIBsAAIAVhLg");
	this.shape_13.setTransform(87.6,20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#074095").s().p("AhkBJQgHAAgDgCQgFgDgCgKIgPh8QAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQACgBAEAAIAlAAQAGAAABAFIALBjQABAMAMAAQAJAAAEgDIB8huQAFgDAFAAIArAAIgCACIiZCGIgBABQgJAIgLAAg");
	this.shape_14.setTransform(67.6,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#074095").s().p("ADBBJQgEAAAAgFIgCgcQgBgMgLAAIhnAAQgFAAgDACIgoAnQgEAEgEAAIhFAAQgIAAgGgEIhSgvQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgKAAQgDAAgCADIgUAuIAAABQgCADgCAAIgyAAIA3iIQADgGADgCIAIgBICUAAQATAAANAHQATAKAAAUQAAAJgGALQgHAOgMAFQgVANgWAAIgpAAIAyAeQAJAFAHAAQAHAAAHgGIB5hqQAOgMAUAAIBCAAQAIAAAAAIIASCEQAAABgBAAQAAABAAABQAAAAAAABQAAAAAAAAIgEABgACQgoQgIADgcAcIgCACQgEACACADQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIBHAAQAFAAAAgFIgCgZQAAgLgLgBIgCAAIgLgBQgJAAgFADgAibgJIBpAAQAJAAAIgEQALgFABgLQAAgGgDgEQgEgEgHAAIhqAAg");
	this.shape_15.setTransform(28.9,20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#074095").s().p("AhOBIIAAiQIBnAAQAwABAEAnQAFAigEAcQgHAqgvAAgAggAqIAiAAQASAAAIgGQAGgFABgNIAAgBQABgTgCgQQgBgNgGgGQgGgFgNAAIgoAAg");
	this.shape_16.setTransform(93.5,2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#074095").s().p("AgYBJIAAiRIAxAAIAACRg");
	this.shape_17.setTransform(80.2,2.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#074095").s().p("AAjBJIgIgtQgCgLgPAAIgsAAIAAA4IgtAAIAAiQIB8AAQARgBAGAGQAHAGAAAPIAAAbQAAAMgDAEQgDADgLACQAKAEACAMIAKA2gAgigKIA0AAQAIAAACgDQADgCAAgHIAAgKQAAgMgLAAIg2AAg");
	this.shape_18.setTransform(67.5,2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#074095").s().p("AhPBIIAAiPIB/AAQATAAAGAGQAGAFAAANIAAAXQAAAKgDAFQgDAGgLACQASACAAATIAAAbQAAAZgjAAgAgjAqIA7AAQAMAAAAgKIAAgMQAAgJgMAAIg7AAgAgjgQIA7AAQALAAAAgKIAAgIQAAgFgCgCQgDgCgHAAIg6AAg");
	this.shape_19.setTransform(49.1,2.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#074095").s().p("AgWBIIAAg4IhGhXIAxAAIArA6IAsg6IAxAAIhFBXIAAA4g");
	this.shape_20.setTransform(31.2,2.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#074095").s().p("AAnBIIAAg6IhNAAIAAA6IgtAAIAAiQIAtAAIAAA3IBNAAIAAg3IAtAAIAACQg");
	this.shape_21.setTransform(13,2.8);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.5,-53.1,203.1,106.3);


(lib.log = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.l();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,55);


(lib.img5_1 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#368AB0").s().p("AkJCaIAAkzIITAAIAAEzg");
	this.shape.setTransform(-141.7,-162);

	// Слой 1
	this.instance = new lib.img5();
	this.instance.setTransform(-220,-147);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-220,-177.5,440,325.5);


(lib.img4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img4();
	this.instance.setTransform(-220,-166);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-220,-166,440,333);


(lib.img3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img3();
	this.instance.setTransform(-220,-161);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-220,-161,440,322);


(lib.img2_1 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDF2F3").s().p("AjOCWIAAkrIGcAAIAAErg");
	this.shape.setTransform(-183.4,-178.7);

	// Слой 1
	this.instance = new lib.img2();
	this.instance.setTransform(-220,-168);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-220,-193.8,440,361.8);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-200,-164);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#235169").s().p("A/OHCIAAuCMA+dAAAIAAOCg");
	this.shape.setTransform(0,-150.7);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200,-195.7,400,359.7);


(lib.logo_1 = function() {
	this.initialize();

	// Layer 2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1192C").s().p("AAnBjQgogpAAg6QAAg5AogqQApgpA8gBQA6ABApApQAqAqABA5QgBA6gqApQgpAqg6ABQg7gBgqgqgABTg+QgXAaABAkQgBAkAXAbQAXAaAiABQAggBAXgaQAXgbAAgkQAAgkgXgaQgXgbggABIgBAAQghAAgXAagAoFBjQgpgpAAg6QAAg5ApgqQAqgpA7gBQA6ABAqApQApAqABA5QgBA6gpApQgqAqg6ABQg7gBgqgqgAnYg+QgXAaAAAkQAAAkAXAbQAXAaAhABQAggBAXgaQAXgbAAgkQAAgkgXgaQgXgbggABIgBAAQghAAgWAagALYCGIgXg8IhsAAIgXA8IhHAAIBwkHIBLAAIBtEHgAJnAeIBLAAIglhggAF/CGIAAjXIhWAAIAAgwIDkAAIAAAwIhSAAIAADXgAipCGIAAhlIhpiiIBHAAIBABwIBDhwIBEAAIhpCiIAABlgArLCGIAAjXIhTAAIAAgwIDhAAIAAAwIhTAAIAADXg");
	this.shape_22.setTransform(-0.8,70.7);

	this.addChild(this.shape_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.7,56.5,159.9,28.5);


(lib.bottom = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#074095").s().p("AyvFyIAAoLQFriJIrhPQHWBNIpgOQEUgHC2gXIAALCg");
	this.shape.setTransform(0,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E64B3").s().p("AyvGaIAAoMQFriIIlhPQI1hQKEAAQCcAAB6AEIAAMvg");
	this.shape_1.setTransform(0,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83C9FD").s().p("AyvIFIAAwJQJGE/PFAkQEvALExgTQCYgJBcgLIAALCg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-51.7,240,103.5);


(lib.bgBlue = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A0F0").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.ALWAYS_mc = function() {
	this.initialize();

	// red
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A0F0").s().p("ADsAXIgEgFIgEgDIgEgCIgEgBIgFAAIAAAoIgWAAIAAhqIAoAAQAJAAAGACQAHABAFAEQAFAEADAGQADAFAAAJQAAAGgCAFIgFAJIgHAFQgEADgFABIAEAEIAFAEIAXAcIgRANgADXgEIAPAAQAIAAAFgEQAFgEAAgIQAAgFgBgDQgCgDgCgCIgGgCIgHAAIgPAAgABiA0IAAhqIBNAAIAAATIg4AAIAAAXIArAAIAAARIgrAAIAAAcIA6AAIAAATgAAeA0IAAhXIgeAAIAAgTIBVAAIAAATIggAAIAABXgAg8A0IAAhXIgfAAIAAgTIBWAAIAAATIggAAIAABXgAizA0IAAhqIBOAAIAAATIg3AAIAAAXIAqAAIAAARIgqAAIAAAcIA5AAIAAATgAkXA0IAAhqIAqAAQAIAAAGACQAIABAFADQAEAEADAFQADAFAAAIQAAAIgEAFQgDAGgGADIAHAEIAGADQACADACAFQABAEAAAFQAAAIgCAGQgDAGgFAEQgFAEgHACQgHACgJAAgAkCAiIAYAAIAGgBQADgBACgCIAEgEQABgDABgDQgBgFgBgCQgCgDgDgCIgGgCIgIgBIgUAAgAkCgKIATAAQAHAAAFgDQAEgDAAgHQAAgHgEgDQgGgCgKAAIgPAAg");
	this.shape.setTransform(31.2,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6A8A9").s().p("AFWBuIgqAAIgKAhIgVgFIAahWIADgJIAGgHQACgCAGgCQAEgBAHAAIAKABIAIAEQADADABADIAEAJIAaBXIgXAFgAE+AzIgCAEIgLAkIAgAAIgKgkIgDgEIgCgBIgEABgADOCOQgGgCgFgDIgLAFQgFABgHAAQgJAAgFgCQgGgCgFgEQgDgEgCgGIgEgMIgJhPIAWgDIAKBOQABAIACADQAEADAGAAIAFAAIAFgCIAAhYIAXAAIAABYIAEACIAFAAQAGAAADgDQAEgDABgIIAJhOIAWADIgJBPIgDAMQgDAGgEAEQgEAEgFACQgHACgIAAQgHAAgFgBgAGgCNIAAglQgGgCgEgFIgHgMIgVguIAUgIIAXAxIADAEIAEABIAEgBIACgEIAXgxIAUAIIgUAsQgEAIgEAGQgEAFgGACIAAAlgAEYg/IgrAAIgKAhIgVgFIAahWIADgJIAGgHQADgCAFgCQAFgBAGAAIAKABIAIAEQADADABADIAEAJIAbBXIgXAFgAEAh6IgDAEIgKAkIAgAAIgLgkIgCgEIgDgBIgDABgABsgeIgLgDIgKgCIgHgDIAHgTQAJAEAJACIARACQALAAAGgEQAGgEAAgGQAAgEgCgCQgBgDgEgBIgGgDIgKgCIgOgDQgGgCgFgDQgFgEgEgFQgDgGAAgIQAAgHADgGQACgGAFgFQAGgEAIgDQAJgCALAAQAMAAAJACIARAFIgFASIgSgEQgIgCgIAAQgKAAgEADQgGADAAAGIABAFIAFAEIAGACIAJACIAOAEQAHABAGAEQAFAEAEAGQADAFABAJQAAAIgEAHQgDAGgGAFQgGAEgIADQgJACgLAAIgOAAgAg5g/IgqAAIgKAhIgWgFIAahWIAEgJIAFgHQADgCAFgCQAEgBAHAAIAKABIAIAEQADADACADIADAJIAaBXIgWAFgAhRh6IgCAEIgLAkIAgAAIgKgkIgDgEIgDgBIgDABgAjCgfQgGgCgFgDIgKAFQgGABgGAAQgJAAgGgCQgGgCgEgEQgEgEgCgGIgDgMIgJhPIAVgDIAKBOQABAIADADQADADAHAAIAEAAIAGgCIAAhYIAWAAIAABYIAFACIAFAAQAFAAAEgDQADgDABgIIAJhOIAXADIgKBPIgDAMQgCAGgEAEQgEAEgGACQgGACgIAAQgHAAgGgBgAmSg/IgrAAIgKAhIgVgFIAahWIADgJIAGgHQADgCAFgCQAFgBAGAAIAKABIAIAEQADADABADIAEAJIAbBXIgXAFgAmqh6IgDAEIgKAkIAgAAIgLgkIgCgEIgDgBIgDABgAAPggIAAglQgHgCgDgFIgFgMIgVguIAUgIIAUAxIAEAEIADABIAEgBIADgEIAWgxIAUAIIgUAsQgEAIgEAGQgEAFgGACIAAAlgAllggIAAhsIAWAAIAABZIA5AAIAAATg");
	this.shape_1.setTransform(50,20.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.9,41);


(lib.logo_ = function() {
	this.initialize();

	// ЗАВЖДИ КРАЩЕ
	this.instance = new lib.log();
	this.instance.setTransform(0.5,42.5,1,1,0,0,0,40,27.5);

	// ALWAYS A BETTER WAY
	this.instance_1 = new lib.ALWAYS_mc("synched",0);
	this.instance_1.setTransform(-0.4,187.3,1,1,0,0,0,49.8,21.3);

	// logo
	this.instance_2 = new lib.logo_1();
	this.instance_2.setTransform(0.5,42,0.582,0.581);

	// Слой 2
	this.instance_3 = new lib.pr();
	this.instance_3.setTransform(0,106.5,0.693,0.967,0,0,0,88,110.1);

	// Layer 5
	this.instance_4 = new lib.pr();
	this.instance_4.setTransform(0,106.5,0.693,0.967,0,0,0,88,110.1);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0), new cjs.BlurFilter(4, 4, 1)];
	this.instance_4.cache(-2,-2,180,224);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-2,130,221);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.setTransform(0,238,1.224,1.225);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(419).to({_off:false},0).to({alpha:1},10).wait(36).to({alpha:0},10).wait(1));

	// logoTxt
	this.instance_1 = new lib.logoText1();
	this.instance_1.setTransform(103.2,-169.1,1.4,1.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(404).to({_off:false},0).to({scaleX:4.16,scaleY:4.16,x:0.2,y:79.5,alpha:1},15).wait(46).to({scaleX:1.4,scaleY:1.4,x:103.2,y:-169.1,alpha:0},10).wait(1));

	// logoTxt
	this.instance_2 = new lib.logoText();
	this.instance_2.setTransform(103.2,-169.1,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(404).to({scaleX:4.16,scaleY:4.16,x:0.2,y:79.5},15).wait(46).to({scaleX:1.4,scaleY:1.4,x:103.2,y:-169.1},10).wait(1));

	// logoZnack
	this.instance_3 = new lib.logo_("synched",0);
	this.instance_3.setTransform(138,-299.9,0.574,0.574,0,0,0,60.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(404).to({startPosition:0},0).to({regX:61,scaleX:1.71,scaleY:1.71,x:104},15).wait(46).to({startPosition:0},0).to({regX:60.8,scaleX:0.57,scaleY:0.57,x:138},10).wait(1));

	// bg
	this.instance_4 = new lib.bgBlue();
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(394).to({_off:false},0).to({alpha:1},10).wait(61).to({alpha:0},10).wait(1));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.setTransform(0,0,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.2,scaleY:1.2},10,cjs.Ease.get(1)).wait(24).to({y:-117},10,cjs.Ease.get(-1)).wait(251).to({y:-114.5},0).wait(1).to({y:-106.7},0).wait(1).to({y:-94.1},0).wait(1).to({y:-77.5},0).wait(1).to({y:-58.8},0).wait(1).to({y:-39.9},0).wait(1).to({y:-23.3},0).wait(1).to({y:-10.5},0).wait(1).to({y:-2.7},0).wait(1).to({y:0},0).to({_off:true},100).wait(72));

	// t7_4
	this.instance_6 = new lib.t7_4();
	this.instance_6.setTransform(268.9,181.1,1.2,1.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(349).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:-270.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(81));

	// t7_3
	this.instance_7 = new lib.t7_3();
	this.instance_7.setTransform(-275.7,249,1.2,1.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(304).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(70).to({x:271.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(81));

	// t7_2
	this.instance_8 = new lib.t7_2();
	this.instance_8.setTransform(269,183.5,1.2,1.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(304).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:-270},10,cjs.Ease.get(-1)).to({_off:true},1).wait(126));

	// t7_1
	this.instance_9 = new lib.t7_1();
	this.instance_9.setTransform(-275.7,141.4,1.2,1.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(304).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(70).to({x:271.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(81));

	// t6
	this.instance_10 = new lib.t6();
	this.instance_10.setTransform(-235.7,259.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(239).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:234.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(191));

	// t5
	this.instance_11 = new lib.t5();
	this.instance_11.setTransform(260.7,259.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(194).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:-261.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(236));

	// t4
	this.instance_12 = new lib.t4();
	this.instance_12.setTransform(-235.7,259.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(149).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:234.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(281));

	// t3
	this.instance_13 = new lib.t3();
	this.instance_13.setTransform(260.7,259.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(104).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:-261.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(326));

	// t2
	this.instance_14 = new lib.t2();
	this.instance_14.setTransform(-280,259.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(59).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:280},10,cjs.Ease.get(-1)).to({_off:true},1).wait(371));

	// t1_2
	this.instance_15 = new lib.t1_2();
	this.instance_15.setTransform(260,161.4,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:0},10,cjs.Ease.get(1)).wait(24).to({x:-280},10,cjs.Ease.get(-1)).to({_off:true},1).wait(431));

	// t1_1
	this.instance_16 = new lib.t1_1();
	this.instance_16.setTransform(-275,111.9,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:0},10,cjs.Ease.get(1)).wait(24).to({x:280},10,cjs.Ease.get(-1)).to({_off:true},1).wait(431));

	// round2
	this.instance_17 = new lib.round2();
	this.instance_17.setTransform(117.8,-30,0.014,0.023);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(69).to({_off:false},0).to({regY:-0.1,scaleX:1.2,scaleY:1.2},10,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,y:-29.9},5).wait(200).to({scaleX:0.01,scaleY:0.02,y:-30},10,cjs.Ease.get(-1)).to({_off:true},1).wait(181));

	// round1
	this.instance_18 = new lib.round1();
	this.instance_18.setTransform(92.1,1,0.01,0.01);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(59).to({_off:false},0).to({scaleX:1.2,scaleY:1.2},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(210).to({scaleX:0.01,scaleY:0.01},10,cjs.Ease.get(-1)).to({_off:true},1).wait(181));

	// white
	this.instance_19 = new lib.white();
	this.instance_19.setTransform(0,183.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(44).to({_off:false},0).to({y:-176.7},15,cjs.Ease.get(1)).wait(225).to({y:183.9},16,cjs.Ease.get(-1)).to({_off:true},1).wait(175));

	// bottom
	this.instance_20 = new lib.bottom();
	this.instance_20.setTransform(0,234.6,1.25,1.25);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(44).to({_off:false},0).to({_off:true},257).wait(175));

	// img4
	this.instance_21 = new lib.img5_1();
	this.instance_21.setTransform(-14,85,0.818,0.818);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(234).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,x:-14.1,alpha:1},10).to({scaleX:1,scaleY:1,x:-15},56).to({_off:true},1).wait(175));

	// img4
	this.instance_22 = new lib.img4_1();
	this.instance_22.setTransform(-1,75,0.795,0.795);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(189).to({_off:false},0).to({scaleX:0.83,scaleY:0.83,x:4.1,y:70.8,alpha:1},10).to({scaleX:1,scaleY:1,x:27,y:52},45).to({_off:true},1).wait(231));

	// img3
	this.instance_23 = new lib.img3_1();
	this.instance_23.setTransform(5,75,0.818,0.816);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(144).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,x:6,y:77,alpha:1},10).to({scaleX:1,scaleY:1,x:10.6,y:86.1},45).to({_off:true},1).wait(276));

	// img2
	this.instance_24 = new lib.img2_1();
	this.instance_24.setTransform(0,82.7,0.75,0.75);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(99).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,x:7.3,y:83.5,alpha:1},10).to({scaleX:1,scaleY:1,x:40,y:87},45).to({_off:true},1).wait(321));

	// img1
	this.instance_25 = new lib.img1_1();
	this.instance_25.setTransform(0,84,0.75,0.75);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,x:7,y:67},65).to({_off:true},1).wait(366));

	// bg
	this.instance_26 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(476));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395,-301.9,760.3,601.9);


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
p.nominalBounds = new cjs.Rectangle(-95.1,298.1,760.3,602.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;