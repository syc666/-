webpackHotUpdate(0,{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CommentBox = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _webpackZepto = __webpack_require__(186);

	var _webpackZepto2 = _interopRequireDefault(_webpackZepto);

	var _comment_list = __webpack_require__(187);

	var _comment_form = __webpack_require__(189);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentBox = function (_React$Component) {
	  _inherits(CommentBox, _React$Component);

	  function CommentBox(props) {
	    _classCallCheck(this, CommentBox);

	    var _this2 = _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).call(this, props));

	    _this2.state = { data: [] };
	    _this2.handleCommentSubmit = _this2.handleCommentSubmit.bind(_this2);
	    return _this2;
	  }

	  _createClass(CommentBox, [{
	    key: 'loadCommentsFromServer',
	    value: function loadCommentsFromServer() {
	      var _this = this;
	      _webpackZepto2.default.ajax({
	        url: _this.props.url,
	        dataType: 'json',
	        cache: false,
	        success: function success(data) {
	          _this.setState({ data: data });
	        },
	        error: function error(xhr, status, err) {
	          console.error(_this.props.url, status, err.toString());
	        }
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadCommentsFromServer();
	      // setInterval(this.loadCommentsFromServer.bind(this),this.props.pollInterval);
	    }
	  }, {
	    key: 'handleCommentSubmit',
	    value: function handleCommentSubmit(comment) {
	      // let comments = this.state.data;
	      comment.id = Date.now();
	      // let newComments = [...comments,...comment];
	      // this.setState({
	      // 	data:newComments
	      // });

	      var _this = this;

	      _webpackZepto2.default.ajax({
	        url: _this.props.url,
	        dataType: 'json',
	        type: 'POST',
	        data: comment,
	        success: function success(data) {
	          _this.setState({ data: data });
	          console.log(data);
	        },
	        error: function error(xhr, status, err) {
	          _this.setState({ data: comments });
	          console.error(_this.props.url, status, err.toString());
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'commentBox' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Comment3ss3s:'
	        ),
	        _react2.default.createElement(_comment_list.CommentList, { data: this.state.data }),
	        _react2.default.createElement(_comment_form.CommentForm, { onCommentSubmit: this.handleCommentSubmit })
	      );
	    }
	  }]);

	  return CommentBox;
	}(_react2.default.Component);

	exports.CommentBox = CommentBox;

/***/ })

})