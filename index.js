import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <h1>Texas Floor Restoration</h1>
            <form id="appointment-form">
                <label htmlFor="appointment-name">Name:</label>
                <input type="text" id="appointment-name" name="appointment-name" required />

                <label htmlFor="appointment-email">Email:</label>
                <input type="email" id="appointment-email" name="appointment-email" required />

                <label htmlFor="appointment-phone">Phone:</label>
                <input type="tel" id="appointment-phone" name="appointment-phone" required />

                <label htmlFor="service">Service:</label>
                <select id="service" name="service" required>
                    <option value="cleaning">Cleaning</option>
                    <option value="restoration">Restoration</option>
                </select>

                <label htmlFor="date">Preferred Date:</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="time">Preferred Time:</label>
                <input type="time" id="time" name="time" required />

                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
}
import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'cleaning',
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Add code to communicate with the server
        // Uncomment and use the following code once the backend is set up:
        /*
        try {
          const response = await fetch('/api/appointments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          const result = await response.json();
          console.log(result);
          // Handle the response
        } catch (error) {
          console.error('Error:', error);
        }
        */
        console.log(formData);
    };

    return (
        <div className="container">
            <h1>Texas Floor Restoration</h1>
            <form id="appointment-form" onSubmit={handleSubmit}>
                <label htmlFor="appointment-name">Name:</label>
                <input type="text" id="appointment-name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="appointment-email">Email:</label>
                <input type="email" id="appointment-email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="appointment-phone">Phone:</label>
                <input type="tel" id="appointment-phone" name="phone" value={formData.phone} onChange={handleChange} required />

                <label htmlFor="service">Service:</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                    <option value="cleaning">Cleaning</option>
                    <option value="restoration">Restoration</option>
                </select>

                <label htmlFor="date">Preferred Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

                <label htmlFor="time">Preferred Time:</label>
                <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />

                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
}



export default App;
