webpackHotUpdate(0,{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _comment_box = __webpack_require__(185);

	var _signup = __webpack_require__(418);

	var _signup2 = _interopRequireDefault(_signup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ReactDOM.render(<CommentBox url='/api/comments' pollInterval={2000} />,document.getElementById('content'));
	_reactDom2.default.render(_react2.default.createElement(Signup, null), document.getElementById('content'));

/***/ }),

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

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(420);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(415)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(420, function() {
				var newContent = __webpack_require__(420);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(414)();
	// imports


	// module
	exports.push([module.id, "._2ByhgfQvwsmtGdDd_enBwO{\r\n    margin: 0 auto;\r\n    width: 256px;\r\n    height: 300px;\r\n    background-color: rgba(0, 140, 255, 0.47);\r\n    top:200px;\r\n    position: relative;\r\n    padding: 30px;\r\n}\r\n._2ByhgfQvwsmtGdDd_enBwO>h1{\r\n    text-align: center;\r\n    margin: 0;\r\n\r\n}", ""]);

	// exports
	exports.locals = {
		"loginForm": "_2ByhgfQvwsmtGdDd_enBwO"
	};

/***/ })

})