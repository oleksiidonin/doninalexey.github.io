(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,484,300);


(lib.guy = function() {
	this.initialize(img.guy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,142);


(lib.logoSmall = function() {
	this.initialize(img.logoSmall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.rocket = function() {
	this.initialize(img.rocket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,203);


(lib.t1Blur = function() {
	this.initialize(img.t1Blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,73);// helper functions:

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


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACUAzIANgCIAGgDIAEgFIACgDIACgDIgZhEIALAAIAUA6QAHgQADgLQAGgOADgRIAMAAIgRA0IgHAOIgGAKQgCAFgEAEQgEAEgHACQgHACgIAAgAEpAcQgGgGABgNIAAgqIAKAAIAAAqQAAAJADAEQAEAEAIAAQAEAAAGgCIAHgFIAAg0IALAAIAABCIgKAAIAAgFQgDADgGACQgDACgIAAQgMAAgGgHgADqAgQgFgDgEgFQgDgFgCgHQgDgIAAgEIADgMQABgHAEgEQADgFAGgDQAGgDAIAAQAHAAAFADQAGADADAFQADADADAIIACAMIgCANQgDAIgDADQgDAFgGADQgFADgHAAQgIAAgGgDgADvgXIgHAGIgDAIIgBAJIABAJIADAJQADAEAEACQADACAGAAQAEAAAEgCIAGgGIAEgJIABgJIgBgJIgEgIIgGgGQgEgDgEAAQgGAAgDADgABJAgQgFgDgEgFQgEgGgBgGQgCgFAAgHQAAgHACgFQABgHAEgEQAEgFAFgDQAHgDAHAAQAHAAAFADQAHADADAFQADADADAIIABAMIgBANQgDAIgDADQgDAFgHADQgFADgHAAQgHAAgHgDgABOgXIgGAGIgDAIIgBAJIABAJIADAJIAGAGQAEACAFAAQAEAAAEgCQADgCADgEIAEgJIABgJIgBgJIgEgIQgDgEgDgCQgEgDgEAAQgFAAgEADgAAZAfQgEgEgBgIIAAgrIgKAAIAAgIIAKAAIAAgTIALAAIAAATIAQAAIAAAIIgQAAIAAAqQAAAFACABQABACADAAQAFAAAEgEIAEAJIgHADIgIABQgGAAgEgEgAhwAaQgJgJAAgRQAAgIACgGQADgHACgEQAFgFAEgCQAHgCAFAAQAHAAAFACQAGADADAEQACADAEAIIABAOIguAAQAAAMAFAHQAGAHAKAAQAGAAAFgCQAEgBAEgEIAEAIIgEADIgFACIgHACIgHABQgOAAgIgJgAhMgIQAAgFgCgDIgEgFIgFgEIgGgBQgFAAgFAEQgGAEgBAKIAiAAIAAAAgAkHAgQgGgDgDgFIgGgMQgBgGgBgGQABgGABgGQADgIADgDQADgFAGgDQAGgDAHAAQAHAAAGADQAGADADAFQAEAEABAHQACAGABAGQgBAHgCAGQgBAGgEAFQgDAFgGADQgGADgHAAQgHAAgGgDgAkDgXQgDACgDAEIgEAIIgBAJIABAJQADAGACADQACAEADACQAEACAFAAQAEAAAEgCQAFgCACgEQADgFAAgEQABgEAAgFQAAgEgBgFQAAgDgDgFQgCgEgFgCQgEgDgEAAQgFAAgEADgAgzAhIAAhCIAKAAIABAHIAHgGQAGgCADAAIAGAAIgBAKIgFAAQgEAAgFACIgHAGIAAAxgAicAhIgPgvIgPAvIgKAAIgThCIALAAIAOAzIAQgzIAGAAIAQAzIAOgzIALAAIgTBCgAlYAhIAAhcIAcAAQAPAAAHAHQAIAIgBANQAAAOgHAHQgJAHgNAAIgSAAIAAAkgAlOgNIASAAQAJAAAEgEQAFgEAAgKQABgJgGgFQgEgFgJAAIgSAAg");
	this.shape.setTransform(-0.3,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-168.1,-87.1,237.5,100.8), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD3AuQgGgCgEgFQgFgEgDgHQgDgHABgJQgBgHADgHQADgIAEgDQAFgFAFgCQAHgDAHAAQAOAAAJAKQAIALAAATIgqAAQABAGAEAEQAEADAGAAQAGAAAEgCIAIgFIAHAQIgFADIgFADIgIACIgKABQgHAAgHgCgAEOAEQAAgEgEgEQgCgDgEAAQgEAAgDADQgCADgCAFIAVAAIAAAAgABZAtQgGgCgFgFQgEgGgCgGQgDgHAAgHQAAgIADgFQACgGAEgGQAFgEAGgDQAHgDAHAAQAIAAAHADQAGADAEAEQAFAGADAGQABAEABAJQgBAIgBAGQgDAHgFAFQgEAFgGACQgGADgJAAQgIAAgGgDgABfAAQgCADgBAJQABAJACAEQADAFAFAAQAGAAADgFQACgGAAgHQAAgIgCgEQgDgFgGAAQgFAAgDAFgAhsAtQgFgCgEgFQgDgFgDgHQgCgFAAgJQAAgIACgFQADgHADgEQAGgGAEgCQAGgDAGAAIAHABIAFABIAAgZIAYAAIAABdIgUAAIgBgGIgGAFQgFACgFAAQgGAAgGgDgAhfgDIgDADQgCABgBAEIgBAHQAAAJADAEQADAFAGAAIAEgBIADgCIAAgeIgDgBIgDgBQgEAAgCACgAi3AtQgGgCgFgFQgDgEgDgIQgCgHgBgHQABgIACgFQADgIADgEQAFgEAGgDQAHgDAIAAQAHAAAIADQAGADAEAEQAEAFADAHQACAEAAAJQAAAIgCAGQgEAIgDAEQgEAFgGACQgHADgIAAQgIAAgHgDgAixAAQgCAEAAAIQAAAIACAFQADAFAGAAQAGAAACgFQADgFAAgIQAAgIgDgEQgCgFgGAAQgGAAgDAFgAgjAuQgEAAgDgEIgFgGQgBgEgBgFQAAgFACgEIAGgGIAHgEIAIgDIAPgBIAAgDQAAgGgJAAIgIABIgHAEIgHgPIAEgDIAGgCIAQgDQANAAAGAHQAIAHAAAMIAAAsIgTAAIgBgGQgDADgFACQgEACgGAAIgIgCgAgUARQgEABgBACQgBACAAADQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQADABACAAIAFAAIAEgCIAAgNgADAAvIAAgpQgBgFgCgDQgBgCgFAAIgGABIgEADIAAAvIgYAAIAAhEIAVAAIABAGQADgDAGgCQAEgDAHAAQALAAAGAHQAHAHAAAMIAAAsgAAcAvIAAgzIgJAAIAAgRIAJAAIAAgCQAAgMAHgGQAGgGAMAAIALABIAIACIgDAQIgEgCIgGAAQgIAAAAAHIAAACIAOAAIAAARIgOAAIAAAzgAj/AvIgkhdIAbAAIAUA7IATg7IAZAAIgiBdg");
	this.shape.setTransform(5.6,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-178,-55.7,237.5,68), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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gGADIgHABIgHgBgACOgjQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABgBQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABABAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAmQgjQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAgBQABABABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBg");
	this.shape.setTransform(0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-188.7,-6.8,252.5,68.3), null);


(lib.t1Blur_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t1Blur();
	this.instance.parent = this;
	this.instance.setTransform(-150,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1Blur_1, new cjs.Rectangle(-150,-37,300,73), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E11021").s().p("AAVCRIAAgvIhtAAIAAAvIg9AAIAAhmIAUAAQAMgVAIgUQAIgYAEgVQAFgfAAgTIACgzICaAAIAAC7IATAAIAABmgAghg4IgQBEQgFAPgJARIBCAAIAAiGIgjAAgAFFBiIAAjyIBZAAQAnAAAVAPQASAJAHASQAIAQAAAWQAAAcgKARQgJASgWAKIgXAHQgJACgRAAIgfAAIAABQgAGCgiIAZAAQAMAAALgFQAGgEADgGIACgOIgCgOIgJgJIgJgDIgNgBIgaAAgAB2BiIAAjyICkAAIAAA5IhlAAIAAAnIBTAAIAAAyIhTAAIAAAnIBtAAIAAA5gAjwBiIAAjyIA+AAIAADygAldBiIAAi8IgrAAIgGBoIgGAbIgJAXQgNATgQAHQgUAIgUAAIgYAAIAAg1IANAAQAXAAAHgRIAGgQIACgVIACiHICmAAIAADyg");
	this.shape.setTransform(0,-21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADPCUIAAgwIiBAAIAAAwIgsAAIAAhdIASAAQATgbAKgnQAKggADgmIABg9ICMAAIAADFIASAAIAABdgACIg1QgDAXgEATQgFATgIASIgNAeIBUAAIAAiaIgvAAQAAAWgEAXgAMdBhQgSgHgRgRQgNgPgHgYQgJgYAAgeQABgiAJgXQAJgYAPgQQAMgOAUgKQAWgGASAAQATAAAIADIAWAJQANAHAEAGIAOARIgiAcIgGgHIgJgKIgNgHQgIgEgKAAQgHAAgQAFQgLAHgHAJQgIAJgEARQgFAOAAAYQAAAoARAUQASAWAbAAQAXgBANgHQAJgEAOgKIANApIgHAGIgQAHIgWAIIgfADQgYAAgSgIgAIlBdQgTgJgPgUQgMgSgIgWQgGgYAAgWQAAgTAGgaQAIgXAMgRQALgQAXgNQARgLAdAAQAeAAARALQAUAKAOATQAOARAGAXQAGAUAAAZQAAAbgGATQgGAWgOASQgPAVgTAIQgTAMgcAAQgbAAgTgMgAI6hiQgKAGgIANQgIAMgFAOQgDAQAAAPQAAARADAOQAFANAIAOQAIAMAKAHQANAGAMABQANgBANgGQANgIAGgLQAHgOAEgNQAEgOAAgRQAAgPgEgQQgEgOgHgMQgHgLgMgIQgMgHgOAAQgOAAgLAHgAurBgQgUgIgOgQQgOgUgHgTQgJgYAAgdQAAgiAJgXQAJgYAOgQQANgOATgKQAVgGARAAQAgAAAVAMQAVANAJARIggAcIgHgJIgLgJIgMgGQgIgEgLAAQgIAAgNAFQgMAHgFAJIgNAaQgEATAAATQAAATAEAQQAIASAFAGQAIALALAGQARAGAIAAIAYgCIAKgDIAAgsIglAAIAAgpIBSAAIAAB1IgKAEQgFACgLADIgYAEIgfADQgZAAgTgJgAyNBhQgVgIgNgNIATgmQARANALAFQAOAHASAAIARgBIAMgHIAKgNQAEgFAAgMQAAgVgPgKQgMgIgZgBIgUABIAAgdIAUgdIAcgdIhdAAIAAgpICYAAIAAAnIghAZIgaAdQAOAAAMAEQAOAEAIAJQAKAIAGAPQAGAKAAAVQgBAYgGANQgKASgJAHQgNALgPAFQgPAFgTAAQgaAAgUgIgASCBkIAAjyIAuAAIAADygAPxBkIAAjGIhFAAIAAgsIC4AAIAAAsIhEAAIAADGgAGnBkIhChlIgUAAIAABlIgvAAIAAjyIAvAAIAABhIANAAQAJAAAIgLQAMgSAEgQQAKgcAMgMQALgMAXAAIAcAAIAAAsIgQAAIgJAAIgIAGIgGAJIgDANIgOAdQgHANgFAEIBPB8gAgpBkIAAiRIhbBuIAAAjIgwAAIAAjyIAwAAIAACQIBbhtIAAgjIAuAAIAADygAmDBkIAAjyIBTAAQASAAANAEQAPAEAJAJQALAIAEANQAGALgBAQQAAAPgGANQgJAPgMAGQASAHAMAPQALAOAAAXQAAAWgLAPQgJAQgWAKIgiAGgAlTA5IAygBIANgCQAIgHADgFIACgNQABgIgEgIQgEgHgKgFQgFgCgHAAIgvgCgAlTgrIAmAAIAKgDQAHgEAEgIQAFgFAAgIQAAgKgGgHQgGgHgKgDIgEgCIgGAAIgIgBIgYAAgAq/BkIAAjyIAwAAIAADGIA/AAIAAjGIAuAAIAADGIA/AAIAAjGIAvAAIAADyg");
	this.shape_1.setTransform(0,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-120,-36.3,240,72.7), null);


(lib.rocket_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rocket();
	this.instance.parent = this;
	this.instance.setTransform(-120,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket_1, new cjs.Rectangle(-120,-101.5,240,203), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logoSmall();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-20,-20,40,40), null);


(lib.guyMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.guy();
	this.instance.parent = this;
	this.instance.setTransform(-131,-56,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.guyMc, new cjs.Rectangle(-131,-56,262,112.8), null);


(lib.bgImgMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(180,-92);

	this.instance_1 = new lib.bgImg1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-244,-149);

	this.instance_2 = new lib.bgImg1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-668,-206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImgMc, new cjs.Rectangle(-668,-206,1332,414), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-120,-200,240,400), null);


(lib.guy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.guyMc();
	this.instance.parent = this;
	this.instance.setTransform(74.5,51,1,1,0,0,0,74.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0.4,x:0,y:0.4},0).wait(1).to({rotation:-0.1,x:-0.1,y:0.6},0).wait(1).to({rotation:-0.3,x:-0.2,y:0.8},0).wait(1).to({rotation:-0.5,x:-0.4,y:1},0).wait(1).to({rotation:-0.8,x:-0.6,y:1.4},0).wait(1).to({rotation:-1.1,x:-0.9,y:1.8},0).wait(1).to({rotation:-1.4,x:-1.2,y:2.2},0).wait(1).to({rotation:-1.7,x:-1.5,y:2.7},0).wait(1).to({rotation:-2.1,x:-1.7,y:3.1},0).wait(1).to({rotation:-2.3,x:-2,y:3.5},0).wait(1).to({rotation:-2.6,x:-2.2,y:3.8},0).wait(1).to({rotation:-2.8,x:-2.3,y:4},0).wait(1).to({rotation:-2.9,x:-2.4,y:4.2},0).wait(1).to({rotation:-3,x:-2.5,y:4.3},0).wait(1).to({regX:74.5,regY:51,x:74.5,y:51.1},0).wait(1).to({regX:0,regY:0.4,x:-2.5,y:4.4},0).wait(1).to({rotation:-2.9,x:-2.4,y:4.2},0).wait(1).to({rotation:-2.7,x:-2.3,y:4},0).wait(1).to({rotation:-2.5,x:-2.1,y:3.7},0).wait(1).to({rotation:-2.2,x:-1.9,y:3.4},0).wait(1).to({rotation:-1.9,x:-1.6,y:3},0).wait(1).to({rotation:-1.6,x:-1.3,y:2.5},0).wait(1).to({rotation:-1.3,x:-1.1,y:2.1},0).wait(1).to({rotation:-0.9,x:-0.8,y:1.7},0).wait(1).to({rotation:-0.7,x:-0.5,y:1.3},0).wait(1).to({rotation:-0.4,x:-0.3,y:1},0).wait(1).to({rotation:-0.2,x:-0.2,y:0.8},0).wait(1).to({rotation:-0.1,x:0,y:0.6},0).wait(1).to({rotation:0,y:0.5},0).wait(1).to({regX:74.5,regY:51,x:74.5,y:51},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-56,262,112.8);


(lib.bgImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#248881").s().p("A3wFVIAAqpMAvhAAAIAAKpg");
	this.shape.setTransform(-269.6,-108.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29));

	// Слой_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#248881","rgba(36,136,129,0)"],[0,1],1.6,-13.7,1.6,28.7).s().p("A3bEgIAAo/MAu3AAAIAAI/g");
	this.shape_1.setTransform(-267.6,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(29));

	// Слой 4
	this.instance = new lib.bgImgMc();
	this.instance.parent = this;
	this.instance.setTransform(-141.8,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-551.2,y:6},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-809.8,-145,1332,414);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(151));

	// t1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-216,-149.9,0.82,0.82);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-4,alpha:1},20,cjs.Ease.quintOut).wait(200));

	// t1Blur
	this.instance_1 = new lib.t1Blur_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-215.1,-149.8,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:-0.5,x:-174.2,y:-150.2},0).wait(1).to({x:-137.5},0).wait(1).to({x:-106.7},0).wait(1).to({x:-82.3},0).wait(1).to({x:-64.1},0).wait(1).to({x:-50.9},0).wait(1).to({regY:0,x:-41.6,y:-149.8},0).wait(1).to({regY:-0.5,x:-34.5,y:-150.2,alpha:0.688},0).wait(1).to({x:-29.5,alpha:0.467},0).wait(1).to({x:-26,alpha:0.312},0).wait(1).to({x:-23.5,alpha:0.204},0).wait(1).to({x:-21.8,alpha:0.13},0).wait(1).to({x:-20.6,alpha:0.079},0).wait(1).to({x:-19.9,alpha:0.046},0).wait(1).to({x:-19.4,alpha:0.024},0).wait(1).to({x:-19.1,alpha:0.011},0).wait(1).to({x:-19,alpha:0.004},0).wait(1).to({x:-18.9,alpha:0.001},0).wait(1).to({alpha:0},0).wait(1).to({regY:0,y:-149.8},0).wait(200));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-44,191.9,0.019,0.019);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9).to({scaleX:1,scaleY:1},5).wait(191));

	// t2_3
	this.instance_3 = new lib.t2_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(39.3,192.5,1.086,1.085);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({x:67.3,alpha:1},6).to({x:62.3},4).wait(154));

	// t2_2
	this.instance_4 = new lib.t2_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(39.3,192.5,1.086,1.085);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({x:67.3,alpha:1},6).to({x:62.3},4).wait(160));

	// t2_1
	this.instance_5 = new lib.t2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24.5,153.3,1.086,1.085);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({x:52.5,alpha:1},6).to({x:47.5},4).wait(166));

	// redLine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E11021").s().p("AuJMkIcT8SIAAIhI8TW8g");
	this.shape.setTransform(29.9,101.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E11021").s().p("AuJMkIcT8SIAAOuI8TQvg");
	this.shape_1.setTransform(29.9,101.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E11021").s().p("AuJMkIcT8SIAAUpI8TK0g");
	this.shape_2.setTransform(29.9,101.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E11021").s().p("AuJMkIcT8SIAAZQI8TGNg");
	this.shape_3.setTransform(29.9,101.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E11021").s().p("AuJMkIcT8SIAAeAI8TBdg");
	this.shape_4.setTransform(29.9,101.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E11021").s().p("AuJOJIAAjLIcT8TMAAAAirg");
	this.shape_5.setTransform(29.9,111.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E11021").s().p("AIASvI2JmAIAAjKIcT8TMAAAAldg");
	this.shape_6.setTransform(29.9,120.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E11021").s().p("AgqSvItfmAIAAjKIcT8TMAAAAldg");
	this.shape_7.setTransform(29.9,120.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E11021").s().p("AlMSvIo9mAIAAjKIcT8TMAAAAldg");
	this.shape_8.setTransform(29.9,120.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E11021").s().p("AoKSvIl/l/IAAjMIcT8SMAAAAldg");
	this.shape_9.setTransform(29.9,120.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},30).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(181));

	// guy
	this.instance_6 = new lib.guy_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-56.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(220));

	// rocket
	this.instance_7 = new lib.rocket_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,139.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(220));

	// bgImg
	this.instance_8 = new lib.bgImg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(265.9,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(220));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.9,-249.6,1332,490.4);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-379.9,287.9,1665,613.1);
// library properties:
lib.properties = {
	id: 'E47BE2FFC4644C09A68CD2CC21F80690',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.png", id:"bgImg1"},
		{src:"images/guy.png", id:"guy"},
		{src:"images/logoSmall.png", id:"logoSmall"},
		{src:"images/rocket.png", id:"rocket"},
		{src:"images/t1Blur.png", id:"t1Blur"}
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
an.compositions['E47BE2FFC4644C09A68CD2CC21F80690'] = {
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