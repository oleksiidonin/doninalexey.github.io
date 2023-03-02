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
		{src:"images/bokal.png", id:"bokal"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/lenta.png", id:"lenta"},
		{src:"images/light.png", id:"light"},
		{src:"images/light4.png", id:"light4"},
		{src:"images/venokL.png", id:"venokL"},
		{src:"images/venokR.png", id:"venokR"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bokal = function() {
	this.initialize(img.bokal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,430);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,488);


(lib.lenta = function() {
	this.initialize(img.lenta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,241);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,488);


(lib.light4 = function() {
	this.initialize(img.light4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib.venokL = function() {
	this.initialize(img.venokL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,208);


(lib.venokR = function() {
	this.initialize(img.venokR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,202);


(lib.venokR_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.venokR();
	this.instance.setTransform(-56,-101);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-101,112,202);


(lib.venokL_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.venokL();
	this.instance.setTransform(-50.5,-104);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.5,-104,101,208);


(lib.t1_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjFAIBRizIj1nLIBWAAIDGF2ICnl2IBMAAIkeJ+g");
	this.shape.setTransform(27.6,0.1,0.209,0.208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB+FAIkEkmIgSASIAAEUIhHAAIAAp+IBHAAIAAESIEOkSIBgAAIkpEqIEzFUg");
	this.shape_1.setTransform(16.5,0.1,0.209,0.208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADTFPIhKi1IkPAAIhNC1IhOAAIEkqdIEfKdgAhqBXIDXAAIhsj+g");
	this.shape_2.setTransform(3.3,-0.2,0.209,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjVh3Ig/G8IhJAAIBqqiID0IaID6obIBkKjIhJAAIg9m8IjZHWg");
	this.shape_3.setTransform(-12,0,0.209,0.208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AimDrQheheAAiLQAAiNBfhfQBghfCNAAQBqAABTA/IAABYQgngmgsgVQg2gZg5AAQhrAAhKBOQhJBNAABuQAAB5BVBKQBKBBBgAAQA9AAA6gdQApgVAhghIAABYQhWA+hrAAQiLAAhfhfg");
	this.shape_4.setTransform(-27.6,0.1,0.209,0.208);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-7.3,66.2,14.7);


(lib.t1_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjqDsQhhhfAAiNQAAiMBhhfQBgheCKAAQCLAABgBeQBhBfAACMQAACNhhBfQhfBeiMAAQiKAAhghegAi2i5QhNBNAABsQAABuBNBMQBLBNBrAAQBrAABNhNQBLhMAAhuQAAhshLhNQhNhNhrAAQhrAAhLBNg");
	this.shape.setTransform(68,-1.1,0.209,0.208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiQFAIAAp+IEhAAIAABCIjaAAIAAI8g");
	this.shape_1.setTransform(56.9,-1.1,0.209,0.208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjqDsQhhhfAAiNQAAiMBhhfQBgheCKAAQCLAABgBeQBhBfAACMQAACNhhBfQhfBeiMAAQiKAAhghegAi2i5QhMBNAABsQAABuBMBMQBMBNBqAAQBsAABMhNQBMhNAAhtQAAhshMhNQhMhNhsAAQhqAAhMBNg");
	this.shape_2.setTransform(43.7,-1.1,0.209,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB+FAIkEkmIgSASIAAEUIhHAAIAAp+IBHAAIAAESIEOkSIBgAAIkpEqIEzFUg");
	this.shape_3.setTransform(30.3,-1.1,0.209,0.208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai8FAIAAp+IBIAAIAAEJIBWAAQBVAAA0AdQBRApAABsQAABbg4A0Qg4A0hdAAgAh0D8IBSAAQAiAAAUgEQAmgJAYgXQAhgfABg8QgBhFgzgcQgUgKgegDQgRgCgnAAIhKAAg");
	this.shape_4.setTransform(18.7,-1.1,0.209,0.208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiSEaQg1gogchBIBFgfQAUA2AsAgQAsAfA3AAQA7AAAngaQA0glAAhCQAAhNg+geQgngThEAAIg5AAIAAhBIA5AAQA+AAAjggQAggdAAgvQAAgqgagZQgdgeg6AAQgkAAgdANQgiARgbAnIg3grQA/hdB2AAQBWAAAyAtQAWAUANAcQAPAhAAAlQAAAvgaAkQgXAigoASQA+AOAjAtQAgArAAA9QAABlhQA3QgdAVgnALQgmAKgoAAQhVAAg/gwg");
	this.shape_5.setTransform(6.7,-1.1,0.209,0.208);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhjFAIBRizIj1nLIBWAAIDGF2ICml2IBNAAIkfJ+g");
	this.shape_6.setTransform(-4.2,-1.1,0.209,0.208);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ADJGDIAAiGInVAAIAAp+IBHAAIAAI6IFCAAIAAo6IBHAAIAAI6IBJAAIAADKg");
	this.shape_7.setTransform(-16.3,0.3,0.209,0.208);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACjFAIAAk5IlFAAIAAE5IhHAAIAAp+IBHAAIAAEDIFFAAIAAkDIBHAAIAAJ+g");
	this.shape_8.setTransform(-30.7,-1.1,0.209,0.208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ADTFPIhKi1IkPAAIhMC1IhPAAIEkqdIEfKdgAhqBXIDXAAIhsj+g");
	this.shape_9.setTransform(-44.1,-1.4,0.209,0.208);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AimFAIAAp+IB0AAQA0gBAiAJQArALAeAaQAgAbAPApQALAhAAAkQAABLguAxQg2A1hkAAIg+AAIAAEXgAhfgYIA6AAQA+AAAjgeQAkgfAAg3QAAhDg1gbQgigSgzAAIg1AAg");
	this.shape_10.setTransform(-53.7,-1.1,0.209,0.208);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiFNIAAhbIgSAAQigAAhLhWQg6hAABhhQgBhiA6hBQBLhXCgAAIASAAIAAhMIBFAAIAABMIARAAQCgAABMBXQA6BBAABiQAABhg6BAQhMBWigAAIgRAAIAABbgAAjCvIATAAQB3AAA4g9QAsguAAhJQAAhLgsgvQg5g9h2ABIgTAAgAjjh/QgsAvAABLQAABJAsAuQA3A9B3AAIATAAIAAlqIgTAAQh3gBg3A9g");
	this.shape_11.setTransform(-67.6,-1.4,0.209,0.208);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.8,-8.4,149.8,16.8);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiFNIAAhbIgRAAQigAAhMhWQg5hAAAhhQAAhiA5hBQBMhXCgAAIARAAIAAhMIBFAAIAABMIARAAQCgAABMBXQA5BBAABiQAABhg5BAQhMBWigAAIgRAAIAABbgAAjCvIATAAQB2AAA4g9QAsguAAhJQAAhLgsgvQg4g9h2ABIgTAAgAjkh/QgsAvAABLQAABJAsAuQA5A9B2AAIATAAIAAlqIgTAAQh2gBg5A9g");
	this.shape.setTransform(27.2,-0.2,0.209,0.208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjVh3IhAG8IhIAAIBqqiIDzIaID7obIBjKjIhJAAIg8m8IjZHWg");
	this.shape_1.setTransform(9.8,0,0.209,0.208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhjFAIBRizIj1nLIBWAAIDGF2ICnl2IBMAAIkeJ+g");
	this.shape_2.setTransform(-5,0.1,0.209,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiFAIAAp+IBFAAIAAJ+g");
	this.shape_3.setTransform(-13.6,0.1,0.209,0.208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AimFAIAAp+IB0AAQA0gBAiAJQArALAeAaQAgAbAPApQALAhAAAkQAABLguAxQg2A1hkAAIg+AAIAAEXgAhfgYIA6AAQA+AAAjgeQAkgfAAg3QAAhDg1gbQgigSg0AAIg0AAg");
	this.shape_4.setTransform(-20.4,0.1,0.209,0.208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiFAIAAo8IibAAIAAhCIF7AAIAABCIibAAIAAI8g");
	this.shape_5.setTransform(-30.4,0.1,0.209,0.208);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.4,-7.3,68.8,14.7);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjsAAQABgNHYgLIAAAyQnYgLgBgPg");
	this.shape.setTransform(-57.7,-25,0.25,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai6DBIACgIQABgIgGgEQAJg5AVhCQAsiBBDg2QApghAjgDQAMgBBFAHQAZACAegRIAagOQACALgIAUQgHASgIAHQgjAkhLgFQglgDgQADQgaAGgRAYQgWAegKAeQgHASgaBvQgQAKgNAPQgGAIgOAXQgFgDgOgDQgDgBgFAQQgEAOgDAAIgBAAg");
	this.shape_1.setTransform(18.3,-30,0.25,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah3B3QgfgeABg4QAAhPA7g1QA3gyBIAAQA0AAAfAfQAfAfgBA3QgBBFg1A3Qg4A6hKAAQg2AAgfgfgAgjhYQgiArgGBFQgEAvAOAbQAMAaAXACQAkACAhguQAgguAFg7QAEgvgNgcQgMgZgXgCIgGAAQggAAgdAlg");
	this.shape_2.setTransform(17.2,-25.7,0.25,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbCWQgrgBgIgbQgGgWASgrQAihCAOgkQAahCgWgHQgFgBgJABQgrAHg0ApQgIAGAAgPQABgOAJgLQAFgHAPgKQAVgNAngJQAhgHAaAAQAsAAAMAeQAJAagRAkIhFCXQgFAPAJAGQAKAHAVgEQA0gIAogvQAIgKgBASQAAASgMAMQgVAWgtAPQgoAOghAAIgHgBg");
	this.shape_3.setTransform(44.4,-25.3,0.25,0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjOExQAmiPAjiHQBFkKgCgcQgCgigfgBQggAGgBgDQgEgLALgEQAPgHAcABQAcgBAVAMQARAKAJARQAugkA5AAQA0ABAeAeQAfAfgBA4QAABGg1A3Qg4A7hMAAQgpgBgbgSIhRFBQgBAQgKAEQgIAFgUAFQgVAGgLgBQgNAAAEgQgAAwkYQgeANgPAWQgKAQgMA+QgLA5ACANQAEAZASAQQAOANATACQAmADAigvQAiguAFg9QAHhZgxgIIgIAAQgSAAgWAJg");
	this.shape_4.setTransform(35.2,-21.1,0.25,0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AirFCQgbgBgNgKQgIgHABgGQAAgDAFABIAPABQBFADBQhjQBRhnAziiQgUAWgdAOQgcANgYAAQgaAAgUgJQgVgKgGgQQgIgKAIgnQAFgWAThBQAQgygBgQQAAgNgIgJQgJgJgQgBQgQgBgSAIQgMAGgBgCQgDgNAKgGQAYgPAjACQApACATAUQARAVgKAiQgVBlgLAqQgCAJADAMQALAQATAAQAXAAAbgWQAdgYASgoQAKgYAFgSIAQgyIAPg2QAGgZAEgCQALgFAQgEQATgFALAAQALAAgCAQQgHA0gaBiQgYBWgSAyIgBgBQg1ChhSBaQhPBbhdAAIgHAAg");
	this.shape_5.setTransform(25.3,-21.3,0.25,0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AinCXQgEgFACgIIAYhTQAhh5gBggQgBgNgJgIQgJgJgQAAQgQAAgRAJQgNAGAAgCQgCgEABgGQABgGAGgEQAXgPAjgBQAqAAAYAWQAZAVgIAiIgPBJQA9gtA3gEIARhDQAEgRAHgDQAJgEATgGQAVgGALAAQANAAgEARIgRA7IAAAAIgIAgQgPA2gUBTQgHAgAjgHQAjgJAhguQAGgKADASQACARgKAMQgTAYgdANQgeAOgiAAQhNAAAYheQANgzAJgcQgtAHhIA7IgQBMQgCAPgJAFQgKAEgSAGQgVAFgLAAQgGAAgCgDg");
	this.shape_6.setTransform(7.7,-25.3,0.25,0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AinCXQgEgFACgIQAOgsAKgnQAih6gCgfQgBgNgIgIQgKgJgQAAQgQAAgRAJQgNAGAAgCQgEgOAKgGQAYgPAigBQAqAAAYAWQAZAVgIAiIgPBJQA9gtA3gEIARhDQAEgRAHgDQAJgEATgGQAVgGALAAQANAAgEARIgQA7IAAAAIgJAgQgPA3gTBSQgIAgAjgHQAjgJAhguQAGgKADASQACARgKAMQgTAYgdANQgeAOghAAQhNAAAXheQAOg2AIgZQgtAHhIA7IgQBMQgCAPgJAFQgKAEgSAGQgVAFgLAAQgFAAgDgDg");
	this.shape_7.setTransform(-10.6,-25.3,0.25,0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjNE+QgDgFABgIQAniPAiiHQBFkKgBgcQgDgigfgBQgfAGgBgDQgFgKAMgFQAOgHAcABQAdgBAUAMQASAKAJARQAtgkA5AAQA1ABAeAeQAeAfAAA4QAABGg2A3Qg4A7hMAAQgpgBgagSIhRFBQgCAQgJAEQgJAFgTAFQgVAGgLgBQgFAAgDgDgAAwkYQgeANgQAWQgJAQgMA+QgLA5ACANQADAZATAQQANANATACQAnADAigvQAiguAFg9QAHhZgxgIIgIAAQgSAAgWAJg");
	this.shape_8.setTransform(-29.5,-21.1,0.25,0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA9D8QgngrgehNQgchFggh5IgGAFQhUEmgEAMQgDAJgEADQgGAFgMADIgmAHIglAHQgGABgCgCQgEgDAFgLQAGgSCnoSQACgGgBgCQgBgCgFABIgnAGQgEAAAEgFQADgGAFgCQATgHAxgNQA2gNADAEQAEAEABAGQAAAGgEAMQgEAIgwCuID3i3QAOgLAIgDQAGgCAKAAQAOAAANACQAUADgBAHQAAAEhYA9IixB5QAwDNA+BkQA4BbBJALQAHABAKgBQAHgBAAADQABAHgKAIQgPALgfAAQhaAAhBhHg");
	this.shape_9.setTransform(-40.7,-27.6,0.25,0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah3B4QgeggAAg4QAAhOA7g1QA3gyBIAAQA0AAAeAeQAfAfAAA4QgBBEg1A4Qg4A6hKAAQg2AAgfgegAgjhXQgjArgFBDQgEAwAOAbQAMAaAXABQAkACAhgtQAgguAFg6QADgxgNgbQgMgagWgBIgEAAQghAAgeAmg");
	this.shape_10.setTransform(-19.6,-25.3,0.25,0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhrB6QgcgcgDgwQgFhLA7g7QA8g9BTAAQArAAAVAVQAOAPABAWQADAvg5AqQg5AohTAOQgBAeAMARQANAUAcAAQAiAAApgfQAcgUAQgZIAMgUQAIAAADAOQADAQgLAOQgdAngpAVQgsAXgyAAQgtAAgcgcgAgKhLQgeAugLAxIgCALQBZgYAkhFQANgbgCgVQgCgVgQAAQgoAAgjA4g");
	this.shape_11.setTransform(-1.5,-25.4,0.25,0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjrgYQHXALAAANQAAAPnXALg");
	this.shape_12.setTransform(57.7,-25,0.25,0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AlYDsIDLhNIBwl9QCbgeDPgPIAVgCIgGASQjLARiZAeIhxGBIjoBZg");
	this.shape_13.setTransform(35.9,28.9,0.25,0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah3AkQB1hwCwh8QBCgdAqgPIAKAEQg4AjhMA3QiZBuhmBkQhPBOg/BXQghALgVAJQBKhwBihhg");
	this.shape_14.setTransform(-15.2,-3.1,0.25,0.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjkD5QAHh6ApiTQA/jfCBh1QA0guA2gVQAwgSAkAHQAQAEANAIQhmgBhsBqQh9B8g8DWQhJEHAdChQgchIAIh4g");
	this.shape_15.setTransform(-23.3,15.7,0.25,0.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkdHNQgxAAgrgSQASADAZABQBzAEBqgrQBrgrBXhWQBNhJA8hlQA9hkAph2QBBjAgfibQAcBOgFBkQgFBiglBsQhPDqiXCRQikCejRAAIgRAAg");
	this.shape_16.setTransform(-18.6,20.3,0.25,0.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ah3AkQB3hyCuh6QBCgdAqgPIAKAEQg4AjhMA3QiZBuhmBkQhQBPg+BWQgdAJgZALQBKhwBihhg");
	this.shape_17.setTransform(10.6,-3.1,0.25,0.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkdHNQgxAAgrgSQASADAaABQBzAEBqgrQBqgrBXhWQBNhJA8hlQA9hkAph2QBBjAgfibQAcBOgFBkQgFBiglBsQhPDqiXCRQijCejSAAIgRAAg");
	this.shape_18.setTransform(7.3,20.3,0.25,0.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AjlD5QAIh6ApiTQA/jfCBh1QA0guA2gVQAwgSAkAHQAQAEANAIQhmgBhsBqQh9B8g8DWQhJEFAdCjQgchIAHh4g");
	this.shape_19.setTransform(2.6,15.7,0.25,0.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AkXBHQD9hsFDhKIgHAaQjGAwipA7Qh8AshfAug");
	this.shape_20.setTransform(20.3,27.6,0.25,0.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiNHCID9t6IAdgJIj/ODg");
	this.shape_21.setTransform(39.9,7.9,0.25,0.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ADGjXIgUBHIk9FaIg6AOg");
	this.shape_22.setTransform(27,15.2,0.25,0.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AkzKVIDMhNIGIz4IAdgGImRUUIjqBZg");
	this.shape_23.setTransform(-38.1,14.8,0.25,0.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAJIA9gbIABAAIgHAXIg6AOg");
	this.shape_24.setTransform(-39.6,0.6,0.25,0.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AS8HRQjqAyjMBGQiOAxhvA0IBAiXIQkyNIBjgiIkZPUQC2AADAATIgQAmQjdAPinAiIhxGCIjpBagAM7GaQBpgmCPgaQBSgPBfgHICXocgA2noGQgeAEhFAPIg/AOIACgJQCFhACXgrQBMgWAxgIImTUUIjrBYgAAKLoQjOgHhEkAQgbhjAAh1QABhoAShPQAmiZBWiPQBminCvimQCdiSDmh1QByg6BUgdIAJAFQg3AjhMA3QiYBuhpBlQhnBnhMB0Ig3BfIBigxQBxgwBSAHQDDATA9CpQA6CghMDfQhQDsiWCQQimCgjRAAIgRAAgACTjtQiLB9g+DkQhED0AUCgQAVCWBYAWQBkAYBwhwQCFiDBTkQQBHjjgXiRQgXiFhegUQgQgDgQAAQhXAAhkBagAv+LoQjQgHhEkAQgahjAAh1QAAhoAShPQAmiZBWiPQBminCximQCdiSDmh1QByg6BUgdIAKAFQg3AjhNA3QiYBuhpBlQhnBnhMB0QglA6gSAlIBhgxQBygwBSAHQDDATA9CpQA6CghMDfQhQDsiWCQQimCgjRAAIgRAAgAt1jtQiLB8hADlQhED0AVCgQATCWBbAWQBkAYBwhwQCFiDBTkQQBHjjgXiRQgXiFhegUQgQgDgQAAQhXAAhkBag");
	this.shape_25.setTransform(-1.3,12.1,0.25,0.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAdQgMgLAAgSQAAgRAMgLQAMgKAPAAQAQAAAMAKQAMALAAARQAAASgMALQgMAKgQAAQgPAAgMgKgAgTgVQgIAJAAAMQAAANAIAJQAIAIALAAQALAAAIgIQAJgJAAgNQAAgMgJgJQgIgIgLAAQgLAAgIAIgAAHAVIgIgSIgEAAIAAASIgJAAIAAgpIAOAAQARAAAAANQAAAIgKABIALATgAgFgCIAGAAQAHAAAAgGQAAgFgIAAIgFAAg");
	this.shape_26.setTransform(46.3,21.5,0.25,0.25);

	this.addChild(this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.6,-35.6,127.3,71.3);


(lib.light_1 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.light4();
	this.instance.setTransform(-194,-326);

	// Слой 1
	this.instance_1 = new lib.light();
	this.instance_1.setTransform(-140,-244);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-194,-326,400,600);


(lib.lenta_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.lenta();
	this.instance.setTransform(-118,-120.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118,-120.5,236,241);


(lib.HW = function() {
	this.initialize();

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("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");

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-299.9,300,600);


(lib.gradient = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.533,1],-52.1,0,52.2,0).s().p("AoIP8IAA/3IQRAAIAAf3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.1,-102,104.3,204.1);


(lib.btn1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWECQhohbAAilQAAiRBWheQBahiCSAAQBZAABHAmQA5AfAjAwQAfAqASBEQARBCgDA+IoGAAQABBhA/A9QA8A7BXAAQBPAAA5guQAtgjAZg0IBgAyQggA9gyAqQhbBPiDAAQiFAAhbhOgAh7i9Qg3AvgNBIIGHAAQgOhLg3guQg2gthJAAQhIAAg3Avg");
	this.shape.setTransform(47.3,1,0.086,0.085);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmuE/IAAp9IB0AAIAAIXIECAAIAAoXIByAAIAAIXIEBAAIAAoXIB0AAIAAJ9g");
	this.shape_1.setTransform(38.9,1,0.086,0.085);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjzE/IAAp9IB0AAIAAD1IB3AAQA6AAApAKQA+AOAoAnQAWATANAfQAQAlAAAtQAAAwgTAoQgPAggZAXQgnAjg4AMQgkAHhAAAgAh/DcIBsAAQAhAAAUgCQAdgEATgKQArgdAAg1QAAg4gqgYQgTgNgdgDQgSgDgjAAIhtAAg");
	this.shape_2.setTransform(31.5,1,0.086,0.085);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AksE9IAAhmQARAEAJAAQAegBAYgNQASgKAMgSQAOgUAFggQAEgVAAgkIAAmDIHTAAIAAJ8IhzAAIAAoXIjsAAIAAEeQAAA6gHAgQgLA3giAoQgWAZggARQgwAZg7AAQgQAAgUgDg");
	this.shape_3.setTransform(24.6,1,0.086,0.085);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4HfIAAp8IByAAIAAJ8gAg5lYQgYgXAAggQAAghAYgXQAZgXAgAAQAiAAAYAXQAYAXAAAhQAAAggYAXQgYAXgiAAQggAAgZgXg");
	this.shape_4.setTransform(20.1,-0.4,0.086,0.085);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjwHUQhFg9gahfQgShEAAhqQAAiXAahrQAsi7B4hPQAwggBDgTQAZgIBcgUQA/gOAggVQAagSAMgdICBAAQgZBShIAtQguAdhMASIhqAaQg/AUgpAdQg+AsgmBQQglBOgEBaIAEAAQAig3A7geQA/ggBVAAQCVAABkBhQBjBeAACQQAACRhlBeQhmBgihABQiMAAhahQgAiiAjQhIBCAABvQAABvBJBCQBCA8BfAAQBgAABCg8QBIhCAAhvQAAhwhHhCQhCg6hhAAQhggBhCA8g");
	this.shape_5.setTransform(14.7,-0.8,0.086,0.085);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjzE/IAAp9IBzAAIAAD1IB4AAQA6AAApAKQA+AOAoAnQAWATANAfQAQAlAAAtQAAAvgTApQgPAggZAXQgnAjg4AMQgkAHhAAAgAiADcIBsAAQAiAAAUgCQAdgEASgKQAsgdAAg1QAAg3gqgZQgTgNgdgDQgSgDgjAAIhuAAg");
	this.shape_6.setTransform(4.7,1,0.086,0.085);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai3DxQhlhfAAiQQAAiRBmhgQBlhgCZAAQB0AABbA+IAACEQgpgyhAgZQgygUg2AAQhhAAhCA9QhIBCAABtQAABvBKBCQBBA8BfAAQA4AAA3gXQA9gaAsgzIAACFQheBCh3AAQiZAAhmhfg");
	this.shape_7.setTransform(-1.7,1,0.086,0.085);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Akdk7IB0AAIAAGjIHHnVIAAKuIh0AAIAAmoInHHVg");
	this.shape_8.setTransform(-8.5,1,0.086,0.085);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag5E/IAAoXIjRAAIAAhmIIVAAIAABmIjRAAIAAIXg");
	this.shape_9.setTransform(-14.7,1,0.086,0.085);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjqD7QhjhdgBifQAAidBjhcQBahVCJAAQBTAABCAnQAsAaAiApIAAhaIB0AAIAAJ8Ih0AAIAAhZQgkAtgxAbQhBAkhNAAQiHAAhbhVgAiUixQhCBBAABvQAABoA5BCQA8BEBkAAQBmAAA+hIQA6hDAAhiQAAhyhIhBQg/g5hXAAQhZAAg+A7g");
	this.shape_10.setTransform(-21.2,1,0.086,0.085);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACeE/IAAkUIk6AAIAAEUIh0AAIAAp9IB0AAIAAEGIE6AAIAAkGIBzAAIAAJ9g");
	this.shape_11.setTransform(-28.3,1,0.086,0.085);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ai2EaQg2gngjhGIBkgoQARApArAfQAtAgBAAAQBJAAAmgYQAUgMAMgVQAPgZAAgfQAAgygpgYQgWgOgigFQgTgDgiAAIhBAAIAAhkIA4AAQA7AAAagQQAjgWAAglQAAgVgHgRQgJgSgNgKQgbgXg6AAQgwAAgqAYQgjAWgTAiIhRg/QAng2AugaQA+gkBSAAQAxAAAgAIQArAKAjAbQA5AvAABKQAABZhLAtQAwAMAdAcQAuAvABBGQAAAxgYAsQgWArgpAdQhGAxh2AAQhqAAhJg2g");
	this.shape_12.setTransform(-34.9,1,0.086,0.085);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4HfIAAp8IByAAIAAJ8gAg4lYQgZgXABggQgBghAZgXQAYgXAgAAQAiAAAYAXQAXAXAAAhQAAAggXAXQgYAXgiAAQghAAgXgXg");
	this.shape_13.setTransform(-39.6,-0.4,0.086,0.085);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AF8JtIAAjYIr2AAIAADYIhxAAIAAlEQA3ACAvgpQArglAag+QAmheAAiuIAAn/IKMAAIAAOVIB6AAIAAFEgAijhtQAABogJBCQgJBBgUAyQgcBFg2A0IIWAAIAAspImeAAg");
	this.shape_14.setTransform(-45.8,0.2,0.086,0.085);

	// Layer 3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,255,255,0.498)").ss(2,1,1).p("AIchdQgHgCgIAAIwZAAQgwAAgCAvIAABhQACAvAwAAIQZAAQAIAAAHgBQAjgHAAgqIAAhbQAAgqgjgGg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#2D2E66","#0196C7"],[0,1],0,9.6,0,-9.6).s().p("AoLBgQgxAAgCgvIAAhhQACgvAxAAIQXAAQAIAAAIACQAjAGAAAqIAABbQAAAqgjAHIgQABg");

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-10.6,117,21.3);


(lib.bottle_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-70.5,-244);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,-244,141,488);


(lib.bokal_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bokal();
	this.instance.setTransform(-71.5,-215);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-215,143,430);


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
	this.shape.graphics.f("#101D58").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t1_3();
	this.instance.setTransform(98.6,-1.4,1.253,1.253);

	this.instance_1 = new lib.t1_2();
	this.instance_1.setTransform(-46.2,0.1,1.253,1.253);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139.9,-10.6,280,21.2);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HW
	this.instance = new lib.HW();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({alpha:1},10).wait(50).to({alpha:0},5).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_184 = new cjs.Graphics().p("AxHDIQhkAAgDhiIAAjLQADhiBkAAMAiPAAAQAPAAAPADQBKAOgBBXIAAC/QABBXhKAPQgPACgPAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(184).to({graphics:mask_graphics_184,x:0,y:259.4}).wait(16).to({graphics:null,x:0,y:0}).wait(95));

	// gradient
	this.instance_1 = new lib.gradient();
	this.instance_1.setTransform(-170.8,213,0.9,1.419,33,0,0,0.1,-0.1);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(184).to({_off:false},0).wait(1).to({regX:0,regY:0,x:-167.3,y:213.4},0).wait(1).to({x:-156,y:214.5},0).wait(1).to({x:-136.9,y:216.5},0).wait(1).to({x:-110.3,y:219.2},0).wait(1).to({x:-77,y:222.5},0).wait(1).to({x:-38.6,y:226.4},0).wait(1).to({x:2.7,y:230.6},0).wait(1).to({x:44.6,y:234.9},0).wait(1).to({x:84.5,y:238.9},0).wait(1).to({x:120.4,y:242.5},0).wait(1).to({x:150.5,y:245.6},0).wait(1).to({x:174.2,y:248},0).wait(1).to({x:190.9,y:249.7},0).wait(1).to({x:200.8,y:250.7},0).wait(1).to({regX:0.1,regY:-0.1,x:204.2,y:251},0).to({_off:true},1).wait(95));

	// btn
	this.instance_2 = new lib.btn1();
	this.instance_2.setTransform(0,259.4,2.087,2.083);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).to({alpha:1},10).to({_off:true},85).wait(56));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.setTransform(74,-178.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({alpha:1},10).to({_off:true},130).wait(56));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.setTransform(0,-241.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({alpha:1},10).to({_off:true},130).wait(56));

	// t1_1
	this.instance_5 = new lib.t1_1();
	this.instance_5.setTransform(0,-271.8,1.253,1.253);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({alpha:1},10).to({_off:true},130).wait(56));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_39 = new cjs.Graphics().p("AkKAqIGbjpIB6FRIoVAug");
	var mask_1_graphics_40 = new cjs.Graphics().p("AlWBJIGbjpIESg+IgeE9Ih6BSIoVAug");
	var mask_1_graphics_41 = new cjs.Graphics().p("AnGBJIGdjpIEQg+IDUA9IAMEAIj+AAIh6BSIoVAug");
	var mask_1_graphics_42 = new cjs.Graphics().p("ApTBJIGdjpIEQg+IDUA9ICHg3ICfCeIkaCZIj+AAIh4BSIoXAug");
	var mask_1_graphics_43 = new cjs.Graphics().p("ApyCTIGdjpIEQg+IDUA9ICIg3IA2iaICmAAIg9E2IkbCbIj+AAIh4BSIoXAug");
	var mask_1_graphics_44 = new cjs.Graphics().p("AprEPIGdjrIERg8IDTA7ICIg1IAAlkIDNguIguIuIkaCbIj/AAIh3BRIoYAvg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AnCF9IGdjsIEQg+IDUA9ICIg2IAAliIDNguIguItIkbCcIj+AAIh6BRIoVAvgAsTkdIAAgbICHjaICdCUIAaBGIAAAbg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AnCGcIGdjsIEQg+IDUA9ICIg2IAAliIDNguIguItIkbCcIj+AAIh6BRIoVAvgAsTj+IAAgbICHjaIDZg+IDmCQIkICIIAAAbg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AnCH/IGdjrIEQg+IDUA9ICIg3IAAlhIDNgvIguIuIkbCcIj+AAIh6BRIoVAugAsTiaIAAgcICHjZICRglIAbjHICFgZICOFWIkICIIAAAcg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AnCH/IGdjrIEQg+IDUA9ICIg3IAAlhIDNgvIguIuIkbCcIj+AAIh6BRIoVAugAsTiaIAAgcICHjZIg8jsIDoAAICFgZICOFWIkICIIAAAcg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Ak8IYIGbjsIESg+IDUA9ICHg2IAAliIDOguIgvItIkaCcIj+AAIh6BRIoVAvgAqNiCIAAgbICHjaIg9jsIDoAAICGgZICOFXIkJCIIAAAbgAsAl3IiZhcIBdjaICFBXIAgCDIAABcg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Aj4JDIGbjsIESg+IDUA9ICHg2IAAliIDOguIgvItIkaCcIj+AAIh6BRIoVAvgApJhXIAAgbICHjaIg9jsIDoAAICGgZICOFXIkJCIIAAAbgAq8lMIiZhcIiIiXIApiZIC8BWICFBXIAgCDIAABcg");
	var mask_1_graphics_57 = new cjs.Graphics().p("Aj4KWIGbjrIESg+IDUA9ICHg2IAAlkIDOgtIgvIuIkaCcIj+AAIh6BRIoVAvgApJgDIAAgbICHjaIg9jsIDoAAICGgZICOFXIkJCIIAAAbgAq8j4IiZhcIiIiXIApiZIEDioIA+DUIAACBIAgCDIAABcg");
	var mask_1_graphics_58 = new cjs.Graphics().p("Aj4K5IGbjrIESg+IDUA9ICHg3IAAlkIDOguIgvIvIkaCcIj+AAIh6BRIoVAvgApJAeIAAgcICHjYIg9jsIDoAAICGgZICOFXIkJCGIAAAcgAq8jWIiZhcIiIiXIApiZIEDinIDShFIBdDUIjxBEIAACCIAgCCIAABcg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Aj4LoIGbjsIESg+IDUA9ICHg2IAAlkIDOguIgvIvIkaCcIj+AAIh6BRIoVAvgApJBMIAAgbICHjYIg9jsIDoAAICGgZICOFXIkJCGIAAAbgAq8inIiZhcIiIiXIApiZIEDinIDShFIBdheIDGAaIjGEYIjxBEIAACBIAgCDIAABcg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Aj4NpIGbjrIESg+IDUA9ICHg2IAAlkIDOgvIgvIwIkaCcIj+AAIh6BRIoVAvgApJDOIAAgbICHjYIg9jsIDoAAICGgZICOFVIkJCIIAAAbgAq8glIiZhcIiIiXIApiZIEDioIDShEIBdheIA4kEICOEeIjGEYIjxBEIAACBIAgCDIAABcg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Aj4ObIGbjrIESg+IDUA9ICHg3IAAljIDOgvIgvIwIkaCbIj+AAIh6BSIoVAugApJEAIAAgcICHjZIg9jrIDoAAICGgZICOFVIkJCIIAAAcgAq8ALIiZhbIiIiXIApiYIEDioIDShFIBdhdIA4kEICOEeIjGEXIjxBEIAACCIAgCCIAABbgAoDtPIiciEIB5hdIBcAjIAAC+g");
	var mask_1_graphics_62 = new cjs.Graphics().p("Aj4QJIGbjsIESg+IDUA9ICHg2IAAlkIDOguIgvIvIkaCcIj+AAIh6BRIoVAvgApJFtIAAgbICHjaIg9jqIDoAAICGgZICOFVIkJCIIAAAbgAq8B4IiZhcIiIiVIApiZIEDinIDShFIBdheIA4kDICOEdIjGEYIjxBEIAACBIAgCBIAABcgAoDriIiciEIAAkIIClgwIAADUIAwAqIAAC+g");
	var mask_1_graphics_63 = new cjs.Graphics().p("Aj4QJIGbjsIESg+IDUA9ICHg2IAAlkIDOguIgvIvIkaCcIj+AAIh6BRIoVAvgApJFtIAAgbICHjaIg9jqIDoAAICGgZICOFVIkJCIIAAAbgAq8B4IiZhcIiIiVIApiZIEDinIDShFIBdheIA4kDICOEdIjGEYIjxBEIAACBIAgCBIAABcgAoDriIiciEIAAkIIClgwIEBAxIA/CbIkQAyIAAC+g");
	var mask_1_graphics_69 = new cjs.Graphics().p("AknQJIGbjsIETg+IDTA9ICIg2IAAlkICqgmIAiAAIgtInIkaCcIj/AAIh5BRIoWAvgAp4FtIAAgbICHjaIg8jqIDoAAICGgZICNFVIkICIIAAAbgAOuFcIgiAAIjAAAIAAg9IFAh1IAACygAOuFcgArrB4IiYhcIiIiVIAoiZIEDinIDThFIBdheIA4kDICNEdIjFEYIjxBEIAACBIAfCBIAABcgAoyriIiciEIAAkIICmgwIEBAxIA/CbIkQAyIAAC+g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AknQJIGbjsIETg+IDTA9ICIg2IAAlkICqgmIAiAAIgtInIkaCcIj/AAIh5BRIoWAvgAp4FtIAAgbICHjaIg8jqIDoAAICGgZICNFVIkICIIAAAbgAOuFcIgiAAIjAAAIAAg9IhJgmIBqi3IEfBoIAACygAOuFcgArrB4IiYhcIiIiVIAoiZIEDinIDThFIBdheIA4kDICNEdIjFEYIjxBEIAACBIAfCBIAABcgAoyriIiciEIAAkIICmgwIEBAxIA/CbIkQAyIAAC+g");
	var mask_1_graphics_71 = new cjs.Graphics().p("AknQJIGbjsIETg+IDTA9ICIg2IAAlkICqgmIjAAAIAAg9IhJgmIi9h+IAAh7IEnBCIEfBoIAACyIheAAIgiAAIAiAAIgtInIkaCcIj/AAIh5BRIoWAvgAp4FtIAAgbICHjaIg8jqIDoAAICGgZICNFVIkICIIAAAbgArrB4IiYhcIiIiVIAoiZIEDinIDThFIBdheIA4kDICNEdIjFEYIjxBEIAACBIAfCBIAABcgAoyriIiciEIAAkIICmgwIEBAxIA/CbIkQAyIAAC+g");
	var mask_1_graphics_72 = new cjs.Graphics().p("AknQJIGbjsIETg+IDTA9ICIg2IAAlkICqgmIjAAAIAAg9IhJgmIi9h+IAAh7IEniDIAADFIEfBoIAACyIheAAIgiAAIAiAAIgtInIkaCcIj/AAIh5BRIoWAvgAp4FtIAAgbICHjaIg8jqIDoAAICGgZICNFVIkICIIAAAbgArrB4IiYhcIiIiVIAoiZIEDinIDThFIBdheIA4kDICNEdIjFEYIjxBEIAACBIAfCBIAABcgAoyriIiciEIAAkIICmgwIEBAxIA/CbIkQAyIAAC+g");
	var mask_1_graphics_73 = new cjs.Graphics().p("AknQJIGbjsIETg+IDTA9ICIg2IAAlkICqgmIjAAAIAAg9IhJgmIi9h+IAAh7IEniDIDjB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkaCcIj/AAIh5BRIoWAvgAp4FtIAAgbICHjaIg8jqIDoAAICGgZICNFVIkICIIAAAbgArrB4IiYhcIiIiVIAoiZIEDinIDThFIBdheIA4kDICNEdIjFEYIjxBEIAACBIAfCBIAABcgAoyriIiciEIAAkIICmgwIEBAxIA/CbIkQAyIAAC+g");
	var mask_1_graphics_76 = new cjs.Graphics().p("AlvQJIGbjsIESg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIguInIkaCcIj+AAIh6BRIoVAvgArAFtIAAgbICHjaIg9jqIDoAAICGgZICOFVIkJCIIAAAbgAszB4IiZhcIiIiVIApiZIEDinIDShFIBdheIA4kDICOEdIjGEYIjxBEIAACBIAgCBIAABcgAPiBzIAAjwIA8AAIA3DwgAp6riIiciEIAAkIIClgwIEBAxIA/CbIkQAyIAAC+g");
	var mask_1_graphics_77 = new cjs.Graphics().p("AnrQJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAs8FtIAAgbICHjaIg9jqIDpAAICFgZICOFVIkJCIIAAAbgAuvB4IiZhcIiIiVIApiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANmBzIAAjwIA8AAIA3goID4CqIj4BugAr2riIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_78 = new cjs.Graphics().p("An6QJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAtLFtIAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+B4IiYhcIiIiVIAoiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANXBzIAAjwIA8AAIEMjMIBAFJIkVBzgAsFriIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_79 = new cjs.Graphics().p("An6QJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAtLFtIAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+B4IiYhcIiIiVIAoiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANXBzIAAjwIA8AAIixhRIFIjiIB1BnIBAFJIkVBzgAsFriIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_80 = new cjs.Graphics().p("An6QJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAtLFtIAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+B4IiYhcIiIiVIAoiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANXBzIAAjwIA8AAIixhRIhahkID/jjICjBlIB1BnIBAFJIkVBzgAsFriIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_81 = new cjs.Graphics().p("An6QJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAtLFtIAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+B4IiYhcIiIiVIAoiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANXBzIAAjwIA8AAIixhRIjYjyIDlhVICYAAICjBlIB1BnIBAFJIkVBzgAsFriIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_82 = new cjs.Graphics().p("An6QJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAtLFtIAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+B4IiYhcIiIiVIAoiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANXBzIAAjwIA8AAIixhRIjYjyIgzi7ICPAAICJBmICYAAICjBlIB1BnIBAFJIkVBzgAsFriIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_83 = new cjs.Graphics().p("An6QJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAtLFtIAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+B4IiYhcIiIiVIAoiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANXBzIAAjwIA8AAIixhRIjYjyIgzi7IBMjNICXB2IhUBXICJBmICYAAICjBlIB1BnIBAFJIkVBzgAsFriIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_84 = new cjs.Graphics().p("An6QJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAtLFtIAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+B4IiYhcIiIiVIAoiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANXBzIAAjwIA8AAIixhRIjYjyIgzi7IBMjNIDLhdIA/CyIhzAhIhUBXICJBmICYAAICjBlIB1BnIBAFJIkVBzgAsFriIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_85 = new cjs.Graphics().p("An6QJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAtLFtIAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+B4IiYhcIiIiVIAoiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANXBzIAAjwIA8AAIixhRIjYjyIgzi7IBMjNIDLhdIAAg4IEDguIjEEYIhzAhIhUBXICJBmICYAAICjBlIB1BnIBAFJIkVBzgAsFriIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_86 = new cjs.Graphics().p("An6QJIGdjsIEQg+IDUA9ICHg2IAAlkICrgmIjAAAIgBg9IhIgmIi+h+IAAh7IEniDIDkB+IA8CvIAACyIheAAIgiAAIAiAAIgtInIkbCcIj+AAIh6BRIoVAvgAtLFtIAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+B4IiYhcIiIiVIAoiZIEDinIDShFIBeheIA3kDICOEdIjFEYIjyBEIAACBIAgCBIAABcgANXBzIAAjwIA8AAIixhRIjYjyIgzi7IBMjNIDLhdIADipICFhAIB7CDIjEEYIhzAhIhUBXICJBmICYAAICjBlIB1BnIBAFJIkVBzgAsFriIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_87 = new cjs.Graphics().p("An6QVIGdjrIEQg+IDUA9ICHg2IAAlkICrgnIjAAAIgBg8IhIgnIi+h+IAAh7IEniCIDkB8IA8CxIAACxIheAAIgiAAIAiAAIgtIoIkbCcIj+AAIh6BRIoVAvgAtLF6IAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+CFIiYhcIiIiVIAoiZIEDioIDShEIBeheIA3kEICOEeIjFEXIjyBFIAACBIAgCBIAABcgANXCAIAAjxIA8AAIixhRIjYjxIgzi7IBMjNIDLhdIkcixIEThiICRAqIB7CCIjEEZIhzAgIhUBYICJBmICYAAICjBkIB1BoIBAFJIkVBzgAsFrVIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");
	var mask_1_graphics_88 = new cjs.Graphics().p("An6QVIGdjrIEQg+IDUA9ICHg2IAAlkICrgnIjAAAIgBg8IhIgnIi+h+IAAh7IEniCIDkB8IA8CxIAACxIheAAIgiAAIAiAAIgtIoIkbCcIj+AAIh6BRIoVAvgAtLF6IAAgbICHjaIg8jqIDoAAICFgZICOFVIkICIIAAAbgAu+CFIiYhcIiIiVIAoiZIEDioIDShEIBeheIA3kEICOEeIjFEXIjyBFIAACBIAgCBIAABcgANXCAIAAjxIA8AAIixhRIjYjxIgzi7IBMjNIDLhdIj3gxIgliAIEThiICRAqIB7CCIjEEZIhzAgIhUBYICJBmICYAAICjBkIB1BoIBAFJIkVBzgAsFrVIiciEIAAkIIClgwIEBAxIA/CbIkPAyIAAC+g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_1_graphics_39,x:-49.8,y:124.7}).wait(1).to({graphics:mask_1_graphics_40,x:-42.2,y:121.6}).wait(1).to({graphics:mask_1_graphics_41,x:-31,y:121.6}).wait(1).to({graphics:mask_1_graphics_42,x:-16.9,y:121.6}).wait(1).to({graphics:mask_1_graphics_43,x:-13.8,y:114.2}).wait(1).to({graphics:mask_1_graphics_44,x:-14.5,y:101.9}).wait(6).to({graphics:mask_1_graphics_50,x:-31.4,y:90.9}).wait(1).to({graphics:mask_1_graphics_51,x:-31.4,y:87.8}).wait(1).to({graphics:mask_1_graphics_52,x:-31.4,y:77.8}).wait(1).to({graphics:mask_1_graphics_53,x:-31.4,y:77.8}).wait(2).to({graphics:mask_1_graphics_55,x:-44.8,y:75.4}).wait(1).to({graphics:mask_1_graphics_56,x:-51.6,y:71.1}).wait(1).to({graphics:mask_1_graphics_57,x:-51.6,y:62.7}).wait(1).to({graphics:mask_1_graphics_58,x:-51.6,y:59.3}).wait(1).to({graphics:mask_1_graphics_59,x:-51.6,y:54.6}).wait(1).to({graphics:mask_1_graphics_60,x:-51.6,y:41.6}).wait(1).to({graphics:mask_1_graphics_61,x:-51.6,y:36.6}).wait(1).to({graphics:mask_1_graphics_62,x:-51.6,y:25.7}).wait(1).to({graphics:mask_1_graphics_63,x:-51.6,y:25.7}).wait(6).to({graphics:mask_1_graphics_69,x:-46.9,y:25.7}).wait(1).to({graphics:mask_1_graphics_70,x:-46.9,y:25.7}).wait(1).to({graphics:mask_1_graphics_71,x:-46.9,y:25.7}).wait(1).to({graphics:mask_1_graphics_72,x:-46.9,y:25.7}).wait(1).to({graphics:mask_1_graphics_73,x:-46.9,y:25.7}).wait(3).to({graphics:mask_1_graphics_76,x:-39.7,y:25.7}).wait(1).to({graphics:mask_1_graphics_77,x:-27.3,y:25.7}).wait(1).to({graphics:mask_1_graphics_78,x:-25.8,y:25.7}).wait(1).to({graphics:mask_1_graphics_79,x:-25.8,y:25.7}).wait(1).to({graphics:mask_1_graphics_80,x:-25.8,y:25.7}).wait(1).to({graphics:mask_1_graphics_81,x:-25.8,y:25.7}).wait(1).to({graphics:mask_1_graphics_82,x:-25.8,y:25.7}).wait(1).to({graphics:mask_1_graphics_83,x:-25.8,y:25.7}).wait(1).to({graphics:mask_1_graphics_84,x:-25.8,y:25.7}).wait(1).to({graphics:mask_1_graphics_85,x:-25.8,y:25.7}).wait(1).to({graphics:mask_1_graphics_86,x:-25.8,y:25.7}).wait(1).to({graphics:mask_1_graphics_87,x:-25.8,y:24.4}).wait(1).to({graphics:mask_1_graphics_88,x:-25.8,y:24.4}).wait(151).to({graphics:null,x:0,y:0}).wait(56));

	// lenta
	this.instance_6 = new lib.lenta_1();
	this.instance_6.setTransform(-27,35.5);
	this.instance_6._off = true;

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({_off:true},200).wait(56));

	// venokR
	this.instance_7 = new lib.venokR_1();
	this.instance_7.setTransform(-7.5,69,0.08,0.08,0,0,0,-49.2,91.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.09,scaleY:0.09,x:-3,y:60.6,alpha:0.012},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-1.3,y:57.5,alpha:0.05},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:1.5,y:52.3,alpha:0.111},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:5.3,y:45.2,alpha:0.195},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:9.9,y:36.7,alpha:0.296},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:15,y:27.2,alpha:0.41},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:20.3,y:17.3,alpha:0.528},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:25.5,y:7.6,alpha:0.642},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:30.3,y:-1.2,alpha:0.747},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:34.3,y:-8.8,alpha:0.837},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:37.6,y:-14.8,alpha:0.909},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:39.9,y:-19.1,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:41.3,y:-21.7,alpha:0.99},0).wait(1).to({regX:-49.5,regY:92,scaleX:1,scaleY:1,x:-7.5,y:69,alpha:1},0).to({_off:true},211).wait(56));

	// venokL
	this.instance_8 = new lib.venokL_1();
	this.instance_8.setTransform(-39.5,71.5,0.09,0.09,0,0,0,45.2,91.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:-44.1,y:62.3,alpha:0.012},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-45.6,y:59.2,alpha:0.05},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-48.1,y:54,alpha:0.111},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-51.6,y:47,alpha:0.195},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-55.8,y:38.6,alpha:0.296},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-60.4,y:29.1,alpha:0.41},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:-65.3,y:19.3,alpha:0.528},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-70,y:9.7,alpha:0.642},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-74.3,y:1,alpha:0.747},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-78,y:-6.5,alpha:0.837},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-81,y:-12.5,alpha:0.909},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-83.1,y:-16.7,alpha:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-84.3,y:-19.3,alpha:0.99},0).wait(1).to({regX:45,regY:91.5,scaleX:1,scaleY:1,x:-39.5,y:71.5,alpha:1},0).to({_off:true},211).wait(56));

	// bottle
	this.instance_9 = new lib.bottle_1();
	this.instance_9.setTransform(-224,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-30},10,cjs.Ease.get(1)).to({_off:true},229).wait(56));

	// bokal
	this.instance_10 = new lib.bokal_1();
	this.instance_10.setTransform(224,107);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:49},10,cjs.Ease.get(1)).to({_off:true},229).wait(56));

	// light
	this.instance_11 = new lib.light_1();
	this.instance_11.setTransform(-1,29.5);
	this.instance_11.alpha = 0;
	this.instance_11.compositeOperation = "lighter";
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(119).to({_off:false},0).to({alpha:0.59},10).to({_off:true},110).wait(56));

	// bgImg
	this.instance_12 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(295));

	// bg
	this.instance_13 = new lib.bg();
	this.instance_13.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(295));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-294.5,-300,590,622);


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
p.nominalBounds = new cjs.Rectangle(5.5,299,590,623);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;