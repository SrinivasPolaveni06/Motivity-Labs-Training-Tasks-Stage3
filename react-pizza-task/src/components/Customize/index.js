import React from "react";
import { useState } from "react";
import Cheese from "../../Images/BaseCheese.png";
import Base from "../../Images/PizzaBase.png";
import Olive from "../../Images/Olive.png";
import Pineapple from "../../Images/Pineapple.png";
import Mushroom from "../../Images/Mushroom.png";
import Basil from "../../Images/Basil.png";
import Tomato from "../../Images/Tomato.png";
//import { motion } from "framer-motion";
//import { useHistory } from "react-router-dom";
import "./index.css";

const Index = () => {
  const InitialValues = {
    cheese: false,
    olive: false,
    pineapple: false,
    mushroom: false,
    basil: false,
    tomato: false,
  };
  const [details, setDetails] = useState(InitialValues);

  function onChangeState(event) {
    const { name, value } = event.target;
    console.log(name);
    console.log(!value);
    setDetails((prevState) => {
      //console.log([!prevState.Name]);
      return { ...prevState, [name]: !prevState[name] };
    });
    //console.log(InitialValues);
  }
  return (
    <>
      <div>
        <div className="d-flex">
          <div>
            <h2 >Build Your Own Pizza</h2>
            <div className="card-container">
              <img src={Base} className="Base" alt="" />
              {details.cheese ? (
                <img className="cheese " src={Cheese} alt="" />
              ) : null}
              {details.olive ? (
                <img src={Olive} className="olive" alt="" />
              ) : null}
              {details.pineapple ? (
                <img src={Pineapple} className="pineapple" alt="" />
              ) : null}
              {details.mushroom ? (
                <img src={Mushroom} className="mushroom" alt="" />
              ) : null}
              {details.basil ? (
                <img src={Basil} className="basil" alt="" />
              ) : null}
              {details.tomato ? (
                <img src={Tomato} className="tomato" width={100} alt="" />
              ) : null}
            </div>
          </div>
          <div className="ms-5 mt-5">
            <div>
              <input
                id="cheese"
                type="checkbox"
                value={details.cheese}
                name="cheese"
                onChange={(event) => onChangeState(event)}
              />
              <label htmlFor="cheese">Cheese</label>
            </div>
            <div>
              <input
                id="Olive"
                type="checkbox"
                value={details.olive}
                name="olive"
                onChange={(event) => onChangeState(event)}
              />
              <label htmlFor="Olive">Olive</label>
            </div>
            <div>
              <input
                id="Pineapple"
                type="checkbox"
                value={details.pineapple}
                name="pineapple"
                onChange={(event) => onChangeState(event)}
              />
              <label htmlFor="Pineapple">Pineapple</label>
            </div>
            <div>
              <input
                id="Mushroom"
                type="checkbox"
                value={details.mushroom}
                name="mushroom"
                onChange={(event) => onChangeState(event)}
              />
              <label htmlFor="Mushroom">Mushroom</label>
            </div>
            <div>
              <input
                id="Basil"
                type="checkbox"
                value={details.basil}
                name="basil"
                onChange={(event) => onChangeState(event)}
              />
              <label htmlFor="Basil">Basil</label>
            </div>
            <div>
              <input
                id="Tomato"
                type="checkbox"
                value={details.tomato}
                name="tomato"
                onChange={(event) => onChangeState(event)}
              />
              <label htmlFor="Tomato">Tomato</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
