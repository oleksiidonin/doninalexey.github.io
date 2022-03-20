(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/frukt.png", id:"frukt"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/img1.png", id:"img1"}
	]
};



// symbols:



(lib.frukt = function() {
	this.initialize(img.frukt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,15);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,17);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,232);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img1();
	this.instance.setTransform(-168,-116);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-168,-116,336,232);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak9SIIAAtUItlAAIAApoINlAAIAAtTIJ7AAIAANTINlAAIAAJoItlAAIAANUg");
	this.shape.setTransform(48.2,0.2,0.085,0.085);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuSSkMAAAglHIaGAAIAAIJIwsAAIAAFHIGYAAQF5AADgDYQDZDPABFUQAAFUjYDRQjgDXl7AAgAk4KYIF8AAQBvAABEhFQBChDAAhoQAAhphChDQhEhFhvAAIl8AAg");
	this.shape_1.setTransform(88.8,0,0.085,0.085);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkrSkIAA8+IpbAAIAAoJIcNAAIAAIJIpaAAIAAc+g");
	this.shape_2.setTransform(71.1,0,0.085,0.085);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AksSkIAA8+IpaAAIAAoJIcNAAIAAIJIpaAAIAAc+g");
	this.shape_3.setTransform(24.5,0,0.085,0.085);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("As/SkMAAAglHIZ/AAIAAIJIwlAAIAAGNIOKAAIAAIHIuKAAIAAGhIQlAAIAAIJg");
	this.shape_4.setTransform(8.2,0,0.085,0.085);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AE/SkIAAutIp9AAIAAOtIpaAAMAAAglHIJaAAIAAOTIJ9AAIAAuTIJaAAMAAAAlHg");
	this.shape_5.setTransform(-10.2,0,0.085,0.085);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AuGSkMAAAglHIPJAAQFrAADtDYQDrDXABFNQgBFOjqDVQjsDYltAAIlvAAIAANQgAksi2IFTAAQBxAABLhFQBJhFABhnQgBhnhJhEQhLhFhxAAIlTAAg");
	this.shape_6.setTransform(-27.9,0,0.085,0.085);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("As/SkMAAAglHIZ/AAIAAIJIwlAAIAAGNIOKAAIAAIHIuKAAIAAGhIQlAAIAAIJg");
	this.shape_7.setTransform(-45.5,0,0.085,0.085);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AksSkIAA8+IpaAAIAAoJIcNAAIAAIJIpaAAIAAc+g");
	this.shape_8.setTransform(-62.4,0,0.085,0.085);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AE/SkIAAutIp9AAIAAOtIpaAAMAAAglHIJaAAIAAOTIJ9AAIAAuTIJaAAMAAAAlHg");
	this.shape_9.setTransform(-80.1,0,0.085,0.085);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AksSkMAAAglHIJZAAMAAAAlHg");
	this.shape_10.setTransform(-94,0,0.085,0.085);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-10,193,20.1);


