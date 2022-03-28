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
      navigate('/myProfile')
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <>
      {/* <h1>Log In</h1> */}
      <p>{message}</p>
      <div className='d-lg-flex half'>
        <div className='contents order-2 order-md-1'>
          <div className='container'>
            <div className='row align-items-center justify-content-center'>
              <div class='col-md-7'>
              <h3>'Login to G3'</h3>
              <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className={styles.container}
              >
        <div className='form-group first'>
        <label for='email' htmlFor="email" className='form-control' placeholder='email@gmail.com'></label>
        <input
            type="text"
            className='form-control'
            autoComplete="off"
            placeholder='name@example.com'
            id="floatingInput"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          </div>
        
          <div className='form-group last mb-3'>
          <label for='password' htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              className='form-control'
              autoComplete="off"
              id="floatingPassword"
              placeholder='Password'
              value={formData.pw}
              name="pw"
              onChange={handleChange}
              />
              </div>
                <div>
                  <button className='btn btn-block btn-primary'>Log In</button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
