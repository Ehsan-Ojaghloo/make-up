import React, { useState, createContext } from 'react'

export const nameContext = createContext()

const nameProvider = ({ children }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [delAcc, setDelAcc] = useState(false);
    
    const [addCart, setAddCart] = useState([]);

    const [isCart, setIsCart] = useState(false);

    return (
        <nameContext.Provider value={{ name, setName, email, setEmail, password, setPassword, delAcc, setDelAcc, addCart, setAddCart, isCart, setIsCart}}>
            {children}
        </nameContext.Provider>
    )

}

export default nameProvider;