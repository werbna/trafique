import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as tripService from "../../services/tripService"

const TripForm = (props) => {
  const { tripId } = useParams();
  const [formData, setFormData] = useState({
    destination: "",
    type: "Vacation",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (tripId) {
      props.handleUpdateTrip(tripId, formData)
    } else {
      props.handleAddTrip(formData);
    }
  };

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await tripService.show(tripId);
      setFormData(tripData);
    };
    if (tripId) fetchTrip();
  }, [tripId]);

  return (
    <main>
      <h1>{tripId ? "Edit Trip" : "Create Trip"}</h1>
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

        <button type="submit">{tripId ? "Edit Trip" : "Create Trip"}</button>
      </form>
    </main>
  );
};

export default TripForm;
