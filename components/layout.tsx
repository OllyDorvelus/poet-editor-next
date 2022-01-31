import React, { ReactElement } from 'react'
import Head from 'next/head';

type Props = {
  title: String,
}

export default function Layout(props: Props): ReactElement {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  )
}


