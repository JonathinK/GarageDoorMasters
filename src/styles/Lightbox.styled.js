import styled from 'styled-components'


export const LightboxContainer = styled.div`
  height:auto;
  width:auto;
`
export const LightBox = styled.div`
  display:flex;
  flex-flow: column;
  justify-content:center;
  align-items: center;
  width:100%;
  height:100vh;
  background: rgba(0,0,0,.8);
  position:fixed;
  z-index:150;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow:hidden;
`
export const LightBoxImage = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  width:90%;
  max-width: 1300px;
  position:relative;
`

export const Close = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  justify-self:end;
  align-items:start;
  width:50px;
  height:50px;
  margin: 2em;
  position:absolute;
  top:0;
  right:0;
  display:flex;
  flex-flow:column;
  @media ${({theme}) => theme.sizes.largeDesktop}{
    transform: scale(.7);
  }
  @media ${({theme}) => theme.sizes.mobile}{
    transform: scale(.6);
  }
  div{
    background:white;
    height:8px;
    width:100%;
    border-radius: 5px;
    position:absolute;
    top:20px;
   
  }
  div:first-child{
    transform:rotate(-135deg);
  }
  div:nth-child(2){
    transform:rotate(135deg);
  }
`