import React, { useState } from "react";
import { Button, Input, Alert, Space, Form } from "antd";

import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import styles from "../styles/SingUp.module.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../server/firebase/config"
import { Switch } from 'antd';
import axios from "axios";
import { useRouter } from 'next/router'
import {CloseOutlined } from "@ant-design/icons"
interface SignUpState {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    errors: {
      [key: string]: string;
    };
    event: {
      [key: string]: string;
    }
    age:{
      [key: string]: string;
    }
  }
  
const SignUp: React.FC = (props) => {
  const router = useRouter()

  const [form] = Form.useForm();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const[age,setAge]=useState("");
let know=false
  const onChange = (checked: boolean) => {
    know=checked
    console.log(know)
  };
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
    if(age<"18"){
      errors.age = "age must be over 18 ";
      isValid=false;
    }

    setErrors(errors);

    return isValid;
  };


  const handleSubmit = async(event:any,know:boolean) => {

    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const {user}= await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        if(!know){
          console.log("user")
        axios.post("http://localhost:3000/api/users/addUser",{
        userName:username,
        email: email,
        password: password,
        birthDate: age,
        phoneNumber: phone,
        }).then((res)=>{
          axios.get(`http://localhost:3000/api/users/getUser/${email}`).then((res)=>{
            localStorage.setItem("id",res.data.id)
            localStorage.setItem("email",res.data.email)
            router.push({
              pathname:'/MainPage',
              query:{"id":res.data.id,"type":know}

            })
        })
        })
      }
      else {
        console.log("artist")
        axios.post("http://localhost:3000/api/artists/addArtist",{
        name:username,
        email: email,
        password: password,
        phoneNumber: phone,
        birthDate: age,
        }).then((res)=>{
          console.log(res)
          axios.get(`http://localhost:3000/api/artists/getArtist/${email}`).then((res)=>{
            localStorage.setItem("id",res.data.id)
            localStorage.setItem("email",res.data.email)
            console.log(res)
            router.push({
              pathname:'/MainPage',
              query:{"id":res.data.id,"type":know}
            })
        })
        })
      }
      }
       catch (error) {
        console.log(error)
      }
      
      // Add your form submission logic here
    ;
  }
}
  return (
    <div className={styles.overlay}>
      <CloseOutlined className={styles.close} onClick={()=>{
        props.togglePopup()
      }}/>
      <Form form={form} className={styles.form} >
        <Input className={styles.input}
          type="text"
          placeholder="Full Name"
          prefix={<UserOutlined />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <Alert className={styles.alert} message={errors.username} type="error" />}
        <Input className={styles.input}

          type="email"
          placeholder="Email"
          prefix={<MailOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <Alert className={styles.alert} message={errors.email} type="error" />}
        <Input className={styles.input}

          type="text"
          placeholder="Phone Number"
          prefix={<PhoneOutlined />}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <Alert className={styles.alert} message={errors.phone} type="error" />}
        <Input className={styles.input}

          type="password"
          placeholder="Password"
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <Alert  className={styles.alert} message={errors.password} type="error" />}
        <Input className={styles.input}

          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && (
          <Alert className={styles.alert} message={errors.confirmPassword} type="error" />
        )}
        <Space>
        <Input 

          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <Alert className={styles.alert} message={errors.age} type="error" />}
        <div className={styles.switch}>
         <Space>
          User
        <Switch defaultChecked onChange={onChange} />
          Artiste
        </Space>
        </div>
        <br />
          <Button className={styles.btn} type="primary" htmlType="submit" onClick={(event)=>{handleSubmit(event,know )}}>
          Sign up
          </Button>
          
          </Space>
          </Form>
          </div>
          );
       }    
   export default SignUp;
