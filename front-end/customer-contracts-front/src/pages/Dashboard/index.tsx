import styles from "./styles.module.css";

import { useForm } from "react-hook-form";

export const DashboardPage = () => {

  const { register, handleSubmit } = useForm<IDataForm>();

  interface IDataForm {
    name: string;
    phone: number;
    email: string;
  }

  const handleData = async (data: IDataForm) => {
    //Axios
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <form 
            className={styles.form}
            onSubmit={handleSubmit(handleData)}
        >
          <h1 className={styles.h1}>Cadastrar contatos</h1>
          <label>
            <input
              type="text"
              placeholder="Nome completo"
              className={styles.input}
              {...register("name")}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Telefone"
              className={styles.input}
              {...register("phone")}
            />
          </label>
          <label>
            <input type="text" placeholder="Email" className={styles.input}
            {...register("email")} 
            />
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
