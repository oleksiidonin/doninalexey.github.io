(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/symbols.png", id:"symbols"},
		{src:"images/tel.png", id:"tel"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.symbols = function() {
	this.initialize(img.symbols);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1742,149);


(lib.tel = function() {
	this.initialize(img.tel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,428);


(lib.ьMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhlDyIAAnjIAgAAIAADHIA8AAQA4AAAbAdQAcAbAAA5IAAA2QAAB1hnAAgAhFDVIBEAAQAlAAASgYQAQgUAAgrIAAg4QAAgsgUgUQgTgTgoAAIg8AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.2,-24.2,20.5,48.5);


(lib.хMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABhDyIhhjiIhiDiIggAAIBvj6IhnjpIAhAAIBaDRIBcjRIAfAAIhmDpIBtD6g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.1,-24.3,26.2,48.6);


(lib.уMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmDyIAAgcQAfAAARgOQAOgMAKgfIAUg7Ih1lTIAhAAIBhErIBbkrIAiAAIh+GJQgLAxgTATQgXAWgsAAIgHAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.8,-24.3,25.7,48.6);


(lib.тMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgODyIAAnGIhjAAIAAgdIDjAAIAAAdIhjAAIAAHGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,-24.3,23,48.6);


(lib.сMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhODTQgZggAAg3IAAj3QAAg3AZggQAbgjAzAAQA1AAAbAjQAYAgAAA3IAAApIgeAAIAAgrQAAgqgRgXQgTgagmAAQgkAAgSAaQgRAXAAAqIAAD7QAAApARAYQASAaAkAAQAmAAATgaQARgYAAgpIAAg6IAeAAIAAA4QAAA3gYAgQgbAjg1AAQg0AAgagjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-24.6,21,49.3);


(lib.рMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhlDyIAAnjIBlAAQBmAAAAB2IAAA0QAAA6gbAbQgcAdg4AAIg8AAIAADHgAhFAOIA8AAQApAAATgTQATgUAAgsIAAg4QAAgqgQgVQgRgYglAAIhFAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.2,-24.2,20.5,48.5);


(lib.пMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABLDyIAAnGIiVAAIAAHGIggAAIAAnjIDVAAIAAHjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-24.2,21.6,48.5);


(lib.оMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhQDUQgZggAAg4IAAj2QAAg4AZggQAcgjA0AAQA1AAAcAjQAZAgAAA4IAAD2QAAA4gZAgQgcAig1AAQg0AAgcgigAg4i+QgRAXAAAqIAAD7QAAAqARAXQATAaAlAAQAmAAATgaQARgXAAgqIAAj7QAAgpgRgYQgTgagmAAQglAAgTAag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-24.7,21.4,49.3);


(lib.нMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABKDyIAAjkIiUAAIAADkIghAAIAAnjIAhAAIAADkICUAAIAAjkIAiAAIAAHjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-24.3,21.6,48.6);


(lib.кMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABSDyIiDjkIgiA1IAACvIggAAIAAnjIAgAAIAAD/ICcj/IAiAAIiJDiICSEBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,-24.2,23.2,48.5);


(lib.иMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABPDyIAAmrIiXGrIgjAAIAAnjIAdAAIAAGdICUmdIAmAAIAAHjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-24.2,21.6,48.5);


(lib.зMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhPDTQgYggAAg4IAAgoIAeAAIAAAqQAAAqARAXQATAbAlAAQBIAAAAheIAAgmQAAglgTgWQgVgXghAAIgbAAIAAgaIAcAAQAfAAAVgXQAUgYAAgiIAAgSQAAhehIAAQglAAgTAaQgRAYAAAqIAAAaIgeAAIAAgZQAAg4AZgfQAbgjAzAAQA1AAAbAjQAYAfAAA5IAAAMQAAAkgRAbQgRAbggAKQAhAJARAZQAQAZAAAlIAAAlQAAA5gYAfQgbAjg1AAQg0AAgbgjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-24.7,21,49.3);


(lib.еMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AheDyIAAnjIC9AAIAAAdIidAAIAADDICCAAIAAAbIiCAAIAADLICdAAIAAAdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-24.2,19.2,48.6);


(lib.дMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABzEUIAAhEIjmAAIAABEIgfAAIAAhhIAhAAQAOgNAFgVQAFgQAAgbIAUl5ICwAAIAAHGIAoAAIAABhgAg5BmQgCAdgDAPQgFAUgNANICaAAIAAmpIhxAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-27.6,29.5,55.3);


(lib.вMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhoDyIAAnjIBnAAQAzAAAXAaQAWAZABA0IAAAcQAAAqgOAWQgPAYgjAHQBIAPABBYIAAApQAABxhpAAgAhHDVIBHAAQAmAAARgWQARgUAAgqIAAgsQAAgugUgUQgVgTgqAAIg8AAgAhHgbIA2AAQArAAASgQQAUgQAAgtIAAgfQAAgogOgSQgRgUgjAAIhFAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-24.2,21,48.5);


(lib.бMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhqDyIAAnjIDDAAIAAAdIijAAIAACyIBFAAQA4AAAbAYQAcAYABA5IAAA3QAAB0hrAAgAhKDVIBKAAQAnAAASgWQARgVAAgqIAAg7QABgrgVgRQgSgOgpAAIhFAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-24.3,21.4,48.6);


(lib.аMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABiDyIgYhrIiVAAIgZBrIgdAAIBqnkIAtAAIBsHkgABFBrIhGk4IhGE4ICMAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-24.3,26.1,48.6);


(lib.wMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABEDyIhBmLIhCGLIgsAAIhPnjIAfAAIBJG4IBHm2IAgAAIBEG1IBGm3IAcAAIhOHjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-24.3,37.5,48.6);


(lib.urText = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANlCqIAAhJIAHAAIAAAGQAFgGAJAAQAJgBADAFQAHAFAAARQAAAPgHAFQgDAFgJAAQgIAAgGgGIAAAcgANsB7QAAASANABQAMgBAAgSQAAgUgMAAQgNAAAAAUgAvNCqIAAhJIAHAAIAAAGQAFgGAJAAQAIgBAEAFQAHAFgBARQABAPgHAFQgEAFgIAAQgJAAgFgGIAAAcgAvGB7QAAASANABQAMgBAAgSQAAgUgMAAQgNAAAAAUgAIGCpIAAgHIACAAQAGABACgHIAEgKIgTgxIAJAAIANAoIAOgoIAIAAIgXA/QgDAJgKAAgAk3CpIAAgHIADAAQAGABACgHIAEgKIgSgxIAIAAIANAoIAOgoIAIAAIgXA/QgEAJgJAAgAqVCiIAAgPIgnAAIAAgyIAHAAIAAAsIAZAAIAAgsIAGAAIAAAsIAIAAIAAAVgAs8CiIAAgPIgmAAIAAAPIgHAAIAAgVIAGAAQAGgQAAgSIAAgKIAgAAIAAAsIAIAAIAAAVgAtWBxQAAAPgFANIAXAAIAAglIgSAAgAOgCPQgGgHAAgNQAAgOAGgHQAGgFAIAAQAKAAAEAFQAHAHAAAOQAAANgHAHQgFAFgJAAQgIAAgGgFgAOmBrQgFAEAAAMQAAAKAFAEQADAFAFAAQAFAAAFgFQADgDAAgLQAAgNgDgDQgFgEgFAAQgEAAgEAEgAMLCNQgHgHABgLQgBgMAHgIQAFgGALAAIAIABIAIAGIgFAEIgGgEIgFgBQgPAAAAAUQAAASAOABIAGgBQAEgCACgDIAFAFQgEAEgEABQgEACgEAAQgLAAgFgHgAKjCPQgFgHgBgNQABgOAFgHQAGgFAJAAQAKAAAEAFQAHAHgBAOQABANgHAHQgFAFgJAAQgJAAgGgFgAKpBrQgEAEAAAMQAAAKAEAEQAEAFAFAAQAFAAAFgFQADgEAAgKQAAgMgDgEQgFgEgFAAQgEAAgFAEgAJsCUIAAgKQgfgBAAgdQAAgdAfAAIAAgHIAHAAIAAAHQAeAAAAAdQAAAdgeABIAAAKgAJzCEQAXAAgBgYQABgXgXABgAJVBsQAAAYAXAAIAAguQgXgBAAAXgAFfCNIAFgFQAFAFAJABQAFAAADgCQAFgDAAgEQAAgIgLAAIgHAAIAAgHIAHAAQAKABAAgJQAAgHgMgBQgHAAgGAFIgEgFQAIgGAKABQAIgBAFAEQAGADgBAHQABAIgJAEQAJACAAAKQAAAGgFAEQgGAEgIAAQgNAAgHgHgAEwCPQgFgDAAgGQAAgPASgBIAPAAIAAgEQAAgMgNAAQgIABgFAFIgEgEQAFgHAMAAQAVgBAAASIAAAhIgIAAIAAgEQgFAFgKAAQgJAAgEgFgAEzCFQAAAJALAAQAIAAAEgEQACgBAAgIIAAgFIgOAAQgLAAAAAJgADQCPQgEgDABgGQgBgIAFgDQAEgFAJAAIAPAAIAAgEQAAgMgNAAQgIABgEAFIgGgEQAGgHANAAQATgBAAASIAAAhIgHAAIAAgEQgGAFgJAAQgJAAgFgFgADUCFQgBAJAMAAQAIAAADgEQADgCAAgHIAAgFIgOAAQgMAAABAJgAh0CPQgEgDgBgGQABgPARgBIAPAAIAAgEQAAgMgNAAQgIABgFAFIgEgEQAFgHAMAAQAUgBAAASIAAAhIgHAAIAAgEQgFAFgKAAQgJAAgEgFgAhxCFQAAAJAMAAQAHAAAEgEQACgCAAgHIAAgFIgOAAQgLAAAAAJgAlhCNQgHgHABgLQgBgMAHgIQAFgGALAAIAIABIAIAGIgEAEIgHgEIgFgBQgPAAAAAUQAAASAPABIAFgBIAHgFIAEAFQgEAEgEABQgDACgFAAQgLAAgFgHgAnRCPQgFgHAAgNQAAgOAFgHQAGgFAJAAQAKAAAEAFQAHAHgBAOQABANgHAHQgFAFgJAAQgJAAgGgFgAnLBrQgEAEAAAMQAAAKAEAEQAEAFAFAAQAGAAADgFQAEgEAAgKQAAgMgEgEQgDgEgGAAQgFAAgEAEgAspCPQgDgDAAgGQAAgPAQgBIAPAAIAAgEQAAgMgMAAQgIABgFAFIgFgEQAGgHAMAAQAUgBAAASIAAAhIgIAAIAAgEQgEAFgKAAQgJAAgFgFgAsmCFQAAAJAMAAQAIAAADgEQADgCgBgHIAAgFIgNAAQgMAAAAAJgAuTCPQgFgHAAgNQAAgOAFgHQAGgFAJAAQAKAAAEAFQAHAHgBAOQABANgHAHQgFAFgJAAQgJAAgGgFgAuNBrQgEAEAAAMQAAAKAEAEQAEAFAFAAQAGAAAEgFQADgEAAgKQAAgMgDgEQgFgEgFAAQgEAAgFAEgAP4CTIAAgKIAJAAIAAAKgAPcCTIAAgrIgSAAIAAgHIApAAIAAAHIgQAAIA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AEQgFAFgJAAQgMgBgIgHgAFvAVQgEgEAAgGQAAgHAFgEQAFgCAHAAIAPAAIAAgFQAAgLgMAAQgJAAgEAGIgFgFQAGgIAMAAQAUAAAAASIAAAgIgIAAIAAgFQgFAFgJABQgJgBgFgEgAFyAKQAAAJAMAAQAIAAADgDQACgCAAgHIAAgGIgOAAQgLABAAAIgAEMAAQAAgLAFgGQAFgIAKAAQALAAAFAIQAGAGgBALIAAABIghAAQAAASAOAAQAIAAAGgFIAEADQgHAJgLAAQgWAAAAgagAEugCIgCgIQgDgIgJAAQgHAAgEAIIgBAIIAaAAIAAAAgAhlAAQAAgLAFgGQAGgIAKAAQAUAAAAAZIAAABIgiAAQAAASAPAAQAIAAAFgFIAFADQgIAJgKAAQgWAAAAgagAhDgCQAAgFgCgDQgEgIgHAAQgJAAgDAIIgCAIIAbAAIAAAAgAjgAAQAAgLAGgGQAEgIAKAAQAKAAAGAIQAFAGAAALIAAABIgiAAQAAASAPAAQAHAAAGgFIAFADQgIAJgLAAQgVAAAAgagAi+gCIgCgIQgDgIgJAAQgIAAgDAIQgCADAAAFIAbAAIAAAAgAlOAAQAAgLAFgGQAGgIAJAAQALAAAFAIQAGAGgBALIAAABIghAAQAAASAOAAQAHAAAHgFIAEADQgHAJgLAAQgWAAAAgagAksgCIgCgIQgDgIgJAAQgIAAgDAIQgBADAAAFIAaAAIAAAAgAmmASQgGgGAAgMQAAgKAGgHQAGgIALAAQAEAAAEACQAEACAFAEIgGAFIgGgFIgFAAQgPAAAAARQAAATAPAAIAFgBQADgCADgCIAGAEQgFAEgEACQgDABgFABQgLAAgGgIgAnfAVQgDgEgBgGQABgHAEgEQAFgCAHAAIAQAAIAAgFQAAgLgNAAQgIAAgFAGIgFgFQAGgIAMAAQAVAAAAASIAAAgIgIAAIAAgFQgGAFgJABQgJgBgFgEgAncAKQAAAJAMAAQAIAAAEgDQACgCAAgHIAAgGIgOAAQgMABAAAIgAoVASIAEgEQAFAFAKAAQAEAAAFgCQADgDAAgEQAAgIgKAAIgIAAIAAgEIAIAAQAJAAAAgIQAAgIgLAAQgIAAgGAEIgDgEQAHgHALAAQAHAAAFAFQAGADAAAHQgBAHgHADQAJACAAAJQgBAGgFAEQgGAFgIAAQgMg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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-17,240,34.1);


(lib.tel_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tel();
	this.instance.setTransform(-184,-214);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184,-214,368,428);


(lib.symbsImg = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.symbols();
	this.instance.setTransform(-696.8,-59.6,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-696.8,-59.6,1393.6,119.2);


(lib.sMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhPDUQgYgfAAg4IAAgZIAfAAIAAAaQAAAqAQAXQATAaAlgBQAlABASgaQARgXAAgqQABgmgcgfQgPgRgrghQgrgdgRgWQgcgkAAgtQAAg5AYgeQAbgiAyABQA1AAAbAhQAYAgAAA4IAAAKIgfAAIAAgMQAAgqgQgWQgTgaglAAQgkgBgSAaQgQAXAAApQAAAnAbAgQAQARArAhQArAdARAWQAbAjAAAtQAAA4gYAfQgbAjg1gBQg0ABgbgjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-24.7,20.9,49.4);


(lib.rMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABLDyQgLgSAAgoIAAhMQAAgugYgUQgWgRgrAAIgyAAIAADZIggAAIAAnjIBlAAQBmAAAABtIAAArQAAArgRAYQgRAXgkAIQBGAQAABTIAABMQAAAoAMASgAhLgCIAzAAQAsAAAVgQQAXgTAAguIAAguQAAgpgQgUQgSgWglAAIhEAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-24.3,21.7,48.6);


(lib.nMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABIDyIiWmuIAAGuIgdAAIAAnjIAqAAICQGYIAAmYIAdAAIAAHjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-24.2,21.7,48.6);


(lib.mask_mc9 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-39.9,0,40).s().p("A3bGPIAAsdMAu2AAAIAAMdg");
	this.shape.setTransform(150,161.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,121.6,300,80);


(lib.mask_mc8 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-47.5,0,47.5).s().p("A3bHaIAAuzMAu2AAAIAAOzg");
	this.shape.setTransform(150,88.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,41.3,300,95);


(lib.mask_mc7 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-39.9,0,40).s().p("A3bGQIAAseMAu2AAAIAAMeg");
	this.shape.setTransform(150,391.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,351.4,300,80);


(lib.mask_mc6 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-39.9,0,40).s().p("A3bGQIAAseMAu2AAAIAAMeg");
	this.shape.setTransform(150,326.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,286.1,300,80);


(lib.mask_mc5 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-39.9,0,40).s().p("A3bGPIAAseMAu2AAAIAAMeg");
	this.shape.setTransform(150,261.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,221.4,300,80);


(lib.mask_mc4 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-39.9,0,40).s().p("A3bGQIAAsfMAu2AAAIAAMfg");
	this.shape.setTransform(150,205.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,165.6,300,80);


(lib.mask_mc3 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-39.9,0,40).s().p("A3bGQIAAseMAu2AAAIAAMeg");
	this.shape.setTransform(150,370);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,330,300,80);


(lib.mask_mc2 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-39.9,0,40).s().p("A3bGQIAAsfMAu2AAAIAAMfg");
	this.shape.setTransform(150,301);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,261,300,80);


(lib.mask_mc1 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-39.9,0,40).s().p("A3bGPIAAseMAu2AAAIAAMeg");
	this.shape.setTransform(150,231);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,191,300,80);


(lib.mask_mc = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)","#FFFFFF"],[0,0.192,0.78,1],0,-39.9,0,40).s().p("A3bGQIAAseMAu2AAAIAAMeg");
	this.shape.setTransform(150,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,260,300,80);


(lib._img = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.iMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPDyIAAnjIAfAAIAAHjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,-24.2,3.2,48.5);


(lib.fMc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhaDyIAAnjIC1AAIAAAdIiWAAIAADPIB7AAIAAAbIh7AAIAADcg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.2,-24.3,18.4,48.6);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib._7Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+DyICGnGIiwAAIAAgeIDRAAIAAAdIiGHHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-24.3,21.1,48.6);


(lib._6Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AhQDUQgZgggBg4IAAj1QABg5AZggQAbgjA1AAQA1AAAbAiQAZAfAAA4IAAAFIgfAAIAAgHQAAgqgRgXQgSgZgnAAQglAAgTAaQgRAZAAAtIAABwQAagsA5AAQAyAAAYAiQAXAcAAA2IAAA8QgBA4gZAgQgcAig1AAQg0AAgcgigAg4ACQgRAXAAApIAAA7QAAArARAXQATAaAlAAQAmAAATgaQARgXAAgrIAAg7QAAgpgRgXQgTgYgmAAQglAAgTAYg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-24.7,21.4,49.3);


(lib._2Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AhnD0IAAgXQAAg6AbgxQATggAqguQAugwAOgVQAbgpAAgsQAAhghIAAQgmAAgSAbQgRAYAAArIAAAhIgeAAIAAgfQAAg5AYggQAbgkA0AAQA1AAAbAjQAYAgAAA4QAAAvgbAsQgRAbgsAtQgqAvgRAbQgcAtAAAwIAAAFICrAAIAAAdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-24.5,20.9,49);


(lib._1Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AAVDyIAAmtQgaAlgvAEIAAgbQAigDASgUQASgQAKgeIAZAAIAAHkg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-24.3,10.7,48.6);


(lib._0Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AhQDUQgZggAAg4IAAj2QAAg5AZggQAcgiA0AAQA1AAAbAiQAaAgAAA5IAAD2QAAA4gaAgQgbAig1AAQg0AAgcgigAg4i+QgRAYAAAqIAAD5QAAArARAYQAUAaAkAAQAmAAASgaQASgYAAgrIAAj5QAAgqgSgYQgSgagmAAQgkAAgUAag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.6,-24.7,21.3,49.3);


(lib.Symbol = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AgOAeIAAg7IAdAAIAAA7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-3,3.1,6.1);


(lib.йMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.иMc();
	this.instance.setTransform(0,4.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwANQgUgOAAgbIAWAAQAAATAPAJQAMAJATAAQAUAAAMgJQAPgJABgTIAVAAQAAAbgUAOQgTAQgeAAQgdAAgTgQg");
	this.shape.setTransform(0.4,-25.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-28.8,21.6,57.6);


(lib.symbsMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjJG1IAAtpIGTAAIAANpg");
	mask.setTransform(0,-3.7);

	// Слой 1
	this.instance = new lib.symbsImg();
	this.instance.setTransform(685.8,2.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:653.3},0).wait(1).to({x:619.8},0).wait(1).to({x:582.3},0).wait(1).to({x:544.8},0).wait(1).to({x:509.3},0).wait(1).to({x:472.8},0).wait(1).to({x:434.8},0).wait(1).to({x:390.8},0).wait(1).to({x:347.3},0).wait(1).to({x:309.8},0).wait(1).to({x:273.3},0).wait(1).to({x:233.8},0).wait(1).to({x:195.3},0).wait(1).to({x:155.8},0).wait(1).to({x:114.8},0).wait(1).to({x:77.3},0).wait(1).to({x:40},0).wait(1).to({x:0},0).wait(1).to({x:-35.5},0).wait(1).to({x:-73.5},0).wait(1).to({x:-109},0).wait(1).to({x:-147},0).wait(1).to({x:-204.5},0).wait(1).to({x:-242},0).wait(1).to({x:-279.5},0).wait(1).to({x:-317.5},0).wait(1).to({x:-353.5},0).wait(1).to({x:-389.5},0).wait(1).to({x:-427},0).wait(1).to({x:-464.5},0).wait(1).to({x:-498.5},0).wait(1).to({x:-543.5},0).wait(1).to({x:-590},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-47.5,31.3,87.5);


(lib.symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc9();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc8();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc7();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc6();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc5();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc4();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc3();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc2();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc1();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		mask_mc.cache(0, 0, 300, 600); 
		
		
		logo.filters = [
			new createjs.AlphaMaskFilter(mask_mc.cacheCanvas)
		];
		logo.cache(0, 0, 300, 600);
		
		
		/*
		var mask_mc = this.mask_mc;
		var logo = this.logo;
		logo.x = 0;
		mask_mc.x = 0;
		logo.cache(0, 0, 271, 40);
		mask_mc.filters = [
			new createjs.AlphaMaskFilter(logo.cacheCanvas)
		];
		mask_mc.cache(0, 0, 232, 196);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mask_mc
	this.mask_mc = new lib.mask_mc();
	this.mask_mc.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.mask_mc).wait(1));

	// logo
	this.logo = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.sMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.rMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.nMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.iMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 8
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 9
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 10
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.fMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib._7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib._7Mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 4
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 6
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib._6Mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 4
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 6
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib._2Mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 4
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 6
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib._1Mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib._0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 2
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 6
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib._0Mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.ь = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.ьMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.х = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.хMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.у = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 7
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 8
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 9
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.уMc();
	this.instance_3.setTransform(0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.т = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.тMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.с = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.сMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.р = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.рMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.п = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.пMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.о = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 8
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 9
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 10
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.оMc();
	this.instance_3.setTransform(0.1,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.н = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.нMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.к = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.кMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.й = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.йMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.и = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.иMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.з = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.зMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.е = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.еMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.д = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.дMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.в = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.вMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.б = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 4
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 6
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.бMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.а = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.аMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Слой 3
	this.instance = new lib.symbsMc();
	this.instance.setTransform(681.5,-76.5,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-53.5},20).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.symbsMc();
	this.instance_1.setTransform(681.5,-9.2,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.8},20).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_2 = new lib.symbsMc();
	this.instance_2.setTransform(681.5,55.8,1,1,0,0,0,681.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:78.8},20).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.wMc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-136.1,1402.9,251.5);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(104).call(this.frame_104).wait(1));

	// Слой 2
	this.instance = new lib.symbol8();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},40).wait(65));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3blmIAAuiMAu3AAAIAAOig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-129}).wait(40).to({graphics:null,x:0,y:0}).wait(65));

	// й
	this.instance_1 = new lib.й();
	this.instance_1.setTransform(106.2,-211.9);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(89));

	// и
	this.instance_2 = new lib.и();
	this.instance_2.setTransform(79,-207.3);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(91));

	// к
	this.instance_3 = new lib.к();
	this.instance_3.setTransform(51.7,-207.3);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(93));

	// ь
	this.instance_4 = new lib.ь();
	this.instance_4.setTransform(24.7,-207.3);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(95));

	// н
	this.instance_5 = new lib.н();
	this.instance_5.setTransform(-1.9,-207.3);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(97));

	// е
	this.instance_6 = new lib.е();
	this.instance_6.setTransform(-27.5,-207.3);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(99));

	// в
	this.instance_7 = new lib.в();
	this.instance_7.setTransform(-52.9,-207.3);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).wait(101));

	// о
	this.instance_8 = new lib.о();
	this.instance_8.setTransform(-79.4,-207.4);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).wait(103));

	// н
	this.instance_9 = new lib.н();
	this.instance_9.setTransform(-106.2,-207.3);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(105));

	// Слой 4
	this.instance_10 = new lib.symbol9();
	this.instance_10.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(105));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A6IhhIAAsXMA0RAAAIAAMXg");
	mask_1.setTransform(0,-88.9);

	// 7
	this.instance_11 = new lib._7();
	this.instance_11.setTransform(69.6,-138.1);
	this.instance_11._off = true;

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(51).to({_off:false},0).wait(54));

	// е
	this.instance_12 = new lib.е();
	this.instance_12.setTransform(33.7,-138.1);
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},0).wait(56));

	// n
	this.instance_13 = new lib.n();
	this.instance_13.setTransform(7.8,-138.1);
	this.instance_13._off = true;

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).wait(58));

	// о
	this.instance_14 = new lib.о();
	this.instance_14.setTransform(-19,-138);
	this.instance_14._off = true;

	this.instance_14.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45).to({_off:false},0).wait(60));

	// н
	this.instance_15 = new lib.н();
	this.instance_15.setTransform(-45.9,-138.1);
	this.instance_15._off = true;

	this.instance_15.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(43).to({_off:false},0).wait(62));

	// р
	this.instance_16 = new lib.р();
	this.instance_16.setTransform(-71.7,-138.1);
	this.instance_16._off = true;

	this.instance_16.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(41).to({_off:false},0).wait(64));

	// i
	this.instance_17 = new lib.i();
	this.instance_17.setTransform(-89.1,-138.1);
	this.instance_17._off = true;

	this.instance_17.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(39).to({_off:false},0).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,600,600);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_184 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(184).call(this.frame_184).wait(63));

	// Слой 2
	this.instance = new lib.symbol4();
	this.instance.setTransform(-167.5,-334.7,1.116,1.116);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},40).wait(207));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6ICGIAAtuMA0RAAAIAANug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.1,y:-74.6}).wait(40).to({graphics:null,x:0,y:0}).wait(207));

	// ь
	this.instance_1 = new lib.ь();
	this.instance_1.setTransform(85.7,-105.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(235));

	// д
	this.instance_2 = new lib.д();
	this.instance_2.setTransform(55.7,-101.8);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(237));

	// о
	this.instance_3 = new lib.о();
	this.instance_3.setTransform(25.6,-105.4);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(239));

	// х
	this.instance_4 = new lib.х();
	this.instance_4.setTransform(-2.8,-105.4);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).wait(241));

	// и
	this.instance_5 = new lib.и();
	this.instance_5.setTransform(-31.6,-105.4);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(243));

	// р
	this.instance_6 = new lib.р();
	this.instance_6.setTransform(-57.4,-105.4);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(245));

	// п
	this.instance_7 = new lib.п();
	this.instance_7.setTransform(-84,-105.4);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(247));

	// Слой 4
	this.instance_8 = new lib.symbol5();
	this.instance_8.setTransform(-167.5,-334.7,1.116,1.116);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},83).wait(164));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("A6IG4IAAtvMA0RAAAIAANvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:0,y:-43}).wait(83).to({graphics:null,x:0,y:0}).wait(164));

	// й
	this.instance_9 = new lib.й();
	this.instance_9.setTransform(117.2,-44.2);
	this.instance_9._off = true;

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(55).to({_off:false},0).wait(192));

	// а
	this.instance_10 = new lib.а();
	this.instance_10.setTransform(88.5,-40);
	this.instance_10._off = true;

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(53).to({_off:false},0).wait(194));

	// р
	this.instance_11 = new lib.р();
	this.instance_11.setTransform(61.2,-40);
	this.instance_11._off = true;

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(51).to({_off:false},0).wait(196));

	// и
	this.instance_12 = new lib.и();
	this.instance_12.setTransform(34.7,-40);
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},0).wait(198));

	// б
	this.instance_13 = new lib.б();
	this.instance_13.setTransform(7.8,-40);
	this.instance_13._off = true;

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).wait(200));

	// а
	this.instance_14 = new lib.а();
	this.instance_14.setTransform(-20.8,-40);
	this.instance_14._off = true;

	this.instance_14.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45).to({_off:false},0).wait(202));

	// з
	this.instance_15 = new lib.з();
	this.instance_15.setTransform(-49,-40);
	this.instance_15._off = true;

	this.instance_15.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(43).to({_off:false},0).wait(204));

	// а
	this.instance_16 = new lib.а();
	this.instance_16.setTransform(-88,-40);
	this.instance_16._off = true;

	this.instance_16.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(41).to({_off:false},0).wait(206));

	// т
	this.instance_17 = new lib.т();
	this.instance_17.setTransform(-116.5,-40);
	this.instance_17._off = true;

	this.instance_17.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(39).to({_off:false},0).wait(208));

	// Слой 6
	this.instance_18 = new lib.symbol6();
	this.instance_18.setTransform(-167.5,-334.7,1.116,1.116);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},116).wait(131));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A6IG4IAAtvMA0RAAAIAANvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:0,y:29.3}).wait(116).to({graphics:null,x:0,y:0}).wait(131));

	// й
	this.instance_19 = new lib.й();
	this.instance_19.setTransform(30.8,27.5);
	this.instance_19._off = true;

	this.instance_19.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(88).to({_off:false},0).wait(159));

	// i
	this.instance_20 = new lib.i();
	this.instance_20.setTransform(12.9,31.7);
	this.instance_20._off = true;

	this.instance_20.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(86).to({_off:false},0).wait(161));

	// в
	this.instance_21 = new lib.в();
	this.instance_21.setTransform(-4.4,31.7);
	this.instance_21._off = true;

	this.instance_21.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(84).to({_off:false},0).wait(163));

	// с
	this.instance_22 = new lib.с();
	this.instance_22.setTransform(-30.6,31.7);
	this.instance_22._off = true;

	this.instance_22.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(82).to({_off:false},0).wait(165));

	// Слой 8
	this.instance_23 = new lib.symbol7();
	this.instance_23.setTransform(-167.5,-334.7,1.116,1.116);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(247));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("A6ILYIAAtlMA0RAAAIAANlg");
	mask_3.setTransform(0,72.8);

	// к
	this.instance_24 = new lib.к();
	this.instance_24.setTransform(113.7,102.5);
	this.instance_24._off = true;

	this.instance_24.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(130).to({_off:false},0).wait(117));

	// о
	this.instance_25 = new lib.о();
	this.instance_25.setTransform(86.2,102.5);
	this.instance_25._off = true;

	this.instance_25.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(128).to({_off:false},0).wait(119));

	// н
	this.instance_26 = new lib.н();
	this.instance_26.setTransform(59.4,102.5);
	this.instance_26._off = true;

	this.instance_26.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(126).to({_off:false},0).wait(121));

	// у
	this.instance_27 = new lib.у();
	this.instance_27.setTransform(31,102.5);
	this.instance_27._off = true;

	this.instance_27.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(124).to({_off:false},0).wait(123));

	// р
	this.instance_28 = new lib.р();
	this.instance_28.setTransform(4.1,102.5);
	this.instance_28._off = true;

	this.instance_28.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(122).to({_off:false},0).wait(125));

	// а
	this.instance_29 = new lib.а();
	this.instance_29.setTransform(-24,102.5);
	this.instance_29._off = true;

	this.instance_29.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(120).to({_off:false},0).wait(127));

	// д
	this.instance_30 = new lib.д();
	this.instance_30.setTransform(-56.2,106.1);
	this.instance_30._off = true;

	this.instance_30.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(118).to({_off:false},0).wait(129));

	// о
	this.instance_31 = new lib.о();
	this.instance_31.setTransform(-86.2,102.5);
	this.instance_31._off = true;

	this.instance_31.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(117).to({_off:false},0).wait(130));

	// п
	this.instance_32 = new lib.п();
	this.instance_32.setTransform(-112.9,102.5);
	this.instance_32._off = true;

	this.instance_32.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(115).to({_off:false},0).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.5,-334.7,669.4,669.3);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_124 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(124).call(this.frame_124).wait(121));

	// Слой 7
	this.instance = new lib.symbol3();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bIgIAAsKMAu3AAAIAAMKg");
	mask.setTransform(0,54.5);

	// е
	this.instance_1 = new lib.е();
	this.instance_1.setTransform(57.2,69.3);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({_off:true},145).wait(26));

	// r
	this.instance_2 = new lib.r();
	this.instance_2.setTransform(31.7,69.3);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({_off:true},147).wait(26));

	// о
	this.instance_3 = new lib.о();
	this.instance_3.setTransform(4.9,69.3);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({_off:true},149).wait(26));

	// т
	this.instance_4 = new lib.т();
	this.instance_4.setTransform(-20.9,69.3);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68).to({_off:false},0).to({_off:true},151).wait(26));

	// s
	this.instance_5 = new lib.s();
	this.instance_5.setTransform(-46.3,69.3);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66).to({_off:false},0).to({_off:true},153).wait(26));

	// Слой 6
	this.instance_6 = new lib.symbol2();
	this.instance_6.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},67).wait(178));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("A3bGGIAAsLMAu3AAAIAAMLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:0,y:1}).wait(67).to({graphics:null,x:0,y:0}).wait(178));

	// w
	this.instance_7 = new lib.w();
	this.instance_7.setTransform(39.2,0);
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(41).to({_off:false},0).to({_off:true},178).wait(26));

	// о
	this.instance_8 = new lib.о();
	this.instance_8.setTransform(5.1,0);
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({_off:true},180).wait(26));

	// н
	this.instance_9 = new lib.н();
	this.instance_9.setTransform(-21.6,0);
	this.instance_9._off = true;

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(37).to({_off:false},0).to({_off:true},182).wait(26));

	// s
	this.instance_10 = new lib.s();
	this.instance_10.setTransform(-48,0);
	this.instance_10._off = true;

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35).to({_off:false},0).to({_off:true},184).wait(26));

	// Слой 5
	this.instance_11 = new lib.symbol1();
	this.instance_11.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},36).wait(209));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A3bDwIAAsKMAu3AAAIAAMKg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:0,y:-54}).wait(36).to({graphics:null,x:0,y:0}).wait(209));

	// т
	this.instance_12 = new lib.т();
	this.instance_12.setTransform(98.5,-69.3);
	this.instance_12._off = true;

	this.instance_12.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({_off:false},0).to({_off:true},204).wait(26));

	// о
	this.instance_13 = new lib.о();
	this.instance_13.setTransform(72.8,-69.3);
	this.instance_13._off = true;

	this.instance_13.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({_off:true},206).wait(26));

	// r
	this.instance_14 = new lib.r();
	this.instance_14.setTransform(46.4,-69.3);
	this.instance_14._off = true;

	this.instance_14.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11).to({_off:false},0).to({_off:true},208).wait(26));

	// т
	this.instance_15 = new lib.т();
	this.instance_15.setTransform(20.1,-69.3);
	this.instance_15._off = true;

	this.instance_15.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},0).to({_off:true},210).wait(26));

	// х
	this.instance_16 = new lib.х();
	this.instance_16.setTransform(-7.7,-69.3);
	this.instance_16._off = true;

	this.instance_16.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(7).to({_off:false},0).to({_off:true},212).wait(26));

	// о
	this.instance_17 = new lib.о();
	this.instance_17.setTransform(-35.1,-69.3);
	this.instance_17._off = true;

	this.instance_17.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).to({_off:true},214).wait(26));

	// f
	this.instance_18 = new lib.f();
	this.instance_18.setTransform(-59.6,-69.3);
	this.instance_18._off = true;

	this.instance_18.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({_off:false},0).to({_off:true},217).wait(26));

	// у
	this.instance_19 = new lib.у();
	this.instance_19.setTransform(-97.1,-69.3);

	this.instance_19.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},219).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,600,600);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.symbol();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bGGIAAsLMAu3AAAIAAMLg");

	// 2
	this.instance_1 = new lib._2();
	this.instance_1.setTransform(-67.5,-0.1);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({_off:false},0).wait(83));

	// 6
	this.instance_2 = new lib._6();
	this.instance_2.setTransform(93.9,0);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(146));

	// 1
	this.instance_3 = new lib._1();
	this.instance_3.setTransform(71,0);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(148));

	// 0
	this.instance_4 = new lib._0();
	this.instance_4.setTransform(48,0);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(150));

	// 2
	this.instance_5 = new lib._2();
	this.instance_5.setTransform(21.9,-0.1);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(152));

	// .
	this.instance_6 = new lib.Symbol();
	this.instance_6.setTransform(4.3,21.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({alpha:1},3).wait(130));

	// 0
	this.instance_7 = new lib._0();
	this.instance_7.setTransform(-13.2,0);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).wait(154));

	// 1
	this.instance_8 = new lib._1();
	this.instance_8.setTransform(-36.1,0);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).wait(156));

	// .
	this.instance_9 = new lib.Symbol();
	this.instance_9.setTransform(-50.2,21.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23).to({_off:false},0).to({alpha:1},3).wait(134));

	// 1
	this.instance_10 = new lib._1();
	this.instance_10.setTransform(-67.5,-0.1);

	this.instance_11 = new lib._1Mc();
	this.instance_11.setTransform(-67.5,-0.1);
	this.instance_11._off = true;

	this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},72).to({state:[{t:this.instance_11}]},5).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(74).to({_off:false},0).to({y:48.4,alpha:0},5).wait(81));

	// 0
	this.instance_12 = new lib._0();
	this.instance_12.setTransform(-93.9,0);

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,600,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.setTransform(0,254.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(464).to({_off:false},0).to({alpha:0.391},10).wait(95).to({alpha:0},10).wait(1));

	// tel
	this.instance_1 = new lib.tel_1();
	this.instance_1.setTransform(0.4,143,0.36,0.36);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(464).to({_off:false},0).to({scaleX:0.72,scaleY:0.72,x:8,y:71,alpha:1},10).wait(95).to({alpha:0},10).wait(1));

	// t4
	this.instance_2 = new lib.t4();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(464).to({_off:false},0).wait(105).to({alpha:0},10).wait(1));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.setTransform(0,0,0.9,0.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(269).to({_off:false},0).wait(185).to({alpha:0},10).to({_off:true},1).wait(115));

	// t2
	this.t2 = new lib.t2();
	this.t2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(134).to({_off:false},0).wait(125).to({alpha:0},10).to({_off:true},1).wait(310));

	// t1
	this.t1 = new lib.t1();

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(124).to({alpha:0},10).to({_off:true},1).wait(445));

	// bgImg
	this.instance_4 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(580));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,1439.1,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,1440.1,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;