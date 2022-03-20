(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/cups.png", id:"cups"},
		{src:"images/elka.png", id:"elka"},
		{src:"images/par.png", id:"par"},
		{src:"images/snegoviki1.png", id:"snegoviki1"},
		{src:"images/snowBg1.png", id:"snowBg1"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t3_1.png", id:"t3_1"},
		{src:"images/t3_2.png", id:"t3_2"}
	]
};



// symbols:



(lib.cups = function() {
	this.initialize(img.cups);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,175);


(lib.elka = function() {
	this.initialize(img.elka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,158);


(lib.par = function() {
	this.initialize(img.par);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,152);


(lib.snegoviki1 = function() {
	this.initialize(img.snegoviki1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,120);


(lib.snowBg1 = function() {
	this.initialize(img.snowBg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,70);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,146);


(lib.t3_1 = function() {
	this.initialize(img.t3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,34);


(lib.t3_2 = function() {
	this.initialize(img.t3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,27);


(lib.t4_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBOIAAhrIAVAAIAABrgAgLg5IAAgUIAWAAIAAAUg");
	this.shape.setTransform(33.2,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIA0AAQAPAAAJAIQAJAIAAAOQAAARgPAHQARAGAAASQAAAPgJAIQgKAIgPAAgAgVAmIAaAAQAIAAAFgEQAEgFAAgHQAAgPgRAAIgaAAgAgVgIIAYAAQARAAAAgPQAAgNgRAAIgYAAg");
	this.shape_1.setTransform(24.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAqQgNgPAAgbQAAgaANgPQAOgOAVAAQAMgBAIAEQAIADAJAJIgPAOQgLgKgLAAQgXAAgCAcIAmAAIAAAOIgmAAQACAfAXAAQALAAALgLIAPAPQgJAJgIADQgIAEgMgBQgVAAgOgOg");
	this.shape_2.setTransform(13.2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA3IAAhKIgtBKIgXAAIAAhtIAXAAIAABKIAthKIAXAAIAABtg");
	this.shape_3.setTransform(1.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBOIg+hQIAABQIgXAAIAAibIAXAAIAABLIA6hLIAcAAIg6BKIBABRg");
	this.shape_4.setTransform(-10.9,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBNIAAgUIAGAAQAHAAADgCQAEgDACgGIAGgSIgnhoIAYAAIAZBNIAahNIAYAAIgyCEQgGAVgXAAg");
	this.shape_5.setTransform(-29.4,2.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.4,-10.1,68.8,20.2);


(lib.t4_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYA3IgYgmIgWAmIgbAAIAng3Igmg2IAcAAIAUAkIAWgkIAaAAIgkA2IAmA3g");
	this.shape.setTransform(109.3,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAvQgKgJAAgQQAAgOALgIQAKgIASABIAcAAIAAgJQAAgUgXgBQgJABgGADQgFABgEAHIgPgPQAKgKAEgBQAJgFAQAAQAtAAAAAnIAABIIgWAAIAAgKQgHAHgGADQgGABgJAAQgSABgLgKgAgWAWQAAAQAWAAQALAAAGgGQAGgEAAgNIAAgJIgZAAQgUAAAAAQg");
	this.shape_1.setTransform(97.5,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA6BGIAAgdIiIAAIAAhuIAXAAIAABaIAmAAIAAhaIAUAAIAABaIAmAAIAAhaIAWAAIAABaIAQAAIAAAxg");
	this.shape_2.setTransform(83.5,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAsQgOgOAAgeQAAgdAOgNQAMgOATAAQAUAAANAOQANAOAAAcQAAAegNAOQgNANgUgBQgTABgMgNgAgPgcQgIAJABATQAAAWAHAHQAGAIAJAAQAKAAAHgIQAGgIAAgVQABgVgIgIQgGgGgKAAQgJgBgGAIg");
	this.shape_3.setTransform(67.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcA3IAAhZIgfAAIAAAgQAAAfgKAOQgHAMgTAAIgKAAIAAgTIAEAAQAJAAAEgHQAIgKAAgbIAAguIBKAAIAABtg");
	this.shape_4.setTransform(55.2,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA3IAAhZIgrAAIAABZIgWAAIAAhtIBXAAIAABtg");
	this.shape_5.setTransform(43.5,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXBOIAAhNIgtBNIgXAAIAAhuIAXAAIAABKIAthKIAXAAIAABugAgghNIASAAQABAPANAAQAOAAACgPIASAAQgCAeggAAQgfAAgBgeg");
	this.shape_6.setTransform(25.6,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBOIAAhrIAVAAIAABrgAgLg5IAAgUIAXAAIAAAUg");
	this.shape_7.setTransform(16.3,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA3Igrg3IAAA3IgXAAIAAhtIAXAAIAAA1IAog1IAbAAIgsA0IAvA5g");
	this.shape_8.setTransform(8.6,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqA3IAAhtIAWAAIAAAqIAbAAQARAAAJAKQAKAHAAAQQAAAPgKAKQgJAJgRAAgAgUAlIAYAAQARAAAAgQQAAgRgRAAIgYAAg");
	this.shape_9.setTransform(-3.2,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdApQgNgPAAgaQAAgaANgPQAOgPAVAAQANAAAHAEQAJAFAIAHIgPAPQgMgLgKABQgZAAAAAjQAAAkAZABQAHAAAFgEQAEgBAGgGIAPAOQgIAJgJAEQgIADgMAAQgVAAgOgPg");
	this.shape_10.setTransform(-14.5,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIA0AAQAPAAAJAIQAJAIAAAOQAAARgPAHQARAFAAATQAAAPgJAIQgJAIgQAAgAgVAmIAaAAQARAAAAgQQAAgPgRAAIgaAAgAgVgIIAZAAQAQAAAAgPQAAgNgQAAIgZAAg");
	this.shape_11.setTransform(-25.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKBOIAAhrIAVAAIAABrgAgLg5IAAgUIAWAAIAAAUg");
	this.shape_12.setTransform(-34.9,-1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbA3IAAhZIgeAAIAAAgQAAAfgJAOQgJAMgRAAIgLAAIAAgTIADAAQAKAAAFgHQAGgKAAgbIAAguIBLAAIAABtg");
	this.shape_13.setTransform(-44.7,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYBOIAAhNIguBNIgXAAIAAhuIAXAAIAABKIAuhKIAWAAIAABugAghhNIASAAQACAPANAAQAPAAAAgPIATAAQgCAeggAAQgeAAgDgeg");
	this.shape_14.setTransform(-56.5,-1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAvQgKgJAAgQQAAgOALgIQAKgIASABIAcAAIAAgJQAAgUgXgBQgJABgGADQgFABgEAHIgPgPQAKgKAEgBQAJgFAQAAQAtAAAAAnIAABIIgWAAIAAgKQgHAHgGADQgGABgJAAQgSABgLgKgAgWAWQAAAQAWAAQALAAAGgGQAGgEAAgNIAAgJIgZAAQgUAAAAAQg");
	this.shape_15.setTransform(-69.1,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXA3IgXgmIgWAmIgbAAIAmg3Igkg2IAbAAIAUAkIAVgkIAbAAIglA2IAnA3g");
	this.shape_16.setTransform(-80.1,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYA3IAAhKIguBKIgXAAIAAhtIAXAAIAABKIAuhKIAWAAIAABtg");
	this.shape_17.setTransform(-92,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAtBOIAAhnIgkBLIgQAAIglhLIAABnIgYAAIAAibIAYAAIAsBgIAthgIAXAAIAACbg");
	this.shape_18.setTransform(-107.4,-1.4);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.3,-9.3,228.6,18.6);


(lib.t4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAXQAAgQAKgHQALgIARAAIAcAAIAAgIQAAgVgXAAQgJAAgGADQgEADgFAFIgOgNQAIgKAGgCQAIgEARAAQAtgBAAAmIAABKIgWAAIAAgLQgHAHgHACQgGADgIAAQgngBAAghgAgWAWQAAAQAWAAQALAAAGgFQAFgGAAgMIAAgJIgYAAQgUAAAAAQg");
	this.shape.setTransform(80.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJA4IAAhbIgkAAIAAgUIBbAAIAAAUIgiAAIAABbg");
	this.shape_1.setTransform(70,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBOIAAhNIguBNIgXAAIAAhuIAXAAIAABKIAuhKIAWAAIAABugAgghNIASAAQABAPANAAQAOAAACgPIASAAQgCAdggABQgfgBgBgdg");
	this.shape_2.setTransform(53.4,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBOIAAhrIAVAAIAABrgAgKg5IAAgUIAWAAIAAAUg");
	this.shape_3.setTransform(44.1,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA4Igrg5IAAA5IgWAAIAAhvIAWAAIAAA2IApg2IAbAAIgsA1IAvA6g");
	this.shape_4.setTransform(36.5,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA4IAAhvIAXAAIAAArIAcAAQAPgBALALQAKAHgBAQQABAPgKAJQgLALgPAAgAgUAlIAYAAQASAAAAgQQAAgRgSAAIgYAAg");
	this.shape_5.setTransform(24.7,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdApQgNgPAAgaQAAgZAOgPQANgPAVAAQANAAAHADQAJAFAIAHIgPAPQgLgLgLAAQgZABAAAjQAAAkAZAAQAHAAAFgDQAEgBAGgGIAPAPQgIAHgJAFQgIAEgMAAQgVAAgOgQg");
	this.shape_6.setTransform(13.3,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrA4IAAhvIAzAAQAQAAAJAJQAJAIAAANQAAASgQAGQASAGAAATQAAAOgJAJQgJAJgQAAgAgVAmIAaAAQAIAAAEgFQAFgEAAgHQAAgPgRAAIgaAAgAgVgJIAYAAQARAAAAgOQAAgOgRAAIgYAAg");
	this.shape_7.setTransform(2.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBOIAAhuIAVAAIAABugAANg1IAAgYIAUAAIAAAYgAggg1IAAgYIAUAAIAAAYg");
	this.shape_8.setTransform(-7.1,-2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBOIAAhrIATAAIAABrgAgKg5IAAgUIAVAAIAAAUg");
	this.shape_9.setTransform(-12.9,-2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBlIAAgsQgagCgOgOQgPgPAAgaQAAg0A3gEIAAgsIAVAAIAAAsQA3ADAAA1QAAAagPAPQgOAOgaACIAAAsgAALAkQAhAAAAgkQAAgjghgBgAgrAAQAAAjAhABIAAhIQghABAAAjg");
	this.shape_10.setTransform(-23.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggArQgNgOAAgdQAAgcANgPQANgNATABQAUgBANANQANAPAAAcQAAAegNANQgNAOgUAAQgTAAgNgOgAgQgcQgGAIAAAUQAAAWAGAIQAHAGAJAAQAKABAHgIQAGgJABgUQAAgVgIgIQgGgHgKAAQgJAAgHAIg");
	this.shape_11.setTransform(-37.2,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnA+QgLgKgDgQQgCgJAAgbQAAgaACgKQADgPALgLQAQgQAXAAQAWAAAOAMQAQANAEAXIgZAAQgGgbgZAAQgNAAgIAKQgGAGgCAKQgCAJAAAWQAAAXACAKQACAJAGAHQAJAIAMABQAZgBAHgaIAYAAQgEAXgQANQgOAMgWAAQgXAAgQgRg");
	this.shape_12.setTransform(-49.9,-2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsAXQAAgQAKgHQALgIARAAIAcAAIAAgIQAAgVgXAAQgJAAgGADQgEADgFAFIgOgNQAIgKAGgCQAIgEARAAQAtgBAAAmIAABKIgWAAIAAgLQgHAHgHACQgGADgIAAQgngBAAghgAgWAWQAAAQAWAAQALAAAGgFQAFgGAAgMIAAgJIgYAAQgUAAAAAQg");
	this.shape_13.setTransform(-68.4,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVA4IAAgxIgqAAIAAAxIgWAAIAAhvIAWAAIAAAtIAqAAIAAgtIAXAAIAABvg");
	this.shape_14.setTransform(-80.1,0.1);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.6,-10.1,169.2,20.3);


(lib.t3_2_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.t3_2();
	this.instance.setTransform(-123.7,-11.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123.7,-11.7,246,27);


(lib.t3_1_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.t3_1();
	this.instance.setTransform(-123,-16.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123,-16.2,246,34);


(lib.t2_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAvQgKgIAAgRQAAgPALgHQAKgHASAAIAcAAIAAgJQAAgUgYAAQgJAAgFACQgFACgFAHIgOgPQAIgJAGgCQAJgFAQABQAtAAAAAmIAABIIgWAAIAAgKQgHAHgGADQgGABgJAAQgSABgLgKgAgWAWQAAAQAWAAQALAAAGgFQAGgGAAgMIAAgJIgZAAQgUAAAAAQg");
	this.shape.setTransform(70.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIAzAAQAQAAAJAIQAJAIAAAOQAAARgQAHQASAFAAATQAAAPgJAIQgJAIgQAAgAgUAmIAZAAQAIAAAFgEQAEgFAAgHQAAgPgRAAIgZAAgAgUgIIAXAAQARAAAAgPQAAgNgRAAIgXAAg");
	this.shape_1.setTransform(59,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAvQgKgIAAgRQAAgPALgHQAKgHASAAIAcAAIAAgJQAAgUgYAAQgJAAgFACQgFACgFAHIgOgPQAIgJAGgCQAJgFAQABQAtAAAAAmIAABIIgWAAIAAgKQgHAHgGADQgGABgJAAQgSABgLgKgAgWAWQAAAQAWAAQALAAAGgFQAGgGAAgMIAAgJIgZAAQgUAAAAAQg");
	this.shape_2.setTransform(46.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUA3Igrg3IAAA3IgXAAIAAhtIAXAAIAAA1IAog1IAbAAIgsA0IAvA5g");
	this.shape_3.setTransform(36.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAvQgKgIAAgRQAAgPALgHQAKgHASAAIAcAAIAAgJQAAgUgXAAQgJAAgGACQgFACgEAHIgPgPQAIgJAGgCQAJgFAQABQAtAAAAAmIAABIIgWAAIAAgKQgHAHgGADQgGABgJAAQgSABgLgKgAgWAWQAAAQAWAAQALAAAGgFQAGgGAAgMIAAgJIgZAAQgUAAAAAQg");
	this.shape_4.setTransform(18.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgrAAIAAAvIgWAAIAAhtIAWAAIAAAsIArAAIAAgsIAWAAIAABtg");
	this.shape_5.setTransform(6.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA3IAAgpQgSAEgLAAQgPAAgJgIQgIgIgBgNIAAgrIAXAAIAAAlQAAARARAAQAGAAAQgDIAAgzIAXAAIAABtg");
	this.shape_6.setTransform(-5.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAvQgKgIAAgRQAAgPALgHQAKgHASAAIAbAAIAAgJQAAgUgXAAQgJAAgGACQgEADgFAGIgOgPQAIgJAGgCQAJgFAQABQAtAAAAAmIAABIIgWAAIAAgKQgHAHgHADQgGABgIAAQgTABgKgKgAgWAWQAAAQAWAAQALAAAGgFQAFgGAAgMIAAgJIgYAAQgUAAAAAQg");
	this.shape_7.setTransform(-17.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgA3IAAhFIgZAxIgMAAIgagxIAABFIgXAAIAAhtIAXAAIAfBAIAhhAIAWAAIAABtg");
	this.shape_8.setTransform(-30.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAqQgNgQAAgaQAAgaAOgPQANgOAVAAQANAAAHADQAJAFAIAHIgPAPQgLgKgLAAQgZgBAAAkQAAAlAZgBQAHAAAFgCQAEgCAGgGIAPAOQgIAJgJAEQgIAEgMgBQgVABgOgPg");
	this.shape_9.setTransform(-43,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAvQgKgIAAgRQAAgPALgHQAKgHASAAIAcAAIAAgJQAAgUgXAAQgJAAgGACQgFACgEAHIgPgPQAIgJAGgCQAJgFAQABQAtAAAAAmIAABIIgWAAIAAgKQgHAHgGADQgGABgJAAQgSABgLgKgAgWAWQAAAQAWAAQALAAAGgFQAGgGAAgMIAAgJIgZAAQgUAAAAAQg");
	this.shape_10.setTransform(-60,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA3IAAhZIgkAAIAAgUIBaAAIAAAUIgiAAIAABZg");
	this.shape_11.setTransform(-70.1,0);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.7,-5.7,149.4,11.4);


(lib.t2_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAwQgLgKABgQQgBgOALgIQAKgIASABIAbAAIAAgJQAAgUgWgBQgKAAgFAEQgFABgEAHIgQgPQALgKAEgBQAJgEAQgBQAtABAAAlIAABJIgXAAIAAgKQgGAHgGADQgHACgIAAQgTAAgJgJgAgWAWQAAAQAWAAQALAAAGgGQAGgEgBgNIAAgJIgYAAQgUAAAAAQg");
	this.shape.setTransform(79.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJA3IAAhZIgkAAIAAgUIBbAAIAAAUIgiAAIAABZg");
	this.shape_1.setTransform(69,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGA3IAAhtIAXAAIAABaIAlAAIAAhaIAVAAIAABaIAlAAIAAhaIAXAAIAABtg");
	this.shape_2.setTransform(55.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggArQgNgNAAgeQAAgdANgNQANgNATgBQAUABANANQANAOAAAcQAAAegNANQgNANgUABQgTgBgNgNgAgQgcQgGAHgBAVQAAAWAIAIQAFAGAKABQALAAAGgIQAHgIgBgVQAAgVgGgIQgHgGgKgBQgJAAgHAIg");
	this.shape_3.setTransform(40.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVA3IAAhZIgqAAIAABZIgWAAIAAhtIBXAAIAABtg");
	this.shape_4.setTransform(28.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAwQgKgKAAgQQAAgOALgIQAKgIASABIAbAAIAAgJQAAgLgFgEQgGgFgMgBQgJAAgGAEQgEACgFAGIgOgPQAIgJAGgCQAJgEAQgBQAtABAAAlIAABJIgWAAIAAgKQgHAHgHADQgGACgIAAQgSAAgLgJgAgWAWQAAAQAWAAQALAAAGgGQAFgEAAgNIAAgJIgYAAQgUAAAAAQg");
	this.shape_5.setTransform(10.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgrAAIAAAvIgWAAIAAhtIAWAAIAAAsIArAAIAAgsIAWAAIAABtg");
	this.shape_6.setTransform(-1.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUA3IAAgpQgRAEgNAAQgOAAgIgIQgJgIAAgNIAAgrIAWAAIAAAlQAAARARAAQAHAAAPgDIAAgzIAWAAIAABtg");
	this.shape_7.setTransform(-13.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBOIAAhrIAUAAIAABrgAgLg5IAAgUIAWAAIAAAUg");
	this.shape_8.setTransform(-22.2,-2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBPIAAicIAWAAIAAANQAHgIAGgCQAGgEAIAAQAgABAFAcQADAKAAATQAAAggMANQgLAKgRAAQgPAAgLgNIAAA5gAgSgvQgEAKABARQAAAUAFAGQAGAJAKAAQAMAAAGgJQAFgGAAgUQAAgUgFgJQgGgJgMAAQgMAAgGALg");
	this.shape_9.setTransform(-30.9,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfArQgOgOAAgdQAAgdAOgNQAMgNATgBQAUABANANQANANAAAdQAAAegNANQgNANgUABQgTgBgMgNgAgPgcQgIAJABATQAAAWAHAIQAGAGAJABQAKAAAHgIQAHgJAAgUQAAgVgIgIQgFgGgLgBQgJAAgGAIg");
	this.shape_10.setTransform(-43.2,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIA0AAQAPAAAJAIQAJAIAAAOQAAARgPAHQARAFAAATQAAAPgJAIQgJAIgQAAgAgVAmIAaAAQAIAAAEgEQAFgFAAgHQAAgPgRAAIgaAAgAgVgIIAYAAQARAAAAgPQAAgNgRAAIgYAAg");
	this.shape_11.setTransform(-54.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggArQgNgOAAgdQAAgdANgNQANgNATgBQAUABANANQANAOAAAcQAAAegNANQgNANgUABQgTgBgNgNgAgQgcQgGAJgBATQAAAWAIAIQAGAGAJABQALAAAGgIQAHgIAAgVQgBgVgGgIQgIgGgJgBQgJAAgHAIg");
	this.shape_12.setTransform(-67,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWA3IAAgvIgrAAIAAAvIgWAAIAAhtIAWAAIAAAsIArAAIAAgsIAWAAIAABtg");
	this.shape_13.setTransform(-79.1,0);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.6,-10.1,167.1,20.3);


(lib.t2_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLgcIAXAAIAAAlIgXAUg");
	this.shape.setTransform(100.5,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAwQgKgKAAgPQAAgQALgHQAKgIASAAIAcAAIAAgIQAAgVgXAAQgJAAgGADQgFACgEAGIgPgNQAKgLAEgBQAJgEAQAAQAtgBAAAmIAABJIgWAAIAAgKQgHAHgGACQgGACgJABQgSgBgLgIgAgWAWQAAAQAWAAQALAAAGgFQAGgFAAgNIAAgJIgZAAQgUAAAAAQg");
	this.shape_1.setTransform(91.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWA3IAAgwIgrAAIAAAwIgWAAIAAhuIAWAAIAAAtIArAAIAAgtIAWAAIAABug");
	this.shape_2.setTransform(79.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggArQgNgOAAgdQAAgdANgOQAOgNASABQAUgBANANQANAOAAAdQAAAegNANQgNAOgUAAQgSAAgOgOgAgQgcQgGAIgBAUQAAAVAIAJQAGAGAJAAQALABAGgIQAHgJAAgUQAAgUgHgIQgHgIgKAAQgJABgHAHg");
	this.shape_3.setTransform(67.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrApIANgPQAMAMASgBQAIAAAGgEQAIgEAAgHQAAgPgTAAIgPAAIAAgQIAPAAQARABABgQQAAgOgVABQgOAAgMAIIgNgOQAQgMAaAAQAQAAALAHQAMAJAAANQAAATgQAGQASAFAAATQAAAPgNAKQgMAIgRABQgcAAgRgQg");
	this.shape_4.setTransform(55.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggArQgNgNAAgeQAAgdANgOQANgNATABQAUgBANANQANAPAAAcQAAAdgNAOQgNAOgUAAQgTAAgNgOgAgQgcQgGAHAAAVQgBAWAIAIQAGAGAJAAQAKABAGgIQAIgJgBgUQABgUgIgIQgGgIgKAAQgJABgHAHg");
	this.shape_5.setTransform(45.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA3IAAhaIgkAAIAAgUIBaAAIAAAUIghAAIAABag");
	this.shape_6.setTransform(34.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggArQgNgNAAgeQAAgdANgOQANgNATABQAVgBAMANQANAOAAAdQAAAegNANQgMAOgVAAQgTAAgNgOgAgQgcQgGAHAAAVQAAAWAHAIQAGAGAJAAQAKABAHgIQAHgJAAgUQAAgUgHgIQgHgIgKAAQgJABgHAHg");
	this.shape_7.setTransform(24.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBkIAAgrQgagCgOgOQgPgPAAgaQAAg0A3gDIAAgtIAVAAIAAAtQA3ADAAA0QAAAagPAPQgOAOgaACIAAArgAALAkQAhgBAAgjQAAgjghgBgAgrAAQAAAkAhAAIAAhIQghABAAAjg");
	this.shape_8.setTransform(10.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLgcIAXAAIAAAlIgXAUg");
	this.shape_9.setTransform(-5.4,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAwQgKgKAAgPQAAgQALgHQAKgIASAAIAcAAIAAgIQAAgVgXAAQgJAAgGADQgFACgEAGIgPgNQAKgLAEgBQAJgEAQAAQAtgBAAAmIAABJIgWAAIAAgKQgHAHgGACQgGACgJABQgSgBgLgIgAgWAWQAAAQAWAAQALAAAGgFQAGgFAAgNIAAgJIgZAAQgUAAAAAQg");
	this.shape_10.setTransform(-14.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUA3Igsg4IAAA4IgWAAIAAhuIAWAAIAAA2IApg2IAbAAIgsA1IAvA5g");
	this.shape_11.setTransform(-24.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAWA3IAAgwIgrAAIAAAwIgWAAIAAhuIAWAAIAAAtIArAAIAAgtIAWAAIAABug");
	this.shape_12.setTransform(-37.7,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiAwQgKgKAAgPQAAgQALgHQAKgIASAAIAcAAIAAgIQAAgVgXAAQgJAAgGADQgFACgEAGIgPgNQAIgKAGgCQAJgEAQAAQAtgBAAAmIAABJIgWAAIAAgKQgHAHgGACQgGACgJABQgSgBgLgIgAgWAWQAAAQAWAAQALAAAGgFQAGgFAAgNIAAgJIgZAAQgUAAAAAQg");
	this.shape_13.setTransform(-50.1,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrApIANgPQAMAMASgBQAIAAAHgEQAHgEAAgHQAAgPgTAAIgPAAIAAgQIAOAAQATABgBgQQAAgOgUABQgNAAgNAIIgNgOQARgMAYAAQASAAAKAHQANAJAAANQAAATgRAGQASAFAAATQAAAPgNAKQgLAIgSABQgcAAgRgQg");
	this.shape_14.setTransform(-61.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrA3IAAhuIAzAAQAQABAJAIQAJAIAAANQAAASgQAGQASAGAAATQAAAPgJAIQgJAJgPgBgAgVAmIAaAAQAIAAAEgEQAFgFAAgHQAAgPgRAAIgaAAgAgVgJIAZAAQAQAAAAgOQAAgOgQAAIgZAAg");
	this.shape_15.setTransform(-72.1,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfArQgOgOAAgdQAAgdAOgOQAMgNATABQAUgBANANQANAPAAAcQAAAegNANQgNAOgUAAQgTAAgMgOgAgPgcQgIAIABAUQAAAVAHAJQAGAGAJAAQAKABAHgIQAGgJAAgUQABgVgIgHQgGgIgKAAQgJABgGAHg");
	this.shape_16.setTransform(-84.2,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcBOIg+hQIAABQIgXAAIAAibIAXAAIAABLIA5hLIAeAAIg7BKIBABRg");
	this.shape_17.setTransform(-95.9,-2.2);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.7,-10.1,203.6,20.2);


(lib.t1_4 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuDCrQgBgBAXk2IJmg5IDYABIMig+ICGBXQALEWgBAAItyCYg");
	mask.setTransform(-3.7,61.6);

	// Слой 1
	this.instance = new lib.t1();
	this.instance.setTransform(-106,-73);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.7,35.7,180,37.4);


(lib.t1_3 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzDeIi+gsIr0ANIhainQgBgBAtifIIaAAIKGgxILogkIFEA4QAHEPgBAAIjGAzItsAAQi9BBgDAAIAAAAg");
	mask.setTransform(-0.1,21.1);

	// Слой 1
	this.instance = new lib.t1();
	this.instance.setTransform(-106,-73);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-1.1,212,44.4);


(lib.t1_2 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtDDLIiihKIAgkMIeeg/QAAAAAMEPImKAUIrkA0Iq5A/IgBgBgAPajKIgBAAIABAAg");
	mask.setTransform(-5.1,-13.5);

	// Слой 1
	this.instance = new lib.t1();
	this.instance.setTransform(-106,-73);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.9,-33.9,199.6,40.8);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsuDoIj3gyIhXmaMAj5gAEIgzDLIg0DJIqQgkQgBAAhKA6Ih1AGIvzAgIgBAAg");
	mask.setTransform(4.4,-53);

	// Слой 1
	this.instance = new lib.t1();
	this.instance.setTransform(-106,-73);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-73,212,43.3);


(lib.starMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkHEIIyqkIISqkHIEHyqIEISqISqEHIyqEIIkISqg");
	this.shape.setTransform(0.1,0,0.08,0.08,0,0,0,0.4,-0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,-11.7,23.4,23.4);


(lib.starLight = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13).s().p("AhHBGQgbgcAAgqQAAgpAbgeQAegbApAAQAqAAAcAbQAdAeAAApQAAAqgdAcQgcAdgqAAQgpAAgegdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.snowBg = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snowBg1();
	this.instance.setTransform(-150,-35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-35,300,70);


(lib.snow3Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAmNAuOQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgEApiAtZQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgEgPCAkYQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgEgSlAjjQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAaLdqQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgEAq5AbAQgGgFAAgJQAAgIAGgGQAGgGAIAAQAJAAAFAGQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgGgGgEAnWAaLQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAHcZcQgGgFAAgJQAAgIAGgGQAFgGAJAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgJAAgFgGgEgpmAZcQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgACpVfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgEglBAVfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAdMVVQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAjAT0QgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgA/IT0QgGgFAAgJQAAgIAGgGQAFgGAJAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgJAAgFgGgAQVQEQgGgFAAgJQAAgIAGgGQAGgGAIAAQAJAAAFAGQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgGgGgEAleAPPQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAU6MHQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAJrLfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAmPLfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgA8HLfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgEgsDALfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgEAjjAIkQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgAuhFZQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAz1FZQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgEAmNAErQgGgGAAgIQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAQgIAAgGgGgEApiAD2QgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAIAJQAJAIAAANQAAAMgJAJQgIAJgNAAQgMAAgJgJgAN4CHQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAgCgyQgGgFAAgJQAAgIAGgGQADgGAJAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgJAAgDgGgEgiGgAyQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgAsYhQQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgA1whQQgGgFAAgJQAAgIAGgGQAFgGAJAA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");
	this.shape.setTransform(0,-335.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAmNAuOQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgEApiAtZQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgEgPCAkYQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgEgSlAjjQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAaLdqQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgEAq5AbAQgGgFAAgJQAAgIAGgGQAGgGAIAAQAJAAAFAGQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgGgGgEAnWAaLQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAHcZcQgGgFAAgJQAAgIAGgGQAFgGAJAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgJAAgFgGgEgpmAZcQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgACpVfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgEglBAVfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAdMVVQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAjAT0QgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgA/IT0QgGgFAAgJQAAgIAGgGQAFgGAJAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgJAAgFgGgAQVQEQgGgFAAgJQAAgIAGgGQAGgGAIAAQAJAAAFAGQAGAGAAAIQAAAJgGAFQgFAGgJAAQgIAAgGgGgEAleAPPQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAU6MHQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAJrLfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAmPLfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgA8HLfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgEgsDALfQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgEAjjAIkQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgAuhFZQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAz1FZQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgEAmNAErQgGgGAAgIQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAQgIAAgGgGgEApiAD2QgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAIAJQAJAIAAANQAAAMgJAJQgIAJgNAAQgMAAgJgJgAN4CHQgJgIAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAgCgyQgGgFAAgJQAAgIAGgGQADgGAJAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgJAAgDgGgEgiGgAyQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgAsYhQQgGgFAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAJgGAFQgGAGgIAAQgIAAgGgGgA1whQQgGgFAAgJQAAgIAGgGQAFgGAJAA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");
	this.shape_1.setTransform(0,257);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283,-632.4,566,1185.9);


(lib.snegoviki = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.snegoviki1();
	this.instance.setTransform(-87.5,-60.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-60.5,211,120);


(lib.par_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.par();
	this.instance.setTransform(-139.5,-76);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139.5,-76,279,152);


(lib.gradient = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.533,1],-23,0,23,0).s().p("AjlbGMAAAg2LIHLAAMAAAA2Lg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-173.4,46,347);


(lib.Path_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BB9C76","#AB743C","#E3BD7F","#EEDCBE","#D3A87B","#F6D392","#BB9C76","#E3BD7F"],[0,0.129,0.251,0.392,0.561,0.698,0.871,1],-565.5,0,565.5,0).s().p("EhYWAAJIAAgRMCwtAAAIAAARg");
	this.shape.setTransform(565.5,0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1131,1.9);


(lib.Path = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BB9C76","#AB743C","#E3BD7F","#EEDCBE","#D3A87B","#F6D392","#BB9C76","#E3BD7F"],[0,0.129,0.251,0.392,0.561,0.698,0.871,1],-566,0,566,0).s().p("EhYbAAIIAAgQMCw0AAAIADAQg");
	this.shape.setTransform(566,0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1132,1.8);


(lib.elka_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.elka();
	this.instance.setTransform(-68.5,-79);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.5,-79,137,158);


(lib.cups_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cups();
	this.instance.setTransform(-83.5,-87.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.5,-87.5,167,175);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#013B18").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// starMc
	this.instance = new lib.starLight();
	this.instance.setTransform(-166.9,-171.8,0.15,0.15);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,alpha:0},10).wait(2));

	// starMc
	this.instance_1 = new lib.starMc();
	this.instance_1.setTransform(-166.9,-171.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101));

	// starMc
	this.instance_2 = new lib.starLight();
	this.instance_2.setTransform(0.5,75,0.15,0.15);
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,alpha:0},10).wait(22));

	// starMc
	this.instance_3 = new lib.starMc();
	this.instance_3.setTransform(0.5,75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(101));

	// starMc
	this.instance_4 = new lib.starLight();
	this.instance_4.setTransform(-167,125,0.1,0.1);
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,alpha:0},10).wait(62));

	// starMc
	this.instance_5 = new lib.starMc();
	this.instance_5.setTransform(-167,125,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(101));

	// starMc
	this.instance_6 = new lib.starLight();
	this.instance_6.setTransform(-156.6,-26.3,0.1,0.1);
	this.instance_6.compositeOperation = "lighter";
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,alpha:0},10).wait(42));

	// starMc
	this.instance_7 = new lib.starMc();
	this.instance_7.setTransform(-156.6,-26.3,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(101));

	// starMc
	this.instance_8 = new lib.starLight();
	this.instance_8.setTransform(-17.6,-266.1,0.3,0.3);
	this.instance_8.compositeOperation = "lighter";
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({scaleX:1.67,scaleY:1.67,alpha:0},10).wait(82));

	// starMc
	this.instance_9 = new lib.starMc();
	this.instance_9.setTransform(-17.6,-266);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.7,-277.7,179.1,407.4);


(lib.snow3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow3Mc();
	this.instance.setTransform(0,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:563.5},309).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-662,566,1185.9);


(lib.snow = function() {
	this.initialize();

	// snow3Mc
	this.instance = new lib.snow3();
	this.instance.setTransform(-182.7,-379.3,0.9,0.9);
	this.instance.alpha = 0.621;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-437.4,-975.2,509.4,1076.5);


(lib.brandLine = function() {
	this.initialize();

	// vector
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABFB9IgXhAIhbAAIgXBAIg1AAIBej5IA2AAIBfD5gAAhAZIghhcIggBcIBBAAg");
	this.shape.setTransform(58.4,-4.8,0.567,0.567);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AixCrIAAgjQB5AMBNhIQBUhMAAiPIh5AAIAAggIDCAAQAADdicBYQg1AfhBAIQgWADgSAAQgZAAgQgFg");
	this.shape_1.setTransform(42.7,-5.1,0.567,0.567);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CAA96C","#E6DB97","#F3EDD1","#F3EDD1","#CAA96C"],[0,0.145,0.294,0.439,0.694],-18.8,0,18.8,0).s().p("AioCxIgTgNIAAgiQB3ALBNhFQBThJADiLIhmAAIgTgKIAAgfIDDAAIAAAAIATAKQgEDfibBYQg1AghAAIQgWACgSAAQgYAAgQgFg");
	this.shape_2.setTransform(43.2,-4.8,0.567,0.567);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhOBxIgBAAIAAgnIACAAIABABQAgATAgAAQAXAAAOgKQAOgKAAgRQAAgOgJgIQgHgFgSgHIgbgMQgbgLgNgJQgXgUAAgdQAAgVAMgQQAYgeA1AAQAcAAAhAJIABAAIAAAmIgCgBQgggOgaAAQgVAAgNAIQgNAJAAAPQAAAJAFAGQADADAIAFIABAAIAaANIAVAHQAbALANAJQAXAUAAAfQAAAdgVAUQgaAYgwAAQgnAAgegNg");
	this.shape_3.setTransform(108.1,-4.7,0.567,0.567);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhUBdQgfghAAg7QAAg5AfgjQAggiA0AAQA2AAAfAiQAfAiAAA5QAAA7gfAiQgfAhg2AAQg2AAgeghgAgxhCQgOAYAAAqQAAAnANAYQAVAlAdAAIAAAAQAeAAATgjQAQgagBgnQAAgqgNgXQgVgjgeAAQgdAAgUAig");
	this.shape_4.setTransform(83.3,-4.8,0.567,0.567);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhWB3IgBAAIAAjvIBjAAQATAAASAKQAeARABAkIgDAUQgIAVgVAKQANAFALALQAQASAAAcQAAAggZATQgSAOgVAAQhTgCgbAAgAgjBbIAnAAQAOAAALgIQARgKAAgWQABgVgVgKQgNgGgNABIgjAAgAgjgNIAjAAQAMAAAJgIQAOgKAAgXQAAgWgUgKQgMgEgKAAIgcAAg");
	this.shape_5.setTransform(96.9,-4.6,0.567,0.567);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#CAA96C","#E6DB97","#F3EDD1","#F3EDD1","#CAA96C"],[0,0.145,0.294,0.439,0.694],-9.5,0,9.6,0).s().p("AhFB3IgTgLIAAgoIABAAIACABQAfATAhAAQAXAAAOgKQAOgKAAgRQAAgNgJgIIghgOQgSgIgLgHQgXgIgMgNQgTgSAAgaQABgUAMgRQAXgeA4AAQAaAAAgAJIAUAJIAAAmIgCgBQgegOgcAAQgUAAgNAJQgOAJAAAOQAAANAKAHIAjAOQAUAJALAGQA0AVAAAtQgBAegVAVQgaAYgwAAQgmAAgfgNg");
	this.shape_6.setTransform(108.6,-4.4,0.567,0.567);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#CAA96C","#E6DB97","#F3EDD1","#F3EDD1","#CAA96C"],[0,0.145,0.294,0.439,0.694],-12.5,0,12.6,0).s().p("Ag9BuQgegOgRgdQgQgdAAgoQAAg8AfgjQAggiA2AAQANAAAKACQAzACAdAkQAdAkAAA4QAAA+gfAiQgfAjg2AAQgpAAgdgWgAgnhDQgOAYAAArQAAAqANAZQAIAPAMALIAMABIABAAQAbAAAUgiQAPgaAAgnQAAgrgNgXQgPgYgTgHQgcABgTAig");
	this.shape_7.setTransform(83.9,-4.4,0.567,0.567);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#CAA96C","#E6DB97","#F3EDD1","#F3EDD1","#CAA96C","#CAA96C","#F3EDD1"],[0,0.145,0.294,0.439,0.694,0.875,1],-9.7,0,9.8,0).s().p("AhMB9IgUgLIAAjwIBjAAQAHAAALADIABAAQATAAASAKQAdARABAmIgDAUQgHAWgVALQANAFAKALQAQAUAAAcQAAAigYATQgTAPgVAAQhTgCgaAAgAgyBWIAvAAQAMgBALgHQARgLAAgWQAAgRgOgKQgHgCgJAAIg5AAgAg1gSIArAAQAMAAAKgIQANgLAAgXQAAgYgYgJIg2AAg");
	this.shape_8.setTransform(97.4,-4.3,0.567,0.567);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("Ag5BcQgjgjABg5QAAgQAFgUQAJgfAUgXQAhgjA6AAQAeAAAcAJIABAAIAAAoIgDgCQgXgPgdAAQgjAAgUAaQgUAZgBAqQAAApAVAaQASAZAiAAQAeAAAZgQIADgBIAAAmIgBABQgbAMghAAQg4AAghgig");
	this.shape_9.setTransform(70.6,-4.7,0.567,0.567);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#CAA96C","#ECE3C3","#F3EDD1","#F3EDD1","#CAA96C"],[0.094,0.22,0.357,0.51,0.804],-9.5,4.2,12.9,-3.1).s().p("AgkBrQgfgOgRgeQgRgdAAgmQAAgSAFgTQAJggAUgWQAhgkA7AAQAeAAAbAKIAUALIAAAnIgCgCQgagPgcAAQgjAAgSAaQgWAZABAoQAAA0AcAaQAMAGAOgBQAeABAbgSIATALIAAAnIgBABQgZAMgjAAQguAAgfgZg");
	this.shape_10.setTransform(71.1,-4.4,0.567,0.567);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#CAA96C","#E6DB97","#F3EDD1","#F3EDD1","#CAA96C","#F3EDD1"],[0,0.145,0.294,0.439,0.694,1],-13.1,0,13.2,0).s().p("ABOCCIgSgLIgUg2IhMAAIgXBBIg1AAIgSgLIBej5IA2AAIAbAKIBWD6gAAYAUIgYhAIgUBAIAsAAg");
	this.shape_11.setTransform(59,-4.5,0.567,0.567);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC2131").s().p("AgyBwQgGg0AqhDQAwhTgIgwQgGghgogiQAzAWAQA1QAPA3geA/QghBHgFAcQgNBBAnA2QhAgjgGg7g");
	this.shape_12.setTransform(37.7,-18.1,0.567,0.567);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFE5B8","#CDAB6D","#CDAB6D","#FFEECC"],[0.024,0.251,0.498,1],-5,0,5.1,0).s().p("AgxB3QgFgxAqhGQAwhPgPg4QgLglgrgkQA5AXATA5QATA5gfBAQggBHgFAbQgNBBAnA1Qg/gigGg4g");
	this.shape_13.setTransform(38.5,-17.9,0.567,0.567);

	this.instance = new lib.Path();
	this.instance.setTransform(-41.8,-17.2,0.567,0.567,0,0,0,566.1,0.8);
	this.instance.alpha = 0.738;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(-41.6,7.3,0.567,0.567,0,0,0,565.5,1);
	this.instance_1.alpha = 0.738;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","#FDC24E","#FFE7A2","#FDC24E","#FFE7A2","#FFEFD1","#FFE7A2","#FDC24E","#FFEFD1","#FFE7A2"],[0,0.039,0.165,0.463,0.722,0.816,0.851,0.886,0.941,0.969],-402.1,-0.1,240.5,-0.1).s().p("EglkgBZMAlNgACQAXgjAAgYQAAgOgGgLQgGgKgKgJIADABQAZAPALAbQALAcgLAgMAlUAAAIAAEcMhLJAACg");
	this.shape_14.setTransform(38.9,-10.2);

	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(-26.3,26.9,1.344,0.179);

	this.addChild(this.instance_2,this.shape_14,this.instance_1,this.instance,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-362.8,-29.8,642.2,83.6);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t4_3
	this.instance = new lib.t4_3();
	this.instance.setTransform(-0.8,-207.5,0.832,0.832);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(279).to({_off:false},0).to({alpha:1},10).wait(25).to({alpha:0},10).wait(1));

	// t4_2
	this.instance_1 = new lib.t4_2();
	this.instance_1.setTransform(0.7,-230.1,0.832,0.832);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(274).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).wait(1));

	// t4_1
	this.instance_2 = new lib.t4_1();
	this.instance_2.setTransform(0,-251.4,0.832,0.832);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(269).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_234 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(234).to({graphics:mask_graphics_234,x:0.2,y:-228.3}).wait(26).to({graphics:null,x:0,y:0}).wait(65));

	// Layer 1
	this.instance_3 = new lib.gradient();
	this.instance_3.setTransform(-159.9,-262.2,2.369,0.779,30);
	this.instance_3.alpha = 0.602;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(234).to({_off:false},0).to({x:172.1,y:-195.5},25).to({_off:true},1).wait(65));

	// t3_2
	this.instance_4 = new lib.t3_2_1();
	this.instance_4.setTransform(0,-215.7,0.779,0.779);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(224).to({_off:false},0).to({alpha:1},10).wait(25).to({alpha:0},10).to({_off:true},1).wait(55));

	// t3_1
	this.instance_5 = new lib.t3_1_1();
	this.instance_5.setTransform(0,-239.9,0.779,0.779);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(219).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).to({_off:true},1).wait(55));

	// t2_3
	this.instance_6 = new lib.t2_3();
	this.instance_6.setTransform(0.7,-205.9,0.832,0.832);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(174).to({_off:false},0).to({alpha:1},10).wait(25).to({alpha:0},10).to({_off:true},1).wait(105));

	// t2_2
	this.instance_7 = new lib.t2_2();
	this.instance_7.setTransform(0.7,-227.7,0.832,0.832);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(169).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).to({_off:true},1).wait(105));

	// t2_1
	this.instance_8 = new lib.t2_1();
	this.instance_8.setTransform(0.7,-250,0.832,0.832);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(164).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(105));

	// brandLine
	this.instance_9 = new lib.brandLine();
	this.instance_9.setTransform(-17.5,121.3,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(325));

	// t1_4
	this.instance_10 = new lib.t1_4();
	this.instance_10.setTransform(-0.1,-227.3,0.9,0.9);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},10).wait(39).to({alpha:0},10).to({_off:true},1).wait(265));

	// t1_3
	this.instance_11 = new lib.t1_3();
	this.instance_11.setTransform(-0.1,-227.3,0.9,0.9);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},10).wait(39).to({alpha:0},10).to({_off:true},1).wait(265));

	// t1_2
	this.instance_12 = new lib.t1_2();
	this.instance_12.setTransform(-0.1,-227.3,0.9,0.9);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},10).wait(39).to({alpha:0},10).to({_off:true},1).wait(265));

	// t1_1
	this.instance_13 = new lib.t1_1();
	this.instance_13.setTransform(-0.1,-227.3,0.9,0.9);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},10).wait(39).to({alpha:0},10).to({_off:true},1).wait(265));

	// par
	this.instance_14 = new lib.par_1();
	this.instance_14.setTransform(83,18.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(59).to({_off:false},0).to({alpha:1},15).wait(7).to({x:398,y:38.3},41).to({_off:true},1).wait(202));

	// cups
	this.instance_15 = new lib.cups_1();
	this.instance_15.setTransform(37,26.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(49).to({scaleX:0.9,scaleY:0.9,x:200.6,y:32.8},10).wait(63).to({x:31.4},9).wait(194));

	// snegoviki
	this.instance_16 = new lib.snegoviki();
	this.instance_16.setTransform(-244,33.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(59).to({_off:false},0).to({x:245.5,y:38.7},63).to({_off:true},1).wait(8).to({_off:false,x:-244,y:33.7},0).to({scaleX:0.8,scaleY:0.8,x:-42.3,y:51.4},35).wait(148).to({alpha:0},10).wait(1));

	// elka
	this.instance_17 = new lib.elka_1();
	this.instance_17.setTransform(-64,0.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(49).to({_off:false},0).to({alpha:1},10).wait(63).to({alpha:0},9).to({_off:true},1).wait(193));

	// snowBg
	this.instance_18 = new lib.snowBg();
	this.instance_18.setTransform(0,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(325));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgSuApzMAAAhTlMAldAAAMAAABTlg");
	mask_1.setTransform(0,-183.6);

	// snow
	this.instance_19 = new lib.snow();
	this.instance_19.setTransform(184.6,-9.4);

	this.instance_19.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(325));

	// stars
	this.instance_20 = new lib.stars();
	this.instance_20.setTransform(93.5,-121.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(325));

	// bg
	this.instance_21 = new lib.bg();
	this.instance_21.setTransform(0,149.9,1,2.003,0,0,0,0,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(325));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-347.6,-451.2,584.3,621.5);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,450.2);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.7,-234.5,604.3,1154.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;