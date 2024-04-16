import { THEMETOGGLE } from "./Actions";


const reducer = (state,action) => {
    if(action.type === THEMETOGGLE){
        const theme = state.theme === "light" ? "dracula" : "light";
        localStorage.setItem("theme",theme);
        document.documentElement.setAttribute("data-theme",theme);
        return {...state,theme:theme}
    }
}

export default reducer