(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/blick.jpg", id:"blick"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.png", id:"img4"},
		{src:"images/img5.jpg", id:"img5"}
	]
};



// symbols:



(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,907,600);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,337);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,337);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,336);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,337);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,674,600);


(lib.urTextMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAqIAngtQAEgGAAgHQAAgHgEgFQgFgEgHAAQgHAAgFAHQgDAEAAAGIgJAAQAAgLAGgGQAHgJALAAQALAAAHAHQAIAHgBALQABAJgHAHIgMAOIgPATIAhAAIAAAJg");
	this.shape.setTransform(129.8,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAeQgIgMAAgSQAAgSAIgLQAJgMALAAQAMAAAJAMQAIAMAAARQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgOgGgJQgGgKgIAAQgHAAgGAKg");
	this.shape_1.setTransform(123.4,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAeQgIgMAAgSQAAgRAIgMQAJgMALAAQAMAAAJAMQAIALAAASQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgOgGgJQgGgKgIAAQgHAAgGAKg");
	this.shape_2.setTransform(116.7,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAlIAthGIgsAAIAAgIIA8AAIg2BTg");
	this.shape_3.setTransform(110.3,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAqIAmgtQAEgHAAgGQAAgHgEgFQgFgEgHAAQgIAAgEAHQgDAEAAAGIgJAAQAAgLAGgGQAIgJAKAAQALAAAHAHQAHAHAAALQAAAJgGAHIgbAhIAhAAIAAAJg");
	this.shape_4.setTransform(100.7,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAlIARgaIgFABQgMAAgIgIQgHgFAAgMQAAgNAIgIQAIgIALAAQANAAAIAKQAHAIAAALQAAAKgGAHIgbAngAgMgcQgGAGAAAJQAAAIAGAFQAFAEAHAAQAIAAAGgEQAFgFAAgIQAAgJgFgFQgGgGgIAAQgHAAgFAFg");
	this.shape_5.setTransform(94.2,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALArIAAgNIgoAAIAyhIIAAA/IAKAAIAAAJIgKAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_6.setTransform(87.4,7.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIA1IAGgTQACgNAAgVQAAgUgCgNIgGgSIAIgEIAEATQAFANAAAXQAAAYgFAOIgEASg");
	this.shape_7.setTransform(80.1,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALArIAAgNIgpAAIAyhIIAAA/IALAAIAAAJIgLAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_8.setTransform(75,7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AALArIAAgNIgpAAIAzhIIAAA/IAJAAIAAAJIgJAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_9.setTransform(68.4,7.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAeQgIgMAAgSQAAgRAIgMQAJgMALAAQAMAAAJAMQAIAMAAARQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgNgGgKQgGgKgIAAQgHAAgGAKg");
	this.shape_10.setTransform(61.9,7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDAmQgFgSAAgUQAAgSAFgSIAEgTIAIAEIgGASQgDAPAAASQAAAUADAOIAGATIgIADg");
	this.shape_11.setTransform(57,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAYQAAgHAGAAQAHAAAAAHQAAAHgHAAQgGAAAAgHgAgGgXQAAgHAGAAQAHAAAAAHQAAADgCADQgDACgCAAQgGAAAAgIg");
	this.shape_12.setTransform(51.1,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHAAQgGAAAAgHg");
	this.shape_13.setTransform(48.3,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAQAeIAAgxIgTAAIAAAZQAAAMgFAFQgFAHgKAAIgDAAIAAgKIADAAQAFAAACgEQACgDAAgHIAAgjIApAAIAAA7g");
	this.shape_14.setTransform(43.4,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAXQgKgIAAgPQAAgNAIgIQAJgJALAAQAPAAAIALQAFAIABANIguAAQAAAIAGAGQAFAGAHAAQAHAAAFgFQAFgEABgEIAJAFQgDAGgEADQgJAIgLAAQgLAAgIgIgAARgFQgBgHgEgFQgGgEgGAAQgFAAgFAEQgFAFgBAHIAhAAIAAAAg");
	this.shape_15.setTransform(37.6,8.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAwIAAhVIgYAAIAAgKIA5AAIAAAKIgYAAIAABVg");
	this.shape_16.setTransform(32.7,6.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHAAQgGAAAAgHg");
	this.shape_17.setTransform(25.6,11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbAwIAAhfIAuAAIAAAKIgjAAIAAAeIANAAQAfAAAAAZQAAAOgIAIQgJAIgMAAgAgQAlIAMAAQAKAAAGgFQAFgFAAgJQAAgKgIgEQgEgDgKAAIgLAAg");
	this.shape_18.setTransform(20.8,6.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AANAzIAAgRIgwAAIA7hUIAABLIAMAAIAAAJIgMAAIAAARgAgQAZIAdAAIAAgqg");
	this.shape_19.setTransform(10,6.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAxIAtg1QAFgIAAgHQAAgIgFgFQgGgGgIAAQgJAAgGAJQgDAEAAAHIgKAAQAAgMAHgIQAJgKAMAAQANAAAJAJQAIAIAAAMQAAAKgIAJQgEAFgJALIgTAXIAoAAIAAAKg");
	this.shape_20.setTransform(2.2,6.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAPIAKggIAJAEIgMAfg");
	this.shape_21.setTransform(-6.7,11.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQABAIAJAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_22.setTransform(-11.2,7.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZgcIALAAIAAAmIAogrIAAA/IgLAAIAAgmIgoAqg");
	this.shape_23.setTransform(-17.8,8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAMAeIgWgbIgDADIAAAYIgLAAIAAg7IALAAIAAAZIAWgZIANAAIgYAbIAbAgg");
	this.shape_24.setTransform(-23.5,8.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAeIAAg7IALAAIAAAXIAKAAQALAAAGAGQAFADAAAIQAAAJgGAEQgGAGgKAAgAgKAUIAKAAQAEAAADgBQAEgDAAgFQAAgFgEgDQgDgBgEAAIgKAAg");
	this.shape_25.setTransform(-29.2,8.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgPAWQgJgJAAgNQAAgNAJgIQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgHAGAAAJQAAAKAHAGQAGAGAHAAQALAAAIgJIAAAMQgIAGgLAAQgMAAgJgJg");
	this.shape_26.setTransform(-35.1,8.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWAeIAAg7IAWAAQAHAAAEAEQAGAEAAAHQAAAIgHAEQAFACADAAQAFAFAAAHQAAAJgGAEQgGAFgJAAgAgLAUIALAAQAGAAADgCQADgCAAgEQAAgFgDgCQgCgCgHAAIgLAAgAgLgEIALAAQACAAADgCQADgDAAgDQAAgEgDgCQgDgBgEAAIgJAAg");
	this.shape_27.setTransform(-40.7,8.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVAWQgKgJABgNQAAgNAJgIQAIgJANAAQANAAAKAJQAIAIABANQgBANgIAJQgKAJgNAAQgMAAgJgJgAgNgPQgGAGAAAJQAAAKAGAGQAGAGAHAAQAIAAAHgGQAGgGAAgKQAAgJgGgGQgHgGgIAAQgHAAgGAGg");
	this.shape_28.setTransform(-47.3,8.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AALAeIgWgbIgCADIAAAYIgLAAIAAg7IALAAIAAAZIAWgZIAMAAIgYAbIAcAgg");
	this.shape_29.setTransform(-53.2,8.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPAWQgJgJAAgNQAAgNAJgIQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgHAGAAAJQAAAKAHAGQAGAGAHAAQALAAAIgJIAAAMQgIAGgLAAQgMAAgJgJg");
	this.shape_30.setTransform(-59.5,8.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVAWQgKgJAAgNQABgNAIgIQAKgJAMAAQAOAAAIAJQAJAIAAANQAAANgJAJQgIAJgOAAQgMAAgJgJgAgNgPQgHAGABAJQgBAKAHAGQAGAGAHAAQAJAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgJAAQgHAAgGAGg");
	this.shape_31.setTransform(-66,8.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgfgRIgKBCIgLAAIAQhkIAkBPIAmhQIAPBlIgLAAIgJhCIghBGg");
	this.shape_32.setTransform(-75.6,6.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgEAeIAAgxIgTAAIAAgKIAvAAIAAAKIgTAAIAAAxg");
	this.shape_33.setTransform(-86.8,8.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_34.setTransform(-91,8.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdAvIAAhcIALAAIAAAIQAIgJAKAAQAOAAAIAKQAIAIAAANQAAANgIAIQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAAKQAAAKAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgKQAAgJgGgHQgGgGgHAAQgHAAgFAGg");
	this.shape_35.setTransform(-96.3,10.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AANAeIAAgxIgZAAIAAAxIgLAAIAAg7IAvAAIAAA7g");
	this.shape_36.setTransform(-103.3,8.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJAPIAKggIAJAEIgMAfg");
	this.shape_37.setTransform(-111.6,11.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgWAeIAAg7IAWAAQAHAAAFAEQAFAFAAAGQAAAIgHAEQAFACADAAQAFAFAAAHQAAAJgGAEQgGAFgJAAgAgMAUIAMAAQAGAAADgCQAEgCgBgEQAAgFgCgCQgDgCgHAAIgMAAgAgMgEIAMAAQACAAACgCQAEgDAAgDQAAgEgEgCQgCgBgEAAIgKAAg");
	this.shape_38.setTransform(-115.5,8.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEArIAAg6IAJAAIAAA6gAAEgeQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACADAAACQAAAHgHAAQgDAAgCgCgAgPgjQAAgHAHAAQADAAACACQACADAAACQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_39.setTransform(-119.8,7.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZgcIALAAIAAAmIAogrIAAA/IgLAAIAAgmIgoAqg");
	this.shape_40.setTransform(-124.4,8.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AATAwIgmgtIgDADIAAAqIgKAAIAAhfIAKAAIAAApIAogpIAOAAIgsAtIAtAyg");
	this.shape_41.setTransform(-131.1,6.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAGATIgCglIAMAAIgCAlgAgNATIgCglIAMAAIgCAlg");
	this.shape_42.setTransform(133.4,-12.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQAMAAAHAKIAAgJIALAAIAAA6IgLAAIAAgIQgIAKgLAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAFAGQAGAHAHAAQAJAAAGgHQAFgGAAgJQAAgJgGgHQgGgFgIAAQgGAAgGAGg");
	this.shape_43.setTransform(127,-7.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAOAdIAAgZIgbAAIAAAZIgKAAIAAg6IAKAAIAAAZIAbAAIAAgZIAKAAIAAA6g");
	this.shape_44.setTransform(119.9,-7.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEArIAAg6IAIAAIAAA6gAAEgdQgCgDgBgDQABgHAHAAQAIAAAAAHQAAADgCADQgDACgDAAQgDAAgCgCgAgNgdQgCgDAAgDQAAgHAHAAQAHAAAAAHQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_45.setTransform(114.9,-9.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQALAAAIAKIAAgJIALAAIAAA6IgLAAIAAgIQgHAKgMAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAGAGQAFAHAHAAQAJAAAGgHQAFgGAAgJQAAgJgGgHQgHgFgHAAQgGAAgGAGg");
	this.shape_46.setTransform(109.4,-7.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgNgfQgGAGAAALQAAAJAFAFQAGAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgGAGg");
	this.shape_47.setTransform(102.1,-6.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AALAdIgWgaIgDAEIAAAWIgKAAIAAg6IAKAAIAAAZIAXgZIAMAAIgYAbIAcAfg");
	this.shape_48.setTransform(95.5,-7.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgOAwIAMgbIglhEIANAAIAdA3IAZg3IAMAAIgqBfg");
	this.shape_49.setTransform(88.6,-9.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_50.setTransform(82.3,-7.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQAMAAAHAKIAAgJIALAAIAAA6IgLAAIAAgIQgIAKgLAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAFAGQAGAHAHAAQAJAAAGgHQAFgGAAgJQAAgKgHgGQgFgFgIAAQgHAAgFAGg");
	this.shape_51.setTransform(76,-7.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_52.setTransform(69.8,-7.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgWAWQgIgJgBgNQABgMAIgJQAKgJAMAAQAOAAAIAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgKgJgAgOgPQgGAGAAAJQAAAKAGAGQAHAGAHAAQAIAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgIAAQgHAAgHAGg");
	this.shape_53.setTransform(63.5,-7.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQACAIAIAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_54.setTransform(56.1,-9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgVAWQgKgJAAgNQAAgMAJgJQAJgJANAAQANAAAJAJQAKAJAAAMQAAANgKAJQgJAJgNAAQgMAAgJgJgAgNgPQgHAGAAAJQAAAKAHAGQAGAGAHAAQAIAAAGgGQAHgGAAgKQAAgJgHgGQgGgGgIAAQgIAAgFAGg");
	this.shape_55.setTransform(48.7,-7.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEAwIAAhUIgXAAIAAgLIA3AAIAAALIgXAAIAABUg");
	this.shape_56.setTransform(42.7,-9.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAGATIgCglIAMAAIgCAlgAgNATIgCglIAMAAIgCAlg");
	this.shape_57.setTransform(37.1,-12.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgEAwIAAhfIAJAAIAABfg");
	this.shape_58.setTransform(29.6,-9.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgEAwIAAhfIAJAAIAABfg");
	this.shape_59.setTransform(26,-9.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAZAwIAAhUIgwAAIAABUIgLAAIAAhfIBFAAIAABfg");
	this.shape_60.setTransform(19.3,-9.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAALQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgFAGg");
	this.shape_61.setTransform(7.5,-6.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgVAWQgKgJAAgNQAAgMAJgJQAKgJAMAAQAOAAAJAJQAJAJAAAMQAAANgJAJQgKAJgNAAQgMAAgJgJgAgNgPQgHAGAAAJQAAAKAHAGQAGAGAHAAQAIAAAGgGQAHgGAAgKQAAgJgHgGQgFgGgJAAQgHAAgGAGg");
	this.shape_62.setTransform(-0.4,-7.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_63.setTransform(-6.7,-7.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgNAUQgGgJgBgHIgKAAIAAAZIgLAAIAAg6IALAAIAAAZIALAAQABgKAHgHQAJgJAMAAQAOAAAJAJQAJAJAAAMQAAANgJAJQgJAJgOAAQgPAAgIgLgAgDgPQgGAGAAAJQAAAKAHAGQADAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgJAAQgJAAgEAGg");
	this.shape_64.setTransform(-14.1,-7.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgCATIgCglIAKAAIgCAlg");
	this.shape_65.setTransform(-20.7,-12.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgVArQgKgJABgVQAAgkARgMQAGgFANgDQAJgCADgFIAMAAQgEAMgQAEQgMADgGAEQgLAKgBARQAHgLANABQAOAAAIAJQAKAHgBANQABAOgKAJQgJAJgNAAQgMAAgJgIgAgNACQgGAHgBAKQABALAGAGQAGAFAHABQAJgBAFgFQAHgGAAgLQAAgKgHgHQgFgDgJAAQgHAAgGADg");
	this.shape_66.setTransform(-25.9,-9.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgZgdIALAAIAAAnIAngrIAAA+IgKAAIAAglIgoAqg");
	this.shape_67.setTransform(-33.3,-7.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAALQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgFAGg");
	this.shape_68.setTransform(-40.5,-6.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_69.setTransform(-47.1,-7.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgPAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAHAAQAMAAAHgKIAAANQgIAGgLAAQgMAAgJgJg");
	this.shape_70.setTransform(-52.8,-7.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgZgdIALAAIAAAnIAogrIAAA+IgLAAIAAglIgoAqg");
	this.shape_71.setTransform(-59.6,-7.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAXAmIAAgRIgsAAIAAARIgKAAIAAgaQAIAAADgIQADgEAAgKIAAgbIAoAAIAAAxIAJAAIAAAagAgHgFQAAALgHAGIAbAAIAAgnIgUAAg");
	this.shape_72.setTransform(-66.6,-7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQACAIAIAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_73.setTransform(-76.9,-9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgZgdIALAAIAAAnIAngrIAAA+IgKAAIAAglIgoAqg");
	this.shape_74.setTransform(-84,-7.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAOAdIAAgZIgbAAIAAAZIgKAAIAAg6IAKAAIAAAZIAbAAIAAgZIAKAAIAAA6g");
	this.shape_75.setTransform(-91.1,-7.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYgQIAKAAIAAAmIAogrIAAA/IgLAAIAAgoIgnAsgAgUgqIAJgDQADAIAIAAQAKAAACgIIAJADQgFAOgQAAQgNAAgHgOg");
	this.shape_76.setTransform(-98.1,-9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgEAsIAAg6IAJAAIAAA6gAgEgeQgCgDAAgDQAAgDACgCQADgCABgBQACABADACQACACAAADQAAADgCADQgDACgCAAQgBAAgDgCg");
	this.shape_77.setTransform(-103.2,-9.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AATAmIAAgRIgvAAIAAg6IALAAIAAAxIAZAAIAAgxIALAAIAAAxIAKAAIAAAag");
	this.shape_78.setTransform(-107.8,-7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEAsIAAg6IAIAAIAAA6gAgDgeQgDgDAAgDQAAgDADgCQABgCACgBQACABADACQACACAAADQAAADgCADQgDACgCAAQgCAAgBgCg");
	this.shape_79.setTransform(-113.2,-9.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgEBBIAAghQgQAAgJgIQgLgJAAgOQAAgNALgIQAJgIAQAAIAAgkIAJAAIAAAkQAQAAAKAIQAKAIAAANQAAAOgLAJQgJAIgQAAIAAAhgAAFgTIAAAqQALAAAGgFQAIgFAAgMQAAgLgJgFQgGgEgIAAIgCAAgAgUgPQgJAFAAALQAAAMAJAFQAGAFAKAAIAAgqIgDAAQgHAAgGAEg");
	this.shape_80.setTransform(-119.5,-7.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgOAUgBQAUABAQAOQAOAOAAAUQAAAVgOAOQgPAOgVAAQgUAAgOgOgAgagaQgMALAAAPQAAAQAMAMQAMALAOAAQAQAAAMgLQALgMAAgQQAAgPgLgLQgMgNgQAAQgOAAgMANg");
	this.shape_81.setTransform(-130,-9.6);

	this.addChild(this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-135,-14.9,270.1,29.8);


(lib.t3_6Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("APtCBQgHgHAAgJQAAgLAHgGQAHgIAKABQAKgBAHAIQAHAGAAALQAAAJgHAHQgHAIgKgBQgKABgHgIgAOXCFIAAjMIApAAIAADMgANBCFIAAhcIhXAAIAABcIgpAAIAAjMIApAAIAABOIBXAAIAAhOIAnAAIAADMgAJrCFIAAjMIAoAAIAADMgAInCFIgSgsIhTAAIgSAsIgrAAIBZjRIAeAAIBWDRgAIKA4IgdhIIgeBIIA7AAgAEFCFIAAjMIA7AAQAUAAAKACQANAEAMAKQAUASAAAfQAAAbgRARQgRASgjAAIgaAAIAABNgAEsAVIAQAAQATABAIgHQALgIAAgOQAAgQgMgHQgIgGgUAAIgOAAgAC2CFIhJhdIgEAFIAABYIgpAAIAAjMIApAAIAABVIBLhVIAzAAIhYBcIBcBwgAhhCFIAdg6IhMiSIAuAAIA1BlIAshlIAqAAIheDMgAlxCFIAAjMIAyAAQAiAAARAMQATAPAAAcQAAAagXANQAQACALAKQAPAPgBAYQAAAagRAQQgTAQghABgAlJBjIARAAQATAAAIgFQANgHAAgQQAAgRgPgHQgJgEgSAAIgPAAgAlJAMIAMAAQAeAAAAgZQAAgZgeAAIgMAAgApSCFIAAjMIByAAIAAAjIhKAAIAAArIBHAAIAAAjIhHAAIAAA4IBKAAIAAAjgAqZCFIhChdIgFAFIAABYIgmAAIAAhYIgFgFIhCBdIguAAIBShwIhPhcIAtAAIBFBVIAAhVIAmAAIAABVIBFhVIAtAAIhPBcIBSBwgAwVCFIAAjMIAzAAQAhAAARAMQATAPAAAcQAAAagXANQAQACALAKQAOAPAAAYQAAAagRAQQgTAQghABgAvtBjIARAAQASAAAJgFQAOgHAAgQQgBgRgPgHQgIgEgTAAIgPAAgAvtAMIALAAQAgAAAAgZQAAgZggAAIgLAAgAPrBGIAAiNIAmAAIAACNgAKLhoQgGgGABgHQgBgIAGgFQAFgGAIABQAHgBAGAGQAFAFAAAIQAAAHgFAGQgGAFgHABQgIgBgFgFgAJZhoQgFgGgBgHQABgIAFgFQAFgGAIABQAHgBAGAGQAGAFgBAIQABAHgGAGQgGAFgHABQgIgBgFgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.6,-13.7,209.3,27.4);


(lib.t3_5Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHPBEIAagZQAHAOANAHQALAHAMAAQAOgBAJgHQAJgIAAgMQAAgLgIgIQgHgHgZgJQgWgHgMgIQgQgPAAgXQAAgaAQgQQARgTAhAAQAiAAAYAYIgVAcQgNgSgVAAQgOAAgIAIQgGAHAAAJQAAAIAHAGQAEAFAVAGQAdALAMALQARANAAAbQABAegVAUQgTASggAAQgsAAgbgngABKBEIAagZQAHAOANAHQALAHAMAAQAOgBAJgHQAJgIAAgMQAAgLgIgIQgIgHgYgJQgWgHgMgIQgQgOgBgYQAAgZAQgRQATgTAgAAQAiAAAYAYIgVAcQgNgSgVAAQgOAAgIAIQgGAHAAAJQAAAIAHAGQAFAFATAGQAdALAMALQASAMAAAcQAAAegTAUQgVASggAAQgsAAgagngAhPBjQgSgHgLgOQgPgVAAgiIAAh8IAoAAIAAB/QAAATAKALQAMAOAUABQAVgBAMgOQAIgMAAgSIAAh/IAoAAIAAB8QAAAigPAVQgLAOgQAHQgSAIgVAAQgUAAgSgIgAFDBmIAAjLIByAAIAAAiIhKAAIAAAuIBHAAIAAAgIhHAAIAAA5IBKAAIAAAigAjJBmIgthLIgwBLIgvAAIBIhqIg9hhIAwAAIAkBAIAmhAIAwAAIg/BhIBGBqgAnaBmIAAjLIBzAAIAAAiIhKAAIAAAuIBHAAIAAAgIhHAAIAAA5IBKAAIAAAigApcBmIAAjLIAnAAIAACpIBAAAIAAAig");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.6,-10.7,121.2,21.5);


(lib.t3_4Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AB8BNQgfgeAAgvQAAgtAfgfQAegeAxAAQAwAAAfAeQAeAfABAtQgBAvgeAeQgfAegwAAQgxAAgegegACZgyQgTAVAAAdQAAAfATAUQAUAUAeAAQAdAAAUgUQATgUAAgfQAAgdgTgVQgUgTgdgBQgeABgUATgAkfBEIAagZQAHAPAPAIQANAIARgBQAUAAAKgJQAJgJAAgMQAAgggtAAIgSAAIAAggIASAAQAQAAAJgHQAKgHAAgMQAAgYgdAAQgbABgPAQIgVgcQAbgYAlAAQAeAAATAPQASAOAAAZQAAAdgaAOQATAEAKAOQAKAOAAAUQAAAdgYASQgWARgkAAQg1AAgYgngAn2BNQgfgeABgvQgBgtAfgfQAfgeAwAAQAwAAAgAeQAeAfAAAtQAAAvgeAeQggAegwAAQgwAAgfgegAnYgyQgUAVAAAdQAAAfAUAUQATAUAeAAQAeAAATgUQAUgUgBgfQABgdgUgVQgTgTgegBQgeABgTATgAKIBmIAAjLIApAAIAADLgAFeBmIAAjLIAnAAIAACpIBDAAIAAipIAnAAIAACpIBCAAIAAipIApAAIAADLgAAZBmIhHhcIgFAFIAABXIgoAAIAAjLIAoAAIAABWIBKhWIAyAAIhVBeIBaBtgAqwBmIAAjLIA8AAQAUAAAKADQAOADAKAJQAWATgBAfQAAAegQAOQgSASgiAAIgaAAIAABMgAqHgHIAQAAQASAAAIgGQAMgJAAgPQAAgQgMgHQgJgHgUAAIgNAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.9,-10.7,137.8,21.5);


(lib.t3_3Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHdBrQgegeAAgwQAAgtAegeQAfgeAwAAQAxAAAfAeQAeAeAAAtQAAAwgeAeQgfAegxAAQgwAAgfgegAH7gUQgTAUAAAdQAAAgATAUQATATAeAAQAeAAAUgTQATgUAAggQAAgdgTgUQgUgUgeAAQgeAAgTAUgAl1BiIAbgZQAHAPAPAIQAOAHAQAAQATAAALgJQAJgIAAgNQAAgggtAAIgSAAIAAgiIASAAQAQAAAJgHQAJgFAAgMQAAgYgdAAQgaAAgPAQIgVgbQAbgYAkAAQAfAAATAPQASAOAAAZQAAAbgaAOQATAEAKAQQAKAOAAATQAAAdgXASQgXASgkAAQg1AAgZgngApNCIIAAjPIAoAAIAACIIBxiNIAcAAIAADQIgoAAIAAiJIhyCNgAK/CEIAAjLIAoAAIAADLgAFyCEIAAhbIhXAAIAABbIgoAAIAAjLIAoAAIAABNIBXAAIAAhNIAoAAIAADLgACvCEIgSgrIhTAAIgSArIgrAAIBZjQIAeAAIBWDQgACRA4IgdhIIgdBIIA6AAgAgyCEIAAhbIhWAAIAABbIgoAAIAAjLIAoAAIAABNIBWAAIAAhNIApAAIAADLgAr9CEIAAjLIAzAAQAhAAARAMQATAQAAAbQAAAZgXANQARADAKAKQAPAPAAAYQAAAagSAPQgSARgiAAgArVBjIARAAQATAAAJgFQAMgHAAgRQAAgQgPgHQgIgEgTAAIgPAAgArVAMIALAAQAfAAAAgZQAAgageAAIgMAAgALfhoQgGgGAAgHQAAgIAGgFQAFgGAIAAQAIAAAFAGQAFAFAAAIQAAAHgFAGQgFAFgIAAQgIAAgFgFgAKthoQgFgGAAgHQAAgIAFgFQAFgGAIAAQAIAAAFAGQAGAFAAAIQAAAHgGAGQgFAFgIAAQgIAAgFgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.6,-13.7,153.4,27.5);


(lib.t3_2Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkVBlIAAgiQAEACAHAAQALgBAIgGQAHgIACgNIABgbIAAh0ICMAAIAADLIgoAAIAAipIg8AAIAABZQAAAZgDAKQgEAWgPAMQgQANgZAAgAJoBlIAAhPIgHAAIg0BPIgwAAIA9hTQgMgCgLgHQgXgPAAggQAAgeAUgTQASgPAjAAIA8AAIAADLgAI1gmQAAAeAoAAIALAAIAAg+IgMAAQgnAAAAAggAG5BlIAAhbIhWAAIAABbIgpAAIAAjLIApAAIAABPIBWAAIAAhPIAoAAIAADLgADkBlIAAhbIhXAAIAABbIgoAAIAAjLIAoAAIAABPIBXAAIAAhPIAoAAIAADLgAgyBlIAAjLIBwAAIAAAiIhIAAIAAAuIBFAAIAAAgIhFAAIAAA5IBIAAIAAAigAlYBlIAAjLIAoAAIAADLgAnHBlIAAipIgvAAIAAgiICFAAIAAAiIguAAIAACpgAqQBlIAAjLIAzAAQAiAAAQANQAUAPAAAbQAAAdgYALQARADAKAJQAPAOAAAYQAAAagSAPQgSASgigBgApoBFIASAAQASAAAJgGQANgHAAgRQAAgQgPgHQgJgEgTAAIgPAAgApogRIAMAAQAfAAAAgbQAAgagfAAIgMAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.7,-10.3,131.5,20.7);


(lib.t3_1Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkpBNQgfgeAAgvQAAgtAfgfQAegeAxAAQAwAAAfAeQAeAfABAtQgBAvgeAeQgfAegwAAQgxAAgegegAkMgyQgTAVAAAdQAAAfATAUQAUAUAeAAQAdAAAUgUQATgUAAgfQAAgdgTgVQgUgTgdgBQgeABgUATgAr2BNQgegegBgvQABgtAegfQAfgeAwAAQAwAAAfAeQAfAfAAAtQAAAvgfAeQgfAegwAAQgxAAgegegArYgyQgTAVAAAdQAAAfATAUQATAUAeAAQAeAAAUgUQASgUAAgfQAAgdgSgVQgUgTgegBQgeABgTATgABRBmIAAgiQAGABAGABQALAAAHgIQAIgHABgNIACgbIAAh0ICLAAIAADLIgnAAIAAipIg8AAIAABaQAAAXgCALQgGAVgOAMQgQAOgaAAgAKjBmIAAjLIBzAAIAAAiIhKAAIAAAuIBGAAIAAAgIhGAAIAAA5IBKAAIAAAigAJMBmIAAhbIhWAAIAABbIgpAAIAAjLIApAAIAABPIBWAAIAAhPIApAAIAADLgAE0BmIAAjLIByAAIAAAiIhJAAIAAAuIBHAAIAAAgIhHAAIAAA5IBJAAIAAAigAhHBmIAAjLIAyAAQAgAAAQAMQAUAPgBAcQAAAcgWAMQAQADAKAJQAPAOAAAYQAAAagSAQQgSAQgfAAgAggBGIARAAQARgBAJgFQANgHAAgQQAAgRgQgHQgIgEgRAAIgPAAgAgggQIAMAAQAdAAAAgbQAAgagdAAIgMAAgAmVBmIAAhbIhXAAIAABbIgoAAIAAjLIAoAAIAABPIBXAAIAAhPIAoAAIAADLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79,-10.7,158,21.5);


(lib.t2_2Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJBtQgfggAAgvQAAgxAfgdQAdgcAuAAQAbAAAYAOIAAAuQgVgXgcAAQgfAAgUAWQgSATAAAdQAAAgAWAUQAUASAcAAQAdAAATgWIAAAuQgXAMgcAAQgsAAgfgcgAr5BtQghggAAgvQAAgxAhgdQAdgcAvAAQAbAAAXAOIAAAuQgVgXgdAAQgeAAgUAWQgSATAAAdQAAAgAWAUQAUASAcAAQAdAAATgWIAAAuQgXAMgcAAQgsAAgfgcgAJmCJIAAjQIAoAAIAACIIBxiNIAcAAIAADRIgoAAIAAiJIhyCNgAGCCJIAAjQIAoAAIAACIIBxiNIAcAAIAADRIgoAAIAAiJIhyCNgAErCFIAAhbIhXAAIAABbIgoAAIAAjMIAoAAIAABOIBXAAIAAhOIAoAAIAADMgAhPCFIgTgrIhSAAIgSArIgsAAIBZjQIAeAAIBXDQgAhtA5IgdhIIgeBIIA7AAgAkyCFIAAhSQgSACgSAAQgmAAgRgNQgVgQAAggIAAg/IAoAAIAAA4QAAATAKAHQAKAIATgBQATAAAOgBIAAhYIAoAAIAADMgAo9CFIAcg6IhMiSIAvAAIA0BmIAshmIAsAAIhgDMgAKJh9IAbgLQAHASAVAAQAVAAAHgSIAcALQgNAigrAAQgqAAgNgig");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.5,-13.8,159.1,27.6);


(lib.t2_1Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ALQCJIAAjPIAoAAIAACIIBxiNIAcAAIAADQIgoAAIAAiJIhyCNgAHrCJIAAjPIApAAIAACIIBxiNIAcAAIAADQIgoAAIAAiJIhyCNgAr/CFIAAgiQAEABAHAAQALAAAIgHQAHgHACgNIABgcIAAhzICMAAIAADLIgoAAIAAipIg8AAIAABZQAAAYgCALQgFAVgPAMQgQAOgZAAgAGVCFIAAhbIhXAAIAABbIgoAAIAAjLIAoAAIAABNIBXAAIAAhNIAoAAIAADLgACmCFIAAipIguAAIAAgiICEAAIAAAiIguAAIAACpgAA2CFIAAhbIhUAAIAABbIgpAAIAAjLIApAAIAABNIBUAAIAAhNIApAAIAADLgAiKCFIgSgrIhTAAIgSArIgrAAIBZjQIAeAAIBWDQgAioA5IgdhIIgdBIIA6AAgAmDCFIAAjLIBtAAIAAAiIhFAAIAACpgAocCFIAAjLIByAAIAAAiIhKAAIAAAsIBHAAIAAAiIhHAAIAAA5IBKAAIAAAigAuECFIAAjLIByAAIAAAiIhKAAIAAAsIBHAAIAAAiIhHAAIAAA5IBKAAIAAAigALzh9IAbgLQAHASAVAAQAVAAAHgSIAcALQgNAigrAAQgqAAgNgig");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.1,-13.8,180.3,27.6);


(lib.t1_3Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIcBPIAegdQAEAJAHAHQAFAFAHAEQAMAHAPAAQAQAAALgJQADgDADgEQAEgHAAgKQAAgMgKgJQgJgJgbgJQgcgKgMgJIgEgDQgPgQAAgZQAAgdASgUQAVgWAmAAQAoAAAbAcIgYAgQgPgUgYAAQgRAAgJAJQgHAIAAALQAAAKAIAGQAFAFAXAJQAVAHANAHQAJAFAFAFQAVAPAAAhQAAAKgCAKQgFAWgQAPQgXAWglAAQg0AAgegugABWBPIAegdQAFAJAGAHQAGAFAHAEQANAHAOAAQAQAAALgJQADgDADgEQAEgHAAgKQAAgMgJgJQgJgIgcgKQgcgKgMgJIgEgDQgQgQAAgZQAAgdATgUQAVgWAmAAQAoAAAbAcIgYAgQgQgUgXAAQgSAAgIAJQgHAIAAALQAAAKAHAGQAGAFAXAJQAVAHAMAHQAKAFAGAFQAUAPAAAhQAAAKgCAKQgFAVgQAQQgXAWglAAQg0AAgfgugAhbB0QgWgJgMgRQgJgKgEgOQgFgRAAgXIAAiQIAuAAIAACUQAAAXALANQAPAQAYAAQAYAAAOgQQAJgNAAgXIAAiUIAuAAIAACQQABAXgGARQgEAOgIAKQgNARgTAJQgVAJgXAAQgZAAgTgJgAF5B3IAAjtICEAAIAAAoIhWAAIAAA1IBSAAIAAAnIhSAAIAABBIBWAAIAAAogAjqB3Ig1hXIg2BXIg4AAIBUh8IhIhxIA4AAIAqBKIAthKIA3AAIhJBxIBSB8gAonB3IAAjtICEAAIAAAoIhVAAIAAA1IBSAAIAAAnIhSAAIAABBIBVAAIAAAogArAB3IAAjtIAvAAIAADFIBJAAIAAAog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,-12.5,141.1,25.1);


(lib.t1_2Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKJCVIAAg2IiTAAIAAA2IgrAAIAAheQAMAAALgKQAJgIAGgPQAJgUAAgoIAAhoIChAAIAADFIAZAAIAABegAIngmQAAApgIAXQgHASgMALIBgAAIAAidIhFAAgABzBDQgnglABg1QgBg6AngjQAiggA2AAQAfAAAcAPIAAA2QgXgbgjAAQgjAAgXAaQgVAYAAAiQAAAkAaAXQAWAVAhAAQAiAAAWgaIAAA2QgbAOggAAQg0AAgkghgAi3BDQgnglAAg1QAAg6AngjQAhggA2AAQAgAAAcAPIAAA2QgYgbgiAAQgkAAgWAaQgVAYAAAiQAAAkAZAXQAXAVAhAAQAhAAAXgaIAAA2QgbAOghAAQgzAAgkghgAthA3IAegdQAIASASAJQAQAIATAAQAWAAANgLQALgJAAgPQAAgjg1AAIgVAAIAAgoIAVAAQATAAAKgIQAMgIAAgOQAAgcgjAAQgfAAgRATIgYggQAegcArAAQAlAAAUARQAWARAAAdQAAAigeAQQAWAGAMARQALAOAAAXQAAAigbAVQgbAUgpAAQg+AAgcgtgARYBfIAAhpIhlAAIAABpIgvAAIAAjtIAvAAIAABcIBlAAIAAhcIAvAAIAADtgAN2BfIgVgyIhhAAIgVAyIgzAAIBojyIAkAAIBkDygANUAHIgihVIgjBVIBFAAgAExBfIAAjtICFAAIAAAoIhXAAIAAA1IBTAAIAAAoIhTAAIAABAIBXAAIAAAogAmEBfIAAjtICEAAIAAAoIhVAAIAAA1IBSAAIAAAoIhSAAIAABAIBVAAIAAAogAnpBfIAAhpIhmAAIAABpIguAAIAAjtIAuAAIAABcIBmAAIAAhcIAvAAIAADtgAu5BfIAAjtIAuAAIAADtgAyGBfIAAjtICLAAIAAAoIhdAAIAAA3IAhAAQAmAAAWATQAXAVgBAeQAAAYgNATQgUAdgxAAgAxYA3IAXAAQAtAAAAggQgBgegrAAIgYAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.9,-14.9,231.9,29.9);


(lib.t1_1Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoHB9QgjgjAAg3QAAg1AjgjQAlgjA4AAQA4AAAkAjQAkAjAAA1QAAA3gkAjQgkAjg4AAQg4AAglgjgAnkgWQgWAWAAAjQAAAlAWAXQAXAXAjAAQAjAAAWgXQAWgXAAglQAAgjgWgWQgWgYgjAAQgjAAgXAYgAweB9QgkgjAAg3QAAg1AkgjQAjgjA5AAQA4AAAkAjQAjAjAAA1QAAA3gjAjQgkAjg4AAQg5AAgjgjgAv7gWQgXAWAAAjQAAAlAXAXQAVAXAkAAQAjAAAWgXQAWgXABglQgBgjgWgWQgXgYgiAAQgkAAgVAYgANwCfIAAjyIAuAAIAACfICFikIAgAAIAADzIgvAAIAAigIiECkgAJmCfIAAjyIAvAAIAACfICEikIAhAAIAADzIgvAAIAAigIiECkgAhKCbIAAgpQAFADAHAAQANAAAJgJQAIgIADgQQABgJAAgXIAAiHIChAAIAADuIguAAIAAjGIhGAAIAABpQAAAcgDAMQgGAZgPAOQgUAQgcAAQgLAAgIgCgAIBCbIAAhrIhlAAIAABrIguAAIAAjuIAuAAIAABbIBlAAIAAhbIAvAAIAADugAC8CbIAAjuICEAAIAAAoIhWAAIAAA0IBSAAIAAAoIhSAAIAABBIBWAAIAAApgAkACbIAAjuIA7AAQAoAAATAPQAXASgBAgQAAAegbAPQARACAPANQARARAAAcQAAAegVASQgWAUgmAAgAjRB1IAVAAQAUAAALgHQAPgJAAgSQAAgUgSgIQgKgEgVAAIgSAAgAjRAPIANAAQAlAAgBgeQAAgPgKgIQgJgHgQAAIgOAAgAqECbIAAhrIhlAAIAABrIguAAIAAjuIAuAAIAABbIBlAAIAAhbIAvAAIAADugAOxh1QgRgKgHgTIAggNQAIAVAZAAQAYAAAHgVIAhANQgQAogwAAQgZAAgQgLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109.1,-16,218.3,32.2);


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


(lib.img5_1 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg0oAu3MAAAhdtMBpRAAAIAAMMMgGtBRhg");

	// Слой 1
	this.instance = new lib.img5();
	this.instance.setTransform(-337,-300);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-337,-300,674,600);


(lib.img4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img4();
	this.instance.setTransform(-150,-168.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-168.5,300,337);


(lib.img3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img3();
	this.instance.setTransform(-150,-168);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-168,300,336);


(lib.img2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img2();
	this.instance.setTransform(-150,-168.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-168.5,300,337);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-150,-168);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-168,300,337);


(lib.dillers = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-84.1,224.9,168.2);


(lib.blick_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.blick();
	this.instance.setTransform(-453.5,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-453.5,-300,907,600);


(lib.bg2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600.1);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.t5 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAqIAngtQAEgGAAgHQAAgHgEgFQgFgEgHAAQgHAAgFAHQgDAEAAAGIgJAAQAAgLAGgGQAHgJALAAQALAAAHAHQAIAHgBALQABAJgHAHIgMAOIgPATIAhAAIAAAJg");
	this.shape.setTransform(127.6,129.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAeQgIgMAAgSQAAgSAIgLQAJgMALAAQAMAAAJAMQAIAMAAARQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgOgGgJQgGgKgIAAQgHAAgGAKg");
	this.shape_1.setTransform(121.1,129.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAeQgIgMAAgSQAAgRAIgMQAJgMALAAQAMAAAJAMQAIALAAASQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgOgGgJQgGgKgIAAQgHAAgGAKg");
	this.shape_2.setTransform(114.4,129.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAlIAthGIgsAAIAAgIIA8AAIg2BTg");
	this.shape_3.setTransform(108.1,129.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAqIAmgtQAEgHAAgGQAAgHgEgFQgFgEgHAAQgIAAgEAHQgDAEAAAGIgJAAQAAgLAGgGQAIgJAKAAQALAAAHAHQAHAHAAALQAAAJgGAHIgbAhIAhAAIAAAJg");
	this.shape_4.setTransform(98.4,129.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAlIARgaIgFABQgMAAgIgIQgHgFAAgMQAAgNAIgIQAIgIALAAQANAAAIAKQAHAIAAALQAAAKgGAHIgbAngAgMgcQgGAGAAAJQAAAIAGAFQAFAEAHAAQAIAAAGgEQAFgFAAgIQAAgJgFgFQgGgGgIAAQgHAAgFAFg");
	this.shape_5.setTransform(92,129.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALArIAAgNIgoAAIAyhIIAAA/IAKAAIAAAJIgKAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_6.setTransform(85.2,129.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA1IAGgTQACgNAAgVQAAgUgCgNIgGgSIAIgEIAEATQAFANAAAXQAAAYgFAOIgEASg");
	this.shape_7.setTransform(77.8,130);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALArIAAgNIgpAAIAyhIIAAA/IALAAIAAAJIgLAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_8.setTransform(72.8,129.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALArIAAgNIgpAAIAzhIIAAA/IAJAAIAAAJIgJAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_9.setTransform(66.1,129.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAeQgIgMAAgSQAAgRAIgMQAJgMALAAQAMAAAJAMQAIAMAAARQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgNgGgKQgGgKgIAAQgHAAgGAKg");
	this.shape_10.setTransform(59.6,129.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAmQgFgSAAgUQAAgSAFgSIAEgTIAIAEIgGASQgDAPAAASQAAAUADAOIAGATIgIADg");
	this.shape_11.setTransform(54.8,130);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAYQAAgHAGAAQAHAAAAAHQAAAHgHAAQgGAAAAgHgAgGgXQAAgHAGAAQAHAAAAAHQAAADgCADQgDACgCAAQgGAAAAgIg");
	this.shape_12.setTransform(48.8,130.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHAAQgGAAAAgHg");
	this.shape_13.setTransform(46,132.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQAeIAAgxIgTAAIAAAZQAAAMgFAFQgFAHgKAAIgDAAIAAgKIADAAQAFAAACgEQACgDAAgHIAAgjIApAAIAAA7g");
	this.shape_14.setTransform(41.1,130.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAXQgKgIAAgPQAAgNAIgIQAJgJALAAQAPAAAIALQAFAIABANIguAAQAAAIAGAGQAFAGAHAAQAHAAAFgFQAFgEABgEIAJAFQgDAGgEADQgJAIgLAAQgLAAgIgIgAARgFQgBgHgEgFQgGgEgGAAQgFAAgFAEQgFAFgBAHIAhAAIAAAAg");
	this.shape_15.setTransform(35.3,130.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAwIAAhVIgYAAIAAgKIA5AAIAAAKIgYAAIAABVg");
	this.shape_16.setTransform(30.5,128.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHAAQgGAAAAgHg");
	this.shape_17.setTransform(23.3,132.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAwIAAhfIAuAAIAAAKIgjAAIAAAeIANAAQAfAAAAAZQAAAOgIAIQgJAIgMAAgAgQAlIAMAAQAKAAAGgFQAFgFAAgJQAAgKgIgEQgEgDgKAAIgLAAg");
	this.shape_18.setTransform(18.6,128.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANAzIAAgRIgwAAIA7hUIAABLIAMAAIAAAJIgMAAIAAARgAgQAZIAdAAIAAgqg");
	this.shape_19.setTransform(7.7,128.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAxIAtg1QAFgIAAgHQAAgIgFgFQgGgGgIAAQgJAAgGAJQgDAEAAAHIgKAAQAAgMAHgIQAJgKAMAAQANAAAJAJQAIAIAAAMQAAAKgIAJQgEAFgJALIgTAXIAoAAIAAAKg");
	this.shape_20.setTransform(-0.1,128.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAPIAKggIAJAEIgMAfg");
	this.shape_21.setTransform(-8.9,133.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQABAIAJAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_22.setTransform(-13.4,129.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZgcIALAAIAAAmIAogrIAAA/IgLAAIAAgmIgoAqg");
	this.shape_23.setTransform(-20.1,130.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMAeIgWgbIgDADIAAAYIgLAAIAAg7IALAAIAAAZIAWgZIANAAIgYAbIAbAgg");
	this.shape_24.setTransform(-25.8,130.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAeIAAg7IALAAIAAAXIAKAAQALAAAGAGQAFADAAAIQAAAJgGAEQgGAGgKAAgAgKAUIAKAAQAEAAADgBQAEgDAAgFQAAgFgEgDQgDgBgEAAIgKAAg");
	this.shape_25.setTransform(-31.4,130.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAWQgJgJAAgNQAAgNAJgIQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgHAGAAAJQAAAKAHAGQAGAGAHAAQALAAAIgJIAAAMQgIAGgLAAQgMAAgJgJg");
	this.shape_26.setTransform(-37.3,130.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAWAAQAHAAAEAEQAGAEAAAHQAAAIgHAEQAFACADAAQAFAFAAAHQAAAJgGAEQgGAFgJAAgAgLAUIALAAQAGAAADgCQADgCAAgEQAAgFgDgCQgCgCgHAAIgLAAgAgLgEIALAAQACAAADgCQADgDAAgDQAAgEgDgCQgDgBgEAAIgJAAg");
	this.shape_27.setTransform(-42.9,130.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAWQgKgJABgNQAAgNAJgIQAIgJANAAQANAAAKAJQAIAIABANQgBANgIAJQgKAJgNAAQgMAAgJgJgAgNgPQgGAGAAAJQAAAKAGAGQAGAGAHAAQAIAAAHgGQAGgGAAgKQAAgJgGgGQgHgGgIAAQgHAAgGAGg");
	this.shape_28.setTransform(-49.6,130.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAeIgWgbIgCADIAAAYIgLAAIAAg7IALAAIAAAZIAWgZIAMAAIgYAbIAcAgg");
	this.shape_29.setTransform(-55.5,130.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPAWQgJgJAAgNQAAgNAJgIQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgHAGAAAJQAAAKAHAGQAGAGAHAAQALAAAIgJIAAAMQgIAGgLAAQgMAAgJgJg");
	this.shape_30.setTransform(-61.7,130.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQABgNAIgIQAKgJAMAAQAOAAAIAJQAJAIAAANQAAANgJAJQgIAJgOAAQgMAAgJgJgAgNgPQgHAGABAJQgBAKAHAGQAGAGAHAAQAJAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgJAAQgHAAgGAGg");
	this.shape_31.setTransform(-68.2,130.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfgRIgKBCIgLAAIAQhkIAkBPIAmhQIAPBlIgLAAIgJhCIghBGg");
	this.shape_32.setTransform(-77.9,128.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAeIAAgxIgTAAIAAgKIAvAAIAAAKIgTAAIAAAxg");
	this.shape_33.setTransform(-89,130.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_34.setTransform(-93.2,130.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAIQAIgJAKAAQAOAAAIAKQAIAIAAANQAAANgIAIQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAAKQAAAKAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgKQAAgJgGgHQgGgGgHAAQgHAAgFAGg");
	this.shape_35.setTransform(-98.6,132.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AANAeIAAgxIgZAAIAAAxIgLAAIAAg7IAvAAIAAA7g");
	this.shape_36.setTransform(-105.5,130.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAPIAKggIAJAEIgMAfg");
	this.shape_37.setTransform(-113.9,133.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAWAAQAHAAAFAEQAFAFAAAGQAAAIgHAEQAFACADAAQAFAFAAAHQAAAJgGAEQgGAFgJAAgAgMAUIAMAAQAGAAADgCQAEgCgBgEQAAgFgCgCQgDgCgHAAIgMAAgAgMgEIAMAAQACAAACgCQAEgDAAgDQAAgEgEgCQgCgBgEAAIgKAAg");
	this.shape_38.setTransform(-117.7,130.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEArIAAg6IAJAAIAAA6gAAEgeQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACADAAACQAAAHgHAAQgDAAgCgCgAgPgjQAAgHAHAAQADAAACACQACADAAACQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_39.setTransform(-122.1,129.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgZgcIALAAIAAAmIAogrIAAA/IgLAAIAAgmIgoAqg");
	this.shape_40.setTransform(-126.6,130.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AATAwIgmgtIgDADIAAAqIgKAAIAAhfIAKAAIAAApIAogpIAOAAIgsAtIAtAyg");
	this.shape_41.setTransform(-133.3,128.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAGATIgCglIAMAAIgCAlgAgNATIgCglIAMAAIgCAlg");
	this.shape_42.setTransform(131.2,109.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQAMAAAHAKIAAgJIALAAIAAA6IgLAAIAAgIQgIAKgLAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAFAGQAGAHAHAAQAJAAAGgHQAFgGAAgJQAAgJgGgHQgGgFgIAAQgGAAgGAGg");
	this.shape_43.setTransform(124.7,114.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAOAdIAAgZIgbAAIAAAZIgKAAIAAg6IAKAAIAAAZIAbAAIAAgZIAKAAIAAA6g");
	this.shape_44.setTransform(117.6,114.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEArIAAg6IAIAAIAAA6gAAEgdQgCgDgBgDQABgHAHAAQAIAAAAAHQAAADgCADQgDACgDAAQgDAAgCgCgAgNgdQgCgDAAgDQAAgHAHAAQAHAAAAAHQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_45.setTransform(112.7,112.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQALAAAIAKIAAgJIALAAIAAA6IgLAAIAAgIQgHAKgMAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAGAGQAFAHAHAAQAJAAAGgHQAFgGAAgJQAAgJgGgHQgHgFgHAAQgGAAgGAGg");
	this.shape_46.setTransform(107.1,114.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgNgfQgGAGAAALQAAAJAFAFQAGAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgGAGg");
	this.shape_47.setTransform(99.8,115.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AALAdIgWgaIgDAEIAAAWIgKAAIAAg6IAKAAIAAAZIAXgZIAMAAIgYAbIAcAfg");
	this.shape_48.setTransform(93.2,114.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOAwIAMgbIglhEIANAAIAdA3IAZg3IAMAAIgqBfg");
	this.shape_49.setTransform(86.3,112.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_50.setTransform(80,114);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQAMAAAHAKIAAgJIALAAIAAA6IgLAAIAAgIQgIAKgLAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAFAGQAGAHAHAAQAJAAAGgHQAFgGAAgJQAAgKgHgGQgFgFgIAAQgHAAgFAGg");
	this.shape_51.setTransform(73.8,114.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_52.setTransform(67.6,114.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAWQgIgJgBgNQABgMAIgJQAKgJAMAAQAOAAAIAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgKgJgAgOgPQgGAGAAAJQAAAKAGAGQAHAGAHAAQAIAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgIAAQgHAAgHAGg");
	this.shape_53.setTransform(61.3,114.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQACAIAIAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_54.setTransform(53.8,112.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQAAgMAJgJQAJgJANAAQANAAAJAJQAKAJAAAMQAAANgKAJQgJAJgNAAQgMAAgJgJgAgNgPQgHAGAAAJQAAAKAHAGQAGAGAHAAQAIAAAGgGQAHgGAAgKQAAgJgHgGQgGgGgIAAQgIAAgFAGg");
	this.shape_55.setTransform(46.4,114.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEAwIAAhUIgXAAIAAgLIA3AAIAAALIgXAAIAABUg");
	this.shape_56.setTransform(40.4,112.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAGATIgCglIAMAAIgCAlgAgNATIgCglIAMAAIgCAlg");
	this.shape_57.setTransform(34.9,109.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEAwIAAhfIAJAAIAABfg");
	this.shape_58.setTransform(27.3,112.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgEAwIAAhfIAJAAIAABfg");
	this.shape_59.setTransform(23.7,112.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAZAwIAAhUIgwAAIAABUIgLAAIAAhfIBFAAIAABfg");
	this.shape_60.setTransform(17.1,112.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAALQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgFAGg");
	this.shape_61.setTransform(5.2,115.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQAAgMAJgJQAKgJAMAAQAOAAAJAJQAJAJAAAMQAAANgJAJQgKAJgNAAQgMAAgJgJgAgNgPQgHAGAAAJQAAAKAHAGQAGAGAHAAQAIAAAGgGQAHgGAAgKQAAgJgHgGQgFgGgJAAQgHAAgGAGg");
	this.shape_62.setTransform(-2.6,114.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_63.setTransform(-9,114.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgNAUQgGgJgBgHIgKAAIAAAZIgLAAIAAg6IALAAIAAAZIALAAQABgKAHgHQAJgJAMAAQAOAAAJAJQAJAJAAAMQAAANgJAJQgJAJgOAAQgPAAgIgLgAgDgPQgGAGAAAJQAAAKAHAGQADAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgJAAQgJAAgEAGg");
	this.shape_64.setTransform(-16.4,114.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCATIgCglIAKAAIgCAlg");
	this.shape_65.setTransform(-22.9,109.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgVArQgKgJABgVQAAgkARgMQAGgFANgDQAJgCADgFIAMAAQgEAMgQAEQgMADgGAEQgLAKgBARQAHgLANABQAOAAAIAJQAKAHgBANQABAOgKAJQgJAJgNAAQgMAAgJgIgAgNACQgGAHgBAKQABALAGAGQAGAFAHABQAJgBAFgFQAHgGAAgLQAAgKgHgHQgFgDgJAAQgHAAgGADg");
	this.shape_66.setTransform(-28.1,112.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgZgdIALAAIAAAnIAngrIAAA+IgKAAIAAglIgoAqg");
	this.shape_67.setTransform(-35.5,114.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAALQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgFAGg");
	this.shape_68.setTransform(-42.8,115.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_69.setTransform(-49.3,114.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgPAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAHAAQAMAAAHgKIAAANQgIAGgLAAQgMAAgJgJg");
	this.shape_70.setTransform(-55.1,114.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgZgdIALAAIAAAnIAogrIAAA+IgLAAIAAglIgoAqg");
	this.shape_71.setTransform(-61.8,114.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAXAmIAAgRIgsAAIAAARIgKAAIAAgaQAIAAADgIQADgEAAgKIAAgbIAoAAIAAAxIAJAAIAAAagAgHgFQAAALgHAGIAbAAIAAgnIgUAAg");
	this.shape_72.setTransform(-68.8,114.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQACAIAIAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_73.setTransform(-79.1,112.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgZgdIALAAIAAAnIAngrIAAA+IgKAAIAAglIgoAqg");
	this.shape_74.setTransform(-86.3,114.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAOAdIAAgZIgbAAIAAAZIgKAAIAAg6IAKAAIAAAZIAbAAIAAgZIAKAAIAAA6g");
	this.shape_75.setTransform(-93.4,114.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAogrIAAA/IgLAAIAAgoIgnAsgAgUgqIAJgDQADAIAIAAQAKAAACgIIAJADQgFAOgQAAQgNAAgHgOg");
	this.shape_76.setTransform(-100.4,112.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgEAsIAAg6IAJAAIAAA6gAgEgeQgCgDAAgDQAAgDACgCQADgCABgBQACABADACQACACAAADQAAADgCADQgDACgCAAQgBAAgDgCg");
	this.shape_77.setTransform(-105.5,112.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AATAmIAAgRIgvAAIAAg6IALAAIAAAxIAZAAIAAgxIALAAIAAAxIAKAAIAAAag");
	this.shape_78.setTransform(-110,114.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgEAsIAAg6IAIAAIAAA6gAgDgeQgDgDAAgDQAAgDADgCQABgCACgBQACABADACQACACAAADQAAADgCADQgDACgCAAQgCAAgBgCg");
	this.shape_79.setTransform(-115.4,112.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgEBBIAAghQgQAAgJgIQgLgJAAgOQAAgNALgIQAJgIAQAAIAAgkIAJAAIAAAkQAQAAAKAIQAKAIAAANQAAAOgLAJQgJAIgQAAIAAAhgAAFgTIAAAqQALAAAGgFQAIgFAAgMQAAgLgJgFQgGgEgIAAIgCAAgAgUgPQgJAFAAALQAAAMAJAFQAGAFAKAAIAAgqIgDAAQgHAAgGAEg");
	this.shape_80.setTransform(-121.7,114);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgOAUgBQAUABAQAOQAOAOAAAUQAAAVgOAOQgPAOgVAAQgUAAgOgOgAgagaQgMALAAAPQAAAQAMAMQAMALAOAAQAQAAAMgLQALgMAAgQQAAgPgLgLQgMgNgQAAQgOAAgMANg");
	this.shape_81.setTransform(-132.2,112.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAghhbIAPgFQAEANAOAAQAOAAAFgNIAPAFQgIAWgaAAQgZAAgIgWg");
	this.shape_82.setTransform(131.4,-68);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Ag6hJIAQAAIAABwIBlh3IAACaIgQAAIAAhwIhlB3g");
	this.shape_83.setTransform(115.5,-66.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAmBKIAAhJIhLAAIAABJIgQAAIAAiTIAQAAIAAA8IBLAAIAAg8IAQAAIAACTg");
	this.shape_84.setTransform(100.2,-66.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAgZhPQgGgFgCgHIAPgFQAEANAOAAQAPgBAEgMIAPAFQgIAWgaAAQgPAAgKgKg");
	this.shape_85.setTransform(84.9,-68);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_86.setTransform(74.2,-66.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAuBaIAAggIhrAAIAAiTIAQAAIAACEIBKAAIAAiEIAQAAIAACEIARAAIAAAvg");
	this.shape_87.setTransform(64.9,-64.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_88.setTransform(54,-66.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgHBNIAAgVIgDAAQgmAAgRgUQgOgPAAgVQAAgXAOgQQARgTAmAAIADAAIAAgSIAPAAIAAASIAEAAQAmAAARATQANAPAAAYQAAAVgNAPQgRAUgmAAIgEAAIAAAVgAAIAoIAFAAQAbABANgOQALgMgBgPQABgRgLgMQgNgNgbAAIgFAAgAg0gdQgKAMAAARQAAAPAKAMQANAOAcgBIAEAAIAAhSIgEAAQgcAAgNANg");
	this.shape_89.setTransform(42.1,-66.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag2A3QgWgXAAggQAAggAWgWQAXgWAfAAQAgAAAWAWQAXAWAAAgQAAAggXAXQgWAWggAAQgfAAgXgWgAgpgqQgSASAAAYQAAAZASASQARASAYAAQAZAAARgSQASgSAAgZQAAgYgSgSQgRgSgZAAQgYAAgRASg");
	this.shape_90.setTransform(24.1,-66.4);

	// Layer 1
	this.instance = new lib.urTextMc();
	this.instance.setTransform(-2.7,122.9);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-137,-17,274,34);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAghhbIAPgFQAEANAOAAQAOAAAFgNIAPAFQgIAWgaAAQgZAAgIgWg");
	this.shape_91.setTransform(131.4,-68);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("Ag6hJIAQAAIAABwIBlh3IAACaIgQAAIAAhwIhlB3g");
	this.shape_92.setTransform(115.5,-66.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAmBKIAAhJIhLAAIAABJIgQAAIAAiTIAQAAIAAA8IBLAAIAAg8IAQAAIAACTg");
	this.shape_93.setTransform(100.2,-66.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAgZhPQgGgFgCgHIAPgFQAEANAOAAQAPgBAEgMIAPAFQgIAWgaAAQgPAAgKgKg");
	this.shape_94.setTransform(84.9,-68);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_95.setTransform(74.2,-66.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAuBaIAAggIhrAAIAAiTIAQAAIAACEIBKAAIAAiEIAQAAIAACEIARAAIAAAvg");
	this.shape_96.setTransform(64.9,-64.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_97.setTransform(54,-66.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgHBNIAAgVIgDAAQgmAAgRgUQgOgPAAgVQAAgXAOgQQARgTAmAAIADAAIAAgSIAPAAIAAASIAEAAQAmAAARATQANAPAAAYQAAAVgNAPQgRAUgmAAIgEAAIAAAVgAAIAoIAFAAQAbABANgOQALgMgBgPQABgRgLgMQgNgNgbAAIgFAAgAg0gdQgKAMAAARQAAAPAKAMQANAOAcgBIAEAAIAAhSIgEAAQgcAAgNANg");
	this.shape_98.setTransform(42.1,-66.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ag2A3QgWgXAAggQAAggAWgWQAXgWAfAAQAgAAAWAWQAXAWAAAgQAAAggXAXQgWAWggAAQgfAAgXgWgAgpgqQgSASAAAYQAAAZASASQARASAYAAQAZAAARgSQASgSAAgZQAAgYgSgSQgRgSgZAAQgYAAgRASg");
	this.shape_99.setTransform(24.1,-66.4);

	this.addChild(this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.instance,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139.8,-77.8,277.2,220.8);


(lib.t3_6 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("APtCBQgHgHAAgJQAAgLAHgGQAHgIAKABQAKgBAHAIQAHAGAAALQAAAJgHAHQgHAIgKgBQgKABgHgIgAOXCFIAAjMIApAAIAADMgANBCFIAAhcIhXAAIAABcIgpAAIAAjMIApAAIAABOIBXAAIAAhOIAnAAIAADMgAJrCFIAAjMIAoAAIAADMgAInCFIgSgsIhTAAIgSAsIgrAAIBZjRIAeAAIBWDRgAIKA4IgdhIIgeBIIA7AAgAEFCFIAAjMIA7AAQAUAAAKACQANAEAMAKQAUASAAAfQAAAbgRARQgRASgjAAIgaAAIAABNgAEsAVIAQAAQATABAIgHQALgIAAgOQAAgQgMgHQgIgGgUAAIgOAAgAC2CFIhJhdIgEAFIAABYIgpAAIAAjMIApAAIAABVIBLhVIAzAAIhYBcIBcBwgAhhCFIAdg6IhMiSIAuAAIA1BlIAshlIAqAAIheDMgAlxCFIAAjMIAyAAQAiAAARAMQATAPAAAcQAAAagXANQAQACALAKQAPAPgBAYQAAAagRAQQgTAQghABgAlJBjIARAAQATAAAIgFQANgHAAgQQAAgRgPgHQgJgEgSAAIgPAAgAlJAMIAMAAQAeAAAAgZQAAgZgeAAIgMAAgApSCFIAAjMIByAAIAAAjIhKAAIAAArIBHAAIAAAjIhHAAIAAA4IBKAAIAAAjgAqZCFIhChdIgFAFIAABYIgmAAIAAhYIgFgFIhCBdIguAAIBShwIhPhcIAtAAIBFBVIAAhVIAmAAIAABVIBFhVIAtAAIhPBcIBSBwgAwVCFIAAjMIAzAAQAhAAARAMQATAPAAAcQAAAagXANQAQACALAKQAOAPAAAYQAAAagRAQQgTAQghABgAvtBjIARAAQASAAAJgFQAOgHAAgQQgBgRgPgHQgIgEgTAAIgPAAgAvtAMIALAAQAgAAAAgZQAAgZggAAIgLAAgAPrBGIAAiNIAmAAIAACNgAKLhoQgGgGABgHQgBgIAGgFQAFgGAIABQAHgBAGAGQAFAFAAAIQAAAHgFAGQgGAFgHABQgIgBgFgFgAJZhoQgFgGgBgHQABgIAFgFQAFgGAIABQAHgBAGAGQAGAFgBAIQABAHgGAGQgGAFgHABQgIgBgFgFg");

	// Слой 1
	this.instance = new lib.t3_6Mc();
	this.instance.setTransform(2,2);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-107,-16,213,31);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.6,-14.7,218,36);


(lib.t3_5 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHPBEIAagZQAHAOANAHQALAHAMAAQAOgBAJgHQAJgIAAgMQAAgLgIgIQgHgHgZgJQgWgHgMgIQgQgPAAgXQAAgaAQgQQARgTAhAAQAiAAAYAYIgVAcQgNgSgVAAQgOAAgIAIQgGAHAAAJQAAAIAHAGQAEAFAVAGQAdALAMALQARANAAAbQABAegVAUQgTASggAAQgsAAgbgngABKBEIAagZQAHAOANAHQALAHAMAAQAOgBAJgHQAJgIAAgMQAAgLgIgIQgIgHgYgJQgWgHgMgIQgQgOgBgYQAAgZAQgRQATgTAgAAQAiAAAYAYIgVAcQgNgSgVAAQgOAAgIAIQgGAHAAAJQAAAIAHAGQAFAFATAGQAdALAMALQASAMAAAcQAAAegTAUQgVASggAAQgsAAgagngAhPBjQgSgHgLgOQgPgVAAgiIAAh8IAoAAIAAB/QAAATAKALQAMAOAUABQAVgBAMgOQAIgMAAgSIAAh/IAoAAIAAB8QAAAigPAVQgLAOgQAHQgSAIgVAAQgUAAgSgIgAFDBmIAAjLIByAAIAAAiIhKAAIAAAuIBHAAIAAAgIhHAAIAAA5IBKAAIAAAigAjJBmIgthLIgwBLIgvAAIBIhqIg9hhIAwAAIAkBAIAmhAIAwAAIg/BhIBGBqgAnaBmIAAjLIBzAAIAAAiIhKAAIAAAuIBHAAIAAAgIhHAAIAAA5IBKAAIAAAigApcBmIAAjLIAnAAIAACpIBAAAIAAAig");

	// Слой 1
	this.instance = new lib.t3_5Mc();
	this.instance.setTransform(2,2);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-63,-13,125,26);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.6,-11.7,130,30);


(lib.t3_4 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB8BNQgfgeAAgvQAAgtAfgfQAegeAxAAQAwAAAfAeQAeAfABAtQgBAvgeAeQgfAegwAAQgxAAgegegACZgyQgTAVAAAdQAAAfATAUQAUAUAeAAQAdAAAUgUQATgUAAgfQAAgdgTgVQgUgTgdgBQgeABgUATgAkfBEIAagZQAHAPAPAIQANAIARgBQAUAAAKgJQAJgJAAgMQAAgggtAAIgSAAIAAggIASAAQAQAAAJgHQAKgHAAgMQAAgYgdAAQgbABgPAQIgVgcQAbgYAlAAQAeAAATAPQASAOAAAZQAAAdgaAOQATAEAKAOQAKAOAAAUQAAAdgYASQgWARgkAAQg1AAgYgngAn2BNQgfgeABgvQgBgtAfgfQAfgeAwAAQAwAAAgAeQAeAfAAAtQAAAvgeAeQggAegwAAQgwAAgfgegAnYgyQgUAVAAAdQAAAfAUAUQATAUAeAAQAeAAATgUQAUgUgBgfQABgdgUgVQgTgTgegBQgeABgTATgAKIBmIAAjLIApAAIAADLgAFeBmIAAjLIAnAAIAACpIBDAAIAAipIAnAAIAACpIBCAAIAAipIApAAIAADLgAAZBmIhHhcIgFAFIAABXIgoAAIAAjLIAoAAIAABWIBKhWIAyAAIhVBeIBaBtgAqwBmIAAjLIA8AAQAUAAAKADQAOADAKAJQAWATgBAfQAAAegQAOQgSASgiAAIgaAAIAABMgAqHgHIAQAAQASAAAIgGQAMgJAAgPQAAgQgMgHQgJgHgUAAIgNAAg");

	// Слой 1
	this.instance = new lib.t3_4Mc();
	this.instance.setTransform(2,2);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-71,-13,142,26);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.9,-11.7,146,30);


(lib.t3_3 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHdBrQgegeAAgwQAAgtAegeQAfgeAwAAQAxAAAfAeQAeAeAAAtQAAAwgeAeQgfAegxAAQgwAAgfgegAH7gUQgTAUAAAdQAAAgATAUQATATAeAAQAeAAAUgTQATgUAAggQAAgdgTgUQgUgUgeAAQgeAAgTAUgAl1BiIAbgZQAHAPAPAIQAOAHAQAAQATAAALgJQAJgIAAgNQAAgggtAAIgSAAIAAgiIASAAQAQAAAJgHQAJgFAAgMQAAgYgdAAQgaAAgPAQIgVgbQAbgYAkAAQAfAAATAPQASAOAAAZQAAAbgaAOQATAEAKAQQAKAOAAATQAAAdgXASQgXASgkAAQg1AAgZgngApNCIIAAjPIAoAAIAACIIBxiNIAcAAIAADQIgoAAIAAiJIhyCNgAK/CEIAAjLIAoAAIAADLgAFyCEIAAhbIhXAAIAABbIgoAAIAAjLIAoAAIAABNIBXAAIAAhNIAoAAIAADLgACvCEIgSgrIhTAAIgSArIgrAAIBZjQIAeAAIBWDQgACRA4IgdhIIgdBIIA6AAgAgyCEIAAhbIhWAAIAABbIgoAAIAAjLIAoAAIAABNIBWAAIAAhNIApAAIAADLgAr9CEIAAjLIAzAAQAhAAARAMQATAQAAAbQAAAZgXANQARADAKAKQAPAPAAAYQAAAagSAPQgSARgiAAgArVBjIARAAQATAAAJgFQAMgHAAgRQAAgQgPgHQgIgEgTAAIgPAAgArVAMIALAAQAfAAAAgZQAAgageAAIgMAAgALfhoQgGgGAAgHQAAgIAGgFQAFgGAIAAQAIAAAFAGQAFAFAAAIQAAAHgFAGQgFAFgIAAQgIAAgFgFgAKthoQgFgGAAgHQAAgIAFgFQAFgGAIAAQAIAAAFAGQAGAFAAAIQAAAHgGAGQgFAFgIAAQgIAAgFgFg");

	// Слой 1
	this.instance = new lib.t3_3Mc();
	this.instance.setTransform(2,2);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-79,-16,157,32);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.6,-14.7,162,36);


(lib.t3_2 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkVBlIAAgiQAEACAHAAQALgBAIgGQAHgIACgNIABgbIAAh0ICMAAIAADLIgoAAIAAipIg8AAIAABZQAAAZgDAKQgEAWgPAMQgQANgZAAgAJoBlIAAhPIgHAAIg0BPIgwAAIA9hTQgMgCgLgHQgXgPAAggQAAgeAUgTQASgPAjAAIA8AAIAADLgAI1gmQAAAeAoAAIALAAIAAg+IgMAAQgnAAAAAggAG5BlIAAhbIhWAAIAABbIgpAAIAAjLIApAAIAABPIBWAAIAAhPIAoAAIAADLgADkBlIAAhbIhXAAIAABbIgoAAIAAjLIAoAAIAABPIBXAAIAAhPIAoAAIAADLgAgyBlIAAjLIBwAAIAAAiIhIAAIAAAuIBFAAIAAAgIhFAAIAAA5IBIAAIAAAigAlYBlIAAjLIAoAAIAADLgAnHBlIAAipIgvAAIAAgiICFAAIAAAiIguAAIAACpgAqQBlIAAjLIAzAAQAiAAAQANQAUAPAAAbQAAAdgYALQARADAKAJQAPAOAAAYQAAAagSAPQgSASgigBgApoBFIASAAQASAAAJgGQANgHAAgRQAAgQgPgHQgJgEgTAAIgPAAgApogRIAMAAQAfAAAAgbQAAgagfAAIgMAAg");

	// Слой 1
	this.instance = new lib.t3_2Mc();
	this.instance.setTransform(2,2);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-68,-12,136,25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.7,-11.3,140,30);


(lib.t3_1 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkpBNQgfgeAAgvQAAgtAfgfQAegeAxAAQAwAAAfAeQAeAfABAtQgBAvgeAeQgfAegwAAQgxAAgegegAkMgyQgTAVAAAdQAAAfATAUQAUAUAeAAQAdAAAUgUQATgUAAgfQAAgdgTgVQgUgTgdgBQgeABgUATgAr2BNQgegegBgvQABgtAegfQAfgeAwAAQAwAAAfAeQAfAfAAAtQAAAvgfAeQgfAegwAAQgxAAgegegArYgyQgTAVAAAdQAAAfATAUQATAUAeAAQAeAAAUgUQASgUAAgfQAAgdgSgVQgUgTgegBQgeABgTATgABRBmIAAgiQAGABAGABQALAAAHgIQAIgHABgNIACgbIAAh0ICLAAIAADLIgnAAIAAipIg8AAIAABaQAAAXgCALQgGAVgOAMQgQAOgaAAgAKjBmIAAjLIBzAAIAAAiIhKAAIAAAuIBGAAIAAAgIhGAAIAAA5IBKAAIAAAigAJMBmIAAhbIhWAAIAABbIgpAAIAAjLIApAAIAABPIBWAAIAAhPIApAAIAADLgAE0BmIAAjLIByAAIAAAiIhJAAIAAAuIBHAAIAAAgIhHAAIAAA5IBJAAIAAAigAhHBmIAAjLIAyAAQAgAAAQAMQAUAPgBAcQAAAcgWAMQAQADAKAJQAPAOAAAYQAAAagSAQQgSAQgfAAgAggBGIARAAQARgBAJgFQANgHAAgQQAAgRgQgHQgIgEgRAAIgPAAgAgggQIAMAAQAdAAAAgbQAAgagdAAIgMAAgAmVBmIAAhbIhXAAIAABbIgoAAIAAjLIAoAAIAABPIBXAAIAAhPIAoAAIAADLg");

	// Слой 1
	this.instance = new lib.t3_1Mc();
	this.instance.setTransform(2,2);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-81,-13,162,26);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-11.7,168,30);


(lib.t2_2 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJBtQgfggAAgvQAAgxAfgdQAdgcAuAAQAbAAAYAOIAAAuQgVgXgcAAQgfAAgUAWQgSATAAAdQAAAgAWAUQAUASAcAAQAdAAATgWIAAAuQgXAMgcAAQgsAAgfgcgAr5BtQghggAAgvQAAgxAhgdQAdgcAvAAQAbAAAXAOIAAAuQgVgXgdAAQgeAAgUAWQgSATAAAdQAAAgAWAUQAUASAcAAQAdAAATgWIAAAuQgXAMgcAAQgsAAgfgcgAJmCJIAAjQIAoAAIAACIIBxiNIAcAAIAADRIgoAAIAAiJIhyCNgAGCCJIAAjQIAoAAIAACIIBxiNIAcAAIAADRIgoAAIAAiJIhyCNgAErCFIAAhbIhXAAIAABbIgoAAIAAjMIAoAAIAABOIBXAAIAAhOIAoAAIAADMgAhPCFIgTgrIhSAAIgSArIgsAAIBZjQIAeAAIBXDQgAhtA5IgdhIIgeBIIA7AAgAkyCFIAAhSQgSACgSAAQgmAAgRgNQgVgQAAggIAAg/IAoAAIAAA4QAAATAKAHQAKAIATgBQATAAAOgBIAAhYIAoAAIAADMgAo9CFIAcg6IhMiSIAvAAIA0BmIAshmIAsAAIhgDMgAKJh9IAbgLQAHASAVAAQAVAAAHgSIAcALQgNAigrAAQgqAAgNgig");

	// Слой 1
	this.instance = new lib.t2_2Mc();
	this.instance.setTransform(1,2);
	this.instance.alpha = 0.602;
	this.instance.shadow = new cjs.Shadow("#000000",0,0,6);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.5,-15.8,170,38);


(lib.t2_1 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALQCJIAAjPIAoAAIAACIIBxiNIAcAAIAADQIgoAAIAAiJIhyCNgAHrCJIAAjPIApAAIAACIIBxiNIAcAAIAADQIgoAAIAAiJIhyCNgAr/CFIAAgiQAEABAHAAQALAAAIgHQAHgHACgNIABgcIAAhzICMAAIAADLIgoAAIAAipIg8AAIAABZQAAAYgCALQgFAVgPAMQgQAOgZAAgAGVCFIAAhbIhXAAIAABbIgoAAIAAjLIAoAAIAABNIBXAAIAAhNIAoAAIAADLgACmCFIAAipIguAAIAAgiICEAAIAAAiIguAAIAACpgAA2CFIAAhbIhUAAIAABbIgpAAIAAjLIApAAIAABNIBUAAIAAhNIApAAIAADLgAiKCFIgSgrIhTAAIgSArIgrAAIBZjQIAeAAIBWDQgAioA5IgdhIIgdBIIA6AAgAmDCFIAAjLIBtAAIAAAiIhFAAIAACpgAocCFIAAjLIByAAIAAAiIhKAAIAAAsIBHAAIAAAiIhHAAIAAA5IBKAAIAAAigAuECFIAAjLIByAAIAAAiIhKAAIAAAsIBHAAIAAAiIhHAAIAAA5IBKAAIAAAigALzh9IAbgLQAHASAVAAQAVAAAHgSIAcALQgNAigrAAQgqAAgNgig");

	// Слой 1
	this.instance = new lib.t2_1Mc();
	this.instance.setTransform(1.8,2.8);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-92,-16,184,32);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.3,-14,189,37);


(lib.t1_3 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIcBPIAegdQAIARAPAIQAMAHAPAAQAQAAALgJQAKgJAAgPQAAgMgKgJQgJgJgbgJQgcgKgMgJQgTgQAAgcQAAgdASgUQAVgWAmAAQAoAAAbAcIgYAgQgPgUgYAAQgRAAgJAJQgHAIAAALQAAAKAIAGQAFAFAXAJQAkAMAMAMQAVAPAAAhQAAAjgXAWQgXAWglAAQg0AAgegugABWBPIAegdQAIARAQAIQANAHAOAAQAQAAALgJQAKgJAAgPQAAgMgJgJQgJgIgcgKQgcgKgMgJQgUgRAAgbQAAgdATgUQAVgWAmAAQAoAAAbAcIgYAgQgQgUgXAAQgSAAgIAJQgHAIAAALQAAAKAHAGQAGAFAXAJQAkAMANAMQAUAPAAAhQAAAjgXAWQgXAWglAAQg0AAgfgugAhbB0QgWgJgMgRQgSgXAAgpIAAiQIAuAAIAACUQAAAXALANQAPAQAYAAQAYAAAOgQQAJgNAAgXIAAiUIAuAAIAACQQAAApgRAXQgNARgTAJQgVAJgXAAQgZAAgTgJgAF5B3IAAjtICEAAIAAAoIhWAAIAAA1IBSAAIAAAnIhSAAIAABBIBWAAIAAAogAjqB3Ig1hXIg2BXIg4AAIBUh8IhIhxIA4AAIAqBKIAthKIA3AAIhJBxIBSB8gAonB3IAAjtICEAAIAAAoIhVAAIAAA1IBSAAIAAAnIhSAAIAABBIBVAAIAAAogArAB3IAAjtIAvAAIAADFIBJAAIAAAog");

	// Слой 1
	this.instance = new lib.t1_3Mc();
	this.instance.setTransform(2,2);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-72,-14,145,29);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-13.5,150,34);


(lib.t1_2 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKJCVIAAg2IiTAAIAAA2IgrAAIAAheQAMAAALgKQAJgIAGgPQAJgUAAgoIAAhoIChAAIAADFIAZAAIAABegAIngmQAAApgIAXQgHASgMALIBgAAIAAidIhFAAgABzBDQgnglABg1QgBg6AngjQAiggA2AAQAfAAAcAPIAAA2QgXgbgjAAQgjAAgXAaQgVAYAAAiQAAAkAaAXQAWAVAhAAQAiAAAWgaIAAA2QgbAOggAAQg0AAgkghgAi3BDQgnglAAg1QAAg6AngjQAhggA2AAQAgAAAcAPIAAA2QgYgbgiAAQgkAAgWAaQgVAYAAAiQAAAkAZAXQAXAVAhAAQAhAAAXgaIAAA2QgbAOghAAQgzAAgkghgAthA3IAegdQAIASASAJQAQAIATAAQAWAAANgLQALgJAAgPQAAgjg1AAIgVAAIAAgoIAVAAQATAAAKgIQAMgIAAgOQAAgcgjAAQgfAAgRATIgYggQAegcArAAQAlAAAUARQAWARAAAdQAAAigeAQQAWAGAMARQALAOAAAXQAAAigbAVQgbAUgpAAQg+AAgcgtgARYBfIAAhpIhlAAIAABpIgvAAIAAjtIAvAAIAABcIBlAAIAAhcIAvAAIAADtgAN2BfIgVgyIhhAAIgVAyIgzAAIBojyIAkAAIBkDygANUAHIgihVIgjBVIBFAAgAExBfIAAjtICFAAIAAAoIhXAAIAAA1IBTAAIAAAoIhTAAIAABAIBXAAIAAAogAmEBfIAAjtICEAAIAAAoIhVAAIAAA1IBSAAIAAAoIhSAAIAABAIBVAAIAAAogAnpBfIAAhpIhmAAIAABpIguAAIAAjtIAuAAIAABcIBmAAIAAhcIAvAAIAADtgAu5BfIAAjtIAuAAIAADtgAyGBfIAAjtICLAAIAAAoIhdAAIAAA3IAhAAQAmAAAWATQAXAVgBAeQAAAYgNATQgUAdgxAAgAxYA3IAXAAQAtAAAAggQgBgegrAAIgYAAg");

	// Слой 1
	this.instance = new lib.t1_2Mc();
	this.instance.setTransform(2,2);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-118,-17,236,34);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.9,-15.9,240,38);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoHB9QgjgjAAg3QAAg1AjgjQAlgjA4AAQA4AAAkAjQAkAjAAA1QAAA3gkAjQgkAjg4AAQg4AAglgjgAnkgWQgWAWAAAjQAAAlAWAXQAXAXAjAAQAjAAAWgXQAWgXAAglQAAgjgWgWQgWgYgjAAQgjAAgXAYgAweB9QgkgjAAg3QAAg1AkgjQAjgjA5AAQA4AAAkAjQAjAjAAA1QAAA3gjAjQgkAjg4AAQg5AAgjgjgAv7gWQgXAWAAAjQAAAlAXAXQAVAXAkAAQAjAAAWgXQAWgXABglQgBgjgWgWQgXgYgiAAQgkAAgVAYgANwCfIAAjyIAuAAIAACfICFikIAgAAIAADzIgvAAIAAigIiECkgAJmCfIAAjyIAvAAIAACfICEikIAhAAIAADzIgvAAIAAigIiECkgAhKCbIAAgpQAFADAHAAQANAAAJgJQAIgIADgQQABgJAAgXIAAiHIChAAIAADuIguAAIAAjGIhGAAIAABpQAAAcgDAMQgGAZgPAOQgUAQgcAAQgLAAgIgCgAIBCbIAAhrIhlAAIAABrIguAAIAAjuIAuAAIAABbIBlAAIAAhbIAvAAIAADugAC8CbIAAjuICEAAIAAAoIhWAAIAAA0IBSAAIAAAoIhSAAIAABBIBWAAIAAApgAkACbIAAjuIA7AAQAoAAATAPQAXASgBAgQAAAegbAPQARACAPANQARARAAAcQAAAegVASQgWAUgmAAgAjRB1IAVAAQAUAAALgHQAPgJAAgSQAAgUgSgIQgKgEgVAAIgSAAgAjRAPIANAAQAlAAgBgeQAAgPgKgIQgJgHgQAAIgOAAgAqECbIAAhrIhlAAIAABrIguAAIAAjuIAuAAIAABbIBlAAIAAhbIAvAAIAADugAOxh1QgRgKgHgTIAggNQAIAVAZAAQAYAAAHgVIAhANQgQAogwAAQgZAAgQgLg");

	// Слой 1
	this.instance = new lib.t1_1Mc();
	this.instance.setTransform(2,2);
	this.instance.alpha = 0.602;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-111,-18,222,36);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.1,-17,228,42);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t4
	this.instance = new lib.t5();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(349).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(70,271.9,0.421,0.42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(339).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(55).to({scaleX:0.42,scaleY:0.42,x:70,y:271.9},10).wait(1));

	// dillers
	this.instance_2 = new lib.dillers();
	this.instance_2.setTransform(-262.4,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(299).to({_off:false},0).wait(1).to({x:-256.8},0).wait(1).to({x:-239.6},0).wait(1).to({x:-211},0).wait(1).to({x:-173.1},0).wait(1).to({x:-129.9},0).wait(1).to({x:-87},0).wait(1).to({x:-49.8},0).wait(1).to({x:-22},0).wait(1).to({x:-5.4},0).wait(1).to({x:0},0).wait(25).to({alpha:0},10).to({_off:true},1).wait(70));

	// Слой 35
	this.instance_3 = new lib.bg2();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).to({alpha:0.75},10).wait(105).to({x:0.1,alpha:0},10).wait(1));

	// t3_6
	this.instance_4 = new lib.t3_6();
	this.instance_4.setTransform(254.7,232.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).wait(1).to({regX:2,regY:2,x:251.9,y:234.3},0).wait(1).to({x:237.3},0).wait(1).to({x:212.9},0).wait(1).to({x:180.4},0).wait(1).to({x:143.6},0).wait(1).to({x:107.7},0).wait(1).to({x:77.3},0).wait(1).to({x:55},0).wait(1).to({x:42},0).wait(1).to({regX:0,regY:0,x:35.8,y:232.3},0).wait(61).to({regX:2,regY:2,x:45,y:234.3},0).wait(1).to({x:66.7},0).wait(1).to({x:102.4},0).wait(1).to({x:148.9},0).wait(1).to({x:200.6},0).wait(1).to({x:250.7},0).wait(1).to({x:293.2},0).wait(1).to({x:324.4},0).wait(1).to({x:342.9},0).wait(1).to({regX:0,regY:0,x:346.9,y:232.3},0).to({_off:true},1).wait(115));

	// t3_5
	this.instance_5 = new lib.t3_5();
	this.instance_5.setTransform(299,205.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(214).to({_off:false},0).wait(1).to({regX:2,regY:2,x:296.3,y:207.3},0).wait(1).to({x:281.7},0).wait(1).to({x:257.2},0).wait(1).to({x:224.8},0).wait(1).to({x:188},0).wait(1).to({x:152.1},0).wait(1).to({x:121.6},0).wait(1).to({x:99.4},0).wait(1).to({x:86.3},0).wait(1).to({regX:0,regY:0,x:80.2,y:205.3},0).wait(66).to({regX:2,regY:2,x:89.3,y:207.3},0).wait(1).to({x:111.1},0).wait(1).to({x:146.8},0).wait(1).to({x:193.3},0).wait(1).to({x:245},0).wait(1).to({x:295.1},0).wait(1).to({x:337.5},0).wait(1).to({x:368.7},0).wait(1).to({x:387.3},0).wait(1).to({regX:0,regY:0,x:391.3,y:205.3},0).to({_off:true},1).wait(115));

	// t3_4
	this.instance_6 = new lib.t3_4();
	this.instance_6.setTransform(289.6,-55.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(194).to({_off:false},0).wait(1).to({regX:2,regY:2,x:286.8,y:-53.7},0).wait(1).to({x:272.2},0).wait(1).to({x:247.8},0).wait(1).to({x:215.3},0).wait(1).to({x:178.5},0).wait(1).to({x:142.6},0).wait(1).to({x:112.2},0).wait(1).to({x:89.9},0).wait(1).to({x:76.9},0).wait(1).to({regX:0,regY:0,x:70.7,y:-55.7},0).wait(86).to({regX:2,regY:2,x:79.9,y:-53.7},0).wait(1).to({x:101.6},0).wait(1).to({x:137.3},0).wait(1).to({x:183.8},0).wait(1).to({x:235.5},0).wait(1).to({x:285.6},0).wait(1).to({x:328.1},0).wait(1).to({x:359.3},0).wait(1).to({x:377.8},0).wait(1).to({regX:0,regY:0,x:381.8,y:-55.7},0).to({_off:true},1).wait(115));

	// t3_3
	this.instance_7 = new lib.t3_3();
	this.instance_7.setTransform(284.1,-88.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189).to({_off:false},0).wait(1).to({regX:2,regY:2,x:281.3,y:-86.7},0).wait(1).to({x:266.7},0).wait(1).to({x:242.3},0).wait(1).to({x:209.8},0).wait(1).to({x:173},0).wait(1).to({x:137.1},0).wait(1).to({x:106.7},0).wait(1).to({x:84.4},0).wait(1).to({x:71.4},0).wait(1).to({regX:0,regY:0,x:65.2,y:-88.7},0).wait(91).to({regX:2,regY:2,x:74.4,y:-86.7},0).wait(1).to({x:96.1},0).wait(1).to({x:131.8},0).wait(1).to({x:178.3},0).wait(1).to({x:230},0).wait(1).to({x:280.1},0).wait(1).to({x:322.6},0).wait(1).to({x:353.8},0).wait(1).to({x:372.3},0).wait(1).to({regX:0,regY:0,x:376.3,y:-88.7},0).to({_off:true},1).wait(115));

	// t3_2
	this.instance_8 = new lib.t3_2();
	this.instance_8.setTransform(292.7,-115.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(184).to({_off:false},0).wait(1).to({regX:2,regY:2,x:290,y:-113.6},0).wait(1).to({x:275.4},0).wait(1).to({x:250.9},0).wait(1).to({x:218.5},0).wait(1).to({x:181.7},0).wait(1).to({x:145.8},0).wait(1).to({x:115.3},0).wait(1).to({x:93.1},0).wait(1).to({x:80},0).wait(1).to({regX:0,regY:0,x:73.9,y:-115.6},0).wait(96).to({regX:2,regY:2,x:83,y:-113.6},0).wait(1).to({x:104.8},0).wait(1).to({x:140.5},0).wait(1).to({x:187},0).wait(1).to({x:238.7},0).wait(1).to({x:288.8},0).wait(1).to({x:331.2},0).wait(1).to({x:362.4},0).wait(1).to({x:381},0).wait(1).to({regX:0,regY:0,x:385,y:-115.6},0).to({_off:true},1).wait(115));

	// t3_1
	this.instance_9 = new lib.t3_1();
	this.instance_9.setTransform(280.3,-145.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(179).to({_off:false},0).wait(1).to({regX:2,regY:2,x:277.5,y:-143.7},0).wait(1).to({x:262.9},0).wait(1).to({x:238.5},0).wait(1).to({x:206},0).wait(1).to({x:169.2},0).wait(1).to({x:133.3},0).wait(1).to({x:102.9},0).wait(1).to({x:80.6},0).wait(1).to({x:67.6},0).wait(1).to({regX:0,regY:0,x:61.4,y:-145.7},0).wait(101).to({regX:2,regY:2,x:70.6,y:-143.7},0).wait(1).to({x:92.3},0).wait(1).to({x:128},0).wait(1).to({x:174.5},0).wait(1).to({x:226.2},0).wait(1).to({x:276.3},0).wait(1).to({x:318.8},0).wait(1).to({x:350},0).wait(1).to({x:368.5},0).wait(1).to({regX:0,regY:0,x:372.5,y:-145.7},0).to({_off:true},1).wait(115));

	// img5
	this.instance_10 = new lib.img5_1();
	this.instance_10.setTransform(-500,-1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(169).to({_off:false},0).wait(1).to({x:-492.1},0).wait(1).to({x:-468.4,y:-0.9},0).wait(1).to({x:-430,y:-0.8},0).wait(1).to({x:-379.8,y:-0.7},0).wait(1).to({x:-322.9,y:-0.5},0).wait(1).to({x:-265.6,y:-0.3},0).wait(1).to({x:-214.7,y:-0.2},0).wait(1).to({x:-175.5,y:-0.1},0).wait(1).to({x:-151.1,y:0},0).wait(1).to({x:-143},0).to({x:-124},110).wait(1).to({x:-116.8},0).wait(1).to({x:-95.1},0).wait(1).to({x:-59.4},0).wait(1).to({x:-12.9},0).wait(1).to({x:38.8},0).wait(1).to({x:88.9},0).wait(1).to({x:131.4},0).wait(1).to({x:162.6},0).wait(1).to({x:181.1},0).wait(1).to({x:187.1},0).wait(105).to({alpha:0},10).wait(1));

	// t2_2
	this.instance_11 = new lib.t2_2();
	this.instance_11.setTransform(-233,60.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(119).to({_off:false},0).to({x:-53},10,cjs.Ease.get(-1)).to({_off:true},50).wait(236));

	// t2_1
	this.instance_12 = new lib.t2_1();
	this.instance_12.setTransform(243.5,-229.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).to({x:42.5},10,cjs.Ease.get(-1)).to({_off:true},50).wait(236));

	// blick
	this.instance_13 = new lib.blick_1();
	this.instance_13.setTransform(94.1,51,1,1,0,0,180);
	this.instance_13.alpha = 0;
	this.instance_13.compositeOperation = "lighter";
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(89).to({_off:false},0).to({x:25.7,y:33.7,alpha:1},5).to({x:-42.6,y:16.3},5).to({x:-111,y:-1,alpha:0},5).wait(15).to({x:-70.6,y:9.4,alpha:1},10).to({x:127.1,y:60},49).to({_off:true},1).wait(236));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("A3blcIAAgQMAu3ALJIAAAQg");
	var mask_graphics_106 = new cjs.Graphics().p("A3blGIAAg8MAu3ALJIAAA8g");
	var mask_graphics_107 = new cjs.Graphics().p("A3bkhIAAiGMAu3ALJIAACGg");
	var mask_graphics_108 = new cjs.Graphics().p("A3bjtIAAjvMAu3ALKIAADug");
	var mask_graphics_109 = new cjs.Graphics().p("A3biqIAAl1MAu3ALJIAAF2g");
	var mask_graphics_110 = new cjs.Graphics().p("A3bhYIAAoZMAu3ALKIAAIZg");
	var mask_graphics_111 = new cjs.Graphics().p("A3bAHIAArYMAu3ALLIAALYg");
	var mask_graphics_112 = new cjs.Graphics().p("A3bB3IAAu5MAu3ALLIAAO6g");
	var mask_graphics_113 = new cjs.Graphics().p("A3bD2IAAy3MAu3ALMIAAS2g");
	var mask_graphics_114 = new cjs.Graphics().p("A3bGDIAA3RMAu3ALMIAAXRg");
	var mask_graphics_115 = new cjs.Graphics().p("A3bIgIAA8KMAu3ALLIAAcKg");
	var mask_graphics_116 = new cjs.Graphics().p("A3bLLMAAAghhMAu3ALLMAAAAhig");
	var mask_graphics_117 = new cjs.Graphics().p("A3bOGMAAAgnWMAu3ALLMAAAAnWg");
	var mask_graphics_118 = new cjs.Graphics().p("A3bRPMAAAgtoMAu3ALLMAAAAtog");
	var mask_graphics_119 = new cjs.Graphics().p("A3baUMAAAg0nMAu3ALLMAAAApcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:0,y:-0.4}).wait(1).to({graphics:mask_graphics_106,x:0,y:1.8}).wait(1).to({graphics:mask_graphics_107,x:0,y:5.5}).wait(1).to({graphics:mask_graphics_108,x:0,y:10.8}).wait(1).to({graphics:mask_graphics_109,x:0,y:17.5}).wait(1).to({graphics:mask_graphics_110,x:0,y:25.7}).wait(1).to({graphics:mask_graphics_111,x:0,y:35.3}).wait(1).to({graphics:mask_graphics_112,x:0,y:46.6}).wait(1).to({graphics:mask_graphics_113,x:0,y:59.3}).wait(1).to({graphics:mask_graphics_114,x:0,y:73.4}).wait(1).to({graphics:mask_graphics_115,x:0,y:89}).wait(1).to({graphics:mask_graphics_116,x:0,y:106.2}).wait(1).to({graphics:mask_graphics_117,x:0,y:124.8}).wait(1).to({graphics:mask_graphics_118,x:0,y:144.9}).wait(1).to({graphics:mask_graphics_119,x:0,y:131.5}).wait(60).to({graphics:null,x:0,y:0}).wait(236));

	// img4
	this.instance_14 = new lib.img4_1();
	this.instance_14.setTransform(0,-132.5);
	this.instance_14._off = true;

	this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(105).to({_off:false},0).wait(1).to({y:-127.9},0).wait(1).to({y:-120.5},0).wait(1).to({y:-110},0).wait(1).to({y:-96.5},0).wait(1).to({y:-80.2},0).wait(1).to({y:-60.9},0).wait(1).to({y:-38.4},0).wait(1).to({y:-13},0).wait(1).to({y:15.2},0).wait(1).to({y:46.5},0).wait(1).to({y:80.8},0).wait(1).to({y:118.1},0).wait(1).to({y:131.6},0).to({_off:true},61).wait(236));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_105 = new cjs.Graphics().p("A3bleIAAgMMAu3ALEIAAARg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A3blJIAAg2MAu3ALEIAAA7g");
	var mask_1_graphics_107 = new cjs.Graphics().p("A3bkkIAAiAMAu3ALEIAACFg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A3bjvIAAjqMAu3ALEIAADvg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A3bisIAAlwMAu3ALEIAAF1g");
	var mask_1_graphics_110 = new cjs.Graphics().p("A3bhbIAAoTMAu3ALEIAAIZg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A3bAEIAArSMAu3ALGIAALXg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A3bBzIAAuxMAu3ALGIAAO3g");
	var mask_1_graphics_113 = new cjs.Graphics().p("A3bDyIAAyvMAu3ALHIAAS0g");
	var mask_1_graphics_114 = new cjs.Graphics().p("A3bGAIAA3KMAu3ALGIAAXPg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A3bIcIAA8CMAu3ALGIAAcHg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A3bLGMAAAghWMAu3ALGMAAAAhbg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A3bOAMAAAgnKMAu3ALGMAAAAnPg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A3bRJMAAAgtcMAu3ALGMAAAAthg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A3bUgMAAAg0KMAu3ALGMAAAA0Pg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_1_graphics_105,x:0,y:-1.8}).wait(1).to({graphics:mask_1_graphics_106,x:0,y:-3.9}).wait(1).to({graphics:mask_1_graphics_107,x:0,y:-7.6}).wait(1).to({graphics:mask_1_graphics_108,x:0,y:-12.9}).wait(1).to({graphics:mask_1_graphics_109,x:0,y:-19.6}).wait(1).to({graphics:mask_1_graphics_110,x:0,y:-27.7}).wait(1).to({graphics:mask_1_graphics_111,x:0,y:-37.4}).wait(1).to({graphics:mask_1_graphics_112,x:0,y:-48.5}).wait(1).to({graphics:mask_1_graphics_113,x:0,y:-61.2}).wait(1).to({graphics:mask_1_graphics_114,x:0,y:-75.4}).wait(1).to({graphics:mask_1_graphics_115,x:0,y:-91}).wait(1).to({graphics:mask_1_graphics_116,x:0,y:-108}).wait(1).to({graphics:mask_1_graphics_117,x:0,y:-126.6}).wait(1).to({graphics:mask_1_graphics_118,x:0,y:-146.7}).wait(1).to({graphics:mask_1_graphics_119,x:0,y:-168.2}).wait(60).to({graphics:null,x:0,y:0}).wait(236));

	// img3
	this.instance_15 = new lib.img3_1();
	this.instance_15.setTransform(0,127.8);
	this.instance_15._off = true;

	this.instance_15.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(105).to({_off:false},0).wait(1).to({y:125.5},0).wait(1).to({y:118.5},0).wait(1).to({y:108},0).wait(1).to({y:94.5},0).wait(1).to({y:78},0).wait(1).to({y:58.7},0).wait(1).to({y:36.4},0).wait(1).to({y:11},0).wait(1).to({y:-17.3},0).wait(1).to({y:-48.5},0).wait(1).to({y:-82.6},0).wait(1).to({y:-119.8},0).wait(1).to({y:-132},0).to({_off:true},61).wait(236));

	// blick
	this.instance_16 = new lib.blick_1();
	this.instance_16.setTransform(280,-40);
	this.instance_16.alpha = 0;
	this.instance_16.compositeOperation = "lighter";
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({_off:false},0).to({x:155.3,y:-9,alpha:1},5).to({x:-94.2,y:53},10).to({x:-144.1,y:65.4,alpha:0.602},2).to({x:-73.4,y:47.8,alpha:1},13).to({x:113.6,y:1.3},35).to({x:167,y:-12,alpha:0},10).to({_off:true},31).wait(295));

	// t1_3
	this.instance_17 = new lib.t1_3();
	this.instance_17.setTransform(-328.3,198.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(48).to({_off:false},0).to({x:-55.8},9,cjs.Ease.get(1)).to({_off:true},62).wait(296));

	// t1_2
	this.instance_18 = new lib.t1_2();
	this.instance_18.setTransform(-282.9,102.8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(39).to({_off:false},0).to({x:-10.4},9,cjs.Ease.get(1)).to({_off:true},71).wait(296));

	// t1_1
	this.instance_19 = new lib.t1_1();
	this.instance_19.setTransform(-290.8,63.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(34).to({_off:false},0).to({x:-18.4},9,cjs.Ease.get(1)).to({_off:true},76).wait(296));

	// img1
	this.instance_20 = new lib.img1_1();
	this.instance_20.setTransform(-300,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:0},14,cjs.Ease.get(-1)).to({_off:true},105).wait(296));

	// img2
	this.instance_21 = new lib.img2_1();
	this.instance_21.setTransform(300,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:0},14,cjs.Ease.get(-1)).to({_off:true},105).wait(296));

	// bg
	this.instance_22 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(415));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-300,900,600);


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
p.nominalBounds = new cjs.Rectangle(-150,299,900,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;