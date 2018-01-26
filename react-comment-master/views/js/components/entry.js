import React from 'react';
import ReactDOM from 'react-dom';
import {CommentBox} from './comment_box';
import Signup from './signup/signup.jsx';
// ReactDOM.render(<CommentBox url='/api/comments' pollInterval={2000} />,document.getElementById('content'));
ReactDOM.render(<Signup />,document.getElementById('content'));