import styles from "./styles.module.css"

import { useForm } from "react-hook-form";

export const RegisterPage = () => {

  const { register, handleSubmit } = useForm<IDataForm>()

  interface IDataForm {
    name: string;
    email: string;
    phone: number;
    password: string;
  }

  const handleData = async (data: IDataForm) => {
    // Axios
  }

  return (
    <main className={styles.main}>
      <form 
        className={styles.form}
        onSubmit={handleSubmit(handleData)}
      >
        <h1 className={styles.h1}>Cadastro</h1>
        <label>
          <input type="text" placeholder="Nome completo"
          className={styles.input} 
          {...register("name")}
          />
        </label>
        <label>
          <input type="text" placeholder="Telefone"
          className={styles.input}
          {...register("phone")} 
          />
        </label>
        <label>
          <input type="text" placeholder="Email" 
          className={styles.input}
          {...register("email")} 
          />
        </label>
        <label>
          <input type="text" placeholder="Senha" 
          className={styles.input}
          {...register("password")} 
          />
        </label>
        <button className={styles.button}>Enviar</button>
      </form>
    </main>
  );
};
