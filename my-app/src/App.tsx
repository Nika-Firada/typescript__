import React, {useReducer} from 'react';
import Calculation from './Calculation'
import Calculator from './Calculator'
import { addPizzaNeededToPizzaData, initialState, PizzaState } from './pizza';


const reducer = (state:PizzaState,action:any)=>{
  if(action.type === 'UPDATE_NUMBER_OF_PEOPLE'){
    return addPizzaNeededToPizzaData({
      ...state,
      numberOfPeople: action.payload
    })
  }
  if(action.type === 'UPDATE_SLICES_PER_PERSON'){
    return addPizzaNeededToPizzaData({
      ...state,
      slicesPerPerson: action.payload
    })
  }
  if(action.type === 'UPDATE_SLICES_PER_PIE'){
    return addPizzaNeededToPizzaData({
      ...state,
      slicesPerPie: action.payload
    })
  }
  return state;
};

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <main className="calcurator">
      <header>
        <h1>Pizza Calcurator</h1>
        <Calculation count={state.pizzaNeeded}/>
        <Calculator state={state} dispatch={dispatch}/>
      </header>
    </main>
  );
}

export default App;
