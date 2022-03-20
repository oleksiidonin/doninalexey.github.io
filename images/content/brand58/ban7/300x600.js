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
		{src:"images/hand.png", id:"hand"},
		{src:"images/logoSmall.png", id:"logoSmall"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,107);


(lib.logoSmall = function() {
	this.initialize(img.logoSmall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.t5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACTAyIAOgBIAFgDIAFgFIACgDIABgDIgZhDIAMAAIAUA4QAHgPADgKQAFgOAEgRIALAAIgRAzIgGANIgGAKQgCAFgFAEQgEAEgHACQgGADgJAAgAEpAcQgGgHAAgNIAAgoIAKAAIAAApQABAJADAEQAEAEAIAAQAEAAAFgDIAIgFIAAgyIALAAIAABBIgKAAIAAgFQgEADgFABQgEACgHAAQgNAAgFgGgADqAfQgGgDgDgFQgEgEgCgHQgCgIAAgEIACgMQABgGAFgFQADgFAGgDQAFgDAIAAQAHAAAGADQAGADADAFQACADADAIIACAMIgCAMQgDAIgCADQgDAFgGADQgGADgHAAQgHAAgGgDgADugXIgGAGIgEAIIgBAJIABAJIAEAIQADAEADACQAEADAFAAQAFAAADgDIAHgGIADgIIABgJIgBgIIgDgJIgHgGQgDgCgFAAQgFAAgEACgABJAfQgFgDgEgFQgFgGgBgFQgCgGABgGQgBgGACgGQACgGAEgFQAEgFAFgDQAGgDAHAAQAIAAAFADQAGADAEAFQACADADAIIACAMIgCAMQgDAIgCADQgEAFgGADQgFADgIAAQgHAAgGgDgABNgXIgFAGIgEAIIgBAJIABAJIAEAIIAFAGQAEADAFAAQAFAAADgDQAEgCADgEIADgIIABgJIgBgIIgDgJQgDgEgEgCQgDgCgFAAQgFAAgEACgAAYAeQgEgEAAgHIAAgqIgKAAIAAgJIAKAAIAAgSIAKAAIAAASIARAAIAAAJIgRAAIAAAoQABAFABACQACACADAAQAEAAAFgEIADAIIgGADIgIABQgHAAgEgEgAhwAZQgJgIAAgRQAAgIACgFQADgIADgDQAEgFAFgCQAGgDAFAAQAHAAAGADQAGACADAFQACADADAIIABANIguAAQABALAFAHQAGAIAKAAQAGAAAFgDQADgBAFgEIADAJIgDACIgGADIgHACIgGAAQgPAAgIgJgAhMgIQAAgEgBgDIgFgGIgEgDIgHgBQgFAAgFAEQgFAEgCAJIAiAAIAAAAgAkHAfQgFgDgEgFIgFgLQgCgGAAgGQAAgGACgGQADgIACgDQAEgFAFgDQAGgDAIAAQAGAAAGADQAGADADAFQAFAFABAGQACAGAAAGQAAAGgCAGQgBAHgFAEQgDAFgGADQgGADgGAAQgIAAgGgDgAkCgXQgEACgDAEIgDAIIgBAJIABAJQACAGACACQADAEADACQAEADAFAAQAEAAAEgDQAEgCACgEQADgFABgDQABgFAAgEQAAgEgBgEQgBgEgDgFQgCgDgEgDQgEgCgEAAQgFAAgEACgAgyAhIAAhBIAJAAIABAHIAIgGQAFgDAEAAIAGABIgCAKIgEgBQgFAAgEADIgIAGIAAAwgAicAhIgOgvIgPAvIgKAAIgThBIALAAIANAyIAQgyIAHAAIAQAyIANgyIALAAIgTBBgAlYAhIAAhcIAcAAQAPAAAIAHQAHAIAAAOQAAAOgHAGQgJAHgOAAIgRAAIAAAkgAlNgMIARAAQAJAAAFgFQAFgEAAgKQAAgJgFgFQgEgEgKAAIgRAAg");
	this.shape.setTransform(0,0,1.086,1.085);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.4,-6.5,75,13.1);


(lib.t4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD3AtQgGgBgFgFQgEgFgDgGQgDgIAAgIQAAgIADgFQADgIADgEQAGgFAFgCQAHgCAGAAQAPAAAJAKQAIALAAASIgqAAQAAAFAEAEQAEAEAHAAQAFAAAFgDIAHgFIAHARIgEADIgGADIgIACIgKABQgGAAgHgDgAENAEQAAgEgDgDQgDgEgEAAQgDAAgEAEQgCADgBAEIAUAAIAAAAgABYAtQgGgCgEgGQgFgFgCgGQgDgIABgHQgBgHADgFQACgGAFgFQAEgFAGgDQAHgCAIAAQAHAAAHACQAHADAEAFQAFAGACAFQACAEAAAIQAAAJgCAGQgCAHgFAEQgEAGgHACQgGADgIAAQgIAAgHgDgABfAAQgDADAAAIQAAAJADAFQADAFAFAAQAFAAAEgFQACgGAAgIQAAgHgCgEQgEgEgFAAQgFAAgDAEgAhsAtQgFgCgEgGQgDgEgDgHQgCgGAAgIQAAgJACgDQADgHADgFQAGgGAEgBQAGgDAHAAIAGAAIAGACIAAgZIAYAAIAABbIgVAAIgBgFIgFAFQgGACgFAAQgGAAgGgDgAhegDIgEADQgBAAgBAFIgBAHQAAAIACAFQADAFAGAAIAFgBIADgDIAAgcIgDgCIgEAAQgDAAgCABgAi2AtQgHgCgEgGQgEgEgCgHQgDgIAAgHQAAgHADgFQACgHAEgEQAEgFAHgDQAHgCAHAAQAIAAAHACQAGADAEAFQAFAEACAHQACAEAAAIQAAAJgCAGQgDAIgEADQgEAGgGACQgHADgIAAQgIAAgGgDgAiwAAQgDADAAAIQAAAJADAFQADAFAFAAQAHAAABgFQAEgFAAgJQAAgIgEgDQgBgEgHAAQgFAAgDAEgAgjAuQgEgBgDgDIgEgHQgCgDAAgFQAAgGACgDIAFgHIAHgEIAIgCIAQgCIAAgCQAAgGgJAAIgIABIgIAEIgHgPIAFgCIAGgDIAPgCQANAAAGAGQAIAHgBAMIAAArIgSAAIgBgFQgDADgFABQgEACgGAAIgIgBgAgTAQQgEABgCACQgBADAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQADACADAAIAEgBIAFgCIAAgNgAC/AuIAAgpQAAgFgDgBQgBgDgEAAIgGABIgFADIAAAuIgXAAIAAhDIAUAAIABAGQAEgDAFgCQAFgCAGAAQALAAAGAGQAIAHgBAMIAAArgAAbAuIAAgxIgJAAIAAgSIAJAAIAAgBQAAgMAHgHQAHgGALAAIALABIAIADIgCAPIgFgBIgFgBQgIAAAAAIIAAABIANAAIAAASIgNAAIAAAxgAj+AuIgkhbIAbAAIATA5IATg5IAaAAIgjBbg");
	this.shape.setTransform(0,0,1.086,1.085);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.6,-5.2,63.3,10.5);


(lib.t3 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCAZIBHgZIhEgYIAKgfIB4AsIAAAVIh8Aug");
	this.shape.setTransform(49,-0.6,0.438,0.438);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBCQgMgDgKgJQgJgKgFgNQgFgOgBgRQAAgOAGgPQAFgOAIgJQAJgIAMgGQALgEALAAQAMAAAMAEQAKAEAJAKQAIAIAFAOQAEAPABARIAAAHIhXAAQABARAKAHQAKAIANAAQAHAAAGgCIALgDIAJgDIAEgFIAKAdIgGAEIgMAEQgIADgHACIgTABQgLAAgMgFgAgPgjQgHAHgCANIAyAAQAAgGgDgGIgGgIQgEgEgEgCQgEgBgEAAQgHAAgJAHg");
	this.shape_1.setTransform(40.5,0.5,0.438,0.438);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheBEIAAiHIAjAAIAABpIAsAAIAAhpIAfAAIAABpIAsAAIAAhpIAjAAIAACHg");
	this.shape_2.setTransform(32.3,0.5,0.438,0.438);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BEIAAiHIAjAAIAAAjIAfAAQAaAAAOAOQAPANAAAVQAAANgFAKQgEAKgIAGQgIAGgKADQgMAEgKAAgAgZApIAZAAQAMAAAGgHQAFgHAAgLQAAgLgFgFQgFgFgNAAIgZAAg");
	this.shape_3.setTransform(24.3,0.5,0.438,0.438);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBEIAAhqIghAAIgBAuQgBALgDAMQgDAPgLALQgLALgUAAIgNAAIAAgfIAIAAQAGAAAFgCQAEgDACgIQADgJAAgrIAAgnIBnAAIAACHg");
	this.shape_4.setTransform(17.2,0.5,0.438,0.438);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBeIAAiGIAhAAIAACGgAgOg7QgFgHgBgHQABgIAFgGQAEgGAKAAQAKAAAFAGQAFAHAAAHQAAAHgFAHQgFAGgKAAQgJAAgFgGg");
	this.shape_5.setTransform(12.5,-0.7,0.438,0.438);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBdQgMgHgIgKQgJgMgDgOQgEgQAAgRQAAgRADgPQADgRAIgPQAJgQALgIQAOgKAQgBIAKgBQAHAAAEgDQAEgEAAgIIAdAFQgBAKgDAIQgDAHgFAEQgGAFgFABIgPADIgOACQgLABgIAJQgHAHgEATQAEgGAKgFQALgEAKAAQAQAAALAGQALAGAHAKQAGAIAEALQADALAAAKQAAAOgFAOQgGANgIAIQgIAJgMAGQgOAFgMAAQgQAAgMgGgAgVAGQgIAKAAAQQAAAQAIAKQAHAKAOAAQAPAAAIgKQAIgLAAgPQAAgPgIgLQgIgIgPAAQgOAAgHAIg");
	this.shape_6.setTransform(7.7,-0.8,0.438,0.438);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBEIAAguIgYAAQgDARgFAJQgEAJgFAEQgHAFgFABIgcABIAAgdIAIAAIAFgBIAFgDIACgGIAEgMQgPgIgFgJQgFgJAAgMQAAgWANgMQAOgMAZAAIBBAAIAACHgAgSgjQgFAGABAIQgBASAVAAIAaAAIAAglIgaAAQgMAAgEAFg");
	this.shape_7.setTransform(-1.3,0.5,0.438,0.438);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBCQgLgDgJgJQgIgIgGgPQgGgNABgSQAAgOAEgQQAGgNAJgJQAIgJALgFQAMgEAKAAQAMAAAJADQAJADAHAFQAGAFAEAFIAHALIgaARQgDgEgIgJQgHgHgJAAQgKABgIAJQgJAJABAWQgBATAJALQAJALANgBQAIAAAHgBQAGgBAEgCIAIgFIAEgDIAKAcIgGAEQgEACgHADIgPAEQgHACgMAAQgLAAgLgFg");
	this.shape_8.setTransform(-7.2,0.5,0.438,0.438);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBEIAAhIIgyAyIAAAWIgjAAIAAiHIAjAAIAABIIAygyIAAgWIAjAAIAACHg");
	this.shape_9.setTransform(-13.6,0.5,0.438,0.438);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQBEIAAhpIgpAAIAAgeIB0AAIAAAeIgqAAIAABpg");
	this.shape_10.setTransform(-19.8,0.5,0.438,0.438);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBEQgHgCgHgGQgFgFgFgJQgEgHAAgLQAAgLAEgHQAEgJAHgCQAGgFAJgEIATgFIAagEIAAgCQAAgMgGgEQgGgFgIAAIgLABIgKAEIgMAIIgMgYIAHgFIALgFIAPgGIAQgBQAMAAAJADQAKADAGAGQAHAHAEAJQAEALAAANIAABWIghAAIgBgLQgGAHgJADQgHAEgKAAQgIAAgJgDgAgBAHQgLACgEAGQgFAFAAAHQAAAGAFAEQAFAEAJABQAGAAAGgDQAFgDAFgEIAAgcg");
	this.shape_11.setTransform(-25.7,0.5,0.438,0.438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZBEIAAg3IgxAAIAAA3IgjAAIAAiHIAjAAIAAA0IAxAAIAAg0IAjAAIAACHg");
	this.shape_12.setTransform(-32,0.5,0.438,0.438);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVBFIgPgGQgIgDgEgDIgHgGIARgaQAEAFALAGQAJAFAOABQAJgBAGgDQAGgDAAgHQAAgHgFgEQgEgEgNAAIgMAAIAAgZIANAAQAKABAEgFQAEgGAAgFQAAgJgGgDQgGgDgGAAQgJAAgIAFQgGAEgHAMIgYgQQAIgSAOgHQAOgIASAAQAaAAANAKQAOAJAAATQAAAJgEAJQgFAIgLAFQANABAFAJQAFAGAAANQAAAOgFAGQgFAJgIAFQgIAEgLADIgTACQgJAAgMgCg");
	this.shape_13.setTransform(-38.3,0.5,0.438,0.438);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQBeIAAiGIAhAAIAACGgAgOg7QgFgHgBgHQABgIAFgGQAEgGAKAAQAKAAAFAGQAGAGAAAIQAAAHgGAHQgFAGgKAAQgJAAgFgGg");
	this.shape_14.setTransform(-42.6,-0.7,0.438,0.438);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxBxIAAgmIhhAAIAAAmIgkAAIAAhIIAPAAQAPgZAHgZQAIgbACgdIACgvIBpAAIAACZIAPAAIAABIgAgEgrQgBAOgFAUQgEAMgFAOQgFANgFALIA/AAIAAh4IgjAAQAAARgDATg");
	this.shape_15.setTransform(-48.3,0.2,0.438,0.438);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-5.1,104,10.2);


(lib.t2_2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah3BjQAZAAAUgHQAUgHAJgOIhUjrIBWAAIAvCoQAGgMAHgYIAOgrIAVhZIBPAAQgFAWgMAqIgUA7QgKAdgMAXQgKAZgLATQgLAWgNATQgNATgRAQQgVAQgZAIQgcAKgkAAg");
	this.shape.setTransform(56.1,1.6,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglB0IAAilIhDAAIAAhDIDRAAIAABDIhCAAIAAClg");
	this.shape_1.setTransform(46.8,-0.2,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmByQgWgIgPgPQgPgPgJgXQgJgVAAggQAAgcAJgWQAIgWAPgQQAQgPAUgJQATgHAXgBQAxABAdAhQAdAjAABDIiMAAQABAWAMAKQANAMAWAAQAVgBAMgGQAMgIAOgKIAXA3QgHAGgHAEQgHAFgNAFQgKAEgQAEQgRACgQAAQgWAAgWgGgAgUg3QgJAJgCAUIBCAAQAAgRgKgMQgJgMgOAAQgMAAgKAMg");
	this.shape_2.setTransform(38.2,-0.2,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeB0IAAhYIg7AAIAABYIhOAAIAAjoIBOAAIAABSIA7AAIAAhSIBOAAIAADog");
	this.shape_3.setTransform(28.7,-0.2,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhtCjIAAlAIBEAAIAEATQAKgKALgGQANgIASAAQAWABASAIQARAIANARQAMAPAHAXQAGAVAAAdQAAAbgHATQgIAXgNAQQgNAPgUAJQgTAJgZAAQgVABgOgHIAABbgAgUhgIgKAIIAABlIAJAEIAMABQAUAAALgQQALgOAAgcQAAgdgKgQQgKgQgQgBQgKAAgHAGg");
	this.shape_4.setTransform(19.1,1.4,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmByQgVgIgQgPQgPgPgKgXQgIgXAAgeQAAgbAIgXQAJgWAPgQQAPgPAVgJQAUgHAWgBQAxABAcAhQAdAiABBEIiMAAQABAWAMAKQAMAMAXAAQAUgBANgGQAPgJALgJIAXA3QgGAGgIAEQgIAFgMAFQgKAEgQAEQgRACgRAAQgVAAgWgGgAgUg3QgJAKgBATIBBAAQgBgSgJgLQgJgMgOAAQgNAAgJAMg");
	this.shape_5.setTransform(9.6,-0.2,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmB0IAAilIhCAAIAAhDIDRAAIAABDIhBAAIAAClg");
	this.shape_6.setTransform(0.9,-0.2,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeB0IAAhYIg7AAIAABYIhOAAIAAjoIBOAAIAABSIA7AAIAAhSIBOAAIAADog");
	this.shape_7.setTransform(-8,-0.2,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnCdIAAk5IBPAAIAAE5g");
	this.shape_8.setTransform(-15.6,-1.7,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsCYQgbgMgSgVQgTgUgKgfQgKggAAgkQAAgmALgfQAKgeATgVQARgUAbgLQAZgLAeAAQAWAAARAEQAQAEAPAJQAPAIALAMQAMALAKAQIg4AsQgLgQgNgMQgLgJgWAAQgZAAgSAWQgSAYAAAtQAAAWAFAUQAGARAIAMQAIALANAGQAIAGAPAAIATgBIAQgCIAAgtIgqAAIAAg8IB1AAIAACdQgSAIgfAHQgeAFglAAQgdAAgbgLg");
	this.shape_9.setTransform(-26.8,-1.7,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnCcQgTgFgNgEQgOgHgLgHQgLgHgJgHIAhhAQAPAOAWAKQAUAJAVAAQATAAAKgIQAMgIAAgSQAAgRgPgKQgNgJgcgBIgcADIAAg2IAageQAPgPANgMIhoAAIAAhDIDKAAIAABCQgXAOgSAPQgTAQgQATQAsACAXAYQAWAXAAApQAAAZgKARQgKATgPALQgSANgUAGQgVAGgXAAQgWAAgRgDg");
	this.shape_10.setTransform(-36.9,-1.6,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag5BzQgMgEgKgJQgIgIgIgPQgFgNAAgQQAAgPAGgOQAHgNAKgIQALgJANgEQANgGAQgCQAMgDANgBIAWgCIAAgIQAAgagaAAQgOAAgOAFQgNAFgNAHIgWgyIAOgIQAJgEANgEQAJgDAQgEQAPgCAKAAQAqAAAaAWQAaAXAAAuIAACQIhCAAIgGgSQgJAJgQAHQgNAGgUAAQgPAAgNgFgAALAOIgNACQgOADgFAHQgGAIABAKQAAAJAFAGQAIAGALAAQAGAAAHgDQAJgDADgEIAAgqg");
	this.shape_11.setTransform(-49.1,-0.2,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmB0IAAilIhCAAIAAhDIDRAAIAABDIhBAAIAAClg");
	this.shape_12.setTransform(-57.1,-0.2,0.378,0.378);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.1,-7.9,122.2,15.8);


(lib.t2_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeB0IAAhQIgbAAQgDAYgHARQgHAQgJAIQgJAJgLAEQgMADgOgBIgmAAIAAg5IARAAQAJAAAGgGQAHgHACgRQgYgNgIgQQgJgQAAgVQAAgQAEgMQAFgOAKgLQAKgKATgIQAUgIAbAAIB4AAIAADogAgXg3QgGAIAAAKQAAAJAGAJQAFAHAPABIAhAAIAAg0IghAAQgPgBgFAJg");
	this.shape.setTransform(88.5,0,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeB0IAAhYIg6AAIAABYIhPAAIAAjoIBPAAIAABSIA6AAIAAhSIBOAAIAADog");
	this.shape_1.setTransform(78.9,0,0.378,0.378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeB0IAAhYIg6AAIAABYIhPAAIAAjoIBPAAIAABSIA6AAIAAhSIBOAAIAADog");
	this.shape_2.setTransform(69,0,0.378,0.378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BzQgOgEgJgKQgKgJgEgMQgGgMAAgSQAAgQAGgNQAGgNAKgIQAMgJANgFQANgFAQgDIAwgFIAAgIQAAgZgbAAQgNAAgPAEQgOAEgMAIIgXgyIAPgIIAVgIIAagGQANgDAMAAQArAAAaAWQAZAWAAAvIAACQIhDAAIgGgSQgIAIgQAIQgOAGgTAAQgQAAgMgFgAgCAQQgNADgGAHQgGAIAAAKQAAAJAHAGQAGAGAMAAQAEAAAJgDQAIgDAFgEIAAgqg");
	this.shape_3.setTransform(59.5,0,0.378,0.378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvB0IAAjoICDAAQAnABAWAQQAWAQAAAeQAAAQgGANQgFAMgMAIQAQAFAHANQAJALgBAVQABASgIANQgGAOgMAIQgNAJgPAFQgRADgRAAgAggA/IAmAAQAKAAAIgEQAIgGgBgMQAAgLgGgEQgGgFgLgBIgoAAgAgggXIAkAAQAMAAAFgGQAFgFAAgKQAAgTgXAAIgjAAg");
	this.shape_4.setTransform(50.6,0,0.378,0.378);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah4BjQAaAAATgHQAVgHAJgOIhUjrIBXAAIAuCoQAHgOAHgWIAiiEIBOAAQgGAfgKAhQgJAbgLAgQgMAhgKATIgVAsQgMAXgMASQgOAUgRAPQgTAPgaAJQgaAJgmABg");
	this.shape_5.setTransform(40.7,1.8,0.378,0.378);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfB0IgyhVIgOAAIAABVIhOAAIAAjoIBOAAIAABWQAHAAAGgDQAEgDAGgGIAQgiQALgTANgKQAMgLAZAAIAfAAIAAA/IgOAAQgLAAgGAHQgHAGgFAMIgIANQgDAFgHAGIBMB4g");
	this.shape_6.setTransform(31.4,0,0.378,0.378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AApB0IAAipIgpAAIAABLIgCASQAAAJgDAGQgCALgHAOQgHAMgJAHQgIAHgPAGQgOAEgSAAIgiAAIAAg7IAOAAQALAAAHgDQAHgFAEgLQADgMAAgSQABgMAAgrIAAhFIDAAAIAADog");
	this.shape_7.setTransform(20.9,0,0.378,0.378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmCiIAAjmIBMAAIAADmgAgdhhQgLgKAAgRQAAgPALgLQALgLASAAQATAAALALQALALAAAPQAAARgLAKQgKAKgUAAQgTAAgKgKg");
	this.shape_8.setTransform(13.9,-1.7,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcB0IAAimIg3AAIAACmIhPAAIAAjoIDVAAIAADog");
	this.shape_9.setTransform(6.7,0,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhIBaQgfgfAAg6QAAgbAIgXQAJgXAPgPQAOgQAWgIQAWgJAWAAQAUAAAQAGQAQAFALAIQANALAGAJQAGAIAHAOIg2AjQgHgQgJgJQgKgJgNAAQgPAAgLAOQgKAPAAAcQAAAeAMAOQANAPAUAAQASAAAMgHQAMgHALgKIAZA7QgKAJgYAJQgXAKgfAAQgyAAgggfg");
	this.shape_10.setTransform(-2.3,0,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmBxQgVgHgQgPQgQgQgIgWQgJgXAAgeQAAgbAIgXQALgYAOgOQAPgQAUgHQAVgJAVAAQAxAAAdAiQAdAjAABDIiMAAQABAVAMALQANAMAWAAQAUAAANgIQAMgHAOgLIAXA4QgEAEgKAGQgJAGgKAEQgNAFgOADQgPADgSAAQgXAAgVgIgAgUg4QgJAKgBAUIBBAAQAAgSgKgLQgIgMgOAAQgNAAgKALg");
	this.shape_11.setTransform(-13.9,0,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AikB0IAAjoIBOAAIAACqIAyAAIAAiqIBJAAIAACqIAzAAIAAiqIBNAAIAADog");
	this.shape_12.setTransform(-25.5,0,0.378,0.378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhsB0IAAjoIBOAAIAAA3IAlAAQAdAAASAHQATAHAMAMQAMAMAGAQQAGANAAAUQAAATgGAPQgGASgMALQgNANgSAHQgUAHgbAAgAgeA+IAeAAQANAAAIgKQAJgKAAgQQAAgPgJgJQgHgHgOAAIgeAAg");
	this.shape_13.setTransform(-37,0,0.378,0.378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AApB0IAAipIgpAAIAAA1QAAAMAAAKIgCASIgDAPQgCALgHAOQgGALgKAIQgIAHgPAGQgOAEgSAAIgiAAIAAg7IAOAAQAKAAAIgDQAHgFAEgLQADgMAAgSIABh8IDAAAIAADog");
	this.shape_14.setTransform(-47.4,0,0.378,0.378);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmCiIAAjmIBMAAIAADmgAgdhhQgLgKAAgRQAAgPALgLQALgLASAAQATAAALALQAKALAAAPQAAARgKAKQgKAKgUAAQgTAAgKgKg");
	this.shape_15.setTransform(-54.4,-1.7,0.378,0.378);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxCeQgXgLgOgSQgOgRgHgbQgHgXAAghQAAgeAGgdQAHgeANgXQAOgXAVgPQAUgPAegFIAVgFQALgCAKgDQAKgFAJgMIArAlQgGAMgFAHQgGAHgJAGQgJAFgJACQgIADgOABIgQABIgPACQgQAEgMANQgMAOgEAVQAHgJARgHQAQgGAPAAQAXAAAUAIQASAHANAPQANAPAHARQAGAVAAAXQAAAWgHAUQgIAWgOAQQgOASgWAJQgVALgcAAQgcAAgWgLgAgbARQgKAPAAAWQAAAVAKARQAKAQARAAQATAAAKgQQAKgQAAgWQAAgXgKgOQgJgPgUAAQgRAAgKAPg");
	this.shape_16.setTransform(-61.5,-1.8,0.378,0.378);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmBxQgVgHgQgPQgPgPgJgXQgJgYAAgdQAAgcAJgWQAIgXAPgPQAPgQAUgHQAWgJAUAAQAyAAAcAiQAeAjAABDIiMAAQABAVAMALQANAMAWAAQATAAAOgIQAOgIAMgKIAXA4QgGAGgIAEQgLAHgJADQgLAFgQADQgOADgSAAQgYAAgUgIgAgUg4QgKAMAAASIBBAAQAAgSgKgLQgJgMgOAAQgMAAgKALg");
	this.shape_17.setTransform(-73.5,0,0.378,0.378);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABtC8IAAg+IkpAAIAAk5IBRAAIAADzIA5AAIAAjzIBMAAIAADzIA6AAIAAjzIBRAAIAADzIAYAAIAACEg");
	this.shape_18.setTransform(-85.5,-0.4,0.378,0.378);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.6,-8.1,185.3,16.3);


(lib.t1 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BLIAOAAIAMgEQAGgBAGgEQAGgEAEgGIAGgMIgziJIAYAAIAnBzQAKgXAKgdQAKgeAIghIAWAAIgjBpIgXAvQgFALgHAHQgKAJgLADQgMAFgVABg");
	this.shape.setTransform(52.4,1.9,0.491,0.491);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBCQgLgEgIgJQgJgKgFgMQgFgMAAgTQAAgSAFgNQAGgOAIgIQAIgIALgEQAJgEAKAAQALAAAIADQAJADAFAEQAFAEAEAFIAGAJIgPAKQgGgJgHgGQgIgGgMAAQgGAAgHAEQgHAEgFAGQgGAIgCAJQgDAKAAALQAAANADAJQADAJAGAIQAFAGAIAEQAHAEAGAAQANAAAJgEQAIgEAHgHIAGASQgIAHgLADQgNAEgMAAQgKAAgKgEg");
	this.shape_1.setTransform(46.1,0.6,0.491,0.491);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA0QgRgSAAgiQAAgRAEgLQADgNAIgJQAIgKAKgEQAKgFAMAAQAOAAALAFQALAFAGAJQAIALADALQADAMAAAQIhbAAQAAAYALAOQAMAPASAAQANAAAJgFQAJgEAIgGIAGARQgCADgFACQgEADgHACIgNAEIgPABQgbAAgQgSgAgUgsQgJAHgEAUIBCAAQAAgJgDgHQgEgHgEgDQgEgEgGgDQgGgCgGAAQgLAAgJAIg");
	this.shape_2.setTransform(39.5,0.6,0.491,0.491);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfBDIAAg9Ig+AAIAAA9IgUAAIAAiFIAUAAIAAA4IA+AAIAAg4IAVAAIAACFg");
	this.shape_3.setTransform(32.6,0.6,0.491,0.491);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBEIgNgFIgLgHIgGgHIAKgQIAHAHQACADAGADQAGAEAFABQAGACAGAAQAQAAAGgGQAIgGAAgLQAAgKgGgHQgFgFgNgBIgSgBIAAgOIARgBQALgCAGgGQAEgGAAgJQABgKgIgGQgHgFgLAAQgLAAgJAHQgHAGgIALIgNgKQACgFAGgGQADgFAHgFQAHgFAHgCQAHgCAKAAQAWAAAKAJQANAKAAAPQAAANgHAJQgGAIgMAEQAMABAIAGQAHAHABAPQAAAUgOALQgOALgWAAQgGAAgMgCg");
	this.shape_4.setTransform(26.1,0.6,0.491,0.491);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBdIAAiFIASAAIAACFgAgIhDQgEgEAAgHQAAgGAEgEQAFgEADAAQAFAAAEAEQAEAEAAAGQAAAHgEAEQgEADgFAAQgDAAgFgDg");
	this.shape_5.setTransform(22,-0.7,0.491,0.491);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBbQgMgGgGgKQgHgLgEgPQgDgQAAgPQAAgxAOgaQAPgZAdAAIALAAQAIAAAFgDQAFgDAAgIIARADQgBARgJAGQgJAGgPABIgMAAQgJAAgIAFQgHAEgEAIQgEAIgCAIIgDARQAGgKALgGQAKgGAOAAQAOAAAKAFQALAGAGAIQAHAJADAKQAEAOAAANQAAAMgEANQgDALgIAKQgIAKgLAFQgLAGgOABQgPgBgLgGgAgPgOQgIAFgFAGQgFAFgCAJQgCAIAAAKQAAALADAHQACAIAFAJQAFAGAHAFQAGAEAJAAQAKAAAHgEQAIgFAEgGQAEgFADgMQACgHAAgLQAAgKgCgIQgEgLgDgCQgEgHgIgFQgIgDgJAAQgIAAgHADg");
	this.shape_6.setTransform(17.1,-0.7,0.491,0.491);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYBAQgNgHgHgJQgHgLgEgMQgDgOAAgLQAAgMADgNQAFgOAGgJQAIgKALgGQAMgFANAAQAPAAAKAGQAMAGAHAKQAHAJAFANQADAOAAALQAAAMgDANQgFANgHAKQgGAJgNAHQgKAGgPAAQgNAAgLgGgAgQgvQgIAEgEAIQgFAIgCAJQgCAHgBALQABALACAIQACAIAFAJQAFAIAIAEQAIAFAHAAQAIAAAJgFQAIgGAEgGQAFgIADgJQACgLAAgIQAAgHgCgLQgDgKgFgHQgEgHgIgFQgIgFgJAAQgIAAgIAFg");
	this.shape_7.setTransform(7.4,0.6,0.491,0.491);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBDIAAiFIBRAAIAAASIg9AAIAABzg");
	this.shape_8.setTransform(1.8,0.6,0.491,0.491);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBAQgNgHgFgJQgIgLgEgMQgDgMAAgNQAAgNADgMQAEgOAHgJQAIgKALgGQAMgFANAAQAOAAALAGQALAFAIALQAHAJAEANQAEAOAAALQAAAMgEANQgEANgHAKQgHAKgMAGQgLAGgOAAQgNAAgMgGgAgQgvQgIAFgEAHQgFAIgCAJQgDAHAAALQAAALADAIQACAIAFAJQAFAIAHAEQAJAFAHAAQAIAAAJgFQAIgGAEgGQAFgIACgJQADgLAAgIQAAgHgDgLQgCgKgFgHQgEgHgIgFQgIgFgJAAQgIAAgIAFg");
	this.shape_9.setTransform(-4.6,0.6,0.491,0.491);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhVBDIAAiFIAVAAIAABzIA3AAIAAhzIATAAIAABzIA3AAIAAhzIAUAAIAACFg");
	this.shape_10.setTransform(-13.3,0.6,0.491,0.491);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUBDQgHgCgHgGQgGgFgEgIQgEgJAAgJQAAgOAIgKQAIgIALgFQALgFAMgDQAPgCALAAIAAgCQAAgRgHgHQgHgHgMAAQgIAAgJAEQgIACgKAIIgHgQQAIgGAKgEQALgFAOAAQAWAAAMALQAMAMAAAbIAABWIgTAAIgBgLQgGAGgJAEQgKAEgIAAQgIAAgIgDgAAJAAQgJAAgHACQgKAFgEAFQgGAGAAAKQAAAIADADQACAGAEACIAIAEIAJACQAHAAAIgFQAFgCAJgHIAAgpg");
	this.shape_11.setTransform(-21.8,0.6,0.491,0.491);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4BeIAAi7IAzAAQAaAAANANQANANAAAWQAAATgJAJQgKAKgPADIAPADQAGABAIAGQAGAFAFAJQAEAJAAAMQAAAMgEAKQgEAKgHAHQgHAHgKADQgJAEgMAAgAgiBKIAlAAQAOAAAIgIQAJgIAAgRQAAgkgoAAIgcAAgAgigNIAbAAQAOAAAJgJQAJgIAAgQQAAgbgdAAIgeAAg");
	this.shape_12.setTransform(-28.1,-0.7,0.491,0.491);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAgBDIAAgvIgiAAQgDAQgFAJQgFALgFADQgEAFgFACIgKABIgNAAIAAgSIANAAQAEgBACgDQADgDADgHIAFgTIgIgEQgEgCgFgGQgEgEgDgFQgCgGAAgLQAAgUANgMQAOgMAWAAIAzAAIAACFgAgUgpQgIAGAAANQABANAHAHQAIAEAMAAIAgAAIAAgyIggAAQgLAAgJAHg");
	this.shape_13.setTransform(-38.2,0.6,0.491,0.491);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnBDIAAhzIgtAAIAAAJQAAAXgCARQAAARgDAPQgEAQgJAJQgIAJgRAAIgJAAIAAgSIAGAAIAGgBQADAAADgCQACgCACgFQADgDACgHIADgbIAChEIBVAAIAACFg");
	this.shape_14.setTransform(-45,0.6,0.491,0.491);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAwBSIAAgfIheAAIAAAfIgVAAIAAgwIAIAAQAIgFAGgKQAEgJAEgKQADgNAAgLIABg5IBXAAIAABzIAPAAIAAAwgAgMgnIgFAnQgCAJgFAKQgEAJgFAGIBDAAIAAhiIguAAg");
	this.shape_15.setTransform(-52.1,1.4,0.491,0.491);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.5,-5.5,111,12.1);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logoSmall();
	this.instance.setTransform(-20,-20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.hand_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-34,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-53,68,107);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(104).call(this.frame_104).wait(1));

	// t3
	this.instance = new lib.t3();
	this.instance.setTransform(-38.6,-179,1.377,1.376);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({x:-58.3,alpha:1},10).wait(1));

	// t5
	this.instance_1 = new lib.t5();
	this.instance_1.setTransform(-57.1,-118.1,1.419,1.418);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({x:-76.8,alpha:1},10).wait(16));

	// t4
	this.instance_2 = new lib.t4();
	this.instance_2.setTransform(-65.8,-140.2,1.405,1.404);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({x:-85.5,alpha:1},10).wait(21));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.setTransform(-26,-213.1,1.518,1.516);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({x:-45.6,alpha:1},10).wait(36));

	// t2_2
	this.instance_4 = new lib.t2_2();
	this.instance_4.setTransform(-24.5,-245,1.405,1.404);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({x:-44.2,alpha:1},10).wait(51));

	// t2_1
	this.instance_5 = new lib.t2_1();
	this.instance_5.setTransform(19.8,-269.1,1.405,1.404);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({x:0.1,alpha:1},10).wait(56));

	// hand
	this.instance_6 = new lib.hand_1();
	this.instance_6.setTransform(-38.7,-38);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).wait(81));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.setTransform(-98.4,11.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({alpha:1},5).wait(76));

	// redLine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E11021").s().p("AMkOKI8S8TIIiABIW7cSg");
	this.shape.setTransform(-188.9,-62.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E11021").s().p("AMkOKI8S8TIOuABIQvcSg");
	this.shape_1.setTransform(-188.9,-62.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E11021").s().p("AMkOKI8S8TIUoABIK1cSg");
	this.shape_2.setTransform(-188.9,-62.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E11021").s().p("AMkdXI8S8VISh+YMAM8A6tg");
	this.shape_3.setTransform(-188.9,-160);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E11021").s().p("AMkcqI8S8VIQz3+ILklAMADGA5Tg");
	this.shape_4.setTransform(-188.9,-155.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E11021").s().p("AJRdcI8S8VIRd3MIUmnWMgGmA63g");
	this.shape_5.setTransform(-167.8,-160.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E11021").s().p("AEMedI8S8VIUH52IcGmuMgQwA85g");
	this.shape_6.setTransform(-135.3,-167);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E11021").s().p("AgKcWI8U8VIUR5sMAksgCqMgZgA4rg");
	this.shape_7.setTransform(-107.3,-153.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E11021").s().p("AoNfAI8U8VIVN7aMAz2gGQMgpkA9/g");
	this.shape_8.setTransform(-55.8,-170.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E11021").s().p("ApTc0I8U8VIUv6yMAw4gCgIFoNIMgrwAsfg");
	this.shape_9.setTransform(-48.8,-156.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(67));

	// bg
	this.instance_8 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0,compositeOperation:NaN},15).wait(90));

	// bgImg
	this.instance_9 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(105));

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
	this.instance.setTransform(151.2,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(149,299,302.2,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;