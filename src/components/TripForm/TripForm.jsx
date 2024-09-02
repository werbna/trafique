import { useState } from 'react';

const TripForm = (props) => {
  const [formData, setFormData] = useState({
    destination: '',
    type: 'Vacation',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddTrip(formData);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="destination-input">Destination</label>
        <input
          required
          type="text"
          name="destination"
          id="destination-input"
          value={formData.destination}
          onChange={handleChange}
        />

        <label htmlFor="type-input">Type</label>
        <select
          required
          name="type"
          id="type-input"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="Vacation">Vacation</option>
          <option value="Business">Business</option>
          <option value="Adventure">Adventure</option>
          <option value="Cultural">Cultural</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Create Trip</button>
      </form>
    </main>
  );
};

export default TripForm;
