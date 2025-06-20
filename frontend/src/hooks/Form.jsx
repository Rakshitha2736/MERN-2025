import React from 'react'

const Form = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        department: ''
    })
    const handleChange=(e)=>{
             const {name, value} = e.target;
             setFormData((prev)=>({
                ...prev,
                [name]: value
             }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />
            <label htmlFor="">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br />
            <label htmlFor="">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} /><br />
            <label htmlFor="">Department:</label>
            <select id="department" name="department" value={formData.department} onChange={handleChange}><br />
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="CSE">CSE</option>
                <option value="CSD">CSD</option>
                </select><br />
                <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form