import { FormEvent, ChangeEvent, useState, useRef, useEffect } from "react";
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
  const recaptchaRef = useRef(null);

  const [emailSent, setEmailSent] = useState(false);
  const [data, setData] = useState<MailProps>({} as MailProps);
  const [update, setUpdate] = useState(1);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(
    () => {
      setIsValid(validMail());
    },
    //@ts-ignore
    [recaptchaRef, data, update]
  );

  async function handleSend(event: FormEvent) {
    event.preventDefault();

    if (!isValid) return;

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

    //@ts-ignore
    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) return false;

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
          <option value="Solicitar a exclus??o dos seus dados pessoais">
            Solicitar a exclus??o dos seus dados pessoais
          </option>
          <option value="Confirmar a exist??ncia de tratamento dos seus dados pessoais">
            Confirmar a exist??ncia de tratamento dos seus dados pessoais
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
        <p>(Se voc?? n??o possui cadastro na Alpar, informe outro email)</p>
        <input name="email" type="text" onChange={handleChange} />
      </div>

      <aside>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA || ""}
          onChange={() => setUpdate(update + 1)}
        />
      </aside>
      <button className={isValid ? styles.active : undefined} type="submit">
        Enviar
      </button>
    </form>
  ) : (
    <SentMail />
  );
};
