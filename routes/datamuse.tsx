import axios from 'axios';
import { Phrase, IncomingPhraseFromRhymes, IncomingPhraseFromNyms } from '@/types/type';
const API_URL = `https://api.datamuse.com/words?`;

export async function getRhymes(phrase: String): Promise<Phrase[]> {
    try {
        const res = await axios.get<IncomingPhraseFromRhymes[]>(`${API_URL}rel_rhy=${phrase}`)
        return res.data.map((incomingWord, idx) => ({ id: idx, word: incomingWord.word }))
    } catch (err) {
        return []
    }
}

async function getAntonyms(phrase: String): Promise<Phrase[]> {
    try {
        const res = await axios.get<IncomingPhraseFromNyms[]>(`${API_URL}rel_ant=${phrase}`)
        return res.data.map((incomingWord, idx) => ({ id: idx, word: incomingWord.word }))
    } catch (err) {
        return []
    }
}

async function getSynonyms(phrase: String): Promise<Phrase[]> {
    try {
        const res = await axios.get<IncomingPhraseFromNyms[]>(`${API_URL}rel_syn=${phrase}`)
        return res.data.map((incomingWord, idx) => ({ id: idx, word: incomingWord.word }))
    } catch (err) {
        return []
    }
}