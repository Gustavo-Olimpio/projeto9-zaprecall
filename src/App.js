import Titulo from './Titulo'
import Rodape from './Rodape'
import ListaPerguntas from './ListaPerguntas'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import {useState} from "react"
import cards from './cards'



function App() {
  
  const [cont, setCont] = useState(0);


  return (
  <div>
    <GlobalStyle />
    <DivMain>
    <Titulo />
    <ListaPerguntas cont={cont} setCont={setCont} />
    </DivMain>
    <Rodape cont={cont} tamanho={cards.length}/>
  </div>
  )
}

export default App;

const DivMain = styled.div `
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`