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
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/car.png", id:"car"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/img4.jpg", id:"img4"},
		{src:"images/img5.jpg", id:"img5"}
	]
};



// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,211);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,456);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,456);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,456);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,456);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,456);


(lib.t2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxGhXIAcAAIAAB3IB5h/IAAC5IgcAAIAAh2Ih5B+gAStBZQgEgFAAgHQAAgGAEgGQAGgFAGAAQAHAAAGAFQAEAGAAAGQAAAHgEAFQgGAFgHAAQgHAAgFgFgAMiBFQgcgbAAgpQAAgpAcgbQAbgYAmABQAbAAAVANIAAAgQgVgTgcAAQgfAAgQASQgMAOgEATIBXAAIAAAYIhYAAQACAWAPAPQARAVAeAAQAbgBAWgUIAAAgQgWAOgcAAQglAAgagZgAEoBDQgagaAAgoQAAglAagbQAbgbAoAAQAoAAAbAbQAaAbAAAlQAAAogaAaQgbAbgoAAQgoAAgbgbgAE8gtQgRASgBAcQABAdARAUQATATAcAAQAcAAATgTQASgUAAgdQAAgcgSgSQgTgUgcABQgcgBgTAUgAkhBFQgdgbAAgpQAAgpAdgbQAYgXAoAAQAcAAAUANIAAAgQgVgTgbAAQgdgBgSAUQgRASAAAcQgBAdATAUQASATAcAAQAaAAAWgWIAAAhQgVAOgcAAQgmAAgZgZgAqEAzIAYgNQAMAfAhAAQAOgBAKgGQAMgHAAgQQAAgegqgBIgQAAIAAgXIAQAAQAPAAAIgHQAJgIAAgMQAAgJgGgHQgIgGgNAAQgXgBgOATIgSgSQAXgbAgABQAYgBAOANQAPANABAVQAAAZgXANQARAFAIAKQAJAMAAAQQAAAegYAPQgSAMgXAAQgwAAgUgrgAihBaIAAgZIAJABQAKAAAHgFQAIgKABghIAAhpIByAAIAACxIgcAAIAAiXIg7AAIAABXQAAAUgCAKQgFAQgLAJQgNALgTAAQgHAAgFgCgAOzBaIAAixIAbAAIAACYIA/AAIAAiYIAcAAIAACYIA/AAIAAiYIAcAAIAACxgAKKBaIAYg1IhAh8IAhAAIAvBbIAphbIAcAAIhQCxgAHpBaIAAixIAbAAIAXABQAMACAJAGQAVAPAAAaQAAAVgQAMQAQAEAHAMQAIALAAAOQAAAagSAPQgPAMghAAgAIEBBIARAAQAjAAAAgcQAAgagjAAIgRAAgAIEgJIAIAAQAegBAAgaQAAgZgcAAIgKAAgAC0BaIAAixIBaAAIAAAaIg/AAIAACXgAAwBaIAYg1IhAh8IAhAAIAvBbIAphbIAdAAIhRCxgAlhBaIgUgrIhMAAIgTArIgeAAIBZi7IBVC7gAl/AVIgbg6IgcA6IA3AAgAyhBaIAAiXIgoAAIAAgaIBtAAIAAAaIgqAAIAACXgAtVAtIAAgXICBAAIAAAXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122.7,-9.8,245.4,19.7);


(lib.t1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMdBbQgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAQgHAAgFgFgAp5BHQgdgcAAgoQAAgoAdgbQAZgZAoAAQAcAAAUAOIAAAgQgVgTgcAAQgdAAgRASQgSATAAAcQAAAeASATQASASAcABQAbgBAWgUIAAAgQgXAOgbAAQglAAgagZgAKUBcIAAixIAcAAIAABIIAUAAQAdAAAQANQARAPAAAYQAAAcgXAPQgOAKgZAAgAKwBDIATAAQAjAAAAgcQAAgcgjAAIgTAAgAI4BcIAAiXIgoAAIAAgaIBtAAIAAAaIgpAAIAACXgAGeBcIAYg1IhAh8IAhAAIAvBbIAphbIAcAAIhQCxgAFEBcIAAhTIhMAAIAABTIgcAAIAAixIAcAAIAABGIBMAAIAAhGIAbAAIAACxgABqBcIAAixIBaAAIAAAaIg+AAIAACXgAA3BcIgTgrIhKAAIgTArIgeAAIBXi7IBVC7gAAZAYIgZg7IgbA7IA0AAgAi7BcIAAixIAnAAQAZAAAOAKQAWAOAAAdQAAAZgRANQgRAOgbAAIgMAAIAABIgAiggEIAMAAQAiAAAAgcQAAgbgiAAIgMAAgAkABcIAAiXIhMAAIAACXIgcAAIAAixICEAAIAACxgAnoBcIAAixIAcAAIAACxgAsRBcIAYg1IhAh8IAhAAIAvBbIAphbIAdAAIhRCxg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.6,-9.6,165.3,19.3);


(lib.logo = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkPDJQhwhOAAh7QAAh5BwhOQBthMCiAAQBGAAA+APQASAGgFAPQgBAFgMARQgWAYhDBcQhBBcgRAbQgPAVgBATQgCAXAcAAIFBAAQAWAAAIgcQAHgaAAgbQAAhNgtg5Qgsg3hNgcIATgcQBdAhA1A+QA4BCAABUQAABFgoA2QgIALgEAEQgIAFgOAAImSAAQhEgDgMgwQgLgqAhgzQAPgZA+hUQA+hVAaghQAFgIgFgEQgEgEgKAAQiNAAhaBAQhfBEAABwQAABmBfBHQBfBICIAAQBJAABBgWQA+gVAugnIA/AAQg2A1hQAdQhTAfhdAAQiiAAhthLg");
	this.shape.setTransform(-116,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEVCKQgkAAghgUQgygfAAg9IAAiRIikBvIDICSIiXAAIiBhfIiPBfIsAAAQgnABgegYQgpghAAhGIAAiWIBgAAIAACfQAAA+A+AAIDaAAQATguAtggIhNAAQAIg1AwgqQA2gwBOAAIF3AAICBBfICMhfICvAAIAACfQAAA+A+AAIC3AAIAAjdIBgAAIAADdIFGAAQAhgBALgDQAQgHAAgRQAAgcgkAAIk5AAQAAhCAlguQAqg1BPAAIEYAAIAAA3IkMAAQgaAAgQASQgPAPgCAYIDjAAQA4AAAfAOQAqATAAAzQAAAxg0AUQgfALgvAAgApIAtQgUAQgCAWIFpAAIByhKIiph8IAAAgIj0AAQgaAAgWASQgUARgCAWIEjAAIAAA1IjVAAQgagBgWATg");
	this.shape_1.setTransform(43.6,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-154.4,-27.6,308.9,55.3);


(lib.lexus = function() {
	this.initialize();

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIADJQgmghgLg0IAygNQAFAjAZAYQAZAYAjAAQAUAAAPgHQARgGANgMQANgMAIgQQAHgSAAgRQAAgSgGgOQgGgNgMgLQgLgKgNgHIg/gbIgogUQgQgJgOgOQgNgNgIgSQgHgTAAgWQAAgaAKgVQAKgWASgPQARgPAYgIQAVgIAbAAQAmAAAdASQAfASASAiIgoAZQgOgYgSgNQgSgMgcAAQgeAAgXAUQgWAUAAAfQAAAMAHAMQAFALALAIQALAJALAGIA4AZQAUAJAYANQASAKAPANQAOAPAJAUQAJAUAAAZQAAAdgLAaQgKAYgVAVQgUATgZAKQgaALgdAAQg3AAgmgggAC7DdQghgNgVgVQgcgbgIgdQgIgcAAgvIAAkZIAyAAIAAELQAAAoADAVQAEAWANASQANATAaANQAaALAaAAQAZAAAYgLQAYgLAQgSQAOgSAEgWQADgVAAgrIAAkLIAzAAIAAEZQAAAsgIAcQgHAbgZAaQgWAZggANQghAOgiAAQggAAgfgMgAgEDhIhoi6IhnC6Ig6AAICGjoIh6jaIA5AAIBcCqIBciqIA4AAIh4DaICDDogAoYDhIAAnCIDqAAIAAAvIi4AAIAACGICzAAIAAAtIizAAIAACyIC4AAIAAAugArqDhIAAnCIAzAAIAAGUIB8AAIAAAug");
	this.shape.setTransform(36.9,-1.3,1,1,0,0,0,39.7,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.6,-24.7,155.1,46.8);


(lib.img5_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img5();
	this.instance.setTransform(-150,-228);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-228,300,456);


(lib.img4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img4();
	this.instance.setTransform(-150,-228);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-228,300,456);


(lib.img3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img3();
	this.instance.setTransform(-150,-228);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-228,300,456);


(lib.img2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img2();
	this.instance.setTransform(-150,-228);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-228,300,456);


(lib.img1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();
	this.instance.setTransform(-150,-228);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-228,300,456);


(lib.finalText = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,147.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.9,-77.8,233.3,255);


(lib.ES = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxDJQgmgggLg1IAxgNQAFAjAZAYQAaAYAiAAQATAAAQgHQARgGANgMQAOgNAHgPQAHgQAAgTQAAgTgGgNQgHgOgLgKQgLgJgNgIIg/gbQgZgLgOgJQgRgJgOgOQgNgOgHgRQgIgSAAgXQAAgaAKgVQALgWAQgPQATgQAXgHQAVgIAaAAQAnAAAeASQAfASARAiIgnAZQgPgZgSgMQgSgMgcAAQgeAAgWAUQgXAUABAfQAAANAFALQAHALAKAIQALAJALAGIA4AZQAVAJAYANQAQAKAQANQAPAPAIAUQAJAUgBAZQABAegLAZQgLAagUATQgUATgaAKQgaALgdAAQg1AAgmgggAkaDhIAAnCIDqAAIAAAvIi3AAIAACGICzAAIAAAtIizAAIAACyIC3AAIAAAug");
	this.shape.setTransform(-84.7,-1.6,1,1,0,0,0,-86.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,-25,56.6,46.9);


(lib.dillers = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-84.1,224.9,168.2);


(lib.car_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car();
	this.instance.setTransform(-146,-105);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-146,-105,293,211);


(lib.bgImg2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg2();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bgImg1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bgImg1();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finText
	this.instance = new lib.finalText();
	this.instance.setTransform(2,104);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(389).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},10).to({_off:true},1).wait(10));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(-67,272.2,0.439,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(379).to({scaleX:0.91,scaleY:0.91,x:0,y:-2.3},10).wait(55).to({scaleX:0.44,scaleY:0.44,x:-67,y:272.2},10).wait(1));

	// dillers
	this.instance_2 = new lib.dillers();
	this.instance_2.setTransform(-262.4,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(339).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(25).to({x:262.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(70));

	// bgImg2
	this.instance_3 = new lib.bgImg2_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},10).wait(319).to({alpha:1},10).wait(116));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.setTransform(-327.2,-58.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(289).to({_off:false},0).to({x:8.5},10,cjs.Ease.get(1)).to({_off:true},40).wait(116));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.setTransform(-367.3,-93);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(279).to({_off:false},0).to({x:-31.7},10,cjs.Ease.get(1)).to({_off:true},50).wait(116));

	// ES
	this.instance_6 = new lib.ES();
	this.instance_6.setTransform(-177.8,-168.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({x:84.8},10,cjs.Ease.get(1)).wait(25).to({regX:1.4,regY:-1.6,x:86.6,y:-161.3},0).wait(1).to({x:87.9,y:-133.3},0).wait(1).to({x:90.1,y:-85},0).wait(1).to({x:93.2,y:-19.3},0).wait(1).to({x:96.7,y:55.8},0).wait(1).to({x:100,y:128.3},0).wait(1).to({x:102.8,y:188.1},0).wait(1).to({x:104.7,y:230.3},0).wait(1).to({x:105.9,y:254.3},0).wait(1).to({regX:0,regY:0,x:104.8,y:263.4},0).wait(211).to({regX:1.4,regY:-1.6,x:106,y:258},0).wait(1).to({x:105.5,y:246.5},0).wait(1).to({x:104.6,y:226.7},0).wait(1).to({x:103.3,y:198.3},0).wait(1).to({x:101.6,y:161.9},0).wait(1).to({x:99.6,y:118.5},0).wait(1).to({x:97.3,y:70.5},0).wait(1).to({x:95,y:20.7},0).wait(1).to({x:92.8,y:-27.2},0).wait(1).to({x:90.8,y:-70.5},0).wait(1).to({x:89.1,y:-106.9},0).wait(1).to({x:87.8,y:-135.1},0).wait(1).to({x:86.9,y:-154.9},0).wait(1).to({x:86.4,y:-166.4},0).wait(1).to({regX:0,regY:0,x:84.8,y:-168.5},0).to({_off:true},60).wait(116));

	// lexus
	this.instance_7 = new lib.lexus();
	this.instance_7.setTransform(-300,-168.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({x:-36.9},10,cjs.Ease.get(1)).wait(24).to({x:-300},15,cjs.Ease.get(-1)).to({_off:true},1).wait(209).to({_off:false},0).to({x:-36.9},10,cjs.Ease.get(1)).to({_off:true},60).wait(116));

	// car
	this.instance_8 = new lib.car_1();
	this.instance_8.setTransform(0,163.1,0.956,0.955);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},339).wait(116));

	// m (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_214 = new cjs.Graphics().p("Eg3yAAAMA3yg3yMA3zA3yMg3zA3zg");
	var mask_graphics_215 = new cjs.Graphics().p("Eg0jAAAMA0jg0jMA0kA0jMg0kA0kg");
	var mask_graphics_216 = new cjs.Graphics().p("EgxUAAAMAxUgxUMAxVAxUMgxVAxVg");
	var mask_graphics_217 = new cjs.Graphics().p("EguFAAAMAuFguFMAuGAuFMguGAuGg");
	var mask_graphics_218 = new cjs.Graphics().p("Egq2AAAMAq2gq2MAq3Aq2Mgq3Aq3g");
	var mask_graphics_219 = new cjs.Graphics().p("EgnmAAAMAnmgnmMAnnAnmMgnnAnng");
	var mask_graphics_220 = new cjs.Graphics().p("EgkXAAAMAkXgkXMAkYAkXMgkYAkYg");
	var mask_graphics_221 = new cjs.Graphics().p("EghIAAAMAhIghIMAhJAhIMghJAhJg");
	var mask_graphics_222 = new cjs.Graphics().p("A95AAId595Id6d5I96d6g");
	var mask_graphics_223 = new cjs.Graphics().p("A6qAAIaq6qIaraqI6rarg");
	var mask_graphics_224 = new cjs.Graphics().p("A3bAAIXb3bIXcXbI3cXcg");
	var mask_graphics_225 = new cjs.Graphics().p("A3RAAIXR3RIXSXRI3SXSg");
	var mask_graphics_226 = new cjs.Graphics().p("A2yAAIWy2yIWzWyI2zWzg");
	var mask_graphics_227 = new cjs.Graphics().p("A2BAAIWB2BIWCWBI2CWCg");
	var mask_graphics_228 = new cjs.Graphics().p("A1BAAIVB1BIVCVBI1CVCg");
	var mask_graphics_229 = new cjs.Graphics().p("Az6AAIT6z6IT7T6Iz7T7g");
	var mask_graphics_230 = new cjs.Graphics().p("Ay0AAIS0y0IS1S0Iy1S1g");
	var mask_graphics_231 = new cjs.Graphics().p("Ax4AAIR4x4IR5R4Ix5R5g");
	var mask_graphics_232 = new cjs.Graphics().p("AxLAAIRLxLIRMRLIxMRMg");
	var mask_graphics_233 = new cjs.Graphics().p("AwwAAIQwwwIQxQwIwxQxg");
	var mask_graphics_234 = new cjs.Graphics().p("AwnAAIQnwnIQoQnIwoQog");
	var mask_graphics_259 = new cjs.Graphics().p("AwnAAIQnwnIQoQnIwoQog");
	var mask_graphics_260 = new cjs.Graphics().p("AwnAAIQnwnIQoQnIwoQog");
	var mask_graphics_261 = new cjs.Graphics().p("AwoAAIQownIQoQnIwoQog");
	var mask_graphics_262 = new cjs.Graphics().p("AwnAAIQnwnIQoQnIwoQog");
	var mask_graphics_263 = new cjs.Graphics().p("AwnAAIQnwnIQoQnIwoQog");
	var mask_graphics_264 = new cjs.Graphics().p("AwnAAIQnwnIQoQnIwoQog");
	var mask_graphics_265 = new cjs.Graphics().p("AxIAAIQpwnIQnQnIwnQog");
	var mask_graphics_266 = new cjs.Graphics().p("AzdAAIQpwnIQnQnIwnQog");
	var mask_graphics_267 = new cjs.Graphics().p("A2IAAIQpwnIQnQnIwnQog");
	var mask_graphics_268 = new cjs.Graphics().p("A5LAAIQpwnIQnQnIwnQog");
	var mask_graphics_269 = new cjs.Graphics().p("A8kAAIQpwnIQmQnIwmQog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(214).to({graphics:mask_graphics_214,x:0,y:-98}).wait(1).to({graphics:mask_graphics_215,x:0,y:-103.2}).wait(1).to({graphics:mask_graphics_216,x:0,y:-108.4}).wait(1).to({graphics:mask_graphics_217,x:0,y:-113.6}).wait(1).to({graphics:mask_graphics_218,x:0,y:-118.8}).wait(1).to({graphics:mask_graphics_219,x:0,y:-124}).wait(1).to({graphics:mask_graphics_220,x:0,y:-129.2}).wait(1).to({graphics:mask_graphics_221,x:0,y:-134.4}).wait(1).to({graphics:mask_graphics_222,x:0,y:-139.6}).wait(1).to({graphics:mask_graphics_223,x:0,y:-144.8}).wait(1).to({graphics:mask_graphics_224,x:0,y:-150}).wait(1).to({graphics:mask_graphics_225,x:-0.7,y:-148}).wait(1).to({graphics:mask_graphics_226,x:-2.8,y:-142}).wait(1).to({graphics:mask_graphics_227,x:-6.3,y:-132.2}).wait(1).to({graphics:mask_graphics_228,x:-10.8,y:-119.5}).wait(1).to({graphics:mask_graphics_229,x:-15.8,y:-105.3}).wait(1).to({graphics:mask_graphics_230,x:-20.7,y:-91.4}).wait(1).to({graphics:mask_graphics_231,x:-24.9,y:-79.5}).wait(1).to({graphics:mask_graphics_232,x:-28,y:-70.6}).wait(1).to({graphics:mask_graphics_233,x:-29.9,y:-65.2}).wait(1).to({graphics:mask_graphics_234,x:-30.5,y:-63.5}).wait(25).to({graphics:mask_graphics_259,x:-30.5,y:-63.5}).wait(1).to({graphics:mask_graphics_260,x:-32.8,y:-63.5}).wait(1).to({graphics:mask_graphics_261,x:-39.7,y:-63.5}).wait(1).to({graphics:mask_graphics_262,x:-51.1,y:-63.5}).wait(1).to({graphics:mask_graphics_263,x:-67.1,y:-63.5}).wait(1).to({graphics:mask_graphics_264,x:-87.7,y:-63.5}).wait(1).to({graphics:mask_graphics_265,x:-109.7,y:-63.5}).wait(1).to({graphics:mask_graphics_266,x:-124.6,y:-63.5}).wait(1).to({graphics:mask_graphics_267,x:-141.8,y:-63.5}).wait(1).to({graphics:mask_graphics_268,x:-161.2,y:-63.5}).wait(1).to({graphics:mask_graphics_269,x:-183,y:-63.5}).wait(1).to({graphics:null,x:0,y:0}).wait(185));

	// img
	this.instance_9 = new lib.img5_1();
	this.instance_9.setTransform(-300,-72);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(199).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(16).to({scaleX:0.99,scaleY:0.99,x:-0.7,y:-71},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-2.8,y:-68},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-6.2,y:-63.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-10.7,y:-56.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-15.6,y:-49.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-20.5,y:-42.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-24.6,y:-36.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-27.7,y:-32.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-29.6,y:-29.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-30.2,y:-29},0).wait(25).to({x:-259.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(185));

	// m (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_179 = new cjs.Graphics().p("Eg3yAAAMA3yg3yMA3zA3yMg3zA3zg");
	var mask_1_graphics_180 = new cjs.Graphics().p("Eg0jAAAMA0jg0jMA0kA0jMg0kA0kg");
	var mask_1_graphics_181 = new cjs.Graphics().p("EgxUAAAMAxUgxUMAxVAxUMgxVAxVg");
	var mask_1_graphics_182 = new cjs.Graphics().p("EguFAAAMAuFguFMAuGAuFMguGAuGg");
	var mask_1_graphics_183 = new cjs.Graphics().p("Egq2AAAMAq2gq2MAq3Aq2Mgq3Aq3g");
	var mask_1_graphics_184 = new cjs.Graphics().p("EgnmAAAMAnmgnmMAnnAnmMgnnAnng");
	var mask_1_graphics_185 = new cjs.Graphics().p("EgkXAAAMAkXgkXMAkYAkXMgkYAkYg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EghIAAAMAhIghIMAhJAhIMghJAhJg");
	var mask_1_graphics_187 = new cjs.Graphics().p("A95AAId595Id6d5I96d6g");
	var mask_1_graphics_188 = new cjs.Graphics().p("A6qAAIaq6qIaraqI6rarg");
	var mask_1_graphics_189 = new cjs.Graphics().p("A3bAAIXb3bIXcXbI3cXcg");
	var mask_1_graphics_190 = new cjs.Graphics().p("A3KAAIXK3KIXLXKI3LXLg");
	var mask_1_graphics_191 = new cjs.Graphics().p("A2XAAIWX2XIWYWXI2YWYg");
	var mask_1_graphics_192 = new cjs.Graphics().p("A1DAAIVD1DIVEVDI1EVEg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AzXAAITXzXITYTXIzYTYg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AxeAAIRexeIRfReIxfRfg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AvoAAIPovoIPpPoIvpPpg");
	var mask_1_graphics_196 = new cjs.Graphics().p("At7AAIODuDIOFODIuFOEg");
	var mask_1_graphics_197 = new cjs.Graphics().p("ArQAAIM3s4IM6M4Is6M5g");
	var mask_1_graphics_198 = new cjs.Graphics().p("AppAAIMKsKIMMMKIsMMLg");
	var mask_1_graphics_199 = new cjs.Graphics().p("ApHAAIL7r7IL8L7Ir8L8g");
	var mask_1_graphics_259 = new cjs.Graphics().p("ApHAAIL7r7IL8L7Ir8L8g");
	var mask_1_graphics_260 = new cjs.Graphics().p("Ao+AAIL7r7IL9L7Ir9L8g");
	var mask_1_graphics_261 = new cjs.Graphics().p("AogAAIL7r7IL9L7Ir9L8g");
	var mask_1_graphics_262 = new cjs.Graphics().p("AnuAAIL7r7IL9L7Ir9L8g");
	var mask_1_graphics_263 = new cjs.Graphics().p("AmpAAIL7r7IL9L7Ir9L8g");
	var mask_1_graphics_264 = new cjs.Graphics().p("AlQAAIL7r7IL9L7Ir9L8g");
	var mask_1_graphics_265 = new cjs.Graphics().p("AjjAAIL7r7IL9L7Ir9L8g");
	var mask_1_graphics_266 = new cjs.Graphics().p("AhiAAIL7r7IL9L7Ir9L8g");
	var mask_1_graphics_267 = new cjs.Graphics().p("AAwAAIL9r7IL9L7Ir9L8g");
	var mask_1_graphics_268 = new cjs.Graphics().p("ADYAAIL9r7IL9L7Ir9L8g");
	var mask_1_graphics_269 = new cjs.Graphics().p("AGVAAIL9r7IL8L7Ir8L8g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_1_graphics_179,x:0,y:-98}).wait(1).to({graphics:mask_1_graphics_180,x:0,y:-103.2}).wait(1).to({graphics:mask_1_graphics_181,x:0,y:-108.4}).wait(1).to({graphics:mask_1_graphics_182,x:0,y:-113.6}).wait(1).to({graphics:mask_1_graphics_183,x:0,y:-118.8}).wait(1).to({graphics:mask_1_graphics_184,x:0,y:-124}).wait(1).to({graphics:mask_1_graphics_185,x:0,y:-129.2}).wait(1).to({graphics:mask_1_graphics_186,x:0,y:-134.4}).wait(1).to({graphics:mask_1_graphics_187,x:0,y:-139.6}).wait(1).to({graphics:mask_1_graphics_188,x:0,y:-144.8}).wait(1).to({graphics:mask_1_graphics_189,x:0,y:-150}).wait(1).to({graphics:mask_1_graphics_190,x:2.6,y:-147.6}).wait(1).to({graphics:mask_1_graphics_191,x:10.4,y:-140.5}).wait(1).to({graphics:mask_1_graphics_192,x:23.1,y:-128.8}).wait(1).to({graphics:mask_1_graphics_193,x:39.7,y:-113.7}).wait(1).to({graphics:mask_1_graphics_194,x:58.2,y:-96.7}).wait(1).to({graphics:mask_1_graphics_195,x:76.2,y:-80.2}).wait(1).to({graphics:mask_1_graphics_196,x:90.9,y:-66}).wait(1).to({graphics:mask_1_graphics_197,x:92.9,y:-55.4}).wait(1).to({graphics:mask_1_graphics_198,x:94.1,y:-49.1}).wait(1).to({graphics:mask_1_graphics_199,x:94.5,y:-47}).wait(60).to({graphics:mask_1_graphics_259,x:94.5,y:-47}).wait(1).to({graphics:mask_1_graphics_260,x:95.5,y:-47}).wait(1).to({graphics:mask_1_graphics_261,x:98.5,y:-47}).wait(1).to({graphics:mask_1_graphics_262,x:103.4,y:-47}).wait(1).to({graphics:mask_1_graphics_263,x:110.3,y:-47}).wait(1).to({graphics:mask_1_graphics_264,x:119.2,y:-47}).wait(1).to({graphics:mask_1_graphics_265,x:130.1,y:-47}).wait(1).to({graphics:mask_1_graphics_266,x:143,y:-47}).wait(1).to({graphics:mask_1_graphics_267,x:157.9,y:-47}).wait(1).to({graphics:mask_1_graphics_268,x:174.7,y:-47}).wait(1).to({graphics:mask_1_graphics_269,x:193.5,y:-47}).wait(1).to({graphics:null,x:0,y:0}).wait(185));

	// img
	this.instance_10 = new lib.img4_1();
	this.instance_10.setTransform(-300,-72);
	this.instance_10._off = true;

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(164).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(16).to({scaleX:0.99,scaleY:0.99,x:2.6,y:-70.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:10.3,y:-66},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:22.9,y:-58.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:39.3,y:-49.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:57.7,y:-38.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:75.6,y:-28},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:90.9,y:-19},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:102.4,y:-12.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:109.3,y:-8.3},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:111.5,y:-7},0).wait(60).to({x:309.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(185));

	// m (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_144 = new cjs.Graphics().p("Eg3yAAAMA3yg3yMA3zA3yMg3zA3zg");
	var mask_2_graphics_145 = new cjs.Graphics().p("Eg0jAAAMA0jg0jMA0kA0jMg0kA0kg");
	var mask_2_graphics_146 = new cjs.Graphics().p("EgxUAAAMAxUgxUMAxVAxUMgxVAxVg");
	var mask_2_graphics_147 = new cjs.Graphics().p("EguFAAAMAuFguFMAuGAuFMguGAuGg");
	var mask_2_graphics_148 = new cjs.Graphics().p("Egq2AAAMAq2gq2MAq3Aq2Mgq3Aq3g");
	var mask_2_graphics_149 = new cjs.Graphics().p("EgnmAAAMAnmgnmMAnnAnmMgnnAnng");
	var mask_2_graphics_150 = new cjs.Graphics().p("EgkXAAAMAkXgkXMAkYAkXMgkYAkYg");
	var mask_2_graphics_151 = new cjs.Graphics().p("EghIAAAMAhIghIMAhJAhIMghJAhJg");
	var mask_2_graphics_152 = new cjs.Graphics().p("A95AAId595Id6d5I96d6g");
	var mask_2_graphics_153 = new cjs.Graphics().p("A6qAAIaq6qIaraqI6rarg");
	var mask_2_graphics_154 = new cjs.Graphics().p("A3bAAIXb3bIXcXbI3cXcg");
	var mask_2_graphics_155 = new cjs.Graphics().p("A3FAAIXF3FIXGXFI3GXGg");
	var mask_2_graphics_156 = new cjs.Graphics().p("A2FAAIWF2FIWGWFI2GWGg");
	var mask_2_graphics_157 = new cjs.Graphics().p("A0bAAIUb0bIUcUbI0cUcg");
	var mask_2_graphics_158 = new cjs.Graphics().p("AySAAISSySISTSSIyTSTg");
	var mask_2_graphics_159 = new cjs.Graphics().p("Av6AAIP6v6IP7P6Iv7P7g");
	var mask_2_graphics_160 = new cjs.Graphics().p("AtkAAINktkINlNkItlNlg");
	var mask_2_graphics_161 = new cjs.Graphics().p("ArkAAILkrkILlLkIrlLlg");
	var mask_2_graphics_162 = new cjs.Graphics().p("ArWAAIKHqFIKEKFIqEKGg");
	var mask_2_graphics_163 = new cjs.Graphics().p("ArUAAIJNpLIJKJLIpKJMg");
	var mask_2_graphics_164 = new cjs.Graphics().p("ArUAAII7o5II4I5Io4I6g");
	var mask_2_graphics_259 = new cjs.Graphics().p("ArUAAII7o5II4I5Io4I6g");
	var mask_2_graphics_260 = new cjs.Graphics().p("ArfAAII6o5II4I5Io4I6g");
	var mask_2_graphics_261 = new cjs.Graphics().p("AsBAAII6o5II4I5Io4I6g");
	var mask_2_graphics_262 = new cjs.Graphics().p("As7AAII6o5II4I5Io4I6g");
	var mask_2_graphics_263 = new cjs.Graphics().p("AuLAAII6o5II4I5Io4I6g");
	var mask_2_graphics_264 = new cjs.Graphics().p("AvyAAII6o5II4I5Io4I6g");
	var mask_2_graphics_265 = new cjs.Graphics().p("AxwAAII6o5II4I5Io4I6g");
	var mask_2_graphics_266 = new cjs.Graphics().p("A0FAAII6o5II6I5Io6I6g");
	var mask_2_graphics_267 = new cjs.Graphics().p("A2wAAII6o5II6I5Io6I6g");
	var mask_2_graphics_268 = new cjs.Graphics().p("A5zAAII6o5II6I5Io6I6g");
	var mask_2_graphics_269 = new cjs.Graphics().p("A9MAAII6o5II6I5Io6I6g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(144).to({graphics:mask_2_graphics_144,x:0,y:-98}).wait(1).to({graphics:mask_2_graphics_145,x:0,y:-103.2}).wait(1).to({graphics:mask_2_graphics_146,x:0,y:-108.4}).wait(1).to({graphics:mask_2_graphics_147,x:0,y:-113.6}).wait(1).to({graphics:mask_2_graphics_148,x:0,y:-118.8}).wait(1).to({graphics:mask_2_graphics_149,x:0,y:-124}).wait(1).to({graphics:mask_2_graphics_150,x:0,y:-129.2}).wait(1).to({graphics:mask_2_graphics_151,x:0,y:-134.4}).wait(1).to({graphics:mask_2_graphics_152,x:0,y:-139.6}).wait(1).to({graphics:mask_2_graphics_153,x:0,y:-144.8}).wait(1).to({graphics:mask_2_graphics_154,x:0,y:-150}).wait(1).to({graphics:mask_2_graphics_155,x:-2,y:-146.2}).wait(1).to({graphics:mask_2_graphics_156,x:-8.1,y:-134.7}).wait(1).to({graphics:mask_2_graphics_157,x:-18.1,y:-116.1}).wait(1).to({graphics:mask_2_graphics_158,x:-31.1,y:-91.8}).wait(1).to({graphics:mask_2_graphics_159,x:-45.5,y:-64.7}).wait(1).to({graphics:mask_2_graphics_160,x:-59.6,y:-38.2}).wait(1).to({graphics:mask_2_graphics_161,x:-71.8,y:-15.4}).wait(1).to({graphics:mask_2_graphics_162,x:-72.7,y:1.5}).wait(1).to({graphics:mask_2_graphics_163,x:-72.6,y:11.7}).wait(1).to({graphics:mask_2_graphics_164,x:-72.5,y:15}).wait(95).to({graphics:mask_2_graphics_259,x:-72.5,y:15}).wait(1).to({graphics:mask_2_graphics_260,x:-73.6,y:15}).wait(1).to({graphics:mask_2_graphics_261,x:-77.1,y:15}).wait(1).to({graphics:mask_2_graphics_262,x:-82.8,y:15}).wait(1).to({graphics:mask_2_graphics_263,x:-90.8,y:15}).wait(1).to({graphics:mask_2_graphics_264,x:-101.1,y:15}).wait(1).to({graphics:mask_2_graphics_265,x:-113.7,y:15}).wait(1).to({graphics:mask_2_graphics_266,x:-128.6,y:15}).wait(1).to({graphics:mask_2_graphics_267,x:-145.8,y:15}).wait(1).to({graphics:mask_2_graphics_268,x:-165.2,y:15}).wait(1).to({graphics:mask_2_graphics_269,x:-187,y:15}).wait(1).to({graphics:null,x:0,y:0}).wait(185));

	// img
	this.instance_11 = new lib.img3_1();
	this.instance_11.setTransform(-300,-72);
	this.instance_11._off = true;

	this.instance_11.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(129).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(16).to({scaleX:0.99,scaleY:0.99,x:-2,y:-69.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-8.1,y:-61.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-18.1,y:-48},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-31.1,y:-30.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-45.5,y:-11.7},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-59.6,y:7},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-71.8,y:23.1},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-80.8,y:35.1},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-86.2,y:42.3},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-88,y:44.6},0).wait(95).to({x:-317},10,cjs.Ease.get(-1)).to({_off:true},1).wait(185));

	// m (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_109 = new cjs.Graphics().p("Eg3yAAAMA3yg3yMA3zA3yMg3zA3zg");
	var mask_3_graphics_110 = new cjs.Graphics().p("Eg0jAAAMA0jg0jMA0kA0jMg0kA0kg");
	var mask_3_graphics_111 = new cjs.Graphics().p("EgxUAAAMAxUgxUMAxVAxUMgxVAxVg");
	var mask_3_graphics_112 = new cjs.Graphics().p("EguFAAAMAuFguFMAuGAuFMguGAuGg");
	var mask_3_graphics_113 = new cjs.Graphics().p("Egq2AAAMAq2gq2MAq3Aq2Mgq3Aq3g");
	var mask_3_graphics_114 = new cjs.Graphics().p("EgnmAAAMAnmgnmMAnnAnmMgnnAnng");
	var mask_3_graphics_115 = new cjs.Graphics().p("EgkXAAAMAkXgkXMAkYAkXMgkYAkYg");
	var mask_3_graphics_116 = new cjs.Graphics().p("EghIAAAMAhIghIMAhJAhIMghJAhJg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A95AAId595Id6d5I96d6g");
	var mask_3_graphics_118 = new cjs.Graphics().p("A6qAAIaq6qIaraqI6rarg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A3bAAIXb3bIXcXbI3cXcg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A3MgLIXM3NIXNXNI3NXLg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A2egwIWe2gIWfWgI2fWeg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A1VhuIVV1WIVWVWI1WVVg");
	var mask_3_graphics_123 = new cjs.Graphics().p("Az1i9IT1z3IT2T3Iz2T1g");
	var mask_3_graphics_124 = new cjs.Graphics().p("AyKkWISKyMISLSMIyLSKg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AwilsIQiwkIQjQkIwjQhg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AvIm3IPIvKIPJPKIvJPIg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AuGnuIOGuHIOHOHIuHOFg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AteoQINetfINfNfItfNdg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AtQobINQtRINRNRItRNQg");
	var mask_3_graphics_259 = new cjs.Graphics().p("AtQobINQtRINRNRItRNQg");
	var mask_3_graphics_260 = new cjs.Graphics().p("AtQobINQtRINRNRItRNQg");
	var mask_3_graphics_261 = new cjs.Graphics().p("AtQobINQtRINRNRItRNQg");
	var mask_3_graphics_262 = new cjs.Graphics().p("AtQobINQtRINRNRItRNQg");
	var mask_3_graphics_263 = new cjs.Graphics().p("AuQobINStRINQNRItQNQg");
	var mask_3_graphics_264 = new cjs.Graphics().p("Av3obINStRINQNRItQNQg");
	var mask_3_graphics_265 = new cjs.Graphics().p("Ax1obINStRINQNRItQNQg");
	var mask_3_graphics_266 = new cjs.Graphics().p("A0KobINStRINQNRItQNQg");
	var mask_3_graphics_267 = new cjs.Graphics().p("A21obINStRINQNRItQNQg");
	var mask_3_graphics_268 = new cjs.Graphics().p("A54obINStRINQNRItQNQg");
	var mask_3_graphics_269 = new cjs.Graphics().p("A9RobINRtRINSNRItSNQg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_3_graphics_109,x:0,y:-98}).wait(1).to({graphics:mask_3_graphics_110,x:0,y:-103.2}).wait(1).to({graphics:mask_3_graphics_111,x:0,y:-108.4}).wait(1).to({graphics:mask_3_graphics_112,x:0,y:-113.6}).wait(1).to({graphics:mask_3_graphics_113,x:0,y:-118.8}).wait(1).to({graphics:mask_3_graphics_114,x:0,y:-124}).wait(1).to({graphics:mask_3_graphics_115,x:0,y:-129.2}).wait(1).to({graphics:mask_3_graphics_116,x:0,y:-134.4}).wait(1).to({graphics:mask_3_graphics_117,x:0,y:-139.6}).wait(1).to({graphics:mask_3_graphics_118,x:0,y:-144.8}).wait(1).to({graphics:mask_3_graphics_119,x:0,y:-150}).wait(1).to({graphics:mask_3_graphics_120,x:-1.4,y:-149.8}).wait(1).to({graphics:mask_3_graphics_121,x:-5.6,y:-149}).wait(1).to({graphics:mask_3_graphics_122,x:-12.5,y:-147.7}).wait(1).to({graphics:mask_3_graphics_123,x:-21.5,y:-146.1}).wait(1).to({graphics:mask_3_graphics_124,x:-31.5,y:-144.3}).wait(1).to({graphics:mask_3_graphics_125,x:-41.3,y:-142.5}).wait(1).to({graphics:mask_3_graphics_126,x:-49.8,y:-141}).wait(1).to({graphics:mask_3_graphics_127,x:-56,y:-139.9}).wait(1).to({graphics:mask_3_graphics_128,x:-59.8,y:-139.2}).wait(1).to({graphics:mask_3_graphics_129,x:-61,y:-139}).wait(130).to({graphics:mask_3_graphics_259,x:-61,y:-139}).wait(1).to({graphics:mask_3_graphics_260,x:-63.3,y:-139}).wait(1).to({graphics:mask_3_graphics_261,x:-70.2,y:-139}).wait(1).to({graphics:mask_3_graphics_262,x:-81.6,y:-139}).wait(1).to({graphics:mask_3_graphics_263,x:-91.3,y:-139}).wait(1).to({graphics:mask_3_graphics_264,x:-101.6,y:-139}).wait(1).to({graphics:mask_3_graphics_265,x:-114.2,y:-139}).wait(1).to({graphics:mask_3_graphics_266,x:-129.1,y:-139}).wait(1).to({graphics:mask_3_graphics_267,x:-146.3,y:-139}).wait(1).to({graphics:mask_3_graphics_268,x:-165.7,y:-139}).wait(1).to({graphics:mask_3_graphics_269,x:-187.5,y:-139}).wait(1).to({graphics:null,x:0,y:0}).wait(185));

	// img
	this.instance_12 = new lib.img1_1();
	this.instance_12.setTransform(-300,-72);
	this.instance_12._off = true;

	this.instance_12.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(16).to({scaleX:0.99,scaleY:0.99,x:-1.4,y:-73.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-5.6,y:-79.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-12.5,y:-87.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-21.5,y:-99.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-31.5,y:-111.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-41.3,y:-124},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-49.8,y:-134.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-56,y:-142.5},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:-59.8,y:-147.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:-61,y:-148.8},0).wait(130).to({x:-290},10,cjs.Ease.get(-1)).to({_off:true},1).wait(185));

	// m (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_74 = new cjs.Graphics().p("Eg3yAAAMA3yg3yMA3zA3yMg3zA3zg");
	var mask_4_graphics_75 = new cjs.Graphics().p("Eg0jAAAMA0jg0jMA0kA0jMg0kA0kg");
	var mask_4_graphics_76 = new cjs.Graphics().p("EgxUAAAMAxUgxUMAxVAxUMgxVAxVg");
	var mask_4_graphics_77 = new cjs.Graphics().p("EguFAAAMAuFguFMAuGAuFMguGAuGg");
	var mask_4_graphics_78 = new cjs.Graphics().p("Egq2AAAMAq2gq2MAq3Aq2Mgq3Aq3g");
	var mask_4_graphics_79 = new cjs.Graphics().p("EgnmAAAMAnmgnmMAnnAnmMgnnAnng");
	var mask_4_graphics_80 = new cjs.Graphics().p("EgkXAAAMAkXgkXMAkYAkXMgkYAkYg");
	var mask_4_graphics_81 = new cjs.Graphics().p("EghIAAAMAhIghIMAhJAhIMghJAhJg");
	var mask_4_graphics_82 = new cjs.Graphics().p("A95AAId595Id6d5I96d6g");
	var mask_4_graphics_83 = new cjs.Graphics().p("A6qAAIaq6qIaraqI6rarg");
	var mask_4_graphics_84 = new cjs.Graphics().p("A3bAAIXb3bIXcXbI3cXcg");
	var mask_4_graphics_85 = new cjs.Graphics().p("A3TgIIXT3VIXUXVI3UXTg");
	var mask_4_graphics_86 = new cjs.Graphics().p("A29gkIW92+IW+W+I2+W9g");
	var mask_4_graphics_87 = new cjs.Graphics().p("A2ZhSIWZ2aIWaWaI2aWZg");
	var mask_4_graphics_88 = new cjs.Graphics().p("A1qiNIVq1sIVrVsI1rVpg");
	var mask_4_graphics_89 = new cjs.Graphics().p("A01jQIU102IU2U2I02U1g");
	var mask_4_graphics_90 = new cjs.Graphics().p("A0CkRIUC0DIUDUDI0DUBg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AzWlJITWzXITXTXIzXTVg");
	var mask_4_graphics_92 = new cjs.Graphics().p("Ay1lyIS1y3IS2S3Iy2S0g");
	var mask_4_graphics_93 = new cjs.Graphics().p("AyhmLIShyjISiSjIyiSgg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AyamUISaybISbSbIybSag");
	var mask_4_graphics_259 = new cjs.Graphics().p("AyamUISaybISbSbIybSag");
	var mask_4_graphics_260 = new cjs.Graphics().p("AyamUISaybISbSbIybSag");
	var mask_4_graphics_261 = new cjs.Graphics().p("AyamUISaybISbSbIybSag");
	var mask_4_graphics_262 = new cjs.Graphics().p("AyamUISaybISbSbIybSag");
	var mask_4_graphics_263 = new cjs.Graphics().p("AyamUISaybISbSbIybSag");
	var mask_4_graphics_264 = new cjs.Graphics().p("AyTmUISaybIScSbIycSag");
	var mask_4_graphics_265 = new cjs.Graphics().p("AwmmUISaybIScSbIycSag");
	var mask_4_graphics_266 = new cjs.Graphics().p("AulmUISaybIScSbIycSag");
	var mask_4_graphics_267 = new cjs.Graphics().p("AsRmUISaybIScSbIycSag");
	var mask_4_graphics_268 = new cjs.Graphics().p("AppmUISaybIScSbIycSag");
	var mask_4_graphics_269 = new cjs.Graphics().p("AmsmUISaybISbSbIybSag");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_4_graphics_74,x:0,y:-98}).wait(1).to({graphics:mask_4_graphics_75,x:0,y:-103.2}).wait(1).to({graphics:mask_4_graphics_76,x:0,y:-108.4}).wait(1).to({graphics:mask_4_graphics_77,x:0,y:-113.6}).wait(1).to({graphics:mask_4_graphics_78,x:0,y:-118.8}).wait(1).to({graphics:mask_4_graphics_79,x:0,y:-124}).wait(1).to({graphics:mask_4_graphics_80,x:0,y:-129.2}).wait(1).to({graphics:mask_4_graphics_81,x:0,y:-134.4}).wait(1).to({graphics:mask_4_graphics_82,x:0,y:-139.6}).wait(1).to({graphics:mask_4_graphics_83,x:0,y:-144.8}).wait(1).to({graphics:mask_4_graphics_84,x:0,y:-150}).wait(1).to({graphics:mask_4_graphics_85,x:1.6,y:-150.2}).wait(1).to({graphics:mask_4_graphics_86,x:6.5,y:-150.8}).wait(1).to({graphics:mask_4_graphics_87,x:14.4,y:-151.8}).wait(1).to({graphics:mask_4_graphics_88,x:24.7,y:-153}).wait(1).to({graphics:mask_4_graphics_89,x:36.2,y:-154.4}).wait(1).to({graphics:mask_4_graphics_90,x:47.4,y:-155.8}).wait(1).to({graphics:mask_4_graphics_91,x:57.1,y:-156.9}).wait(1).to({graphics:mask_4_graphics_92,x:64.3,y:-157.8}).wait(1).to({graphics:mask_4_graphics_93,x:68.6,y:-158.3}).wait(1).to({graphics:mask_4_graphics_94,x:70,y:-158.5}).wait(165).to({graphics:mask_4_graphics_259,x:70,y:-158.5}).wait(1).to({graphics:mask_4_graphics_260,x:72,y:-158.5}).wait(1).to({graphics:mask_4_graphics_261,x:77.9,y:-158.5}).wait(1).to({graphics:mask_4_graphics_262,x:87.8,y:-158.5}).wait(1).to({graphics:mask_4_graphics_263,x:101.7,y:-158.5}).wait(1).to({graphics:mask_4_graphics_264,x:118.7,y:-158.5}).wait(1).to({graphics:mask_4_graphics_265,x:129.6,y:-158.5}).wait(1).to({graphics:mask_4_graphics_266,x:142.5,y:-158.5}).wait(1).to({graphics:mask_4_graphics_267,x:157.4,y:-158.5}).wait(1).to({graphics:mask_4_graphics_268,x:174.2,y:-158.5}).wait(1).to({graphics:mask_4_graphics_269,x:193,y:-158.5}).wait(1).to({graphics:null,x:0,y:0}).wait(185));

	// img
	this.instance_13 = new lib.img2_1();
	this.instance_13.setTransform(-300,-72);
	this.instance_13._off = true;

	this.instance_13.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({_off:false},0).to({x:0},10,cjs.Ease.get(1)).wait(16).to({scaleX:1,scaleY:1,x:1.6,y:-73.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:6.5,y:-78},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:14.4,y:-85.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:24.7,y:-94.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:36.2,y:-105.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:47.4,y:-116},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:57.1,y:-125},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:64.3,y:-131.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:68.6,y:-135.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:70,y:-136.9},0).wait(165).to({x:268},10,cjs.Ease.get(-1)).to({_off:true},1).wait(185));

	// bgImg1
	this.instance_14 = new lib.bgImg1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(455));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


// stage content:
(lib._300x600 = function() {
	this.initialize();

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	// banner
	this.instance = new lib.banner();
	this.instance.setTransform(150,300);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;