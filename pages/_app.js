import "../styles/reset.css"
import Head from 'next/head'

import { GlobalStyles } from "../styles/globals"

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Saira:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
    </> 
}

export default MyApp
