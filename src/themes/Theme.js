export const mainTheme = {
  colors: {
    primaryblue:'hsl(213,81%,21%)',
    primaryblue_shade:'hsl(213,37%,37%)',
    accentred:'hsl(344,75%,36%)',
    accentredshade:'hsl(344,75%,40%)',
    accentredlink:'hsl(344,75%,50%)',
    headlinered:'hsl(344,75%,60%)',
    headlineblue:'hsl(213,22%,64%)',
    grey:'hsl(0,0%,25%)',
    lightgrey:'hsl(0,0%,45%)',
    formInput: 'hsl(0,0%,85%)',
    body: 'hsl(0,0%,98.5%)',
    white:'hsl(0,0%,100%)',
    bluegradient:'linear-gradient(to bottom,hsla(213,81%,21%,1),hsla(213,81%,21%,.50),hsla(213,81%,21%,1))',
    calmbluegradient:'linear-gradient(180deg, hsla(213,81%,21%,1) 0%, hsla(213,37%,37%,1) 100%)',
  },
  fonts: {
    headline:`'Orbitron', sans-serif`,
    body:"good-headline-web-pro-wide, sans-serif",
    mono:"t26-carbon, monospace",
  },
  fontSize:{
    giga: "6em",
    mega: "5em",
    kilo:'3.812rem',
    h1:'3.062rem',
    h2:'2.438rem',
    h3:'1.938rem',
    h4:'1.562rem',
    h5:'1.250rem',
    milli:'1.125rem',
    micro:'1rem',
    nano:'.812rem'
  },
  fontweight: {
    regular:'500',
    medium:'700',
    bold:'900',
  },
  lineheight: {
    loose:'1.75',
    normal:'1.5',
    dense:'1.25'
  },
  sizes: {
    largeDesktop:'only screen and (min-width:1920px)',
    desktop:'only screen and (max-width:1920px)',
    largeTablet:'only screen and (max-width:1024px)',
    tablet:'only screen and (max-width:768px)',
    mobile:'only screen and (max-width:430px)',
    hover:'(hover:hover)',
    no_hover:'(hover:none)'
  },
  letterSpacing:{
    wide:'.5px',
    normal:'.3px',
    tight:'.225px' 
  },
  fontCasing: {
    upper:'uppercase',
    capitals:'capitalize'
  },
  grid: {
    largeDesktop:'minmax(3em,1fr) repeat(12,minmax(auto,6em)) minmax(3em,1fr)',
    desktop:'minmax(3em,1fr) repeat(12,minmax(auto,6em)) minmax(3em,1fr)',
    largeTablet:'minmax(2em,1fr) repeat(8,minmax(auto,6em)) minmax(2em,1fr)',
    tablet:'2em repeat(6,auto) 2em',
    mobile:'1em repeat(4,auto) 1em'
  },
  gridGap:{
    wide:'2em',
    normal:'1em',
    tight:'.5em'
  },
  flexGap:{
    wide:'3em',
    normal:'2em',
    tight:'1em',
  },
  spacing:{
    xxl:'4em',
    large:'3em',
    medium:'2em',
    small:'1.5em',
    tight:'1em'
  },
  buttonPadding:{
    large:'1.5em 2em',
    small:'1em 1.5em'
  }
}