(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,40);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,46);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,106);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,34);


(lib.ps5 = function() {
	this.initialize(img.ps5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,336);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALlBdIAAgOIguAAIAAg/IANAAIAAAzIAZAAIAAgzIAOAAIAAAzIAHAAIgCAagARdBNIAFgKQAEACADAAQAFAAAEgFIgagwIAQAAIARAiIAPgiIAPAAIgYAyQgFAHgEAEQgFADgHAAQgHAAgGgDgAOjBHQgJgJAAgOQAAgOAJgJQAKgKAOAAQAPAAAIAKQAKAJAAAOQAAAOgKAJQgJAKgOgBQgPABgJgKgAOtAiQgFAGAAAIQAAAJAFAFQAGAGAIAAQAJAAAEgGQAFgFABgJQgBgIgFgGQgFgGgIABQgJgBgFAGgAMdBHQgJgJAAgOQAAgNAJgKQAJgKAPAAQAHABAGACQAHAEAEAEIgJAJQgEgEgDgBQgDgBgFAAQgIgBgGAGQgEAGAAAIQAAAJAEAFQAGAGAIAAQAFAAAEgCQAEgCADgEIAJAKQgGAGgFACQgFACgKAAQgNAAgKgJgAIlBPIABgLIACAAQAEABABgCIAEgFIACgMIABgiIAsAAIAAA/IgNAAIAAgyIgSAAIAAAFQAAARgDALQgCALgEAEQgEADgIAAgABWBHQgJgJAAgOQAAgOAJgJQAKgKAOAAQAOAAAKAKQAKAJgBAOQABAOgKAJQgKAKgOgBQgOABgKgKgABgAiQgFAHAAAHQAAAIAFAGQAGAGAIAAQAJAAAEgGQAGgFAAgJQAAgHgGgHQgEgGgJABQgIgBgGAGgAAWBHQgKgJABgOQgBgNAKgKQAJgKAOAAQAIABAGACQAGAEAEAEIgIAJQgEgEgEgBQgDgBgFAAQgIgBgFAGQgFAGAAAIQAAAJAFAFQAFAGAIAAQAFAAAEgCQAEgCADgEIAJAKQgGAGgFACQgEACgLAAQgMAAgKgJgAl7BHQgJgJAAgOQAAgNAJgKQAJgKAPAAQAHABAGACQAGADAFAFIgIAJQgEgEgEgBQgEgBgEAAQgJgBgFAGQgFAHAAAHQAAAIAFAGQAGAGAIAAQAEAAAEgCIAIgGIAJAKQgHAGgFACQgEACgKAAQgOAAgJgJgAsMBKQgHgJAAgNIAAgkIANAAIAAAkQABAHAEAFQACAEAHAAQAHAAADgEQAEgEAAgIIAAgkIANAAIAAAkQABANgIAJQgHAGgNAAQgMAAgIgGgAtSBHQgJgIAAgPQAAgOAJgJQAKgKAOAAQAJAAAEACQAHADAEAEIgJAKIgHgE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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-117.5,-9.2,235,18.5), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0001A").s().p("AgODxQgbgaABgoQgBgmAbgaQAZgbAoAAQAvAAAaAlIgjAcQgQgUgXAAQgRAAgMANQgNAOAAATQAAAUANAOQAMANARAAQAXAAARgVIAlAaQgdAngxAAQgmAAgZgZgAFTEHIAAgrIAyAAIAAArgAEEEHIAAhjIhDBjIguAAIAAivIAwAAIAABiIBEhiIAtAAIAACvgAhxEHIAAhDIg/AAIAABDIgxAAIAAivIAxAAIAABBIA/AAIAAhBIAwAAIAACvgAklEHIgNgfIhDAAIgNAfIgzAAIBKiwIAvAAIBLCwgAlnDCIAnAAIgTgygAq6EHIAAivIAwAAIAACEIAyAAIAAiEIAwAAIAACEIAyAAIAAiEIAwAAIAACvgAFgDOIgPhhIAAgVIA2AAIAAAVIgPBhgAi2gBIAAgjIhdAAIgDAjIgrAAIAAhOIAPAAQAKgZADgaQAFgegBgvIAAgEICGAAIAACEIATAAIgFBOgAjxinQAAAugPAqIA1AAIAAhaIgmAAgAFvg1QgXgTgHgfIgTAAIAABDIgxAAIAAivIAxAAIAABBIAUAAQAHgeAXgTQAZgUAgAAQAmAAAaAbQAZAaAAAmQAAAmgZAbQgZAagnAAQgiAAgYgUgAGMidQgLANAAAUQAAAUALAOQAMAOARAAQASAAALgOQALgNgBgVQABgUgLgNQgMgOgRAAQgSAAgLAOgABTg7QgbgaAAgnQAAgmAbgaQAbgbAoAAQAoAAAbAbQAbAaAAAmQAAAmgbAbQgcAagoAAQgoAAgagagAB2idQgNAOAAATQAAAUANAOQAMAOAUAAQATAAANgOQAMgOAAgUQAAgTgMgOQgNgOgUAAQgTAAgMAOgAnqg7QgbgaAAgnQAAgmAbgaQAbgbAoAAQAoAAAcAbQAaAaABAmQAAAmgbAbQgcAagoAAQgpAAgagagAnHidQgNAOAAATQAAAUANAOQANAOATAAQAUAAAMgOQANgOAAgUQAAgTgNgOQgNgOgTAAQgUAAgMAOgAKMgkIAAhjIhEBjIguAAIAAivIAxAAIAABiIBDhiIAtAAIAACvgAh0gkIAAivIBZAAQAgAAAPAQQALALAAARQAAAcgbALQAjAMAAAgQAAAWgRANQgSANgeAAgAhFhLIAmAAQAXAAgBgRQAAgPgXAAIglAAgAhFiNIAeAAQAYAAAAgQQAAgPgXAAIgfAAgApOgkIAAiFIg8AAIAACFIgwAAIAAivICcAAIAACvgAJPjoQgLgKgDgTIAagEQAGAPALAAQAMAAAGgPIAbAEQgDATgLAKQgMAKgTAAQgRAAgMgKg");
	this.shape.setTransform(-27.4,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsbDwQgbgaAAgnQAAgmAbgaQAbgbAoAAQAoAAAcAbQAaAaAAAmQAAAmgbAbQgbAagoAAQgpAAgagagAr4COQgMAOAAATQAAAUAMAOQANAOATAAQAUAAANgOQAMgOAAgUQAAgTgNgOQgNgOgTAAQgUAAgMAOgAAsEHIAAhjIhDBjIgtAAIAAivIAwAAIAABiIBChiIAuAAIAACvgAjsEHIAAivIBLAAQAhAAAUAQQATARAAAdQAAAegVARQgUAQgiAAIgYAAIAAAygAi8CvIAXAAQANAAAHgGQAIgHAAgKQAAgXgcAAIgXAAgAkxEHIgNgfIhDAAIgNAfIgzAAIBLiwIAuAAIBLCwgAlzDCIAnAAIgTgygApgEHIAAivIBZAAQAhAAAPAQQALALAAARQAAAcgbALQAjAMAAAgQAAAWgSANQgRANgfAAgAoxDgIAlAAQAXAAAAgRQAAgPgXAAIglAAgAoxCeIAeAAQAXAAAAgQQAAgPgWAAIgfAAgAujEHIAAiFIg0AAIAAgqICZAAIAAAqIg0AAIAACFgAC6DOIAAgqIBSAAIAAAqgACXgBIAAgjIhdAAIgDAjIgsAAIAAhOIAQAAQAJgZAEgaQAEgeAAgvIAAgEICGAAIAACEIATAAIgFBOgABbinQAAAugOAqIA0AAIAAhaIgmAAgAmlgtIATgjQAKAGAKAAQAJAAAGgIIhEiBIA2AAIAoBSIAlhSIA1AAIhECFQgMAYgOAKQgOAKgUAAQgWAAgUgLgAsYgtIATgjQAJAGALAAQAJAAAGgIIhFiBIA2AAIAoBSIAmhSIA0AAIhECFQgMAYgNAKQgOAKgUAAQgXAAgTgLgAOogkIAAivIAwAAIAACvgANXgkIAAg9QgTALgaAAQgbAAgPgQQgQgPAAgcIAAhCIAwAAIAAA1QAAAbAYAAQATAAAMgJIAAhHIAxAAIAACvgAKmgkIAAg1IgWAAIgjA1Ig4AAIAqg9QgkgPAAgnQAAgeAVgQQAUgOAfAAIBTAAIAACvgAJsiUQAAAKAHAGQAHAGAMAAIAgAAIAAgsIggAAQgaAAAAAWgAHDgkIAAiFIg0AAIAAgqICZAAIAAAqIg1AAIAACFgAFJgkIAAhjIhDBjIgtAAIAAivIAvAAIAABiIBEhiIAtAAIAACvgAh7gkIAAhjIhEBjIgtAAIAAivIAwAAIAABiIBEhiIAtAAIAACvgAnzgkIAAiFIg8AAIAACFIgwAAIAAivICcAAIAACvgAtfgkIgshBIgSAUIAAAtIgwAAIAAivIAwAAIAABHIA8hHIA6AAIhCBLIBEBkgAi3joQgMgKgDgTIAbgEQAFAPAMAAQANAAAFgPIAaAEQgCATgMAKQgMAKgSAAQgSAAgLgKg");
	this.shape_1.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-98.4,-56.6,196.9,113.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0001A").s().p("AG1CAIAAiPIhjCPIhDAAIAAj/IBHAAIAACPIBjiPIBCAAIAAD/gACmCAIhBhfIgaAdIAABCIhHAAIAAj/IBHAAIAABoIBYhoIBVAAIhhBuIBkCRgAjuCAIAAj/IDNAAIAAA8IiHAAIAAAnIB7AAIAAA3Ih7AAIAAApICJAAIAAA8gAljCAIAAhaQgbARgmAAQgoAAgXgXQgXgWAAgoIAAhhIBHAAIAABNQAAAVAIAKQAJAJASAAQAdAAAQgNIAAhoIBHAAIAAD/g");
	this.shape.setTransform(-49.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-101.2,-60.7,202.5,121.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0001A").s().p("AMTBcIApgwQAgAcAeAAQARAAALgHQAKgJAAgOQAAgNgLgJQgKgIgRAAQgUAAgVANIgqgXIAHiBICrAAIAAA7IhzAAIgCAmQATgJAWAAQAlAAAYAUQAbAVAAAoQAAAqgeAZQgcAYgwAAQg8AAgsgpgArEBfQgngnAAg4QAAg2AognQAngnA7AAQA7AAAoAnQAnAmAAA3QAAA3goAnQgoAng6AAQg7AAgogmgAqQgwQgSAUAAAcQAAAcASAUQATAVAcAAQAdAAASgUQASgUAAgdQAAgcgSgUQgTgVgcABQgdAAgSAUgAG8BZIAngvQAnAfAsAAQAeAAAAgSQAAgIgJgFQgJgGgZgFQgxgLgUgPQgcgSAAgkQAAglAagXQAcgWAtAAQBAAAApAhIgjAyQgkgZgkAAQgZABAAAQQAAAJAIAGQAKAEAaAHQAwAKAWAQQAZASAAAjQAAAmgcAXQgcAWgvAAQhJAAgvgrgAvkBZIAogvQAmAfAtAAQAdAAAAgSQAAgIgJgFQgJgGgZgFQgwgLgVgPQgcgSAAgkQAAglAbgXQAbgWAtAAQA/AAArAhIgkAyQgjgZgkAAQgaABAAAQQAAAJAJAGQAJAEAaAHQAwAKAWAQQAaASAAAjQAAAmgdAXQgcAWgvAAQhJAAgvgrgADZCAIAAj/IBuAAQAxAAAcAYQAdAYAAAqQAAAsgfAYQgdAXgyAAIgjAAIAABKgAEgAAIAiAAQATAAALgJQAKgJAAgQQAAghgpAAIghAAgAhJCAIAAhgIhiifIBRAAIA1BdIA0hdIBPAAIhgCeIAABhgAj/CAIhtiMIAACMIhGAAIAAj/IBCAAIBpCGIAAiGIBGAAIAAD/g");
	this.shape.setTransform(-1.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-101,-53.3,202.1,106.6), null);


(lib.ps5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ps5();
	this.instance.parent = this;
	this.instance.setTransform(-62,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ps5_1, new cjs.Rectangle(-62,-168,124,336), null);


(lib.p4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-38,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4_mc, new cjs.Rectangle(-38,-17,76,34), null);


(lib.p3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-45,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_mc, new cjs.Rectangle(-45,-53,90,106), null);


(lib.p2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-18,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_mc, new cjs.Rectangle(-18,-23,36,46), null);


(lib.p1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-31,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_mc, new cjs.Rectangle(-31,-20,62,40), null);


(lib.logo_txt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_txt_mc, new cjs.Rectangle(-74,-20.1,148,40.2), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.p4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p4_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-17,76,34);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p3_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-53,90,106);


(lib.p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p2_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-23,36,46);


(lib.p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p1_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-20,62,40);


(lib.logo_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo_txt_mc();
	this.instance.parent = this;
	this.instance.setTransform(89.7,0);

	this.instance_1 = new lib.logo_txt_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-89.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_txt, new cjs.Rectangle(-163.6,-20.1,327.3,40.2), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.8)"],[0.561,1],-11,-2,0,-11,-2,145.8).s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF1AAEHEIQEIEHAAF0QAAF1kIEHQkHEIl1AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF1AAEHEIQEIEHAAF0QAAF1kIEHQkHEIl1AAQl0AAkHkIg");

	// logo_txt
	this.instance = new lib.logo_txt();
	this.instance.parent = this;
	this.instance.setTransform(89.7,0.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#DF2323","#7B1313"],[0,1],0,0,0,0,0,91.6).s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF1AAEHEIQEIEHAAF0QAAF1kIEHQkHEIl1AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-90,-90,180,180), null);


(lib.particleMcMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.ceil(Math.random()*4));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Слой 2
	this.instance = new lib.p1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.3,1,1,0,0,0,-0.1,0.1);

	this.instance_1 = new lib.p2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.8,1,1,0,0,0,0.1,-0.1);

	this.instance_2 = new lib.p3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.3,-1.7,1,1,0,0,0,-1.6,-0.3);

	this.instance_3 = new lib.p4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.3,-1.7,1,1,0,0,0,-1.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-20.4,62,40);


