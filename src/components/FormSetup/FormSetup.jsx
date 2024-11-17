import React, { useState } from 'react'

const FormSetup = () => {
    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        genter: "",
        country: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(fields, "fields");
    }

    const handleChange = (event) => {
        setFields(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" name='firstName' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">email</label>
                    <input type="emial" name='email' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Genter   </label>
                    <input type="radio" name='genter' value="male" onChange={handleChange} />
                    <label htmlFor="">Male   </label>
                    <input type="radio" name='genter' value="female" onChange={handleChange} />
                    <label htmlFor="">Female</label>
                </div>
                <div>
                    <label htmlFor="">Country</label>
                    <select name="country" id="" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="uae">UAE</option>
                        <option value="india">INDIA</option>
                        <option value="america">AMERICA</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormSetup