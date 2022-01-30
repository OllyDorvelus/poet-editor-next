import axios from 'axios';
import { Word, IncomingWordFromRhymes } from '@/types/type';
const API_URL = `${process.env.DATAMUSE_API_URL}/words?`;

export async function getRhymes(phrase: String): Promise<Word[]> {
    try {
        const url = `${API_URL}/rel_rhy=${phrase}`;
        console.log('url', url);
        const res = await axios.get<IncomingWordFromRhymes[]>(`${API_URL}rel_rhy=${phrase}`)
        return res.data.map((incomingWord, idx) => ({ id: idx, word: incomingWord.word }))
    } catch (err) {
        return []
    }
}


// async function getAntonyms(phrase: String): Word[] {

// }

// async function getSynonyms(phrase: String): Word[] {

// }