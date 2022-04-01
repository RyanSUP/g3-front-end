import { useState, useRef, useEffect } from "react"


const AddGathering = ({ handleAddGathering }) => {
	const formElement = useRef()
	const [validForm, setValidForm] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		location: '',
		date: '',
	})

	useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

	const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

	const handleSubmit = evt => {
		evt.preventDefault()
		handleAddGathering(formData)
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
						className="btn greenBtn"
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