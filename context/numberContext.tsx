import { createContext, useState, FC, ReactNode } from "react";

type NumberProviderProps = {
    children: ReactNode;
};

type NumberContextType = {
    number: string;
    setNumber: React.Dispatch<React.SetStateAction<string>>;
    guessedNumber: number;
    setGuessedNumber: React.Dispatch<React.SetStateAction<number>>;
    guessedList: number[],
    setGuessedList: React.Dispatch<React.SetStateAction<number[]>>
    generateGuessedNumber: () => void,
};

export const NumberContext = createContext<NumberContextType>({
    // set default values that only serve as placeholders so that code doesn't crash if they are used outside of a provider
    number: "", // default value is an empty string
    setNumber: () => {}, // default value is a function that does nothing
    guessedNumber: 0,
    setGuessedNumber: () => {},
    guessedList: [],
    setGuessedList: () => {},
    generateGuessedNumber: () => {}
});

export const NumberProvider: FC<NumberProviderProps> = ({children}) => {
    const [number, setNumber] = useState<string>("");
    const [guessedNumber, setGuessedNumber] = useState<number>(0);
    const [guessedList, setGuessedList] = useState<number[]>([]);

    // function to generate a random number, then set state of the guessed number and append it to the guessedList array
    const generateGuessedNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        setGuessedNumber(randomNumber);
        setGuessedList((previousList) => [...previousList, randomNumber]);
    };

    const value = {
        number, 
        setNumber, 
        guessedNumber, 
        setGuessedNumber, 
        guessedList, 
        setGuessedList,
        generateGuessedNumber,
    };

    return <NumberContext.Provider value={value}>{children}</NumberContext.Provider>;
};

// reminder to self:
// `children` is a special prop that includes everything nested inside a component
// Whatever ends up being wrapped inside of NumberProvider in our application is passed to the `children` prop
// => since children (aka whatever ends up being wrapped inside of NumberProvider) is destructured, we then pass whatever value is contained in the `children` prop to the context provider
// => this means that everything that NumberProvider ends up wrapping around gets access to the context provider (NumberContext in this case)