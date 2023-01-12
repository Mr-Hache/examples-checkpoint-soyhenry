import {
  CREATE_TEAM,
  DELETE_TEAM,
  GET_ALL_TEAMS,
  GET_TEAM_DETAIL,
} from "../actions/index";

const initialState = {
  // Tus estados acá
  teams: [],
  teamDetail: {},
};

const rootReducer = (state = initialState, action) => {
  // Acá va tu código
  switch (action.type) {
    case CREATE_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };

    case DELETE_TEAM:
      return {
        ...state,
        teams: state.teams.filter((char) => char.id !== action.payload),
      };

    case GET_ALL_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case GET_TEAM_DETAIL:
      return {
        ...state,
        teamDetail: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
