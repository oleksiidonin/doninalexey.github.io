(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,154);


(lib.woman = function() {
	this.initialize(img.woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.woman_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.woman();
	this.instance.parent = this;
	this.instance.setTransform(-123,-192,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.woman_1, new cjs.Rectangle(-123,-192,245.8,384), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F06E48").s().p("AloC0QiVhKAAhqQAAhoCVhLQCWhLDSAAQDTAACWBLQCVBLAABoQAABqiVBKQiWBLjTAAQjSAAiWhLg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-51,-25.4,102,51), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJwFpIAAg+IA/AAIAAA+gAICFpIAAhTIg5AAQgLAAgGACQgHADgDAIQgDAIgBARQgDAjgEAKIg4AAQAEgLACgKIAFglQAEgmAagIQghgOAAglQAAgdAUgPQAUgPAmAAIB3AAIAADWgAGxDBQgIAGAAAOQAAAPAIAGQAIAGASAAIA3AAIAAg1Ig4AAQgSAAgHAGgADWFpIAAiqIhNAAIAAgsIDRAAIAAAsIhNAAIAACqgAgMFpIAAiqIhNAAIAAgsIDPAAIAAAsIhNAAIAACqgAirFpIAAiYIhjCYIg6AAIAAjWIA1AAIAACUIBhiUIA8AAIAADWgAmkFpIg+hjIgcAZIAABKIg3AAIAAhJIgdgaIg+BjIg/AAIBYiGIhThQIBCAAIBTBVIAAhVIA3AAIAABVIBUhVIBBAAIhTBPIBYCHgAJ3EJIgFjBIA6AAIgFDBgAEIASIAAgsIA7AAQAFAAACgFIAJgYIhmjfIA7AAIBGClIA8ilIA4AAIhoEFQgHASgNAJQgLAIgTAAgAnXASIAAkoIA0AAIAAAeQALgRAUgJQATgJAXAAQAwAAAaAeQAaAeAAA0QAAA0gaAfQgbAdgvAAQguAAgZgfIAABsgAmUjfQgOASAAAiQAAAjAOASQAOARAeAAQAfAAAOgRQAOgRAAgkQAAgjgOgRQgOgRgfAAQgeAAgOARgAKbhAIAAiXIhjCXIg6AAIAAjWIA1AAIAACVIBhiVIA8AAIAADWgABYhAIAAiqIhNAAIAAgsIDRAAIAAAsIhNAAIAACqgAhHhAIAAhTIg5AAQgLAAgGADQgGADgEAIQgDAJgBAPQgCAggEANIg4AAQADgHACgOIAFglQAEgmAbgIQgigNAAgmQAAgcAUgQQAVgPAmAAIB2AAIAADWgAiYjoQgIAHAAAOQAAANAJAHQAJAHARAAIA2AAIAAg2Ig4AAQgQAAgJAGgArIhAIAAjWIB+AAQAjAAASAPQATAPAAAbQAAAkghAMQASAGAJANQAKANAAASQAAAdgUAPQgUAPgjAAgAqShmIA9AAQASAAAHgGQAHgGAAgOQAAgNgHgGQgHgGgSAAIg9AAgAqSi/IA6AAQASAAAGgFQAHgFAAgOQAAgOgHgFQgHgGgRAAIg6AAgAIxk9QgVgPgDgcIAvAAQACAMAHAFQAIAEAOAAQAOAAAHgEQAHgFADgMIAuAAQgDAcgUAPQgUAPgiAAQgjAAgTgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-72,-36.1,144,72.3), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ2C5IAAgtIA7AAQAFAAACgFIAJgXIhmjfIA7AAIBGCkIA8ikIA4AAIhoEEQgIAVgMAHQgNAJgSgBgAvGC5IAAgtIA7AAQAFAAACgFIAKgXIhnjfIA7AAIBGCkIA9ikIA3AAIhoEEQgIAVgMAHQgNAJgRgBgACXBcQgUgRAAgcQAAghAXgOQAYgQAxgFIAigEQALgDAHgEQAGgGAAgIQAAgPgLgGQgLgHgYAAQgYAAgMAIQgLAIgBASIgzAAQAEgkAagTQAagVAsABQAtgBAYAVQAZATAAAlIAABcQAAABAAAAQAAABAAABQAAAAABABQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIATAAIAAAsIggAAQgSAAgJgJQgIgJgBgSQgMATgVAKQgWAMgcAAQglAAgUgQgADrAMQgSABgNAEQgKAFgFAFQgEAFAAAKQAAAaAjAAQAcgBATgRQATgQAAgfIAAgDQgSAIghAEgAGHBnIAAjWIB+AAQAjABASAPQATAPAAAbQAAAkghAMQATAFAIANQAKAMAAATQAAAcgUAPQgVAQgiAAgAG9BBIA9AAQARAAAIgGQAHgGAAgOQAAgOgHgFQgHgGgSAAIg9AAgAG9gXIA6AAQARAAAHgGQAHgFAAgOQAAgOgHgFQgGgFgSAAIg6AAgAA4BnIhDhiIgfAcIAABGIg2AAIAAjWIA2AAIAABYIBahYIBBAAIhWBRIBeCFgAkyBnIAAiXIhiCXIg6AAIAAjWIA1AAIAACVIBgiVIA8AAIAADWgAo3BnIAAiqIhiAAIAACqIg3AAIAAjWIDPAAIAADWgAwFBnIhiiOIgtArIAABjIg4AAIAAkfIA4AAIAACAICFiAIBDAAIhzBsIB+CzgAPWgCIAAgsID3AAIAAAsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-122.8,-18.5,245.8,37.1), null);


