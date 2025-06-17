import noop from "lodash/noop"
import { createContext } from "react"

const ThemeContext = createContext<"light" | "dark">("light")

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // This is just here as an example of a violation.
  // In a real application, you'd have some actual logic using lodash here.
  noop()

  return <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
}
