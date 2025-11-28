import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.card}>
        <span className={styles.eyebrow}>Welcome</span>
        <h1 className={styles.title}>Hello there! 👋</h1>
        <p className={styles.copy}>
          This lightweight Next.js experience is ready to deploy to Vercel.
        </p>
      </section>
    </main>
  );
}
