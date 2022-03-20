(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg4 = function() {
	this.initialize(img.bgImg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,77);


(lib.hand2_1 = function() {
	this.initialize(img.hand2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,73);


(lib.hand2_2 = function() {
	this.initialize(img.hand2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,67);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,365);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,336);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,67);


(lib.snow1 = function() {
	this.initialize(img.snow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,623,725);// helper functions:

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


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-131.5,-14.7,263.1,29.4), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-143.3,-5.7,286.8,11.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBA5QgUgVAAgiQAAglAZgWQAWgVAkAAQAXAAAPAHIgHAcQgOgGgPAAQgVAAgOAMQgOAOAAAXQAAAXANAOQAOANAWAAQAPAAAOgFIAFAbQgOAHgZAAQgmAAgWgWgApUBMIADgbIALABQAPAAAGgOQABgDgCgEIgzhoIAnAAIAhBSIAAAAIAZhSIAkAAIgcBKQgRAsgNAQQgQAUgZAAQgJAAgIgDgAvCAzQALgCAGgGQAMgMAAgnIAAhDIBmAAIAACXIgiAAIAAh7IgjAAIAAAkQAAAggFATQgHAWgQAJQgOAIgQAAgAwwA5QgUgVAAgiQAAglAYgWQAXgVAkAAQAXAAAOAHIgHAcQgOgGgPAAQgVAAgNAMQgOAOAAAXQAAAXANAOQANANAXAAQAOAAAOgFIAFAbQgNAHgaAAQgmAAgVgWgAmkBMIAAiVQASgDAaAAQAfAAAOAIQATALAAATQAAAXgaAKIAAAAQAOAEAIAJQAJAKAAAOQAAATgQANQgSAOgqAAQgWAAgPgCgAmCA0IANAAQAeAAAAgWQAAgVgfAAIgMAAgAmCgyIAAAjIALAAQAcAAAAgSQAAgSgYAAgASSBMIgLgnIgsAAIgLAnIgkAAIAviXIAtAAIAvCXgARgALIAiAAIgKgfIgIgdIAAAAgAPqBMIAAh6IgpAAIAAgdIB1AAIAAAdIgqAAIAAB6gAOTBMQgEgIgIgZQgEgPgGgHQgIgIgNAAIgGAAIAAA/IgiAAIAAiXIAiAAIAAA/IADAAIAqg/IAqAAIg1BEQAYAGAKAdQAMAkAGAMgAMGBMIgLgnIgsAAIgLAnIgkAAIAviXIAtAAIAvCXgALUALIAiAAIgKgfIgIgdIAAAAgAI2BMIAAiVQAWgDAYAAQAgAAAPAMQAQANAAAWQAAAXgOAMQgQARghAAIgMgBIAAA2gAJYgxIAAAtIAMABQANAAAIgGQAIgHAAgMQAAgKgHgGQgHgGgNAAQgKAAgEABgAH8BMIgLgnIgsAAIgLAnIgkAAIAviXIAtAAIAwCXgAHKALIAiAAIgRg8IgBAAgAFUBMIAAh6IgpAAIAAgdIB1AAIAAAdIgpAAIAAB6gAEMBMIgMgnIgsAAIgKAnIgkAAIAuiXIAuAAIAvCXgADZALIAiAAIgJgfIgIgdgAB5BMIgMghQgFgPgFgHQgIgIgNAAIgGAAIAAA/IgjAAIAAiXIAjAAIAAA/IADAAIAqg/IApAAIg1BEQAYAGALAdQANAlAFALgAjBBMIgMgnIgsAAIgLAnIgjAAIAuiXIAtAAIAwCXgAj0ALIAiAAIgRg8IgBAAgArCBMIAAgtQAAgmACgZIAAAAQgKAZgQAcIgfA3IgoAAIAAiXIAgAAIAAAtQAAApgCAbIABAAQAMgbAPgaIAhg8IAjAAIAACXgAy2BMIAAiXIBeAAIAAAcIg8AAIAAAgIA4AAIAAAbIg4AAIAAAkIA/AAIAAAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-120.7,-7.8,241.5,15.8), null);


(lib.snowMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.snow1();
	this.instance.parent = this;
	this.instance.setTransform(311.5,362.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.snow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-311.5,-362.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.snowMc, new cjs.Rectangle(-311.5,-362.5,623,725), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-120,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-120,-34,239,67), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.008,1],0,0,0,0,0,102.7).s().p("ArKLKQknkoAAmiQAAmiEnkoQEoknGiAAQGiAAEoEnQEoEoAAGiQAAGikoEoQkoEomiAAQmiAAkokog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-101,-101,202,202), null);


(lib.img2Mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-68,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2Mc, new cjs.Rectangle(-68,-168,136,336), null);


(lib.img1Mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-160,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1Mc, new cjs.Rectangle(-160,-183,311,365), null);


(lib.hand2_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2_2();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand2_2_1, new cjs.Rectangle(-28.5,-33.5,57,67), null);


(lib.hand2_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2_1();
	this.instance.parent = this;
	this.instance.setTransform(-39,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand2_1_1, new cjs.Rectangle(-39,-36.5,78,73), null);


(lib.hand1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand1();
	this.instance.parent = this;
	this.instance.setTransform(-30,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand1_1, new cjs.Rectangle(-30,-39,59,77), null);


(lib.bgImg4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg4_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B1302").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.TVLight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAKZPIhAiCICk3IQ3gkvAAgBQnlBMAAgBIBz2HIceBSIceBTMgCMAwqQAAgB7CgYg");
	mask.setTransform(-9.5,152.4);

	// light
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-79,204,1.14,1.14);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).wait(4).to({alpha:0.699},3).wait(6).to({alpha:0},7).wait(3).to({alpha:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.1,88.9,230.2,227.6);


(lib.snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowMc();
	this.instance.parent = this;
	this.instance.setTransform(0,-626.1);

	this.instance_1 = new lib.snowMc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(-311.5,-988.6,623,1339.2), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.img2Mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-30},5).wait(1).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-168,136,336);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.img1Mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-30},5).wait(1).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-183,311,365);


