import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import { Link } from 'react-router-dom'

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
        <p className=''>Don't have an account? <button className="btn btn-white ml-2"href='#' onClick={changeFormType} >Register here</button></p>
      </>
    : 
      <>
        <SignupForm handleSignupOrLogin={props.handleSignupOrLogin} />
        <p>Already have an account? <button onClick={changeFormType} >Login</button></p>
    </>
  }
  </>
  )
}

export default LoginPage
