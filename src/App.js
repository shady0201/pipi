import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './Register/RegisterForm';
function App() {

  let [isShowLogin,setShowLogin] = useState(false);
  let [bshowResgister,setShowResgister] = useState(false);

  let LoginComponent = ()=>{
    if(isShowLogin){
      return <LoginForm bShow = {isShowLogin}></LoginForm>
    }else{
      return ``;
    }
  }

  let RegisterComponent = ()=>{
    if(bshowResgister){
      return <RegisterForm bShow = {isShowLogin}></RegisterForm>
    }else{
      return ``;
    }
  }

  return (
    <div className="App">
      <Button variant="primary" onClick={()=>{setShowLogin(true)}}>LoginForm</Button>
      <Button variant="primary" onClick={()=>{setShowResgister(true)}}>Register</Button>
      <LoginComponent ></LoginComponent>
      <RegisterComponent></RegisterComponent>
    </div>
  );
}

export default App;
