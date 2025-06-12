import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',   // Keycloak server URL
  realm: 'client2',                 // Realm name
  clientId: 'client21',  
  credentials: {
    secret: 'wMp6X30a2TmI5gjCWyVvVRpDnM76OAjj'
  } 
 });

export default keycloak;

 