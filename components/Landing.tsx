import React, { ReactElement, useContext, useState } from 'react'
import { WordContext } from '@/context/WordContext'
import { Phrase } from '@/types/type';
import { getRhymes } from '@/routes/datamuse';
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import Editor from '@/components/Editor';
import Sidebar from '@/components/Sidebar';


type Props = {}

export default function Landing({ }: Props): ReactElement {
  const { rhymes, setRhymes } = useContext(WordContext);
  // const [synonyms, setSynonyms] = useState<Phrase[]>([])
  // const [antonyms, setAntonyms] = useState<Phrase[]>([])

  const handleClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const incomingRhymes = await getRhymes('fun');
    console.log('rhymes', incomingRhymes);
    setRhymes!(incomingRhymes);
  }

  return (
    <section className={styles.container}>
      <button onClick={handleClick}>Test</button>
      <h1>{rhymes.length}</h1>

      <div className={styles.column}>
        <div className={`${styles['editor-container']}`}>
          <Editor />
        </div>
      </div>

      {/* <div className={styles.column}>
          <h1>Hello</h1>
        </div> */}

    </section>
  )
}