(lib.bgImg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAKZPIhZiCIDC3IQ6yk5AAgBQkYBWAAgBIBz2HIceBTIceBSMgCMAwqQAAgB7CgYg");
	mask.setTransform(4,218.4);

	// light
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-65,270,1.14,1.14);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).wait(4).to({alpha:0.699},3).wait(6).to({alpha:0},7).wait(3).to({alpha:1},11).wait(1));

	// Слой 1
	this.instance_1 = new lib.bgImg3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.1,-300,330.1,682.5);


(lib.snowMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.parent = this;
	this.instance.setTransform(0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:627.2},359).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.5,-976.6,623,1339.2);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAKZPIhKiCICz3IQ6yk5AAgBQkYBWAAgBIBz2HIceBTIceBSMgCMAwqQAAgB7CgYg");
	mask.setTransform(4.5,218.4);

	// light
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-65,270,1.14,1.14);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).wait(4).to({alpha:0.699},3).wait(6).to({alpha:0},7).wait(3).to({alpha:1},11).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlbPwIAAAAIAAAAIAAAAgAkUEmIBFrLQACABFvACQACABgBAOQgCASgGARQghBZgQAkQgNAdgDAmQgDAqAMAVIAUAiQAIAMAFACQADABAJAaQAJAcANALQAWAXAMAKQAVARAUAAIAjAAIACAJQACAKAEAIQAIARAAAEQACALgNgBQgPgBgLANQgKAMgBATQgBAKADAWQACAPgDAEQgFAFgKACIgZADQgeAFgPAEQgfAIgPAMQgbAVgUAkQgfA1gFBFQgDAogOB/QgLBgACAXIgBBMQgBAyAKAcQAIAXAKAiQAKAcAVAVQAZAZASgJQARgHAKgiQAUg/AHgsQADgTAJgrQAKgqABABQAaBBACABQABABABAOIADAOQABABgCBEIgCBFQABAAgGAPIgFAQQABAAgDAFIgDAFQodABgDABQABgDBGrHgAtHPvQg12DABABIAvgDIAwgCQABABG1gFIiKWLQlWgBgBABgAtHPvIAAAAIAAAAgALmPnIgRAAIgJgnQgLg3AAgYIgBg0QgBgiACgKQADgKAAgQIABgNQABABAIgMQAaA3ALARIAMARQADAFAAAMQAAAKgHBMIgFBJIgCAAIgOgBgALVPnIAAAAIAAAAgAMrFqQADACgUgsQgTgtgKgMQgNgRgIgGQgLgIgPgCQgPgBgZAAQgXABAAABQADAFgJgMQgHgIACgGQAHgUgDgHQgDgGgRgQQAFgJABABQAAABAHgPIANgfQAUg2ABACIAEgDIADgDQAAABANgLQAPgMAKgLQAWgZAKgTQATgkgLgeQgLgegQgJQgKgGgNACQgLACADgGQACADAKgSQALgUACgaQAIhqgPgdQgMgYgxg3IgLgNIADgFQDrgFABABQABAAgFCKIgECKQABABgeELIgeENIgJgOgAKImsIAAAAIAAAAgAs+oWIAAAAIAAAAIAAAAgAsqr8IASjnQABABD1gCQD1gCABABQABABgXDjQgYDiABABQABABjzADQjvADgEABQACgEASjigAjFohIAAAAIAAAAIAAAAgAitsDIAWjiQABABH8gGQH8gGABABQABABADA8IAEBkQABAZAIBFQAGA+AAATQAABoADABQABABlmAKIgBgLIgFgVIgHgRQgJgUgOgMQgSgPgLgFQgQgGgrgFQgxgGgVgBQgaAAgkAGQhIAMgaAfQgYAeAGAXQACAJgEAIIgDAHQlgACgEABQABgCAXjgg");
	mask_1.setTransform(-70.1,-68.9);

	// Слой 4
	this.s1 = new lib.snowMovie();
	this.s1.name = "s1";
	this.s1.parent = this;
	this.s1.setTransform(0.5,-501.6,2,2,0,0,180);

	this.s1_1 = new lib.snowMovie();
	this.s1_1.name = "s1_1";
	this.s1_1.parent = this;
	this.s1_1.setTransform(58.5,-139.1,1,1,0,0,180);

	var maskedShapeInstanceList = [this.s1,this.s1_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1_1},{t:this.s1}]}).wait(40));

	// Слой 1
	this.instance_1 = new lib.bgImg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.1,-300,330.1,682.5);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-266,0.753,0.753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({scaleX:1,scaleY:1,y:-254},10).wait(46).to({scaleX:0.75,scaleY:0.75,y:-266},10).wait(85).to({scaleX:1,scaleY:1,y:-254},10).wait(46).to({scaleX:0.75,scaleY:0.75,y:-266},10).wait(82));

	// t3
	this.instance_1 = new lib.t3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-219.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},10).wait(51).to({alpha:0},10).to({_off:true},1).wait(10));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-224.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(142).to({_off:false},0).to({alpha:1},9).wait(66).to({alpha:0},10).to({_off:true},1).wait(147));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-224.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({alpha:0},10).to({_off:true},1).wait(287).to({_off:false},0).to({alpha:1},10).wait(1));

	// bgImg4
	this.instance_4 = new lib.bgImg4_1();
	this.instance_4.parent = this;
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(283).to({_off:false},0).to({alpha:1},10).wait(61).to({alpha:0},10).to({_off:true},1).wait(10));

	// TVLight
	this.instance_5 = new lib.TVLight();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66).to({alpha:0},10).to({_off:true},1).wait(55).to({_off:false},0).to({alpha:1},10).wait(75).to({alpha:0},10).to({_off:true},1).wait(126).to({_off:false,alpha:1},0).wait(21));

	// img2
	this.instance_6 = new lib.img2_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(245,271.5,1.3,1.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.img2Mc("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(74,132);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(161).to({_off:false},0).to({scaleX:1,scaleY:1,x:74,y:132},25).to({_off:true},1).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(187).to({_off:false},0).wait(30).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(147));

	// bgImg1
	this.instance_8 = new lib.bgImg1_1();
	this.instance_8.parent = this;
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(132).to({_off:false},0).to({alpha:1},10).wait(75).to({alpha:0},10).to({_off:true},1).wait(147));

	// hand2_1
	this.instance_9 = new lib.hand2_1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-51.3,3.7,1,1,19.7,0,0,28.7,28);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(217).to({_off:false},0).wait(30).to({regX:28.8,regY:28.1,rotation:0,x:-71.7,y:-9.7},10).to({_off:true},36).wait(82));

	// hand2_2
	this.instance_10 = new lib.hand2_2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-24.6,-68.8,1,1,-20.7,0,0,26.6,-28);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(217).to({_off:false},0).wait(30).to({rotation:0},10).to({_off:true},36).wait(82));

	// bgImg3
	this.instance_11 = new lib.bgImg3_1();
	this.instance_11.parent = this;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(217).to({_off:false},0).to({_off:true},76).wait(82));

	// hand1
	this.instance_12 = new lib.hand1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-63.6,29.8,1,1,37.7,0,0,-23.3,35.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(66).to({_off:false},0).to({alpha:1},10).wait(20).to({regX:-23.2,regY:35.5,rotation:0,x:-61.2,y:29.5},10).to({_off:true},36).wait(233));

	// bgImg2
	this.instance_13 = new lib.bgImg2_1();
	this.instance_13.parent = this;
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(66).to({_off:false},0).to({alpha:1},10).to({_off:true},66).wait(233));

	// img1
	this.instance_14 = new lib.img1_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(358,281.5,1.3,1.3);
	this.instance_14._off = true;

	this.instance_15 = new lib.img1Mc("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,117.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},11).to({state:[{t:this.instance_14}]},25).to({state:[{t:this.instance_15}]},1).to({state:[]},40).wait(298));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:117.5},25).to({_off:true},1).wait(338));

	// bgImg1
	this.instance_16 = new lib.bgImg1_1();
	this.instance_16.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},77).wait(277).to({_off:false},0).wait(21));

	// bg
	this.instance_17 = new lib.bg();
	this.instance_17.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(375));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.4,-300,376,619.1);


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
p.nominalBounds = new cjs.Rectangle(102.6,299,376,620.1);
// library properties:
lib.properties = {
	id: '36CE7DFD6E7F450E8465FED9A1B5660C',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/bgImg4.jpg", id:"bgImg4"},
		{src:"images/hand1.png", id:"hand1"},
		{src:"images/hand2_1.png", id:"hand2_1"},
		{src:"images/hand2_2.png", id:"hand2_2"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/snow1.png", id:"snow1"}
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
an.compositions['36CE7DFD6E7F450E8465FED9A1B5660C'] = {
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