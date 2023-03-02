(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/blick.png", id:"blick"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/img4.jpg", id:"img4"},
		{src:"images/img5.jpg", id:"img5"},
		{src:"images/img6.jpg", id:"img6"},
		{src:"images/lines.png", id:"lines"}
	]
};



// symbols:



(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,69);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,493);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,276);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,276);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,276);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,276);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.lines = function() {
	this.initialize(img.lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,279);


(lib.t5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAqIAngtQAEgGAAgHQAAgHgEgFQgFgEgHAAQgHAAgFAHQgDAEAAAGIgJAAQAAgLAGgGQAHgJALAAQALAAAHAHQAIAHgBALQABAJgHAHIgMAOIgPATIAhAAIAAAJg");
	this.shape.setTransform(127.6,172.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAeQgIgMAAgSQAAgSAIgLQAJgMALAAQAMAAAJAMQAIAMAAARQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgOgGgJQgGgKgIAAQgHAAgGAKg");
	this.shape_1.setTransform(121.1,172.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAeQgIgMAAgSQAAgRAIgMQAJgMALAAQAMAAAJAMQAIALAAASQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgOgGgJQgGgKgIAAQgHAAgGAKg");
	this.shape_2.setTransform(114.4,172.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAlIAthGIgsAAIAAgIIA8AAIg2BTg");
	this.shape_3.setTransform(108.1,172.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAqIAmgtQAEgHAAgGQAAgHgEgFQgFgEgHAAQgIAAgEAHQgDAEAAAGIgJAAQAAgLAGgGQAIgJAKAAQALAAAHAHQAHAHAAALQAAAJgGAHIgbAhIAhAAIAAAJg");
	this.shape_4.setTransform(98.4,172.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAlIARgaIgFABQgMAAgIgIQgHgFAAgMQAAgNAIgIQAIgIALAAQANAAAIAKQAHAIAAALQAAAKgGAHIgbAngAgMgcQgGAGAAAJQAAAIAGAFQAFAEAHAAQAIAAAGgEQAFgFAAgIQAAgJgFgFQgGgGgIAAQgHAAgFAFg");
	this.shape_5.setTransform(92,172.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALArIAAgNIgoAAIAyhIIAAA/IAKAAIAAAJIgKAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_6.setTransform(85.2,172.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA1IAGgTQACgNAAgVQAAgUgCgNIgGgSIAIgEIAEATQAFANAAAXQAAAYgFAOIgEASg");
	this.shape_7.setTransform(77.8,173);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALArIAAgNIgpAAIAyhIIAAA/IALAAIAAAJIgLAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_8.setTransform(72.8,172.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALArIAAgNIgpAAIAzhIIAAA/IAJAAIAAAJIgJAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_9.setTransform(66.1,172.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAeQgIgMAAgSQAAgRAIgMQAJgMALAAQAMAAAJAMQAIAMAAARQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgNgGgKQgGgKgIAAQgHAAgGAKg");
	this.shape_10.setTransform(59.6,172.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAmQgFgSAAgUQAAgSAFgSIAEgTIAIAEIgGASQgDAPAAASQAAAUADAOIAGATIgIADg");
	this.shape_11.setTransform(54.8,173);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAYQAAgHAGAAQAHAAAAAHQAAAHgHAAQgGAAAAgHgAgGgXQAAgHAGAAQAHAAAAAHQAAADgCADQgDACgCAAQgGAAAAgIg");
	this.shape_12.setTransform(48.8,173.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHAAQgGAAAAgHg");
	this.shape_13.setTransform(46,175.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQAeIAAgxIgTAAIAAAZQAAAMgFAFQgFAHgKAAIgDAAIAAgKIADAAQAFAAACgEQACgDAAgHIAAgjIApAAIAAA7g");
	this.shape_14.setTransform(41.1,173.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAXQgKgIAAgPQAAgNAIgIQAJgJALAAQAPAAAIALQAFAIABANIguAAQAAAIAGAGQAFAGAHAAQAHAAAFgFQAFgEABgEIAJAFQgDAGgEADQgJAIgLAAQgLAAgIgIgAARgFQgBgHgEgFQgGgEgGAAQgFAAgFAEQgFAFgBAHIAhAAIAAAAg");
	this.shape_15.setTransform(35.3,173.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAwIAAhVIgYAAIAAgKIA5AAIAAAKIgYAAIAABVg");
	this.shape_16.setTransform(30.5,171.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHAAQgGAAAAgHg");
	this.shape_17.setTransform(23.3,175.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAwIAAhfIAuAAIAAAKIgjAAIAAAeIANAAQAfAAAAAZQAAAOgIAIQgJAIgMAAgAgQAlIAMAAQAKAAAGgFQAFgFAAgJQAAgKgIgEQgEgDgKAAIgLAAg");
	this.shape_18.setTransform(18.6,171.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANAzIAAgRIgwAAIA7hUIAABLIAMAAIAAAJIgMAAIAAARgAgQAZIAdAAIAAgqg");
	this.shape_19.setTransform(7.7,171.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAxIAtg1QAFgIAAgHQAAgIgFgFQgGgGgIAAQgJAAgGAJQgDAEAAAHIgKAAQAAgMAHgIQAJgKAMAAQANAAAJAJQAIAIAAAMQAAAKgIAJQgEAFgJALIgTAXIAoAAIAAAKg");
	this.shape_20.setTransform(-0.1,171.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAPIAKggIAJAEIgMAfg");
	this.shape_21.setTransform(-8.9,176.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQABAIAJAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_22.setTransform(-13.4,172.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZgcIALAAIAAAmIAogrIAAA/IgLAAIAAgmIgoAqg");
	this.shape_23.setTransform(-20.1,173.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMAeIgWgbIgDADIAAAYIgLAAIAAg7IALAAIAAAZIAWgZIANAAIgYAbIAbAgg");
	this.shape_24.setTransform(-25.8,173.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAeIAAg7IALAAIAAAXIAKAAQALAAAGAGQAFADAAAIQAAAJgGAEQgGAGgKAAgAgKAUIAKAAQAEAAADgBQAEgDAAgFQAAgFgEgDQgDgBgEAAIgKAAg");
	this.shape_25.setTransform(-31.4,173.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAWQgJgJAAgNQAAgNAJgIQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgHAGAAAJQAAAKAHAGQAGAGAHAAQALAAAIgJIAAAMQgIAGgLAAQgMAAgJgJg");
	this.shape_26.setTransform(-37.3,173.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAWAAQAHAAAEAEQAGAEAAAHQAAAIgHAEQAFACADAAQAFAFAAAHQAAAJgGAEQgGAFgJAAgAgLAUIALAAQAGAAADgCQADgCAAgEQAAgFgDgCQgCgCgHAAIgLAAgAgLgEIALAAQACAAADgCQADgDAAgDQAAgEgDgCQgDgBgEAAIgJAAg");
	this.shape_27.setTransform(-42.9,173.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAWQgKgJABgNQAAgNAJgIQAIgJANAAQANAAAKAJQAIAIABANQgBANgIAJQgKAJgNAAQgMAAgJgJgAgNgPQgGAGAAAJQAAAKAGAGQAGAGAHAAQAIAAAHgGQAGgGAAgKQAAgJgGgGQgHgGgIAAQgHAAgGAGg");
	this.shape_28.setTransform(-49.6,173.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAeIgWgbIgCADIAAAYIgLAAIAAg7IALAAIAAAZIAWgZIAMAAIgYAbIAcAgg");
	this.shape_29.setTransform(-55.5,173.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPAWQgJgJAAgNQAAgNAJgIQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgHAGAAAJQAAAKAHAGQAGAGAHAAQALAAAIgJIAAAMQgIAGgLAAQgMAAgJgJg");
	this.shape_30.setTransform(-61.7,173.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQABgNAIgIQAKgJAMAAQAOAAAIAJQAJAIAAANQAAANgJAJQgIAJgOAAQgMAAgJgJgAgNgPQgHAGABAJQgBAKAHAGQAGAGAHAAQAJAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgJAAQgHAAgGAGg");
	this.shape_31.setTransform(-68.2,173.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfgRIgKBCIgLAAIAQhkIAkBPIAmhQIAPBlIgLAAIgJhCIghBGg");
	this.shape_32.setTransform(-77.9,171.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAeIAAgxIgTAAIAAgKIAvAAIAAAKIgTAAIAAAxg");
	this.shape_33.setTransform(-89,173.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_34.setTransform(-93.2,173.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAIQAIgJAKAAQAOAAAIAKQAIAIAAANQAAANgIAIQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAAKQAAAKAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgKQAAgJgGgHQgGgGgHAAQgHAAgFAGg");
	this.shape_35.setTransform(-98.6,175.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AANAeIAAgxIgZAAIAAAxIgLAAIAAg7IAvAAIAAA7g");
	this.shape_36.setTransform(-105.5,173.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAPIAKggIAJAEIgMAfg");
	this.shape_37.setTransform(-113.9,176.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAWAAQAHAAAFAEQAFAFAAAGQAAAIgHAEQAFACADAAQAFAFAAAHQAAAJgGAEQgGAFgJAAgAgMAUIAMAAQAGAAADgCQAEgCgBgEQAAgFgCgCQgDgCgHAAIgMAAgAgMgEIAMAAQACAAACgCQAEgDAAgDQAAgEgEgCQgCgBgEAAIgKAAg");
	this.shape_38.setTransform(-117.7,173.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEArIAAg6IAJAAIAAA6gAAEgeQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACADAAACQAAAHgHAAQgDAAgCgCgAgPgjQAAgHAHAAQADAAACACQACADAAACQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_39.setTransform(-122.1,172.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgZgcIALAAIAAAmIAogrIAAA/IgLAAIAAgmIgoAqg");
	this.shape_40.setTransform(-126.6,173.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AATAwIgmgtIgDADIAAAqIgKAAIAAhfIAKAAIAAApIAogpIAOAAIgsAtIAtAyg");
	this.shape_41.setTransform(-133.3,171.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAGATIgCglIAMAAIgCAlgAgNATIgCglIAMAAIgCAlg");
	this.shape_42.setTransform(131.2,152.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQAMAAAHAKIAAgJIALAAIAAA6IgLAAIAAgIQgIAKgLAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAFAGQAGAHAHAAQAJAAAGgHQAFgGAAgJQAAgJgGgHQgGgFgIAAQgGAAgGAGg");
	this.shape_43.setTransform(124.7,157.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAOAdIAAgZIgbAAIAAAZIgKAAIAAg6IAKAAIAAAZIAbAAIAAgZIAKAAIAAA6g");
	this.shape_44.setTransform(117.6,157.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEArIAAg6IAIAAIAAA6gAAEgdQgCgDgBgDQABgHAHAAQAIAAAAAHQAAADgCADQgDACgDAAQgDAAgCgCgAgNgdQgCgDAAgDQAAgHAHAAQAHAAAAAHQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_45.setTransform(112.7,155.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQALAAAIAKIAAgJIALAAIAAA6IgLAAIAAgIQgHAKgMAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAGAGQAFAHAHAAQAJAAAGgHQAFgGAAgJQAAgJgGgHQgHgFgHAAQgGAAgGAGg");
	this.shape_46.setTransform(107.1,157.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgNgfQgGAGAAALQAAAJAFAFQAGAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgGAGg");
	this.shape_47.setTransform(99.8,158.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AALAdIgWgaIgDAEIAAAWIgKAAIAAg6IAKAAIAAAZIAXgZIAMAAIgYAbIAcAfg");
	this.shape_48.setTransform(93.2,157.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOAwIAMgbIglhEIANAAIAdA3IAZg3IAMAAIgqBfg");
	this.shape_49.setTransform(86.3,155.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_50.setTransform(80,157);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQAMAAAHAKIAAgJIALAAIAAA6IgLAAIAAgIQgIAKgLAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAFAGQAGAHAHAAQAJAAAGgHQAFgGAAgJQAAgKgHgGQgFgFgIAAQgHAAgFAGg");
	this.shape_51.setTransform(73.8,157.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_52.setTransform(67.6,157.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAWQgIgJgBgNQABgMAIgJQAKgJAMAAQAOAAAIAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgKgJgAgOgPQgGAGAAAJQAAAKAGAGQAHAGAHAAQAIAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgIAAQgHAAgHAGg");
	this.shape_53.setTransform(61.3,157.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQACAIAIAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_54.setTransform(53.8,155.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQAAgMAJgJQAJgJANAAQANAAAJAJQAKAJAAAMQAAANgKAJQgJAJgNAAQgMAAgJgJgAgNgPQgHAGAAAJQAAAKAHAGQAGAGAHAAQAIAAAGgGQAHgGAAgKQAAgJgHgGQgGgGgIAAQgIAAgFAGg");
	this.shape_55.setTransform(46.4,157.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEAwIAAhUIgXAAIAAgLIA3AAIAAALIgXAAIAABUg");
	this.shape_56.setTransform(40.4,155.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAGATIgCglIAMAAIgCAlgAgNATIgCglIAMAAIgCAlg");
	this.shape_57.setTransform(34.9,152.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEAwIAAhfIAJAAIAABfg");
	this.shape_58.setTransform(27.3,155.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgEAwIAAhfIAJAAIAABfg");
	this.shape_59.setTransform(23.7,155.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAZAwIAAhUIgwAAIAABUIgLAAIAAhfIBFAAIAABfg");
	this.shape_60.setTransform(17.1,155.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAALQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgFAGg");
	this.shape_61.setTransform(5.2,158.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQAAgMAJgJQAKgJAMAAQAOAAAJAJQAJAJAAAMQAAANgJAJQgKAJgNAAQgMAAgJgJgAgNgPQgHAGAAAJQAAAKAHAGQAGAGAHAAQAIAAAGgGQAHgGAAgKQAAgJgHgGQgFgGgJAAQgHAAgGAGg");
	this.shape_62.setTransform(-2.6,157.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_63.setTransform(-9,157.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgNAUQgGgJgBgHIgKAAIAAAZIgLAAIAAg6IALAAIAAAZIALAAQABgKAHgHQAJgJAMAAQAOAAAJAJQAJAJAAAMQAAANgJAJQgJAJgOAAQgPAAgIgLgAgDgPQgGAGAAAJQAAAKAHAGQADAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgJAAQgJAAgEAGg");
	this.shape_64.setTransform(-16.4,157.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCATIgCglIAKAAIgCAlg");
	this.shape_65.setTransform(-22.9,152.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgVArQgKgJABgVQAAgkARgMQAGgFANgDQAJgCADgFIAMAAQgEAMgQAEQgMADgGAEQgLAKgBARQAHgLANABQAOAAAIAJQAKAHgBANQABAOgKAJQgJAJgNAAQgMAAgJgIgAgNACQgGAHgBAKQABALAGAGQAGAFAHABQAJgBAFgFQAHgGAAgLQAAgKgHgHQgFgDgJAAQgHAAgGADg");
	this.shape_66.setTransform(-28.1,155.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgZgdIALAAIAAAnIAngrIAAA+IgKAAIAAglIgoAqg");
	this.shape_67.setTransform(-35.5,157.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAALQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgFAGg");
	this.shape_68.setTransform(-42.8,158.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_69.setTransform(-49.3,157.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgPAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAHAAQAMAAAHgKIAAANQgIAGgLAAQgMAAgJgJg");
	this.shape_70.setTransform(-55.1,157.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgZgdIALAAIAAAnIAogrIAAA+IgLAAIAAglIgoAqg");
	this.shape_71.setTransform(-61.8,157.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAXAmIAAgRIgsAAIAAARIgKAAIAAgaQAIAAADgIQADgEAAgKIAAgbIAoAAIAAAxIAJAAIAAAagAgHgFQAAALgHAGIAbAAIAAgnIgUAAg");
	this.shape_72.setTransform(-68.8,157.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQACAIAIAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_73.setTransform(-79.1,155.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgZgdIALAAIAAAnIAngrIAAA+IgKAAIAAglIgoAqg");
	this.shape_74.setTransform(-86.3,157.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAOAdIAAgZIgbAAIAAAZIgKAAIAAg6IAKAAIAAAZIAbAAIAAgZIAKAAIAAA6g");
	this.shape_75.setTransform(-93.4,157.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAogrIAAA/IgLAAIAAgoIgnAsgAgUgqIAJgDQADAIAIAAQAKAAACgIIAJADQgFAOgQAAQgNAAgHgOg");
	this.shape_76.setTransform(-100.4,155.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgEAsIAAg6IAJAAIAAA6gAgEgeQgCgDAAgDQAAgDACgCQADgCABgBQACABADACQACACAAADQAAADgCADQgDACgCAAQgBAAgDgCg");
	this.shape_77.setTransform(-105.5,155.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AATAmIAAgRIgvAAIAAg6IALAAIAAAxIAZAAIAAgxIALAAIAAAxIAKAAIAAAag");
	this.shape_78.setTransform(-110,157.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgEAsIAAg6IAIAAIAAA6gAgDgeQgDgDAAgDQAAgDADgCQABgCACgBQACABADACQACACAAADQAAADgCADQgDACgCAAQgCAAgBgCg");
	this.shape_79.setTransform(-115.4,155.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgEBBIAAghQgQAAgJgIQgLgJAAgOQAAgNALgIQAJgIAQAAIAAgkIAJAAIAAAkQAQAAAKAIQAKAIAAANQAAAOgLAJQgJAIgQAAIAAAhgAAFgTIAAAqQALAAAGgFQAIgFAAgMQAAgLgJgFQgGgEgIAAIgCAAgAgUgPQgJAFAAALQAAAMAJAFQAGAFAKAAIAAgqIgDAAQgHAAgGAEg");
	this.shape_80.setTransform(-121.7,157);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgOAUgBQAUABAQAOQAOAOAAAUQAAAVgOAOQgPAOgVAAQgUAAgOgOgAgagaQgMALAAAPQAAAQAMAMQAMALAOAAQAQAAAMgLQALgMAAgQQAAgPgLgLQgMgNgQAAQgOAAgMANg");
	this.shape_81.setTransform(-132.2,155.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAghhbIAPgFQAEANAOAAQAOAAAFgNIAPAFQgIAWgaAAQgZAAgIgWg");
	this.shape_82.setTransform(124.4,-68);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Ag6hJIAQAAIAABwIBlh3IAACaIgQAAIAAhwIhlB3g");
	this.shape_83.setTransform(108.5,-66.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAmBKIAAhJIhLAAIAABJIgQAAIAAiTIAQAAIAAA8IBLAAIAAg8IAQAAIAACTg");
	this.shape_84.setTransform(93.2,-66.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAgZhPQgGgFgCgHIAPgFQAEANAOAAQAPgBAEgMIAPAFQgIAWgaAAQgPAAgKgKg");
	this.shape_85.setTransform(77.9,-68);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_86.setTransform(67.2,-66.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAuBaIAAggIhrAAIAAiTIAQAAIAACEIBKAAIAAiEIAQAAIAACEIARAAIAAAvg");
	this.shape_87.setTransform(57.9,-64.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_88.setTransform(47,-66.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgHBNIAAgVIgDAAQgmAAgRgUQgOgPAAgVQAAgXAOgQQARgTAmAAIADAAIAAgSIAPAAIAAASIAEAAQAmAAARATQANAPAAAYQAAAVgNAPQgRAUgmAAIgEAAIAAAVgAAIAoIAFAAQAbABANgOQALgMgBgPQABgRgLgMQgNgNgbAAIgFAAgAg0gdQgKAMAAARQAAAPAKAMQANAOAcgBIAEAAIAAhSIgEAAQgcAAgNANg");
	this.shape_89.setTransform(35.1,-66.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag2A3QgWgXAAggQAAggAWgWQAXgWAfAAQAgAAAWAWQAXAWAAAgQAAAggXAXQgWAWggAAQgfAAgXgWgAgpgqQgSASAAAYQAAAZASASQARASAYAAQAZAAARgSQASgSAAgZQAAgYgSgSQgRgSgZAAQgYAAgRASg");
	this.shape_90.setTransform(17.1,-66.4);

	this.addChild(this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.3,-77.8,270.1,257.6);


(lib.t4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJXBXIAAiNIAJAAIAACNgAIoBXIAAhJIhUAAIAABJIgJAAIAAiNIAJAAIAAA7IBUAAIAAg7IAJAAIAACNgAGbBXIAAiNIAJAAIAACNgAF8BXIgTgvIg8AAIgSAvIgKAAIA6iQIA7CQgAFlAgIgahCIgaBCIA0AAgADMBXIAAiNIAbAAQASAAAKAKQAMAKABARQgBARgKAJQgMAKgSAAIgSAAIAABEgADVAKIASAAQAOABAJgIQAIgGAAgNQAAgNgIgIQgJgIgPAAIgRAAgACpBXIhChEIgDAEIAABAIgJAAIAAiNIAJAAIAABBIBChBIAMAAIhDBDIBHBKgAgDBXIAQgoIgzhlIAKAAIAvBaIAohaIAKAAIhACNgAi3BXIAAiNIAeAAQATAAAKAKQAKAKAAAQQAAATgQAKQANACAIAKQAHAKAAANQABATgMALQgMALgUAAgAiuBOIAYAAQAVAAAJgIQAJgJAAgOQAAgSgPgHQgIgFgSAAIgWAAgAiuAJIAXAAQALAAAIgGQAJgHAAgNQAAgNgJgJQgIgGgQAAIgSAAgAlIBXIAAiNIBCAAIAAAJIg5AAIAAAyIA4AAIAAAIIg4AAIAABBIA5AAIAAAJgAlrBXIg9hEIgDAEIAABAIgJAAIAAhAIgCgEIg9BEIgMAAIBChJIg+hEIAMAAIA7BBIAAhBIAJAAIAABBIA8hBIAMAAIg+BEIBCBJgApfBXIAAiNIAeAAQATAAAKAKQAKAKAAAQQAAATgQAKQANACAIAKQAHAJAAAOQABATgMALQgNALgTAAgApWBOIAYAAQAVAAAJgIQAJgJAAgOQAAgTgPgGQgHgFgTAAIgWAAgApWAJIAWAAQAMAAAIgGQAIgGABgOQAAgPgKgHQgHgGgQAAIgSAAgAGlhOQABgHAHgBQAJABgBAHQABAJgJgBQgHABgBgJgAGKhOQABgHAHgBQAJABgBAHQABAJgJgBQgHABgBgJg");
	this.shape.setTransform(-18.8,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.7,4,121.7,17.4);


(lib.t3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ajlg3IAJAAIAAB3IBkh4IAACNIgJAAIAAh0IhkB4gAl3g3IAJAAIAAB3IBjh4IAACNIgJAAIAAh0IhjB4gAGmBJQgLgLgCgSIAWgFQABALAGAIQAGAJAMAAQAMAAAHgIQAGgHAAgKQAAgQgVgJIgOgHQgegLAAgYQAAgSANgLQAMgLASAAQARAAAMAKQAHAHAEAJIgSAKQgCgFgEgEQgGgFgKAAQgJAAgGAEQgGAFAAAIQAAANAQAFIAPAGQAjANAAAdQAAAVgOAOQgNANgVAAQgWAAgMgPgAEhBHQgNgQAAgXIAAheIAWAAIAABYQAAASAFAIQAIAPATAAQATAAAIgPQAEgIAAgSIAAhYIAXAAIAABeQAAAXgOAQQgPARgZAAQgZAAgQgRgAqBBCQgVgVAAgfQAAgcAVgVQAVgWAeAAQAfAAAVAWQAVAVAAAcQAAAfgVAVQgVAVgfAAQgeAAgVgVgAp7gdQgSASAAAZQAAAcASASQASATAbAAQAbAAASgTQASgSAAgcQAAgZgSgSQgSgTgbAAQgbAAgSATgAMDBVIggg5IghA5IgZAAIAuhOIgphFIAaAAIAcAzIAdgzIAZAAIgqBFIAsBOgAKHBVIgqg9IgDAAIAAA9IgXAAIAAiTIAaAAQAaAAANAJQARAMAAAXQAAAQgJAJQgJALgOADIAtBAgAJaAEIAHAAQAeAAAAgWQAAgXgeAAIgHAAgADoBVIggg5IgiA5IgZAAIAuhOIgohFIAZAAIAdAzIAdgzIAZAAIgqBFIAsBOgAAwBVIAAiTIBQAAIAAAVIg6AAIAAAkIA5AAIAAATIg5AAIAAAyIA6AAIAAAVgAgkBVIAAiTIAXAAIAAB+IAoAAIAAAVgAnnBVIAAiMIAeAAQASAAALAKQAKAJAAARQAAATgRAKQAOACAIAKQAHAJAAAOQAAATgMALQgMAKgTAAgAneBNIAXAAQAVAAAKgJQAJgIAAgOQAAgTgPgHQgKgEgQAAIgWAAgAneAHIAWAAQANAAAGgGQAJgFAAgOQAAgPgJgHQgHgGgQAAIgSAAgAq+BVIAAhJIhUAAIAABJIgJAAIAAiMIAJAAIAAA6IBUAAIAAg6IAKAAIAACMgAjMhUIAHgEQAHAOAPAAQAQAAAGgOIAIAEQgIASgWAAQgVAAgIgSg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.6,-8.9,159.4,17.9);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al1BlIAAgcIhoAAIAAAcIgJAAIAAglQAOAAAIgTQAFgOAAgXIAAhLIBPAAIAACDIAQAAIAAAlgAnCAIQAAAagFANQgDAJgHAIIBLAAIAAh7Ig8AAgAjnhDIAJAAIAAB2IBkh4IAACOIgJAAIAAh1IhkB4gAqZhDIAJAAIAAB2IBjh4IAACOIgJAAIAAh1IhjB4gAsshDIAJAAIAAB2IBkh4IAACOIgJAAIAAh1IhkB4gAROA1QgVgWAAgfQAAghAVgWQAWgWAhAAQAgAAAWAWQAWAWAAAhQAAAfgWAWQgVAXghAAQghAAgWgXgARfgoQgPAQAAAYQAAAXAPAQQAOAPAYAAQAXAAAPgPQAOgQAAgXQAAgYgOgQQgPgQgXAAQgYAAgOAQgAHqA7QgTgVAAgmQAAgnATgWQANgQAUAAQASAAAPAQQATAWAAAnQAAAmgTAVQgOARgTAAQgUAAgNgRgAH3gtQgKAQAAAdQAAAbAKAQQAIAMAMAAQALAAAIgMQALgQAAgbQAAgdgLgQQgIgMgLAAQgMAAgIAMgAGoBIQgEgFAAgGQAAgFAEgFQAEgEAGAAQAFAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgFAAQgGAAgEgEgAw2A2QgVgVAAgfQAAgdAVgVQAVgVAfAAQAeAAAVAVQAVAVAAAdQAAAegVAWQgVAVgeAAQgfAAgVgVgAwvgqQgSATAAAZQAAAbASATQASASAbAAQAbAAASgSQARgTAAgbQAAgZgRgTQgSgTgbAAQgbAAgSATgAPNBJIAAiTIBJAAIAAAVIgyAAIAAAnIAOAAQAYAAANAMQANAKAAAUQAAAYgSAMQgMAJgUAAgAPkAzIANAAQAdAAAAgWQAAgYgdAAIgNAAgANlBJIAAiTIAgAAQAUAAAMAIQASAMAAAYQAAAVgOAJQgOAMgWAAIgKAAIAAA9gAN7gHIAKAAQAcAAAAgXQAAgXgcAAIgKAAgAL5BJIAUgtIg1hmIAbAAIAnBLIAhhLIAYAAIhCCTgAKdBJIAAh+IgiAAIAAgVIBaAAIAAAVIgiAAIAAB+gAEiBJIAzg/QANgOAFgHQAHgLAAgKQAAgKgGgHQgHgIgLAAQgLAAgHAHQgHAIgBAMIgWAAQABgSAMgOQANgPAWAAQAWAAAMAOQAMAMAAATQAAAPgKAQIgVAZIgYAcIA3AAIAAAVgADOBJIAAhJIhUAAIAABJIgKAAIAAiMIAKAAIAAA8IBUAAIAAg8IAJAAIAACMgAARBJIASgoIg0hkIALAAIAuBaIAphaIAKAAIhACMgAhUBJIAAiMIA+AAIAAAIIg1AAIAACEgAlXBJIAAiMIAfAAQASAAAKAJQAKAKAAAQQAAAVgQAKQAOABAHAJQAIAKAAAOQAAASgMALQgMALgTAAgAlNBAIAXAAQAVAAAJgIQAJgJAAgNQAAgTgOgIQgLgEgQAAIgVAAgAlNgDIAWAAQAMAAAHgGQAJgIAAgOQAAgNgJgJQgIgGgQAAIgRAAgAucBJIAAiMIAfAAQASAAAKAJQAKAKAAAQQAAAWgQAJQANABAIAJQAIAKAAAOQAAASgMALQgMALgTAAgAuTBAIAYAAQAVAAAJgIQAJgJAAgNQAAgUgPgHQgJgEgRAAIgWAAgAuTgDIAXAAQAMAAAHgGQAJgIAAgOQAAgOgKgIQgHgGgQAAIgSAAgAxyBJIAAhJIhVAAIAABJIgJAAIAAiMIAJAAIAAA8IBVAAIAAg8IAJAAIAACMgAqAhgIAHgEQAGANAQAAQAQAAAGgNIAHAEQgIASgVAAQgVAAgIgSg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123.3,-10.1,246.7,20.4);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADnhGIAJAAIAAB3IBkh5IAACOIgJAAIAAh0IhkB3gAp1hGIAJAAIAAB3IBkh5IAACOIgJAAIAAh0IhkB3gAAPAzQgTgWABgdQAAgdASgWQAWgVAeAAQAcAAASASIAAANQgRgXgdAAQgbABgSASQgSAUAAAZQAAAdAVATQASAPAYAAQAcAAASgVIAAAMQgSASgcAAQgfAAgVgVgAFqBGIAAgJIAIABQAIABAFgGQAJgIAAgeIAAhZIBOAAIAACMIgJAAIAAiEIg8AAIAABRIgBAYQgCAMgHAHQgHAJgNAAgAMXBGIgig8IgPAdIgRAfIgVAAIAqhHIgohHIAUAAIATAiQAJAQAEAJIABAAIAfg7IAWAAIgrBHIAsBHgAKhBGQgDgHgGgcQgDgOgHgGQgGgHgMAAIgRAAIAAA+IgTAAIAAiMQAPgCAUgBQAdAAANAMQAKAKABARQgBAOgHAKQgIAJgLACIAAAAQAPAGAFAYQAIAgADAHgAJrg4IAAA0IASAAQAPAAAJgHQAIgIAAgMQAAgbggAAQgOAAgEACgAH8BGIAAiMIAJAAIAACMgACkBGIAAiEIgkAAIAAgIIBSAAIAAAIIgkAAIAACEgAiMBGIASgnIg2hlIALAAIAwBaIAphaIAKAAIhACMgAj/BGIAAhAIgLAAIgqBAIgLAAIAqhAQgJgBgGgCQgXgHAAgbQAAgXASgKQAKgGAQAAIAZAAIAACMgAkhg6QgQAHAAAUQAAAQAJAHQAIAIAQAAIARAAIAAg+IgQAAQgMABgGADgAl2BGIAAiEIgkAAIAAgIIBRAAIAAAIIgkAAIAACEgAnOBGIAAiEIgkAAIAAgIIBSAAIAAAIIglAAIAACEgAqXBGIg8hDIgEADIAABAIgJAAIAAhAIgDgDIg9BDIgMAAIBDhHIg+hFIANAAIA6BDIAAhDIAJAAIAABDIA7hDIAMAAIg9BFIBDBHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.3,-7.4,162.6,14.8);


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


(lib.lines_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.lines();
	this.instance.setTransform(-150,-139.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-139.5,300,279);


(lib.img6_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img6();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.img5Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img5();
	this.instance.setTransform(-150,-138);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-138,300,276);


(lib.img4Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img4();
	this.instance.setTransform(-150,-138);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-138,300,276);


(lib.img3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img3();
	this.instance.setTransform(-150,-138);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-138,300,276);


(lib.img2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img2();
	this.instance.setTransform(-150,-138);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-138,300,276);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-150,-246.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-246.5,300,493);


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
	this.instance.setTransform(-60.5,-34.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.5,-34.5,121,69);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363C56").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.img5P11 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwNDjIPGnjIPDHoIvDHlg");
	mask.setTransform(-103.8,71.8);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(57.6,-5.4);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,46,77.8,86.6);


(lib.img5P10 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvEAMIPEnjIPFHoIvFHlg");
	mask.setTransform(-62.8,50.3);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(9.4,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.6,3,174.3,97.5);


(lib.img5P9 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvDgBIPDnlIPEHoIvEHlg");
	mask.setTransform(24.3,3.2);

	// img4Mc
	this.instance = new lib.img5Mc();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.2,-45.5,193,97.5);


(lib.img5P8 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwNgBIPGnlIPDHoIvDHlg");
	mask.setTransform(-103.8,2.7);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(57.6,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,-46,77.8,97.5);


(lib.img5P7 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvEgBIPEnlIPFHoIvFHlg");
	mask.setTransform(87.2,-45.3);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(-33.6,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-94,125.7,97.5);


(lib.img5P6 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvEgBIPEnlIPFHoIvFHlg");
	mask.setTransform(-62.8,-45.8);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(9.4,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.6,-94.6,174.3,97.5);


(lib.img5P5 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsBjXIPDnlIPFHqIvFHjg");
	mask.setTransform(116,-70.1);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(-81.9,2.3);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(38.9,-135.7,29.2,92.9);


(lib.img5P4 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvDjYIPDnlIPEHqIvEHjg");
	mask.setTransform(24.3,-70.3);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(0,2.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.2,-135.4,193,92.4);


(lib.img5P3 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwNjaIPGnkIPDHpIvDHkg");
	mask.setTransform(-103.8,-70.4);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(57.6,2.8);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,-135.2,77.8,91.9);


(lib.img5P2 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvElSIPEnlIPFHqIvFHjg");
	mask.setTransform(87.2,-82.4);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(-33.6,26.8);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-111.2,125.7,43.9);


(lib.img5P1 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvElTIPEnlIPFHqIvFHjg");
	mask.setTransform(-62.8,-82.5);

	// img4Mc
	this.instance = new lib.img5Mc();
	this.instance.setTransform(9.4,27.1);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.6,-110.9,174.3,43.4);


(lib.img4P11 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwNDjIPGnjIPDHoIvDHlg");
	mask.setTransform(-103.8,71.8);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(57.6,-5.4);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,46,77.8,86.6);


(lib.img4P10 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvEAMIPEnjIPFHoIvFHlg");
	mask.setTransform(-62.8,50.3);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(9.4,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.6,3,174.3,97.5);


(lib.img4P9 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvDgBIPDnlIPEHoIvEHlg");
	mask.setTransform(24.3,3.2);

	// img4Mc
	this.instance = new lib.img4Mc();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.2,-45.5,193,97.5);


(lib.img4P8 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwNgBIPGnlIPDHoIvDHlg");
	mask.setTransform(-103.8,2.7);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(57.6,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,-46,77.8,97.5);


(lib.img4P7 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvEgBIPEnlIPFHoIvFHlg");
	mask.setTransform(87.2,-45.3);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(-33.6,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-94,125.7,97.5);


(lib.img4P6 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvEgBIPEnlIPFHoIvFHlg");
	mask.setTransform(-62.8,-45.8);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(9.4,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.6,-94.6,174.3,97.5);


(lib.img4P5 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsBjXIPDnlIPFHqIvFHjg");
	mask.setTransform(116,-70.1);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(-81.9,2.3);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(38.9,-135.7,29.2,92.9);


(lib.img4P4 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvDjYIPDnlIPEHqIvEHjg");
	mask.setTransform(24.3,-70.3);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(0,2.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.2,-135.4,193,92.4);


(lib.img4P3 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwNjaIPGnkIPDHpIvDHkg");
	mask.setTransform(-103.8,-70.4);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(57.6,2.8);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,-135.2,77.8,91.9);


(lib.img4P2 = function() {
	this.initialize();

	// maskRomb (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvElSIPEnlIPFHqIvFHjg");
	mask.setTransform(87.2,-82.4);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(-33.6,26.8);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-111.2,125.7,43.9);


(lib.img4P1 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvElTIPEnlIPFHqIvFHjg");
	mask.setTransform(-62.8,-82.5);

	// img4Mc
	this.instance = new lib.img4Mc();
	this.instance.setTransform(9.4,27.1);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.6,-110.9,174.3,43.4);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(12));

	// img5P
	this.instance = new lib.img5P1();
	this.instance.setTransform(-72.5,-143.3,1,0.01,0,0,0,-63.2,-120);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({regY:-116.2,scaleY:1,y:-143.2},5).wait(40));

	// img5P
	this.instance_1 = new lib.img5P2();
	this.instance_1.setTransform(121.2,-143.3,1,0.01,0,0,0,87.5,-120);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regY:-116.5,scaleY:1},5).wait(40));

	// img5P
	this.instance_2 = new lib.img5P3();
	this.instance_2.setTransform(-168.7,-94.8,1,0.01,0,0,0,-111.1,-90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({regY:-92,scaleY:1},5).wait(35));

	// img5P
	this.instance_3 = new lib.img5P4();
	this.instance_3.setTransform(23.5,-94.5,1,0.01,0,0,0,23.5,-90);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({regY:-92,scaleY:1},5).wait(35));

	// img5P
	this.instance_4 = new lib.img5P5();
	this.instance_4.setTransform(217.6,-94.5,1,0.01,0,0,0,135.7,-95);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({regY:-92.2,scaleY:1},5).wait(35));

	// img5P
	this.instance_5 = new lib.img5P6();
	this.instance_5.setTransform(-72.2,-46.1,1,0.01,0,0,0,-62.9,-45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({regY:-46.1,scaleY:1},5).wait(30));

	// img5P
	this.instance_6 = new lib.img5P7();
	this.instance_6.setTransform(121.2,-45,1,0.01,0,0,0,87.5,-45);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({scaleY:1},5).wait(30));

	// img5P
	this.instance_7 = new lib.img5P8();
	this.instance_7.setTransform(-168.7,2.9,1,0.01,0,0,0,-111.1,5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({regY:2.9,scaleY:1},5).wait(25));

	// img5P
	this.instance_8 = new lib.img5P9();
	this.instance_8.setTransform(24,3.1,1,0.01,0,0,0,24,5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({_off:false},0).to({regY:3.1,scaleY:1},5).wait(25));

	// img5P
	this.instance_9 = new lib.img5P10();
	this.instance_9.setTransform(-72.2,51.5,1,0.01,0,0,0,-62.9,50.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(26).to({_off:false},0).to({regY:51.5,scaleY:1},5).wait(20));

	// img5P
	this.instance_10 = new lib.img5P11();
	this.instance_10.setTransform(-168.7,100.2,1,0.01,0,0,0,-111.1,95);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(31).to({_off:false},0).to({regY:94.8,scaleY:1,y:100.3},5).wait(15));

	// img4P
	this.instance_11 = new lib.img4P1();
	this.instance_11.setTransform(-72.5,-143.2,1,1,0,0,0,-63.2,-116.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({regY:-115.8,scaleY:0.02,y:-143.3},5).wait(45));

	// img4P
	this.instance_12 = new lib.img4P2();
	this.instance_12.setTransform(121.2,-143.3,1,1,0,0,0,87.5,-116.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({regY:-120,scaleY:0.01},5).wait(45));

	// img4P
	this.instance_13 = new lib.img4P3();
	this.instance_13.setTransform(-168.7,-94.8,1,1,0,0,0,-111.1,-92);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).wait(5).to({regY:-90,scaleY:0.01},5).wait(40));

	// img4P
	this.instance_14 = new lib.img4P4();
	this.instance_14.setTransform(23.5,-94.5,1,1,0,0,0,23.5,-92);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).wait(5).to({regY:-90,scaleY:0.01},5).wait(40));

	// img4P
	this.instance_15 = new lib.img4P5();
	this.instance_15.setTransform(217.6,-94.5,1,1,0,0,0,135.7,-92.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).wait(5).to({regY:-95,scaleY:0.01},5).wait(40));

	// img4P
	this.instance_16 = new lib.img4P6();
	this.instance_16.setTransform(-72.2,-46.1,1,1,0,0,0,-62.9,-46.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(10).to({regY:-45,scaleY:0.01},5).wait(35));

	// img4P
	this.instance_17 = new lib.img4P7();
	this.instance_17.setTransform(121.2,-45,1,1,0,0,0,87.5,-45);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).wait(10).to({scaleY:0.01},5).wait(35));

	// img4P
	this.instance_18 = new lib.img4P8();
	this.instance_18.setTransform(-168.7,2.9,1,1,0,0,0,-111.1,2.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).wait(15).to({regY:5,scaleY:0.01},5).wait(30));

	// img4P
	this.instance_19 = new lib.img4P9();
	this.instance_19.setTransform(24,3.1,1,1,0,0,0,24,3.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({_off:false},0).wait(15).to({regY:5,scaleY:0.01},5).wait(30));

	// img4P
	this.instance_20 = new lib.img4P10();
	this.instance_20.setTransform(-72.2,51.5,1,1,0,0,0,-62.9,51.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).wait(20).to({regY:50.1,scaleY:0.01},5).wait(25));

	// img4P
	this.instance_21 = new lib.img4P11();
	this.instance_21.setTransform(-168.7,100.3,1,1,0,0,0,-111.1,94.8);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(25).to({regY:95,scaleY:0.01,y:100.2},5).wait(20));

	// Слой 3
	this.instance_22 = new lib.img5Mc();
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(36).to({_off:false},0).to({alpha:1},3).wait(12));

	// Слой 1
	this.instance_23 = new lib.img4Mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-192.1,579,341);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_169 = function() {
		this.img4.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(169).call(this.frame_169).wait(196));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(-76.6,277,0.317,0.314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(284).to({scaleX:0.86,scaleY:0.89,x:0,y:-0.4},10).wait(50).to({scaleX:0.32,scaleY:0.31,x:-76.6,y:277},10).wait(11));

	// t4
	this.instance_1 = new lib.t5();
	this.instance_1.setTransform(2,104);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(289).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(20));

	// dillers
	this.instance_2 = new lib.dillers();
	this.instance_2.setTransform(-262.4,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(244).to({_off:false},0).wait(1).to({x:-256.8},0).wait(1).to({x:-239.6},0).wait(1).to({x:-211},0).wait(1).to({x:-173.1},0).wait(1).to({x:-129.9},0).wait(1).to({x:-87},0).wait(1).to({x:-49.8},0).wait(1).to({x:-22},0).wait(1).to({x:-5.4},0).wait(1).to({x:0},0).wait(25).to({alpha:0},10).to({_off:true},1).wait(75));

	// img6
	this.instance_3 = new lib.img6_1();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(234).to({_off:false},0).to({alpha:1},10).wait(100).to({alpha:0},10).to({_off:true},1).wait(10));

	// t4
	this.instance_4 = new lib.t4();
	this.instance_4.setTransform(-215,230.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(152).to({_off:false},0).wait(1).to({regX:-18.9,regY:12.7,x:-229.7,y:243.2},0).wait(1).to({x:-217.3},0).wait(1).to({x:-197.5},0).wait(1).to({x:-172.1},0).wait(1).to({x:-144.3},0).wait(1).to({x:-117.4},0).wait(1).to({x:-94.5},0).wait(1).to({x:-77.5},0).wait(1).to({x:-67.3},0).wait(1).to({regX:0,regY:0,x:-45.1,y:230.5},0).to({_off:true},82).wait(121));

	// t3
	this.instance_5 = new lib.t3();
	this.instance_5.setTransform(-230,218.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124).to({_off:false},0).wait(1).to({x:-226.2},0).wait(1).to({x:-213.9},0).wait(1).to({x:-192.7},0).wait(1).to({x:-163.9},0).wait(1).to({x:-131.4},0).wait(1).to({x:-100.5},0).wait(1).to({x:-75.4},0).wait(1).to({x:-58},0).wait(1).to({x:-48.2},0).wait(1).to({x:-45.1},0).to({_off:true},110).wait(121));

	// t2
	this.instance_6 = new lib.t2();
	this.instance_6.setTransform(-275,219.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(84).to({_off:false},0).wait(1).to({x:-269.4},0).wait(1).to({x:-251.8},0).wait(1).to({x:-222},0).wait(1).to({x:-181.6},0).wait(1).to({x:-135.2},0).wait(1).to({x:-89.6},0).wait(1).to({x:-50.9},0).wait(1).to({x:-23},0).wait(1).to({x:-6.7},0).wait(1).to({x:-1.5},0).wait(31).to({x:4.2},0).wait(1).to({x:22.6},0).wait(1).to({x:54.2},0).wait(1).to({x:97.3},0).wait(1).to({x:146},0).wait(1).to({x:192.3},0).wait(1).to({x:229.7},0).wait(1).to({x:255.8},0).wait(1).to({x:270.4},0).wait(1).to({x:275},0).to({_off:true},1).wait(230));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.setTransform(-43.5,219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(85).to({x:-37.8},0).wait(1).to({x:-19.9},0).wait(1).to({x:10.5},0).wait(1).to({x:51.6},0).wait(1).to({x:98.8},0).wait(1).to({x:145.3},0).wait(1).to({x:184.6},0).wait(1).to({x:213.1},0).wait(1).to({x:229.7},0).wait(1).to({x:235},0).to({_off:true},1).wait(259).to({_off:false,x:-235},0).wait(1).to({x:-230.1},0).wait(1).to({x:-215.4},0).wait(1).to({x:-192},0).wait(1).to({x:-162.5},0).wait(1).to({x:-130.9},0).wait(1).to({x:-101},0).wait(1).to({x:-76},0).wait(1).to({x:-57.8},0).wait(1).to({x:-47},0).wait(1).to({x:-43.5},0).wait(1));

	// blick
	this.instance_8 = new lib.blick_1();
	this.instance_8.setTransform(-37.6,-342.1,1,1,0,0,0,-26,0);
	this.instance_8.compositeOperation = "lighter";
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({guide:{path:[-37.5,-342,85.7,-274.4,208.9,-206.8,-15.2,-91.9,-239.4,23.1]}},30).to({_off:true},1).wait(93).to({_off:false,x:-37.6,y:-342.1},0).to({guide:{path:[-37.5,-342,85.7,-274.4,208.9,-206.8,-15.2,-91.9,-239.4,23.1]}},30).to({_off:true},1).wait(196));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AmvgnIAAjXIJaAAIAADXIEFCYIiZCOg");
	var mask_graphics_19 = new cjs.Graphics().p("AoghuIAAjXIJbAAIAADXIHmEIIiGCsg");
	var mask_graphics_20 = new cjs.Graphics().p("AqTipIAAjXIJdAAIAADXILKGOIh5Ccg");
	var mask_graphics_21 = new cjs.Graphics().p("AsKjpIAAjXIJdAAIAADXIO3IBIiMCog");
	var mask_graphics_22 = new cjs.Graphics().p("AuCkqIAAjXIJdAAIAADXISnJ0IiPC3g");
	var mask_graphics_23 = new cjs.Graphics().p("AxEmeIAAjXIJdAAIAADXIYrNcIivC4g");
	var mask_graphics_28 = new cjs.Graphics().p("AJMMxIiFi7IHOkzI/ZwUIAAjXIJdAAIAADXIYrNcIjnMeg");
	var mask_graphics_29 = new cjs.Graphics().p("AJMMxIj5B3IiDi9ILFmoI/ZwUIAAjXIJdAAIAADXIYrNcIjnMeg");
	var mask_graphics_30 = new cjs.Graphics().p("AgGMpIObojI/ZwUIAAjXIJdAAIAADXIYrNdIjnMeIkRh5InGDxg");
	var mask_graphics_31 = new cjs.Graphics().p("Aj0N2ISJqtI/ZwUIAAjXIJdAAIAADXIYrNcIjnMeIkRh4IrBFsg");
	var mask_graphics_32 = new cjs.Graphics().p("AnVO3IVqssI/ZwUIAAjXIJdAAIAADXIYrNeIjnMcIkRh4IuzHog");
	var mask_graphics_33 = new cjs.Graphics().p("ArOP2IZjuhI/ZwUIAAjXIJdAAIAADXIYrNeIjnMcIkRh4IyUJUg");
	var mask_graphics_34 = new cjs.Graphics().p("AuoQpIc9wSI/ZwUIAAjXIJdAAIAADXIYrNfIjnMcIkRh5I2HLPg");
	var mask_graphics_35 = new cjs.Graphics().p("AxwRoMAgxgSNI/YwWIAAjXIJdAAIAADXIYrNeIjnMcIkRh4I5oNMg");
	var mask_graphics_36 = new cjs.Graphics().p("AzqSjMAklgUII/ZwWIAAjXIJdAAIAADXIYrNeIjnMcIkRh4I9dPMg");
	var mask_graphics_37 = new cjs.Graphics().p("A1VTbMAn7gV4I/YwWIAAjXIJdAAIAADXIYrNeIjnMcIkRh4MghEAQ8g");
	var mask_graphics_38 = new cjs.Graphics().p("A3RUZMArzgX1I/YwWIAAjXIJcAAIAADXIYsNfIjoMcIkRh5MgkpAS6g");
	var mask_graphics_39 = new cjs.Graphics().p("A5BVFMAvTgZhI/YwWIAAjXIJbAAIAADXIYtNfIjnMcIkRh5MgoUAU6g");
	var mask_graphics_40 = new cjs.Graphics().p("A6tV+MAyrgbUI/YwWIAAjXIJaAAIAADXIYuNeIjoMcIkRh4MgsJAWug");
	var mask_graphics_41 = new cjs.Graphics().p("A7jWWMA0XgcYI/ZwWIAAjXIJbAAIAADXIYtNeIjnMcIkRh4MguuAYGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:17.8,y:-310}).wait(1).to({graphics:mask_graphics_19,x:29.1,y:-302.8}).wait(1).to({graphics:mask_graphics_20,x:40.6,y:-297}).wait(1).to({graphics:mask_graphics_21,x:52.5,y:-290.6}).wait(1).to({graphics:mask_graphics_22,x:64.5,y:-284.1}).wait(1).to({graphics:mask_graphics_23,x:83.9,y:-272.4}).wait(5).to({graphics:mask_graphics_28,x:83.9,y:-241.7}).wait(1).to({graphics:mask_graphics_29,x:83.9,y:-241.7}).wait(1).to({graphics:mask_graphics_30,x:83.9,y:-235.7}).wait(1).to({graphics:mask_graphics_31,x:83.9,y:-229.6}).wait(1).to({graphics:mask_graphics_32,x:83.9,y:-223.3}).wait(1).to({graphics:mask_graphics_33,x:83.9,y:-217.9}).wait(1).to({graphics:mask_graphics_34,x:83.9,y:-211.8}).wait(1).to({graphics:mask_graphics_35,x:79.4,y:-205.5}).wait(1).to({graphics:mask_graphics_36,x:67.3,y:-199.2}).wait(1).to({graphics:mask_graphics_37,x:56.5,y:-193.5}).wait(1).to({graphics:mask_graphics_38,x:44.1,y:-187.3}).wait(1).to({graphics:mask_graphics_39,x:32.9,y:-180.9}).wait(1).to({graphics:mask_graphics_40,x:22.1,y:-175}).wait(1).to({graphics:mask_graphics_41,x:16.8,y:-170.6}).wait(4).to({graphics:null,x:0,y:0}).wait(320));

	// lines
	this.instance_9 = new lib.lines_1();
	this.instance_9.setTransform(0,-160.5);
	this.instance_9.compositeOperation = "lighter";
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({_off:true},226).wait(121));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#190D11").s().p("A3bIXIAAwsMAu3AAAIAAQsg");
	this.shape.setTransform(0,246.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(365));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_18 = new cjs.Graphics().p("A3v2RMAvfAAAIAAUNMgvfAYWg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_1_graphics_18,x:-2,y:-163.4}).wait(226).to({graphics:null,x:0,y:0}).wait(121));

	// img4
	this.img4 = new lib.img4_1();
	this.img4.setTransform(-300,-162);
	this.img4._off = true;

	this.img4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.img4).wait(109).to({_off:false},0).wait(1).to({regY:-2.6,x:-297.2,y:-164.6},0).wait(1).to({x:-288.7},0).wait(1).to({x:-273.8},0).wait(1).to({x:-252.5},0).wait(1).to({x:-225},0).wait(1).to({x:-192.7},0).wait(1).to({x:-157.6},0).wait(1).to({x:-122.4},0).wait(1).to({x:-89.7},0).wait(1).to({x:-61.3},0).wait(1).to({x:-38.2},0).wait(1).to({x:-20.8},0).wait(1).to({x:-8.9},0).wait(1).to({x:-2.1},0).wait(1).to({regY:0,x:0,y:-162},0).to({_off:true},120).wait(121));

	// img3
	this.instance_10 = new lib.img3_1();
	this.instance_10.setTransform(-300,-162);
	this.instance_10._off = true;

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({_off:false},0).wait(1).to({x:-297.3},0).wait(1).to({x:-288.9},0).wait(1).to({x:-274.6},0).wait(1).to({x:-254.2},0).wait(1).to({x:-228.2},0).wait(1).to({x:-197.5},0).wait(1).to({x:-163.9},0).wait(1).to({x:-129.5},0).wait(1).to({x:-96.6},0).wait(1).to({x:-67.2},0).wait(1).to({x:-42.6},0).wait(1).to({x:-23.5},0).wait(1).to({x:-10.2},0).wait(1).to({x:-2.5},0).wait(1).to({x:0},0).to({_off:true},40).wait(241));

	// img2
	this.instance_11 = new lib.img2_1();
	this.instance_11.setTransform(0,-162);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).to({alpha:1},26).to({_off:true},41).wait(280));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("EgXbAu3MAAAhdtIAKAAMAAAAroMAutgX+MAAABKDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:0,y:0}).wait(200).to({graphics:null,x:0,y:0}).wait(121));

	// img1
	this.instance_12 = new lib.img1_1();
	this.instance_12.setTransform(0,-53.5);
	this.instance_12._off = true;

	this.instance_12.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({_off:false},0).to({_off:true},200).wait(121));

	// img1
	this.instance_13 = new lib.img1_1();
	this.instance_13.setTransform(0,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},44).wait(300).to({_off:false},0).wait(21));

	// bg
	this.instance_14 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(365));

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