import React, { useState } from 'react'

const SimpleForm = () => {

    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    const [errors, seterrors] = useState({})

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return emailRegex.test(email);
      };
    
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setformData((prev) => ({
            ...prev,
            [name]: value
        }))       
    }

    const handleSubmit = () => {
        let err = {}

        if(validateEmail(formData.email) && validatePassword(formData.password)){
            console.log(formData)
            seterrors(err)
        }else{
            if(!formData.email) {
                err.email = "Email is required"
            }
            else if(!validateEmail(formData.email)){
                err.email = "Invalid Email"
            }
            if(!formData.password) {
                err.password = "Password is required"
            }
            else if(!validatePassword(formData.password)){
                err.password = "Weak Password"
            }
            seterrors(err)
        }
    }

  return (
    <div>
        <div className='flex justify-center items-center flex-col gap-10 mt-8'>
            <div className='flex gap-2 flex-col'>
                <label htmlFor="">Email</label>
                <input 
                 type="email"
                 onChange={handleChange}
                 className='border-2 border-gray-300 p-2 rounded-md'
                 name='email'
                 value={formData.email}  />
                 {errors.email && <p className='text-red-600'>{errors.email}</p>}
            </div>
            <div className='flex gap-2 flex-col'>
                <label htmlFor="">Password</label>
                <input 
                 type="password"
                 onChange={handleChange}
                 className='border-2 border-gray-300 p-2 rounded-md'
                 name='password'
                 value={formData.password}  />
                 {errors.password && <p className='text-red-600'>{errors.password}</p>}
            </div>
            <button className='border-2 border-gray-300 py-2 px-4 rounded-md bg-slate-900 text-gray-100' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default SimpleForm