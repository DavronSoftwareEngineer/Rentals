import { createTheme } from "@mui/material";
import { blue, grey, indigo } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: grey[50],
            dark: grey[200]
        },
        primary1: {
            main: blue[500],
            dark: blue[600]
        },
        info: {
            main: grey[500],
            dark: grey[600],
        },
        info1: {
            main: indigo[400],
            dark: indigo[600],
        }
    },
    typography: {
        button: {
            color: '#fff',
            textTransform: "none"
        },
        h5: {
            color: "#fff",
        },
    }
  });

export default theme;