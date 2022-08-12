(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/1.png", id:"_1"},
		{src:"images/2.png", id:"_2"},
		{src:"images/3.png", id:"_3"},
		{src:"images/4.png", id:"_4"},
		{src:"images/5.png", id:"_5"},
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/img1.png", id:"img1"}
	]
};



// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,432);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,432);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,432);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,432);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,432);


(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,500);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.img1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img1();
	this.instance.setTransform(-150,-100);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-100,300,200);


(lib.hw = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-357.2,-70.4,714.6,140.9);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.b5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5();
	this.instance.setTransform(-64,-216);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-216,129,432);


(lib.b4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._4();
	this.instance.setTransform(-64,-216);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-216,129,432);


(lib.b3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3();
	this.instance.setTransform(-64,-216);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-216,129,432);


(lib.b2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2();
	this.instance.setTransform(-64,-216);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-216,129,432);


(lib.b1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1();
	this.instance.setTransform(-64,-216);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-216,129,432);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:10});

	// timeline functions:
	this.frame_112 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(112).call(this.frame_112).wait(1));

	// hw
	this.instance = new lib.hw();
	this.instance.setTransform(0,251.1,0.42,0.639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113));

	// img1
	this.instance_1 = new lib.img1_1();
	this.instance_1.setTransform(-257,147.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({x:-11},10,cjs.Ease.get(1)).wait(64));

	// bottle
	this.instance_2 = new lib.b1();
	this.instance_2.setTransform(64,-54);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({alpha:1},5).wait(78));

	// bottle
	this.instance_3 = new lib.b5();
	this.instance_3.setTransform(64,-54);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({alpha:1},5).to({_off:true},5).wait(78));

	// bottle
	this.instance_4 = new lib.b4();
	this.instance_4.setTransform(64.5,-54);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({alpha:1},5).to({_off:true},5).wait(83));

	// bottle
	this.instance_5 = new lib.b3();
	this.instance_5.setTransform(64,-54);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({alpha:1},5).to({_off:true},5).wait(88));

	// bottle
	this.instance_6 = new lib.b2();
	this.instance_6.setTransform(64,-54);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({alpha:1},5).to({_off:true},5).wait(93));

	// bottle
	this.instance_7 = new lib.b1();
	this.instance_7.setTransform(218.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:64.5},10,cjs.Ease.get(1)).to({_off:true},5).wait(98));

	// Layer 3
	this.instance_8 = new lib.bgImg();
	this.instance_8.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(113));

	// bg
	this.instance_9 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,433.5,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,434.5,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;