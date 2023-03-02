(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/girl1.png", id:"girl1"},
		{src:"images/girl_2.jpg", id:"girl_2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/Pollo.png", id:"Pollo"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t4_t4_1.png", id:"t4_t4_1"},
		{src:"images/t4_t4_2.png", id:"t4_t4_2"},
		{src:"images/ttt_girl_1.png", id:"ttt_girl_1"},
		{src:"images/ttt_girl_2.png", id:"ttt_girl_2"},
		{src:"images/ttt_girl_3.png", id:"ttt_girl_3"}
	]
};



// symbols:



(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,363);


(lib.girl_2 = function() {
	this.initialize(img.girl_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,300);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,96);


(lib.Pollo = function() {
	this.initialize(img.Pollo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,52);


(lib.t4_t4_1 = function() {
	this.initialize(img.t4_t4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,63);


(lib.t4_t4_2 = function() {
	this.initialize(img.t4_t4_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,52);


(lib.ttt_girl_1 = function() {
	this.initialize(img.ttt_girl_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,37);


(lib.ttt_girl_2 = function() {
	this.initialize(img.ttt_girl_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,86);


(lib.ttt_girl_3 = function() {
	this.initialize(img.ttt_girl_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,47);


(lib.woman2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_2();
	this.instance.setTransform(-62,-75,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62,-75,124,150);


(lib.t4_3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t4_t4_2();
	this.instance.setTransform(-127,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127,-26,254,52);


(lib.t4_2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t4_t4_1();
	this.instance.setTransform(-120.5,-31.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.5,-31.5,241,63);


(lib.t3_4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.3,-19.1,222.7,38.3);


(lib.t3_3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.3,-18.4,222.6,36.8);


(lib.t3_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQ+DhIgGAAQgNABgKgKQgKgKAAgOIAAgvIgwgCIgGAOIgFALQAAANgJAJQgKAKgOAAQgOAAgJgKQgKgKAAgMIAAgFIABgKIAFgPIALgXIgBgGQAAgSARgKIAKgZIAniUQAFgUAAgHIAHgnIAAgEQAAgWASgCQADgFAHgDQAHgDAIAAIALABQASAFAGAMIAPAdQAGAKAGASIAMAqQAJAlABATIAFA7QACAnAAAXIACBtQACAMgKAMQgLALgUAAQgRgBgKgPgAQEBNIgBABIAaACIABhLIgDgpIgDAAQgQBlgEAMgAkyDWIgGgFQgKgGgIgLQgGgKgHgVIgJglQgFgagBgpIgBhTQAAgpABghQACgfAEgdIABgGIACgJIABgEIABgFIAEgJIAFgIIAFgGQAHgJAKgEIAKgBQAGAAAGADIADAAQAOABAKAJQAJALgBANIgCA5IgBA8IAAAxIAYADQAOACAXAMQAbAKAOAUQAKAOACASIAAAIQAAAXgPAUQgIAKgNALQgOALgOAIIgLAGQgMAEgOAAIgJAAIgCAFQAGAIAAAMQAAAJgGAKQgKAOgRAAQgLAAgIgGgAkABXIACANIALgEQAJgEAEgDQAFgEAKgOIABgDIgCgDQgCgEgLgFQgMgGgHgBIgLgCIADAogAL2C9QgGgDgGgGIgDABQgNAAgKgKQgKgKAAgOIADkPIgCAAIgHAAQgKAAgIgFQgPgJAAgTQAAgJAFgJQAIgKANgDIASgEQAYgFATAAIA8gCIAUgBIAKAAQAOAAAKAKQAJAJAAAOQAAAOgJAJQgKAKgOAAIgfAAIABCRQAAAugBAcQgDAcgDAVIgIAcIgCAHQgEANgNAFQgHAEgIgBgAwxC6QgJgDgFgGQgGACgGAAQgIAAgHgDIgJgGIgEgDIgDgFIgDgCIgDgFIgDgDQgIgQgCgIQgDgOAAgQIABh5QABgnAEgaQAFggAHgVQAJgbAGgJQAHgLAKgJIAHgGQAKgJAMAAQAPAAAKAKIABACIACAAQAIAAAMACIAUACQADACAOABIAcAFIAXAGQANAEAHALQAFAIAAAIIgBAJQgEAOgMAFQgIAGgJAAIgIgBIgGgDIgPgDQgHgCgNgBIghgFIgCAdIgCBaIAAADIAVAKQARAJAWATQARAOAHAKQAKAOACAOIABANQAAAOgGAQQgIASgOAMIgUAPIgYALQgYAKgVAAQgPAAgGgDgAwJCCQAggYAAgPQAAgEgIgLQgKgNgOgKgAtZC0QgMgHAAgRQAAgMAIgJQAJgKAPgBQgDgJgDhbQgDhOAAgqIAAg4QgLgEgHgIQgHgJAAgMQAAgOAKgMQAMgMARgCQAJgHAKAAIARABQAIABAGgCQAKgIAKAAQAOABAKAJQAKALAAANIgJDjQgBAWAABCQAAALgHAJQADALAAAEQAAAWgYAKQgJAEgVAEIgYAEQgZAAgMgIgAhWCuIgDgDQgGgJgEgLQgDgKgCgNQgDgPAAgJIADiLQAChaAEgOIADgMQADgNALgGQAIgGAJAAIAGAAQAFgCAFAAQALAAANAIIADACQAPAJAAAUQAAAKgFAHIgCADIgBDXIAtACIABkIQAAgMAKgLQAKgKANAAQAOAAAKAKQAKAKAAANIgBEKIAmAAIABgHQADgWAAggIABjGQAAgNALgJQAJgKAOAAQAOAAAJAKQAKAJAAANIgBDIQgBAlgDAXQgDAagDAKIgDAHIgGAJQgFAHgGACQgIAEgJABIi8gFQgCAKgKAIQgIAHgMAAQgRAAgJgNgAnwCxQgMgJAAgOIgBgDIAFgpQACgJABgMIAAhkQgBgrgCgUQgCgYgFgSIgCgLIgSABIABAKIgBBtQgBAegHAlQgIAqgLAUIgTAgQgJALgLAHQgNAGgNABQgLAAgNgCIgPgDQgNgDgHgMQgGgHAAgKQAAgTAQgJQAHgGAKAAIAUADQAMABAHgVQAIgXAEgVQAHgmABgRIgBh1IgBgQQAAgHACgKQAGgYAdgGIAUgDQAPgEAVAAIARACQAHABAGAEQAKgLAOAAQAOAAAJAKQAKAKAAANIAAADIABAIQADALAIA2QAHAzgBAvIAAA+QAAAUgGAXQgGAUgEAJIgJAUIgDAGQgGAJgKAFQgHADgGAAIgIgCIgIACIgCAAQgMAAgJgIgAGLC3IgUAAQgSAAgQgGQgLgEgIgIQgEAFgFACQgGAFgJAAIgKgBQgOgFgGgLIgFgKQgIgQgCgMQgCgLgBgPQgCgPAAghIAChEQABgoAGgeQAGgdAIgYQAGgTAFgKQAJgTAUgGIADgBIAJgBQAMAAAKAKQAIgDAIAAIAoABQASgBAeAHIAEAAQANACAJAMQAHAIAAALQAAARgNAKQgJAGgKABIg3gHIgRgBIAAAHIgDAtIgBA8IAqAAQAOAAAKAJQAJAIAAAOQAAAOgJAKQgLAJgNAAIgqAAIAAA8IAAAHIAbAAQAEABAGgBIADAAIADgBQAIgCAFAAQAHAAAGACQAMAGAGAMQACAGAAAGQAAAIgDAGQgGANgMAEIgFACQgHADgOABIgKABIgLgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.3,-24.1,230.6,48.2);


(lib.t3_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119,-20.4,238,40.9);


(lib.t2_3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ttt_girl_3();
	this.instance.setTransform(-124,-23.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124,-23.5,248,47);


(lib.t2_2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ttt_girl_2();
	this.instance.setTransform(-124,-43);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124,-43,248,86);


(lib.t2_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.ttt_girl_1();
	this.instance.setTransform(-119.5,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.5,-18.5,239,37);


(lib.t1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t1();
	this.instance.setTransform(-96.5,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-26,193,52);


(lib.smileMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF46A").s().p("AAAC9QiRgEhzhqQhJhEgxheQgaAHglgEQgUgCgOgEQAugJAjgVIAAAAIAAAAIAKgGQAXgQASgbQAJgNAEgKQABASgCAVQgHAqgVAPIgFACQBRBDBRAsQB9BGBcACQBuABB1hKQBIgsA8hAQgOgSgDglQgCgSACgPIAQAYQAUAaASAQQAjAdAmANQgSAEgVABQgrABgVgSIgCgCQgvBfhGBEQhvBsiJAAIgKAAg");
	this.shape.setTransform(-0.1,0,0.56,0.56,0,0,0,-0.2,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.8,-10.6,53.8,21.3);


(lib.roundMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEF3F").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgXAAgSgSg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-6,12,12);


(lib.pollo = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Pollo();
	this.instance.setTransform(-150,-100);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-100,300,200);


(lib.logo_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-80,-48);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-48,160,96);


(lib.girl = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl1();
	this.instance.setTransform(-62,-181.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62,-181.5,124,363);


(lib.bg4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37B686").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92D14F").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#53CBA1").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25B06F").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Слой 1
	this.instance = new lib.roundMc();
	this.instance.setTransform(0,9.7,0.28,0.28);

	this.instance_1 = new lib.roundMc();
	this.instance_1.setTransform(2,6,0.28,0.28);

	this.instance_2 = new lib.roundMc();
	this.instance_2.setTransform(-1.9,6,0.28,0.28);

	this.instance_3 = new lib.roundMc();
	this.instance_3.setTransform(5.9,2.1,0.28,0.28);

	this.instance_4 = new lib.roundMc();
	this.instance_4.setTransform(2,2.1,0.28,0.28);

	this.instance_5 = new lib.roundMc();
	this.instance_5.setTransform(-1.9,2.1,0.28,0.28);

	this.instance_6 = new lib.roundMc();
	this.instance_6.setTransform(-5.8,2.1,0.28,0.28);

	this.instance_7 = new lib.roundMc();
	this.instance_7.setTransform(2,-1.8,0.28,0.28);

	this.instance_8 = new lib.roundMc();
	this.instance_8.setTransform(-1.9,-1.8,0.28,0.28);

	this.instance_9 = new lib.roundMc();
	this.instance_9.setTransform(2,-5.7,0.28,0.28);

	this.instance_10 = new lib.roundMc();
	this.instance_10.setTransform(-1.9,-5.7,0.28,0.28);

	this.instance_11 = new lib.roundMc();
	this.instance_11.setTransform(2,-9.6,0.28,0.28);

	this.instance_12 = new lib.roundMc();
	this.instance_12.setTransform(-1.9,-9.6,0.28,0.28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11,p:{x:2}},{t:this.instance_10,p:{y:-5.7,x:-1.9}},{t:this.instance_9,p:{y:-5.7,x:2}},{t:this.instance_8,p:{y:-1.8,x:-1.9}},{t:this.instance_7,p:{y:-1.8,x:2}},{t:this.instance_6,p:{x:-5.8,y:2.1}},{t:this.instance_5,p:{x:-1.9,y:2.1}},{t:this.instance_4,p:{x:2,y:2.1}},{t:this.instance_3,p:{x:5.9,y:2.1}},{t:this.instance_2,p:{x:-1.9,y:6}},{t:this.instance_1,p:{x:2,y:6}},{t:this.instance,p:{x:0,y:9.7}}]}).to({state:[{t:this.instance_10,p:{y:-5.7,x:-1.9}},{t:this.instance_9,p:{y:-5.7,x:2}},{t:this.instance_8,p:{y:-1.8,x:-1.9}},{t:this.instance_7,p:{y:-1.8,x:2}},{t:this.instance_6,p:{x:-5.8,y:2.1}},{t:this.instance_5,p:{x:-1.9,y:2.1}},{t:this.instance_4,p:{x:2,y:2.1}},{t:this.instance_3,p:{x:5.9,y:2.1}},{t:this.instance_2,p:{x:-1.9,y:6}},{t:this.instance_1,p:{x:2,y:6}},{t:this.instance,p:{x:0,y:9.7}}]},2).to({state:[{t:this.instance_10,p:{y:-9.6,x:-1.9}},{t:this.instance_9,p:{y:-9.6,x:2}},{t:this.instance_8,p:{y:-1.8,x:-1.9}},{t:this.instance_7,p:{y:-1.8,x:2}},{t:this.instance_6,p:{x:-5.8,y:2.1}},{t:this.instance_5,p:{x:-1.9,y:2.1}},{t:this.instance_4,p:{x:2,y:2.1}},{t:this.instance_3,p:{x:5.9,y:2.1}},{t:this.instance_2,p:{x:-1.9,y:6}},{t:this.instance_1,p:{x:2,y:6}},{t:this.instance,p:{x:0,y:9.7}}]},2).to({state:[{t:this.instance_10,p:{y:-9.6,x:-1.9}},{t:this.instance_9,p:{y:-9.6,x:2}},{t:this.instance_8,p:{y:-5.7,x:-1.9}},{t:this.instance_7,p:{y:-5.7,x:2}},{t:this.instance_6,p:{x:-5.8,y:2.1}},{t:this.instance_5,p:{x:-1.9,y:2.1}},{t:this.instance_4,p:{x:2,y:2.1}},{t:this.instance_3,p:{x:5.9,y:2.1}},{t:this.instance_2,p:{x:-1.9,y:6}},{t:this.instance_1,p:{x:2,y:6}},{t:this.instance,p:{x:0,y:9.7}}]},2).to({state:[{t:this.instance_8,p:{y:-9.6,x:-1.9}},{t:this.instance_7,p:{y:-9.6,x:2}},{t:this.instance_6,p:{x:-1.9,y:-5.7}},{t:this.instance_5,p:{x:2,y:-5.7}},{t:this.instance_4,p:{x:-1.9,y:-1.8}},{t:this.instance_3,p:{x:2,y:-1.8}},{t:this.instance_2,p:{x:-1.9,y:6}},{t:this.instance_1,p:{x:2,y:6}},{t:this.instance,p:{x:0,y:9.7}}]},2).to({state:[{t:this.instance_10,p:{y:-9.6,x:-1.9}},{t:this.instance_9,p:{y:-9.6,x:2}},{t:this.instance_8,p:{y:-5.7,x:-1.9}},{t:this.instance_7,p:{y:-5.7,x:2}},{t:this.instance_6,p:{x:-1.9,y:-1.8}},{t:this.instance_5,p:{x:2,y:-1.8}},{t:this.instance_4,p:{x:-5.8,y:2.1}},{t:this.instance_3,p:{x:-1.9,y:2.1}},{t:this.instance_2,p:{x:2,y:2.1}},{t:this.instance_1,p:{x:5.9,y:2.1}},{t:this.instance,p:{x:0,y:9.7}}]},2).to({state:[{t:this.instance_11,p:{x:-1.9}},{t:this.instance_10,p:{y:-9.6,x:2}},{t:this.instance_9,p:{y:-5.7,x:-1.9}},{t:this.instance_8,p:{y:-5.7,x:2}},{t:this.instance_7,p:{y:-1.8,x:-1.9}},{t:this.instance_6,p:{x:2,y:-1.8}},{t:this.instance_5,p:{x:-5.8,y:2.1}},{t:this.instance_4,p:{x:-1.9,y:2.1}},{t:this.instance_3,p:{x:2,y:2.1}},{t:this.instance_2,p:{x:5.9,y:2.1}},{t:this.instance_1,p:{x:-1.9,y:6}},{t:this.instance,p:{x:2,y:6}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-11.3,15.1,22.7);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.arrow1.play();
	}
	this.frame_257 = function() {
		this.arrow2.play();
	}
	this.frame_379 = function() {
		this.arrow2.play();
	}
	this.frame_404 = function() {
		this.stop();
		this.btn.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(228).call(this.frame_257).wait(122).call(this.frame_379).wait(25).call(this.frame_404).wait(1));

	// arrow
	this.arrow2 = new lib.arrow();
	this.arrow2.setTransform(0,-129,1.32,1.32);
	this.arrow2.alpha = 0;
	this.arrow2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow2).wait(247).to({_off:false},0).to({alpha:1},10).wait(148));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(0,-379.9,1.267,1.267);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(234).to({_off:false},0).to({y:-205,alpha:1},5,cjs.Ease.get(1)).to({y:-211.4},8).wait(158));

	// t4
	this.instance_1 = new lib.t4_3();
	this.instance_1.setTransform(-287.9,22.9,1.006,1.006);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250).to({_off:false},0).to({x:4.4,alpha:1},6,cjs.Ease.get(1)).to({x:0.4},10).wait(139));

	// t4
	this.instance_2 = new lib.t4_2();
	this.instance_2.setTransform(-287.9,-44.3,1.006,1.006);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(247).to({_off:false},0).wait(1).to({x:-198.6,alpha:0.306},0).wait(1).to({x:-125.5,alpha:0.556},0).wait(1).to({x:-68.7,alpha:0.75},0).wait(1).to({x:-28.1,alpha:0.889},0).wait(1).to({x:-3.7,alpha:0.972},0).wait(1).to({x:4.4,alpha:1},0).to({x:0.4},10).wait(142));

	// Слой 11
	this.instance_3 = new lib.pollo();
	this.instance_3.setTransform(-300,201);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(234).to({_off:false},0).to({x:0},10).wait(161));

	// bg2
	this.instance_4 = new lib.bg4();
	this.instance_4.setTransform(-300,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(224).to({_off:false},0).to({x:0},10,cjs.Ease.get(-0.99)).wait(171));

	// t3_4
	this.instance_5 = new lib.t3_4();
	this.instance_5.setTransform(312,-118);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(164).to({_off:false},0).to({x:-10,alpha:1},6,cjs.Ease.get(1)).to({x:0},10).wait(44).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// t3_3
	this.instance_6 = new lib.t3_3();
	this.instance_6.setTransform(312,-159.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(161).to({_off:false},0).to({x:-10,alpha:1},6,cjs.Ease.get(1)).to({x:0},10).wait(47).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// t3_2
	this.instance_7 = new lib.t3_2();
	this.instance_7.setTransform(312,-203.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(158).to({_off:false},0).to({x:-10,alpha:1},6,cjs.Ease.get(1)).to({x:0},10).wait(50).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// t3_1
	this.instance_8 = new lib.t3_1();
	this.instance_8.setTransform(312,-246.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(155).to({_off:false},0).to({x:-10,alpha:1},6,cjs.Ease.get(1)).to({x:0},10).wait(53).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// Слой 3
	this.instance_9 = new lib.girl();
	this.instance_9.setTransform(356,102.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(149).to({_off:false},0).to({x:-10},6,cjs.Ease.get(1)).to({x:0},10).wait(59).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// bg2
	this.instance_10 = new lib.bg3();
	this.instance_10.setTransform(300,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(139).to({_off:false},0).to({x:0},10,cjs.Ease.get(-1)).wait(75).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// t2
	this.instance_11 = new lib.t2_3();
	this.instance_11.setTransform(-355,216.3,0.993,0.993);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({x:6.2,alpha:1},6,cjs.Ease.get(1)).to({x:0},10).wait(29).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(255));

	// t2
	this.instance_12 = new lib.t2_2();
	this.instance_12.setTransform(-355,147.8,0.993,0.993);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(91).to({_off:false},0).to({x:6.2,alpha:1},6,cjs.Ease.get(1)).to({x:0},10).wait(32).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(255));

	// t2
	this.instance_13 = new lib.t2_1();
	this.instance_13.setTransform(-355,80.6,0.993,0.993);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(88).to({_off:false},0).to({x:6.2,alpha:1},6,cjs.Ease.get(1)).to({x:0},10).wait(35).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(255));

	// woman2
	this.instance_14 = new lib.woman2();
	this.instance_14.setTransform(-301.1,-113,2.016,2.016);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(79).to({_off:false},0).to({x:-22.2},10,cjs.Ease.get(1)).wait(1).to({y:-113.1},0).wait(1).to({y:-113.3},0).wait(1).to({y:-113.6},0).wait(1).to({y:-114},0).wait(1).to({y:-114.6},0).wait(1).to({y:-115.2},0).wait(1).to({y:-116},0).wait(1).to({y:-116.9},0).wait(1).to({y:-118},0).wait(1).to({y:-119.1},0).wait(1).to({y:-120.2},0).wait(1).to({y:-121.5},0).wait(1).to({y:-122.7},0).wait(1).to({y:-123.9},0).wait(1).to({y:-125.1},0).wait(1).to({y:-126.2},0).wait(1).to({y:-127.2},0).wait(1).to({y:-128.2},0).wait(1).to({y:-129},0).wait(1).to({y:-129.7},0).wait(1).to({y:-130.2},0).wait(1).to({y:-130.7},0).wait(1).to({y:-131},0).wait(1).to({y:-131.1},0).wait(1).to({y:-131.2},0).wait(1).to({y:-131.1},0).wait(1).to({y:-131},0).wait(1).to({y:-130.7},0).wait(1).to({y:-130.2},0).wait(1).to({y:-129.7},0).wait(1).to({y:-129},0).wait(1).to({y:-128.2},0).wait(1).to({y:-127.3},0).wait(1).to({y:-126.3},0).wait(1).to({y:-125.2},0).wait(1).to({y:-124},0).wait(1).to({y:-122.8},0).wait(1).to({y:-121.6},0).wait(1).to({y:-120.4},0).wait(1).to({y:-119.2},0).wait(1).to({y:-118.1},0).wait(1).to({y:-117},0).wait(1).to({y:-116.1},0).wait(1).to({y:-115.3},0).wait(1).to({y:-114.6},0).wait(1).to({y:-114},0).wait(1).to({y:-113.6},0).wait(1).to({y:-113.3},0).wait(1).to({y:-113.1},0).wait(1).to({y:-113},0).to({x:-322.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(255));

	// bg2
	this.instance_15 = new lib.bg2();
	this.instance_15.setTransform(-300,0);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(69).to({_off:false},0).to({x:0},10,cjs.Ease.get(-1)).wait(60).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},2).wait(254));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("Ah7KnIAAkmIAIAAIAAEmg");
	var mask_graphics_11 = new cjs.Graphics().p("AgcCSIAAkkIA5AAIAAEkg");
	var mask_graphics_12 = new cjs.Graphics().p("Ag1CSIAAkkIBrAAIAAEkg");
	var mask_graphics_13 = new cjs.Graphics().p("AhPCSIAAkkICfAAIAAEkg");
	var mask_graphics_14 = new cjs.Graphics().p("AhoCSIAAkkIDRAAIAAEkg");
	var mask_graphics_15 = new cjs.Graphics().p("AiCCSIAAkkIEEAAIAAEkg");
	var mask_graphics_16 = new cjs.Graphics().p("AibCSIAAkkIE3AAIAAEkg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai1CSIAAkkIFqAAIAAEkg");
	var mask_graphics_18 = new cjs.Graphics().p("AjOCSIAAkkIGdAAIAAEkg");
	var mask_graphics_19 = new cjs.Graphics().p("AjnCSIAAkkIHPAAIAAEkg");
	var mask_graphics_20 = new cjs.Graphics().p("AkBKnIAAkmIIDAAIAAEmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:-12.4,y:68}).wait(1).to({graphics:mask_graphics_11,x:-21.9,y:121.3}).wait(1).to({graphics:mask_graphics_12,x:-19.3,y:121.3}).wait(1).to({graphics:mask_graphics_13,x:-16.8,y:121.3}).wait(1).to({graphics:mask_graphics_14,x:-14.2,y:121.3}).wait(1).to({graphics:mask_graphics_15,x:-11.6,y:121.3}).wait(1).to({graphics:mask_graphics_16,x:-9.1,y:121.3}).wait(1).to({graphics:mask_graphics_17,x:-6.5,y:121.3}).wait(1).to({graphics:mask_graphics_18,x:-4,y:121.3}).wait(1).to({graphics:mask_graphics_19,x:-1.4,y:121.3}).wait(1).to({graphics:mask_graphics_20,x:1.1,y:68}).wait(1).to({graphics:null,x:0,y:0}).wait(384));

	// smile
	this.instance_16 = new lib.smileMc();
	this.instance_16.setTransform(1.3,120.5,0.958,1.26);
	this.instance_16._off = true;

	this.instance_16.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off:false},0).wait(44).to({scaleX:1.26},4).to({scaleX:0.96},7).wait(4).to({x:301.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(325));

	// t1
	this.instance_17 = new lib.t1_1();
	this.instance_17.setTransform(0.6,224.5,1.26,1.26);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).to({y:64.6,alpha:1},5,cjs.Ease.get(1)).to({y:70.9},8).wait(51).to({x:300.6},10,cjs.Ease.get(-1)).to({_off:true},1).wait(325));

	// arrow
	this.arrow1 = new lib.arrow();
	this.arrow1.setTransform(-0.9,-39.8,1.141,1.141);
	this.arrow1.alpha = 0;
	this.arrow1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow1).wait(13).to({_off:false},0).to({alpha:1},10).wait(46).to({x:299.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(325));

	// logo
	this.instance_18 = new lib.logo_1();
	this.instance_18.setTransform(0.9,-256.7,1.095,1.095);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({y:-105.5,alpha:1},5,cjs.Ease.get(1)).to({y:-111},8).wait(56).to({x:300.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(325));

	// bg1
	this.instance_19 = new lib.bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(69).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(325));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-309.3,300,609.4);


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
p.nominalBounds = new cjs.Rectangle(149,290.7,302,610.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;