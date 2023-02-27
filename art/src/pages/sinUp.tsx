import React, { useState } from "react";
import { Button, Input, Alert, Space, Form } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";

interface SignUpState {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    errors: {
      [key: string]: string;
    };
  }
  
const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    let errors: { [key: string]: string } = {};
    let isValid = true;

    if (!username) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{8}$/.test(phone)) {
      errors.phone = "Phone number must be 8 digits";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Valid form submitted");
      // Add your form submission logic here
    }
  };

  return (
    <div>
      <Form form={form}>
        <Input
          type="text"
          placeholder="Full Name"
          prefix={<UserOutlined />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <Alert message={errors.username} type="error" />}
        <Input
          type="email"
          placeholder="Email"
          prefix={<MailOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <Alert message={errors.email} type="error" />}
        <Input
          type="text"
          placeholder="Phone Number"
          prefix={<PhoneOutlined />}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <Alert message={errors.phone} type="error" />}
        <Input
          type="password"
          placeholder="Password"
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <Alert message={errors.password} type="error" />}
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <Alert message={errors.confirmPassword} type="error" />
        )}
        <Space>
         

          <Button type="primary" htmlType="submit" onClick={(event)=>{handleSubmit(event)}}>
          Sign up
          </Button>
          
          </Space>
          </Form>
          </div>
          );
          }
          
          export default SignUp;
