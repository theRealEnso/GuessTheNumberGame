import { createContext, useState, FC, ReactNode } from "react";

type NumberProviderProps = {
    children: ReactNode;
};

type NumberContextType = {
    number: string;
    setNumber: React.Dispatch<React.SetStateAction<string>>;
    guessedNumber: number | null;
    setGuessedNumber: React.Dispatch<React.SetStateAction<number | null>>;
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
    guessedNumber: null,
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
    const [guessedNumber, setGuessedNumber] = useState<number | null>(null);
    const [guessCount, setGuessCount] = useState<number>(0);
    const [guessedList, setGuessedList] = useState<number[]>([]);
    const [hintMessage, setHintMessage] = useState<string>("");

    // function to generate a random number, then set state of the guessed number and append it to the guessedList array
    // update function so that it sets default values as min and max to be minBoundary and maxBoundary, respectively. So, if function is used without any values passed to it, then it will default to using `minBoundary` and `maxBoundary`. However, if values are passed to it, then it will execute with those specific values for that specific function call. This is to get around potential issue of the function using stale / unupdated state values in the game-screen component if setMinBoundary and setMaxBoundary doesn't update the state in time with new values before this function gets executed
    const generateGuessedNumber = (min = minBoundary, max = maxBoundary) => {
        let randomNumber: number;

        // modify function to check the random number that is generated against the values already contained in guessedList. Loop will keep running while generated number already exists in guessed lists, and breaks when condition is false
        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        } while (guessedList.includes(randomNumber));

        setGuessedNumber(randomNumber);
        setGuessCount((previousCount) => previousCount + 1);
        setGuessedList((previousList) => [...previousList, randomNumber]);
    };

    // function to reset game and inputs
    const reset = () => {
        setNumber("");
        setMinBoundary(0);
        setMaxBoundary(99);
        setGuessedNumber(null);
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