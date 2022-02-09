import React from 'react';
import Landing from '@/components/Landing';
import { WordProvider } from '@/context/WordContext';

type Props = {}

const Home = ({ }: Props) => {

  return (
    <WordProvider>
      <Landing />
    </WordProvider>
  )
}

export default Home