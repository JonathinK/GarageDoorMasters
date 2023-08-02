import styled,{css} from "styled-components";

export const ReviewCardWrapper = styled.div`
  grid-column: 4 / span 8;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:stretch;
  gap: 2em;
  
    
  .pagination{
    display: flex;
    flex-flow: row nowrap;
    justify-content:center;
    align-items:center;
    gap:1em;
    
    li{
      list-style: none;
      button{
        transition: border 0.3s ease-in-out;
        border:none;
      }
      button.active{
        border: 1px solid ${({theme}) => theme.colors.accentred};
      }
    }
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-column: 2 / span 8;
  } 
  @media ${({theme}) => theme.sizes.tablet}{
    grid-column: 2 / span 6;
  } 
  @media ${({theme}) => theme.sizes.mobile}{
    grid-column: 2 / span 4;
  }

  ${props => props.HomePageReview && css`
    grid-column: 2 / span 12;
    grid-row:3/4;
    position:relative;
    flex-flow: row wrap;
    gap: 2em 3em;
        
    ${ReviewCard}{
      justify-content: flex-start;
      align-items: stretch;
      flex: 1 1 250px;
      div:nth-child(3){
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        white-space: wrap;
        text-overflow: ellipsis;
      }
    }
    @media ${({theme}) => theme.sizes.largeTablet}{
      grid-column: 2 / span 8;
    } 
    @media ${({theme}) => theme.sizes.tablet}{
      grid-column: 2 / span 6;
      grid-row: 4 / 5;
    } 
    @media ${({theme}) => theme.sizes.mobile}{
      grid-column: 2 / span 4;
    }
    
  `}
`
export const ReviewCard = styled.div`
  background: ${({theme}) => theme.colors.body};
  box-shadow: 0px 4px 4px rgba(0,0,0,.33), 0px 8px 16px rgba(0,0,0,.22);
  border-radius: 1em;
  overflow: hidden;
  padding: 2em;
  display: flex;
  flex-flow: column nowrap;
  justify-content:center;
  align-items: stretch;
  gap: 1em;
  transition:  all .5s ease-in-out;
  .fadeIn{
    opacity: 1;
  }
  .fadeOut{
    opacity:0;
  }
  
  .top-container{
    padding: .5em 0em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items:flex-start;
    border-bottom: 4px solid ${({theme}) => theme.colors.accentred};
    border-radius: .4em;
    
    p{
        height:1em;
        font-family: ${({theme}) => theme.fonts.headline};
        color:${({theme}) => theme.colors.primaryblue};
      }
      
    .stars{
      display:flex;
      flex-flow: row;
      justify-content: center;
      align-items:center;
      gap: 1em;
      
    }
  }
  .review-author{
    p{
        height:1em;
        font-family: ${({theme}) => theme.fonts.mono};
        color: ${({theme}) => theme.colors.grey};
        font-size: 1em;
      }
      
  }
`
