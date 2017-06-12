(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('./controller');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function () {
	function App() {
		_classCallCheck(this, App);

		this.create();
	}

	_createClass(App, [{
		key: 'create',
		value: function create() {
			var studentName = document.getElementById('studentName').value;
			var studentAge = document.getElementById('studentAge').value;
			var grades = document.getElementById('grades').value;

			var controller = new _controller.Controller(studentName, studentAge, grades);
		}
	}], [{
		key: 'getInstance',
		value: function getInstance() {
			if (!App._instance) {
				App._instance = new App();
				return App._instance;
			} else {
				throw 'App was already created';
			}
		}
	}]);

	return App;
}();

},{"./controller":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Controller = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require('./model');

var _view = require('./view');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = exports.Controller = function () {
	function Controller(_name, _age, _grades) {
		_classCallCheck(this, Controller);

		this.name = _name;
		this.age = _age;
		this.grades = _grades;
		this.create();
	}

	_createClass(Controller, [{
		key: 'create',
		value: function create() {
			console.log(this.name, this.age, this.grades);
		}
	}]);

	return Controller;
}();

},{"./model":4,"./view":5}],3:[function(require,module,exports){
'use strict';

var _App = require('./App');

window.addEventListener("load", function () {
	document.getElementById('form').addEventListener('submit', function (e) {
		e.preventDefault();
		var myApp = _App.App.getInstance();
	});
});

},{"./App":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = exports.Model = function Model() {
	_classCallCheck(this, Model);

	console.log('loading');
};

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = exports.View = function View() {
	_classCallCheck(this, View);
};

},{}]},{},[3]);
