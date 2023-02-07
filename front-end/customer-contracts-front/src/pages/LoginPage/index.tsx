import styles from "./styles.module.css";
import api from "../../services/Api";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<IDataForm>();
  const navigate = useNavigate();
  const [typePassword, setTypePassword] = useState<string>("password");

  const showPassword = (e: any) => {
    e.preventDefault();
    setTypePassword("text");
  };
  const hidePassword = (e: any) => {
    e.preventDefault();
    setTypePassword("password");
  };

  const toastSucess = () => {
    toast.success("Login realizado com sucesso");
  };

  const toastError = () => {
    toast.error("Não foi possível realizar o login");
  };

  interface IDataForm {
    email: string;
    password: string;
  }

  const handleData = async (data: IDataForm) => {
    api
      .post("/login", data)
      .then((res) => {
        window.localStorage.setItem("@TOKEN", res.data.token);
        setTimeout(navigate, 1500, "/dashboard");
      })
      .then(toastSucess)
      .catch(toastError);
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit(handleData)}>
        <h1 className={styles.h1}>Login</h1>
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
            type={typePassword}
            placeholder="Senha"
            className={styles.input}
            {...register("password")}
          />
        </label>
        {typePassword === "password" ? (
          <button onClick={showPassword} className={styles.eyeButton}>
            <AiFillEye />
          </button>
        ) : (
          <button onClick={hidePassword} className={styles.eyeButton}>
            <AiFillEyeInvisible />
          </button>
        )}
        <Link to={"/register"}>Não é um cliente ?</Link>
        <button className={styles.button}>Enviar</button>
      </form>
      <ToastContainer />
    </main>
  );
};
