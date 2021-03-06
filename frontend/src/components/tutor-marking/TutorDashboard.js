import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";
import { logout } from "../login/LoginActions";

import TutorNotesList from "../tutor-marking/TutorNotesList";

class TutorDashboard extends Component {
  onLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props.auth;
    if (user === "tutorz") {
        return (
            <div>
              <Navbar bg="light">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    User: <b>{user.username}</b>
                  </Navbar.Text>
                  <Nav.Link onClick={this.onLogout}>Logout</Nav.Link>
                </Navbar.Collapse>
              </Navbar>
              <Container>
                <TutorNotesList />
              </Container>
            </div>
          );
        }
    }
}

TutorDashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logout
})(withRouter(TutorDashboard));
