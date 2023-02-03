import styles from "./styles.module.css";

import { useForm } from "react-hook-form";
import api from "../../services/Api";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<IDataForm>();
  const navigate = useNavigate()

  interface IDataForm {
    email: string;
    password: string;
  }

  const handleData = async (data: IDataForm) => {
    api 
      .post("/login", data)
      .then((res) => {
        window.localStorage.setItem("@TOKEN", res.data.token)
        setTimeout(navigate, 1500, "/dashboard")
      })
  };

  return (
    <main className={styles.main}>
      <form 
        className={styles.form}
        onSubmit={handleSubmit(handleData)}
      >
        <h1 className={styles.h1}>Login</h1>
        <label>
          <input type="text" placeholder="Email" className={styles.input}
          {...register("email")} 
          />
        </label>
        <label>
          <input type="text" placeholder="Senha" className={styles.input}
          {...register("password")} 
          />
        </label>
        <button className={styles.button}>Enviar</button>
      </form>
    </main>
  );
};
