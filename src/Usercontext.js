import { createContext } from "react";

 export const UserContext = createContext();

 export const UserProvider = ({ children }) => {
    const a = 5;
    return <UserContext.Provider value={a}>{children}</UserContext.Provider>
 };

