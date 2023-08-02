import styled, {css} from "styled-components";
import { SpringCard } from "./SpringsCard.styled";

export const ImageWrapper = styled.div`
  
  ${props => props.AboutBackground && css` 
    position:relative;
    opacity: .25;
    mix-blend-mode: overlay;
    top: -5em;
    height:calc(100% + 5em * 2);

    .full-width-background{
      position: absolute; 
      width:100%;
      height:100%;
    }
  `}
  ${props => props.ServicesImage && css`
    position: relative;
    justify-self:center;
    align-self:start;
    width:100%;
    border-radius: 1em 1em 0 0;
    overflow: hidden;
    box-shadow: 0 -3em 3.5em -1em rgba(0,0,0,.32);
    :after{
      content:'';
      position: absolute;
      z-index: 0;
      top:0;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(to bottom, hsla(213,81%,21%,0), hsla(213,81%,21%,1) 90%);
    }
  `}
  /***Residential Services Images***/
  ${props => props.OpeningStatementImage && css` 
    position: relative;
    z-index:1;
    height:100%;
    overflow:visible;
    display:flex;
    flex-flow: column nowrap;
    justify-content:center;
    align-items:flex-end;
    filter: drop-shadow(-40px 10px 40px rgba(0,0,0,.7));

    .image-position{
      position:relative;
      width:100%;
      right:0;
      overflow: visible;
      transform:scale(1.15) translateX(-4em) translateY(-2em); 
    }
  `}
  ${props => props.ResidentialCardImages && css`
    position: relative;
    
    .image-fit{
      position: absolute;
      width:100%;
      height: 100%;
    }
    @media ${({theme}) => theme.sizes.desktop}{
  
    }
    @media ${({theme}) => theme.sizes.tablet}{
      
    }
    
  `}
  /***Residential Installation Images***/
  ${props => props.ImageFlex && css` 
    display:flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items:center;
    width:100%;
    height:200px;
  `}
  ${props => props.BuilderImage && css` 
    padding: 3em 2.5em;
    background:white;
    flex: 1 1 100px;
    border-radius: 1em;
    display:flex;
    justify-content:center;
    align-items:center;
    min-width: 150px;
    aspect-ratio: 1.1;
    box-shadow: 0em 1em 1em -.5em rgba(0,0,0,.3), 0em 0em 1.2em 1em rgba(0,0,0,.4) inset;
    border: 2px solid grey;
    position: relative;
    
    .image{
      width: 120px;
    }
  `}
  /***Opener Installation Images ***/
  ${props => props.NewOpener && css` 
      border-radius: 1em;
      overflow: hidden; 
      aspect-ratio:.8;
      background:red; 
      position: relative;
      z-index: 2;
      box-shadow: 1em 1em 2em .5em rgba(0,0,0,.2);

      .Image-Fit{
        position:absolute;
        width:100%;
        height:100%;
      }  
      &.down{
        transform: translateY(7em);
      }
      &.up{
        transform: translateY(-7em);
      }
      @media ${({theme}) => theme.sizes.mobile}{
        border-radius:.5em;
        &.down{
          transform: translateY(1em);
        }
        &.up{
          transform: translateY(-1em);
        }
      }
  `}
  ${props => props.OpenerPng && css`
    position: relative;
    z-index:1;
    justify-self:stretch;
    align-self:center;
    transform: scale(.8);
    filter: drop-shadow(1em 1em .5em rgba(0,0,0,.1));

    :before{
      content: '';
      position: absolute;
      z-index:0;
      width:100%;
      height:100%;
      top: 0;
      left:0;
      background:${({theme}) => theme.colors.primaryblue_shade};
      border-radius:  50%;
      opacity: .2;
      filter: blur(2em);
      transform: scale(1.3);
    }
  `}
  ${props => props.SymptomsImage && css`
    position: relative;
    width: 100%;
    height:100%;
    scale: 1.1;
    display:none;
   .image-fit{
      position:absolute;
      height:100%;
      width: 100%;
   }

   @media ${({theme}) => theme.sizes.largeTablet}{
    aspect-ratio: 16/9;
    scale:1;
    border-radius:1em;
    overflow:hidden;
   }
  `}

  ${props => props.GenieImage && css`
    position:relative;
    justify-self:stretch;
    align-self: stretch;

    .genie{ 
      mix-blend-mode: screen;
      opacity: .4;
      position: absolute;
      right:0;
      top:0;
      width:100%;
      transform: translate(0%,10%) scale(1.3);

      @media ${({theme}) => theme.sizes.desktop}{
        transform: translate(0%,20%) scale(1.5);
      }
      @media ${({theme}) => theme.sizes.largeTablet}{
        transform: translate(25%,20%) scale(1.5);opacity: .1;
      }
      @media ${({theme}) => theme.sizes.tablet}{
        transform: translate(20%,30%) scale(1.5);
      }
      @media ${({theme}) => theme.sizes.mobile}{
        transform: translate(15%,calc(60% - 25px * 2)) scale(1.5);
      }
    }
  `}
  /***Spring Replacement Images***/
  ${props => props.BrokenSprings && css`
    position: relative;
    justify-self: stretch;
    align-self: stretch;
    aspect-ratio: 4/2;

    .image-fit{
      position:absolute;
      width:100%;
      height:100%;
    }
    .top-image{
      border-radius: 50% 50% 2em 2em;
      box-shadow: 0em -1.5em 1em -.5em rgba(0,0,0,.23);
    }
    .bottom-image{
      border-radius: 2em 2em 50% 50%;
      box-shadow: 0em 1.5em 1em -.5em rgba(0,0,0,.23);
    }
  `} 
  ${props => props.LearningTheSystemsBackground && css`
    opacity: .4;
  `} 
  ${props => props.SpringCardImage && css`
      width:70%;
      position: relative;
      overflow: hidden;
      :after{
        content: '';
        height:20%;
        width:100%;
        background: ${({theme}) => theme.colors.primaryblue};
        position: absolute;
        bottom:0;
        left:0;
        border-radius:50% 50% 0 0;
        box-shadow: 0em -1.5em 1.3em -1.5em rgba(0,0,0,.3),
                    0em .5em 1em -1.3em rgba(0,0,0,.3) inset;
        
      }
      ${SpringCard}:hover & { 
        .extension{
          transform: translateY(2em) scale(1.05);
        }
        .torsion{
          transform: translateY(2em) scale(.85);
        }
      }
    .extension{
      filter: drop-shadow(.5em -.5em .5em rgba(0,0,0,.32));
      transform: translateY(5em);
      transition: all .5s ease-in-out;
    }
    .torsion{
      transform: scale(.8) translateY(5em);
      filter: drop-shadow(.9em -.5em .5em rgba(0,0,0,.32));
      transition: all .5s ease-in-out;
    }
    @media ${({theme}) => theme.sizes.mobile}{
    .extension{
      transform: translateY(2em);
      filter: drop-shadow(.4em -.2em .3em rgba(0,0,0,.32));
    }
    .torsion{
      transform: scale(.8) translateY(2em); 
      filter: drop-shadow(.5em -.3em .3em rgba(0,0,0,.32));
    }
    }
  `}
  /*Commercial Images*/
  ${props => props.TrustPros && css` 
    position:relative;
    aspect-ratio: 6/2;
    overflow:hidden;
   
    :after{
      width:100%;
      height:100%;
      content:'';
      position:absolute;
      background-image: linear-gradient(hsla(213,81%,21%,1),hsla(213,81%,21%,.1))
    }
    .image-fit{
      position: absolute;
      width:100%;
      height: 100%;
    }
    @media ${({theme}) => theme.sizes.largeTablet}{
      aspect-ratio: 16/9;
      height:100%;
    }
    @media ${({theme}) => theme.sizes.tablet}{
      aspect-ratio: 1.5;
      height:100%;
    }
  `}

  ${props => props.GalleryImage && css` 
      flex: 1 1 20%;
      min-width: 200px;
      border-radius: .5em;
      overflow: hidden;
      box-shadow: 0em 1em 1em -.5em rgba(0,0,0,.33);
      
     
  @media ${({theme}) => theme.sizes.hover}{ 
    transition: all 1s ease-in-out;
    .image{
      transition: all 1s ease-in-out;
    }
    :hover {
      flex: 2 1 17%;
      .image{
        transform: scale(1.2);
      }
    }
  }
 
  @media ${({theme}) => theme.sizes.tablet}{
      flex: 1 1 25%;
  }
  @media ${({theme}) => theme.sizes.mobile}{
      flex: 1 1 25%;
      min-width: 110px;
  }
  `}
  /***Areas-Serviced Images***/
  ${props => props.AreasImage && css` 
      width: 100%;
      position: relative;
      border-radius: 2em;
      overflow:hidden;
      filter:blur(.5px);
      aspect-ratio: 2.5;
      box-shadow: 0em 2em 2em -.5em rgba(0,0,0,.3);
      
      .image-fit{
        position:absolute;
        width:100%;
        height:100%;
      }
  `}
  /***About-Us Images***/
  ${props => props.OwnerImage && css` 
      justify-self: center;
      align-self:center;
      width:100%;
      height:auto;
  `}
  ${props => props.AssuranceImage && css` 
     width: 120px;
     height: 120px;
     aspect-ratio: 1/1;
  `}
  ${props => props.BigTextImage && css` 
     position: relative;
     z-index: 2;
  `}
  /* General ImageStyles*/
  ${props => props.LargeImage && css` 
    position: relative;
    aspect-ratio: 4/3;
    width:100%;
    justify-self: center;
    align-self:stretch;
    box-shadow: 0 1em 1em rgba(0,0,0,.33),
                0 1.5em 1.5em rgba(0,0,0,.22);
    border: 16px solid white;
    .image-fit{
      position:absolute;
      width:100%;
      height:100%;
    }
    @media ${({theme}) => theme.sizes.mobile}{
      box-shadow: 0 1em 1em rgba(0,0,0,.33),
                0 1.5em 1.5em rgba(0,0,0,.22);
    border: 8px solid white;
    }
  `}
  ${props => props.SmallImage && css` 
    position: relative;
    aspect-ratio: 3/2;
    justify-self: center;
    align-self:center;
    width:100%;
    box-shadow: 0 .5em .5em rgba(0,0,0,.33),
                0 1em 1em rgba(0,0,0,.22);
    border: 16px solid white;
    .image-fit{
      position:absolute;
      width:100%;
      height:100%;
    } 
    @media ${({theme}) => theme.sizes.mobile}{
      box-shadow: 0 .5em .5em rgba(0,0,0,.33),
                0 1em 1em rgba(0,0,0,.22);
      border: 8px solid white;
    }
  `}
  ${props => props.ContactUsImage && css`
    position:relative;
    overflow:hidden;
    scale: 1;
    height:165%;
    transform:translateY(-5em);
    
    :after{
      content:'';
      position:absolute; 
      z-index:2;
      left:0;
      top:0;
      width:100%;
      height:100%;
      background-image: linear-gradient(to right,${({theme}) => theme.colors.body},hsla(0,100%,100%,.1));
    }

   .full-width{
    position:absolute;
    width:100%;
    height:100%;
   } 

   @media ${({theme}) => theme.sizes.largeTablet}{
    :after{
      background-image: linear-gradient(to bottom, ${({theme}) => theme.colors.body},hsla(0,100%,100%,.1));
    }
    height:100%;
    width: 100%;
    aspect-ratio: 3/2;
    scale:1;
    transform: translateY(0);
   }
   @media ${({theme}) => theme.sizes.tablet}{
    :after{
      background-image: linear-gradient(to bottom, ${({theme}) => theme.colors.body},hsla(0,100%,100%,.1));
    }
    height:100%;
    width: 100%;
    aspect-ratio: 4/4;
   }
   
   @media ${({theme}) => theme.sizes.mobile}{
    :after{
      background-image: linear-gradient(to bottom,${({theme}) => theme.colors.body},hsla(0,100%,100%,.1));
    }
    
    height:100%;
    width: 100%;
    aspect-ratio: 1/1;
    scale: 1;
   }
  `}
  ${props => props.FullWidth && css`
      width:100%;
      position:relative;
      transform: scale(1.3);
      filter: blur(3px);
      background: ${({theme}) => theme.colors.primaryblue};
      
      &.no-blur{
        filter: blur(0px);
        transform: scale(1.2);
        height: 105%;
      }
      
      .fullWidth{
        position:absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
      }
      .colored-overlay{
        
        :after{
          content: '';
          position:absolute;
          height:100%;
          width: 100%;
          top:0;
          left:0;
          z-index: 1;
          background-image:linear-gradient(to bottom, hsla(213,81%,21%,1) 20%,hsla(213,81%,21%,0) 50% , hsla(213,81%,21%,1)90%);
        }
      } 
      .img-style{
          mix-blend-mode: multiply;
        }
  `} 
  ${props => props.ImagePanelSmall && css`
      border-radius: 1em;
      overflow: hidden;
      position: relative;
      width:100%;
      justify-self:center;
      align-self:center;
      box-shadow: 0em 1em 1em 0em rgba(0,0,0,.22),
                  0em .5em .5em 0em rgba(0,0,0,.33); 
      aspect-ratio:4/3;
      
      .image-fit{
        position:absolute;
        width:100%;
        height:100%;
      }
      
      @media ${({theme}) => theme.sizes.tablet}{
        aspect-ratio: 4/2;
        border-radius: .5em;
        &.left-image{
          border-radius: 0em .5em .5em 0em;
          box-shadow:none;
        }
        &.right-image{
          border-radius: .5em 0em 0em .5em;
          box-shadow: none;
        }
      }
  `} 
  ${props => props.ImagePanelLarge && css`
      border-radius: 1em;
      overflow: hidden;
      position: relative;
      justify-self:center;
      width:100%;
      box-shadow: 0em 1em 1em 0em rgba(0,0,0,.22),
                  0em .5em .5em 0em rgba(0,0,0,.33);
      aspect-ratio: 4/3;
      .image-fit{
        position:absolute;
        width:100%;
        height:100%;
      }
      @media ${({theme}) => theme.sizes.tablet}{
        aspect-ratio: 4/2;
        border-radius: .5em;
      }
  `}
  ${props => props.SingleImage  && css`
      border-radius: 1em;
      overflow:hidden;
      box-shadow: 0em .5em .5em rgba(0,0,0,.33), 0em 1em 1em rgba(0,0,0,.22);
      position:relative;
      justify-self: center;
      align-self:stretch;
      aspect-ratio:4/2.5;
      height: 100%;
      width: 100%;
      
      .image-fit{
        aspect-ratio: 4/2;
        position: absolute;
        height: 100%;
        width: 100%;
      }
      &.no-shadow{
        box-shadow: none;
      }
  `}
  ${props => props.ServiceImage  && css`
      overflow:hidden;
      width: 100%;
      height:100%;
      position:relative;
      aspect-ratio:4/4;
      flex: 1 1 50%;
      border-radius: .5em;
      
      .image-fit{
        position:absolute;
        width:100%;
        height:100%;
      }

      @media ${({theme}) => theme.sizes.desktop}{
        flex: 1 1 80%;
        aspect-ratio: 1.8;
      } 
      @media ${({theme}) => theme.sizes.largeTablet}{
        flex: 1 1 50%;
        aspect-ratio: 1.8;
      } 
      @media ${({theme}) => theme.sizes.tablet}{
        flex: 1 1 20%;
        aspect-ratio: 1;
      }
      @media ${({theme}) => theme.sizes.mobile}{
        flex: 1 1 10%;
        aspect-ratio: 1.5;
      }
  `} 
  ${props => props.FormBackground  && css`
      width: 100%;
      position:relative;
      transform: translateY(-4%) scaleY(1.2);
      border-radius: 50% 0 0 50%;
      overflow-x: hidden;
      height:110%;
      
      .image-fit{
        position:absolute;
        width:100%;
        height:100%;
      }
      @media ${({theme}) => theme.sizes.largeTablet}{
        transform: translateY(0%) scaleY(1);
        height:100%;
      }
  `}
  ${props => props.NavigationMenuLogo && css`
      position:relative;
      justify-self: stretch;
      align-self: stretch;
      height:100%;
      width:100%;
      z-index: 50;
      opacity: .1;
      


      .image-scale{
        scale: 1.2;
        position:absolute;
        width:100%;
        height:100%;
      }
  `}



  @media ${({theme}) => theme.sizes.largeDesktop}{
    grid-row: ${props => props.XLR};
    grid-column: ${props => props.XLC};
  }
  @media ${({theme}) => theme.sizes.desktop}{
    grid-row: ${props => props.LR};
    grid-column: ${props => props.LC};
  }
  @media ${({theme}) => theme.sizes.largeTablet}{
    grid-row: ${props => props.MR}; 
    grid-column: ${props => props.MC}; 
  }
  @media ${({theme}) => theme.sizes.tablet}{
    grid-row: ${props => props.SR};
    grid-column: ${props => props.SC};
  }
  @media ${({theme}) => theme.sizes.mobile}{
    grid-row: ${props => props.XSR};
    grid-column: ${props => props.XSC};
  }

`