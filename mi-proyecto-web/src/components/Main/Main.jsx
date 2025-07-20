 // Main.jsx
 import styles from './Main.module.css'; // Importamos el archivo CSS Module

 export function Main() {
   return (
     <main className={styles.main}>
       <section className={styles.hero}>Esta es mi primer pagina con React</section>
       <div className={styles.grid}>
         <article className={styles.card}>Somos CECyTEM</article>
       </div>
     </main>
 );
 }