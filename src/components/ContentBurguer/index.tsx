import type { NextPage } from "next";
import Link from "next/link";
import { useBurguer } from "../../hook/useBurguer";
import styles from "./styles.module.scss";

interface ContentBurguerProps {
  option: "general" | "privacy-policy";
  setOption: React.Dispatch<React.SetStateAction<"general" | "privacy-policy">>;
}

export const ContentBurguer: NextPage<ContentBurguerProps> = ({
  option,
  setOption,
}) => {
  const { setBurguer, isActive } = useBurguer();

  return (
    <div className={isActive ? styles.container : styles.containerOff}>
      <div className={styles.content}>
        <Link href="/" prefetch>
          <a
            onClick={() => {
              setOption("general");
              setBurguer(false);
            }}
            className={option === "general" ? styles.activeLink : ""}
          >
            Visão geral
          </a>
        </Link>
        <Link href="/privacy-policy" prefetch>
          <a
            onClick={() => {
              setOption("privacy-policy");
              setBurguer(false);
            }}
            className={option === "privacy-policy" ? styles.activeLink : ""}
          >
            Política de privacidade
          </a>
        </Link>
      </div>
      <div
        className={styles.out}
        onClick={() => {
          setBurguer(false);
        }}
      ></div>
    </div>
  );
};
