// import type { NextPage } from 'next'
import React, { useState } from 'react';
import { Phrase } from '@/types/type';
import { getRhymes } from '@/routes/datamuse';
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import Editor from '@/components/editor';
import Sidebar from '@/components/sidebar';


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
      <div className={styles.container}>
        <div className={styles['editor-container']}>
          <Editor />
        </div>
      </div>
      <Sidebar />
      <Button onClick={handleClick} variant="contained">Button</Button>
    </>
  )
}

export default Home