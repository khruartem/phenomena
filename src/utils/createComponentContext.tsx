import { createContext, useContext, type ReactNode } from "react";

export function createComponentContext<T>(initialValue: T) {
  // 1. Создаем сам контекст
  const Context = createContext<T>(initialValue);

  // 2. Создаем провайдер
  const Provider = ({ children, value }: { children: ReactNode; value: T }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  // 3. Создаем хук с проверкой на наличие провайдера (чтобы не возвращал undefined)
  const useContextHook = () => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error("useContext must be used within its Provider");
    }
    return context;
  };

  return [ Provider, useContextHook ] as const;
}
