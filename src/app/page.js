'use client';
import { useState } from 'react';
import { BsSun, BsMoon } from "react-icons/bs";
import styles from './page.module.css';

export default function Home() {
  const [ alterarTema, setAlterarTema ] = useState(false);

  function trocarTemaPagina() {
    setAlterarTema(!alterarTema);
  }

  return (
    <>
      <header>
        <h1>Coffe Shop</h1>
        <button onClick={trocarTemaPagina}>
          { alterarTema ? <BsSun /> : <BsMoon />}
        </button>
      </header>
      <main className={styles.main}>
        <h2></h2>
        <p></p>
        <button></button>
      </main>
    </>
  );
}
