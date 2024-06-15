import React, { useEffect, useState } from "react";
import authService from "../../api/authService";

function Register() {
  // State to store input values and registration status
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    interests: "",
  });
  const [message, setMessage] = useState(null);

  // Function to handle form input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


useEffect(()=>{
  console.log(formData.username)
})

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);
    try {
      const data = await authService.register({
        fullName: formData.fullName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        interests: formData.interests,
      });
      console.log("Registration successful:", data);
      setMessage("Registration successful!");
    } catch (error) {
      console.log("Registration failed:", error);
      setMessage("Registration failed: " + (error.message || "Unknown error"));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-2">
          <div className="card">
            <h5 className="card-header">User Register</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="interests" className="form-label">
                    Interests
                  </label>
                  <textarea
                    className="form-control"
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                  ></textarea>
                  <div className="form-text">
                    Java, Python, JavaScript, etc...
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                {message && (
                  <div
                    className={
                      message.includes("successful")
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
