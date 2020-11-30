import React, { useContext } from "react";
import VariablesContext from "../context/Variables";

const Input = (props) => {
  const [variables, setVariables] = useContext(VariablesContext);
  const handleChange = (event) => {
    setVariables({
      ...variables,
      [`${props.variableName}`]: parseInt(event.target.value),
    });
  };
  return (
    <div>
      <img src={`/assets/${props.variableName}.png`} alt={props.name} />
      <h4>{props.name}</h4>
      <input
        placeholder={props.placeholder}
        name={props.variableName}
        type="number"
        min="0"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Input;
