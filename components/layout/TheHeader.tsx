import Image from "next/image";
import Link from "next/link";

import styles from './TheHeader.module.css'

export default function TheHeader(props: any) {
  return (
    <menu className={styles.mainmenu}>
      <li className={styles.liLogo}>
        <Link href="/" >
          <a>
            <Image src="/imgs/logo-200w.png" alt="Bruno Lamps' Portfolio" layout="fill" />
          </a>
        </Link>
      </li>
      <li style={{ textAlign: "center" }}>
        <Link href="/apps">Apps</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/credits">Credits</Link>
      </li>
    </menu >
  )
}