import { AuthProvider } from "./app/context/AuthContext";
import { SupervisorProvider } from "./app/context/SupervisorContext";
import app from './App.css'
import { Provider } from "react-redux";
import store from "./app/store";
import { useDispatch, useSelector, } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import MainRouter from "./app/routes/MainRouter";
import {
  ThemeProvider
} from "@mui/material";
import AppTheme from "./app/themes/AppTheme";
function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={AppTheme}>
          <MainRouter />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
