export const authService = {
    login(token, role){
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
    },

    logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("role")
    },
    getToken(){
        return localStorage.getItem("token");
    },
    getRole(){
        return localStorage.getItem("role");
    },
    isLoggedIn(){
        return !!localStorage.getItem("token");
    }
}