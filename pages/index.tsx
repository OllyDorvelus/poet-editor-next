import type { NextPage } from 'next'
import React, { useState } from 'react';
import type { Phrase } from '@/types/type'
import { getRhymes } from '@/routes/datamuse';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';


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
    <div className={styles.container}>
      <h1>Poet Editor</h1>
      {
        // props.rhymes.map(phrase => (<h1 key={phrase.id}>{phrase.word}</h1>))
      }
      <Button onClick={handleClick} variant="contained">Button</Button>
    </div>
  )
}

export default Home