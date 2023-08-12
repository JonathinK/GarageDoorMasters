import styled, {css} from "styled-components";
import { FacebookSquare, Google } from "@styled-icons/boxicons-logos";
import { Phone, CheckShield } from "@styled-icons/boxicons-solid";
import { HomeSmile } from "@styled-icons/boxicons-regular";
import { Contentful, Gatsby } from '@styled-icons/simple-icons';
import { PeopleTeam, BookClock,Handshake, ShieldTask,Clock } from "styled-icons/fluentui-system-filled"; 
import { Tools, LocationPin, Star, Network} from "@styled-icons/entypo";



export const FacebookIcon = styled(FacebookSquare)`
  width: 20px;
  height: auto;
  aspect-ratio: 1/1;
  color: ${({theme}) => theme.colors.white};
`
export const GoogleIcon = styled(Google)`
  width: 20px;
  height:auto;
  aspect-ratio: 1/1;
  color: ${({theme}) => theme.colors.white};
`
export const ReviewStar = styled(Star)`
  color: gold;
  width: 16px;
  height: auto;
  aspect-ratio:1/1;
  filter: drop-shadow( 1px 1px 1px rgba(0,0,0,.22));
`
export const NetworkIcon = styled(Network)`
  width: 20px;
  height:auto;
  aspect-ratio: 1/1;
  color: ${({theme})=> theme.colors.white};
`
export const PhoneIcon = styled(Phone)`
  width: 20px;
  height:auto;
  aspect-ratio: 1/1;
  color: ${({theme})=> theme.colors.white};
  
  ${props => props.alt && css`
    color: ${({theme})=> theme.colors.grey};
    width: 2em;
  `}
`
export const LocationIcon = styled(LocationPin)`
  width: 15px;
  height:auto;
  aspect-ratio: 1/1;
  color: ${({theme})=> theme.colors.white};
  
  ${props => props.alt && css`
    color: ${({theme})=> theme.colors.grey};
    width: 2em;
  `}
`
export const ClockIcon = styled(Clock)`
  width: 15px;
  height:auto;
  aspect-ratio: 1/1;
  color: ${({theme})=> theme.colors.white};
  
  ${props => props.alt && css`
    color: ${({theme})=> theme.colors.grey};
    width: 2em;
  `}
`
export const GatsbyIcon = styled(Gatsby)`
  width:18px;
  height: auto;
  color: ${({theme}) => theme.colors.white};
`
export const ContentfulIcon = styled(Contentful)`
  width: 18px;
  height: auto;
  color: ${({theme}) => theme.colors.white};
`
export const ExperienceIcon = styled(CheckShield)` 
  width: 100px;
  height: auto;
  aspect-ratio: 1/1;
  color: ${({theme}) => theme.colors.accentred};
  filter:  drop-shadow(0em .3em .2em rgba(0,0,0,.4));
`
export const CustomerServiceIcon = styled(HomeSmile)`
  width: 100px;
  height: auto;
  aspect-ratio: 1/1;
  color: ${({theme}) => theme.colors.accentred};
  filter:  drop-shadow(0em .3em .2em rgba(0,0,0,.4));
`
export const FriendlyIcon = styled(Handshake)` 
  width: 100px;
  height: auto;
  aspect-ratio: 1/1;
  color: ${({theme}) => theme.colors.accentred};
  filter:  drop-shadow(0em .3em .2em rgba(0,0,0,.4));
`
export const HighQualityIcon = styled(Tools)` 
  width: 100px;
  height: auto;
  aspect-ratio: 1/1;
  color: ${({theme}) => theme.colors.accentred};
  filter:  drop-shadow(0em .3em .2em rgba(0,0,0,.4));
`
export const PromptTimingIcon = styled(BookClock)` 
  width: 100px;
  height: auto;
  aspect-ratio: 1/1;
  color: ${({theme}) => theme.colors.accentred};
  filter:  drop-shadow(0em .3em .2em rgba(0,0,0,.4));
`
export const FamilyOwnedIcon = styled(PeopleTeam)` 
  width: 100px;
  height: auto;
  aspect-ratio: 1/1;
  color: ${({theme}) => theme.colors.accentred};
  filter:  drop-shadow(0em .3em .2em rgba(0,0,0,.4));
`
export const GotYouShieldIcon = styled(ShieldTask)`

`