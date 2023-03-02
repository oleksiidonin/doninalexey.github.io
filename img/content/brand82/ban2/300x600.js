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
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.png", id:"img4"},
		{src:"images/img5.png", id:"img5"},
		{src:"images/img6.png", id:"img6"},
		{src:"images/img7.png", id:"img7"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2.png", id:"p2"}
	]
};



// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,199);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,86);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,161);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,168);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,135);


(lib.img7 = function() {
	this.initialize(img.img7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,347);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,21);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,64);


(lib.t3_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKUB8QgWgKgOgRQgTgZAAgsIAAiaIAyAAIAACfQAAAWAMAQQAPARAaAAQAZAAAPgRQANgPAAgXIAAifIAxAAIAACaQAAAtgTAYQgNARgXAKQgVAJgaAAQgaAAgWgJgAEyBVIAhgfQAJARAQAJQANAIAQAAQARAAALgJQALgKAAgQQABgNgLgKQgJgIgegLQgegLgNgJQgUgSAAgeQAAgfAUgVQAWgXAoAAQArAAAeAeIgaAiQgRgWgaAAQgSAAgJAKQgIAIAAAMQABAKAHAHQAHAGAYAJQAnANANANQAVARABAiQgBAmgYAXQgYAXgoAAQg3AAgigwgAB8B8QgXgKgNgRQgUgZAAgsIAAiaIAyAAIAACfQAAAWAMAQQAQARAZAAQAaAAAPgRQAMgPAAgXIAAifIAyAAIAACaQAAAsgUAZQgNARgXAKQgWAJgZAAQgaAAgVgJgAIDB8QgIgIAAgNQAAgNAIgJQAJgIANAAQANAAAIAIQAJAJAAANQAAANgJAIQgIAJgNAAQgNAAgJgJgAQJCAIgXg2IhnAAIgXA2Ig2AAIBvkEIAmAAIBsEEgAPkAhIglhaIgkBaIBJAAgAgRCAIg4heIg7BeIg8AAIBbiFIhNh5IA8AAIAtBPIAvhPIA6AAIhMB5IBVCFgAlbCAIAAj+ICOAAIAAArIhcAAIAAA5IBZAAIAAApIhZAAIAABGIBcAAIAAArgAn1CAIAAj+IAzAAIAADTIBPAAIAAArgAqPCAIgWg2IhoAAIgWA2Ig2AAIBvkEIAlAAIBsEEgAq0AhIgkhaIgkBaIBIAAgAufCAIAAhyIhsAAIAAByIgzAAIAAj+IAzAAIAABjIBsAAIAAhjIAxAAIAAD+g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.7,-13.3,217.4,26.8);


(lib.t3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtxCfIAAg6IidAAIAAA6IguAAIAAhkQANAAALgLQAKgIAHgQQAJgYAAgqIAAhuICsAAIAADTIAbAAIAABkgAvagqQAAAwgJAWQgGARgOAOIBoAAIAAioIhLAAgAj6BlIgwAAIgXg2IhnAAIgXA2Ig2AAIBvkDIAmAAIBmD4IAAgfQAIACAHAAQAOgBAIgIQAJgJACgRQACgKAAgWIAAiSICuAAIAAD9IgyAAIAAjSIhKAAIAABvQAAAegDANQgGAbgTAPQgUAQgfABQgMgBgJgCgAlPAHIglhaIglBaIBKAAgAOvBlIAAj9ICOAAIAAArIhcAAIAAA4IBYAAIAAAsIhYAAIAABEIBcAAIAAAqgAJFBlIAAj9IAxAAIAADTIBSAAIAAjTIAzAAIAADTIBSAAIAAjTIAxAAIAAD9gAHiBlIAAj9IAxAAIAAD9gAF/BlIAAhvIhsAAIAABvIgyAAIAAj9IAyAAIAABjIBsAAIAAhjIAyAAIAAD9gAAVBlIAAj9IAyAAIAABjIAoAAQAoABAXAUQAYAXgBAhQABAagOAUQgWAggzgBgABHA7IAdAAQAuAAAAgjQAAghgtAAIgeAAgApYBlIAAjSIg5AAIAAgrICkAAIAAArIg5AAIAADSgAsrBlIAAj9ICOAAIAAArIhdAAIAAA4IBZAAIAAAsIhZAAIAABEIBdAAIAAAqg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.5,-15.9,217.1,31.9);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.5,-62.4,241.1,124.8);


