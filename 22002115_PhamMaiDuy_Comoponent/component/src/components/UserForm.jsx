// UserForm.js
import React from 'react';

const UserForm = ({ formData, setFormData, onSubmit }) => {
    // const [value, setValue] = useState("");
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={onSubmit} className="user-form">
        <div>
            <label >Name : {formData.name}</label>
        </div>
        <div>
            <label >Age : {formData.age}</label>
        </div>

      <div>
        <label>
          Your name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <label>
          Your Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <div>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;