import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <header>
        <Link href="">Pizza shop</Link>
        <nav>
            <Link href={''}>Home</Link>
            <Link href={''}>Menu</Link>
            <Link href={''}>About</Link>
            <Link href={''}>Contact</Link>
            <Link href={''}>Login</Link>

        </nav>
    </header>
    </>
  )
}
