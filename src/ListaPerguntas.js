import cards from './cards'
import Perguntas from './Perguntas'
import styled from 'styled-components'

function ListaPerguntas(){
    
    return(
        <DivMap>
            {cards.map((f,i) => <Perguntas key={i} question={f.question} answer={f.answer} i={i}/>)}
        </DivMap>
    )
}
export default ListaPerguntas

const DivMap = styled.div `
margin-bottom:66px;
`