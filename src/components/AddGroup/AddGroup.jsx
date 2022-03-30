import { useState, useRef, useEffect } from "react"

const AddGroup = ({handleAddGroup}) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddGroup(formData)
  }

	return (
		<>
			<h3>Add Group</h3>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Group Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label className="form-label">
						Group Image
					</label>
					<input 
						type="text"
						className="form-control"
						name="image"
            value={formData.image}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Group
					</button>
				</div>
			</form>
		</>
	)
}

export default AddGroup