import type { NextPage } from "next";

import styles from "./styles.module.scss";

export const Summary: NextPage = ({ children }) => {
  return <ul className={styles.container}>{children}</ul>;
};
