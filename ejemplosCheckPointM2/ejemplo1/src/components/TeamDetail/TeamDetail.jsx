import * as actions from "../../redux/actions";

import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux'
import DetailCard from "../DetailCard/DetailCard";
// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const TeamDetail = (props) => {
const {teamId} = useParams()
const dispatch = useDispatch()
const team = useSelector(state => state.teamDetail)
  React.useEffect(() => {
    console.log(teamId)
    dispatch(actions.getTeamDetail(teamId))} , []);
  return (
    <div>
      <h1>Team Detail</h1>
      <p>{team.name}</p>
      <p>{team.founder}</p>
       {/* Debería renderizar una <DetailCard /> por cada equipo */}
      <DetailCard id={team.id} drivers={team.drivers} base={team.base} image={team.image} worldChampionships={team.worldChampionships}/>
       
    </div>
  );
};
export default TeamDetail;
