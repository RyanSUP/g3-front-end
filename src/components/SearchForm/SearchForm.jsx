import { useState } from 'react';

const SearchForm = ({handleGameSearch}) => {
  const [formData, setFormData] = useState({query: ''})
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  //if we include drop down suggestions will likely go in handleChange
  const handleSubmit = evt => {
    evt.preventDefault()
    handleGameSearch(formData)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            name="query" 
            type="text"
            autoComplete="off"
            value={formData.query} 
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;