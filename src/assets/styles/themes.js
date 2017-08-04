import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const green        = '#00AA86'
export const red          = '#D32F2F'
export const darkRed      = '#C1272D'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'
export const transparent  = 'rgba(0, 0, 0, 0)'
export const fullBlack    = 'rgba(0, 0, 0, 1)'
export const darkBlack    = 'rgba(0, 0, 0, 0.87)'
export const lightBlack   = 'rgba(0, 0, 0, 0.54)'
export const green200     = '#a5d6a7'
export const lightGreen100 = '#dcedc8'
export const grey600       = '#757575';
export const grey700       = '#616161';


// Palette
export const palette = {
  primary1Color: green,
  primary2Color: grey600,
  primary3Color: green,
  accent1Color: green,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
