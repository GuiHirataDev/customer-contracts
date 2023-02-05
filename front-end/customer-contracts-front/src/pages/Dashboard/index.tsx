import styles from "./styles.module.css";
import api from "../../services/Api";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export const DashboardPage = () => {
  const { register, handleSubmit } = useForm<IDataForm>();
  const [contacts, setContacts] = useState<IDataContacts[]>([]);

  const toastSucess = () => {
    toast.success("Contato cadastrado com sucesso");
  };

  const toastError = () => {
    toast.error("Não foi possível realizar o cadastro");
  };

  const toastErrorGet = () => {
    toast.error("Você não tem permissão para acessar os contatos");
  };

  interface IDataForm {
    name: string;
    phone: number;
    email: string;
  }

  interface IDataContacts extends IDataForm {
    id: string;
  }

  const handleData = async (data: IDataForm) => {
    api
      .post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .then(toastSucess)
      .catch(toastError);
  };

  const handleContacts = async () => {
    api
      .get("/contacts", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => setContacts(res.data))
      .catch(toastErrorGet);
  };

  return (
    <main className={styles.main}>
      <Link to={"/login"} className={styles.link}>
        <AiFillHome />
      </Link>
      <section className={styles.section}>
        <form className={styles.form} onSubmit={handleSubmit(handleData)}>
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
            <input
              type="text"
              placeholder="Email"
              className={styles.input}
              {...register("email")}
            />
          </label>
          <button className={styles.button}>Enviar</button>
        </form>
      </section>
      <section className={styles.sectionTwo}>
        <button className={styles.buttonTwo} onClick={handleContacts}>
          Mostrar contatos
        </button>
        <div className={styles.div}>
          {contacts.map((elem) => {
            return (
              <div className={styles.cardExample} key={elem.id}>
                <h2>{elem.name}</h2>
                <p className={styles.email}>{elem.email}</p>
                <p>{elem.phone}</p>
              </div>
            );
          })}
        </div>
      </section>
      <ToastContainer />
    </main>
  );
};
