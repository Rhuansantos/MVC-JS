(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller2 = require('./mvc/controller');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function () {
	function App(_type) {
		_classCallCheck(this, App);

		// exec this function

		this.sendForm(_type);
	}
	// Singleton - allows create 1 professor and many students


	_createClass(App, [{
		key: 'sendForm',
		value: function sendForm(_type) {
			if (_type == 'professor') {
				var professorName = document.getElementById('professorName').value;
				var classRoonName = document.getElementById('className').value;
				//instance
				var controller = new _controller2.Controller(_type, professorName, classRoonName, null);
			}
			if (_type == 'student') {
				// form fields
				var studentName = document.getElementById('studentName').value;
				var studentAge = document.getElementById('studentAge').value;
				var grades = document.getElementById('grades').value;
				// instance
				var _controller = new _controller2.Controller(_type, studentName, null, studentAge, grades);
			}
		}
	}], [{
		key: 'getInstance',
		value: function getInstance(_type) {
			if (_type == 'professor') {
				if (!App._instance) {
					App._instance = new App();
					App._instance.sendForm(_type);
					return App._instance;
				} else {
					throw 'App was already created';
				}
			}
			if (_type == 'student') {
				App._instance = new App();
				App._instance.sendForm(_type);
			}
		}
	}]);

	return App;
}();

},{"./mvc/controller":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = exports.Student = function Student() {
	_classCallCheck(this, Student);

	this.name = '';
	this.age = '';
	this.grades = [];
	this.averge = 0;
};

var Professor = exports.Professor = function Professor() {
	_classCallCheck(this, Professor);

	this.professorName = '';
	this.className = '';
};

},{}],3:[function(require,module,exports){
'use strict';

var _App = require('./App');

window.addEventListener("load", function () {
	document.getElementById('addStudent').addEventListener('submit', function (e) {
		e.preventDefault();
		var myApp = _App.App.getInstance('student');
	});

	document.getElementById('addProfessor').addEventListener('submit', function (e) {
		e.preventDefault();
		var myApp2 = _App.App.getInstance('professor');
	});
});

},{"./App":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Controller = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require('./model');

var _view = require('./view');

var _classRoom = require('.././classRoom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = exports.Controller = function () {
	function Controller(_type, _name, _className, _age, _grades) {
		_classCallCheck(this, Controller);

		this.name = _name;
		this.age = _age;
		this.className = _className;
		this.grades = _grades;
		if (_type == 'professor') {
			this.Professor();
		}
		if (_type == 'student') {
			this.Student();
		}
	}

	_createClass(Controller, [{
		key: 'Student',
		value: function Student() {
			// model, get averge
			this.model = new _model.Model();
			var getGrades = this.model.processGrades(this.grades);
			var getAvg = this.model.processAvg(getGrades);

			// Student Obj
			var student = new _classRoom.Student();
			student.name = this.name;
			student.age = this.age;
			student.averge = getAvg;

			// init array
			var studentsArray = [];
			// push obj into array
			studentsArray.push(student);

			// print student
			var print = _view.View.printStudentProfile(studentsArray);
		}
	}, {
		key: 'Professor',
		value: function Professor() {

			// Professo obj
			var professor = new _classRoom.Professor();
			professor.className = this.name;
			professor.professorName = this.className;

			//init array
			var professorArray = [];
			// push obj into array
			professorArray.push(professor);

			var print = _view.View.printProfessorProfile(professorArray);
		}
	}]);

	return Controller;
}();

},{".././classRoom":2,"./model":5,"./view":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Model = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('../util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = exports.Model = function () {
	function Model() {
		_classCallCheck(this, Model);
	}

	_createClass(Model, [{
		key: 'processAvg',
		value: function processAvg(_data) {

			_data = _util.Util.calculateAvg(_data);

			return _data;
		}
	}, {
		key: 'processGrades',
		value: function processGrades(_data) {
			_data = _util.Util.splitArray(_data);

			return _data;
		}
	}]);

	return Model;
}();

},{"../util":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = exports.View = function () {
	function View() {
		_classCallCheck(this, View);
	}

	// print profile


	_createClass(View, null, [{
		key: 'printStudentProfile',
		value: function printStudentProfile(_obj) {

			_obj.forEach(function (el, i) {
				var studentProfile = '\n\t\t\t\t <h4>Name: ' + el.name + '</h4>\n\t\t\t\t <h4>Age: ' + el.age + '</h4>\n\t\t\t\t <h4>Avg Grades: ' + el.averge + '</h4>\n\t\t\t\t <hr/>\n\t\t\t';
				document.getElementById('studentProfile').insertAdjacentHTML('beforeend', studentProfile);
			});
		}
	}, {
		key: 'printProfessorProfile',
		value: function printProfessorProfile(_obj) {
			_obj.forEach(function (el, i) {
				var professorProfile = '\n\t\t\t\t <h4>Name: ' + el.professorName + '</h4>\n\t\t\t\t <h4>Age: ' + el.className + '</h4>\n\t\t\t\t <hr/>\n\t\t\t';
				document.getElementById('professorProfile').insertAdjacentHTML('beforeend', professorProfile);
			});
			document.getElementById('addStudent').style.display = "block";
		}
	}]);

	return View;
}();

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = exports.Util = function () {
	function Util() {
		_classCallCheck(this, Util);
	}

	_createClass(Util, null, [{
		key: 'calculateAvg',
		value: function calculateAvg(_n) {
			var total = 0;
			var avg = 0;
			_n.forEach(function (_el) {
				var toNumber = parseInt(_el);
				total += toNumber;
				avg = total / _n.length;
			});

			return Math.round(avg);
		}
	}, {
		key: 'splitArray',
		value: function splitArray(_n) {

			try {
				var sliptArray = _n.split(',');

				return sliptArray;
			} catch (error) {
				throw 'You should use an array of numbers for that function';
			}
		}
	}]);

	return Util;
}();

},{}]},{},[3]);
