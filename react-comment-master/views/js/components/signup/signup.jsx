import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import styles from './signup.css';
import RaisedButton from 'material-ui/RaisedButton';

const user = [
    '默认用户一',

];

const password = [
    '默认密码一',

];
const style = {
    left: '50%',
    marginLeft: -44,
    position: 'relative',
}
class Form extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <form method="post"  action='/api/signup'>
                    <div className={styles["loginForm"]}>
                        <h1>注册</h1>
                        <AutoComplete
                            floatingLabelText="用户名"
                            filter={AutoComplete.caseInsensitiveFilter}
                            dataSource={user}
                        />
                        <br />
                        <AutoComplete
                            floatingLabelText="密码"
                            filter={AutoComplete.fuzzyFilter}
                            dataSource={password}
                            maxSearchResults={5}
                            type="password"
                        />
                        <AutoComplete
                            floatingLabelText="确认密码"
                            filter={AutoComplete.fuzzyFilter}
                            dataSource={password}
                            maxSearchResults={5}
                            type="password"
                        />
                        <div >
                            <label>性别</label>
                            <select  name="gender">
                                <option value="m">男</option>
                                <option value="f">女</option>
                                <option value="x">保密</option>
                            </select>
                        </div>
                       
                        <div >
                            <label>个人简介</label>
                            <textarea name="bio" rows="5"></textarea>
                        </div>
                        <RaisedButton label="确认" style={style} type='submit'/>
                    </div>
                </form>
            </MuiThemeProvider>
        )

    }
}

export default class Signup extends Component {
    render() {
        return (
            <Form />
        )

    }
}