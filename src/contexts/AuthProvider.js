import React, { Children, createContext, useState } from 'react';

const AuthContext = createContext()

const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    return ( 
        <div>
            <AuthContext.Provider value={{user, setUser}}>{Children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;