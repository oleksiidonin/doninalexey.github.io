(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bubble.png", id:"bubble"},
		{src:"images/img1_1.jpg", id:"img1_1"},
		{src:"images/img2_1.jpg", id:"img2_1"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/kanat.png", id:"kanat"},
		{src:"images/pena1.png", id:"pena1"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/shtori.jpg", id:"shtori"},
		{src:"images/slogan.png", id:"slogan"},
		{src:"images/stik1.png", id:"stik1"},
		{src:"images/stik2.png", id:"stik2"}
	]
};



// symbols:



(lib.bubble = function() {
	this.initialize(img.bubble);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,94);


(lib.img1_1 = function() {
	this.initialize(img.img1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.img2_1 = function() {
	this.initialize(img.img2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,744);


(lib.kanat = function() {
	this.initialize(img.kanat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,361);


(lib.pena1 = function() {
	this.initialize(img.pena1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,129);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,20);


(lib.shtori = function() {
	this.initialize(img.shtori);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.slogan = function() {
	this.initialize(img.slogan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,138);


(lib.stik1 = function() {
	this.initialize(img.stik1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,135);


(lib.stik2 = function() {
	this.initialize(img.stik2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,148);


(lib.urText = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACKAoIAAg6IAGAAIAAAHQAGgIAJAAQAIAAAGAGQAEAGAAAIQAAAKgFAHQgFAFgJAAQgJABgDgIIgBAAIAAAYgACSgDIgBADIAAAFIABADQACAJAJAAQAGABAEgFQADgEAAgIQAAgEgDgFQgEgEgFAAQgLAAgBAJgAAtAoIAAgRQgJgBgGgFQgGgGAAgJQAAgTAVgCIAAgTIAHAAIAAATQAJABAGAGQAGAFAAAIQAAAKgGAGQgGAFgJABIAAARgAA0ASQAOgCAAgPQAAgMgOgCgAAgACQAAAPANABIAAgfQgNABAAAOgALgATQgFgGgBgJIgHAAIAAASIgHAAIAAgoIAHAAIAAASIAHAAQABgJAFgEQAGgGAHAAQAJAAAEAGQAFAGABAIQAAAKgGAGQgGAHgHgBQgIAAgFgEgALhACQAAAPAMAAQAFAAADgEQACgFABgHQgBgOgKAAQgMAAAAAPgAKbARQgGgGAAgJQAAgIAGgHQAGgGAJAAQAJAAAGAGQAGAGgBAIQABALgHAGQgGAFgJAAQgJABgFgHgAKggIQgDAFAAAFQAAAGADAFQAEAFAGgBQAFABAEgFQAEgFAAgHQgBgEgDgFQgDgFgGAAQgHAAgDAFgAI1ALQAAgNAZgBIAAAAQAAgKgJAAQgHAAgEADIgCgFQAFgEAJAAQAQAAAAARIABAYIgIAAIAAgFIgBAAQgDAGgJAAQgNAAAAgMgAI8ALQAAAGAIAAQAHAAADgGIAAgDIAAgHIgCAAQgPAAgBAKgABZARQgGgGABgJQAAgIAFgHQAGgGAJAAQAKAAAFAGQAGAGgBAIQAAALgGAGQgGAFgIAAQgJABgGgHgABegIQgDAFAAAFQAAAGAEAFQADAFAGgBQAGABADgFQAEgFgBgHQAAgEgDgFQgDgFgGAAQgGAAgEAFgAgUARQgFgGgBgJQABgIAFgHQAGgGAKAAQAGAAAGAGQAGAGAAAIQAAALgHAGQgFAFgHAAQgJABgGgHgAgOgIQgEAFAAAFQABAGADAFQAEAFAFgBQAFABADgFQADgFAAgHQAAgEgDgFQgDgFgEAAQgHAAgDAFgAhhgDQAAgPAHgJQAFgHANgDIAKgCIAAAHIgJACQgLACgDAGQgFAFgBAIIABAAQAEgJALAAQAHAAAFAGQAGAFAAAIQAAALgGAFQgFAHgJgBQgTABgBgbgAhWgGQgDADAAAEQAAAFAEAGQADAFAFAAQAMAAAAgPQAAgOgMAAQgHAAgCAGgAjRARQgGgGAAgJQABgJAFgGQAGgGAKAAQAIAAAGAGQAFAGABAIQgBALgGAGQgGAFgIAAQgJABgGgHgAjMgIQgDAFAAAFQAAAGAEAFQAEAFAFgBQAGABADgFQADgFABgHQAAgEgDgFQgEgFgGAAQgGAAgEAFgAqwARQgHgGAAgJQAAgIAHgHQAGgGAIAAQAKAAAGAGQAFAGAAAIQAAALgGAGQgHAFgIAAQgJABgFgHgAquACQAAAGADAFQADAFAGgBQAFABAEgFQAEgFAAgHQAAgEgDgFQgDgFgHAAQgNAAABAPgAEtARQgFgGgBgJQABgIAFgGQAGgHAIAAQAKAAAEAHQAEAGAAAGIgBADIgdAAQAAAOAPAAQAHAAAEgCIABAGQgFACgIAAQgKAAgGgGgAFGgBQAAgMgLAAQgKAAgCAMIAXAAIAAAAgAD1ARIAEgCQAFgDAAgNIAAgRIAdAAIAAAoIgIAAIAAgiIgPAAIAAALQABARgHAFQgDACgFAAgAidARQgHgGAAgJQABgJAGgFQAGgHALAAQAGAAAEACIgCAGQgDgBgFAAQgQgBABAPQAAAGADAFQAFAEAGAAQAFAAAFgCIABAGQgDACgKAAQgJAAgFgGgAkuARQgGgGAAgJQAAgJAHgFQAFgHALAAQAGAAAFACIgDAGQgDgBgFAAQgPgBAAAPQAAAGAEAFQAEAEAGAAQAGAAAEgCIACAGQgEACgJAAQgJAAgGgGgAneAWIAAgoIAOgBQASAAABALQAAAHgJABIAAAAQALACAAAJQAAAMgXAAgAnWARIAGAAQAMAAAAgGQABgIgNAAIgGAAgAnWgMIAAAMIAGAAQALAAAAgHQAAgGgLAAgApHARIAEgCQAFgDgBgNIAAgRIAeAAIAAAoIgHAAIAAgiIgPAAIAAALQAAARgHAFQgEACgEAAgAKBAWIAAgiIgUAAIAAAiIgHAAIAAgoIAiAAIAAAogAIhAWIAAgTIgUAAIAAATIgIAAIAAgoIAIAAIAAARIAUAAIAAgRIAHAAIAAAogAHYAWIAAgRIgGAAQgFAAgCACQgDACgDAKIgCADIgIAAIADgFIACgGIAEgGQACgDADABIAAgBQgLgBAAgHQAAgHAGgCQAFgEAIAAIAOABIAAAogAHGgGQAAAGALAAIAHAAIAAgNIgHAAQgLAAAAAHgAGpAWIAAgTIgVAAIAAATIgHAAIAAgoIAHAAIAAARIAVAAIAAgRIAHAAIAAAogAF2AWIAAgTIgUAAIAAATIgIAAIAAgoIAIAAIAAARIAUAAIAAgRIAHAAIAAAogADlAWIgBghIgBAAIgNAhIgFAAIgMghIgCAhIgHAAIADgoIAKAAIALAfIAAAAIAMgfIAJAAIAEAogAh2AWIAAgoIAIAAIAAAogAjrAWIAAgiIgUAAIAAAiIgIAAIAAgoIAkAAIAAAogAleAWIAAghIgUAhIgJAAIAAgoIAIAAIgBAhIABAAIATghIAJAAIAAAogAmSAWIABghIgVAhIgJAAIAAgoIAIAAIgBAhIAUghIAJAAIAAAogAn0AWIAAghIAAAAIgVAhIgJAAIAAgoIAIAAIgBAhIABAAIATghIAJAAIAAAogApVAWIgEgJQgEgKgIABIgBAAIAAASIgIAAIAAgSIgBAAQgJgBgDAKIgEAJIgIAAIAFgLQAEgLAIAAIgQgSIAJAAIAOASIABAAIAAgSIAIAAIAAASIABAAIAOgSIAJAAIgRASQAJAAAEALIAFALgArJAWIgDgxIAAAAIgSAxIgGAAIgQgxIgBAAIgCAxIgIAAIAFg5IAKAAIAPAvIARgvIAKAAIAEA5gAl0gjIAFAAQACAGAEAAQAFAAABgGIAFAAQgBALgKAAQgKAAgBgLgAh3geQABgEAEgBQAFABAAAEQAAAFgFAAQgEAAgBgFg");

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0)"],[0,1],0,9.1,0,-9.1).s().p("AuYBgIAAi/IcxAAIAAC/g");
	this.shape_1.setTransform(0,-0.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.1,-10.5,184.3,19.2);


(lib.stik2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.stik2();
	this.instance.setTransform(-50,-74);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-74,100,148);


(lib.stik1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.stik1();
	this.instance.setTransform(-21,-67.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-67.5,42,135);


(lib.slogan_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.slogan();
	this.instance.setTransform(-110,-69);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110,-69,220,138);


(lib.shori = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shtori();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.shadow_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shadow();
	this.instance.setTransform(-39,-10);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-10,78,20);


(lib.penaMc = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.pena1();
	this.instance.setTransform(-64.5,-64.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79,-79,158,158);


(lib.img3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img3();
	this.instance.setTransform(-200,-372);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200,-372,340,744);


(lib.img2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.img2_1();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.img1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.img1_1();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bubble_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bubble();
	this.instance.setTransform(-115.5,-47);

	// Слой 2
	this.instance_1 = new lib.kanat();
	this.instance_1.setTransform(95.5,-394);

	this.instance_2 = new lib.kanat();
	this.instance_2.setTransform(-98.5,-395);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.5,-395,231,442.1);


(lib.shtoraR = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMLAztMAAAhnZIYWAAMAAABnZg");
	mask.setTransform(-83,21);

	// Слой 1
	this.instance = new lib.shori();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,145,600);


(lib.shtoraL = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMuAwHMAAAhgNIZdAAMAAABgNg");
	mask.setTransform(76.5,0);

	// Слой 1
	this.instance = new lib.shori();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-300,155,600);


(lib.pena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// Слой 1
	this.instance = new lib.penaMc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:9.7},0).wait(1).to({rotation:37.8},0).wait(1).to({rotation:81.3},0).wait(1).to({rotation:135.1},0).wait(1).to({rotation:193},0).wait(1).to({rotation:248.3},0).wait(1).to({rotation:295.6},0).wait(1).to({rotation:331.1},0).wait(1).to({rotation:352.8},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-64.5,129,129);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.p.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(200));

	// shtori
	this.instance = new lib.bubble_1();
	this.instance.setTransform(0,-348);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(273).to({_off:false},0).to({y:21},15).wait(1));

	// shtoraR
	this.instance_1 = new lib.shtoraL();
	this.instance_1.setTransform(192,0,0.336,1,0,0,0,120,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(273).to({_off:false},0).to({scaleX:1,x:120},15).wait(1));

	// shtoraL
	this.instance_2 = new lib.shtoraR();
	this.instance_2.setTransform(-180,0,0.243,1,0,0,0,-120,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(273).to({_off:false},0).to({scaleX:1,x:-120},15).wait(1));

	// Layer 1
	this.instance_3 = new lib.urText();
	this.instance_3.setTransform(0,285.4,1.628,1.626);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).to({alpha:1},10).wait(216));

	// slogan
	this.instance_4 = new lib.slogan_1();
	this.instance_4.setTransform(0,-360);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(183).to({_off:false},0).wait(1).to({y:-356.4},0).wait(1).to({y:-345.2},0).wait(1).to({y:-325.9},0).wait(1).to({y:-299.3},0).wait(1).to({y:-268.4},0).wait(1).to({y:-237.4},0).wait(1).to({y:-211},0).wait(1).to({y:-191.8},0).wait(1).to({y:-180.5},0).wait(1).to({y:-177},0).to({y:-190},5).wait(91));

	// stik
	this.instance_5 = new lib.stik2_1();
	this.instance_5.setTransform(162,-387.8,1.041,1.041);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149).to({_off:false},0).to({x:82.8,y:45.4},9,cjs.Ease.get(-1)).wait(131));

	// shadow
	this.instance_6 = new lib.shadow_1();
	this.instance_6.setTransform(94.1,110.9,2.081,2.081);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(149).to({_off:false},0).to({scaleX:1.04,scaleY:1.04,alpha:1},9).wait(131));

	// stik
	this.instance_7 = new lib.stik1_1();
	this.instance_7.setTransform(74.5,-379.7,1.041,1.041);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(163).to({_off:false},0).to({x:52.7,y:38.6},10,cjs.Ease.get(-1)).wait(116));

	// img3
	this.instance_8 = new lib.img3_1();
	this.instance_8.setTransform(50,0);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(103).to({_off:false},0).to({alpha:1},15).wait(12).to({regX:-30,scaleX:1,scaleY:1,x:19.9},0).wait(1).to({scaleX:1,scaleY:1,x:19.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:18.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:17},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:15.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:13.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:10.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:8.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:6.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:4.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:2.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:0.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:0.1},0).wait(1).to({regX:0,scaleX:0.88,scaleY:0.88,x:26.5},0).wait(145));

	// pena
	this.p = new lib.pena();
	this.p.setTransform(-320.1,-67.8,1.2,0.737);

	this.timeline.addTween(cjs.Tween.get(this.p).wait(63).to({scaleY:0.64,x:27.9,y:-106.7,alpha:0},0).to({alpha:1},10).wait(216));

	// img2
	this.instance_9 = new lib.img2();
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({_off:false},0).to({alpha:1},10).to({_off:true},45).wait(171));

	// bubble
	this.instance_10 = new lib.bubble_1();
	this.instance_10.setTransform(0,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({regY:-174,y:-156.6},0).wait(1).to({y:-167.8},0).wait(1).to({y:-186.8},0).wait(1).to({y:-213.5},0).wait(1).to({y:-247},0).wait(1).to({y:-285.9},0).wait(1).to({y:-327.6},0).wait(1).to({y:-369.5},0).wait(1).to({y:-408.8},0).wait(1).to({y:-443.6},0).wait(1).to({y:-472.4},0).wait(1).to({y:-494.6},0).wait(1).to({y:-510.1},0).wait(1).to({y:-519.1},0).wait(1).to({regY:0,y:-348},0).to({_off:true},1).wait(254));

	// shtoraR
	this.instance_11 = new lib.shtoraL();
	this.instance_11.setTransform(120,0,1,1,0,0,0,120,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(34).to({_off:false},0).wait(1).to({regX:72.5,scaleX:0.99,x:73.5},0).wait(1).to({scaleX:0.97,x:76.4},0).wait(1).to({scaleX:0.93,x:81.4},0).wait(1).to({scaleX:0.87,x:88.5},0).wait(1).to({scaleX:0.8,x:97.3},0).wait(1).to({scaleX:0.72,x:107.6},0).wait(1).to({scaleX:0.63,x:118.5},0).wait(1).to({scaleX:0.54,x:129.6},0).wait(1).to({scaleX:0.46,x:139.9},0).wait(1).to({scaleX:0.38,x:149.1},0).wait(1).to({scaleX:0.32,x:156.7},0).wait(1).to({scaleX:0.27,x:162.5},0).wait(1).to({scaleX:0.24,x:166.6},0).wait(1).to({scaleX:0.22,x:169},0).wait(1).to({regX:119.9,scaleX:0.22,x:180},0).to({_off:true},1).wait(239));

	// shtoraL
	this.instance_12 = new lib.shtoraR();
	this.instance_12.setTransform(-120,0,1,1,0,0,0,-120,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({_off:false},0).wait(1).to({regX:-77.5,scaleX:0.99,x:-78.3},0).wait(1).to({scaleX:0.97,x:-80.9},0).wait(1).to({scaleX:0.92,x:-85.3},0).wait(1).to({scaleX:0.86,x:-91.5},0).wait(1).to({scaleX:0.78,x:-99.3},0).wait(1).to({scaleX:0.69,x:-108.3},0).wait(1).to({scaleX:0.59,x:-118},0).wait(1).to({scaleX:0.5,x:-127.7},0).wait(1).to({scaleX:0.4,x:-136.8},0).wait(1).to({scaleX:0.32,x:-144.8},0).wait(1).to({scaleX:0.26,x:-151.5},0).wait(1).to({scaleX:0.2,x:-156.7},0).wait(1).to({scaleX:0.17,x:-160.3},0).wait(1).to({scaleX:0.15,x:-162.3},0).wait(1).to({regX:-120,scaleX:0.14,x:-169},0).to({_off:true},1).wait(239));

	// shtori
	this.instance_13 = new lib.shori();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},34).wait(255));

	// img1
	this.instance_14 = new lib.img1();

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(289));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397.5,-374,547.5,674.1);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,226,548.5,675.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;