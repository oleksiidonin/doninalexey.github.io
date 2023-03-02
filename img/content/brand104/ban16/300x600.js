(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.accent = function() {
	this.initialize(img.accent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,248);


(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,234);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,232);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,212);


(lib.coffee = function() {
	this.initialize(img.coffee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,247);


(lib.cup1 = function() {
	this.initialize(img.cup1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,360);


(lib._img = function() {
	this.initialize(img._img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,498,248);


(lib.steam = function() {
	this.initialize(img.steam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,230);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,116);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,166);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,80);


(lib.t4 = function() {
	this.initialize(img.t4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,52);


(lib.t5 = function() {
	this.initialize(img.t5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,76);// helper functions:

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


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C3425").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-116.5,-154.8,233.2,309.6), null);


(lib.t5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(-93,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5_1, new cjs.Rectangle(-93,-38,186,76), null);


(lib.t4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(-98,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4_1, new cjs.Rectangle(-98,-26,196,52), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(-103,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-103,-40,206,80), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-116,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-116,-83,232,166), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-150,-58,300,116), null);


(lib.steamMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.steam();
	this.instance.parent = this;
	this.instance.setTransform(-85,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.steamMc, new cjs.Rectangle(-85,-115,170,230), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D22E26").s().p("AhcBTQAKgDAMgIQALgHAJgKQARgQAJgXQAJgSAEgZQAGgkAQgMQAKgIARABIA3AAIgFAnIgGAkQgJAjgYAZQgPAQgZAIQgZAGgsAAg");
	this.shape.setTransform(75.7,-16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ALEC6QgbgIgQgOQgMgMgGgZQgFgXAAgfIAAilIDHAAIAAA1Ih9AAIAAA6IBrAAIAAA1IhrAAQAAAUABAKQACAOAFAIQAGAJAOADQAMAEAXAAQAhgBAegIIAAAwQgNAHgUADQgRADgVAAQgmAAgZgGgAGxC5QgXgMAAgbIAAjuIDHAAIAAA1Ih9AAIAAA6IByAAIAAA1IhyAAIAAB4QgjAAgQgHgAgWC6QgdgHgQgRQgPgPgGggQgHgdAAgoQAAgoAHgbQAGggAPgQQAQgQAdgHQAYgGAjAAQARAAAPADQASADAKAGIAAAxQgNgEgPgDQgNgCgOAAQgSAAgLADQgNAEgFAJQgGAIgCAVQgCAPAAAgQAAAhACARQACAUAGAIQAFAJANADQALAEASAAQASAAAOgCQAOgDAPgEIgKAzQgLAFgPACQgOADgQAAQgjAAgYgGgAkpC7QgTgEgMgGIAAg0QAvAOAmABQAWAAAHgEQAOgFABgRQABgNgNgIIgMgGIgLgDIgXgHIgZgJQgbgKgLgNQgIgJgFgRQgDgPAAgSQAAgTAGgPQAFgQAHgIQARgPAZgGQATgGAdAAQAdAAAYAGQAUAEAKAGIAAAzQgUgHgSgDQgVgDgVgBQgSAAgJADQgNAFgCANQgEAOAJAIIAKAEIANAFIAZAJIAbAKQAgAMALANQAKALAEARQAEARgBASQgBASgHAPQgGAQgKAHQgQAMgaAGQgWAFgaAAQgfAAgZgFgAn1C6QgcgHgPgQQgMgLgGgZQgFgXAAgfIAAilIDGAAIAAA1Ih8AAIAAA6IBrAAIAAA1IhrAAQAAATABALQACAOAFAIQAGAJAOADQALAEAYAAQAggBAegIIAAAwQgMAHgUADQgSADgTAAQgnAAgZgGgAEuC6IgJg1IhgAAQgFAWgEAfIhCAAQAShbAVhFQAXhHAagvIBUAAQAXAvAaBOQAXBLARBOgADPBXIBLAAQgThGgUgoQgVAzgPA7gArPCjQgIgHgGgLIgHgLIh0jUIAAEIIhEAAIAAl0QAGgCALgCIAVgBQARAAAMACQAMADAKAGQAJAGAJAKQAHALAKAQIB0DYIAAkMIUOAAQABAYghAPQgOAGgRAEQgQADgQAAIxrAAIAAE+QgEACgNACIgWABQgnAAgZgXgANyCtQgIgIABgKQgBgKAIgHQAIgIAKABQAKgBAIAIQAHAHAAAKQAAAKgHAIQgIAHgKAAQgLAAgHgHgAN2CNQgGAGAAAIQAAAJAGAFQAFAGAJAAQAIAAAFgGQAGgFAAgJQAAgIgGgGQgFgGgJAAQgHAAgGAGgAOJCoIgBgGIgCgDIgEgBIgCAAIAAAKIgGAAIAAgZIAFAAIAEgBIAGABIADABQADACAAAEQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgEADIAAAAIADACIACAEIACAGgAOACTIAAAHIACAAIAFgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_1.setTransform(0,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-92.5,-24.8,185,49.7), null);


(lib.coffee_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.coffee();
	this.instance.parent = this;
	this.instance.setTransform(-178,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coffee_1, new cjs.Rectangle(-178,-123.5,356,247), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-108,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-108,-106,216,212), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-81,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-81,-116,162,232), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-56,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-56,-117,112,234), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.accent_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.accent();
	this.instance.parent = this;
	this.instance.setTransform(-139,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.accent_1, new cjs.Rectangle(-139,-124,278,248), null);


(lib.steam_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.steamMc();
	this.instance.parent = this;
	this.instance.setTransform(0,48.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:0},25).wait(1).to({y:97.5},0).to({y:50.7,alpha:0.961},24).wait(1));

	// Слой 1
	this.instance_1 = new lib.steamMc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,97.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:48.8,alpha:1},25).to({y:0,alpha:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-66.2,170,278.8);


(lib._img_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjII0QgBAAAWivQAXivgBgBQgCgCmAgeQiigCgFgDQgCgCiclyQiclzgCgCQgDgBQFABQP7ACAIgCQgDAFgfH0QghH5gCgCQgHgFi/AgQjGAhgUAUQgVATheAKIjMAQQhMAGhqAAQhpAAiIgGgAQDo5IAAAAIAAAAg");
	mask.setTransform(56.7,-129);

	// Слой_3
	this.instance = new lib.steam_1();
	this.instance.parent = this;
	this.instance.setTransform(73.9,-89.4,0.3,0.3,0,0,180,-0.4,72.9);
	this.instance.alpha = 0.801;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib._img();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-249,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой_2
	this.instance_2 = new lib.steam_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-55.1,-76.7,0.4,0.4,0,0,0,-0.2,72.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib._img_1, new cjs.Rectangle(-249,-132.3,498,256.4), null);


(lib.cup1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah3VzQilgMiAg7QhAgdghgdQxWoLAAgCIAK+2QAAgBDMhUQDNhVgBgBQAAgBVXAhQVWAiACgCIBWaJQiTDWidDgQk7HCgwAqQgyAth3AdQgXAGjFAkQhuAUi7AFIhmABQiPAAiNgKgAX+08IAAAAIAAAAg");
	mask.setTransform(-53.7,-162.3);

	// Слой_2
	this.instance = new lib.steam_1();
	this.instance.parent = this;
	this.instance.setTransform(-29.6,-73.3,0.7,0.7,0,0,0,0.1,73);
	this.instance.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.cup1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-113,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cup1_1, new cjs.Rectangle(-113,-180,226,360), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(226).to({_off:false},0).to({alpha:1},10).wait(45).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33.5,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(216).to({alpha:0},10).to({_off:true},1).wait(64).to({_off:false},0).to({alpha:1},10).wait(1));

	// t5
	this.instance_2 = new lib.t5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3,229);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(166).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).to({_off:true},1).wait(85));

	// t4
	this.instance_3 = new lib.t4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4,231);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).to({_off:true},1).wait(135));

	// img
	this.instance_4 = new lib._img_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(398,41);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(106).to({_off:false},0).to({x:-12},15,cjs.Ease.cubicOut).wait(90).to({x:-402},15,cjs.Ease.cubicIn).to({_off:true},1).wait(75));

	// t3
	this.instance_5 = new lib.t3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,226);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(195));

	// cup1
	this.instance_6 = new lib.cup1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(265,-9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({_off:false},0).to({x:55},10,cjs.Ease.cubicOut).wait(35).to({x:-235.8},10,cjs.Ease.cubicIn).to({_off:true},1).wait(195));

	// t2
	this.instance_7 = new lib.t2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-3,202.1,2,2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1},6,cjs.Ease.cubicIn).wait(25).to({alpha:0},10).to({_off:true},1).wait(250));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2ETYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgJBAA9BdQAkA5BjB0QBjB0AiA1QA5BagOA4QgPA/hdA8Qg+AniLA8QigBFgzAcQhpA5gfA4QgeA3gdAtQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_graphics_291 = new cjs.Graphics().p("A2ETYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgJBAA9BdQAkA5BjB0QBjB0AiA1QA5BagOA4QgPA/hdA8Qg+AniLA8QigBFgzAcQhpA5gfA4QgeA3gdAtQhgCZiFCMQjnDulsBoQmBBoqOAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.4,y:7.5}).wait(62).to({graphics:null,x:0,y:0}).wait(229).to({graphics:mask_graphics_291,x:1.4,y:7.5}).wait(11));

	// box1
	this.instance_8 = new lib.box1_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-19,30);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({rotation:-15,x:-18.9,y:249.5},10,cjs.Ease.cubicIn).to({_off:true},1).wait(229).to({_off:false,rotation:0,x:-19,y:30,alpha:0},0).to({alpha:1},10).wait(1));

	// box2
	this.instance_9 = new lib.box2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(19,32);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51).to({rotation:-28.4,x:-19.5,y:250.9},10,cjs.Ease.cubicIn).to({_off:true},1).wait(229).to({_off:false,rotation:0,x:19,y:32,alpha:0},0).to({alpha:1},10).wait(1));

	// box3
	this.instance_10 = new lib.box3_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(36,66);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(51).to({rotation:-45,x:-17.6,y:253.8},10,cjs.Ease.cubicIn).to({_off:true},1).wait(229).to({_off:false,rotation:0,x:36,y:66,alpha:0},0).to({alpha:1},10).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A0sTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A5nTYQBKgXgkhoQgWg/hjijQhniqgdhMQgyiAA2g6QDYjbEOk7QEpliCTiqQFGl6GRieQD+hkD8AAIMxAAQgQB0gWCuIgiERQgsFQgwDMQgrCyg7CVQhBClhcCRQhhCZiFCMQjnDulqBoQmCBoqOAAg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A/xTYQBKgXgkhoQgWg/hjijQhniqgdhMQgyiAA2g6QDYjbEOk7QEpliCTiqQFGl6GRieQD/hkD8AAIMwAAQgQB0gWCuIgiERQgsFQgwDMQgrCyg7CVQhBClhcCRQhhCZiFCMQjmDulrBoQmCBoqOAAg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AzxTYQBLgXglhoQgVg/hkijQhmiqgehMQgyiAA3g6QDXjbEOk7QEpliCTiqQFGl6GQieQD/hkD9AAIMxAAQgRB0gVCuIgiERQgsFQgxDMQgqCyg7CVQhCClhcCRQhgCZiFCMQjnDulsBoQmBBoqOAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-13.3,y:7.5}).wait(96).to({graphics:mask_1_graphics_96,x:-13.3,y:7.5}).wait(1).to({graphics:mask_1_graphics_97,x:-13.6,y:7.5}).wait(1).to({graphics:mask_1_graphics_98,x:-15.7,y:7.5}).wait(1).to({graphics:mask_1_graphics_99,x:-21.2,y:7.5}).wait(1).to({graphics:mask_1_graphics_100,x:-31.9,y:7.5}).wait(1).to({graphics:mask_1_graphics_101,x:-49.7,y:7.5}).wait(1).to({graphics:mask_1_graphics_102,x:-76.1,y:7.5}).wait(1).to({graphics:mask_1_graphics_103,x:-113.1,y:7.5}).wait(1).to({graphics:mask_1_graphics_104,x:-156.3,y:7.5}).wait(1).to({graphics:mask_1_graphics_105,x:-187.9,y:7.5}).wait(1).to({graphics:mask_1_graphics_106,x:-227.3,y:7.5}).wait(1).to({graphics:null,x:0,y:0}).wait(184).to({graphics:mask_1_graphics_291,x:-13.3,y:7.5}).wait(11));

	// coffee
	this.instance_11 = new lib.coffee_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(222.9,17.3,1,1,28.6);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(51).to({_off:false},0).to({x:141.4,y:-14.3},10,cjs.Ease.cubicOut).wait(36).to({regY:-0.1,scaleX:1,scaleY:1,x:141.2,y:-14.4},0).wait(1).to({x:139.1},0).wait(1).to({x:133.6},0).wait(1).to({x:122.9},0).wait(1).to({x:105.1},0).wait(1).to({x:78.7},0).wait(1).to({x:41.7},0).wait(1).to({regX:-0.1,x:-7.5,y:-14.5},0).wait(1).to({x:-70.6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-149.5,y:-14.3},0).to({_off:true},1).wait(195));

	// coffee
	this.instance_12 = new lib.coffee_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(4,87.5);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(97).to({x:3.7},0).wait(1).to({x:1.7},0).wait(1).to({x:-3.8},0).wait(1).to({x:-14.6},0).wait(1).to({x:-32.3},0).wait(1).to({x:-58.8},0).wait(1).to({x:-95.7},0).wait(1).to({x:-144.9},0).wait(1).to({x:-208},0).wait(1).to({x:-286.8},0).to({_off:true},1).wait(184).to({_off:false,x:4,alpha:0},0).to({alpha:1},10).wait(1));

	// accent
	this.instance_13 = new lib.accent_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-1,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(96).to({x:-291.8},10,cjs.Ease.cubicIn).to({_off:true},1).wait(184).to({_off:false,x:-1,alpha:0},0).to({alpha:1},10).wait(1));

	// t1
	this.instance_14 = new lib.t1_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,-147);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(216).to({alpha:0},10).to({_off:true},1).wait(64).to({_off:false},0).to({alpha:1},10).wait(1));

	// bg
	this.instance_15 = new lib.bgImg_1();
	this.instance_15.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(302));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.8,-300,313.8,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126,299,356,602);
// library properties:
lib.properties = {
	id: '19F6AB96D88D4168A980E2AD6C93ED24',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/accent.png", id:"accent"},
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/coffee.png", id:"coffee"},
		{src:"images/cup1.png", id:"cup1"},
		{src:"images/_img.png", id:"_img"},
		{src:"images/steam.png", id:"steam"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"},
		{src:"images/t3.png", id:"t3"},
		{src:"images/t4.png", id:"t4"},
		{src:"images/t5.png", id:"t5"}
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
an.compositions['19F6AB96D88D4168A980E2AD6C93ED24'] = {
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