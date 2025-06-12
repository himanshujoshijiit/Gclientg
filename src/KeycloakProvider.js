import React, { useState, useEffect, createContext } from 'react';
import keycloak from './keycloak'; // ← your keycloak config file

export const KeycloakContext = createContext();

const KeycloakProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak
      .init({ onLoad: 'login-required' }) // 'check-sso' for optional login
      .then(authenticated => {
        console.log('Keycloak initialized. Authenticated:', authenticated);
        setAuthenticated(authenticated);
      })
      .catch(error => {
        console.error('Keycloak init failed:', error);
      });
  }, []);

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {authenticated ? children : <div>Loading...</div>}
    </KeycloakContext.Provider>
  );
};

export default KeycloakProvider;
