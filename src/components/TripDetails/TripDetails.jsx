import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import { AuthedUserContext } from '../../App';
import * as tripService from '../../services/tripService';
import * as logEntryService from '../../services/logEntryService';
import LogEntriesList from '../LogEntriesList/LogEntriesList';

const TripDetails = (props) => {
  const [trip, setTrip] = useState(null);
  const [logEntries, setLogEntries] = useState([]);
  const { tripId } = useParams();
  const { user } = useContext(AuthedUserContext);

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const tripData = await tripService.show(tripId);
        console.log('tripData', tripData);
        setTrip(tripData);
  
        const logEntries = await logEntryService.indexLogsInTrip(tripId);
        setLogEntries(logEntries);
      } catch (error) {
        console.error('Error fetching trip details:', error);
      }
    };
    if (user) {
      fetchTripDetails();
    }
  }, [tripId, user]);

  if (!trip) return <main>Loading...</main>;

  return (
    <main>
      <header>
        <p>{trip.destination}</p>
        <p>{trip.type}</p>
        <p>
          {trip.author && trip.author.username} posted on
          <br />
          {new Date(trip.createdAt).toLocaleDateString()}
        </p>
        {trip.author?._id === user._id && (
          <>
            <Link to={`/trips/${tripId}/edit`}>Edit Trip</Link>
            <button onClick={() => props.handleDeleteTrip(tripId)}>Delete</button>
          </>
        )}
      </header>
      <p>{trip.text}</p>

      <section>
        <h2>Entry Logs</h2>
        <LogEntriesList trip={trip} logEntries={logEntries} />
        <p>
          <Link to={`/trips/${tripId}/logEntries/new`}>Create New Log Entry</Link>
        </p>
      </section>
    </main>
  );
};

export default TripDetails;
