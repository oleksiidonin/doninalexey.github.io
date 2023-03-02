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
		{src:"images/img1.png", id:"img1"},
		{src:"images/logoSmall.png", id:"logoSmall"},
		{src:"images/snow.png", id:"snow"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,355);


(lib.logoSmall = function() {
	this.initialize(img.logoSmall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.snow = function() {
	this.initialize(img.snow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


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
	this.shape.setTransform(49,2.4,0.438,0.438);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBCQgMgDgKgJQgJgKgFgNQgFgOgBgRQAAgOAGgPQAFgOAIgJQAJgIAMgGQALgEALAAQAMAAAMAEQAKAEAJAKQAIAIAFAOQAEAPABARIAAAHIhXAAQABARAKAHQAKAIANAAQAHAAAGgCIALgDIAJgDIAEgFIAKAdIgGAEIgMAEQgIADgHACIgTABQgLAAgMgFgAgPgjQgHAHgCANIAyAAQAAgGgDgGIgGgIQgEgEgEgCQgEgBgEAAQgHAAgJAHg");
	this.shape_1.setTransform(40.5,3.5,0.438,0.438);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheBEIAAiHIAjAAIAABpIAsAAIAAhpIAfAAIAABpIAsAAIAAhpIAjAAIAACHg");
	this.shape_2.setTransform(32.3,3.5,0.438,0.438);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BEIAAiHIAjAAIAAAjIAfAAQAaAAAOAOQAPANAAAVQAAANgFAKQgEAKgIAGQgIAGgKADQgMAEgKAAgAgZApIAZAAQAMAAAGgHQAFgHAAgLQAAgLgFgFQgFgFgNAAIgZAAg");
	this.shape_3.setTransform(24.3,3.5,0.438,0.438);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBEIAAhqIghAAIgBAuQgBALgDAMQgDAPgLALQgLALgUAAIgNAAIAAgfIAIAAQAGAAAFgCQAEgDACgIQADgJAAgrIAAgnIBnAAIAACHg");
	this.shape_4.setTransform(17.2,3.5,0.438,0.438);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBeIAAiGIAhAAIAACGgAgOg7QgFgHgBgHQABgIAFgGQAEgGAKAAQAKAAAFAGQAFAHAAAHQAAAHgFAHQgFAGgKAAQgJAAgFgGg");
	this.shape_5.setTransform(12.5,2.3,0.438,0.438);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBdQgMgHgIgKQgJgMgDgOQgEgQAAgRQAAgRADgPQADgRAIgPQAJgQALgIQAOgKAQgBIAKgBQAHAAAEgDQAEgEAAgIIAdAFQgBAKgDAIQgDAHgFAEQgGAFgFABIgPADIgOACQgLABgIAJQgHAHgEATQAEgGAKgFQALgEAKAAQAQAAALAGQALAGAHAKQAGAIAEALQADALAAAKQAAAOgFAOQgGANgIAIQgIAJgMAGQgOAFgMAAQgQAAgMgGgAgVAGQgIAKAAAQQAAAQAIAKQAHAKAOAAQAPAAAIgKQAIgLAAgPQAAgPgIgLQgIgIgPAAQgOAAgHAIg");
	this.shape_6.setTransform(7.7,2.2,0.438,0.438);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBEIAAguIgYAAQgDARgFAJQgEAJgFAEQgHAFgFABIgcABIAAgdIAIAAIAFgBIAFgDIACgGIAEgMQgPgIgFgJQgFgJAAgMQAAgWANgMQAOgMAZAAIBBAAIAACHgAgSgjQgFAGABAIQgBASAVAAIAaAAIAAglIgaAAQgMAAgEAFg");
	this.shape_7.setTransform(-1.3,3.5,0.438,0.438);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBCQgLgDgJgJQgIgIgGgPQgGgNABgSQAAgOAEgQQAGgNAJgJQAIgJALgFQAMgEAKAAQAMAAAJADQAJADAHAFQAGAFAEAFIAHALIgaARQgDgEgIgJQgHgHgJAAQgKABgIAJQgJAJABAWQgBATAJALQAJALANgBQAIAAAHgBQAGgBAEgCIAIgFIAEgDIAKAcIgGAEQgEACgHADIgPAEQgHACgMAAQgLAAgLgFg");
	this.shape_8.setTransform(-7.2,3.5,0.438,0.438);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBEIAAhIIgyAyIAAAWIgjAAIAAiHIAjAAIAABIIAygyIAAgWIAjAAIAACHg");
	this.shape_9.setTransform(-13.6,3.5,0.438,0.438);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQBEIAAhpIgpAAIAAgeIB0AAIAAAeIgqAAIAABpg");
	this.shape_10.setTransform(-19.8,3.5,0.438,0.438);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBEQgHgCgHgGQgFgFgFgJQgEgHAAgLQAAgLAEgHQAEgJAHgCQAGgFAJgEIATgFIAagEIAAgCQAAgMgGgEQgGgFgIAAIgLABIgKAEIgMAIIgMgYIAHgFIALgFIAPgGIAQgBQAMAAAJADQAKADAGAGQAHAHAEAJQAEALAAANIAABWIghAAIgBgLQgGAHgJADQgHAEgKAAQgIAAgJgDgAgBAHQgLACgEAGQgFAFAAAHQAAAGAFAEQAFAEAJABQAGAAAGgDQAFgDAFgEIAAgcg");
	this.shape_11.setTransform(-25.7,3.5,0.438,0.438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZBEIAAg3IgxAAIAAA3IgjAAIAAiHIAjAAIAAA0IAxAAIAAg0IAjAAIAACHg");
	this.shape_12.setTransform(-32,3.5,0.438,0.438);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVBFIgPgGQgIgDgEgDIgHgGIARgaQAEAFALAGQAJAFAOABQAJgBAGgDQAGgDAAgHQAAgHgFgEQgEgEgNAAIgMAAIAAgZIANAAQAKABAEgFQAEgGAAgFQAAgJgGgDQgGgDgGAAQgJAAgIAFQgGAEgHAMIgYgQQAIgSAOgHQAOgIASAAQAaAAANAKQAOAJAAATQAAAJgEAJQgFAIgLAFQANABAFAJQAFAGAAANQAAAOgFAGQgFAJgIAFQgIAEgLADIgTACQgJAAgMgCg");
	this.shape_13.setTransform(-38.3,3.5,0.438,0.438);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQBeIAAiGIAhAAIAACGgAgOg7QgFgHgBgHQABgIAFgGQAEgGAKAAQAKAAAFAGQAGAGAAAIQAAAHgGAHQgFAGgKAAQgJAAgFgGg");
	this.shape_14.setTransform(-42.6,2.3,0.438,0.438);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxBxIAAgmIhhAAIAAAmIgkAAIAAhIIAPAAQAPgZAHgZQAIgbACgdIACgvIBpAAIAACZIAPAAIAABIgAgEgrQgBAOgFAUQgEAMgFAOQgFANgFALIA/AAIAAh4IgjAAQAAARgDATg");
	this.shape_15.setTransform(-48.3,3.1,0.438,0.438);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-2.1,104,10.2);


(lib.t2_3 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjHCkQAoAAAigLQAigLARgZIiOmGICQAAIBOEYQAKgXANgmQALggAKgoIAUhLIAQhIICCAAQgOA9gOAsQgQA4gRArQgRAwgSAnQgSAqgRAgQgRAhgXAjQgYAhgcAYQgfAYgtARQgtAPg8AAg");
	this.shape.setTransform(40.5,1.5,0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/DBIAAkUIhuAAIAAhtIFbAAIAABtIhsAAIAAEUg");
	this.shape_1.setTransform(32.5,-0.1,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBC7QgkgMgYgYQgagagOglQgPgkAAg0QAAgvAOgkQAOgmAZgaQAZgZAigOQAhgNAmAAQBSAAAvA4QAwA4ABBxIjpAAQABAkAVASQAVATAlAAQAiAAAVgMQAXgNAUgRIAmBcQgIAIgPAJQgNAJgUAHQgSAJgZAEQgYAFgfAAQgoAAgjgNgAgihdQgQASgCAeIBvAAQgCgegPgSQgPgSgXAAQgWgBgQATg");
	this.shape_2.setTransform(24.8,-0.1,0.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyDBIAAiSIhiAAIAACSIiCAAIAAmBICCAAIAACIIBiAAIAAiIICCAAIAAGBg");
	this.shape_3.setTransform(16.3,-0.1,0.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai2ENIAAoRIBxAAIAHAeQANgOAVgMQAWgNAfAAQAmAAAdAPQAdAPAUAZQAVAcAKAjQALAlAAAuQAAAsgMAjQgMAlgXAaQgWAaggAPQggAPgpABQghgBgcgKIAACVgAgiihQgNAJgFAGIAACoQAIAEAJACQAIACALABQAiAAASgbQATgZAAguQAAgxgRgbQgQgbgcAAQgPAAgNAJg");
	this.shape_4.setTransform(7.8,1.3,0.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhAC7QgkgLgZgZQgagagPglQgOgmAAgyQAAgvAOgkQAOgmAZgaQAZgaAigNQAhgNAmAAQBRAAAxA4QAuA4ACBxIjqAAQACAjAUATQAWATAlAAQAiAAAVgMQAWgNAVgRIAmBcQgJAJgOAIQgOAJgTAHQgSAJgaAEQgXAFggAAQgoAAghgNgAgihdQgPASgDAeIBvAAQgCgcgPgUQgPgSgXAAQgWgBgQATg");
	this.shape_5.setTransform(-0.7,-0.1,0.2,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/DBIAAkUIhuAAIAAhtIFbAAIAABtIhsAAIAAEUg");
	this.shape_6.setTransform(-8.5,-0.1,0.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyDBIAAiSIhiAAIAACSIiCAAIAAmBICCAAIAACIIBiAAIAAiIICCAAIAAGBg");
	this.shape_7.setTransform(-16.6,-0.1,0.2,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBEFIAAoJICDAAIAAIJg");
	this.shape_8.setTransform(-23.3,-1.5,0.2,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhLD8QgqgTgggjQgfgkgQgyQgRgyAAg+QAAhAASgzQASg0AdggQAfgjArgSQArgSAxAAQAjAAAeAHQAcAHAYAOQAZAPASATQATATARAZIhdBJQgTgcgUgRQgUgRgjAAQgsAAgdAmQgdAnAABNQAAAmAIAeQAJAdAOATQAPAUATAJQARAKAXAAQAQAAAPgCIAcgEIAAhJIhHAAIAAhlIDDAAIAAEGQgjAOgvAJQguAKhAAAQg0AAgsgTg");
	this.shape_9.setTransform(-33.2,-1.5,0.2,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCECQgfgGgWgJQgZgLgRgLQgQgKgQgPIA3hoQAbAYAhAPQAkAQAhAAQAfAAATgOQATgOAAgcQAAgcgYgRQgYgRgtAAIgvAEIAAhZQARgWAagdQAagbAVgSIiuAAIAAhvIFRAAIAABtQgmAXgfAbQgjAfgWAZQBJAFAlAnQAlAmAABGQAAAogQAdQgQAegbAUQgZAUglALQgkAKglAAQgkAAgegGg");
	this.shape_10.setTransform(-42.4,-1.3,0.2,0.2);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.3,-6.9,91.2,13.9);


(lib.t2_2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQC5QgjgQgYgaQgZgcgNgkQgNgmAAgpQAAgrANglQANgkAZgbQAYgZAjgQQAkgPAsAAQAtAAAjAPQAkAPAYAaQAZAbANAkQANAlAAArQAAApgNAmQgNAkgZAcQgYAagkAQQgjAPgtAAQgsAAgkgPgAgthHQgQAaAAAtQAAAsAPAcQAQAcAeAAQAfAAAPgcQAQgeAAgqQAAgtgQgaQgQgbgeAAQgdAAgQAbg");
	this.shape.setTransform(39.1,-0.4,0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiQDCIAAmDIEhAAIAABvIifAAIAAEUg");
	this.shape_1.setTransform(31.5,-0.4,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPC5QgkgQgYgaQgZgcgNgkQgNgmAAgpQAAgrANglQANgkAZgbQAYgaAkgPQAjgPAsAAQAsAAAkAPQAkAPAYAaQAZAbANAkQANAlAAArQAAApgNAmQgNAkgZAcQgYAagkAQQgkAPgsAAQgsAAgjgPgAgthHQgQAaAAAtQAAAsAQAcQAPAcAeAAQAfAAAPgcQAQgcAAgsQAAgsgQgbQgQgbgeAAQgeAAgPAbg");
	this.shape_2.setTransform(23.5,-0.4,0.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai0DCIAAmDICBAAIAABaIA+AAQAtAAAhAMQAhAMAUAUQAUAUAKAbQAJAaAAAdQAAAbgJAdQgKAcgUAUQgUAVghANQghANgtAAgAgzBmIAxAAQAYAAAOgQQAOgRAAgaQAAgZgOgPQgOgNgXABIgyAAg");
	this.shape_3.setTransform(15.2,-0.4,0.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyDCIAAiTIhiAAIAACTIiDAAIAAmDICDAAIAACJIBiAAIAAiJICCAAIAAGDg");
	this.shape_4.setTransform(6.4,-0.4,0.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACXDCIhDiPIgVAAIAACPIh7AAIAAiPIgUAAIhECPIiBAAIBsjDIgRgaIgVglQgJgSgLgHQgLgIgOAAIgSAAIAAhgIA3AAQAVABAQAEQAQAEAKAIQALAKAJAOQAKARAIAQIAbA0QAGAJAGAEQAHAFAIAAIAAiQIB7AAIAACQQAQgBAJgOIAYgvQANgYAGgKQAKgPAMgKQAMgKAPgHQAQgFAWgBIA0AAIAABgIgVAAQgcAAgQAjIgSAhQgKAQgIAGIBtDJg");
	this.shape_5.setTransform(-3.9,-0.4,0.2,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai4DCIAAmDIDaAAQBAAAAkAaQAlAaAAA0QAAAagKAWQgKAVgSAMQAZALANATQAOAVAAAhQAAAegLAWQgLAVgVAQQgSANgbAJQgcAGgdABgAg3BpIBBAAQARAAAOgIQAMgIgBgVQABgRgLgJQgMgIgRAAIhEAAgAg3gnIA+AAQAVAAAHgLQAJgJgBgPQAAghglAAIg9AAg");
	this.shape_6.setTransform(-13.9,-0.4,0.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhgDAQgWgJgPgPQgPgOgKgWQgJgVAAgbQAAgcAKgWQALgVARgNQATgPAVgJQAYgKAYgDIArgGIAlgCIAAgNQAAgrgtAAQgXAAgWAHQgYAIgUAMIgmhTIAZgNQASgIARgFQAZgIARgDQAWgEAVAAQBGAAAsAlQApAlAABMIAADxIhtAAIgKgeQgQAPgYALQgYAKgiAAQgYAAgWgHgAARAXQgNABgIADQgXAEgJAMQgKAMAAASQAAAQALAJQAKAKAUAAQALAAANgFQALgEAJgIIAAhGg");
	this.shape_7.setTransform(-22.4,-0.4,0.2,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai2EOIAAoSIBxAAIAGAeQAOgNAVgNQAWgNAfAAQAlAAAdAPQAeAOAUAaQAUAaALAmQALAnAAArQAAAtgMAiQgMAkgXAbQgWAbghAPQggAOgoAAQgkAAgZgLIAACXgAgiihQgLAHgHAHIAACpQAHADAJADQAHACANAAQAhAAATgaQATgYAAgvQAAgxgRgbQgRgagbAAQgRAAgLAIg");
	this.shape_8.setTransform(-30.2,1,0.2,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAvDCIAAkWIhdAAIAAEWIiDAAIAAmDIFjAAIAAGDg");
	this.shape_9.setTransform(-39.1,-0.4,0.2,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah4CVQg0gyAAhiQAAguAOglQAOgmAZgaQAagaAjgNQAigOAoAAQAhAAAaAJQAaAIASAOQATAOANATQANARAJATIhaA6QgNgagPgOQgPgPgVgBQgbABgSAXQgRAYAAAvQAAAwAVAZQAUAZAjAAQAeAAAUgLQAUgLASgRIApBhQgRAPgmAQQglAPg0AAQhWAAg0gzg");
	this.shape_10.setTransform(-47.1,-0.4,0.2,0.2);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.5,-6.9,93.8,13.8);


(lib.t2_1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjBEFIAAoJIFRAAIAAB6IjMAAIAAA+IA6AAQBdAAAzAsQA0AqAABRQAABQg0AtQg0AthcAAgAg8CbIA0AAQAeAAARgPQASgOAAgjQAAghgRgPQgRgPgfAAIg0AAg");
	this.shape.setTransform(18.7,0,0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiqEFIAAoJIFVAAIAAB6IjPAAIAAGPg");
	this.shape_1.setTransform(10.2,0,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AivEHIAAhYQAAgkALgYQAKgXAdgXIB5hdQAWgTALgRQALgQAAgWQAAgYgPgLQgOgNgZAAQgfAAgbAPQgdARgVARIg9hjQAOgLAVgNQAYgNAUgIQAWgJAcgGQAcgGAcAAQAmAAAgAKQAgALAXATQAWAUAMAcQANAcAAAmQAAAzgUAjQgWAigiAZIiRBvIDnAAIAABzg");
	this.shape_2.setTransform(-1.1,-0.1,0.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEECIAAlnIhWA2Ig5hoICzhqIBjAAIAAIDg");
	this.shape_3.setTransform(-10.3,0,0.2,0.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.8,-5.3,45.8,10.7);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCASIAQgSIgPgSIAEgEIAWAWIgYAXgAgYATIASgTIgRgSIAGgEIAVAWIgXAXg");
	this.shape.setTransform(40,0.4,1.157,1.158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAcIAAgUIgOAAIgEAKQgBAEgDADIgDACIgFABIgFAAIAAgIIADAAIACAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIADgDIADgIIgFgDIgDgDIgCgCIgBgHQgBgKAGgEQAFgFAJAAIAWAAIAAA3gAgIgRQgDAEAAAFQAAAFADADQAEAAAEABIAOAAIAAgUIgOAAQgDAAgFACg");
	this.shape_1.setTransform(33.2,0.6,1.157,1.158);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAnIAAg3IAHAAIAAA3gAgDgcQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_2.setTransform(28.8,-0.6,1.157,1.158);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARAjIAAgNIgpAAIAAg4IAJAAIAAAxIAZAAIAAgxIAIAAIAAAxIAHAAIAAAUg");
	this.shape_3.setTransform(23.9,1.4,1.157,1.158);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAcIgPgaIgIAAIAAAaIgJAAIAAg3IAJAAIAAAXIAGAAIACAAIACgCIACgDIAEgNIADgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAEgBIAFAAIAAAIIgDAAQgDAAgCABIgEAGIgEAHIgDAFIAVAcg");
	this.shape_4.setTransform(17.5,0.6,1.157,1.158);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAcQgEgBgDgCQgDgCgBgEQgBgDAAgFQAAgFADgFQADgCAFgCIAIgEIALAAIAAgBQAAgHgCgDQgEgEgFAAIgGACIgIAEIgCgGIAIgEQADgCAGAAQAJgBAFAFQAGAFgBAMIAAAjIgIAAIAAgFQgDADgDABQgEACgDAAQgDABgDgCgAADAAIgGABIgFADQgCADAAAEIABAGIACACIADACIAEABQADAAADgCIAFgEIAAgQg");
	this.shape_5.setTransform(10.7,0.6,1.157,1.158);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAcQgEgBgDgCQgDgCgBgEQgBgDAAgFQAAgGADgEQADgCAFgCIAJgEIAKAAIAAgBQAAgHgCgDQgEgEgEAAIgHACIgHAEIgDgGIAIgEQADgCAGAAQAJgBAGAFQAEAGAAALIAAAjIgIAAIAAgFQgDADgDABQgEACgDAAQgDABgDgCgAADAAIgGABIgFADQgCADAAAEIABAGIACACIADACIAEABQADAAADgCIAFgEIAAgQg");
	this.shape_6.setTransform(1.8,0.6,1.157,1.158);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAcIAAg3IAVAAQAKAAADADQAFAEgBAHQAAAFgCAEQgCAEgEAAIAEAAIADACIADAEIABAFQAAAJgFAEQgFAEgHAAgAgLAUIAOAAIADAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIADgCIAAgFQAAgEgDgCQgCgCgFgBIgNAAgAgLgDIALAAQAHAAAAgDQACgCAAgEQAAgIgIABIgMAAg");
	this.shape_7.setTransform(-4.1,0.6,1.157,1.158);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAbQgDgCgFgFIgEgKQgCgFAAgFIACgKIAEgJQAEgFAEgCQAFgCAFAAQAHAAAEACQAEADAEAEQADAEABAFQACAGAAAEQAAAFgCAFQgBAFgDAFQgEAEgEADQgFACgGAAQgFAAgFgCgAgGgTIgFAEQgDAEAAAEIgBAHIABAIIADAHIAFAFQAEACACAAIAHgCIAFgFIADgHIABgIIgBgHIgDgIIgFgEIgHgDQgCAAgEADg");
	this.shape_8.setTransform(-11,0.6,1.157,1.158);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUAcIgDgoIgPAoIgDAAIgPgoIgDAoIgHAAIADg3IAJAAIAOApIAPgpIAJAAIAEA3g");
	this.shape_9.setTransform(-18.7,0.6,1.157,1.158);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAcIAAglIgZAeIAAAHIgJAAIAAg3IAJAAIAAAlIAZgeIAAgHIAJAAIAAA3g");
	this.shape_10.setTransform(-26.3,0.6,1.157,1.158);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAmQgHgDgEgGIAFgHQAEAFAFADQAGADAFAAQAHAAAFgEQAEgEAAgHQAAgHgFgEQgFgEgGAAIgJgBIAAgFIAJAAIACgBQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBIAEgDIACgEIABgFQAAgGgDgEQgEgEgHAAQgGAAgEAEQgDACgEAGIgGgGQAEgGAGgEQAFgEAIAAQAGAAAFACQAEABADADQACACACAFIACAIIgBAHIgDAFQgBADgDACIgEACIAFABIAFAEIADAFIABAHQAAAEgCAGQgCAFgEADQgDADgFACIgKABQgIAAgGgDg");
	this.shape_11.setTransform(-33.3,-0.7,1.157,1.158);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAAIAVgWIAGAEIgRASIASATIgFAEgAgYAAIAWgWIAEAEIgPASIAQASIgDAFg");
	this.shape_12.setTransform(-40,0.4,1.157,1.158);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-5.5,86,11);


(lib.snowMc = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-125,125);

	this.instance_1 = new lib.snow();
	this.instance_1.setTransform(-125,-125);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125,-125,250,500);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logoSmall();
	this.instance.setTransform(-20,-20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.lightItem = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.259,1],0,0,0,0,0,6.6).s().p("AgjAiQgOgPAAgTQAAgSAOgRQARgOASAAQATAAAPAOQAQARAAASQAAATgQAPQgPAQgTAAQgSAAgRgQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-140,-177);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140,-177,280,355);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.snow_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snowMc();
	this.instance.setTransform(0,-249.2);

	this.instance_1 = new lib.snowMc();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125,-374.2,250,749.3);


(lib.lightMc2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.lightItem();
	this.instance.setTransform(-84.4,11.4);
	this.instance.alpha = 0.699;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.lightItem();
	this.instance_1.setTransform(-112.7,-1.8);
	this.instance_1.alpha = 0.699;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.lightItem();
	this.instance_2.setTransform(-84.4,51.7);
	this.instance_2.alpha = 0.699;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.lightItem();
	this.instance_3.setTransform(-109.1,74.1);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.lightItem();
	this.instance_4.setTransform(-69.7,67);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.lightItem();
	this.instance_5.setTransform(-160.3,21.4);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.lightItem();
	this.instance_6.setTransform(-91.3,39.7);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.lightItem();
	this.instance_7.setTransform(-119.8,18.9);
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.lightItem();
	this.instance_8.setTransform(-166.4,-3.2);
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.lightItem();
	this.instance_9.setTransform(-69.7,89.2);
	this.instance_9.compositeOperation = "lighter";

	this.instance_10 = new lib.lightItem();
	this.instance_10.setTransform(-135.8,115.6);
	this.instance_10.compositeOperation = "lighter";

	this.instance_11 = new lib.lightItem();
	this.instance_11.setTransform(-140.3,90.5);
	this.instance_11.compositeOperation = "lighter";

	this.instance_12 = new lib.lightItem();
	this.instance_12.setTransform(-124,39.7);
	this.instance_12.compositeOperation = "lighter";

	this.instance_13 = new lib.lightItem();
	this.instance_13.setTransform(-127,59);
	this.instance_13.compositeOperation = "lighter";

	this.instance_14 = new lib.lightItem();
	this.instance_14.setTransform(-162.8,80.5);
	this.instance_14.compositeOperation = "lighter";

	this.instance_15 = new lib.lightItem();
	this.instance_15.setTransform(-152.8,45.8);
	this.instance_15.compositeOperation = "lighter";

	this.instance_16 = new lib.lightItem();
	this.instance_16.setTransform(-119.8,-84.6);
	this.instance_16.compositeOperation = "lighter";

	this.instance_17 = new lib.lightItem();
	this.instance_17.setTransform(-79.7,115.6);
	this.instance_17.compositeOperation = "lighter";

	this.instance_18 = new lib.lightItem();
	this.instance_18.setTransform(-142.8,-42.3);
	this.instance_18.compositeOperation = "lighter";

	this.instance_19 = new lib.lightItem();
	this.instance_19.setTransform(-147,-87.3);
	this.instance_19.compositeOperation = "lighter";

	this.instance_20 = new lib.lightItem();
	this.instance_20.setTransform(-94.4,-14.9);
	this.instance_20.compositeOperation = "lighter";

	this.instance_21 = new lib.lightItem();
	this.instance_21.setTransform(-124,-29.3);
	this.instance_21.compositeOperation = "lighter";

	this.addChild(this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-171.4,-92.3,106.7,212.9);


(lib.lightMc1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.lightItem();
	this.instance.setTransform(-174,36.4);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.lightItem();
	this.instance_1.setTransform(-76.7,98.3);
	this.instance_1.alpha = 0.699;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.lightItem();
	this.instance_2.setTransform(-158.1,-39.3);
	this.instance_2.alpha = 0.699;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.lightItem();
	this.instance_3.setTransform(-132.2,104.9);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.lightItem();
	this.instance_4.setTransform(-149.6,-86.3);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.lightItem();
	this.instance_5.setTransform(-129.4,36.4);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.lightItem();
	this.instance_6.setTransform(-139.4,14.6);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.lightItem();
	this.instance_7.setTransform(-113.8,-49.3);
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.lightItem();
	this.instance_8.setTransform(-107.9,1.2);
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.lightItem();
	this.instance_9.setTransform(-95.8,64.2);
	this.instance_9.compositeOperation = "lighter";

	this.instance_10 = new lib.lightItem();
	this.instance_10.setTransform(-107.9,76.4);
	this.instance_10.compositeOperation = "lighter";

	this.instance_11 = new lib.lightItem();
	this.instance_11.setTransform(-82.3,26.4);
	this.instance_11.compositeOperation = "lighter";

	this.instance_12 = new lib.lightItem();
	this.instance_12.setTransform(-159.6,64.2);
	this.instance_12.compositeOperation = "lighter";

	this.instance_13 = new lib.lightItem();
	this.instance_13.setTransform(-84.1,42.6);
	this.instance_13.compositeOperation = "lighter";

	this.instance_14 = new lib.lightItem();
	this.instance_14.setTransform(-168.1,95.4);
	this.instance_14.compositeOperation = "lighter";

	this.instance_15 = new lib.lightItem();
	this.instance_15.setTransform(-138.2,74.2);
	this.instance_15.compositeOperation = "lighter";

	this.instance_16 = new lib.lightItem();
	this.instance_16.setTransform(-110.6,29.8);
	this.instance_16.compositeOperation = "lighter";

	this.instance_17 = new lib.lightItem();
	this.instance_17.setTransform(-134.7,-22.2);
	this.instance_17.compositeOperation = "lighter";

	this.instance_18 = new lib.lightItem();
	this.instance_18.setTransform(-166.7,-4);
	this.instance_18.compositeOperation = "lighter";

	this.instance_19 = new lib.lightItem();
	this.instance_19.setTransform(-178.1,-51.9);
	this.instance_19.compositeOperation = "lighter";

	this.instance_20 = new lib.lightItem();
	this.instance_20.setTransform(-112.2,-69);
	this.instance_20.compositeOperation = "lighter";

	this.instance_21 = new lib.lightItem();
	this.instance_21.setTransform(-141.9,-62.7);
	this.instance_21.compositeOperation = "lighter";

	this.instance_22 = new lib.lightItem();
	this.instance_22.setTransform(-164,19.8);
	this.instance_22.compositeOperation = "lighter";

	this.addChild(this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.1,-91.3,111.4,201.3);


(lib.snowMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.snow_1();
	this.instance.setTransform(0,-749.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},359).wait(1));

	// Слой 1
	this.instance_1 = new lib.snow_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:749.3},359).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-1123.5,250,1498.5);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.s1 = new lib.snowMovie();
	this.s1.setTransform(0,0,1.2,1.2,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(21));

	// Слой 4
	this.instance = new lib.lightMc2();
	this.instance.setTransform(125.7,103.8,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).wait(5).to({alpha:1},5).wait(6));

	// Слой 3
	this.instance_1 = new lib.lightMc1();
	this.instance_1.setTransform(142.1,124.2,1.6,1.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},5).wait(5).to({alpha:0},5).wait(6));

	// Слой 2
	this.instance_2 = new lib.bgImg();
	this.instance_2.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-1348.2,301,1798.2);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_142 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(142).call(this.frame_142).wait(1));

	// t3
	this.instance = new lib.t3();
	this.instance.setTransform(54.3,-143.5,1.274,1.274,0,0,0,0,-0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(132).to({_off:false},0).to({x:64.7,alpha:1},10).wait(1));

	// t5
	this.instance_1 = new lib.t5();
	this.instance_1.setTransform(71.3,-76,1.313,1.313);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(117).to({_off:false},0).to({x:81.7,alpha:1},10).wait(16));

	// t4
	this.instance_2 = new lib.t4();
	this.instance_2.setTransform(79.3,-96.5,1.3,1.3,0,0,0,0,-0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(112).to({_off:false},0).to({x:89.7,alpha:1},10).wait(21));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.setTransform(60.1,-176.4,1.404,1.404);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(97).to({_off:false},0).to({x:70.5,alpha:1},10).wait(36));

	// t2_3
	this.instance_4 = new lib.t2_3();
	this.instance_4.setTransform(44.6,-205.9,1.69,1.69);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82).to({_off:false},0).to({x:55,alpha:1},10).wait(51));

	// t2_2
	this.instance_5 = new lib.t2_2();
	this.instance_5.setTransform(47.4,-230.8,1.69,1.69,0,0,0,0,-0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(77).to({_off:false},0).to({x:57.8,alpha:1},10).wait(56));

	// t2_1
	this.instance_6 = new lib.t2_1();
	this.instance_6.setTransform(81.8,-257.6,1.69,1.69);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72).to({_off:false},0).to({x:92.2,alpha:1},10).wait(61));

	// img1
	this.instance_7 = new lib.img1_1();
	this.instance_7.setTransform(-298,122);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({x:-3},14,cjs.Ease.get(1)).wait(105));

	// logo
	this.instance_8 = new lib.logo();
	this.instance_8.setTransform(-71.7,-182.9,0.019,0.019);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(43).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9).to({scaleX:1,scaleY:1},5).wait(86));

	// redLine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E11021").s().p("Aw+opIAAqOMAh9Ah8IAADzg");
	this.shape.setTransform(22,-291.5,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E11021").s().p("A2LnQIKarnMAh9Ah7IAAD0g");
	this.shape_1.setTransform(55.3,-291.5,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E11021").s().p("A2zBUILq0LMAh9Ah7IAAD0g");
	this.shape_2.setTransform(59.3,-291.5,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E11021").s().p("A12JQIAAt4IJxuPMAh8Ah7IAAD0g");
	this.shape_3.setTransform(53.3,-291.5,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E11021").s().p("A4bQMIDqrEILQ3/MAh9Ah7IAAD0g");
	this.shape_4.setTransform(69.7,-291.5,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E11021").s().p("A2CCBILK3eMAh9Ah7IAAD0MguJAFMg");
	this.shape_5.setTransform(61,-274.9,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E11021").s().p("A35hdIN23gMAh9Ah8IAAD0MgsIAMKg");
	this.shape_6.setTransform(66.3,-252.6,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E11021").s().p("A3bnHIM61nMAh9Ah7IAAD0MgsFATug");
	this.shape_7.setTransform(63.3,-228.4,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E11021").s().p("A4DnwIOK6UMAh9Ah9IAADyMgtNAeag");
	this.shape_8.setTransform(67.3,-194.2,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E11021").s().p("EgY9AkMMABgg3hIOe1oMAh9Ah+IAADzMgsrAsKg");
	this.shape_9.setTransform(73.2,-150.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},58).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(76));

	// bg
	this.instance_9 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:0,compositeOperation:NaN},15).wait(128));

	// bgImg
	this.instance_10 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(143));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-1348.2,301,1798.2);


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
p.nominalBounds = new cjs.Rectangle(149,-748.2,302,1798.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;