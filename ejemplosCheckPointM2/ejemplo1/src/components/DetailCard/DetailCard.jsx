import React from "react";
import { Link } from "react-router-dom";

// CUIDADO! SI O SI FUNCTIONAL COMPONENT! SINO SE ROMPEN LOS TEST EN CASO CONTRARIO!

const DetailCard = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>ID: {props.id}</p>
      <p>Base: {props.base}</p>
      <p>Drivers: {props.drivers}</p>
      <p>WorldChampionships: {props.worldChampionships}</p>
      <Link to="/"><button>Volver</button></Link>
    </div>
  );
};

export default DetailCard;
