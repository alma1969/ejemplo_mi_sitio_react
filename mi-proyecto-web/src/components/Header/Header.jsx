 // Header.jsx
 import styles from './Header.module.css'; // Importamos los estilos del CSS Module
 
 export function Header() {
   return (
     <header className={styles.header}>
       <div className={styles.container}>
         <h1>Hola desde Netlify con despliegue continuo</h1>
         <nav>...</nav>
       </div>
     </header>
 );
 }