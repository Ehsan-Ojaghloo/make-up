import React, { useState, createContext } from 'react'

export const nameContext = createContext()

const nameProvider = ({ children }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [delAcc, setDelAcc] = useState(false);

    // const [isLogin , setIsLogin] = useState(false)

    return (
        <nameContext.Provider value={{ name, setName, email, setEmail, password, setPassword, delAcc, setDelAcc }}>
            {children}
        </nameContext.Provider>
    )

}

export default nameProvider;