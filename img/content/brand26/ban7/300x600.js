(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,60);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,436);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,510,510);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,44);// helper functions:

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


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANJB7QgXgKgZgWIAmgvQAeAeAqAAQAUABAKgIQAKgHAAgLQAAgYgqAAIgaAAIAAg0IAaAAQATAAAJgGQAJgHAAgKQAAgLgJgFQgJgHgPAAQgRAAgSAIQgUAGgMAMIgjgrQAsgsBAAAQArAAAbAUQAbATAAAfQAAApgmATQAtANAAAtQAAAkgcAWQgcAXgvAAQgpAAgegMgAqWBgQgognAAg5QAAg4AogmQApgoA7AAQA8AAAoAoQAoAmAAA4QAAA5gpAnQgoAng8AAQg7AAgogngApigwQgSAUAAAcQAAAdATAUQASAVAdAAQAdAAATgUQASgVAAgdQAAgcgTgTQgSgWgeAAQgcAAgTAVgAIQCCIAAjDIhOAAIAAg/IDkAAIAAA/IhOAAIAADDgAFbCCIAAhiIhcAAIAABiIhJAAIAAkCIBJAAIAABhIBcAAIAAhhIBHAAIAAECgAg/CCIAAkCIDPAAIAAA9IiKAAIAAAnIB9AAIAAA3Ih9AAIAAAqICMAAIAAA9gAi0CCIAAiUIhDBkIgCAAIhBhkIAACUIhHAAIAAkCIBMAAIA+BkIA+hkIBLAAIAAECgAsqCCIAAiUIhDBkIgCAAIhBhkIAACUIhGAAIAAkCIBMAAIA9BkIA+hkIBMAAIAAECg");
	this.shape.setTransform(0,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHLCeIAAg0IiKAAIgFA0IhAAAIAAhzIAWAAQAPglAFglQAHgsgBhHIAAgGIDGAAIAADDIAeAAIgJBzgAFyhWQAAAogHAhQgEAagJAeIBMAAIAAiEIg4AAgArqBjQgYgKgXgVIAlgwQAfAfAqAAQATAAAKgHQAKgHAAgLQAAgLgKgGQgKgHgVAAIgbAAIAAg0IAaAAQASAAALgGQAIgHAAgKQAAgLgIgGQgKgGgPAAQgQAAgUAHQgSAHgMALIgkgqQAtgsBAAAQAqAAAcAUQAbATAAAfQAAApgoASQAuAPAAAsQAAAjgbAXQgdAXguAAQgqAAgegNgALTBqIAAiQIhkCQIhDAAIAAkCIBHAAIAACSIBkiSIBDAAIAAECgACZBqIAAhOIggAAIgzBOIhTAAIA9haQgagKgNgTQgOgVAAgdQAAgsAfgXQAdgWAvAAIB7AAIAAECgABNhSQgLAJAAAPQAAAPALAIQAKAJATAAIAvAAIAAhBIgvAAQgTAAgKAJgAj7BqIAAkCIBvAAQAyAAAdAZQAdAYAAArQABAsggAZQgeAXgyAAIgkAAIAABKgAizgXIAjAAQATAAAKgJQAMgKAAgPQAAgRgMgIQgKgKgUAAIgiAAgAlhBqIgSguIhlAAIgTAuIhLAAIBukEIBGAAIBuEEgAnCAEIA5AAIgdhIg");
	this.shape_1.setTransform(0,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-119.9,-35.7,239.8,71.5), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJZBmIAAggIh2AAIgCAgIgIAAIAAgpIAPAAQAVgfAAhDIAAgdIBUAAIAAB/IATAAIgCApgAIHgdQAAAcgEAYQgGAYgJAOIBTAAIAAh1IhAAAgAKLA0QgTgVAAgcQAAgdATgUQAUgWAeABQAfgBAUAWQASAUAAAdQAAAcgTAUQgUAWgeAAQgeAAgUgVgAKUgoQgRARAAAaQAAAZARASQAQARAZABQAZgBARgRQARgRAAgaQAAgZgRgSQgRgSgZAAQgZAAgQASgAATA0QgTgUAAgdQAAgdATgVQATgVAeABQARgBANAHQAKAEANAMIgHAHQgVgVgZABQgZAAgRASQgQARAAAaQAAAaARARQAQARAZABQAPgBALgFQAKgFALgLIAHAHQgMAMgMAGQgNAGgRAAQgdAAgUgVgAxLAzIAGgIQAXAVAbAAQAQgBAJgHQAKgJAAgNQABgNgLgHQgLgIgTAAIgPAAIAAgIIAPAAQARAAAKgIQAKgHAAgOQAAgMgKgHQgJgJgPABQgXAAgTAPIgGgHQAVgRAbAAQAUAAANAKQAMAKgBAQQAAAYgaAIQAeAIAAAZQAAARgNALQgNALgVAAQgeAAgZgWgAtCBEIADgIQAFACAJAAQAeAAAAhlIAAgbIBTAAIAACIIgKAAIAAh+IhAAAIAAARQAABDgMAZQgJATgSAAQgIAAgJgEgARBBGIgRgmIhRAAIgRAmIgMAAIBBiIIAKAAIA/CIgAQrAXIgkhOIgkBOIBIAAgAObBGIAAh1Ig2BOIgBAAIg2hOIAAB1IgJAAIAAiIIAJAAIA3BRIA3hRIAKAAIAACIgAFeBGIAAiIIA5AAQATAAANAKQAMAJAAAQQAAAXgXAJQAeAHAAAZQAAARgNAKQgNAKgWAAgAFpA9IAxAAQARABALgIQAKgIAAgNQAAgNgLgGQgLgIgTAAIguAAgAFpgCIAtAAQAPAAAKgIQAKgHAAgOQAAgLgJgHQgKgHgPAAIguAAgADwBGIAAg2IguAAIgqA2IgNAAIAsg4QgSgCgKgKQgLgKAAgRQAAgSAOgLQANgMAWAAIA5AAIAACIgAClgvQgKAIAAAPQAAAOALAJQALAHARAAIAuAAIAAg+IguAAQgTAAgKAJgAgsBGIAAh4IhZB4IgKAAIAAiIIAKAAIAAB6IBZh6IAKAAIAACIgAi3BGIgSgmIhRAAIgRAmIgLAAIBAiIIAKAAIBACIgAjNAXIgkhOIgkBOIBIAAgAoBBGIAAiIIAKAAIAAB/IBIAAIAAh/IALAAIAAB/IBIAAIAAh/IAKAAIAACIgAo0BGIAAh4IhYB4IgLAAIAAiIIALAAIAAB6IBYh6IALAAIAACIgAtWBGIgRgmIhRAAIgRAmIgLAAIBAiIIAKAAIBACIgAtsAXIgkhOIgkBOIBIAAgAhqhTQgHgGgCgKIAIgCQAEAOAPABQAOgBAEgOIAIACQgCAKgGAGQgIAGgKABQgKgBgIgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-110,-10.1,220,20.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjGdQgLgBgGgDIAFg7QAGACAMAAQAUAAAJgaQANgoAAhxIAAgnIDVAAIAAEVIhMAAIAAjRIhBAAIAAAKQAAB3gZAuQgWAngsAAQgOAAgPgDgAUcGbIAAhCIBOAAIAABCgASfGbIAAibIhsCbIhIAAIAAkVIBMAAIAACdIBsidIBHAAIAAEVgANuGbIAAieIhHBsIgCAAIhGhrIAACdIhLAAIAAkVIBRAAIBCBsIBChsIBSAAIAAEVgAInGbIgVgxIhqAAIgUAxIhRAAIB2kXIBKAAIB2EXgAG+EuIA+AAIgehPgAhMGbIAAibIhsCbIhHAAIAAkVIBMAAIAACdIBridIBIAAIAAEVgAoaGbIAAkVICOAAQAzAAAZAZQARATABAbQgBArgrATQAbAIANAQQAQARgBAcQABAjgcAUQgcAUgxAAgAnPFeIA7AAQARAAAKgHQAKgGAAgOQAAgLgJgGQgKgHgTAAIg6AAgAnPD1IAwAAQAkAAAAgZQAAgLgJgGQgIgGgSgBIgxAAgAqIGbIgUgxIhrAAIgUAxIhQAAIB2kXIBKAAIB2EXgArwEuIA+AAIgfhPgAxEGbIAAkVIB3AAQA2AAAeAaQAfAbAAAtQABAwgjAbQggAZg1AAIgmAAIAABPgAv3ERIAlAAQAUgBAMgJQAMgLAAgQQAAgTgMgIQgMgKgVAAIgkAAgAzCGbIAAjRIheAAIAADRIhNAAIAAkVID5AAIAAEVgAUwFBIgYiZIAAgiIBWAAIAAAiIgXCZgAB5hjQgqgqAAg8QAAg8AqgqQArgqBBAAQA/AAArAqQAqApAAA9QAAA8gqAqQgsAqg/AAQhAAAgrgqgACxj+QgUAVABAgQAAAfATAWQAVAWAfAAQAeAAAVgWQATgVAAggQAAgfgUgVQgVgXgeABQgfAAgUAVgAxFhGQgagKgagXIAog0QAhAhAtAAQAUAAAMgIQAKgHAAgMQABgMgLgGQgMgGgWgBIgdAAIAAg4IAcAAQAUAAAKgIQAJgGAAgMQAAgKgJgIQgKgGgQAAQgRAAgVAHQgUAIgNAMIgmgtQAwgvBEAAQAuAAAdAVQAdAVAAAhQAAAsgqASQAXAIAMAQQAOAQAAAYQAAAngeAXQgeAYgyAAQgsABgfgNgAQtg/IAAicIhrCcIhIAAIAAkUIBMAAIAACbIBsibIBIAAIAAEUgAL8g/IAAieIhGBsIgCAAIhGhrIAACdIhMAAIAAkUIBSAAIBCBrIBChrIBRAAIAAEUgAGig/IAAkUIBOAAIAAEUgAjCg/IAAkUICPAAQAyAAAYAYQARASAAAcQAAArgpASQAaAKANAOQAPARAAAcQAAAkgcAUQgaAUgyAAgAh3h8IA8AAQARAAAKgHQAKgGAAgNQAAgMgKgGQgKgIgSABIg7AAgAh3jlIAwAAQAlAAAAgZQAAgLgJgHQgJgGgRAAIgyAAgAmEg/IAAjSIhTAAIAAhCIDzAAIAABCIhSAAIAADSgAqig/IgUgxIhrAAIgUAxIhRAAIB2kXIBLAAIB2EXgAsKisIA+AAIgfhOgAHUlmIAAg5IBCAAIAAA5gAF+lmIAAg5IBBAAIAAA5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-140,-41.5,280,83.1), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVGpIAAgfQhDAAgmgkQgkghAAg3QAAg2AlghQAmgjBCAAIAAgYIBMAAIAAAYQBBAAAmAjQAlAhAAA2QAAA3glAhQgmAkhBAAIAAAfgAgJFGQAcAAAQgOQARgPAAgaQAAgagRgOQgQgOgcAAgAiCDnQgSAOAAAaQAAAaASAPQARAOAcAAIAAhtQgcAAgRAOgAFIF6QgqgpAAg/QAAg9AqgpQApgpA/AAQBKAAAqA6Ig4ArQgNgPgOgIQgPgIgTAAQgcgBgUAWQgSAVAAAfQAAAgASAVQAUAWAcgBQAUAAAQgJQANgIANgQIA7ApQgWAdgbAQQgfARgrAAQg9AAgogogAn8F4QgrgpAAg9QABg8AqgpQArgqBBAAQA/AAArApQAqAqAAA8QAAA8gqAqQgsAqg/AAQhAAAgrgqgAnFDdQgSAXgBAeQAAAfAUAWQAVAWAfAAQAeAAAVgWQATgVAAggQgBgfgTgVQgVgWgeAAQgggBgUAWgACnGdIAAkVIBOAAIAAEVgADwhgQgpgpAAg/QAAg8ApgqQArgqA+AAQBLABApA6Ig4AsQgZghgkAAQgcAAgUAWQgSAVAAAfQAAAgASAVQAUAVAcAAQAVAAAPgJQANgIAOgQIA5ApQgWAegZAPQggARgsAAQg7AAgqgogAqchhQgqgqgBg9QAAg7ArgqQArgqBAgBQBAAAArAqQArAqAAA8QAAA9grApQgsAqhAAAQhAABgqgqgAplj9QgSAWgBAfQAAAfAUAWQAUAWAfABQAfgBAVgWQASgVABggQAAgfgUgVQgUgXggABQgeAAgVAVgAuyhgQgpgpAAg/QAAg8ApgqQAqgqA/AAQAoAAAeARQAaAPAUAbIg4AsQgaghgjAAQgdAAgSAWQgUAVAAAfQAAAgAUAVQASAVAdAAQAUAAAQgJQANgIAOgQIA5ApQgWAegaAPQgfARgrAAQg9AAgpgogAz6hhQgrgqAAg9QABg7ArgqQAqgqBBgBQA/AAArAqQAqAqAAA8QAAA9gqApQgsAqg/AAQhBABgqgqgAzDj9QgSAWAAAfQgBAfAUAWQAUAWAgABQAfgBATgWQAUgVAAggQgBgegTgWQgVgXgeABQggAAgUAVgATZg9IAAicIhrCcIhHAAIAAkVIBLAAIAACcIBsicIBIAAIAAEVgAOqg9IAAicIhsCcIhHAAIAAkVIBLAAIAACcIBricIBIAAIAAEVgAI1g9IAAjSIhTAAIAAhDIDzAAIAABDIhTAAIAADSgABTg9IAAicIhqCcIhIAAIAAkVIBMAAIAACcIBqicIBIAAIAAEVgAl0g9IAAkVIDfAAIAABBIiSAAIAAAhIA2AAQAxgBAeAWQAfAYABAsQAAAqgdAYQgdAYgyAAgAknh+IAzAAQASABAJgIQAJgIAAgOQAAgNgJgHQgJgIgSAAIgzAAgAR6l0QgTgQgFgdIArgHQAJAYATAAQATAAAIgYIArAHQgFAdgTAQQgSAQgcAAQgdAAgSgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-131.7,-42.5,263.5,85), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-76,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-76,-22,152,44), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-255,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-255,-255,510,510), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-218,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-218,-218,436,436), null);


