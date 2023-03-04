import styled from 'styled-components'
    function Titulo(){
        return(
            <Divtit>
            <Imagem src='assets/logo.png' alt='logo'/>
            <p>ZapRecall</p>
            </Divtit>
        )
     }
export default Titulo;

const Imagem = styled.img `
    height: 60px;
    width: 52px;
    margin-right:16px;
`

const Divtit = styled.div `
    
     margin-top:48px;
     font-size:36px;
     font-weight:400;
     font-family: 'Righteous', cursive;
     font-style:bold;
     color:#FFFFFF;
     display:flex;
     align-items:center;
     margin-bottom:50px;
`