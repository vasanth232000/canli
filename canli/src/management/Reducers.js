import { THEMETOGGLE } from "./Actions";


const reducer = (state,action) => {
    if(action.type === THEMETOGGLE){
        const theme = state.theme === "light" ? "night" : "light";
        document.documentElement.setAttribute("data-theme",theme);
        localStorage.setItem("theme",state.theme);
        return {...state,theme:theme}
    }
}

export default reducer