import { createContext, useState, FC, ReactNode } from "react";

type NumberProviderProps = {
    children: ReactNode;
};

type NumberContextType = {
    number: string;
    setNumber: React.Dispatch<React.SetStateAction<string>>;
    guessedNumber: number;
    setGuessedNumber: React.Dispatch<React.SetStateAction<number>>;
    guessCount: number;
    setGuessCount: React.Dispatch<React.SetStateAction<number>>;
    guessedList: number[];
    setGuessedList: React.Dispatch<React.SetStateAction<number[]>>
    generateGuessedNumber: () => void;
    minBoundary: number;
    setMinBoundary: React.Dispatch<React.SetStateAction<number>>;
    maxBoundary: number;
    setMaxBoundary: React.Dispatch<React.SetStateAction<number>>;
    hintMessage: string;
    setHintMessage: React.Dispatch<React.SetStateAction<string>>;
    reset: () => void;
};

export const NumberContext = createContext<NumberContextType>({
    // set default values that only serve as placeholders so that code doesn't crash if they are used outside of a provider
    number: "", // default value is an empty string
    setNumber: () => {}, // default value is a function that does nothing
    guessedNumber: 0,
    setGuessedNumber: () => {},
    guessCount: 0,
    setGuessCount: () => {},
    guessedList: [],
    setGuessedList: () => {},
    generateGuessedNumber: () => {},
    minBoundary: 0,
    setMinBoundary: () => {},
    maxBoundary: 99,
    setMaxBoundary: () => {},
    hintMessage: "",
    setHintMessage: () => {},
    reset: () => {},
});

export const NumberProvider: FC<NumberProviderProps> = ({children}) => {
    const [number, setNumber] = useState<string>("");
    const [minBoundary, setMinBoundary] = useState<number>(0);
    const [maxBoundary, setMaxBoundary] = useState<number>(99);
    const [guessedNumber, setGuessedNumber] = useState<number>(0);
    const [guessCount, setGuessCount] = useState<number>(0);
    const [guessedList, setGuessedList] = useState<number[]>([]);
    const [hintMessage, setHintMessage] = useState<string>("");

    // function to generate a random number, then set state of the guessed number and append it to the guessedList array
    const generateGuessedNumber = () => {
        const randomNumber = Math.floor(Math.random() * (maxBoundary - minBoundary + 1) + minBoundary);
        setGuessedNumber(randomNumber);
        setGuessCount((previousCount) => previousCount + 1);
        setGuessedList((previousList) => [...previousList, randomNumber]);
    };

    // function to reset game and inputs
    const reset = () => {
        setNumber("");
        setMinBoundary(0);
        setMaxBoundary(0);
        setGuessedNumber(0);
        setGuessCount(0);
        setGuessedList([]);
        setHintMessage("");
    };
    

    const value = {
        number, 
        setNumber, 
        guessedNumber, 
        setGuessedNumber,
        guessCount,
        setGuessCount, 
        guessedList, 
        setGuessedList,
        generateGuessedNumber,
        minBoundary,
        setMinBoundary,
        maxBoundary,
        setMaxBoundary,
        hintMessage,
        setHintMessage,
        reset,
    };

    return <NumberContext.Provider value={value}>{children}</NumberContext.Provider>;
};

// reminder to self:
// `children` is a special prop that includes everything nested inside a component
// Whatever ends up being wrapped inside of NumberProvider in our application is passed to the `children` prop
// => since children (aka whatever ends up being wrapped inside of NumberProvider) is destructured, we then pass whatever value is contained in the `children` prop to the context provider
// => this means that everything that NumberProvider ends up wrapping around gets access to the context provider (NumberContext in this case)