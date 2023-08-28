export const setUser = (username) => {
    localStorage.setItem("user",username)
}

export const getUser = () => {
    const user = localStorage.getItem('user');
    if (user === null) {
        return "";
    }else return JSON.stringify(user);
}