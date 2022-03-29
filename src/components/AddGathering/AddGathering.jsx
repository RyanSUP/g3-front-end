import { useState, useRef, useEffect } from "react"
import * as groupService from '../../services/groupService'
import * as gatheringService from '../../services/gatheringService'

const AddGathering= ({group, user}) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date: '',
  })
  const [gatherings, setGatherings] = useState([])

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddGathering(formData)
  }
  const handleAddGathering = newGatheringData => {
    groupService.addGathering(group._id, newGatheringData)
    .then(newGathering => setGatherings([...gatherings, newGathering]))
    //    profileService.joinGroup(user.profile, group)
    // groupService.addMember(group._id, user.profile)
    // gatheringService.create(newGatheringData)
    //     .then(newGathering => setGatherings([...gatherings, newGathering]))
    // navigate('/Profiles')
  }
	return (
		<>
			<h3>Add Gathering</h3>
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
            value={formData.image}
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
						Add Gathering
					</button>
				</div>
			</form>
		</>
	)
}

export default AddGathering