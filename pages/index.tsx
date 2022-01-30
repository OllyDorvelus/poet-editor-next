import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Poet Editor</h1>
      <Button variant="contained">Button</Button>
    </div>
  )
}

export default Home