(lib.box_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-126,-28,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(-126,-28,261.3,55.2), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(-72.9,-262.9,0.8,0.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(80).to({alpha:0},10).to({_off:true},1).wait(69));

	// box
	this.instance_1 = new lib.box_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-294,239);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({_off:false},0).to({x:1},9,cjs.Ease.get(1)).wait(40).to({alpha:0},10).wait(1));

	// t3_2
	this.instance_2 = new lib.t3_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,150.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({alpha:1},10).wait(49).to({alpha:0},10).wait(1));

	// t3_1
	this.instance_3 = new lib.t3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,86.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({alpha:1},10).wait(49).to({alpha:0},10).wait(1));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,217.9,0.899,0.899);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).to({_off:true},1).wait(69));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,132.3,0.899,0.899);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},10).wait(80).to({alpha:0},10).to({_off:true},1).wait(69));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av1WyIgGgCQgWgIgJgWQgEgGAAgIIgBgNIAA1aQABgHADgLQAEgLAOgNIPMvOIAfggQAPgNATAAQAVAAAOAPIFVFVIFEFFIFKFKIAJAJQAIAJAEAKQADAOAAASIAAVQIAAAJQgCAegaAOIgHAEIgIACgA0rBrQgYgBgPgQIgmgmIgRgQQgOgOgEgQQgBgEgDgBIAAgXQADgCABgDQAGgeAcgbIVL1MQAJgJAPgFIAIgDIAhAAIACABIACABQARAFANANIC2C1ISWSYQAOAOAJARQAFAMABAKIABACIABADIAAAXIgCAEQgCAPgMAMIgSATIgoAnQgNANgTADQgSADgQgFQgbgIgVgVIzbzbIgEgEIgEgDIgFAFIzdTdQgOAPgQAIQgVAJgTAAIgEAAg");
	mask.setTransform(0,-92.4);

	// img2
	this.instance_6 = new lib.img2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2.5,-92.2,0.571,0.571,0,0,0,0,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,x:-18.5,y:-53.5},119).wait(1));

	// img1
	this.instance_7 = new lib.img1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(3.5,-37.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-0.1,regY:-0.2,scaleX:0.68,scaleY:0.68,x:0.5,y:-93},49).to({_off:true},1).wait(120));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(85.5,299,436,602);
// library properties:
lib.properties = {
	id: 'A61DF201EA9247FDB870FA23DE0ADA58',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/box.png", id:"box"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/logo.png", id:"logo"}
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
an.compositions['A61DF201EA9247FDB870FA23DE0ADA58'] = {
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