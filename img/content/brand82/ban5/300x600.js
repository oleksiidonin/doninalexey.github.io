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
		{src:"images/bgImg2.png", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/fari.png", id:"fari"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/line1.png", id:"line1"},
		{src:"images/line2.png", id:"line2"},
		{src:"images/line3.png", id:"line3"},
		{src:"images/strelka.png", id:"strelka"}
	]
};



// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,239);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,812);


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.fari = function() {
	this.initialize(img.fari);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,35);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,672,600);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.line1 = function() {
	this.initialize(img.line1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,402);


(lib.line2 = function() {
	this.initialize(img.line2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,402);


(lib.line3 = function() {
	this.initialize(img.line3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,648);


(lib.strelka = function() {
	this.initialize(img.strelka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,87);


(lib.t6_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFWBpQgpgqAAg/QAAg+ApgqQApgpA7AAQA7AAAoApQApAqAAA+QAAA/gpAqQgoApg7AAQg7AAgpgpgAFshRQggAhAAAwQAAAwAgAiQAgAjAugBQAtABAggjQAggiAAgwQAAgwggghQgggjgtAAQguAAggAjgAhCB8QgSgUgHgfIAdgJQADAXAOAOQAPAQAXgBQAYAAAPgRQAOgQAAgWQAAgVgOgNQgHgHgZgMIgWgKQgZgMgLgMQgTgTAAgbQAAghAVgUQAWgVAhABQAXAAASAMQARAMAJAUIgYAQQgGgNgJgIQgNgKgQAAQgUAAgMAMQgNANAAATQAAAOAKALQAIAJAUAJIAYAMQAeAOAMALQATATAAAgQAAAngYAZQgYAXgjAAQgkAAgXgWgAp/B8QgTgUgGgfIAdgJQADAWANAPQAPAQAYgBQAaAAAOgRQAOgQAAgWQAAgVgNgNQgIgHgZgMIgYgKQgYgMgMgMQgTgTAAgbQAAghAWgUQAVgVAhABQAZAAASAMQAQALALAVIgYAQQgHgOgJgHQgMgKgSAAQgVAAgMAMQgNANAAATQAAAOAKALQAIAIAVAKIAaAMQAdAOAMALQAUAUAAAfQAAAngZAZQgYAXglAAQgkAAgWgWgAujBoQgogqAAg+QAAg9AogqQApgqA8AAQAvAAAjAcQATAQAMARIgWAWQgLgQgOgOQgcgYgmAAQgwAAggAjQgeAhAAAwQAAA2AjAiQAgAcAqAAQAbABAWgNQAWgNAMgWQAJgRACgYIhQAAIAAgcIBwAAIAAAGQAAA0gaAmQgMARgSAMQgeAWgogBQg8AAgogqgANtCOIAAj9IhCAAIAAgeIChAAIAAAeIhBAAIAAD9gAL1COIhSh9IgIAAIAAB9IgeAAIAAkbIArAAQAsAAAWAQQAeAVAAAqQAAAggTAWQgTAVgeACIBVB/gAKbgJIATAAQAcAAAQgOQAQgOAAgYQAAgdgWgNQgOgIgZAAIgSAAgACDCOIAAkbIAxAAQAXAAAPAEQASAEAMAMQAZAWAAAnQAAAhgUAWQgWAXgrgBIgbAAIAAB9gAChgKIAZAAQAbAAAPgOQAPgNAAgZQAAgxg7AAIgXAAgAlaCOIAAkbIB7AAIAAAeIhdAAIAABUIBaAAIAAAbIhaAAIAACOg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.2,-14.7,194.6,29.4);


(lib.t6_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123.8,-66.9,247.7,133.9);


(lib.t5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-141.8,-59.7,283.7,119.4);


(lib.t4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE5BfQgmgmAAg5QAAg4AmgnQAlgmA2AAQA2AAAlAmQAmAnAAA4QAAA5gmAmQglAng2AAQg2AAglgngAFNhLQgdAgAAArQAAAsAdAgQAeAeApAAQApAAAegeQAdggAAgsQAAgrgdggQgegegpAAQgpAAgeAegAg8BxQgRgRgGgdIAbgIQADAVAMAMQANAOAWAAQAWAAAOgPQAMgOAAgWQAAgSgMgMQgJgIgVgKIgUgJQgWgKgLgLQgRgSAAgZQAAgeAUgSQATgTAeAAQAVAAAQAMQAQALAIARIgVAQQgGgNgJgGQgLgJgOAAQgTAAgLALQgMALAAARQAAANAJAKQAIAIASAIIAWAMQAaALAMALQASASAAAdQAAAkgWAWQgWAWggAAQghAAgVgVgApJBxQgQgRgGgdIAbgIQACAUAMANQAOAOAVAAQAZAAANgPQAMgOAAgWQAAgSgMgMQgIgIgWgKIgWgJQgWgLgLgKQgRgTAAgYQAAgeAUgSQATgTAfAAQAXAAAQAMQAPALAJARIgWAQQgGgNgIgGQgLgJgRAAQgSAAgMALQgMALAAARQAAAOAKAJQAGAHATAJIAZAMQAZALANALQARASABAdQAAAkgXAWQgWAWgiAAQghAAgVgVgAtTBfQglgmAAg5QAAg4AlgmQAlgnA3AAQAsAAAfAaQARAOAMARIgVATQgLgRgMgKQgZgVgiAAQgtAAgcAeQgcAfAAAsQgBAyAhAeQAdAaAnAAQAYAAAVgMQATgLALgUQAJgRABgUIhJAAIAAgaIBnAAIAAAFQAAAwgYAiQghAvg7AAQg3AAgkgngAMiCBIAAjnIg8AAIAAgbICTAAIAAAbIg8AAIAADngAK0CBIhLhyIgHAAIAAByIgcAAIAAkCIApAAQAoABATAOQAMAJAHANQAJAQgBAUQABAegSATQgRASgcACIBPB0gAJigIIARAAQAaAAAPgMQAOgNAAgXQAAgagTgMQgOgHgWgBIgRAAgAB4CBIAAkCIAtAAQAVABANADQAQAEAMAKQAXAVgBAjQAAAfgSAUQgUAUgoAAIgXAAIAABxgACUgJIAWAAQAZAAAOgMQAOgMgBgXQABgug3AAIgUAAgAk8CBIAAkCIBxAAIAAAbIhWAAIAABOIBSAAIAAAZIhSAAIAACAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.9,-13.4,177.9,26.9);


(lib.t3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJyGBIAAkDIAsAAQAVAAANADQARAEALALQAXAUAAAkQAAAegSAUQgVAXgnAAIgYAAIAABwgAKND1IAWAAQAZAAANgMQAOgMABgXQgBgtg2AAIgUAAgAG/GBIAAkDICAAAIAAAbIhkAAIAABNIBhAAIAAAbIhhAAIAABlIBkAAIAAAbgAFDGBIAAjoIg9AAIAAgbICUAAIAAAbIg8AAIAADogADXGBIhlh3IgHAIIAABvIgcAAIAAkDIAcAAIAABvIBphvIAlAAIhzB5IB2CKgAAOGBIgbhJIhpAAIgeBJIgeAAIBykQIBtEQgAgYEdIgphoIgqBoIBTAAgAksGBIAAkDIAtAAQAVAAANADQAQAEAMALQAXAUAAAkQgBAegRAUQgVAXgoAAIgXAAIAABwgAkQD1IAWAAQAYAAAOgMQAOgMABgXQgBgtg2AAIgUAAgAltGBIgdhJIhpAAIgeBJIgeAAIBxkQIBwEQgAmUEdIgqhoIgqBoIBUAAgApWGBIg5hqIg5BqIgfAAIBJiGIhDh9IAfAAIAzBhIA1hhIAfAAIhDB9IBHCGgAOuk8IAbAAIAADHICsjSIAAEOIgbAAIAAjGIisDSgAKnk8IAcAAIAADHICrjSIAAEOIgbAAIAAjGIisDSgAgXk8IAZAAIAADHICsjSIAAEOIgbAAIAAjGIiqDSgAprhaQglgnAAg5QAAg6AlgnQAmgmA1AAQA2AAAlAmQAmAngBA6QABA5gmAnQglAmg2AAQg1AAgmgmgApXkGQgdAfAAAtQAAAsAdAgQAeAfApAAQApAAAegfQAdggAAgsQAAgtgdgfQgegfgpAAQgpAAgeAfgAxQhaQgkgnAAg4QAAg6AlgnQAkgnA4AAQApAAAgAaIAAAkQgRgRgQgHQgVgKgVAAQgqAAgdAfQgcAfAAAuQAAAxAhAeQAdAbAlAAQAYAAAWgMQASgJALgNIAAAkQgiAZgpAAQg2AAglgmgAJMg5IAAh/Ih/AAIAAB/IgbAAIAAkDIAbAAIAABpIB/AAIAAhpIAbAAIAAEDgADug5IAAkDIAsAAQAmAAATAQQAWASAAAkQAAAigZARQAYAGANAVQALARAAAVQAAAkgZAUQgOALgRAEQgKACgTAAgAEKhUIAfAAQAeAAANgLQARgNAAgXQAAgagWgMQgOgIgbAAIgcAAgAEKjKIAUAAQAxAAgBgrQAAgcgUgKQgMgGgPAAIgVAAgAiTg5IAAjoIg8AAIAAgbICTAAIAAAbIg7AAIAADogAldg5IAAkDIAsAAQAWAAANADQAQAEAMALQAWAUAAAkQABAegTAUQgUAXgnAAIgZAAIAABwgAlCjFIAXAAQAYAAAOgMQAOgMAAgXQAAgtg3AAIgUAAgAreg5IAAjoIh/AAIAADoIgbAAIAAkDIC1AAIAAEDgAPmliQgLgKgDgLIAagJQAFAVAaABQAHAAAIgDQANgGADgNIAaAJQgDALgKAKQgRARgbAAQgbAAgQgRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.1,-38.6,228.3,77.2);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.2,-32.4,252.5,64.9);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJWhkIAbAAIAADFICsjQIAAENIgcAAIAAjEIirDPgAFPhkIAbAAIAADFICsjQIAAENIgbAAIAAjEIisDPgATVCNQgSgRgFgdIAagIQADAVAMANQAOAOAWAAQAXAAAOgQQAMgPAAgUQAAgTgMgMQgHgHgXgLIgWgLQgXgLgKgKQgRgPAAgZQAAgfAUgSQATgSAeAAQAYgBAQAMQAPAKAJATIgWAPQgGgMgIgHQgMgJgQAAQgSAAgMALQgLALAAASQAAAOAJAJQAIAHASAHIAXALQAbANALALQASASAAAeQAAAjgWAWQgWAWgiAAQghAAgUgVgAPKB7QglgmAAg5QAAg3AlgmQAlgnA3AAQAsAAAfAZQAQANANASIgVATQgLgQgMgKQgagWgiAAQgsAAgdAfQgcAfAAArQAAAyAhAeQAdAbAnAAQAYAAAUgMQAUgMALgTQAJgSABgUIhJAAIAAgbIBnAAIAAAGQAAAxgYAhQghAvg7AAQg3AAgkgngAsXB8QgmgnAAg5QAAg3AmgnQAlgmA2AAQA2AAAlAmQAlAnAAA3QAAA5glAnQglAmg2AAQg2AAglgmgAsDguQgeAgAAAqQAAAsAeAgQAdAfAqAAQApAAAegfQAdggAAgsQAAgqgdggQgegfgpAAQgqAAgdAfgA0yB8QglgnAAg5QAAg3AlgnQAlgmA2AAQA2AAAlAmQAlAnAAA3QAAA5glAnQglAmg2AAQg2AAglgmgA0eguQgdAgAAAqQAAAsAdAgQAeAfApAAQAqAAAdgfQAdggAAgsQAAgqgdggQgdgfgqAAQgpAAgeAfgAlgCeIAAgcQAGADAIgBQAOABAKgKQAJgKADgVQACgMAAgbIAAiZICWAAIAAECIgbAAIAAjnIhgAAIAACKQAAAbgCANQgFAZgPAOQgRAQgZAAQgGAAgJgCgAD0CeIAAh/Ih/AAIAAB/IgbAAIAAkCIAbAAIAABoIB/AAIAAhoIAbAAIAAECgAhWCeIAAkCIB+AAIAAAbIhjAAIAABLIBgAAIAAAcIhgAAIAABkIBjAAIAAAcgAoKCeIAAkCIAtAAQAlAAATAQQAXATAAAjQAAAggZARQAYAGANAVQAKARAAAWQAAARgHAPQgHAOgLAJQgVARgmABgAnuCCIAfAAQAfAAANgKQAQgNAAgXQAAgbgVgMQgNgHgdAAIgcAAgAnuAMIAVAAQAwAAAAgpQAAgbgVgLQgLgGgQAAIgVAAgAuKCeIAAh/Ih/AAIAAB/IgbAAIAAkCIAbAAIAABoIB/AAIAAhoIAbAAIAAECgAKNiJQgKgLgDgLIAagJQAEAOANAFQAHADAHAAQAIAAAHgDQANgFAEgOIAZAJQgDALgKALQgRAQgbAAQgbAAgRgQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-136.8,-16.9,273.8,33.9);


(lib.strelkaMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.strelka();
	this.instance.setTransform(-6,-43.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-43.5,12,87);


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


(lib.line3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.line3();
	this.instance.setTransform(-147.5,-324);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147.5,-324,295,648);


(lib.line2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.line2();
	this.instance.setTransform(-93.5,-201);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.5,-201,187,402);


(lib.line1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.line1();
	this.instance.setTransform(-93.5,-201);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.5,-201,187,402);


(lib.img2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img2();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-336,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-336,-300,672,600);


(lib.finalText = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,147.5);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAghhbIAPgFQAEANAOAAQAOAAAFgNIAPAFQgIAWgaAAQgZAAgIgWg");
	this.shape_1.setTransform(131.4,-68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6hJIAQAAIAABwIBlh3IAACaIgQAAIAAhwIhlB3g");
	this.shape_2.setTransform(115.5,-66.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmBKIAAhJIhLAAIAABJIgQAAIAAiTIAQAAIAAA8IBLAAIAAg8IAQAAIAACTg");
	this.shape_3.setTransform(100.2,-66.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAgZhPQgGgFgCgHIAPgFQAEANAOAAQAPgBAEgMIAPAFQgIAWgaAAQgPAAgKgKg");
	this.shape_4.setTransform(84.9,-68);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_5.setTransform(74.2,-66.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBaIAAggIhrAAIAAiTIAQAAIAACEIBKAAIAAiEIAQAAIAACEIARAAIAAAvg");
	this.shape_6.setTransform(64.9,-64.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_7.setTransform(54,-66.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHBNIAAgVIgDAAQgmAAgRgUQgOgPAAgVQAAgXAOgQQARgTAmAAIADAAIAAgSIAPAAIAAASIAEAAQAmAAARATQANAPAAAYQAAAVgNAPQgRAUgmAAIgEAAIAAAVgAAIAoIAFAAQAbABANgOQALgMgBgPQABgRgLgMQgNgNgbAAIgFAAgAg0gdQgKAMAAARQAAAPAKAMQANAOAcgBIAEAAIAAhSIgEAAQgcAAgNANg");
	this.shape_8.setTransform(42.1,-66.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2A3QgWgXAAggQAAggAWgWQAXgWAfAAQAgAAAWAWQAXAWAAAgQAAAggXAXQgWAWggAAQgfAAgXgWgAgpgqQgSASAAAYQAAAZASASQARASAYAAQAZAAARgSQASgSAAgZQAAgYgSgSQgRgSgZAAQgYAAgRASg");
	this.shape_9.setTransform(24.1,-66.4);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.9,-77.8,233.3,255);


(lib.fari_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fari();
	this.instance.setTransform(-78.5,-17.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.5,-17.5,157,35);


(lib.dillers = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-84.1,224.9,168.2);


(lib.bgImg3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg3();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bgImg1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg1();
	this.instance.setTransform(-150,-119);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-119,300,239);


(lib.bgImg = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg2();
	this.instance.setTransform(-150,-297.1,0.732,0.732);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-297.1,300,594.2);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.strelka_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.strelkaMc();
	this.instance.setTransform(0,64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,20.5,12,87);


(lib.bgImg2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-297.1,300,594.2);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finText
	this.instance = new lib.finalText();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(384).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(66,277.2,0.474,0.474);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(374).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(55).to({scaleX:0.47,scaleY:0.47,x:66,y:277.2},10).wait(1));

	// dillers
	this.instance_2 = new lib.dillers();
	this.instance_2.setTransform(-262.4,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(334).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:262.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(70));

	// bgImg3
	this.instance_3 = new lib.bgImg3_1();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(324).to({_off:false},0).to({alpha:1},10).wait(105).to({alpha:0},10).wait(1));

	// fari
	this.instance_4 = new lib.fari_1();
	this.instance_4.setTransform(57.4,-34.4);
	this.instance_4.alpha = 0;
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(289).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},5).to({_off:true},1).wait(140));

	// t6_2
	this.instance_5 = new lib.t6_2();
	this.instance_5.setTransform(-276.1,107.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(274).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(30).to({x:273.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(125));

	// t6_1
	this.instance_6 = new lib.t6_1();
	this.instance_6.setTransform(-276.1,-209.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(256).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(48).to({x:273.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(125));

	// img2
	this.instance_7 = new lib.img2_1();
	this.instance_7.setTransform(-300,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(246).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).to({_off:true},78).wait(116));

	// t5
	this.instance_8 = new lib.t5();
	this.instance_8.setTransform(-291.8,-230.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(202).to({_off:false},0).to({x:-5.6},10,cjs.Ease.get(1)).to({x:6.4},24).to({x:291.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(203));

	// t4
	this.instance_9 = new lib.t4();
	this.instance_9.setTransform(-344.7,-230.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(158).to({_off:false},0).to({x:-58.4},10,cjs.Ease.get(1)).to({x:59.3},24).to({x:344.7},10,cjs.Ease.get(-1)).to({_off:true},1).wait(247));

	// t3
	this.instance_10 = new lib.t3();
	this.instance_10.setTransform(-319.5,-230.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114).to({_off:false},0).to({x:-33.2},10,cjs.Ease.get(1)).to({x:34.1},24).to({x:319.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(291));

	// t2
	this.instance_11 = new lib.t2();
	this.instance_11.setTransform(-307.4,-230.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70).to({_off:false},0).to({x:-21.1},10,cjs.Ease.get(1)).to({x:22},24).to({x:307.4},10,cjs.Ease.get(-1)).to({_off:true},1).wait(335));

	// t1
	this.instance_12 = new lib.t1();
	this.instance_12.setTransform(-286.9,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-11.6},10,cjs.Ease.get(1)).to({x:13.1},50).to({x:286.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(379));

	// line
	this.instance_13 = new lib.line3_1();
	this.instance_13.setTransform(146.2,-696.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:-46.5,y:-266.9},10,cjs.Ease.get(1)).to({x:-113.9,y:-118.8},50).to({x:-294.6,y:277.6},10,cjs.Ease.get(-1)).to({_off:true},1).wait(379));

	// line
	this.instance_14 = new lib.line2_1();
	this.instance_14.setTransform(248.3,-310.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({x:55.6,y:119},10,cjs.Ease.get(1)).to({x:-11.7,y:267.1},46).to({x:-192.5,y:663.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(379));

	// line
	this.instance_15 = new lib.line1_1();
	this.instance_15.setTransform(248.3,-503.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10).to({_off:false},0).to({x:55.6,y:-73.9},10,cjs.Ease.get(1)).to({x:-11.7,y:74.1},40).to({x:-192.5,y:470.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(379));

	// strelka
	this.instance_16 = new lib.strelka_1();
	this.instance_16.setTransform(3,-22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:35,y:-22.5},10).to({regX:0,rotation:71},10).to({regX:-0.1,scaleX:1,scaleY:1,rotation:105},10).to({regX:0.1,scaleX:1,scaleY:1,rotation:140,x:2.8,y:-22.4},10).to({regX:0,scaleX:1,scaleY:1,rotation:179,x:3,y:-22.5},10).to({regX:-0.1,rotation:224,x:3.1},10).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:277,alpha:0},10).to({_off:true},1).wait(368).to({_off:false,rotation:360,x:3,y:-22.4,alpha:1},0).wait(11));

	// bgImg2
	this.instance_17 = new lib.bgImg2_1();
	this.instance_17.setTransform(0,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(60).to({scaleX:2.15,scaleY:2.15,y:13.4},98).to({scaleX:2.67,scaleY:2.67,y:21.1,alpha:0},44).wait(237).to({scaleX:1,scaleY:1,y:-3.9,alpha:1},0).wait(11));

	// line
	this.instance_18 = new lib.line3_1();
	this.instance_18.setTransform(222.5,-432.6);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(78).to({_off:false},0).to({x:37.2,y:-12.5},9,cjs.Ease.get(1)).to({x:-3.8,y:79.5},17).to({x:-154.7,y:422},10,cjs.Ease.get(-1)).to({_off:true},1).wait(8).to({_off:false,x:278.4,y:-449.2},0).to({x:92.4,y:-38.1},10,cjs.Ease.get(1)).to({x:25.4,y:105.9},15).to({x:-107.7,y:390.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(8).to({_off:false,scaleX:2,scaleY:2,x:431,y:-859.9},0).to({x:60.4,y:-19.6},9,cjs.Ease.get(1)).to({x:-21.6,y:164.4},17).to({x:-323.5,y:849.4},10,cjs.Ease.get(-1)).to({_off:true},1).wait(8).to({_off:false,scaleX:1.5,scaleY:1.5,x:399.9,y:-642.5},0).to({x:120.8,y:-25.9},10,cjs.Ease.get(1)).to({x:20.3,y:190.2},15).to({x:-179.3,y:616.7},10,cjs.Ease.get(-1)).to({_off:true},1).wait(202));

	// line
	this.instance_19 = new lib.line2_1();
	this.instance_19.setTransform(128.8,-469.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(76).to({_off:false},0).to({x:-56.5,y:-49.7},9,cjs.Ease.get(1)).to({x:-97.5,y:42.3},19).to({x:-248.4,y:384.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(6).to({_off:false,x:124.7,y:-638.5},0).to({x:-61.4,y:-227.4},10,cjs.Ease.get(1)).to({x:-128.4,y:-83.3},17).to({x:-261.4,y:201},10,cjs.Ease.get(-1)).to({_off:true},1).wait(6).to({_off:false,scaleX:2,scaleY:2,x:243.6,y:-934.3},0).to({x:-127,y:-94},9,cjs.Ease.get(1)).to({x:-209,y:90},19).to({x:-510.9,y:775},10,cjs.Ease.get(-1)).to({_off:true},1).wait(6).to({_off:false,scaleX:1.5,scaleY:1.5,x:169.3,y:-926.4},0).to({x:-109.8,y:-309.8},10,cjs.Ease.get(1)).to({x:-210.3,y:-93.7},17).to({x:-409.9,y:332.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(202));

	// line
	this.instance_20 = new lib.line1_1();
	this.instance_20.setTransform(271.7,-485.8);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(74).to({_off:false},0).to({x:86.4,y:-65.6},9,cjs.Ease.get(1)).to({x:45.4,y:26.4},21).to({x:-105.6,y:368.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(4).to({_off:false,x:242.6,y:-585.4},0).to({x:56.5,y:-174.3},10,cjs.Ease.get(1)).to({x:-10.5,y:-30.3},19).to({x:-143.5,y:254.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(4).to({_off:false,scaleX:2,scaleY:2,x:529.3,y:-966.2},0).to({x:158.7,y:-125.9},9,cjs.Ease.get(1)).to({x:76.7,y:58.1},21).to({x:-225.2,y:743.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(4).to({_off:false,scaleX:1.5,scaleY:1.5,x:346.1,y:-846.8},0).to({x:67,y:-230.2},10,cjs.Ease.get(1)).to({x:-33.5,y:-14.1},19).to({x:-233,y:412.4},10,cjs.Ease.get(-1)).to({_off:true},1).wait(202));

	// line
	this.instance_21 = new lib.line2_1();
	this.instance_21.setTransform(172.8,-506.8);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(72).to({_off:false},0).to({x:-12.5,y:-86.7},9,cjs.Ease.get(1)).to({x:-53.5,y:5.3},23).to({x:-204.4,y:347.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(2).to({_off:false,x:133.7,y:-523.4},0).to({x:-52.4,y:-112.3},10,cjs.Ease.get(1)).to({x:-119.4,y:31.7},21).to({x:-252.4,y:316.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(2).to({_off:false,scaleX:2,scaleY:2,x:331.6,y:-1008.3},0).to({x:-39,y:-168},9,cjs.Ease.get(1)).to({x:-121,y:16},23).to({x:-422.9,y:701},10,cjs.Ease.get(-1)).to({_off:true},1).wait(2).to({_off:false,scaleX:1.5,scaleY:1.5,x:182.8,y:-753.8},0).to({x:-96.3,y:-137.2},10,cjs.Ease.get(1)).to({x:-196.8,y:78.9},21).to({x:-396.4,y:505.4},10,cjs.Ease.get(-1)).to({_off:true},1).wait(202));

	// line
	this.instance_22 = new lib.line1_1();
	this.instance_22.setTransform(258.7,-431.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(70).to({_off:false},0).to({x:73.4,y:-11.6},9,cjs.Ease.get(1)).to({x:32.4,y:80.4},25).to({x:-118.6,y:422.9},10,cjs.Ease.get(-1)).wait(1).to({x:219.5,y:-448.3},0).to({x:33.5,y:-37.2},10,cjs.Ease.get(1)).to({x:-33.5,y:106.8},23).to({x:-166.6,y:391.2},10,cjs.Ease.get(-1)).wait(1).to({scaleX:2,scaleY:2,x:503.3,y:-858.1},0).to({x:132.7,y:-17.8},9,cjs.Ease.get(1)).to({x:50.7,y:166.2},25).to({x:-251.2,y:851.2},10,cjs.Ease.get(-1)).wait(1).to({scaleX:1.5,scaleY:1.5,x:311.5,y:-641.2},0).to({x:32.5,y:-24.5},10,cjs.Ease.get(1)).to({x:-68,y:191.5},23).to({x:-267.6,y:618.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(202));

	// img1
	this.instance_23 = new lib.img1_1();
	this.instance_23.setTransform(202,-63);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(60).to({_off:false},0).to({x:181.2,y:-59.6,alpha:1},10).to({x:-186,y:0},176).to({_off:true},193).wait(11));

	// speedTxt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBoQgMgEgIgIQgJgIgFgLQgEgMAAgOIAAhdQAAgOAEgMQAFgLAJgIQAIgIAMgEQALgEALAAQAMAAALAEQALAEAJAIQAIAIAFALQAFAMAAAOIAABdQAAAOgFAMQgFALgIAIQgJAIgLAEQgLAEgMAAQgLAAgLgEgAgMhNQgFACgEAFQgEAEgDAHQgCAGAAAIIAABbQAAAIACAGQADAHAEAEQAEAFAFACQAGADAGAAQAGAAAHgDQAFgCAEgFQAFgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgFgEQgEgFgFgCQgHgDgGAAQgGAAgGADg");
	this.shape.setTransform(1.8,-56.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBpQgMgEgJgHQgJgIgFgLQgGgMAAgPIAeAAQABAJADAGQADAGAFAEQAEAEAHACQAGACAFAAQAHAAAHgDQAGgCAEgEQAFgFADgHQACgGAAgJQABgIgDgGQgCgHgFgEQgEgFgGgCQgIgDgHAAIgEAAIAAgZIAEAAQAHAAAGgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgDgGQgCgGgEgEQgEgFgGgCQgGgCgGAAQgFAAgGACQgFACgFAEQgEAEgDAGQgCAGAAAHIggAAQACgOAFgLQAEgKAJgIQAJgHALgEQAKgEAMAAQANAAALAEQAMAEAIAIQAIAIAFALQAEALAAANQABAJgCAHQgCAHgEAGQgGALgNAGIANAFQAFAFAEAGQAEAHABAHQADAJAAAJQAAAPgFAMQgFAMgKAIQgIAHgMAEQgMAEgNAAQgMAAgLgDg");
	this.shape_1.setTransform(1.6,-56.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYBnQgLgFgJgIQgIgIgFgMQgFgMAAgPQABgMAEgOIALgYIAvhjIAgAAIgsBcQAIgEAJAAQAMAAALAFQAJAEAIAIQAIAGAEALQAFAMgBAOQABAOgFANQgEAMgJAIQgJAJgLAEQgMAFgNAAQgMAAgMgEgAgMAIQgGADgEAEQgFAFgCAHQgCAHAAAJQAAAIACAHQACAHAFAFQAEAFAGACQAGADAGAAQAGAAAHgDQAFgCAFgFQAFgFACgHQACgHAAgIQAAgIgCgHQgDgHgEgFQgEgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_2.setTransform(1.8,-56.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBrIAshcQgJAEgJAAQgMAAgKgFQgKgEgIgIQgHgGgEgMQgEgLgBgOQAAgPAFgMQAFgMAIgIQAJgJALgFQALgEANAAQANAAAMAEQAMAFAHAIQAKAIAEAMQAFAMgBAPQABAMgFAOQgEALgHANIgvBjgAgMhMQgGACgEAFQgFAFgCAHQgCAHAAAIQAAAIACAHQACAHAFAFQADAFAHADQAGACAGAAQAGAAAHgCQAFgDAFgFQAFgEACgHQACgHAAgJQAAgIgCgHQgCgHgFgFQgFgFgFgCQgHgDgGAAQgGAAgGADg");
	this.shape_3.setTransform(1.8,-56.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKBrIAAgbIBShiIAJgOQACgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgGAAgGACQgGACgEAEQgEAEgDAGQgCAGAAAJIgfAAQAAgNAEgMQAFgLAIgIQAJgIALgEQAMgEANAAQAOAAALAEQAMAEAIAIQAIAIAEALQAFALAAAOQAAANgFALQgEAJgLANIhDBQIBXAAIAAAbgAhbBrIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_4.setTransform(2.6,-56.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsBnQgLgFgIgHQgHgIgFgLQgCgJgBgNIAeAAQACAPAHAHQAEAEAGACQAFACAHAAQAHAAAGgCQAGgDAEgEQAFgGADgKQABgIABgNIgCgSQgBgIgEgGQgDgEgHgDQgGgEgIAAQgNAAgIAGQgHADgDAIIgcAAIAAhyIB0AAIAAAbIhYAAIAAA4QAFgFAKgEQAIgDAMAAQAMAAALAEQAJADAGAHQAHAGADAHQAEAGACAGQADAMAAASQAAATgDAMQgCAHgEAGQgDAHgGAGQgIAHgKAFQgMAEgPAAQgPAAgMgEgAhbBpIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_5.setTransform(2.7,-56.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArBoQgMgEgIgJQgKgIgFgLQgFgMAAgOQAAgJADgIQACgIAEgGQAIgLANgGQgMgHgGgLQgEgGgCgHQgCgHAAgIQAAgNAFgLQAEgLAJgIQAIgIAMgEQALgEANAAQANAAAMAEQALAEAIAIQAJAIAFALQAEALAAANQAAAIgCAHQgCAHgDAGQgHALgLAHQANAGAHALQAEAGADAIQACAIAAAJQAAAOgFAMQgFALgJAIQgJAJgMAEQgMAEgOAAQgOAAgMgEgAA3ANQgGACgFAFQgFAFgCAGQgDAHAAAHQAAAIADAGQACAHAFAFQAFAEAGADQAHADAHAAQAHAAAHgDQAGgDAFgEQAFgFACgHQADgGAAgIQAAgHgDgHQgCgGgFgFQgFgFgGgCQgHgDgHAAQgHAAgHADgAA4hNQgFACgFAFQgEAEgCAGQgCAGAAAHQAAAHACAGQACAGAEAEQAEAFAGACQAGACAHAAQAHAAAGgCQAGgCAEgFQAEgEADgGQACgGAAgHQAAgHgCgGQgDgGgEgEQgEgFgGgCQgGgDgHAAQgHAAgGADgAhcBqIAAiyIgqAlIAAgiIAqgkIAeAAIAADTg");
	this.shape_6.setTransform(2.8,-56.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABdBrIAAiyIgrAlIAAgiIArgkIAeAAIAADTgAh6BrIAAgbIBShiIAJgOQADgGgBgIQAAgIgCgGQgBgGgFgEQgEgEgGgCQgGgDgGAAQgHAAgGACQgFACgFAEQgEAEgCAGQgDAGAAAJIgfAAQAAgNAEgMQAGgLAIgIQAIgIALgEQAMgEAOAAQANAAAMAEQALAEAIAIQAIAIAEALQADALAAAOQAAANgDALQgEAJgLANIhDBQIBVAAIAAAbg");
	this.shape_7.setTransform(0.1,-56.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABcBrIAAggIhXAAIAAgcIBMiXIAhAAIhLCXIA1AAIAAgwIAdAAIAAAwIAYAAIAAAcIgYAAIAAAggAiQBrIAAgbIBShiIAJgOQADgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgDAGABAJIggAAQAAgNAFgMQAFgLAIgIQAIgIAMgEQAMgEANAAQAOAAALAEQALAEAIAIQAJAIAEALQAEALAAAOQAAANgEALQgFAJgKANIhEBQIBXAAIAAAbg");
	this.shape_8.setTransform(2.2,-56.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmBrIBIi4IhBAAIAAAiIgdAAIAAg9IB/AAIAAAbIhIC4gAiOBrIAAgbIBShiIAJgOQADgGAAgIQAAgIgCgGQgCgGgEgEQgFgEgFgCQgGgDgHAAQgHAAgFACQgGACgEAEQgFAEgCAGQgDAGAAAJIgfAAQAAgNAFgMQAFgLAIgIQAIgIAMgEQALgEAOAAQANAAAMAEQALAEAIAIQAIAIAFALQAEALAAAOQAAANgFALQgEAJgLANIhDBQIBXAAIAAAbg");
	this.shape_9.setTransform(2,-56.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA6BoQgLgEgIgIQgJgIgFgLQgEgMAAgOIAAhdQAAgOAEgMQAFgLAJgIQAIgIALgEQALgEANAAQANAAALAEQALAEAJAIQAIAIAFALQAFAMAAAOIAABdQAAAOgFAMQgFALgIAIQgJAIgLAEQgLAEgNAAQgNAAgLgEgABFhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAGADAHAAQAHAAAGgDQAGgCAEgFQAEgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgEgEQgEgFgGgCQgGgDgHAAQgHAAgGADgAhmBpQgMgEgIgHQgKgIgFgLQgFgMgBgPIAfAAQAAAJADAGQADAGAFAEQAFAEAGACQAGACAHAAQAHAAAHgDQAGgCAFgEQAEgFADgHQADgGAAgJQAAgIgDgGQgCgHgEgEQgFgFgGgCQgHgDgJAAIgFAAIAAgZIAFAAQAIAAAGgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgCgGQgDgGgEgEQgEgFgGgCQgGgCgGAAQgHAAgGACQgFACgFAEQgEAEgCAGQgDAGAAAHIgfAAQABgOAFgLQAFgKAIgIQAJgHALgEQALgEANAAQANAAAMAEQALAEAIAIQAJAIAEALQAFALAAANQAAAJgCAHQgCAHgDAGQgHALgNAGIANAFQAFAFAEAGQAEAHACAHQACAJAAAJQAAAPgFAMQgFAMgJAIQgJAHgMAEQgMAEgNAAQgNAAgMgDg");
	this.shape_10.setTransform(1.5,-56.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA3BpQgMgEgJgHQgJgIgFgLQgGgMAAgPIAeAAQABAJADAGQADAGAFAEQAEAEAHACQAFACAHAAQAIAAAGgDQAGgCAFgEQAFgFACgHQADgGAAgJQAAgIgCgGQgCgHgFgEQgEgFgHgCQgHgDgJAAIgFAAIAAgZIAFAAQAJAAAGgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgDgGQgCgGgEgEQgFgFgGgCQgFgCgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgCAGgBAHIgfAAQABgOAFgLQAFgKAJgIQAIgHALgEQALgEANAAQAOAAALAEQAMAEAIAIQAIAIAFALQAEALAAANQAAAJgBAHQgCAHgEAGQgGALgNAGIAMAFQAGAFADAGQAFAHABAHQADAJAAAJQAAAPgGAMQgEAMgKAIQgIAHgMAEQgMAEgOAAQgNAAgLgDgAhnBpQgMgEgIgHQgKgIgFgLQgFgMgBgPIAfAAQAAAJADAGQADAGAFAEQAFAEAGACQAGACAHAAQAHAAAHgDQAGgCAFgEQAEgFADgHQADgGAAgJQAAgIgDgGQgCgHgEgEQgFgFgGgCQgHgDgJAAIgFAAIAAgZIAFAAQAIAAAGgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgCgGQgDgGgEgEQgEgFgGgCQgGgCgGAAQgHAAgGACQgFACgFAEQgEAEgCAGQgDAGAAAHIgfAAQABgOAFgLQAFgKAIgIQAJgHALgEQALgEANAAQANAAAMAEQALAEAIAIQAJAIAEALQAFALAAANQAAAJgCAHQgCAHgDAGQgHALgNAGIANAFQAFAFAEAGQAEAHACAHQACAJAAAJQAAAPgFAMQgFAMgJAIQgJAHgMAEQgMAEgNAAQgNAAgMgDg");
	this.shape_11.setTransform(1.6,-56.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA4BoQgMgFgIgIQgIgIgFgMQgFgMAAgPQAAgMAFgOIALgYIAxhjIAgAAIgtBcQAIgEAKAAQAMAAALAFQAJAEAIAIQAIAGAEALQAFAMgBAOQABAOgFANQgEAMgJAIQgIAJgMAEQgMAFgOAAQgNAAgMgEgABEAJQgGADgEAEQgEAFgDAHQgCAHAAAJQAAAIACAHQADAHAEAFQAEAFAGACQAGADAHAAQAHAAAHgDQAFgCAFgFQAFgFACgHQACgHAAgIQAAgIgCgHQgDgHgEgFQgEgFgGgDQgGgCgIAAQgHAAgGACgAhmBpQgMgEgJgHQgKgIgEgLQgGgMgBgPIAfAAQABAJADAGQACAGAGAEQAEAEAGACQAGACAHAAQAHAAAHgDQAGgCAFgEQAEgFADgHQADgGAAgJQAAgIgDgGQgCgHgEgEQgFgFgGgCQgHgDgJAAIgFAAIAAgZIAFAAQAIAAAHgCQAFgCAEgEQAFgFACgGQACgFAAgIQgBgIgCgGQgDgGgDgEQgFgFgGgCQgGgCgGAAQgHAAgGACQgFACgEAEQgEAEgDAGQgDAGAAAHIgfAAQABgOAFgLQAFgKAJgIQAIgHALgEQALgEANAAQAOAAALAEQAMAEAHAIQAJAIAFALQAEALAAANQAAAJgCAHQgCAHgDAGQgGALgOAGIANAFQAGAFADAGQAFAHABAHQADAJAAAJQAAAPgGAMQgFAMgJAIQgJAHgMAEQgMAEgNAAQgNAAgLgDg");
	this.shape_12.setTransform(1.6,-56.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhmBpQgMgEgJgHQgKgIgEgLQgGgMgBgPIAfAAQABAJADAGQACAGAGAEQAEAEAGACQAGACAHAAQAHAAAHgDQAGgCAFgEQAEgFADgHQADgGAAgJQAAgIgDgGQgCgHgEgEQgFgFgGgCQgHgDgJAAIgFAAIAAgZIAFAAQAIAAAHgCQAFgCAEgEQAFgFACgGQACgFAAgIQgBgIgCgGQgDgGgDgEQgFgFgGgCQgGgCgGAAQgHAAgGACQgFACgEAEQgEAEgDAGQgDAGAAAHIgfAAQABgOAFgLQAFgKAJgIQAIgHALgEQALgEANAAQAOAAALAEQAMAEAHAIQAJAIAFALQAEALAAANQAAAJgCAHQgCAHgDAGQgGALgOAGIANAFQAGAFADAGQAFAHABAHQADAJAAAJQAAAPgGAMQgFAMgJAIQgJAHgMAEQgMAEgNAAQgNAAgLgDgAAwBqIAuhcQgJAEgLAAQgLAAgLgFQgKgEgIgIQgHgGgEgMQgFgLAAgOQAAgPAFgMQAFgMAIgIQAIgJAMgFQALgEAOAAQAOAAAMAEQAMAFAHAIQAKAIAEAMQAFAMgBAPQABAMgFAOQgEALgHANIgxBjgABEhNQgGACgEAFQgEAFgDAHQgCAHAAAIQAAAIACAHQADAHAEAFQADAFAHADQAGACAHAAQAHAAAHgCQAFgDAFgFQAFgEACgHQACgHAAgJQAAgIgCgHQgCgHgFgFQgFgFgFgCQgHgDgHAAQgHAAgGADg");
	this.shape_13.setTransform(1.6,-56.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWBrIAAgbIBShiIAJgOQACgGAAgIQAAgIgCgGQgCgGgEgEQgFgEgFgCQgGgDgHAAQgGAAgGACQgGACgEAEQgFAEgCAGQgCAGAAAJIgfAAQgBgNAFgMQAFgLAIgIQAJgIALgEQALgEAOAAQAOAAALAEQAMAEAHAIQAJAIAEALQAFALgBAOQAAANgEALQgFAJgLANIhCBQIBWAAIAAAbgAg6BrIAAggIhWAAIAAgcIBLiXIAhAAIhLCXIA1AAIAAgwIAeAAIAAAwIAWAAIAAAcIgWAAIAAAgg");
	this.shape_14.setTransform(1.5,-56.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA4BnQgLgFgIgHQgIgIgEgLQgDgJgBgNIAfAAQACAPAHAHQAEAEAFACQAGACAHAAQAHAAAFgCQAGgDAEgEQAGgGADgKQABgIAAgNIgBgSQgCgIgDgGQgEgEgGgDQgGgEgJAAQgMAAgIAGQgHADgDAIIgcAAIAAhyIBzAAIAAAbIhXAAIAAA4QAFgFAJgEQAJgDAMAAQAMAAAKAEQAKADAGAHQAGAGAEAHQAEAGACAGQADAMAAASQAAATgDAMQgCAHgEAGQgDAHgGAGQgIAHgKAFQgMAEgPAAQgPAAgMgEgAg6BpIAAggIhXAAIAAgcIBMiXIAhAAIhLCXIA1AAIAAgwIAdAAIAAAwIAXAAIAAAcIgXAAIAAAgg");
	this.shape_15.setTransform(1.5,-56.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA3BoQgMgEgIgJQgKgIgFgLQgFgMAAgOQAAgJADgIQACgIAEgGQAIgLANgGQgMgHgGgLQgFgGgBgHQgDgHABgIQAAgNAEgLQAFgLAJgIQAIgIALgEQAMgEANAAQANAAAMAEQAKAEAJAIQAJAIAEALQAFALAAANQAAAIgCAHQgCAHgDAGQgHALgLAHQANAGAGALQAFAGADAIQACAIAAAJQAAAOgFAMQgGALgJAIQgJAJgLAEQgNAEgNAAQgOAAgMgEgABDANQgHACgEAFQgFAFgDAGQgCAHAAAHQAAAIACAGQADAHAFAFQAEAEAHADQAGADAIAAQAHAAAGgDQAHgDAFgEQAFgFACgHQADgGAAgIQAAgHgDgHQgCgGgFgFQgFgFgHgCQgGgDgHAAQgIAAgGADgABEhNQgGACgEAFQgEAEgCAGQgDAGAAAHQAAAHADAGQACAGAEAEQAEAFAGACQAGACAHAAQAHAAAFgCQAHgCADgFQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgDgFgHgCQgFgDgHAAQgHAAgGADgAg8BqIAAggIhWAAIAAgcIBMiXIAgAAIhLCXIA1AAIAAgwIAeAAIAAAwIAXAAIAAAcIgXAAIAAAgg");
	this.shape_16.setTransform(1.6,-56.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhXBnQgLgFgIgHQgIgIgEgLQgDgJgBgNIAeAAQADAPAGAHQAFAEAFACQAFACAIAAQAGAAAGgCQAGgDAEgEQAGgGACgKQACgIAAgNIgCgSQgBgIgDgGQgEgEgGgDQgGgEgJAAQgNAAgHAGQgHADgEAIIgcAAIAAhyIB0AAIAAAbIhYAAIAAA4QAGgFAJgEQAJgDALAAQANAAAKAEQAKADAGAHQAGAGAEAHQADAGACAGQACAMAAASQAAATgCAMQgCAHgDAGQgEAHgFAGQgIAHgKAFQgMAEgPAAQgPAAgMgEgABdBpIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_17.setTransform(0.1,-56.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhtBnQgLgFgIgHQgHgIgEgLQgDgJgCgNIAfAAQACAPAHAHQAEAEAGACQAFACAHAAQAHAAAGgCQAFgDAFgEQAFgGADgKQABgIABgNIgCgSQgCgIgDgGQgEgEgGgDQgFgEgKAAQgMAAgIAGQgHADgDAIIgcAAIAAhyIB0AAIAAAbIhYAAIAAA4QAGgFAJgEQAIgDAMAAQANAAAJAEQAKADAGAHQAHAGADAHQAEAGACAGQADAMAAASQAAATgDAMQgCAHgEAGQgDAHgGAGQgIAHgKAFQgMAEgPAAQgOAAgNgEgABcBpIAAggIhXAAIAAgcIBMiXIAhAAIhLCXIA1AAIAAgwIAdAAIAAAwIAYAAIAAAcIgYAAIAAAgg");
	this.shape_18.setTransform(2.2,-56.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhrBnQgLgFgIgHQgIgIgEgLQgDgJgBgNIAfAAQACAPAHAHQAEAEAFACQAGACAHAAQAHAAAFgCQAGgDAEgEQAGgGADgKQABgIAAgNIgBgSQgCgIgDgGQgEgEgGgDQgGgEgJAAQgMAAgIAGQgHADgDAIIgcAAIAAhyIBzAAIAAAbIhXAAIAAA4QAFgFAJgEQAJgDAMAAQAMAAAKAEQAKADAGAHQAGAGAEAHQAEAGACAGQADAMAAASQAAATgDAMQgCAHgEAGQgDAHgGAGQgIAHgKAFQgMAEgPAAQgPAAgMgEgAAmBpIBIi4IhBAAIAAAiIgdAAIAAg9IB/AAIAAAbIhIC4g");
	this.shape_19.setTransform(2,-56.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA4BoQgLgEgIgIQgKgIgEgLQgEgMgBgOIAAhdQABgOAEgMQAEgLAKgIQAIgIALgEQALgEANAAQANAAAKAEQAMAEAJAIQAIAIAEALQAFAMABAOIAABdQgBAOgFAMQgEALgIAIQgJAIgMAEQgKAEgNAAQgNAAgLgEgABDhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAFADAIAAQAHAAAGgDQAFgCAEgFQAFgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgFgEQgEgFgFgCQgGgDgHAAQgIAAgFADgAhnBoQgMgFgIgIQgJgIgEgMQgEgMgBgPQAAgMAFgOIALgYIAxhjIAhAAIguBcQAHgEAMAAQALAAAKAFQAKAEAIAIQAIAGAEALQAEAMAAAOQAAAOgEANQgFAMgIAIQgJAJgLAEQgLAFgPAAQgNAAgMgEgAhbAJQgGADgEAEQgEAFgCAHQgDAHAAAJQAAAIADAHQACAHAEAFQAEAFAGACQAGADAHAAQAIAAAGgDQAGgCAEgFQAFgFABgHQADgHAAgIQAAgIgCgHQgCgHgEgFQgFgFgGgDQgGgCgIAAQgHAAgGACg");
	this.shape_20.setTransform(1.7,-56.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA1BpQgMgEgJgHQgKgIgFgLQgFgMgBgPIAfAAQAAAJADAGQAEAGAEAEQAFAEAGACQAGACAHAAQAIAAAGgDQAGgCAFgEQAEgFADgHQADgGAAgJQAAgIgDgGQgCgHgEgEQgEgFgHgCQgHgDgJAAIgFAAIAAgZIAFAAQAJAAAFgCQAHgCADgEQAFgFACgGQABgFAAgIQABgIgDgGQgDgGgEgEQgEgFgGgCQgFgCgHAAQgHAAgGACQgFACgFAEQgDAEgDAGQgCAGgBAHIgfAAQABgOAFgLQAFgKAJgIQAIgHALgEQALgEANAAQANAAAMAEQAMAEAIAIQAIAIAFALQAEALAAANQAAAJgCAHQgCAHgDAGQgGALgNAGIAMAFQAGAFADAGQAFAHABAHQACAJABAJQgBAPgFAMQgFAMgJAIQgIAHgNAEQgLAEgOAAQgNAAgLgDgAhoBoQgMgFgIgIQgJgIgEgMQgEgMgBgPQAAgMAFgOIALgYIAxhjIAhAAIguBcQAHgEAMAAQALAAAKAFQAKAEAIAIQAIAGAEALQAEAMAAAOQAAAOgEANQgFAMgIAIQgJAJgLAEQgLAFgPAAQgNAAgMgEgAhcAJQgGADgEAEQgEAFgCAHQgDAHAAAJQAAAIADAHQACAHAEAFQAEAFAGACQAGADAHAAQAIAAAGgDQAGgCAEgFQAFgFABgHQADgHAAgIQAAgIgCgHQgCgHgEgFQgFgFgGgDQgGgCgIAAQgHAAgGACg");
	this.shape_21.setTransform(1.8,-56.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA2BnQgMgFgIgIQgJgIgEgMQgFgMAAgPQAAgMAEgOIAMgYIAxhjIAgAAIguBcQAIgEALAAQAMAAAKAFQAKAEAIAIQAIAGAEALQAEAMAAAOQAAAOgEANQgFAMgIAIQgJAJgLAEQgMAFgOAAQgNAAgMgEgABCAIQgGADgEAEQgFAFgCAHQgCAHAAAJQAAAIACAHQACAHAFAFQAEAFAGACQAGADAHAAQAHAAAGgDQAGgCAFgFQAEgFACgHQADgHAAgIQAAgIgCgHQgDgHgEgFQgEgFgGgDQgGgCgIAAQgHAAgGACgAhoBnQgLgFgJgIQgIgIgFgMQgEgMAAgPQAAgMAEgOIALgYIAxhjIAhAAIguBcQAIgEALAAQALAAALAFQAKAEAHAIQAIAGAEALQAFAMAAAOQAAAOgFANQgEAMgJAIQgIAJgMAEQgLAFgOAAQgOAAgMgEgAhcAIQgGADgEAEQgEAFgCAHQgDAHAAAJQAAAIADAHQACAHAEAFQAEAFAGACQAGADAIAAQAHAAAGgDQAGgCAEgFQAFgFACgHQACgHAAgIQAAgIgCgHQgCgHgEgFQgFgFgGgDQgGgCgHAAQgIAAgGACg");
	this.shape_22.setTransform(1.8,-56.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhoBoQgLgFgJgIQgIgIgFgMQgEgMAAgPQAAgMAEgOIALgYIAxhjIAhAAIguBcQAIgEALAAQALAAALAFQAKAEAHAIQAIAGAEALQAFAMAAAOQAAAOgFANQgEAMgJAIQgIAJgMAEQgLAFgOAAQgOAAgMgEgAhcAJQgGADgEAEQgEAFgCAHQgDAHAAAJQAAAIADAHQACAHAEAFQAEAFAGACQAGADAIAAQAHAAAGgDQAGgCAEgFQAFgFACgHQACgHAAgIQAAgIgCgHQgCgHgEgFQgFgFgGgDQgGgCgHAAQgIAAgGACgAAtBqIAuhcQgIAEgLAAQgMAAgKgFQgKgEgIgIQgHgGgFgMQgEgLAAgOQAAgPAFgMQAEgMAJgIQAIgJAMgFQALgEAOAAQAOAAAMAEQALAFAIAIQAJAIAFAMQAEAMAAAPQAAAMgEAOQgEALgIANIgwBjgABChNQgGACgEAFQgFAFgCAHQgCAHAAAIQAAAIACAHQACAHAEAFQAEAFAGADQAHACAHAAQAHAAAGgCQAGgDAFgFQAEgEACgHQADgHAAgJQAAgIgDgHQgCgHgEgFQgFgFgGgCQgGgDgHAAQgHAAgGADg");
	this.shape_23.setTransform(1.8,-56.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARBrIAAgbIBShiIAJgOQADgGAAgIQAAgIgCgGQgCgGgEgEQgFgEgFgCQgGgDgHAAQgHAAgFACQgGACgEAEQgFAEgCAGQgDAGAAAJIgfAAQAAgNAFgMQAFgLAIgIQAIgIAMgEQALgEAOAAQANAAAMAEQALAEAIAIQAIAIAFALQAEALAAAOQAAANgFALQgEAJgLANIhDBQIBXAAIAAAbgAh2BrIBIi4IhBAAIAAAiIgdAAIAAg9IB/AAIAAAbIhIC4g");
	this.shape_24.setTransform(1.9,-56.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA0BnQgLgFgIgHQgIgIgEgLQgDgJgBgNIAeAAQADAPAGAHQAFAEAFACQAFACAIAAQAGAAAGgCQAGgDAEgEQAGgGACgKQACgIAAgNIgCgSQgBgIgDgGQgEgEgGgDQgGgEgJAAQgNAAgHAGQgIADgCAIIgcAAIAAhyIBzAAIAAAbIhXAAIAAA4QAFgFAJgEQAJgDAMAAQAMAAAKAEQAJADAHAHQAGAGAEAHQADAGADAGQADAMAAASQAAATgDAMQgDAHgDAGQgEAHgFAGQgIAHgKAFQgNAEgOAAQgPAAgMgEgAh2BpIBIi4IhBAAIAAAiIgeAAIAAg9IB/AAIAAAbIhHC4g");
	this.shape_25.setTransform(1.9,-56.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAzBoQgMgEgJgJQgJgIgFgLQgFgMAAgOQAAgJACgIQADgIAEgGQAHgLANgGQgLgHgHgLQgEgGgBgHQgDgHAAgIQAAgNAFgLQAFgLAIgIQAJgIALgEQAMgEANAAQAMAAAMAEQALAEAJAIQAIAIAFALQAFALAAANQAAAIgCAHQgCAHgEAGQgGALgMAHQANAGAHALQAFAGACAIQADAIAAAJQAAAOgGAMQgFALgJAIQgJAJgMAEQgMAEgNAAQgOAAgMgEgAA/ANQgHACgEAFQgFAFgDAGQgDAHAAAHQAAAIADAGQADAHAFAFQAEAEAHADQAGADAIAAQAHAAAGgDQAHgDAEgEQAFgFADgHQADgGAAgIQAAgHgDgHQgDgGgFgFQgEgFgHgCQgGgDgHAAQgIAAgGADgABAhNQgGACgEAFQgEAEgDAGQgCAGAAAHQAAAHACAGQADAGAEAEQAEAFAGACQAGACAHAAQAGAAAGgCQAGgCAEgFQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgEgFgGgCQgGgDgGAAQgHAAgGADgAh3BqIBIi4IhBAAIAAAiIgeAAIAAg9IB/AAIAAAbIhHC4g");
	this.shape_26.setTransform(2,-56.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhVBoQgMgEgIgJQgJgIgGgLQgEgMAAgOQgBgJADgIQACgIAFgGQAHgLANgGQgMgHgGgLQgEgGgCgHQgCgHAAgIQAAgNAFgLQAFgLAIgIQAIgIAMgEQAMgEAMAAQANAAAMAEQALAEAIAIQAJAIAFALQACALABANQAAAIgCAHQAAAHgEAGQgGALgMAHQANAGAHALQACAGADAIQACAIAAAJQABAOgGAMQgDALgJAIQgJAJgMAEQgMAEgOAAQgOAAgMgEgAhIANQgHACgFAFQgFAFgCAGQgDAHAAAHQAAAIADAGQACAHAFAFQAFAEAHADQAGADAHAAQAIAAAGgDQAHgDAEgEQAFgFADgHQACgGAAgIQAAgHgCgHQgDgGgFgFQgEgFgHgCQgGgDgIAAQgHAAgGADgAhHhNQgGACgEAFQgEAEgDAGQgCAGAAAHQAAAHACAGQADAGAEAEQADAFAHACQAGACAGAAQAHAAAGgCQAGgCAEgFQAEgEADgGQACgGAAgHQAAgHgCgGQgDgGgEgEQgEgFgGgCQgGgDgHAAQgGAAgGADgABfBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_27.setTransform(-0.2,-56.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhqBoQgMgEgJgJQgJgIgFgLQgFgMAAgOQAAgJADgIQACgIAEgGQAHgLAOgGQgMgHgGgLQgEgGgCgHQgCgHAAgIQAAgNAEgLQAFgLAJgIQAIgIAMgEQALgEANAAQAMAAAMAEQALAEAJAIQAJAIAEALQAFALAAANQAAAIgCAHQgCAHgDAGQgHALgLAHQAMAGAIALQAEAGADAIQACAIAAAJQAAAOgGAMQgFALgIAIQgKAJgMAEQgLAEgOAAQgOAAgMgEgAheANQgGACgFAFQgFAFgDAGQgCAHAAAHQAAAIACAGQADAHAFAFQAFAEAGADQAHADAHAAQAHAAAGgDQAHgDAEgEQAFgFADgHQADgGAAgIQAAgHgDgHQgDgGgFgFQgEgFgHgCQgGgDgHAAQgHAAgHADgAhdhNQgGACgEAFQgEAEgDAGQgCAGAAAHQAAAHACAGQADAGAEAEQAEAFAGACQAGACAHAAQAHAAAFgCQAGgCAEgFQAFgEADgGQABgGAAgHQAAgHgBgGQgDgGgFgEQgEgFgGgCQgFgDgHAAQgHAAgGADgABeBqIAAggIhWAAIAAgcIBLiXIAiAAIhMCXIA1AAIAAgwIAeAAIAAAwIAXAAIAAAcIgXAAIAAAgg");
	this.shape_28.setTransform(2,-56.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhoBoQgMgEgJgJQgJgIgFgLQgFgMAAgOQAAgJACgIQADgIAEgGQAHgLANgGQgLgHgHgLQgEgGgBgHQgDgHAAgIQAAgNAFgLQAFgLAIgIQAJgIALgEQAMgEANAAQAMAAAMAEQALAEAJAIQAIAIAFALQAFALAAANQAAAIgCAHQgCAHgEAGQgGALgMAHQANAGAHALQAFAGACAIQADAIAAAJQAAAOgGAMQgFALgJAIQgJAJgMAEQgMAEgNAAQgOAAgMgEgAhcANQgHACgEAFQgFAFgDAGQgDAHAAAHQAAAIADAGQADAHAFAFQAEAEAHADQAGADAIAAQAHAAAGgDQAHgDAEgEQAFgFADgHQADgGAAgIQAAgHgDgHQgDgGgFgFQgEgFgHgCQgGgDgHAAQgIAAgGADgAhbhNQgGACgEAFQgEAEgDAGQgCAGAAAHQAAAHACAGQADAGAEAEQAEAFAGACQAGACAHAAQAGAAAGgCQAGgCAEgFQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgEgFgGgCQgGgDgGAAQgHAAgGADgAApBqIBIi4IhBAAIAAAiIgeAAIAAg9IB/AAIAAAbIhHC4g");
	this.shape_29.setTransform(1.8,-56.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA4BoQgLgEgIgIQgKgIgEgLQgEgMgBgOIAAhdQABgOAEgMQAEgLAKgIQAIgIALgEQALgEANAAQANAAAKAEQAMAEAJAIQAIAIAEALQAFAMABAOIAABdQgBAOgFAMQgEALgIAIQgJAIgMAEQgKAEgNAAQgNAAgLgEgABDhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAFADAIAAQAHAAAGgDQAFgCAEgFQAFgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgFgEQgEgFgFgCQgGgDgHAAQgIAAgFADgAhwBqIAuhcQgHAEgMAAQgLAAgKgFQgLgEgHgIQgIgGgEgMQgFgLAAgOQABgPAEgMQAEgMAJgIQAIgJAMgFQAMgEANAAQAOAAAMAEQAMAFAHAIQAKAIAEAMQAEAMAAAPQAAAMgEAOQgDALgJANIgwBjgAhbhNQgGACgEAFQgEAFgCAHQgDAHAAAIQAAAIACAHQACAHAEAFQAFAFAGADQAGACAHAAQAIAAAGgCQAGgDAEgFQAFgEABgHQADgHAAgJQAAgIgDgHQgBgHgFgFQgEgFgGgCQgGgDgIAAQgHAAgGADg");
	this.shape_30.setTransform(1.7,-56.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA1BpQgMgEgJgHQgKgIgFgLQgFgMgBgPIAfAAQAAAJADAGQAEAGAEAEQAFAEAGACQAGACAHAAQAIAAAGgDQAGgCAFgEQAEgFADgHQADgGAAgJQAAgIgDgGQgCgHgEgEQgEgFgHgCQgHgDgJAAIgFAAIAAgZIAFAAQAJAAAFgCQAHgCADgEQAFgFACgGQABgFAAgIQABgIgDgGQgDgGgEgEQgEgFgGgCQgFgCgHAAQgHAAgGACQgFACgFAEQgDAEgDAGQgCAGgBAHIgfAAQABgOAFgLQAFgKAJgIQAIgHALgEQALgEANAAQANAAAMAEQAMAEAIAIQAIAIAFALQAEALAAANQAAAJgCAHQgCAHgDAGQgGALgNAGIAMAFQAGAFADAGQAFAHABAHQACAJABAJQgBAPgFAMQgFAMgJAIQgIAHgNAEQgLAEgOAAQgNAAgLgDgAhxBqIAuhcQgHAEgMAAQgLAAgKgFQgLgEgHgIQgIgGgEgMQgFgLAAgOQABgPAEgMQAEgMAJgIQAIgJAMgFQAMgEANAAQAOAAAMAEQAMAFAHAIQAKAIAEAMQAEAMAAAPQAAAMgEAOQgDALgJANIgwBjgAhchNQgGACgEAFQgEAFgCAHQgDAHAAAIQAAAIACAHQACAHAEAFQAFAFAGADQAGACAHAAQAIAAAGgCQAGgDAEgFQAFgEABgHQADgHAAgJQAAgIgDgHQgBgHgFgFQgEgFgGgCQgGgDgIAAQgHAAgGADg");
	this.shape_31.setTransform(1.8,-56.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA2BoQgMgFgIgIQgJgIgEgMQgFgMAAgPQAAgMAEgOIAMgYIAxhjIAgAAIguBcQAIgEALAAQAMAAAKAFQAKAEAIAIQAIAGAEALQAEAMAAAOQAAAOgEANQgFAMgIAIQgJAJgLAEQgMAFgOAAQgNAAgMgEgABCAJQgGADgEAEQgFAFgCAHQgCAHAAAJQAAAIACAHQACAHAFAFQAEAFAGACQAGADAHAAQAHAAAGgDQAGgCAFgFQAEgFACgHQADgHAAgIQAAgIgCgHQgDgHgEgFQgEgFgGgDQgGgCgIAAQgHAAgGACgAhwBqIAuhcQgIAEgMAAQgLAAgKgFQgLgEgHgIQgIgGgEgMQgEgLAAgOQAAgPAEgMQAFgMAIgIQAJgJALgFQAMgEAOAAQANAAAMAEQAMAFAIAIQAJAIAEAMQAFAMAAAPQAAAMgFAOQgDALgIANIgxBjgAhchNQgGACgEAFQgEAFgCAHQgDAHAAAIQAAAIACAHQADAHAEAFQAEAFAGADQAGACAIAAQAHAAAGgCQAGgDAEgFQAFgEACgHQACgHAAgJQAAgIgCgHQgCgHgFgFQgEgFgGgCQgGgDgHAAQgIAAgGADg");
	this.shape_32.setTransform(1.8,-56.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAtBrIAuhcQgIAEgLAAQgMAAgKgFQgKgEgIgIQgHgGgFgMQgEgLAAgOQAAgPAFgMQAEgMAJgIQAIgJAMgFQALgEAOAAQAOAAAMAEQALAFAIAIQAJAIAFAMQAEAMAAAPQAAAMgEAOQgEALgIANIgwBjgABChMQgGACgEAFQgFAFgCAHQgCAHAAAIQAAAIACAHQACAHAEAFQAEAFAGADQAHACAHAAQAHAAAGgCQAGgDAFgFQAEgEACgHQADgHAAgJQAAgIgDgHQgCgHgEgFQgFgFgGgCQgGgDgHAAQgHAAgGADgAhwBrIAuhcQgIAEgMAAQgLAAgKgFQgLgEgHgIQgIgGgEgMQgEgLAAgOQAAgPAEgMQAFgMAIgIQAJgJALgFQAMgEAOAAQANAAAMAEQAMAFAIAIQAJAIAEAMQAFAMAAAPQAAAMgFAOQgDALgIANIgxBjgAhchMQgGACgEAFQgEAFgCAHQgDAHAAAIQAAAIACAHQADAHAEAFQAEAFAGADQAGACAIAAQAHAAAGgCQAGgDAEgFQAFgEACgHQACgHAAgJQAAgIgCgHQgCgHgFgFQgEgFgGgCQgGgDgHAAQgIAAgGADg");
	this.shape_33.setTransform(1.8,-56.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgfBoQgLgEgJgIQgJgIgEgLQgEgMgBgOIAAhdQABgOAEgMQAEgLAJgIQAJgIALgEQALgEANAAQAKAAAMAEQALAEAJAIQAIAIAEALQAGAMAAAOIAABdQAAAOgGAMQgEALgIAIQgJAIgLAEQgMAEgKAAQgNAAgLgEgAgUhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAFADAIAAQAHAAAEgDQAFgCAEgFQAFgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgFgEQgEgFgFgCQgEgDgHAAQgIAAgFADgABaBqIAAgbIBRhiIAJgOQADgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgDAGAAAJIgeAAQAAgNAEgMQAFgLAIgIQAJgIALgEQALgEAOAAQANAAAMAEQALAEAJAIQAHAIAFALQAFALAAAOQgBANgFALQgDAJgMANIhCBQIBXAAIAAAbgAiqBqIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_34.setTransform(2.6,-56.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AB8BoQgLgFgIgHQgIgIgEgLQgDgJgBgNIAfAAQACAPAHAHQAEAEAFACQAGACAHAAQAHAAAFgCQAGgDAEgEQAGgGADgKQABgIAAgNIgBgSQgCgIgDgGQgEgEgGgDQgGgEgJAAQgMAAgIAGQgHADgDAIIgcAAIAAhyIBzAAIAAAbIhXAAIAAA4QAFgFAJgEQAJgDAMAAQAMAAAKAEQAKADAGAHQAGAGAEAHQAEAGACAGQADAMAAASQAAATgDAMQgCAHgEAGQgDAHgGAGQgIAHgKAFQgMAEgPAAQgPAAgMgEgAgfBoQgMgEgIgIQgJgIgEgLQgFgMAAgOIAAhdQAAgOAFgMQAEgLAJgIQAIgIAMgEQALgEANAAQAKAAALAEQAMAEAIAIQAJAIAEALQAFAMAAAOIAABdQAAAOgFAMQgEALgJAIQgIAIgMAEQgLAEgKAAQgNAAgLgEgAgUhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAFADAIAAQAHAAAEgDQAFgCAEgFQAFgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgFgEQgEgFgFgCQgEgDgHAAQgIAAgFADgAirBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_35.setTransform(2.6,-56.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AB7BoQgMgEgIgJQgKgIgFgLQgFgMAAgOQAAgJACgIQADgIAEgGQAIgLAMgGQgLgHgHgLQgDgGgCgHQgCgHgBgIQAAgNAGgLQAEgLAIgIQAJgIALgEQAMgEANAAQANAAAMAEQALAEAIAIQAIAIAGALQAEALAAANQAAAIgCAHQgCAHgEAGQgGALgMAHQAOAGAGALQAFAGACAIQADAIAAAJQAAAOgFAMQgFALgKAIQgIAJgMAEQgMAEgOAAQgOAAgMgEgACHANQgGACgFAFQgFAFgCAGQgEAHAAAHQAAAIAEAGQACAHAFAFQAFAEAGADQAHADAHAAQAHAAAHgDQAGgDAFgEQAEgFADgHQADgGAAgIQAAgHgDgHQgDgGgEgFQgFgFgGgCQgHgDgHAAQgHAAgHADgACIhNQgGACgEAFQgEAEgCAGQgCAGAAAHQAAAHACAGQACAGAEAEQAEAFAGACQAGACAHAAQAGAAAHgCQAFgCAFgFQAEgEACgGQADgGAAgHQAAgHgDgGQgCgGgEgEQgFgFgFgCQgHgDgGAAQgHAAgGADgAggBoQgMgEgIgIQgJgIgFgLQgEgMAAgOIAAhdQAAgOAEgMQAFgLAJgIQAIgIAMgEQALgEAMAAQALAAALAEQALAEAJAIQAIAIAFALQAFAMAAAOIAABdQAAAOgFAMQgFALgIAIQgJAIgLAEQgLAEgLAAQgMAAgLgEgAgWhNQgFACgEAFQgEAEgDAHQgCAGAAAIIAABbQAAAIACAGQADAHAEAEQAEAFAFACQAGADAHAAQAHAAAFgDQAFgCAEgFQAFgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgFgEQgEgFgFgCQgFgDgHAAQgHAAgGADgAisBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_36.setTransform(2.8,-56.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AClBqIAAiyIgqAlIAAgiIAqgkIAeAAIAADTgAAFBqIAAiyIgoAlIAAgiIAogkIAfAAIAADTgAiYBqIAAiyIgqAlIAAgiIAqgkIAeAAIAADTg");
	this.shape_37.setTransform(0.8,-56.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ACkBqIAAggIhWAAIAAgcIBLiXIAhAAIhLCXIA1AAIAAgwIAeAAIAAAwIAXAAIAAAcIgXAAIAAAggAgOBqIAAiyIgqAlIAAgiIAqgkIAcAAIAADTgAiuBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_38.setTransform(2.9,-56.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("ABvBqIBIi4IhBAAIAAAiIgeAAIAAg9IB/AAIAAAbIhHC4gAgMBqIAAiyIgrAlIAAgiIArgkIAcAAIAADTgAisBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_39.setTransform(2.8,-56.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AB/BoQgLgEgIgIQgJgIgFgLQgEgMAAgOIAAhdQAAgOAEgMQAFgLAJgIQAIgIALgEQALgEANAAQANAAALAEQALAEAJAIQAIAIAFALQAFAMAAAOIAABdQAAAOgFAMQgFALgIAIQgJAIgLAEQgLAEgNAAQgNAAgLgEgACKhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAGADAHAAQAHAAAGgDQAGgCAEgFQAEgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgEgEQgEgFgGgCQgGgDgHAAQgHAAgGADgAhDBqIAAgbIBQhiIAJgOQACgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgFAAQgGAAgGACQgGACgEAEQgEAEgDAGQgCAGAAAJIgfAAQAAgNAEgMQAFgLAIgIQAJgIALgEQAMgEANAAQAMAAALAEQAMAEAIAIQAIAIAEALQAFALAAAOQAAANgFALQgEAJgLANIhBBQIBVAAIAAAbgAiqBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_40.setTransform(2.5,-56.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AB8BpQgMgEgJgHQgJgIgFgLQgGgMAAgPIAeAAQABAJADAGQADAGAFAEQAEAEAHACQAFACAHAAQAIAAAGgDQAGgCAFgEQAFgFACgHQADgGAAgJQAAgIgCgGQgCgHgFgEQgEgFgHgCQgHgDgJAAIgFAAIAAgZIAFAAQAJAAAGgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgDgGQgCgGgEgEQgFgFgGgCQgFgCgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgCAGgBAHIgfAAQABgOAFgLQAFgKAJgIQAIgHALgEQALgEANAAQAOAAALAEQAMAEAIAIQAIAIAFALQAEALAAANQAAAJgBAHQgCAHgEAGQgGALgNAGIAMAFQAGAFADAGQAFAHABAHQADAJAAAJQAAAPgGAMQgEAMgKAIQgIAHgMAEQgMAEgOAAQgNAAgLgDgAhEBqIAAgbIBQhiIAJgOQACgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgFgDgGAAQgGAAgGACQgGACgEAEQgEAEgDAGQgCAGAAAJIgfAAQAAgNAEgMQAFgLAIgIQAJgIALgEQAMgEANAAQAMAAALAEQAMAEAIAIQAIAIAEALQAFALAAAOQAAANgFALQgEAJgLANIhBBQIBVAAIAAAbgAirBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_41.setTransform(2.6,-56.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AB9BoQgMgFgIgIQgJgIgEgMQgFgMABgPQAAgMADgOIAMgYIAxhjIAgAAIguBcQAJgEAKAAQAMAAALAFQAKAEAHAIQAIAGAEALQAFAMAAAOQAAAOgFANQgFAMgIAIQgIAJgMAEQgLAFgOAAQgOAAgMgEgACJAJQgGADgEAEQgFAFgCAHQgCAHAAAJQAAAIACAHQACAHAFAFQAEAFAGACQAGADAIAAQAHAAAFgDQAGgCAFgFQAEgFACgHQADgHAAgIQAAgIgCgHQgDgHgEgFQgEgFgGgDQgGgCgHAAQgIAAgGACgAhEBqIAAgbIBQhiIAJgOQADgGAAgIQgBgIgCgGQgCgGgDgEQgFgEgFgCQgGgDgGAAQgGAAgFACQgHACgDAEQgFAEgCAGQgDAGAAAJIgfAAQAAgNAFgMQAFgLAHgIQAJgIALgEQAMgEANAAQAMAAAMAEQALAEAIAIQAIAIAEALQAFALAAAOQAAANgFALQgEAJgLANIhBBQIBVAAIAAAbgAiqBqIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_42.setTransform(2.6,-56.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AB1BrIAthcQgIAEgLAAQgMAAgKgFQgKgEgIgIQgHgGgFgMQgDgLAAgOQgBgPAFgMQAEgMAJgIQAIgJAMgFQAMgEAOAAQANAAAMAEQALAFAJAIQAIAIAFAMQAFAMAAAPQAAAMgFAOQgEALgHANIgxBjgACJhMQgGACgEAFQgFAFgCAHQgCAHAAAIQAAAIACAHQADAHAEAFQAEAFAFADQAHACAIAAQAHAAAFgCQAGgDAFgFQAEgEACgHQADgHAAgJQAAgIgDgHQgCgHgEgFQgFgFgGgCQgFgDgHAAQgIAAgGADgAhEBrIAAgbIBQhiIAJgOQADgGAAgIQgBgIgCgGQgCgGgDgEQgFgEgFgCQgGgDgGAAQgGAAgFACQgHACgDAEQgFAEgCAGQgDAGAAAJIgfAAQAAgNAFgMQAFgLAHgIQAJgIALgEQAMgEANAAQAMAAAMAEQALAEAIAIQAIAIAEALQAFALAAAOQAAANgFALQgEAJgLANIhBBQIBVAAIAAAbgAiqBrIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_43.setTransform(2.6,-56.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgiBpQgLgEgJgHQgJgIgGgLQgFgMgBgPIAfAAQAAAJADAGQADAGAFAEQAFAEAGACQAGACAHAAQAHAAAFgDQAGgCAFgEQAEgFADgHQADgGAAgJQAAgIgDgGQgCgHgEgEQgFgFgGgCQgFgDgJAAIgFAAIAAgZIAFAAQAJAAADgCQAHgCADgEQAFgFACgGQABgFAAgIQABgIgDgGQgCgGgFgEQgEgFgGgCQgDgCgHAAQgHAAgGACQgFACgFAEQgEAEgCAGQgCAGgBAHIgfAAQABgOAFgLQAFgKAJgIQAIgHALgEQALgEANAAQALAAAMAEQALAEAJAIQAIAIAEALQAFALAAANQAAAJgCAHQgBAHgEAGQgGALgNAGIAMAFQAFAFAEAGQAEAHACAHQACAJAAAJQAAAPgFAMQgEAMgKAIQgJAHgLAEQgMAEgMAAQgNAAgMgDgABaBqIAAgbIBRhiIAJgOQADgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgDAGAAAJIgeAAQAAgNAEgMQAFgLAIgIQAJgIALgEQALgEAOAAQANAAAMAEQALAEAJAIQAHAIAFALQAFALAAAOQgBANgFALQgDAJgMANIhCBQIBXAAIAAAbgAiqBqIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_44.setTransform(2.6,-56.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AB8BoQgLgFgIgHQgIgIgEgLQgDgJgBgNIAfAAQACAPAHAHQAEAEAFACQAGACAHAAQAHAAAFgCQAGgDAEgEQAGgGADgKQABgIAAgNIgBgSQgCgIgDgGQgEgEgGgDQgGgEgJAAQgMAAgIAGQgHADgDAIIgcAAIAAhyIBzAAIAAAbIhXAAIAAA4QAFgFAJgEQAJgDAMAAQAMAAAKAEQAKADAGAHQAGAGAEAHQAEAGACAGQADAMAAASQAAATgDAMQgCAHgEAGQgDAHgGAGQgIAHgKAFQgMAEgPAAQgPAAgMgEgAgiBpQgMgEgIgHQgKgIgFgLQgFgMgBgPIAfAAQAAAJADAGQADAGAFAEQAFAEAGACQAGACAHAAQAHAAAFgDQAGgCAFgEQAEgFADgHQADgGAAgJQAAgIgDgGQgCgHgEgEQgFgFgGgCQgFgDgJAAIgFAAIAAgZIAFAAQAIAAAEgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgCgGQgDgGgEgEQgEgFgGgCQgEgCgGAAQgHAAgGACQgFACgFAEQgEAEgCAGQgDAGAAAHIgfAAQABgOAFgLQAFgKAIgIQAJgHALgEQALgEANAAQALAAAMAEQALAEAIAIQAJAIAEALQAFALAAANQAAAJgCAHQgCAHgDAGQgHALgNAGIANAFQAFAFAEAGQAEAHACAHQACAJAAAJQAAAPgFAMQgFAMgJAIQgJAHgMAEQgMAEgLAAQgNAAgMgDgAirBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_45.setTransform(2.6,-56.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AB7BoQgMgEgIgJQgKgIgFgLQgFgMAAgOQAAgJACgIQADgIAEgGQAIgLAMgGQgLgHgHgLQgDgGgCgHQgCgHgBgIQAAgNAGgLQAEgLAIgIQAJgIALgEQAMgEANAAQANAAAMAEQALAEAIAIQAIAIAGALQAEALAAANQAAAIgCAHQgCAHgEAGQgGALgMAHQAOAGAGALQAFAGACAIQADAIAAAJQAAAOgFAMQgFALgKAIQgIAJgMAEQgMAEgOAAQgOAAgMgEgACHANQgGACgFAFQgFAFgCAGQgEAHAAAHQAAAIAEAGQACAHAFAFQAFAEAGADQAHADAHAAQAHAAAHgDQAGgDAFgEQAEgFADgHQADgGAAgIQAAgHgDgHQgDgGgEgFQgFgFgGgCQgHgDgHAAQgHAAgHADgACIhNQgGACgEAFQgEAEgCAGQgCAGAAAHQAAAHACAGQACAGAEAEQAEAFAGACQAGACAHAAQAGAAAHgCQAFgCAFgFQAEgEACgGQADgGAAgHQAAgHgDgGQgCgGgEgEQgFgFgFgCQgHgDgGAAQgHAAgGADgAgjBpQgMgEgJgHQgJgIgFgLQgGgMAAgPIAeAAQABAJADAGQADAGAFAEQAEAEAHACQAGACAGAAQAIAAAFgDQAGgCAEgEQAFgFADgHQACgGAAgJQABgIgDgGQgCgHgFgEQgEgFgGgCQgGgDgJAAIgEAAIAAgZIAEAAQAJAAAEgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgDgGQgCgGgEgEQgEgFgGgCQgEgCgHAAQgGAAgGACQgFACgFAEQgEAEgDAGQgCAGAAAHIggAAQACgOAFgLQAEgKAJgIQAJgHALgEQAKgEANAAQAMAAALAEQAMAEAIAIQAIAIAFALQAEALAAANQABAJgCAHQgCAHgEAGQgGALgNAGIANAFQAFAFAEAGQAEAHABAHQADAJAAAJQAAAPgFAMQgFAMgKAIQgIAHgMAEQgMAEgMAAQgNAAgLgDgAisBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_46.setTransform(2.8,-56.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AClBqIAAiyIgqAlIAAgiIAqgkIAeAAIAADTgAAaBqIAAggIhUAAIAAgcIBJiXIAhAAIhJCXIAzAAIAAgwIAeAAIAAAwIAXAAIAAAcIgXAAIAAAggAiYBqIAAiyIgqAlIAAgiIAqgkIAeAAIAADTg");
	this.shape_47.setTransform(0.8,-56.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ACkBqIAAggIhWAAIAAgcIBLiXIAhAAIhLCXIA1AAIAAgwIAeAAIAAAwIAXAAIAAAcIgXAAIAAAggAAFBqIAAggIhVAAIAAgcIBMiXIAfAAIhJCXIAzAAIAAgwIAdAAIAAAwIAXAAIAAAcIgXAAIAAAggAiuBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_48.setTransform(2.9,-56.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ABvBqIBIi4IhBAAIAAAiIgeAAIAAg9IB/AAIAAAbIhHC4gAAGBqIAAggIhUAAIAAgcIBLiXIAgAAIhKCXIAzAAIAAgwIAeAAIAAAwIAXAAIAAAcIgXAAIAAAggAisBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_49.setTransform(2.8,-56.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AB/BoQgLgEgIgIQgJgIgFgLQgEgMAAgOIAAhdQAAgOAEgMQAFgLAJgIQAIgIALgEQALgEANAAQANAAALAEQALAEAJAIQAIAIAFALQAFAMAAAOIAABdQAAAOgFAMQgFALgIAIQgJAIgLAEQgLAEgNAAQgNAAgLgEgACKhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAGADAHAAQAHAAAGgDQAGgCAEgFQAEgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgEgEQgEgFgGgCQgGgDgHAAQgHAAgGADgAggBoQgMgFgHgHQgIgIgEgLQgDgJgBgNIAeAAQACAPAHAHQAEAEAGACQAFACAHAAQAGAAAFgCQAGgDAEgEQAGgGACgKQACgIAAgNIgCgSQgBgIgDgGQgEgEgGgDQgGgEgHAAQgNAAgIAGQgHADgDAIIgcAAIAAhyIByAAIAAAbIhWAAIAAA4QAGgFAJgEQAJgDALAAQALAAAKAEQAJADAHAHQAGAGAEAHQADAGACAGQADAMAAASQAAATgDAMQgCAHgDAGQgEAHgGAGQgHAHgLAFQgMAEgNAAQgOAAgMgEgAiqBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_50.setTransform(2.5,-56.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AB8BpQgMgEgJgHQgJgIgFgLQgGgMAAgPIAeAAQABAJADAGQADAGAFAEQAEAEAHACQAFACAHAAQAIAAAGgDQAGgCAFgEQAFgFACgHQADgGAAgJQAAgIgCgGQgCgHgFgEQgEgFgHgCQgHgDgJAAIgFAAIAAgZIAFAAQAJAAAGgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgDgGQgCgGgEgEQgFgFgGgCQgFgCgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgCAGgBAHIgfAAQABgOAFgLQAFgKAJgIQAIgHALgEQALgEANAAQAOAAALAEQAMAEAIAIQAIAIAFALQAEALAAANQAAAJgBAHQgCAHgEAGQgGALgNAGIAMAFQAGAFADAGQAFAHABAHQADAJAAAJQAAAPgGAMQgEAMgKAIQgIAHgMAEQgMAEgOAAQgNAAgLgDgAghBoQgMgFgHgHQgIgIgEgLQgDgJgBgNIAeAAQACAPAHAHQAEAEAGACQAFACAHAAQAHAAAEgCQAGgDAEgEQAGgGACgKQACgIAAgNIgCgSQgBgIgDgGQgEgEgGgDQgGgEgHAAQgNAAgIAGQgHADgDAIIgcAAIAAhyIByAAIAAAbIhWAAIAAA4QAGgFAJgEQAJgDALAAQALAAAKAEQAJADAHAHQAGAGAEAHQADAGACAGQADAMAAASQAAATgDAMQgCAHgDAGQgEAHgGAGQgHAHgLAFQgMAEgNAAQgOAAgMgEgAirBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_51.setTransform(2.6,-56.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AB9BnQgMgFgIgIQgJgIgEgMQgFgMABgPQAAgMADgOIAMgYIAxhjIAgAAIguBcQAJgEAKAAQAMAAALAFQAKAEAHAIQAIAGAEALQAFAMAAAOQAAAOgFANQgFAMgIAIQgIAJgMAEQgLAFgOAAQgOAAgMgEgACJAIQgGADgEAEQgFAFgCAHQgCAHAAAJQAAAIACAHQACAHAFAFQAEAFAGACQAGADAIAAQAHAAAFgDQAGgCAFgFQAEgFACgHQADgHAAgIQAAgIgCgHQgDgHgEgFQgEgFgGgDQgGgCgHAAQgIAAgGACgAghBnQgLgFgIgHQgIgIgEgLQgDgJgBgNIAfAAQABAPAIAHQAEAEAFACQAGACAGAAQAHAAAEgCQAGgDAEgEQAGgGACgKQACgIAAgNIgCgSQgBgIgDgGQgEgEgGgDQgGgEgHAAQgNAAgHAGQgIADgCAIIgcAAIAAhyIBxAAIAAAbIhVAAIAAA4QAFgFAJgEQAJgDAMAAQAKAAAKAEQAJADAHAHQAGAGAEAHQAEAGACAGQACAMAAASQAAATgCAMQgCAHgEAGQgEAHgGAGQgHAHgKAFQgNAEgNAAQgOAAgMgEgAiqBpIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_52.setTransform(2.6,-56.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AghBoQgLgFgIgHQgIgIgEgLQgDgJgBgNIAfAAQABAPAIAHQAEAEAFACQAGACAGAAQAHAAAEgCQAGgDAEgEQAGgGACgKQACgIAAgNIgCgSQgBgIgDgGQgEgEgGgDQgGgEgHAAQgNAAgHAGQgIADgCAIIgcAAIAAhyIBxAAIAAAbIhVAAIAAA4QAFgFAJgEQAJgDAMAAQAKAAAKAEQAJADAHAHQAGAGAEAHQAEAGACAGQACAMAAASQAAATgCAMQgCAHgEAGQgEAHgGAGQgHAHgKAFQgNAEgNAAQgOAAgMgEgAB1BqIAthcQgIAEgLAAQgMAAgKgFQgKgEgIgIQgHgGgFgMQgDgLAAgOQgBgPAFgMQAEgMAJgIQAIgJAMgFQAMgEAOAAQANAAAMAEQALAFAJAIQAIAIAFAMQAFAMAAAPQAAAMgFAOQgEALgHANIgxBjgACJhNQgGACgEAFQgFAFgCAHQgCAHAAAIQAAAIACAHQADAHAEAFQAEAFAFADQAHACAIAAQAHAAAFgCQAGgDAFgFQAEgEACgHQADgHAAgJQAAgIgDgHQgCgHgEgFQgFgFgGgCQgFgDgHAAQgIAAgGADgAiqBqIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_53.setTransform(2.6,-56.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AghBoQgLgFgIgIQgJgIgFgMQgEgMAAgPQAAgMAEgOIAMgYIAwhjIAfAAIgsBcQAIgEALAAQAJAAALAFQAKAEAHAIQAJAGADALQAFAMAAAOQAAAOgFANQgEAMgJAIQgIAJgLAEQgMAFgMAAQgOAAgMgEgAgVAJQgFADgFAEQgEAFgCAHQgDAHAAAJQAAAIADAHQACAHAEAFQAFAFAFACQAHADAHAAQAHAAAEgDQAGgCAFgFQAEgFACgHQADgHAAgIQgBgIgCgHQgCgHgEgFQgEgFgHgDQgEgCgHAAQgHAAgHACgABaBqIAAgbIBRhiIAJgOQADgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgDAGAAAJIgeAAQAAgNAEgMQAFgLAIgIQAJgIALgEQALgEAOAAQANAAAMAEQALAEAJAIQAHAIAFALQAFALAAAOQgBANgFALQgDAJgMANIhCBQIBXAAIAAAbgAiqBqIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_54.setTransform(2.6,-56.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AB8BnQgLgFgIgHQgIgIgEgLQgDgJgBgNIAfAAQACAPAHAHQAEAEAFACQAGACAHAAQAHAAAFgCQAGgDAEgEQAGgGADgKQABgIAAgNIgBgSQgCgIgDgGQgEgEgGgDQgGgEgJAAQgMAAgIAGQgHADgDAIIgcAAIAAhyIBzAAIAAAbIhXAAIAAA4QAFgFAJgEQAJgDAMAAQAMAAAKAEQAKADAGAHQAGAGAEAHQAEAGACAGQADAMAAASQAAATgDAMQgCAHgEAGQgDAHgGAGQgIAHgKAFQgMAEgPAAQgPAAgMgEgAghBnQgLgFgJgIQgIgIgFgMQgEgMAAgPQAAgMAEgOIALgYIAxhjIAfAAIgsBcQAIgEALAAQAJAAALAFQAKAEAHAIQAIAGAEALQAFAMAAAOQAAAOgFANQgEAMgJAIQgIAJgMAEQgLAFgMAAQgOAAgMgEgAgVAIQgGADgEAEQgEAFgCAHQgDAHAAAJQAAAIADAHQACAHAEAFQAEAFAGACQAGADAIAAQAHAAAEgDQAGgCAEgFQAFgFACgHQACgHAAgIQAAgIgCgHQgCgHgEgFQgFgFgGgDQgEgCgHAAQgIAAgGACgAirBpIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_55.setTransform(2.6,-56.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AB7BoQgMgEgIgJQgKgIgFgLQgFgMAAgOQAAgJACgIQADgIAEgGQAIgLAMgGQgLgHgHgLQgDgGgCgHQgCgHgBgIQAAgNAGgLQAEgLAIgIQAJgIALgEQAMgEANAAQANAAAMAEQALAEAIAIQAIAIAGALQAEALAAANQAAAIgCAHQgCAHgEAGQgGALgMAHQAOAGAGALQAFAGACAIQADAIAAAJQAAAOgFAMQgFALgKAIQgIAJgMAEQgMAEgOAAQgOAAgMgEgACHANQgGACgFAFQgFAFgCAGQgEAHAAAHQAAAIAEAGQACAHAFAFQAFAEAGADQAHADAHAAQAHAAAHgDQAGgDAFgEQAEgFADgHQADgGAAgIQAAgHgDgHQgDgGgEgFQgFgFgGgCQgHgDgHAAQgHAAgHADgACIhNQgGACgEAFQgEAEgCAGQgCAGAAAHQAAAHACAGQACAGAEAEQAEAFAGACQAGACAHAAQAGAAAHgCQAFgCAFgFQAEgEACgGQADgGAAgHQAAgHgDgGQgCgGgEgEQgFgFgFgCQgHgDgGAAQgHAAgGADgAgiBoQgLgFgJgIQgIgIgFgMQgFgMAAgPQABgMAEgOIALgYIAxhjIAeAAIgsBcQAIgEALAAQAKAAALAFQAJAEAIAIQAIAGAEALQAFAMgBAOQABAOgFANQgEAMgJAIQgJAJgLAEQgMAFgMAAQgNAAgMgEgAgWAJQgGADgEAEQgFAFgCAHQgCAHAAAJQAAAIACAHQACAHAFAFQAEAFAGACQAGADAHAAQAHAAAFgDQAFgCAFgFQAFgFACgHQACgHAAgIQAAgIgCgHQgDgHgEgFQgEgFgGgDQgEgCgIAAQgHAAgGACgAisBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_56.setTransform(2.8,-56.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AClBqIAAiyIgqAlIAAgiIAqgkIAeAAIAADTgAgbBqIBGi4Ig/AAIAAAiIgeAAIAAg9IB9AAIAAAbIhHC4gAiYBqIAAiyIgqAlIAAgiIAqgkIAeAAIAADTg");
	this.shape_57.setTransform(0.8,-56.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("ACkBqIAAggIhWAAIAAgcIBLiXIAhAAIhLCXIA1AAIAAgwIAeAAIAAAwIAXAAIAAAcIgXAAIAAAggAgxBqIBGi4Ig/AAIAAAiIgdAAIAAg9IB9AAIAAAbIhGC4gAiuBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_58.setTransform(2.9,-56.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ABvBqIBIi4IhBAAIAAAiIgeAAIAAg9IB/AAIAAAbIhHC4gAgvBqIBGi4Ig/AAIAAAiIgdAAIAAg9IB9AAIAAAbIhGC4gAisBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_59.setTransform(2.8,-56.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AB/BoQgLgEgIgIQgJgIgFgLQgEgMAAgOIAAhdQAAgOAEgMQAFgLAJgIQAIgIALgEQALgEANAAQANAAALAEQALAEAJAIQAIAIAFALQAFAMAAAOIAABdQAAAOgFAMQgFALgIAIQgJAIgLAEQgLAEgNAAQgNAAgLgEgACKhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAGADAHAAQAHAAAGgDQAGgCAEgFQAEgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgEgEQgEgFgGgCQgGgDgHAAQgHAAgGADgAggBoQgMgEgJgJQgJgIgFgLQgFgMAAgOQAAgJACgIQADgIAEgGQAHgLANgGQgLgHgHgLQgEgGgBgHQgDgHAAgIQAAgNAFgLQAFgLAIgIQAJgIALgEQAMgEANAAQAKAAAMAEQALAEAJAIQAIAIAFALQAFALAAANQAAAIgCAHQgCAHgEAGQgGALgMAHQANAGAHALQAFAGACAIQADAIAAAJQAAAOgGAMQgFALgJAIQgJAJgMAEQgMAEgLAAQgOAAgMgEgAgUANQgHACgEAFQgFAFgDAGQgDAHAAAHQAAAIADAGQADAHAFAFQAEAEAHADQAGADAIAAQAGAAAFgDQAHgDAEgEQAFgFADgHQADgGAAgIQAAgHgDgHQgDgGgFgFQgEgFgHgCQgFgDgGAAQgIAAgGADgAgThNQgGACgEAFQgEAEgDAGQgCAGAAAHQAAAHACAGQADAGAEAEQAEAFAGACQAGACAHAAQAGAAAEgCQAGgCAEgFQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgEgFgGgCQgEgDgGAAQgHAAgGADgAiqBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_60.setTransform(2.5,-56.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AB8BpQgMgEgJgHQgJgIgFgLQgGgMAAgPIAeAAQABAJADAGQADAGAFAEQAEAEAHACQAFACAHAAQAIAAAGgDQAGgCAFgEQAFgFACgHQADgGAAgJQAAgIgCgGQgCgHgFgEQgEgFgHgCQgHgDgJAAIgFAAIAAgZIAFAAQAJAAAGgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgDgGQgCgGgEgEQgFgFgGgCQgFgCgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgCAGgBAHIgfAAQABgOAFgLQAFgKAJgIQAIgHALgEQALgEANAAQAOAAALAEQAMAEAIAIQAIAIAFALQAEALAAANQAAAJgBAHQgCAHgEAGQgGALgNAGIAMAFQAGAFADAGQAFAHABAHQADAJAAAJQAAAPgGAMQgEAMgKAIQgIAHgMAEQgMAEgOAAQgNAAgLgDgAghBoQgMgEgJgJQgJgIgFgLQgFgMAAgOQAAgJACgIQADgIAEgGQAHgLANgGQgLgHgHgLQgEgGgBgHQgDgHAAgIQAAgNAFgLQAFgLAIgIQAJgIALgEQAMgEANAAQAKAAAMAEQALAEAJAIQAIAIAFALQAFALAAANQAAAIgCAHQgCAHgEAGQgGALgMAHQANAGAHALQAFAGACAIQADAIAAAJQAAAOgGAMQgFALgJAIQgJAJgMAEQgMAEgLAAQgOAAgMgEgAgVANQgHACgEAFQgFAFgDAGQgDAHAAAHQAAAIADAGQADAHAFAFQAEAEAHADQAGADAIAAQAHAAAEgDQAHgDAEgEQAFgFADgHQADgGAAgIQAAgHgDgHQgDgGgFgFQgEgFgHgCQgEgDgHAAQgIAAgGADgAgUhNQgGACgEAFQgEAEgDAGQgCAGAAAHQAAAHACAGQADAGAEAEQAEAFAGACQAGACAHAAQAGAAAEgCQAGgCAEgFQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgEgFgGgCQgEgDgGAAQgHAAgGADgAirBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_61.setTransform(2.6,-56.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AB9BoQgMgFgIgIQgJgIgEgMQgFgMABgPQAAgMADgOIAMgYIAxhjIAgAAIguBcQAJgEAKAAQAMAAALAFQAKAEAHAIQAIAGAEALQAFAMAAAOQAAAOgFANQgFAMgIAIQgIAJgMAEQgLAFgOAAQgOAAgMgEgACJAJQgGADgEAEQgFAFgCAHQgCAHAAAJQAAAIACAHQACAHAFAFQAEAFAGACQAGADAIAAQAHAAAFgDQAGgCAFgFQAEgFACgHQADgHAAgIQAAgIgCgHQgDgHgEgFQgEgFgGgDQgGgCgHAAQgIAAgGACgAghBoQgMgEgIgJQgKgIgFgLQgFgMAAgOQAAgJADgIQACgIAEgGQAIgLANgGQgMgHgGgLQgEgGgCgHQgCgHgBgIQAAgNAGgLQAEgLAIgIQAJgIALgEQAMgEANAAQAKAAANAEQAKAEAJAIQAJAIAEALQAFALAAANQAAAIgCAHQgCAHgEAGQgGALgLAHQANAGAGALQAFAGACAIQADAIAAAJQAAAOgFAMQgGALgJAIQgJAJgLAEQgNAEgLAAQgOAAgMgEgAgVANQgHACgEAFQgFAFgDAGQgDAHAAAHQAAAIADAGQADAHAFAFQAEAEAHADQAGADAIAAQAHAAAEgDQAHgDAFgEQAFgFACgHQADgGAAgIQAAgHgDgHQgCgGgFgFQgFgFgHgCQgEgDgHAAQgIAAgGADgAgUhNQgFACgFAFQgEAEgCAGQgCAGgBAHQABAHACAGQACAGAEAEQAEAFAGACQAGACAHAAQAHAAADgCQAHgCADgFQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgDgFgHgCQgDgDgHAAQgHAAgGADgAiqBqIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_62.setTransform(2.6,-56.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AghBoQgMgEgIgJQgKgIgFgLQgFgMAAgOQAAgJADgIQACgIAEgGQAIgLANgGQgMgHgGgLQgEgGgCgHQgCgHgBgIQAAgNAGgLQAEgLAIgIQAJgIALgEQAMgEANAAQAKAAANAEQAKAEAJAIQAJAIAEALQAFALAAANQAAAIgCAHQgCAHgEAGQgGALgLAHQANAGAGALQAFAGACAIQADAIAAAJQAAAOgFAMQgGALgJAIQgJAJgLAEQgNAEgLAAQgOAAgMgEgAgVANQgHACgEAFQgFAFgDAGQgDAHAAAHQAAAIADAGQADAHAFAFQAEAEAHADQAGADAIAAQAHAAAEgDQAHgDAFgEQAFgFACgHQADgGAAgIQAAgHgDgHQgCgGgFgFQgFgFgHgCQgEgDgHAAQgIAAgGADgAgUhNQgFACgFAFQgEAEgCAGQgCAGgBAHQABAHACAGQACAGAEAEQAEAFAGACQAGACAHAAQAHAAADgCQAHgCADgFQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgEQgDgFgHgCQgDgDgHAAQgHAAgGADgAB1BqIAthcQgIAEgLAAQgMAAgKgFQgKgEgIgIQgHgGgFgMQgDgLAAgOQgBgPAFgMQAEgMAJgIQAIgJAMgFQAMgEAOAAQANAAAMAEQALAFAJAIQAIAIAFAMQAFAMAAAPQAAAMgFAOQgEALgHANIgxBjgACJhNQgGACgEAFQgFAFgCAHQgCAHAAAIQAAAIACAHQADAHAEAFQAEAFAFADQAHACAIAAQAHAAAFgCQAGgDAFgFQAEgEACgHQADgHAAgJQAAgIgDgHQgCgHgEgFQgFgFgGgCQgFgDgHAAQgIAAgGADgAiqBqIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_63.setTransform(2.6,-56.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("ABaBrIAAgbIBRhiIAJgOQADgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgDAGAAAJIgeAAQAAgNAEgMQAFgLAIgIQAJgIALgEQALgEAOAAQANAAAMAEQALAEAJAIQAHAIAFALQAFALAAAOQgBANgFALQgDAJgMANIhCBQIBXAAIAAAbgAgpBrIAshcQgGAEgMAAQgLAAgKgFQgLgEgHgIQgHgGgFgMQgEgLAAgOQAAgPAEgMQAFgMAJgIQAIgJALgFQAMgEAOAAQALAAANAEQALAFAIAIQAJAIAEAMQAFAMAAAPQAAAMgFAOQgDALgIANIguBjgAgVhMQgFACgFAFQgEAFgCAHQgDAHAAAIQAAAIADAHQACAHAEAFQAEAFAGADQAGACAIAAQAHAAAEgCQAGgDAFgFQAEgEACgHQADgHAAgJQAAgIgDgHQgCgHgEgFQgFgFgGgCQgEgDgHAAQgHAAgHADgAiqBrIAAiyIgrAlIAAgiIArgkIAeAAIAADTg");
	this.shape_64.setTransform(2.6,-56.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AB8BoQgLgFgIgHQgIgIgEgLQgDgJgBgNIAfAAQACAPAHAHQAEAEAFACQAGACAHAAQAHAAAFgCQAGgDAEgEQAGgGADgKQABgIAAgNIgBgSQgCgIgDgGQgEgEgGgDQgGgEgJAAQgMAAgIAGQgHADgDAIIgcAAIAAhyIBzAAIAAAbIhXAAIAAA4QAFgFAJgEQAJgDAMAAQAMAAAKAEQAKADAGAHQAGAGAEAHQAEAGACAGQADAMAAASQAAATgDAMQgCAHgEAGQgDAHgGAGQgIAHgKAFQgMAEgPAAQgPAAgMgEgAgpBqIAshcQgGAEgMAAQgLAAgKgFQgLgEgHgIQgIgGgEgMQgEgLAAgOQAAgPAEgMQAFgMAIgIQAJgJALgFQAMgEAOAAQALAAAMAEQAMAFAIAIQAJAIAEAMQAFAMAAAPQAAAMgFAOQgDALgIANIgvBjgAgVhNQgGACgEAFQgEAFgCAHQgDAHAAAIQAAAIACAHQADAHAEAFQAEAFAGADQAGACAIAAQAHAAAEgCQAGgDAEgFQAFgEACgHQACgHAAgJQAAgIgCgHQgCgHgFgFQgEgFgGgCQgEgDgHAAQgIAAgGADgAirBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_65.setTransform(2.6,-56.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AB7BoQgMgEgIgJQgKgIgFgLQgFgMAAgOQAAgJACgIQADgIAEgGQAIgLAMgGQgLgHgHgLQgDgGgCgHQgCgHgBgIQAAgNAGgLQAEgLAIgIQAJgIALgEQAMgEANAAQANAAAMAEQALAEAIAIQAIAIAGALQAEALAAANQAAAIgCAHQgCAHgEAGQgGALgMAHQAOAGAGALQAFAGACAIQADAIAAAJQAAAOgFAMQgFALgKAIQgIAJgMAEQgMAEgOAAQgOAAgMgEgACHANQgGACgFAFQgFAFgCAGQgEAHAAAHQAAAIAEAGQACAHAFAFQAFAEAGADQAHADAHAAQAHAAAHgDQAGgDAFgEQAEgFADgHQADgGAAgIQAAgHgDgHQgDgGgEgFQgFgFgGgCQgHgDgHAAQgHAAgHADgACIhNQgGACgEAFQgEAEgCAGQgCAGAAAHQAAAHACAGQACAGAEAEQAEAFAGACQAGACAHAAQAGAAAHgCQAFgCAFgFQAEgEACgGQADgGAAgHQAAgHgDgGQgCgGgEgEQgFgFgFgCQgHgDgGAAQgHAAgGADgAgqBqIAshcQgHAEgLAAQgMAAgKgFQgKgEgIgIQgHgGgEgMQgEgLgBgOQAAgPAFgMQAFgMAIgIQAJgJALgFQALgEAOAAQAMAAAMAEQAMAFAHAIQAKAIAEAMQAFAMgBAPQABAMgFAOQgEALgHANIgvBjgAgWhNQgGACgEAFQgFAFgCAHQgCAHAAAIQAAAIACAHQACAHAFAFQADAFAHADQAGACAHAAQAHAAAFgCQAFgDAFgFQAFgEACgHQACgHAAgJQAAgIgCgHQgCgHgFgFQgFgFgFgCQgFgDgHAAQgHAAgGADgAisBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTg");
	this.shape_66.setTransform(2.8,-56.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgFBoQgMgEgIgIQgJgIgEgLQgFgMAAgOIAAhdQAAgOAFgMQAEgLAJgIQAIgIAMgEQAJgEANAAQAMAAALAEQAMAEAIAIQAJAIAEALQAFAMAAAOIAABdQAAAOgFAMQgEALgJAIQgIAIgMAEQgLAEgMAAQgNAAgJgEgAAEhNQgEACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAEACQAFADAIAAQAHAAAGgDQAFgCAEgFQAFgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgFgEQgEgFgFgCQgGgDgHAAQgIAAgFADgACsBqIAAiyIgqAlIAAgiIAqgkIAfAAIAADTgAjKBqIAAgbIBShiIAJgOQADgGAAgIQAAgIgCgGQgCgGgEgEQgFgEgFgCQgGgDgHAAQgHAAgFACQgGACgEAEQgFAEgCAGQgDAGAAAJIgfAAQAAgNAFgMQAFgLAIgIQAIgIAMgEQALgEAOAAQANAAAMAEQALAEAIAIQAIAIAFALQAEALAAAOQAAANgFALQgEAJgLANIhDBQIBXAAIAAAbg");
	this.shape_67.setTransform(0,-56.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgbBoQgLgEgIgIQgJgIgFgLQgEgMAAgOIAAhdQAAgOAEgMQAFgLAJgIQAIgIALgEQALgEANAAQALAAALAEQALAEAJAIQAIAIAFALQAFAMAAAOIAABdQAAAOgFAMQgFALgIAIQgJAIgLAEQgLAEgLAAQgNAAgLgEgAgQhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAGADAHAAQAFAAAGgDQAGgCAEgFQAEgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgEgEQgEgFgGgCQgGgDgFAAQgHAAgGADgACsBqIAAggIhXAAIAAgcIBMiXIAhAAIhLCXIA1AAIAAgwIAdAAIAAAwIAXAAIAAAcIgXAAIAAAggAjfBqIAAgbIBShiIAJgOQACgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgGAAgGACQgGACgEAEQgEAEgDAGQgCAGAAAJIgfAAQAAgNAEgMQAFgLAIgIQAJgIALgEQAMgEANAAQAOAAALAEQAMAEAIAIQAIAIAEALQAFALAAAOQAAANgFALQgEAJgLANIhDBQIBXAAIAAAbg");
	this.shape_68.setTransform(2.2,-56.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgZBoQgLgEgJgIQgJgIgEgLQgEgMgBgOIAAhdQABgOAEgMQAEgLAJgIQAJgIALgEQALgEANAAQAKAAAMAEQALAEAJAIQAIAIAEALQAGAMAAAOIAABdQAAAOgGAMQgEALgIAIQgJAIgLAEQgMAEgKAAQgNAAgLgEgAgOhNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAFADAIAAQAFAAAGgDQAFgCAEgFQAFgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgFgEQgEgFgFgCQgGgDgFAAQgIAAgFADgAB2BqIBIi4IhBAAIAAAiIgdAAIAAg9IB+AAIAAAbIhHC4gAjeBqIAAgbIBThiIAJgOQACgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgHAAgFACQgGACgEAEQgEAEgDAGQgDAGABAJIggAAQAAgNAFgMQAFgLAIgIQAJgIALgEQAMgEANAAQAOAAALAEQAMAEAHAIQAJAIAEALQAFALgBAOQAAANgEALQgFAJgLANIhCBQIBWAAIAAAbg");
	this.shape_69.setTransform(2,-56.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("ACHBoQgMgEgIgIQgJgIgEgLQgFgMAAgOIAAhdQAAgOAFgMQAEgLAJgIQAIgIAMgEQALgEANAAQAMAAALAEQAMAEAIAIQAJAIAEALQAFAMAAAOIAABdQAAAOgFAMQgEALgJAIQgIAIgMAEQgLAEgMAAQgNAAgLgEgACShNQgGACgEAFQgEAEgCAHQgCAGAAAIIAABbQAAAIACAGQACAHAEAEQAEAFAGACQAFADAIAAQAHAAAGgDQAFgCAEgFQAFgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgFgEQgEgFgFgCQgGgDgHAAQgIAAgFADgAgDBqIAAiyIgqAlIAAgiIAqgkIAdAAIAADTgAjbBqIAAgbIBShiIAJgOQACgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgGAAgGACQgGACgEAEQgEAEgDAGQgCAGAAAJIgfAAQAAgNAEgMQAFgLAIgIQAJgIALgEQAMgEANAAQAOAAALAEQAMAEAIAIQAIAIAEALQAFALAAAOQAAANgFALQgEAJgLANIhDBQIBXAAIAAAbg");
	this.shape_70.setTransform(1.8,-56.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape}]},369).wait(11));

	// speedTxt
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgXBoQgLgEgIgIQgJgIgEgLQgFgMAAgOIAAhdQAAgOAFgMQAEgLAJgIQAIgIALgEQALgEAMAAQAMAAALAEQAMAEAIAIQAIAIAFALQAFAMAAAOIAABdQAAAOgFAMQgFALgIAIQgIAIgMAEQgLAEgMAAQgMAAgLgEgAgLhNQgGACgFAFQgEAEgBAHQgCAGAAAIIAABbQAAAIACAGQABAHAEAEQAFAFAGACQAFADAGAAQAHAAAFgDQAGgCAEgFQAEgEACgHQACgGAAgIIAAhbQAAgIgCgGQgCgHgEgEQgEgFgGgCQgFgDgHAAQgGAAgFADg");
	this.shape_71.setTransform(0,-25.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAFBqIAAiyIgoAlIAAgiIAogkIAfAAIAADTg");
	this.shape_72.setTransform(-1,-25.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ag9BrIAAgbIBQhiIAJgOQADgGAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgCQgGgDgHAAQgEAAgGACQgGACgEAEQgEAEgDAGQgCAGAAAJIggAAQABgNAEgMQAFgLAIgIQAIgIAMgEQAMgEALAAQAOAAALAEQAMAEAHAIQAJAIAEALQAEALAAAOQABANgGALQgDAJgLANIhCBQIBVAAIAAAbg");
	this.shape_73.setTransform(0.1,-25.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgXBpQgMgEgIgHQgKgIgFgLQgGgMAAgPIAfAAQAAAJADAGQADAGAFAEQAEAEAHACQAFACAGAAQAHAAAGgDQAGgCAGgEQAEgFACgHQAEgGAAgJQAAgIgDgGQgCgHgEgEQgFgFgHgCQgHgDgHAAIgFAAIAAgZIAFAAQAHAAAGgCQAGgCAEgEQAEgFACgGQACgFAAgIQAAgIgCgGQgDgGgEgEQgFgFgGgCQgFgCgGAAQgGAAgFACQgGACgEAEQgEAEgCAGQgDAGgBAHIgeAAQABgOAEgLQAGgKAIgIQAIgHALgEQAMgEALAAQANAAAMAEQALAEAIAIQAIAIAFALQAFALAAANQAAAJgCAHQgCAHgDAGQgHALgNAGIAMAFQAGAFADAGQAFAHACAHQACAJAAAJQAAAPgGAMQgEAMgJAIQgJAHgMAEQgMAEgNAAQgMAAgLgDg");
	this.shape_74.setTransform(-0.2,-25.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AARBqIAAggIhVAAIAAgcIBKiXIAgAAIhJCXIA0AAIAAgwIAdAAIAAAwIAXAAIAAAcIgXAAIAAAgg");
	this.shape_75.setTransform(0,-25.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgaBnQgLgFgIgHQgIgIgEgLQgDgJgBgNIAfAAQACAPAHAHQAEAEAFACQAGACAGAAQAGAAAFgCQAGgDAEgEQAGgGADgKQABgIAAgNIgBgSQgCgIgDgGQgEgEgGgDQgGgEgJAAQgKAAgIAGQgHADgDAIIgcAAIAAhyIBxAAIAAAbIhVAAIAAA4QAFgFAJgEQAJgDAKAAQAMAAAKAEQAKADAGAHQAGAGAEAHQAEAGACAGQADAMAAASQAAATgDAMQgCAHgEAGQgDAHgGAGQgIAHgKAFQgMAEgOAAQgOAAgMgEg");
	this.shape_76.setTransform(0.1,-25.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgYBnQgLgFgJgIQgJgIgEgMQgEgMgBgPQAAgMAEgOIAMgYIAvhjIAhAAIgsBcQAHgEAKAAQALAAAKAFQAKAEAIAIQAIAGAEALQAEAMAAAOQAAAOgEANQgEAMgJAIQgJAJgLAEQgMAFgNAAQgMAAgMgEgAgMAIQgGADgEAEQgEAFgCAHQgDAHAAAJQAAAIADAHQACAHAEAFQAEAFAGACQAGADAGAAQAHAAAFgDQAHgCAEgFQAEgFACgHQADgHAAgIQAAgIgCgHQgCgHgEgFQgFgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_77.setTransform(0,-25.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgoBqIBGi4Ig/AAIAAAiIgdAAIAAg9IB9AAIAAAbIhFC4g");
	this.shape_78.setTransform(0.3,-25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71}]}).to({state:[{t:this.shape_72}]},10).to({state:[{t:this.shape_73}]},10).to({state:[{t:this.shape_74}]},10).to({state:[{t:this.shape_75}]},10).to({state:[{t:this.shape_76}]},10).to({state:[{t:this.shape_77}]},10).to({state:[{t:this.shape_78}]},10).to({state:[{t:this.shape_71}]},369).wait(11));

	// bgImg1
	this.instance_24 = new lib.bgImg1_1();
	this.instance_24.setTransform(0,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(450));

	// bg
	this.instance_25 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-423.7,-1020.8,717.4,1320.9);


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
p.nominalBounds = new cjs.Rectangle(-123.7,-420.8,717.4,1321.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;