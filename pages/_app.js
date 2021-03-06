import "../styles/reset.css"
import Head from 'next/head'

import { GlobalStyles } from "../styles/globals"

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Component {...pageProps} />
    </> 
}

export default MyApp
