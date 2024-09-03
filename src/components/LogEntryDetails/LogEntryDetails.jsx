import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { AuthedUserContext } from '../../App';
import { Link } from "react-router-dom";
import CommentsList from "../CommentLists/CommentLists";
import * as logEntryService from  '../../services/logEntryService';

const LogEntryDetails = ({ handleDeleteLogEntry }) => {
  const { logEntryId, tripId } = useParams();
  const [logEntry, setLogEntry] = useState(null)
  const user = useContext(AuthedUserContext);

  useEffect (() => {
    const fetchLogEntry = async () => {
      try {
        const logEntryData = await logEntryService.showLogEntry(logEntryId);
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
      
      {logEntry.author._id === user._id && (
    <>
      <button onClick={() => handleDeleteLogEntry(logEntryId, tripId)}>Delete</button>

      <Link to={`/trips/${tripId}/logEntries/${logEntryId}/edit`}>Edit</Link>
    </>
    
  )}
  <CommentsList logEntryId={logEntryId} logEntryData={logEntry} />
    </main>
  );
}

export default LogEntryDetails;