import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav aria-label="Hovednavigation">
        <ul className={styles.links}>
          <li><Link href="/">Forside</Link></li>
          <li><Link href="/posts">Indlæg</Link></li>
          <li><Link href="/about">Om</Link></li>
        </ul>
      </nav>
    </header>
  );
}
