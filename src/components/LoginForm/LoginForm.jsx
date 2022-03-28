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
    <>
      <div className='container px-4 py-5 mx-auto'>
      <div className="card card0">
      <div className="d-flex flex-lg-row flex-column-reverse">
      <div className="card card1 ">
      <div className="row justify-content-center my-auto">
      <div className="col-md-8 col-10 my-5">
      
      <div className="row justify-content-center px-3 mb-3"> 
      <img src={'logo.png'} alt="logo"/>
      </div>
      <h1 className='mb-5 text-center heading'>Welcome to G3</h1>
      <p>{message}</p>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className='form-floating mb-3'>
          <input
            className='form-control inpt'
            placeholder='email@example.com'
            type="email"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <label for='floatingEmail' htmlFor="email">Email address</label>
        </div>
        <div className='form-floating'>
          
          <input
            className='form-control inpt'
            placeholder='Password'
            type="password"
            autoComplete="off"
            id="password"
            value={formData.pw}
            name="pw"
            onChange={handleChange}
          />
          <label for='floatingPassword' htmlFor="password">Password</label>
        </div>
        <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value=""id="rememberPasswordCheck"/>
                  <label className="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
        <div className='row justify-content-center my-3 px-3'>
          <button className='btn-block btn-color'>Log In to G3</button>
        </div>
        
        </form> 
        </div>
      
      </div>
      </div>
      <div className="card card2">
                <div className="my-auto mx-md-5 px-md-5 right">
                  <img src={'login.jpg'}alt="" className='img-fluid' />
                    </div>
      </div>
      
      </div>
    </div> 
    </div>   
    </>
    
    </>
  )
}

export default LoginForm

