import { createContext, useState } from "react";

export const countContext = createContext();


const CountContextProvider = ({children}) => {
   
   const [count, setCount] = useState(0);



   const value = {
    count,
    setCount,
   }
   
   
   
    return(
        <countContext.Provider value={value}>
            {children}
        </countContext.Provider>
    )
}


export default CountContextProvider;