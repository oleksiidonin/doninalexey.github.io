(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo_old = function() {
	this.initialize(img.logo_old);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,74);


(lib.old_boxes = function() {
	this.initialize(img.old_boxes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,285);


(lib.pavel = function() {
	this.initialize(img.pavel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,569,700);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,84);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,90);// helper functions:

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


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-134,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.t2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-134,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-134,-45,268,90), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-107,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-107,-42,214,84), null);


(lib.pavel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.pavel();
	this.instance.parent = this;
	this.instance.setTransform(-284.5,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pavel_1, new cjs.Rectangle(-284.5,-350,569,700), null);


(lib.old_boxes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.old_boxes();
	this.instance.parent = this;
	this.instance.setTransform(-135,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.old_boxes_1, new cjs.Rectangle(-135,-143,269,285), null);


(lib.logo_old_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo_old();
	this.instance.parent = this;
	this.instance.setTransform(-73,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_old_1, new cjs.Rectangle(-73,-37,146,74), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t
	this.instance = new lib.t2_1();
	this.instance.parent = this;
	this.instance.setTransform(-284,-133.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({x:4,y:-197},10,cjs.Ease.get(1)).wait(55).to({alpha:0},10).wait(1));

	// t
	this.instance_1 = new lib.t1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-320,-171.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({x:-32,y:-235},10,cjs.Ease.get(1)).wait(60).to({alpha:0},10).wait(1));

	// pavel
	this.instance_2 = new lib.pavel_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-399.5,-55);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({x:434.7,y:70},33).to({_off:true},1).wait(74));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("EgrlBFQUgrkgDGgAWAAHUAAEgAbgHbgznUgHfg0MAAJAAKQLWocLXoaQWwwzAMAMUAAKAAKAjLgAoUAjJgAnAAKAAJQAKAKIcBQQIdBRAJAJQAMAMhKLgIhOLdQAKAKCWHgQCXHgAJAKQAKAKAeImQAfInAJAJQAKAKAoMNQApMLAJAKQAKAKgeLGQgdLGAJAKQAKAKDnI6QDmI7AKAJQAKAKigFyQigFzAJAJQAKAKziEFQziEEAKAKIgGAAUgB2AAAgp+gC+g");
	var mask_graphics_25 = new cjs.Graphics().p("EgpnBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjLgAoUAjKgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB3AAAgp9gC+g");
	var mask_graphics_26 = new cjs.Graphics().p("EgnpBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjLgAoUAjKgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_27 = new cjs.Graphics().p("EglsBFQUgrkgDGgAWAAHUAAEgAbgHbgznUgHfg0MAAJAAKQLWocLXoaQWwwzAMAMUAAKAAKAjLgAoUAjJgAnAAKAAJQAKAKIcBQQIdBRAJAJQAMAMhKLgIhOLdQAKAKCWHgQCXHgAJAKQAKAKAeImQAfInAJAJQAKAKAoMNQApMLAJAKQAKAKgeLGQgdLGAJAKQAKAKDnI6QDmI7AKAJQAKAKigFyQigFzAJAJQAKAKziEFQziEEAKAKIgGAAUgB3AAAgp9gC+g");
	var mask_graphics_28 = new cjs.Graphics().p("EgjuBFQUgrkgDGgAWAAHUAAEgAbgHbgznUgHfg0MAAJAAKQLWocLXoaQWwwzAMAMUAAKAAKAjLgAoUAjJgAnAAKAAJQAKAKIcBQQIdBRAJAJQAMAMhKLgIhOLdQAKAKCWHgQCXHgAJAKQAKAKAeImQAfInAJAJQAKAKAoMNQApMLAJAKQAKAKgeLGQgdLGAJAKQAKAKDnI6QDmI7AKAJQAKAKigFyQigFzAJAJQAKAKziEFQziEEAKAKIgGAAUgB3AAAgp9gC+g");
	var mask_graphics_29 = new cjs.Graphics().p("EghwBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjLgAoUAjKgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB3AAAgp9gC+g");
	var mask_graphics_30 = new cjs.Graphics().p("EgfyBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjLgAoUAjKgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB3AAAgp9gC+g");
	var mask_graphics_31 = new cjs.Graphics().p("Egd0BFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjLgAoUAjKgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_32 = new cjs.Graphics().p("Egb3BFQUgrkgDGgAWAAHUAAEgAbgHbgznUgHfg0MAAJAAKQLWocLXoaQWwwzAMAMUAAKAAKAjLgAoUAjJgAnAAKAAJQAKAKIcBQQIdBRAJAJQAMAMhKLgIhOLdQAKAKCWHgQCXHgAJAKQAKAKAeImQAfInAJAJQAKAKAoMNQApMLAJAKQAKAKgeLGQgdLGAJAKQAKAKDnI6QDmI7AKAJQAKAKigFyQigFzAJAJQAKAKziEFQziEEAKAKIgGAAUgB3AAAgp9gC+g");
	var mask_graphics_33 = new cjs.Graphics().p("EgZ5BFQUgrkgDGgAWAAHUAAEgAbgHbgznUgHfg0MAAJAAKQLWocLXoaQWwwzAMAMUAAKAAKAjLgAoUAjJgAnAAKAAJQAKAKIcBQQIdBRAJAJQAMAMhKLgIhOLdQAKAKCWHgQCXHgAJAKQAKAKAeImQAfInAJAJQAKAKAoMNQApMLAJAKQAKAKgeLGQgdLGAJAKQAKAKDnI6QDmI7AKAJQAKAKigFyQigFzAJAJQAKAKziEFQziEEAKAKIgGAAUgB3AAAgp9gC+g");
	var mask_graphics_34 = new cjs.Graphics().p("EgX7BFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjLgAoUAjKgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB3AAAgp9gC+g");
	var mask_graphics_35 = new cjs.Graphics().p("EgV9BFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_36 = new cjs.Graphics().p("EgUABFQUgrkgDGgAWAAHUAAEgAbgHbgznUgHfg0MAAJAAKQLWocLXoaQWwwzAMAMUAAKAAKAjKgAoUAjKgAnAAKAAJQAKAKIcBQQIdBRAJAJQAMAMhKLgIhOLdQAKAKCWHgQCXHgAJAKQAKAKAeImQAfInAJAJQAKAKAoMNQApMLAJAKQAKAKgeLGQgdLGAJAKQAKAKDnI6QDmI7AKAJQAKAKigFyQigFzAJAJQAKAKziEFQziEEAKAKIgGAAUgB3AAAgp9gC+g");
	var mask_graphics_37 = new cjs.Graphics().p("EgSCBFQUgrkgDGgAWAAHUAAEgAbgHbgznUgHfg0MAAJAAKQLWocLXoaQWwwzAMAMUAAKAAKAjKgAoUAjKgAnAAKAAJQAKAKIcBQQIdBRAJAJQAMAMhKLgIhOLdQAKAKCWHgQCXHgAJAKQAKAKAeImQAfInAJAJQAKAKAoMNQApMLAJAKQAKAKgeLGQgdLGAJAKQAKAKDnI6QDmI7AKAJQAKAKigFyQigFzAJAJQAKAKziEFQziEEAKAKIgGAAUgB3AAAgp9gC+g");
	var mask_graphics_38 = new cjs.Graphics().p("EgQEBFQUgrkgDGgAWAAHUAAEgAbgHbgznUgHfg0MAAJAAKQLWocLXoaQWwwzAMAMUAAKAAKAjKgAoUAjKgAnAAKAAJQAKAKIcBQQIdBRAJAJQAMAMhKLgIhOLdQAKAKCWHgQCXHgAJAKQAKAKAeImQAfInAJAJQAKAKAoMNQApMLAJAKQAKAKgeLGQgdLGAJAKQAKAKDnI6QDmI7AKAJQAKAKigFyQigFzAJAJQAKAKziEFQziEEAKAKIgGAAUgB3AAAgp9gC+g");
	var mask_graphics_39 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_40 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_41 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_42 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_43 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_44 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_45 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_46 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_47 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_48 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_49 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_50 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_51 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_52 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_53 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_54 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_55 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_56 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");
	var mask_graphics_57 = new cjs.Graphics().p("EgOXBFQUgrkgDGgAXAAHUAAFgAbgHbgznUgHgg0MAAKAAKQLVocLYoaQWvwzAMAMUAAKAAKAjKgAoUAjLgAnAAKAAJQAKAKIcBQQIcBRAKAJQAMAMhLLgIhNLdQAKAKCWHgQCWHgAKAKQAKAKAeImQAeInAKAJQAKAKAoMNQAoMLAKAKQAKAKgeLGQgeLGAKAKQAKAKDmI6QDnI7AJAJQAKAKigFyQigFzAKAJQAJAKzhEFQziEEAJAKIgFAAUgB4AAAgp8gC+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:-654.1,y:-126}).wait(1).to({graphics:mask_graphics_25,x:-641.5,y:-122.2}).wait(1).to({graphics:mask_graphics_26,x:-629,y:-118.5}).wait(1).to({graphics:mask_graphics_27,x:-616.4,y:-114.7}).wait(1).to({graphics:mask_graphics_28,x:-603.8,y:-111}).wait(1).to({graphics:mask_graphics_29,x:-591.2,y:-107.2}).wait(1).to({graphics:mask_graphics_30,x:-578.6,y:-103.4}).wait(1).to({graphics:mask_graphics_31,x:-566.1,y:-99.7}).wait(1).to({graphics:mask_graphics_32,x:-553.5,y:-95.9}).wait(1).to({graphics:mask_graphics_33,x:-540.9,y:-92.2}).wait(1).to({graphics:mask_graphics_34,x:-528.3,y:-88.4}).wait(1).to({graphics:mask_graphics_35,x:-515.8,y:-84.6}).wait(1).to({graphics:mask_graphics_36,x:-503.2,y:-80.9}).wait(1).to({graphics:mask_graphics_37,x:-490.6,y:-77.1}).wait(1).to({graphics:mask_graphics_38,x:-478,y:-73.4}).wait(1).to({graphics:mask_graphics_39,x:-463.7,y:-69.6}).wait(1).to({graphics:mask_graphics_40,x:-438.6,y:-65.8}).wait(1).to({graphics:mask_graphics_41,x:-413.4,y:-62.1}).wait(1).to({graphics:mask_graphics_42,x:-388.2,y:-58.3}).wait(1).to({graphics:mask_graphics_43,x:-363.1,y:-54.6}).wait(1).to({graphics:mask_graphics_44,x:-337.9,y:-50.8}).wait(1).to({graphics:mask_graphics_45,x:-312.8,y:-47.1}).wait(1).to({graphics:mask_graphics_46,x:-287.6,y:-43.3}).wait(1).to({graphics:mask_graphics_47,x:-262.5,y:-39.5}).wait(1).to({graphics:mask_graphics_48,x:-237.3,y:-35.8}).wait(1).to({graphics:mask_graphics_49,x:-212.2,y:-32}).wait(1).to({graphics:mask_graphics_50,x:-187,y:-28.3}).wait(1).to({graphics:mask_graphics_51,x:-161.8,y:-24.5}).wait(1).to({graphics:mask_graphics_52,x:-136.7,y:-20.7}).wait(1).to({graphics:mask_graphics_53,x:-111.5,y:-17}).wait(1).to({graphics:mask_graphics_54,x:-86.4,y:-13.2}).wait(1).to({graphics:mask_graphics_55,x:-61.2,y:-9.5}).wait(1).to({graphics:mask_graphics_56,x:-36.1,y:-5.7}).wait(1).to({graphics:mask_graphics_57,x:-10.9,y:-1.9}).wait(75));

	// bgImg
	this.instance_3 = new lib.bgImg_1();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(97).to({alpha:0},10).wait(1));

	// logo_old
	this.instance_4 = new lib.logo_old_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(132));

	// old_boxes
	this.instance_5 = new lib.old_boxes_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,68.1,0.02,0.02,0,0,0,0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0.1,regY:0.4,scaleX:0.86,scaleY:0.86,y:68.4},10,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},47).to({_off:true},1).wait(74));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(132));

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
	id: '644D72D00ABB4547A3C6A77E89ED3EB5',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/logo_old.jpg", id:"logo_old"},
		{src:"images/old_boxes.png", id:"old_boxes"},
		{src:"images/pavel.png", id:"pavel"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"}
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
an.compositions['644D72D00ABB4547A3C6A77E89ED3EB5'] = {
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