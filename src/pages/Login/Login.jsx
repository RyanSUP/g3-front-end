import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import { Link } from 'react-router-dom'
import { login, signup } from '../../services/authService'

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
        <div className='col-md-4 text-center'>
          <p>Don't have an account? <button className="btn btn-white ml-2 text-center"href='#' onClick={changeFormType} >Register here</button></p>
      </div>
      </>
    : 
      <>
        <SignupForm handleSignupOrLogin={props.handleSignupOrLogin} />
        <div className='col-md-4 text-center'>
        <p className='align-self-center'>Already have an account? <button className='btn btn-white ml-2' href='#' onClick={changeFormType} >Login</button></p>
        </div>
    </>
  }
  </>
  )
}

export default LoginPage
