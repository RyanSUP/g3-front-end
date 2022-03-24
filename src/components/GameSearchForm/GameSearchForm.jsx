/*-- helpers --*/
import { useState } from 'react';


const GameSearchForm = ({handleGameSearch}) => {
  const [formData, setFormData] = useState( {name: ''} )

  const handleChange = evt => {
    setFormData( {...formData, [evt.target.name]: evt.target.value} )
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    handleGameSearch(formData)
  }

  return (
  <>
    <div>
      <form>
        <input name="name" type="text" autoComplete="off" onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>
    </div>
  </>
  );
}

export default GameSearchForm;