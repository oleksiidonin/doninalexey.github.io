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
		{src:"images/hand.png", id:"hand"},
		{src:"images/ninja.png", id:"ninja"},
		{src:"images/ninjaBlur.png", id:"ninjaBlur"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,189);


(lib.ninja = function() {
	this.initialize(img.ninja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,410);


(lib.ninjaBlur = function() {
	this.initialize(img.ninjaBlur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,271);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#55202E").s().p("AonBYQgFAAAAgCIABgGIAGgQQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIhBAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgCgBACgFIAwiEIADgFQADgDAFAAIAQAAQAFAAABACIgBAGIgoBsIAAADIACABIAXAAQAEAAAAgEIAohsIADgFQACgCAFAAIARAAQAFAAAAACQABACgBADIgpBwIACAAIAFAAIAEABQACACgCAEIgOAoQgCAFgCACIgGABgAIZBDIgUAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgFIACgQQABgDgEAAIgdAAQgDAAgDADIgKARQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgCACgDAAIgUAAQgEAAABgEIABgBIBSiIQACgDADgCIAEgBIAbABIAEABQABABAAAEIgPCGIgBADQgBADgEAAIgBAAgAIHgZIgWAjQAAABAAABQgBAAAAAAQABABAAAAQAAAAABAAIARAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAgBIAEgjIAAgCIAAgBgAGQBDQgFAAAAgCQgBgCABgEIAchKIgBgBIgBABIgeAlIgFAFIgDABIgHAAQgEAAAAgGIgCgnIgBAAIgdBMQgBAFgDABQgCABgEAAIgQAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgCgBACgFIAxiEQABgEABgBQADgDAFAAIASAAQAEAAABADIABADIAGAuIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIACgBIABgCIAngtQADgEADgBIAEgBIASAAQAFABABABQAAABgBAEIgwCEQgDAGgBAAQgCACgFAAgABzAzQgDgLAIgWIAVg7QAHgSANgLQASgOAcABQAQAAAEACQABAAABABQAAAAAAABQABAAAAABQgBABAAAAIgHAUIgBADIgDAAIgSgDQgOAAgIAJQgFAHgFAOIgNAiQgHASADAGQACAGAOAAQAJAAACgBQADgBAGAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABIgHATQgBAEgHADQgFACgTAAQgdAAgGgQgAEPBCQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIAAgEIABgQQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIgdAAQgDAAgCADIgKARQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgCABgDAAIgVAAQgEAAACgEIAAgBIABgBIBSiGQACgEACgBIAFgBIAbAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABIgPCHIAAACQgCAEgEAAgAESgbIgWAkQAAAAgBABQAAABAAAAQAAAAAAABQABAAAAAAIASAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAgBABAAIAEgkIAAgBIgBgBgAACBAQgBAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIgBgEIABgQQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgdgBQgDAAgCAEIgKAQIgEAEQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgVAAQgDAAAAgFIABgBIABgBIBQiGQACgEACgBIAFgBIAaAAIAEABQABABAAAEIgPCHIgBADQAAADgFAAgAAFgdIgUAkQgBABAAAAQgBABABAAQAAABAAAAQAAAAABAAIAQAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAEgkIAAgBIAAgBgAiNA/QgFAAgBgCIABgFIAohrQABgEgEAAIgaAAQgGAAACgFIAHgUQACgEAEAAIBeABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIgBAEIgGATQgCAEgEAAIgcAAQgEAAgBAEIgoBrQgBAEgBABQgDACgFAAgAkTA+QgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgFIACgQQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBAAAAAAIgdAAQgDAAgDADIgKARIgDADQgCACgDAAIgUAAQgEAAABgEIABgCIAAgBIBSiGQADgEACgBIAEgBIAbAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABIgPCHIgBADQgBADgFAAgAkRgeIgWAjQAAABAAABQgBAAABABQAAAAAAAAQAAAAABAAIARAAQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAgBIAEgjIAAgCIAAgBgAmIA+QgFgBAAgBQgBgDABgDIAUg2QACgDgEAAIgXAAQgDAAgBADIgUA2QgCAFgCABQgCABgEAAIgRAAIgFgBQgBgBABgFIAxiEIADgFQACgDAFAAIAQAAQAFABABABQABADgCADIgPApIAAADQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAXAAIACAAQACgBABgDIAPgpIACgFQAEgCAEAAIAQAAQAFAAABACQAAABgBAEIgwCEIgDAFQgDADgFAAgAn1A9QgBAAgBAAQgBAAgBAAQAAgBAAAAQgBAAAAAAQgBgCABgFIAxiEIACgFQADgCAFAAIAQAAQAFAAABACQAAACgBAEIgwCEIgEAGQgCABgFAAgAJgg7IgBAAIAAgBIACgFIAAgBIgBAAIgFADIgBgBIgBgBIAAgBIACgBIAFgCIAAgBIAAAAIgEgCIAAgBIABgBIACgCIABgBIAAABIADACIABABIAAgBIACgFIABgBIADAAQAAAAAAAAQAAAAAAAAQABAAgBABQAAAAAAAAIgCAFIABABIAAgBIAGgDIABABIAAACIAAABIgBABIgFACIgBAAIAAABIAEACQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgCADIgBAAIgBAAIgDgDIAAAAIgBABIgBAFIgCABgAJHg7IAAgBIACgFIAAgBIgBAAIgGADIAAgBIgBgCIAAAAIABgBIAFgCIABgBIAAAAIgEgDIAAAAIAAgBIACgCIABgBIABAAIADADIAAAAIABAAIACgFQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACAAIABABIgCAFIAAAAIABAAIAFgDIABAAIAAABIABACIAAABIgBABIgGACIAAAAIAAABIAEACIAAABIAAABIgCACIgBAAIgBAAIgDgDIgBAAIAAABIgCAFQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape.setTransform(-7.1,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E00A25").s().p("ABLBYQgCgCABgGIAIgVQABgDACgCIAFgBIADAAQAMAAAHgLQAKgQAXhAIAPgpIADgGQADgDAGAAIBXAAQAGAAAAACQABACgCAFIg5CeIgDAGQgDADgGAAIgTAAQgGAAgBgCQgBgDACgEIAviCQACgEgFAAIgWAAIgCABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgUA0QgLAegHAOQgMAXgNAKQgPAMgVAAQgLAAgDgBgAo4BZQgFAAACgFIAAgCIBiiiQACgEADgCIAGgBIAgAAIAFABIABAGIgRChIgBADQgCAFgFAAIgZAAQgDAAgCgCIAAgGIACgTQAAgDgEAAIgjAAQgEAAgCADIgMAUIgEAFQgDACgDAAgAnXgWIgaArQgBABAAABQAAAAAAABQAAAAAAAAQABABAAAAIAVAAQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBIAFgrIAAgCIgBgBgAq4BZQgHAAADgJIA5igQACgDACgCQADgBAEgBIAwAAQAeAAAJAOQAJAMgHATQgFAMgJAKQgKAKgNAEIAAABQANAFADAKQAEAKgFASQgIAWgSANQgVAQgeAAgAp+AMIgCAEIgNAlQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAIAMAAQAOAAAIgGQAJgHAEgJQADgKgEgGQgFgGgNgBIgLAAIgEABgApogyIgJAbQgCAEAFAAIAIAAQANgBAHgFQAHgEADgHQACgHgDgFQgEgFgNAAIgIAAQgEAAgCADgAjmBZQgDAAgCgCIAAgGIACgTQAAgDgEAAIgjAAQgEAAgCADIgMAUQgBADgDACQgCACgEAAIgYAAQgFAAACgGIAAgBIABgBIBhihQADgFACgBQADgBADAAIAgAAQADAAACABQABABAAAFIgRChIgBADQgCAEgFABgAjjgXIgaArQgBABAAABQAAABAAABQAAAAAAAAQABABAAAAIAVAAQADAAAAgFIAFgrIAAgBIgBgBgAmpBZQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgCABgEIA6igQABgEAEgCIAGgCIBTAAQAEAAABABQABABAAAAQABABAAAAQAAAAAAABQAAAAAAABIgJAWQgBAHgHAAIg1AAQgCAAgCADIgvCBQgCAHgCABQgCABgEABgAhuBVIABgFIA5ieQABgEADgDQACgCAGAAIBZAAQABAAABAAQABAAAAAAQAAABABAAQAAAAAAAAIgJAaQgCAGgFAAIg5AAQgDAAgBACIgJAZQAAAAAAABQAAABAAAAQAAABABAAQAAAAABAAIALAAQAlAAAJAVQAGAMgHAWQgKAZgUAQQgWAQgfAAIgtAAIgCAAQgEAAgBgDgAgvAKIgPAqQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAIANAAQAMAAAIgHQAJgFAEgLQAEgLgEgHQgEgHgMAAIgMAAQgEAAgBADgADsBYQgGAAgBgCIABgHIA5ieIADgGQADgDAGAAIAUAAQAGAAAAACQABACgCAFIgSA0QAAAAAAABQAAABAAAAQAAABABAAQABAAAAAAIATAAQAbAAAKAQQAKAOgJAbQgMAggbAOQgSAIgZABgAEkAKIgOAoQAAAAAAABQAAABAAAAQAAABABAAQABAAAAAAIAQAAQAJAAAJgHQAIgIADgJQADgKgEgFQgEgIgKABIgNAAQgEAAgBADgAAgBYQgFAAgBgBQgCgCACgGIA5ieIADgGQADgDAGAAIAUAAQAFABABACQABACgCAEIg5CeQgBAGgDACQgDABgFAAgAKMBYQgEAAgBgCIAAgGIACgTQAAgEgEAAIgjAAQgEAAgCAEIgMAUIgEAFQgCACgEAAIgYAAQgFAAACgGIAAgBIABgBIBhihQADgFACgBQADgBADAAIAgAAQABAAABAAQAAAAABAAQABABAAAAQAAAAAAAAQACABAAAFIgRChIgBADQgCAEgFABgAKPgYIgaArQgBACAAAAQAAABAAABQAAAAAAAAQABABAAAAIAVAAQADgBAAgEIAFgrIAAgBIgBgBgAFyBYQgFAAAAgBQgDgCADgGIA4ieQACgFACgBQADgCAFgBIAUAAQAGAAABACQAAACgBAFIgvCCIAAACIACABIAaAAQAEAAACgDIAviCIADgGQADgDAGAAIATAAQAGAAABACQABADgCAEIgvCCQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIADABIAaAAQAEAAABgDIAviCIADgGQADgDAGAAIATAAQAGAAABACQABACgCAEIg5CfQgCAFgCACQgDABgFABg");
	this.shape_1.setTransform(8.4,-38.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEDB31").s().p("AyVJsIGPxMQAVg6AfgaQAmggBqgMQBmgLD1AAIeBAAImQRLQgaBJg5AkQgxAehDABgAziJrIE1tSQAxgUAjgpIlLOPgA0rJrIEutAQAcgBAcgJIkzNKgA11JrIEvs+IAqAAIkvM+gA2+JrIEvs+IAgAAIkuM+gA4HJrIEvs+IAVAAIktM+gA5QJrIEvs+IAMAAIkvM+gA6ZJrIEvs+IACAAIkvM+g");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169,-62,338,124);


(lib.ninjaBlur_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ninjaBlur();
	this.instance.setTransform(-119.5,-135.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.5,-135.5,239,271);


(lib.ninja_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ninja();
	this.instance.setTransform(-128,-205);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-205,256,410);


(lib.line = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEDB31").s().p("EgiSAJsIGPxLQAbhJA5gkQAwgeBEgBMA7OAAAImPRLQgbBJg5AkQgwAehEABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-219.5,-62,439,124);


(lib.hand_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-306,-160,1.7,1.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-306,-160,612,321.3);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_164 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(164).call(this.frame_164).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnCMAu3AAAMAAAAnCg");
	mask.setTransform(0,178);

	// line
	this.instance = new lib.line();
	this.instance.setTransform(-370,301.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({x:370},30).wait(81));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.setTransform(62.4,301.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).wait(94));

	// hand
	this.instance_2 = new lib.hand_1();
	this.instance_2.setTransform(-8,400.5,0.363,0.363);
	this.instance_2.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-48.5},15,cjs.Ease.get(1)).to({y:-30,alpha:1},9).wait(14).to({scaleX:0.59,scaleY:0.59,x:-14,y:-36},12,cjs.Ease.get(1)).wait(105).to({regY:0.6,scaleX:0.59,scaleY:0.59,x:-13.8,y:-35.3},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-13.4,y:-34.5},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:-12.8,y:-33.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-12.1,y:-31.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-11.3,y:-29.7},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-10.5,y:-28},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-9.8,y:-26.5},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-9.3,y:-25.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-9,y:-24.9},0).wait(1).to({regY:0,scaleX:0.52,scaleY:0.52,y:-25},0).wait(1));

	// ninja
	this.instance_3 = new lib.ninja_1();
	this.instance_3.setTransform(43.3,429.5,0.607,0.607);
	this.instance_3.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-19.5},15,cjs.Ease.get(1)).to({y:-0.5,alpha:1},9).wait(14).to({scaleX:0.59,scaleY:0.59,x:70.2,y:5.5},12,cjs.Ease.get(1)).wait(105).to({scaleX:0.59,scaleY:0.59,x:69.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:67.5,y:5.3},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:64.3,y:5.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:60.1,y:4.8},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:55.7,y:4.4},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:51.4,y:4.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:47.9,y:3.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:45.3,y:3.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:43.8,y:3.5},0).wait(1).to({x:43.3},0).wait(1));

	// ninjaBlur
	this.instance_4 = new lib.ninjaBlur_1();
	this.instance_4.setTransform(1.5,440.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-8.5},15,cjs.Ease.get(1)).to({y:10.5,alpha:0},9).to({_off:true},1).wait(140));

	// bgImg
	this.instance_5 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,876);


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
p.nominalBounds = new cjs.Rectangle(149,299,302,877);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;