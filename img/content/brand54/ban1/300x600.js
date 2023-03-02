(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/car1.png", id:"car1"},
		{src:"images/car2.png", id:"car2"},
		{src:"images/car3.png", id:"car3"},
		{src:"images/fly1.png", id:"fly1"},
		{src:"images/fly2.png", id:"fly2"},
		{src:"images/fly3.png", id:"fly3"},
		{src:"images/gift1.png", id:"gift1"},
		{src:"images/gift2.png", id:"gift2"},
		{src:"images/gift3.png", id:"gift3"},
		{src:"images/logo1.png", id:"logo1"},
		{src:"images/logo3.png", id:"logo3"},
		{src:"images/tioma.png", id:"tioma"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,276);


(lib.car2 = function() {
	this.initialize(img.car2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,247);


(lib.car3 = function() {
	this.initialize(img.car3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,238);


(lib.fly1 = function() {
	this.initialize(img.fly1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,276);


(lib.fly2 = function() {
	this.initialize(img.fly2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,136);


(lib.fly3 = function() {
	this.initialize(img.fly3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,147);


(lib.gift1 = function() {
	this.initialize(img.gift1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,75);


(lib.gift2 = function() {
	this.initialize(img.gift2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,97);


(lib.gift3 = function() {
	this.initialize(img.gift3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,119);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,80);


(lib.logo3 = function() {
	this.initialize(img.logo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,18);


(lib.tioma = function() {
	this.initialize(img.tioma);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,57);


(lib.і = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgKBiQgGgHAAgJIgBhnQgBgKAGgGQAFgGAHgBQAJAAAFAHQAGAGAAAJIABBnQABAKgGAHQgGAFgIABQgHgBgFgFgAgOhAQgGgHgBgJQAAgJAHgHQAGgHAIAAQAIAAAHAHQAHAHAAAIQAAAJgHAHQgGAHgJAAQgHAAgHgGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-10.4,4.5,20.8);


(lib.я2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhGBeQgIgIAAgKQAAgJAHgGIAqgvQgUgFgMgKQgNgOgBgVQAAg/BGgBIA2gBQAMAAAIAIQAHAIAAAOIACCNQABANgIAJQgHAIgMAAQgMAAgIgIQgIgIAAgOIgBgwIAAAAIg3BHQgHAIgNABQgLAAgHgIgAAEg9QgKAAgHAGQgIAHABAMQAAAMAHAGQAHAHAKgBIATAAIgBgyg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-10.2,15.8,20.5);


(lib.я = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("Ag8BPQgFgGAAgJQgBgHAGgGIAkgnQgRgEgLgJQgLgMAAgRQgBg2A8gBIAuAAQAJgBAHAHQAGAHABAMIABB3QABALgHAIQgGAHgKAAQgLAAgGgHQgHgHAAgLIAAgpIgBAAIguA7QgFAHgMABQgJAAgHgHgAADg0QgIAAgGAGQgGAFAAALQAAAJAHAGQAGAGAHgBIAQAAIAAgqg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-8.6,13.4,17.4);


(lib.ь = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("Ag0BDQgGgGAAgKIgBhlQAAgKAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAKIABAgIAagBQAYAAAOALQAPAKAAAXQAAAWgNANQgNAMgWAAIgyABQgIAAgGgGgAgTAoIAYAAQAQAAAAgPQAAgGgFgDQgEgEgJAAIgWAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-7.4,12.1,14.8);


(lib.щ2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("ABqB6QgIgJAAgNIAAgbIjcACQgMABgIgJQgIgIAAgOIgCiMQAAgOAIgIQAHgJAMAAQAMAAAIAIQAHAJABANIABB7IA3AAIgBh8QAAgNAHgJQAIgIAMAAQALAAAGAIQAIAIAAAOIACB7IA3gBIgCh7QAAgOAIgIQAHgIAMgBQAMAAAIAJQAHAIABANIABB8IADAAQAMgBAIAJQAIAIAAANIAAAtQABANgIAJQgHAIgMABQgMAAgIgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.3,-13,30.6,26.1);


(lib.ч = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AAbBEQgFgGgBgJIAAgfIgXABQgZAAgQgOQgQgLgBgWIAAgaQAAgJAGgGQAFgHAIAAQAKAAAFAGQAGAGAAAKIAAAYQAAAQAVAAIAUAAIgBgpQAAgJAGgHQAFgGAIAAQAJAAAGAGQAGAGAAAJIABBoQAAAKgGAGQgFAGgIAAQgJAAgGgGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-7.4,12.3,14.9);


(lib.у2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgsCIQgHgHAAgJQAAgJADgHIAXg7Ig+iUQgDgGAAgHQAAgKAIgHQAIgHAJAAQAVAAAHATIAlBmIAmhnQAIgUATAAQAJAAAIAHQAJAHAAAJQAAAJgCAFIhYDiQgHAWgRAAQgNAAgIgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.1,-14.3,18.3,28.7);


(lib.у = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AggBiQgFgFAAgGQAAgDACgJIARgrIgthqQgCgGAAgEQAAgHAGgFQAGgFAGAAQAPAAAFANIAbBKIAbhKQAGgOAOAAQAHgBAFAFQAHAFAAAHQAAAGgCAEIhACjQgEAQgMAAQgKAAgGgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-10.4,13.3,20.8);


(lib.т2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgRBeQgHgJgBgNIgBh8IgmABQgLAAgHgGQgGgGgBgMQAAgKAHgHQAHgHAKAAICBgBQAagBAAAYQAAAMgIAHQgGAFgMAAIgmABIACB7QAAAOgIAIQgHAIgMABQgKAAgIgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-10.2,18.1,20.4);


(lib.т = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgMBEQgFgHAAgJIgChZIgbAAQgJAAgEgEQgFgFAAgIQAAgHAFgFQAFgFAHAAIBdgBQATgBAAASQAAARgTAAIgcABIACBYQAAAKgFAGQgGAGgJAAQgGAAgGgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-7.4,13.1,14.8);


(lib.Т1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgNBsQgHgHAAgLIgCifIgjABQgLAAgGgHQgFgGAAgJQAAgJAFgGQAGgHAKgBIB0gBQAKAAAGAHQAGAGAAAJQAAAJgFAGQgGAHgKAAIgjABIACCfQAAALgHAHQgGAGgLABQgJAAgGgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-11.5,16.2,23.1);


(lib.с = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgmA2QgUgWAAgfQgBgdAUgXQAUgXAcgBQARAAAOAFQASAHAAANQAAAGgEAGQgEAHgHAAQgEAAgLgEQgKgEgGABQgOAAgJAMQgIAMAAAOQAAAQAJALQAKANANgBQAFAAALgEIANgEQAHAAAFAFQAFAFAAAHQAAANgSAIQgOAGgQABIgBAAQgcAAgUgWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-7.6,12,15.3);


(lib.р2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhVCIQgIgIAAgOIgDjfQAAgNAHgJQAIgIAMgBQAWAAAFAXQAIgMAOgHQAOgHAOAAQApAAAZAhQAWAeABAsQAAAmgYAeQgZAhgoAAQgaAAgWgSIABBCQAAAOgHAIQgIAJgMAAIgBAAQgLAAgHgIgAAAhdQgTABgMARQgKAPAAAVQABAXAKAPQAMARATgBQATAAAMgQQALgQgBgVQAAgVgLgQQgLgSgUAAIAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-14.4,19.5,28.9);


(lib.р = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("Ag9BiQgGgGAAgJIgCihQAAgKAFgGQAGgGAIgBQAQAAAEARQALgTAYAAQAeAAASAYQAQAWABAfQAAAcgRAVQgSAYgdAAQgSAAgQgNIAAAwQABAKgGAGQgGAGgIAAQgJAAgFgGgAgWg2QgHALAAAQQAAAQAIALQAIALANAAQAPAAAIgLQAIgMAAgPQgBgPgHgMQgJgNgOAAQgOABgIAMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-10.4,14.1,20.9);


(lib.п2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhPBeQgIgJAAgNIgCiNQAAgNAIgIQAHgJAMAAIB7gCQALAAAIAJQAIAHAAAOIACCNQAAANgIAJQgHAIgMAAQgMABgHgJQgIgIgBgNIgBh8IhEABIABB7QAAAOgHAIQgIAJgMAAQgMAAgHgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-10.2,18.1,20.5);


(lib.О1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhbBjQglgngBg7QAAg6AjgoQAkgoA5gBQA3AAAlAoQAmAnAAA7QABA5gkAoQgkApg5AAIgBABQg3AAgkgogAAAhWQgiABgTAbQgRAYAAAiQABAlARAYQAUAaAggBQAiAAATgbQASgYgBgjQAAgkgSgYQgUgaggAAIAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-13.9,26,27.8);


(lib.о2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhEBKQgbgdgBgsQAAgoAagfQAcghAqAAQAogBAdAgQAbAeABAqQAAAqgaAfQgbAfgrAAIgBAAQgoAAgcgegAgggjQgKAPAAAUQABAWAKAQQAMARATAAQAUgBANgRQAKgQAAgVQgBgVgKgPQgMgSgUAAQgUABgMASg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-10.4,19.5,21);


(lib.о = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgxA1QgUgVAAggQgBgdAUgWQAUgXAeAAQAdgBAVAXQATAWABAeQAAAfgSAWQgVAWgfAAIAAABQgdAAgUgXgAAAgmQgOAAgJAMQgHAMAAAOQAAAQAIALQAJAMANAAQAPAAAJgNQAHgLgBgPQABgOgIgMQgJgNgOAAIAAABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-7.6,14.1,15.2);


(lib.н2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhPBfQgIgIAAgOIgCiPQAAgOAIgIQAHgIAMAAQAMgBAHAJQAIAIAAANIABAtIBFgBIgBgtQAAgNAHgJQAIgIAMAAQALAAAIAIQAIAIAAAOIACCPQAAANgIAJQgHAIgMAAQgMABgHgJQgIgIgBgOIAAg0IhFABIABA0QAAAOgHAIQgIAJgMAAIgBAAQgLAAgHgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-10.3,18.1,20.7);


(lib.н = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("Ag5BFQgFgHAAgJIgChnQAAgKAFgGQAGgGAJAAQAJAAAFAFQAFAGAAAKIABAhIAxgBIAAghQgBgJAGgHQAFgFAJAAQAJAAAFAFQAFAHAAAJIACBnQAAAKgFAGQgGAGgJAAQgIAAgFgFQgGgGAAgKIgBgmIgxAAIABAnQAAAJgFAHQgGAFgJAAQgIAAgGgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-7.5,13.1,15);


(lib.м2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("Ah2BgQgHgIgBgKIABgGIAZiVQABgIAKgHQAKgIANAAQAMgBAKAHQAJAGADAJIAgBhIAAAAIAdhiQADgIAJgHQAJgHANgBQANAAAKAIQAKAHABAJIAdCUIABAFQAAALgHAIQgHAHgMAAQgZABgDgYIgPhhIgBAAIgdBmQgGAUgWAAQgVAAgGgTIgghlIAAAAIgNBhQgCAYgaABQgLAAgHgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.7,-10.4,25.5,20.8);


(lib.м = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhkBRQgGgGAAgJIAAgFIAVh+QABgHAIgGQAJgHALAAQAKAAAJAGQAHAFADAHIAbBSIAAAAIAYhSQADgIAHgFQAJgGAKgBQALAAAJAHQAIAGABAHIAZB9IAAAFQAAAJgGAHQgGAGgJAAQgWAAgCgUIgNhSIgBAAIgZBXQgFAQgSAAQgRABgGgRIgbhWIAAAAIgLBTQgDAUgUAAIgCABQgIAAgGgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-8.8,21.6,17.6);


(lib.л = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhLBQQgFgFAAgJQgBgOAOgFQATgGAAghIgBhDQAAgLAGgHQAHgHAKgBIBTgBQAKABAGAGQAHAIAAALIACB3QAAALgHAIQgGAGgKABQgKAAgHgHQgGgHAAgLIgChpIglABIABAtQAAApgQAXQgPAVgbABQgJAAgGgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.2,-8.7,16.4,17.4);


(lib.к2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhMBfQgIgJAAgNIgCiPQAAgNAHgJQAIgIAMAAQALgBAIAJQAIAIAAANIABAzIA5hGQAJgLAPgBQAKAAAHAIQAGAHAAAJQAAAKgKAMIgyA0IBDA9QAGAHABALQAAALgHAIQgHAIgLgBQgKAAgRgQIhBhFIgBAAIABA4QAAAOgHAJQgIAIgMAAQgMAAgHgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.7,-10.3,17.6,20.7);


(lib.к = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("Ag3BFQgFgHgBgJIgBhnQAAgKAGgGQAFgGAIAAQAJgBAGAGQAGAHgBAJIABAkIAogyQAIgIAKAAQAHgBAFAGQAFAFAAAHQAAAIgIAIIgkAmIAxArQAFAFAAAIQAAAIgGAGQgEAFgIAAQgIAAgLgMIgvgyIgBAAIABApQAAAKgFAGQgGAGgJAAIgBAAQgHAAgGgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-7.4,12.7,15);


(lib.й2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhPCCQgIgJAAgNIgCiPQAAgNAHgJQAIgJAMABQAMAAAIAHQAHAJAAAOIABBMIABAAIBChbQANgRAOAAQAMgBAIAJQAIAIAAAOIACCPQAAANgHAJQgIAIgMAAQgMABgIgJQgHgIgBgNIgBhQIAAAAIhHBiQgJAMgOABQgLAAgIgIgAgjhTQgVgLAAgTQAAgKAEgFQAEgIAJAAQAMAAAJAMQAJANAKAAQAJAAAKgNQAJgNANAAQAHAAAFAHQAFAIAAAHQAAATgUALQgRAKgVABQgTAAgRgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-13.8,18.1,27.7);


(lib.и2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhPBfQgIgIAAgOIgCiPQAAgNAIgJQAHgIAMAAQAMAAAHAIQAIAIAAAOIABBMIABAAIBDhbQANgRAOAAQAMAAAHAIQAHAIABAOIACCPQAAAOgIAIQgHAIgMABQgMAAgHgIQgJgJAAgNIAAhOIgBAAIhHBgQgKANgNAAQgMAAgHgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-10.3,18.1,20.7);


(lib.и = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("Ag5BFQgGgHAAgJIgBhnQAAgKAFgGQAGgGAIAAQAJAAAGAFQAFAGAAAKIABA3IABAAIAvhBQAJgMALAAQAIAAAGAFQAFAHABAJIABBnQAAAKgFAGQgFAGgJAAQgJAAgGgFQgFgGAAgKIgBg5IgBABIgzBFQgHAJgJAAQgIAAgGgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-7.5,13.1,15);


(lib.е = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgwA2QgVgUAAgiQgBgdAUgWQAUgXAeAAQAcgBAWAXQAUAWAAAaQAAAQgRAAIhSABQACAOALAIQAKAGANAAQALgBAPgHQAOgJAEABQAGgBAFAGQAFAFAAAHQABALgVALQgVALgXAAIgBABQgeAAgUgWgAgVghQgIAJgBANIA9gBQgCgNgIgJQgJgIgMAAQgMABgJAIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.1,-7.6,14.2,15.2);


(lib.Д1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhrCGQgHgHAAgLIgBgsQAAgMAHgHQAHgHAKAAQAHAAAIgnQAHglgBggIAAgzQAAgLAHgHQAGgHAKAAIBrgBQAKgBAHAHQAHAHAAALIACCfIAFAAQAKAAAHAGQAHAHAAAMIABAsQAAALgHAHQgGAHgLAAQgLAAgGgGQgHgHAAgMIgBgaIiFABIAAAbQAAAMgHAHQgGAGgLAAIgBAAQgKAAgGgGgAgWhgIAAAeQABAdgFAiQgFAggIARIBNgBIgCiOg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,-14.1,23.3,28.2);


(lib.д2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhnB6QgIgJAAgOIAAgsQgBgNAIgJQAIgIALAAIADAAQAOgvgChLQAAgPAIgHQAHgIAMAAIBfgBQAMAAAIAHQAHAJABAOIABB5IADAAQAMgBAIAIQAHAIABAOIAAAtQAAANgHAJQgIAIgMAAQgLABgIgJQgIgIAAgNIAAgbIhzABIABAbQAAANgIAJQgHAJgMgBQgMAAgIgHgAgQhUQgBBEgMArIA7gBIgChvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.3,-13,22.6,26);


(lib.д = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhKBYQgGgHAAgJIAAggQAAgKAFgGQAGgGAIgBIACAAQAKgfgBg4QAAgKAGgGQAFgGAJAAIBEAAQAIgBAGAGQAFAGABAKIABBXIACAAQAIAAAGAGQAGAGAAAJIAAAhQAAAKgFAGQgGAGgIAAQgJAAgFgFQgGgHAAgJIAAgUIhTABIABATQAAAKgGAHQgFAFgJAAIgBABQgIAAgFgGgAgLg9QgBAzgIAdIAqAAIgBhQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,-9.4,16.4,18.8);


(lib.г = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgyBPQgHgHAAgLIgBh9QgBgIAGgGQAGgGAJAAIBLgBQAWAAAAAUQABATgXABIgxABIABBoQABALgHAIQgGAHgKAAIgCAAQgJAAgGgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-8.6,12,17.3);


(lib.в = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("Ag1BDQgGgFAAgIIgBhrQAAgHAFgGQAGgFAIAAIAygBQARAAALAKQALAKAAAQQAAAVgSAJIAAABQANABAJAIQAJAKAAANQABAVgOAMQgMALgWABIg2ABQgHAAgGgGgAgUALIAAAiIAWAAQAJAAAFgFQAFgFAAgIQgBgQgUAAgAgVgOIAQAAQAOAAAAgQQAAgHgFgEQgEgEgFABIgQAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,-7.3,12.4,14.7);


(lib.Б1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("Ag+BcQgGgGAAgJIgCiYQAAgJAGgGQAGgFAJAAIBQgBQAJgBAFAGQAFAGAAAHQABAIgFAFQgFAGgKAAIg8ABIABAoIAegBQAfAAASANQAUANAAAeQABAcgSAQQgRAPgdABIg2AAIgCAAQgIAAgGgFgAgcAQIABAtIAeAAQALAAAHgHQAIgGgBgLQAAgKgHgGQgIgGgNAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-9.8,14.4,19.6);


(lib.а2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AhCBZQgVgRgBgfQgBhGB6AAIAAgPQAAgPgYAAQgQABgOAJQgPAKgFAAQgMAAgGgHQgGgHAAgJQAAgQAagNQAYgNAXAAQAmAAAVAQQAUAOAAAeIACB0QAAAMgHAIQgHAJgMAAQgKABgGgEQgHgEgDgNQgHALgPAHQgOAFgNABIgCAAQggAAgUgQgAgMAMQgYAGAAAWQAAAKALAFQAJAEANAAQAoAAgBgpIAAgJQglABgLACg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-10.5,17.9,21);


(lib.а = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgvBAQgQgMAAgXQgBgxBYgBIAAgLQAAgKgSAAQgLAAgKAHQgLAHgDAAQgIAAgFgFQgEgFAAgGQgBgMATgJQARgJARgBQAbAAAPALQAPALAAAWIABBTQAAAJgFAGQgFAGgJAAQgPAAgDgOQgFAIgLAEQgLAEgIABIgCAAQgXAAgOgMgAgIAJQgSAEAAAQQABAOAXAAQAdgBgBgdIAAgGQgaAAgIACg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.4,-7.6,13,15.3);


(lib.tioma_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tioma();
	this.instance.setTransform(-83,-28.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-28.5,166,57);


(lib.logo3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo3();
	this.instance.setTransform(-59,-9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,-9,118,18);


(lib.logo1_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.logo1();
	this.instance.setTransform(-37.5,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-40,75,80);


(lib.gift3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gift3();
	this.instance.setTransform(-83,-59.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-59.5,166,119);


(lib.gift2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gift2();
	this.instance.setTransform(-81.5,-48.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.5,-48.5,163,97);


(lib.gift1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gift1();
	this.instance.setTransform(-77.5,-37.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.5,-37.5,155,75);


(lib.fly3Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fly3();
	this.instance.setTransform(-79,-73.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79,-73.5,158,147);


(lib.fly2Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fly2();
	this.instance.setTransform(-79,-68);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79,-68,158,136);


(lib.fly1Mc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fly1();
	this.instance.setTransform(-175,-138);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-175,-138,350,276);


(lib.ClipGroup = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1nO1IAA9pMArPAAAIAAdpg");
	mask.setTransform(138.4,95);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak4OwQkHgRjehXQjdhWiSiNQiXiSgvi4Qgwi5BAi8QA+i4CdilQCdikDjh4QDsh8EWg6QEUg5ERASQEHASDeBXQDdBWCSCNQCXCSAvC4QAlCOg+CxQg/C2iTCrQidC3jaCDQjxCPkaA7QjTArjNAAQhDAAhCgFg");
	this.shape.setTransform(138.4,95);

	this.shape.mask = mask;

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,276.8,189.9);


(lib.car3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car3();
	this.instance.setTransform(-105.5,-119);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.5,-119,211,238);


(lib.car2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car2();
	this.instance.setTransform(-122.5,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122.5,-123.5,245,247);


(lib.car1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car1();
	this.instance.setTransform(-92,-138);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-138,184,276);


(lib.btn = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEJBNQgTgWgBghQAAgeAVgWQASgWAcAAQAVAAAOAPQAHgNANAAQAVAAAAAfIAABUQAAAfgVAAQgOAAgGgPQgPARgVAAQgcAAgSgVgAEpgCQgHAIgBAQQABAQAHALQAIAKAMAAQAMAAAJgLQAHgLAAgPQAAgQgHgIQgJgLgMAAQgLAAgJALgAgrBNQgUgWAAghQAAggAUgUQAVgWAeAAQAfAAAVAWQATAUABAgQgBAhgTAWQgVAVgfAAQgeAAgVgVgAgKgDQgJAIAAARQAAARAIAKQAIAKALAAQAMAAAHgKQAJgLgBgQQABgQgJgJQgHgKgMAAQgLAAgHAKgAldBXQgSgLAAgPQAAgGAFgFQAEgFAHAAQAJAAAKAKQALAKARAAQALgBAGgEQAHgGAAgJQAAgNgTAAIgJAAQgKAAgDgDQgDgDAAgIQAAgNAQAAIAGAAQASAAgBgLQABgNgUAAQgMAAgMAIQgMAGgDAAQgHAAgGgGQgFgEAAgHQAAgNAUgJQASgIAZAAQAaAAAOAJQAQAKAAATQAAASgZAMQANADAJAKQAIAJAAALQAAAWgTAOQgUANgdAAQgaAAgSgLgAn5BNQgUgWgBghQABggAUgUQAVgWAfAAQAgAAAUAWQAUAUABAgQgBAhgUAWQgUAVggAAQgfAAgVgVgAnZgDQgJAIAAARQAAARAJAKQAHAKANAAQAMAAAJgKQAHgLABgQQgBgQgHgJQgJgKgMAAQgMAAgIAKgAqqBCIAAiEQAAgRAHgHQAGgHASAAIAoAAQAgAAAUASQASASABAeQAAAegSAQQgSARggAAIgeAAIAAAiQAAAfgVAAQgXAAAAgfgAp+gFIATAAQAfAAAAgaQAAgagfABIgTAAgAJ/BBIAAgtIgxBEQgFAIgKAAQgWAAAAgfIAAhUQAAgfAWAAQAVAAAAAfIAAAtIArhAQAJgMANAAQAWAAAAAfIAABUQAAAfgWAAQgWAAAAgfgAHBBBIAAhMIgTAAQgYAAgBgTQABgKAFgEQAGgEANAAIBQAAQAOAAAGAEQAGAEAAAKQAAATgaAAIgSAAIAABMQAAAfgVAAQgWAAAAgfgAC1BBIAAgYQgLAGgVABQgYAAgOgMQgQgNAAgYIAAgSQgBgfAWAAQAVAAAAAfIAAAPQAAAUAVAAQAJAAAHgEQAIgGgBgGIAAgTQAAgfAWAAQAVAAAAAfIAABUQAAARgGAHQgFAHgKAAQgWAAAAgfgAh/BBIAAhMIgsAAIAABMQAAAfgWAAQgVAAgBgfIAAhSQAAgSAHgGQAFgHAKAAIBXAAQALAAAFAGQAFAHAAASIAABSQAAAfgVAAQgVAAAAgfg");
	this.shape.setTransform(-0.7,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AKjjqI1FAAQhhAAhFBFQhFBFAABgQAABhBFBFQBFBFBhAAIVFAAQBhAABFhFQBFhFAAhhQAAhghFhFQhFhFhhAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006CB5").s().p("AqiDqQhgABhFhGQhGhFABhgQgBhgBGhEQBFhGBgABIVFAAQBhgBBFBGQBEBEAABgQAABghEBFQhFBGhhgBg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-24.5,184,49);


(lib.bg = function() {
	this.initialize();

	// Слой 7
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-380,-435.4,1320.7,735.4);


(lib._2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014798").s().p("AgTCCQgJgJAAgMQAAgMAJgIQAIgKALABQALgBAJAJQAJAIAAAMQAAANgIAIQgJAJgMAAQgKABgJgJgAgSAzQgIgIgBgLIgBiQQgBgLAIgIQAIgGALAAQAKAAAIAGQAIAIAAALIACCPQAAAMgIAHQgHAHgLAAIgBAAQgKAAgHgGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-13.9,6,27.8);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(1));

	// !2
	this.instance = new lib._2();
	this.instance.setTransform(57.5,34.6,1.2,1.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(1));

	// я2
	this.instance_1 = new lib.я2();
	this.instance_1.setTransform(41.8,38.3,1.2,1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(2));

	// н2
	this.instance_2 = new lib.н2();
	this.instance_2.setTransform(22.5,38.5,1.2,1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(3));

	// д2
	this.instance_3 = new lib.д2();
	this.instance_3.setTransform(0.9,41.6,1.2,1.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(4));

	// о2
	this.instance_4 = new lib.о2();
	this.instance_4.setTransform(-20.2,39,1.2,1.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(5));

	// щ2
	this.instance_5 = new lib.щ2();
	this.instance_5.setTransform(-45.9,41.9,1.2,1.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(6));

	// и2
	this.instance_6 = new lib.и2();
	this.instance_6.setTransform(81.8,-0.1,1.2,1.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(7));

	// к2
	this.instance_7 = new lib.к2();
	this.instance_7.setTransform(62.6,0.2,1.2,1.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(8));

	// н2
	this.instance_8 = new lib.н2();
	this.instance_8.setTransform(41.9,0.4,1.2,1.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(9));

	// у2
	this.instance_9 = new lib.у2();
	this.instance_9.setTransform(22.2,4.7,1.2,1.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(10));

	// р2
	this.instance_10 = new lib.р2();
	this.instance_10.setTransform(2.8,4.9,1.2,1.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(11));

	// а2
	this.instance_11 = new lib.а2();
	this.instance_11.setTransform(-18.6,1.2,1.2,1.2,0,0,0,-0.1,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({regX:0,scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(12));

	// д2
	this.instance_12 = new lib.д2();
	this.instance_12.setTransform(-39.5,4.4,1.2,1.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(13));

	// о2
	this.instance_13 = new lib.о2();
	this.instance_13.setTransform(-60.7,1.7,1.2,1.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(14));

	// п2
	this.instance_14 = new lib.п2();
	this.instance_14.setTransform(-81.7,2.1,1.2,1.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(15));

	// й2
	this.instance_15 = new lib.й2();
	this.instance_15.setTransform(66.3,-41.1,1.2,1.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(16));

	// у2
	this.instance_16 = new lib.у2();
	this.instance_16.setTransform(46.6,-33.4,1.2,1.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(17));

	// м2
	this.instance_17 = new lib.м2();
	this.instance_17.setTransform(24,-37.1,1.2,1.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(18));

	// и2
	this.instance_18 = new lib.и2();
	this.instance_18.setTransform(-0.1,-36.8,1.2,1.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(19));

	// р2
	this.instance_19 = new lib.р2();
	this.instance_19.setTransform(-21.1,-32.6,1.2,1.2,0,0,0,-0.1,-0.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(20));

	// т2
	this.instance_20 = new lib.т2();
	this.instance_20.setTransform(-41.4,-36.2,1.2,1.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(21));

	// О1
	this.instance_21 = new lib.О1();
	this.instance_21.setTransform(-64,-39.4,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-56.1,31.2,33.4);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(1));

	// и
	this.instance = new lib.и();
	this.instance.setTransform(81.2,33.7,1.38,1.38);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(1));

	// м
	this.instance_1 = new lib.м();
	this.instance_1.setTransform(60.8,34,1.2,1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(2));

	// о
	this.instance_2 = new lib.о();
	this.instance_2.setTransform(40.3,34.2,1.38,1.38);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(3));

	// ь
	this.instance_3 = new lib.ь();
	this.instance_3.setTransform(23.7,34.4,1.38,1.38);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(4));

	// Т1
	this.instance_4 = new lib.Т1();
	this.instance_4.setTransform(7.6,31.8,1.2,1.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(5));

	// о
	this.instance_5 = new lib.о();
	this.instance_5.setTransform(-17.4,35,1.38,1.38);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(6));

	// г
	this.instance_6 = new lib.г();
	this.instance_6.setTransform(-31.9,35.2,1.2,1.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(7));

	// о
	this.instance_7 = new lib.о();
	this.instance_7.setTransform(-47.9,35.4,1.38,1.38);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(8));

	// в
	this.instance_8 = new lib.в();
	this.instance_8.setTransform(-65,35.6,1.38,1.38);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(9));

	// с
	this.instance_9 = new lib.с();
	this.instance_9.setTransform(-80.6,35.8,1.38,1.38);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(10));

	// и
	this.instance_10 = new lib.и();
	this.instance_10.setTransform(95.2,1.5,1.38,1.38);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(11));

	// м
	this.instance_11 = new lib.м();
	this.instance_11.setTransform(74.8,1.8,1.2,1.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(12));

	// я
	this.instance_12 = new lib.я();
	this.instance_12.setTransform(55.3,2.1,1.2,1.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(13));

	// н
	this.instance_13 = new lib.н();
	this.instance_13.setTransform(38.9,2.2,1.38,1.38);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(14));

	// н
	this.instance_14 = new lib.н();
	this.instance_14.setTransform(21.1,2.4,1.38,1.38);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(15));

	// е
	this.instance_15 = new lib.е();
	this.instance_15.setTransform(3.6,2.7,1.38,1.38);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(16));

	// н
	this.instance_16 = new lib.н();
	this.instance_16.setTransform(-13.9,2.9,1.38,1.38);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(11).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(17));

	// г
	this.instance_17 = new lib.г();
	this.instance_17.setTransform(-28.9,3.2,1.2,1.2,0,0,0,-0.1,0);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({_off:false},0).to({regX:0,scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1,x:-28.8},3).wait(18));

	// я
	this.instance_18 = new lib.я();
	this.instance_18.setTransform(-43.8,3.4,1.2,1.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(9).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(19));

	// с
	this.instance_19 = new lib.с();
	this.instance_19.setTransform(-58.5,3.5,1.38,1.38);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(8).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(20));

	// о
	this.instance_20 = new lib.о();
	this.instance_20.setTransform(-75,3.7,1.38,1.38);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(7).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(21));

	// д
	this.instance_21 = new lib.д();
	this.instance_21.setTransform(-93.3,6.3,1.38,1.38);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(6).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(22));

	// ь
	this.instance_22 = new lib.ь();
	this.instance_22.setTransform(40.9,-29.8,1.38,1.38);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(5).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,y:-29.9},3).to({scaleX:1.15,scaleY:1.15,y:-29.8},3).wait(23));

	// с
	this.instance_23 = new lib.с();
	this.instance_23.setTransform(25.4,-29.6,1.38,1.38);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(4).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(24));

	// и
	this.instance_24 = new lib.и();
	this.instance_24.setTransform(8.9,-29.4,1.38,1.38);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(3).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(25));

	// л
	this.instance_25 = new lib.л();
	this.instance_25.setTransform(-9.4,-29.1,1.2,1.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(2).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(26));

	// і
	this.instance_26 = new lib.і();
	this.instance_26.setTransform(-21.5,-32.5,1.38,1.38);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},3).to({scaleX:1.15,scaleY:1.15},3).wait(27));

	// Д1
	this.instance_27 = new lib.Д1();
	this.instance_27.setTransform(-36.6,-29.1,1.2,1.2,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:-36.5},3).to({scaleX:1,scaleY:1},3).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-45.9,27.9,33.8);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Слой 25
	this.instance = new lib.tioma_1();
	this.instance.setTransform(-3.9,115.5,0.01,0.01);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(1).to({scaleX:0.03,scaleY:0.03,y:114.5,alpha:0.017},0).wait(1).to({scaleX:0.09,scaleY:0.09,y:111.5,alpha:0.07},0).wait(1).to({scaleX:0.2,scaleY:0.2,y:106.3,alpha:0.16},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:99.3,alpha:0.283},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:90.8,alpha:0.429},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:81.9,alpha:0.584},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:73.7,alpha:0.728},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:66.8,alpha:0.847},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:61.8,alpha:0.933},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:58.9,alpha:0.984},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:58,alpha:1},0).to({scaleX:1,scaleY:1,y:63.5},5).wait(1));

	// д
	this.instance_1 = new lib.д();
	this.instance_1.setTransform(76.9,13.9,1.2,1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(18));

	// і
	this.instance_2 = new lib.і();
	this.instance_2.setTransform(65.4,9,1.2,1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(19));

	// в
	this.instance_3 = new lib.в();
	this.instance_3.setTransform(55.4,12.1,1.2,1.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(20));

	// і
	this.instance_4 = new lib.і();
	this.instance_4.setTransform(37.7,9.3,1.2,1.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(21));

	// с
	this.instance_5 = new lib.с();
	this.instance_5.setTransform(28.6,12.4,1.2,1.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(22));

	// р
	this.instance_6 = new lib.р();
	this.instance_6.setTransform(14.5,15.4,1.2,1.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(23));

	// у
	this.instance_7 = new lib.у();
	this.instance_7.setTransform(-0.2,15.6,1.2,1.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(24));

	// к
	this.instance_8 = new lib.к();
	this.instance_8.setTransform(-13,12.9,1.2,1.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(25));

	// н
	this.instance_9 = new lib.н();
	this.instance_9.setTransform(-28,13.1,1.2,1.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(26));

	// о
	this.instance_10 = new lib.о();
	this.instance_10.setTransform(-43.2,13.3,1.2,1.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(27));

	// к
	this.instance_11 = new lib.к();
	this.instance_11.setTransform(-57.1,13.5,1.2,1.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(28));

	// в
	this.instance_12 = new lib.в();
	this.instance_12.setTransform(-78.9,13.8,1.2,1.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(29));

	// ь
	this.instance_13 = new lib.ь();
	this.instance_13.setTransform(67.5,-15.5,1.2,1.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(30));

	// т
	this.instance_14 = new lib.т();
	this.instance_14.setTransform(53.8,-15.2,1.2,1.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(31));

	// с
	this.instance_15 = new lib.с();
	this.instance_15.setTransform(41.1,-15.1,1.2,1.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(32));

	// а
	this.instance_16 = new lib.а();
	this.instance_16.setTransform(27.2,-14.9,1.2,1.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(33));

	// ч
	this.instance_17 = new lib.ч();
	this.instance_17.setTransform(12.9,-14.8,1.2,1.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(34));

	// у
	this.instance_18 = new lib.у();
	this.instance_18.setTransform(-0.8,-11.7,1.2,1.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(35));

	// и
	this.instance_19 = new lib.и();
	this.instance_19.setTransform(-22.3,-14.3,1.2,1.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(36));

	// р
	this.instance_20 = new lib.р();
	this.instance_20.setTransform(-37.5,-11.3,1.2,1.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(37));

	// е
	this.instance_21 = new lib.е();
	this.instance_21.setTransform(-52.9,-13.9,1.2,1.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(38));

	// Б1
	this.instance_22 = new lib.Б1();
	this.instance_22.setTransform(-67.7,-16.2,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleX:0.8,scaleY:0.8},3).to({scaleX:1,scaleY:1},3).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-27.9,17.2,23.5);


(lib.fly3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fly3Mc();
	this.instance.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},5,cjs.Ease.get(-1)).to({y:-2},5,cjs.Ease.get(1)).to({y:0},5,cjs.Ease.get(-1)).to({y:1.9},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-71.5,158,147);


(lib.fly2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fly2Mc();
	this.instance.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},5,cjs.Ease.get(-1)).to({y:2},5,cjs.Ease.get(1)).to({y:0},5,cjs.Ease.get(-1)).to({y:-1.9},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-70,158,136);


(lib.fly1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fly1Mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},5,cjs.Ease.get(1)).to({y:0},5,cjs.Ease.get(-1)).to({y:-5},5,cjs.Ease.get(1)).to({y:-1.8},4,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-138,350,276);


(lib.Group_2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(138.4,95,1,1,0,0,0,138.4,95);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276.9,189.9);


(lib.logo2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB212E").s().p("Al8CJIgngCIAngDIAsgFIA5gJIAhgFIAigHIAkgIIAmgJIAmgKIAngLIBMgaICZg5ICCg5QAhgNASgLIBHgpIgHAHQgMALgKAHIgjAZIgWAQIh2BBIgkANIiXA/IhPAZQgQAFgYAGIgoAJQgQAEgXADIgmAGIgjAEIgiADIg6ADIgugBg");
	this.shape.setTransform(4.6,10.2,0.303,0.303);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB212E").s().p("AnhCWQAZgXAQgNIAagUQARgOANgIIAigXIAkgXIAogXQAYgNASgIIAtgVQAcgNATgHIBjgkIBigdQAVgGAdgHIAygLIBegRQA4gKAdgCQAmgFAjAAQAXgBAhABQAgAAASAEQgSgBgfADQgVAAgjAFIhHALQgmAGgtAKQgwAKgrAMQhAAPghALIhiAdIhhAjQgTAHgbAMIgtARQgSAHgZAOIgoAUQgQAHgWANIgiAVIg7AlIgsAfIgmAdQAMgNAVgUg");
	this.shape_1.setTransform(-4.8,-9.5,0.303,0.303);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB212E").s().p("AhhDjQgxgcgahYIgFgYIgGghQgDgZAIhVQAJhlAAgZQAAgkAogNQARgGAGAAQAQgDAPAGQAVAJACAmQACAvAJAOIAJAOQAIAHAPAAQAIABAfgDQAigCAZAGQBNASAQBVQAPBPg9BFQgyA6hIAXQgfAKgcAAQgeAAgWgMgAgSgKQggAKgMAdQgKAaAIAdQAGAbAUAQQAYAUAcgKQAdgJARgeQASgegHgdQgHghgYgMQgPgJgRAAQgLAAgPAFg");
	this.shape_2.setTransform(18.6,-4.8,0.303,0.303);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB212E").s().p("AgpDtQg0gQgRgpQgJgVAPgRQAKgMANgEQAfgKAlAVQAiAVAfgJQAcgJAMgZQALgXgJgbQgMgkgsgJQgrgJgHgRQgIgSATghQAPgggMgbQgJgWgTgJQgSgIgWAHQgVAHgVAcQgVAdgUAGQgsAPgMghQgQgnAhgpQAegmAzgQQA8gTAvAIQBCAKAhA9QAPAcgEAgQgEAiAEAKQAHAQAnAYQAkAWANAsQAXBUg7A4QgjAig7ATQgkAMggAAQgYAAgYgIg");
	this.shape_3.setTransform(5,-1.2,0.303,0.303);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB212E").s().p("AhoAhQgOgeAngVQARgLAtgOQAqgOAZgCQArgCAMAcQANAfgnAVQgOAHguAQQgwAQgTABIgJABQgjAAgMgbg");
	this.shape_4.setTransform(-5.1,3.8,0.303,0.303);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB212E").s().p("AgnDtQhbgTgxhOQgDgGgHgRQgIgUgDgLQgHgiAchTQAbhTAkg/QAagtAsgNIAWgHQAOgCAGAKQAFALgUAxQgYAzAEAUQACANACADQAEAIAOABIAhAAQAbABAXAGQBEAVAqBPQAoBMgVA1QgTAxhAAUQgxAQguAAQgbAAgdgGgAgjATQghALgIAeQgIAbAPAaQAOAXAhAOQAiAQAfgKQAbgIAGgbQAGgagQgcQgRgfgZgNQgRgIgPAAQgNAAgOAEg");
	this.shape_5.setTransform(-15.6,5.3,0.303,0.303);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EB212E").s().p("AAACGQgIAAgEgGIh7iFQgIgJACgLQABgIAHgHQAigcAogoQASgSAYgFQAagGATAQQAMAKAEASQAFARADADQAEAEAagDQAZgDARAOQAUAQgBAdQgBAdgZAZQgvAwgzAqQgGAGgKAAIgDAAgAApgMQgNAFgMAJQgXAZAQATQAUAUAagZQAMgMAFgMQAHgRgLgJQgGgFgJAAQgFAAgHACgAgehFQgMADgJAIQgKAKgBAKQgBALAIAIQAIAJALgBQAMgBAKgKQAIgIAEgLQAEgPgIgJQgGgGgJAAIgJACg");
	this.shape_6.setTransform(24.9,8.8,0.303,0.303);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EB212E").s().p("AAcBaIhwiPQgHgIAGgMQAEgJAIgGQAJgHAKgCQAOgDAIAKIB0CJQAIAJgGANQgFAKgLAIQgQALgLAAQgJAAgGgIg");
	this.shape_7.setTransform(20.8,12.1,0.303,0.303);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB212E").s().p("AhSCMQgNgCgEgJIhQibQgGgLAHgKQAFgIALgFQAMgGAKABQAOABAHANIA5BiQAHAMAGAEQARAKAggSQAMgGAJgIQALgHABgLQABgJgGgJIhAhkQgPgXAcgQQAMgHALAAQALABAHAKIBIBkQAGAIAMACIAbAEQAJADAIAJIAOAPQANARADAIQAGASgUANQgVAOgVgPQgVgPgYAOQhHAphDAgQgIAEgIAAIgJgCg");
	this.shape_8.setTransform(16.3,15.5,0.303,0.303);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB212E").s().p("AhMB4QgEgMASgaQARgbgDgIQgDgJgfgKQgegKgKgbQgOgtApgcQATgOA1gSQAcgKAPgBQAXgBAHAQIBKCZQAHAPgMAKQgFAEgOAFQgQAHgHgBQgRgEgLgYQgKgTgNAEQgLADgNAlQgLAjgiAJQgMADgIAAQgLAAgCgHgAgehAQgOAFgHALQgGALAEAMQAEALALAFQAOAGARgFQAZgJgMgcQgHgVgSAAQgFAAgGACg");
	this.shape_9.setTransform(8.1,18.7,0.303,0.303);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB212E").s().p("AhBBfQgqgbgIgyQgIgsAdgmQAdgnA6gKQBAgMALAjQAGAVgSAEQgMACgLgCQgNgBgJACQgfAGgOAYQgLAVAFAYQAGAaAYAPQAXAQAjgHQAKgCAKgFQALgGAIgCQALgCAJAFQAHAFACAIQAHAVgbAPQgRAKgbAFQgWAEgTAAQgrAAghgWg");
	this.shape_10.setTransform(1.2,20.1,0.303,0.303);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EB212E").s().p("AgMBrQgOgFgBgMIgQiwQgBgKAMgHQAJgFAJAAQAMgBAIAEQANAFACANIAXCrQACAMgMAHQgKAGgPAAIgEAAQgJAAgIgCg");
	this.shape_11.setTransform(-4.5,20.9,0.303,0.303);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB212E").s().p("ABxBsQgGgHgGgbQgHgegGgNQgBgDgEgDQgEgCgCAAQgLgBgIAOQgDAGgKAYQgSAwgbgDQgcgDgNgyQgHgagDgHQgHgPgLgBQgDgBgDACQgEABgCADQgFAIgEAMIgHAVQgJAZgGAGQgKAJgYgEQgTgDgGgIQgGgGACgMQABgJA4icQAHgSAiAFQASADAKAFQAJAHADAMIALAkIAHAcQAHASAIAHQAEAEAEAAQACABAHgEQAJgEAIgSIAJgZIANgjQAFgMAJgEQALgEARABQAiACAGATQAPA7AbB0QABALgGAGQgHAGgTAAQgXgBgJgKg");
	this.shape_12.setTransform(-11.6,20.6,0.303,0.303);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EB212E").s().p("AAKAuQgNgEACgMQABgFAOgWIAUgYQAGgGAGAAIAOADQAIACAFAEQAHAGgBAGQgBAFgpApQgEAFgJABIgGABIgIgBgAhAAdQgQgDACgNQABgFAQgVIASgaQAFgGAHgBIAOACQAHACAGAEQAFAFgBAHQAAAFgmAqQgEAFgIACIgIABIgGAAg");
	this.shape_13.setTransform(24.2,-22.1,0.303,0.303);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB212E").s().p("ABABuQgbgDABgYIAGg7QAAgIgBgFQgCgHgJgBQgMgCgSAWIgZAiQgQATgPANQgGAFgXgBQgfgCAAgWIABifQAAgLAMgGQAJgEAJABQAOABAIAGQAIAGAAALIgCA4QAAAHADAIQADAJAIABQAQABAjgxQATgWARgMQAKgIAZAEQANACAJAGQANAIgBANIgUCZQgCAUgUAAIgJgBg");
	this.shape_14.setTransform(17.1,-21.6,0.303,0.303);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EB212E").s().p("Ah7BmQgFgFgCgLQgChuACg3QABgUAggBQARgCAKAEQAIADAHAMIAPAhIAKAYQAIARAIAGQAEADAEAAQAFAAABgDQAGgHAFgRIAGgZIAJghQADgLAJgFQAIgEASAAQAhAAAEAUQAOA3ARBtQAAALgFAFQgFAFgOgBQgRAAgHgKQgEgGgGgZQgGgdgFgMQgBgCgEgCIgFgCQgIAAgGANIgIAdQgKAugUAAQgSABgSgtQgJgWgEgHQgIgNgIABQgHABgCAGQgDAMgBAdQgBAZgDAHQgFAKgRABIgGABQgJAAgFgEg");
	this.shape_15.setTransform(8.8,-22,0.303,0.303);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EB212E").s().p("Ag/BdQgpgWgPguQgPgtAbgmQAbgmA3gKQA2gKArAbQAqAZAJAwQAJAugdAjQgbAhgxAJQgPACgMAAQgiAAgdgQgAgOg9QgbAFgNAWQgLAVAHAYQAHAXASAPQAWASAbgFQAcgFALgXQAKgUgFgWQgFgYgSgPQgRgPgUAAIgOABg");
	this.shape_16.setTransform(0.2,-21.2,0.303,0.303);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EB212E").s().p("AgTBhQgSgBgIgRIg/iKQgLgYAcgKQANgFAJAFQAJAEAHAPQANAaAHAHQALAKARAAQAIgBARgEQAhgJAXAJQAXAJAJAbQAOAmglAZQgOAJgpANQgiAMgOAAIgBAAgAANAAQgNAEgDAJQgEAJAEAKQAHAVAbgIQAKgDAGgGQAHgJgEgMQgEgIgJgFQgHgCgHAAQgFAAgFAAg");
	this.shape_17.setTransform(-7,-18.9,0.303,0.303);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EB212E").s().p("AAnBfIgyhfQgJgPgLgEQgIgCgNAEQgNAEgFgBQgKgBgGgLQgHgLAHgKQAEgHAIgEQA8gcArgSQAZgKAKAVQAFAMgFAHQgCAEgMAHQgLAHgDAHQgFAKAJARIAwBfQAGALgHAKQgFAHgIAEQgJADgGAAQgNAAgHgNg");
	this.shape_18.setTransform(-13,-17.7,0.303,0.303);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EB212E").s().p("AgsA8QgCgDgEgdIgEgeQgCgGAFgHQAEgGAFgEQANgHAIALQAFAIAJA2QACAIgEAFIgLAHQgIAFgGAAQgGAAgEgGgAASAWQgCgDgDgbIgDggQgBgGAFgHQAEgGAGgDQANgHAHALQADAFAJA6QABAIgEAEIgLAHQgIAEgGAAQgHAAgDgGg");
	this.shape_19.setTransform(-18,-16.4,0.303,0.303);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EB212E").s().p("AgIB9Ih7h8QgIgGAFgMQAEgJAHgGQAPgMAMADQAIACANAMIARAQQAJAGAIgGQAGgFgBgWIgBgcQAAgYADgIQADgKAQgMQAUgQAHAJQAFAHgCAuQgCAvAIAJQAHAIAzAKQAzAMAEAGQAGAGgIAJQgDAEgJAGQgNAKgKADQgGABgKgCIgRgEIgagHQgZgGgFAFQgHAGAEAHQABAEAFAFIANAPQAJAJABAFQAFAOgPAOQgLAJgJAAQgGAAgGgGg");
	this.shape_20.setTransform(-24.2,-10.2,0.303,0.303);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EB212E").s().p("AAtBPIiAh0QgHgHAEgMQADgKAGgGQAIgHAJgDQAMgEAJAIIB5B1QAIAIgCALQgCAJgIAHQgLAKgJAAQgHAAgGgFg");
	this.shape_21.setTransform(-27.9,-6.9,0.303,0.303);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EB212E").s().p("AAVBzIiKhkQgJgHgBgIQAAgJAGgHQAagiAjgqQAQgSAXgGQAXgGASAPQALALAFAPQAEAQADACQAEAEAXgBQAXgBAPAOQASAPABAYQACAXgRAUQgdAigiArQgEAGgKABIgBAAQgHAAgGgEgAAogIQgLAEgJAIQgTAXAVAQQAUAPASgWQAWgcgTgOQgGgFgHAAQgFAAgFADgAgfg6QgLAEgHAJQgIAJABALQAAAJAJAHQAJAHAKgCQAJgCAIgJQAHgIACgKQACgOgIgIQgGgFgHAAQgEAAgGACg");
	this.shape_22.setTransform(-31.3,-3.1,0.303,0.303);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EB212E").s().p("AALBQQgQgOgGgBQgDgBgZAHQgTAEgGgOQgBgCABgSQABgSgBgDQgCgDgMgNQgNgLgBgCQgHgPAOgFIAQgEQAKgEAFgFQAFgGAEgUQADgRAHgCQAHgCAOAJIASAOIAIACIAegHQARgEAGAPQABADgBARQgBASABACQACAEAMANIAOANQAGANgMAHQgWAGgKAIQgGAEgEATQgDATgIADIgDAAQgHAAgNgJg");
	this.shape_23.setTransform(35.1,-10.5,0.303,0.303);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EB212E").s().p("AALBPQgQgNgGgCQgDgBgaAHQgSAFgGgPIAAgUQAAgSgBgCQgBgEgNgMQgNgLgBgCQgEgQALgEIAQgFQALgDAFgGQAEgFAEgUQAEgRAHgDQAHgCANAKIATAOIAHACIAfgHQARgEAFAPQABACAAASQgBASABACQABAEANAMQANALABACQAGAOgNAGIgPAGQgLAEgGAEQgGAEgDAUQgEASgIADIgDABQgHAAgMgKg");
	this.shape_24.setTransform(-29.3,10,0.303,0.303);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EB212E").s().p("AsaOhQjDhHiLh1QhMg/g7hQQg8hRgkhaIgehcQgMg3gEgoQgLheAPhdQAZiqBlijQCmkOFEjAQEKidFGhGQEdg+EfAUQEOAVDRBWQDCBOB/B5QBbBTA6BpIARAhIgRggQg8hrhbhQQg/g5hMguQhQgwhognQjehRj9gFQkWgFkRBPQksBWj5CnQiOBhhhBmQh0B1hKCBQgjA9gdBQQgcBOgIBFQgKBPAIBJQADAdALAtIAXBKQA3CMCBBxQA4AxBNAuQBOAtBHAbQCPA6CyAbQCTAXCzgFQExgLEphoQENheDTijQC/iQB1i/QBkiiARimQANhygdh0IgIgaIAJAaQAdBygMB0QgOClheCqQhmC5jDCpQjLCvkPB1QktCBk8AfQhYAHhUAAQkgAAj1hYg");
	this.shape_25.setTransform(-0.2,0,0.303,0.303);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006EB5").s().p("Al8CJIgngDIAngDIAsgFIA6gIIAggFIAigHIBKgRIAmgKIAogMIBLgZQBpgpAwgQICDg5QAjgQAPgJIAngUIAYgPIAIgFIgHAHQgOANgIAFIgjAZIgWAPIiZBPQg7AZhdAlIhPAaIgpALIgnAIQgQAFgXADIglAFIgkAFIghADIgfACIgcABIgugBg");
	this.shape_26.setTransform(5.2,10.3,0.303,0.303);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006EB5").s().p("AnhCWIApgjIAagVQARgOANgIIAigXIAkgXIAogXQAYgMASgIIAtgWQAcgNATgHIBjgkIBigdQAhgKBDgOIAvgKIAvgHQAwgIAlgEQAsgFAdAAQAegBAaABQAgABASADQgSgBgfADQgeACgaADIhHALQgdAEg2AMQgoAJgzANIhhAaIhiAeIhhAiQgTAHgbAMIgtARQgSAIgZANIgoAUQgQAIgWANIgjAUIg6AlIgsAfIgmAdQALgNAWgUg");
	this.shape_27.setTransform(-4.2,-9.5,0.303,0.303);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006EB5").s().p("AhiDjQgwgcgahYQgJgigCgWQgEgaAIhVQAKhlAAgZQAAgkAogNIAXgGQAQgDAPAGQAVAJACAmQACAvAJAOIAJAOQAIAHAPAAQAIABAfgDQAigBAZAFQBNASAQBVQAPBQg9BEQgyA6hIAXQgfAKgcAAQgeAAgXgMgAgSgKQggAKgMAdQgKAaAIAdQAGAbAUAQQAYAUAcgKQAdgJARgeQASgegHgdQgHghgZgMQgOgJgRAAQgLAAgPAFg");
	this.shape_28.setTransform(19.2,-4.8,0.303,0.303);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006EB5").s().p("AgpDtQg0gQgSgpQgIgVAPgRQAJgLAOgFQAfgKAkAVQAjAVAegJQAdgJALgYQAMgYgJgbQgMgkgsgJQgrgJgHgRQgIgSATghQAPgggMgaQgJgXgTgJQgSgIgWAHQgVAHgVAdQgVAcgUAHQgsANgMgfQgQgoAhgpQAegmAzgQQA8gTAvAIQBBAKAhA9QAQAcgEAgQgEAjAEAJQAHAQAnAYQAkAXAMArQAYBUg7A4QgkAjg7ASQgjAMggAAQgYAAgYgIg");
	this.shape_29.setTransform(5.6,-1.2,0.303,0.303);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006EB5").s().p("AhoAhQgOgeAngVQASgLAtgOQArgOAYgCQArgDALAdQANAfgnAUQgQAKgrANQgvAQgUACIgJABQgjAAgNgbg");
	this.shape_30.setTransform(-4.5,3.8,0.303,0.303);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006EB5").s().p("AgnDtQhbgTgxhOQgDgFgHgRQgJgUgCgMQgHgiAchTQAbhUAkg9QAagtAsgOIAWgGQAOgDAGAKQAFAMgUAwQgYA0AEAUQACAMACADQAEAIAOABIAhAAQAbABAXAHQBEAUAqBPQAoBNgVA1QgTAvhAAVQgxAQgvAAQgbAAgcgGgAgkAUQggAKgJAeQgHAbAPAaQAOAXAgAOQAjARAfgKQAbgJAGgbQAGgagQgcQgRgfgagNQgQgIgPAAQgNAAgPAFg");
	this.shape_31.setTransform(-15,5.3,0.303,0.303);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006EB5").s().p("AAACGQgIgBgEgFIh7iGQgIgJACgKQABgJAHgGQAnghAjgkQASgRAYgGQAagGASAQQANALAEARQAFASADACQAEAEAagCQAZgDARAOQATAQAAAdQgBAcgZAaQguAug0AsQgHAGgKAAIgCAAgAApgMQgNAFgMAJQgYAZARATQATAUAbgZQAMgMAFgMQAHgRgMgJQgGgGgIAAQgGAAgGADgAgehGQgMADgJAJQgKAJgBALQgBAKAIAJQAIAIALAAQALgBALgKQAIgIAEgLQAEgQgIgJQgGgFgJAAIgJABg");
	this.shape_32.setTransform(25.5,8.8,0.303,0.303);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006EB5").s().p("AAcBbIhwiQQgHgIAGgMQAEgJAIgGQAagTAPASIB0CIQAIAJgGANQgFAKgLAIQgQAMgLAAQgJAAgGgIg");
	this.shape_33.setTransform(21.3,12.1,0.303,0.303);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#006EB5").s().p("AhSCNQgNgDgEgIIhRicQgFgLAHgKQAFgIALgFQAMgGAKABQAOACAHAMIA5BiQAHANAGADQALAHARgFQAHgCAOgIIAVgNQALgIABgLQABgJgGgJIhBhkQgOgWAcgRQAMgHALAAQALABAHAKIBIBkQAGAIAMACIAbAFQAJACAIAJIAOAPQAOAUACAFQAGATgUANQgVANgVgOQgVgPgYANQhBAnhJAiQgIAEgJAAIgIgBg");
	this.shape_34.setTransform(16.8,15.5,0.303,0.303);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006EB5").s().p("AhMB4QgEgMARgaQASgbgDgIQgDgJgfgKQgegLgKgaQgOgtApgdQATgOA1gSQAbgKAQAAQAWgBAIAQIBKCYQAHAPgMAKQgFAFgOAFIgLAEQgJACgDgBQgRgEgMgXQgJgTgNAEQgLADgNAkQgMAkghAIQgIADgJAAIgCAAQgMAAgCgGgAgehAQgOAEgHALQgGAMAEALQAEAMALAFQAOAGARgGQAZgJgMgbQgEgLgHgGQgHgEgIAAQgFAAgFACg");
	this.shape_35.setTransform(8.7,18.7,0.303,0.303);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#006EB5").s().p("AhBBfQgqgbgIgyQgIgsAdglQAegnA5gLQBAgMALAjQAGAVgSAEQgMACgLgBQgNgCgJACQgfAGgOAYQgLAVAFAYQAGAaAXAPQAYAQAjgHQAKgCAKgFQALgGAIgBQALgDAIAFQAIAFACAIQAHAVgbAPQgRAKgbAFQgWAEgTAAQgrAAghgWg");
	this.shape_36.setTransform(1.8,20.1,0.303,0.303);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#006EB5").s().p("AgMBrQgOgFgCgNIgPivQgBgKALgHQAJgFAKAAQAMgBAIAEQANAFACANIAXCrQABAMgMAHQgKAFgOABIgGAAQgHAAgIgCg");
	this.shape_37.setTransform(-3.9,20.9,0.303,0.303);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#006EB5").s().p("ABxBsQgGgHgGgbQgHgegGgNQgBgDgEgDIgGgCQgLgBgIAOQgDAGgKAYQgSAwgbgDQgcgDgNgyQgHgYgEgIQgHgPgKgCQgDAAgDABQgEACgCADQgFAHgEAMIgIAVQgIAagHAFQgJAJgYgEQgTgDgGgIQgGgGACgLQAAgEA5ihQAHgUAiAGQARACALAGQAJAHADAMIALAlIAHAbQAHASAIAHQAEAEAEAAQAFABAEgEQAJgEAIgRIAJgaIANgiQAFgMAJgEQAJgEATAAQAiACAFAUQAQA6AbB0QABAMgGAFQgHAGgTAAQgXgBgJgKg");
	this.shape_38.setTransform(-11.1,20.6,0.303,0.303);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#006EB5").s().p("AAKAuQgNgEACgMQABgFAOgWIAUgXQAGgHAGAAIAOADQAHACAGAEQAHAGgBAGQgBAGgqAoQgEAFgIABIgGABIgIgBgAhAAdQgQgDACgNQABgEAQgWIASgaQAFgGAHgBIAOADQAHABAGAEQAFAFgBAHQAAAFgmAqQgEAFgIACIgIABIgGAAg");
	this.shape_39.setTransform(24.8,-22.1,0.303,0.303);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#006EB5").s().p("ABABvQgbgFABgXIAGg7QABgTgNgCQgIgBgKAJIgMAMIgZAiQgQATgPANQgHAGgWgCQgfgCAAgWIABifQAAgLAMgGQAJgEAJABQAOABAIAGQAIAHAAAKIgCA4QAAAHACAIQAEAJAHABQALABAVgXQAKgMAKgOQARgUATgOQAKgIAZAEQANACAJAGQANAJgBANIgUCZQgCATgVAAIgIAAg");
	this.shape_40.setTransform(17.7,-21.6,0.303,0.303);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#006EB5").s().p("Ah6BmQgGgFgBgKQgDhuADg4QAAgTAhgCQAPgCALAEQALAFADALIAQAgIAKAZQAIAQAJAHQADACAFAAQAFAAAAgDQAHgHAFgRIAFgZIAJghQAFgMAIgEQAIgEASAAQAhACAEASQAMA3ASBtQAAALgEAFQgGAFgNAAQgSgBgHgKQgEgGgFgZQgGgcgGgMQgBgDgEgCIgEgCQgJAAgGANQgDAHgFAWQgKAugTAAQgTABgRgtQgKgWgEgGQgIgNgJAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDADgBADQgDALAAAdQgCAZgDAHQgEAKgSABIgGABQgJAAgEgEg");
	this.shape_41.setTransform(9.4,-22,0.303,0.303);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#006EB5").s().p("Ag/BdQgpgWgPgtQgPguAcgmQAbgmA2gKQA3gKArAbQAqAZAIAwQAJAugcAjQgbAhgyAJQgPACgMAAQgiAAgdgQgAgNg9QgcAFgMAWQgMAVAIAYQAGAXASAPQAWASAbgFQAcgFALgXQAKgUgFgWQgFgXgRgQQgSgPgUAAIgNABg");
	this.shape_42.setTransform(0.8,-21.2,0.303,0.303);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#006EB5").s().p("AgTBhQgSgBgIgSIg/iKQgLgYAcgJQAYgKAOAdIAIAQQAHALAFAFQAKAKASAAQAIAAARgFQAhgJAXAJQAXAKAJAaQAOAnglAYQgMAIgrAPQgiAMgOAAIgBAAgAANAAQgNAEgDAJQgEAJAEAKQAIAVAagIQAKgDAGgHQAHgJgEgLQgEgJgJgFQgHgBgHAAQgFAAgFAAg");
	this.shape_43.setTransform(-6.4,-18.9,0.303,0.303);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#006EB5").s().p("AAnBfIgyhfQgJgPgLgDQgIgDgNAEQgNAEgFAAQgKgBgGgMQgHgLAHgKQAEgHAIgEQA1gZAygUQAZgLAKAVQAFAMgFAIQgDADgMAHQgKAHgDAHQgFALAJAQIAwBgQAGALgHAJQgFAHgIAEQgJADgGAAQgNAAgHgNg");
	this.shape_44.setTransform(-12.5,-17.7,0.303,0.303);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#006EB5").s().p("AgsA8QgCgCgEgeIgFgeQgBgGAFgHQAEgGAFgDQANgIAIALQAFAHAJA3QACAIgEAFQgCACgJAFQgIAFgGAAQgHAAgDgGgAARAXQgCgDgCgcIgDggQgBgGAFgHQAEgGAFgDQAOgHAHALQADAEAEAdIAFAeQABAIgEAEQgDADgIAEQgIAFgGAAQgHAAgEgGg");
	this.shape_45.setTransform(-17.4,-16.4,0.303,0.303);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#006EB5").s().p("AgIB9Ih7h8QgIgGAFgMQAEgIAHgHQAPgNAMADQAIACANANIARAQQAJAGAIgGQAGgFgBgWIgBgdQAAgYACgHQAEgKAQgMQATgQAIAJQAFAGgCAvQgCAvAIAJQAHAIAzAKQAzAMAEAGQAIAJgWAQQgOALgJABQgGACgKgCIgRgEQgvgQgJAIQgHAFAEAIQABAEAFAEIANAQQAJAJABAFQAFAOgPANQgLAKgJAAQgGAAgGgGg");
	this.shape_46.setTransform(-23.7,-10.1,0.303,0.303);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#006EB5").s().p("AAsBPIh/h0QgHgGAEgNQADgJAGgHQAIgHAJgDQAMgEAJAIIB5B1QAIAIgCALQgCAJgIAHQgLAKgJAAQgHAAgHgFg");
	this.shape_47.setTransform(-27.3,-6.9,0.303,0.303);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#006EB5").s().p("AAVBzIiKhkQgJgHgBgIQAAgJAGgHQAegoAfgkQAQgSAWgGQAYgGASAPQALALAFAPQAEAQADACQAEAEAXgBQAXAAAPANQASAQABAXQACAXgRAUQggAlgfAoQgEAGgKABIgBAAQgIAAgFgEgAAngIQgLAEgIAIQgTAYAVAPQATAQATgWQAIgLADgKQADgOgLgHQgGgGgHAAQgFAAgGADgAgfg5QgLADgHAJQgIAJABALQAAAJAJAHQAJAHAKgCQAJgBAIgKQAHgIACgKQACgOgIgIQgFgEgIAAQgEAAgGACg");
	this.shape_48.setTransform(-30.7,-3.1,0.303,0.303);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#006EB5").s().p("AALBPQgQgNgGgCQgDgBgZAHQgTAFgGgPQgBgCABgSQABgRgBgDQgCgEgMgMIgOgNQgCgFAAgFQABgHAHgDIAQgFQALgDAFgGQAFgFAEgUQADgRAHgCQAHgDAOAKIASAOIAIACIAegHQARgEAGAPQABACgBASQgBASABACQACAEAMANQANAKABADQAFAOgLAGIgPAFQgLAEgGAEQgGAEgEAUQgDASgIADIgDABQgHAAgNgKg");
	this.shape_49.setTransform(35.7,-10.5,0.303,0.303);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#006EB5").s().p("AALBQQgQgOgGgCQgDgBgZAHQgTAFgGgPIAAgUQABgRgBgDQgCgEgMgMIgOgNQgFgQAMgEIAQgFQAKgDAFgFQAFgGAEgUQADgRAHgCQAHgDAOAKIASAOIAIACIAegHQARgEAGAPQABACgBASQgBASABACQACAEAMANQANAKABADQAGANgMAHIgPAFQgLAEgGAEQgGAEgEAUQgDATgIACIgEABQgHAAgMgJg");
	this.shape_50.setTransform(-28.7,10,0.303,0.303);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#006EB5").s().p("AsaOhQjDhHiLh1QhMg/g7hQQg8hRgkhaIgehcQgMg3gEgoQgLheAPhdQAZiqBlijQCmkOFEjAQEKidFGhGQEdg+EfAUQEOAVDRBWQDCBOB/B5QBbBTA6BpIARAhIgRggQg8hrhbhQQg/g5hMguQhQgwhognQjehRj9gFQkWgFkRBPQksBWj5CnQiOBhhhBmQh0B1hKCBQgjA9gdBQQgcBOgIBFQgKBPAIBJQADAdALAtIAXBKQA3CMCBBxQA4AxBNAuQBOAtBHAbQCPA6CyAbQCTAXCzgFQExgLEphoQENheDTijQC/iQB1i/QBkiiARimQANhygdh0IgIgaIAJAaQAdBygMB0QgOClheCqQhmC5jDCpQjLCvkPB1QktCBk8AfQhYAHhUAAQkgAAj1hYg");
	this.shape_51.setTransform(-0.2,0,0.303,0.303);

	this.instance = new lib.Group_2();
	this.instance.setTransform(1,0.1,0.303,0.303,0,0,0,138.5,95);
	this.instance.alpha = 0.52;

	this.addChild(this.instance,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-30.8,86,61.8);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.t1.gotoAndPlay('loop');
	}
	this.frame_79 = function() {
		this.t2.gotoAndPlay('loop');
	}
	this.frame_159 = function() {
		this.t3.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(80).call(this.frame_159).wait(122));

	// btn
	this.instance = new lib.btn();
	this.instance.setTransform(0,193.5,0.01,0.011);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).wait(1).to({scaleX:0.03,scaleY:0.03},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.23,scaleY:0.23},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.59,scaleY:0.59},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).to({scaleX:1,scaleY:1},5).wait(55).to({scaleX:1.2,scaleY:1.2},5).wait(10).to({scaleX:1,scaleY:1},5).wait(20).to({alpha:0},11).wait(1));

	// gift
	this.instance_1 = new lib.gift3_1();
	this.instance_1.setTransform(-209.5,66,1,1,-90);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).to({rotation:0,x:-88,y:88.5},10,cjs.Ease.get(1)).wait(90).to({alpha:0},11).wait(1));

	// gift
	this.instance_2 = new lib.gift1_1();
	this.instance_2.setTransform(192,76.6,1,1,89.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(169).to({_off:false},0).to({rotation:0,x:68,y:66.7},10,cjs.Ease.get(1)).wait(10).to({x:68.5,y:67},10).wait(70).to({alpha:0},11).wait(1));

	// gift
	this.instance_3 = new lib.gift2_1();
	this.instance_3.setTransform(191.5,76.5,1,1,80.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(169).to({_off:false},0).to({rotation:-9,x:68,y:67.2},10,cjs.Ease.get(1)).wait(10).to({rotation:0,x:80.5,y:110.6},10).wait(70).to({alpha:0},11).wait(1));

	// logo3
	this.instance_4 = new lib.logo3_1();
	this.instance_4.setTransform(68.1,15.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(169).to({_off:false},0).to({alpha:1},10).wait(90).to({alpha:0},11).wait(1));

	// t3
	this.t3 = new lib.t3();
	this.t3.setTransform(-8.5,-121.3);
	this.t3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(159).to({_off:false},0).wait(110).to({alpha:0},11).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(-5,-135.5);
	this.t2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(79).to({_off:false},0).wait(70).to({alpha:0},10).to({_off:true},1).wait(121));

	// fly
	this.instance_5 = new lib.fly1_1();
	this.instance_5.setTransform(-67,28,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).to({scaleX:1,scaleY:1,x:11,y:85,alpha:1},15,cjs.Ease.get(1)).wait(55).to({alpha:0},10).to({_off:true},1).wait(121));

	// fly
	this.instance_6 = new lib.fly2_1();
	this.instance_6.setTransform(108.1,-19,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).to({scaleX:1,scaleY:1,y:-5,alpha:1},15,cjs.Ease.get(1)).wait(45).to({alpha:0},10).to({_off:true},1).wait(121));

	// fly
	this.instance_7 = new lib.fly3_1();
	this.instance_7.setTransform(-84,-18.5,0.5,0.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({scaleX:1,scaleY:1,x:-114,y:2.5},15,cjs.Ease.get(1)).wait(35).to({alpha:0},10).to({_off:true},1).wait(121));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(-4.2,-153);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(69).to({alpha:0},10).to({_off:true},1).wait(201));

	// car
	this.instance_8 = new lib.car1_1();
	this.instance_8.setTransform(-9,91.3,0.6,0.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,x:-7.5,y:93.9,alpha:1},10).to({scaleX:0.9,scaleY:0.9,x:-2.2,y:103.3},35).to({scaleX:0.96,scaleY:0.96,x:-0.7,y:105.9,alpha:0},10).to({_off:true},1).wait(201));

	// car
	this.instance_9 = new lib.car2_1();
	this.instance_9.setTransform(72.3,77.1,0.6,0.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,x:82.7,y:78.2,alpha:1},10).to({scaleX:0.9,scaleY:0.9,x:119,y:82.2},35).to({scaleX:0.96,scaleY:0.96,x:129.3,y:83.3,alpha:0},10).to({_off:true},1).wait(201));

	// car
	this.instance_10 = new lib.car3_1();
	this.instance_10.setTransform(-81.4,75,0.6,0.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,x:-87.8,y:75.9,alpha:1},10).to({scaleX:0.9,scaleY:0.9,x:-110.1,y:79},35).to({scaleX:0.96,scaleY:0.96,x:-116.5,y:79.9,alpha:0},10).to({_off:true},1).wait(201));

	// logo1
	this.instance_11 = new lib.logo1_1();
	this.instance_11.setTransform(-0.5,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(281));

	// logo2
	this.instance_12 = new lib.logo2();
	this.instance_12.setTransform(97.1,258.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(281));

	// bg
	this.instance_13 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;