import styled from 'styled-components'

function Perguntas(props){
    
    return(
        <div>
           
            <DivPerguntas>
                <p>Pergunta {props.i+1}</p>
                <img src="assets/seta_play.png" alt="seta"/>
            </DivPerguntas>
             
            
            <DivQuestao>
                <p>{props.question}</p>
                <img src="assets/seta_virar.png" alt="seta"/>
            </DivQuestao>
           
            <DivQuestao>
                <p>{props.answer}</p>
                <DivBotoes>
                    <div>
                        <p>Não</p> 
                        <p>lembrei</p>
                    </div>
                    <div>   
                        <p>Quase não</p> 
                        <p>lembrei</p>

                    </div>
                    <div>Zap!</div>
                </DivBotoes>
            </DivQuestao>
            
            
       </div>
    )
}
export default Perguntas;

const DivPerguntas = styled.div `
    background-color:#FFFFFF;
    width:300px;
    height:65px;
    border-radius:5px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    && img {
        width:20px;
        height:23px;
    }
    margin-bottom:25px;
    padding:15px;
    font-weight:700;
    color:#333333;
    font-family: 'Recursive', sans-serif;

`

const DivQuestao = styled.div `
    width:300px;
    height: 131px;
    border-radius:5px;
    background-color:#FFFFD4;
    margin-bottom:25px;
    font-weight:400;
    font-size:18px;
    padding:15px;
    position: relative;
   
    && img{
        width:30px;
        height:20px;
        position:absolute;
        bottom:6px;
        right:6px;
    }

`
const DivBotoes = styled.div `
    display:flex;
    font-size:12px;
    color: #FFFFFF;
    position:absolute;
    bottom:10px;
    left:16px;
    && div:first-child {
        background-color:#FF3030;
        width:85px;
        height:37px;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-right:6px;
    }
    && div:nth-child(2) {
        background-color:#FF922E;
        width:85px;
        height:37px;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-right:6px;
    }
    && div:last-child {
        background-color:#2FBE34;
        width:85px;
        height:37px;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
   
    

`
