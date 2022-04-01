import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'

const LoginPage = props => {
  const [formType, setFormType] = useState(props.formType)

  const changeFormType = () => setFormType((formType === 'login') ? 'signup' : 'login')

  return (
    <>
      {
        (formType === 'login')
          ?
          <>
            <LoginForm handleSignupOrLogin={props.handleSignupOrLogin} />
            <div className='col-md-6 text-center position-absolute top-0'>
              <div>Don't have an account? <button className="btn btn-white ml-2 text-center r-btn" href='#' onClick={changeFormType} ><strong>Register here</strong></button></div>
            </div>
          </>
          :
          <>
            <SignupForm handleSignupOrLogin={props.handleSignupOrLogin} />
            <div className='col-md-6 text-center position-absolute top-0'>
              <div className='align-self-center'>Already have an account? <button className='btn btn-white ml-2 l-btn' href='#' onClick={changeFormType} ><strong>Login</strong></button></div>
            </div>
          </>
      }
    </>
  )
}

export default LoginPage
