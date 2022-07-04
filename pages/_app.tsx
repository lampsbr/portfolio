import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'

import type { AppProps } from 'next/app'
import TheHeader from '../components/layout/TheHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={styles.container}>
<TheHeader />
  <Component {...pageProps} />
  </div>
}

export default MyApp
