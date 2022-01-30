import type { NextPage } from 'next'
import type { Word } from '@/types/type'
import { getRhymes } from '@/routes/datamuse';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';

type Props = {
  rhymes: Word[]
}

const Home = (props: Props) => {
  console.log(props.rhymes);
  return (
    <div className={styles.container}>
      <h1>Poet Editor</h1>
      {
        props.rhymes.map(word => (<h1 key={word.id}>{word.word}</h1>))
      }
      <Button variant="contained">Button</Button>
    </div>
  )
}



export async function getServerSideProps() {
  const rhymes = await getRhymes('fun');
  console.log("rhymes", rhymes)
  return {
    props: {
      rhymes: rhymes,
    }
  }
}

export default Home