(lib.t1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AH5CSQgYgLgVgTQgxgvABhFQgBhIAxgtQArgoBFAAQAoAAAiASIAABGQgegjgrAAQgtABgcAgQgcAeAAApQAAAxAgAdQAeAaApAAQArAAAcghIAABFQgjASgoAAQgmAAgcgMgAA2B0QgxgwAAhEQAAhIAxgtQAqgoBFAAQAoAAAjASIAABGQgegjgrAAQgtABgdAgQgbAeAAApQAAAxAgAdQAeAaApAAQArAAAcghIAABFQgjASgpAAQhCAAgsgqgAvMCSQgXgLgWgTQgwgvgBhFQABhIAwgtQArgoBEAAQAoAAAjASIAABGQgegjgsAAQgrABgdAgQgbAegBApQAAAxAhAdQAdAaApAAQAqAAAdghIAABFQgjASgoAAQgmAAgcgMgAOrCXIAAj6IhEAAIAAgzIDEAAIAAAzIhEAAIAAD6gAKxCXIAAktICoAAIAAAzIhtAAIAABDIBpAAIAAAxIhpAAIAABTIBtAAIAAAzgAhfCXIAAktIA7AAIAAEtgAlWCXIAAktIBKAAQAyAAAYATQAOAKAHARQAIARgBASQAAApghATQAWAEARANQAVAVAAAkQAAAngZAWQgcAZgxAAgAkcBnIAaAAQAaAAAOgIQATgMAAgXQAAgZgXgKQgMgGgcAAIgWAAgAkcgYIARAAQAuAAAAgnQAAgUgNgKQgMgJgVAAIgRAAgAo+CXIAAktIBYAAQAcAAARAEQATAGAQANQAfAcAAAuQAAAqgZAXQgbAbgyAAIgmAAIAABwgAoDgKIAYAAQAaAAANgJQAQgOAAgWQAAgXgQgLQgNgKgdAAIgVAAgAsUCXIAAktICoAAIAAAzIhtAAIAABDIBoAAIAAAxIhoAAIAABTIBtAAIAAAzgAELBIIAAgzIB2AAIAAAzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.7,-15.8,213.4,31.7);


(lib.t1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFGChQgxgvAAhFQAAhHAxguQAqgoBFAAQAoAAAiATIAABFQgdgigsAAQgsAAgdAgQgbAcAAAsQAAAvAgAeQAeAaApAAQArAAAbghIAABFQghASgqAAQhCAAgsgqgAx0CeQgtgsAAhFQAAhEAtgsQAtgtBHAAQBIAAAtAtQAtAtAABDQAABFgtAsQgtAthIAAQhHAAgtgtgAxIgdQgdAdAAAtQAAAuAdAdQAcAdAsAAQAtAAAcgdQAcgdAAguQAAgtgcgdQgcgdgtAAQgsAAgcAdgAOXDKIAAkzIA7AAIAADKICnjRIApAAIAAE0Ig7AAIAAjKIinDQgAh+DKIAAkzIA7AAIAADKICljRIApAAIAAE0Ig7AAIAAjKIilDQgAMiDEIAAktIA7AAIAAEtgAIrDEIAAktIBLAAQAxAAAZATQANAKAHARQAIARAAATQAAAmgiATQAWAEARAPQAWAWAAAjQAAAmgaAYQgcAYgxAAgAJmCUIAZAAQAbAAANgIQATgLAAgYQAAgZgWgKQgNgGgcAAIgVAAgAJmATIAQAAQAuAAAAgmQAAgTgNgKQgMgJgUAAIgRAAgAllDEIAAktIBYAAQAcAAAQAEQAUAGAQANQAfAcAAAtQAAApgZAZQgbAbgyAAIgmAAIAABwgAkqAhIAYAAQAaAAANgKQAQgNAAgUQAAgWgRgNQgOgJgcAAIgUAAgAo7DEIAAktICoAAIAAAzIhtAAIAABCIBoAAIAAAzIhoAAIAABSIBtAAIAAAzgAszDEIAAktICwAAIAAAzIh1AAIAABDIApAAQAwAAAcAZQAdAZAAAqQAAAegRAYQgaAlg9AAgAr4CRIAcAAQA5AAAAgnQAAgSgLgKQgOgOgfAAIgdAAgAPpiUQgVgNgJgYIApgRQAKAbAfAAQAeAAAKgbIApARQgJAYgUANQgWAOgeAAQgfAAgVgOg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.6,-20.3,237.4,40.7);


