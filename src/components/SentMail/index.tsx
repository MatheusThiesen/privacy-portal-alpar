import { FaCheck } from "react-icons/fa";
import type { NextPage } from "next";

import styles from "./styles.module.scss";

export const SentMail: NextPage = () => {
  return (
    <div className={styles.container}>
      <span>
        <FaCheck /> Formulário enviado!
      </span>
      <p>
        Para darmos continuidade à sua solicitação com segunrança,{" "}
        <b>verifique seu e-mail e confirme a solicitação em até 24 horas.</b>
      </p>
    </div>
  );
};
