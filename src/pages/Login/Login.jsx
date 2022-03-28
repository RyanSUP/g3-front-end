import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import { Link } from 'react-router-dom'

const LoginPage = props => {
  const [formType, setFormType] = useState(props.formType)
  
  const changeFormType = () => setFormType((formType === 'login') ? 'signup' : 'login')

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'>
          {
            (formType === 'login') 
            ? 
              <>
                <LoginForm handleSignupOrLogin={props.handleSignupOrLogin} />
                <p className='login-wrapper-footer-text'>Don't have an account? <a href='#' className='text-reset' onClick={changeFormType} >Register here</a></p>
              </>
            : 
              <>
                <SignupForm handleSignupOrLogin={props.handleSignupOrLogin} />
                <p>Already have an account? <button onClick={changeFormType} >Login</button></p>
              </>
          }
          {/* // ! STYLE SIGNUP BUTTON TO BE JUST BLUE TEXT */}
        </div>
        {/* <div className='col-8'>
          right content area
          <div className="row">
            <div className="col">
              right content area a
            </div>
          </div>
          <div className="row">
            <div className="col">
              right content area b
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>

  )
}

export default LoginPage