(lib.particle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.particleMcMc();
	this.instance.parent = this;
	this.instance.setTransform(-15,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.particle2, new cjs.Rectangle(-45.9,-20.6,62,40), null);


(lib.particle2Movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Слой 1
	this.instance = new lib.particle2();
	this.instance.parent = this;
	this.instance.setTransform(14.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-14.7,regY:-1.7,x:0.2,y:14.1},0).wait(1).to({y:29.8},0).wait(1).to({y:45.5},0).wait(1).to({y:61.1},0).wait(1).to({y:76.6},0).wait(1).to({y:92},0).wait(1).to({y:107.3},0).wait(1).to({y:122.4},0).wait(1).to({y:137.3},0).wait(1).to({y:152},0).wait(1).to({y:166.6},0).wait(1).to({y:180.8},0).wait(1).to({y:194.8},0).wait(1).to({y:208.6},0).wait(1).to({y:222},0).wait(1).to({y:235.2},0).wait(1).to({y:248},0).wait(1).to({y:260.5},0).wait(1).to({y:272.7},0).wait(1).to({y:284.6},0).wait(1).to({y:296.2},0).wait(1).to({y:307.4},0).wait(1).to({y:318.3},0).wait(1).to({y:328.8},0).wait(1).to({y:339.1},0).wait(1).to({y:349},0).wait(1).to({y:358.6},0).wait(1).to({y:367.9},0).wait(1).to({y:376.8},0).wait(1).to({y:385.5},0).wait(1).to({y:393.9},0).wait(1).to({y:402},0).wait(1).to({y:409.8},0).wait(1).to({y:417.4},0).wait(1).to({y:424.7},0).wait(1).to({y:431.8},0).wait(1).to({y:438.6},0).wait(1).to({y:445.2},0).wait(1).to({y:451.5},0).wait(1).to({y:457.6},0).wait(1).to({y:463.5},0).wait(1).to({y:469.2},0).wait(1).to({y:474.8},0).wait(1).to({y:480.1},0).wait(1).to({y:485.2},0).wait(1).to({y:490.1},0).wait(1).to({y:494.9},0).wait(1).to({y:499.5},0).wait(1).to({y:503.9},0).wait(1).to({y:508.2},0).wait(1).to({y:512.3},0).wait(1).to({y:516.3},0).wait(1).to({y:520.2},0).wait(1).to({y:523.9},0).wait(1).to({y:527.4},0).wait(1).to({y:530.9},0).wait(1).to({y:534.2},0).wait(1).to({y:537.4},0).wait(1).to({y:540.5},0).wait(1).to({y:543.4},0).wait(1).to({y:546.3},0).wait(1).to({y:549},0).wait(1).to({y:551.7},0).wait(1).to({y:554.2},0).wait(1).to({y:556.7},0).wait(1).to({y:559},0).wait(1).to({y:561.3},0).wait(1).to({y:563.5},0).wait(1).to({y:565.6},0).wait(1).to({y:567.6},0).wait(1).to({y:569.5},0).wait(1).to({y:571.3},0).wait(1).to({y:573.1},0).wait(1).to({regX:0,regY:0,x:14.9,y:576.5},0).wait(1).to({regX:-14.7,regY:-1.7,x:0.2,y:576.4,alpha:0.878},0).wait(1).to({y:578,alpha:0.761},0).wait(1).to({y:579.5,alpha:0.649},0).wait(1).to({y:580.9,alpha:0.542},0).wait(1).to({y:582.2,alpha:0.44},0).wait(1).to({y:583.5,alpha:0.343},0).wait(1).to({y:584.8,alpha:0.251},0).wait(1).to({y:585.9,alpha:0.163},0).wait(1).to({y:587,alpha:0.079},0).wait(1).to({regX:0,regY:0,x:14.9,y:589.8,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-20.6,62,40);


(lib.snowFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		for(var i=0; i<2; i++){
			var cloneParticle = new lib.particle2Movie();
			cloneParticle.rotation = Math.random()*360;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.5 +.5;
			this.addChild(cloneParticle);
		}
		*/
		var cloneParticle = new lib.particle2Movie();
		var an = Math.random()*360;
		if(an > 130 || an < 50){
			cloneParticle.rotation = an;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.5 +.5;
			this.addChild(cloneParticle);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// particles
	this.particle = new lib.particle2Movie();
	this.particle.name = "particle";
	this.particle.parent = this;
	this.particle.cache(-33,-23,66,44);

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-20.5,62,40);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-52.6,-199.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,280.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(181));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-364.7,-0.1,2,2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,x:-47.4,y:0},10,cjs.Ease.get(1)).wait(40).to({regX:-2.5,scaleX:0.02,scaleY:0.02,x:79.2},10,cjs.Ease.get(-1)).wait(1));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-359.1,0,2,2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,x:-44.7},10,cjs.Ease.get(1)).wait(40).to({scaleX:0.02,scaleY:0.02,x:79.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-359.4,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.94,scaleY:0.94,x:-44.9},10,cjs.Ease.get(1)).wait(40).to({regX:-2.5,scaleX:0.02,scaleY:0.02,x:79.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(120));

	// ps5
	this.instance_5 = new lib.ps5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(85.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181));

	// Слой_8
	this.sn = new lib.snowFront();
	this.sn.name = "sn";
	this.sn.parent = this;
	this.sn.setTransform(89.7,4.3);

	this.timeline.addTween(cjs.Tween.get(this.sn).wait(181));

	// bg
	this.instance_6 = new lib.bg_1();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-561.5,-300,762.3,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.5,299,762.3,602);
// library properties:
lib.properties = {
	id: '931BD8DFA8FE4E65AE6CBA75C0F9C43A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2.png", id:"p2"},
		{src:"images/p3.png", id:"p3"},
		{src:"images/p4.png", id:"p4"},
		{src:"images/ps5.png", id:"ps5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['931BD8DFA8FE4E65AE6CBA75C0F9C43A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;