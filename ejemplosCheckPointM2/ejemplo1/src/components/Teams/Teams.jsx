import * as actions from "../../redux/actions/index";

import React, { Component } from "react";

import { connect } from "react-redux";

import IMAGEN from "../../img-cp2/f1Logo.jpg";
import TeamsCard from "../TeamsCard/TeamsCard";

// CUIDADO! TENES QUE USAR CLASS COMPONENT! SINO SE ROMPEN LOS TEST EN CASO CONTRARIO!

// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS

// Y MAP_DISPATCH_TO_PROPS!

export class Teams extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllTeams();
  }
  render() {
    return (
      <div>
        <h1>Formula 1</h1>
        <img src={IMAGEN} alt="main-img" />
        <h3>Teams</h3>

        {this.props.teams?.map((team) => {
          return (
            <TeamsCard
              id={team.id}
              founder={team.founder}
              name={team.name}
              base={team.base}
              image={team.image}
            />
          );
        })}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    teams: state.teams,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllTeams: () => dispatch(actions.getAllTeams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
