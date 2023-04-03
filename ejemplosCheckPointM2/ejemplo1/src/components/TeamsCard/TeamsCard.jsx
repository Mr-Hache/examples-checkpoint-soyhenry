import * as actions from "../../redux/actions/index";

import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

// CUIDADO!. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS!
export class TeamsCard extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.deleteTeam(this.props.id);
  // }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.deleteTeam(this.props.id);
          }}
        ></button>
        <Link to={`/teams/${this.props.id}`}>
          <h3>{this.props.name}</h3>
        </Link>
        <img src={this.props.image} />
        <p>Founder: {this.props.founder}</p>
        <p>Base: {this.props.base}</p>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    deleteTeam: (id) => dispatch(actions.deleteTeam(id)),
  };
};

export default connect(null, mapDispatchToProps)(TeamsCard);
