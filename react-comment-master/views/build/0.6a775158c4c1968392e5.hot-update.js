webpackHotUpdate(0,{

/***/ 418:
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

	var _signup = __webpack_require__(419);

	var _signup2 = _interopRequireDefault(_signup);

	var _RaisedButton = __webpack_require__(416);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var user = ['默认用户一'];

	var password = ['默认密码一'];
	var style = {
	    left: '50%',
	    marginLeft: -44,
	    position: 'relative'
	};

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
	                    'form',
	                    { method: 'post', action: '/api/signup' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _signup2.default["loginForm"] },
	                        _react2.default.createElement(
	                            'h1',
	                            null,
	                            '\u6CE8\u518C'
	                        ),
	                        _react2.default.createElement(_AutoComplete2.default, {
	                            floatingLabelText: '\u7528\u6237\u540D',
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
	                        }),
	                        _react2.default.createElement(_AutoComplete2.default, {
	                            floatingLabelText: '\u786E\u8BA4\u5BC6\u7801',
	                            filter: _AutoComplete2.default.fuzzyFilter,
	                            dataSource: password,
	                            maxSearchResults: 5,
	                            type: 'password'
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            _react2.default.createElement(
	                                'label',
	                                null,
	                                '\u6027\u522B'
	                            ),
	                            _react2.default.createElement(
	                                'select',
	                                { name: 'gender' },
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: 'm' },
	                                    '\u7537'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: 'f' },
	                                    '\u5973'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: 'x' },
	                                    '\u4FDD\u5BC6'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            _react2.default.createElement(
	                                'label',
	                                null,
	                                '\u4E2A\u4EBA\u7B80\u4ECB'
	                            ),
	                            _react2.default.createElement('textarea', { name: 'bio', rows: '5' })
	                        ),
	                        _react2.default.createElement(_RaisedButton2.default, { label: '\u786E\u8BA4', style: style, type: 'submit' })
	                    )
	                )
	            );
	        }
	    }]);

	    return Form;
	}(_react.Component);

	var Signup = function (_Component2) {
	    _inherits(Signup, _Component2);

	    function Signup() {
	        _classCallCheck(this, Signup);

	        return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).apply(this, arguments));
	    }

	    _createClass(Signup, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(Form, null);
	        }
	    }]);

	    return Signup;
	}(_react.Component);

	exports.default = Signup;

/***/ })

})