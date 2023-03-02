(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.art = function() {
	this.initialize(img.art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,58);


(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,180);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,180);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,180);


(lib.boxes = function() {
	this.initialize(img.boxes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,304);


(lib.chip1 = function() {
	this.initialize(img.chip1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,130);


(lib.chip2 = function() {
	this.initialize(img.chip2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,60);


(lib.chip3 = function() {
	this.initialize(img.chip3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,48);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,114);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,300);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,74);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,34);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,52);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,420);


(lib.img7 = function() {
	this.initialize(img.img7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,64);


(lib.img8 = function() {
	this.initialize(img.img8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,58);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,124);


(lib.sh1 = function() {
	this.initialize(img.sh1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,54);// helper functions:

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


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("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");
	this.shape_1.setTransform(-2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D31B21").ss(83,1,1).p("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");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Слой_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D31B21").s().p("ACRNBQg8gfgng7Qgmg6gFhDQgEhDAchAQAeg/A2goQAzglA/gKQAygIAzALQAzALArAdQAqAcAdAsQAdArALAyQAJAtgHAvQgHAvgWAoQgkBChBAmQg7AhhGACIgEAAQhEAAg5gegAuLlRQhAgagsg6Qgsg5gKhFQgJhEAahEQAahDA1gtQAlgfArgQQBEgbBLALQBLALA4AtQAxAnAbA5QAWAwABA1QACA2gUAxQgiBXhXA1Qg7AlhCAGIgYABQgzAAgwgTgAMllGQhNgChDgvQhDgugdhIQgVg1ADg2QAChNAwhCQAwhBBIgcQBIgbBQASQBPATA1A4QA1A4AOBQQAOBQgfBHQgfBGhFAsQhDArhMAAIgDAAg");
	this.shape_4.setTransform(-132.4,62.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(83,1,1).p("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");
	this.shape_5.setTransform(-14,14);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-389.6,-196.4,765.3,406.8), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AeORYIAAiNIm5AAIAACNIi2AAIAAklIAZAAQBsgEAMlCIAIjSIItAAIAAIYIBfAAIAAElgAZZH9QgIDng2BPIEJAAIAAmAIjGAAgABjN5QhqhnAAidQAAihBqhjQBrhnCpAAQDHAABqCAIh7BvQhLhKheAAQhbAAg1A2Qg2A1AABbQAABXA2A5QA1A2BWAAQA6AAAygZIAAi9ICtAAIAAEgQiABXihAAQipAAhrhjgA3+N1QhvhjAAidQAAidBvhnQBshnCpAAQClAABrBnQBwBngBCdQABCZhwBnQhrBnilAAQilAAhwhngA1xHlQg2A5AABXQAABXA2A5QA2A2BSAAQBOAAA2g2QA1g5AAhXQAAhXg1g5Qg2g2hOAAQhSAAg2A2gEg5BAOOIBBiRQBrBGB4AAQBzAAAAg5QABghjHg2QjFgygBiUQABhjBOg+QBThCCUAAQCUAABoA+Ig+CQQhfg1hjAAQhwAAABA+QgBAlDHAxQDFA2ABCQQgBBfhOA+QhTBCiUAAQixAAhzhOgEAhlAPLIANicIAYAAQA2AAAYhGQARg6AEiAIANkUIItAAIAAKwIjDAAIAAoYIjGAAIgDB0QgJDegpBfQgyB0h7AAgEA0+APLIAAitIhrAAIhvCtIjOAAICMjKQiRhCABihQAAh3BShGQBThGCQAAIE6AAIAAKwgEAxYAIeQgBBsB0AAIBzAAIAAjXIhzAAQh0AAABBrgAkQPLIkxlvIAAFvIjBAAIAAqwIChAAIExFvIAAlvIDBAAIAAKwgA95PLIh8i1IhrAAIAAC1IjGAAIAAqwIE9AAQCRAABTBCQBSBGAAB3QAACZiIBCICUDWgEghgAJ9IBrAAQB8AAAAhjQAAhnh8AAIhrAAgEgsFAPLIAAoYIjWAAIAAiYIJvAAIAACYIjWAAIAAIYgEA42gEVIA+iRQBsBGB7AAQBwAAAAg5QgBghjCg2QjGgyAAiUQAAhjBLg+QBThCCUAAQCUAABoA+Ig/CQQheg1hfAAQhwAAABA+QAAAlDGAxQDBA2AACQQABBfhPA+QhTBCiUAAQiuAAhzhOgEhAggEuQhshjABidQgBidBshnQBvhnClAAQCpAABrBnQBsBnAACdQAACdhsBjQhvBnilAAQilAAhvhngEg+QgK+Qg2A5ABBXQgBBbA2A1QAyA2BSAAQBPAAA1g2QA2g5AAhXQAAhXg2g5Qg1g2hPAAQhSAAgyA2gEAoWgDYIAAj3IkIm5IDOAAIClEQIChkQIC+AAIkIG5IAAD3gEAiPgDYIg2iEIklAAIg6CEIjGAAIEyqwIDBAAIExKwgAdpnsIC2AAIhbjfgAQkjYIAAqwIDCAAIAAIYIFKAAIAACYgACRjYIAAmUIkcGUIi6AAIAAqwIDCAAIAAGUIEgmUIC1AAIAAKwgApejYIg1iEIklAAIg6CEIjGAAIExqwIDDAAIExKwgAt+nsICxAAIhajfgA8ajYIAAqwIE+AAQCQAABTBCQBSBGAAB3QAAB4hSBCQhTBGiQAAIh4AAIAACxgA5UomIBrAAQB8AAAAhjQAAhnh8AAIhrAAgEghxgDYIAAmUIkcGUIi1AAIAAqwIC9AAIAAGUIEhmUIC2AAIAAKwgEg0hgDYIAAqwIJBAAIAACUImDAAIAABvIC1AAQEEAAAADTQAABnhKA6QhKA5iJAAgEgxjgFkICQAAQBjAAAAhKQAAhKhjAAIiQAAgEAzTgMuIi+iYIC+AAICECYgAjFxXICEAAQAIBGBBAAQBGAAAAhGICFAAQAACljLAAQjNAAAAilg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("AeORYIAAiNIm5AAIAACNIi2AAIAAklIAaAAQBrgEAMlCIAIjSIItAAIAAIYIBfAAIAAElgAZZH9QgIDng2BPIEIAAIAAmAIjGAAgABjN5QhrhnAAidQAAihBrhjQBrhnCpAAQDHAABqCAIh7BvQhLhKhfAAQhaAAg2A2Qg2A1AABbQAABXA2A5QA2A2BWAAQA7AAAxgZIAAi9ICtAAIAAEgQiABXihAAQipAAhrhjgA39N1QhwhjAAidQAAidBwhnQBrhnCpAAQClAABrBnQBwBngBCdQABCZhwBnQhrBnilAAQilAAhvhngA1yHlQg1A5AABXQAABXA1A5QA2A2BTAAQBOAAA2g2QA2g5gBhXQABhXg2g5Qg2g2hOAAQhTAAg2A2gEg5BAOOIBBiRQBrBGB4AAQBzAAAAg5QABghjHg2QjGgyAAiUQABhjBOg+QBShCCVAAQCVAABmA+Ig9CQQhfg1hjAAQhwAAABA+QAAAlDGAxQDFA2ABCQQAABfhPA+QhTBCiUAAQixAAhzhOgEAhlAPLIANicIAYAAQA2AAAYhGQARg6AEiAIANkUIItAAIAAKwIjDAAIAAoYIjGAAIgDB0QgJDegpBfQgyB0h7AAgEA0+APLIAAitIhrAAIhvCtIjOAAICMjKQiRhCAAihQAAh3BThGQBThGCQAAIE6AAIAAKwgEAxXAIeQAABsB0AAIBzAAIAAjXIhzAAQh0AAAABrgAkQPLIkxlvIAAFvIjBAAIAAqwIChAAIEwFvIAAlvIDCAAIAAKwgA95PLIh8i1IhrAAIAAC1IjGAAIAAqwIE9AAQCRAABTBCQBSBGAAB3QAACZiIBCICUDWgEghgAJ9IBrAAQB8AAAAhjQAAhnh8AAIhrAAgEgsEAPLIAAoYIjXAAIAAiYIJvAAIAACYIjXAAIAAIYgEA42gEVIA+iRQBsBGB7AAQBwAAAAg5QgBghjCg2QjGgyAAiUQAAhjBLg+QBShCCVAAQCUAABoA+Ig+CQQhgg1heAAQhvAAAAA+QAAAlDGAxQDBA2AACQQABBfhPA+QhSBCiVAAQitAAh0hOgEhAggEuQhrhjAAidQAAidBrhnQBvhnClAAQCpAABrBnQBsBnAACdQAACdhsBjQhvBnilAAQilAAhvhngEg+QgK+Qg1A5AABXQAABbA1A1QAyA2BSAAQBOAAA2g2QA2g5AAhXQAAhXg2g5Qg2g2hOAAQhSAAgyA2gEAoWgDYIAAj3IkIm5IDPAAICkEQIChkQIC+AAIkIG5IAAD3gEAiPgDYIg2iEIklAAIg6CEIjGAAIEyqwIDBAAIExKwgAdpnsIC2AAIhbjfgAQkjYIAAqwIDCAAIAAIYIFKAAIAACYgACQjYIAAmUIkbGUIi6AAIAAqwIDCAAIAAGUIEgmUIC1AAIAAKwgApejYIg1iEIklAAIg6CEIjGAAIExqwIDDAAIEwKwgAt+nsICxAAIhajfgA8ajYIAAqwIE+AAQCQAABTBCQBSBGAAB3QAAB4hSBCQhTBGiQAAIh4AAIAACxgA5UomIBrAAQB8AAAAhjQAAhnh8AAIhrAAgEghxgDYIAAmUIkcGUIi2AAIAAqwIC+AAIAAGUIEhmUIC2AAIAAKwgEg0hgDYIAAqwIJBAAIAACUImDAAIAABvIC1AAQEEAAAADTQAABnhKA6QhKA5iJAAgEgxjgFkICQAAQBjAAAAhKQAAhKhjAAIiQAAgEAzTgMuIi+iYIC+AAICFCYgAjFxXICEAAQAIBGBBAAQBGAAAAhGICFAAQAACljLAAQjNAAAAilg");
	this.shape_1.setTransform(-2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D31B21").ss(83,1,1).p("AjFxXICEAAQAIBGBBAAQBHAAAAhGICEAAQAACljLAAQjNAAAAilgAlFuIIDCAAIAAGUIEgmUIC1AAIAAKwIjBAAIAAmUIkdGUIi5AAgAQkuIIDCAAIAAIYIFKAAIAACYIoMAAgEAhZgFcIklAAIg6CEIjGAAIEyqwIDBAAIEyKwIjKAAgEAgfgHsIhbjfIhaDfgEArYgHPIAAD3IjCAAIAAj3IkIm5IDPAAIClEQIChkQIC9AAgEA42gEVIA+iRQBsBGB7AAQBwAAAAg5QAAghjCg2QjGgyAAiUQAAhjBKg+QBThCCUAAQCVAABnA+Ig+CQQhfg1hfAAQhvAAAAA+QAAAlDGAxQDCA2AACQQAABfhPA+QhSBCiVAAQitAAh0hOgEAwWgPGIC+AAICECYIiEAAgEhCMgIuQAAidBshnQBvhnClAAQCpAABrBnQBsBnAACdQAACdhsBjQhvBnilAAQilAAhvhnQhshjAAidgEg5SgIuQAAhXg2g5Qg2g2hOAAQhTAAgxA2Qg2A5AABXQAABbA2A1QAxA2BTAAQBOAAA2g2QA2g5AAhXgEg0hgOIIJBAAIAACUImDAAIAABvIC1AAQEEAAAADTQAABnhKA6QhLA5iIAAIlaAAgEgpDgOIIC+AAIAAGUIEhmUIC1AAIAAKwIjCAAIAAmUIkcGUIi2AAgEgvTgFkQBjAAAAhKQAAhKhjAAIiQAAIAACUgA1tqJQAAhnh8AAIhrAAIAADKIBrAAQB8AAAAhjgAynqJQAAB4hTBCQhSBGiRAAIh3AAIAACxIjGAAIAAqwIE9AAQCRAABSBCQBTBGAAB3gAqTlcIklAAIg6CEIjGAAIExqwIDCAAIExKwIjKAAgArNnsIhbjfIhWDfgAhvEbIAAKwIihAAIkxlvIAAFvIjCAAIAAqwIChAAIExFvIAAlvgA5tJ1QAAidBvhnQBrhnCqAAQClAABrBnQBvBnAACdQAACZhvBnQhrBnilAAQilAAhwhnQhvhjAAidgAwwJ1QAAhXg1g5Qg2g2hOAAQhTAAg2A2Qg1A5AABXQAABXA1A5QA2A2BTAAQBOAAA2g2QA1g5AAhXgA/1MWIhrAAIAAC1IjGAAIAAqwIE9AAQCRAABSBCQBTBGAAB3QAACZiIBCICUDWIjSAAgA/1GzIhrAAIAADKIBrAAQB8AAAAhjQAAhnh8AAgEgsFAGzIjWAAIAAiYIJvAAIAACYIjXAAIAAIYIjCAAgEg5CAOOIBCiRQBrBGB4AAQBzAAAAg5QAAghjGg2QjGgyAAiUQAAhjBPg+QBShCCVAAQCUAABnA+Ig9CQQhfg1hjAAQhwAAAAA+QAAAlDGAxQDGA2AACQQAABfhOA+QhTBCiUAAQixAAh0hOgEA4BAEbIAAKwIjCAAIAAitIhrAAIhwCtIjOAAICMjKQiQhCAAihQAAh3BShGQBThGCQAAgEAxYAIeQAABsBzAAIB0AAIAAjXIh0AAQhzAAAABrgEAsnAEbIAAKwIjCAAIAAoYIjGAAIgEB0QgJDegpBfQgxB0h8AAIhXgNIANicIAYAAQA2AAAZhGQAQg6AEiAIANkUgAYcMzIEIAAIAAmAIjGAAIgFBKQgIDng1BPgEAhEAMzIAAElIi1AAIAAiNIm6AAIAACNIi1AAIAAklIAZAAQBrgEAMlCIAJjSIIsAAIAAIYgAHrJlICtAAIAAEgQiABXigAAQiqAAhrhjQhrhnAAidQAAihBrhjQBrhnCqAAQDGAABrCAIh8BvQhKhKhfAAQhbAAg1A2Qg2A1AABbQAABXA2A5QA1A2BXAAQA6AAAxgZg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AeORYIAAiNIm5AAIAACNIi2AAIAAklIAZAAQBsgEAMlCIAIjSIItAAIAAIYIBfAAIAAElgAZZH9QgIDng2BPIEJAAIAAmAIjGAAgABjN5QhqhnAAidQAAihBqhjQBrhnCpAAQDHAABqCAIh7BvQhLhKheAAQhbAAg1A2Qg2A1AABbQAABXA2A5QA1A2BWAAQA6AAAygZIAAi9ICtAAIAAEgQiABXihAAQipAAhrhjgA3+N1QhvhjAAidQAAidBvhnQBshnCpAAQClAABrBnQBwBngBCdQABCZhwBnQhrBnilAAQilAAhwhngA1xHlQg2A5AABXQAABXA2A5QA2A2BSAAQBOAAA2g2QA1g5AAhXQAAhXg1g5Qg2g2hOAAQhSAAg2A2gEg5BAOOIBBiRQBrBGB4AAQBzAAAAg5QABghjHg2QjFgygBiUQABhjBOg+QBThCCUAAQCUAABoA+Ig+CQQhfg1hjAAQhwAAABA+QgBAlDHAxQDFA2ABCQQgBBfhOA+QhTBCiUAAQixAAhzhOgEAhlAPLIANicIAYAAQA2AAAYhGQARg6AEiAIANkUIItAAIAAKwIjDAAIAAoYIjGAAIgDB0QgJDegpBfQgyB0h7AAgEA0+APLIAAitIhrAAIhvCtIjOAAICMjKQiRhCABihQAAh3BShGQBThGCQAAIE6AAIAAKwgEAxYAIeQgBBsB0AAIBzAAIAAjXIhzAAQh0AAABBrgAkQPLIkxlvIAAFvIjBAAIAAqwIChAAIExFvIAAlvIDBAAIAAKwgA95PLIh8i1IhrAAIAAC1IjGAAIAAqwIE9AAQCRAABTBCQBSBGAAB3QAACZiIBCICUDWgEghgAJ9IBrAAQB8AAAAhjQAAhnh8AAIhrAAgEgsFAPLIAAoYIjWAAIAAiYIJvAAIAACYIjWAAIAAIYgEA42gEVIA+iRQBsBGB7AAQBwAAAAg5QgBghjCg2QjGgyAAiUQAAhjBLg+QBThCCUAAQCUAABoA+Ig/CQQheg1hfAAQhwAAABA+QAAAlDGAxQDBA2AACQQABBfhPA+QhTBCiUAAQiuAAhzhOgEhAggEuQhshjABidQgBidBshnQBvhnClAAQCpAABrBnQBsBnAACdQAACdhsBjQhvBnilAAQilAAhvhngEg+QgK+Qg2A5ABBXQgBBbA2A1QAyA2BSAAQBPAAA1g2QA2g5AAhXQAAhXg2g5Qg1g2hPAAQhSAAgyA2gEAoWgDYIAAj3IkIm5IDOAAIClEQIChkQIC+AAIkIG5IAAD3gEAiPgDYIg2iEIklAAIg6CEIjGAAIEyqwIDBAAIExKwgAdpnsIC2AAIhbjfgAQkjYIAAqwIDCAAIAAIYIFKAAIAACYgACRjYIAAmUIkcGUIi6AAIAAqwIDCAAIAAGUIEgmUIC1AAIAAKwgApejYIg1iEIklAAIg6CEIjGAAIExqwIDDAAIExKwgAt+nsICxAAIhajfgA8ajYIAAqwIE+AAQCQAABTBCQBSBGAAB3QAAB4hSBCQhTBGiQAAIh4AAIAACxgA5UomIBrAAQB8AAAAhjQAAhnh8AAIhrAAgEghxgDYIAAmUIkcGUIi1AAIAAqwIC9AAIAAGUIEhmUIC2AAIAAKwgEg0hgDYIAAqwIJBAAIAACUImDAAIAABvIC1AAQEEAAAADTQAABnhKA6QhKA5iJAAgEgxjgFkICQAAQBjAAAAhKQAAhKhjAAIiQAAgEAzTgMuIi+iYIC+AAICECYgAjFxXICEAAQAIBGBBAAQBGAAAAhGICFAAQAACljLAAQjNAAAAilg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Слой_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D31B21").s().p("Av+MyQgygTglglQgqgpgUg4QgVg5AFg6QAFg6Afg0QAeg0AxghQAwghA7gKQA7gJA4APQBSAXA2BCQAeAlAQAuQAQAugCAvQgBAvgTAtQgSAtggAjQgmAog0AWQgzAVg3AAQg1AAgxgUgEA1lgADQhJgRg1g4Qg2g5gOhJQgGgegCg0QgBg/ACggQAEg0APgnQATgxAngmQAngmAxgTQA3gWA7ACQA8ACAzAbQA0AaAlAvQAlAwAMA5QAGAeAAAmQAAAVgDAwIgFA2QgDAegHAXQgOAxgfAoQggAqgrAYQgrAag0AHQgTADgUAAQgfAAgegHgEg4QgFPQhOghgrhEQgWgjgKgqQgKgpADgqQAFhBAlg5QAmg5A5gfQA5gfBEAAQBEAAA5AfQBGAmAmBMQAnBMgMBPQgLBPg6A+Qg6A+hPAQQgaAGgZAAQg1AAg0gXg");
	this.shape_4.setTransform(-31.5,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(83,1,1).p("AlFuIIDCAAIAAGUIEgmUIC1AAIAAKwIjBAAIAAmUIkcGUIi6AAgAQkuIIDCAAIAAIYIFKAAIAACYIoMAAgEAhZgFcIklAAIg6CEIjGAAIEyqwIDBAAIEyKwIjKAAgEAgfgHsIhbjfIhaDfgEAwWgPGIC+AAICDCYIiDAAgEArYgHPIAAD3IjCAAIAAj3IkIm5IDPAAIClEQICgkQIC+AAgEA42gEVIA+iRQBsBGB7AAQBwAAAAg5QAAghjCg2QjHgyAAiUQAAhjBLg+QBThCCUAAQCVAABnA+Ig+CQQhgg1heAAQhvAAAAA+QAAAlDGAxQDCA2AACQQAABfhPA+QhTBCiUAAQitAAh0hOgEg5SgIuQAAhXg2g5Qg2g2hOAAQhSAAgyA2Qg2A5AABXQAABbA2A1QAyA2BSAAQBOAAA2g2QA2g5AAhXgEhCMgIuQAAidBshnQBvhnClAAQCpAABrBnQBsBnAACdQAACdhsBjQhvBnilAAQilAAhvhnQhshjAAidgEg0hgOIIJBAAIAACUImDAAIAABvIC2AAQEDAAAADTQAABnhKA6QhLA5iHAAIlbAAgEgvTgFkQBjAAAAhKQAAhKhjAAIiQAAIAACUgEgpDgOIIC+AAIAAGUIEhmUIC1AAIAAKwIjCAAIAAmUIkcGUIi2AAgAynqJQAAB4hTBCQhSBGiRAAIh3AAIAACxIjGAAIAAqwIE9AAQCRAABSBCQBTBGAAB3gA1tqJQAAhnh8AAIhrAAIAADKIBrAAQB8AAAAhjgAjFxXICEAAQAIBGBBAAQBHAAAAhGICEAAQAACljLAAQjNAAAAilgAqTlcIklAAIg6CEIjGAAIExqwIDDAAIExKwIjKAAgArNnsIhbjfIhWDfgAhuEbIAAKwIihAAIkylvIAAFvIjBAAIAAqwICgAAIExFvIAAlvgA5tJ1QAAidBvhnQBrhnCqAAQClAABrBnQBwBnAACdQAACZhwBnQhrBnilAAQilAAhwhnQhvhjAAidgAwwJ1QAAhXg1g5Qg2g2hOAAQhSAAg3A2Qg1A5AABXQAABXA1A5QA3A2BSAAQBOAAA2g2QA1g5AAhXgA/1MWIhrAAIAAC1IjGAAIAAqwIE+AAQCQAABSBCQBTBGAAB3QAACZiIBCICUDWIjSAAgA/1GzIhrAAIAADKIBrAAQB8AAAAhjQAAhnh8AAgEgsFAGzIjWAAIAAiYIJvAAIAACYIjXAAIAAIYIjCAAgEg5BAOOIBBiRQBrBGB4AAQBzAAAAg5QAAghjFg2QjHgyAAiUQAAhjBPg+QBShCCVAAQCVAABmA+Ig9CQQhfg1hjAAQhwAAAAA+QAAAlDGAxQDGA2AACQQAABfhOA+QhTBCiUAAQixAAhzhOgEAxYAIeQAABsBzAAIBzAAIAAjXIhzAAQhzAAAABrgEA4BAEbIAAKwIjDAAIAAitIhqAAIhwCtIjOAAICMjKQiQhCAAihQAAh3BShGQBThGCQAAgAYcMzIEIAAIAAmAIjGAAIgFBKQgIDng1BPgEAsnAEbIAAKwIjDAAIAAoYIjFAAIgEB0QgJDegpBfQgxB0h8AAIhXgNIANicIAYAAQA2AAAZhGQAQg6AEiAIANkUgEAhEAMzIAAElIi1AAIAAiNIm6AAIAACNIi1AAIAAklIAZAAQBrgEAMlCIAJjSIIsAAIAAIYgAHrJlICtAAIAAEgQiABXigAAQiqAAhrhjQhqhnAAidQAAihBqhjQBrhnCqAAQDGAABrCAIh8BvQhKhKhfAAQhbAAg1A2Qg2A1AABbQAABXA2A5QA1A2BXAAQA6AAAxgZg");
	this.shape_5.setTransform(-8.4,8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AeORYIAAiNIm5AAIAACNIi1AAIAAklIAZAAQBrgEAMlCIAJjSIIsAAIAAIYIBfAAIAAElgAZZH9QgIDng1BPIEHAAIAAmAIjGAAgABjN5QhqhngBidQABihBqhjQBrhnCqAAQDGAABrCAIh8BvQhLhKhfAAQhaAAg2A2Qg2A1AABbQAABXA2A5QA2A2BXAAQA6AAAxgZIAAi9ICtAAIAAEgQiABXigAAQiqAAhrhjgA39N1QhwhjAAidQAAidBwhnQBqhnCqAAQClAABrBnQBvBnAACdQAACZhvBnQhrBnilAAQilAAhvhngA1yHlQg1A5AABXQAABXA1A5QA3A2BSAAQBOAAA2g2QA2g5gBhXQABhXg2g5Qg2g2hOAAQhSAAg3A2gEg5BAOOIBCiRQBrBGB3AAQBzAAABg5QAAghjGg2QjHgyABiUQgBhjBPg+QBShCCVAAQCVAABmA+Ig9CQQhfg1hjAAQhwAAAAA+QABAlDFAxQDGA2AACQQAABfhOA+QhSBCiVAAQixAAhzhOgEAhlAPLIAMicIAZAAQA2AAAZhGQAQg6AEiAIAMkUIItAAIAAKwIjBAAIAAoYIjGAAIgFB0QgIDegpBfQgxB0h8AAgEA0/APLIAAitIhsAAIhvCtIjOAAICMjKQiRhCAAihQABh3BShGQBShGCRAAIE5AAIAAKwgEAxXAIeQAABsB0AAIB0AAIAAjXIh0AAQh0AAAABrgAkPPLIkylvIAAFvIjCAAIAAqwIChAAIExFvIAAlvIDDAAIAAKwgA95PLIh8i1IhrAAIAAC1IjGAAIAAqwIE9AAQCRAABSBCQBTBGAAB3QAACZiIBCICVDWgEghgAJ9IBrAAQB8AAAAhjQAAhnh8AAIhrAAgEgsEAPLIAAoYIjXAAIAAiYIJvAAIAACYIjXAAIAAIYgEA42gEVIA+iRQBsBGB7AAQBwAAgBg5QAAghjBg2QjHgyABiUQgBhjBLg+QBThCCUAAQCUAABoA+Ig+CQQhfg1hfAAQhwAAAAA+QABAlDFAxQDDA2AACQQgBBfhOA+QhSBCiVAAQiuAAhzhOgEhAggEuQhshjAAidQAAidBshnQBvhnClAAQCpAABsBnQBrBnAACdQAACdhrBjQhwBnilAAQilAAhvhngEg+QgK+Qg2A5AABXQAABbA2A1QAxA2BTAAQBOAAA2g2QA2g5AAhXQAAhXg2g5Qg2g2hOAAQhTAAgxA2gEAoWgDYIAAj3IkIm5IDPAAICkEQICikQIC9AAIkIG5IAAD3gEAiPgDYIg2iEIklAAIg6CEIjGAAIEyqwIDBAAIExKwgAdpnsIC2AAIhbjfgAQkjYIAAqwIDCAAIAAIYIFKAAIAACYgACQjYIAAmUIkbGUIi6AAIAAqwIDCAAIAAGUIEgmUIC1AAIAAKwgApdjYIg2iEIklAAIg5CEIjGAAIExqwIDBAAIExKwgAt+nsICxAAIhbjfgA8ajYIAAqwIE9AAQCRAABTBCQBSBGAAB3QAAB4hSBCQhTBGiRAAIh3AAIAACxgA5UomIBrAAQB8AAAAhjQAAhnh8AAIhrAAgEghxgDYIAAmUIkcGUIi2AAIAAqwIC+AAIAAGUIEhmUIC2AAIAAKwgEg0hgDYIAAqwIJCAAIAACUImEAAIAABvIC2AAQEDAAAADTQAABnhKA6QhLA5iIAAgEgxjgFkICQAAQBjAAAAhKQAAhKhjAAIiQAAgEAzTgMuIi9iYIC9AAICFCYgAjFxXICEAAQAIBGBBAAQBHAAAAhGICEAAQAACljLAAQjNAAAAilg");
	this.shape_6.setTransform(-8.4,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-473.5,-152.7,938.7,313.8), null);


(lib.sh1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.sh1();
	this.instance.parent = this;
	this.instance.setTransform(-38,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sh1_1, new cjs.Rectangle(-38,-27,76,54), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-63,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(-63,-150,126,300), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-66,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-66,-62,132,124), null);


(lib.img8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img8();
	this.instance.parent = this;
	this.instance.setTransform(-42,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img8_1, new cjs.Rectangle(-42,-29,84,58), null);


(lib.img7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img7();
	this.instance.parent = this;
	this.instance.setTransform(-46,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img7_1, new cjs.Rectangle(-46,-32,92,64), null);


(lib.img6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img6();
	this.instance.parent = this;
	this.instance.setTransform(-55,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img6_1, new cjs.Rectangle(-55,-210,110,420), null);


(lib.img5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img5();
	this.instance.parent = this;
	this.instance.setTransform(-18,-21,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img5_1, new cjs.Rectangle(-18,-21,36.8,41.6), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-24,-15,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-24,-15,48.6,30.6), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-32.6,-31.8,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-32.6,-31.8,65.4,63.7), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-57,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-57,-57,114,114), null);


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApqNNIBal6IgevLIhumkINvgKIHCACIhQGpIANOJIBLH2I0MAjIAAAAIAFhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cover, new cjs.Rectangle(-66.9,-93.5,133.8,187), null);


(lib.chip3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chip3();
	this.instance.parent = this;
	this.instance.setTransform(-50,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip3_1, new cjs.Rectangle(-50,-24,100,48), null);


(lib.chip2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chip2();
	this.instance.parent = this;
	this.instance.setTransform(-47,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip2_1, new cjs.Rectangle(-47,-30,94,60), null);


(lib.chip1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chip1();
	this.instance.parent = this;
	this.instance.setTransform(-51,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip1_1, new cjs.Rectangle(-51,-65,102,130), null);


(lib.boxes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.boxes();
	this.instance.parent = this;
	this.instance.setTransform(-132,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes_1, new cjs.Rectangle(-132,-152,264,304), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-62,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-62,-90,124,180), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-62,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-62,-90,124,180), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-62,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-62,-90,124,180), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#971E23").s().p("ArtSwMAAAglfIXbAAMAAAAlfg");
	this.shape.setTransform(75,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD322D").s().p("ArtcIMAAAg4PIXbAAMAAAA4Pg");
	this.shape_1.setTransform(75,-120);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2371B9").s().p("ArtSwMAAAglfIXbAAMAAAAlfg");
	this.shape_2.setTransform(-75,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3AA8E5").s().p("ArtcIMAAAg4PIXbAAMAAAA4Pg");
	this.shape_3.setTransform(-75,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.art_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.art();
	this.instance.parent = this;
	this.instance.setTransform(-27,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.art_1, new cjs.Rectangle(-27,-29,54,58), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(617.6,156.7,2.28,2.28,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoOUmIkTANIgLjhIMwgmIAKDhIkSANIAhK9IkKANgACTQlIH8gYQCOgHBWA6QBYA6AFBsQAGCRiPBHQBZAXAvA0QA0A4AEBeQAGB2haBIQhZBHihAIIn6AYgAJ4YpIjIAJIAIC4IDQgKQA7gDAegbQAcgagCgrQgCgogfgWQgegWg2AAIgOAAgAJcTSIi9AIIAJCzIC5gJQA2gDAcgcQAagagCgqQgCglgagVQgagWguAAIgLABgASsP0IEHgNIAsOfIkHAMgAaqPcID+gMIAaIdIFQouID3gMIAsOfIj+AMIgaocIlQItIj3ALgEAu5AYqIEYgNIANEUIkYAOgEAu2ASKIAJgJQCegOBJgtQBDgqgDhKQgDg6gsgeQgrgfhLAEQhIADg/AhQg9Agg6A/IininQCgjCD/gMQC+gJB0BXQB5BbAICsQAHCahfBdQhQBNicAoIgOBqIixAIgASWKkIEUgNIALDqIkUANgAeWMzQhQhCgYh7ICZgjQAqBxBkgEQBkgFAfh1ICbAUQgMB+hJBIQhKBJh3AGIgSAAQhrAAhKg8gEAgUAFIQipgQicg/QiXg8iBhkQhsgShkghQiegzhhhaQgegcgUgcIgPgXIgahLIAAgCQhSkHAUlzQALjLA6iwQAziZBNhuQAbgmBQghQBNgfBlgRQC4jAD4hfQEAhiETAaQDhAWDIBmQDABjCSCiQCGAjBqBSQA1ApAbAjQBtCwAjEcQAiEXguE5IABgCIgGAoQgKAxhPArQhiA3ifAMQiyEHkeCLQjyB1kJAAQg6AAg7gFgEg0RgGjQhegfg0g/Qg4hFgFhoQgGiOBdhXQBghaCygJIHmgWIArOeIkGANIgOkqIiOAHIi2EzIkwAOgEgxCgMqQhIAEgmAgQgnAgACA5QADA3ArAdQApAcBJgEICygIIgLjpgEgmmgQYIEHgMIARF8IE6mMIEvgOIlDGNIGaIQIk3APIkIlWIhxCIIAKDfIkHAMgA2GxJID+gMIAaIdIFQouID3gMIArOfIj+AMIgZocIlQItIj3ALgAk8x9ID+gMIAZIdIFPouID3gMIAsOfIj+AMIgZobIlPIsIj4AMgAhQ0mQhQhCgYh7ICYgjQAqByBkgFQBkgEAfh2ICbAVQgNB9hJBJQhJBJh3AFIgSAAQhrAAhJg8g");
	this.shape.setTransform(398.2,243.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(56,56,56,0.4)").s().p("AoOUmIkTANIgLjhIMwgmIAKDhIkSANIAhK9IkKANgACTQlIH8gYQCOgHBWA6QBYA6AFBsQAGCRiPBHQBZAXAvA0QA0A4AEBeQAGB2haBIQhZBHihAIIn6AYgAJ4YpIjIAJIAIC4IDQgKQA7gDAegbQAcgagCgrQgCgogfgWQgegWg2AAIgOAAgAJcTSIi9AIIAJCzIC5gJQA2gDAcgcQAagagCgqQgCglgagVQgagWguAAIgLABgASsP0IEHgNIAsOfIkHAMgAaqPcID+gMIAaIdIFQouID3gMIAsOfIj+AMIgaocIlQItIj3ALgEAu5AYqIEYgNIANEUIkYAOgEAu2ASKIAJgJQCegOBJgtQBDgqgDhKQgDg6gsgeQgrgfhLAEQhIADg/AhQg9Agg6A/IininQCgjCD/gMQC+gJB0BXQB5BbAICsQAHCahfBdQhQBNicAoIgOBqIixAIgASWKkIEUgNIALDqIkUANgAeWMzQhQhCgYh7ICZgjQAqBxBkgEQBkgFAfh1ICbAUQgMB+hJBIQhKBJh3AGIgSAAQhrAAhKg8gEAgUAFIQipgQicg/QiXg8iBhkQhsgShkghQiegzhhhaQgegcgUgcIgPgXIgahLIAAgCQhSkHAUlzQALjLA6iwQAziZBNhuQAbgmBQghQBNgfBlgRQC4jAD4hfQEAhiETAaQDhAWDIBmQDABjCSCiQCGAjBqBSQA1ApAbAjQBtCwAjEcQAiEXguE5IABgCIgGAoQgKAxhPArQhiA3ifAMQiyEHkeCLQjyB1kIAAQg7AAg7gFgEg0RgGjQhegfg0g/Qg4hFgFhoQgGiOBdhXQBghaCygJIHmgWIArOeIkGANIgOkqIiOAHIi2EzIkwAOgEgxCgMqQhIAEgmAgQgnAgACA5QADA3ArAdQApAcBJgEICygIIgLjpgEgmmgQYIEHgMIARF8IE6mMIEvgOIlDGNIGaIQIk3APIkIlWIhxCIIAKDfIkHAMgA2GxJID+gMIAaIdIFQouID3gMIArOfIj+AMIgZocIlQItIj3ALgAk8x9ID+gMIAZIdIFPouID3gMIAsOfIj+AMIgZobIlPIsIj4AMgAhQ0mQhQhCgYh7ICYgjQAqByBkgFQBkgEAfh2ICbAVQgNB9hJBJQhJBJh3AFIgSAAQhrABhJg9g");
	this.shape_1.setTransform(393.2,248.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D31B21").ss(83,1,1).p("EA2zgF/IABgCQgFAngBABQgKAxhPArQhiA3ifAMQiyEHkeCLQkoCPlIgfQipgQicg/QiXg8iBhkQhsgShkghQiegzhhhaQgegcgUgcIgPgXIgahLIAAgCQhSkHAUlzQALjLA6iwQAziZBNhuQAbgmBQghQBNgfBlgRQC4jAD4hfQEAhiETAaQDhAWDIBmQDABjCSCiQCGAjBqBSQA1ApAbAjQBtCwAjEcQAiEXguE5gEAvrAWgICxgIIAOhqQCcgoBQhNQBfhdgHiaQgIish5hbQh0hXi+AJQj/AMigDCICnCnQA6g/A9ggQA/ghBIgDQBLgEArAfQAsAeADA6QADBKhDAqQhJAtieAOIgJAJgEAvGAc/IEYgOIgNkUIkYANgEAoJAOzIj3AMIlQIuIgaodIj+AMIAsOeID3gLIFQotIAaIcID+gMgAB2zqQB3gFBJhJQBJhJANh9IibgVQgHAagoAQQglAPgyADQgzACgmgLQgogNgKgZIiYAjQAYB7BQBCQBPBCB3gGgAIhymIj3AMIlPIuIgZodIj+AMIArOfID4gMIFPosIAZIbID+gMgAAEQsIswAmIALDhIETgNIAhK+IEKgNIghq9IESgNgAGoWNIgJizIC9gIQA1gDAeAYQAaAVACAlQACAqgaAaQgcAcg2ADgACTQlIAsOfIH6gYQChgIBZhHQBahIgGh2QgEheg0g4Qgvg0hZgXQCPhHgGiRQgFhshYg6QhWg6iOAHgAShOOIEUgNIgLjqIkUANgATYeSIEHgMIgsufIkHANgEAhdANvQB3gGBKhJQBJhIAMh+IibgUQgfB1hkAFQhkAEgqhxIiZAjQAYB7BQBCQBQBBB3gFgAonxyIj3AMIlQIuIgaodIj+AMIAsOeID3gLIFQotIAZIcID+gMgEgl7gB5IEHgMIgKjfIBxiIIEIFWIE3gPImaoQIFDmNIkvAOIk6GMIgRl8IkHAMgEgqRgQMInmAWQiyAJhgBaQhdBXAGCOQAFBoA4BFQA0A/BeAfIjdFgIEwgOIC2kzICOgHIAOEqIEGgNgEgw1gJBQhJAEgpgcQgrgdgDg3QgCg5AnggQAmggBIgEIC0gIIALDpgAG4bqIgIi4IDIgJQBAgDAiAZQAfAWACAoQACArgcAaQgeAbg7ADg");
	this.shape_2.setTransform(398.2,243.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D31B21").s().p("AiFBsQgUgFgQgRQgQgPgGgVQgFgVAGgWQAGgUAPgQQAMgMAUgKQAMgGAZgJQA3gUAcgIQAugNAngCQA+gCAiAcQAQAPAIAUQAJAWgEAVQgDAUgOASQgPARgVAGQgNAEgTAAIghgBQgrABgyAVIg5AXQgUAGgSAAQgKAAgKgCg");
	this.shape_3.setTransform(411.1,83.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Слой_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.2)").ss(83,1,1).p("EA2zgF/IABgCQgFAngBABQgKAxhPArQhiA3ifAMQiyEHkeCLQkoCPlIgfQipgQicg/QiXg8iBhkQhsgShkghQiegzhhhaQgegcgUgcIgPgXIgahLIAAgCQhSkHAUlzQALjLA6iwQAziZBNhuQAbgmBQghQBNgfBlgRQC4jAD4hfQEAhiETAaQDhAWDIBmQDABjCSCiQCGAjBqBSQA1ApAbAjQBtCwAjEcQAiEXguE5gEAvrAWgICxgIIAOhqQCcgoBQhNQBfhdgHiaQgIish5hbQh0hXi+AJQj/AMigDCICnCnQA6g/A9ggQA/ghBIgDQBLgEArAfQAsAeADA6QADBKhDAqQhJAtieAOIgJAJgEAvGAc/IEYgOIgNkUIkYANgEAoJAOzIj3AMIlQIuIgaodIj+AMIAsOeID3gLIFQotIAaIcID+gMgAB2zqQB3gFBJhJQBJhJANh9IibgVQgHAagoAQQglAPgyADQgzACgmgLQgogNgKgZIiYAjQAYB7BQBCQBPBCB3gGgAIhymIj3AMIlPIuIgZodIj+AMIArOfID4gMIFPosIAZIbID+gMgAAEQsIswAmIALDhIETgNIAhK+IEKgNIghq9IESgNgAGoWNIgJizIC9gIQA1gDAeAYQAaAVACAlQACAqgaAaQgcAcg2ADgACTQlIAsOfIH6gYQChgIBZhHQBahIgGh2QgEheg0g4Qgvg0hZgXQCPhHgGiRQgFhshYg6QhWg6iOAHgAShOOIEUgNIgLjqIkUANgATYeSIEHgMIgsufIkHANgEAhdANvQB3gGBKhJQBJhIAMh+IibgUQgfB1hkAFQhkAEgqhxIiZAjQAYB7BQBCQBQBBB3gFgAonxyIj3AMIlQIuIgaodIj+AMIAsOeID3gLIFQotIAZIcID+gMgEgl7gB5IEHgMIgKjfIBxiIIEIFWIE3gPImaoQIFDmNIkvAOIk6GMIgRl8IkHAMgEgw1gJBQhJAEgpgcQgrgdgDg3QgCg5AnggQAmggBIgEIC0gIIALDpgEgqRgQMInmAWQiyAJhgBaQhdBXAGCOQAFBoA4BFQA0A/BeAfIjdFgIEwgOIC2kzICOgHIAOEqIEGgNgAG4bqIgIi4IDIgJQBAgDAiAZQAfAWACAoQACArgcAaQgeAbg7ADg");
	this.shape_4.setTransform(393.2,248.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-5,0,801.3,491.9), null);


(lib.out = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// salt
	this.instance = new lib.salt();
	this.instance.parent = this;
	this.instance.setTransform(0,-186,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:-216},89).wait(1));

	// Слой_6
	this.instance_1 = new lib.img8_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.3,-186.9,1,1,40,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,regY:0,scaleX:0.83,scaleY:0.83,rotation:0,x:4.3,y:-236.9},89).wait(1));

	// img5
	this.instance_2 = new lib.img5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-272.5,1,1,35.8,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,scaleX:0.8,scaleY:0.8,rotation:6,y:-337.5},89).wait(1));

	// img4
	this.instance_3 = new lib.img4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.5,-232.1,1,1,30,0,0,-0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.2,regY:-0.2,scaleX:0.95,scaleY:0.95,rotation:83,x:17.6,y:-287},89).wait(1));

	// chip2
	this.instance_4 = new lib.chip2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.1,-139.1,1,1,0,0,0,0.4,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.3,regY:-0.5,scaleX:0.85,scaleY:0.85,rotation:-41,x:1,y:-194.1},89).wait(1));

	// chip3
	this.instance_5 = new lib.chip3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(6.5,-104.1,1,1,50,0,0,0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.86,scaleY:0.86,rotation:34,y:-144.7},89).wait(1));

	// Слой_3
	this.instance_6 = new lib.img7_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.9,-70,1,1,10,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0,scaleX:0.83,scaleY:0.83,rotation:0,x:4.3,y:-102},89).wait(1));

	// paper
	this.instance_7 = new lib.img1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.1,scaleX:0.9,scaleY:0.9,x:0.5,y:-6.5},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-305,114,377.1);


