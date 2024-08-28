const getTokenFromLocalStorage=localStorage.getItem("user")?localStorage.getItem("user"):null;
export const config={
    headers:{
        Authorization:`Bearer ${getTokenFromLocalStorage!==null?getTokenFromLocalStorage?.token:""}`,
        Accept:"application/json"
    }
}