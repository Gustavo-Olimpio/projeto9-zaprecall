import styled from 'styled-components'

function Rodape(){
    return(
        <DivFooter>
            <p>0/4 concluidas</p>
        </DivFooter>
    )
}
export default Rodape

const DivFooter = styled.div`
    background-color:#ffffff;
    width:100%;
    height:70px;
    display:flex;
    justify-content:center;
    align-items:center;
    && p{
        font-size:18px;
        font-weight:400;
        color:#333333;
        font-family: 'Recursive', sans-serif;
    }
    position:fixed;
    bottom:0;
    left:0;

`