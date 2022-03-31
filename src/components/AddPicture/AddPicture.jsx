import { useState, useRef, useEffect } from "react"
import * as profilesService from '../../services/profileService'


const AddPicture = ({user, profile}) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    avatar: profile.avatar,
  })

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    profilesService.updatePicture(user.profile, formData)
  }

  return (
    <>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-fluid"
            disabled={!validForm}
          >
            Add
          </button>
        </div>
      </form>
    </>
  )
}

export default AddPicture