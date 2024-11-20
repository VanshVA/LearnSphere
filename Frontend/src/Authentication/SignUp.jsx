import React, { useState } from "react";
import axios from "axios";

function SignUpForm() {
    function handleClick(){
        console.log("hello")
    }
    const [message, setMessage] = useState("");

    const initialState = {
        studentName: "",
        studentEmail: "",
        studentPassword: "",
        role: "student", // Default role for signup
    };

    const [state, setState] = useState(initialState);

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/auth/signup",state);
            setMessage(response.data.message);

            // Clear the form after successful registration
            setState(initialState);
        } catch (error) {
            setMessage(error.response?.data?.message || "Signup failed. Please try again.");
        }
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social">
                        <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#" className="social">
                        <i className="ri-google-fill"></i>
                    </a>
                    <a href="#" className="social">
                        <i className="ri-linkedin-fill"></i>
                    </a>
                </div>
                <span>Or use your <strong>email</strong> for registration</span>
                <input
                    type="text"
                    name="studentName"
                    value={state.studentName}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="studentEmail"
                    value={state.studentEmail}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name="studentPassword"
                    value={state.studentPassword}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                <button>Sign Up</button>
                {message && <p>{message}</p>}
            </form>
          
        </div>
    );
}

export default SignUpForm;
