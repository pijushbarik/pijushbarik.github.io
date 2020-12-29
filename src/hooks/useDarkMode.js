import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage("dark_mode", true)

  const enabled = typeof enabledState !== "undefined" ? enabledState : true

  useEffect(() => {
    const element = window.document.body
    if (enabled) {
      if (element.classList.contains("light")) {
        element.classList.replace("light", "dark")
      } else {
        element.classList.add("dark")
      }
    } else {
      if (element.classList.contains("dark")) {
        element.classList.replace("dark", "light")
      } else {
        element.classList.add("light")
      }
    }
  }, [enabled])

  return [enabled, setEnabledState]
}

export default useDarkMode
