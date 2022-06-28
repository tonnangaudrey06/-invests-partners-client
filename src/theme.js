import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        common: { black: "#000", white: "#fff" },
        background: { paper: "#fff", default: "#fafafa" },
        primary: {
            light: "rgba(253, 120, 102, 1)",
            main: "rgba(197, 71, 59, 1)",
            dark: "rgba(142, 16, 20, 1)",
            contrastText: "#fff"
        },
        secondary: {
            light: "rgba(133, 136, 141, 1)",
            main: "rgba(88, 91, 96, 1)",
            dark: "rgba(47, 50, 54, 1)",
            contrastText: "#fff"
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff"
        },
        white: {
            light: "#fff",
            main: "#fff",
            dark: "#d6d5d5",
            contrastText: "rgba(142, 16, 20, 1)"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        }
    },
    typography: {
        fontFamily: "\"Karla\", sans-serif",
        h1: {
            fontFamily: "\"Karla\", sans-serif",
        },
        h2: {
            fontFamily: "\"Karla\", sans-serif",
        },
        h3: {
            fontFamily: "\"Karla\", sans-serif",
        },
        h4: {
            fontFamily: "\"Karla\", sans-serif",
        },
        h5: {
            fontFamily: "\"Karla\", sans-serif",
        },
        h6: {
            fontFamily: "\"Karla\", sans-serif",
        },
        subtitle1: {
            fontFamily: "\"Karla\", sans-serif",
        },
        subtitle2: {
            fontFamily: "\"Karla\", sans-serif",
        },
        body1: {
            fontFamily: "\"Karla\", sans-serif",
        },
        body2: {
            fontFamily: "\"Karla\", sans-serif",
        },
        button: {
            fontFamily: "\"Karla\", sans-serif",
        },
        caption: {
            fontFamily: "\"Karla\", sans-serif",
        },
        overline: {
            fontFamily: "\"Karla\", sans-serif",
        }
    }
});

export default theme;