(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.apple = function() {
	this.initialize(img.apple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,43);


(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,740);


(lib.glaz = function() {
	this.initialize(img.glaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,19);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,448);


(lib.lord1 = function() {
	this.initialize(img.lord1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,354);


(lib.lord2 = function() {
	this.initialize(img.lord2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,344);


(lib.tablichka = function() {
	this.initialize(img.tablichka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,272);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tablichka_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#235128").s().p("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IgHg7IgOBAIgSgEQgJgBACgLIAMg2IgfAyQgEAJgJgBIgUgFIAog+IgFglIgEgaIASAEQAJACAAAKIAGA3IAOg8IASAEQAJACgCAKIgLAyQAYglAFgKQAFgJAIACIASAEIgjA1IAKBKgAksiVQgIgDABgJIAah0IATAEQAJACgCAKIgaB0gAlhihIgqgKIAch+IAvALQAXAFgCAVQgBAMgDAGQgFANgLACQANAHgDASQgDARgDAHQgIASgTAAIgLgBgAlsi4IAIACQAKACAEgKQAEgKABgJQABgJgKgDIgJgBgAlfjyIAIACQAKACADgKQACgFABgGQABgIgKgCIgIgCgAm9izQgdgHgEgRQgDgNAKguQAIgkAJgMQANgSAbAGQAlAJgGAbIgFAaIgKgBQgTgEADgPQADgLgBgEQAAgFgHgCQgHgBgFAMQgEAMgGAaQgGAagBAMQgBANAIACQAFABADgFQADgFAEgQQAEgOASAEIAKADIgHAgQgGAWgYAAIgOgBgAAcjbQgUgEAEgQIABgEIAFABQAJACgBAGQgBAEAFABQAGABABgDQABgHAKACIAFACIgBAEQgDAMgNAAIgIgBg");
	this.shape.setTransform(4.5,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.tablichka();
	this.instance.parent = this;
	this.instance.setTransform(-72,-88,0.649,0.649);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tablichka_1, new cjs.Rectangle(-72,-88,144,176.5), null);


(lib.lord2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lord2();
	this.instance.parent = this;
	this.instance.setTransform(-121,-144,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lord2_1, new cjs.Rectangle(-121,-144,241.6,275.2), null);


(lib.lord1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lord1();
	this.instance.parent = this;
	this.instance.setTransform(-121,-152,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lord1_1, new cjs.Rectangle(-121,-152,241.6,283.2), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-138,-167,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-138,-167,276,334.2), null);


(lib.HW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgSvAlgMAAAhK/MAlfAAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.HW, new cjs.Rectangle(-120,-240,240,480), null);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-37,0,37,0).s().p("EgFxAhXMAAAhCtILjAAMAAABCtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient, new cjs.Rectangle(-37,-213.5,74,427), null);


(lib.glaz_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glaz();
	this.instance.parent = this;
	this.instance.setTransform(-10,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glaz_1, new cjs.Rectangle(-10,-9.5,20,19), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-120,-200,240,400), null);


(lib.apple_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.apple();
	this.instance.parent = this;
	this.instance.setTransform(-20,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.apple_1, new cjs.Rectangle(-20,-21.5,40,43), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HW
	this.instance = new lib.HW();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(214).to({_off:false},0).to({alpha:1},10).wait(40).to({alpha:0},5).wait(1));

	// tablichka
	this.instance_1 = new lib.tablichka_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.5,245,1,1,105,0,0,-36.1,89);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({_off:false},0).wait(1).to({regX:0,regY:0.2,rotation:104,x:94.9,y:301.5},0).wait(1).to({rotation:101.1,x:97.7,y:297.4},0).wait(1).to({rotation:96,x:102,y:290.1},0).wait(1).to({rotation:88.8,x:107,y:279.1},0).wait(1).to({rotation:79.6,x:111.3,y:264.4},0).wait(1).to({rotation:68.8,x:113.3,y:246.4},0).wait(1).to({rotation:57,x:111.6,y:226.8},0).wait(1).to({rotation:44.9,x:105.7,y:207.7},0).wait(1).to({rotation:33.5,x:96.5,y:190.8},0).wait(1).to({rotation:23.3,x:85.6,y:177.7},0).wait(1).to({rotation:14.7,x:74.9,y:168.3},0).wait(1).to({rotation:8.1,x:65.7,y:162.2},0).wait(1).to({rotation:3.5,x:59,y:158.6},0).wait(1).to({rotation:0.9,x:54.9,y:156.8},0).wait(1).to({regX:-36,regY:89,rotation:0,x:17.5,y:245.1},0).to({_off:true},51).wait(45));

	// glaz
	this.instance_2 = new lib.glaz_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.3,4.6);
	this.instance_2.alpha = 0.5;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).wait(1).to({alpha:1},0).wait(4).to({alpha:0.5},0).to({_off:true},1).wait(195));

	// lord
	this.instance_3 = new lib.lord1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,239.1,1,1,0,0,0,0,124.5);

	this.instance_4 = new lib.lord2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,361.1,1,1,90,0,0,0,127);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({regX:-0.2,regY:-10.4,rotation:-0.7,x:-1.9,y:105.2},0).wait(1).to({rotation:-3,x:-7.1,y:108.4},0).wait(1).to({rotation:-6.8,x:-16.2,y:114.5},0).wait(1).to({rotation:-12.4,x:-29.2,y:124.3},0).wait(1).to({rotation:-19.6,x:-45.5,y:138.8},0).wait(1).to({rotation:-28.3,x:-64.2,y:159},0).wait(1).to({rotation:-38.1,x:-83.4,y:185},0).wait(1).to({rotation:-48.5,x:-101.1,y:215.8},0).wait(1).to({rotation:-58.6,x:-115.3,y:248.9},0).wait(1).to({rotation:-68,x:-125.1,y:281.2},0).wait(1).to({rotation:-75.9,x:-130.9,y:309.8},0).wait(1).to({rotation:-82.2,x:-133.7,y:332.9},0).wait(1).to({rotation:-86.6,x:-134.7,y:349.2},0).wait(1).to({rotation:-89.2,x:-134.9,y:358.7},0).wait(1).to({regX:0.1,regY:124.5,rotation:-90,x:0,y:361.6},0).to({_off:true},5).wait(220).to({_off:false,regX:0,rotation:0,y:239.1},0).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).wait(1).to({regX:-0.2,regY:-6.4,rotation:89.2,x:133.4,y:358},0).wait(1).to({rotation:86.8,x:133.2,y:349.3},0).wait(1).to({rotation:82.8,x:132.4,y:334.6},0).wait(1).to({rotation:77.2,x:130.1,y:314.1},0).wait(1).to({rotation:70.1,x:125.4,y:288.6},0).wait(1).to({rotation:61.7,x:117.3,y:259.3},0).wait(1).to({rotation:52.3,x:105.4,y:228.5},0).wait(1).to({rotation:42.4,x:89.8,y:198.3},0).wait(1).to({rotation:32.6,x:71.7,y:171.1},0).wait(1).to({rotation:23.4,x:52.7,y:148.6},0).wait(1).to({rotation:15.3,x:34.9,y:131.5},0).wait(1).to({rotation:8.7,x:19.9,y:119.4},0).wait(1).to({rotation:3.9,x:8.8,y:111.7},0).wait(1).to({rotation:1,x:2,y:107.5},0).wait(1).to({regX:0,regY:127,rotation:0,x:0,y:239.6},0).wait(31).to({regX:-0.2,regY:-6.4,rotation:-0.9,x:-2.1,y:107.4},0).wait(1).to({rotation:-3.5,x:-8.3,y:111.2},0).wait(1).to({rotation:-8,x:-18.7,y:118.3},0).wait(1).to({rotation:-14.3,x:-33.1,y:129.7},0).wait(1).to({rotation:-22.3,x:-50.6,y:146.4},0).wait(1).to({rotation:-31.5,x:-69.9,y:168.7},0).wait(1).to({rotation:-41.6,x:-88.6,y:196.3},0).wait(1).to({rotation:-51.8,x:-104.9,y:227.4},0).wait(1).to({rotation:-61.5,x:-117.2,y:259.5},0).wait(1).to({rotation:-70.1,x:-125.5,y:289.6},0).wait(1).to({rotation:-77.4,x:-130.2,y:315.6},0).wait(1).to({rotation:-83,x:-132.4,y:336.1},0).wait(1).to({rotation:-87,x:-133.2,y:350.6},0).wait(1).to({rotation:-89.3,x:-133.3,y:359},0).wait(1).to({regX:0,regY:127,rotation:-90,x:0,y:361.6},0).to({_off:true},1).wait(165));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("AB4R0IACACIgCAAIAAgCgABdRhIAAgNQgBgDABgDIACgFIABgHIAAgZQgCgHgDgDIgDgEQgCgEgBgBIgDABQgBAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQAAADADAEIACADIACAFIABAGIAAAUQAAAEgCADIgBADIAAAHIgHgMQgSgggMgQIgOgVQgGgKgGgWIgEgRIgCgEQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgDACACAFIAEASIAEAMIgCABIAAABIAAAAIAAABIAAACIAAAAIADAGIABABIAIAQIgRgNIgHgHIgRgLQgMgLgIgFIgIgEQgEgDgFgHQgEgFgCABQgDABAAAEQAAADADADQAHAIAFADIAJAEIAmAcIANANIAMAIIAJAGIgEABIgJACIABgDIgCgCIgDgCIgDgCIgGgIIgEgEIgHgCIgbgSIgDgDIgDgFQgDgCgCAAQgDABAAADIACAFIAEAEIAGAGIAIAEQAMAKAIADIADABIAFAFIADAEIAGAGIADABIgCABQgFADABADIAAABQgHgKgGgFIgKgHIgFgDQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgCADADADIAGADQAGADAHAIIAWAgIAEAFIgCABIgCAFIAAABIgIgIIgGgGIgOgLIgNgGQgNgIgKgLIgEgEQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIADADQAKALALAHIgHADIgEgBIgVgJQgEgCgCACQgEACACADQABADADABQAEADAJADQAIADAEADIgSAHQgLAEgHgBIgBgLQAAgHgBgDIgFgGQgBgCgBgLQgBgFgDgCQgEgDgFAEIgGAJQgDAHgDACIAAgOQgBgJgGgCQgFgBgEADIgLAPIgBACQgDABgEAFIgeAsQAAgCgDgCIAGgLIAdgzQADgGAAgCQAAgEgEgCQgDgCgDACIgEAFIgXAoIgBgMQABgFAEgJIACgHIgBgFIAEgCQACgBABgEQACgEgBgDIgCgFQgDgFgEABQACgFADgEIAIgOIACACQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBIADgDIADgEIASgLIAFgDIAFAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQABgEgFgBQgEgBgDACIgGAFIgOAHIgFAEIADgKIAFgXIADgEQAEgHAPgJQAOgJAGgJQADgFgCgDQgDgBgCACIgDADQgFAFgQAMIgIAGQAAgGgGgBQgDgBgEAEQgDACgCAFIgFAOIgEATQgDASgIALIgIANIgBAIIgEACQgEACgCgBQgBgDAEgDIAEgGQACgEgDgGQgEgHgFgCQgEgCgLACIgGABIANgSIAPgZQAHgLAOgRQBIhWAiggQAHgGgCgGQgEgFgFACQgEACgEAEQg2A4gcAjIgRAVIgWAYQgFAHgKATQgKARgHAIIgCADQAMgnAIglQACgHgCgFQgBgDgDgBQgDgCgCACQgCABgBADIgCAGQgCAIgLAJQgUASgNATQgBgOgDgKQgBgEgDgDQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIAHgVQAGgbAFgMIAJgTIAHgWIAHgPQASghAOgPQAHgHgCgFQgCgGgKACQgIACgFAEIgBACIAyhxQAGgLgHgEQgEgBgEADIgFAHIgkBTIgBADIACgIQAIgnAFgiIAAgJQgCgFgEAAQgGAAgCALIgIAxQgGAhgIARIgNAcQgEAIgIAdQgGAVgHAMIgEt0QgBgYAHggQANhCAnguQArg1AJgfQAGgZAEhpQAEhTAYihQANhQAMhCIAIjCIgDgEQgFgGAAgHIAHgkIgLgNIAEgQQADgQAFgGQAHgIAhgGQAbgGAZgBQAbgBApACQAyAEANAHQAMAJACASIAAASIgMAPIAKAdIgMAVIAAASIAFAWIAEBHQAcD7ANA1QAJArAKA+QAIA9ADAkIAGBYIAKARIACARIATAVIBGQoIgBAAIgBAAQgCgDgEAAIgFAAIACgGQAAgEgBgCQgBgEgFgBQgFAAgDAEIgBACQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgDgCgEACQgEABAAAFIgMgSQgCgEgCgBIgBAAIgBgCIgDgGQgEgEgGADQgDADAAAFQAAADADAFIACAEIgCAEIgCAEIgEgDQgEgCgEACQgDABgBAFQgBAFAFAEIAKAHIgCACIgHABQgFAAgCABQgDADAAAEIABAHIACAIIgDgBIgLgLQgBgDgDgBQgHgEgEAHQgCAEACAHIABAEIAAAEQAAACADAFIADADIAAABIACAFIAFACIADAEIgCAEQgCAFABAHIABAPQABADgCADQgCADgFADQgGAGADAHQADAHAIgBQgDAKACAJIgFAGQgEAGAAAEIABAGQgBAHgGAAQgCgEgDgCQgDgEgFADQgDACgCAGIgCAFIgBABIgDABIgCABQgQgvgXgsQgFgLgHABQgGABgBAFQAAAEADAFQAgA7ASBAQABAEgBACIgCACIgCgDIgEgFQgEgEgFADIgBABIgBgCIgIgLQgGgFgEAFIgCADIgSgfQgEgHgEgBQgFgCgDAEQgEADABAFIAiA3IABAEIAFAIQAMAQgDAUQgHgBgEADQgFAFACAMQADAPgBAOIAAAEIgLgSgAifRnIABgCIAAABIAAACIgBgBgAiPRRIACgDIgBADIgBABIAAgBgAAUQ0IACAAQAEgBADABQgFACgBACIgDgEgAAPQsIABABIAAABIgBgCgAjBQaIABABIAAABIgBgCgAAhQRIAAAAIABABIgBgBgAjRPwIgBAAIACAAQABAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAIgBgDgAkSPcIAAgBQAEACADAAIgBADQgCgDgEgBgAkjNbIACAAIgCAEgADzMnIAAAAIAAAAIAAAAgAjsL8IAAABIAAAFQAAACgCADIgHALIAJgWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:-85.9,y:64.7}).wait(26).to({graphics:null,x:0,y:0}).wait(139));

	// gradient
	this.instance_5 = new lib.gradient();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-208,24.8,2.008,1.543,38.7);
	this.instance_5.alpha = 0.602;
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(105).to({_off:false},0).to({x:33.7,y:204.8},25).to({_off:true},1).wait(139));

	// img1
	this.instance_6 = new lib.img1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,95.2,0.87,0.868);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).to({alpha:1},15).wait(26).to({scaleX:1,scaleY:1,x:18.4,y:73.1},29).to({_off:true},65).wait(46));

	// apple
	this.instance_7 = new lib.apple_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-64.8,-190.4,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({y:-183.8},0).wait(1).to({y:-174.9},0).wait(1).to({y:-163.3},0).wait(1).to({y:-148.8},0).wait(1).to({y:-130.7},0).wait(1).to({y:-108.3},0).wait(1).to({y:-80.4},0).wait(1).to({y:-44.8},0).wait(1).to({y:2.8},0).wait(1).to({y:73.7},0).to({_off:true},1).wait(249).to({_off:false,y:-190.4},0).wait(6));

	// bgImg
	this.instance_8 = new lib.bgImg_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(130).to({scaleX:0.98,scaleY:0.98,x:18.6,y:-23.5},29).wait(105).to({scaleX:0.8,scaleY:0.8,x:0,y:0},0).wait(6));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(270));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-240,241.6,485.8);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,0,3).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.8,299,302.3,608.3);
// library properties:
lib.properties = {
	id: '675C042AA612417A9E17C1633E3405BC',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/apple.png", id:"apple"},
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/glaz.jpg", id:"glaz"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/lord1.png", id:"lord1"},
		{src:"images/lord2.png", id:"lord2"},
		{src:"images/tablichka.png", id:"tablichka"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['675C042AA612417A9E17C1633E3405BC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;