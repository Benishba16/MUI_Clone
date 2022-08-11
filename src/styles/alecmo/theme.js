import {createTheme} from "@mui/material";
import LexendLatinWoff2 from "../../assets/font/Lexend/lexend_latin.woff2";
import LexendLatinExtWoff2 from "../../assets/font/Lexend/lexend_latin_ext.woff2";
import LexendVietnameseWoff2 from "../../assets/font/Lexend/lexend_vietnamese.woff2";
import {default as CheckBoxOnIcon} from "../../assets/images/checkboxOn";
import {default as CheckBoxOffIcon} from "../../assets/images/checkBoxOff";
import {default as CheckBoxIntIcon} from "../../assets/images/checkBoxInt";
import {default as RadioOffIcon} from "../../assets/images/radioOff";
import {default as RadioCheckedIcon} from "../../assets/images/radioChecked";

const light_theme = createTheme({
    palette: {
        primary: {
            main: "#33BC7E",
            contrastText: "#fff"
        },
        secondary: {
            main: "rgba(51, 188, 126, 0.12)",
            // main: "#daffef",
            contrastText: "#2EA871"
        }
    },
    typography: {
        fontFamily: [
            'Lexend',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
        ].join(', ')
    },
    overrides: {
        MuiButton: {
            raisedPrimary: {
                color: "#fff"
            },
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    height: "36px"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                        },
                    },
                }
            },
            defaultProps: {
                inputProps: {
                    style: {
                        fontSize: "14px"
                    }
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                icon: CheckBoxOffIcon(22, 22),
                checkedIcon: CheckBoxOnIcon(22, 22, "#33BC7E"),
                indeterminateIcon: CheckBoxIntIcon(22, 22, "#33BC7E")
            }
        },
        MuiRadio: {
            defaultProps: {
                icon: RadioOffIcon(22, 22),
                checkedIcon: RadioCheckedIcon(22, 22, "#33BC7E")
            }
        },
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 100;
                  font-display: swap;
                  src: url(${LexendVietnameseWoff2}) format('woff2');
                  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 100;
                  font-display: swap;
                  src: url(${LexendLatinExtWoff2}) format('woff2');
                  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 100;
                  font-display: swap;
                  src: url(${LexendLatinWoff2}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 200;
                  font-display: swap;
                  src: url(${LexendVietnameseWoff2}) format('woff2');
                  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 200;
                  font-display: swap;
                  src: url(${LexendLatinExtWoff2}) format('woff2');
                  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 200;
                  font-display: swap;
                  src: url(${LexendLatinWoff2}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 300;
                  font-display: swap;
                  src: url(${LexendVietnameseWoff2}) format('woff2');
                  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 300;
                  font-display: swap;
                  src: url(${LexendLatinExtWoff2}) format('woff2');
                  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 300;
                  font-display: swap;
                  src: url(${LexendLatinWoff2}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url(${LexendVietnameseWoff2}) format('woff2');
                  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url(${LexendLatinExtWoff2}) format('woff2');
                  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url(${LexendLatinWoff2}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url(${LexendVietnameseWoff2}) format('woff2');
                  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url(${LexendLatinExtWoff2}) format('woff2');
                  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url(${LexendLatinWoff2}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 600;
                  font-display: swap;
                  src: url(${LexendVietnameseWoff2}) format('woff2');
                  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 600;
                  font-display: swap;
                  src: url(${LexendLatinExtWoff2}) format('woff2');
                  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 600;
                  font-display: swap;
                  src: url(${LexendLatinWoff2}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url(${LexendVietnameseWoff2}) format('woff2');
                  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url(${LexendLatinExtWoff2}) format('woff2');
                  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url(${LexendLatinWoff2}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 800;
                  font-display: swap;
                  src: url(${LexendVietnameseWoff2}) format('woff2');
                  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 800;
                  font-display: swap;
                  src: url(${LexendLatinExtWoff2}) format('woff2');
                  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 800;
                  font-display: swap;
                  src: url(${LexendLatinWoff2}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 900;
                  font-display: swap;
                  src: url(${LexendVietnameseWoff2}) format('woff2');
                  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 900;
                  font-display: swap;
                  src: url(${LexendLatinExtWoff2}) format('woff2');
                  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                
                @font-face {
                  font-family: 'Lexend';
                  font-style: normal;
                  font-weight: 900;
                  font-display: swap;
                  src: url(${LexendLatinWoff2}) format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
            `,
        }
    }
});

export const LightTheme = light_theme
