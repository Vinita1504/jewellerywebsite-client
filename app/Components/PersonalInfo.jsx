import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaVenusMars, FaEdit, FaSave } from 'react-icons/fa';

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+91 9876543210',
    email: 'john.doe@example.com',
    dateOfBirth: '1990-01-01',
    gender: 'male'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsEditing(false);
  };

  const inputFields = [
    { name: 'firstName', label: 'First Name', icon: FaUser, type: 'text' },
    { name: 'lastName', label: 'Last Name', icon: FaUser, type: 'text' },
    { name: 'phone', label: 'Phone Number', icon: FaPhone, type: 'tel' },
    { name: 'email', label: 'Email', icon: FaEnvelope, type: 'email' },
    { name: 'dateOfBirth', label: 'Date of Birth', icon: FaCalendarAlt, type: 'date' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto p-8 bg-surface rounded-xl shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-onSurface">Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputFields.map((field) => (
            <div key={field.name} className="relative">
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-500 mb-1">{field.label}</label>
              <div className="relative">
                <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-onPrimary" />
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="pl-10 w-full p-3 bg-white text-onSurface rounded-lg outline-none focus:ring-2 focus:ring-accent transition duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-500 mb-1">Gender</label>
          <div className="relative">
            <FaVenusMars className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={!isEditing}
              className="pl-10 w-full p-3 bg-white text-onSurface rounded-lg  outline-none focus:ring-2 focus:ring-accent transition duration-300 ease-in-out"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type={isEditing ? "submit" : "button"}
            onClick={() => !isEditing && setIsEditing(true)}
            className={`px-6 py-3 rounded-full text-onPrimary font-semibold flex items-center space-x-2 ${
              isEditing ? 'bg-accent hover:bg-opacity-90' : 'bg-primary hover:bg-opacity-90'
            } transition duration-300 ease-in-out`}
          >
            {isEditing ? (
              <>
                <FaSave className="text-lg" />
                <span>Save Changes</span>
              </>
            ) : (
              <>
                <FaEdit className="text-lg" />
                <span>Edit Profile</span>
              </>
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default PersonalInfo;
