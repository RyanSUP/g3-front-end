import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.css";
import * as authService from "../../services/authService";
import SignupForm from "../SignupForm/SignupForm";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
  });
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await authService.login(formData);
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-4 align-self-center">
          <div className='d-flex justify-content-center'>
            <img
              src={"logo.png"}
              style={{ height: "300px" }}
              alt="logo"
            />
          </div>
          <p>{message}</p>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className={styles.container}
          >
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="name@example.com"
                type="email"
                autoComplete="off"
                id="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
              <label for="floatingInput" htmlFor="email">
                Email address
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                autoComplete="off"
                id="password"
                value={formData.pw}
                name="pw"
                onChange={handleChange}
              />
              <label htmlFor="password" for="floatingPassword">
                Password
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="rememberPasswordCheck"
              />
              <label className="form-check-label">Remember password</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2">
                Log In
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-8 align-self-end bg-img">
          <h1 className="text-center brand-statement">
            Plan game nights with friends and family
          </h1>
          <img className="w-100" src="https://i.imgur.com/jKaZa6C.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
