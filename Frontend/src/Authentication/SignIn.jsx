import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom'
function SignInForm() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [token, setToken] = useState("");
    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/auth/signin", state);
            setMessage(response.data.message);
            setToken(response.data.token); // Save token for further API requests
            localStorage.setItem("token", response.data.token); 
                if (response.data.role == "admin") {
                    navigate("/admin-dashboard");
                } else if (response.data.role == "teacher") {
                    navigate("/teacher-dashboard");
                } else {
                    navigate("/student-dashboard");
                }
        } catch (error) {
            setMessage(error.response?.data?.message || "Signin failed. Please try again.");
        }
        console.log(message)
    };

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Sign in</h1>
                <div className="social-container">
                    <Link to={"/"} className="social">
                        <i className="ri-facebook-fill"></i>
                    </Link>
                    <Link to={"/"} className="social">
                        <i className="ri-google-fill"></i>
                    </Link>
                    <Link to={"/"} className="social">
                        <i className="ri-linkedin-fill"></i>
                    </Link>
                </div>
                <span>or use your account</span>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                <Link to={"/"}>Forgot your password?</Link>
                <button>Sign In</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default SignInForm;
