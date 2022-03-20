(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.pen1 = function() {
	this.initialize(img.pen1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,598);


(lib.pen2_1 = function() {
	this.initialize(img.pen2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,30);


(lib.pen3 = function() {
	this.initialize(img.pen3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,108);


(lib.pen3_2 = function() {
	this.initialize(img.pen3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,108);


(lib.pen4 = function() {
	this.initialize(img.pen4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,96);


(lib.sideSmart = function() {
	this.initialize(img.sideSmart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,58);


(lib.tel = function() {
	this.initialize(img.tel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,288);// helper functions:

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


(lib.tel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.tel();
	this.instance.parent = this;
	this.instance.setTransform(-177,-115,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tel_1, new cjs.Rectangle(-177,-115,353.6,230.4), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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IAKgEQALgDAJAAQALAAAKAEQAKAFAFAGIAAgNIAaAAIAABwIgaAAIAAgOQgFAHgKAFQgKAFgLAAQgKAAgKgFgAFSieQgGACgFAFQgFAFgCAGQgDAGAAAIQAAAIADAFQACAHAFAEQAEAFAHADQAHADAGAAQAGAAAIgDQAFgDAFgFQAFgFACgGQADgFAAgIQAAgIgDgGQgCgFgFgGQgFgFgFgCQgGgDgIAAQgIAAgFADgAg8hIQgLgEgIgIQgIgJgEgKQgFgKAAgNQAAgMAFgLQAFgLAHgHQAIgIALgFQAKgEANAAQAMAAALAEQALAFAGAHQAHAHAFALQAFALAAANIAAAJIhbAAQADAMAJAHQAJAIAOAAQALAAAIgGQAIgFAEgJIAUAMQgHAOgMAIQgOAJgSAAQgNAAgLgFgAg5ibQgJAGgEALIBAAAQgDgMgIgGQgIgFgMAAQgNAAgHAGgAmWhIQgLgFgIgIQgIgIgEgKQgFgLAAgMQAAgMAFgLQAEgKAIgJQAJgHAKgFQALgEAMAAQAKAAAHACQAIACAIAGQAHAEAFAGQAGAIACAGIgXAKQgEgKgIgEQgIgGgKAAQgIAAgFADQgHACgEAFQgEAFgDAGQgCAGAAAHQAAAHACAGQADAHAEAEQAEAEAHADQAFADAIAAQALAAAIgGQAHgFAEgKIAXAKQgCAIgGAGQgGAHgGAFQgHAEgIADQgKADgIAAQgMAAgLgFgAs6hIQgLgFgIgIQgHgHgFgLQgFgLAAgMQAAgMAFgLQAEgKAIgJQAIgIALgEQAKgEAMAAQANAAAKAEQAKAFAJAHQAIAJAEAKQAEALAAAMQAAALgEAMQgFALgHAHQgJAIgKAFQgKAFgNAAQgMAAgKgFgAsxidQgFACgFAFQgEAFgDAGQgCAGAAAHQAAAHACAGQADAGAEAFQAEAEAGADQAGADAHAAQAIAAAFgDQAHgDAEgEQAEgFACgGQADgFAAgIQAAgHgDgGQgCgGgEgFQgFgFgGgCQgFgDgIAAQgHAAgGADgAO6hGIAAhwIAaAAIAABwgANVhGIAAhwIAZAAIAAAiIAXAAQALAAAHADQAJADAGAFQAFAFAEAHQADAIAAAIQAAAHgDAIQgEAHgFAFQgHAGgHADQgIADgKAAgANuhcIAWAAQAIAAAGgFQAGgFAAgHQAAgIgGgFQgFgEgJAAIgWAAgAMrhGIAAgtIgxAAIAAAtIgaAAIAAhwIAaAAIAAAsIAxAAIAAgsIAaAAIAABwgAKZhGIAAhYIgjAAIAAgYIBgAAIAAAYIgjAAIAABYgAGphGIAAhwIBOAAIAAAYIg0AAIAABYgAD/hGIAAhKIgjApIgjgoIAABJIgaAAIAAhwIAYAAIAlAsIAmgsIAXAAIAABwgAiFhGIAAhYIguAAIAABYIgaAAIAAhwIBiAAIAABwgAoOhGIAAhwIAaAAIAABwgApzhGIAAhwIAZAAIAAAiIAXAAQALAAAHADQAJADAGAFQAFAFAEAHQADAIAAAIQAAAHgDAIQgEAHgFAFQgHAGgHADQgIADgKAAgApahcIAWAAQAIAAAGgFQAGgFAAgHQAAgIgGgFQgFgEgJAAIgWAAgArehGIAAhwIAzAAQATAAALAIQALAIAAAOQAAAQgOAIQARAIAAASQAAAPgLAJQgMAIgUAAgArFhcIAbAAQAHAAAFgDQAFgDAAgGQAAgGgFgDQgDgDgJAAIgbAAgArFiKIAbAAQAGAAAEgDQAEgDAAgGQAAgFgEgDQgEgDgGAAIgbAAgAuDhGIAAg6Ig2AAIAAA6IgaAAIAAiMIAaAAIAAA5IA2AAIAAg5IAaAAIAACMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-98,-21,196.1,42.2), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-68.6,-21,137.3,42.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-96,-21.7,192,43.6), null);


(lib.sideSmart_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.sideSmart();
	this.instance.parent = this;
	this.instance.setTransform(-114,-23,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sideSmart_1, new cjs.Rectangle(-114,-23,227.2,46.4), null);


(lib.samsungPAY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGgBIIAUgtIgthgIAYAAIAfBIIAdhIIAZAAIg9CNgACbBIIAAiNIAXAAIAAAKQAEgHAKgDQAIgCAGAAQAXAAAPAPQAPAQAAAXQAAAKgDAJQgEAKgHAIQgIAIgJADQgKAFgKAAQgIAAgIgDQgFgBgDgDQgFgDgCgDIAAAxgAC4gqQgIAIAAAQQAAARAIAIQAJAIANAAQAMAAAKgJQAIgIABgPQgBgQgIgJQgJgJgNAAQgNAAgJAJgAExAfQgJgDgIgIQgIgIgDgKQgEgIAAgLQAAgXAQgQQAPgPAWAAQAHAAAHACQAKAEAFAGIAAgKIAWAAIAABnIgWAAIAAgLQgCADgFADQgDADgFABQgHADgIAAQgLAAgJgFgAEwgqQgIAJgBAQQAAAPAKAIQAJAJAMAAQAOAAAIgIQAIgIAAgRQAAgQgJgIQgHgJgOAAQgNAAgJAJgAnpAeQgKgGAAgOIAAgHIAYAAIAAAJQAAAEACACQACACAFAAQAGAAACgGQABgEgCgDQgBgEgSgJQgSgKgCgKQgBgFABgHQADgTAbAAQAeAAAAAWIAAAGIgWAAIAAgGQAAgDgCgCQgCgCgEAAQgHAAgBAFIABAFQAAAEATAKQARAKADAJQABAJgBAGQgDAUgcAAQgOAAgIgGgAjMAeQgKgHAAgNIAAgHIAXAAIAAAJQABADACACQACACAEAAQAHAAABgFQABgFgBgCQgCgEgRgJQgRgKgCgKQgCgGACgFQABgLAJgEQAHgFAMAAQAeAAAAAWIAAAGIgWAAIAAgFQAAgEgCgCQgCgCgEAAQgHAAgBAGIAAAEQABAEASAKQASAKADAJQABAGgBAIQgEAUgcAAQgNAAgIgFgAiCANIAAhDIAVAAIAABDQABAGAIAAQAHAAABgGIAAhDIAXAAIAABDQgCAWgdAAQgcAAgCgWgAA9AdQgJgFgBgMIgBgGIABgpQACgWAdAAQAdAAACAWIAAAFIAAADIgWAAIAAgFIgBgDQgBgGgHAAQgEAAgDACIgCAEIAAAEIAAArQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABQADACAEAAQAEAAACgCIADgEIAAgPIgJAAIAAgNIAfAAIAAAcQgBAMgJAFQgJAFgMAAQgNAAgIgFgAkBAgIAAhOIgBAAIgPBOIgWAAIgPhOIAAAAIAABOIgXAAIADhWIAjAAIALBCIABAAIAKhCIAjAAIADBWgAl1AgIgMhOIgBAAIgMBOIgXAAIAQhWIAnAAIAQBWgAgDAfIgVhGIAAAAIABBGIgWAAIAAhVIAgAAIAUBDIAAAAIgBhDIAWAAIAABVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.samsungPAY, new cjs.Rectangle(-50,-7.2,100,14.5), null);


(lib.pen4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pen4();
	this.instance.parent = this;
	this.instance.setTransform(-81,-38,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pen4_1, new cjs.Rectangle(-81,-38,161.6,76.8), null);


(lib.pen3_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.pen3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-43,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pen3_2_1, new cjs.Rectangle(-150,-43,300.8,86.4), null);


(lib.pen3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pen3_2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-43,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pen3_1, new cjs.Rectangle(-150,-43,300.8,86.4), null);


(lib.pen2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.pen2_1();
	this.instance.parent = this;
	this.instance.setTransform(-118,-12,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pen2, new cjs.Rectangle(-118,-12,205,24), null);


(lib.pen1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pen1();
	this.instance.parent = this;
	this.instance.setTransform(-42,-239,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pen1_1, new cjs.Rectangle(-42,-239,84.8,478.4), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmMA4QgNgJAAgSIAAgJIAfAAIAAALQABAFADADQADADAFAAQAKAAABgIQACgFgCgEQgCgGgZgOQgXgMgDgNQgBgHABgJQACgNANgHQAJgGASAAQAnAAAAAeIAAAIIgdAAIAAgHQAAgFgEgDQgCgDgFAAQgKAAgBAIIAAAGQABAGAZANQAYAMADAOQACAJgCAKQgCAOgMAHQgKAGgRAAQgTAAgLgHgAgOA3QgOgJAAgSIAAgIIAfAAIAAALQgBAFAEACQADADAFAAQAKAAABgIQACgEgCgEQgCgGgXgOQgXgMgDgNQgBgHABgIQACgOALgGQALgGAQAAQAmAAAAAdIAAAIIgdAAIAAgHQAAgFgCgDQgDgCgFAAQgJAAgCAHQAAAEABACQAAAGAZANQAYAMADAOQABAJgBAKQgDANgLAHQgLAGgQAAQgSAAgKgHgABTAhIAAhbIAeAAIAABWIAAAEQABAJAKAAQAJAAACgJIABgEIAAhWIAdAAIAABTIAAAIQgDAdgmAAQgnAAgCgdgAFUA2QgMgHgBgQIAAg3IABgIQABgPAMgIQALgGAQAAQAnAAADAdIAAAIIAAADIgdAAIgBgLQgCgIgKAAQgKAAgCAIIAAAGIAAA0IAAAFQABADACACQADADAGAAQAGAAADgDQADgCABgDIAAgWIgNAAIAAgQIAqAAIAAAfIAAAHQgCAQgMAHQgKAGgSAAQgRAAgLgGgAhVA6IgBhrIgUBrIgfAAIgUhrIAABrIgdAAIACh0IAwAAIAPBbIAPhbIAvAAIADB0gAjxA6IgQhrIgRBrIgfAAIAWh0IA0AAIAVB0gAD/A5IgfhgIADBgIgeAAIAAhzIAsAAIAbBdIgBhdIAdAAIAABzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-41,-6.2,82,12.6), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4869D8").s().p("EgSvAlgMAAAhK/MAlfAAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-120,-240,240,480), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgSvAlgMAAAhK/MAlfAAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-120,-240,240,480), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-66,-217.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260));

	// samsungPAY
	this.instance_1 = new lib.samsungPAY();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.1,219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(260));

	// bg
	this.instance_2 = new lib.bg1();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(249).to({_off:false},0).to({alpha:1},10).wait(1));

	// pen4
	this.instance_3 = new lib.pen4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(176,-61.9,0.7,0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(209).to({_off:false},0).to({scaleX:1,scaleY:1,x:22,y:7},10,cjs.Ease.cubicOut).wait(41));

	// t3
	this.instance_4 = new lib.t3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,122.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).to({alpha:1},10).wait(56));

	// tel
	this.instance_5 = new lib.tel_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4,-104,0.02,0.02,0,0,0,2.5,2.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(179).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,y:45},15,cjs.Ease.cubicOut).wait(66));

	// bg2
	this.instance_6 = new lib.bg2();
	this.instance_6.parent = this;
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169).to({_off:false},0).to({alpha:1},10).wait(81));

	// t2
	this.instance_7 = new lib.t2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,122.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({alpha:1},10).to({_off:true},100).wait(81));

	// t1
	this.instance_8 = new lib.t1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,122.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({alpha:1},10).wait(29).to({alpha:0},10).to({_off:true},1).wait(200));

	// bg
	this.instance_9 = new lib.bg1();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:0},10).wait(39).to({alpha:1},10).to({alpha:0},10).wait(60).to({alpha:1},0).to({alpha:0},10).to({_off:true},41).wait(80));

	// pen3
	this.instance_10 = new lib.pen3_2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(5.2,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150).to({_off:false},0).to({x:-3},7).to({_off:true},1).wait(102));

	// pen3
	this.instance_11 = new lib.pen3_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(30,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(129).to({_off:false},0).to({x:-29},50).to({_off:true},1).wait(80));

	// sideSmart
	this.instance_12 = new lib.sideSmart_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-7,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).wait(20).to({x:-233},40).to({_off:true},1).wait(140));

	// pen2
	this.instance_13 = new lib.pen2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(112,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({_off:false},0).to({x:34},20).wait(20).to({x:238},30).to({_off:true},1).wait(130));

	// pen1
	this.instance_14 = new lib.pen1_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0.5,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:0},59).to({_off:true},1).wait(200));

	// bg
	this.instance_15 = new lib.bg1();
	this.instance_15.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-449,240,689);


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
p.nominalBounds = new cjs.Rectangle(149,38.8,302,862.3);
// library properties:
lib.properties = {
	id: '19E2D3222A704C7CA618B6AED88B29E7',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pen1.png", id:"pen1"},
		{src:"images/pen2_1.png", id:"pen2_1"},
		{src:"images/pen3.png", id:"pen3"},
		{src:"images/pen3_2.png", id:"pen3_2"},
		{src:"images/pen4.png", id:"pen4"},
		{src:"images/sideSmart.png", id:"sideSmart"},
		{src:"images/tel.png", id:"tel"}
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
an.compositions['19E2D3222A704C7CA618B6AED88B29E7'] = {
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