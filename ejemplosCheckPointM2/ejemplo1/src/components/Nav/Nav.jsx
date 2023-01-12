import React, { Component } from "react";
import { Link } from "react-router-dom";

// CUIDADO! SI O SI CLASS COMPONENT! SINO SE ROMPEN LOS TEST EN CASO CONTRARIO!
class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/">Teams</Link>
        <Link to="/team/create">Create Team</Link>
      </div>
    );
  }
}

export default Nav;
