import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        setUserData: user => {
          setUserInfo(user);
        },
      }}>
      {children}
    </UserContext.Provider>
  );
};
