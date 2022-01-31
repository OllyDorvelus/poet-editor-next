export type Phrase = {
    id: Number;
    word: String;
}

export type IncomingPhraseFromRhymes = {
    word: String,
    score: Number,
    numSyllables: Number,
}

export type IncomingPhraseFromNyms = {
    id: Number,
    word: String,
    score: Number,
}