import { Link, useParams } from "react-router-dom";

const LogEntriesList = (props) => {
  const { tripId } = useParams();
  if (!props.logEntries || !Array.isArray(props.logEntries)) {
    return <main>No log entries found.</main>;
  }

  return (
    <main>
      {props.logEntries.map((logEntry) => (
        <Link key={logEntry._id} to={`/Trips/${tripId}/LogEntries/${logEntry._id}`}>
          <article>
            <header>
              <h2>{logEntry.title}</h2>
              <p>{logEntry.content}</p>
              <p>
                {logEntry.author.username} posted on <br></br>
                {new Date(logEntry.createdAt).toLocaleDateString()}
              </p>
            </header>
            <p>{logEntry.text}</p>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default LogEntriesList;