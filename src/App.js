import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './Register/RegisterForm';
function App() {
  const contanterStyle={
    width: 179,
    display:"flex",
    justifyContent:"space-evenly"
  }
  return (
    <div className="App">
      <div style={contanterStyle}>
        <LoginForm ></LoginForm>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
}

export default App;