(lib.logo_billet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjyBPIATAAQACAFAIAAQAMAAAAgJIAAgGQgHAGgKAAQgZAAAAgbQAAgaAZAAQALAAAHAHIAAgGIARAAIAAAzQAAAYgfAAQgZAAgDgTgAjgAxQABANAKAAQAMAAAAgNQAAgNgMAAQgKAAgBANgAhKA+QgBgJAGgEQAGgDAPgBQALgBAAgEQAAgFgIAAQgIAAgBAGIgTAAQADgTAZAAQAaAAAAAUIAAASQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAFAAIAAAPIgMAAQgIAAgBgIQgHAJgNAAQgVAAABgQgAguA2QgKABAAAFQAAAEAHAAQANAAgBgMIAAAAIgJACgAiIBIQgGgHAAgKIAAggIATAAIAAAdQAAALALAAQAKAAAAgLIAAgdIATAAIAAA2IgSAAIAAgIQgHAJgLAAQgKAAgHgGgAkvBGQgIgHAAgNQAAgNAIgIQAJgHAOAAQAeAAAAAcQABANgJAHQgIAIgOAAQgOAAgJgIgAkjAyQAAANALAAQAMAAgBgNQABgOgMAAQgLAAAAAOgAisBNIAAgVIAUAAIAAAVgAlfBNIgJgiIgIAiIgVAAIgPg2IATAAIAIAiIAIgiIATAAIAJAiIAIgiIATAAIgQA2gAgygMIAAgIIAGAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgEIgHAAIAAgPIAPAAIAAASQABAKgLAAgAFMgNIAAgMIgkAAIAAAMIgMAAIAAgXIAFAAQABgGAAgaIABgKIAwAAIAAAqIAHAAIAAAXgAEugjIAXAAIAAghIgVAAIgCAhgAAlgNIAAgMIgkAAIAAAMIgLAAIAAgXIAFAAQACgJAAgXIAAgKIAvAAIAAAqIAHAAIAAAXgAAHgjIAYAAIAAghIgXAAQABAXgCAKgAiHgNIAAgMIgkAAIAAAMIgMAAIAAgXIAFAAIADggIAAgKIAvAAIAAAqIAHAAIAAAXgAilgjIAXAAIAAghIgVAAQAAAUgCANgADggvIgKAAIAAAWIgOAAIAAg1IAOAAIAAAUIAKAAQADgWAYAAQAcAAAAAcQAAAdgcAAQgZAAgCgYgADtg0QAAASAOAAQAPAAAAgSQAAgRgPAAQgOAAAAARgAA3g0QAAgNAHgHQAIgIAMAAQANAAAIAIQAHAHAAANIAAAEIgrAAQACAOANAAQAKAAADgGIANAAQgEARgVAAQgcAAAAgdgABDg5IAeAAQgCgMgNAAQgMAAgDAMgAjzgvIgKAAIAAAWIgNAAIAAg1IANAAIAAAUIAKAAQADgWAYAAQAOAAAHAIQAIAHAAANQAAAOgIAHQgGAIgPAAQgYAAgDgYgAjlg0QAAASANAAQAPAAAAgSQAAgRgPAAQgNAAAAARgAlLg0QAAgNAIgHQAIgIAOAAQAYAAACAWIgOAAQgBgLgMAAQgOAAAAARQAAASAOAAQAMAAABgLIAOAAQgBAKgHAGQgIAGgKAAQgeAAAAgdgAGIgZIAAglIgYAlIgPAAIAAg1IAOAAIAAAlIAYglIAOAAIAAA1gACvgZIAAgqIgTAAQgBAfgDAEQgCAHgKAAIgHAAIAAgLIAHAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQABgDABgaIAAgLIAtAAIAAA1gAhKgZIAAglIgZAlIgOAAIAAg1IANAAIAAAlIAYglIAPAAIAAA1gAmPgZIAAhIIAlAAQAYAAAAATQAAAMgLAEQAMAFAAAMQAAAUgZAAgAmCgkIAXAAQAMAAAAgKQAAgKgMAAIgXAAgAmChDIAXAAQALAAAAgJQAAgKgLAAIgXAAg");
	this.shape.setTransform(-93.9,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlzhSQgKgVAHgVQAHgVAUgKQAUgKAVAIQAVAHAKAUIBECJQAIAQAAARQAAASgIAPIgrBZgAoEhSQgKgVAIgVQAHgVAUgKQAUgJAVAHQAVAHAKAUIBECJQAIAQAAARQAAASgIAPIgrBZgAF2BSQgZgZAAgkQAAgjAagYQAZgZAmAAQAcAAAUANQAUAMALAWIgpAQQgGgKgJgGQgKgGgNAAQgTAAgNANQgNALAAATQAAAUAMAMQAMANAVAAQAPAAAMgHQAKgHACgKIg0AAIAAghIBfAAQAIAogYAcQgZAdgpAAQgmAAgagYgAC6BRQgagYAAgkQAAgjAagYQAZgZAmAAQAlAAAaAZQAZAYAAAjQAAAkgZAYQgaAZglAAQgmAAgZgZgADagJQgNALAAATQAAASANANQAMANATAAQASAAANgNQANgNAAgSQAAgTgNgLQgNgNgSAAQgTAAgMANgAA+BQIgGgdQgHgcgCgOIgBAAIgJAqIgHAdQgDAMgHAHQgHAHgMAAQgKAAgHgHQgHgGgEgNIgsiLIAxAAIARA8IAEASIADAbIABAAIAEgbIAEgTIAOg7IAqAAIAOA7IAEATQADAPABAMIACAAIAEgbIAEgSIAQg8IAyAAIgsCLQgFANgHAGQgHAHgLAAQgWAAgHgag");
	this.shape_1.setTransform(80.8,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8BC53F").s().p("AgvgJQgFgLgBgNQAAgWAQgQQAPgQAWAAQAWAAAQAQQAPAQAAAWQABANgGALIgwBhg");
	this.shape_2.setTransform(62.8,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009345").s().p("A3bFYIAAqvMAu3AAAIAAKvg");
	this.shape_3.setTransform(0,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_billet, new cjs.Rectangle(-150,-36.7,300,68.7), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8976B3").s().p("Am4BJIAAgZIhIAAIAAAZIgfAAIAAg0IAMAAQAEgXAAgtIAAgVIBnAAIAABZIAPAAIAAA0gAnygFIgDAbIAtAAIAAhAIgpAAgAHMAmQgNgMAAgWQAAgNAGgKQAHgKAKgGQAJgFARAAQAWAAANAMQANALAAAVIAAAIIhDAAQABAIAFAEQAFAEAJAAIAJgBQAEgBABgDIAfAAQgCANgNAHQgLAHgTAAQgYAAgNgMgAHdgFIAkAAQgCgGgEgDQgFgEgHAAQgPAAgDANgAjFArQgKgHAAgLQAAgIAFgIQAFgGAJgDQAKgCAQgBQAHAAAFgCQAEAAACgCIABgEQAAgDgDgCQgCgCgJAAQgHAAgDACQgFACAAAFIgeAAQACgQAMgHQAMgIASAAQAVAAALAIQALAJAAAQIAAAcIABACIACABIAHAAIAAAYIgSAAQgIAAgDgDQgEgCgBgHQgJAOgYAAQgQAAgJgHgAieALQgHABgHACQgDACAAAFQAAAHALAAQAJAAAHgGQAGgEAAgKIAAAAQgFACgLABgAmFAmQgNgLAAgXQAAgMAGgLQAGgKALgGQAKgFAPAAQAWAAAOAMQANAMAAAUIAAAIIhDAAQAAAGAGAGQAFAEAIAAIALgBQACgBACgDIAfAAQgCANgNAHQgLAHgTAAQgZAAgMgMgAl0gFIAkAAQgBgGgFgDQgFgEgHAAQgPAAgDANgAATAwIAAhWIAeAAIAAAeIAaAAQAOAAAJAIQAJAGAAAOQAAAOgJAHQgJAHgOAAgAAxAbIASAAQAFAAACgCQACgCAAgEQAAgFgCgCIgHgBIgSAAgAgiAwIAAg+IgYAAIgDArIgDAKQgDAEgFADQgHACgGAAIgPAAIAAgYIAIAAIACgBIACgBQACgEAAgJIABgvIBTAAIAABWgAEkAwIAAhWIAgAAIAAA+IAVAAIAAg+IAfAAIAAA+IAXAAIAAg+IAeAAIAABWgADuAwIAAhWIAgAAIAABWgAC4AwIAAghIgeAAIAAAhIgfAAIAAhWIAfAAIAAAeIAeAAIAAgeIAfAAIAABWgAkOAwIAAg+IgeAAIAAgYIBbAAIAAAYIgeAAIAAA+gADugxIAAgXIAgAAIAAAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApmCqQgtAAgfgfQgggfAAgtIAAh8QAAgtAgggQAfgfAtAAITNAAQAtAAAfAfQAgAgAAAtIAAB8QAAAsggAgQgfAfgtAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-72.3,-17,144.6,34), null);


(lib.box_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-54,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(-54,-77,108,154), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8976B3").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_billet();
	this.instance.parent = this;
	this.instance.setTransform(0.5,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({alpha:1},15).wait(1));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-49.9,-90,0.02,0.02,0,0,0,-2.5,-2.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1},10,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1},5).wait(85).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1},10,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleX:1,scaleY:1},10,cjs.Ease.quadInOut).wait(41));

	// box
	this.instance_3 = new lib.box_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-205,142);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({x:-75},14,cjs.Ease.get(1)).wait(216));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-78.4,88.8,0.5,0.5,0,0,0,-0.3,0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({regX:-0.1,regY:0,scaleX:1.1,scaleY:1.1,y:18.8},10,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:-78.3,y:28.8},5).wait(70).to({regX:-0.1,scaleX:1.1,scaleY:1.1,x:-78.4,y:18.8},10,cjs.Ease.quadInOut).to({regX:0,scaleX:1,scaleY:1,x:-78.3,y:28.8},10,cjs.Ease.quadInOut).wait(81));

	// t1_2
	this.instance_5 = new lib.t1_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50.2,-170.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({alpha:1},10).wait(75).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,x:-50.3,y:-170.2},10,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-50.2,y:-170.1},10,cjs.Ease.quadInOut).wait(101));

	// t1_1
	this.instance_6 = new lib.t1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.5,-231.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({alpha:1},10).wait(216));

	// woman
	this.instance_7 = new lib.woman_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(261.7,59,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:40.3},14,cjs.Ease.get(1)).wait(226));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,522.1,600.4);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,523.1,602);
// library properties:
lib.properties = {
	id: 'C6CFCF143BE44602932F386B1A77FDC2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box.png", id:"box"},
		{src:"images/woman.png", id:"woman"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C6CFCF143BE44602932F386B1A77FDC2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;