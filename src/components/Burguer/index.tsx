import React from "react";
import { ContentBurguer } from "../ContentBurguer";
import { useBurguer } from "../../hook/useBurguer";
import styles from "./styles.module.scss";

interface BurguerProps {
  option: "general" | "privacy-policy";
  setOption: React.Dispatch<React.SetStateAction<"general" | "privacy-policy">>;
}

const Burger = ({ option, setOption }: BurguerProps) => {
  const { isActive, setBurguer } = useBurguer();

  return (
    <>
      <div
        className={!isActive ? styles.content : styles.contentOff}
        onClick={() => setBurguer(!isActive)}
      >
        <div />
        <div />
        <div />
      </div>

      {isActive && <ContentBurguer option={option} setOption={setOption} />}
    </>
  );
};
export default Burger;
