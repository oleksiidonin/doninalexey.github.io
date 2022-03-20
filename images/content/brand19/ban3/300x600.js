(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/box.png", id:"box"},
		{src:"images/boxBlur.png", id:"boxBlur"},
		{src:"images/btnBg.png", id:"btnBg"},
		{src:"images/clouds.png", id:"clouds"},
		{src:"images/gradient.jpg", id:"gradient"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/light.png", id:"light"},
		{src:"images/light2.png", id:"light2"},
		{src:"images/light3.jpg", id:"light3"},
		{src:"images/skin.png", id:"skin"},
		{src:"images/skins.png", id:"skins"}
	]
};



// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,214);


(lib.boxBlur = function() {
	this.initialize(img.boxBlur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,238);


(lib.btnBg = function() {
	this.initialize(img.btnBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,61);


(lib.clouds = function() {
	this.initialize(img.clouds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,221);


(lib.gradient = function() {
	this.initialize(img.gradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,40);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,343);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,423);


(lib.light2 = function() {
	this.initialize(img.light2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,513);


(lib.light3 = function() {
	this.initialize(img.light3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,145);


(lib.skin = function() {
	this.initialize(img.skin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,136);


(lib.skins = function() {
	this.initialize(img.skins);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,132);


(lib.t5_2 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtBBsQgdgeAAgzIAAihIA4AAIAACfQAAAdAPARQARARAdAAQAeAAAPgRQAQgRAAgdIAAifIA4AAIAACgQAAA0gcAeQgfAfg6AAQg6AAgegfgAxuBkQgngoAAg8QAAg7AngoQAmgnA7AAQA7AAAmAnQAnAnAAA8QAAA9gnAnQgmAng7AAQg7AAgmgngAxHg+QgVAZAAAlQAAAmAVAZQAWAZAkAAQAjAAAWgZQAWgZAAgmQAAglgWgZQgWgZgjAAQgkAAgWAZgATZCGIAAkMIC4AAIAAAzIiBAAIAAA5IB+AAIAAAxIh+AAIAAA9ICBAAIAAAygAQyCGIAAjZIhMAAIAAgzIDPAAIAAAzIhLAAIAADZgAO4CGIgRgtIhvAAIgQAtIg/AAIBkkMIBGAAIBkEMgAOYAmIgohyIgpByIBRAAgAKcCGIgzhgIgpAAIAABgIg2AAIAAkMIB5AAQAoAAAYAZQAYAYgBAmQABAigTAUQgPATgXAFIA6BngAJAgKIA7AAQARAAALgKQALgKAAgRQAAgQgLgKQgLgKgRAAIg7AAgAGgCGIh7iuIAACuIg4AAIAAkMIA5AAIB4CoIAAioIA3AAIAAEMgACCCGIAAkMIA4AAIAAEMgAgbCGIgti3IgtC3Ig8AAIhKkMIA+AAIAuDCIAxjCIArAAIAyDCIArjCIA+AAIhKEMgAmuCGIgzhgIgoAAIAABgIg3AAIAAkMIB5AAQAoAAAYAZQAXAYAAAmQAAAigRAUQgQATgXAFIA6BngAoJgKIA6AAQARAAALgKQALgKAAgRQAAgQgLgKQgLgKgRAAIg6AAgA0rCGIAAhuIhlieIA/AAIBBBtIBAhtIA/AAIhjCeIAABug");

	// Layer 2
	this.instance = new lib.gradient();
	this.instance.setTransform(-143,-20,0.986,1);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-142.5,-13.9,285.1,28);


(lib.t5_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJHA2IARgZQATAVAbAAQAMAAAHgFQAHgFAAgHQAAgIgNgGIgdgIQgrgLAAgfQAAgTAPgNQAQgOAZAAQAjAAAWAVIgRAYQgSgQgZgBQgKABgFAEQgGAEAAAGQAAAJAOAEIAcAHQArANAAAeQAAAWgPANQgPAOgdABQgnAAgXgZgAFCA2IARgZQATAVAcAAQAMAAAHgFQAGgFAAgHQAAgIgNgGIgdgIQgqgLAAgfQAAgTAPgNQAPgOAZAAQAjAAAXAVIgSAYQgRgQgagBQgJABgGAEQgFAEAAAGQAAAJANAEIAdAHQAqANAAAeQAAAWgPANQgPAOgdABQgnAAgXgZgAjdA4QgXgVAAgjQAAgiAXgVQAWgXAhAAQApAAAVAmIgbAOQgFgKgJgGQgKgHgLAAQgTAAgNAOQgOAPAAAUQAAAVAOAOQANAPATAAQALAAAKgHQAJgGAFgKIAbAOQgVAmgpAAQghAAgWgXgAHQBLIAAiWIBoAAIAAAdIhJAAIAAAgIBIAAIAAAaIhIAAIAAAjIBJAAIAAAcgAEcBLIgJgZIg/AAIgJAZIgkAAIA5iWIAnAAIA5CWgAEKAVIgWhAIgXBAIAtAAgAA2BLIAAiWIBoAAIAAAdIhIAAIAAAgIBHAAIAAAaIhHAAIAAAjIBIAAIAAAcgAgCBLIgdg2IgXAAIAAA2IgfAAIAAiWIBEAAQAVAAAOAOQANAOAAAVQAAATgKALQgJALgMACIAgA6gAg2gFIAhAAQAJAAAGgFQAGgGAAgKQAAgJgGgGQgGgFgJAAIghAAgAkoBLIhGhhIAABhIgfAAIAAiWIAgAAIBEBeIAAheIAfAAIAACWgAnKBLIAAiWIAgAAIAACWgAphBLIAAh5IgrAAIAAgdIB2AAIAAAdIgrAAIAAB5gAq/BLIAAiWIAgAAIAACWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.4,-7.9,140.9,15.8);


(lib.t4_2 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjDBuIAjgyQARATAWALQAaAMAdAAQAZAAAOgKQANgKAAgOQAAgSgbgKIg7gQQgngLgTgOQgbgXAAgoQAAgoAegaQAfgcAzAAQBIAAAqArIgjAwQgPgRgYgIQgVgIgYAAQgUAAgLAIQgMAIAAAOQAAAQAbAKQAQAFArAKQAlAMAUARQAaAVAAAnQAAAtgdAaQgeAcg6AAQhPAAgvgxgAr9ByQgsgtAAhFQAAhEAsgtQAsgtBEAAQBDAAAsAtQAsAtAABEQAABFgsAtQgsAthDAAQhEAAgsgtgArPhHQgZAcAAArQAAAsAZAcQAZAdApAAQAoAAAagdQAYgcAAgsQAAgrgYgcQgagdgoAAQgpAAgZAdgAU9CUQgKgMAAgPQAAgPAKgLQALgLAOAAQAPAAALALQALALAAAPQAAAPgLAMQgLALgPAAQgOAAgLgLgAQ3CaIAAkzIDSAAIAAA6IiTAAIAABBICQAAIAAA4IiQAAIAABGICTAAIAAA6gAPACaIg7huIguAAIAABuIg/AAIAAkzICLAAQAtAAAcAcQAbAbAAAsQAAAngVAXQgRAVgbAHIBDB2gANXgMIBCAAQAUAAAMgLQANgMAAgTQAAgTgNgLQgMgLgUAAIhCAAgAITCaIAAkzIDTAAIAAA6IiTAAIAABBICQAAIAAA4IiQAAIAABGICTAAIAAA6gAGZCaIAAiCIiMAAIAACCIhAAAIAAkzIBAAAIAAB5ICMAAIAAh5IBAAAIAAEzgAnFCaIAAkzICLAAQAvAAAbAdQAaAcAAAqQAAArgaAZQgbAegvAAIhMAAIAABugAmGgMIBEAAQATAAAMgLQAMgMAAgTQAAgTgMgLQgMgLgTAAIhEAAgAuRCaIg7huIguAAIAABuIg/AAIAAkzICLAAQAuAAAbAcQAbAbAAAsQAAAngVAXQgRAVgbAHIBDB2gAv6gMIBCAAQAUAAAMgLQANgMAAgTQAAgTgNgLQgMgLgUAAIhCAAgA16CaIAAkzIB2AAQBGAAAsAqQAsArAABEQAABFgsArQgsAqhGAAgA06BgIA2AAQAqAAAagdQAZgbAAgoQAAgpgYgaQgZgcgsAAIg2AAgAU9A1IgJjOIBEAAIgJDOg");

	// Layer 2
	this.instance = new lib.gradient();
	this.instance.setTransform(-140.5,-20,0.969,1);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.3,-15.9,280.7,32);


(lib.t4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah6A4QgWgWAAgiQAAghAWgWQAWgXAhAAQAhAAAWAXQAUAWAAAhQAAAigUAWQgWAWghABQghgBgWgWgAhkgjQgMAOAAAVQAAAVAMAOQANAPAUAAQAUAAANgPQAMgOAAgVQAAgVgMgOQgNgOgUAAQgUAAgNAOgAq4A2IARgZQASAVAcAAQANAAAHgFQAGgFAAgHQAAgJgNgFIgdgIQgrgLAAgfQAAgUAPgMQAQgOAZAAQAjAAAWAVIgRAXQgSgQgZAAQgKAAgFAFQgGAEAAAGQAAAIANAFIAdAHQArANAAAeQAAAWgPANQgQAOgcABQgngBgXgYgAJRBLIAAiWIBoAAIAAAdIhIAAIAAAgIBHAAIAAAaIhHAAIAAAjIBIAAIAAAcgAHzBLIAAh5IgrAAIAAgdIB1AAIAAAdIgrAAIAAB5gAGuBLIgJgZIg/AAIgJAZIgkAAIA5iWIAnAAIA4CWgAGcAVIgXhAIgXBAIAuAAgADUBLIAAiWIBoAAIAAAdIhJAAIAAAgIBIAAIAAAaIhIAAIAAA/gAAeBLIAAiWIBoAAIAAAdIhJAAIAAAgIBHAAIAAAaIhHAAIAAA/gAj8BLIhHhhIAABhIgfAAIAAiWIAgAAIBFBdIAAhdIAfAAIAACWgAmeBLIAAiWIAfAAIAACWgAnTBLIgsg8IgMAOIAAAuIgfAAIAAiWIAfAAIAABEIA0hEIAmAAIg6BHIA+BPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.8,-7.9,139.6,15.8);


(lib.t3_2 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAoB1IAsg/QASATAZALQAbANAfAAQAUAAAMgHQAMgIAAgMQAAgOgbgIQgogJgWgGQhagZAAhHQAAgsAhgdQAjggA6AAQBNAAA0AuIgtA9QgTgRgZgJQgYgIgYAAQgRAAgJAGQgIAGAAALQAAANAcAJQAQAFAtAKQBZAaAABFQAAAygiAdQgjAeg+AAQhYAAg1g0gAj+B6QgwgwAAhKQAAhJAwgwQAwgvBJAAQBJAAAwAvQAuAwAABJQAABKguAwQgwAvhJAAQhJAAgwgvgAjEhCQgXAbAAAnQAAAoAXAbQAYAcAnAAQAmAAAZgcQAXgbAAgoQAAgngXgbQgYgbgnAAQgnAAgYAbgANhCbQgNgNAAgTQAAgTANgNQANgOASAAQASAAANAOQANANAAATQAAATgNANQgNAOgSAAQgSAAgNgOgALhCbQgNgNAAgTQAAgTANgNQANgOASAAQATAAAMAOQANANAAATQAAATgNANQgNAOgSAAQgSAAgNgOgAJiCbQgNgNAAgTQAAgTANgNQANgOASAAQASAAANAOQANANAAATQAAATgNANQgNAOgSAAQgSAAgNgOgAFSCkIAAlHIDoAAIAABKIiWAAIAAAzICTAAIAABIIiTAAIAAA4ICWAAIAABKgAmbCkIg1hvIgqAAIAABvIhRAAIAAlHICeAAQAzAAAeAgQAdAeAAAwQAAAngVAZQgQAWgaAKIBAB5gAn6gTIBBAAQAQAAALgJQAMgJAAgRQAAgQgMgKQgLgJgQAAIhBAAgAqzCkIgQgwIh8AAIgQAwIhcAAIB2lHIBnAAIB3FHgArZArIgoh6IgpB6IBRAAg");

	// Layer 2
	this.instance = new lib.gradient();
	this.instance.setTransform(-94.5,-20,0.652,1);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94,-16.9,188.1,34);


(lib.t3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AErA3QgVgVAAgiQAAghAVgVQAWgXAhAAQAhAAAVAXQAWAVAAAhQAAAigWAVQgVAXghAAQghAAgWgXgAFCgiQgMAOAAAUQAAAVAMAOQAMAOAUAAQAUAAAMgOQAMgOAAgVQAAgUgMgOQgMgOgUAAQgUAAgMAOgAkKA2IARgZQATAUAbABQAMgBAHgEQAGgFAAgHQABgJgNgFIgdgIQgqgLAAgfQAAgSAPgNQAQgOAYAAQAjAAAVAVIgRAXQgQgQgZAAQgKAAgGAEQgGAEAAAHQAAAHAOAFIAcAIQAqAMAAAeQAAAVgPANQgOAPgdAAQgmAAgYgYgAvhBIQgFgFAAgIQAAgHAFgGQAFgGAIABQAGgBAGAGQAFAGAAAHQAAAIgFAFQgFAFgHAAQgIAAgFgFgAwZBIQgEgFAAgIQAAgHAEgGQAGgGAHABQAHgBAFAGQAGAGAAAHQAAAIgGAFQgFAFgHAAQgHAAgGgFgAxQBIQgGgFABgIQgBgHAGgGQAFgGAHABQAHgBAGAGQAEAGAAAHQAAAIgEAFQgFAFgIAAQgHAAgFgFgAPwBKIAAiUIBmAAIAAAcIhHAAIAAAgIBGAAIAAAaIhGAAIAAAiIBHAAIAAAcgAOTBKIAAh4IgrAAIAAgcIB0AAIAAAcIgqAAIAAB4gANOBKIgJgYIg+AAIgJAYIgjAAIA4iUIAnAAIA4CUgAM9AVIgWg/IgXA/IAtAAgAJ3BKIAAiUIBnAAIAAAcIhHAAIAAAgIBFAAIAAAaIhFAAIAAA+gAHDBKIAAiUIBoAAIAAAcIhIAAIAAAgIBGAAIAAAaIhGAAIAAA+gACrBKIhFhgIAABgIgfAAIAAiUIAfAAIBEBcIAAhcIAeAAIAACUgAALBKIAAiUIAfAAIAACUgAgnBKIgsg7IgMANIAAAuIgeAAIAAiUIAeAAIAABDIA0hDIAmAAIg5BHIA9BNgAlyBKIhFhgIAABgIgfAAIAAiUIAgAAIBDBcIAAhcIAfAAIAACUgApVBKIAAiUIBnAAIAAAcIhIAAIAAAgIBHAAIAAAaIhHAAIAAAiIBIAAIAAAcgAqQBKIAAg/IhFAAIAAA/IgfAAIAAiUIAfAAIAAA7IBFAAIAAg7IAeAAIAACUgAtRBKIAAh4IgqAAIAAgcIB0AAIAAAcIgrAAIAAB4g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.1,-7.8,222.2,15.6);


(lib.t2_2 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ASiCLQgKgLAAgOQAAgPAKgKQAKgLAOAAQAPAAAKALQAKAKAAAPQAAAOgKALQgKALgPAAQgOAAgKgLgAQ1CLQgKgLAAgOQAAgPAKgKQAKgLAOAAQAOAAALALQAKALAAAOQAAAOgKALQgLALgOAAQgOAAgKgLgAPICLQgKgLAAgOQAAgPAKgKQAKgLAOAAQAOAAAKALQALALAAAOQAAAOgLALQgKALgOAAQgOAAgKgLgAKeCRIAAkmIBxAAQBDAAAqApQApApAABDQAABAgpApQgqAohDAAgALbBaIA0AAQAogBAZgbQAYgZAAglQAAgpgXgaQgYgagqAAIg0AAgAGmCRIAAkmIDJAAIAAA4IiNAAIAAA+ICKAAIAAA2IiKAAIAABDICNAAIAAA3gAE1CRIg4hpIgtAAIAABpIg8AAIAAkmICFAAQArAAAbAbQAZAbAAAqQAAAkgTAXQgRAUgaAHIBABwgADQgOIBAAAQATAAALgKQAMgLAAgSQAAgTgMgKQgLgLgTAAIhAAAgAA0CRIgRgyIh4AAIgSAyIhFAAIBukmIBKAAIBuEmgAASAnIgqh9IgsB9IBWAAgAmGCRIAAkmIDJAAIAAA4IiNAAIAAA+ICKAAIAAA2IiKAAIAABDICNAAIAAA3gAqQCRIAAkmICFAAQAtAAAaAcQAYAbAAApQAAAogYAYQgbAdgsAAIhJAAIAABpgApUgOIBBAAQASAAAMgKQALgLAAgSQAAgTgLgKQgMgLgSAAIhBAAgAuaCRIAAkmICFAAQAtAAAaAcQAYAbAAApQAAAogYAYQgbAdgsAAIhJAAIAABpgAtegOIBBAAQASAAAMgKQAMgLAAgSQAAgTgMgKQgMgLgSAAIhBAAgAv6CRIgRgyIh6AAIgSAyIhFAAIBukmIBMAAIBtEmgAwcAnIgsh9IgsB9IBYAAg");

	// Layer 2
	this.instance = new lib.gradient();
	this.instance.setTransform(-125,-20,0.862,1);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.5,-15,249.1,30);


(lib.t2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIgA2IASgZQATAUAcABQANgBAHgEQAHgFAAgHQAAgJgOgFIgegIQgrgLAAgfQAAgTAPgNQAQgOAaAAQAkAAAXAWIgSAXQgSgQgagBQgKAAgGAFQgFAEAAAGQAAAJANAEQAIADAWAFQArAMAAAeQAAAVgPANQgQAPgdAAQgoAAgYgYgAAmA2IASgZQATAUAcABQANgBAHgEQAHgFAAgHQAAgJgOgFIgegIQgrgLAAgfQAAgTAPgNQAQgOAaAAQAkAAAXAWIgSAXQgSgQgagBQgKAAgGAFQgFAEAAAGQAAAJANAEQAIADAWAFQArAMAAAeQAAAVgPANQgQAPgdAAQgoAAgYgYgAoiBHQgFgFAAgHQAAgHAFgGQAFgGAIABQAHgBAGAGQAFAGAAAHQAAAHgFAFQgGAGgHAAQgIAAgFgGgApcBHQgFgFAAgHQAAgHAFgGQAGgGAHABQAHgBAGAGQAFAGAAAHQAAAHgFAFQgGAGgHAAQgHAAgGgGgAqWBHQgFgFAAgHQAAgHAFgGQAGgGAHABQAIgBAFAGQAFAGAAAHQAAAHgFAFQgFAGgIAAQgHAAgGgGgAHuBKIhIhgIAABgIggAAIAAiUIAgAAIBGBcIAAhcIAgAAIAACUgAFIBKIAAiUIAgAAIAACUgAERBKIgtg8IgMAOIAAAuIggAAIAAiUIAgAAIAABDIA1hDIAoAAIg8BGIBABOgAiqBKIAAiUIA8AAQAjAAAWAVQAXAUAAAhQAAAigXAUQgWAUgjAAgAiKAuIAcAAQAVABANgOQANgOAAgTQAAgUgMgNQgNgNgWAAIgcAAgAjnBKIhIhgIAABgIggAAIAAiUIAhAAIBGBcIAAhcIAgAAIAACUgAmBBKIgKgZIhAAAIgKAZIgkAAIA6iUIAoAAIA6CUgAmTAVIgYg/IgYA/IAwAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.9,-7.8,133.8,15.6);


(lib.t1_2 = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHeB1QgwguAAhHQAAhIAwgtQAwgsBGAAQAuAAAiAVQAeASAUAfIg3AeQgMgSgTgLQgUgMgYAAQgqAAgdAdQgbAeAAArQAAAsAbAdQAdAdAqAAQAUAAATgHQARgHALgKIAAgmIhTAAIAAg4ICVAAIAAB2Qg0A8hRAAQhGAAgwgtgAMuB0QgugugBhGQABhGAugtQAuguBHAAQBHAAAvAuQAuAtAABGQAABGguAuQgvAthHAAQhHAAgugtgANehIQgaAcAAAsQAAAsAaAcQAaAeArAAQArAAAageQAagcAAgsQAAgsgagcQgagegrAAQgrAAgaAegAAYBvIAkgyQASASAYALQAbANAfAAQAaAAAOgLQAOgKAAgOQAAgSgcgKIg+gQQgpgLgVgPQgdgXABgoQAAgoAfgbQAigcA2AAQBKAAAwArIgmAxQgSgRgZgJQgXgIgZAAQgVAAgLAIQgMAJAAAOQAAAQAcAKQAQAFAtALQAqALAUASQAcAVAAAoQAAAtgeAaQgiAdg9AAQhUAAgwgygAjyB0QgxguAAhGQAAhGAxguQAugtBIAAQAvAAAkAYQAdATARAiIg4AcQgKgUgTgMQgVgOgXAAQgrAAgcAdQgbAeAAArQAAAsAbAdQAcAdArAAQAXAAAVgNQATgNAKgUIA4AcQgqBNhXAAQhIAAgugtgAq7BvIAkgyQATASAXALQAcANAeAAQAaAAAPgLQANgKAAgOQAAgSgcgKIg+gQQgpgLgVgPQgcgXAAgoQAAgoAggbQAhgcA2AAQBLAAAvArIglAxQgTgRgYgJQgXgIgZAAQgVAAgMAIQgMAJAAAOQAAAQAcAKQARAFAtALQAqALAUASQAcAVAAAoQAAAtgfAaQgiAdg8AAQhUAAgxgygAFJCVQgLgLAAgPQAAgQALgLQALgMAQAAQAPAAAMAMQALALAAAQQAAAPgLALQgMAMgPAAQgQAAgLgMgAVdCVQgLgLAAgPQAAgQALgLQALgMAQAAQAPAAAMAMQAKALABAQQgBAPgKALQgMALgPAAQgQAAgLgLgATlCVQgMgLAAgPQAAgQAMgLQALgMAPAAQAPAAAMAMQAMALgBAQQABAPgMALQgMALgPAAQgPAAgLgLgARtCVQgLgLAAgPQAAgQALgLQALgMAPAAQAPAAAMAMQALALAAAQQAAAPgLALQgMALgPAAQgPAAgLgLgAsMCcIgTg2IiGAAIgUA2IhMAAIB5k4IBUAAIB5E4gAsxAsIgxiFIgxCFIBiAAgAyPCcIg3jWIg2DWIhHAAIhak4IBLAAIA3DhIA8jhIA0AAIA7DhIA3jhIBKAAIhZE4gAFJgIQgLgLAAgQQAAgPALgLQALgMAQAAQAPAAAMAMQALALAAAPQAAAQgLALQgMAKgPAAQgQAAgLgKg");

	// Layer 2
	this.instance = new lib.gradient();
	this.instance.setTransform(-145,-20);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.8,-16.2,287.6,32.5);


(lib.t1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH0A6QgYgXAAgjQAAgjAYgWQAYgWAjAAQArAAAWAjIgcAOQgFgIgKgGQgKgGgMAAQgVAAgOAPQgOAOAAAVQAAAVAOAPQAOAPAVAAQAKAAAKgEQAIgDAFgFIAAgTIgpAAIAAgbIBLAAIAAA6QgbAdgoAAQgjAAgYgWgAk2A6QgYgXAAgjQAAgjAYgWQAYgWAjAAQArAAAWAjIgcAOQgFgIgKgGQgKgGgMAAQgVAAgOAPQgOAOAAAVQAAAVAOAPQAOAPAVAAQAKAAAKgEQAIgDAFgFIAAgTIgpAAIAAgbIBLAAIAAA6QgbAdgoAAQgjAAgYgWgAUOBNIAAiaIBnAAIAAASIhUAAIAAAyIBSAAIAAAPIhSAAIAAA2IBUAAIAAARgATaBNIgog+IgfAAIAAA+IgUAAIAAiaIA/AAQAWAAANANQAOANAAAVQAAAUgMALQgLALgSACIArA/gASTAAIAoAAQAOAAAJgIQAJgIAAgOQAAgNgJgIQgIgIgPAAIgoAAgAP5BNIAAiaIBnAAIAAASIhTAAIAAAyIBRAAIAAAPIhRAAIAAA2IBTAAIAAARgAPBBNIAAhHIhcAAIAABHIgTAAIAAiaIATAAIAABDIBcAAIAAhDIAUAAIAACagALzBNIAAiIIgyAAIAAgSIB3AAIAAASIgyAAIAACIgAGkBNIhLhjIAABjIghAAIAAiaIAiAAIBJBgIAAhgIAhAAIAACagAD4BNIAAiaIAhAAIAACagAC4BNIhLhjIAABjIghAAIAAiaIAiAAIBJBgIAAhgIAhAAIAACagAANBNIhJhjIAABjIghAAIAAiaIAiAAIBHBgIAAhgIAhAAIAACagAieBNIAAiaIAiAAIAACagAnQBNIAAiaIBvAAIAAAeIhOAAIAAAhIBNAAIAAAbIhNAAIAAAjIBOAAIAAAdgApsBNIAAiaIBTAAQAVAAANAMQALALAAARQAAAOgIAKQgHAKgMACQANABAIAKQAJAKAAAPQAAASgMAMQgMAMgWAAgApKAwIArAAQAJAAAGgEQAFgFAAgIQAAgIgFgFQgGgGgJAAIgrAAgApKgOIApAAQAJAAAFgFQAFgEAAgIQAAgIgFgEQgFgFgJAAIgpAAgAsrBNIAAiaIBmAAIAAASIhTAAIAAAyIBSAAIAAAPIhSAAIAAA2IBTAAIAAARgAtjBNIAAhHIhcAAIAABHIgUAAIAAiaIAUAAIAABDIBcAAIAAhDIATAAIAACagAwyBNIAAiIIgxAAIAAgSIB3AAIAAASIgyAAIAACIgAzNBNIhbh6IAAB6IgTAAIAAiaIATAAIBbB4IAAh4IATAAIAACagA10BNIAAiaIAUAAIAACag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139.7,-8,279.5,16.2);


(lib.skins_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.skins();
	this.instance.setTransform(-163.5,-66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.5,-66,327,132);


(lib.skin_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.skin();
	this.instance.setTransform(-100,-68);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100,-68,200,136);


(lib.logoMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AExDDQgIAAgJgDQgJgCgGgEQgGgEgEgGQgDgHAAgHIAAhaQAAgGADgHQAEgGAGgEQAGgEAJgCQAHgCAKAAIBxAAQAVAAANAHQANAJAAAPIAABbQAAAIgEAHQgFAGgFADQgHAEgIABQgLADgHAAgAE3CiIBnAAIAAhaIhnAAgABSDDQgIAAgJgDQgJgCgFgEQgGgEgEgGQgEgGAAgIIAAhaQAAgIAEgEQADgGAHgEQAHgFAHgCQAJgCAJAAIBwAAQAWAAAMAHQANAIAAAQIiaAAIAABaIBnAAIAAgcIgkAAQgTAAgNgIQgNgIgCgLIAAgGICGAAIAAA9QAAAIgEAHQgDAEgHAGQgHADgIACQgLADgHAAgAjADDQgKAAgHgDQgJgBgHgEQgHgFgEgFQgEgHAAgIICbAAIAAgcIhtAAIgRgCQgJgDgGgEQgGgEgEgFQgEgHAAgIIAAgZQAAgJAEgHQAEgHAGgEQAGgEAJgCQAHgCALAAIBuAAQAXgBAMAIQAOAHAAARIiaAAIAAAdIBpAAIASACQAIACAIADQAHAFADAFQAFAGAAAIIAAAeQAAARgOAIQgNAIgWAAgAmiDDQgJAAgIgDQgJgCgGgEQgFgEgFgGQgEgHAAgHIAAhaQAAgHAEgFQAEgGAGgEQAHgFAIgCQAIgCAJAAIBxAAQAWgBAMAJQANAJAAAOQAAAKgFAEIgKAHQgGAEgJACQgJADgIAAIgFAAIAAgeIhnAAIAABaIBoAAIAAgeIAyAAIAAAeQAAAIgEAGQgDAGgGAFQgHADgIACQgLADgHAAgAgQC6IAAgvIAjAAIAAAvgAgQB1IAAguIAjAAIAAAugABHgaQgKAAgKgCQgKgEgFgDQgGgEgFgHQgEgHAAgIIAAhiQAAgHAEgGQAEgHAHgFQAHgEAIgCQAJgEAKAAIB7AAQAXABAOAIQAOAJAAASIioAAIAAAfIBqAAIAAAkIhqAAIAAAfICoAAQAAAJgEAHQgFAHgGADQgGAEgKADQgMABgIAAgAjcgaIAAioICsAAQAXABAOAIQAMAJAAASIAAAfQAAARgPAKQgRAIgcABIhTAAQAAgHACgGQABgFAEgGQAEgGAGgDQAHgDAIAAIA5AAIAAgfIhvAAIAABdQAAAYgPAIQgIAFgIABIgTABgAmdgaQgKAAgJgCQgLgEgFgDQgHgFgEgGQgEgHAAgHIAAhjQAAgHAEgHQAEgGAHgFQAHgFAJgCQAJgDAKAAIB6AAQAXABAOAIQAOAKAAAQIAABjQAAAJgEAHQgDAGgIAEQgGAFgKACQgMABgIAAgAmXg8IBwAAIAAhiIhwAAgAG7gbIgOgCIgPgGQgIgDgFgGIhShNIAABfIg3AAIAAioIAWABIAOADQAGABAIAEQAGADAIAGIBRBNIAAg9QAAgRAOgJQAPgHAWgBIAEAAIAACog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-19.5,93.1,39);


(lib.light3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.light3();
	this.instance.setTransform(-186,-72.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-186,-72.5,372,145);


(lib.light2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.light2();
	this.instance.setTransform(-196,-256.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-196,-256.5,392,513);


(lib.light_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.light();
	this.instance.setTransform(-232.5,-211.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-232.5,-211.5,465,423);


(lib.hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand();
	this.instance.setTransform(-170,-171);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-170,-171,341,343);


(lib.clouds_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.clouds();
	this.instance.setTransform(-94,-110);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94,-110,189,221);


(lib.btn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHmBdQgHgHgBgJQABgLAHgHQAJgIALAAQAMAAAJAIQAIAHAAALQAAAJgIAHQgJAIgMAAQgLAAgJgIgAoEBJQgSgbAAguQAAgtASgbQAUgcAlAAQAYAAAQAPQAOAOAHAVIgoAOQgDgMgEgFQgFgIgJAAQgXAAgBA9QABA+AXAAQAMAAAHgIIAAgbIgYAAIAAglIBEAAIAABUQgNAOgOAGQgQAHgUAAQglAAgUgcgAFdBiIAAjDIBoAAIAAAnIg2AAIAAAnIA0AAIAAAkIg0AAIAAAqIA2AAIAAAngAD0BiIAAicIghAAIAAgnIB0AAIAAAnIggAAIAACcgACaBiIgFggIgnAAIgFAgIg0AAIAvjDIA6AAIAwDDgACPAbIgOhLIgNBLIAbAAgAg6BiIAAjDIBnAAIAAAnIg1AAIAAAnIAzAAIAAAkIgzAAIAABRgAjXBiIAAicIghAAIAAgnIB0AAIAAAnIggAAIAACcgAlxBiIAAjDIBoAAIAAAnIg2AAIAAAnIA0AAIAAAkIg0AAIAAAqIA2AAIAAAngAHmAhIgHiCIA2AAIgGCCg");

	this.instance = new lib.btnBg();
	this.instance.setTransform(-81,-30);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81,-30,163,61);


(lib.boxBlur_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.boxBlur();
	this.instance.setTransform(-113,-119);

	// Layer 1
	this.instance_1 = new lib.boxBlur();
	this.instance_1.setTransform(-113,-119);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113,-119,226,238);


(lib.box_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.box();
	this.instance.setTransform(-113,-107);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113,-107,226,214);


(lib.bgImg1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgImg1();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(254).to({_off:false},0).to({alpha:1},10).wait(1));

	// logo
	this.instance_1 = new lib.logoMc();
	this.instance_1.setTransform(0,-242,0.01,0.01);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(154).to({_off:false},0).to({scaleX:1.72,scaleY:1.72},10,cjs.Ease.get(1)).wait(101));

	// t5_2
	this.instance_2 = new lib.t5_2();
	this.instance_2.setTransform(300,235.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(209).to({_off:false},0).to({x:1.2},10,cjs.Ease.get(1)).wait(46));

	// t5_1
	this.instance_3 = new lib.t5_1();
	this.instance_3.setTransform(-300,198.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).to({x:-73.2},10,cjs.Ease.get(1)).wait(51));

	// t4_2
	this.instance_4 = new lib.t4_2();
	this.instance_4.setTransform(300,234.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(159).to({_off:false},0).to({x:1.2},10,cjs.Ease.get(1)).wait(25).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// t4_1
	this.instance_5 = new lib.t4_1();
	this.instance_5.setTransform(-300,198.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(154).to({_off:false},0).to({x:-71.7},10,cjs.Ease.get(1)).wait(30).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// t3_2
	this.instance_6 = new lib.t3_2();
	this.instance_6.setTransform(300,229.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({_off:false},0).to({x:50.9},10,cjs.Ease.get(1)).wait(25).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// t3_1
	this.instance_7 = new lib.t3_1();
	this.instance_7.setTransform(-300,199.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109).to({_off:false},0).to({x:-33.9},10,cjs.Ease.get(1)).wait(25).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// t2_2
	this.instance_8 = new lib.t2_2();
	this.instance_8.setTransform(300,231.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({x:16.9},10,cjs.Ease.get(1)).wait(25).to({x:-300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// t2_1
	this.instance_9 = new lib.t2_1();
	this.instance_9.setTransform(-300,197.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({x:-74.5},10,cjs.Ease.get(1)).wait(30).to({x:300},10,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// t1_2
	this.instance_10 = new lib.t1_2();
	this.instance_10.setTransform(300,232.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:-300},10).to({_off:true},1).wait(205));

	// t1_1
	this.instance_11 = new lib.t1_1();
	this.instance_11.setTransform(-300,197.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({x:-2.6},10,cjs.Ease.get(1)).wait(30).to({x:300},10).to({_off:true},1).wait(205));

	// btn
	this.instance_12 = new lib.btn();
	this.instance_12.setTransform(10,130,0.01,0.01);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(204).to({_off:false},0).to({scaleX:1,scaleY:1},10).wait(15).to({scaleX:0.96,scaleY:0.96},0).wait(2).to({scaleX:1,scaleY:1},0).wait(8).to({scaleX:0.96,scaleY:0.96},0).wait(2).to({scaleX:1,scaleY:1},0).wait(24));

	// hand
	this.instance_13 = new lib.hand_1();
	this.instance_13.setTransform(-362.1,-21.4,1,1,-30);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(154).to({_off:false},0).to({rotation:0,x:-10,y:-23},10,cjs.Ease.get(1)).wait(101));

	// skin
	this.instance_14 = new lib.skin_1();
	this.instance_14.setTransform(-13,9,0.01,0.01);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(109).to({_off:false},0).to({scaleX:1,scaleY:1,y:-67},10,cjs.Ease.get(1)).wait(25).to({y:49,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// skins
	this.instance_15 = new lib.skins_1();
	this.instance_15.setTransform(1.7,0.7,0.01,0.01);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(59).to({_off:false},0).to({scaleX:1,scaleY:1,x:-9.5,y:-50},10,cjs.Ease.get(1)).wait(30).to({scaleX:1.5,scaleY:1.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// light3
	this.instance_16 = new lib.light3_1();
	this.instance_16.setTransform(-182.1,-92.5);
	this.instance_16.alpha = 0;
	this.instance_16.compositeOperation = "lighter";
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(109).to({_off:false},0).to({alpha:1},10).wait(25).to({y:23.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// light2
	this.instance_17 = new lib.light2_1();
	this.instance_17.setTransform(-2,-213);
	this.instance_17.alpha = 0;
	this.instance_17.compositeOperation = "lighter";
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(99).to({_off:false},0).to({alpha:1},10).wait(35).to({y:-97,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// light
	this.instance_18 = new lib.light_1();
	this.instance_18.setTransform(-82.5,-165.5);
	this.instance_18.alpha = 0;
	this.instance_18.compositeOperation = "lighter";
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(54).to({_off:false},0).to({alpha:1},5).wait(85).to({y:-49.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// box
	this.instance_19 = new lib.box_1();
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10).to({_off:false},0).wait(134).to({y:116,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// boxBlur
	this.instance_20 = new lib.boxBlur_1();
	this.instance_20.setTransform(0,-420);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({y:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(255));

	// clouds
	this.instance_21 = new lib.clouds_1();
	this.instance_21.setTransform(-63.5,60.8,0.4,0.4,0,0,180);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,x:-118,y:54},4).to({scaleX:0.94,scaleY:0.94,x:-125.9,y:48.2},36).to({scaleX:1,scaleY:1,x:-128,y:46.5,alpha:0},10).to({_off:true},1).wait(205));

	// clouds
	this.instance_22 = new lib.clouds_1();
	this.instance_22.setTransform(67.6,30,0.4,0.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(9).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,x:91.1,y:7.8},4).to({scaleX:0.94,scaleY:0.94,x:123.2,y:12.3},36).to({scaleX:1,scaleY:1,x:132.1,y:13.5,alpha:0},10).to({_off:true},1).wait(205));

	// bgImg1
	this.instance_23 = new lib.bgImg1_1();
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(49).to({_off:false},0).to({alpha:1},10).wait(206));

	// bg
	this.instance_24 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-539,300,839);


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
p.nominalBounds = new cjs.Rectangle(149,61,302,840);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;