import React, { createContext, useState, useContext } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import ErrorModal from "../components/Modal/ErrorModal";



const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {

    const [error, setError] = useState(null);

    return (
        <ErrorContext.Provider value={{ error, setError }}>

            {error ?

                <Modal
                    center
                    focusTrapped={false}
                    open={error}
                    onClose={() => setError(null)}
                >
                    <ErrorModal>
                        <ErrorModal.Title>Erro</ErrorModal.Title>
                        <ErrorModal.Text>Descrição do erro: {error.message}</ErrorModal.Text>
                    </ErrorModal>
                </Modal>
                : null}

            {children}
        </ErrorContext.Provider>
    );
};


// hook
export function useError() {
    const context = useContext(ErrorContext);

    if (!context)
        throw new Error("useError must be used within a ErrorContext.Provider");

    const { error, setError } = context;
    return { error, setError };
}

export default ErrorProvider;