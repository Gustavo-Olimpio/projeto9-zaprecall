import cards from './cards'
import Perguntas from './Perguntas'
import styled from 'styled-components'

function ListaPerguntas(props){
    
    return(
        <DivMap>
            {cards.map((f,i) => <Perguntas cont={props.cont} setCont={props.setCont} key={i} question={f.question} answer={f.answer} i={i}/>)}
        </DivMap>
    )
}
export default ListaPerguntas

const DivMap = styled.div `
margin-bottom:66px;
`