(lib.centr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// salt
	this.instance = new lib.salt();
	this.instance.parent = this;
	this.instance.setTransform(-10,-72.7,0.794,0.793,0,0,0,-0.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.4,scaleX:1,scaleY:1,x:-10.1},89).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvdZKMAAAgyTIe7AAMAAAAyTgAjTxQQAeBABADIQAxCWAgBxQASA8AsDkIAqDWQASAVAPAMQAgAXgNgtIhCkfQg9kGgihxQgkh5hXiwQgeg8gSgeQgHgNgBAAQgBAAAKAWg");
	mask.setTransform(8.5,-91.5);

	// img5
	this.instance_1 = new lib.img5_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.6,-127.9,0.86,0.86,30);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:-7.9,y:-156.9},89).wait(1));

	// img4
	this.instance_2 = new lib.img4_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.3,-1.1,0.86,0.86,15,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,regY:0,rotation:0,x:15.8,y:-30.7},89).wait(1));

	// chip2
	this.instance_3 = new lib.chip2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.4,52.6,0.86,0.86,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:-1.4,y:30.6},89).wait(1));

	// chip3
	this.instance_4 = new lib.chip3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.6,-52.4,0.86,0.86,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0,x:1.2,y:-84.9},89).wait(1));

	// img3
	this.instance_5 = new lib.img3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.2,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-11.3,y:73.8},89).wait(1));

	// img6
	this.instance_6 = new lib.img6_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-8.4,-21.5,0.86,0.86,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// sh1
	this.instance_7 = new lib.sh1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-21.5,171);
	this.instance_7.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-202,113.3,400.1);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bgImg
	this.instance = new lib.bgImg_1();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({_off:false},0).to({alpha:1},10).wait(1));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.1,-168.7,0.02,0.02,-10,0,0,391.7,244.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).to({regX:393.9,regY:246,scaleX:0.34,scaleY:0.34,rotation:9,x:1},10,cjs.Ease.get(1)).wait(41));

	// box
	this.instance_2 = new lib.box1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-390);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).to({y:70},10,cjs.Ease.get(-1)).to({rotation:25,x:60,y:82},10,cjs.Ease.quadInOut).wait(51));

	// box
	this.instance_3 = new lib.box2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,70);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).wait(61));

	// box
	this.instance_4 = new lib.box3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,70);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(159).to({_off:false},0).to({rotation:-25,x:-59,y:82},10,cjs.Ease.quadInOut).wait(51));

	// cover
	this.instance_5 = new lib.cover();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1.3,70.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(159).to({_off:false},0).to({rotation:25,x:59.7,y:83.7},10,cjs.Ease.quadInOut).wait(51));

	// cover
	this.instance_6 = new lib.cover();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.3,70.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).to({rotation:-25,x:-59.8,y:82.2},10,cjs.Ease.quadInOut).wait(51));

	// cover
	this.instance_7 = new lib.cover();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1.3,-389.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(149).to({_off:false},0).to({y:70.7},10,cjs.Ease.get(-1)).wait(61));

	// bgImg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8._off = true;

	this.instance_9 = new lib.bgImg_1();
	this.instance_9.parent = this;
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).to({alpha:0},10).to({_off:true},70).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(139).to({_off:false},0).to({alpha:1},10).wait(71));

	// t2
	this.instance_10 = new lib.t2_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0.1,227.5,0.02,0.02);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(104).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.3,scaleY:0.3},10,cjs.Ease.get(1)).to({_off:true},36).wait(70));

	// t2
	this.instance_11 = new lib.t2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0.1,227.5,0.02,0.02);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.3,scaleY:0.3},10,cjs.Ease.get(1)).wait(25).to({regX:0,regY:0,scaleX:0.02,scaleY:0.02,alpha:0},10).to({_off:true},1).wait(115));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgLtAu4MAAAhdvIXbAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:75,y:0}).wait(91).to({graphics:null,x:0,y:0}).wait(70));

	// Слой_14
	this.instance_12 = new lib.centr("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(82.5,-36.5,1.15,1.15);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).to({scaleX:1,scaleY:1,x:79.5,y:-29.5,startPosition:89},90).to({_off:true},1).wait(70));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_59 = new cjs.Graphics().p("EgLtAu4MAAAhdvIXbAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_1_graphics_59,x:-75,y:0}).wait(91).to({graphics:null,x:0,y:0}).wait(70));

	// out
	this.instance_13 = new lib.out("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-76,127);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({_off:false},0).to({_off:true},91).wait(70));

	// bg
	this.instance_14 = new lib.bg();
	this.instance_14.parent = this;
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(49).to({_off:false},0).to({alpha:1},10).to({_off:true},91).wait(70));

	// t1
	this.instance_15 = new lib.t1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1.1,-218.7,0.02,0.02,-10,0,0,391.7,244.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:393.9,regY:246,scaleX:0.34,scaleY:0.34,rotation:9,x:1},10,cjs.Ease.get(1)).to({_off:true},50).wait(160));

	// chip1
	this.instance_16 = new lib.chip1_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(91.8,230,0.02,0.02,0,0,0,0,2.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).to({_off:true},40).wait(160));

	// art
	this.instance_17 = new lib.art_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(64,191.9,0.02,0.02,-129,0,0,-12.3,19.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(18).to({_off:false},0).to({regX:2.4,regY:2.8,scaleX:1.2,scaleY:1.2,x:21,y:194.5},5,cjs.Ease.get(1)).to({regX:2.3,scaleX:1,scaleY:1,x:28.1,y:195.2},3).to({_off:true},34).wait(160));

	// boxes
	this.instance_18 = new lib.boxes_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-3.7,26,0.2,0.2,-70,0,0,-0.5,1.8);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,alpha:1},15,cjs.Ease.get(1)).to({_off:true},45).wait(160));

	// bgImg
	this.instance_19 = new lib.bgImg_1();
	this.instance_19.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '7F77B9E854D54FCEAABC7B3750594D53',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/art.png", id:"art"},
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/boxes.png", id:"boxes"},
		{src:"images/chip1.png", id:"chip1"},
		{src:"images/chip2.png", id:"chip2"},
		{src:"images/chip3.png", id:"chip3"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.png", id:"img4"},
		{src:"images/img5.png", id:"img5"},
		{src:"images/img6.png", id:"img6"},
		{src:"images/img7.png", id:"img7"},
		{src:"images/img8.png", id:"img8"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/sh1.png", id:"sh1"}
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
an.compositions['7F77B9E854D54FCEAABC7B3750594D53'] = {
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