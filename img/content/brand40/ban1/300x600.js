(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,30);


(lib.bird1 = function() {
	this.initialize(img.bird1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,12);


(lib.bird2 = function() {
	this.initialize(img.bird2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,16);


(lib.gift_img_1 = function() {
	this.initialize(img.gift_img_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,72);


(lib.gift_img_2 = function() {
	this.initialize(img.gift_img_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,62);


(lib.gift_img_3 = function() {
	this.initialize(img.gift_img_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.ic1 = function() {
	this.initialize(img.ic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,57);


(lib.ic2 = function() {
	this.initialize(img.ic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,68);


(lib.ic3 = function() {
	this.initialize(img.ic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,64);


(lib.ship = function() {
	this.initialize(img.ship);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,186);// helper functions:

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


(lib.wave_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85CDF3").s().p("Eg5GADOIAAiCIAEAAQBViQBphNQDAiOCeDAQBVBOBPADQA6ACAvgmQBkh2BjgcQCHgnBzCMQBWBOBOADQA7ACAugmQBkh2BjgcQCIgnByCMQBWBOBPADQA6ACAugmQBkh2BkgcQCHgnByCMQBWBOBPADQA6ACAugmQBlh2BjgcQCIgnBxCMQBWBOBPADQA7ACAsgmQBlh2BjgcQCIgnByCMQBWBOBOADQA7ACAugmQBlh2BjgcQCHgnByCMQBXBOBOADQA6ACAvgmQBkh2BjgcQCHgnBzCMQBVBOBPADQA7ACAtgmQBmh2BigcQCHgnBzCMQBWBOBPADQA6ACAugmQBkh2BjgcQCIgnByCMQBtBhBegTQBAgOAig1IABCgIAAAAIAACCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wave_mc, new cjs.Rectangle(-365.5,-20.6,731,41.3), null);


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAlQgKgNAAgYQAAgWAKgOQAJgNAOAAQAPAAAJANQAKAOAAAWQAAAYgKANQgJANgPABQgOgBgJgNgAgTAAQAAAoATAAQAVAAAAgoQAAgngVAAQgTAAAAAng");
	this.shape.setTransform(77.8,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADAsIAAhSIgMAAQgGAAAAgGQAAgFAGAAIAVAAQAEAAAAADIAABaQAAAGgGAAQgHAAAAgGg");
	this.shape_1.setTransform(70.5,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAAQABgGAGAAQAIAAAAAGQAAAHgIAAQgGAAgBgHg");
	this.shape_2.setTransform(66.3,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADAsIAAhSIgMAAQgGAAAAgGQAAgFAGAAIAVAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIAABaQAAAGgGAAQgHAAAAgGg");
	this.shape_3.setTransform(61,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAqQgGgHgBgIQABgGAFAAQAFAAACAGQAFANANAAQAHAAAFgGQAGgFAAgHQAAgTgSAAQgHAAAAgFQAAgDAHgCQANgDAAgNQAAgHgDgFQgFgEgFAAQgOAAgBAOQgBAGgFAAQgGAAAAgGQAAgKAHgHQAIgIAMABQAMgBAHAIQAHAHAAALQAAAPgMAGQARAFAAATQAAANgJAIQgJAJgNAAQgPAAgJgJg");
	this.shape_4.setTransform(54.6,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAaQgJgKAAgQQAAgOAJgMQAJgLAPAAQAQAAAKALQAIAMAAAOQAAAQgIAKQgKAMgQAAQgPAAgJgMgAgQgSQgEAIAAAKQAAALAEAHQAGAKAKgBQAKABAHgKQAEgHAAgLQAAgKgEgIQgHgJgKAAQgKAAgGAJg");
	this.shape_5.setTransform(42.5,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAfIAAg5IgjAAIAAA5QAAAGgGABQgHgBAAgGIAAg9QAAgHAHABIAwAAQAGgBAAAHIAAA9QAAAGgGABQgHgBAAgGg");
	this.shape_6.setTransform(34.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAtQAAgCAFgEQAMgMAKgRQgIAFgIAAQgMgBgHgJQgIgJABgNQgBgOAKgJQAIgJANAAQAOAAAJAJQAJAJAAAPQgBAigiAeQgDACgEABQgFgBAAgFgAgRgRQAAAVARAAQATAAgBgVQABgVgTAAQgRAAAAAVg");
	this.shape_7.setTransform(22.1,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAlQgKgNAAgYQAAgWAKgOQAJgNAOAAQAPAAAJANQAKAOAAAWQAAAYgKANQgJANgPABQgOgBgJgNgAgTAAQAAAoATAAQAJAAAGgJQAGgLAAgUQAAgTgGgKQgGgKgJAAQgTAAAAAng");
	this.shape_8.setTransform(13.9,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAAQABgGAGAAQAIAAAAAGQAAAHgIAAQgGAAgBgHg");
	this.shape_9.setTransform(7.9,3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADAsIAAhSIgMAAQgGAAAAgGQAAgFAGAAIAVAAQAEAAAAADIAABaQAAAGgHAAQgGAAAAgGg");
	this.shape_10.setTransform(2.6,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAlQgKgOAAgXQAAgWAKgOQAJgNAOAAQAPAAAJANQAKAOAAAWQAAAYgKANQgJANgPABQgOgBgJgNgAgOgdQgGAKAAATQAAAUAGALQAGAJAIAAQAJAAAGgJQAGgLAAgUQAAgTgGgKQgGgKgJAAQgIAAgGAKg");
	this.shape_11.setTransform(-3.7,-1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAiQgJgFAAgFQAAgFAGgBIAIAFQAHAFAHgBQAQAAAAgMQAAgMgPABQgFgBAAgEQAAgEAEgBQAGAAACgDQAEgDAAgFQAAgKgLAAQgGAAgFAFQgFADgCAAQgGAAAAgFQAAgGAJgEQAIgDAIAAQALAAAGAGQAHAFAAAJQAAAIgJAHQAMAEAAANQAAALgJAHQgIAFgMAAQgLAAgIgEg");
	this.shape_12.setTransform(-15.4,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAaQgIgKAAgQQAAgOAIgMQAKgLAQAAQAJAAAHADQAFADAAADQAAAFgFABIgHgDQgEgCgFAAQgRABgDATIAVAAQAHAAAAAGQAAAEgHAAIgWAAQABAKAFAHQAGAHAJAAQAFAAAEgBIAHgCQAEAAAAAEQAAAEgEADQgHADgJAAQgQAAgKgMg");
	this.shape_13.setTransform(-26,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAsIAAg+QAAgHAGAAQAGAAAAAHIAAA+QAAAGgGABQgGgBAAgGgAgEglQgDgCAAgDQAAgIAHABQAIgBAAAIQAAAIgIgBQgCAAgCgCg");
	this.shape_14.setTransform(-31.2,-1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcAqIAAgQIg3AAIAAAQQAAAHgGAAQgHAAAAgHIAAgUQAAgHAHAAIAEAAQAIgSAAgmQAAgHAHAAIAjAAQAHAAAAAHIAAA4IAGAAQAHAAAAAHIAAAUQAAAHgHAAQgGAAAAgHgAgPAPIAeAAIAAg0IgXAAQAAAggHAUg");
	this.shape_15.setTransform(-37.2,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQAfIAAgbIgBAAIggAfQgBACgEABQgGgBAAgEQAAgDACgCIAagYIgFgBQgVgBAAgSQAAgJAHgGQAIgGAJABIAZAAQAGgBAAAHIAAA9QAAAGgGABQgHgBAAgGgAgNgQQAAALAMAAIARAAIAAgVIgRAAQgMAAAAAKg");
	this.shape_16.setTransform(-49.5,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAsIAAg+QAAgHAFAAQAGAAAAAHIAAA+QAAAGgGABQgFgBAAgGgAgEglQgDgCAAgDQAAgIAHABQAIgBAAAIQAAAIgIgBQgCAAgCgCg");
	this.shape_17.setTransform(-54.6,-1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAYArIAAgRIg2AAQgGAAAAgGIAAg+QAAgGAGAAQAGAAAAAGIAAA5IAjAAIAAg5QABgGAGAAQAHAAgBAGIAAA5IAGAAQAHAAAAAHIAAAVQAAAGgHAAQgFAAgBgGg");
	this.shape_18.setTransform(-60.3,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AARAiIghgdIAAAbQAAAGgGAAQgHAAAAgGIAAg+QAAgHAHAAQAGAAAAAHIAAAWIAegZQADgEAEAAQAGAAgBAGQABABgEAEIgdAZIAhAcQADADAAAEQAAAEgGAAQgCAAgFgEg");
	this.shape_19.setTransform(-68.3,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAfAuIgHgSIgvAAIgGASQgCAEgFABQgGAAAAgGIACgFIAghSQACgIAGABQAGgBADAIIAhBSIABAFQAAAGgGAAQgEgBgCgEgAAUARIgUg1IgTA1IAnAAg");
	this.shape_20.setTransform(-77,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-81.3,-6.1,162.6,12.4), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24129A").s().p("AgIAiQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEAEgFAAQgEAAgEgEgAABAIQgKAAgBgKIgBgjIAKAAQAKAAAAAKIgBAjg");
	this.shape.setTransform(33.1,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24129A").s().p("AgfABIAAgfIAJAAQAHAAADADQADACAAAHIAAAUQAAAMAJAAIAKgBIAAgrIAHAAQAPAAAAAMIAAAsQgNAFgSAAQggAAAAgeg");
	this.shape_1.setTransform(27.5,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24129A").s().p("AAIAaIgSgZIAAAdIgJAAQgGAAgDgEQgEgDAAgGIAAguIAJAAQANgBAAAMIAAAOQAJgNAHgJQAEgDAHAAIAQAAIAAAAQgNALgLAQIAMAPQAFAFAGACQgBALgMAAQgHAAgEgFg");
	this.shape_2.setTransform(20.3,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24129A").s().p("AAXAeQgNAAAAgNIAAgLIgTAAIAAAYIgHAAQgPAAAAgNIAAguIAJAAQANAAAAAMIAAAJIATAAIAAgVIAHAAQAPAAAAAMIAAAvg");
	this.shape_3.setTransform(12.5,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24129A").s().p("AgcAdIAAgFIAJAAQAIgBADgGQgHgKgHgQQgHgSgCgMIALAAQAKAAACAIQADAOAHAPQAIgRADgUIAKAAQAJAAABAHQAAANgNAXQgOAYgGAHQgFAFgKAAQgNAAAAgLg");
	this.shape_4.setTransform(5.2,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24129A").s().p("AgTApQgOAAAAgPIAAgfQAAgjAiABQAOgBAJAJQAKAJAAANQAAAPgJAJQgIAIgNABQgLgBgEgHIAAAZgAgIgTQgDAEAAAGQAAARAMAAQALgBAAgOQAAgJgDgEQgDgEgGAAQgFAAgDAFg");
	this.shape_5.setTransform(-2,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24129A").s().p("AgTAcQgJgGAAgKQAAgSAgAAIADAAIAAgDQAAgGgLAAQgOAAgHAHIgBAAIAAgIQAAgGAHgEQAHgFAMAAQAdAAAAAaIAAAIQAAARgHAGQgGAGgRAAQgKAAgIgEgAgHAMQAAAFAHABQAIAAAAgIIAAgFIgFAAQgKAAAAAHg");
	this.shape_6.setTransform(-9.3,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24129A").s().p("AgTAkQgGgEAAgGIAAgHIABAAQAGAGAQAAQAMAAAAgMIAAgFQgCAHgJAAQgNAAgIgGQgIgHAAgMQAAgNAJgIQAKgJAPAAQAbAAABAbIAAAcQAAALgJAHQgJAIgOAAQgMAAgHgFgAgJgMQABAMAJAAQAKAAAAgLQAAgMgKAAQgKAAAAALg");
	this.shape_7.setTransform(-16.5,7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#24129A").s().p("AgXAXQgKgIAAgNQAAgOAKgKQAKgJAOAAQANAAAKAJQAKAJAAANQAAAPgJAIQgJAJgQAAQgNAAgKgJgAgIgLQgDAFAAAGQAAAPAMAAQAFAAADgDQADgEAAgHQAAgPgMAAQgEAAgEADg");
	this.shape_8.setTransform(-23.9,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24129A").s().p("AAXAfQgHAAgEgDQgCgCAAgHIAAgVQAAgLgKAAIgJABIAAArIgIAAQgOAAAAgMIAAgsQAPgFAQAAQAgAAAAAeIAAAfg");
	this.shape_9.setTransform(-31.5,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#24129A").s().p("AgPAXIAAgnIAGAAQAJAAADADQADADAAAJIAAAVQAAAHAJAAIACAAIAAAGQAAAKgMAAQgUAAAAgUgAgNgYQgDgDAAgEQAAgFADgCQAEgDAFgBQAEABADADQADACAAAFQAAAEgDADQgDADgEAAQgFAAgEgDg");
	this.shape_10.setTransform(52.1,-7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24129A").s().p("AAXAeQgNAAAAgNIAAgLIgTAAIAAAYIgHAAQgPAAAAgNIAAguIAJAAQANAAAAAMIAAAJIATAAIAAgVIAIAAQAOAAAAAMIAAAvg");
	this.shape_11.setTransform(45.9,-6.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#24129A").s().p("AAXAfQgHAAgDgDQgDgCAAgIIAAgHQgHAAgDAEIgFALQgFAFgIAAQgJAAgEgCIAAAAQAGgFADgJQAFgIAEgCQgEgBgEgEQgEgEAAgGQAAgUAdAAQARAAALADIAAA6gAgEgJQAAAHAIAAIAGAAIAAgMIgGgBQgIAAAAAGg");
	this.shape_12.setTransform(38.2,-6.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#24129A").s().p("AgPAXIAAgnIAFAAQAKAAACADQAEADAAAJIAAAVQAAAHAJAAIACAAIAAAGQAAAKgMAAQgUAAAAgUgAgNgYQgDgDAAgEQAAgFADgCQADgDAFgBQAFABACADQAEACAAAFQAAAEgEADQgCADgFAAQgFAAgDgDg");
	this.shape_13.setTransform(33.1,-7.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#24129A").s().p("AgTApQgOAAAAgPIAAgfQAAgiAiAAQAPAAAJAIQAJAJAAANQAAAOgJAJQgIAKgNgBQgKABgFgJIAAAagAgLgJQAAAQAMAAQALABAAgOQAAgSgMABQgLAAAAAOg");
	this.shape_14.setTransform(26.8,-5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24129A").s().p("AAhAeQgNAAAAgLIAAgWIgNAhIgFAAQgKAAgGgRIgFgQQgCARAAAQIgIAAQgFAAgEgDQgEgDAAgFQAAgWAIgaIAIAAQAKAAAGAGIAHAQIADAMIAJgWQAEgKAFgCIADAAQAPAAACAOQAFAYgBAVg");
	this.shape_15.setTransform(18.1,-6.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#24129A").s().p("AgXAYQgKgKAAgNQAAgNALgKQAJgJAOAAQANAAAKAIQAKAKAAANQAAAOgJAJQgKAJgPAAQgNAAgKgIgAgIgKQgDAEAAAGQAAAQALAAQAMAAAAgPQAAgQgMAAQgEAAgEAFg");
	this.shape_16.setTransform(9.5,-6.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#24129A").s().p("AgfAMIAAgfIAJAAQAHAAADACQADADAAAHIAAAUQAAAMAJAAIAKgBIAAgrIAHAAQAPAAAAAMIAAAsQgNAFgSAAQggAAAAgegAgMgZQgFgFAAgHIAAgEQAGAJALAAQALAAAGgJIAAAEQAAAHgFAFQgGAEgGAAQgHAAgFgEg");
	this.shape_17.setTransform(-0.8,-7.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#24129A").s().p("AgTAcQgJgGAAgKQAAgSAggBIADAAIAAgCQAAgGgLAAQgOAAgHAHIgBAAIAAgIQAAgGAHgEQAHgFAMAAQAdAAAAAaIAAAIQAAARgHAGQgGAGgRAAQgKAAgIgEgAgHALQAAAHAHAAQAIgBAAgHIAAgEIgFAAQgKAAAAAFg");
	this.shape_18.setTransform(-8,-6.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#24129A").s().p("AgdAJIAAgjQANgFAQAAQANAAAHAFQAJAFAAAIQgBAIgHAFQAJAEAAAHQgBAVgcAAQgeAAAAgXgAgHAMQAAADADACIAFABQAIAAAAgIQAAgEgJAAIgHAAgAgHgQIAAAKIAHAAQAIAAAAgFQAAgGgIAAg");
	this.shape_19.setTransform(-14.8,-6.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#24129A").s().p("AgTAcQgJgGAAgKQAAgSAggBIADAAIAAgCQAAgGgLAAQgOAAgHAHIgBAAIAAgIQAAgGAHgEQAHgFAMAAQAdAAAAAaIAAAIQAAARgHAGQgGAGgRAAQgKAAgIgEgAgHALQAAAHAIAAQAHgBAAgHIAAgEIgEAAQgLAAAAAFg");
	this.shape_20.setTransform(-21.8,-6.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#24129A").s().p("AgTApQgOAAAAgPIAAgfQAAgQAJgJQAJgKAQABQAOAAAJAIQAKAJAAANQAAAOgJAJQgIAKgNgBQgLABgEgJIAAAagAgIgUQgDAEAAAHQAAAQAMAAQALABAAgOQAAgKgDgEQgDgEgGABQgFAAgDADg");
	this.shape_21.setTransform(-29,-5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#24129A").s().p("AgRAbQgIgFAAgIQAAgOARgEQAMgCAAgEQAAgGgKAAQgKAAgIAGIAAAAIAAgHQgBgGAIgEQAGgEAJAAQAKAAAIAFQAJAFgBAIQAAAOgPADQgNADAAAEQAAAGAKAAQAMgBAHgFIABAAIAAAGQAAAPgZAAQgLAAgHgFg");
	this.shape_22.setTransform(-36,-6.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#24129A").s().p("AgfABIAAgfIAJAAQAIAAACADQADACAAAHIAAAUQAAAMAKAAIAJgBIAAgrIAIAAQAOAAAAAMIAAAsQgNAFgSAAQggAAAAgeg");
	this.shape_23.setTransform(-43,-6.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#24129A").s().p("AgGAnQgaAAAAgUIAAg1QAOgEALAAIAIAAQAOAAAHAGQAJAGAAAKQAAAFgEAFQgEAEgFABQAFABAFAFQAFAFAAAFQAAALgKAHQgJAGgMAAgAgJASQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAIAGAAQALAAgBgHQABgIgLAAIgJAAgAgKgVIAAAOIAKAAQAJAAABgIQAAgGgKAAg");
	this.shape_24.setTransform(-50.5,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-53.8,-11.8,107.6,23.7), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24129A").s().p("AgVAeQgKgKAAgTQAAgoAgAAQAfAAAAAnQAAAoggAAQgNAAgIgKgAgJAAQAAAWAJAAQAGAAACgEQADgFAAgNQAAgVgLAAQgJAAAAAVg");
	this.shape.setTransform(39.4,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24129A").s().p("AgWAeQgJgKgBgTQAAgoAhAAQAgAAAAAnQgBAoggAAQgMAAgKgKgAgJAAQAAAWAJAAQAGAAACgEQADgFgBgNQAAgVgKAAQgJAAAAAVg");
	this.shape_1.setTransform(32.4,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24129A").s().p("AAMAmQgMAAAAgMIAAgrIgGADIgFABQgHgBgCgFIgBgIIAUgIQAGgCAHAAQADAAADACQAEAEAAADIAABCg");
	this.shape_2.setTransform(25.6,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24129A").s().p("AgUAjQgGgEAAgHIAAgIIABAAQAHAHAPAAQANAAABgPQgFAFgHAAQgdAAAAgXQAAgMAIgIQAJgJAPAAQAMAAAIAIQAJAKAAATQAAAqghAAQgLAAgHgFgAgKgMQABALAJAAQAKAAAAgHQAAgOgKAAQgKAAAAAKg");
	this.shape_3.setTransform(19.8,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24129A").s().p("AgTApQgOAAAAgPIAAgfQAAgjAiABQAOgBAJAJQAKAJAAANQAAAOgJAKQgIAIgNABQgLgBgEgHIAAAZgAgLgJQAAAQAMABQALgBAAgOQAAgRgMAAQgLAAAAAPg");
	this.shape_4.setTransform(9.8,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24129A").s().p("AgVAXQgJgJAAgNQAAgNAJgJQAJgKANAAQANAAAJAHQAIAGAAALQAAAIgHADQgHADgRABIgJAAQACAIANABQAOgBAGgEIABAAIAAAGQAAAOgZAAQgPAAgIgJgAgJgFIAJAAQALAAgBgEQABgGgKAAQgJAAgBAKg");
	this.shape_5.setTransform(2.3,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24129A").s().p("AAhAeQgMAAAAgLIgCgWIgMAhIgGAAQgJAAgGgRIgGgQIgBAhIgIAAQgFAAgEgDQgDgDAAgFQAAgWAGgaIAIAAQAMAAAEAGIAIAQIADAMIAIgWQAGgKADgCIAFAAQAPAAABAOQAEAYABAVg");
	this.shape_6.setTransform(-6,13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24129A").s().p("AgXAXQgKgIAAgNQAAgOAKgKQAKgJAOAAQANAAAJAIQAKAKAAANQAAAOgJAJQgIAJgQAAQgOAAgJgJgAgHgLQgEAFAAAGQAAAPAMAAQALAAAAgOQAAgQgMAAQgEAAgDAEg");
	this.shape_7.setTransform(-14.6,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#24129A").s().p("AAYAeQgIAAgDgDQgDgDAAgHIAAgLIgTAAIAAAYIgHAAQgPAAAAgNIAAguIAIAAQAJAAADADQACADAAAGIAAAJIATAAIAAgVIAHAAQAPAAAAAMIAAAvg");
	this.shape_8.setTransform(-22.3,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24129A").s().p("AgTAcQgJgGAAgKQAAgSAhAAIADAAIAAgDQAAgGgMAAQgNAAgIAHIAAAAIAAgIQAAgGAGgEQAHgFAMAAQAdAAAAAaIAAAIQAAARgHAGQgGAGgRAAQgKAAgIgEgAgHAMQAAAFAIABQAHAAAAgIIAAgFIgEAAQgLABAAAGg");
	this.shape_9.setTransform(-32.2,13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#24129A").s().p("AAYAeQgOAAAAgNIAAgLIgTAAIAAAYIgIAAQgOAAAAgNIAAguIAJAAQANAAAAAMIAAAJIATAAIAAgVIAHAAQAPAAAAAMIAAAvg");
	this.shape_10.setTransform(-39.3,13.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24129A").s().p("AgcAXIAAgIIABAAQAHAIARAAQAMAAAAgIQAAgFgPgDQgYgEAAgQQAAgKAJgIQAJgIAOAAQAOAAAHAGQAGAEAAAHIAAAIIgBAAQgHgIgQAAQgNAAAAAHQAAADACACQAEACAJACQAYAEAAAQQAAAMgIAHQgJAHgPAAQgbAAAAgRg");
	this.shape_11.setTransform(65.6,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#24129A").s().p("AApAmQgNAAAAgMIgCglIgLAgQgDAJgFAIIgGAAQgKAAgIgVIgJgcQgDAUABAdIgJAAQgFAAgDgDQgEgDAAgGQAAgjAGgcIAIAAQARAAAFANIAGAOIAHAVIAHgRIAHgRQAEgJAGgFIAEAAQAQAAACARQAFAcAAAeg");
	this.shape_12.setTransform(56.4,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#24129A").s().p("AgcAXIAAgIIAAAAQAJAIAQAAQAMAAAAgIQAAgFgPgDQgYgEAAgQQAAgKAJgIQAJgIAOAAQAOAAAHAGQAGAEAAAHIAAAIIAAAAQgJgIgOAAQgPAAAAAHQAAADADACQADACAKACQAYAEAAAQQAAAMgIAHQgKAHgOAAQgbAAAAgRg");
	this.shape_13.setTransform(47.2,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#24129A").s().p("AgZARIAAgGIAAAAQAHAFAOAAQAJAAAAgEQAAgEgJgBQgKAAAAgHIAAgGIAKAAQAJAAAAgEQAAgFgJAAQgNAAgIAFIAAAAIAAgGQAAgHAHgEQAHgDALAAQALAAAHAEQAIAFAAAJQAAAJgJADQAJACAAAJQAAAUgbABQgYAAAAgPg");
	this.shape_14.setTransform(37.8,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24129A").s().p("AgVAXQgJgJAAgNQAAgNAJgJQAJgKANAAQANAAAJAGQAIAHAAALQAAAIgHAEQgHADgRAAIgJAAQACAJANAAQAOAAAGgFIABAAIAAAFQAAAPgZAAQgPAAgIgJgAgJgFIAIAAQALAAAAgEQAAgGgJgBQgJAAgBALg");
	this.shape_15.setTransform(31.2,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#24129A").s().p("AgTAoQgOAAAAgOIAAgfQAAgQAJgKQAJgJAQAAQAOABAJAIQAKAJAAANQAAAOgJAJQgIAKgNgBQgKABgGgJIAAAZgAgIgUQgDAFAAAGQAAAQAMAAQALAAAAgNQAAgKgDgEQgDgEgGABQgFAAgDADg");
	this.shape_16.setTransform(23.8,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#24129A").s().p("AgVAXQgJgJAAgNQAAgNAJgJQAJgKANAAQANAAAJAGQAIAHAAALQAAAIgHAEQgHADgRAAIgJAAQADAJANAAQAOAAAGgFIAAAAIAAAFQAAAPgZAAQgPAAgIgJgAgJgFIAJAAQALAAAAgEQAAgGgKgBQgJAAgBALg");
	this.shape_17.setTransform(16.3,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#24129A").s().p("AAUAeQgMAAAAgLIAAgKIgLACQgaAAAAgWIAAgSIALAAQALAAAAAJIAAAIQAAAHAHAAIAIgCIAAgWIAJAAQAGAAADADQAEAEAAAEIAAAwg");
	this.shape_18.setTransform(9.1,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#24129A").s().p("AgXAYQgKgKAAgNQABgOAJgIQAKgKAOAAQANAAAKAIQAJAKABANQgBAOgIAJQgJAJgQAAQgNAAgKgIgAgIgKQgDAEAAAGQAAAQALAAQAMAAAAgPQAAgQgMAAQgEAAgEAFg");
	this.shape_19.setTransform(-0.8,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#24129A").s().p("AgXAgQgIgJAAgPIABgWQABgMAHgGQAIgIAYAAIAQAAIAAAIQAAAIgMAAIgEAAQgPAAgEAEQgGAEAAAFQAHgHALAAQANAAAIAIQAIAJAAAMQAAAOgJAIQgIAIgOAAQgPAAgJgJgAgGABQgDAEAAAFQAAAPAKAAQAEAAADgDQADgEAAgGQgBgOgKAAQgDAAgDADg");
	this.shape_20.setTransform(-8.3,-0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#24129A").s().p("AgTAbQgJgFAAgKQAAgSAggBIADAAIAAgCQAAgGgLAAQgOAAgHAHIgBAAIAAgIQAAgGAHgFQAHgEAMAAQAdAAAAAaIAAAIQAAARgHAGQgGAGgRAAQgKAAgIgFgAgHALQAAAHAHgBQAIAAAAgHIAAgEIgFAAQgKAAAAAFg");
	this.shape_21.setTransform(-15.5,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#24129A").s().p("AgPAXIAAgnIAFAAQAKAAACADQAEADAAAJIAAAVQAAAHAJAAIACAAIAAAGQAAAKgMAAQgUAAAAgUgAgNgYQgDgDAAgEQAAgFADgCQADgDAFAAQAFAAACADQAEACAAAFQAAAEgEADQgCADgFAAQgFAAgDgDg");
	this.shape_22.setTransform(-23.4,-1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#24129A").s().p("AAEAeQgOAAAAgOIAAgdIgTAAIAAgHQAAgEAEgDQADgCADAAIAxAAIAAAHQAAAEgEADQgDACgEAAIgIAAIAAArg");
	this.shape_23.setTransform(-28.8,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#24129A").s().p("AgfAMIAAgfIAJAAQAHAAADACQADADAAAHIAAAUQAAAMAJAAIAKgBIAAgrIAHAAQAPAAAAAMIAAAsQgNAFgSAAQggAAAAgegAgMgZQgFgFAAgHIAAgEQAGAJALAAQALAAAGgJIAAAEQAAAHgFAFQgGAEgGAAQgHAAgFgEg");
	this.shape_24.setTransform(-35.7,-0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#24129A").s().p("AgTAbQgJgFAAgKQAAgSAggBIADAAIAAgCQAAgGgLAAQgOAAgHAHIgBAAIAAgIQAAgGAHgFQAHgEAMAAQAdAAAAAaIAAAIQAAARgHAGQgGAGgRAAQgKAAgIgFgAgHALQAAAHAHgBQAIAAAAgHIAAgEIgFAAQgKAAAAAFg");
	this.shape_25.setTransform(-42.9,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#24129A").s().p("AgRAXQgIgIgBgOQABgNAIgJQALgKAOAAQAIAAAGAEQAEAFAAAFIAAAIIAAAAQgEgEgKAAQgPAAAAANQAAAOAOAAQAKAAAFgDIAAAGQABAGgGAFQgGAEgIAAQgOAAgKgJg");
	this.shape_26.setTransform(-49.2,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#24129A").s().p("AgTAbQgJgFAAgKQAAgSAggBIAEAAIAAgCQAAgGgMAAQgNAAgIAHIAAAAIAAgIQAAgGAGgFQAHgEAMAAQAdAAAAAaIAAAIQAAARgHAGQgGAGgRAAQgKAAgIgFgAgHALQAAAHAIgBQAHAAAAgHIAAgEIgEAAQgLAAAAAFg");
	this.shape_27.setTransform(-58.4,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#24129A").s().p("AAYAeQgOAAAAgNIAAgLIgTAAIAAAYIgIAAQgOAAAAgNIAAguIAJAAQANAAAAAMIAAAJIATAAIAAgVIAHAAQAPAAAAAMIAAAvg");
	this.shape_28.setTransform(-65.5,0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#24129A").s().p("AgTAkQgGgEAAgGIAAgHIABAAQAGAGAPAAQANAAAAgMIAAgFQgDAHgJAAQgNAAgHgGQgJgHAAgMQAAgNAKgIQAKgJAPAAQAcAAAAAbIAAAcQAAALgJAHQgJAIgOAAQgMAAgHgFgAgJgMQAAAMAKAAQAKAAAAgLQAAgMgKAAQgKAAAAALg");
	this.shape_29.setTransform(56,-12.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#24129A").s().p("AgXAXQgKgJAAgMQAAgPAKgIQAKgKAOAAQANAAAKAJQAKAIAAAOQAAAOgJAJQgJAJgQAAQgNAAgKgJgAgHgLQgEAEAAAHQAAAPAMAAQALAAAAgOQAAgPgMAAQgEAAgDADg");
	this.shape_30.setTransform(48.5,-13.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#24129A").s().p("AAHAaIgRgZIAAAdIgJAAQgFAAgEgDQgEgEAAgFIAAgvIAJAAQANAAAAAMIAAANIAQgWQAEgDAHAAIAQAAIAAAAQgLAKgNARIAMAPQAFAFAGACQgBAKgMAAQgHABgFgFg");
	this.shape_31.setTransform(41.4,-13);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#24129A").s().p("AgXAXQgKgJAAgMQAAgPAKgIQAKgKAOAAQANAAAKAJQAKAIAAAOQAAAOgJAJQgJAJgQAAQgNAAgKgJgAgHgLQgEAFAAAGQAAAPAMAAQALAAAAgOQAAgPgMAAQgEAAgDADg");
	this.shape_32.setTransform(33.6,-13.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#24129A").s().p("AAhAeQgMAAAAgLIgCgWIgMAhIgGAAQgJAAgGgRIgFgQIgCAhIgIAAQgFAAgDgDQgEgDAAgFQAAgWAGgaIAIAAQAMAAAEAGIAIAQIADAMIAIgWQAGgKADgCIAFAAQAPAAABAOQAEAYAAAVg");
	this.shape_33.setTransform(25,-13.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#24129A").s().p("AgXAXQgKgJAAgMQAAgPAKgIQAKgKAOAAQANAAAJAJQAKAIAAAOQAAAOgJAJQgIAJgQAAQgOAAgJgJgAgHgLQgEAFAAAGQAAAPAMAAQALAAAAgOQAAgPgMAAQgEAAgDADg");
	this.shape_34.setTransform(16.4,-13.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#24129A").s().p("AgTAoQgOAAAAgOIAAgfQAAgRAJgJQAJgIAQgBQAOAAAJAJQAKAIAAAOQAAAPgJAIQgIAJgNAAQgLAAgEgHIAAAYgAgIgTQgDAEAAAGQAAARAMAAQALAAAAgPQAAgJgDgEQgDgDgGgBQgFAAgDAFg");
	this.shape_35.setTransform(8.7,-12.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#24129A").s().p("AAXAfQgHAAgEgDQgCgCAAgHIAAgVQAAgLgKAAIgJABIAAArIgIAAQgOAAAAgMIAAgsQAPgFAQAAQAgAAAAAeIAAAfg");
	this.shape_36.setTransform(1,-13.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#24129A").s().p("AgfAMIAAgfIAJAAQAHAAADACQADADAAAHIAAAUQAAAMAJAAIAKgBIAAgrIAHAAQAPAAAAAMIAAAsQgNAFgSAAQggAAAAgegAgMgZQgFgFAAgHIAAgEQAGAJALAAQALAAAGgJIAAAEQAAAHgFAFQgGAEgGAAQgHAAgFgEg");
	this.shape_37.setTransform(-9.4,-14.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#24129A").s().p("AgcAeIAAgGIAJAAQAIAAADgIQgHgJgHgRQgHgRgCgMIALAAQAKAAADAIQACAOAHAPQAIgRADgUIAKAAQAJAAAAAIQABAMgNAXQgOAYgGAGQgFAGgKAAQgNAAAAgKg");
	this.shape_38.setTransform(-16.6,-12.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#24129A").s().p("AgTAoQgOAAAAgOIAAgfQAAgjAiAAQAOAAAJAJQAKAIAAAOQAAAPgJAIQgIAJgNAAQgLAAgEgHIAAAYgAgIgTQgDAEAAAGQAAARAMAAQALAAAAgPQAAgJgDgEQgDgDgGgBQgFAAgDAFg");
	this.shape_39.setTransform(-23.8,-12.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#24129A").s().p("AAEAeQgNAAAAgOIAAgdIgUAAIAAgHQAAgEAEgDQACgCAFAAIAwAAIAAAHQAAAEgDADQgEACgEAAIgIAAIAAArg");
	this.shape_40.setTransform(-30.8,-13.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#24129A").s().p("AgQAXQgKgIAAgOQAAgNAJgJQAKgKAPAAQAIAAAFAEQAGAFAAAFIAAAIIgBAAQgEgEgKAAQgQAAAAANQAAAOAPAAQAKAAAFgDIABAAIAAAGQAAAGgGAFQgGAEgJAAQgNAAgJgJg");
	this.shape_41.setTransform(-36.9,-13.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#24129A").s().p("AgQAXQgKgIABgOQgBgNAKgJQAJgKAPAAQAIAAAFAEQAGAEAAAGIAAAHIgBAAQgEgEgKAAQgNAAgDAIIAWAAIAAAGQAAAHgKAAIgMAAQAEAJALAAQAIAAAHgEIABAAIAAAGQAAAGgGAEQgGAEgJAAQgOAAgIgJg");
	this.shape_42.setTransform(-43,-13.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#24129A").s().p("AgWAXQgIgIAAgOQAAgNAJgJQAJgKAOAAQAMAAAIAHQAJAGAAALQAAAIgIAEQgGACgRAAIgJAAQADAKAMgBQAOAAAGgDIABAAIAAAEQAAAPgYAAQgPAAgKgJgAgJgFIAIAAQAMAAAAgEQAAgHgJABQgKgBgBALg");
	this.shape_43.setTransform(-49.5,-13.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#24129A").s().p("AgRAnQgFAAgEgEQgEgDAAgHIAAg7QAMgEAMAAIAIAAQANABAHAGQAJAHAAALQAAAMgJAGQgIAIgNAAIgJgBIAAAbgAgIgVIAAASIAIAAQAJABAAgKQAAgJgJAAg");
	this.shape_44.setTransform(-56.3,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-68.7,-18.2,137.5,36.5), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24129A").s().p("AgfABIAAgfIAKAAQAHAAADADQACACAAAHIAAAVQAAALAJAAIAKgBIAAgrIAHAAQAPAAAAAMIAAAsQgNAFgSAAQggAAAAgeg");
	this.shape.setTransform(24.9,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24129A").s().p("AAIAaIgSgZIAAAdIgIAAQgGAAgEgEQgEgDAAgGIAAguIAJAAQANgBAAAMIAAAOQAJgNAHgJQAEgDAIAAIAPAAIAAAAQgNANgLAOIAMAPQAFAGAHABQgCALgMAAQgHAAgEgFg");
	this.shape_1.setTransform(17.7,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24129A").s().p("AgdAJIAAgjQANgFAQAAQAMAAAIAFQAJAEAAAJQAAAIgIAEQAJAFAAAIQAAAUgdAAQgeAAAAgXgAgHAMQAAADADABIAEACQAJgBAAgGQAAgGgJAAIgHAAgAgIgPIAAAJIAIAAQAIAAAAgGQAAgEgIAAg");
	this.shape_2.setTransform(10.3,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24129A").s().p("AgXAXQgKgIAAgNQAAgOAKgKQAJgJAPAAQANAAAJAIQAKAKAAANQAAAPgJAIQgIAJgQAAQgOAAgJgJgAgHgLQgDAFgBAGQAAAPAMAAQALAAgBgOQAAgPgLAAQgEAAgDADg");
	this.shape_3.setTransform(2.9,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24129A").s().p("AAIAaIgSgZIAAAdIgIAAQgHAAgDgEQgEgDAAgGIAAguIAIAAQAOgBAAAMIAAAOIAQgWQADgDAJAAIAPAAIAAAAQgLAKgNARIAMAPQAFAGAGABQgBALgMAAQgHAAgEgFg");
	this.shape_4.setTransform(-4.2,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24129A").s().p("AgTAcQgJgGAAgKQAAgSAgAAIAEAAIAAgDQAAgGgMAAQgNAAgIAHIAAAAIAAgIQAAgGAGgEQAHgFAMAAQAdAAAAAbIAAAIQAAAQgHAGQgGAGgRAAQgKAAgIgEgAgHAMQAAAFAIABQAHAAAAgIIAAgFIgEAAQgLAAAAAHg");
	this.shape_5.setTransform(-11.6,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24129A").s().p("AAWAfQgGAAgEgDQgCgCAAgHIAAgVQAAgLgKAAIgJABIAAArIgHAAQgPAAAAgMIAAgsQAPgFAQAAQAgAAAAAeIAAAfg");
	this.shape_6.setTransform(-18.7,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24129A").s().p("AgcAdIAAgFIAJAAQAIgBADgGQgHgKgHgQQgHgSgCgMIALAAQALAAABAIQAFAQAEANQAJgRACgUIALAAQAJAAAAAHQAAANgNAXQgNAYgGAHQgFAFgKAAQgNAAAAgLg");
	this.shape_7.setTransform(-26,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#24129A").s().p("AgJAZIAAgnIAEAAQAJAAAEADQADADAAAIIAAAWQAAAHAJAAIACAAIAAAGQAAAJgMAAQgTAAAAgTgAAHgbQgDgDAAgEQAAgEADgDQADgCAEAAQAEAAADACQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAgUgbQgDgDAAgEQAAgEADgDQADgCAEAAQAEAAADACQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_8.setTransform(56.6,-1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24129A").s().p("AgXAYQgKgKAAgNQABgNAJgKQAKgJAOAAQANAAAKAIQAJAKABANQgBAOgIAJQgJAJgQAAQgNAAgKgIgAgIgKQgDAEAAAGQAAAQALAAQAMAAAAgPQAAgQgMAAQgEAAgEAFg");
	this.shape_9.setTransform(50.9,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#24129A").s().p("AAYAeQgOAAAAgNIAAgLIgTAAIAAAYIgIAAQgOAAAAgNIAAguIAIAAQAOAAAAAMIAAAJIATAAIAAgVIAHAAQAPAAAAAMIAAAvg");
	this.shape_10.setTransform(43.3,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24129A").s().p("AgfAMIAAgfIAJAAQAHAAADACQADADAAAHIAAAUQAAAMAJAAIAKgBIAAgrIAHAAQAPAAAAAMIAAAsQgNAFgSAAQggAAAAgegAgMgZQgFgFAAgHIAAgEQAGAJALAAQALAAAGgJIAAAEQAAAHgFAFQgGAEgGAAQgHAAgFgEg");
	this.shape_11.setTransform(35.6,-1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#24129A").s().p("AgPAXIAAgnIAFAAQAKAAACADQAEADAAAJIAAAVQAAAHAJAAIACAAIAAAGQAAAKgMAAQgUAAAAgUgAgNgYQgDgDAAgEQAAgFADgCQADgDAFgBQAFABACADQAEACAAAFQAAAEgEADQgCADgFAAQgFAAgDgDg");
	this.shape_12.setTransform(29.9,-1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#24129A").s().p("AAfAnQgIAAgDgEQgCgCAAgHIAAgEIgWAAQghAAAAgdIAAgfIAKAAQAHAAADADQADACAAAHIAAAVQgBALALAAIAJAAIAAgsIAHAAQAOAAAAAMIAAAgQAHAAACACQACADAAAGIAAAWg");
	this.shape_13.setTransform(23.7,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#24129A").s().p("AAIAaQgFgGgNgTIAAAdIgIAAQgHAAgDgEQgEgDAAgGIAAgvIAIAAQAOABAAALIAAAOIAQgVQADgFAJAAIAPAAIAAABQgLAJgNASIAMAPQAFAGAGABQgBALgMAAQgHgBgEgEg");
	this.shape_14.setTransform(16,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24129A").s().p("AgTAbQgJgFAAgKQAAgSAggBIAEAAIAAgCQAAgGgMAAQgNAAgIAHIAAAAIAAgIQAAgGAGgEQAHgFAMAAQAdAAAAAaIAAAIQAAARgHAGQgGAGgRAAQgKAAgIgFgAgHALQAAAHAIAAQAHgBAAgHIAAgEIgEAAQgLAAAAAFg");
	this.shape_15.setTransform(8.6,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#24129A").s().p("AgPAXIAAgnIAGAAQAJAAACADQAEADAAAJIAAAVQAAAHAIAAIADAAIAAAGQAAAKgMAAQgUAAAAgUgAgNgYQgDgDAAgEQAAgFADgCQAEgDAEgBQAFABACADQAEACAAAFQAAAEgEADQgCADgFAAQgEAAgEgDg");
	this.shape_16.setTransform(0.8,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#24129A").s().p("AAXAeQgNAAAAgNIAAgLIgTAAIAAAYIgHAAQgPAAAAgNIAAguIAJAAQANAAAAAMIAAAJIATAAIAAgVIAHAAQAPAAAAAMIAAAvg");
	this.shape_17.setTransform(-5.4,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#24129A").s().p("AgfABIAAgfIAJAAQAHAAAEADQACACAAAHIAAAUQAAAMAJAAIAKgBIAAgrIAIAAQAOAAAAAMIAAAsQgNAFgSAAQggAAAAgeg");
	this.shape_18.setTransform(-13.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#24129A").s().p("AgTAkQgGgEAAgGIAAgHIABAAQAFAGAQAAQANAAAAgMIAAgFQgDAHgJAAQgNAAgHgGQgJgHAAgMQAAgNAKgIQAKgJAPAAQAcAAAAAbIAAAcQAAALgJAHQgJAIgOAAQgNAAgGgFgAgJgMQAAAMAKAAQAKAAAAgLQAAgMgLAAQgJAAAAALg");
	this.shape_19.setTransform(-20.8,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#24129A").s().p("AgWAXQgIgJAAgNQAAgNAJgJQAJgKANAAQAOAAAHAGQAJAHAAALQAAAIgHADQgHAEgRAAIgIAAQACAIANABQAOAAAGgFIAAAAIAAAGQAAAOgZAAQgOAAgKgJgAgJgFIAJAAQALAAAAgEQAAgGgKgBQgIAAgCALg");
	this.shape_20.setTransform(-27.9,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#24129A").s().p("AgUApQgNAAAAgPIAAgfQAAgQAJgJQAKgKAQABQAOAAAIAIQAKAJAAANQAAAOgIAJQgJAKgNgBQgKABgGgJIAAAagAgLgJQAAAQAMAAQALABAAgOQAAgSgMABQgLAAAAAOg");
	this.shape_21.setTransform(-35.3,0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#24129A").s().p("AgVAXQgJgJAAgNQAAgNAJgJQAJgKAOAAQAMAAAJAGQAIAHAAALQAAAIgIADQgGAEgRAAIgJAAQADAIAMABQAOAAAGgFIABAAIAAAGQAAAOgYAAQgQAAgIgJgAgJgFIAIAAQAMAAAAgEQgBgGgIgBQgKAAgBALg");
	this.shape_22.setTransform(-42.8,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#24129A").s().p("AgRAXQgJgIAAgOQAAgNAJgJQAKgKAPAAQAIAAAFAEQAGAFAAAFIAAAIIgBAAQgEgEgKAAQgQAAAAANQAAAOAPAAQAJAAAGgDIAAAGQAAAGgFAFQgGAEgJAAQgNAAgKgJg");
	this.shape_23.setTransform(-49.4,-0.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#24129A").s().p("AgdAJIAAgjQANgFAQAAQAMAAAIAFQAJAFAAAIQAAAHgIAGQAJAFAAAGQAAAVgeAAQgdAAAAgXgAgIAMQAAADAEACIAEABQAJAAAAgIQAAgEgJAAIgIAAgAgIgQIAAAKIAIAAQAIAAAAgFQAAgGgIAAg");
	this.shape_24.setTransform(-56,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#24129A").s().p("AgTAkQgGgEAAgGIAAgHIABAAQAGAGAPAAQANAAAAgMIAAgFQgDAHgJAAQgNAAgHgGQgJgHAAgMQAAgNAKgIQAKgJAPAAQAcAAAAAbIAAAcQAAALgJAHQgJAIgOAAQgNAAgGgFgAgJgMQAAAMAKAAQAKAAAAgLQAAgMgKAAQgKAAAAALg");
	this.shape_25.setTransform(53.5,-12.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#24129A").s().p("AgXAYQgKgKAAgNQAAgOAKgIQAKgKAOAAQANAAAKAJQAKAIAAAOQAAAPgJAIQgJAJgQAAQgNAAgKgIgAgIgLQgDAFAAAGQAAAPAMAAQAFAAADgDQADgFAAgGQAAgPgMAAQgEAAgEADg");
	this.shape_26.setTransform(46.1,-13.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#24129A").s().p("AAIAaIgSgZIAAAdIgIAAQgGAAgEgDQgEgEAAgFIAAgwIAJAAQANAAAAANIAAANQAJgNAHgIQAEgEAIgBIAPAAIAAABQgNANgLAOIAMAPQAFAFAHACQgCAKgMAAQgHABgEgFg");
	this.shape_27.setTransform(38.9,-13.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#24129A").s().p("AgXAYQgKgKAAgNQAAgOAKgIQAKgKAOAAQANAAAKAJQAKAIAAAOQAAAPgJAIQgJAJgQAAQgNAAgKgIgAgHgLQgEAFAAAGQAAAPAMAAQALAAAAgOQAAgPgMAAQgEAAgDADg");
	this.shape_28.setTransform(31.1,-13.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#24129A").s().p("AAiAeQgNAAAAgLIgBgWQgIAYgFAJIgFAAQgKAAgGgRIgFgQIgCAhIgIAAQgFAAgDgDQgEgDAAgFQAAgWAHgaIAHAAQALAAAGAGIAHAQIADAMIAJgWQAFgKADgCIAFAAQAPAAABAOQAEAcAAARg");
	this.shape_29.setTransform(22.5,-13.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#24129A").s().p("AgXAYQgJgKAAgNQgBgOALgIQAJgKAOAAQANAAAJAJQALAIgBAOQABAPgKAIQgIAJgQAAQgNAAgKgIgAgHgLQgEAFAAAGQAAAPAMAAQALAAAAgOQAAgPgMAAQgEAAgDADg");
	this.shape_30.setTransform(14,-13.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#24129A").s().p("AgTAoQgOAAAAgOIAAgfQAAgRAJgJQAJgIAQgBQAOAAAJAJQAKAIAAAOQAAAPgJAIQgIAJgNAAQgKAAgGgIIAAAZgAgIgUQgDAFAAAGQAAAQAMABQALAAAAgOQAAgKgDgEQgDgDgGgBQgFAAgDAEg");
	this.shape_31.setTransform(6.3,-12.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#24129A").s().p("AAXAfQgIAAgCgDQgDgCAAgHIAAgVQAAgLgKAAIgJABIAAArIgIAAQgOAAAAgMIAAgsQAPgFAQAAQAgAAAAAeIAAAfg");
	this.shape_32.setTransform(-1.4,-13.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#24129A").s().p("AgcANIAAgrIALAAQALAAAAAJIAAALQAFgCAFAAQALAAAHAGQAHAGAAAJQAAAWgdAAQgcAAAAgSgAgGADIAAAMIAGABQAIAAAAgHQAAgHgIAAg");
	this.shape_33.setTransform(-11.1,-13.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#24129A").s().p("AgTAkQgGgEAAgGIAAgHIAAAAQAHAGAPAAQANAAAAgMIAAgFQgBADgEACQgDACgEAAQgNAAgHgGQgJgHAAgMQAAgNAKgIQAKgJAOAAQAdAAAAAbIAAAcQAAALgJAHQgKAIgNAAQgNAAgGgFgAgJgMQAAAMAKAAQAJAAAAgLQAAgMgKAAQgJAAAAALg");
	this.shape_34.setTransform(-18.4,-12.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#24129A").s().p("AgXAYQgKgKABgNQAAgOAKgIQAJgKAOAAQANAAAKAJQAKAIAAAOQAAAPgKAIQgJAJgPAAQgNAAgKgIgAgIgLQgDAFAAAGQAAAPALAAQAMAAAAgOQAAgPgMAAQgEAAgEADg");
	this.shape_35.setTransform(-25.8,-13.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#24129A").s().p("AAAATIgDgIQgKAKAAAJIgJAAQgIAAAAgIQgBgJAMgMIAFgCIgOgSQgDgGAAgFIALAAQAGABAEAEIAGAGIAEAGQAKgJABgIIAHAAQAJAAAAAIQAAAFgGAIIgKAKIAFAHQAJAKAHACQAAALgMgBQgKABgKgMg");
	this.shape_36.setTransform(-32.9,-13.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#24129A").s().p("AgTAbQgJgFAAgJQAAgUAgAAIADAAIAAgCQAAgGgLAAQgOAAgHAGIgBAAIAAgHQAAgGAHgFQAHgEAMAAQAdAAAAAbIAAAIQAAAQgHAGQgGAGgRAAQgKAAgIgFgAgHAMQAAAFAHAAQAIAAAAgHIAAgEIgFAAQgKgBAAAHg");
	this.shape_37.setTransform(-39.8,-13.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#24129A").s().p("AAYAeQgOAAAAgNIAAgLIgTAAIAAAYIgIAAQgOAAAAgNIAAguIAJAAQANAAAAAMIAAAJIATAAIAAgVIAHAAQAPAAAAAMIAAAvg");
	this.shape_38.setTransform(-47,-13.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#24129A").s().p("AgUAkQgIgEAAgIIAAgJIABAAQAHAIAQAAQAMAAABgHQgBgEgCgCQgEgCgHgBQgKgBAAgGIAAgFIALAAQAMAAAAgJQAAgIgOAAQgMAAgJAIIAAAAIAAgJQAAgGAGgFQAIgFANAAQAMAAAIAGQAIAHAAAKQAAALgLAFQAEABAFAEQADAFAAAFQAAAZggAAQgKAAgHgEg");
	this.shape_39.setTransform(-54.5,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-58.9,-18.1,117.9,36.2), null);


(lib.t1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31E24").s().p("AAmBuQgHgHAAgMIAAhEIgBAAIhABTQgJALgLAAQgKAAgHgHQgHgHAAgMIAAh6QAAgLAHgHQAHgHAKAAQALAAAHAHQAGAHAAALIAABCIABAAIA8hNQALgOANAAQAKAAAHAHQAHAHAAALIAAB6QAAAMgHAHQgHAHgKAAQgLAAgGgHgAgehHQgSgJAAgRQAAgHAEgGQAEgGAHAAQALAAAIALQAIALAJAAQAIAAAJgLQAIgLALAAQAGAAAFAHQAEAFAAAHQAAAQgSAKQgPAIgSAAQgSAAgPgIg");
	this.shape.setTransform(85,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E31E24").s().p("AgQBzQgHgHAAgMIAAh6QAAgLAHgHQAHgHAJAAQAKAAAIAHQAGAHAAALIAAB6QAAAMgGAHQgIAHgKAAQgJAAgHgHgAgShNQgIgIAAgKQAAgKAIgIQAJgIAJAAQALAAAIAIQAIAIAAAKQAAALgIAHQgIAIgLAAQgKAAgIgIg");
	this.shape_1.setTransform(72.1,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E31E24").s().p("AhNBzQgHgIAAgKIAAi/QAAgLAHgHQAGgHALAAQATAAAFATQANgVAfAAQAlAAAVAdQATAZAAAlQAAAigVAZQgXAbgiAAQgYAAgTgQIAAA5QAAAKgHAIQgHAHgKAAQgLAAgGgHgAgbhAQgJANAAARQAAAUAJANQAKAOARAAQASAAAKgNQAJgOAAgSQAAgSgJgNQgKgQgSAAQgRAAgKAPg");
	this.shape_2.setTransform(59.2,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E31E24").s().p("ABeBuQgFgFgCgMIgUiAIAAAAIgpCFQgFASgVAAQgUAAgGgSIgniFIgBAAIgTCAQgCAMgGAFQgGAGgMAAQgLAAgGgGQgIgHAAgKIABgFIAfiyQABgJAJgIQAKgIAMAAQAMAAAKAHQAJAHADAKIAmB9IAAAAIAoh9QADgKAIgHQAKgHAMAAQANAAAJAIQAJAIACAJIAeCyIAAAFQAAAKgGAHQgHAGgKAAQgNAAgGgGg");
	this.shape_3.setTransform(34.9,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E31E24").s().p("AAmBQQgHgHAAgMIAAgtIg9AAIAAAtQAAAMgHAHQgGAHgLAAQgKAAgHgHQgHgHAAgMIAAh6QAAgLAHgHQAHgHAKAAQALAAAGAHQAHAHAAALIAAAnIA9AAIAAgnQAAgLAHgHQAGgHALAAQAKAAAHAHQAHAHAAALIAAB6QAAAMgHAHQgHAHgKAAQgLAAgGgHg");
	this.shape_4.setTransform(11.2,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E31E24").s().p("Ag7BLQgSgOgBgbQAAg7BtAAIAAgMQAAgMgWAAQgPAAgMAIQgMAHgFAAQgLAAgFgGQgFgFAAgJQAAgNAXgKQAVgLAVAAQAiAAASANQARANABAZIAABjQgBALgGAHQgGAHgLAAQgTAAgDgRQgHAJgNAFQgMAFgMAAQgeAAgSgOgAgKAKQgVAFAAATQAAARAdAAQAigBABgiIAAgIQgiAAgJACg");
	this.shape_5.setTransform(-7.1,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E31E24").s().p("Ag8A/QgZgYAAgnQAAgjAYgaQAZgbAkAAQAlAAAZAbQAYAaAAAfQAAAUgVgBIhlAAQACAQANAKQAMAHARABQAOgBASgIQASgKAEAAQAIAAAGAGQAGAHAAAHQAAAOgaANQgZAMgbAAQgnAAgZgagAAmgOQgCgQgKgJQgKgKgQAAQgPAAgKAKQgKAJgCAQIBLAAIAAAAg");
	this.shape_6.setTransform(-24.6,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E31E24").s().p("AAfBJIg6g8IAAAAIAAAwQAAAMgHAHQgHAHgKAAQgLAAgGgHQgHgHAAgMIAAh6QAAgLAHgHQAGgHALAAQAKAAAHAHQAHAHAAALIAAAqIAzg5QAJgKANAAQAIAAAGAGQAGAGAAAJQAAAIgJAKIgtAsIA6A1QAGAGAAAKQAAAIgGAHQgHAGgJAAQgJAAgOgOg");
	this.shape_7.setTransform(-41.2,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E31E24").s().p("AhSBUQgfgiAAgyQAAgyAfghQAhgiAxAAQAyAAAhAjQAfAhAAAxQABAyggAiQggAigzAAQgxAAghgigAgugyQgPAUAAAeQAAAfAPAUQARAXAdAAQAeAAARgXQAPgUAAgfQAAgegPgUQgSgXgdAAQgcAAgSAXg");
	this.shape_8.setTransform(-62.1,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E31E24").s().p("AAGBxQgFgEAAgGIABgHIAHgvIgfAAIgHAzQgDAQgOAAQgGAAgFgDQgEgEAAgGIAAgHIAHgvIgdAAQgHAAgFgFQgEgEAAgGQAAgGAEgEQAEgGAIAAIAiAAIAFgjIgdAAQgHAAgFgFQgEgEAAgHQAAgFAEgFQAFgFAHAAIAiAAIAHgzQACgQAPAAQAGAAAEAEQAFAEAAAFIgBAHIgGAvIAeAAIAIgzQACgQAOAAQAGAAAFAEQAFAEAAAFIgBAHIgHAvIAdAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAIghAAIgGAjIAdAAQAIAAAEAGQAEAEAAAGQAAAGgEAEQgEAFgIAAIghAAIgIAzQgCAQgOAAQgHAAgEgDgAgRASIAeAAIAGgjIgfAAg");
	this.shape_9.setTransform(-84.1,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFED00").s().p("AttDYQhZAAg/hAQhAg/AAhZQAAhYBAhAQA+g/BaAAIbbAAQBZAABAA/QA/A/AABZQAABZg/A/QhABAhZAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_5, new cjs.Rectangle(-109.4,-21.6,218.8,43.2), null);


(lib.t1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFED00").s().p("AAlBgQgHgGAAgKIAAg+IAAAAIhBBMQgGAIgLAAQgJAAgHgHQgGgGAAgJQAAgHAGgGIAygzQgYgEgOgMQgQgPAAgWQAAhABIAAIA0AAQAXAAAAAWIAACfQAAAKgHAGQgGAGgJAAQgKAAgGgGgAgTg3QgHAGAAAMQAAAMAHAHQAIAHALAAIAeAAIAAgzIgeAAQgLAAgIAHg");
	this.shape.setTransform(34.7,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFED00").s().p("AgOBhQgHgGAAgLIAAifQAAgLAHgGQAFgFAJgBQAWAAAAAXIAACfQAAALgGAGQgGAFgKABQgJgBgFgFg");
	this.shape_1.setTransform(21.6,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFED00").s().p("ABDB3QgGgGAAgLIAAgXIiPAAQgKAAgGgGQgGgGAAgLIAAieQAAgWAWAAQAKAAAFAGQAHAGAAAKIAACPIBbAAIAAiPQAAgKAHgGQAGgGAKAAQAKAAAFAGQAHAGAAAKIAACPIAHAAQAKAAAGAGQAGAGAAAKIAAAnQAAALgGAGQgGAGgKAAQgKAAgGgGg");
	this.shape_2.setTransform(7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFED00").s().p("AAmBZIhLhPIAABIQgBAJgFAFQgHAHgKAAQgJgBgHgFQgGgGAAgJIAAijQAAgIAGgGQAGgHAKAAQAKABAGAFQAHAGAAAJIAAA9IBHhKQAIgHAJgBQAJABAGAFQAHAGAAAIQAAAJgPAPIg4A0IBFBDQAMANAAAJQAAAUgXAAQgKAAgMgOg");
	this.shape_3.setTransform(-13.3,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFED00").s().p("AAyBZIgJgbIhRAAIgIAaQgFAPgRABQgJgBgGgFQgGgGAAgIIACgJIA7iaQAEgKAIgGQAIgIAKABQAYgBAIAYIA6CaQACAFAAAFQAAAIgGAFQgGAGgIAAQgRAAgFgPgAAcAXIgbhRIgBAAIgbBRIA3AAg");
	this.shape_4.setTransform(-32.9,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_4, new cjs.Rectangle(-42.1,-12.6,84.3,25.2), null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAvQgFgFAAgHQAAgGAFgFQAFgFAGABQAHgBAFAFQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEgAABALQgOAAAAgOIgCgvIAOAAQAOAAAAAOIgCAvg");
	this.shape.setTransform(114.7,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBBQgGAAgFgEQgGgEAAgIIAAgvIgWApQgNAWgSAAIgOAAIAAhmIAPAAQAGAAAFAEQAEAEAAAGIAAAsIATglQALgVAWAAIAPAAIAABmgAgQgrQgHgHAAgJIAAgFQAKALANAAQAIAAAHgDQAGgEADgEIAAAFQAAAJgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_1.setTransform(106.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAzQgGAAgDgDQgFgFAAgIIAAhVIAQAAQAEgBAEAEQAFAEAAAGIAABYg");
	this.shape_2.setTransform(97.9,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA0QgHAAgFgEQgFgFAAgIIAAhSQATgEANAAIAMAAQARAAALAIQALAKAAAPQAAARgLAJQgMAKgRAAIgNgBIAAAjgAgLgcIAAAXQAEABAHAAQANAAAAgLQAAgOgNAAg");
	this.shape_3.setTransform(90.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4AzQgSABAAgRQAAgZgCgYIgPAqQgFAOgGAJIgIAAQgPABgKgdIgMgmQgEAdAAAlIgLAAQgHAAgFgDQgFgGgBgHQAAgsAKgpIAKAAQAXgBAIASIAHAUQAIAOACANIAUguQAGgNAGgFIAGAAQAWAAADAWQAGAkgBArg");
	this.shape_4.setTransform(78.1,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAxQgLgGAAgLIAAgLIABAAQAMAKAVAAQARAAAAgJQAAgGgFgDQgDgCgLgBQgNgCgBgJIAAgHIAQAAQAKAAADgDQACgDABgFQgBgLgSAAQgSAAgLAKIgBAAIAAgLQAAgJAJgGQALgHASAAQAQAAALAIQAMAJAAAOQAAAPgQAHQAGABAFAGQAGAGgBAHQABAQgMAKQgMAIgVAAQgOAAgJgFg");
	this.shape_5.setTransform(61.9,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAABEQgFAAgEgEQgEgFAAgHIAAhWIAQAAQAEAAAFAEQAEADAAAHIAABYgAAJguQgEgDAAgFQAAgGAEgEQAFgDAFAAQAFAAAFADQADAEAAAGQAAAFgDADQgFAEgFAAQgFAAgFgEgAgcguQgDgDAAgFQAAgGADgEQAFgDAFAAQAFAAAEADQAFAEAAAGQAAAFgFADQgEAEgFAAQgFAAgFgEg");
	this.shape_6.setTransform(54.5,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAmIAAgHIANgBQAIgBAFgGQgLgPgLgUQgMgYgEgPIAPAAQAPAAAEAMQAEANAOAaQAQgaAFgZIAPAAQALAAAAAJQAAAPgWAjQgTAfgJAHQgGAGgNAAQgSAAAAgOg");
	this.shape_7.setTransform(46.7,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZA0QgGAAgFgEQgFgFAAgIIAAhSQASgEAOAAIALAAQARAAAMAIQALAKAAAPQAAARgLAJQgMAKgRAAIgNgBIAAAjgAgLgcIAAAXQAFABAGAAQAMAAAAgLQAAgOgMAAg");
	this.shape_8.setTransform(37.2,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANAsQgNgOgTgcIAAAxIgMAAQgKAAgFgFQgDgFAAgGIAAhWIAKAAQAJAAAFAFQAGAFAAAGIAAAbQARgYAMgMQAHgHALAAIAXAAIAAAAQgYAXgTAZQAOASAJAKIAJAHQADADAHABQgDAJgEADQgEAEgHAAQgLAAgIgIg");
	this.shape_9.setTransform(26.9,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAkBBQgGAAgFgEQgGgEAAgIIAAgvIgWApQgNAWgSAAIgOAAIAAhmIAPAAQAGAAAFAEQAEAEAAAGIAAAsIATglQALgVAWAAIAPAAIAABmgAgQgrQgHgHAAgJIAAgFQAKALAOAAQAHAAAHgDQAGgEADgEIAAAFQAAAJgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_10.setTransform(11.3,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkAzQgHAAgEgDQgGgFAAgIIAAguIgXApQgMAVgTAAIgNAAIAAhlIAPAAQAGAAAEADQAFAEAAAGIAAAsIATglQALgUAWAAIAPAAIAABlg");
	this.shape_11.setTransform(-0.3,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAsQgQgRgRgZIAAAxIgLAAQgJAAgGgFQgDgFAAgGIAAhWIAKAAQAJAAAGAFQAEAFAAAGIAAAbQASgYALgMQAIgHAMAAIAVAAIAAAAQgUASgXAeQASAWAGAGQAJAKAKABQgDAJgEADQgEAEgHAAQgMAAgHgIg");
	this.shape_12.setTransform(-11.2,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGA0QgjAAAAgbIAAhMIAPAAQAGAAAFAEQAEADAAAGIAAAWQAGgBAHAAQARAAALAKQAMAJAAARQAAAPgMAKQgKAIgSAAgAgLAGIAAAXIALAAQAMAAAAgNQAAgMgMAAg");
	this.shape_13.setTransform(-22,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAoQgRgPAAgYQAAgWAQgQQAQgQAZAAQAQAAAJAHQAJAGAAALIAAALIgBAAQgJgLgWAAQgNAAgHAIQgJAIAAAMQAAAOAJAJQAHAIAOAAQATAAALgKIAAAAIAAALQAAAKgJAGQgKAHgQAAQgWAAgQgOg");
	this.shape_14.setTransform(-32.1,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiAzQgGAAgFgDQgGgFABgIIAAgZIgiAAIAAApIgOAAQgGAAgFgDQgGgFAAgIIAAhVIAQAAQAGAAAEADQAFAEAAAGIAAAZIAiAAIAAgmIAOAAQAGgBAEAEQAGAEAAAGIAABYg");
	this.shape_15.setTransform(-43,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmAzQgQAAgCgMIgDgMIgkAAQgDAKgDAOIgMAAQgOABAAgNQAAgNANgeQAOghANgNIALAAQAOAAAGAKQAJAOAJAZQAKAcAEAYgAALAFQgEgNgHgRQgHAMgGASIAYAAIAAAAg");
	this.shape_16.setTransform(-53.9,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADA0QgrAAAAgqIAAgRQAAgRACgKQADgRASAAIA6AAIAAAGQAAARgSAAIggAAIgBASIApAAIAAAKQAAAKgRAAIgYAAIAAAEQAAAJAEADQAEADAKAAIAHAAQAPAAALgDIAAALQAAAPgaAAg");
	this.shape_17.setTransform(-63.7,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMAsQgPgRgQgZIAAAxIgNAAQgIAAgFgFQgFgFAAgGIAAhWIALAAQAJAAAFAFQAFAFABAGIAAAbQARgYALgMQAFgEAEgCQAEgBAGAAIAXAAIAAAAQgVASgWAeQARAWAGAGQAJAKAJABQgCAJgEADQgEAEgIAAQgLAAgIgIg");
	this.shape_18.setTransform(-73.7,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmAoQgOgPAAgXQAAgZAOgPQAPgPAZAAQAUAAAQANQAPAQAAAXQAAAZgOAPQgPAPgZAAQgWAAgPgOgAgRgWQgGAIAAANQAAAgAYAAQALgBAFgHQAHgIgBgOQAAgfgYAAQgKAAgGAIg");
	this.shape_19.setTransform(-85.8,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAmAzQgQAAgCgMIgDgMIglAAIgFAYIgMAAQgNABAAgNQAAgNAMgeQAOghAMgNIAMAAQAOAAAGAKQAJANAJAaQAKAcADAYgAALAFQgGgTgGgLQgHAPgFAPIAYAAIAAAAg");
	this.shape_20.setTransform(-100.7,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAiAzQgGAAgFgDQgFgFAAgIIAAgZIgiAAIAAApIgOAAQgGAAgFgDQgFgFAAgIIAAhVIAPAAQAGAAAEADQAEAEAAAGIAAAZIAjAAIAAgmIAOAAQAGgBAEAEQAFAEAAAGIAABYg");
	this.shape_21.setTransform(-111.6,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-116.3,-6.9,232.7,13.9), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBGQgJAAgGgFQgIgGAAgKIAAgkIgvAAIAAA5IgSAAQgJAAgHgFQgHgGAAgKIAAh3IAVAAQAIABAFAFQAGAFABAHIAAAjIAvAAIAAg1IAUAAQAIAAAGAFQAHAGAAAHIAAB6g");
	this.shape.setTransform(114.4,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBHQgJAAgGgFQgIgHAAgMIAAhwQAggFANgBIAPAAQAYAAAPAMQAQAMAAAWQAAAXgQANQgQAOgXAAQgMAAgHgCIAAAwgAgQgnIAAAfQAGACAKAAQARAAAAgPQAAgTgRAAIgIAAg");
	this.shape_1.setTransform(100.6,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBGQgWAAAAgSIAAhgQAAgaAeAAIBDAAIAAAPQAAAIgFAEQgGAHgKgBIgjAAIAABrg");
	this.shape_2.setTransform(88.5,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhkCIQgtgwAAhSQABhdAogvQAlgrBHAAQBBAAAkAmQApAsAABZQgBBaggAtQglAxhNAAQg7AAgogqgAghhQQgNAXAAA4QAAA4AOAYQALAVAVAAQAaAAAKgTQALgXAAg7QAAg4gMgWQgLgUgYAAQgWAAgLATg");
	this.shape_3.setTransform(59.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkCIQgsgwAAhSQAAhdAogvQAmgrBGAAQBBAAAkAmQAoAsAABZQABBagiAtQgjAxhOAAQg7AAgogqgAghhQQgNAXAAA4QAAA4ANAYQAMAVAVAAQAaAAAKgTQALgXAAg7QAAg4gMgWQgKgUgZAAQgWAAgLATg");
	this.shape_4.setTransform(27.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhkCIQgsgwAAhSQAAhdAogvQAlgrBHAAQBBAAAkAmQAoAsAABZQAABaghAtQgkAxhNAAQg7AAgogqgAghhQQgNAXAAA4QAAA4AOAYQALAVAVAAQAaAAAKgTQALgXAAg7QAAg4gMgWQgLgUgYAAQgWAAgLATg");
	this.shape_5.setTransform(-4.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhkCIQgsgwAAhSQAAhdAngvQAmgrBHAAQBBAAAkAmQAoAsABBZQAABagiAtQgkAxhNAAQg8AAgngqgAghhQQgNAXAAA4QAAA3ANAZQAMAVAVAAQAaAAAKgTQALgXAAg7QAAg4gMgWQgLgUgYAAQgWAAgLATg");
	this.shape_6.setTransform(-48.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhkCIQgtgwAAhSQABhdAogvQAlgrBHAAQBBAAAkAmQApAsAABZQgBBaggAtQglAxhOAAQg6AAgogqgAghhQQgNAXAAA4QAAA4AOAYQALAVAVAAQAaAAAKgTQALgXAAg7QAAg4gMgWQgLgUgYAAQgWAAgLATg");
	this.shape_7.setTransform(-80.4,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA1CqQgXAAgOgNQgPgOAAgYIAAjDIggAKQgLADgKAAQgQAAgLgHQgLgHgCgMIgGghIBdglQAYgLAhAAQATAAANAMQAPAMAAATIAAEpg");
	this.shape_8.setTransform(-111,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-120.9,-17.8,241.8,35.7), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTCVQgPAAgMgJQgMgKAAgRIAAhtQgFAKgIANIgoBIQgRAcgQAMQgRAKgVAAIgfAAIAAjrIAiAAQAOAAAKAJQAKAJAAANIAABmIAthUQAZgxAyAAIAjAAIAADrgAglhkQgQgPAAgWIAAgKQAXAZAfAAQASAAAPgJQAOgHAHgKIAAAMQAAAVgQAPQgQAOgWAAQgXAAgPgOg");
	this.shape.setTransform(81.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABXB2QgTAAgJgGQgKgGgEgQQgCgQgEgMIhVAAQgEAPgIApIgcAAQgfAAAAgdQAAgeAdhFQAfhNAegeIAaAAQAfAAAQAZQAUAgAVA6QAYBAAHA4gAAZALQgMgngPgeQgRAfgMAmIA4AAIAAAAg");
	this.shape_1.setTransform(56,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUB5QgmAAgUgPQgWgQAAgeIAAioQAOgEAXgEQAYgEAQAAIAdAAQAnAAAZASQAbASAAAfQAAAQgNAPQgMAOgQAEQASAEAOAPQANAPAAAPQAAAkgdAVQgbATgnAAgAggA3QAAALANAAIAUAAQAgAAAAgWQAAgOgIgGQgHgFgSAAIggAAgAgghCIAAAqIAeAAQAfAAAAgYQAAgUgdAAg");
	this.shape_2.setTransform(32.5,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABYB2QgTAAgKgGQgKgGgDgQIgHgcIhUAAQgHAVgGAjIgcAAQgfAAAAgdQAAgeAdhFQAfhNAegeIAaAAQAgAAAPAZQAUAgAVA6QAYBAAHA4gAAZALQgMgngPgeQgRAfgMAmIA4AAIAAAAg");
	this.shape_3.setTransform(8.2,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5B4QgPAAgLgKQgMgLAAgUIAAi8QAtgKAdAAIAaAAQAoAAAZAUQAaAVAAAkQAAAlgaAXQgaAXgoAAQgUAAgLgDIAABSgAgbhCIAAA1QAJADARAAQAdAAAAgbQAAgRgIgIQgGgFgOAAIgNAAQgIAAgGABg");
	this.shape_4.setTransform(-13.8,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtB2QgQAAgKgIQgKgJAAgPIAAigQAAgrAyAAIBxAAIAAAZQAAALgJAKQgKAKgRgBIg6AAIAAC0g");
	this.shape_5.setTransform(-33.9,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABTB2QgPAAgMgJQgMgLAAgRIAAhrQgFAJgIAOIgoBHQgRAcgRALQgQALgVAAIgfAAIAAjrIAiAAQAOAAAKAJQAKAJAAAMIAABnIAthVQAZgwAyAAIAjAAIAADrg");
	this.shape_6.setTransform(-57.6,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUB5QgmAAgVgPQgVgQAAgeIAAioQAOgEAXgEQAXgEAQAAIAeAAQAmAAAaASQAaASABAfQAAAQgNAPQgMAOgQAEQASAEAOAPQANAPAAAPQAAAkgeAVQgaATgnAAgAggA3QAAALANAAIAUAAQAgAAAAgWQAAgOgHgGQgIgFgSAAIggAAgAgghCIAAAqIAeAAQAfAAAAgYQAAgUgdAAg");
	this.shape_7.setTransform(-82.5,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-92.6,-15,185.3,30.1), null);


(lib.ship_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ship();
	this.instance.parent = this;
	this.instance.setTransform(-148,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ship_mc, new cjs.Rectangle(-148,-93,296,186), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24129A").s().p("Ah1CpIAAlJIA8AAIAABBIAAAAQAPgnASgQQAUgSAgAAQA0AAAVAvQARAjAAA5QAAA5gYAoQgbAtgvAAQgeAAgUgRQgQgMgHgUIgBAAIAABpgAgthNQgMAUAAAfQgBAoAMAUQAOAZAiAAQAZAAARgYQAQgXAAgiQAAgngMgTQgOgYgiAAQgeAAgPAbg");
	this.shape.setTransform(10.2,28.4,0.336,0.336);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24129A").s().p("AhgBsQgPgYAAgtIAAivIBAAAIAACUQgBAjAGAMQAIATAbAAQAcAAAPgXQAMgUAAgeIAAiNIBAAAIAAEJIg9AAIAAhAIgBAAQgVBIg/AAQgsAAgSgdg");
	this.shape_1.setTransform(1.3,27.6,0.336,0.336);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24129A").s().p("Ah2B/QgdgNAAglIAAjRIBhAAIAyC8IABAAIA0i8IBfAAIAAEJIg5AAIAAjIIgBAAIg9DIIg5AAIg8jIIgBAAIAADIIgDAAQgNAAgNgGg");
	this.shape_2.setTransform(-8.7,27.5,0.336,0.336);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24129A").s().p("AhAAnIAAgxQAMAEAQgBIAggGQArgJAagUIAAA2QgeATgjAHQgSAFgSAAQgPAAgNgEg");
	this.shape_3.setTransform(25.8,5.8,0.336,0.336);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24129A").s().p("AhiBtQgPgYAAgtIAAiyIBBAAIAACXQAAAjAFAMQAJATAbAAQAcAAAQgYQAMgUAAgeIAAiPIBBAAIAAENIg+AAIAAhBIgBAAQgVBJhAAAQgtAAgTgeg");
	this.shape_4.setTransform(24.2,13.1,0.336,0.336);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24129A").s().p("AAxCHIAAhwIhhAAIAABwIhAAAIAAkNIBAAAIAABuIBhAAIAAhuIBAAAIAAENg");
	this.shape_5.setTransform(3.4,12.9,0.336,0.336);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24129A").s().p("AgfCHIAAkNIA/AAIAAENg");
	this.shape_6.setTransform(18,12.9,0.336,0.336);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24129A").s().p("AhvCIIAAkPIBAAAIAABTIAxAAQBuAAAABeQAAA0gfAWQgaAUg3AAgAgvBbIAsAAQAVAAANgKQARgMAAgbQAAgdgTgKQgMgGgWAAIgqAAg");
	this.shape_7.setTransform(12.3,12.9,0.336,0.336);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#24129A").s().p("AhgCPIAAg2QAgAiA1AAQAcAAARgMQAZgPgBgjIAAggIAAAAQgZA2g0AAQg1AAgagoQgVgiAAg0QAAiABnAAQA+AAAOAzIABAAIAAgrIA7AAIAADqQAAA0giAaQgdAXg1AAQg9AAgngdgAg8gnQAAAeAPATQAQAVAcAAQAeAAAQgXQAOgSgBghQAAhEg6AAQg8AAAABIg");
	this.shape_8.setTransform(-5.8,13.9,0.336,0.336);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24129A").s().p("AhdBpQggglAAhHQAAiLB9AAQB+AAAACLQAABHggAlQggAmg+AAQg9AAgggmgAhCgBQAABZBCAAQBDAAAAhZQAAhMhDAAQhCAAAABMg");
	this.shape_9.setTransform(-14.9,12.9,0.336,0.336);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#24129A").s().p("Ag4CjQgQgBgPgKQgfgRAAglIAAkEICPAAQAhAAAWANQAiATAAAuQAAAmgZAUQgWAUgpACIAAAAQAvACATAMQAbARAAArQAAAygfAXQgcAUg3AAgAg1BHQAAAUAKAJQAJAIANAAIAbAAQAZAAAMgKQALgKAAgVQAAgWgLgJQgMgLgZAAIg7AAgAg1gaIA4AAQAuAAAAgnQAAgUgKgJQgLgKgWAAIg7AAg");
	this.shape_10.setTransform(-24,12,0.336,0.336);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24129A").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgKAKgPAAQgNAAgLgKgAgTgUQgIAIAAAMQAAAMAIAJQAIAJALAAQAMAAAIgJQAIgJAAgMQAAgMgIgIQgIgJgMAAQgLAAgIAJgAALAUIgLgSIgGAAIAAASIgGAAIAAgoIAOAAQAOAAAAAMQAAAJgKABIAMASgAgGgCIAGAAQAKAAAAgGQAAgHgJAAIgHAAg");
	this.shape_11.setTransform(16.3,24.1,0.336,0.336);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#24129A").s().p("AtGjRQBygCCIA4QB5AyBFBAQBTjUCthxQCbhkC8AAQEaAAC5DPQBSBbAtB1QAsByAAB3IgGDXQhQAihbAPQhSAOhlAAQjVABkmhAQkVg8jgAmQhQAOhZAdIiKAxIgCqkgAATEsQDkAwCaALQDRAPB1gwQADhYAAgoQAAjriTidQiWigjnAAQj3AAiUCyQiCCdgBDWQgdg0h7hcQiWhvhygOIABGKQCcg+CDgIQAbgCAeAAQClAAD5A0g");
	this.shape_12.setTransform(0,-13.5,0.336,0.336);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#24129A").s().p("AgyA2QgVgVgBgfQgBgeAVgWQAVgXAegBQAeAAAWAVQAWAVAAAfQABAegVAXQgVAWgeABIgCAAQgdAAgVgVg");
	this.shape_13.setTransform(18.8,-6.5,0.336,0.336);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B79775").s().p("ABzA6QjZg4iPgcQjJgpi6gBQjWgCiFAfQgkAJg2AQIhaAaIAAgGQB6g7B/geQD+g7EkAdQDWAVDbA7QD3BCEqAZQB5AKBcgBQBzgBBigSQAZgEAjgLIA7gTIABAGIgqATQi1BOjdAFIhCABQkaAAj9hBg");
	this.shape_14.setTransform(0,42.5,0.336,0.336);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AJmVGQkqgZj3hCQjag8jXgVQkkgcj9A7QiAAdh6A9MAAAgpiMAkPAAAMAAAAppIg8AUQgiAKgaAFQhiARhyACIgJAAQhaAAhzgKg");
	this.shape_15.setTransform(0,-0.9,0.336,0.336);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-39,-46.6,78,93.4), null);


(lib.ic_img3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ic3();
	this.instance.parent = this;
	this.instance.setTransform(-37,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic_img3, new cjs.Rectangle(-37,-32,74,64), null);


(lib.ic_img2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ic2();
	this.instance.parent = this;
	this.instance.setTransform(-34,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic_img2, new cjs.Rectangle(-34,-34,68,68), null);


(lib.ic_img1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ic1();
	this.instance.parent = this;
	this.instance.setTransform(-36.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic_img1, new cjs.Rectangle(-36.5,-28.5,73,57), null);


(lib.gift3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAaQgCgDAAgEQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAEgCADQgDADgEgBQgDABgDgDgAABAGQgIAAAAgHIgBgaIAIAAQAHgBAAAJIgBAZg");
	this.shape.setTransform(56.9,70.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAJIAAgXIAHAAQAKAAAAAJIAAAPQAAAJAGAAIAHgBIAAggIAGAAQALAAAAAJIAAAhQgKADgNAAQgYAAAAgWgAgJgTQgEgDAAgGIAAgCQAFAGAIAAQAIAAAFgGIAAADQgBAFgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1.setTransform(52.7,70.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLARIAAgdIAEAAQAHABACACQACACAAAGIAAAQQAAAFAHAAIACAAIAAAEQAAAIgJAAQgPAAAAgPgAgJgSQgDgCAAgDQAAgEADgCQACgCAEAAQAHAAAAAIQAAAHgHABQgEgBgCgCg");
	this.shape_2.setTransform(48.4,70.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAfQgKAAAAgMIAAgWQAAgaAZAAQALAAAGAGQAHAGAAAKQAAALgGAHQgGAGgKAAQgIAAgDgFIAAATgAgIgHQAAAMAJABQAIgBAAgJQAAgNgJgBQgIABAAAKg");
	this.shape_3.setTransform(43.8,71.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZAXQgKAAAAgJIgBgQIgJAZIgEAAQgHAAgEgNIgEgMIgCAZIgFAAQgKAAAAgJQAAgQAFgUIAGAAQAIAAAEAFIAGAMIACAJIAGgRQAEgHADgCIADAAQALAAABALQAEATAAAPg");
	this.shape_4.setTransform(37.3,71.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSANIAAgFQAFAEAKAAQAHAAAAgDQAAgEgHAAQgHAAAAgFIAAgEIAHAAQAHAAgBgEQABgDgHAAQgKAAgFAEIAAAAIAAgFQgBgLATAAQAIAAAFAEQAHAEAAAGQAAAGgIADQADAAADADQACADAAACQgBAQgTAAQgTAAABgLg");
	this.shape_5.setTransform(29.4,71.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHASIAAgcIAEAAQAGAAADACQADACgBAGIAAAQQABAFAGAAIACAAIAAAFQAAAHgJAAQgPAAAAgPgAADgZQAAgHAHAAQAIAAAAAHQAAADgCACQgCACgEAAQgHAAAAgHgAgPgUQgCgCAAgDQAAgHAHAAQAIAAAAAHQAAADgCACQgDACgDAAQgCAAgDgCg");
	this.shape_6.setTransform(25.3,70.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAXIAAgFIAHAAQAFAAADgFQgFgJgFgLQgGgOgBgIIAIAAQAIAAABAHQACAJAFAMQAHgMABgQIAIAAQAHAAAAAGQAAAIgKATQgJARgFAFQgDAEgIAAQgKAAAAgHg");
	this.shape_7.setTransform(21.4,72);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAfQgKAAAAgMIAAgWQAAgaAZAAQALAAAHAGQAGAGAAAKQAAALgGAHQgGAGgKAAQgIAAgDgFIAAATgAgIgHQAAAMAJABQAIgBAAgJQAAgNgJgBQgIABAAAKg");
	this.shape_8.setTransform(16,71.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAUIgNgTIAAAWIgHAAQgKAAAAgKIAAgjIAHAAQAKAAAAAJIAAALQAHgKAEgHQAEgDAFAAIAMAAIAAABIgSAUIAJALQADAEAGABQgBAIgKAAQgGAAgCgDg");
	this.shape_9.setTransform(10.6,71.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAJIAAgXIAHAAQAKAAAAAJIAAAPQAAAJAGAAIAIgBIAAggIAFAAQALAAAAAJIAAAhQgKADgNAAQgYAAAAgWgAgJgTQgEgDAAgGIAAgCQAFAGAIAAQAIAAAEgGIAAADQAAAFgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_10.setTransform(2.9,70.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXABIAAgXIAHAAQAJAAAAAJIAAAPQAAAJAHAAIAHgBIAAggIAGAAQALAAAAAJIAAAhQgJADgOAAQgYAAAAgWg");
	this.shape_11.setTransform(-2.9,71.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAGAUIgOgTIAAAWIgGAAQgKAAAAgKIAAgjIAHAAQAKAAgBAJIAAALQAHgKAFgHQADgDAGAAIAMAAIAAABQgLAKgHAKIAJALQADAEAFABQAAAIgKAAQgGAAgCgDg");
	this.shape_12.setTransform(-8.2,71.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAJIAAgfIAIAAQADAAACACQADACAAADIAAAIQADgCAEAAQAJAAAFAFQAEAEAAAHQABAQgWAAQgVAAABgOgAgFACIAAAJIAFABQAFAAABgGQgBgEgFAAg");
	this.shape_13.setTransform(-13.5,71.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMASQgHgHAAgLQAAgJAHgHQAHgHALAAQAFAAAFAEQAEADAAAEIAAAFIAAAAQgEgDgHAAQgMAAAAAKQAAALALAAQAIAAAEgDIAAAAIAAAFQAAAEgFAEQgEADgHAAQgJAAgHgGg");
	this.shape_14.setTransform(-18.3,71.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASAXQgKAAAAgKIAAgJIgOAAIAAATIgGAAQgLAAAAgKIAAgjIAHAAQAKAAAAAKIAAAHIAOAAIAAgRIAFAAQALAAAAAKIAAAjg");
	this.shape_15.setTransform(-23.5,71.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAUQgHgDABgIQgBgOAYAAIADAAIAAgCQAAgEgJAAQgKAAgFAFIgBAAIAAgFQAAgGAFgCQAGgEAIAAQAVAAAAAUIAAAGQAAANgEADQgFAFgMAAQgJAAgFgEgAgFAIQAAAFAFAAQAGAAAAgFIAAgEIgEAAQgHAAAAAEg");
	this.shape_16.setTransform(-28.9,71.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQARQgGgGAAgKQAAgJAHgIQAHgHAJAAQAKAAAGAFQAGAFAAAIQAAAGgFACQgFADgNAAIgGAAQABAGAKAAQAKAAAFgDIAAAAIAAAEQAAALgSAAQgLAAgHgHgAgGgDIAGAAQAIgBAAgDQAAgEgHAAQgHAAAAAIg");
	this.shape_17.setTransform(-34,71.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAGAUIgNgTIAAAWIgHAAQgJAAgBgKIAAgjIAHAAQAKAAAAAJIAAALQAFgKAHgHQADgDAFAAIAMAAIAAABQgMALgGAJIAJALQAEAEAFABQgCAIgIAAQgHAAgCgDg");
	this.shape_18.setTransform(-39.1,71.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgKQAAgKAHgHQAHgHALAAQAKAAAHAGQAHAIAAAJQAAALgHAHQgGAGgMAAQgKAAgHgGgAgFgIQgDAEAAAEQAAAMAIAAQAJAAAAgLQAAgLgJAAQgDAAgCACg");
	this.shape_19.setTransform(-45,71.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAUQgGgDAAgIQgBgOAZAAIABAAIAAgCQABgEgJAAQgJAAgHAFIAAAAIAAgFQAAgMATAAQAVAAABAUIAAAGQAAANgGADQgEAFgMAAQgIAAgGgEgAgFAIQAAAFAFAAQAGAAAAgFIAAgEIgDAAQgIAAAAAEg");
	this.shape_20.setTransform(-52.3,71.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAXQgGAAgDgDQgBgCAAgFIAAgJIgOAAIAAATIgGAAQgLAAAAgKIAAgjIAGAAQALAAAAAKIAAAHIAOAAIAAgRIAFAAQALAAAAAKIAAAjg");
	this.shape_21.setTransform(-57.7,71.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASAXQgKAAAAgKIAAgJIgOAAIAAATIgGAAQgLAAAAgKIAAgjIAGAAQALAAAAAKIAAAHIAOAAIAAgRIAFAAQALAAAAAKIAAAjg");
	this.shape_22.setTransform(33.1,61.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOAeQgKAAAAgLIAAgXQAAgZAZAAQAKAAAHAGQAHAGAAALQAAAKgGAHQgGAHgKAAQgIAAgDgHIAAATgAgIgHQAAAMAJAAQAIAAAAgKQAAgNgJAAQgIAAAAALg");
	this.shape_23.setTransform(27.3,62);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMAVQgHgEABgGQAAgLAMgDQAJgCAAgDQAAgDgHgBQgJAAgFAFIAAAAIAAgGQAAgEAGgDQAFgDAGAAQAHAAAGADQAGAEAAAGQABALgMACQgJABAAAFQAAADAHAAQAJAAAFgEIAAAAIAAAEQAAAMgSAAQgIAAgFgDg");
	this.shape_24.setTransform(22.1,61.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAmQgNgNAAgXQAAgzApAAQAoAAAAAwQAAAZgJAMQgKAOgWAAQgQAAgLgMgAgMAAQAAAcAMAAQAHAAADgFQADgGAAgRQAAgPgDgGQgDgGgHAAQgMAAAAAbg");
	this.shape_25.setTransform(12.2,58.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAmQgNgNAAgXQAAgzApAAQAoAAAAAwQAAAZgJAMQgKAOgWAAQgQAAgLgMgAgJgWQgDAGAAAQQAAAcAMAAQAHAAADgFQADgGAAgRQAAgPgDgGQgDgGgHAAQgGAAgDAFg");
	this.shape_26.setTransform(3.3,58.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAmQgNgNAAgXQAAgzApAAQAoAAAAAwQAAAzgpAAQgQAAgLgMgAgIgWQgEAHAAAPQAAAcAMAAQAIAAADgFQACgGAAgRQAAgbgNAAQgFAAgDAFg");
	this.shape_27.setTransform(-5.7,58.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbAmQgNgNAAgXQAAgzApAAQAoAAAAAwQAAAzgpAAQgQAAgLgMgAgIgWQgEAHAAAPQAAAcAMAAQAHAAADgFQADgGAAgRQAAgPgEgGQgDgGgGAAQgGAAgCAFg");
	this.shape_28.setTransform(-18,58.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbAmQgNgNAAgXQAAgzApAAQAoAAAAAwQAAAZgJAMQgKAOgWAAQgQAAgLgMgAgMAAQAAAcAMAAQAHAAADgFQADgGAAgRQAAgPgDgGQgDgGgHAAQgMAAAAAbg");
	this.shape_29.setTransform(-27,58.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAPAwQgGAAgEgEQgFgEAAgHIAAg2IgIADIgGAAQgKABgBgIIgCgJIAbgLQAGgCAJAAQAFAAAEADQAEADAAAFIAABUg");
	this.shape_30.setTransform(-35.5,58.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D23731").s().p("AqvDWQgUgzADg2QAFhKA2hAQBNhcCPAAQIwAaD9AJQCaAFBRh+QAWghAQgrIAHgSQABgDAAAIQANA6AHA+QAHAzAIBjQAJByg0BOQhEBliYgJInTgYQljgShOgFQhegGgsAxQgMANgLAVQgHAPgDAAQgmgngTgyg");
	this.shape_31.setTransform(-1.7,59.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_3
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAHAZQgHgJgKgPIAAAbIgHAAQgKAAAAgJIAAgvIAGAAQALAAAAAJIAAAPIAPgUQAEgEAHAAIAMAAIAAABQgLAKgNAQIANAPQAGAFAEABQgCAJgIAAQgGAAgEgEg");
	this.shape_32.setTransform(48.5,-73.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAWQgIgIAAgNQAAgNAIgIQAIgJANAAQALAAAIAIQAJAIAAANQAAANgIAIQgIAJgNAAQgMAAgIgIgAgMAAQAAARANAAQAMAAAAgRQAAgQgNAAQgMAAAAAQg");
	this.shape_33.setTransform(41.9,-73.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AATAcQgJABAAgKIAAgOIgSAAIAAAXIgIAAQgJABAAgKIAAguIAIAAQAJgBAAAIIAAANIASAAIAAgUIAIAAQADAAADACQACACAAADIAAAwg");
	this.shape_34.setTransform(35.5,-73.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAVIAAgEIAHAAQAFgBACgDQgQgUgFgVIAJAAQAIAAACAHIAJAVQAJgOADgOIAIAAQAHAAAAAFQAAAKgNASQgLARgEAEQgDADgHAAQgKAAAAgIg");
	this.shape_35.setTransform(29.5,-73.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAdQgJAAAAgKIAAgtQAJgCAIAAIAGAAQAJAAAHAFQAGAFAAAJQAAAJgGAEQgHAGgJAAIgHgBIAAAUgAgGgPIAAANIAGAAQAGAAABgGQgBgIgGAAIgCAAg");
	this.shape_36.setTransform(24.2,-73.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAVAcQgIABgCgIIgCgGIgTAAIgDANIgHAAQgHABAAgIQAAgHAHgPQAHgTAHgHIAGAAQAHAAAEAFQAFAJAFANQAGAPABANgAAGADQgDgKgDgGQgDAGgEAKIANAAIAAAAg");
	this.shape_37.setTransform(18.5,-73.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAbAkQgKAAAAgKIAAgEIgSgBIgPABIAAAEQAAAKgKAAIgGAAIAAgYIAIgCIACgHQAJgaAJgLIAEAAQAFAAADAEQALAQAGAYIAHACIAAAYgAAIAJQgCgLgGgMQgEAKgDANIAPAAIAAAAg");
	this.shape_38.setTransform(12.2,-72.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUAWQgJgIAAgNQABgNAHgIQAJgJANAAQALAAAIAIQAKAIgBANQABANgJAIQgIAJgNAAQgMAAgIgIgAgMAAQAAARANAAQAMAAAAgRQAAgQgNAAQgMAAAAAQg");
	this.shape_39.setTransform(5.6,-73.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AATAdQgJAAAAgJIAAgbQAAgEgCgCQgDgCgFAAIgJAAIAAAsIgHAAQgJAAAAgJIAAgtQAHgDANAAIAHAAQAYAAAAAYIAAAhg");
	this.shape_40.setTransform(-0.9,-73.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAUAkQgKAAAAgJIAAgaIgCAFIgKASQgGAMgLAAIgHAAIAAg4IAIAAQAIAAAAAIIAAAYIAKgUQAGgMAMAAIAJAAIAAA4gAgIgXQgEgEAAgFIAAgCQAGAFAGAAQAJAAAEgGIAAADQAAAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_41.setTransform(-9.2,-74.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAUAcQgJABAAgKIAAgZIgNAXQgHAMgJgBIgIAAIAAg3IAJAAQAHgBABAIIAAAYIAKgUQAFgLANAAIAIAAIAAA3g");
	this.shape_42.setTransform(-15.6,-73.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AATAcQgJABAAgKIAAgOIgTAAIAAAXIgHAAQgJABAAgKIAAguIAIAAQAJgBgBAIIAAANIATAAIAAgUIAIAAQAIgBAAAIIAAAwg");
	this.shape_43.setTransform(-21.9,-73.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEAdQgTAAAAgPIAAgnQALgDAHAAIAGAAQAKAAAGAEQAGAEAAAIQAAADgDAEQgDADgDACQAEAAADADQADAFAAADQAAAIgHAGQgGAEgKAAgAgHANQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAEAAQAIAAAAgGQAAgFgIgBIgHAAgAgHgPIAAAKIAHAAQAHAAAAgFQAAgGgHAAIgDAAg");
	this.shape_44.setTransform(-27.8,-73.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAWQgJgIAAgNQABgNAHgIQAJgJANAAQALAAAIAIQAKAIAAANQAAANgJAIQgHAJgOAAQgMAAgIgIgAgMAAQAAARANAAQAMAAAAgRQAAgQgNAAQgMAAAAAQg");
	this.shape_45.setTransform(-34,-73.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AATAcQgIAAgCgHQgCgMgHgPQgIARgEARIgHAAQgIAAAAgGIADgMQAJgXALgOIAEAAQAEAAAEAEQAQAXAEAcg");
	this.shape_46.setTransform(-40.2,-73.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgUAWQgIgIAAgNQAAgNAIgIQAIgJANAAQALAAAIAIQAJAIAAANQAAANgIAIQgIAJgNAAQgMAAgIgIgAgMAAQAAARANAAQAMAAAAgRQAAgQgNAAQgMAAAAAQg");
	this.shape_47.setTransform(-46.4,-73.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgKAcQgJABAAgJIAAglQAAgKAMAAIAbAAIAAAFQAAAIgJAAIgNAAIAAAqg");
	this.shape_48.setTransform(-51.7,-73.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOAEIAAgRQAHgCAHAAQAPAAAAAJQAAAEgEACQAEACAAAEQAAALgPAAQgOAAAAgNgAgDAGQAAADADAAQAFAAAAgEQAAgDgFAAIgDAAgAgEgHIAAAEIAEAAQAEAAAAgDQAAgCgEAAg");
	this.shape_49.setTransform(32.8,-55.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHAMIAAgUIACAAQAFABABABQACABAAAFIAAAKQAAAEAEAAIACAAIAAADQAAAFgHAAQgJAAAAgKgAgIgQQAAgFAGAAQAFAAAAAFQAAAFgFABQgGgBAAgFg");
	this.shape_50.setTransform(30,-56.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNANIAAgDIABAAQADADAIAAQAGAAAAgGIAAgDQgCAEgEAAQgOAAAAgNQAAgGAFgFQAFgEAHAAQAOAAAAAOIAAAOQAAAGgEADQgFAEgHAAQgNAAAAgIgAgEgGQAAAGAEAAQAFAAAAgFQAAgHgFAAQgEAAAAAGg");
	this.shape_51.setTransform(26.8,-55.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLAMQgGgFAAgGQAAgHAGgEQAFgGAGABQAIAAAEAEQAGAEgBAHQAAARgRAAQgHAAgEgFgAgFAAQAAAIAFAAQAHAAAAgHQgBgIgGAAQgFAAAAAHg");
	this.shape_52.setTransform(23,-55.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAEAOIgJgNIAAAOIgEAAQgHAAAAgGIAAgYIAEAAQAHAAAAAGIAAAHIAIgLQACgCAEAAIAIAAQgHAHgFAIIAGAHQADADADAAQgBAGgGAAQgEAAgCgCg");
	this.shape_53.setTransform(19.3,-55.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMAMQgEgFAAgGQAAgHAEgEQAFgGAIABQAHAAAFAEQAEAEAAAHQABARgSAAQgHAAgFgFgAgFAAQAAAIAFAAQAGAAAAgHQAAgIgGAAQgFAAAAAHg");
	this.shape_54.setTransform(15.3,-55.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AASAQQgHAAAAgGIgBgLIgHARIgCAAQgFAAgDgJIgCgIIgBARIgFAAQgGAAAAgGQAAgJADgQIAEAAQAHABACADIAEAIIABAFIAFgKQABgFADgCIACAAQAHAAACAIIACAXg");
	this.shape_55.setTransform(10.8,-55.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgGQAAgHAFgEQAFgGAGABQAHAAAFAEQAFAEAAAHQAAARgRAAQgGAAgFgFgAgFAAQAAAIAFAAQAGAAAAgHQAAgIgGAAQgFAAAAAHg");
	this.shape_56.setTransform(6.4,-55.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgJAVQgIAAABgIIAAgQQgBgRASAAQAHAAAFAFQAFADAAAIQAAAHgFAFQgEAEgHAAQgFAAgDgEIAAANgAgFgFQAAAJAGgBQAFAAAAgGQAAgJgGAAQgFAAAAAHg");
	this.shape_57.setTransform(2.4,-55.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAMAQQgHAAAAgGIAAgKQAAgHgFAAIgEACIAAAVIgEAAQgIAAAAgGIAAgWQAIgDAIAAQAQAAAAAPIAAAQg");
	this.shape_58.setTransform(-1.6,-55.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgGQAAgHAEgEQAGgGAGABQAPAAAAAMQAAAHgQAAIgEAAQACAEAFABQAHAAAEgCIAAAAIAAACQAAAIgNAAQgHAAgFgFgAgEgCIAEAAQAFAAAAgCQAAgDgEAAQgFAAAAAFg");
	this.shape_59.setTransform(-6.8,-55.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgIAQQgQAAAAgPIAAgQIAEAAQAHAAAAAHIAAAJQAAAGAFABIADAAIAAgXIAEAAQAHAAgBAHIAAAQIAEAAQAGgBgBgGIAAgQIAEAAQAIAAAAAHIAAAJQgBAPgQAAg");
	this.shape_60.setTransform(-11.5,-55.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOAGIAAgVIAGAAQAFAAAAAEIAAAGIAFgBQANAAAAALQAAALgPAAQgOAAAAgKgAgDACIAAAFIADABQAEAAAAgDQAAgEgEAAg");
	this.shape_61.setTransform(-16,-55.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AALAQQgGAAgBgFQgCgJgCgFQgEAGgCANIgFAAQgFgBAAgEIACgHQAEgMAHgHIADAAQADABADAEQAIAKADAQg");
	this.shape_62.setTransform(-19.5,-55.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgHAMIAAgUIADAAQAHAAAAAIIAAAKQAAAEAFAAIABAAIAAADQAAAFgHAAQgJAAAAgKgAgIgQQAAgFAGAAQAFAAAAAFQAAAFgFABQgGgBAAgFg");
	this.shape_63.setTransform(-22.2,-56.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgPAEQgBgPAFgGQAFgDALAAIAIAAIAAAEQAAAEgGAAIgCAAQgHAAgCACQgDADAAACQADgEAGAAQAGAAAFAFQADADAAAHQABAQgRAAQgPAAAAgSgAgEAFQAAAIAEAAQAGAAgBgHQAAgHgFAAQgEABAAAFg");
	this.shape_64.setTransform(-25.3,-56.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgHAMIAAgUIACAAQAIAAAAAIIAAAKQAAAEAFAAIABAAIAAADQAAAFgHAAQgJAAAAgKgAgIgQQAAgFAGAAQAFAAAAAFQAAAFgFABQgGgBAAgFg");
	this.shape_65.setTransform(-29.6,-56.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgUASIAAgGIAAAAQAGAFAMAAQAIAAAAgFQAAgGgJgBQgIgBAAgEIAAgDIAJgBQAIgBAAgFQAAgGgKAAQgJAAgHAGIAAAAIAAgHQAAgEAEgEQAGgEAKAAQAJAAAGAFQAHAFAAAHQgBAJgIADQAIADABAIQAAATgYAAQgSAAAAgMg");
	this.shape_66.setTransform(-34.9,-57.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEAMIAAgTIACAAQAIAAAAAHIAAALQAAAEAFAAIABAAIAAADQgBAFgGAAQgKAAABgLgAACgRQAAgFAFAAQAFAAAAAFQAAAFgFAAQgFAAAAgFgAgMgRQAAgFAGAAQAFAAAAAFQAAAFgFAAQgGAAAAgFg");
	this.shape_67.setTransform(28.9,-64.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHAMIAAgUIADAAQAHAAAAAIIAAAKQAAAEAEAAIACAAIAAADQAAAFgGAAQgKAAAAgKgAgIgQQAAgFAGAAQAFAAAAAFQAAAGgFAAQgGAAAAgGg");
	this.shape_68.setTransform(27,-64);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAQAUQgHAAAAgGIAAgDIgLAAQgQAAAAgOIAAgQIAEAAQAHAAAAAGIAAALQAAAFAGAAIADAAIAAgWIAEAAQAIAAgBAGIAAAQQAHAAgBAGIAAALg");
	this.shape_69.setTransform(23.8,-63);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgOAGQAAgJAQAAIACAAIAAgBQAAgDgGAAQgHAAgDADIgBAAIAAgEQAAgIANABQAPAAAAANIAAAEQAAAIgEAEQgDACgIAAQgOAAAAgKgAgDAGQAAADADAAQAEAAAAgEIAAgCIgCAAQgFgBAAAEg");
	this.shape_70.setTransform(19.7,-63.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgJAVQgIAAABgIIAAgPQAAgSARAAQAHAAAFAEQAEAFABAHQgBAHgEAFQgEAEgHAAQgFAAgDgEIAAANgAgFgEQAAAIAGAAQAFAAAAgHQAAgJgGAAQgFAAAAAIg");
	this.shape_71.setTransform(16,-63);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AADAQQgHAAAAgIIAAgOIgKAAIAAgEQgBgFAGAAIAYAAIAAAEQAAAFgFAAIgEAAIAAAWg");
	this.shape_72.setTransform(12.4,-63.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgIAMQgFgEAAgIQAAgGAFgEQAFgFAHAAQAKAAAAAHIAAAEIgBAAQgCgCgFAAQgIAAAAAGQAAAHAIAAQAEAAADgBIABAAIAAADQAAAHgLAAQgGAAgFgEg");
	this.shape_73.setTransform(9.3,-63.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgIAMQgFgEAAgIQAAgGAFgEQAFgFAHAAQAKAAAAAHIAAADQgDgCgFAAQgGAAgBAEIALAAIAAADQAAAEgGAAIgFAAQABAEAGAAQAEAAAEgCIAAADQAAAHgLAAQgGAAgFgEg");
	this.shape_74.setTransform(6.1,-63.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgGQAAgHAEgFQAFgFAHAAQAPAAAAANQAAAHgQAAIgEAAQABAFAGAAQAHAAADgCIABAAIAAACQAAAIgNAAQgHAAgFgFgAgEgCIAEAAQAFAAAAgCQAAgDgEAAQgFAAAAAFg");
	this.shape_75.setTransform(2.8,-63.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgJAVQgIAAABgIIAAgPQAAgSARAAQAHAAAFAEQAEAFABAHQgBAHgEAFQgEAEgHAAQgFAAgDgEIAAANgAgFgEQAAAIAGAAQAFAAABgHQgBgJgGAAQgFAAAAAIg");
	this.shape_76.setTransform(-1.1,-63);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgQABIAAgQIAFAAQAHAAAAAGIAAAKQAAAGAEAAIAFAAIAAgWIAEAAQAIAAAAAGIAAAXQgJACgIAAQgQAAAAgPg");
	this.shape_77.setTransform(-6.5,-63.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgOAFIAAgSQAHgCAHAAQAPAAAAAJQAAAEgEACQAEACAAADQAAALgPAAQgOAAAAgLgAgDAGQAAADADAAQAFAAAAgEQAAgCgFAAIgDAAgAgDgIIAAAFIADAAQAEAAAAgCQAAgDgEgBg");
	this.shape_78.setTransform(-10.3,-63.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMAMQgEgFgBgGQABgIAEgEQAFgFAHABQAHgBAGAFQAEAFAAAGQABARgSgBQgHABgFgFgAgFAAQAAAIAFAAQAHAAgBgHQAAgIgGAAQgFAAAAAHg");
	this.shape_79.setTransform(-14.1,-63.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AARAQQgGAAAAgGIgBgLIgHARIgCAAQgFAAgDgJIgDgIIAAARIgFAAQgGAAAAgGQAAgMAEgNIAEAAQAFAAADAEIAEAIIABAGIAEgLIAFgHIACAAQAIAAABAIQACAKAAANg");
	this.shape_80.setTransform(-18.5,-63.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgOAQIAAgDIAFgBQADAAADgDQgFgFgDgJQgDgIgCgHIAGAAQAGAAABAEIADAQQAFgJABgLIAGAAQAEAAAAAEQAAAGgGAMQgHAMgDAEQgCADgGAAQgGAAAAgFg");
	this.shape_81.setTransform(-22.7,-62.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgJAOQgFgDAAgFQAAgJARAAIABAAIAAgBQAAgDgGAAQgGAAgEADIAAgEQAAgIAMABQAPAAAAANIAAAEQAAAIgDAEQgEACgIAAQgFAAgEgCgAgDAGQAAADADAAQAEAAAAgEIAAgCIgCAAQgFgBAAAEg");
	this.shape_82.setTransform(-27.6,-63.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgOAMIAAgEIABAAQADAEAJgBQAFABABgEQgBgEgGgBQgFAAAAgDIAAgCIAFAAQAGAAAAgFQAAgEgHAAQgFAAgFAEIAAgEQAAgJANABQAGAAAFACQAEADAAAGQAAAGgGACQAGABAAAHQAAAMgQAAQgNABAAgJg");
	this.shape_83.setTransform(-31.2,-63.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D23731").s().p("AqcEpQgNg6gHg+QgHgzgIhjQgJhyA0hOQBEhlCYAJIHTAYQFjASBOAFQBdAGAtgxQAMgNALgVQAIgPACAAQAmAnATAyQAUAzgDA2QgFBKg2BAQhNBciPAAQowgaj8gJQiagFhSB+QgWAhgQArIgHASIAAABIgBgGg");
	this.shape_84.setTransform(1.7,-59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(1));

	// Слой_1
	this.instance = new lib.gift_img_3();
	this.instance.parent = this;
	this.instance.setTransform(-67,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_4
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("ApKJNQj0j0AAlZQAAlYDzjzIABAAQDzjzFXgBQFYAAD0D0QDzDzAAFYQAAFZjzDzIAAABQj0DzlYAAQlXAAjzjzg");
	this.shape_85.setTransform(-2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift3, new cjs.Rectangle(-85.1,-90,166.3,180.1), null);


(lib.gift_img_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.gift_img_2();
	this.instance.parent = this;
	this.instance.setTransform(-48,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift_img_2_1, new cjs.Rectangle(-48,-31,96,62), null);


(lib.gift_img_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.gift_img_1();
	this.instance.parent = this;
	this.instance.setTransform(-58,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift_img_1_1, new cjs.Rectangle(-58,-36,116,72), null);


(lib.fish1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84CDF2").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape.setTransform(11.9,-0.2,1.15,1.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#84CDF2").ss(2).p("AA9hdQg2gGgzAcQgbAOgRAOQgZgQgTgNQgmgYAAABQgCALgDBKQgDBIAAARQABABAqgeQArgdABAAQAYAkAsAVQAoATAqgBQApgCAogbQAmgaABgXQABgZgbgiQgjgtg5gHg");
	this.shape_1.setTransform(0,0,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fish1, new cjs.Rectangle(-21.7,-13.2,43.8,27.4), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApA1QgJAAgDgEQgDgDAAgHIAAgFIgbgCQgPAAgIACIAAAFQgBAHgDADQgDAEgJAAIgIAAIAAgkIAKgCIAFgLQAPgoAMgQIAGAAQAGAAAHAIQAQAYAJAjIALACIAAAkgAAMANQgEgSgIgQQgGAOgGAUIAKAAIAGAAIAIAAIAAAAg");
	this.shape.setTransform(65.4,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAhQgMgMAAgTQgBgUAMgNQANgNAVAAQARAAAMAMQAOAMAAAUQAAAUgNANQgMAMgUAAQgSAAgNgMgAgOgRQgEAGAAALQAAAaATAAQAIAAAGgHQAFgGAAgMQAAgZgUAAQgJAAgFAHg");
	this.shape_1.setTransform(55.3,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALAlQgLgMgQgXIAAAoIgKAAQgHAAgEgEQgEgEAAgFIAAhHIAJAAQAIAAAEAEQAEAEAAAFIAAAXQARgXAHgHQAGgGAKAAIASAAIAAABQgNAMgXAbIAUAWQAHAJAIABQgEANgLAAQgKAAgFgGg");
	this.shape_2.setTransform(46.1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeArQgGAAgEgEQgFgDAAgGIAAgnIgEAJIgOAZQgKASgQAAIgLAAIAAhVIANAAQAFAAAEAEQADADAAAFIAAAkIAQgeQAJgSASAAIAMAAIAABVg");
	this.shape_3.setTransform(33.3,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AABArQgNAAAAgMIAAg0IgZAAIAAgJQAAgEADgEQAEgEAHAAIA9AAIAAAJQAAAFgEADQgEAEgFAAIgNAAIAABAg");
	this.shape_4.setTransform(24.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgArQgNAAgCgKIgDgKIgeAAIgEAUIgKAAQgMAAAAgLQAAgKALgZQALgcALgLIAJAAQALAAAGAJQAHAMAHAVQAJAXADAUgAAJAEIgJgYQgGALgEANIATAAIAAAAg");
	this.shape_5.setTransform(16.1,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAsQgdAAAAgWIAAg8QAMgFAQAAIAJAAQAPAAAJAHQAJAGAAAMQAAAGgFAFQgEAFgGABQAHABAEAFQAGAGAAAFQAAANgLAIQgKAHgNAAgAgLAUQABAEAEAAIAHAAQALAAAAgIQAAgFgCgCQgDgCgHAAIgLAAgAgLgXIAAAPIALAAQALAAAAgIQgBgIgKAAg");
	this.shape_6.setTransform(7.6,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAfIAAgFIALgBQAHAAAEgGQgJgMgJgRQgLgTgDgNIANAAQAMAAADAKQADAJAMAXQAOgWADgUIANAAQAKAAAAAIQAAANgTAcQgQAagHAGQgFAEgLAAQgPAAAAgMg");
	this.shape_7.setTransform(-1.1,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUArQgOAAAAgOIAAhEQAPgDAMAAIAJAAQAOAAAJAHQAKAIAAANQAAANgKAIQgJAIgPAAIgKgBIAAAdgAgJgXIAAATIAJABQAKAAAAgJQAAgMgKAAg");
	this.shape_8.setTransform(-9.1,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABArQgNAAAAgMIAAg0IgZAAIAAgJQgBgEAEgEQAEgEAGAAIA+AAIAAAJQAAAFgDADQgFAEgFAAIgNAAIAABAg");
	this.shape_9.setTransform(-17.3,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAhQgOgMAAgUQAAgSANgNQANgOAVAAQANAAAHAGQAIAGAAAJIAAAJIgBAAQgHgJgSAAQgLAAgGAGQgHAHAAAKQAAAMAHAGQAGAGALAAQARAAAIgIIAAAAIAAAJQABAJgJAFQgHAGgOAAQgRAAgOgMg");
	this.shape_10.setTransform(-25.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAhQgOgNAAgTQAAgSANgNQANgOAVAAQANAAAIAGQAHAGAAAJIAAAHIgBAAQgGgIgTAAQgUAAgFAQIAiAAIAAAIQAAAJgNAAIgUAAQAFARATAAQASAAAHgIIABAAIAAAHQAAAJgIAFQgIAGgNAAQgSAAgOgMg");
	this.shape_11.setTransform(-34,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADAsQgkAAAAgkIAAgNQAAgNACgKQACgOAPgBIAwAAIAAAHQAAANgPAAIgaAAIgBAPIAhAAIAAAIQAAAJgNAAIgUAAIAAACQAAAHADADQADADAIAAIAHAAQALAAAKgDIAAAJQAAAOgVAAg");
	this.shape_12.setTransform(-41.9,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUArQgOAAAAgOIAAhEQAPgDAMAAIAJAAQAOAAAJAHQAKAIAAANQAAANgKAIQgJAIgPAAIgKgBIAAAdgAgJgXIAAATIAJABQAKAAAAgJQAAgMgKAAg");
	this.shape_13.setTransform(-49.6,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgArQgOAAgCgKIgCgKIgeAAIgEAUIgKAAQgMAAAAgLQAAgKALgZQALgcALgLIAJAAQALAAAGAJQAHAMAHAVQAJAXADAUgAAJAEQgFgNgEgLQgGAKgFAOIAUAAIAAAAg");
	this.shape_14.setTransform(-58.2,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggAaIAAgJIABAAQAIAJATAAQANAAAAgIQAAgFgDgCQgDgDgJAAQgLgBAAgHIAAgGIANAAQAIAAADgDQACgCAAgEQAAgKgQAAQgOAAgKAJIAAAAIAAgJQAAgIAHgFQAJgGAPAAQANAAAJAHQAKAHAAAMQAAANgNAFQAFABAEAFQAFAFAAAGQAAAcglAAQgcAAAAgTg");
	this.shape_15.setTransform(-66.6,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E31E24").s().p("AqQCXQg/AAgsgsQgsgtAAg+QAAg9AsgtQAsgrA/gBIUhAAQA/ABAsArQAsAtAAA9QAAA+gsAtQgsAsg/AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-80.8,-15,161.6,30.1), null);


(lib.bird2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bird2();
	this.instance.parent = this;
	this.instance.setTransform(-19,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bird2_1, new cjs.Rectangle(-19,-8,38,16), null);


(lib.bird1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bird1();
	this.instance.parent = this;
	this.instance.setTransform(-11,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bird1_1, new cjs.Rectangle(-11,-6,22,12), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-41,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(-41,-15,82,30), null);


(lib.wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wave_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:428},114).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365.5,-20.6,731,41.3);


(lib.ship_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_7
	this.instance = new lib.bird2_1();
	this.instance.parent = this;
	this.instance.setTransform(33,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:33.5,y:-123.3},0).wait(1).to({x:34.1,y:-123.6},0).wait(1).to({x:34.6,y:-123.9},0).wait(1).to({x:35.1,y:-124.3},0).wait(1).to({x:35.6,y:-124.6},0).wait(1).to({x:36.1,y:-124.9},0).wait(1).to({x:36.6,y:-125.2},0).wait(1).to({x:37.2,y:-125.6},0).wait(1).to({x:37.7,y:-125.9},0).wait(1).to({x:38.2,y:-126.2},0).wait(1).to({x:38.7,y:-126.5},0).wait(1).to({x:39.2,y:-126.9},0).wait(1).to({x:39.7,y:-127.2},0).wait(1).to({x:40.2,y:-127.5},0).wait(1).to({x:40.8,y:-127.8},0).wait(1).to({x:41.3,y:-128.1},0).wait(1).to({x:41.8,y:-128.5},0).wait(1).to({x:42.3,y:-128.8},0).wait(1).to({x:42.8,y:-129.1},0).wait(1).to({x:43.3,y:-129.4},0).wait(1).to({x:43.9,y:-129.8},0).wait(1).to({x:44.4,y:-130.1},0).wait(1).to({x:44.9,y:-130.4},0).wait(1).to({x:45.4,y:-130.7},0).wait(1).to({x:45.9,y:-131.1},0).wait(1).to({x:46.4,y:-131.4},0).wait(1).to({x:46.9,y:-131.7},0).wait(1).to({x:47.5,y:-132},0).wait(1).to({x:48,y:-132.3},0).wait(1).to({x:48.5,y:-132.7},0).wait(1).to({x:49,y:-133},0).wait(1).to({x:49.5,y:-133.3},0).wait(1).to({x:50,y:-133.6},0).wait(1).to({x:50.6,y:-134},0).wait(1).to({x:51.1,y:-134.3},0).wait(1).to({x:51.6,y:-134.6},0).wait(1).to({x:52.1,y:-134.9},0).wait(1).to({x:52.6,y:-135.3},0).wait(1).to({x:53.1,y:-135.6},0).wait(1).to({x:53.7,y:-135.9},0).wait(1).to({x:54.2,y:-136.2},0).wait(1).to({x:54.7,y:-136.5},0).wait(1).to({x:55.2,y:-136.9},0).wait(1).to({x:55.7,y:-137.2},0).wait(1).to({x:56.2,y:-137.5},0).wait(1).to({x:56.7,y:-137.8},0).wait(1).to({x:57.3,y:-138.2},0).wait(1).to({x:57.8,y:-138.5},0).wait(1).to({x:58.3,y:-138.8},0).wait(1).to({x:58.8,y:-139.1},0).wait(1).to({x:59.3,y:-139.5},0).wait(1).to({x:59.8,y:-139.8},0).wait(1).to({x:60.4,y:-140.1},0).wait(1).to({x:60.9,y:-140.4},0).wait(1).to({x:61.4,y:-140.8},0).wait(1).to({x:61.9,y:-141.1},0).wait(1).to({x:62.4,y:-141.4},0).wait(1).to({x:62.9,y:-141.7},0).wait(1).to({x:63.4,y:-142},0).wait(1).to({x:64,y:-142.4},0).wait(1).to({x:64.5,y:-142.7},0).wait(1).to({x:65,y:-143},0).wait(1).to({x:65.5,y:-143.3},0).wait(1).to({x:66,y:-143.7},0).wait(1).to({x:66.5,y:-144},0).wait(1).to({x:67.1,y:-144.3},0).wait(1).to({x:67.6,y:-144.6},0).wait(1).to({x:68.1,y:-145},0).wait(1).to({x:68.6,y:-145.3},0).wait(1).to({x:69.1,y:-145.6},0).wait(1).to({x:69.6,y:-145.9},0).wait(1).to({x:70.2,y:-146.2},0).wait(1).to({x:70.7,y:-146.6},0).wait(1).to({x:71.2,y:-146.9},0).wait(1).to({x:71.7,y:-147.2},0).wait(1).to({x:72.2,y:-147.5},0).wait(1).to({x:72.7,y:-147.9},0).wait(1).to({x:73.2,y:-148.2},0).wait(1).to({x:73.8,y:-148.5},0).wait(1).to({x:74.3,y:-148.8},0).wait(1).to({x:74.8,y:-149.2},0).wait(1).to({x:75.3,y:-149.5},0).wait(1).to({x:75.8,y:-149.8},0).wait(1).to({x:76.3,y:-150.1},0).wait(1).to({x:76.9,y:-150.4},0).wait(1).to({x:77.4,y:-150.8},0).wait(1).to({x:77.9,y:-151.1},0).wait(1).to({x:78.4,y:-151.4},0).wait(1).to({x:78.9,y:-151.7},0).wait(1).to({x:79.4,y:-152.1},0).wait(1).to({x:79.9,y:-152.4},0).wait(1).to({x:80.5,y:-152.7},0).wait(1).to({x:81,y:-153},0).wait(1).to({x:81.5,y:-153.4},0).to({_off:true},1).wait(5));

	// Слой_6
	this.instance_1 = new lib.bird1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:48.6,y:-95.2},0).wait(1).to({x:48.2,y:-95.4},0).wait(1).to({x:47.8,y:-95.6},0).wait(1).to({x:47.4,y:-95.8},0).wait(1).to({x:47,y:-96},0).wait(1).to({x:46.6,y:-96.2},0).wait(1).to({x:46.2,y:-96.4},0).wait(1).to({x:45.8,y:-96.6},0).wait(1).to({x:45.4,y:-96.8},0).wait(1).to({x:45,y:-97},0).wait(1).to({x:44.6,y:-97.2},0).wait(1).to({x:44.2,y:-97.4},0).wait(1).to({x:43.8,y:-97.6},0).wait(1).to({x:43.4,y:-97.8},0).wait(1).to({x:43,y:-98},0).wait(1).to({x:42.6,y:-98.2},0).wait(1).to({x:42.2,y:-98.4},0).wait(1).to({x:41.8,y:-98.6},0).wait(1).to({x:41.3,y:-98.8},0).wait(1).to({x:40.9,y:-99},0).wait(1).to({x:40.5,y:-99.2},0).wait(1).to({x:40.1,y:-99.4},0).wait(1).to({x:39.7,y:-99.6},0).wait(1).to({x:39.3,y:-99.8},0).wait(1).to({x:38.9,y:-100},0).wait(1).to({x:38.5,y:-100.2},0).wait(1).to({x:38.1,y:-100.4},0).wait(1).to({x:37.7,y:-100.6},0).wait(1).to({x:37.3,y:-100.8},0).wait(1).to({x:36.9,y:-101},0).wait(1).to({x:36.5,y:-101.2},0).wait(1).to({x:36.1,y:-101.4},0).wait(1).to({x:35.7,y:-101.6},0).wait(1).to({x:35.3,y:-101.8},0).wait(1).to({x:34.9,y:-102},0).wait(1).to({x:34.5,y:-102.2},0).wait(1).to({x:34.1,y:-102.4},0).wait(1).to({x:33.7,y:-102.7},0).wait(1).to({x:33.3,y:-102.9},0).wait(1).to({x:32.9,y:-103.1},0).wait(1).to({x:32.5,y:-103.3},0).wait(1).to({x:32.1,y:-103.5},0).wait(1).to({x:31.7,y:-103.7},0).wait(1).to({x:31.2,y:-103.9},0).wait(1).to({x:30.8,y:-104.1},0).wait(1).to({x:30.4,y:-104.3},0).wait(1).to({x:30,y:-104.5},0).wait(1).to({x:29.6,y:-104.7},0).wait(1).to({x:29.2,y:-104.9},0).wait(1).to({x:28.8,y:-105.1},0).wait(1).to({x:28.4,y:-105.3},0).wait(1).to({x:28,y:-105.5},0).wait(1).to({x:27.6,y:-105.7},0).wait(1).to({x:27.2,y:-105.9},0).wait(1).to({x:26.8,y:-106.1},0).wait(1).to({x:26.4,y:-106.3},0).wait(1).to({x:26,y:-106.5},0).wait(1).to({x:25.6,y:-106.7},0).wait(1).to({x:25.2,y:-106.9},0).wait(1).to({x:24.8,y:-107.1},0).wait(1).to({x:24.4,y:-107.3},0).wait(1).to({x:24,y:-107.5},0).wait(1).to({x:23.6,y:-107.7},0).wait(1).to({x:23.2,y:-107.9},0).wait(1).to({x:22.8,y:-108.1},0).wait(1).to({x:22.4,y:-108.3},0).wait(1).to({x:22,y:-108.5},0).wait(1).to({x:21.5,y:-108.7},0).wait(1).to({x:21.1,y:-108.9},0).wait(1).to({x:20.7,y:-109.1},0).wait(1).to({x:20.3,y:-109.3},0).wait(1).to({x:19.9,y:-109.5},0).wait(1).to({x:19.5,y:-109.7},0).wait(1).to({x:19.1,y:-109.9},0).wait(1).to({x:18.7,y:-110.1},0).wait(1).to({x:18.3,y:-110.3},0).wait(1).to({x:17.9,y:-110.5},0).wait(1).to({x:17.5,y:-110.7},0).wait(1).to({x:17.1,y:-110.9},0).wait(1).to({x:16.7,y:-111.1},0).wait(1).to({x:16.3,y:-111.3},0).wait(1).to({x:15.9,y:-111.5},0).wait(1).to({x:15.5,y:-111.7},0).wait(1).to({x:15.1,y:-111.9},0).wait(1).to({x:14.7,y:-112.1},0).wait(1).to({x:14.3,y:-112.3},0).wait(1).to({x:13.9,y:-112.5},0).wait(1).to({x:13.5,y:-112.8},0).wait(1).to({x:13.1,y:-113},0).wait(1).to({x:12.7,y:-113.2},0).wait(1).to({x:12.3,y:-113.4},0).wait(1).to({x:11.9,y:-113.6},0).wait(1).to({x:11.4,y:-113.8},0).wait(1).to({x:11,y:-114},0).to({_off:true},1).wait(5));

	// ship_mc
	this.instance_2 = new lib.ship_mc();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},95).wait(5));

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkTPlQgNgXgGgwQgHg9gGgWQgNgygjgmQgNgNhjg1Qhxg9hBgwQjkirBUjJQAzh4CegIQAogCBFgBQA0gDANgYQAcgzg2hwQhQiPgqhSQhLiUgIhvQgLiUBmh2QBJhWDUgxQC9gsDygEQDrgECxAjQC9AlAmBCQAUE3hPC8Qg9CRiABVQgsAdhAAdQhEAegeAPQhkAygLBFQgHAxA1BDQAfAnBMBSQA/BLAJA7QALBOhKBOQhOBShtgbQhMgTh5hVQiUhpgegPQhagtguAyQgvAyACApQABAfAiAnQAUAWAvAyQAnAwALAyQANA8gNAyQgHAbgZAtQgVAngBAWQgCAhAfAnQgvgRgSgig");
	this.shape.setTransform(161.5,-146.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjsQHQgNgIgJgLQgIgIgFgKIgFgLQgHgRgEgZIgDgTIgFggQgFgjgFgQQgFgRgHgPQgOgegYgaQgMgNhUgwIgOgHIgOgJIgZgOIg4giIgrgdIglgbIgQgMIgggaQgTgSgRgSQgsgxgWgzQgohgAqhrQAzh3CegJIA2gCIA3AAQA0gEANgYQAcgyg0hvQg+hvgmhJIgTgmQhKiTgHhuQgHh2BChjQAPgXATgWQBKhVDSgxIAlgIQCiggDFgDIAggBQClgCCHASQA4AIAzAKQB8AZA6AmQAdATAMAWQAFBSgBBJQgBAugDArQgFBJgOA/QgOA/gWA1QgoBghFBGQgZAZgeAWIgWAQQghAWgsAXIgdAOQhEAegdAPQhBAggbApQgPAVgEAZQgHAxA0BDQAXAdAvA1IAkAnQA9BKAIA6QADAagFAaQgMAzgxAzQg6A9hMAAQgZAAgcgHQhMgTh4hUIgHgFQhphLgrgaIgXgOQg6gcgoALQgVAGgQASQgUAVgLAUQgOAaABAXQACAcAaAhIAHAJIBDBIQAKAMAIANQAYAkAIAlQAGAdAAAaQABAdgHAaQgFAQgLAYIgQAgQgOAYgFASQgDAKgBAIQgCAhAfAnQgRgGgNgJg");
	this.shape_1.setTransform(161.1,-146.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjmQGQgNgJgKgLQgHgJgGgKIgFgLQgGgRgGgZIgDgTIgFggQgGgkgFgQQgFgQgIgPQgPgfgXgbQgNgOhTgwIgOgIIgOgJIgXgPIg2giIgrgeIglgcIgQgMIghgbQgUgRgRgSQgtgxgWg1QgphhArhsQAyh3CegJIA1gCIA4gBQAzgDAOgYQAcgygzhtQg8huglhJIgSgmQhIiRgGhsQgGh2BChhQAPgXATgWQBLhUDRgvIAlgIQChgeDDgCIAfgBQCjAACGATQA3AHAyALQB6AaA5AmQAdATAMAWQAEBSgBBJQAAAugDAqQgFBIgNA/QgNA+gVA1QgnBfhEBHQgZAZgdAWIgWAPQggAXgsAWIgdAPQhDAegdAPQhAAggbApQgPAVgEAZQgHAyA0BCQAWAdAuA1IAjAnQA9BJAHA6QADAagGAZQgMAzgxAyQg7A8hLAAQgZgBgbgHQhNgTh3hUIgIgFQhohKgrgaIgXgNQg6gbgnALQgVAGgQARQgTAWgLAUQgOAaACAXQABAbAaAhIAIAJQATAXAvAxQAKANAIAMQAYAkAHAmQAGAcABAaQAAAdgHAaQgFAQgLAXIgQAhQgNAYgGASQgDAKAAAIQgCAhAfAnQgRgGgNgJg");
	this.shape_2.setTransform(160.5,-146.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjiQEQgNgJgJgLQgIgKgFgJIgFgMQgHgRgFgZIgEgUIgGggQgGgjgGgQQgFgRgIgPQgPgfgYgbQgOgPhRgyIgOgIIgNgJIgXgPIg1gkIgpgeIgmgcIgQgNIgigbQgUgSgRgSQgugxgXg2QgphiAqhuQAyh2CegKIA2gCIA3AAQAzgEAOgXQAdgygyhsQg7htgjhIIgSgmQhGiPgFhrQgFh0BChhQAPgWATgWQBMhSDPguIAlgIQChgdDBAAIAfAAQChAACDAUQA3AIAxALQB5AaA3AnQAdATAMAWQAEBSgBBIQAAAugCAqQgEBIgNA9QgNA+gUA0QgmBfhDBHQgYAZgdAWIgVAQQghAWgqAXIgdAOQhDAfgcAPQhAAhgbAoQgOAWgEAZQgHAxAyBCQAWAdAuA1IAiAmQA7BKAGA5QADAZgGAZQgMAygxAyQg6A7hLgBQgaAAgbgIQhNgUh2hTIgHgFQhohJgsgaIgXgMQg5gbgnALQgVAHgPARQgTAVgLAUQgNAaABAXQACAcAaAgIAHAKIBCBIIASAYQAYAkAHAmQAGAcABAaQAAAdgHAaQgFAQgLAXIgQAhQgNAYgGASQgDAKAAAIQgCAhAfAmQgSgGgNgJg");
	this.shape_3.setTransform(160,-146);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjdQCQgNgJgKgMQgHgJgFgKIgFgMQgHgRgGgaIgEgTQgDgSgEgPQgGgjgHgQQgGgRgHgPQgQgggZgaQgOgRhQgyIgNgJIgNgJIgWgPIgzglIgoggIgngcIgQgNIgigbQgVgSgRgSQgwgygWg2QgqhkAqhwQAyh1CegKIA1gCIA3gBQAzgEAOgWQAdgygxhrQg5hsghhHIgSglQhEiPgDhpQgFhzBDhfQAPgWATgWQBNhQDNgtIAlgIQCggbC/ABIAeAAQCfABCCAWQA2AIAwAMQB3AaA3AnQAcATALAWQAFBSgBBIIgCBXQgDBHgMA9QgMA9gUA0QgkBehCBHQgYAZgdAWIgVAQQggAWgqAXIgdAPQhBAfgdAPQg+AhgbAoQgPAWgDAZQgIAxAyBCQAVAdAtA1IAhAmQA7BJAFA5QADAYgGAZQgNAygxAwQg6A6hLgBQgZAAgbgHQhNgVh2hTIgHgEQhohKgsgYIgWgMQg6gbgmAMQgVAGgPASQgSAVgKAUQgOAaACAXQABAbAbAhIAHAJQAUAXAuAxIASAZQAXAkAIAlQAFAcAAAaQABAdgHAZQgFARgLAXIgQAgQgOAZgFARQgDAKAAAIQgCAhAfAnQgSgHgNgJg");
	this.shape_4.setTransform(159.5,-145.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjZQAQgNgIgJgNQgHgJgGgKIgFgMQgGgSgGgaIgFgTIgHghQgIgjgGgQQgHgRgIgPQgQgggZgbQgPgShOgzIgNgJIgNgJIgVgQQgagVgXgRIgoggIgmgeIgRgMIgjgcQgVgSgSgSQgwgygXg4QgqhkAqhyQAyh1CdgKIA2gCIA2gBQAzgEAOgWQAegxgwhrQg3hqghhHIgRgkQhCiNgChoQgDhyBCheQAPgWATgVQBOhPDMgsIAlgHQCfgaC9ADIAeAAQCdACCAAXQA1AIAvAMQB2AbA1AnQAcAUALAWQAEBRAABIIgBBXQgDBGgMA8QgLA9gTAzQgjBehBBGQgYAagbAWIgVAQQggAWgqAXIgcAPQhBAfgcAQQg+AhgbAnQgOAXgEAZQgHAxAxBCQAUAdAtA0IAgAmQA5BJAFA4QADAYgHAZQgNAxgxAwQg6A5hKgCQgZAAgbgIQhOgVh1hSIgHgFQhohJgrgXIgXgMQg5gagmAMQgUAHgPARQgTAVgJAUQgNAaACAXQABAbAaAgIAIAKIBBBIQAKAMAIAMQAXAkAIAmQAFAcAAAaQABAcgIAaQgEAQgLAXIgQAhQgOAYgFASQgDAKAAAIQgCAgAfAnQgSgHgOgKg");
	this.shape_5.setTransform(159,-145.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjUP/QgNgJgJgNIgNgUIgFgMQgHgSgGgaIgFgTQgDgSgFgPQgIgjgHgQQgHgRgIgQQgRgggZgbQgQgThNg0IgMgJIgMgJIgVgRQgZgVgXgSQgSgRgUgQIgngeIgRgNIgkgbQgVgTgSgSQgxgzgYg4QgqhlAqh0QAxh1CegJIA1gCIA3gBQAygEAOgXQAegxguhpQg2hpgfhGIgRgkQhAiMgBhnQgChwBChdQAQgVATgVQBOhODLgrIAlgHQCegYC7AEIAdABQCcADB+AYQA0AJAvAMQBzAbA1AoQAbATALAWQAEBSAABHIgBBWQgCBGgLA7QgKA8gTA0QghBdhBBGQgXAZgbAXIgVAPQgfAXgpAYIgcAOQhAAfgcAQQg9AhgbAoQgOAXgEAYQgIAyAwBBQAVAeArAzIAgAmQA4BJAEA3QACAYgGAYQgNAxgyAvQg5A4hLgCQgZgBgbgHQhOgWhzhRIgIgFQhnhIgsgXIgWgMQg5gZgmAMQgUAHgOARQgTAWgJATQgNAaACAXQACAbAaAgIAIAKIBABHQAKANAIAMQAXAkAIAlQAFAcAAAaQABAcgIAaQgEARgLAXIgRAgQgNAYgFASQgDAKAAAIQgCAgAfAnQgTgHgNgKg");
	this.shape_6.setTransform(158.5,-145.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjPP+QgNgJgJgOQgIgKgFgKIgFgMQgHgTgHgaIgFgTQgEgSgFgPQgIgjgIgRQgHgRgIgPQgSgggZgcQgRgUhLg1IgMgJIgMgKIgUgRQgXgWgXgRQgSgTgUgQQgTgQgUgOIgRgNIgkgcQgXgTgSgSQgxgzgYg5QgrhmAph3QAyhyCdgLIA1gCIA3gBQAygEAOgXQAfgwgthoQg1hpgehFIgQgjQg+iKAAhmQgBhvBDhbQAPgWATgUQBQhNDJgqIAkgGQCdgXC6AGIAdABQCaAEB7AZQA0AJAuANQByAbA0AoQAaAUALAWQADBRAABIIABBVQgBBFgLA7QgKA7gRAzQghBcg/BHQgXAZgbAWIgUAQQgfAXgpAYIgbAOQhAAfgbARQg9AhgbAoQgOAWgEAZQgHAxAvBCQAUAdAqAzIAgAnQA3BIADA2QACAYgHAYQgNAwgxAuQg6A3hKgCQgZgBgbgHQhOgXhzhQIgHgFQhohIgrgWIgXgMQg4gYgmAMQgTAHgPASQgSAVgJAUQgMAZACAXQACAbAaAgIAHAJQAUAYAtAwIASAZQAWAkAIAlQAFAcAAAaQAAAcgHAaQgFAQgKAXIgRAgQgNAYgFASQgDAKAAAIQgCAgAfAnQgTgHgNgKg");
	this.shape_7.setTransform(158,-145.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjLP8QgNgJgJgNIgMgVIgFgNQgHgTgHgaIgGgTQgEgRgFgQQgKgjgIgRQgHgRgJgPQgSghgZgcQgRgVhKg2IgMgJIgMgKIgTgSQgWgWgWgSQgSgTgTgQQgTgRgUgPIgSgNIglgcQgXgSgSgTQgzgzgYg6QgrhnAph5QAxhyCegLIA1gCIA2gBQAygEAPgWQAfgxgshnQg0hngchEIgPgkQg8iIABhkQgBhuBDhaQAQgVATgUQBQhMDIgoIAkgHQCdgVC3AHIAdACQCYAFB5AaQAzAJAtANQBxAcAyApQAaATALAWQADBSAABHIABBUQAABEgKA7QgJA7gRAyQggBcg+BGQgWAagbAWIgUAQQgeAXgoAYIgcAPQg+AfgcARQg8AhgaAoQgOAWgEAZQgIAxAvBBQATAeAqAzIAfAmQA1BHADA2QACAYgHAYQgOAvgxAtQg6A3hKgDQgZgBgagIQhPgXhyhPIgHgFQhnhIgsgVIgWgLQg5gYgkANQgUAGgOASQgSAVgJAUQgMAZADAXQACAbAaAgIAHAJQAUAYAsAwIASAZQAXAkAHAlQAFAcAAAZQAAAcgHAaQgFAQgLAXIgQAgQgNAYgFASQgDAKAAAIQgCAgAfAnQgTgHgOgLg");
	this.shape_8.setTransform(157.5,-145.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjGP7QgNgJgKgOIgMgVIgFgNQgHgTgIgaIgFgUQgFgRgGgQQgJgjgJgRQgHgRgJgQQgTgggZgdQgTgWhIg3IgMgKIgLgKIgSgSQgWgXgVgSQgRgTgTgRQgTgRgVgPIgSgNIglgdQgXgSgTgTQgzgzgZg8QgshoAph6QAxhyCegLIA1gCIA2gBQAygEAOgWQAggwgrhmQgyhmgbhEIgPgjQg6iGAChkQABhsBDhZQAQgVATgUQBRhKDGgnIAkgGQCcgUC1AJIAdABQCWAHB3AbQAyAKAtANQBvAcAxAqQAaATALAWIADCYQAAAsABAoQABBDgKA6QgIA6gRAyQgeBbg9BHQgWAZgaAXIgUAQQgeAXgnAYIgbAPQg+AfgbARQg8AigaAoQgOAWgEAZQgIAxAuBBQATAdApAzIAeAmQA0BHACA2QACAXgHAXQgOAvgyAsQg5A2hKgDQgZgBgagIQhPgYhxhOIgHgFQhnhIgsgVIgWgKQg4gXglANQgTAHgOARQgRAVgJAUQgMAZADAXQACAbAaAgIAHAJIBABIQAKAMAIAMQAWAkAHAlQAGAcAAAaQAAAcgIAaQgEAQgLAXIgQAgQgNAYgGARQgCAKgBAIQgBAhAeAmQgTgHgNgLg");
	this.shape_9.setTransform(157.1,-145.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjCP6QgNgJgJgPQgHgLgFgKIgFgNQgIgUgHgaIgGgUQgFgRgGgPQgLgkgIgRQgIgRgKgQQgTghgagcQgTgYhHg3IgLgKIgKgLQgKgJgIgJQgVgYgUgSQgQgUgTgRQgTgSgVgPIgTgNIgmgdQgXgSgTgTQg1g0gZg8QgshpAph9QAxhxCdgLIA1gDIA2gBQAygEAPgWQAfgvgphlQgwhlgahDIgPgiQg4iFADhjQAChqBEhYQAPgVAUgTQBRhKDFgmIAkgFQCbgSCzAKIAcACQCVAHB1AdQAxAKAsANQBtAdAxAqQAZATALAWIACCYQABAsACAnQABBDgJA5QgHA5gQAyQgdBag8BHQgWAagaAWIgUAQQgdAXgnAYIgbAQQg9AfgbARQg6AigaAoQgOAWgEAZQgIAxAtBBQASAdAoAzIAeAmQAzBHABA0QABAXgHAXQgOAugxAsQg6A1hKgEQgYgBgbgIQhPgYhwhOIgHgFQhnhHgsgUIgWgLQg4gWgkANQgTAHgNASQgRAVgJAUQgMAZADAXQADAaAaAgIAHAJIBABIQAJAMAIANQAWAkAHAkQAGAcAAAaQAAAcgIAZQgFARgKAXIgRAfQgNAYgFASQgCAKgBAIQgBAgAeAmQgTgHgOgLg");
	this.shape_10.setTransform(156.6,-145.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai+P5QgNgKgJgPIgMgVIgFgOIgPguQgCgJgFgLQgFgRgHgPQgKgkgKgRQgIgRgKgQQgUghgZgdQgUgZhGg4IgLgKIgJgLQgKgKgIgJQgTgYgUgTQgPgUgTgSQgTgSgVgPIgTgOIgngcQgYgTgTgTQg1g1gag9QgshpAoh/QAxhxCdgLIA1gDIA2gBQAxgEAPgWQAggvgohjQgvhkgYhCIgOgiQg2iEAEhhQADhpBEhXQAPgUAUgUQBShHDEglIAjgGQCbgQCwAMIAdACQCSAIBzAeQAxAKArAOQBrAdAwAqQAZAUAKAVIADCYQAAAsADAnQACBBgJA5QgGA5gQAxQgbBag7BHQgWAZgZAXIgUAQQgcAXgnAYIgaAQQg9AfgaASQg7AigZAoQgOAWgEAZQgIAxAsBAQASAeAnAyIAdAmQAyBGABA0QABAXgIAXQgOAtgyArQg5A0hKgEQgYgBgagIQhQgZhvhNIgHgFQhnhHgsgTIgWgKQg3gWgkANQgTAIgNARQgRAVgIAUQgMAZADAXQADAaAaAgIAHAJIBABIIARAYQAWAkAHAlQAFAcAAAZQAAAcgIAaQgEAQgLAXIgQAgQgNAYgFARQgDAKAAAIQgBAgAeAmQgUgHgOgLg");
	this.shape_11.setTransform(156.1,-145.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ai6P4QgNgKgJgPQgHgLgFgLIgFgOIgQguIgGgUQgFgRgIgQQgLgjgKgRIgSgiQgVghgageQgUgZhFg5IgKgLIgKgLQgJgKgHgKQgSgZgUgSQgOgVgTgSQgTgSgWgQIgTgOIgngdQgZgTgTgTQg2g0gag+QgthrAoiBQAxhwCdgMIA1gCIA2gCQAxgDAPgWQAggvgnhiQgthjgXhBIgNgiQg1iCAGhgQAEhoBEhVQAPgUAUgTQBThHDCgkIAjgFQCagPCvAOIAcACQCQAKByAeQAvALAqAOQBrAeAuAqQAYAUAKAWIADCXQABArADAnQADBBgIA4QgGA4gPAxQgaBZg6BHQgVAZgaAXIgTAQQgcAXgmAZIgaAPQg8AggaASQg6AigZAoQgOAXgEAYQgIAxArBAQASAeAmAyIAcAmQAxBGAAAzQABAXgIAWQgPAtgxAqQg5AzhKgFQgYgBgagIQhQgZhuhNIgIgFQhmhHgsgSIgWgKQg3gUgjANQgTAHgNASQgQAVgIAUQgMAZAEAWQACAaAaAgIAIAJQAUAYArAwIARAZQAWAjAHAlQAFAcgBAZQAAAcgHAaQgFAQgLAXIgQAfQgNAYgFASQgCAKgBAIQgBAgAeAmQgUgIgOgLg");
	this.shape_12.setTransform(155.7,-145.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ai1P3QgNgKgJgPIgNgXIgFgOIgQgvQgCgIgFgLQgFgSgIgQQgMgjgKgRQgJgSgKgQQgWghgZgeQgWgbhCg6IgLgLIgJgLQgJgKgHgKQgRgagTgTQgNgVgTgSQgSgTgXgQIgTgOIgogdQgZgTgUgTQg3g1gag/QgthsAoiDQAwhvCdgMIA0gDIA2gBQAxgEAQgVQAggvglhhQgshigWhAIgNgiQgyiAAHhfQAFhmBDhVQAQgTAUgTQBUhFDBgjIAjgFQCZgNCsAPIAcACQCPALBvAgQAvALApAOQBpAeAtArQAYAUAKAWIACCWQABAsAEAmQADBAgHA3QgFA4gOAxQgaBYg4BHQgVAagZAWIgTAQQgbAYgmAYIgaAQQg7AggaASQg5AigZApQgOAWgEAYQgIAxAqBAQARAeAmAyIAbAlQAwBGgBAzQABAWgIAWQgPAsgxAqQg5AyhKgFQgYgCgagHQhQgbhuhMIgHgEQhmhHgsgRQgPgIgHgCQg3gUgjAOQgSAHgNASQgQAVgHATQgMAZAEAXQADAaAZAfIAIAKIA+BHQAKAMAHANQAWAkAHAkQAFAcAAAZQAAAcgIAaQgFAQgKAXIgQAfQgNAYgFASQgDAJAAAIQgBAgAeAmQgVgHgNgMg");
	this.shape_13.setTransform(155.2,-145.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AixP2QgNgKgJgQIgMgXIgFgNIgRgwIgHgUQgGgRgIgQQgNgjgKgSIgUghQgWgigagfQgWgbhBg7IgKgMIgJgLQgJgKgGgKQgQgbgTgTQgMgWgTgSQgSgTgXgRIgUgOIgpgdQgZgTgUgTQg4g2gahAQguhtAoiFQAwhuCdgMIA0gDIA2gCQAxgEAPgVQAhgugkhgQgqhhgVg/IgMghQgwh/AHhdQAGhmBEhTQAQgTAUgTQBVhEC/ghIAjgFQCZgMCqARIAbADQCNALBtAiQAuAKApAQQBnAeAsArQAYAUAJAWQABBRACBFQABArAEAmQAEA/gHA3QgEA3gOAwQgYBYg4BHQgUAagYAWIgTARQgbAXglAZIgaAQQg6AggaASQg4AjgZAoQgOAWgEAYQgIAyApA/QARAeAlAyIAbAlQAvBFgCAzQAAAWgIAVQgPAsgyAoQg5AxhJgFQgYgCgagHQhRgbhshLIgHgFQhmhGgsgRIgWgJQg3gTgiANQgSAIgNASQgQAUgHAUQgLAZAEAWQADAaAaAgIAHAJIA+BHQAKANAHAMQAWAkAHAlQAFAbgBAaQAAAbgIAaQgEAQgLAWIgQAgQgNAYgFARQgCAKgBAIQgBAgAeAmQgUgIgOgMg");
	this.shape_14.setTransform(154.8,-145.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AitP1QgNgKgJgQIgMgXIgFgOIgRgwQgCgJgGgLQgGgSgIgQQgOgjgLgRQgJgSgLgQQgWgigagfQgXgdhAg8IgKgLIgIgMQgJgKgGgLQgPgbgRgTQgMgXgTgTQgSgTgXgRIgUgOIgqgdQgZgUgVgTQg4g2gchBQgthtAniHQAwhuCdgNIA0gDIA2gBQAwgEAQgVQAhgtgjhgQgphfgTg/IgLghQgvh9AJhcQAHhkBEhSQAQgTAUgTQBVhCC+ggIAjgFQCYgKCoASIAbADQCLANBrAiQAuALAnAQQBmAeArAsQAXAUAKAWQAABRACBFQABArAFAlQAFA/gGA2QgEA2gNAwQgXBXg3BHQgTAagZAXIgSAQQgbAYgkAYIgZAQQg6AhgZASQg4AjgZAoQgOAXgEAYQgIAxApA/QAQAeAkAyIAaAlQAuBFgDAxQAAAWgIAVQgPArgyAoQg5AwhJgFQgYgCgagIQhRgbhrhLIgHgFQhmhGgsgQQgPgGgHgCQg2gTgiAOQgSAIgMARQgQAVgHAUQgLAYAEAXQADAaAaAfIAHAJIA+BIQAKAMAHAMQAWAkAGAlQAFAbAAAaQAAAbgIAaQgFAQgLAWIgQAgQgMAYgFARQgDAKAAAIQgBAgAeAlQgVgHgOgNg");
	this.shape_15.setTransform(154.3,-145);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AipP1QgNgLgJgQQgHgMgFgMIgFgOIgRgwQgCgJgGgLQgHgSgJgQQgNgjgMgSIgVgiQgXgigagfQgYgeg+g9IgJgLIgIgMQgIgLgGgLQgOgbgRgUQgLgXgTgTQgSgUgXgRIgVgPIgqgdQgagTgVgUQg5g2gchCQguhuAniJQAwhuCdgNIA0gDIA2gCQAwgDAQgVQAhgtghheQgohfgSg+IgLggQgsh8AKhbQAIhiBEhRQAQgTAUgSQBWhBC9gfIAigEQCYgJCmATIAaAEQCKAOBoAjQAtAMAnAPQBkAfAqAtQAXATAJAWQAABSACBEQACArAFAkQAGA/gGA1QgDA2gMAvQgWBXg2BHQgTAagYAWIgSARQgaAYglAYIgYARQg5AggZATQg3AjgZAoQgOAWgEAYQgIAyAoA/QAPAdAkAyIAZAlQAtBFgDAwQgBAWgIAVQgQAqgxAnQg5AwhJgHQgYgCgagHQhRgchqhKIgIgFQhmhGgrgPQgPgGgHgCQg2gSgiAOQgRAIgMASQgQAUgGAUQgLAYAEAXQAEAaAZAfIAHAJIA+BHIARAZQAVAkAHAkQAFAcgBAZQAAAbgIAaQgFAQgKAXIgQAfQgNAYgFARQgCAKgBAIQgBAgAeAlQgVgIgOgMg");
	this.shape_16.setTransform(153.9,-145);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AilP0QgNgLgJgRIgMgXIgFgPIgSgxQgCgIgGgMQgHgRgJgQQgPgkgMgRQgKgSgLgQQgYgjgagfQgZgfg9g+IgIgMIgIgMQgIgLgFgLQgNgcgQgUQgLgYgSgUQgSgUgYgRIgVgPIgqgdQgbgUgVgTQg6g3gchDQgvhvAniLQAwhtCdgNIAzgDIA2gCQAwgEAQgUQAigtghhdQgmhdgQg+IgKggQgrh6ALhZQAJhiBFhPQAQgTATgRQBYhBC7gdIAigEQCXgICkAVIAaAEQCHAPBnAlQAsAMAmAQQBjAfApAtQAWAUAJAVQAABSACBEQACAqAGAkQAGA+gFA1QgDA1gLAvQgUBWg1BHQgTAagYAXIgRAQQgaAYgkAZIgYAQQg4AhgZATQg3AigZAqQgNAWgEAYQgJAxAnA+QAQAfAiAxIAZAlQArBEgDAwQgBAVgIAVQgRApgxAnQg5AuhIgGQgYgCgagIQhRgdhqhJIgHgFQhmhFgsgOQgOgHgIgBQg1gSghAPQgSAIgMARQgPAVgGAUQgKAYAEAWQADAaAaAfIAHAJIA+BIQAJAMAHAMQAVAkAHAkQAFAcgBAZQAAAbgIAaQgFAQgLAWIgPAgQgNAXgFASQgCAJgBAIQgBAgAeAmQgVgIgOgNg");
	this.shape_17.setTransform(153.5,-145);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AihP0QgNgLgJgRIgMgZIgFgOIgSgyQgCgIgHgMQgHgRgJgQQgPgkgNgSIgWgiQgYgjgbgfQgZggg7g/IgJgMIgHgNQgIgLgFgLQgLgdgQgUQgKgYgSgUQgSgVgYgSIgVgOIgsgeQgbgUgVgTQg7g3gchEQgvhwAmiNQAwhtCdgNIAzgDIA2gCQAvgEAQgUQAjgsgfhcQglhdgPg8IgKggQgoh5AMhYQAKhgBFhOQAQgSATgSQBZg+C5gdIAigEQCXgGChAXIAaAEQCGAQBkAmQArAMAmAQQBhAgAoAtQAWAUAIAWQAABRACBEQACAqAHAkQAHA9gFA0QgCA0gKAvQgUBVgzBIQgTAZgXAXIgRARQgaAYgjAZIgYAQQg3AhgZAUQg2AigZApQgNAWgEAYQgJAyAnA+QAOAeAiAxIAYAlQArBEgFAvQgBAVgIAVQgRAogxAmQg5AuhIgHQgYgDgagHQhSgdhohJIgIgFQhlhFgsgNQgOgHgIgBQg1gRghAPQgRAIgMASQgOAUgGAUQgKAYAEAWQAEAaAZAfIAHAJIA+BHIAQAZQAVAkAGAkQAFAcAAAZQgBAbgIAZQgFAQgKAXIgQAfQgNAYgEARQgDAKAAAIQgBAfAeAmQgWgIgOgNg");
	this.shape_18.setTransform(153,-145);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AidPzQgNgLgJgRIgMgZIgFgPIgSgyQgCgIgHgMQgHgRgLgQQgPgkgNgSIgWgiQgZgjgbggQgaghg6hAIgJgNIgGgMQgIgLgEgMQgLgegPgUQgJgYgSgVQgSgVgYgSIgWgPIgsgeQgbgTgWgUQg8g4gdhEQgvhxAniPQAvhsCdgOIAzgDIA1gCQAwgEAQgUQAjgsgehbQgjhbgOg8IgJgfQgnh3ANhXQAMhfBFhNQAQgSATgRQBZg9C5gcIAhgDQCWgFCgAZIAZAEQCEARBjAnQAqAMAlARQBfAgAnAuQAVAUAJAWQgBBRADBDQABAqAIAkQAIA7gEA0QgCA0gKAuQgSBVgyBHQgTAagWAXIgRARQgZAYgjAZIgYARQg2AggZAUQg1AigZAqQgNAWgEAYQgJAxAmA+QAOAfAhAwIAYAlQApBDgGAvQgBAVgIAUQgRAogyAlQg4AthIgHQgYgDgZgIQhTgdhohIIgHgFQhlhFgsgMIgWgIQg1gQggAPQgRAIgLASQgPAUgGAUQgJAYAEAXQAEAZAZAfIAIAJIA9BHQAJAMAHANQAVAkAGAkQAFAbgBAZQAAAbgIAaQgFAQgLAWIgQAfQgMAYgFARQgCAKgBAIQAAAfAdAmQgWgIgOgOg");
	this.shape_19.setTransform(152.6,-145);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiZPzQgNgLgJgSIgMgZIgFgPIgTgzQgCgIgHgMQgIgRgKgRQgRgjgNgSIgXgiQgZgkgbggQgbgig5hBIgIgNIgGgNQgHgLgEgMQgKgegOgVQgIgZgSgVQgSgVgZgSIgWgPIgsgeQgdgUgVgUQg9g4gdhFQgwhzAmiRQAvhrCdgOIA0gDIA0gCQAwgEAQgUQAkgrgdhaQgihagMg7IgJgfQglh2APhVQAMheBFhMQARgRATgRQBag8C3gbIAhgDQCVgDCeAaIAZAFQCCASBgAoQAqANAkARQBdAgAmAuQAVAUAJAWQgCBRAEBDQABAqAIAjQAJA7gDAzQgBA0gKAuQgQBTgyBIQgSAagWAXIgRAQQgYAZgjAZIgXARQg2AhgYAUQg1AigYAqQgNAWgEAYQgJAxAkA+QAOAeAhAxIAXAkQAnBDgGAvQgBAUgJAUQgRAngyAkQg4AshIgIQgYgCgZgIQhSgehnhIIgHgEQhmhFgsgLQgOgGgHgCQg1gPggAPQgRAJgLARQgOAVgFATQgKAYAFAXQAEAZAZAfIAHAJIA9BHIAQAZQAVAjAGAkQAFAcgBAZQgBAbgHAZQgFAQgLAWIgQAfQgMAYgFARQgCAKgBAIQAAAgAdAlQgWgIgOgOg");
	this.shape_20.setTransform(152.2,-145);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiVPzQgNgLgJgTIgMgZIgFgPIgTgzQgCgJgIgLQgHgSgMgQQgQgjgOgTIgYgiQgagkgbggQgbgkg4hBIgHgNIgGgOQgHgLgEgMQgIgfgOgVQgHgagSgVQgSgWgZgSIgWgPIgugeQgcgVgWgTQg+g5gdhGQgxhzAniTQAuhrCdgOIAzgEIA1gCQAvgEARgUQAkgqgchZQgghZgLg6IgIgeQgjh1APhUQAOhcBFhLQARgRATgRQBbg7C1gZIAhgDQCVgBCbAbIAZAFQCAATBfApQAoANAkASQBbAhAlAuQAVAUAIAWQgCBRAEBDQACAqAIAiQAKA7gDAyQAAAzgJAtQgPBTgxBIQgRAagWAXIgRARQgYAYgiAaIgXAQQg1AhgYAVQg0AigYAqQgNAWgEAYQgJAxAkA+QANAeAgAwIAWAlQAmBDgGAtQgCAVgJATQgRAngyAjQg4ArhIgIQgYgDgZgIQhTgehmhHIgHgFQhlhEgsgLQgOgGgHgBQg1gOgfAPQgRAIgLASQgNAUgGAUQgJAYAFAWQAEAZAZAfIAIAJIA8BHQAJAMAHANQAVAkAGAkQAEAbgBAZQAAAagIAaQgFAQgLAWIgPAfQgNAYgEARQgDAKAAAIQgBAfAeAlQgXgIgOgOg");
	this.shape_21.setTransform(151.7,-145);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiSPzQgNgMgIgTIgMgZIgFgQIgTgzQgDgIgIgMQgIgRgLgRQgSgjgOgTIgYgjQgbgkgbggQgcglg2hCIgHgOIgGgNQgGgMgEgMQgHgggOgVQgGgagSgVQgRgXgagTIgWgPQgTgNgbgRQgdgUgXgUQg+g5gehHQgxh1AmiVQAvhqCdgOIAzgEIA0gCQAvgEARgTQAkgrgahXQgfhYgJg6IgIgeQghhyARhTQAOhbBFhKQARgRAUgQQBbg6C0gYIAhgCQCUAACZAdIAYAFQB/AUBcAqQAoAOAjASQBaAhAkAvQAUAUAIAWQgCBRAEBCQACAqAJAiQAKA5gCAyQABAygJAuQgOBSgvBIQgSAagVAXIgQAQQgYAZgiAaIgWARQg0AhgYAVQgzAigZAqQgMAWgFAYQgJAxAjA9QANAfAfAwIAWAkQAlBCgHAuQgCAUgJATQgSAmgyAiQg4AqhHgIQgYgDgZgIQhTgfhlhGIgHgFQhmhEgsgKQgNgGgIgBQg0gNgfAPQgRAJgKARQgNAVgFATQgJAYAFAWQAEAZAZAfIAHAJIA8BHQAJAMAHANQAVAjAGAkQAEAcgBAYQAAAbgIAaQgFAQgLAVIgQAfQgMAYgFARIgCASQgBAfAeAlQgXgIgPgOg");
	this.shape_22.setTransform(151.3,-145);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiNPyQgNgLgJgTIgMgaIgFgQIgUg0QgCgIgIgMQgIgRgNgRQgRgjgPgTIgZgjQgbgkgcghIhRhpIgHgNIgFgOQgGgMgDgNQgGgggNgWQgGgagRgWQgSgWgagUIgXgPIgugfQgegUgWgUQhAg5gehJQgxh0AliYQAvhpCdgPIAzgDIA0gDQAvgDARgUQAkgqgZhWQgdhYgIg4QgFgQgCgOQgfhwARhSQAQhaBFhIQARgRAUgQQBcg5CygXIAhgCQCUACCXAfIAYAFQB8AVBbAsQAnAOAiASQBYAhAjAwQAUATAIAXQgDBRAEBCQACApAKAhQALA5gCAyQACAxgIAtQgNBRgvBJQgQAZgWAXIgPASQgYAYghAaIgWARQgzAhgYAVQgzAkgYApQgMAXgFAXQgJAxAjA9QAMAfAeAvIAVAkQAkBDgIAsQgCAUgJATQgSAlgyAiQg4AphHgJQgYgDgZgIQhTgghlhFIgHgFQhlhDgsgKQgNgFgIgBQg0gNgeAPQgRAJgKASQgNAUgFAUQgIAXAFAXQAEAZAZAeIAIAJIA7BHQAJAMAHAMQAUAkAGAkQAFAbgBAZQgBAagIAaQgFAQgLAWIgPAfQgNAYgEAQIgDASQAAAfAdAmQgXgJgOgPg");
	this.shape_23.setTransform(150.9,-145);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiKPyQgNgLgIgUIgMgaIgFgQQgIgYgMgcQgDgJgIgMQgJgRgMgRQgTgjgPgTIgZgjQgcgkgcgiIhQhrIgHgOIgFgNQgFgNgEgNQgEgggNgWQgFgbgRgWQgRgXgbgUIgXgPIgvgfQgegVgXgUQhAg5gfhJQgxh2AliaQAuhpCdgPIAzgEIA0gCQAugEASgTQAlgpgYhVQgchWgHg4IgHgdQgchwAShRQARhYBGhHQARgQATgQQBdg3CxgWIAhgCQCTADCVAgIAXAGQB7AWBYAtQAnAOAhATQBXAiAhAvQAUAVAIAVQgDBRAEBCQACApAKAhQAMA5gBAwQACAxgHAsQgMBRgtBJQgQAZgVAYIgQARQgXAYggAaIgXARQgyAigXAVQgyAjgYAqQgNAWgEAYQgJAxAhA9QAMAeAdAwIAVAkQAjBCgKArQgCAUgJASQgSAlgyAhQg4AohHgJQgXgDgZgIQhUghhjhEIgHgFQhmhDgrgJQgOgFgIgBQgzgMgfAQQgPAJgLARQgNAVgEATQgIAXAGAXQAEAZAZAeIAHAJIA8BHIAQAZQAUAjAFAkQAFAbgBAZQgBAagIAaQgFAQgLAWIgQAeQgMAYgEARIgDASQAAAfAdAlQgYgJgOgPg");
	this.shape_24.setTransform(150.5,-145.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiHPzQgNgNgIgUIgMgaIgFgQQgIgZgMgcQgDgJgJgMQgIgQgNgSQgTgigQgUIgagjIg4hGQgfgogxhGIgHgNIgEgPQgFgMgCgNQgEghgMgXQgFgbgRgXQgRgXgbgUIgXgQIgwgeQgfgVgXgVQhBg5gfhKQgyh3AlicQAvhoCcgPIAzgEIA0gDQAugDASgUQAlgogXhUQgahWgGg3IgGgcQgbhuAUhPQAShXBGhHQARgQATgPQBeg2CwgUIAfgCQCTAECTAjIAXAFQB5AYBXAtQAlAOAhAUQBVAiAgAxQAUATAHAWQgDBRAEBCQADAoAKAhQANA4gBAvQADAxgGAsQgLBQgsBJQgQAZgVAXIgPARQgWAaggAaIgWARQgyAigXAWQgxAigYAqQgNAWgEAYQgKAxAhA9QAMAeAdAvIATAkQAiBCgKArQgCATgKASQgSAlgyAfQg4AohHgKQgXgDgZgIQhUghhjhEIgHgFQhkhDgsgIQgOgEgHgCQg0gLgdAQQgQAJgKASQgNAUgEATQgIAXAGAXQAEAZAZAeIAIAJIA7BHQAIAMAHAMQAUAkAGAkQAEAbgBAZQgBAagIAaQgFAQgKAVIgQAfQgMAXgFASQgCAJAAAIQAAAfAdAlQgYgJgPgOg");
	this.shape_25.setTransform(150.1,-145.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiDPyQgNgMgJgUIgLgbIgFgQQgJgZgMgdQgDgIgJgMQgJgRgNgRQgUgjgQgTIgagkIg5hHQgggpgwhGIgGgOIgDgPQgGgNgBgNQgDgigMgWQgDgcgRgXQgRgYgcgUIgXgQIgxgfQgfgVgXgUQhCg6gghLQgyh4AlieQAuhnCcgQIAzgEIA0gCQAugEASgTQAlgogVhUQgZhTgEg3IgFgcQgahtAWhOQAShVBGhFQARgQAUgPQBeg0CvgUIAfgBQCSAGCRAjIAXAGQB3AZBUAvQAlAOAgATQBUAjAfAxQATAUAHAWQgEBRAFBBQADAoALAhQANA3AAAvQAEAwgGArQgJBQgsBIQgPAagVAYIgOARQgWAYggAbIgVARQgyAigWAWQgxAjgXArQgNAWgEAXQgKAxAgA8QALAfAcAvQAIARALATQAhBBgLAqQgDATgJASQgTAkgyAfQg4AmhGgKQgYgDgYgIQhVgihhhDIgHgFQhlhCgsgHQgOgFgHgBQgzgLgdARQgQAJgJARQgNAVgEATQgHAXAFAWQAFAZAZAeIAHAJIA7BHIAQAZQATAjAGAkQAEAbgBAZQgBAagIAZQgFAQgLAWIgPAeQgMAYgFARQgCAJAAAIQAAAgAdAkQgZgJgOgPg");
	this.shape_26.setTransform(149.7,-145.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah/PyQgNgMgJgVIgLgbIgFgRQgJgYgNgdQgDgJgJgMQgJgRgOgSQgUgigQgUIgbgjIg6hIQgggqgvhGIgGgQIgDgOQgFgNgBgNQgCgkgLgWQgDgdgRgWQgQgZgdgUIgXgQIgyggQgfgUgYgVQhCg6gghMQgzh4AlihQAuhnCcgQIAzgEIA0gCQAtgEASgTQAmgngUhSQgXhUgDg1IgFgcQgYhrAXhNQAThUBHhEQARgPATgPQBggzCsgSIAggBQCRAHCPAlIAXAGQB1AaBSAwQAkAPAfATQBSAkAeAxQATAUAHAWQgEBRAFBBQADAoALAgQAPA2AAAvQAEAugFAsQgIBPgqBIQgQAbgTAWIgPARQgWAZgeAbIgVASQgxAigWAVQgxAkgXArQgMAWgFAXQgKAxAgA8QALAfAbAvIASAkQAfBAgLAqQgDATgKARQgTAjgyAfQg3AlhHgKQgXgEgZgIQhVgjhghCIgHgEQhkhDgtgGQgNgFgHgBQgzgKgdARQgQAJgJASQgMAUgDATQgIAXAGAWQAFAZAZAeIAHAJIA7BHQAIAMAHANQATAjAGAkQAEAbgBAYQgBAagIAaQgFAQgLAVIgPAfQgMAYgFAQQgCAKAAAHQAAAgAdAlQgZgJgOgQg");
	this.shape_27.setTransform(149.3,-145.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ah8PyQgNgMgJgVIgLgcIgFgRQgJgZgNgdQgDgIgKgNQgJgRgOgRQgVgjgQgTIgcgkIg7hIQghgsgthHIgFgPIgDgPQgFgNgBgOQgBgkgKgWQgCgdgQgYQgRgZgdgUIgXgQIgzggQgggVgXgVQhEg6gghNQgzh5AkijQAuhmCcgRIAygEIA0gCQAugEASgSQAmgogThRQgVhRgCg1IgFgcQgVhpAXhMQAVhTBHhCQARgPATgPQBhgyCqgRIAggBQCRAJCNAnIAWAHQBzAaBQAxQAkAPAeAUQBQAkAeAyQARAUAHAWQgEBQAFBBQADAoAMAgQAPA1ABAuQAFAugEArQgHBPgpBIQgPAagUAXIgOASQgVAZgfAbIgUARQgwAigWAWQgwAkgXArQgMAWgFAXQgKAxAfA8QAKAfAaAuIASAkQAeBAgMApQgDATgKARQgTAigyAeQg3AlhHgMQgXgDgYgIQhWgjhfhCIgHgEQhlhDgsgFQgNgFgHAAQgzgJgcARQgQAJgJARQgLAUgEAUQgHAXAGAWQAFAYAZAeIAHAJIA7BHIAPAZQATAjAGAkQAEAbgCAYQgBAagIAaQgFAPgKAWIgQAeQgMAYgEARQgDAJAAAIQAAAfAdAlQgZgJgOgQg");
	this.shape_28.setTransform(149,-145.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ah5PyQgNgMgIgWIgLgcIgGgRQgIgagNgcQgDgJgLgNQgJgRgPgRQgVgjgRgUIgcgjIg8hJQgigtgrhIIgFgPIgDgPQgEgOgBgOQAAgkgJgXQgBgegRgYQgQgZgdgVIgYgQIgzgfQghgWgYgUQhEg8ghhOQgzh5AkilQAthlCcgRIAzgFIA0gCQAtgEASgSQAmgngRhQQgUhQgBg0IgDgbQgUhoAZhLQAVhSBHhAQARgPAUgPQBhgxCpgQIAgAAQCQAKCLApIAVAHQByAbBOAyQAjAQAdAUQBPAkAcAzQASATAGAWQgEBRAFBAQADAoANAfQAQA1ABAtQAGAvgEAqQgGBNgoBJQgOAagTAXIgOARQgVAageAbIgUARQgwAjgVAVQgvAmgXAqQgNAVgEAYQgKAxAeA7QAJAgAaAuQAHARAKASQAdBAgNAoQgDATgKAQQgUAjgyAcQg3AkhGgLQgYgEgYgIQhVgkhfhBIgHgEQhkhCgsgFQgOgEgHAAQgygJgcARQgPAJgJASQgLAUgDAUQgHAWAGAWQAFAZAZAeIAHAJIA6BGQAIAMAHAMQATAkAGAjQAEAbgCAZQgBAZgIAbQgFAPgLAWIgPAeQgMAYgEARQgDAIAAAJQAAAeAdAlQgZgJgPgQg");
	this.shape_29.setTransform(148.6,-145.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ah2PyQgNgNgIgWIgLgcIgFgRQgJgagOgdQgDgJgKgMQgKgRgPgSQgWgjgRgTIgdgkIg9hKQgigtgqhKIgFgPQgCgIAAgIQgEgNAAgPQABgkgJgXQAAgfgRgYQgQgZgegWIgYgQIg0ggQgggVgZgVQhFg7ghhPQg0h7AkinQAthlCcgRIAzgEIAzgDQAtgEATgSQAmgmgQhPQgShPAAg0IgDgaQgRhnAZhJQAXhQBHhAQARgPAUgOQBigvCngPIAgAAQCQAMCIApIAVAIQBwAcBMA0QAiAPAdAVQBNAlAbAyQARAVAHAVQgFBRAFBAQAEAnANAfQAQA0ACAtQAHAtgDAqQgFBNgnBJQgOAagTAXIgOASQgUAZgdAbIgUASQgvAigVAXQguAkgXArQgMAWgFAXQgKAxAdA7QAJAfAZAuQAHASAJASQAcA/gNAoQgEASgKAQQgUAigyAcQg3AjhHgMQgXgEgYgIQhWgkhdhBIgHgEQhkhCgsgEQgOgEgHAAQgygIgcARQgOAKgJARQgLAUgDAUQgHAWAHAWQAFAZAZAdIAHAJIA6BHQAIAMAHANQATAjAFAkQAEAagBAZQgBAZgJAaQgFAQgKAVIgQAeQgMAYgEARQgCAJAAAIQAAAfAdAkQgagJgPgQg");
	this.shape_30.setTransform(148.2,-145.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhyPyQgNgNgJgWIgLgdIgFgRQgJgbgOgdQgDgIgLgNQgKgRgPgRQgXgjgSgUIgdgkIg9hKQgjgvgphKIgEgQIgCgQQgEgNAAgPQADglgJgXQABgfgRgZQgQgagegVIgYgRIg1ggQghgVgZgVQhGg8ghhQQg1h8AkipQAthkCcgRIAzgFIAzgCQAtgEASgSQAogmgQhOQgRhOADgzIgDgaQgQhlAbhIQAYhPBHg+QARgPAUgNQBjgvCmgNIAfAAQCPAOCGAqIAWAIQBtAeBKA0QAiAQAbAWQBMAkAaAzQARAVAGAVQgFBRAGA/QADAoAOAeQARAzADAtQAHAsgDAqQgDBMgmBJQgOAagSAYIgOARQgTAZgdAcIgUASQguAigVAXQguAlgWAqQgMAWgFAXQgKAxAcA7QAJAfAYAuIAPAjQAbA/gOAoQgEARgKARQgVAggxAbQg4AihGgMQgXgEgXgIQhXglhdhAIgHgEQhjhBgtgDQgNgEgHAAQgygIgbASQgPAJgIASQgKAUgDAUQgHAWAHAWQAGAYAYAeIAHAJIA6BGQAIAMAHANQATAjAFAkQAEAbgCAYQgBAZgIAaQgGAQgKAVIgPAeQgMAXgEARQgDAKAAAIQAAAfAdAkQgagKgOgQg");
	this.shape_31.setTransform(147.9,-145.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhvPxQgNgMgIgXIgLgdIgGgRQgJgbgOgdQgDgJgLgMQgKgRgQgSQgXgjgTgUIgegkQghgngdgkQgkgwgnhLIgEgQIgBgQQgEgOABgOQADgngIgXQACgggRgYQgQgagegXIgZgQIg1ghQghgVgagVQhHg8gihRQg0h9AkiqQAshlCcgRIAygFIA0gCQAsgEATgSQAoglgOhNQgQhNAEgyIgCgaQgOhjAchHQAYhNBIg+QARgOAUgOQBjgsClgNIAfAAQCPAQCEAtIAVAHQBsAfBIA2QAgAQAbAVQBKAmAZAzQAQAVAGAVQgFBRAGA/QADAnAPAeQASAzADArQAIAsgCApQgCBMglBJQgNAagSAXIgOASQgTAagcAbIgUASQgtAigVAYQgtAkgWArQgMAWgFAXQgKAyAbA6QAJAfAXAuIAOAjQAaA+gOAnQgFARgKARQgVAfgyAaQg3AihGgMQgWgFgYgIQhXglhchAIgHgEQhjhBgtgCQgNgEgHAAQgygGgaASQgPAJgHASQgLATgCAUQgHAWAHAWQAGAYAZAeIAHAJIA5BGQAIAMAHANQASAkAFAjQAEAbgBAYQgBAZgJAaQgFAPgLAVIgPAeQgMAYgEARQgCAJAAAIQAAAfAdAkQgagKgPgRg");
	this.shape_32.setTransform(147.5,-145.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhsPyQgNgNgIgXIgLgeIgFgRQgJgcgPgdQgDgIgLgNQgLgRgQgSQgYgjgTgUIgegkQgigngdgkQgkgxgmhNIgEgQIgBgQQgDgOABgPQAEgngHgYQACgggQgZQgQgbgfgWIgZgQIg2ghQgigVgZgWQhIg8gihSQg1h+AjitQAthjCcgSIAygEIAzgDQAsgEATgRQAogmgMhLQgPhMAFgxIgBgaQgMhiAdhFQAahMBHg8QASgOATgNQBlgsCjgLIAfAAQCOARCCAuIAUAIQBrAgBFA3QAgAQAaAWQBJAmAYA0QAQAUAFAWQgGBRAHA+QADAnAPAeQATAyAEArQAIArgBApQgBBLgkBJQgNAagRAYIgNARQgTAagcAbIgTATQgsAhgVAYQgsAmgXAqQgMAWgEAXQgLAxAbA7QAIAfAWAtIAOAjQAZA/gQAmQgEARgLAPQgVAggyAZQg2AhhGgOQgXgEgYgIQhXgmhbg/IgHgEQhkhAgrgCQgNgEgHABQgygGgaASQgOAJgIASQgKAUgCAUQgGAVAHAXQAGAYAYAdIAHAJIA5BGQAIAMAHANQASAjAFAkQAEAagBAZQgCAZgIAZQgFAQgLAVIgPAeQgMAXgEARQgCAJAAAIQAAAfAdAkQgbgJgPgRg");
	this.shape_33.setTransform(147.1,-145.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhoPyQgNgNgJgYIgLgeIgFgRQgJgcgPgdQgDgJgMgNQgKgRgRgRQgZgjgTgUIgfglQgigngdglQgmgygkhNIgEgRIAAgQQgDgOABgQQAGgngHgYQADgggQgaQgQgbgfgXIgZgQIg3ghQgigWgagVQhJg9gihTQg2h+AjiwQAthiCcgSIAygFIAzgCQAsgFATgRQAoglgLhKQgNhLAGgwIgBgZQgJhhAehEQAbhLBHg7QASgNATgNQBmgqChgLIAfABQCOATB/AvIAUAJQBpAgBEA5QAfAQAZAXQBHAlAXA1QAPAUAGAWQgGBRAGA+QAEAnAPAdQAUAxAEAqQAJArAAApQAABKgjBJQgMAagSAYIgMARQgTAagbAcIgSASQgsAigUAZQgsAlgXArQgLAWgFAXQgLAwAaA7QAIAfAVAtIAOAjQAXA+gQAlQgFARgLAPQgVAfgyAZQg3AfhFgNQgXgEgXgJQhYgmhag+IgHgEQhkhBgrgBQgNgDgHAAQgygFgZATQgOAJgIASQgKAUgBATQgGAWAHAWQAGAYAZAdIAHAJIA4BGIAPAZQASAjAFAkQAEAagCAZQgBAZgJAZQgFAQgKAVIgQAeQgLAXgEARQgDAJAAAIQABAfAcAkQgbgKgOgRg");
	this.shape_34.setTransform(146.8,-145.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhmPxQgNgMgIgZIgLgdIgFgSQgJgcgPgeQgEgJgMgMQgLgSgRgSQgZgigUgUIgfglQgjgogeglQgmgygjhPIgDgRQgBgJABgHQgCgPABgPQAHgogGgYQAEgigQgaQgQgbgggXIgZgQQgVgOgigUQgjgWgagVQhKg9gjhUQg2iAAjixQAthiCbgSIAygEIAzgEQAsgEATgRQApgkgKhJQgMhKAIgwIAAgYQgIhfAfhDQAchKBIg6QARgMAUgNQBmgpCggJIAfABQCNAUB9AxIAUAIQBnAjBBA5QAfARAYAWQBFAnAWA0QAPAVAGAWQgHBQAHA/QAEAmAQAdQAUAwAFApQAKArAAAoQACBKgiBJQgMAagRAYIgNARQgSAbgbAbIgSASQgrAjgUAZQgrAlgWArQgMAWgFAXQgKAwAZA7QAHAfAVAsIAMAkQAXA9gRAlQgFARgLAOQgWAegyAYQg2AfhGgOQgWgFgYgIQhXgnhag9IgHgFQhkhAgrAAQgNgCgHAAQgxgFgZATQgOAJgHASQgKAUgBAUQgGAVAIAXQAGAXAYAdIAHAJQAWAaAjAsQAIANAGAMQASAjAFAkQAEAagCAYQgBAagJAZQgFAQgLAUIgPAeQgMAYgDARQgDAJAAAIQABAeAcAkQgbgKgPgSg");
	this.shape_35.setTransform(146.5,-145.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhjPyQgNgNgIgZIgLgfIgFgSQgJgbgQgeQgDgIgMgOQgLgRgSgSQgagjgUgUIggglQgjgngegmQgng0gihPIgCgSQgBgIABgIQgCgPACgPQAIgqgGgXQAEgjgPgaQgQgcgggXIgagRQgVgNgjgUQgjgVgagWQhLg+gjhVQg2iAAii0QAthhCbgTIAygEIAzgDQArgEAUgRQApgjgJhJQgKhJAJguIAAgZQgGhdAhhCQAdhIBIg5QARgNAUgMQBngnCfgJIAeACQCMAVB8AzIATAJQBlAjBAA7QAdAQAYAYQBEAmAUA1QAPAVAFAWQgHBRAHA9QAEAnARAcQAVAvAFApQALAqABAoQADBJghBJQgMAbgRAXIgMASQgRAagbAcIgRASQgrAjgTAZQgrAlgWArQgMAWgEAXQgLAxAYA5QAHAgAUAtQAFAQAHASQAVA+gSAkQgFAQgLAOQgWAegyAXQg3AehFgOQgWgFgYgJQhYgnhYg9IgHgEQhkhAgrABQgNgDgHAAQgxgDgZATQgNAKgHARQgJAUgBATQgGAWAIAWQAGAXAZAdIAHAJIA4BHIAOAYQASAkAFAjQADAagCAYQgBAZgJAaQgFAPgKAWIgPAdQgMAYgEAQQgCAJAAAIQAAAfAdAkQgcgLgPgRg");
	this.shape_36.setTransform(146.1,-145.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhgPyQgNgNgIgZIgKgfIgGgTQgJgcgQgeQgDgIgNgOQgLgQgSgSQgagjgVgVIghglQgkgogeglQgng1ghhQIgCgSQAAgJABgIQgCgPACgQQAJgpgFgZQAFgigPgbQgQgcgggXQgMgKgOgHQgWgPgjgTQgkgWgagWQhLg+gkhVQg3iCAji1QAshhCbgTIAygEIAzgDQArgFATgQQAqgkgIhHQgIhHAKgvIABgXQgEhcAhhBQAehGBJg4QARgNAUgLQBognCdgHIAeACQCMAXB5A0IATAJQBjAlA+A7QAdASAXAXQBCAnATA2QAPAUAFAWQgIBRAIA9QAEAmARAcQAWAuAGApQALApABAnQAFBJggBJQgMAagQAYIgMASQgRAagaAcIgRATQgqAjgTAZQgqAlgWAsQgMAVgEAXQgLAxAXA5QAGAfAUAuQAEARAHARQAUA9gSAjQgGAQgLAPQgWAdgyAVQg3AdhFgOQgWgFgXgJQhZgohXg8IgHgDQhkhAgrABQgNgCgHAAQgwgDgZAUQgNAJgHASQgJAUgBATQgFAVAIAXQAGAXAZAdIAHAJQAWAaAiAsIAOAYQASAkAEAjQAEAagCAZQgCAYgIAZQgGAQgKAVIgPAeQgMAXgEARQgCAJAAAIQABAfAcAjQgbgKgQgSg");
	this.shape_37.setTransform(145.8,-145.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhdPyQgNgOgIgZIgLgfIgFgTQgJgcgQgeQgEgJgNgNQgLgRgTgSQgbgjgVgVIghglQglgogegmQgog2gfhRIgCgSQAAgJABgIQgBgQACgQQAKgqgEgZQAGgigPgcQgQgcghgYIgagRQgWgOgjgTQglgXgagVQhNg/gkhXQg3iCAii3QAshgCcgTIAxgFIAzgDQArgEATgRQAqgjgGhGQgHhHAMgtQAAgMABgLQgChaAjhAQAfhFBIg2QASgNAUgMQBoglCcgFIAeACQCLAYB3A2IATAJQBhAmA8A8QAcASAWAYQBAAnATA2QAOAVAFAWQgIBQAHA9QAFAmASAcQAWAuAHAoQAMAoACAnQAFBIgfBJQgLAagQAYIgLASQgRAagZAcIgRATQgpAjgTAZQgqAngWArQgLAVgFAXQgLAxAXA5QAGAfASAtIALAiQATA9gUAjQgFAPgMAOQgWAdgyAVQg2AchFgPQgXgFgXgIQhYgphXg8IgHgEQhjg/gsACQgMgCgIABQgwgDgYAUQgNAKgGASQgJATAAAUQgFAVAIAWQAGAXAZAdIAHAJIA3BGIAOAYQASAkAEAjQAEAagCAYQgCAZgIAZQgGAQgKAVIgPAdQgMAYgEAQQgCAJAAAIQABAfAcAjQgcgKgPgSg");
	this.shape_38.setTransform(145.5,-145.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhaPyQgNgOgIgZIgKggIgGgTQgJgdgQgeQgEgIgNgNQgMgRgTgTQgbgjgWgUIgigmQglgogegmQgpg4gehSIgCgSQAAgJACgIQgBgQADgQQALgrgEgZQAHgjgPgcQgQgdghgYIgbgRQgVgOglgUQgkgWgbgWQhNg/glhWQg3iEAii6QArhgCcgTIAxgFIAzgDQAqgEAUgQQAqgjgFhFQgFhFANgtIACgXQAAhZAjg+QAghEBJg1IAmgXQBpgkCagFIAeADQCLAaB1A3IASAKQBfAmA6A+QAbASAWAYQA+AoASA2QANAVAFAWQgIBQAIA9QAEAmATAbQAXAtAHAnQANAoACAnQAHBHgeBJQgLAbgPAXIgLASQgRAbgYAcIgRATQgoAjgTAaQgpAmgWArQgLAWgFAWQgLAxAWA5QAFAgASAsIAKAiQASA8gUAiQgGAQgMANQgWAcgyAVQg3AbhEgQQgXgFgXgIQhZgqhVg6IgHgEQhjg/gsADQgMgDgIABQgvgBgYATQgNAKgGASQgIAUgBATQgEAVAIAWQAHAYAYAcIAHAJQAWAbAhArQAIAMAGANQARAjAFAjQADAagCAYQgBAZgJAZQgGAQgKAVIgPAdQgLAXgEARQgCAJAAAIQABAeAcAkQgdgLgPgSg");
	this.shape_39.setTransform(145.1,-145.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhXPyQgNgPgIgZIgLggIgFgTQgJgegRgeQgEgIgNgNQgMgRgUgSQgcgkgWgUIgigmQgmgogegnQgqg5gchTIgCgSIACgSQgBgPAEgRQAMgrgDgaQAHgjgPgcQgPgdgigZIgbgSQgWgNgkgUQglgXgcgWQhOg+glhZQg3iEAhi8QAshfCbgUIAxgEIAzgEQAqgEAUgQQArgigEhEQgEhFAOgrIADgWQAChYAlg9QAhhDBIgzQASgMAUgLQBqgjCZgDIAeADQCKAbBzA5IASAKQBdAnA4A/QAaASAVAZQA9AoARA3QANAVAEAVQgJBRAIA8QAFAmATAbQAYAsAIAnQANAnAEAmQAHBGgcBKQgLAbgPAYIgLASQgQAagYAdIgQATQgoAigSAbQgpAmgVArQgLAWgFAXQgLAwAVA5QAFAfAQAsIAKAjQAQA7gUAiQgGAPgMANQgXAbgyAUQg2AbhFgQQgWgGgXgJQhZgphVg6IgHgEQhjg/grAEQgNgCgHABQgwgBgXAUQgMAKgGASQgIATgBAUQgEAUAJAWQAGAYAZAdIAHAJIA2BFIAOAYQASAkAEAjQADAagCAYQgBAZgJAZQgGAPgKAVIgPAeQgLAWgEARQgCAJAAAJQABAdAcAkQgdgKgPgTg");
	this.shape_40.setTransform(144.8,-145.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhUPyQgNgOgIgaIgLghIgFgTQgKgegRgeQgDgIgOgOQgNgQgUgTQgcgjgWgVIgjglQgngpgfgnQgqg6gbhUIgBgTQABgJACgIQgBgRAEgRQANgrgCgZQAIglgPgcQgPgegigYIgcgSIg7giQgmgXgbgWQhPg/glhZQg4iGAhi+QArheCcgUIAxgFIAygEQAqgDAUgQQArgigChCQgChEAPgrIADgXQAEhVAmg8QAihBBJgzIAmgWQBrghCXgCIAeACQCJAeBxA6IARALQBcAnA1BBQAaASAUAZQA8AoAPA4QANAVAEAWQgJBQAIA8QAFAmAUAaQAZAsAIAlQAOAnAEAmQAJBGgcBJQgKAbgPAXIgKASQgQAbgYAdIgQATQgmAjgTAbQgnAmgWAsQgLAVgFAXQgLAwAUA5QAFAfAQAsIAJAiQAPA7gVAiQgHAPgMANQgXAagyATQg2AZhEgQQgWgFgXgJQhagqhUg6IgGgEQhkg+grAEQgMgCgIABQgvAAgXAVQgMAKgGASQgIATABATQgEAVAIAWQAHAYAYAcIAHAIQAWAbAhArIAOAZQARAkAEAiQADAbgCAXQgCAYgIAaQgGAPgKAVIgPAdQgMAYgDAQQgCAJAAAIQABAeAcAkQgdgLgPgTg");
	this.shape_41.setTransform(144.5,-145.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhRPyQgNgPgIgaIgLghIgFgTQgJgegSgfQgEgIgOgNQgMgRgVgTQgdgjgXgVIgjgmQgngpgfgnQgrg7gahUIAAgTQAAgKADgIQgBgRAFgRQAOgtgCgZQAJglgPgdQgPgegjgZIgbgSQgWgNgmgVQgmgWgcgXQhQg/gmhaQg4iHAhjAQArheCcgUIAxgFIAygDQAqgEAUgQQArghgBhCQgBhCARgqIAEgWQAFhUAog7QAjhABJgxIAmgWQBrggCXgBIAdADQCIAfBvA8IARAKQBaAqA0BBQAZATATAZQA6ApAOA4QAMAVAEAWQgJBQAJA8QAFAkAUAbQAZArAJAlQAPAmAEAlQALBFgbBKQgKAbgOAYIgKASQgPAagYAdIgPATQgmAkgSAaQgnAngVArQgLAWgFAXQgMAwAUA5QAEAfAPAsIAIAiQAOA7gWAgQgGAPgNAMQgXAagyASQg2AZhEgRQgWgFgXgJQhagrhTg5IgHgEQhjg+grAGQgNgCgHABQgvABgWAUQgMAKgFASQgIAUAAATQgDAVAIAVQAHAXAZAdIAHAJQAWAaAgArIANAZQARAjAFAjQADAagDAYQgBAYgJAaQgGAPgKAVIgPAdQgLAXgEAQQgCAJAAAIQABAfAcAjQgdgLgPgTg");
	this.shape_42.setTransform(144.2,-145.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhPPyQgNgPgHgaIgLghIgFgUQgKgegSgfQgDgIgPgOQgNgRgVgTQgdgigXgWIglgmQgngpgfgoQgsg8gYhVIAAgTQAAgKADgIQAAgRAFgRQAPgugBgaQAJglgOgdQgPgegjgaIgcgSQgWgNgngVQgmgXgcgWQhRhAgmhbQg5iIAhjCQArhdCbgUIAxgFIAygEQAqgEAUgPQAsghAAhBQABhBASgpIAEgWQAIhSAog5QAkg/BJgwIAmgWQBtgeCVAAIAdADQCIAgBsA+IARALQBYAqAxBDQAZATASAZQA4AqAOA4QALAVAEAWQgJBQAIA7QAGAlAUAaQAbAqAJAlQAPAlAGAlQALBEgaBKQgJAbgOAYIgKASQgOAbgXAdIgQASQglAkgSAcQgmAmgVAsQgLAVgFAXQgLAxASA4QAEAfAOArIAIAiQANA7gXAgQgHAOgMAMQgYAagyARQg2AYhEgSQgWgFgWgJQhbgshSg4IgGgDQhjg+gsAGQgMgCgHACQgvABgWAUQgMALgFASQgHATABAUQgEAUAJAWQAHAXAYAcIAHAJQAWAbAgArQAIAMAGAMQAQAkAFAiQADAagDAYQgBAYgJAZQgGAQgKAUIgPAeQgLAXgEAQQgCAJAAAIQABAeAcAjQgdgLgQgTg");
	this.shape_43.setTransform(143.9,-145.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhMPyQgNgPgIgbIgKghIgGgUQgJgfgSgeQgEgJgPgNQgNgRgVgTQgegjgYgVIglgmQgogqgfgoQgtg9gWhWIAAgUQABgKACgIQAAgRAGgSQAQgugBgaQALgmgPgdQgOgfgkgZIgcgTIg9giQgngXgdgXQhRhAgnhcQg5iIAhjEQAqhdCcgVIAwgFIAygDQAqgEAVgQQAsggABhAQAChAATgoIAFgVQAKhRApg4QAlg+BKgvIAmgUQBtgeCTACIAdADQCIAiBqA/IARALQBWAsAvBDQAYAUARAaQA3ApAMA5QAMAVADAWQgKBQAJA7QAFAkAWAaQAbApAKAkQAQAlAGAlQAMBDgYBKQgJAbgOAYIgJASQgPAbgWAdIgPATQgkAkgSAcQgmAngUArQgLAWgFAWQgMAxASA4QADAfAOArQACARAEARQAMA6gXAfQgHAOgNAMQgYAZgyARQg2AWhDgRQgWgGgXgJQhagshSg3IgGgEQhjg9grAGQgNgBgHACQguABgWAVQgLALgFASQgHATABATQgDAVAJAWQAHAWAYAcIAHAJQAWAbAgArQAHAMAGAMQARAkAEAiQACAagCAYQgBAYgJAZQgGAQgKAUIgPAdQgLAXgEARQgCAJAAAIQABAeAcAjQgegLgPgUg");
	this.shape_44.setTransform(143.6,-145.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhJPyQgNgPgIgbIgKgiIgFgUQgKgfgSgfQgEgIgPgOQgOgRgWgTQgegigYgWIgmgmQgogqgggoQgtg/gVhXQgBgKABgJQABgKADgJQABgRAFgSQASgvgBgaQAMgngPgdQgOgggkgZQgNgKgQgJQgWgNgogVQgngXgdgXQhShBgnhcQg6iKAhjGQArhcCbgVIAwgFIAygEQApgEAVgPQAtggACg+QAEhAAVgnIAFgVQALhPArg3QAmg8BKguIAmgUQBugcCSACIAdAEQCGAjBpBBIAQALQBUAtAtBFQAXATARAbQA1AqALA5QALAVAEAWQgLBQAKA7QAFAkAWAZQAcApAKAjQARAkAGAlQAOBDgXBJQgJAbgNAYIgJASQgOAbgWAeIgPATQgjAkgSAcQglAngUArQgLAWgFAWQgMAxARA4QADAfANArIAGAiQAKA6gYAeQgHAOgNAMQgYAYgyAPQg2AWhDgSQgXgGgWgIQhbgthQg3IgGgEQhjg9gsAIQgMgBgHABQguADgVAVQgMALgEASQgHATACATQgDAUAJAWQAHAXAYAcIAHAJQAWAbAgAqQAHAMAGANQAQAjADAjQADAagCAXQgBAYgJAZQgGAQgKAUIgOAdQgMAXgDAQQgCAJAAAIQABAeAcAjQgegLgQgUg");
	this.shape_45.setTransform(143.2,-145.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhHPyQgNgPgHgcIgLgiQgCgMgDgIQgKgfgSgfQgEgIgQgOQgOgRgWgTQgfgjgYgWQgVgUgRgSQgqgqgfgpQgvg/gThYIAAgUQACgKADgJQABgRAGgTQASgvABgaQAMgngPgfQgOgfgkgaIgdgTQgXgNgogWQgogXgdgWQhThCgnhdQg6iLAgjIQArhbCbgVIAwgGIAygDQApgFAVgOQAtggADg9QAGg+AWgnIAFgVQAOhOArg1QAog7BJgsIAngUQBugaCRADIAdAEQCGAlBmBCIAQAMQBSAtArBGQAXAUAQAbQAzAqAKA6QALAVADAWQgLBQAKA6QAFAkAXAZQAcAoALAjQASAjAHAkQAPBDgWBKQgIAagNAYIgJATQgOAbgVAdIgOATQgjAlgRAcQglAngUAsQgLAVgFAXQgMAwAQA4QACAfANArIAFAhQAKA6gZAeQgIANgNAMQgYAXgzAPQg1AVhDgTQgWgFgWgJQhcguhPg2IgHgDQhig9gsAIQgMgBgHACQguADgUAVQgMALgEASQgGATABAUQgCAUAJAWQAIAWAYAcIAGAJQAXAbAeAqIAOAZQAQAjADAjQADAagDAXQgCAYgIAZQgFAQgKAUIgPAdQgLAXgEAQQgCAJAAAIQACAeAbAjQgegLgQgVg");
	this.shape_46.setTransform(143,-145.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhEPyQgNgPgIgcIgKgiIgFgVQgKgggTgfQgEgIgQgOQgOgRgWgTQgggigZgWIgngnQgqgqgggpQgvhBgShZIABgUQACgKADgJQABgSAHgSQATgwABgbQANgngOgfQgOggglgaQgNgKgQgJQgXgNgogWQgpgXgdgXQhUhBgohfQg6iMAgjKQAqhaCbgWIAwgFIAygEQApgEAVgPQAtgfAFg8QAHg9AXgmIAHgUQAPhNAtg0QAog5BKgsIAmgSQBvgaCQAFIAcAEQCGAmBkBEIAPAMQBRAvApBHQAWAUAPAbQAyArAJA6QAKAVADAWQgLBQAKA6QAFAkAXAYQAeAnALAiQASAjAIAkQARBCgWBKQgIAbgMAYIgJASQgNAbgVAeIgOATQgiAlgRAcQgjAogVArQgKAWgFAWQgMAxAPA3QACAfALArQACARADAQQAIA5gZAeQgIANgNALQgZAXgyAOQg2AUhDgTQgWgGgWgJQhbguhPg1IgGgEQhjg9grAKQgMgBgHACQguAEgUAVQgLALgEASQgGATABATQgCAUAKAWQAHAXAYAbIAHAJQAXAbAeArQAHAMAGAMQAPAjAEAjQADAagDAXQgCAYgIAZQgGAQgKAUIgOAdQgMAWgDARQgCAJAAAIQACAeAbAiQgegLgQgVg");
	this.shape_47.setTransform(142.7,-145.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhBPzQgNgQgIgcIgKgjIgGgVQgJgggUgfQgEgIgQgOQgOgRgXgTQghgjgZgWIgngnQgrgqgggqQgvhBgRhaIABgUQACgLAEgJQABgSAHgSQAVgxABgbQAOgogOgfQgPggglgbQgNgKgQgJQgXgNgpgWQgpgXgdgXQhVhCgphgQg6iMAgjNQAqhaCbgVIAwgGIAxgEQApgEAVgOQAugfAGg7QAIg8AZglIAHgUQARhLAugzQApg4BKgqIAngSQBvgYCPAFIAcAFQCFAoBiBFIAPAMQBPAwAnBIQAVAVAOAbQAwArAIA7QAKAVADAWQgLBQAKA6QAFAjAYAYQAeAnAMAhQATAiAIAkQASBBgUBKQgIAbgMAYIgIASQgNAcgUAcIgOAVQghAlgRAcQgjAogUArQgLAWgFAWQgMAxAPA3QABAfALArIAEAhQAHA5gbAcQgHANgOALQgZAWgyANQg1AUhDgUQgWgGgWgJQhcguhOg1IgGgEQhig8gsAKQgMgBgHACQgtAFgUAWQgLALgDASQgGATACATQgCAUAJAWQAIAWAYAcIAHAJQAWAbAeAqQAIAMAFAMQAPAkAEAiQADAagDAXQgCAYgIAZQgGAPgKAVIgOAcQgMAXgDAQQgCAJAAAIQACAeAbAjQgfgMgPgUg");
	this.shape_48.setTransform(142.4,-146);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag/PzQgNgQgHgdIgKgjIgGgVQgKgggTggQgEgIgRgOQgOgRgYgTQghgigagXIgngnQgsgqgggqQgwhDgPhbQAAgKABgKQACgLAEgJQACgSAHgTQAWgxACgbQAOgpgOgfQgOghglgbQgOgKgQgJIhBgjQgpgYgegXQhVhBgphhQg7iOAfjOQAqhaCbgWIAwgFIAxgEQApgEAVgPQAugeAIg6QAJg7AagkIAIgTQAThKAvgxQAqg3BLgpIAmgSQBxgXCNAHIAcAFQCEApBgBHIAPANQBNAxAlBJQAUAVANAcQAvArAHA7QAJAVADAWQgMBQAKA5QAGAkAYAXQAfAmANAhQATAhAKAjQASBBgTBKQgHAbgMAYIgIATQgMAbgUAdIgNAUQghAlgQAdQgjAogUAsQgKAVgFAWQgMAxANA3QABAfAKAqIADAhQAGA5gbAcQgIANgNAKQgaAWgyAMQg1AShDgTQgWgHgVgJQhdgvhMg0IgHgDQhig8grALQgMgBgHACQgtAGgUAVQgKAMgEASQgFATACATQgCATAKAWQAIAXAYAbIAHAJQAWAbAeAqQAHAMAGANQAOAjAEAiQADAagDAXQgCAYgJAZQgFAPgKAUIgOAdQgMAXgDAQQgCAJAAAIQACAeAbAiQgfgLgQgVg");
	this.shape_49.setTransform(142.1,-146);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ag8PzQgNgPgIgeIgKgjQgCgNgDgIQgKghgUgfQgEgIgRgPQgPgQgYgUQghgjgagWIgpgnQgrgrghgqQgxhEgOhbIACgVQACgLAEgJQACgTAIgTQAXgyACgbQAPgpgNggQgOghgmgbQgOgKgQgJQgXgOgqgWQgqgXgegYQhXhBgphjQg7iOAfjRQAqhYCbgXIAvgFIAygEQAogFAWgNQAugeAJg5QALg6AbgkIAIgTQAVhHAwgxQAsg1BKgoIAngRQBxgWCMAIIAcAFQCDAsBeBIIAOANQBMAxAiBLQATAVANAcQAuAsAGA8QAIAVADAWQgMBQAKA5QAGAjAZAXQAgAlANAgQAUAhAKAjQAUA/gTBLQgGAbgMAYIgIASQgLAcgTAdIgNAVQggAlgQAdQgiAogUAsQgKAVgGAWQgMAxANA2QAAAgAJAqIADAhQAFA4gcAbQgIAMgOALQgZAUgzAMQg1AShDgVQgVgGgWgJQhcgwhMgzIgHgEQhhg7gsALQgMAAgHACQgtAGgTAXQgKALgDASQgGATADATQgCAUALAVQAIAWAYAcIAGAJQAXAbAdAqIANAYQAPAkADAiQACAagCAXQgCAXgJAZQgFAQgKAUIgPAcQgLAXgDAQQgCAJABAIQABAeAbAiQgfgLgQgWg");
	this.shape_50.setTransform(141.8,-146.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag6PzQgNgPgHgeIgKgkIgGgVQgKghgUggQgEgIgRgOQgPgRgZgUQgigigbgXIgognQgtgrgggqQgzhFgMhdQABgLACgKQACgLAEgJQACgTAIgTQAYgzAEgbQAPgqgNggQgOgigmgbIgfgTQgXgOgqgWQgrgYgegXQhXhCgqhjQg8iQAfjSQAqhYCbgXIAvgGIAxgEQApgEAVgOQAvgdAKg4QAMg5AdgjIAJgSQAXhGAxgvQAsg1BLgmIAngRQBygUCKAJIAcAFQCDAtBbBKIAOANQBKAzAhBMQASAVAMAdQAsAsAFA8QAIAVACAWQgMBQAKA4QAHAjAZAXQAgAkAOAgQAVAgALAiQAVA/gSBLQgGAbgLAYIgIATQgLAbgSAeIgNAUQgfAlgQAeQghAogUAsQgKAVgGAWQgMAxAMA2QAAAgAIApIACAhQAEA4gcAbQgJAMgOAKQgaAUgyALQg1AQhDgUQgVgHgVgJQhdgwhLgzIgHgDQhhg8gsANQgMAAgHACQgsAHgTAWQgKAMgDASQgFATADATQgCATALAWQAIAWAYAbIAHAJQAWAcAdApQAHAMAGANQAOAjAEAiQACAagDAXQgCAXgJAZQgGAQgJATIgOAdQgLAXgEAQQgBAJAAAIQABAdAcAjQgggMgQgWg");
	this.shape_51.setTransform(141.5,-146.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag3P0QgNgQgIgeIgKgkIgFgVQgKgigVggQgEgIgRgOQgQgRgZgUQgigigbgXIgqgnQgtgrgggrQgzhGgLheQABgLACgKQACgLAFgKQACgSAIgUQAagzADgcQARgqgNghQgOgigngbIgfgUQgXgOgrgWQgrgYgegXQhZhDgqhkQg8iQAfjVQAphXCbgXIAwgGIAxgEQAogEAVgOQAvgdAMg2QAOg4AegjIAJgRQAZhFAyguQAugzBLglIAngQQBygTCJAKIAcAGQCCAuBZBLIAOAOQBIA0AeBNQASAVALAdQAqAtAEA8QAIAWACAVQgNBQALA4QAHAjAZAWQAiAkAOAfQAWAgALAiQAWA+gQBKQgGAbgLAZIgHASQgLAcgSAeIgMAUQgfAmgPAeQghAogUAsQgKAVgFAWQgMAxALA1QgBAhAIApIABAgQADA4geAaQgIAMgOAJQgaAUgzAKQg1AQhCgVQgVgHgWgJQhdgxhKgyIgHgDQhhg7gsANQgLAAgHACQgtAIgSAWQgKAMgCASQgFATADATQgBATAKAWQAJAWAYAbIAGAJQAXAcAdApIALAYQAPAkAEAiQACAZgDAYQgCAXgJAZQgGAPgJAUIgOAcQgLAXgEAQQgBAJAAAIQABAdAcAjQghgMgPgWg");
	this.shape_52.setTransform(141.2,-146.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ag1P0QgNgQgIgeIgJglIgGgVQgKgigVggQgEgIgSgPQgPgQgagUQgjgjgcgWIgqgoQgtgsghgrQg0hHgJheQABgMACgKQADgLAEgKQADgTAJgTQAag0AEgdQASgqgNghQgOgigngcQgOgKgRgKQgYgOgrgWQgrgYgfgYQhZhCgrhlQg8iSAejXQAphWCbgYIAwgFIAwgFQAogEAWgNQAvgdANg1QAPg3AggiIAKgRQAbhDAzgtQAugxBMgkIAngQQBzgSCIAMIAbAGQCCAwBXBMIANAOQBGA1AdBOQAQAWALAdQAoAtADA9QAIAWACAVQgNBQALA4QAGAjAaAVQAjAjAOAfQAXAfALAhQAYA+gPBKQgGAcgKAYIgHATQgKAcgSAdIgMAVQgeAmgPAeQggAogUAsQgKAWgFAVQgMAxAKA1QgBAhAHApIABAgQABA3geAaQgJALgOAJQgbATgyAKQg1APhCgWQgVgHgWgJQhdgxhJgxIgHgEQhhg7gsAOQgLAAgHADQgsAIgSAXQgKAMgCASQgFATAEATQgBATALAVQAIAWAYAbIAHAJQAWAcAdApQAGAMAFANQAPAjADAiQACAZgCAYQgCAXgKAZQgGAPgJAUIgOAcQgLAXgDAQQgCAJABAIQABAdAbAiQgggMgQgWg");
	this.shape_53.setTransform(141,-146.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgzP1QgNgQgHgfIgKglQgCgNgDgJQgLgigVggQgEgIgSgPQgQgQgZgUQgkgjgcgXQgYgUgTgTQgugsghgsQg1hIgHhfIADgWQADgMAFgJQADgTAJgUQAbg1AFgcQASgrgNgiQgNgigogdQgOgKgRgJQgYgOgsgXQgsgYgfgXQhahEgqhmQg9iSAejZQAphWCbgXIAvgGIAxgFQAngEAWgNQAwgcAOg1QARg1AgghIALgRQAdhCA0grQAwgwBLgjIAngPQB1gQCGAMIAaAGQCCAyBVBOIANAOQBEA2AaBPQAQAXAKAdQAnAtACA+QAHAVABAWQgNBQALA3QAHAjAbAVQAjAiAPAeQAXAeANAhQAYA9gOBLQgFAbgKAZIgHATQgJAcgSAdIgLAVQgdAmgPAeQggApgTAsQgKAVgFAWQgNAxAKA1QgCAgAGApIAAAgQABA3gfAZQgKALgOAJQgbASgyAJQg1AOhCgWQgVgHgVgJQhegyhIgxIgHgDQhhg7grAPQgMAAgHADQgsAJgRAXQgJAMgDASQgEATAEATQgBATALAVQAJAWAYAbIAGAJQAXAcAcApIALAYQAPAkADAhQACAagCAXQgDAXgJAZQgGAPgJAUIgOAcQgLAXgDAQQgCAJABAIQABAdAbAiQghgMgQgWg");
	this.shape_54.setTransform(140.7,-146.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgwP1QgNgQgIgfIgJglIgGgWQgKgjgWggQgEgIgSgPQgQgQgbgUQgkgjgcgXQgYgVgUgTQgugsgigsQg1hJgGhgQABgMACgKQADgMAGgKQADgTAJgUQAdg1AFgdQATgsgNghQgNgjgogdQgOgKgSgKQgXgOgtgWQgsgZgggXQhahEgshnQg9iTAejbQAphWCbgXIAvgGIAwgFQAogEAWgNQAwgbAPg0QATg0AighIAKgQQAfhAA2gqQAwgvBMgiIAngOQB1gPCFANIAbAHQCAAzBTBQIANAOQBCA3AZBQQAPAXAJAeQAlAtABA+QAGAWACAVQgOBQAMA4QAHAiAbAVQAkAhAPAdQAYAeANAhQAaA8gNBLQgEAbgKAYIgHATQgJAcgRAeIgLAVQgcAmgPAfQgfApgTAsQgKAVgFAWQgNAxAJA0QgCAhAFAoIAAAhQgBA2ggAYQgJALgPAJQgbARgyAIQg1ANhCgWQgVgHgVgJQhegzhHgwIgHgDQhhg7gsAQQgLABgHACQgrAKgRAXQgKAMgBASQgEATAEATQgBATALAVQAJAWAYAbIAHAJQAWAcAcApQAGAMAFAMQAPAjADAiQACAagDAXQgCAWgKAaIgPAiIgOAdQgLAWgDAQQgBAJAAAIQACAdAaAiQgggMgQgXg");
	this.shape_55.setTransform(140.4,-146.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AguP2QgNgQgHggIgKgmQgCgNgDgJQgLgjgVggQgFgIgSgPQgRgQgagUQglgjgdgXQgYgVgUgTQgvgsgigsQg2hLgFhhIAEgXQAEgLAFgKQAEgUAJgUQAeg2AGgdQAUgsgNgiQgNgkgpgcQgOgLgSgJQgYgOgtgXQgsgYgggYQhchEgrhoQg+iUAejdQAphVCagYIAvgGIAxgFQAngEAWgNQAxgbAQgyQAUg0AjgfIAMgQQAgg/A3gpQAygtBLghIAogNQB2gOCDAPIAaAGQCAA1BRBRIANAPQBAA4AWBRQAPAXAIAfQAkAtgBA/QAHAVABAWQgOBQAMA3QAGAiAcAUQAlAhAQAcQAZAeANAgQAcA8gMBKQgFAcgJAYIgGATQgJAbgQAfIgLAWQgcAmgOAeQgfAqgTAsQgJAVgGAWQgMAwAIA1QgDAgAFApIgCAgQgCA2ggAXQgKALgOAIQgcARgyAHQg1AMhBgWQgVgHgVgKQhfgzhGgvIgHgEQhgg5gsAQQgLABgHADQgsAKgQAYQgJALgCATQgDASAEATQAAATALAWQAJAVAYAbIAGAJQAXAcAaAoQAHANAFAMQAPAjADAiQACAZgDAXQgCAXgKAZQgGAPgKAUIgNAcQgLAWgDAQQgBAJAAAIQACAdAaAiQghgMgQgXg");
	this.shape_56.setTransform(140.1,-146.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgsP3QgNgRgHggIgJgmIgGgWQgLgjgWghQgEgIgTgPQgRgQgbgUQglgjgdgXQgZgVgUgTQgwgtghgsQg3hMgDhiQABgMADgLQADgMAGgKQAEgTAKgVQAfg2AGgeQAVgsgNgjQgNgkgpgdQgPgKgRgKQgYgOgugXQgtgYgggYQhchFgshoQg/iVAejgQAphUCagYIAvgGIAwgFQAngEAXgNQAxgaARgyQAWgyAkgfIAMgPQAjg9A4goQAygsBMgfIAogOQB3gMCBAQIAbAHQB/A2BPBTIAMAPQA+A5AUBSQAOAYAIAeQAiAvgCA+QAGAWABAVQgOBQAMA3QAHAiAcAUQAmAfARAdQAZAcAOAgQAcA7gKBLQgEAbgJAZIgGATQgJAbgPAfIgLAWQgbAmgOAfQgeApgTAtQgJAVgGAVQgMAxAHA0QgDAhAEAoIgCAgQgEA1ghAXQgKALgOAIQgcAQgzAGQg0AMhBgXQgVgIgVgJQhfg0hFguIgHgEQhgg5gsARQgLABgHADQgrALgQAYQgJAMgCASQgDASAFAUQAAASALAWQAKAVAXAbIAGAIQAXAdAaAoQAHAMAFANQAPAjACAhQACAagCAXQgDAWgJAZQgGAPgKAUIgNAcQgLAXgDAQQgCAIABAIQABAdAaAiQghgMgQgXg");
	this.shape_57.setTransform(139.9,-146.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgqP3QgNgQgHghIgJgmQgDgOgDgJQgKgjgXghQgEgIgTgPQgRgQgcgVQgmgigegXQgYgVgVgUQgwgsgigtQg3hNgChjQABgMADgLQAEgMAGgKQAEgUALgVQAfg3AHgeQAWgtgNgiQgNglgpgdQgPgLgSgJQgYgOgugXQgtgZghgXQhdhGgthqQg+iWAdjhQAphUCagYIAvgGIAwgFQAngEAXgNQAxgaATgwQAWgxAmgeIANgPQAlg8A5gmQAzgrBMgeIAogNQB3gLCBARIAaAHQB/A4BMBUIAMAPQA9A7ASBTQANAYAHAfQAgAvgDA/QAGAWABAVQgPBQAMA2QAHAhAdAUQAmAfASAcQAaAcAPAfQAdA7gJBLQgEAbgJAZIgFATQgIAbgPAfIgLAWQgaAmgOAgQgdApgSAsQgKAWgFAVQgNAxAGA0QgDAgADAoIgDAgQgEA1giAXQgKAKgPAHQgcAQgzAGQg0AKhBgXQgVgIgVgJQhfg1hFgtIgGgEQhgg5gsASQgMABgGADQgrAMgQAYQgIAMgBASQgDATAEATQABASALAWQAKAVAXAaIAHAJQAXAcAZApQAHAMAFAMQAOAjADAiQACAZgDAXQgCAXgKAZIgQAiIgNAcQgLAXgDAQQgBAIAAAIQACAeAaAhQghgMgRgYg");
	this.shape_58.setTransform(139.6,-146.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgnP4QgNgQgIghIgJgnIgGgWQgKgkgXghQgEgIgUgPQgRgRgcgUQgngigegYIgtgoQgygugigtQg4hOAAhjQABgNAEgLQADgMAHgKQAEgVALgUQAhg4AIgeQAWgugNgjQgNgkgpgeQgPgLgSgJQgYgOgvgYQgugYghgYQhehGgthqQg/iXAejkQAohTCagZIAvgGIAwgFQAmgEAXgMQAygaAUgvQAYgwAogdIANgPQAmg6A6glQA1gqBMgdIAngMQB5gKB/ATIAaAHQB+A5BLBWIALAQQA7A7AQBVQAMAYAGAfQAfAvgEBAQAFAWABAVQgPBQANA2QAHAhAdATQAnAfASAaQAbAcAPAfQAfA6gJBLQgDAbgIAZIgFATQgIAbgPAgIgKAWQgZAmgOAgQgcApgSAtQgKAVgFAVQgNAxAFA0QgEAgADAoIgEAgQgFA1gjAVQgKAKgPAIQgcAOgzAFQg0AJhBgXIgqgRQhfg1hEgtIgGgEQhhg5gsATQgLABgGAEQgrAMgPAYQgJANAAASQgDASAFATQABATALAVQAKAVAXAbIAHAIQAXAdAZAoQAHAMAFANQAOAjADAhQABAagDAXQgCAWgKAZQgGAPgKATIgNAcQgLAXgCAPQgCAJABAIQABAdAaAiQghgNgQgYg");
	this.shape_59.setTransform(139.4,-147);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AglP5QgNgRgHghIgKgnIgFgXQgLgkgXghQgFgIgTgPQgSgRgcgUQgogigegYIgugpQgygtgiguQg5hPABhkQACgNADgLQAEgMAGgKQAFgVAMgVQAhg5AJgeQAXgugNgjQgMglgrgeQgPgLgSgKQgYgOgvgXQgvgZghgYQhehGguhsQg/iYAdjlQAohSCagaIAvgGIAvgFQAngEAXgMQAygZAVguQAagvApgdIANgOQApg4A7gkQA2gpBMgbIAngMQB6gJB+AUIAZAIQB+A6BIBYIALAQQA5A8AOBWQAMAYAFAgQAdAvgFBBQAFAVABAWQgQBPANA2QAHAhAeATQAoAdATAbQAbAbAQAeQAgA5gIBLQgCAcgIAZIgFATQgHAbgPAgIgJAWQgZAmgNAgQgcAqgSAtQgKAVgFAVQgNAxAEAzQgEAhACAnIgEAgQgHA0gjAWQgLAJgPAHQgdAPgzADQgzAJhBgYQgVgIgUgJQhgg2hDgsIgGgEQhhg4gsATQgLACgGADQgrANgOAZQgJAMAAASQgDATAGATQABASAMAVQAJAVAYAbIAGAIQAXAdAZAoIAMAYQAOAjACAiQACAZgDAXQgDAWgJAZQgGAPgKATIgNAcQgLAXgDAQQgBAIAAAIQACAdAaAiQgigNgQgYg");
	this.shape_60.setTransform(139.1,-147.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgjP6QgNgRgHgiIgJgnQgDgPgDgIQgLglgXghQgFgIgUgPQgSgRgcgUQgogjgfgXQgagWgVgTQgygugjguQg5hQAChlQACgNADgLQAFgMAGgLQAFgUAMgWQAjg5AJgeQAYgvgNgkQgMglgrgfQgPgKgSgKQgZgOgwgYQgugYgigZQhfhGguhtQhAiZAdjnQAohSCagaIAugGIAwgFQAmgEAYgMQAygZAWgtQAcgtAqgcIAOgOQAqg3A9gjQA2gnBNgaIAngLQB7gHB8AUIAZAIQB9A8BHBaIAKAQQA3A9AMBXQALAYAFAhQAbAvgFBBQAEAWAAAVQgQBQANA1QAIAhAeATQApAcATAaQAcAaARAeQAhA5gHBLQgCAcgIAYIgEAUQgHAbgOAgIgJAWQgYAngNAgQgbAqgSAsQgKAWgFAVQgNAxAEAzQgFAhAAAnIgEAfQgIA0gkAVQgLAJgPAHQgdAOgzADQg0AHhAgYIgpgSQhhg2hBgrIgHgEQhgg4gsAUQgLACgGADQgqAOgPAZQgIAMAAASQgCATAFATQACASAMAVQAKAVAXAaIAGAJQAYAdAYAoQAHAMAEAMQAOAjADAiQABAZgDAXQgCAWgKAZQgGAPgKATIgOAcQgKAWgCAQQgCAIABAIQACAdAZAiQgigNgQgYg");
	this.shape_61.setTransform(138.9,-147.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AggP7QgNgSgHghIgKgoIgFgXQgLglgYghQgEgIgVgPQgSgRgdgVQgpgigfgYIgvgpQgzgugjguQg6hRAEhnQACgNADgLQAFgMAHgLQAFgVAMgWQAkg5AKgfQAYgvgMgkQgMgmgrgfQgQgKgSgLQgZgNgwgYQgvgYgigZQhhhHguhuQhAiZAdjqQAnhRCbgaIAugGIAvgFQAmgFAYgLQAygZAYgrQAdgtArgbIAPgOQAtg1A9giQA4glBMgZIAngLQB8gGB7AWIAZAIQB9A+BEBbIAKAQQA1A+AKBZQAKAYAEAhQAaAwgHBBQAEAWAAAVQgQBQANA1QAIAgAfATQApAcAUAZQAcAZASAeQAiA4gFBLQgCAcgHAZIgFATQgGAcgNAgIgJAWQgXAmgNAhQgbAqgSAtQgJAVgGAVQgNAxADAzQgFAhAAAmIgFAgQgJA0glATQgLAKgQAGQgdANgzACQgzAHhBgZIgpgRQhgg3hBgrIgGgEQhgg4gsAVQgLACgHAEQgqAPgOAYQgHANAAASQgCATAGATQABARAMAWQALAVAXAaIAGAIQAXAdAYAoQAHAMAFAMQANAjADAiQABAZgDAXQgCAVgKAaQgGAOgKAUIgOAbQgKAXgCAQQgCAIABAIQACAdAZAhQgigNgQgYg");
	this.shape_62.setTransform(138.6,-147.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgfP8QgNgSgHgiIgJgoIgGgYQgLglgXghQgFgIgVgPQgSgRgegVQgpgigggYQgagWgWgTQgzgugjgvQg7hSAFhoQACgNAEgLQAFgNAHgKQAGgVAMgXQAlg6AKgfQAagvgMglQgNgmgrgfQgPgLgTgKQgZgOgxgYQgwgYghgZQhihHguhvQhBibAdjrQAnhRCagaIAugGIAwgFQAlgFAYgLQAzgYAZgrQAegrAtgbIAPgNQAvg0A+ggQA5gkBNgYIAngKQB9gFB5AXIAZAJQB8A/BCBcIAJARQA0A/AIBaQAJAZADAgQAYAxgHBCQADAWAAAVQgRBPAOA1QAIAgAgASQApAbAVAZQAdAZASAdQAkA3gFBMQgBAbgHAZIgEATQgGAdgNAgIgJAWQgWAngNAhQgZAqgSAtQgJAVgGAVQgNAxACAyQgGAhgBAnIgGAfQgKAzglAUQgMAIgPAGQgeANgyABQg0AHhAgaQgVgIgUgKQhhg3hAgqIgGgEQhgg3gsAVQgLACgHAEQgpAPgNAaQgIAMAAASQgBATAGATQACARAMAWQAKAVAXAaIAHAIQAXAdAYAoQAGAMAFAMQAOAjACAhQABAZgDAXQgDAWgJAZIgQAiIgOAcQgKAWgCAQQgCAIABAIQACAdAZAhQgigNgRgYg");
	this.shape_63.setTransform(138.4,-147.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgdP9QgNgSgHgjIgJgoIgFgYQgLglgZgiQgEgHgVgQQgTgQgegVQgqgjgggYQgbgWgVgTQg1gugigvQg8hUAGhoQADgNAEgMQAFgMAHgLQAGgVANgXQAmg7ALgfQAZgwgLglQgNgngrgfQgQgLgTgKQgZgOgxgXQgwgZgigZQhjhIguhwQhBibAcjuQAnhQCagaIAugHIAvgFQAmgEAYgLQAzgYAagqQAggqAugaIAQgNQAwgyBAgfQA6gjBMgWIAogKQB+gDB3AYIAZAJQB7BABABeIAKARQAxBBAGBaQAJAZACAiQAXAxgJBCQADAWgBAVQgRBPAOA1QAIAgAhARQAqAbAVAYQAeAYATAdQAlA2gEBMQgBAcgHAYIgDATQgGAdgMAgIgIAXQgWAngMAhQgaAqgRAtQgJAVgGAVQgNAxABAyQgGAhgCAnIgGAfQgMAzgmASQgLAJgQAGQgeAMgzAAQgzAFhAgaQgVgIgUgJQhhg4g/gqIgGgDQhgg4gsAXQgLACgHAEQgpAQgNAZQgHANAAASQgBASAHAUQACARAMAVQALAVAXAaIAGAIQAWAdAZAoQAGAMAFAMQANAjACAiQACAZgDAWQgDAWgKAZQgGAPgKATIgOAbQgJAXgDAPIgBARQACAdAaAhQgjgNgRgZg");
	this.shape_64.setTransform(138.1,-147.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgbP+QgNgSgGgjIgJgpIgGgYQgLgmgZghQgFgIgVgPQgTgRgegVQgqgighgZQgbgVgWgUQg1gvgjgvQg9hUAIhpQADgOAEgLQAFgNAIgLQAGgWANgWQAng8AMgfQAagxgLglQgMgngtggQgPgLgTgKQgZgOgygXQgxgagigZQhjhIgwhwQhBidAcjwQAnhPCagbIAugGIAvgGQAlgEAYgLQA0gXAcgpQAhgpAvgZIARgMQAygxBBgeQA6ghBNgWIAogIQB+gDB3AaIAYAJQB7BCA+BfIAJARQAwBCADBcQAIAZACAiQAVAxgKBDQACAWAAAVQgSBPAOA1QAJAfAhARQArAaAVAXQAfAYAUAdQAmA2gDBLQgBAcgGAZIgDASQgFAdgMAhIgIAWQgVAngMAiQgZAqgRAtQgJAVgGAVQgNAxAAAyQgGAhgDAmIgHAgQgNAygmASQgMAIgQAGQgeALgzAAQgzAEhAgaIgpgSQhhg5g+gpIgHgDQhfg3gsAXQgLACgHAFQgoAQgNAaQgHANABASQgBASAGATQADASAMAVQALAUAXAaIAGAJQAXAdAYAnQAGAMAFANQANAjACAhQABAZgDAWQgDAWgKAZQgGAPgKATIgNAbQgLAWgCAQQgBAIABAIQACAdAZAhQgjgNgRgZg");
	this.shape_65.setTransform(137.9,-147.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgYP/QgNgSgHgjIgJgpIgGgYQgLgmgZgiQgFgIgVgPQgTgRgfgVIhMg7QgcgWgWgTQg1gvgkgwQg9hVAJhqQADgOAFgMQAFgNAHgLQAHgVAOgXQAog9AMgfQAbgxgLgmQgMgngtggQgPgLgUgLQgZgOgygXQgxgagjgZQhkhIgwhyQhBidAbjyQAnhPCagbIAugGIAvgGQAlgEAYgLQA0gWAdgoQAjgoAwgYIARgMQA0gvBCgdQA8ggBNgVIAogIQB/gBB1AbIAZAJQB5BEA8BhIAJARQAuBDACBdQAHAaAAAiQAUAxgLBDQACAWgBAWQgRBPAOA0QAIAfAiARQAsAZAWAWQAfAYAUAcQAoA1gCBMQAAAbgGAZIgDATQgFAdgLAhIgIAWQgUAogMAiQgYAqgRAtQgJAVgGAVQgNAxAAAyQgHAhgEAmIgIAfQgNAygoARQgMAIgQAFQgeALgzgBQg0ADg/gaIgogSQhig6g+goIgGgDQhfg3gsAYQgLADgHAEQgoARgMAaQgHANABASQgBASAHATQADASANAVQAKAUAXAaIAHAJQAWAdAYAnQAGAMAFAMQANAjACAhQABAZgEAXQgCAVgKAZIgQAiIgOAbQgLAXgCAPIAAARQABAcAbAhQgkgNgQgag");
	this.shape_66.setTransform(137.6,-147.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgXQAQgNgSgHgkQgEgYgFgRQgCgPgDgKQgLgmgagiQgEgIgWgPQgUgRgfgVQgsgighgYQgcgXgWgUQg2gugkgwQg+hXALhrQADgOAFgMQAFgMAIgMQAHgWAOgXQApg9ANggQAcgygLgmQgMgngtghQgQgKgUgLQgZgNgzgYQgygagigaQhlhIgwhzQhCieAbj1QAnhNCagbIAtgHIAvgGQAlgEAYgKQA0gXAfgmQAkgnAygYIARgLQA3guBDgbQA9gfBMgTIApgIQCAAABzAcIAYAKQB6BFA5BiIAIASQAtBEgBBeQAHAagBAjQASAxgMBEQACAWgBAWQgSBPAPAzQAIAfAiAQQAtAZAWAWQAhAXAUAbQApA1AABLQgBAdgFAYIgDATQgEAdgLAhIgHAXQgTAogMAhQgXArgSAtQgIAWgGAVQgOAwgBAxQgHAigEAlIgJAfQgPAygoAQQgMAJgRAEQgeALgzgDQgzADhAgbQgUgJgUgJQhig6g9goIgGgDQhfg2gsAYQgKADgHAEQgoASgMAbQgHANABASQAAASAHATQADARANAVQALAUAXAaIAGAJQAXAdAXAnIALAYQANAjACAiQABAYgEAXQgDAVgKAZIgPAiIgOAbQgLAWgCAPIgBARQACAcAbAiQgkgOgRgag");
	this.shape_67.setTransform(137.4,-148);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgVQCQgNgTgGgkIgJgqIgGgYQgLgngagiQgFgIgWgPQgTgRgggVIhOg7QgdgWgWgUQg3gvgjgwQg/hYAMhsQADgOAFgMQAFgNAJgLQAHgXAOgXQArg+ANggQAdgygLgmQgMgpguggQgQgLgTgLQgZgNg0gYQgygagjgaQhmhJgxhzQhCigAbj2QAnhNCagcIAtgGIAvgGQAkgEAZgLQA0gVAggmQAmgmAzgWIASgLQA4gtBEgaQA+gdBNgSIApgHQCAACByAcIAZAKQB4BHA4BkIAHASQArBFgCBfQAFAagBAjQAQAygNBEQACAWgCAWQgSBPAPAzQAIAfAjAQQAuAYAXAVQAhAWAVAcQAqAzAABMQABAcgFAYIgDATQgEAegKAhIgHAXQgSAngMAjQgWArgSAtQgIAVgGAVQgOAwgCAyQgHAhgFAlIgKAfQgQAygpAQQgMAHgRAEQgeAKg0gDQgyAChAgcIgogSQhig6g8gnIgGgEQhfg2gtAaQgJADgHAEQgoATgMAaQgGAOACASQgBASAIATQADARANAVQALAUAXAaIAHAIQAWAeAXAmIALAZQAMAjACAhQABAYgDAXQgDAVgKAZQgGAPgKATIgOAbQgKAWgDAQQgBAIABAIQACAcAaAhQgkgNgRgag");
	this.shape_68.setTransform(137.2,-148.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgSQDQgNgTgHgkIgJgqQgDgQgDgJQgLgngagiQgFgIgWgQQgUgQghgWIhPg7QgcgWgXgUQg3gvgkgxQhAhZAOhtQADgOAFgMQAGgNAIgLQAIgXAPgXQArg/AOggQAegzgLgmQgMgpgughQgQgLgUgKQgZgOg0gZQgzgagjgZQhnhKgxh0QhDigAbj5QAnhMCagcIAtgHIAvgFQAkgFAYgKQA2gVAggkQAngmA1gVIATgLQA6grBFgYQA/gdBNgQIApgHQCBADBxAeIAYAKQB4BIA1BmIAIASQAoBGgEBhQAFAagCAjQAPAzgPBEQABAWgBAWQgTBPAPAzQAJAfAjAPQAvAXAXAVQAiAVAWAbQArAzABBMQABAcgFAYIgCAUQgDAdgKAhIgGAXQgSAogLAjQgXArgRAtQgIAVgGAVQgOAwgCAyQgJAhgFAlIgKAfQgSAxgpAPQgNAIgRAEQgfAJgzgEQgzABg/gcQgUgJgTgKQhjg7g7gmIgGgDQhfg2gtAaQgJADgHAFQgoAUgLAaQgGANACATQAAASAIATQADAQAOAWQALAUAWAZIAHAJQAWAdAXAnIALAYQAMAjACAhQABAZgEAWQgDAVgKAZIgQAhIgNAcQgLAWgCAPIgBARQADAcAaAhQglgOgQgag");
	this.shape_69.setTransform(136.9,-148.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgQQEQgNgTgHglIgJgqIgFgZQgMgogagiQgFgHgXgQQgUgRghgVIhQg7QgdgXgXgUQg4gvgjgxQhBhaAPhuQAEgOAFgMQAGgOAIgLQAIgXAPgYQAtg/AOggQAfg0gLgnQgMgpgughQgQgLgUgKQgagOg1gZQgygagkgaQhohJgxh2QhDihAbj6QAmhNCagcIAtgGIAugGQAkgEAZgKQA2gVAigjQAogkA2gVIATgLQA8gpBHgXQBAgbBNgQIApgFQCCAEBvAfIAYAKQB3BKAzBnIAIATQAnBHgHBhQAEAbgCAjQANA0gQBEQABAXgCAVQgTBPAQAzQAIAeAkAPQAvAWAYAUQAjAVAWAbQAtAyACBMQABAcgEAYIgCAUQgDAegJAhIgGAXQgRAogLAjQgWArgRAtQgIAWgGAUQgOAxgDAxQgJAhgGAlIgLAfQgSAwgrAPQgNAHgRAEQgfAIgzgEQgzAAg/gdIgngTQhkg7g5gmIgGgDQhfg2gtAcQgJADgHAFQgoAUgKAbQgGANACASQAAASAIATQAEARAOAVQALAUAXAZIAGAJQAXAdAWAnQAGAMAEAMQANAjABAhQABAZgDAWQgDAVgLAZQgGAPgJASIgOAbQgKAWgDAQIAAAQQACAdAaAgQglgOgQgag");
	this.shape_70.setTransform(136.7,-148.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgPQGQgNgUgGglQgFgZgEgRQgDgRgDgIQgLgogbgjQgFgHgXgRQgUgQghgVIhSg8QgdgWgXgUQg4gwgkgxQhChcARhvQADgNAGgNQAGgNAJgMQAIgXAPgYQAug/APghQAfg1gLgnQgLgpgvgiQgQgKgUgKQgagOg1gaQgzgaglgZQhohLgyh3QhDiiAaj8QAmhLCagcIAtgHIAvgGQAjgFAZgJQA2gVAjgiQAqgjA4gUIAUgKQA9gnBIgXQBBgZBNgPIApgFQCDAFBuAhIAYALQB2BLAxBpIAHASQAlBIgIBjQADAbgDAkQALAzgQBFQAAAXgCAVQgTBPAPAyQAJAfAlAOQAwAWAYATQAjAVAYAaQAtAxAEBMQABAdgEAYIgCATQgCAegIAhIgGAYQgRAogKAjQgVAsgRAtQgIAVgGAVQgOAwgEAxQgKAhgHAlIgLAfQgUAwgrAOQgNAHgRADQggAIgzgGQgzgBg/gcIgngTQhjg8g5glIgGgEQheg0guAcQgJADgHAFQgnAVgKAbQgGANADASQAAATAJASQADARAOAVQAMAUAWAZIAGAJQAYAdAVAmQAHAMAEANQAMAiABAhQABAZgDAXQgDAUgLAZIgQAhIgNAbQgKAXgDAPQgBAIABAIQACAcAaAhQgmgOgQgag");
	this.shape_71.setTransform(136.5,-148.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgNQGQgNgSgHgmIgIgsIgGgZQgMgogagiQgFgIgYgQQgVgQghgWQgugjgkgZQgegWgXgUQg5gwglgyQhChcAThwQADgOAGgNQAGgNAJgMQAIgXAQgZQAvhAAQghQAgg0gLgoQgLgqgvghQgRgKgUgMQgagOg2gZQg0gbgkgZQhphLgyh3QhEijAaj/QAmhKCagdIAsgHIAvgGQAjgFAZgJQA3gUAkghQAsghA4gUIAVgJQBAgmBIgWQBCgYBOgNIApgEQCEAGBsAhIAXALQB3BOAuBqIAHATQAjBIgLBlQADAbgEAkQAKA0gRBFQgBAXgCAVQgTBPAPAyQAJAeAlAPQAxAUAZATQAkAUAYAZQAuAyAFBMQACAbgEAZIgBAUQgCAegIAhIgGAYQgPAogLAjQgUAsgRAtQgIAWgGAUQgOAwgFAxQgKAhgIAlIgMAeQgUAwgsANQgOAHgRADQggAHgzgGQgygBg/geIgngTQhkg9g4gkIgGgDQheg1gtAdQgJAEgHAEQgnAWgKAcQgFANACASQABASAJATQAEAQAOAVQAMAUAWAZIAFAIQAYAeAWAnIAKAYQAMAjABAgQABAZgDAWQgEAVgKAZIgQAhIgNAbQgLAWgCAPIAAARQACAcAaAhQgmgOgQgcg");
	this.shape_72.setTransform(136.3,-148.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgLQIQgNgTgGgmIgJgsQgDgQgDgJQgLgpgbgiQgGgIgXgQQgVgRgigWIhTg7QgegWgYgVQg6gwgkgyQhDhdAUhxQADgPAGgMQAHgOAJgMQAJgXAQgZQAwhBAQghQAhg1gLgoQgLgqgwghQgQgLgVgLQgagOg2gaQg0gaglgaQhqhLgyh5QhFikAakAQAmhLCagcIAsgHIAvgGQAjgFAZgJQA3gUAmgfQAtghA5gTIAVgJQBCgkBKgUQBDgXBOgMIApgEQCFAIBqAiIAYAMQB1BOAtBsIAGATQAiBKgNBlQACAcgFAlQAIA0gSBGIgDAsQgUBPAPAxQAKAeAlAOQAyAUAZASQAlATAZAaQAvAwAGBMQACAcgDAYIgBAUQgCAfgHAhIgFAYQgPAogKAkQgUAsgRAtQgIAVgGAVQgOAwgGAwQgKAigJAkIgMAeQgWAwgtANQgNAGgSACQggAHgzgHQgygCg/geIgngTQhkg+g3gjIgGgDQheg1gtAdQgJAEgHAFQgnAXgJAbQgFAOACASQACASAJATQAEAQAOAVQAMAUAWAZIAGAIQAYAeAVAmQAGAMAEAMQAMAjABAhQABAYgEAXQgDAUgLAZIgPAhIgOAbQgKAWgCAQQgBAIAAAIQADAcAaAgQgngOgQgbg");
	this.shape_73.setTransform(136,-149);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgJQJQgNgTgHgnIgIgsIgGgZQgMgpgbgjQgFgHgYgRQgWgQgigWIhUg8QgegWgYgUQg7gxgkgyQhEhfAVhxQAEgPAGgNQAHgOAJgMQAJgXARgZQAxhCAQghQAig2gKgoQgLgrgwghQgRgLgVgLQgagOg3gaQg0gbglgaQhrhLgzh5QhFilAakDQAlhKCagdIAtgHIAugGQAjgEAZgJQA3gUAngeQAvggA7gSIAWgJQBDgiBLgTQBEgWBOgKIApgEQCGAJBpAkIAXAMQB1BQArBtIAGAUQAfBLgPBmQACAcgGAlQAHA0gUBHIgDAsQgVBPAQAxQAKAeAmANQAyATAaASQAlASAaAZQAxAwAHBMQACAbgDAaIgBAUQgBAegHAiIgFAXQgOApgKAkQgTAsgQAtIgOAqQgOAwgHAwQgLAigJAkIgNAeQgXAvguAMQgOAGgRADQghAGgzgIQgygEg/geIgmgTIibhhIgGgDQheg1gtAfQgJAEgHAFQgmAXgJAcQgFAOADASQACASAJATQAEAQAPAVQAMATAVAZIAGAJQAYAeAVAlQAGANAEAMQAMAjABAgQABAZgEAWQgDAUgLAZIgQAhIgNAbQgKAWgCAPQgBAIAAAIQADAcAaAhQgngOgQgcg");
	this.shape_74.setTransform(135.8,-149.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgHQKQgNgTgHgnIgIgsQgDgQgDgKQgMgpgbgjQgGgIgYgQQgVgQgjgXIhVg7QgfgWgYgVQg7gxglgyQhEhgAWhyQAEgQAGgMQAHgPAKgLQAJgYASgZQAyhDARghQAig2gKgpQgLgrgxghQgQgMgVgLQgagOg4gaQg1gbglgaQhshLgzh7QhFimAZkEQAmhKCZgdIAtgHIAugGQAigEAagKQA3gSApgeQAwgfA8gQIAWgJQBGgiBMgRQBEgUBPgJIApgEQCHAMBoAkIAXAMQB0BSAoBuIAGAUQAeBNgRBnQAAAcgGAlQAFA1gVBIQgBAVgDAWQgVBPARAxQAJAdAnANQAzATAbAQQAlASAaAZQAzAwAIBMQACAbgCAZIgBAUQAAAfgHAhIgEAZQgOAogJAkQgTAtgQAtQgIAVgGAVQgPAvgHAxIgVBFIgOAeQgYAvguALQgPAGgRACQghAGgzgJQgygFg/geIgmgTQhlg/g1giIgGgEQhegzgtAeQgJAEgHAGQgmAYgIAcQgFAOADASQACARAKAUQAEAPAPAWQAMATAVAZIAHAIQAYAeAUAmQAGAMAEAMQALAjACAgQAAAZgEAWQgDAVgKAYIgQAhIgOAbQgKAWgCAPQgBAIABAIQADAdAZAgQgngPgQgcg");
	this.shape_75.setTransform(135.6,-149.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgGQLQgNgTgGgnIgIgtQgDgRgDgJQgMgqgcgiQgFgIgZgQQgWgRgjgWIhWg8QgfgWgYgVQg8gxglgzQhFhhAYhzQAEgPAGgNQAHgOAKgNQAKgXASgaQAzhCARgiQAkg3gLgpQgKgsgxgiQgRgLgVgLQgagOg5gbQg1gagmgaQhshMg0h8QhFinAZkGQAlhJCZgeIAtgHIAugFQAigFAagJQA4gSApgdQAygdA+gRIAWgIQBIgfBNgQQBFgUBQgIIApgCQCHAMBnAmIAWAMQB0BTAmBwIAFAUQAcBNgTBpQAAAcgHAmQADA2gVBIIgFArQgVBPAQAxQAKAdAnANQA0ARAbAQQAnASAbAYQAzAuAJBNQADAbgCAaIAAAUQAAAegGAiIgFAYQgNAogJAlQgRAsgQAuQgIAVgGAVQgPAwgIAvIgXBFIgOAeQgaAvguALQgPAFgSACQghAFgzgKQgygFg+gfIgmgTIiahhIgGgDQhdg0guAgQgJAEgGAGQgmAYgIAdQgFAOAEARQACASAKATQAFAQAPAVQAMATAVAZIAGAIQAZAeAUAmIAJAYQAMAkABAgQAAAYgEAWQgDAVgLAYQgGAPgJASIgOAbQgKAVgCAQQgBAIABAIQADAcAZAgQgngOgRgdg");
	this.shape_76.setTransform(135.4,-149.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgEQNQgNgUgGgoIgJgtQgCgQgDgKQgMgqgdgjQgFgHgZgRQgWgRgkgVIhXg9QgfgWgZgVQg8gxglg0QhGhhAah1QAEgPAGgNQAIgOAKgMQAKgZASgZQA0hEASghQAkg4gKgpQgLgsgxgiQgRgMgVgLQgbgOg4gbQg2gagmgbQhthNg0h7QhGioAZkJQAlhICZgeIAsgHIAugGQAigFAagJQA4gRArgcQAzgcA/gPIAYgIQBJgeBOgPQBHgSBPgHIApgBQCJANBlAnIAWAMQBzBVAkBxIAFAVQAaBOgVBqQgBAcgIAmQACA3gXBHIgFAsQgWBPARAwQAKAdAoANQA0ARAcAPQAnAQAcAZQA0AtAKBNQAEAbgCAZIAAAVQABAegGAjIgEAXQgMApgJAlQgRAtgQAtQgIAWgGAUQgPAwgIAvIgYBFQgIAQgIAOQgaAugwALQgOAFgSABQgiAEgzgKQgygGg+ggIgmgUIiZhgIgGgDQhdgzgtAgQgJAFgHAFQglAagIAcQgEAOADATQADARAKATQAFAPAPAWQANATAVAZIAGAIQAYAeAUAlIAKAZQALAiABAhQAAAYgEAXQgDATgLAZIgQAhIgNAaQgKAWgCAPQgBAIABAIQADAcAZAhQgogPgQgcg");
	this.shape_77.setTransform(135.2,-149.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgCQOQgNgUgHgoIgIgtQgDgRgDgJQgMgrgcgjQgGgHgZgRQgWgQgkgXIhZg8QgfgXgZgUQg9gyglg0QhHhjAbh1QAFgPAGgNQAIgPAKgMQAKgYATgaQA1hEATgiQAkg4gJgqQgLgrgygkQgRgMgVgLQgbgOg5gbQg2gagmgbQhvhNg0h9QhGipAYkLQAlhHCZgeIAtgIIAtgGQAigEAbgIQA4gSAsgaQA0gcBBgOIAYgIQBLgcBQgOQBHgQBQgGIApgBQCJAOBkApIAWAMQByBWAiB0IAFAUQAYBQgXBrQgCAdgJAmQABA2gYBJIgGArQgWBPARAwQAKAdAoAMQA2AQAcAPQAoAQAcAYQA2AtALBMQAEAcgCAZIABAUQABAfgGAiIgDAZQgMApgIAlIggBaIgOApQgPAxgKAvIgZBFIgQAdQgbAugxAKQgPAEgSACQghADg0gLQgygHg9ggIgmgUIiYhgIgGgDQheg0gtAiQgJAFgGAGQgmAZgHAdQgEAOAEATQADARAKATQAGAPAPAVQAMAUAWAYIAGAIQAYAfAUAlQAFAMAEAMQALAjABAgQAAAZgEAWQgDAUgLAYIgQAhIgNAaQgKAWgCAPQgBAIABAIQADAcAZAgQgogOgQgdg");
	this.shape_78.setTransform(135,-149.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgBQPQgNgUgGgoIgIguQgDgRgDgJQgMgrgdgjQgFgIgagRQgWgQglgWIhZg9QgggWgZgVQg+gyglg0QhHhkAch2QAEgQAHgNQAIgOAKgNQALgYATgbQA2hEATgjQAmg4gKgqQgKgsgygkQgRgMgWgLQgbgOg6gbQg2gbgngaQhvhOg1h+QhGipAYkNQAlhHCZgeIAsgIIAugGQAhgFAbgIQA4gRAugZQA2gaBCgOIAYgHQBNgbBRgNQBIgPBQgEIAqgBQCJAQBiApIAWANQByBYAgB1IAEAVQAXBQgZBsQgDAdgJAnQgCA3gZBJIgGArQgWBPARAwQAKAcApAMQA2APAdAPQApAPAcAXQA3AtAMBNQAFAbgBAZIAAAVQABAegEAjIgDAYQgLApgIAmIggBaIgOAqQgPAwgKAvIgaBEIgRAeQgdAtgxAJQgPAFgSABQgiADgzgMQgygIg+ggIglgVIiYhgIgGgDQhdgzguAiQgIAFgHAGQglAbgHAdQgEAOAFASQADASAKATQAGAPAQAVQAMATAVAYIAHAJQAYAeATAlQAGAMADAMQALAjABAhQAAAYgEAWQgDATgLAZIgQAhIgNAaQgKAWgCAPQgBAIABAIQADAcAZAgQgogPgRgdg");
	this.shape_79.setTransform(134.8,-150);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAAQRQgMgVgHgpIgIgtQgDgRgDgKQgMgrgdgkQgGgHgagRQgWgQglgXIhbg8QgggXgZgUQg+gzgmg0QhIhmAeh2QAFgQAHgNQAHgPALgMQALgZATgaQA4hGAUgjQAmg5gKgrQgKgrgzglQgRgMgVgKQgbgPg7gbQg3gbgngbQhwhNg1h/QhHirAYkPQAlhGCZgfIAsgIIAtgFQAigFAagIQA5gRAvgXQA3gaBEgNIAZgGQBPgaBSgLQBJgOBQgDIAqAAQCKAQBhArQAMAGAKAIQBxBZAeB2IADAVQAVBSgbBtQgDAdgLAnQgDA3gaBKIgHArQgWBPARAwQALAcApALQA3APAdAOQAqAOAdAYQA4ArANBMQAFAcgBAaIABAUQACAfgEAjIgDAYIgSBPIgfBbIgNApQgQAxgLAuIgbBEQgJAQgJAOQgeAtgxAIQgQAFgSAAQgiADg0gNQgxgJg+ghIglgUIiXhhIgGgCQhdgzguAjQgIAFgHAGQglAbgGAeQgEAOAFASQADASALASQAGAQAQAUQAMAUAWAYIAGAIQAYAfATAkIAJAZQALAiABAhQAAAYgFAWQgDAUgLAZIgQAgIgNAaQgKAWgCAPQgBAIABAIQADAcAaAgQgpgPgRgdg");
	this.shape_80.setTransform(134.6,-150.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AABQSQgMgUgGgqIgIguIgGgbQgMgrgegkQgFgHgbgRQgWgQgmgXIhbg8QghgYgZgUQg/gzgmg0QhJhnAfh3QAFgQAIgOQAIgPALgMQALgZATgbQA5hGAUgjQAng5gJgrQgKgtgzgkQgSgMgVgLQgcgPg6gbQg4gbgngbQhxhOg2iAQhHirAYkSQAkhFCZgfIAsgIIAtgGQAigFAbgHQA5gQAwgXQA5gYBEgNIAagGQBRgYBTgKQBKgMBQgCIAqAAQCLASBgAsIAVAOQBxBaAcB4IADAWQATBSgdBvQgEAegMAnQgEA3gbBKIgIAsQgXBPASAvQAKAcAqAKQA4AOAeAOQAqAOAeAWQA6ArAOBMQAFAdgBAZIACAVQACAfgEAiIgCAZIgRBQIgeBbIgOApQgPAwgMAuIgdBFIgSAdQgfAsgyAIQgQAEgTAAQgiACg0gNQgxgKg9ghIglgVIiXhgIgGgDQhdgygtAkQgJAFgGAGQglAcgGAdQgDAPAFASQADASALATQAHAPAPAVQANASAVAYIAHAJQAYAeASAlQAGAMADAMQALAjABAgQAAAYgFAWQgDAUgLAZIgQAgIgNAaQgKAWgCAPQgBAIABAIQADAcAaAfQgpgPgSgdg");
	this.shape_81.setTransform(134.4,-150.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AACQUQgMgVgGgpIgIgvQgDgRgDgKQgMgsgegkQgFgHgbgRQgXgQgmgXIhcg9QgigXgZgVQg/gygmg1QhKhoAhh4QAFgQAHgOQAIgPALgNQAMgZAUgbQA5hHAVgjQAog6gJgrQgKgtgzgkQgSgNgWgLQgbgOg8gbQg4gcgngbQhyhOg2iBQhIisAYkUQAkhECZggIAsgIIAtgGQAhgFAbgHQA6gQAxgWQA7gXBFgLIAagGQBUgXBTgIQBMgLBQgBIAqABQCMAUBeAsIAWAOQBwBcAZB6IADAWQARBTgfBwQgFAegMAoQgGA3gcBLIgJAsQgXBOASAvQALAcAqAKQA5ANAfANQAqANAfAXQA6AqAQBMQAFAcAAAaIACAUQACAggDAiIgCAZIgQBQIgdBbIgOApQgPAxgNAuIgeBEQgJAQgKANQggAsgzAHQgQAEgTAAQgiABg0gOQgxgLg9ghIglgVIiWhgIgGgDQhdgygtAlQgJAFgGAGQglAdgFAeQgDAOAFATQAEARALATQAHAPAQAVQAMASAWAYIAGAJQAYAeASAlQAGAMADAMQALAjAAAgQAAAYgEAWQgEATgLAZIgPAgIgOAaQgJAWgCAPQgBAIABAIQADAcAZAfQgpgPgSgdg");
	this.shape_82.setTransform(134.3,-150.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AADQVQgMgUgGgqQgEgcgEgTIgFgcQgNgsgegkQgGgHgbgRQgXgQgmgXIheg9QghgXgagVQhAgzgmg1QhKhpAih5QAFgQAHgOQAJgPALgNQAMgaAUgbQA7hHAWgjQAog7gJgsQgKgtg0glQgRgMgWgLQgcgPg8gbQg4gcgogbQhyhOg3iCQhIiuAYkVQAjhECZggIAsgIIAtgGQAhgFAbgHQA6gPAygVQA8gWBIgLIAagFQBVgVBVgHQBNgKBQAAIAqACQCNAVBdAuIAVAOQBvBdAYB8IACAWQAPBUghBxQgGAegMApQgIA4gdBKIgJAsQgYBPATAuQAKAcArAKQA6AMAfAMQArANAfAWQA8ApARBNQAGAcAAAaIACAUQADAfgDAkIgCAYIgPBRIgcBbIgOApIgdBeQgOAigRAiQgKAQgJANQgiAsg0AHQgQADgTAAQgjAAgzgPQgygMg8ghIglgVIiWhgIgFgDQhdgyguAmQgIAFgGAHQgkAdgFAeQgEAPAGASQAEARAMATQAHAPAQAVQAMASAWAYIAGAIQAZAfARAlQAGAMADAMQAKAjABAgQAAAYgFAVQgDAUgLAYIgQAgIgNAbQgKAVgCAPQgBAIABAIQAEAcAZAfQgqgPgSgeg");
	this.shape_83.setTransform(134.1,-150.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAFQXQgMgVgGgqIgIgwQgDgRgDgKQgNgtgegkQgGgHgbgRQgYgQgngXIheg9QgigXgagVQhAg0gng1QhLhqAkh6QAFgQAIgOQAIgQAMgNQAMgZAVgcQA8hIAWgjQApg7gJgsQgKgug0glQgSgMgWgMQgbgOg9gcQg5gbgogcQhzhPg3iCQhJivAYkXQAjhECZggIAsgIIAtgGQAggFAcgHQA6gPA0gTQA9gVBJgKIAbgFQBXgUBWgGQBNgIBRABIAqADQCOAWBbAvIAVAOQBvBfAVB9IACAXQAOBVgkByQgGAfgNAoQgKA5geBLIgKAsQgXBOASAuQALAcArAJQA6AMAgALQAsAMAgAWQA9ApASBMQAGAdABAZIACAVQADAfgCAkIgCAZIgOBRQgMAtgPAuIgOApIgeBdQgPAjgRAhQgKAQgKANQgjAsg0AGQgRADgTgBQgjAAg0gQQgxgMg8gjIglgVIiVhfIgGgDQhcgyguAnQgIAFgGAHQgkAegFAeQgDAPAGASQAFARALATQAIAPAQAVQAMASAWAYIAGAIQAZAfARAkIAJAZQAKAiAAAgQAAAYgEAWQgEATgLAZIgQAgIgNAaQgKAVgBAQQgBAHABAIQADAcAZAfQgqgPgRgeg");
	this.shape_84.setTransform(134,-150.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAGQYQgMgUgGgrIgIgwQgDgSgDgKQgNgsgegkQgGgIgcgRQgYgQgngXIhfg9QgigYgbgVQhBgzgmg2QhMhrAlh7QAFgRAIgNQAJgQAMgNQAMgaAVgcQA9hIAXgkQAqg8gJgrQgJgvg1glQgSgNgWgLQgcgPg9gbQg6gcgogcQh0hPg3iEQhJivAXkaQAkhCCYghIAsgIIAsgGQAhgFAbgHQA7gOA1gTQA/gTBKgKIAbgEQBZgSBYgFQBOgHBRACIAqADQCPAYBZAwQAMAHAJAIQBuBgAUB/IACAWQALBXgmBzQgHAfgOApQgLA5gfBLIgKAsQgYBPASAtQALAcAsAJQA7ALAhAKQAsAMAhAVQA+ApATBMQAGAcABAaIADAVQADAfgBAkIgBAZIgNBRQgNAugOAuIgOApIgeBdQgQAigSAiQgKAQgLAMQgkAsg1AFQgRADgTgBQgjgBg0gRQgxgNg8gjIglgVQhohEgsgcIgGgCQhcgyguAnQgIAGgGAHQgkAfgEAeQgDAPAGASQAFASAMASQAIAPAQAVQANASAVAYIAGAIQAZAfARAkIAJAYQAKAjAAAgQAAAYgFAVQgEAUgKAYIgQAgIgNAaQgKAWgCAPQgBAIABAIQAEAbAZAfQgrgPgRgfg");
	this.shape_85.setTransform(133.8,-151.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAHQbQgMgVgGgsIgIgwQgDgSgDgJQgMgugfgkQgGgHgcgSQgYgQgogXIhgg9QgjgXgagVQhCg0gng2QhMhsAmh9QAGgQAIgOQAJgQAMgNQAMgaAWgcQA+hJAXgkQArg8gJgsQgJgwg1glQgSgNgXgLQgcgPg9gcQg6gcgpgbQh1hQg3iEQhKixAXkcQAkhCCYggIAsgIIAsgHQAggEAcgHQA7gOA2gSQBBgSBLgJIAcgEQBbgQBXgEQBRgGBRAEIAqAEQCQAYBYAyIAUAPQBuBiARCAIACAXQAJBXgnB1QgIAfgPApQgNA5ggBMIgLAsQgYBPATAtQALAbAsAJQA8AKAhAKQAtALAhAVQBAAoATBMQAIAcABAaIADAVQAEAggBAjIgBAZIgMBSQgMAugOAuIgNApIggBdQgQAigTAiIgVAcQglArg2AFQgRACgUgBQgkgCgzgRQgxgOg8gjIgkgWIiUhfIgGgDQhcgxguAoQgIAGgGAHQgkAfgDAfQgDAPAGASQAFARANATQAIAOAQAVQANATAWAXIAGAIQAYAfARAkIAJAZQAJAiAAAgQAAAYgEAWQgEATgLAYQgHAPgJARIgNAaQgKAVgBAPQgBAIABAIQADAcAZAfQgqgQgSgeg");
	this.shape_86.setTransform(133.7,-151.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAIQdQgMgWgGgrQgEgdgEgTQgDgSgDgKQgMgugfgkQgGgIgdgRQgYgQgogXIhig+QgigXgbgVQhCg0gng3QhOhtAoh9QAGgRAIgOQAJgQANgNQANgaAVgcQA/hKAYglQAsg8gIgsQgKgwg1gmQgSgNgXgMQgcgOg+gcQg7gcgogbQh2hRg4iFQhKixAXkeQAjhCCYggIArgJIAtgGQAggFAcgHQA7gNA4gQQBBgSBNgIIAdgDQBdgPBYgDQBSgEBRAFIAqAEQCRAaBWAzQALAHAKAIQBtBjAPCCIABAXQAIBZgqB1QgJAggPApQgPA6ghBMIgLAsQgZBPATAtQALAbAuAIQA8AJAhAKQAuAKAiAVQBBAnAUBMQAIAdACAaIADAUQAEAgAAAkIgBAZIgLBSQgLAugOAvIgNAoQgQAwgRAtQgRAigTAhQgLAQgLANQgmAqg3AEQgRADgUgCQgkgCgzgSQgxgPg8gkIgkgVQhphGgrgaIgFgDQhcgwguAoQgIAHgHAHQgiAggEAeQgCAQAGASQAGARANATQAIAOAQAVQANASAWAXIAGAJQAZAfAQAkQAFAMADAMQAKAjAAAfQAAAYgFAWQgEASgLAZIgQAgIgNAaQgJAVgCAPQgBAIABAIQAEAbAZAfQgrgPgSgfg");
	this.shape_87.setTransform(133.5,-151.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAJQfQgMgWgGgrIgHgxQgDgSgDgKQgNguggglQgGgHgcgRQgZgRgogXQg4gigrgbQgjgYgbgVQhDg0gng3QhOhuAph+QAGgRAJgPQAJgQAMgNQAOgaAWgdQBAhLAZgkQAsg9gIgtQgKgwg2gmQgSgNgXgMQgcgOg+gcQg7gcgpgcQh3hQg5iHQhKiyAXkgQAjhBCYghIArgIIAtgHQAfgFAcgGQA8gNA5gPQBDgRBOgHIAdgDQBfgNBagCQBSgDBSAGIAqAFQCRAbBWA0QALAIAJAIQBsBlANCDIABAXQAGBagsB3QgJAggRAqQgPA5gjBNQgHAXgFAWQgZBOATAtQAMAaAuAIQA9AJAiAIQAuAKAjAUQBCAnAVBMQAIAdACAaIAEAVQAFAfAAAkIgBAaQgEAqgGApQgKAugOAuIgNAoQgQAxgSAsQgRAigUAhQgLAQgMANQgnAqg4ADQgRACgUgCQgkgDg0gTQgxgQg7gjIgkgWQhphGgqgaIgGgCQhbgxguAqIgPANQgiAhgDAfQgCAPAHATQAFARANASQAJAPAQAUQANASAWAYIAGAIQAZAfAQAkQAFAMADAMQAKAjAAAfQgBAYgFAWQgDASgLAZIgQAgIgNAZQgKAWgBAPQgBAIABAIQADAbAZAfQgrgQgSgfg");
	this.shape_88.setTransform(133.4,-151.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAKQhQgMgWgGgsQgDgdgEgUQgDgSgDgKQgNguggglQgGgHgdgSQgZgQgpgYIhjg9QgkgYgbgVQhDg0gng4QhPhvAqh/QAGgRAJgOQAKgQAMgOQAOgbAWgcQBChMAZgkQAtg+gIgtQgJgwg3gnQgSgNgXgMIhcgqQg7gdgpgbQh4hRg5iIQhKizAWkiQAjhACYghIArgJIAsgGQAggFAcgGQA8gNA6gOQBFgQBPgGIAegDQBhgMBbABQBTgCBSAHIAqAFQCSAdBUA1IAUAQQBsBmALCFIAAAYQAEBbguB3QgKAggRArQgRA6gkBNQgHAXgGAWQgZBOAUAsQALAbAvAHQA9AIAjAIQAvAJAjAUQBEAmAWBMQAJAdACAaIAEAVQAFAgABAkIAAAZQgEArgFApQgKAugOAuIgNApQgQAwgTAsQgRAigVAhQgMAQgMAMQgoAqg4ADQgSACgUgDQgkgDg0gUQgxgRg7gkIgkgWQhqhHgogYIgGgDQhbgwguAqQgIAHgHAHQgiAigCAfQgCAPAHATQAGARANASQAJAOAQAVQAOASAVAXIAGAIQAZAgAQAjIAIAYQAJAjAAAgQAAAXgFAWQgEASgLAZIgQAfIgNAaQgJAWgCAOQgBAIABAIQAEAbAZAfQgsgQgSgfg");
	this.shape_89.setTransform(133.2,-152.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AALQkQgMgWgGgsIgHgyQgDgSgDgKQgNgvggglQgGgHgegRQgZgRgpgXQg5gigsgcQgkgXgbgWQhEg1gog3QhPhwAsiAQAGgRAJgPQAKgQANgOQANgbAXgdQBDhMAaglQAug+gJgtQgJgxg2gnQgTgNgXgMQgdgOg/gcQg8gdgqgcQh4hRg5iIQhLi0AWklQAig/CZgiIAqgIIAtgHQAfgFAcgGQA9gMA7gNQBGgOBRgGIAegCQBjgLBcACQBUgBBSAJIArAGQCTAeBSA2IAUAQQBrBoAICGQABAMAAAMQACBcgwB5QgLAggSArQgTA7gkBNIgOAtQgZBOATAsQAMAaAvAHQA/AHAjAIQAwAIAkAUQBEAlAYBNQAIAcADAaIAEAVQAGAgABAkIAAAaQgCArgGApQgJAugOAvIgNAoQgQAwgTAsQgSAigWAhQgMAQgMAMQgpApg5ACQgSACgUgDQglgEg0gUQgwgSg8glIgjgWQhqhHgogYIgGgDQhbgvguArQgHAGgHAIQgiAigCAfQgCAQAHASQAHARANATQAJAOAQAUQAPASAVAXIAGAIQAZAgAPAjQAFANADAMQAJAiAAAgQAAAXgFAWQgEASgLAZIgQAfIgNAaQgKAVgBAPQgBAIABAIQAEAbAZAfQgsgQgSggg");
	this.shape_90.setTransform(133.1,-152.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAMQnQgMgWgGgtIgIgxQgDgTgDgKQgNgvggglQgGgHgegSQgZgQgqgYQg5ghgsgcQglgYgbgWQhFg1gog3QhQhyAtiBQAHgRAJgPQAKgQANgOQAOgbAYgdQBDhNAaglQAvg/gIgtQgJgyg3gnQgTgNgXgMIhdgrQg8gcgqgcQh5hSg6iJQhLi1AVkmQAjg/CYgiIArgJIAsgHQAfgEAcgGIB6gYQBIgNBRgFIAfgCQBlgJBdADQBWABBSAKIAqAGQCUAfBRA3QALAIAJAJQBqBqAGCHIAAAYQABBegyB5QgMAhgSArQgVA7gmBPIgOAsQgaBOAUAsQAMAZAwAHQA/AHAkAHQAwAHAlAUQBGAkAYBNQAJAcADAaIAEAVQAHAhABAkIABAaQgCArgFApQgIAvgOAuIgNAoQgQAwgUAsQgTAigWAhQgMAPgNANQgrApg5ABQgTABgUgDQglgEg0gWQgwgSg8glIgjgWQhqhIgngYIgFgCQhcgwgtAsQgIAHgHAHQghAjgCAgQgBAQAHASQAHARAOATQAIANARAVQAOASAWAXIAGAIQAZAfAPAkQAFAMADAMQAIAiAAAgQAAAXgFAWQgEASgLAZIgQAfIgNAaQgKAVgBAPQgBAHABAIQAEAcAZAeQgsgQgSggg");
	this.shape_91.setTransform(133,-152.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AANQqQgNgWgFgtIgHgzQgDgSgDgLQgNgvghglQgGgHgegSQgagQgqgYQg6ghgtgcQgkgYgcgWQhFg1gog4QhRhzAviCQAGgRAJgPQAKgQAOgOQAOgcAYgdQBEhNAbgmQAwg/gIguQgJgyg3gnQgTgNgYgMQgcgPhBgcQg9gdgqgcQh6hSg6iKQhMi2AWkpQAig+CYgiIArgJIAsgHIA7gKIB7gWQBJgMBUgEIAfgCQBngHBeAEQBWACBTALIArAHQCUAgBPA5IAUAQQBqBsAECJIgBAYQgBBeg0B7QgMAhgUAsQgWA7gnBPQgIAXgGAVQgbBPAVArQAMAZAwAHQBAAFAkAHQAyAHAkATQBHAjAaBNQAJAdAEAaIAEAVQAHAgACAlIABAaQgBArgFApQgHAvgOAvIgNAoQgQAwgVArQgTAjgXAgQgNAQgNAMQgsAog6ABQgSABgVgDQglgFg0gWQgwgUg8glIgigXQhrhIgmgXIgGgDQhbgvguAtIgOAPQghAjgBAgQgCAQAIASQAHARAOATQAJANARAVQAPASAVAWIAGAJQAZAfAPAjQAFANACAMQAJAiAAAgQgBAXgFAVQgEATgLAYIgQAfIgNAaQgJAVgCAPQAAAIABAIQAEAbAYAeQgsgQgSggg");
	this.shape_92.setTransform(132.9,-153.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AANQtQgNgWgEgtIgIgzQgDgTgDgKQgNgwghglQgGgHgegSQgagQgrgYQg7ghgsgdQglgYgcgVQhGg2gog4QhSh0AwiDQAHgRAJgPQALgRANgOQAPgbAYgeQBGhOAbglQAwhAgHgvQgJgyg4gnQgTgOgYgMQgdgOhBgdQg9gdgqgcQh7hSg7iMQhMi3AVkqQAig+CZgiIAqgJIAsgHIA7gKIB9gVQBLgLBUgDIAggBQBpgGBfAFQBYAEBSAMIArAIQCVAhBOA6IATARQBqBtACCKIgBAZQgDBfg2B8QgNAigVAsQgXA7goBQQgJAXgGAVQgbBOAUArQAMAZAxAGQBBAFAlAGQAyAHAmASQBIAjAbBNQAJAdAEAaIAFAVQAHAgADAlIABAaQAAArgFAqQgHAvgNAvIgNAoQgRAwgVArQgUAigYAgQgNAQgNAMQgtAog7ABQgTAAgUgDQgmgGg0gXQgwgVg7gmIgjgWQhrhJglgWIgFgDQhbgvguAuIgOAPQghAkgBAgQgBAQAIATQAHAQAOATQAKANARAVQAOASAWAWIAGAIQAZAgAOAjIAIAYQAIAjAAAfQgBAYgFAVQgEASgLAZIgQAfQgIANgFAMQgJAVgCAPIABAQQAEAbAYAeQgsgQgTghg");
	this.shape_93.setTransform(132.8,-153.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAPQxQgNgWgFguIgHgzQgDgTgDgLQgOgvghgmQgGgHgfgSQgagQgrgYQg7gigugcQglgYgcgWQhHg1gog5QhTh1AyiEQAHgRAKgPQAKgRAOgOQAPgcAZgeQBGhOAcgmQAxhBgHguQgJgzg4goQgTgNgYgMQgdgPhCgdQg+gdgqgcQh8hTg7iMQhNi4AWksQAhg9CZgjIAqgJIAsgHIA7gKQA+gKBAgJQBMgKBWgCIAhgBQBqgEBhAGQBYAFBTANIArAIQCWAjBNA7QAKAIAJAJQBoBvAACMIgBAZQgFBgg4B9QgOAigVAsQgZA8gpBQQgJAXgHAVQgbBPAVAqQAMAZAxAGQBCAEAlAFQAzAGAmASQBKAiAcBOQAKAcAEAbIAFAVQAIAgADAlIABAaQABAsgFAqQgGAvgNAvIgNAnQgRAxgWAqQgUAjgZAgQgNAPgOAMQguAog8AAQgTAAgUgEQgmgGg0gYQgwgVg7gnIgjgWQhrhKgkgVIgGgDQhaguguAuQgIAHgGAIQghAlgBAgQAAAQAIATQAIARAOASQAKANARAVIAkAoIAGAIQAZAgAOAjIAIAYQAIAjgBAfQAAAXgFAVQgFATgLAYIgQAfIgNAZQgJAWgBAOIAAAQQAEAbAZAeQgtgQgSghg");
	this.shape_94.setTransform(132.6,-153.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-251.2,390.8,344.3);


(lib.ic3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAWIAAgHIABAAQAHAHAPAAQALAAAAgHQAAgEgDgCQgDgCgHgBQgJAAAAgGIAAgEIALgBQAKgBAAgHQAAgIgMAAQgNAAgHAIIAAAAIAAgJQAAgGAGgEQAHgGAMAAQALAAAHAHQAIAFAAALQAAALgLAEQAMAEAAAKQAAAZgeAAQgXgBAAgQg");
	this.shape.setTransform(-38.4,-43.1,1.634,1.635);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// OBJECTS
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E31E24").s().p("Ag1A2QgXgWAAggQAAgfAXgWQAWgXAfAAQAgAAAWAXQAXAWAAAfQAAAggXAWQgWAXggAAQgfAAgWgXg");
	this.shape_1.setTransform(-38.6,-43,1.63,1.63);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_3
	this.instance = new lib.ic_img3();
	this.instance.parent = this;
	this.instance.setTransform(-5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3575C9").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDEAACMCLQCLCLAADEQAADFiLCLQiMCLjEAAQjEAAiLiLg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#84CDF2").s().p("AnOHPQjAjAAAkPQAAkODAjAQDAjAEOAAQEPAADADAQDADAAAEOQAAEPjADAQjADAkPAAQkOAAjAjAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic3_1, new cjs.Rectangle(-65.5,-65.5,131,131), null);


(lib.ic2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAmQgJAAAAgJQAAgJANgKIAQgMQAEgFAAgEQAAgJgJAAQgPAAgHAJIgBAAIAAgHQAAgSAagBQAMAAAIAHQAHAHAAAKQAAAHgEAFQgDAEgKAGIgKAIIgEAFIAgAAIAAAGQAAAKgLAAg");
	this.shape.setTransform(-38.4,-43.3,1.634,1.635);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// OBJECTS
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E31E24").s().p("Ag1A2QgXgWAAggQAAgfAXgWQAWgXAfAAQAgAAAWAXQAXAWAAAfQAAAggXAWQgWAXggAAQgfAAgWgXg");
	this.shape_1.setTransform(-38.6,-43,1.63,1.63);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_3
	this.instance = new lib.ic_img2();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3575C9").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDEAACMCLQCLCLAADEQAADFiLCLQiMCLjEAAQjEAAiLiLg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#84CDF2").s().p("AnOHPQjAjAAAkPQAAkODAjAQDAjAEOAAQEPAADADAQDADAAAEOQAAEPjADAQjADAkPAAQkOAAjAjAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic2_1, new cjs.Rectangle(-65.5,-65.5,131,131), null);


(lib.ic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAlQgEAAgDgDQgEgEAAgFIAAgpIgKADQgHAAgBgFIgCgHIAUgIQAEgDAHAAQADAAADADQAEACAAAEIAABAg");
	this.shape.setTransform(-40.1,-43.1,1.63,1.63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E31E24").s().p("Ag1A2QgXgWAAggQAAgfAXgWQAWgXAfAAQAgAAAWAXQAXAWAAAfQAAAggXAWQgWAXggAAQgfAAgWgXg");
	this.shape_1.setTransform(-38.6,-43,1.63,1.63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_3
	this.instance = new lib.ic_img1();
	this.instance.parent = this;
	this.instance.setTransform(1.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3575C9").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDEAACMCLQCLCLAADEQAADFiLCLQiMCLjEAAQjEAAiLiLg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#84CDF2").s().p("AnOHPQjAjAAAkPQAAkODAjAQDAjAEOAAQEPAADADAQDADAAAEOQAAEPjADAQjADAkPAAQkOAAjAjAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic1_1, new cjs.Rectangle(-65.5,-65.5,131,131), null);


(lib.gift2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.gift_img_2_1();
	this.instance.parent = this;
	this.instance.setTransform(-64,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheBgQgogoAAg4QAAg3AogoQAngnA3AAQA4AAAnAnQAoAoAAA3QAAA4goAoQgnAng4AAQg3AAgngng");
	this.shape.setTransform(-117.7,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24129A").s().p("AgVAHIAAgaQALgEAKAAQAVAAAAAOQAAAGgGADQAHAEAAAEQAAAQgWAAQgVAAAAgRgAgGAJQABAEAFAAQAHAAgBgFQAAgEgGAAIgGAAgAgGgLIAAAHIAGAAQAGAAAAgEQAAgEgGAAg");
	this.shape_1.setTransform(-33.4,-40.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24129A").s().p("AgLARIAAgcIAEAAQAHAAACACQACACAAAGIAAAQQAAAFAHAAIACAAIAAAEQAAAIgJAAQgPAAAAgPgAgJgSQgDgCAAgDQAAgDADgCQACgDAEAAQAHAAAAAIQAAAIgHAAQgEAAgCgDg");
	this.shape_2.setTransform(-37.5,-41.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#24129A").s().p("AAEAWQgLAAAAgKIAAgVIgOAAIAAgGQAAgCACgCQADgCADAAIAjAAIAAAFQAAADgCACQgDACgDAAIgGAAIAAAfg");
	this.shape_3.setTransform(-41.5,-40.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24129A").s().p("AgOAUQgGgEAAgHQAAgOAXAAIADAAIAAgBQAAgFgJAAQgJAAgGAFIAAgGQAAgEAEgDQAGgEAIAAQAVAAAAAUIAAAGQAAAMgFAEQgEAFgMAAQgIAAgGgEgAgFAJQAAAEAGAAQAFAAAAgGIAAgDIgDAAQgIAAAAAFg");
	this.shape_4.setTransform(-46.2,-40.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#24129A").s().p("AAGAUIgNgTIAAAVIgGAAQgKAAAAgJIAAgiIAGAAQAKgBAAAKIAAAJQAHgKAEgGQAEgCAFAAIALAAIAAAAQgKAKgHAKIAJALQADADAFACQAAAHgKABQgFAAgDgDg");
	this.shape_5.setTransform(-51.1,-40.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#24129A").s().p("AgLARIAAgcIAEAAQAHAAACACQACACAAAGIAAAQQAAAFAHAAIACAAIAAAEQAAAIgKAAQgOAAAAgPgAgMgXQAAgIAJAAQADAAACADQACACAAADQAAADgCACQgCADgDAAQgJAAAAgIg");
	this.shape_6.setTransform(-55.4,-41.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#24129A").s().p("AACAlQgJAAAAgLIAAgEQgDACgFAAQgIAAgGgHQgFgGgBgLQABgJAFgFQAGgHAJAAQAFAAACABIAAgQIAGAAQAKAAgBAKIAAAGQACgBAGAAQAJAAAFAHQAGAFgBAJQABALgGAGQgFAHgJAAQgFAAgDgCIAAAPgAAIgJIAAAVIADAAQAFAAACgCQACgDAAgHQAAgKgJAAgAgSAAQgBAHADADQACACAFAAIACAAIAAgVIgDgBQgIAAAAAKg");
	this.shape_7.setTransform(-61,-40.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#24129A").s().p("AgWAAIAAgWIAGAAQAFAAACACQACABAAAGIAAAOQAAAKAHgBIAHAAIAAggIAGAAQAKAAABAJIAAAgQgMAEgMAAQgXAAABgXg");
	this.shape_8.setTransform(-67.7,-40.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#24129A").s().p("AAEAWQgLAAAAgKIAAgVIgOAAIAAgGQAAgCACgCQADgCADAAIAjAAIAAAFQAAADgCACQgDACgDAAIgHAAIAAAfg");
	this.shape_9.setTransform(-72.8,-40.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#24129A").s().p("AgOAeQgKAAAAgLIAAgWQAAgaAZAAQALAAAGAGQAHAHAAAKQAAAKgGAHQgHAGgJAAQgHABgEgHIAAATgAgIgHQAAANAJAAQAIAAAAgLQAAgMgJAAQgIAAAAAKg");
	this.shape_10.setTransform(-77.9,-40);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24129A").s().p("AgPARQgHgGAAgKQAAgKAHgHQAHgHAJAAQAKAAAGAFQAGAFAAAIQAAAGgGACQgFADgMAAIgGAAQACAGAJAAQALAAADgDIABAAIAAAEQAAALgSAAQgLAAgGgHgAgGgDIAGAAQAIAAAAgDQAAgFgHAAQgGAAgBAIg");
	this.shape_11.setTransform(-83.4,-40.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#24129A").s().p("AgMASQgHgHAAgKQAAgJAHgIQAHgHALAAQAGAAAEAEQAEADAAAEIAAAFIgBAAQgDgCgHAAQgMAAAAAJQAAALALAAQAHAAAEgCIABAAIAAAEQAAAEgFADQgEADgGAAQgKAAgHgFg");
	this.shape_12.setTransform(-88.2,-40.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#24129A").s().p("AAAAOIgCgFQgHAHgBAGIgGAAQgHAAABgFQAAgHAJgJIADgCIgKgNIgCgIIAIAAQADAAAEADIAFAFIACAFQAHgIABgFIAGAAQAGAAAAAGQAAAEgFAGIgHAGIAEAGQAGAHAGACQAAAIgKAAQgHAAgHgJg");
	this.shape_13.setTransform(-28,-50.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#24129A").s().p("AgXABIAAgXIAHAAQAKAAAAAJIAAAPQAAAIAGAAIAHAAIAAggIAGAAQALAAAAAJIAAAgQgLAEgMAAQgYAAAAgWg");
	this.shape_14.setTransform(-33.4,-50.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24129A").s().p("AgVAGIAAgZQALgEAKAAQAVAAAAAOQAAAFgGAEQAHACAAAGQAAAQgWAAQgVAAAAgSgAgFAJQAAAEAFAAQAHAAAAgFQAAgEgHAAIgFAAgAgFgMIAAAHIAFAAQAGAAAAgEQAAgDgGAAg");
	this.shape_15.setTransform(-38.8,-50.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#24129A").s().p("AgRARQgHgHAAgJQAAgKAHgHQAHgGALAAQAKAAAGAGQAIAHAAAJQAAAKgHAHQgHAGgLAAQgKAAgHgGgAgFgHQgDADAAAEQAAAMAIAAQAJAAAAgLQAAgMgJAAQgDAAgCAEg");
	this.shape_16.setTransform(-44.2,-50.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#24129A").s().p("AAGAUIgNgTIAAAVIgGAAQgKAAAAgJIAAgjIAGAAQAKAAAAAJIAAAKIALgQQADgDAGAAIALAAIAAABQgLALgGAJIAIALQAEAEAFABQgBAIgJAAQgFAAgDgDg");
	this.shape_17.setTransform(-49.5,-50.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#24129A").s().p("AARAXQgKAAABgKIAAgJIgPAAIAAATIgFAAQgLAAAAgKIAAgiIAGAAQALgBgBAKIAAAHIAPAAIAAgQIAFAAQALgBAAAKIAAAjg");
	this.shape_18.setTransform(-55.2,-50.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#24129A").s().p("AgVAWIAAgEIAHAAQAGAAACgGQgFgHgFgMQgFgNgCgJIAJAAQAHAAACAHIAGAVQAHgNABgPIAIAAQAHAAAAAGQAAAJgKARQgJASgFAFQgDAEgIAAQgKAAAAgIg");
	this.shape_19.setTransform(-60.6,-49.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#24129A").s().p("AgOAeQgKAAAAgLIAAgXQAAgZAZAAQALAAAGAGQAHAGAAALQAAAKgGAHQgHAHgKAAQgGAAgEgHIAAATgAgIgGQAAALAJAAQAIAAAAgKQAAgMgJAAQgIAAAAALg");
	this.shape_20.setTransform(-65.8,-49.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#24129A").s().p("AgOAVQgGgFAAgGQAAgPAXABIACAAIAAgCQAAgFgIAAQgJAAgGAFIgBAAIAAgGQAAgLATABQAVgBAAAUIAAAGQAAAMgFAEQgEAEgMAAQgIAAgGgCgAgFAIQAAAFAFAAQAGAAAAgGIAAgDIgEAAQgHAAAAAEg");
	this.shape_21.setTransform(-71.3,-50.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#24129A").s().p("AgSATIAAgFIAAAAQAFAEALAAQAJAAAAgJIAAgDQgCAFgGAAQgVAAgBgTQAAgJAHgGQAIgGAKAAQAWAAgBATIAAAUQABAJgHAFQgHAGgKABQgSAAAAgMgAgHgJQAAAJAIAAQAGAAABgIQAAgJgIAAQgGAAgBAIg");
	this.shape_22.setTransform(-76.5,-49.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#24129A").s().p("AgRARQgHgHAAgJQAAgKAHgHQAHgGALAAQAKAAAGAGQAIAHAAAJQAAAKgHAHQgHAGgLAAQgKAAgHgGgAgFgHQgDADAAAEQAAAMAJAAQAIAAAAgLQAAgMgJAAQgDAAgCAEg");
	this.shape_23.setTransform(-82.1,-50.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#24129A").s().p("AARAXQgJAAAAgJIAAgPQAAgIgIAAIgGAAIAAAgIgFAAQgMAAAAgJIAAggQALgEAMAAQAYAAAAAWIAAAXg");
	this.shape_24.setTransform(-87.7,-50.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAPA2QgPAAAAgOIAAgKIgcAAQgHAAgEgDQgFgEAAgFQAAgJAEgHQAIgOAOgSQAOgSAHgFIAJAAQAIAAAEAEQAFAFAAAIIAAAqIAQAAIAAAMQAAAFgDAEQgEADgFAAIgEAAIAAAYgAgRAHIARAAIAAgcQgMARgFALg");
	this.shape_25.setTransform(-107.7,-48.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#24129A").s().p("AhCBJIAAgBQAEgFAGgNIAMgXQAIgRAKgEQgMgCgIgLQgJgNAAgOQAAgVARgNQAPgMAZAAIASAAQAKAAAOACQAPACAJACIAACTIgRAAQgNAAgHgHQgHgGAAgLIAAggIgHABQgIABgEACQgEAEgEAJIgLAXQgHAQgWABQgQAAgHgFgAgLgaQAAAIAEAFQAGAGAHAAIASgBIAAgjIgSgBQgRABAAARg");
	this.shape_26.setTransform(131.3,-53.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#24129A").s().p("AAzBMQgKAAgHgGQgIgHAAgKIAAgnIgyAAIAAA+IgTAAQgLAAgGgGQgJgHABgKIAAiAIAWAAQAJAAAGAGQAGAFABAIIAAAmIAyAAIAAg5IAWAAQAIAAAHAGQAGAFAAAIIAACEg");
	this.shape_27.setTransform(116,-53.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#24129A").s().p("ABHBBQgWgWgbgoIAABIIgRAAQgNAAgGgHQgHgHAAgKIAAgwQgdApgTAVQgLAMgSAAQgKAAgGgFQgGgFgDgNQAIgCAGgFIANgLQALgLAWgeQgggqgegcIAAgBIAgAAQAKAAAGACQAFACAGAGQAPAOAeAoIAAhAIAQAAQAMAAAIAIQAHAHAAAJIAAAoQAagkATgSQAGgGAGgCQAFgCALAAIAfAAIAAABQgdAcgiAqQAaAhAIAIQAJAJAEACQAGAFAJACQgDANgHAFQgFAFgMAAQgRAAgKgMg");
	this.shape_28.setTransform(95,-53.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#24129A").s().p("AA1BMQgKAAgHgGQgIgHAAgKIAAhFIgiA8QgKASgLAHQgKAHgOAAIgUAAIAAiXIAWAAQAJAAAGAGQAHAFAAAIIAABDIAcg2QAQggAgAAIAXAAIAACXg");
	this.shape_29.setTransform(73.7,-53.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#24129A").s().p("AACBMQgYAAAAgWIAAhdIgtAAIAAgPQAAgJAHgGQAHgGALAAIBuAAIAAAPQAAAIgHAHQgIAGgJAAIgXAAIAABzg");
	this.shape_30.setTransform(58.1,-53.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#24129A").s().p("Ag3A6QgXgVAAgjQABgkAVgWQAVgXAlABQAfAAAWATQAXAWABAkQAAAlgWAVQgVAXglAAQgiAAgUgWgAgaghQgIANAAATQAAAvAjAAQAQAAAJgMQAJgMAAgUQAAgvgkABQgPAAgKALg");
	this.shape_31.setTransform(42.4,-53.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#24129A").s().p("ABpBfQgQAAgGgIQgFgFAAgNIAAgLIiEAAQhBAAAAg+IAAhZIAXAAQAJgBAGAGQAGAGAAAIIAABKQAAANAFAEQAHAGAQAAIANAAIAAh0IAWAAQAIgBAFAGQAIAFAAAJIAABhIApAAIAAh0IAVAAQAIgBAIAGQAGAFABAJIAABhQAPgBAFAGQAGAFAAAPIAAAvg");
	this.shape_32.setTransform(21.5,-51.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");
	this.shape_33.setTransform(-131.3,-21.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgqArQgSgSAAgZQAAgZASgRQASgSAYAAQAZAAASASQASARAAAZQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_34.setTransform(15.2,-14.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D23731").s().p("AhOBQQghgiAAguQAAgtAhgiQAhggAtAAQAuAAAhAgQAhAiAAAtQAAAughAiQghAgguABQgtgBghggg");
	this.shape_35.setTransform(-107.4,-48.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(4).p("AAAhwQAuAAAhAhQAhAhAAAuQAAAughAiQghAhguAAQgtAAghghQghgiAAguQAAguAhghQAhghAtAAg");
	this.shape_36.setTransform(-107.4,-48.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D23731").s().p("AhOBQQghgiAAguQAAgtAhgiQAhggAtAAQAuAAAhAgQAhAiAAAtQAAAughAiQghAgguABQgtgBghggg");
	this.shape_37.setTransform(-107.4,-48.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Am/HAQi4i5AAkHQAAkGC4i5QC6i7EFAAQEGAAC6C7QC5C5gBEGQABEHi5C5Qi6C6kGABQkFgBi6i6g");
	this.shape_38.setTransform(-59.6,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiaCbQg/hBgBhaQABhZA/hBQBAhABaAAQBbAABABAQBABBAABZQAABahABBQhABAhbAAQhaAAhAhAg");
	this.shape_39.setTransform(-16.9,-40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift2, new cjs.Rectangle(-138,-71.5,276.1,135), null);


(lib.gift1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.gift_img_1_1();
	this.instance.parent = this;
	this.instance.setTransform(-39,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAqQgNgPAAgZQAAg4ArAAQAqAAAAA1QAAA4grAAQgRAAgMgNgAgJgYQgEAHAAARQAAAfANAAQAIAAADgGQADgHAAgSQAAgRgDgHQgEgGgHAAQgGAAgDAGg");
	this.shape.setTransform(-83,-49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAfIAAgJIABAAQAKAJAUgBQASABAAgNQAAgMgUAAQgPAAgMADIAAgoQAAgWAUAAIAzAAIAAAJQAAAPgRgBIgbAAIAAAQIAJAAQARAAAKAIQAMAIAAAOQAAASgMALQgLAJgTAAQgjAAAAgXg");
	this.shape_1.setTransform(-91.9,-49.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D23731").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_2.setTransform(-87.6,-50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPA1QgPAAAAgOIAAgJIgbAAQgHAAgEgEQgGgDAAgFQAAgIAEgIQAIgOAOgSQAOgRAHgFIAJAAQAIAAAEAEQAEAFAAAIIAAApIARAAIAAAMQAAAFgDADQgEAEgFAAIgFAAIAAAXgAgRAHIARAAIAAgbQgKAOgHANg");
	this.shape_3.setTransform(-87.5,47.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D23731").s().p("AhOBPQggghgBguQABgtAgghQAhghAtAAQAuAAAhAhQAgAhAAAtQAAAuggAhQghAhguAAQgtAAghghg");
	this.shape_4.setTransform(-86.9,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4).p("AAAhvQAuAAAhAhQAhAgAAAuQAAAughAiQghAgguAAQgtAAghggQghgiAAguQAAguAhggQAhghAtAAg");
	this.shape_5.setTransform(-87.6,-50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D23731").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_6.setTransform(-87.6,-50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiJCKQg5g5AAhRQAAhQA5g5QA5g6BQAAQBRAAA6A6QA4A5AABQQAABRg4A5Qg6A6hRAAQhQAAg5g6g");
	this.shape_7.setTransform(12.7,44.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(4).p("AAAhvQAuAAAhAhQAgAhAAAtQAAAuggAhQghAhguAAQgtAAghghQghghAAguQAAgtAhghQAhghAtAAg");
	this.shape_8.setTransform(-86.9,46.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D23731").s().p("AhOBPQggghgBguQABgtAgghQAhghAtAAQAuAAAhAhQAgAhAAAtQAAAuggAhQghAhguAAQgtAAghghg");
	this.shape_9.setTransform(-86.9,46.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxAyQgVgUAAgeQAAgcAVgVQAVgVAcAAQAdAAAVAVQAVAVAAAcQAAAegVAUQgVAVgdAAQgcAAgVgVg");
	this.shape_10.setTransform(-104.7,-31.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#24129A").s().p("AgXAIIAAgWIAHAAQAGAAACACQACACAAAFIAAAOQAAAJAGAAIAIgBIAAgfIAEAAQALgBAAAKIAAAgQgKAEgMAAQgYAAAAgXgAgJgTQgDgDgBgGIAAgCQAGAGAHAAQAHAAAFgGIAAADQAAAFgDADQgEADgFAAQgFAAgEgDg");
	this.shape_11.setTransform(-12.1,-42.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#24129A").s().p("AgXABIAAgXIAHAAQAKAAgBAJIAAAPQABAJAGAAIAIgBIAAggIAFAAQALAAAAAJIAAAgQgLAEgNAAQgXAAAAgWg");
	this.shape_12.setTransform(-17.7,-42.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#24129A").s().p("AARAXQgKAAAAgKIAAgIIgOAAIAAASIgEAAQgLAAAAgKIAAgiIAGAAQAJgBAAAKIAAAHIAOAAIAAgQIAGAAQALgBAAAKIAAAjg");
	this.shape_13.setTransform(-23.4,-42.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#24129A").s().p("AgUAKIAAggIAIAAQAIAAAAAHIAAAIIAHgBQAIgBAFAFQAFAEAAAHQAAAQgVAAQgUAAAAgNgAgEAMIAEAAQAGAAAAgGQAAgEgGAAIgEAAg");
	this.shape_14.setTransform(-28.5,-42.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24129A").s().p("AAQAXQgIAAgBgHQgDgKgEgKQgGAKgCARIgIAAQgHgBAAgFQAAgFACgFQAHgSAJgKIAFAAQAFgBAFAHQALARADAVg");
	this.shape_15.setTransform(-33.6,-42.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#24129A").s().p("AgLARIAAgdIAEAAQAHABACACQACACAAAGIAAAPQAAAGAHAAIACAAIAAAEQAAAIgJgBQgPAAAAgOgAgMgXQAAgDADgCQACgCAEgBQAHABAAAHQAAAIgHAAQgJAAAAgIg");
	this.shape_16.setTransform(-37.4,-43);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#24129A").s().p("AgWAGQgBgXAHgHQAGgGARAAIALAAIAAAHQABAGgJAAIgDAAQgLAAgDACQgDADgBAFIABAAQAEgGAIAAQAKAAAFAGQAHAHAAAIQgBALgGAGQgGAGgLAAQgWAAAAgZgAgEABQgDACAAAFQABALAGAAQAIAAAAgKQAAgKgIAAQgCAAgCACg");
	this.shape_17.setTransform(-41.8,-42.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#24129A").s().p("AgRARQgHgGAAgKQAAgKAHgHQAHgGALgBQAJAAAHAHQAIAGAAAKQAAAYgZAAQgKgBgHgGgAgFgIQgDAEAAAEQAAALAIAAQAJAAAAgKQAAgLgJAAQgDAAgCACg");
	this.shape_18.setTransform(-47.5,-42.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#24129A").s().p("AAYAXQgJgBAAgHIgBgQIgJAYIgEAAQgHAAgEgNIgEgMIgBAZIgGAAQgJgBAAgHQAAgRAFgTIAFAAQAIgBAEAGIAGALIACAJIAGgQQADgGAEgDIADAAQALgBABALQADATAAAPg");
	this.shape_19.setTransform(-53.8,-42.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#24129A").s().p("AgOAUQgGgDAAgIQAAgOAXAAIADAAIAAgCQAAgEgJAAQgKAAgFAFIAAAAIAAgFQAAgMASAAQAVABAAATIAAAGQAAAMgFAEQgEAFgMAAQgIAAgGgEgAgFAIQAAAFAGAAQAFAAAAgFIAAgEIgDAAQgIAAAAAEg");
	this.shape_20.setTransform(-61.8,-42.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#24129A").s().p("AARAXQgKAAABgKIAAgIIgOAAIAAASIgGAAQgLAAAAgKIAAgiIAHAAQAKgBAAAKIAAAHIAOAAIAAgQIAEAAQALgBAAAKIAAAjg");
	this.shape_21.setTransform(-67,-42.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#24129A").s().p("AgUAJIAAgfIAIAAQAIAAAAAHIAAAIIAHgCQAIABAFAEQAFAEAAAHQAAAQgVAAQgUAAAAgOgAgEALIAEABQAGAAAAgFQAAgFgGAAIgEAAg");
	this.shape_22.setTransform(-23,-51.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#24129A").s().p("AASAWQgLAAAAgJIAAgJIgNAAIAAASIgGAAQgLAAABgJIAAgjIAGAAQAKAAAAAKIAAAHIANAAIAAgRIAGAAQAKAAAAAKIAAAig");
	this.shape_23.setTransform(-28.4,-51.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#24129A").s().p("AgQARQgGgGAAgKQAAgJAHgHQAGgIAKAAQAJAAAHAFQAGAFAAAIQAAAGgFACQgGADgMAAIgGAAQACAGAJAAQAKAAAEgCIABAAIAAADQAAALgSAAQgLAAgHgHgAgHgDIAHAAQAIAAAAgDQAAgFgHAAQgHAAgBAIg");
	this.shape_24.setTransform(-33.8,-52);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#24129A").s().p("AARAWQgJAAAAgJIAAgJIgPAAIAAASIgFAAQgLAAAAgJIAAgjIAGAAQALAAgBAKIAAAHIAPAAIAAgRIAEAAQAMAAAAAKIAAAig");
	this.shape_25.setTransform(-39.2,-51.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#24129A").s().p("AgVAGIAAgZQALgDAKgBQAWAAAAAOQAAAFgHAEQAHACAAAHQAAAOgVAAQgWABAAgSgAgFAJQAAAEAGAAQAGAAAAgFQAAgEgHAAIgFAAgAgFgMIAAAHIAFAAQAGAAAAgDQAAgEgGAAg");
	this.shape_26.setTransform(-44.7,-51.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#24129A").s().p("AgRARQgHgGAAgKQAAgKAHgHQAHgGALgBQAKABAGAGQAIAHAAAJQAAAKgHAHQgHAHgLgBQgKABgHgHgAgFgHQgDADAAAEQAAALAIAAQAJAAAAgKQAAgMgJAAQgDABgCADg");
	this.shape_27.setTransform(-50.1,-51.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#24129A").s().p("AARAXQgKAAABgJIAAgPQAAgIgIgBIgGABIAAAgIgGAAQgLAAAAgJIAAggQAKgEANAAQAXAAAAAWIAAAXg");
	this.shape_28.setTransform(-55.7,-52);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#24129A").s().p("AgRARQgHgGAAgKQAAgKAIgHQAHgGAKgBQAKABAGAGQAIAHAAAJQAAAKgHAHQgGAHgMgBQgJABgIgHgAgFgHQgDADAAAEQAAALAJAAQAIAAAAgKQAAgMgJAAQgDABgCADg");
	this.shape_29.setTransform(-61.4,-51.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#24129A").s().p("AARAXQgKAAAAgJIAAgPQAAgIgHgBIgGABIAAAgIgGAAQgLAAAAgJIAAggQAKgEANAAQAYAAAAAWIAAAXg");
	this.shape_30.setTransform(-67,-52);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#24129A").s().p("AgVAHIAAgaQAMgEAJAAQAVAAAAAOQAAAFgGAEQAHACAAAGQAAAQgVAAQgWAAAAgRgAgFAJQAAAEAFAAQAHAAgBgFQAAgEgGAAIgFAAgAgFgLIAAAHIAFAAQAGAAAAgEQAAgEgGAAg");
	this.shape_31.setTransform(-13.1,47.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#24129A").s().p("AgLARIAAgdIAEAAQAHABACACQACACAAAGIAAAQQAAAFAHAAIACAAIAAAEQAAAIgKAAQgOAAAAgPgAgMgXQAAgHAJgBQADABACACQACACAAADQAAAEgCABQgCADgDAAQgJAAAAgIg");
	this.shape_32.setTransform(-17.1,46.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#24129A").s().p("AADAWQgKAAABgKIAAgVIgPAAIAAgGQAAgGAIAAIAjAAIAAAFQAAADgCACQgCACgEAAIgGAAIAAAfg");
	this.shape_33.setTransform(-21.1,47.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#24129A").s().p("AgOAUQgGgEAAgHQAAgOAXAAIACAAIAAgCQAAgEgIAAQgJAAgGAFIgBAAIAAgGQAAgLATAAQAVAAAAAUIAAAGQAAAMgFAEQgEAFgMAAQgIAAgGgEgAgFAIQAAAFAFAAQAGAAAAgGIAAgDIgEAAQgHAAAAAEg");
	this.shape_34.setTransform(-25.8,47.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#24129A").s().p("AAGAUIgNgTIAAAVIgGAAQgKAAAAgJIAAgjIAGAAQAKAAAAAKIAAAJIALgQQADgDAGAAIALAAQgLAMgGAJIAIALQAEAEAFAAQgBAJgJAAQgFAAgDgDg");
	this.shape_35.setTransform(-30.7,47.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#24129A").s().p("AgLARIAAgdIAEAAQAHABACACQACACAAAGIAAAQQAAAFAHAAIACAAIAAAEQAAAIgJAAQgPAAAAgPgAgJgSQgDgBAAgEQAAgDADgCQACgCAEgBQAHABAAAHQAAAIgHAAQgEAAgCgDg");
	this.shape_36.setTransform(-35,46.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#24129A").s().p("AACAlQgJAAAAgLIAAgFQgDACgEAAQgKAAgFgGQgGgHABgKQgBgJAGgGQAFgGAKAAQAFAAACABIAAgQIAFAAQAKAAAAAKIAAAGQADgBAEAAQAKAAAGAGQAEAGAAAJQAAAKgEAHQgGAGgJAAQgFAAgDgCIAAAQgAAIgJIAAAVIADAAQAEAAACgDQADgCAAgHQgBgJgHgBgAgTAAQAAAHADACQABADAFAAIAEAAIAAgVIgEgBQgJABAAAJg");
	this.shape_37.setTransform(-40.6,47.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#24129A").s().p("AgXAAIAAgWIAHAAQAKAAAAAJIAAAOQAAAKAGgBIAHgBIAAgfIAFAAQAMAAgBAJIAAAgQgMAEgKAAQgXAAgBgXg");
	this.shape_38.setTransform(-47.3,47.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#24129A").s().p("AADAWQgKAAAAgKIAAgVIgOAAIAAgGQAAgGAIAAIAjAAIAAAFQAAADgCACQgDACgDAAIgGAAIAAAfg");
	this.shape_39.setTransform(-52.4,47.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#24129A").s().p("AgOAeQgKAAAAgLIAAgWQAAgaAZAAQAKAAAHAGQAHAHAAAJQAAALgHAHQgFAGgKAAQgHABgEgHIAAATgAgIgHQAAAMAJABQAIgBAAgJQAAgHgDgEQgCgCgEAAQgIAAAAAKg");
	this.shape_40.setTransform(-57.5,48.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#24129A").s().p("AgPARQgHgGAAgKQAAgKAHgHQAHgHAJAAQAKAAAGAFQAGAFAAAIQAAAGgGACQgEACgNAAIgGAAQACAHAJAAQAJAAAFgDIABAAIAAAEQAAALgSAAQgLAAgGgHgAgGgDIAGAAQAIAAAAgEQAAgEgHAAQgGAAgBAIg");
	this.shape_41.setTransform(-63,47.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#24129A").s().p("AgMASQgHgHAAgKQAAgJAHgIQAHgGALgBQAGAAAEAEQAEADAAAEIAAAFIgBAAQgDgCgHAAQgLgBAAAKQAAALAKgBQAHABAEgDIABAAIAAAFQAAAEgFADQgEADgGABQgKgBgHgFg");
	this.shape_42.setTransform(-67.8,47.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#24129A").s().p("AAAAOIgCgFQgGAGgCAHIgGAAQgHAAABgFQgBgHAKgJIADgCIgKgNQgCgEAAgEIAIAAQAEAAADADIAFAFIACAFQAHgIABgFIAGAAQAGAAAAAGQAAAEgFAGIgHAGIAEAGQAGAHAGACQgBAIgIAAQgIAAgHgJg");
	this.shape_43.setTransform(-7.6,38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#24129A").s().p("AgXABIAAgXIAHAAQAGAAACACQACACAAAFIAAAPQAAAIAGAAIAIAAIAAggIAFAAQAKAAAAAJIAAAgQgKAEgMAAQgYAAAAgWg");
	this.shape_44.setTransform(-13,38);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#24129A").s().p("AgVAGIAAgZQALgEAKAAQAVAAAAAOQAAAFgGAEQAHACAAAGQAAAQgVAAQgWAAAAgSgAgGAJQABAEAFAAQAHAAgBgFQAAgEgGAAIgGAAgAgGgMIAAAIIAGAAQAGAAAAgEQAAgEgGAAg");
	this.shape_45.setTransform(-18.4,38);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#24129A").s().p("AgRARQgHgGAAgKQAAgKAIgHQAHgGAKgBQAKABAGAGQAIAHAAAJQAAAKgHAHQgGAGgMAAQgJAAgIgGgAgFgHQgDADAAAEQAAAMAJAAQAIAAAAgLQAAgMgJAAQgDAAgCAEg");
	this.shape_46.setTransform(-23.9,38);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#24129A").s().p("AAFAUIgMgTIAAAVIgHAAQgJAAAAgJIAAgjIAGAAQAKAAAAAJIAAAKIALgQQAEgDAFAAIALAAIAAABQgJAIgIAMIAJALQAEAEAEABQgBAIgJAAQgGAAgDgDg");
	this.shape_47.setTransform(-29.1,38);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#24129A").s().p("AARAWQgKAAAAgJIAAgJIgNAAIAAASIgGAAQgLAAAAgJIAAgjIAHAAQAKAAAAAKIAAAHIANAAIAAgRIAGAAQALAAAAAKIAAAig");
	this.shape_48.setTransform(-34.8,38);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#24129A").s().p("AgVAWIAAgEIAHAAQAGAAACgGQgFgHgFgMQgGgNgBgJIAIAAQAIAAACAHQACAKAEALQAGgMACgQIAIAAQAHAAAAAGQAAAJgKARQgKASgEAFQgEAEgHAAQgKAAAAgIg");
	this.shape_49.setTransform(-40.2,38.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#24129A").s().p("AgOAeQgKAAAAgLIAAgXQAAgZAZAAQALAAAGAGQAHAGAAAKQAAALgGAHQgGAGgKABQgIgBgDgGIAAATgAgIgHQAAAMAJAAQAIAAAAgKQAAgMgJAAQgIgBAAALg");
	this.shape_50.setTransform(-45.5,38.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#24129A").s().p("AgOAVQgGgEAAgHQAAgOAYAAIABAAIAAgCQAAgFgIAAQgKAAgFAFIgBAAIAAgGQABgLASAAQAVAAAAAUIAAAGQAAAMgFAEQgEAFgMgBQgIAAgGgCgAgFAJQAAAEAGAAQAFAAAAgGIAAgDIgDAAQgIAAAAAFg");
	this.shape_51.setTransform(-50.9,38);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#24129A").s().p("AgTATIAAgFIABAAQAFAEALAAQAJAAAAgJIAAgEQgCAGgGAAQgVAAAAgTQAAgJAGgGQAIgGALgBQAUABABATIAAAVQgBAIgGAFQgHAHgKAAQgTAAAAgMgAgHgJQABAJAGAAQAIAAgBgIQAAgJgHAAQgHAAAAAIg");
	this.shape_52.setTransform(-56.1,38.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#24129A").s().p("AgRARQgHgGAAgKQAAgKAHgHQAHgGALgBQAKABAGAGQAIAHAAAJQAAAKgHAHQgGAGgMAAQgJAAgIgGgAgFgHQgDADAAAEQAAAMAJAAQAIAAAAgLQAAgMgJAAQgDAAgCAEg");
	this.shape_53.setTransform(-61.7,38);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#24129A").s().p("AARAXQgKAAAAgJIAAgPQAAgIgHAAIgGAAIAAAgIgGAAQgLAAAAgJIAAggQAKgEANAAQAYAAAAAWIAAAXg");
	this.shape_54.setTransform(-67.3,37.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#24129A").s().p("AhCBKIAAgCQAEgEAHgOIALgXQAIgRAKgEQgMgDgIgKQgJgNAAgPQAAgUARgNQAQgNAZAAIARAAQAKAAAOACQAPACAJADIAACSIgRAAQgMAAgIgGQgHgHAAgLIAAgfIgHABQgIABgEADQgEADgEAJIgLAXQgIARgVAAQgPAAgIgEgAgLgaQAAAIAEAFQAFAGAIAAIASgBIAAgjIgSgBQgRAAAAASg");
	this.shape_55.setTransform(105,-59.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#24129A").s().p("AAzBMQgLAAgGgGQgIgHAAgLIAAgmIgzAAIAAA+IgTAAQgKAAgHgGQgHgHAAgLIAAh/IAWAAQAJAAAGAGQAGAFAAAJIAAAkIAzAAIAAg4IAVAAQAJAAAGAFQAHAGAAAJIAACDg");
	this.shape_56.setTransform(89.7,-59.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#24129A").s().p("ABJBeQgQAAgGgHQgFgFAAgNIAAgJQgSgDgVAAIgJAAQgPAAgbADIAAAJQAAANgGAFQgFAHgQAAIgPAAIAAg/IATgEIAGgVQAKgYANgdQAPghAMgNIALAAQAMAAAKANQAdAsAQA/IAUAEIAAA/gAAVAXQgJgmgMgYQgMAYgKAmIArAAIAAAAg");
	this.shape_57.setTransform(72.3,-57.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#24129A").s().p("Ag3A7QgXgWAAgjQABgkAVgWQAWgWAkAAQAgAAAVAUQAYAVAAAkQgBAlgUAVQgWAWglAAQgiAAgUgUgAgaggQgIALAAAUQAAAuAkAAQAPAAAJgLQAJgMAAgUQAAgugkAAQgQAAgJAMg");
	this.shape_58.setTransform(54.5,-59.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#24129A").s().p("ABpBeQgQAAgGgHQgFgFAAgNIAAgMIiEAAQhBAAAAg9IAAhZIAXAAQAJAAAGAFQAGAGAAAIIAABKQAAANAGAEQAFAFAQAAIAPAAIAAhzIAUAAQAJAAAGAFQAHAFAAAJIAABgIApAAIAAhzIAVAAQAJAAAGAFQAIAFAAAJIAABgQAPAAAFAGQAGAFAAAPIAAAug");
	this.shape_59.setTransform(33.6,-57.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AnVHXQjCjEAAkTQAAkSDCjDQDDjDESAAQETAADDDDQDCDDAAESQAAETjCDEQjDDCkTAAQkSAAjDjCg");
	this.shape_60.setTransform(-34.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift1, new cjs.Rectangle(-111.7,-67,223.5,137.4), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#24129A").ss(2).p("AhHhqQBHgHBDAnQAgATAVATQANgNBXg1QABAqgBBLQgBBRgDAOQgBABgugkQgvgkAAABQgVAbg/ASQg4ARgvgBQg/gCgvgfQgrgbgCgeQgBgdAggiQAqguBMgIg");
	this.shape.setTransform(99.3,778.9,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24129A").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_1.setTransform(85.2,778,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#24129A").ss(2).p("Ag6gMQAAAAAlAOQAqAOAhgDQAQgCgdgU");
	this.shape_2.setTransform(98.3,788.4,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#24129A").ss(2).p("AhwAQQAOgPAcgMQA5gbBEAKQBFAKgMAZQgGANgUAL");
	this.shape_3.setTransform(97.1,768.8,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// OBJECTS
	this.instance = new lib.fish1();
	this.instance.parent = this;
	this.instance.setTransform(-106.5,964.9,1,1,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3675C9").s().p("A3bJ7IAAz7MAu3AAAIAASfQg0gDhPAPIiiAhQj8AxkBgEQiCgCncglQnJgkjAAAQjkAAk/AzQiMAWhBAGQgvAEgsAAQg0AAgvgGg");
	this.shape_4.setTransform(0,1283.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3675C9").s().p("A3bEAIAAn5QBVgLBpAJQBAAGCNAWQE/AzDkAAQDAAAHJgkQHcglCCgCQEBgED8AyICiAhQBPAOA0gDIAAGdg");
	this.shape_5.setTransform(0,1199.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3675C9").s().p("EgXbAs4MAAAhaLMAu3AAAMAAABang");
	this.shape_6.setTransform(0,290);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgXbAk6MAAAhJtQBVgLBpAJQBAAGCNAWQE/AzDkAAQDBAAHIgkQHdglCBgCQEBgED8AyICiAhQBPAOA0gDMAAABIRg");
	this.shape_7.setTransform(0,951.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#84CDF2").s().p("EgXbCPwMAAAkffMAu3AAAMAAAEffg");
	this.shape_8.setTransform(0,920);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,0,300,1840), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-98.5,-253.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(320));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,284.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(320));

	// wave
	this.instance_2 = new lib.wave("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-214.5,271.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(309).to({_off:false},0).to({alpha:1},10).wait(1));

	// Слой_28
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,620,1,1,0,0,0,0,920);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(309).to({_off:false},0).to({alpha:1},10).wait(1));

	// gift3
	this.instance_4 = new lib.gift3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(234.5,38.6,1,1,0,0,0,-2,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({x:44.5},15,cjs.Ease.backOut).wait(86));

	// gift2
	this.instance_5 = new lib.gift2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-289.9,204.3,1,1,0,0,0,0,-4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(234).to({_off:false},0).to({x:6.1},15,cjs.Ease.backOut).wait(71));

	// gift1
	this.instance_6 = new lib.gift1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-263.7,-116.8,1,1,0,0,0,-0.1,1.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(204).to({_off:false},0).to({x:-19.5},15,cjs.Ease.backOut).wait(101));

	// ic3
	this.instance_7 = new lib.ic3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-58,188,0.02,0.02);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(134).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.quadOut).wait(45).to({y:-432},15,cjs.Ease.quadInOut).to({_off:true},1).wait(115));

	// t2_3
	this.instance_8 = new lib.t2_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-58.7,101.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(134).to({_off:false},0).to({alpha:1},10).wait(45).to({y:-518.3},15,cjs.Ease.quadInOut).to({_off:true},1).wait(115));

	// arrow
	this.instance_9 = new lib.arrow_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(84.8,146.6,0.02,0.02,0,-35.8,144.2,-43,-12.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(124).to({_off:false},0).to({regX:-41.1,regY:-15,scaleX:1,scaleY:1,skewX:-36,skewY:144,y:146.5},10,cjs.Ease.backOut).wait(55).to({y:-473.5},15,cjs.Ease.quadInOut).to({_off:true},1).wait(115));

	// ic2
	this.instance_10 = new lib.ic2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(71,67,0.02,0.02,0,0,0,0,2.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},10,cjs.Ease.quadOut).wait(65).to({y:-553},15,cjs.Ease.quadInOut).to({_off:true},1).wait(115));

	// t2_2
	this.instance_11 = new lib.t2_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(71.7,-22.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(114).to({_off:false},0).to({alpha:1},10).wait(65).to({y:-642.6},15,cjs.Ease.quadInOut).to({_off:true},1).wait(115));

	// arrow
	this.instance_12 = new lib.arrow_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-67,-4.4,0.02,0.02,35.8,0,0,-43,-12.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(104).to({_off:false},0).to({regX:-41.1,regY:-15,scaleX:1,scaleY:1,rotation:36,y:-4.5},10,cjs.Ease.backOut).wait(75).to({y:-624.5},15,cjs.Ease.quadInOut).to({_off:true},1).wait(115));

	// ic1
	this.instance_13 = new lib.ic1_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-75,-77,0.02,0.02,0,0,0,-2.5,-2.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(94).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},10,cjs.Ease.quadOut).wait(85).to({y:-697},15,cjs.Ease.quadInOut).to({_off:true},1).wait(115));

	// t2_1
	this.instance_14 = new lib.t2_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-75.4,-167.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(94).to({_off:false},0).to({alpha:1},10).wait(85).to({y:-787.4},15,cjs.Ease.quadInOut).to({_off:true},1).wait(115));

	// btn
	this.instance_15 = new lib.btn();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-55.7,40.8,0.02,0.02);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.quadOut).wait(10).to({x:-55.6,y:40.7},0).to({scaleX:1.1,scaleY:1.1,x:-55.7,y:40.8},5).wait(10).to({scaleX:1,scaleY:1},5).wait(10).to({y:-579.2},14,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// t1_5
	this.instance_16 = new lib.t1_5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-27.1,-10.9,0.02,0.02,0,0,0,-2.5,0);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1},10,cjs.Ease.quadOut).wait(45).to({y:-630.9},14,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// t1_4
	this.instance_17 = new lib.t1_4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-84.6,-49.2);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(20).to({_off:false},0).to({alpha:1},10).wait(50).to({y:-669.2},14,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// t1_3
	this.instance_18 = new lib.t1_3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(276.2,-105.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10).to({_off:false},0).to({x:-8.8},10,cjs.Ease.quadOut).wait(60).to({y:-725.5},14,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// t1_2
	this.instance_19 = new lib.t1_2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(271.2,-135.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(5).to({_off:false},0).to({x:-13.8},10,cjs.Ease.quadOut).wait(65).to({y:-755.4},14,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// t1_1
	this.instance_20 = new lib.t1_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(249.6,-175.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:-35.4},10,cjs.Ease.quadOut).wait(70).to({y:-795.8},14,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// wave
	this.instance_21 = new lib.wave("synched",0,false);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-214.5,271.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(80).to({startPosition:80},0).to({y:-348.4,startPosition:94},14,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// ship
	this.instance_22 = new lib.ship_1("synched",0,false);
	this.instance_22.parent = this;
	this.instance_22.setTransform(269.5,194.1,0.8,0.8,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regX:0,regY:0,scaleX:1,scaleY:1,x:2,y:191,startPosition:20},20,cjs.Ease.quadOut).wait(60).to({startPosition:80},0).to({y:-429,startPosition:94},14,cjs.Ease.quadInOut).to({_off:true},1).wait(225));

	// bg
	this.instance_23 = new lib.bg();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(80).to({y:-920},14,cjs.Ease.quadInOut).wait(95).to({y:-1540},15,cjs.Ease.quadInOut).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-580,-300,1043.7,1840);


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
p.nominalBounds = new cjs.Rectangle(-280,299,1043.7,1841);
// library properties:
lib.properties = {
	id: '4DA95AFC61EA4A53B21202BBA843F7A6',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/bird1.png", id:"bird1"},
		{src:"images/bird2.png", id:"bird2"},
		{src:"images/gift_img_1.png", id:"gift_img_1"},
		{src:"images/gift_img_2.png", id:"gift_img_2"},
		{src:"images/gift_img_3.jpg", id:"gift_img_3"},
		{src:"images/ic1.png", id:"ic1"},
		{src:"images/ic2.png", id:"ic2"},
		{src:"images/ic3.png", id:"ic3"},
		{src:"images/ship.png", id:"ship"}
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
an.compositions['4DA95AFC61EA4A53B21202BBA843F7A6'] = {
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