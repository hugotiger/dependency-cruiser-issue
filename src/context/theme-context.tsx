import { createContext } from "react"

const ThemeContext = createContext<"light" | "dark">("light")

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
}
