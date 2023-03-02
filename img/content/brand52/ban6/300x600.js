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
		{src:"images/glaz1.jpg", id:"glaz1"},
		{src:"images/glaz2.jpg", id:"glaz2"},
		{src:"images/handP1.png", id:"handP1"},
		{src:"images/handP2.png", id:"handP2"},
		{src:"images/handP3.png", id:"handP3"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img10.png", id:"img10"},
		{src:"images/img11.png", id:"img11"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.png", id:"img4"},
		{src:"images/img5.png", id:"img5"},
		{src:"images/img6_1.png", id:"img6_1"},
		{src:"images/img6_3.png", id:"img6_3"},
		{src:"images/img6_4.png", id:"img6_4"},
		{src:"images/img7.png", id:"img7"},
		{src:"images/img8.png", id:"img8"},
		{src:"images/img9.png", id:"img9"},
		{src:"images/kefir.png", id:"kefir"},
		{src:"images/kot1.png", id:"kot1"},
		{src:"images/moooo.png", id:"moooo"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.glaz1 = function() {
	this.initialize(img.glaz1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.glaz2 = function() {
	this.initialize(img.glaz2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.handP1 = function() {
	this.initialize(img.handP1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,79);


(lib.handP2 = function() {
	this.initialize(img.handP2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,79);


(lib.handP3 = function() {
	this.initialize(img.handP3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,27);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,111);


(lib.img10 = function() {
	this.initialize(img.img10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,207);


(lib.img11 = function() {
	this.initialize(img.img11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,77);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,81);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,166);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,77);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,130);


(lib.img6_1 = function() {
	this.initialize(img.img6_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,179);


(lib.img6_3 = function() {
	this.initialize(img.img6_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,77);


(lib.img6_4 = function() {
	this.initialize(img.img6_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,77);


(lib.img7 = function() {
	this.initialize(img.img7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,104);


(lib.img8 = function() {
	this.initialize(img.img8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,182);


(lib.img9 = function() {
	this.initialize(img.img9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,83);


(lib.kefir = function() {
	this.initialize(img.kefir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,120);


(lib.kot1 = function() {
	this.initialize(img.kot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,338);


(lib.moooo = function() {
	this.initialize(img.moooo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,74);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#094C86").s().p("AsTD5IAAjEIAeAAIAFARIACAAQAMgUAaAAQAZAAANATQAOATAAAgQAAAXgHAPQgGARgMAIQgMAIgQAAQgYAAgNgRIgCAAIACATIAAA4gAroBYQgGAJAAATIAAAEQAAAWAGAKQAHAJAOAAQAZAAAAgpQAAgUgGgKQgGgKgOAAQgNAAgHAIgAR/C7QgGgGAAgKQAAgKAGgFQAFgFALAAQAKAAAFAFQAGAFAAAKQAAAKgGAFQgFAGgKAAQgLAAgFgFgAP7C3QgQgKgHgPQgIgQAAgWQAAghARgSQASgTAfAAQAVAAAOAJQAPAIAIAQQAIARAAAUQAAAhgSATQgSATgfAAQgTAAgPgIgAQIBaQgHAKAAAUQAAAVAHAKQAHAKAPAAQAPAAAGgKQAHgLAAgUQAAgTgHgLQgGgKgQAAQgPAAgGAKgAEEC0QgLgLAAgVQAAgWAPgKQAQgKAegBIAYgBIAAgGQAAgVgWAAQgPAAgXAKIgMgZQAXgMAdAAQAcAAAOAMQAPAMAAAYIAABbIgaAAIgIgTIgBAAQgIALgLAGQgJAEgRAAQgTAAgMgLgAE/B+QgQAAgIAGQgIAGAAAKQAAAQASAAQANAAAIgHQAIgIAAgMIAAgLgAi6C3QgPgJgIgQQgIgQAAgWQAAghASgSQARgTAgAAQAUAAAOAJQAPAIAIAQQAIAQAAAVQAAAhgRATQgSATgfAAQgTAAgQgIgAisBaQgHAKAAAUQAAAVAHAKQAHAKAOAAQAPAAAHgKQAGgKAAgVQAAgUgGgKQgHgKgPAAQgOAAgHAKgAnjB5QAAgiARgTQASgSAgAAQAYAAASAJIgLAdIgQgGQgJgCgGAAQgdAAAAApQAAAoAdAAQAKAAAKgDQAJgDAJgGIAAAgQgJAFgJADQgLACgNAAQg/AAAAhGgApfC3QgPgJgIgQQgIgQAAgWQAAghASgSQARgTAgAAQAUAAAOAJQAPAIAIAQQAIAQAAAVQAAAigRASQgSATgfAAQgTAAgQgIgApRBaQgHAKAAAUQAAAVAHAKQAHAKAOAAQAPAAAHgKQAGgKAAgVQAAgUgGgKQgHgKgPAAQgOAAgHAKgAyjC3IAAgfQALAFAMADQALACANAAQAUAAAIgEQAJgDAAgIQAAgIgKgEQgIgEgVAAIgPAAIAAgaIAOAAQAVAAAJgDQAJgEAAgHQAAgHgHgDQgGgDgPAAQgLAAgKACQgJABgNAFIgLgaQAMgEAQgEQAMgCATAAQAZAAAQAKQAPAKAAAQQAAAXgbAHIAAABQAQAFAIAHQAHAIAAAMQAAANgIAJQgJAKgPAFQgPAFgUAAQgiAAgTgIgAOYC9IAAg4Ig0AAIAAA4IglAAIAAiIIAlAAIAAA0IA0AAIAAg0IAlAAIAACIgAL0C9IAAg3QAAgSACgXIg/BgIgsAAIAAiIIAkAAIgDBfIA/hfIAtAAIAACIgAGZC9IAAiIIAlAAIAABsIAuAAIAAhsIAlAAIAABsIAuAAIAAhsIAlAAIAACIgABjC9IAAiIIBFAAQAdAAANAJQAOAJAAARQAAAMgHAHQgGAHgOADIAAABQAPABAIAJQAJAIAAAMQAAATgQALQgPALgeAAgACICjIAeAAQALAAAHgEQAGgFAAgIQAAgIgGgEQgHgDgMAAIgdAAgACIBqIAbAAQAMAAAGgEQAGgDAAgIQAAgMgUAAIgfAAgAAlC9Ig2hFIAABFIglAAIAAiIIAlAAIAABCIAyhCIApAAIg2BBIA7BHgAk8C9IAAhtIgsAAIAAgbIB+AAIAAAbIgsAAIAABtgAtjC9IAAiTIhCAAIAACTIglAAIAAiyICNAAIAACygASACCIgGh3IAqAAIgGB3gAIehKQgTgSAAgiQAAgiARgSQASgTAeAAQAcAAARAQQAQARAAAdIAAASIhYAAQABAQAIAIQAJAJAQAAQALAAAMgCQAMgDALgFIAAAcQgIAFgNACQgJADgSAAQggAAgTgSgAJmiOQAAgNgHgIQgHgIgMAAQgMAAgHAIQgGAHgBAOIA0AAIAAAAgAkGhDQgLgLAAgVQAAgWAPgKQAPgKAfgCIAXAAIAAgGQAAgVgVAAQgRAAgVAKIgNgZQAYgMAdAAQAbAAAPAMQAOALAAAZIAABaIgaAAIgHgSIgBAAQgJAMgKAEQgKAFgQAAQgUAAgLgLgAjLh5QgQABgIAFQgIAFAAALQAAAQASAAQANAAAIgIQAHgHAAgMIAAgMgApqhQQgVgXAAgsQAAgcAKgVQAKgUATgMQATgLAaAAQAZAAAbANIgMAeIgVgIQgLgEgIAAQgWAAgLAQQgMARAAAcQAAA7AtAAQASAAAbgJIAAAgQgWAJgbAAQgnAAgUgYgAEig7IAAiIIAlAAIAABtIAtAAIAAhtIAmAAIAABtIAtAAIAAhtIAmAAIAACIgADVg7IAAiIIAmAAIAACIgACJg7IAAg4Ig0AAIAAA4IglAAIAAiIIAlAAIAAA1IA0AAIAAg1IAlAAIAACIgAgag7IAAg2QgNAIgLACQgMADgJAAQgXAAgMgMQgMgLAAgVIAAgzIAlAAIAAAyQAAASARAAQAMAAAIgDIASgGIAAg7IAjAAIAACIgAlSg7IAAhrIgCAIQgGAZgGAOIgYA8IgaAAIgZg9QgGgPgFgWIgCgJIAABrIgjAAIAAiIIAzAAIAYA6IAGAWIAFAVIAGgaIAdhLIAzAAIAACIgADUjmQAAgSAUAAQAUAAAAASQAAAJgFAFQgFAEgKAAQgUAAAAgSg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.8,-24.9,237.7,49.8);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A4C86").s().p("AHwFHIAAiuIAbAAIAFAPIABAAQAMgSAXAAQAVAAAMARQAMAQAAAeQAAAUgFANQgHAPgJAHQgLAIgOAAQgVAAgNgQIgBAAIABASIAAAxgAIXC4QgFAIgBARIAAAEQAAATAGAIQAGAJANAAQAWAAAAglQAAgRgGgJQgFgJgMAAQgMAAgGAHgAE1E9IAAgsIhSAAIAAAsIgdAAIAAhEIAKAAQAJgOAIgaQAHgbADgdIBWAAIAABgIARAAIAABEgAD/DXQgEARgJARIAuAAIAAhIIgZAAQgDAUgFASgAmbE9IAAgsIhRAAIAAAsIgeAAIAAhEIAKAAQALgQAHgYQAHgXADghIBVAAIAABgIASAAIAABEgAnQDXQgFAVgIANIAtAAIAAhIIgZAAQgCASgFAUgAqxE9IAAgsIhSAAIAAAsIgeAAIAAhEIALAAQAJgOAIgaQAIgcACgcIBWAAIAABgIARAAIAABEgArnDXQgEARgJARIAtAAIAAhIIgYAAQgDAUgFASgAMAEQQgFgFAAgJQAAgJAFgFQAFgEAJAAQAJAAAFAEQAFAGAAAIQAAAIgFAFQgFAFgJAAQgJAAgFgEgAKGEDQgRgPAAgeQAAgfAQgQQAPgRAbAAQAZAAAPAPQAOAPAAAZIAAAQIhOAAQABAPAHAHQAIAIAOAAQAKAAALgCQAJgCALgFIAAAZQgMAFgGABQgLADgNAAQgeAAgQgRgALGDHQAAgMgGgHQgHgGgKAAQgLAAgGAGQgFAHgBAMIAuAAIAAAAgAF7EMQgNgHgHgPQgHgPAAgSQAAgeAPgQQAPgRAdAAQASAAAMAIQAOAHAHAPQAHAOAAATQAAAdgQARQgPARgcAAQgSAAgNgIgAGHC6QgGAJAAASQAAASAGAJQAGAJANAAQAOAAAFgJQAGgJAAgSQAAgSgGgJQgFgJgOAAQgNAAgGAJgABaEDQgRgPAAgeQAAgfAQgQQAPgRAbAAQAZAAAPAPQAOAPAAAZIAAAQIhOAAQABAPAHAHQAIAIAOAAQAKAAALgCQAHgCANgFIAAAZQgMAFgGABQgMADgNAAQgdAAgQgRgACaDHQAAgMgHgHQgGgGgKAAQgLAAgGAGQgFAHgBAMIAuAAIAAAAgAgtEUIAAgZIgDAAQgTAAgQgHQgPgHgJgOQgIgOAAgSQAAgQAHgOQAIgNAPgIQAOgHAUAAIAGAAIAAgUIAeAAIAAAUIAGAAQARAAAPAHQAPAIAIANQAHAOAAAQQAAARgIAPQgJAOgPAHQgQAHgSAAIgCAAIAAAZgAgPDhIACAAQAPAAAKgJQAKgIAAgRQAAgOgJgJQgJgJgOAAIgFAAgAhLCoQgJAIAAAPQAAAQAKAJQAKAJARAAIACAAIAAhCIgFAAQgQAAgJAJgAkgEGQgOgNgDgZIgWAAIAAAxIghAAIAAh4IAhAAIAAAuIAWAAQADgXAPgNQAPgNAXAAQAaAAAPARQAPARAAAdQAAAegPAQQgPARgbAAQgXAAgPgOgAkLC6QgFAJAAASQAAARAFAKQAFAJANAAQALAAAGgJQAFgJAAgSQAAgTgFgIQgFgJgNAAQgLAAgGAJgAo/ERIAAgtIgSAAIgcAtIgjAAIAggvQgLgFgGgJQgGgKAAgMQAAgSANgKQAMgJAYAAIA4AAIAAB4gApiC0QgFADAAAHQAAAIAGAEQAGAEAJAAIATAAIAAgeIgXAAQgHAAgFAEgAMBDdIgFhqIAlAAIgFBqgAD0BnIAAgaQAGACAHAAQAIAAAHgGQAGgFAEgLIACgGIgwh2IAkAAIAXBDQAEAIAAAMIABAAQABgMAEgIIAWhDIAjAAIgzCGQgHATgNAKQgNAJgRAAQgKAAgHgCgABxBpIAAisIAbAAIAFAQIABAAQAMgSAXAAQAVAAAMAQQAMARAAAdQAAARgFAPQgGAOgLAIQgKAHgOAAQgVAAgNgPIgCAAIACARIAAAxgACYgjQgGAHAAARIAAAEQAAARAGAJQAFAIANAAQAXAAAAgiQAAgRgGgKQgGgJgLAAQgMAAgGAIgAgIBpIAAg0QgfgDgQgQQgSgQAAgZQAAgbARgQQARgQAfgCIAAguIAdAAIAAAuQAfADARAQQARAQAAAaQAAAagRAPQgRARgfACIAAA0gAAVAcQAOgCAJgKQAIgJAAgOQAAgOgIgKQgJgKgOgBgAgegfQgJALAAANQAAANAJAKQAIAKAOACIAAhHQgNACgJAKgASkBQQAIgiADgUIAeAAIACADQgGAVgNAegAOVgGQAAgeAQgRQAQgQAcAAQAUAAASAIIgKAaIgPgGIgNgCQgaAAAAAlQAAAhAaAAQALAAAHgCQAIgCAIgGIAAAcQgGAFgKACQgLACgKAAQg5AAAAg8gApDAuQgNgIgHgNQgHgPAAgRQAAgdAPgRQAQgQAcAAQARAAAOAHQANAIAHAOQAHAPAAASQAAAbgPARQgQARgcAAQgSAAgNgIgAo3giQgGAJAAASQAAAQAGAJQAGAKAOAAQANAAAGgKQAFgJAAgQQAAgRgFgKQgGgJgOAAQgNAAgGAJgAtaAuQgNgHgHgOQgHgPAAgRQAAgdAPgRQAPgQAdAAQASAAAMAHQAOAIAHAOQAHAPAAASQAAAcgQAQQgPARgcAAQgSAAgNgIgAtOgiQgGAJAAASQAAAQAGAJQAGAKANAAQAOAAAFgKQAGgJAAgQQAAgSgGgJQgFgJgOAAQgNAAgGAJgARsA0IAAgwQAAgNACgWIg3BTIgoAAIAAh3IAgAAIAAAwQAAAMgDAXIA4hTIAoAAIAAB3gANZA0IAAh3IAhAAIAAB3gALdA0IAAgwIACgjIg4BTIgnAAIAAh3IAgAAIgDBTIA4hTIAoAAIAAB3gAIhA0IAAheIgoAAIAAgZIBwAAIAAAZIgnAAIAABegAHOA0Igxg7IAAA7IghAAIAAh3IAhAAIAAA7IAug7IAlAAIgwA6IA0A9gAi/A0IAAh3IAhAAIAAB3gAk8A0IAAh3IAhAAIAAB3gAmAA0IAAgwQgMAGgJACQgIADgLAAQgUAAgLgKQgLgIAAgTIAAgtIAiAAIAAAsQAAAQAOAAQAJAAAJgCIAQgGIAAg0IAhAAIAAB3gArlA0IAAh3IA+AAQAZAAANAIQAMAIAAAQQAAAKgGAGQgHAHgLACIAAABQANACAHAHQAIAFAAALQAAASgOAJQgOAJgaAAgArEAdIAbAAQALAAAFgEQAGgEAAgHQAAgHgGgDQgGgDgKAAIgbAAgArEgUIAYAAQALAAAFgDQAGgDAAgHQAAgLgSAAIgcAAgAvqA0IAChTIg4BTIgnAAIAAh3IAgAAIgDBTIA4hTIAoAAIAAB3gAynA0IAAheIgnAAIAAgZIBwAAIAAAZIgoAAIAABegAjAhiQAAgQASAAQASAAAAAQQAAAHgFAFQgEAEgJAAQgSAAAAgQgAk9hiQAAgQASAAQASAAAAAQQAAAHgFAFQgEAEgJAAQgSAAAAgQgAN1hXQgEgDAAgIQAAgHAEgEQAFgEAGAAQAGAAAFAEQAEAEAAAHQAAAHgEADQgEAEgHAAQgHAAgEgDgANJhXQgEgEAAgHQAAgHAEgEQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgEAEgHAAQgHAAgEgDgAlkhyIAAiuIAbAAIAFAPIABAAQAMgSAXAAQAVAAAMARQAMAQAAAeQAAASgFAPQgHAPgJAHQgLAIgOAAQgVAAgNgQIgBAAIABASIAAAxgAk9kBQgGAIAAARIAAAEQAAATAGAIQAGAJANAAQAWAAAAglQAAgRgGgJQgFgJgMAAQgMAAgGAHgAMDiLQAIgjADgTIAeAAIACACQgGAXgNAdgAKZitQgOgIgHgOQgHgOAAgTQAAgdAPgRQAQgRAcAAQARAAAOAIQAMAHAIAPQAHAPAAASQAAAegPAQQgQARgcAAQgRAAgNgIgAKkj/QgFAJAAASQAAASAGAJQAFAJAOAAQANAAAGgJQAGgJAAgSQAAgSgGgJQgGgJgNAAQgOAAgGAJgADJipIAAgaQAEACAHAAQAGAAAEgJQAEgJADgVQADgMADgsIBcAAIAAB4IghAAIAAhgIgfAAQgEAsgEARQgFAUgJAJQgIAJgNAAQgKAAgJgEgAjVivQgKgKAAgTQAAgSANgKQAOgJAbgBIAVgBIAAgFQAAgSgTAAQgQAAgSAIIgLgWQAVgLAZAAQAYAAAOALQANAKAAAWIAABQIgXAAIgHgQIgBAAQgHAKgKAFQgJAEgOAAQgRAAgKgKgAihjfQgPABgGAEQgHAEAAALQAAAOAQAAQALAAAHgHQAHgGAAgMIAAgKgApui1QgRgRAAgdQAAgfAQgQQAPgRAbAAQAZAAAPAPQAOAPAAAZIAAAQIhOAAQABAPAHAHQAIAIAOAAQAKAAALgCQAHgCANgFIAAAZIgSAHQgOACgLAAQgcAAgRgQgAoujyQAAgMgHgHQgGgGgKAAQgLAAgGAGQgFAHgBAMIAuAAIAAAAgAJBioIAAgxIgvAAIAAAxIghAAIAAh4IAhAAIAAAuIAvAAIAAguIAhAAIAAB4gAFpioIAAh4IAhAAIAAAuIAYAAQAcAAANAJQANAJAAASQAAAmg1AAgAGKi+IAXAAQAWAAAAgQQAAgHgFgDQgFgDgMAAIgXAAgACYioIAAgwQAAgPACgVIg4BUIgoAAIAAh4IAgAAIAAAvQAAANgCAYIA4hUIAoAAIAAB4gAhRioIAAh4IA+AAQAXAAAMAIQAMAHAAAQQAAAKgGAHQgGAHgMACIAAABQAOABAHAHQAHAIAAAKQAAASgOAJQgNAJgYAAgAgwi+IAbAAQAJAAAHgEQAFgEAAgHQAAgIgGgDQgFgDgLAAIgaAAgAgwjxIAYAAQAKAAAGgDQAFgDAAgHQAAgLgSAAIgbAAgAmnioIAAhgIgsAAIAABgIghAAIAAh4IBuAAIAAB4gAq+ioIAAhEIg/AAIAABEIghAAIAAieIAhAAIAAA+IA/AAIAAg+IAhAAIAACeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123.1,-32.7,246.4,65.5);


(lib.mooooMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.moooo();
	this.instance.setTransform(-62,-37);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62,-37,124,74);


(lib.line1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8C7C7").s().p("Ag9CsIgCgjIgDgdQAAg/AmhZQAlhfAwgiIAHABQADAAAAAJQgdAqgdA0Qg3BlAABMQAAAVAKAjIgBAHQgEADgIAAQgMAAAAgCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8C7C7").s().p("AhBCJIgDgcQACg8AkhUQAmhdAugkQAGgCACgDQAEgDADAFQgaAogbAxQg0BeAABHQgBAWAIAjIgEAOQgDAGgJADIgRAEQAAgKgDgYg");
	this.shape_1.setTransform(0.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8C7C7").s().p("AhCCLIgDgbQACg5AjhQQAmhbAtgmQAGgDADgIQAEgHAGADQgYAlgZAtQgwBYAABCQgBAXAHAiQgGANgCAJQgDAJgLAGIgUAJQAAgIgDgXg");
	this.shape_2.setTransform(0.2,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C8C7C7").s().p("AhDCNIgEgZQAEg2AhhMQAmhZAsgoQAHgFADgLQAEgLAJAAQgVAigXAqQgrBTgBA8QgCAWAFAjQgIAQgDANQgDAMgLAIIgZAQQAAgIgDgWg");
	this.shape_3.setTransform(0.3,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C8C7C7").s().p("AhECQIgEgYQAEg0AghHQAmhXAqgqQAIgHADgPQAGgOAMgDQgTAggVAmQgnBMAAA4QgFAWADAjQgIATgEARQgFAOgMAMIgcAWQAAgIgDgUg");
	this.shape_4.setTransform(0.4,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C8C7C7").s().p("AhGCTQgDgSgBgFQAFgwAghGQAmhSAogsQAIgJAEgUQAGgSAQgFQgRAdgTAjQgmBFAAAzQgCAXABAiQgMAYgEAVQgEAQgNAPIggAcIgFgag");
	this.shape_5.setTransform(0.5,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C8C7C7").s().p("AhHCVQgEgQAAgFQAGgtAehDQAnhPAmguQAJgLADgYQAHgVATgIIgfA6QgiA+AAAxQgFAVgBAiQgLAcgGAYQgEATgPARQgSAUgRAPQAAgGgFgTg");
	this.shape_6.setTransform(0.6,-2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C8C7C7").s().p("AhICYQgFgPAAgFQAIgqAcg/QAohNAkgvQAIgNAFgcQAHgaAWgKIgbA0QgdA3AAAsQgHAXgCAgQgNAggGAcQgFAWgPAUQgUAXgUASQAAgGgFgRg");
	this.shape_7.setTransform(0.7,-2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C8C7C7").s().p("AhKCaQgEgNAAgEQAHgpAcg6QAphLAhgxQAKgPAFggQAIgdAZgNIgXAuQgaAxAAAnQgHAYgEAfQgSAkgEAgQgGAYgQAXQgUAagXAUQAAgFgGgQg");
	this.shape_8.setTransform(0.8,-2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C8C7C7").s().p("AhLCdQgEgNgBgDQAJglAbg2QAohKAggyQAKgRAGglQAJggAcgPIgTAnQgVAqAAAjQgJAYgGAhQgTAlgHAkQgEAbgSAZQgWAegZAXQAAgEgGgPg");
	this.shape_9.setTransform(0.9,-3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8C7C7").s().p("AhNCgQgEgLAAgEQAJgiAagzQAohGAfg1QALgSAFgqQAJgkAggSIgOAiQgRAjAAAeQgKAZgHAgQgWAqgIAnQgEAdgTAdQgWAhgdAbQABgFgIgNg");
	this.shape_10.setTransform(1,-3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C8C7C7").s().p("AhOCiQgEgJAAgEQAKgfAZgvIBFh7QALgUAGgtQAKgoAjgUQgEAMgHAPQgNAcAAAaQgJAZgKAgQgYAugJArQgHAggRAfQgYAkgeAdQgBgDgHgNg");
	this.shape_11.setTransform(1.1,-4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C8C7C7").s().p("AhPClQgFgJAAgDQALgcAYgrQAohEAcg2QALgXAGgxQAMgrAlgXQgBAJgFAMQgJAVAAAWQgLAZgLAgQgaAzgJAtQgIAigSAjQgZAnghAgQgBgCgHgMg");
	this.shape_12.setTransform(1.2,-4.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C8C7C7").s().p("AhRCoQgFgIAAgDQANgaAWgmQAohCAbg4QALgYAHg1QAMgvAogaQABAGgCAJQgFAPAAARQgMAZgNAgQgcA2gKAxQgIAlgTAlQgaArgkAjIgJgMg");
	this.shape_13.setTransform(1.3,-4.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C8C7C7").s().p("AhTCrQgFgHgBgCIAig6QApg/AZg7QAMgZAIg6QAMgzAsgcQACAEAAAEQgBAJAAANIgbA4QgfA7gLA1QgHAngVAoQgaAugnAmIgJgKg");
	this.shape_14.setTransform(1.6,-5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C8C7C7").s().p("AhYCtQgGgFABgCQAOgUATgfQAog9AZg8QALgcAJg+QAMg2AwgfQAFABACABQACACABAIIgfA5QggA/gLA4QgJAqgVArQgcAygqAoIgJgJg");
	this.shape_15.setTransform(2,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-17.5,13.5,35);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8C7C7").s().p("AinG5IgCgNQAAgeAjhFQAkhGAAg/QAAiBAdhmQAsiWBgiiQAqhFAbgZQAdgbABAlIhaCmQAFAJgBAVQABAQgXAsQgdA3gSBhQgHAdgIBCQgIBOAAAgIAEA0IAEA0QAAANAAAFQgEAOgOAAQgVAAgHhDQgEgiABgjQAAgiAXizQgJAZgDATQgaB+AFBjQADA1ghBRQgjBRgZAAQgOAAgEgMg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8C7C7").s().p("AiTHBQgJAAgFgGIgEgGIgBgNIAAAAQACgcAdg7QAphPAAg/IABgbQAEhwAZhZQAEgQAGgPQAqiIBTiOQAUgjASgYQAQgXANgNQAcgaABAiIgHANIgaA0IgRAjIgQAdIgPAbQAEAJgBAUQAAAOgOAdIgJAQQgcA4gTBfQgGAggJA9QgIBMAAAhIAAALIAEApIADAzIgCASQgCAOgNABQgUADgGg9QgDgdAAgfIABgKQABghASiPIgFAMQgGAPgEANIgEAUQgQBWACA9IAAAgQABA1ggBPQgYA3gUAQQgIAHgHAAIgBAAg");
	this.shape_1.setTransform(-0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8C7C7").s().p("AiRG9QgJgBgFgGIgDgGIgBgMIAAgBQADgbAdg6QAphNABg+IABgbQAFhvAYhYIAJgfQAoiIBQiMQAUgjARgXQAQgXAMgNQAcgaABAfIgFAMIgVAtIgOAjIgQAcIgQAaQADAJgBAUQgBANgOAcIgIARQgcA4gTBcQgHAhgIA8QgJBJAAAjIAAALIACAoIAEAzQAAANgCAFQgDAOgLABQgSAFgGg2QgDgYABgbIAAgJQABgUAOiEIgFANQgHAPgDALIgFAQQgOBOADAuIgBAfQgBA3gfBLQgYA3gUAPQgIAGgHAAIgBAAg");
	this.shape_2.setTransform(-0.5,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C8C7C7").s().p("AiPG4QgJgBgEgFIgEgHIgBgMIAAAAQAGgbAcg4QAphNACg8IACgcQAFhtAXhXIAIgfQAmiIBNiKQAUgiAQgYQAQgWAMgNQAagaACAcIgDAKIgQAnIgLAiIgRAbIgQAaQACAKgBATQgBANgOAbIgIARQgdA4gSBaQgHAhgIA6QgLBIgBAjIABALIADAoIADAyIgCASQgDAOgKACQgQAHgGguQgDgUABgWIAAgIQgBgIAMh3IgGAMQgHAOgEAJIgDANQgOBHAEAeIgBAfQgCA3gfBIQgYA2gUAOQgIAFgGAAIgCAAg");
	this.shape_3.setTransform(-0.7,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C8C7C7").s().p("AiOG0QgIgBgEgGIgDgGIgBgNQAGgbAdg2QAohLAEg7IACgcQAHhsAVhWIAHgeQAkiJBKiHQATgiARgYQAPgWAMgNQAZgZADAYIgCAIIgLAhQgCANgHAVIgRAaIgQAaQACAJgCASQgDAOgMAaIgIAQQgdA4gSBZQgIAhgIA5QgKBFgCAlIABALIACAnQADAnAAALIgBARQgDAOgJADQgQAKgFgoQgDgPAAgSIABgHIAHhlIgFAMQgJAMgEAHQgCAEgCAGQgMBAAFAPIgBAeQgEA4geBFQgYA1gVANQgHAEgGAAIgDAAg");
	this.shape_4.setTransform(-0.9,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C8C7C7").s().p("AiMGvQgJgBgDgGIgCgGIgBgMQAIgbAcg0QAohLAFg6IABgbQAJhrAThVIAIgeQAhiJBIiFQARghARgZQAPgVAMgNQAXgZAEAVIAAAHIgGAaQAAALgHAXIgRAYIgPAaQAAAJgDASQgCANgMAaIgIAQQgdA4gSBXQgIAigJA2QgJBDgDAnIAAAKIADAnQACAmAAALQAAAMgBAGQgDANgKAEQgMAMgFghQgDgKAAgNIAAgEIAAAAIAEhOIgFALQgLALgDAFQgCACgBAFQgLA5AFgBIgCAdQgFA5gdBCQgYA1gVALQgHAEgFAAIgEgBg");
	this.shape_5.setTransform(-1.1,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C8C7C7").s().p("AiLGrQgIgBgDgHIgCgGIgBgMQAJgaAcgzQAohJAGg5IACgbQAJhqAThUIAGgeQAfiJBFiDQASggAQgZQAOgVALgOQAXgYAFARIABAGQABAFgBAPQABAKgGAXQgEAFgNATIgQAZQAAAJgDARQgEAOgMAZIgHAQQgdA4gSBUQgJAjgIA3QgKA+gCAoIAAALIABAmQADAkgBANIgBARQgCAOgJAEQgLAPgEgbQgDgFAAgJIAAgFQgDAeADhQIgGAKIgOANQgDAAgBAFQgJAwAHgQIgDAdQgIA6gbA+QgYA1gWAKQgHADgFAAIgEgBg");
	this.shape_6.setTransform(-1.3,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C8C7C7").s().p("AiNGnQgHgCgEgGIgBgGIgBgMQALgbAbgxQAohHAHg4IADgbQAKhpARhSIAGgeQAdiJBCiBQAQggAQgZQAOgVALgOQAWgXAGANIACAEQAFABAAANQADAJgFAYQgEADgOAUIgQAYIgEAaQgEAOgMAYIgHAPQgdA5gSBSQgJAjgIA1QgKA9gDApIAAAKIABAmQACAjAAAOIgBARQgDANgHAFQgKARgEgTQgCgBgBgEQgDAiAAg/QgEAGgDAEQgLAIgEACQgBgBAAAAQAAgBgBABQAAAAgBAAQAAABAAABQgJApAIggIgDAcQgJA7gbA8QgYAzgWAJQgGADgEAAIgGgBg");
	this.shape_7.setTransform(-1.2,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C8C7C7").s().p("AiPGjQgHgCgDgHIgCgGIAAgLIAAgBQAMgaAbgvQAohGAHg3IAEgbQALhoAPhRIAGgeQAbiJA/h+QAQggAQgZQANgVALgOQAUgXAHALQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABQAJgDACALQAFAHgEAZQgEABgPAVIgPAYIgGAZQgFAOgLAXIgIAPQgcA6gTBQQgIAjgJAzQgJA7gDAqIgBAKIABAlQACAhgBAQIgBARQgCAMgHAHQgIATgEgMIgDADQgEAygDg0QgDAHgEADQgMAHgEgBQgCgFgBADIgBAGIgBAIQgLA8gZA4QgZAzgWAIQgGACgEAAIgGgBg");
	this.shape_8.setTransform(-1,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C8C7C7").s().p("AiRGgQgHgDgDgGIgCgGIAAgMIAAAAIAohIQAphEAIg2IAEgbQAMhnAOhQIAFgdQAYiKA9h8QAPgfAQgZQAMgVALgOQAUgXAHAHQABAAABAAQAAAAABAAQABAAAAAAQABAAAAABQALgIAFAKQAGAGgDAZQgDAAgQAVIgQAYIgGAZQgGAOgLAWIgHAPQgcA6gTBNQgJAkgIAyQgKA4gEArIAAALIAAAkIABAwIgBARQgCANgGAHQgGAVgEgFIgDAMIAAgBQgGBDgFgpQgEAGgEADQgMAGgEgDQgCgHgBADQgGAaAKhAIgFAcQgMA9gZA1QgYAygXAGIgJACIgGgBg");
	this.shape_9.setTransform(-0.8,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8C7C7").s().p("AiUGfQgHgDgCgHIgBgGIgBgLIAAAAIAqhGQAohDAJg1IAEgaQANhmANhPIAFgeQAWiJA6h6QAOgfAQgZQAMgVALgOQASgWAIAEQAEgCACABQAPgMAGAHQAJAFgDAaQgDgCgQAWIgQAYIgIAYIgQAjIgIAPQgcA6gTBMQgJAkgIAwQgKA2gEAsIAAALIAAAkIAAAvIgCARQgBAMgFAIQgGAYgCACIgEAVQgGBPgIgbQgEAGgEACQgOAFgEgFQgBgKgBACQgFAUALhQIgFAbQgOA+gYAxQgZAygWAFIgIACQgFAAgDgCg");
	this.shape_10.setTransform(-0.6,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C8C7C7").s().p("AiXGfQgGgDgCgHIgBgGIAAgLIArhEQAohCAKg0IAEgaIAaizIAEgdQAUiKA3h3QAOgeAPgaQAMgUAKgOQARgWAJAAQAFgDADABQASgRAIAGQAKADgCAcQgCgEgRAWIgQAYIgJAXIgRAjIgHAOQgcA6gTBKQgKAlgIAuQgJA1gFAtIAAAKIgBAjQAAAdgBASIgBARQgBAMgDAJIgHAiIgEAfIAAABQgHBcgLgPQgEAGgEACQgPADgEgGIgCgLQgEAMAMhfIgGAaQgPA/gXAuQgZAygXADIgGABQgGAAgEgCg");
	this.shape_11.setTransform(-0.4,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C8C7C7").s().p("AiaGfQgGgDgCgHIAAgGIAAgLQASgaAagoQAohBALgzIAFgaQAPhjAKhPIADgbQASiKA0h1QANgeAPgaQAMgUAKgOQAQgVAKgDQAGgFADAAQAVgUAKADQAMADgBAcQgCgGgSAXIgQAXIgKAXIgRAiIgHAOQgcA7gTBHQgKAmgJAsQgJAzgEAuIgBAKIgBAjIgBAuIgBARQgBAMgDAJIgGAsIgDAoIAAACQgIBogOgBQgEAGgEABQgQACgEgJIgCgOQgCAFANhvIgHAaQgRBAgVArQgaAxgXACIgEAAQgHAAgFgCg");
	this.shape_12.setTransform(-0.2,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C8C7C7").s().p("AicGfQgGgDgCgIIAAgFIAAgLQAUgZAZgnQAohAAMgxQAEgOABgMQAQhjAJhOIADgaQAQiLAxhzQANgdAOgaQALgUAKgOQAPgUALgHQAHgFADgBQAZgZAMACQAOABgBAdQgBgIgTAYIgQAXIgMAWIgRAhIgHAPQgcA6gTBFQgKAmgIArQgJAxgGAvIAAAKIgCAiIgCAuIgBARIgCAWIgFA1IgCAxIAAADQgJB1gRALQgEAGgFAAQgQACgEgLIgCgRQgBgDAOh+IgHAZQgTBBgVAoQgZAwgYABIgCAAQgIAAgFgDg");
	this.shape_13.setTransform(0,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C8C7C7").s().p("Ag9GZIAAgRQAAgKAPiPQgzCvguAAQgUABgDgPIAAgRQAWgZAYglQAxhKAKg+QAUh0AHhVQAQiuBGiFQAbgyAVgQQAGgEAEgBIADgEQAYgZAPAAQAPgBAAAeQAAgJgUAZQgXAcgYAwQhFCMgTC4QgHCcgFBXQgMCfgbAAQgSAAgEgPg");
	this.shape_14.setTransform(0.3,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C8C7C7").s().p("AicGfQgGgDgCgHIAAgGIAAgLQAUgZAZgnQAog/AMgyIAGgaQAQhiAIhOIADgaQAQiLAxhzQAMgdAPgaQALgUAKgOQAPgVAKgGQAIgGADAAQAZgaAMACQAOABgBAdQgBgIgSAYIgRAXIgMAWIgQAhIgIAPQgcA6gTBFQgKAmgIArQgJAxgFAuIgBAKIgCAjIgBAuIgCAQIgCAWIgFA2IgCAyIAAADQgJB2gRAMQgEAGgFAAQgQABgEgKIgCgSQgBgDAOiAIgHAaQgTBAgVAoQgZAxgYABIgCAAQgIAAgFgEg");
	this.shape_15.setTransform(0,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C8C7C7").s().p("AiaGfQgGgDgCgIIAAgFIAAgLIAAgBQATgZAZgoQAohBALgyIAFgaQAPhkAKhPIAEgaQARiLA0h1QANgdAPgaQALgUAKgOQAQgVAKgEQAGgEADAAQAWgWALAEQAMACgCAcQgBgGgSAXIgQAYIgLAWIgRAiIgHAOQgcA7gTBHQgKAmgIArQgJAzgFAuIgBAKIgBAjIgBAvIgBAQQgBAMgDAKIgGAtIgDApIABACQgIBqgPAAQgEAGgEABQgQACgEgJIgCgOQgCAEANhxIgHAZQgRBAgVArQgaAxgXACIgEABQgHAAgFgDg");
	this.shape_16.setTransform(-0.2,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C8C7C7").s().p("AiXGfQgHgDgCgHIAAgGIgBgLQASgaAZgpQAphDAKgzIAEgaIAaizIAEgcQATiLA2h3QAOgdAPgaQAMgVALgOQAQgVAKgBQAFgDADAAQASgRAJAFQAKAEgBAbQgCgEgSAXIgQAXIgJAXIgRAjIgHAOQgcA7gTBJQgKAlgIAtQgKA1gEAtIgBAKIAAAjIgBAvIgBARQgBAMgEAJQgFAbgBAJIgEAhIAAABQgHBegMgMQgEAGgEACQgPADgEgHIgCgLQgDAKAMhiIgGAaQgQA/gWAuQgZAxgYAEIgFAAQgGAAgEgCg");
	this.shape_17.setTransform(-0.4,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C8C7C7").s().p("AiVGfQgGgDgDgGIgBgGIAAgMQAQgZAagsQAohDAKg1IAEgaQANhlANhPIAEgdQAViKA5h5QAPgfAPgaQAMgUALgOQASgWAIADQAFgCACAAQAPgNAHAHQAJAFgCAaQgDgCgQAWIgQAXIgJAYQgGAPgKAUIgHAPQgdA6gSBLQgKAlgIAvQgKA1gEAtIAAALIgBAkQABAdgBASIgBARQgBAMgEAIQgHAZgCADIgDAYQgHBSgIgXQgEAGgFABQgOAFgEgFQgBgLgBACQgEASALhUIgGAbQgOA+gXAxQgZAxgXAFIgIAAQgEAAgEgBg");
	this.shape_18.setTransform(-0.6,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C8C7C7").s().p("AiSGfQgHgCgDgHIgBgGIAAgLIAohHQAphFAIg1IAEgbQAMhmAOhQIAFgdQAYiKA7h7QAPgfAQgaQAMgUALgOQATgXAIAGQAEgBABABQANgJAFAJQAHAGgDAZQgDgBgQAWIgQAYIgHAYIgQAkIgIAPQgcA6gTBNQgJAkgIAxQgKA3gDAsIgBAKIAAAlIABAvIgCARQgBANgFAHQgHAXgDgEIgEAQIAAgBQgFBHgGgkQgEAGgEACQgNAGgEgDQgCgJgBADQgFAYAKhFIgFAbQgNA9gYA0QgZAzgWAFIgJABIgHgBg");
	this.shape_19.setTransform(-0.8,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C8C7C7").s().p("AiQGhQgHgCgDgHIgCgGIAAgLIAAgBQANgaAaguQAphGAHg2IAEgbQALhnAPhRIAGgeQAaiJA+h+QAPgfAQgZQANgVALgOQAUgXAHAJQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAQAKgFADAKQAFAHgEAZQgDABgPAUIgQAZIgGAZIgQAkIgIAPQgcA6gTBPQgJAkgIAyQgJA5gEArIAAALIABAkIAAAxIgBARQgCAMgGAHQgHAUgEgKIgDAHQgFA5gEgwQgEAHgDADQgNAGgEgBQAAgCAAAAQgBgBAAgBQAAAAgBAAQAAAAAAABQgEASABgKQgLA7gYA0QgZAzgWAHIgKACIgGgBg");
	this.shape_20.setTransform(-0.9,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C8C7C7").s().p("AiOGlQgHgCgDgGIgCgGIgBgMIAAAAQAMgaAbgxQAohGAHg4IADgbQALhoAQhSIAGgeQAciJBBiAQAQggAQgZQANgVAMgNQAVgYAGANQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAHgBABAMQAEAIgFAYQgEACgOAUIgPAZIgFAaQgFAOgLAXIgIAPQgcA5gTBRQgJAkgIA0QgJA7gDAqIAAAKIAAAmQACAiAAAOIgCARQgCANgHAGQgJASgEgQQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgEAqgBg6QgDAGgEADQgMAIgDABQgBgBAAgBQAAAAgBAAQAAgBAAAAQgBABAAAAIgEAcQgJA7gaA6QgZA0gWAIQgGACgFAAIgFgBg");
	this.shape_21.setTransform(-1.1,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C8C7C7").s().p("AiLGpQgIgCgEgGIgCgGIAAgMQAKgbAbgxQAphJAFg4IADgbQAKhpARhTIAHgfQAeiIBDiCQARggAQgZQAOgWALgNQAWgYAGAPIABAFQAEADgBAOQACAJgFAYQgEAEgOATIgQAZQAAAJgDARQgEAOgMAYIgIAQQgcA5gTBTQgIAigIA2QgKA+gDAoIAAALIACAlQACAkgBANIgBASQgCANgIAFQgKAPgFgWQgDgDAAgHIAAgEQgDAkAChJIgHALQgLAJgEACQgCgCgBAFQgJAsAIgZIgDAdQgJA7gbA8QgYA0gWAKQgGADgFAAIgEgBg");
	this.shape_22.setTransform(-1.3,1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C8C7C7").s().p("AiLGtQgIgBgEgHIgCgGIgBgMQAJgaAcg0QAohJAFg6IADgbQAIhqAThUIAHgfQAgiIBGiEQASghAQgZQAOgVAMgNQAXgZAEATIAAAGQABAHgDAQQABAKgGAXQgFAFgMATIgQAZQAAAKgDARQgDAOgMAZIgIAQQgcA4gTBVQgIAigIA2QgKBCgCAnIAAAKIABAnQADAlAAAMIgCARQgCAOgJAEQgMANgEgcQgDgIAAgLIAAgFQgCAZAEhVQgDAGgEAEIgNAPQgDAAgBAFQgKA0AHgLIgDAeQgHA5gcBAQgYA1gVAKQgHADgFAAIgEAAg");
	this.shape_23.setTransform(-1.3,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C8C7C7").s().p("AiMGxQgJgBgEgHIgCgGIgBgMIAAAAQAHgbAcg1QAphKAEg7IACgbQAIhrAUhVIAHgfQAiiIBJiHQASghARgYQAOgWAMgNQAYgZAEAWIgBAHIgHAdQgBAMgHAWIgRAZIgQAZQABAKgCARQgDAOgMAaIgIAQQgdA4gSBXQgIAigIA3QgKBEgCAmIAAALIACAmQADAnAAALIgBASQgDANgKAEQgNALgFgjQgDgMAAgPIABgFQgCAJAHhfIgGAMIgNARQgCACgCAGQgLA7AGAEIgCAeQgGA5gcBCQgZA1gVAMQgHAEgFAAIgDAAg");
	this.shape_24.setTransform(-1.1,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C8C7C7").s().p("AiOG1QgJgBgEgGIgCgGIgBgMIAAgBQAFgbAdg2QAohMADg7IACgcQAHhsAVhWIAIgfQAliIBKiJQATghARgYQAPgXAMgNQAagZACAZIgCAJIgMAjQgDANgHAVIgRAaIgQAaQACAJgCASQgCAOgNAbIgIAQQgcA4gTBZQgHAhgJA5QgJBGgCAlIAAAKIADAnIADAzQAAAMgBAFQgEAOgJADQgPAJgFgqQgDgQgBgTIABgHIAIhtIgFANQgIAMgEAIQgCAEgCAHQgMBBAEATIgBAeQgEA4geBGQgXA2gWANQgGAEgGAAIgDAAg");
	this.shape_25.setTransform(-0.8,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C8C7C7").s().p("AiPG5QgKgBgEgFIgDgHIgBgMIAAAAQAFgbAcg5QAohMADg9IABgbQAGhuAXhXIAIgfQAniIBOiKQATgjARgYQAPgWANgNQAagZACAcIgEAKIgQApIgNAiIgRAbIgPAaQACAJgBATQgBAOgOAbIgIARQgcA3gTBbQgHAhgJA7QgJBIgCAjIABALIACAoQAFApgBAJIgBASQgDAOgKACQgSAHgFgwQgDgVAAgXIAAgIQAAgLANh5IgFAMQgJAOgDAJIgEAOQgOBJAEAhIgBAfQgBA3ggBJQgXA2gVAOQgIAFgGAAIgBAAg");
	this.shape_26.setTransform(-0.6,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C8C7C7").s().p("AiRG9QgJAAgFgGIgDgGIgBgNQACgbAdg6QAphOACg+IABgbQAEhvAYhYIAJgfQApiIBQiMQAVgjAQgYQAQgWANgNQAbgaABAfIgEAMIgXAuIgNAjIgRAcIgQAaQAEAKgCATQgBAOgNAcIgIARQgdA3gSBdQgHAggJA9QgIBKAAAiIAAALIABAoIAFAzQAAANgCAFQgDAOgLABQgTAFgGg3QgDgZABgbIAAgJQABgWAPiGIgFANQgIAPgCALIgFARQgOBPACAwIAAAgQAAA2ghBLQgXA3gUAPQgIAGgHAAIgBAAg");
	this.shape_27.setTransform(-0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C8C7C7").s().p("AihG7IgEgGIgBgNIAAAAQABgbAeg8QAphPAAg/IAAgbQAFhwAZhZIAKggQApiHBUiPQAUgjASgYQAQgWAMgNQAdgaABAiIgHANIgaA1IgRAjIgRAdIgPAaQAFAJgBAVQAAANgPAdIgIARQgcA3gTBfQgHAggIA+QgIBMgBAhIABALIAEApQADAsgBAHIgBASQgCAOgOABQgTACgHg9QgDgdABgfIABgLQABgiARiPIgFALIgJAdIgEAUQgQBWABA/IABAgQABA1ggBPQgZA3gTAQQgJAHgHAAQgKAAgEgGg");
	this.shape_28.setTransform(-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-45.4,34,90.8);


(lib.kot = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.kot1();
	this.instance.setTransform(-96.5,-169);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-169,193,338);


(lib.img11_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img11();
	this.instance.setTransform(-102.5,-38.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.5,-38.5,205,77);


(lib.img10_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img10();
	this.instance.setTransform(-100,-80);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100,-80,244,207);


(lib.img9_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img9();
	this.instance.setTransform(-34,-41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-41.5,68,83);


(lib.img8_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img8();
	this.instance.setTransform(-27,-91);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-91,117,182);


(lib.img7_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img7();
	this.instance.setTransform(-61,-52);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-52,122,104);


(lib.img6_4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img6_4();
	this.instance.setTransform(-84,-38.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84,-38.5,168,77);


(lib.img6_3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img6_3();
	this.instance.setTransform(-84,-38.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84,-38.5,168,77);


(lib.img6_1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img6_1();
	this.instance.setTransform(-150,-89.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-89.5,300,179);


(lib.img5_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img5();
	this.instance.setTransform(-53,-65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53,-65,128,130);


(lib.img4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img4();
	this.instance.setTransform(-82,-38.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82,-38.5,166,77);


(lib.img3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img3();
	this.instance.setTransform(-148,-96,0.91,0.91);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-148,-96,273,151);


(lib.img2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img2();
	this.instance.setTransform(-51,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-40,102,81);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-62,-55.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62,-55.5,124,111);


(lib.hand2 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.handP3();
	this.instance.setTransform(11.8,-35.9);

	// Слой 2
	this.instance_1 = new lib.handP1();
	this.instance_1.setTransform(-85,-25.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85,-47.5,170,101);


(lib.hand1 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.handP2();
	this.instance.setTransform(1,-47.5);

	// Слой 2
	this.instance_1 = new lib.handP1();
	this.instance_1.setTransform(-85,-25.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85,-47.5,170,101);


(lib.glaz2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.glaz2();
	this.instance.setTransform(-25,-26.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-26.5,50,53);


(lib.glaz1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.glaz1();
	this.instance.setTransform(-25,-26.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-26.5,50,53);


(lib.ClipGroup = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al7FEIhQiGIgBgfIgLhDIA3htIB4jDICEhvIDRAKIB3A7IDzBCIBBBgIgCCJIiKBeIgpgSIgbgzQAdgrAFguIgBgmQgCgHgEACQg8AcgaADIgmgEQgsgEgzACQhMADg/AOIgyANQgWAEg1gBQhCgCgbgMQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABQgDAzAdAxQAPAZAPAPQgpBAgNBLQgIAmABAYg");
	mask.setTransform(47.3,32.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1817").s().p("AB1A2QADhFhegXQgtgLhoAAQgEAAACgDQACgDAEAAQBngBAxANQBhAYgDBIQAAADgFAAIgCAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape.setTransform(75.6,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1817").s().p("AgwBRQgKgyAdgtQAagqAvgZQALgBgGADQgvAYgXAqQgbArAKAxQAAACgFABIgCAAIgDgBg");
	this.shape_1.setTransform(30.9,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1817").s().p("AgMAPQgDgDAFgCIAAAAIAFgEQAGgGAEgNQABgDAFAAQAEAAgBAEQgJAVgLAHIgDABIgDgCg");
	this.shape_2.setTransform(87.7,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1817").s().p("AADAYQgEgagKgSQgCgCAFgCQAEgCABACQAJASAHAcQABACgFACIgDAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_3.setTransform(88,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1817").s().p("AACARIgCgRIgKgNQgCgDAFgCQAFgCABADIAIAPQACAEACANQABADgFABIgCABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_4.setTransform(90.7,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1817").s().p("AgFAZQgCgdAGgTQABgDACgBQAFAAgBADQgFAUABAcQAAADgCABIgBAAQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_5.setTransform(11.9,59.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1817").s().p("AgIAkQgBgjAJgjQAAgDAFgBQAFAAgBADQgJAjAAAjQAAADgDABIgBAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_6.setTransform(9.5,58.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("AkgDwQgcgHgTgGQgUgHgMgGQgWgLgNgLQgRgRgKgWQgKgZACgbQADgzArg2QAogzA2gnQAhgXAagNQAdgQAigPQA+gcBKgSQArgLBggNQBUgMA2ACQBOABAxAeQAaAPAUAaQAHAJAIAPQAGAMAEAPQAGAbgHAaQgHAWgPATQgZAdggAUQgWAOgbAMQgTAJgGAAIgBgBIAfgNQAVgKAVgPQAjgVATgbQAPgUAFgUQAHgYgHgZQgIgZgRgWQgSgYgagOQgagOgfgGQgcgGgkgBQg3gBhSAMQhaANgvALQhIARg+AbQgoASgWAMQgbAOgfAVQg6ArgjAqQgqA1gEAwQgCAaAJAWQAHAUARASQAOANATAKQAPAIAQAGQAbAJATAFIARAEg");
	this.shape_7.setTransform(48.4,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F49F1E").s().p("AgDgxQAhgbAkgKQgwAlgGA1QgCAaAHAVIhRAkQgIhUBFg0g");
	this.shape_8.setTransform(32.8,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49F1E").s().p("AkfA9QAagWC2hAQAxgRBCgOQBagTBVADQAWABA2AHQADAagIgBQhdgHhHANQg0AJhMAbQgmAPgzAdIgqAaIgHAAQhWAAg1gMg");
	this.shape_9.setTransform(49.2,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F49F1E").s().p("AhIBNQgSgfAOguQAUhABPhOIAGAeQAFAUAEAJQAIASARAUIAUAYIgZAzQgZBBgCAxQhSgdgVgmg");
	this.shape_10.setTransform(15.8,47.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("AjGBvQgDgIgBgPQgCgbAMgnQANgpAlglQASgSAYgNQAXgMAdgGQAXgFAdgBQAaAAAaAEIAZAEQAJACAPAGQATAJAUANQATANALAKQANANAGAJIAGAKQADAFABAFIABAHIgPABIgBgHIgCgFIgEgIQgEgHgOgNQgKgKgRgNQgUgNgRgIIgVgIIgYgFQgZgEgagBQgYAAgbAEQgdAGgVALQgWAKgUATQghAfgPArQgLAhABAfQAAAKACAIIABAFIgEADIAAgBg");
	this.shape_11.setTransform(43.1,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F49E27").s().p("AgxArQACg+AggSQALgHAQgCIAegCQAJgBgBAHQgCAHgIABIgXABQgNAAgHAFQgQAIgGAVQgEAOgBAbQAAAGgJABIgDAAQgHAAAAgGg");
	this.shape_12.setTransform(13.3,48.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F49E27").s().p("ABAATQgdgUgjgEQgUgDg0ACQgKABACgHQABgGAIgBQA4gCAVADQAqAFAfAVQAGAFgIAFQgFADgDAAQgDAAgCgCg");
	this.shape_13.setTransform(27.2,30.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F49E27").s().p("ABAAWQgcgVglgEQgvgDgagEQgJgBAFgGQAFgGAHABQAbAEAvAEQApAGAeAUQAFAEgIAFQgEACgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_14.setTransform(35.4,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F49E27").s().p("AA/AWQgbgVgmgEQgugDgagEQgJgBAFgGQAEgGAHABQAbADAwAEQApAHAdAUQAGAEgIAFQgEACgEAAQgDAAgCgBg");
	this.shape_15.setTransform(30.8,27.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F49E27").s().p("AD9BCQgGgigDgJQgHgWgPgNQglglhGgGQhegJhgAQQhfAPhZAkQgGADgFgDQgEgCAIgBQBbgnBjgQQBhgRBhAIQBEAFAqAeQAWAQAKAXQAGAPAGAkQABAEgJACIgGABQgEAAgBgCg");
	this.shape_16.setTransform(64.2,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F49E27").s().p("AA0A9QgCgzgfgeQgegigzADQgKAAACgGQACgGAIgBQA5gDAjAiQAkAhADA4QABAHgKACIgEAAQgFAAgBgEg");
	this.shape_17.setTransform(71.9,36.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F49E27").s().p("ABHBMQAehGhCgpQg0gjhMABQgIAAAEgGQAFgGAHAAQBRgBA4AnQBFAsghBMQgCAFgJAAQgJAAADgGg");
	this.shape_18.setTransform(73.2,33.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F49E27").s().p("ACABNQALgbgKgeQgJgZgWgVQgqgmhJgFQgxgEhOANQgJABACgGQABgHAIgBQBOgNA2AEQBLAGAuAmQAaAWALAeQALAhgNAfQgCAGgJAAQgJAAACgHg");
	this.shape_19.setTransform(72,31.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F49E27").s().p("AgGAbQACgLgDgPIgEgXQgBgEAKgCQAHgDABAEIAEAaQADANgCAMQAAAEgKACIgCAAQgFAAAAgDg");
	this.shape_20.setTransform(44.6,27);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F49E27").s().p("AgIAgQADgZgEgfQgBgDAKgDQAHgCABADQAEAigDAWQgBAFgNAAIgDAAg");
	this.shape_21.setTransform(48.3,25.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F49E27").s().p("AgNAkQANgagEgnQgBgEAIgCQAJgDABAEQAEAogNAaQgBAEgIABIgEAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_22.setTransform(52,25.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F49E27").s().p("AgQAmQARgmgBghQAAgGAHgCQAKgDAAAFQAEAngVAmQgBAFgJAAIgBAAQgIAAADgFg");
	this.shape_23.setTransform(56.3,25.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F49E27").s().p("AgRAxQgIgBAFgHQAbgmgDgqQgBgGAKgDQAJgCABAGQADAwgeAqQgDAEgGAAIgEgBg");
	this.shape_24.setTransform(60.1,25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F49E27").s().p("AgXAsQAigkgFgvQAAgEAJgCQAKgCAAADQAFAwgkAnQgCADgJABIgEAAQgFAAADgDg");
	this.shape_25.setTransform(63.6,24.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F49E27").s().p("AhMBPQgCgGAJgCQAvgKAmgtQArgtgBguQAAgGAKgCQAJgBAAAHQABA0gwAxQgrAwg1ALIgEABQgFAAgBgFg");
	this.shape_26.setTransform(82.7,32.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F49E27").s().p("Ag9BHQgFgCAJgDQBQgfAWhkQABgEAJgBQAJgCgBADQgWBohbAjIgHACIgEgBg");
	this.shape_27.setTransform(80.2,30.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F49E27").s().p("AgyBnQgHgCAHgFQAyghAVgyQAZg1gTg2QgCgEAKgDQAJgDACAFQAUA5gbA4QgZAzg0AkQgDACgEAAIgFAAg");
	this.shape_28.setTransform(77.5,25.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F49E27").s().p("AgtBKQgEgDAIgDQAjgQASgpQATglgDgpQAAgEAJgDQAKgCAAAEQADAugWAnQgXArgnASIgGACQgCAAgDgCg");
	this.shape_29.setTransform(74.3,26.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F49E27").s().p("AgkBJQgJgCAGgGQAhghANgaQAYglgLghQgCgFAKgDQAJgCACAFQALAjgYAoQgQAcgiAkQgDADgFAAIgEAAg");
	this.shape_30.setTransform(70.8,25.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F49E27").s().p("AgbAyQAWgdAGgQQAMgYgDgaQAAgFAJgCQAJgCABADQADAcgNAZQgIARgVAeQgCAEgJAAIgDABQgGAAADgEg");
	this.shape_31.setTransform(67.8,23.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F49E27").s().p("AgUAgQgEgmAbgbQAEgDAJABQAIABgFAFQgXAXADAhQABAGgJACIgFABQgFAAgBgEg");
	this.shape_32.setTransform(57.3,12.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F49E27").s().p("AAeAcQgUgWgKgGQgVgRgTACQgJAAABgGQACgHAIgBQAYgBAWARQAQAKAXAWQAFAFgJAEQgEACgEAAQgDAAgCgCg");
	this.shape_33.setTransform(35.1,16.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F49E27").s().p("AA7AiQgmgYgYgLQglgSghgFQgHgBAHgEQAHgFAFAAQAiAGAlASQAbALAnAaQAEACgJAEQgFACgEAAIgDgBg");
	this.shape_34.setTransform(39.7,13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F49E27").s().p("AA7AsQgJgOgSgNQgJgHgXgLIghgVQgWgLgQAAQgJgBAFgGQAEgGAHABQAbABAvAdQAzAcAQAXQADAFgIADQgEACgDAAQgEAAgCgCg");
	this.shape_35.setTransform(44.1,11.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F49E27").s().p("AA6AvQgshBhWgVQgHgBAHgFQAHgEAFABQBbAWAtBCQACAEgJAEIgHABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_36.setTransform(49.1,10.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F49E27").s().p("AghBFQgEgrAMgiQAOgpAegVQAFgDAHACQAHADgHAFQgdASgKAnQgKAfAEAnQAAAGgJACIgEABQgGAAAAgEg");
	this.shape_37.setTransform(36.4,13.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F49E27").s().p("AgeBAQgFg7AwhCQACgCAIgBQAJgBgBABQgvBAAFA8QAAADgJABIgHABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_38.setTransform(41.2,12.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F49E27").s().p("AgsBCQADgmAUghQATgiAdgZQADgCAJgBQAIAAgDACQgdAXgRAiQgUAggEAlQAAAEgJACIgHABQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBg");
	this.shape_39.setTransform(46.9,11.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F49E27").s().p("AgjAxIAGgXQADgPAEgJQAMgYAegZQADgDAIAAQAJAAgGAEQggAagIAbIgFATIgGAUQgBADgJACIgFAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_40.setTransform(52,11.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F8B13C").s().p("AB9AdQgtgfg+gDQhMgEg1AIQg0AFgyAWQgPAAg4gKIg/gLQASgNBugsQB+gyBMgNQCCgWBPAJQBfALAjA6QAnA/gSAhQgTAjg7AiIg4AaQgphHgrggg");
	this.shape_41.setTransform(55.7,30.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8B13C").s().p("Ai3BOQgCgjAQgoQAbhDBSgcQBVgeBZAqQAbANAQARQAKANARAfQhhAIhXAYQgQAEhTAmIhPAmQgEgKgBgSg");
	this.shape_42.setTransform(41.6,15.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = mask;

	this.addChild(this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.5,3.6,87.9,58.7);


(lib.bubble1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("EADLAutQnsiYmJkAQjriYiViYQheA2h7A4QjBBZjWBFQlXBxlnAxQnZBCnKgyQm0gwmSiEQoPiumkk1QjEiRifiiQhkhohFhdQiXBIizAeQkiAvkEhcQkOhfinjmQhkiKgriUQkmhfkBiTQnJkFhck0Qh6mcCfl6QCfl8G/ljQlLhUkRiGQm3jXiDkWQh3j9CUkdQDHl+IJjQQDUhVD8gyQD8gyEUgMQgFh5AohvQA+isCehnQChhoCvASQBvAMBgA5QB/h0C3hjQEtijFcgyQCugZCuAYQDkAgDRBzQCZBWBuBqQCxiRDihxQF6i7F4gNQF3gNGRCPQDuBWDFB4QA0hBBLhBQBxhjCQhUQDziPE6hWQGchzHvgEIAwgBQGYAAF6BJQEgA3D8BdQCkA8CLBJQBVAsBBAsQDOhBEBgtQHChPGTAbQGVAaExCNQC0BTBnBiQDRAAD9A4QG+BkF6D2QFrDvDbEsQCFC1A1ChQB5ANCQAbQDpAtDWBFQGGB9EMC/QENC+B+DyQCyFTBRFrQA9EUADEPQABChgTCVQgNBlgTBPQBBAbBAAoQBeA6BKBKQCBCBA0CpQBDDehKEMQhHD/juCsQjtCrmEBMQjLApjkAMQiUAIiAgGQgIBzgcB+QgsDChSCpQiGEWjkCxQkqDomxAhQiBALiKAAQlTAAk8hDQj3g2jbhaQihhCiJhSQhbg2hDgzQhsBQiSBYQjrCPkIB0QmcC3m0BiQo/CAo1giQjjgMjmgjInKZrgEgQFAiYIBQBOQBpBeCFBcQGmElIdCjIAaAIIBtVnIFjz8IAjAGQDvAnD1AOQIqAgIzh9QGshgGUizQEqiEEFilQCEhTBJg6IAagVIAZAXIB3BUQCbBkC9BNQEBBqEkA0QGCBEGdggQGQgfEUjQQDbilCEkQQBdjBApjjQANhHAGhDIADg1IABgqIAqADIDhACQEOgIDpguQFHhBDUiFQEFijBGkAQB6mzkTkVQhWhVhzg+IhjgsIgmgMIAMglQAPg0AOhYQAcivgCjAQgCkGg8kLQhOlfislIQiJkFk4jFQjtiVlChoQjuhLkIguIjagfIgdgDIgHgbQggh1hsijQjYlHmDj+QmEj+nXhcQiTgdiLgKIhwgEIgSABIgMgNQhIhKiahOQkzicmlgdQmsgcneBdQiWAdiKAlIhuAiIgUAGIgRgMQgogdhMgqQiYhUi6hFQj+hdkig2QmAhHmeAEQtUAKovFCQiwBlh9B5QgoAmgeAjIgXAeIgWAhIghgVQiOhejbhXQm0iwmQAOQmOAOmWDgQh/BHhxBSIhaBHIgeAbIgbgdQhlhtiuhgQldi/l8A4Ql2A1k+C/QhkA8hSBCIg/A4IgZAaIgdgWQg7gshXgUQirgniiBpQijBqgrC9QgWBfAMBSIAGAsIgtADQkYAIkBAxQkAAyjVBVQnuDFi6FkQiBD6BmDZQCMEoIdDgQEOBvD5A2IBWATIhGA0Qn7GCiaGWQhACogFCuQgECuA2C3QBZEsHvEFQD4CCDsBJIAWAHIAFAWIAXBGQAhBUAxBOQCfD4EOBgQESBhE4hIQCdgjBpg4IAggSIAUAeIAhAsQArA3A2A8QCtC+DiCmQE0DiF2CbQHuDLI2A9QFSAkFfgbQHPglG+iRQD3hRDahqQBug1A+gmIAdgRg");
	this.shape.setTransform(0,0,0.171,0.171);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EADwAvtQorinmsksQiFhdhphfIhOhNQg8AlhvA2QjdBrj8BTQslEHsrhYQwBhvrkogQjniqivjBQg3g9grg3IgfgrQhpA6ijAmQlFBLkfhmQkghmilkFQgzhSghhYIgXhIQjshHj/iGQn+kNhek8Qhwl6CElbQCfmhIEmIQhngWiUguQknhcjeh6Qk4iqh6jNQiYkBCakoQDAlxH8jLQG4iwJEgTQgNhSAXhoQAtjSCzh0QCzh0C/AuQBgAXA8AvIA/g4QBThEBlg+QFFjFGEg4QGPg6FoDIQC0BkBlBvIBYhHQByhVCChIQGfjmGdgPQGcgOG9C0QDfBaCMBdIAVgcQAegkAngnQB+h8CyhoQI5lONrgJQLugIJiDiQC+BGCaBWQBNArAnAcIBsggQCJgnCYgdQHlhfG2AdQG1AdE7CjQCeBRBGBMIBuADQCMAICWAeQHgBdGQEFQGQEGDcFRQBuCpAeB0IDaAfQELAuD0BOQMMD6D7HfQE4JVAFJ6QACDGgeCyQgOBZgPAxIBnAuQB6A/BbBcQEjEmh/HJQiKHvr9CXQjvAvkRAHIjhgCIgDA1QgGBEgNBJQgpDqhhDIQiIEYjjCsQkdDWmcAgQruA6pskAQjChQidhlIh3hWQhHA4iEBUQkICnkvCHQvKGuvog6QjygOj3gnImWWzg");
	this.shape_1.setTransform(0,-1.6,0.171,0.171);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-81.5,300,163);


(lib.btn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABJB9IAAjCIAeAAIAFASIACAAQANgUAZAAQAYAAANASQAOATAAAhQAAAUgGAQQgHAQgLAIQgMAIgQAAQgXAAgOgRIgCAAIACAUIAAA3gAB1ghQgHAIAAAUIAAAEQAAAUAHAJQAGAJAOAAQAYAAAAgnQAAgTgGgLQgGgKgNAAQgNAAgGAJgApeB9IAAjCIAeAAIAFASIACAAQAMgUAaAAQAXAAAOASQANATAAAhQAAAUgGAQQgHAQgLAIQgLAIgQAAQgYAAgNgRIgCAAIACAUIAAA3gAozghQgGAIAAAUIAAAEQAAAUAGAJQAHAJANAAQAZAAAAgnQAAgTgGgLQgGgKgNAAQgOAAgGAJgAHoByIAAgxIhyAAIAAiGIAlAAIAABqIA2AAIAAhqIAkAAIAABrIAUAAIAABMgAIqAxQgSgSAAgfQAAgiAQgTQARgSAeAAQAdAAAPAQQAQAQAAAdIAAAQIhWAAQABAQAIAJQAJAJAPAAQAOAAAJgDQAJgCAOgGIAAAdQgKAFgLACQgKACgQAAQggAAgTgSgAJxgQQAAgNgHgIQgHgIgMAAQgLAAgHAIQgGAHgBAOIAzAAIAAAAgADvAxQgSgSAAgfQAAghARgUQARgSAeAAQAcAAAQAQQAQARAAAcIAAAQIhXAAQAAAPAJAKQAKAJAPAAQANAAAKgDQAIgCAOgGIAAAdQgJAFgLACQgKACgRAAQghAAgSgSgAE2gQQAAgNgHgIQgGgIgMAAQgMAAgHAIQgGAHgBAOIAzAAIAAAAgAnAA4QgLgLAAgVQAAgVAPgIQAOgKAfgCIAXAAIAAgGQAAgVgVAAQgPAAgXAKIgMgZQAYgMAcAAQAbAAAOALQAOAMAAAZIAABYIgZAAIgHgSIgBAAQgJALgKAFQgKAEgQAAQgTAAgLgLgAmGADQgQAAgIAFQgIAGAAALQAAAPASAAQANAAAHgHQAIgHAAgNIAAgLgAruAtQgRgWAAglQAAgvARgYQATgZAkgGQAPgDAngFIAFAgIg4AIQgOACgIAFQgIAFgDAJQgEAJgBAPIACAAQAHgKAKgFQAKgFAMAAQAZAAAOAPQAOAPAAAdQAAAfgSASQgRASgfAAQgfAAgRgWgArGgdQgGACgGAGQgGAFgCAFQAAAXAIAMQAIANAOAAQAaAAAAgkQAAghgXAAQgHAAgGADgAuqAsQgWgXAAgrQAAgtAWgXQAWgXAoAAQApAAAVAXQAVAYAAAsQAAArgVAXQgWAXgoAAQgpAAgVgXgAuOhDQgLAPAAAeQAAAcALAPQAMAPAWAAQAsAAAAg6QAAg8gsAAQgWAAgMAPgANwBBIAAhqIgsAAIAAgcIB9AAIAAAcIgsAAIAABqgAMGBBIAAhqIgwAAIAABqIglAAIAAiGIB6AAIAACGgAg+BBIAAg2QAAgRACgWIg+BdIgsAAIAAiGIAkAAIgDBdIA+hdIAsAAIAACGgAkPBBIAAhqIgsAAIAAgcIB8AAIAAAcIgsAAIAABqg");

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#083C92").s().p("AvhEnQhWgBg7g7Qg9g9AAhUIAAiyQAAhWA9g7QA7g9BWAAIfEAAQBVAAA8A9QA7A7ABBWIAACyQgBBUg7A9Qg8A7hVABg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-29.5,240,59);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.stol = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bM2IAA3zMAu3gB4IAAZrg");
	mask.setTransform(0,218.7);

	// Слой 1
	this.instance = new lib.bgImg_1();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,136.5,300,163.6);


(lib.ovoshi = function() {
	this.initialize();

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkIGXQiqgahyg0QkGh3g5iXQhCiwEJiaQDviLD6gQQBPgFBGAIIA0AJQBxAFCKAVQETAqB/BVQCvB1AaB+QAgCYjLCKQjVCQmaAMIg6ABQiTAAiNgWg");
	mask.setTransform(-2.3,-50.1);

	// Слой 1
	this.instance = new lib.img6_3_1();
	this.instance.setTransform(-4.8,-5.3,1,1,0,180,0);

	this.instance_1 = new lib.img6_3_1();
	this.instance_1.setTransform(9,0.7,1,1,0,180,0);

	this.instance_2 = new lib.img6_3_1();
	this.instance_2.setTransform(9,14.9,1,1,0,180,0);

	this.instance_3 = new lib.img6_3_1();
	this.instance_3.setTransform(-21.2,4.7,1,1,0,180,0);

	this.instance_4 = new lib.img6_3_1();
	this.instance_4.setTransform(-1.2,-5.3);

	this.instance_5 = new lib.img6_3_1();
	this.instance_5.setTransform(-18.2,-14.8);

	this.instance_6 = new lib.img6_3_1();
	this.instance_6.setTransform(21.3,-10.8);

	this.instance_7 = new lib.img6_3_1();
	this.instance_7.setTransform(-1.2,-5.3);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = mask;

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.5,-53.3,176.3,46.3);


(lib.moooo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mooooMc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1},4).to({y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-37,124,74);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AAIAVQgagFgGgNQgEgMADgHQAEgHAMADIAQAHQAMAFACADQAJAIgEAKQgDAIgKAAIgFAAg");
	this.shape.setTransform(10.9,-39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AgaAQQgIgLALgIIABgBIAQgKQAIgGAGgBQAKgDAIAMQAIALgHAGQgEAGgMAEIgPAGQgFACgEAAQgHAAgGgHg");
	this.shape_1.setTransform(-10,-40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("Ai9ASQgQgDgZgHQgbgHALgBIAUAFQAWAFAXABIAyACQAhgBAogKQA/gOBMgFQBagHBEANQATADgOABIgSABQgigGg1AAQhqgBhfAYQgZAHgpACIgVAAQgYAAgQgCg");
	this.shape_2.setTransform(-9.3,-40.1);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-5.5,-38.1,1,1,0,0,0,47.2,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmAE3QgVgVgJgGIg4gpQAGgtAQg1QAfhpAwgoQAxgnAfgUQAQgKAGgCQgIgvAQg0QAehqB0geQB3gfBaAxQBBAjATAyIBjgCQBsAGAqArQAzA0gMBFQgGAigQAWIgpAsIgMAPQgIAJgHgBQgHgBgDgFIgFgLQgEgOgDgfQgDgdgGgPQgNgjghgUIgWgNQgOgHgKgCQgJgCgNAAIgWABQgvgBhHAHIh0ALQgfABgPACQgZAEgSAIQgiANgnAGIgXADQgOABgIAGIgIAHIgKAGQgDABgbAAQgTABgEALQgFAPABAeIACAvQgBASgEAbIgIAsQgGAtgHAhIgGAfQgGATgIAKQgIAJgJAAQgJAAgJgIg");
	this.shape_3.setTransform(-4.9,-38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005799").s().p("AgUAVQgJgJAAgMQABgMAIgIQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgLAAgJgJgAgRgRQgHAIAAAJQAAAKAHAIQAIAHAJAAQAKAAAIgHQAIgIgBgKQABgJgIgIQgIgIgKAAQgJAAgIAIgAAIARIgGgPIgIAAIAAAPIgGAAIAAghIAOAAIAIACQADADAAAFQAAAEgCACQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAgBAAIAIAQgAgGAAIAHAAQADAAACgCQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgIAAg");
	this.shape_4.setTransform(63.8,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(-1.2,44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8B13C").s().p("AAAD9Qi4gBiug/Qivg/iNh2QgOgJgJgPQgIgQgBgPQgCgXAOgPICBiUQARgTAaAAQAWAAASAPQBmBVB9AtQB8AtCDAAQCEAAB9gsQB9gtBlhUQASgPAXAAQAaAAARATICBCUQANAOgCAXQgCAhgeAXQiOB2iuA+QiuA/i3AAIgCAAgAoijYIiBCUQgHAHABAMQACAWAVASQCLBxCqA9QCqA+CzAAQC0AACqg9QCqg9CLhxQAVgRACgXQABgLgGgHIiCiVQgIgKgPAAQgNAAgMAJQhpBXiBAvQiBAuiIAAQiHgBiBguQiBgvhphXQgLgJgNAAQgPAAgJAKg");
	this.shape_6.setTransform(0,44.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005799").s().p("AAADwQl4gBkjjvQgUgQgFgXQgFgXAMgOICCiUQAMgOATgBQATAAAPAMQDVCyEVAAQEWAADVixQAPgMATABQAUAAAMAOICBCUQANAOgGAXQgFAXgVAPQkiDwl4AAIgBAAg");
	this.shape_7.setTransform(0.1,44.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AAmAEQgDgfgSgQQgYgXgRAlQgNAcAAAfQAAACgHACQgBgdAJgWQALghAYgGQAggIAKAwQAIAjgHAjQAAACgHACQAGgdgDgZg");
	this.shape_8.setTransform(12.5,-28.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("Ag2gBQADguAigTQAjgUAXAvQASAngFAjQAAADgHACQAEgggKgdQgMgmgdgFQgYgDgNAaQgMAWACAYQADAjARAcQABABgIAEQgWgjACgng");
	this.shape_9.setTransform(-6.3,-26.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AgEAAIgFgMIAAgFIACAAIAAAEQACAHADAFQACAHAKALIgBABQgJgLgEgHg");
	this.shape_10.setTransform(-27.4,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("AhCBEQAcgjAKgKQAIgKAQgUIAzg8IADgDIABADIAFAMIAKASIABABIgBABIgGAMQgHANgIAJQgPAQgpAVQgLAFgWAQIgTAOgAAIgQIgIANIgZAcIgaAgQAYgSAOgHQAqgWANgNQAFgHAHgMIAIgOIgOgaQgcAfgMAPg");
	this.shape_11.setTransform(-31.7,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AgEgGIAJgDIgJATg");
	this.shape_12.setTransform(7.2,-13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AgGgMQgCgDAEABQAEAEABgBQAJALgDAPQgEgQgJgLg");
	this.shape_13.setTransform(1,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1C").s().p("AAxAUQgDgDAAgCQAAgOgRgEQgPgFgMAHIgCgBQgSgRgbAMQgCABgDgEQgCgEACgBQAYgLAUAMIAFAEIABABQAGgEAIABQAPAAALAJQAMAHAAAPQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAAAIgCgBg");
	this.shape_14.setTransform(0.8,-5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("AhJASQgMggAAgzQAAgDAEAAQABgBABAAQABABAAAAQABAAAAAAQABABAAABQAAAqAOArQALAfAbAMQAcAOAQglIAWgyQAQgdAVgNQACgBAEABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAgBABQgUAMgPAdQgIAOgOAiQgGANgLAJQgLAJgOAAQgpgBgSgzg");
	this.shape_15.setTransform(3.1,-6.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1C").s().p("AgFACQgCgEACgGQABgGAEgDQgEAIADAKQABAMAHAFQgJgCgDgOg");
	this.shape_16.setTransform(-17.4,-25.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1C").s().p("AgBAVQgEgJgBgMQgBgJADgJQADgKAEgDQgFAMABATQABAVAHALQgGgCgCgJg");
	this.shape_17.setTransform(-15.6,-26.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1C").s().p("AgGgCIgEgEIAVAAIgEAEQgFADgCAGQgBgGgFgDg");
	this.shape_18.setTransform(7.1,-17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAPQgJAAgGgFQgHgFAAgFQABgGAGgEQAHgEAIAAQAJAAAHAFQAHAEAAAFQAAAGgIAFQgGAEgIAAIgBAAg");
	this.shape_19.setTransform(7,-23.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1C").s().p("AAAAlQgWAAgRgLQgQgMAAgOQAAgPARgLQARgLAVABQAXAAARAMQAQALAAANQAAAQgRALQgQAKgWAAIgBAAg");
	this.shape_20.setTransform(6.9,-21.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1C").s().p("ABEA+QgHAAgagOQgYgNgDACQgjAYgpABQgyABgJgsQgLgzBBgTQAwgPA3AHIAAAAQAnAGAbAQQAmAXgFAgQgCAVgTANQgPALgRAAIgIgBgAAJAcQAcAVAfAEQApAHALgiQAKghghgWQgWgQgpgHIgBABQgsgGgmAHQg1AJgQAgQgXArAuAOQAoANAjgSQARgIAJgIIABgBIACACg");
	this.shape_21.setTransform(6.2,-17.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1C").s().p("AhQALQAVgcAkgOQAqgRArAWQAVAMAMAOIgkAeQgJgLgNgLQgZgUgVABQgXABgiAYIgdAZg");
	this.shape_22.setTransform(4.7,-48.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1C").s().p("AgtAnQgPgbAEgNQAFgbAwgWQAsgUARAMQgjAKgSAOQgSAPgLAaQgGAOAAAXIACATQgJgKgIgOg");
	this.shape_23.setTransform(-1.8,-50.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1C").s().p("AgEAQQAKgQgCgTQAFAVgJASg");
	this.shape_24.setTransform(17.5,-24.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1C").s().p("AgMgWQAGAZATAOIgEAGQgSgRgDgcg");
	this.shape_25.setTransform(-11.3,-21.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1C").s().p("AAAAFQgMAAgRgFQAQACANgCQAPAAALgEIAEAHQgKACgMAAIgIAAg");
	this.shape_26.setTransform(0.8,2.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAIQACgOALgFQAEAEAAAHQAAAEgEAEQgDAEgDABQgEgBgDgEg");
	this.shape_27.setTransform(11.2,-31.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1C").s().p("AAAAaQgHAAgHgIQgFgIAAgKQAAgKAGgHQAHgJAGABQAJAAAFAIQAHAIgBAJQAAALgHAHQgGAIgHAAIAAAAg");
	this.shape_28.setTransform(12.3,-30.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDALQgFgCgCgDQACgGAGgFQADgFAHgBQAEAFgBAGQgBAFgFAEQgDADgCAAIgDgBg");
	this.shape_29.setTransform(-8.1,-31.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1C").s().p("AgEAaQgKgCgFgJQgEgJACgJQACgLAIgGQAIgGAIABQAJADAFAIQAFAKgCAJQgCAKgIAGQgHAFgFAAIgEAAg");
	this.shape_30.setTransform(-7.1,-30.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1C").s().p("AgbALQgLgNgBgUIAEAAQABATALALQALANAMAAQAPgBAKgNQALgMgBgTIAEAAQABAVgMANQgLAOgRABIAAAAQgPAAgMgOg");
	this.shape_31.setTransform(12.6,-27.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1C").s().p("AAAAkQgQAAgNgRQgNgRgBgUIAAgMIAFAAIgBAMQABATAMAPQAMAPAOAAIABAAQAQAAAMgQQALgPAAgVIgCgNIAEgBIACAOQABAWgNARQgNASgSAAg");
	this.shape_32.setTransform(-6.6,-27.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1C").s().p("AAIAVQgbgFgFgNQgEgMADgHQADgGANACIAAAAIABABIAPAGQAMAFACADQAJAIgEAKQgDAIgKAAIgFAAgAgRgKIAAAIQACAKALADIAMAFQAKABAAgHQABgKgMgHIgVgIIAAgBIgBAAQgCAAAAAGg");
	this.shape_33.setTransform(11,-39.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1C").s().p("AAKATIgRgGQgGgCgDgEQgEgFgBgDIgBgJQAAgFACgCQADgDAFACIAXAKQAFACADAFQAEACAAAGIAAADQgBAFgDACQgDACgDAAIgDAAg");
	this.shape_34.setTransform(11,-39.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1C").s().p("AgaAPQgIgLAMgIIAQgKQAHgGAHgBQAKgDAIAMQAIALgHAGQgEAGgMAEIgPAGQgFACgEAAQgIAAgFgIgAAIgQIgHAEIgQALIgBAAQgFACABAKQACALAJgEIAJgEIAOgGQAJgFgCgFQgDgJgCgDQgDgDgDAAIgCABg");
	this.shape_35.setTransform(-10,-40.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1C").s().p("AgQAUQgFgCgCgFQgCgEABgFQACgEAEgCIAYgQQAEgCAFABQAEACACAEIAEAIQACAFgCADQgCAEgFACIgYALIgFABIgFgBg");
	this.shape_36.setTransform(-10,-40.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1C").s().p("AADBJQgCgEABgCQAWgmAWgaQhOgegWgrQAAgBAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQADAAABADQAMAYAhATQATANAkAOIADABQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgYAcgYApIgBAAIgDgBg");
	this.shape_37.setTransform(-29.1,-32.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1C").s().p("AgRBBQgDgDACgCQASgbAIghQAJgggFggQAAgBAAgBQAAAAABAAQAAAAABAAQAAAAABABQADACAAACQAFAhgJAhQgJAigSAcIgBAAIgDgCg");
	this.shape_38.setTransform(22.4,-37.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1C").s().p("AkUDOQgGgTgCgcIABgOQAAgDgHAGIgQANQAAABgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgCgFQACgcAJglQAKgkAUgnIASgeQg8hBAFhNQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAqAMAfAAQAnAAAfgPQBpg0BJADQAlACApALQAcAHAwARQASAGAjgMQATgIAhgPQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQACADgBACQgMAYgVAUIgWASQgSAQABABQARARAIAKQA7BJAVBMQABAEgCgBQgEgCgBgDQgOgygcgsQgcgwgngiQgFgFADgCQAugYAZgoQgaAMgQAFQglANgUgIQiLg3hmAiQgIACg/AdQgqATgfgBQghgBgQgCQgQgFgHABQgPAAACATQACARAFAQQAOApAjAnQAEADgCADQguBBgMBKIgBARIAIgHQAJgHAHgDQAAAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQgHAiAKAeIAAAAIADgCIAkgWQABgBABAAQAAAAABABQAAAAABAAQAAABABABQAAABABABQAAAAAAABQAAABAAAAQgBABAAAAIgqAaIgBAAQgCAAgDgFg");
	this.shape_39.setTransform(-3.7,-24);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1C").s().p("Ah4A/QgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAQhGBQggQA+gaBSAHQACAAACAEQABABAAABQAAABAAAAQAAABAAAAQgBAAAAAAQiSgMg/BMQgSAWgHAVIAHgDQAIgDARAAQACAAACAEQABABAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgaABgOAJIgCABIgCgCg");
	this.shape_40.setTransform(-18,-13.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1C").s().p("Ag6gCQgCAAgCgEQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQA4ANA+gCQADAAABAEQABABAAABQAAABAAAAQAAABAAAAQgBAAAAAAIgJAAQg8AAgzgMg");
	this.shape_41.setTransform(-2.1,5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1D1D1C").s().p("AgKByQgDgDACgCQAbgZAIgRQABgBAAAAQAAAAABAAQAAAAABAAQAAABABABIACAEIAAAMQAAAQAEgIIAHgQQAKgVABgOQABAAAAgBQAAAAAAAAQABAAAAAAQABAAABABQACACABACQAEAQAJg9QgBgNgDgLQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQAUAEgSgWQgPgTgMgJQgvgkhRABQgCAAgCgEQAAgBgBgBQAAAAAAgBQAAAAAAgBQABAAAAAAQA5gBAuAUQA7AZAOAwIgBADIgMADIACAPQACAigNAmQAAAAAAAAQgBABAAAAQAAAAgBgBQAAAAgBAAIgDgDIgEgLIAAAAIACgHQgKgFAIAMIgDAKQgHAXgTASQAAABgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBIgBgEQACgSAFgIIgGAJQgKAOgVAUIAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_42.setTransform(21.4,-11.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1D1D1C").s().p("AAKgHQgegbgngOIACgIQAnAQAeAeQAgAbAQAoQgRglghgbg");
	this.shape_43.setTransform(23.3,-9.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1D1C").s().p("AAHgMQgzgVg1gCIAAgIQA2AEAzAXQA3AWAjAmQgmglg1gTg");
	this.shape_44.setTransform(25.7,-13.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1C").s().p("AACgJQgygFgyAOIgCgIQAzgMAzAHQA1AHAuAXQgugVg1gFg");
	this.shape_45.setTransform(24.2,-19.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D1D1C").s().p("AgMgJQArgtAzghIADAGQgzAhgrAqQg1AwgXAuQAXgwAygxg");
	this.shape_46.setTransform(-12.4,-6.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D1D1C").s().p("AgOgeQAjgRApgIQAsgLAlgBIAAAIQhVADhHAdQhSAgguA/QAthBBSghg");
	this.shape_47.setTransform(-18.4,-10.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1D1D1C").s().p("AgCgQQA9gDBAAQIgDAFQg8gOg9AAQhIACgxAbQAwgcBIgFg");
	this.shape_48.setTransform(-14.4,-19.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1D1D1C").s().p("AgSAcQhKgHg7gQQg8gOgVgUIABgCQAWATA7APQA7AQBJAHQBQAHBCgIQBDgHAlgUIABACQg6Agh2AAQgiAAgpgEg");
	this.shape_49.setTransform(2.3,36.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1D1D1C").s().p("AhjABIg/gOIABgCIBrAVQB6ATBfgYIAAACQg0ANhCAAQhEAAhMgPg");
	this.shape_50.setTransform(1.8,24.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1D1D1C").s().p("AgkBgQhDgNgrgOQg8gTgrgbQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAABAAQAUgVAIgiQAFgXACgpQABgDAEAAQABAAABAAQAAAAABAAQABAAAAABQAAAAAAABQgCApgFAVQgHAigSAUQgEAFAMAGIAUAJQB2A2CTAOQBLAIA6gDIAmgDIACAAIAAgBQAViEgMhXQgBgCAFgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQANBagVCFIgFACQgoAGgsAAQhWAAhjgVg");
	this.shape_51.setTransform(0.6,40.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1D1D1C").s().p("AgnBeQAvgugIg/QgDgbgNgXQgLgUgKgFIgCgBIADgBQAMgEAVACQAZAEASAPIgCACQgPgOgYgEQgSgDgOADQAKAIALAUQAMAXACAZQAKBAgxAug");
	this.shape_52.setTransform(37.4,22.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1D1D1C").s().p("AghAQQANgUAbgIQAOgEANABIAAACQgMgBgPAEQgaAHgMAUg");
	this.shape_53.setTransform(33.7,9.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1D1D1C").s().p("AgwBSIABgDIAdgFQAegNAVgmQAUgkgKglIgQgeIACgBIAQAeQALAmgVAlQgTAjgbAOQgSAJgQAAg");
	this.shape_54.setTransform(26.2,18.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1D1D1C").s().p("AgrANIAZgQQAdgRAgAJIAAACQgfgIgdAQIgXAQg");
	this.shape_55.setTransform(28.5,3.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1D1D1C").s().p("AgKABIgHgGIAFgBIAGAEQAIAEAQAAIAAAGQgSgBgKgGg");
	this.shape_56.setTransform(10.9,16);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1D1D1C").s().p("AgmAvQgUgQACgaQAEgmAkgSQAggRAlAQQACABACADQAAABAAABQAAABAAAAQAAABgBAAQAAAAgBgBQgagLgdAHQgcAHgNAZQgPAbANAWQAOAXAegDQACAAACAEQABABAAABQAAAAAAABQAAABgBAAQAAAAAAAAIgFABQgVAAgRgOg");
	this.shape_57.setTransform(10.3,13.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1D1D1C").s().p("AgtAzQgVgWAEgdQAEgeAcgMQAmgRAzAOQADABABAEQAAAAABABQAAABgBAAQAAAAAAABQgBAAAAAAQgmgKgcAGQghAHgPAbQgQAbAZAaQADADgBACIgBABIgDgBg");
	this.shape_58.setTransform(10,6.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1D1C").s().p("AgKCgQhOgbg3g3QAAAAAAgBQgBAAABAAQAAgBABAAQAAAAABgBQAEgBACACQAnAmA4AYQAlARAWAGQAnAKAYgIQAegJAOgeQAMgbgGghQgNhDg0hGQg2hJg+gWQgBAAAAAAQgBgBABAAQAAAAAAgBQABAAAAgBQAEgCACABQAmANAfAgQAaAYAdApQBgCGgyBCQgaAjgvAAQgdAAgjgNg");
	this.shape_59.setTransform(30,15.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1D1D1C").s().p("AgUgDIghgaIADgDIAhAZQAlAaAiAKIgBAEQgjgKgmgag");
	this.shape_60.setTransform(30.2,10.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1D1D1C").s().p("AgpCUQgPgLgHgRQgHgSAIgQQABgCAEAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQgSAmAoAPQAlAQAegZQAoghACgrQAChDghgpQgegjgigiQgUgTgEgCQgYgQgGAcQgGAZAJANQAMAUAPALQABABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgEACgCgCQgRgMgKgPQgNgUAFgRQAFgRAJgGQAJgIAPACQANABATAUIAYAcIAiAkQATAVAJATQAVAwgKAxQgMA3gxAUQgXAKgRAAQgOAAgJgGg");
	this.shape_61.setTransform(17.1,7.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1D1D1C").s().p("AglAAQgIgZACggIAFgaIACAAIgFAaQgCAgAIAZQASA3A9AbIAAACQg/gagSg6g");
	this.shape_62.setTransform(-34.6,28.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1D1D1C").s().p("AA1BEQgOAAgSgIQgegNgVggQgTgbgEgeIAAgZIACABIAAAYQAEAdATAbQAVAhAfAMQARAHANgBIAAADg");
	this.shape_63.setTransform(-23.1,20.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1D1D1C").s().p("Ag6AbQgDgEACgCQAZgYASgLQAdgUAYAIQAQAFAFAPQAGAMgHAQQAAABAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBQgCgDAAgDQAIgRgNgLQgMgKgSAFQgeAHgoAoIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_64.setTransform(-16.8,-5.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1D1D1C").s().p("AATAsQgCAAgBgEQgBgBAAgBQAAgBAAAAQAAAAABAAQAAgBABABQAUAGAKgcQAJgZgKgPQgSgYghAVQgbAQgRAYQgBAAAAAAQAAAAgBAAQAAAAgBgBQgBAAAAgBQgDgDABgCQAUgcAfgPQAlgSASAgQAKASgJAbQgIAYgQAAIgJgBg");
	this.shape_65.setTransform(-12.6,0.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1D1D1C").s().p("AgJB6QgngTgVgmQgWgqgDgwQgDg7AdgfQAXgXAZAIQAWAIAMAeQABAEgDgCQgDgBgBgDQgHgSgPgJQgTgKgQAMQgcAUgGApQgKBFAZAuQASAhAdATQAfAVAigGQAlgGAHgnQAHgmgagZQgCgCAAgDQAAgBAAgBQAAAAAAAAQABAAAAAAQABAAABABQAWAWADAnQADAqgdANQgRAHgSAAQgWAAgVgLg");
	this.shape_66.setTransform(-18.6,2.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1D1D1C").s().p("AglABQgigFgFgCIABgCIA4AKQA8AKAjgJIABADQgQADgWAAQgiAAgqgIg");
	this.shape_67.setTransform(-2.9,14.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1D1D1C").s().p("AhRCPQgsgEgZgsQgZgtAbglQAqg6A/gdQAtgVAXgwQAAAAABAAQAAAAABAAQAAAAABABQABAAABABQA1BKBLgUIAAAAIACABQADADAAACIAAABQgHBThNBJQhIBEhIAAIgQgBgAAdiFQgHAQgHAJQgMAPgTANIgmAVQgvAZgdAiQgoAuAVAoQAoBOBZgjQBFgcA0hDQAwg7AHg1QgWAFgVgCQgbgDgSgPQgTgPgSgYIgDgEIABADg");
	this.shape_68.setTransform(-28.1,23.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAFCYQgcgFgFgMIgKgWQgdABgIgHQgJgHgGgLQgJgOACgLIAHgdQgMgMgCgOQgBgJABgJIABgJQACgIAGgIQAKgRAOgCQAWgDAXgGQgIgGgIgLQgQgUADgRQADgUAIgJQAIgKALAFQALAEAiAiQAjAgAFAJIAQATQANARAIATQAGAQACAVQACAVgDAQQgFAfgMATQgKAQgSALQgdASgTAAIgGgBg");
	this.shape_69.setTransform(14.7,7.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#005799").s().p("Ag3AGIgHgSIALgKQAMgKAJgEQAPgHAfABIAOANQAIAHAZAgQgHAAgJABQgQADgMAHQgFACgJALIgGAJg");
	this.shape_70.setTransform(30.5,6.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F4F4F4").s().p("AgiAZIgZgjIAhglIACAZIALgKIALAEQAKAGANAIQAWANARARIg9AaIgOAFIgGABQgDgKgKgNg");
	this.shape_71.setTransform(26.7,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#005799").s().p("AgPBgIgdgCIgIgCQAHgEAIgKQAQgUAHgZQAIgagGgaQgBgIgKgcQgEgMgLgOIgKgMIAOgBQAPgCAIACQALAEAXALIATAuQARAvgJAXQgMAcgRAPQgRAQgSAAIgBAAg");
	this.shape_72.setTransform(38.8,22.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#005799").s().p("Ag7BJIgOgOIAegJQAggPAMgcQAOgbAAgpIgDgkIAvAkIAFAJQAGALACANQAGAcgLAaQgLAbgRASQgLALgNAGQgPAGgXAEg");
	this.shape_73.setTransform(23.6,17);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#005799").s().p("AArBTQguAAgkgGQhAgIgigIQgVgFgVgIIghgOIgQgJIACgjQAYgbALgOIAWggIAOAFIAoAKQA/AOA7AEQAtACAngEQAogEAcgIIAfAUIAkAXIADAxQAAAKgBAOQglATg6AIQghAFgqAAIgPgBg");
	this.shape_74.setTransform(2.3,31.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#005799").s().p("AgEAPQgDgDgHgMIAAgGIAOgSIAIAQQACAGAFAGIgLAVQgEgEgEgGg");
	this.shape_75.setTransform(-26.8,8.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#005799").s().p("AghBCQgWgWgHgdQgGgUAFgMQADgJAMgSQALgSAGgFIAVgSIgBAIIgDAVQgCAqAKATQAPAfAOAOQAUATAYALQgRAFgVABIgHAAQgjAAgUgUg");
	this.shape_76.setTransform(-37.4,28.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#005799").s().p("AgdBCQgOgLgOgUQgMgRgDgLQgFgMgCgMIgBgYIAVgaIALgVIANATQAQATANAHQAOAIAIADQAJADAOAAQAUABAWgDIgBANQgCAQgGANQgWA0gLAMIgNAOQgigGgVgRg");
	this.shape_77.setTransform(-20.3,18.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#005799").s().p("AgDA0QgegDgdgIIgPgEQAIgWAAgNIgCgVIgFgQIgDgHQAIAAAEgDIAKgIIAPAEQATAGARACQAZADAuAAIgCALQgCAMAEAIQAFALAKAMIgGASIgDARQgLADgRAAIgMAAQgSAAgQgCg");
	this.shape_78.setTransform(-2.4,9.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1D1D1C").s().p("AALAgQgTgHgGACIgJADQgMgKgKAAIgRADIgIACQgIgTgBgMIgCglIAFAEQAHAFALADQAMADAUAAQARAAAGgDQAOgFAGgEIAKgHQAIgFAFAAQAFABAIAEIALAHIAJAFQAIAEABgBIgMALQgOALgDAIIgaA3QgFgSgLgDg");
	this.shape_79.setTransform(3.1,-8.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F8D2E4").s().p("AgmAEQgJgVgDgUQgBgLAAgMIABgJIAMAQQAQASAMAHQARANAtASQgPATgKAPQgJAPgPASQgegpgLgZg");
	this.shape_80.setTransform(-29.2,-32.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F8D2E4").s().p("AgUAhIgRgVIAQgHQARgJAIgMQARgRAPgeIACAUQABAYgFASQgIAagXAnQgPgWgIgJg");
	this.shape_81.setTransform(20.3,-37.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F4B6D2").s().p("AAIAhQgdgCgRgbQgEgEgDgOIgDgOIAJgDQAKgCAKADQARAFADAEIAJgCQAJgCAHADIAJAEQAFACADADQAFAFABAIQgEAIgGAJQgNAQgQAAIgCAAg");
	this.shape_82.setTransform(0.9,-3.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#009544").s().p("AgQAkQgMgJgGgMIgEgJIALgZQAPgaAQAEQAfAIADAhQADAMgOAQQgIAJgKAEQgFABgEAAQgIAAgIgGg");
	this.shape_83.setTransform(12.6,-29.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#009544").s().p("AghAWIgJgeQgCgDALgRQAHgMAOgFQALgDAJABQAJACANANQAMAOABAHQABAMgGARQgKAYgZAFIgEABQgUAAgMgag");
	this.shape_84.setTransform(-6.6,-28.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AihDLQgIgCghgNQgagJgWgkIgRghQgFgOgCgPQgDgWAEglQACgWAHgRIAGgOQgIgDgLACQgGABgIAEIgGAEQAFgaARgVQAbgjA2gYQAhgOA2gBQAbgBAUADIANgLQAPgMAKgGQAPgIAZgCIAQgKQATgLALgBQALgBAPAMQAIAGAGAGIASAEIAMgBQATABAhAGQAjAGAdATQAPAJASASQANANACARQAAAEgMgDIABAYQABAYgCAIQgBANgHAUIgJgTQgJAcgFAJQgFAJgKAIIgBgdQgIANgGAGQgDAEgLAJIgKAHIhJhGQgHgGgKADQgJACgGAIQgGAIgDAUQgCAOAkAlIgvAIQgNACgMAQQgGAIgDAHQgZAAgXgBQgPgBgdgGIgZgFQgEAAgIADIgPAFIADAIIAGASQADARgDAWQgBANgNALQgLAJgQAFQgHACgHAAIgLgBg");
	this.shape_85.setTransform(0.1,-4.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgfBEQgQgYgDgeQgEgfANgZQANgZAWgCQATgCASAWQARAWADAfQACAQgDAQQgGAFgJAEQgGACgNAMIgMALg");
	this.shape_86.setTransform(-6.3,-26.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAAA4IgRgLQgFgEgKgDIgJgDIAAgNQABgfANgXQANgYAQABQARAAAMAYQAMAYgBAgQAAAPgEAPIgHACg");
	this.shape_87.setTransform(12.6,-28.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#005799").s().p("AkXC4QgFgbAGgWQgGACgNALIgLAKQAAgXAIggQAPhCAlgwQgcgigHgNQgbgvAEgxQAhAKAvABQAXABARgCIAvgYQA5gaAqgHQA8gNBMAUQAnAKAlAQQARAFBXgjQgHANgNAQQgaAgghAQQAoAiAiA8QAcAwAKAmIgWgPQgHgFgagKQgagJgMgDQgKgCgYgCIgWgBIgTgOQgOgLgnADQgKABgMAJIgLAIQgYAFgNAFQgJADgPAOIgQANQg8gDgZACQgyAEgyAkQgZASgPAdQgJAQgEAPQgDAHAngPIACADIAAAFIgIAQIgrAaQgDgJgDgOg");
	this.shape_88.setTransform(-3.7,-24);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F4F4F4").s().p("AAAAdQgggOgHgFIgTgKIA+grIASAYQASAXAFAJQAJAPAFAPg");
	this.shape_89.setTransform(35.3,10.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F4F4F4").s().p("AAZBmQgHgBgSgGIgfgMIg1gbQAUgIAcgVQASgOAIgPQADgFAIggQAHgTgGgZIgFgWIAvAZIALAHIAOAmQAPApABAWQABAVgVAfQgKAPgLALg");
	this.shape_90.setTransform(29.7,21.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F4F4F4").s().p("ADhDiQhhgBhEgNQhcgRhAgXQgcgKgZgOIgUgMQAbgqACgQIAFg9QhVBAgTABQgMABgVgRQgSgPgOgVQgLgQgFgwIgCguQAtgwASgWIAzhAIAMgLIAGAOQAHAQAJALQAOARAVAOQAbASAVAAQAYABAJgCQAKgBAIgJQAIgHABgFIAAgDICbALIBoBDIAKAQIAOAdIBDAnIADAfQACAmgBAgQgBAXgEAeIgFAmIgFAgQgcABgkAAIgTAAg");
	this.shape_91.setTransform(-7,28.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AmfGdQisirAAjyQAAjxCsirQCtisDyAAQDzAACtCsQCsCrAADxQAADyisCrQitCsjzAAQjyAAitisg");
	this.shape_92.setTransform(0.1,-0.7);

	this.addChild(this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.7,-70.6,141.6,140.7);


(lib.kefir_1 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.line1();
	this.instance.setTransform(-10.2,19.5);
	this.instance.alpha = 0.191;

	// Слой 3
	this.instance_1 = new lib.line();
	this.instance_1.setTransform(17,-6.9);
	this.instance_1.alpha = 0.621;

	// Слой 1
	this.instance_2 = new lib.kefir();
	this.instance_2.setTransform(-30.6,-59.8);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkLIIQgDgGAAgFQgEAQgQAAQgNAAgEgMIgDgLQAAgIAOghQAOgiAAgkQAAgbAVg3QAZg6AGgRQAFgQAOgSQANguAohOQAwhZAhguQBNhzAWgjIAshLQAOgYAUgQQAagVAAAjIgBAHQAgg2AwhGQBqiYAABKQAAADhPBwQhXB8geBDQgtB4gaBBQgsB0gUAAQgNAAgGgMIgDgNQAUgtARgqQg7BtgPAuQgIAagbCiQgVB/gSAAQgGAAgGgFQgFgDgCgEIgJAoQgGAbgUAAQgLgDgEgFQgDADgFAKQgHAKgLAAQgNAAgGgKgAA/jDIAEgBIAMgYIgQAZg");
	this.shape.setTransform(-1.9,3.5);

	this.addChild(this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-59.8,70.4,120);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_386 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(386).call(this.frame_386).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(0,-69.6,0.018,0.018);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(342).to({_off:false},0).wait(1).to({scaleX:0.04,scaleY:0.04},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.22,scaleY:0.22,y:-69.7},0).wait(1).to({scaleX:0.38,scaleY:0.38},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:-69.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:-69.9},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.46,scaleY:1.46,y:-70},0).wait(1).to({scaleX:1.62,scaleY:1.62},0).wait(1).to({scaleX:1.73,scaleY:1.73},0).wait(1).to({scaleX:1.8,scaleY:1.8},0).wait(1).to({regY:-0.2,scaleX:1.82,scaleY:1.82,y:-69.9},0).wait(32));

	// Layer 1
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(1,220.9,0.01,0.01);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(272).to({_off:false},0).wait(1).to({scaleX:0.04,scaleY:0.04},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.62,scaleY:0.62},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).to({scaleX:1,scaleY:1},5).wait(71).to({scaleX:1.2,scaleY:1.2},6).wait(14).to({scaleX:1,scaleY:1},5).wait(4));

	// glaz
	this.instance_2 = new lib.glaz1_1();
	this.instance_2.setTransform(-83.4,-70);

	this.instance_3 = new lib.glaz2_1();
	this.instance_3.setTransform(-83.4,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},293).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},9).to({state:[]},2).wait(81));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_255 = new cjs.Graphics().p("AhdBjQgQgfAAgZQABg7Aig1QAfguArgWQAsgWAfAQQAjARAAA4Qg+DdhAAAQg0AAgZg0g");
	var mask_graphics_256 = new cjs.Graphics().p("AAeBjQgOgdgCgYIgJAIIhOAaQhOAagDAAQguAAgVglQgNgWAAgXQAAgwAtgmQAogiA6gKQA6gLAmAUQAbAOALAYIAGgKQAfguAsgWQAtgWAfAQQAjARAAA4Qg+DdhCAAQg0AAgZg0g");
	var mask_graphics_257 = new cjs.Graphics().p("AkKCtQgPgYAAgVQAAgnAagWQAZgUAiABQAiABAYAVQAbAXAAAmQAAAagSAYQgWAggoAAQgzAAgYgogABNAkQgOgdgBgVIgKAHIhNAZQhOAZgDAAQguAAgWglQgMgUAAgWQAAgzAtgmQAngiA7gKQA4gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DchCAAQg1AAgZg0g");
	var mask_graphics_258 = new cjs.Graphics().p("AkKCtQgPgYAAgVQAAgnAagWQAZgUAiABQAiABAYAVQAbAXAAAmQAAAagSAYQgWAggoAAQgzAAgYgogAhnB0QgNgVAAgXQAAgQADgNQgpgCgUgjQgMgUAAgWQAAgzAtgmQAngiA7gKQA4gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DchCAAQg1AAgZg0QgOgdgBgVIgKAHIgpAMIAKAJQAaAXAAAkQAAAZgRAXQgYAggnAAQgxAAgVglg");
	var mask_graphics_259 = new cjs.Graphics().p("AhzDYQgLgVAAgYQAAgoAZgXQAIgIAJgEQgLgJgIgNQgNgWAAgXQAAgQADgNQgpAAgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DdhCAAQg1AAgZgyQgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAiQAAAJgDAKQAKAEAIAHQAZAWAAAkQAAAYgPAXQgRAagbAGQgEALgFAKQgUAlgtAAQgyAAgTgogAkKCDQgPgYAAgVQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAagSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_260 = new cjs.Graphics().p("AiPD7QgNgWAAgVQAAglAZgVIAFgFIAAgHQAAgoAZgXQAIgHAJgFQgLgIgIgOQgNgVAAgVQAAgQADgNQgpgCgUgjQgMgWAAgWQAAgzAtgmQAngiA7gKQA4gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DchCAAQg1AAgZgyQgOgdgBgXIgKAHIgpAOIAKAJQAaAXAAAkQAAAIgDAJQAKAFAIAHQAZAVAAAlQAAAXgPAYQgRAZgbAHQgEAKgFAKQgHAMgKAIIAAABQAAAYgNAXQgVAigsAAQguAAgVglgAkKBiQgPgYAAgVQAAgnAagUQAZgUAiABQAiABAYAVQAbAVAAAmQAAAagSAYQgWAggoAAQgzAAgYgog");
	var mask_graphics_261 = new cjs.Graphics().p("AhnE1QgNgWAAgXQAAgWAHgRQgWgJgMgWQgNgWAAgVQAAglAZgWIAFgEIAAgHQAAgoAZgXQAIgIAJgEQgLgHgIgNQgNgWAAgXQAAgQADgNQgpgCgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DfhCAAQg1AAgZg0QgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAkQAAAJgDAKQAKAEAIAHQAZAWAAAiQAAAYgPAXQgRAagbAGQgEALgFAKQgHAMgKAIIAAAAQAAAUgIATQAOAGANAMQAaAYAAAkQAAAZgRAXQgYAggnAAQgxAAgVglgAkKApQgPgYAAgTQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAYgSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_262 = new cjs.Graphics().p("AhnE1QgNgWAAgXQAAgWAHgRQgWgJgMgWQgNgWAAgVQAAglAZgWIAFgEIAAgHQAAgoAZgXQAIgIAJgEQgLgHgIgNQgNgWAAgXQAAgQADgNQgpgCgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DfhCAAQg1AAgZg0QgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAkQAAAJgDAKQAKAEAIAHQAZAWAAAiQAAAYgPAXQgRAagbAGQgEALgFAKQgHAMgKAIIAAAAQAAAUgIATQAOAGANAMQAaAYAAAkQAAAZgRAXQgYAggnAAQgxAAgVglgABWEFQgGgSABgWIABgUQAAg5AbggQAYgdAiABQAiABAZAfQAaAhAAA3QAAApgKAXQgUAwg5AAQg/AAgQg3gAkKApQgPgYAAgTQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAYgSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_263 = new cjs.Graphics().p("AhYE1QgNgWAAgXQAAgWAHgRQgWgJgMgWIgDgFIAAAEQAAAagSAZQgWAggoAAQgwAAgWgoQgPgZAAgUQAAgnAagWQAXgUAhABQAiAAAXAVQAKAJAGALIAAgBQAAglAZgWIAFgEIAAgHQAAgoAZgXQAIgIAJgEQgLgHgIgNQgNgWAAgXQAAgQADgNQgpgCgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DfhCAAQg1AAgZg0QgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAkQAAAJgDAKQAKAEAIAHQAZAWAAAiQAAAYgPAXQgRAagbAGQgEALgFAKQgHAMgKAIIAAAAQAAAUgKATQAQAGANAMQAaAYAAAkQAAAZgRAXQgYAggnAAQgxAAgVglgABlEFQgGgSABgWIABgUQAAg5AbggQAYgdAiABQAiABAZAfQAaAhAAA3QAAApgKAXQgUAwg5AAQg/AAgQg3gAj7ApQgPgYAAgTQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAYgSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_264 = new cjs.Graphics().p("AASGJQgGgRAAgmQAAg0AagdQAXgaAiADQAhACAXAdQAaAfAAAzQAAAYgQAcQgYAqgtAAQg5AAgRgwgAhYDWQgNgWAAgXQAAgWAHgRQgWgJgMgWIgDgFIAAAEQAAAagSAZQgWAggoAAQgwAAgWgoQgPgZAAgUQAAgnAagWQAXgUAhABQAiAAAXAVQAKAJAGALIAAgBQAAglAZgUIAFgEIAAgHQAAgoAZgXQAIgIAJgEQgLgJgIgNQgNgWAAgXQAAgQADgNQgpgCgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DfhCAAQg1AAgZg0QgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAkQAAAJgDAKQAKAEAIAHQAZAWAAAkQAAAYgPAXQgRAYgbAGQgEALgFAKQgHAMgKAIIAAAAQAAAUgKATQAQAGANAMQAaAYAAAkQAAAZgRAXQgYAggnAAQgxAAgVglgABlCmQgGgSABgWIABgUQAAg5AbggQAYgbAiABQAiABAZAdQAaAhAAA3QAAApgKAXQgUAwg5AAQg/AAgQg3gAj7g0QgPgYAAgVQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAagSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_265 = new cjs.Graphics().p("AjgF6QhDhFAAgqQAAhLAsgIQAmgGA8AnQA1AiAtAyQAtAxAAAXQAAAZgSAXQgYAggrAAQg9AAhIhLgAASF9QgGgSAAglQAAg1AagdQAXgZAiACQAhACAXAdQAaAgAAAyQAAAYgQAdQgYApgtAAQg5AAgRgvgAhYDJQgNgWAAgWQAAgXAHgRQgWgIgMgXIgDgFIAAAFQAAAagSAYQgWAggoAAQgwAAgWgoQgPgZAAgUQAAgnAagWQAXgUAhABQAiABAXAVQAKAIAGALIAAgBQAAglAZgTIAFgFIAAgHQAAgoAZgXQAIgHAJgFQgLgIgIgOQgNgVAAgXQAAgQADgNQgpgCgUgjQgMgWAAgWQAAgzAtgmQAngiA7gKQA4gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DehCAAQg1AAgZg0QgOgdgBgXIgKAHIgpAOIAKAJQAaAXAAAkQAAAKgDAJQAKAFAIAHQAZAVAAAlQAAAXgPAYQgRAZgbAFQgEAKgFAKQgHAMgKAIIAAABQAAATgKATQAQAGANAMQAaAYAAAkQAAAZgRAYQgYAfgnAAQgxAAgVglgABlCZQgGgRABgWIABgVQAAg5AbggQAYgbAiACQAiABAZAcQAaAiAAA3QAAAogKAYQgUAvg5AAQg/AAgQg3gAj7hBQgPgYAAgVQAAgnAagWQAZgUAiABQAiABAYAVQAbAXAAAmQAAAagSAYQgWAggoAAQgzAAgYgog");
	var mask_graphics_266 = new cjs.Graphics().p("AiLF6QhDhFAAgqQAAhLAsgIQAmgGA8AnQA1AiArAyQAtAxAAAXQAAAZgSAXQgYAggpAAQg9AAhIhLgABnF9QgGgSAAglQAAg1AagdQAXgZAiACQAhACAXAdQAaAgAAAyQAAAYgQAdQgYApgtAAQg5AAgRgvgAl0F2QgGgOgCgSIgBgQQAAgtAagcQAZgaAiAAQAjgBAXAbQAbAeAAA2QAAAdgSAWQgXAegsAAQg3AAgVgsgAgDDJQgNgWAAgWQAAgXAHgRQgWgIgMgXIgDgFIAAAFQAAAagSAYQgWAggoAAQgwAAgWgoQgPgZAAgUQAAgnAagWQAXgUAhABQAiABAXAVQAKAIAGALIAAgBQAAglAZgTIAFgFIAAgHQAAgoAZgXQAGgHAJgFQgLgIgGgOQgNgVAAgXQAAgQADgNQgpgCgUgjQgMgWAAgWQAAgzAtgmQAngiA5gKQA6gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DehCAAQg1AAgZg0QgOgdgBgXIgKAHIgpAOIAKAJQAaAXAAAkQAAAKgDAJQAKAFAIAHQAZAVAAAlQAAAXgPAYQgRAZgbAFQgEAKgFAKQgHAMgKAIIAAABQAAATgKATQAQAGANAMQAaAYAAAkQAAAZgRAYQgYAfgpAAQgxAAgTglgAC6CZQgGgRABgWIABgVQAAg5AbggQAYgbAiACQAiABAZAcQAaAiAAA3QAAAogKAYQgUAvg5AAQg/AAgQg3gAimhBQgPgYAAgVQAAgnAagWQAZgUAiABQAiABAYAVQAbAXAAAmQAAAagSAYQgWAggoAAQgzAAgYgog");
	var mask_graphics_319 = new cjs.Graphics().p("AiLF6QhDhFAAgqQAAhLAsgIQAmgGA8AnQA1AiArAyQAtAxAAAXQAAAZgSAXQgYAggpAAQg9AAhIhLgABnF9QgGgSAAglQAAg1AagdQAXgZAiACQAhACAXAdQAaAgAAAyQAAAYgQAdQgYApgtAAQg5AAgRgvgAl0F2QgGgOgCgSIgBgQQAAgtAagcQAZgaAiAAQAjgBAXAbQAbAeAAA2QAAAdgSAWQgXAegsAAQg3AAgVgsgAgDDJQgNgWAAgWQAAgXAHgRQgWgIgMgXIgDgFIAAAFQAAAagSAYQgWAggoAAQgwAAgWgoQgPgZAAgUQAAgnAagWQAXgUAhABQAiABAXAVQAKAIAGALIAAgBQAAglAZgTIAFgFIAAgHQAAgoAZgXQAGgHAJgFQgLgIgGgOQgNgVAAgXQAAgQADgNQgpgCgUgjQgMgWAAgWQAAgzAtgmQAngiA5gKQA6gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DehCAAQg1AAgZg0QgOgdgBgXIgKAHIgpAOIAKAJQAaAXAAAkQAAAKgDAJQAKAFAIAHQAZAVAAAlQAAAXgPAYQgRAZgbAFQgEAKgFAKQgHAMgKAIIAAABQAAATgKATQAQAGANAMQAaAYAAAkQAAAZgRAYQgYAfgpAAQgxAAgTglgAC6CZQgGgRABgWIABgVQAAg5AbggQAYgbAiACQAiABAZAcQAaAiAAA3QAAAogKAYQgUAvg5AAQg/AAgQg3gAimhBQgPgYAAgVQAAgnAagWQAZgUAiABQAiABAYAVQAbAXAAAmQAAAagSAYQgWAggoAAQgzAAgYgog");
	var mask_graphics_320 = new cjs.Graphics().p("AjgF6QhDhFAAgqQAAhLAsgIQAmgGA8AnQA1AiAtAyQAtAxAAAXQAAAZgSAXQgYAggrAAQg9AAhIhLgAASF9QgGgSAAglQAAg1AagdQAXgZAiACQAhACAXAdQAaAgAAAyQAAAYgQAdQgYApgtAAQg5AAgRgvgAhYDJQgNgWAAgWQAAgXAHgRQgWgIgMgXIgDgFIAAAFQAAAagSAYQgWAggoAAQgwAAgWgoQgPgZAAgUQAAgnAagWQAXgUAhABQAiABAXAVQAKAIAGALIAAgBQAAglAZgTIAFgFIAAgHQAAgoAZgXQAIgHAJgFQgLgIgIgOQgNgVAAgXQAAgQADgNQgpgCgUgjQgMgWAAgWQAAgzAtgmQAngiA7gKQA4gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DehCAAQg1AAgZg0QgOgdgBgXIgKAHIgpAOIAKAJQAaAXAAAkQAAAKgDAJQAKAFAIAHQAZAVAAAlQAAAXgPAYQgRAZgbAFQgEAKgFAKQgHAMgKAIIAAABQAAATgKATQAQAGANAMQAaAYAAAkQAAAZgRAYQgYAfgnAAQgxAAgVglgABlCZQgGgRABgWIABgVQAAg5AbggQAYgbAiACQAiABAZAcQAaAiAAA3QAAAogKAYQgUAvg5AAQg/AAgQg3gAj7hBQgPgYAAgVQAAgnAagWQAZgUAiABQAiABAYAVQAbAXAAAmQAAAagSAYQgWAggoAAQgzAAgYgog");
	var mask_graphics_321 = new cjs.Graphics().p("AASGJQgGgRAAgmQAAg0AagdQAXgaAiADQAhACAXAdQAaAfAAAzQAAAYgQAcQgYAqgtAAQg5AAgRgwgAhYDWQgNgWAAgXQAAgWAHgRQgWgJgMgWIgDgFIAAAEQAAAagSAZQgWAggoAAQgwAAgWgoQgPgZAAgUQAAgnAagWQAXgUAhABQAiAAAXAVQAKAJAGALIAAgBQAAglAZgUIAFgEIAAgHQAAgoAZgXQAIgIAJgEQgLgJgIgNQgNgWAAgXQAAgQADgNQgpgCgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DfhCAAQg1AAgZg0QgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAkQAAAJgDAKQAKAEAIAHQAZAWAAAkQAAAYgPAXQgRAYgbAGQgEALgFAKQgHAMgKAIIAAAAQAAAUgKATQAQAGANAMQAaAYAAAkQAAAZgRAXQgYAggnAAQgxAAgVglgABlCmQgGgSABgWIABgUQAAg5AbggQAYgbAiABQAiABAZAdQAaAhAAA3QAAApgKAXQgUAwg5AAQg/AAgQg3gAj7g0QgPgYAAgVQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAagSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_322 = new cjs.Graphics().p("AhYE1QgNgWAAgXQAAgWAHgRQgWgJgMgWIgDgFIAAAEQAAAagSAZQgWAggoAAQgwAAgWgoQgPgZAAgUQAAgnAagWQAXgUAhABQAiAAAXAVQAKAJAGALIAAgBQAAglAZgWIAFgEIAAgHQAAgoAZgXQAIgIAJgEQgLgHgIgNQgNgWAAgXQAAgQADgNQgpgCgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DfhCAAQg1AAgZg0QgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAkQAAAJgDAKQAKAEAIAHQAZAWAAAiQAAAYgPAXQgRAagbAGQgEALgFAKQgHAMgKAIIAAAAQAAAUgKATQAQAGANAMQAaAYAAAkQAAAZgRAXQgYAggnAAQgxAAgVglgABlEFQgGgSABgWIABgUQAAg5AbggQAYgdAiABQAiABAZAfQAaAhAAA3QAAApgKAXQgUAwg5AAQg/AAgQg3gAj7ApQgPgYAAgTQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAYgSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_323 = new cjs.Graphics().p("AhnE1QgNgWAAgXQAAgWAHgRQgWgJgMgWQgNgWAAgVQAAglAZgWIAFgEIAAgHQAAgoAZgXQAIgIAJgEQgLgHgIgNQgNgWAAgXQAAgQADgNQgpgCgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DfhCAAQg1AAgZg0QgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAkQAAAJgDAKQAKAEAIAHQAZAWAAAiQAAAYgPAXQgRAagbAGQgEALgFAKQgHAMgKAIIAAAAQAAAUgIATQAOAGANAMQAaAYAAAkQAAAZgRAXQgYAggnAAQgxAAgVglgABWEFQgGgSABgWIABgUQAAg5AbggQAYgdAiABQAiABAZAfQAaAhAAA3QAAApgKAXQgUAwg5AAQg/AAgQg3gAkKApQgPgYAAgTQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAYgSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_324 = new cjs.Graphics().p("AhnE1QgNgWAAgXQAAgWAHgRQgWgJgMgWQgNgWAAgVQAAglAZgWIAFgEIAAgHQAAgoAZgXQAIgIAJgEQgLgHgIgNQgNgWAAgXQAAgQADgNQgpgCgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DfhCAAQg1AAgZg0QgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAkQAAAJgDAKQAKAEAIAHQAZAWAAAiQAAAYgPAXQgRAagbAGQgEALgFAKQgHAMgKAIIAAAAQAAAUgIATQAOAGANAMQAaAYAAAkQAAAZgRAXQgYAggnAAQgxAAgVglgAkKApQgPgYAAgTQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAYgSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_325 = new cjs.Graphics().p("AiPD7QgNgWAAgVQAAglAZgVIAFgFIAAgHQAAgoAZgXQAIgHAJgFQgLgIgIgOQgNgVAAgVQAAgQADgNQgpgCgUgjQgMgWAAgWQAAgzAtgmQAngiA7gKQA4gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DchCAAQg1AAgZgyQgOgdgBgXIgKAHIgpAOIAKAJQAaAXAAAkQAAAIgDAJQAKAFAIAHQAZAVAAAlQAAAXgPAYQgRAZgbAHQgEAKgFAKQgHAMgKAIIAAABQAAAYgNAXQgVAigsAAQguAAgVglgAkKBiQgPgYAAgVQAAgnAagUQAZgUAiABQAiABAYAVQAbAVAAAmQAAAagSAYQgWAggoAAQgzAAgYgog");
	var mask_graphics_326 = new cjs.Graphics().p("AhzDYQgLgVAAgYQAAgoAZgXQAIgIAJgEQgLgJgIgNQgNgWAAgXQAAgQADgNQgpAAgUgiQgMgWAAgXQAAgyAtgmQAngiA7gKQA4gLAoAUQAbAOAKAYIAGgKQAfguAtgWQAtgWAeAQQAjARAAA4Qg9DdhCAAQg1AAgZgyQgOgdgBgYIgKAIIgpAOIAKAIQAaAYAAAiQAAAJgDAKQAKAEAIAHQAZAWAAAkQAAAYgPAXQgRAagbAGQgEALgFAKQgUAlgtAAQgyAAgTgogAkKCDQgPgYAAgVQAAgnAagWQAZgUAiABQAiAAAYAVQAbAXAAAmQAAAagSAZQgWAggoAAQgzAAgYgog");
	var mask_graphics_327 = new cjs.Graphics().p("AkKCtQgPgYAAgVQAAgnAagWQAZgUAiABQAiABAYAVQAbAXAAAmQAAAagSAYQgWAggoAAQgzAAgYgogAhnB0QgNgVAAgXQAAgQADgNQgpgCgUgjQgMgUAAgWQAAgzAtgmQAngiA7gKQA4gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DchCAAQg1AAgZg0QgOgdgBgVIgKAHIgpAMIAKAJQAaAXAAAkQAAAZgRAXQgYAggnAAQgxAAgVglg");
	var mask_graphics_328 = new cjs.Graphics().p("AkKCtQgPgYAAgVQAAgnAagWQAZgUAiABQAiABAYAVQAbAXAAAmQAAAagSAYQgWAggoAAQgzAAgYgogABNAkQgOgdgBgVIgKAHIhNAZQhOAZgDAAQguAAgWglQgMgUAAgWQAAgzAtgmQAngiA7gKQA4gKAoAUQAbANAKAZIAGgKQAfgvAtgWQAtgVAeAPQAjARAAA5Qg9DchCAAQg1AAgZg0g");
	var mask_graphics_329 = new cjs.Graphics().p("AAeBjQgOgdgCgYIgJAIIhOAaQhOAagDAAQguAAgVglQgNgWAAgXQAAgwAtgmQAogiA6gKQA6gLAmAUQAbAOALAYIAGgKQAfguAsgWQAtgWAfAQQAjARAAA4Qg+DdhCAAQg0AAgZg0g");
	var mask_graphics_330 = new cjs.Graphics().p("AhdBjQgQgfAAgZQABg7Aig1QAfguArgWQAsgWAfAQQAjARAAA4Qg+DdhAAAQg0AAgZg0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(255).to({graphics:mask_graphics_255,x:25.5,y:56.4}).wait(1).to({graphics:mask_graphics_256,x:13,y:56.4}).wait(1).to({graphics:mask_graphics_257,x:8.3,y:62.6}).wait(1).to({graphics:mask_graphics_258,x:8.3,y:62.6}).wait(1).to({graphics:mask_graphics_259,x:8.3,y:66.9}).wait(1).to({graphics:mask_graphics_260,x:8.3,y:70.1}).wait(1).to({graphics:mask_graphics_261,x:8.3,y:75.9}).wait(1).to({graphics:mask_graphics_262,x:8.3,y:75.9}).wait(1).to({graphics:mask_graphics_263,x:6.8,y:75.9}).wait(1).to({graphics:mask_graphics_264,x:6.8,y:85.4}).wait(1).to({graphics:mask_graphics_265,x:6.8,y:86.6}).wait(1).to({graphics:mask_graphics_266,x:-1.7,y:86.6}).wait(53).to({graphics:mask_graphics_319,x:-1.7,y:86.6}).wait(1).to({graphics:mask_graphics_320,x:6.8,y:86.6}).wait(1).to({graphics:mask_graphics_321,x:6.8,y:85.4}).wait(1).to({graphics:mask_graphics_322,x:6.8,y:75.9}).wait(1).to({graphics:mask_graphics_323,x:8.3,y:75.9}).wait(1).to({graphics:mask_graphics_324,x:8.3,y:75.9}).wait(1).to({graphics:mask_graphics_325,x:8.3,y:70.1}).wait(1).to({graphics:mask_graphics_326,x:8.3,y:66.9}).wait(1).to({graphics:mask_graphics_327,x:8.3,y:62.6}).wait(1).to({graphics:mask_graphics_328,x:8.3,y:62.6}).wait(1).to({graphics:mask_graphics_329,x:13,y:56.4}).wait(1).to({graphics:mask_graphics_330,x:25.5,y:56.4}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// img
	this.instance_4 = new lib.img9_1();
	this.instance_4.setTransform(-3,86.5);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(255).to({_off:false},0).to({_off:true},76).wait(56));

	// img
	this.instance_5 = new lib.img11_1();
	this.instance_5.setTransform(-144.5,303.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(244).to({_off:false},0).to({x:-71.5,y:263.5},11,cjs.Ease.get(1)).wait(76).to({x:-153.6,y:307.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(45));

	// img
	this.instance_6 = new lib.img8_1();
	this.instance_6.setTransform(240,174);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(244).to({_off:false},0).to({x:87},11,cjs.Ease.get(1)).wait(76).to({x:190},10,cjs.Ease.get(-1)).to({_off:true},1).wait(45));

	// img
	this.instance_7 = new lib.img10_1();
	this.instance_7.setTransform(-274,183);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(244).to({_off:false},0).to({x:-65.6},11,cjs.Ease.get(1)).wait(76).to({x:-275},10,cjs.Ease.get(-1)).to({_off:true},1).wait(45));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_124 = new cjs.Graphics().p("AjQDVQhWgwBDicQBDiZAmgwQAlgvBPAHQBOAIBKA7QBKA6AaBLQAbBKgmAwQglAwihA9QhYAjhDAAQg0AAgmgVg");
	var mask_1_graphics_125 = new cjs.Graphics().p("Aj/EtQhhgdB2j1QB1jzAlgwQAmgvBNAHQBPAIBLA7QBKA6AaBLQAaBMglAuQgmAwjICDQijBthfAAQgUAAgRgFg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AlhBaQgKhJBsiuQBtivBPgeQBOgdBPAHQBPAIBLA7QBKA6AaBLQAaBMglAwQgmAwjYDEQjXDGhoAEIgCAAQhcAAgTkog");
	var mask_1_graphics_127 = new cjs.Graphics().p("AlVgGQgKhJBtiwQBsivBQgeQBNgdBPAHQBQAIBKA7QBKA6AaBLQAbBMgmAwQglAwj5EXQj3EahuAfQgGACgGAAQheAAA/nqg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AmsAxQCMjeBsivQBsiwBOgdQBQgeBPAIQBPAIBLA6QBKA7AaBLQAaBMglAvIk6GQQghAqgKCJQgXB7hrBQQg3ApiKAHIgEAAQiHAAgRoRg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AnZBUQDml5BsivQBsiwBOgdQBQgeBPAIQBPAIBLA6QBKA7AaBLQAaBMglAvIk6GQQghAqgKCJQAjD3iDBnQiFBniUAkQgIACgHAAQiHAAgqpmg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AmTAdQDnl5BsivQBqivBQgeQBQgdBOAHQBQAIBKA7QBKA6AaBLQAbBMgmAwIk5GRQghAogKCKQDqFXiKBlQiJBlmrAzQgbADgYAAQlmABEzrUg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AlANbQmig0FVt7QDml7BtivQBqiwBQgdQBPgeBPAIQBQAIBKA6QBKA7AaBLQAbBMgmAvIk6GSQggApgKCIQDpFXibEKQiCDek3AAQg9AAhFgJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(124).to({graphics:mask_1_graphics_124,x:13.8,y:63.2}).wait(1).to({graphics:mask_1_graphics_125,x:9.5,y:70.4}).wait(1).to({graphics:mask_1_graphics_126,x:4,y:78.4}).wait(1).to({graphics:mask_1_graphics_127,x:2.8,y:88.2}).wait(1).to({graphics:mask_1_graphics_128,x:-3.5,y:97.6}).wait(1).to({graphics:mask_1_graphics_129,x:-8,y:109.6}).wait(1).to({graphics:mask_1_graphics_130,x:-15,y:115}).wait(1).to({graphics:mask_1_graphics_131,x:-15.6,y:126.6}).wait(93).to({graphics:null,x:0,y:0}).wait(163));

	// kefir
	this.instance_8 = new lib.kefir_1();
	this.instance_8.setTransform(6.5,69.9,1,1.216,0,0,0,34,-53);
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124).to({_off:false},0).wait(11).to({scaleY:1},20).wait(58).to({regX:0,regY:0,x:-27.5,y:122.9},0).to({alpha:0},10).to({_off:true},1).wait(163));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_128 = new cjs.Graphics().p("AkIGXQiqgahyg0QkHh3g4iXQhCiwEJiaQDviLD6gQQBPgFBGAIIA0AJQBxAFCKAVQETAqB/BVQCvB1AaB+QAgCYjLCKQjVCQmaAMIg6ABQiTAAiNgWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_2_graphics_128,x:-50.3,y:165.5}).wait(96).to({graphics:null,x:0,y:0}).wait(163));

	// img
	this.instance_9 = new lib.img6_3_1();
	this.instance_9.setTransform(-49.5,253.2);
	this.instance_9._off = true;

	this.instance_9.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(128).to({_off:false},0).to({y:195.5},13).to({y:170.2},14).wait(69).to({x:-349.5},9,cjs.Ease.get(-1)).to({_off:true},1).wait(153));

	// img
	this.instance_10 = new lib.img6_4_1();
	this.instance_10.setTransform(-49.5,253.5);
	this.instance_10._off = true;

	this.instance_10.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(128).to({_off:false},0).to({y:195.5},13).to({y:170.2},14).wait(69).to({x:-349.5},9,cjs.Ease.get(-1)).to({_off:true},1).wait(153));

	// img
	this.instance_11 = new lib.ovoshi();
	this.instance_11.setTransform(-339.3,215.8);
	this.instance_11._off = true;

	this.instance_11.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(113).to({_off:false},0).to({x:-48.3},10,cjs.Ease.get(1)).to({_off:true},32).wait(232));

	// img
	this.instance_12 = new lib.img6_1_1();
	this.instance_12.setTransform(-290,210.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(113).to({_off:false},0).to({x:1},10,cjs.Ease.get(1)).wait(101).to({x:-299},9,cjs.Ease.get(-1)).to({_off:true},1).wait(153));

	// img
	this.instance_13 = new lib.img5_1();
	this.instance_13.setTransform(212,178);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(113).to({_off:false},0).to({x:97},10,cjs.Ease.get(1)).wait(101).to({x:212},9,cjs.Ease.get(-1)).to({_off:true},1).wait(153));

	// t2
	this.instance_14 = new lib.t2();
	this.instance_14.setTransform(0,-222);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(146).to({_off:false},0).to({alpha:1},10).wait(11).to({scaleX:1.1,scaleY:1.1,y:-223.4},5).wait(10).to({scaleX:1,scaleY:1,y:-222},5).wait(26).to({alpha:0},10).to({_off:true},1).wait(163));

	// t1
	this.instance_15 = new lib.t1();
	this.instance_15.setTransform(0,-222);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(33).to({_off:false},0).to({alpha:1},10).wait(9).to({scaleX:1.1,scaleY:1.1,y:-223.4},5).wait(10).to({scaleX:1,scaleY:1,y:-222},5).wait(10).to({alpha:0},10).to({_off:true},1).wait(294));

	// bubble1
	this.instance_16 = new lib.bubble1();
	this.instance_16.setTransform(6,-113.1,0.017,0.031,0,0,0,6,81.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.05,scaleY:0.06,x:5.7,y:-118.7},0).wait(1).to({scaleX:0.15,scaleY:0.16,x:5.1,y:-127.9},0).wait(1).to({scaleX:0.31,scaleY:0.32,x:4.2,y:-142.5},0).wait(1).to({scaleX:0.5,scaleY:0.51,x:3,y:-160.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:1.8,y:-179.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:0.8,y:-194.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:0.2,y:-204.1},0).wait(1).to({regX:6,regY:81.5,scaleX:1,scaleY:1,x:6,y:-125.9},0).wait(19).to({scaleX:1.1,scaleY:1.1,x:6.6,y:-117.7},5).wait(10).to({scaleX:1,scaleY:1,x:6,y:-125.9},5).wait(95).to({scaleX:1.1,scaleY:1.1,x:6.6,y:-117.7},5).wait(10).to({scaleX:1,scaleY:1,x:6,y:-125.9},5).wait(26).to({alpha:0},10).to({_off:true},1).wait(163));

	// img
	this.instance_17 = new lib.img3_1();
	this.instance_17.setTransform(-279,226);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15).to({_off:false},0).to({x:-75},10,cjs.Ease.get(1)).wait(67).to({x:-279},15,cjs.Ease.get(-1)).to({_off:true},1).wait(279));

	// img
	this.instance_18 = new lib.img2_1();
	this.instance_18.setTransform(209,200);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(15).to({_off:false},0).to({x:99},10,cjs.Ease.get(1)).wait(67).to({x:209},15,cjs.Ease.get(-1)).to({_off:true},1).wait(279));

	// stol
	this.instance_19 = new lib.stol();

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(387));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgXbgjEMAu2AAAMAAGBEgI3hA0I3gA1g");
	mask_3.setTransform(0.1,-75.4);

	// kot
	this.instance_20 = new lib.kot();
	this.instance_20.setTransform(-87.5,34.1);

	this.instance_20.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(331).to({x:-378.5},10,cjs.Ease.get(-1)).wait(46));

	// img
	this.instance_21 = new lib.img1_1();
	this.instance_21.setTransform(-37.4,14.9,1,1,97,0,0,-119.4,-6.8);

	this.instance_22 = new lib.img4_1();
	this.instance_22.setTransform(-37.4,14.8,1,1,96.8,0,0,-118.2,-23.3);
	this.instance_22._off = true;

	this.instance_23 = new lib.img7_1();
	this.instance_23.setTransform(-37.4,14.8,1,1,96.5,0,0,-114.5,-5.7);
	this.instance_23._off = true;

	this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:-119.5,regY:-6.7,rotation:0,x:-37.5,y:14.8},15).wait(77).to({regX:-119.4,regY:-6.8,rotation:97,x:-37.4,y:14.9},15).to({_off:true},1).wait(279));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(108).to({_off:false},0).to({rotation:0,x:-37.5},15).wait(101).to({rotation:96.8,x:-37.4},15).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(240).to({_off:false},0).to({rotation:0,x:-37.5},15).wait(76).to({x:-328.5},10,cjs.Ease.get(-1)).wait(46));

	// hand
	this.instance_24 = new lib.hand1();
	this.instance_24.setTransform(-37.5,14.8,1,1,97,0,0,-91,-19.1);

	this.instance_25 = new lib.hand2();
	this.instance_25.setTransform(-37.5,14.8,1,1,97,0,0,-91,-19.1);
	this.instance_25._off = true;

	this.instance_24.mask = this.instance_25.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({rotation:0,x:-37.4,y:14.9},15).wait(77).to({rotation:97,x:-37.5,y:14.8},15).to({_off:true},1).wait(132).to({_off:false},0).to({rotation:0,x:-37.4,y:14.9},15).wait(76).to({x:-328.4},10,cjs.Ease.get(-1)).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(108).to({_off:false},0).to({rotation:0,x:-37.4,y:14.9},15).wait(101).to({rotation:97,x:-37.5,y:14.8},15).to({_off:true},1).wait(147));

	// moooo
	this.instance_26 = new lib.moooo_1();
	this.instance_26.setTransform(-70.5,-20);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(108).to({_off:false},0).to({x:216},105).to({_off:true},1).wait(173));

	// bgImg
	this.instance_27 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(387));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-300,300.5,601);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(116,299,335,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;