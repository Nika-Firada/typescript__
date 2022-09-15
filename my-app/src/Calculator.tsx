import React, { Dispatch } from "react";
import { PizzaState, PizzaAction } from "./pizza";

const Calculator = ({ dispatch, state }: { state: PizzaState; dispatch: Dispatch<PizzaAction> }) => {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="number-of-people">Number of People</label>
      <input
        type="number"
        id="number-of-people"
        value={state.numberOfPeople}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SLICES_PER_PERSON",
            payload: +event.target.value,
          })
        }
      />
      <label htmlFor="slices-per-person">Slices Per Person</label>
      <input
        id="slices-per-person"
        type="number"
        value={state.slicesPerPerson}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SLICES_PER_PERSON",
            payload: +event.target.value,
          })
        }
      />
      <label htmlFor="slices-per-Pie">Slices Per Pie</label>
      <input
        id="slices-per-Pie"
        type="number"
        value={state.slicesPerPie}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_SLICES_PER_PIE",
            payload: +event.target.value,
          })
        }
      />
    </form>
  );
};

export default Calculator;
