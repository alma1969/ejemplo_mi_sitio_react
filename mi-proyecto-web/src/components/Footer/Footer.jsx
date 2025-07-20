 // Footer.jsx
 import styles from './Footer.module.css'; // Importamos los estilos del módulo
 
 export function Footer() {
   return (
     <footer className={styles.footer}>
       <p>© {new Date().getFullYear()} Mi Sitio</p>
       <div className={styles.socialLinks}>Alma Esquivel</div>
     </footer>
 );
 }