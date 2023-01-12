import * as actions from "../../redux/actions";

import React from "react";
import { useDispatch } from "react-redux";

// CUIDADO!. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateTeam = () => {
  const dispatch = useDispatch();
  const createTeam = (team) => {
    dispatch(actions.createTeam(team));
  };
  const [form, setForm] = React.useState({
    name: "",
    founder: "",
    base: "",
    worldChampionships: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTeam(form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        ></input>
        <label>Founder: </label>
        <input
          type="text"
          name="founder"
          value={form.founder}
          onChange={handleChange}
        ></input>
        <label>Base: </label>
        <input
          type="text"
          name="base"
          value={form.base}
          onChange={handleChange}
        ></input>
        <label>WorldChampionships: </label>
        <input
          type="number"
          name="worldChampionships"
          value={form.worldChampionships}
          onChange={handleChange}
        ></input>
        <button type="submit">Create Team</button>
      </form>
    </div>
  );
};

export default CreateTeam;
