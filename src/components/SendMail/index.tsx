import { FormEvent, ChangeEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import type { NextPage } from "next";

import styles from "./styles.module.scss";
import { api } from "../../services/api";
import { SentMail } from "../SentMail";

interface MailProps {
  type: string;
  name: string;
  email: string;
}

interface SendMailProps {}

export const SendMail: NextPage<SendMailProps> = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [data, setData] = useState<MailProps>({} as MailProps);

  async function handleSend(event: FormEvent) {
    event.preventDefault();

    if (!validMail()) return;

    const response = await api.post("/mail", data);

    setEmailSent(true);
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function validMail(): boolean {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (!data.email || !reg.test(data.email)) return false;
    if (!data.name) return false;
    if (!data.type) return false;

    return true;
  }

  return !emailSent ? (
    <form onSubmit={handleSend} className={styles.container}>
      <div>
        <label htmlFor="type">
          Finalidade do contato <span>*</span>
        </label>
        <select name="type" onChange={handleChange}>
          <option value=""></option>
          <option value="Acessar seus dados pessoais">
            Acessar seus dados pessoais
          </option>
          <option value="Receber seus dados pessoais em formato simplificado">
            Receber seus dados pessoais em formato simplificado
          </option>
          <option value="Retificar seus dados pessoais">
            Retificar seus dados pessoais
          </option>
          <option value="Solicitar a exclusão dos seus dados pessoais">
            Solicitar a exclusão dos seus dados pessoais
          </option>
          <option value="Confirmar a existência de tratamento dos seus dados pessoais">
            Confirmar a existência de tratamento dos seus dados pessoais
          </option>
          <option value="Outros">Outros</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">
          Nome completo <span>*</span>
        </label>
        <input name="name" type="text" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">
          Email cadastrado na Alpar <span>*</span>
        </label>
        <p>(Se você não possui cadastro na Alpar, informe outro email)</p>
        <input name="email" type="text" onChange={handleChange} />
      </div>

      <aside style={{ display: "none" }}>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA || ""}
          onChange={(e) => console.log(e)}
        />
      </aside>
      <button className={validMail() ? styles.active : undefined} type="submit">
        Enviar
      </button>
    </form>
  ) : (
    <SentMail />
  );
};
