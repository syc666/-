webpackHotUpdate(0,{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _MuiThemeProvider = __webpack_require__(191);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _AutoComplete = __webpack_require__(337);

	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

	var _loginUp = __webpack_require__(412);

	var _loginUp2 = _interopRequireDefault(_loginUp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var user = ['默认用户一'];

	var password = ['默认密码一'];

	var Form = function (_Component) {
	    _inherits(Form, _Component);

	    function Form() {
	        _classCallCheck(this, Form);

	        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	    }

	    _createClass(Form, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _MuiThemeProvider2.default,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: _loginUp2.default["loginForm"] },
	                    _react2.default.createElement(_AutoComplete2.default, {
	                        floatingLabelText: '\u7528s\u6237\u540D',
	                        filter: _AutoComplete2.default.caseInsensitiveFilter,
	                        dataSource: user
	                    }),
	                    _react2.default.createElement('br', null),
	                    _react2.default.createElement(_AutoComplete2.default, {
	                        floatingLabelText: '\u5BC6\u7801',
	                        filter: _AutoComplete2.default.fuzzyFilter,
	                        dataSource: password,
	                        maxSearchResults: 5,
	                        type: 'password'
	                    })
	                )
	            );
	        }
	    }]);

	    return Form;
	}(_react.Component);

	var LoginUp = function (_Component2) {
	    _inherits(LoginUp, _Component2);

	    function LoginUp() {
	        _classCallCheck(this, LoginUp);

	        return _possibleConstructorReturn(this, (LoginUp.__proto__ || Object.getPrototypeOf(LoginUp)).apply(this, arguments));
	    }

	    _createClass(LoginUp, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Form, null);
	        }
	    }]);

	    return LoginUp;
	}(_react.Component);

	exports.default = LoginUp;

/***/ })

})