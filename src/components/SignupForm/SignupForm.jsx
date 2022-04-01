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
      <div className="row vh-100">
        <div className="col-md-4 align-self-center">
          <div className='d-flex justify-content-center'>
            <img
              src={"logo.png"}
              style={{ height: "300px" }}
              alt="logo"
            />
          </div>
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
          <div className='text-center'>
            <div >Already have an account? 
              <button className='btn btn-white ml-2 l-btn'onClick={props.changeFormType} ><strong>Login</strong></button>  
            </div>
          </div>
        </div>

        <div className="col-md-8 align-self-end bg-img">
          <h1 className="text-center brand-statement mt-5">
            Game night made easy
          </h1>
          <img className='w-100' src="https://i.imgur.com/jKaZa6C.png" />
        </div>
        
      </div>
    </div>
  )
}

export default SignupForm
