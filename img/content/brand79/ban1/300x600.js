(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bar.png", id:"bar"},
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.png", id:"bgImg2"},
		{src:"images/nuts.png", id:"nuts"},
		{src:"images/snickers.png", id:"snickers"}
	]
};



// symbols:



(lib.bar = function() {
	this.initialize(img.bar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,247);


(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,898);


(lib.nuts = function() {
	this.initialize(img.nuts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,207);


(lib.snickers = function() {
	this.initialize(img.snickers);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,215);


(lib.t2_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#411400").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-156.5,-12.4,313,25);


(lib.t2_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#411400").s().p("AR5DeQgJAAgDgDQgEgCgBgIIgKg+QAAgGgDgDQgEgDgGAAIiFAAQgJAAgEADQgEACgBAHIgJA+QgBAHgDACQgEAEgKAAIg9AAQgNAAgFgEQgGgDABgJIAAiUQgBgHAEgDQAEgDAKAAIASAAQAGABADgDQACgCACgHIBIjpQADgJAEgEQAFgDANAAIBiAAQAMAAAGAEQAFADACAJIBGDpQADAIADACQADACAJAAIAPAAQAKAAADADQAEACAAAIIAACTQAAAJgGADQgFAEgOAAgAQrAuIgqiIIgqCIIBUAAgAhzB+Qg3gYAAhEIAAiGQAAhBAngeQAkgaBHAAQBFAAAjAbQAoAfAABEIAAB5QAABMg6AZQgfAOg5AAQg6AAgfgPgAg3hZIAABfQAAASAJAKQAHAKANAAQASAAAHgLQACgIAAgUIAAheQACgkgdAAQgdAAAAAkgAs7B+Qg3gZAAhDIAAiGQAAhBAngeQAjgaBHAAQBIAAAjAaQAnAfAABEIAAB5QAABMg6AaQgfAOg6AAQg6AAgfgPgAsAhZIAABfQAAARAJALQAIAJAMAAQATAAAGgKQAFgJAAgTIAAheQAAgkgdAAQgeAAAAAkgAULCHQgOAAgFgDQgGgEABgJIAAk+QAAgJAEgEQAEgDAMAAIBTAAQAIABAEAEQADADAAAKIgBFAQAAAGgEADQgDADgKAAgALVCHQgKAAgDgCQgCgDgCgHIgOgsIhiAAIgMArQgDAIgDACQgDACgJABIhEAAQgPgBAFgPIBhk+QADgJAFgEQAEgDANAAIBeAAQANAAAEADQAFAEADAJIBhE+QADALgFADQgEACgPAAgAKiAMIgdheIgcBeIA5AAgAF3CHQgJgBgEgCQgCgCgCgIIg/jMIg+DMQgCAIgDACQgDACgJABIg2AAIgSgBQgHgDAAgGIABgGIBhk+QADgJAEgEQAFgDANAAIBeAAQAMABAFADQAEADADAJIBiE+IAAAGQAAAGgHADIgTABgAkiCGQgJAAgDgBQgEgCgGgIIhYh8IgQAQIAABrQAAAHgEADQgEACgKAAIhMAAQgOAAgFgDQgFgDgBgKIAAk+QAAgKAHgDQAFgCANAAIBPAAQAKAAACADQACAEABAKIAABUIBThWQAMgNACgBQACgBAIAAIBYAAQAPAAAEACQAHADgLAMIh3B5ICKDCQAIALgGAEQgDACgOAAgA1ZCGQgJAAgDgFQgCgDgBgJIAAlBQAAgGAFgDQADgDAKAAIBMAAQANAAAGADQAFADAAAKIAADqQABAFACACQACABAGABIAeAAQAHgBABgHIAAjvQAAgMAUABIBKAAQANAAADACQACADAAAKIAADrQAAAHAIABIAhAAQAHgBAAgHIABjuQAAgMAVAAIBPAAQALAAADACQADADABAKIgBE/QAAAJgDAEQgEACgMAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-138.5,-22.2,277,44.5);


(lib.t2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#411400").s().p("AO3CzQgWgDgIgGQgDgCAAgbQAAgVADgQQADgSAEAAIAQABQAMABANAAQAUAAAAgQQAAgNgYgxIhWipIgBgGQAAgHAHgCIASgBIBSAAQAKAAAEADQAEACADAIIA/CKIAxiKQADgHADgDQAEgDAJAAIA8AAIASABQAHACAAAHIgBAGIhdDiQgaBAgfAaQgeAZgzAAQgVAAgSgDgAC8CnQg3gZAAhEIAAiGQAAhBAogdQAjgbBHAAQBHABAjAaQAoAeAABFIgBB4QAABMg6AaQgeAOg7AAQg6AAgfgOgAD4gxIAABfQAAASAIAKQAIAJAMAAQATAAAGgKQAFgJAAgTIAAheQAAgkgdAAQgdAAAAAkgAx8CyQgXgDgHgFQgDgDAAgbQAAgWACgQQADgRAFAAIAQABIAYABQAVAAAAgRQAAgNgZgwIhVipIgBgGQAAgHAHgCQAFgBANAAIBSAAQAKAAAEACQAEADADAHIA/CLIAxiKQADgHADgDQAEgDAJAAIA7AAQAOAAAFACQAHACAAAGIgBAGIheDiQgaBAgeAZQgfAZgyAAQgUAAgTgCgALtCvQgNAAgFgEQgGgDAAgJIAAiWQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABIgnBWQgFAKgBABQgCACgHAAIgFAAQgJAAgDgCIgFgLIgkhUQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIAACWQAAAHgCADQgEADgLAAIhNAAQgLAAgEgCQgJgDAAgLIAAk/QAAgJAGgDQAFgDAOAAIBAAAQAKAAADABQAHABAEAHIBCB1QAEAGADgFIA/h1QAFgKAUAAIBJAAQAKAAADAEQACADAAAKIAAFAQAAAHgEADQgDADgKAAgAAOCuQgJAAgDgCQgCgCgBgIIg+jNIg+DNQgCAIgCACQgEACgJAAIg2AAQgNAAgFgBQgHgCAAgHQAAgDABgDIBhk9QADgKAEgDQAFgDAMAAIBfAAQAKAAAFADQAFADACAKIBhE+IABAFQAAAHgHACQgFACgNAAgAleCuQgNAAgFgDQgGgEAAgJIAAk+QAAgJAEgEQAEgDANAAIBSAAQAJAAADAEQADAFAAAIIgBFBQAAAHgDACQgEADgKAAgArBCuQgKAAgDgDQgEgDAAgGIAAlBQAAgJACgEQADgEAKAAIDkAAQANAAAAANIAAA3QAAALgFADQgFAEgNAAIhoAAQgGAAgDADQgCACAAAIIAAAOQAAAHACADQADADAGAAIAUAAQBLAAAlAYQApAaAAA3QAAA9ghAdQgiAdhMAAgApYAgQgCACAAAFIAAAtQAAAIAIAAIAXAAQAOAAAJgHQAJgIAAgPQAAghggAAIgWAAQgFAAgCADg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122.3,-18.2,244.6,36.5);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-46.2,100,92.4);


(lib.snickers_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.snickers();
	this.instance.setTransform(-166,-107);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-166,-107,332,215);


(lib.p3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2IT5IAGg7MAmoAD7IgGA8gAwl24IAGg8MAmoAD8IgGA7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-141.7,-152.5,283.5,305);


(lib.p2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3000B").s().p("EgwCBeYMAaSjF/MBFyAJQMgaQDF/g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-307.5,-663.2,615,1326.5);


(lib.p1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgOQBfnIAqk/ICyDBIgrE+gEgNKBXYIAqk+ICxDAIgqE/gEgMEBPKIAqk/ICxDBIgqE+gEgK+BG7IAqk+ICxDAIgqE/gEgJ4A+tIAqk/ICxDBIgqE+gEgIyA2eIAqk+ICxDAIgqE/gEgHsAuQIAqk/ICxDBIgqE+gEgGnAmAIArk9ICxDAIgrE+gAlhdyIArk/ICxDCIgrE9gAkbVjIAqk+ICyDAIgrE/gAjVNVIAqk/ICvDBIgoE+gAiPFGIAqk+ICvDAIgqE/gAhJjGIAqk/ICvDBIgqE+gAgDrVIAok+ICxDAIgqE/gABBzkIAqk+ICxDBIgqE+gACH7zIAqk9ICxDAIgqE+gEADMgkBIArk/ICxDBIgqE+gEAESgsQIArk+ICxDAIgrE/gEAFYg0eIAqk/ICyDBIgrE+gEAGeg8tIAqk+ICxDAIgqE+gEAHkhE7IAqk/ICxDBIgqE+gEAIqhNKIAqk+ICxDAIgqE+gEAJwhVZIAqk+ICxDBIgqE+gEAK2hdoIAqk+ICxDAIgqE/g");
	this.shape.setTransform(48.9,-368.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.4,-999.8,182.7,1262.3);


(lib.nuts_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nuts();
	this.instance.setTransform(-168,-103.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-168,-103.5,336,207);


(lib.logoP2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBcQgJAAgDgCQgDgBAAgGIgDgtIgbAjQgHAKgKAFQgJAEgPAAIgwgBQgJAAgDgBQgDgCAAgFIgLimQAAgFAGgCIAPgBIA5AAQAHAAACACIABAFIAHBqIAngwIgDg5QgBgFAGgCIAQgBIA2AAQAHAAACACIACAFIAGBrIBVhrIAGgFQADgCAHAAIAnAAQAMAAADACQAFABgFAGIiACgIgBABIgBAAQgMANgXAAg");
	this.shape.setTransform(-47.4,-0.4,1.18,1.18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIBcQgMAAADgJIATg7QACgFgGAAIgqAAQgFAAgCAFIgWA7QgCAGgEABQgFACgKAAIg6AAQgHAAgBgCQgBgCABgFIA+inQACgHANAAIA4AAQAKAAACACQADACgCAEIgRA2QAAAAAAABQAAABAAAAQAAAAAAABQAAAAABAAIAGABIAnAAQAGAAACgEIAUg3QACgHAPAAIA7AAQAIAAACACQACABgCAFIg5CcQgFARgcABIAAABg");
	this.shape_1.setTransform(-13,-0.4,1.18,1.18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BcQgKAAgEgCQgDgBACgGIA9imQACgFADgBQAEgCAHAAIA9AAQALAAgDAJIg5CbQgHATgfAAg");
	this.shape_2.setTransform(9.2,-0.4,1.18,1.18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhUBcQgLAAgDgCQgDgBACgGIAuh9QACgEgIAAIgwAAQgGAAgCgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBIALgfQACgHARAAIDBAAQAKAAgDAHIgGATQgHATghAAIggAAQgEABgCADIgsB9QgDAJgSAAg");
	this.shape_3.setTransform(32.8,-0.4,1.18,1.18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrBcQgNAAADgJIA9imIAEgGQADgCAGAAICaAAQAGAAABACQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAABIgGATQgHATghAAIgzAAQgKAAgBAEIgEAMQgCAGAHgBIA9AAQAMAAgDAHIgPAdQgEAJgQgBIgvAAQgJABgDAFIgFAPQgCAFAPAAIA8AAQAXAAgDAHIgMAhQgDAHgHAAg");
	this.shape_4.setTransform(55.9,-0.4,1.18,1.18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C1B11").s().p("Ao1B5QgZgBgLgOQgIgIAAgNIgLimQgBgPAKgLQAMgNAdAAISCAAQAUABALAOQAJANgGARIg2CqQgFALgKAHQgKAIgMAAg");
	this.shape_5.setTransform(0,0,1.18,1.18);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.3,-14.3,146.6,28.6);


(lib.logoP1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD2726").s().p("AihCiQhBhCAAhgQAAhfBChCQBChBBeAAQBfAABCBBQBCBCAABfQAABfhCBCQhCBChfAAQhgAAhBhBgAiAiBQg1A0AABNQAABNA1A1QA0A0BMAAQBMAAA1g0QA1g1AAhNQAAhMg1g1Qg1g0hMAAQhLAAg1A0gAAxB2Ig1hSIgxAAIAABSIgoAAIAAjrIBiAAQAqAAAXAYQATAUAAAfIAAABQAAAcgPARQgOARgZAHIA9BagAg1AAIA3AAQAWAAAMgKQANgLAAgSIAAAAQAAgTgNgLQgMgKgWAAIg3AAg");
	this.shape.setTransform(166.3,-37.1,0.181,0.181);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#233585").s().p("EgnjAZ2QiPjLCIl5MAL+gg7QBgkKBSiOQBgimB/haQCEheDLgoQDDgnE/AAQFwAAENA6QBWATBGAXQAjALARAIIocXUIsygBIEts5QAdhOgHgkQgIgkgygBQg+ABggAfQgcAcgeBTMgM0AjOQgZBGAEAgQAHAqA4AAQA/gBAigpQAYgdAhhXIFfu+IMvAAIlmPYQhGDAhHBzQhUCKh1BUQj5C0oXAAQn7AAigjkgA8pcbQnJgGiGjIQh3iwB7lXMAL/gg6QBdj/BKiDQBYifBzhVQB5hYC8gnQC0gkEsgBIgcgBQk2AAi5AkQjCAkh7BZQh3BUhbCgQhLCFheEBMgL+Ag7Qh9FaB8CwQCODJHaABIAfAAIAAAAgAx/D8IlQOVQgiBcgfAnQgtA5hKAIQANACAPAAQBZABA1g7QAkgoAlhjIFRuXgArp0RQBJAKASA8QASA3geBRIkXMBIA7gBIEXsAQAghYgYg5Qgag+hXgBIghACgEh9FAcfQhngRhjgWIhPgTIHBzKIMzAAIjpJkQgeBQAKAlQALAnBBAAQArgBAeggQAbgdAchIICWmDQBQjMhKiQQgfg6hBhHIiDiEQh1h0g7hTQhLhrgchwQg/j5CTmgQBrkuBailQBpjBCHhrQCLhvDRgwQDKgwFBABQFegBEcA9QBYATBLAYQAmAMATAJImfSEIs4AAICxnsQAbhLgPgiQgNgegwgBQg1AAgdAdQgdAbgdBNIheEDQhBCyAsB0QAmBiC1C1QCFCEBGBuQBOB5AYCEQAvEGiiHJQhmEghPCXQhiC4h+BnQiGBtjLAwQjJAxlAAAIgFAAQkWAAlLg5gEiAKAa4IA1ALIGfxpIg7AAgEhl/gbuQjIAtiDBpQiABlhjC5QhWCdhmEnQhUDugQCcQgQCZAtB4QAnBrBoB6QA0A9DCDHQB4B6AWB5QAVB5hCCvIiFFiQgnBjghArQgqA3hBAIIAgABQBMAAAxg3QAlgrAphsICGliQBCiugZiBQgYh9h4h7QjIjOgxg4Qhoh6glhnQgqh1ASiXQASiXBTjvQBnkiBUidQBii3B7hlQCChpDAguQC7gtEqgCIgXgBQk3AAi/ArgEhhrgUMQBLAJAWA+QATA4gdBPIieGoIA6AAICdmnQAghXgZg6QgchAhcAAIgFAAIgaACgEBVMAceQhngRhkgVIhOgTIHAzKIMyAAIjnJjQggBRAKAjQAMApBBAAQAqAAAfgiQAbgeAbhHICXmCQBQjMhMiQQgdg6hChHIiDiEQh0h0g8hTQhLhrgchwQg+j5CTmhQBqktBaimQBqjBCGhqQCLhwDRgwQDKgvFBAAQFbAAEfA9QBaASBLAZQAmAMAUAIImiSEIs5AAICznsQAbhKgQgjQgOgegvAAQg1AAgdAcQgdAcgbBMIhgEEQhBCzAtBzQAlBiC1C1QCFCEBGBuQBOB4AYCEQAvEFiiHLQhkEghRCWQhiC5h9BmQiGBujLAvQjKAxk/gBIgFABQkaAAlGg5gEBSGAa4IA1ALIGfxpIg7AAgEBsRgbuQjHAtiFBpQh+BkhkC6QhVCdhoEnQhSDugRCcQgQCZAsB4QAoBrBoB6QA0A9DDDHQB3B6AVB5QAWB5hDCvIiEFiQgmBighAsQgsA3g/AIIAeABQBNAAAxg3QAmgrAphsICFliQBBiugYiBQgZh9h3h7QjIjOgxg4Qhoh6glhnQgqh1ASiXQASiXBUjvQBmkiBTidQBji3B8hlQCBhpDAguQC7gtEqgCIgXgBQk2AAjAArgEBw0gUNIgOABQBLAJAWA+QATA4geBPIidGoIA5AAICdmnQAhhXgZg6QgehAhbAAIgFAAIgLABgEBA+AcjIGfzGQAwiSgQhOQgRhLhJAAIgJABIolXwIsyAAMAU1g5JIPTAAQF+ABCODvQCODwiTGRIjHIfQg9Cnh5B+Qh5B9ijBBQgmAQgNADQA7A8AlBZQBUDUhaEDImCRXgEBI+AFuQATBkg8CvIl/RiIA8AAIF+xiQA+i0gXhlQgah2iMACIgrgBQCCAGAWB1gEAyeAbjIA8AAMAUGg3JIg8AAgEBR6gSpQAwBNg1CTIi+ISQgrB2hBA7QhEA+hiADIAyAAQBngBBHhAQBCg7Arh2IC/oTQA1iSgzhNQgthFhzAAIgtgBQBqAEAqBCgEBO9gSvIlZOrIA6AAQBQAAA1gyQA1gxAkhmIC+oSQAqhygdgyQgZgshUAAgAWycjMAU3g5JIXkAAIjoJqIp9gBIk7NxIHyAAIjlJsInwABIlVOkIJ6AAIjZJegAYMbjIA8AAMAUIg3JIg7AAgAIbcjIAZ0MImxUMItlAAMAUyg5JINgAAImvRZIMRxZINtAAI09ccIAqctgAJuFkIgSV/IA6AAIAT4sgAqHbjIA7AAMAUEg3JIg7AAgAOnnxIg4CsIQJ2hIhFAAgEg91AcjMAU0g5JIOHAAMgUyA5JgEg8bAbjIA8AAMAUFg3JIg7AAgEhQUAcjICg6zIpkazIqPAAMAU4g5JIOgAAIija7IJV67IKLAAMgUpA5JgEhMrgBdIiidAIA7AAMAC0ggQgEhgNAbjIA7AAMAUMg3JIg9AAgEhBNAB6IgTDcMALrgg8Ig7AAg");
	this.shape_1.setTransform(-4.2,0.2,0.181,0.181);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EiHuAf1MAS+g0UQCemvFzirQEHh6GWgBMDpxAAAMgS+A0UQieGulzCtQkHB6mXAAg");
	this.shape_2.setTransform(-4.5,0,0.181,0.181);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD2726").s().p("EiPNAjkMAUWg4JQC4n5GHjzQFRjSHQAAMD0lAAAMgUXA4JQi3H6mHDzQlSDRnPAAg");
	this.shape_3.setTransform(-4.5,0,0.181,0.181);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-170.5,-41.2,341,82.5);


(lib.bgImg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgImg1();
	this.instance.setTransform(-150,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.bar_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bar();
	this.instance.setTransform(-155.5,-123.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-155.5,-123.5,311,247);


(lib.lineMc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p3();
	this.instance.setTransform(8.2,-70.2,0.479,0.479);

	this.instance_1 = new lib.t1();
	this.instance_1.setTransform(8.2,-70,1.27,1.27);

	this.instance_2 = new lib.p1();
	this.instance_2.setTransform(-87.8,112.9,0.336,0.336);

	this.instance_3 = new lib.p1();
	this.instance_3.setTransform(55.3,131.9,0.336,0.336);

	this.instance_4 = new lib.p2();
	this.instance_4.setTransform(0,0,0.336,0.336);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.1,-222.6,206.3,445.2);


(lib.line = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lineMc();
	this.instance.setTransform(-44,295.6,0.7,0.7);

	this.instance_1 = new lib.lineMc();
	this.instance_1.setTransform(-4.9,-1.8,0.7,0.7);

	this.instance_2 = new lib.lineMc();
	this.instance_2.setTransform(34.8,-299.2,0.7,0.7);

	// Layer 2
	this.instance_3 = new lib.p1();
	this.instance_3.setTransform(-121.9,498.2,0.235,0.235);

	this.instance_4 = new lib.p1();
	this.instance_4.setTransform(-21.7,511.5,0.235,0.235);

	this.instance_5 = new lib.p2();
	this.instance_5.setTransform(-60.4,419.2,0.235,0.235);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.6,-455,239.7,1030);


(lib.bgImg2_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.t2_2();
	this.instance.setTransform(-55.4,-323.5,0.466,0.466);

	this.instance_1 = new lib.t2_1();
	this.instance_1.setTransform(-55.1,-347.6,0.539,0.539);

	this.instance_2 = new lib.logoP2();
	this.instance_2.setTransform(-24.3,-372.8,0.48,0.48,0,0,0,0,-0.1);

	this.instance_3 = new lib.logoP1();
	this.instance_3.setTransform(-42.3,-394.4,0.469,0.469,0,0,0,0,-0.1);

	// Layer 1
	this.instance_4 = new lib.bgImg2();
	this.instance_4.setTransform(-150,-449);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-449,300,898);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bgimg
	this.instance = new lib.bgImg();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(224).to({_off:false},0).to({alpha:1},11).wait(1));

	// nuts
	this.instance_1 = new lib.nuts_1();
	this.instance_1.setTransform(60.6,126.1,0.12,0.12,0,0,0,144.8,30.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).to({regX:144.6,regY:30,scaleX:1,scaleY:1,x:12.6},10,cjs.Ease.get(1)).wait(126));

	// bar
	this.instance_2 = new lib.bar_1();
	this.instance_2.setTransform(469.5,378.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).to({x:160,y:174.5},10,cjs.Ease.get(1)).wait(136));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_130 = new cjs.Graphics().p("A0EB1IAAjqMAoJAAAIAADqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(130).to({graphics:mask_graphics_130,x:3.4,y:255.3}).wait(106));

	// t2_3
	this.instance_3 = new lib.t2_3();
	this.instance_3.setTransform(1.6,233.1,0.81,0.81);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({y:253.6},10).wait(96));

	// line
	this.instance_4 = new lib.line();
	this.instance_4.setTransform(-181.5,898,1.41,1.41,7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110).to({_off:false},0).wait(1).to({regX:-12.8,regY:60,x:-109.2,y:595.6},0).wait(1).to({x:-56.7,y:394.9},0).wait(1).to({x:-19.8,y:253.6},0).wait(1).to({x:8.6,y:145.3},0).wait(1).to({x:31.3,y:58.5},0).wait(1).to({x:49.9,y:-12.7},0).wait(1).to({x:65.4,y:-71.9},0).wait(1).to({x:78.4,y:-121.6},0).wait(1).to({x:89.3,y:-163.5},0).wait(1).to({x:98.6,y:-198.8},0).wait(1).to({x:106.3,y:-228.4},0).wait(1).to({x:112.8,y:-253.2},0).wait(1).to({x:118.2,y:-273.7},0).wait(1).to({x:122.5,y:-290.5},0).wait(1).to({x:126,y:-303.8},0).wait(1).to({x:128.7,y:-314.2},0).wait(1).to({x:130.7,y:-321.8},0).wait(1).to({x:132.1,y:-327},0).wait(1).to({x:132.9,y:-329.9},0).wait(1).to({regX:0,regY:0,x:161.3,y:-412.6},0).wait(106));

	// bgImg2
	this.instance_5 = new lib.bgImg2_1();
	this.instance_5.setTransform(0,-749);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).wait(1).to({y:-747.9},0).wait(1).to({y:-744.6},0).wait(1).to({y:-738.9},0).wait(1).to({y:-730.8},0).wait(1).to({y:-720.2},0).wait(1).to({y:-707.1},0).wait(1).to({y:-691.3},0).wait(1).to({y:-672.9},0).wait(1).to({y:-651.8},0).wait(1).to({y:-628},0).wait(1).to({y:-601.7},0).wait(1).to({y:-572.8},0).wait(1).to({y:-541.6},0).wait(1).to({y:-508.2},0).wait(1).to({y:-472.9},0).wait(1).to({y:-436},0).wait(1).to({y:-397.8},0).wait(1).to({y:-358.7},0).wait(1).to({y:-319.1},0).wait(1).to({y:-279.5},0).wait(1).to({y:-240.2},0).wait(1).to({y:-201.7},0).wait(1).to({y:-164.3},0).wait(1).to({y:-128.3},0).wait(1).to({y:-94.1},0).wait(1).to({y:-61.8},0).wait(1).to({y:-31.7},0).wait(1).to({y:-3.9},0).wait(1).to({y:21.7},0).wait(1).to({y:44.8},0).wait(1).to({y:65.4},0).wait(1).to({y:83.7},0).wait(1).to({y:99.6},0).wait(1).to({y:113.2},0).wait(1).to({y:124.4},0).wait(1).to({y:133.5},0).wait(1).to({y:140.4},0).wait(1).to({y:145.2},0).wait(1).to({y:148.1},0).wait(1).to({y:149},0).wait(146));

	// snickers
	this.instance_6 = new lib.snickers_1();
	this.instance_6.setTransform(-3,0,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(10).to({rotation:3},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:0},0).wait(4).to({rotation:3},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:0},0).wait(5).to({rotation:3},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:0},0).wait(1).to({rotation:3},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:0},0).wait(194));

	// bgimg
	this.instance_7 = new lib.bgImg();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,302,602);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;