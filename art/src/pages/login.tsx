import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../server/firebase/config"
interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [emailTest, setEmailTest] = useState(false);
  const [passwordTest, setPasswordTest] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const validateEmail = (rule: any, value: string) => {
    if (value && !/^\S+@\S+\.\S+$/.test(value)) {
      return Promise.reject('Invalid email address');
    } else {
      return Promise.resolve();
    }
  };

  const validatePassword = (rule: any, value: string) => {
    if (value && value.length < 5) {
      return Promise.reject('Password is too short');
    } else {
      return Promise.resolve();
    }
  };

  const handleSubmit = async (values: FormValues) => {
    console.log('Success:', values);
    if(values){
      try {
        const{email,password}=values
        const result=await signInWithEmailAndPassword(auth ,email,
          password).then((res)=>{
            console.log(res)
          })
      } catch (error) {
        
        setInvalidCredentials(true)
        return false
      }
      
    }
  };

  const handleFinishFailed = (error: any) => {
    console.log('Error:', error);
    if (error.errorFields.some((field: any) => field.name[0] === 'email')) {
      setEmailTest(true);
    } else {
      setEmailTest(false);
    }
    if (error.errorFields.some((field: any) => field.name[0] === 'password')) {
      setPasswordTest(true);
    } else {
      setPasswordTest(false);
    }
    setInvalidCredentials(false);
  };

  return (
    <>
      <Form
        form={form}
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
        onFinishFailed={handleFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email' },
            { validator: validateEmail },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your password' },
            { validator: validatePassword },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {emailTest && (
          <Alert message="Invalid email address" type="error" showIcon />
        )}

        {passwordTest && (
          <Alert message="Password is too short" type="error" showIcon />
        )}

        {invalidCredentials && (
          <Alert message="Invalid email or password" type="error" showIcon />
        )}
      </Form>
    </>
  );
};

export default Login;
