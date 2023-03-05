import styled from 'styled-components'
import { useState } from "react";

function Perguntas(props){
    const [jaTem, setJaTem] = useState();
    const [jaResposta, setJaResposta] = useState();
    const [cor, setCor] = useState("#333333");
    const [risco,setRisco] = useState("");
    const [icone,setIcone] = useState("assets/seta_play.png");
    const [desabilita,setDesabilita] = useState("");
    

    function clickPerguntas(indice){
        setJaTem(indice); 
    }
    function clickRespostas(indice){
        setJaResposta(indice)
    }
    function nl(){
        setJaTem()
        setJaResposta()
        setCor("#FF3030")
        setRisco("line-through")
        setIcone("assets/icone_erro.png")
        setDesabilita("none")
        props.setCont(props.cont+1)
    }
    function qnl(){
        setJaTem()
        setJaResposta()
        setCor("#FF922E")
        setRisco("line-through")
        setIcone("assets/icone_quase.png")
        setDesabilita("none")
        props.setCont(props.cont+1)
    }
    function zap(){
        setJaTem()
        setJaResposta()
        setCor("#2FBE34")
        setRisco("line-through")
        setIcone("assets/icone_certo.png")
        setDesabilita("none")
        props.setCont(props.cont+1)
    }

    
    
    
    return(
        <div>
           
            <DivPerguntas  i={props.i} jaTem={jaTem} cor={cor} risco={risco} desabilita={desabilita}>
                <p>Pergunta {props.i+1}</p>
                <img onClick={() => clickPerguntas(props.i)} src={icone} alt="seta"/>
            </DivPerguntas>
             
            
            <DivQuestao  i={props.i} jaTem={jaTem} jaResposta={jaResposta}>
                <p>{props.question}</p>
                <img onClick={() => clickRespostas(props.i)} src="assets/seta_virar.png" alt="seta"/>
            </DivQuestao>
           
            <DivResposta i={props.i} jaResposta={jaResposta}>
                <p>{props.answer}</p>
                <DivBotoes>
                    <div onClick={nl}>
                        <p>Não</p> 
                        <p>lembrei</p>
                    </div>
                    <div onClick={qnl}>   
                        <p>Quase não</p> 
                        <p>lembrei</p>

                    </div>
                    <div onClick={zap} >Zap!</div>
                </DivBotoes>
            </DivResposta>
            
            
       </div>
    )
}
export default Perguntas;



const DivPerguntas = styled.div `
    pointer-events: ${props => props.desabilita};
    background-color:#FFFFFF;
    width:300px;
    height:65px;
    border-radius:5px;
    display: ${props => (props.jaTem === props.i) ? "none" : "flex" };
    justify-content: space-between;
    align-items: center;
    && img {
        width:20px;
        height:23px;
        cursor: pointer;
    }
    margin-bottom:25px;
    padding:15px;
    font-weight:700;
    color: ${props => props.cor};
    font-family: 'Recursive', sans-serif;
    text-decoration: ${props => props.risco};

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
    display: ${props => (props.jaTem === props.i && props.jaResposta !== props.i) ? "flex" : "none" } ;
   
    && img{
        width:30px;
        height:20px;
        position:absolute;
        bottom:6px;
        right:6px;
        cursor: pointer;
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
        cursor: pointer;
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
        cursor: pointer;
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
        cursor: pointer;
    }
`
const DivResposta = styled.div `
    width:300px;
    height: 131px;
    border-radius:5px;
    background-color:#FFFFD4;
    margin-bottom:25px;
    font-weight:400;
    font-size:18px;
    padding:15px;
    position: relative;
    display: ${props => (props.jaResposta === props.i) ? "flex" : "none" };
   
    && img{
        width:30px;
        height:20px;
        position:absolute;
        bottom:6px;
        right:6px;
    }


`
