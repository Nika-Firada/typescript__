type PizzaData = {
    numberOfPeople: number;
    slicesPerPerson: number;
    slicesPerPie: number;
}
export type PizzaState = PizzaData & {pizzaNeeded: number}
  
const calculatePizzaNeeded = ({numberOfPeople,slicesPerPerson, slicesPerPie}:PizzaData): number =>{
    return Math.ceil((numberOfPeople * slicesPerPerson) / slicesPerPie)
}
  
export const addPizzaNeededToPizzaData = (data:PizzaData): PizzaState => {
    return { ...data,pizzaNeeded: calculatePizzaNeeded(data) };
}
  
export const initialState: PizzaState = {
    numberOfPeople: 8,
    slicesPerPerson: 2,
    slicesPerPie: 8,
    pizzaNeeded: 2
}
export type PizzaAction = {
    type: 'UPDATE_NUMBER_OF_PEOPLE' | 'UPDATE_SLICES_PER_PERSON' | 'UPDATE_SLICES_PER_PIE',
    payload: number;
}
