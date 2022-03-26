/*-- helpers --*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const GameSearchForm = ({ handleGameSearch }) => {
  const [formData, setFormData] = useState({ name: '' })
  const navigate = useNavigate()
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleGameSearch(formData)
      .then(navigate('/gameSearch'))
  }

  return (
    <>
      <div>
        <form>
          <input name="name" type="text" autoComplete="off" onChange={handleChange} />
          <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button>
        </form>
      </div>
    </>
  );
}

export default GameSearchForm;