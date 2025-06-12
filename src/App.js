import React, { useContext } from 'react';
import { KeycloakContext } from './KeycloakProvider';
import AccountPage from './components/AccountPage';
import './App.css'; // ← Add this line at the top


  


function App() {
  const { keycloak, authenticated } = useContext(KeycloakContext);

  if (!authenticated) {
    return <div>Checking authentication...</div>;
  }

  return (
     
        <div>
      {/* <h1>Welcome, {keycloak.tokenParsed?.preferred_username}</h1>
      <button onClick={() => keycloak.logout()}>Logout</button> */}
            <AccountPage keycloak={keycloak} />

    </div>
        
     
  );
}

export default App;
