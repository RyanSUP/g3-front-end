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
    <div class="container-fluid ps-md-0">
  <div class="row g-0">
    <div class="row">
    <div class="col-md-12 col-12 mx-auto">
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
              <h3 class="login-heading mb-4">Welcome back!</h3>
              {/* sign in form */}
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

      <div>
        <button className={styles.button}>Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default LoginForm

