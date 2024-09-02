import { Link } from 'react-router-dom';

const TripsList = (props) => {
  return (  
    <main>
    {props.trips.map((trip) => (
      <Link key={trip._id} to={`/trips/${trip._id}`}>
        <article>
          <header>
            <h2>{trip.destination}</h2>
            <p>
              {trip.author.username} posted on 
              <br></br>{new Date(trip.createdAt).toLocaleDateString()}
            </p>
          </header>
          <p>{trip.text}</p>
        </article>
      </Link>
    ))}
  </main>
  );
}

export default TripsList;