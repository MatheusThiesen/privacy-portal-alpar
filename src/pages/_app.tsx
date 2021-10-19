import type { AppProps } from "next/app";
import { useState } from "react";
import { Header } from "../components/Header";
import { BurguerProvider } from "../hook/useBurguer";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [optionNav, setOptionNav] = useState<"general" | "privacy-policy">(
    "general"
  );

  return (
    <BurguerProvider>
      <Header option={optionNav} setOption={setOptionNav} />

      <Component setOption={setOptionNav} {...pageProps} />
    </BurguerProvider>
  );
}
export default MyApp;
