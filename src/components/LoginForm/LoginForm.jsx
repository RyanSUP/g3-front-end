import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

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
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 login-section-wrapper">
          <div className="brand-wrapper">
            {/* Log img goes here */}
          </div>
          <div class="login-wrapper my-auto">
          <h1 className='login-text'>Log in</h1>
          <p>{message}</p>
            <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
            >
            <div className='form-group'>
              <label for='email' htmlFor="email">Email</label>
              <input
                className='form-control'
                placeholder='email@example.com'
                type="email"
                autoComplete="off"
                id="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className='form-group mb-4'>
              <label for='password' htmlFor="password">Password</label>
              <input
                className='form-control'
                placeholder='enter your password'
                type="password"
                autoComplete="off"
                id="password"
                value={formData.pw}
                name="pw"
                onChange={handleChange}
              />
            </div>
            <button id='login' className='btn btn-block login-btn' value='Login'>Log In</button>
            </form>
          </div>
        </div> 
        <div class="col-sm-6 px-0 d-none d-sm-block" style={{background: 'orange'}}>
          <img src={'/public/login.jpg'} alt="login image" className="login-img"/>
        </div>
      </div>      
    </div>
    </>
  )
}

export default LoginForm
