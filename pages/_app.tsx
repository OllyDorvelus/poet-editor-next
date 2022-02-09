import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WordProvider } from '@/context/WordContext';


function MyApp({ Component, pageProps }: AppProps) {

  return <> <WordProvider><Component {...pageProps} /></WordProvider>  </>
}

export default MyApp
