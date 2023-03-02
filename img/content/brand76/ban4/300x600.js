(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/battle.png", id:"battle"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bokal.png", id:"bokal"},
		{src:"images/bubbles1.png", id:"bubbles1"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/t1_1.png", id:"t1_1"},
		{src:"images/t1_2.png", id:"t1_2"},
		{src:"images/t1_3.png", id:"t1_3"},
		{src:"images/t1_4.png", id:"t1_4"}
	]
};



// symbols:



(lib.battle = function() {
	this.initialize(img.battle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,1100);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bokal = function() {
	this.initialize(img.bokal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,298);


(lib.bubbles1 = function() {
	this.initialize(img.bubbles1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,208);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.t1_1 = function() {
	this.initialize(img.t1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,67);


(lib.t1_2 = function() {
	this.initialize(img.t1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,71);


(lib.t1_3 = function() {
	this.initialize(img.t1_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,39);


(lib.t1_4 = function() {
	this.initialize(img.t1_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,37);


(lib.t1_4Light = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABgE2IAAk0QAAg4AGhJQgKAggMAcIgVAwIiWFJIiDAAIAApsIB/AAIAAE0QAAArgFBXQAKghALgcIAWgvICVlKICDAAIAAJsg");
	this.shape.setTransform(90.5,0.4,0.398,0.398);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjVE2IAApsIDEAAQBYABA1AeQArAYAXAqQAYApAAA2QgBAygTAqQgbA5g9AdQgZANgbAEQgaAEgsABIhGAAIAADkgAhWgTIBCAAQAmAAASgHQAPgHAKgSQAPgZAAgmQABgtgVgXQgVgbgpAAIhQAAg");
	this.shape_1.setTransform(69.5,0.4,0.398,0.398);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai0E2IAApsIFhAAIgQBoIjTAAIAACOICwAAIAABmIiuAAIAAClIDpAAIAABrg");
	this.shape_2.setTransform(50.2,0.4,0.398,0.398);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+FGIAAhbIgWAAQhxAAg/hJQgZgdgOgpQgPgtAAgwQgBg4ASgvQASgzAhgeQAegZAsgOQArgOAtAAIAWAAIAAhXIB9AAIAABXIAVAAQAuAAArAOQAsAOAdAZQAjAeARAzQARAvAAA4QAAAwgPAtQgOApgZAdQg/BJhyAAIgVAAIAABbgAA5CWIAKAAQAyAAAcgeQAXgWAGgkQAFgVAAgoIAAgIQAAglgGgYQgHglgWgVQgcgbgxAAIgKAAgAiOh+QgXAVgHAlQgGAYAAAlIAAAIQAAAoAEAVQAIAkAWAWQAcAeAxAAIALAAIAAkvIgLAAQgvAAgcAbg");
	this.shape_3.setTransform(26.2,-0.2,0.398,0.398);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiUDrQhLhVAAiJQAAhwAqhOQAjhDBAgmQBAgmBIAAQA6AAAyAVQAdAMATAQIg4BUQgXgTgegJQgWgHgWAAQghAAgcAQQgbAOgRAYQgjAyABB3QgBA8AHAlQAGAhANAZQAVAkAhARQAcAQAkAAQA6AAAwgoIA5BOQhHA6hlAAQh+AAhKhWg");
	this.shape_4.setTransform(2.2,0.4,0.398,0.398);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjADvQglgrgTg8QgUg+AAhKQAAhIAUg+QATg+AlgqQAfgjArgVQA1gaBBAAQB5AABIBSQAlAqATA+QAUA9AABJQAABKgUA+QgTA8glArQhIBSh5AAQh4AAhIhSgAhkieQgMAWgGAeQgIApAABBQAABtAaAyQAhBDBDAAQAoAAAbgWQAUgPAPgeQALgXAGgcQAJgrAAhBQAAhBgJgpQgGgdgLgXQgjhChDAAQhDAAghBCg");
	this.shape_5.setTransform(-20.2,0.4,0.398,0.398);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ADGE2IgXlQQgCgdgChMQgJAwgPAwIhiFZIhpAAIhYlMQgThEgGgpIgCBSIgDAdIgVFKIh9AAIA7psICgAAIBRE6QAMAtACAOIAGAoQAIgyAOgzIBUk4ICfAAIA4Jsg");
	this.shape_6.setTransform(-47.3,0.4,0.398,0.398);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHE2IAAoEIiYAAIAAhoIG/AAIgVBoIiVAAIAAIEg");
	this.shape_7.setTransform(-70.4,0.4,0.398,0.398);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACFE3IgsiTIi1AAIgsCTIiCAAIDMptICFAAIDEJtgAgcg2QgXBUgKAfIB3AAQgRg4gRhFQgRhIgHglQgUBbgIAcg");
	this.shape_8.setTransform(-88.6,0.4,0.398,0.398);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.3,-13.2,198.6,26.4);


(lib.t1_4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t1_4();
	this.instance.setTransform(-110,-18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110,-18.5,220,37);


(lib.t1_3Light = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+FxIAAo3IB9AAIAAI3gAAtj8QgUgUAAgcQAAgbAVgVQAUgUAdAAQAbAAAUAUQATAUAAAcQAAAcgUAUQgUAVgcAAQgcAAgUgVgAiMj8QgUgUAAgcQAAgbAVgVQAVgUAbAAQAbAAAUAUQAUAVAAAbQAAAcgUAUQgVAVgcAAQgaAAgVgVg");
	this.shape.setTransform(48.6,-0.2,0.398,0.398);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2ElQgqgVgegjQglgqgTg9QgUg9AAhJQAAhIAUg9QATg+AlgpQAegjAqgVQA1gaBBAAQBCAAA1AaQAqAVAeAjQAlApATA+QAUA9AABIQAABJgUA9QgTA9glAqQhGBSh5AAQhBAAg1gagAhkidQgLAXgGAcQgJAqAABAQAABBAJAqQAGAcALAXQAPAeAUAPQAbAVAmAAQAnAAAbgVQAUgPAPgeQAZgzAAhrQAAhAgIgqQgGgcgLgXQgghChFAAQhEAAggBCg");
	this.shape_1.setTransform(33,2.2,0.398,0.398);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABYE0IAAkTIivAAIAAETIh+AAIAApnIB+AAIAADwICvAAIAAjwIB+AAIAAJng");
	this.shape_2.setTransform(11.3,2.2,0.398,0.398);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTE0IAApnIDCAAQBWAAA2AeQArAYAXAqQAXApAAA1QAAAygUApQgbA5g8AdQgZAMgaAFQgaAEgsAAIhFAAIAADjgAhVgSIBBAAQAmAAASgIQAOgHALgRQAPgaAAglQAAgsgUgXQgVgbgpAAIhPAAg");
	this.shape_3.setTransform(-7.4,2.2,0.398,0.398);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACEE1IgsiSIizAAIgrCSIiCAAIDKppICFAAIDCJpgAgcg1QgWBRgLAhIB3AAQgVhCgNg6IgYhsQgIAqgUBMg");
	this.shape_4.setTransform(-27.2,2.2,0.398,0.398);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjYE0IAApnIGFAAIgQBlIj3AAIAACMIBfAAQBgAAA2ArQAaAVAQAdQAUAoAAAzQAABphJAyQg0AjhRAAgAhaDPIBUAAQArAAAWgcQARgVAAgoQAAgvgggXQgVgPgiAAIhPAAg");
	this.shape_5.setTransform(-46.3,2.2,0.398,0.398);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.9,-14.9,110,29.8);


(lib.t1_3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t1_3();
	this.instance.setTransform(-110,-19.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110,-19.5,220,39);


(lib.t1_2Light = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFLK9QhugMg7hEQgagggRgwQgKgfgOg+IgujMQgIghgTgmQgUgogSgSQgsgohbAAIhoAAIAAJwIkeAAIAA12IEeAAIAAIhIB9AAQAoAAAkgKQAogLAVgUQAXgUAPgmQAKgaAKgrIAsivQANgyAHgSQAQgrAfgeQAbgdAmgPQAggMA0gGICHgTIA2C8IhAAQQgnAKgaASQgSANgLASQgOAWgLAnIgmCGQgQA1gKAYQgUAugdAeQgyAyhBAQQBAATAtArQAfAgAVAsQAOAbAPAvIA8DPQAMAnAKASQAQAdAcAQQALAHAbAKQAbAMAQAEIAqAMIg0DEg");
	this.shape.setTransform(77.4,0,0.398,0.398);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEsK9IhjlMImZAAIhjFMIkmAAIHM15IEuAAIG5V5gAhBh6IgpCWQgQA5gRA1IEQAAQgehfgThIIgchzIgZhlQgPg+gQhTQgkCdgdBvg");
	this.shape_1.setTransform(28.5,-0.1,0.398,0.398);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AG+K7Ig0r5IgFhAIgFipQgSBigiB1IjdMLIjvAAIjHrtQgVhMgKgsQgOg8gLhDIgFC5IgFBCIgxLpIkYAAICE11IFoAAIC3LFQAbBiAGAhIAKA6IAEAgIANhKQAPhKAWhPIC9q/IFmAAIB+V1g");
	this.shape_2.setTransform(-26,0,0.398,0.398);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AicKbQhkgvhPhaQhYhkgqh/Qgnh4AAiZQAAh5AYhuQAYhwAuhYQBRiVCPhXQCPhVCmAAQCBgBBwAwQBAAbAvAkIh/C+Qg1grhDgVQgygPgwAAQhLAAhAAiQg/AhglA2QhPByAAEMQAACIAPBTQANBKAeA4QAuBRBNAoQBAAiBRAAQBBAAA+gXQA9gYAygqICBCwQigCDjjgBQibAAh3g4g");
	this.shape_3.setTransform(-78.8,0,0.398,0.398);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.9,-28.8,197.9,57.6);


(lib.t1_2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t1_2();
	this.instance.setTransform(-110,-35.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110,-35.5,220,71);


(lib.t1_1Light = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACqK5IAAogQAAhUAKiSQgRA5gVAwIgmBUIkJJJIjpAAIAAxIIDhAAIAAIdQAABlgKCEQASg5AUgxIAmhWIEKpGIDoAAIAARIgAhLnjQgugLgpgeQhDgygUhMIBvguQATAhAiAUQAlAVA6AAQA7AAAlgVQAjgUATghIBvAuQgUBMhDAyQgpAegvALQgiAIg0AAQgzAAgigIg");
	this.shape.setTransform(84.3,-0.4,0.398,0.398);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACqIlIAAogQAAhSAKiUQgRA5gVAxIgmBVIkJJHIjpAAIAAxJIDhAAIAAIgQAABigKCEQASg5AUgxIAmhVIEKpHIDoAAIAARJg");
	this.shape_1.setTransform(47.8,5.6,0.398,0.398);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEEImQhWgJgvg2QgUgZgNglQgIgYgLgyIgligQgGgagPgdQgQghgNgNQgjgfhGgBIhTAAIAAHrIjhAAIAAxJIDhAAIAAGrIBiAAQAgAAAcgIQAfgIAQgQQASgPAMgfQAIgTAIgiIAjiKQAJglAGgRQANggAYgYQAVgXAfgMQAZgJAogGIBqgNIArCSIgzANQgfAIgUAOQgOALgIAOQgMAQgIAgIgfBpQgMApgIATQgPAkgXAXQgoAogyAMQAyAQAjAgQAZAZARAjQAKAWALAjIAwCjQAKAfAIAOQAMAXAWANQAJAFAVAJQAUAIANADIAhAKIgoCZg");
	this.shape_2.setTransform(13.3,5.6,0.398,0.398);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmpGTIAigJIAigMQAVgJAIgFQAWgMANgXQAIgPAJgeIAlh9QAVhJAqgnQAQgQAagOQAXgNAXgIQgugFgrgWQgsgXgcgfQgfgjgRgyQgPgwAAg2QAAg+Abg5QAbg7AygoQA1gqBKgRQA0gLBNAAIF6AAIAARJIjhAAIAAnAIhdAAQgfAAgdAMQgbAKgTASQgPAPgPAdQgPAbgFAbIgaBwQgLAzgIAXQgNAngUAXQgsA3hYAIIh9APgAgTlnQg9AkAABVQAABJAhAnQAkAtBLAAICJAAIAAkpIh6AAQhCAAggATg");
	this.shape_3.setTransform(-25.7,5.9,0.398,0.398);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiYCWQA0gNAfgZQAfgYAAgdQAAgPgJgLQgIgJgYgPQgggQgPgbQgPgbAAgnQAAg5AognQAogoA6AAQBCABAtA1QAtA2AABSQAABkg+BPQg+BPhhAZg");
	this.shape_4.setTransform(-47.4,-7.9,0.398,0.398);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AFfIlIgppVIgEgzIgFiEQgOBQgaBZIivJjIi6AAIicpMQgfhzgOhPIgDCSQgBASgEAhIglJJIjcAAIBnxJIEbAAICPIsQAUBIAGAfIAIAuIADAZQAEgcAHgeQALg6ARg/ICUonIEaAAIBiRJg");
	this.shape_5.setTransform(-77.4,5.6,0.398,0.398);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.9,-28.1,200,56.2);


(lib.t1_1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.t1_1();
	this.instance.setTransform(-110,-33.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110,-33.5,220,67);


(lib.HW = function() {
	this.initialize();

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("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");

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-299.9,300,600);


(lib.bubblesMc = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.bubbles1();
	this.instance.setTransform(117.5,103.9,1,1,0,0,180);

	this.instance_1 = new lib.bubbles1();
	this.instance_1.setTransform(-117.5,-104);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118,-104,236,415.9);


(lib.bokalMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bokal();
	this.instance.setTransform(-68,-149);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-149,136,298);


(lib.bgImg = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg2();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.battleMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.battle();
	this.instance.setTransform(-177,-550);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-177,-550,354,1100);


(lib.bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bubblesMc();
	this.instance.setTransform(0,0,0.999,0.999);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-208.3},239).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-103.9,234.8,415.5);


(lib.bokal_1 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.bokalMc();

	// Слой 2
	this.instance_1 = new lib.bokalMc();
	this.instance_1.setTransform(0,273.1,1,1,0,180,0);
	this.instance_1.alpha = 0.219;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-149,136,571.1);


(lib.bgImg1 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(10.3,205);

	// Слой 2
	this.instance = new lib.bubbles();
	this.instance.setTransform(0,240.5,1.272,1.272);
	this.instance.alpha = 0.871;

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.img1();
	this.instance_1.setTransform(-150,-300);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,610);


(lib.battle_1 = function() {
	this.initialize();

	// battleMc
	this.instance = new lib.battleMc();

	// battleMc
	this.instance_1 = new lib.battleMc();
	this.instance_1.setTransform(0,1011.3,1,1,0,180,0);
	this.instance_1.alpha = 0.219;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-177,-550,354,2111.3);


(lib.fr2 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.bubbles();
	this.instance.setTransform(-150,293,1.272,1.272,0,0,180);
	this.instance.alpha = 0.871;

	this.instance_1 = new lib.bubbles();
	this.instance_1.setTransform(-150,-235.6,1.272,1.272,0,0,180);
	this.instance_1.alpha = 0.871;

	this.instance_2 = new lib.bubbles();
	this.instance_2.setTransform(0.7,293,1.272,1.272,0,0,180);
	this.instance_2.alpha = 0.871;

	this.instance_3 = new lib.bubbles();
	this.instance_3.setTransform(0.7,-235.6,1.272,1.272,0,0,180);
	this.instance_3.alpha = 0.871;

	// Слой 2
	this.instance_4 = new lib.bubbles();
	this.instance_4.setTransform(180.7,336,1.272,1.272);
	this.instance_4.alpha = 0.871;

	this.instance_5 = new lib.bubbles();
	this.instance_5.setTransform(180.7,-192.6,1.272,1.272);
	this.instance_5.alpha = 0.871;

	this.instance_6 = new lib.bubbles();
	this.instance_6.setTransform(0.7,362,1.272,1.272);
	this.instance_6.alpha = 0.871;

	this.instance_7 = new lib.bubbles();
	this.instance_7.setTransform(0.7,-166.6,1.272,1.272);
	this.instance_7.alpha = 0.871;

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DD981F","#E6CE1A"],[0,1],0,301.1,0,-301).s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-299.3,-367.8,629.4,1126.2);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// HW
	this.instance = new lib.HW();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(309).to({_off:false},0).to({alpha:1},10).wait(45).to({alpha:0},5).wait(1));

	// t1_4Light
	this.instance_1 = new lib.t1_4Light();
	this.instance_1.setTransform(-0.3,-132.5,0.886,0.886);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_1.cache(-101,-15,203,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(244).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},5).to({_off:true},1).wait(105));

	// t1_3Light
	this.instance_2 = new lib.t1_3Light();
	this.instance_2.setTransform(1.3,-164.5,0.886,0.886);
	this.instance_2.alpha = 0;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_2.cache(-57,-17,114,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},5).to({_off:true},1).wait(120));

	// t1_2Light
	this.instance_3 = new lib.t1_2Light();
	this.instance_3.setTransform(-0.7,-199.6,0.98,0.979);
	this.instance_3.alpha = 0;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_3.cache(-101,-31,202,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({alpha:1},15).wait(10).to({alpha:0},15).to({_off:true},1).wait(89).to({_off:false,scaleX:0.88,scaleY:0.88,x:-1,y:-208},0).to({alpha:1},5).wait(10).to({alpha:0},5).to({_off:true},1).wait(135));

	// t1_1Light
	this.instance_4 = new lib.t1_1Light();
	this.instance_4.setTransform(-0.5,-267.2,0.98,0.979);
	this.instance_4.alpha = 0;
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;
	this.instance_4.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_4.cache(-102,-30,204,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).to({alpha:1},15).wait(10).to({alpha:0},15).to({_off:true},1).wait(74).to({_off:false,scaleX:0.88,scaleY:0.88,x:-1,y:-268.8},0).to({alpha:1},5).wait(10).to({alpha:0},5).to({_off:true},1).wait(150));

	// t1
	this.instance_5 = new lib.t1_4_1();
	this.instance_5.setTransform(0,-131.8,0.818,0.818);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).to({alpha:1},10).to({_off:true},135).wait(51));

	// t1
	this.instance_6 = new lib.t1_3_1();
	this.instance_6.setTransform(0,-163.7,0.818,0.818);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169).to({_off:false},0).to({alpha:1},10).to({_off:true},140).wait(51));

	// t1
	this.instance_7 = new lib.t1_2_1();
	this.instance_7.setTransform(0,-202,0.909,0.909);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({alpha:1},10).wait(81).to({scaleX:0.91,scaleY:0.91,y:-202.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:-202.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:-203.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:-204.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:-205.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:-207},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:-208.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:-208.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:-209.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:-209.5},0).to({_off:true},150).wait(51));

	// t1
	this.instance_8 = new lib.t1_1_1();
	this.instance_8.setTransform(0,-265.6,0.909,0.909);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({alpha:1},10).wait(86).to({scaleX:0.91,scaleY:0.91,y:-265.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:-265.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:-265.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:-266.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:-266.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:-266.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:-266.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:-266.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:-266.8},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).to({_off:true},150).wait(51));

	// battle
	this.instance_9 = new lib.battle_1();
	this.instance_9.setTransform(-9.1,-187,1.5,1.5,-4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(64).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-4.2,alpha:1},15).wait(46).to({regY:505.7,scaleX:1,scaleY:1,x:27.5,y:316.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-4,x:26.2,y:315.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-3.8,x:24.2,y:313.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-3.6,x:21.5,y:310.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-3.2,x:18.3,y:307.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-2.8,x:14.9,y:302.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-2.4,x:11.7,y:297.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-1.9,x:8.9,y:292.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-1.4,x:6.6,y:287.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-1,x:5,y:282.9},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-0.7,x:3.9,y:278.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:-0.4,x:3.3,y:275.6},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-0.2,x:3,y:273.4},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:0,x:2.9,y:272},0).wait(1).to({regY:0,scaleX:0.42,scaleY:0.42,y:61},0).wait(20).to({scaleX:0.35,scaleY:0.35,x:62.5,y:80},10).to({_off:true},150).wait(51));

	// bokal
	this.instance_10 = new lib.bokal_1();
	this.instance_10.setTransform(-218,130);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(169).to({_off:false},0).to({x:-54},10,cjs.Ease.get(1)).to({_off:true},140).wait(51));

	// bgImg2
	this.instance_11 = new lib.bgImg();
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79).to({_off:false},0).to({_off:true},240).wait(51));

	// fr2
	this.instance_12 = new lib.fr2();
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(30).to({_off:false},0).to({alpha:1},10).to({_off:true},39).wait(291));

	// bgImg1
	this.instance_13 = new lib.bgImg1();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({regY:5,scaleX:1.02,scaleY:1.02,y:-2},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:-22.9},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:-56.2},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:-98.7},0).wait(1).to({scaleX:1.52,scaleY:1.52,y:-145.6},0).wait(1).to({scaleX:1.68,scaleY:1.68,y:-191.4},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:-231.3},0).wait(1).to({scaleX:1.92,scaleY:1.92,y:-261.4},0).wait(1).to({scaleX:1.98,scaleY:1.98,y:-279.9},0).wait(1).to({regY:0,scaleX:2,scaleY:2,y:-296.1},0).to({_off:true},1).wait(323).to({_off:false,scaleX:1,scaleY:1,y:0},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176,-300,833.7,936.9);


// stage content:



(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(124,299,372.5,937.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;