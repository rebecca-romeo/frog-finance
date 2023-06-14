// from video
import LoginButton from "./components/authentication/LoginButton";
import LogoutButton from "./components/authentication/LogoutButton";
import Profile from "./components/authentication/Profile";
import ViewMonthlyBudgets from "./components/budget/ViewMonthlyBudgets";
import CurrentSavingGoal from './components/savings/CurrentSavingsGoal';
import PastSavingsGoals from './components/savings/PastSavingsGoals';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import axios from 'axios';
import {useEffect} from "react";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main className="column">
      {/* <h1>Auth0 Login</h1> */}
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          {/* <LoginButton />
          <LogoutButton />
          <Profile />
          <ViewMonthlyBudgets /> */}
          <CurrentSavingGoal />
          <PastSavingsGoals />
        </>

      )}
    </main>
  );
}

export default App;