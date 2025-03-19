import {useContext} from 'react'
import { CountContext } from '../context/CounterContext'

export const useCounterContext = () =>{
    const context= useContext(CountContext)

    if(!context){
        console.log('Contexto inválido')
    }

    return context;
}