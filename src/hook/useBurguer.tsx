import { createContext, ReactNode, useContext, useState } from "react";

interface BurguerProviderProps {
  children: ReactNode;
}

interface BurguerContextData {
  isActive: boolean;
  setBurguer: (e: boolean) => void;
}

const BurguerContext = createContext<BurguerContextData>(
  {} as BurguerContextData
);

export function BurguerProvider({ children }: BurguerProviderProps) {
  const [burguer, setBurguer] = useState<boolean>(false);

  return (
    <BurguerContext.Provider
      value={{ isActive: burguer, setBurguer: setBurguer }}
    >
      {children}
    </BurguerContext.Provider>
  );
}

export function useBurguer() {
  const context = useContext(BurguerContext);

  return context;
}
