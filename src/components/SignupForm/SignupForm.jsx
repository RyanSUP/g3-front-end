import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'


const SignupForm = props => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    setMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      setMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <img className='' src={'logo.png'} style={{ height: '300px' }} alt="logo" />
          <h2 className="text-uppercase register-heading mb-4">Create an account</h2>
          <p>{message}</p>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className={styles.container}
          >
            <div className='form-floating mb-3'>
              <input
                className='form-control form-control-lg'
                placeholder='Your Name'
                type="text"
                autoComplete="off"
                id="name"
                value={name}
                name="name"
                onChange={handleChange}
              />
              <label for='floatingInput' htmlFor="name">Name</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                className='form-control form-control-lg'
                placeholder='name@example.com'
                type="email"
                autoComplete="off"
                id="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="email" for='floatingInput'>Email address</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                className='form-control form-control-lg'
                placeholder='Password'
                type="password"
                autoComplete="off"
                id="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
              <label for='floatingPassword' htmlFor="password">Password</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                className='form-control form-control-lg'
                placeholder='Confirm Password'
                type="password"
                autoComplete="off"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={handleChange}
              />
              <label for='floatingPassword' htmlFor="confirm">Confirm Password</label>
            </div>
            <div className='d-grid'>
              {/* <SignupForm/> */}
              <button className='btn btn-lg btn-primary btn-register text-uppercase fw-bold mb-2' onClick={handleSubmit} disabled={isFormInvalid()} >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-8 bg-image">
          <img className='fluid' src="https://i.imgur.com/jKaZa6C.png" width='1060' height='920px' alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignupForm
