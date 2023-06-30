import { createContext, useReducer } from "react"
import JobListingPage from "./components/JobListingPage"


export const FilterContext = createContext()

const reducer = (state=[], action) => {
  switch(action.type){
    case "ADD_FILTER":
      return [...state, action.payload]
    case "REMOVE_FILTER":
      return state.filter(item => item.toLowerCase() !== action.payload.toLowerCase())
    case "CLEAR":
      return []
    default:
      return state
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, ["Frontend", "React"]);

  return (
    <FilterContext.Provider value={{list: state, func: dispatch } }>
      <JobListingPage />
    </FilterContext.Provider>
  )
}

export default App
