(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);// helper functions:

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


(lib.t1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(6.9,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_5, new cjs.Rectangle(-41,-29.7,95.9,37.3), null);


(lib.t1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.t1_4, null, null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am+A4IAAgTIg2AAIAAATIgLAAIAAgcIAGAAQAFgJADgJQAEgJACgKIAEgWIAAgWIAtAAIAABRIAHAAIAAAcgAnhgGIgGATIgHAPIApAAIAAhIIgYAAgAGOAeQgJgKAAgQQAAgFACgIQADgGADgFQADgEAFgDQAGgCAGAAQAGAAAFACQAGADADAEQADAEACAHIACANIgtAAQAAAMAFAHQAGAHAKAAQAGAAAEgCQAGgDACgCIADAIIgDADIgFACIgHACIgHABQgNgBgIgIgAGwgEQAAgEgBgDIgEgFIgFgEIgFgBQgGAAgFAFQgEAEgCAIIAgAAIAAAAgABKAjQgFgDgEgEQgEgHgBgGQgBgHAAgIQAAgZAHgLQAHgMAPAAIAFAAQAEAAACgBQACgCABgEIAIABQgBAIgEAEQgEACgIAAIgGABQgFAAgEACQgDAEgCACIgDAIIgBAIQACgEAGgDQAFgDAIAAQAGAAAFACQAFADADAEQAEAEABAGQACAGAAAGQAAAHgCAFQgBAEgEAHQgEAEgFACQgFAEgIAAQgHAAgGgEgABPgPQgEACgCADIgDAIQgBADAAAEIABAJQABAEADAEIAFAGQAEACAEAAQAFAAAEgCQACgCAEgEQACgDABgFIABgIIgBgIQgBgFgCgDIgGgFQgEgCgFAAQgEAAgEACgAhJAlQgFgDgFgEQgCgDgEgHQgDgHAAgJQAAgIADgGQADgHADgEIAKgGQAEgCAGAAQAFAAAEABIAHAEIAEAEIADAFIgHAFQgDgFgEgDQgDgDgGAAQgEAAgDACQgEACgCAEQgDADgBAFQgCAEAAAFQAAAGACAFIAEAIQACADAEACQAEACAEAAQAHAAADgCQAEgBAEgEIADAIQgFAEgFACQgEACgIAAIgKgCgAkEAlQgDgBgEgDQgDgDgBgDQgCgEAAgFQAAgGADgGQAEgEAFgCIANgEIAMAAIAAgBQAAgIgDgEQgDgDgGgBIgJACIgJAGIgDgJIAIgFQAGgCAHAAQAKAAAHAGQAFAGAAANIAAApIgJAAIAAgGQgEAEgEACQgDACgGAAIgIgCgAj1AEIgJABIgGAGQgDACAAAGQAAADABABIADAFIAEACIAEAAQAFAAADgCIAHgFIAAgUIgJABgAmBAmIgHgDIgIgGIAFgIIADADIAEADIAGADIAGABQAIAAADgDQADgEAAgFQAAgGgCgCQgCgCgGgBIgKgBIAAgHIAJAAQAGgBACgDQACgDAAgEQAAgFgDgDQgEgCgFAAQgHAAgEADIgHAIIgHgEIAEgGIAFgEIAHgEQAEgBAFAAQAKAAAGAFQAGAEAAAIQAAAGgEAEQgDAEgFABQAGABAEADQADAFAAAGQAAAJgGAGQgHAFgLABgAEjAlIAAhBIAKAAIAAA5IAbAAIAAg5IAKAAIAAA5IAaAAIAAg5IAKAAIAABBgADiAlIAAhBIAKAAIAAAVIAQAAQAGAAAFACIAIAEQADACACAEIABAJIgBAJQgCAEgDADQgFAEgDABQgEACgHAAgADsAdIAPAAQAPAAAAgPQAAgIgDgCQgEgDgIAAIgPAAgADGAlIAAg4IgWAAIgBAYIgCAQQgCAHgEAEQgEAFgIAAIgEAAIAAgIIADAAIACgBIADgCIADgDIACgEIABgGIABgoIAqAAIAABAgACDAlIAAhBIAKAAIAABBgAAIAlIAAgXIgRAAIgEAMIgEAHIgFAEIgEAAIgHAAIAAgIIAEAAIACgBIADgCIADgEIADgJIgFgCIgEgFIgDgFQgBgBAAgGQAAgJAGgHQAHgFAMAAIAXAAIAABAgAgRgPQgEADAAAGQAAAGAEADQAEACAGAAIAPAAIAAgYIgPAAQgGAAgEAEgAh0AlIAAgsIgfAkIAAAIIgKAAIAAhBIAKAAIAAAsIAfgjIAAgJIAJAAIAABBgAjFAlIAAg4IgTAAIAAgIIAxAAIAAAIIgUAAIAAA4gAkpAlIAAgeIgfAAIAAAeIgKAAIAAhBIAKAAIAAAcIAfAAIAAgcIAKAAIAABBgAmmAlIAAhBIAKAAIAABBgAHeAXIAVgVIgTgVIAHgFIAZAbIgcAbgACEgoQgCgCAAgEQAAgDACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACABAAADQAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmlgoQgCgCAAgEQAAgDACgBQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACABAAADQAAAEgCACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-249,-5.6,300.2,42.2), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnvBHIAAgfQgIAAgIgCQgGgDgGgFQgGgFgCgHQgDgIAAgJQAAgJADgHQACgHAGgFQAFgEAHgDQAIgDAIAAIAAgfIAUAAIAAAfQAJAAAIAEQAHADAEAFQAFAGADAGQADAIgBAGQAAAJgCAIQgEAHgFAFQgGAFgGADQgIACgHAAIAAAfgAnbAXQAHAAAGgHQAFgFAAgKQAAgKgFgFQgGgFgHgBgAn9gOQgFAFAAAKQAAAKAFAFQAGAHAIAAIAAgrQgIABgGAFgArMBHIAAhtIATAAIABAGIAHgFQAFgCAGgBQAIABAGADQAGAEAEAFQAEAFADAIQACAIAAAHQAAAHgCAIQgDAHgFAGQgEAGgIAEQgHADgLAAQgGAAgEgCIAAAfgAqygUIgGAFIAAAlQAGACAEAAQAFAAAFgCQAEgCACgDQACgDACgEIABgJIgBgIIgDgIQgCgDgDgCQgDgCgFgBQgEABgEACgAvkA1IAHAAIAIgCIAGgCQAEgCACgCIACgFIgghOIAVAAIAXA8IAEgNIAFgOIAEgRIAFgQIAUAAQgHAYgHATQgGAUgHANIgHAMQgDAHgFADQgGAFgIADQgIADgNAAgAOxAnQgJgEgHgHQgGgIgEgKQgDgKAAgNQAAgPAEgKQADgLAHgHQAGgHAJgEQAIgDAJAAQAOAAAJAFQAJAGAFAIIgPANIgDgEIgFgFIgGgDIgIAAQgFAAgEABQgEADgEAFQgEAFgCAGQgCAIABAJQgBAJACAGQACAHAEAEQAEAFAFADQAFACAGAAIALgBIAFgBIAAgTIgRAAIAAgSIAkAAIAAA0IgEACIgHACIgLABIgOABQgLAAgIgDgANHAnQgJgDgGgGIAJgRQAFAEAIAEQAGADAIAAIAHgBIAGgDQADgCABgEQABgDAAgFQAAgIgFgEQgHgFgKAAIgFAAIgEABIAAgNIADgGIAGgHIAGgGIAGgHIgpAAIAAgTIBDAAIAAASIgHAGIgHAFIgGAHIgGAHQAHAAAFACQAGABAEADQAFAFACAGQACAGABAHQAAAJgEAHQgDAHgFAFQgFAEgIADQgGACgJAAQgLABgKgEgAGGAoQgIgDgFgFQgGgGgDgGQgEgIAAgJIAAhHIAWAAIAABFQAAAJAEAHQAHAGAJAAQALAAAFgGQAGgHgBgJIAAhFIAVAAIAABHQAAAJgDAIQgDAGgGAGQgGAFgHADQgIACgJAAQgJAAgHgCgAJCApQgDgCgDgCQgDgCgBgEQgCgEAAgGIAAhZIAUAAIAABVQAAAEABACQACABAEAAIADAAIADgBIAEAQIgHABQgEACgFAAIgJgBgAEKAoQgHgDgFgFQgFgGgDgHQgDgHAAgLQAAgKADgHQACgHAGgGQAFgFAGgDQAHgDAIAAQAHABAGACQAGADAGAEQAEAGACAIQAEAIAAALIAAADIg0AAQABAKAGAFQAFADAJAAIAHAAIAHgCIAEgCIAEgCIAFAQIgDADIgHACIgJACIgLABQgHAAgIgCgAEmgHIgCgHQgBgEgCgCIgFgDIgEAAQgFAAgFADQgFAFgBAIIAeAAIAAAAgABSAnQgHgEgFgGQgEgGgDgIQgCgHAAgHQAAgHACgIQADgHAEgFQAFgHAHgDQAHgDAKgBQAJABAHADQAHADAFAHQAFAFACAHQACAIAAAHQAAAHgCAHQgCAIgFAGQgFAGgHAEQgHADgJAAQgKAAgHgDgABbgVIgGAGIgDAHIgBAJQgBAFACAEIADAIIAGAEQADACAFAAQAEAAADgCQADgBACgDQADgEABgEIABgJIgBgJQgBgEgDgDQgCgDgDgDQgDgCgEAAQgFAAgDACgAg7AoIgIgEIgGgIQgCgFAAgGQAAgGACgFQACgEAEgCQAEgDAFgCIALgDIAIgBIAIgBIAAgBQAAgHgDgCQgEgDgFAAIgHAAIgFADIgFACIgCADIgIgPIAEgCIAHgDIAIgEIALgBQAGAAAGACQAGACAEAEQADAEACAFQACAGABAHIAAAyIgTAAIgBgGQgDAEgFACQgFACgGAAIgKgCgAglAEIgHABQgGABgDAEQgCADAAADQAAAEADADQACACAGAAQAEAAADgCIAGgDIAAgRgAiRAnQgGgEgFgFQgEgGgCgIQgCgHAAgIQAAgHACgIQACgHAFgFQAFgHAHgDQAHgDAJgBQAHABAGACIAAgfIAUAAIAABsIgSAAIgBgGQgDADgEADQgEACgHAAQgIAAgGgDgAiFgUQgEACgDADQgCADgBAFQgBAEAAADIABAKIADAIQACADAEABQADACAFAAQADAAAEgCQAEgCABgCIAAgmQgFgCgFgBQgFABgEACgAjoAnQgIgEgEgGQgEgGgDgIQgCgHAAgHQAAgHACgIQADgHAEgFQAEgHAIgDQAHgDAJgBQAJABAIADQAHADAFAHQAFAFACAHQACAIAAAHQAAAHgCAHQgCAIgFAGQgFAGgHAEQgHADgKAAQgJAAgHgDgAjfgVQgEADgCADQgCADgBAEIgBAJIABAJQABAEACAEQACADAEABQADACAEAAQAFAAADgCIAFgEQADgEABgEIABgJIgBgJQgBgEgDgDIgFgGQgDgCgFAAQgEAAgDACgAsVAoIgIgEIgFgIQgDgFAAgGQAAgFADgGQACgEAEgCIAJgFIAKgDIAJgBIAHgBIAAgBQAAgHgCgCQgEgDgGAAIgHAAIgFADIgEACIgDADIgHgPIAEgCIAGgDIAJgEIAKgBQAHAAAGACQAFACAEAEQADAEADAFQACAGAAAHIAAAyIgTAAIgBgGQgCAEgGACQgEACgHAAIgKgCgAr+AEIgHABQgHABgCAEQgDADAAADQAAAEADADQADACAFAAQAEAAAEgCIAGgDIAAgRgAL2AoIAAgtQAAgIgDgEQgDgGgIAAIgFABIgEACIgEACIgCACIAAAEIABAGIAAAuIgUAAIAAgtIgBgHIgDgFIgDgEQgDgBgDgBQgFABgEACIgGAFIAAA3IgVAAIAAhOIATAAIAAAGQAFgDAEgCQAGgCAFgBQAGAAAFACQAGACAFAEQAEgCAHgDQAGgCAIgBQAJABAFACQAHADADADQAEAFABAGQACAGAAAIIAAAugAJqAoIAAhOIAUAAIAABOgAILAoIAAgsQAAgJgDgEQgFgGgGAAQgFABgEACIgGAGIAAA2IgVAAIAAhOIASAAIACAHQAEgEAGgCQAGgCAGgBQAGAAAFACQAGACADAEQAEAEACAHQADAGgBAKIAAAtgADNAoIAAgsQAAgJgEgEQgEgGgHAAQgEABgEACQgFADgCADIAAA2IgUAAIAAhOIASAAIABAHQAFgEAGgCQAFgCAHgBQAGAAAFACQAGACADAEQAEAEACAHQACAGAAAKIAAAtgAANAoIAAg9IgKAAIAAgRIAKAAIAAgDQAAgIADgGQABgFAEgDQAEgDAEgCQAFgCAFABIANABIAFABIgCARIgDgBIgIgBQgEAAgDACQgDADAAAGIAAADIARAAIAAARIgRAAIAAA9gAk6AoIgohsIAXAAIAbBSIAbhSIAUAAIgmBsgAmjAoIAAhOIAVAAIAABOgAo+AoIAAgqIgeAeIAAAMIgVAAIAAhOIAVAAIAAAqIAegdIAAgNIATAAIAABOgAtcAoIAAg8IgXAAIAAgSIBDAAIAAASIgXAAIAAA8gAJrgxQgDgDAAgFQAAgEADgDQADgDAGgBQAGABADADQADADAAAEQAAAFgDADQgDAEgGABQgGgBgDgEgAmigxQgDgDAAgFQAAgEADgDQAEgDAGgBQAGABADADQADADAAAEQAAAFgDADQgDAEgGABQgGgBgEgEg");
	this.shape.setTransform(14.3,34.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-85.7,27.7,200,14.2), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-22.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-106.3,-8.6,167.6,47.4), null);


