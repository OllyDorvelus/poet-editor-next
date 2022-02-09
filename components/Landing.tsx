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
  const { rhymes, synonyms, antonyms, setRhymes, setSynonyms, setAntonyms } = useContext(WordContext);
  const wordArr = useState<String[]>([])
  const wordText = useState<String>('');

  const handleClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const incomingRhymes = await getRhymes('fun');
    console.log('rhymes', incomingRhymes);
    setRhymes!(incomingRhymes);
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    console.log(e.target.value)
  };

  const onClickWord = (e: React.SyntheticEvent) => {

  };

  return (
    <section className={styles.container}>

      <div className={styles.column}>

      </div>
      <div className={styles.column}>
        <div className={`${styles['editor-container']}`}>
          <Editor handleChange={handleChange} />
        </div>
      </div>
      <div className={styles.column}>

      </div>


      {/* <div className={styles.column}>
          <h1>Hello</h1>
        </div> */}

    </section>
  )
}

