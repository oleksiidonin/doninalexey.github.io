(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,72);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("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JAAQAJAAAHgHQAHgHAAgLQAAgJgHgIQgGgHgKAAQgJAAgIAHgANNAdQgJgJAAgPQAAgNAJgKQAJgKANAAQAOAAAIAKQAIAKAAAOIAAADIgzAAQABAKAGAGQAGAFAKAAQAMAAAIgJIAGAGQgLAMgQAAQgNAAgKgKgAN3ABQAAgIgGgGQgFgGgJAAQgIAAgGAGQgGAFgBAJIApAAIAAAAgAK8AhQgHgFAAgKQAAgKAIgFQAIgFAMAAQAKAAAKACIAAgBQAAgIgFgFQgFgEgKAAQgJAAgKAEIgDgIQAMgFALAAQAOAAAHAHQAHAHAAAMIAAAmIgJAAIAAgJQgJALgPAAQgJAAgIgGgALEAIQgFAEAAAGQAAAGAFAEQAFADAGAAQAJAAAGgFQAHgFAAgHIAAgGQgKgDgJAAQgIAAgGADgAIoAdIAFgHQAKAIAMAAQAHAAAEgDQAFgDAAgFQAAgFgEgDQgFgDgHAAIgJAAIAAgIIAJAAQAGAAAEgCQAEgDAAgFQAAgEgEgDQgEgCgGAAQgMAAgIAGIgEgGQALgJAOAAQALAAAGAFQAGAFAAAIQAAAKgKADQAMAFAAALQAAAIgHAGQgHAGgMAAQgPAAgMgKgAg0AhQgHgFAAgKQAAgKAHgFQAIgFAMAAQALAAAJACIAAgBQAAgIgFgFQgFgEgJAAQgJAAgLAEIgCgIQAMgFALAAQAOAAAHAHQAHAHAAAMIAAAmIgKAAIAAgJQgJALgOAAQgJAAgIgGgAgsAIQgFAEAAAGQAAAGAEAEQAGADAGAAQAIAAAHgFQAGgFAAgHIAAgGQgJgDgKAAQgIAAgFADgAlUAdIAFgHQAJAIAMAAQAHAAAFgDQAEgDAAgFQAAgFgEgDQgEgDgIAAIgIAAIAAgIIAIAAQAHAAAEgCQAEgDAAgFQAAgEgEgDQgEgCgGAAQgMAAgIAGIgFgGQALgJAOAAQAMAAAFAFQAHAFAAAIQAAAKgLADQAMAFAAALQAAAJgHAFQgHAGgLAAQgQAAgLgKgAmzAdQgJgKAAgOQAAgNAJgKQAJgKAOAAQAQAAALAMIgGAGQgJgJgLAAQgJAAgHAGQgGAGgBAIIAdAAIAAAIIgdAAQABAJAGAGQAIAHAIAAQALAAAJgLIAGAGQgFAHgGADQgGADgJAAQgOAAgKgKgAn9AhQgHgFAAgKQAAgKAHgFQAIgFAMAAQALAAAJACIAAgBQAAgIgFgFQgFgEgJAAQgJAAgLAEIgCgIQAMgFALAAQAOAAAHAHQAHAHAAAMIAAAmIgKAAIAAgJQgJALgOAAQgJAAgIgGgAn1AIQgFAEAAAGQAAAGAEAEQAGADAGAAQAIAAAHgFQAGgFAAgHIAAgGQgJgDgKAAQgIAAgFADgAwfAhQgIgFAAgKQAAgKAIgFQAIgFAMAAQAKAAAKACIAAgBQAAgIgFgFQgFgEgJAAQgKAAgKAEIgDgIQANgFALAAQANAAAIAHQAGAGAAANIAAAmIgJAAIAAgJQgIALgPAAQgKAAgHgGgAwYAIQgFAEAAAGQAAAGAFAEQAFADAGAAQAIAAAIgFQAGgFAAgHIAAgGQgJgDgKAAQgIAAgGADgArmAlIABgIIAFABIAEgBIAEgDIADgJIACgPIABgcIAuAAIAAA/IgKAAIAAg3IgbAAIAAACQAAAOgBAKQgBAJgCAHQgBAGgEADQgDAEgCAAIgHABIgIgBgARbAlIAAgyIgnAyIgJAAIAAg/IAKAAIAAAyIAmgyIAKAAIAAA/gAQNAlIAAgyIgmAyIgJAAIAAg/IAJAAIAAAyIAngyIAJAAIAAA/gAPAAlIAAgcIgmAAIAAAcIgJAAIAAg/IAJAAIAAAbIAmAAIAAgbIAJAAIAAA/gAMqAlIAAgaIgKAEQgGACgFAAQgKAAgGgFQgGgFAAgJIAAgYIAKAAIAAAXQAAAFADADQAEADAGAAQALAAAJgGIAAgcIAKAAIAAA/gAKcAlIAAgcIglAAIAAAcIgKAAIAAg/IAKAAIAAAbIAlAAIAAgbIAKAAIAAA/gAIRAlIAAgyIgnAyIgJAAIAAg/IAKAAIAAAyIAmgyIAJAAIAAA/gAFvAlIAAhNIgxAAIAABNIgKAAIAAhWIBFAAIAABWgADwAlIAAgNIALAAIAAANgADTAlIAAgXIgSAAIgSAXIgLAAIATgZQgHgBgFgGQgFgEAAgHQAAgJAHgGQAGgFALAAIAfAAIAAA/gAC0gPQgEAEAAAFQAAAGAEACQAEAEAHAAIAUAAIAAgYIgUAAQgHAAgEADgACLAlIAAgcIglAAIAAAcIgJAAIAAg/IAJAAIAAAbIAlAAIAAgbIAKAAIAAA/gAA/AlIAAgcIgmAAIAAAcIgJAAIAAg/IAJAAIAAAbIAmAAIAAgbIAJAAIAAA/gAhLAlIgXgdIgOAOIAAAPIgJAAIAAg/IAJAAIAAAkIAkgkIALAAIgbAbIAcAkgAiXAlIAAgyIgnAyIgJAAIAAg/IAKAAIAAAyIAmgyIAJAAIAAA/gAkPAlIAAg/IAfAAQAKAAAGAEQAFAFAAAHQAAAKgKAEQAOADAAANQAAAIgHAFQgGAEgLAAgAkFAdIAVAAQAHAAAEgDQAEgCAAgGQAAgFgEgCQgEgDgIAAIgUAAgAkFAAIATAAQAHAAADgBQAEgDAAgFQAAgDgEgEQgEgCgFAAIgUAAgAoUAlIgXgdIgOAOIAAAPIgJAAIAAg/IAJAAIAAAkIAkgkIALAAIgbAbIAcAkgApgAlIAAgyIgnAyIgJAAIAAg/IAKAAIAAAyIAmgyIAJAAIAAA/gAryAlIgYgdIgNAOIAAAPIgKAAIAAg/IAKAAIAAAkIAjgkIAMAAIgbAbIAcAkgAs/AlIAAgyIgmAyIgJAAIAAg/IAJAAIAAAyIAngyIAJAAIAAA/gAu2AlIAAg/IAfAAQAJAAAGAEQAGAEAAAIQAAAKgLAEQAOADAAANQAAAIgGAFQgGAEgLAAgAutAdIAWAAQAGAAAFgDQAEgDAAgFQAAgEgFgDQgEgDgIAAIgUAAgAutAAIAUAAQAHAAADgBQADgCAAgGQAAgEgDgDQgEgCgGAAIgUAAgAxNAlIAAg3IgXAAIAAgIIA4AAIAAAIIgXAAIAAA3gAQ8goQgFgEgBgHIAHgBQACAJAJAAQAIAAADgJIAGABQgBAHgFAEQgEAEgHAAQgIAAgEgEgAoMhFIADgIQAGACAFAAQADAAAEgCQADgDADgHIgehAIALAAIAYA2IAUg2IALAAIgcBDQgDAJgGAFQgFAEgHAAQgHAAgHgDgAryhDIAAhUIAKAAIAAANQAKgPAOAAQANAAAJAKQAJAJAAAPQAAAPgJAKQgJAJgNAAQgPAAgJgOIAAAggAriiJQgHAHAAALQAAAKAHAIQAHAHAKAAQAKAAAGgHQAGgGAAgMQAAgLgGgHQgHgHgJAAQgKAAgHAHgAwOhDIAAgUIhIAAIAAhXIAKAAIAABOIAyAAIAAhOIAKAAIAABOIAMAAIgCAdgABDhHIAAgQIg4AAIAAhAIAJAAIAAA4IAlAAIAAg4IAJAAIAAA4IAKAAIgBAYgAoehHIAAgQIg0AAIgCAQIgHAAIAAgYIAHAAQAIgQAAgdIAAgLIAuAAIAAA4IAKAAIgCAYgApDiGQAAAZgHAOIAjAAIAAgwIgcAAgAL4hfQgJgJAAgPQAAgOAJgKQAIgKAOAAQANAAAJAKQAIAKAAAPIAAADIg0AAQACAKAGAGQAGAFAJAAQAMAAAJgJIAGAGQgLAMgQAAQgOAAgJgKgAMih7QgBgKgFgFQgFgGgKAAQgIAAgGAGQgFAFgCAKIAqAAIAAAAgAJhhfIAFgHQAKAIAMAAQAHAAAEgDQAFgDAAgFQAAgFgEgDQgFgDgHAAIgJAAIAAgIIAJAAQAHAAADgDQAEgDAAgFQAAgEgEgDQgEgCgGAAQgMAAgHAGIgFgGQALgJAOAAQALAAAGAFQAGAFAAAIQAAALgKADQAMAFAAALQAAAIgHAGQgHAGgMAAQgPAAgMgKgAIkhfQgJgJAAgPQAAgOAJgKQAJgKANAAQAOAAAIAKQAIAKAAAPIAAADIgzAAQAAAKAHAGQAGAFAJAAQAMAAAJgJIAGAGQgLAMgQAAQgOAAgJgKgAJOh7QAAgJgGgGQgFgGgJAAQgJAAgFAGQgHAGAAAJIApAAIAAAAgAHWhfQgJgJAAgSIABgTQABgHACgDIAEgHQACgDAEgDQAEgCAGgCIAkgIIACAIIgjAJQgKACgEAFQgEAGgBAJQAJgOASAAQAMAAAKAKQAJAKAAANQAAAOgKAJQgJAKgOAAQgPAAgJgKgAHdiHQgGAGAAALQAAAJAGAIQAHAHAKAAQAJAAAHgHQAHgHAAgKQAAgLgHgGQgGgHgKAAQgKAAgHAHgAEKhfQgJgKAAgOQAAgOAJgKQAKgKAOAAQAPAAAJAKQAKAKAAAOQAAAOgKAKQgJAKgPAAQgOAAgKgKgAERiJQgGAHAAALQAAALAGAHQAIAHAJAAQALAAAGgHQAHgIAAgKQAAgKgHgIQgGgHgLAAQgKAAgHAHgAhZhfQgKgLAAgNQAAgOAKgKQAJgKAOAAQAQAAAKAMIgFAGQgJgJgLAAQgJAAgHAGQgGAGgCAJIAeAAIAAAIIgeAAQABAJAHAGQAIAHAIAAQAKAAAKgLIAGAGQgFAHgHADQgGADgJAAQgOAAgJgKgAjGhfQgKgJAAgPQAAgOAJgKQAJgKANAAQAPAAAHAKQAJAKAAAPIgBADIgzAAQABAKAHAGQAFAFAKAAQALAAAJgJIAGAGQgKAMgQAAQgOAAgJgKgAich7QgBgJgFgGQgFgGgKAAQgIAAgGAGQgGAGgBAJIAqAAIAAAAgAqbhfQgJgLAAgNQAAgNAJgLQAKgKAPAAQAOAAAKAKQAJALAAANQAAAOgKAKQgJAKgPAAQgOAAgKgKgAqUiJQgGAHAAALQAAALAHAHQAHAHAKAAQAKAAAHgHQAGgHAAgLQAAgLgHgHQgGgHgLAAQgKAAgHAHgAvzhfQgKgJAAgPQAAgOAJgKQAJgKANAAQAOAAAIAKQAIAKAAAPIAAADIgzAAQABAKAGAGQAGAFAKAAQALAAAJgJIAGAGQgLAMgQAAQgNAAgJgKgAvJh7QgCgKgFgFQgFgGgJAAQgIAAgGAGQgGAFgBAKIAqAAIAAAAgABthXIABgIIAFABIAEgBIAEgDIADgJIACgPIABgYIAAgFIAuAAIAABAIgKAAIAAg4IgbAAIAAACIgBAZQgBAKgCAGQgCAGgDADQgDAEgDAAQgBABgFAAIgIgBgARWhXIAAgxIgYAhIgYghIAAAxIgJAAIAAhAIAJAAIAYAiIAYgiIAJAAIAABAgAP/hXIAAgzIgnAzIgJAAIAAhAIAKAAIAAAzIAmgzIAJAAIAABAgAOxhXIAAgcIglAAIAAAcIgKAAIAAhAIAKAAIAAAcIAlAAIAAgcIAKAAIAABAgANkhXIAAgaIgKAEQgFACgGAAQgJAAgHgFQgGgFAAgKIAAgYIAKAAIAAAXQAAAGADADQAEADAGAAQALAAAJgGIAAgdIAKAAIAABAgALVhXIAAg4IglAAIAAA4IgKAAIAAhAIA4AAIAABAgAGNhXIAAgxIgYAhIgXghIAAAxIgKAAIAAhAIAJAAIAYAiIAZgiIAJAAIAABAgADxhXIgXgdIgOAOIAAAPIgJAAIAAhAIAJAAIAAAlIAkglIAMAAIgbAcIAbAkgABZhXIAAhAIAKAAIAABAgAjphXIAAgcIgmAAIAAAcIgJAAIAAhAIAJAAIAAAcIAmAAIAAgcIAJAAIAABAgAlqhXIAAg4IgXAAIAAgIIA4AAIAAAIIgXAAIAAA4gAmRhXIgXgdIgOAOIAAAPIgJAAIAAhAIAJAAIAAAlIAkglIALAAIgbAcIAcAkgAsQhXIAAg4IglAAIAAA4IgJAAIAAhAIA4AAIAABAgAuAhXIAAgzIgnAzIgJAAIAAhAIAKAAIAAAzIAmgzIAJAAIAABAgAufilQgGgEAAgHIAGgBQADAJAIAAQAJAAACgJIAHABQgBAHgFAEQgEAEgIAAQgHAAgEgEgABYilIAAgLIALAAIAAALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-112.4,-17.8,225,35.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-119.1,-33.1,238.2,66.2), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-120,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-120,-36,240,72), null);


(lib.light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap0G+Iap1yIgRBII5QUhIImKeIKOoUIgMBLIqJIUIpnrggAw0hqQACACKBoZQKAoYABABQACACF1gEQF1gEACABQADAD7EWcIkxlsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_mc, new cjs.Rectangle(-107.7,-118.2,215.4,236.4), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3B47D").ss(2,2,0,3).p("AgcgtIArAkAAJAPIglAgAAUgFIAHAFIgHAG");
	this.shape.setTransform(10.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3B47D").s().p("ABxAKIjsAAIAAgTIDzAAIAEAAIAAAEIAAAHIAAAEIAAAEg");
	this.shape_1.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-12.7,-6,27.1,12.1), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.light_mc();
	this.instance.parent = this;
	this.instance.setTransform(-8.5,-7);
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-110,-120,219,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-155.7,-132.7,311.5,265.4), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(37.7,-0.2,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:40.1},3,cjs.Ease.get(1)).to({x:37.7},2).wait(3).to({x:40.1},3,cjs.Ease.get(1)).to({x:37.7},2).wait(1));

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5A0QgPgPAAgXQAAgUAPgQQAPgPAXgBQAXAAAQAQIgMAOQgMgNgPAAQgPAAgJAKQgKALAAAOQAAAPAKALQAJAKAPAAQAPAAANgMIAMALQgSASgXAAQgWAAgPgPgAEtBBIAAhUIggAAIAAgQIBSAAIAAAQIggAAIAABUgADjBBIAAhJIgzBJIgRAAIAAhkIASAAIAABJIAzhJIARAAIAABkgAB2BBIgKgZIgwAAIgLAZIgSAAIAthlIAQAAIAtBlgABlAZIgRgoIgSAoIAjAAgAicBBIgKgZIgxAAIgKAZIgTAAIAthlIARAAIAtBlgAitAZIgSgoIgRAoIAjAAgAkbBBIAAgrIgxAAIAAArIgSAAIAAhkIASAAIAAApIAxAAIAAgpIARAAIAABkgAC0hAIALgCQACAKAKAAQAIAAAEgKIALACQgEAVgTAAQgUAAgDgVg");
	this.shape.setTransform(-25.9,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("AsKCpIAAlRIYVAAIAAFRg");
	this.shape_1.setTransform(-3.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AsKCpIAAlRIYVAAIAAFRg");
	this.shape_2.setTransform(-3.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-17.8,157.8,35.8);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(0,13,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(136));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.6,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,266.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(136));

	// btn
	this.instance_3 = new lib.btn("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.1,183.9,1,1,0,0,0,-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({mode:"synched",loop:false},0).wait(41));

	// ligth
	this.instance_4 = new lib.light();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.2,-174.7);
	this.instance_4.alpha = 0;
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({alpha:0.398},10).to({alpha:0},10).wait(25).to({alpha:0.398},10).to({alpha:0},10).wait(25).to({alpha:0.398},10).to({alpha:0},10).wait(1));

	// img
	this.instance_5 = new lib.img3_1();
	this.instance_5.parent = this;
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).wait(6));

	// img
	this.instance_6 = new lib.img2_1();
	this.instance_6.parent = this;
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({alpha:1},10).to({_off:true},45).wait(51));

	// img
	this.instance_7 = new lib.img1_1();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(136));

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
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: 'B12536D93F55493D883A9CFDBC1C5E1B',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/img3.jpg", id:"img3"},
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
an.compositions['B12536D93F55493D883A9CFDBC1C5E1B'] = {
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