(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,708,600);


(lib.coin1 = function() {
	this.initialize(img.coin1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,110);


(lib.coin2 = function() {
	this.initialize(img.coin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,74);


(lib.coin3 = function() {
	this.initialize(img.coin3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,63);


(lib.coin4 = function() {
	this.initialize(img.coin4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,43);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,45);


(lib.round = function() {
	this.initialize(img.round);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,234);// helper functions:

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


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-135,-56.3,270,112.8), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-135,-35.4,270,70.8), null);


(lib.round_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.round();
	this.instance.parent = this;
	this.instance.setTransform(-113,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_1, new cjs.Rectangle(-113,-117,226,234), null);


(lib.logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB983E").s().p("Ah2DWQgYgJgOgVQgNgWACgaQACgKACgGQALgdAbgNQAcgOAdALQAYAIAOAWQANAWgDAZQAAAIgDAJQgLAdgbANQgPAIgQAAQgNAAgNgFgAh3BaQgWALgJAXQgCAGgBAIQgCAUALASQALASAUAHQAXAIAXgKQAWgLAJgYIADgNQACgVgLgSQgLgRgUgHQgKgEgLAAQgMAAgNAGgAiCCuIAAgGQgHgBgEgDIACgIQAEAEAGAAQAHAAAAgFQAAgCgDgCIgGgEQgKgFAAgJQAAgJALgDIAAgHIAHAAIAAAHQAKABAAAFQAAADgDACQgEgDgFAAQgGAAAAAEQAAACAGAEIAJAGQAEAEAAAFQAAAKgLADIAAAHgAhOChQAAgDADgCQAEAEAGAAQAKAAAAgIQAAgIgJAAIgLABIABgZIAcAAIABADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABgEAAIgNAAIAAAJIAFAAQAQAAAAAPQAAAQgVAAQgNAAAAgHgAhfCnIAAglIgLAGIgBAAQgCgCAAgDQAAgDAFgDQALgGADAAQAHAAAAAIIAAAogAAJBgQgXgGgNgVQgNgVAGgYQAEgUARgMQAPgNAUAAQAIAAAGACQAYAGANAUQANAVgFAYQgFAUgQANQgQANgVAAIgOgCgAgGAAQgOAKgEARQgEATAKASQALARATAEIALACQARAAANgLQANgKAEgRQAEgTgKgSQgLgQgTgEIgMgBQgQAAgMAJgAgEBAIAAgFQgFAAgEgDIACgHQADADAFAAQAFAAAAgEQAAgCgGgEQgJgFAAgGQAAgIAJgCIAAgFIAFAAIAAAFQAIABAAADQAAADgDACIAAAAQgDgCgDAAQgFAAAAADQAAACAFADIAGAEQADAEAAAEQAAAIgIACIAAAGgAAvA6IAAgeIgJAFQgDgCAAgCQAAgDAFgCQAIgFADAAQAFAAAAAHIAAAggAAYA6IAAgeIgKAFQgCgCAAgCQAAgDAEgCQAJgFACAAQAGAAAAAHIAAAggABYgQQgSgGgJgRQgIgPADgQQADgPAMgLIAJgHQARgJATAGQASAGAJARQAIAPgDAQQgDAQgMAKIgJAGQgLAGgLAAQgHAAgHgCgABUhfQgEACgDADQgKAJgDANQgCANAGAMQAIAOAPAEQAPAFAOgHIAHgFQAKgJACgNQADgNgGgMQgIgOgPgEQgGgCgGAAQgIAAgJAEgABYgrIAAgEQgDAAgEgCIACgFQACACAEAAQAFAAAAgDQAAgCgGgDQgHgEAAgFQAAgGAIgBIgBgFIAFAAIAAAFQAGAAAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQgDgCgCAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAABAAAAQAAACAEACQAIAFAAAFQAAAGgHACIAAAEgABqgxIAAgCQAGAAACgCQADgCABgFQgDACgDAAQgIAAAAgKQAAgEACgCQADgEAFAAQALAAAAAMQAAAKgFAFQgEAEgHAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAgABuhEQAAAFAEAAQABAAAAAAQABAAABAAQAAAAAAgBQABAAAAgBIAAgCQAAgGgEAAQgEAAAAAFgABtiNQgNgHgFgNQgGgMAEgOQABgFACgEQAIgPAQgFQAQgFAPAIQAMAHAGANQAFAMgDAOQgBAFgDAEQgHAPgQAFQgHACgGAAQgJAAgJgFgAB2jQQgNAEgGAMIgDAHQgDALAFAKQAEALAKAFQANAHANgEQANgFAGgMIADgHQADgLgFgKQgFgLgKgFQgHgEgIAAQgFAAgFACgAB0igIAAgEIgHgCIACgEQACACADAAQAEAAAAgDQAAgBgFgDQgFgDAAgFQAAgFAGgBIAAgEIAEAAIAAAEQAFAAAAADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgCgCgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAQAIAFAAAEQAAAFgGACIAAAEgACBisQAAgFAFgBQgEgCAAgEQAAgDACgCQADgCADAAQAEAAACACQADACAAADQAAAFgFABQAGABAAAFQAAAEgDACQgDACgEAAQgJAAAAgIgACGisQAAAEAEAAQAEAAAAgEQAAgEgEAAQgEAAAAAEgACHi4QAAABAAABQAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAAgBABAAQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape.setTransform(-116.6,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#608446").s().p("A0QDpQgRgIgLgQQgLgPAAgTQAHAUAPANQAIAHAKAFIAEACIABAAQAfANAegMQgOALgSADIgLAAQgMAAgMgEgA2PBtQgDAAgCgCQgBgDAAgDQABgDADgCIAAAAQBxg0BLhcQAmguAPgjIgkgPIBthcIgECQIghgUQgTAmgrAvQhXBdh6ArIgDAAIgBAAgAU/BrQgJAAgJgDQgSgFgMgLQgNgMgGgRQgFgQAAglIAAiBIAyAAIABCfQABAJACADQACAEAFAEQAGAGALACQAJACAYAAIAwAAIAAAqgASmBsIgzhQIgzBQIg7AAIBPh0IhMhzIA9AAIAuBMIAxhMIA8AAIhPBzIBPB0gAPIBsIgzhQIgyBQIg7AAIBPh0IhMhzIA8AAIAuBMIAxhMIA8AAIhOBzIBOB0gAxBBPQAEgGAEgJIACgFQAHgZgNgXQALAJAEAOQAEAOgFAPQgEAPgMAKQgMAKgOACQAPgIAJgNgAv0hAQAAgGgDgGIgCgEQgIgSgUgIQAMABAJAGQAKAGAFALQAFALgCAMQgCAMgIAJQAFgMgBgOgAwoiCQgJgGgEgJQgFgKABgKQACALAIAJIAIAIIADABIAAAAQAPAJASgEQgIAFgKABQgKAAgJgFg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AiJCiIAAjYQAAgOgCgJIAAgBQAHgDAJAAQAVAAAGAIQAEAGAAAWIABAAQANglAkAAQAdAAARAYQATAZAAAkQAAAlgUAYQgTAYgfAAQgOAAgKgEQgKgFgIgLIgBAAIAABegAhRgfQgKAOABAWQgBAXAKANQAKAOAOAAQAPAAAKgPQAKgOAAgWQAAgVgKgOQgKgPgPAAQgOAAgKAPgAGaBRQgFgHgBgSIgEhMIgmBpIglAAIglhpIgEBpIgtAAQAMiBAFgjQAJgDAKAAQAgAAAKAdIAbBQIACgIIAahIQAGgQAMgHQAJgGAPAAQAJAAAKADIATClQgIAEgJAAQgRAAgIgJgACmBRQgGgHAAgRQAAghACgnIgBAAIg9BkIgwAAIAAiLQAAgOgCgJIAAgBQAIgEAJAAQASAAAHAHQAFAHABARIgDBLIABAAIA1hXIAJgQQAJgDAIAAQATAAAGAHQAGAHAAARIAAByQAAAPABAIIAAAAQgFAEgLAAQgSAAgHgJgAKLAoQABgbAZgOQAZgQAsAAIAHAAIAAgGQAAgZgeAAQgSAAgLAFQgHADgKAJIgBAAQgPgKAAgMQABgPAZgIQATgGAaAAQAnAAAQAWQAKANAAAfIAABiQgeAHglAAQhPAAAAgxgAK4AjQAAAWAkAAQAMAAAJgBIAAgwQg4ABgBAagAJOBVQgMgFgLgQIglg3IAABMIgvAAIAAiLQAAgNgBgKIAAgBQAHgEAKAAQAUAAAGAJQAFAHAAAWIAAAoIAzhMIA1AAIg+BQIAZAdQAbAhASAWQgMAFgKAAQgUAAgKgEgAqPBQQgHgIAAgWIAAicIhUAAIAAC/IgxAAIAAjOQAAgMgCgMIAAgBICWAAQATAAAIAIQAGAHAAAUIAACsQABAPACAIIAAABQgIADgJAAQgUAAgHgIgAkFBVIAAiBIgfAAQgLAAgGADIgFgDQgFgFgBgJQAAgNAJgFQAIgEASAAIB8AAQAFAHAAAHQAAAOgJAFQgHADgTAAIgXAAIAACBgAn8BVIAAgkIAUAAIAXhpQADgMgBgMIBYAAQASAAAHAGQAGAGAAARIAABkIAWAAIAAAkgAm8AxIA2AAIAAhdIglAAgAo9BVIAAiLQAAgLgCgMIAAgBQAGgDAKAAQAWAAAGAJQAEAGAAAXIAACAgAo5h1QgGgGAAgNQAAgNAGgGQAGgGANAAQAMAAAHAGQAGAGAAANQAAANgGAGQgGAGgNAAQgNAAgGgGg");
	this.shape_2.setTransform(-9.7,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo2, new cjs.Rectangle(-143,-23.7,286,47.5), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-78,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-78,-23,156,45), null);


(lib.coin4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin4();
	this.instance.parent = this;
	this.instance.setTransform(-20,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin4_1, new cjs.Rectangle(-20,-22,40,43), null);


(lib.coin3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin3();
	this.instance.parent = this;
	this.instance.setTransform(-31,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin3_1, new cjs.Rectangle(-31,-32,59,63), null);


(lib.coin2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin2();
	this.instance.parent = this;
	this.instance.setTransform(-36,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin2_1, new cjs.Rectangle(-36,-37,71,74), null);


(lib.coin1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin1();
	this.instance.parent = this;
	this.instance.setTransform(-52,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin1_1, new cjs.Rectangle(-52,-55,103,110), null);


(lib.billet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bFFIAAqJMAu3AAAIAAKJg");
	this.shape.setTransform(0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90C23F").s().p("A3bA8IAAh3MAu3AAAIAAB3g");
	this.shape_1.setTransform(0,-32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.billet2, new cjs.Rectangle(-150,-38.5,300,77), null);


(lib.billet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F813D").s().p("A3bFFIAAqJMAu3AAAIAAKJg");
	this.shape.setTransform(0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90C23F").s().p("A3bA8IAAh3MAu3AAAIAAB3g");
	this.shape_1.setTransform(0,-32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.billet1, new cjs.Rectangle(-150,-38.5,300,77), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-354,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-354,-300,708,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo2
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(-300,244.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).wait(1).to({x:-293.3},0).wait(1).to({x:-272.9},0).wait(1).to({x:-239.8},0).wait(1).to({x:-196.6},0).wait(1).to({x:-147.9},0).wait(1).to({x:-99.6},0).wait(1).to({x:-57.5},0).wait(1).to({x:-25.7},0).wait(1).to({x:-6.4},0).wait(1).to({x:0},0).wait(75).to({x:300},10).wait(1));

	// billet
	this.instance_1 = new lib.billet2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-300,240.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).wait(1).to({x:-293.3},0).wait(1).to({x:-272.9},0).wait(1).to({x:-239.8},0).wait(1).to({x:-196.6},0).wait(1).to({x:-147.9},0).wait(1).to({x:-99.6},0).wait(1).to({x:-57.5},0).wait(1).to({x:-25.7},0).wait(1).to({x:-6.4},0).wait(1).to({x:0},0).wait(75).to({x:300},10).wait(1));

	// logo
	this.instance_2 = new lib.logo_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,244);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({regY:-0.5,x:6.7,y:243.5},0).wait(1).to({x:27.1},0).wait(1).to({x:60.2},0).wait(1).to({x:103.4},0).wait(1).to({x:152.1},0).wait(1).to({x:200.4},0).wait(1).to({x:242.5},0).wait(1).to({x:274.3},0).wait(1).to({x:293.6},0).wait(1).to({regY:0,x:300,y:244},0).to({_off:true},1).wait(74).to({_off:false,x:-300},0).to({x:0},10).wait(1));

	// billet
	this.instance_3 = new lib.billet1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,240.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({x:6.7},0).wait(1).to({x:27.1},0).wait(1).to({x:60.2},0).wait(1).to({x:103.4},0).wait(1).to({x:152.1},0).wait(1).to({x:200.4},0).wait(1).to({x:242.5},0).wait(1).to({x:274.3},0).wait(1).to({x:293.6},0).wait(1).to({x:300},0).to({_off:true},1).wait(74).to({_off:false,x:-300},0).to({x:0.1},10).wait(1));

	// bgImg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(204,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(159).to({_off:false},0).to({alpha:1},10).wait(1));

	// t2
	this.instance_5 = new lib.t2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(9,101.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).to({alpha:1},10).wait(66));

	// bgImg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-204,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({alpha:0.5},10).wait(66));

	// coin
	this.instance_7 = new lib.coin4_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-15,-64);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).to({alpha:1},5).wait(126));

	// coin
	this.instance_8 = new lib.coin3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-78,-112);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({alpha:1},5).wait(121));

	// coin
	this.instance_9 = new lib.coin2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2,-146);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({_off:false},0).to({alpha:1},5).wait(116));

	// coin
	this.instance_10 = new lib.coin1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-87,-213);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).to({alpha:1},5).wait(111));

	// round
	this.instance_11 = new lib.round_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(31,-41,0.5,0.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:0.352},10).wait(131));

	// t1
	this.instance_12 = new lib.t1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(418.3,-26.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).wait(1).to({x:414.5},0).wait(1).to({x:402.7},0).wait(1).to({x:382.4},0).wait(1).to({x:353.5},0).wait(1).to({x:316.6},0).wait(1).to({x:273.4},0).wait(1).to({x:226.5},0).wait(1).to({x:179.3},0).wait(1).to({x:135},0).wait(1).to({x:96.1},0).wait(1).to({x:64.2},0).wait(1).to({x:39.9},0).wait(1).to({x:23.1},0).wait(1).to({x:13.4},0).wait(1).to({x:10.3},0).wait(141));

	// bgImg
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;
	this.instance_13.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({x:200.2},0).wait(1).to({x:188.4},0).wait(1).to({x:168.1},0).wait(1).to({x:139.2},0).wait(1).to({x:102.3},0).wait(1).to({x:59.1},0).wait(1).to({x:12.2},0).wait(1).to({x:-35},0).wait(1).to({x:-79.3},0).wait(1).to({x:-118.2},0).wait(1).to({x:-150.1},0).wait(1).to({x:-174.4},0).wait(1).to({x:-191.2},0).wait(1).to({x:-200.9},0).wait(1).to({x:-204},0).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,708,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,709,602);
// library properties:
lib.properties = {
	id: '2285E32D27F84225A750CBAA7BCF760E',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/coin1.png", id:"coin1"},
		{src:"images/coin2.png", id:"coin2"},
		{src:"images/coin3.png", id:"coin3"},
		{src:"images/coin4.png", id:"coin4"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/round.png", id:"round"}
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
an.compositions['2285E32D27F84225A750CBAA7BCF760E'] = {
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