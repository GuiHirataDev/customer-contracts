import styles from "./styles.module.css";
import api from "../../services/Api";

import { useForm } from "react-hook-form";
import { useState } from "react";

export const DashboardPage = () => {
  const { register, handleSubmit } = useForm<IDataForm>();
  const [contacts, setContacts] = useState<IDataContacts[]>([]);

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
        console.log(res)
      });
  };

  const handleContacts = async () => {
    api
      .get("/contacts", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("@TOKEN")}` 
        }
      }).then(res => setContacts(res.data))
  }

  return (
    <main className={styles.main}>
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
        <button 
          className={styles.buttonTwo}
          onClick={handleContacts}
        >Mostrar contatos</button>
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
    </main>
  );
};
