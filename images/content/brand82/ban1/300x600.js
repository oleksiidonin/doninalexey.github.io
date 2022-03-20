(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/car1.png", id:"car1"},
		{src:"images/car2.png", id:"car2"},
		{src:"images/N.jpg", id:"N"},
		{src:"images/X.png", id:"X"}
	]
};



// symbols:



(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,288);


(lib.car2 = function() {
	this.initialize(img.car2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,206);


(lib.N = function() {
	this.initialize(img.N);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,567);


(lib.X = function() {
	this.initialize(img.X);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,408);


(lib.X_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.X();
	this.instance.setTransform(-107,-204);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107,-204,214,408);


(lib.t1_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AioCPIAAgvIihAAIAAAvIgYAAIAAhHQAYAAANgfQAIgXAAgiIAAhxICKAAIAADJIAaAAIAABHgAkbgQQAAAogIAVQgGAPgMAMIByAAIAAixIhYAAgABEiBIAZAAIAACsICei2IAADrIgZAAIAAirIieC1gASXg8IgWCcIgaAAIAmjuIBXC+IBYi+IAkDuIgaAAIgWicIhNClgAN3BCQgjgiAAgwQAAgyAjgiQAighAxAAQAyAAAiAhQAiAiAAAyQAAAxgiAhQgiAigyAAQgxAAgigigAOJhSQgbAbAAAnQAAAlAbAcQAbAbAmAAQAnAAAbgbQAbgcAAglQAAgngbgbQgbgbgnAAQgmAAgbAbgAqPBCQgighAAgxQAAgyAigiQAighAyAAQAxAAAiAhQAiAiAAAyQAAAxgiAhQgiAigxAAQgyAAgigigAp9hSQgbAbAAAnQAAAlAbAcQAbAbAnAAQAmAAAbgbQAbgcAAglQAAgngbgbQgbgbgmAAQgnAAgbAbgAMNBgIAAhtIh0AAIAABtIgZAAIAAjhIAZAAIAABcIB0AAIAAhcIAZAAIAADhgAHeBgIAdhAIhXihIAfAAIBGCDIA7iDIAcAAIhnDhgAE1BgIAAjhIBoAAIAAAYIhPAAIAADJgAhuBgIAAjhIAoAAQAjAAARAOQATAPAAAgQAAAdgVAQQAUAFAMASQAKANAAATQAAAPgHAOQgHAMgIAIQgTAPgjAAgAhVBIIAdAAQAcAAALgKQAPgLAAgUQAAgXgTgIQgMgHgaAAIgaAAgAhVgeIATAAQAsAAAAglQAAgmgsAAIgTAAgAtZBgIAAjhIBwAAIAAAYIhXAAIAABGIAeAAQBPAAAAA+QAAAggUATQgUASgiAAgAtABIIAdAAQAdAAANgNQAMgMAAgUQAAgYgTgIQgKgGgcAAIgaAAgAv0BgIAAjhIApAAQAmAAATAQQAVASAAAeQAAAbgRARQgTAUgkAAIgWAAIAABhgAvbgZIAUAAQAXAAANgKQAMgLAAgUQAAgngyAAIgSAAgAyWBgIAdhAIhXihIAfAAIBGCDIA7iDIAcAAIhnDhgA0oBgIAAjJIg3AAIAAgYICHAAIAAAYIg3AAIAADJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.6,-14.3,275.3,28.8);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmOCKIAAgvIigAAIAAAvIgZAAIAAhHQANAAAKgIQAIgJAFgOQAJgUgBglIAAhxICLAAIAADJIAZAAIAABHgAoBgVQAAAngIAWQgGAPgMAMIByAAIAAixIhYAAgAKyBOQgTgPgKgWIAYgMQAIAUAPALQAQALAUAAQAVAAAOgJQASgNAAgYQAAgqg8AAIgVAAIAAgYIAVAAQAWAAANgMQALgKgBgRQABgOgJgKQgLgKgUAAQgcAAgRAZIgUgQQAWggArAAQAeAAASAPQASAQAAAaQAAARgJAMQgJAMgOAHQAWAFAMARQAMANAAAWQAAAigdAVQgVAPgeAAQgfAAgWgRgAJOBbIAAjhIAYAAIAADhgAFkBbIAAjhIAoAAQAnAAASAQQAWATAAAdQAAAbgRARQgUAUgjAAIgXAAIAABhgAF8gdIAVAAQAXAAANgLQAMgLAAgUQAAgngyAAIgTAAgAC/BbIAAjhIB2AAIAAAYIhdAAIAABDIBaAAIAAAYIhaAAIAABWIBdAAIAAAYgABsBbIAAjJIhzAAIAADJIgZAAIAAjhIClAAIAADhgAjEBbIAAjhIB2AAIAAAYIhcAAIAABDIBaAAIAAAYIhaAAIAABWIBcAAIAAAYgAk2BbIAAjJIg3AAIAAgYICHAAIAAAYIg3AAIAADJgAqBBbIAAjhIAYAAIAADhgAs2BbIAAjhIApAAQAiAAASAPQAVAPgBAgQABAcgXAQQAWAFALASQAKANAAATQAAAPgHAOQgGAMgKAIQgUAPgiAAgAsdBDIAdAAQAcAAAMgKQAPgKAAgVQAAgXgUgIQgLgHgbAAIgaAAgAsdgjIATAAQAtAAAAglQAAgYgUgJQgKgFgOAAIgUAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.3,-13.9,164.7,27.8);


(lib.N_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.N();
	this.instance.setTransform(-390,-283);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-390,-283,780,567);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkPDJQhwhOAAh7QAAh5BwhOQBthMCiAAQBGAAA+APQASAGgFAPQgBAFgMARQgWAYhDBcQhBBcgRAbQgPAVgBATQgCAXAcAAIFBAAQAWAAAIgcQAHgaAAgbQAAhNgtg5Qgsg3hNgcIATgcQBdAhA1A+QA4BCAABUQAABFgoA2QgIALgEAEQgIAFgOAAImSAAQhEgDgMgwQgLgqAhgzQAPgZA+hUQA+hVAaghQAFgIgFgEQgEgEgKAAQiNAAhaBAQhfBEAABwQAABmBfBHQBfBICIAAQBJAABBgWQA+gVAugnIA/AAQg2A1hQAdQhTAfhdAAQiiAAhthLg");
	this.shape.setTransform(-116,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEVCKQgkAAghgUQgygfAAg9IAAiRIikBvIDICSIiXAAIiBhfIiPBfIsAAAQgnABgegYQgpghAAhGIAAiWIBgAAIAACfQAAA+A+AAIDaAAQATguAtggIhNAAQAIg1AwgqQA2gwBOAAIF3AAICBBfICMhfICvAAIAACfQAAA+A+AAIC3AAIAAjdIBgAAIAADdIFGAAQAhgBALgDQAQgHAAgRQAAgcgkAAIk5AAQAAhCAlguQAqg1BPAAIEYAAIAAA3IkMAAQgaAAgQASQgPAPgCAYIDjAAQA4AAAfAOQAqATAAAzQAAAxg0AUQgfALgvAAgApIAtQgUAQgCAWIFpAAIByhKIiph8IAAAgIj0AAQgaAAgWASQgUARgCAWIEjAAIAAA1IjVAAQgagBgWATg");
	this.shape_1.setTransform(43.6,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-154.4,-27.6,308.9,55.3);


(lib.finalText = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(0,147.5);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAghhbIAPgFQAEANAOAAQAOAAAFgNIAPAFQgIAWgaAAQgZAAgIgWg");
	this.shape_1.setTransform(131.4,-68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6hJIAQAAIAABwIBlh3IAACaIgQAAIAAhwIhlB3g");
	this.shape_2.setTransform(115.5,-66.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAmBKIAAhJIhLAAIAABJIgQAAIAAiTIAQAAIAAA8IBLAAIAAg8IAQAAIAACTg");
	this.shape_3.setTransform(100.2,-66.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag6g5IAQAAIAABwIBlh2IAACZIgQAAIAAhwIhlB3gAgZhPQgGgFgCgHIAPgFQAEANAOAAQAPgBAEgMIAPAFQgIAWgaAAQgPAAgKgKg");
	this.shape_4.setTransform(84.9,-68);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_5.setTransform(74.2,-66.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAuBaIAAggIhrAAIAAiTIAQAAIAACEIBKAAIAAiEIAQAAIAACEIARAAIAAAvg");
	this.shape_6.setTransform(64.9,-64.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_7.setTransform(54,-66.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBNIAAgVIgDAAQgmAAgRgUQgOgPAAgVQAAgXAOgQQARgTAmAAIADAAIAAgSIAPAAIAAASIAEAAQAmAAARATQANAPAAAYQAAAVgNAPQgRAUgmAAIgEAAIAAAVgAAIAoIAFAAQAbABANgOQALgMgBgPQABgRgLgMQgNgNgbAAIgFAAgAg0gdQgKAMAAARQAAAPAKAMQANAOAcgBIAEAAIAAhSIgEAAQgcAAgNANg");
	this.shape_8.setTransform(42.1,-66.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag2A3QgWgXAAggQAAggAWgWQAXgWAfAAQAgAAAWAWQAXAWAAAgQAAAggXAXQgWAWggAAQgfAAgXgWgAgpgqQgSASAAAYQAAAZASASQARASAYAAQAZAAARgSQASgSAAgZQAAgYgSgSQgRgSgZAAQgYAAgRASg");
	this.shape_9.setTransform(24.1,-66.4);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.9,-77.8,233.3,255);


(lib.dillers = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-84.1,224.9,168.2);


(lib.car2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car2();
	this.instance.setTransform(-148,-103);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-148,-103,296,206);


(lib.car1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car1();
	this.instance.setTransform(-176,-144);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-176,-144,353,288);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finText
	this.instance = new lib.finalText();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(224).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(66,275.2,0.474,0.474);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(214).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(55).to({scaleX:0.47,scaleY:0.47,x:66,y:275.2},10).wait(1));

	// dillers
	this.instance_2 = new lib.dillers();
	this.instance_2.setTransform(-262.4,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(174).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:262.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(70));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160).to({_off:false},0).to({x:2,alpha:0.809},14).wait(105).to({x:0},0).to({alpha:0},10).wait(1));

	// t1_2
	this.instance_4 = new lib.t1_2();
	this.instance_4.setTransform(300,231.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({x:-1},10,cjs.Ease.get(1)).wait(39).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(130));

	// t1_1
	this.instance_5 = new lib.t1_1();
	this.instance_5.setTransform(-242,191.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100).to({_off:false},0).to({x:0.5},10,cjs.Ease.get(1)).wait(39).to({x:-242},10,cjs.Ease.get(-1)).to({_off:true},1).wait(130));

	// car2
	this.instance_6 = new lib.car2_1();
	this.instance_6.setTransform(300,159);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({x:9},15,cjs.Ease.get(1)).wait(21).to({y:158.3},0).wait(1).to({x:8.8,y:156.1},0).wait(1).to({x:8.5,y:152.2},0).wait(1).to({x:8.1,y:146.7},0).wait(1).to({x:7.6,y:139.4},0).wait(1).to({x:7,y:130.5},0).wait(1).to({x:6.3,y:120.4},0).wait(1).to({x:5.6,y:109.5},0).wait(1).to({x:4.8,y:98.5},0).wait(1).to({x:4.1,y:88.1},0).wait(1).to({x:3.4,y:78.9},0).wait(1).to({x:2.9,y:71.2},0).wait(1).to({x:2.5,y:65.3},0).wait(1).to({x:2.2,y:61.1},0).wait(1).to({x:2.1,y:58.8},0).wait(1).to({x:2,y:58},0).wait(49).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(130));

	// X
	this.instance_7 = new lib.X_1();
	this.instance_7.setTransform(-240,67,0.83,0.83);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({x:-63},15,cjs.Ease.get(1)).wait(21).to({scaleX:0.83,scaleY:0.83,x:-62.2,y:65.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-59.5,y:60.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-55,y:52.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-48.5,y:40},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-39.9,y:24.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-29.4,y:4.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-17.5,y:-17.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-4.6,y:-41.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:8.4,y:-65.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:20.6,y:-88.2},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:31.6,y:-108.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:40.6,y:-125.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:47.6,y:-138.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:52.4,y:-147.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:55.3,y:-152.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:56.2,y:-154},0).wait(60).to({scaleX:0.61,scaleY:0.61,y:-152.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:-146.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:-137.2},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:-124.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:-108.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:-90.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:-70.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:-49.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:-29.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:-11.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:4.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:17.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:26.5},0).wait(1).to({scaleX:1,scaleY:1,y:32.1},0).wait(1).to({scaleX:1,scaleY:1,y:34},0).wait(105).to({x:263},10,cjs.Ease.get(-1)).wait(1));

	// car1
	this.instance_8 = new lib.car1_1();
	this.instance_8.setTransform(-334,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:0},15,cjs.Ease.get(1)).wait(20).to({regX:0.5,scaleX:1,scaleY:1,x:0.2,y:113.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-1,y:107.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-3.2,y:95.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-6.4,y:78.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-10.7,y:54.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-16,y:26},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-21.9,y:-6.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:-28,y:-39.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-33.7,y:-70.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-38.6,y:-96.8},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-42.5,y:-118},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-45.4,y:-133.7},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-47.3,y:-144.2},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:-48.4,y:-150.1},0).wait(1).to({regX:0,scaleX:0.47,scaleY:0.47,x:-49,y:-152},0).wait(36).to({regX:0.5,scaleX:0.47,scaleY:0.47,x:-48.9,y:-151.4},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:-49.4,y:-149.7},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-50.4,y:-146.8},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-51.8,y:-142.7},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:-53.7,y:-137.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-55.9,y:-130.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-58.5,y:-122.9},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-61.3,y:-114.7},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-64.1,y:-106.4},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-66.7,y:-98.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-69,y:-91.6},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-71,y:-85.8},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-72.5,y:-81.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-73.5,y:-78.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-74.1,y:-76.5},0).wait(1).to({regX:0,scaleX:0.37,scaleY:0.37,x:-74.5,y:-75.9},0).wait(49).to({x:-215},10,cjs.Ease.get(-1)).to({_off:true},1).wait(130));

	// N
	this.instance_9 = new lib.N_1();
	this.instance_9.setTransform(500,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-24},15,cjs.Ease.get(1)).wait(20).to({regY:0.5,scaleX:1,scaleY:1,x:-23.4,y:-95.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-21.5,y:-97.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-18.2,y:-102.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-13.2,y:-109.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-6.6,y:-119},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:1.5,y:-130.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:10.7,y:-143.4},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:20,y:-156.6},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:28.8,y:-169},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:36.4,y:-179.7},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:42.4,y:-188.2},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:46.8,y:-194.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:49.8,y:-198.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:51.5,y:-201.1},0).wait(1).to({regY:0,scaleX:0.29,scaleY:0.29,x:52,y:-202},0).wait(36).to({regY:0.5,x:51.3,y:-201.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:49.2,y:-201.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:45.6,y:-200.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:40.4,y:-199},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:33.6,y:-197.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:25.2,y:-195.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:15.7,y:-193},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:5.5,y:-190.5},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-4.8,y:-188},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-14.6,y:-185.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-23.3,y:-183.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-30.6,y:-181.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-36.1,y:-180.5},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-40,y:-179.6},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-42.2,y:-179},0).wait(1).to({regY:0,x:-43},0).wait(60).to({regY:0.5,scaleX:0.24,scaleY:0.24,x:-43.2,y:-176.6},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-44.1,y:-169.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-45.5,y:-158.3},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-47.4,y:-142.5},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-49.7,y:-123.1},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-52.5,y:-100.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-55.4,y:-76.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-58.5,y:-51.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-61.5,y:-26.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-64.2,y:-4.4},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-66.5,y:15},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-68.5,y:30.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-69.8,y:42.1},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-70.7,y:48.9},0).wait(1).to({regY:0,scaleX:0.34,scaleY:0.34,x:-71,y:51.1},0).wait(105).to({x:-264},10,cjs.Ease.get(-1)).wait(1));

	// bg
	this.instance_10 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(290));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-510,-378,1400,678);


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
p.nominalBounds = new cjs.Rectangle(-210,222,1400,679);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;