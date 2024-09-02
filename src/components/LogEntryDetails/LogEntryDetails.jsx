import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as logEntryService from  '../../services/logEntryService';


const LogEntryDetails = (props) => {
  const { logEntryId, author } = useParams();
  const [logEntry, setLogEntry] = useState(null)
  console.log('LogEntryId', logEntryId)

  useEffect (() => {
    const fetchLogEntry = async () => {
      try {
        const logEntryData = await logEntryService.showLogEntry(logEntryId);
        console.log('logEntryData', logEntryData)
        setLogEntry(logEntryData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLogEntry();
  }, [logEntryId])

  if (!logEntry) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>Log Entry Details</h1>
      <p>Title: {logEntry.title}</p>
      <p>Content: {logEntry.content}</p>
      <p>Rating: {logEntry.rating}</p>
      <p>Author: {logEntry.author.username}</p>
      <p>Created At: {new Date(logEntry.createdAt).toLocaleDateString()}</p>
    </main>
  );
}

export default LogEntryDetails;