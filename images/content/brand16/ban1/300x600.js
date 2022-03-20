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
		{src:"images/cap.png", id:"cap"},
		{src:"images/glass.png", id:"glass"},
		{src:"images/smallBox.png", id:"smallBox"},
		{src:"images/smallBoxBlur.png", id:"smallBoxBlur"},
		{src:"images/splash.png", id:"splash"}
	]
};



// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.cap = function() {
	this.initialize(img.cap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,62);


(lib.glass = function() {
	this.initialize(img.glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,190);


(lib.smallBox = function() {
	this.initialize(img.smallBox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,95);


(lib.smallBoxBlur = function() {
	this.initialize(img.smallBoxBlur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,109);


(lib.splash = function() {
	this.initialize(img.splash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,75);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3652A5").s().p("AjYCEQgJgEgBgNIgChqQgPA0gSAeQgMAVgNALQgOALgKABQgLAAgIgLQgIgLABgVQAAgYAZAAQAHAAAIAGQgHAOAAAPQAJgFAHgHQAGgHAJgNQAIgNAJgbQAKgbAJggQgdADgPAQQgIgLAAgJQAAgQAMgIQAMgIATAAQAoAAAPAGIAEB/IA8hpQAJgPAHgFQAIgFAKAAQAKAAAJAFIgSB7QgCAPADAHQAEAHAGAAQALAAALgGQAHgEAHgGIAVhhQABgKgFAAQgCAAgGAFQgDgCgBgHIAAgCQAAgGAEgEQAYgSARAAQATAAAAAOIgBAGIgXBsIgBANQAAAQANAAQAKAAAKgGQAGgDAJgHIAVhhQABgFgBgCQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgDAAgFAFQgEgDgBgGQAAgHAFgFQAYgSASAAQALAAAFAFQAFAFgDALIgNA8QAXgBAYgEIAMg0QADgNAIgFQAJgGALAAQAKAAAHAEIgaB8QgHAdASAAQAKAAALgGQAGgDAJgHIAUhhQADgKgGAAQgCAAgGAFQgDgCgBgHIAAgCQAAgGAEgEQAYgSATAAQATAAAAAOIgYByQgCAGAAAHQAAAQAOAAQAJAAALgGQAMgFAHgJQAGADABAHQgBAEgDAEQgOAQgSALQgTALgRAAQgIAAgHgDQgGgCgGgFQgFgFgDgJIAAgEQgcAcgbAAQgGAAgEgCQgGgBgEgCQgGgDgDgEIgGgLQgDgGAAgKQAAgHADgOIAIglQgaAIgXABIgNBAQgEAMgHAGQgJAGgMAAQgIAAgJgFIAEgUQgKAJgJAFQgSALgQAAQgHAAgIgDQgGgCgGgFQgGgFgCgJIAAgEQgKAJgNAIQgTALgOAAIgKgBIgJgEQgGgDgDgEQgDgDgDgHQgDgHAAgJIALhXIhDB7IgKACQgGAAgFgDgAEPhZQgFgGAAgIIABgEQAAgMAJgHQAJgIAKAAQALAAAHAIQAHAHAAAJIAAADQgDAMgIAHQgIAHgLAAQgMAAgHgIgAgFhZQgGgGAAgIIABgEQABgMAIgHQAHgIAKAAQAMAAAGAIQAHAGAAAKIAAADQgCALgIAIQgJAHgLAAQgLAAgFgIg");
	this.shape.setTransform(69.1,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9122B").s().p("AwcFpQgGgCgFgEQgGgEgDgHQgEgHAAgJQAAgHADgIIAGgNIAMgMIANgKIARgJIAmgTIABAAIAGgXQgTAZgUAAQgIAAgHgEQgFgCgEgGQgDgHAAgGQgCgHABgJIADgQIANg9QABgEgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQgCAAgEADQgDgBAAgGQgBgFAEgEQATgOAOAAQAJAAAEAEQADADgBAJIgSBVQgCAIACAFQACAEAIAAQAKAAAMgLIAUhZQABgJAIgFQAHgEAJAAQAIAAAGAEIgcCBQAcgNAOgMQAEADAAAEQAAAEgEADQgDAEgPAJIgcAPIgOAvIgKAVQgEAIgIAKQgGAJgIAGQgIAGgJADQgKAEgMAAQgFAAgHgDgAv2EaQgKAGgIAHQgJAHgDAGQgFAHAAAJQAAAIAFACQADAEAFAAQAPAAAJgQQALgOAMgmQgLAFgOAHgAoVFlIAvjfQABgEgBgBQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgCAAgEADQgDgCgBgFQAAgGAEgDQASgOAPAAQAJAAAEAEQADADgCAJIgBAHQATgXAVAAQANAAAJAGQAJAHADALQAEAKAAAOQAAARgGASQgGATgLAPQgJAOgRALQgPAKgUAAQgLAAgJgIIgVBjQgBAJgHAFQgGAEgKAAQgHAAgGgEgAnHCUIgRBOQAIADAHAAQALAAAKgHQAKgHAFgKQAGgKAEgNQAEgLAAgMQgBgPgFgHQgEgIgIAAQgPAAgPATgAtGFdQgKgIAAgQQAAgTAUAAQAGAAAFAFQgEAFAAAIQgBAOAJAAQADAAAFgCQAFgCADgGIAGgKIALgeIANg1QgQARgSAAQgJAAgGgEQgHgDgDgFQgDgEgDgIIgDgNIgBgNQABgXAIgYQAIgXAQgPQASgRAUAAQAPAAAIAOIAFgXQAGgeASgQQARgRAWAAQALAAAGAGQAFAGAAAHQAAAGgEADQgEADgFAAQAAgJgLAAQgJAAgHALQgFAKgFAVIgFAYQAQgQATAAQAJAAAGADQAGADAEAGQAEAFACAHIADANIAAAMQAAAagIAWQgIAXgQAPQgRARgVAAQgRAAgHgQIgCAKQgHAigIASQgJAXgJAMQgJAMgNAGQgLAGgOAAQgOAAgKgIgAq9CCQgDABgHAHIgRBOQACAGACACQADACAFAAQAKAAAHgGQAIgFAFgIQAFgKACgJIAEgUIABgQQAAgYgSAAIgJACgAsGCBQgIAGgFAIQgEAJgCALQgEAMgBAIIgBARQAAAYARAAQAFAAAEgCQAEgCAGgHIARhPQgCgGgCgCQgCgDgFAAQgKAAgHAGgAkXD6QgHgEAAgKIgChSQgNAqgNAWQgJARgKAIQgKAJgJAAQgJAAgHgJQgFgIAAgQQAAgTAUAAQAGAAAGAFQgFALgBAMIANgKQAEgEAHgMQAHgKAGgVQAFgLAKglQgXACgLANQgGgHAAgIQAAgNAKgGQAIgHAPAAQAfAAAMAFIADBlIAwhUQAGgKAFgFQAGgEAJAAQAIAAAGAEIgNBiQgCAMACAFQACAFAHAAQAIAAAIgFQAFgCAHgGIAAgJQgBgbALgXQAKgXARgPQARgPAUAAQAVAAAJAJQAIgIANAAQAHAAAGAEIgUBiQgFAWAOAAQAIAAAIgFQAEgCAFgFIARhOQABgEgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQgCAAgEADQgEgBAAgGQAAgFAEgEQAUgOAOAAQAIAAAEAEQAEAEgDAIIgCANQAUgdAYAAQAKAAAIAIQAIAIgCAOQAVgeAYAAIAIABQAFABADADQAFADACAFQADAGAAAHQABAHgCAKIgOBFQgCAGADADQABADAFAAQAJAAAHgFQAGgCAHgGIAPhNQACgHgFAAQgBAAgFADQgDgBAAgGIAAgBQAAgFADgDQATgOAPAAQAPAAAAALIgBAFIgUBfQAAANALAAQAIAAAIgFQAJgFAGgFQAFACAAAFQAAADgDAEQgKANgPAIQgOAIgPAAIgLgCQgFgCgEgEQgFgDgBgHIgBgEQgHAHgLAHQgOAIgOAAIgJgBIgIgEQgDgDgCgEIgDgMQAAgJACgJIAMg7QADgIgCgFQgBgFgHAAQgNAAgNAOIgSBWQgCAKgHAEQgHAFgIAAQgJAAgGgEIAVhhQACgIgBgFQgCgFgGAAQgPAAgNAQIgSBUQgBAKgIAEQgGAFgJAAQgJAAgGgEIAEgPQgEAGgJAEQgOAJgMAAQgMAAgIgHQgHgGAAgRQgKAOgMAIQgLAIgMAAQgKAAgHgEQgGgDgEgFQgFgHgCgFIgBgDQgJALgNAHQgNAJgNAAIgIgBIgIgDIgGgFIgEgIQgD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ADQAIABADACQAEADAAADIgTBaQgEAWANAAQAIAAAIgFQAIgEAFgEIgCgMQAAgJADgMQABgHAFgPQADgLAIgLQAGgKAIgIQAJgJAKgEQALgEALAAQALAAAGACQAHACADAFQAEAFABAEIACAKQAAAKgDAIQgDAJgIAJQgIAKgNAJQgNAJgWANQADAWAYAAQAOAAATgJQATgKAKgNIAMg8QACgDgCgCQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgDAAgEADQgCgBgBgGQAAgFADgEQATgOAPAAQAHAAAEAEQAEAEgCAIIgKAxQAUgBARgDIAJgrQADgJAFgFQAIgEAIAAQAHAAAGAEIgUBiQgFAWAOAAQAHAAAKgFIALgHIAAgCIACgPIAOg9QABgEgBgBQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgCAAgEADQgCgBgBgGQAAgFADgEQATgOAOAAQAJAAADAEQAEADgCAJIgSBUQgEASAOAAQAPAAANgQIAPhUQADgJAGgFQAHgEAJAAQAIAAAHAEIgWBiQgEAWANAAQAIAAAJgEIALgIIAAgCIADgPIAOg9QABgEgBgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgDADQgDgBAAgGQgBgEAEgFQASgOAPAAQAIAAAEAEQAEAEgCAIIgSBUQgDASANAAQAOAAANgQIAShUQACgJAHgFQAHgEAIAAQAIAAAHAEIgVBiQgFAWAOAAQAIAAAIgFQAJgFAFgFQAGACAAAFQAAADgDAEQgLAMgOAIQgOAJgMAAIgLgCIgJgFQgEgDgCgHQgCgHAAgJQgUAhgWAAQgKAAgHgEQgGgFgDgFIgDgLQgLALgKAGQgOAIgMAAIgLgCIgHgFQgFgEgBgGQgCgGAAgKQgUAhgXAAQgJAAgHgEQgGgEgDgGQgEgFAAgGQgXAZgXAAIgIgBIgIgDQgEgBgCgEQgCgDgDgGQgCgEAAgIIABgRIAHgcQgVAGgRABIgLAxQgCAKgGAEQgHAFgIAAQgJAAgGgEIAHgcQgLALgPAIQgXANgWAAQgWAAgPgOQgFgGgEgIQgJAMgPAHQgNAJgNAAIgKgBIgIgDQgEgBgCgEQgDgDgCgGQgBgGAAgHQAAgIACgJIAShSIgTACQgOA+gUAgQgIAQgLAJQgKAJgKAAIgBAAQgIAAgGgJgAklj7QgHAFgFAIIgHASIgEASIgBAQQAUgNAPgRQANgPAAgOQAAgEgCgEQgCgDgFAAQgIAAgHAFgAvciHQgFgHAAgRQAAgTAUAAQAGAAAFAFQgEAKgBANIAKgHIAJgLQAFgIAFgKIALgbQAGgSAGgWQgbAEgJAJQgGgGAAgJQAAgMAKgHQAJgHAOAAIAxADIAQADQAJABAEACQADADAAADIgTBaQgFAWAOAAQAIAAAJgFQAGgDAEgEIARhOQACgHgEAAQgCAAgFADQgDgBAAgGQAAgFADgEQATgOAPAAQAHAAAEAEQAFADgDAJIgKAxQAUAAAOgGQAKgbARgQQASgRAXAAQAXAAALAPQAMAPAAAXQAAAMgEAPQgDAMgHAPQgIAOgJAJQgKALgLAGQgNAGgNAAQgLAAgJgEQgJgFgFgHQgGgJgCgIQgCgKAAgKQAAgMADgMQgOAIgSABIgMAxQgCAKgGAEQgHAFgIAAQgJAAgFgEIADgPQgHAGgIAEQgNAJgNAAIgKgBIgIgDQgDgBgEgEIgDgJQgCgGABgHQgBgGADgLIARhSIgSACQgQA+gSAgQgKARgKAIQgKAJgJAAIgBAAQgJAAgGgJgAqzj7QgJAHgFAKQgFAIgEAPQgDAMAAALQAAATAFAIQAGAJAIAAQALAAALgNQAJgMAGgSQAFgTAAgOQAAgMgDgJQgFgIgJAAQgJAAgJAGgARDh/IgIgEQgEgDgCgEIgDgMQgBgIAEgKIAMg7QACgHgBgGQgBgFgIAAQgMAAgNAOIgTBWQgBAKgIAEQgGAFgJAAQgJAAgFgEIAUhhQADgHgCgGQgBgFgGAAQgQAAgMAQIgSBUQgCAKgHAEQgGAFgKAAQgIAAgGgEIAZhyQAAgEAAgBQgBgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgDADQgEgBAAgGQAAgEAEgFQASgOAPAAQAIAAAEAEQAEADgCAJIgDANQAUgdAYAAQAKAAAIAIQAHAHAAAPQAVgeAXAAQAFAAADABQAEABAFADQAEADADAFIADANQABAHgDAKIgOBFQgCAGADADQACADAEAAQAJAAAIgFQAHgDAIgHQAFACAAAFQAAAEgDADQgLAMgOAJQgOAIgPAAIgIgBgAphiCQgJgEgEgIQgFgGgDgKQgCgHAAgNQgBgQAGgPQAGgSAJgNQAJgOAOgIQAPgJAPAAIAJABIgKgLIghgVIAAgKIACgIQACgGADgDQADgDAGgCQAFgCAIAAIAaABIAbACQAMAAAIgCQADAGgBAIQgCAJgGAGQgGAGgKAAQgMAAgTgDIgcgFIAcAYQAJAIAEAHQAGAKACAIQADAJAAALQAAAOgCAOQgDANgGAPQgHANgIALQgHALgNAHQgLAHgNAAQgKAAgJgEgAo7j3QgIAHgFAJQgEAKgEAMQgCAMAAALQgBAMAFAHQAEAHAJAAQAJAAAIgHQAJgKADgKQAFgMADgNQADgNAAgLQAAgIgDgJIgNgBQgKAAgIAHgABskpQgHgJgBgMQABgKAGgHQAHgIALAAQAHAAAEADQgBAEAAAFQgBAGAEAEQAFADAFAAQAIAAAIgGQAIgGAEgLQAFgBAEADQACACAAAGQgBARgRAMQgPANgYAAQgOAAgIgIg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.6,-36.4,231.3,72.9);


(lib.splash_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.splash();
	this.instance.setTransform(-86.5,-37.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.5,-37.5,173,75);


(lib.smallBoxBlur_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.smallBoxBlur();
	this.instance.setTransform(-57,-54.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-54.5,114,109);


(lib.smallBox_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.smallBox();
	this.instance.setTransform(-57,-47);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57,-47,114,95);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBCQgIgEgDgGQgOAMgRAAQgQABgMgOQgNgRAAgaQAAgcARgZQARgaAWAAQAIAAAGADIAEAFQADgHAJAAIAaAAIgLBUIAAAJQADAGAJgBIgEAdQgDAHgLAAQgGAAgGgCgAgMgWQgGAIgDANQgCAMADAKQADALAIABQAIABAEgJQAIgIABgNQADgLgEgLQgDgLgIgBIAAAAQgGAAgGAIg");
	this.shape.setTransform(-14,-33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBJQgLgMADgYIAHg6IgMAAIAFgfQAPgCAIgRQAGgLAIAAIAMAAIgDAdIATAAIgDAWQgBAKgLAAIgIAAIgGA2QgBAKAHAEIANACQgDAigWAAQgNAAgJgKg");
	this.shape_1.setTransform(5.1,-35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA2QgRgPAAgeQABgbARgYQASgaAaAAQAUAAAKAPQALAOAAAZQgBAOgDAJIg9AAQABAdAWAAQAOAAAIgMIAMARQACAFAAADQgBACgEAEQgPAMgYAAQgWAAgOgPgAgLgLIAbAAQACgYgLAAQgLAAgHAYg");
	this.shape_2.setTransform(13.2,-34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA7QgXgPAAgjQAAgiAWgWQATgWAgABQALAAgBAKIgDAXQgVABgNAMQgJALAAASQAAAiAmgGIgCAZQgBAIgJAAIgJABQgRAAgOgKg");
	this.shape_3.setTransform(-3.4,-34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBjQgegPgMgXQgOgbAHgtIAOhQQABgJAOAAIAVAAIgPBjQgDAbAHARQAIAQAWAKIgKAbQgDAFgDAAIgEgCg");
	this.shape_4.setTransform(22.8,-35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBwQgmgTgNggQgMgeAHguIAOhYQACgJAOAAIAVAAIgOBqQgGAjAJAVQALAVAfANIgOAYQgDAFgEAAIgFgBg");
	this.shape_5.setTransform(-20.8,-33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAdQgFgLgBgLIABgHQgKgFgGgHIAAgCIAEgDQAFAMAMAAQAKAAAIgPIADADQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAAAQgOAPgDALQgBAGADAMIgGACQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAgAAAgLQgDAAgBgEQgBgDABgEQABgEADgCQABgCADABQAGABgCAKQgDAIgFAAIAAgBg");
	this.shape_6.setTransform(0.4,-20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#369536").s().p("AglA2QgdgGgZgTQA0AXA3giQA8gjALgFQAjgSAhABQANAAANADQANAEAIAGQgzgFgwAfIg3AlQgTAMgPAEQgNAEgNAAQgMAAgNgDgAg4AfQgRgBgSgHIgjgPQgpgPgiAAQAvgcA1AdQAuAXAcAFQAFgBgDgGIgDgGIgCgHQgRADgEgGQgFgIAMgJQgRgIAGgKQAGgJAVAFQAHgPALgBQAKAAAAAOQAOgCAFAJQAEAJgOAHQAOAKgGAJQgGAGgQgFIAAACQgBAKABAHQgBADgHACQgQAGgXAAIgEAAg");
	this.shape_7.setTransform(2.3,-19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#105399").s().p("AApCAQABgFgBgEQgDgNgSAAQgBgFgDgEQgFgFgGAAQgKAAgKAPIgJgBQgTAAgDANIAAAHQgOAHgLANIgNgHQgtgWgmAQIgEgHIgDAEQgHAKgKAAQgFAAgEgCQgtgUgPglQgNghAIgyIAOhXQABgJAIgFQAHgFALAAIAXAAQAFAAAEAEQADAFAAAEIgKBCIADgFQAOgVATgGQAZgoApgWQAqgYAwAAQAtAAApAWQAnAVAaAlQAUADAMAQQADADABAEIAJgwQABgJAHgFQAHgFALAAIAYAAQAGAAADAEQADAEgBAFIgPBhQgEAbAHANQAGAMASAHQAFACACAEQABAFgBAEQgDALgIARQgFAMgMAAQgEAAgFgDQgjgRgNgaIgCgDQgCAGgHAFQgDAOgGAPQgZAAgcANQgRAIggAUQgJgMgMgIg");
	this.shape_8.setTransform(0.7,-35.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhaA1QgmgJgcgdIAkAIQAqAEAggRQAbgMAxghQAtgZAoAHQAdAEANAQIAAACQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQgPgDgXAFQgiAHgcAVQgoAagQALQgVAMgRAEQgMADgMAAQgNAAgOgDg");
	this.shape_9.setTransform(7.4,-19);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATAbIgrgSQgxgSggABIgCAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAMgOAXgGQAigKAnATIAaAOQAOAHAKADQAkAMAWgCQgZATgeACIgDAAQgMAAgUgHg");
	this.shape_10.setTransform(-7.9,-19.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhdAKIAVgmIBGgjIAeADQAgADADAEIARAfIAOAYIgZAmIhBAYg");
	this.shape_11.setTransform(0.2,-21.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhlBmQgcgfAGgzQAGgxAkgpQAqgvA6gJQA1gHAeAfQAdAegHAzQgHA0gnAqQgpAtg2AIQgLACgKAAQgnAAgYgagAAHhtQgbAEgWAdQgYAggFAsQgFAvASAhQASAiAigFQAXgEAVgZQAagfAGgyQADgVgCgSQgDgegPgUQgQgUgWAAIgIABg");
	this.shape_12.setTransform(-21.6,6.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrDDQgLABgUgCQgPgBABgcQAAgGANhbQAZi0ACgFQAFgMAYgHQAOgFAOgCQgVCAgMBSQgFAlgGAyQgBAPAOABQAygJAsg4QA2hDgEheQgDhBgpggQgqghg9AUQg+AUgoA2QgVAcgIAXQgIgCgIgHQgPgOAEgYQAFggAugdQAvgdA+gLQBNgPA6AdQBEAgAFBMQAHBthUBTQhIBGhIAAIgHAAg");
	this.shape_13.setTransform(-54.2,4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhsB+QgFgCADgHIADgHQALAFAHgCQARgDAQglQAIgVARg4QAHgZAMgaQAMggAWgUQAWgSAWgDQAhgEAIARQAKASgJA9QgNBYgEAoQgCALgMABIgaADQgHABgCgDQgBgDABgHQADgNAQhlQAIg1AAgQQABgXgKAAQgOABgLAdQgEAMgPA5QgRBKgQAaQgYAlgvAEIgHAAQgIAAgFgDg");
	this.shape_14.setTransform(-2,4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA8B2QgbgBgFgTQgFgQAIgsQgfAigkADQgqAFgOgXQgNgUAGgwIAJhQQABgJAMgCIAbgCQAMgCgCAOIgIAuQgKA4ADAUQAEAcAagDQAUgCARgUQAXgYAGgoIAKhIQACgLAMAAIAbgDQANgBgEAOQgHAfgOBIQgLA8ADAWQADAWASgBQABALgJADQgGACgLAAIgIAAg");
	this.shape_15.setTransform(41.5,-1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhWBzQgEgGACgLIAPhfQAGgpAHhCQABgKANgBIAagDQANgCgDAOQgNBBgEAaIAVgEQAYgDASABQAcABAOAMQAQANgFAcQgLBFhwANIglAEIgEABQgHAAgEgFgAAAgCIgdACQgLBGAAASQAAAEABACQACACAFgBQAcgBATgOQAYgQAEgcQAGgngpAAIgIABg");
	this.shape_16.setTransform(20,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhdBXQgUgdAIguQAJgyAigkQAlgnAzgFQAsgDAWAWQAWAWgIApQgEAXgSAKQgRAIgoADIhSAHQgFAqAMATQAQAaAugEQARgBAPgFQADAMgJAFQgKAGgkADIgOABQgzAAgWgggAAVhnQgYACgVAcQgVAcgIAsIAAABIAtgDQAigDAOgJQAOgJAEgXQAFgcgKgPQgJgNgTAAIgEAAg");
	this.shape_17.setTransform(62.9,-2.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#DA2D26","#CD2620","#BB211B","#6C130C"],[0.165,0.369,0.565,1],0,-0.6,0,0,-0.6,66.5).s().p("ArmEJQheiHAfiaQAhipCihKQBqgqC/gQQBZgIEJgJQDigHBzgQQCqgYBTg3QCrCpAHDFQAICzh/BlQhjBOiqAWQhBAIi6ABQjyAAhPAIQkMAagiBkQjHgsheiIg");
	this.shape_18.setTransform(2.2,2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ApgGKQhZgwg3hOQgxhHgPhVQgPhVAVhPQAUhKAyg5QAyg5BJgiQBkgnCvgSQBpgLDggHQD/gKBzgPQC/gYBWg6IAFgCIADADQBIBIAsBRQAsBRAMBUQAXBsgfBeQgdBehIA5QhkBPiqAVQhEAJi3AAQjwAAhRAIQkMAbgiBjQhigWhHgrg");
	this.shape_19.setTransform(1.1,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0)","rgba(221,186,82,0)","#DDBA52","#D5A749","#C8883E","#C7853D","#C9893E","#CE9643","#D6AB4B","#DFC056"],[0,0.788,0.788,0.839,0.902,0.91,0.929,0.949,0.976,1],-80.7,-5.9,80.9,4.9).s().p("ApoGFQhNgwgyhIQhdiHAfibQAhioCihKQBqgqC9gSQBWgJEKgNQDggLBzgSQCpgaBTg3QCzCrAHDZQADBcghBQQggBOg8AwQhjBPiqAVQhBAJi6AAQi1gKiLAJQkMASgiBjQhcgUhKgvg");
	this.shape_20.setTransform(3.3,2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#DFC056","#DEBE55","#DCB751","#D6AB4B","#CF9A44","#C7853D","#DFC056","#FFE5A6","#FDE19E","#F4D786","#E4C560","#DFC056","#DDBA52","rgba(221,186,82,0)","rgba(0,0,0,0)"],[0,0.031,0.051,0.071,0.09,0.11,0.212,0.486,0.537,0.62,0.729,0.757,0.788,0.788,1],-80.7,-5.9,80.9,4.9).s().p("ApoGFQhNgwgyhIQhdiHAfibQAhioCihKQBqgqC9gSQBWgJEKgNQDggLBzgSQCpgaBTg3QCzCrAHDZQADBcghBQQggBOg8AwQhjBPiqAVQhBAJi6AAQi1gKiLAJQkMASgiBjQhcgUhKgvg");
	this.shape_21.setTransform(3.3,2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0)","rgba(221,186,82,0)","#DDBA52","#D5A749","#C8883E","#C7853D","#C9893E","#CE9643","#D6AB4B","#DFC056"],[0,0.788,0.788,0.839,0.902,0.91,0.929,0.949,0.976,1],-83,-6.3,82.7,4.7).s().p("ApqGMQhUg3g2hOQhliRAdidQAeiuCxhRQBvgsDHgRQBkgJEOgJQDugIB0gPQCugXBRg2QCrCpgEDSQgCBbgkBMQgkBNg9AwQhkBQitAWQhFAJi5AAQinAAiIAXQj6AogiBmQhwgThcg7g");
	this.shape_22.setTransform(-1.1,2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#DFC056","#DEBE55","#DCB751","#D6AB4B","#CF9A44","#C7853D","#DFC056","#FFE5A6","#FDE19E","#F4D786","#E4C560","#DFC056","#DDBA52","rgba(221,186,82,0)","rgba(0,0,0,0)"],[0,0.031,0.051,0.071,0.09,0.11,0.212,0.486,0.537,0.62,0.729,0.757,0.788,0.788,1],-83,-6.3,82.7,4.7).s().p("ApqGMQhUg3g2hOQhliRAdidQAeiuCxhRQBvgsDHgRQBkgJEOgJQDugIB0gPQCugXBRg2QCrCpgEDSQgCBbgkBMQgkBNg9AwQhkBQitAWQhFAJi5AAQinAAiIAXQj6AogiBmQhwgThcg7g");
	this.shape_23.setTransform(-1.1,2.7);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.7,-50.2,169.6,100.4);


(lib.glass_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.glass();
	this.instance.setTransform(-65,-95);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65,-95,130,190);


(lib.cap_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cap();
	this.instance.setTransform(-75,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-31,151,62);


(lib.bgImg_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cap
	this.instance = new lib.cap_1();
	this.instance.setTransform(-231,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-55},10,cjs.Ease.get(1)).wait(10).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:2},0).wait(1).to({rotation:0},0).to({y:-340},8,cjs.Ease.get(1)).wait(20).to({y:65},10,cjs.Ease.get(-1)).wait(5).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:2},0).wait(1).to({rotation:0},0).to({y:-340},8,cjs.Ease.get(1)).wait(20).to({y:65},10,cjs.Ease.get(-1)).wait(5).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:2},0).wait(1).to({rotation:0},0).to({y:-340},8,cjs.Ease.get(1)).wait(20).to({y:65},10,cjs.Ease.get(-1)).wait(61).to({x:-231},10,cjs.Ease.get(-1)).wait(1));

	// smallBox
	this.instance_1 = new lib.smallBox_1();
	this.instance_1.setTransform(-58,-56);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).wait(10).to({regY:0.5,scaleX:1,scaleY:1,x:-55.3,y:-50.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-46.8,y:-35.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-32.5,y:-8.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-12.8,y:26.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:10.1,y:68.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:33.1,y:110.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:53,y:147},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:67.6,y:173.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:76.3,y:189.4},0).wait(1).to({regY:0,scaleX:0.92,scaleY:0.92,x:79,y:194},0).to({_off:true},1).wait(30).to({_off:false,scaleX:1,scaleY:1,x:-58,y:-56},0).wait(10).to({regY:0.5,scaleX:1,scaleY:1,x:-55.2,y:-51.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-46.8,y:-39.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-32.3,y:-19.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-12.5,y:8.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:10.6,y:40.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:33.8,y:72.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:53.8,y:100.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:68.6,y:121.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:77.2,y:133.6},0).wait(1).to({regY:0,scaleX:0.92,scaleY:0.92,x:80,y:137},0).to({_off:true},1).wait(30).to({_off:false,scaleX:1,scaleY:1,x:-58,y:-56},0).wait(10).to({regY:0.5,scaleX:1,scaleY:1,x:-55.3,y:-52.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-46.9,y:-44.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-32.6,y:-30.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-13,y:-11.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:9.8,y:10.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:32.8,y:33.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:52.6,y:52.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:67.2,y:66.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:75.8,y:75.3},0).wait(1).to({regY:0,scaleX:0.92,scaleY:0.92,x:78.5,y:77.5},0).to({_off:true},1).wait(86));

	// splash
	this.instance_2 = new lib.splash_1();
	this.instance_2.setTransform(-59.5,56.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({_off:true},37).wait(13).to({_off:false},0).to({_off:true},37).wait(13).to({_off:false},0).to({_off:true},37).wait(72));

	// glass
	this.instance_3 = new lib.glass_1();
	this.instance_3.setTransform(-232,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-56},10,cjs.Ease.get(1)).wait(216).to({x:-232},10,cjs.Ease.get(-1)).wait(1));

	// smallBoxBlur
	this.instance_4 = new lib.smallBoxBlur_1();
	this.instance_4.setTransform(-58,122.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({y:-56},3,cjs.Ease.get(1)).to({_off:true},1).wait(46).to({_off:false,y:122.5},0).to({y:-56},3,cjs.Ease.get(1)).to({_off:true},1).wait(46).to({_off:false,y:122.5},0).to({y:-56},3,cjs.Ease.get(1)).to({_off:true},1).wait(106));

	// smallBox
	this.instance_5 = new lib.smallBox_1();
	this.instance_5.setTransform(78.5,77.5,0.92,0.92);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(151).to({_off:false},0).wait(75).to({x:202.5},10,cjs.Ease.get(-1)).wait(1));

	// smallBox
	this.instance_6 = new lib.smallBox_1();
	this.instance_6.setTransform(80,137,0.92,0.92);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(101).to({_off:false},0).wait(125).to({x:204},10,cjs.Ease.get(-1)).wait(1));

	// smallBox
	this.instance_7 = new lib.smallBox_1();
	this.instance_7.setTransform(79,194,0.92,0.92);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({_off:false},0).wait(175).to({x:203},10,cjs.Ease.get(-1)).wait(1));

	// t1
	this.instance_8 = new lib.t1();
	this.instance_8.setTransform(0,116.5,0.01,0.01);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(166).to({_off:false},0).to({scaleX:1,scaleY:1,y:-66.5},10,cjs.Ease.get(1)).wait(50).to({scaleX:0.01,scaleY:0.01},10,cjs.Ease.get(-1)).wait(1));

	// logo
	this.instance_9 = new lib.logo();
	this.instance_9.setTransform(-2.1,-231,0.932,0.932);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(237));

	// bgImg
	this.instance_10 = new lib.bgImg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(237));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306,-300,456,600);


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
p.nominalBounds = new cjs.Rectangle(-6,299,457,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;