import { useState } from 'react';
import { signUp } from './../services/authentication';

const SignUpView = () => {
  const [inputValues, setInputValues] = useState({
    username: '',
    fName: '',
    lName: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    try {
      const response = await signUp(inputValues);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //missing inputs for all the fields

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="input-username">Username</label>
        <input
          id="input-username"
          type="text"
          placeholder="Username"
          name="username"
          value={inputValues.username}
          onChange={handleInputChange}
        />
        <label htmlFor="input-fName">First Name</label>
        <input
          id="input-fName"
          type="text"
          placeholder="First Name"
          name="fName"
          value={inputValues.fName}
          onChange={handleInputChange}
        />
        <label htmlFor="input-lName">Last name</label>
        <input
          id="input-lName"
          type="text"
          placeholder="Last name"
          name="lName"
          value={inputValues.lName}
          onChange={handleInputChange}
        />
        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          placeholder="Your Email"
          name="email"
          value={inputValues.email}
          onChange={handleInputChange}
        />
        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          placeholder="Your Password"
          name="password"
          value={inputValues.password}
          onChange={handleInputChange}
        />
        <label htmlFor="input-phone">Phone Number</label>
        <input
          id="input-phone"
          type="text"
          placeholder="Your Phone Number"
          name="phoneNumber"
          value={inputValues.phoneNumber}
          onChange={handleInputChange}
        />
        <label htmlFor="input-role">Role</label>
        <select
          id="input-role"
          name="role"
          value={inputValues.role}
          onChange={handleInputChange}
        >
          <option value="">Select a role</option>
          <option value="tenant">Tenant</option>
          <option value="landlord">Landlord</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpView;