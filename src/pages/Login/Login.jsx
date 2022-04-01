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
            <LoginForm changeFormType={changeFormType} handleSignupOrLogin={props.handleSignupOrLogin} />
          </>
          :
          <>
            <SignupForm changeFormType={changeFormType} handleSignupOrLogin={props.handleSignupOrLogin} />
          </>
      }
    </>
  )
}

export default LoginPage
