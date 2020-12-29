import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage("dark_mode")

  // If enabledState is defined use it, otherwise fallback to true.
  const enabled = typeof enabledState !== "undefined" ? enabledState : true

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
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
    },
    [enabled] // Only re-call effect when value changes
  )

  // Return enabled state and setter
  return [enabled, setEnabledState]
}

export default useDarkMode
