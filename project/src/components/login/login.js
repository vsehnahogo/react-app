import React, { useState } from "react";
import "./login.css";
import eye from "../../media/active_eye.png"; 
import eye2 from "../../media/nonactive_eye.png"; 

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="wrapper">
        <form action={""}>
          <h1>Войти</h1>

          <div className="input-box">
            <input type="text" placeholder="Логин" required></input>
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              required
              id="123"
            ></input>
            <div onClick={togglePasswordVisibility}>
              <img
                src={showPassword ? eye : eye2}
                className="eye"
              />
            </div>
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox"></input> Запомнить меня{" "}
            </label>
          </div>

          <button type="submit" className="button">
            Войти
          </button>

          <div className="register-link">
            <p>
              Нет аккаунта? <a href="#">Создать аккаунт</a>
            </p>
            <a className='forgot' href="#">Забыли пароль?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
