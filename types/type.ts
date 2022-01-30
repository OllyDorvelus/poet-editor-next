export type Word = {
    id: Number;
    word: String;
}

export type IncomingWordFromRhymes = {
    word: String,
    score: Number,
    numSyllables: Number,
}