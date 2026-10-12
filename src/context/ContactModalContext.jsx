import { createContext, useCallback, useContext, useState } from "react";

// One contact modal for the whole site. Any CTA calls openContact().
const ContactModalContext = createContext(null);

export function ContactModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [interest, setInterest] = useState("");

    const openContact = useCallback((preselectedInterest = "") => {
        setInterest(preselectedInterest);
        setIsOpen(true);
    }, []);

    const closeContact = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <ContactModalContext.Provider value={{ isOpen, interest, openContact, closeContact }}>
            {children}
        </ContactModalContext.Provider>
    );
}

export function useContactModal() {
    const ctx = useContext(ContactModalContext);
    if (!ctx) {
        throw new Error("useContactModal must be used inside <ContactModalProvider>");
    }
    return ctx;
}
