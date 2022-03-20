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
		{src:"images/boxes.png", id:"boxes"},
		{src:"images/cup.png", id:"cup"},
		{src:"images/par.png", id:"par"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.boxes = function() {
	this.initialize(img.boxes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,255);


(lib.cup = function() {
	this.initialize(img.cup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,118);


(lib.par = function() {
	this.initialize(img.par);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.urText = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC74C").s().p("AhCAbIAAgLIgfAAIAAALIgDAAIAAgOIAEAAQAFgJAAgNIAAgQIAXAAIAAAmIAFAAIAAAOgAhYgHQAAALgFAJIAWAAIAAgjIgRAAgAEGALQgEgEAAgLIAAgDQAAgKAEgEQAEgEAGgBQAHABAEAEQAEAEAAAJIAAAEQAAALgEAEQgEAFgHAAQgGAAgEgFgAEIgTQgDADAAAMIAAACQAAAJADADQADADAFAAQAFAAAEgDQADgEAAgIIAAgDQAAgLgDgDQgEgEgFAAQgFAAgDAEgAi3ADIAEAAQABAKAKAAQAKAAAAgJQAAgHgJABIgGAAIAAgEIAGAAQAJAAAAgIQAAgJgKAAQgJAAgCAKIgDAAQABgNANAAQAGAAADADQAEAEAAAFQAAAHgHACQAIAEAAAFQAAAFgEAEQgEADgGAAQgMAAgDgNgAl4ALQgEgDAAgMIAAgDQAAgKAEgEQAEgEAGgBQAHABAEAEQAEADAAAKIAAAEQAAAMgEADQgEAFgHAAQgGAAgEgFgAl2gTQgDAEAAALIAAACQAAAIADAEQADADAFAAQAFAAADgDQAEgEAAgIIAAgDQAAgLgEgDQgDgEgFAAQgFAAgDAEgAGiAQIAAgSIgWAAIAAASIgDAAIAAgpIADAAIAAAUIAWAAIAAgUIAEAAIAAApgAF4AQIgEgKIgUAAIgDAKIgEAAIAQgpIADAAIAPApgAFzACIgJgWIgJAWIASAAgAExAQIAAgpIAPAAQANAAAAALQAAAFgEADIgDACIAEACQADACAAAEQAAAMgMAAgAE0ANIAMAAQAKAAAAgJQAAgHgKABIgMAAgAE0gGIAMAAQAJAAAAgIQAAgIgJAAIgMAAgADYAQIAAgpIAPAAQANAAAAAMQAAAMgNABIgMAAIAAAQgADbgEIAMAAQAKAAAAgJQAAgJgKAAIgMAAgADBAQIAAgjIgXAjIgEAAIAAgpIAEAAIAAAjIAXgjIADAAIAAApgAB7AQIAAgpIAPAAQANAAAAAMQAAAMgNABIgMAAIAAAQgAB+gEIAMAAQAKAAAAgJQAAgJgKAAIgMAAgABqAQIgEgKIgUAAIgEAKIgDAAIAQgpIACAAIAQApgABlACIgJgWIgJAWIASAAgAA6AQIAAgmIgRAAIAAAPQAAAXgMAAIgCAAIAAgDIACAAQAJAAAAgVIAAgRIAXAAIAAApgAARAQIgUgVIASgUIAEAAIgTAUIAVAVgAgGAQIAAgpIADAAIAAAUIAAAVgAgwAQIAAgpIAaAAIAAADIgXAAIAAARIATAAIAAADIgTAAIAAAPIAXAAIAAADgAhwAQIgEgKIgTAAIgEAKIgEAAIAQgpIADAAIAQApgAh1ACIgJgWIgIAWIARAAgAj1AQIAAgpIAPAAQANAAAAAMQAAAMgNABIgMAAIAAAQgAjygEIAMAAQAKAAAAgJQAAgJgKAAIgMAAgAkGAQIgEgKIgUAAIgEAKIgDAAIAQgpIADAAIAPApgAkLACIgJgWIgJAWIASAAgAlOAQIAAgpIAQAAQANAAAAALQAAAEgEAEIgDACIAEACQADACAAAEQAAAMgMAAgAlKANIAMAAQAKAAAAgJQAAgHgKABIgMAAgAlKgGIAMAAQAJAAAAgIQAAgIgJAAIgMAAgAmYAQIAAgmIgNAAIAAgDIAdAAIAAADIgNAAIAAAmg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.2,-2.7,84.5,5.4);


(lib.t5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADFA8QgKgKgDgQQgCgKAAgSIAAgLQAAgWADgMQADgLAJgJQAQgRAZAAQAZAAAQARQAQAPAAAjIAAAOQAAAUgCAKQgEAPgKAKQgPARgaAAQgZAAgQgRgADbgqQgHAIAAAiIAAAFQAAAeAHAHQAIAJALAAQAMAAAHgJQAFgFABgJQACgIAAgVQAAgTgCgIQgBgIgFgGQgHgHgMgBQgMABgHAHgAtYA8QgKgKgDgQQgCgKAAgSIAAgLQAAgWADgMQADgLAJgJQAQgRAZAAQAZAAAQARQAQAPAAAjIAAAOQAAAUgCAKQgEAPgKAKQgPARgaAAQgZAAgQgRgAtCgqQgHAIAAAiIAAAFQAAAeAHAHQAIAJALAAQAMAAAHgJQAFgFABgJQACgIAAgVQAAgTgCgIQgBgIgFgGQgHgHgMgBQgMABgHAHgAPMBMIAAhgIg7BgIgbAAIAAiWIAeAAIAABfIA7hfIAbAAIAACWgAM8BMIAAhgIg8BgIgaAAIAAiWIAeAAIAABfIA7hfIAaAAIAACWgAJzBMIAAiWIBfAAIAAAaIhCAAIAAB8gAJCBMIgJgbIg2AAIgJAbIgfAAIA3iWIAXAAIA4CWgAIxAYIgSg1IgUA1IAmAAgAGsBMIAAhXIgdA3IgVAAIgdg3IAABXIgeAAIAAiWIAeAAIAnBQIAohQIAdAAIAACWgAA3BMIAAiWIA7AAQAWAAAOANQAOANAAAVQAAAVgOALQgOANgWAAIgdAAIAAA6gABVgHIAcAAQAKABAGgGQAGgFAAgKQAAgJgGgHQgGgFgKAAIgcAAgAAHBMIgHgbIg2AAIgJAbIgfAAIA3iWIAXAAIA2CWgAgIAYIgTg1IgTA1IAmAAgAkBBMIAAiWIBlAAIAAAaIhHAAIAAAkIA8AAIAAAYIg8AAIAAAlIBHAAIAAAbgAnOBMIAAiWIAeAAIAAB7IArAAIAAh7IAeAAIAAB7IArAAIAAh7IAeAAIAACWgApPBMIAAiWIAeAAIAAA4IAeAAQAWAAAOAOQANALAAAVQAAAVgNANQgOAOgWAAgAoxAxIAbAAQAKAAAGgGQAGgGAAgJQAAgJgGgGQgGgGgKAAIgbAAgAqKBMIAAh8IgkAAIAAAsQAAAsgMATQgLAQgZABIgLAAIAAgbIAEAAQANAAAGgLQAHgNAAgfIAAhEIBfAAIAACWgAvpBMIAAiWIBlAAIAAAaIhHAAIAAAeIAfAAQAXAAANAOQANALAAAVQAAAVgNANQgNAOgXAAgAvLAxIAeAAQAJAAAGgGQAGgGAAgJQAAgJgGgGQgGgGgJAAIgeAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.2,-7.7,200.5,15.5);


(lib.t3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AL0BFQgLgLgDgPQgDgPAAgcQAAgbADgPQADgPALgLQATgTAbAAQAaAAARAOQARAPAEAaIgiAAQgGgZgXAAQgOAAgHAJQgGAGgCAJQgBAJAAAYQAAAZABAJQACAJAGAFQAHAJAOAAQAYAAAFgYIAiAAQgEAagRAPQgRAOgaAAQgbAAgTgTgAB+BFQgLgMgEgSQgCgLAAgcQAAgbACgLQAEgSALgMQAUgTAbAAQAcAAATATQAMAMADASQACALAAAbQAAAbgCAMQgDASgMAMQgTATgcAAQgbAAgUgTgACYgvQgFAFgCAJQgCAKAAAXQAAAYACAKQACAIAFAGQAHAJAOAAQAOAAAIgJQAFgGABgIQADgKAAgYQAAgXgDgKQgBgJgFgFQgIgKgOAAQgNAAgIAKgAkjBBIAWgWQAPAOAbAAQAeAAABgVQgBgKgFgFQgEgEgLgCIgVgDQgWgDgLgJQgNgMAAgWQAAgYAQgOQARgPAbAAQAjAAAVAUIgVAWQgMgMgXAAQgOAAgGAGQgIAGABAKQAAAHAEAFQAGAFAKACIAVADQAWADALAKQAOALAAAYQgBAZgSAOQgRAOgcAAQgpAAgXgXgAo9BFQgLgMgDgSQgDgLAAgcQAAgbADgLQACgSAMgMQAUgTAbAAQAbAAAVATQAMAMACASQACALABAbQgBAcgCALQgCASgMAMQgVATgbAAQgbAAgUgTgAokgvQgEAFgCAJQgBAKgBAXQABAYABAKQACAJAEAFQAJAJANAAQAOAAAIgJQAGgFABgJQABgKABgYQgBgXgBgKQgBgJgGgFQgIgKgOAAQgNAAgJAKgArQBFQgMgLgDgPQgDgPAAgcQAAgbADgPQADgPAMgLQASgTAcAAQAZAAASAOQAQAPAFAaIgjAAQgFgZgXAAQgOAAgIAJQgGAGgBAJQgCAJAAAYQAAAZACAJQABAJAGAFQAIAJAOAAQAXAAAFgYIAjAAQgFAagRAPQgRAOgZAAQgcAAgSgTgAv4BGIAXgWQAKAJAMAAQAbAAAAgdIAAhxIAjAAIAAByQAAAcgTAQQgRAPgaAAQgbAAgSgSgAPWBWIAAhIIg6AAIAABIIgiAAIAAirIAiAAIAABHIA6AAIAAhHIAiAAIAACrgAKsBWIgihFIgYAAIAABFIgiAAIAAirIBDAAQAaAAAQAPQAPAPAAAXQAAARgJAMQgJAJgOAFIAnBLgAJygJIAfAAQAMAAAGgHQAHgGAAgKQAAgKgHgHQgGgGgMAAIgfAAgAIZBWIgKgfIg+AAIgLAfIgjAAIA/irIAbAAIA/CrgAIGAbIgWg9IgWA9IAsAAgAFwBWIhEhoIAABoIgiAAIAAirIAeAAIBFBoIAAhoIAiAAIAACrgAAuBWIAAhjIggBAIgWAAIghhAIAABjIgiAAIAAirIAhAAIAsBbIAthbIAhAAIAACrgAmwBWIAAirIBFAAQAaAAAOANQANANAAAWQABAOgIAKQgGAJgIADQAYAKAAAbQAAAYgPANQgOANgYAAgAmPA4IAjAAQAXAAAAgWQAAgJgGgGQgFgGgMAAIgjAAgAmPgPIAhAAQALAAAGgGQAGgFAAgJQAAgJgGgGQgGgFgLAAIghAAgAsOBWIgJgfIg/AAIgKAfIgjAAIA/irIAbAAIA/CrgAsgAbIgWg9IgWA9IAsAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.7,-8.8,203.4,17.7);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHVBaQgRgSAAgsIAAgOQAAgYADgOQAEgNAKgJQATgUAcABQAdgBASAUQARARAAAlIAAATQAAAWgCAMQgEARgLAMQgSATgdAAQgcAAgTgTgAHugaQgIAJAAAjIAAAJQAAAiAIAJQAJAIANABQAOgBAIgIQAFgHACgJQABgKAAgbQAAgTgBgJQgCgKgFgFQgJgJgNAAQgOAAgIAJgAmPBaQgRgSAAgsIAAgOQAAgYAEgOQADgNAKgJQATgUAcABQAdgBASAUQARARAAAlIAAATQAAAWgCAMQgDARgMAMQgSATgdAAQgcAAgTgTgAl2gaQgIAJAAAjIAAAJIABAZQACAMAFAGQAKAIAMABQAOgBAIgIQAGgHABgJQACgKAAgbQAAgTgCgJQgCgKgFgFQgIgJgOAAQgNAAgJAJgArJBaQgLgMgEgSQgCgMAAgUIAAgOQAAgYAEgOQADgNAKgJQATgUAcABQAdgBASAUQARARAAAlIAAATQAAAWgCAMQgEARgLAMQgSATgdAAQgcAAgTgTgAqwgaQgIAJAAAjIAAAJQAAAiAIAJQAKAIAMABQAOgBAIgIQAFgHACgJQABgKAAgbQAAgTgBgJQgCgKgFgFQgIgJgOAAQgNAAgJAJgAKhBsIAAgUQglgCgSgTQgQgSAAgjQAAhABHgFIAAgRIAiAAIAAARQBHAFAABAQAAAjgQASQgSATglACIAAAUgALDA8QAUgBAJgMQAJgKAAgVQAAgVgJgKQgJgKgUgBgAKEgPQgIAKAAAVQAAAVAIAKQAKAMAUABIAAhWQgVABgJAKgAMjBsIAAisIByAAIAAAeIhRAAIAAAnIBFAAIAAAeIhFAAIAAAqIBRAAIAAAfgAGYBsIg9hbIAABbIgiAAIAAisIAiAAIAABRIA4hRIApAAIg6BQIBABcgAC2BsIAAhuIhDBuIgfAAIAAisIAiAAIAABtIBEhtIAeAAIAACsgAARBsIAAisIAiAAIAACsgAh8BsIAAisIAiAAIAABAIAiAAQAZAAAQAPQAPAOAAAZQAAAYgPAOQgQAPgZABgAhaBNIAfAAQAMAAAHgGQAGgHAAgKQAAgMgGgGQgHgHgMAAIgfAAgAjiBsIAAiOIgtAAIAAgeIB8AAIAAAeIgtAAIAACOgAneBsIAAiOIgpAAIAAAxQAAA0gOAWQgMASgcABIgOAAIAAgfIAFAAQAPAAAGgMQAJgOAAgnIAAhMIBsAAIAACsgAsYBsIAAhlIghBBIgXAAIgihBIAABlIgiAAIAAisIAiAAIAtBbIAthbIAiAAIAACsgAB8hRQgNgJAAgSIAYAAQABAPAOAAQAPAAABgPIAYAAQgCAjgmAAQgQAAgKgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.7,-10.9,183.5,21.9);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnBEUQgNgNgEgSQgDgOAAgmQAAglADgPQAEgRANgOQAVgUAeAAQAeAAAUAUQAOAOADARQADAPABAlQgBAmgDAOQgDASgOANQgUAUgeAAQgfAAgUgUgAmxB8QgJAJgDAPQgCAMAAAhQAAAiACALQADAPAJAJQAPAPAUAAQAVAAAOgPQAJgJADgPQACgMAAghQAAghgCgMQgDgPgJgJQgOgOgVAAQgUAAgPAOgAJmEmIAAgYIAZAAIAAAYgAHCEmIAAgTIANAAQAKAAAGgFQAGgEAFgLIAIgTIhDiQIAXAAIA3B4IAwh4IAYAAIhJCrQgOAfgaAAgAGFEmIhdhpIBXhhIAbAAIhYBgIBgBqgAETEmIAAjKIAVAAIAABhIAABpgADMEmIAAhcIhhAAIAABcIgVAAIAAjKIAVAAIAABbIBhAAIAAhbIAVAAIAADKgAAQEmIAAilIhkClIgVAAIAAjKIAWAAIAAClIBkilIAUAAIAADKgAkdEmIAAjKIBMAAQAbAAARAPQAPAOAAAYQAAAWgOAOQgFAEgKAFQALAFAHAGQAPAPAAAXQAAAagQAOQgQAPgcAAgAkHETIA3AAQASAAALgKQALgKAAgRQAAgRgLgKQgLgKgSAAIg3AAgAkHC2IA1AAQASAAALgKQAKgJAAgRQAAgQgKgJQgLgKgSAAIg1AAgAoVEmIAAhcIhgAAIAABcIgVAAIAAjKIAVAAIAABbIBgAAIAAhbIAVAAIAADKgAJqDtIgDiRIAYAAIgDCRgAqCg+QgOgOgDgRQgEgPAAglQAAgmAEgOQADgSAOgNQAUgUAeAAQAcAAASAQQAUAQAEAcIgVAAQgFgTgMgLQgNgLgTAAQgUAAgPAPQgIAJgEAPQgBALAAAiQAAAhABAMQAEAPAIAJQAPAOAUAAQATAAANgLQANgLAEgTIAVAAQgEAdgUAQQgSAPgcAAQgeAAgUgTgALIgsIAAjKIB9AAIAAATIhnAAIAABHIBYAAIAAAUIhYAAIAABIIBnAAIAAAUgAJXgsIAAi3Ig7AAIAAgTICLAAIAAATIg7AAIAAC3gAHlgsIAAilIhmClIgVAAIAAjKIAWAAIAACkIBmikIAUAAIAADKgAEzgsIgPguIhZAAIgQAuIgXAAIBLjKIASAAIBKDKgAEdhtIglhqIgnBqIBMAAgABwgsIAAhTQgmAIgUAAQgXAAgOgLQgRgNAAgbIAAhMIAWAAIAABIQAAAkAmAAQATAAAhgIIAAhkIAVAAIAADKgAicgsIAAjKIB+AAIAAATIhpAAIAABHIBZAAIAAAUIhZAAIAABIIBpAAIAAAUgAlJgsIAAjKIBMAAQAbAAASAQQARAQAAAbQAAAbgRARQgSAQgbAAIg2AAIAABTgAkziTIA0AAQATAAAMgKQALgKAAgUQAAgTgLgLQgMgKgTAAIg0AAgAm6gsIAAi3Ig7AAIAAgTICLAAIAAATIg7AAIAAC3gAtFgsIAAjKIBMAAQAcAAAQAOQAQAPAAAYQAAAVgPAPQgGAFgIAEQALAFAGAGQAPAPAAAWQAAAagPAPQgRAPgcAAgAsvhAIA3AAQASAAAMgKQALgKgBgRQABgRgLgKQgMgKgSAAIg3AAgAsvidIA1AAQATAAAKgJQALgJAAgRQAAgQgLgKQgLgJgSAAIg1AAgAGJknIASAAQABAVAWAAQAWAAABgVIASAAQgBAkgoAAQgnAAgCgkg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.8,-29.6,167.6,59.3);


(lib.par_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.par();
	this.instance.setTransform(-45,-48);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-48,90,96);


(lib.ClipGroup = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB2C2A").s().p("EhwNA6yQilAAiXg/QiQg+hxhwQhwhxg9iQQhAiXAAilMAAAho5MD5vAAAMAAABo5QAAClg/CXQg+CRhwBwQhxBwiRA+QiWA/imAAg");
	this.shape.setTransform(799.3,376.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1598.5,752.5);


(lib.boxes_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.boxes();
	this.instance.setTransform(-106,-102,0.803,0.803);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-102,212,204.8);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-120,-240,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-240,240,480);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib._new = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AI7S0IiOmqItWAAIiSGqInqAAMANsglnIFvAAMANwAlngAklF+IJVAAIkntqg");
	this.shape.setTransform(62.7,3.4,0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFyS0ItMzpIAATpInWAAMAAAglnIHWAAIAAR4IMJx4IIxAAIsoRqIN5T9g");
	this.shape_1.setTransform(42.6,3.4,0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AGYS0IAAvwIsuAAIAAPwInWAAMAAAglnIHWAAIAAPZIMuAAIAAvZIHWAAMAAAAlng");
	this.shape_2.setTransform(21.3,3.4,0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AG7S0IAA4IIunYIImkAAMAAAglnIHWAAIAAYFIOo4FIGjAAMAAAAlng");
	this.shape_3.setTransform(-0.3,3.4,0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AtnS0MAAAglnIPFAAQFVAADKCzQDKC0AAEwQAAFYkqCnQBGAkAmAaQAkAaAmAnQBOBSAlBoQAiBlABCBQAAE9jHC7QjHC6lUAAgAmRMRIHoAAQCSAABUhRQBVhQAAiJQAAiJhVhPQhUhPiSAAInoAAgAmRjlIHKAAQCRAABThKQBUhKAAiBQAAiChUhKQhThKiRAAInKAAg");
	this.shape_4.setTransform(-21,3.4,0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlnSFQilhDh/iBQibifgzkHQggidAAkZIAAjGQAAlqAyiyQAwi1CMiNQB/iCClhDQCmhDDBAAQDBAAClBDQCkBDB/CCQCACBA4C5QA4C6AAEjIAAEAQAAE2gfCZQgzD3ieCjQj+EHmLAAQjBAAimhDgAipsDQhPAhg3A/QhKBRgYCtQgRB5AAEMIAAB4QAADuAPBsQAZCnBLBLQCACBCvAAQBcAABMghQBNghA4g/QBKhUAWiGQAWiHAAltQAAkqgYiAQgYiBhGhOQg4g/hNghQhMghhcAAQhbAAhOAhg");
	this.shape_5.setTransform(-41,3.4,0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AGXS0IAAvwIsuAAIAAPwInVAAMAAAglnIHVAAIAAPZIMuAAIAAvZIHXAAMAAAAlng");
	this.shape_6.setTransform(-61.7,3.4,0.1,0.1);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0,0,0.1,0.1,0,0,0,799.2,376.2);

	this.addChild(this.instance,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-37.6,160,75.3);


(lib.cup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.par_1();
	this.instance.setTransform(-10.3,-36.5,1,1,0,0,0,-37.8,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:37.1,scaleX:1.16,scaleY:0.78},25).to({regY:37,scaleX:1,scaleY:1},25).wait(1));

	// Слой 1
	this.instance_1 = new lib.cup();
	this.instance_1.setTransform(-66,-53,0.899,0.899);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-121.5,138.5,174.6);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// urText
	this.instance = new lib.urText();
	this.instance.setTransform(54.9,199.3,1.3,1.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({alpha:1},5).wait(171).to({alpha:0},5).wait(1));

	// t5
	this.instance_1 = new lib.t5();
	this.instance_1.setTransform(-230,-114.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).wait(1).to({x:-225},0).wait(1).to({x:-209.7},0).wait(1).to({x:-184.1},0).wait(1).to({x:-150.1},0).wait(1).to({x:-111.5},0).wait(1).to({x:-73.8},0).wait(1).to({x:-41.7},0).wait(1).to({x:-18.3},0).wait(1).to({x:-4.5},0).wait(1).to({x:0},0).wait(36).to({x:220.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(45));

	// cup
	this.instance_2 = new lib.cup_1();
	this.instance_2.setTransform(185.9,66.4,0.997,0.997);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(114).to({_off:false},0).to({x:48.9},10,cjs.Ease.get(1)).wait(56).to({x:269.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(45));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.setTransform(-225,-114.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(1).to({x:-220.3},0).wait(1).to({x:-205.6},0).wait(1).to({x:-180.9},0).wait(1).to({x:-147.7},0).wait(1).to({x:-109.7},0).wait(1).to({x:-72.5},0).wait(1).to({x:-40.8},0).wait(1).to({x:-17.8},0).wait(1).to({x:-4.3},0).wait(1).to({x:0},0).wait(31).to({x:4.8},0).wait(1).to({x:19.7},0).wait(1).to({x:44.4},0).wait(1).to({x:77.3},0).wait(1).to({x:114.6},0).wait(1).to({x:151.5},0).wait(1).to({x:183.2},0).wait(1).to({x:206.6},0).wait(1).to({x:220.5},0).wait(1).to({x:225},0).to({_off:true},1).wait(91));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.setTransform(-6.8,-12,0.01,0.01);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:-116.8},15,cjs.Ease.get(1)).wait(26).to({x:4.5},0).wait(1).to({x:18.4},0).wait(1).to({x:41.9},0).wait(1).to({x:73.5},0).wait(1).to({x:109.6},0).wait(1).to({x:145.1},0).wait(1).to({x:175.2},0).wait(1).to({x:197.1},0).wait(1).to({x:209.9},0).wait(1).to({x:214},0).to({_off:true},1).wait(131));

	// boxes
	this.instance_5 = new lib.boxes_1();
	this.instance_5.setTransform(-6.9,-10.7,0.009,0.009);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).to({regY:-0.1,scaleX:0.91,scaleY:0.91,x:-9,y:12.9},15,cjs.Ease.get(1)).to({scaleX:0.46,scaleY:0.46,x:-44,y:0.5},75).wait(37).to({regY:0.4,scaleX:0.46,scaleY:0.46,x:-43.6,y:0.7},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-42.6,y:0.6},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-41,y:0.4},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-38.5,y:0.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-35.4,y:0},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-31.8,y:-0.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-27.7,y:-0.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-23.4,y:-1.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-19.3,y:-1.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-15.6,y:-1.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-12.4,y:-2.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-10,y:-2.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-8.3,y:-2.4},0).wait(1).to({scaleX:1,scaleY:1,x:-7.3,y:-2.5},0).wait(1).to({regY:-0.1,scaleX:1,scaleY:1,x:-7,y:-3.1},0).wait(30).to({x:226},10,cjs.Ease.get(-1)).wait(1));

	// new
	this.instance_6 = new lib._new();
	this.instance_6.setTransform(0,-276.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({y:-204.3},10).wait(171).to({y:-276.1},10,cjs.Ease.get(-1)).wait(1));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.setTransform(0,-63,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).wait(24).to({y:-13,alpha:0},10).to({_off:true},1).wait(181));

	// bgImg
	this.instance_8 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(236));

	// bg
	this.instance_9 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-240,240,480);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300,1.25,1.25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;