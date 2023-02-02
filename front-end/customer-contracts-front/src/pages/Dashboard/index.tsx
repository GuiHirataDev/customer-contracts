import styles from "./styles.module.css";

export const DashboardPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <form action="" className={styles.form}>
          <h1 className={styles.h1}>Cadastrar contatos</h1>
          <label>
            <input
              type="text"
              placeholder="Nome completo"
              className={styles.input}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Telefone"
              className={styles.input}
            />
          </label>
          <label>
            <input type="text" placeholder="Email" className={styles.input} />
          </label>
          <button className={styles.button}>Enviar</button>
        </form>
      </section>
      <section className={styles.sectionTwo}>
        <button className={styles.buttonTwo}>Mostrar contatos</button>
        <div className={styles.div}>
            <div className={styles.cardExample}>
                <h2>Joao da Silva</h2>
                <p>joao@hotmail.com</p>
                <p>(19)3222-5672</p>
            </div>
            
        </div>
      </section>
    </main>
  );
};
