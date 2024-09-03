import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as logEntryService from  '../../services/logEntryService';

const LogEntryForm = (props) => {
  const { tripId, logEntryId } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    rating: 1,
    trip: tripId,
  });

  useEffect(() => {
    if (logEntryId) {
      const fetchLogEntry = async () => {
        const logEntryData = await logEntryService.showLogEntry(logEntryId);
        setFormData(logEntryData);
      };
      fetchLogEntry();
    }
  }, [logEntryId]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevLogEntry) => ({ ...prevLogEntry, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (formData.title && formData.content) {
      if (logEntryId) {
        props.handleUpdateLogEntry(logEntryId, formData);
      } else {
        props.handleAddLogEntry(formData);
      }
    } else {
      console.error('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{logEntryId ? 'Edit Log Entry' : 'New Log Entry'}</h1>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Rating:
        <select name="rating" value={formData.rating} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LogEntryForm;