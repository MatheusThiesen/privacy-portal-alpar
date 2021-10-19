import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Burger from "../Burguer";

interface HeaderProps {
  option: "general" | "privacy-policy";
  setOption: React.Dispatch<React.SetStateAction<"general" | "privacy-policy">>;
}

export function Header({ option, setOption }: HeaderProps) {
  return (
    <>
      <header className={styles.headerContainer}>
        <Burger option={option} setOption={setOption} />

        <div className={styles.headerContent}>
          <div className={styles.headerContainerLogo}>
            <img src="/images/logo-alpar.svg" alt="Alpar do Brasil" />
            <span>Privacidade</span>
          </div>

          <nav>
            <Link href="/">
              <a
                onClick={() => {
                  setOption("general");
                }}
                className={option === "general" ? styles.active : ""}
              >
                Visão geral
              </a>
            </Link>
            <Link href="privacy-policy">
              <a
                onClick={() => {
                  setOption("privacy-policy");
                }}
                className={option === "privacy-policy" ? styles.active : ""}
              >
                Política de privacidade
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
