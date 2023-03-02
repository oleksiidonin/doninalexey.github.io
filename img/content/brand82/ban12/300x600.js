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
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/bgImg4.jpg", id:"bgImg4"},
		{src:"images/car.png", id:"car"},
		{src:"images/snow1.png", id:"snow1"},
		{src:"images/snow2.png", id:"snow2"},
		{src:"images/wheel.png", id:"wheel"}
	]
};



// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,707,735);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg4 = function() {
	this.initialize(img.bgImg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,218);


(lib.snow1 = function() {
	this.initialize(img.snow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,435);


(lib.snow2 = function() {
	this.initialize(img.snow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,871,778);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,52);


(lib.wheelMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wheel();
	this.instance.setTransform(-26,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-26,52,52);


(lib.t4_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmuhjIAcAAIAADCICyjMIAAEIIgdAAIAAjBIixDMgALJBwIAhgfQAIASAQAJQAOAHAPAAQARAAALgJQAMgKAAgQQAAgNgKgKQgJgIgfgLQgcgJgOgNQgUgQAAgdQAAgfATgVQAXgXAnAAQAsAAAdAeIgaAiQgRgWgZAAQgSAAgKAKQgHAIAAAMQAAAKAIAHQAGAGAYAIQAnAMANAMQAWATAAAjQAAAlgYAXQgZAYgoAAQg2AAgigxgAITCXQgXgKgOgRQgTgZAAgrIAAibIAyAAIAACfQAAAYAMAOQAPARAaAAQAaAAAPgRQAMgOAAgYIAAifIAyAAIAACbQAAArgUAZQgNARgXAKQgWAKgZAAQgZAAgWgKgAGECbIg4heIg7BeIg7AAIBaiHIhMh3IA8AAIAsBQIAwhQIA7AAIhOB3IBXCHgAA7CbIAAj+ICOAAIAAArIhcAAIAAA4IBYAAIAAAqIhYAAIAABGIBcAAIAAArgAhcCbIAAj+IAyAAIAADTIBMAAIAAArgAoDCbIAAj+IAcAAIAAD+gArECbIAAj+IAuAAQAlAAAVAQQAXATAAAiQAAAfgZARQAZAGANAVQALARAAAVQAAARgIAQQgHANgMAJQgNALgSADQgLADgTAAgAqoCAIAhAAQAeAAAOgLQARgMAAgXQAAgagWgLQgOgIgdAAIgdAAgAqoAMIAVAAQAzAAAAgpQAAgbgWgKQgMgGgQAAIgWAAgAs7CbIAAjjIg+AAIAAgbICYAAIAAAbIg+AAIAADjgAl0iHQgKgJgFgMIAbgJQAEANAOAFQAHADAIAAQAaAAAGgVIAbAJQgEAMgKAJQgRAQgcAAQgcAAgRgQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.1,-16.6,178.1,33.3);


(lib.t4_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmvhSIAXAAIAAChICViqIAADcIgYAAIAAihIiUCrgAKhBmQgfggAAgvQAAgtAgggQAfggAwAAQAkAAAbAVIAAAeQgMgMgPgIQgSgIgTAAQglAAgYAaQgZAZAAAkQAAAoAdAZQAZAWAgAAQAVAAATgKQAPgIAJgKIAAAdQgdAVgjAAQgvAAgggfgAh+BmQgfggAAgvQAAgtAgggQAfggAwAAQAkAAAZAVIAAAeQgNgNgMgHQgSgIgTAAQglAAgYAaQgZAZAAAkQAAAoAdAZQAZAWAgAAQAVAAATgKQANgHAJgLIAAAdQgbAVgjAAQgvAAgggfgAH+CBIAbg7IhRiWIAAAUIg0AAIAAC9IgYAAIAAi9Ig0AAIAAgWICcAAIBCB8IA4h8IAZAAIhgDTgAEzCBIgZg8IhbAAIgZA8IgbAAIBjjdIBfDdgAERAvIgkhUIglBUIBJAAgABQCBIAAi9Ig0AAIAAgWIB/AAIAAAWIg0AAIAAC9gAn2CBIAAjTIAYAAIAADTgAqYCBIAAjTIAnAAQAfAAASANQATAPAAAdQAAAagVAOQAUAFALARQAJAPAAARQAAAdgVARQgSAOgiAAgAqABrIAbAAQAaAAAMgJQAOgLAAgTQAAgVgTgKQgLgGgZAAIgYAAgAqAAKIASAAQAqAAAAgiQAAgkgqAAIgSAAgAr7CBIAAi9Ig0AAIAAgWIB/AAIAAAWIg0AAIAAC9gAl/hxQgJgIgDgJIAWgIQAGASAWAAQAWAAAFgSIAWAIQgMAfglAAQgYAAgOgOg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.6,-13.9,163.4,27.9);


(lib.t4_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADihSIAXAAIAAChICViqIAADcIgYAAIAAihIiUCrgAmBhSIAYAAIAAChICUiqIAADcIgYAAIAAihIiUCrgAhPBmQggggAAgvQAAgtAgggQAgggAvAAQAiAAAcAVIAAAeQgNgNgPgHQgRgIgSAAQglAAgYAaQgZAZAAAkQAAAoAdAZQAZAWAhAAQASAAATgKQANgHAMgLIAAAdQgdAVghAAQgwAAgfgfgAGmCBIAAgWQAHACAFAAQANAAAHgJQAJgIACgRQACgKAAgWIAAh9ICCAAIAADTIgYAAIAAi9IhTAAIAABxQAAAXgCAKQgEAVgNALQgOANgWAAgAKECBIAAjTIAXAAIAABXIAdAAQBKAAAAA8QAAAegTARQgTARgfAAgAKbBrIAcAAQAbAAAMgMQALgLAAgTQAAgXgRgKQgKgFgaAAIgZAAgAB+CBIAAi9Ig0AAIAAgWICAAAIAAAWIg0AAIAAC9gAnICBIAAjTIAYAAIAADTgAppCBIAAjTIAmAAQAgAAARANQATAOAAAeQAAAagVAOQAVAFALARQAJAPAAARQAAAdgWARQgSAOghAAgApSBrIAbAAQAbAAALgJQAOgKAAgUQAAgVgSgKQgMgGgYAAIgZAAgApSAKIASAAQAqAAAAgiQAAgkgpAAIgTAAgArNCBIAAi9Ig0AAIAAgWICAAAIAAAWIg0AAIAAC9gAldiCIAXgIQAFASAWAAQAWAAAFgSIAXAIQgEAKgIAHQgPAOgXAAQglAAgNgfg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77,-13.9,154.1,27.9);


(lib.t1_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F3453").s().p("AHdAtQgQgRAAgcQAAgaAPgRQAQgTAbAAQAaAAAQASQAQARAAAbQAAAcgQARQgQASgaAAQgaAAgQgSgAHsggQgKANAAATQAAAUAKANQAKAMARAAQARAAAKgMQAKgNAAgUQAAgTgKgNQgKgMgRAAQgRAAgKAMgAhPA8IAAgSQAGADAHAAQAFAAAFgFQADgEAGgKIgqhVIAXAAIAeA/IAeg/IAUAAIgtBeQgNAcgVAAQgIAAgGgDgAi8AuQgQgSAAgcQAAgZAPgSQAQgTAbAAQATAAAOALQAOALADAUIgVAAQgEgYgaAAQgSAAgJAPQgIAMAAARQAAASAIANQAJAOASAAQAcAAADgfIAVAAQgBAWgOANQgPAOgWAAQgaAAgPgRgAnOA0QgOgLAAgVIAVAAQAAAaAfAAQAYAAAAgVQAAgUgXAAIgPAAIAAgOIAPAAQAIAAAGgFQAFgGAAgIQAAgRgVAAQgYAAgCAVIgVAAQABgTANgKQAMgJAUAAQATAAAMAIQAMAJAAAQQAAAJgGAIQgGAHgHACIAAAAQAKADAGAGQAHAIAAALQAAAOgKALQgNANgXAAQgXAAgOgLgApNAtQgQgRAAgcQAAgaAQgRQAQgTAbAAQAaAAAQASQAQARAAAbQAAAcgQARQgQASgaAAQgaAAgRgSgAo9ggQgKANAAATQAAAUAKANQAKAMARAAQARAAAJgMQAKgNAAgUQAAgTgKgNQgJgMgRAAQgRAAgKAMgAK+A8IAAhbIgiBbIgRAAIgjhbIAABbIgUAAIAAh3IAeAAIAiBdIAhhdIAdAAIAAB3gAFbA8IAAh3IA4AAQATAAAKAJQAKAHAAAOQAAATgSAHQAXAEAAAXQAAAQgKAKQgLAKgRAAgAFwArIAgAAQAaAAAAgTQAAgMgIgEQgGgDgNAAIgfAAgAFwgIIAdAAQAYAAAAgRQAAgKgHgEQgFgDgLAAIgeAAgAEsA8IAAh3IAWAAIAAB3gAD+A8IAAg2Ig4AAIAAA2IgVAAIAAh3IAVAAIAAAwIA4AAIAAgwIAVAAIAAB3gACEA8IAAhbIgiBbIgRAAIgjhbIAABbIgUAAIAAh3IAeAAIAiBdIAhhdIAdAAIAAB3gAkYA8IgLggIgwAAIgMAgIgWAAIAvh3IAWAAIAvB3gAkpAMIgSgxIgTAxIAlAAgAqFA8IAAhlIg3AAIAABlIgVAAIAAh3IBiAAIAAB3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,-6.3,144.6,12.6);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F3453").s().p("AEOAtQgQgSAAgbQAAgaAQgRQAQgSAbAAQAZAAAQARQAQASAAAaQAAAbgQASQgQARgaAAQgaAAgQgRgAEeggQgKANAAATQAAAUAKANQAKAMARAAQAQAAAKgNQAKgMAAgUQgBgTgJgNQgKgMgRAAQgQAAgKAMgAnaA0QgPgLAAgVIAVAAQAAAZAfAAQAYAAAAgVQAAgTgXAAIgOAAIAAgOIAOAAQAJAAAFgFQAGgGAAgIQgBgRgVAAQgYAAgCAVIgUAAQABgTANgJQALgJATAAQAUAAALAIQANAIAAAQQAAAJgGAIQgGAHgHACIAAAAQAKADAGAFQAGAIAAAMQABANgLALQgMANgYAAQgWAAgNgKgApYAtQgQgSAAgbQAAgaAPgRQAQgSAcAAQAZAAAPARQARASgBAaQABAbgRASQgQARgZAAQgaAAgQgRgApIggQgLANABATQgBAUALANQAKAMARAAQAPAAALgNQAKgMAAgUQAAgTgKgNQgKgMgRAAQgQAAgKAMgAhbA7IAAgQIAIACQAIAAAEgHQAEgIAAgVIADhEIBMAAIAAB2IgTAAIAAhjIglAAIgCA3QgBAYgJAMQgJALgOAAQgEAAgIgDgALCA7Igog5IgRARIAAAoIgUAAIAAh2IAUAAIAAA3IA1g3IAbAAIgwAwIAzBGgAJHA7IAAhaIg0BaIgYAAIAAh2IAVAAIAABaIAzhaIAZAAIAAB2gAGEA7IAAh2IA3AAQATAAALAJQAJAIAAAOQAAASgRAHQAXAEgBAXQAAAQgKAKQgLAJgQAAgAGZAqIAfAAQAbAAAAgTQAAgLgJgEQgFgDgNAAIgfAAgAGZgJIAdAAQAMAAAGgDQAFgEAAgJQAAgRgWAAIgeAAgADfA7IgegtIgfAtIgYAAIArg8Igng6IAZAAIAbArIAcgrIAXAAIgnA6IArA8gABqA7IAAgxIgYAAIgiAxIgaAAIAlgzQgagIAAgZQAAgQAKgIQALgKASAAIA3AAIAAB2gAA2gYQAAAUAUAAIAgAAIAAglIggAAQgUAAAAARgAkEA7IAAh2IAUAAIAABkIAvAAIAAhkIAVAAIAABkIAvAAIAAhkIAUAAIAAB2gAkmA7IgLgfIgwAAIgMAfIgVAAIAuh2IAWAAIAvB2gAk3AMIgSgxIgTAxIAlAAgAqQA7IAAhjIg2AAIAABjIgVAAIAAh2IBhAAIAAB2g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.2,-6.3,146.5,12.6);


(lib.snow2Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snow2();
	this.instance.setTransform(-435.5,-389);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-435.5,-389,871,778);


(lib.snow1Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snow1();
	this.instance.setTransform(363.5,-217.5,1,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-363.5,-217.5,727,435);


(lib.LX = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F3453").s().p("AHLGDIjCkoIjFEoIiaAAIESmQIj/l1ICgAAICxESIC3kSICZAAIkBF1IETGQgApvGDIAAsFICJAAIAAKPIGJAAIAAB2g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.5,-38.7,125,77.4);


(lib.logoMc1 = function() {
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


(lib.logoMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E3554").s().p("AkPDJQhwhOAAh7QAAh5BwhOQBthMCiAAQBGAAA+APQASAGgFAPQgBAFgMARQgWAYhDBcQhBBcgRAbQgPAVgBATQgCAXAcAAIFBAAQAWAAAIgcQAHgaAAgbQAAhNgtg5Qgsg3hNgcIATgcQBdAhA1A+QA4BCAABUQAABFgoA2QgIALgEAEQgIAFgOAAImSAAQhEgDgMgwQgLgqAhgzQAPgZA+hUQA+hVAaghQAFgIgFgEQgEgEgKAAQiNAAhaBAQhfBEAABwQAABmBfBHQBfBICIAAQBJAABBgWQA+gVAugnIA/AAQg2A1hQAdQhTAfhdAAQiiAAhthLg");
	this.shape.setTransform(-116,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E3554").s().p("AEVCKQgkAAghgUQgygfAAg9IAAiRIikBvIDICSIiXAAIiBhfIiPBfIsAAAQgnABgegYQgpghAAhGIAAiWIBgAAIAACfQAAA+A+AAIDaAAQATguAtggIhNAAQAIg1AwgqQA2gwBOAAIF3AAICBBfICMhfICvAAIAACfQAAA+A+AAIC3AAIAAjdIBgAAIAADdIFGAAQAhgBALgDQAQgHAAgRQAAgcgkAAIk5AAQAAhCAlguQAqg1BPAAIEYAAIAAA3IkMAAQgaAAgQASQgPAPgCAYIDjAAQA4AAAfAOQAqATAAAzQAAAxg0AUQgfALgvAAgApIAtQgUAQgCAWIFpAAIByhKIiph8IAAAgIj0AAQgaAAgWASQgUARgCAWIEjAAIAAA1IjVAAQgagBgWATg");
	this.shape_1.setTransform(43.6,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-154.4,-27.6,308.9,55.3);


(lib.finalText = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,147.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.9,-77.8,233.3,255);


(lib.bgImg4Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg3();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bgImg2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg2();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bgImg1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg1();
	this.instance.setTransform(-353.5,-367.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-353.5,-367.5,707,735);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1E1E").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wheelMc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:-36.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-72},0).wait(1).to({rotation:-108},0).wait(1).to({scaleX:1,scaleY:1,rotation:-143.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-180},0).wait(1).to({scaleX:1,scaleY:1,rotation:-216.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-252},0).wait(1).to({rotation:-288},0).wait(1).to({scaleX:1,scaleY:1,rotation:-323.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26,52,52);


(lib.snow2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow2Mc();
	this.instance.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-180},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-435.5,-389,871,778);


(lib.snow2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow2Mc();
	this.instance.setTransform(0,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-450},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389,-435.5,778,871);


(lib.snow2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow2Mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-435.5,-389,871,778);


(lib.snow1_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.snow1Mc();

	// Слой 1
	this.instance_1 = new lib.snow1Mc();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-363.5,-217.5,727,435);


(lib.logo = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.logoMc();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.4,-27.6,314,61);


(lib.car_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.wheel_1();
	this.instance.setTransform(61,-6.2,0.154,0.702);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.wheel_1();
	this.instance_1.setTransform(6.5,20.2,0.385,1);
	this.instance_1.alpha = 0.699;

	// Слой 1
	this.instance_2 = new lib.car();
	this.instance_2.setTransform(-190,-109);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-190,-109,380,218);


(lib.bgImg5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(1,1);

	// Слой 3
	this.instance = new lib.bgImg4();
	this.instance.setTransform(-150,-300);

	// Слой 1
	this.instance_1 = new lib.bgImg4Mc();
	this.instance_1.setTransform(0,0,1.067,1.067);
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-152,-302,304,604);

	this.addChild(this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165,-325,334,654);


(lib.bgImg4_1 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(26,42,67,0.788)").s().p("AmkJ/IVa1ZIVcVZI1cVcgEgkRgJYIWB2CIWAWCI2AV/g");
	this.shape.setTransform(5.5,-127.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(36,32,43,0.886)").s().p("A3zAAIXz3zIX0XzI30X0g");
	this.shape_1.setTransform(-53.3,105.9);

	this.shape.mask = this.shape_1.mask = mask;

	// Слой 1
	this.instance = new lib.bgImg4Mc();

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.snow2Movie = function() {
	this.initialize();

	// snow2
	this.instance = new lib.snow2_3();
	this.instance.setTransform(211,20);

	// snow2
	this.instance_1 = new lib.snow2_1();
	this.instance_1.setTransform(429,20);

	// snow2
	this.instance_2 = new lib.snow2_2();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-435.5,-415.5,1253.5,871);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finText
	this.instance = new lib.finalText();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(315).to({_off:false},0).to({alpha:1},10).wait(46).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logoMc1();
	this.instance_1.setTransform(67.3,275.2,0.439,0.438);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(295).to({_off:false},0).to({alpha:1},10).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(66).to({scaleX:0.44,scaleY:0.44,x:67.3,y:275.2,alpha:0},10).wait(1));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(67.3,275.2,0.439,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},305).wait(76).to({_off:false,scaleX:0.91,scaleY:0.91,x:0,y:-2.3},0).to({scaleX:0.44,scaleY:0.44,x:67.3,y:275.2},10).wait(1));

	// Слой 4
	this.instance_3 = new lib.bg();
	this.instance_3.setTransform(300,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(295).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(76).to({x:300},10,cjs.Ease.get(-1)).wait(1));

	// bgImg5
	this.instance_4 = new lib.bgImg5();
	this.instance_4.setTransform(-300,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(249).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).to({_off:true},46).wait(87));

	// t4_3
	this.instance_5 = new lib.t4_3();
	this.instance_5.setTransform(-242.5,101);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(207).to({_off:false},0).to({x:-13.3},9,cjs.Ease.get(1)).to({_off:true},43).wait(133));

	// t4_2
	this.instance_6 = new lib.t4_2();
	this.instance_6.setTransform(233,-65.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(198).to({_off:false},0).to({x:63.1},9,cjs.Ease.get(1)).to({_off:true},52).wait(133));

	// t4_1
	this.instance_7 = new lib.t4_1();
	this.instance_7.setTransform(-273.9,-193.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189).to({_off:false},0).to({x:-44.7},9,cjs.Ease.get(1)).to({_off:true},61).wait(133));

	// bgImg4
	this.instance_8 = new lib.bgImg4_1();
	this.instance_8.setTransform(300,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(179).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).to({_off:true},70).wait(133));

	// t1_2
	this.instance_9 = new lib.t1_2();
	this.instance_9.setTransform(-224.7,-158.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(109).to({_off:false},0).to({x:-60.5},10,cjs.Ease.get(1)).to({_off:true},140).wait(133));

	// t1_1
	this.instance_10 = new lib.t1_1();
	this.instance_10.setTransform(-223.7,-179.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).to({x:-59.5},10,cjs.Ease.get(1)).to({_off:true},155).wait(133));

	// LX
	this.instance_11 = new lib.LX();
	this.instance_11.setTransform(0.1,-387.4,2.081,2.081);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({y:-29.3},10,cjs.Ease.get(1)).wait(15).to({scaleX:1,scaleY:1,x:-71.5,y:-240.3},10).to({_off:true},165).wait(133));

	// snow2
	this.instance_12 = new lib.snow2Movie();
	this.instance_12.setTransform(494.9,162.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).to({x:-941,y:142.5},35).to({_off:true},1).wait(297));

	// snow1
	this.instance_13 = new lib.snow1_1();
	this.instance_13.setTransform(-59.4,82);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(49).to({_off:false},0).to({x:-85.5,alpha:1},10).to({x:-176.9},25).to({x:-213.5,alpha:0},10).to({_off:true},1).wait(297));

	// snow1
	this.instance_14 = new lib.snow1_1();
	this.instance_14.setTransform(-165.4,82);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(49).to({_off:false},0).to({x:-173.6,alpha:1},10).to({x:-202.1},25).to({x:-213.5,alpha:0},10).to({_off:true},1).wait(297));

	// car
	this.instance_15 = new lib.car_1();
	this.instance_15.setTransform(75,119,0.4,0.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,x:56,y:140},95,cjs.Ease.get(1)).to({_off:true},80).wait(133));

	// bgImg2
	this.instance_16 = new lib.bgImg2_1();
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(49).to({_off:false},0).to({alpha:1},10).to({_off:true},200).wait(133));

	// bgImg1
	this.instance_17 = new lib.bgImg1_1();
	this.instance_17.setTransform(-138.5,0,0.816,0.816);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1,scaleY:1,x:203.5,y:67.5},59).wait(322).to({scaleX:0.82,scaleY:0.82,x:-138.5,y:0},0).wait(11));

	// bg
	this.instance_18 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(392));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-427.1,-300,577.1,600);


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
p.nominalBounds = new cjs.Rectangle(-127.1,299,578.1,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;