import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import ButtonLogout from './../fragments/ButtonLogout'

class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak({
        url: 'http://localhost:8089/auth',
        realm: 'my-demo-app',
        clientId: 'my-demo-app-client'
    });

    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
    //test@email.com
    //12346
  }

  render() {
    console.log(this.state.keycloak)
    if (this.state.keycloak) {
      if (this.state.authenticated) return (
        <div>
          <p>This is a Keycloak-secured component of your application. You shouldn't be able
          to see this unless you've authenticated with Keycloak.</p>
    
          <ButtonLogout keycloak={this.state.keycloak} />
        </div>
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
      <div>Initializing Keycloak...</div>
    );
  }
}
export default Secured;