
const LogEntriesList = (props) => {
  return (  
    <main>
      {props.logEntries.map((logEntry) => (
        <p key={logEntry._id}>{logEntry.title}</p>
      ))}
    </main>
  );
}

export default LogEntriesList;