(lib.redLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E60000").s().p("EgsQAElIAAkbMAs6gs2MArnAI7MgBQBMQMgvMAENg");
	this.shape.setTransform(141.8,-42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redLine, new cjs.Rectangle(-141.6,-328.1,566.7,572.1), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-21,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-21,-21,41,41), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-120,-240,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-120,-240,240,480), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// t1_5
	this.instance = new lib.t1_5();
	this.instance.parent = this;
	this.instance.setTransform(-235.8,-76.7,0.848,0.848);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({regX:-0.1,regY:-0.1,x:-69.9,y:-76.8},10,cjs.Ease.get(1)).wait(41));

	// t1_4
	this.instance_1 = new lib.t1_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-270.8,-87.5,0.848,0.848,0,0,0,-0.2,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({regX:-0.1,x:-104.7},10,cjs.Ease.get(1)).wait(41));

	// t1_3
	this.instance_2 = new lib.t1_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-216.4,-126.4,1.06,1.06);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({x:-50.3},10,cjs.Ease.get(1)).wait(1));

	// t1_2
	this.instance_3 = new lib.t1_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-198,-187.8,0.848,0.848,0,0,0,-0.1,-0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({x:-32},10,cjs.Ease.get(1)).wait(21));

	// t1_1
	this.instance_4 = new lib.t1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-180.5,-212.7,0.848,0.848);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({regX:-0.1,x:-14.5},10,cjs.Ease.get(1)).wait(41));

	// logo
	this.instance_5 = new lib.logo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-70.7,-22.5,0.01,0.01);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1},10).wait(71));

	// redLine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E60000").s().p("AMNN2I7r7rIIhAAIWcbrg");
	this.shape.setTransform(-163.5,-97.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E60000").s().p("AMIN2I7r7rIOvAAIQXbrg");
	this.shape_1.setTransform(-163,-97.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E60000").s().p("AMEN2I7r7rIUpAAIKmbrg");
	this.shape_2.setTransform(-162.6,-97.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E60000").s().p("AMBV3I7r7rIVxwCMAJkArtg");
	this.shape_3.setTransform(-162.3,-148.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E60000").s().p("AL9WWI7q7rIT4wMIJOg0MACVAsrg");
	this.shape_4.setTransform(-162,-151.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E60000").s().p("AJZWWI7r7rIUIwCIQcg+MgFBAsrg");
	this.shape_5.setTransform(-145.5,-151.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E60000").s().p("AFtWNI7r7rIWAwfIV9gPMgMUAsZg");
	this.shape_6.setTransform(-121.9,-150.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E60000").s().p("AB0WUI7r7rIWuwMIdAgwMgT+Asng");
	this.shape_7.setTransform(-97,-151.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E60000").s().p("AjCWII7s7rIW4wkMAmlAAjMgdkArsg");
	this.shape_8.setTransform(-65.9,-150.2);

	this.instance_6 = new lib.redLine();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-71.8,-27.7,1,1,-90,0,0,-122.4,-27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.instance_6}]},1).wait(57));

	// bgImg
	this.bgImg = new lib.bgImg_1();
	this.bgImg.name = "bgImg";
	this.bgImg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgImg).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-240,240,480);


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
	this.instance.setTransform(150,299.8,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '0A967074235C46D2A93BC6F019C64878',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
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
an.compositions['0A967074235C46D2A93BC6F019C64878'] = {
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