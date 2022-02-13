import React, { ReactElement, useContext, useState } from 'react'
import { WordContext } from '@/context/WordContext'
import { Phrase } from '@/types/type';
import { getRhymes, getSynonyms, getAntonyms } from '@/routes/datamuse';
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import Editor from '@/components/Editor';
import Sidebar from '@/components/Sidebar';


type Props = {}

export default function Landing({ }: Props): ReactElement {
  const { rhymes, synonyms, antonyms, setRhymes, setSynonyms, setAntonyms } = useContext(WordContext);
  const [wordArr, setWordArr] = useState<String[]>([])
  const [content, setContent] = useState<String>('');
  const wholeWordRegEx = RegExp(String.raw`\b\w+\b`, 'g')

  const handleChange = (e: React.BaseSyntheticEvent) => {
    const newContent = e.target.value;
    setWordArr(newContent.match(wholeWordRegEx));
    setContent(newContent);
  };

  const onClickWord = async (word: String) => {
    const incomingRhymes = await getRhymes(word);
    const incomingSynonyms = await getSynonyms(word);
    const incomingAntonyms = await getAntonyms(word);
    setRhymes!(incomingRhymes);
    setSynonyms!(incomingSynonyms);
    setAntonyms!(incomingAntonyms);
  };

  const renderWordList = (): React.ReactNode => {
    return (
      wordArr.map((word: String, idx: number) => (
        <Button size="small" key={idx} variant="text" onClick={() => onClickWord(word)}>{word}</Button>
      ))
    )
  }

  return (
    <section className={styles.container}>

      <div className={styles.column}>
        {
          !!wordArr && !!wordArr.length ? renderWordList() : 'No whole words yet'
        }

      </div>
      <div className={styles.column}>
        <div className={`${styles['editor-container']}`}>
          <Editor handleChange={handleChange} />
        </div>
      </div>
      <div className={styles.column}>
        <h3>Rhymes</h3>
        {
          rhymes.map((phrase: Phrase) => (
            <span key={phrase.id.toString()}>{phrase.word}{" "}</span>
          ))
        }
        <h3>Synonyms</h3>
        {
          synonyms.map(phrase => (
            <span key={phrase.id.toString()}>{phrase.word}{" "}</span>
          ))
        }
        <h3>Antonyms</h3>
        {
          antonyms.map(phrase => (
            <span key={phrase.id.toString()}>{phrase.word}{" "}</span>
          ))
        }
      </div>

    </section>
  )
}

