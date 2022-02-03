// import type { NextPage } from 'next'
import React, { useState } from 'react';
import { Phrase } from '@/types/type';
import { getRhymes } from '@/routes/datamuse';
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import Editor from '@/components/Editor';
import Sidebar from '@/components/Sidebar';


const Home = (props: {}) => {

  const [rhymes, setRhymes] = useState<Phrase[]>([])
  const [synonyms, setSynonyms] = useState<Phrase[]>([])
  const [antonyms, setAntonyms] = useState<Phrase[]>([])

  const handleClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const rhymes = await getRhymes('fun')
    console.log('rhymes', rhymes)
    setRhymes(rhymes);
  }

  return (
    <>
      <section className={styles.container}>

        <div className={styles.column}>
          <ul>
            <li>Example 1</li>
            <li>Example 2</li>
            <li>Example 3</li>
            <li>Example 4</li>
          </ul>
        </div>

        <div className={styles.column}>
          <div className={`${styles['editor-container']}`}>
            <Editor />
          </div>
        </div>

        <div className={styles.column}>
          <h1>Hello</h1>
        </div>

      </section>
    </>
  )
}

export default Home