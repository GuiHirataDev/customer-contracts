import styles from "./styles.module.css"

export const LoginPage = () => {
  return (
    <main className={styles.main}>
      <form action="" className={styles.form}>
        <h1 className={styles.h1}>Login</h1>
        <label>
          <input type="text" placeholder="Email" className={styles.input} />
        </label>
        <label>
          <input type="text" placeholder="Senha" className={styles.input} />
        </label>
        <button className={styles.button}>Enviar</button>
      </form>
    </main>
  );
};
