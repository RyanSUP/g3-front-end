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
    <>
    
    <div class="mask d-flex align-items-center h-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>
      {/* //! FIX THIS MESSAGE SO IT ALWAYS TAKES UP SPACE, EVEN IF NO MESSAGE IS DISPLAYED */}
      <p>{message}</p>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className='form-outline mb-4'>
        
          <input
            className='form-control form-control-lg'
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="name" className='from-label'>Name</label>
        </div>
        <div className='form-outline mb-4'>
          <input
            className='form-control form-control-lg'
            type="email"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="email" className='form-label'>Email</label>
        </div>
        <div className='form-outline mb-4'>
          <input
            className='form-control form-control-lg'
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
          <label className='form-label' htmlFor="password">Password</label>
        </div>
        <div className='form-outline mb-4'>
          <input
            className='form-control form-control-lg'
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
          <label className='form-label' htmlFor="confirm">
            Confirm Password
          </label>
        </div>
        <div className='d-flex justify-content-center'>
          <button type='button' className='btn btn-sucess btn-block btn-lg text-body' disabled={isFormInvalid()} >
            Sign Up
          </button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SignupForm
