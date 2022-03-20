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
		{src:"images/fari.png", id:"fari"},
		{src:"images/snow1.png", id:"snow1"},
		{src:"images/wheel.png", id:"wheel"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,223);


(lib.fari = function() {
	this.initialize(img.fari);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,21);


(lib.snow1 = function() {
	this.initialize(img.snow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,623,725);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.wheelMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wheel();
	this.instance.setTransform(-25,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.t3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFxC3IAdgdQAIAPAPAJQAMAHAOAAQAPAAAKgJQAKgIAAgPQAAgNgJgIQgIgHgbgJQgbgKgLgLQgTgQAAgbQAAgcASgTQAUgTAkAAQAmAAAbAZIgYAfQgOgUgXAAQgRABgIAIQgGAIAAAKQAAAKAGAGQAGAFAWAIQAjAMAMALQATASAAAfQAAAigWAVQgWAVgkAAQgxAAgegrgACqDaQgUgKgMgQQgRgUAAgpIAAiLIAtAAIAACPQAAAVALANQANAQAXAAQAYAAANgQQALgMgBgWIAAiPIAtAAIAACLQAAAngRAWQgMAQgUAKQgVAIgWAAQgWAAgVgIgAAIDdIgwhVIg1BVIg2AAIBSh6IhFhrIA1AAIApBFIAohFIA2AAIhFBrIBNB6gAlADdIAAjlICAAAIAAAkIhUAAIAAA0IBQAAIAAAnIhQAAIAAA/IBUAAIAAAngAntDdIAAjlIAtAAIAAC+IBHAAIAAAngAJ9AxIAPgkIAMAoIgPAegAqXA1IAMgoIAPAkIgMAigAKkA3IgTgkIAkAPIAPAhgAq0AjIAjgQIgSAkIggAMgAKdAMIAjgNIAiAKIgeAOgAriAJIAjgKIAjANIgnALgAqxgKIgHggIAeATIAKAjgAKbgXIAfgTIgIAgIgiAWgAJ9gaIAMgiIAPAeIgMAmgAqXgdIAPgfIAMAiIgPAigAG4ioIgkBhIg5iSIAWAAIAjBcIAlhiIAjBiIAlhcIAXAAIg9CSgABoivIAABfIgWAAIAAiRIBiBnIAAhfIAWAAIAACRgAD3hQIAAiJIBKAAIAAAUIg1AAIAAAhIA0AAIAAATIg0AAIAAAtIA1AAIAAAUgAgchXIAAgyIglg7IAYAAIAYAmIAVgmIAZAAIgkA7IAAAygAiYhXIAAhtIAgAAQATgBAKAJQALAKgBARQABAPgKAIQgJAKgSAAIgOAAIAAApgAiDiSIAJAAQAKAAAEgDQAGgFAAgIQAAgJgGgEQgFgDgKAAIgIAAgAj6hXIAAhtIAgAAQATgBAJAJQALAKAAARQAAAPgJAIQgJAKgSAAIgOAAIAAApgAjliSIAIAAQAKAAAEgDQAGgFAAgIQAAgJgGgEQgEgDgLAAIgHAAgAkphXIgKgXIgsAAIgJAXIgYAAIAwhwIAPAAIAuBwgAk6iAIgPgnIgPAnIAeAAgAmthXIAAgxIguAAIAAAxIgVAAIAAhtIAVAAIAAAqIAuAAIAAgqIAVAAIAABtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D40829","#9E0B25"],[0,1],-123.9,0,124,0).s().p("AzWFjIAFrFMAmoAAAIkaFiIEVFjg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123.9,-35.5,248,71);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B60721").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.8,-56.3,239.7,112.6);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B60822").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.9,-27.3,203.9,54.6);


(lib.snowMc = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.snow1();
	this.instance.setTransform(311.5,362.5,1,1,180);

	// Слой 1
	this.instance_1 = new lib.snow1();
	this.instance_1.setTransform(-311.5,-362.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-311.5,-362.5,623,725);


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
	this.shape.graphics.f("#4E4E4E").s().p("AkPDJQhwhOAAh7QAAh5BwhOQBthMCiAAQBGAAA+APQASAGgFAPQgBAFgMARQgWAYhDBcQhBBcgRAbQgPAVgBATQgCAXAcAAIFBAAQAWAAAIgcQAHgaAAgbQAAhNgtg5Qgsg3hNgcIATgcQBdAhA1A+QA4BCAABUQAABFgoA2QgIALgEAEQgIAFgOAAImSAAQhEgDgMgwQgLgqAhgzQAPgZA+hUQA+hVAaghQAFgIgFgEQgEgEgKAAQiNAAhaBAQhfBEAABwQAABmBfBHQBfBICIAAQBJAABBgWQA+gVAugnIA/AAQg2A1hQAdQhTAfhdAAQiiAAhthLg");
	this.shape.setTransform(-116,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E4E4E").s().p("AEVCKQgkAAghgUQgygfAAg9IAAiRIikBvIDICSIiXAAIiBhfIiPBfIsAAAQgnABgegYQgpghAAhGIAAiWIBgAAIAACfQAAA+A+AAIDaAAQATguAtggIhNAAQAIg1AwgqQA2gwBOAAIF3AAICBBfICMhfICvAAIAACfQAAA+A+AAIC3AAIAAjdIBgAAIAADdIFGAAQAhgBALgDQAQgHAAgRQAAgcgkAAIk5AAQAAhCAlguQAqg1BPAAIEYAAIAAA3IkMAAQgaAAgQASQgPAPgCAYIDjAAQA4AAAfAOQAqATAAAzQAAAxg0AUQgfALgvAAgApIAtQgUAQgCAWIFpAAIByhKIiph8IAAAgIj0AAQgaAAgWASQgUARgCAWIEjAAIAAA1IjVAAQgagBgWATg");
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


(lib.fari_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fari();
	this.instance.setTransform(-65,-10.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65,-10.5,130,21);


(lib.dillers = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.6,-84,193.3,168.1);


(lib.car_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car();
	this.instance.setTransform(-148.5,-111.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-148.5,-111.5,297,223);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.snow = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snowMc();
	this.instance.setTransform(0,-626.1);

	this.instance_1 = new lib.snowMc();
	this.instance_1.setTransform(0,-12);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-311.5,-988.6,623,1339.2);


(lib.logo1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.logoMc1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.4,-27.6,314,61);


(lib.logo = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.logoMc();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.4,-27.6,314,61);


(lib.snowMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:627.2},359).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.5,-976.6,623,1339.2);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 2
	this.s1 = new lib.snowMovie();
	this.s1.setTransform(0,-403.2,2,2,0,0,180);

	// Слой 3
	this.s1_1 = new lib.snowMovie();
	this.s1_1.setTransform(58,-40.7,1,1,0,0,180);

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance,this.s1_1,this.s1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-623,-2356.3,1246,2678.1);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finText
	this.instance = new lib.finalText();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250).to({_off:false},0).to({alpha:1},10).wait(46).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo1();
	this.instance_1.setTransform(67.3,275.2,0.439,0.438);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3,alpha:1},10).wait(66).to({scaleX:0.44,scaleY:0.44,x:67.3,y:275.2,alpha:0},10).wait(1));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(67.3,275.2,0.439,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(66).to({scaleX:0.44,scaleY:0.44,x:67.3,y:275.2},10).wait(1));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(229).to({_off:false},0).to({alpha:1},10).wait(77).to({alpha:0},10).wait(1));

	// dillers
	this.instance_4 = new lib.dillers();
	this.instance_4.setTransform(-300,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(184).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).to({_off:true},46).wait(87));

	// bgImg
	this.instance_5 = new lib.bgImg_1();
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(169).to({_off:false},0).to({scaleX:1.79,scaleY:1.79,x:39,y:236.1,alpha:1},15,cjs.Ease.get(1)).to({_off:true},56).wait(87));

	// t3
	this.instance_6 = new lib.t3();
	this.instance_6.setTransform(-274.4,-195.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},0).wait(1).to({x:-272.4},0).wait(1).to({x:-266.4},0).wait(1).to({x:-255.9},0).wait(1).to({x:-241},0).wait(1).to({x:-222},0).wait(1).to({x:-199.8},0).wait(1).to({x:-175.6},0).wait(1).to({x:-151.1},0).wait(1).to({x:-128.1},0).wait(1).to({x:-107.7},0).wait(1).to({x:-90.9},0).wait(1).to({x:-78.1},0).wait(1).to({x:-69.2},0).wait(1).to({x:-64},0).wait(1).to({x:-62.4},0).wait(40).to({x:-274.4},15,cjs.Ease.get(-1)).to({_off:true},1).wait(142));

	// t2
	this.instance_7 = new lib.t2();
	this.instance_7.setTransform(-271,-175);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},0).wait(1).to({x:-268.3},0).wait(1).to({x:-260},0).wait(1).to({x:-246.1},0).wait(1).to({x:-226.8},0).wait(1).to({x:-202.7},0).wait(1).to({x:-174.9},0).wait(1).to({x:-145},0).wait(1).to({x:-114.8},0).wait(1).to({x:-86},0).wait(1).to({x:-60.2},0).wait(1).to({x:-38.5},0).wait(1).to({x:-21.4},0).wait(1).to({x:-9.4},0).wait(1).to({x:-2.3},0).wait(1).to({x:0},0).wait(41).to({x:2.5},0).wait(1).to({x:10.3},0).wait(1).to({x:23.7},0).wait(1).to({x:42.7},0).wait(1).to({x:67},0).wait(1).to({x:95.4},0).wait(1).to({x:126.3},0).wait(1).to({x:157.6},0).wait(1).to({x:187.1},0).wait(1).to({x:213.1},0).wait(1).to({x:234.5},0).wait(1).to({x:250.9},0).wait(1).to({x:262.3},0).wait(1).to({x:268.9},0).wait(1).to({x:271},0).to({_off:true},1).wait(197));

	// t1
	this.instance_8 = new lib.t1();
	this.instance_8.setTransform(-300,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:0},20,cjs.Ease.get(1)).wait(40).to({x:2.5},0).wait(1).to({x:10.3},0).wait(1).to({x:23.3},0).wait(1).to({x:41.4},0).wait(1).to({x:64},0).wait(1).to({x:90.1},0).wait(1).to({x:118.1},0).wait(1).to({x:146.4},0).wait(1).to({x:173.4},0).wait(1).to({x:197.6},0).wait(1).to({x:218},0).wait(1).to({x:233.9},0).wait(1).to({x:245.2},0).wait(1).to({x:251.8},0).wait(1).to({x:254},0).to({_off:true},1).wait(252));

	// wheel
	this.instance_9 = new lib.wheel_1();
	this.instance_9.setTransform(-344.2,100.8,0.255,0.542);
	this.instance_9.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.36,scaleY:0.77,x:-127.1,y:138.3},20,cjs.Ease.get(1)).to({_off:true},1).wait(306));

	// wheel
	this.instance_10 = new lib.wheel_1();
	this.instance_10.setTransform(-259.8,111.8,0.574,0.7);
	this.instance_10.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.82,scaleY:1,x:-6.4,y:154},20,cjs.Ease.get(1)).to({_off:true},1).wait(306));

	// fari
	this.instance_11 = new lib.fari_1();
	this.instance_11.setTransform(77.3,107.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},0).to({alpha:1},5).wait(9).to({alpha:0},5).to({_off:true},1).wait(34).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},5).to({_off:true},1).wait(34).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},5).to({_off:true},1).wait(167));

	// car
	this.instance_12 = new lib.car_1();
	this.instance_12.setTransform(-254.9,62.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,x:0.5,y:83.5},20,cjs.Ease.get(1)).to({_off:true},165).wait(142));

	// bgImg
	this.instance_13 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(327));

	// bg
	this.instance_14 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(327));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-623,-2356.3,1246,2678.1);


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
p.nominalBounds = new cjs.Rectangle(-323,-1756.3,1246,2678.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;