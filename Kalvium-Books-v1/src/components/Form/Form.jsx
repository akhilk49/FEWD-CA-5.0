import { useState } from "react";
import './Form.css';

const Forms = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
        repeatPassword: false,
        registrationError: ''
    });

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear errors when user types
        setErrors(prev => ({ ...prev, [name]: false, registrationError: '' }));
    };

    const handleSubmit = (e) => {
        setRegistrationSuccess(false)
        e.preventDefault();
        let hasErrors = false;

        // Validate Name
        if (formData.name.length < 3 || formData.name.length > 30) {
            setErrors(prev => ({ ...prev, name: true, registrationError: 'Name should be between 3 and 30 characters' }));
            hasErrors = true;
        } else 
            setErrors(prev => ({ ...prev, name: false }));

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.match(emailRegex)) {
            setErrors(prev => ({ ...prev, email: true, registrationError: 'Enter a valid email address' }));
            hasErrors = true;
        } else 
            setErrors(prev => ({ ...prev, email: false }));

        // Validate Password
        const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*[0-9]).{10,}$/;
        if (formData.password.length < 10 || !formData.password.match(passwordRegex)) {
            setErrors(prev => ({ ...prev, password: true, registrationError: 'Password should be at least 10 characters with at least one special character' }));
            hasErrors = true;
        } else 
            setErrors(prev => ({ ...prev, password: false }));

        // Validate Repeat Password
        if (formData.password !== formData.repeatPassword) {
            setErrors(prev => ({ ...prev, repeatPassword: true, registrationError: 'Passwords do not match' }));
            hasErrors = true;
        } else 
            setErrors(prev => ({ ...prev, repeatPassword: false }));

        if (!hasErrors) 
            setRegistrationSuccess(true);
    };

    return (      
        <div className='form-container'>
            <div className='form-header'>
                <h1 className='form-title'>User Registration Form</h1>
                {registrationSuccess && <p className="success-message">Registration successful!</p>}
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='form-label'>
                        <p className="label-text">Name:</p>
                        <input 
                            className='form-input'
                            type="text"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            name="name"
                        />
                        {errors.name && <p className="error-message">{errors.registrationError}</p>}
                    </label>
                </div>

                <div className='form-group'>
                    <label className='form-label'>
                        <p className="label-text">Email:</p>
                        <input 
                            className='form-input'
                            type="text"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            name="email"
                        />
                        {errors.email && <p className="error-message">{errors.registrationError}</p>}
                    </label>
                </div>

                <div className='form-group'>
                    <label className='form-label'>
                        <p className="label-text">Password:</p>
                        <input 
                            className='form-input'
                            type="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            name="password"
                        />
                        {errors.password && <p className="error-message">{errors.registrationError}</p>}
                    </label>
                </div>

                <div className='form-group'>
                    <label className='form-label'>
                        <p className="label-text">Repeat Password:</p>
                        <input 
                            className='form-input'
                            type="password"
                            placeholder="Repeat your password"
                            onChange={handleChange}
                            name="repeatPassword"
                        />
                        {errors.repeatPassword && <p className="error-message">{errors.registrationError}</p>}
                    </label>
                </div>

                <button className='form-button' type="submit">Register</button>
            </form>
        </div>
    );
};

export default Forms;
