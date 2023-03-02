(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/finger1.png", id:"finger1"},
		{src:"images/finger2.png", id:"finger2"},
		{src:"images/finger3.png", id:"finger3"},
		{src:"images/finger4.png", id:"finger4"},
		{src:"images/finger5.png", id:"finger5"},
		{src:"images/hand1.png", id:"hand1"},
		{src:"images/palm1.png", id:"palm1"},
		{src:"images/product.png", id:"product"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/table.jpg", id:"table"},
		{src:"images/wall.jpg", id:"wall"}
	]
};



// symbols:



(lib.finger1 = function() {
	this.initialize(img.finger1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,247);


(lib.finger2 = function() {
	this.initialize(img.finger2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,247);


(lib.finger3 = function() {
	this.initialize(img.finger3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,247);


(lib.finger4 = function() {
	this.initialize(img.finger4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,247);


(lib.finger5 = function() {
	this.initialize(img.finger5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,247);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,247);


(lib.palm1 = function() {
	this.initialize(img.palm1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,247);


(lib.product = function() {
	this.initialize(img.product);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,310);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.table = function() {
	this.initialize(img.table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,120);


(lib.wall = function() {
	this.initialize(img.wall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,488);


(lib.wall_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wall();
	this.instance.setTransform(-240,-184,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240,-184,400,390.4);


(lib.table_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.table();
	this.instance.setTransform(-239,-120,1.333,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-239,-120,400,120);


(lib.t2_3Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaDSIAAilIADhKQACgzACgaIABgGIgEAbIg2EmIgBABIgqAAIAAmjIAqAAIAADnQgCAngIA9IAIghQAGgZAvkRIApAAIAAGjg");
	this.shape.setTransform(3.9,0.4,0.958,0.958);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaDSIAAilQAAgcACguQADg0ACgZIABgJIgEAeIg3EmIgBABIgoAAIAAmjIAoAAIAADnQgBAngIA9IAHghQAHgZAvkRIAqAAIAAGjg");
	this.shape_1.setTransform(-13.5,0.4,0.958,0.958);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWDTIAAjCIgBgBIgqAAIAADDIgtAAIAAmlIAtAAIAAC+IArAAIAAi+IAsAAIAAGlg");
	this.shape_2.setTransform(-31.3,0.4,0.958,0.958);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCDTIAAmlIA/ABQAhgBASARQANALAEAUQABAMABAWIAACRIgBAeQgCAQgHANQgLAUgcAFQgRAEgWgBIAABrgAgVBDQASAAAGgDQAKgCAEgIQAEgGABgHIAAgOIAAikQgBgXgKgHQgGgEgJgBIgRAAg");
	this.shape_3.setTransform(-48.2,0.5,0.958,0.958);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWDTIAAhrQgvABgVgRQgTgPgBgmIAAj1IAtAAIAADpQAAAVADAIQAEAIAKAEQAHADATAAIAAkVIAsAAIAAGlg");
	this.shape_4.setTransform(-83.6,0.5,0.958,0.958);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJDWQgcgBgOgTQgKgLgDgWQgCgLAAgiIAAjzQAAgjAGgOQAGgQALgIQALgKASgCQAfgFAVAMQAPAJAGAOQAHAQAAAZIAAEBIAAAcQAAAQgDAMQgGAXgTALQgPAJgWAAIgKgBgAgFivQgIACgDAHQgFAJAAAQIAAEZQABAWAFAIQAFAIAKAAQALAAAGgIQAFgKAAgUIAAkYQAAgUgHgJQgEgHgKAAIgGABg");
	this.shape_5.setTransform(-65.8,0.5,0.958,0.958);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKggIAVAAIgVBBg");
	this.shape_6.setTransform(4.3,-17.8,0.958,0.958);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhADPIAAmcIBCAAQAfACAQASQAQATAAAkIAAAtQgCAbgHAMQgJAOgVAIQASAFALARQAJANABATIAABhQAAAKgDANQgDAVgHAKQgGAJgMAHQgRAKgcAAgAgVClIAQgBQAGAAAGgDQALgEACgOIABhhQAAgdgKgLQgGgGgIAAIgSgBgAgVgqIAOgBQAMgCAGgGQAJgKABgdIAAgUQABgUgBgKQgDgOgJgFQgGgDgMgCIgMAAg");
	this.shape_7.setTransform(50.1,-0.3,0.958,0.958);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaDOIgojFIgMApIAACcIgrAAIAAmbIArAAIAACiIAtiiIAtAAIgzCaIA5EBg");
	this.shape_8.setTransform(32.7,-0.4,0.958,0.958);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMDSQgTgDgLgKQgMgLgGgVQgDgLAAgUIgBkFIACgSQACgTADgKQAIgVAUgJQATgIAWADQAUADANANQAPAPAEAeQABARAAAkIAAAjIgsAAIAAhDQAAgXgGgKQgDgGgIgCQgFgBgHADQgIAEgDAOQgCANAAAaIAADxIABAMQACAMAEAGQADAGAIABQAGABAGgDQAIgEADgRIABhIIAsAAIAAA5QgBAcgGAPQgGARgPAKQgPAKgVAAIgNgBg");
	this.shape_9.setTransform(83.7,-0.4,0.958,0.958);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVDRIAAjRIgqAAIAADRIgrAAIAAk2QgBguAHgVQAHgXAVgKQARgIAYACQAWADANAOQAPAPACAcQACASgBAkIAAEugAgLiiQgFAFgDAMQgCAIAAAYIAABJIAqAAIAAhSQAAgWgEgKQgDgJgKgCIgEgBQgGAAgFAEg");
	this.shape_10.setTransform(66.9,-0.5,0.958,0.958);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-21,180,42.1);


(lib.t2_2Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An8CbQAIgkAMgLQAGgGAJgCQAJgCAOAAIAaAAIANAAQAGgBAEgCQAJgGAFgTQgMALgLABIgIAAQgLAAgJgHQgIgIgCgOQgUAdgeAAQgPABgLgKQgIgGgCgNQgVAcgkAAQgNABgLgKQgHgFgDgNQgTAbgcAAQgTAAgKgJQgLgKABgNQgBgOAIgcIAFgVIgyBdIgwAAIgGheIgFATIgIAhQgEAPgFAJQgMAVgYgBQgSABgKgMQgKgLAAgMQABgNAFgGQAGgHAIABQAJgBAGAFQAEAFAAAHQABAIgFAEQgEADgFAAQgBADADAFQADADAIAAQAJABAGgGQAFgFAEgKQAEgJACgLIAFgYIAShMIAvAAIAIB3IA/h3IAzAAIgYBgQgDAOAAAEQAAANAOAAQAKAAAGgHQAGgIAHgNIAWhjIAyAAIgZBpIgBAMQgBAKAOAAQAKAAAJgIQAJgIADgMIAXhjIAxAAIgYBpIgBAJQAAANAKAAQASAAAJgcIAXhjIAxAAIgYBpIgCAMQABAKAOAAIARAAQgHA3gVAUQgKAIgKADQgJACgJAAIgmAAQgMAAgEAFQgCAEgBAGgANCBKQgIgHgCgOQgUAdgfAAQgPABgLgKQgIgGgCgNQgVAcgjAAQgOABgLgKQgKgIAAgUQAAgJACgMIALgsQgOAFgSAEQACAFAAALQgBANgFAOQgGAOgKALQgXAZgkAAQgcAAgPgQQgIgJgEgNQgiAngtgBQgZAAgOgLQgPgMAAgaQABgjATghQAPgaAbgLQANgFAPgBQAoABAAAcQAAAMgFAFQgFAGgHAAQgHAAgGgDQAEgLAAgIQAAgNgJAAQgKAAgLARQgQAWgFAgQgCALAAAMQAAAXAXAAQAUAAANgIQAMgHAMgMIAAgDQAAgaAOgoQAOguAXgfQAbglAcAAQARAAAJAKQAKAKAAAZQABAXgTAiIgJARQAHADAGAGQAUAAAYgKIAJgnIAwAAIgYBpIgBAMQAAAKAOAAQAKAAAIgIQAJgIADgMIAYhjIAwAAIgYBpIgBAIQAAAOAKAAQASAAAKgcIAWhjIAyAAIgZBpIgBAMQAAAKANAAIALgCQgBARgLAIQgLAHgPAAQgNABgJgJgAJDhtQgTAhgNBCQgFAXgBANQAAAbAWABQAPgBAJgNQAKgOAAgOQAAgMgDgGQgFACgHAAQgIAAgFgEQgEgEAAgGQAAgLAFgEQAHgFALAAQAQgaAGgeQACgJAAgKQAAgJgCgDQgDgEgGgBQgKAAgMAVgACxBHQgIgGgEgLQgUAcggAAQgeAAgDgdQgVAdgeAAQgdAAgCgdQgUAdgfAAQgPABgLgKQgIgGgCgNQgVAcgjAAQgOABgLgKQgHgFgCgNQgTAbgcAAQgVAAgKgJQgJgKgBgOQABgLAHghIglAAIgSBLIgxAAIAkibIAxAAIgPA/IAnAAIAPg/IAtAAIgXBlIgDANQAAANAOAAQAKAAAHgHQAGgIAFgNIAYhjIAwAAIgYBpIgBAMQAAAKAOAAQAKAAAIgIQAIgIAEgMIAYhjIAwAAIgYBpIgBAJQAAANAKAAQASAAAKgcIAUhjIAyAAIgZBpIgBAJQAAANAKAAQASAAAKgcIAWhjIAyAAIgZBpIgCAMQABAKAOAAQAOAAAIgQIAAgDQAAgiAUgiQAPgaAagLQANgFAPgBQAXABAJAHQAJAJgBAOQAAAagXAUQgXAQgfACIgBAKQAAAaAVAAQAKAAAKgGQAMgFAHgGQgIAugyAAQgYAAgOgLgADhgaQgFAPgEANQATgBAPgOQAPgPABgWQAAgLgJAAQgRAAgPAjgAMbhiQgMgHAAgLQAAgLAHgHQAGgGAKgBQAWABgBARQAAAKgIAFQAFABAJAAQAlAAAPglIAPAAQgQArghAIQgLACgRABQgQAAgMgIgAKuhjQgIgHAAgKQAAgLAIgHQAIgIALAAQAMAAAIAIQAHAHAAALQAAAKgHAHQgIAHgMAAQgLAAgIgHgAiMhjQgIgHAAgKQAAgLAIgHQAIgIALAAQAMAAAIAIQAHAHAAALQAAAKgHAHQgIAHgMAAQgLAAgIgHgApJhjQgIgHAAgKQAAgLAIgHQAIgIALAAQAMAAAHAIQAJAHgBALQABAKgJAHQgIAHgLAAQgLAAgIgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-15.5,180,31.1);


(lib.t2_1Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANaDmIAAj5IgmB8IgmB9IgpAAIAAl2IApAAIAAD5IBNj5IApAAIAAF2gAIdDmIgLhSIg/AAIgMBSIgpAAIA/l2IAuAAIA9F2gAIKBfIgYinIgXCnIAvAAgADXDmIAAjnIgsCkIgiAAIgqijIAADmIgpAAIAAl2IAlAAIBADmIA/jmIAlAAIAAF2gAilDmIAAj5IhMD5IgoAAIAAl2IAoAAIAAD5IBNj5IAoAAIAAF2gApWDmIAAl2IBFAAQAUAAAPAGQAPAGAKAOQAJAOAFAYQAEAYABAjQgBAdgEAWQgFAWgJAPQgKAOgPAGQgOAHgUAAIgdAAIAACIgAotAsIAeAAQAKAAAHgDQAHgEAEgIQAEgIADgNQACgKAAgUQAAgUgDgOQgBgPgGgIQgEgIgHgEQgHgEgJAAIgeAAgAtRDmIAAlFIgyAAIAAgxICOAAIAAAxIgzAAIAAFFgAMiiyQgIgEgHgIQgGgIgEgOIgDgRIAbAAQADALAFAEQAFAFAIAAQAIAAAFgFQAFgEADgLIAcAAIgEARQgEANgGAIQgHAJgIAEQgJAEgLAAQgKAAgKgEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-23,180,46.1);


(lib.shadow_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.shadow();
	this.instance.setTransform(-120,-200);

	// Слой 1
	this.instance_1 = new lib.shadow();
	this.instance_1.setTransform(-120,-200);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.product_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.product();
	this.instance.setTransform(-76.5,-123.5,0.797,0.797);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.5,-123.5,153,247);


(lib.palm = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.palm1();
	this.instance.setTransform(-203,-124.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-203,-124.5,350,247);


(lib.p1Mc = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjjPUItSmnQk7idi4kpQi2kmAAlhIgBpUIQSIIQE6CdC3EpQC4EmgBFgQAAAfAlAAQAlAAABgfQAAlgC2kmQC4koE7ieIQQoIIAAJVQAAFgi2EmQi3Eok8CeIteGvIjcCZgA4nogQgBEtCdD6QCbD8ENCGINfGwICCBdIB9hXINpm2QENiGCcj8QCcj6AAksIAAktIsIGDQkMCHidD8QibD6gBEsQAABchABAQhCBBhaAAQhaAAhBhBQhAhBAAhbQAAksicj6Qicj8kMiHIsImDg");
	this.shape.setTransform(-0.1,2.8,0.027,0.027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AizJOQk7iei3koQi3kmABlhIAApVIQOIIQE7CeC3EoQC3EmABFgIgBJVgAqkn/QgBEtCcD5QCcD9EMCGIMHGEIAAkuQAAksidj5Qibj9kNiGIsFmEg");
	this.shape_1.setTransform(-2.5,-1.4,0.027,0.027);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtbIAQAAlgC2kmQC4koE6ieIQPoIIAAJUQAAFhi2EmQi3Epk8CdIwOIIgAhhmpQkMCGicD9QicD6AAEsIAAEtIMHmEQEMiGCcj8QCcj6AAktIAAktg");
	this.shape_2.setTransform(2.4,-1.4,0.027,0.027);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmnLNQjrlCAAmLQAAmJDrlDIGnpEIGoJEQDqFCABGKQAAGLjrFCImoJEgAkTpgQjIESAAFOQAAFPDIESIETF6IEVl6QDHkSAAlPQAAlPjIkRIkUl6g");
	this.shape_3.setTransform(-0.1,-5.1,0.027,0.027);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhlKgIAA0/QABgqAegfQAegeAoAAQAqAAAeAeQAeAfAAAqIAAWlg");
	this.shape_4.setTransform(-4.2,-7.1,0.027,0.027);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhlSwMAAAglfQAAgqAegeQAegeApAAQAqAAAfAfQAdAdAAAqMAAAAnFg");
	this.shape_5.setTransform(-2.6,-7.7,0.027,0.027);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhlqfQAAgqAegfQAegeApAAQAqAAAeAeQAeAfAAAqIAAU/IjLBmg");
	this.shape_6.setTransform(4.1,-7.1,0.027,0.027);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhlyvQAAgqAegeQAegeApAAQAqAAAeAeQAeAeAAAqMAAAAlfIjLBmg");
	this.shape_7.setTransform(2.4,-7.7,0.027,0.027);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhXIaIgOgOIAAzFQAAgqAegeQAegeApAAQAqAAAeAeQAeAeAAAqIAAXZg");
	this.shape_8.setTransform(0.8,-10.3,0.027,0.027);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ahlq5QABgqAegeQAdgeApAAQAqAAAeAeQAdAeAAAqIAATFIgNAPIi9EFg");
	this.shape_9.setTransform(-0.9,-10.3,0.027,0.027);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkbEcQh2h2AAimQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACmh2B2Qh2B2imAAQilAAh2h2g");
	this.shape_10.setTransform(67.2,11.4,0.027,0.027);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_11.setTransform(-67.2,11.4,0.027,0.027);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_12.setTransform(63.5,11.4,0.027,0.027);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_13.setTransform(59.7,11.4,0.027,0.027);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_14.setTransform(56,11.4,0.027,0.027);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkbEcQh2h2AAimQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACmh2B2Qh2B2imAAQilAAh2h2g");
	this.shape_15.setTransform(52.3,11.4,0.027,0.027);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_16.setTransform(48.5,11.4,0.027,0.027);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkbEcQh2h2AAimQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACmh2B2Qh2B2imAAQilAAh2h2g");
	this.shape_17.setTransform(44.8,11.4,0.027,0.027);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_18.setTransform(41.1,11.4,0.027,0.027);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AkbEcQh2h2AAimQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACmh2B2Qh2B2imAAQilAAh2h2g");
	this.shape_19.setTransform(37.3,11.4,0.027,0.027);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_20.setTransform(33.6,11.4,0.027,0.027);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkbEcQh2h2AAimQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACmh2B2Qh2B2imAAQilAAh2h2g");
	this.shape_21.setTransform(29.9,11.4,0.027,0.027);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_22.setTransform(26.1,11.4,0.027,0.027);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_23.setTransform(22.4,11.4,0.027,0.027);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_24.setTransform(18.7,11.4,0.027,0.027);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_25.setTransform(14.9,11.4,0.027,0.027);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_26.setTransform(0,11.4,0.027,0.027);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_27.setTransform(-14.9,11.4,0.027,0.027);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_28.setTransform(-18.7,11.4,0.027,0.027);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_29.setTransform(-22.4,11.4,0.027,0.027);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_30.setTransform(-26.1,11.4,0.027,0.027);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_31.setTransform(-29.9,11.4,0.027,0.027);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_32.setTransform(-33.6,11.4,0.027,0.027);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_33.setTransform(-37.4,11.4,0.027,0.027);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_34.setTransform(-41.1,11.4,0.027,0.027);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_35.setTransform(-44.8,11.4,0.027,0.027);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_36.setTransform(-48.6,11.4,0.027,0.027);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_37.setTransform(-52.3,11.4,0.027,0.027);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_38.setTransform(-56,11.4,0.027,0.027);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_39.setTransform(-59.7,11.4,0.027,0.027);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AkbEcQh2h1AAinQAAilB2h2QB2h2ClAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQilAAh2h2g");
	this.shape_40.setTransform(-63.5,11.4,0.027,0.027);

	this.addChild(this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.3,-12.5,136.6,25);


(lib.hand = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.hand1();
	this.instance.setTransform(-203,-124.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-203,-124.5,350,247);


(lib.finger5_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.finger5();
	this.instance.setTransform(-147,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147,-123.5,294,247);


(lib.finger4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.finger4();
	this.instance.setTransform(-147,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147,-123.5,294,247);


(lib.finger3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.finger3();
	this.instance.setTransform(-147,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147,-123.5,294,247);


(lib.finger2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.finger2();
	this.instance.setTransform(-147,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147,-123.5,294,247);


(lib.finger1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.finger1();
	this.instance.setTransform(-147,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147,-123.5,294,247);


(lib.bg = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgSuAlgMAAAhK/MAldAAAMAAABK/g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-240,240,480);


(lib.t2_3 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.t2_3Mc();

	// Слой 1
	this.instance_1 = new lib.t2_3Mc();
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0), new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-92,-23,184,46);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-23,188,50);


(lib.t2_2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.t2_2Mc();

	// Слой 1
	this.instance_1 = new lib.t2_2Mc();
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0), new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-92,-17,184,35);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-17.5,188,38);


(lib.t2_1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.t2_1Mc();

	// Слой 1
	this.instance_1 = new lib.t2_1Mc();
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0), new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-92,-25,184,50);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-25,188,54);


(lib.p1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.p1Mc();
	this.instance.setTransform(0,-1.5);

	// Слой 1
	this.instance_1 = new lib.p1Mc();
	this.instance_1.setTransform(0,-1.5);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0), new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-70,-14,141,29);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.3,-16,144,32);


(lib.t2 = function() {
	this.initialize();

	// Фон
	this.instance = new lib.p1();
	this.instance.setTransform(0.1,57,1,1,0,180,0);

	this.instance_1 = new lib.p1();
	this.instance_1.setTransform(0.1,-81);

	// Layer 1
	this.instance_2 = new lib.t2_2();
	this.instance_2.setTransform(0,-10.5,0.761,0.76);

	this.instance_3 = new lib.t2_1();
	this.instance_3.setTransform(0,-46.2,0.761,0.76);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,-97,144.3,174.1);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A60S3IAAiJIkrAAIAACJIgqAAIAAi2IAWAAQAWgCAPgUQAOgSAKgiQAJgfAFgyQAFgwACg8IATl+IDnAAIAAKFIAdAAIAAC2gA92L5QgDBEgEAlQgEArgHAhQgHAigJATQgJAVgLAJIDZAAIAApYIiTAAgAmwQvQgdgMgSgaQgSgbgJgrQgHgsgBhCIAAkAQABhDAHgqQAIgsATgcQASgbAdgLQAegMAoAAQAhAAAYAMQAZAKAQAVQARAVAJAdQAKAgACAiIgpAAQgFgggHgVQgIgWgLgNQgMgOgQgFQgQgGgUABQgfAAgWAJQgUAJgNAWQgNAVgEAjQgGAhABA1IAAEDQgBA0AGAiQAFAjANAVQAMAWAVAKQAVAJAfAAQAYAAASgHQARgHAMgOQALgPAHgWQAFgTADghIArAAQgDAngIAdQgJAfgQAUQgSAVgYAMQgZALglAAQgogBgegLgABnQuIAAkQIhqAAIhSEQIguAAIBUkVQgUgFgQgMQgQgMgLgXQgLgXgIgmQgFgkgBg4QAAhAAJgmQAJgpAQgXQAQgXAZgJQAXgKAdAAICbAAIAAKygAgpGwQgRAGgLASQgLASgGAgQgGAhAAAxQAAAsAFAkQAGAiAKATQALATASAIQASAIAXAAIBoAAIAAlLIhqAAQgUAAgSAHgAuMQuIAAqyIArAAIAAE0IB+AAQAmAAAYAOQAYAMAOAZQAPAZAFAjQAFAlAAAqQAAAsgFAkQgFAkgPAZQgOAYgYANQgZAOglAAgAthQBIB2AAQAbAAAQgHQASgIALgSQALgSAFgbQAFgbAAgqQAAgogFgaQgFgcgLgSQgLgRgSgKQgRgIgaAAIh2AAgAx8QuIAAqFIh1AAIAAgtIETAAIAAAtIh0AAIAAKFgA4oQuIAAqyID3AAIAAAtIjMAAIAAEHICxAAIAAArIixAAIAAEmIDMAAIAAAtgEghlAQuIgfizIiiAAIgiCzIgsAAICFqyIAzAAICFKygEgiNANQIhHmdIhKGdICRAAgEgrOAQuIAAqyICSAAQAmAAAZAOQAbANAQAbQAPAaAIAoQAIAogBA1QAAA2gIAmQgHAngQAaQgRAagaALQgbAOgkAAIhmAAIAAENgEgqjAL2IBnAAQAaAAARgJQARgIALgVQAMgVAFgfQAEgdAAguQAAgvgEgeQgFgegMgWQgLgVgRgIQgSgKgZAAIhnAAgEgtVAQuIislNIAAFNIgsAAIAAqyIAsAAIAAE1ICfk1IAyAAIiwFMIC8FmgAQulAQgigPgWgoQgWgogKhHQgLhGAAhvIAAjTQAAhkAMhBQALhAAXgkQAXglAigNQAjgNAsAAQAvAAAiAPQAjAQAWAoQAWAoALBHQAKBFABBvIAADTQgBBmgMBAQgLA/gXAlQgWAjgjAOQgjANgrAAQgxAAgigPgARaw7QgQAHgLAUQgJAVgGAoQgFAmAABDIAAEOQAABCAFAmQAGApAJAUQALAVAQAHQAPAHAYAAQAXAAAQgHQAQgHAKgVQAKgWAGgnQAEgsAAg8IAAkSQAAg8gEgrQgGglgKgXQgKgTgQgIQgQgGgXAAQgWAAgRAHgAsVlAQgjgPgWgoQgVgogLhHQgLhGABhvIAAjTQgBhoAMg9QALhAAXgkQAXglAigNQAjgNAtAAQAuAAAjAPQAiAQAWAoQAWAoALBHQALBFAABvIAADTQAABmgMBAQgMA/gWAlQgXAjgjAOQgiANgrAAQgxAAgigPgArqw7QgPAHgLAUQgKAVgFAoQgGAmAABDIAAEOQAABCAGAmQAFApAKAUQAKAVAQAHQARAHAXAAQAWAAAQgHQAQgHAKgVQALgWAFgnQAFgsAAg8IAAkSQAAg8gFgrQgFgmgLgWQgKgUgQgHQgQgGgWAAQgWAAgSAHgEAvNgFBIAAtlIBhAAIAANlgEAqDgFBIAArzIh0AAIAAhyIFJAAIAAByIh1AAIAALzgEAlqgFBIgci+IiRAAIgcC+IhgAAICStlIBsAAICNNlgEAk8gJ6Ig3mFIg3GFIBuAAgAeXlBIhblAIhcFAIhhAAICMnBIiEmkIBhAAIBUEjIBUkjIBhAAIiDGkICLHBgALclBIAAr2IieAAIAAL2IhgAAIAAtlIFdAAIAANlgAgElBIAAobIhoGAIhNAAIhll6IAAIVIheAAIAAtlIBXAAICTIZICSoZIBYAAIAANlgAxClBIiQmHIAAGHIhgAAIAAtlIBgAAIAAF3ICMl3IBlAAIilGlICvHAgEggHgFBIAAtlIBgAAIAAL1ICKAAIAAr1IBgAAIAAL1ICJAAIAAr1IBgAAIAANlgEgkLgFBIAApDIixJDIheAAIAAtlIBeAAIABJEICxpEIBgAAIAANlgEgscgFBIAAmHIidAAIAAGHIhhAAIAAtlIBhAAIAAFxICdAAIAAlxIBgAAIAANlg");
	this.shape.setTransform(-0.7,0.5,0.35,0.35);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLATIAAglICXAAIAAAlg");
	this.shape_1.setTransform(25.4,4.7,1.041,1.041);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUDMIAAmXIApAAIAAGXg");
	this.shape_2.setTransform(25.5,24.2,1.041,1.041);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLDPQgUgCgKgLQgNgKgFgVQgDgLgBgUIAAkCIABgSQADgTADgKQAHgUAUgJQASgIAXADQAUACAMANQAPAOAEAfQABALAAAqIAAAiIgrAAIAAhCQAAgXgGgKQgEgGgHgCQgFgBgHADQgIAEgDAOQgCANAAAaIAADuIABAMQACAMAEAFQADAGAJACQAFABAGgDQAJgFACgQQABgHABgPIgBgyIArAAIAAA5QgBAcgFAPQgHARgOAKQgPAKgVAAIgMgCg");
	this.shape_3.setTransform(103.1,24.3,1.041,1.041);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWDPIAAjPIgqAAIAADPIgrAAIAAkzQgBgtAHgVQAIgYAUgJQARgIAYACQAVADANAOQAPAPACAcQACASgBAjIAAErgAgLigQgFAFgCALQgCAIAAAYIAABIIAqAAIAAhQQAAgWgEgLQgDgJgKgCIgFgBQgGAAgFAFg");
	this.shape_4.setTransform(83.6,24.1,1.041,1.041);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVDPIAAjPIgpAAIAADPIgrAAIAAkzQgBgtAHgVQAHgXAVgKQARgIAXACQAWADANAOQAOAOADAdQACASgBAjIAAErgAgLigQgFAEgDAMQgBALAAAVIAABIIApAAIAAhQQAAgWgEgLQgDgJgKgCIgEgBQgGAAgFAFg");
	this.shape_5.setTransform(45,24.1,1.041,1.041);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/DMIAAmXIA9AAQAfABAQARQANANAEAWIACAlIAABrIgBAfQgCASgGANQgKAWgcAGQgRAEgUgBIAAB1gAgUAuQARAAAFgDQALgCAEgJQAEgJAAgVIAAh9QAAgMgCgGQgCgKgHgFQgFgEgJgBIgQgBg");
	this.shape_6.setTransform(64.1,24.2,1.041,1.041);

	// p1
	this.instance = new lib.p1();
	this.instance.setTransform(0.1,84.3,1.611,1.609,0,180,0);

	// p1
	this.instance_1 = new lib.p1();
	this.instance_1.setTransform(0.1,-81,1.611,1.609);

	this.addChild(this.instance_1,this.instance,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112,-105.5,228,218.2);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// table
	this.instance = new lib.table_1();
	this.instance.setTransform(119.5,240.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260).to({_off:false},0).to({alpha:1},10).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_1();
	this.instance_1.setTransform(0,0,1,1.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(260).to({_off:false},0).to({alpha:0.801},10).wait(1));

	// wall
	this.instance_2 = new lib.wall_1();
	this.instance_2.setTransform(120.1,-56);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(260).to({_off:false},0).to({alpha:1},10).wait(1));

	// t2
	this.instance_3 = new lib.t2_3();
	this.instance_3.setTransform(195.5,-108.8,0.761,0.76);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(145).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(14).to({scaleX:0.86,scaleY:0.86},5).wait(15).to({scaleX:0.76,scaleY:0.76},5).wait(77));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.setTransform(195.5,-132.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(145).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(116));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.setTransform(0,-114.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).to({alpha:1},10).wait(25).to({alpha:0},10).to({_off:true},1).wait(161));

	// finger
	this.instance_6 = new lib.finger5_1();
	this.instance_6.setTransform(32.5,59.5,1,1,0,0,0,-49.5,33.5);
	this.instance_6.alpha = 0.578;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(126).to({_off:false},0).to({regX:-49.4,regY:33.4,scaleX:0.68,skewX:-32.2,skewY:-51.2,x:35.6,y:47.4},6).to({alpha:0},2).to({_off:true},1).wait(136));

	// finger
	this.instance_7 = new lib.finger4_1();
	this.instance_7.setTransform(34.5,38,1,1,0,0,0,-47.5,12);
	this.instance_7.alpha = 0.578;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(126).to({_off:false},0).to({regX:-47.6,regY:11.8,scaleX:0.56,scaleY:0.88,skewX:-15.7,skewY:-28.6,y:34.3},6).to({alpha:0},2).to({_off:true},1).wait(136));

	// finger
	this.instance_8 = new lib.finger3_1();
	this.instance_8.setTransform(37,10,1,1,0,0,0,-45,-16);
	this.instance_8.alpha = 0.578;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(126).to({_off:false},0).to({regX:-45.1,scaleX:0.51,scaleY:0.94,skewX:-4.2,skewY:-13.7},6).to({alpha:0},2).to({_off:true},1).wait(136));

	// finger
	this.instance_9 = new lib.finger2_1();
	this.instance_9.setTransform(16,-15,1,1,0,0,0,-66,-41);
	this.instance_9.alpha = 0.578;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(126).to({_off:false},0).to({regY:-41.1,scaleX:0.64,rotation:4.2,y:-15.1},6).to({alpha:0},2).to({_off:true},1).wait(136));

	// finger
	this.instance_10 = new lib.finger1_1();
	this.instance_10.setTransform(-17.5,-23,1,1,0,0,0,-99.5,-49);
	this.instance_10.alpha = 0.578;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(126).to({_off:false},0).to({regY:-49.1,scaleY:0.53,skewX:-70.6,x:-13.5,y:-33},6).to({x:-17.5,y:-23,alpha:0},2).to({_off:true},1).wait(136));

	// palm
	this.instance_11 = new lib.palm();
	this.instance_11.setTransform(82,26);
	this.instance_11.alpha = 0.578;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(126).to({_off:false},0).wait(8).to({alpha:0.289},1).to({_off:true},2).wait(134));

	// hand
	this.instance_12 = new lib.hand();
	this.instance_12.setTransform(-240,69.5);
	this.instance_12.alpha = 0.578;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(39).to({_off:false},0).to({x:-11.5,y:24.5},25,cjs.Ease.get(1)).wait(45).to({x:59.5},16).to({_off:true},1).wait(145));

	// product
	this.instance_13 = new lib.product_1();
	this.instance_13.setTransform(291,97);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(109).to({_off:false},0).to({x:0},25,cjs.Ease.get(1)).wait(137));

	// finger
	this.instance_14 = new lib.finger5_1();
	this.instance_14.setTransform(35.6,47.4,0.676,1,0,-32.2,-51.2,-49.4,33.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(137).to({_off:false},0).to({x:17.6,alpha:0.578},2).to({regX:-49.5,regY:33.5,scaleX:1,skewX:0,skewY:0,x:11.5,y:59.5},5).to({_off:true},1).wait(126));

	// finger
	this.instance_15 = new lib.finger4_1();
	this.instance_15.setTransform(34.5,34.3,0.558,0.883,0,-15.7,-28.6,-47.6,11.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(137).to({_off:false},0).to({x:16.5,alpha:0.578},2).to({regX:-47.5,regY:12,scaleX:1,scaleY:1,skewX:0,skewY:0,x:13.5,y:38},5).to({_off:true},1).wait(126));

	// finger
	this.instance_16 = new lib.finger3_1();
	this.instance_16.setTransform(37,10,0.507,0.938,0,-4.2,-13.7,-45.1,-16);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(137).to({_off:false},0).to({x:19,alpha:0.578},2).to({regX:-45,scaleX:1,scaleY:1,skewX:0,skewY:0,x:16},5).to({_off:true},1).wait(126));

	// finger
	this.instance_17 = new lib.finger2_1();
	this.instance_17.setTransform(16,-15.1,0.642,1,4.2,0,0,-66,-41.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(137).to({_off:false},0).to({x:-2,alpha:0.578},2).to({regY:-41,scaleX:1,rotation:0,x:-5,y:-15},5).to({_off:true},1).wait(126));

	// finger
	this.instance_18 = new lib.finger1_1();
	this.instance_18.setTransform(-17.5,-23,1,0.525,0,-70.6,0,-99.5,-49.1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(137).to({_off:false},0).to({x:-31.5,y:-33,alpha:0.578},2).to({regY:-49,scaleY:1,skewX:0,x:-38.5,y:-23},5).to({_off:true},1).wait(126));

	// palm
	this.instance_19 = new lib.palm();
	this.instance_19.setTransform(82,26);
	this.instance_19.alpha = 0.398;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(135).to({_off:false},0).wait(2).to({alpha:0.578},0).to({x:64},2).wait(5).to({_off:true},1).wait(126));

	// hand
	this.instance_20 = new lib.hand();
	this.instance_20.setTransform(64,26);
	this.instance_20.alpha = 0.578;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(145).to({_off:false},0).to({x:-11.5,y:24.5},10).wait(116));

	// table
	this.instance_21 = new lib.table_1();
	this.instance_21.setTransform(119.5,240.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({scaleX:1.02,scaleY:1.02,rotation:1,x:116.5,y:243.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:119.5,y:240.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1,x:120.1,y:241.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:119.5,y:240.8},0).wait(2).to({scaleX:1.02,scaleY:1.02,rotation:1,x:116.5,y:243.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:119.5,y:240.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1,x:120.1,y:241.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:119.5,y:240.8},0).wait(9).to({scaleX:1.02,scaleY:1.02,rotation:1,x:116.5,y:243.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:119.5,y:240.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1,x:120.1,y:241.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:119.5,y:240.8},0).wait(10).to({x:-24.5},95).wait(137));

	// shadow
	this.instance_22 = new lib.shadow_1();
	this.instance_22.setTransform(0,0,1,1.2);
	this.instance_22.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(271));

	// wall
	this.instance_23 = new lib.wall_1();
	this.instance_23.setTransform(120.1,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9).to({scaleX:1.02,scaleY:1.02,rotation:1,x:120.5,y:-54.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:120.1,y:-56},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1,x:119.7,y:-58.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:120.1,y:-56},0).wait(2).to({scaleX:1.02,scaleY:1.02,rotation:1,x:120.5,y:-54.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:120.1,y:-56},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1,x:119.7,y:-58.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:120.1,y:-56},0).wait(9).to({scaleX:1.02,scaleY:1.02,rotation:1,x:120.5,y:-54.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:120.1,y:-56},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1,x:119.7,y:-58.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:120.1,y:-56},0).wait(10).to({x:-23.9},95).wait(137));

	// bg
	this.instance_24 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-240,400.5,480.8);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300,1.25,1.25);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(149,299,501.7,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;