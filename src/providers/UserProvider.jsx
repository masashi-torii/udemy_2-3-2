import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const { children } = props;

    const [userInfo, setUserInfo] = useState(null);
    return(
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}