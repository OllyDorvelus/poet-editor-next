import React, { useState, ReactElement, createContext } from 'react';
import { Phrase } from '@/types/type';

interface IWordContext {
    rhymes: Phrase[];
    setRhymes: Function;
}

const defaultState = {
    rhymes: [],
    setRhymes: () => { },
}

type props = {
    children: React.ReactNode;
}

export const WordContext = createContext<IWordContext>(defaultState);

export const WordProvider = ({ children }: props): JSX.Element => {
    const [rhymes, setRhymes] = useState<Phrase[]>([])
    const [synonyms, setSynonyms] = useState<Phrase[]>([])
    const [antonyms, setAntonyms] = useState<Phrase[]>([])

    return (
        <WordContext.Provider value={{
            rhymes,
            setRhymes
        }}>
            {children}
        </WordContext.Provider>
    );
}

