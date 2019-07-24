import React from 'react'
import { Form, Icon, Input, Button,message} from 'antd';
import './login.less'
import logo from '../../assets/images/logo.png'
class Login extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        //去除输入的相关数据
        const form = this.props.form
        const values = form.getFieldsValue()
        const username = form.getFieldValue('username')
        const password = form.getFieldValue('password')
        console.log(values,username,password);
        message.success('发送请求')
    };
    render(){
        const { getFieldDecorator } = this.props.form
        return(
            <div className='login'>
                <div className='login-header'>
                    <img src={logo} alt='logo'/>
                    <h1>外面的人进不去，里面的人出不来</h1>
                </div>
                <div className='login-content'>
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator('username',{
                                    rules:[]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    rules:[]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }
                            
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login)