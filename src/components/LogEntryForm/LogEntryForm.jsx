import { useState } from 'react';
import { useParams } from 'react-router-dom';

const LogEntryForm = (props) => {
  const { tripId, author } = useParams()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    rating: 1,
    author: author, 
    trip: tripId,
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevLogEntry) => ({ ...prevLogEntry, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddLogEntry(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          readOnly
        />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LogEntryForm;