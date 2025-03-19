import { createContext, useState } from "react";
//CRIANDO CONTEXT
export const CountContext = createContext();
//CRIANDO O PROVIDER
export const CounterContextProvider = ({children})=>{
    //CRIANDO O STATE
    const [counter,setCounter] = useState(5)
    //RETORNANDO O PROVIDER
    return(
        //ENVIANDO O STATE
        <CountContext.Provider value={{counter,setCounter}}> 
            {children}
        </CountContext.Provider>
    )
}