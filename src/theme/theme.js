export const mainTheme = {
  colors: {
    primaryblue:'hsl(213,81%,21%)',
    primaryblue_shade:'hsl(213,37%,37%)',
    accentred:'hsl(344,75%,36%)',
    accentredshade:'hsl(344,75%,40%)',
    accentredlink:'hsl(344,75%,50%)',
    headlinered:'hsl(344,75%,45%)',
    headlineblue:'hsl(213,22%,64%)',
    headlinegrey:'hsl(0,0%,75%)',
    white:'hsl(0,0%,100%)',
    bluegradient:'linear-gradient(to bottom,hsla(213,81%,21%,1),hsla(0,0%,100%,0),hsla(213,81%,21%,1))',
  },
  fonts: {
    orbitron:`'Orbitron', sans-serif`,
    goodheadline:"good-headline-web-pro-wide, sans-serif"
  },
  lineheight: {
    loose:'1.75',
    normal:'1.5',
    dense:'1.25'
  },
  sizes: {
    large_desktop:'only screen and (min-width:1920px)',
    desktop:'only screen and (max-width:1920px)',
    large_tablet:'only screen and (max-width:1024px)',
    tablet:'only screen and (max-width:744px)',
    mobile:'only screen and (max-width:430px)',
    hover:'(hover:hover)',
    no_hover:'(hover:none)'
  },
  gridcolumns: {
    desktop: 'minmax(128px,auto) repeat(12,minmax(auto,9rem)) minmax(128px,auto)',
    large_tablet:'minmax(64px,auto) repeat(8,minmax(auto,9rem)) minmax(64px,auto)',
    tablet:'minmax(48px,auto) repeat(6,minmax(auto,9rem)) minmax(48px,auto)',
    mobile:'minmax(32px,auto) repeat(4,minmax(auto,6rem)) minmax(32px,auto)'
  },
}