(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,900);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,137);


(lib.clouds = function() {
	this.initialize(img.clouds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,885,300);


(lib.fari = function() {
	this.initialize(img.fari);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,159);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);// helper functions:

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


(lib.wheelMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wheel();
	this.instance.parent = this;
	this.instance.setTransform(-18,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheelMc, new cjs.Rectangle(-18,-18,36,36), null);


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJATIgFADQgDACgEAAQgIAAgDgEQgEgDAAgHQgBgEACgDIAEgDQABgCAFgBIAHgBIAIAAIAAgCQgBgGgBgDQgCgCgEAAQgGAAgHADIgCgFIAGgDIAJgBQAFAAADABQADABADADIACAGIAAAaIADAFIgFAFgAgIACQgCACAAAFQAAAEACADQACACAEAAQACAAADgBQAEgCABgCIAAgMIgIAAQgFAAgDABg");
	this.shape.setTransform(53.4,-17.2,2.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKASQgCACgFACIgGABIgIgBQgEgBgBgDIgDgFIAAgjIAIAAIAAAcQAAAGACACQADADAEAAQADAAACgBIAFgDIAAgjIAIAAIAAAjIAEAGIgGAEg");
	this.shape_1.setTransform(43.6,-17,2.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAFQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgCAFQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_2.setTransform(35.7,-13.5,2.1,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAWIgGgCIACgGIAGADQAEABAEAAQAEAAADgBQADgCAAgEIgBgDIgDgDIgDgBIgIgDIgFgBIgDgEQgCgCABgDIAAgGIAEgEQADgCACgBIAHgBIAIABIAGADIgDAFQgFgDgGAAQgEAAgCABQgDACABAEIAAADIACABIADACIAIADIAFABIADADQACADAAAEQAAAHgEADQgEAEgJAAQgFAAgFgCg");
	this.shape_3.setTransform(28.9,-17.2,2.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKASIgHAEIgGABIgIgBIgFgEQgBgBgCgEIAAgjIAIAAIAAAcQAAAEACAEQADADAEAAQAEAAACgBIAEgDIAAgjIAIAAIAAAjIAEAGIgGAEg");
	this.shape_4.setTransform(19.8,-17,2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABAEIgBgBIgCACIgLASIgGgCIAOgVIgOgUIAHgDIAMATIAAAAIACgBIAKgSIAGACIgMAVIAOAVIgHACg");
	this.shape_5.setTransform(9.8,-17.2,2.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAWQgEgCgDgCQgCgDgBgFIgBgKIABgIQABgEACgEQADgEAEgBQADgCAFAAQAFAAADACIAGAFIADAIIABAIIgDACIgaAAQABAIACAEQAFAEAEAAIAHgBIAGgCIACAFIgGADIgJABQgFAAgEgCgAAKgDQABgGgDgFQgDgDgFAAQgFAAgCADQgDAFABAGIATAAIAAAAg");
	this.shape_6.setTransform(0.5,-17.2,2.1,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAhIAAg7IgFAAIAAgGIANAAIAABBg");
	this.shape_7.setTransform(-7.6,-19.4,2.1,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAFIgBgFQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIgBAFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_8.setTransform(-11.7,-13.5,2.1,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKAXIgDgBIgBgDIgGgYIgEAUQgBAFgCACQgCACgEAAIgEgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgDIgCgEIgIglIAJgBIAIAnQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIABAAIAKgoIAGAAIAJAmIABACIABAAIAKgpIAHABIgJAlIgDAHQgCACgEAAg");
	this.shape_9.setTransform(-20.7,-17.1,2.1,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKAXIgDgBIgBgDIgGgYIgEAUQgBAFgCACQgCACgEAAIgEgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgDIgCgEIgIglIAJgBIAIAnQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIABAAIAKgoIAGAAIAJAmIABACIABAAIAKgpIAHABIgJAlIgDAHQgCACgEAAg");
	this.shape_10.setTransform(-34.7,-17.1,2.1,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAKAXIgDgBIgBgDIgGgYIgEAUQgBAFgCACQgCACgEAAIgEgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgDIgCgEIgIglIAJgBIAIAnQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIABAAIAKgoIAGAAIAJAmIABACIABAAIAKgpIAHABIgJAlIgDAHQgCACgEAAg");
	this.shape_11.setTransform(-48.8,-17.1,2.1,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgCIACgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIABACIgBADIgDABg");
	this.shape_12.setTransform(132.9,-35.8,2.1,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAJIAGgGIACgCIAAgBIAAAAIgCgBIgGgHIADgCIAJAIIAAACIgBADIgCADIgGAFgAgLAJIAHgIIABgBIgBAAIgHgIIAEgCIAGAGIABACIABACIgBADIgCADIgGAFg");
	this.shape_13.setTransform(127.9,-38.7,2.1,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAGANIgEACIgFABQgEAAgDgCQgCgCAAgFIAAgFIAEgCIADgCIAKAAIAAgCQAAgEgCgBQAAgBAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgEACIgCgEIAFgCIAFAAIAFABQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABAEIAAARIADAEIgEADgAgFACQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIABAFQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEgBIADgCIAAgIIgFAAIgFABg");
	this.shape_14.setTransform(121.6,-38.3,2.1,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAGAPIAAgNIgMAAIAAANIgGAAIAAgdIAGAAIAAAMIAMAAIAAgMIAHAAIAAAdg");
	this.shape_15.setTransform(114.7,-38.4,2.1,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBAWIAAgaIgEAAIAAgEIAJAAIAAAegAAEgOIgBgDIABgDIADgBIACABIABADIgBADQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgDgBgAgJgOIAAgDIAAgDIADgBIADABIABADIgBADIgDABIgDgBg");
	this.shape_16.setTransform(109.4,-39.8,2.1,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHANIgFACIgEABQgFAAgCgCQgDgDAAgEIABgFQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIAFgCIAJAAIAAgCQAAgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgFAAgEACIAAgEIAEgCIAFAAIAGABIADACIABAEIAAARIADAEIgEADgAgEACQgBAAAAABQgBAAAAABQAAAAAAABQgBABAAAAQAAABABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIADgBIADgCIAAgIIgFAAIgEABg");
	this.shape_17.setTransform(104.7,-38.3,2.1,2.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLAWIAAgkIgCgFIAEgCIADADIAEgCIAEgBQAGAAADAEQADADAAAJIgBAGQAAACgDADQgBACgDABIgGABIgDAAIgCAAIAAAMgAgCgQIgDACIAAAUIACAAIADAAQAEAAACgDQACgCAAgGQAAgGgBgDQgCgDgEAAg");
	this.shape_18.setTransform(97.9,-37.1,2.1,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBACIgFAAIAAANIgFAAIAAgeIAFAAIAAANIAEAAIACgBIADgIIACgDQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIABAAIACABIgBADIgBAAIgBAAIgBABIgEAJIgBABIAKAOIgFACg");
	this.shape_19.setTransform(91.7,-38.3,2.1,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAWIgCgBIAAgDIACAAIACAAIAEgBIABgBIABgFIgCgBIgDgBIgCgBIgJgcIAGgBIAIAZIABACIACABIAJgcIAFABIgKAgIgCAFIgDADIgCABIgDABg");
	this.shape_20.setTransform(84.5,-39.7,2.1,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIADIAAgFIARAAIAAAFg");
	this.shape_21.setTransform(78.1,-39.1,2.1,2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAGANIgDACIgFABQgFAAgCgCQgDgDAAgEIABgFIADgCIAEgCIAJAAIAAgCQAAgEgBgBQAAgBAAAAQgBAAAAgBQgBAAgBAAQgBAAAAAAQgEAAgEACIgCgEIAFgCIAFAAIAGABIADACIACAEIAAARIACAEIgEADgAgEACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAABQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIAEgBIACgCIAAgIIgFAAIgEABg");
	this.shape_22.setTransform(72,-38.3,2.1,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCAPIAAgZIgKAAIAAgEIAZAAIAAAEIgKAAIAAAZg");
	this.shape_23.setTransform(66.2,-38.4,2.1,2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAPIgEgDIgCgFIgBgHIABgFIADgGIAEgDIAFgBIAGABIAEADIADAGIABAFIgBAHIgCAFIgFADIgGABgAgFgIQgCAEAAAEIABAFIABAEIACADIADAAQAEAAACgDQACgDAAgGQAAgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_24.setTransform(59.8,-38.3,2.1,2.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAHAWIAAgUIgNAPIAAAFIgFAAIAAgeIAFAAIAAATIANgOIAAgFIAGAAIAAAegAgBgNIgDgBIgDgCIgBgDIAEgCIACADIACABIAFgBIACgDIADABIgDAGQgDABgEAAg");
	this.shape_25.setTransform(52.7,-39.7,2.1,2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAPIgFgDIgCgFIAAgHIAAgFIACgGIAFgDIAFgBIAGABQADABACACIACAGIABAFIgBAHIgCAFQgCACgDABIgGABgAgFgIQgCADAAAFIABAFIABAEIACADIADAAQAEAAACgDQACgCAAgHQAAgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_26.setTransform(45.5,-38.3,2.1,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAVIAAglIgNAAIAAgEIAfAAIAAAEIgNAAIAAAlg");
	this.shape_27.setTransform(38.5,-39.7,2.1,2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AADAGIgCgDIgBgDIABgCIACgCIAGgGIADACIgHAIIgBAAIABABIAIAIIgDACgAgIAGIgDgDQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgCIAIgIIAEACIgGAHIgBABIgBAAIABABIABACIAGAGIgDACg");
	this.shape_28.setTransform(31.8,-38.7,2.1,2.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCAVIAAgpIAFAAIAAApg");
	this.shape_29.setTransform(24.1,-39.7,2.1,2.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAVIAAgpIAFAAIAAApg");
	this.shape_30.setTransform(20.5,-39.7,2.1,2.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAJAVIAAglIgRAAIAAAlIgGAAIAAgpIAdAAIAAApg");
	this.shape_31.setTransform(14.5,-39.7,2.1,2.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAWIAAgkIgCgFIAEgCIADADIADgCIAFgBQAFAAAEAEQADAEAAAIIgBAGIgCAFIgGADIgFABIgDAAIgCAAIAAAMgAgCgQIgDACIAAAUIACAAIADAAQAEAAACgDQACgDAAgFQAAgHgCgCQgBgDgEAAg");
	this.shape_32.setTransform(4.2,-37.1,2.1,2.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGAPIgEgDIgCgFIgBgHIABgFIADgGIAEgDIAFgBIAGABIAEADIADAGIABAFIgBAHQgBAEgCABIgEADIgGABgAgFgIQgCAEAAAEIABAFIABAEIACADIADAAQAEAAACgDQACgDAAgGQAAgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_33.setTransform(-2.9,-38.3,2.1,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCAPIAAgZIgKAAIAAgEIAZAAIAAAEIgKAAIAAAZg");
	this.shape_34.setTransform(-9.3,-38.4,2.1,2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAPIgDgDIgDgEIAAgGIgGAAIAAANIgGAAIAAgeIAGAAIAAANIAGAAIABgFIACgEIADgDIAFgBIAHABQADABABACIACAGIABAFIgBAHIgCAFQgBACgDABIgHABIgFgBgAAAgIQgBAEAAAEIAAAFIABAEIACADIADAAQAFAAACgDQABgDAAgGIAAgEIgBgEIgDgCIgEgBQgEAAgBADg");
	this.shape_35.setTransform(-16.8,-38.3,2.1,2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgCAHIACgHIgCAAIgBgCIABgDIACgCIADACIABADIgBACIAAACIgDAFg");
	this.shape_36.setTransform(-23.4,-42.8,2.1,2.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGAWIgEgEIgBgGIgBgIIAAgHIACgGIADgFQACgCAEgBIACAAIADgBIACgBIABgDIAEABIgBAEIgBABIgBABIgKAEIgCACIgCADIgBAEIAFgDIAEgBIAFABQABAAAAABQABAAAAAAQABABAAAAQABABAAAAIACAEIABAFIgBAGIgDAFIgDAEIgHABgAAAgBIgDABIgCAAIgCACIAAAIIABAFIADADQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQAFAAABgDQACgDAAgGQAAgFgBgCQgCgCgEAAg");
	this.shape_37.setTransform(-28.6,-39.7,2.1,2.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAHAPIAAgTIgNAPIAAAEIgFAAIAAgdIAFAAIAAASIANgOIAAgEIAFAAIAAAdg");
	this.shape_38.setTransform(-35.6,-38.4,2.1,2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAWIAAgkIgCgFIAFgCIACADIADgCIAFgBQAGAAADAEQADAEAAAIIgBAGIgCAFIgGADIgFABIgDAAIgCAAIAAAMgAgCgQIgDACIAAAUIACAAIADAAQAEAAACgDQADgDAAgFQgBgHgCgCQgBgDgEAAg");
	this.shape_39.setTransform(-42.9,-37.1,2.1,2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCAPIAAgZIgKAAIAAgEIAZAAIAAAEIgKAAIAAAZg");
	this.shape_40.setTransform(-49.2,-38.4,2.1,2.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEAPIgEgDIgCgFIgBgHIABgFIACgGIAFgDIAGgBIAFAAIAEACIgCAEIgEgCIgEAAQgDAAgCADQgCADAAAFIAAAFIACAEIACACIAEABIADAAIAEgCIACAEIgEACIgGAAg");
	this.shape_41.setTransform(-54.8,-38.3,2.1,2.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAHAPIAAgTIgNAPIAAAEIgGAAIAAgdIAGAAIAAASIANgOIAAgEIAFAAIAAAdg");
	this.shape_42.setTransform(-61.6,-38.4,2.1,2.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAJATIAAgHIgSAAIAAAHIgFAAIAAgLIADAAIACgEIABgFIACgLIAAgGIARAAIAAAaIAEAAIAAALgAgBgGIgBAGIgEAIIAMAAIAAgVIgHAAg");
	this.shape_43.setTransform(-68.5,-37.7,2.1,2.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAHAWIAAgUIgNAPIAAAFIgFAAIAAgeIAFAAIAAATIANgOIAAgFIAFAAIAAAegAgCgNIgCgBIgDgCIgBgDIAEgCIACADIADABIAEgBIACgDIADABQAAAEgDACQgCABgEAAg");
	this.shape_44.setTransform(-77.8,-39.7,2.1,2.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAHAPIAAgTIgNAPIAAAEIgGAAIAAgdIAGAAIAAASIANgOIAAgEIAGAAIAAAdg");
	this.shape_45.setTransform(-84.9,-38.4,2.1,2.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAHAPIAAgNIgMAAIAAANIgHAAIAAgdIAHAAIAAAMIAMAAIAAgMIAFAAIAAAdg");
	this.shape_46.setTransform(-92,-38.4,2.1,2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAHAWIAAgUIgNAPIAAAFIgFAAIAAgeIAFAAIAAATIANgOIAAgFIAFAAIAAAegAgCgNIgCgBIgDgCIgBgDIAEgCIACADIADABIAEgBIACgDIADABQAAAEgDACQgCABgEAAg");
	this.shape_47.setTransform(-99.1,-39.7,2.1,2.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAAAWIAAgaIgEAAIAAgEIAIAAIAAAegAAAgOIgBgDIABgDIABgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBADIgDABg");
	this.shape_48.setTransform(-104.6,-39.7,2.1,2.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAJATIAAgHIgWAAIAAgeIAFAAIAAAaIANAAIAAgaIAFAAIAAAaIAEAAIAAALg");
	this.shape_49.setTransform(-109.1,-37.7,2.1,2.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAAWIAAgaIgEAAIAAgEIAIAAIAAAegAAAgOIgBgDIABgDIABgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBADIgDABg");
	this.shape_50.setTransform(-115,-39.7,2.1,2.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgBAcIAAgMQgFAAgCgBIgGgEQgCgCAAgDIgBgGIABgFIACgFIAGgDIAHgCIAAgMIAEAAIAAAMIAHACIAEADQADADABACIABAFIgBAGIgDAFIgFAEIgHABIAAAMgAADAMQAFgBACgDQADgDAAgFQAAgEgDgEQgCgCgFgBgAgJgIQgDADAAAFQAAAGADACQACADAGABIAAgXQgGABgCACg");
	this.shape_51.setTransform(-120.9,-38.3,2.1,2.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgHAVQgDgBgDgDIgDgIIgBgJQAAgEACgEIACgIQADgDADgBIAHgCQAFAAADACQAEABACADIADAIIABAIIgBAJQAAAFgDADQgCADgEABQgDABgFAAIgHgBgAgEgQIgEAEIgCAGIgBAGIABAHIACAFIAEAFQACABACAAQAEAAACgBQACgCACgDIACgFIAAgHIAAgGIgCgFQgCgDgCgCQgCgBgEAAQgCAAgCABg");
	this.shape_52.setTransform(-130,-39.7,2.1,2.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCADIgBgDIABgCQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIADABIABACIgBADIgDABIgCgBg");
	this.shape_53.setTransform(133.1,-50.9,2.1,2.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGAPIgEgCIABgEIAEACIAFABIAFgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIgCgBIgCgCIgFgBIgDgBIgCgCIgBgEIABgEIACgCIADgDIAEAAIAGAAIAEACIgCAEQgDgCgFAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABADIABABIACABIAIACIADACIAAAFQAAAFgCACQgDACgGAAIgGgBg");
	this.shape_54.setTransform(128.5,-53.4,2.1,2.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAHAMIgFADIgEAAIgFgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAgFIAAgSIAFAAIAAASQAAAEACACQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAIADAAIADgCIAAgXIAGAAIAAAXIACADIgEADg");
	this.shape_55.setTransform(122.4,-53.3,2.1,2.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMAOIAJgOIgJgNIAFgCIAHAMIAAABIAAAAIABgBIAHgMIAEABIgIAOIAKAOIgGABIgHgMIgBgBIAAAAIAAABIgIANg");
	this.shape_56.setTransform(115.8,-53.4,2.1,2.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgEAPIgFgEIgCgEIgBgHIABgFIADgFIAEgEIAFgBQADAAACACQACAAACADIACAFIABAFIgCABIgRAAQAAAGACACQADADADAAIAEgBIAEgBIACAEIgFACIgFAAgAAHgBQAAgFgCgDQgBgCgEAAQgCAAgCACQgCADAAAFIANAAIAAAAg");
	this.shape_57.setTransform(109.5,-53.4,2.1,2.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgNAVIAAgpIAGAAIAAAlIAVAAIAAAEg");
	this.shape_58.setTransform(103.1,-54.8,2.1,2.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgLAPIAAgdIAMAAQAFAAACABQADACAAAFIgBADIgDADIAEACQACABAAADQAAAEgDADQgCACgFAAgAgGAMIAHAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgEgBIgHAAgAgGgCIAGAAIAEgBQAAAAABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgGAAg");
	this.shape_59.setTransform(93.5,-53.5,2.1,2.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAWIAAgaIgEAAIAAgEIAJAAIAAAegAgBgOIgBgDIABgDIACgBIADABIABADIgBADIgDABg");
	this.shape_60.setTransform(88,-54.8,2.1,2.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgLAWIAAgkIgCgFIAEgCIADADIADgCIAEgBQAHAAADAEQADAEAAAIIgBAGIgDAFIgEADIgGABIgDAAIgCAAIAAAMgAgCgQIgDACIAAAUIACAAIADAAQAEAAACgDQACgCAAgGQAAgGgBgDQgCgDgEAAg");
	this.shape_61.setTransform(83.1,-52.2,2.1,2.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgEAPIgFgDIgCgFIgBgHIABgFIACgFIAEgEIAFgBQAEAAACABIAEAEIACAFIABAFIgCABIgRAAQAAAGACACQACADADAAIAFAAIAEgCIABAEIgEACIgGAAgAAHgBQAAgFgCgDQgCgCgDAAQgDAAgBACQgCAEAAAEIANAAIAAAAg");
	this.shape_62.setTransform(76.4,-53.5,2.1,2.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgMAOIAEgFIABgFIACgTIASAAIAAAeIgGAAIAAgZIgHAAIgCAPQAAAEgCACIgEAFg");
	this.shape_63.setTransform(69.3,-53.5,2.1,2.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAHAPIAAgTIgNAPIAAAEIgGAAIAAgdIAGAAIAAASIANgOIAAgEIAFAAIAAAdg");
	this.shape_64.setTransform(63,-53.5,2.1,2.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAJATIAAgHIgSAAIAAAHIgFAAIAAgLIADAAIACgEIABgFIACgLIAAgGIARAAIAAAaIAEAAIAAALgAgBgGIgBAGIgEAIIAMAAIAAgVIgHAAg");
	this.shape_65.setTransform(56,-52.8,2.1,2.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMAPIAJgPIgJgNIAFgCIAHAMIAAABIAAAAIABgBIAHgMIAEABIgIAOIAJAPIgFABIgHgMIgBgCIAAAAIgBACIgHAMg");
	this.shape_66.setTransform(47.4,-53.4,2.1,2.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAHAPIAAgTIgNAPIAAAEIgFAAIAAgdIAFAAIAAASIANgOIAAgEIAFAAIAAAdg");
	this.shape_67.setTransform(40.9,-53.5,2.1,2.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAHAPIAAgNIgNAAIAAANIgFAAIAAgdIAFAAIAAAMIANAAIAAgMIAGAAIAAAdg");
	this.shape_68.setTransform(33.8,-53.5,2.1,2.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAHAWIAAgUIgNAPIAAAFIgFAAIAAgeIAFAAIAAATIANgOIAAgFIAGAAIAAAegAgCgNIgCgBIgCgCIgCgDIAEgCIABADIAEABIAEgBIACgDIAEABQgBADgDADIgGABg");
	this.shape_69.setTransform(26.6,-54.8,2.1,2.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAAAWIAAgaIgEAAIAAgEIAJAAIAAAegAgBgOIgBgDIABgDIACgBIADABIABADIgBADIgDABg");
	this.shape_70.setTransform(21.1,-54.8,2.1,2.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAJATIAAgHIgWAAIAAgeIAGAAIAAAaIAMAAIAAgaIAGAAIAAAaIADAAIAAALg");
	this.shape_71.setTransform(16.6,-52.8,2.1,2.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAAAWIAAgaIgEAAIAAgEIAJAAIAAAegAgBgOIgBgDIABgDIACgBIADABIABADIgBADIgDABg");
	this.shape_72.setTransform(10.7,-54.8,2.1,2.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgCAcIAAgMQgEAAgDgBIgFgEIgDgFIgBgGIABgFQABgCADgDIAEgDIAHgCIAAgMIAFAAIAAAMIAGACIAFADQADADAAACIABAFIgBAGQAAADgDACIgFAEIgGABIAAAMgAADAMQAFgBADgDQACgCAAgGQAAgFgCgDQgDgCgFgBgAgKgIQgCAEAAAEQAAAFACADQADADAFABIAAgXQgFABgDACg");
	this.shape_73.setTransform(4.9,-53.4,2.1,2.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgGAPIgDgDIgDgFIAAgHIABgFIACgGIAEgDIAFgBIAHABIADADIADAGIABAFIgBAHIgDAFIgDADIgHABgAgFgIQgCAFAAADIAAAFIACAEIADADIACAAQAEAAACgDQACgCAAgHQAAgFgCgDQgCgDgEAAQgEAAgBADg");
	this.shape_74.setTransform(-3.3,-53.5,2.1,2.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgNAPIAJgPIgIgNIAFgCIAHAMIAAABIAAAAIABgBIAHgMIAEABIgIAOIAJAPIgEABIgIgMIgBgCIgIAOg");
	this.shape_75.setTransform(-12.2,-53.4,2.1,2.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAGANIgDACIgFABQgFAAgCgCQgDgDAAgEIABgFIADgCIAEgCIAJAAIAAgCQAAgEgBgBQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgEAAgEACIgCgEIAFgCIAGAAIAFABIADACIACAEIAAARIACAEIgDADgAgEACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAABQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIAEgBIACgCIAAgIIgEAAIgFABg");
	this.shape_76.setTransform(-18.3,-53.5,2.1,2.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAHAPIAAgNIgNAAIAAANIgFAAIAAgdIAFAAIAAAMIANAAIAAgMIAFAAIAAAdg");
	this.shape_77.setTransform(-25.1,-53.5,2.1,2.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgFAPIgFgDIgCgFIgBgHIABgFIADgGIAEgDIAFgBIAGABIAFADIACAGIABAFIgBAHIgCAFIgFADIgGABgAgFgIQgCAEAAAEIABAFIABAEIACADIADAAQAFAAABgDQACgDAAgGQAAgFgCgDQgBgDgFAAQgDAAgCADg");
	this.shape_78.setTransform(-32.2,-53.5,2.1,2.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMAOIADgFQACgCAAgDIACgTIASAAIAAAeIgGAAIAAgZIgIAAIgBAPIgCAGIgEAFg");
	this.shape_79.setTransform(-39.4,-53.5,2.1,2.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAHANIgEACIgFABQgFAAgDgCQgCgDAAgEIABgFQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIAFgCIAJAAIAAgCIgBgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgFACIgBgEIAFgCIAFAAQAEAAACABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAAAFIAAAMIADAEIgEADgAgEACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQAAABABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgBIADgCIAAgIIgFAAIgEABg");
	this.shape_80.setTransform(-45.4,-53.5,2.1,2.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgDAPIgFgDIgCgFIgBgHIABgFIADgGIAEgDIAGgBIAFAAIAEACIgCAEIgDgCIgEAAQgEAAgCADQgCAEAAAEIAAAFIACAEIADACIADABIADAAIAEgCIACAEIgEACIgGAAg");
	this.shape_81.setTransform(-51.4,-53.5,2.1,2.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgLAPIAAgdIAMAAQAEAAAEABQACACAAAFIgBADIgCADIADACQABABAAADQAAAFgCACQgDACgFAAgAgGAMIAHAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgEgBIgHAAgAgGgCIAGAAIAEgBIABgDQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgEgBIgGAAg");
	this.shape_82.setTransform(-60.2,-53.5,2.1,2.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgEAPIgFgDIgCgFIgBgHIABgFIADgFIAEgEIAFgBQADAAACABIAEAEIACAFIABAFIgCABIgRAAQAAAFACADQADADADAAIAEAAIAEgCIACAEIgEACIgGAAgAAHgBQAAgGgCgCQgBgCgEAAQgCAAgCACQgCADAAAFIANAAIAAAAg");
	this.shape_83.setTransform(-69.5,-53.5,2.1,2.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgRAPIAAgdIAGAAIAAAaIAJAAIAAgaIAFAAIAAAaIAJAAIAAgaIAGAAIAAAdg");
	this.shape_84.setTransform(-77.5,-53.5,2.1,2.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAAAWIAAgaIgEAAIAAgEIAJAAIAAAegAgBgOIgBgDIABgDIACgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBADIgDABg");
	this.shape_85.setTransform(-84.1,-54.8,2.1,2.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAHAPIAAgNIgNAAIAAANIgGAAIAAgdIAGAAIAAAMIANAAIAAgMIAFAAIAAAdg");
	this.shape_86.setTransform(-89,-53.5,2.1,2.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgLAPIAAgdIAGAAIAAAMIAMAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAABAAIACADIAAADQAAAFgDACQgCACgFAAgAgFAMIAGAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgFAAg");
	this.shape_87.setTransform(-95.5,-53.5,2.1,2.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgMAOIAEgFIABgFIACgTIASAAIAAAeIgGAAIAAgZIgHAAIgCAPIgBAGIgEAFg");
	this.shape_88.setTransform(-102.6,-53.5,2.1,2.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAGANIgEACQgBABgEAAQgEAAgDgCQgCgDAAgEQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAIAFgCIAJAAIAAgCQAAgEgBgBQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgFAAgEACIgBgEIAFgCIAFAAIAFABQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIABAFIAAAMIACAEIgEADgAgFACQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIABAFQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEgBIADgCIAAgIIgFAAg");
	this.shape_89.setTransform(-108.5,-53.5,2.1,2.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgCAPIAAgZIgJAAIAAgEIAYAAIAAAEIgKAAIAAAZg");
	this.shape_90.setTransform(-114.4,-53.5,2.1,2.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgEAPIgEgDIgDgFIAAgHIAAgFIADgFIADgEIAFgBQAEAAADABIADAEIACAFIAAAFIgBABIgRAAQAAAGADACQABADADAAIAFAAIAEgCIABAEIgDACIgHAAgAAHgBQAAgFgBgDQgCgCgEAAQgDAAgBACQgCAEAAAEIANAAIAAAAg");
	this.shape_91.setTransform(-120.5,-53.5,2.1,2.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AANAaIAAgJIgZAAIAAAJIgGAAIAAgNIAEAAIAEgIIAEgeIAVAAIAAAmIAEAAIAAANgAgEABIgCAJIgCADIASAAIAAghIgLAAg");
	this.shape_92.setTransform(-128.3,-53.9,2.1,2.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgLASIAAgjIAWAAIAAAEIgQAAIAAALIALAAIAAADIgLAAIAAAOIARAAIAAADg");
	this.shape_93.setTransform(113.4,54.1,2.1,2.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAIASIAAgRIgPAAIAAARIgFAAIAAgjIAFAAIAAAPIAPAAIAAgPIAFAAIAAAjg");
	this.shape_94.setTransform(106.1,54.1,2.1,2.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAGABIgDAAIAAARIgFAAIAAgRIgDAAIgMARIgEgBIALgRIAAAAIgGgMQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAIgBAAIgBAAIAAgDIABAAIABAAIAEAAIABACIAFALIACACIACABIABAAIAAgQIAFAAIAAAQIACAAIABgBIACgCIAFgLIACgCIADAAIABAAIACAAIAAADIgCAAIgCAAIgBACIgEALIgBAAIgBABIANARIgGABg");
	this.shape_95.setTransform(97.3,54.1,2.1,2.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAIASIAAgYIgPAUIAAAEIgFAAIAAgjIAFAAIAAAZIAPgUIAAgFIAFAAIAAAjg");
	this.shape_96.setTransform(88.4,54.1,2.1,2.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgMASIAAgjIAMAAIAEAAIADACQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAIABAEIgBAFIgEADQADAAACADQABACABADIgBAFIgDADIgEACIgEAAgAgGAPIAGAAQAEAAABgCQACgCAAgDIAAgDIgCgCIgCgBIgJAAgAgGgBIAGAAIADgBIABgBIABgCIABgCQAAgEgCgBQgCgCgDAAIgFAAg");
	this.shape_97.setTransform(81.7,54.1,2.1,2.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgGARIgFgDIgCgGIgBgIIABgHQAAgDADgDQACgDACgBQADgBADAAIAHABIAFAEIACAGIABAHIgBAIQAAADgDADQgBACgDABQgDACgEAAQgDAAgDgCgAgEgNIgDADIgBAFIgBAFIABAGQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAQABABAAAAIAEABQABAAABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIABgGIgBgFIgBgFIgDgDQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQgCAAgCACg");
	this.shape_98.setTransform(74.3,54.1,2.1,2.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgLASIAAgjIAKAAIAFAAIADACIADADIAAAEIgBAFIgDADQADAAACADQACACAAADIgBAFIgDADIgEACIgFAAgAgHAPIAHAAQAEAAACgCQABgDAAgCIgBgDIgBgCIgDgBIgJAAgAgHgBIAHAAIACgBIACgBIACgCIAAgCQgBgEgBgBQgCgCgDAAIgGAAg");
	this.shape_99.setTransform(67.1,54.1,2.1,2.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAIASIAAgYIgPAUIAAAEIgFAAIAAgjIAFAAIAAAZIAPgUIAAgFIAFAAIAAAjg");
	this.shape_100.setTransform(59.6,54.1,2.1,2.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AALAWIAAgHIgUAAIAAAHIgGAAIAAgLIADAAIACgDIACgEIABgEIACgVIASAAIAAAgIADAAIAAALgAgEAFIgCAGIAOAAIAAgcIgJAAg");
	this.shape_101.setTransform(51.8,54.8,2.1,2.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAIAXIAAgYIgPAUIAAAEIgFAAIAAgjIAFAAIAAAZIAPgUIAAgFIAFAAIAAAjgAgBgQIgDgBIgBgCIgBgCIACgBIACACIADABQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIACgCIADABIgDAEQgCACgDAAg");
	this.shape_102.setTransform(42.2,53.1,2.1,2.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgGATIgCgBIABgDIABAAIADAAIACAAIABgCIAAgEIgBAAIgCgBIgDgEIgGgUIAEgCIAHAWIABABIAAAAIACABIAHgYIAFABIgLAgIgCACIgCABIgCABg");
	this.shape_103.setTransform(35.1,54.1,2.1,2.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAIASIAAgPIgFACIgDAAQgFAAgCgBQgDgDgBgCIgBgCIAAgOIAGAAIAAAJIAAAEIAAACIACACIAEABIACAAIACAAIAEgBIAAgRIAEAAIAAAjg");
	this.shape_104.setTransform(28.2,54.1,2.1,2.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AALAWIAAgHIgVAAIAAAHIgFAAIAAgLIADAAIACgDIACgEIABgEIACgVIASAAIAAAgIADAAIAAALgAgEAFIgBAEIgCACIAPAAIAAgcIgJAAg");
	this.shape_105.setTransform(20.8,54.8,2.1,2.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgCASIAAgjIAFAAIAAAjg");
	this.shape_106.setTransform(15.7,54.1,2.1,2.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgLASIAAgjIALAAIADAAIAFACQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIABAEIgCAFIgDADQADAAACADQABACAAADIgBAFIgCADIgDACIgGAAgAgHAPIAHAAQAEAAACgCQACgCAAgDIgBgDIgCgCIgDgBIgJAAgAgHgBIAHAAIACgBIACgBIACgCIAAgCQAAgDgCgCQgCgCgDAAIgGAAg");
	this.shape_107.setTransform(10.9,54.1,2.1,2.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgMACIAAgDIAZAAIAAADg");
	this.shape_108.setTransform(2.1,54.7,2.1,2.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AACATQgDAAgEgCQgDgBgBgCQgCgCgBgEIgBgIIABgHIADgFQABgEAEgBQADgBADAAIAGABIAEABIgCAEIgEgCIgEgBIgDABIgEADIgCAEIAAAHQgBAIADADQACAEAFAAQAEAAADgBIAAgLIgHAAIAAgDIAMAAIAAAQIgDABIgGACg");
	this.shape_109.setTransform(-6.8,54.1,2.1,2.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAHASIgBAAIgBgBIgCgCIgLgYIAAAbIgEAAIAAgjIAFAAIAPAeIABABIAAgBIAAgeIAEAAIAAAeQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgDABg");
	this.shape_110.setTransform(-14.3,54.1,2.1,2.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgCASIAAgjIAFAAIAAAjg");
	this.shape_111.setTransform(-19.7,54.1,2.1,2.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgIASIgDgBIgBgCIAAgCIACgDIAQgXIgRAAIAAgEIAYAAIAAADIgTAbIAAABIAAABIATAAIAAADg");
	this.shape_112.setTransform(-24.4,54.1,2.1,2.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAHAHIgOAAIgEAMIgEgBIAKgeIACgFQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIACAAIABABIACABIALAiIgFABgAAGACIgGgQIAAAAIAAAAIgGAQIAMAAg");
	this.shape_113.setTransform(-31.2,54.1,2.1,2.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAMASIgCgaIgFALIgCADIgCABIgCAAIgCgCIgHgNIgBAaIgFAAIACgjIAFAAIAJATIAAAAIAAAAIAKgTIAFAAIACAjg");
	this.shape_114.setTransform(-39.2,54.1,2.1,2.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAHAHIgOAAIgDAMIgFgBIAKgeIACgFQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIACAAIABABIABABIAMAiIgGABgAAFACIgEgQIgBAAIAAAAIgGAQIALAAg");
	this.shape_115.setTransform(-47.2,54.1,2.1,2.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgLASIAAgjIAWAAIAAAEIgQAAIAAALIAMAAIAAADIgMAAIAAAOIARAAIAAADg");
	this.shape_116.setTransform(-56.1,54.1,2.1,2.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgEARIgFgDIgCgGIgBgIIABgHIADgFQABgEAEgBQADgBADAAIAFABIAEABIgBAEIgEgCIgEgBIgDABIgEADIgCAEIgBAHQAAAHADAEQACAEAFAAIACAAIAEgBIACgBIACADIgEACIgHABQgDAAgDgCg");
	this.shape_117.setTransform(-62.6,54.1,2.1,2.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAHASIgBAAIgCgBIgBgCIgLgYIAAAbIgEAAIAAgjIAFAAIAPAeIABABIAAgfIAEAAIAAAeQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgDABg");
	this.shape_118.setTransform(-69.9,54.1,2.1,2.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgLASIAAgjIAWAAIAAAEIgRAAIAAALIAMAAIAAADIgMAAIAAAOIASAAIAAADg");
	this.shape_119.setTransform(-76.7,54.1,2.1,2.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgBASIAAgjIADAAIAAAjg");
	this.shape_120.setTransform(-81.7,54.1,2.1,2.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAAAGIAAgCIgBgBIgCgBIgEAAIAAAQIgFAAIAAgkIALAAIAEABIAEABIACAEIABAFIgBADIgBADIgDABIgDABIACACIABACIAIANIgFABgAgHgBIAFAAQADAAACgBQACgCAAgDIAAgEIgCgCIgDgBIgCAAIgFAAg");
	this.shape_121.setTransform(-86.4,54.2,2.1,2.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgKASIAAgjIAUAAIAAAEIgQAAIAAALIANAAIAAADIgNAAIAAAOIARAAIAAADg");
	this.shape_122.setTransform(-93.1,54.1,2.1,2.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgLASIAAgjIALAAIAEAAIAEACIADADIABAGIgBAEIgCACIgEADIgFABIgGAAIAAAOgAgGAAIAFAAQAEAAACgBQACgBAAgEIgBgEIgCgCIgCgBIgCgBIgGAAg");
	this.shape_123.setTransform(-99.5,54.1,2.1,2.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AABAEIgBgBIAAAAIgBABIgJAPIgEgCIAKgRIgKgQIAFgCIAIAPIABABIAAAAIABgBIAAAAIAJgPIADACIgJAQIALASIgFABg");
	this.shape_124.setTransform(-106.4,54.1,2.1,2.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgLASIAAgjIAWAAIAAAEIgQAAIAAALIAMAAIAAADIgMAAIAAAOIARAAIAAADg");
	this.shape_125.setTransform(-112.8,54.1,2.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-133.8,-59.4,267.7,118.9), null);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAyIAAhjIAGAAIAAArIASAAQAhAAAAAaQAAANgHAIQgJAJgPAAgAgWAsIARAAQAOAAAHgGQAGgIAAgKQAAgNgKgFQgGgCgMAAIgQAAg");
	this.shape.setTransform(50,0.8,2.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkA8IAAgUIhNAAIAAhjIAGAAIAABdIA7AAIAAhdIAHAAIAABdIALAAIAAAag");
	this.shape_1.setTransform(31,2.9,2.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAlQgPgPAAgWQAAgUAPgPQAQgPAUgBQASAAAQANIAAAJQgOgPgUAAQgSAAgNANQgNANAAATQAAAUAPANQANAMAQAAQAUgBAOgPIAAAJQgOAMgTAAQgVAAgQgOg");
	this.shape_2.setTransform(7.8,0.8,2.1,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAyIAAhjIAFAAIAABjg");
	this.shape_3.setTransform(-7.2,0.8,2.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmgeIgJBQIgHAAIAMhmIAqBbIArhbIAMBmIgHAAIgJhQIgnBUg");
	this.shape_4.setTransform(-25.6,0.8,2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglAvIBAhbIg8AAIAAgGIBHAAIhGBlg");
	this.shape_5.setTransform(-57.2,1,2.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AleBgIAAi/IK9AAIAAC/g");
	this.shape_6.setTransform(0,0,2.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-73.6,-20.2,147.2,40.3), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAyIAAhjIALAAIAABYIAaAAIAAALg");
	this.shape.setTransform(79.9,1.1,2.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAlQgKgPAAgWQAAgWAKgOQAKgPAPAAQAPAAALAPQAKAPgBAVQABAVgKAQQgLAPgPAAQgPAAgKgPgAgRgeQgGAMgBASQABASAGAMQAIALAJAAQAKAAAHgLQAIgLAAgTQAAgSgIgMQgHgLgKAAQgJAAgIALg");
	this.shape_1.setTransform(63.4,1.1,2.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYArQgFgEgEgGIAJgGQACADAFAFQAHAFAJAAQAKABAHgIQAHgIAAgKQAAgLgHgFQgHgIgKABQgJAAgKAGIAOgwIAnAAIAAAKIggAAIgGAWIAGgBQAOAAAKAKQAJAJAAAPQAAAQgLAKQgLAKgOAAQgMAAgKgIg");
	this.shape_2.setTransform(43.9,1.3,2.1,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAiQgCgEAAgGIALAAQABAHACADQAGAHAJAAQAIAAAGgGQAFgFAAgJQAAgMgKgFQgEgCgGAAIAAgJQAFABAFgDQAJgDAAgMQAAgRgRAAQgIAAgEAGQgDAEgBAGIgLAAQABgIADgGQAIgMAPAAQANAAAIAJQAHAHAAALQAAAQgNAGQAOAGAAARQAAAOgJAJQgIAIgNAAQgUAAgHgSg");
	this.shape_3.setTransform(26.7,1.1,2.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXAyIgXgpIgWApIgNAAIAegzIgbgwIANAAIATAlIAWglIAMAAIgbAwIAdAzg");
	this.shape_4.setTransform(1.4,1.1,2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQAyIgegsIgDAAIAAAsIgLAAIAAhjIAQAAQAQAAAHAGQALAHAAAOQAAAMgHAIQgGAGgLABIAfAtgAgRgDIAHAAQAVAAAAgSQAAgKgIgEQgEgEgJAAIgHAAg");
	this.shape_5.setTransform(-14.3,1.1,2.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVArQgHgGgCgLIAKgDQACAHAEAFQAGAGAIAAQAJAAAGgGQAFgGAAgIQAAgHgFgEQgCgDgKgEIgIgEQgJgDgEgFQgHgHAAgJQAAgMAIgHQAIgHALAAQAJAAAHAFQAGADAEAIIgJAFQgDgFgDgCQgEgDgHAAQgHAAgEAEQgFAEAAAHQAAAFAEAEQADADAHADIAJAEQAKAFAFAEQAHAHAAALQAAAOgJAIQgJAJgNAAQgNAAgIgJg");
	this.shape_6.setTransform(-40.2,1.1,2.1,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAlQgHgJABgPIAAg/IALAAIAAA9QgBARAJAHQAGAFAJAAQAKAAAGgFQAIgHAAgRIAAg9IAMAAIAAA/QgBARgFAHQgKAOgUAAQgSAAgKgOg");
	this.shape_7.setTransform(-59.4,1.3,2.1,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXAyIgXgpIgWApIgNAAIAegzIgbgwIAMAAIAUAlIAVglIANAAIgbAwIAdAzg");
	this.shape_8.setTransform(-78.2,1.1,2.1,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAyIAAhjIAzAAIAAAKIgnAAIAAAeIAmAAIAAAKIgmAAIAAAmIAnAAIAAALg");
	this.shape_9.setTransform(-94,1.1,2.1,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAyIAAhjIAMAAIAABYIAaAAIAAALg");
	this.shape_10.setTransform(-107.5,1.1,2.1,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApEBgIAAi/ISJAAIAAC/g");
	this.shape_11.setTransform(0,0,2.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-121.9,-20.1,243.9,40.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAyIAAhjIALAAIAABYIAaAAIAAALg");
	this.shape.setTransform(79.9,1.1,2.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAlQgKgPAAgWQAAgVAKgPQAKgPAPAAQAPAAALAPQAKAPAAAVQAAAWgKAPQgLAPgPAAQgPAAgKgPgAgQgdQgIALAAASQAAATAIAMQAHALAJAAQAKAAAHgLQAHgLAAgUQAAgSgHgLQgHgLgKAAQgKAAgGALg");
	this.shape_1.setTransform(63.4,1,2.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYArQgFgEgEgGIAJgGQACADAFAFQAHAGAJAAQAKAAAHgIQAHgHAAgLQAAgLgHgGQgHgHgKAAQgJAAgKAHIAOgwIAnAAIAAAKIggAAIgFAWIAFgBQAPAAAJAKQAJAJAAAPQAAAQgLAKQgKAKgPAAQgNAAgJgIg");
	this.shape_2.setTransform(43.8,1.2,2.1,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAjQgBgFAAgGIAKAAQACAGACAEQAGAIAJAAQAIAAAGgGQAFgGAAgJQAAgMgKgEQgFgDgFABIAAgJQAGAAAEgCQAJgGgBgJQAAgRgRAAQgHAAgEAFQgEAGAAAFIgMAAQABgIAFgHQAHgMAOAAQAOAAAIAJQAHAHAAALQAAAQgNAHQAFABAEAEQAFAGABAMQgBANgIAJQgKAIgMAAQgUAAgIgRg");
	this.shape_3.setTransform(26.7,1,2.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXAyIgXgpIgWApIgNAAIAegzIgbgwIANAAIATAlIAWglIAMAAIgbAwIAcAzg");
	this.shape_4.setTransform(1.4,1.1,2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQAyIgegsIgDAAIAAAsIgLAAIAAhjIAQAAQAQAAAHAGQALAGAAAPQAAAMgGAHQgIAIgKAAIAfAtgAgRgDIAHAAQAWAAgBgSQABgLgJgEQgDgDgKAAIgHAAg");
	this.shape_5.setTransform(-14.4,1.1,2.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAsQgHgHgCgLIALgDQAAAHAGAGQAFAFAIAAQAKAAAFgGQAFgFAAgIQAAgHgFgFIgMgHIgIgDQgKgFgDgDQgHgHAAgKQAAgLAIgIQAIgHALAAQAJAAAHAFQAFADAFAIIgJAGQgCgEgEgEQgEgDgHAAQgHAAgEAEQgFAEAAAHQAAAEAEAFQADAEAHACIAJAFQALAEAEAEQAHAHAAALQAAAOgJAIQgJAJgNAAQgNAAgIgIg");
	this.shape_6.setTransform(-40.3,1,2.1,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAlQgHgJAAgPIAAg/IAMAAIAAA8QAAASAIAHQAGAFAJAAQAKAAAHgFQAHgHAAgSIAAg8IAMAAIAAA/QAAAPgHAJQgJAOgUAAQgTAAgJgOg");
	this.shape_7.setTransform(-59.4,1.2,2.1,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXAyIgXgpIgWApIgNAAIAegzIgbgwIANAAIATAlIAWglIAMAAIgbAwIAdAzg");
	this.shape_8.setTransform(-78.3,1.1,2.1,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAyIAAhjIAzAAIAAAKIgoAAIAAAeIAnAAIAAAKIgnAAIAAAmIAoAAIAAALg");
	this.shape_9.setTransform(-94,1.1,2.1,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAyIAAhjIALAAIAABYIAaAAIAAALg");
	this.shape_10.setTransform(-107.5,1.1,2.1,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApEBgIAAi/ISJAAIAAC/g");
	this.shape_11.setTransform(0,0,2.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-122,-20.1,244,40.3), null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAyIAAhjIAGAAIAAArIASAAQAhAAAAAaQAAANgHAIQgJAJgPAAgAgWAsIARAAQAOAAAHgHQAHgGAAgLQAAgMgLgGQgGgCgMAAIgQAAg");
	this.shape.setTransform(80.5,0.2,2.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeAyIAAgzIg7AAIAAAzIgHAAIAAhjIAHAAIAAAqIA7AAIAAgqIAHAAIAABjg");
	this.shape_1.setTransform(61,0.2,2.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAyIAAhjIAvAAIAAAGIgoAAIAAAkIAnAAIAAAGIgnAAIAAAtIAoAAIAAAGg");
	this.shape_2.setTransform(43.6,0.2,2.1,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAxAyIgrgvIgDACIAAAtIgFAAIAAgtIgCgCIgsAvIgIAAIAvgzIgtgwIAJAAIArAvIAAgvIAFAAIAAAvIAqgvIAJAAIgsAwIAvAzg");
	this.shape_3.setTransform(23.2,0.2,2.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAjA0IgOghIgpAAIgOAhIgHAAIAphnIAqBngAATANIgTgvIgSAvIAlAAg");
	this.shape_4.setTransform(1.4,-0.1,2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAyIAAhjIATAAQAMAAAIAGQAIAIAAAMQAAAMgIAHQgIAGgMAAIgNAAIAAAwgAgRgDIAOAAQAJAAAFgFQAGgFAAgKQAAgUgWAAIgMAAg");
	this.shape_5.setTransform(-12.6,0.2,2.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAyIAAhjIAWAAQALAAAIAHQAHAGAAAMQAAAPgMAHQAKABAGAGQAFAHAAAKQAAANgIAIQgJAHgNAAgAgWAsIARAAQAOAAAHgGQAGgGAAgJQAAgOgKgFQgGgDgMAAIgQAAgAgWgEIAQAAQAIAAAFgEQAGgFAAgKQAAgKgGgGQgGgEgKAAIgNAAg");
	this.shape_6.setTransform(-28.4,0.2,2.1,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAyIAAgtIgIAAIgdAtIgIAAIAdgtQgEAAgGgCQgFgCgEgDQgHgIAAgLQAAgRANgHQAHgEALAAIARAAIAABjgAgEgpQgLAGAAAOQAAAKAHAGQAFAFALAAIAMAAIAAgrIgLAAQgJAAgEACg");
	this.shape_7.setTransform(-53,0.2,2.1,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAyIAAgGIAGAAQAFAAAFgDQAFgGAAgVIAAg/IA4AAIAABjIgHAAIAAhdIgqAAIAAA5QAAAXgHAHQgFAHgKgBg");
	this.shape_8.setTransform(-70.5,0.3,2.1,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAlA8IAAgUIhKAAIAAAUIgGAAIAAgaQALAAAFgNQAEgJAAgRIAAg2IA3AAIAABdIAMAAIAAAagAgRgFQAAASgDAJQgDAHgFAFIA2AAIAAhXIgrAAg");
	this.shape_9.setTransform(-88.7,2.3,2.1,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("An6BgIAAi/IP1AAIAAC/g");
	this.shape_10.setTransform(0,0,2.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-106.3,-20.2,212.7,40.3), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAyIANgcIgmhHIAHAAIAiBAIAdhAIAHAAIgtBjg");
	this.shape.setTransform(62.7,0.5,2.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAyIAAhjIATAAQAMAAAIAGQAIAIAAAMQAAAMgIAHQgHAGgNAAIgNAAIAAAwgAgRgDIAOAAQAJAAAGgFQAGgFAAgKQAAgJgGgGQgGgFgKAAIgNAAg");
	this.shape_1.setTransform(47.9,0.5,2.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkAlQgPgQAAgVQAAgUAPgQQAPgPAVABQAWgBAPAPQAPAPAAAVQAAAWgPAPQgPAPgWgBQgVABgPgPgAgfgfQgNANAAASQAAATANANQAMAOATAAQATAAAOgOQAMgNAAgTQAAgSgMgNQgOgOgTAAQgTAAgMAOg");
	this.shape_2.setTransform(27.4,0.5,2.1,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAyIAAhdIgaAAIAAgGIA5AAIAAAGIgaAAIAABdg");
	this.shape_3.setTransform(8.2,0.5,2.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAlQgPgQAAgVQAAgUAPgQQAPgPAVABQAVgBANANIAAAJQgOgPgUgBQgSAAgNAOQgNANAAASQAAAVAPANQANAMAQAAQATAAAPgPIAAAIQgOAMgUAAQgUABgQgPg");
	this.shape_4.setTransform(-9,0.5,2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkAlQgPgQAAgVQAAgUAPgQQAPgPAVABQAWgBAPAPQAPAPAAAVQAAAWgPAPQgPAPgWgBQgVABgPgPgAgfgfQgNANAAASQAAATANANQANAOASAAQAUAAANgOQAMgNAAgTQAAgSgMgNQgNgOgUAAQgSAAgNAOg");
	this.shape_5.setTransform(-32.3,0.5,2.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAyIAAhjIAUAAQAMAAAIAGQAJAIAAAMQAAAMgIAHQgJAGgMAAIgNAAIAAAwgAgRgDIAOAAQAIAAAGgFQAHgFgBgKQABgJgHgGQgGgFgJAAIgNAAg");
	this.shape_6.setTransform(-51,0.5,2.1,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAeAyIAAhdIg7AAIAABdIgHAAIAAhjIBJAAIAABjg");
	this.shape_7.setTransform(-69.6,0.5,2.1,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AmjBgIAAi/INHAAIAAC/g");
	this.shape_8.setTransform(0,0,2.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-88.2,-20.1,176.4,40.3), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAyIAAhjIAvAAIAAAGIgoAAIAAAkIAnAAIAAAGIgnAAIAAAtIAoAAIAAAGg");
	this.shape.setTransform(16.7,0.6,2.1,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2AyIAAhjIAGAAIAABdIAuAAIAAhdIAGAAIAABdIAtAAIAAhdIAGAAIAABjg");
	this.shape_1.setTransform(-5.7,0.6,2.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAyIAAhjIAGAAIAAArIASAAQAhAAAAAaQAAANgHAIQgJAJgPAAgAgWAsIARAAQAOAAAHgHQAGgGAAgLQAAgNgKgFQgGgCgMAAIgQAAg");
	this.shape_2.setTransform(-27.8,0.6,2.1,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmAyIAAgGIAGAAQAFAAAFgDQAFgGAAgVIAAg/IA4AAIAABjIgHAAIAAhdIgqAAIAAA5QAAAXgHAHQgFAHgKgBg");
	this.shape_3.setTransform(-47.7,0.6,2.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAyIAAhjIAFAAIAABjg");
	this.shape_4.setTransform(-59.8,0.6,2.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAyIAAhjIAvAAIAAAGIgpAAIAAAlIASAAQAhAAAAAaQAAANgHAIQgJAJgPAAgAgWAsIARAAQAOAAAHgHQAGgFAAgMQAAgNgKgFQgGgCgMAAIgQAAg");
	this.shape_5.setTransform(-71.1,0.6,2.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmjBgIAAi/INHAAIAAC/g");
	this.shape_6.setTransform(0,0,2.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-88.2,-20.1,176.4,40.3), null);


(lib.logoW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BGQgegcAAgqQAAgqAdgbQAbgbAnAAQAogBAdAaIgPATQgYgTgfAAQgbAAgUAUQgUAUAAAgQAAAcAUAVQAVAWAbAAQAVAAAPgLQAPgJAFgSIg5AAIAAgYIBXAAQAAAlgaAaQgZAYgjAAQgkAAgdgbg");
	this.shape.setTransform(57.6,11.6,0.253,0.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BeIhiiHIgDgGIABAHIAACGIgaAAIAAi8IAWAAIBgCGIAEAGIgBgHIAAiFIAaAAIAAC8g");
	this.shape_1.setTransform(51.9,11.6,0.253,0.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBeIAAi8IAZAAIAAC8g");
	this.shape_2.setTransform(47.4,11.6,0.253,0.253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJBeIBmiiIgGAAIhQAAIAAgaICDAAIhjCgIgDADIAGAAIBdAAIAAAZg");
	this.shape_3.setTransform(43.4,11.6,0.253,0.253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1BeIgYg9Ig6AAIgYA9IgbAAIBIi8IAQAAIBJC8gAgUAJIAoAAIgTgzIgBgGg");
	this.shape_4.setTransform(38.4,11.6,0.253,0.253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDBeIAAiJIAAgHIgCADIg8BPIgJAAIg8hMIgCgFIAAAIIAACHIgaAAIAAi8IAWAAIBGBdIBGhdIAXAAIAAC8g");
	this.shape_5.setTransform(32.5,11.6,0.253,0.253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0BeIgWg9Ig8AAIgXA9IgbAAIBIi8IAQAAIBJC8gAgVAJIApAAIgUgzIAAgGg");
	this.shape_6.setTransform(26.6,11.6,0.253,0.253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBMAAIAAAXIhMAAIAAA4IBTAAIAAAYg");
	this.shape_7.setTransform(19.3,11.6,0.253,0.253);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BIQgcgdAAgrQgBgpAbgbQAagdAoABQAtgBAZAeIgTARQgUgVgfAAQgbAAgTAUQgUAUAAAfQAAAhAWAVQAUASAXAAQAiAAAWgaIASAQQgLAQgTAJQgUAKgYAAQgkAAgbgZg");
	this.shape_8.setTransform(14.1,11.6,0.253,0.253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA2BeIhmiNIABAHIAACGIgaAAIAAi8IAWAAIBkCMIAAgHIAAiFIAZAAIAAC8g");
	this.shape_9.setTransform(8.4,11.6,0.253,0.253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_10.setTransform(3,11.6,0.253,0.253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBeIAAi8IAZAAIAAC8g");
	this.shape_11.setTransform(-1,11.6,0.253,0.253);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBeIhMhYIAABYIgZAAIAAi8IA8AAQAZAAARARQAQAQAAAXQAAAWgRAQQgPAPgVAAIBFBPgAgpgEIAeAAQARAAAKgKQAJgJAAgQQAAgLgJgJQgKgKgQAAIgfAAg");
	this.shape_12.setTransform(-4.9,11.6,0.253,0.253);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_13.setTransform(-10.1,11.6,0.253,0.253);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag6BeIAAi8IA4AAQAcABARAQQAQAQAAAaQAAAXgRAQQgRAQgXAAIgiAAIAABKgAgggDIAcAAQAQAAAKgJQAKgJAAgQQAAgPgKgIQgLgJgRAAIgaAAg");
	this.shape_14.setTransform(-14.7,11.6,0.253,0.253);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyBeIgyhNIgyBNIgeAAIBBhiIg5haIAfAAIAlA4IAFAKIArhCIAdAAIg5BZIBBBjg");
	this.shape_15.setTransform(-19.9,11.6,0.253,0.253);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2BeIAAi8IBoAAIAAAZIhOAAIAAA8IBNAAIAAAXIhNAAIAAA4IBTAAIAAAYg");
	this.shape_16.setTransform(-24.7,11.6,0.253,0.253);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AG5DVQhCgBg6gsQg7gtAAg3IAAjuIj7CeIE1DhIjtAAIjGiSIjnCSIxjAAQh3AAg8g7Qg5g3AAhlIAAjSIChAAIAAD1QAABfBdAAIFRAAQAfhSBAgqIhrAAQAKhbBRg+QBTg+B6gBII5AAIDGCRIDliRIEBAAIAAD8QAABYBlgBIEKAAIAAlTICgAAIAAFTIIVAAQAWABAOgOQAMgNAAgSQgBgtgxAAIniAAQAAhaA3hEQBKhcCXAAIGLAAIAABUIl0AAQg1AAggAXQgdAWgKAnIGFAAQBFAAAoAoQAlAkAAA0QABA0glAkQgoAphFAAgAucCAIIhAAIC5h0IkBi6IAAAuIllAAQg3AAgjAdQgbAXgHAgIHCAAIAABRIlSAAQhdAAgLBbg");
	this.shape_17.setTransform(16.8,-3,0.253,0.253);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AmxEoQiYh5AAivQABi2Cjh5QCmh7D/AAQB/AABHATQAhAIADASQABANgNAQQjrEig5BvQgVApANATQANASAwAAIHJAAQAbAAAPgoQAOglAAg3QAAhvg5hWQg/heh9gzIAagoQCMA4BUBpQBUBpAAB5QAABegqBLQgQAdgQANQgTAPgZAAIo9AAQhqAAgpg6Qgqg5AuhSQAqhGBRhyQBKhoA5hHQAYgfgDgKQgDgJgaAAQjLAAiRBzQiQBxAACYQAAClCHBoQCIBpDgAAQD3AACKh8IBjAAQhQBbiQAvQh5AniLAAQkOAAijiDg");
	this.shape_18.setTransform(-45.2,-3.3,0.253,0.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoW, new cjs.Rectangle(-60,-14.1,120,28.2), null);


(lib.logoGrad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0,1],0,50.9,0,-50.9).s().p("A3bH0IAAvnMAu3AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoGrad, new cjs.Rectangle(-150,-50,300,100), null);


(lib.fari_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkwBRIjAhkIgGgFQgEgHAHAAQDSgEAWACQAWACAQAJQAVAKgKAMQgUAXgBAEQgIANAMAGQASAJBDALIAdgDICFAAQAGAHgOAPIgXAXIjEACQgbAAg+gdgAG7APIAlgRQABgCgFgVQACgBAFgqQAAgCgWgaIABgMQADgEAVAJQAWAJgEAQQgOA2ADgEQAHBCABABIgrATQACgBgRgqgAH1AnIAAAAIAAAAIAAAAg");
	this.shape.setTransform(31.8,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fari_1, new cjs.Rectangle(-18.7,-37.4,101,22), null);


(lib.cloudsMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.clouds();
	this.instance.parent = this;
	this.instance.setTransform(591,-178,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloudsMc, new cjs.Rectangle(-294,-178,885,300), null);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(-146,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(-146,-69,291,137), null);


(lib.blik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.fari();
	this.instance.parent = this;
	this.instance.setTransform(-58,-53,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blik, new cjs.Rectangle(-58,-53,116,106), null);


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wheelMc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-18,36,36);


(lib.clouds_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cloudsMc();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6,0,0,0,148.5,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clouds_1, new cjs.Rectangle(-265.5,-90,531,180), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.clouds_1();
	this.instance.parent = this;
	this.instance.setTransform(30.8,-260,0.6,0.6,0,0,180,-0.1,-0.1);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-9.2},109).wait(1));

	// Слой_2
	this.instance_1 = new lib.clouds_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.1,-182);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:32.1},109).wait(1));

	// Слой_1
	this.instance_2 = new lib.bgImg2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.4,-313.9,531,614);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAI8AkvIAArEIAcgsMgvQgJJIjNibMgBugyJMAqzABuMAq0ABuQgfC/g7F3Qh2LtiIOWMgFJAjIg");
	mask.setTransform(18.1,-254.9);

	// Слой_2
	this.instance = new lib.cloudsMc();
	this.instance.parent = this;
	this.instance.setTransform(-75,-248);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:75},123).wait(1));

	// Слой_1
	this.instance_1 = new lib.bgImg1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-225,-450);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.9,-450,548.1,900);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.cloudsMc();
	this.instance.parent = this;
	this.instance.setTransform(234.1,-150,1,1,0,0,0,148.5,-28);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:154.1},64).wait(1));

	// Слой_3
	this.instance_1 = new lib.cloudsMc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105,20,1,1,0,0,180,148.5,-28);
	this.instance_1.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-165},64).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1F75BD","#80C1E8"],[0,1],0,-300.1,0,300.1).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-547.5,-300,1224.2,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playVideo();
		bool = false;
		var myLocalThis01 = this;
		interval = setInterval(chekVideo, 50);
		function chekVideo(){
			if(bool){
				myLocalThis01.play();
				clearInterval(interval);
			}
		}
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		hideVideo();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(15).call(this.frame_59).wait(224));

	// urTetx
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(3.1,218);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(233).to({_off:false},0).to({alpha:1},9).wait(41));

	// logo
	this.instance_1 = new lib.logoW();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,253,1.4,1.399);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(222).to({alpha:0},10).wait(1).to({scaleX:1.72,scaleY:1.72,y:0},0).to({alpha:1},9).wait(41));

	// logoGrad
	this.instance_2 = new lib.logoGrad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(222).to({alpha:0},10).to({_off:true},1).wait(50));

	// Слой_18
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(222).to({_off:false},0).to({alpha:1},10).wait(51));

	// t3_2
	this.instance_4 = new lib.t3_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-320.4,-168.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(172).to({_off:false},0).to({x:-76.4},10,cjs.Ease.get(1)).to({_off:true},51).wait(50));

	// t3_1
	this.instance_5 = new lib.t3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-272,-216.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(167).to({_off:false},0).to({x:-28},10,cjs.Ease.get(1)).to({_off:true},56).wait(50));

	// wheel
	this.instance_6 = new lib.wheel_1("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-378,134);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(167).to({_off:false},0).to({x:-84,startPosition:15},15,cjs.Ease.get(1)).to({_off:true},51).wait(50));

	// wheel
	this.instance_7 = new lib.wheel_1("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-207,134);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(167).to({_off:false},0).to({x:87,startPosition:15},15,cjs.Ease.get(1)).to({_off:true},51).wait(50));

	// car
	this.instance_8 = new lib.car_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-295,97);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({_off:false},0).to({x:-1},15,cjs.Ease.get(1)).to({_off:true},51).wait(50));

	// bgImg2
	this.instance_9 = new lib.bgImg2_1();
	this.instance_9.parent = this;
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(157).to({_off:false},0).to({alpha:1},10).to({_off:true},66).wait(50));

	// Слой_3
	this.instance_10 = new lib.blik();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-22.7,140.5,0.667,0.667);
	this.instance_10.compositeOperation = "lighter";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(124).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},28).wait(116));

	// bgImg1
	this.instance_11 = new lib.fari_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-6.3,141.4,0.667,0.667,0,0,0,10.4,-5.9);
	this.instance_11.alpha = 0.461;
	this.instance_11.compositeOperation = "lighter";
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(124).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},28).wait(116));

	// t2
	this.instance_12 = new lib.t2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-272,-216);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(86).to({_off:false},0).to({x:-28},10,cjs.Ease.get(1)).to({_off:true},71).wait(116));

	// bgImg1
	this.instance_13 = new lib.bgImg1_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(76,-38);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,x:60.8,y:-30.4,alpha:1},15).to({scaleX:0.67,scaleY:0.67,x:0,y:0},60).to({_off:true},48).wait(116));

	// t1_3
	this.instance_14 = new lib.t1_3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-258.6,-120.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:false},0).to({x:-43.6},10,cjs.Ease.get(1)).to({_off:true},15).wait(224));

	// t1_2
	this.instance_15 = new lib.t1_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-276.8,-168);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(29).to({_off:false},0).to({x:-61.8},10,cjs.Ease.get(1)).to({_off:true},20).wait(224));

	// t1_1
	this.instance_16 = new lib.t1_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-276.8,-215.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},0).to({x:-61.8},10,cjs.Ease.get(1)).to({_off:true},25).wait(224));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,200,300,100);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var interval;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

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
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '0A53B8AF81C1455C98C462F2245399F8',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/car.png", id:"car"},
		{src:"images/clouds.png", id:"clouds"},
		{src:"images/fari.png", id:"fari"},
		{src:"images/wheel.png", id:"wheel"}
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
an.compositions['0A53B8AF81C1455C98C462F2245399F8'] = {
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