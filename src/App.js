import Titulo from './Titulo'
import Rodape from './Rodape'
import ListaPerguntas from './ListaPerguntas'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'

const [pergunta,setPergunta] = useState(false)
const [questao,setQuestao] = useState(true)
const [resposta,setResposta] = useState(true)

function App() {
  return (
  <div>
    <GlobalStyle />
    <DivMain>
    <Titulo />
    <ListaPerguntas />
    </DivMain>
    <Rodape />
  </div>
  )
}

export default App;

const DivMain = styled.div `
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`