const MyComponent = ()=>{
    const a = 5
    const b = 10
    const somar = ()=>{
        const soma = a+b
        console.log(soma)
        
    }
    return (
        <div>
            <h1>Primeiro componente</h1>
            <p>A: {a}</p>            
            <p>B : {b}</p>
            <button onClick={somar}>Somar</button>
        </div>

    )
}
export default MyComponent