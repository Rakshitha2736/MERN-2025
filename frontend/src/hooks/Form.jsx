import React from 'react'
import axios from 'axios'

const Form = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    department:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
    const handleSubmit = async(e) => {
      e.preventDefault();
      await axios.post('http://localhost:5000/form', formData);
      console.log('Form submitted:', formData);
    }
    return (
    <div>
      <form onSubmit={handleSubmit}>    
        <label htmlFor="">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br /><br />
        <label htmlFor="">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br /><br />
        <label htmlFor="">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br /><br/>
        <label htmlFor="">Department:</label>
        <select name="department" value={formData.department} onChange={handleChange}>  
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            </select>
        <br /><br />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
