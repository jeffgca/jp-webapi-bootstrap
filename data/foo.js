
var pp = function(o) { return JSON.stringify(o,null,'  '); };

var Foo = {
	bar: function() {
		var args = [].slice.call(arguments);
		return pp(args);
	}
};

// attach to the real window.
unsafeWindow.Foo = Foo;

console.log(pp(Object.keys(unsafeWindow)));
