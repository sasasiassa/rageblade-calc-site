import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";
import VariablesContext from "../context/Variables";
import Result from "./Result";
import "./Calc.css";
const Calc = () => {
  const handleClick = async () => {
    let response = await axios.post("https://rageblade.moduck.dev/v1/all", {
      ...variables,
    });
    setResult({ ...response.data });
  };
  const handleKeyDown = async (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };
  const [variables, setVariables] = useState({
    crit: 0,
    critDmg: 0,
    level: 0,
    currentHP: 0,
    bAD: 0,
    tAD: 0,
    AS: 0,
    totalMana: 0,
  });
  const varNames = [
    "crit",
    "critDmg",
    "level",
    "currentHP",
    "bAD",
    "tAD",
    "AS",
    "totalMana",
  ];
  const [result, setResult] = useState({
    critDPS: 0,
    noRagebladeDPS: 0,
    ragebladeDPS: 0,
  });
  const nameArr = [
    "Crit chance",
    "Crit damage",
    "Level",
    "Current HP",
    "Bonus AD",
    "Total AD",
    "Attack Speed",
    "Total Mana",
  ];
  return (
    <div className="wrapper" onKeyDown={handleKeyDown}>
      <h1>TrueDMG</h1>
      <h3>A calculator to compare crit and on-hit</h3>
      <VariablesContext.Provider value={[variables, setVariables]}>
        <div className="flex-wrapper">
          {varNames.map((item, index) => {
            return (
              <Input
                name={nameArr[index]}
                variableName={item}
                placeholder=""
                key={item}
              ></Input>
            );
          })}
        </div>
      </VariablesContext.Provider>
      <p className="note">
        Note: Setting HP/Level/Bonus AD/Mana to 0 will ignore bork/wits
        end/kraken slayer/manamune respectively.
      </p>
      <button type="submit" onClick={handleClick}>
        Compare
      </button>
      <Result
        critDPS={result.critDPS}
        noRagebladeDPS={result.noRagebladeDPS}
        ragebladeDPS={result.ragebladeDPS}
      ></Result>
    </div>
  );
};

export default Calc;
