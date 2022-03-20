(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bgImg.png", id:"bgImg"},
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bottle1.png", id:"bottle1"},
		{src:"images/t1.png", id:"t1"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,541);


(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,547);


(lib.bottle1 = function() {
	this.initialize(img.bottle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,432);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,29);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t1();
	this.instance.setTransform(-123,-14.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123,-14.5,246,29);


(lib.bottle = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.bottle1();
	this.instance.setTransform(-46,-211.9,0.969,0.969);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46,-211.9,95,418.7);


(lib.bgImg1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg1();
	this.instance.setTransform(-78.5,-273.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.5,-273.5,157,547);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.hw = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("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");
	this.shape.setTransform(0,0,1.011,1.486);

	// Слой 2
	this.instance = new lib.bg();
	this.instance.setTransform(0,0,1,0.15);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-45,300,90);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hw
	this.instance = new lib.hw();
	this.instance.setTransform(0,255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(279));

	// Слой 6
	this.instance_1 = new lib.bottle();
	this.instance_1.setTransform(-2.5,-60);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).to({alpha:1},27).wait(115).to({alpha:0},15).wait(1));

	// t1
	this.instance_2 = new lib.t1_1();
	this.instance_2.setTransform(-1.5,177.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({alpha:1},25).wait(162).to({alpha:0},15).wait(1));

	// bgImg
	this.instance_3 = new lib.bgImg();
	this.instance_3.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(279));

	// bgImg1
	this.instance_4 = new lib.bgImg1_1();
	this.instance_4.setTransform(0,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-130.5},148).wait(115).to({y:33.5},0).wait(16));

	// bg
	this.instance_5 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(279));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,607);


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
p.nominalBounds = new cjs.Rectangle(149,299,302,608);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;