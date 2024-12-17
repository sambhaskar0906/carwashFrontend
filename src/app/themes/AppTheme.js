
import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const AppTheme = createTheme({
    breakpoints: {
        values: {

            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1368,
            xxl: 1980
        }
    },

    palette: {
        mode: 'light',
        primary: {
            // main: '#ff0004'
            // main: colors.deepPurple[500]
            //main: colors.grey[500]
            // main: colors.teal[500]
            // main: colors.green[500]
            main: colors.indigo[500]
        },
        secondary: {
            main: colors.deepPurple[500]
        },
        info: {
            main: colors.indigo[700]
        },
        common: {
            black: '#000',
            white: '#fff',
            success: '#76ff03',
            error: '#f44336'
        }
    },
    spacing: 8,
    shape: {
        borderRadius: 3
    },
    mixins: {
        toolbar: {
            minHeight: 56
        }
    }
});

export default AppTheme
