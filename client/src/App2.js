import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ItemList from './components/ItemList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import { logoutUser } from "./actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Provider } from 'react-redux';
import store from './store';


class App2 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
};
  render() {
    
    return (
      // <Provider store={store}>
      <div className="App" style={{ paddingTop: "20px" }}>
        {/* <AppNavbar /> */}
        <Container>
          <ItemModal />
          <ItemList />
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3">
            Logout
            </button>
        </Container>

      </div>
      // </Provider>
    );
  }
}

App2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(App2);
// export default App2;
