import * as data from "../db.json";

import {
  GET_ALL_TEAMS,
  GET_TEAM_DETAIL,
  createTeam,
  deleteTeam,
} from "../src/redux/actions";

import rootReducer from "../src/redux/reducer";

jest.mock("../src/redux/actions", () => ({
  __esmodules: true,
  GET_ALL_TEAMS: "GET_ALL_TEAMS",
  DELETE_TEAM: "DELETE_TEAM",
  GET_TEAM_DETAIL: "GET_TEAM_DETAIL",
  CREATE_TEAM: "CREATE_TEAM",
  createTeam: (payload) => ({
    type: "CREATE_TEAM",
    payload,
  }),
  deleteTeam: (payload) => ({
    type: "DELETE_TEAM",
    payload,
  }),
  getTeamDetail: (payload) => ({
    type: "GET_TEAM_DETAIL",
    payload,
  }),
}));

describe("Reducer", () => {
  const state = {
    teams: [],
    teamDetail: {},
  };

  it("Debería retornar el estado inicial si no se pasa un type válido", () => {
    expect(rootReducer(undefined, [])).toEqual({ teams: [], teamDetail: {} });
  });

  it('Debería guardar en nuestro state los teams obtenidos de nuestro llamado al back cuando action type es "GET_ALL_TEAMS"', () => {
    const result = rootReducer(state, {
      type: GET_ALL_TEAMS,
      payload: data.teams,
    });
    // Ojooo. Recodar que no debemos mutar nuestro state!
    expect(result).not.toEqual(state);
    expect(result).toEqual({
      teams: data.teams, // Cuando ejecutes los tests, vas a ver bien lo que espera que le llegue!
      teamDetail: {},
    });
  });

  it('Debería guardar en nuestro state el team obtenido de nuestro llamado al back cuando action type es "GET_TEAM_DETAIL"', () => {
    const result = rootReducer(state, {
      type: GET_TEAM_DETAIL,
      payload: data.teams[0],
    });
    // Ojooo. Recodar que no debemos mutar nuestro state!
    expect(result).not.toEqual(state);
    expect(result).toEqual({
      teams: [],
      teamDetail: data.teams[0],
    });
  });

  it('Debería crear un nuevo team y guardarlo en nuestro reducer cuando action type es "CREATE_TEAM"', () => {
    const state = {
      teams: data.teams,
      teamDetail: {},
    };

    const payload1 = {
      id: 6,
      name: "Aston Martin",
      founder: "Lawrence Stroll",
      base: "Silverstone, Northamptonshire, UK",
    };

    const payload2 = {
      id: 7,
      name: "Williams Racing",
      founder: "Frank Williams",
      base: "Grove, Oxfordshire, UK",
    };

    const teams1 = [
      ...data.teams,
      {
        id: 6,
        name: "Aston Martin",
        founder: "Lawrence Stroll",
        base: "Silverstone, Northamptonshire, UK",
      },
    ];
    const teams2 = [
      ...teams1,
      {
        id: 7,
        name: "Williams Racing",
        founder: "Frank Williams",
        base: "Grove, Oxfordshire, UK",
      },
    ];
    const result1 = rootReducer(state, createTeam(payload1));
    const result2 = rootReducer(
      { ...state, teams: teams1 },
      createTeam(payload2)
    );

    // Ojooo. Recodar que no debemos mutar nuestro state!
    expect(result1).not.toEqual(state);
    expect(result2).not.toEqual(state);
    expect(result1).toEqual({ teamDetail: {}, teams: teams1 });
    expect(result2).toEqual({ teamDetail: {}, teams: teams2 });
  });

  it('Debería eliminar un team de nuestro store cuando action type es "DELETE_TEAM"', () => {
    const state = {
      teams: data.teams,
      teamDetail: {},
    };

    const teams1 = [data.teams[1], data.teams[2], data.teams[3], data.teams[4]];
    const teams2 = [data.teams[0], data.teams[1], data.teams[3], data.teams[4]];
    const result1 = rootReducer(state, deleteTeam(1));
    const result2 = rootReducer(state, deleteTeam(3));

    // Ojooo. Recodar que no debemos mutar nuestro state!
    expect(result1).not.toEqual(state);
    expect(result2).not.toEqual(state);

    expect(result1).toEqual({ teamDetail: {}, teams: teams1 });
    expect(result2).toEqual({ teamDetail: {}, teams: teams2 });
  });
});
