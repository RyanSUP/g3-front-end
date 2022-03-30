import { useState, useRef, useEffect } from "react"
import * as groupService from '../../services/groupService'

const AddGathering= ({group, user, gathering}) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: gathering.name,
    location: gathering.location,
    date: '',
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleDelete = (groupId, gatheringId) => {
    groupService.deleteGathering(groupId, gatheringId)
  }
  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		groupService.updateGathering(formData, group._id, gathering._id)
  }

	return (
		<>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Name (required)
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
						Location
					</label>
					<input 
						type="text"
						className="form-control"
						name="location"
            value={formData.location}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label className="form-label">
						Date
					</label>
					<input 
						type="date"
						className="form-control"
						name="date"
            value={formData.date}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button className="btn btn-primary btn-fluid" type="submit" onClick={() => handleSubmit(group._id, gathering._id)}>save  changes</button>
      		<button onClick={()=> handleDelete(group._id, gathering._id)} >Delete</button>
				</div>
			</form>
		</>
	)
}

export default AddGathering