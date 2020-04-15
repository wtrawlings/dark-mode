import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
        //explain JSON.parse this is getting the item out of the window.localStorage
    });
    const setValue = value => {
        //save state
        setStoredValue(value);
        //save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
        //JSON.stringify (this is going TO the window.localStorage)
    }
    return [storedValue, setValue]
}

export default useLocalStorage;