(lib.logo = function() {
	this.initialize();

	// tex
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE731F").s().p("AEkPWICNsFIm8AAIpDMFImVAAIKCs8Qi/g9hZiKQhciQAkjEQAykQDliiQDiiiFBAAINbAAIlmergAjDp0Qh7BXgcCZQgcCYBbBZQBbBaC5AAIHpAAIB4qTInrAAQi3AAh7BYg");
	this.shape.setTransform(60.2,2.2,0.12,0.12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE731F").s().p("AGDPWIE16fIqKAAIhvJsQhtJVjZD5QjGDllhAAIiPAAIAwkMIA8AAQDUAAB/ieQCdjEBanuICbtPIUqAAIllerg");
	this.shape_1.setTransform(36.6,2.2,0.12,0.12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE731F").s().p("AnyOxQiNg1hihnQh5iAgHjRQgFiDA0kbIAXiAQAxkMBAiLQBPiuCah1QCIhlCgg3QCgg2CtAAQCvAACPA2QCNA3BjBlQBnBuAUCpQASCRgpDkIgfCjQg3EtgzCBQhSDJipCDQiIBnigA1QieA1iyAAQiwAAiMg1gAg3q7QhdAfhNA8QhkBOg2CXQgkBjgqDoIgfCmQghC7ACBfQADCKBFBIQB1B4DFAAQBkABBZgfQBcgfBLg7QBqhUA1iXQAihlA2kkQAwkCAAhpQAAiThJhQQg3g8hRgfQhQgehiAAQhgAAhaAeg");
	this.shape_2.setTransform(15.5,2.2,0.12,0.12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE731F").s().p("AuSPWIFm+rINtAAQE0AACgCRQCgCRgsDwQg2EplICDQCdBDA/BtQBCBwgeClQguD/jSCUQjSCVk6AAgAoKLKIIVAAQCrAABzhRQBzhRAZiLQAZiIhWhRQhVhRirAAIoVAAgAltiWIH5AAQCsAABwhLQBvhLAZiEQAYiEhVhLQhUhKisAAIn5AAg");
	this.shape_3.setTransform(-7.3,2.2,0.12,0.12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(238,115,31,0.098)","#EE731F"],[0,1],-87,-109.8,47.3,181.1).s().p("ALya/QhlgLhjgmIhPgkQlAiElpjiQrVnEjTnTQkip9EtrYQBejkCNjRQBHhpA0g7QBlhrBqgTQCNgaBICrQC8IND3JxQHzThEyH0QBUCJCRA0QA3ATAyADQAtACAUgMQi5DVkMAAQgnAAgogEg");
	this.shape_4.setTransform(-56.8,1.4,0.12,0.12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB826").s().p("AI5cFQhhgYhcgxIhJgsQkli4k+kcQqAo2iDnvQizqkGiqdQCCjQCui3QBYhcA9gxQB2hZBrgBQCQgDAoC1QBiIlCOKSQEcUjDaIgQA9CYB/BBQAyAZAyAFQAtAFAdgMQi2CVjWAAQhQAAhVgUg");
	this.shape_5.setTransform(-54.9,-0.4,0.12,0.12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,165,83,0.098)","#00A553"],[0,1],35.2,-175.9,-61.6,113.9).s().p("AoRXKQgwg8hJiIQirk+hNljQhyoKB1n3QBwnhLXmEQDhh5EFhhQCDgwBVgZQBZggBHAVQBBATAoA7QAmA3AGBKQAGBLgcBHQgaCFg8DaQh4GzipGmQqBZHkJAHIgEAAQhYAAhZhug");
	this.shape_6.setTransform(-37.7,-0.8,0.12,0.12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2DB2B").s().p("AreW/QhYgNg2h1QgSgogUhBIgfhjQhzlVgSlrQgZoUDInfQC+nIMLkFQD0hSESg0QCJgaBYgKQBdgRBDAhQA8AeAeBAQAcA9gGBKQgHBLgnBBQgwB/hfDMQi/GZjsGCQnVMGksFqQh2COh8BRQhoBDhDAAIgRgBg");
	this.shape_7.setTransform(-33.3,0.6,0.12,0.12);

	// tex
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AuVFjQgpAAgdgdQgdgdAAgpIAApiIfxAAIAAJiQAAApgdAdQgdAdgpAAg");

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.7,-35.5,203.6,71.1);


(lib.ic2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aw3bfQgwAAgfgIQgjgKgFgUQgFgUAcgZQB1hqB3gTQCRgXC2gIQBKgDBuABIC7ABIAAjwI8KAAQhGAAgWgWQgXgXAAhFMAAAgr3QAAhGAWgXQAXgYBEAAMA/8AAAQBCAAAXAXQAXAXAABCQABWAgBV9QAABEgXAWQgXAXhGAAI8LAAIAADwIA2ABIELADQCdADBuAFQC8AICVCAQANALAJAPQALARgDAIQgIAUgsARQgLAEgSAAIgeAAIw7ABIw4gBgA9y3kQgMALAAAsMAAAAl2QAAAwALALQAMALAxAAMA5sAAAQAzAAALgLQALgLAAg1MAAAglsQAAgwgLgLQgMgMgyAAMg5rAAAQgxAAgMALg");
	this.shape.setTransform(0,0.1,0.08,0.08,0,0,0,0.3,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACBA7IAAggIgTAgIgIAAIAAgxIAJAAIAAAfIATgfIAJAAIAAAxgABOA7IAAgpIgMAAIAAAPQAAAPgEAFQgDAGgIAAIgEAAIAAgIIACAAQAIAAAAgTIAAgWIAeAAIAAAxgAAgA7IgDgJIgRAAIgDAJIgJAAIARgxIAHAAIASAxgAAbAqIgGgSIgGASIAMAAgAgSA7IAAgUIgQAAIAAAUIgKAAIAAgxIAKAAIAAAUIAQAAIAAgUIAKAAIAAAxgAg/A7IgDgJIgRAAIgDAJIgKAAIASgxIAHAAIASAxgAhEAqIgGgSIgGASIAMAAgAhvA7IgRgaIAAAaIgKAAIAAgxIAKAAIAAAXIAQgXIALAAIgQAXIASAagABQAAIAAgJIg1AAIAAgxIAJAAIAAAoIAOAAIAAgoIAKAAIAAAoIAOAAIAAgoIAJAAIAAAoIAGAAIAAASgABkgJIAAgxIAJAAIAAAxgAAIgJIgDgJIgPAAIgDAJIgKAAIARgxIAGAAIASAxgAACgaIgEgSIgGASIAKAAgAg9gJIAAgxIATAAQAHAAAFAEQAEAEAAAHQAAAHgEAEQgFAEgHAAIgJAAIAAATgAgzgkIAIAAQAIAAAAgHQAAgHgIABIgIAAgAhRgJIgRgaIAAAaIgKAAIAAgxIAKAAIAAAXIAPgXIAMAAIgRAXIASAag");
	this.shape_1.setTransform(0,-1.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-14,34.6,28.2);


(lib.ic1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgT1AimQwCpljfyKQgKg0gLhOIgTiCIAAlcIAGgWQADgMABgJQAalhCIldQCElTDfkjQDbkfEhjYQEhjZFOiBQFViDFogbQIJgoHkCkQHSCeF0E6QFpEwDmGdQDmGdBDHRQBGHfhxHbQhfGRjgFjQjbFak9EJQk+EJl6CYQmFCembAUQhHAEhFAAQqwAApDlagAuiUqQBzFkCqD5QBOBzBPBPQBcBdBqA5QAjATA3AVIBgAmIAAxgQnRAPlpBOgEABrAkjIAbgEQCngqCMh/QCtieB+jnQBjizBfkUQl8hRm/gMgAOZczQiBDwioC3QKHirHQnvQkViRlOhYQhdEPhuDNgA7EZAQHPHvKGCrQioi2iAjxQhtjMhekQQljBgj/CJgAUkF3QgOCdgPBtQgPBrgdCcIgxD/IKvEKQGxo+AlrrIv0AAIgXEPgA9XWRIK3kNQiEnwgNorIv8AAQAmLtGwI7gABvBuQgJAKAAAYIABNHIAEAkIAuAEQHEASFdBMQAWAFALgIQAKgIAEgWIA3lWQAhjMATiJQAIg7ADhXQADhjACgyQgagEgKAAQreAAjRgBQgZAAgJAJgAw0BmIgoADIgCAOQgCAIABAEQAHHhByHdQAGAYAPAEQAHACAbgEQGCg4CigUQA6gHBWgFICSgIIAEgVIABtbQAAgZgNgIQgJgFgZAAgAvZxaQgKAIgEAWQgRBwgmDeQghDIgSCHQgJA9gDBcIgFCcIAuAEQLTAADOABQAdAAAKgMQAIgKAAgcIgBszIAAgxIgpgEQnPgUlchLIgOgCQgLAAgHAGgASjyFQCCHrAPIxIP7AAQgmrsmwo9gEgktgBqIP0AAIAXkNQAOifAPhqQAPhsAdicQAiisAPhUIqvkKQmwI+gmLqgAOuxcQkzAvjwAdQg6AHhWAFIiRAIIAAOSIP3AAIAAgsQgKndhsnCQgHgdgNgHQgHgFgOAAQgJAAgLACgABqzNQDkgIC8gUQDagYDBgqQhzlkiqj5QhPhzhOhOQhdhehqg5QgigTg3gVIhhgmgEgCJgkfQikAriNCAQiOCAhuC1QhbCVhTDRQgXA4gpB2QF7BRHCAMIAAxWIgiAFgAOZ80QBtDMBeEQQFbhdEHiMQnOnvqJirQCpC2CBDxgAzJ/cQlxDeiFDAQEDCJFaBdQBekQBujMQCCjxCsi2QjwAhlxDeg");
	this.shape.setTransform(-11.1,0,0.06,0.06,0,0,0,-0.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApB6IATg7IAJAAIgUA7gABLBwQgDgDgBgEIAAgZQABgDADgEQAGgFAHAAQAPAAADAPIgKAAQgBgHgHAAQgDAAgDADQgCACAAAMQAAALACACQADADADAAQAHAAABgHIAKAAQgDAPgPAAQgIAAgFgFgAASB1IAAgoIgNAAIAAgJIAjAAIAAAJIgNAAIAAAogAgJB1IAAgxIAJAAIAAAxgAg0B1IAAgxIAhAAIAAAJIgXAAIAAAJIAKAAQAIAAAEAFQAEAEAAAHQAAAPgQAAgAgqBsIAJAAQAIAAgBgGQABgHgIAAIgJAAgAhHB1IAAgdIgJATIgGAAIgKgTIAAAdIgJAAIAAgxIAJAAIANAbIANgbIAJAAIAAAxgAA2AmQgIgIAAgNIAAgmQAAgMAIgIQAJgHAMAAQALAAAIAHQAJAIAAAMIAAAmQAAANgJAIQgIAHgLAAQgMAAgJgHgAA/gUIAAAlQAAAMAMAAQAKAAABgMIAAglQgBgNgKAAQgMAAAAANgAgLAmQgJgIAAgNIAAgmQAAgMAJgIQAHgHAKAAQAMAAAIAHQAIAIAAAMIAAAmQAAANgIAIQgIAHgMAAQgKAAgHgHgAgDgUIAAAlQAAAMAJAAQAMAAgBgMIAAglQABgNgMAAQgJAAAAANgAg/AsIAAhJIgTAQIAAgSIATgRIARAAIAABcgAhBg9IAAgLIgbAAIAAALIgJAAIAAgTIAEAAQAGgJAAgTIAAgMIAdAAIAAAoIAGAAIAAATgAhShpQAAAQgFAJIAPAAIAAggIgKAAgAgvhNQgFgEAAgNIAAgEQAAgNAFgEQAFgGAIAAQAHAAAGAGQAFAFAAALIAAAFQAAAMgFAFQgGAGgHAAQgIAAgFgGgAgohuQgDADAAAKIAAADQAAAJADADQADACADAAQADAAADgCQADgDgBgMQABgKgDgDQgDgCgDAAQgEAAgCACg");
	this.shape_1.setTransform(16,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,-15.3,53.2,30.7);


(lib.hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand();
	this.instance.setTransform(-9,-8.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-8.5,18,17);


(lib.gradient = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,0.494,1],-23,0,23,0).s().p("AjlN+IAA77IHLAAIAAb7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-89.5,46,179);


(lib.frukt_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.frukt();
	this.instance.setTransform(-8,-7.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-7.5,16,15);


(lib.btnText = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApABnIAAgjIhSAAIAAAjIgoAAIAAhIIAQAAQAKgZAEgaQAEgdAAgtIAAgHIBtAAIAACEIAUAAIAABIgApwg6QAAAvgPAqIAqAAIAAheIgbAAgAKdAyQgMgMgEgSQgCgLAAgYQAAgaACgLQAEgTAMgMQATgTAcAAQAaAAARAOQASAPAEAaIgrAAQgEgRgRgBQgLAAgGAIQgHAJAAAhQAAAfAHAJQAGAHALAAQARAAAEgSIArAAQgEAcgSAOQgRANgaAAQgcABgTgUgAhzAyQgRgQgBghIgTAAIAABDIgqAAIAAipIAqAAIAABCIATAAQABgSAEgLQAEgKAJgJQARgTAeAAQAeAAASATQARARAAAkIAAASQAAAWgCALQgDARgMAMQgSAUgdgBQgfABgRgUgAhVg5QgGAIAAAbIAAALQAAAcAGAHQAGAIALAAQALAAAGgIQAGgHAAgcIAAgLQAAgbgGgIQgGgIgLAAQgLAAgGAIgANyBEIAAg9IgRAAIgYA9IgyAAIAhhEQgagOAAggQAAgZARgOQAQgPAagBIBDAAIAACpgANNg7QgFAFAAAHQAAAIAFAGQAFAEAIAAIAYAAIAAgjIgYAAQgIAAgFAFgAJEBEIAAhbIg2BbIglAAIAAipIAqAAIAABeIA3heIAkAAIAACpgAF9BEIAAiDIgrAAIAAgmIB/AAIAAAmIgqAAIAACDgAEQBEIAAhbIg3BbIgkAAIAAipIAqAAIAABeIA2heIAlAAIAACpgABoBEIAAg9QgcAEgNAAQgRAAgMgKQgNgLAAgSIAAhJIAqAAIAAA9QAAAIAEADQAEAFAHAAIAagDIAAhKIAqAAIAACpgAkPBEIAAiDIgeAAIAAAsQAAAygNATQgMASgdAAIgRAAIAAglIAFAAQANAAAGgKQAHgLAAgdIAAhSIBwAAIAACpgAmlBEIgyhYIAABYIgqAAIAAipIAqAAIAABRIAuhRIAwAAIgyBQIA3BZgAr4BEIAAipIAqAAIAACpgAtFBEIAAiDIgsAAIAACDIgqAAIAAipICAAAIAACpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,-10.3,185,20.7);


(lib.bntBg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009833").s().p("AyJDsQgvAAghghQghgiAAguIAAj0QAAgvAhghQAhgiAvAAMAkTAAAQAuAAAiAiQAhAhAAAvIAAD0QAAAughAiQgiAhguAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.5,-23.6,255.2,47.3);


(lib.billet1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyFAIAAhhIkBAAIAAhVIDgnJIBjAAIjfHJICdAAIAAiUIBZAAIAACUIBFAAIAABVIhFAAIAABhg");
	this.shape.setTransform(40.7,23.3,0.3,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiBEUQg2gzAAhTIAAkbQAAhTA2gzQA0gxBNAAQBOAAA0AxQA2AzABBTIAAEbQgBBTg2AzQg0AxhOAAQhNAAg0gxgAhDjVQgYAcgBAvIAAEVQABAwAYAcQAZAdAqAAQAqAAAZgdQAagdAAgvIAAkVQAAgvgagcQgZgdgqAAQgqAAgZAdg");
	this.shape_1.setTransform(27.6,23.3,0.3,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1A3IAAhtIBsAAIAABtg");
	this.shape_2.setTransform(18,31.3,0.3,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiBEUQg2gzAAhTIAAkbQAAhTA2gzQA0gxBNAAQBOAAA0AxQA2AzABBTIAAEbQgBBTg2AzQg0AxhOAAQhNAAg0gxgAhDjVQgZAcAAAvIAAEVQAAAwAZAcQAZAdAqAAQAqAAAagdQAZgdAAgvIAAkVQAAgvgZgcQgagdgqAAQgqAAgZAdg");
	this.shape_3.setTransform(8.4,23.3,0.3,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiFEbQg7gwgDhZIBcAAQADAxAeAaQAdAXApAAQAtAAAdgcQAegdAAgyQAAgxgagbQgcgdgzAAIgPAAIAAhOIAPAAQAvAAAZgbQAXgZAAgtQAAgvgcgbQgagZgoAAQgoAAgaAYQgaAZgDArIhcAAQAEhQA2gxQA0guBNAAQBRAAA1AyQA0AyAABPQAABihQAnQBZAmABBvQAABZg7AyQg1AvhUAAQhRAAg0grg");
	this.shape_4.setTransform(-4.8,23.3,0.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiGCzQgdgegNgpQgMgqAAhCQAAhCAMgoQANgpAdgfQA0g2BSAAQBTAAA1A2QAcAeANApQAMApAABCQABBCgMAqQgNApgdAeQg0A2hUAAQhTAAgzg2gAhFh4QgQAUgGAhQgFAbgBArQAAAtAIAcQAGAdAQARQAZAeAqAAQAsAAAbggQAbghABhWQgBgsgFgbQgHgfgQgUQgbgdgrAAQgqAAgbAeg");
	this.shape_5.setTransform(-22.9,26.1,0.3,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACTEeIAAh0IkmAAIAAB0IhXAAIAAjFIAwAAQAag0ALgtQAQhBAAhgIAAh0IExAAIAAF2IA/AAIAADFgAguiEQAABLgMA3QgKAugVAtICqAAIAAkmIh/AAg");
	this.shape_6.setTransform(-36.6,27.8,0.3,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACwG2IAAlHIihAAIikFHIjKAAIC+loQhUgXgwg/QgxhDAAheQAAh2BOhLQBPhLB+AAIGbAAIAANrgAiEkDQglAkAAA/QAAA9AlAjQAmAjBEAAIDMAAIAAkKIjMAAQhEAAgmAkg");
	this.shape_7.setTransform(47.4,-12.6,0.3,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhWJpIAAtZICvAAIAANZgAhdnKIAAieIC7AAIAACeg");
	this.shape_8.setTransform(30.3,-18,0.3,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ADzImIAAjgIqPAAIAAtrICxAAIAALRIFbAAIAArRICwAAIAALRIB9AAIAAF6g");
	this.shape_9.setTransform(12.2,-9.2,0.3,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACeG2IlhnFIAAHFIiyAAIAAtrICyAAIAAGjIFMmjIDTAAIlcGcIF2HPg");
	this.shape_10.setTransform(-13,-12.6,0.3,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AFKJnIhXj3InkAAIhWD3IjFAAIHDzNICVAAIHBTNgAi7DRIF8AAIi8ohg");
	this.shape_11.setTransform(-42.2,-17.9,0.3,0.3);

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009833").s().p("A5aPWQhIAAg0g0Qg0gzAAhJIAA5LQAAhIA0g0QA0g0BIAAMAy1AAAQBJAAAzA0QA0A0AABIIAAZLQAABJg0AzQgzA0hJAAg");
	this.shape_12.setTransform(0,0,0.535,0.535);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-52.6,193,105.2);


(lib.billet = function() {
	this.initialize();

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AkBBsIIDjY");
	this.shape.setTransform(53,33.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrA/QgKgMgDgRQgCgKAAgYQAAgWACgKQADgSAKgLQAUgSAXAAQAXAAAQANQARANAEAaIgoAAQgEgRgQAAQgIAAgFAGQgHAIABAeQgBAeAHAJQAFAGAIABQAQgBAEgRIAoAAQgEAagRANQgQANgXAAQgYAAgTgRg");
	this.shape_1.setTransform(60.7,-23.6,0.7,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBPIAAidIAlAAIAACdg");
	this.shape_2.setTransform(53.2,-23.6,0.7,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBPIAAhMIgXAnIgXAAIgWgnIAABMIgnAAIAAidIAmAAIAiBGIAjhGIAmAAIAACdg");
	this.shape_3.setTransform(44.2,-23.6,0.7,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBPIAAg/IgnAAIAAA/IgnAAIAAidIAnAAIAAA9IAnAAIAAg9IAnAAIAACdg");
	this.shape_4.setTransform(60.9,-39.1,0.7,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BPIAAidIA9AAQAXAAAPAPQAQAOAAAWQAAAWgPANQgPAOgYAAIgWAAIAAA5gAgSgLIAUAAQAIAAAEgFQAFgEAAgHQAAgHgFgEQgEgFgIAAIgUAAg");
	this.shape_5.setTransform(51.4,-39.1,0.7,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBPIAAidIBlAAIAAAjIg9AAIAAB6g");
	this.shape_6.setTransform(42.6,-39.1,0.7,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj+JsIDzniQgYAIgtAAQh9AAhfheQhshpAAiqQAAi8B6hsQBwhkCuAAQCvAABwBkQB6BsAAC8QAABTglBjQgUAzg8B6IjtHogAhYlIQglAmAABDQAABCAlAmQAjAkA1AAQA2AAAjgkQAlgmAAhCQAAhDglgmQgjgkg2AAQg1AAgjAkg");
	this.shape_7.setTransform(4.2,-2.3,0.7,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkeIIQh6hsAAi8QAAhTAlhjQAUgzA8h7IDtnoIE1AAIjzHjQAYgIAtAAQB9AABfBeQBsBoAACrQAAC8h6BsQhwBkivAAQitAAhxhkgAhYB4QglAmAABCQAABCAlAnQAjAkA1AAQA2AAAjgkQAlgnAAhCQAAhCglgmQgjgkg2AAQg1AAgjAkg");
	this.shape_8.setTransform(-57.8,-1.6,0.7,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiAAHIAAgNIEBAAIAAANg");
	this.shape_9.setTransform(-10.7,-2,1,1,0,0,0,-62.8,29.4);

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrA/QgLgMgCgRQgDgKAAgYQAAgWADgKQACgSALgLQATgSAYAAQAXAAAPANQASANAEAaIgoAAQgFgRgPAAQgIAAgGAGQgFAIAAAeQAAAeAFAJQAGAGAIABQAPgBAFgRIAoAAQgEAagSANQgPANgXAAQgYAAgTgRg");
	this.shape_10.setTransform(86.6,42.8,0.3,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBPIAAidIAlAAIAACdg");
	this.shape_11.setTransform(83.4,42.8,0.3,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBPIAAhMIgXAnIgXAAIgWgnIAABMIgnAAIAAidIAmAAIAiBGIAjhGIAmAAIAACdg");
	this.shape_12.setTransform(79.6,42.8,0.3,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUBPIAAg/IgnAAIAAA/IgnAAIAAidIAnAAIAAA9IAnAAIAAg9IAnAAIAACdg");
	this.shape_13.setTransform(86.7,36.2,0.3,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag5BPIAAidIA9AAQAYAAAOAPQAQAOAAAWQAAAWgPANQgQAOgXAAIgWAAIAAA5gAgSgLIAUAAQAHAAAGgFQAEgEAAgHQAAgHgEgEQgGgFgHAAIgUAAg");
	this.shape_14.setTransform(82.6,36.2,0.3,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBPIAAidIBkAAIAAAjIg9AAIAAB6g");
	this.shape_15.setTransform(78.9,36.2,0.3,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2ADIAAgFIBtAAIAAAFg");
	this.shape_16.setTransform(82.9,39.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkRIRQh6hqAAi2IAAniQAAi1B6hqQBuhgCjgBQCkABBuBgQB6BqAAC1IAAHiQAAC2h6BqQhuBgikAAQijAAhuhggAhOlRQghAiAAA+IAAHkQAAA+AhAhQAfAgAvAAQAwAAAfggQAhghAAg+IAAnkQAAg+ghgiQgfgggwAAQgvAAgfAgg");
	this.shape_17.setTransform(67.5,33.4,0.193,0.193);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkQJnIF+vNIkEAAIAADCIkOAAIAAnCINKAAIAAEAImBPNg");
	this.shape_18.setTransform(50.6,33.4,0.193,0.193);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJJnIAAueIkHDkIAAkvIEHjkIEaAAIAATNg");
	this.shape_19.setTransform(32.7,33.4,0.193,0.193);

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009833").s().p("A5aPWQhIAAg0g0Qg0gzAAhJIAA5LQAAhIA0g0QA0g0BIAAMAy1AAAQBJAAAzA0QA0A0AABIIAAZLQAABJg0AzQgzA0hJAAg");
	this.shape_20.setTransform(0,0,0.535,0.535);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-52.6,193,105.2);


(lib.bg1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F57921").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAmIAAgeIgeAAIAAgQIAeAAIAAgdIAPAAIAAAdIAeAAIAAAQIgeAAIAAAeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.8,-3.8,7.7,7.7);


(lib.icons = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ic2();
	this.instance.setTransform(30.8,0);

	this.instance_1 = new lib.ic1();
	this.instance_1.setTransform(-37.7,0);

	this.instance_2 = new lib.Symbol();
	this.instance_2.setTransform(1.2,0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.2,-15.3,112.3,30.7);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtuCyQgjAAgZgZQgZgZAAgjIAAi4QAAgkAZgZQAZgZAjAAIbdAAQAjAAAZAZQAZAZAAAkIAAC4QAAAjgZAZQgZAZgjAAg");

	// Layer 3
	this.instance = new lib.gradient();
	this.instance.setTransform(-129,-29.5,1,1,30);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:147.9,y:2.5},19).wait(1));

	// Слой 2
	this.instance_1 = new lib.btnText();
	this.instance_1.setTransform(0,0,0.756,0.757);

	this.instance_2 = new lib.bntBg();
	this.instance_2.setTransform(0,0,0.756,0.757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-17.9,193,35.8);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.btn.play();
	}
	this.frame_182 = function() {
		this.btn.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(143).call(this.frame_182).wait(61));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(0,-266.1,0.983,0.983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161).to({scaleX:1.47,scaleY:1.47,y:-43},10).wait(50).to({scaleX:0.98,scaleY:0.98,y:-266.1},10).wait(12));

	// btn
	this.btn = new lib.btn();
	this.btn.setTransform(182,84,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(18).to({x:0,y:95},0).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(1).to({scaleX:0.16,scaleY:0.16},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:94.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:94.8},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(33).to({y:98.5},0).wait(1).to({y:109.3},0).wait(1).to({y:126.6},0).wait(1).to({y:148.8},0).wait(1).to({y:173.9},0).wait(1).to({y:199.4},0).wait(1).to({y:222.6},0).wait(1).to({y:241.2},0).wait(1).to({y:253.1},0).wait(1).to({y:257.2},0).wait(87).to({scaleX:1.2,scaleY:1.2,y:51.8},10).wait(50).to({scaleX:1,scaleY:1,y:94.8,alpha:0},10).wait(12));

	// bg
	this.instance_1 = new lib.bg1();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(151).to({_off:false},0).to({alpha:1},10).wait(70).to({alpha:0},11).wait(1));

	// icons
	this.instance_2 = new lib.icons();
	this.instance_2.setTransform(0.2,-111,0.026,0.026);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).wait(1).to({regX:-8.1,scaleX:0.07,scaleY:0.07,x:0},0).wait(1).to({scaleX:0.21,scaleY:0.21},0).wait(1).to({scaleX:0.43,scaleY:0.43},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.37,scaleY:1.37},0).wait(1).to({scaleX:1.66,scaleY:1.66},0).wait(1).to({scaleX:1.89,scaleY:1.89},0).wait(1).to({scaleX:2.03,scaleY:2.03},0).wait(1).to({regX:0,scaleX:2.08,scaleY:2.08,x:16.9},0).to({scaleX:1.9,scaleY:1.9,x:15.4},5).to({_off:true},57).wait(82));

	// billet1
	this.instance_3 = new lib.billet1();
	this.instance_3.setTransform(-79.8,-11.4,0.02,0.02);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).wait(1).to({scaleX:0.03,scaleY:0.03,y:-11.5},0).wait(1).to({scaleX:0.08,scaleY:0.08},0).wait(1).to({scaleX:0.14,scaleY:0.14},0).wait(1).to({scaleX:0.23,scaleY:0.23},0).wait(1).to({scaleX:0.34,scaleY:0.34},0).wait(1).to({scaleX:0.44,scaleY:0.44},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({regY:-0.1,scaleX:0.65,scaleY:0.65,y:-11.4},0).to({scaleX:0.6,scaleY:0.6,y:-11.5},5).to({_off:true},72).wait(82));

	// billet
	this.instance_4 = new lib.billet();
	this.instance_4.setTransform(0,6,0.02,0.02);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(1).to({scaleX:0.16,scaleY:0.16},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(16).to({scaleX:1.1,scaleY:1.1},5).wait(5).to({scaleX:1,scaleY:1},5).wait(11).to({scaleX:0.99,scaleY:0.99,x:1.6,y:9.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:6.7,y:21.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:15.1,y:40.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:26.2,y:65.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:38.9,y:94.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:51.4,y:123.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:62,y:147.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:69.9,y:165.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:74.5,y:175.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:76,y:179.3},0).to({_off:true},87).wait(82));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_74 = new cjs.Graphics().p("A1LMEIAA4HMAqXAAAIAAYHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_graphics_74,x:10.8,y:80.9}).wait(87).to({graphics:null,x:0,y:0}).wait(82));

	// hand
	this.instance_5 = new lib.hand_1();
	this.instance_5.setTransform(-336.5,151.6,0.801,0.801);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).wait(1).to({x:-330.1},0).wait(1).to({x:-310.3},0).wait(1).to({x:-277.9},0).wait(1).to({x:-235.6},0).wait(1).to({x:-188.8},0).wait(1).to({x:-143.8},0).wait(1).to({x:-105.9},0).wait(1).to({x:-78.3},0).wait(1).to({x:-62},0).wait(1).to({x:-56.8},0).wait(20).to({y:157.2},5).to({y:151.6},5).wait(13).to({y:156.4},4).to({y:151.6},2).to({_off:true},38).wait(82));

	// frukt
	this.instance_6 = new lib.frukt_1();
	this.instance_6.setTransform(-335.1,145.9,0.801,0.801);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({_off:false},0).wait(1).to({x:-328.7},0).wait(1).to({x:-308.9},0).wait(1).to({x:-276.5},0).wait(1).to({x:-234.3},0).wait(1).to({x:-187.5},0).wait(1).to({x:-142.4},0).wait(1).to({x:-104.5},0).wait(1).to({x:-77},0).wait(1).to({x:-60.7},0).wait(1).to({x:-55.4},0).wait(20).to({y:151.5},5).to({y:117.1},5).to({y:145.9},5).wait(8).to({y:150.7},4).to({y:145.9},2).wait(1).to({x:-53.3,y:112.4},0).wait(1).to({x:-51.7,y:94},0).wait(1).to({x:-49.5,y:73.4},0).wait(1).to({x:-47,y:56.4},0).wait(1).to({x:-44.1,y:41},0).wait(1).to({x:-40.5,y:27.8},0).wait(1).to({x:-35.6,y:16.7},0).wait(1).to({x:-26.7,y:10.4},0).wait(1).to({x:-9.9,y:29.5},0).wait(1).to({x:-1.5,y:49.4},0).wait(1).to({x:1.3,y:57.3},0).wait(1).to({x:3.2,y:61.6},0).to({_off:true},26).wait(82));

	// img
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.setTransform(-289.6,89.5,0.801,0.801);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).wait(1).to({x:-283.6},0).wait(1).to({x:-265.6},0).wait(1).to({x:-236.1},0).wait(1).to({x:-197},0).wait(1).to({x:-152.1},0).wait(1).to({x:-106.5},0).wait(1).to({x:-65.7},0).wait(1).to({x:-34.1},0).wait(1).to({x:-14.5},0).wait(1).to({x:-8},0).to({_off:true},87).wait(82));

	// t1
	this.instance_8 = new lib.t1();
	this.instance_8.setTransform(0,-70,0.02,0.024);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:0.06,scaleY:0.06},0).wait(1).to({scaleX:0.16,scaleY:0.16},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1,scaleY:1},0).wait(51).to({y:-72.5},0).wait(1).to({y:-80.3},0).wait(1).to({y:-93.2},0).wait(1).to({y:-110.3},0).wait(1).to({y:-129.8},0).wait(1).to({y:-148.9},0).wait(1).to({y:-165.2},0).wait(1).to({y:-177.3},0).wait(1).to({y:-184.4},0).wait(1).to({y:-186.7},0).to({_off:true},87).wait(82));

	// bg
	this.instance_9 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(243));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-301,334,601);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300,1,1,0,0,0,0,-0.2);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(149,299,335,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;