(lib.p2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p2();
	this.instance.setTransform(-10.5,-32);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-32,21,64);


(lib.p1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p1();
	this.instance.setTransform(-144,-10.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-144,-10.5,288,21);


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


(lib.img7_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img7();
	this.instance.setTransform(-75,-173.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-173.5,150,347);


(lib.img6Mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img6();
	this.instance.setTransform(-22.5,-67.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-67.5,45,135);


(lib.img5_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img5();
	this.instance.setTransform(-84,-84);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84,-84,168,168);


(lib.img4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img4();
	this.instance.setTransform(-38,-84);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38,-84,76,168);


(lib.img3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img3();
	this.instance.setTransform(-80.5,-80.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.5,-80.5,161,161);


(lib.img2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img2();
	this.instance.setTransform(-56,-43);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-43,112,86);


(lib.img1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img1();
	this.instance.setTransform(-139,-99.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139,-99.5,278,199);


(lib.grad = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(216,192,73,0)","#D8C049","rgba(216,192,73,0)"],[0,0.502,1],-18.2,0,18.3,0).s().p("Ai1IAIAAv/IFrAAIAAP/g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.3,-51.2,36.6,102.6);


(lib.finalText = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(0,147.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.9,-77.8,233.3,255);


(lib.bgImg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgImg1();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.img6_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img6Mc();
	this.instance.setTransform(34,0,0.4,0.4);

	this.instance_1 = new lib.img6Mc();
	this.instance_1.setTransform(16,0,0.4,0.4);

	this.instance_2 = new lib.img6Mc();
	this.instance_2.setTransform(0,0,0.4,0.4);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-27,52,54);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finText
	this.instance = new lib.finalText();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(276).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(66,275.2,0.474,0.474);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(266).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(55).to({scaleX:0.47,scaleY:0.47,x:66,y:275.2},10).wait(1));

	// t3_2
	this.instance_2 = new lib.t3_2();
	this.instance_2.setTransform(264,23);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(215).to({_off:false},0).to({x:1.1},10,cjs.Ease.get(1)).wait(30).to({x:264},10,cjs.Ease.get(-1)).to({_off:true},1).wait(76));

	// t3_1
	this.instance_3 = new lib.t3_1();
	this.instance_3.setTransform(-265,-20.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(215).to({_off:false},0).to({x:-1.1},10,cjs.Ease.get(1)).wait(30).to({x:-265},10,cjs.Ease.get(-1)).to({_off:true},1).wait(76));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(205).to({_off:false},0).to({alpha:1},10).wait(116).to({alpha:0.012},10).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_173 = new cjs.Graphics().p("ABLE3Qk4gHgugGQhEgJgjgNQg4gVgGgoQgGgugFhdQgFhdABguIAFiqQgDgFATgeQATgdAegEQAdgFB2gGQBngFBYACIFhAHQAagDAdAGQA5ALAQAsQAQAuANCzQALCegDA5QgEBMgBAHQgIAngdADQgLABgnAAQhUAAjUgFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(173).to({graphics:mask_graphics_173,x:-76.8,y:242.8}).wait(16).to({graphics:null,x:0,y:0}).wait(153));

	// grad
	this.instance_5 = new lib.grad();
	this.instance_5.setTransform(-146.2,244.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).to({x:-12.1,y:248.7},15).to({_off:true},1).wait(153));

	// img
	this.instance_6 = new lib.p1_1();
	this.instance_6.setTransform(294.3,-176,1,1,0,-177.8,2.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(115).to({_off:false},0).wait(1).to({x:287.7},0).wait(1).to({x:267.1},0).wait(1).to({x:232.5},0).wait(1).to({x:186.9},0).wait(1).to({x:136.3},0).wait(1).to({x:88.4},0).wait(1).to({x:49},0).wait(1).to({x:21.1},0).wait(1).to({x:5},0).wait(1).to({x:0},0).wait(25).to({y:-247},15,cjs.Ease.get(-1)).to({_off:true},50).wait(127));

	// img
	this.instance_7 = new lib.p1_1();
	this.instance_7.setTransform(294.3,-167.5,1,1,-2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(115).to({_off:false},0).wait(1).to({x:287.7},0).wait(1).to({x:267.1},0).wait(1).to({x:232.5},0).wait(1).to({x:186.9},0).wait(1).to({x:136.3},0).wait(1).to({x:88.4},0).wait(1).to({x:49},0).wait(1).to({x:21.1},0).wait(1).to({x:5},0).wait(1).to({x:0},0).wait(25).to({y:-95.5},15,cjs.Ease.get(-1)).to({_off:true},50).wait(127));

	// img
	this.instance_8 = new lib.p2_1();
	this.instance_8.setTransform(187.2,-170.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(115).to({_off:false},0).wait(1).to({x:180.6},0).wait(1).to({x:160},0).wait(1).to({x:125.4},0).wait(1).to({x:79.8},0).wait(1).to({x:29.2},0).wait(1).to({x:-18.7},0).wait(1).to({x:-58.1},0).wait(1).to({x:-86},0).wait(1).to({x:-102.1},0).wait(1).to({x:-107.1},0).wait(15).to({alpha:0.012},10).to({_off:true},65).wait(127));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_150 = new cjs.Graphics().p("A3btWIAAgJMAu3AAAIAAAJg");
	var mask_1_graphics_151 = new cjs.Graphics().p("A3btRIAAgQMAu3AAAIAAAQg");
	var mask_1_graphics_152 = new cjs.Graphics().p("A3btCIAAgkMAu3AAAIAAAkg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A3bspIAAhFMAu3AAAIAABFg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A3bsGIAAh0MAu3AAAIAAB0g");
	var mask_1_graphics_155 = new cjs.Graphics().p("A3brZIAAiwMAu3AAAIAACwg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A3bqjIAAj4MAu3AAAIAAD4g");
	var mask_1_graphics_157 = new cjs.Graphics().p("A3bpiIAAlPMAu3AAAIAAFPg");
	var mask_1_graphics_158 = new cjs.Graphics().p("A3boYIAAmxMAu3AAAIAAGxg");
	var mask_1_graphics_159 = new cjs.Graphics().p("A3bnDIAAojMAu3AAAIAAIjg");
	var mask_1_graphics_160 = new cjs.Graphics().p("A3bllIAAqgMAu3AAAIAAKgg");
	var mask_1_graphics_161 = new cjs.Graphics().p("A3bj9IAAsrMAu3AAAIAAMrg");
	var mask_1_graphics_162 = new cjs.Graphics().p("A3biKIAAvEMAu3AAAIAAPEg");
	var mask_1_graphics_163 = new cjs.Graphics().p("A3bgOIAAxpMAu3AAAIAARpg");
	var mask_1_graphics_164 = new cjs.Graphics().p("A3bB2IAA0aMAu3AAAIAAUag");
	var mask_1_graphics_165 = new cjs.Graphics().p("A3bEGIAA3aMAu3AAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(150).to({graphics:mask_1_graphics_150,x:0,y:-86.5}).wait(1).to({graphics:mask_1_graphics_151,x:0,y:-86.7}).wait(1).to({graphics:mask_1_graphics_152,x:0,y:-87.2}).wait(1).to({graphics:mask_1_graphics_153,x:0,y:-88}).wait(1).to({graphics:mask_1_graphics_154,x:0,y:-89.1}).wait(1).to({graphics:mask_1_graphics_155,x:0,y:-90.6}).wait(1).to({graphics:mask_1_graphics_156,x:0,y:-92.5}).wait(1).to({graphics:mask_1_graphics_157,x:0,y:-94.6}).wait(1).to({graphics:mask_1_graphics_158,x:0,y:-97.1}).wait(1).to({graphics:mask_1_graphics_159,x:0,y:-99.9}).wait(1).to({graphics:mask_1_graphics_160,x:0,y:-103.1}).wait(1).to({graphics:mask_1_graphics_161,x:0,y:-106.5}).wait(1).to({graphics:mask_1_graphics_162,x:0,y:-110.3}).wait(1).to({graphics:mask_1_graphics_163,x:0,y:-114.5}).wait(1).to({graphics:mask_1_graphics_164,x:0,y:-118.9}).wait(1).to({graphics:mask_1_graphics_165,x:0,y:-123.7}).wait(50).to({graphics:null,x:0,y:0}).wait(127));

	// t2
	this.instance_9 = new lib.t2();
	this.instance_9.setTransform(0,-174);
	this.instance_9._off = true;

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150).to({_off:false},0).to({_off:true},65).wait(127));

	// img
	this.instance_10 = new lib.img7_1();
	this.instance_10.setTransform(310.8,79.2,0.96,0.96);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,x:153.1,y:81,alpha:1},10,cjs.Ease.get(1)).to({_off:true},126).wait(127));

	// img6
	this.instance_11 = new lib.img6_1();
	this.instance_11.setTransform(-106.4,248.4,2.4,2.4);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(69).to({_off:false},0).to({scaleX:1,scaleY:1,x:72.5,y:121.6,alpha:1},10,cjs.Ease.get(1)).to({_off:true},136).wait(127));

	// img5
	this.instance_12 = new lib.img5_1();
	this.instance_12.setTransform(230.7,-79.9,0.96,0.96);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(64).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,x:92.5,y:47,alpha:1},10,cjs.Ease.get(1)).to({_off:true},141).wait(127));

	// img6
	this.instance_13 = new lib.img6_1();
	this.instance_13.setTransform(171.6,235.2,2.4,2.4);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(54).to({_off:false},0).to({scaleX:1,scaleY:1,x:17,y:121.6,alpha:1},10,cjs.Ease.get(1)).to({_off:true},151).wait(127));

	// img5
	this.instance_14 = new lib.img5_1();
	this.instance_14.setTransform(-69.3,-79.9,0.96,0.96);
	this.instance_14.alpha = 0.012;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(49).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,x:28.5,y:47,alpha:1},10,cjs.Ease.get(1)).to({_off:true},156).wait(127));

	// img4
	this.instance_15 = new lib.img4_1();
	this.instance_15.setTransform(-1.3,300,0.96,0.96);
	this.instance_15.alpha = 0.012;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(39).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,x:-18.7,y:120.1,alpha:1},10,cjs.Ease.get(1)).to({_off:true},166).wait(127));

	// img4
	this.instance_16 = new lib.img4_1();
	this.instance_16.setTransform(48.5,-122.2,0.96,0.96);
	this.instance_16.alpha = 0.012;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(34).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,x:-18.7,y:47,alpha:1},10,cjs.Ease.get(1)).to({_off:true},171).wait(127));

	// img3
	this.instance_17 = new lib.img3_1();
	this.instance_17.setTransform(235.5,247.8,0.96,0.96);
	this.instance_17.alpha = 0.012;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(24).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,x:-70,y:114.6,alpha:1},10,cjs.Ease.get(1)).to({_off:true},181).wait(127));

	// img3
	this.instance_18 = new lib.img3_1();
	this.instance_18.setTransform(-224.6,-11.9,0.96,0.96);
	this.instance_18.alpha = 0.012;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,x:-70,y:43,alpha:1},10,cjs.Ease.get(1)).to({_off:true},186).wait(127));

	// t1_2
	this.instance_19 = new lib.t1_2();
	this.instance_19.setTransform(-258.9,-176.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:0},10,cjs.Ease.get(1)).wait(106).to({x:-5.4},0).wait(1).to({x:-22.2},0).wait(1).to({x:-50.9},0).wait(1).to({x:-90.1},0).wait(1).to({x:-135.8},0).wait(1).to({x:-181.9},0).wait(1).to({x:-221.8},0).wait(1).to({x:-251.4},0).wait(1).to({x:-268.8},0).wait(1).to({x:-274.3},0).to({_off:true},90).wait(127));

	// t1_1
	this.instance_20 = new lib.t1_1();
	this.instance_20.setTransform(278,-223.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:0},10,cjs.Ease.get(1)).wait(106).to({x:-5.4},0).wait(1).to({x:-22.2},0).wait(1).to({x:-50.9},0).wait(1).to({x:-90.1},0).wait(1).to({x:-135.8},0).wait(1).to({x:-181.9},0).wait(1).to({x:-221.8},0).wait(1).to({x:-251.4},0).wait(1).to({x:-268.8},0).wait(1).to({x:-274.3},0).to({_off:true},90).wait(127));

	// img2
	this.instance_21 = new lib.img2_1();
	this.instance_21.setTransform(-338,244.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:-79},10,cjs.Ease.get(1)).to({_off:true},205).wait(127));

	// img1
	this.instance_22 = new lib.img1_1();
	this.instance_22.setTransform(289,84.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({x:11},10,cjs.Ease.get(1)).to({_off:true},205).wait(127));

	// bgImg
	this.instance_23 = new lib.bgImg();

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(342));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394,-300,822,600);


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
p.nominalBounds = new cjs.Rectangle(-94,299,822,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;