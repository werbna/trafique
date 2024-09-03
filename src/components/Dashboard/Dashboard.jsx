import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const Dashboard = () => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <img src="https://i.imgur.com/dmcbP3u.png" alt="Trafique Logo" />
      <h1>Welcome {user.user?.username}</h1>
      <p>
        This is the dashboard page where as you can see, your dreams of travel are now a journal. Safe Journeys!
      </p>
    </main>
  );
};

export default Dashboard;
