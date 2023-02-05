import styles from "./styles.module.css";
import api from "../../services/Api";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IDataForm>();
  const navigate = useNavigate();

  const toastSucess = () => {
    toast.success("Cliente cadastrado com sucesso");
  };

  const toastError = () => {
    toast.error("Não foi possível realizar o cadastro");
  };

  interface IDataForm {
    name: string;
    email: string;
    phone: number;
    password: string;
  }

  const handleData = async (data: IDataForm) => {
    api
      .post("/customers", data)
      .then((res) => {
        setTimeout(navigate, 1500, "/login");
      })
      .then(toastSucess)
      .catch(toastError);
  };

  return (
    <main className={styles.main}>
      <Link to={"/login"} className={styles.link}>
        <BsFillArrowLeftSquareFill />
      </Link>
      <form className={styles.form} onSubmit={handleSubmit(handleData)}>
        <h1 className={styles.h1}>Cadastro</h1>
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
          <input
            type="text"
            placeholder="Email"
            className={styles.input}
            {...register("email")}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Senha"
            className={styles.input}
            {...register("password")}
          />
        </label>
        <button className={styles.button}>Enviar</button>
      </form>
      <ToastContainer />
    </main>
  );
};
