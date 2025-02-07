
const MostrarPessoas = ({nome,idade,profissao}) => {
    console.log(nome+idade+profissao)
  return (
    <div>
        <h2>{nome}</h2>
        <p>Profissão: {profissao}</p>
        <p>Idade: {idade}</p>
        {idade<18 && (
            <p>{nome} não pode dirigir, pois ainda não possui 18 anos</p>
        )}
    </div>
  )
}

export default MostrarPessoas