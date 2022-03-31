import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'
import SignupForm from '../SignupForm/SignupForm'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const [message, setMessage] = useState()
  const navigate = useNavigate()

  const handleChange = e => {
    setMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
        <img className='' src={'logo.png'} style={{height:'300px'}}alt="logo"/>
        <h3 class="login-heading text-uppercase mb-4">Welcome to G3!</h3>
        <p>{message}</p>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className='form-floating mb-3'>
        <input
          className='form-control'
          placeholder="name@example.com"
          type="email"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <label for="floatingInput" htmlFor="email">Email address</label>
      </div>
      <div className='form-floating mb-3'>
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
        <label htmlFor="password" for="floatingPassword">Password</label>
      </div>
      <div className='form-check mb-3'> 
        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
        <label className="form-check-label">Remember password</label>
      </div>
      <div className="d-grid">
        <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2">Log In</button>
        {/* <LoginForm/> */}
      </div>
    </form>
      </div>
        <div className="col-md-8 bg-img">
          <img src="https://i.imgur.com/UERKWtX.jpg" width='1060' height='920px' alt="" />
        </div>
      </div>
    </div> 
  )
}

export default LoginForm

