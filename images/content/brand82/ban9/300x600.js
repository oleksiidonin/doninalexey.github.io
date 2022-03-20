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
		{src:"images/car.png", id:"car"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/wheel.png", id:"wheel"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,455,600);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,154);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,170);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,55);


(lib.wheelMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wheel();
	this.instance.setTransform(-27.5,-27.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.t2_2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD8hrIAhAAIAACRICQibIAADiIghAAIAAiRIiQCagAqEBQQgfggAAgwQAAguAgghQAfghAwAAQAwAAAgAhQAfAhAAAuQAAAwgfAgQggAhgwAAQgwAAggghgAprg5QgWAXAAAiQAAAkAWAXQAVAXAiAAQAiAAAVgXQAWgXAAgkQAAgigWgXQgVgYgiAAQgiAAgVAYgANHBtIAAhYIgHAAIg7BYIgoAAIA/hbQgTgDgOgMQgSgOAAgeQAAgcARgSQAMgNASgFQAKgCASAAIA0AAIAADYgAMThCQgJAJAAAQQAAARALAJQAJAHAXAAIASAAIAAhEIgQAAQgbAAgJAKgAKCBtIAAi5IgxAAIAAgfICDAAIAAAfIgxAAIAAC5gAH5BtIAAi5IgxAAIAAgfICDAAIAAAfIgxAAIAAC5gAC5BtIhNhnIAABnIghAAIAAhnIhLBnIgpAAIBYh0IhWhkIAnAAIBLBZIAAhZIAhAAIAABZIBMhZIAoAAIhYBkIBaB0gAj3BtIAAjYIB2AAIAAAfIhVAAIAAA0IBSAAIAAAdIhSAAIAABIIBVAAIAAAggAmeBtIAAjYIAhAAQASAAAIABQAPACALAIQAZARAAAgQAAAZgTAPQATAGAJAOQAJAOAAARQAAAfgVASQgTAQgnAAgAl9BNIAUAAQAqAAAAghQAAgggqAAIgUAAgAl9gOIAKAAQAjAAAAggQAAgegiAAIgLAAgArrBtIAAhmIhbAAIAABmIghAAIAAjYIAhAAIAABVIBbAAIAAhVIAhAAIAADYg");
	this.shape.setTransform(6,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.2,-11.8,174.6,23.7);


(lib.t2_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiFhQIAhAAIAACRICOiaIAADhIghAAIAAiRIiOCbgAlnhQIAhAAIAACRICQiaIAADhIghAAIAAiRIiQCbgAr0BsQgfggAAgwQAAgvAfggQAgghAwAAQAwAAAfAhQAgAgAAAvQAAAwggAgQggAhgvAAQgwAAggghgArcgeQgVAXAAAjQAAAjAVAXQAWAXAiAAQAiAAAVgXQAWgWAAgkQAAgjgWgXQgVgXgiAAQgiAAgWAXgAG4CIIAAgfIALACQAMAAAIgHQALgLAAgpIAAiAICIAAIAADYIghAAIAAi5IhGAAIAABrQAAAYgDANQgFASgOAMQgPANgWAAIgQgCgAO0CIIgvhTIgwBTIglAAIBDhxIg7hnIAlAAIApBKIArhKIAlAAIg+BnIBABxgALzCIIAAhXIgHAAIg7BXIgoAAIA/hbQgSgBgPgNQgSgQAAgdQAAgbARgSQAMgOASgEQAKgDASAAIA0AAIAADYgAK/gnQgJAKAAAPQAAAQALAIQAIAIAYAAIASAAIAAhDIgQAAQgaAAgKAKgACiCIIAAjYIAhAAIAAC5IBLAAIAAi5IAhAAIAAC5IBLAAIAAi5IAhAAIAADYgAoOCIIAAjYIAhAAQASAAAIACQAPACALAIQAYAQAAAhQAAAXgSAPQASAGAKAQQAJANAAARQAAAggWASQgMAKgRADQgKACgSAAgAntBpIAUAAQAqAAAAghQAAghgqAAIgUAAgAntAMIAKAAQAjAAAAgeQAAgfgiAAIgLAAgAtbCIIAAhlIhbAAIAABlIghAAIAAjYIAhAAIAABUIBbAAIAAhUIAhAAIAADYgAhLhsQgQgJgGgQIAZgMQAGASAVAAQAKAAAHgEQAIgFADgJIAXAMQgGAQgOAJQgOAIgRAAQgRAAgNgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.5,-14.6,197,29.3);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGcOWQg1gzAAhRQAAhRA1g0QA0g1BUAAQBTAAA1A1QA0A0AABRQAABRg0AzQg1A0hTAAQhUAAg0g0gAHPK6QghAiAAA2QAAA1AhAiQAhAjA0gBQAzABAhgjQAhgiAAg1QAAg2ghgiQghgjgzAAQg0AAghAjgABJPCIAAliIDNAAIAAA8IiHAAIAABRIAvAAQA4AAAhAdQAhAdAAAxQAAAjgUAcQgeArhHAAgACPOHIAgAAQBCAAAAguQAAgVgNgLQgQgQgkgBIghAAgAjPPCIAAliIBmAAQAhAAAUAGQAWAGASAPQAjAgAAA2QAAAygcAdQgeAfg7AAIgtAAIAACDgAiLMDIAcAAQAPABAIgCQANgCAJgHQAUgPAAgbQAAgZgUgPQgQgLggAAIgZAAgAnoPCIAyhjIiEj/IBQAAIBaCzIBMizIBMAAIikFigArTPCIAAkmIhPAAIAAg8IDkAAIAAA8IhQAAIAAEmgAJiIKIjXlmIjiFmIjkAAIFaoFIkjnOIDjAAICsExIC1kxIDlAAIktHOIFPIFgAlGIKIkGmKIgXAAIAAGKIjAAAIAAvTIEdAAQBcABBCAWQAzASAoAhQBhBSAACKQAABKgdA7QgdA6g4AnQgrAdhBANIEyGdgApjgFIA2AAQA/AAAtgUQBQglAAhcQAAhdhPgiQgrgUg/ABIg5AAgAISpnIA0gyQAOAcAaAOQAWANAZAAQAcAAARgPQATgRAAgZQAAgWgRgPQgPgOgxgQQgtgRgXgTQghgdAAgxQAAgxAggiQAkgmBBAAQBGAAAvAxIgqA2QgbgjgpAAQgdAAgPARQgNANAAASQAAASANALQAHAGAMAGIAfALQA8AVAYAVQAjAgAAA2QAAA9goAlQgoAnhAAAQhZAAg1hPgADaonQglgQgVgdQgggoAAhGIAAj+IBRAAIAAEEQAAAnAUAWQAYAdAqAAQArAAAXgdQATgVAAgoIAAkEIBRAAIAAD+QAABGgfAoQgVAdgmAQQgjAPgpAAQgpAAgkgPgAgZoiIhbiXIhgCXIhhAAICTjbIh7jDIBhAAIBICBIBMiBIBfAAIh9DDICMDbgAo9oiIAAmeIDlAAIAABFIiVAAIAABdICPAAIAABFIiPAAIAAByICVAAIAABFgAtGoiIAAmeIBRAAIAAFZICAAAIAABFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.9,-97,167.9,194.1);


(lib.t1_2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t1();
	this.instance.setTransform(-59,-85);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,-85,118,170);


(lib.logoMc = function() {
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


(lib.finalText = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,147.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.9,-77.8,233.3,255);


(lib.dillers = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-84.1,224.9,168.2);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-227.5,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-227.5,-300,455,600);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D20").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wheelMc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:36.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:72},0).wait(1).to({rotation:108},0).wait(1).to({scaleX:1,scaleY:1,rotation:143.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:180},0).wait(1).to({scaleX:1,scaleY:1,rotation:216.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:252},0).wait(1).to({rotation:288},0).wait(1).to({scaleX:1,scaleY:1,rotation:323.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55,55);


(lib.logo = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.logoMc();

	// Слой 1
	this.instance_1 = new lib.logoMc();
	this.instance_1.setTransform(-2,2);
	this.instance_1.alpha = 0.5;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0), new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-156,-30,313,59);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.4,-27.6,314,61);


(lib.car_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.wheel_1();
	this.instance.setTransform(-142.6,23.6,0.294,0.769);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.wheel_1();
	this.instance_1.setTransform(-39,34.5,0.527,1);
	this.instance_1.alpha = 0.5;

	// Слой 1
	this.instance_2 = new lib.car();
	this.instance_2.setTransform(-159.5,-77);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.5,-77,319,154);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finText
	this.instance = new lib.finalText();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(-67,272.2,0.439,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(219).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(55).to({scaleX:0.44,scaleY:0.44,x:-67,y:272.2},10).wait(1));

	// dillers
	this.instance_2 = new lib.dillers();
	this.instance_2.setTransform(-262.4,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:262.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(70));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(169).to({_off:false},0).to({alpha:1},10).wait(105).to({alpha:0},10).wait(1));

	// t2_2
	this.instance_4 = new lib.t2_2();
	this.instance_4.setTransform(-250,193.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({x:-54.1},10,cjs.Ease.get(1)).to({_off:true},71).wait(115));

	// t2_1
	this.instance_5 = new lib.t2_1();
	this.instance_5.setTransform(-250,158.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).to({x:-37.2},10,cjs.Ease.get(1)).to({_off:true},91).wait(115));

	// t1_1
	this.instance_6 = new lib.t1_1();
	this.instance_6.setTransform(74.7,-35.9,0.703,0.86);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).wait(1).to({scaleX:0.71,scaleY:0.86,x:73.2,y:-32.3,alpha:0.02},0).wait(1).to({scaleX:0.73,scaleY:0.87,x:68.5,y:-20.9,alpha:0.082},0).wait(1).to({scaleX:0.76,scaleY:0.89,x:60.7,y:-1.7,alpha:0.187},0).wait(1).to({scaleX:0.8,scaleY:0.91,x:50.1,y:24.3,alpha:0.329},0).wait(1).to({scaleX:0.85,scaleY:0.93,x:37.7,y:54.5,alpha:0.494},0).wait(1).to({scaleX:0.9,scaleY:0.95,x:25.3,y:85,alpha:0.661},0).wait(1).to({scaleX:0.94,scaleY:0.97,x:14.5,y:111.6,alpha:0.806},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:6.4,y:131.4,alpha:0.915},0).wait(1).to({scaleX:0.99,scaleY:1,x:1.6,y:143.2,alpha:0.979},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:147,alpha:1},0).wait(30).to({x:250},10,cjs.Ease.get(-1)).to({_off:true},1).wait(215));

	// t1
	this.instance_7 = new lib.t1_2();
	this.instance_7.setTransform(-168.9,-20,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,x:74.5,y:-35},29,cjs.Ease.get(1)).wait(1).to({scaleX:1.01,scaleY:1,x:73,y:-31.4,alpha:0.98},0).wait(1).to({scaleX:1.03,scaleY:1.01,x:68.3,y:-20.1,alpha:0.918},0).wait(1).to({scaleX:1.08,scaleY:1.03,x:60.5,y:-1,alpha:0.813},0).wait(1).to({scaleX:1.14,scaleY:1.05,x:49.9,y:24.9,alpha:0.671},0).wait(1).to({scaleX:1.21,scaleY:1.07,x:37.6,y:55,alpha:0.506},0).wait(1).to({scaleX:1.28,scaleY:1.09,x:25.2,y:85.3,alpha:0.339},0).wait(1).to({scaleX:1.34,scaleY:1.11,x:14.4,y:111.8,alpha:0.194},0).wait(1).to({scaleX:1.39,scaleY:1.13,x:6.4,y:131.5,alpha:0.085},0).wait(1).to({scaleX:1.42,scaleY:1.14,x:1.5,y:143.3,alpha:0.021},0).wait(1).to({scaleX:1.42,scaleY:1.14,x:0,y:147.1,alpha:0},0).to({_off:true},1).wait(255));

	// car
	this.instance_8 = new lib.car_1();
	this.instance_8.setTransform(-236.5,-23.4,0.3,0.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,x:9.5,y:-20.4},74,cjs.Ease.get(1)).to({y:-6.4},81).to({_off:true},1).wait(115));

	// bgImg
	this.instance_9 = new lib.bgImg_1();
	this.instance_9.setTransform(77.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-77.5},179).wait(105).to({x:77.5},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.6,-300,491.7,600);


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
p.nominalBounds = new cjs.Rectangle(113.4,299,491.7,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;