import { AuthedUserContext } from '../../App';
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import * as tripService from  '../../services/tripService';

const TripDetails = (props) => {
  const [trip, setTrip] = useState(null);
  const { tripId } = useParams();
  const { user } = useContext(AuthedUserContext)

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await tripService.show(tripId)
      setTrip(tripData);
      console.log('user:', user);
    }
    fetchTrip();
  }, [tripId, user])

  console.log('trip state:', trip);

  if (!trip) return <main>Loading...</main>;
  return (
    <main>
      <header>
        <p>{trip.destination}</p>
        <p>{trip.type}</p>
        <p>
          {trip.author.username} posted on
          <br></br>
          {new Date(trip.createdAt).toLocaleDateString()}
        </p>
        {trip.author._id === user._id && (
          
          <>
          <Link to={`/trips/${tripId}/edit`}>Edit Trip</Link>

          <button onClick={() => props.handleDeleteTrip(tripId)}>Delete</button>
          </>
        )}
      </header>
      <p>{trip.text}</p>
      <section>
  <h2>Entry Logs</h2>
{/* 
  {!trip.logEntries.length && <p>There are no comments.</p>}

  {trip.logEntries.map((comment) => (
    <article key={comment._id}>
      <header>
        <p>
          {logEntry.author.username} posted on
          {new Date(logEntry.createdAt).toLocaleDateString()}
        </p>
      </header>
      <p>{comment.text}</p>
    </article>
  ))} */}
</section>
    </main>
  );
}

export default TripDetails;