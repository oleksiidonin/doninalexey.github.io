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
		{src:"images/img3.jpg", id:"img3"}
	]
};



// symbols:



(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,38);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,260);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,463);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,463);


(lib.t5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAqIAngtQAEgGAAgHQAAgHgEgFQgFgEgHAAQgHAAgFAHQgDAEAAAGIgJAAQAAgLAGgGQAHgJALAAQALAAAHAHQAIAHgBALQABAJgHAHIgMAOIgPATIAhAAIAAAJg");
	this.shape.setTransform(127.6,70.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAeQgIgMAAgSQAAgSAIgLQAJgMALAAQAMAAAJAMQAIAMAAARQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgOgGgJQgGgKgIAAQgHAAgGAKg");
	this.shape_1.setTransform(121.1,70.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAeQgIgMAAgSQAAgRAIgMQAJgMALAAQAMAAAJAMQAIALAAASQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgOgGgJQgGgKgIAAQgHAAgGAKg");
	this.shape_2.setTransform(114.4,70.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAlIAthGIgsAAIAAgIIA8AAIg2BTg");
	this.shape_3.setTransform(108.1,70.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAqIAmgtQAEgHAAgGQAAgHgEgFQgFgEgHAAQgIAAgEAHQgDAEAAAGIgJAAQAAgLAGgGQAIgJAKAAQALAAAHAHQAHAHAAALQAAAJgGAHIgbAhIAhAAIAAAJg");
	this.shape_4.setTransform(98.4,70.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAlIARgaIgFABQgMAAgIgIQgHgFAAgMQAAgNAIgIQAIgIALAAQANAAAIAKQAHAIAAALQAAAKgGAHIgbAngAgMgcQgGAGAAAJQAAAIAGAFQAFAEAHAAQAIAAAGgEQAFgFAAgIQAAgJgFgFQgGgGgIAAQgHAAgFAFg");
	this.shape_5.setTransform(92,70.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALArIAAgNIgoAAIAyhIIAAA/IAKAAIAAAJIgKAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_6.setTransform(85.2,70.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA1IAGgTQACgNAAgVQAAgUgCgNIgGgSIAIgEIAEATQAFANAAAXQAAAYgFAOIgEASg");
	this.shape_7.setTransform(77.8,71);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALArIAAgNIgpAAIAyhIIAAA/IALAAIAAAJIgLAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_8.setTransform(72.8,70.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALArIAAgNIgpAAIAzhIIAAA/IAJAAIAAAJIgJAAIAAANgAgNAVIAYAAIAAgjg");
	this.shape_9.setTransform(66.1,70.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAeQgIgMAAgSQAAgRAIgMQAJgMALAAQAMAAAJAMQAIAMAAARQAAASgIAMQgJAMgMAAQgLAAgJgMgAgNgXQgGAJAAAOQAAAPAGAJQAGAKAHAAQAIAAAGgKQAGgJAAgPQAAgNgGgKQgGgKgIAAQgHAAgGAKg");
	this.shape_10.setTransform(59.6,70.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAmQgFgSAAgUQAAgSAFgSIAEgTIAIAEIgGASQgDAPAAASQAAAUADAOIAGATIgIADg");
	this.shape_11.setTransform(54.8,71);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAYQAAgHAGAAQAHAAAAAHQAAAHgHAAQgGAAAAgHgAgGgXQAAgHAGAAQAHAAAAAHQAAADgCADQgDACgCAAQgGAAAAgIg");
	this.shape_12.setTransform(48.8,71.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHAAQgGAAAAgHg");
	this.shape_13.setTransform(46,73.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQAeIAAgxIgTAAIAAAZQAAAMgFAFQgFAHgKAAIgDAAIAAgKIADAAQAFAAACgEQACgDAAgHIAAgjIApAAIAAA7g");
	this.shape_14.setTransform(41.1,71.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAXQgKgIAAgPQAAgNAIgIQAJgJALAAQAPAAAIALQAFAIABANIguAAQAAAIAGAGQAFAGAHAAQAHAAAFgFQAFgEABgEIAJAFQgDAGgEADQgJAIgLAAQgLAAgIgIgAARgFQgBgHgEgFQgGgEgGAAQgFAAgFAEQgFAFgBAHIAhAAIAAAAg");
	this.shape_15.setTransform(35.3,71.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAwIAAhVIgYAAIAAgKIA5AAIAAAKIgYAAIAABVg");
	this.shape_16.setTransform(30.5,69.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHAAQgGAAAAgHg");
	this.shape_17.setTransform(23.3,73.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAwIAAhfIAuAAIAAAKIgjAAIAAAeIANAAQAfAAAAAZQAAAOgIAIQgJAIgMAAgAgQAlIAMAAQAKAAAGgFQAFgFAAgJQAAgKgIgEQgEgDgKAAIgLAAg");
	this.shape_18.setTransform(18.6,69.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANAzIAAgRIgwAAIA7hUIAABLIAMAAIAAAJIgMAAIAAARgAgQAZIAdAAIAAgqg");
	this.shape_19.setTransform(7.7,69.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAxIAtg1QAFgIAAgHQAAgIgFgFQgGgGgIAAQgJAAgGAJQgDAEAAAHIgKAAQAAgMAHgIQAJgKAMAAQANAAAJAJQAIAIAAAMQAAAKgIAJQgEAFgJALIgTAXIAoAAIAAAKg");
	this.shape_20.setTransform(-0.1,69.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAPIAKggIAJAEIgMAfg");
	this.shape_21.setTransform(-8.9,74.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQABAIAJAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_22.setTransform(-13.4,70.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZgcIALAAIAAAmIAogrIAAA/IgLAAIAAgmIgoAqg");
	this.shape_23.setTransform(-20.1,71.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMAeIgWgbIgDADIAAAYIgLAAIAAg7IALAAIAAAZIAWgZIANAAIgYAbIAbAgg");
	this.shape_24.setTransform(-25.8,71.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAeIAAg7IALAAIAAAXIAKAAQALAAAGAGQAFADAAAIQAAAJgGAEQgGAGgKAAgAgKAUIAKAAQAEAAADgBQAEgDAAgFQAAgFgEgDQgDgBgEAAIgKAAg");
	this.shape_25.setTransform(-31.4,71.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAWQgJgJAAgNQAAgNAJgIQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgHAGAAAJQAAAKAHAGQAGAGAHAAQALAAAIgJIAAAMQgIAGgLAAQgMAAgJgJg");
	this.shape_26.setTransform(-37.3,71.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAWAAQAHAAAEAEQAGAEAAAHQAAAIgHAEQAFACADAAQAFAFAAAHQAAAJgGAEQgGAFgJAAgAgLAUIALAAQAGAAADgCQADgCAAgEQAAgFgDgCQgCgCgHAAIgLAAgAgLgEIALAAQACAAADgCQADgDAAgDQAAgEgDgCQgDgBgEAAIgJAAg");
	this.shape_27.setTransform(-42.9,71.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAWQgKgJABgNQAAgNAJgIQAIgJANAAQANAAAKAJQAIAIABANQgBANgIAJQgKAJgNAAQgMAAgJgJgAgNgPQgGAGAAAJQAAAKAGAGQAGAGAHAAQAIAAAHgGQAGgGAAgKQAAgJgGgGQgHgGgIAAQgHAAgGAGg");
	this.shape_28.setTransform(-49.6,71.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAeIgWgbIgCADIAAAYIgLAAIAAg7IALAAIAAAZIAWgZIAMAAIgYAbIAcAgg");
	this.shape_29.setTransform(-55.5,71.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPAWQgJgJAAgNQAAgNAJgIQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgHAGAAAJQAAAKAHAGQAGAGAHAAQALAAAIgJIAAAMQgIAGgLAAQgMAAgJgJg");
	this.shape_30.setTransform(-61.7,71.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQABgNAIgIQAKgJAMAAQAOAAAIAJQAJAIAAANQAAANgJAJQgIAJgOAAQgMAAgJgJgAgNgPQgHAGABAJQgBAKAHAGQAGAGAHAAQAJAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgJAAQgHAAgGAGg");
	this.shape_31.setTransform(-68.2,71.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfgRIgKBCIgLAAIAQhkIAkBPIAmhQIAPBlIgLAAIgJhCIghBGg");
	this.shape_32.setTransform(-77.9,69.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAeIAAgxIgTAAIAAgKIAvAAIAAAKIgTAAIAAAxg");
	this.shape_33.setTransform(-89,71.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_34.setTransform(-93.2,71.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAIQAIgJAKAAQAOAAAIAKQAIAIAAANQAAANgIAIQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAAKQAAAKAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgKQAAgJgGgHQgGgGgHAAQgHAAgFAGg");
	this.shape_35.setTransform(-98.6,73.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AANAeIAAgxIgZAAIAAAxIgLAAIAAg7IAvAAIAAA7g");
	this.shape_36.setTransform(-105.5,71.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAPIAKggIAJAEIgMAfg");
	this.shape_37.setTransform(-113.9,74.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAeIAAg7IAWAAQAHAAAFAEQAFAFAAAGQAAAIgHAEQAFACADAAQAFAFAAAHQAAAJgGAEQgGAFgJAAgAgMAUIAMAAQAGAAADgCQAEgCgBgEQAAgFgCgCQgDgCgHAAIgMAAgAgMgEIAMAAQACAAACgCQAEgDAAgDQAAgEgEgCQgCgBgEAAIgKAAg");
	this.shape_38.setTransform(-117.7,71.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEArIAAg6IAJAAIAAA6gAAEgeQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACADAAACQAAAHgHAAQgDAAgCgCgAgPgjQAAgHAHAAQADAAACACQACADAAACQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_39.setTransform(-122.1,70.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgZgcIALAAIAAAmIAogrIAAA/IgLAAIAAgmIgoAqg");
	this.shape_40.setTransform(-126.6,71.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AATAwIgmgtIgDADIAAAqIgKAAIAAhfIAKAAIAAApIAogpIAOAAIgsAtIAtAyg");
	this.shape_41.setTransform(-133.3,69.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAGATIgCglIAMAAIgCAlgAgNATIgCglIAMAAIgCAlg");
	this.shape_42.setTransform(131.2,50.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQAMAAAHAKIAAgJIALAAIAAA6IgLAAIAAgIQgIAKgLAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAFAGQAGAHAHAAQAJAAAGgHQAFgGAAgJQAAgJgGgHQgGgFgIAAQgGAAgGAGg");
	this.shape_43.setTransform(124.7,55.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAOAdIAAgZIgbAAIAAAZIgKAAIAAg6IAKAAIAAAZIAbAAIAAgZIAKAAIAAA6g");
	this.shape_44.setTransform(117.6,55.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEArIAAg6IAIAAIAAA6gAAEgdQgCgDgBgDQABgHAHAAQAIAAAAAHQAAADgCADQgDACgDAAQgDAAgCgCgAgNgdQgCgDAAgDQAAgHAHAAQAHAAAAAHQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_45.setTransform(112.7,53.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQALAAAIAKIAAgJIALAAIAAA6IgLAAIAAgIQgHAKgMAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAGAGQAFAHAHAAQAJAAAGgHQAFgGAAgJQAAgJgGgHQgHgFgHAAQgGAAgGAGg");
	this.shape_46.setTransform(107.1,55.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgNgfQgGAGAAALQAAAJAFAFQAGAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgGAGg");
	this.shape_47.setTransform(99.8,56.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AALAdIgWgaIgDAEIAAAWIgKAAIAAg6IAKAAIAAAZIAXgZIAMAAIgYAbIAcAfg");
	this.shape_48.setTransform(93.2,55.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOAwIAMgbIglhEIANAAIAdA3IAZg3IAMAAIgqBfg");
	this.shape_49.setTransform(86.3,53.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_50.setTransform(80,55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUAXQgJgJAAgOQAAgNAJgJQAIgIAMAAQAMAAAHAKIAAgJIALAAIAAA6IgLAAIAAgIQgIAKgLAAQgMAAgIgIgAgMgPQgGAGAAAJQAAAJAFAGQAGAHAHAAQAJAAAGgHQAFgGAAgJQAAgKgHgGQgFgFgIAAQgHAAgFAGg");
	this.shape_51.setTransform(73.8,55.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_52.setTransform(67.6,55.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAWQgIgJgBgNQABgMAIgJQAKgJAMAAQAOAAAIAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgKgJgAgOgPQgGAGAAAJQAAAKAGAGQAHAGAHAAQAIAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgIAAQgHAAgHAGg");
	this.shape_53.setTransform(61.3,55.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQACAIAIAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_54.setTransform(53.8,53.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQAAgMAJgJQAJgJANAAQANAAAJAJQAKAJAAAMQAAANgKAJQgJAJgNAAQgMAAgJgJgAgNgPQgHAGAAAJQAAAKAHAGQAGAGAHAAQAIAAAGgGQAHgGAAgKQAAgJgHgGQgGgGgIAAQgIAAgFAGg");
	this.shape_55.setTransform(46.4,55.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEAwIAAhUIgXAAIAAgLIA3AAIAAALIgXAAIAABUg");
	this.shape_56.setTransform(40.4,53.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAGATIgCglIAMAAIgCAlgAgNATIgCglIAMAAIgCAlg");
	this.shape_57.setTransform(34.9,50.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEAwIAAhfIAJAAIAABfg");
	this.shape_58.setTransform(27.3,53.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgEAwIAAhfIAJAAIAABfg");
	this.shape_59.setTransform(23.7,53.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAZAwIAAhUIgwAAIAABUIgLAAIAAhfIBFAAIAABfg");
	this.shape_60.setTransform(17.1,53.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAALQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgFAGg");
	this.shape_61.setTransform(5.2,56.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQAAgMAJgJQAKgJAMAAQAOAAAJAJQAJAJAAAMQAAANgJAJQgKAJgNAAQgMAAgJgJgAgNgPQgHAGAAAJQAAAKAHAGQAGAGAHAAQAIAAAGgGQAHgGAAgKQAAgJgHgGQgFgGgJAAQgHAAgGAGg");
	this.shape_62.setTransform(-2.6,55.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_63.setTransform(-9,55.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgNAUQgGgJgBgHIgKAAIAAAZIgLAAIAAg6IALAAIAAAZIALAAQABgKAHgHQAJgJAMAAQAOAAAJAJQAJAJAAAMQAAANgJAJQgJAJgOAAQgPAAgIgLgAgDgPQgGAGAAAJQAAAKAHAGQADAGAJAAQAJAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgJAAQgJAAgEAGg");
	this.shape_64.setTransform(-16.4,55.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCATIgCglIAKAAIgCAlg");
	this.shape_65.setTransform(-22.9,50.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgVArQgKgJABgVQAAgkARgMQAGgFANgDQAJgCADgFIAMAAQgEAMgQAEQgMADgGAEQgLAKgBARQAHgLANABQAOAAAIAJQAKAHgBANQABAOgKAJQgJAJgNAAQgMAAgJgIgAgNACQgGAHgBAKQABALAGAGQAGAFAHABQAJgBAFgFQAHgGAAgLQAAgKgHgHQgFgDgJAAQgHAAgGADg");
	this.shape_66.setTransform(-28.1,53.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgZgdIALAAIAAAnIAngrIAAA+IgKAAIAAglIgoAqg");
	this.shape_67.setTransform(-35.5,55.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIALAAIAAAJQAIgKAKAAQAOAAAIAKQAIAJAAANQAAANgIAHQgIAJgNAAQgLAAgIgKIAAAqgAgMgfQgHAGAAALQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgLgGgGQgGgGgHAAQgHAAgFAGg");
	this.shape_68.setTransform(-42.8,56.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgEAdIAAgwIgTAAIAAgKIAvAAIAAAKIgTAAIAAAwg");
	this.shape_69.setTransform(-49.3,55.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgPAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQALAAAIAGIAAAMQgHgJgMAAQgHAAgGAGQgGAGAAAJQAAAKAGAGQAGAGAHAAQAMAAAHgKIAAANQgIAGgLAAQgMAAgJgJg");
	this.shape_70.setTransform(-55.1,55.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgZgdIALAAIAAAnIAogrIAAA+IgLAAIAAglIgoAqg");
	this.shape_71.setTransform(-61.8,55.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAXAmIAAgRIgsAAIAAARIgKAAIAAgaQAIAAADgIQADgEAAgKIAAgbIAoAAIAAAxIAJAAIAAAagAgHgFQAAALgHAGIAbAAIAAgnIgUAAg");
	this.shape_72.setTransform(-68.8,55.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAngrIAAA/IgKAAIAAgoIgnAsgAgTgqIAJgDQACAIAIAAQAKAAACgIIAJADQgFAOgQAAQgOAAgFgOg");
	this.shape_73.setTransform(-79.1,53.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgZgdIALAAIAAAnIAngrIAAA+IgKAAIAAglIgoAqg");
	this.shape_74.setTransform(-86.3,55.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAOAdIAAgZIgbAAIAAAZIgKAAIAAg6IAKAAIAAAZIAbAAIAAgZIAKAAIAAA6g");
	this.shape_75.setTransform(-93.4,55.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgYgQIAKAAIAAAmIAogrIAAA/IgLAAIAAgoIgnAsgAgUgqIAJgDQADAIAIAAQAKAAACgIIAJADQgFAOgQAAQgNAAgHgOg");
	this.shape_76.setTransform(-100.4,53.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgEAsIAAg6IAJAAIAAA6gAgEgeQgCgDAAgDQAAgDACgCQADgCABgBQACABADACQACACAAADQAAADgCADQgDACgCAAQgBAAgDgCg");
	this.shape_77.setTransform(-105.5,53.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AATAmIAAgRIgvAAIAAg6IALAAIAAAxIAZAAIAAgxIALAAIAAAxIAKAAIAAAag");
	this.shape_78.setTransform(-110,55.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgEAsIAAg6IAIAAIAAA6gAgDgeQgDgDAAgDQAAgDADgCQABgCACgBQACABADACQACACAAADQAAADgCADQgDACgCAAQgCAAgBgCg");
	this.shape_79.setTransform(-115.4,53.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgEBBIAAghQgQAAgJgIQgLgJAAgOQAAgNALgIQAJgIAQAAIAAgkIAJAAIAAAkQAQAAAKAIQAKAIAAANQAAAOgLAJQgJAIgQAAIAAAhgAAFgTIAAAqQALAAAGgFQAIgFAAgMQAAgLgJgFQgGgEgIAAIgCAAgAgUgPQgJAFAAALQAAAMAJAFQAGAFAKAAIAAgqIgDAAQgHAAgGAEg");
	this.shape_80.setTransform(-121.7,55);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgOAUgBQAUABAQAOQAOAOAAAUQAAAVgOAOQgPAOgVAAQgUAAgOgOgAgagaQgMALAAAPQAAAQAMAMQAMALAOAAQAQAAAMgLQALgMAAgQQAAgPgLgLQgMgNgQAAQgOAAgMANg");
	this.shape_81.setTransform(-132.2,53.3);

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

	this.addChild(this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.3,-77.8,274.7,155.6);


(lib.t4_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHVg4IAQAAIAABuIBmh0IAACWIgPAAIAAhuIhnB1gAE3g4IAQAAIAABuIBmh0IAACWIgQAAIAAhuIhmB1gAD+BYIAAhHIhLAAIAABHIgRAAIAAiQIARAAIAAA5IBLAAIAAg5IAQAAIAACQgAA2BYIAAiQIBNAAIAAAPIg8AAIAAAqIA5AAIAAAPIg5AAIAAA5IA8AAIAAAPgAAABYIAAhHIhMAAIAABHIgQAAIAAiQIAQAAIAAA5IBMAAIAAg5IAOAAIAACQgAjTBYIAAiQIAaAAQAXAAALAKQAOAJAAAUQAAARgPAKQAOAEAHAMQAHAJAAAMQAAAUgPAMQgMAJgYAAgAjDBJIATAAQARAAAJgGQAJgIAAgNQAAgOgMgHQgHgEgSAAIgRAAgAjDAHIANAAQAdgBAAgWQgBgZgcAAIgNAAgAlABYIAAiQIBNAAIAAAPIg8AAIAAAqIA6AAIAAAPIg6AAIAAA5IA8AAIAAAPgAl4BYIAAiBIhLAAIAACBIgQAAIAAiQIBsAAIAACQgApKBYIAAiQIAaAAQAWAAAMAKQANAJAAAUQAAARgPAKQAPAEAHAMQAHAJgBAMQAAAUgOAMQgMAJgXAAgAo6BJIATAAQARAAAIgGQAKgIAAgNQAAgOgNgHQgHgEgSAAIgQAAgAo6AHIANAAQAcgBAAgWQAAgZgcAAIgNAAgAHuhZIAQgFQADANAQAAQAPAAADgNIAQAFQgIAVgaAAQgbAAgIgVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.8,-9.5,117.6,19.1);


(lib.t4_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlaBrIAAgeIhnAAIAAAeIgQAAIAAguQAQABAHgUQAGgOgBgZIAAhHIBaAAIAACBIAQAAIAAAugAmkADQAAAagFAPQgEAIgIAJIBJAAIAAhyIg4AAgAFchEIAPAAIAABuIBnh0IAACXIgQAAIAAhuIhmB0gAC9hEIAQAAIAABuIBmh0IAACXIgQAAIAAhuIhmB0gAhaA5QgXgVAAghQAAgeAXgWQAVgVAhAAQAfAAAVAVQAVAWAAAeQAAAhgVAVQgVAWgfAAQghAAgVgWgAhPglQgSASAAAWQAAAZASASQARARAaAAQAZAAAOgRQASgSAAgZQAAgWgSgSQgOgSgZAAQgaAAgRASgAkKBNIAAgQIAIABQAJABAGgHQAGgFABgMIABgWIAAhVIBaAAIAACRIgQAAIAAiCIg5AAIAABNQAAAQgCAGQgCAPgKAIQgKAJgPAAIgJgBgABGBNIAAiRIAbAAQAVABAMAIQANAKAAAVQAAASgPAKQAPACAHAMQAHAJgBAMQAAAUgOAMQgMAKgXAAgABWA9IATAAQASAAAIgGQAJgHABgNQAAgPgNgGQgHgFgSAAIgRAAgABWgEIAMAAQAdAAAAgYQABgZgdAAIgNAAgAkyBNIAAiRIAQAAIAACRgAF0hlIAQgFQADAMAPAAQAQAAADgMIAQAFQgIAWgbgBQgaABgIgWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.6,-10.7,93.3,21.5);


(lib.t4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUBrIAAgfIhmAAIAAAfIgPAAIAAguQAPABAIgVQAFgNAAgZIAAhHIBYAAIAACBIAQAAIAAAugAAKADQAAAagGAPQgDAJgGAIIBHAAIAAhxIg4AAgAGuhEIARAAIAABuIBmh0IAACWIgRAAIAAhtIhmB0gAEQhEIAQAAIAABuIBmh0IAACWIgQAAIAAhtIhmB0gAl9A5QgWgVAAghQAAgeAWgWQAWgVAgAAQAgAAAWAVQAWAWAAAeQAAAhgWAVQgWAWggAAQggAAgWgWgAlxglQgSARAAAXQAAAZASASQARASAZAAQAZAAARgSQASgSAAgZQAAgXgSgRQgRgSgZAAQgZAAgRASgAoOA5QgWgVAAggQAAgfAWgWQAWgVAhAAQAYAAATAOIAAAUQgIgIgLgFQgMgGgNAAQgaAAgQASQgRASAAAXQAAAcATARQASAPAWAAQAOAAANgHQAKgFAHgHIAAAUQgUAOgYAAQghAAgVgWgAjqBMIAAgPQADABAFAAQAIAAAGgFQAJgJAAgfIAAhVIBZAAIAACQIgQAAIAAiAIg5AAIAABMIgBAXQgDAOgJAIQgKAJgPAAgADXBMIAAhHIhLAAIAABHIgQAAIAAiQIAQAAIAAA8IBLAAIAAg8IARAAIAACQgAhKBMIAAiQIAQAAIAACQgAHHhlIAQgFQADAMAQAAQAPAAADgMIAQAFQgJAVgZAAQgaAAgJgVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.9,-10.7,109.9,21.5);


(lib.t3_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AI5g4IAQAAIAABuIBmh0IAACWIgQAAIAAhuIhmB1gAGag4IAQAAIAABuIBnh0IAACWIgRAAIAAhuIhmB1gAhXg4IAQAAIAABuIBlh0IAACWIgQAAIAAhuIhlB1gABggLIgPBjIgQAAIAYiYIA4B5IA6h5IAXCYIgRAAIgNhjIgzBqgAmgBFQgWgVAAggQAAgfAWgWQAWgVAhgBQAYAAAUAPIAAAUQgHgGgNgHQgMgGgNAAQgZAAgRASQgRARAAAYQAAAcATARQARAOAXAAQAOAAAOgGQAFgEAMgJIAAAVQgVAOgYAAQghAAgVgWgAFiBYIAAhHIhMAAIAABHIgQAAIAAiQIAQAAIAAA5IBMAAIAAg5IAQAAIAACQgAi9BYIAAiQIAaAAQAZAAANALQAMALAAATQAAAQgKALQgNANgXAAIgOAAIAAA/gAitAJIANAAQAPABAIgIQAJgEAAgNQAAgaghAAIgMAAgAkKBYIAAiBIgkAAIAAgPIBYAAIAAAPIgkAAIAACBgAobBYIAAiQIBNAAIAAAPIg8AAIAAAqIA6AAIAAAPIg6AAIAAA5IA8AAIAAAPgApSBYIAAhHIhMAAIAABHIgQAAIAAiQIAQAAIAAA5IBMAAIAAg5IAQAAIAACQgAJahNQgGgFgCgHIAQgFQADANAPAAQAPAAAEgNIAPAFQgBAHgHAFQgKAJgQAAQgQAAgKgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.8,-9.5,137.6,19.1);


(lib.t3_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApIBrIAAgeIhpAAIAAAeIgPAAIAAguQAPABAIgUQAFgOABgZIAAhHIBZAAIAACBIARAAIAAAugAqTADQAAAagGAPQgDAIgHAJIBJAAIAAhyIg5AAgAJKhEIAQAAIAABuIBnh0IAACXIgQAAIAAhuIhnB0gAGshEIAQAAIAABuIBmh0IAACXIgQAAIAAhuIhmB0gAohhEIAQAAIAABuIBmh0IAACXIgQAAIAAhuIhmB0gAhJgXIgPBkIgRAAIAZiZIA4B5IA4h5IAXCZIgRAAIgNhkIgxBpgAFzBNIAAhIIhLAAIAABIIgRAAIAAiRIARAAIAAA8IBLAAIAAg8IAQAAIAACRgADgBNIAAg/IgfACQgbgBgKgHQgNgJAAgYIAAgrIARAAIAAAqQAAARAIAHQAGACAUAAIAeAAIAAhEIAQAAIAACRgABbBNIAAiRIARAAIAACRgAiMBNIgSgqIg+AAIgSAqIgSAAIBEiXIBCCXgAikAUIgYg4IgaA4IAyAAgAknBNIAAhIIhLAAIAABIIgQAAIAAiRIAQAAIAAA8IBLAAIAAg8IARAAIAACRgAJshZQgHgFgBgHIAPgFQADAMAQAAQAPAAAEgMIAPAFQgCAHgGAFQgLAKgPgBQgQABgKgKg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,-10.7,141.1,21.5);


(lib.t3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABsBrIAAgfIhsAAIAAiQIAQAAIAACBIBKAAIAAiBIAQAAIAACBIARAAIAAAugAKdhEIAQAAIAABuIBnh0IAACWIgRAAIAAhtIhmB0gAH+hEIARAAIAABuIBmh0IAACWIgRAAIAAhtIhmB0gADMhEIAQAAIAABuIBmh0IAACWIgQAAIAAhtIhmB0gAmkA5QgWgVAAghQAAgeAWgWQAXgVAfAAQAhAAAVAVQAXAWAAAeQAAAhgXAVQgVAWghAAQgfAAgXgWgAmYglQgRARAAAXQAAAZARASQARASAZAAQAaAAARgSQARgSAAgZQAAgXgRgRQgRgSgaAAQgZAAgRASgAHGBMIAAhHIhMAAIAABHIgQAAIAAiQIAQAAIAAA8IBMAAIAAg8IAQAAIAACQgACTBMIAAiQIAQAAIAACQgAgoBMIgRgpIg+AAIgSApIgSAAIBDiXIBCCXgAg/AUIgZg5IgZA5IAyAAgAkBBMIAAiQIAaAAQAXAAALAJQANALAAAUQAAATgOAJQAOACAHALQAHAKAAAMQAAAUgPAMQgMAJgYAAgAjxA9IATAAQASAAAIgGQAJgHAAgNQAAgPgMgHQgIgEgRAAIgRAAgAjxgEIAMAAQAeAAAAgYQAAgYgdAAIgNAAgAnrBMIAAhHIhLAAIAABHIgQAAIAAiQIAQAAIAAA8IBLAAIAAg8IARAAIAACQgAp+BMIAAhHIhMAAIAABHIgQAAIAAiQIAQAAIAAA8IBMAAIAAg8IAQAAIAACQgAsTBMIAAiQIAQAAIAACQgAK+hZQgHgGgBgGIAQgFQADAMAPAAQAPAAAEgMIAPAFQgBAGgHAGQgKAJgQAAQgQAAgKgJgADkhlIAQgFQAEAMAPAAQAPAAADgMIAQAFQgJAVgZAAQgZAAgKgVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.8,-10.7,157.6,21.5);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApkEGIAAghIhzAAIAAibIARAAIAACLIBQAAIAAiLIARAAIAACLIASAAIAAAxgAhoDRQgVgWgCggIgXAAIAABKIgRAAIAAibIARAAIAABAIAYAAQAEgdAWgSQAWgUAfAAQAiAAAUAWQAXAYAAAjQAAAjgXAWQgUAXgiAAQgjAAgWgXgAhbBqQgSASAAAcQAAAbASASQASASAaABQAZgBATgSQAQgSAAgbQAAgcgQgSQgTgSgZgBQgaABgSASgAlTDRQgYgXABgiQgBgjAYgXQAXgXAjAAQAhAAAXAXQAZAXAAAjQgBAigXAXQgYAXghAAQgjAAgXgXgAlGBqQgTATAAAbQAAAbATASQASASAbABQAagBASgSQATgSAAgbQAAgbgTgTQgSgSgagBQgbABgSASgAmeDlIAAhMIhQAAIAABMIgRAAIAAibIARAAIAAA/IBQAAIAAg/IARAAIAACbgAo6DlIAAibIARAAIAACbgAmRhGIAAghIhuAAIAAAhIgRAAIAAgxQARABAIgWQAGgNAAgcIAAhNIBeAAIAACLIASAAIAAAxgAngi1QAAAcgGAPQgEALgHAIIBNAAIAAh7Ig8AAgAFth7QgWgWgBggIgXAAIAABKIgRAAIAAibIARAAIAABBIAXAAQAFgeAVgSQAWgUAfAAQAjAAAWAXQAXAXAAAiQAAAkgXAWQgWAXgjAAQgiAAgWgXgAF5jiQgRASgBAbQABAbARAUQATASAZAAQAaAAASgSQASgTAAgcQAAgbgSgSQgSgSgagBQgZABgTASgACEh7QgWgWgBggIgXAAIAABKIgRAAIAAibIARAAIAABBIAYAAQAEgeAVgSQAXgUAeAAQAjAAAXAXQAWAXAAAiQAAAkgWAWQgXAXgjAAQghAAgXgXgACRjiQgSASAAAbQAAAcASATQARASAaAAQAbAAARgSQASgTAAgcQAAgbgSgSQgRgSgbgBQgaABgRASgAjSh7QgYgXAAgjQAAgiAZgXQAWgXAiAAQAjAAAXAXQAYAXgBAiQABAjgYAXQgXAXgjAAQghAAgYgXgAjFjiQgTATAAAaQAAAbATAUQASASAaAAQAbAAASgSQATgUAAgbQAAgagTgTQgSgSgbgBQgaABgSASgAJ8hnIAAibIARAAIAABBIAVAAQA2gBgBAsQAAAWgNANQgNAMgYAAgAKNh3IAUAAQAUAAAIgJQAJgHAAgPQAAgQgMgIQgIgDgTAAIgSAAgAIrhnIAAiLIglAAIAAgQIBcAAIAAAQIglAAIAACLgAgmhnIAAibIAcAAQAYgBANALQAPANAAAVQAAATgLALQgNAOgYAAIgOAAIAABDgAgUi6IAOAAQANAAAJgIQAIgHAAgOQABgbghAAIgMAAgAkShnIg/hHIgFAFIAABCIgSAAIAAibIASAAIAABCIBChCIAXAAIhIBIIBLBTgAo6hnIAAibIARAAIAACbgAp2hnIAAiLIhQAAIAACLIgRAAIAAibIByAAIAACbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.8,-26.2,145.6,52.5);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.3,-25.2,190.7,50.5);


(lib.rx = function() {
	this.initialize();

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ADHCgIhIh1IhLB1IhLAAIByinIhfiYIBKAAIA5BkIA9hkIBMAAIhkCYIBvCngAh0CgIhXiBIgIAAIAACBIg/AAIAAk/IBeAAQA1AAAfAYQAgAbAAAtQAAAzgmAXQgPALgVADIBmCHgAjTgLIATAAQAVAAAPgHQAagMAAgeQAAgwg9AAIgUAAg");
	this.shape.setTransform(0,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al6FyIAArjIL1AAIAALjgADHCgIBNAAIhwioIBkiXIhMAAIg9BkIg5hkIhKAAIBfCXIhyCoIBLAAIBLh2gAjLAfIBXCBIBQAAIhmiIQAVgDAPgKQAmgXAAgzQAAgugggaQgfgYg0AAIhfAAIAAE/IA/AAIAAiBgAjTgMIAAhgIAUAAQA+AAgBAwQAAAegaAMQgPAGgVAAg");

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al6FyIAArjIL1AAIAALjg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38,-37,76,74);


(lib.nx = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al6FxIAArhIL1AAIAALhg");

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("Ag+CnIjGjeIAADYIhAAAIAAlHIAtAAIDGDeIAAjXIBAAAIAAFGgAD5ChIhHh2IhMB2IhNAAIB0ioIhhiYIBMAAIA6BkIA8hkIBMAAIhkCYIBvCog");
	this.shape.setTransform(1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al6FxIAArhIL1AAIAALhgAg0CnIAtAAIAAlGIhAAAIAADWIjGjdIgtAAIAAFHIBAAAIAAjYgAEDChIBMAAIhvioIBkiYIhMAAIg8BkIg6hkIhMAAIBhCYIh0CoIBNAAIBMh2g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38,-37,76,74);


(lib.logoCar = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhrBRQgrgigBgvQABgvArghQAtgiA+AAQA/AAAsAiQAtAhAAAvQAAAvgtAiQgsAig/AAQg+AAgtgig");
	mask.setTransform(-1.3,19.7);

	// Layer 1
	this.instance = new lib.img1();
	this.instance.setTransform(-150,-130);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(0.1,1,1).p("AAsAAQAAAOgNAKQgNAKgSAAQgRAAgNgKQgNgKAAgOQAAgNANgKQANgKARAAQASAAANAKQANAKAAANg");
	this.shape.setTransform(-13,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C1117").s().p("AgeAYQgNgKAAgOQAAgNANgKQANgKARAAQASAAANAKQANAKAAANQAAAOgNAKQgNAKgSAAQgRAAgNgKg");
	this.shape_1.setTransform(-13,12.5);

	this.instance.mask = this.shape.mask = this.shape_1.mask = mask;

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,8.2,30.4,23.1);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkPDJQhwhOAAh7QAAh5BwhOQBthMCiAAQBGAAA+APQASAGgFAPQgBAFgMARQgWAYhDBcQhBBcgRAbQgPAVgBATQgCAXAcAAIFBAAQAWAAAIgcQAHgaAAgbQAAhNgtg5Qgsg3hNgcIATgcQBdAhA1A+QA4BCAABUQAABFgoA2QgIALgEAEQgIAFgOAAImSAAQhEgDgMgwQgLgqAhgzQAPgZA+hUQA+hVAaghQAFgIgFgEQgEgEgKAAQiNAAhaBAQhfBEAABwQAABmBfBHQBfBICIAAQBJAABBgWQA+gVAugnIA/AAQg2A1hQAdQhTAfhdAAQiiAAhthLg");
	this.shape.setTransform(-116,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEVCKQgkAAghgUQgygfAAg9IAAiRIikBvIDICSIiXAAIiBhfIiPBfIsAAAQgnABgegYQgpghAAhGIAAiWIBgAAIAACfQAAA+A+AAIDaAAQATguAtggIhNAAQAIg1AwgqQA2gwBOAAIF3AAICBBfICMhfICvAAIAACfQAAA+A+AAIC3AAIAAjdIBgAAIAADdIFGAAQAhAAALgEQAQgHAAgRQAAgcgkAAIk5AAQAAhCAlguQAqg1BPAAIEYAAIAAA3IkMAAQgaAAgQASQgPAPgCAYIDjAAQA4AAAfAOQAqATAAAzQAAAxg0AUQgfALgvAAgApIAtQgUAQgCAWIFpAAIByhKIiph8IAAAgIj0AAQgaAAgWASQgUARgCAWIEjAAIAAA1IjVAAQgagBgWATg");
	this.shape_1.setTransform(43.6,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-154.4,-27.6,308.9,55.3);


(lib.img3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img3();
	this.instance.setTransform(-150,-231.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-231.5,300,463);


(lib.img2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img2();
	this.instance.setTransform(-150,-231.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-231.5,300,463);


(lib.img1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img1();
	this.instance.setTransform(-150,-130);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-130,300,260);


(lib.blick_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.blick();
	this.instance.setTransform(-25,-19);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-19,50,38);


(lib.bg1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C1117").s().p("A3bKsIAA1XMAu3AAAIAAVXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-68.5,300,137);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t4_3();
	this.instance.setTransform(0.8,34.9);

	this.instance_1 = new lib.t4_2();
	this.instance_1.setTransform(-12.9,1.2);

	this.instance_2 = new lib.t4_1();
	this.instance_2.setTransform(-3.8,-33.6);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.5,-44.4,119.2,88.9);


(lib.t3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t3_3();
	this.instance.setTransform(10,34.9);

	this.instance_1 = new lib.t3_2();
	this.instance_1.setTransform(8.3,1.2);

	this.instance_2 = new lib.t3_1();
	this.instance_2.setTransform(0,-33.6);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.8,-44.4,157.6,88.9);


(lib.frame5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t5();
	this.instance.setTransform(2.7,105.9);

	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(0,0,0.906,0.958);

	this.instance_2 = new lib.bg1();
	this.instance_2.setTransform(0,0,1,4.38);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.frame4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.instance = new lib.bg1();
	this.instance.setTransform(0,0,1,4.38);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.frame3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t4();
	this.instance.setTransform(-71.5,-153.1);

	this.instance_1 = new lib.img3_1();
	this.instance_1.setTransform(-150,0,1,1,0,0,0,-150,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-231.5,300,463);


(lib.frame2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t3();
	this.instance.setTransform(53.2,-153.1);

	this.instance_1 = new lib.img2_1();
	this.instance_1.setTransform(-150,0,1,1,0,0,0,-150,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-231.5,300,463);


(lib.frame1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t2();
	this.instance.setTransform(-48.3,117.1);

	this.instance_1 = new lib.t1();
	this.instance_1.setTransform(-27.7,-215);

	this.instance_2 = new lib.img1_1();
	this.instance_2.setTransform(0,-47.9);

	this.instance_3 = new lib.bg();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.fari = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At0BhIg6gFIg+gSIhxANQgJhAACggQABgVAKgeIAKgZQAEgGAIgFQAOgKARAEQAQAFAgARIAcAQIBLARIA+ASIAgAKIAqATIApAPIAWAfIARAbIgfAYIhBAHIhfgHgALgBZIgPgpIAQgXIANgVIAfgEIApgNIAtgOIA1gWIAwgVIA5gTIAZgGQAbgFAPAKQAPAJALAeQAFAPADANIgDBYIgtANIgygFIgcgCIgZAJIg1AAIgngBIgSAKIgoAAIg3ABIgCAAIgggBg");
	mask.setTransform(-2.2,-5.3);

	// Layer 1
	this.instance = new lib.img1_1();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.7,-15.7,225.2,21);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(404));

	// nx
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(102,102,102,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0)"],[0,0.141,0.525,1],-38,0,38,0).s().p("Al6FxIAArhIL1AAIAALhg");
	this.shape_1.setTransform(244,525.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(102,102,102,0.051)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.051)"],[0,0.141,0.525,1],-34.3,0,34.3,0).s().p("AlWlwIKsAMIAALJIqsAMg");
	this.shape_2.setTransform(247.7,525.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(102,102,102,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.098)"],[0,0.141,0.525,1],-30.6,0,30.6,0).s().p("AkxlwIJiAaIAAKuIpiAZg");
	this.shape_3.setTransform(251.4,525.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(102,102,102,0.149)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.149)"],[0,0.141,0.525,1],-26.9,0,26.9,0).s().p("AkLlwIIXAmIAAKWIoXAlg");
	this.shape_4.setTransform(255.1,525.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(102,102,102,0.2)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.2)"],[0,0.141,0.525,1],-23.2,0,23.2,0).s().p("AjmlwIHNA0IAAJ8InNAxg");
	this.shape_5.setTransform(258.8,525.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(102,102,102,0.251)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.251)"],[0,0.141,0.525,1],-19.5,0,19.5,0).s().p("AjClwIGEBAIAAJjImEA+g");
	this.shape_6.setTransform(262.5,525.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(102,102,102,0.298)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.298)"],[0,0.141,0.525,1],-15.8,0,15.8,0).s().p("AidlwIE6BOIAAJJIk6BKg");
	this.shape_7.setTransform(266.2,525.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(102,102,102,0.349)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.349)"],[0,0.141,0.525,1],-12.1,0,12.1,0).s().p("Ah4lwIDwBbIAAIvIjwBXg");
	this.shape_8.setTransform(269.9,525.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(102,102,102,0.4)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.4)"],[0,0.141,0.525,1],-8.4,0,8.4,0).s().p("AhSlwIClBnIAAIWIilBkg");
	this.shape_9.setTransform(273.6,525.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(102,102,102,0.447)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.447)"],[0,0.141,0.525,1],-4.7,0,4.7,0).s().p("AgtlwIBbB1IAAH8IhbBwg");
	this.shape_10.setTransform(277.3,525.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(102,102,102,0.498)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.498)"],[0,0.141,0.525,1],-1,0,1,0).s().p("AgJlwIASCBIAAHjIgSB9g");
	this.shape_11.setTransform(281,525.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(102,102,102,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0)"],[0,0.18,0.6,1],-38,0,38,0).s().p("Al6FyIAArjIL1AAIAALjg");
	this.shape_12.setTransform(244,525.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(102,102,102,0.051)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.102)"],[0,0.18,0.6,1],-34.3,0,34.3,0).s().p("AlWlxIKsAOIAALHIqsAOg");
	this.shape_13.setTransform(247.7,525.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(102,102,102,0.102)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.2)"],[0,0.18,0.6,1],-30.6,0,30.6,0).s().p("AkxlxIJiAaIAAKvIpiAag");
	this.shape_14.setTransform(251.4,525.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(102,102,102,0.149)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.302)"],[0,0.18,0.6,1],-26.9,0,26.9,0).s().p("AkLlxIIXAoIAAKTIoXAog");
	this.shape_15.setTransform(255.1,525.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(102,102,102,0.2)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.4)"],[0,0.18,0.6,1],-23.2,0,23.2,0).s().p("AjmlxIHNA0IAAJ7InNA0g");
	this.shape_16.setTransform(258.8,525.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(102,102,102,0.251)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.502)"],[0,0.18,0.6,1],-19.5,0,19.5,0).s().p("AjClxIGEBCIAAJfImEBCg");
	this.shape_17.setTransform(262.5,525.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(102,102,102,0.302)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.6)"],[0,0.18,0.6,1],-15.8,0,15.8,0).s().p("AidlxIE6BOIAAJHIk6BOg");
	this.shape_18.setTransform(266.2,525.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(102,102,102,0.353)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.698)"],[0,0.18,0.6,1],-12.1,0,12.1,0).s().p("Ah4lxIDwBbIAAIsIjwBcg");
	this.shape_19.setTransform(269.9,525.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(102,102,102,0.4)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.8)"],[0,0.18,0.6,1],-8.4,0,8.4,0).s().p("AhSlxIClBpIAAISIilBog");
	this.shape_20.setTransform(273.6,525.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(102,102,102,0.451)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.898)"],[0,0.18,0.6,1],-4.7,0,4.7,0).s().p("AgtlxIBbB1IAAH5IhbB1g");
	this.shape_21.setTransform(277.3,525.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(102,102,102,0.502)","rgba(255,255,255,0)","rgba(255,255,255,0)","#666666"],[0,0.18,0.6,1],-1,0,1,0).s().p("AgJlxIASCDIAAHdIgSCDg");
	this.shape_22.setTransform(281,525.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},53).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},44).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},62).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[]},201).wait(11));

	// nx
	this.instance = new lib.nx();
	this.instance.setTransform(282,525.1,1,1,0,0,0,38,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AlVlwIKrALIAALKIqrAMgAgpCkIAogBIABlAIg6AAIAADTIi2jcIgqAAIAAFGIA8AAIAAjXgACMgHIhmCkIBEAAIBDhzIA/BxIBDAAIhiiiIBZiUIhEAAIg1BhIgzhiIhFgBg");
	this.shape_23.setTransform(247.7,525.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("Ajog1IAADWIg8AAIAAlFIApAAIC2DcIAAjUIA6ABIAAFAIgoAAgACCgGIhXiVIBFABIAyBiIA2hiIBEABIhZCTIBiCjIhDAAIhAhyIhDBzIhEABg");
	this.shape_24.setTransform(248.7,525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AkwlwIJhAZIAAKwIphAYgAgfCiIAigBIAAk6IgygCIAADRIikjaIgmgBIAAFFIA2gBIAAjVgACCgHIhbCiIA8gCIA7hwIA3BvIA6gBIhVieIBNiOIg7gBIguBeIgthfIg8gCg");
	this.shape_25.setTransform(251.4,525.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AjOg0IAADVIg2ABIAAlFIAmABICkDaIAAjRIA0ACIAAE6IgkABgAB3gEIhNiTIA9ACIAtBfIAuheIA7ABIhNCPIBVCdIg6ABIg3hvIg8BxIg8ABg");
	this.shape_26.setTransform(252.4,524.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkMlwIIYAlIABKXIoZAlgAgXCeIAegCIgBkzIgrgCIAADNIiTjYIgigCIAAFEIAxgCIAAjTgAB1gIIhPCeIA1gCIAzhuIAwBrIAygCIhKiXIBBiJIgxgBIgnBaIgnhdIg2gCg");
	this.shape_27.setTransform(255.2,525.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AizgzIAADUIgyABIABlDIAiABICTDYIAAjNIAtACIABE0IggABgABrgEIhDiOIA1ABIAoBeIAnhbIAxABIhBCJIBJCYIgxABIgwhqIgzBtIg1ACg");
	this.shape_28.setTransform(256.2,524.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AjolwIHNAwIAEKAInRAxgAi7CdIAsgDIgBjSICADSIAbgBIgCkvIglgBIABDJIiCjWIgegBgABpgIIhECaIAugCIAqhsIAqBoIApgCIg+iSIA2iFIgpgCIgiBZIghhbIgtgDg");
	this.shape_29.setTransform(259,525.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AjFihIAeACICCDWIgBjJIAmABIABEvIgbABIiAjSIABDSIgsACgABfgDIg6iMIAtACIAhBbIAihYIApACIg2CFIA+CSIgpACIgqhoIgqBsIguACg");
	this.shape_30.setTransform(260,524.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("AikigIAbACIBuDVIAAjGIAfADIAAEnIgVACIhujPIABDQIgmADgABTgCIgwiIIAmADIAbBYIAchVIAhACIgsCAIAwCMIggADIghhkIgkBpIglACg");
	this.shape_31.setTransform(263.4,524.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AjClwIGFBAIgBJjImEA+gAibCeIAmgDIgBjQIBuDPIAVgCIgBknIgegDIAADFIhvjUIgbgCgABbgFIg3CVIAlgBIAjhpIAiBjIAggCIgxiMIAtiAIgigCIgbBUIgchYIglgCg");
	this.shape_32.setTransform(262.6,525.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AiFifIAWACIBbDTIAAjCIAZADIAAEhIgRACIhajLIAADOIgfADgABEgBIgmiFIAeADIAVBWIAWhRIAcADIgkB6IAnCHIgbADIgZhhIgdBmIgeACg");
	this.shape_33.setTransform(267.2,524.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AidlwIE7BOIAAJKIk7BJgAh8CdIAfgDIAAjOIBaDLIARgCIAAkhIgZgDIAADCIhbjTIgWgCgABNgEIgtCRIAegCIAchmIAaBhIAbgDIgoiHIAkh6IgbgDIgWBRIgVhWIgegDg");
	this.shape_34.setTransform(266.3,525.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1B").s().p("AhlifIASAEIBGDQIAAi+IASADIABEbIgMACIhGjIIAADNIgZADgAA1gBIgdiBIAXAEIAQBTIAQhOIATADIgZB1IAdCCIgTADIgThdIgVBjIgXADg");
	this.shape_35.setTransform(270.7,524.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ah4lwIDvBZIACIyIjxBWgAheCbIAZgEIAAjMIBFDHIANgCIgBkbIgSgDIAAC+IhGjQIgSgDgAA8gGIghCOIAXgDIAVhiIATBcIATgCIgdiDIAah1IgUgDIgPBOIgRhTIgXgEg");
	this.shape_36.setTransform(270,525.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AhFieIAMADIAyDPIAAi7IANAEIgBETIgHACIgxjCIgBDKIgRAFgAAmgBIgTh+IAQAEIAKBRIALhMIAOAEIgSBxIASB7IgNADIgMhYIgPBfIgPAEg");
	this.shape_37.setTransform(274.2,525.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhTlwICoBnIgDIXIilBjgAhACfIARgFIABjKIAuDCIAKgCIAAkTIgMgDIAAC6IgyjOIgMgEgAArgBIgYCJIAQgEIAPhfIAMBYIANgDIgTh7IAShxIgNgDIgLBLIgKhRIgQgEg");
	this.shape_38.setTransform(273.7,525.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1B").s().p("AgnidIAIAEIAdDMIAAi2IAGAFIAAELIgEADIgci/IAADIIgKAFgAAWAAIgLh6IAJAEIAFBOIAHhHIAHAEIgKBrIALB2IgHADIgHhUIgIBcIgJAEg");
	this.shape_39.setTransform(277.7,524.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgulwIBdB0IAAH9IhdBwgAgjCaIALgEIAAjJIAZC/IAGgDIAAkLIgHgEIAAC1IgcjLIgHgEgAAZgEIgMCGIAIgFIAIhbIAHBUIAHgEIgLh2IAKhqIgHgFIgGBIIgGhOIgJgEg");
	this.shape_40.setTransform(277.4,525.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1B").s().p("AgHiaIABAEIAGDIIAAi0IABAFIgBECIAAAEIgFi1IAADCIgCAFgAACh5IACAEIABBNIAChIIABAEIgBDWIgBAGIgBhQIgCBXIgCAGg");
	this.shape_41.setTransform(281.1,526.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJlwIATCCIgBHiIgSB9gAgGCnIACgFIAAjCIAEC1IABgFIABkBIgCgFIAAC0IgFjIIgBgEgAACCJIACgGIABhXIABBQIACgGIABjWIgCgEIgCBIIAAhNIgCgEg");
	this.shape_42.setTransform(281.1,525.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Al6FyIAArjIL1AAIAALjgADHCgIBNAAIhwioIBkiXIhMAAIg9BkIg5hkIhKAAIBfCXIhyCoIBLAAIBLh2gAjLAfIBXCBIBQAAIhmiIQAVgDAPgKQAmgXAAgzQAAgugggaQgegYg2AAIheAAIAAE/IBAAAIAAiBgAjSgMIAAhgIATAAQA+AAAAAwQAAAegbAMQgPAGgVAAg");
	this.shape_43.setTransform(244,525.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1D1B").s().p("ADHCgIhIh1IhLB1IhLAAIByinIhfiYIBKAAIA5BkIA9hkIBMAAIhkCYIBvCngAh0CgIhXiBIgIAAIAACBIg/AAIAAk/IBeAAQA1AAAfAYQAgAbAAAtQAAAzgmAXQgPALgVADIBmCHgAjTgLIATAAQAVAAAPgHQAagMAAgeQAAgwg9AAIgUAAg");
	this.shape_44.setTransform(244,525.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AlVlxIKrAPIAALHIqrANgAj0CfIA6AAIAAiAIAHAAIBQB/IBIgBIhdiEQATgEAPgKQAigXAAgyQAAgtgdgaQgcgZgwABIhXgCgABYgHIhmCkIBCAAIBEhzIA/ByIBEAAIhiiiIBYiUIhDgBIg2BhIgzhhIhFgBgAi6hrIASAAQA4AAAAAwQAAAdgYANQgNAGgTgBIgSABg");
	this.shape_45.setTransform(247.7,525.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D1D1B").s().p("Aj3ifIBXACQAwAAAcAYQAdAaAAAtQAAAygiAXQgPALgTADIBdCFIhIAAIhPh/IgIAAIAACAIg6ABgAi9hqIAABfIASAAQATAAANgGQAYgNAAgdQAAgwg4AAgABVgHIhWiVIBDABIAzBhIA2hgIBDAAIhYCUIBiCiIhEAAIg/hyIhDBzIhDABg");
	this.shape_46.setTransform(248,525.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AkwlxIJhAaIAAKwIphAZgAjXCeIA1gBIAAh+IAHAAIBJB9IBAgBIhUiDQASgDAMgLQAfgWABgxQgBgsgagaQgZgZgsAAIhPgCgABUgHIhbCiIA7gBIA8hxIA3BvIA8gCIhXidIBOiPIg7gBIgvBfIgthhIg9gBgAiihqIARAAQAyABABAvQAAAdgWALQgNAHgRAAIgQAAg");
	this.shape_47.setTransform(251.4,525.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1D1D1B").s().p("AjdieIBQACQAsAAAZAZQAaAaAAAsQAAAxgfAWQgNALgRADIBUCDIhBABIhIh9IgHAAIAAB/Ig2ABgAingLIAPAAQASAAAMgGQAWgMAAgdQAAgvgzgBIgQAAgABOgHIhOiTIA9ACIAtBgIAwhfIA6ABIhNCPIBWCeIg7ABIg4hvIg7BxIg8ABg");
	this.shape_48.setTransform(251.9,525.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AkLlxIIXAoIAAKTIoXAogAi6CdIAwgBIAAh+IAGAAIBAB8IA6gCIhLiBQAQgDALgKQAcgVAAgxQgBgsgWgZQgXgZgngBIhHgCgABOgHIhPCeIA0gCIA0huIAwBsIAygCIhJiYIBCiKIgygCIgpBcIgnheIg2gCgAh8gMIgOAAIAAhdIAPAAQAtABABAuQgBAdgTALQgMAHgPgBIAAAAg");
	this.shape_49.setTransform(255.1,525.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1D1D1B").s().p("AjBidIBHADQAnABAWAYQAXAaABArQAAAxgcAVQgLALgQADIBKCAIg5ACIhAh8IgGAAIAAB+IgwACgAiRgLIAOAAQAPAAALgGQAUgMAAgcQAAgugugCIgOAAgABHgHIhEiPIA2ABIAnBeIAohbIAzABIhDCKIBKCYIgyACIgwhsIg0BvIg0ACg");
	this.shape_50.setTransform(255.8,525.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AjmlxIHNA1IAAJ6InNA0gAieCdIArgDIAAh8IAFAAIA4B5IAygCIhAh+QANgDAKgKQAYgVAAgwQAAgqgUgaQgTgYgjgCIg/gDgABIgGIhFCaIAtgBIAthtIApBoIApgCIg+iSIA5iFIgrgDIgjBZIghhcIgtgCgAhzgLIAAhdIANAAQAnACABAtQgBAdgQALQgLAGgNAAg");
	this.shape_51.setTransform(258.8,525.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1D1D1B").s().p("AimicIA/ADQAiACAUAYQATAaAAAqQAAAwgXAVQgKAKgNAEIBAB9IgyACIg4h5IgGAAIAAB8IgqADgAh8gLIANAAQANAAAKgGQARgLAAgcQAAgugogCIgNAAgAA/gGIg6iNIAuACIAhBcIAjhZIAqADIg4CFIA+CTIgqACIgphpIgsBtIgsACg");
	this.shape_52.setTransform(259.6,525.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1D1D1B").s().p("AiLibIA2AEQAdACARAYQARAaAAAqQAAAugVAVQgIAKgLADIA2B8IgqACIgwh3IgFAAIABB7IglADgAhngLIALAAQALAAAJgGQAPgLAAgcQgBgtgigBIgLgBgAA3gGIgxiKIAmADIAcBaIAdhWIAiADIguCAIAzCOIgiADIgihlIgkBpIglADg");
	this.shape_53.setTransform(263.4,525.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AjBlxIGDBDIAAJfImDBBgAiDCcIAlgDIAAh7IAFAAIAwB3IApgCIg1h8QALgDAIgKQAVgVgBguQAAgqgRgaQgQgYgdgCIg3gEgABAgGIg6CYIAngDIAkhpIAiBlIAigDIgziOIAuiAIgjgDIgcBWIgchaIgmgDgAhehnIALABQAiABAAAtQAAAcgOALQgJAGgMAAIgKAAg");
	this.shape_54.setTransform(262.5,525.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1D1D1B").s().p("AhwiaIAsAFQAZADANAYQAOAZAAApQAAAugRAUQgGAKgJADIAsB4IgiAEIgoh2IgEAAIAAB6IgeAEgAhSgKIAJAAQAKAAAGgGQAMgLAAgcQAAgsgcgCIgJAAgAAugGIgniHIAeAEIAXBXIAWhTIAbAEIgkB7IAoCIIgbADIgahhIgdBnIgfADg");
	this.shape_55.setTransform(267.1,525.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AiclxIE5BOIAAJHIk5BOgAhoCaIAfgDIAAh6IAEAAIAoB2IAfgFIgqh4QAKgDAGgJQARgVAAguQAAgpgOgZQgOgYgYgCIgtgFgAA3gGIgvCUIAfgDIAdhnIAbBhIAbgDIgoiIIAkh8IgbgDIgXBTIgWhXIgegEgAhJgLIAAhbIAJAAQAcADAAAsQAAAbgMALQgGAGgKAAg");
	this.shape_56.setTransform(266.2,525.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1D1D1B").s().p("AhViYIAjAFQASADALAYQAKAZAAAoQAAAtgNAUQgEAKgIACIAiB2IgaAEIgfhzIgDAAIAAB5IgXADgAg+gLIAIABQAGgBAGgFQAJgLAAgbQABgrgWgDIgIgBgAAkgGIgeiDIAYAEIAQBVIARhQIAUADIgaB3IAdCDIgUAEIgUheIgWBkIgXAEg");
	this.shape_57.setTransform(270.7,525.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ah3lxIDvBaIAAIvIjvBagAhNCZIAXgEIAAh4IADAAIAfBzIAYgFIggh1QAIgDAEgKQANgTAAguQAAgogKgYQgLgYgSgDIgjgGgAAsgGIgjCRIAXgEIAWhlIAUBeIAUgDIgdiDIAah4IgUgDIgRBQIgQhVIgYgDgAg2gLIAAhaIAIABQAWACgBAsQAAAbgJAKQgGAGgGAAg");
	this.shape_58.setTransform(269.9,525.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1D1B").s().p("Ag6iXIAZAHQAMADAIAYQAHAYAAAnQAAAsgIATQgEAKgFADIAXBzIgSAEIgVhwIgCAAIAAB2IgSAFgAgpgKIAEAAQAGAAADgGQAHgKAAgbQAAgqgPgDIgFgBgAAagFIgUiAIAPAEIAMBTIALhNIAOAEIgSByIAUB9IgOADIgNhZIgPBhIgRAFg");
	this.shape_59.setTransform(274.2,525.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhSlxIClBpIAAISIilBogAg0CYIARgFIAAh3IACAAIAVBxIARgFIgWhyQAFgEAEgJQAIgTAAgsQAAgogHgYQgHgXgNgEIgZgHgAAggGIgZCOIARgFIAPhiIANBaIAOgDIgUh+IAShyIgOgDIgLBMIgMhSIgPgFgAgjgLIAAhZIAFACQAPACAAArQAAAagGALQgEAFgGAAg");
	this.shape_60.setTransform(273.6,525.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1D1D1B").s().p("AggiWIAOAIQAHADAFAYQAEAXAAAnQgBAqgDAUQgDAIgDAEIANBvIgKAGIgLhvIgCABIABB1IgLAGgAgWgLIADABQACgBAEgFQADgLgBgZQABgqgJgDIgDAAgAAPgFIgLh9IAIAFIAHBQIAHhJIAGAEIgJBtIAKB3IgGAEIgIhVIgIBeIgJAEg");
	this.shape_61.setTransform(277.7,525.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgulxIBdB1IAAH5IhdB1gAgdCWIALgFIAAh2IABAAIAMBvIAJgGIgMhvQACgEADgIQADgUAAgrQAAgmgDgYQgFgYgGgDIgOgHgAATgFIgOCIIAJgFIAJheIAHBWIAHgFIgLh3IAKhsIgHgFIgHBJIgGhQIgIgEgAgTgMIAAhWIAEABQAIACAAAqQAAAagDAKQgDAGgDAAg");
	this.shape_62.setTransform(277.4,525.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1D1D1B").s().p("AgGiVIADAJQACAFABAXIAAA+IAAA7IgBAMIABBrIAAAGIgEhoIAAByIgCAGgAgEgIIABAAIACgHIAAgjQAAgpgCgDIgBgBgAABh+IABAFIACBNIABhGIABAEIABDZIgCAFIgBhRIgCBaIgCAGg");
	this.shape_63.setTransform(281.1,525.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgJlxIATCEIgBHdIgSCCgAgFCbIACgHIAAhyIADBpIAAgGIAAhrIAAgMIAAg8IAAg9QgBgXgBgFIgDgJgAABCDIACgFIAChbIABBSIACgFIgBjZIgBgEIgBBGIgChNIgCgFgAgDgDIAAhXIABABQABADABApIAAAjIgCAHg");
	this.shape_64.setTransform(281,525.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},53).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},44).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[]},1).to({state:[{t:this.instance}]},62).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[]},1).to({state:[]},201).wait(11));

	// rx
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(102,102,102,0.502)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.502)"],[0,0.471,0.788,1],-3.7,0,3.7,0).s().p("AgkDvIAAndIBJiDIAALjg");
	this.shape_65.setTransform(209.8,525.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(102,102,102,0.447)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.447)"],[0,0.471,0.788,1],-7.3,0,7.4,0).s().p("AhJD+IAAn7ICTh0IAALjg");
	this.shape_66.setTransform(213.5,525.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(102,102,102,0.392)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.392)"],[0,0.471,0.788,1],-11,0,11.1,0).s().p("AhtEMIAAoXIDbhmIAALjg");
	this.shape_67.setTransform(217.2,525.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(102,102,102,0.333)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.333)"],[0,0.471,0.788,1],-14.7,0,14.8,0).s().p("AiSEbIAAo1IElhXIAALjg");
	this.shape_68.setTransform(220.9,525.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(102,102,102,0.278)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.278)"],[0,0.471,0.788,1],-18.4,0,18.5,0).s().p("Ai3EqIAApTIFvhIIAALjg");
	this.shape_69.setTransform(224.6,525.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(102,102,102,0.224)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.224)"],[0,0.471,0.788,1],-22.1,0,22.2,0).s().p("AjcE3IAAptIG5g7IAALjg");
	this.shape_70.setTransform(228.3,525.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(102,102,102,0.169)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.169)"],[0,0.471,0.788,1],-25.8,0,25.9,0).s().p("AkBFGIAAqLIIDgsIAALjg");
	this.shape_71.setTransform(232,525.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(102,102,102,0.11)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.11)"],[0,0.471,0.788,1],-29.5,0,29.6,0).s().p("AkmFUIAAqnIJNgeIAALjg");
	this.shape_72.setTransform(235.7,525.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(102,102,102,0.055)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.055)"],[0,0.471,0.788,1],-33.2,0,33.2,0).s().p("AlLFjIAArFIKXgPIAALjg");
	this.shape_73.setTransform(239.4,525.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(102,102,102,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0)"],[0,0.471,0.788,1],-36.9,0,36.9,0).s().p("AlwFyIAArjILgAAIAALjg");
	this.shape_74.setTransform(243.1,525.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(102,102,102,0.502)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.502)"],[0,0.471,0.788,1],-3.7,0,3.7,0).s().p("AgjDwIAAnfIBHiBIAALhg");
	this.shape_75.setTransform(209.7,525.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(102,102,102,0.447)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.447)"],[0,0.439,0.769,1],-7.4,0,7.4,0).s().p("AhID8IAAn3ICRh1IAALhg");
	this.shape_76.setTransform(213.4,525.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(102,102,102,0.392)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.392)"],[0,0.408,0.745,1],-11.1,0,11.1,0).s().p("AhuEKIAAoTIDdhnIAALhg");
	this.shape_77.setTransform(217.1,525.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(102,102,102,0.333)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.333)"],[0,0.373,0.725,1],-14.8,0,14.8,0).s().p("AiTEWIAAorIEnhbIAALhg");
	this.shape_78.setTransform(220.8,525.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(102,102,102,0.278)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.278)"],[0,0.341,0.706,1],-18.5,0,18.6,0).s().p("Ai4EjIAApFIFxhOIAALhg");
	this.shape_79.setTransform(224.5,525.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(102,102,102,0.224)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.224)"],[0,0.31,0.682,1],-22.2,0,22.3,0).s().p("AjdExIAAphIG7hAIAALhg");
	this.shape_80.setTransform(228.3,525.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(102,102,102,0.169)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.169)"],[0,0.278,0.663,1],-25.9,0,26,0).s().p("AkCE9IAAp5IIFg0IAALhg");
	this.shape_81.setTransform(232,525.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(102,102,102,0.11)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.11)"],[0,0.243,0.643,1],-29.6,0,29.7,0).s().p("AknFLIAAqVIJPgmIAALhg");
	this.shape_82.setTransform(235.7,525.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(102,102,102,0.055)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0.055)"],[0,0.212,0.62,1],-33.3,0,33.4,0).s().p("AlMFXIAAqtIKZgaIAALhg");
	this.shape_83.setTransform(239.4,525.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(102,102,102,0)","rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(102,102,102,0)"],[0,0.18,0.6,1],-37,0,37.1,0).s().p("AlxFlIAArJILjgMIAALhg");
	this.shape_84.setTransform(243.1,525.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_65}]},54).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[]},1).to({state:[{t:this.shape_75}]},45).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[]},1).to({state:[{t:this.shape_65}]},63).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[]},1).to({state:[]},201).wait(11));

	// rx
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1D1D1B").s().p("AAVCSIgHhoIAKBrgAgHB6IADgeIACAigAgKB4IgGhfIAIBhgAgXBuIAAjgIACgCQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAAAAIAABhIACAAQACAAABgHIABgEQgBAYgCALQgBAIgCABIABAJIgBAAIAAA6IgFg+IgBAAIAABZgAAHAqIADguIAEArIgDA1gAAHhGIAEgzIADA4IAFhQIADgDIgLCGgAgGh+IACgBIABAig");
	this.shape_85.setTransform(209.5,525.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgjDwIgCndIBLiEIAALjgAAGAwIAEAyIADAxIAHAFIADADIgKhrIAAgEIgEgsIAAAAIABgIIALiGIgDACIgGAFIgCAUIgEAzIgCATIgEhRIgGAFIgBABIADAhIAFBXIgGBhIgDAfIAFAEIACACIAGhcgAgXAaIAEA/IADAhIAFAEIACACIgJhhIAAgJQABgBACgIQACgNABgWIgBAEQgBAGgDAAIgCAAIAAhgIABAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgCACIgFAEIABDYIAEADIAAABIAAhag");
	this.shape_86.setTransform(209.7,525.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1D1D1B").s().p("AAiCQIgQhrIgQBgIgMgFIAUiHIgRh7IANgFIAMBTIAOhcIASgGIgYCPIAbCegAgbB7IgOhlIgBAAIAABfIgKgDIABjmIAOgEQAJgDAFARQAFAUAAAkQAAAogGARQgDAIgDADIARBtgAgnhRIgDABIAABHIADAAQADAAADgFQAEgKAAgXQAAgigJAAIgBAAg");
	this.shape_87.setTransform(212.8,525.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhJD+IAAn9ICThyIAALjgAAbCQIATAHIgbieIAYiOIgSAFIgOBcIgLhTIgNAFIARB7IgUCIIAOAEIANhggAgwAWIAPBlIAOAEIgShtQADgCADgJQAGgRAAgoQAAgkgFgTQgFgSgJADIgOAEIAADmIAJADIAAhfgAgxgJIAAhHIAEgBQAKgCAAAkQgBAXgEAKQgDAFgDAAg");
	this.shape_88.setTransform(213.4,525.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1D1D1B").s().p("AA1CTIgYhtIgXBkIgUgEIAgiMIgbiAIAUgFIASBWIAUhdIAagFIgiCQIAmCfgAgnCAIgXhoIgBAAIAABkIgPgEIAAjxIAWgEQANgDAJATQAIAUAAAlQAAAqgKASQgEAJgFACIAbBygAg6hVIgFABIAABLIAEAAQAFAAAEgFQAGgKABgYQgBglgNAAIgBAAg");
	this.shape_89.setTransform(216.3,525.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhuEMIAAoZIDdhkIAALjgAAtCTIAaAFIgnifIAiiQIgaAFIgTBdIgShWIgVAEIAbCAIggCMIAWAFIAWhkgAhGAXIAWBpIAVAEIgbhxQAGgCAEgJQAKgSAAgqQAAglgJgVQgIgSgOACIgWAFIAADxIAPADIAAhkgAhIhUIAFgBQAPgCABAnQgBAYgGAKQgEAFgFAAIgFAAg");
	this.shape_90.setTransform(217.2,525.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1D1D1B").s().p("ABHCVIgehvIgfBnIgcgEIAsiQIgliEIAcgDIAYBYIAZheIAjgEIgtCRIAyChgAg0CFIgehtIgCAAIAABpIgVgDIAAj9IAfgEQASgCALATQAMAVAAAnQAAArgOATQgFAJgIADIAlB1gAhOhYIgGAAIAABOIAGAAQAHAAAFgFQAJgKAAgZQAAgmgTAAIgCAAg");
	this.shape_91.setTransform(219.9,525.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AiTEbIAAo2IEnhWIAALjgAA+CVIAiAEIgxigIAtiSIgjAFIgaBdIgXhXIgcADIAlCEIgtCQIAcAEIAfhngAhbAYIAeBsIAdAFIglh2QAHgCAFgJQAOgTABgrQAAgngMgVQgLgTgSACIgfAEIAAD9IAUADIAAhpgAhegKIAAhOIAHgBQAUgCABAoQAAAZgJALQgFAFgIAAg");
	this.shape_92.setTransform(220.9,525.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Ai3ErIAApVIFvhHIAALjgABSCXIAqAEIg9iiIA2iTIgqAEIgfBfIgehbIgjADIAuCIIg3CVIAjADIAnhpgAhvAaIAmBwIAlADIgvh4QAKgDAGgJQARgUABgsQAAgogPgWQgNgVgYACIgoAEIAAEIIAbADIAAhtgAhyhbIAIgBQAbgBAAAqQAAAZgMALQgHAFgIAAIgIAAg");
	this.shape_93.setTransform(224.6,525.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1D1D1B").s().p("ABbCXIgmhvIgmBpIgjgDIA2iVIgtiHIAjgDIAdBaIAghfIAqgEIg3CTIA9CigAhACKIglhwIgEAAIAABtIgbgCIAAkJIAogEQAYgCANAVQAPAWAAAoQAAAtgSATQgGAJgJADIAuB4gAhhhbIgIAAIAABSIAIgBQAJAAAGgFQAMgLAAgZQAAgogZAAIgCAAg");
	this.shape_94.setTransform(223.6,525.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AjcE5IAApwIG5g6IAALjgABmCZIAxADIhHijIA/iUIgwACIgmBhIgihcIgrACIA3CLIhCCZIArACIAthsgAiCAcIAvBzIAsADIg4h8QALgDAIgJQAWgVAAguQgBgpgSgXQgQgVgdACIgyADIABEUIAgABIABhxgAiGgKIAAhUIAKgBQAhgBAAArQAAAbgOALQgIAFgMAAg");
	this.shape_95.setTransform(228.3,525.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1D1D1B").s().p("ABvCZIgthxIguBsIgqgCIBCiZIg3iLIAqgCIAjBcIAmhhIAwgCIg/CUIBHCjgAhKCPIgvhzIgFgBIAABxIghgBIAAkUIAygDQAdgCAQAVQASAXABApQgBAugVAVQgIAJgMADIA5B8gAhzhfIgLABIAABUIAKAAQAMAAAHgFQAPgLAAgbQAAgqgfAAIgCAAg");
	this.shape_96.setTransform(227.5,525.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AkBFGIAAqLIIDgsIAALjgAB7CbIA4ACIhRilIBJiUIg5ACIgqBhIgpheIgxACIBBCOIhOCcIAyACIA1hugAhdCTIA1ACIhEh/QAOgCAKgKQAZgVAAgvQAAgrgVgXQgUgWgiABIg7ACIgBEeIAoACIAAh1IAFAAgAiagLIAAhXIANAAQAngBAAAsQAAAbgRALQgKAGgNAAg");
	this.shape_97.setTransform(232,525.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1D1D1B").s().p("ACDCbIg0hyIg0BuIgygCIBNicIhAiOIAxgCIAoBeIArhhIA4gCIhICVIBRCkgAhVCTIg4h3IgFAAIAAB1IgogBIAAkeIA8gDQAigBAUAWQAVAYAAAqQAAAvgZAVQgKAKgOADIBEB+gAiSgKIAMAAQANgBAKgFQARgMAAgbQAAgsgnACIgNAAg");
	this.shape_98.setTransform(231.2,525.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AkmFVIAAqqIJNgcIAALjgACSCdIA+ABIhaimIBRiWIg+ACIgxBiIgthhIg6ACIBLCSIhZCgIA6ACIA7hygAhkCYIA9ABIhOiCQAQgDALgKQAdgWAAgwQAAgrgZgaQgXgWgnABIhGABIAAEqIAuABIAAh5IAGAAgAisgLIAAhbIAPAAQAuAAAAAtQAAAdgUALQgLAGgQAAg");
	this.shape_99.setTransform(235.7,525.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1D1D1B").s().p("ACXCdIg5h0Ig8ByIg5gBIBZihIhLiSIA6gBIAtBgIAwhiIA+gCIhRCXIBbClgAheCYIhCh7IgGABIAAB4IguAAIgBkrIBHgBQAngBAXAXQAYAZAAArQAAAxgcAVQgMAKgQADIBOCCgAiXhmIgPABIAABaIAOAAQAPAAAMgGQATgLABgdQgBgtgsAAIgBAAg");
	this.shape_100.setTransform(235.2,525.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AlLFjIAArFIKXgPIAALjgACpCeIBFABIhkinIBZiXIhEABIg2BjIgzhiIhAAAIBUCVIhlCkIBCABIBCh0gAi2AeIBLB9IBFABIhZiFQASgCAOgLQAggWAAgyQAAgsgbgaQgbgYgtABIhRAAIAAE1IA2ABIAAh9gAitgMIgQAAIAAhdIARAAQA1gBAAAvQAAAdgXAMQgNAHgRAAIgBgBg");
	this.shape_101.setTransform(239.5,525.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1D1D1B").s().p("ACsCfIhAh1IhCBzIhCgBIBlijIhUiVIBAgBIAzBiIA2hjIBEAAIhZCXIBkCmgAhoCcIhLh+IgHAAIAAB9Ig2gBIAAk0IBRgBQAtgBAbAYQAbAaAAAtQAAAxggAWQgOALgSADIBZCEgAi6gLIAQAAQASAAANgGQAXgMAAgdQAAgvg1AAIgRAAg");
	this.shape_102.setTransform(239.2,525.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AlwFyIAArjILgAAIAALjgADBCgIBLAAIhsioIBhiXIhLAAIg6BkIg4hkIhIAAIBdCXIhvCoIBJAAIBJh2gAjFAfIBVCBIBNAAIhjiIQAUgDAPgKQAlgXAAgzQAAgugfgaQgegYgzAAIhcAAIAAE/IA9AAIAAiBgAjNgMIAAhgIATAAQA9AAgBAwQAAAegaAMQgOAGgVAAg");
	this.shape_103.setTransform(243.1,525.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1D1D1B").s().p("ADBCgIhFh1IhKB1IhIAAIBvinIhdiYIBIAAIA4BkIA6hkIBKAAIhhCYIBsCngAhwCgIhViBIgIAAIAACBIg9AAIAAk/IBbAAQA0AAAeAYQAfAbAAAtQAAAzglAXQgPALgUADIBjCHgAjNgLIASAAQAVAAAOgHQAagMAAgeQAAgwg8AAIgTAAg");
	this.shape_104.setTransform(243.1,525.1);

	this.instance_1 = new lib.rx();
	this.instance_1.setTransform(206,525.1,1,1,0,0,0,-38,-0.1);
	this.instance_1._off = true;

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1D1D1B").s().p("AAVCUIgIhvIgJBiIgGgFIAKiJIgIh5IAGgGIAHBSIAGhdIAKgIIgMCSIAOChgAgKCBIgPikIgBCUIgEgDIABjaIADgCIAPCZIAAihIAFgFIAAD+g");
	this.shape_105.setTransform(209.6,524.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgjDwIABneIBGiCIAALhgAAUCPIAKAGIgOiiIAMiSIgKAIIgGBdIgHhSIgFAHIAIB5IgLCIIAGAGIAJhigAgLB7IAEADIAAj+IgFAFIAACgIgPiYIgDACIgBDaIAFADIAAiVg");
	this.shape_106.setTransform(209.7,525.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1D1D1B").s().p("AArCVIgRhwIgRBkIgNgGIAWiKIgSh/IANgFIANBVIAPheIATgGIgZCTIAcCigAgVCCIggirIAACbIgJgDIAAjlIAGgCIAgCiIAAioIAMgEIAAEHg");
	this.shape_107.setTransform(213.2,525.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AhJD7IAAn3ICTh0IAALhgAApCWIAVAGIgdijIAZiTIgTAGIgPBfIgMhWIgOAGIASB+IgVCLIANAFIAQhjgAgOCGIAAkHIgMAEIAACoIgfiiIgHACIAADlIAJADIAAicIAhCsIAIADg");
	this.shape_108.setTransform(213.4,525.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1D1D1B").s().p("ABCCXIgYhwIgZBmIgVgFIAiiOIgeiDIAWgEIAUBXIAVhgIAcgFIglCUIApCjgAgeCIIgyiyIABCjIgPgDIAAjxIAKgCIAyCqIAAivIARgDIAAEPg");
	this.shape_109.setTransform(216.9,525.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AhuELIAAoVIDdhmIAALhgABBCXIAcAFIgpijIAliUIgcAGIgVBfIgThXIgWAFIAdCCIgiCOIAVAFIAZhmgAggCIIANADIAAkQIgRAEIAACuIgyiqIgKADIABDwIAOAEIgBijg");
	this.shape_110.setTransform(217.1,525.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1D1D1B").s().p("ABbCYIghhxIggBoIgdgEIAtiSIgpiFIAggEIAZBZIAbhgIAlgFIgvCVIA0CkgAglCMIhEi3IAACoIgVgCIAAj7IAOgBIBECvIgBizIAYgDIAAEWg");
	this.shape_111.setTransform(220.6,525.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AiSEWIgBorIEnhbIAALhgABZCZIAkAFIg1ikIAwiVIglAFIgbBgIgZhZIgfAEIAoCFIgtCSIAcAEIAhhogAgXCPIAAkWIgYADIABCzIhEiwIgOACIAAD7IAVACIgBioIBFC2IAQADg");
	this.shape_112.setTransform(220.8,525.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("Ai4EjIAApFIFxhOIAALhgABxCaIAtAEIhBilIA6iVIgsAEIghBhIgfhbIgnADIAyCIIg5CWIAlAEIAohrgAguCQIAWACIAAkeIgfADIAAC4IhWi2IgRACIgBEGIAaACIAAiwg");
	this.shape_113.setTransform(224.5,525.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1D1D1B").s().p("AByCaIgnhyIgoBqIglgEIA5iVIgyiIIAngDIAfBaIAhhhIAsgEIg6CWIBBClgAgtCQIhXi9IAACwIgagDIABkFIARgCIBWC2IAAi4IAfgDIAAEeg");
	this.shape_114.setTransform(224.4,525.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AjdEwIAAphIG7g/IAALhgACLCaIA0AEIhLilIBDiXIgzAEIgnBhIgkhdIgvAEIA8CLIhGCYIAsADIAxhsgAgzCTIAaACIAAklIgkACIgBC+Ihpi+IgWACIgBERIAhACIAAi3g");
	this.shape_115.setTransform(228.3,525.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1D1D1B").s().p("ACLCbIguhzIgxBtIgsgEIBGiYIg8iLIAvgDIAkBcIAnhhIAzgDIhDCWIBLClgAgzCUIhqjEIAAC3IghgCIABkRIAWgBIBpC9IABi+IAkgCIAAElg");
	this.shape_116.setTransform(228.3,525.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AkCE9IAAp5IIFg0IAALhgAClCcIA6ADIhUimIBMiWIg6ADIgtBhIgpheIg2ACIBFCOIhRCcIA1ADIA2hvgAg2CYIAeABIAAkrIgrABIAADDIh9jEIgcACIABEcIAmABIAAi+g");
	this.shape_117.setTransform(231.9,525.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1D1D1B").s().p("ACkCcIg1hzIg3BvIg1gDIBSicIhFiOIA2gCIApBeIAthiIA5gDIhMCXIBVClgAg3CYIh/jJIAAC+IgngCIAAkbIAbgCIB+DEIAAjDIArgCIAAEsg");
	this.shape_118.setTransform(232.1,525.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AknFMIAAqXIJPglIAALhgADBCdIBAACIheimIBViXIhBACIgxBiIgvhgIg9ACIBOCRIhcCfIA8ACIA+hwgAgVCdIAAk0IgxABIgBDKIiSjLIghAAIAAEoIAvABIAAjFICUDPIAiABg");
	this.shape_119.setTransform(235.7,525.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1D1D1B").s().p("AC9CdIg6h0Ig+BxIg9gCIBcifIhNiRIA9gCIAvBgIAxhiIBBgCIhVCXIBeCmgAg7CbIiUjOIAADFIgugBIAAkoIAhgBICSDMIABjKIAxgBIAAE0g");
	this.shape_120.setTransform(236,525.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AlMFYIAAquIKZgaIAALhgAgSCgIAAk5Ig3ABIAADNIipjRIglABIAAEyIA1AAIAAjLICpDUIAnAAgADdCfIBGABIhninIBciXIhGABIg2BjIg1hhIhEABIBYCTIhoCiIBEABIBFhyg");
	this.shape_121.setTransform(239.4,525.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1D1D1B").s().p("Ag+CfIipjTIAADLIg1gBIAAkxIAlgCICoDSIAAjOIA4gBIAAE6gADXCeIhBh0IhEByIhEgBIBnijIhXiTIBEgBIA0BiIA3hjIBGgCIhcCYIBmCmg");
	this.shape_122.setTransform(239.9,525.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AlwFlIAArJILhgMIAALhgAg5CjIArAAIAAk/Ig+AAIAADSIi+jXIgpAAIAAE8IA8AAIAAjQgAD4CgIBMAAIhvinIBliYIhNABIg7BjIg6hjIhLABIBgCWIhxClIBLAAIBLhzg");
	this.shape_123.setTransform(243,525.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#1D1D1B").s().p("AhBCiIi+jYIAADRIg8AAIAAk8IAqgBIC9DYIAAjTIA+AAIAAFAgADwCfIhGh1IhLB0IhLgBIBxilIhgiVIBMgBIA5BjIA7hkIBNAAIhlCXIBvCog");
	this.shape_124.setTransform(243.8,525.2);

	this.instance_2 = new lib.nx();
	this.instance_2.setTransform(206,525.2,1,1,0,0,0,-38,0);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgjDwIgCndIBLiEIAALjgAAXCbIgKhrIAAgEIgEgsIAAAAIABgIIALiGIgDACIgGAFIgCAUIgEAzIgCATIgEhRIgGAFIgBABIADAhIAFBXIgGBhIgDAfIAFAEIACACIAGhcIABAGIAEAyIADAxIAHAFIADADgAgXAaIAEA/IADAhIAFAEIACACIgJhhIAAgJQABgBACgIQACgNABgWIgBAEQgBAGgDAAIgCAAIAAhgIABAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgCACIgFAEIABDYIAEADIAAABIAAhag");
	this.shape_125.setTransform(209.7,525.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_86},{t:this.shape_85}]},54).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},44).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},62).to({state:[{t:this.shape_125},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_1}]},11).to({state:[]},1).to({state:[]},129).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({_off:true},44).wait(84).to({_off:false},0).wait(60).to({alpha:0},11).to({_off:true},1).wait(140));

	// nx
	this.instance_3 = new lib.nx();
	this.instance_3.setTransform(244,525.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},10).to({_off:true},39).wait(351));

	// frame5
	this.instance_4 = new lib.frame5();
	this.instance_4.setTransform(300,300,1,1,0,0,0,150,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(382).to({_off:false},0).to({scaleX:0.01},10).to({_off:true},1).wait(11));

	// Layer 29
	this.instance_5 = new lib.t5();
	this.instance_5.setTransform(152.7,405.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(332).to({_off:false},0).to({alpha:1},10).to({_off:true},40).wait(22));

	// logo
	this.instance_6 = new lib.logo();
	this.instance_6.setTransform(84.9,556.7,0.427,0.452);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({alpha:1},10).wait(308).to({scaleX:0.91,scaleY:0.96,x:150,y:300},10).to({_off:true},50).wait(22));

	// frame4
	this.instance_7 = new lib.frame4();
	this.instance_7.setTransform(150,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(274).to({_off:false},0).to({alpha:1},10).wait(28).to({regX:150,x:300},0).to({scaleX:0.01},10).to({_off:true},1).wait(81));

	// Layer 6
	this.instance_8 = new lib.blick_1();
	this.instance_8.setTransform(224.8,305.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({rotation:900,guide:{path:[224.8,305.3,223.3,302.6,214.6,291.5]},alpha:1},5).to({rotation:1440,guide:{path:[214.6,291.5,212.4,288.6,209.7,285.1,203.2,277.1,196.8,269,201.6,260.4,206.4,251.7]}},15).to({scaleX:0.3,scaleY:0.3,rotation:1800,alpha:0},5).to({_off:true},1).wait(314));

	// Layer 10
	this.instance_9 = new lib.blick_1();
	this.instance_9.setTransform(71.8,308.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(64).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:930,guide:{path:[71.7,308,74.7,302.7,78.6,296.5,79.6,294.8,80.6,293.3]},alpha:1},5).to({scaleX:1,scaleY:1,rotation:1560,guide:{path:[80.6,293.3,86.9,283.7,90.5,280.2,94.7,276.2,98,272.3,99.2,270.8,100.5,269.2,95.3,260.7,90.2,252.2]}},15).to({scaleX:0.3,scaleY:0.3,rotation:1920.1,alpha:0},5).to({_off:true},1).wait(314));

	// frame3
	this.instance_10 = new lib.frame3();
	this.instance_10.setTransform(300,231.5,1,1,0,0,0,150,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(263).to({_off:false},0).to({scaleX:0.01},11).to({_off:true},1).wait(129));

	// bg
	this.instance_11 = new lib.bg1();
	this.instance_11.setTransform(150,531.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(263).to({scaleY:4.38,y:300},0).wait(119).to({scaleY:1,y:531.5},0).wait(22));

	// t4_3
	this.instance_12 = new lib.t4_3();
	this.instance_12.setTransform(-59.6,113.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(221).to({_off:false},0).wait(1).to({x:-53.3},0).wait(1).to({x:-34.2},0).wait(1).to({x:-4.9},0).wait(1).to({x:27.8},0).wait(1).to({x:55.7},0).wait(1).to({x:73.4},0).wait(1).to({x:79.3},0).to({_off:true},35).wait(141));

	// t4_2
	this.instance_13 = new lib.t4_2();
	this.instance_13.setTransform(-73.3,79.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(217).to({_off:false},0).wait(1).to({x:-67},0).wait(1).to({x:-47.9},0).wait(1).to({x:-18.6},0).wait(1).to({x:14.1},0).wait(1).to({x:42},0).wait(1).to({x:59.7},0).wait(1).to({x:65.6},0).to({_off:true},39).wait(141));

	// t4_1
	this.instance_14 = new lib.t4_1();
	this.instance_14.setTransform(-64.2,44.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(214).to({_off:false},0).wait(1).to({x:-57.9},0).wait(1).to({x:-38.8},0).wait(1).to({x:-9.5},0).wait(1).to({x:23.2},0).wait(1).to({x:51.1},0).wait(1).to({x:68.8},0).wait(1).to({x:74.7},0).to({_off:true},42).wait(141));

	// img3
	this.instance_15 = new lib.img3_1();
	this.instance_15.setTransform(0,231.5,0.101,1,0,0,0,-150,0);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(194).to({_off:false},0).to({scaleX:0.99},9).wait(1).to({scaleX:1},0).to({_off:true},59).wait(141));

	// frame2
	this.instance_16 = new lib.frame2();
	this.instance_16.setTransform(300,231.5,1,1,0,0,0,150,0);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(193).to({_off:false},0).to({scaleX:0.01},10).to({_off:true},1).wait(200));

	// t3_3
	this.instance_17 = new lib.t3_3();
	this.instance_17.setTransform(388.8,113.3);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(147).to({_off:false},0).wait(1).to({x:382.9},0).wait(1).to({x:364.9},0).wait(1).to({x:336},0).wait(1).to({x:300.6},0).wait(1).to({x:265.3},0).wait(1).to({x:236.8},0).wait(1).to({x:219},0).wait(1).to({x:213.2},0).to({_off:true},38).wait(211));

	// t3_2
	this.instance_18 = new lib.t3_2();
	this.instance_18.setTransform(387.1,79.6);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(143).to({_off:false},0).wait(1).to({x:381.1},0).wait(1).to({x:363.1},0).wait(1).to({x:334.3},0).wait(1).to({x:298.9},0).wait(1).to({x:263.6},0).wait(1).to({x:235},0).wait(1).to({x:217.3},0).wait(1).to({x:211.5},0).to({_off:true},42).wait(211));

	// t3_1
	this.instance_19 = new lib.t3_1();
	this.instance_19.setTransform(378.8,44.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(139).to({_off:false},0).wait(1).to({x:372.9},0).wait(1).to({x:354.9},0).wait(1).to({x:326},0).wait(1).to({x:290.6},0).wait(1).to({x:255.3},0).wait(1).to({x:226.8},0).wait(1).to({x:209},0).wait(1).to({x:203.2},0).to({_off:true},46).wait(211));

	// img2
	this.instance_20 = new lib.img2_1();
	this.instance_20.setTransform(0,231.5,0.107,1,0,0,0,-150.1,0);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(121).to({_off:false},0).to({scaleX:0.97},8).to({regX:-150,scaleX:1},1).to({_off:true},63).wait(211));

	// frame1
	this.instance_21 = new lib.frame1();
	this.instance_21.setTransform(300,300,1,1,0,0,0,150,0);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(120).to({_off:false},0).to({scaleX:0.03},9).to({_off:true},1).wait(274));

	// t2
	this.instance_22 = new lib.t2();
	this.instance_22.setTransform(101.7,417.1);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(79).to({_off:false},0).to({alpha:1},10).to({_off:true},31).wait(284));

	// t1
	this.instance_23 = new lib.t1();
	this.instance_23.setTransform(122.3,85);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(39).to({_off:false},0).to({alpha:1},10).to({_off:true},71).wait(284));

	// img1
	this.instance_24 = new lib.logoCar();
	this.instance_24.setTransform(150,252.1);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(29).to({_off:false},0).to({alpha:1},10).to({_off:true},81).wait(284));

	// fari
	this.instance_25 = new lib.fari();
	this.instance_25.setTransform(150,252.1);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({alpha:1},5).to({_off:true},115).wait(284));

	// Layer 4
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AiPBYQg9gkABg0QgBgzA9gkQA7glBUAAQBUAAA9AlQA7AkAAAzQAAA0g7AkQg9AlhUAAQhUAAg7glg");
	this.shape_126.setTransform(148.7,271.8);
	this.shape_126._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_126).wait(19).to({_off:false},0).to({_off:true},101).wait(284));

	// img1
	this.instance_26 = new lib.img1_1();
	this.instance_26.setTransform(150,252.1);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(19).to({_off:false},0).to({alpha:1},10).to({_off:true},91).wait(284));

	// bg
	this.instance_27 = new lib.bg();
	this.instance_27.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(404));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;