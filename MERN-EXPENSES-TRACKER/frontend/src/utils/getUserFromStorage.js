export const getUserFromStorage = () => {
   const token =  JSON.parse(localStorage.getItem("userInfo.token") || null);
   return token?.token;
};