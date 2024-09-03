import { useState, createContext, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import TripsList from "./components/TripsList/TripsList";
import TripDetails from "./components/TripDetails/TripDetails";
import TripForm from "./components/TripForm/TripForm";
import LogEntriesList from "./components/LogEntriesList/LogEntriesList";
import LogEntryDetails from "./components/LogEntryDetails/LogEntryDetails";
import LogEntryForm from "./components/LogEntryForm/LogEntryForm";
import * as authService from "../src/services/authService";
import * as tripService from "../src/services/tripService";
import * as logEntryService from "../src/services/logEntryService";

export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [trips, setTrips] = useState([]);
  const [logEntries, setLogEntries] = useState([]);
  const { tripId } = useParams();
  const navigate = useNavigate();

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const handleAddTrip = async (tripFormData) => {
    const newTrip = await tripService.create(tripFormData);
    setTrips([...trips, newTrip]);
    navigate("/Trips");
  };

  const handleAddLogEntry = async (logEntryFormData, tripId) => {
    const newLogEntry = await logEntryService.createLogEntry(logEntryFormData);
    setLogEntries([...logEntries, newLogEntry]);
    navigate(`/Trips/${tripId}`);
  };

  const handleDeleteTrip = async (tripId) => {
    const deletedTrip = await tripService.deleteTrip(tripId);
    setTrips(trips.filter((trip) => trip._id !== deletedTrip._id));
    navigate("/Trips");
  };

  const handleDeleteLogEntry = async (logEntryId, tripId) => {
    const deletedLogEntry = await logEntryService.deleteLogEntry(logEntryId);
    console.log("logEntryId", logEntryId);
    setLogEntries(
      logEntries.filter((logEntry) => logEntry._id !== deletedLogEntry._id)
    );
    navigate(`/Trips/${tripId}`);
  };

  const handleUpdateTrip = async (tripId, tripFormData) => {
    const updatedTrip = await tripService.updateTrip(tripId, tripFormData);
    console.log("tripId:", tripId, "tripFormData:", tripFormData);
    setTrips(trips.map((trip) => (tripId === trip._id ? updatedTrip : trip)));
    navigate(`/Trips/${tripId}/`);
  };

  useEffect(() => {
    const fetchAllTrips = async () => {
      const tripsData = await tripService.index();
      setTrips(tripsData);
    };

    const fetchLogs = async () => {
      if (tripId) {
        const logEntriesData = await logEntryService.indexLogsInTrip(tripId);
        console.log("logEntriesData:", logEntriesData);
        setLogEntries(logEntriesData);
      }
    };

    if (user) {
      fetchAllTrips();
      fetchLogs();
    }
  }, [user, tripId]);

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route
                path="/Trips"
                element={<TripsList trips={trips} logEntries={logEntries} />}
              />
              <Route
                path="/Trips/New"
                element={<TripForm handleAddTrip={handleAddTrip} />}
              />
              <Route
                path="/Trips/:tripId"
                element={<TripDetails handleDeleteTrip={handleDeleteTrip} />}
              />
              <Route
                path="/Trips/:tripId/edit"
                element={<TripForm handleUpdateTrip={handleUpdateTrip} />}
              />
              <Route
                path="/Trips/:tripId/LogEntries"
                element={
                  <LogEntriesList 
                    tripId={tripId} 
                    logEntries={logEntries} />
                }
              />
              <Route
                path="/Trips/:tripId/logEntries/new"
                element={
                  <LogEntryForm
                    tripId={tripId}
                    handleAddLogEntry={handleAddLogEntry}
                  />
                }
              />
              <Route
                path="/Trips/:tripId/LogEntries/:logEntryId"
                element={
                  <LogEntryDetails
                    tripId={tripId}
                    handleDeleteLogEntry={handleDeleteLogEntry}
                  />
                }
              />
            </>
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
