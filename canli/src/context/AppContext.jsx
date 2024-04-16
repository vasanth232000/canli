import { createContext, useContext, useReducer } from "react";
import { THEMETOGGLE } from "../management/Actions";
import Reducers from "../management/Reducers";

const AppContext = createContext();

const themes = {
    light: "light",
    dracula: "dracula",
  };

const getThemeFromLocalStorage = () =>{
    const theme = localStorage.getItem("theme") || themes.light;
    document.documentElement.setAttribute("data-theme",theme);
    return theme;
}

const intialState = {
    theme : getThemeFromLocalStorage()
}



export const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(Reducers,intialState);
    const themeToggle = () => {
        dispatch({type : THEMETOGGLE});
    }
    return(
        <AppContext.Provider value={{...state,themeToggle}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);