//custom hook para resgatar dados de uma api
import { useState,useEffect } from "react";

export const useFetch =(url)=>{
    console.log(url)
    //dados retornados da api
    const [data,setData] = useState(null)
    //configurações do cabeçalho da requisição
    const [config,setConfig] = useState(null)
    //metodo da requisição
    const [method, setMethod] = useState(null)
    //chamar a função que faz o get dos dados
    const [callFetch,setCallFetch]= useState(false)

    const[ deleteId, setDeleteId] = useState(null)

    /*Função que configura as configurações do cabeçalho da requisição recebendo os dados e metodo */
    const httpConfig = (data,method) =>{
        //caso o metodo seja de post altera o cabeçalho e muda o useState de method para receber o metodo da enviado pela requisição
        
        if(method === "POST"){
            setConfig(
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Apliccation/json'
                    },
                    body: JSON.stringify(data)
                }
            )
            setMethod(method)
        }else if(method === 'DELETE'){
            
           
            setConfig(
                {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'Apliccation/json'
                    },
                   
                }
            )
            setMethod(method)
            setDeleteId(data)
            
        }
        
    }
    //useEffect que monitora a url e  o useState callFetch
    useEffect(()=>{
        //função para resgatar dados da api
        const fetchData = async ()=>{
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }
        fetchData()
        
    },[url, callFetch])
    //useEffect que monitora as configuraçãos da requisição para a api
    useEffect(()=>{
        const httpReq =  async () =>{
          
            //caso seja uma requisição de post
            
            if(method === "POST"){
               
               
                //url e headers
                let configOptions = [url,config];
                const res = await fetch(...configOptions);
                
                const json = res.json()
                
                //chama o useEffect que busca os dados da api
                setCallFetch(json)
                
            }
            if(method === "DELETE") {
                
                let configOptions = [`${url}/${deleteId}`,config];
                const res = await fetch(...configOptions);
                
                const json = res.json()
                
                //chama o useEffect que busca os dados da api
                setCallFetch(json)
                
            }
        }
        httpReq()
    },[config,method,url])
    return {data, httpConfig}
    
    
} 