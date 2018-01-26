webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _comment_box = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./comment_box\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _comment = __webpack_require__(190);

	var _comment2 = _interopRequireDefault(_comment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_comment_box.CommentBox, { url: '/api/comments', pollInterval: 2000 }), document.getElementById('content'));

/***/ })
])